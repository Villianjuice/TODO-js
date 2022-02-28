const form = document.querySelector('form');

const createTodo = async (event) => {
    event.preventDefault();

    const newTodo = {
        title: form.title.value,
        desc: form.desc.value
    }

    await fetch('http://localhost:3000/TODO',{
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {'Content-Type': 'application/json'}
    })
    window.location.replace('./index.html')
}

form.addEventListener('submit', createTodo)