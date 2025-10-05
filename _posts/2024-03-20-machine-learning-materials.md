---
title: 'Machine Learning for Materials Science: A Practical Introduction'
date: 2024-03-20
permalink: /posts/2024/03/machine-learning-materials/
tags:
  - Machine Learning
  - Materials Science
  - Python
  - SISSO
  - SHAP
---

How to apply machine learning techniques to materials science problems, with emphasis on interpretable models.

## Coming Soon

This post will cover:
- Why machine learning for materials science
- Essential Python libraries (scikit-learn, pymatgen, matminer)
- Workflow for predicting material properties
- Feature engineering for materials data
- Interpretable models with SISSO and SHAP
- My research applications and lessons learned

*This tutorial is currently in preparation. Check back soon for the complete guide!*

```python
# Core libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Machine learning
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score

# Materials science specific
from pymatgen.core import Structure, Composition
from matminer.featurizers.composition import ElementProperty
import ase
```

## Workflow Example: Predicting Formation Energy

### 1. Data Preparation

```python
import pandas as pd
from pymatgen.core import Composition

# Load your DFT data
data = pd.read_csv('formation_energies.csv')

# Example: composition to features
def composition_to_features(formula):
    comp = Composition(formula)
    return {
        'avg_atomic_mass': comp.average_electroneg,
        'avg_ionic_radius': comp.average_ionic_radius,
        'n_elements': len(comp.elements),
        # Add more features...
    }

# Apply to dataset
features = data['formula'].apply(composition_to_features)
X = pd.DataFrame(features.tolist())
y = data['formation_energy']
```

### 2. Model Training

```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"MAE: {mae:.3f} eV")
print(f"R²: {r2:.3f}")
```

### 3. Feature Importance with SHAP

```python
import shap

# Create explainer
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Visualize
shap.summary_plot(shap_values, X_test)
```

## Interpretable Models: SISSO

SISSO (Sure Independence Screening and Sparsifying Operator) creates simple, interpretable formulas:

**Example Output:**
```
E_formation = 2.3 * (χ_avg - r_ionic) + 1.5 * ΔE_cohesive
```

**Advantages:**
- Physically interpretable
- Simple formulas
- Generalizes well
- Guides understanding

**My Experience:** In my research on HCP metals, SISSO helped identify that interstitial stability depends primarily on electronic charge transfer and local strain, not complex non-linear interactions.

## Practical Tips

### 1. Feature Engineering is Key
```python
# Good features for materials:
features = {
    'electronic': ['electronegativity', 'valence_electrons'],
    'structural': ['atomic_radius', 'coordination_number'],
    'thermodynamic': ['melting_point', 'cohesive_energy']
}
```

### 2. Cross-validation
```python
from sklearn.model_selection import KFold

kfold = KFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=kfold, 
                         scoring='neg_mean_absolute_error')
print(f"CV MAE: {-scores.mean():.3f} ± {scores.std():.3f}")
```

### 3. Domain Knowledge
- Physics-informed features outperform raw data
- Check if predictions violate physical laws
- Validate on diverse test sets

## Common Pitfalls

❌ **Small datasets**: Use simpler models or data augmentation
❌ **Overfitting**: Always use cross-validation
❌ **Extrapolation**: ML models perform poorly outside training range
❌ **Ignoring physics**: Black-box models can give unphysical results

## Tools and Resources

**Software:**
- [Matminer](https://hackingmaterials.lbl.gov/matminer/): Feature generation
- [Pymatgen](https://pymatgen.org/): Materials structure manipulation
- [SISSO](https://github.com/rouyang2017/SISSO): Symbolic regression
- [SHAP](https://github.com/slundberg/shap): Model interpretation

**Databases:**
- Materials Project
- AFLOW
- OQMD
- NOMAD

## My Research Application

In my recent work (Lu et al., Materials & Design, 2025), I used:
1. **DFT calculations**: 1,050 HCP structures
2. **SISSO**: Developed interpretable formulas
3. **SHAP**: Identified key physical features
4. **Result**: Accurate prediction with physical insights

## Next Steps

- Try the example code on your own data
- Explore different ML algorithms
- Read recent papers in computational materials science
- Check my [GitHub](https://github.com/lgd-matlab) for more examples!

Stay tuned for more tutorials on advanced ML techniques!
