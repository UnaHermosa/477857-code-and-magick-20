'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_FONT_SIZE = 16;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var CLOUD_GREETING = ['Ура вы победили!', 'Список результатов:'];


var renderText = function (ctx, text, positionX, positionY) {
  ctx.fillStyle = '#000';
  ctx.font = CLOUD_FONT_SIZE + 'px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, positionX, positionY);
};

var renderCloud = function (ctx, positionX, positionY) {
  ctx.fillStyle = SHADOW_COLOR;
  ctx.textBaseline = 'hanging';
  ctx.fillRect(positionX + GAP, positionY + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(positionX, positionY, CLOUD_WIDTH, CLOUD_HEIGHT);
  for (var i = 0; i < CLOUD_GREETING.length; i++) {
    renderText(ctx, CLOUD_GREETING[i], CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + CLOUD_FONT_SIZE * i);
  }
};

var getRandom = function (number) {
  return Math.round(Math.random() * number);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderHistogram = function (ctx, playersNames, playersTimes) {
  var maxTime = getMaxElement(playersTimes);
  for (var i = 0; i < playersNames.length; i++) {
    var barX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var barY = CLOUD_HEIGHT - BAR_MAX_HEIGHT - GAP - CLOUD_FONT_SIZE;
    var barHeight = (BAR_MAX_HEIGHT * playersTimes[i]) / maxTime;
    var colorBar = playersNames[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + getRandom(100) + '%, 50%)';
    renderText(ctx, getRandom(playersTimes[i]), barX, barY + BAR_MAX_HEIGHT - barHeight - GAP * 2);
    ctx.fillStyle = colorBar;
    ctx.fillRect(barX, barY + BAR_MAX_HEIGHT - barHeight, BAR_WIDTH, barHeight);
    renderText(ctx, playersNames[i], barX, barY + BAR_MAX_HEIGHT + GAP);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y);
  renderHistogram(ctx, players, times);
};
