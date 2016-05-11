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
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e,i){var o,s,r,a=e.nodeName.toLowerCase();return"area"===a?(o=e.parentNode,s=o.name,e.href&&s&&"map"===o.nodeName.toLowerCase()?(r=t("img[usemap='#"+s+"']")[0],!!r&&n(r)):!1):(/^(input|select|textarea|button|object)$/.test(a)?!e.disabled:"a"===a?e.href||i:i)&&n(e)}function n(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var n=this.css("position"),i="absolute"===n,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var e=t(this);return i&&"static"===e.css("position")?!1:o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&s.length?s:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(n){return!!t.data(n,e)}}):function(e,n,i){return!!t.data(e,i[3])},focusable:function(n){return e(n,!isNaN(t.attr(n,"tabindex")))},tabbable:function(n){var i=t.attr(n,"tabindex"),o=isNaN(i);return(o||i>=0)&&e(n,!o)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,n){function i(e,n,i,s){return t.each(o,function(){n-=parseFloat(t.css(e,"padding"+this))||0,i&&(n-=parseFloat(t.css(e,"border"+this+"Width"))||0),s&&(n-=parseFloat(t.css(e,"margin"+this))||0)}),n}var o="Width"===n?["Left","Right"]:["Top","Bottom"],s=n.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+n]=function(e){return void 0===e?r["inner"+n].call(this):this.each(function(){t(this).css(s,i(this,e)+"px")})},t.fn["outer"+n]=function(e,o){return"number"!=typeof e?r["outer"+n].call(this,e):this.each(function(){t(this).css(s,i(this,e,!0,o)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(n){return arguments.length?e.call(this,t.camelCase(n)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(n,i){return"number"==typeof n?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),i&&i.call(e)},n)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var n,i,o=t(this[0]);o.length&&o[0]!==document;){if(n=o.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(i=parseInt(o.css("zIndex"),10),!isNaN(i)&&0!==i))return i;o=o.parent()}return 0}}),t.ui.plugin={add:function(e,n,i){var o,s=t.ui[e].prototype;for(o in i)s.plugins[o]=s.plugins[o]||[],s.plugins[o].push([n,i[o]])},call:function(t,e,n,i){var o,s=t.plugins[e];if(s&&(i||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,n)}}}),/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e=0,n=Array.prototype.slice;return t.cleanData=function(e){return function(n){var i,o,s;for(s=0;null!=(o=n[s]);s++)try{i=t._data(o,"events"),i&&i.remove&&t(o).triggerHandler("remove")}catch(r){}e(n)}}(t.cleanData),t.widget=function(e,n,i){var o,s,r,a,l={},c=e.split(".")[0];return e=e.split(".")[1],o=c+"-"+e,i||(i=n,n=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},s=t[c][e],r=t[c][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new r(t,e)},t.extend(r,s,{version:i.version,_proto:t.extend({},i),_childConstructors:[]}),a=new n,a.options=t.widget.extend({},a.options),t.each(i,function(e,i){return t.isFunction(i)?void(l[e]=function(){var t=function(){return n.prototype[e].apply(this,arguments)},o=function(t){return n.prototype[e].apply(this,t)};return function(){var e,n=this._super,s=this._superApply;return this._super=t,this._superApply=o,e=i.apply(this,arguments),this._super=n,this._superApply=s,e}}()):void(l[e]=i)}),r.prototype=t.widget.extend(a,{widgetEventPrefix:s?a.widgetEventPrefix||e:e},l,{constructor:r,namespace:c,widgetName:e,widgetFullName:o}),s?(t.each(s._childConstructors,function(e,n){var i=n.prototype;t.widget(i.namespace+"."+i.widgetName,r,n._proto)}),delete s._childConstructors):n._childConstructors.push(r),t.widget.bridge(e,r),r},t.widget.extend=function(e){for(var i,o,s=n.call(arguments,1),r=0,a=s.length;a>r;r++)for(i in s[r])o=s[r][i],s[r].hasOwnProperty(i)&&void 0!==o&&(t.isPlainObject(o)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],o):t.widget.extend({},o):e[i]=o);return e},t.widget.bridge=function(e,i){var o=i.prototype.widgetFullName||e;t.fn[e]=function(s){var r="string"==typeof s,a=n.call(arguments,1),l=this;return r?this.each(function(){var n,i=t.data(this,o);return"instance"===s?(l=i,!1):i?t.isFunction(i[s])&&"_"!==s.charAt(0)?(n=i[s].apply(i,a),n!==i&&void 0!==n?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):void 0):t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")}):(a.length&&(s=t.widget.extend.apply(null,[s].concat(a))),this.each(function(){var e=t.data(this,o);e?(e.option(s||{}),e._init&&e._init()):t.data(this,o,new i(s,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,n){var i,o,s,r=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(r={},i=e.split("."),e=i.shift(),i.length){for(o=r[e]=t.widget.extend({},this.options[e]),s=0;s<i.length-1;s++)o[i[s]]=o[i[s]]||{},o=o[i[s]];if(e=i.pop(),1===arguments.length)return void 0===o[e]?null:o[e];o[e]=n}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=n}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,n,i){var o,s=this;"boolean"!=typeof e&&(i=n,n=e,e=!1),i?(n=o=t(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,o=this.widget()),t.each(i,function(i,r){function a(){return e||s.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?s[r]:r).apply(s,arguments):void 0}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);var l=i.match(/^([\w:-]*)\s*(.*)$/),c=l[1]+s.eventNamespace,u=l[2];u?o.delegate(u,c,a):n.bind(c,a)})},_off:function(e,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(n).undelegate(n),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function n(){return("string"==typeof t?i[t]:t).apply(i,arguments)}var i=this;return setTimeout(n,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,n,i){var o,s,r=this.options[e];if(i=i||{},n=t.Event(n),n.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),n.target=this.element[0],s=n.originalEvent)for(o in s)o in n||(n[o]=s[o]);return this.element.trigger(n,i),!(t.isFunction(r)&&r.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,n){t.Widget.prototype["_"+e]=function(i,o,s){"string"==typeof o&&(o={effect:o});var r,a=o?o===!0||"number"==typeof o?n:o.effect||n:e;o=o||{},"number"==typeof o&&(o={duration:o}),r=!t.isEmptyObject(o),o.complete=s,o.delay&&i.delay(o.delay),r&&t.effects&&t.effects.effect[a]?i[e](o):a!==e&&i[a]?i[a](o.duration,o.easing,s):i.queue(function(n){t(this)[e](),s&&s.call(i[0]),n()})}}),t.widget}),/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){return function(){function e(t,e,n){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?n/100:1)]}function n(e,n){return parseInt(t.css(e,n),10)||0}function i(e){var n=e[0];return 9===n.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(n)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var o,s,r=Math.max,a=Math.abs,l=Math.round,c=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==o)return o;var e,n,i=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=i.children()[0];return t("body").append(i),e=s.offsetWidth,i.css("overflow","scroll"),n=s.offsetWidth,e===n&&(n=i[0].clientWidth),i.remove(),o=e-n},getScrollInfo:function(e){var n=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),i=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),o="scroll"===n||"auto"===n&&e.width<e.element[0].scrollWidth,s="scroll"===i||"auto"===i&&e.height<e.element[0].scrollHeight;return{width:s?t.position.scrollbarWidth():0,height:o?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var n=t(e||window),i=t.isWindow(n[0]),o=!!n[0]&&9===n[0].nodeType;return{element:n,isWindow:i,isDocument:o,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:i||o?n.width():n.outerWidth(),height:i||o?n.height():n.outerHeight()}}},t.fn.position=function(o){if(!o||!o.of)return f.apply(this,arguments);o=t.extend({},o);var p,m,g,v,y,b,w=t(o.of),x=t.position.getWithinInfo(o.within),T=t.position.getScrollInfo(x),C=(o.collision||"flip").split(" "),E={};return b=i(w),w[0].preventDefault&&(o.at="left top"),m=b.width,g=b.height,v=b.offset,y=t.extend({},v),t.each(["my","at"],function(){var t,e,n=(o[this]||"").split(" ");1===n.length&&(n=c.test(n[0])?n.concat(["center"]):u.test(n[0])?["center"].concat(n):["center","center"]),n[0]=c.test(n[0])?n[0]:"center",n[1]=u.test(n[1])?n[1]:"center",t=d.exec(n[0]),e=d.exec(n[1]),E[this]=[t?t[0]:0,e?e[0]:0],o[this]=[h.exec(n[0])[0],h.exec(n[1])[0]]}),1===C.length&&(C[1]=C[0]),"right"===o.at[0]?y.left+=m:"center"===o.at[0]&&(y.left+=m/2),"bottom"===o.at[1]?y.top+=g:"center"===o.at[1]&&(y.top+=g/2),p=e(E.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var i,c,u=t(this),d=u.outerWidth(),h=u.outerHeight(),f=n(this,"marginLeft"),b=n(this,"marginTop"),k=d+f+n(this,"marginRight")+T.width,S=h+b+n(this,"marginBottom")+T.height,$=t.extend({},y),_=e(E.my,u.outerWidth(),u.outerHeight());"right"===o.my[0]?$.left-=d:"center"===o.my[0]&&($.left-=d/2),"bottom"===o.my[1]?$.top-=h:"center"===o.my[1]&&($.top-=h/2),$.left+=_[0],$.top+=_[1],s||($.left=l($.left),$.top=l($.top)),i={marginLeft:f,marginTop:b},t.each(["left","top"],function(e,n){t.ui.position[C[e]]&&t.ui.position[C[e]][n]($,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:h,collisionPosition:i,collisionWidth:k,collisionHeight:S,offset:[p[0]+_[0],p[1]+_[1]],my:o.my,at:o.at,within:x,elem:u})}),o.using&&(c=function(t){var e=v.left-$.left,n=e+m-d,i=v.top-$.top,s=i+g-h,l={target:{element:w,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:$.left,top:$.top,width:d,height:h},horizontal:0>n?"left":e>0?"right":"center",vertical:0>s?"top":i>0?"bottom":"middle"};d>m&&a(e+n)<m&&(l.horizontal="center"),h>g&&a(i+s)<g&&(l.vertical="middle"),r(a(e),a(n))>r(a(i),a(s))?l.important="horizontal":l.important="vertical",o.using.call(this,t,l)}),u.offset(t.extend($,{using:c}))})},t.ui.position={fit:{left:function(t,e){var n,i=e.within,o=i.isWindow?i.scrollLeft:i.offset.left,s=i.width,a=t.left-e.collisionPosition.marginLeft,l=o-a,c=a+e.collisionWidth-s-o;e.collisionWidth>s?l>0&&0>=c?(n=t.left+l+e.collisionWidth-s-o,t.left+=l-n):c>0&&0>=l?t.left=o:l>c?t.left=o+s-e.collisionWidth:t.left=o:l>0?t.left+=l:c>0?t.left-=c:t.left=r(t.left-a,t.left)},top:function(t,e){var n,i=e.within,o=i.isWindow?i.scrollTop:i.offset.top,s=e.within.height,a=t.top-e.collisionPosition.marginTop,l=o-a,c=a+e.collisionHeight-s-o;e.collisionHeight>s?l>0&&0>=c?(n=t.top+l+e.collisionHeight-s-o,t.top+=l-n):c>0&&0>=l?t.top=o:l>c?t.top=o+s-e.collisionHeight:t.top=o:l>0?t.top+=l:c>0?t.top-=c:t.top=r(t.top-a,t.top)}},flip:{left:function(t,e){var n,i,o=e.within,s=o.offset.left+o.scrollLeft,r=o.width,l=o.isWindow?o.scrollLeft:o.offset.left,c=t.left-e.collisionPosition.marginLeft,u=c-l,d=c+e.collisionWidth-r-l,h="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>u?(n=t.left+h+p+f+e.collisionWidth-r-s,(0>n||n<a(u))&&(t.left+=h+p+f)):d>0&&(i=t.left-e.collisionPosition.marginLeft+h+p+f-l,(i>0||a(i)<d)&&(t.left+=h+p+f))},top:function(t,e){var n,i,o=e.within,s=o.offset.top+o.scrollTop,r=o.height,l=o.isWindow?o.scrollTop:o.offset.top,c=t.top-e.collisionPosition.marginTop,u=c-l,d=c+e.collisionHeight-r-l,h="top"===e.my[1],p=h?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>u?(i=t.top+p+f+m+e.collisionHeight-r-s,(0>i||i<a(u))&&(t.top+=p+f+m)):d>0&&(n=t.top-e.collisionPosition.marginTop+p+f+m-l,(n>0||a(n)<d)&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,n,i,o,r,a=document.getElementsByTagName("body")[0],l=document.createElement("div");e=document.createElement(a?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(r in i)e.style[r]=i[r];e.appendChild(l),n=a||document.documentElement,n.insertBefore(e,n.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",o=t(l).offset().left,s=o>10&&11>o,e.innerHTML="",n.removeChild(e)}()}(),t.ui.position}),/*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position"],t):t(jQuery)}(function(t){return t.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var n=t(e.target);!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),n.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var n=t(e.currentTarget);n.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(e,n)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var n=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,n)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){var n,i,o,s,r=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:r=!1,i=this.previousFilter||"",o=String.fromCharCode(e.keyCode),s=!1,clearTimeout(this.filterTimer),o===i?s=!0:o=i+o,n=this._filterMenuItems(o),n=s&&-1!==n.index(this.active.next())?this.active.nextAll(".ui-menu-item"):n,n.length||(o=String.fromCharCode(e.keyCode),n=this._filterMenuItems(o)),n.length?(this.focus(e,n),this.previousFilter=o,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}r&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(t):this.select(t))},refresh:function(){var e,n,i=this,o=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),n=e.parent(),i=t("<span>").addClass("ui-menu-icon ui-icon "+o).data("ui-menu-submenu-carat",!0);n.attr("aria-haspopup","true").prepend(i),e.attr("aria-labelledby",n.attr("id"))}),e=s.add(this.element),n=e.find(this.options.items),n.not(".ui-menu-item").each(function(){var e=t(this);i._isDivider(e)&&e.addClass("ui-widget-content ui-menu-divider")}),n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),n.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},focus:function(t,e){var n,i;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),i=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",i.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=e.children(".ui-menu"),n.length&&t&&/^mouse/.test(t.type)&&this._startOpening(n),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var n,i,o,s,r,a;this._hasScroll()&&(n=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,o=e.offset().top-this.activeMenu.offset().top-n-i,s=this.activeMenu.scrollTop(),r=this.activeMenu.height(),a=e.outerHeight(),0>o?this.activeMenu.scrollTop(s+o):o+a>r&&this.activeMenu.scrollTop(s+o-r+a))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var n=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(e,n){clearTimeout(this.timer),this.timer=this._delay(function(){var i=n?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));i.length||(i=this.element),this._close(i),this.blur(e),this.activeMenu=i},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,n){var i;this.active&&(i="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),i&&i.length&&this.active||(i=this.activeMenu.find(this.options.items)[e]()),this.focus(n,i)},nextPage:function(e){var n,i,o;return this.active?void(this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,o=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=t(this),n.offset().top-i-o<0}),this.focus(e,n)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(e)},previousPage:function(e){var n,i,o;return this.active?void(this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,o=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=t(this),n.offset().top-i+o>0}),this.focus(e,n)):this.focus(e,this.activeMenu.find(this.options.items).first()))):void this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,n)},_filterMenuItems:function(e){var n=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),i=new RegExp("^"+n,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return i.test(t.trim(t(this).text()))})}})}),/*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position","./menu"],t):t(jQuery)}(function(t){return t.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,n,i,o=this.element[0].nodeName.toLowerCase(),s="textarea"===o,r="input"===o;this.isMultiLine=s?!0:r?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[s||r?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(o){if(this.element.prop("readOnly"))return e=!0,i=!0,void(n=!0);e=!1,i=!1,n=!1;var s=t.ui.keyCode;switch(o.keyCode){case s.PAGE_UP:e=!0,this._move("previousPage",o);break;case s.PAGE_DOWN:e=!0,this._move("nextPage",o);break;case s.UP:e=!0,this._keyEvent("previous",o);break;case s.DOWN:e=!0,this._keyEvent("next",o);break;case s.ENTER:this.menu.active&&(e=!0,o.preventDefault(),this.menu.select(o));break;case s.TAB:this.menu.active&&this.menu.select(o);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(o),o.preventDefault());break;default:n=!0,this._searchTimeout(o)}},keypress:function(i){if(e)return e=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||i.preventDefault());if(!n){var o=t.ui.keyCode;switch(i.keyCode){case o.PAGE_UP:this._move("previousPage",i);break;case o.PAGE_DOWN:this._move("nextPage",i);break;case o.UP:this._keyEvent("previous",i);break;case o.DOWN:this._keyEvent("next",i)}}},input:function(t){return i?(i=!1,void t.preventDefault()):void this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),void this._change(t))}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(i){i.target===e.element[0]||i.target===n||t.contains(n,i.target)||e.close()})})},menufocus:function(e,n){var i,o;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)})):(o=n.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:o})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(o.value),i=n.item.attr("aria-label")||o.value,void(i&&t.trim(i).length&&(this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))))},menuselect:function(t,e){var n=e.item.data("ui-autocomplete-item"),i=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=i,this._delay(function(){this.previous=i,this.selectedItem=n})),!1!==this._trigger("select",t,{item:n})&&this._value(n.value),this.term=this._value(),this.close(t),this.selectedItem=n}}),this.liveRegion=t("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,n,i=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(n,i){i(t.ui.autocomplete.filter(e,n.term))}):"string"==typeof this.options.source?(n=this.options.source,this.source=function(e,o){i.xhr&&i.xhr.abort(),i.xhr=t.ajax({url:n,data:e,dataType:"json",success:function(t){o(t)},error:function(){o([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),n=this.menu.element.is(":visible"),i=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;e&&(!e||n||i)||(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var n=this.menu.element.empty();this._renderMenu(n,e),this.isNewMenu=!0,this.menu.refresh(),n.show(),this._resizeMenu(),n.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,n){var i=this;t.each(n,function(t,n){i._renderItemData(e,n)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,n){return t("<li>").text(n.label).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e):void this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,n){var i=new RegExp(t.ui.autocomplete.escapeRegex(n),"i");return t.grep(e,function(t){return i.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var n;this._superApply(arguments),this.options.disabled||this.cancelSearch||(n=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(n).appendTo(this.liveRegion))}}),t.ui.autocomplete});