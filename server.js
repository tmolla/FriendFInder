//require("dotenv").config();
//var mysql = require("mysql");
var path = require("path")
var express = require("express");


//create an express server and initialize the prot where the server is listining on
var app = express();
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var notFound = {
    name: "No Match Found",
    photoURL:"https://via.placeholder.com/300",
    scores:[]
}
var people = []

function saveInfo(person){
    //avoid duplicate
    var found = false;
    for(var i=0; i<people.length; i++){
        if ((person.name.trim() === people[i].name.trim())){ 
            found = true;
            break;
        }
    }

    if ((people.length <= 0) || (!found)){
        people.push(person);
    }
}

function findMatch(seeker){
   var bestScore = 50;
   var matchIdx = -1;
   for (var idx = 0; idx < people.length; idx++) {
        var score = 0;
        if (!(seeker.name.trim() === people[idx].name.trim())){
            for (var i = 0; i < people[idx].scores.length; i++){
                score += Math.abs(seeker.scores[i] - people[idx].scores[i])
            }
            if (score < bestScore){
                bestScore = score;
                matchIdx = idx
            }
        }
    }
    return matchIdx
}

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})
app.get("/api/friends", function(req, res){
    res.json(people);
})
app.post("/api/save", function(req, res) {
    var person = req.body.data

    saveInfo(person);
    
    var matchIdx = findMatch(person); //find a match

    //people.push(person)
    person = notFound; //intialize
    if (matchIdx > -1) { person = people[matchIdx]}
    
    res.json(person);  
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})