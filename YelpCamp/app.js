var express     = require("express"), 
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds"),
    User        = require("./models/user"),
    Comment     = require("./models/comment");

// Requiring Routes
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    authRoutes = require("./routes/index");

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true }); 
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))
// seedDB(); seed the database

// PASSPORT CONFIG
app.use(require("express-session")({
    secret: "You are incredbile",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.use(authRoutes);
app.use(commentRoutes);
app.use("/campgrounds", campgroundRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Rocketship LAUNCHED!");
});