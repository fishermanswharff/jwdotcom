var Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'projects':'projects',
    'resume':'resume'
  },

  home: function(){
    var template = Handlebars.compile($("#homeTemplate"));
    $(".view").html(template({
      JSON.stringify(data): data
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

var router = new Router();
Backbone.history.start();
