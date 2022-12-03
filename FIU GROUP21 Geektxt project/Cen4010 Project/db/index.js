const mongoose = require('mongoose');

const CONN_STRING = `mongodb+srv://Group21:Group21@cluster0.wnmgatu.mongodb.net/?retryWrites=true&w=majority` 
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const db = () => Promise.resolve(mongoose.connect(CONN_STRING, options))

db()
  .then(() => console.log('connected to the DB'))
  .catch(e => console.log('Mongo error', e.message));