const routes = module.exports = require('next-routes')();

routes
  .add('home', 'airbnb', 'index')
  .add('blog', '/blog/:slug');
