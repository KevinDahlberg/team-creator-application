
// studentArray = ["logan","paul","kevin","bri","anisa","olga","chris", "keith","claudia","emily","nic" +
// "betsy","anna","craig","dan","16","17","18"];
// numGroups = 0;
// curGroup = [];
// allGroups = [];
// curProject = "";
// groupSize = 0;
//
//
//
//
//
// function moveElement(index, fromArray, toArray) {
//   toArray.push(fromArray[index]);
//   fromArray.splice(index, 1);
// }
//
// function createGroups(){
//   while (studentArray !== 0) {
//     // if the current group isnt full
//
//       // cycle through the remaining students
//       for (var i = 0; i < groupSize; i++){
//         //select a random index number based on number of remaining students
//         var curRandom = Math.floor(Math.random() * studentArray.length);
//         //call function to move randomly selected student to current Group
//         moveElement(curRandom, studentArray, curGroup);
//       }
//       if (curGroup.length === groupSize)
//       allGroups.push(curGroup);
//       curGroup = [];
//     }
//
//
//   }
// // Logan's code
//
// // function sendRelevantData(){
// //   $('.determineGroupsButton').on('click', function(){
// //     //sets value of group size equal to user determined position of dropdown
// //     groupSize = $('.reasonableNumberOfGroupSizesDeterminedByAvoidingTheIsolationOfIndividualStudents').val();
// //     //sets name of current project equal to sequence of letters typed into project name box
// //     curProject = $('#curProject').val();
// //     console.log(groupSize);
// //     console.log(curProject);
// //     //calls function to randomly generate groups
// //     createGroups();
// //     extractAllGroups();
// //     //in theory appends new groups to the div
// //     appendNewGroupsToDiv();
// //   });
// // }
//
// // function extractAllGroups(){
// //   for (var l = 0; l < allGroups.length; l++){
// //     //sets thisGroup to represent the current group
// //     var thisGroup = allGroups[l];
// //     console.log(thisGroup);
// //   }
// // }
//
//
//
//
//
//   // function determineAndDisplayReasonableGroupSizesInsideOfOurSelectorDropdown(numberOfStudentsWishedByTheUserToBeConsideredForGrouping) {
//   //   for(var i = 0; i < numberOfStudentsWishedByTheUserToBeConsideredForGrouping.length/2; i++){
//   //     $('.reasonableNumberOfGroupSizesDeterminedByAvoidingTheIsolationOfIndividualStudents').append(
//   //       '<option value="' + (i+1) + '">' + (i+1) + '</option>');
//   //   }
//   // }
//   //
//   // function extractAllGroups(){
//   //   for (var l = 0; l < allGroups.length; l++){
//   //     //sets thisGroup to represent the current group
//   //     var thisGroup = allGroups[l];
//   //     console.log(thisGroup);
//   //   }
//   // }
//
//
//
// // end Logan
// var groupSize;
//
$(document).ready(function() {
  addEventListeners();
  //the two functions below are stub testers; delete before production merge
  // appendNewGroups(newGroupTester);
  // appendAllGroups(allGroupsTester);
});//end docready
//
// function createGroups(response){
//   //while we haven' run out of students
//   while (response.length !== 0) {
//       // cycle through the remaining students
//       for (var i = 0; i < groupSize; i++){
//         //select a random index number based on number of remaining students
//         var curRandom = Math.floor(Math.random() * response.length);
//         //call function to move randomly selected student to current Group
//         moveElement(curRandom, studentArray, curGroup);
//         //don't add students that dont exist
//         if (response.length === 0){
//           break;
//         }
//       }
//       //once the current group size is filled, push it to the current group of groups of groups of groups
//         allGroups.push(curGroup);
//         //reset the current group so we can add more groups
//         curGroup = [];
//       }
//   }
//
//   function appendNewGroupsToDiv(){
//     //cycles through array of all groups
//     for (var j = 0; j < allGroups.length; j++){
//       //sets thisGroup to represent the current group
//       var thisGroup = allGroups[j];
//       //cycles through the current group
//       for (var k = 0; k < thisGroup.length; k++){
//         //sets thisPerson equal to the person represented by the index[k] of the current group
//         var thisPerson = thisGroup[k];
//         //nothing sticks in client side logic
//         // console.log($('.currentGroup').append('<p>' + thisPerson + '</p>'));
//         $('.currentGroupDiv').append('<div><p>' + thisPerson + '</div></p>');
//       }
//     }
//   }

function addEventListeners() {
  $('#getNewGroupListButton').on('click', function() {
    groupSize = $("groupSizeTextField").val();
    appendNewGroups(newGroupTester);
  });

  $('#showPastGroupsButton').on('click',function() {
    appendAllGroups(allGroupsTester);
  });
}//end addEventListeners
//
// function generateGroups() {
//   $.ajax({
//     type: 'GET',
//     url: '/names/getAllNames',
//     success: function(response) {
//       console.log("generateGroups returned successfully, with   ", response);
//       createGroups(response);
//       appendNewGroupsToDiv();
//       $.ajax({
//         type: 'POST',
//         url: '/names/saveNewGroup',
//         data: {
//           curGroup: allGroups,
//           name: curProject
//         },
//         success: function() {
//           console.log("newGroup savedb successfully");
//         }
//       });//end POST ajax
//     }
//   });//end GET ajax
// }
//
// function showPastGroups() {
//   $.ajax({
//     type: 'GET',
//     url: '/names/allGroups',
//     success: function(response) {
//       console.log("showPastGroups returned successfully");
//       appendAllGroups(response);
//     }
//   });
// }

function appendNewGroups(response) {
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    $('#currentGroupDiv').append("<div class='col-md-1 centered currentGroup' id='" + (i+1) + "'><h3>Group "+ (i+1) + " is: </h3><p class='currentResponse'>" + response[i] + "</p></div>");
    // var $id = $("#" + i+1);
    // $id.append("<p class='currentResponse'>", response[i], "</p>");
    // <div class="col-md-1 centered" id="currentGroup">Current (test)</div>
  }
}

function appendAllGroups(response) {
  console.log(response);
  for (var j = 0; j < response.length; j++) {
    $('#previousGroupDiv').append('<div class="col-md-1 centered prevGroup" id="a'+j+'"><h3>Project Number '+ (j+1)+' created these groups: </h3></div><br>');
    // $('#currentGroupDiv').append("<div class='col-md-1 centered currentGroup' id='" + (i+1) + "'>Group "+ (i+1) + " is: <p class='currentResponse'>" + response[i] + "</p></div>");
    // <div class="col-md-1 centered" id="prevGroup">
    console.log(response.length);
    for (var k = 0; k < response[j].length; k++) {
      var $prev = $("#a" + j);
      console.log(response[j].length);
      $prev.append("<br><p><strong>Group "+ (k+1) + " was: <strong>", response[j][k], "</p><br>");
    }//end forloop k
    $('#previousGroupDiv').append('<br>');
  }//end forloop j
}//end appendAllGroups


//stub testers for appendNewGroups & appendAllGroups
var newGroupTester = ["carrots, peas, fish", "dogs, cats, hamsters", "ford, chevy, dodge", "scotch, scotch, scotch"];
var allGroupsTester = [
  ["alpha, beta, gamma", "delta, upsilon, derpsilon", "iota, kappa, jabba", "lolcats, sisyphus, bacchus"],
  ["akko, bakko, cakko", "dakko, fakko, gakko", "hakko, jakko, kakko", "lakko, makko, nakko"],
  ["xia, shang, zhou", "qin, han, sui", "tang, song, yuan", "ming, qing, republic"],
];
