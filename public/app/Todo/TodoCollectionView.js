define(['backbone', 'Todo/TodoItemView'],
function CollectionView(Backbone, TodoItemView) {

  return Backbone.View.extend({
    tagName: 'ul',
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      this.$el.html('');
      this.model.each(function(item) {
        var itemView = new TodoItemView({model: item});
        this.$el.append(itemView.render().el);
      }, this);
      return this;
    }
  });

});
