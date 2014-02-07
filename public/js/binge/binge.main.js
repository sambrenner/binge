var binge = (function(window, document, parent) {
  parent.init = function(container_id) {
    parent.$container = $('#' + container_id);

    parent.parseStory();
  };

  return parent;
}(window, window.document, binge || {}));