define(['underscore', 'jquery'],
function(_, $) {
  return function templateHelper(selector) {
    var tpl = $(selector).html().trim();
    var raw = _(tpl).unescape();
    return _(raw).template();
  };
});
