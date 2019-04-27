(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BYMX:function(l,n,u){l.exports=function(){"use strict";function l(){return(l=Object.assign||function(l){for(var n=1;n<arguments.length;n++){var u=arguments[n];for(var e in u)Object.prototype.hasOwnProperty.call(u,e)&&(l[e]=u[e])}return l}).apply(this,arguments)}var n=window.Element.prototype.matches,u=function(l,n){return l.closest(n)},e=function(l,n){return new window.Event(l,n)},t=function(l,n){return new window.CustomEvent(l,n)};!function(){if(window.Element.prototype.matches||(n=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(u=function(l,u){if(!document.documentElement.contains(l))return null;do{if(n.call(l,u))return l;l=l.parentElement||l.parentNode}while(null!==l&&1===l.nodeType);return null}),window.Event&&"function"==typeof window.Event||(e=function(l,n){n=n||{};var u=document.createEvent("Event");return u.initEvent(l,Boolean(n.bubbles),Boolean(n.cancelable)),u}),"function"!=typeof window.CustomEvent){var l=window.Event.prototype.preventDefault;t=function(n,u){var e=document.createEvent("CustomEvent");return e.initCustomEvent(n,(u=u||{bubbles:!1,cancelable:!1,detail:null}).bubbles,u.cancelable,u.detail),e.preventDefault=function(){this.cancelable&&(l.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},e}}}();var s={STEPS:".step",TRIGGER:".step-trigger",STEPPER:".bs-stepper"},a={ACTIVE:"active",LINEAR:"linear",BLOCK:"dstepper-block",NONE:"dstepper-none",FADE:"fade"},o="transitionend",i="bsStepper",r=function(l,n){var u=l[i];if(!u._steps[n].classList.contains(a.ACTIVE)&&!u._stepsContents[n].classList.contains(a.ACTIVE)){var e=t("show.bs-stepper",{cancelable:!0,detail:{indexStep:n}});l.dispatchEvent(e);var s=u._steps.filter(function(l){return l.classList.contains(a.ACTIVE)}),o=u._stepsContents.filter(function(l){return l.classList.contains(a.ACTIVE)});e.defaultPrevented||(s.length&&s[0].classList.remove(a.ACTIVE),o.length&&(o[0].classList.remove(a.ACTIVE),o[0].classList.remove(a.BLOCK)),d(l,u._steps[n],u._steps),c(l,u._stepsContents[n],u._stepsContents,o))}},d=function(l,n,u){u.forEach(function(n){var u=n.querySelector(s.TRIGGER);u.setAttribute("aria-selected","false"),l.classList.contains(a.LINEAR)&&u.setAttribute("disabled","disabled")}),n.classList.add(a.ACTIVE);var e=n.querySelector(s.TRIGGER);e.setAttribute("aria-selected","true"),l.classList.contains(a.LINEAR)&&e.removeAttribute("disabled")},c=function(l,n,u,e){var s=t("shown.bs-stepper",{cancelable:!0,detail:{indexStep:u.indexOf(n)}});if(n.classList.contains(a.FADE)){n.classList.remove(a.NONE);var i=p(n);n.addEventListener(o,function u(){n.classList.add(a.BLOCK),n.removeEventListener(o,u),l.dispatchEvent(s)}),e.length&&e[0].classList.add(a.NONE),n.classList.add(a.ACTIVE),m(n,i)}else n.classList.add(a.ACTIVE),l.dispatchEvent(s)},p=function(l){if(!l)return 0;var n=window.getComputedStyle(l).transitionDuration;return parseFloat(n)?(n=n.split(",")[0],1e3*parseFloat(n)):0},m=function(l,n){var u=!1,t=n+5;function s(){u=!0,l.removeEventListener(o,s)}l.addEventListener(o,s),window.setTimeout(function(){u||l.dispatchEvent(e(o)),l.removeEventListener(o,s)},t)},f=function(l,n){n&&l.forEach(function(l){l.classList.add(a.FADE),l.classList.add(a.NONE)})};function v(l){l.preventDefault()}function h(l){l.preventDefault();var n=u(l.target,s.STEPS),e=u(n,s.STEPPER),t=e[i],a=t._steps.indexOf(n);t._currentIndex=a,r(e,a)}var b={linear:!0,animation:!1};return function(){function n(n,u){var e=this;void 0===u&&(u={}),this._element=n,this._currentIndex=0,this._stepsContents=[],this._steps=[].slice.call(this._element.querySelectorAll(s.STEPS)).filter(function(l){return l.hasAttribute("data-target")}),this._steps.forEach(function(l){e._stepsContents.push(e._element.querySelector(l.getAttribute("data-target")))}),this.options=l({},b,u),this.options.linear&&this._element.classList.add(a.LINEAR),f(this._stepsContents,this.options.animation),this._setLinkListeners(),Object.defineProperty(this._element,i,{value:this,writable:!0}),this._steps.length&&r(this._element,this._currentIndex)}var u=n.prototype;return u._setLinkListeners=function(){var l=this;this._steps.forEach(function(n){n.querySelector(s.TRIGGER).addEventListener("click",l.options.linear?v:h)})},u.next=function(){this._currentIndex=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1,r(this._element,this._currentIndex)},u.previous=function(){this._currentIndex=this._currentIndex-1>=0?this._currentIndex-1:0,r(this._element,this._currentIndex)},u.to=function(l){var n=l-1;this._currentIndex=n>=0&&n<this._steps.length?n:0,r(this._element,this._currentIndex)},u.reset=function(){this._currentIndex=0,r(this._element,this._currentIndex)},u.destroy=function(){var l=this;this._steps.forEach(function(n){n.querySelector(s.TRIGGER).removeEventListener("click",l.options.linear?v:h)}),this._element[i]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0},n}()}()},"dFL+":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),s=u("pMnS"),a=u("rMXk"),o=u("3zLz"),i=u("A7o+"),r=u("BYMX"),d=u.n(r),c=function(){function l(l){this.translate=l}return l.prototype.previous=function(){this.stepper.previous()},l.prototype.next=function(){this.stepper.next()},l.prototype.onSubmit=function(){return!1},l.prototype.ngOnInit=function(){this.stepper=new d.a(document.querySelector("#stepper-medical-examination"),{linear:!1,animation:!0})},l.prototype.changeLang=function(l){this.translate.use(l)},l}(),p=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,274,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"app-page-header",[],null,null,null,a.b,a.a)),e["\u0275did"](2,114688,null,0,o.a,[i.j],{heading:[0,"heading"],icon:[1,"icon"]},null),(l()(),e["\u0275eld"](3,0,null,null,271,"div",[["class","bs-stepper"],["id","stepper-medical-examination"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,47,"div",[["class","bs-stepper-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,6,"div",[["class","step"],["data-target","#medical-examination-step-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,5,"button",[["class","step-trigger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"span",[["class","bs-stepper-circle"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["1"])),(l()(),e["\u0275eld"](9,0,null,null,2,"span",[["class","bs-stepper-label"]],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](12,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,6,"div",[["class","step"],["data-target","#medical-examination-step-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,5,"button",[["class","step-trigger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"span",[["class","bs-stepper-circle"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["2"])),(l()(),e["\u0275eld"](17,0,null,null,2,"span",[["class","bs-stepper-label"]],null,null,null,null,null)),(l()(),e["\u0275ted"](18,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](20,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,6,"div",[["class","step"],["data-target","#medical-examination-step-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,5,"button",[["class","step-trigger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,1,"span",[["class","bs-stepper-circle"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["3"])),(l()(),e["\u0275eld"](25,0,null,null,2,"span",[["class","bs-stepper-label"]],null,null,null,null,null)),(l()(),e["\u0275ted"](26,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](28,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,6,"div",[["class","step"],["data-target","#medical-examination-step-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,5,"button",[["class","step-trigger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,1,"span",[["class","bs-stepper-circle"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["4"])),(l()(),e["\u0275eld"](33,0,null,null,2,"span",[["class","bs-stepper-label"]],null,null,null,null,null)),(l()(),e["\u0275ted"](34,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](36,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,6,"div",[["class","step"],["data-target","#medical-examination-step-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,5,"button",[["class","step-trigger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,1,"span",[["class","bs-stepper-circle"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["5"])),(l()(),e["\u0275eld"](41,0,null,null,2,"span",[["class","bs-stepper-label"]],null,null,null,null,null)),(l()(),e["\u0275ted"](42,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](44,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,6,"div",[["class","step"],["data-target","#medical-examination-step-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,5,"button",[["class","step-trigger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,1,"span",[["class","bs-stepper-circle"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["6"])),(l()(),e["\u0275eld"](49,0,null,null,2,"span",[["class","bs-stepper-label"]],null,null,null,null,null)),(l()(),e["\u0275ted"](50,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](52,0,null,null,222,"div",[["class","bs-stepper-content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](53,0,null,null,221,"form",[],null,[[null,"ngSubmit"]],function(l,n,u){var e=!0;return"ngSubmit"===n&&(e=!1!==l.component.onSubmit()&&e),e},null,null)),(l()(),e["\u0275eld"](54,0,null,null,109,"div",[["class","content"],["id","medical-examination-step-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,101,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,100,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,99,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](58,0,null,null,51,"div",[["class","card bg-default"]],null,null,null,null,null)),(l()(),e["\u0275eld"](59,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Informacion trabajador "])),(l()(),e["\u0275eld"](61,0,null,null,48,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](62,0,null,null,47,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,46,"div",[["class","col col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,45,"table",[["class","table table-borderless"]],null,null,null,null,null)),(l()(),e["\u0275eld"](65,0,null,null,44,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](67,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](68,0,null,null,1,"label",[["for","inputEmployeeName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nombre y Apellidos"])),(l()(),e["\u0275eld"](70,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](71,0,null,null,0,"input",[["class","form-control"],["id","inputEmployeeName"],["placeholder","Nombre y Apellidos"]],null,null,null,null,null)),(l()(),e["\u0275eld"](72,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](73,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](74,0,null,null,1,"label",[["for","inputEmployeePhone"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Telefono"])),(l()(),e["\u0275eld"](76,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](77,0,null,null,0,"input",[["class","form-control"],["id","inputEmployeePhone"],["placeholder","Telefono"]],null,null,null,null,null)),(l()(),e["\u0275eld"](78,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](79,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](80,0,null,null,0,"label",[["for","inputEmployeeID"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["DNI"])),(l()(),e["\u0275eld"](82,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](83,0,null,null,0,"input",[["class","form-control"],["id","inputEmployeeID"],["placeholder","DNI"]],null,null,null,null,null)),(l()(),e["\u0275eld"](84,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](85,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](86,0,null,null,0,"label",[["for","inputEmployeeBirthDate"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Fecha Nacimiento"])),(l()(),e["\u0275eld"](88,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](89,0,null,null,0,"input",[["class","form-control"],["id","inputEmployeeBirthDate"],["placeholder","Fecha Nacimiento"]],null,null,null,null,null)),(l()(),e["\u0275eld"](90,0,null,null,13,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](91,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](92,0,null,null,0,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Sexo"])),(l()(),e["\u0275eld"](94,0,null,null,4,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](95,0,null,null,3,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e["\u0275eld"](96,0,null,null,0,"input",[["class","form-check-input"],["id","radioSexMale"],["name","radioSex"],["type","radio"],["value","1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](97,0,null,null,1,"label",[["class","form-check-label"],["for","radioSexMale"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Masculino"])),(l()(),e["\u0275eld"](99,0,null,null,4,"td",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](100,0,null,null,3,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e["\u0275eld"](101,0,null,null,0,"input",[["class","form-check-input"],["id","radioSexFemale"],["name","radioSex"],["type","radio"],["value","2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](102,0,null,null,1,"label",[["class","form-check-label"],["for","radioSexFemale"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Femenino"])),(l()(),e["\u0275eld"](104,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](105,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](106,0,null,null,0,"label",[["for","inputEmployeeEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Correo electronico"])),(l()(),e["\u0275eld"](108,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](109,0,null,null,0,"input",[["class","form-control"],["id","inputEmployeeEmail"],["placeholder","Correo electronico"],["type","email"]],null,null,null,null,null)),(l()(),e["\u0275eld"](110,0,null,null,37,"div",[["class","card bg-default"]],null,null,null,null,null)),(l()(),e["\u0275eld"](111,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Informacion empleador (cliente) "])),(l()(),e["\u0275eld"](113,0,null,null,34,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](114,0,null,null,33,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](115,0,null,null,32,"div",[["class","col col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](116,0,null,null,31,"table",[["class","table table-borderless"]],null,null,null,null,null)),(l()(),e["\u0275eld"](117,0,null,null,30,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275eld"](118,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](119,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](120,0,null,null,1,"label",[["for","inputCompanyTaxID"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["CIF Empresa"])),(l()(),e["\u0275eld"](122,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](123,0,null,null,0,"input",[["class","form-control"],["id","inputCompanyTaxID"],["placeholder","CIF Empresa"]],null,null,null,null,null)),(l()(),e["\u0275eld"](124,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](125,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](126,0,null,null,1,"label",[["for","inputCompanyName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Empresa"])),(l()(),e["\u0275eld"](128,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](129,0,null,null,0,"input",[["class","form-control"],["id","inputCompanyName"],["placeholder","Empresa"]],null,null,null,null,null)),(l()(),e["\u0275eld"](130,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](131,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](132,0,null,null,1,"label",[["for","inputCompanyAddress"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Direccion"])),(l()(),e["\u0275eld"](134,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](135,0,null,null,0,"input",[["class","form-control"],["id","inputCompanyAddress"],["placeholder","Direccion"]],null,null,null,null,null)),(l()(),e["\u0275eld"](136,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](137,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](138,0,null,null,1,"label",[["for","inputCompanyCity"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Ciudad"])),(l()(),e["\u0275eld"](140,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](141,0,null,null,0,"input",[["class","form-control"],["id","inputCompanyCity"],["placeholder","Ciudad"]],null,null,null,null,null)),(l()(),e["\u0275eld"](142,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](143,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](144,0,null,null,1,"label",[["for","inputCompanyPhone"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Telefono"])),(l()(),e["\u0275eld"](146,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](147,0,null,null,0,"input",[["class","form-control"],["id","inputCompanyPhone"],["placeholder","Telefono"]],null,null,null,null,null)),(l()(),e["\u0275eld"](148,0,null,null,8,"div",[["class","card bg-default"]],null,null,null,null,null)),(l()(),e["\u0275eld"](149,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Observaciones de la cita/recepcion del trabajador "])),(l()(),e["\u0275eld"](151,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](152,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](153,0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](154,0,null,null,1,"label",[["for","textAreaRemarks"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Observaciones"])),(l()(),e["\u0275eld"](156,0,null,null,0,"textarea",[["class","form-control"],["id","textAreaRemarks"],["placeholder","Observaciones de la cita/recepcion del trabajador"],["rows","3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](157,0,null,null,2,"button",[["class","btn btn-primary"],["disabled",""],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.previous()&&e),e},null,null)),(l()(),e["\u0275ted"](158,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](161,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.next()&&e),e},null,null)),(l()(),e["\u0275ted"](162,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](164,0,null,null,78,"div",[["class","content"],["id","medical-examination-step-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](165,0,null,null,70,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](166,0,null,null,69,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](167,0,null,null,68,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](168,0,null,null,67,"div",[["class","card bg-default"]],null,null,null,null,null)),(l()(),e["\u0275eld"](169,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Antecedentes familiares "])),(l()(),e["\u0275eld"](171,0,null,null,64,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](172,0,null,null,63,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](173,0,null,null,62,"div",[["class","col col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](174,0,null,null,61,"table",[["class","table table-borderless"]],null,null,null,null,null)),(l()(),e["\u0275eld"](175,0,null,null,60,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275eld"](176,0,null,null,18,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](177,0,null,null,2,"th",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](178,0,null,null,0,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Padre"])),(l()(),e["\u0275eld"](180,0,null,null,4,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](181,0,null,null,3,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e["\u0275eld"](182,0,null,null,0,"input",[["class","form-check-input"],["id","familyHistoryFatherAlive"],["name","familyHistoryFather"],["type","radio"],["value","1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](183,0,null,null,1,"label",[["class","form-check-label"],["for","familyHistoryFatherAlive"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Vivo"])),(l()(),e["\u0275eld"](185,0,null,null,4,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](186,0,null,null,3,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e["\u0275eld"](187,0,null,null,0,"input",[["class","form-check-input"],["id","familyHistoryFatherPassedAway"],["name","familyHistoryFather"],["type","radio"],["value","2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](188,0,null,null,1,"label",[["class","form-check-label"],["for","familyHistoryFatherPassedAway"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Fallecido"])),(l()(),e["\u0275eld"](190,0,null,null,4,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](191,0,null,null,3,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e["\u0275eld"](192,0,null,null,0,"input",[["class","form-check-input"],["id","familyHistoryFatherUnknown"],["name","familyHistoryFather"],["type","radio"],["value","2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](193,0,null,null,1,"label",[["class","form-check-label"],["for","familyHistoryFatherUnknown"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Desconocido"])),(l()(),e["\u0275eld"](195,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](196,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](197,0,null,null,1,"label",[["for","textAreaFamilyHistoryFatherDiseases"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Enfermedades importantes"])),(l()(),e["\u0275eld"](199,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](200,0,null,null,0,"textarea",[["class","form-control"],["id","textAreaFamilyHistoryFatherDiseases"],["placeholder","Enfermedades importantes del padre"],["rows","3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](201,0,null,null,18,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](202,0,null,null,2,"th",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](203,0,null,null,0,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Madre"])),(l()(),e["\u0275eld"](205,0,null,null,4,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](206,0,null,null,3,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e["\u0275eld"](207,0,null,null,0,"input",[["class","form-check-input"],["id","familyHistoryMotherAlive"],["name","familyHistoryMother"],["type","radio"],["value","1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](208,0,null,null,1,"label",[["class","form-check-label"],["for","familyHistoryMotherAlive"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Vivo"])),(l()(),e["\u0275eld"](210,0,null,null,4,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](211,0,null,null,3,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e["\u0275eld"](212,0,null,null,0,"input",[["class","form-check-input"],["id","familyHistoryMotherPassedAway"],["name","familyHistoryMother"],["type","radio"],["value","2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](213,0,null,null,1,"label",[["class","form-check-label"],["for","familyHistoryMotherPassedAway"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Fallecido"])),(l()(),e["\u0275eld"](215,0,null,null,4,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](216,0,null,null,3,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e["\u0275eld"](217,0,null,null,0,"input",[["class","form-check-input"],["id","familyHistoryMotherUnknown"],["name","familyHistoryMother"],["type","radio"],["value","2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](218,0,null,null,1,"label",[["class","form-check-label"],["for","familyHistoryMotherUnknown"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Desconocido"])),(l()(),e["\u0275eld"](220,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](221,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](222,0,null,null,1,"label",[["for","textAreaFamilyHistoryMotherDiseases"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Enfermedades importantes"])),(l()(),e["\u0275eld"](224,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](225,0,null,null,0,"textarea",[["class","form-control"],["id","textAreaFamilyHistoryMotherDiseases"],["placeholder","Enfermedades importantes de la madre"],["rows","3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](226,0,null,null,3,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](227,0,null,null,2,"th",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](228,0,null,null,0,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Otros familiares cercanos"])),(l()(),e["\u0275eld"](230,0,null,null,5,"tr",[["class","d-flex"]],null,null,null,null,null)),(l()(),e["\u0275eld"](231,0,null,null,2,"td",[["class","col-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](232,0,null,null,1,"label",[["for","textAreaFamilyHistoryOtherDiseases"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Enfermedades importantes"])),(l()(),e["\u0275eld"](234,0,null,null,1,"td",[["class","col-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](235,0,null,null,0,"textarea",[["class","form-control"],["id","textAreaFamilyHistoryOtherDiseases"],["placeholder","Enfermedades importantes de la madre"],["rows","3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](236,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.previous()&&e),e},null,null)),(l()(),e["\u0275ted"](237,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](240,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.next()&&e),e},null,null)),(l()(),e["\u0275ted"](241,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](243,0,null,null,8,"div",[["class","content"],["id","medical-examination-step-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](244,0,null,null,0,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](245,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.previous()&&e),e},null,null)),(l()(),e["\u0275ted"](246,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](249,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.next()&&e),e},null,null)),(l()(),e["\u0275ted"](250,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](252,0,null,null,8,"div",[["class","content"],["id","medical-examination-step-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](253,0,null,null,0,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](254,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.previous()&&e),e},null,null)),(l()(),e["\u0275ted"](255,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](258,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.next()&&e),e},null,null)),(l()(),e["\u0275ted"](259,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](261,0,null,null,8,"div",[["class","content"],["id","medical-examination-step-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](262,0,null,null,0,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](263,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.previous()&&e),e},null,null)),(l()(),e["\u0275ted"](264,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](267,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.next()&&e),e},null,null)),(l()(),e["\u0275ted"](268,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](270,0,null,null,4,"div",[["class","content text-center"],["id","medical-examination-step-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](271,0,null,null,0,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](272,0,null,null,2,"button",[["class","btn btn-primary mt-5"],["type","submit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](273,null,["",""])),e["\u0275pid"](131072,i.i,[i.j,e.ChangeDetectorRef])],function(l,n){l(n,2,0,"Medical Examination","fa-table")},function(l,n){l(n,0,0,void 0),l(n,10,0,e["\u0275unv"](n,10,0,e["\u0275nov"](n,11).transform("Historial laboral"))),l(n,18,0,e["\u0275unv"](n,18,0,e["\u0275nov"](n,19).transform("Antecedentes"))),l(n,26,0,e["\u0275unv"](n,26,0,e["\u0275nov"](n,27).transform("Examen fisico"))),l(n,34,0,e["\u0275unv"](n,34,0,e["\u0275nov"](n,35).transform("Analitica de laboratorio"))),l(n,42,0,e["\u0275unv"](n,42,0,e["\u0275nov"](n,43).transform("Consejos medicos"))),l(n,50,0,e["\u0275unv"](n,50,0,e["\u0275nov"](n,51).transform("Reports"))),l(n,158,0,e["\u0275unv"](n,158,0,e["\u0275nov"](n,159).transform("Previous"))),l(n,162,0,e["\u0275unv"](n,162,0,e["\u0275nov"](n,163).transform("Next"))),l(n,237,0,e["\u0275unv"](n,237,0,e["\u0275nov"](n,238).transform("Previous"))),l(n,241,0,e["\u0275unv"](n,241,0,e["\u0275nov"](n,242).transform("Next"))),l(n,246,0,e["\u0275unv"](n,246,0,e["\u0275nov"](n,247).transform("Previous"))),l(n,250,0,e["\u0275unv"](n,250,0,e["\u0275nov"](n,251).transform("Next"))),l(n,255,0,e["\u0275unv"](n,255,0,e["\u0275nov"](n,256).transform("Previous"))),l(n,259,0,e["\u0275unv"](n,259,0,e["\u0275nov"](n,260).transform("Next"))),l(n,264,0,e["\u0275unv"](n,264,0,e["\u0275nov"](n,265).transform("Previous"))),l(n,268,0,e["\u0275unv"](n,268,0,e["\u0275nov"](n,269).transform("Next"))),l(n,273,0,e["\u0275unv"](n,273,0,e["\u0275nov"](n,274).transform("Finish")))})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-medical-examination",[],null,null,null,m,p)),e["\u0275did"](1,114688,null,0,c,[i.j],null,null)],function(l,n){l(n,1,0)},null)}var v=e["\u0275ccf"]("app-medical-examination",c,f,{},{},[]),h=u("Ip0R"),b=u("ZYCi"),y=function(){return function(){}}(),E=u("+Sv0");u.d(n,"MedicalExaminationModuleNgFactory",function(){return x});var x=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,v]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,h.n,h.m,[e.LOCALE_ID,[2,h.z]]),e["\u0275mpd"](1073742336,h.b,h.b,[]),e["\u0275mpd"](1073742336,b.o,b.o,[[2,b.u],[2,b.l]]),e["\u0275mpd"](1073742336,y,y,[]),e["\u0275mpd"](1073742336,i.g,i.g,[]),e["\u0275mpd"](1073742336,E.a,E.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,b.j,function(){return[[{path:"",component:c}]]},[])])})}}]);