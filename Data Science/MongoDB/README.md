# MongoDB
A database with **collections** with **documents** with **fields**.

> **Documents** can be added to, removed from or updated in a **collection**. A **collection** can also be searched for **documents**.

- An open-source NoSQL **document-oriented** database
- Stores JSON-like documents (dynamic schemas)(BSON binary JSON)
    - essentially JSON with some additional optimisations
- Includes a strong query language (javascript)
- Powerful, flexible indexing (including geospatial)
- Sharding and replication
- Cross-platform (many drivers)

Check out the [notebook](pymongo_code.ipynb) for useful PyMongo code.

## Introduction

A document consists of (key, value) pairs. The keys all strings, and the values can be a variety of data types, e.g. string, integer, boolean, array and double.
Example of a document
```json
{
    "_id": 1,
    "TutorialName": "MongoDB",
    "Year": 2019,
    "Room": "I have no idea",
    "Other People": ["Age", "Mike", "Amber"],
    "Demonstrator Today": {
        "Name": "Callum",
        "Year Started At University": 2013
    },
    "ContrivedExample": True
}
```

### Setting up MongoDB

### Useful Links
[PyMongo API Documentation](https://pymongo.readthedocs.io/en/stable/api/index.html)

### Online tutorials
https://api.mongodb.com/python/current/api/index.html
https://docs.mongodb.com/manual/introduction/
https://www.tutorialspoint.com/mongodb/index.htm
https://www.w3schools.com/python/python_mongodb_getstarted.asp

### Notes for pymongo
- [x] add masters tutorial pymongo_code.ipynb
- [ ] add HKUST notes to pymongo_code.ipynb
