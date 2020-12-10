# Coursework 1
A simple coursework on Foundations of Data Science (COMP6235). Focuses on simple data analysis, distributions, regression, and data visualisation. Example analyses include plotting distributions, scatter plots, and correlation, and also describing them by measures of centrality, spread, and other statistics.

### Files
- `COMP6235_CW1_Tutorial.ipynb`: Simple tutorial on `pandas.DataFrame`, `matplotlib.pyplot`, `seaborn`, and `scipy.stats`
- `COMP6235_Regression.ipynb`: Simple tutorial on regression using `sklearn` and `statsmodels`
- `CW1.ipynb`: Actual work done for coursework
- `fish1.txt`: Coursework dataset

### Environment
Python 3.6

## Coursework Details

### Dataset
The data set records data for a time period of one day during which one fisherman has fished in a lake. The fisherman uses three types of fishing rods, labeled A, B, and C, each using different bait. The fisherman has recorded every catch he has made during this time. The data set consists of three columns with X values giving the times at which the fisherman has made a catch, the Y values indicate the size of that catch (i.e. its weight in kg), and the Z values give a letter A, B, or C which indicates which fishing rod was used to make that catch.

### Requirements
In a first step, generate a plot that illustrates the distributions of X values (times of catch, the format is hours, fraction of hours on a 24h schedule for the day). Then also plot the distribution of Y values (size of catch), and finally generate a plot which analyses the effectiveness of each type of bait. Characterise and describe these distributions by measures of centrality, spread, and suitable additional measures introduced in the introduction to statistics lectures that you think shed light on the shape of the respective distributions. Assuming that the data are a sample from a larger population, give mean values with 95% confidence intervals for both distributions.

In a second step, it is of interest to analyse the dependence between time of catch (X value) , size of catch (Y value), and the type of bait used (Z). Generate suitable plots to analyze these relationships and characterize them by statistical measures. What is the correlation between X and Y? Analyse the amount of information about Y that is given by knowledge of X.

More generally, address the following questions and give support for your answers:
1. What is the best time to go fishing at this lake?
2. Which bait is most effective?
3. What is the best type of bait to use at 3pm in the afternoon?
