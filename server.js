let express = require('express');
let moment = require('moment');
let app = express();

app.use((req, res) => {
  let parameter = decodeURIComponent(req.path);
  let naturalDate = moment(parameter).format("MM-DD-YYYY");
  let unixDate = moment(parameter).unix();

  let dateObject = {
    unix: unixDate,
    natural: naturalDate
  };


  res.send(dateObject);
})

app.listen(3000, () => {
  console.log('Example app is listening on port 3000');
})
