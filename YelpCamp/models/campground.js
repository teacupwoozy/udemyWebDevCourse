var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
           {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Comment"
           }
       ]
});

// Compile the Schema into a model (using blueprint above)
module.exports = mongoose.model("Campground", campgroundSchema);