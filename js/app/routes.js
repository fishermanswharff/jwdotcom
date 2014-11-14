var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'projects':'projects',
    'resume':'resume'
  },

  home: function(){
    $("nav").removeClass("active");
    $.getJSON('data/greeting.json', function(json, textStatus) {
      var template = Handlebars.templates.home;
      // var template = Handlebars.compile($("#homeTemplate").html());
      $(".view").html(template({
        data: json
      }));
    });
  },

  projects: function(){
    $("nav").removeClass("active");
    $.getJSON('data/projects.json', function(json, textStatus) {
      var template = Handlebars.templates.projects;
      $(".view").html(template({
        data: json
      }));
    });
  },

  resume: function(){
    $("nav").removeClass("active");
    $.getJSON('data/resume.json', function(json, textStatus) {
      var template = Handlebars.templates.resume;
      // var template = Handlebars.compile($("#resumeTemplate").html());
      $(".view").html(template({
        data: json
      }));
    });
  }

});

var router = new Router();
Backbone.history.start();
