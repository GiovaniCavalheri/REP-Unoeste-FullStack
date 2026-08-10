const express = require("express");
const path = require("node:path"); 
const app = express();

const PORT = 3000;

// ==> mecanismo responsável por gerar minhas páginas será o EJS
app.set('view engine', 'ejs');

// ==> Define onde estão localizados os arquivos .ejs, ou seja, a pasta. 
// ==> __dirname retorna o caminho absoluto da pasta onde este arquivo está, (meus templates estao nesse caminho)
app.set('views', path.join(__dirname, 'views'));  

app.get("/", (req, res) => {
  res.render('index')
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado! http://localhost:${PORT}/`);
});
