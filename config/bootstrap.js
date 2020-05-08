module.exports.bootstrap = async function () {

  var date = Date.now();

  await GardenData.createEach([
    {
      readingDateTime: date,
      temperature: 75,
      moistureContent: 15,
      sunlight: 80,
      ph: 7.8,
      storedWater: 14,
      fountainStatus: false
    },
    {
      readingDateTime: date - (60 * 1000),
      temperature: 74,
      moistureContent: 15.2,
      sunlight: 80,
      ph: 7.8,
      storedWater: 14,
      fountainStatus: false
    },
    {
      readingDateTime: date - (2 * 60 * 1000),
      temperature: 74,
      moistureContent: 15.6,
      sunlight: 80,
      ph: 7.8,
      storedWater: 14,
      fountainStatus: false
    },
    {
      readingDateTime: date - (3 * 60 * 1000),
      temperature: 73,
      moistureContent: 16,
      sunlight: 80,
      ph: 7.5,
      storedWater: 14.5,
      fountainStatus: true
    },
    {
      readingDateTime: date - (4 * 60 * 1000),
      temperature: 73,
      moistureContent: 16.5,
      sunlight: 80,
      ph: 7.5,
      storedWater: 15,
      fountainStatus: true
    },
    {
      readingDateTime: date - (5 * 60 * 1000),
      temperature: 73,
      moistureContent: 17,
      sunlight: 80,
      ph: 7.5,
      storedWater: 15.5,
      fountainStatus: false
    }
  ]);

};
