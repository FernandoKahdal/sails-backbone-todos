define(['backbone', 'Todo/TodoItemView', 'Todo/NewTodoView', 'Todo/Todo'],
function CollectionView(Backbone, TodoItemView, NewTodoView, Todo) {

  return Backbone.View.extend({
    className: 'todos',
    tagName: 'ul',
    initialize: function initialize() {
      this.listenTo(this.model, 'add', this.render);
    },
    render: function() {
      this.$el.html('');
      this.model.each(function(item) {
        var itemView = new TodoItemView({model: item});
        this.$el.append(itemView.render().el);
      }, this);
      this.$el.append(new NewTodoView({collection: this.model}).render().el);
      return this;
    }
  });

});
