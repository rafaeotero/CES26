// server.js

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

const cidadeData = [
  {
    id: 1,
    nome: 'São Paulo',
    foto: 'https://cognatis.com.br/wp-content/uploads/2021/01/Sao-Paulo-467-banner-1.jpg',
    texto: 'São Paulo é a maior cidade do Brasil e um importante centro econômico, cultural e financeiro do país. Localizada na região sudeste, a cidade abriga uma população diversificada e multicultural. Com sua vasta oferta de museus, teatros, restaurantes e espaços culturais, São Paulo é conhecida por sua efervescência cultural. Além disso, é um polo de negócios internacional, abrigando inúmeras empresas e escritórios corporativos. A cidade também enfrenta desafios urbanos, como o trânsito intenso e a desigualdade social, mas continua a atrair pessoas de todo o Brasil em busca de oportunidades e uma vida urbana vibrante.',
  },
  {
    id: 2,
    nome: 'Rio de Janeiro',
    foto: 'https://2.bp.blogspot.com/-RThEwEqQrtc/Uk2l9uuty4I/AAAAAAAAnE0/ZsPTiyseI_A/s1600/Rio-de-Janeiro.jpg',
    texto: 'O Rio de Janeiro é uma das cidades mais icônicas do Brasil. Situada na região sudeste, é famosa por sua deslumbrante paisagem natural, que inclui praias mundialmente conhecidas, como Copacabana e Ipanema, e o famoso Cristo Redentor no Corcovado. Além disso, o Rio abriga uma rica cena cultural, com festivais de música, dança e carnaval que atraem visitantes de todo o mundo. A cidade também possui uma história rica e arquitetura impressionante, como o Pão de Açúcar e o bairro histórico de Santa Teresa. No entanto, o Rio enfrenta desafios sociais e econômicos, incluindo questões de segurança pública, que contrastam com sua beleza natural e cultural.',
  },
  {
    id: 3,
    nome: 'Goiânia',
    foto: 'https://www.goiania.go.gov.br/wp-content/uploads/2019/10/10.28GOIANIAGERAL_PJ-1.jpeg',
    texto: 'Goiânia, a capital do estado de Goiás, é uma cidade em constante crescimento e desenvolvimento. Fundada no século XX, é conhecida por sua arquitetura modernista e planejamento urbano organizado. A cidade oferece uma boa qualidade de vida aos seus habitantes, com muitas áreas verdes, parques, e uma infraestrutura bem desenvolvida. Além disso, Goiânia possui uma cena cultural vibrante, com teatros, museus e uma forte presença na música sertaneja, um gênero musical popular no Brasil. A economia da cidade é diversificada, incluindo setores como agronegócio, indústria e comércio. No entanto, como qualquer grande cidade, Goiânia também enfrenta desafios relacionados a questões sociais e urbanas, que requerem constante atenção e planejamento para o futuro.',
  },
  {
    id: 4,
    nome: 'Maragogi',
    foto: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/07/maragogi-alagoas-.jpeg',
    texto: 'Maragogi é um paraíso tropical localizado no estado de Alagoas, no nordeste do Brasil. Conhecido por suas praias de águas cristalinas e recifes de coral, é um destino popular para quem busca relaxar em meio à natureza deslumbrante. As piscinas naturais de Maragogi, acessíveis durante a maré baixa, oferecem oportunidades únicas para a prática de snorkeling e observação da vida marinha colorida. Além disso, a região é agraciada com coqueirais e paisagens costeiras de tirar o fôlego. Com uma atmosfera tranquila e acolhedora, Maragogi é um refúgio para os amantes da praia e da natureza que desejam desfrutar do litoral nordestino do Brasil.',
  },
  {
    id: 5,
    nome: 'Uberlândia',
    foto: 'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/05/24140015/05fd36c5-eb2b-48d8-9a2f-08f0f5d8dc8d.jpg',
    texto: 'Uberlândia, localizada no estado de Minas Gerais, é uma cidade em constante crescimento e desenvolvimento econômico. É conhecida por ser um importante centro comercial, industrial e agropecuário da região. Com uma infraestrutura bem desenvolvida, a cidade oferece uma qualidade de vida atrativa para seus habitantes. Além disso, Uberlândia possui uma cena cultural diversificada, com teatros, museus e eventos culturais ao longo do ano. Sua localização estratégica no interior de Minas Gerais a torna um hub logístico importante, facilitando o transporte de mercadorias para várias partes do país. Como muitas cidades em crescimento, Uberlândia enfrenta desafios relacionados ao planejamento urbano e à infraestrutura, mas continua a atrair pessoas em busca de oportunidades econômicas e uma vida equilibrada.',
  },
  // Adicione mais cidades conforme necessário
];

app.get('/cidades', (req, res) => {
  res.json(cidadeData);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

