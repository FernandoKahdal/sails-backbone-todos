define(['underscore','backbone', 'Todo/Todo'],
function(_, Backbone, Todo) {
  return function templateHelper(selector) {
    var tpl = $(selector).html().trim();
    return _(tpl).template();
  };
});
