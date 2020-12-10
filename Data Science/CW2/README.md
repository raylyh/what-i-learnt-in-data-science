# Coursework 2
Second coursework on Foundations of Data Science (COMP6235). Focuses on **PyMongo**, **MongoDB** and **Hadoop**.

### Files
- `COMP6235+CW+2+-1819_Task1n2 - Main.ipynb`: Actual work

### Environment
- Python 3.6
- Pymongo 3.9.0
- MongoDB 4.2.1
- VM with Hadoop installed

## Coursework Details
First task assesses the ability to populate a MongoDB database, and query data from it. Import the data into a collection called `messages` in a database called `enron`. Perform a set of queries using the Python library PyMongo.

Second task assesses the ability to use the Hadoop Streaming API and MapReduce to process data. For each of the questions below, write two Python scripts, one for the Map phase and one for the Reduce phase. Provide the correct parameters to the Hadoop command to run the MapReduce process.

### Dataset
> not included in the git repository

1. Enron email data for MongoDB
2. YouTube spam-comments data for Hadoop


### Requirements
#### Task 1: MongoDB
> For all functions, optimise for speed.

1. Write a function, which returns a MongoDB connection object to the messages collection.
2. Write a function, which returns the total number of emails in the messages collection.
3. Write a function, which returns each person who was Bcc’ed on an email. Include each person only once. Display only their name, according to the X-To header.
4. Write a function with parameter subject, which returns all emails in the email thread with that subject, and order them by date in ascending order.
5. Write a function, which returns the fraction of emails that have been sent on a weekend (i.e., Saturday and Sunday). The output should be a float between 0 and 1 (i.e. 20% corresponds to 0.2).
6. Write a function with parameter limit. The function should return for all email accounts: the number of emails sent; the number of emails received; and the total number of emails (sent and received). Use the following format: [{"contact": "michael.simmons@enron.com", "from": 42, "to": 92, "total": 134} and the information contained in the To, From, and Cc headers. Sort the output in descending order by the total number of emails. Use the parameter limit to specify the number of results to be returned. If limit is null, the function should return all results. If limit is higher than null, the function should return the number of results specified as limit. limit cannot take negative values.
7. Write a function to find out the number of users who are sender and direct receivers. A sender is someone who has sent one email or more. A direct receiver is someone who has received at least one email as a recipient of the To header, and not via Cc or Bcc.
8. Write a function with parameters start_date and end_date, which returns the number of email messages that have been sent between those dates, including start_date and end_date

#### Task 2: Hadoop
1. Using the Youtube01-Psy.csv dataset, write a function to find the hourly interval, in which most spam was sent. The output should be in the form of a single key-value pair, where the value is a datetime at the start of the hour with the highest number of spam comments.
2. Using all five datasets, write a function with parameter username to find all comments associated with that user. Return a JSON array of all comments associated with the user.
