/* DO NOT MODIFY. This file was compiled Wed, 17 Aug 2011 02:05:07 GMT from
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
  window.OScript = (function() {
    function OScript(narrative) {
      this.narrative = narrative;
    }
    OScript.prototype.init = function() {
      this.narrative("Hello there");
      this.narrative("You are reading a visual novel that has not yet been configured");
      return this.narrative("Please see the developer's documentation");
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
