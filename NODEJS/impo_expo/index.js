// const add=require("./oper")
// console.log(add(5,5))

// ************** this is used to divide the code so to undertstand all thing very precisely(division 1)



// const oper=require("./oper")// if we return two export items from the exporting file then it returns a object to us
//                             // here oper is an object it can be of any name and we can use its properties using dot property
// // const mult1=require("./oper")
// console.log(oper)
// console.log(oper.add1(5,5))
// console.log(oper.mult1(5,5))

// ********** division 2

const {mult,add,name}=require("./oper")  // here order of mult and add is not necessary it can be in any order 


console.log(add(5,10))
console.log(mult(5,5))
console.log(name)
