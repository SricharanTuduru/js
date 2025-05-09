"use strict" //treat all JS code as newer version 


let name = "sricharan" //string
let age = 21 //number 
let isloggedin = false //boolean 

//number => 2 to the power of 53
//bigint 
//string => ""
//boolean => true/false
//null => standalone value
//undefined
//symbol =>unique

//object 



//stack, heap

// stack(Primitive), Heap(Non-primitive)

let myyt = "sricharan"
let myyt2 = myyt

console.log(myyt)
console.log(myyt2)

myyt2 = "charan "
console.log(myyt2)
console.log(myyt)


let userone = {
    "name": "sricharan",
    "age": 22
}
let usertwo = userone

console.log(usertwo);
console.log(userone);

usertwo.name = "charan"

console.log(userone)
console.log(usertwo)

