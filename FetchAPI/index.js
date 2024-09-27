fetch("https://official-joke-api.appspot.com/jokes/programming/random")
.then((res)=>res.json())
.then((msg)=>console.log("Joke: "+msg[0].setup,"Punch: "+msg[0].punchline))
.catch((err)=>console.log(err))
