define(['underscore', 'backbone', 'Todo/TodoItemTemplate'],
function ItemView(_, Backbone, template) {

  function decorator(model) {
    var data = model.toJSON();
    return _({
      checked: data.completed ? 'checked' : '',
      lineThrough: data.completed ? 'line-through' : ''
    }).extend(data);
  }

  return Backbone.View.extend({
    className: 'todo',
    tagName: 'li',
    template: template,
    events: {
      'click [type="checkbox"]': 'toggleCompleted',
      'change [type="text"]': 'updateTitle'
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.model.on('change:completed', this.updateStrikeThrough, this);
    },
    render: function render() {
      var data = decorator(this.model);
      var html = this.template(data);
      this.$el.html(html);
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
