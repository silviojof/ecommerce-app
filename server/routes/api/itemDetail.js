const fetch = require('node-fetch');
const parseDecimals = require('./utils');

module.exports = (app) => {
  app.get('/api/items/:id', async (req, res) => {
    const baseUrl = 'https://api.mercadolibre.com/items/';
    const catUrl = 'https://api.mercadolibre.com/categories/';
    const currUrl = 'https://api.mercadolibre.com/currencies/';
    const id = req.params.id;

    const detailsPromise = fetch(`${baseUrl}${id}`)
      .then(res => res.json())
      .catch(err => res.send(err));

    const descriptionPromise = fetch(`${baseUrl}${id}/description`)
      .then(res => res.json())
      .catch(err => res.send(err));
    
    const categoriesPromise = catId => fetch(`${catUrl}${catId}`)
      .then(res => res.json())
      .catch(err => res.send(err));
    
    const currencySymbolPromise = currency => fetch(`${currUrl}${currency}`)
      .then(res => res.json())
      .catch(err => res.send(err));

    try {
      const promises = await Promise.all([detailsPromise, descriptionPromise])
      const [data, description] = promises;
      const categories = await categoriesPromise(data.category_id);
      const currency = await currencySymbolPromise(data.currency_id);
      const result = {
        author: {
          name: 'Silvio',
          lastname: 'Oliveira'
        },
        categories: categories.path_from_root.map(el => el.name),
        item: {
            id: data.id,
            title: data.title,
            price: {
              currency: currency.symbol,
              ...parseDecimals(data.price)
            },
            picture: data.pictures[0].url,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: description.plain_text,
          },
      }
      res.send({ result })
    } catch(e) {
      res.send({ err });
    }
  });
};
