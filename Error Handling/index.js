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

//json
/* 
    store any data types like String,number,char,boolean, arrays, obects,arrayof objects etc...
    but if any str value is present must denotes in (" ") otherwise you enter manually...
*/

let json1="Praveen";
let json2= 97;

let json3 = `[
    {
        "name":"Praveen",
        "age":22
    },
    {
        "name":"Aruna",
        "age":21
    },
    {
        "name":"Sahil",
        "age":23
    }
];`

//parse
let parsed=JSON.parse(json3);
console.log(parsed);
//stringify

//let srt=JSON.stringify(json3);


//console.log(str);
