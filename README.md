# Express no Estress

Express no Estress is an Express Based API skeleton. A template for starting projects with express as an API. This project can be used for creating a RESTful API using Node JS, Express as the framework, Mongoose to interact with a MongoDB instance. Cucumber is also used for running unit tests in the project.

The resulting API from this project is a JSON REST API which will respond to requests over HTTP. REST Clients can, therefore, connect to the resulting REST server.

## What is API?

In computer programming, an application programming interface (API) is a set of clearly defined methods of communication between various software components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer. An API may be for a web-based system, operating system, database system, computer hardware or software library. Just as a graphical user interface makes it easier for people to use programs, application programming interfaces make it easier for developers to use certain technologies in building applications. - [Wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface)

## What is REST?

Representational state transfer (REST) or RESTful web services is a way of providing interoperability between computer systems on the Internet. REST-compliant Web services allow requesting systems to access and manipulate textual representations of Web resources using a uniform and predefined set of stateless operations. - [Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)

## Installation

To start your project with Express no Estress, clone the repository from GitHub and install the dependencies.

```
$ git clone https://github.com/abellsmythe/express-no-stress.git ./yourProjectName 
$ cd yourProjectName
$ npm install
```

Then generate your first API endpoint

```
$ npm run make --name yourFirstEndpoint // This command will create a CRUD endpoint for yourFirstEndpoint.
```

Try out your new endpoint.

Start the app

```
$ npm start
```
by default, the app will start on `PORT 8080`

You can change the PORT by adding a `PORT` environment variable. 
eg.

```
$ PORT=6000 npm start
```
now the app will start on `PORT 6000`

You will now be able to access CRUD (create, read, update and delete) endpoints 

`[POST] http://localhost:8080/yourFirstEndpoint` Create yourFirstEndpoint resources
`[GET] http://localhost:8080/yourFirstEndpoint/search/:search?` Get yourFirstEndpoint resources. Supports limits, sorting, pagination, select (projection), search and date range
`[GET] http://localhost:8080/yourFirstEndpoint/:id` Get a yourFirstEndpoint resource
`[PUT] http://localhost:8080/yourFirstEndpoint/:id` Update one yourFirstEndpoint resource
`[DELETE] http://localhost:8080/yourFirstEndpoint/:id` Delete one yourFirstEndpoint resource

## Versioning your API endpoints

You can create multiple versions of your API endpoints by simply adding the version number to your route file name. eg. `users.v1.js` will put a version of the users resources on the `/v1/users` endpoint. users.v2.js will put a version of the users resources on the `/v2/users` endpoint. The latest version of the resources will always be available at the `/users` endpoint.

> NOTE: This project will automatically load route files found in the routes folder.

## File Structure

- api 
    - controllers
    - docs
    - loaders
    - models
    - routes
- config
- features
- template

## Running Unit Tests

All generated endpoints come with complete test suits, we encourage you to update the tests as you extend the logic

```
$ npm test
```