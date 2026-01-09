'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
// 1. required bcrypt
const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.
const app = express();
fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


// NEW 2. generate the hash
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Hashed Password: ' + hash);

    // NEW 3. hash compare
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Result of comparison: ' + res); // This should log 'true'
      }
    });
  }
});




//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
