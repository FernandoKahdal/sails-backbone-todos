define(['backbone', 'Todo/Todo'],
function NewTodoView(Backbone, Todo) {
  return Backbone.View.extend({
    tagName: 'button',
    className: 'icon-plus add-new',
    events: {
      'click': 'createBlankTodo'
    },
    initialize: function initialize() {
    },
    render: function render() {
      this.$el.html('Add New Todo');
      return this;
    },
    createBlankTodo: function createBlankTodo(e) {
      this.collection.create({});
      e.preventDefault();
    }
  });
});
