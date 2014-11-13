var data;
$(document).ready(function(){
  $.getJSON('data/resume.json', function(json, textStatus) {
    data = json;
    trace(data);
  });
});