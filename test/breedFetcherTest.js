const {fetchBreedDescription} = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', () => {
  it('return a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // SHOULD NOT return an error
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('return an error via callback when passed an invalid breed', (done) => {
    fetchBreedDescription('Tabby', (err, desc) => {
      // SHOULD return an error
      assert.equal(desc, undefined);

      const expectedError = "Tabby not found";

      assert.equal(expectedError, err);
      
      done();
    });
  });
});