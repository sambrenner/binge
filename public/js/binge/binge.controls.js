var binge = (function(window, document, parent) {
  var _$controls;

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

  parent.controls = {};

  parent.controls.buildControls = function() {
    parent.controls.controlBtns = {};

    parent.controls.controlBtns.$playBtn = $('<a href="#">Play</a>').on('click', function(e) {
      _onPlayBtnClick(e);
    });

    parent.controls.controlBtns.$pauseBtn = $('<a href="#">Pause</a>').on('click', function(e) {
      _onPauseBtnClick(e);
    });

    parent.controls.controlBtns.$backBtn = $('<a href="#">Back</a>').on('click', function(e) {
      _onBackBtnClick(e);
    });

    parent.controls.controlBtns.$nextBtn = $('<a href="#">Next</a>').on('click', function(e) {
      _onNextBtnClick(e);
    });

    _$controls = $('<ul id="controls"></ul>');

    for (var control in parent.controls.controlBtns) {
      _$controls.append(parent.controls.controlBtns[control].wrap("<li></li>").parent());
    };

    parent.$header.append(_$controls);
    _$controls.sticky({topSpacing: 0, className: 'stuck'});
  };

  return parent;
}(window, window.document, binge || {}));