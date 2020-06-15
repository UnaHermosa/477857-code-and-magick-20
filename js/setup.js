'use strict';

var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var OBJECT_AMOUNT = 4;
var similarWizardList = document.querySelector('.setup-similar-list');
var fireballsColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupUserName = document.querySelector('.setup-user-name');
var setup = document.querySelector('.setup');
var setupSubmit = document.querySelector('.setup-submit');
var wizardCoat = document.querySelector('.wizard-coat');
var inputCoatColor = document.querySelector('input[name = coat-color]');
var wizardEyes = document.querySelector('.wizard-eyes');
var inputEyesColor = document.querySelector('input[name = eyes-color]');
var setupFireball = document.querySelector('.setup-fireball');
var inputFireBallColor = document.querySelector('input[name = fireball-color]');

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupUserName.addEventListener('focus', onInputFocus);
  setupUserName.addEventListener('blur', onInputBlur);
  setupClose.addEventListener('keydown', onSetupCloseEnterPress);
  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onwizardEyesClick);
  setupFireball.addEventListener('click', onSetupFireballClick);
  setupSubmit.addEventListener('keydown', onSetupSubmitPressEnter);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setupUserName.removeEventListener('focus', onInputFocus);
  setupUserName.removeEventListener('blur', onInputBlur);
  setupClose.removeEventListener('keydown', onSetupCloseEnterPress);
  wizardCoat.removeEventListener('click', onWizardCoatClick);
  wizardEyes.removeEventListener('click', onwizardEyesClick);
  setupFireball.removeEventListener('click', onSetupFireballClick);
  setupSubmit.removeEventListener('keydown', onSetupSubmitPressEnter);
}

function onPopupEscPress(evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    closePopup();
  }
}

function onSetupCloseEnterPress(evt) {
  evt.preventDefault();
  if (evt.keyCode === 13) {
    closePopup();
  }
}

function onSetupSubmitPressEnter(evt) {
  if (evt.keyCode === 13) {
    document.querySelector('.setup-wizard-form').submit();
  }
}

function onInputFocus() {
  document.removeEventListener('keydown', onPopupEscPress);
}

function onInputBlur() {
  document.addEventListener('keydown', onPopupEscPress);
}

function onWizardCoatClick(evt) {
  var value = getRandomValueFromArray(coatColors);
  evt.target.style.fill = value;
  inputCoatColor.value = value;
}

function onwizardEyesClick(evt) {
  var value = getRandomValueFromArray(eyesColors);
  evt.target.style.fill = value;
  inputEyesColor.value = value;
}

function onSetupFireballClick(evt) {
  var value = getRandomValueFromArray(fireballsColors);
  evt.target.style.backgroundColor = value;
  inputFireBallColor.value = value;
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

function getRandomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var getRandomElement = function (arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
};

var getRandomName = function (firstParam, secondParam) {
  var firstItem = getRandomElement(firstParam);
  var secondItem = getRandomElement(secondParam);
  var newName = Math.round(Math.random());
  return newName ? firstItem + ' ' + secondItem : secondItem + ' ' + firstItem;
};

var createWizards = function (quantity, names, surnames, coats, eyes) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    var wizard = {
      name: getRandomName(names, surnames),
      coatColor: getRandomElement(coats),
      eyesColor: getRandomElement(eyes)
    };
    wizards.push(wizard);
  }
  return wizards;
};

var wizardsData = createWizards(OBJECT_AMOUNT, wizardsNames, wizardsSurnames, coatColors, eyesColors);

var createWizardElement = function (data) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = data.name;
  wizardElement.querySelector('.wizard-coat').style.fill = data.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = data.eyesColor;
  return wizardElement;
};

var wizardsElements = wizardsData.map(createWizardElement);


var renderWizards = function (elements, place) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(elements[i]);
  }
  place.appendChild(fragment);
};

renderWizards(wizardsElements, similarWizardList);
document.querySelector('.setup-similar').classList.remove('hidden');
