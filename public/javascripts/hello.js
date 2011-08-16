/* DO NOT MODIFY. This file was compiled Tue, 16 Aug 2011 07:49:29 GMT from
 * /home/ichiro/web-dev/otakukingdom-prototype/app/coffeescripts/hello.coffee
 */

(function() {
  var canvas_proc;
  canvas_proc = function(ps) {
    ps.setup = function() {
      return ps.size(600, 400);
    };
    return ps.draw = function() {
      return ps.text("hello world", 50, 50);
    };
  };
  $(document).ready(function() {
    var canvas, p, sketch;
    sketch = new Processing.Sketch(canvas_proc);
    canvas = document.getElementById('game');
    return p = new Processing(canvas, sketch);
  });
}).call(this);
