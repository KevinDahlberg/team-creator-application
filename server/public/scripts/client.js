
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
// Logan's code

function sendRelevantData(){
  $('.determineGroupsButton').on('click', function(){
    //sets value of group size equal to user determined position of dropdown
    groupSize = $('.reasonableNumberOfGroupSizesDeterminedByAvoidingTheIsolationOfIndividualStudents').val();
    //sets name of current project equal to sequence of letters typed into project name box
    curProject = $('#curProject').val();
    console.log(groupSize);
    console.log(curProject);
    //calls function to randomly generate groups
    createGroups();
    extractAllGroups();
    //in theory appends new groups to the div
    appendNewGroupsToDiv();
  });
}

function extractAllGroups(){
  for (var l = 0; l < allGroups.length; l++){
    //sets thisGroup to represent the current group
    var thisGroup = allGroups[l];
    console.log(thisGroup);
  }
}

function appendNewGroupsToDiv(){
  //cycles through array of all groups
  for (var j = 0; j < allGroups.length; j++){
    //sets thisGroup to represent the current group
    var thisGroup = allGroups[j];
    //cycles through the current group
    for (var k = 0; k < thisGroup.length; k++){
      //sets thisPerson equal to the person represented by the index[k] of the current group
      var thisPerson = thisGroup[k];
      //nothing sticks in client side logic
      // console.log($('.currentGroup').append('<p>' + thisPerson + '</p>'));
      $('.currentGroup').append('<p>' + thisPerson + '</p>');
    }
  }
}

function createGroups(){
  //while we haven' run out of students
  while (studentArray.length !== 0) {
      // cycle through the remaining students
      for (var i = 0; i < groupSize; i++){
        //select a random index number based on number of remaining students
        var curRandom = Math.floor(Math.random() * studentArray.length);
        //call function to move randomly selected student to current Group
        moveElement(curRandom, studentArray, curGroup);
        //don't add students that dont exist
        if (studentArray.length === 0){
          break;
        }
      }
      //once the current group size is filled, push it to the current group of groups of groups of groups
        allGroups.push(curGroup);
        //reset the current group so we can add more groups
        curGroup = [];
      }
  }

  function determineAndDisplayReasonableGroupSizesInsideOfOurSelectorDropdown(numberOfStudentsWishedByTheUserToBeConsideredForGrouping) {
    for(var i = 0; i < numberOfStudentsWishedByTheUserToBeConsideredForGrouping.length/2; i++){
      $('.reasonableNumberOfGroupSizesDeterminedByAvoidingTheIsolationOfIndividualStudents').append(
        '<option value="' + (i+1) + '">' + (i+1) + '</option>');
    }
  }

  function extractAllGroups(){
    for (var l = 0; l < allGroups.length; l++){
      //sets thisGroup to represent the current group
      var thisGroup = allGroups[l];
      console.log(thisGroup);
    }
  }



// end Logan
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
