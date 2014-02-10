var binge = (function(window, document, parent) {
  parent.parser = {};

  parent.parser.parseTranscript = function() {
    parent.$transcript.find('a').on('click', function(e) {
      e.preventDefault();
      
      var $this = $(this);
      var href = $this.attr('href');
      var $annotation = $('<section class="binge-annotation"></section>');

      if(href.indexOf('#') == 0) {
        //load from supplemental
        $annotation.append($(href).children());
      } else if(href.indexOf('youtube') > 0) {
        //yt
        $annotation.append('<iframe id="player" type="text/html" width="500px" height="270px" src="' + href + '"frameborder="0"></iframe>');
      } else {
        //support mobile wikipedia for easier viewing
        href = href.replace('wikipedia', 'm.wikipedia');

        //load page in iframe for now
        $annotation.append('<iframe width="500px" height="270px" src="' + href + '"frameborder="0"></iframe>');
      }

      $annotation.css('position', 'absolute').css('top', $this.offset().top - parent.$annotations.position().top);
      parent.$annotations.append($annotation);
    });
  };

  return parent;
}(window, window.document, binge || {}));