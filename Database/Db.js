const mongoose = require('mongoose');
const db =  "mongodb://adminB:ZwIEXr2Ae3PumUBz@cluster0-shard-00-00.cj2aq.mongodb.net:27017,cluster0-shard-00-01.cj2aq.mongodb.net:27017,cluster0-shard-00-02.cj2aq.mongodb.net:27017/blockitt?ssl=true&replicaSet=atlas-mbd5qc-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(db,{
  useNewUrlParser: true,
  // dbName: 'blockitt'
}).then(() => {
  console.log('connected');
}).catch((error) => console.log("not connected=========>>>>", error));
module.exports = db;