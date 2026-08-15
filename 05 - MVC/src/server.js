const express = require("express");
const path = require('node:path');
const router = require("./routes/routes");

const app = express();

// Config do EJS; 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

// Config de arquivos estáticos; 
app.use(express.static('public'))

// Config para ler dados do corpo da requisição; 
app.use(express.urlencoded({ extended: true }));

app.use(router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}/`);
});
