try{
    var num = prompt("Enter the Number");
    if(isNaN(num)){
        throw "Not A Number...."
    }
    console.log(num**2);
}
catch(error){
    console.log(error);
}
finally{
    console.log("bye...")
}

