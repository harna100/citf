require('dotenv').config();
const mongoose = require('mongoose')
const express_setup = require('./utils/express-setup');


// connect mongoose to db
mongoose.Promise = global.Promise;
// var mongoose = require('mongoose')
// var mongoUrl = "mongodb://localhost:27017/test"

// const connectWithRetry = function() {
//   return mongoose.connect(mongoUrl, function(err) {
//     if (err) {
//       console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
//       setTimeout(connectWithRetry, 5000);
//     }
//   });
// };

// connectWithRetry();

mongoose.connect('mongodb://mongo:27017/ctif',
  {
    useNewUrlParser: true,
    // auto_reconnect:true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function() {
  // we're connected!
  console.info("Successful Mongoose connection");
});


express_setup.StartExpressServer();

