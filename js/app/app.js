function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}};

var App = App || {};

App.activateNavigation = function(e){
  $("nav#main-nav-drop").toggleClass("active");
};

$(document).ready(function(){
  $("a#menu-button").on("click",function(event){
    App.activateNavigation(event);
    $(this).toggleClass("active");
  });
});