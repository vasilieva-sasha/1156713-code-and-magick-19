'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var COORD_X = 100;
var COORD_Y = 10;
var GAP = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_COLOR = '#000';
var BAR_GAP = 30;
var BAR_WIDTH = 40;
var maxBar = 150;

function drawCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  var maxTime = times[0];

  drawCloud(ctx, COORD_X + GAP, COORD_Y + GAP, SHADOW_COLOR);
  drawCloud(ctx, COORD_X, COORD_Y, CLOUD_COLOR);
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', COORD_X + BAR_WIDTH, COORD_Y + BAR_WIDTH);
  ctx.fillText('Список результатов:', COORD_X + BAR_WIDTH, COORD_Y + (BAR_GAP * 2));

  for (var i = 0; i <= times.length - 1; i++) {
    var barsColor = 'hsla' + '(240,' + Math.floor(Math.random() * (100)) + '%,50%)';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = barsColor;
    }

    if (times[i] > maxTime) {
      maxTime = times[i];
    }

    var barsLength = times[i] / maxTime * maxBar;

    ctx.fillRect(COORD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, maxBar - barsLength + 100, BAR_WIDTH, barsLength);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], COORD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, maxBar + 120);
    ctx.fillText(Math.round(times[i]), COORD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, maxBar - barsLength + 90);
  }

  return undefined;
};
