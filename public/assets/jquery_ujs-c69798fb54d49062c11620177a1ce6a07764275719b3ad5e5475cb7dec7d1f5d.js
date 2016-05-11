!function(t,e){t.rails!==e&&t.error("jquery-ujs has already been loaded!");var i,n=t(document);t.rails=i={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not(form button), button[data-confirm]:not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",CSRFProtection:function(e){var i=t('meta[name="csrf-token"]').attr("content");i&&e.setRequestHeader("X-CSRF-Token",i)},refreshCSRFTokens:function(){var e=t("meta[name=csrf-token]").attr("content"),i=t("meta[name=csrf-param]").attr("content");t('form input[name="'+i+'"]').val(e)},fire:function(e,i,n){var o=t.Event(i);return e.trigger(o,n),o.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t[0].href},handleRemote:function(n){var o,s,r,a,l,u;if(i.fire(n,"ajax:before")){if(a=n.data("with-credentials")||null,l=n.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,n.is("form")){o=n.attr("method"),s=n.attr("action"),r=n.serializeArray();var c=n.data("ujs:submit-button");c&&(r.push(c),n.data("ujs:submit-button",null))}else n.is(i.inputChangeSelector)?(o=n.data("method"),s=n.data("url"),r=n.serialize(),n.data("params")&&(r=r+"&"+n.data("params"))):n.is(i.buttonClickSelector)?(o=n.data("method")||"get",s=n.data("url"),r=n.serialize(),n.data("params")&&(r=r+"&"+n.data("params"))):(o=n.data("method"),s=i.href(n),r=n.data("params")||null);return u={type:o||"GET",data:r,dataType:l,beforeSend:function(t,o){return o.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+o.accepts.script),i.fire(n,"ajax:beforeSend",[t,o])?void n.trigger("ajax:send",t):!1},success:function(t,e,i){n.trigger("ajax:success",[t,e,i])},complete:function(t,e){n.trigger("ajax:complete",[t,e])},error:function(t,e,i){n.trigger("ajax:error",[t,e,i])},crossDomain:i.isCrossDomain(s)},a&&(u.xhrFields={withCredentials:a}),s&&(u.url=s),i.ajax(u)}return!1},isCrossDomain:function(t){var e=document.createElement("a");e.href=location.href;var i=document.createElement("a");try{return i.href=t,i.href=i.href,!((!i.protocol||":"===i.protocol)&&!i.host||e.protocol+"//"+e.host==i.protocol+"//"+i.host)}catch(n){return!0}},handleMethod:function(n){var o=i.href(n),s=n.data("method"),r=n.attr("target"),a=t("meta[name=csrf-token]").attr("content"),l=t("meta[name=csrf-param]").attr("content"),u=t('<form method="post" action="'+o+'"></form>'),c='<input name="_method" value="'+s+'" type="hidden" />';l===e||a===e||i.isCrossDomain(o)||(c+='<input name="'+l+'" value="'+a+'" type="hidden" />'),r&&u.attr("target",r),u.hide().append(c).appendTo("body"),u.submit()},formElements:function(e,i){return e.is("form")?t(e[0].elements).filter(i):e.find(i)},disableFormElements:function(e){i.formElements(e,i.disableSelector).each(function(){i.disableFormElement(t(this))})},disableFormElement:function(t){var i,n;i=t.is("button")?"html":"val",n=t.data("disable-with"),t.data("ujs:enable-with",t[i]()),n!==e&&t[i](n),t.prop("disabled",!0)},enableFormElements:function(e){i.formElements(e,i.enableSelector).each(function(){i.enableFormElement(t(this))})},enableFormElement:function(t){var e=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[e](t.data("ujs:enable-with")),t.prop("disabled",!1)},allowAction:function(t){var e,n=t.data("confirm"),o=!1;return n?(i.fire(t,"confirm")&&(o=i.confirm(n),e=i.fire(t,"confirm:complete",[o])),o&&e):!0},blankInputs:function(e,i,n){var o,s,r=t(),a=i||"input,textarea",l=e.find(a);return l.each(function(){if(o=t(this),s=o.is("input[type=checkbox],input[type=radio]")?o.is(":checked"):o.val(),!s==!n){if(o.is("input[type=radio]")&&l.filter('input[type=radio]:checked[name="'+o.attr("name")+'"]').length)return!0;r=r.add(o)}}),r.length?r:!1},nonBlankInputs:function(t,e){return i.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){var n=t.data("disable-with");t.data("ujs:enable-with",t.html()),n!==e&&t.html(n),t.bind("click.railsDisable",function(t){return i.stopEverything(t)})},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable")}},i.fire(n,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,n){t.crossDomain||i.CSRFProtection(n)}),n.delegate(i.linkDisableSelector,"ajax:complete",function(){i.enableElement(t(this))}),n.delegate(i.buttonDisableSelector,"ajax:complete",function(){i.enableFormElement(t(this))}),n.delegate(i.linkClickSelector,"click.rails",function(n){var o=t(this),s=o.data("method"),r=o.data("params"),a=n.metaKey||n.ctrlKey;if(!i.allowAction(o))return i.stopEverything(n);if(!a&&o.is(i.linkDisableSelector)&&i.disableElement(o),o.data("remote")!==e){if(a&&(!s||"GET"===s)&&!r)return!0;var l=i.handleRemote(o);return l===!1?i.enableElement(o):l.error(function(){i.enableElement(o)}),!1}return o.data("method")?(i.handleMethod(o),!1):void 0}),n.delegate(i.buttonClickSelector,"click.rails",function(e){var n=t(this);if(!i.allowAction(n))return i.stopEverything(e);n.is(i.buttonDisableSelector)&&i.disableFormElement(n);var o=i.handleRemote(n);return o===!1?i.enableFormElement(n):o.error(function(){i.enableFormElement(n)}),!1}),n.delegate(i.inputChangeSelector,"change.rails",function(e){var n=t(this);return i.allowAction(n)?(i.handleRemote(n),!1):i.stopEverything(e)}),n.delegate(i.formSubmitSelector,"submit.rails",function(n){var o,s,r=t(this),a=r.data("remote")!==e;if(!i.allowAction(r))return i.stopEverything(n);if(r.attr("novalidate")==e&&(o=i.blankInputs(r,i.requiredInputSelector),o&&i.fire(r,"ajax:aborted:required",[o])))return i.stopEverything(n);if(a){if(s=i.nonBlankInputs(r,i.fileInputSelector)){setTimeout(function(){i.disableFormElements(r)},13);var l=i.fire(r,"ajax:aborted:file",[s]);return l||setTimeout(function(){i.enableFormElements(r)},13),l}return i.handleRemote(r),!1}setTimeout(function(){i.disableFormElements(r)},13)}),n.delegate(i.formInputClickSelector,"click.rails",function(e){var n=t(this);if(!i.allowAction(n))return i.stopEverything(e);var o=n.attr("name"),s=o?{name:o,value:n.val()}:null;n.closest("form").data("ujs:submit-button",s)}),n.delegate(i.formSubmitSelector,"ajax:send.rails",function(e){this==e.target&&i.disableFormElements(t(this))}),n.delegate(i.formSubmitSelector,"ajax:complete.rails",function(e){this==e.target&&i.enableFormElements(t(this))}),t(function(){i.refreshCSRFTokens()}))}(jQuery);