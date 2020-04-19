const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//reusable function in case in the future we want to add todos another way
const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

//add todos
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim spaces

    if(todo.length){ //in case enter is pressed without todo
        generateTemplate(todo);
        addForm.reset(); //clear add todo field
    }
})

//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        // remove parent element of delete icon which is the todo
        e.target.parentElement.remove();
    }
})

//filter todos

const filterTodos = term => {
    //filter
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));
    //revert
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
}

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})