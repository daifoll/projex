!function(){var e={209:function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}var t=document.querySelector(".navigation"),s=document.querySelector(".navigation__list"),r=document.querySelector(".nav-btn"),a=document.querySelector(".nav-btn__item");r.addEventListener("click",(function(e){t.classList.toggle("navigation-active"),a.classList.toggle("nav-btn__active")})),t.onload=function(t){var r,a=function(t,s){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,s){if(t){if("string"==typeof t)return e(t,s);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,s):void 0}}(t))||s&&t&&"number"==typeof t.length){r&&(t=r);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var e=r.next();return c=e.done,e},e:function(e){o=!0,n=e},f:function(){try{c||null==r.return||r.return()}finally{if(o)throw n}}}}(document.querySelector(".nav-header__list").children);try{for(a.s();!(r=a.n()).done;){var i=r.value,n=i.children[0],c=document.createElement("li");c.classList.add("list-nav__item"),s.append(c);var o=document.createElement("a");o.classList.add(n.className),o.href=n.href,o.target=n.target,o.textContent=i.textContent,c.append(o)}}catch(e){a.e(e)}finally{a.f()}}()},560:function(){"use strict";var e=document.querySelector(".clients-slider"),t=(document.querySelector(".clients-slider__line"),!1);e.addEventListener("mousedown",(function(s){t=!0,e.style.cursor="grabbing"})),e.addEventListener("mouseup",(function(s){t=!1,e.style.cursor="grab"})),e.addEventListener("mouseleave",(function(s){t=!1,e.style.cursor="grab"})),e.addEventListener("mousemove",(function(s){t&&(e.scrollLeft-=s.movementX)}))},162:function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}document.querySelector(".accordion-promises").addEventListener("click",(function(t){var s=t.target,r=s.parentNode.children;if(s.classList.contains("item-accordion__btn")){var a,i=function(t,s){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,s){if(t){if("string"==typeof t)return e(t,s);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,s):void 0}}(t))||s&&t&&"number"==typeof t.length){r&&(t=r);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var e=r.next();return c=e.done,e},e:function(e){o=!0,n=e},f:function(){try{c||null==r.return||r.return()}finally{if(o)throw n}}}}(r);try{for(i.s();!(a=i.n()).done;){var n=a.value;n.classList.contains("item-accordion__text")&&n.classList.toggle("item-accordion__text_active"),n.classList.contains("item-accordion__btn")&&n.classList.toggle("item-accordion__btn_active"),"+"==s.textContent?s.textContent="-":s.textContent="+"}}catch(e){i.e(e)}finally{i.f()}}}))},773:function(){"use strict";var e,t=document.querySelector(".provide-slider"),s=document.querySelector(".provide-btn"),r=document.querySelector(".provide-slider__line"),a=document.querySelectorAll(".slider-provide"),i=0,n=0;t.style.width="896px",document.addEventListener("DOMContentLoaded",(function(){e=t.clientWidth,r.style.width=e*a.length+"px",n=r.style.width})),window.addEventListener("resize",(function(){e=t.clientWidth,r.style.width=e*a.length+"px",n=r.style.width,console.log(t.clientWidth)})),s.addEventListener("click",(function(t){(i+=-e)<-(parseInt(n)-e)&&(i=0),r.style.left=i+"px"}))},298:function(){function e(e){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector(".to-top"),window.addEventListener("scroll",(function(t){var s=window.pageYOffset,r=document.querySelector(".to-top");if(r){if(!(s<=4047))return!1;r.remove()}if(s>=4047){var a=document.createElement("button");a.classList.add("to-top"),document.body.append(a),a.addEventListener("click",e)}}))},138:function(e,t,s){s(55),e.exports=function(e){var t,r="";return r+'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Projex</title></head><body><nav class="navigation"><button class="nav-btn"><span class="nav-btn__item"> </span></button><ul class="navigation__list list-nav"></ul></nav><main> '+(null==(t=s(320).call(this,e))?"":t)+(null==(t=s(392).call(this,e))?"":t)+(null==(t=s(829).call(this,e))?"":t)+(null==(t=s(513).call(this,e))?"":t)+(null==(t=s(683).call(this,e))?"":t)+(null==(t=s(604).call(this,e))?"":t)+(null==(t=s(353).call(this,e))?"":t)+(null==(t=s(211).call(this,e))?"":t)+(null==(t=s(598).call(this,e))?"":t)+"</main></body></html>"}},604:function(e,t,s){var r=s(55);e.exports=function(e){var t="";return t+'<section class="clients"><div class="clients-container"><div class="clients__column clients-header"><h3 class="clients-header__text">Clients</h3></div><div class="clients__column clients-content"><div class="clients-content__slider clients-slider"><div class="clients-slider__line"><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(561),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(63),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(561),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(63),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(811),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+r.attr("src",s(655),!0,!0)+' alt="Client"></div></div></div></div></div></section>'}},211:function(e,t,s){s(55),e.exports=function(e){return""+'<section class="connection"> <div class="container connection-container"><div class="connection__column request"><h3 class="connection__header">Request A Quote</h3><div class="request__content"><form class="request__form form-request" action="#"><input class="form-request__item" type="text" placeholder="Full name"><input class="form-request__item" type="text" placeholder="Mobile"><input class="form-request__item" type="text" placeholder="Email"><select class="form-request__item form-request__select" name="request__select" placeholder="Service"><option value="service">service</option></select><textarea class="form-request__item form-request__message" placeholder="Message"></textarea><button class="form-request__item form-request__submit">Submit</button></form></div></div><div class="connection__column promises"> <h3 class="connection__header">Our Promises</h3><div class="promises__accordion accordion-promises"><div class="accordion-promises__item item-accordion"><span class="item-accordion__header">Safety</span><button class="item-accordion__btn">+</button><p class="item-accordion__text">Projex-Tec Co. is dedicated to satisfying our customers by providing quality products & services on time & striving towards continual improvement. Our Management is committed to providing Supply, Installation, Testing, and Commissioning of Electromechanical works to its clients for various projects and has established Quality Assurance / Quality Control Programs in a manner that strives to comply with ISO 9001:2008. Projex-Tec Co. achieves the highest quality standards throughout the performance of its activities in meeting all the specifications and procedures of customer satisfaction and projects are executed in a manner that emphasizes safety, quality, and maximum cost-effectiveness. The ultimate objective of our company is to comply fully or surpass the quality standards established by the International Organization for Standardization. We believe that the team, not individuals, are the essential unit of this organization for achieving high performance.</p></div><div class="accordion-promises__item item-accordion"><span class="item-accordion__header">Quality</span><button class="item-accordion__btn">+</button><p class="item-accordion__text">Projex-Tec Co. is dedicated to satisfying our customers by providing quality products & services on time & striving towards continual improvement. Our Management is committed to providing Supply, Installation, Testing, and Commissioning of Electromechanical works to its clients for various projects and has established Quality Assurance / Quality Control Programs in a manner that strives to comply with ISO 9001:2008. Projex-Tec Co. achieves the highest quality standards throughout the performance of its activities in meeting all the specifications and procedures of customer satisfaction and projects are executed in a manner that emphasizes safety, quality, and maximum cost-effectiveness. The ultimate objective of our company is to comply fully or surpass the quality standards established by the International Organization for Standardization. We believe that the team, not individuals, are the essential unit of this organization for achieving high performance.</p></div></div></div></div></section>'}},598:function(e,t,s){var r=s(55);e.exports=function(e){var t="";return t+'<footer class="footer"> <div class="container footer-container"><div class="footer__column footer-left"><div class="footer-left__logo footer-logo"><img class="footer-logo__item"'+r.attr("src",s(114),!0,!0)+' alt="Logo"></div><div class="footer-left__address footer-address"><address class="footer-address__text">Sara Tower, 23 Al Batrawi Street, 3rd Floor, Abbas El-Akkad, Nasr City, Cairo, Egypt</address></div><div class="footer-left__contacts footer-contacts"><a class="footer-contacts__phone" href="tel:+20222617124">+20222617124  </a><a class="footer-contacts__mail" href="#" target="_blank">info@projex-tec.com  </a></div></div><div class="footer__column footer-right"> <div class="footer-right__item footer-links"> <a class="footer-links__item" href="#" target="_blank">About</a><a class="footer-links__item" href="#" target="_blank">Services</a><a class="footer-links__item" href="#" target="_blank">Contacts</a><a class="footer-links__item footer-links__btn" href="#" target="_blank">Get A Quote</a></div><div class="footer-right__item footer-contacts"><a class="footer-contacts__item" href="" target="_blank">Facebook</a><a class="footer-contacts__item" href="" target="_blank">Twitter</a><a class="footer-contacts__item" href="" target="_blank">Linkedin</a><a class="footer-contacts__item" href="" target="_blank">Instagram</a></div></div><div class="footer__column footer-date"> <span class="footer-date__item">© 2021 Armadillo Design Lab. All rights reserved.</span></div></div></footer>'}},683:function(e,t,s){var r=s(55);e.exports=function(e){var t="";return t+'<section class="founders"> <div class="container founders-container"><div class="founders__column founders-header"><h3 class="founders-header__item">Founders  </h3></div><div class="founders__column founders-people"><div class="founders-people__card founders-card"><div class="founders-card__img image-founders"><img class="image founders__item"'+r.attr("src",s(901),!0,!0)+' alt="Mr.Ahmed Ismail"></div><div class="founders-card__content content-founders"><span class="content-founders__header">Mr. Ahmed Ismail </span><span class="content-founders__description">Operations Manager</span></div><div class="founders-card__buttons buttons-founders"><a class="buttons-founders__link buttons-founders__contact" href="#" target="_blank">Contact</a><a class="buttons-founders__link buttons-founders__projects" href="#" target="_blank">View Projects    </a></div></div><div class="founders-people__card founders-card"><div class="founders-card__img image-founders"><img class="image founders__item"'+r.attr("src",s(564),!0,!0)+' alt="Mr.Ahmed Ismail"></div><div class="founders-card__content content-founders"><span class="content-founders__header">Mr. Ahmed Ismail </span><span class="content-founders__description">Operations Manager</span></div><div class="founders-card__buttons buttons-founders"><a class="buttons-founders__link buttons-founders__contact" href="#" target="_blank">Contact</a><a class="buttons-founders__link buttons-founders__projects" href="#" target="_blank">View Projects    </a></div></div></div></div></section>'}},320:function(e,t,s){var r=s(55);e.exports=function(e){var t="";return t+'<header class="header"><div class="container header-container"><div class="header__logo logo-header"><img'+r.attr("src",s(367),!0,!0)+' alt="Лого Projex"></div><nav class="header__nav nav-header"><ul class="nav-header__list nav-list"><li class="nav-list__item"><a class="nav-list__link" href="#" target="_blank">Home</a></li><li class="nav-list__item"> <a class="nav-list__link" href="#" target="_blank">Services</a></li><li class="nav-list__item"><a class="nav-list__link" href="#" target="_blank">About</a></li><li class="nav-list__item"><a class="nav-list__link" href="#" target="_blank">Contact</a></li></ul></nav><a class="header__btn btn-header" href="#">Get A Quote </a></div></header>'}},353:function(e,t,s){s(55),e.exports=function(e){return""+'<section class="projects"><div class="projects-container"><div class="projects__column projects-explore"><span class="projects-explore__header">Explore Our Founders’ Recent Projects  </span></div><div class="projects__column projects-cards"><div class="projects-cards__item card-projects projects-security"><div class="card-projects__info-wrap"> <span class="card-projects__header">Internal Security Forces</span><span class="card-projects__subtitle">Doha, Qatar</span><hr class="card-projects__hr"><span class="card-projects__description">Infrastructural Package for Duhail Camp</span></div><div class="card-projects__view-wrap"> <a class="card-projects__view-link" href="#" target="_blank">view more  </a></div></div><div class="projects-cards__item card-projects projects-mubadala"><div class="card-projects__info-wrap"> <span class="card-projects__header">MUBADALA</span><span class="card-projects__subtitle">Abu Dhabi, United Arab Emirates</span><hr class="card-projects__hr"><span class="card-projects__description">80,000 TR District Cooling Plant EPC Project for Al Sowwah Island</span></div><div class="card-projects__view-wrap"><a class="card-projects__view-link" href="#" target="_blank">view more  </a></div></div><div class="projects-cards__item card-projects projects-doha"><div class="card-projects__info-wrap"> <span class="card-projects__header">Doha Port</span><span class="card-projects__subtitle">Doha, Qatar</span><hr class="card-projects__hr"><span class="card-projects__description">Contracting for Phase 2 of Hamad Port</span></div><div class="card-projects__view-wrap"><a class="card-projects__view-link" href="#" target="_blank">view more</a></div></div><div class="projects-cards__item card-projects projects-ministry"><div class="card-projects__info-wrap"> <span class="card-projects__header">Ministry of Electricity & Renewable Energy</span><span class="card-projects__subtitle">Damietta, Egypt</span><hr class="card-projects__hr"><span class="card-projects__description">2 Power stations, each 1000 MW 8 Turbines simple cycle</span></div><div class="card-projects__view-wrap"><a class="card-projects__view-link" href="#" target="_blank">view more  </a></div></div></div></div></section>'}},392:function(e,t,s){s(55),e.exports=function(e){return""+'<section class="promo"><div class="container promo-container"><h1 class="promo__header">We’re Always Ready For A Challenge</h1><a class="promo__btn" href="#">Discover </a></div></section>'}},829:function(e,t,s){s(55),e.exports=function(e){return""+'<section class="provide"><div class="container provide-container"><div class="prodive__column provide-header"><span class="provide-header__item">Industrial Services </span></div><div class="prodive__column provide-slider"><div class="provide-slider__line"><div class="provide-slider__content slider-provide"><p class="slider-provide__description">Projex-Tec has a highly qualified technical team to manage the requirements and performance of design sub-contractors including any specialized services. </p><p class="slider-provide__header">Engineering</p></div><div class="provide-slider__content slider-provide"><p class="slider-provide__description">Projex-Tec has a highly qualified technical team to manage the requirements and performance of design sub-contractors including any specialized services. </p><p class="slider-provide__header">Slide 2</p></div><div class="provide-slider__content slider-provide"><p class="slider-provide__description">Projex-Tec has a highly qualified technical team to manage the requirements and performance of design sub-contractors including any specialized services. </p><p class="slider-provide__header">Slide 4</p></div><div class="provide-slider__content slider-provide"><p class="slider-provide__description">Projex-Tec has a highly qualified technical team to manage the requirements and performance of design sub-contractors including any specialized services. </p><p class="slider-provide__header">Slide 5</p></div></div><button class="slider-provide__btn provide-btn"><span class="provide-btn__item"> </span></button></div><div class="prodive__column provide-description"><div class="provide-description__item description-provide"><p class="description-provide__header">Mission</p><p class="description-provide__depiction">We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that leads to creative solutions and fully deserved rewards.</p><a class="description-provide__link" href="#" target="_blank">view more</a></div><div class="provide-description__item description-provide"><p class="description-provide__header">Vision</p><p class="description-provide__depiction">We aim to be a leading contractor in Egypt by focusing on the timely implementation of our projects, and meeting the expectations & requirements of our customers at the highest possible level.</p><a class="description-provide__link" href="#" target="_blank">view more</a></div><div class="provide-description__item description-provide"><p class="description-provide__header">Culture</p><p class="description-provide__depiction">Our work culture is embodied in several principles and values that guide every Projex-Tec employee in delivering our vision.</p><a class="description-provide__link" href="#" target="_blank">view more </a></div></div></div></section>'}},513:function(e,t,s){var r=s(55);e.exports=function(e){var t="";return t+'<section class="systems"><div class="container systems-container"><h3 class="systems__header">Browse Our Systems</h3><div class="systems__cards cards-systems"><div class="cards-systems__item system-card"><div class="system-card__img"> <img'+r.attr("src",s(509),!0,!0)+' alt="HVAC"></div><div class="system-card__header"><span class="cards-systems__header">HVAC Systems</span></div></div><div class="cards-systems__item system-card"><div class="system-card__img"> <img'+r.attr("src",s(828),!0,!0)+' alt="Plumbing &amp; Drainage Systems"></div><div class="system-card__header"><span class="cards-systems__header">Plumbing & Drainage Systems </span></div></div><div class="cards-systems__item system-card"><div class="system-card__img"> <img'+r.attr("src",s(159),!0,!0)+' alt="Fire protection Systems"></div><div class="system-card__header"><span class="cards-systems__header">Fire protection Systems</span></div></div><div class="cards-systems__item system-card"><div class="system-card__img"> <img'+r.attr("src",s(350),!0,!0)+' alt="Electrical Systems"></div><div class="system-card__header"><span class="cards-systems__header">Electrical Systems</span></div></div><div class="cards-systems__item system-card"><div class="system-card__img">   <img'+r.attr("src",s(483),!0,!0)+' alt="Infrastructure Systems"></div><div class="system-card__header"><span class="cards-systems__header">Infrastructure Systems</span></div></div></div></div></section>'}},55:function(e,t,s){"use strict";var r=Object.prototype.hasOwnProperty;function a(e,t){return Array.isArray(e)?function(e,t){for(var s,r="",i="",n=Array.isArray(t),c=0;c<e.length;c++)(s=a(e[c]))&&(n&&t[c]&&(s=o(s)),r=r+i+s,i=" ");return r}(e,t):e&&"object"==typeof e?function(e){var t="",s="";for(var a in e)a&&e[a]&&r.call(e,a)&&(t=t+s+a,s=" ");return t}(e):e||""}function i(e){if(!e)return"";if("object"==typeof e){var t="";for(var s in e)r.call(e,s)&&(t=t+s+":"+e[s]+";");return t}return e+""}function n(e,t,s,r){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(r?e:e+'="'+e+'"');var a=typeof t;return"object"!==a&&"function"!==a||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),s||-1===t.indexOf('"'))?(s&&(t=o(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,s){if(1===arguments.length){for(var r=t[0],a=1;a<t.length;a++)r=e(r,t[a]);return r}for(var n in s)if("class"===n){var c=t[n]||[];t[n]=(Array.isArray(c)?c:[c]).concat(s[n]||[])}else if("style"===n){c=(c=i(t[n]))&&";"!==c[c.length-1]?c+";":c;var o=i(s[n]);o=o&&";"!==o[o.length-1]?o+";":o,t[n]=c+o}else t[n]=s[n];return t},t.classes=a,t.style=i,t.attr=n,t.attrs=function(e,t){var s="";for(var c in e)if(r.call(e,c)){var o=e[c];if("class"===c){s=n(c,o=a(o),!1,t)+s;continue}"style"===c&&(o=i(o)),s+=n(c,o,!1,t)}return s};var c=/["&<>]/;function o(e){var t=""+e,s=c.exec(t);if(!s)return e;var r,a,i,n="";for(r=s.index,a=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}a!==r&&(n+=t.substring(a,r)),a=r+1,n+=i}return a!==r?n+t.substring(a,r):n}t.escape=o,t.rethrow=function e(t,r,a,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&r||i))throw t.message+=" on line "+a,t;var n,c,o,l;try{i=i||s(835).readFileSync(r,{encoding:"utf8"}),n=3,c=i.split("\n"),o=Math.max(a-n,0),l=Math.min(c.length,a+n)}catch(s){return t.message+=" - could not read from "+r+" ("+s.message+")",void e(t,null,a)}n=c.slice(o,l).map((function(e,t){var s=t+o+1;return(s==a?"  > ":"    ")+s+"| "+e})).join("\n"),t.path=r;try{t.message=(r||"Pug")+":"+a+"\n"+n+"\n\n"+t.message}catch(e){}throw t}},811:function(e,t,s){"use strict";e.exports=s.p+"assets/images/clients/adwea.fb62bc52618f3b63d5fc.png"},63:function(e,t,s){"use strict";e.exports=s.p+"assets/images/clients/fifa.d12a5f9c6ba6409f1c07.png"},655:function(e,t,s){"use strict";e.exports=s.p+"assets/images/clients/talaat.10cac7b2a5751ddb80a0.png"},561:function(e,t,s){"use strict";e.exports=s.p+"assets/images/clients/tauic.08e654a21049040c21bd.svg"},114:function(e,t,s){"use strict";e.exports=s.p+"assets/images/footer/footer-logo.0ae30f94294893bb476b.svg"},901:function(e,t,s){"use strict";e.exports=s.p+"assets/images/founders/founders-people img 1.53dc240dcb68509fe37f.png"},564:function(e,t,s){"use strict";e.exports=s.p+"assets/images/founders/founders-people img 2.ddd3c50d131399ce1e4e.png"},367:function(e,t,s){"use strict";e.exports=s.p+"assets/images/header/logo-header/logo.f9069373407c9aade805.svg"},350:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/electrical.aec08df0743006b19281.svg"},159:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/fire protection.8483eb9367c1e988797f.svg"},509:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/hvac.c02ff33c4bd431680422.svg"},483:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/infrastructure.624941a6f75264e13b8e.svg"},828:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/plumbing and drainage.70336ae9d13a39280683.svg"},835:function(){}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,s),i.exports}s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e}(),function(){"use strict";s(560),s(298),s(773),s(162),s(209),s(138)}()}();
//# sourceMappingURL=main.5f0533cccaa303f39139.js.map