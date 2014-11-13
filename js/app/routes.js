var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'projects':'projects',
    'resume':'resume'
  },

  home: function(){
    $.getJSON('data/greeting.json', function(json, textStatus) {
      var template = Handlebars.compile($("#homeTemplate").html());
      $(".view").html(template({
        data: json
      }));
    });

  },

  projects: function(){
    $.getJSON('data/projects.json', function(json, textStatus) {
      var template = Handlebars.compile($("#projectsTemplate").html());
      $(".view").html(template({
        data: json
      }));
    });
  },

  resume: function(){
    $.getJSON('data/resume.json', function(json, textStatus) {
      var template = Handlebars.compile($("#resumeTemplate").html());
      $(".view").html(template({
        data: json
      }));
    });
  }

});

var router = new Router();
Backbone.history.start();
