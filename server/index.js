const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.get('/api/dishes', (req, res) => {
  fs.readFile(path.join(__dirname, './data.json'), (err, result) => {
    if(err) res.status(500).json({message: 'error', data: {}});
    else {
      res.status(200).json({message: "success", data: JSON.parse(result)});
    }
  });
});

app.listen(process.env.PORT || 5000, () => console.log('Listinging on port 5000'));