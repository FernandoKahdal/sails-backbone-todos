define(['backbone'],
function Todo(Backbone) {

  return Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    }
  });

});
