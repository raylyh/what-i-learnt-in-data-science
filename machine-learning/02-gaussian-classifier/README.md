## Gaussian Density
### Notation
> The fomulas are estimates from a number of sample points.

Multivariate mean: ![\hat{\boldsymbol{m}}=\frac{1}{N}\sum^N_{n=1}\boldsymbol{x}_n](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Chat%7B%5Cboldsymbol%7Bm%7D%7D%3D%5Cfrac%7B1%7D%7BN%7D%5Csum%5EN_%7Bn%3D1%7D%5Cboldsymbol%7Bx%7D_n) \
Covariance matrix: ![\hat{C}=\frac{1}{N}\sum^N_{n=1}(\boldsymbol{x}_n-\hat{\boldsymbol{m}})(\boldsymbol{x}_n-\hat{\boldsymbol{m}})^T](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Chat%7BC%7D%3D%5Cfrac%7B1%7D%7BN%7D%5Csum%5EN_%7Bn%3D1%7D%28%5Cboldsymbol%7Bx%7D_n-%5Chat%7B%5Cboldsymbol%7Bm%7D%7D%29%28%5Cboldsymbol%7Bx%7D_n-%5Chat%7B%5Cboldsymbol%7Bm%7D%7D%29%5ET)

Note that covariance matrix is **symmetric positive definite**.


### Formulas
Univariate: ![p(x)=\frac{1}{\sigma\sqrt{2\pi}}\exp(-\frac{1}{2}(\frac{x-m}{\sigma})^2)](https://latex.codecogs.com/svg.latex?%5Clarge%20p%28x%29%3D%5Cfrac%7B1%7D%7B%5Csigma%5Csqrt%7B2%5Cpi%7D%7D%5Cexp%28-%5Cfrac%7B1%7D%7B2%7D%28%5Cfrac%7Bx-m%7D%7B%5Csigma%7D%29%5E2%29) \
Multivariate: ![p(\boldsymbol{x})=\frac{1}{\sqrt{\det(C)}\sqrt{2\pi}^k}\exp(-\frac{1}{2}(\boldsymbol{x}-\boldsymbol{m})^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}))](https://latex.codecogs.com/svg.latex?%5Clarge%20p%28%5Cboldsymbol%7Bx%7D%29%3D%5Cfrac%7B1%7D%7B%5Csqrt%7B%5Cdet%28C%29%7D%5Csqrt%7B2%5Cpi%7D%5Ek%7D%5Cexp%28-%5Cfrac%7B1%7D%7B2%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D%29%5ETC%5E%7B-1%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D%29%29)


### Linear Transformation of Gaussian Density
Given ![\boldsymbol{x}\sim\mathcal{N}(\boldsymbol{m},C)](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cboldsymbol%7Bx%7D%5Csim%5Cmathcal%7BN%7D%28%5Cboldsymbol%7Bm%7D%2CC%29)
and
![\boldsymbol{y}=A\boldsymbol{x}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cboldsymbol%7By%7D%3DA%5Cboldsymbol%7Bx%7D)
, \
then
![\boldsymbol{y}\sim\mathcal{N}(A\boldsymbol{m},ACA^T)](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cboldsymbol%7By%7D%5Csim%5Cmathcal%7BN%7D%28A%5Cboldsymbol%7Bm%7D%2CACA%5ET%29)

### Central Limit Theorem (CLT)
In CLT, by sufficiently large samples from an unknown distribution, the distribution of the sample means will **approximate a Gaussian distribution**. Therefore, from adding and subtracting uniform random numbers, we can get a univariate Gaussian density.

Combining two univariate Gaussian densities can form a multivariate Gaussian which is uncorrelated. From there, make use of the linear transformation above to produce a **correlated multivariate Gaussian density**.

<!--TODO: insert a graph if necessary-->

### Projecting Gaussian Density
By projecting a correlated multivariate Gaussian density onto a direction (with a unit vector),
the variance of projection is ![\boldsymbol{w}^TC\boldsymbol{w}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cboldsymbol%7Bw%7D%5ETC%5Cboldsymbol%7Bw%7D).

The **maximum and minimum of variance of projection** will coincide with the eigenvalues of the covariance matrix, where the directions are the corresponding eigenvectors.

<!--TODO: illustrate it in the code-->

## Bayesian Decision Theory
_e.g. Change of sickness given some tests_

A data point (_e.g. test results_): ![\boldsymbol{x}=\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cboldsymbol%7Bx%7D%3D%5Cbegin%7Bbmatrix%7D%20x_1%20%5C%5C%20x_2%20%5Cend%7Bbmatrix%7D) \
K classes: ![\omega_1,\omega_2,\cdots,\omega_k](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Comega_1%2C%5Comega_2%2C%5Ccdots%2C%5Comega_k)

Priors (some expert knowledge in the domain): ![P(\omega_1),P(\omega_2),\cdots,P(\omega_k)](https://latex.codecogs.com/svg.latex?%5Clarge%20P%28%5Comega_1%29%2CP%28%5Comega_2%29%2C%5Ccdots%2CP%28%5Comega_k%29) \
Likelihood (experiment measure/effect): ![P(\boldsymbol{x}\mid\omega_1),P(\boldsymbol{x}\mid\omega_2),\cdots,P(\boldsymbol{x}\mid\omega_k)](https://latex.codecogs.com/svg.latex?%5Clarge%20P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_1%29%2CP%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_2%29%2C%5Ccdots%2CP%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_k%29)

**Posterior Probability (with Bayes' formula)**: ![P(\omega_j\mid\boldsymbol{x})=\frac{P(\omega_j,\boldsymbol{x})}{P(\boldsymbol{x})}=\frac{P(\omega_j)\cdot P(\boldsymbol{x}\mid\omega_j)}{\sum_{i=1}^KP(\omega_i)\cdot P(\boldsymbol{x}\mid\omega_i)}](https://latex.codecogs.com/svg.latex?%5Clarge%20P%28%5Comega_j%5Cmid%5Cboldsymbol%7Bx%7D%29%3D%5Cfrac%7BP%28%5Comega_j%2C%5Cboldsymbol%7Bx%7D%29%7D%7BP%28%5Cboldsymbol%7Bx%7D%29%7D%3D%5Cfrac%7BP%28%5Comega_j%29%5Ccdot%20P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_j%29%7D%7B%5Csum_%7Bi%3D1%7D%5EKP%28%5Comega_i%29%5Ccdot%20P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_i%29%7D)


## Gaussian Classifier
2 classes with Gaussian distribution

![P(\boldsymbol{x}\mid\omega_1)=\mathcal{N}(\boldsymbol{m}_1,C_1)](https://latex.codecogs.com/svg.latex?%5Clarge%20P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_1%29%3D%5Cmathcal%7BN%7D%28%5Cboldsymbol%7Bm%7D_1%2CC_1%29) \
![P(\boldsymbol{x}\mid\omega_2)=\mathcal{N}(\boldsymbol{m}_2,C_2)](https://latex.codecogs.com/svg.latex?%5Clarge%20P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_2%29%3D%5Cmathcal%7BN%7D%28%5Cboldsymbol%7Bm%7D_2%2CC_2%29)

### Decision Boundary
The decision boundary of the Gaussian classifier is by comparing the **posterior probabilities** of two classes, _i.e._

![\begin{align*}
P(\omega_1\mid\boldsymbol{x})&\gtrless P(\omega_2\mid\boldsymbol{x}) \\
P(\omega_1)P(\boldsymbol{x}\mid\omega_1)&\gtrless P(\omega_2)P(\boldsymbol{x}\mid\omega_2)
\end{align}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cbegin%7Balign*%7D%20P%28%5Comega_1%5Cmid%5Cboldsymbol%7Bx%7D%29%26%5Cgtrless%20P%28%5Comega_2%5Cmid%5Cboldsymbol%7Bx%7D%29%20%5C%5C%20P%28%5Comega_1%29P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_1%29%26%5Cgtrless%20P%28%5Comega_2%29P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_2%29%20%5Cend%7Balign%7D)


Now, assume that two classes have **equal priors and covariances**, _i.e._

![P(\omega_1)=P(\omega_2),C_1=C_2](https://latex.codecogs.com/svg.latex?%5Clarge%20P%28%5Comega_1%29%3DP%28%5Comega_2%29%2CC_1%3DC_2)


The expression can be further simplified like the following:

![\begin{align*}
P(\omega_1)P(\boldsymbol{x}\mid\omega_1)&\gtrless P(\omega_2)P(\boldsymbol{x}\mid\omega_2) \\
(\boldsymbol{x}-\boldsymbol{m}_1)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_1)&\lessgtr(\boldsymbol{x}-\boldsymbol{m}_2)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_2) \\
(\boldsymbol{x}-\boldsymbol{m}_1)^T(C^{-1}\boldsymbol{x}-C^{-1}\boldsymbol{m}_1)&\lessgtr(\boldsymbol{x}-\boldsymbol{m}_2)^T(C^{-1}\boldsymbol{x}-C^{-1}\boldsymbol{m}_2) \\
\boldsymbol{x}^TC^{-1}\boldsymbol{x}-\boldsymbol{m}_1^TC^{-1}\boldsymbol{x}-\cdots&\lessgtr\boldsymbol{x}^TC^{-1}\boldsymbol{x}-\boldsymbol{m}_2^TC^{-1}\boldsymbol{x}-\cdots
\end{align}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cbegin%7Balign*%7D%20P%28%5Comega_1%29P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_1%29%26%5Cgtrless%20P%28%5Comega_2%29P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_2%29%20%5C%5C%20%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%29%5ETC%5E%7B-1%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%29%26%5Clessgtr%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%29%5ETC%5E%7B-1%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%29%20%5C%5C%20%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%29%5ET%28C%5E%7B-1%7D%5Cboldsymbol%7Bx%7D-C%5E%7B-1%7D%5Cboldsymbol%7Bm%7D_1%29%26%5Clessgtr%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%29%5ET%28C%5E%7B-1%7D%5Cboldsymbol%7Bx%7D-C%5E%7B-1%7D%5Cboldsymbol%7Bm%7D_2%29%20%5C%5C%20%5Cboldsymbol%7Bx%7D%5ETC%5E%7B-1%7D%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%5ETC%5E%7B-1%7D%5Cboldsymbol%7Bx%7D-%5Ccdots%26%5Clessgtr%5Cboldsymbol%7Bx%7D%5ETC%5E%7B-1%7D%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%5ETC%5E%7B-1%7D%5Cboldsymbol%7Bx%7D-%5Ccdots%20%5Cend%7Balign%7D)

Therefore, **the quadratic term cancels out** and the decision boundary will be a **linear classifier** given the assumptions.

#### More on the Posterior Probability and Class Boundary
Based on the assumption above, the cross section of the posterior probability, _i.e._ Class boundary, is **sigmoidal** as demonstrated in the following.

![\begin{align*}
P(\omega_1\mid\boldsymbol{x})&=\frac{P(\omega_1)\cdot P(\boldsymbol{x}\mid\omega_1)}{P(\omega_1)\cdot P(\boldsymbol{x}\mid\omega_1)+P(\omega_2)\cdot P(\boldsymbol{x}\mid\omega_2)} \\
&=\frac{1}{1+\frac{P(\omega_2)}{P(\omega_1)}\cdot\frac{P(\boldsymbol{x}\mid\omega_2)}{P(\boldsymbol{x}\mid\omega_1)}}=\frac{1}{1+\frac{P(\boldsymbol{x}\mid\omega_2)}{P(\boldsymbol{x}\mid\omega_1)}} \\
&=\frac{1}{1+\exp\{-\frac{1}{2}(\boldsymbol{x}-\boldsymbol{m}_2)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_2)+\frac{1}{2}(\boldsymbol{x}-\boldsymbol{m}_1)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_1)\}} \\
&=\frac{1}{1+\exp\{-\;linear\;in\;x\}}
\end{align}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cbegin%7Balign*%7D%20P%28%5Comega_1%5Cmid%5Cboldsymbol%7Bx%7D%29%26%3D%5Cfrac%7BP%28%5Comega_1%29%5Ccdot%20P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_1%29%7D%7BP%28%5Comega_1%29%5Ccdot%20P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_1%29&plus;P%28%5Comega_2%29%5Ccdot%20P%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_2%29%7D%20%5C%5C%20%26%3D%5Cfrac%7B1%7D%7B1&plus;%5Cfrac%7BP%28%5Comega_2%29%7D%7BP%28%5Comega_1%29%7D%5Ccdot%5Cfrac%7BP%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_2%29%7D%7BP%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_1%29%7D%7D%3D%5Cfrac%7B1%7D%7B1&plus;%5Cfrac%7BP%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_2%29%7D%7BP%28%5Cboldsymbol%7Bx%7D%5Cmid%5Comega_1%29%7D%7D%20%5C%5C%20%26%3D%5Cfrac%7B1%7D%7B1&plus;%5Cexp%5C%7B-%5Cfrac%7B1%7D%7B2%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%29%5ETC%5E%7B-1%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%29&plus;%5Cfrac%7B1%7D%7B2%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%29%5ETC%5E%7B-1%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%29%5C%7D%7D%20%5C%5C%20%26%3D%5Cfrac%7B1%7D%7B1&plus;%5Cexp%5C%7B-%5C%3Blinear%5C%3Bin%5C%3Bx%5C%7D%7D%20%5Cend%7Balign%7D)


### Assumptions on linear classifier derived
With further assumptions that the covariance matrices of the two classes have **uncorrelated variables**, _i.e._
![C=\sigma^2I](https://latex.codecogs.com/svg.latex?%5Clarge%20C%3D%5Csigma%5E2I)
, we can derive a **distance-to-mean classifier**.

![\begin{align*}
(\boldsymbol{x}-\boldsymbol{m}_1)^T(\boldsymbol{x}-\boldsymbol{m}_1)&\lessgtr(\boldsymbol{x}-\boldsymbol{m}_2)^T(\boldsymbol{x}-\boldsymbol{m}_2) \\
\Vert\boldsymbol{x}-\boldsymbol{m}_1\Vert&\lessgtr\Vert\boldsymbol{x}-\boldsymbol{m}_2\Vert
\end{align}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cbegin%7Balign*%7D%20%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%29%5ET%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%29%26%5Clessgtr%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%29%5ET%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%29%20%5C%5C%20%5CVert%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%5CVert%26%5Clessgtr%5CVert%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%5CVert%20%5Cend%7Balign%7D)

More generally, the **Mahalanobis distance-to-mean classifier** is ![(\boldsymbol{x}-\boldsymbol{m}_1)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_1)\lessgtr(\boldsymbol{x}-\boldsymbol{m}_2)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_2)](https://latex.codecogs.com/svg.latex?%5Clarge%20%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%29%5ETC%5E%7B-1%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_1%29%5Clessgtr%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%29%5ETC%5E%7B-1%7D%28%5Cboldsymbol%7Bx%7D-%5Cboldsymbol%7Bm%7D_2%29) which _de-correlates_ the data.


<!--TODO: include lab work 2 and 3-->
