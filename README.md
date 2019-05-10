# Express no Estress

Express no Estress is an Express Based API skeleton. This project can be used for creating a RESTful API using NodeJS, `express` as the framework, `mongoose` MongoDB ODM with great packages for handle secutiry like `helmet` and `hpp` and others like `body-parser`, `cookie-parser` `cors`. `cucumber` is also used for running integration tests for the endpoints and `swagger` for docs.

It have a helper command to `make` all the files with a basic setup for a CRUD service

The resulting API from this project is a JSON RESTful API which will respond to requests over HTTP(s)

## What is API?

In computer programming, an Application Programming Interface (API) is a set of clearly defined methods of communication between various software components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer. An API may be for a web-based system, operating system, database system, computer hardware or software library. Just as a graphical user interface makes it easier for people to use programs, application programming interfaces make it easier for developers to use certain technologies in building applications. - [Wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface)

## What is REST?

Representational state transfer (REST) or RESTful web services is a way of providing interoperability between computer systems on the Internet. REST-compliant Web services allow requesting systems to access and manipulate textual representations of Web resources using a uniform and predefined set of stateless operations. - [Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)


## Project Structure

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
    - public
    - validations
- config
- features
- template

| Name                                         | Description
| -------------------------------------------- | ------------------------------------------------------------
| **api**/                                     | API folder.
| **ap/controllers**/                          | Controllers using the Router from `express` and using a `Service` file.
| **ap/docs**/                                 | Swagger yaml files for `swagger-jsdoc`.
| **ap/events**/                               | Events Handler with a singleton of NodeJS `Event Emitter`.
| **ap/models**/                               | Schemas for `mongoose`.
| **ap/helpers**/                              | Helpers for the API.
| **ap/loaders**/                              | Load of multiples services/packages required for the API.
| **api/public**/                              | Static assets (fonts, css, js, img).
| **ap/routes**/                               | Routes using a `Controller` file.
| **ap/services**/                             | Services using a `Model` file (segregations of responsabilities).
| **ap/validations**/                          | Validations using `express-validator`.
| **api**/server.js                            | The main application file.
| **config**/                                  | Config folder, they are for give easy access and default values, the real config cames from the `.env`.
| **config/test**/                             | Config folder for `cucumber` test.
| **config/test/steps**/                       | Config steps for `cucumber`.
| **config/test/support**/                     | Config support for `cucumber`.
| **config/test**/config.js                    | Config for `cucumber`.
| **config**/body-parser.js                    | Config for `body-parser`.
| **config**/cookie-parser.js                  | Config for `cookie-parser`.
| **config**/cors.js                           | Config for `cors`.
| **config**/db.js                             | Config for `mongoose`.
| **config**/env.js                            | Config for general environment variables.
| **config**/keys.js                           | Config for secrets keys.
| **config**/limiter.js                        | Config for `express-limiter`.
| **config**/redis.js                          | Config for `redis`.
| **config**/session.js                        | Config for `express-session`.
| **config**/swagger.js                        | Config for `swagger`.
| **features**/                                | Features folder for `cucumber` test in gherkin.
| **template**/                                | Templates folder.
| **template**/controller.tmpl                 | Templates for API Controllers handled with the service.
| **template**/event.tmpl                      | Templates for API Events Handler.
| **template**/model.tmpl                      | Templates for API Model with `mongoose`.
| **template**/routes-with-validation.tmpl     | Templates for API Routes Validated handled with validations.
| **template**/routes.tmpl                     | Templates for API Simple Routes.
| **template**/service.tmpl                    | Templates for API Service handled with the model.
| **template**/swagger.tmpl                    | Templates for API Swagger Documentation.
| **template**/validations.tmpl                | Templates for API Validations throw `express-validator`.
| .dockerignore                                | Folder and files ignored by docker usage.
| .env.example                                 | Your API keys, tokens, passwords and database URI.
| .gitignore                                   | Folder and files ignored by git.
| author.js                                    | Script file.
| Dockerfile                                   | Docker configuration file.
| generator.js                                 | Script file for `npm run make` commands.
| package.json                                 | NPM dependencies.
| package-lock.json                            | Contains exact versions of NPM dependencies in package.json.

## List of Packages

| Package                         | Description
| ------------------------------- | ------------------------------------------------------------------------
| assert                          | Writing unit tests for your applications.
| body-parser                     | Node.js body parsing middleware.
| boxen                           | Create boxes in terminal.
| chalk                           | Terminal string styling done right.
| compression                     | Node.js compression middleware.
| cookie-parser                   | Node.js cookie parsing middleware.
| cors                            | Enable CORS with various options.
| cross-env                       | Set and use environment variables across platforms.
| cucumber                        | Tool for running automated tests written in plain language (gherkin)    |
| dotenv                          | Loads environment variables from .env file.
| express                         | Node.js web framework.
| express-limiter                 | Rate limiting middleware for Express.
| express-session                 | Simple session middleware for Express.
| express-status-monitor          | Reports real-time server metrics for Express.
| express-validator               | Easy form validation for Express.
| helmet                          | Secure Express apps by setting various HTTP headers.
| hpp                             | Express middleware to protect against HTTP Parameter Pollution attacks.
| lodash                          | A utility library for working with arrays, numbers, objects, strings.
| minimist                        | Scripts parse argument options.
| mongoose                        | MongoDB ODM.
| nodemon                         | Simple monitor script for use during development of a node.js app.
| pm2                             | Production process manager for Node.JS with a built-in load balancer.
| redis                           | Redis client library.
| request-promise                 | The simplified HTTP request client 'request' with Promise support.
| swagger-jsdoc                   | Generates swagger doc based on JSDoc.
| swagger-ui-express              | Middleware to serve the Swagger UI bound to your Swagger document.

## Getting Started

The easiest way to get started is to clone the repository from GitHub and install the dependencies.

```bash
# Get the latest snapshot
$ git clone https://github.com/abellsmythe/express-no-stress.git myproject

# Change directory
$ cd myproject

# Install NPM dependencies
$ npm install

# Then simply start your app
$ node app.js
```

Then generate your first API endpoint

```bash
$ npm run make:resource Test
```

Try out your new endpoint.

Start the app

```bash
$ npm start
```
by default, the app will start on `PORT 3000`

You can change the PORT by adding a `PORT` environment variable. 
eg.

```bash
$ PORT=6000 npm start
```
now the app will start on `PORT 6000`

To config all the environments variables cp the `.env.example` to `.env` and replace what you need 

```bash
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

```bash
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

```bash
$ npm run make --help
```

## Versioning your API endpoints

You can create multiple versions of your API endpoints by simply adding the version number to your route file name. eg. `users.v1.js` will put a version of the users resources on the `/v1/users` endpoint. users.v2.js will put a version of the users resources on the `/v2/users` endpoint. The latest version of the resources will always be available at the `/users` endpoint.

> NOTE: This project will automatically load route files found in the routes folder.

## Running Unit Tests

All generated endpoints come with complete test suits, we encourage you to update the tests as you extend the logic

```bash
$ npm test
```

## Contributing

If something is confusing, unclear or needs to be refactored, please let me know. Pull requests are always welcome. Please open an issue before submitting a pull request.

### Author

[Alton Bell Smythe](https://abellsmythe.me)