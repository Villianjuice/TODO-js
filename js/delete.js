setTimeout(() => {
    
    const button = document.querySelector('button');

    button.addEventListener('click', async function() {
        await fetch('http://localhost:3000/TODO/' + id, {
            method: 'DELETE'
        })
        window.location.replace('./index.html')
    })
}, 1000);

