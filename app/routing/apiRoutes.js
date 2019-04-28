
var path = require("path")
console.log(path.join(__dirname, "../data/friends" ))
var people = require("../data/friends");
module.exports = function(app){

    var notFound = {
        name: "No Match Found",
        photoURL:"https://via.placeholder.com/300",
        scores:[]
    }
    
    function saveInfo(person){
        //avoid duplicate
        var found = false;
        for(var i=0; i<people.length; i++){
            if ((person.name.trim() === people[i].name.trim())){ 
                found = true;
                break;
            }
        }
        // if there is no one in the collecton or the person is not found
        // add person to people
        if ((people.length <= 0) || (!found)){
            people.push(person);
        }
    }
    
    function findMatch(seeker){
       var bestScore = 50; //large number to start 
       var matchIdx = -1;  //assume nothing found
       
       //find the lowest score 
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
    
    app.get("/api/friends", function(req, res){
        res.json(people);
    });

    app.post("/api/save", function(req, res) {
        var person = req.body.data
        saveInfo(person);
        
        var matchIdx = findMatch(person); //find a match
        person = notFound; //intialize to not found 
        if (matchIdx > -1) { 
            person = people[matchIdx]
        }
        
        res.json(person);  
    });
};
