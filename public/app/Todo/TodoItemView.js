define(['underscore', 'backbone', 'Todo/TodoItemTemplate'],
function ItemView(_, Backbone, template) {

  return Backbone.View.extend({
    className: 'todo',
    tagName: 'li',
    template: template,
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var html = this.template(this.model.toJSON());
      this.$el.html(html);
      return this;
    }
  });

});
