const mongoose = require('mongoose');
const db = `mongodb+srv://adminB:jHgSsVNInACwzebL@cluster0.cj2aq.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(db, {
}).then(() => {
  console.log('connected');
}).catch((error) => console.log("not connected"));
module.exports = db;