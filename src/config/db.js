const mongoose = require("mongoose");
//const model= require("./models");
//mongoose.connect("mongodb+srv://srs_admin:khi55656@srs-xycvp.mongodb.net/srs?retryWrites=true&w=majority")
const MONGOURI = "mongodb+srv://srs_admin:khi55656@srs-xycvp.mongodb.net/srs?retryWrites=true&w=majority";

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}, (err) => {
  if (err) throw console.error('Mongo error', err);
  console.log('DB connected');
});