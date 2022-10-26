# Notes:
This is a reference implementation of the MockAPI Analytics Middleware.
Analytics is based on an interface - the imaginitively names IAnalytics interface.
This describes the functionality required for an analytics provider.

## What is an analytics provider?
An Analytics provider is a class that contains everything required to communicate with an analytics engine, such as Matomo, Plausible, Google Analytics or anthing else.
 
The implementation of the Analytics is based on the provider model - and is similar to the method that modules are registered.

The implementation for modules is pretty fluid - based mostly on having some typescript files in an appropriate location that feature route methods that can be found.

Here the rules for an analytic provider are a bit stricter, and are based on an interface.

## Interface?
An interface describes the requirements for any class that implements that interface.  So - at the time of writing these notes - the IAnalytics interface describes that any class implementing this interface must :

- have a method called middleware, into which an options object can be passed.

- have a swaggerRegistration method (which is currently under development) which allows the swagger front end to register with Analytics providers (plausible - for instance requires this)

- have a string property called name, which relates to the the environment variable name to use to read configuration for this analytics provider.

https://en.wikipedia.org/wiki/Provider_model