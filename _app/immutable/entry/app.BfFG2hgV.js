const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.1tlPIGOx.js","../chunks/disclose-version.DJk0yjrV.js","../chunks/runtime.CuFz7HjE.js","../assets/0.kv1BDcIS.css","../nodes/1.Cp2QBnXd.js","../chunks/stores.BbpSkzHW.js","../chunks/entry.DYCBKKwx.js","../assets/1.DdeRlqXr.css","../nodes/2.Cnu4orOm.js","../nodes/3.BY5ezUEM.js"])))=>i.map(i=>d[i]);
var fe=t=>{throw TypeError(t)};var ue=(t,e,u)=>e.has(t)||fe("Cannot "+u);var E=(t,e,u)=>(ue(t,e,"read from private field"),u?u.call(t):e.get(t)),Z=(t,e,u)=>e.has(t)?fe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,u),z=(t,e,u,_)=>(ue(t,e,"write to private field"),_?_.call(t,u):e.set(t,u),u);import{S as j,x as Te,y as Ie,z as L,A as Oe,B as S,U as P,C as H,g,q as ve,D as Ae,E as Le,F as he,G as me,H as te,o as De,I as ke,J as Ne,K as G,L as q,w as re,k as se,v as N,M as xe,N as Ce,O as qe,P as Ve,Q as Be,R as Ye,m as Me,V as K,j as D,p as ge,a as ye,d as F,W as we,X as Ue,Y as je,Z as oe,_ as ne,$ as He,a0 as Fe,a1 as Ke,e as ie,a2 as We,a3 as Ze,a4 as ze,a5 as Ge,a6 as Je,a7 as Qe,a8 as Xe,a9 as $e,aa as B,ab as pe,ac as be,ad as et,ae as tt,b as Ee,u as rt,l as Y,af as nt,s as at,ag as J,c as st,ah as it,r as ft}from"../chunks/runtime.CuFz7HjE.js";import{b as ut,a as x,t as Pe,c as Q,d as ot}from"../chunks/disclose-version.DJk0yjrV.js";function k(t,e=null,u){if(typeof t!="object"||t===null||j in t)return t;const _=Le(t);if(_!==Te&&_!==Ie)return t;var s=new Map,n=he(t),l=L(0);n&&s.set("length",L(t.length));var i;return new Proxy(t,{defineProperty(o,r,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&Oe();var d=s.get(r);return d===void 0?(d=L(a.value),s.set(r,d)):S(d,k(a.value,i)),!0},deleteProperty(o,r){var a=s.get(r);return a===void 0?r in o&&s.set(r,L(P)):(S(a,P),le(l)),!0},get(o,r,a){var v;if(r===j)return t;var d=s.get(r),c=r in o;if(d===void 0&&(!c||(v=H(o,r))!=null&&v.writable)&&(d=L(k(c?o[r]:P,i)),s.set(r,d)),d!==void 0){var f=g(d);return f===P?void 0:f}return Reflect.get(o,r,a)},getOwnPropertyDescriptor(o,r){var a=Reflect.getOwnPropertyDescriptor(o,r);if(a&&"value"in a){var d=s.get(r);d&&(a.value=g(d))}else if(a===void 0){var c=s.get(r),f=c==null?void 0:c.v;if(c!==void 0&&f!==P)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return a},has(o,r){var f;if(r===j)return!0;var a=s.get(r),d=a!==void 0&&a.v!==P||Reflect.has(o,r);if(a!==void 0||ve!==null&&(!d||(f=H(o,r))!=null&&f.writable)){a===void 0&&(a=L(d?k(o[r],i):P),s.set(r,a));var c=g(a);if(c===P)return!1}return d},set(o,r,a,d){var T;var c=s.get(r),f=r in o;if(n&&r==="length")for(var v=a;v<c.v;v+=1){var h=s.get(v+"");h!==void 0?S(h,P):v in o&&(h=L(P),s.set(v+"",h))}c===void 0?(!f||(T=H(o,r))!=null&&T.writable)&&(c=L(void 0),S(c,k(a,i)),s.set(r,c)):(f=c.v!==P,S(c,k(a,i)));var w=Reflect.getOwnPropertyDescriptor(o,r);if(w!=null&&w.set&&w.set.call(d,a),!f){if(n&&typeof r=="string"){var b=s.get("length"),m=Number(r);Number.isInteger(m)&&m>=b.v&&S(b,m+1)}le(l)}return!0},ownKeys(o){g(l);var r=Reflect.ownKeys(o).filter(c=>{var f=s.get(c);return f===void 0||f.v!==P});for(var[a,d]of s)d.v!==P&&!(a in o)&&r.push(a);return r},setPrototypeOf(){Ae()}})}function le(t,e=1){S(t,t.v+e)}function lt(t){throw new Error("lifecycle_outside_component")}const ct=new Set,ce=new Set;function M(t){var w;var e=this,u=e.ownerDocument,_=t.type,s=((w=t.composedPath)==null?void 0:w.call(t))||[],n=s[0]||t.target,l=0,i=t.__root;if(i){var o=s.indexOf(i);if(o!==-1&&(e===document||e===window)){t.__root=e;return}var r=s.indexOf(e);if(r===-1)return;o<=r&&(l=o)}if(n=s[l]||t.target,n!==e){me(t,"currentTarget",{configurable:!0,get(){return n||u}});try{for(var a,d=[];n!==null;){var c=n.assignedSlot||n.parentNode||n.host||null;try{var f=n["__"+_];if(f!==void 0&&!n.disabled)if(he(f)){var[v,...h]=f;v.apply(n,[t,...h])}else f.call(n,t)}catch(b){a?d.push(b):a=b}if(t.cancelBubble||c===e||c===null)break;n=c}if(a){for(let b of d)queueMicrotask(()=>{throw b});throw a}}finally{t.__root=e,delete t.currentTarget}}}const dt=["touchstart","touchmove"];function _t(t){return dt.includes(t)}function vt(t,e){e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function Re(t,e){return Se(t,e)}function ht(t,e){te(),e.intro=e.intro??!1;const u=e.target,_=D,s=N;try{for(var n=De(u);n&&(n.nodeType!==8||n.data!==ke);)n=Ne(n);if(!n)throw G;q(!0),re(n),se();const l=Se(t,{...e,anchor:n});if(N===null||N.nodeType!==8||N.data!==xe)throw Ce(),G;return q(!1),l}catch(l){if(l===G)return e.recover===!1&&qe(),te(),Ve(u),q(!1),Re(t,e);throw l}finally{q(_),re(s)}}const C=new Map;function Se(t,{target:e,anchor:u,props:_={},events:s,context:n,intro:l=!0}){te();var i=new Set,o=d=>{for(var c=0;c<d.length;c++){var f=d[c];if(!i.has(f)){i.add(f);var v=_t(f);e.addEventListener(f,M,{passive:v});var h=C.get(f);h===void 0?(document.addEventListener(f,M,{passive:v}),C.set(f,1)):C.set(f,h+1)}}};o(Be(ct)),ce.add(o);var r=void 0,a=Ye(()=>{var d=u??e.appendChild(Me());return K(()=>{if(n){ge({});var c=F;c.c=n}s&&(_.$$events=s),D&&ut(d,null),r=t(d,_)||{},D&&(ve.nodes_end=N),n&&ye()}),()=>{var v;for(var c of i){e.removeEventListener(c,M);var f=C.get(c);--f===0?(document.removeEventListener(c,M),C.delete(c)):C.set(c,f)}ce.delete(o),ae.delete(r),d!==u&&((v=d.parentNode)==null||v.removeChild(d))}});return ae.set(r,a),r}let ae=new WeakMap;function mt(t){const e=ae.get(t);e&&e()}function X(t,e,u,_=null,s=!1){D&&se();var n=t,l=null,i=null,o=null,r=s?He:0;we(()=>{if(o===(o=!!e()))return;let a=!1;if(D){const d=n.data===Ue;o===d&&(n=je(),re(n),q(!1),a=!0)}o?(l?oe(l):l=K(()=>u(n)),i&&ne(i,()=>{i=null})):(i?oe(i):_&&(i=K(()=>_(n))),l&&ne(l,()=>{l=null})),a&&q(!0)},r),D&&(n=N)}function $(t,e,u){D&&se();var _=t,s,n;we(()=>{s!==(s=e())&&(n&&(ne(n),n=null),s&&(n=K(()=>u(_,s))))}),D&&(_=N)}function de(t,e){return t===e||(t==null?void 0:t[j])===e}function p(t={},e,u,_){return Fe(()=>{var s,n;return Ke(()=>{s=n,n=[],ie(()=>{t!==u(...n)&&(e(t,...n),s&&de(u(...s),t)&&e(null,...s))})}),()=>{We(()=>{n&&de(u(...n),t)&&e(null,...n)})}}),t}function ee(t,e,u,_){var V;var s=(u&Qe)!==0,n=(u&Xe)!==0,l=(u&$e)!==0,i=(u&et)!==0,o=t[e],r=(V=H(t,e))==null?void 0:V.set,a=_,d=!0,c=!1,f=()=>(c=!0,d&&(d=!1,i?a=ie(_):a=_),a);o===void 0&&_!==void 0&&(r&&n&&Ze(),o=f(),r&&r(o));var v;if(n)v=()=>{var y=t[e];return y===void 0?f():(d=!0,c=!1,y)};else{var h=(s?B:pe)(()=>t[e]);h.f|=ze,v=()=>{var y=g(h);return y!==void 0&&(a=void 0),y===void 0?a:y}}if(!(u&Ge))return v;if(r){var w=t.$$legacy;return function(y,O){return arguments.length>0?((!n||!O||w)&&r(O?v():y),y):v()}}var b=!1,m=be(o),T=B(()=>{var y=v(),O=g(m);return b?(b=!1,O):m.v=y});return s||(T.equals=Je),function(y,O){var W=g(T);if(arguments.length>0){const A=O?g(T):n&&l?k(y):y;return T.equals(A)||(b=!0,S(m,A),c&&a!==void 0&&(a=A),g(T)),y}return W}}function gt(t){return class extends yt{constructor(e){super({component:t,...e})}}}var I,R;class yt{constructor(e){Z(this,I);Z(this,R);var n;var u=new Map,_=(l,i)=>{var o=be(i);return u.set(l,o),o};const s=new Proxy({...e.props||{},$$events:{}},{get(l,i){return g(u.get(i)??_(i,Reflect.get(l,i)))},has(l,i){return g(u.get(i)??_(i,Reflect.get(l,i))),Reflect.has(l,i)},set(l,i,o){return S(u.get(i)??_(i,o),o),Reflect.set(l,i,o)}});z(this,R,(e.hydrate?ht:Re)(e.component,{target:e.target,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((n=e==null?void 0:e.props)!=null&&n.$$host)||e.sync===!1)&&tt(),z(this,I,s.$$events);for(const l of Object.keys(E(this,R)))l==="$set"||l==="$destroy"||l==="$on"||me(this,l,{get(){return E(this,R)[l]},set(i){E(this,R)[l]=i},enumerable:!0});E(this,R).$set=l=>{Object.assign(s,l)},E(this,R).$destroy=()=>{mt(E(this,R))}}$set(e){E(this,R).$set(e)}$on(e,u){E(this,I)[e]=E(this,I)[e]||[];const _=(...s)=>u.call(this,...s);return E(this,I)[e].push(_),()=>{E(this,I)[e]=E(this,I)[e].filter(s=>s!==_)}}$destroy(){E(this,R).$destroy()}}I=new WeakMap,R=new WeakMap;function wt(t){F===null&&lt(),F.l!==null?bt(F).m.push(t):Ee(()=>{const e=ie(t);if(typeof e=="function")return e})}function bt(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const Et="modulepreload",Pt=function(t,e){return new URL(t,e).href},_e={},U=function(e,u,_){let s=Promise.resolve();if(u&&u.length>0){const l=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(u.map(r=>{if(r=Pt(r,_),r in _e)return;_e[r]=!0;const a=r.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!_)for(let v=l.length-1;v>=0;v--){const h=l[v];if(h.href===r&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${d}`))return;const f=document.createElement("link");if(f.rel=a?"stylesheet":Et,a||(f.as="script"),f.crossOrigin="",f.href=r,o&&f.setAttribute("nonce",o),document.head.appendChild(f),a)return new Promise((v,h)=>{f.addEventListener("load",v),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}function n(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return s.then(l=>{for(const i of l||[])i.status==="rejected"&&n(i.reason);return e().catch(n)})},Lt={};var Rt=Pe('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),St=Pe("<!> <!>",1);function Tt(t,e){ge(e,!0);let u=ee(e,"components",23,()=>[]),_=ee(e,"data_0",3,null),s=ee(e,"data_1",3,null);rt(()=>e.stores.page.set(e.page)),Ee(()=>{e.stores,e.page,e.constructors,u(),e.form,_(),s(),e.stores.page.notify()});let n=J(!1),l=J(!1),i=J(null);wt(()=>{const c=e.stores.page.subscribe(()=>{g(n)&&(S(l,!0),nt().then(()=>{S(i,k(document.title||"untitled page"))}))});return S(n,!0),c});const o=B(()=>e.constructors[1]);var r=St(),a=Y(r);X(a,()=>e.constructors[1],c=>{var f=Q();const v=B(()=>e.constructors[0]);var h=Y(f);$(h,()=>g(v),(w,b)=>{p(b(w,{get data(){return _()},get form(){return e.form},children:(m,T)=>{var V=Q(),y=Y(V);$(y,()=>g(o),(O,W)=>{p(W(O,{get data(){return s()},get form(){return e.form}}),A=>u()[1]=A,()=>{var A;return(A=u())==null?void 0:A[1]})}),x(m,V)},$$slots:{default:!0}}),m=>u()[0]=m,()=>{var m;return(m=u())==null?void 0:m[0]})}),x(c,f)},c=>{var f=Q();const v=B(()=>e.constructors[0]);var h=Y(f);$(h,()=>g(v),(w,b)=>{p(b(w,{get data(){return _()},get form(){return e.form}}),m=>u()[0]=m,()=>{var m;return(m=u())==null?void 0:m[0]})}),x(c,f)});var d=at(a,2);X(d,()=>g(n),c=>{var f=Rt(),v=st(f);X(v,()=>g(l),h=>{var w=ot();it(()=>vt(w,g(i))),x(h,w)}),ft(f),x(c,f)}),x(t,r),ye()}const Dt=gt(Tt),kt=[()=>U(()=>import("../nodes/0.1tlPIGOx.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>U(()=>import("../nodes/1.Cp2QBnXd.js"),__vite__mapDeps([4,1,2,5,6,7]),import.meta.url),()=>U(()=>import("../nodes/2.Cnu4orOm.js"),__vite__mapDeps([8,1,2]),import.meta.url),()=>U(()=>import("../nodes/3.BY5ezUEM.js"),__vite__mapDeps([9,1,2,5,6]),import.meta.url)],Nt=[],xt={"/":[2],"/[username]":[3]},Ct={handleError:({error:t})=>{console.error(t)},reroute:()=>{}};export{xt as dictionary,Ct as hooks,Lt as matchers,kt as nodes,Dt as root,Nt as server_loads};
