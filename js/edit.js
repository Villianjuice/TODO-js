const id = new URLSearchParams(window.location.search).get('id');
const form = document.querySelector('form');


const renderTodo = async () => {
    const response = await fetch('http://localhost:3000/TODO/' + id);
    const todo = await response.json()


    form.title.value = todo.title
    form.desc.value = todo.desc
}

const editTodo = async (event) =>{
    event.preventDefault();

    const editedTodo = {
        title: form.title.value,
        desc: form.desc.value
    }

    await fetch('http://localhost:3000/TODO/' + id, {
        method: 'PATCH',
        body: JSON.stringify(editedTodo),
        headers: {'Content-Type': 'application/json'}
    })
    window.location.replace('./index.html')
}

window.addEventListener('DOMContentLoaded', renderTodo);
form.addEventListener('submit', editTodo)