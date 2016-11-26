var robot = {

  //MY ROBOT PROPERTIES - WHAT YOUR ROBOT HAS
  colour: 'blue',
  name: 'Sam',
  type: '',
  vocabulary: [
    "Hey Alison!",
    "Lets have a party!",
    "Have an awesome day!",
    "At 10:30am there is a break",
    "Food is bae"
  ],
  inventory: ["pizza","chocolate"],

  //MY ROBOT FUNCTIONS - WHAT YOUR ROBOT CAN DO

  //############### SPEECH RELATED ##############
  // Make robot speak
  speak: function() {

    // Prompt user for input between 0 and 2 and save results in the
    // variable "index"
   var index = prompt("Please enter a number between 0 and 4");
   document.getElementById('caption').innerHTML ='<p>' + this.name + ': ' + this.vocabulary[index] +'!</p>';

    // Get the phrase from vocabulary array at index position 'index'

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
    this.name = name;
    document.getElementById('caption').innerHTML ='<p>' + this.name + ': Your name has been changed to : ' + this.name +'!</p>';


    // Change the value of the name property of the robot object

    // Display a message to the user to let them know that the
    // name has changed

  },

  // Paints the robot a different colour
  // Accepts the new colour which is the background colour of the div clicked (See index.html)
  paint: function(newColor) {
   var robot = document.getElementById('robot');
   robot.style.backgroundColor = newColor;
    // Change the colour of the robot object

    // Change the colour of the robot element

  },

  //############### TIME RELATED ##############
  // Display time
  time: function() {

    // Create a new Date object and store it in a variable named "d"
    var d = new Date();
    var timeNow=d.getHours()+ ":"+ d.getMinutes();
    console.log(timeNow);
    document.getElementById('caption').innerHTML ='<p>' + this.name + " The time is "+timeNow +'</p>';
    // Get hours from d object using getHours() method and
    // store it in a variable named "hours"
  //var hours = getHours();
    // Get hours from d object using getMinutes() method and
    // store it in a variable named "minutes"
    // BONUS: Use conditional statement to add '0' to minutes less than 10
  //var minutes = getMinutes();

    // Concatenate "hours" and "minutes" to create a HH:MM format and
    // store in a variable named "time"

    // Display the newly formatted time inside the caption box
  },

  //############### INVENTORY RELATED ##############
  // Display inventory
  listItems: function() {

    // Use a for loop to log each value in the inventory array to the console

    // Create a variable "inventoryList" and add each item in the array to inventoryList to create a long string
   var inventoryList = ["cheese, bread, butter, milk"];
    // Display the results inside the caption
    document.getElementById('caption').innerHTML ='<p>' + this.name + " The time is "+timeNow +'</p>';
    // Now concatenate html tags into the string so that it appears as an unordered list in the browser

  },

  // Add an item to your robot's inventory
  addItem: function() {

    // Get value of #userItemInput and store in variable "newItem"

    // convert string to lowercase
    var newItem = document.getElementById('userItemInput').value;
    this.inventory.push(newItem);
    document.getElementById('caption').innerHTML ='<p>' + this.name + ': omg ' +newItem.toLowerCase()+ ' has been added to the inventory!</p>';
    document.getElementById('userItemInput').value= " ";


    // Add item to inventory array using push method

    // Notify user that the item has been added to the inventory by
    // displaying it in the caption

    // Clear input field by emptying the value property

  },

  // Remove an item to your robot's inventory
  removeItem: function() {

    // Get value of #userItemInput and save it to a variable
    // named "searchQuery"
   var searchQuery = document.getElementById('userItemInput').value;
    // Convert "searchQuery" to lowercase
   var lowerSearchQuery= searchQuery.toLowerCase();
    // Use indexOf to find the index position of the searchQuery
    // in the inventory array
   var searchIndex = this.inventory.indexOf(lowerSearchQuery);
    // Use a conditional statement to check the searchQuery was found
    console.log(searchIndex);
    if( searchIndex  >  -1 ) {
      this.inventory.splice(searchIndex, 1);
      document.getElementById('caption').innerHTML ='<p>' + this.name + ' Your item '+lowerSearchQuery+ ' has been removed!</p>';

    } else {
      document.getElementById('caption').innerHTML ='<p>' + this.name + ' I was unable to find your item!</p>';

    }
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
   var lowerSearchQuery= searchQuery.toLowerCase();

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
    console.log(direction + "button was clicked");
    var robot = document.getElementById('robot');
    var playground = document.getElementById('playground');
    // Create variable "robot" and store the element #robot in it
    // Create variable "playground" and store the element #playground in it

    // Get the position of the robot element relative to its parent
    // (playground) by using the offsetLeft and offsetTop methods
    // Assign the left offset value to the variable named 'x'
    // Assign the top offset value to the variable named 'y'
    // e.g. element.offsetLeft;
    var x = robot.offsetLeft;
    var y = robot.offsetTop;

    // Use a switch statement to change the coordinates based on the direction
    // The robot should move 40px in the direction that is clicked
    switch (direction) {
      case "up":
      robot.style.top = y - 40 + 'px';
         break;

      case "down":
      robot.style.top = y + 40 + 'px';
         break;

      case "left":
      robot.style.left = x + 40 + 'px';
         break;

      case "right":
      robot.style.left = x - 40 + 'px';
         break;

         default:
    }
    // Use style properties left and top to change the
    // position of the robot element.
    // Don't forget to concatenate "px" to the value
  },
  };
