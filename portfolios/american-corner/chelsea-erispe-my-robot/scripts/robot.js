var robot = {

  //MY ROBOT PROPERTIES - WHAT YOUR ROBOT HAS
  colour: 'blue',
  name: 'Chella',
  type: '',
  vocabulary: [
    "Salaamalotion",
    "Hoe lyk it!",
    "Awe ma se kinners"
  ],
  inventory: ["pizza","butter chicken","chocolate","koeksister","sugar","tea","coffee"],

  //MY ROBOT FUNCTIONS - WHAT YOUR ROBOT CAN DO

  //############### SPEECH RELATED ##############
  // Make robot speak
    speak: function() {
    console.log("speak");

    var index = prompt("Please give me a number between 0 and 3");

    document.getElementById('caption').innerHTML ='<p>' + this.name + ' : ' + this.vocabulary[index] + "</p>";


    // Prompt user for input between 0 and 2 and save results in the
    // variable "index"

    // Get the phrase from vocabulary array at index position 'words'

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
    var rename = document.getElementById('userNameInput').value;

    // Change the value of the name property of the robot object
    this.name = rename;

    // Display a message to the user to let them know that the
    // name has changed
    document.getElementById('caption').innerHTML ='<p>' + this.name + ': My new name is ' + this.name +'!</p>';


  },

  // Paints the robot a different colour
  // Accepts the new colour which is the background colour of the div clicked (See index.html)
  paint: function(newColor) {

    // Change the colour of the robot object
     robot.colour = newColor;
    // Change the colour of the robot element
    document.getElementById("robot").style.backgroundColor = newColor;

  },

  //############### TIME RELATED ##############
  // Display time
  time: function() {

    // Create a new Date object and store it in a variable named "d"
     var d = new Date();
     var timeNow = d.getHours()+ ":"+ d.getMinutes();
     console.log(timeNow);
     document.getElementById('caption').innerHTML ='<p>' + this.name + ': The time is now ' + timeNow +'!</p>';

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

    // Use a for loop to log each value in the inventory array to the console
      var inventoryList ="";
     for (var i = 0; i < this.inventory.length; i++){
       inventoryList += this.inventory[i] + ' ';
     }
    // Create a variable "inventoryList" and add each item in the array "inventory" to inventoryList to create a long string
     //var inventoryList = ["pizza","butter chicken","chocolate","koeksister"]
    // Display the results inside the caption

    // Now concatenate html tags into the string so that it appears as an unordered list in the browser
     document.getElementById('caption').innerHTML ='<p>' + this.name + ':  ' + inventoryList +'</p>';
  },

  // Add an item to your robot's inventory
  addItem: function() {

    // Get value of #userItemInput and store in variable "newItem"
    var newItem = document.getElementById("userItemInput").value;
    // convert string to lowercase

    newItem.toLowerCase();
    // Add item to inventory array using push method

    this.inventory.push(newItem);
    // Notify user that the item has been added to the inventory by
    // displaying it in the caption

    document.getElementById('caption').innerHTML ='<p>' + this.name + ': New item was added ' + newItem +'!</p>';
    // Clear input field by emptying the value property


  },

  // Remove an item to your robot's inventory
  removeItem: function() {

    // Get value of #userItemInput and save it to a variable
    // named "searchQuery"
    var searchQuery = document.getElementById("userItemInput").value;

    // Convert "searchQuery" to lowercase
    searchQuery.toLowerCase();

    // Use indexOf to find the index position of the searchQuery
    // in the inventory array
    var index = this.inventory.indexOf(searchQuery);

    // Use a conditional statement to check the searchQuery was found

    // If the item was found:
    // Use the splice method to remove the item from the inventory array using the index position of the item
    // Display message to let user know that the item was removed

    // else if the item was not found
    // Display message to let user know that the item could not be found
    if (index > -1)
     {
       this.inventory.splice(index, 1);
         document.getElementById('caption').innerHTML ='<p>' + this.name + ': This item has been removed from your inventory ' + searchQuery +'!</p>';

     } else {
       document.getElementById('caption').innerHTML ='<p>' + this.name + ': This item was not found in your inentory!</p>';
     }

    // Clear input field by emptying the value property
    document.getElementById("userItemInput").value ='';
  },

  // Search for an item to your robot's inventory
  findItem: function() {

    // Get value of #userItemSearch and save it to a variable
    // named "searchQuery"

    var searchQuery = document.getElementById("userItemSearch").value;
    // Convert "searchQuery" to lowercase

    searchQuery.toLowerCase();
    // Use indexOf to find the index position of the searchQuery
    // in the inventory array

     var indexPos = this.inventory.indexOf(searchQuery);
    // Use a conditional statement to display a message in the
    // caption based on the index position of the searchQuery
    if (indexPos > -1)
     {
       this.inventory.splice(indexPos, 1);
         document.getElementById('caption').innerHTML ='<p>' + this.name + ': This item has been found in your inventory ' + searchQuery +'!</p>';

     } else {
       document.getElementById('caption').innerHTML ='<p>' + this.name + ': This item was not found in your inventory!</p>';
     }

    // Clear input field by emptying the value property

  },

  // ############### MOVEMENT FUNCTIONS #########################
  // Use the paint function as a guide on how to change style properties
  // move robot
  // Accepts the direction that the robot must travel as an argument
  move: function(direction) {

    // Create variable "robot" and store the element #robot in it
    // Create variable "playground" and store the element #playground in it
    var robot = document.getElementById('robot');
    var playground = document.getElementById('playground');

    // Get the position of the robot element relative to its parent
    // (playground) by using the offsetLeft and offsetTop methods
    // Assign the left offset value to the variable named 'x'
    // Assign the top offset value to the variable named 'y'
    // e.g. element.offsetLeft;
    var x = robot.offsetLeft;
    var y = robot.offsetTop;
    // Use a switch statement to change the coordinates based on the direction
    // The robot should move 40px in the direction that is clicked
    switch (direction){
      case "up" :
      robot.style.top = y - 40 + 'px';
           break;
      case "down" :
      robot.style.top = y + 40 + 'px';
           break;
      case "left" :
      robot.style.left = x - 40 + 'px';
           break;
      case "right" :
      robot.style.left = x + 40 + 'px';
           break;
    }
    // Use style properties left and top to change the
    // position of the robot element.
    // Don't forget to concatenate "px" to the value

  }
};
