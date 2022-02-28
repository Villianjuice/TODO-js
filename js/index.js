const renderTodo = async() => {
    const container = document.querySelector('.list')
    const response = await fetch ('http://localhost:3000/TODO');
    const todoes = await response.json();

    let template = '';

    todoes.forEach(todo => {
        template += `
            <div class = "post">
                <h2>${todo.title}</h2>
                <p>${todo.desc.slice(0,190)}</p>
                <a href ="./details.html?id=${todo.id}">Подробнее</a>
            </div>
        `

        container.innerHTML = template
    });
}

window.addEventListener('DOMContentLoaded', renderTodo)
