const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jayeeta22:instaclone@cluster0.fdjljsc.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });
