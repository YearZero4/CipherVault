const express = require('express');
const path = require('path')
const app = express();
const PORT = 3003;
const css = path.join(__dirname, '../static');

app.use(express.static(css));
app.use(express.urlencoded({ extended: true }));

let nuevo = '';
let first = `<!DOCTYPE html>
<html lang="es">
<head>
<title>CipherVault</title>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<form method="post" action="/cipher">
<h1>CipherVault</h1>
<textarea autocomplete="off" name="text" spellcheck="false"></textarea>
<div id="options">
<input type="radio" name="opt" value="true" checked/>
<label>Encriptar</label>
<input type="radio" name="opt" value="false" />
<label>Desencriptar</label>
</div>

<button type="submit">EJECUTAR</button>
</form>
`
let end = `</body></html>`;

app.get('/favicon.ico', (req, res) => {
 res.status(200).end();
});

app.get('/', (req, res) => {
 res.send(`${first}${end}`);
})

app.post('/cipher', (req, res) => {
 let texto = req.body.text;
 let OptSel = req.body.opt;
 let text0 = '';
 if(OptSel==='true'){
  text0=Buffer.from(texto).toString('base64');
 } else {
  text0 = Buffer.from(texto, 'base64').toString('utf8');
 }
 res.send(`${first}
 <div id="father-results">

 <div class="child-results">
 <button id="copy">Copiar</button>
 <pre>${text0}</pre>
 </div>
 </div>
 ${end}
 <script src="/script.js"></script>`);
})

module.exports = app; 

// app.listen(PORT, () => {
//     console.log(`ESCUCHANDO POR EL PUERTO => ${PORT}`);
// })
