'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var COORD_X = 100;
var COORD_Y = 10;
var GAP = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var BAR_GAP = 50;
var BAR_WIDTH = 40;


function drawCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, COORD_X + GAP, COORD_Y + GAP, SHADOW_COLOR);
  drawCloud(ctx, COORD_X, COORD_Y, CLOUD_COLOR);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', COORD_X + BAR_WIDTH, COORD_Y + BAR_WIDTH);
  ctx.fillText('Список результатов:', COORD_X + BAR_WIDTH, COORD_Y + (BAR_WIDTH * 2));

  var maxTime = times[1];
  var barsLength = [];

  for (var i = 0; i <= times.length - 1; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }

    for (var j = 0; j <= names.length - 1; j++) {
      barsLength[j] = (times[j] / maxTime) * (CLOUD_HEIGHT * 0.55);

      if (names[j] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = barColor;
      }
      var barColor = 'rgb' + '(0,0,' + Math.random() * 100 * j + ')';
      ctx.fillRect(COORD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * j, 100, BAR_WIDTH, barsLength[j]);
    }
  }
};

// names[], times[]
// barLength = times[i]
// найти перебором самое длинное время и задать высоту полоски CLOUD_HEIGHT * 0.6
// время разделить на худшее время и умножить на высоту полоски худшего времени
// console.log(names);
// console.log(times);
// console.log(barsLength);

