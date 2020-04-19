const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

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

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim spaces

    if(todo.length){ //in case enter is pressed without todo
        generateTemplate(todo);
        addForm.reset(); //clear add todo field
    }
})