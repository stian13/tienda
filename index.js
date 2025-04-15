//llamamos a express
const express = require('express');
const routerApi = require('./routes');
//creamos una aplicacion
const app = express();
//indicamos en donde queremos que correa la aplicacion
const port = 3000;

//const {faker} = require('@faker-js/faker')

app.use(express.json());

//vamos a definir una ruta
        //se define esta como ruta por defecto
app.get("/", (req, res) =>{
  //vamos a ejecutar la respuesta que le mostraremos al cliente
  res.send("holaaaaaaaaaaaaaaaaaaaaaaaa mundo xd");
});
//nueva ruta
app.get("/nueva-ruta", (req, res)=>{
  res.send('soyyyyyy una nueva ruta')
})

routerApi(app)

//podemos variar nuetras respuestas, podemos enviar otros tipos de formato con json lo que genera una API lo cual comunicara datos a clientes
/*
app.get("/productos",(req,res)=>{
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
;
app.get('/products/',(req, res)=>{
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

app.get('/celulares/', (req, res) => {
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

app.get('/products/filter',(req, res)=>{
  res.send('yo soy un filter');
})

app.get('/productos/:idProductos/categoria/:idCategorias/precio/:precio', (req, res)=>{
  const {idProductos} = req.params
  const {idCategorias} = req.params
  const {precio} = req.params
  res.json({
    idProductos,
    idCategorias,
    precio
  })
})

app.get('/users', (req, res) => {
  //const {limit, offset} = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('no hay parametros')
  }
})
*/

//utilizaremos el puerto por lo que le diremos a nuestra aplicacion que debe escuchar en un puerto en especifico
app.listen(port,()=>{
 console.log("mi port" + port);
})

