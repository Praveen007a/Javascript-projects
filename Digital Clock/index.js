let ampm=document.getElementById("ampm");

const time=()=>{
    let date=new Date();
    let hr=date.getHours();
    let mins=padzero(date.getMinutes());
    let sec=padzero(date.getSeconds());

    if(hr >12){
        hr=hr-12;
        ampm.innerHTML="PM";
    }else{
        ampm.innerHTML="AM";
    }

    document.getElementById("hours").innerHTML=padzero(hr);
    document.getElementById("mins").innerHTML=mins;
    document.getElementById("seconds").innerHTML=sec;
}

const padzero=(num)=>{
    return num < 10 ? "0"+num:num; 
}

setInterval(()=>time(),500);