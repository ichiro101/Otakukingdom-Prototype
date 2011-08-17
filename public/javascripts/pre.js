/* DO NOT MODIFY. This file was compiled Wed, 17 Aug 2011 11:34:52 GMT from
 * /home/ichiro/web-dev/otakukingdom-prototype/app/coffeescripts/pre.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.OStatus = (function() {
    function OStatus() {}
    OStatus.ENDED = 1;
    OStatus.MENU_EVENT = 2;
    OStatus.SCREEN_EVENT = 3;
    OStatus.TEXT_EVENT = 4;
    return OStatus;
  })();
  window.OEventObject = (function() {
    function OEventObject(status, value) {
      this.status = status;
      this.value = value;
    }
    return OEventObject;
  })();
  window.MenuItem = (function() {
    function MenuItem(text, _function) {
      this.text = text;
      this["function"] = _function;
    }
    return MenuItem;
  })();
  window.OScript = (function() {
    var buffer, narrative, showMenu;
    function OScript() {}
    buffer = [];
    OScript.prototype.init = function() {
      narrative("Hello there");
      narrative("You are reading a visual novel that has not yet been configured");
      narrative("Please see the developer's documentation");
      narrative("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet velit purus. Suspendisse potenti. Proin vestibulum vulputate leo, faucibus luctus ipsum ultricies at. Praesent fringilla, diam in convallis viverra, nunc quam eleifend nunc, nec accumsan massa ipsum at arcu. Proin convallis orci massa, quis aliquet libero. Vivamus vel nisi vitae nibh pharetra sagittis in id metus. Nulla facilisi. Nulla ac tortor et nunc malesuada dapibus ac in sapien. Aliquam molestie adipiscing erat ut fermentum.");
      return showMenu([new MenuItem("Decision 1", this.decision1), new MenuItem("Decision 2", this.decision2)]);
    };
    OScript.prototype.decision1 = function() {
      return narrative("You have picked decision 1");
    };
    OScript.prototype.decision2 = function() {
      return narrative("You have picked decision 2");
    };
    OScript.prototype._next = function() {
      var item, object;
      if (buffer.length > 0) {
        return item = buffer.shift();
      } else {
        object = new OEventObject(OStatus.ENDED, null);
        return object;
      }
    };
    narrative = function(text) {
      var bufferObject;
      bufferObject = new OEventObject(OStatus.TEXT_EVENT, text);
      return buffer.push(bufferObject);
    };
    showMenu = function(menuItems) {
      var bufferObject;
      bufferObject = new OEventObject(OStatus.MENU_EVENT, menuItems);
      return buffer.push(bufferObject);
    };
    return OScript;
  })();
  window.Setting = (function() {
    function Setting() {}
    Setting.GAME_WIDTH = 800;
    Setting.GAME_HEIGHT = 600;
    Setting.MENU_ITEM_WIDTH = Setting.GAME_WIDTH - 100;
    Setting.MENU_ITEM_HEIGHT = 40;
    return Setting;
  })();
  window.Script = (function() {
    __extends(Script, window.OScript);
    function Script() {
      Script.__super__.constructor.apply(this, arguments);
    }
    return Script;
  })();
}).call(this);
