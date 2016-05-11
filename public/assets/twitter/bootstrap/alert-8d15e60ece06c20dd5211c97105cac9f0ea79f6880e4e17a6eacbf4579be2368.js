/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),i=n.data("bs.alert");i||n.data("bs.alert",i=new o(this)),"string"==typeof e&&i[e].call(n)})}var n='[data-dismiss="alert"]',o=function(e){t(e).on("click",n,this.close)};o.VERSION="3.3.5",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function n(){a.detach().trigger("closed.bs.alert").remove()}var i=t(this),r=i.attr("data-target");r||(r=i.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var a=t(r);e&&e.preventDefault(),a.length||(a=i.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",n).emulateTransitionEnd(o.TRANSITION_DURATION):n())};var i=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.bs.alert.data-api",n,o.prototype.close)}(jQuery);