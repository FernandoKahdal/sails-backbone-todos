define(['jquery', 'underscore'],
function($,_) {
  var $el = $('#todo-template');
  var html = $el.html().trim();
  var tpl = _(html).unescape();
  return _(tpl).template();
});
