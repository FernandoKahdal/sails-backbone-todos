define(['underscore','backbone', 'Todo/Todo', 'helpers/template'],
function NewTodoView(_, Backbone, Todo, templateHelper) {
  return Backbone.View.extend({
    tagName: 'span',
    template: templateHelper('#new-todo-template'),
    events: {
      'click': 'createBlankTodo'
    },
    initialize: function initialize() {
    },
    render: function render() {
      var html = this.template();
      this.$el.html(html);
      return this;
    },
    createBlankTodo: function createBlankTodo(e) {
      this.collection.create({});
      e.preventDefault();
    }
  });
});
