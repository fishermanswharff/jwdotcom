function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}};
var data;
$(document).ready(function(){
  $.getJSON('data/resume.json', function(json, textStatus) {
    data = json;
    router.navigate('home',{trigger:true});
    trace(data);
  });
});