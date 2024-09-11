/*
Synchronous---> basic form of a js and it is blocking.
Asynchronous--> non blocking event achieved by set timeout and set intravel
*/
console.log("step 1");
console.log("step 2");
console.log("step 3");

setTimeout(()=>console.log("step 1"),2000);
setTimeout(()=>console.log("step 2"),4000);
setTimeout(()=>console.log("step 3"),3000);

/*SetTimeout---> set timeout is a js function that is used to handle multiple tasks at simulataneously.
set timeout have two attribute one is message and time in ms  

Eventloop---> moves all settimeout tasks from call back queue to call stack when call stack is empty.
*/




//example
console.log("hello...")
const fun=()=>{
    console.log("first");
    console.log("second");
    console.log("third");
}

fun();

setTimeout(()=>console.log("first"),2000);
setTimeout(()=>console.log("second"),1000);
setTimeout(()=>console.log("third"),4000);

console.log("byee...")

//set Intravel

setInterval(()=>console.log("hi...."),2000);
setInterval(()=>console.log("Iam TP...."),2000);


