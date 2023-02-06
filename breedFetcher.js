const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(api, (error, response, body) => {
    
    if (error) {
      callback(error, response);
    } else {
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        callback(null, breed.description);
      } else {
        callback(`${breedName} not found`);
      }
    }
  });
};

module.exports = {fetchBreedDescription};

