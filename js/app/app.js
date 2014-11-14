function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}};

var App = App || {};

App.activateNavigation = function(e){
  $("nav").toggleClass("active");
};

$(document).ready(function(){
  $("nav#main-nav").on("click","a#menu-icon",function(event){
    App.activateNavigation(event);
    $(this).toggleClass("active");
  });
});