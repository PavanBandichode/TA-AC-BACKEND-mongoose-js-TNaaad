var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: { type: String, lowwercase: true },
  age: { type: Number, default: 0 },
  passord: { type: String, minlength: 5, maxlength: 20 },
  createdAt: { type: Date, default: "01 - 03 - 2022" },
});
