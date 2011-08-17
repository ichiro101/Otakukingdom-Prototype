/* DO NOT MODIFY. This file was compiled Wed, 17 Aug 2011 12:16:58 GMT from
 * /home/ichiro/web-dev/otakukingdom-prototype/app/coffeescripts/engine.coffee
 */

(function() {
  var OGame, OMenuItem;
  OGame = (function() {
    var currentEvent, currentMenuItems, gameStarted, menuClicked, updateText;
    function OGame(width, height) {
      this.width = width;
      this.height = height;
    }
    updateText = false;
    gameStarted = false;
    menuClicked = false;
    currentMenuItems = [];
    currentEvent = -1;
    OGame.prototype.sketch = function(ps) {
      var gameDraw, menuEventDraw, script, startScreenDraw;
      script = new Script();
      ps.setup = function() {
        script.init();
        return ps.size(Setting.GAME_WIDTH, Setting.GAME_HEIGHT);
      };
      ps.draw = function() {
        ps.background(51);
        if (gameStarted === true) {
          return gameDraw();
        } else {
          return startScreenDraw();
        }
      };
      ps.mouseClicked = function() {
        var oMenuItem, _i, _len;
        if (gameStarted === false) {
          gameStarted = true;
        }
        if (currentEvent.status === OStatus.MENU_EVENT) {
          for (_i = 0, _len = currentMenuItems.length; _i < _len; _i++) {
            oMenuItem = currentMenuItems[_i];
            if (oMenuItem.within(ps.mouseX, ps.mouseY)) {
              oMenuItem.menuItem["function"]();
              updateText = true;
            }
          }
          return;
        }
        return updateText = true;
      };
      gameDraw = function() {
        if (updateText === true) {
          currentEvent = script._next();
          updateText = false;
        }
        if (currentEvent.status === OStatus.TEXT_EVENT) {
          return ps.text(currentEvent.value, 40, 400, 650, 200);
        } else if (currentEvent.status === OStatus.ENDED) {
          return ps.text("End of Game", 50, 50);
        } else if (currentEvent.status === OStatus.MENU_EVENT) {
          return menuEventDraw(currentEvent.value);
        }
      };
      menuEventDraw = function(menuItems) {
        var count, item, menuItem, populateCurrentMenuItems, _i, _len, _results;
        count = 0;
        populateCurrentMenuItems = false;
        if (currentMenuItems.length === 0) {
          populateCurrentMenuItems = true;
        }
        _results = [];
        for (_i = 0, _len = menuItems.length; _i < _len; _i++) {
          item = menuItems[_i];
          menuItem = new OMenuItem(ps, item, 50, 50 + Setting.MENU_ITEM_HEIGHT * 1.5 * count);
          menuItem.draw();
          if (populateCurrentMenuItems === true) {
            currentMenuItems.push(menuItem);
          }
          _results.push(count++);
        }
        return _results;
      };
      return startScreenDraw = function() {
        return ps.text("Click to Start", 50, 50);
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
  OMenuItem = (function() {
    function OMenuItem(ps, menuItem, x, y) {
      this.ps = ps;
      this.menuItem = menuItem;
      this.x = x;
      this.y = y;
    }
    OMenuItem.prototype.draw = function() {
      if (this.within(this.ps.mouseX, this.ps.mouseY)) {
        this.ps.fill(200);
      }
      this.ps.rect(this.x, this.y, Setting.MENU_ITEM_WIDTH, Setting.MENU_ITEM_HEIGHT);
      this.ps.fill(51);
      this.ps.text(this.menuItem.text, this.x + 10, this.y + Setting.MENU_ITEM_HEIGHT * 0.6);
      return this.ps.fill(255);
    };
    OMenuItem.prototype.clicked = function(x, y) {};
    OMenuItem.prototype.within = function(x, y) {
      if ((x > this.x && x < this.x + Setting.MENU_ITEM_WIDTH) && (y > this.y && y < this.y + Setting.MENU_ITEM_HEIGHT)) {
        return true;
      }
    };
    return OMenuItem;
  })();
  $(document).ready(function() {
    var gameInstance;
    gameInstance = new OGame;
    return gameInstance.run();
  });
}).call(this);
