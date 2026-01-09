'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
// 1. required bcrypt
const bcrypt = require('bcrypt');
const app = express();
fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
// 2. generate the hash
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Hashed Password: ' + hash);

    // 3. hash compare
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Result of comparison: ' + res); // This should log 'true'
      }
    });
  }
});
*/
//END_ASYNC

//START_SYNC
// 4. hash synchronously
const syncHash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Sync Hashed Password: ' + syncHash);

// 5. compare synchronously
const syncResult = bcrypt.compareSync(myPlaintextPassword, syncHash);
console.log('Sync Result of comparison: ' + syncResult);
//END_ASYNC

//START_SYNC
// NEW 6. generate the hash synchronously and store it in a variable
const syncHash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Sync Hashed Password: ' + syncHash);

// NEW 7. compare the plaintext to the hash and store the boolean result
const syncResult = bcrypt.compareSync(myPlaintextPassword, syncHash);
console.log('Sync Result of comparison: ' + syncResult);
//END_SYNC



























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
