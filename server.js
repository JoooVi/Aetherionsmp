require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota de contato
app.use('/contact', contactRoute);

// Servidor rodando
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
