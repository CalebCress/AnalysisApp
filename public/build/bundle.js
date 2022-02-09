var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function h(){return f("")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.data!==n&&(t.data=n)}let g;function $(t){g=t}function b(){if(!g)throw new Error("Function called outside component initialization");return g}function y(){const t=b();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}function v(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const _=[],w=[],x=[],E=[],k=Promise.resolve();let j=!1;function O(){j||(j=!0,k.then(A))}function L(t){x.push(t)}let D=!1;const S=new Set;function A(){if(!D){D=!0;do{for(let t=0;t<_.length;t+=1){const n=_[t];$(n),C(n.$$)}for(_.length=0;w.length;)w.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];S.has(n)||(S.add(n),n())}x.length=0}while(_.length);for(;E.length;)E.pop()();j=!1,D=!1,S.clear()}}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const N=new Set;let R;function T(){R={r:0,c:[],p:R}}function q(){R.r||r(R.c),R=R.p}function M(t,n){t&&t.i&&(N.delete(t),t.i(n))}function I(t,n,e,o){if(t&&t.o){if(N.has(t))return;N.add(t),R.c.push(()=>{N.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function P(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function B(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function H(t,n,o){const{fragment:i,on_mount:c,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,o),L(()=>{const n=c.map(e).filter(s);l?l.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(L)}function Y(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function z(n,e,s,i,c,l,a=[-1]){const u=g;$(n);const f=e.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a};let h=!1;p.ctx=s?s(n,f,(t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),h&&function(t,n){-1===t.$$.dirty[0]&&(_.push(t),O(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e}):[],p.update(),h=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),e.target&&(e.hydrate?p.fragment&&p.fragment.l(function(t){return Array.from(t.childNodes)}(e.target)):p.fragment&&p.fragment.c(),e.intro&&M(n.$$.fragment),H(n,e.target,e.anchor),A()),$(u)}class J{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const U=[];function W(t,n){return{subscribe:X(t,n).subscribe}}function X(n,e=t){let o;const r=[];function s(t){if(i(n,t)&&(n=t,o)){const t=!U.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),U.push(e,n)}if(t){for(let t=0;t<U.length;t+=2)U[t][0](U[t+1]);U.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const l=[i,c];return r.push(l),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function G(n,e,o){const i=!Array.isArray(n),c=i?[n]:n,l=e.length<2;return W(o,n=>{let o=!1;const a=[];let u=0,f=t;const p=()=>{if(u)return;f();const o=e(i?a[0]:a,n);l?n(o):f=s(o)?o:t},h=c.map((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,t=>{a[e]=t,u&=~(1<<e),o&&p()},()=>{u|=1<<e}));return o=!0,p(),function(){r(h),f()}})}function K(t){let e,o;const r=[t[2]];var s=t[0];function i(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}if(s){var c=new s(i());c.$on("routeEvent",t[16])}return{c(){c&&F(c.$$.fragment),e=h()},m(t,n){c&&H(c,t,n),l(t,e,n),o=!0},p(t,n){const o=4&n?P(r,[B(t[2])]):{};if(s!==(s=t[0])){if(c){T();const t=c;I(t.$$.fragment,1,0,()=>{Y(t,1)}),q()}s?((c=new s(i())).$on("routeEvent",t[16]),F(c.$$.fragment),M(c.$$.fragment,1),H(c,e.parentNode,e)):c=null}else s&&c.$set(o)},i(t){o||(c&&M(c.$$.fragment,t),o=!0)},o(t){c&&I(c.$$.fragment,t),o=!1},d(t){t&&a(e),c&&Y(c,t)}}}function Q(t){let e,o;const r=[{params:t[1]},t[2]];var s=t[0];function i(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}if(s){var c=new s(i());c.$on("routeEvent",t[15])}return{c(){c&&F(c.$$.fragment),e=h()},m(t,n){c&&H(c,t,n),l(t,e,n),o=!0},p(t,n){const o=6&n?P(r,[2&n&&{params:t[1]},4&n&&B(t[2])]):{};if(s!==(s=t[0])){if(c){T();const t=c;I(t.$$.fragment,1,0,()=>{Y(t,1)}),q()}s?((c=new s(i())).$on("routeEvent",t[15]),F(c.$$.fragment),M(c.$$.fragment,1),H(c,e.parentNode,e)):c=null}else s&&c.$set(o)},i(t){o||(c&&M(c.$$.fragment,t),o=!0)},o(t){c&&I(c.$$.fragment,t),o=!1},d(t){t&&a(e),c&&Y(c,t)}}}function V(t){let n,e,o,r;const s=[Q,K],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=s[n](t),{c(){e.c(),o=h()},m(t,e){i[n].m(t,e),l(t,o,e),r=!0},p(t,[r]){let l=n;n=c(t),n===l?i[n].p(t,r):(T(),I(i[l],1,1,()=>{i[l]=null}),q(),e=i[n],e||(e=i[n]=s[n](t),e.c()),M(e,1),e.m(o.parentNode,o))},i(t){r||(M(e),r=!0)},o(t){I(e),r=!1},d(t){i[n].d(t),t&&a(o)}}}function Z(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const tt=W(null,(function(t){t(Z());const n=()=>{t(Z())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}})),nt=(G(tt,t=>t.location),G(tt,t=>t.querystring),X(void 0));function et(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,i=[],c="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(e=r[0])?(i.push("wild"),c+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach((t,n)=>{c.push(new i(n,t))}):Object.keys(o).forEach(t=>{c.push(new i(t,o[t]))});let l=null,a=null,u={};const f=y();async function p(t,n){await(O(),k),f(t,n)}let h=null,d=null;var m;s&&(d=t=>{h=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",d),m=()=>{h?window.scrollTo(h.__svelte_spa_router_scrollX,h.__svelte_spa_router_scrollY):window.scrollTo(0,0)},b().$$.after_update.push(m));let g=null,$=null;const _=tt.subscribe(async t=>{g=t;let n=0;for(;n<c.length;){const o=c[n].match(t.location);if(!o){n++;continue}const r={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await c[n].checkConditions(r))return e(0,l=null),$=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=c[n].component;if($!=s){s.loading?(e(0,l=s.loading),$=s,e(1,a=s.loadingParams),e(2,u={}),p("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:a}))):(e(0,l=null),$=null);const n=await s();if(t!=g)return;e(0,l=n&&n.default||n),$=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,a=o):e(1,a=null),e(2,u=c[n].props),void p("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:a})).then(()=>{nt.set(a)})}e(0,l=null),$=null,nt.set(void 0)});return function(t){b().$$.on_destroy.push(t)}(()=>{_(),d&&window.removeEventListener("popstate",d)}),t.$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,a,u,o,r,s,h,d,g,$,i,c,f,p,_,function(n){v(t,n)},function(n){v(t,n)}]}class ot extends J{constructor(t){super(),z(this,t,et,V,i,{routes:3,prefix:4,restoreScrollState:5})}}function rt(n){let e,o,r,s,i,f,h,m,g,$,b,y,v;return{c(){e=u("main"),o=u("div"),r=u("h1"),r.textContent="Load Data",s=p(),i=u("nav"),f=u("div"),h=u("label"),m=u("input"),g=p(),$=u("span"),$.innerHTML='<span class="file-icon"><i class="gg-file"></i></span> \n              <span class="file-label">\n               Data JSON\n              </span>',b=p(),y=u("input"),d(r,"class","title"),d(m,"class","file-input"),d(m,"type","file"),d($,"class","file-cta"),d(h,"class","file-label"),d(f,"class","file"),d(y,"type","text"),d(y,"placeholder","localhost:4000"),d(i,"class","level"),d(o,"class","box")},m(t,a){var u,p,d,_;l(t,e,a),c(e,o),c(o,r),c(o,s),c(o,i),c(i,f),c(f,h),c(h,m),c(h,g),c(h,$),c(i,b),c(i,y),u=m,p="change",d=n[1],u.addEventListener(p,d,_),v=()=>u.removeEventListener(p,d,_)},p:t,i:t,o:t,d(t){t&&a(e),v()}}}function st(t,n,e){let o;return t.$$.update=()=>{1&t.$$.dirty&&o&&o.length>0&&new Response(o[0]).json().then(t=>{console.log(t)},t=>{console.log("not json")})},[o,function(){o=this.files,e(0,o)}]}class it extends J{constructor(t){super(),z(this,t,st,rt,i,{})}}function ct(n){let e,o,r,s,i,h,g=n[0].number+"",$=n[0].name+"";return{c(){e=u("nav"),o=u("p"),r=f(g),s=p(),i=u("p"),h=f($),d(e,"class","level")},m(t,n){l(t,e,n),c(e,o),c(o,r),c(e,s),c(e,i),c(i,h)},p(t,[n]){1&n&&g!==(g=t[0].number+"")&&m(r,g),1&n&&$!==($=t[0].name+"")&&m(h,$)},i:t,o:t,d(t){t&&a(e)}}}function lt(t,n,e){let{teamData:o}=n;return t.$set=t=>{"teamData"in t&&e(0,o=t.teamData)},[o]}class at extends J{constructor(t){super(),z(this,t,lt,ct,i,{teamData:0})}}function ut(t,n,e){const o=t.slice();return o[1]=n[e],o}function ft(n){let e;const o=new at({props:{teamData:n[1]}});return{c(){F(o.$$.fragment)},m(t,n){H(o,t,n),e=!0},p:t,i(t){e||(M(o.$$.fragment,t),e=!0)},o(t){I(o.$$.fragment,t),e=!1},d(t){Y(o,t)}}}function pt(t){let n,e,o=t[0],r=[];for(let n=0;n<o.length;n+=1)r[n]=ft(ut(t,o,n));const s=t=>I(r[t],1,1,()=>{r[t]=null});return{c(){n=u("main");for(let t=0;t<r.length;t+=1)r[t].c()},m(t,o){l(t,n,o);for(let t=0;t<r.length;t+=1)r[t].m(n,null);e=!0},p(t,[e]){if(1&e){let i;for(o=t[0],i=0;i<o.length;i+=1){const s=ut(t,o,i);r[i]?(r[i].p(s,e),M(r[i],1)):(r[i]=ft(s),r[i].c(),M(r[i],1),r[i].m(n,null))}for(T(),i=o.length;i<r.length;i+=1)s(i);q()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)M(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)I(r[t]);e=!1},d(t){t&&a(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function ht(t){return[[{name:"flaming chickens",number:1540},{name:"another team",number:1}]]}class dt extends J{constructor(t){super(),z(this,t,ht,pt,i,{})}}function mt(n){let e,o,r,s;const i=new ot({props:{routes:n[0]}});return{c(){e=u("main"),o=u("nav"),o.innerHTML='<ul><li><a href="#/">Menu</a></li> \n      <li><a href="#/teams">Teams</a></li> \n      <li><a href="#/events">Events</a></li></ul>',r=p(),F(i.$$.fragment),d(o,"class","breadcrumb svelte-y7bogi"),d(o,"aria-label","breadcrumbs")},m(t,n){l(t,e,n),c(e,o),c(e,r),H(i,e,null),s=!0},p:t,i(t){s||(M(i.$$.fragment,t),s=!0)},o(t){I(i.$$.fragment,t),s=!1},d(t){t&&a(e),Y(i)}}}function gt(t){__dirname;return[{"/":it,"/teams":dt}]}return new class extends J{constructor(t){super(),z(this,t,gt,mt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
