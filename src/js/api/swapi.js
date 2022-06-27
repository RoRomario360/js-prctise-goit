export default function searchByname(name) {
  const baseUrl = 'https://swapi.dev/api/';
  const searchUrl = 'people/?search=';
  const response = fetch(`${baseUrl}${searchUrl}${name}`)
    .then(data => {
      if (!data.ok) {
        console.log(data);
        throw new Error('Vpalo Bro!!!');
      }
      return data.json();
    })
    .catch(error => console.log(error));
  return response;
}
