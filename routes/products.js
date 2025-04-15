const express = require('express');
const app = express();
//desde aca no se tiene acceso a la aplicacion por lo que se crea un router propio
const router = express.Router()
//const {faker} = require('@faker-js/faker')
const ProductService = require('../services/productaServices')
const services = new ProductService()
/*
router.get("/",(req,res)=>{
  res.send([
    {
      name: 'carro',
      price:1000,
      cantidad:100,
    },
    {
      name: 'pera',
      price:2000,
      cantidad:100,
    }
  ])
})
;*/
/*
router.get('/',(req, res)=>{
 //Vamos a recoger el id que nos envian y anadirlo a la respuesta, esto lo llamamos con el requiues

  //const id =  req.params.id //forma 1
  //const { id } = req.params
  const {size} = req.query;
  const limit = size || 10;
  const productos = []
  for (let index = 0; index < limit; index++){
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      //image: faker.image.imageUrl(),
    })
  }
  res.json(productos);
})
*/
router.get('/',(req, res)=>{
  const products = services.find();
   res.json(products);
})

router.get('/filter',(req, res)=>{
  res.send('yo soy un filter');
})

router.get('/celulares/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const smarphones = [];
  for (let index = 0; index < limit; index++){
    smarphones.push({
      name: faker.company.catchPhraseNoun(),
      descripcion: faker.commerce.productDescription(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.url(),
      color: faker.color.human()
    })
  }
  res.json(smarphones)
})
router.post('/', (req, res) => {
  //se resiven los parametos del metodo post que nos envia insonia
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'actualizado',
    data: body,
    id
  })
})

router.get('/:id', (req,res) => {
  const {id} = req.params;
  const products = services.findOne(id)
  res.json(products)
})

router.delete('/:id', (req,res) => {
  const { id } = req.params;
  //const body = req.body;
  res.json({
    message: 'eliminado',
    //data: body,
    id
  })
})


//procedemos a exportar el modulo router
module.exports = router;

