function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}};

var App = App || {};

App.activateNavigation = function(e){
  trace("clicking menu icon");
};

$(document).ready(function(){
  $("a#menu-icon").on("click",function(event){
    App.activateNavigation(event);
  });
});