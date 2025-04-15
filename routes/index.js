const experss = require('express')
//aca configuramos todas las rutas products, users, etc..
const productRouters = require('./products')
const usersRouters = require('./users')
function routerApi(app){
  //esta se encargara de recibir la aplicacion
  const router = experss.Router();
  app.use('/api/v1', router)
  router.use('/products', productRouters)
  router.use('/users', usersRouters)
}
module.exports = routerApi;
