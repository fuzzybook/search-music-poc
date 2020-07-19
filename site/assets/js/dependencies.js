var e=function(){"use strict";function t(){}const i=e=>e;function n(e,t){for(const i in t)e[i]=t[i];return e}function s(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(s)}function a(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function d(e,t,i){const n=t.subscribe(i);e.$$.on_destroy.push(n.unsubscribe?()=>n.unsubscribe():n)}function c(e,t,i){if(e){const n=u(e,t,i);return e[0](n)}}function u(e,t,i){return e[1]?n({},n(t.$$scope.ctx,e[1](i?i(t):{}))):t.$$scope.ctx}function h(e,t,i,s){return e[1]?n({},n(t.$$scope.changed||{},e[1](s?s(i):{}))):t.$$scope.changed||{}}let p="undefined"!=typeof window?()=>window.performance.now():()=>Date.now(),f=e=>requestAnimationFrame(e);const g=new Set;let v,m=!1;function b(){g.forEach(e=>{e[0](p())||(g.delete(e),e[1]())}),(m=g.size>0)&&f(b)}function $(e,t){e.appendChild(t)}function y(e,t,i){e.insertBefore(t,i||null)}function w(e){e.parentNode.removeChild(e)}function x(e,t){for(;e.nextSibling&&e.nextSibling!==t;)e.parentNode.removeChild(e.nextSibling)}function T(e){for(;e.nextSibling;)e.parentNode.removeChild(e.nextSibling)}function k(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function _(e){return document.createElement(e)}function E(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function A(e){return document.createTextNode(e)}function P(){return A(" ")}function C(){return A("")}function M(e,t,i,n){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i,n)}function z(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)}function I(e,t){t=""+t,e.data!==t&&(e.data=t)}function N(e,t,i){e.style.setProperty(t,i)}function L(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const i=document.createElement("object");let n;return i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),i.type="text/html",i.tabIndex=-1,i.onload=(()=>{(n=i.contentDocument.defaultView).addEventListener("resize",t)}),/Trident/.test(navigator.userAgent)?(e.appendChild(i),i.data="about:blank"):(i.data="about:blank",e.appendChild(i)),{cancel:()=>{n&&n.removeEventListener&&n.removeEventListener("resize",t),e.removeChild(i)}}}function S(e,t,i){e.classList[i?"add":"remove"](t)}function H(e,t){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,!1,!1,t),i}let F,R=0,V={};function D(e,t,i,n,s,o,r,a=0){const l=16.666/n;let d="{\n";for(let e=0;e<=1;e+=l){const n=t+(i-t)*o(e);d+=100*e+`%{${r(n,1-n)}}\n`}const c=d+`100% {${r(i,1-i)}}\n}`,u=`__svelte_${function(e){let t=5381,i=e.length;for(;i--;)t=(t<<5)-t^e.charCodeAt(i);return t>>>0}(c)}_${a}`;if(!V[u]){if(!v){const e=_("style");document.head.appendChild(e),v=e.sheet}V[u]=!0,v.insertRule(`@keyframes ${u} ${c}`,v.cssRules.length)}const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${u} ${n}ms linear ${s}ms 1 both`,R+=1,u}function O(e,t){e.style.animation=(e.style.animation||"").split(", ").filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")).join(", "),t&&!--R&&f(()=>{if(R)return;let e=v.cssRules.length;for(;e--;)v.deleteRule(e);V={}})}function j(e){F=e}function W(){if(!F)throw new Error("Function called outside component initialization");return F}function B(e){W().$$.on_mount.push(e)}function X(e){W().$$.after_update.push(e)}function q(){const e=F;return(t,i)=>{const n=e.$$.callbacks[t];if(n){const s=H(t,i);n.slice().forEach(t=>{t.call(e,s)})}}}const Y=[],U=[],K=[],G=[],Z=Promise.resolve();let J,Q=!1;function ee(e){K.push(e)}function te(){const e=new Set;do{for(;Y.length;){const e=Y.shift();j(e),ie(e.$$)}for(;U.length;)U.pop()();for(let t=0;t<K.length;t+=1){const i=K[t];e.has(i)||(i(),e.add(i))}K.length=0}while(Y.length);for(;G.length;)G.pop()();Q=!1}function ie(e){e.fragment&&(e.update(e.dirty),r(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(ee))}function ne(e,t,i){e.dispatchEvent(H(`${t?"intro":"outro"}${i}`))}const se=new Set;let oe;function re(){oe={r:0,c:[],p:oe}}function ae(){oe.r||r(oe.c),oe=oe.p}function le(e,t){e&&e.i&&(se.delete(e),e.i(t))}function de(e,t,i,n){if(e&&e.o){if(se.has(e))return;se.add(e),oe.c.push(()=>{se.delete(e),n&&(i&&e.d(1),n())}),e.o(t)}}function ce(e,n,s,o){let l=n(e,s),d=o?0:1,c=null,u=null,h=null;function v(){h&&O(e,h)}function $(e,t){const i=e.b-d;return t*=Math.abs(i),{a:d,b:e.b,d:i,duration:t,start:e.start,end:e.start+t,group:e.group}}function y(n){const{delay:s=0,duration:o=300,easing:a=i,tick:y=t,css:w}=l,x={start:p()+s,b:n};n||(x.group=oe,oe.r+=1),c?u=x:(w&&(v(),h=D(e,d,n,o,s,a,w)),n&&y(0,1),c=$(x,o),ee(()=>ne(e,n,"start")),function(e){let t;m||(m=!0,f(b)),new Promise(i=>{g.add(t=[e,i])})}(t=>{if(u&&t>u.start&&(c=$(u,o),u=null,ne(e,c.b,"start"),w&&(v(),h=D(e,d,c.b,c.duration,0,a,l.css))),c)if(t>=c.end)y(d=c.b,1-d),ne(e,c.b,"end"),u||(c.b?v():--c.group.r||r(c.group.c)),c=null;else if(t>=c.start){const e=t-c.start;d=c.a+c.d*a(e/c.duration),y(d,1-d)}return!(!c&&!u)}))}return{run(e){a(l)?(J||(J=Promise.resolve()).then(()=>{J=null}),J).then(()=>{l=l(),y(e)}):y(e)},end(){v(),c=u=null}}}const ue="undefined"!=typeof window?window:global;function he(e){let t;const i=e.subscribe(e=>t=e);return i.unsubscribe?i.unsubscribe():i(),t}function pe(e,t,i){const{fragment:n,on_mount:o,on_destroy:l,after_update:d}=e.$$;n.m(t,i),ee(()=>{const t=o.map(s).filter(a);l?l.push(...t):r(t),e.$$.on_mount=[]}),d.forEach(ee)}function fe(e,t){e.$$.fragment&&(r(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function ge(e,t){e.$$.dirty||(Y.push(e),Q||(Q=!0,Z.then(te)),e.$$.dirty=o()),e.$$.dirty[t]=!0}function ve(e,i,n,s,a,l){const d=F;j(e);const c=i.props||{},u=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:o(),dirty:null};let h=!1;var p;u.ctx=n?n(e,c,(t,i)=>{u.ctx&&a(u.ctx[t],u.ctx[t]=i)&&(u.bound[t]&&u.bound[t](i),h&&ge(e,t))}):c,u.update(),h=!0,r(u.before_update),u.fragment=s(u.ctx),i.target&&(i.hydrate?u.fragment.l((p=i.target,Array.from(p.childNodes))):u.fragment.c(),i.intro&&le(e.$$.fragment),pe(e,i.target,i.anchor),te()),j(d)}class me{$destroy(){fe(this,1),this.$destroy=t}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}$set(){}}function be(e,i=t){let n;const s=[];function o(t){if(l(e,t)){if(e=t,!n)return;s.forEach(e=>e[1]()),s.forEach(t=>t[0](e))}}return{set:o,update:function(t){o(t(e))},subscribe:function(r,a=t){const l=[r,a];return s.push(l),1===s.length&&(n=i(o)||t),r(e),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&(n(),n=null)}}}}function $e(e,i,n){const s=!Array.isArray(e),o=s?[e]:e,l=i.length<2,d=[],c={subscribe:be(n,e=>{let n=!1;const c=[];let u=0,h=t;const p=()=>{if(u)return;h();const n=i(s?c[0]:c,e);l?e(n):h=a(n)?n:t},f=o.map((e,t)=>e.subscribe(e=>{c[t]=e,u&=~(1<<t),n&&p()},()=>{r(d),u|=1<<t}));return n=!0,p(),function(){r(f),h()}}).subscribe};return{subscribe(e,i=t){d.push(i);const n=c.subscribe(e,i);return()=>{const e=d.indexOf(i);-1!==e&&d.splice(e,1),n()}}}}const ye=be(.01),we=be(300),xe=$e([ye,we],([e,t],i)=>i(t/e)),Te=be(0);const ke=function(){const{subscribe:e,set:t,update:i}=be(0),n=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50];return{subscribe:e,increment:()=>{i(e=>(++e>n.length-1&&(e=n.length-1),ye.set(n[e]),e))},decrement:()=>{i(e=>(e>0&&e--,ye.set(n[e]),e))},toTime:e=>e/$scale,fillMixerWindow(e,i){let s;for(s=0;s!=n.length;s++)if(e/n[s]<i){t(s),ye.set(n[s]);break}},test(e,i,s,o){let r;for(r=0;r!=n.length&&!(i/n[r]<o);r++);n[r]<e&&(t(r),ye.set(n[r]))},reset:()=>{t(0),ye.set(n[0])}}}();const _e=function(){const{subscribe:e,set:t,update:i}=be({value:{left:0,right:0},min:0,max:0});let n={value:{left:0,right:0},min:0,max:0};return{subscribe:e,move:(e,t)=>{i(i=>("left"===t?(e>i.value.right&&(e=i.value.right),e<0&&(e=0)):(e<i.value.left&&(e=i.value.left),e>i.max&&(e=i.max)),i.value[t]=e,i))},max:e=>{i(t=>(t.max=e,t.value.right>e&&(t.value.right=e),t))},min:e=>{i(t=>(t.min=e,t))},set:e=>{e?t(e):e=n}}}(),Ee=be(0),Ae=be(0),Pe=be(0),Ce=be(!1),Me=be(null),ze=be(!1),Ie=be(!1),Ne=be(!1),Le=(()=>{const{subscribe:e,set:t,update:i}=be({lastModified:0,lastModifiedDate:null,name:"",size:0,type:"",ready:!1});return{subscribe:e,update:e=>{let i={};i.lastModified=e.lastModified||0,i.lastModifiedDate=e.lastModifiedDate||null,i.name=e.name||"",i.size=e.size||0,i.type=e.type||"",i.ready=e.ready||!1,t(i)}}})(),Se=be(0),He=be(0),Fe=(()=>{const{subscribe:e,update:t}=be(null);return{subscribe:e,set:e=>{t(t=>e instanceof HTMLAudioElement?(We.set(!1),De.set(0),Oe.set(0),je.set(!0),e):null)}}})(),Re=(()=>{const{subscribe:e,update:t}=be(null);return{subscribe:e,set:e=>{t(t=>{if(e!==t){let t=he(Fe);return We.set(!0),t.src=e.url,e}return t})}}})(),Ve=be(0),De=be(0),Oe=be(0),je=be(!0),We=be(!1),Be=$e(Re,(e,t)=>{t(null!==e)}),Xe=$e([Ie,Be],([e,t],i)=>{i(e||t)}),qe=$e([je,Ne],([e,t],i)=>{i(!(!e||!t))}),Ye=(()=>{const{subscribe:e,update:t}=be(0);return{subscribe:e,set:e=>{let i=he(Be),n=he(Ie),s=he(Me),o=he(qe);t(t=>t!==e?(n&&(He.set(e),o&&(s.currentTime=e)),!n&&i&&Oe.set(e),e):t)}}})(),Ue=(e=0)=>new Promise((t,i)=>{let n=he(Fe),s=he(Re);he(je);if(s&&n){0===n.readyState&&(je.set(!0),t()),n.currentTime=e;var o=n.play();void 0!==o?o.then(()=>{je.set(!1),t()}).catch(e=>{ze.set(!0),Qe().then(()=>{i(e)})}):(console.error(new Error("audio Promise undefined")),n.play(),je.set(!1),t())}else console.error(new Error("audio Node undefined")),t()}),Ke=()=>new Promise(e=>{let t=he(Fe),i=he(Re),n=he(je);if(i&&t&&!n){0===t.readyState&&(je.set(!0),e());var s=t.play();void 0!==s?s.then(()=>{je.set(!0),t.pause(),e()}).catch(t=>{console.error(t),je.set(!0),e()}):e()}else e()}),Ge=(e=0)=>new Promise(t=>{let i=he(Fe);he(Re)&&i?Ke().then(()=>{Ue(e).then(()=>{t()})}):t()}),Ze=()=>new Promise(e=>{let t=he(Ie),i=he(Me);if(Ne.set(!0),t){0===i.readyState&&e();var n=i.pause();void 0!==n?n.then(()=>{e()}).catch(t=>{console.error(t),e()}):(i.pause(),e())}else e()}),Je=(e=0)=>new Promise(t=>{let i=he(Ie),n=he(Me);if(i){0===n.readyState&&t();let i=[Ze(),Ke()];Promise.all(i).then(()=>{var i=n.play();void 0!==i?i.then(()=>{Ne.set(!1),He.set(e),n.currentTime=e,Ye.set(e),n.currentTime=e,t()}).catch(e=>{Ne.set(!0),console.error(e)}):(console.error(new Error("audio Promise undefined")),t())})}else Ke().then(()=>{Ue(e).then(()=>{t()})})}),Qe=()=>{let e=[Ze(),Ke()];return Promise.all(e)};const et=new class{constructor(){this._editor={background:"#353b43",outline:"2px solid #afbac4"},this._video={background:"#353b43",outline:"2px solid #afbac4",use:!0},this._marker={background:"#afbac4",hover:"rgba(255, 45, 85, 1)"},this._timeline={background:"#353b43",selected:"#353b43",stroke:"#afbac4"},this._waveform={color:"#39ff14",height:80},this._cursor={background:"transparent",color:"rgba(255, 45, 85, 1)",lenscolor:"rgba(255, 45, 85, .5)",screencolor:"rgba(0, 255, 0, .2)",hover:"rgba(255, 45, 85, .5)"},this._scroller={linecolor:"#afbac4",color:"rgba(255, 45, 85, 1)",hover:"rgba(175,186,196, 1)",lenscolor:"rgba(255, 45, 85, .5)"},this._button={color:"#afbac4",disabled:"#5d646d",ring:"rgba(255,255, 255, 1)",hover:"rgba(255, 45, 85, .5)"},this._waveServer="http://localhost:6069/waveform/"}get marker(){return this._marker}get editor(){return this._editor}get timeline(){return this._timeline}get waveform(){return this._waveform}get cursor(){return this._cursor}get scroller(){return this._scroller}get waveServer(){return this._waveServer}get video(){return this._video}get button(){return this._button}},tt=(e,t=!1)=>{var i=parseInt(e,10),n=parseInt((100*(e-i)).toFixed(2)),s=Math.floor(i/3600),o=Math.floor((i-3600*s)/60),r=i-3600*s-60*o,a="";return s<10&&(s="0"+s),o<10&&(o="0"+o),r<10&&(r="0"+r),a=s+":"+o+":"+r,t&&(a+=n<10?".0"+n:"."+n),a},it=e=>e*he(ye),nt=e=>e/he(ye);var st,ot=["","webkit","Moz","MS","ms","o"],rt=document.createElement("div"),at="function",lt=Math.round,dt=Math.abs,ct=Date.now;function ut(e,t,i){return setTimeout(bt(e,i),t)}function ht(e,t,i){return!!Array.isArray(e)&&(pt(e,i[t],i),!0)}function pt(e,t,i){var n;if(e)if(e.forEach)e.forEach(t,i);else if(void 0!==e.length)for(n=0;n<e.length;)t.call(i,e[n],n,e),n++;else for(n in e)e.hasOwnProperty(n)&&t.call(i,e[n],n,e)}function ft(e,t,i){var n="DEPRECATED METHOD: "+t+"\n"+i+" AT \n";return function(){var t=new Error("get-stack-trace"),i=t&&t.stack?t.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=window.console&&(window.console.warn||window.console.log);return s&&s.call(window.console,n,i),e.apply(this,arguments)}}st="function"!=typeof Object.assign?function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var s in n)n.hasOwnProperty(s)&&(t[s]=n[s])}return t}:Object.assign;var gt=ft(function(e,t,i){for(var n=Object.keys(t),s=0;s<n.length;)(!i||i&&void 0===e[n[s]])&&(e[n[s]]=t[n[s]]),s++;return e},"extend","Use `assign`."),vt=ft(function(e,t){return gt(e,t,!0)},"merge","Use `assign`.");function mt(e,t,i){var n,s=t.prototype;(n=e.prototype=Object.create(s)).constructor=e,n._super=s,i&&st(n,i)}function bt(e,t){return function(){return e.apply(t,arguments)}}function $t(e,t){return typeof e==at?e.apply(t&&t[0]||void 0,t):e}function yt(e,t){return void 0===e?t:e}function wt(e,t,i){pt(_t(t),function(t){e.addEventListener(t,i,!1)})}function xt(e,t,i){pt(_t(t),function(t){e.removeEventListener(t,i,!1)})}function Tt(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}function kt(e,t){return e.indexOf(t)>-1}function _t(e){return e.trim().split(/\s+/g)}function Et(e,t,i){if(e.indexOf&&!i)return e.indexOf(t);for(var n=0;n<e.length;){if(i&&e[n][i]==t||!i&&e[n]===t)return n;n++}return-1}function At(e){return Array.prototype.slice.call(e,0)}function Pt(e,t,i){for(var n=[],s=[],o=0;o<e.length;){var r=t?e[o][t]:e[o];Et(s,r)<0&&n.push(e[o]),s[o]=r,o++}return i&&(n=t?n.sort(function(e,i){return e[t]>i[t]}):n.sort()),n}function Ct(e,t){for(var i,n,s=t[0].toUpperCase()+t.slice(1),o=0;o<ot.length;){if((n=(i=ot[o])?i+s:t)in e)return n;o++}}var Mt=1;function zt(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||window}var It="ontouchstart"in window,Nt=void 0!==Ct(window,"PointerEvent"),Lt=It&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),St=25,Ht=1,Ft=2,Rt=4,Vt=8,Dt=1,Ot=2,jt=4,Wt=8,Bt=16,Xt=Ot|jt,qt=Wt|Bt,Yt=Xt|qt,Ut=["x","y"],Kt=["clientX","clientY"];function Gt(e,t){var i=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){$t(e.options.enable,[e])&&i.handler(t)},this.init()}function Zt(e,t,i){var n=i.pointers.length,s=i.changedPointers.length,o=t&Ht&&n-s==0,r=t&(Rt|Vt)&&n-s==0;i.isFirst=!!o,i.isFinal=!!r,o&&(e.session={}),i.eventType=t,function(e,t){var i=e.session,n=t.pointers,s=n.length;i.firstInput||(i.firstInput=Jt(t));s>1&&!i.firstMultiple?i.firstMultiple=Jt(t):1===s&&(i.firstMultiple=!1);var o=i.firstInput,r=i.firstMultiple,a=r?r.center:o.center,l=t.center=Qt(n);t.timeStamp=ct(),t.deltaTime=t.timeStamp-o.timeStamp,t.angle=ni(a,l),t.distance=ii(a,l),function(e,t){var i=t.center,n=e.offsetDelta||{},s=e.prevDelta||{},o=e.prevInput||{};t.eventType!==Ht&&o.eventType!==Rt||(s=e.prevDelta={x:o.deltaX||0,y:o.deltaY||0},n=e.offsetDelta={x:i.x,y:i.y});t.deltaX=s.x+(i.x-n.x),t.deltaY=s.y+(i.y-n.y)}(i,t),t.offsetDirection=ti(t.deltaX,t.deltaY);var d=ei(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=d.x,t.overallVelocityY=d.y,t.overallVelocity=dt(d.x)>dt(d.y)?d.x:d.y,t.scale=r?(c=r.pointers,u=n,ii(u[0],u[1],Kt)/ii(c[0],c[1],Kt)):1,t.rotation=r?function(e,t){return ni(t[1],t[0],Kt)+ni(e[1],e[0],Kt)}(r.pointers,n):0,t.maxPointers=i.prevInput?t.pointers.length>i.prevInput.maxPointers?t.pointers.length:i.prevInput.maxPointers:t.pointers.length,function(e,t){var i,n,s,o,r=e.lastInterval||t,a=t.timeStamp-r.timeStamp;if(t.eventType!=Vt&&(a>St||void 0===r.velocity)){var l=t.deltaX-r.deltaX,d=t.deltaY-r.deltaY,c=ei(a,l,d);n=c.x,s=c.y,i=dt(c.x)>dt(c.y)?c.x:c.y,o=ti(l,d),e.lastInterval=t}else i=r.velocity,n=r.velocityX,s=r.velocityY,o=r.direction;t.velocity=i,t.velocityX=n,t.velocityY=s,t.direction=o}(i,t);var c,u;var h=e.element;Tt(t.srcEvent.target,h)&&(h=t.srcEvent.target);t.target=h}(e,i),e.emit("hammer.input",i),e.recognize(i),e.session.prevInput=i}function Jt(e){for(var t=[],i=0;i<e.pointers.length;)t[i]={clientX:lt(e.pointers[i].clientX),clientY:lt(e.pointers[i].clientY)},i++;return{timeStamp:ct(),pointers:t,center:Qt(t),deltaX:e.deltaX,deltaY:e.deltaY}}function Qt(e){var t=e.length;if(1===t)return{x:lt(e[0].clientX),y:lt(e[0].clientY)};for(var i=0,n=0,s=0;s<t;)i+=e[s].clientX,n+=e[s].clientY,s++;return{x:lt(i/t),y:lt(n/t)}}function ei(e,t,i){return{x:t/e||0,y:i/e||0}}function ti(e,t){return e===t?Dt:dt(e)>=dt(t)?e<0?Ot:jt:t<0?Wt:Bt}function ii(e,t,i){i||(i=Ut);var n=t[i[0]]-e[i[0]],s=t[i[1]]-e[i[1]];return Math.sqrt(n*n+s*s)}function ni(e,t,i){i||(i=Ut);var n=t[i[0]]-e[i[0]],s=t[i[1]]-e[i[1]];return 180*Math.atan2(s,n)/Math.PI}Gt.prototype={handler:function(){},init:function(){this.evEl&&wt(this.element,this.evEl,this.domHandler),this.evTarget&&wt(this.target,this.evTarget,this.domHandler),this.evWin&&wt(zt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&xt(this.element,this.evEl,this.domHandler),this.evTarget&&xt(this.target,this.evTarget,this.domHandler),this.evWin&&xt(zt(this.element),this.evWin,this.domHandler)}};var si={mousedown:Ht,mousemove:Ft,mouseup:Rt},oi="mousedown",ri="mousemove mouseup";function ai(){this.evEl=oi,this.evWin=ri,this.pressed=!1,Gt.apply(this,arguments)}mt(ai,Gt,{handler:function(e){var t=si[e.type];t&Ht&&0===e.button&&(this.pressed=!0),t&Ft&&1!==e.which&&(t=Rt),this.pressed&&(t&Rt&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:"mouse",srcEvent:e}))}});var li={pointerdown:Ht,pointermove:Ft,pointerup:Rt,pointercancel:Vt,pointerout:Vt},di={2:"touch",3:"pen",4:"mouse",5:"kinect"},ci="pointerdown",ui="pointermove pointerup pointercancel";function hi(){this.evEl=ci,this.evWin=ui,Gt.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}window.MSPointerEvent&&!window.PointerEvent&&(ci="MSPointerDown",ui="MSPointerMove MSPointerUp MSPointerCancel"),mt(hi,Gt,{handler:function(e){var t=this.store,i=!1,n=e.type.toLowerCase().replace("ms",""),s=li[n],o=di[e.pointerType]||e.pointerType,r="touch"==o,a=Et(t,e.pointerId,"pointerId");s&Ht&&(0===e.button||r)?a<0&&(t.push(e),a=t.length-1):s&(Rt|Vt)&&(i=!0),a<0||(t[a]=e,this.callback(this.manager,s,{pointers:t,changedPointers:[e],pointerType:o,srcEvent:e}),i&&t.splice(a,1))}});var pi={touchstart:Ht,touchmove:Ft,touchend:Rt,touchcancel:Vt},fi="touchstart",gi="touchstart touchmove touchend touchcancel";function vi(){this.evTarget=fi,this.evWin=gi,this.started=!1,Gt.apply(this,arguments)}mt(vi,Gt,{handler:function(e){var t=pi[e.type];if(t===Ht&&(this.started=!0),this.started){var i=function(e,t){var i=At(e.touches),n=At(e.changedTouches);t&(Rt|Vt)&&(i=Pt(i.concat(n),"identifier",!0));return[i,n]}.call(this,e,t);t&(Rt|Vt)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:e})}}});var mi={touchstart:Ht,touchmove:Ft,touchend:Rt,touchcancel:Vt},bi="touchstart touchmove touchend touchcancel";function $i(){this.evTarget=bi,this.targetIds={},Gt.apply(this,arguments)}mt($i,Gt,{handler:function(e){var t=mi[e.type],i=function(e,t){var i=At(e.touches),n=this.targetIds;if(t&(Ht|Ft)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var s,o,r=At(e.changedTouches),a=[],l=this.target;if(o=i.filter(function(e){return Tt(e.target,l)}),t===Ht)for(s=0;s<o.length;)n[o[s].identifier]=!0,s++;s=0;for(;s<r.length;)n[r[s].identifier]&&a.push(r[s]),t&(Rt|Vt)&&delete n[r[s].identifier],s++;if(!a.length)return;return[Pt(o.concat(a),"identifier",!0),a]}.call(this,e,t);i&&this.callback(this.manager,t,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:e})}});var yi=2500,wi=25;function xi(){Gt.apply(this,arguments);var e=bt(this.handler,this);this.touch=new $i(this.manager,e),this.mouse=new ai(this.manager,e),this.primaryTouch=null,this.lastTouches=[]}function Ti(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var i={x:t.clientX,y:t.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var e=n.indexOf(i);e>-1&&n.splice(e,1)},yi)}}mt(xi,Gt,{handler:function(e,t,i){var n="touch"==i.pointerType,s="mouse"==i.pointerType;if(!(s&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)(function(e,t){e&Ht?(this.primaryTouch=t.changedPointers[0].identifier,Ti.call(this,t)):e&(Rt|Vt)&&Ti.call(this,t)}).call(this,t,i);else if(s&&function(e){for(var t=e.srcEvent.clientX,i=e.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var s=this.lastTouches[n],o=Math.abs(t-s.x),r=Math.abs(i-s.y);if(o<=wi&&r<=wi)return!0}return!1}.call(this,i))return;this.callback(e,t,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ki=Ct(rt.style,"touchAction"),_i=void 0!==ki,Ei="auto",Ai="manipulation",Pi="none",Ci="pan-x",Mi="pan-y",zi=function(){if(!_i)return!1;var e={},t=window.CSS&&window.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){e[i]=!t||window.CSS.supports("touch-action",i)}),e}();function Ii(e,t){this.manager=e,this.set(t)}Ii.prototype={set:function(e){"compute"==e&&(e=this.compute()),_i&&this.manager.element.style&&zi[e]&&(this.manager.element.style[ki]=e),this.actions=e.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var e=[];return pt(this.manager.recognizers,function(t){$t(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))}),function(e){if(kt(e,Pi))return Pi;var t=kt(e,Ci),i=kt(e,Mi);if(t&&i)return Pi;if(t||i)return t?Ci:Mi;if(kt(e,Ai))return Ai;return Ei}(e.join(" "))},preventDefaults:function(e){var t=e.srcEvent,i=e.offsetDirection;if(this.manager.session.prevented)t.preventDefault();else{var n=this.actions,s=kt(n,Pi)&&!zi[Pi],o=kt(n,Mi)&&!zi[Mi],r=kt(n,Ci)&&!zi[Ci];if(s){var a=1===e.pointers.length,l=e.distance<2,d=e.deltaTime<250;if(a&&l&&d)return}if(!r||!o)return s||o&&i&Xt||r&&i&qt?this.preventSrc(t):void 0}},preventSrc:function(e){this.manager.session.prevented=!0,e.preventDefault()}};var Ni=1,Li=2,Si=4,Hi=8,Fi=Hi,Ri=16;function Vi(e){this.options=st({},this.defaults,e||{}),this.id=Mt++,this.manager=null,this.options.enable=yt(this.options.enable,!0),this.state=Ni,this.simultaneous={},this.requireFail=[]}function Di(e){return e&Ri?"cancel":e&Hi?"end":e&Si?"move":e&Li?"start":""}function Oi(e){return e==Bt?"down":e==Wt?"up":e==Ot?"left":e==jt?"right":""}function ji(e,t){var i=t.manager;return i?i.get(e):e}function Wi(){Vi.apply(this,arguments)}function Bi(){Wi.apply(this,arguments),this.pX=null,this.pY=null}function Xi(){Wi.apply(this,arguments)}function qi(){Vi.apply(this,arguments),this._timer=null,this._input=null}function Yi(){Wi.apply(this,arguments)}function Ui(){Wi.apply(this,arguments)}function Ki(){Vi.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Gi(e,t){return(t=t||{}).recognizers=yt(t.recognizers,Gi.defaults.preset),new Zi(e,t)}Vi.prototype={defaults:{},set:function(e){return st(this.options,e),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(e){if(ht(e,"recognizeWith",this))return this;var t=this.simultaneous;return t[(e=ji(e,this)).id]||(t[e.id]=e,e.recognizeWith(this)),this},dropRecognizeWith:function(e){return ht(e,"dropRecognizeWith",this)?this:(e=ji(e,this),delete this.simultaneous[e.id],this)},requireFailure:function(e){if(ht(e,"requireFailure",this))return this;var t=this.requireFail;return-1===Et(t,e=ji(e,this))&&(t.push(e),e.requireFailure(this)),this},dropRequireFailure:function(e){if(ht(e,"dropRequireFailure",this))return this;e=ji(e,this);var t=Et(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(e){return!!this.simultaneous[e.id]},emit:function(e){var t=this,i=this.state;function n(i){t.manager.emit(i,e)}i<Hi&&n(t.options.event+Di(i)),n(t.options.event),e.additionalEvent&&n(e.additionalEvent),i>=Hi&&n(t.options.event+Di(i))},tryEmit:function(e){if(this.canEmit())return this.emit(e);this.state=32},canEmit:function(){for(var e=0;e<this.requireFail.length;){if(!(this.requireFail[e].state&(32|Ni)))return!1;e++}return!0},recognize:function(e){var t=st({},e);if(!$t(this.options.enable,[this,t]))return this.reset(),void(this.state=32);this.state&(Fi|Ri|32)&&(this.state=Ni),this.state=this.process(t),this.state&(Li|Si|Hi|Ri)&&this.tryEmit(t)},process:function(e){},getTouchAction:function(){},reset:function(){}},mt(Wi,Vi,{defaults:{pointers:1},attrTest:function(e){var t=this.options.pointers;return 0===t||e.pointers.length===t},process:function(e){var t=this.state,i=e.eventType,n=t&(Li|Si),s=this.attrTest(e);return n&&(i&Vt||!s)?t|Ri:n||s?i&Rt?t|Hi:t&Li?t|Si:Li:32}}),mt(Bi,Wi,{defaults:{event:"pan",threshold:10,pointers:1,direction:Yt},getTouchAction:function(){var e=this.options.direction,t=[];return e&Xt&&t.push(Mi),e&qt&&t.push(Ci),t},directionTest:function(e){var t=this.options,i=!0,n=e.distance,s=e.direction,o=e.deltaX,r=e.deltaY;return s&t.direction||(t.direction&Xt?(s=0===o?Dt:o<0?Ot:jt,i=o!=this.pX,n=Math.abs(e.deltaX)):(s=0===r?Dt:r<0?Wt:Bt,i=r!=this.pY,n=Math.abs(e.deltaY))),e.direction=s,i&&n>t.threshold&&s&t.direction},attrTest:function(e){return Wi.prototype.attrTest.call(this,e)&&(this.state&Li||!(this.state&Li)&&this.directionTest(e))},emit:function(e){this.pX=e.deltaX,this.pY=e.deltaY;var t=Oi(e.direction);t&&(e.additionalEvent=this.options.event+t),this._super.emit.call(this,e)}}),mt(Xi,Wi,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Pi]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||this.state&Li)},emit:function(e){if(1!==e.scale){var t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}this._super.emit.call(this,e)}}),mt(qi,Vi,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Ei]},process:function(e){var t=this.options,i=e.pointers.length===t.pointers,n=e.distance<t.threshold,s=e.deltaTime>t.time;if(this._input=e,!n||!i||e.eventType&(Rt|Vt)&&!s)this.reset();else if(e.eventType&Ht)this.reset(),this._timer=ut(function(){this.state=Fi,this.tryEmit()},t.time,this);else if(e.eventType&Rt)return Fi;return 32},reset:function(){clearTimeout(this._timer)},emit:function(e){this.state===Fi&&(e&&e.eventType&Rt?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=ct(),this.manager.emit(this.options.event,this._input)))}}),mt(Yi,Wi,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Pi]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||this.state&Li)}}),mt(Ui,Wi,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Xt|qt,pointers:1},getTouchAction:function(){return Bi.prototype.getTouchAction.call(this)},attrTest:function(e){var t,i=this.options.direction;return i&(Xt|qt)?t=e.overallVelocity:i&Xt?t=e.overallVelocityX:i&qt&&(t=e.overallVelocityY),this._super.attrTest.call(this,e)&&i&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers==this.options.pointers&&dt(t)>this.options.velocity&&e.eventType&Rt},emit:function(e){var t=Oi(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)}}),mt(Ki,Vi,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ai]},process:function(e){var t=this.options,i=e.pointers.length===t.pointers,n=e.distance<t.threshold,s=e.deltaTime<t.time;if(this.reset(),e.eventType&Ht&&0===this.count)return this.failTimeout();if(n&&s&&i){if(e.eventType!=Rt)return this.failTimeout();var o=!this.pTime||e.timeStamp-this.pTime<t.interval,r=!this.pCenter||ii(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,r&&o?this.count+=1:this.count=1,this._input=e,0===this.count%t.taps)return this.hasRequireFailures()?(this._timer=ut(function(){this.state=Fi,this.tryEmit()},t.interval,this),Li):Fi}return 32},failTimeout:function(){return this._timer=ut(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Fi&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Gi.VERSION="2.0.8",Gi.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Yi,{enable:!1}],[Xi,{enable:!1},["rotate"]],[Ui,{direction:Xt}],[Bi,{direction:Xt},["swipe"]],[Ki],[Ki,{event:"doubletap",taps:2},["tap"]],[qi]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Zi(e,t){var i;this.options=st({},Gi.defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((i=this).options.inputClass||(Nt?hi:Lt?$i:It?xi:ai))(i,Zt),this.touchAction=new Ii(this,this.options.touchAction),Ji(this,!0),pt(this.options.recognizers,function(e){var t=this.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])},this)}function Ji(e,t){var i,n=e.element;n.style&&(pt(e.options.cssProps,function(s,o){i=Ct(n.style,o),t?(e.oldCssProps[i]=n.style[i],n.style[i]=s):n.style[i]=e.oldCssProps[i]||""}),t||(e.oldCssProps={}))}function Qi(e,t){let i,n,s,o,r,a,l=!1,d="ontouchstart"in document.documentElement,c=new Gi(e);function u(t){n=parseInt(e.style.left),l=!0,e.dispatchEvent(new CustomEvent("panstart",{detail:{x:i}}))}return c.get("pan").set({direction:Gi.DIRECTION_HORIZONTAL,threshold:1}),c.get("press").set({time:d?250:50}),c.on("panmove",function(d){if(l){let l=he(Ee),c=he(Te);!function(){let e=he(_e);s=nt(e.min),o=nt(e.max)-1,a=nt(e.value.left)+1,r=nt(e.value.right)-1}(),i=d.deltaX+n,"left"===t?i>o?i=o:i>r?i=r:i<s&&(i=s):i<s?i=s:i<a?i=a:i>o&&(i=o),i-l<0&&(i=l),i-l>c-1&&(i=c+l-1),e.style.left=i+"px",e.dispatchEvent(new CustomEvent("panmove",{detail:{x:i,force:0,delta:-d.deltaX}}))}}),c.on("pressup panend",function(t){l=!1,e.dispatchEvent(new CustomEvent("panend",{detail:{x:i}}))}),c.on("press",u),c.on("panstart",u),{destroy(){}}}function en(e){var t,i,n,s,o,a,l,d;return{c(){t=_("div"),i=_("span"),n=P(),(s=_("div")).innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-6fbi1m"><path d="M8 5v14l11-7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>',o=P(),a=_("div"),z(i,"class","label svelte-6fbi1m"),N(i,"top",(et.waveform.height-24)/2+6+"px"),S(i,"active",e.pan),z(s,"class","cursor  svelte-6fbi1m"),S(s,"active",e.pan),S(s,"toleft","left"===e.direction),S(s,"toright","right"===e.direction),z(a,"class","line svelte-6fbi1m"),S(a,"active",e.pan),z(t,"class","marker svelte-6fbi1m"),N(t,"left",e.pos+"px"),S(t,"active",e.pan),S(t,"toleft","left"===e.direction),S(t,"toright","right"===e.direction),d=[M(t,"panstart",e.handlePanStart),M(t,"panmove",e.handlePanMove),M(t,"panend",e.handlePanEnd)]},m(r,d){y(r,t,d),$(t,i),e.span_binding(i),$(t,n),$(t,s),$(t,o),$(t,a),e.div2_binding(t),l=Qi.call(null,t,e.direction)||{}},p(e,n){e.config&&N(i,"top",(et.waveform.height-24)/2+6+"px"),e.pan&&(S(i,"active",n.pan),S(s,"active",n.pan)),e.direction&&(S(s,"toleft","left"===n.direction),S(s,"toright","right"===n.direction)),e.pan&&S(a,"active",n.pan),e.pos&&N(t,"left",n.pos+"px"),"function"==typeof l.update&&e.direction&&l.update.call(null,n.direction),e.pan&&S(t,"active",n.pan),e.direction&&(S(t,"toleft","left"===n.direction),S(t,"toright","right"===n.direction))},d(i){i&&w(t),e.span_binding(null),e.div2_binding(null),l&&"function"==typeof l.destroy&&l.destroy(),r(d)}}}function tn(e){var i,n=e.$hasVideo&&en(e);return{c(){n&&n.c(),i=C()},m(e,t){n&&n.m(e,t),y(e,i,t)},p(e,t){t.$hasVideo?n?n.p(e,t):((n=en(t)).c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null)},i:t,o:t,d(e){n&&n.d(e),e&&w(i)}}}function nn(e,t,i){let n,s,o,r,a,l,c;d(e,we,e=>{i("$duration",n=e)}),d(e,Pe,e=>{i("$mixerRect",s=e)}),d(e,Ye,e=>{i("$position",o=e)}),d(e,qe,e=>{i("$paused",r=e)}),d(e,_e,e=>{i("$markers",a=e)}),d(e,Me,e=>{i("$videoNode",l=e)}),d(e,Ie,e=>{i("$hasVideo",c=e)});let u,h,{pos:p,direction:f}=t,g=!1,v=!1,m=!1,b=0;const $=q();B(()=>{u.style.setProperty("--color",et.marker.background),u.style.setProperty("--color-hover",et.marker.hover)});const y=()=>{if(h){u.parentNode.getBoundingClientRect();let e=u.getBoundingClientRect(),t=h.getBoundingClientRect(),n=e.left+e.width/2;if(n+t.width/2>s.right){let e=parseInt(t.width-(s.right-n));h.style.left="-"+e+"px",i("label",h)}else if(n-s.left<t.width/2){let e=parseInt(n-s.left);h.style.left="-"+e+"px",i("label",h)}else h.style.left="-"+t.width/2+"px",i("label",h)}};return e.$set=(e=>{"pos"in e&&i("pos",p=e.pos),"direction"in e&&i("direction",f=e.direction)}),e.$$.update=((e={$duration:1})=>{e.$duration&&(e=>{_e.max(e)})(n)}),{pos:p,direction:f,marker:u,pan:g,label:h,handlePanStart:e=>{b=o,m||(v=r),ze.set(!0),v?i("pan",g=!0):Qe().then(()=>{i("pan",g=!0)}),m=!0,h&&(y(),"left"===f?(h.innerHTML=`${tt(a.value.left,!0)}<br>${tt(a.value.right-a.value.left,!0)}`,i("label",h)):(h.innerHTML=`${tt(a.value.right,!0)}<br>${tt(a.value.right-a.value.left,!0)}`,i("label",h)))},handlePanMove:e=>{if(g){let t=e.detail.x;_e.move(it(t),f),l.currentTime=it(t),Me.set(l),$("move",{direction:f,value:it(t)}),h&&("left"===f?(h.innerHTML=`${tt(a.value.left,!0)}<br>${tt(a.value.right-a.value.left,!0)}`,i("label",h)):(h.innerHTML=`${tt(a.value.right,!0)}<br>${tt(a.value.right-a.value.left,!0)}`,i("label",h)),y())}},handlePanEnd:e=>{i("pan",g=!1),m=!1,console.log(m,v),v?(Ye.set(b),l.currentTime=b,Me.set(l)):(ze.set(!0),Je(a.value.left).then(()=>{ze.set(!1)}))},$hasVideo:c,span_binding:function(e){U[e?"unshift":"push"](()=>{i("label",h=e)})},div2_binding:function(e){U[e?"unshift":"push"](()=>{i("marker",u=e)})}}}Zi.prototype={set:function(e){return st(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},stop:function(e){this.session.stopped=e?2:1},recognize:function(e){var t=this.session;if(!t.stopped){var i;this.touchAction.preventDefaults(e);var n=this.recognizers,s=t.curRecognizer;(!s||s&&s.state&Fi)&&(s=t.curRecognizer=null);for(var o=0;o<n.length;)i=n[o],2===t.stopped||s&&i!=s&&!i.canRecognizeWith(s)?i.reset():i.recognize(e),!s&&i.state&(Li|Si|Hi)&&(s=t.curRecognizer=i),o++}},get:function(e){if(e instanceof Vi)return e;for(var t=this.recognizers,i=0;i<t.length;i++)if(t[i].options.event==e)return t[i];return null},add:function(e){if(ht(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},remove:function(e){if(ht(e,"remove",this))return this;if(e=this.get(e)){var t=this.recognizers,i=Et(t,e);-1!==i&&(t.splice(i,1),this.touchAction.update())}return this},on:function(e,t){if(void 0!==e&&void 0!==t){var i=this.handlers;return pt(_t(e),function(e){i[e]=i[e]||[],i[e].push(t)}),this}},off:function(e,t){if(void 0!==e){var i=this.handlers;return pt(_t(e),function(e){t?i[e]&&i[e].splice(Et(i[e],t),1):delete i[e]}),this}},emit:function(e,t){this.options.domEvents&&function(e,t){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.gesture=t,t.target.dispatchEvent(i)}(e,t);var i=this.handlers[e]&&this.handlers[e].slice();if(i&&i.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](t),n++}},destroy:function(){this.element&&Ji(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},st(Gi,{INPUT_START:Ht,INPUT_MOVE:Ft,INPUT_END:Rt,INPUT_CANCEL:Vt,STATE_POSSIBLE:Ni,STATE_BEGAN:Li,STATE_CHANGED:Si,STATE_ENDED:Hi,STATE_RECOGNIZED:Fi,STATE_CANCELLED:Ri,STATE_FAILED:32,DIRECTION_NONE:Dt,DIRECTION_LEFT:Ot,DIRECTION_RIGHT:jt,DIRECTION_UP:Wt,DIRECTION_DOWN:Bt,DIRECTION_HORIZONTAL:Xt,DIRECTION_VERTICAL:qt,DIRECTION_ALL:Yt,Manager:Zi,Input:Gt,TouchAction:Ii,TouchInput:$i,MouseInput:ai,PointerEventInput:hi,TouchMouseInput:xi,SingleTouchInput:vi,Recognizer:Vi,AttrRecognizer:Wi,Tap:Ki,Pan:Bi,Swipe:Ui,Pinch:Xi,Rotate:Yi,Press:qi,on:wt,off:xt,each:pt,merge:vt,extend:gt,assign:st,inherit:mt,bindFn:bt,prefixed:Ct});class sn extends me{constructor(e){super(),ve(this,e,nn,tn,l,["pos","direction"])}}const on=new class{constructor(){this._ctx=null}get ctx(){if(!this._ctx){var e=window.AudioContext||window.webkitAudioContext;this._ctx=new e}return this._ctx}};class rn{constructor(e,t){if(this._bits=t||8,this._isMono=null==e||e,[8,16,32].indexOf(t)<0)throw new Error("Invalid number of bits specified for peaks.")}getPeaks(e,t,i,n,s){let o,r,a,l,d=e||1e4,c=t.numberOfChannels,u=[];if(void 0===t.subarray)for(o=0;o<c;o++)a=t.getChannelData(o),i=i||0,n=n||a.length,l=a.subarray(i,n),u.push(this.extractPeaks(l,d,this._bits));else i=i||0,n=n||t.length,u.push(this.extractPeaks(t.subarray(i,n),d,this._bits));return this._isMono&&u.length>1&&(u=this.makeMono(u,this._bits)),{sampleRate:e,length:r=u[0].length/2,data:this.smoth(u),bits:this._bits}}smoth(e,t=5){let i=Array();for(let n=0;n!=e[0].length;n++){let s=0;for(let i=0;i!=t;i++){s+=e[0][n+2*i]}s/=t,i.push(s)}return e[0]=i,e}makeMono(e,t){let i,n,s,o=e.length,r=1/o,a=e[0].length/2,l=0,d=0;switch(t){case 8:s=new Int8Array(2*a);break;case 16:s=new Int16Array(2*a);break;case 32:s=new Int32Array(2*a);break;default:s=new Int8Array(2*a)}for(d=0;d<a;d++){for(i=0,n=0,l=0;l<o;l++)i+=r*e[l][2*d],n+=r*e[l][2*d+1];s[2*d]=i,s[2*d+1]=n}return[s]}extractSavedPeaks(e,t,i){let n,s,o,r,a,l,d,c,u=e.length,h=Math.ceil(u/t);switch(i){case 8:c=new Int8Array(2*h);break;case 16:c=new Int16Array(2*h);break;case 32:c=new Int32Array(2*h);break;default:c=new Int8Array(2*h)}for(n=0;n<h;n++)s=n*t,o=(n+1)*t>u?u:(n+1)*t,r=e.subarray(s,o),d=this.findMinMax(r),l=this.convert(d.min,i),a=this.convert(d.max,i),c[2*n]=l,c[2*n+1]=a;return c}extractPeaks(e,t,i){let n,s,o,r,a,l,d,c,u=e.length,h=Math.ceil(u/t);switch(i){case 8:c=new Int8Array(2*h);break;case 16:c=new Int16Array(2*h);break;case 32:c=new Int32Array(2*h);break;default:c=new Int8Array(2*h)}for(n=0;n<h;n++)s=n*t,o=(n+1)*t>u?u:(n+1)*t,r=e.subarray(s,o),d=this.findMinMax(r),l=this.convert(d.min,i),a=this.convert(d.max,i),c[2*n]=l,c[2*n+1]=a;return c}convert(e,t){let i=Math.pow(2,t-1),n=e<0?e*i:e*i-1;return Math.max(-i,Math.min(i-1,n))}findMinMax(e){let t,i=1/0,n=-1/0,s=0,o=e.length;for(;s<o;s++)i>(t=e[s])&&(i=t),n<t&&(n=t);return{min:i,max:n}}}function an(e,t){let i,n,s=0,o=!1,r=e.parentNode.getBoundingClientRect(),a=0,l="ontouchstart"in document.documentElement,d=new Gi(e);d.get("pan").set({direction:Gi.DIRECTION_HORIZONTAL,threshold:1}),d.get("press").set({time:l?250:50}),d.on("panmove",function(n){o&&(r=e.parentNode.getBoundingClientRect(),i=n.deltaX+s,a=0,i<0&&(t.useForce&&(a=i),i=0),i>r.width-t.margin&&(t.useForce&&(a=i-r.width-t.margin),i=r.width-t.margin),e.style.left=i+"px",e.dispatchEvent(new CustomEvent("panmove",{detail:{x:i,force:0,delta:-n.deltaX}})))}),d.on("pressup panend",function(t){u(),i=t.clientX,o=!1,e.dispatchEvent(new CustomEvent("panend",{detail:{x:i}}))}),d.on("press",h),d.on("panstart",h);const c=()=>{n=setInterval(()=>{o&&0!==a&&e.dispatchEvent(new CustomEvent("panmove",{detail:{x:i,force:a}}))},50)},u=()=>{n&&clearInterval(n)};function h(i){he(qe)?(s=parseInt(e.style.left),o=!0,t.useForce&&c(),e.dispatchEvent(new CustomEvent("panstart",{detail:{x:s}}))):o=!1}return{destroy(){u()}}}function ln(e){var t,i,n,s,o,r,a,l,d,c,u,h,p,f,g,v,m,b,x,T,k,A,P,C,M,I;return{c(){t=_("div"),i=E("svg"),n=E("circle"),s=E("animate"),o=E("circle"),r=E("animate"),a=E("circle"),l=E("animate"),d=E("circle"),c=E("animate"),u=E("circle"),h=E("animate"),p=E("circle"),f=E("animate"),g=E("circle"),v=E("animate"),m=E("circle"),b=E("animate"),x=E("circle"),T=E("animate"),k=E("circle"),A=E("animate"),P=E("circle"),C=E("animate"),M=E("circle"),I=E("animate"),z(s,"attributeName","cy"),z(s,"values","30;70;30"),z(s,"times","0;0.5;1"),z(s,"dur","0.5s"),z(s,"calcMode","spline"),z(s,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(s,"begin","0s"),z(s,"repeatCount","indefinite"),z(n,"cx","11"),z(n,"cy","53.3431"),z(n,"ng-attr-r","3"),z(n,"fill","#93dbe9"),z(n,"r","3"),z(r,"attributeName","cy"),z(r,"values","30;70;30"),z(r,"times","0;0.5;1"),z(r,"dur","0.5s"),z(r,"calcMode","spline"),z(r,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(r,"begin","-0.041666666666666664s"),z(r,"repeatCount","indefinite"),z(o,"cx","18"),z(o,"cy","40.662"),z(o,"ng-attr-r","3"),z(o,"fill","#689cc5"),z(o,"r","3"),z(l,"attributeName","cy"),z(l,"values","30;70;30"),z(l,"times","0;0.5;1"),z(l,"dur","0.5s"),z(l,"calcMode","spline"),z(l,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(l,"begin","-0.08333333333333333s"),z(l,"repeatCount","indefinite"),z(a,"cx","25"),z(a,"cy","32.7729"),z(a,"ng-attr-r","3"),z(a,"fill","#5e6fa3"),z(a,"r","3"),z(c,"attributeName","cy"),z(c,"values","30;70;30"),z(c,"times","0;0.5;1"),z(c,"dur","0.5s"),z(c,"calcMode","spline"),z(c,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(c,"begin","-0.125s"),z(c,"repeatCount","indefinite"),z(d,"cx","32"),z(d,"cy","30.0971"),z(d,"ng-attr-r","3"),z(d,"fill","#3b4368"),z(d,"r","3"),z(h,"attributeName","cy"),z(h,"values","30;70;30"),z(h,"times","0;0.5;1"),z(h,"dur","0.5s"),z(h,"calcMode","spline"),z(h,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(h,"begin","-0.16666666666666666s"),z(h,"repeatCount","indefinite"),z(u,"cx","39"),z(u,"cy","30.9068"),z(u,"ng-attr-r","3"),z(u,"fill","#93dbe9"),z(u,"r","3"),z(f,"attributeName","cy"),z(f,"values","30;70;30"),z(f,"times","0;0.5;1"),z(f,"dur","0.5s"),z(f,"calcMode","spline"),z(f,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(f,"begin","-0.20833333333333334s"),z(f,"repeatCount","indefinite"),z(p,"cx","46"),z(p,"cy","35.9068"),z(p,"ng-attr-r","3"),z(p,"fill","#689cc5"),z(p,"r","3"),z(v,"attributeName","cy"),z(v,"values","30;70;30"),z(v,"times","0;0.5;1"),z(v,"dur","0.5s"),z(v,"calcMode","spline"),z(v,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(v,"begin","-0.25s"),z(v,"repeatCount","indefinite"),z(g,"cx","53"),z(g,"cy","46.6569"),z(g,"ng-attr-r","3"),z(g,"fill","#5e6fa3"),z(g,"r","3"),z(b,"attributeName","cy"),z(b,"values","30;70;30"),z(b,"times","0;0.5;1"),z(b,"dur","0.5s"),z(b,"calcMode","spline"),z(b,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(b,"begin","-0.2916666666666667s"),z(b,"repeatCount","indefinite"),z(m,"cx","60"),z(m,"cy","59.338"),z(m,"ng-attr-r","3"),z(m,"fill","#3b4368"),z(m,"r","3"),z(T,"attributeName","cy"),z(T,"values","30;70;30"),z(T,"times","0;0.5;1"),z(T,"dur","0.5s"),z(T,"calcMode","spline"),z(T,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(T,"begin","-0.3333333333333333s"),z(T,"repeatCount","indefinite"),z(x,"cx","67"),z(x,"cy","67.2271"),z(x,"ng-attr-r","3"),z(x,"fill","#93dbe9"),z(x,"r","3"),z(A,"attributeName","cy"),z(A,"values","30;70;30"),z(A,"times","0;0.5;1"),z(A,"dur","0.5s"),z(A,"calcMode","spline"),z(A,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(A,"begin","-0.375s"),z(A,"repeatCount","indefinite"),z(k,"cx","74"),z(k,"cy","69.9029"),z(k,"ng-attr-r","3"),z(k,"fill","#689cc5"),z(k,"r","3"),z(C,"attributeName","cy"),z(C,"values","30;70;30"),z(C,"times","0;0.5;1"),z(C,"dur","0.5s"),z(C,"calcMode","spline"),z(C,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(C,"begin","-0.4166666666666667s"),z(C,"repeatCount","indefinite"),z(P,"cx","81"),z(P,"cy","69.0932"),z(P,"ng-attr-r","3"),z(P,"fill","#5e6fa3"),z(P,"r","3"),z(I,"attributeName","cy"),z(I,"values","30;70;30"),z(I,"times","0;0.5;1"),z(I,"dur","0.5s"),z(I,"calcMode","spline"),z(I,"keySplines","0.5 0 0.5 1;0.5 0 0.5 1"),z(I,"begin","-0.4583333333333333s"),z(I,"repeatCount","indefinite"),z(M,"cx","88"),z(M,"cy","64.0932"),z(M,"ng-attr-r","3"),z(M,"fill","#3b4368"),z(M,"r","3"),z(i,"class","lds-wave svelte-py4h95"),z(i,"width","100%"),z(i,"height","100%"),z(i,"xmlns","http://www.w3.org/2000/svg"),z(i,"xmlns:xlink","http://www.w3.org/1999/xlink"),z(i,"viewBox","0 0 100 100"),z(i,"preserveAspectRatio","xMidYMid"),z(t,"class","spinner svelte-py4h95"),N(t,"height",e.height+"px"),N(t,"max-width",e.height+"px")},m(e,w){y(e,t,w),$(t,i),$(i,n),$(n,s),$(i,o),$(o,r),$(i,a),$(a,l),$(i,d),$(d,c),$(i,u),$(u,h),$(i,p),$(p,f),$(i,g),$(g,v),$(i,m),$(m,b),$(i,x),$(x,T),$(i,k),$(k,A),$(i,P),$(P,C),$(i,M),$(M,I)},p(e,i){e.height&&(N(t,"height",i.height+"px"),N(t,"max-width",i.height+"px"))},d(e){e&&w(t)}}}function dn(e){var i,n,s,o,a,l=e.loading&&e.showLoading&&ln(e);return{c(){i=_("div"),n=_("div"),s=P(),l&&l.c(),z(n,"class","wave svelte-py4h95"),N(n,"height",e.height+"px"),S(n,"active",e.pan),S(n,"paused",e.$paused),z(i,"class","container svelte-py4h95"),N(i,"height",e.height+"px"),a=[M(i,"panstart",e.handlePanStart),M(i,"panmove",e.handlePanMove),M(i,"panend",e.handlePanEnd)]},m(t,r){y(t,i,r),$(i,n),e.div0_binding(n),$(i,s),l&&l.m(i,null),e.div1_binding(i),o=an.call(null,i,{useForce:!1,margin:0})||{}},p(e,t){e.height&&N(n,"height",t.height+"px"),e.pan&&S(n,"active",t.pan),e.$paused&&S(n,"paused",t.$paused),t.loading&&t.showLoading?l?l.p(e,t):((l=ln(t)).c(),l.m(i,null)):l&&(l.d(1),l=null),e.height&&N(i,"height",t.height+"px")},i:t,o:t,d(t){t&&w(i),e.div0_binding(null),l&&l.d(),e.div1_binding(null),o&&"function"==typeof o.destroy&&o.destroy(),r(a)}}}function cn(e,t,i){let n,s,o,r,a,l;d(e,Re,e=>{i("$audioActualTrack",n=e)}),d(e,ye,e=>{i("$scale",s=e)}),d(e,ke,e=>{i("$zoom",o=e)}),d(e,qe,e=>{i("$paused",r=e)}),d(e,Ie,e=>{i("$hasVideo",a=e)}),d(e,Be,e=>{i("$hasAudio",l=e)});let c,u,h,p,f,{height:g=100}=t,v=!1,m=!1,b=!1,$=0,y=null;const w=new rn(!0,8),x=q();B(()=>{f=p.getBoundingClientRect()});const T=e=>{console.log("GET SONNG",e);let t=0;fetch(e).then(function(e){return e.ok?e.arrayBuffer():Promise.reject({status:e.status,statusText:e.statusText})}).then(function(n){console.log("fetch data",performance.now()-t),t=performance.now(),on.ctx.decodeAudioData(n,function(n){console.log("decodeAudioData",performance.now()-t),t=performance.now(),u=n.getChannelData(0),h=n.sampleRate,y=w.getPeaks(.01*h,u,0,0,e),(new FormData).append("data",JSON.stringify({result:"ok",peaks:y})),fetch(et.waveServer+window.btoa(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({result:"ok",peaks:y})}).then(function(e){return e.json()}).then(function(e){console.log(JSON.stringify(e))}),c.style.left="0px",i("el",c),A(c,y.data,parseInt(c.clientHeight),et.waveform.color),console.log("drawCanvas",performance.now()-t),i("loading",v=!1),x("ready")})}).catch(function(e){})},k=e=>{performance.now();console.log("handleLoad ",e),Ve.set(0),y=null,i("loading",v=!0),i("showLoading",m=!1),setTimeout(()=>{i("showLoading",m=!0)},300),E(c),fetch(et.waveServer+window.btoa(e)).then(function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}).then(function(t){"not found"===t.result?T(e):(y=t.peaks,c.style.left="0px",i("el",c),A(c,y.data,parseInt(c.clientHeight),et.waveform.color),i("loading",v=!1),x("ready"))}).catch(function(t){console.log("error",t),T(e)})},_=(e,t,i,n,s)=>{const o=e.width,r=e.getContext("2d"),a=e.height/2,l=a/Math.pow(2,n-1);r.clearRect(0,0,e.clientWidth,e.clientHeight),r.fillStyle=s,r.strokeStyle=s,r.lineWidth=1,r.beginPath(),r.globalAlpha=.3,r.moveTo(0,a+.5),r.lineTo(o,a+.5),r.stroke(),r.globalAlpha=1;for(let e=0;e<o;e++){const n=Math.abs(t[2*(e+i)]*l),s=Math.abs(t[2*(e+i)+1]*l);e%2&&r.fillRect(e,a-s,1,s+n)}},E=e=>{if(e)for(;e.firstChild;)e.removeChild(e.firstChild)},A=(e,t,i,n)=>{console.log("drawCanvas",s,t,1/(.01/s));performance.now();const r=1/(.01/s);t[0].length;let a=0,l=[];if(r>1){for(let e=0;e<=t[0].length;e+=2*r){let i=0,n=0;for(let s=0;s!=r;s++)i+=t[0][e+2*s],n+=t[0][e+2*s+1];l.push(i/r),l.push(n/r)}l=((e,t=5)=>{let i=performance.now(),n=Array();for(let i=0;i!=e.length;i++){let s=0;for(let n=0;n!=t;n++)s+=e[i+2*n];s/=t,n.push(s)}return e=n,console.log("smoth ",performance.now()-i),e})(l,o+1)}else l=t[0];for(;e.firstChild;)e.removeChild(e.firstChild);e.style.width=l.length/2+"px";let d=l.length/2;for(;d>0;){const t=Math.min(d,8192);let s=document.createElement("canvas");s.setAttribute("width",t),s.setAttribute("height",i),s.setAttribute("style","padding: 0; z-index: 6003;"),e.appendChild(s),_(s,l,a,8,n),d-=t,a+=8192}};return e.$set=(e=>{"height"in e&&i("height",g=e.height)}),e.$$.update=((e={$audioActualTrack:1,$scale:1})=>{e.$audioActualTrack&&(e=>{e&&k(e.url)})(n),e.$scale&&y&&A(c,y.data,parseInt(c.clientHeight),et.waveform.color)}),{height:g,el:c,container:p,loading:v,showLoading:m,pan:b,handlePanStart:e=>{e.stopPropagation(),console.log(e.detail),$=parseInt(c.style.left)||0,i("pan",b=!0)},handlePanMove:e=>{if(e.stopPropagation(),r&&a&&l){console.log(e.detail);let t=$-e.detail.delta>=c.clientWidth?c.clientWidth:$-e.detail.delta;-t<0&&(t=0),Ve.set(it(-t)),c.style.left=t+"px",i("el",c)}},handlePanEnd:e=>{e.stopPropagation(),i("pan",b=!1)},$paused:r,div0_binding:function(e){U[e?"unshift":"push"](()=>{i("el",c=e)})},div1_binding:function(e){U[e?"unshift":"push"](()=>{i("container",p=e)})}}}class un extends me{constructor(e){super(),ve(this,e,cn,dn,l,["height"])}}function hn(e){var t,i,n=new un({props:{height:e.height}});return n.$on("ready",e.handleWaveReady),{c(){t=_("div"),n.$$.fragment.c(),z(t,"class","wave-container svelte-1tn1l5y"),N(t,"left",e.posLeft+"px")},m(e,s){y(e,t,s),pe(n,t,null),i=!0},p(e,s){var o={};e.height&&(o.height=s.height),n.$set(o),i&&!e.posLeft||N(t,"left",s.posLeft+"px")},i(e){i||(le(n.$$.fragment,e),i=!0)},o(e){de(n.$$.fragment,e),i=!1},d(e){e&&w(t),fe(n)}}}function pn(e){var t,i,n,s,o,r=new sn({props:{pos:e.posLeft,direction:"left"}});r.$on("move",e.handleMove);var a=new sn({props:{pos:e.posRight,direction:"right"}});a.$on("move",e.handleMove);var l=new un({props:{height:e.height-24,track:e.$audioActualTrack}});return l.$on("ready",e.handleWaveReady),{c(){t=_("div"),r.$$.fragment.c(),i=P(),a.$$.fragment.c(),n=P(),s=_("div"),l.$$.fragment.c(),z(t,"class","markers svelte-1tn1l5y"),z(s,"class","wave-container svelte-1tn1l5y"),N(s,"left",e.posLeft+"px")},m(e,d){y(e,t,d),pe(r,t,null),$(t,i),pe(a,t,null),y(e,n,d),y(e,s,d),pe(l,s,null),o=!0},p(e,t){var i={};e.posLeft&&(i.pos=t.posLeft),r.$set(i);var n={};e.posRight&&(n.pos=t.posRight),a.$set(n);var d={};e.height&&(d.height=t.height-24),e.$audioActualTrack&&(d.track=t.$audioActualTrack),l.$set(d),o&&!e.posLeft||N(s,"left",t.posLeft+"px")},i(e){o||(le(r.$$.fragment,e),le(a.$$.fragment,e),le(l.$$.fragment,e),o=!0)},o(e){de(r.$$.fragment,e),de(a.$$.fragment,e),de(l.$$.fragment,e),o=!1},d(e){e&&w(t),fe(r),fe(a),e&&(w(n),w(s)),fe(l)}}}function fn(e){var t,i,n,s,o=[pn,hn],r=[];function a(e){return e.$hasVideo?0:1}return i=a(e),n=r[i]=o[i](e),{c(){t=_("div"),n.c(),z(t,"class","line svelte-1tn1l5y"),N(t,"height",e.height+"px"),N(t,"width",e.$width+"px ")},m(e,n){y(e,t,n),r[i].m(t,null),s=!0},p(e,l){var d=i;(i=a(l))===d?r[i].p(e,l):(re(),de(r[d],1,1,()=>{r[d]=null}),ae(),(n=r[i])||(n=r[i]=o[i](l)).c(),le(n,1),n.m(t,null)),s&&!e.height||N(t,"height",l.height+"px"),s&&!e.$width||N(t,"width",l.$width+"px ")},i(e){s||(le(n),s=!0)},o(e){de(n),s=!1},d(e){e&&w(t),r[i].d()}}}function gn(e,t,i){let n,s,o,r,a,l;d(e,ye,e=>{i("$scale",n=e)}),d(e,_e,e=>{i("$markers",s=e)}),d(e,De,e=>{i("$audioDuration",o=e)}),d(e,xe,e=>{i("$width",r=e)}),d(e,Ie,e=>{i("$hasVideo",a=e)}),d(e,Re,e=>{i("$audioActualTrack",l=e)});let{height:c,item:u}=t,h=0,p=0;B(()=>{_e.set({value:{left:0,right:0},min:0,max:300})});const f=()=>{i("posLeft",h=nt(s.value.left)),i("posRight",p=nt(s.value.right))};return e.$set=(e=>{"height"in e&&i("height",c=e.height),"item"in e&&i("item",u=e.item)}),e.$$.update=((e={$scale:1,$markers:1})=>{e.$scale&&f(),e.$markers&&f()}),{height:c,item:u,posLeft:h,posRight:p,handleWaveReady:()=>{console.log("wave ready",o)},handleMove:e=>{},$width:r,$hasVideo:a,$audioActualTrack:l}}class vn extends me{constructor(e){super(),ve(this,e,gn,fn,l,["height","item"])}}function mn(e,t,i){const n=Object.create(e);return n.item=t[i],n.index=i,n}function bn(e){var t,i,n,s,o,r=tt(e.item.time*e.$scale);return{c(){t=E("svg"),i=E("g"),n=E("text"),s=A(r),z(n,"x","30"),z(n,"y","8"),z(n,"text-anchor","middle"),z(n,"class","small svelte-s079zj"),N(n,"fill",et.timeline.stroke),z(i,"class","svelte-s079zj"),z(t,"height","16"),z(t,"width","60"),z(t,"x",o=0===e.item.o?-60:e.item.o-30),z(t,"y","5"),z(t,"class","svelte-s079zj")},m(e,o){y(e,t,o),$(t,i),$(i,n),$(n,s)},p(e,i){(e.items||e.$scale)&&r!==(r=tt(i.item.time*i.$scale))&&I(s,r),e.config&&N(n,"fill",et.timeline.stroke),e.items&&o!==(o=0===i.item.o?-60:i.item.o-30)&&z(t,"x",o)},d(e){e&&w(t)}}}function $n(e){var t,i,n,s,o,r=e.item.marker&&bn(e);return{c(){t=E("line"),r&&r.c(),o=C(),z(t,"x1",i=e.item.o),z(t,"y1",e.height),z(t,"x2",n=e.item.o),z(t,"y2",s=e.item.marker?e.height-10:e.height-5),N(t,"stroke",et.timeline.stroke),N(t,"stroke-width",e.item.marker?"1.5":"1"),z(t,"class","svelte-s079zj")},m(e,i){y(e,t,i),r&&r.m(e,i),y(e,o,i)},p(e,a){e.items&&i!==(i=a.item.o)&&z(t,"x1",i),e.height&&z(t,"y1",a.height),e.items&&n!==(n=a.item.o)&&z(t,"x2",n),(e.items||e.height)&&s!==(s=a.item.marker?a.height-10:a.height-5)&&z(t,"y2",s),e.config&&N(t,"stroke",et.timeline.stroke),e.items&&N(t,"stroke-width",a.item.marker?"1.5":"1"),a.item.marker?r?r.p(e,a):((r=bn(a)).c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null)},d(e){e&&w(t),r&&r.d(e),e&&w(o)}}}function yn(e){for(var i,n,s,o,r,a,l=e.items,d=[],c=0;c<l.length;c+=1)d[c]=$n(mn(e,l,c));return{c(){i=_("div"),n=E("svg"),s=E("g"),o=E("rect");for(var t=0;t<d.length;t+=1)d[t].c();z(o,"height",e.height),z(o,"width",r=isNaN(e.$width)?0:e.$width),z(o,"fill",et.timeline.selected),z(o,"class","svelte-s079zj"),z(s,"class","svelte-s079zj"),z(n,"height",e.height),z(n,"class","svelte-s079zj"),z(i,"class","line svelte-s079zj"),N(i,"height",e.height+"px"),N(i,"width",e.w+"px"),a=M(window,"resize",e.resize)},m(t,r){y(t,i,r),$(i,n),$(n,s),$(s,o);for(var a=0;a<d.length;a+=1)d[a].m(n,null);e.div_binding(i)},p(e,t){if(e.height&&z(o,"height",t.height),e.$width&&r!==(r=isNaN(t.$width)?0:t.$width)&&z(o,"width",r),e.items||e.config||e.timeToText||e.$scale||e.height){l=t.items;for(var s=0;s<l.length;s+=1){const i=mn(t,l,s);d[s]?d[s].p(e,i):(d[s]=$n(i),d[s].c(),d[s].m(n,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=l.length}e.height&&(z(n,"height",t.height),N(i,"height",t.height+"px")),e.w&&N(i,"width",t.w+"px")},i:t,o:t,d(t){t&&w(i),k(d,t),e.div_binding(null),a()}}}function wn(e,t,i){let n,s,o,r;d(e,Te,e=>{i("$maxWidth",n=e)}),d(e,Ee,e=>{i("$scrollPosition",s=e)}),d(e,xe,e=>{i("$width",o=e)}),d(e,ye,e=>{i("$scale",r=e)});let a,{height:l}=t,c=new Array(0),u=0,h=0,p=0;const f=()=>{let e=s;i("items",c=[]),h=e%10;let t=parseInt((p=e%100-h)/10);for(let n=0;n<=u/10;n++)c[n]={o:10*n-h,marker:t>=10,time:parseInt(e+10*n-h)},i("items",c),t>=10&&(t=0),t++};var g;B(()=>{i("w",u=a.parentNode.clientWidth),f()}),g=(()=>{a&&(i("w",u=a.parentNode.clientWidth),f())}),W().$$.before_update.push(g);const v=()=>{i("w",u=n),f()};return e.$set=(e=>{"height"in e&&i("height",l=e.height)}),e.$$.update=((e={$maxWidth:1})=>{e.$maxWidth&&v()}),{height:l,items:c,el:a,w:u,resize:v,$width:o,$scale:r,div_binding:function(e){U[e?"unshift":"push"](()=>{i("el",a=e)})}}}class xn extends me{constructor(e){super(),ve(this,e,wn,yn,l,["height"])}}function Tn(e){var t;return{c(){z(t=_("div"),"class","cursor-screen svelte-9atcso"),N(t,"height",e.cursorLineHeight-8+"px"),N(t,"left",e.height/2+"px"),N(t,"width",e.cursorPos+"px")},m(e,i){y(e,t,i)},p(e,i){e.cursorLineHeight&&N(t,"height",i.cursorLineHeight-8+"px"),e.height&&N(t,"left",i.height/2+"px"),e.cursorPos&&N(t,"width",i.cursorPos+"px")},d(e){e&&w(t)}}}function kn(e){var i,n,s,o,a,l,d,c,u,h,p=e.$hasAudio&&!e.$paused&&Tn(e);return{c(){i=_("div"),n=_("div"),s=_("span"),o=P(),a=_("div"),l=P(),d=_("div"),u=P(),p&&p.c(),z(s,"class","label svelte-9atcso"),S(s,"active",e.pan),z(a,"class","spot svelte-9atcso"),S(a,"active",e.pan),z(d,"class","cursor-line svelte-9atcso"),N(d,"height",e.cursorLineHeight+"px"),S(d,"active",e.pan),z(n,"class","cursor svelte-9atcso"),N(n,"height",_n+"px"),N(n,"width",_n+"px"),S(n,"active",e.pan),z(i,"class","line svelte-9atcso"),N(i,"height",e.height+"px"),N(i,"left","-"+Math.ceil(_n/2)+"px"),N(i,"max-width",e.$mixerRect.width+"px"),h=[M(n,"panstart",e.handlePanStart),M(n,"panmove",e.handlePanMove),M(n,"panend",e.handlePanEnd),M(n,"click",e.handlePanClick)]},m(t,r){y(t,i,r),$(i,n),$(n,s),e.span_binding(s),$(n,o),$(n,a),$(n,l),$(n,d),e.div2_binding(n),c=an.call(null,n,{useForce:!0,margin:0})||{},$(i,u),p&&p.m(i,null),e.div3_binding(i)},p(e,t){e.pan&&(S(s,"active",t.pan),S(a,"active",t.pan)),e.cursorLineHeight&&N(d,"height",t.cursorLineHeight+"px"),e.pan&&S(d,"active",t.pan),e.cursorHeight&&(N(n,"height",_n+"px"),N(n,"width",_n+"px")),e.pan&&S(n,"active",t.pan),t.$hasAudio&&!t.$paused?p?p.p(e,t):((p=Tn(t)).c(),p.m(i,null)):p&&(p.d(1),p=null),e.height&&N(i,"height",t.height+"px"),e.cursorHeight&&N(i,"left","-"+Math.ceil(_n/2)+"px"),e.$mixerRect&&N(i,"max-width",t.$mixerRect.width+"px")},i:t,o:t,d(t){t&&w(i),e.span_binding(null),e.div2_binding(null),c&&"function"==typeof c.destroy&&c.destroy(),p&&p.d(),e.div3_binding(null),r(h)}}}let _n=21;function En(e,t,i){let n,s,o,r,a,l,c,u,h,p;d(e,Ye,e=>{i("$position",n=e)}),d(e,ye,e=>{i("$scale",s=e)}),d(e,Ee,e=>{i("$scrollPosition",o=e)}),d(e,Ae,e=>{i("$cursorWidth",r=e)}),d(e,we,e=>{i("$duration",a=e)}),d(e,qe,e=>{i("$paused",l=e)}),d(e,Xe,e=>{i("$ready",c=e)}),d(e,Pe,e=>{i("$mixerRect",u=e)}),d(e,xe,e=>{i("$width",h=e)}),d(e,Be,e=>{i("$hasAudio",p=e)});let f,g,v,{height:m,cursorLineHeight:b}=t,$=0,y=!1,w=0,x=-1,T=0,k=0;const _=(e,t=!1)=>{i("cursorPos",w=e<0?0:e),t||(T=(o+e)*s,Ye.set(T))},E=(e,t=!1)=>{let n=r,l=n/2,d=w,c=n-w,u=a/s,h=k<e;k=e,0===e?i("cursorPos",w=0):u<=n?_(e,t):h?(d<l&&e<=l&&_(e,t),((e,t,n,s,r)=>{s-r<t?i("cursorPos",w=r-o<n?r-o:n):Ee.set(r-w)})(0,c,n,u,e)):(0===o&&_(e,t),((e,t,n,s,r)=>{w>n/2?i("cursorPos",w=r-o):Ee.set(r-w)})(0,0,n,0,e)),g&&(g.innerHTML=tt((e*s).toFixed(3),!0),i("label",g))};B(()=>{let e,t=!0;$=f.parentNode.clientWidth,Ye.set(0),Ae.set($);const n=()=>{let s=parseInt(w);x!==s&&(x=s,v.style.left=s+"px",i("cursor",v)),t&&(e=requestAnimationFrame(n))};return e=requestAnimationFrame(n),f.style.setProperty("--background",et.cursor.background),f.style.setProperty("--color",et.cursor.color),f.style.setProperty("--color-hover",et.cursor.hover),f.style.setProperty("--lens-color",et.cursor.lenscolor),f.style.setProperty("--screen-color",et.cursor.screencolor),()=>{t=!1}}),X(()=>{f&&($=f.parentNode.clientWidth,Ae.set($))});const A=()=>{if(g){f.getBoundingClientRect();let e=v.getBoundingClientRect(),t=g.getBoundingClientRect(),n=e.left+e.width/2;if(n+t.width/2-15>u.right){let e=parseInt(t.width-(u.right-n)-20);g.style.left="-"+e+"px",i("label",g),g.style.setProperty("--left-pos",e+"px")}else if(n-u.left<t.width/2){let e=parseInt(n-u.left);g.style.left="-"+e+"px",i("label",g),g.style.setProperty("--left-pos",e+"px")}else g.style.left="-"+(t.width/2-5)+"px",i("label",g),g.style.setProperty("--left-pos",t.width/2-5+"px")}};return e.$set=(e=>{"height"in e&&i("height",m=e.height),"cursorLineHeight"in e&&i("cursorLineHeight",b=e.cursorLineHeight)}),e.$$.update=((e={$position:1,$scale:1})=>{(e.$position||e.$scale)&&E(n/s,!0)}),{height:m,cursorLineHeight:b,el:f,pan:y,label:g,cursor:v,cursorPos:w,handlePanStart:()=>{l&&i("pan",y=!0),A(),g&&(g.innerHTML=tt((T*s).toFixed(3),!0),i("label",g))},handlePanMove:e=>{if(l){let t=a/s,i=f.clientWidth-1,n=e.detail.x;if(n>t&&(n=t),n<0&&(n=0),n>i&&(n=i),0!==e.detail.force&&t>i){let t=e.detail.force,s=o+t;s<0&&(s=0),s>h-(n=t<0?0:i)&&(s=h-n),o=s,Ee.set(o)}_(n,!1),A()}},handlePanEnd:e=>{i("pan",y=!1)},handlePanClick:e=>{e.stopPropagation()},$paused:l,$mixerRect:u,$hasAudio:p,span_binding:function(e){U[e?"unshift":"push"](()=>{i("label",g=e)})},div2_binding:function(e){U[e?"unshift":"push"](()=>{i("cursor",v=e)})},div3_binding:function(e){U[e?"unshift":"push"](()=>{i("el",f=e)})}}}class An extends me{constructor(e){super(),ve(this,e,En,kn,l,["height","cursorLineHeight"])}}function Pn(e){var i,n,s,o,a,l,d,c;return{c(){i=_("div"),n=_("div"),s=P(),o=_("div"),a=_("div"),z(n,"class","scroll-line svelte-14f47gg"),N(n,"margin",e.height/2+"px"),N(n,"width","calc(100% - "+e.height+"px)"),S(n,"disabled",e.disabled),z(a,"class","thumb svelte-14f47gg"),S(a,"active",e.pan),S(a,"paused",!e.$paused),z(o,"class","cursor svelte-14f47gg"),N(o,"width",e.height-4+"px"),N(o,"height",e.height-4+"px"),N(o,"left",e.cursorPos+"px"),S(o,"active",e.pan),S(o,"disabled",e.disabled),ee(()=>e.div3_resize_handler.call(i)),z(i,"class","line svelte-14f47gg"),N(i,"height",e.height+"px"),c=[M(o,"panstart",e.handlePanStart),M(o,"panmove",e.handlePanMove),M(o,"panend",e.handlePanEnd)]},m(t,r){y(t,i,r),$(i,n),$(i,s),$(i,o),$(o,a),e.div2_binding(o),l=an.call(null,o,{useForce:!1,margin:e.height})||{},d=L(i,e.div3_resize_handler.bind(i)),e.div3_binding(i)},p(e,t){e.height&&(N(n,"margin",t.height/2+"px"),N(n,"width","calc(100% - "+t.height+"px)")),e.disabled&&S(n,"disabled",t.disabled),e.pan&&S(a,"active",t.pan),e.$paused&&S(a,"paused",!t.$paused),e.height&&(N(o,"width",t.height-4+"px"),N(o,"height",t.height-4+"px")),e.cursorPos&&N(o,"left",t.cursorPos+"px"),"function"==typeof l.update&&e.height&&l.update.call(null,{useForce:!1,margin:t.height}),e.pan&&S(o,"active",t.pan),e.disabled&&S(o,"disabled",t.disabled),e.height&&N(i,"height",t.height+"px")},i:t,o:t,d(t){t&&w(i),e.div2_binding(null),l&&"function"==typeof l.destroy&&l.destroy(),d.cancel(),e.div3_binding(null),r(c)}}}function Cn(e,t,i){let n,s,o,r,a,l,c;d(e,ye,e=>{i("$scale",n=e)}),d(e,Ye,e=>{i("$position",s=e)}),d(e,we,e=>{i("$duration",o=e)}),d(e,Pe,e=>{i("$mixerRect",r=e)}),d(e,He,e=>{i("$videoCurrentTime",a=e)}),d(e,xe,e=>{i("$width",l=e)}),d(e,qe,e=>{i("$paused",c=e)});let u,h,{height:p}=t,f=0,g=!1,v=0,m=!0;const b=()=>{i("disabled",m=r.width>o/n)};B(()=>{u.style.setProperty("--color-line",et.scroller.linecolor),u.style.setProperty("--color",et.scroller.color),u.style.setProperty("--color-hover",et.scroller.hover),u.style.setProperty("--lens-color",et.scroller.lenscolor)});return e.$set=(e=>{"height"in e&&i("height",p=e.height)}),e.$$.update=((e={$scale:1,$position:1,$duration:1})=>{e.$scale&&(e=>{b(),ke.test(e,o,l,f-p)})(n),e.$position&&(e=>{if(m&&(h.style.left="0px",i("cursor",h)),!g&&!m){let t=e/(o/100)*((f-p)/100);t!==v&&i("cursorPos",v=t)}})(s),e.$duration&&b()}),{height:p,w:f,pan:g,cursorPos:v,el:u,cursor:h,disabled:m,handlePanStart:()=>{!m&&c?i("pan",g=!0):(i("pan",g=!1),h.style.left="0px",i("cursor",h))},handlePanMove:e=>{if(m)h.style.left="0px",i("cursor",h);else if(c){i("cursorPos",v=e.detail.x);let t=Math.ceil(v)/(f-p)*100;t>100&&(t=100),t<0&&(t=0);let n=o/100;Ye.set(t*n)}},handlePanEnd:e=>{i("pan",g=!1),m&&(h.style.left="0px",i("cursor",h))},$paused:c,div2_binding:function(e){U[e?"unshift":"push"](()=>{i("cursor",h=e)})},div3_resize_handler:function(){f=this.clientWidth,i("w",f)},div3_binding:function(e){U[e?"unshift":"push"](()=>{i("el",u=e)})}}}class Mn extends me{constructor(e){super(),ve(this,e,Cn,Pn,l,["height"])}}function zn(e){var t,i,n,s,o;return{c(){t=E("svg"),i=E("path"),o=E("path"),z(i,"stroke",n=e.disabled?et.button.disabled:et.button.color),z(i,"fill",s=e.disabled?et.button.disabled:et.button.color),z(i,"d","M6 19h4V5H6v14zm8-14v14h4V5h-4z"),z(o,"d","M0 0h24v24H0z"),z(o,"fill","none"),z(t,"width","24"),z(t,"height","24"),z(t,"viewBox","0 0 24 24")},m(e,n){y(e,t,n),$(t,i),$(t,o)},p(e,t){e.disabled&&n!==(n=t.disabled?et.button.disabled:et.button.color)&&z(i,"stroke",n),e.disabled&&s!==(s=t.disabled?et.button.disabled:et.button.color)&&z(i,"fill",s)},d(e){e&&w(t)}}}function In(e){var t,i,n,s,o;return{c(){t=E("svg"),i=E("path"),o=E("path"),z(i,"stroke",n=e.disabled?et.button.disabled:et.button.color),z(i,"fill",s=e.disabled?et.button.disabled:et.button.color),z(i,"d","M8 5v14l11-7z"),z(o,"d","M0 0h24v24H0z"),z(o,"fill","none"),z(t,"width","24"),z(t,"height","24"),z(t,"viewBox","0 0 24 24")},m(e,n){y(e,t,n),$(t,i),$(t,o)},p(e,t){e.disabled&&n!==(n=t.disabled?et.button.disabled:et.button.color)&&z(i,"stroke",n),e.disabled&&s!==(s=t.disabled?et.button.disabled:et.button.color)&&z(i,"fill",s)},d(e){e&&w(t)}}}function Nn(e){var i,n,s,o;function r(e){return e.$paused?In:zn}var a=r(e),l=a(e);return{c(){i=_("div"),n=_("div"),s=P(),l.c(),z(n,"class","ring svelte-18o7nyo"),N(n,"height",e.height+"px"),N(n,"width",e.height+"px"),S(n,"pulse",e.pulse),z(i,"class","play-btn svelte-18o7nyo"),N(i,"height",e.height+"px"),N(i,"width",e.height+"px"),o=M(i,"click",e.handleClick)},m(t,o){y(t,i,o),$(i,n),$(i,s),l.m(i,null),e.div1_binding(i)},p(e,t){e.height&&(N(n,"height",t.height+"px"),N(n,"width",t.height+"px")),e.pulse&&S(n,"pulse",t.pulse),a===(a=r(t))&&l?l.p(e,t):(l.d(1),(l=a(t))&&(l.c(),l.m(i,null))),e.height&&(N(i,"height",t.height+"px"),N(i,"width",t.height+"px"))},i:t,o:t,d(t){t&&w(i),l.d(),e.div1_binding(null),o()}}}function Ln(e,t,i){let n,s,o;d(e,Ie,e=>{i("$hasVideo",n=e)}),d(e,Be,e=>{i("$hasAudio",s=e)}),d(e,qe,e=>{i("$paused",o=e)});let r,{height:a=20}=t,l=!1,c=!1;return B(()=>{r.style.setProperty("--color",et.button.color),r.style.setProperty("--color-hover",et.button.hover),r.style.setProperty("--color-ring",et.button.ring)}),e.$set=(e=>{"height"in e&&i("height",a=e.height)}),e.$$.update=((e={$hasVideo:1,$hasAudio:1})=>{(e.$hasVideo||e.$hasAudio)&&i("disabled",c=!(n||s))}),{height:a,button:r,pulse:l,disabled:c,handleClick:e=>{(n||s)&&(i("pulse",l=!0),setTimeout(()=>{i("pulse",l=!1)},200),window.dispatchEvent(new CustomEvent("videoButtonClick",{bubbles:!0,detail:{time:null,outbound:!0}})))},$paused:o,div1_binding:function(e){U[e?"unshift":"push"](()=>{i("button",r=e)})}}}class Sn extends me{constructor(e){super(),ve(this,e,Ln,Nn,l,["height"])}}function Hn(e){var i,n,s,o,r,a,l,d,c;return{c(){i=_("div"),n=_("div"),s=P(),o=E("svg"),r=E("path"),d=E("path"),z(n,"class","ring svelte-mz8njp"),N(n,"height",e.height+"px"),N(n,"width",e.height+"px"),N(n,"color",et.button.color),S(n,"pulse",e.pulse),z(r,"stroke",a=e.disabled?et.button.disabled:et.button.color),z(r,"fill",l=e.disabled?et.button.disabled:et.button.color),z(r,"d","M6 6h2v12H6zm3.5 6l8.5 6V6z"),z(d,"d","M0 0h24v24H0z"),z(d,"fill","none"),z(o,"xmlns","http://www.w3.org/2000/svg"),z(o,"width","24"),z(o,"height","24"),z(o,"viewBox","0 0 24 24"),z(i,"class","play-btn svelte-mz8njp"),N(i,"height",e.height+"px"),N(i,"width",e.height+"px"),c=M(i,"click",e.handleClick)},m(t,a){y(t,i,a),$(i,n),$(i,s),$(i,o),$(o,r),$(o,d),e.div1_binding(i)},p(e,t){e.height&&(N(n,"height",t.height+"px"),N(n,"width",t.height+"px")),e.config&&N(n,"color",et.button.color),e.pulse&&S(n,"pulse",t.pulse),e.disabled&&a!==(a=t.disabled?et.button.disabled:et.button.color)&&z(r,"stroke",a),e.disabled&&l!==(l=t.disabled?et.button.disabled:et.button.color)&&z(r,"fill",l),e.height&&(N(i,"height",t.height+"px"),N(i,"width",t.height+"px"))},i:t,o:t,d(t){t&&w(i),e.div1_binding(null),c()}}}function Fn(e,t,i){let n,s;d(e,Ie,e=>{i("$hasVideo",n=e)}),d(e,Be,e=>{i("$hasAudio",s=e)});let o,{height:r=20}=t,a=!1,l=!1;return B(()=>{o.style.setProperty("--color",et.button.color),o.style.setProperty("--color-hover",et.button.hover),o.style.setProperty("--color-ring",et.button.ring)}),e.$set=(e=>{"height"in e&&i("height",r=e.height)}),e.$$.update=((e={$hasVideo:1,$hasAudio:1})=>{(e.$hasVideo||e.$hasAudio)&&i("disabled",l=!(n||s))}),{height:r,pulse:a,disabled:l,button:o,handleClick:e=>{n||s?(i("pulse",a=!0),setTimeout(()=>{i("pulse",a=!1)},200),ze.set(!0),Je(0).then(()=>{ze.set(!1)})):s&&Ge(0)},div1_binding:function(e){U[e?"unshift":"push"](()=>{i("button",o=e)})}}}class Rn extends me{constructor(e){super(),ve(this,e,Fn,Hn,l,["height"])}}function Vn(e){var i,n,s,o,r,a,l,d,c;return{c(){i=_("div"),n=_("div"),s=P(),o=E("svg"),r=E("path"),a=E("path"),z(n,"class","ring svelte-sewkwm"),N(n,"height",e.height+"px"),N(n,"width",e.height+"px"),S(n,"pulse",e.pulse),z(r,"d","M0 0h24v24H0z"),z(r,"fill","none"),z(a,"stroke",l=e.disabled?et.button.disabled:et.button.color),z(a,"fill",d=e.disabled?et.button.disabled:et.button.color),z(a,"d","M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42\n      3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"),z(o,"width","24"),z(o,"height","24"),z(o,"viewBox","0 0 24 24"),z(o,"class","svelte-sewkwm"),z(i,"class","play-btn svelte-sewkwm"),N(i,"height",e.height+"px"),N(i,"width",e.height+"px"),c=M(i,"click",e.handleClick)},m(t,l){y(t,i,l),$(i,n),$(i,s),$(i,o),$(o,r),$(o,a),e.div1_binding(i)},p(e,t){e.height&&(N(n,"height",t.height+"px"),N(n,"width",t.height+"px")),e.pulse&&S(n,"pulse",t.pulse),e.disabled&&l!==(l=t.disabled?et.button.disabled:et.button.color)&&z(a,"stroke",l),e.disabled&&d!==(d=t.disabled?et.button.disabled:et.button.color)&&z(a,"fill",d),e.height&&(N(i,"height",t.height+"px"),N(i,"width",t.height+"px"))},i:t,o:t,d(t){t&&w(i),e.div1_binding(null),c()}}}function Dn(e,t,i){let n,s,o;d(e,Ie,e=>{i("$hasVideo",n=e)}),d(e,Be,e=>{i("$hasAudio",s=e)}),d(e,_e,e=>{i("$markers",o=e)});let r,{height:a=20}=t,l=!1,c=!1;return B(()=>{r.style.setProperty("--color",et.button.color),r.style.setProperty("--color-hover",et.button.hover),r.style.setProperty("--color-ring",et.button.ring)}),e.$set=(e=>{"height"in e&&i("height",a=e.height)}),e.$$.update=((e={$hasVideo:1,$hasAudio:1})=>{(e.$hasVideo||e.$hasAudio)&&i("disabled",c=!(n||s))}),{height:a,pulse:l,disabled:c,button:r,handleClick:e=>{n&&s&&(i("pulse",l=!0),setTimeout(()=>{i("pulse",l=!1)},200),Ce.set(!1),ze.set(!0),Je(o.value.left).then(()=>{ze.set(!1)}))},div1_binding:function(e){U[e?"unshift":"push"](()=>{i("button",r=e)})}}}class On extends me{constructor(e){super(),ve(this,e,Dn,Vn,l,["height"])}}function jn(e){var i,n,s,o,r,a,l,d;return{c(){i=_("div"),n=_("div"),s=P(),o=E("svg"),r=E("path"),a=E("path"),z(n,"class","ring svelte-15z3gde"),N(n,"height",e.height+"px"),N(n,"width",e.height+"px"),S(n,"pulse",e.pulse),z(r,"d","M0 0h24v24H0z"),z(r,"fill","none"),z(a,"fill",et.button.color),z(a,"d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1\n      15h-2v-6h2v6zm0-8h-2V7h2v2z"),z(o,"xmlns","http://www.w3.org/2000/svg"),z(o,"width",e.height),z(o,"height",e.height),z(o,"viewBox",l="0 0 "+e.height+"\n    "+e.height),z(o,"class","svelte-15z3gde"),z(i,"class","play-btn svelte-15z3gde"),N(i,"height",e.height+"px"),N(i,"width",e.height+"px"),d=M(i,"click",e.handleClick)},m(t,l){y(t,i,l),$(i,n),$(i,s),$(i,o),$(o,r),$(o,a),e.div1_binding(i)},p(e,t){e.height&&(N(n,"height",t.height+"px"),N(n,"width",t.height+"px")),e.pulse&&S(n,"pulse",t.pulse),e.height&&(z(o,"width",t.height),z(o,"height",t.height)),e.height&&l!==(l="0 0 "+t.height+"\n    "+t.height)&&z(o,"viewBox",l),e.height&&(N(i,"height",t.height+"px"),N(i,"width",t.height+"px"))},i:t,o:t,d(t){t&&w(i),e.div1_binding(null),d()}}}function Wn(e,t,i){let{height:n=24}=t;let s,o=!1;return B(()=>{s.style.setProperty("--color",et.button.color),s.style.setProperty("--color-ring",et.button.ring)}),e.$set=(e=>{"height"in e&&i("height",n=e.height)}),{height:n,handleClick:e=>{i("pulse",o=!0),setTimeout(()=>{i("pulse",o=!1)},200),window.dispatchEvent(new CustomEvent("modal",{bubbles:!0,detail:{action:"open",content:"ModalInfo"}}))},pulse:o,button:s,div1_binding:function(e){U[e?"unshift":"push"](()=>{i("button",s=e)})}}}class Bn extends me{constructor(e){super(),ve(this,e,Wn,jn,l,["height"])}}function Xn(e){var t,i,n,s;return{c(){t=E("svg"),i=E("path"),n=E("path"),z(i,"d","M0 0h24v24H0z"),z(i,"fill","none"),z(n,"fill",s=e.disabled?et.button.disabled:et.button.color),z(n,"d","M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48\n        10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59\n        8-8 8z"),z(t,"width","24"),z(t,"height","24"),z(t,"viewBox","0 0 24 24"),S(t,"disabled",e.disabled)},m(e,s){y(e,t,s),$(t,i),$(t,n)},p(e,i){e.disabled&&s!==(s=i.disabled?et.button.disabled:et.button.color)&&z(n,"fill",s),e.disabled&&S(t,"disabled",i.disabled)},d(e){e&&w(t)}}}function qn(e){var t,i,n,s;return{c(){t=E("svg"),i=E("path"),n=E("path"),z(i,"d","M0 0h24v24H0z"),z(i,"fill","none"),z(n,"fill",s=e.disabled?et.button.disabled:et.button.color),z(n,"d","M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10\n        10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59\n        8 8-3.59 8-8 8z"),z(t,"width","24"),z(t,"height","24"),z(t,"viewBox","0 0 24 24"),S(t,"disabled",e.disabled)},m(e,s){y(e,t,s),$(t,i),$(t,n)},p(e,i){e.disabled&&s!==(s=i.disabled?et.button.disabled:et.button.color)&&z(n,"fill",s),e.disabled&&S(t,"disabled",i.disabled)},d(e){e&&w(t)}}}function Yn(e){var i,n,s,o;function r(e){return e.zoomIn?qn:Xn}var a=r(e),l=a(e);return{c(){i=_("div"),n=_("div"),s=P(),l.c(),z(n,"class","ring svelte-fvuvv0"),N(n,"height",e.height+"px"),N(n,"width",e.height+"px"),S(n,"pulse",e.pulse),S(n,"disabled",e.disabled),z(i,"class","play-btn svelte-fvuvv0"),N(i,"height",e.height+"px"),N(i,"width",e.height+"px"),S(i,"disabled",e.disabled),o=M(i,"click",e.handleClick)},m(t,o){y(t,i,o),$(i,n),$(i,s),l.m(i,null),e.div1_binding(i)},p(e,t){e.height&&(N(n,"height",t.height+"px"),N(n,"width",t.height+"px")),e.pulse&&S(n,"pulse",t.pulse),e.disabled&&S(n,"disabled",t.disabled),a===(a=r(t))&&l?l.p(e,t):(l.d(1),(l=a(t))&&(l.c(),l.m(i,null))),e.height&&(N(i,"height",t.height+"px"),N(i,"width",t.height+"px")),e.disabled&&S(i,"disabled",t.disabled)},i:t,o:t,d(t){t&&w(i),l.d(),e.div1_binding(null),o()}}}function Un(e,t,i){let n,s,o,r;d(e,Pe,e=>{i("$mixerRect",n=e)}),d(e,we,e=>{i("$duration",s=e)}),d(e,ye,e=>{i("$scale",o=e)}),d(e,ke,e=>{i("$zoom",r=e)});let a,{height:l=20,zoomIn:c=!1}=t,u=!1,h=!0;return B(()=>{a.style.setProperty("--color",et.button.color),a.style.setProperty("--color-hover",et.button.hover),a.style.setProperty("--color-ring",et.button.ring)}),e.$set=(e=>{"height"in e&&i("height",l=e.height),"zoomIn"in e&&i("zoomIn",c=e.zoomIn)}),e.$$.update=((e={$duration:1,$scale:1})=>{(e.$duration||e.$scale)&&i("disabled",h=n.width>s/o&!c||c&&0===r)}),{height:l,zoomIn:c,el:a,pulse:u,disabled:h,handleClick:e=>{h||(i("pulse",u=!0),setTimeout(()=>{i("pulse",u=!1)},200),c?ke.decrement():ke.increment())},div1_binding:function(e){U[e?"unshift":"push"](()=>{i("el",a=e)})}}}class Kn extends me{constructor(e){super(),ve(this,e,Un,Yn,l,["height","zoomIn"])}}function Gn(e){var i,n;return{c(){z(i=_("audio"),"id","pastelle-audio-node"),n=[M(i,"ended",e.handleAudioEnded),M(i,"error",e.handleError)]},m(t,n){y(t,i,n),e.audio_1_binding(i)},p:t,i:t,o:t,d(t){t&&w(i),e.audio_1_binding(null),r(n)}}}function Zn(e,t,i){let n,s,o,r,a,l,c,u,h,p,f;d(e,Oe,e=>{i("$audioCurrentTime",n=e)}),d(e,De,e=>{i("$audioDuration",s=e)}),d(e,qe,e=>{i("$paused",o=e)}),d(e,Re,e=>{i("$audioActualTrack",r=e)}),d(e,_e,e=>{i("$markers",a=e)}),d(e,Me,e=>{i("$videoNode",l=e)}),d(e,We,e=>{i("$audioNewTrack",c=e)}),d(e,Ie,e=>{i("$hasVideo",u=e)}),d(e,Se,e=>{i("$videoDuration",h=e)}),d(e,Fe,e=>{i("$audioNode",p=e)});let g=0;const v=()=>n/(s/100),m=e=>{console.log("will play: ",e.detail),Ce.set(!1);performance.now();let t=null;r&&r.uuid&&(t=r.uuid),t===e.detail.uuid?window.dispatchEvent(new CustomEvent("videoButtonClick",{bubbles:!0,detail:{time:null,outbound:!0}})):Qe().then(()=>{Ye.set(a.value.left),l&&(l.currentTime=a.value.left,Me.set(l)),Re.set(e.detail)})};B(()=>{Fe.set(f),f.addEventListener("canplay",e=>{if(c){ze.set(!0),We.set(!1);performance.now();Qe().then(()=>{u?(we.set(h),Je(a.value.left).then(()=>{ze.set(!1)})):(Oe.set(0),De.set(p.duration),we.set(s),Ce.set(!0),Ue().then(()=>{je.set(!1)}))})}}),window.addEventListener("pastelle-play",m)});return e.$$.update=((e={$paused:1,$audioActualTrack:1,$audioCurrentTime:1})=>{(e.$paused||e.$audioActualTrack||e.$audioCurrentTime)&&((e,t)=>{let i=null;t&&(i=t.uuid),window.dispatchEvent(new CustomEvent("pastelle-play-change",{bubbles:!0,detail:{paused:e,uuid:i,time:v()}}))})(o,r),e.$audioCurrentTime&&(e=>{let t=null;r&&(t=r.uuid);let i=v();parseFloat(i).toFixed(1)!=parseFloat(g).toFixed(1)&&(g=i,window.dispatchEvent(new CustomEvent("pastelle-play-change",{bubbles:!0,detail:{paused:o,uuid:t,time:parseFloat(g).toFixed(1)}})))})()}),{audio:f,handleAudioEnded:e=>{ze.set(!0),Qe().then(()=>{ze.set(!0)})},handleError:e=>{console.log("error",e)},audio_1_binding:function(e){U[e?"unshift":"push"](()=>{i("audio",f=e)})}}}class Jn extends me{constructor(e){super(),ve(this,e,Zn,Gn,l,[])}}const{window:Qn}=ue;function es(e,t,i){const n=Object.create(e);return n.item=t[i],n.index=i,n}function ts(e){var t,i=new vn({props:{height:e.lineHeigth,item:e.index}});return{c(){i.$$.fragment.c()},m(e,n){pe(i,e,n),t=!0},p(e,t){var n={};e.lineHeigth&&(n.height=t.lineHeigth),i.$set(n)},i(e){t||(le(i.$$.fragment,e),t=!0)},o(e){de(i.$$.fragment,e),t=!1},d(e){fe(i,e)}}}function is(e){var t,i=new On({props:{height:"24"}});return{c(){i.$$.fragment.c()},m(e,n){pe(i,e,n),t=!0},i(e){t||(le(i.$$.fragment,e),t=!0)},o(e){de(i.$$.fragment,e),t=!1},d(e){fe(i,e)}}}function ns(e){for(var t,i,n,s,o,a,l,d,c,u,h,p,f,g,v,m,b,x,T,E,C,S,H,F,R,V,D,O=tt(e.$position,!0),j=1/e.$scale,W=new Jn({}),B=new xn({props:{height:"24"}}),X=e.items,q=[],Y=0;Y<X.length;Y+=1)q[Y]=ts(es(e,X,Y));const U=e=>de(q[e],1,1,()=>{q[e]=null});var K=new An({props:{height:"21",cursorLineHeight:e.items.length*e.lineHeigth+8}}),G=new Sn({props:{height:"24"}}),Z=new Rn({props:{height:"24"}}),J=e.$hasVideo&&is(),Q=new Bn({props:{height:"24"}}),te=new Mn({props:{height:"24"}}),ie=new Kn({props:{height:"24",zoomIn:!1}}),ne=new Kn({props:{height:"24",zoomIn:!0}});return{c(){t=_("div"),W.$$.fragment.c(),i=P(),n=_("div"),B.$$.fragment.c(),s=P(),o=_("div"),a=_("div");for(var r=0;r<q.length;r+=1)q[r].c();l=P(),d=_("div"),K.$$.fragment.c(),c=P(),u=_("div"),G.$$.fragment.c(),h=P(),Z.$$.fragment.c(),p=P(),J&&J.c(),f=P(),Q.$$.fragment.c(),g=P(),v=_("div"),m=_("div"),b=A(O),x=P(),te.$$.fragment.c(),T=P(),E=_("div"),C=A(j),S=A(" px/sec"),H=P(),ie.$$.fragment.c(),F=P(),ne.$$.fragment.c(),z(n,"class","time-scale svelte-4m08uz"),z(a,"class","sound-box svelte-4m08uz"),z(o,"class","mixer svelte-4m08uz"),z(d,"class","cursor svelte-4m08uz"),z(m,"class","svelte-4m08uz"),z(v,"class","time-text svelte-4m08uz"),z(E,"class","zoom-info svelte-4m08uz"),z(u,"class","duration-cursor svelte-4m08uz"),ee(()=>e.div8_resize_handler.call(t)),z(t,"class","editor svelte-4m08uz"),N(t,"width",e.playerwidth+"px"),D=[M(Qn,"keydown",e.handleKeydown),M(Qn,"keyup",e.handleKeyup),M(a,"scroll",e.scrollHandler)]},m(r,w){y(r,t,w),pe(W,t,null),$(t,i),$(t,n),pe(B,n,null),$(t,s),$(t,o),$(o,a);for(var k=0;k<q.length;k+=1)q[k].m(a,null);e.div1_binding(a),$(t,l),$(t,d),pe(K,d,null),$(t,c),$(t,u),pe(G,u,null),$(u,h),pe(Z,u,null),$(u,p),J&&J.m(u,null),$(u,f),pe(Q,u,null),$(u,g),$(u,v),$(v,m),$(m,b),$(u,x),pe(te,u,null),$(u,T),$(u,E),$(E,C),$(E,S),$(u,H),pe(ie,u,null),$(u,F),pe(ne,u,null),R=L(t,e.div8_resize_handler.bind(t)),e.div8_binding(t),V=!0},p(e,i){if(e.lineHeigth||e.items){X=i.items;for(var n=0;n<X.length;n+=1){const t=es(i,X,n);q[n]?(q[n].p(e,t),le(q[n],1)):(q[n]=ts(t),q[n].c(),le(q[n],1),q[n].m(a,null))}for(re(),n=X.length;n<q.length;n+=1)U(n);ae()}var s={};(e.items||e.lineHeigth)&&(s.cursorLineHeight=i.items.length*i.lineHeigth+8),K.$set(s),i.$hasVideo?J?le(J,1):((J=is()).c(),le(J,1),J.m(u,f)):J&&(re(),de(J,1,1,()=>{J=null}),ae()),V&&!e.$position||O===(O=tt(i.$position,!0))||I(b,O),V&&!e.$scale||j===(j=1/i.$scale)||I(C,j),V&&!e.playerwidth||N(t,"width",i.playerwidth+"px")},i(e){if(!V){le(W.$$.fragment,e),le(B.$$.fragment,e);for(var t=0;t<X.length;t+=1)le(q[t]);le(K.$$.fragment,e),le(G.$$.fragment,e),le(Z.$$.fragment,e),le(J),le(Q.$$.fragment,e),le(te.$$.fragment,e),le(ie.$$.fragment,e),le(ne.$$.fragment,e),V=!0}},o(e){de(W.$$.fragment,e),de(B.$$.fragment,e),q=q.filter(Boolean);for(let e=0;e<q.length;e+=1)de(q[e]);de(K.$$.fragment,e),de(G.$$.fragment,e),de(Z.$$.fragment,e),de(J),de(Q.$$.fragment,e),de(te.$$.fragment,e),de(ie.$$.fragment,e),de(ne.$$.fragment,e),V=!1},d(i){i&&w(t),fe(W),fe(B),k(q,i),e.div1_binding(null),fe(K),fe(G),fe(Z),J&&J.d(),fe(Q),fe(te),fe(ie),fe(ne),R.cancel(),e.div8_binding(null),r(D)}}}function ss(e,t,i){let n,s,o,r,a,l,c;d(e,Ee,e=>{i("$scrollPosition",n=e)}),d(e,Be,e=>{i("$hasAudio",s=e)}),d(e,qe,e=>{i("$paused",o=e)}),d(e,Ye,e=>{i("$position",r=e)}),d(e,ye,e=>{i("$scale",a=e)}),d(e,we,e=>{i("$duration",l=e)}),d(e,Ie,e=>{i("$hasVideo",c=e)});let u,h,p,{playerwidth:f=100}=t,g=new Array(1),v=et.waveform.height,m=0,b=null;B(()=>{ye.set(.01),we.set(10),Ee.set(0),p.style.setProperty("--outline",et.editor.outline),p.style.setProperty("--background",et.editor.background)}),X(()=>{Pe.set(p.getBoundingClientRect())});return e.$set=(e=>{"playerwidth"in e&&i("playerwidth",f=e.playerwidth)}),e.$$.update=((e={$scrollPosition:1,clientWidth:1})=>{e.$scrollPosition&&(e=>{h&&(h.scrollLeft=e,i("mixer",h))})(n),e.clientWidth&&(e=>{p&&Pe.set(p.getBoundingClientRect()),Te.set(e)})(u)}),{playerwidth:f,items:g,clientWidth:u,lineHeigth:v,mixer:h,editor:p,scrollHandler:e=>{Ee.set(e.target.scrollLeft)},handleKeydown:e=>{if(console.log("keyPressed",e),"Space"==e.code&&s&&(o?(e.shiftKey&&null===b&&(b=m),null!==b?window.dispatchEvent(new CustomEvent("videoButtonClick",{bubbles:!0,detail:{time:b,outbound:!0}})):window.dispatchEvent(new CustomEvent("videoButtonClick",{bubbles:!0,detail:{time:m,outbound:!0}}))):(m=r,window.dispatchEvent(new CustomEvent("videoButtonClick",{bubbles:!0,detail:{time:null,outbound:!0}})))),"ShiftLeft"==e.code&&o&&(b=r),"ArrowLeft"==e.code&&o){let t=r-a;t<0&&(t=0),e.shiftKey&&(t=it(10*parseInt(nt(t)/10))),Ye.set(t),m=t,b=null}if("ArrowRight"==e.code&&o){let t=r+a;t>l&&(t=l),e.shiftKey&&(t=it(10*(parseInt(nt(t)/10)+1))),Ye.set(t),m=t,b=null}},handleKeyup:e=>{"ShiftLeft"==e.code&&(b=null)},$position:r,$scale:a,$hasVideo:c,div1_binding:function(e){U[e?"unshift":"push"](()=>{i("mixer",h=e)})},div8_resize_handler:function(){u=this.clientWidth,i("clientWidth",u)},div8_binding:function(e){U[e?"unshift":"push"](()=>{i("editor",p=e)})}}}class os extends me{constructor(e){super(),ve(this,e,ss,ns,l,["playerwidth"])}}function rs(e){var t,i,n,s,o,a,l,d;return{c(){t=_("div"),i=_("div"),(n=_("div")).textContent="Select local video",s=P(),o=_("input"),a=P(),(l=_("button")).textContent="Select",z(n,"class","svelte-wlhmwj"),z(o,"type","file"),o.hidden=!0,z(o,"accept","video/mp4,video/x-m4v,video/*"),z(l,"class","svelte-wlhmwj"),z(i,"class","select-container svelte-wlhmwj"),z(t,"class","video svelte-wlhmwj"),N(t,"height",e.maxheight+"px"),d=[M(l,"click",e.handleSelectFile),M(t,"change",e.handleChange)]},m(r,d){y(r,t,d),$(t,i),$(i,n),$(i,s),$(i,o),e.input_binding(o),$(i,a),$(i,l)},p(e,i){e.maxheight&&N(t,"height",i.maxheight+"px")},d(i){i&&w(t),e.input_binding(null),r(d)}}}function as(e){var i,n,s,o,a=!e.$hasVideo&&rs(e);return{c(){i=_("video"),n=P(),a&&a.c(),s=C(),z(i,"id","pastelle-video-node"),N(i,"height",e.maxheight+"px"),i.muted=!0,z(i,"class","svelte-wlhmwj"),S(i,"hasvideo",e.$hasVideo),o=[M(i,"loadedmetadata",e.handleMetadata),M(i,"ended",e.handleEnded)]},m(t,o){y(t,i,o),e.video_1_binding(i),y(t,n,o),a&&a.m(t,o),y(t,s,o)},p(e,t){e.maxheight&&N(i,"height",t.maxheight+"px"),e.$hasVideo&&S(i,"hasvideo",t.$hasVideo),t.$hasVideo?a&&(a.d(1),a=null):a?a.p(e,t):((a=rs(t)).c(),a.m(s.parentNode,s))},i:t,o:t,d(t){t&&w(i),e.video_1_binding(null),t&&w(n),a&&a.d(t),t&&w(s),r(o)}}}function ls(e,t,i){let n,s,o,r,a,l,c,u,h,p,f,g,v,m;d(e,Ie,e=>{i("$hasVideo",n=e)}),d(e,ze,e=>{i("$videoLoop",s=e)}),d(e,Me,e=>{i("$videoNode",o=e)}),d(e,Se,e=>{i("$videoDuration",r=e)}),d(e,_e,e=>{i("$markers",a=e)}),d(e,Ce,e=>{i("$playFromButton",l=e)}),d(e,je,e=>{i("$audioPaused",c=e)}),d(e,Be,e=>{i("$hasAudio",u=e)}),d(e,Ve,e=>{i("$audioOffset",h=e)}),d(e,qe,e=>{i("$paused",p=e)}),d(e,Ye,e=>{i("$position",f=e)}),d(e,Fe,e=>{i("$audioNode",g=e)}),d(e,Le,e=>{i("$actualVideo",v=e)}),d(e,Te,e=>{i("$maxWidth",m=e)});let b,$,{maxheight:y=100}=t,w=0;B(()=>{let e;Me.set(b);const t=()=>{if(n){if(!s){let e=o.currentTime;w!==e&&(w=e,He.set(e),Ye.set(e)),e>=r?(ze.set(!0),Qe().then(()=>{Ye.set(r)})):e>=a.value.right&&!l?(console.log("will pause over marker"),ze.set(!0),Qe().then(()=>{Ye.set(a.value.right+it(.05)),o.currentTime=a.value.right+it(.05),Me.set(o)})):e>=a.value.left&&e<a.value.right?c&&u&&(console.log("playAudio ",e-a.value.left+h),ze.set(!0),Ue(e-a.value.left+h).then(()=>{ze.set(!1)}).catch(e=>{console.error(e)})):e>=a.value.right&&c&&u&&l&&(console.log("will play over marker"),ze.set(!0),Ue(e-a.value.left).then(()=>{ze.set(!1)}))}}else Ne.set(!0),p||(f=g.currentTime,Ye.set(f));e=requestAnimationFrame(t)};return window.addEventListener("videoButtonClick",e=>{if(ze.set(!0),p){let t=f;e.detail.time&&(t=e.detail.time),console.log("play by button",t),Ce.set(e.detail.outbound),Je(t).then(()=>{ze.set(!1)})}else Qe().then(()=>{console.log("paused by button",f)})}),e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e)}});return e.$set=(e=>{"maxheight"in e&&i("maxheight",y=e.maxheight)}),{maxheight:y,video:b,inputVideo:$,handleMetadata:e=>{Ie.set(!0),console.dir(e.target),Se.set(e.target.duration),we.set(e.target.duration);let t=v;t.ready=!0,Le.update(t),ke.fillMixerWindow(e.target.duration,m),_e.move(0,"left"),_e.move(e.target.duration,"right")},handleSelectFile:e=>{Qe().then(()=>{Ie.set(!1),He.set(0),Ye.set(0),$.click()})},handleChange:e=>{var t=e.target.files[0],i=(t.type,URL.createObjectURL(t));o.src=i,Me.set(o),Le.update(t),Le.update(t)},handleEnded:e=>{Qe().then(()=>{Ye.set(r)})},$hasVideo:n,video_1_binding:function(e){U[e?"unshift":"push"](()=>{i("video",b=e)})},input_binding:function(e){U[e?"unshift":"push"](()=>{i("inputVideo",$=e)})}}}class ds extends me{constructor(e){super(),ve(this,e,ls,as,l,["maxheight"])}}function cs(e){var t,i,n,s,o,r,a,l=new ds({props:{maxheight:e.maxheight}}),d=new os({props:{playerwidth:e.mixerWidth}});return{c(){t=_("div"),i=_("div"),l.$$.fragment.c(),s=P(),o=_("div"),d.$$.fragment.c(),ee(()=>e.div0_resize_handler.call(i)),z(i,"class","video-container svelte-7plza0"),N(i,"max-height",e.maxheight+"px"),N(i,"visibility",et.video.use?"visible":"hidden"),N(i,"max-width",et.video.use?"100%":"1px"),N(i,"background-color",et.video.background?et.video.background:"#eee"),N(i,"outline",et.video.outline?et.video.outline:"2px solid #000"),z(o,"class","mixer-container svelte-7plza0"),ee(()=>e.div2_resize_handler.call(t)),z(t,"class","pastelle-player-container svelte-7plza0"),N(t,"width",e.realWidth+"px")},m(c,u){y(c,t,u),$(t,i),pe(l,i,null),n=L(i,e.div0_resize_handler.bind(i)),$(t,s),$(t,o),pe(d,o,null),r=L(t,e.div2_resize_handler.bind(t)),a=!0},p(e,n){var s={};e.maxheight&&(s.maxheight=n.maxheight),l.$set(s),a&&!e.maxheight||N(i,"max-height",n.maxheight+"px"),a&&!e.config||(N(i,"visibility",et.video.use?"visible":"hidden"),N(i,"max-width",et.video.use?"100%":"1px"),N(i,"background-color",et.video.background?et.video.background:"#eee"),N(i,"outline",et.video.outline?et.video.outline:"2px solid #000"));var o={};e.mixerWidth&&(o.playerwidth=n.mixerWidth),d.$set(o),a&&!e.realWidth||N(t,"width",n.realWidth+"px")},i(e){a||(le(l.$$.fragment,e),le(d.$$.fragment,e),a=!0)},o(e){de(l.$$.fragment,e),de(d.$$.fragment,e),a=!1},d(e){e&&w(t),fe(l),n.cancel(),fe(d),r.cancel()}}}function us(e,t,i){let n,s,o,r,a,l,c;d(e,Ie,e=>{i("$hasVideo",n=e)}),d(e,we,e=>{i("$duration",s=e)});return B(()=>{setTimeout(()=>{we.set(300),_e.set({value:{left:0,right:0},min:0,max:s})},500)}),e.$$.update=((e={$hasVideo:1,maxwidth:1,videowidth:1})=>{(e.$hasVideo||e.maxwidth||e.videowidth)&&(i("realWidth",c=l),et.video.use||i("realWidth",c=100),i("mixerWidth",r=o-l-10))}),{maxwidth:o,mixerWidth:r,maxheight:a,videowidth:l,realWidth:c,div0_resize_handler:function(){l=this.clientWidth,i("videowidth",l)},div2_resize_handler:function(){a=this.clientHeight,o=this.clientWidth,i("maxheight",a),i("maxwidth",o)}}}class hs extends me{constructor(e){super(),ve(this,e,us,cs,l,[])}}function ps(e){const t=e-1;return t*t*t+1}function fs(e,{delay:t=0,duration:i=400,easing:n=ps,x:s=0,y:o=0,opacity:r=0}){const a=getComputedStyle(e),l=+a.opacity,d="none"===a.transform?"":a.transform,c=l*(1-r);return{delay:t,duration:i,easing:n,css:(e,t)=>`\n\t\t\ttransform: ${d} translate(${(1-e)*s}px, ${(1-e)*o}px);\n\t\t\topacity: ${l-c*t}`}}const gs=()=>({}),vs=()=>({}),ms=()=>({}),bs=()=>({});function $s(e){var t,i,n,s,o,a,l,d,p,f,g,v;const m=e.$$slots.title,b=c(m,e,bs);var x=new Sn({props:{height:"24"}});const T=e.$$slots.content,k=c(T,e,vs);return{c(){t=_("div"),i=_("div"),n=_("div"),b||(s=A("Title")),b&&b.c(),o=P(),x.$$.fragment.c(),a=P(),(l=_("button")).innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-ilooq9"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19\n\t\t\t            12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>',d=P(),p=_("div"),k&&k.c(),z(n,"class","svelte-ilooq9"),z(l,"class","svelte-ilooq9"),z(i,"class","header svelte-ilooq9"),z(p,"class","body"),z(t,"class","pastelle-modal svelte-ilooq9"),v=[M(l,"click",e.close),M(t,"click",e.click)]},l(e){b&&b.l(div0_nodes),k&&k.l(div2_nodes)},m(e,r){y(e,t,r),$(t,i),$(i,n),b?b.m(n,null):$(n,s),$(i,o),pe(x,i,null),$(i,a),$(i,l),$(t,d),$(t,p),k&&k.m(p,null),g=!0},p(e,t){b&&b.p&&e.$$scope&&b.p(h(m,t,e,ms),u(m,t,bs)),k&&k.p&&e.$$scope&&k.p(h(T,t,e,gs),u(T,t,vs))},i(e){g||(le(b,e),le(x.$$.fragment,e),le(k,e),ee(()=>{f||(f=ce(t,fs,{y:-500,duration:500},!0)),f.run(1)}),g=!0)},o(e){de(b,e),de(x.$$.fragment,e),de(k,e),f||(f=ce(t,fs,{y:-500,duration:500},!1)),f.run(0),g=!1},d(e){e&&w(t),b&&b.d(e),fe(x),k&&k.d(e),e&&f&&f.end(),r(v)}}}function ys(e){var t,i,n=e.visible&&$s(e);return{c(){n&&n.c(),t=C()},m(e,s){n&&n.m(e,s),y(e,t,s),i=!0},p(e,i){i.visible?n?(n.p(e,i),le(n,1)):((n=$s(i)).c(),le(n,1),n.m(t.parentNode,t)):n&&(re(),de(n,1,1,()=>{n=null}),ae())},i(e){i||(le(n),i=!0)},o(e){de(n),i=!1},d(e){n&&n.d(e),e&&w(t)}}}function ws(e,t,i){const n=q();let s=!0;B(()=>{console.log(name)});let{$$slots:o={},$$scope:r}=t;return e.$set=(e=>{"$$scope"in e&&i("$$scope",r=e.$$scope)}),{visible:s,close:e=>{i("visible",s=!1),n("close")},click:e=>{e.stopPropagation()},$$slots:o,$$scope:r}}class xs extends me{constructor(e){super(),ve(this,e,ws,ys,l,[])}}function Ts(e){var t;return{c(){(t=_("div")).innerHTML='<h2 class="svelte-1mvmgrr">Pastelle Media Player</h2> <span class="svelte-1mvmgrr">v 0.0.1(beta)</span>',z(t,"class","pastelle-modal-title svelte-1mvmgrr"),z(t,"slot","title")},m(e,i){y(e,t,i)},d(e){e&&w(t)}}}function ks(e){var i;return{c(){i=A("NONE")},m(e,t){y(e,i,t)},p:t,d(e){e&&w(i)}}}function _s(e){var t,i,n=e.$videoNode.id;return{c(){t=_("noscript"),i=_("noscript")},m(e,s){y(e,t,s),t.insertAdjacentHTML("afterend",n),y(e,i,s)},p(e,s){e.$videoNode&&n!==(n=s.$videoNode.id)&&(x(t,i),t.insertAdjacentHTML("afterend",n))},d(e){e&&(x(t,i),w(t),w(i))}}}function Es(e){var t,i,n,s,o,r,a,l,d,c,u,h,p,f,g,v,m=e.$actualVideo.name,b=e.$videoPaused?"<b>yes</b>":"<b>no</b>",x=parseFloat(e.$videoCurrentTime).toFixed(3),k=parseFloat(e.$videoDuration).toFixed(3);return{c(){t=_("div"),i=A("Actual Video\n        "),n=_("b"),s=A(m),o=P(),r=_("div"),a=A("video Paused\n        "),l=_("noscript"),d=P(),c=_("div"),u=A("video current time\n        "),h=_("b"),p=A(x),f=A("\n        Duration\n        "),g=_("b"),v=A(k),z(n,"class","svelte-1mvmgrr"),z(t,"class","svelte-1mvmgrr"),z(r,"class","svelte-1mvmgrr"),z(h,"class","svelte-1mvmgrr"),z(g,"class","svelte-1mvmgrr"),z(c,"class","svelte-1mvmgrr")},m(e,m){y(e,t,m),$(t,i),$(t,n),$(n,s),y(e,o,m),y(e,r,m),$(r,a),$(r,l),l.insertAdjacentHTML("afterend",b),y(e,d,m),y(e,c,m),$(c,u),$(c,h),$(h,p),$(c,f),$(c,g),$(g,v)},p(e,t){e.$actualVideo&&m!==(m=t.$actualVideo.name)&&I(s,m),e.$videoPaused&&b!==(b=t.$videoPaused?"<b>yes</b>":"<b>no</b>")&&(T(l),l.insertAdjacentHTML("afterend",b)),e.$videoCurrentTime&&x!==(x=parseFloat(t.$videoCurrentTime).toFixed(3))&&I(p,x),e.$videoDuration&&k!==(k=parseFloat(t.$videoDuration).toFixed(3))&&I(v,k)},d(e){e&&(w(t),w(o),w(r),w(d),w(c))}}}function As(e){var i;return{c(){i=A("NONE")},m(e,t){y(e,i,t)},p:t,d(e){e&&w(i)}}}function Ps(e){var t,i,n=e.$audioNode.id;return{c(){t=_("noscript"),i=_("noscript")},m(e,s){y(e,t,s),t.insertAdjacentHTML("afterend",n),y(e,i,s)},p(e,s){e.$audioNode&&n!==(n=s.$audioNode.id)&&(x(t,i),t.insertAdjacentHTML("afterend",n))},d(e){e&&(x(t,i),w(t),w(i))}}}function Cs(e){var i;return{c(){i=A("NONE")},m(e,t){y(e,i,t)},p:t,d(e){e&&w(i)}}}function Ms(e){var t,i,n=e.$audioNode.currentTime;return{c(){t=_("noscript"),i=_("noscript")},m(e,s){y(e,t,s),t.insertAdjacentHTML("afterend",n),y(e,i,s)},p(e,s){e.$audioNode&&n!==(n=s.$audioNode.currentTime)&&(x(t,i),t.insertAdjacentHTML("afterend",n))},d(e){e&&(x(t,i),w(t),w(i))}}}function zs(e){var t,i,n,s,o,r,a,l,d,c,u,h,p,f,g,v,m,b,k,E,C,M,N,L,S,H,F,R,V,D,O,j,W,B,X,q,Y,U,K,G,Z,J,Q,ee,te,ie,ne,se,oe,re,ae,le,de,ce,ue,he,pe,fe,ge,ve,me,be,$e,ye,we,xe,Te,ke=e.$ready?"<b>yes</b>":"<b>no</b>",_e=e.$paused?"<b>yes</b>":"<b>no</b>",Ee=e.$hasVideo?"<b>yes</b>":"<b>no</b>",Ae=e.$hasAudio?"<b>yes</b>":"<b>no</b>",Pe=e.$audioActualTrack?"<b>"+e.$audioActualTrack.title+"</b>":"<b>none</b>",Ce=e.$audioActualTrack?"<b>"+e.$audioActualTrack.uuid+"</b>":"<b>none</b>",Me=e.$audioPaused?"<b>yes</b>":"<b>no</b>",ze=parseFloat(e.$audioDuration).toFixed(3),Ie=parseFloat(e.$audioCurrentTime).toFixed(3),Ne=parseFloat(e.$position).toFixed(3),Le=parseFloat(e.$markers.value.left).toFixed(3),Se=parseFloat(e.$markers.value.right).toFixed(3);function He(e){return e.$videoNode?_s:ks}var Fe=He(e),Re=Fe(e),Ve=e.$hasVideo&&Es(e);function De(e){return e.$audioNode?Ps:As}var Oe=De(e),je=Oe(e);function We(e){return e.$audioNode?Ms:Cs}var Be=We(e),Xe=Be(e);return{c(){t=_("div"),i=_("div"),n=A("Ready\n      "),s=_("noscript"),o=_("noscript"),r=A("\n      Paused\n      "),a=_("noscript"),l=P(),d=_("div"),c=A("Video Node\n      "),u=_("b"),Re.c(),h=P(),p=_("div"),f=A("Has Video\n      "),g=_("noscript"),v=P(),Ve&&Ve.c(),m=P(),b=_("div"),k=A("Audio Node\n      "),E=_("b"),je.c(),C=P(),M=_("div"),N=A("Has Audio\n      "),L=_("noscript"),S=P(),H=_("div"),F=A("Actual Track\n      "),R=_("noscript"),V=_("noscript"),D=P(),O=_("br"),j=A("\n      Track UUID\n      "),W=_("noscript"),B=P(),X=_("div"),q=A("Audio Paused\n      "),Y=_("noscript"),U=P(),K=_("div"),G=A("Audio Duration\n      "),Z=_("b"),J=A(ze),Q=P(),ee=_("br"),te=A("\n      Current Time\n      "),ie=_("b"),ne=A(Ie),se=P(),oe=_("br"),re=A("\n      Time\n      "),ae=_("b"),Xe.c(),le=P(),de=_("div"),ce=A("Position\n      "),ue=_("b"),he=A(Ne),pe=A("\n      Offset\n      "),fe=_("b"),ge=A(e.$audioOffset),ve=P(),me=_("div"),be=A("Markers Left:\n      "),$e=_("b"),ye=A(Le),we=A("\n      Right:\n      "),xe=_("b"),Te=A(Se),z(i,"class","svelte-1mvmgrr"),z(u,"class","svelte-1mvmgrr"),z(d,"class","svelte-1mvmgrr"),z(p,"class","svelte-1mvmgrr"),z(E,"class","svelte-1mvmgrr"),z(b,"class","svelte-1mvmgrr"),z(M,"class","svelte-1mvmgrr"),z(O,"class","svelte-1mvmgrr"),z(H,"class","svelte-1mvmgrr"),z(X,"class","svelte-1mvmgrr"),z(Z,"class","svelte-1mvmgrr"),z(ee,"class","svelte-1mvmgrr"),z(ie,"class","svelte-1mvmgrr"),z(oe,"class","svelte-1mvmgrr"),z(ae,"class","svelte-1mvmgrr"),z(K,"class","svelte-1mvmgrr"),z(ue,"class","svelte-1mvmgrr"),z(fe,"class","svelte-1mvmgrr"),z(de,"class","svelte-1mvmgrr"),z($e,"class","svelte-1mvmgrr"),z(xe,"class","svelte-1mvmgrr"),z(me,"class","svelte-1mvmgrr"),z(t,"class","content svelte-1mvmgrr"),z(t,"slot","content")},m(e,w){y(e,t,w),$(t,i),$(i,n),$(i,s),s.insertAdjacentHTML("afterend",ke),$(i,o),$(i,r),$(i,a),a.insertAdjacentHTML("afterend",_e),$(t,l),$(t,d),$(d,c),$(d,u),Re.m(u,null),$(t,h),$(t,p),$(p,f),$(p,g),g.insertAdjacentHTML("afterend",Ee),$(t,v),Ve&&Ve.m(t,null),$(t,m),$(t,b),$(b,k),$(b,E),je.m(E,null),$(t,C),$(t,M),$(M,N),$(M,L),L.insertAdjacentHTML("afterend",Ae),$(t,S),$(t,H),$(H,F),$(H,R),R.insertAdjacentHTML("afterend",Pe),$(H,V),$(H,D),$(H,O),$(H,j),$(H,W),W.insertAdjacentHTML("afterend",Ce),$(t,B),$(t,X),$(X,q),$(X,Y),Y.insertAdjacentHTML("afterend",Me),$(t,U),$(t,K),$(K,G),$(K,Z),$(Z,J),$(K,Q),$(K,ee),$(K,te),$(K,ie),$(ie,ne),$(K,se),$(K,oe),$(K,re),$(K,ae),Xe.m(ae,null),$(t,le),$(t,de),$(de,ce),$(de,ue),$(ue,he),$(de,pe),$(de,fe),$(fe,ge),$(t,ve),$(t,me),$(me,be),$(me,$e),$($e,ye),$(me,we),$(me,xe),$(xe,Te)},p(e,i){e.$ready&&ke!==(ke=i.$ready?"<b>yes</b>":"<b>no</b>")&&(x(s,o),s.insertAdjacentHTML("afterend",ke)),e.$paused&&_e!==(_e=i.$paused?"<b>yes</b>":"<b>no</b>")&&(T(a),a.insertAdjacentHTML("afterend",_e)),Fe===(Fe=He(i))&&Re?Re.p(e,i):(Re.d(1),(Re=Fe(i))&&(Re.c(),Re.m(u,null))),e.$hasVideo&&Ee!==(Ee=i.$hasVideo?"<b>yes</b>":"<b>no</b>")&&(T(g),g.insertAdjacentHTML("afterend",Ee)),i.$hasVideo?Ve?Ve.p(e,i):((Ve=Es(i)).c(),Ve.m(t,m)):Ve&&(Ve.d(1),Ve=null),Oe===(Oe=De(i))&&je?je.p(e,i):(je.d(1),(je=Oe(i))&&(je.c(),je.m(E,null))),e.$hasAudio&&Ae!==(Ae=i.$hasAudio?"<b>yes</b>":"<b>no</b>")&&(T(L),L.insertAdjacentHTML("afterend",Ae)),e.$audioActualTrack&&Pe!==(Pe=i.$audioActualTrack?"<b>"+i.$audioActualTrack.title+"</b>":"<b>none</b>")&&(x(R,V),R.insertAdjacentHTML("afterend",Pe)),e.$audioActualTrack&&Ce!==(Ce=i.$audioActualTrack?"<b>"+i.$audioActualTrack.uuid+"</b>":"<b>none</b>")&&(T(W),W.insertAdjacentHTML("afterend",Ce)),e.$audioPaused&&Me!==(Me=i.$audioPaused?"<b>yes</b>":"<b>no</b>")&&(T(Y),Y.insertAdjacentHTML("afterend",Me)),e.$audioDuration&&ze!==(ze=parseFloat(i.$audioDuration).toFixed(3))&&I(J,ze),e.$audioCurrentTime&&Ie!==(Ie=parseFloat(i.$audioCurrentTime).toFixed(3))&&I(ne,Ie),Be===(Be=We(i))&&Xe?Xe.p(e,i):(Xe.d(1),(Xe=Be(i))&&(Xe.c(),Xe.m(ae,null))),e.$position&&Ne!==(Ne=parseFloat(i.$position).toFixed(3))&&I(he,Ne),e.$audioOffset&&I(ge,i.$audioOffset),e.$markers&&Le!==(Le=parseFloat(i.$markers.value.left).toFixed(3))&&I(ye,Le),e.$markers&&Se!==(Se=parseFloat(i.$markers.value.right).toFixed(3))&&I(Te,Se)},d(e){e&&w(t),Re.d(),Ve&&Ve.d(),je.d(),Xe.d()}}}function Is(e){var i;return{c(){i=P()},m(e,t){y(e,i,t)},p:t,d(e){e&&w(i)}}}function Ns(e){var t,i=new xs({props:{$$slots:{default:[Is],content:[zs],title:[Ts]},$$scope:{ctx:e}}});return i.$on("close",e.close_handler),{c(){i.$$.fragment.c()},m(e,n){pe(i,e,n),t=!0},p(e,t){var n={};(e.$$scope||e.$markers||e.$audioOffset||e.$position||e.$audioNode||e.$audioCurrentTime||e.$audioDuration||e.$audioPaused||e.$audioActualTrack||e.$hasAudio||e.$hasVideo||e.$videoDuration||e.$videoCurrentTime||e.$videoPaused||e.$actualVideo||e.$videoNode||e.$paused||e.$ready)&&(n.$$scope={changed:e,ctx:t}),i.$set(n)},i(e){t||(le(i.$$.fragment,e),t=!0)},o(e){de(i.$$.fragment,e),t=!1},d(e){fe(i,e)}}}function Ls(e,t,i){let n,s,o,r,a,l,c,u,h,p,f,g,v,m,b,$,y;return d(e,Xe,e=>{i("$ready",n=e)}),d(e,qe,e=>{i("$paused",s=e)}),d(e,Me,e=>{i("$videoNode",o=e)}),d(e,Ie,e=>{i("$hasVideo",r=e)}),d(e,Le,e=>{i("$actualVideo",a=e)}),d(e,Ne,e=>{i("$videoPaused",l=e)}),d(e,He,e=>{i("$videoCurrentTime",c=e)}),d(e,Se,e=>{i("$videoDuration",u=e)}),d(e,Fe,e=>{i("$audioNode",h=e)}),d(e,Be,e=>{i("$hasAudio",p=e)}),d(e,Re,e=>{i("$audioActualTrack",f=e)}),d(e,je,e=>{i("$audioPaused",g=e)}),d(e,De,e=>{i("$audioDuration",v=e)}),d(e,Oe,e=>{i("$audioCurrentTime",m=e)}),d(e,Ye,e=>{i("$position",b=e)}),d(e,Ve,e=>{i("$audioOffset",$=e)}),d(e,_e,e=>{i("$markers",y=e)}),{close_handler:function(t){!function(e,t){const i=e.$$.callbacks[t.type];i&&i.slice().forEach(e=>e(t))}(e,t)},$ready:n,$paused:s,$videoNode:o,$hasVideo:r,$actualVideo:a,$videoPaused:l,$videoCurrentTime:c,$videoDuration:u,$audioNode:h,$hasAudio:p,$audioActualTrack:f,$audioPaused:g,$audioDuration:v,$audioCurrentTime:m,$position:b,$audioOffset:$,$markers:y}}class Ss extends me{constructor(e){super(),ve(this,e,Ls,Ns,l,[])}}function Hs(e){var t,i,n,s,o=e.slot;if(o){var r=new o({});r.$on("close",e.end)}return{c(){t=_("div"),r&&r.$$.fragment.c(),z(t,"class","pastelle-modal-background svelte-5eb8fw"),N(t,"visibility",e.destroyed?"hidden":"visible"),s=M(t,"click",e.end)},m(e,i){y(e,t,i),r&&pe(r,t,null),n=!0},p(e,i){if(o!==(o=i.slot)){if(r){re();const e=r;de(e.$$.fragment,1,0,()=>{fe(e,1)}),ae()}o?((r=new o({})).$on("close",i.end),r.$$.fragment.c(),le(r.$$.fragment,1),pe(r,t,null)):r=null}n&&!e.destroyed||N(t,"visibility",i.destroyed?"hidden":"visible")},i(e){n||(r&&le(r.$$.fragment,e),ee(()=>{i||(i=ce(t,Rs,{},!0)),i.run(1)}),n=!0)},o(e){r&&de(r.$$.fragment,e),i||(i=ce(t,Rs,{},!1)),i.run(0),n=!1},d(e){e&&w(t),r&&fe(r),e&&i&&i.end(),s()}}}function Fs(e){var t,i,n=!e.destroyed&&e.slot&&Hs(e);return{c(){n&&n.c(),t=C()},m(e,s){n&&n.m(e,s),y(e,t,s),i=!0},p(e,i){!i.destroyed&&i.slot?n?(n.p(e,i),le(n,1)):((n=Hs(i)).c(),le(n,1),n.m(t.parentNode,t)):n&&(re(),de(n,1,1,()=>{n=null}),ae())},i(e){i||(le(n),i=!0)},o(e){de(n),i=!1},d(e){n&&n.d(e),e&&w(t)}}}function Rs(e,{delay:t=0,duration:i=400}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:i,css:e=>`opacity: ${e*n}`}}function Vs(e,t,i){const n={ModalInfo:Ss};let s,o,r=!0,a=null;B(()=>{console.log(name),window.addEventListener("modal",e=>{"open"===e.detail.action&&n[e.detail.content]?(i("slot",a=n[e.detail.content]),l(!1)):l(!0)})});const l=e=>{e?(document.body.style.overflow=s,document.body.scrollHeight>document.body.clientHeight&&(document.body.style["padding-right"]=o+"px")):(s=document.body.style.overflow,o=parseInt(document.body.style["padding-right"])||0,console.log(o),document.body.scrollHeight>document.body.clientHeight&&(document.body.style["padding-right"]=o+15+"px"),document.body.style.overflow="hidden"),i("destroyed",r=e)};return{destroyed:r,slot:a,end:()=>{l(!0)}}}class Ds extends me{constructor(e){super(),ve(this,e,Vs,Fs,l,[])}}function Os(e){var i,n,s=new hs({});return{c(){i=_("div"),s.$$.fragment.c()},m(e,t){y(e,i,t),pe(s,i,null),n=!0},p:t,i(e){n||(le(s.$$.fragment,e),n=!0)},o(e){de(s.$$.fragment,e),n=!1},d(e){e&&w(i),fe(s)}}}function js(e,t,i){let n;return B(()=>{console.log("mounded app");let e=document.getElementById("pastelle-modals");e||((e=document.createElement("div")).id="pastelle-modals",document.body.insertBefore(e,document.body.firstChild),n=new Ds({target:e}))}),{}}class Ws extends me{constructor(e){super(),ve(this,e,js,Os,l,[])}}const Bs=document.getElementById("pastelle-player");if(Bs){new Ws({target:Bs})}else alert("target for player not found");return e}();
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    const globals = (typeof window !== 'undefined' ? window : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.20.1' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/Light.svelte generated by Svelte v3.20.1 */
    const file = "src/Light.svelte";

    // (33:2) {#if status === 'loading'}
    function create_if_block_2(ctx) {
    	let svg;
    	let circle;
    	let animate0;
    	let path0;
    	let animate1;
    	let path1;
    	let animate2;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			circle = svg_element("circle");
    			animate0 = svg_element("animate");
    			path0 = svg_element("path");
    			animate1 = svg_element("animate");
    			path1 = svg_element("path");
    			animate2 = svg_element("animate");
    			attr_dev(animate0, "attributeName", "fill-opacity");
    			attr_dev(animate0, "repeatCount", "indefinite");
    			attr_dev(animate0, "dur", "1s");
    			attr_dev(animate0, "values", "0;1;1");
    			attr_dev(animate0, "keyTimes", "0;0.2;1");
    			attr_dev(animate0, "begin", "0s");
    			add_location(animate0, file, 42, 8, 857);
    			attr_dev(circle, "cx", "28");
    			attr_dev(circle, "cy", "75");
    			attr_dev(circle, "r", "11");
    			attr_dev(circle, "fill", "#346b21");
    			add_location(circle, file, 41, 6, 802);
    			attr_dev(animate1, "attributeName", "stroke-opacity");
    			attr_dev(animate1, "repeatCount", "indefinite");
    			attr_dev(animate1, "dur", "1s");
    			attr_dev(animate1, "values", "0;1;1");
    			attr_dev(animate1, "keyTimes", "0;0.2;1");
    			attr_dev(animate1, "begin", "0.1s");
    			add_location(animate1, file, 56, 8, 1183);
    			attr_dev(path0, "d", "M28 47A28 28 0 0 1 56 75");
    			attr_dev(path0, "fill", "none");
    			attr_dev(path0, "stroke", "#94d137");
    			attr_dev(path0, "stroke-width", "10");
    			add_location(path0, file, 51, 6, 1060);
    			attr_dev(animate2, "attributeName", "stroke-opacity");
    			attr_dev(animate2, "repeatCount", "indefinite");
    			attr_dev(animate2, "dur", "1s");
    			attr_dev(animate2, "values", "0;1;1");
    			attr_dev(animate2, "keyTimes", "0;0.2;1");
    			attr_dev(animate2, "begin", "0.2s");
    			add_location(animate2, file, 69, 8, 1510);
    			attr_dev(path1, "d", "M28 25A50 50 0 0 1 78 75");
    			attr_dev(path1, "fill", "none");
    			attr_dev(path1, "stroke", "#b3e46e");
    			attr_dev(path1, "stroke-width", "10");
    			add_location(path1, file, 64, 6, 1387);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    			set_style(svg, "margin", "auto");
    			set_style(svg, "display", "block");
    			attr_dev(svg, "width", "32px");
    			attr_dev(svg, "height", "32px");
    			attr_dev(svg, "viewBox", "0 0 100 100");
    			attr_dev(svg, "preserveAspectRatio", "xMidYMid");
    			attr_dev(svg, "class", "svelte-13cl8ib");
    			add_location(svg, file, 33, 4, 552);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, circle);
    			append_dev(circle, animate0);
    			append_dev(svg, path0);
    			append_dev(path0, animate1);
    			append_dev(svg, path1);
    			append_dev(path1, animate2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(33:2) {#if status === 'loading'}",
    		ctx
    	});

    	return block;
    }

    // (80:2) {#if status === 'search'}
    function create_if_block_1(ctx) {
    	let svg;
    	let g3;
    	let g2;
    	let g1;
    	let g0;
    	let animateTransform;
    	let path0;
    	let path1;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			g3 = svg_element("g");
    			g2 = svg_element("g");
    			g1 = svg_element("g");
    			g0 = svg_element("g");
    			animateTransform = svg_element("animateTransform");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			attr_dev(animateTransform, "attributeName", "transform");
    			attr_dev(animateTransform, "type", "translate");
    			attr_dev(animateTransform, "repeatCount", "indefinite");
    			attr_dev(animateTransform, "dur", "1s");
    			attr_dev(animateTransform, "values", "-20 -20;20 -20;0 20;-20 -20");
    			attr_dev(animateTransform, "keyTimes", "0;0.33;0.66;1");
    			add_location(animateTransform, file, 92, 14, 2220);
    			attr_dev(path0, "fill", "#46dff0");
    			attr_dev(path0, "d", "M44.19 26.158c-4.817 0-9.345 1.876-12.751 5.282c-3.406\n                3.406-5.282 7.934-5.282 12.751 c0 4.817 1.876 9.345 5.282\n                12.751c3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876\n                12.751-5.282 c3.406-3.406 5.282-7.934\n                5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536 28.033\n                49.007 26.158 44.19 26.158z");
    			add_location(path0, file, 99, 14, 2490);
    			attr_dev(path1, "fill", "#000000");
    			attr_dev(path1, "d", "M78.712 72.492L67.593 61.373l-3.475-3.475c1.621-2.352\n                2.779-4.926 3.475-7.596c1.044-4.008 1.044-8.23 0-12.238\n                c-1.048-4.022-3.146-7.827-6.297-10.979C56.572 22.362 50.381 20\n                44.19 20C38 20 31.809 22.362 27.085 27.085 c-9.447 9.447-9.447\n                24.763 0 34.21C31.809 66.019 38 68.381 44.19 68.381c4.798 0\n                9.593-1.425 13.708-4.262l9.695 9.695 l4.899 4.899C73.351 79.571\n                74.476 80 75.602 80s2.251-0.429 3.11-1.288C80.429 76.994 80.429\n                74.209 78.712 72.492z M56.942 56.942 c-3.406 3.406-7.934\n                5.282-12.751\n                5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751\n                c0-4.817 1.876-9.345 5.282-12.751c3.406-3.406 7.934-5.282\n                12.751-5.282c4.817 0 9.345 1.876 12.751 5.282 c3.406 3.406 5.282\n                7.934 5.282 12.751C62.223 49.007 60.347 53.536 56.942 56.942z");
    			add_location(path1, file, 107, 14, 2939);
    			attr_dev(g0, "transform", "translate(-2.27248 -20)");
    			add_location(g0, file, 91, 12, 2166);
    			attr_dev(g1, "transform", "translate(-50 -50)");
    			add_location(g1, file, 90, 10, 2119);
    			attr_dev(g2, "transform", "scale(0.8)");
    			add_location(g2, file, 89, 8, 2082);
    			attr_dev(g3, "transform", "translate(50 50)");
    			add_location(g3, file, 88, 6, 2041);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    			set_style(svg, "margin", "auto");
    			set_style(svg, "background", "rgb(241, 242, 243)");
    			set_style(svg, "display", "block");
    			attr_dev(svg, "width", "32px");
    			attr_dev(svg, "height", "32px");
    			attr_dev(svg, "viewBox", "0 0 100 100");
    			attr_dev(svg, "preserveAspectRatio", "xMidYMid");
    			attr_dev(svg, "class", "svelte-13cl8ib");
    			add_location(svg, file, 80, 4, 1759);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, g3);
    			append_dev(g3, g2);
    			append_dev(g2, g1);
    			append_dev(g1, g0);
    			append_dev(g0, animateTransform);
    			append_dev(g0, path0);
    			append_dev(g0, path1);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(80:2) {#if status === 'search'}",
    		ctx
    	});

    	return block;
    }

    // (130:2) {#if status === 'ready'}
    function create_if_block(ctx) {
    	let svg;
    	let g;
    	let path;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			g = svg_element("g");
    			path = svg_element("path");
    			set_style(path, "fill", "#00ff00");
    			attr_dev(path, "d", "M31.923,9.14L13.417,27.642c-0.496,0.494-1.299,0.494-1.793,0L0.37,16.316\n          c-0.494-0.496-0.494-1.302,0-1.795l2.689-2.687c0.496-0.495,1.299-0.495,1.793,0l7.678,7.729L27.438,4.654\n          c0.494-0.494,1.297-0.494,1.795,0l2.689,2.691C32.421,7.84,32.421,8.646,31.923,9.14z");
    			add_location(path, file, 140, 8, 4289);
    			add_location(g, file, 139, 6, 4277);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
    			attr_dev(svg, "width", "32px");
    			attr_dev(svg, "height", "32px");
    			attr_dev(svg, "x", "4");
    			attr_dev(svg, "y", "4");
    			attr_dev(svg, "viewBox", "-2 -2 38 38");
    			attr_dev(svg, "preserveAspectRatio", "xMidYMid");
    			attr_dev(svg, "class", "svelte-13cl8ib");
    			add_location(svg, file, 130, 4, 4047);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, g);
    			append_dev(g, path);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(130:2) {#if status === 'ready'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let div;
    	let t0;
    	let t1;
    	let dispose;
    	let if_block0 = /*status*/ ctx[0] === "loading" && create_if_block_2(ctx);
    	let if_block1 = /*status*/ ctx[0] === "search" && create_if_block_1(ctx);
    	let if_block2 = /*status*/ ctx[0] === "ready" && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			if (if_block2) if_block2.c();
    			attr_dev(div, "class", "box svelte-13cl8ib");
    			add_location(div, file, 31, 0, 501);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor, remount) {
    			insert_dev(target, div, anchor);
    			if (if_block0) if_block0.m(div, null);
    			append_dev(div, t0);
    			if (if_block1) if_block1.m(div, null);
    			append_dev(div, t1);
    			if (if_block2) if_block2.m(div, null);
    			if (remount) dispose();
    			dispose = listen_dev(window, "dbstatus", /*dbStatus*/ ctx[1], false, false, false);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*status*/ ctx[0] === "loading") {
    				if (!if_block0) {
    					if_block0 = create_if_block_2(ctx);
    					if_block0.c();
    					if_block0.m(div, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*status*/ ctx[0] === "search") {
    				if (!if_block1) {
    					if_block1 = create_if_block_1(ctx);
    					if_block1.c();
    					if_block1.m(div, t1);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (/*status*/ ctx[0] === "ready") {
    				if (!if_block2) {
    					if_block2 = create_if_block(ctx);
    					if_block2.c();
    					if_block2.m(div, null);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let status = "loading";
    	let result = null;

    	const dbStatus = event => {
    		try {
    			$$invalidate(0, status = event.detail.status);
    			result = event.detail.result;
    		} catch(error) {
    			$$invalidate(0, status = "error");
    		}
    	};

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Light> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Light", $$slots, []);
    	$$self.$capture_state = () => ({ onMount, status, result, dbStatus });

    	$$self.$inject_state = $$props => {
    		if ("status" in $$props) $$invalidate(0, status = $$props.status);
    		if ("result" in $$props) result = $$props.result;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [status, dbStatus];
    }

    class Light extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Light",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.20.1 */

    const { console: console_1, window: window_1 } = globals;
    const file$1 = "src/App.svelte";

    function create_fragment$1(ctx) {
    	let div1;
    	let input;
    	let t0;
    	let span0;
    	let t1;
    	let span1;
    	let t2;
    	let label;
    	let svg;
    	let path0;
    	let path1;
    	let t3;
    	let span2;
    	let t5;
    	let div0;
    	let t6;
    	let span3;
    	let t7;
    	let current;
    	let dispose;
    	const light = new Light({ $$inline: true });

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			input = element("input");
    			t0 = space();
    			span0 = element("span");
    			t1 = space();
    			span1 = element("span");
    			t2 = space();
    			label = element("label");
    			svg = svg_element("svg");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			t3 = space();
    			span2 = element("span");
    			span2.textContent = "Search";
    			t5 = space();
    			div0 = element("div");
    			create_component(light.$$.fragment);
    			t6 = space();
    			span3 = element("span");
    			t7 = text(/*timeText*/ ctx[0]);
    			attr_dev(input, "id", "input");
    			attr_dev(input, "type", "text");
    			attr_dev(input, "class", "svelte-17jqyns");
    			add_location(input, file$1, 263, 2, 5596);
    			attr_dev(span0, "class", "highlight svelte-17jqyns");
    			add_location(span0, file$1, 264, 2, 5651);
    			attr_dev(span1, "class", "bar svelte-17jqyns");
    			add_location(span1, file$1, 265, 2, 5680);
    			attr_dev(path0, "d", "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3\n        9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5\n        4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01\n        14 9.5 11.99 14 9.5 14z");
    			add_location(path0, file$1, 272, 6, 5829);
    			attr_dev(path1, "d", "M0 0h24v24H0z");
    			attr_dev(path1, "fill", "none");
    			add_location(path1, file$1, 277, 6, 6115);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "height", "24");
    			attr_dev(svg, "viewBox", "0 0 24 24");
    			attr_dev(svg, "width", "24");
    			attr_dev(svg, "class", "svelte-17jqyns");
    			add_location(svg, file$1, 267, 4, 5715);
    			attr_dev(span2, "class", "svelte-17jqyns");
    			add_location(span2, file$1, 279, 4, 6169);
    			attr_dev(label, "class", "svelte-17jqyns");
    			add_location(label, file$1, 266, 2, 5703);
    			attr_dev(div0, "class", "search-light svelte-17jqyns");
    			add_location(div0, file$1, 281, 2, 6202);
    			set_style(span3, "position", "absolute");
    			set_style(span3, "right", "0");
    			set_style(span3, "font-size", "80%");
    			set_style(span3, "color", "#afbac4");
    			attr_dev(span3, "class", "svelte-17jqyns");
    			add_location(span3, file$1, 284, 2, 6254);
    			attr_dev(div1, "class", "pastelle-search-group svelte-17jqyns");
    			add_location(div1, file$1, 262, 0, 5558);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor, remount) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, input);
    			append_dev(div1, t0);
    			append_dev(div1, span0);
    			append_dev(div1, t1);
    			append_dev(div1, span1);
    			append_dev(div1, t2);
    			append_dev(div1, label);
    			append_dev(label, svg);
    			append_dev(svg, path0);
    			append_dev(svg, path1);
    			append_dev(label, t3);
    			append_dev(label, span2);
    			append_dev(div1, t5);
    			append_dev(div1, div0);
    			mount_component(light, div0, null);
    			append_dev(div1, t6);
    			append_dev(div1, span3);
    			append_dev(span3, t7);
    			current = true;
    			if (remount) run_all(dispose);

    			dispose = [
    				listen_dev(window_1, "load", /*onLoad*/ ctx[2], false, false, false),
    				listen_dev(input, "input", /*doSearch*/ ctx[1], false, false, false)
    			];
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*timeText*/ 1) set_data_dev(t7, /*timeText*/ ctx[0]);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(light.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(light.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_component(light);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let el = null;
    	let status = "loading";
    	let result = null;
    	let timeText = 0;

    	const doSearch = event => {
    		if (window.searchWorker) {
    			window.searchWorker.postMessage({
    				cmd: "search",
    				data: event.target.value || ""
    			});
    		}
    	};

    	const createWorker = data => {
    		window.searchWorker = new Worker(window.URL.createObjectURL(data));

    		if (window.searchWorker) {
    			getData();
    			window.searchWorker.onmessage = messageHandler;
    		}
    	};

    	const getData = () => {
    		var headers = new Headers();

    		var init = {
    			method: "GET",
    			headers,
    			mode: "cors",
    			cache: "default"
    		};

    		const dbStatus = new CustomEvent("dbstatus",
    		{
    				bubbles: true,
    				detail: { status: "loading", result: null }
    			});

    		window.dispatchEvent(dbStatus);

    		fetch("/data/data.json", init).then(function (response) {
    			return response.json();
    		}).then(function (data) {
    			window.searchWorker.postMessage({ cmd: "init", data: data.result });
    		});
    	};

    	const messageHandler = e => {
    		switch (e.data.cmd) {
    			case "status":
    				let dbstatus = new CustomEvent("dbstatus", { bubbles: true, detail: e.data.data });
    				window.dispatchEvent(dbstatus);
    				break;
    			case "search":
    				$$invalidate(0, timeText = parseFloat(e.data.data.time).toFixed(2) + "ms");
    				let dbsearch = new CustomEvent("dbsearch", { bubbles: true, detail: e.data.data });
    				window.dispatchEvent(dbsearch);
    				break;
    			case "tracks":
    				let dbtracks = new CustomEvent("dbtracks", { bubbles: true, detail: e.data.data });
    				window.dispatchEvent(dbtracks);
    				break;
    		}
    	};

    	const dbStatus = event => {
    		try {
    			status = event.detail.status;
    			result = event.detail.result;
    		} catch(error) {
    			status = "error";
    		}
    	};

    	const dispatchCloseEvent = () => {
    		// 1. Create the custom event.
    		const event = new CustomEvent("message",
    		{
    				detail: result,
    				bubbles: true,
    				cancelable: true,
    				composed: true, // makes the event jump shadow DOM boundary
    				
    			});

    		// 2. Dispatch the custom event.
    		el.dispatchEvent(event);
    	};

    	const onLoad = event => {
    		console.log("loading window");

    		fetch("/workers/worker.js").then(response => {
    			return response.blob();
    		}).then(data => {
    			createWorker(data);
    		});
    	};

    	onMount(() => {
    		return () => {
    			
    		};
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("App", $$slots, []);

    	$$self.$capture_state = () => ({
    		Light,
    		onMount,
    		el,
    		status,
    		result,
    		timeText,
    		doSearch,
    		createWorker,
    		getData,
    		messageHandler,
    		dbStatus,
    		dispatchCloseEvent,
    		onLoad
    	});

    	$$self.$inject_state = $$props => {
    		if ("el" in $$props) el = $$props.el;
    		if ("status" in $$props) status = $$props.status;
    		if ("result" in $$props) result = $$props.result;
    		if ("timeText" in $$props) $$invalidate(0, timeText = $$props.timeText);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [timeText, doSearch, onLoad];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    let target = document.getElementById("search");
    console.log(target);

    var app = new App({
      target: target,
    });

    return app;

}());
var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function c(t,e,n){t.$$.on_destroy.push(l(e,n))}function i(t,e,n,s){if(t){const r=a(t,e,n,s);return t[0](r)}}function a(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function u(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}function d(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function w(){return g(" ")}function v(){return g("")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e,n){e in t?t[e]=n:k(t,e,n)}function b(t,e){e=""+e,t.data!==e&&(t.data=e)}function M(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function H(t,e,n){t.classList[n?"add":"remove"](e)}let z;function j(t){z=t}function T(){if(!z)throw new Error("Function called outside component initialization");return z}function E(t){T().$$.on_mount.push(t)}function _(t){T().$$.on_destroy.push(t)}function L(){const t=T();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach(e=>{e.call(t,r)})}}}function W(t){return T().$$.context.get(t)}const q=[],B=[],N=[],C=[],A=Promise.resolve();let S=!1;function V(){S||(S=!0,A.then(U))}function P(){return V(),A}function O(t){N.push(t)}function I(t){C.push(t)}let D=!1;const F=new Set;function U(){if(!D){D=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];j(e),G(e.$$)}for(q.length=0;B.length;)B.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];F.has(e)||(F.add(e),e())}N.length=0}while(q.length);for(;C.length;)C.pop()();S=!1,D=!1,F.clear()}}function G(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function R(){K.r||s(K.c),K=K.p}function X(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Y(t,e,n,s){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push(()=>{J.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function Z(t,e){Y(t,1,1,()=>{e.delete(t.key)})}function tt(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function et(t){t&&t.c()}function nt(t,n,o){const{fragment:l,on_mount:c,on_destroy:i,after_update:a}=t.$$;l&&l.m(n,o),O(()=>{const n=c.map(e).filter(r);i?i.push(...n):s(n),t.$$.on_mount=[]}),a.forEach(O)}function st(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(e,r,o,l,c,i,a=[-1]){const u=z;j(e);const d=r.props||{},$=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a};let p=!1;if($.ctx=o?o(e,d,(t,n,...s)=>{const r=s.length?s[0]:n;return $.ctx&&c($.ctx[t],$.ctx[t]=r)&&($.bound[t]&&$.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(q.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],$.update(),p=!0,s($.before_update),$.fragment=!!l&&l($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();r.intro&&X(e.$$.fragment),nt(e,r.target,r.anchor),U()}j(u)}class ot{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const lt=[];function ct(e,n=t){let s;const r=[];function l(t){if(o(e,t)&&(e=t,s)){const t=!lt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),lt.push(n,e)}if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(o,c=t){const i=[o,c];return r.push(i),1===r.length&&(s=n(l)||t),o(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}function it(e,n,o){const c=!Array.isArray(e),i=c?[e]:e,a=n.length<2;return{subscribe:ct(o,e=>{let o=!1;const u=[];let d=0,$=t;const f=()=>{if(d)return;$();const s=n(c?u[0]:u,e);a?e(s):$=r(s)?s:t},p=i.map((t,e)=>l(t,t=>{u[e]=t,d&=~(1<<e),o&&f()},()=>{d|=1<<e}));return o=!0,f(),function(){s(p),$()}}).subscribe}}const at=ct({}),ut=ct(0),dt=it(at,t=>t.descriptions?t.descriptions:[]),$t=it(at,t=>t.titles?t.titles:[]),ft=it(at,t=>t.categories?t.categories:[]),pt=it(at,t=>t.authors?t.authors:[]),mt=it(at,t=>t.tags?t.tags:[]),ht=t=>({item:16&t}),gt=t=>({item:t[23].data});function wt(t,e,n){const s=t.slice();return s[23]=e[n],s}function vt(t,e){let n,s,r;const o=e[19].default,l=i(o,e,e[18],gt),c=l||function(t){let e;return{c(){e=g("Missing template")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}();return{key:t,first:null,c(){n=m("svelte-virtual-list-row"),c&&c.c(),s=w(),y(n,"class","svelte-1tqh76q"),this.first=n},m(t,e){$(t,n,e),c&&c.m(n,null),d(n,s),r=!0},p(t,e){l&&l.p&&262160&e&&l.p(a(o,t,t[18],gt),u(o,t[18],e,ht))},i(t){r||(X(c,t),r=!0)},o(t){Y(c,t),r=!1},d(t){t&&f(n),c&&c.d(t)}}}function xt(t){let e,n,s,r,o,l=[],c=new Map,i=t[4];const a=t=>t[23].index;for(let e=0;e<i.length;e+=1){let n=wt(t,i,e),s=a(n);c.set(s,l[e]=vt(s,n))}return{c(){e=m("svelte-virtual-list-viewport"),n=m("svelte-virtual-list-contents");for(let t=0;t<l.length;t+=1)l[t].c();M(n,"padding-top",t[5]+"px"),M(n,"padding-bottom",t[6]+"px"),y(n,"class","svelte-1tqh76q"),M(e,"height",t[0]),y(e,"class","svelte-1tqh76q"),O(()=>t[22].call(e))},m(c,i,a){$(c,e,i),d(e,n);for(let t=0;t<l.length;t+=1)l[t].m(n,null);t[20](n),t[21](e),s=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=document.createElement("object");let s;return n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.type="text/html",n.tabIndex=-1,n.onload=()=>{s=n.contentDocument.defaultView,s.addEventListener("resize",e)},/Trident/.test(navigator.userAgent)?(t.appendChild(n),n.data="about:blank"):(n.data="about:blank",t.appendChild(n)),{cancel:()=>{s&&s.removeEventListener&&s.removeEventListener("resize",e),t.removeChild(n)}}}(e,t[22].bind(e)),r=!0,a&&o(),o=x(e,"scroll",t[7])},p(t,[s]){if(262160&s){const e=t[4];Q(),l=function(t,e,n,s,r,o,l,c,i,a,u,d){let $=t.length,f=o.length,p=$;const m={};for(;p--;)m[t[p].key]=p;const h=[],g=new Map,w=new Map;for(p=f;p--;){const t=d(r,o,p),c=n(t);let i=l.get(c);i?s&&i.p(t,e):(i=a(c,t),i.c()),g.set(c,h[p]=i),c in m&&w.set(c,Math.abs(p-m[c]))}const v=new Set,x=new Set;function k(t){X(t,1),t.m(c,u,l.has(t.key)),l.set(t.key,t),u=t.first,f--}for(;$&&f;){const e=h[f-1],n=t[$-1],s=e.key,r=n.key;e===n?(u=e.first,$--,f--):g.has(r)?!l.has(s)||v.has(s)?k(e):x.has(r)?$--:w.get(s)>w.get(r)?(x.add(s),k(e)):(v.add(r),$--):(i(n,l),$--)}for(;$--;){const e=t[$];g.has(e.key)||i(e,l)}for(;f;)k(h[f-1]);return h}(l,s,a,1,t,e,c,n,Z,vt,null,wt),R()}(!r||32&s)&&M(n,"padding-top",t[5]+"px"),(!r||64&s)&&M(n,"padding-bottom",t[6]+"px"),(!r||1&s)&&M(e,"height",t[0])},i(t){if(!r){for(let t=0;t<i.length;t+=1)X(l[t]);r=!0}},o(t){for(let t=0;t<l.length;t+=1)Y(l[t]);r=!1},d(n){n&&f(e);for(let t=0;t<l.length;t+=1)l[t].d();t[20](null),t[21](null),s.cancel(),o()}}}function kt(t,e,n){let s,r,o,l,c,i,{items:a}=e,{height:u="100%"}=e,{itemHeight:d}=e,{start:$=0}=e,{end:f=0}=e,p=[],m=0,h=0,g=0;async function w(t,e,o){const{scrollTop:l}=r;await P();let c=h-l,a=$;for(;c<e&&a<t.length;){let t=s[a-$];t||(n(9,f=a+1),await P(),t=s[a-$]),c+=p[a]=o||t.offsetHeight,a+=1}n(9,f=a);const u=t.length-f;i=(h+c)/f,n(6,g=u*i),p.length=t.length}E(()=>{s=o.getElementsByTagName("svelte-virtual-list-row"),n(14,c=!0)});let{$$slots:v={},$$scope:x}=e;return t.$set=t=>{"items"in t&&n(10,a=t.items),"height"in t&&n(0,u=t.height),"itemHeight"in t&&n(11,d=t.itemHeight),"start"in t&&n(8,$=t.start),"end"in t&&n(9,f=t.end),"$$scope"in t&&n(18,x=t.$$scope)},t.$$.update=()=>{1792&t.$$.dirty&&n(4,l=a.slice($,f).map((t,e)=>({index:e+$,data:t}))),19464&t.$$.dirty&&c&&w(a,m,d)},[u,r,o,m,l,h,g,async function(){const{scrollTop:t}=r,e=$;for(let t=0;t<s.length;t+=1)p[$+t]=d||s[t].offsetHeight;let o=0,l=0;for(;o<a.length;){const e=p[o]||i;if(l+e>t){n(8,$=o),n(5,h=l);break}l+=e,o+=1}for(;o<a.length&&(l+=p[o]||i,o+=1,!(l>t+m)););n(9,f=o);const c=a.length-f;for(i=l/f;o<a.length;)p[o++]=i;if(n(6,g=c*i),$<e){await P();let n=0,o=0;for(let t=$;t<e;t+=1)s[t-$]&&(n+=p[t],o+=d||s[t-$].offsetHeight);const l=o-n;r.scrollTo(0,t+l)}},$,f,a,d,p,s,c,i,void 0,w,x,v,function(t){B[t?"unshift":"push"](()=>{n(2,o=t)})},function(t){B[t?"unshift":"push"](()=>{n(1,r=t)})},function(){m=this.offsetHeight,n(3,m)}]}class yt extends ot{constructor(t){super(),rt(this,t,kt,xt,o,{items:10,height:0,itemHeight:11,start:8,end:9})}}const bt=t=>({color:1&t}),Mt=t=>({color:t[0]});function Ht(t){let e,n,s,r;const o=t[2].default,l=i(o,t,t[1],Mt);return{c(){e=m("div"),n=m("div"),s=w(),l&&l.c(),k(n,"class","pmsr-focus-helper svelte-11wre3t"),k(e,"class","pmsr-icon-button svelte-11wre3t")},m(t,o){$(t,e,o),d(e,n),d(e,s),l&&l.m(e,null),r=!0},p(t,[e]){l&&l.p&&3&e&&l.p(a(o,t,t[1],Mt),u(o,t[1],e,bt))},i(t){r||(X(l,t),r=!0)},o(t){Y(l,t),r=!1},d(t){t&&f(e),l&&l.d(t)}}}function zt(t,e,n){let{color:s="#000000"}=e,{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"color"in t&&n(0,s=t.color),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class jt extends ot{constructor(t){super(),rt(this,t,zt,Ht,o,{color:0})}}function Tt(e){let n,s,r;return{c(){n=h("svg"),s=h("path"),r=h("path"),k(s,"d","M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"),k(r,"d","M0 0h24v24H0z"),k(r,"fill","none"),M(n,"fill",e[0]),k(n,"xmlns","http://www.w3.org/2000/svg"),k(n,"height","24"),k(n,"viewBox","0 0 24 24"),k(n,"width","24")},m(t,e){$(t,n,e),d(n,s),d(n,r)},p(t,[e]){1&e&&M(n,"fill",t[0])},i:t,o:t,d(t){t&&f(n)}}}function Et(t,e,n){let{color:s}=e;return t.$set=t=>{"color"in t&&n(0,s=t.color)},[s]}class _t extends ot{constructor(t){super(),rt(this,t,Et,Tt,o,{color:0})}}function Lt(e){let n,s,r;return{c(){n=h("svg"),s=h("path"),r=h("path"),k(s,"d","M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0\n    4h14v-2H7v2zM7 7v2h14V7H7z"),k(r,"d","M0 0h24v24H0z"),k(r,"fill","none"),M(n,"fill",e[0]),k(n,"xmlns","http://www.w3.org/2000/svg"),k(n,"height","24"),k(n,"viewBox","0 0 24 24"),k(n,"width","24")},m(t,e){$(t,n,e),d(n,s),d(n,r)},p(t,[e]){1&e&&M(n,"fill",t[0])},i:t,o:t,d(t){t&&f(n)}}}function Wt(t,e,n){let{color:s}=e;return t.$set=t=>{"color"in t&&n(0,s=t.color)},[s]}class qt extends ot{constructor(t){super(),rt(this,t,Wt,Lt,o,{color:0})}}function Bt(e){let n,s,r;return{c(){n=h("svg"),s=h("path"),r=h("path"),k(s,"d","M0 0h24v24H0z"),k(s,"fill","none"),k(r,"d","M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0\n    3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4\n    6.86-8.55 11.54L12 21.35z"),M(n,"fill",e[0]),k(n,"xmlns","http://www.w3.org/2000/svg"),k(n,"height","24"),k(n,"viewBox","0 0 24 24"),k(n,"width","24")},m(t,e){$(t,n,e),d(n,s),d(n,r)},p(t,[e]){1&e&&M(n,"fill",t[0])},i:t,o:t,d(t){t&&f(n)}}}function Nt(t,e,n){let{color:s}=e;return t.$set=t=>{"color"in t&&n(0,s=t.color)},[s]}class Ct extends ot{constructor(t){super(),rt(this,t,Nt,Bt,o,{color:0})}}function At(e){let n,s,r;return{c(){n=h("svg"),s=h("path"),r=h("path"),k(s,"d","M0 0h24v24H0zm18.31 6l-2.76 5z"),k(s,"fill","none"),k(r,"d","M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7\n    22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9\n    2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41\n    1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16\n    6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2\n    2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"),M(n,"fill",e[0]),k(n,"xmlns","http://www.w3.org/2000/svg"),k(n,"height","24"),k(n,"viewBox","0 0 24 24"),k(n,"width","24")},m(t,e){$(t,n,e),d(n,s),d(n,r)},p(t,[e]){1&e&&M(n,"fill",t[0])},i:t,o:t,d(t){t&&f(n)}}}function St(t,e,n){let{color:s}=e;return t.$set=t=>{"color"in t&&n(0,s=t.color)},[s]}class Vt extends ot{constructor(t){super(),rt(this,t,St,At,o,{color:0})}}function Pt(t){let e,n,s;return{c(){e=h("svg"),n=h("path"),s=h("path"),k(n,"d","M6 19h4V5H6v14zm8-14v14h4V5h-4z"),k(s,"d","M0 0h24v24H0z"),k(s,"fill","none"),M(e,"fill",t[0]),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"height","24"),k(e,"viewBox","0 0 24 24"),k(e,"width","24")},m(t,r){$(t,e,r),d(e,n),d(e,s)},p(t,n){1&n&&M(e,"fill",t[0])},d(t){t&&f(e)}}}function Ot(t){let e,n,s;return{c(){e=h("svg"),n=h("path"),s=h("path"),k(n,"d","M8 5v14l11-7z"),k(s,"d","M0 0h24v24H0z"),k(s,"fill","none"),M(e,"fill",t[0]),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"height","24"),k(e,"viewBox","0 0 24 24"),k(e,"width","24")},m(t,r){$(t,e,r),d(e,n),d(e,s)},p(t,n){1&n&&M(e,"fill",t[0])},d(t){t&&f(e)}}}function It(e){let n,s,r,o,l,c=e[1]&&Pt(e),i=!e[1]&&Ot(e);return{c(){n=m("div"),s=m("div"),r=w(),c&&c.c(),o=w(),i&&i.c(),k(s,"class","pmsr-focus-helper svelte-9ouvzi"),k(n,"class","pmsr-play-button svelte-9ouvzi")},m(t,a,u){$(t,n,a),d(n,s),d(n,r),c&&c.m(n,null),d(n,o),i&&i.m(n,null),u&&l(),l=x(n,"click",e[2])},p(t,[e]){t[1]?c?c.p(t,e):(c=Pt(t),c.c(),c.m(n,o)):c&&(c.d(1),c=null),t[1]?i&&(i.d(1),i=null):i?i.p(t,e):(i=Ot(t),i.c(),i.m(n,null))},i:t,o:t,d(t){t&&f(n),c&&c.d(),i&&i.d(),l()}}}function Dt(t,e,n){let{color:s="#000000"}=e,{track:r=null}=e;const o=L();let l=!1;const c=t=>{r.uuid==t.detail.uuid&&(t.stopPropagation(),n(1,l=!t.detail.paused),o("update",t.detail))};return E(()=>{window.addEventListener("pastelle-play-change",c,{passive:!0})}),_(()=>{window.removeEventListener("pastelle-play-change",c,!0)}),t.$set=t=>{"color"in t&&n(0,s=t.color),"track"in t&&n(3,r=t.track)},[s,l,()=>{console.log("click");let t={title:r.title,url:`https://stage.squync.com/api/MUSIC/${r.uuid}/song.mp3`,author:r.username,duration:r.duration,uuid:r.uuid,paused:!l},e=document.getElementById("pastelle-audio-node");e&&!window.pastelle_audio_node?(console.log("first click"),window.pastelle_audio_node=!0,e.src="music/silence.mp3",e.play(),setTimeout(()=>{e.pause(),window.dispatchEvent(new CustomEvent("pastelle-play",{bubbles:!1,cancelable:!0,detail:t}))},100)):(console.log("second click"),window.dispatchEvent(new CustomEvent("pastelle-play",{bubbles:!1,cancelable:!0,detail:t})))},r]}class Ft extends ot{constructor(t){super(),rt(this,t,Dt,It,o,{color:0,track:3})}}function Ut(t){let e,n,s,r,o,l,c,i,a,u,p,h,v,x,y,M,H,z,j,T,E,_,L,W,q,B,N,C,A,S,V,P,O=t[2](t[0].duration)+"",I=t[0].title+"",D=t[0].username+"",F=t[0].description+"",U=t[0].description_s+"";const G=new Ft({props:{track:t[0],color:"#afbac4"}});G.$on("update",t[3]);const J=new jt({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),K=new jt({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),Q=new jt({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),R=new jt({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}});return{c(){e=m("div"),n=m("div"),s=m("div"),r=m("div"),o=m("div"),et(G.$$.fragment),l=w(),c=m("span"),i=g(O),a=w(),u=m("div"),p=m("div"),h=m("div"),v=w(),x=m("i"),y=g(D),M=w(),H=m("div"),et(J.$$.fragment),z=w(),j=m("div"),et(K.$$.fragment),T=w(),et(Q.$$.fragment),E=w(),_=m("div"),L=m("div"),W=w(),q=m("div"),B=m("div"),N=m("p"),C=w(),A=m("p"),S=w(),V=m("div"),et(R.$$.fragment),k(o,"class","pmsr-play svelte-2wwli0"),k(r,"class","pmsr-left-box svelte-2wwli0"),k(h,"class","pmsr-title svelte-2wwli0"),k(x,"class","svelte-2wwli0"),k(p,"class","pmsr-title-line svelte-2wwli0"),k(u,"class","pmsr-middle-box svelte-2wwli0"),k(H,"class","pmsr-chart-button svelte-2wwli0"),k(j,"class","pmsr-download-button svelte-2wwli0"),k(s,"class","pmsr-top svelte-2wwli0"),k(L,"style",t[1]),k(L,"class","svelte-2wwli0"),k(_,"class","pmsr-indicator svelte-2wwli0"),k(N,"class","svelte-2wwli0"),k(A,"class","svelte-2wwli0"),k(B,"class","pmsr-middle-box svelte-2wwli0"),k(V,"class","pmsr-commands-box svelte-2wwli0"),k(q,"class","pmsr-bottom svelte-2wwli0"),k(n,"class","pmsr-card svelte-2wwli0"),k(e,"class","pmsr-track svelte-2wwli0")},m(t,f){$(t,e,f),d(e,n),d(n,s),d(s,r),d(r,o),nt(G,o,null),d(o,l),d(o,c),d(c,i),d(s,a),d(s,u),d(u,p),d(p,h),h.innerHTML=I,d(p,v),d(p,x),d(x,y),d(s,M),d(s,H),nt(J,H,null),d(s,z),d(s,j),nt(K,j,null),d(s,T),nt(Q,s,null),d(n,E),d(n,_),d(_,L),d(n,W),d(n,q),d(q,B),d(B,N),N.innerHTML=F,d(B,C),d(B,A),A.innerHTML=U,d(q,S),d(q,V),nt(R,V,null),P=!0},p(t,e){const n={};1&e&&(n.track=t[0]),G.$set(n),(!P||1&e)&&O!==(O=t[2](t[0].duration)+"")&&b(i,O),(!P||1&e)&&I!==(I=t[0].title+"")&&(h.innerHTML=I),(!P||1&e)&&D!==(D=t[0].username+"")&&b(y,D);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),J.$set(s);const r={};16&e&&(r.$$scope={dirty:e,ctx:t}),K.$set(r);const o={};16&e&&(o.$$scope={dirty:e,ctx:t}),Q.$set(o),(!P||2&e)&&k(L,"style",t[1]),(!P||1&e)&&F!==(F=t[0].description+"")&&(N.innerHTML=F),(!P||1&e)&&U!==(U=t[0].description_s+"")&&(A.innerHTML=U);const l={};16&e&&(l.$$scope={dirty:e,ctx:t}),R.$set(l)},i(t){P||(X(G.$$.fragment,t),X(J.$$.fragment,t),X(K.$$.fragment,t),X(Q.$$.fragment,t),X(R.$$.fragment,t),P=!0)},o(t){Y(G.$$.fragment,t),Y(J.$$.fragment,t),Y(K.$$.fragment,t),Y(Q.$$.fragment,t),Y(R.$$.fragment,t),P=!1},d(t){t&&f(e),st(G),st(J),st(K),st(Q),st(R)}}}function Gt(e){let n;const s=new Vt({props:{color:"#afbac4"}});return{c(){et(s.$$.fragment)},m(t,e){nt(s,t,e),n=!0},p:t,i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(t){st(s,t)}}}function Jt(e){let n;const s=new _t({props:{color:"#afbac4"}});return{c(){et(s.$$.fragment)},m(t,e){nt(s,t,e),n=!0},p:t,i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(t){st(s,t)}}}function Kt(e){let n;const s=new Ct({props:{color:"#afbac4"}});return{c(){et(s.$$.fragment)},m(t,e){nt(s,t,e),n=!0},p:t,i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(t){st(s,t)}}}function Qt(e){let n;const s=new qt({props:{color:"#afbac4"}});return{c(){et(s.$$.fragment)},m(t,e){nt(s,t,e),n=!0},p:t,i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(t){st(s,t)}}}function Rt(t){let e,n,s=t[0]&&Ut(t);return{c(){s&&s.c(),e=v()},m(t,r){s&&s.m(t,r),$(t,e,r),n=!0},p(t,[n]){t[0]?s?(s.p(t,n),X(s,1)):(s=Ut(t),s.c(),X(s,1),s.m(e.parentNode,e)):s&&(Q(),Y(s,1,1,()=>{s=null}),R())},i(t){n||(X(s),n=!0)},o(t){Y(s),n=!1},d(t){s&&s.d(t),t&&f(e)}}}function Xt(t,e,n){let{track:s}=e,r="width: 0%";E(async()=>{});return _(async()=>{console.log("destroy ",s.title)}),t.$set=t=>{"track"in t&&n(0,s=t.track)},[s,r,t=>{var e=parseInt(t,10),n=e%60;return n<10&&(n="0"+n),Math.floor(e/60)+":"+n},t=>{n(1,r=`width: ${t.detail.time}%`)}]}class Yt extends ot{constructor(t){super(),rt(this,t,Xt,Rt,o,{track:0})}}function Zt(t){let e,n,s;function r(e){t[9].call(null,e)}function o(e){t[10].call(null,e)}let l={items:t[1],$$slots:{default:[te,({item:t})=>({12:t}),({item:t})=>t?4096:0]},$$scope:{ctx:t}};void 0!==t[2]&&(l.start=t[2]),void 0!==t[3]&&(l.end=t[3]);const c=new yt({props:l});return B.push(()=>tt(c,"start",r)),B.push(()=>tt(c,"end",o)),{c(){et(c.$$.fragment)},m(t,e){nt(c,t,e),s=!0},p(t,s){const r={};2&s&&(r.items=t[1]),12288&s&&(r.$$scope={dirty:s,ctx:t}),!e&&4&s&&(e=!0,r.start=t[2],I(()=>e=!1)),!n&&8&s&&(n=!0,r.end=t[3],I(()=>n=!1)),c.$set(r)},i(t){s||(X(c.$$.fragment,t),s=!0)},o(t){Y(c.$$.fragment,t),s=!1},d(t){st(c,t)}}}function te(t){let e;const n=new Yt({props:{track:t[12]}});return{c(){et(n.$$.fragment)},m(t,s){nt(n,t,s),e=!0},p(t,e){const s={};4096&e&&(s.track=t[12]),n.$set(s)},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){st(n,t)}}}function ee(t){let e,n,s,r=t[1].length>0&&t[5]&&Zt(t);return{c(){e=m("div"),r&&r.c(),k(e,"class","pmsr-tracks-container svelte-18cjvzm"),M(e,"height",t[0]+"px")},m(o,l,c){$(o,e,l),r&&r.m(e,null),t[11](e),n=!0,c&&s(),s=x(window,"dbtracks",t[6])},p(t,[s]){t[1].length>0&&t[5]?r?(r.p(t,s),X(r,1)):(r=Zt(t),r.c(),X(r,1),r.m(e,null)):r&&(Q(),Y(r,1,1,()=>{r=null}),R()),(!n||1&s)&&M(e,"height",t[0]+"px")},i(t){n||(X(r),n=!0)},o(t){Y(r),n=!1},d(n){n&&f(e),r&&r.d(),t[11](null),s()}}}function ne(t,e,n){let{height:s}=e;const r=L();let o,l,c,i=[],a=!1;const u=(t,e)=>{r("status",{start:t,end:e})};return E(()=>{}),t.$set=t=>{"height"in t&&n(0,s=t.height)},t.$$.update=()=>{12&t.$$.dirty&&u(o,l)},[s,i,o,l,c,a,t=>{n(2,o=0),n(3,l=0),n(5,a=!1),n(1,i=[]),setTimeout(()=>{n(1,i=t.detail),n(5,a=!0)},100)},r,u,function(t){o=t,n(2,o)},function(t){l=t,n(3,l)},function(t){B[t?"unshift":"push"](()=>{n(4,c=t)})}]}class se extends ot{constructor(t){super(),rt(this,t,ne,ee,o,{height:0})}}function re(t){let e,n;const s=t[1].default,r=i(s,t,t[0],null);return{c(){e=m("span"),r&&r.c(),k(e,"class","pmsr-badge svelte-3qwpd2")},m(t,s){$(t,e,s),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&1&e&&r.p(a(s,t,t[0],null),u(s,t[0],e,null))},i(t){n||(X(r,t),n=!0)},o(t){Y(r,t),n=!1},d(t){t&&f(e),r&&r.d(t)}}}function oe(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class le extends ot{constructor(t){super(),rt(this,t,oe,re,o,{})}}function ce(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function ie(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function ae(t){let e,n,s=t[3],r=[];for(let e=0;e<s.length;e+=1)r[e]=fe(ie(t,s,e));const o=t=>Y(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=v()},m(t,s){for(let e=0;e<r.length;e+=1)r[e].m(t,s);$(t,e,s),n=!0},p(t,n){if(28&n){let l;for(s=t[3],l=0;l<s.length;l+=1){const o=ie(t,s,l);r[l]?(r[l].p(o,n),X(r[l],1)):(r[l]=fe(o),r[l].c(),X(r[l],1),r[l].m(e.parentNode,e))}for(Q(),l=s.length;l<r.length;l+=1)o(l);R()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)X(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Y(r[t]);n=!1},d(t){p(r,t),t&&f(e)}}}function ue(t){let e,n=t[9].tracks.length+"";return{c(){e=g(n)},m(t,n){$(t,e,n)},p(t,s){8&s&&n!==(n=t[9].tracks.length+"")&&b(e,n)},d(t){t&&f(e)}}}function de(t){let e;return{c(){e=m("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="svelte-1j2h4uj"><path d="M22 12l-4-4v3H3v2h15v3z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg> \n                ',k(e,"class","svelte-1j2h4uj")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function $e(t){let e,n,s,r=t[12]+"",o=t[9].text.length-1>t[14]&&de();return{c(){e=m("div"),n=w(),o&&o.c(),s=v(),k(e,"class","svelte-1j2h4uj")},m(t,l){$(t,e,l),e.innerHTML=r,$(t,n,l),o&&o.m(t,l),$(t,s,l)},p(t,n){8&n&&r!==(r=t[12]+"")&&(e.innerHTML=r),t[9].text.length-1>t[14]?o||(o=de(),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},d(t){t&&f(e),t&&f(n),o&&o.d(t),t&&f(s)}}}function fe(t){let e,n,s,r,o,l,c;const i=new le({props:{class:"pmsr-item-count",$$slots:{default:[ue]},$$scope:{ctx:t}}});let a=t[9].text,u=[];for(let e=0;e<a.length;e+=1)u[e]=$e(ce(t,a,e));return{c(){e=m("div"),et(i.$$.fragment),n=w(),s=m("div");for(let t=0;t<u.length;t+=1)u[t].c();r=w(),k(s,"class","pmsr-item svelte-1j2h4uj"),k(e,"class","pmsr-line svelte-1j2h4uj"),k(e,"id",o=t[11]),H(e,"pmsr-selected",t[2]==t[11])},m(o,a,f){$(o,e,a),nt(i,e,null),d(e,n),d(e,s);for(let t=0;t<u.length;t+=1)u[t].m(s,null);d(e,r),l=!0,f&&c(),c=x(e,"click",t[4])},p(t,n){const r={};if(32776&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r),8&n){let e;for(a=t[9].text,e=0;e<a.length;e+=1){const r=ce(t,a,e);u[e]?u[e].p(r,n):(u[e]=$e(r),u[e].c(),u[e].m(s,null))}for(;e<u.length;e+=1)u[e].d(1);u.length=a.length}4&n&&H(e,"pmsr-selected",t[2]==t[11])},i(t){l||(X(i.$$.fragment,t),l=!0)},o(t){Y(i.$$.fragment,t),l=!1},d(t){t&&f(e),st(i),p(u,t),c()}}}function pe(t){let e,n,s,r,o=t[3]&&ae(t);const l=new se({props:{height:t[1]}});return{c(){e=m("div"),n=m("div"),o&&o.c(),s=w(),et(l.$$.fragment),k(n,"class","pmsr-categories-list svelte-1j2h4uj"),M(n,"height",t[1]+"px"),k(e,"class","pmsr-container svelte-1j2h4uj")},m(c,i){$(c,e,i),d(e,n),o&&o.m(n,null),d(e,s),nt(l,e,null),t[8](e),r=!0},p(t,[e]){t[3]?o?(o.p(t,e),X(o,1)):(o=ae(t),o.c(),X(o,1),o.m(n,null)):o&&(Q(),Y(o,1,1,()=>{o=null}),R()),(!r||2&e)&&M(n,"height",t[1]+"px");const s={};2&e&&(s.height=t[1]),l.$set(s)},i(t){r||(X(o),X(l.$$.fragment,t),r=!0)},o(t){Y(o),Y(l.$$.fragment,t),r=!1},d(n){n&&f(e),o&&o.d(),st(l),t[8](null)}}}function me(t,e,n){let s,r,o,l;c(t,ft,t=>n(3,s=t)),c(t,ut,t=>n(5,r=t));let i=0;const a=t=>{try{if(t.length>0){let e={tracks:t[0].tracks};t[0].tracks&&window.searchWorker.postMessage({cmd:"tracks",data:e})}else window.searchWorker.postMessage({cmd:"tracks",data:[]})}catch(t){window.searchWorker.postMessage({cmd:"tracks",data:[]})}};return E(()=>{n(1,l=o.parentNode.clientHeight-r)}),t.$$.update=()=>{8&t.$$.dirty&&a(s)},[o,l,i,s,t=>{try{n(2,i=t.target.id);let e={tracks:s[i].tracks};window.searchWorker.postMessage({cmd:"tracks",data:e})}catch(t){window.searchWorker.postMessage({cmd:"tracks",data:[]})}},r,[],a,function(t){B[t?"unshift":"push"](()=>{n(0,o=t)})}]}class he extends ot{constructor(t){super(),rt(this,t,me,pe,o,{})}}function ge(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function we(t){let e,n,s=t[3],r=[];for(let e=0;e<s.length;e+=1)r[e]=xe(ge(t,s,e));const o=t=>Y(r[t],1,1,()=>{r[t]=null});return{c(){e=m("div");for(let t=0;t<r.length;t+=1)r[t].c();k(e,"class","pmsr-tags-list svelte-ojrr2d"),M(e,"height",t[1]+"px")},m(t,s){$(t,e,s);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,l){if(28&l){let n;for(s=t[3],n=0;n<s.length;n+=1){const o=ge(t,s,n);r[n]?(r[n].p(o,l),X(r[n],1)):(r[n]=xe(o),r[n].c(),X(r[n],1),r[n].m(e,null))}for(Q(),n=s.length;n<r.length;n+=1)o(n);R()}(!n||2&l)&&M(e,"height",t[1]+"px")},i(t){if(!n){for(let t=0;t<s.length;t+=1)X(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Y(r[t]);n=!1},d(t){t&&f(e),p(r,t)}}}function ve(t){let e,n=t[9].tracks.length+"";return{c(){e=g(n)},m(t,n){$(t,e,n)},p(t,s){8&s&&n!==(n=t[9].tracks.length+"")&&b(e,n)},d(t){t&&f(e)}}}function xe(t){let e,n,s,r,o,l,c,i=t[9].text+"";const a=new le({props:{class:"pmsr-item-count",$$slots:{default:[ve]},$$scope:{ctx:t}}});return{c(){e=m("div"),et(a.$$.fragment),n=w(),s=m("div"),r=w(),k(s,"class","pmsr-item svelte-ojrr2d"),k(e,"class","pmsr-line svelte-ojrr2d"),k(e,"id",o=t[11]),H(e,"pmsr-selected",t[2]==t[11])},m(o,u,f){$(o,e,u),nt(a,e,null),d(e,n),d(e,s),s.innerHTML=i,d(e,r),l=!0,f&&c(),c=x(e,"click",t[4])},p(t,n){const r={};4104&n&&(r.$$scope={dirty:n,ctx:t}),a.$set(r),(!l||8&n)&&i!==(i=t[9].text+"")&&(s.innerHTML=i),4&n&&H(e,"pmsr-selected",t[2]==t[11])},i(t){l||(X(a.$$.fragment,t),l=!0)},o(t){Y(a.$$.fragment,t),l=!1},d(t){t&&f(e),st(a),c()}}}function ke(t){let e,n,s,r=t[3].length>0&&we(t);const o=new se({props:{height:t[1]}});return{c(){e=m("div"),r&&r.c(),n=w(),et(o.$$.fragment),k(e,"class","pmsr-container svelte-ojrr2d")},m(l,c){$(l,e,c),r&&r.m(e,null),d(e,n),nt(o,e,null),t[8](e),s=!0},p(t,[s]){t[3].length>0?r?(r.p(t,s),X(r,1)):(r=we(t),r.c(),X(r,1),r.m(e,n)):r&&(Q(),Y(r,1,1,()=>{r=null}),R());const l={};2&s&&(l.height=t[1]),o.$set(l)},i(t){s||(X(r),X(o.$$.fragment,t),s=!0)},o(t){Y(r),Y(o.$$.fragment,t),s=!1},d(n){n&&f(e),r&&r.d(),st(o),t[8](null)}}}function ye(t,e,n){let s,r,o,l;c(t,pt,t=>n(3,s=t)),c(t,ut,t=>n(5,r=t));let i=0;const a=t=>{try{if(t.length>0){let e={tracks:t[0].tracks};window.searchWorker.postMessage({cmd:"tracks",data:e})}else window.searchWorker.postMessage({cmd:"tracks",data:[]})}catch(t){window.searchWorker.postMessage({cmd:"tracks",data:[]})}};return E(()=>{n(1,l=o.parentNode.clientHeight-r)}),t.$$.update=()=>{8&t.$$.dirty&&a(s)},[o,l,i,s,t=>{n(2,i=t.target.id);try{let t={tracks:s[i].tracks};window.searchWorker.postMessage({cmd:"tracks",data:t})}catch(t){window.searchWorker.postMessage({cmd:"tracks",data:[]})}},r,[],a,function(t){B[t?"unshift":"push"](()=>{n(0,o=t)})}]}class be extends ot{constructor(t){super(),rt(this,t,ye,ke,o,{})}}function Me(t){let e,n;const s=new se({props:{height:t[1]}});return{c(){e=m("div"),et(s.$$.fragment),k(e,"class","pmsr-container svelte-g2m15l")},m(r,o){$(r,e,o),nt(s,e,null),t[6](e),n=!0},p(t,[e]){const n={};2&e&&(n.height=t[1]),s.$set(n)},i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(n){n&&f(e),st(s),t[6](null)}}}function He(t,e,n){let s,r,o,l;c(t,$t,t=>n(3,s=t)),c(t,ut,t=>n(4,r=t));let i=[];const a=t=>{i=[],t.tracks?window.searchWorker.postMessage({cmd:"tracks",data:t}):window.searchWorker.postMessage({cmd:"tracks",data:[]})};return E(()=>{n(1,l=o.parentNode.clientHeight-r)}),t.$$.update=()=>{8&t.$$.dirty&&a(s)},[o,l,i,s,r,a,function(t){B[t?"unshift":"push"](()=>{n(0,o=t)})}]}class ze extends ot{constructor(t){super(),rt(this,t,He,Me,o,{})}}function je(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Te(t){let e,n,s=t[3].tags,r=[];for(let e=0;e<s.length;e+=1)r[e]=_e(je(t,s,e));const o=t=>Y(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=v()},m(t,s){for(let e=0;e<r.length;e+=1)r[e].m(t,s);$(t,e,s),n=!0},p(t,n){if(44&n){let l;for(s=t[3].tags,l=0;l<s.length;l+=1){const o=je(t,s,l);r[l]?(r[l].p(o,n),X(r[l],1)):(r[l]=_e(o),r[l].c(),X(r[l],1),r[l].m(e.parentNode,e))}for(Q(),l=s.length;l<r.length;l+=1)o(l);R()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)X(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Y(r[t]);n=!1},d(t){p(r,t),t&&f(e)}}}function Ee(t){let e,n=t[12].tracks.length+"";return{c(){e=g(n)},m(t,n){$(t,e,n)},p(t,s){8&s&&n!==(n=t[12].tracks.length+"")&&b(e,n)},d(t){t&&f(e)}}}function _e(t){let e,n,s,r,o,l,c,i,a=t[12].text+"";const u=new le({props:{class:"pmsr-item-count",$$slots:{default:[Ee]},$$scope:{ctx:t}}});return{c(){e=m("div"),et(u.$$.fragment),n=w(),s=m("div"),r=g(a),o=w(),k(s,"class","pmsr-item svelte-1j4fx3b"),k(e,"class","pmsr-line svelte-1j4fx3b"),k(e,"id",l=t[14]),H(e,"selected",t[2]==t[14])},m(l,a,f){$(l,e,a),nt(u,e,null),d(e,n),d(e,s),d(s,r),d(e,o),c=!0,f&&i(),i=x(e,"click",t[5])},p(t,n){const s={};32776&n&&(s.$$scope={dirty:n,ctx:t}),u.$set(s),(!c||8&n)&&a!==(a=t[12].text+"")&&b(r,a),4&n&&H(e,"selected",t[2]==t[14])},i(t){c||(X(u.$$.fragment,t),c=!0)},o(t){Y(u.$$.fragment,t),c=!1},d(t){t&&f(e),st(u),i()}}}function Le(t){let e,n,s,r,o,l,c,i=t[3].tags&&Te(t);const a=new se({props:{height:t[1]}});return a.$on("status",t[4]),{c(){e=m("div"),n=m("div"),s=w(),r=m("div"),o=m("div"),i&&i.c(),l=w(),et(a.$$.fragment),k(n,"class","pmsr-status svelte-1j4fx3b"),k(o,"class","pmsr-tags-list svelte-1j4fx3b"),M(o,"height",t[1]+"px"),k(r,"class","pmsr-container-bottom svelte-1j4fx3b"),k(e,"class","pmsr-container svelte-1j4fx3b")},m(u,f){$(u,e,f),d(e,n),d(e,s),d(e,r),d(r,o),i&&i.m(o,null),d(r,l),nt(a,r,null),t[11](e),c=!0},p(t,[e]){t[3].tags?i?(i.p(t,e),X(i,1)):(i=Te(t),i.c(),X(i,1),i.m(o,null)):i&&(Q(),Y(i,1,1,()=>{i=null}),R()),(!c||2&e)&&M(o,"height",t[1]+"px");const n={};2&e&&(n.height=t[1]),a.$set(n)},i(t){c||(X(i),X(a.$$.fragment,t),c=!0)},o(t){Y(i),Y(a.$$.fragment,t),c=!1},d(n){n&&f(e),i&&i.d(),st(a),t[11](null)}}}function We(t,e,n){let s,r,o,l;c(t,mt,t=>n(3,s=t)),c(t,ut,t=>n(8,r=t));let i,a,u=0;const d=t=>{try{if(t.len>0){let e={type:t.type,tokens:t.tokens,tracks:t.tags[0].tracks};t.tags[0].tracks&&window.searchWorker.postMessage({cmd:"tracks",data:e})}else window.searchWorker.postMessage({cmd:"tracks",data:[]})}catch(t){window.searchWorker.postMessage({cmd:"tracks",data:[]})}};return E(()=>{n(1,l=o.parentNode.clientHeight-r),console.log("height",l)}),t.$$.update=()=>{8&t.$$.dirty&&d(s)},[o,l,u,s,t=>{i=t.detail.start,a=t.detail.end},t=>{try{n(2,u=t.target.id);let e={type:mt.type,tokens:mt.tokens,tracks:s.tags[u].tracks};window.searchWorker.postMessage({cmd:"tracks",data:e})}catch(t){window.searchWorker.postMessage({cmd:"tracks",data:[]})}},i,a,r,[],d,function(t){B[t?"unshift":"push"](()=>{n(0,o=t)})}]}class qe extends ot{constructor(t){super(),rt(this,t,We,Le,o,{})}}function Be(t){let e,n;const s=new se({props:{height:t[1]}});return{c(){e=m("div"),et(s.$$.fragment),k(e,"class","pmsr-container svelte-g2m15l")},m(r,o){$(r,e,o),nt(s,e,null),t[6](e),n=!0},p(t,[e]){const n={};2&e&&(n.height=t[1]),s.$set(n)},i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(n){n&&f(e),st(s),t[6](null)}}}function Ne(t,e,n){let s,r,o,l;c(t,dt,t=>n(3,s=t)),c(t,ut,t=>n(4,r=t));let i=[];const a=t=>{i=[],t.tracks&&window.searchWorker.postMessage({cmd:"tracks",data:t})};return E(()=>{n(1,l=o.parentNode.clientHeight-r)}),t.$$.update=()=>{8&t.$$.dirty&&a(s)},[o,l,i,s,r,a,function(t){B[t?"unshift":"push"](()=>{n(0,o=t)})}]}class Ce extends ot{constructor(t){super(),rt(this,t,Ne,Be,o,{})}}function Ae(t){let e,n;const s=t[5].default,r=i(s,t,t[4],null);return{c(){e=m("div"),r&&r.c(),k(e,"class","pmsr-tabs-searc-result svelte-1uadjo4")},m(t,s){$(t,e,s),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&16&e&&r.p(a(s,t,t[4],null),u(s,t[4],e,null))},i(t){n||(X(r,t),n=!0)},o(t){Y(r,t),n=!1},d(t){t&&f(e),r&&r.d(t)}}}const Se={};function Ve(t,e,n){const s=[],r=[],o=ct(null),l=ct(null);var c,i;c=Se,i={registerTab:t=>{s.push(t),o.update(e=>e||t),_(()=>{const e=s.indexOf(t);s.splice(e,1),o.update(n=>n===t?s[e]||s[s.length-1]:n)})},registerPanel:t=>{r.push(t),l.update(e=>e||t),_(()=>{const e=r.indexOf(t);r.splice(e,1),l.update(n=>n===t?r[e]||r[r.length-1]:n)})},selectTab:t=>{const e=s.indexOf(t);o.set(t),l.set(r[e])},selectedTab:o,selectedPanel:l},T().$$.context.set(c,i);let{$$slots:a={},$$scope:u}=e;return t.$set=t=>{"$$scope"in t&&n(4,u=t.$$scope)},[s,r,o,l,u,a]}class Pe extends ot{constructor(t){super(),rt(this,t,Ve,Ae,o,{})}}function Oe(t){let e,n;const s=t[3].default,r=i(s,t,t[2],null);return{c(){e=m("div"),r&&r.c(),k(e,"class","pmsr-tab-list svelte-1haszfm")},m(s,o){$(s,e,o),r&&r.m(e,null),t[4](e),n=!0},p(t,[e]){r&&r.p&&4&e&&r.p(a(s,t,t[2],null),u(s,t[2],e,null))},i(t){n||(X(r,t),n=!0)},o(t){Y(r,t),n=!1},d(n){n&&f(e),r&&r.d(n),t[4](null)}}}function Ie(t,e,n){let s,r;c(t,ut,t=>n(1,s=t)),E(()=>{!function(t,e,n=e){t.set(n)}(ut,s=r.clientHeight)});let{$$slots:o={},$$scope:l}=e;return t.$set=t=>{"$$scope"in t&&n(2,l=t.$$scope)},[r,s,l,o,function(t){B[t?"unshift":"push"](()=>{n(0,r=t)})}]}class De extends ot{constructor(t){super(),rt(this,t,Ie,Oe,o,{})}}function Fe(t){let e;const n=t[5].default,s=i(n,t,t[4],null);return{c(){s&&s.c()},m(t,n){s&&s.m(t,n),e=!0},p(t,e){s&&s.p&&16&e&&s.p(a(n,t,t[4],null),u(n,t[4],e,null))},i(t){e||(X(s,t),e=!0)},o(t){Y(s,t),e=!1},d(t){s&&s.d(t)}}}function Ue(t){let e,n,s=t[0]===t[1]&&Fe(t);return{c(){s&&s.c(),e=v()},m(t,r){s&&s.m(t,r),$(t,e,r),n=!0},p(t,[n]){t[0]===t[1]?s?(s.p(t,n),X(s,1)):(s=Fe(t),s.c(),X(s,1),s.m(e.parentNode,e)):s&&(Q(),Y(s,1,1,()=>{s=null}),R())},i(t){n||(X(s),n=!0)},o(t){Y(s),n=!1},d(t){s&&s.d(t),t&&f(e)}}}function Ge(t,e,n){let s;const r={},{registerPanel:o,selectedPanel:l}=W(Se);c(t,l,t=>n(0,s=t)),o(r);let{$$slots:i={},$$scope:a}=e;return t.$set=t=>{"$$scope"in t&&n(4,a=t.$$scope)},[s,r,l,o,a,i]}class Je extends ot{constructor(t){super(),rt(this,t,Ge,Ue,o,{})}}function Ke(t){let e,n;const s=new le({props:{$$slots:{default:[Qe]},$$scope:{ctx:t}}});return{c(){e=m("div"),et(s.$$.fragment),k(e,"class","pmsr-badge svelte-1kcqqbd")},m(t,r){$(t,e,r),nt(s,e,null),n=!0},p(t,e){const n={};258&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(t){t&&f(e),st(s)}}}function Qe(t){let e;return{c(){e=g(t[1])},m(t,n){$(t,e,n)},p(t,n){2&n&&b(e,t[1])},d(t){t&&f(e)}}}function Re(t){let e,n,s,r,o,l,c,i=t[1]&&Ke(t);return{c(){e=m("div"),n=m("div"),s=m("div"),r=g(t[0]),o=w(),i&&i.c(),k(s,"class","pmsr-title"),k(n,"class","pmsr-label svelte-1kcqqbd"),k(e,"class","pmsr-tab svelte-1kcqqbd"),H(e,"pmsr-selected",t[2]===t[3])},m(a,u,f){$(a,e,u),d(e,n),d(n,s),d(s,r),d(n,o),i&&i.m(n,null),l=!0,f&&c(),c=x(e,"click",t[7])},p(t,[s]){(!l||1&s)&&b(r,t[0]),t[1]?i?(i.p(t,s),X(i,1)):(i=Ke(t),i.c(),X(i,1),i.m(n,null)):i&&(Q(),Y(i,1,1,()=>{i=null}),R()),12&s&&H(e,"pmsr-selected",t[2]===t[3])},i(t){l||(X(i),l=!0)},o(t){Y(i),l=!1},d(t){t&&f(e),i&&i.d(),c()}}}function Xe(t,e,n){let s,{title:r}=e,{items:o}=e;const l={},{registerTab:i,selectTab:a,selectedTab:u}=W(Se);c(t,u,t=>n(2,s=t)),i(l);return t.$set=t=>{"title"in t&&n(0,r=t.title),"items"in t&&n(1,o=t.items)},[r,o,s,l,a,u,i,()=>a(l)]}class Ye extends ot{constructor(t){super(),rt(this,t,Xe,Re,o,{title:0,items:1})}}function Ze(t){let e,n,s,r,o;const l=new Ye({props:{title:"Descriptions",items:t[0].len?t[0].len:0}}),c=new Ye({props:{title:"Titles",items:t[1].len?t[1].len:0}}),i=new Ye({props:{title:"Authors",items:t[2]?t[2].length:0}}),a=new Ye({props:{title:"Categories",items:t[3]?t[3].length:0}}),u=new Ye({props:{title:"Tags",items:t[4]?t[4].len:0}});return{c(){et(l.$$.fragment),e=w(),et(c.$$.fragment),n=w(),et(i.$$.fragment),s=w(),et(a.$$.fragment),r=w(),et(u.$$.fragment)},m(t,d){nt(l,t,d),$(t,e,d),nt(c,t,d),$(t,n,d),nt(i,t,d),$(t,s,d),nt(a,t,d),$(t,r,d),nt(u,t,d),o=!0},p(t,e){const n={};1&e&&(n.items=t[0].len?t[0].len:0),l.$set(n);const s={};2&e&&(s.items=t[1].len?t[1].len:0),c.$set(s);const r={};4&e&&(r.items=t[2]?t[2].length:0),i.$set(r);const o={};8&e&&(o.items=t[3]?t[3].length:0),a.$set(o);const d={};16&e&&(d.items=t[4]?t[4].len:0),u.$set(d)},i(t){o||(X(l.$$.fragment,t),X(c.$$.fragment,t),X(i.$$.fragment,t),X(a.$$.fragment,t),X(u.$$.fragment,t),o=!0)},o(t){Y(l.$$.fragment,t),Y(c.$$.fragment,t),Y(i.$$.fragment,t),Y(a.$$.fragment,t),Y(u.$$.fragment,t),o=!1},d(t){st(l,t),t&&f(e),st(c,t),t&&f(n),st(i,t),t&&f(s),st(a,t),t&&f(r),st(u,t)}}}function tn(t){let e;const n=new Ce({});return{c(){et(n.$$.fragment)},m(t,s){nt(n,t,s),e=!0},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){st(n,t)}}}function en(t){let e;const n=new ze({});return{c(){et(n.$$.fragment)},m(t,s){nt(n,t,s),e=!0},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){st(n,t)}}}function nn(t){let e;const n=new be({});return{c(){et(n.$$.fragment)},m(t,s){nt(n,t,s),e=!0},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){st(n,t)}}}function sn(t){let e;const n=new he({});return{c(){et(n.$$.fragment)},m(t,s){nt(n,t,s),e=!0},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){st(n,t)}}}function rn(t){let e;const n=new qe({});return{c(){et(n.$$.fragment)},m(t,s){nt(n,t,s),e=!0},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){st(n,t)}}}function on(t){let e,n,s,r,o,l;const c=new De({props:{$$slots:{default:[Ze]},$$scope:{ctx:t}}}),i=new Je({props:{$$slots:{default:[tn]},$$scope:{ctx:t}}}),a=new Je({props:{$$slots:{default:[en]},$$scope:{ctx:t}}}),u=new Je({props:{$$slots:{default:[nn]},$$scope:{ctx:t}}}),d=new Je({props:{$$slots:{default:[sn]},$$scope:{ctx:t}}}),p=new Je({props:{$$slots:{default:[rn]},$$scope:{ctx:t}}});return{c(){et(c.$$.fragment),e=w(),et(i.$$.fragment),n=w(),et(a.$$.fragment),s=w(),et(u.$$.fragment),r=w(),et(d.$$.fragment),o=w(),et(p.$$.fragment)},m(t,f){nt(c,t,f),$(t,e,f),nt(i,t,f),$(t,n,f),nt(a,t,f),$(t,s,f),nt(u,t,f),$(t,r,f),nt(d,t,f),$(t,o,f),nt(p,t,f),l=!0},p(t,e){const n={};287&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n);const s={};256&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s);const r={};256&e&&(r.$$scope={dirty:e,ctx:t}),a.$set(r);const o={};256&e&&(o.$$scope={dirty:e,ctx:t}),u.$set(o);const l={};256&e&&(l.$$scope={dirty:e,ctx:t}),d.$set(l);const $={};256&e&&($.$$scope={dirty:e,ctx:t}),p.$set($)},i(t){l||(X(c.$$.fragment,t),X(i.$$.fragment,t),X(a.$$.fragment,t),X(u.$$.fragment,t),X(d.$$.fragment,t),X(p.$$.fragment,t),l=!0)},o(t){Y(c.$$.fragment,t),Y(i.$$.fragment,t),Y(a.$$.fragment,t),Y(u.$$.fragment,t),Y(d.$$.fragment,t),Y(p.$$.fragment,t),l=!1},d(t){st(c,t),t&&f(e),st(i,t),t&&f(n),st(a,t),t&&f(s),st(u,t),t&&f(r),st(d,t),t&&f(o),st(p,t)}}}function ln(t){let e,n;const r=new Pe({props:{$$slots:{default:[on]},$$scope:{ctx:t}}});return{c(){et(r.$$.fragment)},m(o,l,c){nt(r,o,l),e=!0,c&&s(n),n=[x(window,"dbstatus",t[5]),x(window,"dbsearch",t[6])]},p(t,[e]){const n={};287&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n)},i(t){e||(X(r.$$.fragment,t),e=!0)},o(t){Y(r.$$.fragment,t),e=!1},d(t){st(r,t),s(n)}}}function cn(t,e,n){let s,r,o,l,i;c(t,dt,t=>n(0,s=t)),c(t,$t,t=>n(1,r=t)),c(t,pt,t=>n(2,o=t)),c(t,ft,t=>n(3,l=t)),c(t,mt,t=>n(4,i=t));return[s,r,o,l,i,t=>{console.log("status in TABS")},t=>{at.set(t.detail)}]}let an=document.getElementById("search-result");return console.log(an),new class extends ot{constructor(t){super(),rt(this,t,cn,ln,o,{})}}({target:an})}();
//# sourceMappingURL=search-result.js.map
