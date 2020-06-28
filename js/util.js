'use strict';
(function () {
  var KeyCode = {
    ENTER: 13,
    ESCAPE: 27
  };

  window.util = {
    ENTER: KeyCode.ENTER,
    ESCAPE: KeyCode.ESCAPE,
    isEscapeEvent: function (evt, action) {
      evt.preventDefault();
      if (evt.keyCode === KeyCode.ESCAPE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === KeyCode.ENTER) {
        action();
      }
    }
  };
})();
