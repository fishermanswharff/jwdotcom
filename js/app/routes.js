var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'projects':'projects',
    'resume':'resume'
  },

  home: function(){
    $("nav#main-nav-drop").removeClass("active");
    $("a.menu-icon").removeClass("active");
    $.getJSON('data/greeting.json', function(json, textStatus) {
      var template = Handlebars.templates.home;
      $(".view").html(template({
        data: json
      }));
    });
  },

  projects: function(){
    $("nav#main-nav-drop").removeClass("active");
    $("a.menu-icon").removeClass("active");
    $.getJSON('data/projects.json', function(json, textStatus) {
      var template = Handlebars.templates.projects;
      $(".view").html(template({
        data: json
      }));
      debugger;
    });
  },

  resume: function(){
    $("nav#main-nav-drop").removeClass("active");
    $("a.menu-icon").removeClass("active");
    $.getJSON('data/resume.json', function(json, textStatus) {
      var template = Handlebars.templates.resume;
      $(".view").html(template({
        data: json
      }));
    });
  }

});

var router = new Router();
Backbone.history.start();
