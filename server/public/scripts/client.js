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
        success: function(response) {
          console.log("newGroup saved successfully");
        }
    }
  });
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
