var binge = (function(window, document, parent) {
  var _onPlayBtnClick = function(e) {
    e.preventDefault();
  };

  var _onPauseBtnClick = function(e) {
    e.preventDefault();
  };

  var _onBackBtnClick = function(e) {
    e.preventDefault();
  };

  var _onNextBtnClick = function(e) {
    e.preventDefault();
  };

  parent.buildControls = function() {
    parent.controls = {};

    parent.controls.$playBtn = $('<a href="#">Play</a>').on('click', function(e) {
      _onPlayBtnClick(e);
    });

    parent.controls.$pauseBtn = $('<a href="#">Pause</a>').on('click', function(e) {
      _onPauseBtnClick(e);
    });

    parent.controls.$backBtn = $('<a href="#">Back</a>').on('click', function(e) {
      _onBackBtnClick(e);
    });

    parent.controls.$nextBtn = $('<a href="#">Next</a>').on('click', function(e) {
      _onNextBtnClick(e);
    });

    parent.$controls = $('<ul id="controls"></ul>');

    for (var control in parent.controls) {
      parent.$controls.append(parent.controls[control].wrap("<li></li>").parent());
    };

    parent.$header.append(parent.$controls);
    parent.$controls.sticky({topSpacing: 0, className: 'stuck'});
  };

  return parent;
}(window, window.document, binge || {}));