var groupSize;

$(document).ready(function() {
  addEventListeners();
});//end docready

function addEventListeners() {
  $('#getNewGroupListButton').on('click', function() {
    groupSize = $("groupSizeTextField").val();
    generateGroups();
  });

  $('showPastGroupsButton').on('click',function() {
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
    $('#currentGroupDiv').append("<p>Group "+ i + " is: ", response[i], "</p>");
  }
}

function appendAllGroups(response) {
  console.log(response);
  //this assumes that the list of all groups is being passed as an array of arrays of strings,
  //and that the arrays-of-strings are ...tomorrow. Will do tomorrow.
  for (var i = 0; i < response.length; i++) {
    $('#previousGroupDiv').append('<div id="'+i+'"></div>');
    for (var j = 0; j < group.length; i++) {
      // array[j]
    }
  }

}
