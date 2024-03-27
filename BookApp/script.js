//select overlay,popup,addPopup

var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var addbutton=document.getElementById("addPopup")

addbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})

//select cancel button 

var cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})

//select container,addBook,bookName,authorName,text

var container=document.querySelector(".container")
var addBook=document.getElementById("addBook")
var bookName=document.getElementById("bookName")
var authorName=document.getElementById("authorName")
var text=document.getElementById("text")

addBook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML =`<h2>${bookName.value}</h2>
                    <h4>${authorName.value}</h4>
                    <p>${text.value}</p>
                    <button onclick="deletebutton(event)">Delete</button>`

    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})

function deletebutton(event){
    event.target.parentElement.remove()
}