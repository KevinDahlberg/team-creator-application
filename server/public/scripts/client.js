
studentArray = ["logan","paul","kevin","bri","anisa","olga","chris", "keith","claudia","emily","nic" +
"betsy","anna","craig","dan","16","17","18"];
numGroups = 0;
curGroup = [];
allGroups = [];
curProject = "";
groupSize = 5;
currentGroupNumber = 1;




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
      curGroup = [];
    }


  }

var groupSize;

$(document).ready(function() {
  addEventListeners();
});//end docready

function addEventListeners() {
  $('#getNewGroupListButton').on('click', function() {
    groupSize = $("groupSizeTextField").val();
    generateGroups();
  });

  $('#showPastGroupsButton').on('click',function() {
    showPastGroups();
  });
}//end addEventListeners

function generateGroups(groupSize) {
  $.ajax({
    type: 'GET',
    url: '/names/makeNewGroup',
    success: function(response) {
      console.log("generateGroups returned successfully");
      appendNewGroups(response);
      $.ajax({
        type: 'POST',
        url: '/names/saveNewGroup',
        data: response,
        success: function() {
          console.log("newGroup savedb successfully");
        }
      });//end POST ajax
    }
  });//end GET ajax
}

function showPastGroups() {
  $.ajax({
    type: 'GET',
    url: '/names/allGroups',
    success: function(response) {
      console.log("showPastGroups returned successfully");
      appendAllGroups(response);
    }
  });
}

function appendNewGroups(response) {
  console.log(response);
}

function appendAllGroups(response) {
  console.log(response);
}
