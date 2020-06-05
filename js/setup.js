'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var OBJECT_AMOUNT = 4;
var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

document.querySelector('.setup').classList.remove('hidden');

var getRandomElement = function (arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
};

var getRandomLocation = function (firstParam, secondParam) {
  var firstItem = getRandomElement(firstParam);
  var secondItem = getRandomElement(secondParam);
  var newName = Math.round(Math.random());
  return newName ? firstItem + ' ' + secondItem : secondItem + ' ' + firstItem;
};

var createWizard = function (names, surenames, coats, eyes) {
  var wizard = {};
  wizard.name = getRandomLocation(names, surenames);
  wizard.coatColor = getRandomElement(coats);
  wizard.eyesColor = getRandomElement(eyes);
  return wizard;
};

var getWizards = function (quantity, names, surenames, coats, eyes) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    wizards.push(createWizard(names, surenames, coats, eyes));
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function (quantity, names, surenames, coats, eyes) {
  for (var i = 0; i < quantity; i++) {
    fragment.appendChild(renderWizard(getWizards(quantity, names, surenames, coats, eyes)[i]));
    similarWizardList.appendChild(fragment);
  }
};

renderWizards(OBJECT_AMOUNT, WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR);
document.querySelector('.setup-similar').classList.remove('hidden');
