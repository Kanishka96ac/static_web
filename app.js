const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

const port = 3000;

app.get('/', (req, res) => {
  res.render('index.html');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})