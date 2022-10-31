# Notes
This is a reference document for the implementation of the MockAPI Analytics Middleware.

Analytics is based on an interface - the imaginitively named IAnalytics interface.
This describes the functionality required for an analytics provider.

## Code provided

There are 2 'reference' implementation for analytics.  
    - conlog
A simple console based analytics logger, which will write requests to the console.

- plausible-logger
A analytics logger that posts API request information to the [Plausible](https://plausible.io/) analytics system

Additionally a docker-compose file has been created to stand up a plausible server environment based on the plausible self hosting instructions.

## What is an analytics provider

An Analytics provider is a class that contains everything required to communicate with an analytics engine, such as Matomo, Plausible, Google Analytics or anthing else.

The implementation of the Analytics is based on the provider model - and is similar to the method that modules are registered.

The implementation for modules is pretty fluid - based mostly on having some typescript files in an appropriate location that feature route methods that can be found.  Analytics providers are slightly more structured and are a bit stricter, and are based on an interface.

If you want to read more about providers - see this [wikipedia article on the provider model](https://en.wikipedia.org/wiki/Provider_model).

## What is an interface

An interface describes the requirements for any class that implements that interface.  So - at the time of writing these notes - the IAnalytics interface describes that any class implementing this interface must :

- have a method called middleware, into which an options object can be passed.

- have a swaggerRegistration method which allows the swagger front end to register with Analytics providers (plausible - for instance requires this)

- have a string property called name, which relates to the the environment variable name to use to read configuration for this analytics provider.

## How the provider works in practice

Firstly we need to reference the provider in the main execution code (app.ts)  The reference instance can be found in the middleware\analytics folder.

so - for instance to reference the consoleLogger -

```javascript()
import { consoleLogger } from './middleware/analytics/console-logger';
```
Paragraph.

stuff here

```javascript
        import { consoleLogger } from './middleware/analytics/console-logger';
```

with this reference we can now create an instance of the `consoleLogger` class

```javascript
const Analytics : IAnalytics = new consoleLogger();
```

Now can tell Express to use the middleware

```javascript
APIrouter.use(Analytics.middleware(JSON.parse(process.env[Analytics.name])))
```

We can break that down a little.  `Analytics.name` will return the name of the configuration in the environment.  Configuration is stored as a JSON string.  
`process.env[Analytics.name]` will therefore pull the environment configuration for that provider from the environment.

`Analytics.middleware` is a class instance method, that returns the middleware. It reqires configuration object - which it can then use within the middleware as required.

so - the middleware will now be called for all requests routed to that instance of the express (or in our case router).

However Plausible requires a js file to loaded from the server.

This is done through the Swagger `schemaOptions` and setting the `customJsStr` based on the output of the provider.

The `consoleLogger` doesn't require this - so that method on the class returns undefined.  Whereas `plausible` does require this, and generates a JS code block that is added into the page.

## Simplifying the use of a analytics provider

The complexity for loading and registering providers has been abstracted into a Loader, now all that is required is the environment settings to be configured correctly

```bash
# Analytics Configuration:
# ========================
#
# Analytics Provider Name
ANALYTICS_PROVIDER=ConsoleProvider
# Configuration for the Plausible Analytics Engine
PLAUSIBLE_CONFIGURATION={"baseUrl":"<base for example : http://mockedapi.local:3000>","loggingURL": "<Address of the plausible server - for example : http://localhost:8000>"
# Configuration for the Console Logging.
CONSOLELOG_CONFIGURATION={"logEmoji":"🔍"}
```

### ANALYTICS_PROVIDER

This should be set to the provider name within the middleware class - for example: The Consolelogger has the name : ConsoleProvider, whereas the Plausible provider is called PlausibleProvider". To switch off analytics, this value can be left empty or null.

## Configuration Settings

The console logger, is a simple middleware - and in real terms doesn't really need configuration - however to show how configuration works within the provider, a simple configuration (logEmoji) is set up.  This is the emoji character that is printed to the screen.  The Configuration is a JSON String, which allows for more complex configuration - like the PLAUSIBLE_CONFIGURATION.

## Running Self Hosted Plausible

Much of the documentation for plausible suggests that localhost reporting is not supported.  There is a reference to a special script extension - however testing failed to prove that this script executed.

Instead a host entry was used to allow a domain to resolve to local host, allowing testing to work locally in a mostly live-like configuration.

### Configuring local execution

To run a local installation you will require docker.  All of the configuration for plausible can be found in the infrastruture folder.

### Setting up a domain

A host file (or similar) is required to point a domain name to the local machine - in this example the domain `MockedApi.local` will be used.

```bash
127.0.0.1   MockedApi.local
```

### Configuring the hostname

the `.env` file (or environment variable) will need to be updated to reference the new hostname - here is an example .env file

```bash
SCHEME=http
HOSTNAME=MockedApi.local:3000
# Set the following for Plausible Analytics
PLAUSIBLE_CONFIGURATION={"baseUrl":"http://localhost:3000","loggingURL": "http://localhost:8000"}
CONSOLELOG_CONFIGURATION={"logEmoji":"🔍"}
```

Now when the site executes it will create links in the generated swagger docs that link to `MockedApi.local`.

### Configuring plausible

Configuration of the plausible services should be fairly straightforward.  A `plausible-conf.env.example` file is provided - which is missing a single entry - `SECRET_KEY_BASE`.

This is - for the most part - not an important requirement.  This key is used to generate API keys that allow code to read analytics.

plausible has [instructions](https://plausible.io/docs/self-hosting#2-add-required-configuration) within their documentation that covers this.

### Starting the services

Running docker-compose up -d within the infrastructure/analytics will start up the plausible and supporting services.
