//stack.js

//Change note : Added the code I had - Fabrizio Mangoni

var prompt = require('prompt-sync')();
var arr = [];
var playDecision = true;
//runs the program until the user decides to stop playing
while(playDecision){
    //gets and validates the user input
    var userSelection = validate();
    //executes the corresponding command based on what they inputted
    if(userSelection === 1){
        console.log(arr.length);
        arr.push
        console.log(arr.length);
    }else if(userSelection === 2){
         cconsole.log(arr.length);
        console.log("current last value in stack " + arr[arr.length-1]);
        console.log(arr.length);
    }else{
        if(isNaN(arr[arr.length-1])){
            console.log(arr.length);
            console.log('No value to pop! Try adding a value first!');
            console.log(arr.length);
        }else{
            console.log(arr.length);
            console.log("removing " + arr[arr.length-1]);
            console.log(arr.length);
            arr.pop();
            console.log(arr.length);
        }
    }
    //Determines if the user wants to continue playing.
    playDecision = getPlayDecision();
}
//logic for playing
function getPlayDecision(){
    while(true){
        var userValue = prompt('Continue?: ');
        
        if(!isNaN(userValue) && userValue.toUpperCase()==='YES' && userValue.toUpperCase() === 'NO'){
            break;
        }
        console.log('Please enter a valid value (YES or NO)');
    }
    if(userValue === 'YES'){
        return true;
    }else{
        return false;
    }
}

//logic for getting and validating a user input
function validate(){

    while(true){
    
        var userValue = prompt('Add (1) , View(2), Remove (3):');
        
        if(!isNaN(userValue) && userValue>=1 && userValue <=3){
            break;
        }
        console.log('Please enter a valid value');
    }
    return userValue;

}
