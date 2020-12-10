# Basic Concepts
1. Supervised learning:
![\{x_n, y_n\}^N_{n=1}
](https://render.githubusercontent.com/render/math?math=%5Cdisplaystyle+%5C%7Bx_n%2C+y_n%5C%7D%5EN_%7Bn%3D1%7D%0A)
    - Training data includes labels as well
    - Work through some optimisation routine to minimise a loss or error function
    - e.g. Email spam classification, linear regression, Support Vector Machine (SVM), neural network
2. Unsupervised learning:
![\{x_n\}^N_{n=1}
](https://render.githubusercontent.com/render/math?math=%5Cdisplaystyle+%5C%7Bx_n%5C%7D%5EN_%7Bn%3D1%7D%0A)
    - Training data is unlabelled
    - Help find previously unknown patterns in dataset
    - e.g. Clustering, Principal Component Analysis (PCA)
3. Semi-supervised learning
    - Partially labelled training data
    - e.g. Deep belief networks (Google Photos' people tagging)

# Notes on Linear Algebra
### Dot product
![\boldsymbol{w}\cdot\boldsymbol{x}=\Vert\boldsymbol{w}\Vert\Vert\boldsymbol{x}\Vert\cos\theta](https://latex.codecogs.com/svg.latex?%5Cinline%20%5Clarge%20%5Cboldsymbol%7Bw%7D%5Ccdot%5Cboldsymbol%7Bx%7D%3D%5CVert%5Cboldsymbol%7Bw%7D%5CVert%5CVert%5Cboldsymbol%7Bx%7D%5CVert%5Ccos%5Ctheta)

### Linear independence
A set of vectors is **linearly independent** if the vector equation \
![\sum_j\alpha_j\boldsymbol{x}_j=\mathbf{0}](https://latex.codecogs.com/svg.latex?%5Cinline%20%5Clarge%20%5Csum_j%5Calpha_j%5Cboldsymbol%7Bx%7D_j%3D%5Cmathbf%7B0%7D)
has only the trivial solution
![\alpha_1=\alpha_2=...=\alpha_j=0](https://latex.codecogs.com/svg.latex?\inline&space;\large&space;\alpha_1=\alpha_2=...=\alpha_j=0)

### [Vector projection](https://en.wikipedia.org/wiki/Vector_projection)
Vector projection of vector _a_ onto vector _b_ \
![proj_{\boldsymbol{b}}\boldsymbol{a}=\frac{\boldsymbol{a}\cdot\boldsymbol{b}}{\Vert\boldsymbol{b}\Vert}\frac{\boldsymbol{b}}{\Vert\boldsymbol{b}\Vert}](https://latex.codecogs.com/svg.latex?\large&space;proj_{\boldsymbol{b}}\boldsymbol{a}=\frac{\boldsymbol{a}\cdot\boldsymbol{b}}{\Vert\boldsymbol{b}\Vert}\frac{\boldsymbol{b}}{\Vert\boldsymbol{b}\Vert})



### Gradient vector
For a multivariable function,
![f(x_1,x_2,...,x_n)](https://latex.codecogs.com/svg.latex?%5Cinline%20%5Clarge%20f%28x_1%2Cx_2%2C...%2Cx_n%29)
, the gradient \
![\nabla f=
\begin{bmatrix}
\frac{\partial f}{\partial x_1}\\
\frac{\partial f}{\partial x_2}\\
\vdots
\end{bmatrix}](https://latex.codecogs.com/svg.latex?%5Clarge%20%5Cnabla%20f%3D%20%5Cbegin%7Bbmatrix%7D%20%5Cfrac%7B%5Cpartial%20f%7D%7B%5Cpartial%20x_1%7D%5C%5C%20%5Cfrac%7B%5Cpartial%20f%7D%7B%5Cpartial%20x_2%7D%5C%5C%20%5Cvdots%20%5Cend%7Bbmatrix%7D)

The gradient vector, if evaluated at an input **_x_**, points in the direction of steepest ascent.

---

**Read [The Matrix Cookbook](../files/matrixcookbook.pdf) for quick reference to matrices operations, eigenvectors and eigenvalues, and singular value decomposition (SVD)**
