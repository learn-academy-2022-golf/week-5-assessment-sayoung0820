# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer:

Calling super in a class will allow you to access the main class and it's properties. This gives access to the methods used by the main class which makes it easier for modification. Super is not a variable.

Researched answer:

Super is a keyword related to the idea of inheritance in Javascript, but is used in many programming languages. In general, it provides a reference to a parent class. Calling super in a child class in Javascript, will allow you to access the parent class and it's properties and methods. It is mainly used to access a variable, method, or construtor in the parent class. Super can be used in two ways. The first is as a function call. This passes an argument in a function. This can accept all the arguments that were used to create the parent constructor. The second is as a "property lookup" or an object. 

2. What is a gem?

Your answer:

A gem is a file in a library or database that is used to store data. Gems are prepopulated in the ruby app and essentially make the code work. 

Researched answer:

Ruby gems are built in open sourced libraries that contain custom Ruby code methods written by other coders. They are packaged with more data that allows a programmer to use the code contained in the gem within their own code or program, without having to insert the code. This makes writing the code much faster and easier. Gems can be used for many different purposes and there are currenlty over 160,000 gems available.

3. What is a relational database? Are there other kinds of databases?

Your answer:

Relational databases are databases that store information in tables. The tables consist of rows and columns, and can have multiple rows/columns.  

Researched answer:

Relational databases are databases that hold information in tables of rows and columns. It has the ability to establish relationships by joining other tables. This makes it easy to understand the connection between data types. Relational databases define the name and data of each column using a schema - the description of the layout of all the tables in a database including the name and data type of each column in each table. Relational databases are typically used for processing and managing transactions, but can be used for many other purposes. While the main benefit of a relational database is to connect data from different tables, it also has many other benefits such as being easy to navigate, saving time and money, and helps to eliminate duplicate information. 

4. What are primary keys? Why are they important?

Your answer:

Primary keys are unique keys that gives each entry on the table a unique indentifier. This prevents confusing data that have similar information. 

Researched answer:

A primary key is a unique column in a relational database that is distinctive for each record. It is used as a unique indentifier that contains unique values and indentifies each row in a table. It can also be called a primary keyword and can be used to compare, sort, and store records. Choosing the primary key is the most important step in the database process. They can consist of a single attribute or multiple attributes together. Primary keys should never be changed and cannot contain NULL values. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:

The most commonly used HTTP verbs are POST, PUT, PATCH, and DELETE. They correspond to create, read, update, and delete. 

Researched answer:

There are total of 39 total HTTP verbs, and each one provides a method for interactions. The most common HTTP methods are POST which corresponds to the CRUD method Create; GET which corresponds to the CRUD method Read, PUT which corresponds to the CRUD method Update or Replace, PATCH which corresponds to the CRUD method Update/Modify, and DELETE which corresponds to DELETE.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:

REST stands for Representational State Transfer. RESTful routing is a set of standards used in many different languages to create efficient, reusable routes. It maps HTTP methods or verbs and CRUD actions together in a conventional pattern.

2. Ruby on Rails:

Ruby on Rails is a full stack framework that contains all the tools needed to build web apps on both the front and back end. It renders HTML templates, updates databases, sends/receives emails, and maintains live pages using WebSockets which provides solid security protections for common attacks. 

3. Database migrations:

Migrations are a convenient way to alter your database schema over in a consistent manner, using Ruby DSL (Domain Specific Language) so that SQL doesn't have to be written by hand, allowing the schema and changes to be database independent.

4. Params:

Params, an alias for parameters, are variables that are defined in the method definition that represent the ability of a method to accept arguments. If we do not have the appropriate parameters then we will not be able to pass arguments to a method that will contain the data we need.

5. ERB:

ERB is a templating machine that allows you to mix HTML and Ruby to generate web pages using data from your database. ERB is a Rails default engine for rendering views. It provides an easy to use templating system that allows code to be added to any plain text document for the purpose of generating document information details and/or flow control.
