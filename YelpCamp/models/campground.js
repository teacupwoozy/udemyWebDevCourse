var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   comments: [
           {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Comment"
           }
       ]
});

// Compile the Schema into a model (using blueprint above)
module.exports = mongoose.model("Campground", campgroundSchema);