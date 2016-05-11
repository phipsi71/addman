!function(t){t.ownage||(t.ownage=new Object),t.ownage.Loader=function(e,i,n,s){var o=this;o.el=e,o.$el=t(e),o.selector=n,o.context=o.$el,o.checkInterval=!1,t.ownage.Loader.objects||(t.ownage.Loader.objects=new Array,t.ownage.Loader.objectOptions=new Array),o.objects=t.ownage.Loader.objects;var a=new Object;o.setObject=function(){o.objects.push(o.selector),o.objectIndex=o.getObjectIndex(),a.params=t.ownage.Loader.objectOptions[o.objectIndex],o.params=a.params,o.overlaySel="oloader_overlay_"+o.objectIndex,o.canvasSel="oloader_canvas_"+o.objectIndex,o.loaderSel="oloader_loader_"+o.objectIndex,o.isSet=!0},o.init=function(){if(o.setObject(),"string"!=typeof i)t.ownage.Loader.objectOptions[o.objectIndex]={},t.extend(t.ownage.Loader.objectOptions[o.objectIndex],t.ownage.Loader.defaultOptions,i),o.params=t.ownage.Loader.objectOptions[o.objectIndex],o.params.showOnInit===!0&&o.show();else switch(i){case"preloadImages":o.preloadImages();break;case"show":o.show();break;case"hide":o.hide();break;case"adjust":o.adjustLoader()}},o.executeOnStart=function(){"function"==typeof o.params.onStart&&o.params.onStart()},o.getObjectIndex=function(){for(var t=0;t<o.objects.length;t++)if(o.selector===o.objects[t])return t+"_"+s},o.removeCanvas=function(){t("#"+o.canvasSel).remove()},o.adjustLoader=function(){var e=o.context.offset(),i=o.context.outerWidth(!0),n=o.context.outerHeight(!0);if(0==t(o.selector).length&&o.removeCanvas(),e.left!=o.lastPosLeft||e.top!=o.lastPosTop||i!=o.lastWidth||n!=o.lastHeight||o.lastLoaderWidth!=t("#"+o.loaderSel).outerWidth()){var s="absolute";if(o.params.wholeWindow){i=t(window).width(),n=t(window).height();var e=new Object;e.left=0,e.top=0,s="fixed"}o.lastPosLeft=e.left,o.lastPosTop=e.top,o.lastWidth=i,o.lastHeight=n,o.lastLoaderWidth=t("#"+o.loaderSel).outerWidth(),t("#"+o.overlaySel).css({position:s,left:"0px",top:"0px",width:i,height:n}),t("#"+o.canvasSel).css({position:s,left:e.left+"px",top:e.top+"px",width:i,height:n,zIndex:100}),t("#"+o.loaderSel).css({position:s,left:"50%",top:"50%",marginLeft:-parseInt(t("#"+o.loaderSel).outerWidth()/2),marginTop:-parseInt(t("#"+o.loaderSel).outerHeight()/2)})}},o.setCheckInterval=function(){t("#"+o.overlaySel).css({background:o.params.backgroundColor}),o.checkInterval=setInterval(function(){o.adjustLoader()},o.params.checkIntervalTime)},o.show=function(){if(!(t("#"+o.canvasSel).length>0||o.context.parent().hasClass("oloader_canvas")||o.context.hasClass("oloader_canvas"))){t("body").append("<div id='"+o.canvasSel+"' class='oloader_canvas' style='padding:0px;margin:0px;display:none;overflow:hidden'></div>"),o.params.modal&&(t("#"+o.canvasSel).append("<div id='"+o.overlaySel+"'></div>"),t("#"+o.overlaySel).hide().fadeTo(0,o.params.fadeLevel)),o.params.showLoader&&t("#"+o.canvasSel).append(o.setStyle()),t("#"+o.canvasSel).hide().fadeTo(o.params.fadeInTime,1),o.lockOverflow(),o.setCheckInterval(),o.executeOnStart(),o.adjustLoader(),o.executeEffect(1);var e;0!==o.params.hideAfter&&(e=setTimeout(function(){o.hide()},o.params.hideAfter)),o.params.waitLoad&&o.context.load(function(){o.hide()}),o.params.url!==!1&&t.ajax({url:o.params.url,type:o.params.type,data:o.params.data,success:function(t){o.params.successData=t,o.params.hideAfter||(o.params.updateOnComplete||o.updateContent(),o.hide())},error:function(t,e,i){"function"==typeof o.params.onError&&o.params.onError(t,e,i)}})}},o.hide=function(){var e=!1;o.executeEffect(!1),t("#"+o.canvasSel).fadeTo(o.params.fadeOutTime,0,function(){e||(e=!0,sucData="undefined","function"==typeof o.params.complete&&(o.params.successData&&(sucData=o.params.successData),o.params.complete(sucData)),o.params.updateOnComplete&&o.updateContent()),clearInterval(o.checkInterval),t(this).remove(),o.lockOverflow(!0)})},o.updateContent=function(){sucData="Load failed.",o.params.successData&&(sucData=o.params.successData),o.params.updateContent&&o.params.url!==!1&&o.context.html(sucData),o.adjustLoader()},o.lockOverflow=function(e){o.params.lockOverflow&&(e?t(o.params.context).css("overflow","auto"):t(o.params.context).css("overflow","hidden"))},o.setStyle=function(){var t="";if("string"==typeof o.params.style)return"<div id='"+o.loaderSel+"' style='position:absolute;left:0;top:0;width:100%;height:100%;'>"+o.params.style+"</div>";switch(o.params.style){case 4:t="<img src='"+o.params.image+"' id='"+o.loaderSel+"' style='box-shadow:0px 0px 20px #000;position:absolute;padding:"+o.params.imagePadding+"px;background:"+o.params.imageBgColor+"' alt='Loading...' />";break;case 3:t="<img src='"+o.params.image+"' id='"+o.loaderSel+"' style='box-shadow:0px 0px 20px #222;border-radius:1000px;position:absolute;padding:"+o.params.imagePadding+"px;background:"+o.params.imageBgColor+"' alt='Loading...' />";break;case 2:t="<div id='"+o.loaderSel+"' style='position:absolute;width:100%;padding-top:10px;padding-bottom:10px;",t+="text-align:center;background-color:"+o.params.imageBgColor+"'><img src='"+o.params.image+"' alt='Loading...' /></div>";break;case 0:t="<img src='"+o.params.image+"' id='"+o.loaderSel+"' style='position:absolute' alt='Loading...' />";break;case 1:default:t="<img src='"+o.params.image+"' id='"+o.loaderSel+"' style='box-shadow:1px 1px #000;border-radius:1000px;position:absolute;padding:"+o.params.imagePadding+"px;background:"+o.params.imageBgColor+"' alt='Loading...' />"}return t},o.executeEffect=function(e){switch(o.params.effect){case"doornslide":case"door":var i="oloader_effect_door_"+o.objectIndex;"oloader_effect_door_2_"+o.objectIndex;if(myData={backgroundColor:o.params.backgroundColor,fadeLevel:o.params.fadeLevel},o.params.effectData&&(myData=o.params.effectData),e?(t("#"+o.overlaySel).after("<div id='"+i+"'></div>"),t("#"+i).css({position:"absolute",overflow:"hidden",top:"50%",left:"0px",width:"100%",height:"0px",marginTop:"0px","box-shadow":"0px 0px 25px "+myData.backgroundColor,background:myData.backgroundColor,opacity:0}).animate({height:"150px",marginTop:"-75px",opacity:myData.fadeLevel},o.params.fadeInTime+250,"easeOutBounce")):t("#"+i).animate({height:"0px",marginTop:"0px"},o.params.fadeOutTime+250,"easeOutBounce"),"doornslide"!==o.params.effect)break;case"slide":var n=t("#"+o.overlaySel).css("left");e?t("#"+o.overlaySel).css("left",-t("#"+o.overlaySel).width()):n=t("#"+o.overlaySel).width(),t("#"+o.overlaySel).animate({left:n},e?o.params.fadeInTime:o.params.fadeOutTime)}},o.preloadImages=function(){for(var e=["images/ownageLoader/loader1.gif","images/ownageLoader/loader2.gif","images/ownageLoader/loader3.gif","images/ownageLoader/loader4.gif","images/ownageLoader/loader5.gif","images/ownageLoader/loader6.gif","images/ownageLoader/loader7.gif"],i="",n=0;n<e.length;n++)i+="<img src='"+e[n]+"' alt='Loading...' />";t("body").append("<div class='oloader_image_preload' style='position:absolute;left:-5000px;top:-5000px;'>"+i+"</div>"),t(".oloader_image_preload").hide()},o.init()},t.ownage.Loader.defaultOptions={image:"images/ownageLoader/loader1.gif",style:1,context:"body",modal:!0,fadeInTime:300,fadeOutTime:300,fadeLevel:.7,backgroundColor:"#000",imageBgColor:"#fff",imagePadding:"10",showOnInit:!0,hideAfter:0,url:!1,type:"GET",data:!1,updateContent:!0,updateOnComplete:!0,showLoader:!0,effect:"",wholeWindow:!1,lockOverflow:!1,waitLoad:!1,checkIntervalTime:100,complete:"",onStart:"",onError:""},t.fn.oLoader=function(e){var i=this.selector,n=0;return this.each(function(){n++,new t.ownage.Loader(this,e,i,n)})},t.ownage.PageLoader=function(e){var n=this;n.options={},t.extend(n.options,t.ownage.PageLoader.defaultOptions,e),n.init=function(){n.additionalImages(),n.done=!1,n.loaded=0,n.total=t(n.options.affectedElements).length,0!=n.total&&(n.options.lockOverflow&&t(n.options.context).css("overflow","hidden"),t(n.options.context).oLoader({wholeWindow:n.options.wholeWindow,backgroundColor:n.options.backgroundColor,fadeInTime:0,fadeOutTime:n.options.fadeOutTime,fadeLevel:n.options.fadeLevel,style:n.options.style,complete:n.options.complete}),n.options.ownStyle||(t("#ownage_page_loader_text").css({position:"absolute",display:n.options.showPercentage?"block":"none",left:"50%",top:"50%",color:n.options.percentageColor,fontSize:n.options.percentageFontSize,zIndex:"1000"}).css({marginTop:-(n.options.progressBarHeight/2)-t("#ownage_page_loader_text").height()}),t("#ownage_page_loader").css({position:"absolute",top:"50%",left:"0px",background:n.options.progressBarColor,height:n.options.progressBarHeight,marginTop:-(n.options.progressBarHeight/2)})),t("#ownage_page_loader").fadeTo(0,n.options.progressBarFadeLevel),t(n.options.affectedElements).load(function(){n.done===!1&&(n.loaded++,n.updateProgressBar())}),t(window).load(function(){n.done=!0,n.loaded=n.total,"function"==typeof n.options.completeLoad&&n.options.completeLoad(),n.updateProgressBar()}))},n.additionalImages=function(){if(0!=n.options.images.length)for(t("body").append("<div style='position:absolute;left:-10000px;top:-10000px;display:none;' id='ownage_page_loader_addImages'></div>"),i=0;i<n.options.images.length;i++)t("#ownage_page_loader_addImages").append("<img src='"+n.options.images[i]+"' />")},n.updateProgressBar=function(){var e=parseInt(n.loaded/n.total*100);e!=n.lastPercentage&&(n.lastPercentage=e,t("#ownage_page_loader_text").html(e+"%"),n.options.ownStyle||t("#ownage_page_loader_text").css({marginLeft:-(t("#ownage_page_loader_text").width()/2)}),t("#ownage_page_loader").stop().animate({width:e+"%"},100),"function"==typeof n.options.update&&n.options.update({loaded:n.loaded,total:n.total,percentage:e}),100===e&&setTimeout(function(){t(n.options.context).oLoader("hide"),n.options.lockOverflow&&t(n.options.context).css("overflow","auto")},n.options.waitAfterEnd))},n.init()},t.ownage.PageLoader.defaultOptions={backgroundColor:"#000",progressBarColor:"#f00",progressBarHeight:3,progressBarFadeLevel:1,showPercentage:!0,percentageColor:"#fff",percentageFontSize:"30px",context:"body",affectedElements:"img,iframe,frame,script",ownStyle:!1,style:"<div id='ownage_page_loader_text'>0%</div><div id='ownage_page_loader'></div>",lockOverflow:!0,images:[],wholeWindow:!0,fadeLevel:1,waitAfterEnd:0,fadeOutTime:500,complete:!1,completeLoad:!1,update:!1},t.oPageLoader=function(e){t.ownage.PageLoader(e)}}(jQuery);