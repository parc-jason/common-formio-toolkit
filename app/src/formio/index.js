const routes = require('./routes');

module.exports.mount = (app) => {
  const p = '/formio';
  app.use(p, routes);
  return p;
};
