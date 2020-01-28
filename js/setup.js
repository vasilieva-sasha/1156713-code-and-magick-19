'use strict';

(function () {

  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var characters = [
    {
      name: names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)],
      coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
      eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
    },
    {
      name: names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)],
      coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
      eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
    },
    {
      name: names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)],
      coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
      eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
    },
    {
      name: names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)],
      coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
      eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
    }
  ];

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
