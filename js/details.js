const id = new URLSearchParams(window.location.search).get('id')

const renderTodo = async () => {
    const container = document.querySelector('.details');
    const response = await fetch('http://localhost:3000/TODO/' + id);
    const todo = await response.json();

    const template = `
    <div class = "post">
            <h2>${todo.title}</h2>
            <p>${todo.desc}</p>
            <a href = "./edit.html?id=${todo.id}">Изменить</a>
            <button class = "btn btn__delete">Удалить</button>
    </div>
    `

    container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', renderTodo)