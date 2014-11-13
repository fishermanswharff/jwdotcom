function trace(){ for(var i = 0, count = arguments.length; i < count; i++){console.log(arguments[i]);}};

var Router = Backbone.Router.extend({

  routes: {
    '':'home',
    'projects':'projects',
    'resume':'resume'
  },

  home: function(){
    trace('hello world');
  },

  projects: function(){

  },

  resume: function(){

  }

});