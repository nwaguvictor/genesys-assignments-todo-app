const addBtn = document.querySelector('.todo__btn--add');
const saveBtn = document.querySelector('.todo__btn--save');

document.querySelector('.todo__input').focus();
let editElement;

// Event Handlers
addBtn.addEventListener('click', addTodo);
document.querySelector('.todo__list').addEventListener('click', editTodo);
saveBtn.addEventListener('click', updateTodo);
document.querySelector('.todo__list').addEventListener('click', clearTodo);
document.querySelector('.clear__btn').addEventListener('click', clearAllTodo);



// Handler Functions
function addTodo(e) {
    e.preventDefault();
    const todoText = document.querySelector('.todo__input').value;
    const todoList = document.querySelector('.todo__list');

    if (!todoText) {
        alert('Please fill the form');
        document.querySelector('.todo__input').focus();
        return;
    }

    todoList.insertAdjacentElement('beforeend', createListElement(todoText));

    document.querySelector('.todo__input').value = '';
    document.querySelector('.todo__input').focus();
}

function updateTodo(e) {
    e.preventDefault();
    const todoText = document.querySelector('.todo__input').value;
    const todoList = document.querySelector('.todo__list');

    if (!todoText) {
        alert('Please fill the form');
        return;
    }

    if (confirm('Update todo?')) {
        editElement.innerText = todoText;
        document.querySelector('.todo__input').value = '';
        document.querySelector('.todo__input').focus();
        saveBtn.style.display = 'none';
        addBtn.style.display = 'inline-block';
    }
}

function editTodo(e) {
    if (e.target.classList.contains('item__btn--edit')) {
        const inputField = document.querySelector('.todo__input');
        const listItem = e.target.parentElement.parentElement;
        const oldText = listItem.firstElementChild.innerText;
        editElement = listItem.firstElementChild;

        inputField.value = oldText;
        inputField.focus();
        saveBtn.style.display = 'inline-block';
        addBtn.style.display = 'none';
    }
}

function clearTodo(e) {
    e.preventDefault();

    if (e.target.classList.contains('item__btn--delete')) {
        const listItem = e.target.parentElement.parentElement;

        if (confirm('Are you sure?')) {
            document.querySelector('.todo__list').removeChild(listItem);
        }
    }
}

function clearAllTodo(e) {
    e.preventDefault();
    if (confirm(`Do you want to clear all activities?`)) {
        document.querySelector('.todo__list').innerHTML = '';
        document.querySelector('.todo__input').focus();
    }
}

// Create list Element
function createListElement(content) {
    // Create button elements
    const editBtn = document.createElement('button');
    editBtn.className = 'item__btn item__btn--edit';
    editBtn.innerText = 'edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'item__btn item__btn--delete';
    deleteBtn.innerText = 'delete';

    // create span elements
    const textWrapper = document.createElement('span');
    textWrapper.className = 'todo__item-text';
    textWrapper.innerText = content;

    const btnWrapper = document.createElement('span');
    btnWrapper.className = 'todo__item-btn';

    // appending buttons to span
    btnWrapper.appendChild(editBtn)
    btnWrapper.appendChild(deleteBtn)

    // list element
    const listItem = document.createElement('li');
    listItem.className = 'todo__list-item';
    listItem.appendChild(textWrapper);
    listItem.appendChild(btnWrapper);

    return listItem;
}