define(['backbone', 'Todo/TodoItemView'],
function CollectionView(Backbone, TodoItemView) {

  return Backbone.View.extend({
    className: 'todos',
    tagName: 'ul',
    initialize: function initialize() {
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
