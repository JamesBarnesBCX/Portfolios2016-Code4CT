var robot = {

  //MY ROBOT PROPERTIES - WHAT YOUR ROBOT HAS
  colour: 'blue',
  name: 'Engelbert',
  type: '',
  vocabulary: [
    " :Hello master!",
    " :How may I serve you?",
    " :Have a good day",
    " :Salaam fam",
    " :What's cooking good looking?",
    " :Salaam vat my saam",

  ],
  inventory: [],

  //MY ROBOT FUNCTIONS - WHAT YOUR ROBOT CAN DO

  //############### SPEECH RELATED ##############
  // Make robot speak
  speak: function() {

    var index = prompt("Choose a number between 0 and 5");
    if (index <= 5) {

    document.getElementById('caption').innerHTML ='<p>' + this.name + this.vocabulary[index]+'!</p>';

    } else {
      document.getElementById('caption').innerHTML ='<p>' + this.name + " Please choose a number between 0 and 5 "+'!</p>';
    }
    // Prompt user for input between 0 and 2 and save results in the
    // variable "index"



    // Get the phrase from vocabulary array aulat index position 'words'

    // Display the phrase in #caption

  },

  // Greets user
  greeting: function() {

    document.getElementById('caption').innerHTML ='<p>' + this.name + ': Hi! My name is ' + this.name +'!</p>';

  },

  //############### CUSTOMIZE ROBOT ##############
  // Rename your robot
  rename: function(){

    // Get the new name value from #userNameInput input field
    var name = document.getElementById('userNameInput').value;
    this.name=name;
    document.getElementById('caption').innerHTML ='<p>' + this.name + ': Hi! My name is ' + this.name +'!</p>';
    // Change the value of the name property of the robot object

    // Display a message to the user to let them know that the
    // name has changed

  },

  // Paints the robot a different colour
  // Accepts the new colour which is the background colour of the div clicked (See index.html)
    paint: function(newColor) {
          var robot = document.getElementById('robot');
          robot.style.backgroundColor= newColor;
    // Change the colour of the robot object

    // Change the colour of the robot element

  },

  //############### TIME RELATED ##############
  // Display time
  time: function() {
    var d = new Date() ;
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var time = document.getElementById('caption').innerHTML ='<p>' + hours+ ':'+ minutes +'!</p>';
    // Create a new Date object and store it in a variable named "d"

    // Get hours from d object using getHours() method and
    // store it in a variable named "hours"

    // Get hours from d object using getMinutes() method and
    // store it in a variable named "minutes"
    // BONUS: Use conditional statement to add '0' to minutes less than 10

    // Concatenate "hours" and "minutes" to create a HH:MM format and
    // store in a variable named "time"

    // Display the newly formatted time inside the caption box
  },

  //############### INVENTORY RELATED ##############
  // Display inventory
  listItems: function() {
    var inventoryList = "<ul>"
   for (var i = 0;i< this.inventory.length; i++){
     console.log(this.inventory[i]);
     inventoryList += "<li>" + this.inventory[i] + "</li>";
   }
  inventoryList +="</ul>"
    // Use a for loop to log each value in the inventory array to the console

    // Create a variable "inventoryList" and add each item in the array to inventoryList to create a long string
console.log(inventoryList);
document.getElementById('caption').innerHTML = inventoryList ;
    // Display the results inside the caption

    // Now concatenate html tags into the string so that it appears as an unordered list in the browser

  },

  // Add an item to your robot's inventory
  addItem: function() {
    var newItem = document.getElementById('userItemInput').value;
    newItem.toLowerCase();
    this.inventory.push(newItem);
    document.getElementById('caption').innerHTML ='<p>' + newItem +" has been added to your inventory" +'</p>';

    // Get value of #userItemInput and store in variable "newItem"
    document.getElementById('userItemInput').value= '';
    // "  " === "&nbsp;&nbsp;"
    // convert string to lowercase

    // Add item to inventory array using push method

    // Notify user that the item has been added to the inventory by
    // displaying it in the caption

    // Clear input field by emptying the value property

  },

  // Remove an item to your robot's inventory
  removeItem: function(){

    var searchQuery=document.getElementById('userItemInput').value;

    searchQuery.toLowerCase();

    var indexPos = this.inventory.indexOf(searchQuery);

    if (indexPos > -1) {
      this.inventory.splice(indexPos, 1);
      document.getElementById('caption').innerHTML ='<p>' + searchQuery +" has been removed from your inventory" +'</p>';
    }
    else
    {
      document.getElementById('caption').innerHTML ='<p>'+"item not found" +'!</p>';
    }
    // named "searchQuery"

    // Convert "searchQuery" to lowercase

    // Use indexOf to find the index position of the searchQuery
    // in the inventory array

    // Use a conditional statement to check the searchQuery was found

    // If the item was found:
    // Use the splice method to remove the item from the inventory array using the index position of the item
    // Display message to let user know that the item was removed

    // else if the item was not found
    // Display message to let user know that the item could not be found


    // Clear input field by emptying the value property
  },

  // Search for an item to your robot's inventory
  findItem: function() {
   var searchQuery = document.getElementById('userItemSearch').value;
   searchQuery.toLowerCase();
     var index = this.inventory.indexOf(searchQuery);
     if (index > -1)
     { document.getElementById('caption').innerHTML ='<p>'+ searchQuery + " was found" +'!</p>';
     }
     else{ document.getElementById('caption').innerHTML ='<p>'+ searchQuery + " is not available " +'!</p>';}

    // Get value of #userItemSearch and save it to a variable
    // named "searchQuery"

    // Convert "searchQuery" to lowercase

    // Use indexOf to find the index position of the searchQuery
    // in the inventory array

    // Use a conditional statement to display a message in the
    // caption based on the index position of the searchQuery

    // Clear input field by emptying the value property

  },

  // ############### MOVEMENT FUNCTIONS #########################
  // Use the paint function as a guide on how to change style properties
  // move robot
  // Accepts the direction that the robot must travel as an argument
  move: function(direction) {
  var robot = document.getElementById('robot');
    // Create variable "robot" and store the element #robot in it
    // Create variable "playground" and store the element #playground in it
  var playground = document.getElementById('playground')
    // Get the position of the robot element relative to its parent
    // (playground) by using the offsetLeft and offsetTop methods
    // Assign the left offset value to the variable named 'x'
    // Assign the top offset value to the variable named 'y'
    // e.g. element.offsetLeft;
var x = robot.offsetLeft
var y =robot.offsetTop
    // Use a switch statement to change the coordinates based on the direction
    // The robot should move 40px in the direction that is clicked

switch(direction){
  case "up":
  robot.style.top = y - 40 +"px";
   break;
  case "down":
  robot.style.top = y + 40 + "px";
   break;
  case "left":
  robot.style.left = x - 40 +"px";
   break;
  case "right":
  robot.style.left = x + 40 +"px";
   break;
  default:
}
    // Use style properties left and top to change the
    // position of the robot element.
    // Don't forget to concatenate "px" to the value

  }
};
