# Common Forms Toolkit Application

This node.js skeleton app hosts the Common Forms Toolkit frontend. It implements a minimal endpoint to allow for Keycloak authentication.

## Settings

This app will require some configuration. The API will be locked down and require a valid JWT Token to access. We will need to configure the application to authenticate using the same Keycloak realm as the [frontend](frontend). Note that the Common Forms Toolkit Frontend is currently designed to expect all associated resources to be relative to the original access path.

## Super Quickstart

Ensure that you have filled in all the appropriate configurations following [config/custom-environment-variables.json](config/custom-environment-variables.json) before proceeding.

In general, most of these npm run scripts can be prepended with `all:` in order to run the same operation on both the application and the frontend sequentially.

### Production Build and Run

``` sh
npm run all:fresh-start
```

### Development Run

``` sh
npm run serve
```

Start a new terminal

``` sh
cd frontend
npm run serve
```

### Run application tests

``` sh
npm run test
```

### Lints and fixes application files

``` sh
npm run lint
npm run lint-fix
```
