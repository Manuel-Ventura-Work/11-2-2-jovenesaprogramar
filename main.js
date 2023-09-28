let nom = document.getElementById('nombre')
let apell = document.getElementById('apellido')
let naci = document.getElementById('naci')

  
  let apiUrl = 'https://jsonplaceholder.typicode.com/users';
  function post() {
    let userData = {
        nombre: nom.value,
        apellido: apell.value,
        naci: naci.value
      };
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response from the server:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

}