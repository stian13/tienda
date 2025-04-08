//llamamos a express
const express = require('express');
//creamos una aplicacion
const app = express();
//indicamos en donde queremos que correa la aplicacion
const port = 3000;

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
//podemos variar nuetras respuestas, podemos enviar otros tipos de formato con json lo que genera una API lo cual comunicara datos a clientes
app.get("/productos",(req,res)=>{
  res.send({
    name: 'carro',
    price:1000,
    cantidad:100,
  })
})

//utilizaremos el puerto por lo que le diremos a nuestra aplicacion que debe escuchar en un puerto en especifico
app.listen(port,()=>{
 console.log("mi port" + port);

})
