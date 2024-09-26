const BookTicket=()=>{
    return new Promise((resolve,reject)=>{
        let ticket=false;

        if(ticket){
            resolve();
        }
        else{
            reject();
        }
    });
}

BookTicket().then(()=>console.log("Ticket was Booked"))
.catch(()=>console.log("Sorry your Ticket not conformed."))

//coin example

const Toss=()=>{
    return new Promise((resolve,reject)=>{
        let rand=Math.floor(Math.random()*2);

        console.log(rand);
        if(rand==0){
            resolve();
        }
        else
            reject();
    })
}
Toss().then(()=>console.log("Head, you Won!!!"))
.catch(()=>console.log('Tail, Sorry you Lose!'))

//static methods in Promise

/* 
    1.Promise.all()--->
    2.Promise.settled()--->
    3.Promise.any()---->
    4.Promise.race()---->
*/

let Ramya=new Promise((res,rej)=>{
    let reach=true;
    if(reach)
        setTimeout(res,3000,"Ramya Reached");
    else
        rej("Not Reached")
});
let Madhu=new Promise((res,rej)=>{
    let reach=false;
    if(reach)
        setTimeout(res,2000,"Madhu Reached");
    else
        rej("Not Reached")
});
let Aruna=new Promise((res,rej)=>{
    let reach=fasle;
    if(reach)
        setTimeout(res,1000,"Aruna Reached");
    else
        rej("Not Reached")
});

Promise.race([Ramya,Madhu,Aruna]).then((mes)=>console.log(mes))
.catch((mes)=>console.log(mes));