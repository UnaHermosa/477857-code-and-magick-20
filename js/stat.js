'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var IDENTATION_INDEX = 2;
  var CLOUD_COLOR = '#fff';
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var TEXT_FONT = 'PT Mono';
  var CLOUD_FONT_SIZE = 16;
  var TEXT_COLOR = '#000';
  var TEXT_BASELINE = 'hanging';
  var YOUR_BAR_COLOR = 'rgba(255, 0, 0, 1)';
  var BAR_MAX_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var CLOUD_GREETINGS = ['Ура вы победили!', 'Список результатов:'];
  var USER_NAME = 'Вы';

  var renderText = function (ctx, text, positionX, positionY) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = CLOUD_FONT_SIZE + 'px ' + TEXT_FONT;
    ctx.textBaseline = TEXT_BASELINE;
    ctx.fillText(text, positionX, positionY);
  };

  var renderCloud = function (ctx, positionX, positionY) {
    ctx.fillStyle = SHADOW_COLOR;
    ctx.fillRect(positionX + GAP, positionY + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = CLOUD_COLOR;
    ctx.fillRect(positionX, positionY, CLOUD_WIDTH, CLOUD_HEIGHT);
    for (var i = 0; i < CLOUD_GREETINGS.length; i++) {
      renderText(ctx, CLOUD_GREETINGS[i], CLOUD_X + GAP * IDENTATION_INDEX, CLOUD_Y + GAP * IDENTATION_INDEX + CLOUD_FONT_SIZE * i);
    }
  };

  var getRandom = function (number) {
    return Math.random() * number;
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
      var otherBarsColor = 'hsl(240, ' + getRandom(100) + '%, 50%)';
      var colorBar = playersNames[i] === USER_NAME ? YOUR_BAR_COLOR : otherBarsColor;
      renderText(ctx, Math.round(getRandom(playersTimes[i])), barX, barY + BAR_MAX_HEIGHT - barHeight - GAP * IDENTATION_INDEX);
      ctx.fillStyle = colorBar;
      ctx.fillRect(barX, barY + BAR_MAX_HEIGHT - barHeight, BAR_WIDTH, barHeight);
      renderText(ctx, playersNames[i], barX, barY + BAR_MAX_HEIGHT + GAP);
    }
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X, CLOUD_Y);
    renderHistogram(ctx, players, times);
  };

}());
