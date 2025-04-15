const {faker} = require('@faker-js/faker')
 class ProductService {
  constructor(){
    this.products = [];
    this.generate()
  }
  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++){
      this.products.push({
        name: faker.company.catchPhraseNoun(),
        escripcion: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.url(),
        color: faker.color.human(),
        //id: faker.number.bigInt()
      })
    }
  }

  create(){

  }

  find(){
    return this.products
  }

  findOne(){
    //return this.products.find(item => item.id === id)

  }

  update(){

  }
 }

 module.exports = ProductService;
