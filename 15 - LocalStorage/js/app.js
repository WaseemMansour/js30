const addItems = document.querySelector('.add-items');
const checkItems = document.querySelector('.check-all-items');
const uncheckItems = document.querySelector('.uncheck-all-items');
const deleteItems = document.querySelector('.delete-all-items');

const itemsList = document.querySelector('.todos');
const items = JSON.parse(localStorage.getItem('todos')) || [];
renderTodos(items, itemsList);

addItems.addEventListener('submit', addTodo);
deleteItems.addEventListener('click', deleteAll);
checkItems.addEventListener('click', checkAll);
uncheckItems.addEventListener('click', checkAll);

function addTodo(e) {
    e.preventDefault();
    const text = (this.querySelector('input[name="item"]')).value;
    const todo = {
        text,
        done: false
    }
    items.push(todo);
    localStorage.setItem('todos', JSON.stringify(items));
    renderTodos(items, itemsList);
    this.reset();

}

function renderTodos(todos = [], itemsList) {
    if (!todos.length) {itemsList.innerHTML = '<li>Loading ToDos...</li>'; return}
    itemsList.innerHTML = todos.map((item, i) => {
        return `<li>
            <input type="checkbox" id="item${i}" data-index="${i}" ${item.done ? 'checked' : ''}>
            <label for="item${i}"><span>${item.text}</span></label>
        </li>`
    }).join('');
}

function toggleCheck(e) {
    if ( !e.target.matches('input') ) return;
    console.log(e.target);
    const checkbox = e.target;
    const index = checkbox.dataset.index;
    console.log(items[index]);
    items[index].done = !items[index].done;
    localStorage.setItem('todos', JSON.stringify(items));
    // e.target.checked = true;
}

function deleteAll() {
    items.splice(0,items.length);
    localStorage.removeItem('todos');
    renderTodos(items, itemsList);
}

function checkAll() {
    const status = this.dataset.check;
    const setBoolean = status === 'true' ? true : false;
    items.forEach(element => {
        element.done = setBoolean;
    });
    localStorage.setItem('todos', JSON.stringify(items));
    renderTodos(items, itemsList);
}

itemsList.addEventListener('click', toggleCheck);