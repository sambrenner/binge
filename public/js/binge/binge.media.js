var binge = (function(window, document, parent) {
  var _$audio, _audioUri, _popcorn, _$activeSection;

  parent.media = {};

  parent.media.initAudio = function() {
    _audioUri = parent.$container.data('audio-uri');
    _$audio = $('<audio id="binge_audio"></audio>').append('<source src="' + _audioUri + '" />');
    parent.$container.append(_$audio);
  };

  parent.media.initPopcorn = function() {
    _popcorn = Popcorn("#binge_audio");

    parent.$container.find('.binge-transcript').each(function() {
      var $this = $(this);

      _popcorn.code({
        start: $this.data('timecode'),
        onStart: function(opts) {
          if(_$activeSection) _$activeSection.removeClass('active');
          $this.addClass('active');
          $.scrollTo($this.offset().top - 40, 200);
          _$activeSection = $this;
        }
      });
    });

    parent.media.inited = true;
  };

  parent.media.play = function() {
    _popcorn.play();
  }

  parent.media.pause = function() {
    _popcorn.pause();
  }

  return parent;
}(window, window.document, binge || {}));