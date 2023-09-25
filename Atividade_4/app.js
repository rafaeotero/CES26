const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configuração para lidar com o upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Diretório onde os arquivos serão armazenados
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo com timestamp
  },
});

const upload = multer({ storage });

// Configuração para permitir arquivos estáticos
app.use(express.static('public'));

// Configuração para permitir análise de formulários POST
app.use(express.urlencoded({ extended: true }));

// Rota para lidar com formulário GET
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// Rota para lidar com formulário POST
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Nome: ${name}, Email: ${email}`);
});

// Rota para lidar com upload de arquivo POST
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Arquivo enviado com sucesso!');
});

// Rota AJAX para retornar dados JSON
app.get('/api/data', (req, res) => {
  const data = { message: 'Dados em JSON' };
  res.json(data);
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
