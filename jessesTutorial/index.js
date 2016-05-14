var Promise = require('bluebird');

console.log("Output 1 - Before Request List of users")

var myFunction = function(){

    return new Promise(function(resolve, reject){
    	//Simulate a request to the server
    	var listofusers = [{name: "Jesse"}, {name: "Jerry"}, {name: "Jesse Gibbson"}, {name: "Matt"}];
    	setTimeout(function(){

	    	resolve(listofusers)
    	}, 10);
    	var requestfails = false;
    	if(requestfails){
	    	//If fails
	    	var err = {error:true, message: "User does not have permission to perform this action."};
	    	reject(err)    		
    	}

    })
}

myFunction()
.then(function(users){
	console.log("Got the list of users:")
	console.log(users)

})
.catch(function(err){
	console.error(err);
})
.finally(function(){
	console.log("Request Complete")
})


console.log("Output 2")


console.log("Output 3")



console.log("Output 4")