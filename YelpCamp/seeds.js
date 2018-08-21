var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm8.staticflickr.com/7368/9811937955_03d073d6ef.jpg",
        description: "You can move mountains. You can do anything. You choose. Talk to trees, look at the birds. Whatever it takes. Let's build an almighty mountain. In your imagination you can go anywhere you want."
    },
    {
        name: "Granite Mountain", 
        image: "https://farm3.staticflickr.com/2941/15109131619_575d209040.jpg",
        description: "Talk to trees, look at the birds. Whatever it takes. Let's build an almighty mountain. Talk to trees, look at the birds. Whatever it takes. Let's build an almighty mountain. In your imagination you can go anywhere you want."
    },
    {
        name: "Apple Peak", 
        image: "https://farm1.staticflickr.com/124/417068644_118695e41e.jpg",
        description: "Clouds are free they come and go as they please. You have to make those little noises or it won't work. We spend so much of our life looking - but never seeing. We can fix anything. Just let this happen. We just let this flow right out of our minds. That's what painting is all about. It should make you feel good when you paint. There we go. And I will hypnotize that just a little bit."
        }
    ]

function seedDB(){
    // Remove all camgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } 
        console.log("removed campgrounds");
         // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else{
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great but I wish there was even more of it!",
                            author: "Angela"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
   
    
    // add a few comments
}

module.exports = seedDB;