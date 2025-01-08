const formCreate = document.getElementById('form-create');
const formEdit = document.getElementById('form-edit');
const listGroupTodo = document.getElementById('list-group-todo');
const time = document.getElementById('time');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const fullDay = document.getElementById('full-day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const closeEl = document.getElementById('close');

let editItemId 
let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [];

if (todos.length) {
    showTodos();
}

function getTime() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const month_title = now.getMonth();
    fullDay.textContent = `${date} ${months[month_title]} ${year}`;
    hourEl.textContent = hour < 10 ? `0${hour}` : hour;
    minuteEl.textContent = minute < 10 ? `0${minute}` : minute;
    secondEl.textContent = second < 10 ? `0${second}` : second;
    return `${hour}:${minute}, ${date}:${month}:${year}`;
}

setInterval(getTime, 1000);

function showError(where, message) {
    document.getElementById(where).textContent = message;
    setTimeout(() => {
        document.getElementById(where).textContent = '';
    }, 2500);
}

function setTodos() {
    localStorage.setItem('list', JSON.stringify(todos));
}
function showTodos() {
    const todos = JSON.parse(localStorage.getItem('list')) || [];
    listGroupTodo.innerHTML = '';
    todos.forEach((item, i) => {
        listGroupTodo.innerHTML += `
        <li ondblclick="setCompleted(${i})" class="list-group-item d-flex justify-content-between 
        ${item.completed == true ? 'complated' :''}">
        ${item.text}
          <div class="todo-icons">
            <span class="opacity-50 me-2">${item.time}</span>
            <img onclick="editTodo(${i})" src="./img/edit.svg" alt="edit icon" width="25" height="25">
            <img src="./img/delete.svg" alt="delete icon" width="25" height="25" onclick="deleteTodo(${i})">
          </div>
        </li>`;
    });
}

function setCompleted(id) {
    const completedTodos = todos.map((item,i) => {
        if(id == i ){
            return {...item,completed:item.completed == true ? false : true}
        }
        else{
            return {...item}
        }
    })
    todos = completedTodos
    setTodos();
    showTodos();
}

formCreate.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = formCreate['input-create'].value.trim();

    if (todoText.length) {
        todos.push({
            text: todoText,
            time: getTime(),
            completed: false,
        });
        setTodos();
        showTodos();
        formCreate.reset();
    } else {
        showError('message-create', 'Please, enter some todo...');
    }
});

function deleteTodo(id) {
    todos = todos.filter((item, i) => i !== id);
    setTodos();
    showTodos();
}

formEdit.addEventListener('submit',(e) =>{
    e.preventDefault()
    const todoText = formEdit['input-edit'].value.trim();

    if (todoText.length) {
        todos.splice(editItemId , 1,{
            text: todoText,
            time: getTime(),
            completed: false,
        });
        setTodos();
        showTodos();
        close();
        formEdit.reset();
    } else {
        showError('message-edit', 'Please, enter some todo...');
    }
})

function editTodo(id){
    open()
    editItemId = id
}
overlay.addEventListener('click', close);
closeEl.addEventListener('click', close);
document.addEventListener('keydown',(e)=>{
    if(e.which == 27){
        close(`в`)
    }
})
function open() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    
}
function close(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}