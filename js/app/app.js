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

var router = new Router();
Backbone.history.start();
$(document).ready(function(){
  $.$.getJSON('data/resume.json', {param1: 'value1'}, function(json, textStatus) {
      /*optional stuff to do after success */
  });
});