/**
 * oLoader v0.1
 *	@author: Jakub Sedlacek
 *	@website: http://js.ownage.sk/
 *	@project website: http://projects.ownage.sk/jquery/oLoader 
 **/

 (function(e){if(!e.ownage){e.ownage=new Object}e.ownage.Loader=function(t,n,r,i){var s=this;s.el=t;s.$el=e(t);s.selector=r;s.context=s.$el;s.checkInterval=false;if(!e.ownage.Loader.objects){e.ownage.Loader.objects=new Array;e.ownage.Loader.objectOptions=new Array}s.objects=e.ownage.Loader.objects;var o=new Object;s.setObject=function(){s.objects.push(s.selector);s.objectIndex=s.getObjectIndex();o.params=e.ownage.Loader.objectOptions[s.objectIndex];s.params=o.params;s.overlaySel="oloader_overlay_"+s.objectIndex;s.canvasSel="oloader_canvas_"+s.objectIndex;s.loaderSel="oloader_loader_"+s.objectIndex;s.isSet=true};s.init=function(){s.setObject();if(typeof n==="string"){switch(n){case"preloadImages":s.preloadImages();break;case"show":s.show();break;case"hide":s.hide();break;case"adjust":s.adjustLoader();break}return}else{e.ownage.Loader.objectOptions[s.objectIndex]={};e.extend(e.ownage.Loader.objectOptions[s.objectIndex],e.ownage.Loader.defaultOptions,n);s.params=e.ownage.Loader.objectOptions[s.objectIndex];if(s.params.showOnInit===true){s.show()}}};s.executeOnStart=function(){if(typeof s.params.onStart==="function"){s.params.onStart()}};s.getObjectIndex=function(){for(var e=0;e<s.objects.length;e++){if(s.selector===s.objects[e])return e+"_"+i}};s.removeCanvas=function(){e("#"+s.canvasSel).remove()};s.adjustLoader=function(){var t=s.context.offset();var n=s.context.outerWidth(true);var r=s.context.outerHeight(true);if(e(s.selector).length==0){s.removeCanvas()}if(t.left==s.lastPosLeft&&t.top==s.lastPosTop&&n==s.lastWidth&&r==s.lastHeight&&s.lastLoaderWidth==e("#"+s.loaderSel).outerWidth()){return}var i="absolute";if(s.params.wholeWindow){n=e(window).width();r=e(window).height();var t=new Object;t.left=0;t.top=0;i="fixed"}s.lastPosLeft=t.left;s.lastPosTop=t.top;s.lastWidth=n;s.lastHeight=r;s.lastLoaderWidth=e("#"+s.loaderSel).outerWidth();e("#"+s.overlaySel).css({position:i,left:"0px",top:"0px",width:n,height:r});e("#"+s.canvasSel).css({position:i,left:t.left+"px",top:t.top+"px",width:n,height:r,zIndex:100});e("#"+s.loaderSel).css({position:i,left:"50%",top:"50%",marginLeft:-parseInt(e("#"+s.loaderSel).outerWidth()/2),marginTop:-parseInt(e("#"+s.loaderSel).outerHeight()/2)})};s.setCheckInterval=function(){e("#"+s.overlaySel).css({background:s.params.backgroundColor});s.checkInterval=setInterval(function(){s.adjustLoader()},s.params.checkIntervalTime)};s.show=function(){if(e("#"+s.canvasSel).length>0)return;if(s.context.parent().hasClass("oloader_canvas")||s.context.hasClass("oloader_canvas"))return;e("body").append("<div id='"+s.canvasSel+"' class='oloader_canvas' style='padding:0px;margin:0px;display:none;overflow:hidden'></div>");if(s.params.modal){e("#"+s.canvasSel).append("<div id='"+s.overlaySel+"'></div>");e("#"+s.overlaySel).hide().fadeTo(0,s.params.fadeLevel)}if(s.params.showLoader){e("#"+s.canvasSel).append(s.setStyle())}e("#"+s.canvasSel).hide().fadeTo(s.params.fadeInTime,1);s.lockOverflow();s.setCheckInterval();s.executeOnStart();s.adjustLoader();s.executeEffect(1);var t;if(s.params.hideAfter!==0){t=setTimeout(function(){s.hide()},s.params.hideAfter)}if(s.params.waitLoad){s.context.load(function(){s.hide()})}if(s.params.url!==false){e.ajax({url:s.params.url,type:s.params.type,data:s.params.data,success:function(e){s.params.successData=e;if(!s.params.hideAfter){if(!s.params.updateOnComplete){s.updateContent()}s.hide()}},error:function(e,t,n){if(typeof s.params.onError=="function"){s.params.onError(e,t,n)}}})}};s.hide=function(){var t=false;s.executeEffect(false);e("#"+s.canvasSel).fadeTo(s.params.fadeOutTime,0,function(){if(!t){t=true;sucData="undefined";if(typeof s.params.complete==="function"){if(s.params.successData)sucData=s.params.successData;s.params.complete(sucData)}if(s.params.updateOnComplete){s.updateContent()}}clearInterval(s.checkInterval);e(this).remove();s.lockOverflow(true)})};s.updateContent=function(){sucData="Load failed.";if(s.params.successData)sucData=s.params.successData;if(s.params.updateContent&&s.params.url!==false){s.context.html(sucData)}s.adjustLoader()};s.lockOverflow=function(t){if(s.params.lockOverflow){if(!t){e(s.params.context).css("overflow","hidden")}else{e(s.params.context).css("overflow","auto")}}};s.setStyle=function(){var e="";if(typeof s.params.style==="string"){return"<div id='"+s.loaderSel+"' style='position:absolute;left:0;top:0;width:100%;height:100%;'>"+s.params.style+"</div>"}switch(s.params.style){case 4:e="<img src='"+s.params.image+"' id='"+s.loaderSel+"' style='box-shadow:0px 0px 20px #000;position:absolute;padding:"+s.params.imagePadding+"px;background:"+s.params.imageBgColor+"' alt='Loading...' />";break;case 3:e="<img src='"+s.params.image+"' id='"+s.loaderSel+"' style='box-shadow:0px 0px 20px #222;border-radius:1000px;position:absolute;padding:"+s.params.imagePadding+"px;background:"+s.params.imageBgColor+"' alt='Loading...' />";break;case 2:e="<div id='"+s.loaderSel+"' style='position:absolute;width:100%;padding-top:10px;padding-bottom:10px;";e+="text-align:center;background-color:"+s.params.imageBgColor+"'><img src='"+s.params.image+"' alt='Loading...' /></div>";break;case 0:e="<img src='"+s.params.image+"' id='"+s.loaderSel+"' style='position:absolute' alt='Loading...' />";break;case 1:default:e="<img src='"+s.params.image+"' id='"+s.loaderSel+"' style='box-shadow:1px 1px #000;border-radius:1000px;position:absolute;padding:"+s.params.imagePadding+"px;background:"+s.params.imageBgColor+"' alt='Loading...' />";break}return e};s.executeEffect=function(t){switch(s.params.effect){case"doornslide":case"door":var n="oloader_effect_door_"+s.objectIndex;var r="oloader_effect_door_2_"+s.objectIndex;myData={backgroundColor:s.params.backgroundColor,fadeLevel:s.params.fadeLevel};if(s.params.effectData){myData=s.params.effectData}if(t){e("#"+s.overlaySel).after("<div id='"+n+"'></div>");e("#"+n).css({position:"absolute",overflow:"hidden",top:"50%",left:"0px",width:"100%",height:"0px",marginTop:"0px","box-shadow":"0px 0px 25px "+myData.backgroundColor,background:myData.backgroundColor,opacity:0}).animate({height:"150px",marginTop:"-75px",opacity:myData.fadeLevel},s.params.fadeInTime+250,"easeOutBounce")}else{e("#"+n).animate({height:"0px",marginTop:"0px"},s.params.fadeOutTime+250,"easeOutBounce")}if(s.params.effect!=="doornslide"){break};case"slide":var i=e("#"+s.overlaySel).css("left");if(t){e("#"+s.overlaySel).css("left",-e("#"+s.overlaySel).width())}else{i=e("#"+s.overlaySel).width()}e("#"+s.overlaySel).animate({left:i},t?s.params.fadeInTime:s.params.fadeOutTime);break}};s.preloadImages=function(){var t=["images/ownageLoader/loader1.gif","images/ownageLoader/loader2.gif","images/ownageLoader/loader3.gif","images/ownageLoader/loader4.gif","images/ownageLoader/loader5.gif","images/ownageLoader/loader6.gif","images/ownageLoader/loader7.gif"];var n="";for(var r=0;r<t.length;r++){n+="<img src='"+t[r]+"' alt='Loading...' />"}e("body").append("<div class='oloader_image_preload' style='position:absolute;left:-5000px;top:-5000px;'>"+n+"</div>");e(".oloader_image_preload").hide()};s.init()};e.ownage.Loader.defaultOptions={image:"images/ownageLoader/loader1.gif",style:1,context:"body",modal:true,fadeInTime:300,fadeOutTime:300,fadeLevel:.7,backgroundColor:"#000",imageBgColor:"#fff",imagePadding:"10",showOnInit:true,hideAfter:0,url:false,type:"GET",data:false,updateContent:true,updateOnComplete:true,showLoader:true,effect:"",wholeWindow:false,lockOverflow:false,waitLoad:false,checkIntervalTime:100,complete:"",onStart:"",onError:""};e.fn.oLoader=function(t){var n=this.selector;var r=0;return this.each(function(){r++;new e.ownage.Loader(this,t,n,r)})};e.ownage.PageLoader=function(t){var n=this;n.options={};e.extend(n.options,e.ownage.PageLoader.defaultOptions,t);n.init=function(){n.additionalImages();n.done=false;n.loaded=0;n.total=e(n.options.affectedElements).length;if(n.total==0)return;if(n.options.lockOverflow){e(n.options.context).css("overflow","hidden")}e(n.options.context).oLoader({wholeWindow:n.options.wholeWindow,backgroundColor:n.options.backgroundColor,fadeInTime:0,fadeOutTime:n.options.fadeOutTime,fadeLevel:n.options.fadeLevel,style:n.options.style,complete:n.options.complete});if(!n.options.ownStyle){e("#ownage_page_loader_text").css({position:"absolute",display:n.options.showPercentage?"block":"none",left:"50%",top:"50%",color:n.options.percentageColor,fontSize:n.options.percentageFontSize,zIndex:"1000"}).css({marginTop:-(n.options.progressBarHeight/2)-e("#ownage_page_loader_text").height()});e("#ownage_page_loader").css({position:"absolute",top:"50%",left:"0px",background:n.options.progressBarColor,height:n.options.progressBarHeight,marginTop:-(n.options.progressBarHeight/2)})}e("#ownage_page_loader").fadeTo(0,n.options.progressBarFadeLevel);e(n.options.affectedElements).load(function(){if(n.done===false){n.loaded++;n.updateProgressBar()}});e(window).load(function(){n.done=true;n.loaded=n.total;if(typeof n.options.completeLoad=="function"){n.options.completeLoad()}n.updateProgressBar()})};n.additionalImages=function(){if(n.options.images.length==0)return;e("body").append("<div style='position:absolute;left:-10000px;top:-10000px;display:none;' id='ownage_page_loader_addImages'></div>");for(i=0;i<n.options.images.length;i++){e("#ownage_page_loader_addImages").append("<img src='"+n.options.images[i]+"' />")}};n.updateProgressBar=function(){var t=parseInt(n.loaded/n.total*100);if(t==n.lastPercentage)return;n.lastPercentage=t;e("#ownage_page_loader_text").html(t+"%");if(!n.options.ownStyle){e("#ownage_page_loader_text").css({marginLeft:-(e("#ownage_page_loader_text").width()/2)})}e("#ownage_page_loader").stop().animate({width:t+"%"},100);if(typeof n.options.update=="function"){n.options.update({loaded:n.loaded,total:n.total,percentage:t})}if(t===100){setTimeout(function(){e(n.options.context).oLoader("hide");if(n.options.lockOverflow){e(n.options.context).css("overflow","auto")}},n.options.waitAfterEnd)}};n.init()};e.ownage.PageLoader.defaultOptions={backgroundColor:"#000",progressBarColor:"#f00",progressBarHeight:3,progressBarFadeLevel:1,showPercentage:true,percentageColor:"#fff",percentageFontSize:"30px",context:"body",affectedElements:"img,iframe,frame,script",ownStyle:false,style:"<div id='ownage_page_loader_text'>0%</div><div id='ownage_page_loader'></div>",lockOverflow:true,images:[],wholeWindow:true,fadeLevel:1,waitAfterEnd:0,fadeOutTime:500,complete:false,completeLoad:false,update:false};e.oPageLoader=function(t){e.ownage.PageLoader(t)}})(jQuery)
