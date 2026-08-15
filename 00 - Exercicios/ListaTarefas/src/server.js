const express = require('express'); 
const path = require('node:path'); 
const router = require('./routes/routes');

const server = express(); 
const PORT = 8000; 

server.set('view engine', 'ejs'); 
server.set('views', path.join(__dirname, 'views')); 

server.use(express.static('public')); 
server.use(express.urlencoded({ extended: true })); 

server.use(router); 

server.listen(PORT, () => {
    console.log(`Servidor rodando! http://localhost:${PORT}`); 
})