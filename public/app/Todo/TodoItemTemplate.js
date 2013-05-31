define(['jquery', 'underscore'],
function($,_) {
  var $el = $('#todo-template');
  var html = $el.html().trim();
  return _(html).template();
});
