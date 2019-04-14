const fetch = require('node-fetch');

module.exports = (app) => {
  app.get('/api/items/', (req, res) => {
    console.log(req.query)
    const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=​';	
    const query = req.query.q;
    const apiUrl = encodeURI(`${baseUrl}${query}`);
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.redirect('/error');
    });
  });
};
