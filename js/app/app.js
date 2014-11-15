function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}};

var App = {
  windowSize: '',
  windowWidth: 0,
  actualSize: 0,
  firstRun: false,
  isIE: false
};

App.activateNavigation = function(e){
  $("nav#main-nav-drop").toggleClass("active");
};

App.checkBrowserSize = function(){
  if(App.isIE){
    App.windowWidth = $('body').width() + 33;
  } else {
    App.windowWidth = window.outerWidth;
  }

  var contentWidth = $('body').width();
  var sizeDiff = App.windowWidth - contentWidth;
  App.actualSize = App.windowWidth - sizeDiff;
  
};

App.responsiveImage = function(size){

}

$(document).ready(function(){
  $("a#menu-button").on("click",function(event){
    App.activateNavigation(event);
    $(this).toggleClass("active");
  });

  if (!Modernizr.touch){
    trace("not touch enabled");
  }

  App.checkBrowserSize();
  setInterval('App.checkBrowserSize()',100);

});