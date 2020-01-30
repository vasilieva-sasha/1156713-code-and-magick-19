'use strict';

(function () {

  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var characters = [];
  var charactersAmount = 4;

  var getRandomValue = function (array) {
    return Math.floor(Math.random() * array.length);
  };

  var getRandomCharacter = function () {
    var randomCharacter = {
      name: NAMES[getRandomValue(NAMES)] + ' ' + SURNAMES[getRandomValue(SURNAMES)],
      coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
      eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
    };
    return randomCharacter;
  };

  var createArray = function () {
    for (var i = 0; i < charactersAmount; i++) {
      var character = getRandomCharacter();
      characters.push(character);
    }
  };

  createArray();

  document.querySelector('.setup').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (character) {
    var wizard = similarWizardTemplate.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = character.name;
    wizard.querySelector('.wizard-coat').style.fill = character.coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = character.eyesColor;
    return wizard;
  };

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < characters.length; i++) {
    fragment.appendChild(renderWizard(characters[i]));
  }

  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');

})();
