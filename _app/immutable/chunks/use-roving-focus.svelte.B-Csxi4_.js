import{q as z,v as E,h as O}from"./utils.FGCVGKui.js";import{l as C}from"./disclose-version.DbYclmGk.js";import{A as m,a as g,b as v,c as y,d as D,H as F,E as W,i as w}from"./map.CARNi6EL.js";function L(e,t,o=t){var d=z();C(e,"input",()=>{var n=A(e)?K(e.value):e.value;o(n),d&&n!==(n=t())&&(e.value=n??"")}),E(()=>{var n=t();if(O&&e.defaultValue!==e.value){o(e.value);return}A(e)&&n===K(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function A(e){var t=e.type;return t==="number"||t==="range"}function K(e){return e===""?null:+e}function P(e){return window.getComputedStyle(e).getPropertyValue("direction")}function k(e="ltr",t="horizontal"){return{horizontal:e==="rtl"?m:g,vertical:v}[t]}function q(e="ltr",t="horizontal"){return{horizontal:e==="rtl"?g:m,vertical:y}[t]}function B(e="ltr",t="horizontal"){return["ltr","rtl"].includes(e)||(e="ltr"),["horizontal","vertical"].includes(t)||(t="horizontal"),{nextKey:k(e,t),prevKey:q(e,t)}}function M(e){const t=e.currentTabStopId?e.currentTabStopId:D(null);function o(){if(!w)return[];const r=document.getElementById(e.rootNodeId.current);return r?e.candidateSelector?Array.from(r.querySelectorAll(e.candidateSelector)):Array.from(r.querySelectorAll(`[${e.candidateAttr}]:not([data-disabled])`)):[]}function d(){var a;const r=o();r.length&&((a=r[0])==null||a.focus())}function n(r,a,s=!1){var x;const h=document.getElementById(e.rootNodeId.current);if(!h||!r)return;const u=o();if(!u.length)return;const i=u.indexOf(r),S=P(h),{nextKey:_,prevKey:b}=B(S,e.orientation.current),I=e.loop.current,f={[_]:i+1,[b]:i-1,[F]:0,[W]:u.length-1};if(s){const T=_===v?g:v,N=b===y?m:y;f[T]=i+1,f[N]=i-1}let c=f[a.key];if(c===void 0)return;a.preventDefault(),c<0&&I?c=u.length-1:c===u.length&&I&&(c=0);const l=u[c];if(l)return l.focus(),t.current=l.id,(x=e.onCandidateFocus)==null||x.call(e,l),l}function R(r){const a=o(),s=t.current!==null;return r&&!s&&a[0]===r?(t.current=r.id,0):(r==null?void 0:r.id)===t.current?0:-1}return{setCurrentTabStopId(r){t.current=r},getTabIndex:R,handleKeydown:n,focusFirstCandidate:d,currentTabStopId:t}}export{L as b,M as u};
