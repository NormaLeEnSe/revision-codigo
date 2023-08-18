const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Cambiando 'name' => '.name'
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'Cargando...'; // Cambiando 'cargando...' => 'Cargando...'
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Agregado para obtener los datos de la respuesta
    console.log(data);
    $n.textContent = data.name; // Cambiando '${data.name}' => data.name
    $b.textContent = data.blog; // Cambiando '${data.blog}' => data.blog
    $l.textContent = data.location; // Cambiando '${data.location}' => data.location
  } catch (error) {
    handleError(error); // Cambiando 'n' => '$n' para invocar la función 
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Cambiando 'n' => '$n' para actualizar el contenido 
}

displayUser('stolinski').catch(handleError);