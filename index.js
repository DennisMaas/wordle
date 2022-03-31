const PORT = 8000
const axios = require("axios").default
const express = require("express")

const app = express();


app.get('/word', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: {count: '5', wordLength: '5'},
    headers: {
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
      'X-RapidAPI-Key': 'adbb7390a9mshe68fd9e2528cc05p1327adjsn765692c5d470'
    }
  };

  axios.request(options).then((response) => {
    console.log(response.data);
    res.json(response.data[0]);
  }).catch((error) => {
    console.error(error);
  });

})

app.listen(PORT, () => console.log('Server running on port ' + PORT));


