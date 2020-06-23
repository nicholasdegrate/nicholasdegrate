const express = require('express');
const path = require('path');
const pug = require('pug');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//route
app.get('/', (req, res)=> {
    res.render('home');
});
app.get('/about', (req, res)=> {
    res.render('about');
});
app.get('/work', (req, res)=> {
    res.render('work');
});



app.listen(PORT, () => console.log(`listening...${PORT}`));