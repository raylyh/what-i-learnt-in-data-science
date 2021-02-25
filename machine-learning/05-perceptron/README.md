# Perceptron
> The mathematical notation follows the linear regression part

This part of the notes explains perceptron in a more mathematical way in the context of 2 class classification.

![\boldsymbol{x}](images/x.svg) are the data and ![\boldsymbol{w}](images/w.svg) are the model weights the perceptron algorithm aims to learn.

## Idea
Let's say we need to classify data points into two classes.

A basic idea of error measure would be to count the number of misclassified examples. However, in a machine learning perspective, **this error measure cannot be differentiated and compute the gradient** because essentially the graph would be a piecewise constant.
<!--TODO: insert 1st graph from handwritten notes COMP6245-->

Instead, the error measure can be ![E_p=-\sum\boldsymbol{x}_m^T\boldsymbol{w}](images/per1.svg), where each ![boldsymbol{x}_m](images/xm.svg) is a **misclassified** example. Therefore, the summation is over misclassified examples with the dot products between the weights and a misclassified example.

First, the class boundary in the perceptron algorithm is ![\boldsymbol{x}^T\boldsymbol{w}=0](images/clsboundary.svg). \
In an ideal situation, ![\boldsymbol{x}_n^T\boldsymbol{w}>0](images/per2.svg) for the positive class and ![\boldsymbol{x}_n^T\boldsymbol{w}<0](images/per3.svg) for the negative class. Then, we can _switch signs_ for the negative class so that ![\boldsymbol{x}_n^T\boldsymbol{w}>0](images/per2.svg) for all data.
<!--TODO: insert 2nd graph from handwritten notes COMP6245-->

So, for the misclassified examples, ![E_p=-\sum\boldsymbol{x}_m^T\boldsymbol{w}](images/per1.svg) should be minimised.

## Gradient Descent
Therefore, the gradient of the error measure is ![\frac{\partial E_p}{\partial \boldsymbol{w}}=\nabla_{\boldsymbol{w}}E_p=-\sum\boldsymbol{x}_m](images/per4.svg), where ![boldsymbol{x}_m](images/xm.svg) is misclassified by the current value of ![\boldsymbol{w}](images/w.svg) at iteration _k_.

##### Gradient Descent
![\begin{align*}
\boldsymbol{w}^{(k+1)}&=\boldsymbol{w}^{(k)}-\eta(-\sum\boldsymbol{x}_m) \\
&=\boldsymbol{w}^{(k)}+\eta\sum\boldsymbol{x}_m
\end{align}](images/per5.svg)

##### Stochastic Gradient Descent (SGD)
![\begin{align*}
\boldsymbol{w}^{(k+1)}&=\boldsymbol{w}^{(k)}-\eta(-\boldsymbol{x}_m) \\
&=\boldsymbol{w}^{(k)}+\eta\,\boldsymbol{x}_m
\end{align}](images/per6.svg)

## Convergence Proof
> The proof

Using the stochastic gradient descent and setting the learning rate to 1. Again, ![](images/xm.svg) is a misclassified input by the current value of ![](images/w.svg) at iteration _k_. The **learning rule** is:

![\boldsymbol{w}^{(k+1)}=\boldsymbol{w}^{(k)}+\boldsymbol{x}_m](images/cp1.svg)

Similar to the idea above, the criterion are:
1. ![\boldsymbol{x}_n^T\boldsymbol{w}>0](images/per2.svg) for the positive class and ![\boldsymbol{x}_n^T\boldsymbol{w}<0](images/per3.svg) for the negative class
2. Switch signs for the negative class so that ![\boldsymbol{x}_n^T\boldsymbol{w}>0](images/per2.svg) for all data.
3. **Therefore, on misclassified data ![\boldsymbol{x}_m^T\boldsymbol{w}<0](images/der0.svg)**

### Derivation
Now, let ![\widehat{\boldsymbol{w}}](images/w_hat.svg) be a solution for linearly separable data, _i.e._ ![\boldsymbol{x}_n^T\widehat{\boldsymbol{w}}>0](images/cp2.svg) for all data. Our goal is to show that ![\Vert\boldsymbol{w}^{(k+1)}-\widehat{\boldsymbol{w}}\Vert^2<\Vert\boldsymbol{w}^{(k)}-\widehat{\boldsymbol{w}}\Vert^2](images/cp3.svg), meaning that **the learning rule brings a closer guess to a valid solution** after each update. Note that the magnitude of the solution does not matter since we only care about the direction of the solution vector, **so the goal can be written as**:

![\Vert\boldsymbol{w}^{(k+1)}-\alpha\widehat{\boldsymbol{w}}\Vert^2<\Vert\boldsymbol{w}^{(k)}-\alpha\widehat{\boldsymbol{w}}\Vert^2](images/cp4.svg)

Therefore, from the learning rule, we can write the following equations:

![\begin{align*}
\because\boldsymbol{w}^{(k+1)}-\alpha\widehat{\boldsymbol{w}}&=\boldsymbol{w}^{(k)}-\alpha\widehat{\boldsymbol{w}}+\boldsymbol{x}_m \\
\therefore\Vert\boldsymbol{w}^{(k+1)}-\alpha\widehat{\boldsymbol{w}}\Vert^2&=\Vert\boldsymbol{w}^{(k)}-\alpha\widehat{\boldsymbol{w}}\Vert^2+2(\boldsymbol{w}^{(k)}-\alpha\widehat{\boldsymbol{w}})^T\boldsymbol{x}_m+\Vert\boldsymbol{x}_m\Vert^2 \\
\therefore\Vert\boldsymbol{w}^{(k+1)}-\alpha\widehat{\boldsymbol{w}}\Vert^2&< \Vert\boldsymbol{w}^{(k)}-\alpha\widehat{\boldsymbol{w}}\Vert^2-2\alpha\widehat{\boldsymbol{w}}^T\boldsymbol{x}_m+\Vert\boldsymbol{x}_m\Vert^2
\end{align}](images/der1.svg)

From the above definition, we know that ![{\boldsymbol{w}^{(k)}}^T\boldsymbol{x}_m<0](images/der2.svg) because ![](images/xm.svg) is misclassified. Also, ![\widehat{\boldsymbol{w}}^T\boldsymbol{x}_m>0](images/der3.svg) because ![](images/w_hat.svg) is the solution. So, we can find the **lower bound of the update** by the following assumptions:

![\begin{align*}
\beta^2&=\max\Vert\boldsymbol{x}_m\Vert^2 \\
\gamma&=\min\widehat{\boldsymbol{w}}^T\boldsymbol{x}_m \\
\alpha&=\frac{\beta^2}{\gamma}
\end{align}](images/der4.svg)

The equation then becomes:

![\Vert\boldsymbol{w}^{(k+1)}-\alpha\widehat{\boldsymbol{w}}\Vert^2<\Vert\boldsymbol{w}^{(k)}-\alpha\widehat{\boldsymbol{w}}\Vert^2-\beta^2](images/der5.svg)

This shows that in theory, each update goes at least ![\beta^2](images/beta_2.svg) closer to a true solution that can linearly separate all the data, which also means that we will find a solution in at most:

![k_O=\frac{\Vert\boldsymbol{w}^{(0)}-\alpha\widehat{\boldsymbol{w}}\Vert^2}{\beta^2}](images/der6.svg) updates.

##### Note for algebra
![\begin{align*}
\Vert a+b \Vert^2&=(a+b)^T(a+b) \\
&=a^Ta+a^Tb+b^Ta+b^Tb \\
&=\Vert a \Vert^2+2a^Tb+\Vert b \Vert^2
\end{align}](images/note1.svg)
