/* DO NOT MODIFY. This file was compiled Wed, 17 Aug 2011 09:55:48 GMT from
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
  window.OScript = (function() {
    var buffer, narrative;
    function OScript() {}
    buffer = [];
    OScript.prototype.init = function() {
      narrative("Hello there");
      narrative("You are reading a visual novel that has not yet been configured");
      return narrative("Please see the developer's documentation");
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
    return OScript;
  })();
  window.OSetting = (function() {
    function OSetting(width, height) {
      this.width = width;
      this.height = height;
    }
    return OSetting;
  })();
  window.Setting = (function() {
    __extends(Setting, window.OSetting);
    function Setting() {
      Setting.__super__.constructor.apply(this, arguments);
    }
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
