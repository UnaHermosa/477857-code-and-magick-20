'use strict';
(function () {
  var fireballsColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var inputCoatColor = document.querySelector('input[name = coat-color]');
  var inputEyesColor = document.querySelector('input[name = eyes-color]');
  var inputFireBallColor = document.querySelector('input[name = fireball-color]');
  var getRandomValueFromArray = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.createWizard = {
    onWizardCoatClick: function (evt) {
      var value = getRandomValueFromArray(coatColors);
      evt.target.style.fill = value;
      inputCoatColor.value = value;
    },
    onwizardEyesClick: function (evt) {
      var value = getRandomValueFromArray(eyesColors);
      evt.target.style.fill = value;
      inputEyesColor.value = value;
    },
    onSetupFireballClick: function (evt) {
      var value = getRandomValueFromArray(fireballsColors);
      evt.target.style.backgroundColor = value;
      inputFireBallColor.value = value;
    }
  };
}());
