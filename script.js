document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = new FormData(this);
    const names = [];
    formData.forEach((value, key) => {
        if (key.startsWith('name')) {
            names.push(value);
        }
    });
    const message = formData.get('groupHistory');

    const data = {
        names: names,
        message: message
    };

    fetch('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data sent successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
});
