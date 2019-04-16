const fetch = require('node-fetch');
const parseDecimals = require('./utils');

module.exports = (app) => {
  app.get('/api/items/', async(req, res) => {
    const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=';
    let categories;
    const query = req.query.q;
    const apiUrl = `${baseUrl}${query || ''}`;
    try {
      const promise = await fetch(apiUrl);
      const json = await promise.json();
      const items = json.results.slice(0, 4).map(el => {
        return {
          id: el.id,
          title: el.title,
          location: el.address.city_name,
          price: {
            currency: el.currency_id,
            ...parseDecimals(el.price),
          },
          picture: el.thumbnail,
          condition: el.condition,
          free_shipping: el.shipping.free_shipping,
        };
      });

      try {
        categories = json.filters[0].values[0].path_from_root.map(el => el.name);
      } catch (e) {
        categories = [];
      }

      const result = {
        author: {
          name: 'Silvio',
          lastname: 'Oliveira',
        },
        categories,
        items,
      };
      res.send({ result });

    } catch (e) {
      throw new Error('We could not get any results. Please try another term.');
    }
  });
};
