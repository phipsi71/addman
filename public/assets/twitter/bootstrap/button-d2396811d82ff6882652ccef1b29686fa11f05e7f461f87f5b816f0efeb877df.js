/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.button"),r="object"==typeof e&&e;i||o.data("bs.button",i=new n(this,r)),"toggle"==e?i.toggle():e&&i.setState(e)})}var n=function(e,o){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,o),this.isLoading=!1};n.VERSION="3.3.5",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",o=this.$element,i=o.is("input")?"val":"html",r=o.data();e+="Text",null==r.resetText&&o.data("resetText",o[i]()),setTimeout(t.proxy(function(){o[i](null==r[e]?this.options[e]:r[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,o.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var o=t(n.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),t(n.target).is('input[type="radio"]')||t(n.target).is('input[type="checkbox"]')||n.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery);