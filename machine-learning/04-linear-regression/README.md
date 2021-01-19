# Linear Regression
Linear regression fits a **linear** model with coefficients (weights) to minimise the residual sum of squares between the targets and the predictions from the linear approximation in the dataset.

This part of the notes (hopefully) explains how linear regression works in a more mathematically detailed way.

## Setup
Data: ![\{\boldsymbol{x}_n,f_n\}^N_{n=1},\;\boldsymbol{x}\in\mathbb{R}^p](images/setup1.svg) \
Model: ![\boldsymbol{x}^T\boldsymbol{w}+w_0](images/setup2.svg)

In the dataset, each data point ![\boldsymbol{x}_n](images/xn.svg) is in **_p_** dimension with a target ![f_n](images/fn.svg) to predict. The model also includes a bias term ![w_0](images/w0.svg) to reduce general deviation for all data points. Then, the model contains **_p+1_** unknowns/coefficients can be written like the following for simplicity:

Model: ![\hat{f}=\boldsymbol{x}^T\boldsymbol{w}](images/setup3.svg) where
![\boldsymbol{x}=\begin{bmatrix}
\boldsymbol{x} \\
1
\end{bmatrix}, \boldsymbol{w}=\begin{bmatrix}
\boldsymbol{w} \\
w_0
\end{bmatrix}](images/setup4.svg)

## Derivation
To minimise the errors between targets and predictions (sum of squared residuals):
> In a linear model, the error term is quadratic with the minimal point at zero gradient.

![\begin{align*}
E&=\sum^N_{n=1}(\boldsymbol{x}_n^T\boldsymbol{w}-f_n)^2 \\
&=\sum^N_{n=1}(\sum^{p+1}_{j=1}x_{nj}w_j-f_n)^2 \\
\therefore\frac{\partial E}{\partial w_i}&=2\sum^N_{n=1}(\sum^{p+1}_{j=1}x_{nj}w_j-f_n)(x_{ni})
\end{align}](images/der1.svg)

Therefore, we get **_p+1_** equations with **_p+1_** unknowns.

Then, in matrix form,

![\underset{\scriptscriptstyle N\times(p+1)}{X}=\begin{bmatrix}
\boldsymbol{x}_1^T & 1 \\
\vdots & \vdots \\
\boldsymbol{x}_n^T & 1
\end{bmatrix},
\underset{\scriptscriptstyle (p+1)\times 1}{\boldsymbol{w}}=\begin{bmatrix}
\boldsymbol{w} \\
w_0
\end{bmatrix},
\underset{\scriptscriptstyle N\times 1}{\boldsymbol{f}}=\begin{bmatrix}
f_1 \\
\vdots \\
f_n
\end{bmatrix}](images/der2.svg)

The error term and the gradient can then be written as:

![\begin{align*}
E&=\Vert X\boldsymbol{w}-\boldsymbol{f}\Vert ^2 \\
\nabla_{\boldsymbol{w}}E&=2X^T(X\boldsymbol{w}-\boldsymbol{f})
\end{align}](images/der3.svg)

Finally, to find the minimum error, let ![\nabla_{\boldsymbol{w}}E=0](images/der4.svg)

![\begin{align*}
X^TX\boldsymbol{w}&=X^T\boldsymbol{f} \\
\boldsymbol{w}&=(X^TX)^{-1}X^T\boldsymbol{f}
\end{align}](images/der5.svg)

**The above is also known as the pseudo-inverse solution.**

## Gradient Descent
Gradient descent is a first-order iterative optimisation algorithm to find a local minimum of a **differentiable** function, like the error term here. The idea is to take small steps in the opposite direction of the gradient (or its approximate) of the function to reach its minimum. There are also other ideas of algorithms (optimisers) to escape the **local minimum** and find a better solution closer to the global minimum.

### Algorithms
(Usually initialise the weights at random)

**Steepest Descent** \
Can be costly to compute since it finds the actual gradient of the complete error term, especially when the dataset is large. \
![\boldsymbol{w}^{(k+1)}=\boldsymbol{w}^{(k)}-\eta\nabla_{\boldsymbol{w}}E](images/gd1.svg)

**Second Order** (Newton's Method) \
Can be costly to compute the second order derivatives of the Hessian, saddle points problems (have a read of the StackExchange [discussions](https://stats.stackexchange.com/questions/253632/why-is-newtons-method-not-widely-used-in-machine-learning)), although converging rapidly. \
![\boldsymbol{w}^{(k+1)}=\boldsymbol{w}^{(k)}-H^{-1}\nabla_{\boldsymbol{w}}E](images/gd2.svg)

**Stochastic Gradient Descent** (SGD) \
Popular approach to estimate the gradient by sampling a random data point. \
![\boldsymbol{w}^{(k+1)}=\boldsymbol{w}^{(k)}-\eta\nabla_{\boldsymbol{w}}e_n](images/gd3.svg) where ![\nabla_{\boldsymbol{w}}e_n=2(\boldsymbol{x}^T_n\boldsymbol{w}-f_n)\boldsymbol{x}_n](images/gd4.svg)

## Regularisation
Pseudo-inverse solution can be ill-conditioned if the columns are correlated (multicollinearity). That means within the dataset, the variables are somewhat related to each other. Regularisation can then help the model reduce overfitting by introducing a penalty term to the error function.

### L2 Regularisation
> AKA Tikhonov / ridge regression

- Adds a quadratic penalty term (L2 norm)
- **differentiable**
- Reduce the magnitude of the coefficients (not to 0)

The error function becomes: \
![\begin{align*}
E&=\Vert X\boldsymbol{w}-\boldsymbol{f}\Vert ^2+\gamma\Vert\boldsymbol{w}\Vert_2^2 \\
\nabla_{\boldsymbol{w}}E&=2X^T(X\boldsymbol{w}-\boldsymbol{f})+2\gamma I\boldsymbol{w}
\end{align}](images/reg1.svg)

Let ![\nabla_{\boldsymbol{w}}E=0](images/der4.svg), ![\boldsymbol{w}=(X^TX+\gamma I)^{-1}X^T\boldsymbol{f}](images/reg2.svg)

### L1 Regularisation
> AKA lasso / sparse regression

- Adds an L1 norm penalty term
- Not differentiable
- **Achieve sparse solution** (reduces the coefficients to 0)
- Similar to selecting relevant features in the dataset
- Help simplify the dimensionality
- Does not handle highly correlated vairables very well

The error function becomes:

![E=\Vert X\boldsymbol{w}-\boldsymbol{f}\Vert ^2+\gamma\Vert\boldsymbol{w}\Vert_1](images/reg3.svg)

<!--TODO: Include Lab 4-->
