const express = require('express'); 
const path = require('node:path'); 

const server = express(); 
const PORT = process.env.PORT || 3000; 

server.set('views engine', 'ejs'); 
server.set('views', path.join(__dirname, 'views')); 

// Config de arquivos estáticos; 
app.use(express.static('public'))

server.use(express.urlencoded({ extended:true })); 

server.listen(PORT, () => {
  console.log(`Servidor Rodando, http://localhost:${PORT}`);
});