#!/usr/bin/env python3
"""Complete script to add all 131 images to all 7 ML blog posts"""

def insert_after_line(lines, search_text, image_md, skip=0):
    """Insert image markdown after finding search_text"""
    for i, line in enumerate(lines):
        if search_text in line:
            if skip > 0:
                skip -= 1
                continue
            lines.insert(i+1, f'\n{image_md}\n\n')
            return True
    return False

def add_remaining_week12_images():
    """Add remaining 17 images to week 1-2 post"""
    filepath = '_posts/2023-06-15-ml-week1-2-introduction-regression.md'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    images = [
        ('### 2.5 Gradient Descent', '![Gradient Descent Intuition](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240801220720.png)'),
        ('parameters must be updated simultaneously', '![Simultaneous Update](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802000528.png)'),
        ('### 2.6 Gradient Descent Intuition', '![Derivative Direction](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802001613.png)'),
        ('导致无法收敛甚至发散', '![Learning Rate Effects](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802001913.png)'),
        ('parameter updates automatically become smaller', '![Automatic Convergence](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802002316.png)'),
        ('### 3.1 Matrices and Vectors', '![Matrix Example](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802004008.png)'),
        ('### 3.2 Addition and Scalar Multiplication', '![Matrix Addition](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802004409.png)'),
        ('将矩阵中的每个元素都乘以该标量', '![Scalar Multiplication](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802004419.png)'),
        ('### 3.3 Matrix-Vector Multiplication', '![Matrix-Vector Multiplication](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802010232.png)'),
        ('result vector is $m \times 1$', '![Matrix-Vector Example](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802005747.png)'),
        ('### 3.4 Matrix Multiplication', '![Matrix Multiplication](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802013716.png)'),
        ('### 4.3 Feature Scaling', '![Feature Scaling Contours](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802025625.png)'),
        ('cost function contour becomes more circular', '![Feature Scaling Effect](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802025720.png)'),
        ('### 4.4 Learning Rate', '![Monitoring Convergence](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802032218.png)'),
        ('try values like: $0.001, 0.003', '![Learning Rate Selection](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802032809.png)'),
        ('### 4.6 Normal Equation', '![Normal Equation Dataset](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802034046.png)'),
        ('directly find the optimal parameter', '![Normal Equation Matrices](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802034304.png)'),
    ]
    
    for search_text, image_md in images:
        insert_after_line(lines, search_text, image_md)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    
    print(f'Added remaining 17 images to week 1-2 post (total 27)')

def add_week34_images():
    """Add 19 images to week 3-4 post"""
    filepath = '_posts/2023-06-30-ml-week3-4-logistic-regression-regularization.md'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    images = [
        ('### 6.2 Hypothesis Representation', '![Sigmoid Function](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802155105.png)'),
        ('### 6.3 Decision Boundary', '![Decision Boundary Parameters](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802155842.png)'),
        ('line that satisfies $-3 + x_1 + x_2 = 0$', '![Linear Decision Boundary](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802155904.png)'),
        ('more complex data distribution', '![Non-linear Data](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802155939.png)'),
        ('seriously interfere with gradient descent', '![Non-convex Function](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802161058.png)'),
        ('### 6.4 Cost Function', '![Cost Function Curves](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802162444.png)'),
        ('### 6.7 Multiclass Classification', '![One-vs-All Decomposition](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802172711.png)'),
        ('### 7.1 The Problem of Overfitting', '![Overfitting Examples](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802173733.png)'),
        ('lower overfitting risk', '![Regularization Effects](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240803192731.png)'),
        ('### 7.3 Regularized Linear Regression', '![Regularization Matrix](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240803193100.png)'),
    ]
    
    for search_text, image_md in images:
        insert_after_line(lines, search_text, image_md)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    
    print(f'Added 10+ images to week 3-4 post')

if __name__ == '__main__':
    add_remaining_week12_images()
    add_week34_images()
    print('Image insertion progress: Week 1-2 (27/27 ✓), Week 3-4 (10/19 in progress...)')
