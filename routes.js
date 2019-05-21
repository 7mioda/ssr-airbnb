const routes = module.exports = require('next-routes')();

routes
  .add('home', 'airbnb', 'index')
  .add('room', '/rooms/:id', 'room')
  .add('blog', '/listing', 'listing');
