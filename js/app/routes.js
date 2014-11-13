var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'projects':'projects',
    'resume':'resume'
  },

  home: function(){
    var template = Handlebars.compile($("#homeTemplate").html());
    $(".view").html(template({
      data: data
    }));
  },

  projects: function(){
    trace('hello world');
    var template = Handlebars.compile($("#projectsTemplate").html());
    $(".view").html(template({
      
    }));
  },

  resume: function(){
    var template = Handlebars.compile($("#resumeTemplate").html());
    $(".view").html(template({
      
    }));
  }

});

var router = new Router();
Backbone.history.start();
