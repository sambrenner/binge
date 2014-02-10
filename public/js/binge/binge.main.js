var binge = (function(window, document, parent) {
  var _cacheSelectors = function() {
    parent.$container = $('#binge_holder');
    parent.$annotations = $('#binge_annotations');
    parent.$transcript = $('#binge_transcript');
    parent.$header = parent.$container.find('header');
  }

  parent.init = function(container_id) {
    parent.container_id = container_id;

    _cacheSelectors();

    parent.media.initAudio();
    parent.controls.buildControls();
    parent.parser.parseTranscript();
  };

  return parent;
}(window, window.document, binge || {}));