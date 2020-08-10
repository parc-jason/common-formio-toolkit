# Common Forms Toolkit Frontend

This is the Common Forms Toolkit frontend. It implements a Vue frontend with Keycloak authentication support.

## Settings

The Common Forms Toolkit frontend will require some configuration. The API it invokes will be locked down and require a valid JWT Token to access. We will need to configure the application to authenticate using the same Keycloak realm as the [app](../). Note that the Common Forms Toolkit frontend is currently designed to expect all associated resources to be relative to the original access path.

## Super Quickstart

Ensure that you have filled in all the appropriate configurations following [../config/custom-environment-variables.json](../config/custom-environment-variables.json) before proceeding.

### Project setup

``` sh
npm install
```

### Compiles and hot-reloads for development

*Note: Make sure the /app server is already running correctly first before starting this - otherwise the development frontend server may not host on the usual port 8081!*

``` sh
npm run serve
```

### Compiles and minifies for production

``` sh
npm run build
```

### Run your unit tests

``` sh
npm run test:unit
```

### Lints and fixes files

``` sh
npm run lint
```

### Customize configuration

See [Settings Reference](https://cli.vuejs.org/config/).
