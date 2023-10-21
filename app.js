const express = require('express');
const app = express()
const morgan = require('morgan');
const port = 3000

app.use(morgan('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Naufal Anbial Falah'});
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`App on http://localhost:${port}`)
})

app.use((req, res) => {
    res.status(404).render('404')
})