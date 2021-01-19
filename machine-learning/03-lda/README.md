# Fisher's LDA
Linear Discriminant Analysis
> Notes for 2 classes

## Introduction
The objective is to **separate the classes** by picking a new dimension (or direction) to project onto. In other words, LDA aims to maximise the component axes for class separation.
- No assumption on far apart the distributions are
- Assume the 2 distributions are Gaussian with ![\mathcal{N}(\boldsymbol{m}_1,C_1),\;\mathcal{N}(\boldsymbol{m}_2,C_2)](images/intro1.svg)
- **Idea behind LDA**:
    1. Projected means should be far apart to maximise separation
    2. Within each class, the variance of projections should be small so that each projected class

<!--TODO: insert graph if possible-->
![LDA external ref image](https://miro.medium.com/max/556/0*aIN2UtyTIxTleQtK.png)

The results can then be used as a linear classifier or for dimensionality reduction before classification.

## Derivation
Assume that ![\boldsymbol{w}](images/w.svg) is the direction that the data projects onto.

The distance between the projected means:
_(Squared distance for easier manipulation)_

![\begin{align*}
&=\Vert\boldsymbol{w}^T\boldsymbol{m}_1-\boldsymbol{w}^T\boldsymbol{m}_2\Vert^2 \\
&=\Vert\boldsymbol{w}\cdot(\boldsymbol{m}_1-\boldsymbol{m}_2)\Vert^2 \\
&=\boldsymbol{w}^T(\boldsymbol{m}_1-\boldsymbol{m}_2)(\boldsymbol{m}_1-\boldsymbol{m}_2)^T\boldsymbol{w} \\
&=\boldsymbol{w}^TC_B\boldsymbol{w},\textit{\;\;where\;}C_B=(\boldsymbol{m}_1-\boldsymbol{m}_2)(\boldsymbol{m}_1-\boldsymbol{m}_2)^T
\end{align}](images/der1.svg)

The variance of projections of two classes:

![\begin{align*}
&=\boldsymbol{w}^TC_1\boldsymbol{w}+\boldsymbol{w}^TC_2\boldsymbol{w} \\
&=\boldsymbol{w}^T(C_1+C_2)\boldsymbol{w} \\
&=\boldsymbol{w}^TC_W\boldsymbol{w}
\end{align}](images/der2.svg)

We can treat the above two equations as between-class variance (**maximise**) and within-class variance (**minimise**) respectively. Therefore, find ![\boldsymbol{w}](images/w.svg) that maximises the objective function:

![\begin{align*}
J&=\frac{\boldsymbol{w}^TC_B\boldsymbol{w}}{\boldsymbol{w}^TC_W\boldsymbol{w}} \\
\therefore\frac{\partial J}{\partial\boldsymbol{w}}&=\frac{\boldsymbol{w}^TC_W\boldsymbol{w}\cdot2C_B\boldsymbol{w}-\boldsymbol{w}^TC_B\boldsymbol{w}\cdot2C_W\boldsymbol{w}}{(\boldsymbol{w}^TC_W\boldsymbol{w})^2}
\end{align}](images/der3.svg)

> Note: ![\frac{\partial}{\partial\boldsymbol{x}}(\boldsymbol{x}^TA\boldsymbol{x})=\begin{bmatrix}
\frac{\partial}{\partial x_1}(\boldsymbol{x}^TA\boldsymbol{x}) \\
\frac{\partial}{\partial x_2}(\boldsymbol{x}^TA\boldsymbol{x})
\end{bmatrix}=2A\boldsymbol{x}](images/der4.svg) given A is symmetric.

![\therefore\textit{Let } \frac{\partial J}{\partial\boldsymbol{w}}=0 \\
\begin{align*}
\boldsymbol{w}^TC_W\boldsymbol{w}\cdot C_B\boldsymbol{w}&=\boldsymbol{w}^TC_B\boldsymbol{w}\cdot C_W\boldsymbol{w} \\
C_B\boldsymbol{w}&=\alpha\cdot C_W\boldsymbol{w} \textit{ where } \alpha=\frac{\boldsymbol{w}^TC_B\boldsymbol{w}}{\boldsymbol{w}^TC_W\boldsymbol{w}} \\
(\boldsymbol{m}_1-\boldsymbol{m}_2)(\boldsymbol{m}_1-\boldsymbol{m}_2)^T\boldsymbol{w}&=\alpha\cdot C_W\boldsymbol{w} \\
\beta\cdot(\boldsymbol{m}_1-\boldsymbol{m}_2)&=\alpha\cdot C_W\boldsymbol{w} \textit{ where }\beta=(\boldsymbol{m}_1-\boldsymbol{m}_2)^T\boldsymbol{w}
\end{align}](images/der5.svg)

Therefore, we can see that ![C_B\boldsymbol{w}](images/cbw.svg) and ![C_W\boldsymbol{w}](images/cww.svg) shares the same direction of ![(\boldsymbol{m}_1-\boldsymbol{m}_2)](images/m1m2.svg)

![\begin{align*}
C_W\boldsymbol{w}&=\gamma\cdot(\boldsymbol{m}_1-\boldsymbol{m}_2) \\
\boldsymbol{w}&=\gamma\cdot C_W^{-1}(\boldsymbol{m}_1-\boldsymbol{m}_2) \\
&=(C_1+C_2)^{-1}(\boldsymbol{m}_1-\boldsymbol{m}_2)
\end{align}](images/der6.svg)

Note that ![\alpha,\beta,\gamma](images/abg.svg) are scalars in the equation and do not matter since we only care about the direction of Fisher's discriminant. The direction projected onto depends on both shapes of the gaussian densities in the final equation.

Finally, project the data onto ![\boldsymbol{w}](images/w.svg) and slide the decision threshold (discriminant hyperplane) to compute the TPR and FPR. Plot the TPR against FPR as decision threshold varies, which forms the ROC curve.

> Note: the vector ![\boldsymbol{w}](images/w.svg) is the **normal** to the decision threshold (discriminant hyperplane), _i.e._ perpendicular

## ROC and AUC
![ROC external ref image](https://glassboxmedicine.files.wordpress.com/2019/02/roc-curve-v2.png)

Receiver operating characteristic (ROC) curve represents trade-offs between true positives (TP) and false positives (FP) in a classifier for different decision thresholds.
- The shape of the ROC curve depends on how much the distributions are overlapping
- Benchmark: 45 degrees diagonal for a random guess model

AUC is a performance measure to compare classifiers that how much the distributions overlap and how well the classifier separates the two classes. It is the **A**rea **U**nder the ROC **C**urve.
- AUC = 0.5: distribution overlaps completely and the classifier is useless
- _Statistically speaking_, when you randomly select a positive sample and a negative sample, the probability that it will rank this positive sample before negative sample is the AUC value (_e.g._ rank which patients are more likely to be sick).
