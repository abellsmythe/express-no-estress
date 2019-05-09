# Express no Estress

Express no Estress is an Express Based API skeleton. This project can be used for creating a RESTful API using Node JS, Express as the framework, Mongoose to interact with a MongoDB instance. Cucumber is also used for running unit tests in the project.

It also have a helper script to `make` all the files with a basic setup for a CRUD service

The resulting API from this project is a JSON REST API which will respond to requests over HTTP. REST Clients can, therefore, connect to the resulting REST server.

## File Structure

There is a good segregation of responsabilities with a solid architecture, Where the ***api*** folder contains everythings that it's stricted related to his name, there is a ***controller*** folder where must be placed the controller of Express implementing the corresponding service, inside the ***docs*** folder are all the swagger files related to the endpoints, in the ***events*** folder are the logic to trigger when an event is called, in the ***loaders*** folder are all the services that must be loaded with the app, in the ***models*** folder are the schemas for MongoDB, in the ***routes*** folder are all the routes of endpoints, in the ***services*** folder are the handlers to the database model, in the ***static*** folder are all the content that's public served and in the ***validations*** folder are the validations schema for the requests.

- api 
    - controllers
    - docs
    - events
    - helpers
    - loaders
    - models
    - routes
    - services
    - static
    - validations
- config
- features
- template

## What is API?

In computer programming, an Application Programming Interface (API) is a set of clearly defined methods of communication between various software components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer. An API may be for a web-based system, operating system, database system, computer hardware or software library. Just as a graphical user interface makes it easier for people to use programs, application programming interfaces make it easier for developers to use certain technologies in building applications. - [Wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface)

## What is REST?

Representational state transfer (REST) or RESTful web services is a way of providing interoperability between computer systems on the Internet. REST-compliant Web services allow requesting systems to access and manipulate textual representations of Web resources using a uniform and predefined set of stateless operations. - [Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)

## Installation

To start your project with Express no Estress, clone the repository from GitHub and install the dependencies.

```
$ git clone https://github.com/abellsmythe/express-no-stress.git ./projectName 
$ cd projectName
$ npm install
```

Then generate your first API endpoint

```
$ npm run make:resource Test
```

Try out your new endpoint.

Start the app

```
$ npm start
```
by default, the app will start on `PORT 3000`

You can change the PORT by adding a `PORT` environment variable. 
eg.

```
$ PORT=6000 npm start
```
now the app will start on `PORT 6000`

To config all the environments variables cp the `.env.example` to `.env` and replace what you need 
```
$ cp .env.example .env
```

You will now be able to access CRUD (create, read, update and delete) endpoints 

- `[POST] http://localhost:3000/test` Create test resource
- `[GET] http://localhost:3000/test/search/:search?` Get test resources. Supports search
- `[GET] http://localhost:3000/test/:id` Get a test resource
- `[PUT] http://localhost:3000/test/:id` Update one test resource
- `[DELETE] http://localhost:3000/test/:id` Delete one test resource

## Make Helper

Easy generate your API endpoint

```
$ npm run make:model Test
$ npm run make:service Test
$ npm run make:controller Test
$ npm run make:routes Test
$ npm run make:events Test
$ npm run make:validations Test
$ npm run make:docs Test
$ npm run make:resource Test
```

You can find more information running 

```
$ npm run make --help
```

## Versioning your API endpoints

You can create multiple versions of your API endpoints by simply adding the version number to your route file name. eg. `users.v1.js` will put a version of the users resources on the `/v1/users` endpoint. users.v2.js will put a version of the users resources on the `/v2/users` endpoint. The latest version of the resources will always be available at the `/users` endpoint.

> NOTE: This project will automatically load route files found in the routes folder.

## Running Unit Tests

All generated endpoints come with complete test suits, we encourage you to update the tests as you extend the logic

```
$ npm test
```

### Author

[Alton Bell Smythe](https://abellsmythe.me)