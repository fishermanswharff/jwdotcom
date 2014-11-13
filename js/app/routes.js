var Router = Backbone.Router.extend({
  routes: {
    '':'resume',
    'projects':'projects',
    'resume':'resume'
  },

  home: function(){
    $.getJSON('data/resume.json', function(json, textStatus) {
      var template = Handlebars.compile($("#homeTemplate").html());
      $(".view").html(template({
        data: json
      }));
    });

  },

  projects: function(){
    $.getJSON('data/resume.json', function(json, textStatus) {
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
        data.skills: json
      }));
    });
  }

});

var router = new Router();
Backbone.history.start();
