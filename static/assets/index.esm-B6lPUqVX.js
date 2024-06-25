import{b as Ze,d as Vr}from"./chunk-56K2BSAJ-C_Q_2N6z.js";import{f as er,v as Fr,o as Ar,j as Re,a as rr,b as tr,R as M}from"./index-B-wAYjFk.js";var xr=er(function(s,t){var l;const u=Fr("FormLabel",s),n=Ar(s),{className:g,children:h,requiredIndicator:T=Re.jsx(sr,{}),optionalIndicator:p=null,...x}=n,v=Ze(),Z=(l=v==null?void 0:v.getLabelProps(x,t))!=null?l:{ref:t,...x};return Re.jsxs(rr.label,{...Z,className:tr("chakra-form__label",n.className),__css:{display:"block",textAlign:"start",...u},children:[h,v!=null&&v.isRequired?T:p]})});xr.displayName="FormLabel";var sr=er(function(s,t){const l=Ze(),u=Vr();if(!(l!=null&&l.isRequired))return null;const n=tr("chakra-form__required-indicator",s.className);return Re.jsx(rr.span,{...l==null?void 0:l.getRequiredIndicatorProps(s,t),__css:u.requiredIndicator,className:n})});sr.displayName="RequiredIndicator";var ce=e=>e.type==="checkbox",ie=e=>e instanceof Date,L=e=>e==null;const ir=e=>typeof e=="object";var k=e=>!L(e)&&!Array.isArray(e)&&ir(e)&&!ie(e),wr=e=>k(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,mr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Dr=(e,s)=>e.has(mr(s)),kr=e=>{const s=e.constructor&&e.constructor.prototype;return k(s)&&s.hasOwnProperty("isPrototypeOf")},Le=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function I(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Le&&(e instanceof Blob||e instanceof FileList))&&(t||k(e)))if(s=t?[]:{},!t&&!kr(e))s=e;else for(const l in e)e.hasOwnProperty(l)&&(s[l]=I(e[l]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,d=(e,s,t)=>{if(!s||!k(e))return t;const l=fe(s.split(/[,[\].]+?/)).reduce((u,n)=>L(u)?u:u[n],e);return w(l)||l===e?w(e[s])?t:e[s]:l},K=e=>typeof e=="boolean";const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},$={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};M.createContext(null);var Er=(e,s,t,l=!0)=>{const u={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(u,n,{get:()=>{const g=n;return s._proxyFormState[g]!==P.all&&(s._proxyFormState[g]=!l||P.all),t&&(t[g]=!0),e[g]}});return u},q=e=>k(e)&&!Object.keys(e).length,Sr=(e,s,t,l)=>{t(e);const{name:u,...n}=e;return q(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(g=>s[g]===(!l||P.all))},De=e=>Array.isArray(e)?e:[e];function Rr(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var j=e=>typeof e=="string",Lr=(e,s,t,l,u)=>j(e)?(l&&s.watch.add(e),d(t,e,u)):Array.isArray(e)?e.map(n=>(l&&s.watch.add(n),d(t,n))):(l&&(s.watchAll=!0),t),Te=e=>/^\w*$/.test(e),ar=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,t)=>{let l=-1;const u=Te(s)?[s]:ar(s),n=u.length,g=n-1;for(;++l<n;){const h=u[l];let T=t;if(l!==g){const p=e[h];T=k(p)||Array.isArray(p)?p:isNaN(+u[l+1])?{}:[]}e[h]=T,e=e[h]}return e},Tr=(e,s,t,l,u)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[l]:u||!0}}:{},$e=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),Ke=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const oe=(e,s,t,l)=>{for(const u of t||Object.keys(e)){const n=d(e,u);if(n){const{_f:g,...h}=n;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],u)&&!l)break;if(g.ref&&s(g.ref,g.name)&&!l)break;oe(h,s)}else k(h)&&oe(h,s)}}};var Cr=(e,s,t)=>{const l=fe(d(e,t));return A(l,"root",s[t]),A(e,t,l),e},Ce=e=>e.type==="file",Q=e=>typeof e=="function",ve=e=>{if(!Le)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},he=e=>j(e),Oe=e=>e.type==="radio",_e=e=>e instanceof RegExp;const ze={value:!1,isValid:!1},Ge={value:!0,isValid:!0};var lr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ge:{value:e[0].value,isValid:!0}:Ge:ze}return ze};const Je={isValid:!1,value:null};var nr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Je):Je;function Qe(e,s,t="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||K(e)&&!e)return{type:t,message:he(e)?e:"",ref:s}}var se=e=>k(e)&&!_e(e)?e:{value:e,message:""},Xe=async(e,s,t,l,u)=>{const{ref:n,refs:g,required:h,maxLength:T,minLength:p,min:x,max:v,pattern:Z,validate:z,name:C,valueAsNumber:Fe,mount:G,disabled:J}=e._f,b=d(s,C);if(!G||J)return{};const W=g?g[0]:n,H=_=>{l&&W.reportValidity&&(W.setCustomValidity(K(_)?"":_||""),W.reportValidity())},m={},ee=Oe(n),de=ce(n),X=ee||de,re=(Fe||Ce(n))&&w(n.value)&&w(b)||ve(n)&&n.value===""||b===""||Array.isArray(b)&&!b.length,N=Tr.bind(null,C,t,m),ye=(_,V,D,R=$.maxLength,B=$.minLength)=>{const U=_?V:D;m[C]={type:_?R:B,message:U,ref:n,...N(_?R:B,U)}};if(u?!Array.isArray(b)||!b.length:h&&(!X&&(re||L(b))||K(b)&&!b||de&&!lr(g).isValid||ee&&!nr(g).isValid)){const{value:_,message:V}=he(h)?{value:!!h,message:h}:se(h);if(_&&(m[C]={type:$.required,message:V,ref:W,...N($.required,V)},!t))return H(V),m}if(!re&&(!L(x)||!L(v))){let _,V;const D=se(v),R=se(x);if(!L(b)&&!isNaN(b)){const B=n.valueAsNumber||b&&+b;L(D.value)||(_=B>D.value),L(R.value)||(V=B<R.value)}else{const B=n.valueAsDate||new Date(b),U=ne=>new Date(new Date().toDateString()+" "+ne),ae=n.type=="time",le=n.type=="week";j(D.value)&&b&&(_=ae?U(b)>U(D.value):le?b>D.value:B>new Date(D.value)),j(R.value)&&b&&(V=ae?U(b)<U(R.value):le?b<R.value:B<new Date(R.value))}if((_||V)&&(ye(!!_,D.message,R.message,$.max,$.min),!t))return H(m[C].message),m}if((T||p)&&!re&&(j(b)||u&&Array.isArray(b))){const _=se(T),V=se(p),D=!L(_.value)&&b.length>+_.value,R=!L(V.value)&&b.length<+V.value;if((D||R)&&(ye(D,_.message,V.message),!t))return H(m[C].message),m}if(Z&&!re&&j(b)){const{value:_,message:V}=se(Z);if(_e(_)&&!b.match(_)&&(m[C]={type:$.pattern,message:V,ref:n,...N($.pattern,V)},!t))return H(V),m}if(z){if(Q(z)){const _=await z(b,s),V=Qe(_,W);if(V&&(m[C]={...V,...N($.validate,V.message)},!t))return H(V.message),m}else if(k(z)){let _={};for(const V in z){if(!q(_)&&!t)break;const D=Qe(await z[V](b,s),W,V);D&&(_={...D,...N(V,D.message)},H(D.message),t&&(m[C]=_))}if(!q(_)&&(m[C]={ref:W,..._},!t))return m}}return H(!0),m};function Or(e,s){const t=s.slice(0,-1).length;let l=0;for(;l<t;)e=w(e)?l++:e[s[l++]];return e}function pr(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function S(e,s){const t=Array.isArray(s)?s:Te(s)?[s]:ar(s),l=t.length===1?e:Or(e,t),u=t.length-1,n=t[u];return l&&delete l[n],u!==0&&(k(l)&&q(l)||Array.isArray(l)&&pr(l))&&S(e,t.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:u=>{for(const n of e)n.next&&n.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(n=>n!==u)}}),unsubscribe:()=>{e=[]}}},be=e=>L(e)||!ir(e);function Y(e,s){if(be(e)||be(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const t=Object.keys(e),l=Object.keys(s);if(t.length!==l.length)return!1;for(const u of t){const n=e[u];if(!l.includes(u))return!1;if(u!=="ref"){const g=s[u];if(ie(n)&&ie(g)||k(n)&&k(g)||Array.isArray(n)&&Array.isArray(g)?!Y(n,g):n!==g)return!1}}return!0}var ur=e=>e.type==="select-multiple",Nr=e=>Oe(e)||ce(e),Ee=e=>ve(e)&&e.isConnected,or=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function Ve(e,s={}){const t=Array.isArray(e);if(k(e)||t)for(const l in e)Array.isArray(e[l])||k(e[l])&&!or(e[l])?(s[l]=Array.isArray(e[l])?[]:{},Ve(e[l],s[l])):L(e[l])||(s[l]=!0);return s}function cr(e,s,t){const l=Array.isArray(e);if(k(e)||l)for(const u in e)Array.isArray(e[u])||k(e[u])&&!or(e[u])?w(s)||be(t[u])?t[u]=Array.isArray(e[u])?Ve(e[u],[]):{...Ve(e[u])}:cr(e[u],L(s)?{}:s[u],t[u]):t[u]=!Y(e[u],s[u]);return t}var ge=(e,s)=>cr(e,s,Ve(s)),fr=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:l})=>w(e)?e:s?e===""?NaN:e&&+e:t&&j(e)?new Date(e):l?l(e):e;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Ce(s)?s.files:Oe(s)?nr(e.refs).value:ur(s)?[...s.selectedOptions].map(({value:t})=>t):ce(s)?lr(e.refs).value:fr(w(s.value)?e.ref.value:s.value,e)}var Ur=(e,s,t,l)=>{const u={};for(const n of e){const g=d(s,n);g&&A(u,n,g._f)}return{criteriaMode:t,names:[...e],fields:u,shouldUseNativeValidation:l}},ue=e=>w(e)?e:_e(e)?e.source:k(e)?_e(e.value)?e.value.source:e.value:e,Ir=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ye(e,s,t){const l=d(e,t);if(l||Te(t))return{error:l,name:t};const u=t.split(".");for(;u.length;){const n=u.join("."),g=d(s,n),h=d(e,n);if(g&&!Array.isArray(g)&&t!==n)return{name:t};if(h&&h.type)return{name:n,error:h};u.pop()}return{name:t}}var Mr=(e,s,t,l,u)=>u.isOnAll?!1:!t&&u.isOnTouch?!(s||e):(t?l.isOnBlur:u.isOnBlur)?!e:(t?l.isOnChange:u.isOnChange)?e:!0,qr=(e,s)=>!fe(d(e,s)).length&&S(e,s);const Br={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Pr(e={}){let s={...Br,...e},t={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},u=k(s.defaultValues)||k(s.values)?I(s.defaultValues||s.values)||{}:{},n=s.shouldUnregister?{}:I(u),g={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},T,p=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:ke(),array:ke(),state:ke()},Z=$e(s.mode),z=$e(s.reValidateMode),C=s.criteriaMode===P.all,Fe=r=>i=>{clearTimeout(p),p=setTimeout(r,i)},G=async r=>{if(x.isValid||r){const i=s.resolver?q((await X()).errors):await N(l,!0);i!==t.isValid&&v.state.next({isValid:i})}},J=(r,i)=>{(x.isValidating||x.validatingFields)&&((r||Array.from(h.mount)).forEach(a=>a&&A(t.validatingFields,a,!!i)),t.isValidating=Object.values(t.validatingFields).some(a=>a),v.state.next({validatingFields:t.validatingFields,isValidating:t.isValidating}))},b=(r,i=[],a,f,c=!0,o=!0)=>{if(f&&a){if(g.action=!0,o&&Array.isArray(d(l,r))){const y=a(d(l,r),f.argA,f.argB);c&&A(l,r,y)}if(o&&Array.isArray(d(t.errors,r))){const y=a(d(t.errors,r),f.argA,f.argB);c&&A(t.errors,r,y),qr(t.errors,r)}if(x.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const y=a(d(t.touchedFields,r),f.argA,f.argB);c&&A(t.touchedFields,r,y)}x.dirtyFields&&(t.dirtyFields=ge(u,n)),v.state.next({name:r,isDirty:_(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(n,r,i)},W=(r,i)=>{A(t.errors,r,i),v.state.next({errors:t.errors})},H=r=>{t.errors=r,v.state.next({errors:t.errors,isValid:!1})},m=(r,i,a,f)=>{const c=d(l,r);if(c){const o=d(n,r,w(a)?d(u,r):a);w(o)||f&&f.defaultChecked||i?A(n,r,i?o:Se(c._f)):R(r,o),g.mount&&G()}},ee=(r,i,a,f,c)=>{let o=!1,y=!1;const F={name:r},E=!!(d(l,r)&&d(l,r)._f.disabled);if(!a||f){x.isDirty&&(y=t.isDirty,t.isDirty=F.isDirty=_(),o=y!==F.isDirty);const O=E||Y(d(u,r),i);y=!!(!E&&d(t.dirtyFields,r)),O||E?S(t.dirtyFields,r):A(t.dirtyFields,r,!0),F.dirtyFields=t.dirtyFields,o=o||x.dirtyFields&&y!==!O}if(a){const O=d(t.touchedFields,r);O||(A(t.touchedFields,r,a),F.touchedFields=t.touchedFields,o=o||x.touchedFields&&O!==a)}return o&&c&&v.state.next(F),o?F:{}},de=(r,i,a,f)=>{const c=d(t.errors,r),o=x.isValid&&K(i)&&t.isValid!==i;if(e.delayError&&a?(T=Fe(()=>W(r,a)),T(e.delayError)):(clearTimeout(p),T=null,a?A(t.errors,r,a):S(t.errors,r)),(a?!Y(c,a):c)||!q(f)||o){const y={...f,...o&&K(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...y},v.state.next(y)}},X=async r=>{J(r,!0);const i=await s.resolver(n,s.context,Ur(r||h.mount,l,s.criteriaMode,s.shouldUseNativeValidation));return J(r),i},re=async r=>{const{errors:i}=await X(r);if(r)for(const a of r){const f=d(i,a);f?A(t.errors,a,f):S(t.errors,a)}else t.errors=i;return i},N=async(r,i,a={valid:!0})=>{for(const f in r){const c=r[f];if(c){const{_f:o,...y}=c;if(o){const F=h.array.has(o.name);J([f],!0);const E=await Xe(c,n,C,s.shouldUseNativeValidation&&!i,F);if(J([f]),E[o.name]&&(a.valid=!1,i))break;!i&&(d(E,o.name)?F?Cr(t.errors,E,o.name):A(t.errors,o.name,E[o.name]):S(t.errors,o.name))}y&&await N(y,i,a)}}return a.valid},ye=()=>{for(const r of h.unMount){const i=d(l,r);i&&(i._f.refs?i._f.refs.every(a=>!Ee(a)):!Ee(i._f.ref))&&Ae(r)}h.unMount=new Set},_=(r,i)=>(r&&i&&A(n,r,i),!Y(pe(),u)),V=(r,i,a)=>Lr(r,h,{...g.mount?n:w(i)?u:j(r)?{[r]:i}:i},a,i),D=r=>fe(d(g.mount?n:u,r,e.shouldUnregister?d(u,r,[]):[])),R=(r,i,a={})=>{const f=d(l,r);let c=i;if(f){const o=f._f;o&&(!o.disabled&&A(n,r,fr(i,o)),c=ve(o.ref)&&L(i)?"":i,ur(o.ref)?[...o.ref.options].forEach(y=>y.selected=c.includes(y.value)):o.refs?ce(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(c)?!!c.find(F=>F===y.value):c===y.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(y=>y.checked=y.value===c):Ce(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:r,values:{...n}})))}(a.shouldDirty||a.shouldTouch)&&ee(r,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ne(r)},B=(r,i,a)=>{for(const f in i){const c=i[f],o=`${r}.${f}`,y=d(l,o);(h.array.has(r)||!be(c)||y&&!y._f)&&!ie(c)?B(o,c,a):R(o,c,a)}},U=(r,i,a={})=>{const f=d(l,r),c=h.array.has(r),o=I(i);A(n,r,o),c?(v.array.next({name:r,values:{...n}}),(x.isDirty||x.dirtyFields)&&a.shouldDirty&&v.state.next({name:r,dirtyFields:ge(u,n),isDirty:_(r,o)})):f&&!f._f&&!L(o)?B(r,o,a):R(r,o,a),Ke(r,h)&&v.state.next({...t}),v.values.next({name:g.mount?r:void 0,values:{...n}})},ae=async r=>{const i=r.target;let a=i.name,f=!0;const c=d(l,a),o=()=>i.type?Se(c._f):wr(r),y=F=>{f=Number.isNaN(F)||F===d(n,a,F)};if(c){let F,E;const O=o(),te=r.type===He.BLUR||r.type===He.FOCUS_OUT,vr=!Ir(c._f)&&!s.resolver&&!d(t.errors,a)&&!c._f.deps||Mr(te,d(t.touchedFields,a),t.isSubmitted,z,Z),we=Ke(a,h,te);A(n,a,O),te?(c._f.onBlur&&c._f.onBlur(r),T&&T(0)):c._f.onChange&&c._f.onChange(r);const me=ee(a,O,te,!1),_r=!q(me)||we;if(!te&&v.values.next({name:a,type:r.type,values:{...n}}),vr)return x.isValid&&G(),_r&&v.state.next({name:a,...we?{}:me});if(!te&&we&&v.state.next({...t}),s.resolver){const{errors:je}=await X([a]);if(y(O),f){const br=Ye(t.errors,l,a),We=Ye(je,l,br.name||a);F=We.error,a=We.name,E=q(je)}}else J([a],!0),F=(await Xe(c,n,C,s.shouldUseNativeValidation))[a],J([a]),y(O),f&&(F?E=!1:x.isValid&&(E=await N(l,!0)));f&&(c._f.deps&&ne(c._f.deps),de(a,E,F,me))}},le=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},ne=async(r,i={})=>{let a,f;const c=De(r);if(s.resolver){const o=await re(w(r)?r:c);a=q(o),f=r?!c.some(y=>d(o,y)):a}else r?(f=(await Promise.all(c.map(async o=>{const y=d(l,o);return await N(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!f&&!t.isValid)&&G()):f=a=await N(l);return v.state.next({...!j(r)||x.isValid&&a!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:a}:{},errors:t.errors}),i.shouldFocus&&!f&&oe(l,le,r?c:h.mount),f},pe=r=>{const i={...u,...g.mount?n:{}};return w(r)?i:j(r)?d(i,r):r.map(a=>d(i,a))},Ne=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),isTouched:!!d((i||t).touchedFields,r),isValidating:!!d((i||t).validatingFields,r),error:d((i||t).errors,r)}),dr=r=>{r&&De(r).forEach(i=>S(t.errors,i)),v.state.next({errors:r?t.errors:{}})},Ue=(r,i,a)=>{const f=(d(l,r,{_f:{}})._f||{}).ref;A(t.errors,r,{...i,ref:f}),v.state.next({name:r,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&f&&f.focus&&f.focus()},yr=(r,i)=>Q(r)?v.values.subscribe({next:a=>r(V(void 0,i),a)}):V(r,i,!0),Ae=(r,i={})=>{for(const a of r?De(r):h.mount)h.mount.delete(a),h.array.delete(a),i.keepValue||(S(l,a),S(n,a)),!i.keepError&&S(t.errors,a),!i.keepDirty&&S(t.dirtyFields,a),!i.keepTouched&&S(t.touchedFields,a),!i.keepIsValidating&&S(t.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&S(u,a);v.values.next({values:{...n}}),v.state.next({...t,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&G()},Ie=({disabled:r,name:i,field:a,fields:f,value:c})=>{if(K(r)){const o=r?void 0:w(c)?Se(a?a._f:d(f,i)._f):c;A(n,i,o),ee(i,o,!1,!1,!0)}},xe=(r,i={})=>{let a=d(l,r);const f=K(i.disabled);return A(l,r,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),a?Ie({field:a,disabled:i.disabled,name:r,value:i.value}):m(r,!0,i.value),{...f?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:r,onChange:ae,onBlur:ae,ref:c=>{if(c){xe(r,i),a=d(l,r);const o=w(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,y=Nr(o),F=a._f.refs||[];if(y?F.find(E=>E===o):o===a._f.ref)return;A(l,r,{_f:{...a._f,...y?{refs:[...F.filter(Ee),o,...Array.isArray(d(u,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),m(r,!1,void 0,o)}else a=d(l,r,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(Dr(h.array,r)&&g.action)&&h.unMount.add(r)}}},Me=()=>s.shouldFocusError&&oe(l,le,h.mount),gr=r=>{K(r)&&(v.state.next({disabled:r}),oe(l,(i,a)=>{let f=r;const c=d(l,a);c&&K(c._f.disabled)&&(f||(f=c._f.disabled)),i.disabled=f},0,!1))},qe=(r,i)=>async a=>{let f;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let c=I(n);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await X();t.errors=o,c=y}else await N(l);if(S(t.errors,"root"),q(t.errors)){v.state.next({errors:{}});try{await r(c,a)}catch(o){f=o}}else i&&await i({...t.errors},a),Me(),setTimeout(Me);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(t.errors)&&!f,submitCount:t.submitCount+1,errors:t.errors}),f)throw f},hr=(r,i={})=>{d(l,r)&&(w(i.defaultValue)?U(r,I(d(u,r))):(U(r,i.defaultValue),A(u,r,I(i.defaultValue))),i.keepTouched||S(t.touchedFields,r),i.keepDirty||(S(t.dirtyFields,r),t.isDirty=i.defaultValue?_(r,I(d(u,r))):_()),i.keepError||(S(t.errors,r),x.isValid&&G()),v.state.next({...t}))},Be=(r,i={})=>{const a=r?I(r):u,f=I(a),c=q(r),o=c?u:f;if(i.keepDefaultValues||(u=a),!i.keepValues){if(i.keepDirtyValues)for(const y of h.mount)d(t.dirtyFields,y)?A(o,y,d(n,y)):U(y,d(o,y));else{if(Le&&w(r))for(const y of h.mount){const F=d(l,y);if(F&&F._f){const E=Array.isArray(F._f.refs)?F._f.refs[0]:F._f.ref;if(ve(E)){const O=E.closest("form");if(O){O.reset();break}}}}l={}}n=e.shouldUnregister?i.keepDefaultValues?I(u):{}:I(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!x.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Y(r,u)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?[]:i.keepDirtyValues?i.keepDefaultValues&&n?ge(u,n):t.dirtyFields:i.keepDefaultValues&&r?ge(u,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(r,i)=>Be(Q(r)?r(n):r,i);return{control:{register:xe,unregister:Ae,getFieldState:Ne,handleSubmit:qe,setError:Ue,_executeSchema:X,_getWatch:V,_getDirty:_,_updateValid:G,_removeUnmounted:ye,_updateFieldArray:b,_updateDisabledField:Ie,_getFieldArray:D,_reset:Be,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(r=>{Pe(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:gr,_subjects:v,_proxyFormState:x,_setErrors:H,get _fields(){return l},get _formValues(){return n},get _state(){return g},set _state(r){g=r},get _defaultValues(){return u},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ne,register:xe,handleSubmit:qe,watch:yr,setValue:U,getValues:pe,reset:Pe,resetField:hr,clearErrors:dr,unregister:Ae,setError:Ue,setFocus:(r,i={})=>{const a=d(l,r),f=a&&a._f;if(f){const c=f.refs?f.refs[0]:f.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Ne}}function zr(e={}){const s=M.useRef(),t=M.useRef(),[l,u]=M.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Pr(e),formState:l});const n=s.current.control;return n._options=e,Rr({subject:n._subjects.state,next:g=>{Sr(g,n._proxyFormState,n._updateFormState,!0)&&u({...n._formState})}}),M.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),M.useEffect(()=>{if(n._proxyFormState.isDirty){const g=n._getDirty();g!==l.isDirty&&n._subjects.state.next({isDirty:g})}},[n,l.isDirty]),M.useEffect(()=>{e.values&&!Y(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,u(g=>({...g}))):n._resetDefaultValues()},[e.values,n]),M.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),M.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=Er(l,n),s.current}export{xr as F,Tr as a,d as g,A as s,zr as u};
