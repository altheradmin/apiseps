const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ["GET", "POST"]
}));


app.use(express.json());

const port = process.env.PORT ?? 4000;


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


async function consultarApi() {
  const url = 'http://3.148.105.67:8000/';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    // Verifica se a requisição teve sucesso (status 200-299)
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }

    // Converte a resposta para JSON
    const dados = await response.json();
    
    console.log('Resposta da API:', dados);
    console.log('Status:', dados.status);
    console.log('Mensagem:', dados.mensagem);

  } catch (erro) {
    console.error('Falha ao conectar com a API:', erro.message);
  }
}

consultarApi();





app.get('/', cors(corsOptions), (req, res) => {
  res.send('Api OPEN')
})


app.listen(port, () => console.log('Server is running on port ', port))
