
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
  //the two functions below are stub testers; delete before production merge
  appendNewGroups(newGroupTester);
  appendAllGroups(allGroupsTester);
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
  //this assumes that the new group is being passed in as an array of strings,
  // where each string is a collection of comma-delimited names of group members.
  for (var i = 0; i < response.length; i++) {
    $('#currentGroupDiv').append("<p>Group "+ (i+1) + " is: ", response[i], "</p>");
  }
}

function appendAllGroups(response) {
  console.log(response);
  //this assumes that the list of all groups is being passed as an array of arrays of strings,
  //and that the arrays-of-strings are ...tomorrow. Will do tomorrow.
  for (var j = 0; j < response.length; j++) {
    $('#previousGroupDiv').append('<div id="'+j+'"><h1>Project Number '+ (j+1)+' created these groups:<h1></div>');
    console.log(response.length);
    for (var k = 0; k < response[j].length; k++) {
      console.log(response[j].length);
      $('#previousGroupDiv').append("<p>Group "+ (k+1) + " was: ", response[j][k], "</p>");
    }//end forloop k
  }//end forloop j
}//end appendAllGroups


//stub testers for appendNewGroups & appendAllGroups
var newGroupTester = ["carrots, peas, fish", "dogs, cats, hamsters", "ford, chevy, dodge", "scotch, scotch, scotch"];
var allGroupsTester = [
  ["alpha, beta, gamma", "delta, upsilon, derpsilon", "iota, kappa, jabba", "lolcats, sisyphus, bacchus"],
  ["akko, bakko, cakko", "dakko, fakko, gakko", "hakko, jakko, kakko", "lakko, makko, nakko"],
  ["xia, shang, zhou", "qin, han, sui", "tang, song, yuan", "ming, qing, republic"],
];
