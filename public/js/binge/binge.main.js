var binge = (function(window, document, parent) {
  var _cacheSelectors = function() {
    parent.$container = $('#' + parent.container_id);
    parent.$header = parent.$container.find('header');
  }

  parent.init = function(container_id) {
    parent.container_id = container_id;

    _cacheSelectors();

    parent.media.initAudio();
    parent.controls.buildControls();
  };

  return parent;
}(window, window.document, binge || {}));