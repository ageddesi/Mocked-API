<!-- omit in toc -->
# Contributing to Mocked-API

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

<!-- omit in toc -->
## Table of Contents

    - [I Have a Question](#i-have-a-question)
    - [I Want To Contribute](#i-want-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Your First Code Contribution](#your-first-code-contribution)
    - [Improving The Documentation](#improving-the-documentation)
    - [Coding Conventions](#Coding-Conventions)
    - [Commit Messages](#commit-messages)
    - [Join The Project Team](#join-the-project-team)



## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](https://api.mocked-api.dev/).

Before you ask a question, it is best to search for existing [Issues](https://github.com/ageddesi/Mocked-API/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/ageddesi/Mocked-API/issues/new/choose).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

<!--
You might want to create a separate issue tag for questions and include it in this description. People should then tag their issues accordingly.

Depending on how large the project is, you may want to outsource the questioning, e.g. to Stack Overflow or Gitter. You may add additional contact and information possibilities:
- IRC
- Slack
- Gitter
- Stack Overflow tag
- Blog
- FAQ
- Roadmap
- E-Mail List
- Forum
-->

## I Want To Contribute

> ### Legal Notice <!-- omit in toc -->
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Reporting Bugs

<!-- omit in toc -->
#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the [documentation](https://api.mocked-api.dev/). If you are looking for support, you might want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](https://github.com/ageddesi/Mocked-API/issues?q=is%3Aopen+is%3Aissue+label%3Abug).
- Also make sure to search the internet (including Stack Overflow) to see if users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
- Stack trace (Traceback)
- OS, Platform and Version (Windows, Linux, macOS, x86, ARM)
- Version of the interpreter, compiler, SDK, runtime environment, package manager, depending on what seems relevant.
- Possibly your input and the output
- Can you reliably reproduce the issue? And can you also reproduce it with older versions?

<!-- omit in toc -->
#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead sensitive bugs must be sent by email to <>.
<!-- You may add a PGP key to allow the messages to be sent encrypted as well. -->

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/ageddesi/Mocked-API/issues/new/choose). (Since we can't be sure at this point whether it is a bug or not, we ask you not to talk about a bug yet and not to label the issue.)
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the *reproduction steps* that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `needs-repro`. Bugs with the `needs-repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`, as well as possibly other tags (such as `critical`), and the issue will be left to be [implemented by someone](#your-first-code-contribution).

<!-- You might want to create an issue template for bugs and errors that can be used as a guide and that defines the structure of the information to be included. If you do so, reference it here in the description. -->


### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Mocked-API, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

<!-- omit in toc -->
#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation]() carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](https://github.com/ageddesi/Mocked-API/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

<!-- omit in toc -->
#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/ageddesi/Mocked-API/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/phw/peek) on Linux. <!-- this should only be included if the project has a GUI -->
- **Explain why this enhancement would be useful** to most Mocked-API users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

<!-- You might want to create an issue template for enhancement suggestions that can be used as a guide and that defines the structure of the information to be included. If you do so, reference it here in the description. -->

### Your First Code Contribution
<!-- TODO
include Setup of env, IDE and typical getting started instructions?
-->
1. When adding new API endpoints, please add OpenAPI comments
2. All code must have corresponding unit tests.
3. All API endpoints must have unit tests for all return codes.

### Improving The Documentation
<!-- TODO
Updating, improving and correcting the documentation

-->
## Coding Conventions

This is all about standardization :blush:

### Folders and Files Naming

All of the folders and files should use `kebab-case`.

> The `kebab-case` usage (in package, folder and file names) will make us easier when it's time to extract them into itsown package in the future.
>
> [Here is the related discussion](https://github.com/ageddesi/Mocked-API/issues/121#issuecomment-1273622574).

### File Extensions

This is all about the files and the clear definition of their usage :

    - APIs
        - `*.routes.ts`
        - This file located right inside the feature's folder
    - Data
        - `*.ts`
        - This file located under `data` folder of the feature's folder (e.g. `data/*.ts`)
        - This `data` folder is used to store the static data used in APIs (not your mock data)
    - Interfaces/Types
        - `*.types.ts`
        - This file located under `models` folder of the feature's folder (e.g. `models/*.types.ts`)
    - Utilities
        - `*.ts`
        - This file located under `utils` folder of the feature's folder (e.g. `utils/*.ts`)
    - Tests
        - `*.test.ts`
        - This file located under `tests` folder of the feature's folder (e.g. `tests/*.test.ts`)
        - This `tests` folder should follow the feature's folder structure, e.g. :
            - `tests/*.test.ts` -> test file for the APIs
            - `tests/utils/*.test.ts` -> test file for the APIs

### File Structures

The file structures in this repository should look like this :

    Mocked-API
    │   README.md
    │   package.json
    │   ...
    │
    └───middleware
    │   │
    │   └───rate-limiter
    │       │   rate-limiter.ts
    │       │
    │       └───models
    │           │
    │           └───rate-limiter-response.ts
    │
    └───modules
    │   │
    │   └───feature-sample-1
    │   │   │   feature-sample-1.routes.ts
    │   │   │
    │   │   └───data
    │   │   │   │   data-1.ts
    │   │   │   │   data-2.ts
    │   │   │   │   ...
    │   │   │
    │   │   └───models
    │   │   │   │   address.types.ts
    │   │   │   │   country.types.ts
    │   │   │   │   ...
    │   │   │
    │   │   └───utils
    │   │   │   │   util-1.ts
    │   │   │   │   util-2.ts
    │   │   │   │   ...
    │   │   │
    │   │   └───tests   /* Should have the same structure with `feature-sample-1` folder */
    │   │       │   feature-sample-1.test.ts   /* Test for `feature-sample-1.routes.ts` */
    │   │       │
    │   │       └───utils
    │   │           │   util-1.test.ts
    │   │           │   util-2.test.ts
    │   │           │   ...
    │   │
    │   └───feature-sample-2
    │   │   │   *.routes.ts
    │   │   │
    │   │   └───data
    │   │   │   │
    │   │   │   └─── *.ts
    │   │   │
    │   │   └───models
    │   │   │   │
    │   │   │   └─── *.types.ts
    │   │   │
    │   │   └───utils
    │   │   │   │
    │   │   │   └─── *.ts
    │   │   │
    │   │   └───tests   /* Should have the same structure with `feature-sample-2` folder */
    │   │       │   *.test.ts
    │   │       │
    │   │       └───utils
    │   │           │
    │   │           └─── *.ts
    │   │
    │   └───feature-sample-3
    │       │   *.routes.ts
    │       │
    │       └───data
    │       │   │
    │       │   └─── *.ts
    │       │
    │       └───models
    │       │   │
    │       │   └─── *.types.ts
    │       │
    │       └───utils
    │       │   │
    │       │   └─── *.ts
    │       │
    │       └───tests   /* Should have the same structure with `feature-sample-3` folder */
    │           │   *.test.ts
    │           │
    │           └───utils
    │               │
    │               └─── *.ts
    │
    └───utils
    │   │   file-utils-1.ts
    │   │   file-utils-2.ts
    │   │   ...
    │   │
    │   └───tests
    │       │   file-utils-1.test.ts
    │       │   file-utils-2.test.ts
    │       │   ...
    │
    └───another-folders

### Commit Messages

We use semantic commit messages

- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating grunt tasks etc; no production code change)

## Join The Project Team
<!-- TODO -->

## Add an API endpoint

This example will use `users` as a new TAG for OpenAPI, meaning we will have dedicated endpoints to get some mocked users or create new ones.

### How to add an endpoint

Endpoints should be created in a `<TOPIC>-routes.ts` file under `./modules/<TOPIC>/api` folder.
We assume `<TOPIC>` as a new TAG on OpenAPI, meaning a different category with dedicated endpoints like `address`, `countries`, `currency`, and son on... We will use `users` topic in our examples.

Example on how to create and endpoint for a new topic:

- 1 - Create a new folder with the topic name, under `./modules` folder, like `./modules/users`
- 2 - Create a new file with mocked data, under `./modules/users/data`, like `./modules/users/data/users.ts`. Example:
```javascript
const usersList = [
    {
    "email": "male@example.com",
    "gender": "male",
    "username": "user0000",
    "first_name": "John",
    "last_name": "Doe",
    "title": "mr",
    },
    {
    "email": "female@example.com",
    "gender": "male",
    "username": "user0001",
    "first_name": "Hydra",
    "last_name": "Smith",
    "title": "mrs",
    },
    ...
]
```
- 3 - Create an `api` folder to store the `routes` file, like `./modules/users/api/users-routes.ts`
- 4 - Create different endpoints for users. Example:

```javascript
import usersList from '../data/users';

module.exports = function (app: core.Express) {
    app.get('/users', (req: Request, res: Response) => {
        res.json({
            users: usersList,
        });
    });
}
```

Note: This endpoint will fetch all mocked users stored in `./modules/users/data/users.ts`

### [How our folders are structured](#file-structures)

### How to write tests

For each module you create you will also need to create a tests folder, Inside this folder there should be a `api` and `utils`
(if you create any utils) folder.

The utils tests are fairly simple jests tests, the `api` routes tests are slightly different where you will need to add

```javascript
import request from 'supertest';
import app from 'path/to/app';
```

to your tests and make a request in your test instead of calling a normal function.

### How to run tests

run `npm test`
run `npm run test:watch` to run the tests in watch mode.

### How to add OpenAPI comments

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
import usersList from '../data/users';

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
    app.get('/users', (req: Request, res: Response) => {
        res.json({
            users: usersList,
        });
    });
}
```
