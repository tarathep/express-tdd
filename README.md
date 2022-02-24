# express-tdd
CRUD REST API with Nodejs using TDD in Jest in JavaScript, with unit testing and integration test Deploy to Azure AppService(WebApp)


## Init Project

**Create Project**

```bash
mkdir express-tdd
cd express-tdd
npm init -y
```

**Install Dependencies**

- express

    ```bash
    npm install express
    ```
- mongoose

    ```bash
    npm install mongoose
    ```

- mongodb-memory-server

    ```bash
    npm install mongodb-memory-server
    ```

- node-mocks-http

    ```bash
    npm install node-mocks-http
    ```

- dotenv

    ```bash
    npm install dotenv
    ```

devDependencies

- jest

    ```bash
    npm install jest --save-dev
    ```

- supertest

    ```bash
    npm install supertest --save-dev
    ```

## Existing Project

```bash
npm install
```

## Configurations

|Name|Default Value|
|---|---|
|ENVIRONMENT|None|
|PORT|3000|
|DATABASE_NAME|todo-tdd|
|DATABASE_URL|None|

## Run

```bash
npm run start
```

## Unit Test with Jest

```bash
npm run test
```

## APIs List ##

|METHOD|URI|Description|
|---|---|---|
|POST|/todos|Register a new todo|
|GET|/todos|Get all Todos|
|GET|/todos/:todoId|Get Todo by Id|
|PUT|/todos:todoId|Update Todo by Id|
|DELETE|/todos:todoId|Delete Todo by Id|


### cUrl Command

**Register a new todo**

```bash
curl --location --request POST 'localhost:8080/todos' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "Create new Project",
  "done": true
}'
```

**Get all Todos**

```bash
curl --location --request GET 'localhost:8080/todos'
```

**Get Todo by Id**

```bash
curl --location --request GET 'localhost:8080/todos/621725702853491b246744cc'
```

**Update Todo by Id**

```bash
curl --location --request PUT 'localhost:8080/todos/621725702853491b246744cc' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "new update first",
  "done": true
}'
```

**Delete Todo by Id**

```bash
curl --location --request DELETE 'localhost:8080/todos/621725702853491b246744cc'
```






