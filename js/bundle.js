!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){for(var n=document.querySelectorAll(".menu-item"),l=document.querySelectorAll(".services__description"),o=0;o<l.length;o++)c(l[o],n[o]);function c(e,t){t.addEventListener("click",(function(){!function(e){for(var t=0;t<n.length;t++)n[t].classList.remove("active"),l[t].classList.add("hidden");var o=document.querySelector("."+e.split(" ")[0]+"."+e.split(" ")[1]);o&&o.classList.remove("hidden")}(e.className),t.classList.add("active")}))}var i=document.querySelectorAll(".menu-modal li");for(o=0;o<i.length;o++)d(i[o]);function d(e){e.addEventListener("click",(function(){!function(e){for(var t=0;t<i.length;t++)i[t].classList.remove("modal-active"),i[t].classList.remove("modal__menu--selected")}(e.className),e.classList.add("modal-active"),e.classList.add("modal__menu--selected")}))}new Swiper(".swiper-container",{roundLengths:!0,translate:250,width:220,height:150,pagination:{el:".swiper-pagination",direction:"vertical"},breakpoints:{768:{allowSlideNext:!1,allowSlidePrev:!1,allowTouchMove:!1}}});window.addEventListener("resize",(function(){window.innerWidth>=768&&(document.querySelector(".swiper-wrapper").style="transform: translate3d(0px, 0px, 0px)!important; transition-duration: 0ms;")})),window.innerWidth>=768&&(document.querySelector(".swiper-wrapper").style="transform: translate3d(0px, 0px, 0px)!important; transition-duration: 0ms;");var s=document.querySelectorAll(".show__showall"),r=document.querySelectorAll(".brands-slide__items"),a=document.querySelectorAll(".show__hideall");s[0].addEventListener("click",(function(){r[0].style.height="100%",s[0].style="display:none",a[0].style="display:block"})),a[0].addEventListener("click",(function(){r[0].style.height="180px",s[0].style="display:block",a[0].style="display:none"})),s[1].addEventListener("click",(function(){r[1].style.height="100%",s[1].style="display:none",a[1].style="display:block"})),a[1].addEventListener("click",(function(){r[1].style.height="190px",s[1].style="display:block",a[1].style="display:none"}));var y=document.querySelector(".services__menu-burger"),u=document.querySelector(".hidemodal"),p=document.querySelector(".modal"),m=document.querySelector(".CPS-main"),f=document.querySelectorAll(".modal-feedback")[1],v=document.querySelectorAll(".leftitems-services__item")[1],h=document.querySelector(".modal-feedback:nth-child(2) header img"),k=document.querySelectorAll(".footeritems__buttons a")[1];y.addEventListener("click",(function(){p.style="display:block",m.style="opacity:0.16"})),u.addEventListener("click",(function(){"block"==window.getComputedStyle(f,null).getPropertyValue("display")?(p.style="display:none",m.style="opacity:0.16"):(p.style="display:none",m.style="opacity:1")})),v.addEventListener("click",(function(){f.style="display:block",m.style="opacity:0.16"})),k.addEventListener("click",(function(){f.style="display:block",m.style="opacity:0.16"})),h.addEventListener("click",(function(){"block"==window.getComputedStyle(p,null).getPropertyValue("display")&&window.innerWidth<1120?(f.style="display:none",m.style="opacity:0.16"):(f.style="display:none",m.style="opacity:1")})),window.addEventListener("resize",(function(){window.innerWidth>=1120?p.style="display:block":(p.style="display:none",m.style="opacity:1")}));var b=document.querySelectorAll(".modal-feedback")[0],S=document.querySelector(".modal-feedback:nth-child(1) header img"),q=document.querySelectorAll(".brands-slide__item3 .btn-order");for(o=0;o<q.length;o++)q[o].addEventListener("click",(function(){b.style="display:block;",m.style="opacity:0.16"})),S.addEventListener("click",(function(){b.style="display:none",m.style="opacity:1"}));var L=document.querySelectorAll(".btn-container .btn-order");L[0].addEventListener("click",(function(){b.style="display:none",m.style="opacity:1"})),L[1].addEventListener("click",(function(){f.style="display:none",m.style="opacity:1"}));var w=document.querySelectorAll(".services__read"),_=document.querySelectorAll(".services__close");document.querySelector(".content-2"),document.querySelector(".content-3"),document.querySelector(".content-4"),document.querySelector(".content-5");w[0].addEventListener("click",(function(){document.querySelector(".content-1 p:nth-child(2)").style="display: block",w[0].style="display: none",_[0].style="display: block"})),_[0].addEventListener("click",(function(){document.querySelector(".content-1 p:nth-child(2)").style="display: none",w[0].style="display: block",_[0].style="display:none"})),w[4].addEventListener("click",(function(){document.querySelector(".content-5 p:nth-child(2)").style="display: block",w[4].style="display: none",_[4].style="display: block"})),_[4].addEventListener("click",(function(){document.querySelector(".content-5 p:nth-child(2)").style="display: none",w[4].style="display: block",_[4].style="display:none"})),w[1].addEventListener("click",(function(){document.querySelector(".content-2 p:nth-child(2)").style="display: block",w[1].style="display: none",_[1].style="display: block"})),_[1].addEventListener("click",(function(){document.querySelector(".content-2 p:nth-child(2)").style="display: none",w[1].style="display: block",_[1].style="display:none"})),w[2].addEventListener("click",(function(){document.querySelector(".content-3 p:nth-child(2)").style="display: block",w[2].style="display: none",_[2].style="display: block"})),_[2].addEventListener("click",(function(){document.querySelector(".content-3 p:nth-child(2)").style="display: none",w[2].style="display: block",_[2].style="display:none"})),w[3].addEventListener("click",(function(){document.querySelector(".content-4 p:nth-child(2)").style="display: block",w[3].style="display: none",_[3].style="display: block"})),_[3].addEventListener("click",(function(){document.querySelector(".content-4 p:nth-child(2)").style="display: none",w[3].style="display: block",_[3].style="display:none"}))}]);
//# sourceMappingURL=bundle.js.map