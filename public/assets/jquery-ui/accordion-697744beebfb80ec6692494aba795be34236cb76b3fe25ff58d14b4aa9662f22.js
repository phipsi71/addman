/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e,n){var s,o,a,r=e.nodeName.toLowerCase();return"area"===r?(s=e.parentNode,o=s.name,e.href&&o&&"map"===s.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']")[0],!!a&&i(a)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!e.disabled:"a"===r?e.href||n:n)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var i=this.css("position"),n="absolute"===i,s=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return n&&"static"===e.css("position")?!1:s.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,n){return!!t.data(e,n[3])},focusable:function(i){return e(i,!isNaN(t.attr(i,"tabindex")))},tabbable:function(i){var n=t.attr(i,"tabindex"),s=isNaN(n);return(s||n>=0)&&e(i,!s)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,i){function n(e,i,n,o){return t.each(s,function(){i-=parseFloat(t.css(e,"padding"+this))||0,n&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var s="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,n(this,e)+"px")})},t.fn["outer"+i]=function(e,s){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,n(this,e,!0,s)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(i,n){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),n&&n.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var i,n,s=t(this[0]);s.length&&s[0]!==document;){if(i=s.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(n=parseInt(s.css("zIndex"),10),!isNaN(n)&&0!==n))return n;s=s.parent()}return 0}}),t.ui.plugin={add:function(e,i,n){var s,o=t.ui[e].prototype;for(s in n)o.plugins[s]=o.plugins[s]||[],o.plugins[s].push([i,n[s]])},call:function(t,e,i,n){var s,o=t.plugins[e];if(o&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(s=0;s<o.length;s++)t.options[o[s][0]]&&o[s][1].apply(t.element,i)}}}),/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e=0,i=Array.prototype.slice;return t.cleanData=function(e){return function(i){var n,s,o;for(o=0;null!=(s=i[o]);o++)try{n=t._data(s,"events"),n&&n.remove&&t(s).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var s,o,a,r,l={},h=e.split(".")[0];return e=e.split(".")[1],s=h+"-"+e,n||(n=i,i=t.Widget),t.expr[":"][s.toLowerCase()]=function(e){return!!t.data(e,s)},t[h]=t[h]||{},o=t[h][e],a=t[h][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new a(t,e)},t.extend(a,o,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),r=new i,r.options=t.widget.extend({},r.options),t.each(n,function(e,n){return t.isFunction(n)?void(l[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},s=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=o,e}}()):void(l[e]=n)}),a.prototype=t.widget.extend(r,{widgetEventPrefix:o?r.widgetEventPrefix||e:e},l,{constructor:a,namespace:h,widgetName:e,widgetFullName:s}),o?(t.each(o._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,a,i._proto)}),delete o._childConstructors):i._childConstructors.push(a),t.widget.bridge(e,a),a},t.widget.extend=function(e){for(var n,s,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(n in o[a])s=o[a][n],o[a].hasOwnProperty(n)&&void 0!==s&&(t.isPlainObject(s)?e[n]=t.isPlainObject(e[n])?t.widget.extend({},e[n],s):t.widget.extend({},s):e[n]=s);return e},t.widget.bridge=function(e,n){var s=n.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.each(function(){var i,n=t.data(this,s);return"instance"===o?(l=n,!1):n?t.isFunction(n[o])&&"_"!==o.charAt(0)?(i=n[o].apply(n,r),i!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")}):(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new n(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},n=e.split("."),e=n.shift(),n.length){for(s=a[e]=t.widget.extend({},this.options[e]),o=0;o<n.length-1;o++)s[n[o]]=s[n[o]]||{},s=s[n[o]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,n){var s,o=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?s.delegate(c,h,r):i.bind(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,o,a=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var a,r=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),a=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),a&&t.effects&&t.effects.effect[r]?n[e](s):r!==e&&n[r]?n[r](s.duration,s.easing,o):n.queue(function(i){t(this)[e](),o&&o.call(n[0]),i()})}}),t.widget}),/*!
 * jQuery UI Accordion 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],t):t(jQuery)}(function(t){return t.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?void this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void("disabled"===t&&(this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e))))},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,n=this.headers.length,s=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(s+1)%n];break;case i.LEFT:case i.UP:o=this.headers[(s-1+n)%n];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[n-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),o.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,n=i.heightStyle,s=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),n=e.next(),s=n.uniqueId().attr("id");e.attr("aria-controls",s),n.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===n?(e=s.height(),this.element.siblings(":visible").each(function(){var i=t(this),n=i.css("position");"absolute"!==n&&"fixed"!==n&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(e=0,this.headers.next().each(function(){e=Math.max(e,t(this).css("height","").height())}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,n=this.active,s=t(e.currentTarget),o=s[0]===n[0],a=o&&i.collapsible,r=a?t():s.next(),l=n.next(),h={oldHeader:n,oldPanel:l,newHeader:a?t():s,newPanel:r};e.preventDefault(),o&&!i.collapsible||this._trigger("beforeActivate",e,h)===!1||(i.active=a?!1:this.headers.index(s),this.active=o?t():s,this._toggle(h),n.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),o||(s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),s.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,n=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=n,this.options.animate?this._animate(i,n,e):(n.hide(),i.show(),this._toggleComplete(e)),n.attr({"aria-hidden":"true"}),n.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&n.length?n.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var n,s,o,a=this,r=0,l=t.css("box-sizing"),h=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=h&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(s=u),s=s||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(n=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:s,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:o,easing:s,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(n-e.outerHeight()-r),r=0)}})):e.animate(this.hideProps,o,s,d):t.animate(this.showProps,o,s,d)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})});