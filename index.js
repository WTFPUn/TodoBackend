const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const port = 7777 || process.env.PORT
const cardStatArray = require('./cardStat')

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.get('/reset', (req, res) => {
  cardStatArray.reset();
  res.send('<h1>done reset!</h1>')
})

app.get('/', (req, res) => {
  res.send('<h1>Hello Node.js</h1>')
})

app.get('/nextId', (req, res) => {
  res.json(cardStatArray.getLast())
})

app.get('/cardStat', (req, res) => {
  res.json(cardStatArray.findAll())
})

app.get('/cardStat/:id', (req, res) => {
  const id = req.params.id;
  res.json(cardStatArray.findById(id))
})

app.delete('/removeStat/:id', (req, res) => {
  const id = parseInt(req.params.id);
  cardStatArray.removeById(id);
  console.log(`Remove id:${id} Success!`);
})

app.post('/addCardStat', (req, res) => {
  const json = req.body;
  cardStatArray.push(json);
})

app.put('/setStar/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const fav = req.body;
  cardStatArray.starCheck(id, fav.fav);
})

app.listen(port, () => {
  console.log('Starting node.js on port ' + port)
})
