define(['underscore', 'backbone', 'Todo/TodoItemTemplate'],
function ItemView(_, Backbone, template) {

  return Backbone.View.extend({
    className: function() {
      return 'todo-' + this.model.id;
    },
    tagName: 'li',
    template: template,
    events: {
      'click [type="checkbox"]': 'toggleCompleted',
      'change [type="text"]': 'updateTitle'
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var tpl = this.model.toJSON();
      var tplData = _(tpl).extend({
        checked: tpl.completed ? 'checked' : ''
      });
      var html = this.template(tplData);
      this.$el.html(html);
      this.$title = $('[type="text"]')
      return this;
    },
    toggleCompleted: function toggleCompleted(e) {
      var value = this.model.get('completed');
      this.model.save({completed: !value});
    },
    updateTitle: function updateTitle(e) {
      this.model.save({title: e.target.value});
    }
  });

});
