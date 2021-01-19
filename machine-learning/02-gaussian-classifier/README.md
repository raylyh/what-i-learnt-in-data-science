## Gaussian Density
### Notation
> The fomulas are estimates from a number of sample points.

Multivariate mean: ![\hat{\boldsymbol{m}}=\frac{1}{N}\sum^N_{n=1}\boldsymbol{x}_n](images/gd1.svg) \
Covariance matrix: ![\hat{C}=\frac{1}{N}\sum^N_{n=1}(\boldsymbol{x}_n-\hat{\boldsymbol{m}})(\boldsymbol{x}_n-\hat{\boldsymbol{m}})^T](images/gd2.svg)

Note that covariance matrix is **symmetric positive definite**.

### Formulas
Univariate: ![p(x)=\frac{1}{\sigma\sqrt{2\pi}}\exp(-\frac{1}{2}(\frac{x-m}{\sigma})^2)](images/gd3.svg) \
Multivariate: ![p(\boldsymbol{x})=\frac{1}{\sqrt{\det(C)}\sqrt{2\pi}^k}\exp(-\frac{1}{2}(\boldsymbol{x}-\boldsymbol{m})^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}))](images/gd4.svg)

### Linear Transformation of Gaussian Density
Given ![\boldsymbol{x}\sim\mathcal{N}(\boldsymbol{m},C)](images/gd5.svg)
and
![\boldsymbol{y}=A\boldsymbol{x}](images/gd6.svg), \
then
![\boldsymbol{y}\sim\mathcal{N}(A\boldsymbol{m},ACA^T)](images/gd7.svg)

### Central Limit Theorem (CLT)
In CLT, by sufficiently large samples from an unknown distribution, the distribution of the sample means will **approximate a Gaussian distribution**. Therefore, from adding and subtracting uniform random numbers, we can get a univariate Gaussian density.

Combining two univariate Gaussian densities can form a multivariate Gaussian which is uncorrelated. From there, make use of the linear transformation above to produce a **correlated multivariate Gaussian density**.

<!--TODO: insert a graph if necessary-->

### Projecting Gaussian Density
By projecting a correlated multivariate Gaussian density onto a direction (with a unit vector),
the variance of projection is ![\boldsymbol{w}^TC\boldsymbol{w}](images/gd8.svg).

The **maximum and minimum of variance of projection** will coincide with the eigenvalues of the covariance matrix, where the directions are the corresponding eigenvectors.

<!--TODO: illustrate it in the code-->

## Bayesian Decision Theory
_e.g. Probability of sickness given some tests_

A data point (_e.g. test results_): ![\boldsymbol{x}=\begin{bmatrix}
x_1 \\
x_2
\end{bmatrix}](images/bdt1.svg) \
K classes: ![\omega_1,\omega_2,\cdots,\omega_k](images/bdt2.svg)

Priors (some expert knowledge in the domain): ![P(\omega_1),P(\omega_2),\cdots,P(\omega_k)](images/bdt3.svg)

Likelihood (experiment measure/effect): ![P(\boldsymbol{x}\mid\omega_1),P(\boldsymbol{x}\mid\omega_2),\cdots,P(\boldsymbol{x}\mid\omega_k)](images/bdt4.svg)

**Posterior Probability (with Bayes' formula)**: ![P(\omega_j\mid\boldsymbol{x})=\frac{P(\omega_j,\boldsymbol{x})}{P(\boldsymbol{x})}=\frac{P(\omega_j)\cdot P(\boldsymbol{x}\mid\omega_j)}{\sum_{i=1}^KP(\omega_i)\cdot P(\boldsymbol{x}\mid\omega_i)}](images/bdt5.svg)


## Gaussian Classifier
2 classes with Gaussian distribution

![P(\boldsymbol{x}\mid\omega_1)=\mathcal{N}(\boldsymbol{m}_1,C_1)](images/gc1.svg) \
![P(\boldsymbol{x}\mid\omega_2)=\mathcal{N}(\boldsymbol{m}_2,C_2)](images/gc2.svg)

### Decision Boundary
The decision boundary of the Gaussian classifier is by comparing the **posterior probabilities** of two classes, _i.e._

![\begin{align*}
P(\omega_1\mid\boldsymbol{x})&\gtrless P(\omega_2\mid\boldsymbol{x}) \\
P(\omega_1)P(\boldsymbol{x}\mid\omega_1)&\gtrless P(\omega_2)P(\boldsymbol{x}\mid\omega_2)
\end{align}](images/gc3.svg)

Now, assume that two classes have **equal priors and covariances**, _i.e._

![P(\omega_1)=P(\omega_2),C_1=C_2](images/gc4.svg)

The expression can be further simplified like the following:

![\begin{align*}
P(\omega_1)P(\boldsymbol{x}\mid\omega_1)&\gtrless P(\omega_2)P(\boldsymbol{x}\mid\omega_2) \\
(\boldsymbol{x}-\boldsymbol{m}_1)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_1)&\lessgtr(\boldsymbol{x}-\boldsymbol{m}_2)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_2) \\
(\boldsymbol{x}-\boldsymbol{m}_1)^T(C^{-1}\boldsymbol{x}-C^{-1}\boldsymbol{m}_1)&\lessgtr(\boldsymbol{x}-\boldsymbol{m}_2)^T(C^{-1}\boldsymbol{x}-C^{-1}\boldsymbol{m}_2) \\
\boldsymbol{x}^TC^{-1}\boldsymbol{x}-\boldsymbol{m}_1^TC^{-1}\boldsymbol{x}-\cdots&\lessgtr\boldsymbol{x}^TC^{-1}\boldsymbol{x}-\boldsymbol{m}_2^TC^{-1}\boldsymbol{x}-\cdots
\end{align}](images/gc5.svg)

Therefore, **the quadratic term cancels out** and the decision boundary will be a **linear classifier** given the assumptions.

#### More on the Posterior Probability and Class Boundary
Based on the assumption above, the cross section of the posterior probability, _i.e._ Class boundary, is **sigmoidal** as demonstrated in the following.

![\begin{align*}
P(\omega_1\mid\boldsymbol{x})&=\frac{P(\omega_1)\cdot P(\boldsymbol{x}\mid\omega_1)}{P(\omega_1)\cdot P(\boldsymbol{x}\mid\omega_1)+P(\omega_2)\cdot P(\boldsymbol{x}\mid\omega_2)} \\
&=\frac{1}{1+\frac{P(\omega_2)}{P(\omega_1)}\cdot\frac{P(\boldsymbol{x}\mid\omega_2)}{P(\boldsymbol{x}\mid\omega_1)}}=\frac{1}{1+\frac{P(\boldsymbol{x}\mid\omega_2)}{P(\boldsymbol{x}\mid\omega_1)}} \\
&=\frac{1}{1+\exp\{-\frac{1}{2}(\boldsymbol{x}-\boldsymbol{m}_2)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_2)+\frac{1}{2}(\boldsymbol{x}-\boldsymbol{m}_1)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_1)\}} \\
&=\frac{1}{1+\exp\{-\;linear\;in\;x\}}
\end{align}](images/gc6.svg)

### Assumptions on linear classifier derived
With further assumptions that the covariance matrices of the two classes have **uncorrelated variables**, _i.e._
![C=\sigma^2I](images/gc7.svg)
, we can derive a **distance-to-mean classifier**.

![\begin{align*}
(\boldsymbol{x}-\boldsymbol{m}_1)^T(\boldsymbol{x}-\boldsymbol{m}_1)&\lessgtr(\boldsymbol{x}-\boldsymbol{m}_2)^T(\boldsymbol{x}-\boldsymbol{m}_2) \\
\Vert\boldsymbol{x}-\boldsymbol{m}_1\Vert&\lessgtr\Vert\boldsymbol{x}-\boldsymbol{m}_2\Vert
\end{align}](images/gc8.svg)

More generally, the **Mahalanobis distance-to-mean classifier** is ![(\boldsymbol{x}-\boldsymbol{m}_1)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_1)\lessgtr(\boldsymbol{x}-\boldsymbol{m}_2)^TC^{-1}(\boldsymbol{x}-\boldsymbol{m}_2)](images/gc9.svg) which _de-correlates_ the data.


<!--TODO: include lab work 2 and 3-->
