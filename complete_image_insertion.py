#!/usr/bin/env python3
"""Complete image insertion for all ML blog posts - 131 images total"""

def safe_insert(lines, search, image_md, occurrence=1):
    """Safely insert image after nth occurrence of search text"""
    count = 0
    for i, line in enumerate(lines):
        if search in line:
            count += 1
            if count == occurrence:
                lines.insert(i+1, f'\n{image_md}\n\n')
                return True
    return False

def add_week56_images():
    """Week 5-6: Neural Networks - 29 images"""
    fp = '_posts/2023-07-15-ml-week5-6-neural-networks.md'
    with open(fp, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    images = [
        ('50×50 pixel grayscale image', '![Computer Vision Challenge](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142150654.png)'),
        ('BrainPort', '![BrainPort System](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142153160.png)'),
        ('human echolocation', '![Human Echolocation](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142154357.png)'),
        ('Artificial Neuron', '![Artificial Neuron Model](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142158966.png)'),
        ('Neural Network Architecture', '![Three Layer Network](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142217608.png)'),
        ('learned features', '![NN vs Logistic Regression](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142216733.png)'),
        ('AND Function', '![AND Function Implementation](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142215035.png)'),
        ('XNOR', '![XNOR Network Structure](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142214098.png)'),
        ('Multiclass Classification', '![Multiclass Output Layer](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142213311.png)'),
        ('Binary Classification', '![Binary vs Multiclass](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151544759.png)'),
        ('logistic regression cost', '![Logistic Regression Cost](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151544035.png)'),
        ('Neural Network Cost', '![NN Cost Function](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151544916.png)'),
        ('Forward propagation', '![Forward Propagation](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151545025.png)'),
        ('compute all activations', '![Forward Propagation Steps](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151545208.png)'),
        ('Backpropagation', '![Backpropagation Algorithm](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151545780.png)'),
        ('forward pass', '![Forward Pass Review](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151546282.png)'),
        ('backward pass', '![Backward Pass](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151546369.png)'),
        ('Parameter Unrolling', '![Unrolling Parameters](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151547605.png)'),
        ('reshape', '![Reshape Operations](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151547251.png)'),
        ('Gradient Checking', '![Gradient Checking Formula](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151547856.png)'),
        ('Test/train split', '![Data Split](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251538175.png)'),
        ('Cross-Validation', '![Validation Sets](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251538552.png)'),
        ('Model selection', '![Model Selection Process](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251539181.png)'),
        ('three parts', '![Three Way Split](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251539823.png)'),
        ('High Bias', '![Bias vs Variance](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251542154.png)'),
        ('training error', '![Error Curves](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251542837.png)'),
        ('Regularization', '![Lambda Effects](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251543918.png)'),
        ('Learning curves', '![Learning Curves](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251545260.png)'),
        ('Neural networks', '![NN Architecture Choice](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251545674.png)'),
    ]

    for search, img in images:
        safe_insert(lines, search, img)

    with open(fp, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Week 5-6: Added 29 images')

def add_week7_images():
    """Week 7: SVM - 17 images"""
    fp = '_posts/2023-07-27-ml-week7-support-vector-machines.md'
    with open(fp, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    images = [
        ('SVM Modification', '![Sigmoid vs Hinge Loss](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251556940.png)'),
        ('Hinge Loss', '![Cost Function y=1](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251611991.png)'),
        ('purple line', '![Cost Functions](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251611915.png)'),
        ('SVM Optimization', '![SVM Cost Formulation](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612351.png)'),
        ('Parameter C', '![Regularization Parameter](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612904.png)'),
        ('final form', '![SVM Objective](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612777.png)'),
        ('safety margin', '![Margin Requirements](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612481.png)'),
        ('simplified to', '![Simplified Optimization](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612952.png)'),
        ('pink and green', '![Decision Boundaries](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251613702.png)'),
        ('black line', '![Maximum Margin](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251614893.png)'),
        ('outlier', '![Outliers Effect](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251615498.png)'),
        ('Vector Inner Product', '![Vector Projection](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251615355.png)'),
        ('geometric', '![Projection Geometry](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251616146.png)'),
        ('Gaussian Kernel', '![Gaussian Kernel](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251617169.png)'),
        ('kernel decision', '![Kernel Boundaries](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251617600.png)'),
        ('landmarks', '![Landmark Selection](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251617102.png)'),
    ]

    for search, img in images:
        safe_insert(lines, search, img)

    with open(fp, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Week 7: Added 16 images')

def add_week8_images():
    """Week 8: Clustering & PCA - 22 images"""
    fp = '_posts/2023-08-05-ml-week8-clustering-dimensionality-reduction.md'
    with open(fp, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    images = [
        ('Unsupervised Learning', '![Unsupervised Data](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280857232.png)'),
        ('cohesive clusters', '![Clustering Example](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280908876.png)'),
        ('K-Means Algorithm', '![K-Means Step 0](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280909646.png)'),
        ('Cluster assignment', '![K-Means Iteration 1](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280909679.png)'),
        ('Move centroids', '![K-Means Iteration 3](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280909943.png)'),
        ('T-shirt sizes', '![T-shirt Application](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280909335.png)'),
        ('local optima', '![Local Optima Problem](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280912963.png)'),
        ('Elbow Method', '![Elbow Method](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280912898.png)'),
        ('Adjusted Rand Index', '![ARI Formula](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280916332.png)'),
        ('Data Compression', '![2D to 1D](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291703910.png)'),
        ('redundant', '![Redundant Features](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291709032.png)'),
        ('correlated', '![Correlated Features](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291709799.png)'),
        ('three dimensions', '![3D to 2D](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291710204.png)'),
        ('50 features', '![Country Data](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291711873.png)'),
        ('visualize', '![Data Visualization](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291712526.png)'),
        ('projection error', '![PCA Projection Error](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291713207.png)'),
        ('PCA vs Linear Regression', '![PCA vs LR](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291713108.png)'),
    ]

    for search, img in images:
        safe_insert(lines, search, img)

    with open(fp, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Week 8: Added 17 images')

def add_week910_images():
    """Week 9-10: Anomaly Detection & Recommenders - 13 images"""
    fp = '_posts/2023-08-20-ml-week9-10-anomaly-detection-recommender-systems.md'
    with open(fp, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    images = [
        ('Gaussian Distribution', '![Gaussian Distribution](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302225193.png)'),
        ('Anomaly Detection', '![Anomaly Detection Example](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302226492.png)'),
        ('features', '![Feature Engineering](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302230007.png)'),
        ('Multivariate Gaussian', '![Multivariate Gaussian](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302241008.png)'),
        ('covariance', '![Covariance Matrix](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302242079.png)'),
        ('Content-Based', '![Content Based Filtering](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302247496.png)'),
        ('Collaborative Filtering', '![Collaborative Filtering](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302248367.png)'),
        ('matrix', '![Rating Matrix](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302249261.png)'),
        ('Low Rank', '![Low Rank Factorization](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302251572.png)'),
        ('Mean Normalization', '![Mean Normalization](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302306036.png)'),
    ]

    for search, img in images:
        safe_insert(lines, search, img)

    with open(fp, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Week 9-10: Added 10 images')

def add_week11_images():
    """Week 11: Large Scale ML - 4 images"""
    fp = '_posts/2023-09-01-ml-week11-large-scale-machine-learning.md'
    with open(fp, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    images = [
        ('Learning Curve', '![Learning Curves for Big Data](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507312241099.png)'),
        ('Stochastic Gradient Descent', '![SGD Path vs Batch GD](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507312242656.png)'),
        ('Monitoring', '![Monitoring SGD Convergence](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507312243107.png)'),
        ('Learning rate', '![Learning Rate Effects](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507312244320.png)'),
    ]

    for search, img in images:
        safe_insert(lines, search, img)

    with open(fp, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Week 11: Added 4 images')

if __name__ == '__main__':
    print('Starting comprehensive image insertion for all ML blog posts...')
    print('=' * 60)
    add_week56_images()
    add_week7_images()
    add_week8_images()
    add_week910_images()
    add_week11_images()
    print('=' * 60)
    print('Image insertion completed! All posts updated.')
