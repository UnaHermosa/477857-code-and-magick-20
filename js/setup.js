'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var OBJECT_AMOUNT = 4;
var similarWizardList = document.querySelector('.setup-similar-list');

document.querySelector('.setup').classList.remove('hidden');

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

var wizardsData = createWizards(OBJECT_AMOUNT, WIZARDS_NAMES, WIZARDS_SURNAMES, COAT_COLORS, EYES_COLORS);

var createWizardsElements = function (data) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsTemplates = [];
  for (var i = 0; i < data.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = data[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = data[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = data[i].eyesColor;
    wizardsTemplates.push(wizardElement);
  }
  return wizardsTemplates;
};

var wizardElements = createWizardsElements(wizardsData);

var renderWizards = function (elements, place) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(elements[i]);
  }
  place.appendChild(fragment);
};

renderWizards(wizardElements, similarWizardList);
document.querySelector('.setup-similar').classList.remove('hidden');
