define(['backbone', 'Todo/TodoItemView', 'Todo/NewTodoView', 'Todo/Todo'],
function CollectionView(Backbone, TodoItemView, NewTodoView, Todo) {
  function newItemView(item) {
    return new TodoItemView({model: item});
  }
  return Backbone.View.extend({
    className: 'todos',
    tagName: 'ul',
    initialize: function initialize() {
      this.listenTo(this.collection, 'add', this.render);
    },
    render: function() {
      this.$el.html('');
      var views = this.collection.map(newItemView);
      var lastView = _(views).last();
      _(views).each(function(view) {
        this.$el.append(view.render().el);
      }, this);
      if( lastView ) {
        lastView.$('.note').focus();
      }
      this.$el.append(new NewTodoView({collection: this.collection}).render().el);
      return this;
    }
  });

});
