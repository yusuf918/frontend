const express = require('express');
const app = express();


app.get('/', function(req, res) {
    res.send('index pace')
});
app.get('/p/kampa-hazirlik', function(req, res) {
    res.send('kampa hazırlık')
});
app.get('/p/sorular', function(req, res) {
    res.send('sık sorulan sorular')
});
app.get('/p/kayit-yap', function(req, res) {
    res.send('giris')
});
app.get('/p/giris-yap', function(req, res) {
    res.send('giris')
});
app.get('/courses', function(req, res) {
    res.send('kurslar')
});
app.get('/courses/category/programlama', function(req, res) {
    res.send('programlama')
});
app.get('/courses/author/470129', function(req, res) {
    res.send('engin demirog')
});

app.listen(8080);