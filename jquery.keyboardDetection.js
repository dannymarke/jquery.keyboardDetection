 /**
 * jquery.keyboardDetection - common keyboard event listener.
 * Copyright (c) 2012 Daniele Marchesini - skylark(at)iol(dot)it
 * Dual licensed under MIT and GPL.
 * Date: 2012/05/23
 * @author Daniele Marchesini
 * @version 1.0
 *
 * DEFAULT SETTINGS
 *
 * var config = {
 *   up_fn       : function(e){alert('up\n' + e)},
 *   right_fn    : function(e){alert('right\n' + e)},
 *   down_fn     : function(e){alert('down\n' + e)},
 *   left_fn     : function(e){alert('left\n' + e)},
 *   enter_fn    : function(e){alert('enter\n' + e)},
 *   esc_fn      : function(e){alert('esc\n' + e)},
 *   space_fn    : function(e){alert('space\n' + e)},
 *   plus_fn     : function(e){alert('+\n' + e)},
 *   minus_fn    : function(e){alert('-\n' + e)},
 *   pageup_fn   : function(e){alert('pageUp\n' + e)},
 *   pagedown_fn : function(e){alert('pageDown\n' + e)}
 * };
 *
 * PUBLIC METHODS
 *
 * var pub_methods  = {
 *   init  : function(){
 *     document.onkeydown = priv_methods.captEvt;
 *   },
 *   hello : function(){alert('hello!')}
 * };
 *
 *
 * USAGE EXAMPLE
 * I set all the functions associated to the keyboard keys to do nothing
 *
 * jQuery(document).ready(function(){
 *
 *    var kk = jQuery(document).keyboardDetection({
 *      up_fn       : function(e){},
 *      right_fn    : function(e){},
 *      down_fn     : function(e){},
 *      left_fn     : function(e){},
 *      enter_fn    : function(e){},
 *      esc_fn      : function(e){},
 *      space_fn    : function(e){},
 *      plus_fn     : function(e){},
 *      minus_fn    : function(e){},
 *      pageup_fn   : function(e){},
 *      pagedown_fn : function(e){}
 *    });
 *
 *    // via kk I can fire all the public methods
 *    kk.hello();
 *  });
 *
 */


(function($) {
  $.fn.jquery.keyboardDetection = function(options) {
    var _this = this;

    // default settings
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

    if (options){$.extend(config, options)}

    var priv_methods = {
      e2key   : function(e) {
                  var event2key = {'37':'left', '39':'right', '38':'up', '40':'down', '13':'enter', '27':'esc', '32':'space', '107':'+', '109':'-', '33':'pageUp', '34':'pageDown'}
                  return event2key[(e.which || e.keyCode)] || '';
                },
      pageKey : function(e) {
                  switch(priv_methods.e2key(e)) {
                    case 'up':
                      config.up_fn(e);
                      break;
                    case 'right':
                      config.right_fn(e);
                      break;
                    case 'down':
                      config.down_fn(e);
                      break;
                    case 'left':
                      config.left_fn(e);
                      break;
                    case 'enter':
                      config.enter_fn(e);
                      break;
                    case 'esc':
                      config.esc_fn(e);
                      break;
                    case 'space':
                      config.space_fn(e);
                      break;
                    case '+':
                      config.plus_fn(e);
                      break;
                    case '-':
                      config.minus_fn(e);
                      break;
                    case 'pageUp':
                      config.pageup_fn(e);
                      break;
                    case 'pageDown':
                      config.pagedown_fn(e);
                      break;
                  }
                },
      captEvt : function(e){
                  e=e||window.event; /* catch correctly the event also in IE */
                  priv_methods.pageKey(e);
                }
  };

  var pub_methods  = {
    init  : function(){
      document.onkeydown = priv_methods.captEvt;
    },
    hello : function(){alert('hello!')}
  };

  this.each(function() {
    pub_methods.init();
  });

  return pub_methods;

  }
})(jQuery);