import{i as f,a as _,h as o}from"./utils.mRHdRji8.js";import{l as s}from"./disclose-version.CoVYndpv.js";function d(e,a,l=a){var n=f();s(e,"input",()=>{var r=v(e)?u(e.value):e.value;l(r),n&&r!==(r=a())&&(e.value=r??"")}),_(()=>{var r=a();if(o&&e.defaultValue!==e.value){l(e.value);return}v(e)&&r===u(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function v(e){var a=e.type;return a==="number"||a==="range"}function u(e){return e===""?null:+e}export{d as b};
