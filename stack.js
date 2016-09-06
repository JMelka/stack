//Adding some comment
var prompt = require('prompt-sync')();
var arr = [];
var playDecision = true;
//runs the program until the user decides to stop playing
while (playDecision) {
    //gets and validates the user input
    var userSelection = validate();
    userSelection = Number.parseInt(userSelection);
    //executes the corresponding command based on what they inputted
<<<<<<< HEAD
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
=======
    if (userSelection === 1) {
        arr.push(getValueToPush());
    } else if (userSelection === 2) {
        if(arr.length == 0){
            //no value
            console.log("Nothing to show!");
        }else{
            console.log("current last value in stack " + arr[arr.length - 1]);
        }
    } else {
        if (arr.length == 0) {
            console.log('No value to pop! Try adding a value first!');
        } else {
            console.log("removing " + arr[arr.length - 1]);
>>>>>>> c917671d5d81e3e37f73b055bdcd3589d6c75ceb
            arr.pop();
            console.log(arr.length);
        }
    }
    //Determines if the user wants to continue playing.
    playDecision = getPlayDecision();
}
function getValueToPush(){
    return prompt('Value?');
}
//logic for playing
<<<<<<< HEAD
function getPlayDecision(){
    while(true){
        var userValue = prompt('Continue?: ');
        
        if(!isNaN(userValue) && userValue.toUpperCase()==='YES' && userValue.toUpperCase() === 'NO'){
=======
function getPlayDecision() {
    while (true) {
        userValue = prompt('Continue?');
        //toUpper needed () - fix
        if ('YES' == userValue.toUpperCase() || 'NO' == userValue.toUpperCase()) {
>>>>>>> c917671d5d81e3e37f73b055bdcd3589d6c75ceb
            break;
        }
        console.log('Please enter a valid value (YES or NO)');
    }
    if (userValue.toUpperCase() == 'YES') {
        return true;
    } else {
        return false;
    }
}

//logic for getting and validating a user input
function validate() {

    while (true) {

<<<<<<< HEAD
    while(true){
    
        var userValue = prompt('Add (1) , View(2), Remove (3):');
        
        if(!isNaN(userValue) && userValue>=1 && userValue <=3){
=======
        var userValue = prompt('Add (1) , View(2), Remove (3)');

        if (!isNaN(userValue) && userValue >= 1 && userValue <= 3) {
>>>>>>> c917671d5d81e3e37f73b055bdcd3589d6c75ceb
            break;
        }
        console.log('Please enter a valid value');
    }
    return userValue;

}
