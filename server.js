/*I would not have been able to figure this out without https://github.com/kevcomedia*/
let express = require('express');
let timeStamp = require('./app/timeStamp');
let path = require('path');
let app = express();

app.use('/', express.static('./public'));

app.get('/:time', (req, res) => {
  let output = timeStamp(req.path);

  res.send(output);
})


app.listen(process.env.PORT || 3000, () => {
  console.log('Example app is listening on port 3000');
})
