(function(G,k,U){var H={transition:"elastic",speed:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,current:"image {current} of {total}",previous:"previous",next:"next",close:"x",open:false,returnFocus:false,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:false},v="colorbox",Q="cbox",p=Q+"Element",T=Q+"_open",e=Q+"_load",S=Q+"_complete",s=Q+"_cleanup",Z=Q+"_closed",i=Q+"_purge",t=G.browser.msie&&!G.support.opacity,ab=t&&G.browser.version<7,Y=Q+"_IE6",O,ac,ad,d,E,o,b,N,c,X,K,j,h,n,r,V,q,P,x,z,aa,ae,l,g,a,u,F,m,B,W,J,D,y,I;function M(ah,af,ag){ag=k.createElement("div");if(ah){ag.id=Q+ah}ag.style.cssText=af||"";return G(ag)}function L(af,ag){return Math.round((/%/.test(af)?((ag==="x"?X.width():X.height())/100):1)*parseInt(af,10))}function A(af){return aa.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(af)}function R(af){aa=G.extend({},G.data(u,v));for(af in aa){if(G.isFunction(aa[af])&&af.substring(0,2)!=="on"){aa[af]=aa[af].call(u)}}aa.rel=aa.rel||u.rel||"nofollow";aa.href=aa.href||G(u).attr("href");aa.title=aa.title||u.title;if(typeof aa.href==="string"){aa.href=G.trim(aa.href)}}function C(af,ag){if(ag){ag.call(u)}G.event.trigger(af)}function w(){var ag,ai=Q+"Slideshow_",aj="click."+Q,ak,ah,af;if(aa.slideshow&&c[1]){ak=function(){V.text(aa.slideshowStop).unbind(aj).bind(S,function(){if(F<c.length-1||aa.loop){ag=setTimeout(I.next,aa.slideshowSpeed)}}).bind(e,function(){clearTimeout(ag)}).one(aj+" "+s,ah);ac.removeClass(ai+"off").addClass(ai+"on");ag=setTimeout(I.next,aa.slideshowSpeed)};ah=function(){clearTimeout(ag);V.text(aa.slideshowStart).unbind([S,e,s,aj].join(" ")).one(aj,ak);ac.removeClass(ai+"on").addClass(ai+"off")};if(aa.slideshowAuto){ak()}else{ah()}}else{ac.removeClass(ai+"off "+ai+"on")}}function f(ag){if(!J){u=ag;R();c=G(u);F=0;if(aa.rel!=="nofollow"){c=G("."+p).filter(function(){var ah=G.data(this,v).rel||this.rel;return(ah===aa.rel)});F=c.index(u);if(F===-1){c=c.add(u);F=c.length-1}}if(!B){B=W=true;ac.show();if(aa.returnFocus){try{u.blur();G(u).one(Z,function(){try{this.focus()}catch(ah){}})}catch(af){}}O.css({opacity:+aa.opacity,cursor:aa.overlayClose?"pointer":"auto"}).show();aa.w=L(aa.initialWidth,"x");aa.h=L(aa.initialHeight,"y");I.position();if(ab){X.bind("resize."+Y+" scroll."+Y,function(){O.css({width:X.width(),height:X.height(),top:X.scrollTop(),left:X.scrollLeft()})}).trigger("resize."+Y)}C(T,aa.onOpen);z.add(n).hide();x.html(aa.close).show()}I.load(true)}}I=G.fn[v]=G[v]=function(af,ah){var ag=this;af=af||{};if(!ag[0]){if(ag.selector){return ag}ag=G("<a/>");af.open=true}if(ah){af.onComplete=ah}ag.each(function(){G.data(this,v,G.extend({},G.data(this,v)||H,af));G(this).addClass(p)});if((G.isFunction(af.open)&&af.open.call(ag))||af.open){f(ag[0])}return ag};I.init=function(){X=G(U);ac=M().attr({id:v,"class":t?Q+(ab?"IE6":"IE"):""});O=M("Overlay",ab?"position:absolute":"").hide();ad=M("Wrapper");d=M("Content").append(K=M("LoadedContent","width:0; height:0; overflow:hidden"),h=M("LoadingOverlay").add(M("LoadingGraphic")),n=M("Title"),r=M("Current"),q=M("Next"),P=M("Previous"),V=M("Slideshow").bind(T,w),x=M("Close"));ad.append(M().append(M("TopLeft"),E=M("TopCenter"),M("TopRight")),M(false,"clear:left").append(o=M("MiddleLeft"),d,b=M("MiddleRight")),M(false,"clear:left").append(M("BottomLeft"),N=M("BottomCenter"),M("BottomRight"))).children().children().css({"float":"left"});j=M(false,"position:absolute; width:9999px; visibility:hidden; display:none");G("body").prepend(O,ac.append(ad,j));d.children().hover(function(){G(this).addClass("hover")},function(){G(this).removeClass("hover")}).addClass("hover");ae=E.height()+N.height()+d.outerHeight(true)-d.height();l=o.width()+b.width()+d.outerWidth(true)-d.width();g=K.outerHeight(true);a=K.outerWidth(true);ac.css({"padding-bottom":ae,"padding-right":l}).hide();q.click(function(){I.next()});P.click(function(){I.prev()});x.click(function(){I.close()});z=q.add(P).add(r).add(V);d.children().removeClass("hover");O.click(function(){if(aa.overlayClose){I.close()}});G(k).bind("keydown."+Q,function(ag){var af=ag.keyCode;if(B&&aa.escKey&&af===27){ag.preventDefault();I.close()}if(B&&aa.arrowKey&&c[1]){if(af===37){ag.preventDefault();P.click()}else{if(af===39){ag.preventDefault();q.click()}}}})};I.remove=function(){ac.add(O).remove();G("."+p).removeData(v).removeClass(p)};I.position=function(ag,af){var ai=0,ah=0;X.unbind("resize."+Q);ac.hide();if(aa.fixed&&!ab){ac.css({position:"fixed"})}else{ai=X.scrollTop();ah=X.scrollLeft();ac.css({position:"absolute"})}if(aa.right!==false){ah+=Math.max(X.width()-aa.w-a-l-L(aa.right,"x"),0)}else{if(aa.left!==false){ah+=L(aa.left,"x")}else{ah+=Math.round(Math.max(X.width()-aa.w-a-l,0)/2)}}if(aa.bottom!==false){ai+=Math.max(k.documentElement.clientHeight-aa.h-g-ae-L(aa.bottom,"y"),0)}else{if(aa.top!==false){ai+=L(aa.top,"y")}else{ai+=Math.round(Math.max(k.documentElement.clientHeight-aa.h-g-ae,0)/2)}}ac.show();ag=(ac.width()===aa.w+a&&ac.height()===aa.h+g)?0:ag||0;ad[0].style.width=ad[0].style.height="9999px";function aj(ak){E[0].style.width=N[0].style.width=d[0].style.width=ak.style.width;h[0].style.height=h[1].style.height=d[0].style.height=o[0].style.height=b[0].style.height=ak.style.height}ac.dequeue().animate({width:aa.w+a,height:aa.h+g,top:ai,left:ah},{duration:ag,complete:function(){aj(this);W=false;ad[0].style.width=(aa.w+a+l)+"px";ad[0].style.height=(aa.h+g+ae)+"px";if(af){af()}setTimeout(function(){X.bind("resize."+Q,I.position)},1)},step:function(){aj(this)}})};I.resize=function(af){if(B){af=af||{};if(af.width){aa.w=L(af.width,"x")-a-l}if(af.innerWidth){aa.w=L(af.innerWidth,"x")}K.css({width:aa.w});if(af.height){aa.h=L(af.height,"y")-g-ae}if(af.innerHeight){aa.h=L(af.innerHeight,"y")}if(!af.innerHeight&&!af.height){var ag=K.wrapInner("<div style='overflow:auto'></div>").children();aa.h=ag.height();ag.replaceWith(ag.children())}K.css({height:aa.h});I.position(aa.transition==="none"?0:aa.speed)}};I.prep=function(ag){if(!B){return}var aj,ah=aa.transition==="none"?0:aa.speed;K.remove();K=M("LoadedContent").append(ag);function af(){aa.w=aa.w||K.width();aa.w=aa.mw&&aa.mw<aa.w?aa.mw:aa.w;return aa.w}function ai(){aa.h=aa.h||K.height();aa.h=aa.mh&&aa.mh<aa.h?aa.mh:aa.h;return aa.h}K.hide().appendTo(j.show()).css({width:af(),overflow:aa.scrolling?"auto":"hidden"}).css({height:ai()}).prependTo(d);j.hide();G(m).css({"float":"none"});if(ab){G("select").not(ac.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(s,function(){this.style.visibility="inherit"})}aj=function(){var ap,ar,an,am,ao=c.length,al,ak;if(!B){return}function aq(){if(t){ac[0].style.removeAttribute("filter")}}ak=function(){clearTimeout(y);h.hide();C(S,aa.onComplete)};if(t){if(m){K.fadeIn(100)}}n.html(aa.title).add(K).show();if(ao>1){if(typeof aa.current==="string"){r.html(aa.current.replace("{current}",F+1).replace("{total}",ao)).show()}q[(aa.loop||F<ao-1)?"show":"hide"]().html(aa.next);P[(aa.loop||F)?"show":"hide"]().html(aa.previous);ap=F?c[F-1]:c[ao-1];an=F<ao-1?c[F+1]:c[0];if(aa.slideshow){V.show()}if(aa.preloading){am=G.data(an,v).href||an.href;ar=G.data(ap,v).href||ap.href;am=G.isFunction(am)?am.call(an):am;ar=G.isFunction(ar)?ar.call(ap):ar;if(A(am)){G("<img/>")[0].src=am}if(A(ar)){G("<img/>")[0].src=ar}}}else{z.hide()}if(aa.iframe){al=G("<iframe/>").addClass(Q+"Iframe")[0];if(aa.fastIframe){ak()}else{G(al).one("load",ak)}al.name=Q+(+new Date());al.src=aa.href;if(!aa.scrolling){al.scrolling="no"}if(t){al.frameBorder=0;al.allowTransparency="true"}G(al).appendTo(K).one(i,function(){al.src="//about:blank"})}else{ak()}if(aa.transition==="fade"){ac.fadeTo(ah,1,aq)}else{aq()}};if(aa.transition==="fade"){ac.fadeTo(ah,0,function(){I.position(0,aj)})}else{I.position(ah,aj)}};I.load=function(ah){var ag,ai,af=I.prep;W=true;m=false;u=c[F];if(!ah){R()}C(i);C(e,aa.onLoad);aa.h=aa.height?L(aa.height,"y")-g-ae:aa.innerHeight&&L(aa.innerHeight,"y");aa.w=aa.width?L(aa.width,"x")-a-l:aa.innerWidth&&L(aa.innerWidth,"x");aa.mw=aa.w;aa.mh=aa.h;if(aa.maxWidth){aa.mw=L(aa.maxWidth,"x")-a-l;aa.mw=aa.w&&aa.w<aa.mw?aa.w:aa.mw}if(aa.maxHeight){aa.mh=L(aa.maxHeight,"y")-g-ae;aa.mh=aa.h&&aa.h<aa.mh?aa.h:aa.mh}ag=aa.href;y=setTimeout(function(){h.show()},100);if(aa.inline){M().hide().insertBefore(G(ag)[0]).one(i,function(){G(this).replaceWith(K.children())});af(G(ag))}else{if(aa.iframe){af(" ")}else{if(aa.html){af(aa.html)}else{if(A(ag)){G(m=new Image()).addClass(Q+"Photo").error(function(){aa.title=false;af(M("Error").text("This image could not be loaded"))}).load(function(){var aj;m.onload=null;if(aa.scalePhotos){ai=function(){m.height-=m.height*aj;m.width-=m.width*aj};if(aa.mw&&m.width>aa.mw){aj=(m.width-aa.mw)/m.width;ai()}if(aa.mh&&m.height>aa.mh){aj=(m.height-aa.mh)/m.height;ai()}}if(aa.h){m.style.marginTop=Math.max(aa.h-m.height,0)/2+"px"}if(c[1]&&(F<c.length-1||aa.loop)){m.style.cursor="pointer";m.onclick=function(){I.next()}}if(t){m.style.msInterpolationMode="bicubic"}setTimeout(function(){af(m)},1)});setTimeout(function(){m.src=ag},1)}else{if(ag){j.load(ag,aa.data,function(ak,aj,al){af(aj==="error"?M("Error").text("Request unsuccessful: "+al.statusText):G(this).contents())})}}}}}};I.next=function(){if(!W&&c[1]&&(F<c.length-1||aa.loop)){F=F<c.length-1?F+1:0;I.load()}};I.prev=function(){if(!W&&c[1]&&(F||aa.loop)){F=F?F-1:c.length-1;I.load()}};I.close=function(){if(B&&!J){J=true;B=false;C(s,aa.onCleanup);X.unbind("."+Q+" ."+Y);O.fadeTo(200,0);ac.stop().fadeTo(300,0,function(){ac.add(O).css({opacity:1,cursor:"auto"}).hide();C(i);K.remove();setTimeout(function(){J=false;C(Z,aa.onClosed)},1)})}};I.element=function(){return G(u)};I.settings=H;D=function(af){if(!((af.button!==0&&typeof af.button!=="undefined")||af.ctrlKey||af.shiftKey||af.altKey)){af.preventDefault();f(this)}};if(G.fn.delegate){G(k).delegate("."+p,"click",D)}else{G("."+p).live("click",D)}G(I.init)}(jQuery,document,this));