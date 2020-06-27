'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupUserName = document.querySelector('.setup-user-name');
  var setupSubmit = document.querySelector('.setup-submit');

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball');

  function onPopupEscPress(evt) {
    evt.preventDefault();
    if (evt.keyCode === window.util.ESCAPE) {
      closePopup();
    }
  }

  function onSetupCloseEnterPress(evt) {
    evt.preventDefault();
    if (evt.keyCode === window.util.ENTER) {
      closePopup();
    }
  }

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupUserName.addEventListener('focus', onInputFocus);
    setupUserName.addEventListener('blur', onInputBlur);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);
    wizardCoat.addEventListener('click', window.createWizard.onWizardCoatClick);
    wizardEyes.addEventListener('click', window.createWizard.onwizardEyesClick);
    setupFireball.addEventListener('click', window.createWizard.onSetupFireballClick);
    setupSubmit.addEventListener('keydown', onSetupSubmitPressEnter);
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupUserName.removeEventListener('focus', onInputFocus);
    setupUserName.removeEventListener('blur', onInputBlur);
    setupClose.removeEventListener('keydown', onSetupCloseEnterPress);
    wizardCoat.removeEventListener('click', window.createWizard.onWizardCoatClick);
    wizardEyes.removeEventListener('click', window.createWizard.onwizardEyesClick);
    setupFireball.removeEventListener('click', window.createWizard.onSetupFireballClick);
    setupSubmit.removeEventListener('keydown', onSetupSubmitPressEnter);
  }

  function onSetupSubmitPressEnter(evt) {
    if (evt.keyCode === window.util.ENTER) {
      document.querySelector('.setup-wizard-form').submit();
    }
  }

  function onInputFocus() {
    document.removeEventListener('keydown', onPopupEscPress);
  }

  function onInputBlur() {
    document.addEventListener('keydown', onPopupEscPress);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEscapeEvent(evt, closePopup);
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });
}());
