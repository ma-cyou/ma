import{s as g,w as f}from"./index.DdNy1xr9.js";import{v as b,w as d,n as a,u as p,o as w}from"./runtime.CS53C9wL.js";function S(e,s,u){const n=u[s]??(u[s]={store:null,source:d(void 0),unsubscribe:a});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=a;else{var t=!0;n.unsubscribe=g(e,i=>{t?n.source.v=i:p(n.source,i)}),t=!1}return w(n.source)}function k(){const e={};return b(()=>{for(var s in e)e[s].unsubscribe()}),e}const m=(e,s,u=null,n=null,t="/",i=!1,l="Lax")=>{n=null;let o="";if(u===0){const r=new Date;r.setFullYear(r.getFullYear()+10),o="; expires="+r.toUTCString()}else if(u){const r=new Date;r.setTime(r.getTime()+u*24*60*60*1e3),o="; expires="+r.toUTCString()}const c=`${e}=${s||""}${o}; path=${t}`+(n?`; domain=${n}`:"")+(i?"; secure":"")+`; SameSite=${l}`;document.cookie=c},h=e=>{const s=e+"=",u=document.cookie.split(";");for(let n=0;n<u.length;n++){let t=u[n];for(;t.charAt(0)===" ";)t=t.substring(1,t.length);if(t.indexOf(s)===0)return t.substring(s.length,t.length)}return null},x=()=>{if(typeof window<"u"){const e=h("language");return e||(navigator.language.startsWith("ru")?"ru":"en")}return"en"},v=f(x());v.subscribe(e=>{typeof window<"u"&&(m("language",e,0,"ma.cyou"),document.documentElement.setAttribute("lang",e))});export{S as a,m as b,h as g,v as l,k as s};
