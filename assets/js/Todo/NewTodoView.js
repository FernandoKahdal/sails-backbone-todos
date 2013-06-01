define(['underscore','backbone', 'Todo/Todo'],
function NewTodoView(_, Backbone, Todo) {
  var tpl = $('#new-todo-template').html().trim();
  var template = _(tpl).template();
  return Backbone.View.extend({
    tagName: 'span',
    template: template,
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
