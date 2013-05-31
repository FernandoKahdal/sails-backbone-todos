define(['underscore','backbone'],
function Todo(_,Backbone) {

  return Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    },
    url: function() {
      return _(this.id).isUndefined() ? '/todo' : '/todo/' + this.id;
    }
  });

});
