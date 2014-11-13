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
      greeting: data
    }));
  },

  projects: function(){
    trace('hello world');
    var template = Handlebars.compile($("#projectsTemplate"));
    $(".view").html(template({
      
    }));
  },

  resume: function(){
    var template = Handlebars.compile($("#resumeTemplate").html());
    $(".view").html(template({
      
    }));
  }

});
var data;
var router = new Router();
Backbone.history.start();
$(document).ready(function(){
  $.getJSON('data/resume.json', function(json, textStatus) {
    data = $.parseJSON(json);
    trace(data);
  });
});