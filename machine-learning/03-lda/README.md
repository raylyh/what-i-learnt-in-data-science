# Fisher's LDA
Linear Discriminant Analysis
> Notes for 2 classes

## Introduction
The objective is to **separate the classes** by picking a new dimension (or direction) to project onto. In other words, LDA aims to maximise the component axes for class separation.
- No assumption on far apart the distributions are
- Assume the 2 distributions are Gaussian with ![\mathcal{N}(\boldsymbol{m}_1,C_1),\;\mathcal{N}(\boldsymbol{m}_2,C_2)](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cmathcal%7BN%7D%28%5Cboldsymbol%7Bm%7D_1%2CC_1%29%2C%5C%3B%5Cmathcal%7BN%7D%28%5Cboldsymbol%7Bm%7D_2%2CC_2%29)
- **Idea behind LDA**:
    1. Projected means should be far apart to maximise separation
    2. Within each class, the variance of projections should be small so that each projected class

<!--TODO: insert graph if possible-->
![LDA external ref image](https://miro.medium.com/max/556/0*aIN2UtyTIxTleQtK.png)

The results can then be used as a linear classifier or for dimensionality reduction before classification.

## Derivation
Assume that ![\boldsymbol{w}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cboldsymbol%7Bw%7D) is the direction that the data projects onto.

The distance between the projected means:
_(Squared distance for easier manipulation)_

![\begin{align*}
&=\Vert\boldsymbol{w}^T\boldsymbol{m}_1-\boldsymbol{w}^T\boldsymbol{m}_2\Vert^2 \\
&=\Vert\boldsymbol{w}\cdot(\boldsymbol{m}_1-\boldsymbol{m}_2)\Vert^2 \\
&=\boldsymbol{w}^T(\boldsymbol{m}_1-\boldsymbol{m}_2)(\boldsymbol{m}_1-\boldsymbol{m}_2)^T\boldsymbol{w} \\
&=\boldsymbol{w}^TC_B\boldsymbol{w},\textit{\;\;where\;}C_B=(\boldsymbol{m}_1-\boldsymbol{m}_2)(\boldsymbol{m}_1-\boldsymbol{m}_2)^T
\end{align}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cbegin%7Balign*%7D%20%26%3D%5CVert%5Cboldsymbol%7Bw%7D%5ET%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bw%7D%5ET%5Cboldsymbol%7Bm%7D_2%5CVert%5E2%20%5C%5C%20%26%3D%5CVert%5Cboldsymbol%7Bw%7D%5Ccdot%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%5CVert%5E2%20%5C%5C%20%26%3D%5Cboldsymbol%7Bw%7D%5ET%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%5ET%5Cboldsymbol%7Bw%7D%20%5C%5C%20%26%3D%5Cboldsymbol%7Bw%7D%5ETC_B%5Cboldsymbol%7Bw%7D%2C%5Ctextit%7B%5C%3B%5C%3Bwhere%5C%3B%7DC_B%3D%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%5ET%20%5Cend%7Balign%7D)

The variance of projections of two classes:

![\begin{align*}
&=\boldsymbol{w}^TC_1\boldsymbol{w}+\boldsymbol{w}^TC_2\boldsymbol{w} \\
&=\boldsymbol{w}^T(C_1+C_2)\boldsymbol{w} \\
&=\boldsymbol{w}^TC_W\boldsymbol{w}
\end{align}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cbegin%7Balign*%7D%20%26%3D%5Cboldsymbol%7Bw%7D%5ETC_1%5Cboldsymbol%7Bw%7D&plus;%5Cboldsymbol%7Bw%7D%5ETC_2%5Cboldsymbol%7Bw%7D%20%5C%5C%20%26%3D%5Cboldsymbol%7Bw%7D%5ET%28C_1&plus;C_2%29%5Cboldsymbol%7Bw%7D%20%5C%5C%20%26%3D%5Cboldsymbol%7Bw%7D%5ETC_W%5Cboldsymbol%7Bw%7D%20%5Cend%7Balign%7D)

We can treat the above two equations as between-class variance (**maximise**) and within-class variance (**minimise**) respectively. Therefore, find ![\boldsymbol{w}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cboldsymbol%7Bw%7D) that maximises the objective function:

![\begin{align*}
J&=\frac{\boldsymbol{w}^TC_B\boldsymbol{w}}{\boldsymbol{w}^TC_W\boldsymbol{w}} \\
\therefore\frac{\partial J}{\partial\boldsymbol{w}}&=\frac{\boldsymbol{w}^TC_W\boldsymbol{w}\cdot2C_B\boldsymbol{w}-\boldsymbol{w}^TC_B\boldsymbol{w}\cdot2C_W\boldsymbol{w}}{(\boldsymbol{w}^TC_W\boldsymbol{w})^2}
\end{align}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cbegin%7Balign*%7D%20J%26%3D%5Cfrac%7B%5Cboldsymbol%7Bw%7D%5ETC_B%5Cboldsymbol%7Bw%7D%7D%7B%5Cboldsymbol%7Bw%7D%5ETC_W%5Cboldsymbol%7Bw%7D%7D%20%5C%5C%20%5Ctherefore%5Cfrac%7B%5Cpartial%20J%7D%7B%5Cpartial%5Cboldsymbol%7Bw%7D%7D%26%3D%5Cfrac%7B%5Cboldsymbol%7Bw%7D%5ETC_W%5Cboldsymbol%7Bw%7D%5Ccdot2C_B%5Cboldsymbol%7Bw%7D-%5Cboldsymbol%7Bw%7D%5ETC_B%5Cboldsymbol%7Bw%7D%5Ccdot2C_W%5Cboldsymbol%7Bw%7D%7D%7B%28%5Cboldsymbol%7Bw%7D%5ETC_W%5Cboldsymbol%7Bw%7D%29%5E2%7D%20%5Cend%7Balign%7D)

> Note: ![\frac{\partial}{\partial\boldsymbol{x}}(\boldsymbol{x}^TA\boldsymbol{x})=\begin{bmatrix}
\frac{\partial}{\partial x_1}(\boldsymbol{x}^TA\boldsymbol{x}) \\
\frac{\partial}{\partial x_2}(\boldsymbol{x}^TA\boldsymbol{x})
\end{bmatrix}=2A\boldsymbol{x}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cfrac%7B%5Cpartial%7D%7B%5Cpartial%5Cboldsymbol%7Bx%7D%7D%28%5Cboldsymbol%7Bx%7D%5ETA%5Cboldsymbol%7Bx%7D%29%3D%5Cbegin%7Bbmatrix%7D%20%5Cfrac%7B%5Cpartial%7D%7B%5Cpartial%20x_1%7D%28%5Cboldsymbol%7Bx%7D%5ETA%5Cboldsymbol%7Bx%7D%29%20%5C%5C%20%5Cfrac%7B%5Cpartial%7D%7B%5Cpartial%20x_2%7D%28%5Cboldsymbol%7Bx%7D%5ETA%5Cboldsymbol%7Bx%7D%29%20%5Cend%7Bbmatrix%7D%3D2A%5Cboldsymbol%7Bx%7D) given A is symmetric.

![\therefore\textit{Let } \frac{\partial J}{\partial\boldsymbol{w}}=0 \\
\begin{align*}
\boldsymbol{w}^TC_W\boldsymbol{w}\cdot C_B\boldsymbol{w}&=\boldsymbol{w}^TC_B\boldsymbol{w}\cdot C_W\boldsymbol{w} \\
C_B\boldsymbol{w}&=\alpha\cdot C_W\boldsymbol{w} \textit{ where } \alpha=\frac{\boldsymbol{w}^TC_B\boldsymbol{w}}{\boldsymbol{w}^TC_W\boldsymbol{w}} \\
(\boldsymbol{m}_1-\boldsymbol{m}_2)(\boldsymbol{m}_1-\boldsymbol{m}_2)^T\boldsymbol{w}&=\alpha\cdot C_W\boldsymbol{w} \\
\beta\cdot(\boldsymbol{m}_1-\boldsymbol{m}_2)&=\alpha\cdot C_W\boldsymbol{w} \textit{ where }\beta=(\boldsymbol{m}_1-\boldsymbol{m}_2)^T\boldsymbol{w}
\end{align}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Ctherefore%5Ctextit%7BLet%20%7D%20%5Cfrac%7B%5Cpartial%20J%7D%7B%5Cpartial%5Cboldsymbol%7Bw%7D%7D%3D0%20%5C%5C%20%5Cbegin%7Balign*%7D%20%5Cboldsymbol%7Bw%7D%5ETC_W%5Cboldsymbol%7Bw%7D%5Ccdot%20C_B%5Cboldsymbol%7Bw%7D%26%3D%5Cboldsymbol%7Bw%7D%5ETC_B%5Cboldsymbol%7Bw%7D%5Ccdot%20C_W%5Cboldsymbol%7Bw%7D%20%5C%5C%20C_B%5Cboldsymbol%7Bw%7D%26%3D%5Calpha%5Ccdot%20C_W%5Cboldsymbol%7Bw%7D%20%5Ctextit%7B%20where%20%7D%20%5Calpha%3D%5Cfrac%7B%5Cboldsymbol%7Bw%7D%5ETC_B%5Cboldsymbol%7Bw%7D%7D%7B%5Cboldsymbol%7Bw%7D%5ETC_W%5Cboldsymbol%7Bw%7D%7D%20%5C%5C%20%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%5ET%5Cboldsymbol%7Bw%7D%26%3D%5Calpha%5Ccdot%20C_W%5Cboldsymbol%7Bw%7D%20%5C%5C%20%5Cbeta%5Ccdot%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%26%3D%5Calpha%5Ccdot%20C_W%5Cboldsymbol%7Bw%7D%20%5Ctextit%7B%20where%20%7D%5Cbeta%3D%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%5ET%5Cboldsymbol%7Bw%7D%20%5Cend%7Balign%7D)

Therefore, we can see that ![C_B\boldsymbol{w}\textit{ and }C_W\boldsymbol{w}](https://latex.codecogs.com/svg.latex?%5Clarge%20C_B%5Cboldsymbol%7Bw%7D%5Ctextit%7B%20and%20%7DC_W%5Cboldsymbol%7Bw%7D) shares the same direction of ![(\boldsymbol{m}_1-\boldsymbol{m}_2)](https://latex.codecogs.com/svg.latex?%5Clarge%20%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29)

![\begin{align*}
C_W\boldsymbol{w}&=\gamma\cdot(\boldsymbol{m}_1-\boldsymbol{m}_2) \\
\boldsymbol{w}&=\gamma\cdot C_W^{-1}(\boldsymbol{m}_1-\boldsymbol{m}_2) \\
&=(C_1+C_2)^{-1}(\boldsymbol{m}_1-\boldsymbol{m}_2)
\end{align}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cbegin%7Balign*%7D%20C_W%5Cboldsymbol%7Bw%7D%26%3D%5Cgamma%5Ccdot%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%20%5C%5C%20%5Cboldsymbol%7Bw%7D%26%3D%5Cgamma%5Ccdot%20C_W%5E%7B-1%7D%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%20%5C%5C%20%26%3D%28C_1&plus;C_2%29%5E%7B-1%7D%28%5Cboldsymbol%7Bm%7D_1-%5Cboldsymbol%7Bm%7D_2%29%20%5Cend%7Balign%7D)

Note that ![\alpha,\beta,\gamma](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Calpha%2C%5Cbeta%2C%5Cgamma) are scalars in the equation and do not matter since we only care about the direction of Fisher's discriminant. The direction projected onto depends on both shapes of the gaussian densities in the final equation.

Finally, project the data onto ![\boldsymbol{w}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cboldsymbol%7Bw%7D) and slide the decision threshold (discriminant hyperplane) to compute the TPR and FPR. Plot the TPR against FPR as decision threshold varies, which forms the ROC curve.

> Note: the vector ![\boldsymbol{w}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cboldsymbol%7Bw%7D) is the **normal** to the decision threshold (discriminant hyperplane), _i.e._ perpendicular


## ROC and AUC
![ROC external ref image](https://glassboxmedicine.files.wordpress.com/2019/02/roc-curve-v2.png)

Receiver operating characteristic (ROC) curve represents trade-offs between true positives (TP) and false positives (FP) in a classifier for different decision thresholds.
- The shape of the ROC curve depends on how much the distributions are overlapping
- Benchmark: 45 degrees diagonal for a random guess model

AUC is a performance measure to compare classifiers that how much the distributions overlap and how well the classifier separates the two classes. It is the **A**rea **U**nder the ROC **C**urve.
- AUC = 0.5: distribution overlaps completely and the classifier is useless
- _Statistically speaking_, when you randomly select a positive sample and a negative sample, the probability that it will rank this positive sample before negative sample is the AUC value (_e.g._ rank which patients are more likely to be sick).
