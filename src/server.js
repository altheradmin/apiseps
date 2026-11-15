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








app.get('/', cors(corsOptions), (req, res) => {





  const url = 'http://3.148.105.67:8000/';


    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });




    const dados = await response.json();
    var data = dados;
    
    res.send('Resposta da API:', dados);










    
})


app.listen(port, () => console.log('Server is running on port ', port))
