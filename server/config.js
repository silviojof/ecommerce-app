module.exports = {
  baseUrl: {
    protocol: 'http',
    hostname: 'api.openweathermap.org',
    path: '/data/2.5/weather',
  },

  query: {
    name: 'q',
    id: 'id',
    coordinates: {
      latitude: 'lat',
      longitude: 'lon',
    },
    zipcode: 'zip',
  },

  APIkey: '4893c7a79ae4551e875e06108904b359',
};
