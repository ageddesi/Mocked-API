import { InternetModule } from "@faker-js/faker"

const facts = require("./api/chuckfacts.json")

// const array = [{
//     "name": "jane",
//     "age": 17
//   },
//   {
//     "name": "joe",
//     "age": 17
//   },
//   {
//     "name": "bob",
//     "age": 35
//   }
// ];
// const uniques = array.map(item => item.age)
//   .filter((value, index, self) => self.indexOf(value) === index)
// console.log(uniques)

 
let uniqueCatgories = new Map<string, string>();
facts.map(
  fact => { 
    fact.categories.map(
      category =>{
        if(!uniqueCatgories.has(category)){
          uniqueCatgories.set(category,"")
        }
      })  
    } )

console.log(Array.from(uniqueCatgories.keys()))


const categories = facts.map(item => item.categories[0]).filter((value, index, self) => self.indexOf(value) === index)
console.log(categories)
categories.forEach(element => {
    console.log(" * " + element)
});

