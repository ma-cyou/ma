import{I as f,J as i,G as l,K as p,L as o,g as b,M as g,N as d,O as r,P as _,Q as v,d as m}from"./runtime.DoLFPj7j.js";import{s as h}from"./entry.CVtxiCSX.js";function G(){const s=l,e=s.l.u;e&&(e.b.length&&f(()=>{a(s),o(e.b)}),i(()=>{const u=p(()=>e.m.map(d));return()=>{for(const n of u)typeof n=="function"&&n()}}),e.a.length&&i(()=>{a(s),o(e.a)}))}function a(s){if(s.l.s)for(const e of s.l.s)b(e);g(s.s)}function k(s,e,u){if(s==null)return e(void 0),r;const n=s.subscribe(e,u);return n.unsubscribe?()=>n.unsubscribe():n}function I(s,e,u){const n=u[e]??(u[e]={store:null,source:v(void 0),unsubscribe:r});if(n.store!==s)if(n.unsubscribe(),n.store=s??null,s==null)n.source.v=void 0,n.unsubscribe=r;else{var t=!0;n.unsubscribe=k(s,c=>{t?n.source.v=c:m(n.source,c)}),t=!1}return b(n.source)}function J(){const s={};return _(()=>{for(var e in s)s[e].unsubscribe()}),s}const w=()=>{const s=h;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},K={subscribe(s){return w().page.subscribe(s)}};export{I as a,G as i,K as p,J as s};