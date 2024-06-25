import{c as k,f as H,u as $,o as w,b as q,j as y,a as _,r as u,m as T,d as c,aj as P,e as g}from"./index-B-wAYjFk.js";var[A,E]=k({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[M,S]=k({strict:!1,name:"FormControlContext"});function L(n){const{id:o,isRequired:t,isInvalid:l,isDisabled:e,isReadOnly:s,...m}=n,f=u.useId(),r=o||`field-${f}`,b=`${r}-label`,v=`${r}-feedback`,F=`${r}-helptext`,[C,x]=u.useState(!1),[p,h]=u.useState(!1),[i,I]=u.useState(!1),j=u.useCallback((a={},d=null)=>({id:F,...a,ref:T(d,R=>{R&&h(!0)})}),[F]),O=u.useCallback((a={},d=null)=>({...a,ref:d,"data-focus":c(i),"data-disabled":c(e),"data-invalid":c(l),"data-readonly":c(s),id:a.id!==void 0?a.id:b,htmlFor:a.htmlFor!==void 0?a.htmlFor:r}),[r,e,i,l,s,b]),D=u.useCallback((a={},d=null)=>({id:v,...a,ref:T(d,R=>{R&&x(!0)}),"aria-live":"polite"}),[v]),N=u.useCallback((a={},d=null)=>({...a,...m,ref:d,role:"group","data-focus":c(i),"data-disabled":c(e),"data-invalid":c(l),"data-readonly":c(s)}),[m,e,i,l,s]),B=u.useCallback((a={},d=null)=>({...a,ref:d,role:"presentation","aria-hidden":!0,children:a.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!s,isDisabled:!!e,isFocused:!!i,onFocus:()=>I(!0),onBlur:()=>I(!1),hasFeedbackText:C,setHasFeedbackText:x,hasHelpText:p,setHasHelpText:h,id:r,labelId:b,feedbackId:v,helpTextId:F,htmlProps:m,getHelpTextProps:j,getErrorMessageProps:D,getRootProps:N,getLabelProps:O,getRequiredIndicatorProps:B}}var z=H(function(o,t){const l=$("Form",o),e=w(o),{getRootProps:s,htmlProps:m,...f}=L(e),r=q("chakra-form-control",o.className);return y.jsx(M,{value:f,children:y.jsx(A,{value:l,children:y.jsx(_.div,{...s({},t),className:r,__css:l.container})})})});z.displayName="FormControl";var G=H(function(o,t){const l=S(),e=E(),s=q("chakra-form__helper-text",o.className);return y.jsx(_.div,{...l==null?void 0:l.getHelpTextProps(o,t),__css:e.helperText,className:s})});G.displayName="FormHelperText";function Q(n){const{isDisabled:o,isInvalid:t,isReadOnly:l,isRequired:e,...s}=J(n);return{...s,disabled:o,readOnly:l,required:e,"aria-invalid":P(t),"aria-required":P(e),"aria-readonly":P(l)}}function J(n){var o,t,l;const e=S(),{id:s,disabled:m,readOnly:f,required:r,isRequired:b,isInvalid:v,isReadOnly:F,isDisabled:C,onFocus:x,onBlur:p,...h}=n,i=n["aria-describedby"]?[n["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&(e!=null&&e.isInvalid)&&i.push(e.feedbackId),e!=null&&e.hasHelpText&&i.push(e.helpTextId),{...h,"aria-describedby":i.join(" ")||void 0,id:s??(e==null?void 0:e.id),isDisabled:(o=m??C)!=null?o:e==null?void 0:e.isDisabled,isReadOnly:(t=f??F)!=null?t:e==null?void 0:e.isReadOnly,isRequired:(l=r??b)!=null?l:e==null?void 0:e.isRequired,isInvalid:v??(e==null?void 0:e.isInvalid),onFocus:g(e==null?void 0:e.onFocus,x),onBlur:g(e==null?void 0:e.onBlur,p)}}export{z as F,G as a,S as b,Q as c,E as d,J as u};
