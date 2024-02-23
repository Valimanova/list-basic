let taskInput=document.getElementById('taskValue');
// console.log(taskInput);
let i;
let list= document.getElementsByClassName('task-list')
// console.log(ul);

function add(){
    let taskText=taskInput.value.trim();
    if(taskText!==''){
        let ul= document.createElement('ul')
        let li= document.createElement('li');
        li.textContent=taskText;
        // console.log(li.textContent=taskText);
        document.body.appendChild(ul).appendChild(li)
    }
}