import{i as T,g as H,H as L,b as O,c as E,d as p,e as b,h as N,f as u,j as I,k as M,l as S,m as Y,o as j,p as F,q as V,r as k,t as $,u as _,v as q,w as z,x as y,y as B,E as P,z as W,A as G,B as J,C as K,D as Q}from"./utils.By_MrgSZ.js";import{b as U,r as A,h as v,c as X,i as Z}from"./disclose-version.jFYi3EAR.js";function ne(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function x(t,e){return D(t,e)}function re(t,e){T(),e.intro=e.intro??!1;const n=e.target,f=_,o=u;try{for(var a=H(n);a&&(a.nodeType!==8||a.data!==L);)a=O(a);if(!a)throw E;p(!0),b(a),N();const l=D(t,{...e,anchor:a});if(u===null||u.nodeType!==8||u.data!==I)throw M(),E;return p(!1),l}catch(l){if(l===E)return e.recover===!1&&S(),T(),Y(n),p(!1),x(t,e);throw l}finally{p(f),b(o)}}const d=new Map;function D(t,{target:e,anchor:n,props:f={},events:o,context:a,intro:l=!0}){T();var g=new Set,m=i=>{for(var r=0;r<i.length;r++){var s=i[r];if(!g.has(s)){g.add(s);var c=Z(s);e.addEventListener(s,v,{passive:c});var R=d.get(s);R===void 0?(document.addEventListener(s,v,{passive:c}),d.set(s,1)):d.set(s,R+1)}}};m(j(U)),A.add(m);var h=void 0,C=F(()=>{var i=n??e.appendChild(V());return k(()=>{if(a){$({});var r=y;r.c=a}o&&(f.$$events=o),_&&X(i,null),h=t(i,f)||{},_&&(q.nodes_end=u),a&&z()}),()=>{var c;for(var r of g){e.removeEventListener(r,v);var s=d.get(r);--s===0?(document.removeEventListener(r,v),d.delete(r)):d.set(r,s)}A.delete(m),w.delete(h),i!==n&&((c=i.parentNode)==null||c.removeChild(i))}});return w.set(h,C),h}let w=new WeakMap;function se(t){const e=w.get(t);e&&e()}function oe(t,e,n){_&&N();var f=t,o,a;B(()=>{o!==(o=e())&&(a&&(W(a),a=null),o&&(a=k(()=>n(f,o))))},P),_&&(f=u)}function ie(t){y===null&&G(),J&&y.l!==null?ee(y).m.push(t):K(()=>{const e=Q(t);if(typeof e=="function")return e})}function ee(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}export{oe as c,re as h,x as m,ie as o,ne as s,se as u};