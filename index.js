const express = require('express');
const app = express();
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 3000;
const ACCESSKEY = process.env.ACCESSKEY;
const BASEURL = process.env.BASEURL;
const PERPAGE = 30;
let uri = '/';

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use((req, res, next) =>  {
  uri = req.originalUrl;
  next();
})

app.post('/search', (req, res) => {
  const { searchquery } = req.body;
  const page = 1;
  fetchImages(searchquery, page).then(output => {
    res.render('pages/search', { output, uri });
  });
});

app.get('/search', (req, res) => {
  const { query, page, totalpages } = req.query;
  let p = Number(page) || 1;
  p = p > totalpages ? totalpages : p;
  fetchImages(query, p).then(output => {
    res.render('pages/search', { output, uri });
  });
});

app.get('/', (req, res) => {
  res.render('pages/index', { uri });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { uri });
});

app.get('/favourites', (req, res) => {
  const { page, query } = req.query;
  res.render('pages/favourites', { page, query, uri } );
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

function fetchImages(query, page) {
  return new Promise((resolve, reject) => {
    fetch(`${BASEURL}?page=${page}&query=${query}&per_page=${PERPAGE}&client_id=${ACCESSKEY}`)
    .then(result => result.json())
    .then(data => {
      const { results, total, total_pages } = data;
      const output = {
        query,
        page,
        total,
        total_pages,
        results
      };
      resolve(output);
    });
  });
}