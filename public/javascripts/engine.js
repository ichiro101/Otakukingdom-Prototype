/* DO NOT MODIFY. This file was compiled Wed, 17 Aug 2011 09:56:11 GMT from
 * /home/ichiro/web-dev/otakukingdom-prototype/app/coffeescripts/engine.coffee
 */

(function() {
  var OGame;
  OGame = (function() {
    var currentEvent, updateText;
    function OGame(width, height) {
      this.width = width;
      this.height = height;
    }
    updateText = false;
    currentEvent = 0;
    OGame.prototype.sketch = function(ps) {
      var script, settings;
      settings = new Setting(800, 600);
      script = new Script();
      ps.setup = function() {
        script.init();
        return ps.size(settings.width, settings.height);
      };
      ps.draw = function() {
        ps.background(51);
        if (updateText === true) {
          currentEvent = script._next();
          updateText = false;
          ps.println("Current event code: " + currentEvent.value);
          ps.println("test event code: " + currentEvent.status);
        }
        if (currentEvent.status === OStatus.TEXT_EVENT) {
          return ps.text(currentEvent.value, 40, 400);
        } else if (currentEvent.status === OStatus.ENDED) {
          return ps.text("End of Game", 20, 400);
        }
      };
      return ps.mouseClicked = function() {
        return updateText = true;
      };
    };
    OGame.prototype.run = function() {
      var canvas, p;
      this.defineScriptFunctions;
      canvas = document.getElementById('game');
      return p = new Processing(canvas, this.sketch);
    };
    return OGame;
  })();
  $(document).ready(function() {
    var gameInstance;
    gameInstance = new OGame;
    return gameInstance.run();
  });
}).call(this);
