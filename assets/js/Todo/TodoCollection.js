define(['backbone', 'Todo/Todo'],
function TodoCollection(Backbone, Todo) {

  return Backbone.Collection.extend({
    model: Todo,
    url: '/todo'
  });

});
