'use strict';

(function () {

  var CLOUD_HEIGHT = 270;
  var CLOUD_WIDTH = 420;
  var COORD_X = 100;
  var COORD_Y = 10;
  var GAP = 10;
  var CLOUD_COLOR = '#fff';
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var TEXT_COLOR = '#000';
  var BAR_GAP = 50;
  var BAR_WIDTH = 40;
  var MAX_BAR = 150;

  var barsLength = [];

  function drawCloud(ctx) {
    ctx.fillStyle = SHADOW_COLOR;
    ctx.fillRect(COORD_X + GAP, COORD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = CLOUD_COLOR;
    ctx.fillRect(COORD_X, COORD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  function writeText(ctx) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = ' bold 16px PT Mono';
    ctx.fillText('Ура вы победили!', COORD_X + BAR_WIDTH, COORD_Y + GAP * 3);
    ctx.fillText('Список результатов:', COORD_X + BAR_WIDTH, COORD_Y + BAR_GAP);
  }

  function renderCloud(ctx, x, y) {
    drawCloud(ctx, x, y);
    writeText(ctx);
  }

  function findMaxTime(times) {
    var maxTime = times[0];
    for (var i = 0; i <= times.length - 1; i++) {

      if (times[i] > maxTime) {
        maxTime = times[i];
      }
    }
    return maxTime;
  }

  function generateColor(max) {
    var digit = Math.random() * max;
    return Math.floor(digit);
  }

  function drawBars(ctx, names, times) {
    var maxTime = findMaxTime(times);

    for (var j = 0; j <= names.length - 1; j++) {

      var color = names[j] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsla(240,' + generateColor(100) + '%,50%)';

      barsLength = times[j] / maxTime * MAX_BAR;
      ctx.fillStyle = color;
      ctx.fillRect(COORD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * j, MAX_BAR - barsLength + 100, BAR_WIDTH, barsLength);
      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(names[j], COORD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * j, MAX_BAR + 120);
      ctx.fillText(Math.round(times[j]), COORD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * j, MAX_BAR - barsLength + 90);
    }
  }

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx);
    drawBars(ctx, names, times);
  };
})();
