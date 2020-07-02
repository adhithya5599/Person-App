var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
const options={
	 useUnifiedTopology: true, 
	 useNewUrlParser: true 
};

//App Config
mongoose.connect("mongodb://localhost/person_app",options);
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

//app.use(express.static('static'));
app.use(express.static(path.join(__dirname,'public')));

//Declaring Schema
var userSchema = new mongoose.Schema({
	name: String,
	birthday: String
});
var User = mongoose.model("User",userSchema);

//Routes
//Index Route
app.get("/",(req,res) => {
	res.redirect("/person");
});
app.get("/person",(req,res) => {
	User.find({},(err,user) => {
		if(err) throw err;
		res.render("home",{user:user});
	})
});

//Form page
app.get("/person/new",(req,res) => {
	res.render("new");
});

//Create Route
app.post("/person",(req,res) => {
	User.create(req.body.pers,(err,newPerson) => {
		if(err)
		{
			res.render("new");

		}
		else
		{
			res.redirect("/person");
		}
	});
})

app.listen(process.env.PORT || 3000,() => {
	console.log("Server is running");
});