const express = require('express');
const app = express();

const routerUser = express.Router()
const { faker } = require('@faker-js/faker');
const { route } = require('./products');

routerUser.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const usuarios = [];
  for (let index = 0; index < limit; index++){
    usuarios.push({
      name: faker.person.fullName(),
      age: faker.number.int(),
      cargo: faker.company.buzzAdjective()
    })
  }
  res.json(usuarios)
})
module.exports = routerUser;
