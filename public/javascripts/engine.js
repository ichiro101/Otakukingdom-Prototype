/* DO NOT MODIFY. This file was compiled Wed, 17 Aug 2011 02:05:07 GMT from
 * /home/ichiro/web-dev/otakukingdom-prototype/app/coffeescripts/engine.coffee
 */

(function() {
  var OGame, OGameHelper;
  OGameHelper = (function() {
    function OGameHelper() {}
    return OGameHelper;
  })();
  OGame = (function() {
    function OGame(width, height) {
      this.width = width;
      this.height = height;
    }
    OGame.prototype.sketch = function(ps) {
      var currentScript, currentText, ended, narrative, script, settings, started, update;
      settings = new Setting(800, 600);
      currentText = 0;
      started = false;
      ended = false;
      currentScript = [];
      narrative = function(text) {
        return currentScript.push(text);
      };
      script = new Script(narrative);
      script.init();
      ps.setup = function() {
        ps.noLoop();
        return ps.size(settings.width, settings.height);
      };
      ps.draw = function() {
        ps.background(51);
        if (started === false) {
          ps.text("Click to Start", 40, 20);
        } else if (ended === true) {
          ps.text("End of Game", 40, 20);
        } else {
          return ps.text(currentScript[currentText], 40, 400);
        }
      };
      ps.mouseClicked = function() {
        return update();
      };
      return update = function() {
        if (started === false) {
          started = true;
        }
        if (currentText === currentScript.length) {
          ended = true;
        }
        ps.redraw();
        return currentText++;
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
