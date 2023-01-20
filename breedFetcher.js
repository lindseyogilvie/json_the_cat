const request = require('request');

const args = process.argv.slice(2);
const api = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;


request(api, (error, response, body) => {
  const data = JSON.parse(body);
  const breed = data[0];

  if (error) {
    console.log('statusCode:', response && response.statusCode);
    console.log("Failed request: ", error);
  }
  
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`${args} is not found`);
  }

});
