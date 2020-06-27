'use strict';
(function () {
  var ENTER = 13;
  var ESCAPE = 27;

  window.util = {
    ENTER: ENTER,
    ESCAPE: ESCAPE,
    isEscapeEvent: function (evt, action) {
      evt.preventDefault();
      if (ESCAPE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (ENTER) {
        action();
      }
    }
  };
})();
