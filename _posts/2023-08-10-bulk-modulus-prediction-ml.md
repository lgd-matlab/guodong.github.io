---
title: "Bulk Modulus Prediction Using Machine Learning and Materials Informatics"
date: 2023-08-10
permalink: /posts/2023/08/bulk-modulus-prediction-ml/
tags:
  - machine learning
  - materials science
  - bulk modulus
  - matminer
  - DFT
categories:
  - DFT
  - Machine Learning
---

# Bulk Modulus Prediction Using Machine Learning

## Introduction

The bulk modulus (K) is defined as:

$$K=-V {\partial p\over \partial V}$$

The bulk modulus (K), also known as the incompressibility modulus, is a measure of the extent to which a material deforms when subjected to pressure on all surfaces. It is defined as the pressure required to produce a unit relative volume contraction. The basic unit in the SI system is the Pascal.

## Dataset Description

**Data Meaning:**

- `G_Reuss`: Lower bound of the shear modulus for polycrystalline materials
- `G_VRH`: Average of G_Reuss and G_Voigt
- `G_Voigt`: Upper bound of the shear modulus for polycrystalline materials
- `K_Reuss`: Lower bound of the bulk modulus for polycrystalline materials
- `K_VRH`: Average of K_Reuss and K_Voigt
- `K_Voigt`: Upper bound of the bulk modulus for polycrystalline materials
- `cif`: Optional: Description string of the structure
- `compliance_tensor`: Tensor describing elastic behavior
- `elastic_anisotropy`: Measure of material's elastic directional dependence, always >= 0
- `elastic_tensor`: Tensor describing elastic behavior corresponding to IEEE orientation, symmetric to crystal structure
- `elastic_tensor_original`: Tensor describing elastic behavior, asymmetric, corresponding to POSCAR conventional standard cell orientation
- `formula`: Chemical composition of the material
- `kpoint_density`: Optional: Sampling parameter in calculation
- `material_id`: Material's Materials Project ID
- `nsites`: Number of atoms in the computed unit cell
- `poisson_ratio`: Describes transverse response to load
- `poscar`: Optional: POSCAR data
- `space_group`: Space group of the material's crystal structure
- `structure`: Pandas series defining the material's structure
- `volume`: Unit cell volume in cubic angstroms; for supercell calculations, this is the volume of the entire supercell

## Data Import and Processing


```python
# Import data
from matminer.datasets import load_dataset
data=load_dataset('elastic_tensor_2015',data_home='.')
```


```python
data.head()
```


```python
data.describe()
```

Our goal is to predict `K_VRH` and `G_VRH` (Voigt-Reuss-Hill averages of bulk modulus and shear modulus, respectively) and `elastic_anisotropy`.

Remove irrelevant columns: volume, nsites, compliance_tensor, elastic_tensor, elastic_tensor_original, G_Reuss, G_Voigt, K_Reuss, K_Voigt, cif, kpoint_density, poscar


```python
deleted_col=['volume','nsites','compliance_tensor',
             'elastic_tensor','elastic_tensor_original','G_Reuss',
             'G_Voigt','K_Reuss','K_Voigt','cif',
             'kpoint_density','poscar']
data=data.drop(deleted_col,axis=1)
```


```python
data.head()
```


```python
data.describe()
```

## Adding Descriptors to Data

We are looking for relationships between inputs (material composition and crystal structure) and outputs (elastic properties such as K_VRH, G_VRH, and elastic_anisotropy). To find such relationships, we need to "featurize" the input data to make them meaningful numerical representations of the underlying physical quantities.

For example, one "feature" or "descriptor" of a material composition like Nb4CoSi could be the standard deviation of Pauling electronegativity of elements in the compound (weighted by stoichiometry). Higher values indicate more ionic compounds, while lower values tend toward covalent or ionic character.

A descriptor for crystal structure might be the average coordination number of sites; higher coordination numbers indicate more bonds and thus possibly harder materials.

Using matminer, we can start generating hundreds of possible descriptors from the available descriptor library. Data mining techniques can help narrow down the scope of descriptors most relevant to the target problem using available output data as guidance.

### Adding Composition-Based Features

Matminer has a major category of features that use chemical composition to characterize input data. Let's add some composition-based features to the DataFrame.

The first step is to have a column representing chemical composition as a pymatgen Composition object. One way to do this is to use the conversions in matminer to convert String composition (our previous `formula` column) to pymatgen Composition.


```python
from matminer.featurizers.conversions import StrToComposition
data=StrToComposition().featurize_dataframe(df=data,col_id='formula')
data.head()
```

Use a featurizer in matminer to add a set of descriptors to the DataFrame.


```python
from matminer.featurizers.composition import ElementProperty
ep_feat=ElementProperty.from_preset(preset_name='magpie') # Return ElementProperty from preset string
data=ep_feat.featurize_dataframe(data,'composition') # Convert composition to features
data.head()
```

Additionally, note that each featurizer also has a `citations()` function that tells you where to find more information about the featurizer.


```python
ep_feat.citations()
```

Output:
```
['@article{ward_agrawal_choudary_wolverton_2016, title={A general-purpose machine learning framework for predicting properties of inorganic materials}, volume={2}, DOI={10.1038/npjcompumats.2017.28}, number={1}, journal={npj Computational Materials}, author={Ward, Logan and Agrawal, Ankit and Choudhary, Alok and Wolverton, Christopher}, year={2016}}']
```

### Adding More Composition-Based Features

Besides ElementProperty, there are many composition-based features available in `matminer.featurizers.composition`. Let's try the ElectronegativityDiff feature, which requires knowing the oxidation states of various elements in the composition. We can use the conversions package to try to guess oxidation states, then apply the ElectronegativityDiff feature to this column.


```python
from matminer.featurizers.conversions import CompositionToOxidComposition
from matminer.featurizers.composition import OxidationStates
```


```python
data=CompositionToOxidComposition().featurize_dataframe(data,'composition')
data.head()
```


```python
os_feat=OxidationStates()
data=os_feat.featurize_dataframe(data,'composition_oxid')
data.head()
```

### Adding Structure-Based Features

Not all featurizers work with composition. Matminer can also analyze and characterize crystal structures. Let's start by adding some simple density features.


```python
from matminer.featurizers.structure import DensityFeatures

df_feat=DensityFeatures()
data=df_feat.featurize_dataframe(data,'structure') # Input structure column
data.head()
```

View newly added features:


```python
df_feat.feature_labels()
```




    ['density', 'vpa', 'packing fraction']



## Using Machine Learning Models

### Define Input and Output Data

We will use `K_VRH` (bulk modulus) as the output.

For inputs, we will use all the features we generated - everything except output data and non-numeric columns (such as composition and structure).


```python
y=data['K_VRH'].values
del_col=['G_VRH','formula','material_id','elastic_anisotropy',
        'poisson_ratio','composition','composition_oxid','K_VRH','structure']
X=data.drop(del_col,axis=1).values
```


```python
X.shape
```




    (1181, 140)



### Build a Linear Regression Model using scikit-learn


```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

lr=LinearRegression()

lr.fit(X,y)
```




    LinearRegression()




```python
print('training R2=%.3f'%lr.score(X,y))
```

    training R2=0.928



```python
print('training RMSE:%.3f'%np.sqrt(mean_squared_error(y,lr.predict(X))))
```

    training RMSE:19.587


This looks reasonable since linear regression is a simple (high bias) model. However, to truly verify we haven't overfit, we need to check cross-validation scores rather than fit scores.


```python
from sklearn.model_selection import KFold,cross_val_score

# Use 10-fold cross-validation
crossvalidation=KFold(n_splits=10,shuffle=True,random_state=1)
scores=cross_val_score(lr,X,y,scoring='neg_mean_squared_error',
                      cv=crossvalidation)

rmse_scores=[np.sqrt(abs(s)) for s in scores]
r2_scores=cross_val_score(lr,X,y,scoring='r2',cv=crossvalidation)
```


```python
print(' mean R2:%.3f'%np.mean(r2_scores))
```

     mean R2:0.903



```python
print('mean RMSE:%.3f'%np.mean(rmse_scores))
```

    mean RMSE:22.377



```python
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import cross_val_predict
```


```python
sns.scatterplot(y,cross_val_predict(lr,X,y,cv=crossvalidation))
plt.plot(np.arange(0,400,1),np.arange(0,400,1),'r--')
```

![Linear regression predictions vs actual](https://i-blog.csdnimg.cn/blog_migrate/6634dc7056b32d5ce1d71d4630d1ee68.png#pic_center)

*Figure 1: Linear regression cross-validation predictions vs. actual bulk modulus values. The red dashed line represents perfect prediction.*

### Try a Random Forest Model


```python
from sklearn.ensemble import RandomForestRegressor

rf=RandomForestRegressor(n_estimators=50,random_state=1)

rf.fit(X,y)
print('training R2=%.3f'%rf.score(X,y))
```

    training R2=0.989



```python
print('training RMSE:%.3f'%np.sqrt(mean_squared_error(y,rf.predict(X))))
```

    training RMSE:7.687



```python
# Use 10-fold cross-validation
crossvalidation=KFold(n_splits=10,shuffle=True,random_state=1)
scores=cross_val_score(rf,X,y,scoring='neg_mean_squared_error',
                      cv=crossvalidation)

rmse_scores=[np.sqrt(abs(s)) for s in scores]
r2_scores=cross_val_score(rf,X,y,scoring='r2',cv=crossvalidation)
```


```python
print(' mean R2:%.3f'%np.mean(r2_scores))
```

     mean R2:0.924



```python
print('mean RMSE:%.3f'%np.mean(rmse_scores))
```

    mean RMSE:19.277



```python
cm = plt.cm.get_cmap('RdYlBu')
plt.scatter(y,cross_val_predict(rf,X,y,cv=crossvalidation),cmap=cm,c=data['poisson_ratio'])
plt.plot(np.arange(0,400,1),np.arange(0,400,1),'r--')
plt.colorbar()
```

![Random forest predictions colored by Poisson ratio](https://i-blog.csdnimg.cn/blog_migrate/c6e90211af54519d2d98185b50b8af65.png#pic_center)

*Figure 2: Random forest cross-validation predictions vs. actual bulk modulus, with points colored by Poisson ratio. The Random Forest model shows significantly improved performance over linear regression.*

### Split Training and Test Sets


```python
# Split training and test sets
from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=1)

```


```python
rf_reg = RandomForestRegressor(n_estimators=50, random_state=1)
rf_reg.fit(X_train, y_train)
```




    RandomForestRegressor(n_estimators=50, random_state=1)




```python
print('training R2:%.3f'%rf_reg.score(X_train,y_train))
```

    training R2:0.987



```python
print('training RMSE:%.3f'%np.sqrt(mean_squared_error(y_train,rf_reg.predict(X_train))))
```

    training RMSE:8.259



```python
print('testing R2:%.3f'%rf_reg.score(X_test,y_test))
```

    testing R2:0.942



```python
print('test RMSE:%.3f'%np.sqrt(mean_squared_error(y_test,rf_reg.predict(X_test))))
```

    test RMSE:16.928



```python
sns.histplot(x=y_train-rf_reg.predict(X_train),stat='probability',color='r',
             label='train')
sns.histplot(x=y_test-rf_reg.predict(X_test),stat='probability',color='b',
             label='test')
plt.legend(loc='best')
```

![Prediction error distribution](https://i-blog.csdnimg.cn/blog_migrate/6a8cef60b458e000730d05a89a46b5ff.png#pic_center)

*Figure 3: Distribution of prediction errors for training (red) and test (blue) sets. Both distributions are centered near zero, indicating unbiased predictions with good generalization.*

### Feature Importance Analysis

Let's examine what are the most important features used by the random forest model.


```python
importances=rf.feature_importances_
included=data.drop(del_col,axis=1).columns
```


```python
indices=np.argsort(importances)[::-1]
```

**Note:**
- `b = a[i:j:s]` format: i,j are indices, s is step (default 1)
- `a[i:j:1]` is equivalent to `a[i:j]`
- When s<0: i defaults to -1; j defaults to -len(a)-1
- So `a[::-1]` is equivalent to `a[-1:-len(a)-1:-1]`, copying from last to first element


```python
chart=sns.barplot(x=included[indices][0:15],y=importances[indices][0:15],
           palette='BuGn_r')
chart.set_xticklabels(chart.get_xticklabels(),
                      rotation=90, horizontalalignment='right')
```

![Feature importance for bulk modulus prediction](https://i-blog.csdnimg.cn/blog_migrate/3870e71a0ecc26b00b176fe71a66831f.png#pic_center)

*Figure 4: Top 15 most important features for predicting bulk modulus. Melting temperature-related features and volume per atom (vpa) are the most influential predictors.*

## Summary

This study demonstrates the application of machine learning and materials informatics for predicting bulk modulus:

1. **Dataset**: Used the Materials Project elastic tensor database (2015) containing 1,181 materials with DFT-calculated elastic properties

2. **Feature Engineering**: Utilized matminer library to generate:
   - Composition-based features using ElementProperty (Magpie preset)
   - Oxidation state features using CompositionToOxidComposition
   - Structure-based features using DensityFeatures
   - Total: 140 features generated from composition and structure

3. **Model Comparison**:
   - Linear Regression: R²=0.903, RMSE=22.377 GPa (cross-validation)
   - Random Forest: R²=0.924, RMSE=19.277 GPa (cross-validation)
   - Random Forest significantly outperformed Linear Regression

4. **Feature Importance**: The most important features for bulk modulus prediction include:
   - MagpieData mean MeltingT (melting temperature)
   - Volume per atom (vpa)
   - MagpieData minimum/maximum MeltingT
   - Density
   - MagpieData mean GSvolume_pa
   - Features related to melting point and volume/density are most crucial

5. **Validation**:
   - Training set: R²=0.987, RMSE=8.259 GPa
   - Test set: R²=0.942, RMSE=16.928 GPa
   - Good generalization with minimal overfitting

This machine learning approach demonstrates that materials informatics can effectively predict bulk modulus from composition and structure alone, providing a fast screening tool complementary to expensive DFT calculations.
