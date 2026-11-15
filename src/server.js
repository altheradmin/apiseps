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
  res.send('Api OPEN')
})


app.listen(port, () => console.log('Server is running on port ', port))
