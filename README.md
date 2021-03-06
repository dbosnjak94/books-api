#Books & Authors - REST API and Client

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Web application for page administrators and book authors. It enables administrators to manipulate </br>
author profiles by adding, editing, and deleting author accounts. For authors on the other hand</br>
to the book opuses of other authors and to add, edit and delete books from their personal list.</br>

## Technologies
Project is created with:
* React.js (JavaScript)
* Node.js (Typescript)
* MySQL

NPM libraries used un the project:

Client-side:
* axios: 0.24.0
* react-bootstrap: 2.1.0
* prettier: 2.5.1 
* react-dom: 17.0.2
* react-router-dom: 6.2.1 
* react-scripts: 5.0.0

Server-side:
* bcrypt: 5.0.1
* cors: 2.8.5
* dotenv: 10.0.0
* express: 4.17.2
* jsonwebtoken:8.5.1
* morgan: 1.10.0
* mysql2: 2.3.3
* npm-run-all: 4.1.5
* rimraf: 3.0.2
* swagger-ui-express: 4.3.0

## Setup
To run this project, MySQL database needs to be created from MySQL script</br>
which can be found in folder books-api/sql-script.

After that, you need to start server and client side of the app separately.

###Before you can start the project, you need to create .env in book-api/server folder and fill it with necessary data:</br>
.env template:</br>
PORT=3001</br>
DB_HOST= *your database local host*</br>
DB_PORT=*your database local port*</br>
DB_USER=*your databse local user*</br>
DB_PASSWORD=*your databse local password*</br>
DB_DATABASE=library</br>
DB_SALT_ROUNDS=10

Starting client-side:
```
$ cd client
$ npm install
$ npm run start
```

Starting server-side
```
$ cd server
$ npm install
$ npm run start
```
###Client-side URL
To start the client in your web browser visit: http://localhost:3000

###Authorization
All users have identical password: "Password1"</br>
To login to Admin dashboard you can use:</br>
mail: dominik.bosnjak94@gmail.com </br>
password: Password1 </br>

To login to Author dashboard you can use:</br>
mail: frank.herbert@gmail.com </br>
password: Password1 </br>

###Swagger-UI
To visit Swagger endpoint documentation visit:  http://localhost:3001/api/api-docs#

V2