jquery.keyboardDetection
========================

common keyboard event listener

DEFAULT SETTINGS
-------------------------------
<pre>
var config = {
  up_fn       : function(e){alert('up\n' + e)},
  right_fn    : function(e){alert('right\n' + e)},
  down_fn     : function(e){alert('down\n' + e)},
  left_fn     : function(e){alert('left\n' + e)},
  enter_fn    : function(e){alert('enter\n' + e)},
  esc_fn      : function(e){alert('esc\n' + e)},
  space_fn    : function(e){alert('space\n' + e)},
  plus_fn     : function(e){alert('+\n' + e)},
  minus_fn    : function(e){alert('-\n' + e)},
  pageup_fn   : function(e){alert('pageUp\n' + e)},
  pagedown_fn : function(e){alert('pageDown\n' + e)}
};
</pre>

PUBLIC METHODS
-------------------------------
<pre>
var pub_methods  = {
  init  : function(){
    document.onkeydown = priv_methods.captEvt;
  },
  hello : function(){alert('hello!')}
};
</pre>

USAGE EXAMPLE
-------------------------------
I set all the functions associated to the keyboard keys to do nothing
<pre>
jQuery(document).ready(function(){

  var kk = jQuery(document).keyboardDetection({
    up_fn       : function(e){},
    right_fn    : function(e){},
    down_fn     : function(e){},
    left_fn     : function(e){},
    enter_fn    : function(e){},
    esc_fn      : function(e){},
    space_fn    : function(e){},
    plus_fn     : function(e){},
    minus_fn    : function(e){},
    pageup_fn   : function(e){},
    pagedown_fn : function(e){}
  });

  // via kk I can fire all the public methods
  kk.hello();
});
</pre>