function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}};

var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'projects':'projects',
    'resume':'resume'
  },

  home: function(){
    var template = Handlebars.compile($("#homeTemplate"));
    $(".view").html(template({
      data: data
    }));
  },

  projects: function(){
    trace('hello world');
    var template = Handlebars.compile($("#projectsTemplate"));
    $(".view").html(template({
      data: data
    }));
  },

  resume: function(){
    var template = Handlebars.compile($("#resumeTemplate").html());
    $(".view").html(template({
      data: data
    }));
  }

});
var data;
var router = new Router();
Backbone.history.start();
$(document).ready(function(){
  $.getJSON('data/resume.json', function(json, textStatus) {
    data = json;  
    trace(json, textStatus);
  });
});