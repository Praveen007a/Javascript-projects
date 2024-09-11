/*
    Memory allocation in js--->stack and heap
    stack--->store only primitive data types (var name="apple" etc)
    heap---->store arrays,funtions and all objects(math,date) and ref of obj stored in stack
*/
var h1=document.getElementById("one");

const fun=()=>{
    h1.textContent="Uchiha TP";
}
/**
Clousure---->Closure gives you access to an outer functions's scope from an inner function scope.outer function binds the parameters even after the outer function executed.
Returning functions---> one function returns another function
Lexical scope---> inner scope can access the outer scope
 */

let a=10;

function outer(name){
    let out="apple";
    function inner(){
        let inn="orange";
        console.log("a is "+a);
        console.log("outer is "+out);
        console.log("inner is "+inn);
        console.log("Hello, "+name);
    }
    return inner;
}

let one=outer("Praveen");
one();
let two=outer("Uchiha");
two();

const makeAdder=(x)=>{
    return function(y){
        return x+y;
    }
}
let add5=makeAdder(5);
console.log(add5(100));

