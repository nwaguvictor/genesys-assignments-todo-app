const addBtn = document.querySelector('.todo__addBtn');

addBtn.addEventListener('click', addTodo);

function createListElement(content) {
    // create span element
    const span = document.createElement('span');
    const textSpan = span.classList.add('todo__item-text');
    span.innerText = content;

    // list element
    const listItem = document.createElement('li');
    listItem.classList.add('todo__list-item');
    listItem.appendChild(span);

    return listItem;
}

function addTodo(e) {
    e.preventDefault();
    const todo = document.querySelector('.todo__input').value;
    const todoList = document.querySelector('.todo__list');

    if (!todo) {
        alert('Please fill the form')
        return;
    }
    todoList.insertAdjacentElement('beforeend', createListElement(todo));
    document.querySelector('.todo__input').value = '';
}