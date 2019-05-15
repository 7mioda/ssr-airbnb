const routes = module.exports = require('next-routes')();

routes
  .add('home', '/airbnb', 'home')
  .add('room', '/rooms/:id', 'room')
  .add('blog', '/listing', 'listing');
