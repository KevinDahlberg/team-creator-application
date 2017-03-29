studentArray = ["logan","paul","kevin","bri","anisa","olga","chris", "keith","claudia","emily","nic" +
"betsy","anna","craig","dan","16","17","18"];
numGroups = 0;
curGroup = [];
allGroups = [];
curProject = "";
groupSize = 5;
currentGroupNumber = 1;


$(document).ready(function(){
  //get studentArray HEREEEEE
  console.log("jq sourced");
  //while there are still students left
  createGroups();

});

function moveElement(index, fromArray, toArray) {
  toArray.push(fromArray[index]);
  fromArray.splice(index, 1);
}

function createGroups(){
  while (studentArray !== 0) {
    // if the current group isnt full

      // cycle through the remaining students
      for (var i = 0; i < groupSize; i++){
        //select a random index number based on number of remaining students
        var curRandom = Math.floor(Math.random() * studentArray.length);
        //call function to move randomly selected student to current Group
        moveElement(curRandom, studentArray, curGroup);
      }
      if (curGroup.length === groupSize)
      allGroups.push(curGroup);
    }


  }
