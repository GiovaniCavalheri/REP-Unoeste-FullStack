const express = require('express'); 
const path = require('node:path'); 

const app = express(); 
const PORT = 4000; 
const localStorage = []; 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form'); 
})

app.post('/sucesso', (req, res) => {
    const name = req.body.username;
    const cpf = req.body.cpf; 
    const email = req.body.email; 
    const password = req.body.password; 
    localStorage.push({ name, cpf, email, password }); 
    const ultimoUsuario = localStorage.at(-1); 
    res.render("sucesso", { nomeDoUsuario: ultimoUsuario.name });
})

app.get("/listaEmails", (req, res) => {
     console.log(localStorage);
  res.render("listaEmails", { email: localStorage });
});

app.listen(PORT, () => {
    console.log(`Sucesso, servidor rodando em http://localhost:${PORT}`)
})