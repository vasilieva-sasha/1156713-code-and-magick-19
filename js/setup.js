'use strict';

(function () {

  // var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var CHARACTERS_AMOUNT = 4;

  // var characters = [];
  // var charactersAmount = 4;

  var setupWindow = window.dialog.window;
  var wizardPicture = document.querySelector('.setup-wizard');
  var wizardCoat = wizardPicture.querySelector('.wizard-coat');
  var wizardEyes = wizardPicture.querySelector('.wizard-eyes');
  var fireball = setupWindow.querySelector('.setup-fireball-wrap');
  var coatColorInput = setupWindow.querySelector('input[name=coat-color]');
  var eyesColorInput = setupWindow.querySelector('input[name=eyes-color]');
  var fireballColorInput = setupWindow.querySelector('input[name=fireball-color]');

  var getRandomValue = function (array) {
    return Math.floor(Math.random() * array.length);
  };

  wizardCoat.addEventListener('click', function () {
    var generatedCoatColor = COAT_COLORS[getRandomValue(COAT_COLORS)];
    wizardCoat.style.fill = generatedCoatColor;
    coatColorInput.value = generatedCoatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var generatedEyesColor = EYES_COLORS[getRandomValue(EYES_COLORS)];
    wizardEyes.style.fill = generatedEyesColor;
    eyesColorInput.value = generatedEyesColor;
  });

  fireball.addEventListener('click', function () {
    var generatedFireballColor = FIREBALL_COLORS[getRandomValue(FIREBALL_COLORS)];
    fireball.style.background = generatedFireballColor;
    fireballColorInput.value = generatedFireballColor;
  });


  // var getRandomCharacter = function () {
  //   var randomCharacter = {
  //     name: NAMES[getRandomValue(NAMES)] + ' ' + SURNAMES[getRandomValue(SURNAMES)],
  //     coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
  //     eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
  //   };
  //   return randomCharacter;
  // };

  // var createArray = function () {
  //   for (var i = 0; i < charactersAmount; i++) {
  //     var character = getRandomCharacter();
  //     characters.push(character);
  //   }
  // };

  // createArray();

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizard = function (character) {
    var wizard = similarWizardTemplate.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = character.name;
    wizard.querySelector('.wizard-coat').style.fill = character.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = character.colorEyes;

    return wizard;
  };

  var fragment = document.createDocumentFragment();

  var renderWizard = function (character) {
    fragment.appendChild(createWizard(character));
  };

  var onSuccess = function (wizards) {

    for (var i = 0; i < CHARACTERS_AMOUNT; i++) {
      renderWizard(wizards[i]);
    }
    similarListElement.appendChild(fragment);

    setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onSuccess, window.backend.errorShow);

})();
