function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}};

var App = {
  windowSize: '',
  windowWidth: 0,
  actualSize: 0,
  firstRun: false,
  isIE: false,
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

  if(App.actualSize > 1024){ newWindowSize = 'large'; }
  if(App.actualSize <= 1024 && App.actualSize >= 768){ newWindowSize = 'medium'; }
  if(App.actualSize < 768){ newWindowSize = 'small'}

  if(App.windowSize != newWindowSize){
    App.windowSize = newWindowSize;
  }
  App.responsiveImage();
};

App.responsiveImage = function(){
  var $thumbs = $('img.project-thumb');
  var newSource = 'images/projects/'
  if(App.windowSize == 'large'){
    $thumbs.each(function(index,thumb){
      var source = $(this).attr("src");
      source.replace(/(small)/, 'medium');
      $(thumb).attr("src",source);
    });
  }
  if(App.windowSize == 'medium'){
  }
  if(App.windowSize == 'small'){
  }
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