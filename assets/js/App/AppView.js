define(['backbone', 'Todo/TodoCollectionView', 'App/AppLayoutTemplate'],
function(Backbone, TodoCollectionView, template) {
  return Backbone.View.extend({
    template: template,
    events: {
    },
    initialize: function initialize() {
      this.todosView = new TodoCollectionView({ model: this.model.get('todos') });
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var html = this.template(this.model.toJSON());
      var todosEl = this.todosView.render().el;
      this.$el.html(html);
      this.$('.content').append(todosEl);
      return this;
    }
  });

});
