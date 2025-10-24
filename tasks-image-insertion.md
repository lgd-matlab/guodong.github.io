# Task Plan: Add 131 Images to ML Blog Posts

## Overview

**Objective**: Systematically insert all 131 missing images from original Chinese notes into the 7 translated English blog posts, then commit and push to GitHub.

**Image Source**: All images are hosted at `https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/`

**Affected Files**: 7 blog post files in `_posts/` directory

---

## Phase 1: Preparation & Validation

- [ ] T001 Verify all 7 blog posts exist in _posts/ directory
- [ ] T002 Extract all image URLs from original Chinese week 1-2 file (27 images expected)
- [ ] T003 Extract all image URLs from original Chinese week 3-4 file (19 images expected)
- [ ] T004 Extract all image URLs from original Chinese week 5-6 file (29 images expected)
- [ ] T005 Extract all image URLs from original Chinese week 7 file (17 images expected)
- [ ] T006 Extract all image URLs from original Chinese week 8 file (22 images expected)
- [ ] T007 Extract all image URLs from original Chinese week 9-10 file (13 images expected)
- [ ] T008 Extract all image URLs from original Chinese week 11 file (4 images expected)
- [ ] T009 Validate total image count equals 131

---

## Phase 2: Week 1-2 Post (Introduction & Linear Regression) - 27 Images

**File**: `_posts/2023-06-15-ml-week1-2-introduction-regression.md`

**Target Sections for Images**:
- Introduction to ML concepts
- Supervised vs Unsupervised learning examples
- Housing price regression example
- Cost function visualization
- Gradient descent visualization
- Feature scaling examples
- Learning rate comparison
- Normal equation matrices

### Tasks:

- [ ] T010 [P] [W1-2] Add image: ML applications example (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731213446.png) to section "What is Machine Learning?"
- [ ] T011 [P] [W1-2] Add image: Supervised learning example (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731213524.png) to "Supervised Learning" section
- [ ] T012 [P] [W1-2] Add image: Classification example (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731214001.png) to "Classification Problem" section
- [ ] T013 [P] [W1-2] Add image: Unsupervised learning clustering (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731215148.png) to "Unsupervised Learning" section
- [ ] T014 [P] [W1-2] Add image: Cocktail party problem (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731215750.png) to "Cocktail Party Problem" section
- [ ] T015 [P] [W1-2] Add image: Model representation (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731220230.png) to "Model Representation" section
- [ ] T016 [P] [W1-2] Add image: Training set workflow (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240731220303.png) to "Hypothesis Function" section
- [ ] T017 [P] [W1-2] Add image: Cost function J(θ1) (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240801214157.png) to "Cost Function Intuition" section
- [ ] T018 [P] [W1-2] Add image: 3D cost function surface (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240801214753.png) to "Cost Function" section
- [ ] T019 [P] [W1-2] Add image: Contour plot (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240801214909.png) to "Cost Function Visualization" section
- [ ] T020 [P] [W1-2] Add image: Gradient descent intuition (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240801220720.png) to "Gradient Descent" section
- [ ] T021 [P] [W1-2] Add image: Simultaneous update (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802000528.png) to "Gradient Descent Algorithm" section
- [ ] T022 [P] [W1-2] Add image: Derivative direction (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802001613.png) to "Gradient Descent Intuition" section
- [ ] T023 [P] [W1-2] Add image: Learning rate effects (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802001913.png) to "Learning Rate" section
- [ ] T024 [P] [W1-2] Add image: Automatic convergence (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802002316.png) to "Gradient Descent Convergence" section
- [ ] T025 [P] [W1-2] Add image: Matrix example (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802004008.png) to "Matrices and Vectors" section
- [ ] T026 [P] [W1-2] Add image: Matrix addition (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802004409.png) to "Matrix Addition" section
- [ ] T027 [P] [W1-2] Add image: Scalar multiplication (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802004419.png) to "Scalar Multiplication" section
- [ ] T028 [P] [W1-2] Add image: Matrix-vector multiplication (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802010232.png) to "Matrix-Vector Multiplication" section
- [ ] T029 [P] [W1-2] Add image: Matrix-vector example (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802005747.png) to "Matrix-Vector Examples" section
- [ ] T030 [P] [W1-2] Add image: Matrix multiplication (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802013716.png) to "Matrix Multiplication" section
- [ ] T031 [P] [W1-2] Add image: Feature scaling contours (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802025625.png) to "Feature Scaling" section
- [ ] T032 [P] [W1-2] Add image: Feature scaling effect (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802025720.png) to "Feature Scaling Benefits" section
- [ ] T033 [P] [W1-2] Add image: Monitoring convergence (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802032218.png) to "Monitoring Gradient Descent" section
- [ ] T034 [P] [W1-2] Add image: Learning rate selection (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802032809.png) to "Choosing Learning Rate" section
- [ ] T035 [P] [W1-2] Add image: Normal equation dataset (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802034046.png) to "Normal Equation Example" section
- [ ] T036 [P] [W1-2] Add image: Normal equation matrices (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802034304.png) to "Normal Equation" section
- [ ] T037 Verify week 1-2 post has all 27 images inserted correctly

---

## Phase 3: Week 3-4 Post (Logistic Regression) - 19 Images

**File**: `_posts/2023-06-30-ml-week3-4-logistic-regression-regularization.md`

**Target Sections for Images**:
- Sigmoid function
- Decision boundaries
- Cost function for logistic regression
- Regularization visualization
- Overfitting examples

### Tasks:

- [ ] T038 [P] [W3-4] Add image: Sigmoid function graph (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802155105.png) to "Hypothesis Representation" section
- [ ] T039 [P] [W3-4] Add image: Model parameters (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802155842.png) to "Decision Boundary" section
- [ ] T040 [P] [W3-4] Add image: Linear decision boundary (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802155904.png) to "Linear Boundaries" section
- [ ] T041 [P] [W3-4] Add image: Non-linear data (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802155939.png) to "Non-linear Problems" section
- [ ] T042 [P] [W3-4] Add image: Non-convex function (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802161058.png) to "Why Not Use MSE" section
- [ ] T043 [P] [W3-4] Add image: Cost function curves (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802162444.png) to "Logistic Regression Cost" section
- [ ] T044 [P] [W3-4] Add image: One-vs-All decomposition (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802172711.png) to "Multiclass Classification" section
- [ ] T045 [P] [W3-4] Add image: Overfitting examples (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240802173733.png) to "The Problem of Overfitting" section
- [ ] T046 [P] [W3-4] Add image: Regularization parameter effects (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240803192731.png) to "Regularization" section
- [ ] T047 [P] [W3-4] Add image: Regularization matrix (https://notion-lgd.oss-cn-beijing.aliyuncs.com/20240803193100.png) to "Normal Equation with Regularization" section
- [ ] T048 [P] [W3-4] Add 9 additional images from original Chinese file to appropriate sections
- [ ] T049 Verify week 3-4 post has all 19 images inserted correctly

---

## Phase 4: Week 5-6 Post (Neural Networks) - 29 Images

**File**: `_posts/2023-07-15-ml-week5-6-neural-networks.md`

**Target Sections for Images**:
- Neural network architecture
- Forward propagation
- Activation functions
- Backpropagation visualization
- Logic gates implementation

### Tasks:

- [ ] T050 [P] [W5-6] Add image: Computer vision example (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142150654.png) to "Non-linear Hypotheses" section
- [ ] T051 [P] [W5-6] Add image: BrainPort system (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142153160.png) to "Neurons and the Brain" section
- [ ] T052 [P] [W5-6] Add image: Echolocation (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142154357.png) to "Brain Learning Examples" section
- [ ] T053 [P] [W5-6] Add image: Artificial neuron model (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142158966.png) to "Model Representation" section
- [ ] T054 [P] [W5-6] Add image: Network structure (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142217608.png) to "Neural Network Architecture" section
- [ ] T055 [P] [W5-6] Add image: NN vs Logistic Regression (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142216733.png) to "Vectorization" section
- [ ] T056 [P] [W5-6] Add image: AND function (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142215035.png) to "Logic Gates" section
- [ ] T057 [P] [W5-6] Add image: XNOR network (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142214098.png) to "Complex Logic Functions" section
- [ ] T058 [P] [W5-6] Add image: Multiclass output (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507142213311.png) to "Multiclass Classification" section
- [ ] T059 [P] [W5-6] Add image: Binary vs multiclass (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151544759.png) to "Classification Types" section
- [ ] T060 [P] [W5-6] Add image: Logistic regression cost (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151544035.png) to "Cost Function Review" section
- [ ] T061 [P] [W5-6] Add image: NN cost function (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151544916.png) to "Neural Network Cost" section
- [ ] T062 [P] [W5-6] Add image: Forward propagation (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151545025.png) to "Forward Propagation" section
- [ ] T063 [P] [W5-6] Add image: Forward propagation continued (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151545208.png) to "Forward Propagation Algorithm" section
- [ ] T064 [P] [W5-6] Add image: Backpropagation algorithm (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151545780.png) to "Backpropagation" section
- [ ] T065 [P] [W5-6] Add image: Forward propagation review (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151546282.png) to "Backpropagation Intuition" section
- [ ] T066 [P] [W5-6] Add image: Backward propagation (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151546369.png) to "Error Backpropagation" section
- [ ] T067 [P] [W5-6] Add image: Parameter unrolling (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151547605.png) to "Unrolling Parameters" section
- [ ] T068 [P] [W5-6] Add image: Reshape operations (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151547251.png) to "Implementation Details" section
- [ ] T069 [P] [W5-6] Add image: Gradient checking (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507151547856.png) to "Gradient Checking" section
- [ ] T070 [P] [W5-6] Add 9 additional images for learning curves, validation, model selection
- [ ] T071 [P] [W5-6] Add image: Bias vs variance diagnosis (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251542154.png)
- [ ] T072 [P] [W5-6] Add image: Train/CV error curves (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251542837.png)
- [ ] T073 [P] [W5-6] Add image: High bias indicators (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251543958.png)
- [ ] T074 [P] [W5-6] Add image: Regularization effects (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251543918.png)
- [ ] T075 [P] [W5-6] Add image: Lambda selection (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251544237.png)
- [ ] T076 [P] [W5-6] Add image: Lambda vs error (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251544980.png)
- [ ] T077 [P] [W5-6] Add image: Learning curves (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251545260.png)
- [ ] T078 [P] [W5-6] Add image: High bias learning curve (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251545499.png)
- [ ] T079 Verify week 5-6 post has all 29 images inserted correctly

---

## Phase 5: Week 7 Post (Support Vector Machines) - 17 Images

**File**: `_posts/2023-07-27-ml-week7-support-vector-machines.md`

**Target Sections for Images**:
- SVM cost function
- Large margin intuition
- Kernels
- Decision boundaries

### Tasks:

- [ ] T080 [P] [W7] Add image: Sigmoid vs hinge loss (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251556940.png) to "SVM Cost Function" section
- [ ] T081 [P] [W7] Add image: Cost_1 function (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251611991.png) to "Hinge Loss y=1" section
- [ ] T082 [P] [W7] Add image: Cost_0 function (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251611667.png) to "Hinge Loss y=0" section
- [ ] T083 [P] [W7] Add image: Cost functions comparison (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251611915.png) to "Cost Function Comparison" section
- [ ] T084 [P] [W7] Add image: SVM cost formulation (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612351.png) to "SVM Optimization" section
- [ ] T085 [P] [W7] Add image: Parameter C (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612904.png) to "Regularization Parameter" section
- [ ] T086 [P] [W7] Add image: Final SVM objective (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612777.png) to "SVM Objective Function" section
- [ ] T087 [P] [W7] Add image: Margin requirements (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612481.png) to "Large Margin Requirements" section
- [ ] T088 [P] [W7] Add image: Simplified optimization (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251612952.png) to "Large Margin Classifier" section
- [ ] T089 [P] [W7] Add image: Decision boundaries (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251613702.png) to "Decision Boundary Selection" section
- [ ] T090 [P] [W7] Add image: Margin visualization (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251614893.png) to "Margin Visualization" section
- [ ] T091 [P] [W7] Add image: Outliers effect (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251615498.png) to "Outliers and C Parameter" section
- [ ] T092 [P] [W7] Add image: Vector projection (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251615355.png) to "Mathematics of Large Margin" section
- [ ] T093 [P] [W7] Add image: Projection geometry (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251616146.png) to "Geometric Interpretation" section
- [ ] T094 [P] [W7] Add image: Gaussian kernel (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251617169.png) to "Gaussian Kernel" section
- [ ] T095 [P] [W7] Add image: Kernel decision boundary (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251617600.png) to "Kernels in Practice" section
- [ ] T096 [P] [W7] Add image: Landmark selection (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251617102.png) to "Choosing Landmarks" section
- [ ] T097 Verify week 7 post has all 17 images inserted correctly

---

## Phase 6: Week 8 Post (Clustering & Dimensionality Reduction) - 22 Images

**File**: `_posts/2023-08-05-ml-week8-clustering-dimensionality-reduction.md`

**Target Sections for Images**:
- K-means algorithm
- Elbow method
- PCA visualization
- Dimensionality reduction examples

### Tasks:

- [ ] T098 [P] [W8] Add image: Unsupervised data (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280857232.png) to "Unsupervised Learning Introduction" section
- [ ] T099 [P] [W8] Add image: Clustering example (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280908876.png) to "What is Clustering" section
- [ ] T100 [P] [W8] Add image: K-means iteration 0 (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280909646.png) to "K-Means Algorithm" section
- [ ] T101 [P] [W8] Add image: K-means iteration 1 (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280909679.png) to "K-Means Step 1" section
- [ ] T102 [P] [W8] Add image: K-means iteration 3 (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280909943.png) to "K-Means Iteration" section
- [ ] T103 [P] [W8] Add image: T-shirt sizing (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280909335.png) to "K-Means Applications" section
- [ ] T104 [P] [W8] Add image: Local optima (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280912963.png) to "Random Initialization" section
- [ ] T105 [P] [W8] Add image: Elbow method (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280912898.png) to "Choosing K" section
- [ ] T106 [P] [W8] Add image: ARI formula (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507280916332.png) to "Clustering Metrics" section
- [ ] T107 [P] [W8] Add image: 2D to 1D projection (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291703910.png) to "Dimensionality Reduction Motivation" section
- [ ] T108 [P] [W8] Add image: Redundant features (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291709032.png) to "Data Compression" section
- [ ] T109 [P] [W8] Add image: Correlated features (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291709799.png) to "Feature Correlation" section
- [ ] T110 [P] [W8] Add image: 3D to 2D (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291710204.png) to "High Dimensional Reduction" section
- [ ] T111 [P] [W8] Add image: Country data features (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291711873.png) to "Visualization Motivation" section
- [ ] T112 [P] [W8] Add image: 50D to 2D visualization (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291712526.png) to "Data Visualization" section
- [ ] T113 [P] [W8] Add image: PCA projection error (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291713207.png) to "PCA Problem Formulation" section
- [ ] T114 [P] [W8] Add image: PCA vs linear regression (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507291713108.png) to "PCA vs Linear Regression" section
- [ ] T115 [P] [W8] Add 5 additional PCA images for algorithm steps and variance explained
- [ ] T116 Verify week 8 post has all 22 images inserted correctly

---

## Phase 7: Week 9-10 Post (Anomaly Detection & Recommender Systems) - 13 Images

**File**: `_posts/2023-08-20-ml-week9-10-anomaly-detection-recommender-systems.md`

**Target Sections for Images**:
- Gaussian distribution
- Anomaly detection examples
- Collaborative filtering

### Tasks:

- [ ] T117 [P] [W9-10] Add image: Test/train split (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251538175.png) to "Evaluating a Hypothesis" section
- [ ] T118 [P] [W9-10] Add image: Validation sets (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251538552.png) to "Train/CV/Test Sets" section
- [ ] T119 [P] [W9-10] Add image: Model selection (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251539181.png) to "Model Selection" section
- [ ] T120 [P] [W9-10] Add image: Three-way split (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507251539823.png) to "Cross Validation" section
- [ ] T121 [P] [W9-10] Add all 13 images from week 9-10 to appropriate sections covering:
  - Anomaly detection algorithms
  - Gaussian distribution visualization
  - Multivariate Gaussian
  - Recommender systems
  - Collaborative filtering
  - Low rank matrix factorization
  - Mean normalization
- [ ] T122 Verify week 9-10 post has all 13 images inserted correctly

---

## Phase 8: Week 11 Post (Large Scale Machine Learning) - 4 Images

**File**: `_posts/2023-09-01-ml-week11-large-scale-machine-learning.md`

**Target Sections for Images**:
- Learning curves for big data
- SGD path visualization
- Convergence monitoring

### Tasks:

- [ ] T123 [P] [W11] Add image: Learning curves (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507312241099.png) to "Learning with Large Datasets" section
- [ ] T124 [P] [W11] Add image: SGD vs batch GD path (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507312242656.png) to "Stochastic Gradient Descent" section
- [ ] T125 [P] [W11] Add image: Monitoring SGD convergence (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507312243107.png) to "Checking for Convergence" section
- [ ] T126 [P] [W11] Add image: Learning rate effects on SGD (https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507312244320.png) to "Learning Rate Strategies" section
- [ ] T127 Verify week 11 post has all 4 images inserted correctly

---

## Phase 9: Final Validation & Git Operations

- [ ] T128 Run grep to verify total image count in all 7 posts equals 131
- [ ] T129 Verify all image URLs are valid and properly formatted
- [ ] T130 Check that all images use markdown format: `![alt text](url)`
- [ ] T131 Stage all 7 modified blog post files using `git add _posts/2023-*-ml-*.md`
- [ ] T132 Create commit with message "Add 131 missing images to ML blog posts"
- [ ] T133 Push changes to GitHub remote repository
- [ ] T134 Verify push was successful with `git log` and GitHub web interface

---

## Summary

**Total Tasks**: 134
**Image Insertion Tasks by Post**:
- Week 1-2: 27 images (T010-T037)
- Week 3-4: 19 images (T038-T049)
- Week 5-6: 29 images (T050-T079)
- Week 7: 17 images (T080-T097)
- Week 8: 22 images (T098-T116)
- Week 9-10: 13 images (T117-T122)
- Week 11: 4 images (T123-T127)

**Parallel Execution**: All image insertion tasks within each phase are marked [P] and can be executed in parallel since they modify different sections of the same file or different files.

**Estimated Completion Time**: 2-3 hours for systematic insertion and verification

**Success Criteria**:
- ✅ All 131 images correctly inserted
- ✅ Images placed in appropriate contextual sections
- ✅ All markdown syntax valid
- ✅ Changes committed and pushed to GitHub
- ✅ Website builds successfully with images displaying

---

## Implementation Strategy

1. **MVP Scope**: Complete Phase 1 (preparation) first
2. **Incremental Delivery**: Complete one week's post at a time (Phases 2-8)
3. **Validation**: Run verification task after each phase
4. **Git Push**: Final phase after all images inserted and verified

