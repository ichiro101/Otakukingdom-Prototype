/* DO NOT MODIFY. This file was compiled Tue, 16 Aug 2011 11:24:41 GMT from
 * /home/ichiro/web-dev/otakukingdom-prototype/app/coffeescripts/engine.coffee
 */

(function() {
  var OGame, OScript, OSetting, Script, Setting;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  OScript = (function() {
    function OScript() {}
    OScript.prototype.init = function() {
      narrative("hello world");
      return narrative("hi there");
    };
    return OScript;
  })();
  OSetting = (function() {
    function OSetting(width, height) {
      this.width = width;
      this.height = height;
    }
    OSetting.prototype.getWidth = function() {
      return this.width;
    };
    OSetting.prototype.getHeight = function() {
      return this.height;
    };
    return OSetting;
  })();
  Setting = (function() {
    __extends(Setting, OSetting);
    function Setting() {
      Setting.__super__.constructor.apply(this, arguments);
    }
    return Setting;
  })();
  Script = (function() {
    __extends(Script, OScript);
    function Script() {
      Script.__super__.constructor.apply(this, arguments);
    }
    return Script;
  })();
  OGame = (function() {
    var narrative;
    narrative = function(text) {
      return alert(text);
    };
    function OGame(width, height) {
      this.width = width;
      this.height = height;
    }
    OGame.prototype.sketch = function(ps) {
      var script, settings;
      settings = new Setting(800, 600);
      script = new Script;
      script.init();
      ps.setup = function() {
        ps.noLoop();
        return ps.size(settings.getWidth(), settings.getHeight());
      };
      return ps.draw = function() {
        return ps.text("Click to Start", 40, 20);
      };
    };
    OGame.prototype.run = function() {
      var canvas, p;
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
