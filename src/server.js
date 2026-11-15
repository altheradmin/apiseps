const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  try {
    // Faz a requisição para a sua API externa
    const response = await fetch('http://3.148.105.67:8000/');

    // Verifica se a resposta HTTP foi bem-sucedida (status 200-299)
    if (!response.ok) {
      throw new Error(`Erro na API externa: ${response.status} ${response.statusText}`);
    }

    // Converte a resposta para JSON
    const dados = await response.json();

    // Você pode acessar os campos retornados diretamente:
    // dados.status, dados.versao, dados.mensagem

    // Retorna os dados obtidos para o cliente que chamou a sua rota
    return res.status(200).json({
      sucesso: true,
      apiExterna: dados
    });

  } catch (error) {
    console.error('Falha ao conectar com a API:', error.message);
    
    // Retorna erro 502 (Bad Gateway) caso a API externa esteja fora do ar ou inacessível
    return res.status(502).json({
      sucesso: false,
      erro: 'Não foi possível comunicar com a API Multi-Desastres Naturais.',
      detalhes: error.message
    });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
