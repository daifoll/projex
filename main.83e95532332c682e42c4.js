/*! For license information please see main.83e95532332c682e42c4.js.LICENSE.txt */
!function(){var e={560:function(){"use strict";var e=document.querySelector(".clients-slider"),t=(document.querySelector(".clients-slider__line"),!1);e.addEventListener("mousedown",(function(s){t=!0,e.style.cursor="grabbing"})),e.addEventListener("mouseup",(function(s){t=!1,e.style.cursor="grab"})),e.addEventListener("mouseleave",(function(s){t=!1,e.style.cursor="grab"})),e.addEventListener("mousemove",(function(s){t&&(e.scrollLeft-=s.movementX)}))},162:function(){"use strict";document.querySelector(".accordion-promises");for(var e=document.querySelectorAll(".item-accordion"),t=0;t<e.length;t++)e[t].addEventListener("click",s);function s(e){e.target.classList.contains("item-accordion__text")||this.classList.toggle("accordion-active")}},148:function(){"use strict";var e=document.querySelector(".header");document.addEventListener("scroll",(function(){window.scrollY>120?(e.style.position="fixed",e.style.zIndex="9997",e.style.width="100%",e.style.background="white",e.classList.add("header-pseudo")):(e.style.position="relative",e.style.zIndex="9999",e.style.maxWidth="100%",e.style.background="0",e.classList.remove("header-pseudo"))}))},773:function(){"use strict";var e,t=document.querySelector(".provide-slider"),s=document.querySelector(".provide-btn"),i=document.querySelector(".provide-slider__line"),r=document.querySelectorAll(".slider-provide"),n=0,a=0,o=0;t.style.width="896px",document.addEventListener("DOMContentLoaded",(function(){e=t.clientWidth,i.style.width=e*r.length+"px",a=i.style.width})),window.addEventListener("resize",(function(){e=t.clientWidth,i.style.width=e*r.length+"px",a=i.style.width,o>0?i.style.left=-Number(i.style.width.split("px")[0])/r.length*o+"px":o==r.length-1&&(o=0)})),s.addEventListener("click",(function(t){(n+=-e)<-(parseInt(a)-e)&&(n=0),i.style.left=n+"px",o==r.length-1?o=0:o++}))},525:function(){"use strict";var e=document.querySelector(".form-request"),t=e.querySelectorAll("input"),s=(document.querySelector(".form-request__item-wrapper"),document.querySelector(".form-request__fullName")),i=document.querySelector(".form-request__phone"),r=document.querySelector(".form-request__eMail"),n=(document.querySelector(".form-request__select"),document.querySelector(".form-request__item.form-request__message"),document.querySelector(".form-request__submit"),!1),a=!1,o=!1;function c(){var e=s.value.trim(),t=i.value.trim(),c=r.value.trim();""===e?(l(s,"Required field!"),n=!1):(d(s),n=!0),""===c?(l(r,"Required field!"),a=!1):/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(c).toLowerCase())?(d(r),a=!0):(l(r,"Invalid email!"),a=!1),""===t?(l(i,"Required field!"),o=!1):function(e){return/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g.test(String(e).replace(/\s/g,""))}(t)?(d(i),o=!0):(l(i,"Invalid phone number!"),o=!1)}function l(e,t){var s=e.parentElement.querySelector(".request__validation");s.innerText=t,s.classList.add("error"),e.classList.add("failure"),e.classList.remove("success")}function d(e){var t=e.parentElement.querySelector(".request__validation");t.innerText="",t.classList.remove("error"),e.classList.remove("failure"),e.classList.add("success")}e.addEventListener("submit",(function(e){e.preventDefault(),c(),n&&a&&o&&function(){var e=document.querySelector(".connection");if(!document.querySelector(".connection__modalWindow")){var t=document.createElement("div");t.classList.add("connection__modalWindow"),t.innerText="Your request has been successfully sent!";var s=document.createElement("button");s.classList.add("connection__modalWindowBtn"),s.innerText="X",s.addEventListener("click",(function(){t.remove(),document.body.classList.remove("modalWindowBlackout")})),t.append(s),document.body.classList.add("modalWindowBlackout"),e.append(t)}}()})),t.forEach((function(e){e.addEventListener("input",(function(){c()}))})),i.addEventListener("input",(function(){this.value=this.value.replace(/[A-Za-zА-Яа-я_=!"@№#;$%:^?&*=.,/|]/g,"")}))},298:function(){"use strict";var e=document.querySelector(".footer");function t(e){window.scrollTo({top:0,behavior:"smooth"})}new IntersectionObserver((function(e,s){e.forEach((function(e){if(e.isIntersecting){var s=document.createElement("button");s.classList.add("to-top"),document.body.append(s),s.addEventListener("click",t)}else{var i=document.querySelector(".to-top");i&&i.remove()}}))}),{threshold:.5}).observe(e)},138:function(e,t,s){var i=s(55);e.exports=function(e){var t,r="";return r+'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon"'+i.attr("href",s(324),!0,!0)+'><link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&display=swap" rel="stylesheet"><title>Projex</title></head><body><main> '+(null==(t=s(320).call(this,e))?"":t)+(null==(t=s(392).call(this,e))?"":t)+(null==(t=s(829).call(this,e))?"":t)+(null==(t=s(513).call(this,e))?"":t)+(null==(t=s(683).call(this,e))?"":t)+(null==(t=s(604).call(this,e))?"":t)+(null==(t=s(353).call(this,e))?"":t)+(null==(t=s(211).call(this,e))?"":t)+(null==(t=s(598).call(this,e))?"":t)+"</main></body></html>"}},604:function(e,t,s){var i=s(55);e.exports=function(e){var t="";return t+'<section class="clients"><div class="clients-container"><div class="clients__column clients-header"><h3 class="clients-header__text">Clients</h3></div><div class="clients__column clients-content"><div class="clients-content__slider clients-slider"><div class="clients-slider__line"><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(561),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(63),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(561),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(63),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(811),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(655),!0,!0)+' alt="Client"></div><div class="clients-slider__card clients-card"><img class="clients-card__img"'+i.attr("src",s(655),!0,!0)+' alt="Client"></div></div></div></div></div></section>'}},211:function(e,t,s){s(55),e.exports=function(e){return""+'<section class="connection" id="getquote"><div class="container connection-container"><div class="connection__column request"><h3 class="connection__header">Request A Quote</h3><div class="request__content"><form class="request__form form-request" action="#"><div class="form-request__item-wrapper"><input class="form-request__item form-request__fullName" type="text" placeholder="Full name *" maxlength="60"><div class="request__validation"></div></div><div class="form-request__item-wrapper"><input class="form-request__item form-request__phone" type="text" placeholder="Mobile *" maxlength="20"><div class="request__validation"></div></div><div class="form-request__item-wrapper"><input class="form-request__item form-request__eMail" type="text" placeholder="Email *" maxlength="30"><div class="request__validation"></div></div><div class="form-request__item-wrapper"><select class="form-request__item form-request__select" name="request__select" placeholder="Service"><option value="service">service</option><option value="technical question">technical question</option><option value="business offer">business offer</option></select></div><div class="form-request__item-wrapper"><textarea class="form-request__item form-request__message" placeholder="Message"></textarea></div><button class="form-request__item form-request__submit" type="submit">Submit</button></form></div></div><div class="connection__column promises"> <h3 class="connection__header">Our Promises</h3><div class="promises__accordion accordion-promises"><div class="accordion-promises__item item-accordion"><span class="item-accordion__header">Safety</span><div class="item-accordion__content"><p class="item-accordion__text">Projex-Tec Co. is dedicated to satisfying our customers by providing quality products & services on time & striving towards continual improvement. Our Management is committed to providing Supply, Installation, Testing, and Commissioning of Electromechanical works to its clients for various projects and has established Quality Assurance / Quality Control Programs in a manner that strives to comply with ISO 9001:2008. Projex-Tec Co. achieves the highest quality standards throughout the performance of its activities in meeting all the specifications and procedures of customer satisfaction and projects are executed in a manner that emphasizes safety, quality, and maximum cost-effectiveness. The ultimate objective of our company is to comply fully or surpass the quality standards established by the International Organization for Standardization. We believe that the team, not individuals, are the essential unit of this organization for achieving high performance.</p></div></div><div class="accordion-promises__item item-accordion"><span class="item-accordion__header">Quality</span><div class="item-accordion__content"><p class="item-accordion__text">Projex-Tec Co. is dedicated to satisfying our customers by providing quality products & services on time & striving towards continual improvement. Our Management is committed to providing Supply, Installation, Testing, and Commissioning of Electromechanical works to its clients for various projects and has established Quality Assurance / Quality Control Programs in a manner that strives to comply with ISO 9001:2008. Projex-Tec Co. achieves the highest quality standards throughout the performance of its activities in meeting all the specifications and procedures of customer satisfaction and projects are executed in a manner that emphasizes safety, quality, and maximum cost-effectiveness. The ultimate objective of our company is to comply fully or surpass the quality standards established by the International Organization for Standardization. We believe that the team, not individuals, are the essential unit of this organization for achieving high performance.</p></div></div></div></div></div></section>'}},598:function(e,t,s){var i=s(55);e.exports=function(e){var t="";return t+'<footer class="footer"> <div class="container footer-container"><div class="footer__column footer-left"><div class="footer-left__logo footer-logo"><img class="footer-logo__item"'+i.attr("src",s(114),!0,!0)+' alt="Logo"></div><div class="footer-left__address footer-address"><address class="footer-address__text">Sara Tower, 23 Al Batrawi Street, 3rd Floor, Abbas El-Akkad, Nasr City, Cairo, Egypt</address></div><div class="footer-left__contacts footer-contacts"><a class="footer-contacts__phone" href="tel:+20222617124">+20222617124  </a><a class="footer-contacts__mail" href="mailto:info@projex-tec.com" target="_blank">info@projex-tec.com  </a></div></div><div class="footer__column footer-right"> <div class="footer-right__item footer-links"> <a class="footer-links__item" href="#about">About</a><a class="footer-links__item" href="#services">Services</a><a class="footer-links__item" href="#contact">Contacts</a><a class="footer-links__item footer-links__btn" href="#getquote">Get A Quote</a></div><div class="footer-right__item footer-contacts"><a class="footer-contacts__item" href="https://facebook.com" target="_blank">Facebook</a><a class="footer-contacts__item" href="https://twitter.com" target="_blank">Twitter</a><a class="footer-contacts__item" href="https://linkedin.com" target="_blank">Linkedin</a><a class="footer-contacts__item" href="https://www.instagram.com" target="_blank">Instagram</a></div></div><div class="footer__column footer-date"> <span class="footer-date__item">© 2021 Armadillo Design Lab. All rights reserved.</span></div></div></footer>'}},683:function(e,t,s){var i=s(55);e.exports=function(e){var t="";return t+'<section class="founders" id="contact"><div class="container founders-container"><div class="founders__column founders-header"><h3 class="founders-header__item">Founders  </h3></div><div class="founders__column founders-people"><div class="founders-people__card founders-card"><div class="founders-card__img image-founders"><img class="image founders__item"'+i.attr("src",s(901),!0,!0)+' alt="Mr.Ahmed Ismail"></div><div class="founders-card__content content-founders"><span class="content-founders__header">Mr. Ahmed Ismail </span><span class="content-founders__description">Operations Manager</span></div><div class="founders-card__buttons buttons-founders"><a class="buttons-founders__link buttons-founders__contact" href="#getquote" target="_blank">Contact</a><a class="buttons-founders__link buttons-founders__projects" href="#projects" target="_blank">View Projects    </a></div></div><div class="founders-people__card founders-card"><div class="founders-card__img image-founders"><img class="image founders__item"'+i.attr("src",s(564),!0,!0)+' alt="Mr.Ahmed Ismail"></div><div class="founders-card__content content-founders"><span class="content-founders__header">Mr. Ahmed Ismail </span><span class="content-founders__description">Operations Manager</span></div><div class="founders-card__buttons buttons-founders"><a class="buttons-founders__link buttons-founders__contact" href="#getquote" target="_blank">Contact</a><a class="buttons-founders__link buttons-founders__projects" href="#projects" target="_blank">View Projects    </a></div></div></div></div></section>'}},320:function(e,t,s){var i=s(55);e.exports=function(e){var t="";return t+'<header class="header" id="header"><div class="container header-container"><div class="header__logo logo-header"><img'+i.attr("src",s(367),!0,!0)+' alt="Лого Projex"></div><nav class="header__nav nav-header"><ul class="nav-header__list nav-list"><li class="nav-list__item"><a class="nav-list__link" href="#home">Home</a></li><li class="nav-list__item"> <a class="nav-list__link" href="#services">Services</a></li><li class="nav-list__item"><a class="nav-list__link" href="#about">About</a></li><li class="nav-list__item"><a class="nav-list__link" href="#contact">Contact</a></li></ul></nav><a class="header__btn btn-header" href="#getquote">Get A Quote </a></div></header>'}},353:function(e,t,s){s(55),e.exports=function(e){return""+'<section class="projects" id="projects"><div class="projects-container"><div class="projects__column projects-explore"><span class="projects-explore__header">Explore Our Founders’ Recent Projects  </span></div><div class="projects__column projects-cards"><div class="projects-cards__item card-projects projects-security"><div class="card-projects__info-wrap"> <span class="card-projects__header">Internal Security Forces</span><span class="card-projects__subtitle">Doha, Qatar</span><hr class="card-projects__hr"><span class="card-projects__description">Infrastructural Package for Duhail Camp</span></div><div class="card-projects__view-wrap"> <a class="card-projects__view-link" href="#about" target="_blank">view more  </a></div></div><div class="projects-cards__item card-projects projects-mubadala"><div class="card-projects__info-wrap"> <span class="card-projects__header">MUBADALA</span><span class="card-projects__subtitle">Abu Dhabi, United Arab Emirates</span><hr class="card-projects__hr"><span class="card-projects__description">80,000 TR District Cooling Plant EPC Project for Al Sowwah Island</span></div><div class="card-projects__view-wrap"><a class="card-projects__view-link" href="#about" target="_blank">view more  </a></div></div><div class="projects-cards__item card-projects projects-doha"><div class="card-projects__info-wrap"> <span class="card-projects__header">Doha Port</span><span class="card-projects__subtitle">Doha, Qatar</span><hr class="card-projects__hr"><span class="card-projects__description">Contracting for Phase 2 of Hamad Port</span></div><div class="card-projects__view-wrap"><a class="card-projects__view-link" href="#about" target="_blank">view more</a></div></div><div class="projects-cards__item card-projects projects-ministry"><div class="card-projects__info-wrap"> <span class="card-projects__header">Ministry of Electricity & Renewable Energy</span><span class="card-projects__subtitle">Damietta, Egypt</span><hr class="card-projects__hr"><span class="card-projects__description">2 Power stations, each 1000 MW 8 Turbines simple cycle</span></div><div class="card-projects__view-wrap"><a class="card-projects__view-link" href="#about" target="_blank">view more  </a></div></div></div></div></section>'}},392:function(e,t,s){s(55),e.exports=function(e){return""+'<section class="promo" id="home"><div class="container promo-container"><h1 class="promo__header">We’re Always Ready For A Challenge</h1><a class="promo__btn" href="#services">Discover </a></div></section>'}},829:function(e,t,s){s(55),e.exports=function(e){return""+'<section class="provide" id="services"><div class="container provide-container"><div class="prodive__column provide-header"><span class="provide-header__item">Industrial Services </span></div><div class="prodive__column provide-slider"><div class="provide-slider__line"><div class="provide-slider__content slider-provide"><p class="slider-provide__description">Projex-Tec has a highly qualified technical team to manage the requirements and performance of design sub-contractors including any specialized services. </p><p class="slider-provide__header">Engineering</p></div><div class="provide-slider__content slider-provide"><p class="slider-provide__description">Projex-Tec has a highly qualified technical team to manage the requirements and performance of design sub-contractors including any specialized services. </p><p class="slider-provide__header">Slide 2</p></div><div class="provide-slider__content slider-provide"><p class="slider-provide__description">Projex-Tec has a highly qualified technical team to manage the requirements and performance of design sub-contractors including any specialized services. </p><p class="slider-provide__header">Slide 3</p></div><div class="provide-slider__content slider-provide"><p class="slider-provide__description">Projex-Tec has a highly qualified technical team to manage the requirements and performance of design sub-contractors including any specialized services. </p><p class="slider-provide__header">Slide 4</p></div></div><button class="slider-provide__btn provide-btn"><span class="provide-btn__item"> </span></button></div><div class="prodive__column provide-description"><div class="provide-description__item description-provide"><p class="description-provide__header">Mission</p><p class="description-provide__depiction">We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that leads to creative solutions and fully deserved rewards.</p><a class="description-provide__link" href="#projects" target="_blank">view more</a></div><div class="provide-description__item description-provide"><p class="description-provide__header">Vision</p><p class="description-provide__depiction">We aim to be a leading contractor in Egypt by focusing on the timely implementation of our projects, and meeting the expectations & requirements of our customers at the highest possible level.</p><a class="description-provide__link" href="#projects" target="_blank">view more</a></div><div class="provide-description__item description-provide"><p class="description-provide__header">Culture</p><p class="description-provide__depiction">Our work culture is embodied in several principles and values that guide every Projex-Tec employee in delivering our vision.</p><a class="description-provide__link" href="#projects" target="_blank">view more </a></div></div></div></section>'}},513:function(e,t,s){var i=s(55);e.exports=function(e){var t="";return t+'<section class="systems" id="about"><div class="container systems-container"><h3 class="systems__header">Browse Our Systems</h3><div class="systems__cards cards-systems"><div class="cards-systems__item system-card"><div class="system-card__img"> <img'+i.attr("src",s(509),!0,!0)+' alt="HVAC"></div><div class="system-card__header"><span class="cards-systems__header">HVAC Systems</span></div></div><div class="cards-systems__item system-card"><div class="system-card__img"> <img'+i.attr("src",s(828),!0,!0)+' alt="Plumbing &amp; Drainage Systems"></div><div class="system-card__header"><span class="cards-systems__header">Plumbing & Drainage Systems </span></div></div><div class="cards-systems__item system-card"><div class="system-card__img"> <img'+i.attr("src",s(159),!0,!0)+' alt="Fire protection Systems"></div><div class="system-card__header"><span class="cards-systems__header">Fire protection Systems</span></div></div><div class="cards-systems__item system-card"><div class="system-card__img"> <img'+i.attr("src",s(350),!0,!0)+' alt="Electrical Systems"></div><div class="system-card__header"><span class="cards-systems__header">Electrical Systems</span></div></div><div class="cards-systems__item system-card"><div class="system-card__img">   <img'+i.attr("src",s(483),!0,!0)+' alt="Infrastructure Systems"></div><div class="system-card__header"><span class="cards-systems__header">Infrastructure Systems</span></div></div></div></div></section>'}},55:function(e,t,s){"use strict";var i=Object.prototype.hasOwnProperty;function r(e,t){return Array.isArray(e)?function(e,t){for(var s,i="",n="",a=Array.isArray(t),o=0;o<e.length;o++)(s=r(e[o]))&&(a&&t[o]&&(s=c(s)),i=i+n+s,n=" ");return i}(e,t):e&&"object"==typeof e?function(e){var t="",s="";for(var r in e)r&&e[r]&&i.call(e,r)&&(t=t+s+r,s=" ");return t}(e):e||""}function n(e){if(!e)return"";if("object"==typeof e){var t="";for(var s in e)i.call(e,s)&&(t=t+s+":"+e[s]+";");return t}return e+""}function a(e,t,s,i){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(i?e:e+'="'+e+'"');var r=typeof t;return"object"!==r&&"function"!==r||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),s||-1===t.indexOf('"'))?(s&&(t=c(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,s){if(1===arguments.length){for(var i=t[0],r=1;r<t.length;r++)i=e(i,t[r]);return i}for(var a in s)if("class"===a){var o=t[a]||[];t[a]=(Array.isArray(o)?o:[o]).concat(s[a]||[])}else if("style"===a){o=(o=n(t[a]))&&";"!==o[o.length-1]?o+";":o;var c=n(s[a]);c=c&&";"!==c[c.length-1]?c+";":c,t[a]=o+c}else t[a]=s[a];return t},t.classes=r,t.style=n,t.attr=a,t.attrs=function(e,t){var s="";for(var o in e)if(i.call(e,o)){var c=e[o];if("class"===o){s=a(o,c=r(c),!1,t)+s;continue}"style"===o&&(c=n(c)),s+=a(o,c,!1,t)}return s};var o=/["&<>]/;function c(e){var t=""+e,s=o.exec(t);if(!s)return e;var i,r,n,a="";for(i=s.index,r=0;i<t.length;i++){switch(t.charCodeAt(i)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}r!==i&&(a+=t.substring(r,i)),r=i+1,a+=n}return r!==i?a+t.substring(r,i):a}t.escape=c,t.rethrow=function e(t,i,r,n){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&i||n))throw t.message+=" on line "+r,t;var a,o,c,l;try{n=n||s(835).readFileSync(i,{encoding:"utf8"}),a=3,o=n.split("\n"),c=Math.max(r-a,0),l=Math.min(o.length,r+a)}catch(s){return t.message+=" - could not read from "+i+" ("+s.message+")",void e(t,null,r)}a=o.slice(c,l).map((function(e,t){var s=t+c+1;return(s==r?"  > ":"    ")+s+"| "+e})).join("\n"),t.path=i;try{t.message=(i||"Pug")+":"+r+"\n"+a+"\n\n"+t.message}catch(e){}throw t}},811:function(e,t,s){"use strict";e.exports=s.p+"assets/images/clients/adwea.fb62bc52618f3b63d5fc.png"},63:function(e,t,s){"use strict";e.exports=s.p+"assets/images/clients/fifa.d12a5f9c6ba6409f1c07.png"},655:function(e,t,s){"use strict";e.exports=s.p+"assets/images/clients/talaat.10cac7b2a5751ddb80a0.png"},561:function(e,t,s){"use strict";e.exports=s.p+"assets/images/clients/tauic.08e654a21049040c21bd.svg"},324:function(e,t,s){"use strict";e.exports=s.p+"assets/images/favicon/icon.6db455252571ec30c7b3.png"},114:function(e,t,s){"use strict";e.exports=s.p+"assets/images/footer/footer-logo.0ae30f94294893bb476b.svg"},901:function(e,t,s){"use strict";e.exports=s.p+"assets/images/founders/founders-people img 1.53dc240dcb68509fe37f.png"},564:function(e,t,s){"use strict";e.exports=s.p+"assets/images/founders/founders-people img 2.ddd3c50d131399ce1e4e.png"},367:function(e,t,s){"use strict";e.exports=s.p+"assets/images/header/logo-header/logo.f9069373407c9aade805.svg"},350:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/electrical.aec08df0743006b19281.svg"},159:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/fire protection.8483eb9367c1e988797f.svg"},509:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/hvac.c02ff33c4bd431680422.svg"},483:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/infrastructure.624941a6f75264e13b8e.svg"},828:function(e,t,s){"use strict";e.exports=s.p+"assets/images/systems/plumbing and drainage.70336ae9d13a39280683.svg"},835:function(){}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,s),n.exports}s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e}(),function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,i=new Array(t);s<t;s++)i[s]=e[s];return i}var n,a=function(e){return e},o=document,c=o.documentElement,l=o.body,d=window,u=d.requestAnimationFrame||d.mozRequestAnimationFrame||d.webkitRequestAnimationFrame||d.msRequestAnimationFrame,p=d.cancelAnimationFrame||d.mozCancelAnimationFrame,f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return t.querySelector(e)},m=function(e,t){Array.prototype.forEach.call(e,t)},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,s=!0;try{"string"==typeof e?f(e,t):_(e)&&t.contains(e)}catch(e){s=!1}return s},_=function(t){return function(t){try{return t instanceof Node}catch(s){return"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName&&"object"===e(t.ownerDocument)}}(t)||function(t){try{return t instanceof HTMLElement}catch(s){return"object"===e(t)&&1===t.nodeType&&"object"===e(t.style)&&"object"===e(t.ownerDocument)}}(t)},h=function(){return d.pageYOffset||l.scrollTop||c.scrollTop},g=function(){return d.performance&&"now"in d.performance?performance.now():(new Date).getTime()},y=function(e){var t=new RegExp("("+location.hash+")?$");return(e.baseURI||o.URL).replace(t,"")},b=function(){return Math.max(l.scrollHeight,l.offsetHeight,l.clientHeight,c.scrollHeight,c.offsetHeight,c.clientHeight)},w=function(){return d.innerHeight||c.clientHeight||l.clientHeight},j=function(e){return e+"px"},x="data-scrolltosmooth-expand",q="top",S="bottom";function k(e){var t="";return"href"===this.settings.targetAttribute&&e.href?t=e.href.replace(y(e),""):e.getAttribute(this.settings.targetAttribute)&&(t=e.getAttribute(this.settings.targetAttribute)),this.settings.topOnEmptyHash&&"#"==t?this.container:v(t,this.container)?f(t,this.container):null}function A(){var e=this,t=[];return m(this.elements,(function(s){k.call(e,s)&&("href"===e.settings.targetAttribute&&-1!=s.href.indexOf(y(s))&&-1!=s.href.indexOf("#")&&(""!=s.hash||e.settings.topOnEmptyHash)||"href"!=e.settings.targetAttribute)&&t.push(s)})),t}function E(e,t){t.stopPropagation(),t.preventDefault();var s=k.call(this,e);s&&this.scrollTo(s)}function C(e){var t=Math.max(1,this.settings.duration);if(this.settings.durationRelative){var s="number"==typeof this.settings.durationRelative?this.settings.durationRelative:1e3;t=Math.max(this.settings.duration,e*(t/s))}return this.settings.durationMin&&t<this.settings.durationMin&&(t=this.settings.durationMin),this.settings.durationMax&&t>this.settings.durationMax&&(t=this.settings.durationMax),t}function P(e,t,s){var i=function(e,t,s){var i=t-s;return e<0?{to:q,px:-1*e}:e>i&&{to:S,px:-1*(i-e)}}(e,t,s),r=L.call(this),n=r.filter((function(e){return e.getAttribute(x)===q}))[0],a=r.filter((function(e){return e.getAttribute(x)===S}))[0];i&&n&&i.to===q?n.style.height=j(i.px):i&&a&&i.to===S?a.style.height=j(i.px):m(r,(function(e){e.style.removeProperty("height")}))}function L(){return Array.prototype.slice.call(this.container.children).filter((function(e){return e.hasAttribute(x)}))}function T(e,t,s,i,r){var a=this,o=e-t,c=o<0?-1*o:o,l=C.call(this,c),p=Math.min(l,g()-s),f=p/l,m="string"==typeof this.settings.easing?function(e,t){return Function('"use strict"; return ('+e+"("+t+"))")()}(this.settings.easing,f):this.settings.easing(f),v=t+o*m;this.settings.onScrollUpdate&&"function"==typeof this.settings.onScrollUpdate&&this.settings.onScrollUpdate({startPosition:t,currentPosition:v,endPosition:e}),d.scroll(0,v),i||(i=b()),r||(r=w()),P.call(this,v,i,r),p>=l?this.settings.onScrollEnd&&"function"==typeof this.settings.onScrollEnd&&this.settings.onScrollEnd({startPosition:t,endPosition:e}):n=u((function(){T.call(a,e,t,s,i,r)}))}var O=function(){function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i(this,"elements",void 0),i(this,"container",void 0),i(this,"settings",void 0);var r={container:o,targetAttribute:"href",topOnEmptyHash:!0,offset:null,duration:400,durationRelative:!1,durationMin:null,durationMax:null,easing:a,onScrollStart:null,onScrollUpdate:null,onScrollEnd:null};for(var n in t=t||r,r)Object.prototype.hasOwnProperty.call(r,n)&&!Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=r[n]);this.settings=t;var d=l;"string"==typeof this.settings.container&&v(this.settings.container)?d=f(this.settings.container):"string"!=typeof this.settings.container&&_(this.settings.container)&&v(this.settings.container)&&(d=this.settings.container),d=d===o||d===c?l:d,this.container=d,this.elements="string"==typeof e?function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:o).querySelectorAll(e)}(e,this.container):e}var u,y;return u=s,(y=[{key:"init",value:function(){var e=this;this.destroy();var t=o.createElement("div");t.setAttribute(x,q),this.container.insertBefore(t,this.container.firstChild);var s=o.createElement("div");s.setAttribute(x,S),this.container.appendChild(s),m(A.call(this),(function(t){t.addEventListener("click",E.bind(e,t),!1)})),m(["mousewheel","wheel","touchmove"],(function(t){d.addEventListener(t,(function(){e.cancelScroll()}))}))}},{key:"destroy",value:function(){var e=this;this.settings&&(this.cancelScroll(),m(L.call(this),(function(e){e.parentNode.removeChild(e)})),m(A.call(this),(function(t){t.removeEventListener("click",E.bind(e,t),!1)})))}},{key:"scrollTo",value:function(t){var s=h(),i=b(),r=w(),n=0;if(isNaN(t)){if(("object"===e(t)||"string"==typeof t)&&v(t,this.container)){"string"==typeof t&&(t=f(t,this.container));var a=t.getBoundingClientRect().top+s;n=i-a<r?i-r:a}}else"string"==typeof t&&(t=parseFloat(t)),n=t=i-t<r?i-r:t;if(null!==this.settings.offset){var o=0;if(v(this.settings.offset,this.container)){var c=this.settings.offset;"string"==typeof c&&(c=f(this.settings.offset)),_(c)&&(o=c.getBoundingClientRect().height)}else isNaN(this.settings.offset)||"string"==typeof(o=this.settings.offset)&&(o=parseFloat(o));n-=o}n=n<0?0:n,this.settings.onScrollStart&&"function"==typeof this.settings.onScrollStart&&this.settings.onScrollStart({startPosition:s,endPosition:n}),T.call(this,n,s,g(),i,r)}},{key:"scrollBy",value:function(e){this.scrollTo(h()+e)}},{key:"cancelScroll",value:function(){n&&p(n)}},{key:"update",value:function(t){if("object"===e(t))for(var s=0,i=Object.entries(t);s<i.length;s++){var n=(c=i[s],l=2,function(e){if(Array.isArray(e))return e}(c)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var s=[],i=!0,r=!1,n=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(s.push(a.value),!t||s.length!==t);i=!0);}catch(e){r=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw n}}return s}}(c,l)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?r(e,t):void 0}}(c,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],o=n[1];this.settings[a]=o}var c,l}}])&&t(u.prototype,y),s}();new O("a",{duration:400,offset:document.getElementById("header")}).init(),s(560),s(298),s(773),s(162),s(148),s(525),s(138)}()}();
//# sourceMappingURL=main.83e95532332c682e42c4.js.map