const inputToDo = document.querySelector('#newToDo');
const btnAdd = document.querySelector('#btnAdd');
const toDoList = document.querySelector('#toDoList');

function criarLi() {
    return document.createElement('li');
}

function criarBtnDel(li){
    li.innerHTML += ' ';
    const btn = document.createElement('button');
    btn.innerHTML = 'Delete';
    btn.setAttribute('class', 'delete');
    btn.setAttribute('title', 'Apagar tarefa');

    li.appendChild(btn);
}

function clearInput(){
    inputToDo.value = '';
    inputToDo.focus();
}

function addToDo(text) {
    const li = criarLi();
    li.innerHTML = text;
    criarBtnDel(li);

    toDoList.appendChild(li);

    clearInput();
    saveList();
}

inputToDo.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13 && inputToDo.value)
        addToDo(inputToDo.value);
});

btnAdd.addEventListener('click', (e) => {
    if (!inputToDo.value) return;

    addToDo(inputToDo.value);
});

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('delete')){
        el.parentElement.remove();
        saveList();
    }
});

function saveList() {
    const liTarefas = toDoList.querySelectorAll('li');
    const listToDo = [];

    for (let tarefa of liTarefas){
        listToDo.push(tarefa.innerText.replace('Delete', '').trim());
    }

    const jsonTarefas = JSON.stringify(listToDo);
    localStorage.setItem('listToDo', jsonTarefas);
}

function getTarefas(){
    const jsonTarefasRec = localStorage.getItem('listToDo');
    const arrTarefas = JSON.parse(jsonTarefasRec);

    for(let tarefa of arrTarefas){
        addToDo(tarefa);
    }
}

getTarefas();