import{p as o,c as j,a as w,l as oe,i as K,f as Q,t as ie,g as x,s as Je}from"./disclose-version.D8FimBZe.js";import{D as Ke,G as Xe,H as Ye,e as we,l as E,g as He,f as W,i as he,I as m,u as g,t as Z,J as P,k as $,m as ee,v as We,w as Fe,x as Qe}from"./runtime.DXiXsSIM.js";import{t as Se,o as Ze,d as $e,g as et,m as Pe,e as De,f as Ee,h as L,r as tt,j as ze,p as nt,k as Ae,n as ot,q as it,u as Be,v as rt,w as st,x as at,y as lt,z as dt,A as Ie,C as Ne,D as ct,E as ut,F as ft,G as gt,b as Me,i as Ce,a as F,c as _e,H as qe,J as te,K as ce,L as ne,M as vt,N as mt}from"./language.C_aAxqYP.js";import{d as Ue,w as je}from"./index.DFdXEfpm.js";function pt(t){const e=t.slice();return e.sort(bt),yt(e)}function yt(t){if(t.length<=1)return t.slice();const e=[];for(let a=0;a<t.length;a++){const d=t[a];for(;e.length>=2;){const v=e[e.length-1],n=e[e.length-2];if((v.x-n.x)*(d.y-n.y)>=(v.y-n.y)*(d.x-n.x))e.pop();else break}e.push(d)}e.pop();const r=[];for(let a=t.length-1;a>=0;a--){const d=t[a];for(;r.length>=2;){const v=r[r.length-1],n=r[r.length-2];if((v.x-n.x)*(d.y-n.y)>=(v.y-n.y)*(d.x-n.x))r.pop();else break}r.push(d)}return r.pop(),e.length==1&&r.length==1&&e[0].x==r[0].x&&e[0].y==r[0].y?e:e.concat(r)}function bt(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}function _t(t){const e=t.getBoundingClientRect();return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.right,y:e.bottom},{x:e.left,y:e.bottom}]}function wt(t){const e=t.flatMap(r=>_t(r));return pt(e)}function ht(t,e){let r=!1;for(let a=0,d=e.length-1;a<e.length;d=a++){const v=e[a].x,n=e[a].y,s=e[d].x,y=e[d].y;n>t.y!=y>t.y&&t.x<(s-v)*(t.y-n)/(y-n)+v&&(r=!r)}return r}const Ct={positioning:{placement:"bottom"},arrowSize:8,defaultOpen:!1,closeOnPointerDown:!0,openDelay:1e3,closeDelay:0,forceVisible:!1,portal:void 0,closeOnEscape:!0,disableHoverableContent:!1,group:void 0},{name:ke}=ot("tooltip"),be=new Map,Ot=["trigger","content"];function Tt(t){const e={...Ct,...t},r=Se(Ze(e,"open","ids")),{positioning:a,arrowSize:d,closeOnPointerDown:v,openDelay:n,closeDelay:s,forceVisible:y,portal:b,closeOnEscape:I,disableHoverableContent:M,group:A}=r,V=e.open??je(e.defaultOpen),u=$e(V,e==null?void 0:e.onOpenChange),k=je(null),S=Se({...et(Ot),...e.ids});let R=!1;const f=i=>Ie?document.getElementById(S[i].get()):null;let l=null,h=null;function N(i){h&&(window.clearTimeout(h),h=null),l||(l=window.setTimeout(()=>{u.set(!0),k.update(c=>c??i),l=null},n.get()))}function X(i){if(l&&(window.clearTimeout(l),l=null),i&&H){k.set("pointer");return}h||(h=window.setTimeout(()=>{u.set(!1),k.set(null),i&&(R=!1),h=null},s.get()))}const re=Ue([u,y],([i,c])=>i||c),ue=Pe(ke("trigger"),{stores:[S.content,S.trigger,u],returned:([i,c,p])=>({"aria-describedby":i,id:c,"data-state":p?"open":"closed"}),action:i=>{const c=D=>{I.get()&&D.key===it.ESCAPE&&(l&&(window.clearTimeout(l),l=null),u.set(!1))};return{destroy:De(L(i,"pointerdown",()=>{v.get()&&(u.set(!1),R=!0,l&&(window.clearTimeout(l),l=null))}),L(i,"pointerenter",D=>{Be(D)||N("pointer")}),L(i,"pointerleave",D=>{Be(D)||l&&(window.clearTimeout(l),l=null)}),L(i,"focus",()=>{R||N("focus")}),L(i,"blur",()=>X(!0)),L(i,"keydown",c),Ee(document,"keydown",c))}}}),fe=Pe(ke("content"),{stores:[re,u,b,S.content],returned:([i,c,p,D])=>tt({role:"tooltip",hidden:i?void 0:!0,tabindex:-1,style:i?void 0:ze({display:"none"}),id:D,"data-portal":nt(p),"data-state":c?"open":"closed"}),action:i=>{let c=Ne,p=Ne;const D=Ae([re,a,b],([q,J,U])=>{p(),c();const G=f("trigger");!q||!G||Ke().then(()=>{p(),c();const Y=rt(i,U);Y&&(p=st(i,Y).destroy),c=at(G,i,J).destroy})});function C(q){if(!u.get())return;const J=q.target;if(!lt(J)&&!dt(J))return;const U=f("trigger");U&&J.contains(U)&&X()}const se=De(L(i,"pointerenter",()=>N("pointer")),L(i,"pointerdown",()=>N("pointer")),Ee(window,"scroll",C,{capture:!0}));return{destroy(){se(),p(),c(),D()}}}}),ge=Pe(ke("arrow"),{stores:d,returned:i=>({"data-arrow":!0,style:ze({position:"absolute",width:`var(--arrow-size, ${i}px)`,height:`var(--arrow-size, ${i}px)`})})});let H=!1;return Ae(u,i=>{const c=A.get();if(c===void 0||c===!1)return;if(!i){be.get(c)===u&&be.delete(c);return}const p=be.get(c);p==null||p.set(!1),be.set(c,u)}),Ae([u,k],([i,c])=>{if(!(!i||!Ie))return De(Ee(document,"mousemove",p=>{const D=f("content"),C=f("trigger");if(!D||!C)return;const se=M.get()?[C]:[C,D],q=wt(se);H=ht({x:p.clientX,y:p.clientY},q),c==="pointer"&&(H||X())}))}),{ids:S,elements:{trigger:ue,content:fe,arrow:ge},states:{open:u},options:r}}function Ge(){return{NAME:"tooltip",PARTS:["arrow","content","trigger"]}}function xt(t){const{NAME:e,PARTS:r}=Ge(),a=ct(e,r),d={...Tt({positioning:{placement:"top",gutter:0},openDelay:700,...ut(t),forceVisible:!0}),getAttrs:a};return Xe(e,d),{...d,updateOption:ft(d.options)}}function Ve(){const{NAME:t}=Ge();return Ye(t)}function Pt(t){const r={...{side:"top",align:"center",sideOffset:1},...t},{options:{positioning:a}}=Ve();gt(a)({...r})}function Dt(t,e){we(e,!1);const r=Me(),a=()=>_e(S,"$idValues",r);let d=o(e,"closeOnEscape",24,()=>{}),v=o(e,"portal",24,()=>{}),n=o(e,"closeOnPointerDown",24,()=>{}),s=o(e,"openDelay",24,()=>{}),y=o(e,"closeDelay",24,()=>{}),b=o(e,"open",28,()=>{}),I=o(e,"onOpenChange",24,()=>{}),M=o(e,"disableHoverableContent",24,()=>{}),A=o(e,"group",24,()=>{});const{states:{open:V},updateOption:u,ids:k}=xt({closeOnEscape:d(),portal:v(),closeOnPointerDown:n(),openDelay:s(),closeDelay:y(),forceVisible:!0,defaultOpen:b(),disableHoverableContent:M(),group:A(),onOpenChange:({next:l})=>{var h;return b()!==l&&((h=I())==null||h(l),b(l)),l},positioning:{gutter:0,offset:{mainAxis:1}}}),S=Ue([k.content,k.trigger],([l,h])=>({content:l,trigger:h}));E(()=>m(b()),()=>{b()!==void 0&&V.set(b())}),E(()=>m(d()),()=>{u("closeOnEscape",d())}),E(()=>m(v()),()=>{u("portal",v())}),E(()=>m(n()),()=>{u("closeOnPointerDown",n())}),E(()=>m(s()),()=>{u("openDelay",s())}),E(()=>m(y()),()=>{u("closeDelay",y())}),E(()=>m(A()),()=>{u("group",A())}),E(()=>m(M()),()=>{u("disableHoverableContent",M())}),He(),Ce();var R=j(),f=W(R);F(f,e,"default",{get ids(){return a()}},null),w(t,R),he()}var Et=ie("<div><!></div>"),At=ie("<div><!></div>"),kt=ie("<div><!></div>"),Ht=ie("<div><!></div>"),Mt=ie("<div><!></div>");function Vt(t,e){const r=oe(e,["children","$$slots","$$events","$$legacy"]),a=oe(r,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);we(e,!1);const d=Me(),v=()=>_e(i,"$content",d),n=()=>_e(c,"$open",d),s=We();let y=o(e,"transition",24,()=>{}),b=o(e,"transitionConfig",24,()=>{}),I=o(e,"inTransition",24,()=>{}),M=o(e,"inTransitionConfig",24,()=>{}),A=o(e,"outTransition",24,()=>{}),V=o(e,"outTransitionConfig",24,()=>{}),u=o(e,"asChild",8,!1),k=o(e,"id",24,()=>{}),S=o(e,"side",8,"top"),R=o(e,"align",8,"center"),f=o(e,"sideOffset",8,0),l=o(e,"alignOffset",8,0),h=o(e,"collisionPadding",8,8),N=o(e,"avoidCollisions",8,!0),X=o(e,"collisionBoundary",24,()=>{}),re=o(e,"sameWidth",8,!1),ue=o(e,"fitViewport",8,!1),fe=o(e,"strategy",8,"absolute"),ge=o(e,"overlap",8,!1),H=o(e,"el",28,()=>{});const{elements:{content:i},states:{open:c},ids:p,getAttrs:D}=Ve(),C=qe(),se=D("content");E(()=>m(k()),()=>{k()&&p.content.set(k())}),E(()=>v(),()=>{Fe(s,v())}),E(()=>g(s),()=>{Object.assign(g(s),se)}),E(()=>(n(),m(S()),m(R()),m(f()),m(l()),m(h()),m(N()),m(X()),m(re()),m(ue()),m(fe()),m(ge())),()=>{n()&&Pt({side:S(),align:R(),sideOffset:f(),alignOffset:l(),collisionPadding:h(),avoidCollisions:N(),collisionBoundary:X(),sameWidth:re(),fitViewport:ue(),strategy:fe(),overlap:ge()})}),He(),Ce();var q=j(),J=W(q);K(J,()=>u()&&n(),U=>{var G=j(),Y=W(G);F(Y,e,"default",{get builder(){return g(s)}},null),w(U,G)},U=>{var G=j(),Y=W(G);K(Y,()=>y()&&n(),Oe=>{var z=Et();Q(z,_=>H(_),()=>H());let ve;var ae=$(z);F(ae,e,"default",{get builder(){return g(s)}},null),ee(z),Z(()=>ve=ne(z,ve,{...g(s),...a})),te(z,_=>g(s).action(_)),ce(3,z,y,b),P(()=>x("m-pointerdown",z,C)),P(()=>x("m-pointerenter",z,C)),w(Oe,z)},Oe=>{var z=j(),ve=W(z);K(ve,()=>I()&&A()&&n(),ae=>{var _=At();Q(_,O=>H(O),()=>H());let me;var le=$(_);F(le,e,"default",{get builder(){return g(s)}},null),ee(_),Z(()=>me=ne(_,me,{...g(s),...a})),te(_,O=>g(s).action(O)),ce(1,_,I,M),ce(2,_,A,V),P(()=>x("m-pointerdown",_,C)),P(()=>x("m-pointerenter",_,C)),w(ae,_)},ae=>{var _=j(),me=W(_);K(me,()=>I()&&n(),le=>{var O=kt();Q(O,T=>H(T),()=>H());let pe;var de=$(O);F(de,e,"default",{get builder(){return g(s)}},null),ee(O),Z(()=>pe=ne(O,pe,{...g(s),...a})),te(O,T=>g(s).action(T)),ce(1,O,I,M),P(()=>x("m-pointerdown",O,C)),P(()=>x("m-pointerenter",O,C)),w(le,O)},le=>{var O=j(),pe=W(O);K(pe,()=>A()&&n(),de=>{var T=Ht();Q(T,B=>H(B),()=>H());let ye;var Te=$(T);F(Te,e,"default",{get builder(){return g(s)}},null),ee(T),Z(()=>ye=ne(T,ye,{...g(s),...a})),te(T,B=>g(s).action(B)),ce(2,T,A,V),P(()=>x("m-pointerdown",T,C)),P(()=>x("m-pointerenter",T,C)),w(de,T)},de=>{var T=j(),ye=W(T);K(ye,n,Te=>{var B=Mt();Q(B,xe=>H(xe),()=>H());let Re;var Le=$(B);F(Le,e,"default",{get builder(){return g(s)}},null),ee(B),Z(()=>Re=ne(B,Re,{...g(s),...a})),te(B,xe=>g(s).action(xe)),P(()=>x("m-pointerdown",B,C)),P(()=>x("m-pointerenter",B,C)),w(Te,B)},null,!0),w(de,T)},!0),w(le,O)},!0),w(ae,_)},!0),w(Oe,z)},!0),w(U,G)}),w(t,q),he()}var Rt=ie("<button><!></button>");function St(t,e){const r=oe(e,["children","$$slots","$$events","$$legacy"]),a=oe(r,["asChild","id","el"]);we(e,!1);const d=Me(),v=()=>_e(I,"$trigger",d),n=We();let s=o(e,"asChild",8,!1),y=o(e,"id",24,()=>{}),b=o(e,"el",28,()=>{});const{elements:{trigger:I},ids:M,getAttrs:A}=Ve(),V=qe(),u=A("trigger");E(()=>m(y()),()=>{y()&&M.trigger.set(y())}),E(()=>v(),()=>{Fe(n,v())}),E(()=>g(n),()=>{Object.assign(g(n),u)}),He(),Ce();var k=j(),S=W(k);K(S,s,R=>{var f=j(),l=W(f);F(l,e,"default",{get builder(){return g(n)}},null),w(R,f)},R=>{var f=Rt();Q(f,N=>b(N),()=>b());let l;var h=$(f);F(h,e,"default",{get builder(){return g(n)}},null),ee(f),Z(()=>l=ne(f,l,{...g(n),type:"button",...a})),te(f,N=>g(n).action(N)),P(()=>x("m-blur",f,V)),P(()=>x("m-focus",f,V)),P(()=>x("m-keydown",f,V)),P(()=>x("m-pointerdown",f,V)),P(()=>x("m-pointerenter",f,V)),P(()=>x("m-pointerleave",f,V)),w(R,f)}),w(t,k),he()}function jt(t,e){const r=oe(e,["children","$$slots","$$events","$$legacy"]),a=oe(r,["class","sideOffset","transition","transitionConfig"]);we(e,!1);let d=o(e,"class",8,void 0),v=o(e,"sideOffset",8,4),n=o(e,"transition",8,vt),s=o(e,"transitionConfig",24,()=>({y:8,duration:150}));Ce();var y=Qe(()=>mt("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground",d()));Vt(t,Je({get transition(){return n()},get transitionConfig(){return s()},get sideOffset(){return v()},get class(){return g(y)}},()=>a,{children:(b,I)=>{var M=j(),A=W(M);F(A,e,"default",{},null),w(b,M)},$$slots:{default:!0}})),he()}const Wt=Dt,Ft=St;export{Wt as R,Ft as T,jt as a};
