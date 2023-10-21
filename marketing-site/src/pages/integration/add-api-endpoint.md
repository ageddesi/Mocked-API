---
layout: ../../layouts/BlogPost.astro
title: "Add an API endpoint"
pubDate: "01th October 2023"
heroImage: "/Hfest-Logo-2-Color-Manga.png"
category: "news"
summary: "We are suppy happy to be apart of hacktoberfest this year..."
author: "Aaron Rackley"
---

Add an API endpoint
===================

This example will use `users` as a new TAG for OpenAPI, meaning we will have dedicated endpoints to get some mocked users or create new ones.

How to add an endpoint
----------------------

Endpoints should be created in a `<TOPIC>-routes.ts` file under `./modules/<TOPIC>/api` folder.
We assume `<TOPIC>` as a new TAG on OpenAPI, meaning a different category with dedicated endpoints like `address`, `countries`, `currency`, and son on... We will use `users` topic in our examples.

Example on how to create and endpoint for a new topic:

    - 1 - Create a new folder with the topic name, under `./modules` folder, like `./modules/users`
    - 2 - Create a new file with mocked data, under `./modules/users/data`, like `./modules/users/data/users.ts`.
    - 3 - Create an `api` folder to store the `routes` file, like `./modules/users/api/users-routes.ts`
    - 4 - Create different endpoints for users. Example:

```javascript
import usersList from "../data/users";

module.exports = function (app: core.Express) {
  app.get("/users", (req: Request, res: Response) => {
    res.json({
      users: usersList,
    });
  });
};
```

Note: This endpoint will fetch all mocked users stored in `./modules/users/data/users.ts`

How to write tests
----------------------

For each module you create you will also need to create a tests folder, Inside this folder there should be a `api` and `utils`
(if you create any utils) folder.

The utils tests are fairly simple jests tests, the `api` routes tests are slightly different where you will need to add

```javascript
import request from "supertest";
import app from "path/to/app";
```

to your tests and make a request in your test instead of calling a normal function.

How to run tests
----------------------

run `npm test`
run `npm run test:watch` to run the tests in watch mode.

How to add OpenAPI comments
----------------------

For each endpoint you should do an OpenAPI comment, this way, you will make sure your endpoint will be reflected in swagger, as well as the response schema and type are correct.
To describe describe an endpoint as an OpenAPI comment, you should use the yaml structure like this:

    - 1 - Define the path
    - 2 - Define the http method referent to that path
    - 3 - Define the tag in order to group all endpoints referent to the same TAG (in this case, all `users` endpoints will be grouped under the tag `Users`)
    - 4 - Define a brief summary of you endpoint
    - 5 - Define the response types for the endpoint (200 - OK ; 404 - Not found, etc...)
    - 6 - Define the schema of the response

Note: You can define the properties of each schema or reuse a schema that already exists

Each OpenAPI comment should start with `@openapi` in order to be read by swagger and reflected on it.

Example:

```javascript
/**
 * @openapi
 * '/users':
 *   get:
 *     tags:
 *     - Users
 *     summary: Obtain a list of all users
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: example@example.com
 *               gender:
 *                 type: string
 *                 example: male
 *               username:
 *                 type: string
 *                 example: user00000
 *               first_name:
 *                 type: string
 *                 example: John
 *               last_name:
 *                 type: string
 *                 example: Doe
 *               title:
 *                 type: string
 *                 example: mr
 */
```

This describe the get endpoint that we did [here](#how-to-add-an-endpoint).

After doing the OpenAPI comment:

```javascript
import usersList from "../data/users";

module.exports = function (app: core.Express) {
  /**
   * @openapi
   * '/users':
   *   get:
   *     tags:
   *     - Users
   *     summary: Obtain a list of all users
   *     responses:
   *       '200':
   *         description: OK
   *         schema:
   *           type: array
   *           items:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 example: example@example.com
   *               gender:
   *                 type: string
   *                 example: male
   *               username:
   *                 type: string
   *                 example: user00000
   *               first_name:
   *                 type: string
   *                 example: John
   *               last_name:
   *                 type: string
   *                 example: Doe
   *               title:
   *                 type: string
   *                 example: mr
   */
  app.get("/users", (req: Request, res: Response) => {
    res.json({
      users: usersList,
    });
  });
};
```
