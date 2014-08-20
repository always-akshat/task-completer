if(function(t,e,n){"use strict";function r(t){return function(){var e,n,r=arguments[0],i="["+(t?t+":":"")+r+"] ",o=arguments[1],a=arguments,s=function(t){return"function"==typeof t?t.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof t?"undefined":"string"!=typeof t?JSON.stringify(t):t};for(e=i+o.replace(/\{\d+\}/g,function(t){var e,n=+t.slice(1,-1);return n+2<a.length?(e=a[n+2],"function"==typeof e?e.toString().replace(/ ?\{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?B(e):e):t}),e=e+"\nhttp://errors.angularjs.org/1.2.20/"+(t?t+"/":"")+r,n=2;n<arguments.length;n++)e=e+(2==n?"?":"&")+"p"+(n-2)+"="+encodeURIComponent(s(arguments[n]));return new Error(e)}}function i(t){if(null==t||k(t))return!1;var e=t.length;return 1===t.nodeType&&e?!0:b(t)||Ar(t)||0===e||"number"==typeof e&&e>0&&e-1 in t}function o(t,e,n){var r;if(t)if(C(t))for(r in t)"prototype"==r||"length"==r||"name"==r||t.hasOwnProperty&&!t.hasOwnProperty(r)||e.call(n,t[r],r);else if(t.forEach&&t.forEach!==o)t.forEach(e,n);else if(i(t))for(r=0;r<t.length;r++)e.call(n,t[r],r);else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r);return t}function a(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e.sort()}function s(t,e,n){for(var r=a(t),i=0;i<r.length;i++)e.call(n,t[r[i]],r[i]);return r}function l(t){return function(e,n){t(n,e)}}function u(){for(var t,e=_r.length;e;){if(e--,t=_r[e].charCodeAt(0),57==t)return _r[e]="A",_r.join("");if(90!=t)return _r[e]=String.fromCharCode(t+1),_r.join("");_r[e]="0"}return _r.unshift("0"),_r.join("")}function c(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function f(t){var e=t.$$hashKey;return o(arguments,function(e){e!==t&&o(e,function(e,n){t[n]=e})}),c(t,e),t}function d(t){return parseInt(t,10)}function h(t,e){return f(new(f(function(){},{prototype:t})),e)}function p(){}function g(t){return t}function v(t){return function(){return t}}function m(t){return"undefined"==typeof t}function y(t){return"undefined"!=typeof t}function $(t){return null!=t&&"object"==typeof t}function b(t){return"string"==typeof t}function w(t){return"number"==typeof t}function x(t){return"[object Date]"===kr.call(t)}function C(t){return"function"==typeof t}function T(t){return"[object RegExp]"===kr.call(t)}function k(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function S(t){return t&&t.$evalAsync&&t.$watch}function E(t){return"[object File]"===kr.call(t)}function _(t){return"[object Blob]"===kr.call(t)}function A(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function N(t,e,n){var r=[];return o(t,function(t,i,o){r.push(e.call(n,t,i,o))}),r}function D(t,e){return-1!=j(t,e)}function j(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;n++)if(e===t[n])return n;return-1}function O(t,e){var n=j(t,e);return n>=0&&t.splice(n,1),e}function M(t,e,n,r){if(k(t)||S(t))throw Sr("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");if(e){if(t===e)throw Sr("cpi","Can't copy! Source and destination are identical.");if(n=n||[],r=r||[],$(t)){var i=j(n,t);if(-1!==i)return r[i];n.push(t),r.push(e)}var a;if(Ar(t)){e.length=0;for(var s=0;s<t.length;s++)a=M(t[s],null,n,r),$(t[s])&&(n.push(t[s]),r.push(a)),e.push(a)}else{var l=e.$$hashKey;o(e,function(t,n){delete e[n]});for(var u in t)a=M(t[u],null,n,r),$(t[u])&&(n.push(t[u]),r.push(a)),e[u]=a;c(e,l)}}else e=t,t&&(Ar(t)?e=M(t,[],n,r):x(t)?e=new Date(t.getTime()):T(t)?e=new RegExp(t.source):$(t)&&(e=M(t,{},n,r)));return e}function L(t,e){if(Ar(t)){e=e||[];for(var n=0;n<t.length;n++)e[n]=t[n]}else if($(t)){e=e||{};for(var r in t)!pr.call(t,r)||"$"===r.charAt(0)&&"$"===r.charAt(1)||(e[r]=t[r])}return e||t}function H(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var r,i,o,a=typeof t,s=typeof e;if(a==s&&"object"==a){if(!Ar(t)){if(x(t))return x(e)&&t.getTime()==e.getTime();if(T(t)&&T(e))return t.toString()==e.toString();if(S(t)||S(e)||k(t)||k(e)||Ar(e))return!1;o={};for(i in t)if("$"!==i.charAt(0)&&!C(t[i])){if(!H(t[i],e[i]))return!1;o[i]=!0}for(i in e)if(!o.hasOwnProperty(i)&&"$"!==i.charAt(0)&&e[i]!==n&&!C(e[i]))return!1;return!0}if(!Ar(e))return!1;if((r=t.length)==e.length){for(i=0;r>i;i++)if(!H(t[i],e[i]))return!1;return!0}}return!1}function F(){return e.securityPolicy&&e.securityPolicy.isActive||e.querySelector&&!(!e.querySelector("[ng-csp]")&&!e.querySelector("[data-ng-csp]"))}function P(t,e,n){return t.concat(Cr.call(e,n))}function R(t,e){return Cr.call(t,e||0)}function q(t,e){var n=arguments.length>2?R(arguments,2):[];return!C(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,n.concat(Cr.call(arguments,0))):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function I(t,r){var i=r;return"string"==typeof t&&"$"===t.charAt(0)?i=n:k(r)?i="$WINDOW":r&&e===r?i="$DOCUMENT":S(r)&&(i="$SCOPE"),i}function B(t,e){return"undefined"==typeof t?n:JSON.stringify(t,I,e?"  ":null)}function W(t){return b(t)?JSON.parse(t):t}function z(t){if("function"==typeof t)t=!0;else if(t&&0!==t.length){var e=hr(""+t);t=!("f"==e||"0"==e||"false"==e||"no"==e||"n"==e||"[]"==e)}else t=!1;return t}function U(t){t=$r(t).clone();try{t.empty()}catch(e){}var n=3,r=$r("<div>").append(t).html();try{return t[0].nodeType===n?hr(r):r.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(t,e){return"<"+hr(e)})}catch(e){return hr(r)}}function V(t){try{return decodeURIComponent(t)}catch(e){}}function X(t){var e,n,r={};return o((t||"").split("&"),function(t){if(t&&(e=t.split("="),n=V(e[0]),y(n))){var i=y(e[1])?V(e[1]):!0;pr.call(r,n)?Ar(r[n])?r[n].push(i):r[n]=[r[n],i]:r[n]=i}}),r}function Y(t){var e=[];return o(t,function(t,n){Ar(t)?o(t,function(t){e.push(G(n,!0)+(t===!0?"":"="+G(t,!0)))}):e.push(G(n,!0)+(t===!0?"":"="+G(t,!0)))}),e.length?e.join("&"):""}function Q(t){return G(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function G(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,e?"%20":"+")}function J(t,n){function r(t){t&&s.push(t)}var i,a,s=[t],l=["ng:app","ng-app","x-ng-app","data-ng-app"],u=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;o(l,function(n){l[n]=!0,r(e.getElementById(n)),n=n.replace(":","\\:"),t.querySelectorAll&&(o(t.querySelectorAll("."+n),r),o(t.querySelectorAll("."+n+"\\:"),r),o(t.querySelectorAll("["+n+"]"),r))}),o(s,function(t){if(!i){var e=" "+t.className+" ",n=u.exec(e);n?(i=t,a=(n[2]||"").replace(/\s+/g,",")):o(t.attributes,function(e){!i&&l[e.name]&&(i=t,a=e.value)})}}),i&&n(i,a?[a]:[])}function K(n,r){var i=function(){if(n=$r(n),n.injector()){var t=n[0]===e?"document":U(n);throw Sr("btstrpd","App Already Bootstrapped with this Element '{0}'",t)}r=r||[],r.unshift(["$provide",function(t){t.value("$rootElement",n)}]),r.unshift("ng");var i=Oe(r);return i.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(t,e,n,r){t.$apply(function(){e.data("$injector",r),n(e)(t)})}]),i},a=/^NG_DEFER_BOOTSTRAP!/;return t&&!a.test(t.name)?i():(t.name=t.name.replace(a,""),void(Er.resumeBootstrap=function(t){o(t,function(t){r.push(t)}),i()}))}function Z(t,e){return e=e||"_",t.replace(Dr,function(t,n){return(n?e:"")+t.toLowerCase()})}function te(){br=t.jQuery,br&&br.fn.on?($r=br,f(br.fn,{scope:Ur.scope,isolateScope:Ur.isolateScope,controller:Ur.controller,injector:Ur.injector,inheritedData:Ur.inheritedData}),ce("remove",!0,!0,!1),ce("empty",!1,!1,!1),ce("html",!1,!1,!0)):$r=pe,Er.element=$r}function ee(t,e,n){if(!t)throw Sr("areq","Argument '{0}' is {1}",e||"?",n||"required");return t}function ne(t,e,n){return n&&Ar(t)&&(t=t[t.length-1]),ee(C(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function re(t,e){if("hasOwnProperty"===t)throw Sr("badname","hasOwnProperty is not a valid {0} name",e)}function ie(t,e,n){if(!e)return t;for(var r,i=e.split("."),o=t,a=i.length,s=0;a>s;s++)r=i[s],t&&(t=(o=t)[r]);return!n&&C(t)?q(o,t):t}function oe(t){var e=t[0],n=t[t.length-1];if(e===n)return $r(e);var r=e,i=[r];do{if(r=r.nextSibling,!r)break;i.push(r)}while(r!==n);return $r(i)}function ae(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=r("$injector"),i=r("ng"),o=e(t,"angular",Object);return o.$$minErr=o.$$minErr||r,e(o,"module",function(){var t={};return function(r,o,a){var s=function(t,e){if("hasOwnProperty"===t)throw i("badname","hasOwnProperty is not a valid {0} name",e)};return s(r,"module"),o&&t.hasOwnProperty(r)&&(t[r]=null),e(t,r,function(){function t(t,n,r){return function(){return e[r||"push"]([t,n,arguments]),l}}if(!o)throw n("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",r);var e=[],i=[],s=t("$injector","invoke"),l={_invokeQueue:e,_runBlocks:i,requires:o,name:r,provider:t("$provide","provider"),factory:t("$provide","factory"),service:t("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),animation:t("$animateProvider","register"),filter:t("$filterProvider","register"),controller:t("$controllerProvider","register"),directive:t("$compileProvider","directive"),config:s,run:function(t){return i.push(t),this}};return a&&s(a),l})}})}function se(e){f(e,{bootstrap:K,copy:M,extend:f,equals:H,element:$r,forEach:o,injector:Oe,noop:p,bind:q,toJson:B,fromJson:W,identity:g,isUndefined:m,isDefined:y,isString:b,isFunction:C,isObject:$,isNumber:w,isElement:A,isArray:Ar,version:jr,isDate:x,lowercase:hr,uppercase:gr,callbacks:{counter:0},$$minErr:r,$$csp:F}),wr=ae(t);try{wr("ngLocale")}catch(n){wr("ngLocale",[]).provider("$locale",nn)}wr("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:An}),t.provider("$compile",qe).directive({a:_i,input:Ri,textarea:Ri,form:ji,script:wo,select:To,style:So,option:ko,ngBind:Ji,ngBindHtml:Zi,ngBindTemplate:Ki,ngClass:to,ngClassEven:no,ngClassOdd:eo,ngCloak:ro,ngController:io,ngForm:Oi,ngHide:go,ngIf:ao,ngInclude:so,ngInit:uo,ngNonBindable:co,ngPluralize:fo,ngRepeat:ho,ngShow:po,ngStyle:vo,ngSwitch:mo,ngSwitchWhen:yo,ngSwitchDefault:$o,ngOptions:Co,ngTransclude:bo,ngModel:Ui,ngList:Yi,ngChange:Vi,required:Xi,ngRequired:Xi,ngValue:Gi}).directive({ngInclude:lo}).directive(Ai).directive(oo),t.provider({$anchorScroll:Me,$animate:ti,$browser:Fe,$cacheFactory:Pe,$controller:We,$document:ze,$exceptionHandler:Ue,$filter:qn,$interpolate:tn,$interval:en,$http:Ge,$httpBackend:Ke,$location:vn,$log:mn,$parse:Tn,$rootScope:_n,$q:kn,$sce:Mn,$sceDelegate:On,$sniffer:Ln,$templateCache:Re,$timeout:Hn,$window:Rn,$$rAF:En,$$asyncCallback:Le})}])}function le(){return++Mr}function ue(t){return t.replace(Fr,function(t,e,n,r){return r?n.toUpperCase():n}).replace(Pr,"Moz$1")}function ce(t,e,n,r){function i(t){var i,a,s,l,u,c,f,d=n&&t?[this.filter(t)]:[this],h=e;if(!r||null!=t)for(;d.length;)for(i=d.shift(),a=0,s=i.length;s>a;a++)for(l=$r(i[a]),h?l.triggerHandler("$destroy"):h=!h,u=0,c=(f=l.children()).length;c>u;u++)d.push(br(f[u]));return o.apply(this,arguments)}var o=br.fn[t];o=o.$original||o,i.$original=o,br.fn[t]=i}function fe(t){return!Ir.test(t)}function de(t,e){var n,r,i,o,a,s,l=e.createDocumentFragment(),u=[];if(fe(t))u.push(e.createTextNode(t));else{for(n=l.appendChild(e.createElement("div")),r=(Br.exec(t)||["",""])[1].toLowerCase(),i=zr[r]||zr._default,n.innerHTML="<div>&#160;</div>"+i[1]+t.replace(Wr,"<$1></$2>")+i[2],n.removeChild(n.firstChild),o=i[0];o--;)n=n.lastChild;for(a=0,s=n.childNodes.length;s>a;++a)u.push(n.childNodes[a]);n=l.firstChild,n.textContent=""}return l.textContent="",l.innerHTML="",u}function he(t,n){n=n||e;var r;return(r=qr.exec(t))?[n.createElement(r[1])]:de(t,n)}function pe(t){if(t instanceof pe)return t;if(b(t)&&(t=Nr(t)),!(this instanceof pe)){if(b(t)&&"<"!=t.charAt(0))throw Rr("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");return new pe(t)}if(b(t)){Te(this,he(t));var n=$r(e.createDocumentFragment());n.append(this)}else Te(this,t)}function ge(t){return t.cloneNode(!0)}function ve(t){ye(t);for(var e=0,n=t.childNodes||[];e<n.length;e++)ve(n[e])}function me(t,e,n,r){if(y(r))throw Rr("offargs","jqLite#off() does not support the `selector` argument");var i=$e(t,"events"),a=$e(t,"handle");a&&(m(e)?o(i,function(e,n){Hr(t,n,e),delete i[n]}):o(e.split(" "),function(e){m(n)?(Hr(t,e,i[e]),delete i[e]):O(i[e]||[],n)}))}function ye(t,e){var r=t.ng339,i=Or[r];if(i){if(e)return void delete Or[r].data[e];i.handle&&(i.events.$destroy&&i.handle({},"$destroy"),me(t)),delete Or[r],t.ng339=n}}function $e(t,e,n){var r=t.ng339,i=Or[r||-1];return y(n)?(i||(t.ng339=r=le(),i=Or[r]={}),void(i[e]=n)):i&&i[e]}function be(t,e,n){var r=$e(t,"data"),i=y(n),o=!i&&y(e),a=o&&!$(e);if(r||a||$e(t,"data",r={}),i)r[e]=n;else{if(!o)return r;if(a)return r&&r[e];f(r,e)}}function we(t,e){return t.getAttribute?(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1:!1}function xe(t,e){e&&t.setAttribute&&o(e.split(" "),function(e){t.setAttribute("class",Nr((" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Nr(e)+" "," ")))})}function Ce(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");o(e.split(" "),function(t){t=Nr(t),-1===n.indexOf(" "+t+" ")&&(n+=t+" ")}),t.setAttribute("class",Nr(n))}}function Te(t,e){if(e){e=e.nodeName||!y(e.length)||k(e)?[e]:e;for(var n=0;n<e.length;n++)t.push(e[n])}}function ke(t,e){return Se(t,"$"+(e||"ngController")+"Controller")}function Se(t,e,r){t=$r(t),9==t[0].nodeType&&(t=t.find("html"));for(var i=Ar(e)?e:[e];t.length;){for(var o=t[0],a=0,s=i.length;s>a;a++)if((r=t.data(i[a]))!==n)return r;t=$r(o.parentNode||11===o.nodeType&&o.host)}}function Ee(t){for(var e=0,n=t.childNodes;e<n.length;e++)ve(n[e]);for(;t.firstChild;)t.removeChild(t.firstChild)}function _e(t,e){var n=Vr[e.toLowerCase()];return n&&Xr[t.nodeName]&&n}function Ae(t,n){var r=function(r,i){if(r.preventDefault||(r.preventDefault=function(){r.returnValue=!1}),r.stopPropagation||(r.stopPropagation=function(){r.cancelBubble=!0}),r.target||(r.target=r.srcElement||e),m(r.defaultPrevented)){var a=r.preventDefault;r.preventDefault=function(){r.defaultPrevented=!0,a.call(r)},r.defaultPrevented=!1}r.isDefaultPrevented=function(){return r.defaultPrevented||r.returnValue===!1};var s=L(n[i||r.type]||[]);o(s,function(e){e.call(t,r)}),8>=yr?(r.preventDefault=null,r.stopPropagation=null,r.isDefaultPrevented=null):(delete r.preventDefault,delete r.stopPropagation,delete r.isDefaultPrevented)};return r.elem=t,r}function Ne(t,e){var r,i=typeof t;return"function"==i||"object"==i&&null!==t?"function"==typeof(r=t.$$hashKey)?r=t.$$hashKey():r===n&&(r=t.$$hashKey=(e||u)()):r=t,i+":"+r}function De(t,e){if(e){var n=0;this.nextUid=function(){return++n}}o(t,this.put,this)}function je(t){var e,n,r,i;return"function"==typeof t?(e=t.$inject)||(e=[],t.length&&(n=t.toString().replace(Jr,""),r=n.match(Yr),o(r[1].split(Qr),function(t){t.replace(Gr,function(t,n,r){e.push(r)})})),t.$inject=e):Ar(t)?(i=t.length-1,ne(t[i],"fn"),e=t.slice(0,i)):ne(t,"fn",!0),e}function Oe(t){function e(t){return function(e,n){return $(e)?void o(e,l(t)):t(e,n)}}function n(t,e){if(re(t,"service"),(C(e)||Ar(e))&&(e=w.instantiate(e)),!e.$get)throw Kr("pget","Provider '{0}' must define $get factory method.",t);return y[t+h]=e}function r(t,e){return n(t,{$get:e})}function i(t,e){return r(t,["$injector",function(t){return t.instantiate(e)}])}function a(t,e){return r(t,v(e))}function s(t,e){re(t,"constant"),y[t]=e,x[t]=e}function u(t,e){var n=w.get(t+h),r=n.$get;n.$get=function(){var t=T.invoke(r,n);return T.invoke(e,null,{$delegate:t})}}function c(t){var e,n,r,i,a=[];return o(t,function(t){if(!m.get(t)){m.put(t,!0);try{if(b(t))for(e=wr(t),a=a.concat(c(e.requires)).concat(e._runBlocks),n=e._invokeQueue,r=0,i=n.length;i>r;r++){var o=n[r],s=w.get(o[0]);s[o[1]].apply(s,o[2])}else C(t)?a.push(w.invoke(t)):Ar(t)?a.push(w.invoke(t)):ne(t,"module")}catch(l){throw Ar(t)&&(t=t[t.length-1]),l.message&&l.stack&&-1==l.stack.indexOf(l.message)&&(l=l.message+"\n"+l.stack),Kr("modulerr","Failed to instantiate module {0} due to:\n{1}",t,l.stack||l.message||l)}}}),a}function f(t,e){function n(n){if(t.hasOwnProperty(n)){if(t[n]===d)throw Kr("cdep","Circular dependency found: {0}",n+" <- "+g.join(" <- "));return t[n]}try{return g.unshift(n),t[n]=d,t[n]=e(n)}catch(r){throw t[n]===d&&delete t[n],r}finally{g.shift()}}function r(t,e,r){var i,o,a,s=[],l=je(t);for(o=0,i=l.length;i>o;o++){if(a=l[o],"string"!=typeof a)throw Kr("itkn","Incorrect injection token! Expected service name as string, got {0}",a);s.push(r&&r.hasOwnProperty(a)?r[a]:n(a))}return Ar(t)&&(t=t[i]),t.apply(e,s)}function i(t,e){var n,i,o=function(){};return o.prototype=(Ar(t)?t[t.length-1]:t).prototype,n=new o,i=r(t,n,e),$(i)||C(i)?i:n}return{invoke:r,instantiate:i,get:n,annotate:je,has:function(e){return y.hasOwnProperty(e+h)||t.hasOwnProperty(e)}}}var d={},h="Provider",g=[],m=new De([],!0),y={$provide:{provider:e(n),factory:e(r),service:e(i),value:e(a),constant:e(s),decorator:u}},w=y.$injector=f(y,function(){throw Kr("unpr","Unknown provider: {0}",g.join(" <- "))}),x={},T=x.$injector=f(x,function(t){var e=w.get(t+h);return T.invoke(e.$get,e)});return o(c(t),function(t){T.invoke(t||p)}),T}function Me(){var t=!0;this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,r){function i(t){var e=null;return o(t,function(t){e||"a"!==hr(t.nodeName)||(e=t)}),e}function a(){var t,r=n.hash();r?(t=s.getElementById(r))?t.scrollIntoView():(t=i(s.getElementsByName(r)))?t.scrollIntoView():"top"===r&&e.scrollTo(0,0):e.scrollTo(0,0)}var s=e.document;return t&&r.$watch(function(){return n.hash()},function(){r.$evalAsync(a)}),a}]}function Le(){this.$get=["$$rAF","$timeout",function(t,e){return t.supported?function(e){return t(e)}:function(t){return e(t,0,!1)}}]}function He(t,e,r,i){function a(t){try{t.apply(null,R(arguments,1))}finally{if(y--,0===y)for(;$.length;)try{$.pop()()}catch(e){r.error(e)}}}function s(t,e){!function n(){o(x,function(t){t()}),w=e(n,t)}()}function l(){k=null,C!=u.url()&&(C=u.url(),o(S,function(t){t(u.url())}))}var u=this,c=e[0],f=t.location,d=t.history,h=t.setTimeout,g=t.clearTimeout,v={};u.isMock=!1;var y=0,$=[];u.$$completeOutstandingRequest=a,u.$$incOutstandingRequestCount=function(){y++},u.notifyWhenNoOutstandingRequests=function(t){o(x,function(t){t()}),0===y?t():$.push(t)};var w,x=[];u.addPollFn=function(t){return m(w)&&s(100,h),x.push(t),t};var C=f.href,T=e.find("base"),k=null;u.url=function(e,n){if(f!==t.location&&(f=t.location),d!==t.history&&(d=t.history),e){if(C==e)return;return C=e,i.history?n?d.replaceState(null,"",e):(d.pushState(null,"",e),T.attr("href",T.attr("href"))):(k=e,n?f.replace(e):f.href=e),u}return k||f.href.replace(/%27/g,"'")};var S=[],E=!1;u.onUrlChange=function(e){return E||(i.history&&$r(t).on("popstate",l),i.hashchange?$r(t).on("hashchange",l):u.addPollFn(l),E=!0),S.push(e),e},u.baseHref=function(){var t=T.attr("href");return t?t.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var _={},A="",N=u.baseHref();u.cookies=function(t,e){var i,o,a,s,l;if(!t){if(c.cookie!==A)for(A=c.cookie,o=A.split("; "),_={},s=0;s<o.length;s++)a=o[s],l=a.indexOf("="),l>0&&(t=unescape(a.substring(0,l)),_[t]===n&&(_[t]=unescape(a.substring(l+1))));return _}e===n?c.cookie=escape(t)+"=;path="+N+";expires=Thu, 01 Jan 1970 00:00:00 GMT":b(e)&&(i=(c.cookie=escape(t)+"="+escape(e)+";path="+N).length+1,i>4096&&r.warn("Cookie '"+t+"' possibly not set or overflowed because it was too large ("+i+" > 4096 bytes)!"))},u.defer=function(t,e){var n;return y++,n=h(function(){delete v[n],a(t)},e||0),v[n]=!0,n},u.defer.cancel=function(t){return v[t]?(delete v[t],g(t),a(p),!0):!1}}function Fe(){this.$get=["$window","$log","$sniffer","$document",function(t,e,n,r){return new He(t,r,e,n)}]}function Pe(){this.$get=function(){function t(t,n){function i(t){t!=d&&(h?h==t&&(h=t.n):h=t,o(t.n,t.p),o(t,d),d=t,d.n=null)}function o(t,e){t!=e&&(t&&(t.p=e),e&&(e.n=t))}if(t in e)throw r("$cacheFactory")("iid","CacheId '{0}' is already taken!",t);var a=0,s=f({},n,{id:t}),l={},u=n&&n.capacity||Number.MAX_VALUE,c={},d=null,h=null;return e[t]={put:function(t,e){if(u<Number.MAX_VALUE){var n=c[t]||(c[t]={key:t});i(n)}if(!m(e))return t in l||a++,l[t]=e,a>u&&this.remove(h.key),e},get:function(t){if(u<Number.MAX_VALUE){var e=c[t];if(!e)return;i(e)}return l[t]},remove:function(t){if(u<Number.MAX_VALUE){var e=c[t];if(!e)return;e==d&&(d=e.p),e==h&&(h=e.n),o(e.n,e.p),delete c[t]}delete l[t],a--},removeAll:function(){l={},a=0,c={},d=h=null},destroy:function(){l=null,s=null,c=null,delete e[t]},info:function(){return f({},s,{size:a})}}}var e={};return t.info=function(){var t={};return o(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function Re(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function qe(t,r){var i={},a="Directive",s=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,u=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,c=/^(on[a-z]+|formaction)$/;this.directive=function d(e,n){return re(e,"directive"),b(e)?(ee(n,"directiveFactory"),i.hasOwnProperty(e)||(i[e]=[],t.factory(e+a,["$injector","$exceptionHandler",function(t,n){var r=[];return o(i[e],function(i,o){try{var a=t.invoke(i);C(a)?a={compile:v(a)}:!a.compile&&a.link&&(a.compile=v(a.link)),a.priority=a.priority||0,a.index=o,a.name=a.name||e,a.require=a.require||a.controller&&a.name,a.restrict=a.restrict||"A",r.push(a)}catch(s){n(s)}}),r}])),i[e].push(n)):o(e,l(d)),this},this.aHrefSanitizationWhitelist=function(t){return y(t)?(r.aHrefSanitizationWhitelist(t),this):r.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return y(t)?(r.imgSrcSanitizationWhitelist(t),this):r.imgSrcSanitizationWhitelist()},this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(t,r,l,d,p,v,m,y,w,x,T,k){function S(t,e,n,r,i){t instanceof $r||(t=$r(t)),o(t,function(e,n){3==e.nodeType&&e.nodeValue.match(/\S+/)&&(t[n]=e=$r(e).wrap("<span></span>").parent()[0])});var a=_(t,e,t,n,r,i);return E(t,"ng-scope"),function(e,n,r,i){ee(e,"scope");var s=n?Ur.clone.call(t):t;o(r,function(t,e){s.data("$"+e+"Controller",t)});for(var l=0,u=s.length;u>l;l++){var c=s[l],f=c.nodeType;(1===f||9===f)&&s.eq(l).data("$scope",e)}return n&&n(s,e),a&&a(e,s,s,i),s}}function E(t,e){try{t.addClass(e)}catch(n){}}function _(t,e,r,i,o,a){function s(t,r,i,o){var a,s,l,u,c,f,d,h,g,v=r.length,m=new Array(v);for(f=0;v>f;f++)m[f]=r[f];for(f=0,h=0,d=p.length;d>f;h++)l=m[h],a=p[f++],s=p[f++],u=$r(l),a?(a.scope?(c=t.$new(),u.data("$scope",c)):c=t,g=a.transcludeOnThisElement?A(t,a.transclude,o):!a.templateOnThisElement&&o?o:!o&&e?A(t,e):null,a(s,c,l,i,g)):s&&s(t,l.childNodes,n,o)}for(var l,u,c,f,d,h,p=[],g=0;g<t.length;g++)l=new Q,u=N(t[g],[],l,0===g?i:n,o),c=u.length?O(u,t[g],l,e,r,null,[],[],a):null,c&&c.scope&&E($r(t[g]),"ng-scope"),d=c&&c.terminal||!(f=t[g].childNodes)||!f.length?null:_(f,c?(c.transcludeOnThisElement||!c.templateOnThisElement)&&c.transclude:e),p.push(c,d),h=h||c||d,a=null;return h?s:null}function A(t,e,n){var r=function(r,i,o){var a=!1;r||(r=t.$new(),r.$$transcluded=!0,a=!0);var s=e(r,i,o,n);return a&&s.on("$destroy",function(){r.$destroy()}),s};return r}function N(t,e,n,r,i){var o,a,l=t.nodeType,c=n.$attr;switch(l){case 1:F(e,Ie(xr(t).toLowerCase()),"E",r,i);for(var f,d,h,p,g,v,m=t.attributes,y=0,$=m&&m.length;$>y;y++){var w=!1,x=!1;if(f=m[y],!yr||yr>=8||f.specified){d=f.name,g=Nr(f.value),p=Ie(d),(v=te.test(p))&&(d=Z(p.substr(6),"-"));var C=p.replace(/(Start|End)$/,"");p===C+"Start"&&(w=d,x=d.substr(0,d.length-5)+"end",d=d.substr(0,d.length-6)),h=Ie(d.toLowerCase()),c[h]=d,(v||!n.hasOwnProperty(h))&&(n[h]=g,_e(t,h)&&(n[h]=!0)),V(t,e,g,h),F(e,h,"A",r,i,w,x)}}if(a=t.className,b(a)&&""!==a)for(;o=u.exec(a);)h=Ie(o[2]),F(e,h,"C",r,i)&&(n[h]=Nr(o[3])),a=a.substr(o.index+o[0].length);break;case 3:W(e,t.nodeValue);break;case 8:try{o=s.exec(t.nodeValue),o&&(h=Ie(o[1]),F(e,h,"M",r,i)&&(n[h]=Nr(o[2])))}catch(T){}}return e.sort(I),e}function D(t,e,n){var r=[],i=0;if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw ei("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",e,n);1==t.nodeType&&(t.hasAttribute(e)&&i++,t.hasAttribute(n)&&i--),r.push(t),t=t.nextSibling}while(i>0)}else r.push(t);return $r(r)}function j(t,e,n){return function(r,i,o,a,s){return i=D(i[0],e,n),t(r,i,o,a,s)}}function O(t,i,a,s,u,c,f,d,h){function p(t,e,n,r){t&&(n&&(t=j(t,n,r)),t.require=x.require,t.directiveName=T,(I===x||x.$$isolateScope)&&(t=Y(t,{isolateScope:!0})),f.push(t)),e&&(n&&(e=j(e,n,r)),e.require=x.require,e.directiveName=T,(I===x||x.$$isolateScope)&&(e=Y(e,{isolateScope:!0})),d.push(e))}function g(t,e,n,r){var i,a="data",s=!1;if(b(e)){for(;"^"==(i=e.charAt(0))||"?"==i;)e=e.substr(1),"^"==i&&(a="inheritedData"),s=s||"?"==i;if(i=null,r&&"data"===a&&(i=r[e]),i=i||n[a]("$"+e+"Controller"),!i&&!s)throw ei("ctreq","Controller '{0}', required by directive '{1}', can't be found!",e,t);return i}return Ar(e)&&(i=[],o(e,function(e){i.push(g(t,e,n,r))})),i}function y(t,e,s,u,c){function h(t,e){var r;return arguments.length<2&&(e=t,t=n),J&&(r=k),c(t,e,r)}var p,y,$,b,w,x,C,T,k={};if(p=i===s?a:L(a,new Q($r(s),a.$attr)),y=p.$$element,I){var S=/^\s*([@=&])(\??)\s*(\w*)\s*$/,_=$r(s);C=e.$new(!0),!W||W!==I&&W!==I.$$originalDirective?_.data("$isolateScopeNoTemplate",C):_.data("$isolateScope",C),E(_,"ng-isolate-scope"),o(I.scope,function(t,n){var i,o,a,s,l=t.match(S)||[],u=l[3]||n,c="?"==l[2],f=l[1];switch(C.$$isolateBindings[n]=f+u,f){case"@":p.$observe(u,function(t){C[n]=t}),p.$$observers[u].$$scope=e,p[u]&&(C[n]=r(p[u])(e));break;case"=":if(c&&!p[u])return;o=v(p[u]),s=o.literal?H:function(t,e){return t===e},a=o.assign||function(){throw i=C[n]=o(e),ei("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",p[u],I.name)},i=C[n]=o(e),C.$watch(function(){var t=o(e);return s(t,C[n])||(s(t,i)?a(e,t=C[n]):C[n]=t),i=t},null,o.literal);break;case"&":o=v(p[u]),C[n]=function(t){return o(e,t)};break;default:throw ei("iscp","Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}",I.name,n,t)}})}for(T=c&&h,F&&o(F,function(t){var n,r={$scope:t===I||t.$$isolateScope?C:e,$element:y,$attrs:p,$transclude:T};x=t.controller,"@"==x&&(x=p[t.name]),n=m(x,r),k[t.name]=n,J||y.data("$"+t.name+"Controller",n),t.controllerAs&&(r.$scope[t.controllerAs]=n)}),$=0,b=f.length;b>$;$++)try{w=f[$],w(w.isolateScope?C:e,y,p,w.require&&g(w.directiveName,w.require,y,k),T)}catch(A){l(A,U(y))}var N=e;for(I&&(I.template||null===I.templateUrl)&&(N=C),t&&t(N,s.childNodes,n,c),$=d.length-1;$>=0;$--)try{w=d[$],w(w.isolateScope?C:e,y,p,w.require&&g(w.directiveName,w.require,y,k),T)}catch(A){l(A,U(y))}}h=h||{};for(var w,x,T,k,_,A,O=-Number.MAX_VALUE,F=h.controllerDirectives,I=h.newIsolateScopeDirective,W=h.templateDirective,z=h.nonTlbTranscludeDirective,V=!1,G=!1,J=h.hasElementTranscludeDirective,Z=a.$$element=$r(i),te=c,ee=s,ne=0,re=t.length;re>ne;ne++){x=t[ne];var ie=x.$$start,oe=x.$$end;if(ie&&(Z=D(i,ie,oe)),k=n,O>x.priority)break;if((A=x.scope)&&(w=w||x,x.templateUrl||(B("new/isolated scope",I,x,Z),$(A)&&(I=x))),T=x.name,!x.templateUrl&&x.controller&&(A=x.controller,F=F||{},B("'"+T+"' controller",F[T],x,Z),F[T]=x),(A=x.transclude)&&(V=!0,x.$$tlb||(B("transclusion",z,x,Z),z=x),"element"==A?(J=!0,O=x.priority,k=D(i,ie,oe),Z=a.$$element=$r(e.createComment(" "+T+": "+a[T]+" ")),i=Z[0],X(u,$r(R(k)),i),ee=S(k,s,O,te&&te.name,{nonTlbTranscludeDirective:z})):(k=$r(ge(i)).contents(),Z.empty(),ee=S(k,s))),x.template)if(G=!0,B("template",W,x,Z),W=x,A=C(x.template)?x.template(Z,a):x.template,A=K(A),x.replace){if(te=x,k=fe(A)?[]:$r(Nr(A)),i=k[0],1!=k.length||1!==i.nodeType)throw ei("tplrt","Template for directive '{0}' must have exactly one root element. {1}",T,"");X(u,Z,i);var ae={$attr:{}},se=N(i,[],ae),le=t.splice(ne+1,t.length-(ne+1));I&&M(se),t=t.concat(se).concat(le),P(a,ae),re=t.length}else Z.html(A);if(x.templateUrl)G=!0,B("template",W,x,Z),W=x,x.replace&&(te=x),y=q(t.splice(ne,t.length-ne),Z,a,u,V&&ee,f,d,{controllerDirectives:F,newIsolateScopeDirective:I,templateDirective:W,nonTlbTranscludeDirective:z}),re=t.length;else if(x.compile)try{_=x.compile(Z,a,ee),C(_)?p(null,_,ie,oe):_&&p(_.pre,_.post,ie,oe)}catch(ue){l(ue,U(Z))}x.terminal&&(y.terminal=!0,O=Math.max(O,x.priority))}return y.scope=w&&w.scope===!0,y.transcludeOnThisElement=V,y.templateOnThisElement=G,y.transclude=ee,h.hasElementTranscludeDirective=J,y}function M(t){for(var e=0,n=t.length;n>e;e++)t[e]=h(t[e],{$$isolateScope:!0})}function F(e,r,o,s,u,c,f){if(r===u)return null;var d=null;if(i.hasOwnProperty(r))for(var p,g=t.get(r+a),v=0,m=g.length;m>v;v++)try{p=g[v],(s===n||s>p.priority)&&-1!=p.restrict.indexOf(o)&&(c&&(p=h(p,{$$start:c,$$end:f})),e.push(p),d=p)}catch(y){l(y)}return d}function P(t,e){var n=e.$attr,r=t.$attr,i=t.$$element;o(t,function(r,i){"$"!=i.charAt(0)&&(e[i]&&e[i]!==r&&(r+=("style"===i?";":" ")+e[i]),t.$set(i,r,!0,n[i]))}),o(e,function(e,o){"class"==o?(E(i,e),t["class"]=(t["class"]?t["class"]+" ":"")+e):"style"==o?(i.attr("style",i.attr("style")+";"+e),t.style=(t.style?t.style+";":"")+e):"$"==o.charAt(0)||t.hasOwnProperty(o)||(t[o]=e,r[o]=n[o])})}function q(t,e,n,r,i,a,s,l){var u,c,h=[],g=e[0],v=t.shift(),m=f({},v,{templateUrl:null,transclude:null,replace:null,$$originalDirective:v}),y=C(v.templateUrl)?v.templateUrl(e,n):v.templateUrl;return e.empty(),d.get(x.getTrustedResourceUrl(y),{cache:p}).success(function(f){var d,p,b,w;if(f=K(f),v.replace){if(b=fe(f)?[]:$r(Nr(f)),d=b[0],1!=b.length||1!==d.nodeType)throw ei("tplrt","Template for directive '{0}' must have exactly one root element. {1}",v.name,y);p={$attr:{}},X(r,e,d);var x=N(d,[],p);$(v.scope)&&M(x),t=x.concat(t),P(n,p)}else d=g,e.html(f);for(t.unshift(m),u=O(t,d,n,i,e,v,a,s,l),o(r,function(t,n){t==d&&(r[n]=e[0])}),c=_(e[0].childNodes,i);h.length;){var C=h.shift(),T=h.shift(),k=h.shift(),S=h.shift(),D=e[0];if(T!==g){var j=T.className;l.hasElementTranscludeDirective&&v.replace||(D=ge(d)),X(k,$r(T),D),E($r(D),j)}w=u.transcludeOnThisElement?A(C,u.transclude,S):S,u(c,C,D,r,w)}h=null}).error(function(t,e,n,r){throw ei("tpload","Failed to load template: {0}",r.url)}),function(t,e,n,r,i){var o=i;h?(h.push(e),h.push(n),h.push(r),h.push(o)):(u.transcludeOnThisElement&&(o=A(e,u.transclude,i)),u(c,e,n,r,o))}}function I(t,e){var n=e.priority-t.priority;return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function B(t,e,n,r){if(e)throw ei("multidir","Multiple directives [{0}, {1}] asking for {2} on: {3}",e.name,n.name,t,U(r))}function W(t,e){var n=r(e,!0);n&&t.push({priority:0,compile:function(t){var e=t.parent(),r=e.length;return r&&E(t.parent(),"ng-binding"),function(t,e){var i=e.parent(),o=i.data("$binding")||[];o.push(n),i.data("$binding",o),r||E(i,"ng-binding"),t.$watch(n,function(t){e[0].nodeValue=t})}}})}function z(t,e){if("srcdoc"==e)return x.HTML;var n=xr(t);return"xlinkHref"==e||"FORM"==n&&"action"==e||"IMG"!=n&&("src"==e||"ngSrc"==e)?x.RESOURCE_URL:void 0}function V(t,e,n,i){var o=r(n,!0);if(o){if("multiple"===i&&"SELECT"===xr(t))throw ei("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",U(t));e.push({priority:100,compile:function(){return{pre:function(e,n,a){var s=a.$$observers||(a.$$observers={});if(c.test(i))throw ei("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");o=r(a[i],!0,z(t,i)),o&&(a[i]=o(e),(s[i]||(s[i]=[])).$$inter=!0,(a.$$observers&&a.$$observers[i].$$scope||e).$watch(o,function(t,e){"class"===i&&t!=e?a.$updateClass(t,e):a.$set(i,t)}))}}}})}}function X(t,n,r){var i,o,a=n[0],s=n.length,l=a.parentNode;if(t)for(i=0,o=t.length;o>i;i++)if(t[i]==a){t[i++]=r;for(var u=i,c=u+s-1,f=t.length;f>u;u++,c++)f>c?t[u]=t[c]:delete t[u];t.length-=s-1;
break}l&&l.replaceChild(r,a);var d=e.createDocumentFragment();d.appendChild(a),r[$r.expando]=a[$r.expando];for(var h=1,p=n.length;p>h;h++){var g=n[h];$r(g).remove(),d.appendChild(g),delete n[h]}n[0]=r,n.length=1}function Y(t,e){return f(function(){return t.apply(null,arguments)},t,e)}var Q=function(t,e){this.$$element=t,this.$attr=e||{}};Q.prototype={$normalize:Ie,$addClass:function(t){t&&t.length>0&&T.addClass(this.$$element,t)},$removeClass:function(t){t&&t.length>0&&T.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=Be(t,e),r=Be(e,t);0===n.length?T.removeClass(this.$$element,r):0===r.length?T.addClass(this.$$element,n):T.setClass(this.$$element,n,r)},$set:function(t,e,r,i){var a,s=_e(this.$$element[0],t);s&&(this.$$element.prop(t,e),i=s),this[t]=e,i?this.$attr[t]=i:(i=this.$attr[t],i||(this.$attr[t]=i=Z(t,"-"))),a=xr(this.$$element),("A"===a&&"href"===t||"IMG"===a&&"src"===t)&&(this[t]=e=k(e,"src"===t)),r!==!1&&(null===e||e===n?this.$$element.removeAttr(i):this.$$element.attr(i,e));var u=this.$$observers;u&&o(u[t],function(t){try{t(e)}catch(n){l(n)}})},$observe:function(t,e){var n=this,r=n.$$observers||(n.$$observers={}),i=r[t]||(r[t]=[]);return i.push(e),y.$evalAsync(function(){i.$$inter||e(n[t])}),e}};var G=r.startSymbol(),J=r.endSymbol(),K="{{"==G||"}}"==J?g:function(t){return t.replace(/\{\{/g,G).replace(/}}/g,J)},te=/^ngAttr[A-Z]/;return S}]}function Ie(t){return ue(t.replace(ni,""))}function Be(t,e){var n="",r=t.split(/\s+/),i=e.split(/\s+/);t:for(var o=0;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue t;n+=(n.length>0?" ":"")+a}return n}function We(){var t={},e=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(e,n){re(e,"controller"),$(e)?f(t,e):t[e]=n},this.$get=["$injector","$window",function(n,i){return function(o,a){var s,l,u,c;if(b(o)&&(l=o.match(e),u=l[1],c=l[3],o=t.hasOwnProperty(u)?t[u]:ie(a.$scope,u,!0)||ie(i,u,!0),ne(o,u,!0)),s=n.instantiate(o,a),c){if(!a||"object"!=typeof a.$scope)throw r("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",u||o.name,c);a.$scope[c]=s}return s}}]}function ze(){this.$get=["$window",function(t){return $r(t.document)}]}function Ue(){this.$get=["$log",function(t){return function(){t.error.apply(t,arguments)}}]}function Ve(t){var e,n,r,i={};return t?(o(t.split("\n"),function(t){r=t.indexOf(":"),e=hr(Nr(t.substr(0,r))),n=Nr(t.substr(r+1)),e&&(i[e]?i[e]+=", "+n:i[e]=n)}),i):i}function Xe(t){var e=$(t)?t:n;return function(n){return e||(e=Ve(t)),n?e[hr(n)]||null:e}}function Ye(t,e,n){return C(n)?n(t,e):(o(n,function(n){t=n(t,e)}),t)}function Qe(t){return t>=200&&300>t}function Ge(){var t=/^\s*(\[|\{[^\{])/,e=/[\}\]]\s*$/,r=/^\)\]\}',?\n/,i={"Content-Type":"application/json;charset=utf-8"},a=this.defaults={transformResponse:[function(n){return b(n)&&(n=n.replace(r,""),t.test(n)&&e.test(n)&&(n=W(n))),n}],transformRequest:[function(t){return!$(t)||E(t)||_(t)?t:B(t)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:L(i),put:L(i),patch:L(i)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},l=this.interceptors=[],u=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(t,e,r,i,c,d){function h(t){function e(t){var e=f({},t,{data:Ye(t.data,t.headers,i.transformResponse)});return Qe(t.status)?e:c.reject(e)}function r(t){function e(t){var e;o(t,function(n,r){C(n)&&(e=n(),null!=e?t[r]=e:delete t[r])})}var n,r,i,s=a.headers,l=f({},t.headers);s=f({},s.common,s[hr(t.method)]);t:for(n in s){r=hr(n);for(i in l)if(hr(i)===r)continue t;l[n]=s[n]}return e(l),l}var i={method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse},s=r(t);f(i,t),i.headers=s,i.method=gr(i.method);var l=function(t){s=t.headers;var n=Ye(t.data,Xe(s),t.transformRequest);return m(n)&&o(s,function(t,e){"content-type"===hr(e)&&delete s[e]}),m(t.withCredentials)&&!m(a.withCredentials)&&(t.withCredentials=a.withCredentials),v(t,n,s).then(e,e)},u=[l,n],d=c.when(i);for(o(T,function(t){(t.request||t.requestError)&&u.unshift(t.request,t.requestError),(t.response||t.responseError)&&u.push(t.response,t.responseError)});u.length;){var h=u.shift(),p=u.shift();d=d.then(h,p)}return d.success=function(t){return d.then(function(e){t(e.data,e.status,e.headers,i)}),d},d.error=function(t){return d.then(null,function(e){t(e.data,e.status,e.headers,i)}),d},d}function p(){o(arguments,function(t){h[t]=function(e,n){return h(f(n||{},{method:t,url:e}))}})}function g(){o(arguments,function(t){h[t]=function(e,n,r){return h(f(r||{},{method:t,url:e,data:n}))}})}function v(r,o,s){function l(t,e,n,r){d&&(Qe(t)?d.put(b,[t,e,Ve(n),r]):d.remove(b)),u(e,t,n,r),i.$$phase||i.$apply()}function u(t,e,n,i){e=Math.max(e,0),(Qe(e)?g.resolve:g.reject)({data:t,status:e,headers:Xe(n),config:r,statusText:i})}function f(){var t=j(h.pendingRequests,r);-1!==t&&h.pendingRequests.splice(t,1)}var d,p,g=c.defer(),v=g.promise,b=w(r.url,r.params);if(h.pendingRequests.push(r),v.then(f,f),(r.cache||a.cache)&&r.cache!==!1&&"GET"==r.method&&(d=$(r.cache)?r.cache:$(a.cache)?a.cache:x),d)if(p=d.get(b),y(p)){if(p.then)return p.then(f,f),p;Ar(p)?u(p[1],p[0],L(p[2]),p[3]):u(p,200,{},"OK")}else d.put(b,v);if(m(p)){var C=Pn(r.url)?e.cookies()[r.xsrfCookieName||a.xsrfCookieName]:n;C&&(s[r.xsrfHeaderName||a.xsrfHeaderName]=C),t(r.method,b,o,l,s,r.timeout,r.withCredentials,r.responseType)}return v}function w(t,e){if(!e)return t;var n=[];return s(e,function(t,e){null===t||m(t)||(Ar(t)||(t=[t]),o(t,function(t){$(t)&&(t=B(t)),n.push(G(e)+"="+G(t))}))}),n.length>0&&(t+=(-1==t.indexOf("?")?"?":"&")+n.join("&")),t}var x=r("$http"),T=[];return o(l,function(t){T.unshift(b(t)?d.get(t):d.invoke(t))}),o(u,function(t,e){var n=b(t)?d.get(t):d.invoke(t);T.splice(e,0,{response:function(t){return n(c.when(t))},responseError:function(t){return n(c.reject(t))}})}),h.pendingRequests=[],p("get","delete","head","jsonp"),g("post","put"),h.defaults=a,h}]}function Je(e){if(8>=yr&&(!e.match(/^(get|post|head|put|delete|options)$/i)||!t.XMLHttpRequest))return new t.ActiveXObject("Microsoft.XMLHTTP");if(t.XMLHttpRequest)return new t.XMLHttpRequest;throw r("$httpBackend")("noxhr","This browser does not support XMLHttpRequest.")}function Ke(){this.$get=["$browser","$window","$document",function(t,e,n){return Ze(t,Je,t.defer,e.angular.callbacks,n[0])}]}function Ze(t,e,n,r,i){function a(t,e,n){var o=i.createElement("script"),a=null;return o.type="text/javascript",o.src=t,o.async=!0,a=function(t){Hr(o,"load",a),Hr(o,"error",a),i.body.removeChild(o),o=null;var s=-1,l="unknown";t&&("load"!==t.type||r[e].called||(t={type:"error"}),l=t.type,s="error"===t.type?404:200),n&&n(s,l)},Lr(o,"load",a),Lr(o,"error",a),8>=yr&&(o.onreadystatechange=function(){b(o.readyState)&&/loaded|complete/.test(o.readyState)&&(o.onreadystatechange=null,a({type:"load"}))}),i.body.appendChild(o),a}var s=-1;return function(i,l,u,c,f,d,h,g){function v(){$=s,w&&w(),x&&x.abort()}function m(e,r,i,o,a){T&&n.cancel(T),w=x=null,0===r&&(r=i?200:"file"==Fn(l).protocol?404:0),r=1223===r?204:r,a=a||"",e(r,i,o,a),t.$$completeOutstandingRequest(p)}var $;if(t.$$incOutstandingRequestCount(),l=l||t.url(),"jsonp"==hr(i)){var b="_"+(r.counter++).toString(36);r[b]=function(t){r[b].data=t,r[b].called=!0};var w=a(l.replace("JSON_CALLBACK","angular.callbacks."+b),b,function(t,e){m(c,t,r[b].data,"",e),r[b]=p})}else{var x=e(i);if(x.open(i,l,!0),o(f,function(t,e){y(t)&&x.setRequestHeader(e,t)}),x.onreadystatechange=function(){if(x&&4==x.readyState){var t=null,e=null,n="";$!==s&&(t=x.getAllResponseHeaders(),e="response"in x?x.response:x.responseText),$===s&&10>yr||(n=x.statusText),m(c,$||x.status,e,t,n)}},h&&(x.withCredentials=!0),g)try{x.responseType=g}catch(C){if("json"!==g)throw C}x.send(u||null)}if(d>0)var T=n(v,d);else d&&d.then&&d.then(v)}}function tn(){var t="{{",e="}}";this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(o,l,u){for(var c,f,d,h,p=0,g=[],v=o.length,m=!1,y=[];v>p;)-1!=(c=o.indexOf(t,p))&&-1!=(f=o.indexOf(e,c+a))?(p!=c&&g.push(o.substring(p,c)),g.push(d=n(h=o.substring(c+a,f))),d.exp=h,p=f+s,m=!0):(p!=v&&g.push(o.substring(p)),p=v);if((v=g.length)||(g.push(""),v=1),u&&g.length>1)throw ri("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",o);return!l||m?(y.length=v,d=function(t){try{for(var e,n=0,a=v;a>n;n++){if("function"==typeof(e=g[n]))if(e=e(t),e=u?i.getTrusted(u,e):i.valueOf(e),null==e)e="";else switch(typeof e){case"string":break;case"number":e=""+e;break;default:e=B(e)}y[n]=e}return y.join("")}catch(s){var l=ri("interr","Can't interpolate: {0}\n{1}",o,s.toString());r(l)}},d.exp=o,d.parts=g,d):void 0}var a=t.length,s=e.length;return o.startSymbol=function(){return t},o.endSymbol=function(){return e},o}]}function en(){this.$get=["$rootScope","$window","$q",function(t,e,n){function r(r,o,a,s){var l=e.setInterval,u=e.clearInterval,c=n.defer(),f=c.promise,d=0,h=y(s)&&!s;return a=y(a)?a:0,f.then(null,null,r),f.$$intervalId=l(function(){c.notify(d++),a>0&&d>=a&&(c.resolve(d),u(f.$$intervalId),delete i[f.$$intervalId]),h||t.$apply()},o),i[f.$$intervalId]=c,f}var i={};return r.cancel=function(t){return t&&t.$$intervalId in i?(i[t.$$intervalId].reject("canceled"),e.clearInterval(t.$$intervalId),delete i[t.$$intervalId],!0):!1},r}]}function nn(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(t){return 1===t?"one":"other"}}}}function rn(t){for(var e=t.split("/"),n=e.length;n--;)e[n]=Q(e[n]);return e.join("/")}function on(t,e,n){var r=Fn(t,n);e.$$protocol=r.protocol,e.$$host=r.hostname,e.$$port=d(r.port)||oi[r.protocol]||null}function an(t,e,n){var r="/"!==t.charAt(0);r&&(t="/"+t);var i=Fn(t,n);e.$$path=decodeURIComponent(r&&"/"===i.pathname.charAt(0)?i.pathname.substring(1):i.pathname),e.$$search=X(i.search),e.$$hash=decodeURIComponent(i.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function sn(t,e){return 0===e.indexOf(t)?e.substr(t.length):void 0}function ln(t){var e=t.indexOf("#");return-1==e?t:t.substr(0,e)}function un(t){return t.substr(0,ln(t).lastIndexOf("/")+1)}function cn(t){return t.substring(0,t.indexOf("/",t.indexOf("//")+2))}function fn(t,e){this.$$html5=!0,e=e||"";var r=un(t);on(t,this,t),this.$$parse=function(e){var n=sn(r,e);if(!b(n))throw ai("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',e,r);an(n,this,t),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=Y(this.$$search),e=this.$$hash?"#"+Q(this.$$hash):"";this.$$url=rn(this.$$path)+(t?"?"+t:"")+e,this.$$absUrl=r+this.$$url.substr(1)},this.$$rewrite=function(i){var o,a;return(o=sn(t,i))!==n?(a=o,(o=sn(e,o))!==n?r+(sn("/",o)||o):t+a):(o=sn(r,i))!==n?r+o:r==i+"/"?r:void 0}}function dn(t,e){var n=un(t);on(t,this,t),this.$$parse=function(r){function i(t,e,n){var r,i=/^\/[A-Z]:(\/.*)/;return 0===e.indexOf(n)&&(e=e.replace(n,"")),i.exec(e)?t:(r=i.exec(t),r?r[1]:t)}var o=sn(t,r)||sn(n,r),a="#"==o.charAt(0)?sn(e,o):this.$$html5?o:"";if(!b(a))throw ai("ihshprfx",'Invalid url "{0}", missing hash prefix "{1}".',r,e);an(a,this,t),this.$$path=i(this.$$path,a,t),this.$$compose()},this.$$compose=function(){var n=Y(this.$$search),r=this.$$hash?"#"+Q(this.$$hash):"";this.$$url=rn(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=t+(this.$$url?e+this.$$url:"")},this.$$rewrite=function(e){return ln(t)==ln(e)?e:void 0}}function hn(t,e){this.$$html5=!0,dn.apply(this,arguments);var n=un(t);this.$$rewrite=function(r){var i;return t==ln(r)?r:(i=sn(n,r))?t+e+i:n===r+"/"?n:void 0},this.$$compose=function(){var n=Y(this.$$search),r=this.$$hash?"#"+Q(this.$$hash):"";this.$$url=rn(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=t+e+this.$$url}}function pn(t){return function(){return this[t]}}function gn(t,e){return function(n){return m(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function vn(){var e="",n=!1;this.hashPrefix=function(t){return y(t)?(e=t,this):e},this.html5Mode=function(t){return y(t)?(n=t,this):n},this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(r,i,o,a){function s(t){r.$broadcast("$locationChangeSuccess",l.absUrl(),t)}var l,u,c,f=i.baseHref(),d=i.url();n?(c=cn(d)+(f||"/"),u=o.history?fn:hn):(c=ln(d),u=dn),l=new u(c,"#"+e),l.$$parse(l.$$rewrite(d)),a.on("click",function(n){if(!n.ctrlKey&&!n.metaKey&&2!=n.which){for(var o=$r(n.target);"a"!==hr(o[0].nodeName);)if(o[0]===a[0]||!(o=o.parent())[0])return;var s=o.prop("href");if($(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=Fn(s.animVal).href),u===hn){var f=o.attr("href")||o.attr("xlink:href");if(f.indexOf("://")<0){var d="#"+e;if("/"==f[0])s=c+d+f;else if("#"==f[0])s=c+d+(l.path()||"/")+f;else{for(var h=l.path().split("/"),p=f.split("/"),g=0;g<p.length;g++)"."!=p[g]&&(".."==p[g]?h.pop():p[g].length&&h.push(p[g]));s=c+d+h.join("/")}}}var v=l.$$rewrite(s);s&&!o.attr("target")&&v&&!n.isDefaultPrevented()&&(n.preventDefault(),v!=i.url()&&(l.$$parse(v),r.$apply(),t.angular["ff-684208-preventDefault"]=!0))}}),l.absUrl()!=d&&i.url(l.absUrl(),!0),i.onUrlChange(function(t){l.absUrl()!=t&&(r.$evalAsync(function(){var e=l.absUrl();l.$$parse(t),r.$broadcast("$locationChangeStart",t,e).defaultPrevented?(l.$$parse(e),i.url(e)):s(e)}),r.$$phase||r.$digest())});var h=0;return r.$watch(function(){var t=i.url(),e=l.$$replace;return h&&t==l.absUrl()||(h++,r.$evalAsync(function(){r.$broadcast("$locationChangeStart",l.absUrl(),t).defaultPrevented?l.$$parse(t):(i.url(l.absUrl(),e),s(t))})),l.$$replace=!1,h}),l}]}function mn(){var t=!0,e=this;this.debugEnabled=function(e){return y(e)?(t=e,this):t},this.$get=["$window",function(n){function r(t){return t instanceof Error&&(t.stack?t=t.message&&-1===t.stack.indexOf(t.message)?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function i(t){var e=n.console||{},i=e[t]||e.log||p,a=!1;try{a=!!i.apply}catch(s){}return a?function(){var t=[];return o(arguments,function(e){t.push(r(e))}),i.apply(e,t)}:function(t,e){i(t,null==e?"":e)}}return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug");return function(){t&&n.apply(e,arguments)}}()}}]}function yn(t,e){if("__defineGetter__"===t||"__defineSetter__"===t||"__lookupGetter__"===t||"__lookupSetter__"===t||"__proto__"===t)throw li("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",e);return t}function $n(t,e){if(t){if(t.constructor===t)throw li("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e);if(t.document&&t.location&&t.alert&&t.setInterval)throw li("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",e);if(t.children&&(t.nodeName||t.prop&&t.attr&&t.find))throw li("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",e);if(t===Object)throw li("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",e)}return t}function bn(t,e){if(t){if(t.constructor===t)throw li("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e);if(t===ci||t===fi||di&&t===di)throw li("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",e)}}function wn(t,e,r,i,o){o=o||{};for(var a,s=e.split("."),l=0;s.length>1;l++){a=yn(s.shift(),i);var u=t[a];u||(u={},t[a]=u),t=u,t.then&&o.unwrapPromises&&(si(i),"$$v"in t||!function(t){t.then(function(e){t.$$v=e})}(t),t.$$v===n&&(t.$$v={}),t=t.$$v)}return a=yn(s.shift(),i),$n(t,i),$n(t[a],i),t[a]=r,r}function xn(t,e,r,i,o,a,s){return yn(t,a),yn(e,a),yn(r,a),yn(i,a),yn(o,a),s.unwrapPromises?function(s,l){var u,c=l&&l.hasOwnProperty(t)?l:s;return null==c?c:(c=c[t],c&&c.then&&(si(a),"$$v"in c||(u=c,u.$$v=n,u.then(function(t){u.$$v=t})),c=c.$$v),e?null==c?n:(c=c[e],c&&c.then&&(si(a),"$$v"in c||(u=c,u.$$v=n,u.then(function(t){u.$$v=t})),c=c.$$v),r?null==c?n:(c=c[r],c&&c.then&&(si(a),"$$v"in c||(u=c,u.$$v=n,u.then(function(t){u.$$v=t})),c=c.$$v),i?null==c?n:(c=c[i],c&&c.then&&(si(a),"$$v"in c||(u=c,u.$$v=n,u.then(function(t){u.$$v=t})),c=c.$$v),o?null==c?n:(c=c[o],c&&c.then&&(si(a),"$$v"in c||(u=c,u.$$v=n,u.then(function(t){u.$$v=t})),c=c.$$v),c):c):c):c):c)}:function(a,s){var l=s&&s.hasOwnProperty(t)?s:a;return null==l?l:(l=l[t],e?null==l?n:(l=l[e],r?null==l?n:(l=l[r],i?null==l?n:(l=l[i],o?null==l?n:l=l[o]:l):l):l):l)}}function Cn(t,e,r){if(mi.hasOwnProperty(t))return mi[t];var i,a=t.split("."),s=a.length;if(e.csp)i=6>s?xn(a[0],a[1],a[2],a[3],a[4],r,e):function(t,i){var o,l=0;do o=xn(a[l++],a[l++],a[l++],a[l++],a[l++],r,e)(t,i),i=n,t=o;while(s>l);return o};else{var l="var p;\n";o(a,function(t,n){yn(t,r),l+="if(s == null) return undefined;\ns="+(n?"s":'((k&&k.hasOwnProperty("'+t+'"))?k:s)')+'["'+t+'"];\n'+(e.unwrapPromises?'if (s && s.then) {\n pw("'+r.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")}),l+="return s;";var u=new Function("s","k","pw",l);u.toString=v(l),i=e.unwrapPromises?function(t,e){return u(t,e,si)}:u}return"hasOwnProperty"!==t&&(mi[t]=i),i}function Tn(){var t={},e={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(t){return y(t)?(e.unwrapPromises=!!t,this):e.unwrapPromises},this.logPromiseWarnings=function(t){return y(t)?(e.logPromiseWarnings=t,this):e.logPromiseWarnings},this.$get=["$filter","$sniffer","$log",function(n,r,i){return e.csp=r.csp,si=function(t){e.logPromiseWarnings&&!ui.hasOwnProperty(t)&&(ui[t]=!0,i.warn("[$parse] Promise found in the expression `"+t+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))},function(r){var i;switch(typeof r){case"string":if(t.hasOwnProperty(r))return t[r];var o=new gi(e),a=new vi(o,n,e);return i=a.parse(r),"hasOwnProperty"!==r&&(t[r]=i),i;case"function":return r;default:return p}}}]}function kn(){this.$get=["$rootScope","$exceptionHandler",function(t,e){return Sn(function(e){t.$evalAsync(e)},e)}]}function Sn(t,e){function r(t){return t}function i(t){return u(t)}function a(t){var e=s(),n=0,r=Ar(t)?[]:{};return o(t,function(t,i){n++,l(t).then(function(t){r.hasOwnProperty(i)||(r[i]=t,--n||e.resolve(r))},function(t){r.hasOwnProperty(i)||e.reject(t)})}),0===n&&e.resolve(r),e.promise}var s=function(){var o,a,u=[];return a={resolve:function(e){if(u){var r=u;u=n,o=l(e),r.length&&t(function(){for(var t,e=0,n=r.length;n>e;e++)t=r[e],o.then(t[0],t[1],t[2])})}},reject:function(t){a.resolve(c(t))},notify:function(e){if(u){var n=u;u.length&&t(function(){for(var t,r=0,i=n.length;i>r;r++)t=n[r],t[2](e)})}},promise:{then:function(t,n,a){var l=s(),c=function(n){try{l.resolve((C(t)?t:r)(n))}catch(i){l.reject(i),e(i)}},f=function(t){try{l.resolve((C(n)?n:i)(t))}catch(r){l.reject(r),e(r)}},d=function(t){try{l.notify((C(a)?a:r)(t))}catch(n){e(n)}};return u?u.push([c,f,d]):o.then(c,f,d),l.promise},"catch":function(t){return this.then(null,t)},"finally":function(t){function e(t,e){var n=s();return e?n.resolve(t):n.reject(t),n.promise}function n(n,i){var o=null;try{o=(t||r)()}catch(a){return e(a,!1)}return o&&C(o.then)?o.then(function(){return e(n,i)},function(t){return e(t,!1)}):e(n,i)}return this.then(function(t){return n(t,!0)},function(t){return n(t,!1)})}}}},l=function(e){return e&&C(e.then)?e:{then:function(n){var r=s();return t(function(){r.resolve(n(e))}),r.promise}}},u=function(t){var e=s();return e.reject(t),e.promise},c=function(n){return{then:function(r,o){var a=s();return t(function(){try{a.resolve((C(o)?o:i)(n))}catch(t){a.reject(t),e(t)}}),a.promise}}},f=function(n,o,a,c){var f,d=s(),h=function(t){try{return(C(o)?o:r)(t)}catch(n){return e(n),u(n)}},p=function(t){try{return(C(a)?a:i)(t)}catch(n){return e(n),u(n)}},g=function(t){try{return(C(c)?c:r)(t)}catch(n){e(n)}};return t(function(){l(n).then(function(t){f||(f=!0,d.resolve(l(t).then(h,p,g)))},function(t){f||(f=!0,d.resolve(p(t)))},function(t){f||d.notify(g(t))})}),d.promise};return{defer:s,reject:u,when:f,all:a}}function En(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame,r=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(t){var e=n(t);return function(){r(e)}}:function(t){var n=e(t,16.66,!1);return function(){e.cancel(n)}};return o.supported=i,o}]}function _n(){var t=10,e=r("$rootScope"),n=null;this.digestTtl=function(e){return arguments.length&&(t=e),t},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(r,a,s,l){function c(){this.$id=u(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this["this"]=this.$root=this,this.$$destroyed=!1,this.$$asyncQueue=[],this.$$postDigestQueue=[],this.$$listeners={},this.$$listenerCount={},this.$$isolateBindings={}}function f(t){if(m.$$phase)throw e("inprog","{0} already in progress",m.$$phase);m.$$phase=t}function d(){m.$$phase=null}function h(t,e){var n=s(t);return ne(n,e),n}function g(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n];while(t=t.$parent)}function v(){}c.prototype={constructor:c,$new:function(t){var e;return t?(e=new c,e.$root=this.$root,e.$$asyncQueue=this.$$asyncQueue,e.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$id=u(),this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),e=new this.$$childScopeClass),e["this"]=e,e.$parent=this,e.$$prevSibling=this.$$childTail,this.$$childHead?(this.$$childTail.$$nextSibling=e,this.$$childTail=e):this.$$childHead=this.$$childTail=e,e},$watch:function(t,e,r){var i=this,o=h(t,"watch"),a=i.$$watchers,s={fn:e,last:v,get:o,exp:t,eq:!!r};if(n=null,!C(e)){var l=h(e||p,"listener");s.fn=function(t,e,n){l(n)}}if("string"==typeof t&&o.constant){var u=s.fn;s.fn=function(t,e,n){u.call(this,t,e,n),O(a,s)}}return a||(a=i.$$watchers=[]),a.unshift(s),function(){O(a,s),n=null}},$watchCollection:function(t,e){function n(){o=d(u);var t,e;if($(o))if(i(o)){a!==h&&(a=h,v=a.length=0,f++),t=o.length,v!==t&&(f++,a.length=v=t);for(var n=0;t>n;n++){var r=a[n]!==a[n]&&o[n]!==o[n];r||a[n]===o[n]||(f++,a[n]=o[n])}}else{a!==p&&(a=p={},v=0,f++),t=0;for(e in o)o.hasOwnProperty(e)&&(t++,a.hasOwnProperty(e)?a[e]!==o[e]&&(f++,a[e]=o[e]):(v++,a[e]=o[e],f++));if(v>t){f++;for(e in a)a.hasOwnProperty(e)&&!o.hasOwnProperty(e)&&(v--,delete a[e])}}else a!==o&&(a=o,f++);return f}function r(){if(g?(g=!1,e(o,o,u)):e(o,l,u),c)if($(o))if(i(o)){l=new Array(o.length);for(var t=0;t<o.length;t++)l[t]=o[t]}else{l={};for(var n in o)pr.call(o,n)&&(l[n]=o[n])}else l=o}var o,a,l,u=this,c=e.length>1,f=0,d=s(t),h=[],p={},g=!0,v=0;return this.$watch(n,r)},$digest:function(){var r,i,o,s,l,u,c,h,p,g,m,y=this.$$asyncQueue,$=this.$$postDigestQueue,b=t,w=this,x=[];f("$digest"),n=null;do{for(u=!1,h=w;y.length;){try{m=y.shift(),m.scope.$eval(m.expression)}catch(T){d(),a(T)}n=null}t:do{if(s=h.$$watchers)for(l=s.length;l--;)try{if(r=s[l])if((i=r.get(h))===(o=r.last)||(r.eq?H(i,o):"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))){if(r===n){u=!1;break t}}else u=!0,n=r,r.last=r.eq?M(i,null):i,r.fn(i,o===v?i:o,h),5>b&&(p=4-b,x[p]||(x[p]=[]),g=C(r.exp)?"fn: "+(r.exp.name||r.exp.toString()):r.exp,g+="; newVal: "+B(i)+"; oldVal: "+B(o),x[p].push(g))}catch(T){d(),a(T)}if(!(c=h.$$childHead||h!==w&&h.$$nextSibling))for(;h!==w&&!(c=h.$$nextSibling);)h=h.$parent}while(h=c);if((u||y.length)&&!b--)throw d(),e("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",t,B(x))}while(u||y.length);for(d();$.length;)try{$.shift()()}catch(T){a(T)}},$destroy:function(){if(!this.$$destroyed){var t=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,this!==m&&(o(this.$$listenerCount,q(null,g,this)),t.$$childHead==this&&(t.$$childHead=this.$$nextSibling),t.$$childTail==this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=p,this.$on=this.$watch=function(){return p})}},$eval:function(t,e){return s(t)(this,e)},$evalAsync:function(t){m.$$phase||m.$$asyncQueue.length||l.defer(function(){m.$$asyncQueue.length&&m.$digest()}),this.$$asyncQueue.push({scope:this,expression:t})},$$postDigest:function(t){this.$$postDigestQueue.push(t)},$apply:function(t){try{return f("$apply"),this.$eval(t)}catch(e){a(e)}finally{d();try{m.$digest()}catch(e){throw a(e),e}}},$on:function(t,e){var n=this.$$listeners[t];n||(this.$$listeners[t]=n=[]),n.push(e);var r=this;do r.$$listenerCount[t]||(r.$$listenerCount[t]=0),r.$$listenerCount[t]++;while(r=r.$parent);var i=this;return function(){n[j(n,e)]=null,g(i,1,t)}},$emit:function(t){var e,n,r,i=[],o=this,s=!1,l={name:t,targetScope:o,stopPropagation:function(){s=!0},preventDefault:function(){l.defaultPrevented=!0},defaultPrevented:!1},u=P([l],arguments,1);do{for(e=o.$$listeners[t]||i,l.currentScope=o,n=0,r=e.length;r>n;n++)if(e[n])try{e[n].apply(null,u)}catch(c){a(c)}else e.splice(n,1),n--,r--;if(s)return l;o=o.$parent}while(o);return l},$broadcast:function(t){for(var e,n,r,i=this,o=i,s=i,l={name:t,targetScope:i,preventDefault:function(){l.defaultPrevented=!0},defaultPrevented:!1},u=P([l],arguments,1);o=s;){for(l.currentScope=o,e=o.$$listeners[t]||[],n=0,r=e.length;r>n;n++)if(e[n])try{e[n].apply(null,u)}catch(c){a(c)}else e.splice(n,1),n--,r--;if(!(s=o.$$listenerCount[t]&&o.$$childHead||o!==i&&o.$$nextSibling))for(;o!==i&&!(s=o.$$nextSibling);)o=o.$parent}return l}};var m=new c;return m}]}function An(){var t=/^\s*(https?|ftp|mailto|tel|file):/,e=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(e){return y(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return y(t)?(e=t,this):e},this.$get=function(){return function(n,r){var i,o=r?e:t;return yr&&!(yr>=8)||(i=Fn(n).href,""===i||i.match(o))?n:"unsafe:"+i}}}function Nn(t){return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")}function Dn(t){if("self"===t)return t;if(b(t)){if(t.indexOf("***")>-1)throw yi("iwcard","Illegal sequence *** in string matcher.  String: {0}",t);return t=Nn(t).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+t+"$")}if(T(t))return new RegExp("^"+t.source+"$");throw yi("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function jn(t){var e=[];return y(t)&&o(t,function(t){e.push(Dn(t))}),e}function On(){this.SCE_CONTEXTS=$i;var t=["self"],e=[];this.resourceUrlWhitelist=function(e){return arguments.length&&(t=jn(e)),t},this.resourceUrlBlacklist=function(t){return arguments.length&&(e=jn(t)),e},this.$get=["$injector",function(r){function i(t,e){return"self"===t?Pn(e):!!t.exec(e.href)}function o(n){var r,o,a=Fn(n.toString()),s=!1;for(r=0,o=t.length;o>r;r++)if(i(t[r],a)){s=!0;break}if(s)for(r=0,o=e.length;o>r;r++)if(i(e[r],a)){s=!1;break}return s}function a(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}};return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}function s(t,e){var r=d.hasOwnProperty(t)?d[t]:null;if(!r)throw yi("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",t,e);if(null===e||e===n||""===e)return e;if("string"!=typeof e)throw yi("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",t);return new r(e)}function l(t){return t instanceof f?t.$$unwrapTrustedValue():t}function u(t,e){if(null===e||e===n||""===e)return e;var r=d.hasOwnProperty(t)?d[t]:null;if(r&&e instanceof r)return e.$$unwrapTrustedValue();if(t===$i.RESOURCE_URL){if(o(e))return e;throw yi("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",e.toString())}if(t===$i.HTML)return c(e);throw yi("unsafe","Attempting to use an unsafe value in a safe context.")}var c=function(){throw yi("unsafe","Attempting to use an unsafe value in a safe context.")};r.has("$sanitize")&&(c=r.get("$sanitize"));var f=a(),d={};return d[$i.HTML]=a(f),d[$i.CSS]=a(f),d[$i.URL]=a(f),d[$i.JS]=a(f),d[$i.RESOURCE_URL]=a(d[$i.URL]),{trustAs:s,getTrusted:u,valueOf:l}}]}function Mn(){var t=!0;this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sniffer","$sceDelegate",function(e,n,r){if(t&&n.msie&&n.msieDocumentMode<8)throw yi("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");var i=L($i);i.isEnabled=function(){return t},i.trustAs=r.trustAs,i.getTrusted=r.getTrusted,i.valueOf=r.valueOf,t||(i.trustAs=i.getTrusted=function(t,e){return e},i.valueOf=g),i.parseAs=function(t,n){var r=e(n);return r.literal&&r.constant?r:function(e,n){return i.getTrusted(t,r(e,n))}};var a=i.parseAs,s=i.getTrusted,l=i.trustAs;return o($i,function(t,e){var n=hr(e);i[ue("parse_as_"+n)]=function(e){return a(t,e)},i[ue("get_trusted_"+n)]=function(e){return s(t,e)},i[ue("trust_as_"+n)]=function(e){return l(t,e)}}),i}]}function Ln(){this.$get=["$window","$document",function(t,e){var n,r,i={},o=d((/android (\d+)/.exec(hr((t.navigator||{}).userAgent))||[])[1]),a=/Boxee/i.test((t.navigator||{}).userAgent),s=e[0]||{},l=s.documentMode,u=/^(Moz|webkit|O|ms)(?=[A-Z])/,c=s.body&&s.body.style,f=!1,h=!1;if(c){for(var p in c)if(r=u.exec(p)){n=r[0],n=n.substr(0,1).toUpperCase()+n.substr(1);break}n||(n="WebkitOpacity"in c&&"webkit"),f=!!("transition"in c||n+"Transition"in c),h=!!("animation"in c||n+"Animation"in c),!o||f&&h||(f=b(s.body.style.webkitTransition),h=b(s.body.style.webkitAnimation))}return{history:!(!t.history||!t.history.pushState||4>o||a),hashchange:"onhashchange"in t&&(!l||l>7),hasEvent:function(t){if("input"==t&&9==yr)return!1;if(m(i[t])){var e=s.createElement("div");i[t]="on"+t in e}return i[t]},csp:F(),vendorPrefix:n,transitions:f,animations:h,android:o,msie:yr,msieDocumentMode:l}}]}function Hn(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(t,e,n,r){function i(i,a,s){var l,u=n.defer(),c=u.promise,f=y(s)&&!s;return l=e.defer(function(){try{u.resolve(i())}catch(e){u.reject(e),r(e)}finally{delete o[c.$$timeoutId]}f||t.$apply()},a),c.$$timeoutId=l,o[l]=u,c}var o={};return i.cancel=function(t){return t&&t.$$timeoutId in o?(o[t.$$timeoutId].reject("canceled"),delete o[t.$$timeoutId],e.defer.cancel(t.$$timeoutId)):!1},i}]}function Fn(t){var e=t;
return yr&&(bi.setAttribute("href",e),e=bi.href),bi.setAttribute("href",e),{href:bi.href,protocol:bi.protocol?bi.protocol.replace(/:$/,""):"",host:bi.host,search:bi.search?bi.search.replace(/^\?/,""):"",hash:bi.hash?bi.hash.replace(/^#/,""):"",hostname:bi.hostname,port:bi.port,pathname:"/"===bi.pathname.charAt(0)?bi.pathname:"/"+bi.pathname}}function Pn(t){var e=b(t)?Fn(t):t;return e.protocol===wi.protocol&&e.host===wi.host}function Rn(){this.$get=v(t)}function qn(t){function e(r,i){if($(r)){var a={};return o(r,function(t,n){a[n]=e(n,t)}),a}return t.factory(r+n,i)}var n="Filter";this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+n)}}],e("currency",Bn),e("date",Gn),e("filter",In),e("json",Jn),e("limitTo",Kn),e("lowercase",Si),e("number",Wn),e("orderBy",Zn),e("uppercase",Ei)}function In(){return function(t,e,n){if(!Ar(t))return t;var r=typeof n,i=[];i.check=function(t){for(var e=0;e<i.length;e++)if(!i[e](t))return!1;return!0},"function"!==r&&(n="boolean"===r&&n?function(t,e){return Er.equals(t,e)}:function(t,e){if(t&&e&&"object"==typeof t&&"object"==typeof e){for(var r in t)if("$"!==r.charAt(0)&&pr.call(t,r)&&n(t[r],e[r]))return!0;return!1}return e=(""+e).toLowerCase(),(""+t).toLowerCase().indexOf(e)>-1});var o=function(t,e){if("string"==typeof e&&"!"===e.charAt(0))return!o(t,e.substr(1));switch(typeof t){case"boolean":case"number":case"string":return n(t,e);case"object":switch(typeof e){case"object":return n(t,e);default:for(var r in t)if("$"!==r.charAt(0)&&o(t[r],e))return!0}return!1;case"array":for(var i=0;i<t.length;i++)if(o(t[i],e))return!0;return!1;default:return!1}};switch(typeof e){case"boolean":case"number":case"string":e={$:e};case"object":for(var a in e)!function(t){"undefined"!=typeof e[t]&&i.push(function(n){return o("$"==t?n:n&&n[t],e[t])})}(a);break;case"function":i.push(e);break;default:return t}for(var s=[],l=0;l<t.length;l++){var u=t[l];i.check(u)&&s.push(u)}return s}}function Bn(t){var e=t.NUMBER_FORMATS;return function(t,n){return m(n)&&(n=e.CURRENCY_SYM),zn(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,2).replace(/\u00A4/g,n)}}function Wn(t){var e=t.NUMBER_FORMATS;return function(t,n){return zn(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function zn(t,e,n,r,i){if(null==t||!isFinite(t)||$(t))return"";var o=0>t;t=Math.abs(t);var a=t+"",s="",l=[],u=!1;if(-1!==a.indexOf("e")){var c=a.match(/([\d\.]+)e(-?)(\d+)/);c&&"-"==c[2]&&c[3]>i+1?(a="0",t=0):(s=a,u=!0)}if(u)i>0&&t>-1&&1>t&&(s=t.toFixed(i));else{var f=(a.split(xi)[1]||"").length;m(i)&&(i=Math.min(Math.max(e.minFrac,f),e.maxFrac)),t=+(Math.round(+(t.toString()+"e"+i)).toString()+"e"+-i);var d=(""+t).split(xi),h=d[0];d=d[1]||"";var p,g=0,v=e.lgSize,y=e.gSize;if(h.length>=v+y)for(g=h.length-v,p=0;g>p;p++)(g-p)%y===0&&0!==p&&(s+=n),s+=h.charAt(p);for(p=g;p<h.length;p++)(h.length-p)%v===0&&0!==p&&(s+=n),s+=h.charAt(p);for(;d.length<i;)d+="0";i&&"0"!==i&&(s+=r+d.substr(0,i))}return l.push(o?e.negPre:e.posPre),l.push(s),l.push(o?e.negSuf:e.posSuf),l.join("")}function Un(t,e,n){var r="";for(0>t&&(r="-",t=-t),t=""+t;t.length<e;)t="0"+t;return n&&(t=t.substr(t.length-e)),r+t}function Vn(t,e,n,r){return n=n||0,function(i){var o=i["get"+t]();return(n>0||o>-n)&&(o+=n),0===o&&-12==n&&(o=12),Un(o,e,r)}}function Xn(t,e){return function(n,r){var i=n["get"+t](),o=gr(e?"SHORT"+t:t);return r[o][i]}}function Yn(t){var e=-1*t.getTimezoneOffset(),n=e>=0?"+":"";return n+=Un(Math[e>0?"floor":"ceil"](e/60),2)+Un(Math.abs(e%60),2)}function Qn(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function Gn(t){function e(t){var e;if(e=t.match(n)){var r=new Date(0),i=0,o=0,a=e[8]?r.setUTCFullYear:r.setFullYear,s=e[8]?r.setUTCHours:r.setHours;e[9]&&(i=d(e[9]+e[10]),o=d(e[9]+e[11])),a.call(r,d(e[1]),d(e[2])-1,d(e[3]));var l=d(e[4]||0)-i,u=d(e[5]||0)-o,c=d(e[6]||0),f=Math.round(1e3*parseFloat("0."+(e[7]||0)));return s.call(r,l,u,c,f),r}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(n,r){var i,a,s="",l=[];if(r=r||"mediumDate",r=t.DATETIME_FORMATS[r]||r,b(n)&&(n=ki.test(n)?d(n):e(n)),w(n)&&(n=new Date(n)),!x(n))return n;for(;r;)a=Ti.exec(r),a?(l=P(l,a,1),r=l.pop()):(l.push(r),r=null);return o(l,function(e){i=Ci[e],s+=i?i(n,t.DATETIME_FORMATS):e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),s}}function Jn(){return function(t){return B(t,!0)}}function Kn(){return function(t,e){if(!Ar(t)&&!b(t))return t;if(e=1/0===Math.abs(Number(e))?Number(e):d(e),b(t))return e?e>=0?t.slice(0,e):t.slice(e,t.length):"";var n,r,i=[];for(e>t.length?e=t.length:e<-t.length&&(e=-t.length),e>0?(n=0,r=e):(n=t.length+e,r=t.length);r>n;n++)i.push(t[n]);return i}}function Zn(t){return function(e,n,r){function i(t,e){for(var r=0;r<n.length;r++){var i=n[r](t,e);if(0!==i)return i}return 0}function o(t,e){return z(e)?function(e,n){return t(n,e)}:t}function a(t,e){var n=typeof t,r=typeof e;return n==r?("string"==n&&(t=t.toLowerCase(),e=e.toLowerCase()),t===e?0:e>t?-1:1):r>n?-1:1}if(!Ar(e))return e;if(!n)return e;n=Ar(n)?n:[n],n=N(n,function(e){var n=!1,r=e||g;if(b(e)&&(("+"==e.charAt(0)||"-"==e.charAt(0))&&(n="-"==e.charAt(0),e=e.substring(1)),r=t(e),r.constant)){var i=r();return o(function(t,e){return a(t[i],e[i])},n)}return o(function(t,e){return a(r(t),r(e))},n)});for(var s=[],l=0;l<e.length;l++)s.push(e[l]);return s.sort(o(i,r))}}function tr(t){return C(t)&&(t={link:t}),t.restrict=t.restrict||"AC",v(t)}function er(t,e,n,r){function i(e,n){n=n?"-"+Z(n,"-"):"",r.removeClass(t,(e?Ii:qi)+n),r.addClass(t,(e?qi:Ii)+n)}var a=this,s=t.parent().controller("form")||Ni,l=0,u=a.$error={},c=[];a.$name=e.name||e.ngForm,a.$dirty=!1,a.$pristine=!0,a.$valid=!0,a.$invalid=!1,s.$addControl(a),t.addClass(Bi),i(!0),a.$addControl=function(t){re(t.$name,"input"),c.push(t),t.$name&&(a[t.$name]=t)},a.$removeControl=function(t){t.$name&&a[t.$name]===t&&delete a[t.$name],o(u,function(e,n){a.$setValidity(n,!0,t)}),O(c,t)},a.$setValidity=function(t,e,n){var r=u[t];if(e)r&&(O(r,n),r.length||(l--,l||(i(e),a.$valid=!0,a.$invalid=!1),u[t]=!1,i(!0,t),s.$setValidity(t,!0,a)));else{if(l||i(e),r){if(D(r,n))return}else u[t]=r=[],l++,i(!1,t),s.$setValidity(t,!1,a);r.push(n),a.$valid=!1,a.$invalid=!0}},a.$setDirty=function(){r.removeClass(t,Bi),r.addClass(t,Wi),a.$dirty=!0,a.$pristine=!1,s.$setDirty()},a.$setPristine=function(){r.removeClass(t,Wi),r.addClass(t,Bi),a.$dirty=!1,a.$pristine=!0,o(c,function(t){t.$setPristine()})}}function nr(t,e,r,i){return t.$setValidity(e,r),r?i:n}function rr(t,e){var n,r;if(e)for(n=0;n<e.length;++n)if(r=e[n],t[r])return!0;return!1}function ir(t,e,n,r,i){if($(i)){t.$$hasNativeValidators=!0;var o=function(o){return t.$error[e]||rr(i,r)||!rr(i,n)?o:void t.$setValidity(e,!1)};t.$parsers.push(o)}}function or(t,e,n,i,o,a){var s=e.prop(dr),l=e[0].placeholder,u={};if(i.$$validityState=s,!o.android){var c=!1;e.on("compositionstart",function(){c=!0}),e.on("compositionend",function(){c=!1,f()})}var f=function(r){if(!c){var o=e.val();if(yr&&"input"===(r||u).type&&e[0].placeholder!==l)return void(l=e[0].placeholder);z(n.ngTrim||"T")&&(o=Nr(o));var a=s&&i.$$hasNativeValidators;(i.$viewValue!==o||""===o&&a)&&(t.$$phase?i.$setViewValue(o):t.$apply(function(){i.$setViewValue(o)}))}};if(o.hasEvent("input"))e.on("input",f);else{var h,p=function(){h||(h=a.defer(function(){f(),h=null}))};e.on("keydown",function(t){var e=t.keyCode;91===e||e>15&&19>e||e>=37&&40>=e||p()}),o.hasEvent("paste")&&e.on("paste cut",p)}e.on("change",f),i.$render=function(){e.val(i.$isEmpty(i.$viewValue)?"":i.$viewValue)};var g,v,m=n.ngPattern;if(m){var y=function(t,e){return nr(i,"pattern",i.$isEmpty(e)||t.test(e),e)};v=m.match(/^\/(.*)\/([gim]*)$/),v?(m=new RegExp(v[1],v[2]),g=function(t){return y(m,t)}):g=function(n){var i=t.$eval(m);if(!i||!i.test)throw r("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",m,i,U(e));return y(i,n)},i.$formatters.push(g),i.$parsers.push(g)}if(n.ngMinlength){var $=d(n.ngMinlength),b=function(t){return nr(i,"minlength",i.$isEmpty(t)||t.length>=$,t)};i.$parsers.push(b),i.$formatters.push(b)}if(n.ngMaxlength){var w=d(n.ngMaxlength),x=function(t){return nr(i,"maxlength",i.$isEmpty(t)||t.length<=w,t)};i.$parsers.push(x),i.$formatters.push(x)}}function ar(t,e,r,i,o,a){if(or(t,e,r,i,o,a),i.$parsers.push(function(t){var e=i.$isEmpty(t);return e||Hi.test(t)?(i.$setValidity("number",!0),""===t?null:e?t:parseFloat(t)):(i.$setValidity("number",!1),n)}),ir(i,"number",Pi,null,i.$$validityState),i.$formatters.push(function(t){return i.$isEmpty(t)?"":""+t}),r.min){var s=function(t){var e=parseFloat(r.min);return nr(i,"min",i.$isEmpty(t)||t>=e,t)};i.$parsers.push(s),i.$formatters.push(s)}if(r.max){var l=function(t){var e=parseFloat(r.max);return nr(i,"max",i.$isEmpty(t)||e>=t,t)};i.$parsers.push(l),i.$formatters.push(l)}i.$formatters.push(function(t){return nr(i,"number",i.$isEmpty(t)||w(t),t)})}function sr(t,e,n,r,i,o){or(t,e,n,r,i,o);var a=function(t){return nr(r,"url",r.$isEmpty(t)||Mi.test(t),t)};r.$formatters.push(a),r.$parsers.push(a)}function lr(t,e,n,r,i,o){or(t,e,n,r,i,o);var a=function(t){return nr(r,"email",r.$isEmpty(t)||Li.test(t),t)};r.$formatters.push(a),r.$parsers.push(a)}function ur(t,e,n,r){m(n.name)&&e.attr("name",u()),e.on("click",function(){e[0].checked&&t.$apply(function(){r.$setViewValue(n.value)})}),r.$render=function(){var t=n.value;e[0].checked=t==r.$viewValue},n.$observe("value",r.$render)}function cr(t,e,n,r){var i=n.ngTrueValue,o=n.ngFalseValue;b(i)||(i=!0),b(o)||(o=!1),e.on("click",function(){t.$apply(function(){r.$setViewValue(e[0].checked)})}),r.$render=function(){e[0].checked=r.$viewValue},r.$isEmpty=function(t){return t!==i},r.$formatters.push(function(t){return t===i}),r.$parsers.push(function(t){return t?i:o})}function fr(t,e){return t="ngClass"+t,["$animate",function(n){function r(t,e){var n=[];t:for(var r=0;r<t.length;r++){for(var i=t[r],o=0;o<e.length;o++)if(i==e[o])continue t;n.push(i)}return n}function i(t){if(Ar(t))return t;if(b(t))return t.split(" ");if($(t)){var e=[];return o(t,function(t,n){t&&(e=e.concat(n.split(" ")))}),e}return t}return{restrict:"AC",link:function(a,s,l){function u(t){var e=f(t,1);l.$addClass(e)}function c(t){var e=f(t,-1);l.$removeClass(e)}function f(t,e){var n=s.data("$classCounts")||{},r=[];return o(t,function(t){(e>0||n[t])&&(n[t]=(n[t]||0)+e,n[t]===+(e>0)&&r.push(t))}),s.data("$classCounts",n),r.join(" ")}function d(t,e){var i=r(e,t),o=r(t,e);o=f(o,-1),i=f(i,1),0===i.length?n.removeClass(s,o):0===o.length?n.addClass(s,i):n.setClass(s,i,o)}function h(t){if(e===!0||a.$index%2===e){var n=i(t||[]);if(p){if(!H(t,p)){var r=i(p);d(r,n)}}else u(n)}p=L(t)}var p;a.$watch(l[t],h,!0),l.$observe("class",function(){h(a.$eval(l[t]))}),"ngClass"!==t&&a.$watch("$index",function(n,r){var o=1&n;if(o!==(1&r)){var s=i(a.$eval(l[t]));o===e?u(s):c(s)}})}}}]}var dr="validity",hr=function(t){return b(t)?t.toLowerCase():t},pr=Object.prototype.hasOwnProperty,gr=function(t){return b(t)?t.toUpperCase():t},vr=function(t){return b(t)?t.replace(/[A-Z]/g,function(t){return String.fromCharCode(32|t.charCodeAt(0))}):t},mr=function(t){return b(t)?t.replace(/[a-z]/g,function(t){return String.fromCharCode(-33&t.charCodeAt(0))}):t};"i"!=="I".toLowerCase()&&(hr=vr,gr=mr);var yr,$r,br,wr,xr,Cr=[].slice,Tr=[].push,kr=Object.prototype.toString,Sr=r("ng"),Er=t.angular||(t.angular={}),_r=["0","0","0"];yr=d((/msie (\d+)/.exec(hr(navigator.userAgent))||[])[1]),isNaN(yr)&&(yr=d((/trident\/.*; rv:(\d+)/.exec(hr(navigator.userAgent))||[])[1])),p.$inject=[],g.$inject=[];var Ar=function(){return C(Array.isArray)?Array.isArray:function(t){return"[object Array]"===kr.call(t)}}(),Nr=function(){return String.prototype.trim?function(t){return b(t)?t.trim():t}:function(t){return b(t)?t.replace(/^\s\s*/,"").replace(/\s\s*$/,""):t}}();xr=9>yr?function(t){return t=t.nodeName?t:t[0],t.scopeName&&"HTML"!=t.scopeName?gr(t.scopeName+":"+t.nodeName):t.nodeName}:function(t){return t.nodeName?t.nodeName:t[0].nodeName};var Dr=/[A-Z]/g,jr={full:"1.2.20",major:1,minor:2,dot:20,codeName:"accidental-beautification"};pe.expando="ng339";var Or=pe.cache={},Mr=1,Lr=t.document.addEventListener?function(t,e,n){t.addEventListener(e,n,!1)}:function(t,e,n){t.attachEvent("on"+e,n)},Hr=t.document.removeEventListener?function(t,e,n){t.removeEventListener(e,n,!1)}:function(t,e,n){t.detachEvent("on"+e,n)},Fr=(pe._data=function(t){return this.cache[t[this.expando]]||{}},/([\:\-\_]+(.))/g),Pr=/^moz([A-Z])/,Rr=r("jqLite"),qr=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ir=/<|&#?\w+;/,Br=/<([\w:]+)/,Wr=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,zr={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};zr.optgroup=zr.option,zr.tbody=zr.tfoot=zr.colgroup=zr.caption=zr.thead,zr.th=zr.td;var Ur=pe.prototype={ready:function(n){function r(){i||(i=!0,n())}var i=!1;"complete"===e.readyState?setTimeout(r):(this.on("DOMContentLoaded",r),pe(t).on("load",r))},toString:function(){var t=[];return o(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return $r(t>=0?this[t]:this[this.length+t])},length:0,push:Tr,sort:[].sort,splice:[].splice},Vr={};o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(t){Vr[hr(t)]=t});var Xr={};o("input,select,option,textarea,button,form,details".split(","),function(t){Xr[gr(t)]=!0}),o({data:be,inheritedData:Se,scope:function(t){return $r(t).data("$scope")||Se(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return $r(t).data("$isolateScope")||$r(t).data("$isolateScopeNoTemplate")},controller:ke,injector:function(t){return Se(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:we,css:function(t,e,r){if(e=ue(e),!y(r)){var i;return 8>=yr&&(i=t.currentStyle&&t.currentStyle[e],""===i&&(i="auto")),i=i||t.style[e],8>=yr&&(i=""===i?n:i),i}t.style[e]=r},attr:function(t,e,r){var i=hr(e);if(Vr[i]){if(!y(r))return t[e]||(t.attributes.getNamedItem(e)||p).specified?i:n;r?(t[e]=!0,t.setAttribute(e,i)):(t[e]=!1,t.removeAttribute(i))}else if(y(r))t.setAttribute(e,r);else if(t.getAttribute){var o=t.getAttribute(e,2);return null===o?n:o}},prop:function(t,e,n){return y(n)?void(t[e]=n):t[e]},text:function(){function t(t,n){var r=e[t.nodeType];return m(n)?r?t[r]:"":void(t[r]=n)}var e=[];return 9>yr?(e[1]="innerText",e[3]="nodeValue"):e[1]=e[3]="textContent",t.$dv="",t}(),val:function(t,e){if(m(e)){if("SELECT"===xr(t)&&t.multiple){var n=[];return o(t.options,function(t){t.selected&&n.push(t.value||t.text)}),0===n.length?null:n}return t.value}t.value=e},html:function(t,e){if(m(e))return t.innerHTML;for(var n=0,r=t.childNodes;n<r.length;n++)ve(r[n]);t.innerHTML=e},empty:Ee},function(t,e){pe.prototype[e]=function(e,r){var i,o,a=this.length;if(t!==Ee&&(2==t.length&&t!==we&&t!==ke?e:r)===n){if($(e)){for(i=0;a>i;i++)if(t===be)t(this[i],e);else for(o in e)t(this[i],o,e[o]);return this}for(var s=t.$dv,l=s===n?Math.min(a,1):a,u=0;l>u;u++){var c=t(this[u],e,r);s=s?s+c:c}return s}for(i=0;a>i;i++)t(this[i],e,r);return this}}),o({removeData:ye,dealoc:ve,on:function Eo(t,n,r,i){if(y(i))throw Rr("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");var a=$e(t,"events"),s=$e(t,"handle");a||$e(t,"events",a={}),s||$e(t,"handle",s=Ae(t,a)),o(n.split(" "),function(n){var i=a[n];if(!i){if("mouseenter"==n||"mouseleave"==n){var o=e.body.contains||e.body.compareDocumentPosition?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1};a[n]=[];var l={mouseleave:"mouseout",mouseenter:"mouseover"};Eo(t,l[n],function(t){var e=this,r=t.relatedTarget;(!r||r!==e&&!o(e,r))&&s(t,n)})}else Lr(t,n,s),a[n]=[];i=a[n]}i.push(r)})},off:me,one:function(t,e,n){t=$r(t),t.on(e,function r(){t.off(e,n),t.off(e,r)}),t.on(e,n)},replaceWith:function(t,e){var n,r=t.parentNode;ve(t),o(new pe(e),function(e){n?r.insertBefore(e,n.nextSibling):r.replaceChild(e,t),n=e})},children:function(t){var e=[];return o(t.childNodes,function(t){1===t.nodeType&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){o(new pe(e),function(e){(1===t.nodeType||11===t.nodeType)&&t.appendChild(e)})},prepend:function(t,e){if(1===t.nodeType){var n=t.firstChild;o(new pe(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){e=$r(e)[0];var n=t.parentNode;n&&n.replaceChild(e,t),e.appendChild(t)},remove:function(t){ve(t);var e=t.parentNode;e&&e.removeChild(t)},after:function(t,e){var n=t,r=t.parentNode;o(new pe(e),function(t){r.insertBefore(t,n.nextSibling),n=t})},addClass:Ce,removeClass:xe,toggleClass:function(t,e,n){e&&o(e.split(" "),function(e){var r=n;m(r)&&(r=!we(t,e)),(r?Ce:xe)(t,e)})},parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},next:function(t){if(t.nextElementSibling)return t.nextElementSibling;for(var e=t.nextSibling;null!=e&&1!==e.nodeType;)e=e.nextSibling;return e},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:ge,triggerHandler:function(t,e,n){var r=($e(t,"events")||{})[e];n=n||[];var i=[{preventDefault:p,stopPropagation:p}];o(r,function(e){e.apply(t,i.concat(n))})}},function(t,e){pe.prototype[e]=function(e,n,r){for(var i,o=0;o<this.length;o++)m(i)?(i=t(this[o],e,n,r),y(i)&&(i=$r(i))):Te(i,t(this[o],e,n,r));return y(i)?i:this},pe.prototype.bind=pe.prototype.on,pe.prototype.unbind=pe.prototype.off}),De.prototype={put:function(t,e){this[Ne(t,this.nextUid)]=e},get:function(t){return this[Ne(t,this.nextUid)]},remove:function(t){var e=this[t=Ne(t,this.nextUid)];return delete this[t],e}};var Yr=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Qr=/,/,Gr=/^\s*(_?)(\S+?)\1\s*$/,Jr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Kr=r("$injector"),Zr=r("$animate"),ti=["$provide",function(t){this.$$selectors={},this.register=function(e,n){var r=e+"-animation";if(e&&"."!=e.charAt(0))throw Zr("notcsel","Expecting class selector starting with '.' got '{0}'.",e);this.$$selectors[e.substr(1)]=r,t.factory(r,n)},this.classNameFilter=function(t){return 1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null),this.$$classNameFilter},this.$get=["$timeout","$$asyncCallback",function(t,e){function n(t){t&&e(t)}return{enter:function(t,e,r,i){r?r.after(t):(e&&e[0]||(e=r.parent()),e.append(t)),n(i)},leave:function(t,e){t.remove(),n(e)},move:function(t,e,n,r){this.enter(t,e,n,r)},addClass:function(t,e,r){e=b(e)?e:Ar(e)?e.join(" "):"",o(t,function(t){Ce(t,e)}),n(r)},removeClass:function(t,e,r){e=b(e)?e:Ar(e)?e.join(" "):"",o(t,function(t){xe(t,e)}),n(r)},setClass:function(t,e,r,i){o(t,function(t){Ce(t,e),xe(t,r)}),n(i)},enabled:p}}]}],ei=r("$compile");qe.$inject=["$provide","$$sanitizeUriProvider"];var ni=/^(x[\:\-_]|data[\:\-_])/i,ri=r("$interpolate"),ii=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,oi={http:80,https:443,ftp:21},ai=r("$location");hn.prototype=dn.prototype=fn.prototype={$$html5:!1,$$replace:!1,absUrl:pn("$$absUrl"),url:function(t,e){if(m(t))return this.$$url;var n=ii.exec(t);return n[1]&&this.path(decodeURIComponent(n[1])),(n[2]||n[1])&&this.search(n[3]||""),this.hash(n[5]||"",e),this},protocol:pn("$$protocol"),host:pn("$$host"),port:pn("$$port"),path:gn("$$path",function(t){return"/"==t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search;case 1:if(b(t))this.$$search=X(t);else{if(!$(t))throw ai("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");o(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break;default:m(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:gn("$$hash",g),replace:function(){return this.$$replace=!0,this}};var si,li=r("$parse"),ui={},ci=Function.prototype.call,fi=Function.prototype.apply,di=Function.prototype.bind,hi={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:p,"+":function(t,e,r,i){return r=r(t,e),i=i(t,e),y(r)?y(i)?r+i:r:y(i)?i:n},"-":function(t,e,n,r){return n=n(t,e),r=r(t,e),(y(n)?n:0)-(y(r)?r:0)},"*":function(t,e,n,r){return n(t,e)*r(t,e)},"/":function(t,e,n,r){return n(t,e)/r(t,e)},"%":function(t,e,n,r){return n(t,e)%r(t,e)},"^":function(t,e,n,r){return n(t,e)^r(t,e)},"=":p,"===":function(t,e,n,r){return n(t,e)===r(t,e)},"!==":function(t,e,n,r){return n(t,e)!==r(t,e)},"==":function(t,e,n,r){return n(t,e)==r(t,e)},"!=":function(t,e,n,r){return n(t,e)!=r(t,e)},"<":function(t,e,n,r){return n(t,e)<r(t,e)},">":function(t,e,n,r){return n(t,e)>r(t,e)},"<=":function(t,e,n,r){return n(t,e)<=r(t,e)},">=":function(t,e,n,r){return n(t,e)>=r(t,e)},"&&":function(t,e,n,r){return n(t,e)&&r(t,e)},"||":function(t,e,n,r){return n(t,e)||r(t,e)},"&":function(t,e,n,r){return n(t,e)&r(t,e)},"|":function(t,e,n,r){return r(t,e)(t,e,n(t,e))},"!":function(t,e,n){return!n(t,e)}},pi={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},gi=function(t){this.options=t};gi.prototype={constructor:gi,lex:function(t){for(this.text=t,this.index=0,this.ch=n,this.lastCh=":",this.tokens=[];this.index<this.text.length;){if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else{if(this.isWhitespace(this.ch)){this.index++;continue}var e=this.ch+this.peek(),r=e+this.peek(2),i=hi[this.ch],o=hi[e],a=hi[r];a?(this.tokens.push({index:this.index,text:r,fn:a}),this.index+=3):o?(this.tokens.push({index:this.index,text:e,fn:o}),this.index+=2):i?(this.tokens.push({index:this.index,text:this.ch,fn:i}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(t){return-1!==t.indexOf(this.ch)},was:function(t){return-1!==t.indexOf(this.lastCh)},peek:function(t){var e=t||1;return this.index+e<this.text.length?this.text.charAt(this.index+e):!1},isNumber:function(t){return t>="0"&&"9">=t},isWhitespace:function(t){return" "===t||"\r"===t||"	"===t||"\n"===t||""===t||" "===t},isIdent:function(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t||"_"===t||"$"===t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){n=n||this.index;var r=y(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n;throw li("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",t,r,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=hr(this.text.charAt(this.index));if("."==n||this.isNumber(n))t+=n;else{var r=this.peek();if("e"==n&&this.isExpOperator(r))t+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==t.charAt(t.length-1))t+=n;else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=t.charAt(t.length-1))break;this.throwError("Invalid exponent")}}this.index++}t=1*t,this.tokens.push({index:e,text:t,literal:!0,constant:!0,fn:function(){return t}})},readIdent:function(){for(var t,e,n,r,i=this,o="",a=this.index;this.index<this.text.length&&(r=this.text.charAt(this.index),"."===r||this.isIdent(r)||this.isNumber(r));)"."===r&&(t=this.index),o+=r,this.index++;if(t)for(e=this.index;e<this.text.length;){if(r=this.text.charAt(e),"("===r){n=o.substr(t-a+1),o=o.substr(0,t-a),this.index=e;break}if(!this.isWhitespace(r))break;e++}var s={index:a,text:o};if(hi.hasOwnProperty(o))s.fn=hi[o],s.literal=!0,s.constant=!0;else{var l=Cn(o,this.options,this.text);s.fn=f(function(t,e){return l(t,e)},{assign:function(t,e){return wn(t,o,e,i.text,i.options)}})}this.tokens.push(s),n&&(this.tokens.push({index:t,text:"."}),this.tokens.push({index:t+1,text:n}))},readString:function(t){var e=this.index;this.index++;for(var n="",r=t,i=!1;this.index<this.text.length;){var o=this.text.charAt(this.index);if(r+=o,i){if("u"===o){var a=this.text.substring(this.index+1,this.index+5);a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,n+=String.fromCharCode(parseInt(a,16))}else{var s=pi[o];n+=s?s:o}i=!1}else if("\\"===o)i=!0;else{if(o===t)return this.index++,void this.tokens.push({index:e,text:r,string:n,literal:!0,constant:!0,fn:function(){return n}});n+=o}this.index++}this.throwError("Unterminated quote",e)}};var vi=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n};vi.ZERO=f(function(){return 0},{constant:!0}),vi.prototype={constructor:vi,parse:function(t){this.text=t,this.tokens=this.lexer.lex(t);var e=this.statements();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),e.literal=!!e.literal,e.constant=!!e.constant,e},primary:function(){var t;if(this.expect("("))t=this.filterChain(),this.consume(")");else if(this.expect("["))t=this.arrayDeclaration();else if(this.expect("{"))t=this.object();else{var e=this.expect();t=e.fn,t||this.throwError("not a primary expression",e),t.literal=!!e.literal,t.constant=!!e.constant}for(var n,r;n=this.expect("(","[",".");)"("===n.text?(t=this.functionCall(t,r),r=null):"["===n.text?(r=t,t=this.objectIndex(t)):"."===n.text?(r=t,t=this.fieldAccess(t)):this.throwError("IMPOSSIBLE");return t},throwError:function(t,e){throw li("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",e.text,t,e.index+1,this.text,this.text.substring(e.index))},peekToken:function(){if(0===this.tokens.length)throw li("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(t,e,n,r){if(this.tokens.length>0){var i=this.tokens[0],o=i.text;if(o===t||o===e||o===n||o===r||!t&&!e&&!n&&!r)return i}return!1},expect:function(t,e,n,r){var i=this.peek(t,e,n,r);return i?(this.tokens.shift(),i):!1},consume:function(t){this.expect(t)||this.throwError("is unexpected, expecting ["+t+"]",this.peek())},unaryFn:function(t,e){return f(function(n,r){return t(n,r,e)},{constant:e.constant})},ternaryFn:function(t,e,n){return f(function(r,i){return t(r,i)?e(r,i):n(r,i)},{constant:t.constant&&e.constant&&n.constant})},binaryFn:function(t,e,n){return f(function(r,i){return e(r,i,t,n)},{constant:t.constant&&n.constant})},statements:function(){for(var t=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&t.push(this.filterChain()),!this.expect(";"))return 1===t.length?t[0]:function(e,n){for(var r,i=0;i<t.length;i++){var o=t[i];o&&(r=o(e,n))}return r}},filterChain:function(){for(var t,e=this.expression();;){if(!(t=this.expect("|")))return e;e=this.binaryFn(e,t.fn,this.filter())}},filter:function(){for(var t=this.expect(),e=this.$filter(t.text),n=[];;){if(!(t=this.expect(":"))){var r=function(t,r,i){for(var o=[i],a=0;a<n.length;a++)o.push(n[a](t,r));return e.apply(t,o)};return function(){return r}}n.push(this.expression())}},expression:function(){return this.assignment()},assignment:function(){var t,e,n=this.ternary();return(e=this.expect("="))?(n.assign||this.throwError("implies assignment but ["+this.text.substring(0,e.index)+"] can not be assigned to",e),t=this.ternary(),function(e,r){return n.assign(e,t(e,r),r)}):n},ternary:function(){var t,e,n=this.logicalOR();return(e=this.expect("?"))?(t=this.ternary(),(e=this.expect(":"))?this.ternaryFn(n,t,this.ternary()):void this.throwError("expected :",e)):n},logicalOR:function(){for(var t,e=this.logicalAND();;){if(!(t=this.expect("||")))return e;e=this.binaryFn(e,t.fn,this.logicalAND())}},logicalAND:function(){var t,e=this.equality();return(t=this.expect("&&"))&&(e=this.binaryFn(e,t.fn,this.logicalAND())),e},equality:function(){var t,e=this.relational();return(t=this.expect("==","!=","===","!=="))&&(e=this.binaryFn(e,t.fn,this.equality())),e},relational:function(){var t,e=this.additive();return(t=this.expect("<",">","<=",">="))&&(e=this.binaryFn(e,t.fn,this.relational())),e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e=this.binaryFn(e,t.fn,this.multiplicative());return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e=this.binaryFn(e,t.fn,this.unary());return e},unary:function(){var t;return this.expect("+")?this.primary():(t=this.expect("-"))?this.binaryFn(vi.ZERO,t.fn,this.unary()):(t=this.expect("!"))?this.unaryFn(t.fn,this.unary()):this.primary()},fieldAccess:function(t){var e=this,n=this.expect().text,r=Cn(n,this.options,this.text);return f(function(e,n,i){return r(i||t(e,n))},{assign:function(r,i,o){return wn(t(r,o),n,i,e.text,e.options)}})},objectIndex:function(t){var e=this,r=this.expression();return this.consume("]"),f(function(i,o){var a,s,l=t(i,o),u=r(i,o);return yn(u,e.text),l?(a=$n(l[u],e.text),a&&a.then&&e.options.unwrapPromises&&(s=a,"$$v"in a||(s.$$v=n,s.then(function(t){s.$$v=t})),a=a.$$v),a):n},{assign:function(n,i,o){var a=r(n,o),s=$n(t(n,o),e.text);return s[a]=i}})},functionCall:function(t,e){var n=[];if(")"!==this.peekToken().text)do n.push(this.expression());while(this.expect(","));this.consume(")");var r=this;return function(i,o){for(var a=[],s=e?e(i,o):i,l=0;l<n.length;l++)a.push(n[l](i,o));var u=t(i,o,s)||p;$n(s,r.text),bn(u,r.text);var c=u.apply?u.apply(s,a):u(a[0],a[1],a[2],a[3],a[4]);return $n(c,r.text)}},arrayDeclaration:function(){var t=[],e=!0;if("]"!==this.peekToken().text)do{if(this.peek("]"))break;var n=this.expression();t.push(n),n.constant||(e=!1)}while(this.expect(","));return this.consume("]"),f(function(e,n){for(var r=[],i=0;i<t.length;i++)r.push(t[i](e,n));return r},{literal:!0,constant:e})},object:function(){var t=[],e=!0;if("}"!==this.peekToken().text)do{if(this.peek("}"))break;var n=this.expect(),r=n.string||n.text;this.consume(":");var i=this.expression();t.push({key:r,value:i}),i.constant||(e=!1)}while(this.expect(","));return this.consume("}"),f(function(e,n){for(var r={},i=0;i<t.length;i++){var o=t[i];r[o.key]=o.value(e,n)}return r},{literal:!0,constant:e})}};var mi={},yi=r("$sce"),$i={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},bi=e.createElement("a"),wi=Fn(t.location.href,!0);qn.$inject=["$provide"],Bn.$inject=["$locale"],Wn.$inject=["$locale"];var xi=".",Ci={yyyy:Vn("FullYear",4),yy:Vn("FullYear",2,0,!0),y:Vn("FullYear",1),MMMM:Xn("Month"),MMM:Xn("Month",!0),MM:Vn("Month",2,1),M:Vn("Month",1,1),dd:Vn("Date",2),d:Vn("Date",1),HH:Vn("Hours",2),H:Vn("Hours",1),hh:Vn("Hours",2,-12),h:Vn("Hours",1,-12),mm:Vn("Minutes",2),m:Vn("Minutes",1),ss:Vn("Seconds",2),s:Vn("Seconds",1),sss:Vn("Milliseconds",3),EEEE:Xn("Day"),EEE:Xn("Day",!0),a:Qn,Z:Yn},Ti=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,ki=/^\-?\d+$/;Gn.$inject=["$locale"];var Si=v(hr),Ei=v(gr);Zn.$inject=["$parse"];var _i=v({restrict:"E",compile:function(t,n){return 8>=yr&&(n.href||n.name||n.$set("href",""),t.append(e.createComment("IE fix"))),n.href||n.xlinkHref||n.name?void 0:function(t,e){var n="[object SVGAnimatedString]"===kr.call(e.prop("href"))?"xlink:href":"href";e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}),Ai={};o(Vr,function(t,e){if("multiple"!=t){var n=Ie("ng-"+e);Ai[n]=function(){return{priority:100,link:function(t,r,i){t.$watch(i[n],function(t){i.$set(e,!!t)})}}}}}),o(["src","srcset","href"],function(t){var e=Ie("ng-"+t);Ai[e]=function(){return{priority:99,link:function(n,r,i){var o=t,a=t;"href"===t&&"[object SVGAnimatedString]"===kr.call(r.prop("href"))&&(a="xlinkHref",i.$attr[a]="xlink:href",o=null),i.$observe(e,function(t){t&&(i.$set(a,t),yr&&o&&r.prop(o,i[a]))})}}}});var Ni={$addControl:p,$removeControl:p,$setValidity:p,$setDirty:p,$setPristine:p};er.$inject=["$element","$attrs","$scope","$animate"];var Di=function(t){return["$timeout",function(e){var r={name:"form",restrict:t?"EAC":"E",controller:er,compile:function(){return{pre:function(t,r,i,o){if(!i.action){var a=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1
};Lr(r[0],"submit",a),r.on("$destroy",function(){e(function(){Hr(r[0],"submit",a)},0,!1)})}var s=r.parent().controller("form"),l=i.name||i.ngForm;l&&wn(t,l,o,l),s&&r.on("$destroy",function(){s.$removeControl(o),l&&wn(t,l,n,l),f(o,Ni)})}}}};return r}]},ji=Di(),Oi=Di(!0),Mi=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Li=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Hi=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Fi={text:or,number:ar,url:sr,email:lr,radio:ur,checkbox:cr,hidden:p,button:p,submit:p,reset:p,file:p},Pi=["badInput"],Ri=["$browser","$sniffer",function(t,e){return{restrict:"E",require:"?ngModel",link:function(n,r,i,o){o&&(Fi[hr(i.type)]||Fi.text)(n,r,i,o,e,t)}}}],qi="ng-valid",Ii="ng-invalid",Bi="ng-pristine",Wi="ng-dirty",zi=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(t,e,n,i,a,s){function l(t,e){e=e?"-"+Z(e,"-"):"",s.removeClass(i,(t?Ii:qi)+e),s.addClass(i,(t?qi:Ii)+e)}this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$name=n.name;var u=a(n.ngModel),c=u.assign;if(!c)throw r("ngModel")("nonassign","Expression '{0}' is non-assignable. Element: {1}",n.ngModel,U(i));this.$render=p,this.$isEmpty=function(t){return m(t)||""===t||null===t||t!==t};var f=i.inheritedData("$formController")||Ni,d=0,h=this.$error={};i.addClass(Bi),l(!0),this.$setValidity=function(t,e){h[t]!==!e&&(e?(h[t]&&d--,d||(l(!0),this.$valid=!0,this.$invalid=!1)):(l(!1),this.$invalid=!0,this.$valid=!1,d++),h[t]=!e,l(e,t),f.$setValidity(t,e,this))},this.$setPristine=function(){this.$dirty=!1,this.$pristine=!0,s.removeClass(i,Wi),s.addClass(i,Bi)},this.$setViewValue=function(n){this.$viewValue=n,this.$pristine&&(this.$dirty=!0,this.$pristine=!1,s.removeClass(i,Bi),s.addClass(i,Wi),f.$setDirty()),o(this.$parsers,function(t){n=t(n)}),this.$modelValue!==n&&(this.$modelValue=n,c(t,n),o(this.$viewChangeListeners,function(t){try{t()}catch(n){e(n)}}))};var g=this;t.$watch(function(){var e=u(t);if(g.$modelValue!==e){var n=g.$formatters,r=n.length;for(g.$modelValue=e;r--;)e=n[r](e);g.$viewValue!==e&&(g.$viewValue=e,g.$render())}return e})}],Ui=function(){return{require:["ngModel","^?form"],controller:zi,link:function(t,e,n,r){var i=r[0],o=r[1]||Ni;o.$addControl(i),t.$on("$destroy",function(){o.$removeControl(i)})}}},Vi=v({require:"ngModel",link:function(t,e,n,r){r.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),Xi=function(){return{require:"?ngModel",link:function(t,e,n,r){if(r){n.required=!0;var i=function(t){return n.required&&r.$isEmpty(t)?void r.$setValidity("required",!1):(r.$setValidity("required",!0),t)};r.$formatters.push(i),r.$parsers.unshift(i),n.$observe("required",function(){i(r.$viewValue)})}}}},Yi=function(){return{require:"ngModel",link:function(t,e,r,i){var a=/\/(.*)\//.exec(r.ngList),s=a&&new RegExp(a[1])||r.ngList||",",l=function(t){if(!m(t)){var e=[];return t&&o(t.split(s),function(t){t&&e.push(Nr(t))}),e}};i.$parsers.push(l),i.$formatters.push(function(t){return Ar(t)?t.join(", "):n}),i.$isEmpty=function(t){return!t||!t.length}}}},Qi=/^(true|false|\d+)$/,Gi=function(){return{priority:100,compile:function(t,e){return Qi.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},Ji=tr({compile:function(t){return t.addClass("ng-binding"),function(t,e,r){e.data("$binding",r.ngBind),t.$watch(r.ngBind,function(t){e.text(t==n?"":t)})}}}),Ki=["$interpolate",function(t){return function(e,n,r){var i=t(n.attr(r.$attr.ngBindTemplate));n.addClass("ng-binding").data("$binding",i),r.$observe("ngBindTemplate",function(t){n.text(t)})}}],Zi=["$sce","$parse",function(t,e){return function(n,r,i){function o(){return(a(n)||"").toString()}r.addClass("ng-binding").data("$binding",i.ngBindHtml);var a=e(i.ngBindHtml);n.$watch(o,function(){r.html(t.getTrustedHtml(a(n))||"")})}}],to=fr("",!0),eo=fr("Odd",0),no=fr("Even",1),ro=tr({compile:function(t,e){e.$set("ngCloak",n),t.removeClass("ng-cloak")}}),io=[function(){return{scope:!0,controller:"@",priority:500}}],oo={};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=Ie("ng-"+t);oo[e]=["$parse",function(n){return{compile:function(r,i){var o=n(i[e]);return function(e,n){n.on(hr(t),function(t){e.$apply(function(){o(e,{$event:t})})})}}}}]});var ao=["$animate",function(t){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,l,u;n.$watch(i.ngIf,function(o){z(o)?l||(l=n.$new(),a(l,function(n){n[n.length++]=e.createComment(" end ngIf: "+i.ngIf+" "),s={clone:n},t.enter(n,r.parent(),r)})):(u&&(u.remove(),u=null),l&&(l.$destroy(),l=null),s&&(u=oe(s.clone),t.leave(u,function(){u=null}),s=null))})}}}],so=["$http","$templateCache","$anchorScroll","$animate","$sce",function(t,e,n,r,i){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Er.noop,compile:function(o,a){var s=a.ngInclude||a.src,l=a.onload||"",u=a.autoscroll;return function(o,a,c,f,d){var h,p,g,v=0,m=function(){p&&(p.remove(),p=null),h&&(h.$destroy(),h=null),g&&(r.leave(g,function(){p=null}),p=g,g=null)};o.$watch(i.parseAsResourceUrl(s),function(i){var s=function(){!y(u)||u&&!o.$eval(u)||n()},c=++v;i?(t.get(i,{cache:e}).success(function(t){if(c===v){var e=o.$new();f.template=t;var n=d(e,function(t){m(),r.enter(t,null,a,s)});h=e,g=n,h.$emit("$includeContentLoaded"),o.$eval(l)}}).error(function(){c===v&&m()}),o.$emit("$includeContentRequested")):(m(),f.template=null)})}}}}],lo=["$compile",function(t){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(e,n,r,i){n.html(i.template),t(n.contents())(e)}}}],uo=tr({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),co=tr({terminal:!0,priority:1e3}),fo=["$locale","$interpolate",function(t,e){var n=/{}/g;return{restrict:"EA",link:function(r,i,a){var s=a.count,l=a.$attr.when&&i.attr(a.$attr.when),u=a.offset||0,c=r.$eval(l)||{},f={},d=e.startSymbol(),h=e.endSymbol(),p=/^when(Minus)?(.+)$/;o(a,function(t,e){p.test(e)&&(c[hr(e.replace("when","").replace("Minus","-"))]=i.attr(a.$attr[e]))}),o(c,function(t,r){f[r]=e(t.replace(n,d+s+"-"+u+h))}),r.$watch(function(){var e=parseFloat(r.$eval(s));return isNaN(e)?"":(e in c||(e=t.pluralCat(e-u)),f[e](r,i,!0))},function(t){i.text(t)})}}}],ho=["$parse","$animate",function(t,n){function a(t){return t.clone[0]}function s(t){return t.clone[t.clone.length-1]}var l="$$NG_REMOVED",u=r("ngRepeat");return{transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,link:function(r,c,f,d,h){var p,g,v,m,y,$,b,w,x,C=f.ngRepeat,T=C.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),k={$id:Ne};if(!T)throw u("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",C);if($=T[1],b=T[2],p=T[3],p?(g=t(p),v=function(t,e,n){return x&&(k[x]=t),k[w]=e,k.$index=n,g(r,k)}):(m=function(t,e){return Ne(e)},y=function(t){return t}),T=$.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/),!T)throw u("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",$);w=T[3]||T[1],x=T[2];var S={};r.$watchCollection(b,function(t){var f,d,p,g,$,b,T,k,E,_,A,N,D=c[0],j={},O=[];if(i(t))_=t,E=v||m;else{E=v||y,_=[];for(b in t)t.hasOwnProperty(b)&&"$"!=b.charAt(0)&&_.push(b);_.sort()}for(g=_.length,d=O.length=_.length,f=0;d>f;f++)if(b=t===_?f:_[f],T=t[b],k=E(b,T,f),re(k,"`track by` id"),S.hasOwnProperty(k))A=S[k],delete S[k],j[k]=A,O[f]=A;else{if(j.hasOwnProperty(k))throw o(O,function(t){t&&t.scope&&(S[t.id]=t)}),u("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}",C,k);O[f]={id:k},j[k]=!1}for(b in S)S.hasOwnProperty(b)&&(A=S[b],N=oe(A.clone),n.leave(N),o(N,function(t){t[l]=!0}),A.scope.$destroy());for(f=0,d=_.length;d>f;f++){if(b=t===_?f:_[f],T=t[b],A=O[f],O[f-1]&&(D=s(O[f-1])),A.scope){$=A.scope,p=D;do p=p.nextSibling;while(p&&p[l]);a(A)!=p&&n.move(oe(A.clone),null,$r(D)),D=s(A)}else $=r.$new();$[w]=T,x&&($[x]=b),$.$index=f,$.$first=0===f,$.$last=f===g-1,$.$middle=!($.$first||$.$last),$.$odd=!($.$even=0===(1&f)),A.scope||h($,function(t){t[t.length++]=e.createComment(" end ngRepeat: "+C+" "),n.enter(t,null,$r(D)),D=t,A.scope=$,A.clone=t,j[A.id]=A})}S=j})}}}],po=["$animate",function(t){return function(e,n,r){e.$watch(r.ngShow,function(e){t[z(e)?"removeClass":"addClass"](n,"ng-hide")})}}],go=["$animate",function(t){return function(e,n,r){e.$watch(r.ngHide,function(e){t[z(e)?"addClass":"removeClass"](n,"ng-hide")})}}],vo=tr(function(t,e,n){t.$watch(n.ngStyle,function(t,n){n&&t!==n&&o(n,function(t,n){e.css(n,"")}),t&&e.css(t)},!0)}),mo=["$animate",function(t){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(e,n,r,i){var a=r.ngSwitch||r.on,s=[],l=[],u=[],c=[];e.$watch(a,function(n){var a,f;for(a=0,f=u.length;f>a;++a)u[a].remove();for(u.length=0,a=0,f=c.length;f>a;++a){var d=l[a];c[a].$destroy(),u[a]=d,t.leave(d,function(){u.splice(a,1)})}l.length=0,c.length=0,(s=i.cases["!"+n]||i.cases["?"])&&(e.$eval(r.change),o(s,function(n){var r=e.$new();c.push(r),n.transclude(r,function(e){var r=n.element;l.push(e),t.enter(e,r.parent(),r)})}))})}}}],yo=tr({transclude:"element",priority:800,require:"^ngSwitch",link:function(t,e,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:e})}}),$o=tr({transclude:"element",priority:800,require:"^ngSwitch",link:function(t,e,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:e})}}),bo=tr({link:function(t,e,n,i,o){if(!o)throw r("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",U(e));o(function(t){e.empty(),e.append(t)})}}),wo=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){if("text/ng-template"==n.type){var r=n.id,i=e[0].text;t.put(r,i)}}}}],xo=r("ngOptions"),Co=v({terminal:!0}),To=["$compile","$parse",function(t,r){var i=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,s={$setViewValue:p};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(t,e,n){var r,i,o=this,a={},l=s;o.databound=n.ngModel,o.init=function(t,e,n){l=t,r=e,i=n},o.addOption=function(e){re(e,'"option value"'),a[e]=!0,l.$viewValue==e&&(t.val(e),i.parent()&&i.remove())},o.removeOption=function(t){this.hasOption(t)&&(delete a[t],l.$viewValue==t&&this.renderUnknownOption(t))},o.renderUnknownOption=function(e){var n="? "+Ne(e)+" ?";i.val(n),t.prepend(i),t.val(n),i.prop("selected",!0)},o.hasOption=function(t){return a.hasOwnProperty(t)},e.$on("$destroy",function(){o.renderUnknownOption=p})}],link:function(s,l,u,c){function f(t,e,n,r){n.$render=function(){var t=n.$viewValue;r.hasOption(t)?(T.parent()&&T.remove(),e.val(t),""===t&&p.prop("selected",!0)):m(t)&&p?e.val(""):r.renderUnknownOption(t)},e.on("change",function(){t.$apply(function(){T.parent()&&T.remove(),n.$setViewValue(e.val())})})}function d(t,e,n){var r;n.$render=function(){var t=new De(n.$viewValue);o(e.find("option"),function(e){e.selected=y(t.get(e.value))})},t.$watch(function(){H(r,n.$viewValue)||(r=L(n.$viewValue),n.$render())}),e.on("change",function(){t.$apply(function(){var t=[];o(e.find("option"),function(e){e.selected&&t.push(e.value)}),n.$setViewValue(t)})})}function h(e,o,s){function l(){var t,n,r,i,l,u,v,b,k,S,E,_,A,N,D,j={"":[]},O=[""],M=s.$modelValue,L=g(e)||[],H=d?a(L):L,F={},P=!1;if($)if(m&&Ar(M)){P=new De([]);for(var R=0;R<M.length;R++)F[f]=M[R],P.put(m(e,F),M[R])}else P=new De(M);for(E=0;k=H.length,k>E;E++){if(v=E,d){if(v=H[E],"$"===v.charAt(0))continue;F[d]=v}if(F[f]=L[v],t=h(e,F)||"",(n=j[t])||(n=j[t]=[],O.push(t)),$)_=y(P.remove(m?m(e,F):p(e,F)));else{if(m){var q={};q[f]=M,_=m(e,q)===m(e,F)}else _=M===p(e,F);P=P||_}D=c(e,F),D=y(D)?D:"",n.push({id:m?m(e,F):d?H[E]:E,label:D,selected:_})}for($||(w||null===M?j[""].unshift({id:"",label:"",selected:!P}):P||j[""].unshift({id:"?",label:"",selected:!0})),S=0,b=O.length;b>S;S++){for(t=O[S],n=j[t],T.length<=S?(i={element:C.clone().attr("label",t),label:n.label},l=[i],T.push(l),o.append(i.element)):(l=T[S],i=l[0],i.label!=t&&i.element.attr("label",i.label=t)),A=null,E=0,k=n.length;k>E;E++)r=n[E],(u=l[E+1])?(A=u.element,u.label!==r.label&&A.text(u.label=r.label),u.id!==r.id&&A.val(u.id=r.id),u.selected!==r.selected&&A.prop("selected",u.selected=r.selected)):(""===r.id&&w?N=w:(N=x.clone()).val(r.id).prop("selected",r.selected).text(r.label),l.push(u={element:N,label:r.label,id:r.id,selected:r.selected}),A?A.after(N):i.element.append(N),A=N);for(E++;l.length>E;)l.pop().element.remove()}for(;T.length>S;)T.pop()[0].element.remove()}var u;if(!(u=b.match(i)))throw xo("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",b,U(o));var c=r(u[2]||u[1]),f=u[4]||u[6],d=u[5],h=r(u[3]||""),p=r(u[2]?u[1]:f),g=r(u[7]),v=u[8],m=v?r(u[8]):null,T=[[{element:o,label:""}]];w&&(t(w)(e),w.removeClass("ng-scope"),w.remove()),o.empty(),o.on("change",function(){e.$apply(function(){var t,r,i,a,l,u,c,h,v,y=g(e)||[],b={};if($){for(i=[],u=0,h=T.length;h>u;u++)for(t=T[u],l=1,c=t.length;c>l;l++)if((a=t[l].element)[0].selected){if(r=a.val(),d&&(b[d]=r),m)for(v=0;v<y.length&&(b[f]=y[v],m(e,b)!=r);v++);else b[f]=y[r];i.push(p(e,b))}}else{if(r=o.val(),"?"==r)i=n;else if(""===r)i=null;else if(m){for(v=0;v<y.length;v++)if(b[f]=y[v],m(e,b)==r){i=p(e,b);break}}else b[f]=y[r],d&&(b[d]=r),i=p(e,b);T[0].length>1&&T[0][1].id!==r&&(T[0][1].selected=!1)}s.$setViewValue(i)})}),s.$render=l,e.$watch(l)}if(c[1]){for(var p,g=c[0],v=c[1],$=u.multiple,b=u.ngOptions,w=!1,x=$r(e.createElement("option")),C=$r(e.createElement("optgroup")),T=x.clone(),k=0,S=l.children(),E=S.length;E>k;k++)if(""===S[k].value){p=w=S.eq(k);break}g.init(v,w,T),$&&(v.$isEmpty=function(t){return!t||0===t.length}),b?h(s,l,v):$?d(s,l,v):f(s,l,v,g)}}}}],ko=["$interpolate",function(t){var e={addOption:p,removeOption:p};return{restrict:"E",priority:100,compile:function(n,r){if(m(r.value)){var i=t(n.text(),!0);i||r.$set("value",n.text())}return function(t,n,r){var o="$selectController",a=n.parent(),s=a.data(o)||a.parent().data(o);s&&s.databound?n.prop("selected",!1):s=e,i?t.$watch(i,function(t,e){r.$set("value",t),t!==e&&s.removeOption(e),s.addOption(t)}):s.addOption(r.value),n.on("$destroy",function(){s.removeOption(r.value)})}}}}],So=v({restrict:"E",terminal:!0});return t.angular.bootstrap?void void 0:(te(),se(Er),void $r(e).ready(function(){J(e,K)}))}(window,document),!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'),!function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e=t.length,n=ie.type(t);return"function"===n||ie.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}function r(t,e,n){if(ie.isFunction(e))return ie.grep(t,function(t,r){return!!e.call(t,r,t)!==n});if(e.nodeType)return ie.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(de.test(e))return ie.filter(e,t,n);e=ie.filter(e,t)}return ie.grep(t,function(t){return ie.inArray(t,e)>=0!==n})}function i(t,e){do t=t[e];while(t&&1!==t.nodeType);return t}function o(t){var e=be[t]={};return ie.each(t.match($e)||[],function(t,n){e[n]=!0}),e}function a(){pe.addEventListener?(pe.removeEventListener("DOMContentLoaded",s,!1),t.removeEventListener("load",s,!1)):(pe.detachEvent("onreadystatechange",s),t.detachEvent("onload",s))}function s(){(pe.addEventListener||"load"===event.type||"complete"===pe.readyState)&&(a(),ie.ready())}function l(t,e,n){if(void 0===n&&1===t.nodeType){var r="data-"+e.replace(ke,"-$1").toLowerCase();if(n=t.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Te.test(n)?ie.parseJSON(n):n}catch(i){}ie.data(t,e,n)}else n=void 0}return n}function u(t){var e;for(e in t)if(("data"!==e||!ie.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;return!0}function c(t,e,n,r){if(ie.acceptData(t)){var i,o,a=ie.expando,s=t.nodeType,l=s?ie.cache:t,u=s?t[a]:t[a]&&a;if(u&&l[u]&&(r||l[u].data)||void 0!==n||"string"!=typeof e)return u||(u=s?t[a]=Y.pop()||ie.guid++:a),l[u]||(l[u]=s?{}:{toJSON:ie.noop}),("object"==typeof e||"function"==typeof e)&&(r?l[u]=ie.extend(l[u],e):l[u].data=ie.extend(l[u].data,e)),o=l[u],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[ie.camelCase(e)]=n),"string"==typeof e?(i=o[e],null==i&&(i=o[ie.camelCase(e)])):i=o,i}}function f(t,e,n){if(ie.acceptData(t)){var r,i,o=t.nodeType,a=o?ie.cache:t,s=o?t[ie.expando]:ie.expando;if(a[s]){if(e&&(r=n?a[s]:a[s].data)){ie.isArray(e)?e=e.concat(ie.map(e,ie.camelCase)):e in r?e=[e]:(e=ie.camelCase(e),e=e in r?[e]:e.split(" ")),i=e.length;for(;i--;)delete r[e[i]];if(n?!u(r):!ie.isEmptyObject(r))return}(n||(delete a[s].data,u(a[s])))&&(o?ie.cleanData([t],!0):ne.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function d(){return!0}function h(){return!1}function p(){try{return pe.activeElement}catch(t){}}function g(t){var e=He.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());return n}function v(t,e){var n,r,i=0,o=typeof t.getElementsByTagName!==Ce?t.getElementsByTagName(e||"*"):typeof t.querySelectorAll!==Ce?t.querySelectorAll(e||"*"):void 0;if(!o)for(o=[],n=t.childNodes||t;null!=(r=n[i]);i++)!e||ie.nodeName(r,e)?o.push(r):ie.merge(o,v(r,e));return void 0===e||e&&ie.nodeName(t,e)?ie.merge([t],o):o}function m(t){Ne.test(t.type)&&(t.defaultChecked=t.checked)}function y(t,e){return ie.nodeName(t,"table")&&ie.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function $(t){return t.type=(null!==ie.find.attr(t,"type"))+"/"+t.type,t}function b(t){var e=Xe.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function w(t,e){for(var n,r=0;null!=(n=t[r]);r++)ie._data(n,"globalEval",!e||ie._data(e[r],"globalEval"))}function x(t,e){if(1===e.nodeType&&ie.hasData(t)){var n,r,i,o=ie._data(t),a=ie._data(e,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)ie.event.add(e,n,s[n][r])}a.data&&(a.data=ie.extend({},a.data))}}function C(t,e){var n,r,i;if(1===e.nodeType){if(n=e.nodeName.toLowerCase(),!ne.noCloneEvent&&e[ie.expando]){i=ie._data(e);for(r in i.events)ie.removeEvent(e,r,i.handle);e.removeAttribute(ie.expando)}"script"===n&&e.text!==t.text?($(e).text=t.text,b(e)):"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),ne.html5Clone&&t.innerHTML&&!ie.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&Ne.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===n?e.defaultSelected=e.selected=t.defaultSelected:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}}function T(e,n){var r,i=ie(n.createElement(e)).appendTo(n.body),o=t.getDefaultComputedStyle&&(r=t.getDefaultComputedStyle(i[0]))?r.display:ie.css(i[0],"display");return i.detach(),o}function k(t){var e=pe,n=Ze[t];return n||(n=T(t,e),"none"!==n&&n||(Ke=(Ke||ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=(Ke[0].contentWindow||Ke[0].contentDocument).document,e.write(),e.close(),n=T(t,e),Ke.detach()),Ze[t]=n),n}function S(t,e){return{get:function(){var n=t();return null!=n?n?void delete this.get:(this.get=e).apply(this,arguments):void 0}}}function E(t,e){if(e in t)return e;for(var n=e.charAt(0).toUpperCase()+e.slice(1),r=e,i=hn.length;i--;)if(e=hn[i]+n,e in t)return e;return r}function _(t,e){for(var n,r,i,o=[],a=0,s=t.length;s>a;a++)r=t[a],r.style&&(o[a]=ie._data(r,"olddisplay"),n=r.style.display,e?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&_e(r)&&(o[a]=ie._data(r,"olddisplay",k(r.nodeName)))):(i=_e(r),(n&&"none"!==n||!i)&&ie._data(r,"olddisplay",i?n:ie.css(r,"display"))));for(a=0;s>a;a++)r=t[a],r.style&&(e&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=e?o[a]||"":"none"));return t}function A(t,e,n){var r=un.exec(e);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):e}function N(t,e,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===e?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=ie.css(t,n+Ee[o],!0,i)),r?("content"===n&&(a-=ie.css(t,"padding"+Ee[o],!0,i)),"margin"!==n&&(a-=ie.css(t,"border"+Ee[o]+"Width",!0,i))):(a+=ie.css(t,"padding"+Ee[o],!0,i),"padding"!==n&&(a+=ie.css(t,"border"+Ee[o]+"Width",!0,i)));return a}function D(t,e,n){var r=!0,i="width"===e?t.offsetWidth:t.offsetHeight,o=tn(t),a=ne.boxSizing&&"border-box"===ie.css(t,"boxSizing",!1,o);if(0>=i||null==i){if(i=en(t,e,o),(0>i||null==i)&&(i=t.style[e]),rn.test(i))return i;r=a&&(ne.boxSizingReliable()||i===t.style[e]),i=parseFloat(i)||0}return i+N(t,e,n||(a?"border":"content"),r,o)+"px"}function j(t,e,n,r,i){return new j.prototype.init(t,e,n,r,i)}function O(){return setTimeout(function(){pn=void 0}),pn=ie.now()}function M(t,e){var n,r={height:t},i=0;for(e=e?1:0;4>i;i+=2-e)n=Ee[i],r["margin"+n]=r["padding"+n]=t;return e&&(r.opacity=r.width=t),r}function L(t,e,n){for(var r,i=(bn[e]||[]).concat(bn["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,e,t))return r}function H(t,e,n){var r,i,o,a,s,l,u,c,f=this,d={},h=t.style,p=t.nodeType&&_e(t),g=ie._data(t,"fxshow");n.queue||(s=ie._queueHooks(t,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,ie.queue(t,"fx").length||s.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],u=ie.css(t,"display"),c="none"===u?ie._data(t,"olddisplay")||k(t.nodeName):u,"inline"===c&&"none"===ie.css(t,"float")&&(ne.inlineBlockNeedsLayout&&"inline"!==k(t.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",ne.shrinkWrapBlocks()||f.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(r in e)if(i=e[r],vn.exec(i)){if(delete e[r],o=o||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;p=!0}d[r]=g&&g[r]||ie.style(t,r)}else u=void 0;if(ie.isEmptyObject(d))"inline"===("none"===u?k(t.nodeName):u)&&(h.display=u);else{g?"hidden"in g&&(p=g.hidden):g=ie._data(t,"fxshow",{}),o&&(g.hidden=!p),p?ie(t).show():f.done(function(){ie(t).hide()}),f.done(function(){var e;ie._removeData(t,"fxshow");for(e in d)ie.style(t,e,d[e])});for(r in d)a=L(p?g[r]:0,r,f),r in g||(g[r]=a.start,p&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function F(t,e){var n,r,i,o,a;for(n in t)if(r=ie.camelCase(n),i=e[r],o=t[n],ie.isArray(o)&&(i=o[1],o=t[n]=o[0]),n!==r&&(t[r]=o,delete t[n]),a=ie.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete t[r];for(n in o)n in t||(t[n]=o[n],e[n]=i)}else e[r]=i}function P(t,e,n){var r,i,o=0,a=$n.length,s=ie.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var e=pn||O(),n=Math.max(0,u.startTime+u.duration-e),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(o);return s.notifyWith(t,[u,o,n]),1>o&&l?n:(s.resolveWith(t,[u]),!1)},u=s.promise({elem:t,props:ie.extend({},e),opts:ie.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:pn||O(),duration:n.duration,tweens:[],createTween:function(e,n){var r=ie.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(r),r},stop:function(e){var n=0,r=e?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return e?s.resolveWith(t,[u,e]):s.rejectWith(t,[u,e]),this}}),c=u.props;for(F(c,u.opts.specialEasing);a>o;o++)if(r=$n[o].call(u,t,c,u.opts))return r;return ie.map(c,L,u),ie.isFunction(u.opts.start)&&u.opts.start.call(t,u),ie.fx.timer(ie.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function R(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var r,i=0,o=e.toLowerCase().match($e)||[];if(ie.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)}}function q(t,e,n,r){function i(s){var l;return o[s]=!0,ie.each(t[s]||[],function(t,s){var u=s(e,n,r);return"string"!=typeof u||a||o[u]?a?!(l=u):void 0:(e.dataTypes.unshift(u),i(u),!1)}),l}var o={},a=t===zn;return i(e.dataTypes[0])||!o["*"]&&i("*")}function I(t,e){var n,r,i=ie.ajaxSettings.flatOptions||{};for(r in e)void 0!==e[r]&&((i[r]?t:n||(n={}))[r]=e[r]);return n&&ie.extend(!0,t,n),t}function B(t,e,n){for(var r,i,o,a,s=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)o=l[0];else{for(a in n){if(!l[0]||t.converters[a+" "+l[0]]){o=a;break}r||(r=a)}o=o||r}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function W(t,e,n,r){var i,o,a,s,l,u={},c=t.dataTypes.slice();if(c[1])for(a in t.converters)u[a.toLowerCase()]=t.converters[a];for(o=c.shift();o;)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!l&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&t["throws"])e=a(e);else try{e=a(e)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+l+" to "+o}}}return{state:"success",data:e}}function z(t,e,n,r){var i;if(ie.isArray(e))ie.each(e,function(e,i){n||Yn.test(t)?r(t,i):z(t+"["+("object"==typeof i?e:"")+"]",i,n,r)});else if(n||"object"!==ie.type(e))r(t,e);else for(i in e)z(t+"["+i+"]",e[i],n,r)}function U(){try{return new t.XMLHttpRequest}catch(e){}}function V(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function X(t){return ie.isWindow(t)?t:9===t.nodeType?t.defaultView||t.parentWindow:!1}var Y=[],Q=Y.slice,G=Y.concat,J=Y.push,K=Y.indexOf,Z={},te=Z.toString,ee=Z.hasOwnProperty,ne={},re="1.11.1",ie=function(t,e){return new ie.fn.init(t,e)},oe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,se=/-([\da-z])/gi,le=function(t,e){return e.toUpperCase()};ie.fn=ie.prototype={jquery:re,constructor:ie,selector:"",length:0,toArray:function(){return Q.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:Q.call(this)},pushStack:function(t){var e=ie.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t,e){return ie.each(this,t,e)},map:function(t){return this.pushStack(ie.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(Q.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:J,sort:Y.sort,splice:Y.splice},ie.extend=ie.fn.extend=function(){var t,e,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||ie.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(i=arguments[s]))for(r in i)t=a[r],n=i[r],a!==n&&(u&&n&&(ie.isPlainObject(n)||(e=ie.isArray(n)))?(e?(e=!1,o=t&&ie.isArray(t)?t:[]):o=t&&ie.isPlainObject(t)?t:{},a[r]=ie.extend(u,o,n)):void 0!==n&&(a[r]=n));return a},ie.extend({expando:"jQuery"+(re+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===ie.type(t)},isArray:Array.isArray||function(t){return"array"===ie.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!ie.isArray(t)&&t-parseFloat(t)>=0},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},isPlainObject:function(t){var e;if(!t||"object"!==ie.type(t)||t.nodeType||ie.isWindow(t))return!1;try{if(t.constructor&&!ee.call(t,"constructor")&&!ee.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}if(ne.ownLast)for(e in t)return ee.call(t,e);for(e in t);return void 0===e||ee.call(t,e)},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?Z[te.call(t)]||"object":typeof t},globalEval:function(e){e&&ie.trim(e)&&(t.execScript||function(e){t.eval.call(t,e)})(e)},camelCase:function(t){return t.replace(ae,"ms-").replace(se,le)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,r){var i,o=0,a=t.length,s=n(t);if(r){if(s)for(;a>o&&(i=e.apply(t[o],r),i!==!1);o++);else for(o in t)if(i=e.apply(t[o],r),i===!1)break}else if(s)for(;a>o&&(i=e.call(t[o],o,t[o]),i!==!1);o++);else for(o in t)if(i=e.call(t[o],o,t[o]),i===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(oe,"")},makeArray:function(t,e){var r=e||[];return null!=t&&(n(Object(t))?ie.merge(r,"string"==typeof t?[t]:t):J.call(r,t)),r},inArray:function(t,e,n){var r;if(e){if(K)return K.call(e,t,n);for(r=e.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in e&&e[n]===t)return n}return-1},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;n>r;)t[i++]=e[r++];if(n!==n)for(;void 0!==e[r];)t[i++]=e[r++];return t.length=i,t},grep:function(t,e,n){for(var r,i=[],o=0,a=t.length,s=!n;a>o;o++)r=!e(t[o],o),r!==s&&i.push(t[o]);return i},map:function(t,e,r){var i,o=0,a=t.length,s=n(t),l=[];if(s)for(;a>o;o++)i=e(t[o],o,r),null!=i&&l.push(i);else for(o in t)i=e(t[o],o,r),null!=i&&l.push(i);return G.apply([],l)},guid:1,proxy:function(t,e){var n,r,i;return"string"==typeof e&&(i=t[e],e=t,t=i),ie.isFunction(t)?(n=Q.call(arguments,2),r=function(){return t.apply(e||this,n.concat(Q.call(arguments)))},r.guid=t.guid=t.guid||ie.guid++,r):void 0},now:function(){return+new Date},support:ne}),ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Z["[object "+e+"]"]=e.toLowerCase()});var ue=function(t){function e(t,e,n,r){var i,o,a,s,l,u,f,h,p,g;if((e?e.ownerDocument||e:q)!==j&&D(e),e=e||j,n=n||[],!t||"string"!=typeof t)return n;if(1!==(s=e.nodeType)&&9!==s)return[];if(M&&!r){if(i=ye.exec(t))if(a=i[1]){if(9===s){if(o=e.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(e.ownerDocument&&(o=e.ownerDocument.getElementById(a))&&P(e,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,e.getElementsByTagName(t)),n;if((a=i[3])&&w.getElementsByClassName&&e.getElementsByClassName)return Z.apply(n,e.getElementsByClassName(a)),n}if(w.qsa&&(!L||!L.test(t))){if(h=f=R,p=e,g=9===s&&t,1===s&&"object"!==e.nodeName.toLowerCase()){for(u=k(t),(f=e.getAttribute("id"))?h=f.replace(be,"\\$&"):e.setAttribute("id",h),h="[id='"+h+"'] ",l=u.length;l--;)u[l]=h+d(u[l]);p=$e.test(t)&&c(e.parentNode)||e,g=u.join(",")}if(g)try{return Z.apply(n,p.querySelectorAll(g)),n}catch(v){}finally{f||e.removeAttribute("id")}}}return E(t.replace(le,"$1"),e,n,r)}function n(){function t(n,r){return e.push(n+" ")>x.cacheLength&&delete t[e.shift()],t[n+" "]=r
}var e=[];return t}function r(t){return t[R]=!0,t}function i(t){var e=j.createElement("div");try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function o(t,e){for(var n=t.split("|"),r=t.length;r--;)x.attrHandle[n[r]]=e}function a(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||Y)-(~t.sourceIndex||Y);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function s(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function u(t){return r(function(e){return e=+e,r(function(n,r){for(var i,o=t([],n.length,e),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(t){return t&&typeof t.getElementsByTagName!==X&&t}function f(){}function d(t){for(var e=0,n=t.length,r="";n>e;e++)r+=t[e].value;return r}function h(t,e,n){var r=e.dir,i=n&&"parentNode"===r,o=B++;return e.first?function(e,n,o){for(;e=e[r];)if(1===e.nodeType||i)return t(e,n,o)}:function(e,n,a){var s,l,u=[I,o];if(a){for(;e=e[r];)if((1===e.nodeType||i)&&t(e,n,a))return!0}else for(;e=e[r];)if(1===e.nodeType||i){if(l=e[R]||(e[R]={}),(s=l[r])&&s[0]===I&&s[1]===o)return u[2]=s[2];if(l[r]=u,u[2]=t(e,n,a))return!0}}}function p(t){return t.length>1?function(e,n,r){for(var i=t.length;i--;)if(!t[i](e,n,r))return!1;return!0}:t[0]}function g(t,n,r){for(var i=0,o=n.length;o>i;i++)e(t,n[i],r);return r}function v(t,e,n,r,i){for(var o,a=[],s=0,l=t.length,u=null!=e;l>s;s++)(o=t[s])&&(!n||n(o,r,i))&&(a.push(o),u&&e.push(s));return a}function m(t,e,n,i,o,a){return i&&!i[R]&&(i=m(i)),o&&!o[R]&&(o=m(o,a)),r(function(r,a,s,l){var u,c,f,d=[],h=[],p=a.length,m=r||g(e||"*",s.nodeType?[s]:s,[]),y=!t||!r&&e?m:v(m,d,t,s,l),$=n?o||(r?t:p||i)?[]:a:y;if(n&&n(y,$,s,l),i)for(u=v($,h),i(u,[],s,l),c=u.length;c--;)(f=u[c])&&($[h[c]]=!(y[h[c]]=f));if(r){if(o||t){if(o){for(u=[],c=$.length;c--;)(f=$[c])&&u.push(y[c]=f);o(null,$=[],u,l)}for(c=$.length;c--;)(f=$[c])&&(u=o?ee.call(r,f):d[c])>-1&&(r[u]=!(a[u]=f))}}else $=v($===a?$.splice(p,$.length):$),o?o(null,a,$,l):Z.apply(a,$)})}function y(t){for(var e,n,r,i=t.length,o=x.relative[t[0].type],a=o||x.relative[" "],s=o?1:0,l=h(function(t){return t===e},a,!0),u=h(function(t){return ee.call(e,t)>-1},a,!0),c=[function(t,n,r){return!o&&(r||n!==_)||((e=n).nodeType?l(t,n,r):u(t,n,r))}];i>s;s++)if(n=x.relative[t[s].type])c=[h(p(c),n)];else{if(n=x.filter[t[s].type].apply(null,t[s].matches),n[R]){for(r=++s;i>r&&!x.relative[t[r].type];r++);return m(s>1&&p(c),s>1&&d(t.slice(0,s-1).concat({value:" "===t[s-2].type?"*":""})).replace(le,"$1"),n,r>s&&y(t.slice(s,r)),i>r&&y(t=t.slice(r)),i>r&&d(t))}c.push(n)}return p(c)}function $(t,n){var i=n.length>0,o=t.length>0,a=function(r,a,s,l,u){var c,f,d,h=0,p="0",g=r&&[],m=[],y=_,$=r||o&&x.find.TAG("*",u),b=I+=null==y?1:Math.random()||.1,w=$.length;for(u&&(_=a!==j&&a);p!==w&&null!=(c=$[p]);p++){if(o&&c){for(f=0;d=t[f++];)if(d(c,a,s)){l.push(c);break}u&&(I=b)}i&&((c=!d&&c)&&h--,r&&g.push(c))}if(h+=p,i&&p!==h){for(f=0;d=n[f++];)d(g,m,a,s);if(r){if(h>0)for(;p--;)g[p]||m[p]||(m[p]=J.call(l));m=v(m)}Z.apply(l,m),u&&!r&&m.length>0&&h+n.length>1&&e.uniqueSort(l)}return u&&(I=b,_=y),g};return i?r(a):a}var b,w,x,C,T,k,S,E,_,A,N,D,j,O,M,L,H,F,P,R="sizzle"+-new Date,q=t.document,I=0,B=0,W=n(),z=n(),U=n(),V=function(t,e){return t===e&&(N=!0),0},X="undefined",Y=1<<31,Q={}.hasOwnProperty,G=[],J=G.pop,K=G.push,Z=G.push,te=G.slice,ee=G.indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]===t)return e;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=ie.replace("w","w#"),ae="\\["+re+"*("+ie+")(?:"+re+"*([*^$|!~]?=)"+re+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+re+"*\\]",se=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ae+")*)|.*)\\)|)",le=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),ue=new RegExp("^"+re+"*,"+re+"*"),ce=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),fe=new RegExp("="+re+"*([^\\]'\"]*?)"+re+"*\\]","g"),de=new RegExp(se),he=new RegExp("^"+oe+"$"),pe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+se),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$e=/[+~]/,be=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),xe=function(t,e,n){var r="0x"+e-65536;return r!==r||n?e:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(G=te.call(q.childNodes),q.childNodes),G[q.childNodes.length].nodeType}catch(Ce){Z={apply:G.length?function(t,e){K.apply(t,te.call(e))}:function(t,e){for(var n=t.length,r=0;t[n++]=e[r++];);t.length=n-1}}}w=e.support={},T=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},D=e.setDocument=function(t){var e,n=t?t.ownerDocument||t:q,r=n.defaultView;return n!==j&&9===n.nodeType&&n.documentElement?(j=n,O=n.documentElement,M=!T(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){D()},!1):r.attachEvent&&r.attachEvent("onunload",function(){D()})),w.attributes=i(function(t){return t.className="i",!t.getAttribute("className")}),w.getElementsByTagName=i(function(t){return t.appendChild(n.createComment("")),!t.getElementsByTagName("*").length}),w.getElementsByClassName=me.test(n.getElementsByClassName)&&i(function(t){return t.innerHTML="<div class='a'></div><div class='a i'></div>",t.firstChild.className="i",2===t.getElementsByClassName("i").length}),w.getById=i(function(t){return O.appendChild(t).id=R,!n.getElementsByName||!n.getElementsByName(R).length}),w.getById?(x.find.ID=function(t,e){if(typeof e.getElementById!==X&&M){var n=e.getElementById(t);return n&&n.parentNode?[n]:[]}},x.filter.ID=function(t){var e=t.replace(we,xe);return function(t){return t.getAttribute("id")===e}}):(delete x.find.ID,x.filter.ID=function(t){var e=t.replace(we,xe);return function(t){var n=typeof t.getAttributeNode!==X&&t.getAttributeNode("id");return n&&n.value===e}}),x.find.TAG=w.getElementsByTagName?function(t,e){return typeof e.getElementsByTagName!==X?e.getElementsByTagName(t):void 0}:function(t,e){var n,r=[],i=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=w.getElementsByClassName&&function(t,e){return typeof e.getElementsByClassName!==X&&M?e.getElementsByClassName(t):void 0},H=[],L=[],(w.qsa=me.test(n.querySelectorAll))&&(i(function(t){t.innerHTML="<select msallowclip=''><option selected=''></option></select>",t.querySelectorAll("[msallowclip^='']").length&&L.push("[*^$]="+re+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||L.push("\\["+re+"*(?:value|"+ne+")"),t.querySelectorAll(":checked").length||L.push(":checked")}),i(function(t){var e=n.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&L.push("name"+re+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||L.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),L.push(",.*:")})),(w.matchesSelector=me.test(F=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&i(function(t){w.disconnectedMatch=F.call(t,"div"),F.call(t,"[s!='']:x"),H.push("!=",se)}),L=L.length&&new RegExp(L.join("|")),H=H.length&&new RegExp(H.join("|")),e=me.test(O.compareDocumentPosition),P=e||me.test(O.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},V=e?function(t,e){if(t===e)return N=!0,0;var r=!t.compareDocumentPosition-!e.compareDocumentPosition;return r?r:(r=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&r||!w.sortDetached&&e.compareDocumentPosition(t)===r?t===n||t.ownerDocument===q&&P(q,t)?-1:e===n||e.ownerDocument===q&&P(q,e)?1:A?ee.call(A,t)-ee.call(A,e):0:4&r?-1:1)}:function(t,e){if(t===e)return N=!0,0;var r,i=0,o=t.parentNode,s=e.parentNode,l=[t],u=[e];if(!o||!s)return t===n?-1:e===n?1:o?-1:s?1:A?ee.call(A,t)-ee.call(A,e):0;if(o===s)return a(t,e);for(r=t;r=r.parentNode;)l.unshift(r);for(r=e;r=r.parentNode;)u.unshift(r);for(;l[i]===u[i];)i++;return i?a(l[i],u[i]):l[i]===q?-1:u[i]===q?1:0},n):j},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==j&&D(t),n=n.replace(fe,"='$1']"),!(!w.matchesSelector||!M||H&&H.test(n)||L&&L.test(n)))try{var r=F.call(t,n);if(r||w.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(i){}return e(n,j,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==j&&D(t),P(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==j&&D(t);var n=x.attrHandle[e.toLowerCase()],r=n&&Q.call(x.attrHandle,e.toLowerCase())?n(t,e,!M):void 0;return void 0!==r?r:w.attributes||!M?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],r=0,i=0;if(N=!w.detectDuplicates,A=!w.sortStable&&t.slice(0),t.sort(V),N){for(;e=t[i++];)e===t[i]&&(r=n.push(i));for(;r--;)t.splice(n[r],1)}return A=null,t},C=e.getText=function(t){var e,n="",r=0,i=t.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=C(t)}else if(3===i||4===i)return t.nodeValue}else for(;e=t[r++];)n+=C(e);return n},x=e.selectors={cacheLength:50,createPseudo:r,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(we,xe),t[3]=(t[3]||t[4]||t[5]||"").replace(we,xe),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return pe.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&de.test(n)&&(e=k(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(we,xe).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=W[t+" "];return e||(e=new RegExp("(^|"+re+")"+t+"("+re+"|$)"))&&W(t,function(t){return e.test("string"==typeof t.className&&t.className||typeof t.getAttribute!==X&&t.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(i){var o=e.attr(i,t);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(t,e,n,r,i){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),s="of-type"===e;return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,l){var u,c,f,d,h,p,g=o!==a?"nextSibling":"previousSibling",v=e.parentNode,m=s&&e.nodeName.toLowerCase(),y=!l&&!s;if(v){if(o){for(;g;){for(f=e;f=f[g];)if(s?f.nodeName.toLowerCase()===m:1===f.nodeType)return!1;p=g="only"===t&&!p&&"nextSibling"}return!0}if(p=[a?v.firstChild:v.lastChild],a&&y){for(c=v[R]||(v[R]={}),u=c[t]||[],h=u[0]===I&&u[1],d=u[0]===I&&u[2],f=h&&v.childNodes[h];f=++h&&f&&f[g]||(d=h=0)||p.pop();)if(1===f.nodeType&&++d&&f===e){c[t]=[I,h,d];break}}else if(y&&(u=(e[R]||(e[R]={}))[t])&&u[0]===I)d=u[1];else for(;(f=++h&&f&&f[g]||(d=h=0)||p.pop())&&((s?f.nodeName.toLowerCase()!==m:1!==f.nodeType)||!++d||(y&&((f[R]||(f[R]={}))[t]=[I,d]),f!==e)););return d-=i,d===r||d%r===0&&d/r>=0}}},PSEUDO:function(t,n){var i,o=x.pseudos[t]||x.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return o[R]?o(n):o.length>1?(i=[t,t,"",n],x.setFilters.hasOwnProperty(t.toLowerCase())?r(function(t,e){for(var r,i=o(t,n),a=i.length;a--;)r=ee.call(t,i[a]),t[r]=!(e[r]=i[a])}):function(t){return o(t,0,i)}):o}},pseudos:{not:r(function(t){var e=[],n=[],i=S(t.replace(le,"$1"));return i[R]?r(function(t,e,n,r){for(var o,a=i(t,null,r,[]),s=t.length;s--;)(o=a[s])&&(t[s]=!(e[s]=o))}):function(t,r,o){return e[0]=t,i(e,null,o,n),!n.pop()}}),has:r(function(t){return function(n){return e(t,n).length>0}}),contains:r(function(t){return function(e){return(e.textContent||e.innerText||C(e)).indexOf(t)>-1}}),lang:r(function(t){return he.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(we,xe).toLowerCase(),function(e){var n;do if(n=M?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===O},focus:function(t){return t===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!x.pseudos.empty(t)},header:function(t){return ve.test(t.nodeName)},input:function(t){return ge.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:u(function(){return[0]}),last:u(function(t,e){return[e-1]}),eq:u(function(t,e,n){return[0>n?n+e:n]}),even:u(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:u(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:u(function(t,e,n){for(var r=0>n?n+e:n;--r>=0;)t.push(r);return t}),gt:u(function(t,e,n){for(var r=0>n?n+e:n;++r<e;)t.push(r);return t})}},x.pseudos.nth=x.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[b]=s(b);for(b in{submit:!0,reset:!0})x.pseudos[b]=l(b);return f.prototype=x.filters=x.pseudos,x.setFilters=new f,k=e.tokenize=function(t,n){var r,i,o,a,s,l,u,c=z[t+" "];if(c)return n?0:c.slice(0);for(s=t,l=[],u=x.preFilter;s;){(!r||(i=ue.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(le," ")}),s=s.slice(r.length));for(a in x.filter)!(i=pe[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?e.error(t):z(t,l).slice(0)},S=e.compile=function(t,e){var n,r=[],i=[],o=U[t+" "];if(!o){for(e||(e=k(t)),n=e.length;n--;)o=y(e[n]),o[R]?r.push(o):i.push(o);o=U(t,$(i,r)),o.selector=t}return o},E=e.select=function(t,e,n,r){var i,o,a,s,l,u="function"==typeof t&&t,f=!r&&k(t=u.selector||t);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===e.nodeType&&M&&x.relative[o[1].type]){if(e=(x.find.ID(a.matches[0].replace(we,xe),e)||[])[0],!e)return n;u&&(e=e.parentNode),t=t.slice(o.shift().value.length)}for(i=pe.needsContext.test(t)?0:o.length;i--&&(a=o[i],!x.relative[s=a.type]);)if((l=x.find[s])&&(r=l(a.matches[0].replace(we,xe),$e.test(o[0].type)&&c(e.parentNode)||e))){if(o.splice(i,1),t=r.length&&d(o),!t)return Z.apply(n,r),n;break}}return(u||S(t,f))(r,e,!M,n,$e.test(t)&&c(e.parentNode)||e),n},w.sortStable=R.split("").sort(V).join("")===R,w.detectDuplicates=!!N,D(),w.sortDetached=i(function(t){return 1&t.compareDocumentPosition(j.createElement("div"))}),i(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||o("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),w.attributes&&i(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||o("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),i(function(t){return null==t.getAttribute("disabled")})||o(ne,function(t,e,n){var r;return n?void 0:t[e]===!0?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null}),e}(t);ie.find=ue,ie.expr=ue.selectors,ie.expr[":"]=ie.expr.pseudos,ie.unique=ue.uniqueSort,ie.text=ue.getText,ie.isXMLDoc=ue.isXML,ie.contains=ue.contains;var ce=ie.expr.match.needsContext,fe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,de=/^.[^:#\[\.,]*$/;ie.filter=function(t,e,n){var r=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===r.nodeType?ie.find.matchesSelector(r,t)?[r]:[]:ie.find.matches(t,ie.grep(e,function(t){return 1===t.nodeType}))},ie.fn.extend({find:function(t){var e,n=[],r=this,i=r.length;if("string"!=typeof t)return this.pushStack(ie(t).filter(function(){for(e=0;i>e;e++)if(ie.contains(r[e],this))return!0}));for(e=0;i>e;e++)ie.find(t,r[e],n);return n=this.pushStack(i>1?ie.unique(n):n),n.selector=this.selector?this.selector+" "+t:t,n},filter:function(t){return this.pushStack(r(this,t||[],!1))},not:function(t){return this.pushStack(r(this,t||[],!0))},is:function(t){return!!r(this,"string"==typeof t&&ce.test(t)?ie(t):t||[],!1).length}});var he,pe=t.document,ge=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ve=ie.fn.init=function(t,e){var n,r;if(!t)return this;if("string"==typeof t){if(n="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:ge.exec(t),!n||!n[1]&&e)return!e||e.jquery?(e||he).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof ie?e[0]:e,ie.merge(this,ie.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:pe,!0)),fe.test(n[1])&&ie.isPlainObject(e))for(n in e)ie.isFunction(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}if(r=pe.getElementById(n[2]),r&&r.parentNode){if(r.id!==n[2])return he.find(t);this.length=1,this[0]=r}return this.context=pe,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):ie.isFunction(t)?"undefined"!=typeof he.ready?he.ready(t):t(ie):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),ie.makeArray(t,this))};ve.prototype=ie.fn,he=ie(pe);var me=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};ie.extend({dir:function(t,e,n){for(var r=[],i=t[e];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!ie(i).is(n));)1===i.nodeType&&r.push(i),i=i[e];return r},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}}),ie.fn.extend({has:function(t){var e,n=ie(t,this),r=n.length;return this.filter(function(){for(e=0;r>e;e++)if(ie.contains(this,n[e]))return!0})},closest:function(t,e){for(var n,r=0,i=this.length,o=[],a=ce.test(t)||"string"!=typeof t?ie(t,e||this.context):0;i>r;r++)for(n=this[r];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&ie.find.matchesSelector(n,t))){o.push(n);break}return this.pushStack(o.length>1?ie.unique(o):o)},index:function(t){return t?"string"==typeof t?ie.inArray(this[0],ie(t)):ie.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(ie.unique(ie.merge(this.get(),ie(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),ie.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return ie.dir(t,"parentNode")},parentsUntil:function(t,e,n){return ie.dir(t,"parentNode",n)},next:function(t){return i(t,"nextSibling")},prev:function(t){return i(t,"previousSibling")},nextAll:function(t){return ie.dir(t,"nextSibling")},prevAll:function(t){return ie.dir(t,"previousSibling")},nextUntil:function(t,e,n){return ie.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return ie.dir(t,"previousSibling",n)},siblings:function(t){return ie.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return ie.sibling(t.firstChild)},contents:function(t){return ie.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:ie.merge([],t.childNodes)}},function(t,e){ie.fn[t]=function(n,r){var i=ie.map(this,e,n);return"Until"!==t.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ie.filter(r,i)),this.length>1&&(ye[t]||(i=ie.unique(i)),me.test(t)&&(i=i.reverse())),this.pushStack(i)}});var $e=/\S+/g,be={};ie.Callbacks=function(t){t="string"==typeof t?be[t]||o(t):ie.extend({},t);var e,n,r,i,a,s,l=[],u=!t.once&&[],c=function(o){for(n=t.memory&&o,r=!0,a=s||0,s=0,i=l.length,e=!0;l&&i>a;a++)if(l[a].apply(o[0],o[1])===!1&&t.stopOnFalse){n=!1;break}e=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:f.disable())},f={add:function(){if(l){var r=l.length;!function o(e){ie.each(e,function(e,n){var r=ie.type(n);"function"===r?t.unique&&f.has(n)||l.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),e?i=l.length:n&&(s=r,c(n))}return this},remove:function(){return l&&ie.each(arguments,function(t,n){for(var r;(r=ie.inArray(n,l,r))>-1;)l.splice(r,1),e&&(i>=r&&i--,a>=r&&a--)}),this},has:function(t){return t?ie.inArray(t,l)>-1:!(!l||!l.length)},empty:function(){return l=[],i=0,this},disable:function(){return l=u=n=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,n||f.disable(),this},locked:function(){return!u},fireWith:function(t,n){return!l||r&&!u||(n=n||[],n=[t,n.slice?n.slice():n],e?u.push(n):c(n)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!r}};return f},ie.extend({Deferred:function(t){var e=[["resolve","done",ie.Callbacks("once memory"),"resolved"],["reject","fail",ie.Callbacks("once memory"),"rejected"],["notify","progress",ie.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var t=arguments;return ie.Deferred(function(n){ie.each(e,function(e,o){var a=ie.isFunction(t[e])&&t[e];i[o[1]](function(){var t=a&&a.apply(this,arguments);t&&ie.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?ie.extend(t,r):r}},i={};return r.pipe=r.then,ie.each(e,function(t,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},e[1^t][2].disable,e[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),t&&t.call(i,i),i},when:function(t){var e,n,r,i=0,o=Q.call(arguments),a=o.length,s=1!==a||t&&ie.isFunction(t.promise)?a:0,l=1===s?t:ie.Deferred(),u=function(t,n,r){return function(i){n[t]=this,r[t]=arguments.length>1?Q.call(arguments):i,r===e?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(e=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&ie.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,e)):--s;return s||l.resolveWith(r,o),l.promise()}});var we;ie.fn.ready=function(t){return ie.ready.promise().done(t),this},ie.extend({isReady:!1,readyWait:1,holdReady:function(t){t?ie.readyWait++:ie.ready(!0)},ready:function(t){if(t===!0?!--ie.readyWait:!ie.isReady){if(!pe.body)return setTimeout(ie.ready);ie.isReady=!0,t!==!0&&--ie.readyWait>0||(we.resolveWith(pe,[ie]),ie.fn.triggerHandler&&(ie(pe).triggerHandler("ready"),ie(pe).off("ready")))}}}),ie.ready.promise=function(e){if(!we)if(we=ie.Deferred(),"complete"===pe.readyState)setTimeout(ie.ready);else if(pe.addEventListener)pe.addEventListener("DOMContentLoaded",s,!1),t.addEventListener("load",s,!1);else{pe.attachEvent("onreadystatechange",s),t.attachEvent("onload",s);var n=!1;try{n=null==t.frameElement&&pe.documentElement}catch(r){}n&&n.doScroll&&!function i(){if(!ie.isReady){try{n.doScroll("left")}catch(t){return setTimeout(i,50)}a(),ie.ready()}}()}return we.promise(e)};var xe,Ce="undefined";for(xe in ie(ne))break;ne.ownLast="0"!==xe,ne.inlineBlockNeedsLayout=!1,ie(function(){var t,e,n,r;n=pe.getElementsByTagName("body")[0],n&&n.style&&(e=pe.createElement("div"),r=pe.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(e),typeof e.style.zoom!==Ce&&(e.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",ne.inlineBlockNeedsLayout=t=3===e.offsetWidth,t&&(n.style.zoom=1)),n.removeChild(r))}),function(){var t=pe.createElement("div");if(null==ne.deleteExpando){ne.deleteExpando=!0;try{delete t.test}catch(e){ne.deleteExpando=!1}}t=null}(),ie.acceptData=function(t){var e=ie.noData[(t.nodeName+" ").toLowerCase()],n=+t.nodeType||1;return 1!==n&&9!==n?!1:!e||e!==!0&&t.getAttribute("classid")===e};var Te=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ke=/([A-Z])/g;ie.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(t){return t=t.nodeType?ie.cache[t[ie.expando]]:t[ie.expando],!!t&&!u(t)},data:function(t,e,n){return c(t,e,n)},removeData:function(t,e){return f(t,e)},_data:function(t,e,n){return c(t,e,n,!0)},_removeData:function(t,e){return f(t,e,!0)}}),ie.fn.extend({data:function(t,e){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===t){if(this.length&&(i=ie.data(o),1===o.nodeType&&!ie._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=ie.camelCase(r.slice(5)),l(o,r,i[r])));ie._data(o,"parsedAttrs",!0)}return i}return"object"==typeof t?this.each(function(){ie.data(this,t)}):arguments.length>1?this.each(function(){ie.data(this,t,e)}):o?l(o,t,ie.data(o,t)):void 0},removeData:function(t){return this.each(function(){ie.removeData(this,t)})}}),ie.extend({queue:function(t,e,n){var r;return t?(e=(e||"fx")+"queue",r=ie._data(t,e),n&&(!r||ie.isArray(n)?r=ie._data(t,e,ie.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=ie.queue(t,e),r=n.length,i=n.shift(),o=ie._queueHooks(t,e),a=function(){ie.dequeue(t,e)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===e&&n.unshift("inprogress"),delete o.stop,i.call(t,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return ie._data(t,n)||ie._data(t,n,{empty:ie.Callbacks("once memory").add(function(){ie._removeData(t,e+"queue"),ie._removeData(t,n)})})}}),ie.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?ie.queue(this[0],t):void 0===e?this:this.each(function(){var n=ie.queue(this,t,e);ie._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&ie.dequeue(this,t)})},dequeue:function(t){return this.each(function(){ie.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,r=1,i=ie.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)n=ie._data(o[a],t+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(e)}});var Se=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ee=["Top","Right","Bottom","Left"],_e=function(t,e){return t=e||t,"none"===ie.css(t,"display")||!ie.contains(t.ownerDocument,t)},Ae=ie.access=function(t,e,n,r,i,o,a){var s=0,l=t.length,u=null==n;if("object"===ie.type(n)){i=!0;for(s in n)ie.access(t,e,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,ie.isFunction(r)||(a=!0),u&&(a?(e.call(t,r),e=null):(u=e,e=function(t,e,n){return u.call(ie(t),n)})),e))for(;l>s;s++)e(t[s],n,a?r:r.call(t[s],s,e(t[s],n)));return i?t:u?e.call(t):l?e(t[0],n):o},Ne=/^(?:checkbox|radio)$/i;!function(){var t=pe.createElement("input"),e=pe.createElement("div"),n=pe.createDocumentFragment();if(e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",ne.leadingWhitespace=3===e.firstChild.nodeType,ne.tbody=!e.getElementsByTagName("tbody").length,ne.htmlSerialize=!!e.getElementsByTagName("link").length,ne.html5Clone="<:nav></:nav>"!==pe.createElement("nav").cloneNode(!0).outerHTML,t.type="checkbox",t.checked=!0,n.appendChild(t),ne.appendChecked=t.checked,e.innerHTML="<textarea>x</textarea>",ne.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,n.appendChild(e),e.innerHTML="<input type='radio' checked='checked' name='t'/>",ne.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,ne.noCloneEvent=!0,e.attachEvent&&(e.attachEvent("onclick",function(){ne.noCloneEvent=!1}),e.cloneNode(!0).click()),null==ne.deleteExpando){ne.deleteExpando=!0;try{delete e.test}catch(r){ne.deleteExpando=!1}}}(),function(){var e,n,r=pe.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})n="on"+e,(ne[e+"Bubbles"]=n in t)||(r.setAttribute(n,"t"),ne[e+"Bubbles"]=r.attributes[n].expando===!1);r=null}();var De=/^(?:input|select|textarea)$/i,je=/^key/,Oe=/^(?:mouse|pointer|contextmenu)|click/,Me=/^(?:focusinfocus|focusoutblur)$/,Le=/^([^.]*)(?:\.(.+)|)$/;ie.event={global:{},add:function(t,e,n,r,i){var o,a,s,l,u,c,f,d,h,p,g,v=ie._data(t);if(v){for(n.handler&&(l=n,n=l.handler,i=l.selector),n.guid||(n.guid=ie.guid++),(a=v.events)||(a=v.events={}),(c=v.handle)||(c=v.handle=function(t){return typeof ie===Ce||t&&ie.event.triggered===t.type?void 0:ie.event.dispatch.apply(c.elem,arguments)},c.elem=t),e=(e||"").match($e)||[""],s=e.length;s--;)o=Le.exec(e[s])||[],h=g=o[1],p=(o[2]||"").split(".").sort(),h&&(u=ie.event.special[h]||{},h=(i?u.delegateType:u.bindType)||h,u=ie.event.special[h]||{},f=ie.extend({type:h,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ie.expr.match.needsContext.test(i),namespace:p.join(".")},l),(d=a[h])||(d=a[h]=[],d.delegateCount=0,u.setup&&u.setup.call(t,r,p,c)!==!1||(t.addEventListener?t.addEventListener(h,c,!1):t.attachEvent&&t.attachEvent("on"+h,c))),u.add&&(u.add.call(t,f),f.handler.guid||(f.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,f):d.push(f),ie.event.global[h]=!0);t=null}},remove:function(t,e,n,r,i){var o,a,s,l,u,c,f,d,h,p,g,v=ie.hasData(t)&&ie._data(t);if(v&&(c=v.events)){for(e=(e||"").match($e)||[""],u=e.length;u--;)if(s=Le.exec(e[u])||[],h=g=s[1],p=(s[2]||"").split(".").sort(),h){for(f=ie.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,d=c[h]||[],s=s[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=d.length;o--;)a=d[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(d.splice(o,1),a.selector&&d.delegateCount--,f.remove&&f.remove.call(t,a));l&&!d.length&&(f.teardown&&f.teardown.call(t,p,v.handle)!==!1||ie.removeEvent(t,h,v.handle),delete c[h])}else for(h in c)ie.event.remove(t,h+e[u],n,r,!0);ie.isEmptyObject(c)&&(delete v.handle,ie._removeData(t,"events"))}},trigger:function(e,n,r,i){var o,a,s,l,u,c,f,d=[r||pe],h=ee.call(e,"type")?e.type:e,p=ee.call(e,"namespace")?e.namespace.split("."):[];if(s=c=r=r||pe,3!==r.nodeType&&8!==r.nodeType&&!Me.test(h+ie.event.triggered)&&(h.indexOf(".")>=0&&(p=h.split("."),h=p.shift(),p.sort()),a=h.indexOf(":")<0&&"on"+h,e=e[ie.expando]?e:new ie.Event(h,"object"==typeof e&&e),e.isTrigger=i?2:3,e.namespace=p.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),n=null==n?[e]:ie.makeArray(n,[e]),u=ie.event.special[h]||{},i||!u.trigger||u.trigger.apply(r,n)!==!1)){if(!i&&!u.noBubble&&!ie.isWindow(r)){for(l=u.delegateType||h,Me.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),c=s;
c===(r.ownerDocument||pe)&&d.push(c.defaultView||c.parentWindow||t)}for(f=0;(s=d[f++])&&!e.isPropagationStopped();)e.type=f>1?l:u.bindType||h,o=(ie._data(s,"events")||{})[e.type]&&ie._data(s,"handle"),o&&o.apply(s,n),o=a&&s[a],o&&o.apply&&ie.acceptData(s)&&(e.result=o.apply(s,n),e.result===!1&&e.preventDefault());if(e.type=h,!i&&!e.isDefaultPrevented()&&(!u._default||u._default.apply(d.pop(),n)===!1)&&ie.acceptData(r)&&a&&r[h]&&!ie.isWindow(r)){c=r[a],c&&(r[a]=null),ie.event.triggered=h;try{r[h]()}catch(g){}ie.event.triggered=void 0,c&&(r[a]=c)}return e.result}},dispatch:function(t){t=ie.event.fix(t);var e,n,r,i,o,a=[],s=Q.call(arguments),l=(ie._data(this,"events")||{})[t.type]||[],u=ie.event.special[t.type]||{};if(s[0]=t,t.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,t)!==!1){for(a=ie.event.handlers.call(this,t,l),e=0;(i=a[e++])&&!t.isPropagationStopped();)for(t.currentTarget=i.elem,o=0;(r=i.handlers[o++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(r.namespace))&&(t.handleObj=r,t.data=r.data,n=((ie.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,s),void 0!==n&&(t.result=n)===!1&&(t.preventDefault(),t.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,r,i,o,a=[],s=e.delegateCount,l=t.target;if(s&&l.nodeType&&(!t.button||"click"!==t.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==t.type)){for(i=[],o=0;s>o;o++)r=e[o],n=r.selector+" ",void 0===i[n]&&(i[n]=r.needsContext?ie(n,this).index(l)>=0:ie.find(n,this,null,[l]).length),i[n]&&i.push(r);i.length&&a.push({elem:l,handlers:i})}return s<e.length&&a.push({elem:this,handlers:e.slice(s)}),a},fix:function(t){if(t[ie.expando])return t;var e,n,r,i=t.type,o=t,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Oe.test(i)?this.mouseHooks:je.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,t=new ie.Event(o),e=r.length;e--;)n=r[e],t[n]=o[n];return t.target||(t.target=o.srcElement||pe),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,a.filter?a.filter(t,o):t},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,r,i,o=e.button,a=e.fromElement;return null==t.pageX&&null!=e.clientX&&(r=t.target.ownerDocument||pe,i=r.documentElement,n=r.body,t.pageX=e.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),t.pageY=e.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!t.relatedTarget&&a&&(t.relatedTarget=a===t.target?e.toElement:a),t.which||void 0===o||(t.which=1&o?1:2&o?3:4&o?2:0),t}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==p()&&this.focus)try{return this.focus(),!1}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){return this===p()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return ie.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(t){return ie.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,n,r){var i=ie.extend(new ie.Event,n,{type:t,isSimulated:!0,originalEvent:{}});r?ie.event.trigger(i,null,e):ie.event.dispatch.call(e,i),i.isDefaultPrevented()&&n.preventDefault()}},ie.removeEvent=pe.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)}:function(t,e,n){var r="on"+e;t.detachEvent&&(typeof t[r]===Ce&&(t[r]=null),t.detachEvent(r,n))},ie.Event=function(t,e){return this instanceof ie.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?d:h):this.type=t,e&&ie.extend(this,e),this.timeStamp=t&&t.timeStamp||ie.now(),void(this[ie.expando]=!0)):new ie.Event(t,e)},ie.Event.prototype={isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=d,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=d,t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=d,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},ie.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){ie.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=this,i=t.relatedTarget,o=t.handleObj;return(!i||i!==r&&!ie.contains(r,i))&&(t.type=o.origType,n=o.handler.apply(this,arguments),t.type=e),n}}}),ne.submitBubbles||(ie.event.special.submit={setup:function(){return ie.nodeName(this,"form")?!1:void ie.event.add(this,"click._submit keypress._submit",function(t){var e=t.target,n=ie.nodeName(e,"input")||ie.nodeName(e,"button")?e.form:void 0;n&&!ie._data(n,"submitBubbles")&&(ie.event.add(n,"submit._submit",function(t){t._submit_bubble=!0}),ie._data(n,"submitBubbles",!0))})},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&ie.event.simulate("submit",this.parentNode,t,!0))},teardown:function(){return ie.nodeName(this,"form")?!1:void ie.event.remove(this,"._submit")}}),ne.changeBubbles||(ie.event.special.change={setup:function(){return De.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ie.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)}),ie.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),ie.event.simulate("change",this,t,!0)})),!1):void ie.event.add(this,"beforeactivate._change",function(t){var e=t.target;De.test(e.nodeName)&&!ie._data(e,"changeBubbles")&&(ie.event.add(e,"change._change",function(t){!this.parentNode||t.isSimulated||t.isTrigger||ie.event.simulate("change",this.parentNode,t,!0)}),ie._data(e,"changeBubbles",!0))})},handle:function(t){var e=t.target;return this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type?t.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ie.event.remove(this,"._change"),!De.test(this.nodeName)}}),ne.focusinBubbles||ie.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){ie.event.simulate(e,t.target,ie.event.fix(t),!0)};ie.event.special[e]={setup:function(){var r=this.ownerDocument||this,i=ie._data(r,e);i||r.addEventListener(t,n,!0),ie._data(r,e,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=ie._data(r,e)-1;i?ie._data(r,e,i):(r.removeEventListener(t,n,!0),ie._removeData(r,e))}}}),ie.fn.extend({on:function(t,e,n,r,i){var o,a;if("object"==typeof t){"string"!=typeof e&&(n=n||e,e=void 0);for(o in t)this.on(o,e,n,t[o],i);return this}if(null==n&&null==r?(r=e,n=e=void 0):null==r&&("string"==typeof e?(r=n,n=void 0):(r=n,n=e,e=void 0)),r===!1)r=h;else if(!r)return this;return 1===i&&(a=r,r=function(t){return ie().off(t),a.apply(this,arguments)},r.guid=a.guid||(a.guid=ie.guid++)),this.each(function(){ie.event.add(this,t,r,n,e)})},one:function(t,e,n,r){return this.on(t,e,n,r,1)},off:function(t,e,n){var r,i;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,ie(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(i in t)this.off(i,e,t[i]);return this}return(e===!1||"function"==typeof e)&&(n=e,e=void 0),n===!1&&(n=h),this.each(function(){ie.event.remove(this,t,n,e)})},trigger:function(t,e){return this.each(function(){ie.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];return n?ie.event.trigger(t,e,n,!0):void 0}});var He="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Fe=/ jQuery\d+="(?:null|\d+)"/g,Pe=new RegExp("<(?:"+He+")[\\s/>]","i"),Re=/^\s+/,qe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ie=/<([\w:]+)/,Be=/<tbody/i,We=/<|&#?\w+;/,ze=/<(?:script|style|link)/i,Ue=/checked\s*(?:[^=]|=\s*.checked.)/i,Ve=/^$|\/(?:java|ecma)script/i,Xe=/^true\/(.*)/,Ye=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Qe={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ne.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ge=g(pe),Je=Ge.appendChild(pe.createElement("div"));Qe.optgroup=Qe.option,Qe.tbody=Qe.tfoot=Qe.colgroup=Qe.caption=Qe.thead,Qe.th=Qe.td,ie.extend({clone:function(t,e,n){var r,i,o,a,s,l=ie.contains(t.ownerDocument,t);if(ne.html5Clone||ie.isXMLDoc(t)||!Pe.test("<"+t.nodeName+">")?o=t.cloneNode(!0):(Je.innerHTML=t.outerHTML,Je.removeChild(o=Je.firstChild)),!(ne.noCloneEvent&&ne.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||ie.isXMLDoc(t)))for(r=v(o),s=v(t),a=0;null!=(i=s[a]);++a)r[a]&&C(i,r[a]);if(e)if(n)for(s=s||v(t),r=r||v(o),a=0;null!=(i=s[a]);a++)x(i,r[a]);else x(t,o);return r=v(o,"script"),r.length>0&&w(r,!l&&v(t,"script")),r=s=i=null,o},buildFragment:function(t,e,n,r){for(var i,o,a,s,l,u,c,f=t.length,d=g(e),h=[],p=0;f>p;p++)if(o=t[p],o||0===o)if("object"===ie.type(o))ie.merge(h,o.nodeType?[o]:o);else if(We.test(o)){for(s=s||d.appendChild(e.createElement("div")),l=(Ie.exec(o)||["",""])[1].toLowerCase(),c=Qe[l]||Qe._default,s.innerHTML=c[1]+o.replace(qe,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!ne.leadingWhitespace&&Re.test(o)&&h.push(e.createTextNode(Re.exec(o)[0])),!ne.tbody)for(o="table"!==l||Be.test(o)?"<table>"!==c[1]||Be.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)ie.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(ie.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(e.createTextNode(o));for(s&&d.removeChild(s),ne.appendChecked||ie.grep(v(h,"input"),m),p=0;o=h[p++];)if((!r||-1===ie.inArray(o,r))&&(a=ie.contains(o.ownerDocument,o),s=v(d.appendChild(o),"script"),a&&w(s),n))for(i=0;o=s[i++];)Ve.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(t,e){for(var n,r,i,o,a=0,s=ie.expando,l=ie.cache,u=ne.deleteExpando,c=ie.event.special;null!=(n=t[a]);a++)if((e||ie.acceptData(n))&&(i=n[s],o=i&&l[i])){if(o.events)for(r in o.events)c[r]?ie.event.remove(n,r):ie.removeEvent(n,r,o.handle);l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==Ce?n.removeAttribute(s):n[s]=null,Y.push(i))}}}),ie.fn.extend({text:function(t){return Ae(this,function(t){return void 0===t?ie.text(this):this.empty().append((this[0]&&this[0].ownerDocument||pe).createTextNode(t))},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=y(this,t);e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=y(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var n,r=t?ie.filter(t,this):this,i=0;null!=(n=r[i]);i++)e||1!==n.nodeType||ie.cleanData(v(n)),n.parentNode&&(e&&ie.contains(n.ownerDocument,n)&&w(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&ie.cleanData(v(t,!1));t.firstChild;)t.removeChild(t.firstChild);t.options&&ie.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return ie.clone(this,t,e)})},html:function(t){return Ae(this,function(t){var e=this[0]||{},n=0,r=this.length;if(void 0===t)return 1===e.nodeType?e.innerHTML.replace(Fe,""):void 0;if(!("string"!=typeof t||ze.test(t)||!ne.htmlSerialize&&Pe.test(t)||!ne.leadingWhitespace&&Re.test(t)||Qe[(Ie.exec(t)||["",""])[1].toLowerCase()])){t=t.replace(qe,"<$1></$2>");try{for(;r>n;n++)e=this[n]||{},1===e.nodeType&&(ie.cleanData(v(e,!1)),e.innerHTML=t);e=0}catch(i){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(e){t=this.parentNode,ie.cleanData(v(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e){t=G.apply([],t);var n,r,i,o,a,s,l=0,u=this.length,c=this,f=u-1,d=t[0],h=ie.isFunction(d);if(h||u>1&&"string"==typeof d&&!ne.checkClone&&Ue.test(d))return this.each(function(n){var r=c.eq(n);h&&(t[0]=d.call(this,n,r.html())),r.domManip(t,e)});if(u&&(s=ie.buildFragment(t,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(o=ie.map(v(s,"script"),$),i=o.length;u>l;l++)r=s,l!==f&&(r=ie.clone(r,!0,!0),i&&ie.merge(o,v(r,"script"))),e.call(this[l],r,l);if(i)for(a=o[o.length-1].ownerDocument,ie.map(o,b),l=0;i>l;l++)r=o[l],Ve.test(r.type||"")&&!ie._data(r,"globalEval")&&ie.contains(a,r)&&(r.src?ie._evalUrl&&ie._evalUrl(r.src):ie.globalEval((r.text||r.textContent||r.innerHTML||"").replace(Ye,"")));s=n=null}return this}}),ie.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){ie.fn[t]=function(t){for(var n,r=0,i=[],o=ie(t),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),ie(o[r])[e](n),J.apply(i,n.get());return this.pushStack(i)}});var Ke,Ze={};!function(){var t;ne.shrinkWrapBlocks=function(){if(null!=t)return t;t=!1;var e,n,r;return n=pe.getElementsByTagName("body")[0],n&&n.style?(e=pe.createElement("div"),r=pe.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(e),typeof e.style.zoom!==Ce&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(pe.createElement("div")).style.width="5px",t=3!==e.offsetWidth),n.removeChild(r),t):void 0}}();var tn,en,nn=/^margin/,rn=new RegExp("^("+Se+")(?!px)[a-z%]+$","i"),on=/^(top|right|bottom|left)$/;t.getComputedStyle?(tn=function(t){return t.ownerDocument.defaultView.getComputedStyle(t,null)},en=function(t,e,n){var r,i,o,a,s=t.style;return n=n||tn(t),a=n?n.getPropertyValue(e)||n[e]:void 0,n&&(""!==a||ie.contains(t.ownerDocument,t)||(a=ie.style(t,e)),rn.test(a)&&nn.test(e)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""}):pe.documentElement.currentStyle&&(tn=function(t){return t.currentStyle},en=function(t,e,n){var r,i,o,a,s=t.style;return n=n||tn(t),a=n?n[e]:void 0,null==a&&s&&s[e]&&(a=s[e]),rn.test(a)&&!on.test(e)&&(r=s.left,i=t.runtimeStyle,o=i&&i.left,o&&(i.left=t.currentStyle.left),s.left="fontSize"===e?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"}),!function(){function e(){var e,n,r,i;n=pe.getElementsByTagName("body")[0],n&&n.style&&(e=pe.createElement("div"),r=pe.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",o=a=!1,l=!0,t.getComputedStyle&&(o="1%"!==(t.getComputedStyle(e,null)||{}).top,a="4px"===(t.getComputedStyle(e,null)||{width:"4px"}).width,i=e.appendChild(pe.createElement("div")),i.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",e.style.width="1px",l=!parseFloat((t.getComputedStyle(i,null)||{}).marginRight)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=e.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===i[0].offsetHeight,s&&(i[0].style.display="",i[1].style.display="none",s=0===i[0].offsetHeight),n.removeChild(r))}var n,r,i,o,a,s,l;n=pe.createElement("div"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=n.getElementsByTagName("a")[0],(r=i&&i.style)&&(r.cssText="float:left;opacity:.5",ne.opacity="0.5"===r.opacity,ne.cssFloat=!!r.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",ne.clearCloneStyle="content-box"===n.style.backgroundClip,ne.boxSizing=""===r.boxSizing||""===r.MozBoxSizing||""===r.WebkitBoxSizing,ie.extend(ne,{reliableHiddenOffsets:function(){return null==s&&e(),s},boxSizingReliable:function(){return null==a&&e(),a},pixelPosition:function(){return null==o&&e(),o},reliableMarginRight:function(){return null==l&&e(),l}}))}(),ie.swap=function(t,e,n,r){var i,o,a={};for(o in e)a[o]=t.style[o],t.style[o]=e[o];i=n.apply(t,r||[]);for(o in e)t.style[o]=a[o];return i};var an=/alpha\([^)]*\)/i,sn=/opacity\s*=\s*([^)]*)/,ln=/^(none|table(?!-c[ea]).+)/,un=new RegExp("^("+Se+")(.*)$","i"),cn=new RegExp("^([+-])=("+Se+")","i"),fn={position:"absolute",visibility:"hidden",display:"block"},dn={letterSpacing:"0",fontWeight:"400"},hn=["Webkit","O","Moz","ms"];ie.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=en(t,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ne.cssFloat?"cssFloat":"styleFloat"},style:function(t,e,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var i,o,a,s=ie.camelCase(e),l=t.style;if(e=ie.cssProps[s]||(ie.cssProps[s]=E(l,s)),a=ie.cssHooks[e]||ie.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(t,!1,r))?i:l[e];if(o=typeof n,"string"===o&&(i=cn.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(ie.css(t,e)),o="number"),null!=n&&n===n&&("number"!==o||ie.cssNumber[s]||(n+="px"),ne.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(t,n,r)))))try{l[e]=n}catch(u){}}},css:function(t,e,n,r){var i,o,a,s=ie.camelCase(e);return e=ie.cssProps[s]||(ie.cssProps[s]=E(t.style,s)),a=ie.cssHooks[e]||ie.cssHooks[s],a&&"get"in a&&(o=a.get(t,!0,n)),void 0===o&&(o=en(t,e,r)),"normal"===o&&e in dn&&(o=dn[e]),""===n||n?(i=parseFloat(o),n===!0||ie.isNumeric(i)?i||0:o):o}}),ie.each(["height","width"],function(t,e){ie.cssHooks[e]={get:function(t,n,r){return n?ln.test(ie.css(t,"display"))&&0===t.offsetWidth?ie.swap(t,fn,function(){return D(t,e,r)}):D(t,e,r):void 0},set:function(t,n,r){var i=r&&tn(t);return A(t,n,r?N(t,e,r,ne.boxSizing&&"border-box"===ie.css(t,"boxSizing",!1,i),i):0)}}}),ne.opacity||(ie.cssHooks.opacity={get:function(t,e){return sn.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""},set:function(t,e){var n=t.style,r=t.currentStyle,i=ie.isNumeric(e)?"alpha(opacity="+100*e+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(e>=1||""===e)&&""===ie.trim(o.replace(an,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===e||r&&!r.filter)||(n.filter=an.test(o)?o.replace(an,i):o+" "+i)}}),ie.cssHooks.marginRight=S(ne.reliableMarginRight,function(t,e){return e?ie.swap(t,{display:"inline-block"},en,[t,"marginRight"]):void 0}),ie.each({margin:"",padding:"",border:"Width"},function(t,e){ie.cssHooks[t+e]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[t+Ee[r]+e]=o[r]||o[r-2]||o[0];return i}},nn.test(t)||(ie.cssHooks[t+e].set=A)}),ie.fn.extend({css:function(t,e){return Ae(this,function(t,e,n){var r,i,o={},a=0;if(ie.isArray(e)){for(r=tn(t),i=e.length;i>a;a++)o[e[a]]=ie.css(t,e[a],!1,r);return o}return void 0!==n?ie.style(t,e,n):ie.css(t,e)},t,e,arguments.length>1)},show:function(){return _(this,!0)},hide:function(){return _(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){_e(this)?ie(this).show():ie(this).hide()})}}),ie.Tween=j,j.prototype={constructor:j,init:function(t,e,n,r,i,o){this.elem=t,this.prop=n,this.easing=i||"swing",this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ie.cssNumber[n]?"":"px")},cur:function(){var t=j.propHooks[this.prop];return t&&t.get?t.get(this):j.propHooks._default.get(this)},run:function(t){var e,n=j.propHooks[this.prop];return this.pos=e=this.options.duration?ie.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):j.propHooks._default.set(this),this}},j.prototype.init.prototype=j.prototype,j.propHooks={_default:{get:function(t){var e;return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=ie.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){ie.fx.step[t.prop]?ie.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[ie.cssProps[t.prop]]||ie.cssHooks[t.prop])?ie.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},j.propHooks.scrollTop=j.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},ie.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},ie.fx=j.prototype.init,ie.fx.step={};var pn,gn,vn=/^(?:toggle|show|hide)$/,mn=new RegExp("^(?:([+-])=|)("+Se+")([a-z%]*)$","i"),yn=/queueHooks$/,$n=[H],bn={"*":[function(t,e){var n=this.createTween(t,e),r=n.cur(),i=mn.exec(e),o=i&&i[3]||(ie.cssNumber[t]?"":"px"),a=(ie.cssNumber[t]||"px"!==o&&+r)&&mn.exec(ie.css(n.elem,t)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,ie.style(n.elem,t,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};ie.Animation=ie.extend(P,{tweener:function(t,e){ie.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");for(var n,r=0,i=t.length;i>r;r++)n=t[r],bn[n]=bn[n]||[],bn[n].unshift(e)},prefilter:function(t,e){e?$n.unshift(t):$n.push(t)}}),ie.speed=function(t,e,n){var r=t&&"object"==typeof t?ie.extend({},t):{complete:n||!n&&e||ie.isFunction(t)&&t,duration:t,easing:n&&e||e&&!ie.isFunction(e)&&e};return r.duration=ie.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ie.fx.speeds?ie.fx.speeds[r.duration]:ie.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){ie.isFunction(r.old)&&r.old.call(this),r.queue&&ie.dequeue(this,r.queue)},r},ie.fn.extend({fadeTo:function(t,e,n,r){return this.filter(_e).css("opacity",0).show().end().animate({opacity:e},t,n,r)},animate:function(t,e,n,r){var i=ie.isEmptyObject(t),o=ie.speed(e,n,r),a=function(){var e=P(this,ie.extend({},t),o);(i||ie._data(this,"finish"))&&e.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(t,e,n){var r=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,i=null!=t&&t+"queueHooks",o=ie.timers,a=ie._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&yn.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=t&&o[i].queue!==t||(o[i].anim.stop(n),e=!1,o.splice(i,1));(e||!n)&&ie.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=ie._data(this),r=n[t+"queue"],i=n[t+"queueHooks"],o=ie.timers,a=r?r.length:0;for(n.finish=!0,ie.queue(this,t,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;a>e;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish})}}),ie.each(["toggle","show","hide"],function(t,e){var n=ie.fn[e];ie.fn[e]=function(t,r,i){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(M(e,!0),t,r,i)}}),ie.each({slideDown:M("show"),slideUp:M("hide"),slideToggle:M("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){ie.fn[t]=function(t,n,r){return this.animate(e,t,n,r)}}),ie.timers=[],ie.fx.tick=function(){var t,e=ie.timers,n=0;for(pn=ie.now();n<e.length;n++)t=e[n],t()||e[n]!==t||e.splice(n--,1);e.length||ie.fx.stop(),pn=void 0},ie.fx.timer=function(t){ie.timers.push(t),t()?ie.fx.start():ie.timers.pop()},ie.fx.interval=13,ie.fx.start=function(){gn||(gn=setInterval(ie.fx.tick,ie.fx.interval))},ie.fx.stop=function(){clearInterval(gn),gn=null},ie.fx.speeds={slow:600,fast:200,_default:400},ie.fn.delay=function(t,e){return t=ie.fx?ie.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var r=setTimeout(e,t);n.stop=function(){clearTimeout(r)}})},function(){var t,e,n,r,i;e=pe.createElement("div"),e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=e.getElementsByTagName("a")[0],n=pe.createElement("select"),i=n.appendChild(pe.createElement("option")),t=e.getElementsByTagName("input")[0],r.style.cssText="top:1px",ne.getSetAttribute="t"!==e.className,ne.style=/top/.test(r.getAttribute("style")),ne.hrefNormalized="/a"===r.getAttribute("href"),ne.checkOn=!!t.value,ne.optSelected=i.selected,ne.enctype=!!pe.createElement("form").enctype,n.disabled=!0,ne.optDisabled=!i.disabled,t=pe.createElement("input"),t.setAttribute("value",""),ne.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),ne.radioValue="t"===t.value}();var wn=/\r/g;ie.fn.extend({val:function(t){var e,n,r,i=this[0];return arguments.length?(r=ie.isFunction(t),this.each(function(n){var i;1===this.nodeType&&(i=r?t.call(this,n,ie(this).val()):t,null==i?i="":"number"==typeof i?i+="":ie.isArray(i)&&(i=ie.map(i,function(t){return null==t?"":t+""})),e=ie.valHooks[this.type]||ie.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,i,"value")||(this.value=i))})):i?(e=ie.valHooks[i.type]||ie.valHooks[i.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(wn,""):null==n?"":n)):void 0}}),ie.extend({valHooks:{option:{get:function(t){var e=ie.find.attr(t,"value");return null!=e?e:ie.trim(ie.text(t))}},select:{get:function(t){for(var e,n,r=t.options,i=t.selectedIndex,o="select-one"===t.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(ne.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ie.nodeName(n.parentNode,"optgroup"))){if(e=ie(n).val(),o)return e;a.push(e)}return a},set:function(t,e){for(var n,r,i=t.options,o=ie.makeArray(e),a=i.length;a--;)if(r=i[a],ie.inArray(ie.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(s){r.scrollHeight}else r.selected=!1;return n||(t.selectedIndex=-1),i}}}}),ie.each(["radio","checkbox"],function(){ie.valHooks[this]={set:function(t,e){return ie.isArray(e)?t.checked=ie.inArray(ie(t).val(),e)>=0:void 0}},ne.checkOn||(ie.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var xn,Cn,Tn=ie.expr.attrHandle,kn=/^(?:checked|selected)$/i,Sn=ne.getSetAttribute,En=ne.input;ie.fn.extend({attr:function(t,e){return Ae(this,ie.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){ie.removeAttr(this,t)})}}),ie.extend({attr:function(t,e,n){var r,i,o=t.nodeType;return t&&3!==o&&8!==o&&2!==o?typeof t.getAttribute===Ce?ie.prop(t,e,n):(1===o&&ie.isXMLDoc(t)||(e=e.toLowerCase(),r=ie.attrHooks[e]||(ie.expr.match.bool.test(e)?Cn:xn)),void 0===n?r&&"get"in r&&null!==(i=r.get(t,e))?i:(i=ie.find.attr(t,e),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(t,n,e))?i:(t.setAttribute(e,n+""),n):void ie.removeAttr(t,e)):void 0},removeAttr:function(t,e){var n,r,i=0,o=e&&e.match($e);if(o&&1===t.nodeType)for(;n=o[i++];)r=ie.propFix[n]||n,ie.expr.match.bool.test(n)?En&&Sn||!kn.test(n)?t[r]=!1:t[ie.camelCase("default-"+n)]=t[r]=!1:ie.attr(t,n,""),t.removeAttribute(Sn?n:r)},attrHooks:{type:{set:function(t,e){if(!ne.radioValue&&"radio"===e&&ie.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}}}),Cn={set:function(t,e,n){return e===!1?ie.removeAttr(t,n):En&&Sn||!kn.test(n)?t.setAttribute(!Sn&&ie.propFix[n]||n,n):t[ie.camelCase("default-"+n)]=t[n]=!0,n}},ie.each(ie.expr.match.bool.source.match(/\w+/g),function(t,e){var n=Tn[e]||ie.find.attr;Tn[e]=En&&Sn||!kn.test(e)?function(t,e,r){var i,o;return r||(o=Tn[e],Tn[e]=i,i=null!=n(t,e,r)?e.toLowerCase():null,Tn[e]=o),i}:function(t,e,n){return n?void 0:t[ie.camelCase("default-"+e)]?e.toLowerCase():null}}),En&&Sn||(ie.attrHooks.value={set:function(t,e,n){return ie.nodeName(t,"input")?void(t.defaultValue=e):xn&&xn.set(t,e,n)}}),Sn||(xn={set:function(t,e,n){var r=t.getAttributeNode(n);return r||t.setAttributeNode(r=t.ownerDocument.createAttribute(n)),r.value=e+="","value"===n||e===t.getAttribute(n)?e:void 0}},Tn.id=Tn.name=Tn.coords=function(t,e,n){var r;return n?void 0:(r=t.getAttributeNode(e))&&""!==r.value?r.value:null},ie.valHooks.button={get:function(t,e){var n=t.getAttributeNode(e);return n&&n.specified?n.value:void 0},set:xn.set},ie.attrHooks.contenteditable={set:function(t,e,n){xn.set(t,""===e?!1:e,n)}},ie.each(["width","height"],function(t,e){ie.attrHooks[e]={set:function(t,n){return""===n?(t.setAttribute(e,"auto"),n):void 0}}})),ne.style||(ie.attrHooks.style={get:function(t){return t.style.cssText||void 0},set:function(t,e){return t.style.cssText=e+""}});var _n=/^(?:input|select|textarea|button|object)$/i,An=/^(?:a|area)$/i;ie.fn.extend({prop:function(t,e){return Ae(this,ie.prop,t,e,arguments.length>1)},removeProp:function(t){return t=ie.propFix[t]||t,this.each(function(){try{this[t]=void 0,delete this[t]}catch(e){}})}}),ie.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(t,e,n){var r,i,o,a=t.nodeType;return t&&3!==a&&8!==a&&2!==a?(o=1!==a||!ie.isXMLDoc(t),o&&(e=ie.propFix[e]||e,i=ie.propHooks[e]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:t[e]=n:i&&"get"in i&&null!==(r=i.get(t,e))?r:t[e]):void 0},propHooks:{tabIndex:{get:function(t){var e=ie.find.attr(t,"tabindex");return e?parseInt(e,10):_n.test(t.nodeName)||An.test(t.nodeName)&&t.href?0:-1}}}}),ne.hrefNormalized||ie.each(["href","src"],function(t,e){ie.propHooks[e]={get:function(t){return t.getAttribute(e,4)}}}),ne.optSelected||(ie.propHooks.selected={get:function(t){var e=t.parentNode;return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}}),ie.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ie.propFix[this.toLowerCase()]=this}),ne.enctype||(ie.propFix.enctype="encoding");var Nn=/[\t\r\n\f]/g;ie.fn.extend({addClass:function(t){var e,n,r,i,o,a,s=0,l=this.length,u="string"==typeof t&&t;if(ie.isFunction(t))return this.each(function(e){ie(this).addClass(t.call(this,e,this.className))});if(u)for(e=(t||"").match($e)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Nn," "):" ")){for(o=0;i=e[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=ie.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(t){var e,n,r,i,o,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof t&&t;
if(ie.isFunction(t))return this.each(function(e){ie(this).removeClass(t.call(this,e,this.className))});if(u)for(e=(t||"").match($e)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Nn," "):"")){for(o=0;i=e[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=t?ie.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):this.each(ie.isFunction(t)?function(n){ie(this).toggleClass(t.call(this,n,this.className,e),e)}:function(){if("string"===n)for(var e,r=0,i=ie(this),o=t.match($e)||[];e=o[r++];)i.hasClass(e)?i.removeClass(e):i.addClass(e);else(n===Ce||"boolean"===n)&&(this.className&&ie._data(this,"__className__",this.className),this.className=this.className||t===!1?"":ie._data(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Nn," ").indexOf(e)>=0)return!0;return!1}}),ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){ie.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),ie.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}});var Dn=ie.now(),jn=/\?/,On=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;ie.parseJSON=function(e){if(t.JSON&&t.JSON.parse)return t.JSON.parse(e+"");var n,r=null,i=ie.trim(e+"");return i&&!ie.trim(i.replace(On,function(t,e,i,o){return n&&e&&(r=0),0===r?t:(n=i||e,r+=!o-!i,"")}))?Function("return "+i)():ie.error("Invalid JSON: "+e)},ie.parseXML=function(e){var n,r;if(!e||"string"!=typeof e)return null;try{t.DOMParser?(r=new DOMParser,n=r.parseFromString(e,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(e))}catch(i){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||ie.error("Invalid XML: "+e),n};var Mn,Ln,Hn=/#.*$/,Fn=/([?&])_=[^&]*/,Pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Rn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qn=/^(?:GET|HEAD)$/,In=/^\/\//,Bn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Wn={},zn={},Un="*/".concat("*");try{Ln=location.href}catch(Vn){Ln=pe.createElement("a"),Ln.href="",Ln=Ln.href}Mn=Bn.exec(Ln.toLowerCase())||[],ie.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ln,type:"GET",isLocal:Rn.test(Mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Un,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ie.parseJSON,"text xml":ie.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?I(I(t,ie.ajaxSettings),e):I(ie.ajaxSettings,t)},ajaxPrefilter:R(Wn),ajaxTransport:R(zn),ajax:function(t,e){function n(t,e,n,r){var i,c,m,y,b,x=e;2!==$&&($=2,s&&clearTimeout(s),u=void 0,a=r||"",w.readyState=t>0?4:0,i=t>=200&&300>t||304===t,n&&(y=B(f,w,n)),y=W(f,y,w,i),i?(f.ifModified&&(b=w.getResponseHeader("Last-Modified"),b&&(ie.lastModified[o]=b),b=w.getResponseHeader("etag"),b&&(ie.etag[o]=b)),204===t||"HEAD"===f.type?x="nocontent":304===t?x="notmodified":(x=y.state,c=y.data,m=y.error,i=!m)):(m=x,(t||!x)&&(x="error",0>t&&(t=0))),w.status=t,w.statusText=(e||x)+"",i?p.resolveWith(d,[c,x,w]):p.rejectWith(d,[w,x,m]),w.statusCode(v),v=void 0,l&&h.trigger(i?"ajaxSuccess":"ajaxError",[w,f,i?c:m]),g.fireWith(d,[w,x]),l&&(h.trigger("ajaxComplete",[w,f]),--ie.active||ie.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{};var r,i,o,a,s,l,u,c,f=ie.ajaxSetup({},e),d=f.context||f,h=f.context&&(d.nodeType||d.jquery)?ie(d):ie.event,p=ie.Deferred(),g=ie.Callbacks("once memory"),v=f.statusCode||{},m={},y={},$=0,b="canceled",w={readyState:0,getResponseHeader:function(t){var e;if(2===$){if(!c)for(c={};e=Pn.exec(a);)c[e[1].toLowerCase()]=e[2];e=c[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===$?a:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return $||(t=y[n]=y[n]||t,m[t]=e),this},overrideMimeType:function(t){return $||(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>$)for(e in t)v[e]=[v[e],t[e]];else w.always(t[w.status]);return this},abort:function(t){var e=t||b;return u&&u.abort(e),n(0,e),this}};if(p.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((t||f.url||Ln)+"").replace(Hn,"").replace(In,Mn[1]+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=ie.trim(f.dataType||"*").toLowerCase().match($e)||[""],null==f.crossDomain&&(r=Bn.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===Mn[1]&&r[2]===Mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(Mn[3]||("http:"===Mn[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=ie.param(f.data,f.traditional)),q(Wn,f,e,w),2===$)return w;l=f.global,l&&0===ie.active++&&ie.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!qn.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(jn.test(o)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=Fn.test(o)?o.replace(Fn,"$1_="+Dn++):o+(jn.test(o)?"&":"?")+"_="+Dn++)),f.ifModified&&(ie.lastModified[o]&&w.setRequestHeader("If-Modified-Since",ie.lastModified[o]),ie.etag[o]&&w.setRequestHeader("If-None-Match",ie.etag[o])),(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Un+"; q=0.01":""):f.accepts["*"]);for(i in f.headers)w.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(f.beforeSend.call(d,w,f)===!1||2===$))return w.abort();b="abort";for(i in{success:1,error:1,complete:1})w[i](f[i]);if(u=q(zn,f,e,w)){w.readyState=1,l&&h.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){w.abort("timeout")},f.timeout));try{$=1,u.send(m,n)}catch(x){if(!(2>$))throw x;n(-1,x)}}else n(-1,"No Transport");return w},getJSON:function(t,e,n){return ie.get(t,e,n,"json")},getScript:function(t,e){return ie.get(t,void 0,e,"script")}}),ie.each(["get","post"],function(t,e){ie[e]=function(t,n,r,i){return ie.isFunction(n)&&(i=i||r,r=n,n=void 0),ie.ajax({url:t,type:e,dataType:i,data:n,success:r})}}),ie.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){ie.fn[e]=function(t){return this.on(e,t)}}),ie._evalUrl=function(t){return ie.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},ie.fn.extend({wrapAll:function(t){if(ie.isFunction(t))return this.each(function(e){ie(this).wrapAll(t.call(this,e))});if(this[0]){var e=ie(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;return t}).append(this)}return this},wrapInner:function(t){return this.each(ie.isFunction(t)?function(e){ie(this).wrapInner(t.call(this,e))}:function(){var e=ie(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=ie.isFunction(t);return this.each(function(n){ie(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){ie.nodeName(this,"body")||ie(this).replaceWith(this.childNodes)}).end()}}),ie.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0||!ne.reliableHiddenOffsets()&&"none"===(t.style&&t.style.display||ie.css(t,"display"))},ie.expr.filters.visible=function(t){return!ie.expr.filters.hidden(t)};var Xn=/%20/g,Yn=/\[\]$/,Qn=/\r?\n/g,Gn=/^(?:submit|button|image|reset|file)$/i,Jn=/^(?:input|select|textarea|keygen)/i;ie.param=function(t,e){var n,r=[],i=function(t,e){e=ie.isFunction(e)?e():null==e?"":e,r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(void 0===e&&(e=ie.ajaxSettings&&ie.ajaxSettings.traditional),ie.isArray(t)||t.jquery&&!ie.isPlainObject(t))ie.each(t,function(){i(this.name,this.value)});else for(n in t)z(n,t[n],e,i);return r.join("&").replace(Xn,"+")},ie.fn.extend({serialize:function(){return ie.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=ie.prop(this,"elements");return t?ie.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!ie(this).is(":disabled")&&Jn.test(this.nodeName)&&!Gn.test(t)&&(this.checked||!Ne.test(t))}).map(function(t,e){var n=ie(this).val();return null==n?null:ie.isArray(n)?ie.map(n,function(t){return{name:e.name,value:t.replace(Qn,"\r\n")}}):{name:e.name,value:n.replace(Qn,"\r\n")}}).get()}}),ie.ajaxSettings.xhr=void 0!==t.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&U()||V()}:U;var Kn=0,Zn={},tr=ie.ajaxSettings.xhr();t.ActiveXObject&&ie(t).on("unload",function(){for(var t in Zn)Zn[t](void 0,!0)}),ne.cors=!!tr&&"withCredentials"in tr,tr=ne.ajax=!!tr,tr&&ie.ajaxTransport(function(t){if(!t.crossDomain||ne.cors){var e;return{send:function(n,r){var i,o=t.xhr(),a=++Kn;if(o.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(i in t.xhrFields)o[i]=t.xhrFields[i];t.mimeType&&o.overrideMimeType&&o.overrideMimeType(t.mimeType),t.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)void 0!==n[i]&&o.setRequestHeader(i,n[i]+"");o.send(t.hasContent&&t.data||null),e=function(n,i){var s,l,u;if(e&&(i||4===o.readyState))if(delete Zn[a],e=void 0,o.onreadystatechange=ie.noop,i)4!==o.readyState&&o.abort();else{u={},s=o.status,"string"==typeof o.responseText&&(u.text=o.responseText);try{l=o.statusText}catch(c){l=""}s||!t.isLocal||t.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&r(s,l,u,o.getAllResponseHeaders())},t.async?4===o.readyState?setTimeout(e):o.onreadystatechange=Zn[a]=e:e()},abort:function(){e&&e(void 0,!0)}}}}),ie.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return ie.globalEval(t),t}}}),ie.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)}),ie.ajaxTransport("script",function(t){if(t.crossDomain){var e,n=pe.head||ie("head")[0]||pe.documentElement;return{send:function(r,i){e=pe.createElement("script"),e.async=!0,t.scriptCharset&&(e.charset=t.scriptCharset),e.src=t.url,e.onload=e.onreadystatechange=function(t,n){(n||!e.readyState||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),e=null,n||i(200,"success"))},n.insertBefore(e,n.firstChild)},abort:function(){e&&e.onload(void 0,!0)}}}});var er=[],nr=/(=)\?(?=&|$)|\?\?/;ie.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=er.pop()||ie.expando+"_"+Dn++;return this[t]=!0,t}}),ie.ajaxPrefilter("json jsonp",function(e,n,r){var i,o,a,s=e.jsonp!==!1&&(nr.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&nr.test(e.data)&&"data");return s||"jsonp"===e.dataTypes[0]?(i=e.jsonpCallback=ie.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(nr,"$1"+i):e.jsonp!==!1&&(e.url+=(jn.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return a||ie.error(i+" was not called"),a[0]},e.dataTypes[0]="json",o=t[i],t[i]=function(){a=arguments},r.always(function(){t[i]=o,e[i]&&(e.jsonpCallback=n.jsonpCallback,er.push(i)),a&&ie.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),ie.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null;"boolean"==typeof e&&(n=e,e=!1),e=e||pe;var r=fe.exec(t),i=!n&&[];return r?[e.createElement(r[1])]:(r=ie.buildFragment([t],e,i),i&&i.length&&ie(i).remove(),ie.merge([],r.childNodes))};var rr=ie.fn.load;ie.fn.load=function(t,e,n){if("string"!=typeof t&&rr)return rr.apply(this,arguments);var r,i,o,a=this,s=t.indexOf(" ");return s>=0&&(r=ie.trim(t.slice(s,t.length)),t=t.slice(0,s)),ie.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),a.length>0&&ie.ajax({url:t,type:o,dataType:"html",data:e}).done(function(t){i=arguments,a.html(r?ie("<div>").append(ie.parseHTML(t)).find(r):t)}).complete(n&&function(t,e){a.each(n,i||[t.responseText,e,t])}),this},ie.expr.filters.animated=function(t){return ie.grep(ie.timers,function(e){return t===e.elem}).length};var ir=t.document.documentElement;ie.offset={setOffset:function(t,e,n){var r,i,o,a,s,l,u,c=ie.css(t,"position"),f=ie(t),d={};"static"===c&&(t.style.position="relative"),s=f.offset(),o=ie.css(t,"top"),l=ie.css(t,"left"),u=("absolute"===c||"fixed"===c)&&ie.inArray("auto",[o,l])>-1,u?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),ie.isFunction(e)&&(e=e.call(t,n,s)),null!=e.top&&(d.top=e.top-s.top+a),null!=e.left&&(d.left=e.left-s.left+i),"using"in e?e.using.call(t,d):f.css(d)}},ie.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ie.offset.setOffset(this,t,e)});var e,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(e=o.documentElement,ie.contains(e,i)?(typeof i.getBoundingClientRect!==Ce&&(r=i.getBoundingClientRect()),n=X(o),{top:r.top+(n.pageYOffset||e.scrollTop)-(e.clientTop||0),left:r.left+(n.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var t,e,n={top:0,left:0},r=this[0];return"fixed"===ie.css(r,"position")?e=r.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),ie.nodeName(t[0],"html")||(n=t.offset()),n.top+=ie.css(t[0],"borderTopWidth",!0),n.left+=ie.css(t[0],"borderLeftWidth",!0)),{top:e.top-n.top-ie.css(r,"marginTop",!0),left:e.left-n.left-ie.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||ir;t&&!ie.nodeName(t,"html")&&"static"===ie.css(t,"position");)t=t.offsetParent;return t||ir})}}),ie.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n=/Y/.test(e);ie.fn[t]=function(r){return Ae(this,function(t,r,i){var o=X(t);return void 0===i?o?e in o?o[e]:o.document.documentElement[r]:t[r]:void(o?o.scrollTo(n?ie(o).scrollLeft():i,n?i:ie(o).scrollTop()):t[r]=i)},t,r,arguments.length,null)}}),ie.each(["top","left"],function(t,e){ie.cssHooks[e]=S(ne.pixelPosition,function(t,n){return n?(n=en(t,e),rn.test(n)?ie(t).position()[e]+"px":n):void 0})}),ie.each({Height:"height",Width:"width"},function(t,e){ie.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,r){ie.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return Ae(this,function(e,n,r){var i;return ie.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(i=e.documentElement,Math.max(e.body["scroll"+t],i["scroll"+t],e.body["offset"+t],i["offset"+t],i["client"+t])):void 0===r?ie.css(e,n,a):ie.style(e,n,r,a)},e,o?r:void 0,o,null)}})}),ie.fn.size=function(){return this.length},ie.fn.andSelf=ie.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ie});var or=t.jQuery,ar=t.$;return ie.noConflict=function(e){return t.$===ie&&(t.$=ar),e&&t.jQuery===ie&&(t.jQuery=or),ie},typeof e===Ce&&(t.jQuery=t.$=ie),ie}),+function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){o.trigger("closed.bs.alert").remove()}var r=t(this),i=r.attr("data-target");i||(i=r.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));var o=t(i);e&&e.preventDefault(),o.length||(o=r.hasClass("alert")?r:r.parent()),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one(t.support.transition.end,n).emulateTransitionEnd(150):n())};var r=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var r=t(this),i=r.data("bs.alert");i||r.data("bs.alert",i=new n(this)),"string"==typeof e&&i[e].call(r)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=r,this},t(document).on("click.bs.alert.data-api",e,n.prototype.close)}(jQuery),+function(t){"use strict";var e=function(n,r){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,r),this.isLoading=!1};e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(e){var n="disabled",r=this.$element,i=r.is("input")?"val":"html",o=r.data();e+="Text",o.resetText||r.data("resetText",r[i]()),r[i](o[e]||this.options[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,r.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,r.removeClass(n).removeAttr(n))},this),0)},e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")&&(n.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var r=t(this),i=r.data("bs.button"),o="object"==typeof n&&n;i||r.data("bs.button",i=new e(this,o)),"toggle"==n?i.toggle():n&&i.setState(n)})},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.bs.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle"),e.preventDefault()})}(jQuery),+function(t){"use strict";var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},e.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},e.prototype.to=function(e){var n=this,r=this.getActiveIndex();if(!(e>this.$items.length-1||0>e))return this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(e)}):r==e?this.pause().cycle():this.slide(e>r?"next":"prev",t(this.$items[e]))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(e,n){var r=this.$element.find(".item.active"),i=n||r[e](),o=this.interval,a="next"==e?"left":"right",s="next"==e?"first":"last",l=this;if(!i.length){if(!this.options.wrap)return;i=this.$element.find(".item")[s]()}if(i.hasClass("active"))return this.sliding=!1;var u=t.Event("slide.bs.carousel",{relatedTarget:i[0],direction:a});return this.$element.trigger(u),u.isDefaultPrevented()?void 0:(this.sliding=!0,o&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var e=t(l.$indicators.children()[l.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")?(i.addClass(e),i[0].offsetWidth,r.addClass(a),i.addClass(a),r.one(t.support.transition.end,function(){i.removeClass([e,a].join(" ")).addClass("active"),r.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*r.css("transition-duration").slice(0,-1))):(r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),o&&this.cycle(),this)};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var r=t(this),i=r.data("bs.carousel"),o=t.extend({},e.DEFAULTS,r.data(),"object"==typeof n&&n),a="string"==typeof n?n:o.slide;i||r.data("bs.carousel",i=new e(this,o)),"number"==typeof n?i.to(n):a?i[a]():o.interval&&i.pause().cycle()})},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,r=t(this),i=t(r.attr("data-target")||(n=r.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),o=t.extend({},i.data(),r.data()),a=r.attr("data-slide-to");a&&(o.interval=!1),i.carousel(o),(a=r.attr("data-slide-to"))&&i.data("bs.carousel").to(a),e.preventDefault()}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);e.carousel(e.data())})})}(jQuery),+function(t){function e(e){t(r).remove(),t(i).each(function(){var r=n(t(this)),i={relatedTarget:this};r.hasClass("open")&&(r.trigger(e=t.Event("hide.bs.dropdown",i)),e.isDefaultPrevented()||r.removeClass("open").trigger("hidden.bs.dropdown",i))})}function n(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var r=n&&t(n);return r&&r.length?r:e.parent()}var r=".dropdown-backdrop",i="[data-toggle=dropdown]",o=function(e){t(e).on("click.bs.dropdown",this.toggle)};o.prototype.toggle=function(r){var i=t(this);if(!i.is(".disabled, :disabled")){var o=n(i),a=o.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var s={relatedTarget:this};if(o.trigger(r=t.Event("show.bs.dropdown",s)),r.isDefaultPrevented())return;o.toggleClass("open").trigger("shown.bs.dropdown",s),i.focus()}return!1}},o.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var r=t(this);if(e.preventDefault(),e.stopPropagation(),!r.is(".disabled, :disabled")){var o=n(r),a=o.hasClass("open");if(!a||a&&27==e.keyCode)return 27==e.which&&o.find(i).focus(),r.click();var s=" li:not(.divider):visible a",l=o.find("[role=menu]"+s+", [role=listbox]"+s);if(l.length){var u=l.index(l.filter(":focus"));38==e.keyCode&&u>0&&u--,40==e.keyCode&&u<l.length-1&&u++,~u||(u=0),l.eq(u).focus()}}}};var a=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),r=n.data("bs.dropdown");r||n.data("bs.dropdown",r=new o(this)),"string"==typeof e&&r[e].call(n)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",i,o.prototype.toggle).on("keydown.bs.dropdown.data-api",i+", [role=menu], [role=listbox]",o.prototype.keydown)}(jQuery),+function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this[this.isShown?"hide":"show"](t)},e.prototype.show=function(e){var n=this,r=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(r),this.isShown||r.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var r=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(document.body),n.$element.show().scrollTop(0),r&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();var i=t.Event("shown.bs.modal",{relatedTarget:e});r?n.$element.find(".modal-dialog").one(t.support.transition.end,function(){n.$element.focus().trigger(i)}).emulateTransitionEnd(300):n.$element.focus().trigger(i)}))},e.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one(t.support.transition.end,t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]!==t.target&&!this.$element.has(t.target).length&&this.$element.focus()},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;r?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()):e&&e()};var n=t.fn.modal;t.fn.modal=function(n,r){return this.each(function(){var i=t(this),o=i.data("bs.modal"),a=t.extend({},e.DEFAULTS,i.data(),"object"==typeof n&&n);o||i.data("bs.modal",o=new e(this,a)),"string"==typeof n?o[n](r):a.show&&o.show(r)})},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),r=n.attr("href"),i=t(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),o=i.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(r)&&r},i.data(),n.data());n.is("a")&&e.preventDefault(),i.modal(o,this).one("hide",function(){n.is(":visible")&&n.focus()})}),t(document).on("show.bs.modal",".modal",function(){t(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){t(document.body).removeClass("modal-open")})}(jQuery),+function(t){"use strict";var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.prototype.init=function(e,n,r){this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(r);for(var i=this.options.trigger.split(" "),o=i.length;o--;){var a=i[o];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var s="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,r){n[t]!=r&&(e[t]=r)}),e},e.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show()},e.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide()},e.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(e),e.isDefaultPrevented())return;var n=this,r=this.tip();this.setContent(),this.options.animation&&r.addClass("fade");var i="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,o=/\s?auto?\s?/i,a=o.test(i);a&&(i=i.replace(o,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(i),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);var s=this.getPosition(),l=r[0].offsetWidth,u=r[0].offsetHeight;if(a){var c=this.$element.parent(),f=i,d=document.documentElement.scrollTop||document.body.scrollTop,h="body"==this.options.container?window.innerWidth:c.outerWidth(),p="body"==this.options.container?window.innerHeight:c.outerHeight(),g="body"==this.options.container?0:c.offset().left;i="bottom"==i&&s.top+s.height+u-d>p?"top":"top"==i&&s.top-d-u<0?"bottom":"right"==i&&s.right+l>h?"left":"left"==i&&s.left-l<g?"right":i,r.removeClass(f).addClass(i)}var v=this.getCalculatedOffset(i,s,l,u);this.applyPlacement(v,i),this.hoverState=null;var m=function(){n.$element.trigger("shown.bs."+n.type)};t.support.transition&&this.$tip.hasClass("fade")?r.one(t.support.transition.end,m).emulateTransitionEnd(150):m()}},e.prototype.applyPlacement=function(e,n){var r,i=this.tip(),o=i[0].offsetWidth,a=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),l=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(l)&&(l=0),e.top=e.top+s,e.left=e.left+l,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var u=i[0].offsetWidth,c=i[0].offsetHeight;if("top"==n&&c!=a&&(r=!0,e.top=e.top+a-c),/bottom|top/.test(n)){var f=0;e.left<0&&(f=-2*e.left,e.left=0,i.offset(e),u=i[0].offsetWidth,c=i[0].offsetHeight),this.replaceArrow(f-o+u,u,"left")}else this.replaceArrow(c-a,c,"top");r&&i.offset(e)},e.prototype.replaceArrow=function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(){function e(){"in"!=n.hoverState&&r.detach(),n.$element.trigger("hidden.bs."+n.type)}var n=this,r=this.tip(),i=t.Event("hide.bs."+this.type);
return this.$element.trigger(i),i.isDefaultPrevented()?void 0:(r.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?r.one(t.support.transition.end,e).emulateTransitionEnd(150):e(),this.hoverState=null,this)},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},e.prototype.getCalculatedOffset=function(t,e,n,r){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-r,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-r/2,left:e.left-n}:{top:e.top+e.height/2-r/2,left:e.left+e.width}},e.prototype.getTitle=function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var n=e?t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;n.tip().hasClass("in")?n.leave(n):n.enter(n)},e.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var r=t(this),i=r.data("bs.tooltip"),o="object"==typeof n&&n;(i||"destroy"!=n)&&(i||r.data("bs.tooltip",i=new e(this,o)),"string"==typeof n&&i[n]())})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(jQuery),+function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},e.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var r=t(this),i=r.data("bs.popover"),o="object"==typeof n&&n;(i||"destroy"!=n)&&(i||r.data("bs.popover",i=new e(this,o)),"string"==typeof n&&i[n]())})},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(jQuery),+function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),r=e.data("target");if(r||(r=e.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var i=n.find(".active:last a")[0],o=t.Event("show.bs.tab",{relatedTarget:i});if(e.trigger(o),!o.isDefaultPrevented()){var a=t(r);this.activate(e.parent("li"),n),this.activate(a,a.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:i})})}}},e.prototype.activate=function(e,n,r){function i(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),r&&r()}var o=n.find("> .active"),a=r&&t.support.transition&&o.hasClass("fade");a?o.one(t.support.transition.end,i).emulateTransitionEnd(150):i(),o.removeClass("in")};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var r=t(this),i=r.data("bs.tab");i||r.data("bs.tab",i=new e(this)),"string"==typeof n&&i[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(jQuery),+function(t){"use strict";var e=function(n,r){this.options=t.extend({},e.DEFAULTS,r),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(n),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$window.scrollTop(),n=this.$element.offset();return this.pinnedOffset=n.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=t(document).height(),r=this.$window.scrollTop(),i=this.$element.offset(),o=this.options.offset,a=o.top,s=o.bottom;"top"==this.affixed&&(i.top+=r),"object"!=typeof o&&(s=a=o),"function"==typeof a&&(a=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var l=null!=this.unpin&&r+this.unpin<=i.top?!1:null!=s&&i.top+this.$element.height()>=n-s?"bottom":null!=a&&a>=r?"top":!1;if(this.affixed!==l){this.unpin&&this.$element.css("top","");var u="affix"+(l?"-"+l:""),c=t.Event(u+".bs.affix");this.$element.trigger(c),c.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(u).trigger(t.Event(u.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:n-s-this.$element.height()}))}}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var r=t(this),i=r.data("bs.affix"),o="object"==typeof n&&n;i||r.data("bs.affix",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.affix(n)})})}(jQuery),+function(t){"use strict";var e=function(n,r){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,r),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var r=n.data("bs.collapse");if(r&&r.transitioning)return;n.collapse("hide"),r||n.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return o.call(this);var a=t.camelCase(["scroll",i].join("-"));this.$element.one(t.support.transition.end,t.proxy(o,this)).emulateTransitionEnd(350)[i](this.$element[0][a])}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var r=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?void this.$element[n](0).one(t.support.transition.end,t.proxy(r,this)).emulateTransitionEnd(350):r.call(this)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var r=t(this),i=r.data("bs.collapse"),o=t.extend({},e.DEFAULTS,r.data(),"object"==typeof n&&n);!i&&o.toggle&&"show"==n&&(n=!n),i||r.data("bs.collapse",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var n,r=t(this),i=r.attr("data-target")||e.preventDefault()||(n=r.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),o=t(i),a=o.data("bs.collapse"),s=a?"toggle":r.data(),l=r.attr("data-parent"),u=l&&t(l);a&&a.transitioning||(u&&u.find('[data-toggle=collapse][data-parent="'+l+'"]').not(r).addClass("collapsed"),r[o.hasClass("in")?"addClass":"removeClass"]("collapsed")),o.collapse(s)})}(jQuery),+function(t){function e(n,r){var i,o=t.proxy(this.process,this);this.$element=t(t(n).is("body")?window:n),this.$body=t("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",o),this.options=t.extend({},e.DEFAULTS,r),this.selector=(this.options.target||(i=t(n).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=t([]),this.targets=t([]),this.activeTarget=null,this.refresh(),this.process()}e.DEFAULTS={offset:10},e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";this.offsets=t([]),this.targets=t([]);{var n=this;this.$body.find(this.selector).map(function(){var r=t(this),i=r.data("target")||r.attr("href"),o=/^#./.test(i)&&t(i);return o&&o.length&&o.is(":visible")&&[[o[e]().top+(!t.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})}},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,r=n-this.$scrollElement.height(),i=this.offsets,o=this.targets,a=this.activeTarget;if(e>=r)return a!=(t=o.last()[0])&&this.activate(t);if(a&&e<=i[0])return a!=(t=o[0])&&this.activate(t);for(t=i.length;t--;)a!=o[t]&&e>=i[t]&&(!i[t+1]||e<=i[t+1])&&this.activate(o[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',r=t(n).parents("li").addClass("active");r.parent(".dropdown-menu").length&&(r=r.closest("li.dropdown").addClass("active")),r.trigger("activate.bs.scrollspy")};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var r=t(this),i=r.data("bs.scrollspy"),o="object"==typeof n&&n;i||r.data("bs.scrollspy",i=new e(this,o)),"string"==typeof n&&i[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(jQuery),+function(t){function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,r=this;t(this).one(t.support.transition.end,function(){n=!0});var i=function(){n||t(r).trigger(t.support.transition.end)};return setTimeout(i,e),this},t(function(){t.support.transition=e()})}(jQuery),!function(t,e,n,r){var i={verticalScrolling:!0,horizontalScrolling:!1,verticalScrollerSide:"right",showOnHover:!1,scrollIncrement:20,minScrollbarLength:40,pollChanges:!0,drawCorner:!0,drawScrollButtons:!1,clickTrackToScroll:!0,easingDuration:500,propagateWheelEvent:!0,verticalTrackClass:"vertical-track",horizontalTrackClass:"horizontal-track",horizontalHandleClass:"horizontal-handle",verticalHandleClass:"vertical-handle",scrollUpButtonClass:"scroll-up-btn",scrollDownButtonClass:"scroll-down-btn",scrollLeftButtonClass:"scroll-left-btn",scrollRightButtonClass:"scroll-right-btn",cornerClass:"scrollbar-corner",zIndex:1,addPaddingToPane:!0,horizontalHandleHTML:'<div class="left"></div><div class="right"></div>',verticalHandleHTML:'<div class="top"></div><div class="bottom"></div>'},o=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},a=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){setTimeout(t,17)},s=function(e,n){var r=t(e).css(n),i=/^-?\d+/.exec(r);return i?+i[0]:0},l=function(t){var e,n,r={width:"5px",height:"1px",overflow:"hidden",padding:"8px 0",visibility:"hidden",whiteSpace:"pre-line",font:"10px/1 serif"},i=document.createElement(t),o=document.createTextNode("a\na");for(n in r)i.style[n]=r[n];return i.appendChild(o),document.body.appendChild(i),e=i.scrollHeight<28,document.body.removeChild(i),e},u=.5*Math.PI,c=10*Math.log(2),f=function(t,e,n){var r=u/e,i=t*r;return Math.round(i*Math.cos(r*n))},d=function(t,e,n){return Math.round(t*c*Math.pow(2,-10*n/e+1)/e)},h=function(t,e,n,r){return 2*n/Math.PI*Math.asin((r-t)/e)},p=function(e){var n=t(this).data("enscroll"),r=this,i=n.settings,o=function(){var e=t(this).data("enscroll"),n=e.settings;e&&n.showOnHover&&(n.verticalScrolling&&t(e.verticalTrackWrapper).is(":visible")&&t(e.verticalTrackWrapper).stop().fadeTo(275,0),n.horizontalScrolling&&t(e.horizontalTrackWrapper).is(":visible")&&t(e.horizontalTrackWrapper).stop().fadeTo(275,0),e._fadeTimer=null)};n&&i.showOnHover&&(n._fadeTimer?clearTimeout(n._fadeTimer):(i.verticalScrolling&&t(n.verticalTrackWrapper).is(":visible")&&t(n.verticalTrackWrapper).stop().fadeTo(275,1),i.horizontalScrolling&&t(n.horizontalTrackWrapper).is(":visible")&&t(n.horizontalTrackWrapper).stop().fadeTo(275,1)),e!==!1&&(n._fadeTimer=setTimeout(function(){o.call(r)},1750)))},g=function(e,n){var r=t(e),i=r.data("enscroll"),o=r.scrollTop();i&&i.settings.verticalScrolling&&(r.scrollTop(o+n),i.settings.showOnHover&&p.call(e))},v=function(e,n){var r=t(e),i=r.data("enscroll"),o=r.scrollLeft();i&&i.settings.horizontalScrolling&&(r.scrollLeft(o+n),i.settings.showOnHover&&p.call(e))},m=function(e){if(1===e.which){var r,i,o,s,l,u,c,f,d,h=e.data.pane,g=t(h),v=g.data("enscroll"),m=!0,y=function(){m&&(o!==s&&(v._scrollingY||(v._scrollingY=!0,v._startY=g.scrollTop(),a(function(){$(g)})),i.style.top=o+"px",v._endY=o*d/f,s=o),a(y),v.settings.showOnHover&&p.call(h))},b=function(t){return m&&(o=t.clientY-u-l,o=Math.min(0>o?0:o,f)),!1},w=function(){return m=!1,n.body.style.cursor=c,this.style.cursor="",r.removeClass("dragging"),t(n.body).off("mousemove.enscroll.vertical").off("mouseup.enscroll.vertical"),t(n).off("mouseout.enscroll.vertical"),g.on("scroll.enscroll.pane",function(t){C.call(this,t)}),!1};return r=t(v.verticalTrackWrapper).find(".enscroll-track"),i=r.children().first()[0],o=parseInt(i.style.top,10),d=h.scrollHeight-(v._scrollHeightNoPadding?t(h).height():t(h).innerHeight()),l=e.clientY-t(i).offset().top,f=r.height()-t(i).outerHeight(),u=r.offset().top,g.off("scroll.enscroll.pane"),t(n.body).on({"mousemove.enscroll.vertical":b,"mouseup.enscroll.vertical":function(t){w.call(i,t)}}),t(n).on("mouseout.enscroll.vertical",function(t){t.target.nodeName&&"HTML"===t.target.nodeName.toUpperCase()&&w.call(i,t)}),r.hasClass("dragging")||(r.addClass("dragging"),c=t(n.body).css("cursor"),this.style.cursor=n.body.style.cursor="ns-resize"),a(y),!1}},y=function(e){if(1===e.which){var r,i,o,s,l,u,c,f,d,h=e.data.pane,g=t(h),v=t(h).data("enscroll"),m=!0,y=function(){m&&(o!==s&&(v._scrollingX||(v._scrollingX=!0,v._startX=g.scrollLeft(),a(function(){$(g)})),i.style.left=o+"px",v._endX=o*l/d,s=o),a(y),v.settings.showOnHover&&p.call(h))},b=function(t){return m&&(o=t.clientX-c-u,o=Math.min(0>o?0:o,d)),!1},w=function(){return m=!1,r.removeClass("dragging"),n.body.style.cursor=f,this.style.cursor="",r.removeClass("dragging"),t(n.body).off("mousemove.enscroll.horizontal").off("mouseup.enscroll.horizontal"),t(n).off("mouseout.enscroll.horizontal"),g.on("scroll.enscroll.pane",function(t){C.call(this,t)}),!1};return r=t(v.horizontalTrackWrapper).find(".enscroll-track"),i=r.children().first()[0],o=parseInt(i.style.left,10),l=h.scrollWidth-t(h).innerWidth(),u=e.clientX-t(i).offset().left,d=r.width()-t(i).outerWidth(),c=r.offset().left,g.off("scroll.enscroll.pane"),t(n.body).on({"mousemove.enscroll.horizontal":b,"mouseup.enscroll.horizontal":function(t){w.call(i,t)}}),t(n).on("mouseout.enscroll.horizontal",function(t){t.target.nodeName&&"HTML"===t.target.nodeName.toUpperCase()&&w.call(i,t)}),r.hasClass("dragging")||(r.addClass("dragging"),f=t("body").css("cursor"),this.style.cursor=n.body.style.cursor="ew-resize"),a(y),!1}},$=function(t){var e,n,r,i=t.data("enscroll"),o=i._duration;i._scrollingX===!0&&(e=i._endX-i._startX,0===e?i._scrollingX=!1:(n=t.scrollLeft(),r=h(i._startX,e,o,n),e>0?n>=i._endX||n<i._startX?i._scrollingX=!1:(v(t,Math.max(1,f(e,o,r))),a(function(){$(t)})):n<=i._endX||n>i._startX?i._scrollingX=!1:(v(t,Math.min(-1,f(e,o,r))),a(function(){$(t)})))),i._scrollingY===!0&&(e=i._endY-i._startY,0===e?i._scrollingY=!1:(n=t.scrollTop(),r=h(i._startY,e,o,n),e>0?n>=i._endY||n<i._startY?i._scrollingY=!1:(g(t,Math.max(1,f(e,o,r))),a(function(){$(t)})):n<=i._endY||n>i._startY?i._scrollingY=!1:(g(t,Math.min(-1,f(e,o,r))),a(function(){$(t)}))))},b=function(t,e){var n=t.data("enscroll"),r=t.scrollLeft(),i=t[0].scrollWidth-t.innerWidth();return!n.settings.horizontalScrolling||n._scrollingY?!1:(n._scrollingX||(n._scrollingX=!0,n._startX=r,n._endX=n._startX,a(function(){$(t)})),n._endX=e>0?Math.min(r+e,i):Math.max(0,r+e),0>e&&r>0||e>0&&i>r)},w=function(t,e){var n=t.data("enscroll"),r=t.scrollTop(),i=t[0].scrollHeight-(n._scrollHeightNoPadding?t.height():t.innerHeight());return!n.settings.verticalScrolling||n._scrollingX?!1:(n._scrollingY||(n._scrollingY=!0,n._startY=r,n._endY=n._startY,a(function(){$(t)})),n._endY=e>0?Math.min(r+e,i):Math.max(0,r+e),0>e&&r>0||e>0&&i>r)},x=function(e){var n,r=t(this),i=r.data("enscroll"),a=i.settings.scrollIncrement,s="deltaX"in e?-e.deltaX:"wheelDeltaX"in e?e.wheelDeltaX:0,l="deltaY"in e?-e.deltaY:"wheelDeltaY"in e?e.wheelDeltaY:"wheelDelta"in e?e.wheelDelta:0;Math.abs(s)>Math.abs(l)?(n=(s>0?-a:a)<<2,(b(r,n)||!i.settings.propagateWheelEvent)&&o(e)):(n=(l>0?-a:a)<<2,(w(r,n)||!i.settings.propagateWheelEvent)&&o(e))},C=function(){var e,n,r,i=t(this),o=i.data("enscroll");o&&(o.settings.verticalScrolling&&(n=t(o.verticalTrackWrapper).find(".enscroll-track")[0],e=n.firstChild,r=i.scrollTop()/(this.scrollHeight-(o._scrollHeightNoPadding?i.height():i.innerHeight())),r=isNaN(r)?0:r,e.style.top=r*(t(n).height()-t(e).outerHeight())+"px"),o.settings.horizontalScrolling&&(n=t(o.horizontalTrackWrapper).find(".enscroll-track")[0],e=n.firstChild,r=i.scrollLeft()/(this.scrollWidth-i.innerWidth()),r=isNaN(r)?0:r,e.style.left=r*(t(n).width()-t(e).innerWidth())+"px"))},T=function(e){var n,r=t(this),i=r.data("enscroll");if(!/(input)|(select)|(textarea)/i.test(this.nodeName)&&e.target===this&&i){switch(n=i.settings.scrollIncrement,e.keyCode){case 32:case 34:return w(r,r.height()),!1;case 33:return w(r,-r.height()),!1;case 35:return w(r,this.scrollHeight),!1;case 36:return w(r,-this.scrollHeight),!1;case 37:return b(r,-n),!1;case 38:return w(r,-n),!1;case 39:return b(r,n),!1;case 40:return w(r,n),!1}return!0}},k=function(){var e=this,r=t(e).data("enscroll").settings,i=!0,o=0,s=0,l=t(e).offset().top,u=l+t(e).outerHeight(),c=t(e).offset().left,f=c+t(e).outerWidth(),d=function(t){var e=t.pageX,n=t.pageY;o=c>e?e-c:e>f?e-f:0,s=l>n?n-l:n>u?n-u:0},h=function(){r.horizontalScrolling&&o&&v(e,parseInt(o/4,10)),r.verticalScrolling&&s&&g(e,parseInt(s/4,10)),i&&a(h)},p=function(){i=!1,t(n).off("mousemove.enscroll.pane").off("mouseup.enscroll.pane")};a(h),t(n).on({"mousemove.enscroll.pane":d,"mouseup.enscroll.pane":p})},S=function(t){var e,n,i,s,l,u,c,f=this,h=function(t){e=t.touches[0].clientX,n=t.touches[0].clientY,i||(i=n===l&&e===s?r:Math.abs(l-n)>Math.abs(s-e)?"y":"x"),o(t)},p=function(){u&&("y"===i?(g(f,l-n),c=l-n,l=n):"x"===i&&(v(f,s-e),c=s-e,s=e),a(p))},m=function(){var t=0,e=Math.abs(1.5*c);this.removeEventListener("touchmove",h,!1),this.removeEventListener("touchend",m,!1),u=!1,a(function n(){var r;t===e||u||(r=d(c,e,t),isNaN(r)||0===r||(t+=1,"y"===i?g(f,r):v(f,r),a(n)))})};1===t.touches.length&&(s=t.touches[0].clientX,l=t.touches[0].clientY,u=!0,this.addEventListener("touchmove",h,!1),this.addEventListener("touchend",m,!1),a(p))},E={reposition:function(){return this.each(function(){var e,n,r,i=t(this),o=i.data("enscroll"),a=function(t,e,n){t.style.left=e+"px",t.style.top=n+"px"};o&&(r=i.position(),e=o.corner,o.settings.verticalScrolling&&(n=o.verticalTrackWrapper,a(n,"right"===o.settings.verticalScrollerSide?r.left+i.outerWidth()-t(n).width()-s(this,"border-right-width"):r.left+s(this,"border-left-width"),r.top+s(this,"border-top-width"))),o.settings.horizontalScrolling&&(n=o.horizontalTrackWrapper,a(n,r.left+s(this,"border-left-width"),r.top+i.outerHeight()-t(n).height()-s(this,"border-bottom-width"))),e&&a(e,r.left+i.outerWidth()-t(e).outerWidth()-s(this,"border-right-width"),r.top+i.outerHeight()-t(e).outerHeight()-s(this,"border-bottom-width")))})},resize:function(){return this.each(function(){var e,n,r,i,o,a,s,l,u,c,f,d,h,p,g,v,m=t(this),y=m.data("enscroll");return y?(e=y.settings,void(m.is(":visible")?(e.verticalScrolling&&(i=y.verticalTrackWrapper,n=m.innerHeight(),o=n/this.scrollHeight,a=t(i).find(".enscroll-track")[0],u=t(i).find("."+e.scrollUpButtonClass),c=t(i).find("."+e.scrollDownButtonClass),l=e.horizontalScrolling?n-t(y.horizontalTrackWrapper).find(".enscroll-track").outerHeight():n,l-=t(a).outerHeight()-t(a).height()+u.outerHeight()+c.outerHeight(),h=a.firstChild,g=Math.max(o*l,e.minScrollbarLength),g-=t(h).outerHeight()-t(h).height(),i.style.display="none",a.style.height=l+"px",h.style.height=g+"px",1>o&&(o=m.scrollTop()/(this.scrollHeight-m.height()),h.style.top=o*(l-g)+"px",i.style.display="block")),e.horizontalScrolling&&(i=y.horizontalTrackWrapper,r=m.innerWidth(),o=r/this.scrollWidth,a=t(i).find(".enscroll-track")[0],f=t(i).find("."+e.scrollLeftButtonClass),d=t(i).find("."+e.scrollRightButtonClass),s=e.verticalScrolling?r-t(y.verticalTrackWrapper).find(".enscroll-track").outerWidth():r,s-=t(a).outerWidth()-t(a).width()+f.outerWidth()+d.outerWidth(),h=a.firstChild,p=Math.max(o*s,e.minScrollbarLength),p-=t(h).outerWidth()-t(h).width(),i.style.display="none",a.style.width=s+"px",h.style.width=p+"px",1>o&&(o=m.scrollLeft()/(this.scrollWidth-m.width()),h.style.left=o*(s-p)+"px",i.style.display="block"),y._prybar&&(v=y._prybar,this.removeChild(v),e.verticalScrolling&&(v.style.width=this.scrollWidth+t(y.verticalTrackWrapper).find(".enscroll-track").outerWidth()+"px",this.appendChild(v)))),y.corner&&(y.corner.style.display=y.verticalTrackWrapper&&y.horizontalTrackWrapper&&t(y.verticalTrackWrapper).is(":visible")&&t(y.horizontalTrackWrapper).is(":visible")?"":"none")):(e.verticalScrolling&&(y.verticalTrackWrapper.style.display="none"),e.horizontalScrolling&&(y.horizontalTrackWrapper.style.display="none"),y.corner&&(y.corner.style.display="none")))):!0})},startPolling:function(){return this.each(function(){var e,n=t(this).data("enscroll"),r=this,i=t(r),o=-1,a=-1,s=-1,l=-1,u=function(){if(n.settings.pollChanges){var t=r.scrollWidth,c=r.scrollHeight,f=i.width(),d=i.height(),h=i.offset();(n.settings.verticalScrolling&&(d!==a||c!==l)||n.settings.horizontalScrolling&&(f!==o||t!==s))&&(s=t,l=c,E.resize.call(i)),(e.left!==h.left||e.top!==h.top||f!==o||d!==a)&&(e=h,o=f,a=d,E.reposition.call(i)),setTimeout(u,350)}};n&&(n.settings.pollChanges=!0,l=r.scrollHeight,s=r.scrollWidth,e=i.offset(),u())})},stopPolling:function(){return this.each(function(){var e=t(this).data("enscroll");e&&(e.settings.pollChanges=!1)})},destroy:function(){return this.each(function(){var n,r,i=t(this),o=i.data("enscroll");o&&(E.stopPolling.call(i),r=o._mouseScrollHandler,o.settings.verticalScrolling&&(n=o.verticalTrackWrapper,t(n).remove(),n=null),o.settings.horizontalScrolling&&(n=o.horizontalTrackWrapper,t(n).remove(),n=null),o._fadeTimer&&clearTimeout(o._fadeTimer),o.corner&&t(o.corner).remove(),o._prybar&&o._prybar.parentNode&&o._prybar.parentNode===this&&t(o._prybar).remove(),this.setAttribute("style",o._style||""),o._hadTabIndex||i.removeAttr("tabindex"),i.off("scroll.enscroll.pane").off("keydown.enscroll.pane").off("mouseenter.enscroll.pane").off("mousedown.enscroll.pane").data("enscroll",null),this.removeEventListener?(this.removeEventListener("wheel",r,!1),this.removeEventListener("mousewheel",r,!1),this.removeEventListener("touchstart",S,!1)):this.detachEvent&&this.detachEvent("onmousewheel",r),t(e).off("resize.enscroll.window"))})}};t.fn.enscroll=function(r){var o;return E[r]?E[r].call(this):(o=t.extend({},i,r),this.each(function(){if(o.verticalScrolling||o.horizontalScrolling){var r,i,a,u,c,f,d,h,$,_,A,N,D,j,O,M,L,H,F=t(this),P=this,R=F.attr("style"),q=!0,I={position:"absolute","z-index":o.zIndex,margin:0,padding:0},B=function(t){x.call(P,t)},W=function(e,n){"string"==typeof n?t(e).html(n):e.appendChild(n)};if(o.verticalScrolling){i=n.createElement("div"),u=n.createElement("div"),f=n.createElement("a"),t(u).css("position","relative").addClass("enscroll-track").addClass(o.verticalTrackClass).appendTo(i),o.drawScrollButtons&&(d=n.createElement("a"),h=n.createElement("a"),t(d).css({display:"block","text-decoration":"none"}).attr("href","").html("&nbsp;").addClass(o.scrollUpButtonClass).on("click",function(){return g(P,-o.scrollIncrement),!1}).insertBefore(u),t(h).css({display:"block","text-decoration":"none"}).attr("href","").html("&nbsp;").on("click",function(){return g(P,o.scrollIncrement),!1}).addClass(o.scrollDownButtonClass).appendTo(i)),o.clickTrackToScroll&&t(u).on("click",function(e){e.target===this&&w(F,e.pageY>t(f).offset().top?F.height():-F.height())}),t(f).css({position:"absolute","z-index":1}).attr("href","").addClass(o.verticalHandleClass).mousedown({pane:this},m).click(function(){return!1}).appendTo(u),W(f,o.verticalHandleHTML),t(i).css(I).insertAfter(this),o.showOnHover&&t(i).css("opacity",0).on("mouseover.enscroll.vertical",function(){p.call(P,!1)}).on("mouseout.enscroll.vertical",function(){p.call(P)}),N=t(u).outerWidth(),o.addPaddingToPane&&(H="right"===o.verticalScrollerSide?{"padding-right":s(this,"padding-right")+N+"px"}:{"padding-left":s(this,"padding-left")+N+"px"},F.css(t.extend({width:F.width()-N+"px"},H)));try{M=parseInt(F.css("outline-width"),10),0!==M&&!isNaN(M)||"none"!==F.css("outline-style")||F.css("outline","none")}catch(z){F.css("outline","none")}}o.horizontalScrolling&&(r=n.createElement("div"),a=n.createElement("div"),c=n.createElement("a"),t(a).css({position:"relative","z-index":1}).addClass("enscroll-track").addClass(o.horizontalTrackClass).appendTo(r),o.drawScrollButtons&&($=n.createElement("a"),_=n.createElement("a"),t($).css("display","block").attr("href","").on("click",function(){return v(P,-o.scrollIncrement),!1}).addClass(o.scrollLeftButtonClass).insertBefore(a),t(_).css("display","block").attr("href","").on("click",function(){return v(P,o.scrollIncrement),!1}).addClass(o.scrollRightButtonClass).appendTo(r)),o.clickTrackToScroll&&t(a).on("click",function(e){e.target===this&&b(F,e.pageX>t(c).offset().left?F.width():-F.width())}),t(c).css({position:"absolute","z-index":1}).attr("href","").addClass(o.horizontalHandleClass).click(function(){return!1}).mousedown({pane:this},y).appendTo(a),W(c,o.horizontalHandleHTML),t(r).css(I).insertAfter(this),o.showOnHover&&t(r).css("opacity",0).on("mouseover.enscroll.horizontal",function(){p.call(P,!1)}).on("mouseout.enscroll.horizontal",function(){p.call(P)}),A=t(a).outerHeight(),o.addPaddingToPane&&F.css({height:F.height()-A+"px","padding-bottom":parseInt(F.css("padding-bottom"),10)+A+"px"}),L=document.createElement("div"),t(L).css({width:"1px",height:"1px",visibility:"hidden",padding:0,margin:"-1px"}).appendTo(this)),o.verticalScrolling&&o.horizontalScrolling&&o.drawCorner&&(D=n.createElement("div"),t(D).addClass(o.cornerClass).css(I).insertAfter(this)),O=F.attr("tabindex"),O||(F.attr("tabindex",0),q=!1);try{j=F.css("outline"),(!j||j.length<1)&&F.css("outline","none")}catch(z){F.css("outline","none")}F.on({"scroll.enscroll.pane":function(t){C.call(this,t)},"keydown.enscroll.pane":T,"mousedown.enscroll.pane":k}).css("overflow","hidden").data("enscroll",{settings:o,horizontalTrackWrapper:r,verticalTrackWrapper:i,corner:D,_prybar:L,_mouseScrollHandler:B,_hadTabIndex:q,_style:R,_scrollingX:!1,_scrollingY:!1,_startX:0,_startY:0,_endX:0,_endY:0,_duration:parseInt(o.easingDuration/16.66666,10),_scrollHeightNoPadding:l(this.nodeName)}),t(e).on("resize.enscroll.window",function(){E.reposition.call(F)}),o.showOnHover&&F.on("mouseenter.enscroll.pane",function(){p.call(this)}),this.addEventListener?("onwheel"in this||"WheelEvent"in e&&navigator.userAgent.toLowerCase().indexOf("msie")>=0?this.addEventListener("wheel",B,!1):"onmousewheel"in this&&this.addEventListener("mousewheel",B,!1),this.addEventListener("touchstart",S,!1)):this.attachEvent&&this.attachEvent("onmousewheel",B),o.pollChanges&&E.startPolling.call(F),E.resize.call(F),E.reposition.call(F)}}))}}(jQuery,window,document),function(t,e){"use strict";function n(){function t(t,n){return e.extend(new(e.extend(function(){},{prototype:t})),n)}function n(t,e){var n=e.caseInsensitiveMatch,r={originalPath:t,regexp:t},i=r.keys=[];return t=t.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(t,e,n,r){var o="?"===r?r:null,a="*"===r?r:null;return i.push({name:n,optional:!!o}),e=e||"",""+(o?"":e)+"(?:"+(o?e:"")+(a&&"(.+?)"||"([^/]+)")+(o||"")+")"+(o||"")}).replace(/([\/$\*])/g,"\\$1"),r.regexp=new RegExp("^"+t+"$",n?"i":""),r}var r={};this.when=function(t,i){if(r[t]=e.extend({reloadOnSearch:!0},i,t&&n(t,i)),t){var o="/"==t[t.length-1]?t.substr(0,t.length-1):t+"/";r[o]=e.extend({redirectTo:t},n(o,i))}return this},this.otherwise=function(t){return this.when(null,t),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(n,i,o,a,s,l,u,c){function f(t,e){var n=e.keys,r={};if(!e.regexp)return null;var i=e.regexp.exec(t);if(!i)return null;for(var o=1,a=i.length;a>o;++o){var s=n[o-1],l="string"==typeof i[o]?decodeURIComponent(i[o]):i[o];s&&l&&(r[s.name]=l)}return r}function d(){var t=h(),r=v.current;t&&r&&t.$$route===r.$$route&&e.equals(t.pathParams,r.pathParams)&&!t.reloadOnSearch&&!g?(r.params=t.params,e.copy(r.params,o),n.$broadcast("$routeUpdate",r)):(t||r)&&(g=!1,n.$broadcast("$routeChangeStart",t,r),v.current=t,t&&t.redirectTo&&(e.isString(t.redirectTo)?i.path(p(t.redirectTo,t.params)).search(t.params).replace():i.url(t.redirectTo(t.pathParams,i.path(),i.search())).replace()),a.when(t).then(function(){if(t){var n,r,i=e.extend({},t.resolve);
return e.forEach(i,function(t,n){i[n]=e.isString(t)?s.get(t):s.invoke(t)}),e.isDefined(n=t.template)?e.isFunction(n)&&(n=n(t.params)):e.isDefined(r=t.templateUrl)&&(e.isFunction(r)&&(r=r(t.params)),r=c.getTrustedResourceUrl(r),e.isDefined(r)&&(t.loadedTemplateUrl=r,n=l.get(r,{cache:u}).then(function(t){return t.data}))),e.isDefined(n)&&(i.$template=n),a.all(i)}}).then(function(i){t==v.current&&(t&&(t.locals=i,e.copy(t.params,o)),n.$broadcast("$routeChangeSuccess",t,r))},function(e){t==v.current&&n.$broadcast("$routeChangeError",t,r,e)}))}function h(){var n,o;return e.forEach(r,function(r){!o&&(n=f(i.path(),r))&&(o=t(r,{params:e.extend({},i.search(),n),pathParams:n}),o.$$route=r)}),o||r[null]&&t(r[null],{params:{},pathParams:{}})}function p(t,n){var r=[];return e.forEach((t||"").split(":"),function(t,e){if(0===e)r.push(t);else{var i=t.match(/(\w+)(.*)/),o=i[1];r.push(n[o]),r.push(i[2]||""),delete n[o]}}),r.join("")}var g=!1,v={routes:r,reload:function(){g=!0,n.$evalAsync(d)}};return n.$on("$locationChangeSuccess",d),v}]}function r(){this.$get=function(){return{}}}function i(t,n,r){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(i,o,a,s,l){function u(){h&&(h.remove(),h=null),f&&(f.$destroy(),f=null),d&&(r.leave(d,function(){h=null}),h=d,d=null)}function c(){var a=t.current&&t.current.locals,s=a&&a.$template;if(e.isDefined(s)){var c=i.$new(),h=t.current,v=l(c,function(t){r.enter(t,null,d||o,function(){!e.isDefined(p)||p&&!i.$eval(p)||n()}),u()});d=v,f=h.scope=c,f.$emit("$viewContentLoaded"),f.$eval(g)}else u()}var f,d,h,p=a.autoscroll,g=a.onload||"";i.$on("$routeChangeSuccess",c),c()}}}function o(t,e,n){return{restrict:"ECA",priority:-400,link:function(r,i){var o=n.current,a=o.locals;i.html(a.$template);var s=t(i.contents());if(o.controller){a.$scope=r;var l=e(o.controller,a);o.controllerAs&&(r[o.controllerAs]=l),i.data("$ngControllerController",l),i.children().data("$ngControllerController",l)}s(r)}}}var a=e.module("ngRoute",["ng"]).provider("$route",n);a.provider("$routeParams",r),a.directive("ngView",i),a.directive("ngView",o),i.$inject=["$route","$anchorScroll","$animate"],o.$inject=["$compile","$controller","$route"]}(window,window.angular),function(t,e,n){"use strict";e.module("ngAnimate",["ng"]).factory("$$animateReflow",["$$rAF","$document",function(t,e){var n=e[0].body;return function(e){return t(function(){n.offsetWidth+1;e()})}}]).config(["$provide","$animateProvider",function(r,i){function o(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.nodeType==d)return n}}function a(t){return t&&e.element(t)}function s(t){return e.element(o(t))}function l(t,e){return o(t)==o(e)}var u=e.noop,c=e.forEach,f=i.$$selectors,d=1,h="$$ngAnimateState",p="ng-animate",g={running:!0};r.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document",function(t,n,r,d,v,m){function y(t){if(t){var e=[],i={},o=t.substr(1).split(".");(r.transitions||r.animations)&&e.push(n.get(f[""]));for(var a=0;a<o.length;a++){var s=o[a],l=f[s];l&&!i[s]&&(e.push(n.get(l)),i[s]=!0)}return e}}function $(t,n,r){function i(t,e){var n=t[e],r=t["before"+e.charAt(0).toUpperCase()+e.substr(1)];return n||r?("leave"==e&&(r=n,n=null),w.push({event:e,fn:n}),m.push({event:e,fn:r}),!0):void 0}function o(e,n,i){function o(t){if(n){if((n[t]||u)(),++f<a.length)return;n=null}i()}var a=[];c(e,function(t){t.fn&&a.push(t)});var f=0;c(a,function(e,i){var a=function(){o(i)};switch(e.event){case"setClass":n.push(e.fn(t,s,l,a));break;case"addClass":n.push(e.fn(t,s||r,a));break;case"removeClass":n.push(e.fn(t,l||r,a));break;default:n.push(e.fn(t,a))}}),n&&0===n.length&&i()}var a=t[0];if(a){var s,l,f="setClass"==n,d=f||"addClass"==n||"removeClass"==n;e.isArray(r)&&(s=r[0],l=r[1],r=s+" "+l);var h=t.attr("class"),p=h+" "+r;if(S(p)){var g=u,v=[],m=[],$=u,b=[],w=[],x=(" "+p).replace(/\s+/g,".");return c(y(x),function(t){var e=i(t,n);!e&&f&&(i(t,"addClass"),i(t,"removeClass"))}),{node:a,event:n,className:r,isClassBased:d,isSetClassOperation:f,before:function(t){g=t,o(m,v,function(){g=u,t()})},after:function(t){$=t,o(w,b,function(){$=u,t()})},cancel:function(){v&&(c(v,function(t){(t||u)(!0)}),g(!0)),b&&(c(b,function(t){(t||u)(!0)}),$(!0))}}}}}function b(t,n,r,i,o,a,s){function l(e){var i="$animate:"+e;b&&b[i]&&b[i].length>0&&v(function(){r.triggerHandler(i,{event:t,className:n})})}function u(){l("before")}function f(){l("after")}function d(){l("close"),s&&v(function(){s()})}function g(){g.hasBeenRun||(g.hasBeenRun=!0,a())}function m(){if(!m.hasBeenRun){m.hasBeenRun=!0;var e=r.data(h);e&&(y&&y.isClassBased?x(r,n):(v(function(){var e=r.data(h)||{};O==e.index&&x(r,n,t)}),r.data(h,e))),d()}}var y=$(r,t,n);if(!y)return g(),u(),f(),void m();n=y.className;var b=e.element._data(y.node);b=b&&b.events,i||(i=o?o.parent():r.parent());var w=r.data(h)||{},k=w.active||{},S=w.totalActive||0,E=w.last,_=y.isClassBased?w.disabled||E&&!E.isClassBased:!1;if(_||C(r,i))return g(),u(),f(),void m();var A=!1;if(S>0){var N=[];if(y.isClassBased){if("setClass"==E.event)N.push(E),x(r,n);else if(k[n]){var D=k[n];D.event==t?A=!0:(N.push(D),x(r,n))}}else if("leave"==t&&k["ng-leave"])A=!0;else{for(var j in k)N.push(k[j]),x(r,j);k={},S=0}N.length>0&&c(N,function(t){t.cancel()})}if(!y.isClassBased||y.isSetClassOperation||A||(A="addClass"==t==r.hasClass(n)),A)return g(),u(),f(),void d();"leave"==t&&r.one("$destroy",function(){var t=e.element(this),n=t.data(h);if(n){var r=n.active["ng-leave"];r&&(r.cancel(),x(t,"ng-leave"))}}),r.addClass(p);var O=T++;S++,k[n]=y,r.data(h,{last:y,active:k,index:O,totalActive:S}),u(),y.before(function(e){var i=r.data(h);e=e||!i||!i.active[n]||y.isClassBased&&i.active[n].event!=t,g(),e===!0?m():(f(),y.after(m))})}function w(t){var n=o(t);if(n){var r=e.isFunction(n.getElementsByClassName)?n.getElementsByClassName(p):n.querySelectorAll("."+p);c(r,function(t){t=e.element(t);var n=t.data(h);n&&n.active&&c(n.active,function(t){t.cancel()})})}}function x(t,e){if(l(t,d))g.disabled||(g.running=!1,g.structural=!1);else if(e){var n=t.data(h)||{},r=e===!0;!r&&n.active&&n.active[e]&&(n.totalActive--,delete n.active[e]),(r||!n.totalActive)&&(t.removeClass(p),t.removeData(h))}}function C(t,e){if(g.disabled)return!0;if(l(t,d))return g.disabled||g.running;do{if(0===e.length)break;var n=l(e,d),r=n?g:e.data(h),i=r&&(!!r.disabled||r.running||r.totalActive>0);if(n||i)return i;if(n)return!0}while(e=e.parent());return!0}var T=0;d.data(h,g),m.$$postDigest(function(){m.$$postDigest(function(){g.running=!1})});var k=i.classNameFilter(),S=k?function(t){return k.test(t)}:function(){return!0};return{enter:function(n,r,i,o){n=e.element(n),r=a(r),i=a(i),this.enabled(!1,n),t.enter(n,r,i),m.$$postDigest(function(){n=s(n),b("enter","ng-enter",n,r,i,u,o)})},leave:function(n,r){n=e.element(n),w(n),this.enabled(!1,n),m.$$postDigest(function(){b("leave","ng-leave",s(n),null,null,function(){t.leave(n)},r)})},move:function(n,r,i,o){n=e.element(n),r=a(r),i=a(i),w(n),this.enabled(!1,n),t.move(n,r,i),m.$$postDigest(function(){n=s(n),b("move","ng-move",n,r,i,u,o)})},addClass:function(n,r,i){n=e.element(n),n=s(n),b("addClass",r,n,null,null,function(){t.addClass(n,r)},i)},removeClass:function(n,r,i){n=e.element(n),n=s(n),b("removeClass",r,n,null,null,function(){t.removeClass(n,r)},i)},setClass:function(n,r,i,o){n=e.element(n),n=s(n),b("setClass",[r,i],n,null,null,function(){t.setClass(n,r,i)},o)},enabled:function(t,e){switch(arguments.length){case 2:if(t)x(e);else{var n=e.data(h)||{};n.disabled=!0,e.data(h,n)}break;case 1:g.disabled=!t;break;default:t=!g.disabled}return!!t}}}]),i.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,i,a,s){function l(t,e){L&&L(),Y.push(e),L=s(function(){c(Y,function(t){t()}),Y=[],L=null,V={}})}function f(t,n){var r=o(t);t=e.element(r),J.push(t);var i=Date.now()+n;G>=i||(a.cancel(Q),G=i,Q=a(function(){h(J),J=[]},n,!1))}function h(t){c(t,function(t){var e=t.data(I);e&&(e.closeAnimationFn||u)()})}function p(t,e){var n=e?V[e]:null;if(!n){var i,o,a,s,l=0,u=0,f=0,h=0;c(t,function(t){if(t.nodeType==d){var e=r.getComputedStyle(t)||{};a=e[N+H],l=Math.max(g(a),l),s=e[N+F],i=e[N+P],u=Math.max(g(i),u),o=e[j+P],h=Math.max(g(o),h);var n=g(e[j+H]);n>0&&(n*=parseInt(e[j+R],10)||1),f=Math.max(n,f)}}),n={total:0,transitionPropertyStyle:s,transitionDurationStyle:a,transitionDelayStyle:i,transitionDelay:u,transitionDuration:l,animationDelayStyle:o,animationDelay:h,animationDuration:f},e&&(V[e]=n)}return n}function g(t){var n=0,r=e.isString(t)?t.split(/\s*,\s*/):[];return c(r,function(t){n=Math.max(parseFloat(t)||0,n)}),n}function v(t){var e=t.parent(),n=e.data(q);return n||(e.data(q,++X),n=X),n+"-"+o(t).getAttribute("class")}function m(t,e,n,r){var i=v(e),o=i+" "+n,a=V[o]?++V[o].total:0,s={};if(a>0){var l=n+"-stagger",c=i+" "+l,f=!V[c];f&&e.addClass(l),s=p(e,c),f&&e.removeClass(l)}r=r||function(t){return t()},e.addClass(n);var d=e.data(I)||{},h=r(function(){return p(e,o)}),g=h.transitionDuration,m=h.animationDuration;if(0===g&&0===m)return e.removeClass(n),!1;e.data(I,{running:d.running||0,itemIndex:a,stagger:s,timings:h,closeAnimationFn:u});var y=d.running>0||"setClass"==t;return g>0&&$(e,n,y),m>0&&s.animationDelay>0&&0===s.animationDuration&&b(e),!0}function y(t){return"ng-enter"==t||"ng-move"==t||"ng-leave"==t}function $(t,e,n){y(e)||!n?o(t).style[N+F]="none":t.addClass(B)}function b(t){o(t).style[j]="none 0s"}function w(t){var e=N+F,n=o(t);n.style[e]&&n.style[e].length>0&&(n.style[e]=""),t.removeClass(B)}function x(t){var e=j,n=o(t);n.style[e]&&n.style[e].length>0&&(n.style[e]="")}function C(t,e,n,r){function i(){e.off($,a),e.removeClass(u),_(e,n);var t=o(e);for(var r in w)t.style.removeProperty(w[r])}function a(t){t.stopPropagation();var e=t.originalEvent||t,n=e.$manualTimeStamp||e.timeStamp||Date.now(),i=parseFloat(e.elapsedTime.toFixed(W));Math.max(n-y,0)>=m&&i>=g&&r()}var s=o(e),l=e.data(I);if(-1==s.getAttribute("class").indexOf(n)||!l)return void r();var u="";c(n.split(" "),function(t,e){u+=(e>0?" ":"")+t+"-active"});var d=l.stagger,h=l.timings,p=l.itemIndex,g=Math.max(h.transitionDuration,h.animationDuration),v=Math.max(h.transitionDelay,h.animationDelay),m=v*U,y=Date.now(),$=O+" "+D,b="",w=[];if(h.transitionDuration>0){var x=h.transitionPropertyStyle;-1==x.indexOf("all")&&(b+=M+"transition-property: "+x+";",b+=M+"transition-duration: "+h.transitionDurationStyle+";",w.push(M+"transition-property"),w.push(M+"transition-duration"))}if(p>0){if(d.transitionDelay>0&&0===d.transitionDuration){var C=h.transitionDelayStyle;b+=M+"transition-delay: "+T(C,d.transitionDelay,p)+"; ",w.push(M+"transition-delay")}d.animationDelay>0&&0===d.animationDuration&&(b+=M+"animation-delay: "+T(h.animationDelayStyle,d.animationDelay,p)+"; ",w.push(M+"animation-delay"))}if(w.length>0){var k=s.getAttribute("style")||"";s.setAttribute("style",k+"; "+b)}e.on($,a),e.addClass(u),l.closeAnimationFn=function(){i(),r()};var S=p*(Math.max(d.animationDelay,d.transitionDelay)||0),E=(v+g)*z,A=(S+E)*U;return l.running++,f(e,A),i}function T(t,e,n){var r="";return c(t.split(","),function(t,i){r+=(i>0?",":"")+(n*e+parseInt(t,10))+"s"}),r}function k(t,e,n,r){return m(t,e,n,r)?function(t){t&&_(e,n)}:void 0}function S(t,e,n,r){return e.data(I)?C(t,e,n,r):(_(e,n),void r())}function E(t,e,n,r){var i=k(t,e,n);if(!i)return void r();var o=i;return l(e,function(){w(e,n),x(e),o=S(t,e,n,r)}),function(t){(o||u)(t)}}function _(t,e){t.removeClass(e);var n=t.data(I);n&&(n.running&&n.running--,n.running&&0!==n.running||t.removeData(I))}function A(t,n){var r="";return t=e.isArray(t)?t:t.split(/\s+/),c(t,function(t,e){t&&t.length>0&&(r+=(e>0?" ":"")+t+n)}),r}var N,D,j,O,M="";t.ontransitionend===n&&t.onwebkittransitionend!==n?(M="-webkit-",N="WebkitTransition",D="webkitTransitionEnd transitionend"):(N="transition",D="transitionend"),t.onanimationend===n&&t.onwebkitanimationend!==n?(M="-webkit-",j="WebkitAnimation",O="webkitAnimationEnd animationend"):(j="animation",O="animationend");var L,H="Duration",F="Property",P="Delay",R="IterationCount",q="$$ngAnimateKey",I="$$ngAnimateCSS3Data",B="ng-animate-block-transitions",W=3,z=1.5,U=1e3,V={},X=0,Y=[],Q=null,G=0,J=[];return{enter:function(t,e){return E("enter",t,"ng-enter",e)},leave:function(t,e){return E("leave",t,"ng-leave",e)},move:function(t,e){return E("move",t,"ng-move",e)},beforeSetClass:function(t,e,n,r){var i=A(n,"-remove")+" "+A(e,"-add"),o=k("setClass",t,i,function(r){var i=t.attr("class");t.removeClass(n),t.addClass(e);var o=r();return t.attr("class",i),o});return o?(l(t,function(){w(t,i),x(t),r()}),o):void r()},beforeAddClass:function(t,e,n){var r=k("addClass",t,A(e,"-add"),function(n){t.addClass(e);var r=n();return t.removeClass(e),r});return r?(l(t,function(){w(t,e),x(t),n()}),r):void n()},setClass:function(t,e,n,r){n=A(n,"-remove"),e=A(e,"-add");var i=n+" "+e;return S("setClass",t,i,r)},addClass:function(t,e,n){return S("addClass",t,A(e,"-add"),n)},beforeRemoveClass:function(t,e,n){var r=k("removeClass",t,A(e,"-remove"),function(n){var r=t.attr("class");t.removeClass(e);var i=n();return t.attr("class",r),i});return r?(l(t,function(){w(t,e),x(t),n()}),r):void n()},removeClass:function(t,e,n){return S("removeClass",t,A(e,"-remove"),n)}}}])}])}(window,window.angular),angular.module("toaster",["ngAnimate"]).service("toaster",["$rootScope",function(t){this.pop=function(e,n,r,i,o,a){this.toast={type:e,title:n,body:r,timeout:i,bodyOutputType:o,clickHandler:a},t.$broadcast("toaster-newToast")},this.clear=function(){t.$broadcast("toaster-clearToasts")}}]).constant("toasterConfig",{limit:0,"tap-to-dismiss":!0,"close-button":!1,"newest-on-top":!0,"time-out":5e3,"icon-classes":{error:"toast-error",info:"toast-info",wait:"toast-wait",success:"toast-success",warning:"toast-warning"},"body-output-type":"","body-template":"toasterBodyTmpl.html","icon-class":"toast-info","position-class":"toast-top-right","title-class":"toast-title","message-class":"toast-message"}).directive("toasterContainer",["$compile","$timeout","$sce","toasterConfig","toaster",function(t,e,n,r,i){return{replace:!0,restrict:"EA",scope:!0,link:function(t,o,a){function s(e){switch(e.type=u["icon-classes"][e.type],e.type||(e.type=u["icon-class"]),c++,angular.extend(e,{id:c}),e.bodyOutputType=e.bodyOutputType||u["body-output-type"],e.bodyOutputType){case"trustedHtml":e.html=n.trustAsHtml(e.body);break;case"template":e.bodyTemplate=e.body||u["body-template"]}t.configureTimer(e),u["newest-on-top"]===!0?(t.toasters.unshift(e),u.limit>0&&t.toasters.length>u.limit&&t.toasters.pop()):(t.toasters.push(e),u.limit>0&&t.toasters.length>u.limit&&t.toasters.shift())}function l(n,r){n.timeout=e(function(){t.removeToast(n.id)},r)}var u,c=0;u=angular.extend({},r,t.$eval(a.toasterOptions)),t.config={position:u["position-class"],title:u["title-class"],message:u["message-class"],tap:u["tap-to-dismiss"],closeButton:u["close-button"]},t.configureTimer=function(t){var e="number"==typeof t.timeout?t.timeout:u["time-out"];e>0&&l(t,e)},t.toasters=[],t.$on("toaster-newToast",function(){s(i.toast)}),t.$on("toaster-clearToasts",function(){t.toasters.splice(0,t.toasters.length)})},controller:["$scope","$element","$attrs",function(t){t.stopTimer=function(t){t.timeout&&(e.cancel(t.timeout),t.timeout=null)},t.restartTimer=function(e){e.timeout||t.configureTimer(e)},t.removeToast=function(e){var n=0;for(n;n<t.toasters.length&&t.toasters[n].id!==e;n++);t.toasters.splice(n,1)},t.click=function(e){if(t.config.tap===!0)if(e.clickHandler&&angular.isFunction(t.$parent.$eval(e.clickHandler))){var n=t.$parent.$eval(e.clickHandler)(e);n===!0&&t.removeToast(e.id)}else angular.isString(e.clickHandler)&&void 0,t.removeToast(e.id)}}],template:'<div  id="toast-container" ng-class="config.position"><div ng-repeat="toaster in toasters" class="toast" ng-class="toaster.type" ng-click="click(toaster)" ng-mouseover="stopTimer(toaster)"  ng-mouseout="restartTimer(toaster)"><button class="toast-close-button" ng-show="config.closeButton">&times;</button><div ng-class="config.title">{{toaster.title}}</div><div ng-class="config.message" ng-switch on="toaster.bodyOutputType"><div ng-switch-when="trustedHtml" ng-bind-html="toaster.html"></div><div ng-switch-when="template"><div ng-include="toaster.bodyTemplate"></div></div><div ng-switch-default >{{toaster.body}}</div></div></div></div>'}}]),function(){"use strict";angular.module("angular-loading-bar",["cfp.loadingBarInterceptor"]),angular.module("chieffancypants.loadingBar",["cfp.loadingBarInterceptor"]),angular.module("cfp.loadingBarInterceptor",["cfp.loadingBar"]).config(["$httpProvider",function(t){var e=["$q","$cacheFactory","$timeout","$rootScope","cfpLoadingBar",function(e,n,r,i,o){function a(){r.cancel(l),o.complete(),c=0,u=0}function s(e){var r,i=t.defaults;if("GET"!==e.method||e.cache===!1)return e.cached=!1,!1;r=e.cache===!0&&void 0===i.cache?n.get("$http"):void 0!==i.cache?i.cache:e.cache;var o=void 0!==r?void 0!==r.get(e.url):!1;return void 0!==e.cached&&o!==e.cached?e.cached:(e.cached=o,o)}var l,u=0,c=0,f=o.latencyThreshold;return{request:function(t){return t.ignoreLoadingBar||s(t)||(i.$broadcast("cfpLoadingBar:loading",{url:t.url}),0===u&&(l=r(function(){o.start()},f)),u++,o.set(c/u)),t},response:function(t){return t.config.ignoreLoadingBar||s(t.config)||(c++,i.$broadcast("cfpLoadingBar:loaded",{url:t.config.url}),c>=u?a():o.set(c/u)),t},responseError:function(t){return t.config.ignoreLoadingBar||s(t.config)||(c++,i.$broadcast("cfpLoadingBar:loaded",{url:t.config.url}),c>=u?a():o.set(c/u)),e.reject(t)}}}];t.interceptors.push(e)}]),angular.module("cfp.loadingBar",[]).provider("cfpLoadingBar",function(){this.includeSpinner=!0,this.includeBar=!0,this.latencyThreshold=100,this.startSize=.02,this.parentSelector="body",this.$get=["$document","$timeout","$animate","$rootScope",function(t,e,n,r){function i(){var i=t.find(f);e.cancel(c),g||(r.$broadcast("cfpLoadingBar:started"),g=!0,y&&n.enter(d,i),m&&n.enter(p,i),o($))}function o(t){if(g){var n=100*t+"%";h.css("width",n),v=t,e.cancel(u),u=e(function(){a()},250)}}function a(){if(!(s()>=1)){var t=0,e=s();t=e>=0&&.25>e?(3*Math.random()+3)/100:e>=.25&&.65>e?3*Math.random()/100:e>=.65&&.9>e?2*Math.random()/100:e>=.9&&.99>e?.005:0;var n=s()+t;o(n)}}function s(){return v}function l(){r.$broadcast("cfpLoadingBar:completed"),o(1),c=e(function(){n.leave(d,function(){v=0,g=!1}),n.leave(p)},500)}var u,c,f=this.parentSelector,d=angular.element('<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>'),h=d.find("div").eq(0),p=angular.element('<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>'),g=!1,v=0,m=this.includeSpinner,y=this.includeBar,$=this.startSize;return{start:i,set:o,status:s,inc:a,complete:l,includeSpinner:this.includeSpinner,latencyThreshold:this.latencyThreshold,parentSelector:this.parentSelector,startSize:this.startSize}}]})}(),function(){var t=this,e=t._,n={},r=Array.prototype,i=Object.prototype,o=Function.prototype,a=r.push,s=r.slice,l=r.concat,u=i.toString,c=i.hasOwnProperty,f=r.forEach,d=r.map,h=r.reduce,p=r.reduceRight,g=r.filter,v=r.every,m=r.some,y=r.indexOf,$=r.lastIndexOf,b=Array.isArray,w=Object.keys,x=o.bind,C=function(t){return t instanceof C?t:this instanceof C?void(this._wrapped=t):new C(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=C),exports._=C):t._=C,C.VERSION="1.6.0";var T=C.each=C.forEach=function(t,e,r){if(null==t)return t;if(f&&t.forEach===f)t.forEach(e,r);else if(t.length===+t.length){for(var i=0,o=t.length;o>i;i++)if(e.call(r,t[i],i,t)===n)return}else for(var a=C.keys(t),i=0,o=a.length;o>i;i++)if(e.call(r,t[a[i]],a[i],t)===n)return;return t};C.map=C.collect=function(t,e,n){var r=[];return null==t?r:d&&t.map===d?t.map(e,n):(T(t,function(t,i,o){r.push(e.call(n,t,i,o))}),r)};var k="Reduce of empty array with no initial value";C.reduce=C.foldl=C.inject=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),h&&t.reduce===h)return r&&(e=C.bind(e,r)),i?t.reduce(e,n):t.reduce(e);if(T(t,function(t,o,a){i?n=e.call(r,n,t,o,a):(n=t,i=!0)}),!i)throw new TypeError(k);return n},C.reduceRight=C.foldr=function(t,e,n,r){var i=arguments.length>2;if(null==t&&(t=[]),p&&t.reduceRight===p)return r&&(e=C.bind(e,r)),i?t.reduceRight(e,n):t.reduceRight(e);var o=t.length;if(o!==+o){var a=C.keys(t);o=a.length}if(T(t,function(s,l,u){l=a?a[--o]:--o,i?n=e.call(r,n,t[l],l,u):(n=t[l],i=!0)}),!i)throw new TypeError(k);return n},C.find=C.detect=function(t,e,n){var r;return S(t,function(t,i,o){return e.call(n,t,i,o)?(r=t,!0):void 0}),r},C.filter=C.select=function(t,e,n){var r=[];return null==t?r:g&&t.filter===g?t.filter(e,n):(T(t,function(t,i,o){e.call(n,t,i,o)&&r.push(t)}),r)},C.reject=function(t,e,n){return C.filter(t,function(t,r,i){return!e.call(n,t,r,i)},n)},C.every=C.all=function(t,e,r){e||(e=C.identity);var i=!0;return null==t?i:v&&t.every===v?t.every(e,r):(T(t,function(t,o,a){return(i=i&&e.call(r,t,o,a))?void 0:n}),!!i)};var S=C.some=C.any=function(t,e,r){e||(e=C.identity);var i=!1;return null==t?i:m&&t.some===m?t.some(e,r):(T(t,function(t,o,a){return i||(i=e.call(r,t,o,a))?n:void 0}),!!i)};C.contains=C.include=function(t,e){return null==t?!1:y&&t.indexOf===y?-1!=t.indexOf(e):S(t,function(t){return t===e})},C.invoke=function(t,e){var n=s.call(arguments,2),r=C.isFunction(e);return C.map(t,function(t){return(r?e:t[e]).apply(t,n)})},C.pluck=function(t,e){return C.map(t,C.property(e))},C.where=function(t,e){return C.filter(t,C.matches(e))},C.findWhere=function(t,e){return C.find(t,C.matches(e))},C.max=function(t,e,n){if(!e&&C.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.max.apply(Math,t);var r=-1/0,i=-1/0;return T(t,function(t,o,a){var s=e?e.call(n,t,o,a):t;s>i&&(r=t,i=s)}),r},C.min=function(t,e,n){if(!e&&C.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.min.apply(Math,t);var r=1/0,i=1/0;return T(t,function(t,o,a){var s=e?e.call(n,t,o,a):t;i>s&&(r=t,i=s)}),r},C.shuffle=function(t){var e,n=0,r=[];return T(t,function(t){e=C.random(n++),r[n-1]=r[e],r[e]=t}),r},C.sample=function(t,e,n){return null==e||n?(t.length!==+t.length&&(t=C.values(t)),t[C.random(t.length-1)]):C.shuffle(t).slice(0,Math.max(0,e))};var E=function(t){return null==t?C.identity:C.isFunction(t)?t:C.property(t)};C.sortBy=function(t,e,n){return e=E(e),C.pluck(C.map(t,function(t,r,i){return{value:t,index:r,criteria:e.call(n,t,r,i)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return t.index-e.index}),"value")};var _=function(t){return function(e,n,r){var i={};return n=E(n),T(e,function(o,a){var s=n.call(r,o,a,e);t(i,s,o)}),i}};C.groupBy=_(function(t,e,n){C.has(t,e)?t[e].push(n):t[e]=[n]}),C.indexBy=_(function(t,e,n){t[e]=n}),C.countBy=_(function(t,e){C.has(t,e)?t[e]++:t[e]=1}),C.sortedIndex=function(t,e,n,r){n=E(n);for(var i=n.call(r,e),o=0,a=t.length;a>o;){var s=o+a>>>1;n.call(r,t[s])<i?o=s+1:a=s}return o},C.toArray=function(t){return t?C.isArray(t)?s.call(t):t.length===+t.length?C.map(t,C.identity):C.values(t):[]},C.size=function(t){return null==t?0:t.length===+t.length?t.length:C.keys(t).length},C.first=C.head=C.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:0>e?[]:s.call(t,0,e)},C.initial=function(t,e,n){return s.call(t,0,t.length-(null==e||n?1:e))},C.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:s.call(t,Math.max(t.length-e,0))},C.rest=C.tail=C.drop=function(t,e,n){return s.call(t,null==e||n?1:e)},C.compact=function(t){return C.filter(t,C.identity)};var A=function(t,e,n){return e&&C.every(t,C.isArray)?l.apply(n,t):(T(t,function(t){C.isArray(t)||C.isArguments(t)?e?a.apply(n,t):A(t,e,n):n.push(t)}),n)};C.flatten=function(t,e){return A(t,e,[])},C.without=function(t){return C.difference(t,s.call(arguments,1))},C.partition=function(t,e){var n=[],r=[];return T(t,function(t){(e(t)?n:r).push(t)}),[n,r]},C.uniq=C.unique=function(t,e,n,r){C.isFunction(e)&&(r=n,n=e,e=!1);var i=n?C.map(t,n,r):t,o=[],a=[];return T(i,function(n,r){(e?r&&a[a.length-1]===n:C.contains(a,n))||(a.push(n),o.push(t[r]))}),o},C.union=function(){return C.uniq(C.flatten(arguments,!0))},C.intersection=function(t){var e=s.call(arguments,1);return C.filter(C.uniq(t),function(t){return C.every(e,function(e){return C.contains(e,t)})})},C.difference=function(t){var e=l.apply(r,s.call(arguments,1));return C.filter(t,function(t){return!C.contains(e,t)})},C.zip=function(){for(var t=C.max(C.pluck(arguments,"length").concat(0)),e=new Array(t),n=0;t>n;n++)e[n]=C.pluck(arguments,""+n);return e},C.object=function(t,e){if(null==t)return{};for(var n={},r=0,i=t.length;i>r;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},C.indexOf=function(t,e,n){if(null==t)return-1;var r=0,i=t.length;if(n){if("number"!=typeof n)return r=C.sortedIndex(t,e),t[r]===e?r:-1;r=0>n?Math.max(0,i+n):n}if(y&&t.indexOf===y)return t.indexOf(e,n);for(;i>r;r++)if(t[r]===e)return r;return-1},C.lastIndexOf=function(t,e,n){if(null==t)return-1;var r=null!=n;if($&&t.lastIndexOf===$)return r?t.lastIndexOf(e,n):t.lastIndexOf(e);for(var i=r?n:t.length;i--;)if(t[i]===e)return i;return-1},C.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=0,o=new Array(r);r>i;)o[i++]=t,t+=n;return o};var N=function(){};C.bind=function(t,e){var n,r;if(x&&t.bind===x)return x.apply(t,s.call(arguments,1));if(!C.isFunction(t))throw new TypeError;return n=s.call(arguments,2),r=function(){if(!(this instanceof r))return t.apply(e,n.concat(s.call(arguments)));N.prototype=t.prototype;var i=new N;N.prototype=null;var o=t.apply(i,n.concat(s.call(arguments)));return Object(o)===o?o:i}},C.partial=function(t){var e=s.call(arguments,1);return function(){for(var n=0,r=e.slice(),i=0,o=r.length;o>i;i++)r[i]===C&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return t.apply(this,r)}},C.bindAll=function(t){var e=s.call(arguments,1);if(0===e.length)throw new Error("bindAll must be passed function names");return T(e,function(e){t[e]=C.bind(t[e],t)}),t},C.memoize=function(t,e){var n={};return e||(e=C.identity),function(){var r=e.apply(this,arguments);return C.has(n,r)?n[r]:n[r]=t.apply(this,arguments)}},C.delay=function(t,e){var n=s.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},C.defer=function(t){return C.delay.apply(C,[t,1].concat(s.call(arguments,1)))},C.throttle=function(t,e,n){var r,i,o,a=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:C.now(),a=null,o=t.apply(r,i),r=i=null};return function(){var u=C.now();s||n.leading!==!1||(s=u);var c=e-(u-s);return r=this,i=arguments,0>=c?(clearTimeout(a),a=null,s=u,o=t.apply(r,i),r=i=null):a||n.trailing===!1||(a=setTimeout(l,c)),o}},C.debounce=function(t,e,n){var r,i,o,a,s,l=function(){var u=C.now()-a;e>u?r=setTimeout(l,e-u):(r=null,n||(s=t.apply(o,i),o=i=null))};return function(){o=this,i=arguments,a=C.now();var u=n&&!r;return r||(r=setTimeout(l,e)),u&&(s=t.apply(o,i),o=i=null),s}},C.once=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},C.wrap=function(t,e){return C.partial(e,t)},C.compose=function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},C.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},C.keys=function(t){if(!C.isObject(t))return[];if(w)return w(t);var e=[];for(var n in t)C.has(t,n)&&e.push(n);return e},C.values=function(t){for(var e=C.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=t[e[i]];return r},C.pairs=function(t){for(var e=C.keys(t),n=e.length,r=new Array(n),i=0;n>i;i++)r[i]=[e[i],t[e[i]]];return r},C.invert=function(t){for(var e={},n=C.keys(t),r=0,i=n.length;i>r;r++)e[t[n[r]]]=n[r];return e},C.functions=C.methods=function(t){var e=[];for(var n in t)C.isFunction(t[n])&&e.push(n);return e.sort()},C.extend=function(t){return T(s.call(arguments,1),function(e){if(e)for(var n in e)t[n]=e[n]}),t},C.pick=function(t){var e={},n=l.apply(r,s.call(arguments,1));return T(n,function(n){n in t&&(e[n]=t[n])}),e},C.omit=function(t){var e={},n=l.apply(r,s.call(arguments,1));for(var i in t)C.contains(n,i)||(e[i]=t[i]);return e},C.defaults=function(t){return T(s.call(arguments,1),function(e){if(e)for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t},C.clone=function(t){return C.isObject(t)?C.isArray(t)?t.slice():C.extend({},t):t},C.tap=function(t,e){return e(t),t};var D=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof C&&(t=t._wrapped),e instanceof C&&(e=e._wrapped);var i=u.call(t);if(i!=u.call(e))return!1;switch(i){case"[object String]":return t==String(e);case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var o=n.length;o--;)if(n[o]==t)return r[o]==e;var a=t.constructor,s=e.constructor;if(a!==s&&!(C.isFunction(a)&&a instanceof a&&C.isFunction(s)&&s instanceof s)&&"constructor"in t&&"constructor"in e)return!1;n.push(t),r.push(e);var l=0,c=!0;if("[object Array]"==i){if(l=t.length,c=l==e.length)for(;l--&&(c=D(t[l],e[l],n,r)););}else{for(var f in t)if(C.has(t,f)&&(l++,!(c=C.has(e,f)&&D(t[f],e[f],n,r))))break;if(c){for(f in e)if(C.has(e,f)&&!l--)break;c=!l}}return n.pop(),r.pop(),c};C.isEqual=function(t,e){return D(t,e,[],[])},C.isEmpty=function(t){if(null==t)return!0;if(C.isArray(t)||C.isString(t))return 0===t.length;for(var e in t)if(C.has(t,e))return!1;return!0},C.isElement=function(t){return!(!t||1!==t.nodeType)},C.isArray=b||function(t){return"[object Array]"==u.call(t)},C.isObject=function(t){return t===Object(t)},T(["Arguments","Function","String","Number","Date","RegExp"],function(t){C["is"+t]=function(e){return u.call(e)=="[object "+t+"]"}}),C.isArguments(arguments)||(C.isArguments=function(t){return!(!t||!C.has(t,"callee"))}),"function"!=typeof/./&&(C.isFunction=function(t){return"function"==typeof t}),C.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},C.isNaN=function(t){return C.isNumber(t)&&t!=+t},C.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==u.call(t)},C.isNull=function(t){return null===t},C.isUndefined=function(t){return void 0===t},C.has=function(t,e){return c.call(t,e)},C.noConflict=function(){return t._=e,this},C.identity=function(t){return t},C.constant=function(t){return function(){return t}},C.property=function(t){return function(e){return e[t]}},C.matches=function(t){return function(e){if(e===t)return!0;for(var n in t)if(t[n]!==e[n])return!1;return!0}},C.times=function(t,e,n){for(var r=Array(Math.max(0,t)),i=0;t>i;i++)r[i]=e.call(n,i);return r},C.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},C.now=Date.now||function(){return(new Date).getTime()};var j={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};j.unescape=C.invert(j.escape);var O={escape:new RegExp("["+C.keys(j.escape).join("")+"]","g"),unescape:new RegExp("("+C.keys(j.unescape).join("|")+")","g")};C.each(["escape","unescape"],function(t){C[t]=function(e){return null==e?"":(""+e).replace(O[t],function(e){return j[t][e]})}}),C.result=function(t,e){if(null==t)return void 0;var n=t[e];return C.isFunction(n)?n.call(t):n},C.mixin=function(t){T(C.functions(t),function(e){var n=C[e]=t[e];C.prototype[e]=function(){var t=[this._wrapped];return a.apply(t,arguments),P.call(this,n.apply(C,t))}})};var M=0;C.uniqueId=function(t){var e=++M+"";return t?t+e:e},C.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,H={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},F=/\\|'|\r|\n|\t|\u2028|\u2029/g;C.template=function(t,e,n){var r;n=C.defaults({},n,C.templateSettings);var i=new RegExp([(n.escape||L).source,(n.interpolate||L).source,(n.evaluate||L).source].join("|")+"|$","g"),o=0,a="__p+='";
t.replace(i,function(e,n,r,i,s){return a+=t.slice(o,s).replace(F,function(t){return"\\"+H[t]}),n&&(a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(a+="';\n"+i+"\n__p+='"),o=s+e.length,e}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(n.variable||"obj","_",a)}catch(s){throw s.source=a,s}if(e)return r(e,C);var l=function(t){return r.call(this,t,C)};return l.source="function("+(n.variable||"obj")+"){\n"+a+"}",l},C.chain=function(t){return C(t).chain()};var P=function(t){return this._chain?C(t).chain():t};C.mixin(C),T(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=r[t];C.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!=t&&"splice"!=t||0!==n.length||delete n[0],P.call(this,n)}}),T(["concat","join","slice"],function(t){var e=r[t];C.prototype[t]=function(){return P.call(this,e.apply(this._wrapped,arguments))}}),C.extend(C.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return C})}.call(this),function(){var t=angular.module("angularFileUpload",[]);t.service("$upload",["$http","$q","$timeout",function(t,e,n){function r(r){r.method=r.method||"POST",r.headers=r.headers||{},r.transformRequest=r.transformRequest||function(e,n){return window.ArrayBuffer&&e instanceof window.ArrayBuffer?e:t.defaults.transformRequest[0](e,n)};var i=e.defer();window.XMLHttpRequest.__isShim&&(r.headers.__setXHR_=function(){return function(t){t&&(r.__XHR=t,r.xhrFn&&r.xhrFn(t),t.upload.addEventListener("progress",function(t){i.notify(t)},!1),t.upload.addEventListener("load",function(t){t.lengthComputable&&i.notify(t)},!1))}}),t(r).then(function(t){i.resolve(t)},function(t){i.reject(t)},function(t){i.notify(t)});var o=i.promise;return o.success=function(t){return o.then(function(e){t(e.data,e.status,e.headers,r)}),o},o.error=function(t){return o.then(null,function(e){t(e.data,e.status,e.headers,r)}),o},o.progress=function(t){return o.then(null,null,function(e){t(e)}),o},o.abort=function(){return r.__XHR&&n(function(){r.__XHR.abort()}),o},o.xhr=function(t){return r.xhrFn=function(e){return function(){e&&e.apply(o,arguments),t.apply(o,arguments)}}(r.xhrFn),o},o}this.upload=function(e){e.headers=e.headers||{},e.headers["Content-Type"]=void 0,e.transformRequest=e.transformRequest||t.defaults.transformRequest;var n=new FormData,i=e.transformRequest,o=e.data;return e.transformRequest=function(t,n){if(o)if(e.formDataAppender)for(var r in o){var a=o[r];e.formDataAppender(t,r,a)}else for(var r in o){var a=o[r];if("function"==typeof i)a=i(a,n);else for(var s=0;s<i.length;s++){var l=i[s];"function"==typeof l&&(a=l(a,n))}t.append(r,a)}if(null!=e.file){var u=e.fileFormDataName||"file";if("[object Array]"===Object.prototype.toString.call(e.file))for(var c="[object String]"===Object.prototype.toString.call(u),s=0;s<e.file.length;s++)t.append(c?u:u[s],e.file[s],e.fileName&&e.fileName[s]||e.file[s].name);else t.append(u,e.file,e.fileName||e.file.name)}return t},e.data=n,r(e)},this.http=function(t){return r(t)}}]),t.directive("ngFileSelect",["$parse","$timeout",function(t,e){return function(n,r,i){var o=t(i.ngFileSelect);r.bind("change",function(t){var r,i,a=[];if(r=t.target.files,null!=r)for(i=0;i<r.length;i++)a.push(r.item(i));e(function(){o(n,{$files:a,$event:t})})}),("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&r.bind("touchend",function(t){t.preventDefault(),t.target.click()})}}]),t.directive("ngFileDropAvailable",["$parse","$timeout",function(t,e){return function(n,r,i){if("draggable"in document.createElement("span")){var o=t(i.ngFileDropAvailable);e(function(){o(n)})}}}]),t.directive("ngFileDrop",["$parse","$timeout","$location",function(t,e,n){return function(r,i,o){function a(t){return/^[\000-\177]*$/.test(t)}function s(t,r){var i=[],o=t.dataTransfer.items;if(o&&o.length>0&&o[0].webkitGetAsEntry&&"file"!=n.protocol())for(var s=0;s<o.length;s++){var u=o[s].webkitGetAsEntry();null!=u&&(a(u.name)?l(i,u):i.push(o[s].getAsFile()))}else{var c=t.dataTransfer.files;if(null!=c)for(var s=0;s<c.length;s++)i.push(c.item(s))}!function d(t){e(function(){f?d(10):r(i)},t||0)}()}function l(t,e){if(null!=e)if(e.isDirectory){var n=e.createReader();f++,n.readEntries(function(e){for(var n=0;n<e.length;n++)l(t,e[n]);f--})}else f++,e.file(function(e){f--,t.push(e)})}if("draggable"in document.createElement("span")){var u=null;i[0].addEventListener("dragover",function(n){if(n.stopPropagation(),n.preventDefault(),i.addClass(i[0].__drag_over_class_),e.cancel(u),!i[0].__drag_entered_){i[0].__drag_entered_=!0;var a=t(o.ngFileDragOverClass);if(a instanceof Function){var s=a(r,{$event:n});i[0].__drag_over_class_=s,i.addClass(i[0].__drag_over_class_)}else i[0].__drag_over_class_=o.ngFileDragOverClass||"dragover",i.addClass(i[0].__drag_over_class_)}},!1),i[0].addEventListener("dragenter",function(t){t.stopPropagation(),t.preventDefault()},!1),i[0].addEventListener("dragleave",function(){u=e(function(){i[0].__drag_entered_=!1,i.removeClass(i[0].__drag_over_class_)})},!1);var c=t(o.ngFileDrop);i[0].addEventListener("drop",function(t){t.stopPropagation(),t.preventDefault(),i[0].__drag_entered_=!1,i.removeClass(i[0].__drag_over_class_),s(t,function(e){c(r,{$files:e,$event:t})})},!1);var f=0}}}])}(),function(){"use strict";var t,e;t=jQuery,e=function(e,n){var r,i,o,a=this;return this.options=t.extend({title:null,footer:null,remote:null},t.fn.ekkoLightbox.defaults,n||{}),this.$element=t(e),r="",this.modal_id=this.options.modal_id?this.options.modal_id:"ekkoLightbox-"+Math.floor(1e3*Math.random()+1),o='<div class="modal-header"'+(this.options.title||this.options.always_show_close?"":' style="display:none"')+'><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">'+(this.options.title||"&nbsp;")+"</h4></div>",i='<div class="modal-footer"'+(this.options.footer?"":' style="display:none"')+">"+this.options.footer+"</div>",t(document.body).append('<div id="'+this.modal_id+'" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">'+o+'<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>'+i+"</div></div></div>"),this.modal=t("#"+this.modal_id),this.modal_dialog=this.modal.find(".modal-dialog").first(),this.modal_content=this.modal.find(".modal-content").first(),this.modal_body=this.modal.find(".modal-body").first(),this.lightbox_container=this.modal_body.find(".ekko-lightbox-container").first(),this.lightbox_body=this.lightbox_container.find("> div:first-child").first(),this.modal_arrows=null,this.border={top:parseFloat(this.modal_dialog.css("border-top-width"))+parseFloat(this.modal_content.css("border-top-width"))+parseFloat(this.modal_body.css("border-top-width")),right:parseFloat(this.modal_dialog.css("border-right-width"))+parseFloat(this.modal_content.css("border-right-width"))+parseFloat(this.modal_body.css("border-right-width")),bottom:parseFloat(this.modal_dialog.css("border-bottom-width"))+parseFloat(this.modal_content.css("border-bottom-width"))+parseFloat(this.modal_body.css("border-bottom-width")),left:parseFloat(this.modal_dialog.css("border-left-width"))+parseFloat(this.modal_content.css("border-left-width"))+parseFloat(this.modal_body.css("border-left-width"))},this.padding={top:parseFloat(this.modal_dialog.css("padding-top"))+parseFloat(this.modal_content.css("padding-top"))+parseFloat(this.modal_body.css("padding-top")),right:parseFloat(this.modal_dialog.css("padding-right"))+parseFloat(this.modal_content.css("padding-right"))+parseFloat(this.modal_body.css("padding-right")),bottom:parseFloat(this.modal_dialog.css("padding-bottom"))+parseFloat(this.modal_content.css("padding-bottom"))+parseFloat(this.modal_body.css("padding-bottom")),left:parseFloat(this.modal_dialog.css("padding-left"))+parseFloat(this.modal_content.css("padding-left"))+parseFloat(this.modal_body.css("padding-left"))},this.modal.on("show.bs.modal",this.options.onShow.bind(this)).on("shown.bs.modal",function(){return a.modal_shown(),a.options.onShown.call(a)}).on("hide.bs.modal",this.options.onHide.bind(this)).on("hidden.bs.modal",function(){return a.gallery&&t(document).off("keydown.ekkoLightbox"),a.modal.remove(),a.options.onHidden.call(a)}).modal("show",n),this.modal},e.prototype={modal_shown:function(){var e,n=this;return this.options.remote?(this.gallery=this.$element.data("gallery"),this.gallery&&(this.gallery_items="document.body"===this.options.gallery_parent_selector||""===this.options.gallery_parent_selector?t(document.body).find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'):this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'),this.gallery_index=this.gallery_items.index(this.$element),t(document).on("keydown.ekkoLightbox",this.navigate.bind(this)),this.options.directional_arrows&&this.gallery_items.length>1&&(this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="'+this.strip_stops(this.options.left_arrow_class)+'"></a><a href="#" class="'+this.strip_stops(this.options.right_arrow_class)+'"></a></div>'),this.modal_arrows=this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(),this.lightbox_container.find("a"+this.strip_spaces(this.options.left_arrow_class)).on("click",function(t){return t.preventDefault(),n.navigate_left()}),this.lightbox_container.find("a"+this.strip_spaces(this.options.right_arrow_class)).on("click",function(t){return t.preventDefault(),n.navigate_right()}))),this.options.type?"image"===this.options.type?this.preloadImage(this.options.remote,!0):"youtube"===this.options.type&&(e=this.getYoutubeId(this.options.remote))?this.showYoutubeVideo(e):"vimeo"===this.options.type?this.showVimeoVideo(this.options.remote):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"'):this.detectRemoteType(this.options.remote)):this.error("No remote target given")},strip_stops:function(t){return t.replace(/\./g,"")},strip_spaces:function(t){return t.replace(/\s/g,"")},isImage:function(t){return t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSwf:function(t){return t.match(/\.(swf)((\?|#).*)?$/i)},getYoutubeId:function(t){var e;return e=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),e&&11===e[2].length?e[2]:!1},getVimeoId:function(t){return t.indexOf("vimeo")>0?t:!1},navigate:function(t){if(t=t||window.event,39===t.keyCode||37===t.keyCode){if(39===t.keyCode)return this.navigate_right();if(37===t.keyCode)return this.navigate_left()}},navigate_left:function(){var e;if(1!==this.gallery_items.length)return 0===this.gallery_index?this.gallery_index=this.gallery_items.length-1:this.gallery_index--,this.$element=t(this.gallery_items.get(this.gallery_index)),this.updateTitleAndFooter(),e=this.$element.attr("data-remote")||this.$element.attr("href"),this.detectRemoteType(e,this.$element.attr("data-type"))},navigate_right:function(){var e,n;if(1!==this.gallery_items.length)return this.gallery_index===this.gallery_items.length-1?this.gallery_index=0:this.gallery_index++,this.$element=t(this.gallery_items.get(this.gallery_index)),n=this.$element.attr("data-remote")||this.$element.attr("href"),this.updateTitleAndFooter(),this.detectRemoteType(n,this.$element.attr("data-type")),this.gallery_index+1<this.gallery_items.length&&(e=t(this.gallery_items.get(this.gallery_index+1),!1),n=e.attr("data-remote")||e.attr("href"),"image"===e.attr("data-type")||this.isImage(n))?this.preloadImage(n,!1):void 0},detectRemoteType:function(t,e){var n;return"image"===e||this.isImage(t)?(this.options.type="image",this.preloadImage(t,!0)):"youtube"===e||(n=this.getYoutubeId(t))?(this.options.type="youtube",this.showYoutubeVideo(n)):"vimeo"===e||(n=this.getVimeoId(t))?(this.options.type="vimeo",this.showVimeoVideo(n)):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"')},updateTitleAndFooter:function(){var t,e,n,r;return n=this.modal_content.find(".modal-header"),e=this.modal_content.find(".modal-footer"),r=this.$element.data("title")||"",t=this.$element.data("footer")||"",r||this.options.always_show_close?n.css("display","").find(".modal-title").html(r||"&nbsp;"):n.css("display","none"),t?e.css("display","").html(t):e.css("display","none"),this},showLoading:function(){return this.lightbox_body.html('<div class="modal-loading">Loading..</div>'),this},showYoutubeVideo:function(t){var e,n,r;return e=560/315,r=this.$element.data("width")||560,r=this.checkDimensions(r),n=r/e,this.resize(r),this.lightbox_body.html('<iframe width="'+r+'" height="'+n+'" src="//www.youtube.com/embed/'+t+'?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe>'),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},showVimeoVideo:function(t){var e,n,r;return e=500/281,r=this.$element.data("width")||560,r=this.checkDimensions(r),n=r/e,this.resize(r),this.lightbox_body.html('<iframe width="'+r+'" height="'+n+'" src="'+t+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},error:function(t){return this.lightbox_body.html(t),this},preloadImage:function(e,n){var r,i=this;return r=new Image,(null==n||n===!0)&&(r.onload=function(){var e;return e=t("<img />"),e.attr("src",r.src),e.addClass("img-responsive"),i.lightbox_body.html(e),i.modal_arrows&&i.modal_arrows.css("display","block"),i.resize(r.width)},r.onerror=function(){return i.error("Failed to load image: "+e)}),r.src=e,r},resize:function(e){var n;return n=e+this.border.left+this.padding.left+this.padding.right+this.border.right,this.modal_dialog.css("width","auto").css("max-width",n),this.lightbox_container.find("a").css("padding-top",function(){return t(this).parent().height()/2}),this},checkDimensions:function(t){var e,n;return n=t+this.border.left+this.padding.left+this.padding.right+this.border.right,e=document.body.clientWidth,n>e&&(t=this.modal_body.width()),t},close:function(){return this.modal.modal("hide")}},t.fn.ekkoLightbox=function(n){return this.each(function(){var r;return r=t(this),n=t.extend({remote:r.attr("data-remote")||r.attr("href"),gallery_parent_selector:r.attr("data-parent"),type:r.attr("data-type")},n,r.data()),new e(this,n),this})},t.fn.ekkoLightbox.defaults={gallery_parent_selector:"*:not(.row)",left_arrow_class:".glyphicon .glyphicon-chevron-left",right_arrow_class:".glyphicon .glyphicon-chevron-right",directional_arrows:!0,type:null,always_show_close:!0,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){}}}.call(this),"undefined"==typeof jQuery)throw new Error("JavaScript requires jQuery");!function(t){"use strict";t(document).ready(function(){t("#popAlert").popover({container:"#popAlert",trigger:"click",html:!0,placement:"bottom",content:t("#alertContent").html()}),t("#popAlert").on("show.bs.popover",function(){t("#inboxAlert").popover("hide")}),t("#inboxAlert").popover({container:"#inboxAlert",trigger:"click",html:!0,placement:"bottom",content:t("#inboxContent").html()}),t("#inboxAlert").on("show.bs.popover",function(){t("#popAlert").popover("hide")}),t("#popAlert,#inboxAlert").on("shown.bs.popover",function(){t(".scroll-pane").enscroll({verticalTrackClass:"track",verticalHandleClass:"handle",showOnHover:!1})}),t('[class*="ios-switch"]').click(function(){t(this).is(":checked")?t(this).parent().parent().parent().find(".col-sm-14").addClass("social-active"):t(this).parent().parent().parent().find(".col-sm-14").removeClass("social-active")}),t(document).on("propertychange keyup input paste","input.data_field",function(){var e=t(this).val().length?1:0;t(this).next(".icon_clear").stop().fadeTo(200,e)}).on("click",".icon_clear",function(){t(this).delay(200).fadeTo(200,0).prev("input").val("")}),t(".icon-checked").on("click",function(){t(this).is(":checked")?t(this).next().children("span").addClass("social-active"):t(this).next().children("span").removeClass("social-active")}),t("#add-more-mobiles").click(function(){var e=t("#add-me").clone();e.find("input").val(""),e.removeAttr("id"),e.insertAfter("#add-me")}),t(document).delegate('*[data-toggle="lightbox"]',"click",function(e){e.preventDefault(),t(this).ekkoLightbox()})})}(jQuery);
'use strict';
var viberApp = angular.module('viberApp', [
    'ngRoute',
    'toaster',
    'angular-loading-bar',
    'ngAnimate',
    'ui.bootstrap',
    'angularFileUpload'
  ]);
// angular routes configuration
viberApp.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/dashboard.html',
      controller: 'dashboardCtrl',
      resolve: {
        vbAuth: function (vbAuth) {
          if (!vbAuth.isAuthenticated())
            return vbAuth.authenticateUser();
        }
      }
    }).when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'signupCntrl'
    }).when('/leaderboard', {
      templateUrl: 'views/leaderboard.html',
      controller: 'leaderboardCtrl'
    }).when('/rewards', {
      templateUrl: 'views/rewards.html',
      controller: 'lbRewardsCtrl'
    }).when('/mysettings', {
      templateUrl: 'views/mysettings.html',
      controller: 'lbMySettingsCntrl'
    }).when('/manage', {
      templateUrl: 'views/manage.html',
      controller: 'vbClusterCtrl',
      resolve: {
        cmambassadors: function (getambassadors) {
          return getambassadors.studentambassadors();
        }
      }
    }).when('/manageCMs', {
      templateUrl: 'views/manageclustermanagers.html',
      controller: 'vbProjectCtrl',
      resolve: {
        clustermanagers: function (getambassadors) {
          return getambassadors.studentambassadors();
        }
      }
    }).when('/managePMs', {
      templateUrl: 'views/manageprojectmanager.html',
      controller: 'vbZonalCtrl',
      resolve: {
        projectmanagers: function (getambassadors) {
          return getambassadors.studentambassadors();
        }
      }
    }).when('/winners-week1', {
      templateUrl: 'views/winners-week1.html',
      controller: 'vbWinnersCtrl',
      resolve: {
        week1winners: function (getwinners) {
          return getwinners.week1();
        }
      }
    }).otherwise({ redirectTo: '/' });
  }
]);
viberApp.controller('vbNavBarCtrl', [
  '$scope',
  '$window',
  '$http',
  function ($scope, $window, $http) {
    //var currentPage = {home:1,rewards:0,lb:0, mysettings:0};
    //vbSharedService.prepForBroadcast(currentPage);
    $scope.isManager = false;
    $scope.isProjectManager = false;
    $scope.isZonalManager = false;
    $scope.logout = function () {
      $window.location = '/logout';
    };
    $http.get('/getstudentdata').success(function (data) {
      if (angular.isObject(data) && angular.isNumber(data.role)) {
        $scope.user_role = data.role;
        switch ($scope.user_role) {
        case 1:
          $scope.isManager = true;
          break;
        case 2:
          $scope.isProjectManager = true;
          break;
        case 3:
          $scope.isZonalManager = true;
          break;
        }
      }
    });
  }
]);
viberApp.controller('vbWinnersCtrl', [
  '$scope',
  '$window',
  'week1winners',
  function ($scope, $window, week1winners) {
    $window.scrollTo(0, 0);
    $scope.winners = week1winners;
    void 0;
    var index = 0;
    _.each(week1winners, function (winner) {
      index = index + 1;
      if (index == 1) {
        winner.item = 'iPad Mini';
      } else if (index >= 2 && index <= 50) {
        winner.item = 'BookMyShow voucher';
      } else if (index >= 51 && index <= 75) {
        winner.item = 'Viber pendrive';
      } else if (index >= 76) {
        winner.item = 'Viber T-shirt';
      }
    });
  }
]);
viberApp.controller('dashboardCtrl', [
  '$rootScope',
  '$scope',
  'vbSharedService',
  'vbAuth',
  '$window',
  '$location',
  '$modal',
  '$http',
  'settingSubmit',
  'toaster',
  function ($rootScope, $scope, vbSharedService, vbAuth, $window, $location, $modal, $http, settingSubmit, toaster) {
    $rootScope.level1iscompleted = false;
    $rootScope.level2iscompleted = false;
    $rootScope.level3iscompleted = false;
    $scope.profilecomplete = true;
    if (!$scope.identity.currentUser.c)
      $window.location = '/auth/facebook';
    if (!angular.isObject($scope.identity.currentUser.college) || !angular.isObject($scope.identity.currentUser.college)) {
      void 0;
      $scope.profilecomplete = false;
    }
    $rootScope.manageclicked = false;
    if ($scope.identity.currentUser.complete1 == 100)
      $rootScope.level1iscompleted = true;
    if ($scope.identity.currentUser.complete1 == 100 && $scope.identity.currentUser.complete2 == 100)
      $rootScope.level2iscompleted = true;
    if ($scope.identity.currentUser.complete1 == 100 && $scope.identity.currentUser.complete2 == 100 && $scope.identity.currentUser.complete3 == 100)
      $rootScope.level3iscompleted = true;
    $window.scrollTo(0, 0);
    var currentPage = {
        home: 1,
        rewards: 0,
        lb: 0,
        mysettings: 0
      };
    vbSharedService.prepForBroadcast(currentPage);
    $rootScope.style1 = undefined;
    if ($scope.identity.currentUser.complete1 == 100) {
      $rootScope.style1 = { 'font-size': '14px' };
    }
    $rootScope.style2 = undefined;
    if ($scope.identity.currentUser.complete2 == 100) {
      $rootScope.style2 = { 'font-size': '14px' };
    }
    $rootScope.style3 = undefined;
    if ($scope.identity.currentUser.complete3 == 100) {
      $rootScope.style3 = { 'font-size': '14px' };
    }
    $rootScope.style4 = undefined;
    if ($scope.identity.currentUser.complete4 == 100) {
      $rootScope.style4 = { 'font-size': '14px' };
    }
    $scope.open = function (size) {
      var modalInstance = $modal.open({
          templateUrl: 'completeProfile.html',
          controller: completeProfileCtrl,
          size: size
        });
      modalInstance.result.then(function () {
        void 0;
      }, function () {
        void 0;
      });
    };
    var completeProfileCtrl = function ($scope, $modalInstance) {
      $scope.getLocation = function (val) {
        if (val.length >= 3) {
          return $http.get('/locations/' + val).then(function (res) {
            var places = [];
            angular.forEach(res.data, function (item) {
              places.push(item);
            });
            return places.slice(0, 4);
          });
        }
      };
      $scope.onSelectLocation = function ($item) {
        $scope.city_name = $item.CityName;
        $scope.city_id = $item.Id;
      };
      $scope.getCollege = function (val) {
        if (val.length >= 4) {
          return $http.get('/colleges/' + val).then(function (res) {
            var clges = [];
            angular.forEach(res.data, function (item) {
              clges.push(item);
            });
            return clges.slice(0, 4);
          });
        }
      };
      $scope.onSelectCollege = function ($item) {
        $scope.college_name = $item.CollegeName;
        $scope.college_id = $item.Id;
      };
      $scope.ok = function (isValid) {
        if (isValid) {
          if ($scope.college_name != undefined) {
            $scope.identity.currentUser.college.id = $scope.college_id;
            $scope.identity.currentUser.college.name = $scope.college_name;
          }
          if ($scope.city_name != undefined) {
            $scope.identity.currentUser.location.id = $scope.city_id;
            $scope.identity.currentUser.location.name = $scope.city_name;
          }
          settingSubmit.settingSubmitbutton($scope.identity.currentUser, $scope.identity.currentUser.facebookid).then(function (success) {
            $modalInstance.close();
            toaster.pop('success', '', 'Your profile has been saved successfully.');
          });
        }
      };
    };
    if (!$scope.profilecomplete)
      $scope.open();
    if ($scope.identity.currentUser.complete1 == 0 && $scope.profilecomplete && (!$rootScope.tour_seen || $rootScope.tour_seen == false)) {
      $(document).ready(function () {
        $(this).ekkoLightbox({ remote: 'images/tour.png' });
      });
      $rootScope.tour_seen = true;
    }
    //Face Init
    // Load the SDK Asynchronously
    (function (d) {
      var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = '//connect.facebook.net/en_US/all.js';
      ref.parentNode.insertBefore(js, ref);
    }(document));
  }
]);
viberApp.controller('leaderboardCtrl', [
  '$scope',
  '$rootScope',
  'vbSharedService',
  '$http',
  '$window',
  function ($scope, $rootScope, vbSharedService, $http, $window) {
    $window.scrollTo(0, 0);
    var currentPage = {
        home: 0,
        rewards: 0,
        lb: 1,
        mysettings: 0
      };
    vbSharedService.prepForBroadcast(currentPage);
    $rootScope.manageclicked = false;
    $http.get('/students/leaderboard/points').success(function (data) {
      if (angular.isObject(data)) {
        void 0;
        $scope.lbstudents = data;
        for (var i = 0; i < $scope.lbstudents.length; i++) {
          if (!$scope.lbstudents[i].facebookid)
            $scope.lbstudents[i].facebookid = 100006788625561;
        }
        void 0;
      } else {
      }
    });
    $scope.getLocation = function (val) {
      if (val.length >= 3) {
        return $http.get('/locations/' + val).then(function (res) {
          var places = [];
          angular.forEach(res.data, function (item) {
            places.push(item);
          });
          return places;
        });
      }
    };
    $scope.onSelectLocation = function ($item) {
      void 0;
      var place = $item.CityName;
      $http.get('/students/leaderboard/city/' + place).success(function (data) {
        if (angular.isObject(data)) {
          $scope.lbstudents = data;
          for (var i = 0; i < $scope.lbstudents.length; i++) {
            if (!$scope.lbstudents[i].facebookid)
              $scope.lbstudents[i].facebookid = 100006788625561;
          }
          void 0;
        } else {
        }
      });
    };
  }
]);
viberApp.controller('lbMySettingsCntrl', [
  '$scope',
  '$rootScope',
  '$http',
  'vbIdentity',
  'vbSharedService',
  '$window',
  'settingSubmit',
  function ($scope, $rootScope, $http, vbIdentity, vbSharedService, $window, settingSubmit) {
    $window.scrollTo(0, 0);
    var currentPage = {
        home: 0,
        rewards: 0,
        lb: 0,
        mysettings: 1
      };
    vbSharedService.prepForBroadcast(currentPage);
    $rootScope.manageclicked = false;
    $scope.tw_auth = false;
    $scope.user = $scope.identity.currentUser;
    void 0;
    //Referral URL
    $scope.returnUrl = function () {
      $http.get('/students/auth/' + $scope.user.facebookid).success(function (data) {
        if (!angular.isObject(data)) {
          var x = JSON.stringify(data).split('"');
        }
        vbIdentity.currentUser.referralId += 'app.thegoodvibes.in/s/' + x[1];
      });
    };
    if (!vbIdentity.currentUser.referralId) {
      vbIdentity.currentUser.referralId = '';
    }
    if (vbIdentity.currentUser.referralId == '') {
      $scope.returnUrl();
    }
    $scope.transactions = $scope.user.vibes_transaction;
    $scope.settingData = $scope.identity.currentUser;
    $scope.getLocation = function (val) {
      if (val.length >= 3) {
        return $http.get('/locations/' + val).then(function (res) {
          var places = [];
          angular.forEach(res.data, function (item) {
            places.push(item);
          });
          return places.slice(0, 4);
        });
      }
    };
    $scope.onSelectLocation = function ($item) {
      $scope.city_name = $item.CityName;
      $scope.city_id = $item.Id;
    };
    $scope.getCollege = function (val) {
      if (val.length >= 4) {
        return $http.get('/colleges/' + val).then(function (res) {
          var clges = [];
          angular.forEach(res.data, function (item) {
            clges.push(item);
          });
          return clges.slice(0, 4);
        });
      }
    };
    $scope.onSelectCollege = function ($item) {
      $scope.college_name = $item.CollegeName;
      $scope.college_id = $item.Id;
    };
    $scope.submitForm = function (isValid) {
      if (isValid) {
        $scope.identity.currentUser.name = $scope.user.name;
        $scope.identity.currentUser.gender = $scope.user.gender;
        $scope.identity.currentUser.mobile = $scope.user.mobile;
        $scope.identity.currentUser.email = $scope.user.email;
        if ($scope.college_name != undefined) {
          $scope.identity.currentUser.college.id = $scope.college_id;
          $scope.identity.currentUser.college.name = $scope.college_name;
        }
        if ($scope.city_name != undefined) {
          $scope.identity.currentUser.location.id = $scope.city_id;
          $scope.identity.currentUser.location.name = $scope.city_name;
        }
        //console.log(JSON.stringify($scope.identity.currentUser));
        settingSubmit.settingSubmitbutton($scope.identity.currentUser, $scope.user.facebookid).then(function (success) {
          if (success) {
            void 0;
          } else {
            void 0;
          }
        });
      }
    }  //    $scope.pagination = Pagination.getNew(10);
       //    $scope.pagination.numPages = Math.ceil($scope.transactions.length/$scope.pagination.perPage);
;
  }
]);
viberApp.controller('lbRewardsCtrl', [
  'vbSharedService',
  '$window',
  '$rootScope',
  function (vbSharedService, $window, $rootScope) {
    $window.scrollTo(0, 0);
    var currentPage = {
        home: 0,
        rewards: 1,
        lb: 0,
        mysettings: 0
      };
    vbSharedService.prepForBroadcast(currentPage);
    $rootScope.manageclicked = false;
  }
]);
viberApp.controller('vbClusterCtrl', [
  '$scope',
  '$rootScope',
  '$http',
  '$window',
  'toaster',
  'cmambassadors',
  function ($scope, $rootScope, $http, $window, toaster, cmambassadors) {
    $window.scrollTo(0, 0);
    //    var currentPage = {home: 0, rewards: 0, lb: 0, mysettings: 0,managecluster: 1};
    //    vbSharedService.prepForBroadcast(currentPage);
    $scope.email_ids = undefined;
    $rootScope.manageclicked = true;
    $scope.addStudent = function () {
      var email_array = $scope.email_ids.split(',');
      var userrole = 0;
      if ($scope.identity.currentUser.role && $scope.identity.currentUser.role != 0)
        userrole = $scope.identity.currentUser.role;
      var reqObject = {
          interns: email_array,
          email: $scope.identity.currentUser.email,
          role: userrole
        };
      $http.put('/students/manage/interns', reqObject).success(function (data) {
        if (data != 0) {
          $scope.getinterns();
          toaster.pop('success', '', data + ' out of' + email_array.length + ' Ambassadors were added successfully.');
        } else {
          toaster.pop('failure', '', 'Something went wrong. Please try again with valid mail id.');
        }
      }).error(function (err) {
        toaster.pop('failure', '', 'Something went wrong. Please try again.');
      });
    };
    $scope.getinterns = function () {
      $http.get('/manage/view/s').success(function (data) {
        if (data != 'x')
          $scope.interndata = data;
        else
          $scope.interndata = [];
      });
    };
    $scope.getinterns();
    $scope.deleteintern = function (index) {
      var reqBody = { email: $scope.interndata[index].email };
      $http.put('/students/manage/interns/delete', reqBody).success(function (data) {
        if (data == 1) {
          $scope.interndata = _.without($scope.interndata, $scope.interndata[index]);
          toaster.pop('success', '', 'Ambassador was removed successfully.');
        } else {
          toaster.pop('failure', '', 'Something went wrong. Please try again.');
        }
      }).error(function (error) {
        toaster.pop('failure', '', 'Something went wrong. Please try again.');
      });
    };
  }
]);
viberApp.controller('vbProjectCtrl', [
  '$scope',
  '$rootScope',
  '$http',
  '$window',
  'toaster',
  'clustermanagers',
  function ($scope, $rootScope, $http, $window, toaster, clustermanagers) {
    $window.scrollTo(0, 0);
    $scope.email_cluster = undefined;
    $rootScope.manageclicked = true;
    $scope.addClusterManager = function () {
      var email_array = $scope.email_cluster.split(',');
      var userrole = 0;
      if ($scope.identity.currentUser.role && $scope.identity.currentUser.role != 0 && $scope.identity.currentUser.role == 2)
        userrole = $scope.identity.currentUser.role;
      var reqObject = {
          interns: email_array,
          email: $scope.identity.currentUser.email,
          name: $scope.identity.currentUser.name,
          role: userrole
        };
      $http.put('/students/manage/interns', reqObject).success(function (data) {
        if (data != 0) {
          $scope.getClusterManagers();
          toaster.pop('success', '', data + ' out of' + email_array.length + ' Cluster Managers were added successfully.');
        } else {
          toaster.pop('failure', '', 'Something went wrong. Please try again with valid mail id.');
        }
      }).error(function (err) {
        toaster.pop('failure', '', 'Something went wrong. Please try again.');
      });
    };
    $scope.getClusterManagers = function () {
      $http.get('/manage/view/s').success(function (data) {
        if (data != 'x')
          $scope.ProjectManagerdata = data;
        else
          $scope.ProjectManagerdata = [];
      });
    };
    $scope.getClusterManagers();
    $scope.deleteClusterManager = function (index) {
      var reqBody = { email: $scope.ProjectManagerdata[index].email };
      $http.put('/students/manage/interns/delete', reqBody).success(function (data) {
        if (data == 1) {
          $scope.ProjectManagerdata = _.without($scope.ProjectManagerdata, $scope.ProjectManagerdata[index]);
          toaster.pop('success', '', 'Cluster Manager was removed successfully.');
        } else {
          toaster.pop('failure', '', 'Something went wrong. Please try again.');
        }
      }).error(function (error) {
        toaster.pop('failure', '', 'Something went wrong. Please try again.');
      });
    };
  }
]);
viberApp.controller('vbZonalCtrl', [
  '$scope',
  '$rootScope',
  '$http',
  '$window',
  'toaster',
  'projectmanagers',
  function ($scope, $rootScope, $http, $window, toaster, projectmanagers) {
    $window.scrollTo(0, 0);
    $scope.email_project = undefined;
    $rootScope.manageclicked = true;
    $scope.addProjectManager = function () {
      var email_array = $scope.email_project.split(',');
      var userrole = 0;
      if ($scope.identity.currentUser.role && $scope.identity.currentUser.role != 0 && $scope.identity.currentUser.role == 3)
        userrole = $scope.identity.currentUser.role;
      var reqObject = {
          interns: email_array,
          email: $scope.identity.currentUser.email,
          name: $scope.identity.currentUser.name,
          role: userrole
        };
      $http.put('/students/manage/interns', reqObject).success(function (data) {
        if (data != 0) {
          $scope.getProjectManagers();
          toaster.pop('success', '', data + ' out of' + email_array.length + ' Project Managers were added successfully.');
        } else {
          toaster.pop('failure', '', 'Something went wrong. Please try again with valid mail id.');
        }
      }).error(function (err) {
        toaster.pop('failure', '', 'Something went wrong. Please try again.');
      });
    };
    $scope.getProjectManagers = function () {
      $http.get('/manage/view/s').success(function (data) {
        if (data != 'x') {
          $scope.ZonalManagerdata = data;
        } else {
          $scope.ZonalManagerdata = [];
        }
      });
    };
    $scope.getProjectManagers();
    $scope.deleteProjectManager = function (index) {
      var reqBody = { email: $scope.ZonalManagerdata[index].email };
      $http.put('/students/manage/interns/delete', reqBody).success(function (data) {
        if (data == 1) {
          $scope.ZonalManagerdata = _.without($scope.ZonalManagerdata, $scope.ZonalManagerdata[index]);
          toaster.pop('success', '', 'Project Manager was removed successfully.');
        } else {
          toaster.pop('failure', '', 'Something went wrong. Please try again.');
        }
      }).error(function (error) {
        toaster.pop('failure', '', 'Something went wrong. Please try again.');
      });
    };
  }
]);
viberApp.factory('vbSharedService', [
  '$rootScope',
  function ($rootScope) {
    var sharedService = {};
    sharedService.message = '';
    sharedService.prepForBroadcast = function (currentPage) {
      this.currentPage = currentPage;
      this.broadcastItem();
    };
    sharedService.broadcastItem = function () {
      $rootScope.$broadcast('handlePageChange');
    };
    return sharedService;
  }
]);
viberApp.controller('vbLoginBarCtrl', [
  '$scope',
  'vbIdentity',
  'vbSharedService',
  function ($scope, vbIdentity, vbSharedService) {
    //$scope.loginlevelcomplete = false;
    $scope.$on('handlePageChange', function () {
      void 0;
      $scope.currentPage = vbSharedService.currentPage;
    });  //    console.log("Login Bar"+ JSON.stringify($scope.identity));
         //    var stage = $scope.identity.currentUser.stages;
         //    var level1= _.where(stage,{'stageid':'5390521624349ecc0c108c10'});
         //    var level2= _.where(stage,{'stageid':'53d36e0abb5c82917b3a3d94'});
         //
         //
         //    if(level1.completion==100) {
         //        $scope.loginlevelcomplete = true;
         //    }
  }
]);
/**
 * Created by Akshat Goel on 23-06-2014.
 */
var viberApp = angular.module('viberApp');
viberApp.factory('vbAuth', [
  '$http',
  'vbIdentity',
  '$q',
  '$rootScope',
  '$window',
  function ($http, vbIdentity, $q, $rootScope, $window) {
    return {
      authenticateUser: function () {
        var dfd = $q.defer();
        $http.get('/getstudentdata').success(function (data) {
          if (angular.isObject(data)) {
            if (data == '1') {
              $window.location = '/login';
              dfd.resolve(false);
            } else {
              vbIdentity.currentUser = data;
              //console.log("Data"+vbIdentity.currentUser.stages[0].name);
              $rootScope.identity = vbIdentity;
              var stage = vbIdentity.currentUser.stages;
              var level1 = _.where(stage, { 'stageid': '5390521624349ecc0c108c10' })[0];
              var level2 = _.where(stage, { 'stageid': '53d36e0abb5c82917b3a3d94' })[0];
              var level3 = _.where(stage, { 'stageid': '53db74a368425b29ecc82f4d' })[0];
              var level4 = _.where(stage, { 'stageid': '53f42cfeaa1725fd72ea601b' })[0];
              vbIdentity.currentUser.level2 = level2.name;
              vbIdentity.currentUser.complete2 = level2.completion;
              vbIdentity.currentUser.level1 = level1.name;
              vbIdentity.currentUser.complete1 = level1.completion;
              vbIdentity.currentUser.level3 = level3.name;
              vbIdentity.currentUser.complete3 = level3.completion;
              vbIdentity.currentUser.level4 = level4.name;
              vbIdentity.currentUser.complete4 = level4.completion;
              //vbIdentity.currentUser.complete = vbIdentity.currentUser.stages[0].completion;
              //                    var level_com = 0;
              //                    _.each(vbIdentity.currentUser.user_tasks,function(usertask){
              //                        level_com += (usertask.completed);
              //                    });
              //                    vbIdentity.currentUser.complete = level_com*20;
              dfd.resolve(true);
            }
          } else {
            $window.location = '/logout';
            //console.log('error loggin in');
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      },
      isAuthenticated: function () {
        return angular.isObject($rootScope.identity);
      }
    };
  }
]);
viberApp.factory('settingSubmit', [
  '$http',
  '$q',
  function ($http, $q) {
    return {
      settingSubmitbutton: function (form_data, fbid) {
        var dfd = $q.defer();
        //console.log("before put");
        //console.log($scope.identity.currentUser.facebookid);
        $http.put('/students/' + fbid, JSON.stringify(form_data)).success(function (data) {
          void 0;
          if (angular.isObject(data)) {
            //
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      }
    };
  }
]);
/**
 * Created by Akshat Goel on 23-06-2014.
 */
var viberApp = angular.module('viberApp');
viberApp.factory('vbIdentity', function () {
  return {
    currentUser: undefined,
    isAuthenticated: function () {
      return !!this.currentUser;
    }
  };
});
/**
 * Created by vaibhav on 8/7/14.
 */
var viberApp = angular.module('viberApp');
viberApp.factory('getwinners', [
  '$http',
  '$q',
  function ($http, $q) {
    return {
      week1: function () {
        var dfd = $q.defer();
        $http.get('/data/leaderboard/1').success(function (data) {
          if (angular.isObject(data)) {
            dfd.resolve(data);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      }
    };
  }
]);
viberApp.factory('getambassadors', [
  '$http',
  '$q',
  function ($http, $q) {
    return {
      studentambassadors: function () {
        var dfd = $q.defer();
        $http.get('/manage/view/s').success(function (data) {
          if (angular.isObject(data)) {
            dfd.resolve(data);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      }
    };
  }
]);
/**
 * Created by Ankit on 6/26/2014.
 */
var viberApp = angular.module('viberApp');
//viberApp.factory('postlink',['$http','$q',function($http,$q){
//
//    return{
//
//        postsharelink: function (identity,link,message,task,fbcheck,twcheck) {
//            var reqObj = {'taskid' :task['task_id'],'answers':{message:message,link:link},'platform':{'facebook':fbcheck, 'twitter':twcheck}};
//            var dfd = $q.defer();
//
//            $http.post('/socialshare',reqObj).success(function(data){
//
//                if(angular.isObject(data)){
//                    task.answers = data.answers;
//                    task.completiondata = data.completiondata;
//                    identity.vibes_transaction.push(task.completiondata.transaction);
//                    console.log(JSON.stringify(identity.vibes_transaction));
//                    //$scope.identity.currentUser.vibes_transaction += task.completiondata.transaction;
//                    dfd.resolve(true);
//                }
//                else{
//                    dfd.resolve(false);
//                }
//
//
//            });
//            return dfd.promise;
//
//        }
//
//    }
//
//
//}]);
viberApp.factory('getminileaderboard', [
  '$http',
  '$q',
  function ($http, $q) {
    return {
      postlink: function (link, message) {
        var dfd = $q.defer();
        $http.get('/students/leaderboard/points').success(function (data) {
          if (angular.isObject(data)) {
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      }
    };
  }
]);
/**
 * Created by Ankit Saxena on 25-06-2014.
 */
var viberApp = angular.module('viberApp');
viberApp.directive('navBar', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'vbNavBarCtrl'
  };
});
viberApp.directive('clusterManager', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/manage.html',
    controller: 'vbClusterCtrl'
  };
});
viberApp.directive('loginBar', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/loginbar.html',
    controller: 'vbLoginBarCtrl'
  };
});
viberApp.directive('taskUploadPhotos', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskuploadphotos.html',
    controller: 'vbUploadPhotosCtrl'
  };
});
viberApp.directive('taskInsertLinks', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskinsertlinks.html',
    controller: 'vbInsertLinksCtrl'
  };
});
viberApp.directive('taskInsertMobile', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskinsertmobile.html',
    controller: 'vbInsertMobileCtrl'
  };
});
viberApp.directive('taskSurvey', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/tasksurvey.html',
    controller: 'vbSurveyCtrl'
  };
});
viberApp.directive('miniLeaderboard', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/minileaderboard.html',
    controller: 'vbMiniLeaderBoardCtrl'
  };
});
viberApp.directive('socialConnect', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/socialconnect.html',
    controller: 'vbSocialConnectCtrl'
  };
});
viberApp.directive('cheatBox', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/cheatbox.html',
    controller: 'vbCheatBoxCtrl'
  };
});
viberApp.directive('inviteFbFriends', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/invitefbfriends.html',
    controller: 'vbinviteFrndsCtrl'
  };
});
viberApp.directive('likenFollow', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/likenfollow.html',
    controller: 'vblikenfollowCtrl'
  };
});
viberApp.directive('taskYuwa', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskyuwa.html',
    controller: 'vbTaskYuwaCtrl'
  };
});
viberApp.directive('supportYuwa', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/supportyuwa.html',
    controller: 'vbSupportYuwaCtrl'
  };
});
viberApp.directive('taskKnowviber', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskknowviber.html',
    controller: 'vbKnowViberCtrl'
  };
});
viberApp.directive('activateFriends', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/activatefriends.html',
    controller: 'vbActivateCtrl'
  };
});
viberApp.directive('goodvibesMind', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/goodvibesmind.html',
    controller: 'vbGoodvibesMindCtrl'
  };
});
viberApp.directive('goodvibesMean', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/goodvibesmean.html',
    controller: 'vbGoodvibesMeanCtrl'
  };
});
viberApp.directive('thinkofViber', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/thinkofviber.html',
    controller: 'vbThinkofViberCtrl'
  };
});
viberApp.directive('backtoSchool', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/backtoschool.html',
    controller: 'vbBacktoSchoolCtrl'
  };
});
viberApp.directive('doodleWars', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/doodlewars.html',
    controller: 'vbDoodleWarCtrl'
  };
});
viberApp.directive('daysofGoodvibes', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/5daysofgoodvibes.html',
    controller: 'vbdaysofGoodvibesCtrl'
  };
});
viberApp.directive('letsMakeDifference', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/letsmakedifference.html',
    controller: 'vbLetsMakeDifferenceCtrl'
  };
});
viberApp.directive('weekendToGoa', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/weekendtogoa.html',
    controller: 'vbWeekendGoaCtrl'
  };
});
viberApp.directive('memeComeTrue', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/memecometrue.html',
    controller: 'vbMemeComeTrueCtrl'
  };
});
viberApp.directive('goodvibesMeanLevel4', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/goodvibesmeanlevel4.html',
    controller: 'vbGoodvibesMeanLevel4Ctrl'
  };
});
viberApp.directive('goodVibesDesktop', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/goodvibesdesktop.html',
    controller: 'vbGoodvibesDesktopCtrl'
  };
});
'use strict';
angular.module('viberApp').controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.users = [
      {
        'name': 'Ankit Saxena',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '690323644'
      },
      {
        'name': 'Arti Sharma',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100003303986564'
      },
      {
        'name': 'Mayank Goyal',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100001081843471'
      },
      {
        'name': 'Rahul Saxena',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100001105429407'
      }
    ];
  }
]);
viberApp.controller('lbCntrl', [
  '$scope',
  function ($scope) {
    $scope.users = [
      {
        'name': 'Ankit Saxena',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '690323644'
      },
      {
        'name': 'Arti Sharma',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100003303986564'
      },
      {
        'name': 'Mayank Goyal',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100001081843471'
      },
      {
        'name': 'Rahul Saxena',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100001105429407'
      }
    ];
  }
]);
viberApp.controller('signupCntrl', [
  '$scope',
  '$http',
  '$location',
  function ($scope, $http, $location) {
    $scope.User = {};
    $scope.errorMessage = 'Error';
    $scope.Register = function () {
      void 0;
      $http({
        method: 'POST',
        url: '/signup',
        data: $.param($scope.User),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).success(function (data) {
        $location.path('/');
      }).error(function (err) {
        $scope.errorMessage = err;
      });
    };
  }
]);
/**
 * Created by Ankit Saxena on 25-06-2014.
 */
var viberApp = angular.module('viberApp');
Object.size = function (obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key))
      size++;
  }
  return size;
};
viberApp.controller('vbSurveyCtrl', [
  '$scope',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $http, toaster, $rootScope, $window) {
    $rootScope.ataskcomplete0 = false;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a951f9e4b041d6a3190438' })[0];
    if (angular.isObject(task) && task.completed == 1) {
      $rootScope.ataskcomplete0 = true;
    }
    $scope.person = undefined;
    $scope.old = undefined;
    $scope.learning = undefined;
    $scope.submitsurvey = function (isValid) {
      if (isValid) {
        var postObj = {
            'answers': {
              'answer1': $scope.person,
              'answer2': $scope.old,
              'answer3': $scope.learning
            },
            c: $scope.identity.currentUser.c,
            'taskid': '53a951f9e4b041d6a3190438'
          };
        $http.put('/survey', JSON.stringify(postObj)).success(function (data) {
          if (angular.isObject(data) && angular.isObject(data.completiondata)) {
            // because the service will not return Level inside completiondata if the user is doing the same task again
            $rootScope.ataskcomplete0 = true;
            task.completed = 1;
            $scope.identity.currentUser.complete1 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            if ($scope.identity.currentUser.complete1 == 100) {
              $rootScope.style1 = { 'font-size': '14px' };
              $rootScope.level1iscompleted = true;
            }
            toaster.pop('success', 'Task 1', 'You have successfully finished the first task');
          } else {
            $window.location = '/logout';
          }
        }).error(function (err) {
          void 0;
          toaster.pop('failure', 'Task 1', 'There was an error submitting your task, please try again');
        });  //            postsurvey.postSurvey(postObj).then(function(success){
             //                console.log(success);
             //                if(success){
             //                    var user_tasks = $scope.identity.currentUser.user_tasks;
             //                    var task = _.where(user_tasks,{'task_id':'53a951f9e4b041d6a3190438'})[0];
             //
             //                    $scope.identity.currentUser.points += 30;
             //
             //                }
             //                else{
             //                    console.log("failure");
             //                }
             //            });
      }
    };
  }
]);
viberApp.controller('vbInsertMobileCtrl', [
  '$scope',
  function ($scope) {
  }
]);
viberApp.controller('vbUploadPhotosCtrl', [
  '$scope',
  '$http',
  '$upload',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $http, $upload, toaster, $rootScope, $window) {
    //XML parser
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a9526be4b041d6a3190441' })[0];
    $scope.s3success = false;
    $scope.submitted = 0;
    $scope.added = 0;
    $scope.serSubmitted = [];
    $scope.done = [];
    $scope.taskcomplete1 = false;
    $scope.zeroselected = true;
    _.each(task.answers, function (answer) {
      $scope.submitted += answer.name.length;
      _.each(answer.name, function (names) {
        $scope.serSubmitted.push(names);  //$scope.serSubmitted.push(names);
      });
    });
    if (task.completed == 1)
      $scope.taskcomplete1 = true;
    $scope.onFileSelect = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files = $files;
      $scope.upload = [];
      $scope.s3added = [];
      if ($scope.files.length > 0) {
        $scope.zeroselected = false;
        var file = $scope.files[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 's3UploadExample/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTE4VDIwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJzM1VwbG9hZEV4YW1wbGUvIl0seyJidWNrZXQiOiJ2aWJlci11cGxvYWRzIn0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiYXBwbGljYXRpb24iXSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9XX0=',
            'Signature': '7OiVs5UxzIJdBbhfgjnuPaX6eKE='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUpload = function () {
      var reqbody = {
          'answers': { 'name': $scope.done },
          c: $scope.identity.currentUser.c,
          'taskid': '53a9526be4b041d6a3190441'
        };
      $scope.serSubmitted.push($scope.done[0]);
      $scope.s3added = [];
      $scope.zeroselected = true;
      $http.put('/uploadselfie', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete1 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            if ($scope.identity.currentUser.complete1 == 100) {
              $rootScope.style1 = { 'font-size': '14px' };
              $rootScope.level1iscompleted = true;
            }
            $scope.taskcomplete1 = true;
            task.completed = 1;
          }
          $scope.submitted += $scope.done.length;
          $scope.added = 0;
          $scope.s3success = false;
          toaster.pop('success', 'Task 4', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 4', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbinviteFrndsCtrl', [
  '$scope',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a9526be4b041d6a3190440' })[0];
    $scope.taskcomplete2 = false;
    if (task.completed == 1)
      $scope.taskcomplete2 = true;
    window.fbAsyncInit = function () {
      FB.init({
        appId: '247429375447674',
        status: true,
        cookie: true,
        xfbml: true
      });
    };
    // Load the SDK Asynchronously
    (function (d) {
      var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = '//connect.facebook.net/en_US/all.js';
      ref.parentNode.insertBefore(js, ref);
    }(document));
    $scope.sendRequest = function () {
      //var user_id = document.getElementsByName("user_id")[0].value;
      FB.ui({
        method: 'apprequests',
        message: 'Request App!!',
        display: 'popup'
      }, function (response) {
        if (response) {
          if (response.to) {
            var reqObj = {
                'answers': { 'fb_ids': response.to },
                c: $scope.identity.currentUser.c,
                'taskid': '53a9526be4b041d6a3190440'
              };
            $http.put('/invites', reqObj).success(function (data) {
              if (angular.isObject(data)) {
                if (angular.isObject(data.completiondata)) {
                  $scope.identity.currentUser.complete1 += data.completiondata.level;
                  $scope.identity.currentUser.points += data.completiondata.points;
                  if ($scope.identity.currentUser.complete1 == 100) {
                    $rootScope.style1 = { 'font-size': '14px' };
                    $rootScope.level1iscompleted = true;
                  }
                  $scope.taskcomplete2 = true;
                  task.completed = 1;
                  $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                  toaster.pop('success', 'Task 5', 'Your invites were sent successfully.');
                }
              } else {
                $window.location = '/logout';
              }
            }).error(function (err) {
              void 0;
              toaster.pop('failure', 'Task 5', 'There was an error submitting your task, please try again');
            });
          }
        }
      });
    };
  }
]);
viberApp.controller('vblikenfollowCtrl', [
  '$scope',
  '$http',
  '$window',
  '$rootScope',
  'toaster',
  function ($scope, $http, $window, $rootScope, toaster) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a9526be4b041d6a3190439' })[0];
    $scope.taskcomplete3 = false;
    if (task.completed == 1) {
      $scope.taskcomplete3 = true;
    }
    $rootScope.twfollow = false;
    $rootScope.fblike = false;
    $scope.$watch('fblike', function (currentValue, newValue) {
      if ($scope.taskcomplete3 == false && currentValue == true) {
        void 0;
        var reqbody = {
            'answers': { 'link': 'https://www.facebook.com/officialviberindia/' },
            'platform': { 'facebook': true },
            c: $scope.identity.currentUser.c,
            'taskid': '53a9526be4b041d6a3190439'
          };
        $http.put('/likefollow', reqbody).success(function (data) {
          if (angular.isObject(data)) {
            if (angular.isObject(data.completiondata)) {
              $scope.identity.currentUser.complete1 += data.completiondata.level;
              $scope.taskcomplete3 = true;
              task.completed = 1;
              $scope.identity.currentUser.points += data.completiondata.points;
              // $rootScope.level1stagecompletion += data.completiondata.level;
              if ($scope.identity.currentUser.complete1 == 100) {
                $rootScope.style1 = { 'font-size': '14px' };
                $rootScope.level1iscompleted = true;
              }
              $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            }
            toaster.pop('success', 'Facebook Like', 'Your Facebook like has been saved');
          } else {
            $window.location = '/logout';
          }
        }).error(function (err) {
          void 0;
          toaster.pop('failure', 'Task 2', 'There was an error submitting your task, please try again');
        });
      }
    });
    $scope.$watch('twfollow', function (currentValue, newValue) {
      if ($scope.taskcomplete3 == false && currentValue == true) {
        void 0;
        var reqbody = {
            'answers': { 'link': 'viber_india' },
            'platform': { 'twitter': true },
            c: $scope.identity.currentUser.c,
            'taskid': '53a9526be4b041d6a3190439'
          };
        $http.put('/likefollow', reqbody).success(function (data) {
          if (angular.isObject(data)) {
            if (angular.isObject(data.completiondata)) {
              $scope.identity.currentUser.complete1 += data.completiondata.level;
              $scope.taskcomplete3 = true;
              task.completed = 1;
              $scope.identity.currentUser.points += data.completiondata.points;
              //$rootScope.level1stagecompletion += data.completiondata.level;
              if ($scope.identity.currentUser.complete1 == 100) {
                $rootScope.style1 = { 'font-size': '14px' };
                $rootScope.level1iscompleted = true;
              }
              $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            }
            toaster.pop('success', 'Twitter Follow', 'Your Twitter Follow has been saved');
          } else {
            $window.location = '/logout';
          }
        }).error(function (err) {
          void 0;
          toaster.pop('failure', 'Task 2', 'There was an error submitting your task, please try again');
        });
      }
    });
    (function ($) {
      // Registering new tracking handler
      $.fn.iframeTracker = function (handler) {
        // Storing the new handler into handler list
        $.iframeTracker.handlersList.push(handler);
        // Binding boundary listener
        $(this).bind('mouseover', { handler: handler }, function (e) {
          e.data.handler.over = true;
          void 0;
          try {
            e.data.handler.overCallback(this);
          } catch (ex) {
          }
        }).bind('mouseout', { handler: handler }, function (e) {
          e.data.handler.over = false;
          $.iframeTracker.focusRetriever.focus();
          void 0;
          try {
            e.data.handler.outCallback(this);
          } catch (ex) {
          }
        });
      };
      // Iframe tracker common object
      $.iframeTracker = {
        focusRetriever: null,
        focusRetrieved: false,
        handlersList: [],
        isIE8AndOlder: false,
        init: function () {
          // Determine browser version (IE8-) ($.browser.msie is deprecated since jQuery 1.9)
          try {
            if ($.browser.msie == true && $.browser.version < 9) {
              this.isIE8AndOlder = true;
            }
          } catch (ex) {
            try {
              var matches = navigator.userAgent.match(/(msie) ([\w.]+)/i);
              if (matches[2] < 9) {
                this.isIE8AndOlder = true;
              }
            } catch (ex2) {
            }
          }
          // Listening window blur
          $(window).focus();
          $(window).blur(function (e) {
            $.iframeTracker.windowLoseFocus(e);
          });
          // Focus retriever
          $('body').append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>');
          this.focusRetriever = $('#focus_retriever');
          this.focusRetrieved = false;
          // Focus back to page
          $(document).mousemove(function (e) {
            if (document.activeElement && document.activeElement.tagName == 'IFRAME') {
              $.iframeTracker.focusRetriever.focus();
              $.iframeTracker.focusRetrieved = true;
            }
          });
          // Blur doesn't works correctly on IE8-, so we need to trigger it manually
          if (this.isIE8AndOlder) {
            this.focusRetriever.blur(function (e) {
              e.stopPropagation();
              e.preventDefault();
              $.iframeTracker.windowLoseFocus(e);
            });
          }
          // Keep focus on window (fix bug IE8-, focusable elements)
          if (this.isIE8AndOlder) {
            $('body').click(function (e) {
              $(window).focus();
            });
            $('form').click(function (e) {
              e.stopPropagation();
            });
            // Same thing for "post-DOMready" created forms (issue #6)
            try {
              $('body').on('click', 'form', function (e) {
                e.stopPropagation();
              });
            } catch (ex) {
              void 0;
            }
          }
        },
        windowLoseFocus: function (event) {
          for (var i in this.handlersList) {
            if (this.handlersList[i].over == true) {
              void 0;
              try {
                this.handlersList[i].blurCallback();
              } catch (ex) {
              }
            }
          }
        }
      };
      // Init the iframeTracker on document ready
      $(document).ready(function () {
        $.iframeTracker.init();
        void 0;
      });
    }(jQuery));
    $('#chaljatw').iframeTracker({
      blurCallback: function () {
        var scope = angular.element(document).scope();
        scope.$apply(function () {
          scope.$root.twfollow = true;
        });  //scope.$apply();
      }
    });
    $('#chaljafb').iframeTracker({
      blurCallback: function () {
        void 0;
        var scope = angular.element(document).scope();
        scope.$apply(function () {
          scope.$root.fblike = true;
        });
      }
    });
  }
]);
viberApp.controller('vbInsertLinksCtrl', [
  '$scope',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $http, toaster, $rootScope, $window) {
    $scope.rate = undefined;
    void 0;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a9526be4b041d6a3190442' })[0];
    $scope.taskcomplete4 = false;
    if (task.completed == 1)
      $scope.taskcomplete4 = true;
    $scope.submitForml1t3 = function (isValid) {
      if (isValid) {
        var reqbody = {
            'answers': { 'rate': $scope.rate },
            c: $scope.identity.currentUser.c,
            'taskid': '53a9526be4b041d6a3190442'
          };
        $http.put('/stickers', reqbody).success(function (data) {
          if (angular.isObject(data)) {
            if (angular.isObject(data.completiondata)) {
              // because the service will not return Level inside completiondata if the user is doing the same task again
              $scope.identity.currentUser.complete1 += data.completiondata.level;
              $scope.taskcomplete4 = true;
              task.completed = 1;
              $scope.identity.currentUser.points += data.completiondata.points;
              //$rootScope.level1stagecompletion += data.completiondata.level;
              if ($scope.identity.currentUser.complete1 == 100) {
                $rootScope.style1 = { 'font-size': '14px' };
                $rootScope.level1iscompleted = true;
              }
              toaster.pop('success', 'Task 3', 'You have successfully finished the third task');
              $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            }
          } else {
            $window.location = '/logout';
          }
        }).error(function (err) {
          void 0;
          toaster.pop('failure', 'Task 3', 'There was an error submitting your task, please try again');
        });
      }
    };
  }
]);
//Level 2 Tasks
viberApp.controller('vbKnowViberCtrl', [
  '$rootScope',
  '$scope',
  'toaster',
  '$http',
  '$window',
  function ($rootScope, $scope, toaster, $http, $window) {
    $rootScope.taskcomplete21 = false;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53d1e789bb5c82917b3a3a41' })[0];
    if (angular.isObject(task) && task.completed == 1) {
      $rootScope.taskcomplete21 = true;
    }
    $scope.task1que1 = undefined;
    $scope.task1que2 = undefined;
    $scope.task1que3 = undefined;
    $scope.task1que4 = undefined;
    $scope.task1que5 = undefined;
    $scope.task1que6 = undefined;
    $scope.task1que7 = undefined;
    $scope.task1que8 = undefined;
    $scope.task1que9 = undefined;
    $scope.task1que10 = undefined;
    $scope.submitquestions = function (isValid) {
      if (isValid) {
        var postObj = {
            'answers': {
              'answer1': $scope.task1que1,
              'answer2': $scope.task1que2,
              'answer3': $scope.task1que3,
              'answer4': $scope.task1que4,
              'answer5': $scope.task1que5,
              'answer6': $scope.task1que6,
              'answer7': $scope.task1que7,
              'answer8': $scope.task1que8,
              'answer9': $scope.task1que9,
              'answer10': $scope.task1que10
            },
            c: $scope.identity.currentUser.c,
            'taskid': '53d1e789bb5c82917b3a3a41'
          };
        $http.put('/knowviber', JSON.stringify(postObj)).success(function (data) {
          if (angular.isObject(data)) {
            if (angular.isObject(data.completiondata)) {
              // because the service will not return Level inside completiondata if the user is doing the same task again
              $rootScope.taskcomplete21 = true;
              task.completed = 1;
              $scope.identity.currentUser.complete2 += data.completiondata.level;
              $scope.identity.currentUser.points += data.completiondata.points;
              //$rootScope.level2stagecompletion += data.completiondata.level;
              if ($scope.identity.currentUser.complete2 == 100) {
                $rootScope.style2 = { 'font-size': '14px' };
                $rootScope.level2iscompleted = true;
              }
              $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
              toaster.pop('success', 'Task 1', 'You have successfully finished the first task');
            }
          } else {
            $window.location = '/logout';
          }
        }).error(function (err) {
          void 0;
          toaster.pop('failure', 'Task 1', 'There was an error submitting your task, please try again');
        });
      }
    };
  }
]);
viberApp.controller('vbActivateCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53d1e85abb5c82917b3a3a42' })[0];
    $scope.s3success22 = false;
    $scope.submitted22 = 0;
    $scope.added22 = 0;
    $scope.serSubmitted22 = [];
    $scope.done22 = [];
    $scope.taskcomplete22 = false;
    $scope.zeroselected22 = true;
    _.each(task.answers, function (answer) {
      $scope.submitted22 += answer.name.length;
      _.each(answer.name, function (names) {
        $scope.serSubmitted22.push(names);
      });
    });
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete22 = true;
    $scope.onFileSelecttask2 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files22 = $files;
      $scope.upload22 = [];
      $scope.s3added22 = [];
      if ($scope.files22.length > 0) {
        $scope.zeroselected22 = false;
        var file = $scope.files22[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done22[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload22[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level2task2/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTI2VDEyOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDJ0YXNrMi8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
            'Signature': 'cibG6Z0+a109JGj8XLucjaGD168='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added22 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added22.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success22 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadtask2 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done22 },
          c: $scope.identity.currentUser.c,
          'taskid': '53d1e85abb5c82917b3a3a42'
        };
      $scope.serSubmitted22.push($scope.done22[0]);
      $scope.s3added22 = [];
      $scope.zeroselected22 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete2 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            //$rootScope.level2stagecompletion += data.completiondata.level;
            if ($scope.identity.currentUser.complete2 == 100) {
              $rootScope.style2 = { 'font-size': '14px' };
              $rootScope.level2iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete22 = true;
            task.completed = 1;
          }
          $scope.submitted22 += $scope.done22.length;
          $scope.added22 = 0;
          $scope.s3success22 = false;
          toaster.pop('success', 'Task 2', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 2', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbGoodvibesMindCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53d1e8c9bb5c82917b3a3a43' })[0];
    $scope.s3success23 = false;
    $scope.submitted23 = 0;
    $scope.added23 = 0;
    $scope.serSubmitted23 = [];
    $scope.done23 = [];
    $scope.taskcomplete23 = false;
    $scope.zeroselected23 = true;
    _.each(task.answers, function (answer) {
      $scope.submitted23 += answer.name.length;
      _.each(answer.name, function (names) {
        $scope.serSubmitted23.push(names);  //$scope.serSubmitted.push(names);
      });
    });
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete23 = true;
    $scope.onFileSelecttask3 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files23 = $files;
      $scope.upload23 = [];
      $scope.s3added23 = [];
      if ($scope.files23.length > 0) {
        $scope.zeroselected23 = false;
        var file = $scope.files23[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done23[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload23[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level2task3/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTI2VDEyOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDJ0YXNrMy8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
            'Signature': 'HfuP7Wr/G2I1IsRIWoGgmM6GWvM='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added23 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added23.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success23 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadtask3 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done23 },
          c: $scope.identity.currentUser.c,
          'taskid': '53d1e8c9bb5c82917b3a3a43'
        };
      $scope.serSubmitted23.push($scope.done23[0]);
      $scope.s3added23 = [];
      $scope.zeroselected23 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete2 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            //$rootScope.level2stagecompletion += data.completiondata.level;
            if ($scope.identity.currentUser.complete2 == 100) {
              $rootScope.style2 = { 'font-size': '14px' };
              $rootScope.level2iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete23 = true;
            task.completed = 1;
          }
          $scope.submitted23 += $scope.done23.length;
          $scope.added23 = 0;
          $scope.s3success23 = false;
          toaster.pop('success', 'Task 3', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 3', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbTaskYuwaCtrl', [
  '$scope',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $http, toaster, $rootScope, $window) {
    $scope.rateyuwa = undefined;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53d1e90cbb5c82917b3a3a44' })[0];
    $scope.taskcomplete24 = false;
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete24 = true;
    $scope.submitForml2t4 = function (isValid) {
      if (isValid) {
        var reqbody = {
            'answers': { 'rate': $scope.rateyuwa },
            c: $scope.identity.currentUser.c,
            'taskid': '53d1e90cbb5c82917b3a3a44'
          };
        $http.put('/rating', reqbody).success(function (data) {
          if (angular.isObject(data)) {
            if (angular.isObject(data.completiondata)) {
              // because the service will not return Level inside completiondata if the user is doing the same task again
              $scope.identity.currentUser.complete2 += data.completiondata.level;
              $scope.taskcomplete24 = true;
              task.completed = 1;
              $scope.identity.currentUser.points += data.completiondata.points;
              //$rootScope.level2stagecompletion += data.completiondata.level;
              if ($scope.identity.currentUser.complete2 == 100) {
                $rootScope.style2 = { 'font-size': '14px' };
                $rootScope.level2iscompleted = true;
              }
              toaster.pop('success', 'Task 4', 'You have successfully finished the fourth task');
              $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            }
          } else {
            $window.location = '/logout';
          }
        }).error(function (err) {
          void 0;
          toaster.pop('failure', 'Task 4', 'There was an error submitting your task, please try again');
        });
      }
    };
  }
]);
viberApp.controller('vbSupportYuwaCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53d1ec3bbb5c82917b3a3a45' })[0];
    $scope.s3success25 = false;
    $scope.submitted25 = 0;
    $scope.added25 = 0;
    $scope.serSubmitted25 = [];
    $scope.done25 = [];
    $scope.taskcomplete25 = false;
    $scope.zeroselected25 = true;
    if (angular.isObject(task.answers)) {
      _.each(task.answers, function (answer) {
        $scope.submitted25 += answer.name.length;
        _.each(answer.name, function (names) {
          $scope.serSubmitted25.push(names);
        });
      });
    }
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete25 = true;
    $scope.onFileSelecttask5 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files25 = $files;
      $scope.upload25 = [];
      $scope.s3added25 = [];
      if ($scope.files25.length > 0) {
        $scope.zeroselected25 = false;
        var file = $scope.files25[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done25[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload25[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level2task5/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTI2VDEyOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDJ0YXNrNS8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
            'Signature': '4JcfOEgNdZIIEtFIaQ+PzmcZqN4='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added25 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added25.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success25 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadtask5 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done25 },
          c: $scope.identity.currentUser.c,
          'taskid': '53d1ec3bbb5c82917b3a3a45'
        };
      $scope.serSubmitted25.push($scope.done25[0]);
      $scope.s3added25 = [];
      $scope.zeroselected25 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete2 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            //$rootScope.level2stagecompletion += data.completiondata.level;
            if ($scope.identity.currentUser.complete2 == 100) {
              $rootScope.style2 = { 'font-size': '14px' };
              $rootScope.level2iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete25 = true;
            task.completed = 1;
          }
          $scope.submitted25 += $scope.done25.length;
          $scope.added25 = 0;
          $scope.s3success25 = false;
          toaster.pop('success', 'Task 5', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 5', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbGoodvibesMeanCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53db763c68425b29ecc82f4e' })[0];
    $scope.s3success31 = false;
    $scope.submitted31 = 0;
    $scope.added31 = 0;
    $scope.serSubmitted31 = [];
    $scope.done31 = [];
    $scope.taskcomplete31 = false;
    $scope.zeroselected31 = true;
    $scope.tasklimit31 = false;
    if (angular.isObject(task.answers)) {
      _.each(task.answers, function (answer) {
        $scope.submitted31 += answer.name.length;
        _.each(answer.name, function (names) {
          $scope.serSubmitted31.push(names);
        });
      });
    }
    if ($scope.submitted31 >= 10)
      $scope.tasklimit31 = true;
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete31 = true;
    $scope.onFileSelectl3task1 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files31 = $files;
      $scope.upload31 = [];
      $scope.s3added31 = [];
      if ($scope.files31.length > 0) {
        $scope.zeroselected31 = false;
        var file = $scope.files31[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done31[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload31[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level3task1/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTJUOTowMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwibGV2ZWwzdGFzazEvIl0seyJidWNrZXQiOiJ2aWJlci11cGxvYWRzIn0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiYXBwbGljYXRpb24iXSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9XX0=',
            'Signature': 't7RlrgHklk3bjuh6HIsUTWtpQrM='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added31 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added31.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success31 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadl3task1 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done31 },
          c: $scope.identity.currentUser.c,
          'taskid': '53db763c68425b29ecc82f4e'
        };
      $scope.serSubmitted31.push($scope.done31[0]);
      $scope.s3added31 = [];
      $scope.zeroselected31 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            if (data.completiondata.level)
              $scope.identity.currentUser.complete3 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            if ($scope.identity.currentUser.complete3 == 100) {
              $rootScope.style3 = { 'font-size': '14px' };
              $rootScope.level3iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete31 = true;
            task.completed = 1;
          }
          $scope.submitted31 += $scope.done31.length;
          $scope.added31 = 0;
          $scope.s3success31 = false;
          if ($scope.submitted31 >= 10)
            $scope.tasklimit31 = true;
          toaster.pop('success', 'Task 1', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 1', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbThinkofViberCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53db77ab68425b29ecc82f51' })[0];
    $scope.s3success32 = false;
    $scope.submitted32 = 0;
    $scope.added32 = 0;
    $scope.serSubmitted32 = [];
    $scope.done32 = [];
    $scope.taskcomplete32 = false;
    $scope.zeroselected32 = true;
    if (angular.isObject(task.answers)) {
      _.each(task.answers, function (answer) {
        $scope.submitted32 += answer.name.length;
        _.each(answer.name, function (names) {
          $scope.serSubmitted32.push(names);
        });
      });
    }
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete32 = true;
    $scope.onFileSelectl3task2 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files32 = $files;
      $scope.upload32 = [];
      $scope.s3added32 = [];
      if ($scope.files32.length > 0) {
        $scope.zeroselected32 = false;
        var file = $scope.files32[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done32[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload32[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level3task2/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTJUMTQ6MDA6MDAuMDAwWiIsImNvbmRpdGlvbnMiOltbInN0YXJ0cy13aXRoIiwiJGtleSIsImxldmVsM3Rhc2syLyJdLHsiYnVja2V0IjoidmliZXItdXBsb2FkcyJ9LHsiYWNsIjoicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsImFwcGxpY2F0aW9uIl0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifV19',
            'Signature': 'f8f0rDODccKRMiUXSKMpH+FAU7Y='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added32 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added32.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success32 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadl3task2 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done32 },
          c: $scope.identity.currentUser.c,
          'taskid': '53db77ab68425b29ecc82f51'
        };
      $scope.serSubmitted32.push($scope.done32[0]);
      $scope.s3added32 = [];
      $scope.zeroselected32 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete3 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            //$rootScope.level2stagecompletion += data.completiondata.level;
            if ($scope.identity.currentUser.complete3 == 100) {
              $rootScope.style3 = { 'font-size': '14px' };
              $rootScope.level3iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete32 = true;
            task.completed = 1;
          }
          $scope.submitted32 += $scope.done32.length;
          $scope.added32 = 0;
          $scope.s3success32 = false;
          toaster.pop('success', 'Task 2', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 2', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbBacktoSchoolCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53db781e68425b29ecc82f6a' })[0];
    $scope.s3success33 = false;
    $scope.submitted33 = 0;
    $scope.added33 = 0;
    $scope.serSubmitted33 = [];
    $scope.done33 = [];
    $scope.taskcomplete33 = false;
    $scope.zeroselected33 = true;
    if (angular.isObject(task.answers)) {
      _.each(task.answers, function (answer) {
        $scope.submitted33 += answer.name.length;
        _.each(answer.name, function (names) {
          $scope.serSubmitted33.push(names);
        });
      });
    }
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete33 = true;
    $scope.onFileSelectl3task3 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files33 = $files;
      $scope.upload33 = [];
      $scope.s3added33 = [];
      if ($scope.files33.length > 0) {
        $scope.zeroselected33 = false;
        var file = $scope.files33[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done33[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload33[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level3task3/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTJUMTA6MDA6MDAuMDAwWiIsImNvbmRpdGlvbnMiOltbInN0YXJ0cy13aXRoIiwiJGtleSIsImxldmVsM3Rhc2szLyJdLHsiYnVja2V0IjoidmliZXItdXBsb2FkcyJ9LHsiYWNsIjoicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsImFwcGxpY2F0aW9uIl0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifV19',
            'Signature': 'JNIFDKa05RXxCcLXJ6KLUQc9fAs='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added33 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added33.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success33 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadl3task3 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done33 },
          c: $scope.identity.currentUser.c,
          'taskid': '53db781e68425b29ecc82f6a'
        };
      $scope.serSubmitted33.push($scope.done33[0]);
      $scope.s3added33 = [];
      $scope.zeroselected33 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete3 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            //$rootScope.level2stagecompletion += data.completiondata.level;
            if ($scope.identity.currentUser.complete3 == 100) {
              $rootScope.style3 = { 'font-size': '14px' };
              $rootScope.level3iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete33 = true;
            task.completed = 1;
          }
          $scope.submitted33 += $scope.done33.length;
          $scope.added33 = 0;
          $scope.s3success33 = false;
          toaster.pop('success', 'Task 3', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 3', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbDoodleWarCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53db787f68425b29ecc82f6b' })[0];
    $scope.s3success34 = false;
    $scope.submitted34 = 0;
    $scope.added34 = 0;
    $scope.serSubmitted34 = [];
    $scope.done34 = [];
    $scope.taskcomplete34 = false;
    $scope.zeroselected34 = true;
    if (angular.isObject(task.answers)) {
      _.each(task.answers, function (answer) {
        $scope.submitted34 += answer.name.length;
        _.each(answer.name, function (names) {
          $scope.serSubmitted34.push(names);
        });
      });
    }
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete34 = true;
    $scope.onFileSelectl3task4 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files34 = $files;
      $scope.upload34 = [];
      $scope.s3added34 = [];
      if ($scope.files34.length > 0) {
        $scope.zeroselected34 = false;
        var file = $scope.files34[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done34[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload34[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level3task4/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTJUMTA6MDA6MDAuMDAwWiIsImNvbmRpdGlvbnMiOltbInN0YXJ0cy13aXRoIiwiJGtleSIsImxldmVsM3Rhc2s0LyJdLHsiYnVja2V0IjoidmliZXItdXBsb2FkcyJ9LHsiYWNsIjoicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsImFwcGxpY2F0aW9uIl0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifV19',
            'Signature': 'MyJrMv29eIlEBmTu+LrHNM680Fo='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added34 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added34.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success34 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadl3task4 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done34 },
          c: $scope.identity.currentUser.c,
          'taskid': '53db787f68425b29ecc82f6b'
        };
      $scope.serSubmitted34.push($scope.done34[0]);
      $scope.s3added34 = [];
      $scope.zeroselected34 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete3 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            //$rootScope.level2stagecompletion += data.completiondata.level;
            if ($scope.identity.currentUser.complete3 == 100) {
              $rootScope.style3 = { 'font-size': '14px' };
              $rootScope.level3iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete34 = true;
            task.completed = 1;
          }
          $scope.submitted34 += $scope.done34.length;
          $scope.added34 = 0;
          $scope.s3success34 = false;
          toaster.pop('success', 'Task 4', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 4', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbdaysofGoodvibesCtrl', [
  '$scope',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $http, toaster, $rootScope, $window) {
    $scope.link = 'https://www.youtube.com/watch?v=qQLhhS0vI8E&list=UUzeiZ7_xnJMepZN8h0kONig';
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53db790668425b29ecc82f6d' })[0];
    $scope.taskcomplete35 = false;
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete35 = true;
    if (angular.isObject($scope.identity.currentUser.facebook) && $scope.identity.currentUser.facebook.authorized == '1')
      $scope.checkedfb = true;
    window.fbAsyncInit = function () {
      FB.init({
        appId: '247429375447674',
        status: true,
        cookie: true,
        xfbml: true
      });
    };
    $scope.sharevideo = function (isValid) {
      if (isValid) {
        FB.ui({
          method: 'feed',
          name: '#Goodvibes community video',
          link: 'https://www.youtube.com/watch?v=qQLhhS0vI8E&list=UUzeiZ7_xnJMepZN8h0kONig',
          description: 'Take a look at the #GoodVibes community. Feel the excitement! Feel the passion! Feel the #GoodVibes',
          user_message_prompt: 'Share your thoughts about RELL'
        }, function (response) {
          if (response && response.post_id) {
            var reqObj = {
                answers: {
                  message: 'Post was published on facebook',
                  link: response.post_id
                },
                platform: { facebook: 1 },
                c: $scope.identity.currentUser.c,
                taskid: '53db790668425b29ecc82f6d'
              };
            $http.post('/socialshare', reqObj).success(function (data) {
              if (angular.isObject(data)) {
                if (angular.isObject(data.completiondata)) {
                  $scope.identity.currentUser.complete3 += data.completiondata.level;
                  $scope.identity.currentUser.points += data.completiondata.points;
                  //$rootScope.level2stagecompletion += data.completiondata.level;
                  if ($scope.identity.currentUser.complete3 == 100) {
                    $rootScope.style3 = { 'font-size': '14px' };
                    $rootScope.level3iscompleted = true;
                  }
                  $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                  $scope.taskcomplete35 = true;
                  task.completed = 1;
                }
                toaster.pop('success', 'Task 5', 'Your Message has been posted successfully to Facebook');
              } else {
                $window.location = '/logout';
              }
            }).error(function (err) {
              void 0;
              toaster.pop('failure', 'Facebook Post', 'There was an error in publishing your post');
            });
          } else {
            toaster.pop('failure', 'Facebook Post', 'There was an error in publishing your post');
          }
        });
      }
      ;
    };
  }
]);
viberApp.controller('vbLetsMakeDifferenceCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53f43394aa1725fd72ea601c' })[0];
    $scope.s3success41 = false;
    $scope.submitted41 = 0;
    $scope.added41 = 0;
    $scope.serSubmitted41 = [];
    $scope.done41 = [];
    $scope.taskcomplete41 = false;
    $scope.zeroselected41 = true;
    if (angular.isObject(task.answers)) {
      _.each(task.answers, function (answer) {
        $scope.submitted41 += answer.name.length;
        _.each(answer.name, function (names) {
          $scope.serSubmitted41.push(names);
        });
      });
    }
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete41 = true;
    $scope.onFileSelectl4task1 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files41 = $files;
      $scope.upload41 = [];
      $scope.s3added41 = [];
      if ($scope.files41.length > 0) {
        $scope.zeroselected41 = false;
        var file = $scope.files41[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done41[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload41[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level4task1/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTIxVDEwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDR0YXNrMS8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
            'Signature': 'LZJsJqreaSQUAIDF3jhnK3MtLh4='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added41 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added41.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success41 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadl4task1 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done41 },
          c: $scope.identity.currentUser.c,
          'taskid': '53f43394aa1725fd72ea601c'
        };
      $scope.serSubmitted41.push($scope.done41[0]);
      $scope.s3added41 = [];
      $scope.zeroselected41 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete4 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            //$rootScope.level2stagecompletion += data.completiondata.level;
            if ($scope.identity.currentUser.complete4 == 100) {
              $rootScope.style4 = { 'font-size': '14px' };
              $rootScope.level4iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete41 = true;
            task.completed = 1;
          }
          $scope.submitted41 += $scope.done41.length;
          $scope.added41 = 0;
          $scope.s3success41 = false;
          toaster.pop('success', 'Task 1', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 1', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbWeekendGoaCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53f433a9aa1725fd72ea601d' })[0];
    $scope.s3success42 = false;
    $scope.submitted42 = 0;
    $scope.added42 = 0;
    $scope.serSubmitted42 = [];
    $scope.done42 = [];
    $scope.taskcomplete42 = false;
    $scope.zeroselected42 = true;
    if (angular.isObject(task.answers)) {
      _.each(task.answers, function (answer) {
        $scope.submitted42 += answer.name.length;
        _.each(answer.name, function (names) {
          $scope.serSubmitted42.push(names);
        });
      });
    }
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete42 = true;
    $scope.onFileSelectl4task2 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files42 = $files;
      $scope.upload42 = [];
      $scope.s3added42 = [];
      if ($scope.files42.length > 0) {
        $scope.zeroselected42 = false;
        var file = $scope.files42[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done42[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload42[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level4task2/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTIxVDEwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDR0YXNrMi8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
            'Signature': 'QyLA547dCVjmNcnnCztl3DY80Cg='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added42 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added42.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success42 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadl4task2 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done42 },
          c: $scope.identity.currentUser.c,
          'taskid': '53f433a9aa1725fd72ea601d'
        };
      $scope.serSubmitted42.push($scope.done42[0]);
      $scope.s3added42 = [];
      $scope.zeroselected42 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete4 += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            //$rootScope.level2stagecompletion += data.completiondata.level;
            if ($scope.identity.currentUser.complete4 == 100) {
              $rootScope.style4 = { 'font-size': '14px' };
              $rootScope.level4iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete42 = true;
            task.completed = 1;
          }
          $scope.submitted42 += $scope.done42.length;
          $scope.added42 = 0;
          $scope.s3success42 = false;
          toaster.pop('success', 'Task 2', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 2', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
viberApp.controller('vbMemeComeTrueCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53f433beaa1725fd72ea601e' })[0];
    $scope.s3success43 = false;
    $scope.submitted43 = 0;
    $scope.added43 = 0;
    $scope.serSubmitted43 = [];
    $scope.done43 = [];
    $scope.taskcomplete43 = false;
    $scope.zeroselected43 = true;
    $scope.memeradio = undefined;
    if (angular.isObject(task.answers)) {
      _.each(task.answers, function (answer) {
        $scope.submitted43 += answer.name.length;
        _.each(answer.name, function (names) {
          $scope.serSubmitted43.push(names);
        });
      });
    }
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete43 = true;
    $scope.onFileSelectl4task3 = function ($files) {
      void 0;
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files43 = $files;
      $scope.upload43 = [];
      $scope.s3added43 = [];
      if ($scope.files43.length > 0) {
        $scope.zeroselected43 = false;
        var file = $scope.files43[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done43[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload43[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level4task3/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTIxVDEwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDR0YXNrMy8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
            'Signature': 'yEThizlvLwJYr9bMHA8KMIEstdE='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added43 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added43.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success43 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadl4task3 = function () {
      if ($scope.done43.length != 0)
        $scope.linktoshare = 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/level4task3/' + $scope.done43;
      else
        $scope.linktoshare = 'https://s3-ap-southeast-1.amazonaws.com/viber-uploads/' + $scope.memeradio;
      void 0;
      //https://viber-uploads.s3-ap-southeast-1.amazonaws.com/level4task3/$scope.done43
      window.fbAsyncInit = function () {
        void 0;
        FB.init({
          appId: '247429375447674',
          status: true,
          cookie: true,
          xfbml: true
        });
      };
      FB.getLoginStatus(function (response) {
        void 0;
        if (response.status === 'connected') {
          FB.api('/me/photos', 'POST', { 'url': $scope.linktoshare }, function (response) {
            if (response && response.post_id) {
              $scope.postid = response.post_id;
              var reqbody = {
                  'answers': { 'name': $scope.postid },
                  c: $scope.identity.currentUser.c,
                  'taskid': '53f433beaa1725fd72ea601e'
                };
              $scope.serSubmitted43.push($scope.done43[0]);
              $scope.s3added43 = [];
              $scope.zeroselected43 = true;
              $http.put('/fbsharepost', reqbody).success(function (data) {
                if (angular.isObject(data)) {
                  if (angular.isObject(data.completiondata)) {
                    $scope.identity.currentUser.complete4 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    //$rootScope.level2stagecompletion += data.completiondata.level;
                    if ($scope.identity.currentUser.complete4 == 100) {
                      $rootScope.style4 = { 'font-size': '14px' };
                      $rootScope.level4iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete43 = true;
                    task.completed = 1;
                  }
                  $scope.submitted43 += $scope.done45.length;
                  $scope.added43 = 0;
                  $scope.s3success43 = false;
                  toaster.pop('success', 'Task 3', 'Your photo was uploaded successfully.');
                } else {
                  $window.location = '/logout';
                }
              }).error(function (err) {
                void 0;
                toaster.pop('failure', 'Task 3', 'There was an error submitting your task, please try again');
              });
            }
          });  //                FB.api( "/690783934290236_711288332239796/likes"
               //                    , function (response) {
               //                        console.log(response);
               //                    });
               //                FB.api( "/690783934290236_711288332239796"
               //                    , function (response) {
               //                        console.log("Data  " + JSON.stringify(response));
               //                    });
        } else {
          void 0;
        }
      });
    };
  }
]);
viberApp.controller('vbGoodvibesMeanLevel4Ctrl', [
  '$scope',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53f433cbaa1725fd72ea601f' })[0];
    $scope.taskcomplete44 = false;
    //$scope.postmessage = undefined;
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete44 = true;
    $scope.sharePost = function (isValid) {
      if (isValid) {
        window.fbAsyncInit = function () {
          FB.init({
            appId: '247429375447674',
            status: true,
            cookie: true,
            xfbml: true
          });
        };
        void 0;
        FB.api('/me/feed', 'POST', { 'message': $scope.postmessage }, function (response) {
          void 0;
          if (response && !response.error) {
            void 0;
            $scope.postid = response.id;
            var reqbody = {
                'answers': { 'name': $scope.postid },
                c: $scope.identity.currentUser.c,
                'taskid': '53f433cbaa1725fd72ea601f'
              };
            $http.put('/fbsharepost', reqbody).success(function (data) {
              if (angular.isObject(data)) {
                if (angular.isObject(data.completiondata)) {
                  $scope.identity.currentUser.complete4 += data.completiondata.level;
                  $scope.identity.currentUser.points += data.completiondata.points;
                  //$rootScope.level2stagecompletion += data.completiondata.level;
                  if ($scope.identity.currentUser.complete4 == 100) {
                    $rootScope.style4 = { 'font-size': '14px' };
                    $rootScope.level4iscompleted = true;
                  }
                  $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                  $scope.taskcomplete44 = true;
                  task.completed = 1;
                }
                toaster.pop('success', 'Task 4', 'Your status is posted successfully.');
              } else {
                $window.location = '/logout';
              }
            }).error(function (err) {
              void 0;
              toaster.pop('failure', 'Task 4', 'There was an error submitting your task, please try again');
            });
          }
        });
      }
    };
  }
]);
viberApp.controller('vbGoodvibesDesktopCtrl', [
  '$scope',
  '$upload',
  '$http',
  'toaster',
  '$rootScope',
  '$window',
  function ($scope, $upload, $http, toaster, $rootScope, $window) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53f433daaa1725fd72ea6020' })[0];
    $scope.s3success45 = false;
    $scope.submitted45 = 0;
    $scope.added45 = 0;
    $scope.serSubmitted45 = [];
    $scope.done45 = [];
    $scope.taskcomplete45 = false;
    $scope.zeroselected45 = true;
    $scope.tasklimit45 = false;
    if (angular.isObject(task.answers)) {
      _.each(task.answers, function (answer) {
        $scope.submitted31 += answer.name.length;
        _.each(answer.name, function (names) {
          $scope.serSubmitted45.push(names);
        });
      });
    }
    if ($scope.submitted45 >= 2)
      $scope.tasklimit45 = true;
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete45 = true;
    $scope.onFileSelectl4task5 = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files45 = $files;
      $scope.upload45 = [];
      $scope.s3added45 = [];
      if ($scope.files45.length > 0) {
        $scope.zeroselected45 = false;
        var file = $scope.files45[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done45[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload45[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 'level4task5/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTIxVDExOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDR0YXNrNS8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
            'Signature': 'NeYPZ7D9RCmr+UEMqVB7VOTNiYY='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added45 += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added45.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success45 = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUploadl4task5 = function () {
      var reqbody = {
          'answers': { 'name': $scope.done45 },
          c: $scope.identity.currentUser.c,
          'taskid': '53f433daaa1725fd72ea6020'
        };
      $scope.serSubmitted45.push($scope.done45[0]);
      $scope.s3added45 = [];
      $scope.zeroselected45 = true;
      $http.put('/uploadphoto', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            if (data.completiondata.level) {
              $scope.identity.currentUser.complete4 += data.completiondata.level;
              $scope.taskcomplete45 = true;
              task.completed = 1;
            }
            $scope.identity.currentUser.points += data.completiondata.points;
            if ($scope.identity.currentUser.complete4 == 100) {
              $rootScope.style4 = { 'font-size': '14px' };
              $rootScope.level4iscompleted = true;
            }
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
          }
          $scope.submitted45 += $scope.done45.length;
          $scope.added45 = 0;
          $scope.s3success45 = false;
          if ($scope.submitted45 >= 2)
            $scope.tasklimit45 = true;
          toaster.pop('success', 'Task 5', 'Your photo was uploaded successfully.');
        } else {
          $window.location = '/logout';
        }
      }).error(function (err) {
        void 0;
        toaster.pop('failure', 'Task 5', 'There was an error submitting your task, please try again');
      });
    };
  }
]);
/**
 * Created by Ankit Saxena on 25-06-2014.
 */
var viberApp = angular.module('viberApp');
viberApp.controller('vbCheatBoxCtrl', [
  '$scope',
  function ($scope) {
  }
]);
viberApp.controller('vbSocialConnectCtrl', [
  '$scope',
  function ($scope) {
  }
]);
viberApp.controller('vbMiniLeaderBoardCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/students/leaderboard/points').success(function (data) {
      if (angular.isObject(data)) {
        $scope.lbstudents = data;
        for (var i = 0; i < $scope.lbstudents.length; i++) {
          if (!$scope.lbstudents[i].facebookid)
            $scope.lbstudents[i].facebookid = 100006788625561;
        }
        void 0;
      } else {
      }
    });
  }
]);