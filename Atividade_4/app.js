const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Porta do servidor

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Diretório onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nome original do arquivo
  },
});
const upload = multer({ storage: storage });

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para exibir arquivos estáticos (por exemplo, HTML, CSS, JS)
app.use(express.static('public'));

// Rota para processar dados de um formulário enviado via comando GET
app.get('/formulario', (req, res) => {
  const nome = req.query.nome;
  const idade = req.query.idade;
  // Faça o processamento dos dados aqui
  res.send(`Nome: ${nome}, Idade: ${idade}`);
});

// Rota para suportar uma aplicação AJAX
app.get('/dados-json', (req, res) => {
  const data = {
    key1: 'valor1',
    key2: 'valor2',
  };
  res.json(data); // Envia os dados em formato JSON
});

// Rota para lidar com uploads de arquivos via comando POST
app.post('/upload', upload.single('arquivo'), (req, res) => {
  // 'arquivo' deve corresponder ao nome do campo do formulário de upload
  res.send('Arquivo enviado com sucesso!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
