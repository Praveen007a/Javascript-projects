let btn=document.getElementById("add");
let todo=document.getElementById("todoList");
let ip=document.getElementById("input");

let todos=[];

btn.addEventListener("click",()=>{
    todos.push(ip.value);
    addTodo(ip.value);
    ip.value="";
    console.log(todos);
})

const addTodo=(tod)=>{
        let p=document.createElement('p');
        p.innerText=tod;
        todo.appendChild(p);
        p.addEventListener('click',()=>{
            p.style.textDecoration="line-through";
        });

}

