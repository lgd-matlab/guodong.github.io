#!/usr/bin/env python3
"""
Script to systematically add all 131 images to ML blog posts
"""

def add_images_week12():
    """Add 27 images to week 1-2 post"""
    filepath = '_posts/2023-06-15-ml-week1-2-introduction-regression.md'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find and insert images at specific line positions
    # Image 1: After line containing "**Image Recognition**"
    for i, line in enumerate(lines):
        if '**Image Recognition**: Facebook and Apple' in line:
            lines.insert(i+1, '\n![Machine Learning Applications](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731213446.png)\n\n')
            break
    
    # Image 2: After "different classes" in classification section
    for i, line in enumerate(lines):
        if 'visualize data points from different classes.' in line:
            lines.insert(i+1, '\n![Classification Example](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731213524.png)\n\n')
            break
    
    # Image 3: After "Multi-feature problems"
    for i, line in enumerate(lines):
        if 'to improve prediction accuracy.' in line and i < len(lines)-1 and 'Advanced topic' in lines[i+1]:
            lines.insert(i+1, '\n![Multi-feature Classification](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731214001.png)\n\n')
            break
    
    # Image 4: After "on its own" in unsupervised learning
    for i, line in enumerate(lines):
        if 'discover interesting structures or patterns in the data on its own' in line:
            lines.insert(i+1, '\n![Unsupervised Learning](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731215148.png)\n\n')
            break
    
    # Image 5: After "single line of code" in cocktail party
    for i, line in enumerate(lines):
        if 'sometimes requiring only a single line of code to implement.' in line:
            lines.insert(i+1, '\n![Cocktail Party Problem](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731215750.png)\n\n')
            break
    
    # Image 6: After "Model Representation" section heading
    for i, line in enumerate(lines):
        if '### 2.1 Model Representation' in line:
            lines.insert(i+2, '\n![Model Representation](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731220230.png)\n\n')
            break
    
    # Image 7: After "Training Set" workflow description
    for i, line in enumerate(lines):
        if 'Using $h$ to predict new inputs' in line:
            lines.insert(i+1, '\n![Training Set Workflow](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731220303.png)\n\n')
            break
    
    # Image 8: Cost function visualization
    for i, line in enumerate(lines):
        if '### 2.3-2.4 Cost Function Intuition' in line:
            lines.insert(i+2, '\n![Cost Function J(θ1)](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240801214157.png)\n\n')
            break
    
    # Image 9: 3D cost function
    for i, line in enumerate(lines):
        if 'three-dimensional bowl-shaped surface' in line:
            lines.insert(i+1, '\n![3D Cost Function Surface](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240801214753.png)\n\n')
            break
    
    # Image 10: Contour plot
    for i, line in enumerate(lines):
        if 'each ellipse represents a set of' in line:
            lines.insert(i+1, '\n![Contour Plot](https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240801214909.png)\n\n')
            break
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    
    print(f'Added 10 images to {filepath}')

if __name__ == '__main__':
    add_images_week12()
