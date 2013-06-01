requirejs.config({
  baseUrl: './assets/js',
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  },
  paths: {
    backbone: 'lib/backbone',
    underscore: 'lib/underscore',
    jquery: 'lib/jquery'
  }
});

requirejs(
  ['App/App', 'App/AppView','Todo/TodoCollection'],
  function main(App,AppView,TodoCollection) {
    var todos = new TodoCollection;
    var app = new App({title: 'Sails-Backbone Todos', todos: todos});
    var view = new AppView({model: app, el: '#app'});
    todos.fetch().then(function() {
      view.render();
    })
  }
);
