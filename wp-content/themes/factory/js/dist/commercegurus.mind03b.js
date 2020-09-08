!function(e){"use strict";function i(){function i(){e(".toggleList").addClass(n),e(".toggleGrid").removeClass(n),e(".products").fadeOut(300,function(){e(this).removeClass(o).addClass(a).fadeIn(300),e.cookie("product_layout","list",{expires:3,path:"/"})})}function t(){e(".toggleGrid").addClass(n),e(".toggleList").removeClass(n),e(".products").fadeOut(300,function(){e(this).removeClass(a).addClass(o).fadeIn(300),e.cookie("product_layout","grid",{expires:3,path:"/"})})}var n="toggle-active",o="grid-layout",a="list-layout";e(".toggleList").click(function(){e.cookie("product_layout")&&"grid"!=e.cookie("product_layout")||i()}),e(".toggleGrid").click(function(){e.cookie("product_layout")&&"list"!=e.cookie("product_layout")||t()})}function t(){var i="toggle-active";"grid"==e.cookie("product_layout")?(e(".products").removeClass("list-layout").addClass("grid-layout"),e(".toggleGrid").addClass(i)):"list"==e.cookie("product_layout")?(e(".products").removeClass("grid-layout").addClass("list-layout"),e(".toggleList").addClass(i)):e(".toggleGrid").addClass(i)}function n(){e(document).scroll(function(){var i=e(this).scrollTop();e(".banner-text").css({top:i/3+"px",opacity:1-i/510}),e(".category-wrapper").css({"background-position":"center "+-i/2+"px"})})}e(window).scroll(function(){var i=e(".cg-header-fixed-wrapper"),t=e(this).scrollTop(),n=e(".header").height()+200;t>n?i.hasClass("cg-is-fixed")||i.stop().addClass("cg-is-fixed"):i.hasClass("cg-is-fixed")&&i.stop().removeClass("cg-is-fixed")}),e.fn.cg_primary_menu=function(i){var t={capshowmenuChildren:function(e){e.fadeIn(100).css({display:"list-item",listStyle:"none"}).find("li").css({listStyle:"none"})},capcalcColumns:function(i){var t=i.find(".container > ul > li.menu-item-has-children").length,n=i.find(".container > ul > li").outerWidth(),o=20;t>1&&(n=n*t+o,i.css({width:n}));var a=e(".cg-wp-menu-wrapper").outerWidth(),s=e(".cg-wp-menu-wrapper").offset().left,l=i.offset().left-s,c=a-(l+n);0>c&&i.css({left:"auto",right:0})},openOnClick:function(i,t){var o=0,a="current",s=e(".header-wrapper"),l=i;if(l.parent().hasClass(a))t.preventDefault(),l.parent().removeClass(a),l.next().stop().slideUp(n.animTime),s.stop().animate({paddingBottom:0},n.animTime);else{if(l.parent().find(">div").length<1)return;t.preventDefault(),l.parent().parent().find("."+a).length>0&&(o=n.animTime,s.stop().animate({paddingBottom:0},n.animTime)),l.parent().parent().find("."+a).removeClass(a).find(">div").stop().slideUp(n.animTime),setTimeout(function(){l.parent().addClass(a),s.stop().animate({paddingBottom:l.next().height()+50},n.animTime),l.next().stop().slideDown(n.animTime)},o)}}},n=e.extend({type:"default",animTime:250,openByClick:!0},i);return this.find(">li").hover(function(){if(!e(this).hasClass("open-by-click")||!n.openByClick&&e(this).hasClass("open-by-click")){n.openByClick&&(e(".open-by-click.current").find(">a").click(),e(this).find(">a").unbind("click"));var i=e(this).find("> .cg-submenu-ddown");t.capshowmenuChildren(i),"columns"==n.type&&t.capcalcColumns(i)}else e(this).find(">a").unbind("click"),e(this).find(">a").bind("click",function(i){t.openOnClick(e(this),i)})},function(){(!e(this).hasClass("open-by-click")||!n.openByClick&&e(this).hasClass("open-by-click"))&&e(this).find("> .cg-submenu-ddown").fadeOut(100).attr("style","")}),this},e(".cg-primary-menu .menu").cg_primary_menu({type:"default"}),e(".cg-header-fixed .menu").cg_primary_menu({openByClick:!1}),e(window).load(function(){e(".product-cat-meta").addClass("show animate")}),e("#showcaseimg .flexslider").flexslider({controlNav:!1,animation:"fade",slideshow:!0,touch:!0,slideshowSpeed:4500,animationSpeed:1600,pauseOnAction:!0,pauseOnHover:!1,start:function(i){e(i).delay(200).fadeTo(600,1),e(".scase").removeClass("preloading")}}),e("#mobile-menu").meanmenu({meanMenuContainer:"#load-mobile-menu",meanScreenWidth:"1100",meanMenuClose:"<span></span><span></span><span></span>"}),navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)&&e(".cg-video").remove(),/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent)||e(".animate").waypoint(function(e){var i=jQuery(this).attr("data-animate");"down"==e?(jQuery(this).addClass(i),jQuery(this).addClass("animated")):(jQuery(this).removeClass(i),jQuery(this).removeClass("animated"))},{offset:"100%"}),i(),t(),e.fn.vAlign=function(){return this.each(function(){var i=e(this).outerHeight();e(this).css("margin-bottom",-i/2)})},e(".cg-strip .valign-center").imagesLoaded(function(){e(".cg-strip .valign-center").vAlign()}),e(".product-tooltip").each(function(){e(this).qtip({content:{text:e(this).next(".tooltiptext")},position:{my:"bottom center",at:"top center",container:e("div.product-tooltip"),adjust:{x:39}},style:{classes:"qtip-blue"}})}),e(".cg-prod-lvl1").magnificPopup({delegate:"a",type:"image",tLoading:"Loading....",mainClass:"magnific-open",removalDelay:200,closeOnContentClick:!0,gallery:{enabled:!0,navigateByImgClick:!1,preload:[0,1]},image:{verticalFit:!1,cursor:null,tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}}),e(".cg-size-guide").magnificPopup({delegate:"a",type:"image",tLoading:"Loading....",mainClass:"magnific-open",removalDelay:200,closeOnContentClick:!0,gallery:{enabled:!1,navigateByImgClick:!1,preload:[0,1]},image:{verticalFit:!1,cursor:null,tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}});jRespond([{label:"small",enter:0,exit:768},{label:"medium",enter:768,exit:980},{label:"large",enter:980,exit:1e4}]);e(".accordionButton").click(function(){e(".accordionButton").removeClass("on"),e(".accordionContent").slideUp("normal"),e(this).next().is(":hidden")===!0&&(e(this).addClass("on"),e(this).next().slideDown("normal"))}),e(".accordionContent").hide(),n(),e(".selectpicker").selectpicker(),e(document).ready(function(){e(".hover").hover(function(){e(this).addClass("flip")},function(){e(this).removeClass("flip")})}),e(window).scroll(function(){var i=e(this).scrollTop();i>550&&e(".shipping-block").css("background-position",parseInt(e(this).scrollTop()-400))}),e(document).ready(function(){var i=300,t=1200,n=700,o=e(".cd-top");e(window).scroll(function(){e(this).scrollTop()>i?o.addClass("cd-is-visible"):o.removeClass("cd-is-visible cd-fade-out"),e(this).scrollTop()>t&&o.addClass("cd-fade-out")}),o.on("click",function(i){i.preventDefault(),e("body,html").animate({scrollTop:0},n)})}),e(document).ready(function(){e(".cg-show-announcements").css("display","block"),e(".cg-show-announcements").inewsticker({speed:4e3,effect:"fade",delay_after:2e3})}),e(window).load(function(){var i=e(".product-nocols .cg-product-gallery-img");e(".product-nocols .cg-prod-gallery-thumbs").css({height:i.height()})}),e(".cross-sells h2").wrapInner("<span />")}(jQuery);