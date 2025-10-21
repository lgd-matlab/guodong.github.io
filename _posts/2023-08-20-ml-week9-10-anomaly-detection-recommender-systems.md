---
title: 'Anomaly Detection and Recommender Systems'

![Anomaly Detection Example](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302226492.png)

date: 2023-08-20
permalink: /posts/2023/08/ml-week9-10-anomaly-detection-recommender-systems/
tags:
  - machine-learning
  - anomaly-detection
  - recommender-systems
  - collaborative-filtering
categories:
  - Machine Learning
---

This post covers two important applications: anomaly detection for identifying unusual patterns and recommender systems for personalized predictions.

## Anomaly Detection

### Problem Motivation

**Goal**: Identify data points that deviate significantly from "normal" patterns

**Example: Aircraft Engine QA**
- Features x: Heat, vibration, etc.
- Training set: {x⁽¹⁾, ..., x⁽ᵐ⁾} from normal engines
- New engine x_test: Is it anomalous?

**Approach**: Build probability model p(x)
- If p(x_test) < ε: Flag as anomalous
- If p(x_test) ≥ ε: Consider normal

**Applications**:
- **Fraud detection**: Unusual user behavior
- **Manufacturing**: Defective products
- **Data center monitoring**: Failing computers

### Gaussian Distribution

![Gaussian Distribution](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302225193.png)


**If x ~ N(μ, σ²)**:
$$p(x; \mu, \sigma^2) = \frac{1}{\sqrt{2\pi}\sigma}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$

**Parameter Estimation**:
$$\mu = \frac{1}{m}\sum_{i=1}^{m}x^{(i)}$$
$$\sigma^2 = \frac{1}{m}\sum_{i=1}^{m}(x^{(i)} - \mu)^2$$

**Note**: In ML, using m instead of m-1 in variance is standard (makes little difference for large m)

### Anomaly Detection Algorithm

**Assumptions**: Features are independent and Gaussian

**Model**:
$$p(x) = \prod_{j=1}^{n}p(x_j; \mu_j, \sigma_j^2)$$

**Steps**:
1. Choose features xⱼ that might indicate anomalies

![Feature Engineering](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302230007.png)

2. Fit parameters μⱼ, σⱼ² for each feature j
3. For new example x:
   - Compute p(x) = ∏ⱼ p(xⱼ; μⱼ, σⱼ²)
   - If p(x) < ε: anomaly

### Evaluation and Development

**Challenge**: Evaluating unsupervised learning

**Solution**: Use small labeled dataset

**Data Split Example**:
- Training: 6,000 normal engines (unlabeled)
- CV: 2,000 normal + 10 anomalous (labeled)
- Test: 2,000 normal + 10 anomalous (labeled)

**Evaluation Metrics**:
- True positive, False positive, True negative, False negative
- **Precision/Recall/F₁ score** (better for skewed datasets than accuracy)

**Parameter Selection**:
Try different ε values on CV set, choose one maximizing F₁ score

### Anomaly Detection vs. Supervised Learning

| Anomaly Detection | Supervised Learning |
|-------------------|---------------------|
| Very few positive (anomalous) examples | Many positive and negative examples |
| Many types of anomalies, future ones may differ | Enough positive examples to learn pattern |
| Hard to learn from positive examples | Future positives similar to training set |
| **Use for**: Fraud, failures, defects | **Use for**: Spam, weather, tumors |

### Feature Engineering for Anomaly Detection

**Key Success Factor**: Good features!

**1. Non-Gaussian Features**

Transform to more Gaussian:
- log(x)
- log(x + c)
- √x
- x^(1/k) for k=2,3,...

**2. Error Analysis**

If algorithm misses anomalies:
- Examine what makes them anomalous
- Create new features capturing that pattern

**Example - Data Center**:
- CPU load alone: May not detect stuck process
- Network traffic alone: May not detect stuck process
- **New feature**: CPU load / network traffic
  - High ratio → anomalous (CPU busy but no traffic)

**Guideline**: Features should have:
- Normal: Intermediate values
- Anomalous: Very large or small values

### Multivariate Gaussian Distribution

![Multivariate Gaussian](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302241008.png)


**Motivation**: Capture feature correlations

**Standard model limitation**: Features assumed independent

**Multivariate Gaussian**:
$$p(x; \mu, \Sigma) = \frac{1}{(2\pi)^{n/2}|\Sigma|^{1/2}}\exp\left(-\frac{1}{2}(x-\mu)^T\Sigma^{-1}(x-\mu)\right)$$

Parameters:
- μ ∈ ℝⁿ: Mean vector
- Σ ∈ ℝⁿˣⁿ: Covariance matrix

![Rating Matrix](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302249261.png)


**Covariance Matrix Effects**:
- Diagonal elements: Control variance of each feature
- Off-diagonal elements: Control correlations
- Can model elliptical contours at any angle

**When to Use**:

| Standard Model | Multivariate |
|----------------|--------------|
| Manually create features for correlations | Automatically captures correlations |
| Computationally cheap, scales to large n | Computationally expensive |
| Works with small m | Requires m > n (typically m ≥ 10n) |
| **Use this most often!** | Use when correlations complex |

## Recommender Systems

### Problem Formulation

**Movie Rating Example**:
- n_u users, n_m movies
- r(i,j) = 1 if user j rated movie i
- y⁽ⁱ'ʲ⁾ = rating given by user j to movie i

**Goal**: Predict ratings for unseen movies, recommend highest predicted

### Content-Based Recommendations

![Content Based Filtering](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302247496.png)


**Assumption**: Have features for each movie

**Example Features**:
- x₁: Romance level (0-1)
- x₂: Action level (0-1)

**Model**: For each user j, learn parameters θ⁽ʲ⁾

**Prediction**: (θ⁽ʲ⁾)ᵀx⁽ⁱ⁾ for user j, movie i

**Cost Function** (for user j):
$$\min_{\theta^{(j)}} \frac{1}{2}\sum_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)} - y^{(i,j)})^2 + \frac{\lambda}{2}\sum_{k=1}^{n}(\theta_k^{(j)})^2$$

**For all users**:
$$\min_{\theta^{(1)},...,\theta^{(n_u)}} \frac{1}{2}\sum_{j=1}^{n_u}\sum_{i:r(i,j)=1}((\theta^{(j)})^Tx^{(i)} - y^{(i,j)})^2 + \frac{\lambda}{2}\sum_{j=1}^{n_u}\sum_{k=1}^{n}(\theta_k^{(j)})^2$$

**Gradient Descent**: Same form as regularized linear regression

### Collaborative Filtering

![Collaborative Filtering](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302248367.png)


**Key Insight**: Can learn both features x AND parameters θ!

**Reverse Problem**: Given θ, can we learn x?
$$\min_{x^{(i)}} \frac{1}{2}\sum_{j:r(i,j)=1}((\theta^{(j)})^Tx^{(i)} - y^{(i,j)})^2 + \frac{\lambda}{2}\sum_{k=1}^{n}(x_k^{(i)})^2$$

**Collaborative Filtering Algorithm**:
Simultaneously optimize x AND θ:

$$\min_{x,\theta} J(x,\theta) = \frac{1}{2}\sum_{(i,j):r(i,j)=1}((\theta^{(j)})^Tx^{(i)} - y^{(i,j)})^2 + \frac{\lambda}{2}\sum_{i=1}^{n_m}\sum_{k=1}^{n}(x_k^{(i)})^2 + \frac{\lambda}{2}\sum_{j=1}^{n_u}\sum_{k=1}^{n}(\theta_k^{(j)})^2$$

**Steps**:
1. Initialize x and θ to small random values (break symmetry!)
2. Minimize J using gradient descent (or advanced optimizer)
3. For user j, movie i: predict (θ⁽ʲ⁾)ᵀx⁽ⁱ⁾

**Why "Collaborative"?**
Users collaborate to help system learn better features!

### Vectorization: Low Rank Matrix Factorization

![Low Rank Factorization](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302251572.png)


**Rating Matrix Y**: n_m × n_u matrix

**Prediction Matrix**:
$$\text{Predictions} = X\Theta^T$$

Where:
- X: n_m × n matrix (each row is x⁽ⁱ⁾ᵀ)
- Θ: n_u × n matrix (each row is θ⁽ʲ⁾ᵀ)

**Finding Similar Movies**:
Movie i similar to movie k if ||x⁽ⁱ⁾ - x⁽ᵏ⁾|| is small

**Applications**:
- Show "users who liked this also liked..."
- Features learned automatically (may not be interpretable)

### Mean Normalization

![Mean Normalization](https://raw.githubusercontent.com/lgd-matlab/lgd-image/main/img/202507302306036.png)


**Problem**: New user Eve with no ratings
- All r(i, Eve) = 0
- Learned θ⁽ᴱᵛᵉ⁾ = [0,0,...,0] (from regularization)
- Predicts 0 for all movies!

**Solution**: Normalize ratings by subtracting mean

**Steps**:
1. Compute μᵢ = average rating for movie i
2. Create Y' = Y - μ (subtract μᵢ from each row)
3. Learn x and θ on Y'
4. Predict: (θ⁽ʲ⁾)ᵀx⁽ⁱ⁾ + μᵢ

**For new user**: Predict μᵢ (movie's average rating)

---

## Key Takeaways

**Anomaly Detection**:
1. Model normal behavior with Gaussian distribution
2. Use small labeled set for evaluation (F₁ score)
3. Feature engineering is critical
4. Transform non-Gaussian features
5. Create features that capture anomalous patterns
6. Standard model usually better than multivariate

**Recommender Systems**:
1. Content-based: Requires pre-defined features
2. **Collaborative filtering**: Learns features automatically
3. Low-rank matrix factorization for efficient computation
4. Mean normalization handles new users (cold start)
5. Can find similar items using learned features
6. Random initialization breaks symmetry

Both techniques handle sparse data and are widely used in industry applications!
