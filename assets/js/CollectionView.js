define(['backbone'],
function CollectionView(Backbone) {
  return Backbone.View.extend({
    initialize: function initialize() {
      this.itemView = this.itemView || new Backone.View.extend({});
      this.listenTo(this.collection, 'add', this.addNewItem);
    },
    render: function() {
      this.collection.each(this.addNewItem, this);
      return this;
    },
    newItemViewFor: function newItemViewFor(model) {
      return new this.itemView({model: model});
    },
    addNewItem: function addNewItem(model) {
      var view = this.newItemViewFor(model);
      this.$el.append(view.render().el);
    }
  });

});
