'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var setupWindow = document.querySelector('.setup');
  var setupWindowOpen = document.querySelector('.setup-open');
  var setupWindowClose = setupWindow.querySelector('.setup-close');
  var wizardNameInput = setupWindow.querySelector('.setup-user-name');

  var onSetupEscPress = function (evt) {
    if (wizardNameInput === document.activeElement) {
      return evt;
    } else {
      if (evt.key === ESC_KEY) {
        closeSetup();
      }
    }
    return undefined;
  };

  var openSetup = function () {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
  };

  var closeSetup = function () {
    setupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
    setupWindow.removeAttribute('style');
  };

  setupWindowOpen.addEventListener('click', function () {
    openSetup();
  });

  setupWindowOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openSetup();
    }
  });

  setupWindowClose.addEventListener('click', function () {
    closeSetup();
  });

  setupWindowClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closeSetup();
    }
  });

  window.dialog = {
    window: setupWindow
  };
})();
