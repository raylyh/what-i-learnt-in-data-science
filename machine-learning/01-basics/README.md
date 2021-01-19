# Basic Concepts

1. Supervised learning:
![\{x_n, y_n\}^N_{n=1}](images/bc1.svg)
    - Training data includes labels as well
    - Work through some optimisation routine to minimise a loss or error function
    - e.g. Email spam classification, linear regression, Support Vector Machine (SVM), neural network
2. Unsupervised learning:
![\{x_n\}^N_{n=1}](images/bc2.svg)
    - Training data is unlabelled
    - Help find previously unknown patterns in dataset
    - e.g. Clustering, Principal Component Analysis (PCA)
3. Semi-supervised learning
    - Partially labelled training data
    - e.g. Deep belief networks (Google Photos' people tagging)

## Notes on Linear Algebra
Some notes on linear algebra that could be useful in understanding the derivations of some machine learning algorithms later.

### Dot product
![\boldsymbol{w}\cdot\boldsymbol{x}=\Vert\boldsymbol{w}\Vert\Vert\boldsymbol{x}\Vert\cos\theta](images/la1.svg)

### Linear independence
A set of vectors is **linearly independent** if the vector equation \
![\sum_j\alpha_j\boldsymbol{x}_j=\mathbf{0}](images/la2.svg)
has only the trivial solution
![\alpha_1=\alpha_2=...=\alpha_j=0](images/la3.svg)

### [Vector projection](https://en.wikipedia.org/wiki/Vector_projection)
Vector projection of vector _a_ onto vector _b_ \
![proj_{\boldsymbol{b}}\boldsymbol{a}=\frac{\boldsymbol{a}\cdot\boldsymbol{b}}{\Vert\boldsymbol{b}\Vert}\frac{\boldsymbol{b}}{\Vert\boldsymbol{b}\Vert}](images/la4.svg)

### Gradient vector
For a multivariable function,
![f(x_1,x_2,...,x_n)](https://latex.codecogs.com/svg.latex?%5Cinline%20%5Clarge%20f%28x_1%2Cx_2%2C...%2Cx_n%29)
, the gradient is denoted as:

![\nabla f=
\begin{bmatrix}
\frac{\partial f}{\partial x_1}\\
\frac{\partial f}{\partial x_2}\\
\vdots
\end{bmatrix}](images/la5.svg)

The gradient vector, if evaluated at an input **_x_**, points in the direction of **steepest ascent**.

---

**Read [The Matrix Cookbook](../files/matrixcookbook.pdf) for quick reference to matrices operations, eigenvectors and eigenvalues, and singular value decomposition (SVD)**
