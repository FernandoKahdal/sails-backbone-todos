define(['jquery', 'underscore'],
function($,_) {
  var html = $('#app-template').html().trim();
  var tpl = _(html).unescape();
  return _(tpl).template();
});
