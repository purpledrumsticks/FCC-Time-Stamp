/*I would not have been able to figure this out without https://github.com/kevcomedia*/
let express = require('express');
let moment = require('moment');
let app = express();


module.exports = function timeStamp (time) {
  let formats = [
    'X',
    'MMMM D, YYYY',
    'MMMM D YYYY',
    'MMM D, YYYY',
    'MMM D YYYY',
    'D MMMM YYYY',
    'D MMM YYYY',
    'D YYYY MMMM',
    'D YYYY MMM'
  ];

  let date = moment(decodeURIComponent(time), formats);
  let unixDate = Number(date.utc().format('X'));
  let naturalDate = date.utc().format("MM-DD-YYYY");

  let dateObject = {
    unix: unixDate,
    natural: naturalDate
  };

  if (date.isValid()) {
    return dateObject;
  }

  return {
    unix: null,
    natural: null
  }
};
