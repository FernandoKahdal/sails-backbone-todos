define(['underscore','backbone', 'Todo/TodoCollectionView', 'Todo/NewTodoView', 'helpers/template'],
function(_, Backbone, TodoCollectionView, NewTodoView, templateHelper) {
  return Backbone.View.extend({
    template: templateHelper('#app-template'),
    initialize: function initialize() {
      var todos = this.model.get('todos');
      this.todosView = new TodoCollectionView({ collection: todos });
      this.newTodoView = new NewTodoView({ collection: todos })
    },
    render: function render() {
      this.$el.html(this.template(this.model.toJSON()));
      var $todos = this.$('.todos-container');
      $todos.append(this.todosView.el);
      $todos.append(this.newTodoView.render().el);
      return this;
    }
  });

});
