(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();var $m={exports:{}},sc={};var ky;function tC(){if(ky)return sc;ky=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:s,type:i,key:c,ref:a!==void 0?a:null,props:l}}return sc.Fragment=t,sc.jsx=e,sc.jsxs=e,sc}var Xy;function eC(){return Xy||(Xy=1,$m.exports=tC()),$m.exports}var $e=eC(),t_={exports:{}},Me={};var Wy;function nC(){if(Wy)return Me;Wy=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function M(B,K,vt){this.props=B,this.context=K,this.refs=S,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(B,K){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,K,"setState")},M.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function A(){}A.prototype=M.prototype;function D(B,K,vt){this.props=B,this.context=K,this.refs=S,this.updater=vt||y}var C=D.prototype=new A;C.constructor=D,E(C,M.prototype),C.isPureReactComponent=!0;var P=Array.isArray;function O(){}var L={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function w(B,K,vt){var Tt=vt.ref;return{$$typeof:s,type:B,key:K,ref:Tt!==void 0?Tt:null,props:vt}}function k(B,K){return w(B.type,K,B.props)}function I(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function G(B){var K={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(vt){return K[vt]})}var J=/\/+/g;function $(B,K){return typeof B=="object"&&B!==null&&B.key!=null?G(""+B.key):K.toString(36)}function Q(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(O,O):(B.status="pending",B.then(function(K){B.status==="pending"&&(B.status="fulfilled",B.value=K)},function(K){B.status==="pending"&&(B.status="rejected",B.reason=K)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,K,vt,Tt,Dt){var it=typeof B;(it==="undefined"||it==="boolean")&&(B=null);var mt=!1;if(B===null)mt=!0;else switch(it){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(B.$$typeof){case s:case t:mt=!0;break;case _:return mt=B._init,z(mt(B._payload),K,vt,Tt,Dt)}}if(mt)return Dt=Dt(B),mt=Tt===""?"."+$(B,0):Tt,P(Dt)?(vt="",mt!=null&&(vt=mt.replace(J,"$&/")+"/"),z(Dt,K,vt,"",function(ee){return ee})):Dt!=null&&(I(Dt)&&(Dt=k(Dt,vt+(Dt.key==null||B&&B.key===Dt.key?"":(""+Dt.key).replace(J,"$&/")+"/")+mt)),K.push(Dt)),1;mt=0;var Mt=Tt===""?".":Tt+":";if(P(B))for(var Pt=0;Pt<B.length;Pt++)Tt=B[Pt],it=Mt+$(Tt,Pt),mt+=z(Tt,K,vt,it,Dt);else if(Pt=x(B),typeof Pt=="function")for(B=Pt.call(B),Pt=0;!(Tt=B.next()).done;)Tt=Tt.value,it=Mt+$(Tt,Pt++),mt+=z(Tt,K,vt,it,Dt);else if(it==="object"){if(typeof B.then=="function")return z(Q(B),K,vt,Tt,Dt);throw K=String(B),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return mt}function F(B,K,vt){if(B==null)return B;var Tt=[],Dt=0;return z(B,Tt,"","",function(it){return K.call(vt,it,Dt++)}),Tt}function tt(B){if(B._status===-1){var K=B._result;K=K(),K.then(function(vt){(B._status===0||B._status===-1)&&(B._status=1,B._result=vt)},function(vt){(B._status===0||B._status===-1)&&(B._status=2,B._result=vt)}),B._status===-1&&(B._status=0,B._result=K)}if(B._status===1)return B._result.default;throw B._result}var ct=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},V={map:F,forEach:function(B,K,vt){F(B,function(){K.apply(this,arguments)},vt)},count:function(B){var K=0;return F(B,function(){K++}),K},toArray:function(B){return F(B,function(K){return K})||[]},only:function(B){if(!I(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return Me.Activity=v,Me.Children=V,Me.Component=M,Me.Fragment=e,Me.Profiler=a,Me.PureComponent=D,Me.StrictMode=i,Me.Suspense=h,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,Me.__COMPILER_RUNTIME={__proto__:null,c:function(B){return L.H.useMemoCache(B)}},Me.cache=function(B){return function(){return B.apply(null,arguments)}},Me.cacheSignal=function(){return null},Me.cloneElement=function(B,K,vt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Tt=E({},B.props),Dt=B.key;if(K!=null)for(it in K.key!==void 0&&(Dt=""+K.key),K)!T.call(K,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&K.ref===void 0||(Tt[it]=K[it]);var it=arguments.length-2;if(it===1)Tt.children=vt;else if(1<it){for(var mt=Array(it),Mt=0;Mt<it;Mt++)mt[Mt]=arguments[Mt+2];Tt.children=mt}return w(B.type,Dt,Tt)},Me.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},Me.createElement=function(B,K,vt){var Tt,Dt={},it=null;if(K!=null)for(Tt in K.key!==void 0&&(it=""+K.key),K)T.call(K,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Dt[Tt]=K[Tt]);var mt=arguments.length-2;if(mt===1)Dt.children=vt;else if(1<mt){for(var Mt=Array(mt),Pt=0;Pt<mt;Pt++)Mt[Pt]=arguments[Pt+2];Dt.children=Mt}if(B&&B.defaultProps)for(Tt in mt=B.defaultProps,mt)Dt[Tt]===void 0&&(Dt[Tt]=mt[Tt]);return w(B,it,Dt)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(B){return{$$typeof:f,render:B}},Me.isValidElement=I,Me.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:tt}},Me.memo=function(B,K){return{$$typeof:d,type:B,compare:K===void 0?null:K}},Me.startTransition=function(B){var K=L.T,vt={};L.T=vt;try{var Tt=B(),Dt=L.S;Dt!==null&&Dt(vt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(O,ct)}catch(it){ct(it)}finally{K!==null&&vt.types!==null&&(K.types=vt.types),L.T=K}},Me.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},Me.use=function(B){return L.H.use(B)},Me.useActionState=function(B,K,vt){return L.H.useActionState(B,K,vt)},Me.useCallback=function(B,K){return L.H.useCallback(B,K)},Me.useContext=function(B){return L.H.useContext(B)},Me.useDebugValue=function(){},Me.useDeferredValue=function(B,K){return L.H.useDeferredValue(B,K)},Me.useEffect=function(B,K){return L.H.useEffect(B,K)},Me.useEffectEvent=function(B){return L.H.useEffectEvent(B)},Me.useId=function(){return L.H.useId()},Me.useImperativeHandle=function(B,K,vt){return L.H.useImperativeHandle(B,K,vt)},Me.useInsertionEffect=function(B,K){return L.H.useInsertionEffect(B,K)},Me.useLayoutEffect=function(B,K){return L.H.useLayoutEffect(B,K)},Me.useMemo=function(B,K){return L.H.useMemo(B,K)},Me.useOptimistic=function(B,K){return L.H.useOptimistic(B,K)},Me.useReducer=function(B,K,vt){return L.H.useReducer(B,K,vt)},Me.useRef=function(B){return L.H.useRef(B)},Me.useState=function(B){return L.H.useState(B)},Me.useSyncExternalStore=function(B,K,vt){return L.H.useSyncExternalStore(B,K,vt)},Me.useTransition=function(){return L.H.useTransition()},Me.version="19.2.4",Me}var Yy;function y0(){return Yy||(Yy=1,t_.exports=nC()),t_.exports}var Si=y0(),e_={exports:{}},oc={},n_={exports:{}},i_={};var qy;function iC(){return qy||(qy=1,(function(s){function t(z,F){var tt=z.length;z.push(F);t:for(;0<tt;){var ct=tt-1>>>1,V=z[ct];if(0<a(V,F))z[ct]=F,z[tt]=V,tt=ct;else break t}}function e(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var F=z[0],tt=z.pop();if(tt!==F){z[0]=tt;t:for(var ct=0,V=z.length,B=V>>>1;ct<B;){var K=2*(ct+1)-1,vt=z[K],Tt=K+1,Dt=z[Tt];if(0>a(vt,tt))Tt<V&&0>a(Dt,vt)?(z[ct]=Dt,z[Tt]=tt,ct=Tt):(z[ct]=vt,z[K]=tt,ct=K);else if(Tt<V&&0>a(Dt,tt))z[ct]=Dt,z[Tt]=tt,ct=Tt;else break t}}return F}function a(z,F){var tt=z.sortIndex-F.sortIndex;return tt!==0?tt:z.id-F.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],d=[],_=1,v=null,g=3,x=!1,y=!1,E=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var F=e(d);F!==null;){if(F.callback===null)i(d);else if(F.startTime<=z)i(d),F.sortIndex=F.expirationTime,t(h,F);else break;F=e(d)}}function P(z){if(E=!1,C(z),!y)if(e(h)!==null)y=!0,O||(O=!0,G());else{var F=e(d);F!==null&&Q(P,F.startTime-z)}}var O=!1,L=-1,T=5,w=-1;function k(){return S?!0:!(s.unstable_now()-w<T)}function I(){if(S=!1,O){var z=s.unstable_now();w=z;var F=!0;try{t:{y=!1,E&&(E=!1,A(L),L=-1),x=!0;var tt=g;try{e:{for(C(z),v=e(h);v!==null&&!(v.expirationTime>z&&k());){var ct=v.callback;if(typeof ct=="function"){v.callback=null,g=v.priorityLevel;var V=ct(v.expirationTime<=z);if(z=s.unstable_now(),typeof V=="function"){v.callback=V,C(z),F=!0;break e}v===e(h)&&i(h),C(z)}else i(h);v=e(h)}if(v!==null)F=!0;else{var B=e(d);B!==null&&Q(P,B.startTime-z),F=!1}}break t}finally{v=null,g=tt,x=!1}F=void 0}}finally{F?G():O=!1}}}var G;if(typeof D=="function")G=function(){D(I)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,$=J.port2;J.port1.onmessage=I,G=function(){$.postMessage(null)}}else G=function(){M(I,0)};function Q(z,F){L=M(function(){z(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(z){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var tt=g;g=F;try{return z()}finally{g=tt}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var tt=g;g=z;try{return F()}finally{g=tt}},s.unstable_scheduleCallback=function(z,F,tt){var ct=s.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?ct+tt:ct):tt=ct,z){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=tt+V,z={id:_++,callback:F,priorityLevel:z,startTime:tt,expirationTime:V,sortIndex:-1},tt>ct?(z.sortIndex=tt,t(d,z),e(h)===null&&z===e(d)&&(E?(A(L),L=-1):E=!0,Q(P,tt-ct))):(z.sortIndex=V,t(h,z),y||x||(y=!0,O||(O=!0,G()))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var F=g;return function(){var tt=g;g=F;try{return z.apply(this,arguments)}finally{g=tt}}}})(i_)),i_}var Zy;function rC(){return Zy||(Zy=1,n_.exports=iC()),n_.exports}var r_={exports:{}},gi={};var jy;function aC(){if(jy)return gi;jy=1;var s=y0();function t(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(h,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:h,containerInfo:d,implementation:_}}var c=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return gi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,gi.createPortal=function(h,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(h,d,null,_)},gi.flushSync=function(h){var d=c.T,_=i.p;try{if(c.T=null,i.p=2,h)return h()}finally{c.T=d,i.p=_,i.d.f()}},gi.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,i.d.C(h,d))},gi.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},gi.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?i.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&i.d.X(h,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},gi.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);i.d.M(h,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&i.d.M(h)},gi.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin);i.d.L(h,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},gi.preloadModule=function(h,d){if(typeof h=="string")if(d){var _=f(d.as,d.crossOrigin);i.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else i.d.m(h)},gi.requestFormReset=function(h){i.d.r(h)},gi.unstable_batchedUpdates=function(h,d){return h(d)},gi.useFormState=function(h,d,_){return c.H.useFormState(h,d,_)},gi.useFormStatus=function(){return c.H.useHostTransitionStatus()},gi.version="19.2.4",gi}var Qy;function sC(){if(Qy)return r_.exports;Qy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),r_.exports=aC(),r_.exports}var Ky;function oC(){if(Ky)return oc;Ky=1;var s=rC(),t=y0(),e=sC();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function h(n){if(l(n)!==n)throw Error(i(188))}function d(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var m=p.alternate;if(m===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===o)return h(p),n;if(m===u)return h(p),r;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=p,u=m;else{for(var b=!1,N=p.child;N;){if(N===o){b=!0,o=p,u=m;break}if(N===u){b=!0,u=p,o=m;break}N=N.sibling}if(!b){for(N=m.child;N;){if(N===o){b=!0,o=m,u=p;break}if(N===u){b=!0,u=m,o=p;break}N=N.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:r}function _(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=_(n),r!==null)return r;n=n.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function G(n){return n===null||typeof n!="object"?null:(n=I&&n[I]||n["@@iterator"],typeof n=="function"?n:null)}var J=Symbol.for("react.client.reference");function $(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===J?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case M:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case w:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case y:return"Portal";case D:return n.displayName||"Context";case A:return(n._context.displayName||"Context")+".Consumer";case C:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case L:return r=n.displayName||null,r!==null?r:$(n.type)||"Memo";case T:r=n._payload,n=n._init;try{return $(n(r))}catch{}}return null}var Q=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},ct=[],V=-1;function B(n){return{current:n}}function K(n){0>V||(n.current=ct[V],ct[V]=null,V--)}function vt(n,r){V++,ct[V]=n.current,n.current=r}var Tt=B(null),Dt=B(null),it=B(null),mt=B(null);function Mt(n,r){switch(vt(it,r),vt(Dt,n),vt(Tt,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?hy(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=hy(r),n=dy(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}K(Tt),vt(Tt,n)}function Pt(){K(Tt),K(Dt),K(it)}function ee(n){n.memoizedState!==null&&vt(mt,n);var r=Tt.current,o=dy(r,n.type);r!==o&&(vt(Dt,n),vt(Tt,o))}function Qt(n){Dt.current===n&&(K(Tt),K(Dt)),mt.current===n&&(K(mt),nc._currentValue=tt)}var Le,Yt;function ae(n){if(Le===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Le=r&&r[1]||"",Yt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Le+n+Yt}var _e=!1;function se(n,r){if(!n||_e)return"";_e=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(dt){var ft=dt}Reflect.construct(n,[],yt)}else{try{yt.call()}catch(dt){ft=dt}n.call(yt.prototype)}}else{try{throw Error()}catch(dt){ft=dt}(yt=n())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(dt){if(dt&&ft&&typeof dt.stack=="string")return[dt.stack,ft.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],N=m[1];if(b&&N){var W=b.split(`
`),ot=N.split(`
`);for(p=u=0;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;for(;p<ot.length&&!ot[p].includes("DetermineComponentFrameRoot");)p++;if(u===W.length||p===ot.length)for(u=W.length-1,p=ot.length-1;1<=u&&0<=p&&W[u]!==ot[p];)p--;for(;1<=u&&0<=p;u--,p--)if(W[u]!==ot[p]){if(u!==1||p!==1)do if(u--,p--,0>p||W[u]!==ot[p]){var xt=`
`+W[u].replace(" at new "," at ");return n.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",n.displayName)),xt}while(1<=u&&0<=p);break}}}finally{_e=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?ae(o):""}function lt(n,r){switch(n.tag){case 26:case 27:case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return n.child!==r&&r!==null?ae("Suspense Fallback"):ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return se(n.type,!1);case 11:return se(n.type.render,!1);case 1:return se(n.type,!0);case 31:return ae("Activity");default:return""}}function Y(n){try{var r="",o=null;do r+=lt(n,o),o=n,n=n.return;while(n);return r}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Ye=Object.prototype.hasOwnProperty,Ee=s.unstable_scheduleCallback,ce=s.unstable_cancelCallback,Xt=s.unstable_shouldYield,H=s.unstable_requestPaint,R=s.unstable_now,Z=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,gt=s.unstable_UserBlockingPriority,ht=s.unstable_NormalPriority,Ht=s.unstable_LowPriority,Rt=s.unstable_IdlePriority,ie=s.log,Wt=s.unstable_setDisableYieldValue,At=null,bt=null;function It(n){if(typeof ie=="function"&&Wt(n),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(At,n)}catch{}}var Ot=Math.clz32?Math.clz32:X,zt=Math.log,pe=Math.LN2;function X(n){return n>>>=0,n===0?32:31-(zt(n)/pe|0)|0}var wt=256,Ct=262144,Lt=4194304;function Et(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function pt(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var p=0,m=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var N=u&134217727;return N!==0?(u=N&~m,u!==0?p=Et(u):(b&=N,b!==0?p=Et(b):o||(o=N&~n,o!==0&&(p=Et(o))))):(N=u&~m,N!==0?p=Et(N):b!==0?p=Et(b):o||(o=u&~n,o!==0&&(p=Et(o)))),p===0?0:r!==0&&r!==p&&(r&m)===0&&(m=p&-p,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:p}function kt(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function le(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ke(){var n=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),n}function Vt(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Jt(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Te(n,r,o,u,p,m){var b=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var N=n.entanglements,W=n.expirationTimes,ot=n.hiddenUpdates;for(o=b&~o;0<o;){var xt=31-Ot(o),yt=1<<xt;N[xt]=0,W[xt]=-1;var ft=ot[xt];if(ft!==null)for(ot[xt]=null,xt=0;xt<ft.length;xt++){var dt=ft[xt];dt!==null&&(dt.lane&=-536870913)}o&=~yt}u!==0&&Ft(n,u,0),m!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=m&~(b&~r))}function Ft(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-Ot(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&261930}function he(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Ot(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}function oe(n,r){var o=r&-r;return o=(o&42)!==0?1:de(o),(o&(n.suspendedLanes|r))!==0?0:o}function de(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function _n(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ge(){var n=F.p;return n!==0?n:(n=window.event,n===void 0?32:zy(n.type))}function sn(n,r){var o=F.p;try{return F.p=n,r()}finally{F.p=o}}var on=Math.random().toString(36).slice(2),be="__reactFiber$"+on,Se="__reactProps$"+on,Pe="__reactContainer$"+on,In="__reactEvents$"+on,ln="__reactListeners$"+on,ni="__reactHandles$"+on,Ci="__reactResources$"+on,gn="__reactMarker$"+on;function bn(n){delete n[be],delete n[Se],delete n[In],delete n[ln],delete n[ni]}function vn(n){var r=n[be];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Pe]||o[be]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Sy(n);n!==null;){if(o=n[be])return o;n=Sy(n)}return r}n=o,o=n.parentNode}return null}function _i(n){if(n=n[be]||n[Pe]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function wr(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function U(n){var r=n[Ci];return r||(r=n[Ci]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function q(n){n[gn]=!0}var ut=new Set,st={};function rt(n,r){Ut(n,r),Ut(n+"Capture",r)}function Ut(n,r){for(st[n]=r,n=0;n<r.length;n++)ut.add(r[n])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nt={},Zt={};function jt(n){return Ye.call(Zt,n)?!0:Ye.call(Nt,n)?!1:Bt.test(n)?Zt[n]=!0:(Nt[n]=!0,!1)}function me(n,r,o){if(jt(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function ye(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Kt(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}function Ce(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yn(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Mn(n,r,o){var u=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,m=u.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(b){o=""+b,m.call(this,b)}}),Object.defineProperty(n,r,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ze(n){if(!n._valueTracker){var r=yn(n)?"checked":"value";n._valueTracker=Mn(n,r,""+n[r])}}function jn(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=yn(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function ne(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ri=/[\n"\\]/g;function ve(n){return n.replace(Ri,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function wi(n,r,o,u,p,m,b,N){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),r!=null?b==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Ce(r)):n.value!==""+Ce(r)&&(n.value=""+Ce(r)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),r!=null?Zr(n,b,Ce(r)):o!=null?Zr(n,b,Ce(o)):u!=null&&n.removeAttribute("value"),p==null&&m!=null&&(n.defaultChecked=!!m),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?n.name=""+Ce(N):n.removeAttribute("name")}function rr(n,r,o,u,p,m,b,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null)){Ze(n);return}o=o!=null?""+Ce(o):"",r=r!=null?""+Ce(r):o,N||r===n.value||(n.value=r),n.defaultValue=r}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=N?n.checked:!!u,n.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),Ze(n)}function Zr(n,r,o){r==="number"&&ne(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function ar(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ce(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function tn(n,r,o){if(r!=null&&(r=""+Ce(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+Ce(o):""}function Hn(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(i(92));if(Q(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=Ce(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u),Ze(n)}function Di(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Vn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jr(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||Vn.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Aa(n,r,o){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var p in r)u=r[p],r.hasOwnProperty(p)&&o[p]!==u&&jr(n,p,u)}else for(var m in r)r.hasOwnProperty(m)&&jr(n,m,r[m])}function Yo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var QT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),KT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hf(n){return KT.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Ca(){}var Qd=null;function Kd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var qo=null,Zo=null;function fv(n){var r=_i(n);if(r&&(n=r.stateNode)){var o=n[Se]||null;t:switch(n=r.stateNode,r.type){case"input":if(wi(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ve(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=u[Se]||null;if(!p)throw Error(i(90));wi(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&jn(u)}break t;case"textarea":tn(n,o.value,o.defaultValue);break t;case"select":r=o.value,r!=null&&ar(n,!!o.multiple,r,!1)}}}var Jd=!1;function hv(n,r,o){if(Jd)return n(r,o);Jd=!0;try{var u=n(r);return u}finally{if(Jd=!1,(qo!==null||Zo!==null)&&($f(),qo&&(r=qo,n=Zo,Zo=qo=null,fv(r),n)))for(r=0;r<n.length;r++)fv(n[r])}}function xu(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Se]||null;if(u===null)return null;o=u[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var Ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$d=!1;if(Ra)try{var Su={};Object.defineProperty(Su,"passive",{get:function(){$d=!0}}),window.addEventListener("test",Su,Su),window.removeEventListener("test",Su,Su)}catch{$d=!1}var ss=null,tp=null,df=null;function dv(){if(df)return df;var n,r=tp,o=r.length,u,p="value"in ss?ss.value:ss.textContent,m=p.length;for(n=0;n<o&&r[n]===p[n];n++);var b=o-n;for(u=1;u<=b&&r[o-u]===p[m-u];u++);return df=p.slice(n,1<u?1-u:void 0)}function pf(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function mf(){return!0}function pv(){return!1}function Gi(n){function r(o,u,p,m,b){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?mf:pv,this.isPropagationStopped=pv,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=mf)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=mf)},persist:function(){},isPersistent:mf}),r}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=Gi(Js),yu=v({},Js,{view:0,detail:0}),JT=Gi(yu),ep,np,Mu,gf=v({},yu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Mu&&(Mu&&n.type==="mousemove"?(ep=n.screenX-Mu.screenX,np=n.screenY-Mu.screenY):np=ep=0,Mu=n),ep)},movementY:function(n){return"movementY"in n?n.movementY:np}}),mv=Gi(gf),$T=v({},gf,{dataTransfer:0}),tb=Gi($T),eb=v({},yu,{relatedTarget:0}),ip=Gi(eb),nb=v({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),ib=Gi(nb),rb=v({},Js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ab=Gi(rb),sb=v({},Js,{data:0}),_v=Gi(sb),ob={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ub={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cb(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ub[n])?!!r[n]:!1}function rp(){return cb}var fb=v({},yu,{key:function(n){if(n.key){var r=ob[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=pf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lb[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rp,charCode:function(n){return n.type==="keypress"?pf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?pf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hb=Gi(fb),db=v({},gf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gv=Gi(db),pb=v({},yu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rp}),mb=Gi(pb),_b=v({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),gb=Gi(_b),vb=v({},gf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xb=Gi(vb),Sb=v({},Js,{newState:0,oldState:0}),yb=Gi(Sb),Mb=[9,13,27,32],ap=Ra&&"CompositionEvent"in window,Eu=null;Ra&&"documentMode"in document&&(Eu=document.documentMode);var Eb=Ra&&"TextEvent"in window&&!Eu,vv=Ra&&(!ap||Eu&&8<Eu&&11>=Eu),xv=" ",Sv=!1;function yv(n,r){switch(n){case"keyup":return Mb.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var jo=!1;function Tb(n,r){switch(n){case"compositionend":return Mv(r);case"keypress":return r.which!==32?null:(Sv=!0,xv);case"textInput":return n=r.data,n===xv&&Sv?null:n;default:return null}}function bb(n,r){if(jo)return n==="compositionend"||!ap&&yv(n,r)?(n=dv(),df=tp=ss=null,jo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return vv&&r.locale!=="ko"?null:r.data;default:return null}}var Ab={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ev(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Ab[n.type]:r==="textarea"}function Tv(n,r,o,u){qo?Zo?Zo.push(u):Zo=[u]:qo=u,r=sh(r,"onChange"),0<r.length&&(o=new _f("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Tu=null,bu=null;function Cb(n){sy(n,0)}function vf(n){var r=wr(n);if(jn(r))return n}function bv(n,r){if(n==="change")return r}var Av=!1;if(Ra){var sp;if(Ra){var op="oninput"in document;if(!op){var Cv=document.createElement("div");Cv.setAttribute("oninput","return;"),op=typeof Cv.oninput=="function"}sp=op}else sp=!1;Av=sp&&(!document.documentMode||9<document.documentMode)}function Rv(){Tu&&(Tu.detachEvent("onpropertychange",wv),bu=Tu=null)}function wv(n){if(n.propertyName==="value"&&vf(bu)){var r=[];Tv(r,bu,n,Kd(n)),hv(Cb,r)}}function Rb(n,r,o){n==="focusin"?(Rv(),Tu=r,bu=o,Tu.attachEvent("onpropertychange",wv)):n==="focusout"&&Rv()}function wb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vf(bu)}function Db(n,r){if(n==="click")return vf(r)}function Ub(n,r){if(n==="input"||n==="change")return vf(r)}function Lb(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var sr=typeof Object.is=="function"?Object.is:Lb;function Au(n,r){if(sr(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!Ye.call(r,p)||!sr(n[p],r[p]))return!1}return!0}function Dv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Uv(n,r){var o=Dv(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=Dv(o)}}function Lv(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Lv(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Nv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ne(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=ne(n.document)}return r}function lp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var Nb=Ra&&"documentMode"in document&&11>=document.documentMode,Qo=null,up=null,Cu=null,cp=!1;function Ov(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;cp||Qo==null||Qo!==ne(u)||(u=Qo,"selectionStart"in u&&lp(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Cu&&Au(Cu,u)||(Cu=u,u=sh(up,"onSelect"),0<u.length&&(r=new _f("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Qo)))}function $s(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ko={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionrun:$s("Transition","TransitionRun"),transitionstart:$s("Transition","TransitionStart"),transitioncancel:$s("Transition","TransitionCancel"),transitionend:$s("Transition","TransitionEnd")},fp={},Pv={};Ra&&(Pv=document.createElement("div").style,"AnimationEvent"in window||(delete Ko.animationend.animation,delete Ko.animationiteration.animation,delete Ko.animationstart.animation),"TransitionEvent"in window||delete Ko.transitionend.transition);function to(n){if(fp[n])return fp[n];if(!Ko[n])return n;var r=Ko[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Pv)return fp[n]=r[o];return n}var zv=to("animationend"),Fv=to("animationiteration"),Bv=to("animationstart"),Ob=to("transitionrun"),Pb=to("transitionstart"),zb=to("transitioncancel"),Iv=to("transitionend"),Hv=new Map,hp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hp.push("scrollEnd");function Qr(n,r){Hv.set(n,r),rt(r,[n])}var xf=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Dr=[],Jo=0,dp=0;function Sf(){for(var n=Jo,r=dp=Jo=0;r<n;){var o=Dr[r];Dr[r++]=null;var u=Dr[r];Dr[r++]=null;var p=Dr[r];Dr[r++]=null;var m=Dr[r];if(Dr[r++]=null,u!==null&&p!==null){var b=u.pending;b===null?p.next=p:(p.next=b.next,b.next=p),u.pending=p}m!==0&&Vv(o,p,m)}}function yf(n,r,o,u){Dr[Jo++]=n,Dr[Jo++]=r,Dr[Jo++]=o,Dr[Jo++]=u,dp|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function pp(n,r,o,u){return yf(n,r,o,u),Mf(n)}function eo(n,r){return yf(n,null,null,r),Mf(n)}function Vv(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var p=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(p=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,p&&r!==null&&(p=31-Ot(o),n=m.hiddenUpdates,u=n[p],u===null?n[p]=[r]:u.push(r),r.lane=o|536870912),m):null}function Mf(n){if(50<ju)throw ju=0,Em=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var $o={};function Fb(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function or(n,r,o,u){return new Fb(n,r,o,u)}function mp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wa(n,r){var o=n.alternate;return o===null?(o=or(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function Gv(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Ef(n,r,o,u,p,m){var b=0;if(u=n,typeof n=="function")mp(n)&&(b=1);else if(typeof n=="string")b=GA(n,o,Tt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case w:return n=or(31,o,r,p),n.elementType=w,n.lanes=m,n;case E:return no(o.children,p,m,r);case S:b=8,p|=24;break;case M:return n=or(12,o,r,p|2),n.elementType=M,n.lanes=m,n;case P:return n=or(13,o,r,p),n.elementType=P,n.lanes=m,n;case O:return n=or(19,o,r,p),n.elementType=O,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:b=10;break t;case A:b=9;break t;case C:b=11;break t;case L:b=14;break t;case T:b=16,u=null;break t}b=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return r=or(b,o,r,p),r.elementType=n,r.type=u,r.lanes=m,r}function no(n,r,o,u){return n=or(7,n,u,r),n.lanes=o,n}function _p(n,r,o){return n=or(6,n,null,r),n.lanes=o,n}function kv(n){var r=or(18,null,null,0);return r.stateNode=n,r}function gp(n,r,o){return r=or(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Xv=new WeakMap;function Ur(n,r){if(typeof n=="object"&&n!==null){var o=Xv.get(n);return o!==void 0?o:(r={value:n,source:r,stack:Y(r)},Xv.set(n,r),r)}return{value:n,source:r,stack:Y(r)}}var tl=[],el=0,Tf=null,Ru=0,Lr=[],Nr=0,os=null,sa=1,oa="";function Da(n,r){tl[el++]=Ru,tl[el++]=Tf,Tf=n,Ru=r}function Wv(n,r,o){Lr[Nr++]=sa,Lr[Nr++]=oa,Lr[Nr++]=os,os=n;var u=sa;n=oa;var p=32-Ot(u)-1;u&=~(1<<p),o+=1;var m=32-Ot(r)+p;if(30<m){var b=p-p%5;m=(u&(1<<b)-1).toString(32),u>>=b,p-=b,sa=1<<32-Ot(r)+p|o<<p|u,oa=m+n}else sa=1<<m|o<<p|u,oa=n}function vp(n){n.return!==null&&(Da(n,1),Wv(n,1,0))}function xp(n){for(;n===Tf;)Tf=tl[--el],tl[el]=null,Ru=tl[--el],tl[el]=null;for(;n===os;)os=Lr[--Nr],Lr[Nr]=null,oa=Lr[--Nr],Lr[Nr]=null,sa=Lr[--Nr],Lr[Nr]=null}function Yv(n,r){Lr[Nr++]=sa,Lr[Nr++]=oa,Lr[Nr++]=os,sa=r.id,oa=r.overflow,os=n}var li=null,xn=null,Xe=!1,ls=null,Or=!1,Sp=Error(i(519));function us(n){var r=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wu(Ur(r,n)),Sp}function qv(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[be]=n,r[Se]=u,o){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(o=0;o<Ku.length;o++)Fe(Ku[o],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":Fe("invalid",r),rr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Fe("invalid",r);break;case"textarea":Fe("invalid",r),Hn(r,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||cy(r.textContent,o)?(u.popover!=null&&(Fe("beforetoggle",r),Fe("toggle",r)),u.onScroll!=null&&Fe("scroll",r),u.onScrollEnd!=null&&Fe("scrollend",r),u.onClick!=null&&(r.onclick=Ca),r=!0):r=!1,r||us(n,!0)}function Zv(n){for(li=n.return;li;)switch(li.tag){case 5:case 31:case 13:Or=!1;return;case 27:case 3:Or=!0;return;default:li=li.return}}function nl(n){if(n!==li)return!1;if(!Xe)return Zv(n),Xe=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Bm(n.type,n.memoizedProps)),o=!o),o&&xn&&us(n),Zv(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));xn=xy(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));xn=xy(n)}else r===27?(r=xn,Es(n.type)?(n=km,km=null,xn=n):xn=r):xn=li?zr(n.stateNode.nextSibling):null;return!0}function io(){xn=li=null,Xe=!1}function yp(){var n=ls;return n!==null&&(Yi===null?Yi=n:Yi.push.apply(Yi,n),ls=null),n}function wu(n){ls===null?ls=[n]:ls.push(n)}var Mp=B(null),ro=null,Ua=null;function cs(n,r,o){vt(Mp,r._currentValue),r._currentValue=o}function La(n){n._currentValue=Mp.current,K(Mp)}function Ep(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Tp(n,r,o,u){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var m=p.dependencies;if(m!==null){var b=p.child;m=m.firstContext;t:for(;m!==null;){var N=m;m=p;for(var W=0;W<r.length;W++)if(N.context===r[W]){m.lanes|=o,N=m.alternate,N!==null&&(N.lanes|=o),Ep(m.return,o,n),u||(b=null);break t}m=N.next}}else if(p.tag===18){if(b=p.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),Ep(b,o,n),b=null}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===n){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}}function il(n,r,o,u){n=null;for(var p=r,m=!1;p!==null;){if(!m){if((p.flags&524288)!==0)m=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var b=p.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var N=p.type;sr(p.pendingProps.value,b.value)||(n!==null?n.push(N):n=[N])}}else if(p===mt.current){if(b=p.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(nc):n=[nc])}p=p.return}n!==null&&Tp(r,n,o,u),r.flags|=262144}function bf(n){for(n=n.firstContext;n!==null;){if(!sr(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ao(n){ro=n,Ua=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ui(n){return jv(ro,n)}function Af(n,r){return ro===null&&ao(n),jv(n,r)}function jv(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ua===null){if(n===null)throw Error(i(308));Ua=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Ua=Ua.next=r;return o}var Bb=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},Ib=s.unstable_scheduleCallback,Hb=s.unstable_NormalPriority,Gn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bp(){return{controller:new Bb,data:new Map,refCount:0}}function Du(n){n.refCount--,n.refCount===0&&Ib(Hb,function(){n.controller.abort()})}var Uu=null,Ap=0,rl=0,al=null;function Vb(n,r){if(Uu===null){var o=Uu=[];Ap=0,rl=wm(),al={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Ap++,r.then(Qv,Qv),r}function Qv(){if(--Ap===0&&Uu!==null){al!==null&&(al.status="fulfilled");var n=Uu;Uu=null,rl=0,al=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function Gb(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var p=0;p<o.length;p++)(0,o[p])(r)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var Kv=z.S;z.S=function(n,r){OS=R(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&Vb(n,r),Kv!==null&&Kv(n,r)};var so=B(null);function Cp(){var n=so.current;return n!==null?n:hn.pooledCache}function Cf(n,r){r===null?vt(so,so.current):vt(so,r.pool)}function Jv(){var n=Cp();return n===null?null:{parent:Gn._currentValue,pool:n}}var sl=Error(i(460)),Rp=Error(i(474)),Rf=Error(i(542)),wf={then:function(){}};function $v(n){return n=n.status,n==="fulfilled"||n==="rejected"}function tx(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Ca,Ca),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,nx(n),n;default:if(typeof r.status=="string")r.then(Ca,Ca);else{if(n=hn,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=u}},function(u){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,nx(n),n}throw lo=r,sl}}function oo(n){try{var r=n._init;return r(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(lo=o,sl):o}}var lo=null;function ex(){if(lo===null)throw Error(i(459));var n=lo;return lo=null,n}function nx(n){if(n===sl||n===Rf)throw Error(i(483))}var ol=null,Lu=0;function Df(n){var r=Lu;return Lu+=1,ol===null&&(ol=[]),tx(ol,n,r)}function Nu(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Uf(n,r){throw r.$$typeof===g?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function ix(n){function r(et,j){if(n){var at=et.deletions;at===null?(et.deletions=[j],et.flags|=16):at.push(j)}}function o(et,j){if(!n)return null;for(;j!==null;)r(et,j),j=j.sibling;return null}function u(et){for(var j=new Map;et!==null;)et.key!==null?j.set(et.key,et):j.set(et.index,et),et=et.sibling;return j}function p(et,j){return et=wa(et,j),et.index=0,et.sibling=null,et}function m(et,j,at){return et.index=at,n?(at=et.alternate,at!==null?(at=at.index,at<j?(et.flags|=67108866,j):at):(et.flags|=67108866,j)):(et.flags|=1048576,j)}function b(et){return n&&et.alternate===null&&(et.flags|=67108866),et}function N(et,j,at,St){return j===null||j.tag!==6?(j=_p(at,et.mode,St),j.return=et,j):(j=p(j,at),j.return=et,j)}function W(et,j,at,St){var ue=at.type;return ue===E?xt(et,j,at.props.children,St,at.key):j!==null&&(j.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&oo(ue)===j.type)?(j=p(j,at.props),Nu(j,at),j.return=et,j):(j=Ef(at.type,at.key,at.props,null,et.mode,St),Nu(j,at),j.return=et,j)}function ot(et,j,at,St){return j===null||j.tag!==4||j.stateNode.containerInfo!==at.containerInfo||j.stateNode.implementation!==at.implementation?(j=gp(at,et.mode,St),j.return=et,j):(j=p(j,at.children||[]),j.return=et,j)}function xt(et,j,at,St,ue){return j===null||j.tag!==7?(j=no(at,et.mode,St,ue),j.return=et,j):(j=p(j,at),j.return=et,j)}function yt(et,j,at){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=_p(""+j,et.mode,at),j.return=et,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return at=Ef(j.type,j.key,j.props,null,et.mode,at),Nu(at,j),at.return=et,at;case y:return j=gp(j,et.mode,at),j.return=et,j;case T:return j=oo(j),yt(et,j,at)}if(Q(j)||G(j))return j=no(j,et.mode,at,null),j.return=et,j;if(typeof j.then=="function")return yt(et,Df(j),at);if(j.$$typeof===D)return yt(et,Af(et,j),at);Uf(et,j)}return null}function ft(et,j,at,St){var ue=j!==null?j.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return ue!==null?null:N(et,j,""+at,St);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case x:return at.key===ue?W(et,j,at,St):null;case y:return at.key===ue?ot(et,j,at,St):null;case T:return at=oo(at),ft(et,j,at,St)}if(Q(at)||G(at))return ue!==null?null:xt(et,j,at,St,null);if(typeof at.then=="function")return ft(et,j,Df(at),St);if(at.$$typeof===D)return ft(et,j,Af(et,at),St);Uf(et,at)}return null}function dt(et,j,at,St,ue){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return et=et.get(at)||null,N(j,et,""+St,ue);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case x:return et=et.get(St.key===null?at:St.key)||null,W(j,et,St,ue);case y:return et=et.get(St.key===null?at:St.key)||null,ot(j,et,St,ue);case T:return St=oo(St),dt(et,j,at,St,ue)}if(Q(St)||G(St))return et=et.get(at)||null,xt(j,et,St,ue,null);if(typeof St.then=="function")return dt(et,j,at,Df(St),ue);if(St.$$typeof===D)return dt(et,j,at,Af(j,St),ue);Uf(j,St)}return null}function $t(et,j,at,St){for(var ue=null,je=null,re=j,Re=j=0,Ge=null;re!==null&&Re<at.length;Re++){re.index>Re?(Ge=re,re=null):Ge=re.sibling;var Qe=ft(et,re,at[Re],St);if(Qe===null){re===null&&(re=Ge);break}n&&re&&Qe.alternate===null&&r(et,re),j=m(Qe,j,Re),je===null?ue=Qe:je.sibling=Qe,je=Qe,re=Ge}if(Re===at.length)return o(et,re),Xe&&Da(et,Re),ue;if(re===null){for(;Re<at.length;Re++)re=yt(et,at[Re],St),re!==null&&(j=m(re,j,Re),je===null?ue=re:je.sibling=re,je=re);return Xe&&Da(et,Re),ue}for(re=u(re);Re<at.length;Re++)Ge=dt(re,et,Re,at[Re],St),Ge!==null&&(n&&Ge.alternate!==null&&re.delete(Ge.key===null?Re:Ge.key),j=m(Ge,j,Re),je===null?ue=Ge:je.sibling=Ge,je=Ge);return n&&re.forEach(function(Rs){return r(et,Rs)}),Xe&&Da(et,Re),ue}function fe(et,j,at,St){if(at==null)throw Error(i(151));for(var ue=null,je=null,re=j,Re=j=0,Ge=null,Qe=at.next();re!==null&&!Qe.done;Re++,Qe=at.next()){re.index>Re?(Ge=re,re=null):Ge=re.sibling;var Rs=ft(et,re,Qe.value,St);if(Rs===null){re===null&&(re=Ge);break}n&&re&&Rs.alternate===null&&r(et,re),j=m(Rs,j,Re),je===null?ue=Rs:je.sibling=Rs,je=Rs,re=Ge}if(Qe.done)return o(et,re),Xe&&Da(et,Re),ue;if(re===null){for(;!Qe.done;Re++,Qe=at.next())Qe=yt(et,Qe.value,St),Qe!==null&&(j=m(Qe,j,Re),je===null?ue=Qe:je.sibling=Qe,je=Qe);return Xe&&Da(et,Re),ue}for(re=u(re);!Qe.done;Re++,Qe=at.next())Qe=dt(re,et,Re,Qe.value,St),Qe!==null&&(n&&Qe.alternate!==null&&re.delete(Qe.key===null?Re:Qe.key),j=m(Qe,j,Re),je===null?ue=Qe:je.sibling=Qe,je=Qe);return n&&re.forEach(function($A){return r(et,$A)}),Xe&&Da(et,Re),ue}function fn(et,j,at,St){if(typeof at=="object"&&at!==null&&at.type===E&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case x:t:{for(var ue=at.key;j!==null;){if(j.key===ue){if(ue=at.type,ue===E){if(j.tag===7){o(et,j.sibling),St=p(j,at.props.children),St.return=et,et=St;break t}}else if(j.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&oo(ue)===j.type){o(et,j.sibling),St=p(j,at.props),Nu(St,at),St.return=et,et=St;break t}o(et,j);break}else r(et,j);j=j.sibling}at.type===E?(St=no(at.props.children,et.mode,St,at.key),St.return=et,et=St):(St=Ef(at.type,at.key,at.props,null,et.mode,St),Nu(St,at),St.return=et,et=St)}return b(et);case y:t:{for(ue=at.key;j!==null;){if(j.key===ue)if(j.tag===4&&j.stateNode.containerInfo===at.containerInfo&&j.stateNode.implementation===at.implementation){o(et,j.sibling),St=p(j,at.children||[]),St.return=et,et=St;break t}else{o(et,j);break}else r(et,j);j=j.sibling}St=gp(at,et.mode,St),St.return=et,et=St}return b(et);case T:return at=oo(at),fn(et,j,at,St)}if(Q(at))return $t(et,j,at,St);if(G(at)){if(ue=G(at),typeof ue!="function")throw Error(i(150));return at=ue.call(at),fe(et,j,at,St)}if(typeof at.then=="function")return fn(et,j,Df(at),St);if(at.$$typeof===D)return fn(et,j,Af(et,at),St);Uf(et,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,j!==null&&j.tag===6?(o(et,j.sibling),St=p(j,at),St.return=et,et=St):(o(et,j),St=_p(at,et.mode,St),St.return=et,et=St),b(et)):o(et,j)}return function(et,j,at,St){try{Lu=0;var ue=fn(et,j,at,St);return ol=null,ue}catch(re){if(re===sl||re===Rf)throw re;var je=or(29,re,null,et.mode);return je.lanes=St,je.return=et,je}}}var uo=ix(!0),rx=ix(!1),fs=!1;function wp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function hs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ds(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Je&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,r=Mf(n),Vv(n,null,o),r}return yf(n,u,r,o),Mf(n)}function Ou(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,he(n,o)}}function Up(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?p=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?p=m=r:m=m.next=r}else p=m=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var Lp=!1;function Pu(){if(Lp){var n=al;if(n!==null)throw n}}function zu(n,r,o,u){Lp=!1;var p=n.updateQueue;fs=!1;var m=p.firstBaseUpdate,b=p.lastBaseUpdate,N=p.shared.pending;if(N!==null){p.shared.pending=null;var W=N,ot=W.next;W.next=null,b===null?m=ot:b.next=ot,b=W;var xt=n.alternate;xt!==null&&(xt=xt.updateQueue,N=xt.lastBaseUpdate,N!==b&&(N===null?xt.firstBaseUpdate=ot:N.next=ot,xt.lastBaseUpdate=W))}if(m!==null){var yt=p.baseState;b=0,xt=ot=W=null,N=m;do{var ft=N.lane&-536870913,dt=ft!==N.lane;if(dt?(Ve&ft)===ft:(u&ft)===ft){ft!==0&&ft===rl&&(Lp=!0),xt!==null&&(xt=xt.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var $t=n,fe=N;ft=r;var fn=o;switch(fe.tag){case 1:if($t=fe.payload,typeof $t=="function"){yt=$t.call(fn,yt,ft);break t}yt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=fe.payload,ft=typeof $t=="function"?$t.call(fn,yt,ft):$t,ft==null)break t;yt=v({},yt,ft);break t;case 2:fs=!0}}ft=N.callback,ft!==null&&(n.flags|=64,dt&&(n.flags|=8192),dt=p.callbacks,dt===null?p.callbacks=[ft]:dt.push(ft))}else dt={lane:ft,tag:N.tag,payload:N.payload,callback:N.callback,next:null},xt===null?(ot=xt=dt,W=yt):xt=xt.next=dt,b|=ft;if(N=N.next,N===null){if(N=p.shared.pending,N===null)break;dt=N,N=dt.next,dt.next=null,p.lastBaseUpdate=dt,p.shared.pending=null}}while(!0);xt===null&&(W=yt),p.baseState=W,p.firstBaseUpdate=ot,p.lastBaseUpdate=xt,m===null&&(p.shared.lanes=0),vs|=b,n.lanes=b,n.memoizedState=yt}}function ax(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function sx(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)ax(o[n],r)}var ll=B(null),Lf=B(0);function ox(n,r){n=Va,vt(Lf,n),vt(ll,r),Va=n|r.baseLanes}function Np(){vt(Lf,Va),vt(ll,ll.current)}function Op(){Va=Lf.current,K(ll),K(Lf)}var lr=B(null),Pr=null;function ps(n){var r=n.alternate;vt(On,On.current&1),vt(lr,n),Pr===null&&(r===null||ll.current!==null||r.memoizedState!==null)&&(Pr=n)}function Pp(n){vt(On,On.current),vt(lr,n),Pr===null&&(Pr=n)}function lx(n){n.tag===22?(vt(On,On.current),vt(lr,n),Pr===null&&(Pr=n)):ms()}function ms(){vt(On,On.current),vt(lr,lr.current)}function ur(n){K(lr),Pr===n&&(Pr=null),K(On)}var On=B(0);function Nf(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Vm(o)||Gm(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Na=0,Ae=null,un=null,kn=null,Of=!1,ul=!1,co=!1,Pf=0,Fu=0,cl=null,kb=0;function Dn(){throw Error(i(321))}function zp(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!sr(n[o],r[o]))return!1;return!0}function Fp(n,r,o,u,p,m){return Na=m,Ae=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,z.H=n===null||n.memoizedState===null?Wx:Jp,co=!1,m=o(u,p),co=!1,ul&&(m=cx(r,o,u,p)),ux(n),m}function ux(n){z.H=Hu;var r=un!==null&&un.next!==null;if(Na=0,kn=un=Ae=null,Of=!1,Fu=0,cl=null,r)throw Error(i(300));n===null||Xn||(n=n.dependencies,n!==null&&bf(n)&&(Xn=!0))}function cx(n,r,o,u){Ae=n;var p=0;do{if(ul&&(cl=null),Fu=0,ul=!1,25<=p)throw Error(i(301));if(p+=1,kn=un=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=Yx,m=r(o,u)}while(ul);return m}function Xb(){var n=z.H,r=n.useState()[0];return r=typeof r.then=="function"?Bu(r):r,n=n.useState()[0],(un!==null?un.memoizedState:null)!==n&&(Ae.flags|=1024),r}function Bp(){var n=Pf!==0;return Pf=0,n}function Ip(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function Hp(n){if(Of){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Of=!1}Na=0,kn=un=Ae=null,ul=!1,Fu=Pf=0,cl=null}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?Ae.memoizedState=kn=n:kn=kn.next=n,kn}function Pn(){if(un===null){var n=Ae.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var r=kn===null?Ae.memoizedState:kn.next;if(r!==null)kn=r,un=n;else{if(n===null)throw Ae.alternate===null?Error(i(467)):Error(i(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},kn===null?Ae.memoizedState=kn=n:kn=kn.next=n}return kn}function zf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bu(n){var r=Fu;return Fu+=1,cl===null&&(cl=[]),n=tx(cl,n,r),r=Ae,(kn===null?r.memoizedState:kn.next)===null&&(r=r.alternate,z.H=r===null||r.memoizedState===null?Wx:Jp),n}function Ff(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Bu(n);if(n.$$typeof===D)return ui(n)}throw Error(i(438,String(n)))}function Vp(n){var r=null,o=Ae.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ae.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=zf(),Ae.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=k;return r.index++,o}function Oa(n,r){return typeof r=="function"?r(n):r}function Bf(n){var r=Pn();return Gp(r,un,n)}function Gp(n,r,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var p=n.baseQueue,m=u.pending;if(m!==null){if(p!==null){var b=p.next;p.next=m.next,m.next=b}r.baseQueue=p=m,u.pending=null}if(m=n.baseState,p===null)n.memoizedState=m;else{r=p.next;var N=b=null,W=null,ot=r,xt=!1;do{var yt=ot.lane&-536870913;if(yt!==ot.lane?(Ve&yt)===yt:(Na&yt)===yt){var ft=ot.revertLane;if(ft===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),yt===rl&&(xt=!0);else if((Na&ft)===ft){ot=ot.next,ft===rl&&(xt=!0);continue}else yt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},W===null?(N=W=yt,b=m):W=W.next=yt,Ae.lanes|=ft,vs|=ft;yt=ot.action,co&&o(m,yt),m=ot.hasEagerState?ot.eagerState:o(m,yt)}else ft={lane:yt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},W===null?(N=W=ft,b=m):W=W.next=ft,Ae.lanes|=yt,vs|=yt;ot=ot.next}while(ot!==null&&ot!==r);if(W===null?b=m:W.next=N,!sr(m,n.memoizedState)&&(Xn=!0,xt&&(o=al,o!==null)))throw o;n.memoizedState=m,n.baseState=b,n.baseQueue=W,u.lastRenderedState=m}return p===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function kp(n){var r=Pn(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,m=r.memoizedState;if(p!==null){o.pending=null;var b=p=p.next;do m=n(m,b.action),b=b.next;while(b!==p);sr(m,r.memoizedState)||(Xn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function fx(n,r,o){var u=Ae,p=Pn(),m=Xe;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=r();var b=!sr((un||p).memoizedState,o);if(b&&(p.memoizedState=o,Xn=!0),p=p.queue,Yp(px.bind(null,u,p,n),[n]),p.getSnapshot!==r||b||kn!==null&&kn.memoizedState.tag&1){if(u.flags|=2048,fl(9,{destroy:void 0},dx.bind(null,u,p,o,r),null),hn===null)throw Error(i(349));m||(Na&127)!==0||hx(u,r,o)}return o}function hx(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ae.updateQueue,r===null?(r=zf(),Ae.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function dx(n,r,o,u){r.value=o,r.getSnapshot=u,mx(r)&&_x(n)}function px(n,r,o){return o(function(){mx(r)&&_x(n)})}function mx(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!sr(n,o)}catch{return!0}}function _x(n){var r=eo(n,2);r!==null&&qi(r,n,2)}function Xp(n){var r=Ui();if(typeof n=="function"){var o=n;if(n=o(),co){It(!0);try{o()}finally{It(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:n},r}function gx(n,r,o,u){return n.baseState=o,Gp(n,un,typeof u=="function"?u:Oa)}function Wb(n,r,o,u,p){if(Vf(n))throw Error(i(485));if(n=r.action,n!==null){var m={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};z.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,vx(r,m)):(m.next=o.next,r.pending=o.next=m)}}function vx(n,r){var o=r.action,u=r.payload,p=n.state;if(r.isTransition){var m=z.T,b={};z.T=b;try{var N=o(p,u),W=z.S;W!==null&&W(b,N),xx(n,r,N)}catch(ot){Wp(n,r,ot)}finally{m!==null&&b.types!==null&&(m.types=b.types),z.T=m}}else try{m=o(p,u),xx(n,r,m)}catch(ot){Wp(n,r,ot)}}function xx(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Sx(n,r,u)},function(u){return Wp(n,r,u)}):Sx(n,r,o)}function Sx(n,r,o){r.status="fulfilled",r.value=o,yx(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,vx(n,o)))}function Wp(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,yx(r),r=r.next;while(r!==u)}n.action=null}function yx(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Mx(n,r){return r}function Ex(n,r){if(Xe){var o=hn.formState;if(o!==null){t:{var u=Ae;if(Xe){if(xn){e:{for(var p=xn,m=Or;p.nodeType!==8;){if(!m){p=null;break e}if(p=zr(p.nextSibling),p===null){p=null;break e}}m=p.data,p=m==="F!"||m==="F"?p:null}if(p){xn=zr(p.nextSibling),u=p.data==="F!";break t}}us(u)}u=!1}u&&(r=o[0])}}return o=Ui(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mx,lastRenderedState:r},o.queue=u,o=Gx.bind(null,Ae,u),u.dispatch=o,u=Xp(!1),m=Kp.bind(null,Ae,!1,u.queue),u=Ui(),p={state:r,dispatch:null,action:n,pending:null},u.queue=p,o=Wb.bind(null,Ae,p,m,o),p.dispatch=o,u.memoizedState=n,[r,o,!1]}function Tx(n){var r=Pn();return bx(r,un,n)}function bx(n,r,o){if(r=Gp(n,r,Mx)[0],n=Bf(Oa)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Bu(r)}catch(b){throw b===sl?Rf:b}else u=r;r=Pn();var p=r.queue,m=p.dispatch;return o!==r.memoizedState&&(Ae.flags|=2048,fl(9,{destroy:void 0},Yb.bind(null,p,o),null)),[u,m,n]}function Yb(n,r){n.action=r}function Ax(n){var r=Pn(),o=un;if(o!==null)return bx(r,o,n);Pn(),r=r.memoizedState,o=Pn();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function fl(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=Ae.updateQueue,r===null&&(r=zf(),Ae.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function Cx(){return Pn().memoizedState}function If(n,r,o,u){var p=Ui();Ae.flags|=n,p.memoizedState=fl(1|r,{destroy:void 0},o,u===void 0?null:u)}function Hf(n,r,o,u){var p=Pn();u=u===void 0?null:u;var m=p.memoizedState.inst;un!==null&&u!==null&&zp(u,un.memoizedState.deps)?p.memoizedState=fl(r,m,o,u):(Ae.flags|=n,p.memoizedState=fl(1|r,m,o,u))}function Rx(n,r){If(8390656,8,n,r)}function Yp(n,r){Hf(2048,8,n,r)}function qb(n){Ae.flags|=4;var r=Ae.updateQueue;if(r===null)r=zf(),Ae.updateQueue=r,r.events=[n];else{var o=r.events;o===null?r.events=[n]:o.push(n)}}function wx(n){var r=Pn().memoizedState;return qb({ref:r,nextImpl:n}),function(){if((Je&2)!==0)throw Error(i(440));return r.impl.apply(void 0,arguments)}}function Dx(n,r){return Hf(4,2,n,r)}function Ux(n,r){return Hf(4,4,n,r)}function Lx(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Nx(n,r,o){o=o!=null?o.concat([n]):null,Hf(4,4,Lx.bind(null,r,n),o)}function qp(){}function Ox(n,r){var o=Pn();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&zp(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Px(n,r){var o=Pn();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&zp(r,u[1]))return u[0];if(u=n(),co){It(!0);try{n()}finally{It(!1)}}return o.memoizedState=[u,r],u}function Zp(n,r,o){return o===void 0||(Na&1073741824)!==0&&(Ve&261930)===0?n.memoizedState=r:(n.memoizedState=o,n=zS(),Ae.lanes|=n,vs|=n,o)}function zx(n,r,o,u){return sr(o,r)?o:ll.current!==null?(n=Zp(n,o,u),sr(n,r)||(Xn=!0),n):(Na&42)===0||(Na&1073741824)!==0&&(Ve&261930)===0?(Xn=!0,n.memoizedState=o):(n=zS(),Ae.lanes|=n,vs|=n,r)}function Fx(n,r,o,u,p){var m=F.p;F.p=m!==0&&8>m?m:8;var b=z.T,N={};z.T=N,Kp(n,!1,r,o);try{var W=p(),ot=z.S;if(ot!==null&&ot(N,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var xt=Gb(W,u);Iu(n,r,xt,hr(n))}else Iu(n,r,u,hr(n))}catch(yt){Iu(n,r,{then:function(){},status:"rejected",reason:yt},hr())}finally{F.p=m,b!==null&&N.types!==null&&(b.types=N.types),z.T=b}}function Zb(){}function jp(n,r,o,u){if(n.tag!==5)throw Error(i(476));var p=Bx(n).queue;Fx(n,p,r,tt,o===null?Zb:function(){return Ix(n),o(u)})}function Bx(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:tt},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Ix(n){var r=Bx(n);r.next===null&&(r=n.alternate.memoizedState),Iu(n,r.next.queue,{},hr())}function Qp(){return ui(nc)}function Hx(){return Pn().memoizedState}function Vx(){return Pn().memoizedState}function jb(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=hr();n=hs(o);var u=ds(r,n,o);u!==null&&(qi(u,r,o),Ou(u,r,o)),r={cache:bp()},n.payload=r;return}r=r.return}}function Qb(n,r,o){var u=hr();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vf(n)?kx(r,o):(o=pp(n,r,o,u),o!==null&&(qi(o,n,u),Xx(o,r,u)))}function Gx(n,r,o){var u=hr();Iu(n,r,o,u)}function Iu(n,r,o,u){var p={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vf(n))kx(r,p);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var b=r.lastRenderedState,N=m(b,o);if(p.hasEagerState=!0,p.eagerState=N,sr(N,b))return yf(n,r,p,0),hn===null&&Sf(),!1}catch{}if(o=pp(n,r,p,u),o!==null)return qi(o,n,u),Xx(o,r,u),!0}return!1}function Kp(n,r,o,u){if(u={lane:2,revertLane:wm(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Vf(n)){if(r)throw Error(i(479))}else r=pp(n,o,u,2),r!==null&&qi(r,n,2)}function Vf(n){var r=n.alternate;return n===Ae||r!==null&&r===Ae}function kx(n,r){ul=Of=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Xx(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,he(n,o)}}var Hu={readContext:ui,use:Ff,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useLayoutEffect:Dn,useInsertionEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useSyncExternalStore:Dn,useId:Dn,useHostTransitionStatus:Dn,useFormState:Dn,useActionState:Dn,useOptimistic:Dn,useMemoCache:Dn,useCacheRefresh:Dn};Hu.useEffectEvent=Dn;var Wx={readContext:ui,use:Ff,useCallback:function(n,r){return Ui().memoizedState=[n,r===void 0?null:r],n},useContext:ui,useEffect:Rx,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,If(4194308,4,Lx.bind(null,r,n),o)},useLayoutEffect:function(n,r){return If(4194308,4,n,r)},useInsertionEffect:function(n,r){If(4,2,n,r)},useMemo:function(n,r){var o=Ui();r=r===void 0?null:r;var u=n();if(co){It(!0);try{n()}finally{It(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=Ui();if(o!==void 0){var p=o(r);if(co){It(!0);try{o(r)}finally{It(!1)}}}else p=r;return u.memoizedState=u.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},u.queue=n,n=n.dispatch=Qb.bind(null,Ae,n),[u.memoizedState,n]},useRef:function(n){var r=Ui();return n={current:n},r.memoizedState=n},useState:function(n){n=Xp(n);var r=n.queue,o=Gx.bind(null,Ae,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:qp,useDeferredValue:function(n,r){var o=Ui();return Zp(o,n,r)},useTransition:function(){var n=Xp(!1);return n=Fx.bind(null,Ae,n.queue,!0,!1),Ui().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Ae,p=Ui();if(Xe){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),hn===null)throw Error(i(349));(Ve&127)!==0||hx(u,r,o)}p.memoizedState=o;var m={value:o,getSnapshot:r};return p.queue=m,Rx(px.bind(null,u,m,n),[n]),u.flags|=2048,fl(9,{destroy:void 0},dx.bind(null,u,m,o,r),null),o},useId:function(){var n=Ui(),r=hn.identifierPrefix;if(Xe){var o=oa,u=sa;o=(u&~(1<<32-Ot(u)-1)).toString(32)+o,r="_"+r+"R_"+o,o=Pf++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=kb++,r="_"+r+"r_"+o.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:Qp,useFormState:Ex,useActionState:Ex,useOptimistic:function(n){var r=Ui();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Kp.bind(null,Ae,!0,o),o.dispatch=r,[n,r]},useMemoCache:Vp,useCacheRefresh:function(){return Ui().memoizedState=jb.bind(null,Ae)},useEffectEvent:function(n){var r=Ui(),o={impl:n};return r.memoizedState=o,function(){if((Je&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},Jp={readContext:ui,use:Ff,useCallback:Ox,useContext:ui,useEffect:Yp,useImperativeHandle:Nx,useInsertionEffect:Dx,useLayoutEffect:Ux,useMemo:Px,useReducer:Bf,useRef:Cx,useState:function(){return Bf(Oa)},useDebugValue:qp,useDeferredValue:function(n,r){var o=Pn();return zx(o,un.memoizedState,n,r)},useTransition:function(){var n=Bf(Oa)[0],r=Pn().memoizedState;return[typeof n=="boolean"?n:Bu(n),r]},useSyncExternalStore:fx,useId:Hx,useHostTransitionStatus:Qp,useFormState:Tx,useActionState:Tx,useOptimistic:function(n,r){var o=Pn();return gx(o,un,n,r)},useMemoCache:Vp,useCacheRefresh:Vx};Jp.useEffectEvent=wx;var Yx={readContext:ui,use:Ff,useCallback:Ox,useContext:ui,useEffect:Yp,useImperativeHandle:Nx,useInsertionEffect:Dx,useLayoutEffect:Ux,useMemo:Px,useReducer:kp,useRef:Cx,useState:function(){return kp(Oa)},useDebugValue:qp,useDeferredValue:function(n,r){var o=Pn();return un===null?Zp(o,n,r):zx(o,un.memoizedState,n,r)},useTransition:function(){var n=kp(Oa)[0],r=Pn().memoizedState;return[typeof n=="boolean"?n:Bu(n),r]},useSyncExternalStore:fx,useId:Hx,useHostTransitionStatus:Qp,useFormState:Ax,useActionState:Ax,useOptimistic:function(n,r){var o=Pn();return un!==null?gx(o,un,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Vp,useCacheRefresh:Vx};Yx.useEffectEvent=wx;function $p(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var tm={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=hr(),p=hs(u);p.payload=r,o!=null&&(p.callback=o),r=ds(n,p,u),r!==null&&(qi(r,n,u),Ou(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=hr(),p=hs(u);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=ds(n,p,u),r!==null&&(qi(r,n,u),Ou(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=hr(),u=hs(o);u.tag=2,r!=null&&(u.callback=r),r=ds(n,u,o),r!==null&&(qi(r,n,o),Ou(r,n,o))}};function qx(n,r,o,u,p,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,b):r.prototype&&r.prototype.isPureReactComponent?!Au(o,u)||!Au(p,m):!0}function Zx(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&tm.enqueueReplaceState(r,r.state,null)}function fo(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=v({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}function jx(n){xf(n)}function Qx(n){console.error(n)}function Kx(n){xf(n)}function Gf(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function Jx(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function em(n,r,o){return o=hs(o),o.tag=3,o.payload={element:null},o.callback=function(){Gf(n,r)},o}function $x(n){return n=hs(n),n.tag=3,n}function tS(n,r,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var m=u.value;n.payload=function(){return p(m)},n.callback=function(){Jx(r,o,u)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){Jx(r,o,u),typeof p!="function"&&(xs===null?xs=new Set([this]):xs.add(this));var N=u.stack;this.componentDidCatch(u.value,{componentStack:N!==null?N:""})})}function Kb(n,r,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&il(r,o,p,!0),o=lr.current,o!==null){switch(o.tag){case 31:case 13:return Pr===null?th():o.alternate===null&&Un===0&&(Un=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===wf?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Am(n,u,p)),!1;case 22:return o.flags|=65536,u===wf?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Am(n,u,p)),!1}throw Error(i(435,o.tag))}return Am(n,u,p),th(),!1}if(Xe)return r=lr.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,u!==Sp&&(n=Error(i(422),{cause:u}),wu(Ur(n,o)))):(u!==Sp&&(r=Error(i(423),{cause:u}),wu(Ur(r,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,u=Ur(u,o),p=em(n.stateNode,u,p),Up(n,p),Un!==4&&(Un=2)),!1;var m=Error(i(520),{cause:u});if(m=Ur(m,o),Zu===null?Zu=[m]:Zu.push(m),Un!==4&&(Un=2),r===null)return!0;u=Ur(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=em(o.stateNode,u,n),Up(o,n),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xs===null||!xs.has(m))))return o.flags|=65536,p&=-p,o.lanes|=p,p=$x(p),tS(p,n,o,u),Up(o,p),!1}o=o.return}while(o!==null);return!1}var nm=Error(i(461)),Xn=!1;function ci(n,r,o,u){r.child=n===null?rx(r,null,o,u):uo(r,n.child,o,u)}function eS(n,r,o,u,p){o=o.render;var m=r.ref;if("ref"in u){var b={};for(var N in u)N!=="ref"&&(b[N]=u[N])}else b=u;return ao(r),u=Fp(n,r,o,b,m,p),N=Bp(),n!==null&&!Xn?(Ip(n,r,p),Pa(n,r,p)):(Xe&&N&&vp(r),r.flags|=1,ci(n,r,u,p),r.child)}function nS(n,r,o,u,p){if(n===null){var m=o.type;return typeof m=="function"&&!mp(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,iS(n,r,m,u,p)):(n=Ef(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!cm(n,p)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:Au,o(b,u)&&n.ref===r.ref)return Pa(n,r,p)}return r.flags|=1,n=wa(m,u),n.ref=r.ref,n.return=r,r.child=n}function iS(n,r,o,u,p){if(n!==null){var m=n.memoizedProps;if(Au(m,u)&&n.ref===r.ref)if(Xn=!1,r.pendingProps=u=m,cm(n,p))(n.flags&131072)!==0&&(Xn=!0);else return r.lanes=n.lanes,Pa(n,r,p)}return im(n,r,o,u,p)}function rS(n,r,o,u){var p=u.children,m=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((r.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,n!==null){for(u=r.child=n.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;u=p&~m}else u=0,r.child=null;return aS(n,r,m,o,u)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Cf(r,m!==null?m.cachePool:null),m!==null?ox(r,m):Np(),lx(r);else return u=r.lanes=536870912,aS(n,r,m!==null?m.baseLanes|o:o,o,u)}else m!==null?(Cf(r,m.cachePool),ox(r,m),ms(),r.memoizedState=null):(n!==null&&Cf(r,null),Np(),ms());return ci(n,r,p,o),r.child}function Vu(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function aS(n,r,o,u,p){var m=Cp();return m=m===null?null:{parent:Gn._currentValue,pool:m},r.memoizedState={baseLanes:o,cachePool:m},n!==null&&Cf(r,null),Np(),lx(r),n!==null&&il(n,r,u,!0),r.childLanes=p,null}function kf(n,r){return r=Wf({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function sS(n,r,o){return uo(r,n.child,null,o),n=kf(r,r.pendingProps),n.flags|=2,ur(r),r.memoizedState=null,n}function Jb(n,r,o){var u=r.pendingProps,p=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(Xe){if(u.mode==="hidden")return n=kf(r,u),r.lanes=536870912,Vu(null,n);if(Pp(r),(n=xn)?(n=vy(n,Or),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:os!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=kv(n),o.return=r,r.child=o,li=r,xn=null)):n=null,n===null)throw us(r);return r.lanes=536870912,null}return kf(r,u)}var m=n.memoizedState;if(m!==null){var b=m.dehydrated;if(Pp(r),p)if(r.flags&256)r.flags&=-257,r=sS(n,r,o);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(i(558));else if(Xn||il(n,r,o,!1),p=(o&n.childLanes)!==0,Xn||p){if(u=hn,u!==null&&(b=oe(u,o),b!==0&&b!==m.retryLane))throw m.retryLane=b,eo(n,b),qi(u,n,b),nm;th(),r=sS(n,r,o)}else n=m.treeContext,xn=zr(b.nextSibling),li=r,Xe=!0,ls=null,Or=!1,n!==null&&Yv(r,n),r=kf(r,u),r.flags|=4096;return r}return n=wa(n.child,{mode:u.mode,children:u.children}),n.ref=r.ref,r.child=n,n.return=r,n}function Xf(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function im(n,r,o,u,p){return ao(r),o=Fp(n,r,o,u,void 0,p),u=Bp(),n!==null&&!Xn?(Ip(n,r,p),Pa(n,r,p)):(Xe&&u&&vp(r),r.flags|=1,ci(n,r,o,p),r.child)}function oS(n,r,o,u,p,m){return ao(r),r.updateQueue=null,o=cx(r,u,o,p),ux(n),u=Bp(),n!==null&&!Xn?(Ip(n,r,m),Pa(n,r,m)):(Xe&&u&&vp(r),r.flags|=1,ci(n,r,o,m),r.child)}function lS(n,r,o,u,p){if(ao(r),r.stateNode===null){var m=$o,b=o.contextType;typeof b=="object"&&b!==null&&(m=ui(b)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=tm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},wp(r),b=o.contextType,m.context=typeof b=="object"&&b!==null?ui(b):$o,m.state=r.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&($p(r,o,b,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&tm.enqueueReplaceState(m,m.state,null),zu(r,u,m,p),Pu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){m=r.stateNode;var N=r.memoizedProps,W=fo(o,N);m.props=W;var ot=m.context,xt=o.contextType;b=$o,typeof xt=="object"&&xt!==null&&(b=ui(xt));var yt=o.getDerivedStateFromProps;xt=typeof yt=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=r.pendingProps!==N,xt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||ot!==b)&&Zx(r,m,u,b),fs=!1;var ft=r.memoizedState;m.state=ft,zu(r,u,m,p),Pu(),ot=r.memoizedState,N||ft!==ot||fs?(typeof yt=="function"&&($p(r,o,yt,u),ot=r.memoizedState),(W=fs||qx(r,o,W,u,ft,ot,b))?(xt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=ot),m.props=u,m.state=ot,m.context=b,u=W):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Dp(n,r),b=r.memoizedProps,xt=fo(o,b),m.props=xt,yt=r.pendingProps,ft=m.context,ot=o.contextType,W=$o,typeof ot=="object"&&ot!==null&&(W=ui(ot)),N=o.getDerivedStateFromProps,(ot=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==yt||ft!==W)&&Zx(r,m,u,W),fs=!1,ft=r.memoizedState,m.state=ft,zu(r,u,m,p),Pu();var dt=r.memoizedState;b!==yt||ft!==dt||fs||n!==null&&n.dependencies!==null&&bf(n.dependencies)?(typeof N=="function"&&($p(r,o,N,u),dt=r.memoizedState),(xt=fs||qx(r,o,xt,u,ft,dt,W)||n!==null&&n.dependencies!==null&&bf(n.dependencies))?(ot||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,dt,W),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,dt,W)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&ft===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&ft===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=dt),m.props=u,m.state=dt,m.context=W,u=xt):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&ft===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&ft===n.memoizedState||(r.flags|=1024),u=!1)}return m=u,Xf(n,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&u?(r.child=uo(r,n.child,null,p),r.child=uo(r,null,o,p)):ci(n,r,o,p),r.memoizedState=m.state,n=r.child):n=Pa(n,r,p),n}function uS(n,r,o,u){return io(),r.flags|=256,ci(n,r,o,u),r.child}var rm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function am(n){return{baseLanes:n,cachePool:Jv()}}function sm(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=fr),n}function cS(n,r,o){var u=r.pendingProps,p=!1,m=(r.flags&128)!==0,b;if((b=m)||(b=n!==null&&n.memoizedState===null?!1:(On.current&2)!==0),b&&(p=!0,r.flags&=-129),b=(r.flags&32)!==0,r.flags&=-33,n===null){if(Xe){if(p?ps(r):ms(),(n=xn)?(n=vy(n,Or),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:os!==null?{id:sa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},o=kv(n),o.return=r,r.child=o,li=r,xn=null)):n=null,n===null)throw us(r);return Gm(n)?r.lanes=32:r.lanes=536870912,null}var N=u.children;return u=u.fallback,p?(ms(),p=r.mode,N=Wf({mode:"hidden",children:N},p),u=no(u,p,o,null),N.return=r,u.return=r,N.sibling=u,r.child=N,u=r.child,u.memoizedState=am(o),u.childLanes=sm(n,b,o),r.memoizedState=rm,Vu(null,u)):(ps(r),om(r,N))}var W=n.memoizedState;if(W!==null&&(N=W.dehydrated,N!==null)){if(m)r.flags&256?(ps(r),r.flags&=-257,r=lm(n,r,o)):r.memoizedState!==null?(ms(),r.child=n.child,r.flags|=128,r=null):(ms(),N=u.fallback,p=r.mode,u=Wf({mode:"visible",children:u.children},p),N=no(N,p,o,null),N.flags|=2,u.return=r,N.return=r,u.sibling=N,r.child=u,uo(r,n.child,null,o),u=r.child,u.memoizedState=am(o),u.childLanes=sm(n,b,o),r.memoizedState=rm,r=Vu(null,u));else if(ps(r),Gm(N)){if(b=N.nextSibling&&N.nextSibling.dataset,b)var ot=b.dgst;b=ot,u=Error(i(419)),u.stack="",u.digest=b,wu({value:u,source:null,stack:null}),r=lm(n,r,o)}else if(Xn||il(n,r,o,!1),b=(o&n.childLanes)!==0,Xn||b){if(b=hn,b!==null&&(u=oe(b,o),u!==0&&u!==W.retryLane))throw W.retryLane=u,eo(n,u),qi(b,n,u),nm;Vm(N)||th(),r=lm(n,r,o)}else Vm(N)?(r.flags|=192,r.child=n.child,r=null):(n=W.treeContext,xn=zr(N.nextSibling),li=r,Xe=!0,ls=null,Or=!1,n!==null&&Yv(r,n),r=om(r,u.children),r.flags|=4096);return r}return p?(ms(),N=u.fallback,p=r.mode,W=n.child,ot=W.sibling,u=wa(W,{mode:"hidden",children:u.children}),u.subtreeFlags=W.subtreeFlags&65011712,ot!==null?N=wa(ot,N):(N=no(N,p,o,null),N.flags|=2),N.return=r,u.return=r,u.sibling=N,r.child=u,Vu(null,u),u=r.child,N=n.child.memoizedState,N===null?N=am(o):(p=N.cachePool,p!==null?(W=Gn._currentValue,p=p.parent!==W?{parent:W,pool:W}:p):p=Jv(),N={baseLanes:N.baseLanes|o,cachePool:p}),u.memoizedState=N,u.childLanes=sm(n,b,o),r.memoizedState=rm,Vu(n.child,u)):(ps(r),o=n.child,n=o.sibling,o=wa(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(b=r.deletions,b===null?(r.deletions=[n],r.flags|=16):b.push(n)),r.child=o,r.memoizedState=null,o)}function om(n,r){return r=Wf({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Wf(n,r){return n=or(22,n,null,r),n.lanes=0,n}function lm(n,r,o){return uo(r,n.child,null,o),n=om(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function fS(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Ep(n.return,r,o)}function um(n,r,o,u,p,m){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p,treeForkCount:m}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=u,b.tail=o,b.tailMode=p,b.treeForkCount=m)}function hS(n,r,o){var u=r.pendingProps,p=u.revealOrder,m=u.tail;u=u.children;var b=On.current,N=(b&2)!==0;if(N?(b=b&1|2,r.flags|=128):b&=1,vt(On,b),ci(n,r,u,o),u=Xe?Ru:0,!N&&n!==null&&(n.flags&128)!==0)t:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fS(n,o,r);else if(n.tag===19)fS(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break t;for(;n.sibling===null;){if(n.return===null||n.return===r)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&Nf(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),um(r,!1,p,o,m,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Nf(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}um(r,!0,o,null,m,u);break;case"together":um(r,!1,null,null,void 0,u);break;default:r.memoizedState=null}return r.child}function Pa(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),vs|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(il(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,o=wa(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=wa(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function cm(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&bf(n)))}function $b(n,r,o){switch(r.tag){case 3:Mt(r,r.stateNode.containerInfo),cs(r,Gn,n.memoizedState.cache),io();break;case 27:case 5:ee(r);break;case 4:Mt(r,r.stateNode.containerInfo);break;case 10:cs(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Pp(r),null;break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(ps(r),r.flags|=128,null):(o&r.child.childLanes)!==0?cS(n,r,o):(ps(r),n=Pa(n,r,o),n!==null?n.sibling:null);ps(r);break;case 19:var p=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(il(n,r,o,!1),u=(o&r.childLanes)!==0),p){if(u)return hS(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),vt(On,On.current),u)break;return null;case 22:return r.lanes=0,rS(n,r,o,r.pendingProps);case 24:cs(r,Gn,n.memoizedState.cache)}return Pa(n,r,o)}function dS(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Xn=!0;else{if(!cm(n,o)&&(r.flags&128)===0)return Xn=!1,$b(n,r,o);Xn=(n.flags&131072)!==0}else Xn=!1,Xe&&(r.flags&1048576)!==0&&Wv(r,Ru,r.index);switch(r.lanes=0,r.tag){case 16:t:{var u=r.pendingProps;if(n=oo(r.elementType),r.type=n,typeof n=="function")mp(n)?(u=fo(n,u),r.tag=1,r=lS(null,r,n,u,o)):(r.tag=0,r=im(null,r,n,u,o));else{if(n!=null){var p=n.$$typeof;if(p===C){r.tag=11,r=eS(null,r,n,u,o);break t}else if(p===L){r.tag=14,r=nS(null,r,n,u,o);break t}}throw r=$(n)||n,Error(i(306,r,""))}}return r;case 0:return im(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,p=fo(u,r.pendingProps),lS(n,r,u,p,o);case 3:t:{if(Mt(r,r.stateNode.containerInfo),n===null)throw Error(i(387));u=r.pendingProps;var m=r.memoizedState;p=m.element,Dp(n,r),zu(r,u,null,o);var b=r.memoizedState;if(u=b.cache,cs(r,Gn,u),u!==m.cache&&Tp(r,[Gn],o,!0),Pu(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=uS(n,r,u,o);break t}else if(u!==p){p=Ur(Error(i(424)),r),wu(p),r=uS(n,r,u,o);break t}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,xn=zr(n.firstChild),li=r,Xe=!0,ls=null,Or=!0,o=rx(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(io(),u===p){r=Pa(n,r,o);break t}ci(n,r,u,o)}r=r.child}return r;case 26:return Xf(n,r),n===null?(o=Ty(r.type,null,r.pendingProps,null))?r.memoizedState=o:Xe||(o=r.type,n=r.pendingProps,u=oh(it.current).createElement(o),u[be]=r,u[Se]=n,fi(u,o,n),q(u),r.stateNode=u):r.memoizedState=Ty(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return ee(r),n===null&&Xe&&(u=r.stateNode=yy(r.type,r.pendingProps,it.current),li=r,Or=!0,p=xn,Es(r.type)?(km=p,xn=zr(u.firstChild)):xn=p),ci(n,r,r.pendingProps.children,o),Xf(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Xe&&((p=u=xn)&&(u=wA(u,r.type,r.pendingProps,Or),u!==null?(r.stateNode=u,li=r,xn=zr(u.firstChild),Or=!1,p=!0):p=!1),p||us(r)),ee(r),p=r.type,m=r.pendingProps,b=n!==null?n.memoizedProps:null,u=m.children,Bm(p,m)?u=null:b!==null&&Bm(p,b)&&(r.flags|=32),r.memoizedState!==null&&(p=Fp(n,r,Xb,null,null,o),nc._currentValue=p),Xf(n,r),ci(n,r,u,o),r.child;case 6:return n===null&&Xe&&((n=o=xn)&&(o=DA(o,r.pendingProps,Or),o!==null?(r.stateNode=o,li=r,xn=null,n=!0):n=!1),n||us(r)),null;case 13:return cS(n,r,o);case 4:return Mt(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=uo(r,null,u,o):ci(n,r,u,o),r.child;case 11:return eS(n,r,r.type,r.pendingProps,o);case 7:return ci(n,r,r.pendingProps,o),r.child;case 8:return ci(n,r,r.pendingProps.children,o),r.child;case 12:return ci(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,cs(r,r.type,u.value),ci(n,r,u.children,o),r.child;case 9:return p=r.type._context,u=r.pendingProps.children,ao(r),p=ui(p),u=u(p),r.flags|=1,ci(n,r,u,o),r.child;case 14:return nS(n,r,r.type,r.pendingProps,o);case 15:return iS(n,r,r.type,r.pendingProps,o);case 19:return hS(n,r,o);case 31:return Jb(n,r,o);case 22:return rS(n,r,o,r.pendingProps);case 24:return ao(r),u=ui(Gn),n===null?(p=Cp(),p===null&&(p=hn,m=bp(),p.pooledCache=m,m.refCount++,m!==null&&(p.pooledCacheLanes|=o),p=m),r.memoizedState={parent:u,cache:p},wp(r),cs(r,Gn,p)):((n.lanes&o)!==0&&(Dp(n,r),zu(r,null,null,o),Pu()),p=n.memoizedState,m=r.memoizedState,p.parent!==u?(p={parent:u,cache:u},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),cs(r,Gn,u)):(u=m.cache,cs(r,Gn,u),u!==p.cache&&Tp(r,[Gn],o,!0))),ci(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function za(n){n.flags|=4}function fm(n,r,o,u,p){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(HS())n.flags|=8192;else throw lo=wf,Rp}else n.flags&=-16777217}function pS(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!wy(r))if(HS())n.flags|=8192;else throw lo=wf,Rp}function Yf(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?ke():536870912,n.lanes|=r,ml|=r)}function Gu(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Sn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function tA(n,r,o){var u=r.pendingProps;switch(xp(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(r),null;case 1:return Sn(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),La(Gn),Pt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(nl(r)?za(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,yp())),Sn(r),null;case 26:var p=r.type,m=r.memoizedState;return n===null?(za(r),m!==null?(Sn(r),pS(r,m)):(Sn(r),fm(r,p,null,u,o))):m?m!==n.memoizedState?(za(r),Sn(r),pS(r,m)):(Sn(r),r.flags&=-16777217):(n=n.memoizedProps,n!==u&&za(r),Sn(r),fm(r,p,n,u,o)),null;case 27:if(Qt(r),o=it.current,p=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&za(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return Sn(r),null}n=Tt.current,nl(r)?qv(r):(n=yy(p,u,o),r.stateNode=n,za(r))}return Sn(r),null;case 5:if(Qt(r),p=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&za(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return Sn(r),null}if(m=Tt.current,nl(r))qv(r);else{var b=oh(it.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?b.createElement("select",{is:u.is}):b.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?b.createElement(p,{is:u.is}):b.createElement(p)}}m[be]=r,m[Se]=u;t:for(b=r.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===r)break t;for(;b.sibling===null;){if(b.return===null||b.return===r)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}r.stateNode=m;t:switch(fi(m,p,u),p){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&za(r)}}return Sn(r),fm(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,o),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&za(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(i(166));if(n=it.current,nl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,p=li,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}n[be]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||cy(n.nodeValue,o)),n||us(r,!0)}else n=oh(n).createTextNode(u),n[be]=r,r.stateNode=n}return Sn(r),null;case 31:if(o=r.memoizedState,n===null||n.memoizedState!==null){if(u=nl(r),o!==null){if(n===null){if(!u)throw Error(i(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[be]=r}else io(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Sn(r),n=!1}else o=yp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return r.flags&256?(ur(r),r):(ur(r),null);if((r.flags&128)!==0)throw Error(i(558))}return Sn(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=nl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[be]=r}else io(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Sn(r),p=!1}else p=yp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(ur(r),r):(ur(r),null)}return ur(r),(r.flags&128)!==0?(r.lanes=o,r):(o=u!==null,n=n!==null&&n.memoizedState!==null,o&&(u=r.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==p&&(u.flags|=2048)),o!==n&&o&&(r.child.flags|=8192),Yf(r,r.updateQueue),Sn(r),null);case 4:return Pt(),n===null&&Nm(r.stateNode.containerInfo),Sn(r),null;case 10:return La(r.type),Sn(r),null;case 19:if(K(On),u=r.memoizedState,u===null)return Sn(r),null;if(p=(r.flags&128)!==0,m=u.rendering,m===null)if(p)Gu(u,!1);else{if(Un!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=Nf(n),m!==null){for(r.flags|=128,Gu(u,!1),n=m.updateQueue,r.updateQueue=n,Yf(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)Gv(o,n),o=o.sibling;return vt(On,On.current&1|2),Xe&&Da(r,u.treeForkCount),r.child}n=n.sibling}u.tail!==null&&R()>Kf&&(r.flags|=128,p=!0,Gu(u,!1),r.lanes=4194304)}else{if(!p)if(n=Nf(m),n!==null){if(r.flags|=128,p=!0,n=n.updateQueue,r.updateQueue=n,Yf(r,n),Gu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Xe)return Sn(r),null}else 2*R()-u.renderingStartTime>Kf&&o!==536870912&&(r.flags|=128,p=!0,Gu(u,!1),r.lanes=4194304);u.isBackwards?(m.sibling=r.child,r.child=m):(n=u.last,n!==null?n.sibling=m:r.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=R(),n.sibling=null,o=On.current,vt(On,p?o&1|2:o&1),Xe&&Da(r,u.treeForkCount),n):(Sn(r),null);case 22:case 23:return ur(r),Op(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(Sn(r),r.subtreeFlags&6&&(r.flags|=8192)):Sn(r),o=r.updateQueue,o!==null&&Yf(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&K(so),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),La(Gn),Sn(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function eA(n,r){switch(xp(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return La(Gn),Pt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Qt(r),null;case 31:if(r.memoizedState!==null){if(ur(r),r.alternate===null)throw Error(i(340));io()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(ur(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));io()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return K(On),null;case 4:return Pt(),null;case 10:return La(r.type),null;case 22:case 23:return ur(r),Op(),n!==null&&K(so),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return La(Gn),null;case 25:return null;default:return null}}function mS(n,r){switch(xp(r),r.tag){case 3:La(Gn),Pt();break;case 26:case 27:case 5:Qt(r);break;case 4:Pt();break;case 31:r.memoizedState!==null&&ur(r);break;case 13:ur(r);break;case 19:K(On);break;case 10:La(r.type);break;case 22:case 23:ur(r),Op(),n!==null&&K(so);break;case 24:La(Gn)}}function ku(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&n)===n){u=void 0;var m=o.create,b=o.inst;u=m(),b.destroy=u}o=o.next}while(o!==p)}}catch(N){rn(r,r.return,N)}}function _s(n,r,o){try{var u=r.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var m=p.next;u=m;do{if((u.tag&n)===n){var b=u.inst,N=b.destroy;if(N!==void 0){b.destroy=void 0,p=r;var W=o,ot=N;try{ot()}catch(xt){rn(p,W,xt)}}}u=u.next}while(u!==m)}}catch(xt){rn(r,r.return,xt)}}function _S(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{sx(r,o)}catch(u){rn(n,n.return,u)}}}function gS(n,r,o){o.props=fo(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){rn(n,r,u)}}function Xu(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(p){rn(n,r,p)}}function la(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){rn(n,r,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){rn(n,r,p)}else o.current=null}function vS(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break t;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){rn(n,n.return,p)}}function hm(n,r,o){try{var u=n.stateNode;EA(u,n.type,o,r),u[Se]=r}catch(p){rn(n,n.return,p)}}function xS(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Es(n.type)||n.tag===4}function dm(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||xS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Es(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pm(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ca));else if(u!==4&&(u===27&&Es(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(pm(n,r,o),n=n.sibling;n!==null;)pm(n,r,o),n=n.sibling}function qf(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&Es(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(qf(n,r,o),n=n.sibling;n!==null;)qf(n,r,o),n=n.sibling}function SS(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);fi(r,u,o),r[be]=n,r[Se]=o}catch(m){rn(n,n.return,m)}}var Fa=!1,Wn=!1,mm=!1,yS=typeof WeakSet=="function"?WeakSet:Set,ii=null;function nA(n,r){if(n=n.containerInfo,zm=ph,n=Nv(n),lp(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else t:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break t}var b=0,N=-1,W=-1,ot=0,xt=0,yt=n,ft=null;e:for(;;){for(var dt;yt!==o||p!==0&&yt.nodeType!==3||(N=b+p),yt!==m||u!==0&&yt.nodeType!==3||(W=b+u),yt.nodeType===3&&(b+=yt.nodeValue.length),(dt=yt.firstChild)!==null;)ft=yt,yt=dt;for(;;){if(yt===n)break e;if(ft===o&&++ot===p&&(N=b),ft===m&&++xt===u&&(W=b),(dt=yt.nextSibling)!==null)break;yt=ft,ft=yt.parentNode}yt=dt}o=N===-1||W===-1?null:{start:N,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Fm={focusedElem:n,selectionRange:o},ph=!1,ii=r;ii!==null;)if(r=ii,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ii=n;else for(;ii!==null;){switch(r=ii,m=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)p=n[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=r,p=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var $t=fo(o.type,p);n=u.getSnapshotBeforeUpdate($t,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(fe){rn(o,o.return,fe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Hm(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Hm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,ii=n;break}ii=r.return}}function MS(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ia(n,o),u&4&&ku(5,o);break;case 1:if(Ia(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(b){rn(o,o.return,b)}else{var p=fo(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(p,r,n.__reactInternalSnapshotBeforeUpdate)}catch(b){rn(o,o.return,b)}}u&64&&_S(o),u&512&&Xu(o,o.return);break;case 3:if(Ia(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{sx(n,r)}catch(b){rn(o,o.return,b)}}break;case 27:r===null&&u&4&&SS(o);case 26:case 5:Ia(n,o),r===null&&u&4&&vS(o),u&512&&Xu(o,o.return);break;case 12:Ia(n,o);break;case 31:Ia(n,o),u&4&&bS(n,o);break;case 13:Ia(n,o),u&4&&AS(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=fA.bind(null,o),UA(n,o))));break;case 22:if(u=o.memoizedState!==null||Fa,!u){r=r!==null&&r.memoizedState!==null||Wn,p=Fa;var m=Wn;Fa=u,(Wn=r)&&!m?Ha(n,o,(o.subtreeFlags&8772)!==0):Ia(n,o),Fa=p,Wn=m}break;case 30:break;default:Ia(n,o)}}function ES(n){var r=n.alternate;r!==null&&(n.alternate=null,ES(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&bn(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var En=null,ki=!1;function Ba(n,r,o){for(o=o.child;o!==null;)TS(n,r,o),o=o.sibling}function TS(n,r,o){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(At,o)}catch{}switch(o.tag){case 26:Wn||la(o,r),Ba(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Wn||la(o,r);var u=En,p=ki;Es(o.type)&&(En=o.stateNode,ki=!1),Ba(n,r,o),$u(o.stateNode),En=u,ki=p;break;case 5:Wn||la(o,r);case 6:if(u=En,p=ki,En=null,Ba(n,r,o),En=u,ki=p,En!==null)if(ki)try{(En.nodeType===9?En.body:En.nodeName==="HTML"?En.ownerDocument.body:En).removeChild(o.stateNode)}catch(m){rn(o,r,m)}else try{En.removeChild(o.stateNode)}catch(m){rn(o,r,m)}break;case 18:En!==null&&(ki?(n=En,_y(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),El(n)):_y(En,o.stateNode));break;case 4:u=En,p=ki,En=o.stateNode.containerInfo,ki=!0,Ba(n,r,o),En=u,ki=p;break;case 0:case 11:case 14:case 15:_s(2,o,r),Wn||_s(4,o,r),Ba(n,r,o);break;case 1:Wn||(la(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&gS(o,r,u)),Ba(n,r,o);break;case 21:Ba(n,r,o);break;case 22:Wn=(u=Wn)||o.memoizedState!==null,Ba(n,r,o),Wn=u;break;default:Ba(n,r,o)}}function bS(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{El(n)}catch(o){rn(r,r.return,o)}}}function AS(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{El(n)}catch(o){rn(r,r.return,o)}}function iA(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new yS),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new yS),r;default:throw Error(i(435,n.tag))}}function Zf(n,r){var o=iA(n);r.forEach(function(u){if(!o.has(u)){o.add(u);var p=hA.bind(null,n,u);u.then(p,p)}})}function Xi(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],m=n,b=r,N=b;t:for(;N!==null;){switch(N.tag){case 27:if(Es(N.type)){En=N.stateNode,ki=!1;break t}break;case 5:En=N.stateNode,ki=!1;break t;case 3:case 4:En=N.stateNode.containerInfo,ki=!0;break t}N=N.return}if(En===null)throw Error(i(160));TS(m,b,p),En=null,ki=!1,m=p.alternate,m!==null&&(m.return=null),p.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)CS(r,n),r=r.sibling}var Kr=null;function CS(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Xi(r,n),Wi(n),u&4&&(_s(3,n,n.return),ku(3,n),_s(5,n,n.return));break;case 1:Xi(r,n),Wi(n),u&512&&(Wn||o===null||la(o,o.return)),u&64&&Fa&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=Kr;if(Xi(r,n),Wi(n),u&512&&(Wn||o===null||la(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){t:{u=n.type,o=n.memoizedProps,p=p.ownerDocument||p;e:switch(u){case"title":m=p.getElementsByTagName("title")[0],(!m||m[gn]||m[be]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=p.createElement(u),p.head.insertBefore(m,p.querySelector("head > title"))),fi(m,u,o),m[be]=n,q(m),u=m;break t;case"link":var b=Cy("link","href",p).get(u+(o.href||""));if(b){for(var N=0;N<b.length;N++)if(m=b[N],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(N,1);break e}}m=p.createElement(u),fi(m,u,o),p.head.appendChild(m);break;case"meta":if(b=Cy("meta","content",p).get(u+(o.content||""))){for(N=0;N<b.length;N++)if(m=b[N],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(N,1);break e}}m=p.createElement(u),fi(m,u,o),p.head.appendChild(m);break;default:throw Error(i(468,u))}m[be]=n,q(m),u=m}n.stateNode=u}else Ry(p,n.type,n.stateNode);else n.stateNode=Ay(p,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?Ry(p,n.type,n.stateNode):Ay(p,u,n.memoizedProps)):u===null&&n.stateNode!==null&&hm(n,n.memoizedProps,o.memoizedProps)}break;case 27:Xi(r,n),Wi(n),u&512&&(Wn||o===null||la(o,o.return)),o!==null&&u&4&&hm(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Xi(r,n),Wi(n),u&512&&(Wn||o===null||la(o,o.return)),n.flags&32){p=n.stateNode;try{Di(p,"")}catch($t){rn(n,n.return,$t)}}u&4&&n.stateNode!=null&&(p=n.memoizedProps,hm(n,p,o!==null?o.memoizedProps:p)),u&1024&&(mm=!0);break;case 6:if(Xi(r,n),Wi(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch($t){rn(n,n.return,$t)}}break;case 3:if(ch=null,p=Kr,Kr=lh(r.containerInfo),Xi(r,n),Kr=p,Wi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{El(r.containerInfo)}catch($t){rn(n,n.return,$t)}mm&&(mm=!1,RS(n));break;case 4:u=Kr,Kr=lh(n.stateNode.containerInfo),Xi(r,n),Wi(n),Kr=u;break;case 12:Xi(r,n),Wi(n);break;case 31:Xi(r,n),Wi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Zf(n,u)));break;case 13:Xi(r,n),Wi(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Qf=R()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Zf(n,u)));break;case 22:p=n.memoizedState!==null;var W=o!==null&&o.memoizedState!==null,ot=Fa,xt=Wn;if(Fa=ot||p,Wn=xt||W,Xi(r,n),Wn=xt,Fa=ot,Wi(n),u&8192)t:for(r=n.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(o===null||W||Fa||Wn||ho(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){W=o=r;try{if(m=W.stateNode,p)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{N=W.stateNode;var yt=W.memoizedProps.style,ft=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;N.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch($t){rn(W,W.return,$t)}}}else if(r.tag===6){if(o===null){W=r;try{W.stateNode.nodeValue=p?"":W.memoizedProps}catch($t){rn(W,W.return,$t)}}}else if(r.tag===18){if(o===null){W=r;try{var dt=W.stateNode;p?gy(dt,!0):gy(W.stateNode,!1)}catch($t){rn(W,W.return,$t)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break t;for(;r.sibling===null;){if(r.return===null||r.return===n)break t;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Zf(n,o))));break;case 19:Xi(r,n),Wi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Zf(n,u)));break;case 30:break;case 21:break;default:Xi(r,n),Wi(n)}}function Wi(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(xS(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var p=o.stateNode,m=dm(n);qf(n,m,p);break;case 5:var b=o.stateNode;o.flags&32&&(Di(b,""),o.flags&=-33);var N=dm(n);qf(n,N,b);break;case 3:case 4:var W=o.stateNode.containerInfo,ot=dm(n);pm(n,ot,W);break;default:throw Error(i(161))}}catch(xt){rn(n,n.return,xt)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function RS(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;RS(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Ia(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)MS(n,r.alternate,r),r=r.sibling}function ho(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:_s(4,r,r.return),ho(r);break;case 1:la(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&gS(r,r.return,o),ho(r);break;case 27:$u(r.stateNode);case 26:case 5:la(r,r.return),ho(r);break;case 22:r.memoizedState===null&&ho(r);break;case 30:ho(r);break;default:ho(r)}n=n.sibling}}function Ha(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,p=n,m=r,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ha(p,m,o),ku(4,m);break;case 1:if(Ha(p,m,o),u=m,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(ot){rn(u,u.return,ot)}if(u=m,p=u.updateQueue,p!==null){var N=u.stateNode;try{var W=p.shared.hiddenCallbacks;if(W!==null)for(p.shared.hiddenCallbacks=null,p=0;p<W.length;p++)ax(W[p],N)}catch(ot){rn(u,u.return,ot)}}o&&b&64&&_S(m),Xu(m,m.return);break;case 27:SS(m);case 26:case 5:Ha(p,m,o),o&&u===null&&b&4&&vS(m),Xu(m,m.return);break;case 12:Ha(p,m,o);break;case 31:Ha(p,m,o),o&&b&4&&bS(p,m);break;case 13:Ha(p,m,o),o&&b&4&&AS(p,m);break;case 22:m.memoizedState===null&&Ha(p,m,o),Xu(m,m.return);break;case 30:break;default:Ha(p,m,o)}r=r.sibling}}function _m(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Du(o))}function gm(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Du(n))}function Jr(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)wS(n,r,o,u),r=r.sibling}function wS(n,r,o,u){var p=r.flags;switch(r.tag){case 0:case 11:case 15:Jr(n,r,o,u),p&2048&&ku(9,r);break;case 1:Jr(n,r,o,u);break;case 3:Jr(n,r,o,u),p&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Du(n)));break;case 12:if(p&2048){Jr(n,r,o,u),n=r.stateNode;try{var m=r.memoizedProps,b=m.id,N=m.onPostCommit;typeof N=="function"&&N(b,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(W){rn(r,r.return,W)}}else Jr(n,r,o,u);break;case 31:Jr(n,r,o,u);break;case 13:Jr(n,r,o,u);break;case 23:break;case 22:m=r.stateNode,b=r.alternate,r.memoizedState!==null?m._visibility&2?Jr(n,r,o,u):Wu(n,r):m._visibility&2?Jr(n,r,o,u):(m._visibility|=2,hl(n,r,o,u,(r.subtreeFlags&10256)!==0||!1)),p&2048&&_m(b,r);break;case 24:Jr(n,r,o,u),p&2048&&gm(r.alternate,r);break;default:Jr(n,r,o,u)}}function hl(n,r,o,u,p){for(p=p&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var m=n,b=r,N=o,W=u,ot=b.flags;switch(b.tag){case 0:case 11:case 15:hl(m,b,N,W,p),ku(8,b);break;case 23:break;case 22:var xt=b.stateNode;b.memoizedState!==null?xt._visibility&2?hl(m,b,N,W,p):Wu(m,b):(xt._visibility|=2,hl(m,b,N,W,p)),p&&ot&2048&&_m(b.alternate,b);break;case 24:hl(m,b,N,W,p),p&&ot&2048&&gm(b.alternate,b);break;default:hl(m,b,N,W,p)}r=r.sibling}}function Wu(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,p=u.flags;switch(u.tag){case 22:Wu(o,u),p&2048&&_m(u.alternate,u);break;case 24:Wu(o,u),p&2048&&gm(u.alternate,u);break;default:Wu(o,u)}r=r.sibling}}var Yu=8192;function dl(n,r,o){if(n.subtreeFlags&Yu)for(n=n.child;n!==null;)DS(n,r,o),n=n.sibling}function DS(n,r,o){switch(n.tag){case 26:dl(n,r,o),n.flags&Yu&&n.memoizedState!==null&&kA(o,Kr,n.memoizedState,n.memoizedProps);break;case 5:dl(n,r,o);break;case 3:case 4:var u=Kr;Kr=lh(n.stateNode.containerInfo),dl(n,r,o),Kr=u;break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=Yu,Yu=16777216,dl(n,r,o),Yu=u):dl(n,r,o));break;default:dl(n,r,o)}}function US(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function qu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];ii=u,NS(u,n)}US(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)LS(n),n=n.sibling}function LS(n){switch(n.tag){case 0:case 11:case 15:qu(n),n.flags&2048&&_s(9,n,n.return);break;case 3:qu(n);break;case 12:qu(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,jf(n)):qu(n);break;default:qu(n)}}function jf(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];ii=u,NS(u,n)}US(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:_s(8,r,r.return),jf(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,jf(r));break;default:jf(r)}n=n.sibling}}function NS(n,r){for(;ii!==null;){var o=ii;switch(o.tag){case 0:case 11:case 15:_s(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Du(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,ii=u;else t:for(o=n;ii!==null;){u=ii;var p=u.sibling,m=u.return;if(ES(u),u===o){ii=null;break t}if(p!==null){p.return=m,ii=p;break t}ii=m}}}var rA={getCacheForType:function(n){var r=ui(Gn),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o},cacheSignal:function(){return ui(Gn).controller.signal}},aA=typeof WeakMap=="function"?WeakMap:Map,Je=0,hn=null,ze=null,Ve=0,nn=0,cr=null,gs=!1,pl=!1,vm=!1,Va=0,Un=0,vs=0,po=0,xm=0,fr=0,ml=0,Zu=null,Yi=null,Sm=!1,Qf=0,OS=0,Kf=1/0,Jf=null,xs=null,Qn=0,Ss=null,_l=null,Ga=0,ym=0,Mm=null,PS=null,ju=0,Em=null;function hr(){return(Je&2)!==0&&Ve!==0?Ve&-Ve:z.T!==null?wm():ge()}function zS(){if(fr===0)if((Ve&536870912)===0||Xe){var n=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),fr=n}else fr=536870912;return n=lr.current,n!==null&&(n.flags|=32),fr}function qi(n,r,o){(n===hn&&(nn===2||nn===9)||n.cancelPendingCommit!==null)&&(gl(n,0),ys(n,Ve,fr,!1)),Jt(n,o),((Je&2)===0||n!==hn)&&(n===hn&&((Je&2)===0&&(po|=o),Un===4&&ys(n,Ve,fr,!1)),ua(n))}function FS(n,r,o){if((Je&6)!==0)throw Error(i(327));var u=!o&&(r&127)===0&&(r&n.expiredLanes)===0||kt(n,r),p=u?lA(n,r):bm(n,r,!0),m=u;do{if(p===0){pl&&!u&&ys(n,r,0,!1);break}else{if(o=n.current.alternate,m&&!sA(o)){p=bm(n,r,!1),m=!1;continue}if(p===2){if(m=r,n.errorRecoveryDisabledLanes&m)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){r=b;t:{var N=n;p=Zu;var W=N.current.memoizedState.isDehydrated;if(W&&(gl(N,b).flags|=256),b=bm(N,b,!1),b!==2){if(vm&&!W){N.errorRecoveryDisabledLanes|=m,po|=m,p=4;break t}m=Yi,Yi=p,m!==null&&(Yi===null?Yi=m:Yi.push.apply(Yi,m))}p=b}if(m=!1,p!==2)continue}}if(p===1){gl(n,0),ys(n,r,0,!0);break}t:{switch(u=n,m=p,m){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:ys(u,r,fr,!gs);break t;case 2:Yi=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(p=Qf+300-R(),10<p)){if(ys(u,r,fr,!gs),pt(u,0,!0)!==0)break t;Ga=r,u.timeoutHandle=py(BS.bind(null,u,o,Yi,Jf,Sm,r,fr,po,ml,gs,m,"Throttled",-0,0),p);break t}BS(u,o,Yi,Jf,Sm,r,fr,po,ml,gs,m,null,-0,0)}}break}while(!0);ua(n)}function BS(n,r,o,u,p,m,b,N,W,ot,xt,yt,ft,dt){if(n.timeoutHandle=-1,yt=r.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ca},DS(r,m,yt);var $t=(m&62914560)===m?Qf-R():(m&4194048)===m?OS-R():0;if($t=XA(yt,$t),$t!==null){Ga=m,n.cancelPendingCommit=$t(YS.bind(null,n,r,m,o,u,p,b,N,W,xt,yt,null,ft,dt)),ys(n,m,b,!ot);return}}YS(n,r,m,o,u,p,b,N,W)}function sA(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],m=p.getSnapshot;p=p.value;try{if(!sr(m(),p))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ys(n,r,o,u){r&=~xm,r&=~po,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var p=r;0<p;){var m=31-Ot(p),b=1<<m;u[m]=-1,p&=~b}o!==0&&Ft(n,o,r)}function $f(){return(Je&6)===0?(Qu(0),!1):!0}function Tm(){if(ze!==null){if(nn===0)var n=ze.return;else n=ze,Ua=ro=null,Hp(n),ol=null,Lu=0,n=ze;for(;n!==null;)mS(n.alternate,n),n=n.return;ze=null}}function gl(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,AA(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Ga=0,Tm(),hn=n,ze=o=wa(n.current,null),Ve=r,nn=0,cr=null,gs=!1,pl=kt(n,r),vm=!1,ml=fr=xm=po=vs=Un=0,Yi=Zu=null,Sm=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var p=31-Ot(u),m=1<<p;r|=n[p],u&=~m}return Va=r,Sf(),o}function IS(n,r){Ae=null,z.H=Hu,r===sl||r===Rf?(r=ex(),nn=3):r===Rp?(r=ex(),nn=4):nn=r===nm?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,cr=r,ze===null&&(Un=1,Gf(n,Ur(r,n.current)))}function HS(){var n=lr.current;return n===null?!0:(Ve&4194048)===Ve?Pr===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?n===Pr:!1}function VS(){var n=z.H;return z.H=Hu,n===null?Hu:n}function GS(){var n=z.A;return z.A=rA,n}function th(){Un=4,gs||(Ve&4194048)!==Ve&&lr.current!==null||(pl=!0),(vs&134217727)===0&&(po&134217727)===0||hn===null||ys(hn,Ve,fr,!1)}function bm(n,r,o){var u=Je;Je|=2;var p=VS(),m=GS();(hn!==n||Ve!==r)&&(Jf=null,gl(n,r)),r=!1;var b=Un;t:do try{if(nn!==0&&ze!==null){var N=ze,W=cr;switch(nn){case 8:Tm(),b=6;break t;case 3:case 2:case 9:case 6:lr.current===null&&(r=!0);var ot=nn;if(nn=0,cr=null,vl(n,N,W,ot),o&&pl){b=0;break t}break;default:ot=nn,nn=0,cr=null,vl(n,N,W,ot)}}oA(),b=Un;break}catch(xt){IS(n,xt)}while(!0);return r&&n.shellSuspendCounter++,Ua=ro=null,Je=u,z.H=p,z.A=m,ze===null&&(hn=null,Ve=0,Sf()),b}function oA(){for(;ze!==null;)kS(ze)}function lA(n,r){var o=Je;Je|=2;var u=VS(),p=GS();hn!==n||Ve!==r?(Jf=null,Kf=R()+500,gl(n,r)):pl=kt(n,r);t:do try{if(nn!==0&&ze!==null){r=ze;var m=cr;e:switch(nn){case 1:nn=0,cr=null,vl(n,r,m,1);break;case 2:case 9:if($v(m)){nn=0,cr=null,XS(r);break}r=function(){nn!==2&&nn!==9||hn!==n||(nn=7),ua(n)},m.then(r,r);break t;case 3:nn=7;break t;case 4:nn=5;break t;case 7:$v(m)?(nn=0,cr=null,XS(r)):(nn=0,cr=null,vl(n,r,m,7));break;case 5:var b=null;switch(ze.tag){case 26:b=ze.memoizedState;case 5:case 27:var N=ze;if(b?wy(b):N.stateNode.complete){nn=0,cr=null;var W=N.sibling;if(W!==null)ze=W;else{var ot=N.return;ot!==null?(ze=ot,eh(ot)):ze=null}break e}}nn=0,cr=null,vl(n,r,m,5);break;case 6:nn=0,cr=null,vl(n,r,m,6);break;case 8:Tm(),Un=6;break t;default:throw Error(i(462))}}uA();break}catch(xt){IS(n,xt)}while(!0);return Ua=ro=null,z.H=u,z.A=p,Je=o,ze!==null?0:(hn=null,Ve=0,Sf(),Un)}function uA(){for(;ze!==null&&!Xt();)kS(ze)}function kS(n){var r=dS(n.alternate,n,Va);n.memoizedProps=n.pendingProps,r===null?eh(n):ze=r}function XS(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=oS(o,r,r.pendingProps,r.type,void 0,Ve);break;case 11:r=oS(o,r,r.pendingProps,r.type.render,r.ref,Ve);break;case 5:Hp(r);default:mS(o,r),r=ze=Gv(r,Va),r=dS(o,r,Va)}n.memoizedProps=n.pendingProps,r===null?eh(n):ze=r}function vl(n,r,o,u){Ua=ro=null,Hp(r),ol=null,Lu=0;var p=r.return;try{if(Kb(n,p,r,o,Ve)){Un=1,Gf(n,Ur(o,n.current)),ze=null;return}}catch(m){if(p!==null)throw ze=p,m;Un=1,Gf(n,Ur(o,n.current)),ze=null;return}r.flags&32768?(Xe||u===1?n=!0:pl||(Ve&536870912)!==0?n=!1:(gs=n=!0,(u===2||u===9||u===3||u===6)&&(u=lr.current,u!==null&&u.tag===13&&(u.flags|=16384))),WS(r,n)):eh(r)}function eh(n){var r=n;do{if((r.flags&32768)!==0){WS(r,gs);return}n=r.return;var o=tA(r.alternate,r,Va);if(o!==null){ze=o;return}if(r=r.sibling,r!==null){ze=r;return}ze=r=n}while(r!==null);Un===0&&(Un=5)}function WS(n,r){do{var o=eA(n.alternate,n);if(o!==null){o.flags&=32767,ze=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){ze=n;return}ze=n=o}while(n!==null);Un=6,ze=null}function YS(n,r,o,u,p,m,b,N,W){n.cancelPendingCommit=null;do nh();while(Qn!==0);if((Je&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(m=r.lanes|r.childLanes,m|=dp,Te(n,o,m,b,N,W),n===hn&&(ze=hn=null,Ve=0),_l=r,Ss=n,Ga=o,ym=m,Mm=p,PS=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,dA(ht,function(){return KS(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,p=F.p,F.p=2,b=Je,Je|=4;try{nA(n,r,o)}finally{Je=b,F.p=p,z.T=u}}Qn=1,qS(),ZS(),jS()}}function qS(){if(Qn===1){Qn=0;var n=Ss,r=_l,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var u=F.p;F.p=2;var p=Je;Je|=4;try{CS(r,n);var m=Fm,b=Nv(n.containerInfo),N=m.focusedElem,W=m.selectionRange;if(b!==N&&N&&N.ownerDocument&&Lv(N.ownerDocument.documentElement,N)){if(W!==null&&lp(N)){var ot=W.start,xt=W.end;if(xt===void 0&&(xt=ot),"selectionStart"in N)N.selectionStart=ot,N.selectionEnd=Math.min(xt,N.value.length);else{var yt=N.ownerDocument||document,ft=yt&&yt.defaultView||window;if(ft.getSelection){var dt=ft.getSelection(),$t=N.textContent.length,fe=Math.min(W.start,$t),fn=W.end===void 0?fe:Math.min(W.end,$t);!dt.extend&&fe>fn&&(b=fn,fn=fe,fe=b);var et=Uv(N,fe),j=Uv(N,fn);if(et&&j&&(dt.rangeCount!==1||dt.anchorNode!==et.node||dt.anchorOffset!==et.offset||dt.focusNode!==j.node||dt.focusOffset!==j.offset)){var at=yt.createRange();at.setStart(et.node,et.offset),dt.removeAllRanges(),fe>fn?(dt.addRange(at),dt.extend(j.node,j.offset)):(at.setEnd(j.node,j.offset),dt.addRange(at))}}}}for(yt=[],dt=N;dt=dt.parentNode;)dt.nodeType===1&&yt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<yt.length;N++){var St=yt[N];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}ph=!!zm,Fm=zm=null}finally{Je=p,F.p=u,z.T=o}}n.current=r,Qn=2}}function ZS(){if(Qn===2){Qn=0;var n=Ss,r=_l,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var u=F.p;F.p=2;var p=Je;Je|=4;try{MS(n,r.alternate,r)}finally{Je=p,F.p=u,z.T=o}}Qn=3}}function jS(){if(Qn===4||Qn===3){Qn=0,H();var n=Ss,r=_l,o=Ga,u=PS;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Qn=5:(Qn=0,_l=Ss=null,QS(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(xs=null),_n(o),r=r.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(At,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=z.T,p=F.p,F.p=2,z.T=null;try{for(var m=n.onRecoverableError,b=0;b<u.length;b++){var N=u[b];m(N.value,{componentStack:N.stack})}}finally{z.T=r,F.p=p}}(Ga&3)!==0&&nh(),ua(n),p=n.pendingLanes,(o&261930)!==0&&(p&42)!==0?n===Em?ju++:(ju=0,Em=n):ju=0,Qu(0)}}function QS(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Du(r)))}function nh(){return qS(),ZS(),jS(),KS()}function KS(){if(Qn!==5)return!1;var n=Ss,r=ym;ym=0;var o=_n(Ga),u=z.T,p=F.p;try{F.p=32>o?32:o,z.T=null,o=Mm,Mm=null;var m=Ss,b=Ga;if(Qn=0,_l=Ss=null,Ga=0,(Je&6)!==0)throw Error(i(331));var N=Je;if(Je|=4,LS(m.current),wS(m,m.current,b,o),Je=N,Qu(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(At,m)}catch{}return!0}finally{F.p=p,z.T=u,QS(n,r)}}function JS(n,r,o){r=Ur(o,r),r=em(n.stateNode,r,2),n=ds(n,r,2),n!==null&&(Jt(n,2),ua(n))}function rn(n,r,o){if(n.tag===3)JS(n,n,o);else for(;r!==null;){if(r.tag===3){JS(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(xs===null||!xs.has(u))){n=Ur(o,n),o=$x(2),u=ds(r,o,2),u!==null&&(tS(o,u,r,n),Jt(u,2),ua(u));break}}r=r.return}}function Am(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new aA;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(vm=!0,p.add(o),n=cA.bind(null,n,r,o),r.then(n,n))}function cA(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,hn===n&&(Ve&o)===o&&(Un===4||Un===3&&(Ve&62914560)===Ve&&300>R()-Qf?(Je&2)===0&&gl(n,0):xm|=o,ml===Ve&&(ml=0)),ua(n)}function $S(n,r){r===0&&(r=ke()),n=eo(n,r),n!==null&&(Jt(n,r),ua(n))}function fA(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),$S(n,o)}function hA(n,r){var o=0;switch(n.tag){case 31:case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(r),$S(n,o)}function dA(n,r){return Ee(n,r)}var ih=null,xl=null,Cm=!1,rh=!1,Rm=!1,Ms=0;function ua(n){n!==xl&&n.next===null&&(xl===null?ih=xl=n:xl=xl.next=n),rh=!0,Cm||(Cm=!0,mA())}function Qu(n,r){if(!Rm&&rh){Rm=!0;do for(var o=!1,u=ih;u!==null;){if(n!==0){var p=u.pendingLanes;if(p===0)var m=0;else{var b=u.suspendedLanes,N=u.pingedLanes;m=(1<<31-Ot(42|n)+1)-1,m&=p&~(b&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,iy(u,m))}else m=Ve,m=pt(u,u===hn?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||kt(u,m)||(o=!0,iy(u,m));u=u.next}while(o);Rm=!1}}function pA(){ty()}function ty(){rh=Cm=!1;var n=0;Ms!==0&&bA()&&(n=Ms);for(var r=R(),o=null,u=ih;u!==null;){var p=u.next,m=ey(u,r);m===0?(u.next=null,o===null?ih=p:o.next=p,p===null&&(xl=o)):(o=u,(n!==0||(m&3)!==0)&&(rh=!0)),u=p}Qn!==0&&Qn!==5||Qu(n),Ms!==0&&(Ms=0)}function ey(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var b=31-Ot(m),N=1<<b,W=p[b];W===-1?((N&o)===0||(N&u)!==0)&&(p[b]=le(N,r)):W<=r&&(n.expiredLanes|=N),m&=~N}if(r=hn,o=Ve,o=pt(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(nn===2||nn===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&ce(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||kt(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&ce(u),_n(o)){case 2:case 8:o=gt;break;case 32:o=ht;break;case 268435456:o=Rt;break;default:o=ht}return u=ny.bind(null,n),o=Ee(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&ce(u),n.callbackPriority=2,n.callbackNode=null,2}function ny(n,r){if(Qn!==0&&Qn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(nh()&&n.callbackNode!==o)return null;var u=Ve;return u=pt(n,n===hn?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(FS(n,u,r),ey(n,R()),n.callbackNode!=null&&n.callbackNode===o?ny.bind(null,n):null)}function iy(n,r){if(nh())return null;FS(n,r,!0)}function mA(){CA(function(){(Je&6)!==0?Ee(_t,pA):ty()})}function wm(){if(Ms===0){var n=rl;n===0&&(n=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Ms=n}return Ms}function ry(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:hf(""+n)}function ay(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function _A(n,r,o,u,p){if(r==="submit"&&o&&o.stateNode===p){var m=ry((p[Se]||null).action),b=u.submitter;b&&(r=(r=b[Se]||null)?ry(r.formAction):b.getAttribute("formAction"),r!==null&&(m=r,b=null));var N=new _f("action","action",null,u,p);n.push({event:N,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ms!==0){var W=b?ay(p,b):new FormData(p);jp(o,{pending:!0,data:W,method:p.method,action:m},null,W)}}else typeof m=="function"&&(N.preventDefault(),W=b?ay(p,b):new FormData(p),jp(o,{pending:!0,data:W,method:p.method,action:m},m,W))},currentTarget:p}]})}}for(var Dm=0;Dm<hp.length;Dm++){var Um=hp[Dm],gA=Um.toLowerCase(),vA=Um[0].toUpperCase()+Um.slice(1);Qr(gA,"on"+vA)}Qr(zv,"onAnimationEnd"),Qr(Fv,"onAnimationIteration"),Qr(Bv,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(Ob,"onTransitionRun"),Qr(Pb,"onTransitionStart"),Qr(zb,"onTransitionCancel"),Qr(Iv,"onTransitionEnd"),Ut("onMouseEnter",["mouseout","mouseover"]),Ut("onMouseLeave",["mouseout","mouseover"]),Ut("onPointerEnter",["pointerout","pointerover"]),Ut("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ku));function sy(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;t:{var m=void 0;if(r)for(var b=u.length-1;0<=b;b--){var N=u[b],W=N.instance,ot=N.currentTarget;if(N=N.listener,W!==m&&p.isPropagationStopped())break t;m=N,p.currentTarget=ot;try{m(p)}catch(xt){xf(xt)}p.currentTarget=null,m=W}else for(b=0;b<u.length;b++){if(N=u[b],W=N.instance,ot=N.currentTarget,N=N.listener,W!==m&&p.isPropagationStopped())break t;m=N,p.currentTarget=ot;try{m(p)}catch(xt){xf(xt)}p.currentTarget=null,m=W}}}}function Fe(n,r){var o=r[In];o===void 0&&(o=r[In]=new Set);var u=n+"__bubble";o.has(u)||(oy(r,n,2,!1),o.add(u))}function Lm(n,r,o){var u=0;r&&(u|=4),oy(o,n,u,r)}var ah="_reactListening"+Math.random().toString(36).slice(2);function Nm(n){if(!n[ah]){n[ah]=!0,ut.forEach(function(o){o!=="selectionchange"&&(xA.has(o)||Lm(o,!1,n),Lm(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ah]||(r[ah]=!0,Lm("selectionchange",!1,r))}}function oy(n,r,o,u){switch(zy(r)){case 2:var p=qA;break;case 8:p=ZA;break;default:p=Zm}o=p.bind(null,r,o,n),p=void 0,!$d||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function Om(n,r,o,u,p){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)t:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var N=u.stateNode.containerInfo;if(N===p)break;if(b===4)for(b=u.return;b!==null;){var W=b.tag;if((W===3||W===4)&&b.stateNode.containerInfo===p)return;b=b.return}for(;N!==null;){if(b=vn(N),b===null)return;if(W=b.tag,W===5||W===6||W===26||W===27){u=m=b;continue t}N=N.parentNode}}u=u.return}hv(function(){var ot=m,xt=Kd(o),yt=[];t:{var ft=Hv.get(n);if(ft!==void 0){var dt=_f,$t=n;switch(n){case"keypress":if(pf(o)===0)break t;case"keydown":case"keyup":dt=hb;break;case"focusin":$t="focus",dt=ip;break;case"focusout":$t="blur",dt=ip;break;case"beforeblur":case"afterblur":dt=ip;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=mb;break;case zv:case Fv:case Bv:dt=ib;break;case Iv:dt=gb;break;case"scroll":case"scrollend":dt=JT;break;case"wheel":dt=xb;break;case"copy":case"cut":case"paste":dt=ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=gv;break;case"toggle":case"beforetoggle":dt=yb}var fe=(r&4)!==0,fn=!fe&&(n==="scroll"||n==="scrollend"),et=fe?ft!==null?ft+"Capture":null:ft;fe=[];for(var j=ot,at;j!==null;){var St=j;if(at=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||at===null||et===null||(St=xu(j,et),St!=null&&fe.push(Ju(j,St,at))),fn)break;j=j.return}0<fe.length&&(ft=new dt(ft,$t,null,o,xt),yt.push({event:ft,listeners:fe}))}}if((r&7)===0){t:{if(ft=n==="mouseover"||n==="pointerover",dt=n==="mouseout"||n==="pointerout",ft&&o!==Qd&&($t=o.relatedTarget||o.fromElement)&&(vn($t)||$t[Pe]))break t;if((dt||ft)&&(ft=xt.window===xt?xt:(ft=xt.ownerDocument)?ft.defaultView||ft.parentWindow:window,dt?($t=o.relatedTarget||o.toElement,dt=ot,$t=$t?vn($t):null,$t!==null&&(fn=l($t),fe=$t.tag,$t!==fn||fe!==5&&fe!==27&&fe!==6)&&($t=null)):(dt=null,$t=ot),dt!==$t)){if(fe=mv,St="onMouseLeave",et="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(fe=gv,St="onPointerLeave",et="onPointerEnter",j="pointer"),fn=dt==null?ft:wr(dt),at=$t==null?ft:wr($t),ft=new fe(St,j+"leave",dt,o,xt),ft.target=fn,ft.relatedTarget=at,St=null,vn(xt)===ot&&(fe=new fe(et,j+"enter",$t,o,xt),fe.target=at,fe.relatedTarget=fn,St=fe),fn=St,dt&&$t)e:{for(fe=SA,et=dt,j=$t,at=0,St=et;St;St=fe(St))at++;St=0;for(var ue=j;ue;ue=fe(ue))St++;for(;0<at-St;)et=fe(et),at--;for(;0<St-at;)j=fe(j),St--;for(;at--;){if(et===j||j!==null&&et===j.alternate){fe=et;break e}et=fe(et),j=fe(j)}fe=null}else fe=null;dt!==null&&ly(yt,ft,dt,fe,!1),$t!==null&&fn!==null&&ly(yt,fn,$t,fe,!0)}}t:{if(ft=ot?wr(ot):window,dt=ft.nodeName&&ft.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ft.type==="file")var je=bv;else if(Ev(ft))if(Av)je=Ub;else{je=wb;var re=Rb}else dt=ft.nodeName,!dt||dt.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?ot&&Yo(ot.elementType)&&(je=bv):je=Db;if(je&&(je=je(n,ot))){Tv(yt,je,o,xt);break t}re&&re(n,ft,ot),n==="focusout"&&ot&&ft.type==="number"&&ot.memoizedProps.value!=null&&Zr(ft,"number",ft.value)}switch(re=ot?wr(ot):window,n){case"focusin":(Ev(re)||re.contentEditable==="true")&&(Qo=re,up=ot,Cu=null);break;case"focusout":Cu=up=Qo=null;break;case"mousedown":cp=!0;break;case"contextmenu":case"mouseup":case"dragend":cp=!1,Ov(yt,o,xt);break;case"selectionchange":if(Nb)break;case"keydown":case"keyup":Ov(yt,o,xt)}var Re;if(ap)t:{switch(n){case"compositionstart":var Ge="onCompositionStart";break t;case"compositionend":Ge="onCompositionEnd";break t;case"compositionupdate":Ge="onCompositionUpdate";break t}Ge=void 0}else jo?yv(n,o)&&(Ge="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ge="onCompositionStart");Ge&&(vv&&o.locale!=="ko"&&(jo||Ge!=="onCompositionStart"?Ge==="onCompositionEnd"&&jo&&(Re=dv()):(ss=xt,tp="value"in ss?ss.value:ss.textContent,jo=!0)),re=sh(ot,Ge),0<re.length&&(Ge=new _v(Ge,n,null,o,xt),yt.push({event:Ge,listeners:re}),Re?Ge.data=Re:(Re=Mv(o),Re!==null&&(Ge.data=Re)))),(Re=Eb?Tb(n,o):bb(n,o))&&(Ge=sh(ot,"onBeforeInput"),0<Ge.length&&(re=new _v("onBeforeInput","beforeinput",null,o,xt),yt.push({event:re,listeners:Ge}),re.data=Re)),_A(yt,n,ot,o,xt)}sy(yt,r)})}function Ju(n,r,o){return{instance:n,listener:r,currentTarget:o}}function sh(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,m=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||m===null||(p=xu(n,o),p!=null&&u.unshift(Ju(n,p,m)),p=xu(n,r),p!=null&&u.push(Ju(n,p,m))),n.tag===3)return u;n=n.return}return[]}function SA(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function ly(n,r,o,u,p){for(var m=r._reactName,b=[];o!==null&&o!==u;){var N=o,W=N.alternate,ot=N.stateNode;if(N=N.tag,W!==null&&W===u)break;N!==5&&N!==26&&N!==27||ot===null||(W=ot,p?(ot=xu(o,m),ot!=null&&b.unshift(Ju(o,ot,W))):p||(ot=xu(o,m),ot!=null&&b.push(Ju(o,ot,W)))),o=o.return}b.length!==0&&n.push({event:r,listeners:b})}var yA=/\r\n?/g,MA=/\u0000|\uFFFD/g;function uy(n){return(typeof n=="string"?n:""+n).replace(yA,`
`).replace(MA,"")}function cy(n,r){return r=uy(r),uy(n)===r}function cn(n,r,o,u,p,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Di(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Di(n,""+u);break;case"className":ye(n,"class",u);break;case"tabIndex":ye(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ye(n,o,u);break;case"style":Aa(n,u,m);break;case"data":if(r!=="object"){ye(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=hf(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&cn(n,r,"name",p.name,p,null),cn(n,r,"formEncType",p.formEncType,p,null),cn(n,r,"formMethod",p.formMethod,p,null),cn(n,r,"formTarget",p.formTarget,p,null)):(cn(n,r,"encType",p.encType,p,null),cn(n,r,"method",p.method,p,null),cn(n,r,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=hf(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Ca);break;case"onScroll":u!=null&&Fe("scroll",n);break;case"onScrollEnd":u!=null&&Fe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=hf(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Fe("beforetoggle",n),Fe("toggle",n),me(n,"popover",u);break;case"xlinkActuate":Kt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Kt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Kt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Kt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Kt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Kt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":me(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=QT.get(o)||o,me(n,o,u))}}function Pm(n,r,o,u,p,m){switch(o){case"style":Aa(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Di(n,u):(typeof u=="number"||typeof u=="bigint")&&Di(n,""+u);break;case"onScroll":u!=null&&Fe("scroll",n);break;case"onScrollEnd":u!=null&&Fe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),r=o.slice(2,p?o.length-7:void 0),m=n[Se]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(r,m,p),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,p);break t}o in n?n[o]=u:u===!0?n.setAttribute(o,""):me(n,o,u)}}}function fi(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",n),Fe("load",n);var u=!1,p=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:cn(n,r,m,b,o,null)}}p&&cn(n,r,"srcSet",o.srcSet,o,null),u&&cn(n,r,"src",o.src,o,null);return;case"input":Fe("invalid",n);var N=m=b=p=null,W=null,ot=null;for(u in o)if(o.hasOwnProperty(u)){var xt=o[u];if(xt!=null)switch(u){case"name":p=xt;break;case"type":b=xt;break;case"checked":W=xt;break;case"defaultChecked":ot=xt;break;case"value":m=xt;break;case"defaultValue":N=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(i(137,r));break;default:cn(n,r,u,xt,o,null)}}rr(n,m,N,W,ot,b,p,!1);return;case"select":Fe("invalid",n),u=b=m=null;for(p in o)if(o.hasOwnProperty(p)&&(N=o[p],N!=null))switch(p){case"value":m=N;break;case"defaultValue":b=N;break;case"multiple":u=N;default:cn(n,r,p,N,o,null)}r=m,o=b,n.multiple=!!u,r!=null?ar(n,!!u,r,!1):o!=null&&ar(n,!!u,o,!0);return;case"textarea":Fe("invalid",n),m=p=u=null;for(b in o)if(o.hasOwnProperty(b)&&(N=o[b],N!=null))switch(b){case"value":u=N;break;case"defaultValue":p=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(i(91));break;default:cn(n,r,b,N,o,null)}Hn(n,u,p,m);return;case"option":for(W in o)o.hasOwnProperty(W)&&(u=o[W],u!=null)&&(W==="selected"?n.selected=u&&typeof u!="function"&&typeof u!="symbol":cn(n,r,W,u,o,null));return;case"dialog":Fe("beforetoggle",n),Fe("toggle",n),Fe("cancel",n),Fe("close",n);break;case"iframe":case"object":Fe("load",n);break;case"video":case"audio":for(u=0;u<Ku.length;u++)Fe(Ku[u],n);break;case"image":Fe("error",n),Fe("load",n);break;case"details":Fe("toggle",n);break;case"embed":case"source":case"link":Fe("error",n),Fe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in o)if(o.hasOwnProperty(ot)&&(u=o[ot],u!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:cn(n,r,ot,u,o,null)}return;default:if(Yo(r)){for(xt in o)o.hasOwnProperty(xt)&&(u=o[xt],u!==void 0&&Pm(n,r,xt,u,o,void 0));return}}for(N in o)o.hasOwnProperty(N)&&(u=o[N],u!=null&&cn(n,r,N,u,o,null))}function EA(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,m=null,b=null,N=null,W=null,ot=null,xt=null;for(dt in o){var yt=o[dt];if(o.hasOwnProperty(dt)&&yt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":W=yt;default:u.hasOwnProperty(dt)||cn(n,r,dt,null,u,yt)}}for(var ft in u){var dt=u[ft];if(yt=o[ft],u.hasOwnProperty(ft)&&(dt!=null||yt!=null))switch(ft){case"type":m=dt;break;case"name":p=dt;break;case"checked":ot=dt;break;case"defaultChecked":xt=dt;break;case"value":b=dt;break;case"defaultValue":N=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(i(137,r));break;default:dt!==yt&&cn(n,r,ft,dt,u,yt)}}wi(n,b,N,W,ot,xt,m,p);return;case"select":dt=b=N=ft=null;for(m in o)if(W=o[m],o.hasOwnProperty(m)&&W!=null)switch(m){case"value":break;case"multiple":dt=W;default:u.hasOwnProperty(m)||cn(n,r,m,null,u,W)}for(p in u)if(m=u[p],W=o[p],u.hasOwnProperty(p)&&(m!=null||W!=null))switch(p){case"value":ft=m;break;case"defaultValue":N=m;break;case"multiple":b=m;default:m!==W&&cn(n,r,p,m,u,W)}r=N,o=b,u=dt,ft!=null?ar(n,!!o,ft,!1):!!u!=!!o&&(r!=null?ar(n,!!o,r,!0):ar(n,!!o,o?[]:"",!1));return;case"textarea":dt=ft=null;for(N in o)if(p=o[N],o.hasOwnProperty(N)&&p!=null&&!u.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:cn(n,r,N,null,u,p)}for(b in u)if(p=u[b],m=o[b],u.hasOwnProperty(b)&&(p!=null||m!=null))switch(b){case"value":ft=p;break;case"defaultValue":dt=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(i(91));break;default:p!==m&&cn(n,r,b,p,u,m)}tn(n,ft,dt);return;case"option":for(var $t in o)ft=o[$t],o.hasOwnProperty($t)&&ft!=null&&!u.hasOwnProperty($t)&&($t==="selected"?n.selected=!1:cn(n,r,$t,null,u,ft));for(W in u)ft=u[W],dt=o[W],u.hasOwnProperty(W)&&ft!==dt&&(ft!=null||dt!=null)&&(W==="selected"?n.selected=ft&&typeof ft!="function"&&typeof ft!="symbol":cn(n,r,W,ft,u,dt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in o)ft=o[fe],o.hasOwnProperty(fe)&&ft!=null&&!u.hasOwnProperty(fe)&&cn(n,r,fe,null,u,ft);for(ot in u)if(ft=u[ot],dt=o[ot],u.hasOwnProperty(ot)&&ft!==dt&&(ft!=null||dt!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(i(137,r));break;default:cn(n,r,ot,ft,u,dt)}return;default:if(Yo(r)){for(var fn in o)ft=o[fn],o.hasOwnProperty(fn)&&ft!==void 0&&!u.hasOwnProperty(fn)&&Pm(n,r,fn,void 0,u,ft);for(xt in u)ft=u[xt],dt=o[xt],!u.hasOwnProperty(xt)||ft===dt||ft===void 0&&dt===void 0||Pm(n,r,xt,ft,u,dt);return}}for(var et in o)ft=o[et],o.hasOwnProperty(et)&&ft!=null&&!u.hasOwnProperty(et)&&cn(n,r,et,null,u,ft);for(yt in u)ft=u[yt],dt=o[yt],!u.hasOwnProperty(yt)||ft===dt||ft==null&&dt==null||cn(n,r,yt,ft,u,dt)}function fy(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TA(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var p=o[u],m=p.transferSize,b=p.initiatorType,N=p.duration;if(m&&N&&fy(b)){for(b=0,N=p.responseEnd,u+=1;u<o.length;u++){var W=o[u],ot=W.startTime;if(ot>N)break;var xt=W.transferSize,yt=W.initiatorType;xt&&fy(yt)&&(W=W.responseEnd,b+=xt*(W<N?1:(N-ot)/(W-ot)))}if(--u,r+=8*(m+b)/(p.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var zm=null,Fm=null;function oh(n){return n.nodeType===9?n:n.ownerDocument}function hy(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dy(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Bm(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Im=null;function bA(){var n=window.event;return n&&n.type==="popstate"?n===Im?!1:(Im=n,!0):(Im=null,!1)}var py=typeof setTimeout=="function"?setTimeout:void 0,AA=typeof clearTimeout=="function"?clearTimeout:void 0,my=typeof Promise=="function"?Promise:void 0,CA=typeof queueMicrotask=="function"?queueMicrotask:typeof my<"u"?function(n){return my.resolve(null).then(n).catch(RA)}:py;function RA(n){setTimeout(function(){throw n})}function Es(n){return n==="head"}function _y(n,r){var o=r,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(u===0){n.removeChild(p),El(r);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")$u(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,$u(o);for(var m=o.firstChild;m;){var b=m.nextSibling,N=m.nodeName;m[gn]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=b}}else o==="body"&&$u(n.ownerDocument.body);o=p}while(o);El(r)}function gy(n,r){var o=n;n=0;do{var u=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=u}while(o)}function Hm(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Hm(o),bn(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function wA(n,r,o,u){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[gn])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=zr(n.nextSibling),n===null)break}return null}function DA(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=zr(n.nextSibling),n===null))return null;return n}function vy(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=zr(n.nextSibling),n===null))return null;return n}function Vm(n){return n.data==="$?"||n.data==="$~"}function Gm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function UA(n,r){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||o.readyState!=="loading")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function zr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var km=null;function xy(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(r===0)return zr(n.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}n=n.nextSibling}return null}function Sy(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return n;r--}else o!=="/$"&&o!=="/&"||r++}n=n.previousSibling}return null}function yy(n,r,o){switch(r=oh(o),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function $u(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);bn(n)}var Fr=new Map,My=new Set;function lh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ka=F.d;F.d={f:LA,r:NA,D:OA,C:PA,L:zA,m:FA,X:IA,S:BA,M:HA};function LA(){var n=ka.f(),r=$f();return n||r}function NA(n){var r=_i(n);r!==null&&r.tag===5&&r.type==="form"?Ix(r):ka.r(n)}var Sl=typeof document>"u"?null:document;function Ey(n,r,o){var u=Sl;if(u&&typeof r=="string"&&r){var p=ve(r);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),My.has(p)||(My.add(p),n={rel:n,crossOrigin:o,href:r},u.querySelector(p)===null&&(r=u.createElement("link"),fi(r,"link",n),q(r),u.head.appendChild(r)))}}function OA(n){ka.D(n),Ey("dns-prefetch",n,null)}function PA(n,r){ka.C(n,r),Ey("preconnect",n,r)}function zA(n,r,o){ka.L(n,r,o);var u=Sl;if(u&&n&&r){var p='link[rel="preload"][as="'+ve(r)+'"]';r==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+ve(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+ve(o.imageSizes)+'"]')):p+='[href="'+ve(n)+'"]';var m=p;switch(r){case"style":m=yl(n);break;case"script":m=Ml(n)}Fr.has(m)||(n=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),Fr.set(m,n),u.querySelector(p)!==null||r==="style"&&u.querySelector(tc(m))||r==="script"&&u.querySelector(ec(m))||(r=u.createElement("link"),fi(r,"link",n),q(r),u.head.appendChild(r)))}}function FA(n,r){ka.m(n,r);var o=Sl;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+ve(u)+'"][href="'+ve(n)+'"]',m=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ml(n)}if(!Fr.has(m)&&(n=v({rel:"modulepreload",href:n},r),Fr.set(m,n),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ec(m)))return}u=o.createElement("link"),fi(u,"link",n),q(u),o.head.appendChild(u)}}}function BA(n,r,o){ka.S(n,r,o);var u=Sl;if(u&&n){var p=U(u).hoistableStyles,m=yl(n);r=r||"default";var b=p.get(m);if(!b){var N={loading:0,preload:null};if(b=u.querySelector(tc(m)))N.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":r},o),(o=Fr.get(m))&&Xm(n,o);var W=b=u.createElement("link");q(W),fi(W,"link",n),W._p=new Promise(function(ot,xt){W.onload=ot,W.onerror=xt}),W.addEventListener("load",function(){N.loading|=1}),W.addEventListener("error",function(){N.loading|=2}),N.loading|=4,uh(b,r,u)}b={type:"stylesheet",instance:b,count:1,state:N},p.set(m,b)}}}function IA(n,r){ka.X(n,r);var o=Sl;if(o&&n){var u=U(o).hoistableScripts,p=Ml(n),m=u.get(p);m||(m=o.querySelector(ec(p)),m||(n=v({src:n,async:!0},r),(r=Fr.get(p))&&Wm(n,r),m=o.createElement("script"),q(m),fi(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(p,m))}}function HA(n,r){ka.M(n,r);var o=Sl;if(o&&n){var u=U(o).hoistableScripts,p=Ml(n),m=u.get(p);m||(m=o.querySelector(ec(p)),m||(n=v({src:n,async:!0,type:"module"},r),(r=Fr.get(p))&&Wm(n,r),m=o.createElement("script"),q(m),fi(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(p,m))}}function Ty(n,r,o,u){var p=(p=it.current)?lh(p):null;if(!p)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=yl(o.href),o=U(p).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=yl(o.href);var m=U(p).hoistableStyles,b=m.get(n);if(b||(p=p.ownerDocument||p,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,b),(m=p.querySelector(tc(n)))&&!m._p&&(b.instance=m,b.state.loading=5),Fr.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Fr.set(n,o),m||VA(p,n,o,b.state))),r&&u===null)throw Error(i(528,""));return b}if(r&&u!==null)throw Error(i(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ml(o),o=U(p).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function yl(n){return'href="'+ve(n)+'"'}function tc(n){return'link[rel="stylesheet"]['+n+"]"}function by(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function VA(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),fi(r,"link",o),q(r),n.head.appendChild(r))}function Ml(n){return'[src="'+ve(n)+'"]'}function ec(n){return"script[async]"+n}function Ay(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+ve(o.href)+'"]');if(u)return r.instance=u,q(u),u;var p=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),q(u),fi(u,"style",p),uh(u,o.precedence,n),r.instance=u;case"stylesheet":p=yl(o.href);var m=n.querySelector(tc(p));if(m)return r.state.loading|=4,r.instance=m,q(m),m;u=by(o),(p=Fr.get(p))&&Xm(u,p),m=(n.ownerDocument||n).createElement("link"),q(m);var b=m;return b._p=new Promise(function(N,W){b.onload=N,b.onerror=W}),fi(m,"link",u),r.state.loading|=4,uh(m,o.precedence,n),r.instance=m;case"script":return m=Ml(o.src),(p=n.querySelector(ec(m)))?(r.instance=p,q(p),p):(u=o,(p=Fr.get(m))&&(u=v({},o),Wm(u,p)),n=n.ownerDocument||n,p=n.createElement("script"),q(p),fi(p,"link",u),n.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,uh(u,o.precedence,n));return r.instance}function uh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,m=p,b=0;b<u.length;b++){var N=u[b];if(N.dataset.precedence===r)m=N;else if(m!==p)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function Xm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Wm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var ch=null;function Cy(n,r,o){if(ch===null){var u=new Map,p=ch=new Map;p.set(o,u)}else p=ch,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var m=o[p];if(!(m[gn]||m[be]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(r)||"";b=n+b;var N=u.get(b);N?N.push(m):u.set(b,[m])}}return u}function Ry(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function GA(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function wy(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function kA(n,r,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=yl(u.href),m=r.querySelector(tc(p));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=fh.bind(n),r.then(n,n)),o.state.loading|=4,o.instance=m,q(m);return}m=r.ownerDocument||r,u=by(u),(p=Fr.get(p))&&Xm(u,p),m=m.createElement("link"),q(m);var b=m;b._p=new Promise(function(N,W){b.onload=N,b.onerror=W}),fi(m,"link",u),o.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=fh.bind(n),r.addEventListener("load",o),r.addEventListener("error",o))}}var Ym=0;function XA(n,r){return n.stylesheets&&n.count===0&&dh(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var u=setTimeout(function(){if(n.stylesheets&&dh(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+r);0<n.imgBytes&&Ym===0&&(Ym=62500*TA());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&dh(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Ym?50:800)+r);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(u),clearTimeout(p)}}:null}function fh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var hh=null;function dh(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,hh=new Map,r.forEach(WA,n),hh=null,fh.call(n))}function WA(n,r){if(!(r.state.loading&4)){var o=hh.get(n);if(o)var u=o.get(null);else{o=new Map,hh.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<p.length;m++){var b=p[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),u=b)}u&&o.set(null,u)}p=r.instance,b=p.getAttribute("data-precedence"),m=o.get(b)||u,m===u&&o.set(null,p),o.set(b,p),this.count++,u=fh.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),m?m.parentNode.insertBefore(p,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),r.state.loading|=4}}var nc={$$typeof:D,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function YA(n,r,o,u,p,m,b,N,W){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.hiddenUpdates=Vt(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function Dy(n,r,o,u,p,m,b,N,W,ot,xt,yt){return n=new YA(n,r,o,b,W,ot,xt,yt,N),r=1,m===!0&&(r|=24),m=or(3,null,null,r),n.current=m,m.stateNode=n,r=bp(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},wp(m),n}function Uy(n){return n?(n=$o,n):$o}function Ly(n,r,o,u,p,m){p=Uy(p),u.context===null?u.context=p:u.pendingContext=p,u=hs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ds(n,u,r),o!==null&&(qi(o,n,r),Ou(o,n,r))}function Ny(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function qm(n,r){Ny(n,r),(n=n.alternate)&&Ny(n,r)}function Oy(n){if(n.tag===13||n.tag===31){var r=eo(n,67108864);r!==null&&qi(r,n,67108864),qm(n,67108864)}}function Py(n){if(n.tag===13||n.tag===31){var r=hr();r=de(r);var o=eo(n,r);o!==null&&qi(o,n,r),qm(n,r)}}var ph=!0;function qA(n,r,o,u){var p=z.T;z.T=null;var m=F.p;try{F.p=2,Zm(n,r,o,u)}finally{F.p=m,z.T=p}}function ZA(n,r,o,u){var p=z.T;z.T=null;var m=F.p;try{F.p=8,Zm(n,r,o,u)}finally{F.p=m,z.T=p}}function Zm(n,r,o,u){if(ph){var p=jm(u);if(p===null)Om(n,r,u,mh,o),Fy(n,u);else if(QA(p,n,r,o,u))u.stopPropagation();else if(Fy(n,u),r&4&&-1<jA.indexOf(n)){for(;p!==null;){var m=_i(p);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Et(m.pendingLanes);if(b!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;b;){var W=1<<31-Ot(b);N.entanglements[1]|=W,b&=~W}ua(m),(Je&6)===0&&(Kf=R()+500,Qu(0))}}break;case 31:case 13:N=eo(m,2),N!==null&&qi(N,m,2),$f(),qm(m,2)}if(m=jm(u),m===null&&Om(n,r,u,mh,o),m===p)break;p=m}p!==null&&u.stopPropagation()}else Om(n,r,u,null,o)}}function jm(n){return n=Kd(n),Qm(n)}var mh=null;function Qm(n){if(mh=null,n=vn(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===31){if(n=f(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return mh=n,null}function zy(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case _t:return 2;case gt:return 8;case ht:case Ht:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Km=!1,Ts=null,bs=null,As=null,ic=new Map,rc=new Map,Cs=[],jA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fy(n,r){switch(n){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":bs=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":ic.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":rc.delete(r.pointerId)}}function ac(n,r,o,u,p,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[p]},r!==null&&(r=_i(r),r!==null&&Oy(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function QA(n,r,o,u,p){switch(r){case"focusin":return Ts=ac(Ts,n,r,o,u,p),!0;case"dragenter":return bs=ac(bs,n,r,o,u,p),!0;case"mouseover":return As=ac(As,n,r,o,u,p),!0;case"pointerover":var m=p.pointerId;return ic.set(m,ac(ic.get(m)||null,n,r,o,u,p)),!0;case"gotpointercapture":return m=p.pointerId,rc.set(m,ac(rc.get(m)||null,n,r,o,u,p)),!0}return!1}function By(n){var r=vn(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,sn(n.priority,function(){Py(o)});return}}else if(r===31){if(r=f(o),r!==null){n.blockedOn=r,sn(n.priority,function(){Py(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _h(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=jm(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Qd=u,o.target.dispatchEvent(u),Qd=null}else return r=_i(o),r!==null&&Oy(r),n.blockedOn=o,!1;r.shift()}return!0}function Iy(n,r,o){_h(n)&&o.delete(r)}function KA(){Km=!1,Ts!==null&&_h(Ts)&&(Ts=null),bs!==null&&_h(bs)&&(bs=null),As!==null&&_h(As)&&(As=null),ic.forEach(Iy),rc.forEach(Iy)}function gh(n,r){n.blockedOn===r&&(n.blockedOn=null,Km||(Km=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,KA)))}var vh=null;function Hy(n){vh!==n&&(vh=n,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vh===n&&(vh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],p=n[r+2];if(typeof u!="function"){if(Qm(u||o)===null)continue;break}var m=_i(o);m!==null&&(n.splice(r,3),r-=3,jp(m,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function El(n){function r(W){return gh(W,n)}Ts!==null&&gh(Ts,n),bs!==null&&gh(bs,n),As!==null&&gh(As,n),ic.forEach(r),rc.forEach(r);for(var o=0;o<Cs.length;o++){var u=Cs[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Cs.length&&(o=Cs[0],o.blockedOn===null);)By(o),o.blockedOn===null&&Cs.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],m=o[u+1],b=p[Se]||null;if(typeof m=="function")b||Hy(o);else if(b){var N=null;if(m&&m.hasAttribute("formAction")){if(p=m,b=m[Se]||null)N=b.formAction;else if(Qm(p)!==null)continue}else N=b.action;typeof N=="function"?o[u+1]=N:(o.splice(u,3),u-=3),Hy(o)}}}function Vy(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return p=b})},focusReset:"manual",scroll:"manual"})}function r(){p!==null&&(p(),p=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),p!==null&&(p(),p=null)}}}function Jm(n){this._internalRoot=n}xh.prototype.render=Jm.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var o=r.current,u=hr();Ly(o,u,n,r,null,null)},xh.prototype.unmount=Jm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ly(n.current,2,null,n,null,null),$f(),r[Pe]=null}};function xh(n){this._internalRoot=n}xh.prototype.unstable_scheduleHydration=function(n){if(n){var r=ge();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Cs.length&&r!==0&&r<Cs[o].priority;o++);Cs.splice(o,0,n),o===0&&By(n)}};var Gy=t.version;if(Gy!=="19.2.4")throw Error(i(527,Gy,"19.2.4"));F.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=d(r),n=n!==null?_(n):null,n=n===null?null:n.stateNode,n};var JA={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sh.isDisabled&&Sh.supportsFiber)try{At=Sh.inject(JA),bt=Sh}catch{}}return oc.createRoot=function(n,r){if(!a(n))throw Error(i(299));var o=!1,u="",p=jx,m=Qx,b=Kx;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError)),r=Dy(n,1,!1,null,null,o,u,null,p,m,b,Vy),n[Pe]=r.current,Nm(n),new Jm(r)},oc.hydrateRoot=function(n,r,o){if(!a(n))throw Error(i(299));var u=!1,p="",m=jx,b=Qx,N=Kx,W=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(N=o.onRecoverableError),o.formState!==void 0&&(W=o.formState)),r=Dy(n,1,!0,r,o??null,u,p,W,m,b,N,Vy),r.context=Uy(null),o=r.current,u=hr(),u=de(u),p=hs(u),p.callback=null,ds(o,p,u),o=u,r.current.lanes=o,Jt(r,o),ua(r),n[Pe]=r.current,Nm(n),new xh(r)},oc.version="19.2.4",oc}var Jy;function lC(){if(Jy)return e_.exports;Jy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),e_.exports=oC(),e_.exports}var uC=lC();const M0="183",cC=0,$y=1,fC=2,ld=1,hC=2,vc=3,Ys=0,Hi=1,ia=2,Sa=0,Yl=1,ql=2,tM=3,eM=4,dC=5,Co=100,pC=101,mC=102,_C=103,gC=104,vC=200,xC=201,SC=202,yC=203,ng=204,ig=205,MC=206,EC=207,TC=208,bC=209,AC=210,CC=211,RC=212,wC=213,DC=214,rg=0,ag=1,sg=2,eu=3,og=4,lg=5,ug=6,cg=7,B1=0,UC=1,LC=2,ya=0,I1=1,H1=2,V1=3,E0=4,G1=5,k1=6,X1=7,W1=300,Ho=301,nu=302,a_=303,s_=304,Vd=306,fg=1e3,Ja=1001,hg=1002,hi=1003,NC=1004,yh=1005,bi=1006,o_=1007,wo=1008,Xr=1009,Y1=1010,q1=1011,Xc=1012,T0=1013,Ea=1014,_a=1015,Er=1016,b0=1017,A0=1018,Wc=1020,Z1=35902,j1=35899,Q1=1021,K1=1022,aa=1023,ns=1026,Do=1027,J1=1028,C0=1029,iu=1030,R0=1031,w0=1033,ud=33776,cd=33777,fd=33778,hd=33779,dg=35840,pg=35841,mg=35842,_g=35843,gg=36196,vg=37492,xg=37496,Sg=37488,yg=37489,Mg=37490,Eg=37491,Tg=37808,bg=37809,Ag=37810,Cg=37811,Rg=37812,wg=37813,Dg=37814,Ug=37815,Lg=37816,Ng=37817,Og=37818,Pg=37819,zg=37820,Fg=37821,Bg=36492,Ig=36494,Hg=36495,Vg=36283,Gg=36284,kg=36285,Xg=36286,OC=3200,PC=0,zC=1,zs="",Hr="srgb",ru="srgb-linear",Td="linear",an="srgb",Tl=7680,nM=519,FC=512,BC=513,IC=514,D0=515,HC=516,VC=517,U0=518,GC=519,iM=35044,rM="300 es",ga=2e3,bd=2001;function kC(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ad(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function XC(){const s=Ad("canvas");return s.style.display="block",s}const aM={};function sM(...s){const t="THREE."+s.shift();console.log(t,...s)}function $1(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xe(...s){s=$1(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ke(...s){s=$1(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Cd(...s){const t=s.join(" ");t in aM||(aM[t]=!0,xe(...s))}function WC(s,t,e){return new Promise(function(i,a){function l(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}const YC={[rg]:ag,[sg]:ug,[og]:cg,[eu]:lg,[ag]:rg,[ug]:sg,[cg]:og,[lg]:eu};class mu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const l=a.indexOf(e);l!==-1&&a.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,t);t.target=null}}}const vi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],l_=Math.PI/180,Wg=180/Math.PI;function _u(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vi[s&255]+vi[s>>8&255]+vi[s>>16&255]+vi[s>>24&255]+"-"+vi[t&255]+vi[t>>8&255]+"-"+vi[t>>16&15|64]+vi[t>>24&255]+"-"+vi[e&63|128]+vi[e>>8&255]+"-"+vi[e>>16&255]+vi[e>>24&255]+vi[i&255]+vi[i>>8&255]+vi[i>>16&255]+vi[i>>24&255]).toLowerCase()}function Be(s,t,e){return Math.max(t,Math.min(e,s))}function qC(s,t){return(s%t+t)%t}function u_(s,t,e){return(1-e)*s+e*t}function lc(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Be(this.x,t.x,e.x),this.y=Be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Be(this.x,t,e),this.y=Be(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),l=this.x-t.x,c=this.y-t.y;return this.x=l*i-c*a+t.x,this.y=l*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gu{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,l,c,f){let h=i[a+0],d=i[a+1],_=i[a+2],v=i[a+3],g=l[c+0],x=l[c+1],y=l[c+2],E=l[c+3];if(v!==E||h!==g||d!==x||_!==y){let S=h*g+d*x+_*y+v*E;S<0&&(g=-g,x=-x,y=-y,E=-E,S=-S);let M=1-f;if(S<.9995){const A=Math.acos(S),D=Math.sin(A);M=Math.sin(M*A)/D,f=Math.sin(f*A)/D,h=h*M+g*f,d=d*M+x*f,_=_*M+y*f,v=v*M+E*f}else{h=h*M+g*f,d=d*M+x*f,_=_*M+y*f,v=v*M+E*f;const A=1/Math.sqrt(h*h+d*d+_*_+v*v);h*=A,d*=A,_*=A,v*=A}}t[e]=h,t[e+1]=d,t[e+2]=_,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,a,l,c){const f=i[a],h=i[a+1],d=i[a+2],_=i[a+3],v=l[c],g=l[c+1],x=l[c+2],y=l[c+3];return t[e]=f*y+_*v+h*x-d*g,t[e+1]=h*y+_*g+d*v-f*x,t[e+2]=d*y+_*x+f*g-h*v,t[e+3]=_*y-f*v-h*g-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,l=t._z,c=t._order,f=Math.cos,h=Math.sin,d=f(i/2),_=f(a/2),v=f(l/2),g=h(i/2),x=h(a/2),y=h(l/2);switch(c){case"XYZ":this._x=g*_*v+d*x*y,this._y=d*x*v-g*_*y,this._z=d*_*y+g*x*v,this._w=d*_*v-g*x*y;break;case"YXZ":this._x=g*_*v+d*x*y,this._y=d*x*v-g*_*y,this._z=d*_*y-g*x*v,this._w=d*_*v+g*x*y;break;case"ZXY":this._x=g*_*v-d*x*y,this._y=d*x*v+g*_*y,this._z=d*_*y+g*x*v,this._w=d*_*v-g*x*y;break;case"ZYX":this._x=g*_*v-d*x*y,this._y=d*x*v+g*_*y,this._z=d*_*y-g*x*v,this._w=d*_*v+g*x*y;break;case"YZX":this._x=g*_*v+d*x*y,this._y=d*x*v+g*_*y,this._z=d*_*y-g*x*v,this._w=d*_*v-g*x*y;break;case"XZY":this._x=g*_*v-d*x*y,this._y=d*x*v-g*_*y,this._z=d*_*y+g*x*v,this._w=d*_*v+g*x*y;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],l=e[8],c=e[1],f=e[5],h=e[9],d=e[2],_=e[6],v=e[10],g=i+f+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-h)*x,this._y=(l-d)*x,this._z=(c-a)*x}else if(i>f&&i>v){const x=2*Math.sqrt(1+i-f-v);this._w=(_-h)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(l+d)/x}else if(f>v){const x=2*Math.sqrt(1+f-i-v);this._w=(l-d)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(h+_)/x}else{const x=2*Math.sqrt(1+v-i-f);this._w=(c-a)/x,this._x=(l+d)/x,this._y=(h+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,l=t._z,c=t._w,f=e._x,h=e._y,d=e._z,_=e._w;return this._x=i*_+c*f+a*d-l*h,this._y=a*_+c*h+l*f-i*d,this._z=l*_+c*d+i*h-a*f,this._w=c*_-i*f-a*h-l*d,this._onChangeCallback(),this}slerp(t,e){let i=t._x,a=t._y,l=t._z,c=t._w,f=this.dot(t);f<0&&(i=-i,a=-a,l=-l,c=-c,f=-f);let h=1-e;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);h=Math.sin(h*d)/_,e=Math.sin(e*d)/_,this._x=this._x*h+i*e,this._y=this._y*h+a*e,this._z=this._z*h+l*e,this._w=this._w*h+c*e,this._onChangeCallback()}else this._x=this._x*h+i*e,this._y=this._y*h+a*e,this._z=this._z*h+l*e,this._w=this._w*h+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,e=0,i=0){nt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oM.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oM.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*a,this.y=l[1]*e+l[4]*i+l[7]*a,this.z=l[2]*e+l[5]*i+l[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=t.elements,c=1/(l[3]*e+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*e+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*e+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,l=t.x,c=t.y,f=t.z,h=t.w,d=2*(c*a-f*i),_=2*(f*e-l*a),v=2*(l*i-c*e);return this.x=e+h*d+c*v-f*_,this.y=i+h*_+f*d-l*v,this.z=a+h*v+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*a,this.y=l[1]*e+l[5]*i+l[9]*a,this.z=l[2]*e+l[6]*i+l[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Be(this.x,t.x,e.x),this.y=Be(this.y,t.y,e.y),this.z=Be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Be(this.x,t,e),this.y=Be(this.y,t,e),this.z=Be(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,l=t.z,c=e.x,f=e.y,h=e.z;return this.x=a*h-l*f,this.y=l*c-i*h,this.z=i*f-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return c_.copy(this).projectOnVector(t),this.sub(c_)}reflect(t){return this.sub(c_.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const c_=new nt,oM=new gu;class we{constructor(t,e,i,a,l,c,f,h,d){we.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,f,h,d)}set(t,e,i,a,l,c,f,h,d){const _=this.elements;return _[0]=t,_[1]=a,_[2]=f,_[3]=e,_[4]=l,_[5]=h,_[6]=i,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],f=i[3],h=i[6],d=i[1],_=i[4],v=i[7],g=i[2],x=i[5],y=i[8],E=a[0],S=a[3],M=a[6],A=a[1],D=a[4],C=a[7],P=a[2],O=a[5],L=a[8];return l[0]=c*E+f*A+h*P,l[3]=c*S+f*D+h*O,l[6]=c*M+f*C+h*L,l[1]=d*E+_*A+v*P,l[4]=d*S+_*D+v*O,l[7]=d*M+_*C+v*L,l[2]=g*E+x*A+y*P,l[5]=g*S+x*D+y*O,l[8]=g*M+x*C+y*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],h=t[6],d=t[7],_=t[8];return e*c*_-e*f*d-i*l*_+i*f*h+a*l*d-a*c*h}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],h=t[6],d=t[7],_=t[8],v=_*c-f*d,g=f*h-_*l,x=d*l-c*h,y=e*v+i*g+a*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return t[0]=v*E,t[1]=(a*d-_*i)*E,t[2]=(f*i-a*c)*E,t[3]=g*E,t[4]=(_*e-a*h)*E,t[5]=(a*l-f*e)*E,t[6]=x*E,t[7]=(i*h-d*e)*E,t[8]=(c*e-i*l)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,l,c,f){const h=Math.cos(l),d=Math.sin(l);return this.set(i*h,i*d,-i*(h*c+d*f)+c+t,-a*d,a*h,-a*(-d*c+h*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(f_.makeScale(t,e)),this}rotate(t){return this.premultiply(f_.makeRotation(-t)),this}translate(t,e){return this.premultiply(f_.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const f_=new we,lM=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uM=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZC(){const s={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===an&&(a.r=ts(a.r),a.g=ts(a.g),a.b=ts(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===an&&(a.r=Zl(a.r),a.g=Zl(a.g),a.b=Zl(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===zs?Td:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Cd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Cd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ru]:{primaries:t,whitePoint:i,transfer:Td,toXYZ:lM,fromXYZ:uM,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Hr},outputColorSpaceConfig:{drawingBufferColorSpace:Hr}},[Hr]:{primaries:t,whitePoint:i,transfer:an,toXYZ:lM,fromXYZ:uM,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Hr}}}),s}const qe=ZC();function ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bl;class jC{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{bl===void 0&&(bl=Ad("canvas")),bl.width=t.width,bl.height=t.height;const a=bl.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=bl}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ad("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ts(l[c]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ts(e[i]/255)*255):e[i]=ts(e[i]);return{data:e,width:t.width,height:t.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QC=0;class L0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=_u(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(h_(a[c].image)):l.push(h_(a[c]))}else l=h_(a);i.url=l}return e||(t.images[this.uuid]=i),i}}function h_(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jC.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}let KC=0;const d_=new nt;class Vi extends mu{constructor(t=Vi.DEFAULT_IMAGE,e=Vi.DEFAULT_MAPPING,i=Ja,a=Ja,l=bi,c=wo,f=aa,h=Xr,d=Vi.DEFAULT_ANISOTROPY,_=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=_u(),this.name="",this.source=new L0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(d_).x}get height(){return this.source.getSize(d_).y}get depth(){return this.source.getSize(d_).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){xe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){xe(`Texture.setValues(): property '${e}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==W1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fg:t.x=t.x-Math.floor(t.x);break;case Ja:t.x=t.x<0?0:1;break;case hg:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fg:t.y=t.y-Math.floor(t.y);break;case Ja:t.y=t.y<0?0:1;break;case hg:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vi.DEFAULT_IMAGE=null;Vi.DEFAULT_MAPPING=W1;Vi.DEFAULT_ANISOTROPY=1;class Fn{constructor(t=0,e=0,i=0,a=1){Fn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*e+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*e+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*e+c[7]*i+c[11]*a+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,l;const h=t.elements,d=h[0],_=h[4],v=h[8],g=h[1],x=h[5],y=h[9],E=h[2],S=h[6],M=h[10];if(Math.abs(_-g)<.01&&Math.abs(v-E)<.01&&Math.abs(y-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+E)<.1&&Math.abs(y+S)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(d+1)/2,C=(x+1)/2,P=(M+1)/2,O=(_+g)/4,L=(v+E)/4,T=(y+S)/4;return D>C&&D>P?D<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(D),a=O/i,l=L/i):C>P?C<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),i=O/a,l=T/a):P<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(P),i=L/l,a=T/l),this.set(i,a,l,e),this}let A=Math.sqrt((S-y)*(S-y)+(v-E)*(v-E)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(S-y)/A,this.y=(v-E)/A,this.z=(g-_)/A,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Be(this.x,t.x,e.x),this.y=Be(this.y,t.y,e.y),this.z=Be(this.z,t.z,e.z),this.w=Be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Be(this.x,t,e),this.y=Be(this.y,t,e),this.z=Be(this.z,t,e),this.w=Be(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JC extends mu{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Fn(0,0,t,e),this.scissorTest=!1,this.viewport=new Fn(0,0,t,e),this.textures=[];const a={width:t,height:e,depth:i.depth},l=new Vi(a),c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new L0(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends JC{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class tE extends Vi{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $C extends Vi{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(t,e,i,a,l,c,f,h,d,_,v,g,x,y,E,S){Nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,f,h,d,_,v,g,x,y,E,S)}set(t,e,i,a,l,c,f,h,d,_,v,g,x,y,E,S){const M=this.elements;return M[0]=t,M[4]=e,M[8]=i,M[12]=a,M[1]=l,M[5]=c,M[9]=f,M[13]=h,M[2]=d,M[6]=_,M[10]=v,M[14]=g,M[3]=x,M[7]=y,M[11]=E,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,a=1/Al.setFromMatrixColumn(t,0).length(),l=1/Al.setFromMatrixColumn(t,1).length(),c=1/Al.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,l=t.z,c=Math.cos(i),f=Math.sin(i),h=Math.cos(a),d=Math.sin(a),_=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const g=c*_,x=c*v,y=f*_,E=f*v;e[0]=h*_,e[4]=-h*v,e[8]=d,e[1]=x+y*d,e[5]=g-E*d,e[9]=-f*h,e[2]=E-g*d,e[6]=y+x*d,e[10]=c*h}else if(t.order==="YXZ"){const g=h*_,x=h*v,y=d*_,E=d*v;e[0]=g+E*f,e[4]=y*f-x,e[8]=c*d,e[1]=c*v,e[5]=c*_,e[9]=-f,e[2]=x*f-y,e[6]=E+g*f,e[10]=c*h}else if(t.order==="ZXY"){const g=h*_,x=h*v,y=d*_,E=d*v;e[0]=g-E*f,e[4]=-c*v,e[8]=y+x*f,e[1]=x+y*f,e[5]=c*_,e[9]=E-g*f,e[2]=-c*d,e[6]=f,e[10]=c*h}else if(t.order==="ZYX"){const g=c*_,x=c*v,y=f*_,E=f*v;e[0]=h*_,e[4]=y*d-x,e[8]=g*d+E,e[1]=h*v,e[5]=E*d+g,e[9]=x*d-y,e[2]=-d,e[6]=f*h,e[10]=c*h}else if(t.order==="YZX"){const g=c*h,x=c*d,y=f*h,E=f*d;e[0]=h*_,e[4]=E-g*v,e[8]=y*v+x,e[1]=v,e[5]=c*_,e[9]=-f*_,e[2]=-d*_,e[6]=x*v+y,e[10]=g-E*v}else if(t.order==="XZY"){const g=c*h,x=c*d,y=f*h,E=f*d;e[0]=h*_,e[4]=-v,e[8]=d*_,e[1]=g*v+E,e[5]=c*_,e[9]=x*v-y,e[2]=y*v-x,e[6]=f*_,e[10]=E*v+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tR,t,eR)}lookAt(t,e,i){const a=this.elements;return dr.subVectors(t,e),dr.lengthSq()===0&&(dr.z=1),dr.normalize(),ws.crossVectors(i,dr),ws.lengthSq()===0&&(Math.abs(i.z)===1?dr.x+=1e-4:dr.z+=1e-4,dr.normalize(),ws.crossVectors(i,dr)),ws.normalize(),Mh.crossVectors(dr,ws),a[0]=ws.x,a[4]=Mh.x,a[8]=dr.x,a[1]=ws.y,a[5]=Mh.y,a[9]=dr.y,a[2]=ws.z,a[6]=Mh.z,a[10]=dr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],f=i[4],h=i[8],d=i[12],_=i[1],v=i[5],g=i[9],x=i[13],y=i[2],E=i[6],S=i[10],M=i[14],A=i[3],D=i[7],C=i[11],P=i[15],O=a[0],L=a[4],T=a[8],w=a[12],k=a[1],I=a[5],G=a[9],J=a[13],$=a[2],Q=a[6],z=a[10],F=a[14],tt=a[3],ct=a[7],V=a[11],B=a[15];return l[0]=c*O+f*k+h*$+d*tt,l[4]=c*L+f*I+h*Q+d*ct,l[8]=c*T+f*G+h*z+d*V,l[12]=c*w+f*J+h*F+d*B,l[1]=_*O+v*k+g*$+x*tt,l[5]=_*L+v*I+g*Q+x*ct,l[9]=_*T+v*G+g*z+x*V,l[13]=_*w+v*J+g*F+x*B,l[2]=y*O+E*k+S*$+M*tt,l[6]=y*L+E*I+S*Q+M*ct,l[10]=y*T+E*G+S*z+M*V,l[14]=y*w+E*J+S*F+M*B,l[3]=A*O+D*k+C*$+P*tt,l[7]=A*L+D*I+C*Q+P*ct,l[11]=A*T+D*G+C*z+P*V,l[15]=A*w+D*J+C*F+P*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],l=t[12],c=t[1],f=t[5],h=t[9],d=t[13],_=t[2],v=t[6],g=t[10],x=t[14],y=t[3],E=t[7],S=t[11],M=t[15],A=h*x-d*g,D=f*x-d*v,C=f*g-h*v,P=c*x-d*_,O=c*g-h*_,L=c*v-f*_;return e*(E*A-S*D+M*C)-i*(y*A-S*P+M*O)+a*(y*D-E*P+M*L)-l*(y*C-E*O+S*L)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],h=t[6],d=t[7],_=t[8],v=t[9],g=t[10],x=t[11],y=t[12],E=t[13],S=t[14],M=t[15],A=e*f-i*c,D=e*h-a*c,C=e*d-l*c,P=i*h-a*f,O=i*d-l*f,L=a*d-l*h,T=_*E-v*y,w=_*S-g*y,k=_*M-x*y,I=v*S-g*E,G=v*M-x*E,J=g*M-x*S,$=A*J-D*G+C*I+P*k-O*w+L*T;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/$;return t[0]=(f*J-h*G+d*I)*Q,t[1]=(a*G-i*J-l*I)*Q,t[2]=(E*L-S*O+M*P)*Q,t[3]=(g*O-v*L-x*P)*Q,t[4]=(h*k-c*J-d*w)*Q,t[5]=(e*J-a*k+l*w)*Q,t[6]=(S*C-y*L-M*D)*Q,t[7]=(_*L-g*C+x*D)*Q,t[8]=(c*G-f*k+d*T)*Q,t[9]=(i*k-e*G-l*T)*Q,t[10]=(y*O-E*C+M*A)*Q,t[11]=(v*C-_*O-x*A)*Q,t[12]=(f*w-c*I-h*T)*Q,t[13]=(e*I-i*w+a*T)*Q,t[14]=(E*D-y*P-S*A)*Q,t[15]=(_*P-v*D+g*A)*Q,this}scale(t){const e=this.elements,i=t.x,a=t.y,l=t.z;return e[0]*=i,e[4]*=a,e[8]*=l,e[1]*=i,e[5]*=a,e[9]*=l,e[2]*=i,e[6]*=a,e[10]*=l,e[3]*=i,e[7]*=a,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),l=1-i,c=t.x,f=t.y,h=t.z,d=l*c,_=l*f;return this.set(d*c+i,d*f-a*h,d*h+a*f,0,d*f+a*h,_*f+i,_*h-a*c,0,d*h-a*f,_*h+a*c,l*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,l,c){return this.set(1,i,l,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,l=e._x,c=e._y,f=e._z,h=e._w,d=l+l,_=c+c,v=f+f,g=l*d,x=l*_,y=l*v,E=c*_,S=c*v,M=f*v,A=h*d,D=h*_,C=h*v,P=i.x,O=i.y,L=i.z;return a[0]=(1-(E+M))*P,a[1]=(x+C)*P,a[2]=(y-D)*P,a[3]=0,a[4]=(x-C)*O,a[5]=(1-(g+M))*O,a[6]=(S+A)*O,a[7]=0,a[8]=(y+D)*L,a[9]=(S-A)*L,a[10]=(1-(g+E))*L,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const l=this.determinant();if(l===0)return i.set(1,1,1),e.identity(),this;let c=Al.set(a[0],a[1],a[2]).length();const f=Al.set(a[4],a[5],a[6]).length(),h=Al.set(a[8],a[9],a[10]).length();l<0&&(c=-c),$r.copy(this);const d=1/c,_=1/f,v=1/h;return $r.elements[0]*=d,$r.elements[1]*=d,$r.elements[2]*=d,$r.elements[4]*=_,$r.elements[5]*=_,$r.elements[6]*=_,$r.elements[8]*=v,$r.elements[9]*=v,$r.elements[10]*=v,e.setFromRotationMatrix($r),i.x=c,i.y=f,i.z=h,this}makePerspective(t,e,i,a,l,c,f=ga,h=!1){const d=this.elements,_=2*l/(e-t),v=2*l/(i-a),g=(e+t)/(e-t),x=(i+a)/(i-a);let y,E;if(h)y=l/(c-l),E=c*l/(c-l);else if(f===ga)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===bd)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,a,l,c,f=ga,h=!1){const d=this.elements,_=2/(e-t),v=2/(i-a),g=-(e+t)/(e-t),x=-(i+a)/(i-a);let y,E;if(h)y=1/(c-l),E=c/(c-l);else if(f===ga)y=-2/(c-l),E=-(c+l)/(c-l);else if(f===bd)y=-1/(c-l),E=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Al=new nt,$r=new Nn,tR=new nt(0,0,0),eR=new nt(1,1,1),ws=new nt,Mh=new nt,dr=new nt,cM=new Nn,fM=new gu;class is{constructor(t=0,e=0,i=0,a=is.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,l=a[0],c=a[4],f=a[8],h=a[1],d=a[5],_=a[9],v=a[2],g=a[6],x=a[10];switch(e){case"XYZ":this._y=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,x),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cM,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fM.setFromEuler(this),this.setFromQuaternion(fM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class eE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nR=0;const hM=new nt,Cl=new gu,Xa=new Nn,Eh=new nt,uc=new nt,iR=new nt,rR=new gu,dM=new nt(1,0,0),pM=new nt(0,1,0),mM=new nt(0,0,1),_M={type:"added"},aR={type:"removed"},Rl={type:"childadded",child:null},p_={type:"childremoved",child:null};class Ki extends mu{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nR++}),this.uuid=_u(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ki.DEFAULT_UP.clone();const t=new nt,e=new is,i=new gu,a=new nt(1,1,1);function l(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Nn},normalMatrix:{value:new we}}),this.matrix=new Nn,this.matrixWorld=new Nn,this.matrixAutoUpdate=Ki.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ki.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cl.setFromAxisAngle(t,e),this.quaternion.multiply(Cl),this}rotateOnWorldAxis(t,e){return Cl.setFromAxisAngle(t,e),this.quaternion.premultiply(Cl),this}rotateX(t){return this.rotateOnAxis(dM,t)}rotateY(t){return this.rotateOnAxis(pM,t)}rotateZ(t){return this.rotateOnAxis(mM,t)}translateOnAxis(t,e){return hM.copy(t).applyQuaternion(this.quaternion),this.position.add(hM.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dM,t)}translateY(t){return this.translateOnAxis(pM,t)}translateZ(t){return this.translateOnAxis(mM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xa.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Eh.copy(t):Eh.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),uc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xa.lookAt(uc,Eh,this.up):Xa.lookAt(Eh,uc,this.up),this.quaternion.setFromRotationMatrix(Xa),a&&(Xa.extractRotation(a.matrixWorld),Cl.setFromRotationMatrix(Xa),this.quaternion.premultiply(Cl.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ke("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_M),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(aR),p_.child=t,this.dispatchEvent(p_),p_.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_M),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uc,t,iR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uc,rR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,a=t.z,l=this.matrix.elements;l[12]+=e-l[0]*e-l[4]*i-l[8]*a,l[13]+=i-l[1]*e-l[5]*i-l[9]*a,l[14]+=a-l[2]*e-l[6]*i-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,_=h.length;d<_;d++){const v=h[d];l(t.shapes,v)}else l(t.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(t.materials,this.material[h]));a.material=f}else a.material=l(t.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(t.animations,h))}}if(e){const f=c(t.geometries),h=c(t.materials),d=c(t.textures),_=c(t.images),v=c(t.shapes),g=c(t.skeletons),x=c(t.animations),y=c(t.nodes);f.length>0&&(i.geometries=f),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),_.length>0&&(i.images=_),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=a,i;function c(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Ki.DEFAULT_UP=new nt(0,1,0);Ki.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ki.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Th extends Ki{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sR={type:"move"};class m_{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Th,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Th,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Th,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const E of t.hand.values()){const S=e.getJointPose(E,i),M=this._getHandJoint(d,E);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,y=.005;d.inputState.pinching&&g>x+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=x-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(sR)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Th;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const nE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},bh={h:0,s:0,l:0};function __(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ie{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Hr){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,a=qe.workingColorSpace){return this.r=t,this.g=e,this.b=i,qe.colorSpaceToWorking(this,a),this}setHSL(t,e,i,a=qe.workingColorSpace){if(t=qC(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,c=2*i-l;this.r=__(c,l,t+1/3),this.g=__(c,l,t),this.b=__(c,l,t-1/3)}return qe.colorSpaceToWorking(this,a),this}setStyle(t,e=Hr){function i(l){l!==void 0&&parseFloat(l)<1&&xe("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:xe("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(l,16),e);xe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Hr){const i=nE[t.toLowerCase()];return i!==void 0?this.setHex(i,e):xe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=Zl(t.r),this.g=Zl(t.g),this.b=Zl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hr){return qe.workingToColorSpace(xi.copy(this),t),Math.round(Be(xi.r*255,0,255))*65536+Math.round(Be(xi.g*255,0,255))*256+Math.round(Be(xi.b*255,0,255))}getHexString(t=Hr){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.workingToColorSpace(xi.copy(this),e);const i=xi.r,a=xi.g,l=xi.b,c=Math.max(i,a,l),f=Math.min(i,a,l);let h,d;const _=(f+c)/2;if(f===c)h=0,d=0;else{const v=c-f;switch(d=_<=.5?v/(c+f):v/(2-c-f),c){case i:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-i)/v+2;break;case l:h=(i-a)/v+4;break}h/=6}return t.h=h,t.s=d,t.l=_,t}getRGB(t,e=qe.workingColorSpace){return qe.workingToColorSpace(xi.copy(this),e),t.r=xi.r,t.g=xi.g,t.b=xi.b,t}getStyle(t=Hr){qe.workingToColorSpace(xi.copy(this),t);const e=xi.r,i=xi.g,a=xi.b;return t!==Hr?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+e,Ds.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ds),t.getHSL(bh);const i=u_(Ds.h,bh.h,e),a=u_(Ds.s,bh.s,e),l=u_(Ds.l,bh.l,e);return this.setHSL(i,a,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*a,this.g=l[1]*e+l[4]*i+l[7]*a,this.b=l[2]*e+l[5]*i+l[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xi=new Ie;Ie.NAMES=nE;class N0{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(t),this.density=e}clone(){return new N0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class oR extends Ki{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ta=new nt,Wa=new nt,g_=new nt,Ya=new nt,wl=new nt,Dl=new nt,gM=new nt,v_=new nt,x_=new nt,S_=new nt,y_=new Fn,M_=new Fn,E_=new Fn;class ra{constructor(t=new nt,e=new nt,i=new nt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),ta.subVectors(t,e),a.cross(ta);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(t,e,i,a,l){ta.subVectors(a,e),Wa.subVectors(i,e),g_.subVectors(t,e);const c=ta.dot(ta),f=ta.dot(Wa),h=ta.dot(g_),d=Wa.dot(Wa),_=Wa.dot(g_),v=c*d-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,x=(d*h-f*_)*g,y=(c*_-f*h)*g;return l.set(1-x-y,y,x)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(t,e,i,a,l,c,f,h){return this.getBarycoord(t,e,i,a,Ya)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ya.x),h.addScaledVector(c,Ya.y),h.addScaledVector(f,Ya.z),h)}static getInterpolatedAttribute(t,e,i,a,l,c){return y_.setScalar(0),M_.setScalar(0),E_.setScalar(0),y_.fromBufferAttribute(t,e),M_.fromBufferAttribute(t,i),E_.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(y_,l.x),c.addScaledVector(M_,l.y),c.addScaledVector(E_,l.z),c}static isFrontFacing(t,e,i,a){return ta.subVectors(i,e),Wa.subVectors(t,e),ta.cross(Wa).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ta.subVectors(this.c,this.b),Wa.subVectors(this.a,this.b),ta.cross(Wa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ra.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ra.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,l){return ra.getInterpolation(t,this.a,this.b,this.c,e,i,a,l)}containsPoint(t){return ra.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ra.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,l=this.c;let c,f;wl.subVectors(a,i),Dl.subVectors(l,i),v_.subVectors(t,i);const h=wl.dot(v_),d=Dl.dot(v_);if(h<=0&&d<=0)return e.copy(i);x_.subVectors(t,a);const _=wl.dot(x_),v=Dl.dot(x_);if(_>=0&&v<=_)return e.copy(a);const g=h*v-_*d;if(g<=0&&h>=0&&_<=0)return c=h/(h-_),e.copy(i).addScaledVector(wl,c);S_.subVectors(t,l);const x=wl.dot(S_),y=Dl.dot(S_);if(y>=0&&x<=y)return e.copy(l);const E=x*d-h*y;if(E<=0&&d>=0&&y<=0)return f=d/(d-y),e.copy(i).addScaledVector(Dl,f);const S=_*y-x*v;if(S<=0&&v-_>=0&&x-y>=0)return gM.subVectors(l,a),f=(v-_)/(v-_+(x-y)),e.copy(a).addScaledVector(gM,f);const M=1/(S+E+g);return c=E*M,f=g*M,e.copy(i).addScaledVector(wl,c).addScaledVector(Dl,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class sf{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ea.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ea.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ea.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,ea):ea.fromBufferAttribute(l,c),ea.applyMatrix4(t.matrixWorld),this.expandByPoint(ea);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ah.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ah.copy(i.boundingBox)),Ah.applyMatrix4(t.matrixWorld),this.union(Ah)}const a=t.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ea),ea.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cc),Ch.subVectors(this.max,cc),Ul.subVectors(t.a,cc),Ll.subVectors(t.b,cc),Nl.subVectors(t.c,cc),Us.subVectors(Ll,Ul),Ls.subVectors(Nl,Ll),mo.subVectors(Ul,Nl);let e=[0,-Us.z,Us.y,0,-Ls.z,Ls.y,0,-mo.z,mo.y,Us.z,0,-Us.x,Ls.z,0,-Ls.x,mo.z,0,-mo.x,-Us.y,Us.x,0,-Ls.y,Ls.x,0,-mo.y,mo.x,0];return!T_(e,Ul,Ll,Nl,Ch)||(e=[1,0,0,0,1,0,0,0,1],!T_(e,Ul,Ll,Nl,Ch))?!1:(Rh.crossVectors(Us,Ls),e=[Rh.x,Rh.y,Rh.z],T_(e,Ul,Ll,Nl,Ch))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ea).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ea).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qa=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],ea=new nt,Ah=new sf,Ul=new nt,Ll=new nt,Nl=new nt,Us=new nt,Ls=new nt,mo=new nt,cc=new nt,Ch=new nt,Rh=new nt,_o=new nt;function T_(s,t,e,i,a){for(let l=0,c=s.length-3;l<=c;l+=3){_o.fromArray(s,l);const f=a.x*Math.abs(_o.x)+a.y*Math.abs(_o.y)+a.z*Math.abs(_o.z),h=t.dot(_o),d=e.dot(_o),_=i.dot(_o);if(Math.max(-Math.max(h,d,_),Math.min(h,d,_))>f)return!1}return!0}const Yn=new nt,wh=new qt;let lR=0;class Tr{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lR++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=iM,this.updateRanges=[],this.gpuType=_a,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wh.fromBufferAttribute(this,e),wh.applyMatrix3(t),this.setXY(e,wh.x,wh.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Yn.fromBufferAttribute(this,e),Yn.applyMatrix3(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Yn.fromBufferAttribute(this,e),Yn.applyMatrix4(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Yn.fromBufferAttribute(this,e),Yn.applyNormalMatrix(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Yn.fromBufferAttribute(this,e),Yn.transformDirection(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=lc(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Zi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lc(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lc(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lc(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lc(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Zi(e,this.array),i=Zi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Zi(e,this.array),i=Zi(i,this.array),a=Zi(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,l){return t*=this.itemSize,this.normalized&&(e=Zi(e,this.array),i=Zi(i,this.array),a=Zi(a,this.array),l=Zi(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==iM&&(t.usage=this.usage),t}}class iE extends Tr{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class rE extends Tr{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class pi extends Tr{constructor(t,e,i){super(new Float32Array(t),e,i)}}const uR=new sf,fc=new nt,b_=new nt;class Gd{constructor(t=new nt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):uR.setFromPoints(t).getCenter(i);let a=0;for(let l=0,c=t.length;l<c;l++)a=Math.max(a,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fc.subVectors(t,this.center);const e=fc.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(fc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(b_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fc.copy(t.center).add(b_)),this.expandByPoint(fc.copy(t.center).sub(b_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cR=0;const Br=new Nn,A_=new Ki,Ol=new nt,pr=new sf,hc=new sf,ri=new nt;class ir extends mu{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cR++}),this.uuid=_u(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kC(t)?rE:iE)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new we().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Br.makeRotationFromQuaternion(t),this.applyMatrix4(Br),this}rotateX(t){return Br.makeRotationX(t),this.applyMatrix4(Br),this}rotateY(t){return Br.makeRotationY(t),this.applyMatrix4(Br),this}rotateZ(t){return Br.makeRotationZ(t),this.applyMatrix4(Br),this}translate(t,e,i){return Br.makeTranslation(t,e,i),this.applyMatrix4(Br),this}scale(t,e,i){return Br.makeScale(t,e,i),this.applyMatrix4(Br),this}lookAt(t){return A_.lookAt(t),A_.updateMatrix(),this.applyMatrix4(A_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ol).negate(),this.translate(Ol.x,Ol.y,Ol.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new pi(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const l=t[a];e.setXYZ(a,l.x,l.y,l.z||0)}t.length>e.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sf);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const l=e[i];pr.setFromBufferAttribute(l),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,pr.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,pr.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(pr.min),this.boundingBox.expandByPoint(pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gd);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const i=this.boundingSphere.center;if(pr.setFromBufferAttribute(t),e)for(let l=0,c=e.length;l<c;l++){const f=e[l];hc.setFromBufferAttribute(f),this.morphTargetsRelative?(ri.addVectors(pr.min,hc.min),pr.expandByPoint(ri),ri.addVectors(pr.max,hc.max),pr.expandByPoint(ri)):(pr.expandByPoint(hc.min),pr.expandByPoint(hc.max))}pr.getCenter(i);let a=0;for(let l=0,c=t.count;l<c;l++)ri.fromBufferAttribute(t,l),a=Math.max(a,i.distanceToSquared(ri));if(e)for(let l=0,c=e.length;l<c;l++){const f=e[l],h=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)ri.fromBufferAttribute(f,d),h&&(Ol.fromBufferAttribute(t,d),ri.add(Ol)),a=Math.max(a,i.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tr(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<i.count;T++)f[T]=new nt,h[T]=new nt;const d=new nt,_=new nt,v=new nt,g=new qt,x=new qt,y=new qt,E=new nt,S=new nt;function M(T,w,k){d.fromBufferAttribute(i,T),_.fromBufferAttribute(i,w),v.fromBufferAttribute(i,k),g.fromBufferAttribute(l,T),x.fromBufferAttribute(l,w),y.fromBufferAttribute(l,k),_.sub(d),v.sub(d),x.sub(g),y.sub(g);const I=1/(x.x*y.y-y.x*x.y);isFinite(I)&&(E.copy(_).multiplyScalar(y.y).addScaledVector(v,-x.y).multiplyScalar(I),S.copy(v).multiplyScalar(x.x).addScaledVector(_,-y.x).multiplyScalar(I),f[T].add(E),f[w].add(E),f[k].add(E),h[T].add(S),h[w].add(S),h[k].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,w=A.length;T<w;++T){const k=A[T],I=k.start,G=k.count;for(let J=I,$=I+G;J<$;J+=3)M(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const D=new nt,C=new nt,P=new nt,O=new nt;function L(T){P.fromBufferAttribute(a,T),O.copy(P);const w=f[T];D.copy(w),D.sub(P.multiplyScalar(P.dot(w))).normalize(),C.crossVectors(O,w);const I=C.dot(h[T])<0?-1:1;c.setXYZW(T,D.x,D.y,D.z,I)}for(let T=0,w=A.length;T<w;++T){const k=A[T],I=k.start,G=k.count;for(let J=I,$=I+G;J<$;J+=3)L(t.getX(J+0)),L(t.getX(J+1)),L(t.getX(J+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tr(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const a=new nt,l=new nt,c=new nt,f=new nt,h=new nt,d=new nt,_=new nt,v=new nt;if(t)for(let g=0,x=t.count;g<x;g+=3){const y=t.getX(g+0),E=t.getX(g+1),S=t.getX(g+2);a.fromBufferAttribute(e,y),l.fromBufferAttribute(e,E),c.fromBufferAttribute(e,S),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),f.fromBufferAttribute(i,y),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.add(_),h.add(_),d.add(_),i.setXYZ(y,f.x,f.y,f.z),i.setXYZ(E,h.x,h.y,h.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,x=e.count;g<x;g+=3)a.fromBufferAttribute(e,g+0),l.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),i.setXYZ(g+0,_.x,_.y,_.z),i.setXYZ(g+1,_.x,_.y,_.z),i.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ri.fromBufferAttribute(t,e),ri.normalize(),t.setXYZ(e,ri.x,ri.y,ri.z)}toNonIndexed(){function t(f,h){const d=f.array,_=f.itemSize,v=f.normalized,g=new d.constructor(h.length*_);let x=0,y=0;for(let E=0,S=h.length;E<S;E++){f.isInterleavedBufferAttribute?x=h[E]*f.data.stride+f.offset:x=h[E]*_;for(let M=0;M<_;M++)g[y++]=d[x++]}return new Tr(g,_,v)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ir,i=this.index.array,a=this.attributes;for(const f in a){const h=a[f],d=t(h,i);e.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let _=0,v=d.length;_<v;_++){const g=d[_],x=t(g,i);h.push(x)}e.morphAttributes[f]=h}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const d=c[f];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const d=i[h];t.data.attributes[h]=d.toJSON(t.data)}const a={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],_=[];for(let v=0,g=d.length;v<g;v++){const x=d[v];_.push(x.toJSON(t.data))}_.length>0&&(a[h]=_,l=!0)}l&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const d in a){const _=a[d];this.setAttribute(d,_.clone(e))}const l=t.morphAttributes;for(const d in l){const _=[],v=l[d];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(e));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fR=0;class of extends mu{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=_u(),this.name="",this.type="Material",this.blending=Yl,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ng,this.blendDst=ig,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=eu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tl,this.stencilZFail=Tl,this.stencilZPass=Tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){xe(`Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){xe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yl&&(i.blending=this.blending),this.side!==Ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ng&&(i.blendSrc=this.blendSrc),this.blendDst!==ig&&(i.blendDst=this.blendDst),this.blendEquation!==Co&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nM&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(e){const l=a(t.textures),c=a(t.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Za=new nt,C_=new nt,Dh=new nt,Ns=new nt,R_=new nt,Uh=new nt,w_=new nt;class aE{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Za)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Za.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Za.copy(this.origin).addScaledVector(this.direction,e),Za.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){C_.copy(t).add(e).multiplyScalar(.5),Dh.copy(e).sub(t).normalize(),Ns.copy(this.origin).sub(C_);const l=t.distanceTo(e)*.5,c=-this.direction.dot(Dh),f=Ns.dot(this.direction),h=-Ns.dot(Dh),d=Ns.lengthSq(),_=Math.abs(1-c*c);let v,g,x,y;if(_>0)if(v=c*h-f,g=c*f-h,y=l*_,v>=0)if(g>=-y)if(g<=y){const E=1/_;v*=E,g*=E,x=v*(v+c*g+2*f)+g*(c*v+g+2*h)+d}else g=l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*h)+d;else g=-l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*h)+d;else g<=-y?(v=Math.max(0,-(-c*l+f)),g=v>0?-l:Math.min(Math.max(-l,-h),l),x=-v*v+g*(g+2*h)+d):g<=y?(v=0,g=Math.min(Math.max(-l,-h),l),x=g*(g+2*h)+d):(v=Math.max(0,-(c*l+f)),g=v>0?l:Math.min(Math.max(-l,-h),l),x=-v*v+g*(g+2*h)+d);else g=c>0?-l:l,v=Math.max(0,-(c*g+f)),x=-v*v+g*(g+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(C_).addScaledVector(Dh,g),x}intersectSphere(t,e){Za.subVectors(t.center,this.origin);const i=Za.dot(this.direction),a=Za.dot(Za)-i*i,l=t.radius*t.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=i-c,h=i+c;return h<0?null:f<0?this.at(h,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,l,c,f,h;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(i=(t.min.x-g.x)*d,a=(t.max.x-g.x)*d):(i=(t.max.x-g.x)*d,a=(t.min.x-g.x)*d),_>=0?(l=(t.min.y-g.y)*_,c=(t.max.y-g.y)*_):(l=(t.max.y-g.y)*_,c=(t.min.y-g.y)*_),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(t.min.z-g.z)*v,h=(t.max.z-g.z)*v):(f=(t.max.z-g.z)*v,h=(t.min.z-g.z)*v),i>h||f>a)||((f>i||i!==i)&&(i=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,Za)!==null}intersectTriangle(t,e,i,a,l){R_.subVectors(e,t),Uh.subVectors(i,t),w_.crossVectors(R_,Uh);let c=this.direction.dot(w_),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Ns.subVectors(this.origin,t);const h=f*this.direction.dot(Uh.crossVectors(Ns,Uh));if(h<0)return null;const d=f*this.direction.dot(R_.cross(Ns));if(d<0||h+d>c)return null;const _=-f*Ns.dot(w_);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kd extends of{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=B1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vM=new Nn,go=new aE,Lh=new Gd,xM=new nt,Nh=new nt,Oh=new nt,Ph=new nt,D_=new nt,zh=new nt,SM=new nt,Fh=new nt;class br extends Ki{constructor(t=new ir,e=new kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const f=this.morphTargetInfluences;if(l&&f){zh.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const _=f[h],v=l[h];_!==0&&(D_.fromBufferAttribute(v,t),c?zh.addScaledVector(D_,_):zh.addScaledVector(D_.sub(e),_))}e.add(zh)}return e}raycast(t,e){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lh.copy(i.boundingSphere),Lh.applyMatrix4(l),go.copy(t.ray).recast(t.near),!(Lh.containsPoint(go.origin)===!1&&(go.intersectSphere(Lh,xM)===null||go.origin.distanceToSquared(xM)>(t.far-t.near)**2))&&(vM.copy(l).invert(),go.copy(t.ray).applyMatrix4(vM),!(i.boundingBox!==null&&go.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,go)))}_computeIntersections(t,e,i){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,g=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let y=0,E=g.length;y<E;y++){const S=g[y],M=c[S.materialIndex],A=Math.max(S.start,x.start),D=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=A,P=D;C<P;C+=3){const O=f.getX(C),L=f.getX(C+1),T=f.getX(C+2);a=Bh(this,M,t,i,d,_,v,O,L,T),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,e.push(a))}}else{const y=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=y,M=E;S<M;S+=3){const A=f.getX(S),D=f.getX(S+1),C=f.getX(S+2);a=Bh(this,c,t,i,d,_,v,A,D,C),a&&(a.faceIndex=Math.floor(S/3),e.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let y=0,E=g.length;y<E;y++){const S=g[y],M=c[S.materialIndex],A=Math.max(S.start,x.start),D=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let C=A,P=D;C<P;C+=3){const O=C,L=C+1,T=C+2;a=Bh(this,M,t,i,d,_,v,O,L,T),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,e.push(a))}}else{const y=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let S=y,M=E;S<M;S+=3){const A=S,D=S+1,C=S+2;a=Bh(this,c,t,i,d,_,v,A,D,C),a&&(a.faceIndex=Math.floor(S/3),e.push(a))}}}}function hR(s,t,e,i,a,l,c,f){let h;if(t.side===Hi?h=i.intersectTriangle(c,l,a,!0,f):h=i.intersectTriangle(a,l,c,t.side===Ys,f),h===null)return null;Fh.copy(f),Fh.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Fh);return d<e.near||d>e.far?null:{distance:d,point:Fh.clone(),object:s}}function Bh(s,t,e,i,a,l,c,f,h,d){s.getVertexPosition(f,Nh),s.getVertexPosition(h,Oh),s.getVertexPosition(d,Ph);const _=hR(s,t,e,i,Nh,Oh,Ph,SM);if(_){const v=new nt;ra.getBarycoord(SM,Nh,Oh,Ph,v),a&&(_.uv=ra.getInterpolatedAttribute(a,f,h,d,v,new qt)),l&&(_.uv1=ra.getInterpolatedAttribute(l,f,h,d,v,new qt)),c&&(_.normal=ra.getInterpolatedAttribute(c,f,h,d,v,new nt),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:h,c:d,normal:new nt,materialIndex:0};ra.getNormal(Nh,Oh,Ph,g.normal),_.face=g,_.barycoord=v}return _}class dR extends Vi{constructor(t=null,e=1,i=1,a,l,c,f,h,d=hi,_=hi,v,g){super(null,c,f,h,d,_,a,l,v,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const U_=new nt,pR=new nt,mR=new we;class Eo{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=U_.subVectors(i,e).cross(pR.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(U_),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||mR.getNormalMatrix(t),a=this.coplanarPoint(U_).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vo=new Gd,_R=new qt(.5,.5),Ih=new nt;class sE{constructor(t=new Eo,e=new Eo,i=new Eo,a=new Eo,l=new Eo,c=new Eo){this.planes=[t,e,i,a,l,c]}set(t,e,i,a,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ga,i=!1){const a=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],d=l[3],_=l[4],v=l[5],g=l[6],x=l[7],y=l[8],E=l[9],S=l[10],M=l[11],A=l[12],D=l[13],C=l[14],P=l[15];if(a[0].setComponents(d-c,x-_,M-y,P-A).normalize(),a[1].setComponents(d+c,x+_,M+y,P+A).normalize(),a[2].setComponents(d+f,x+v,M+E,P+D).normalize(),a[3].setComponents(d-f,x-v,M-E,P-D).normalize(),i)a[4].setComponents(h,g,S,C).normalize(),a[5].setComponents(d-h,x-g,M-S,P-C).normalize();else if(a[4].setComponents(d-h,x-g,M-S,P-C).normalize(),e===ga)a[5].setComponents(d+h,x+g,M+S,P+C).normalize();else if(e===bd)a[5].setComponents(h,g,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vo)}intersectsSprite(t){vo.center.set(0,0,0);const e=_R.distanceTo(t.center);return vo.radius=.7071067811865476+e,vo.applyMatrix4(t.matrixWorld),this.intersectsSphere(vo)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Ih.x=a.normal.x>0?t.max.x:t.min.x,Ih.y=a.normal.y>0?t.max.y:t.min.y,Ih.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Ih)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gR extends of{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yM=new Nn,Yg=new aE,Hh=new Gd,Vh=new nt;class vR extends Ki{constructor(t=new ir,e=new gR){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,l=t.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hh.copy(i.boundingSphere),Hh.applyMatrix4(a),Hh.radius+=l,t.ray.intersectsSphere(Hh)===!1)return;yM.copy(a).invert(),Yg.copy(t.ray).applyMatrix4(yM);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=i.index,v=i.attributes.position;if(d!==null){const g=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let y=g,E=x;y<E;y++){const S=d.getX(y);Vh.fromBufferAttribute(v,S),MM(Vh,S,h,a,t,e,this)}}else{const g=Math.max(0,c.start),x=Math.min(v.count,c.start+c.count);for(let y=g,E=x;y<E;y++)Vh.fromBufferAttribute(v,y),MM(Vh,y,h,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function MM(s,t,e,i,a,l,c){const f=Yg.distanceSqToPoint(s);if(f<e){const h=new nt;Yg.closestPointToPoint(s,h),h.applyMatrix4(i);const d=a.ray.origin.distanceTo(h);if(d<a.near||d>a.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class oE extends Vi{constructor(t=[],e=Ho,i,a,l,c,f,h,d,_){super(t,e,i,a,l,c,f,h,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yc extends Vi{constructor(t,e,i=Ea,a,l,c,f=hi,h=hi,d,_=ns,v=1){if(_!==ns&&_!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:v};super(g,a,l,c,f,h,_,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new L0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xR extends Yc{constructor(t,e=Ea,i=Ho,a,l,c=hi,f=hi,h,d=ns){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,e,i,a,l,c,f,h,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class lE extends Vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class lf extends ir{constructor(t=1,e=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],d=[],_=[],v=[];let g=0,x=0;y("z","y","x",-1,-1,i,e,t,c,l,0),y("z","y","x",1,-1,i,e,-t,c,l,1),y("x","z","y",1,1,t,i,e,a,c,2),y("x","z","y",1,-1,t,i,-e,a,c,3),y("x","y","z",1,-1,t,e,i,a,l,4),y("x","y","z",-1,-1,t,e,-i,a,l,5),this.setIndex(h),this.setAttribute("position",new pi(d,3)),this.setAttribute("normal",new pi(_,3)),this.setAttribute("uv",new pi(v,2));function y(E,S,M,A,D,C,P,O,L,T,w){const k=C/L,I=P/T,G=C/2,J=P/2,$=O/2,Q=L+1,z=T+1;let F=0,tt=0;const ct=new nt;for(let V=0;V<z;V++){const B=V*I-J;for(let K=0;K<Q;K++){const vt=K*k-G;ct[E]=vt*A,ct[S]=B*D,ct[M]=$,d.push(ct.x,ct.y,ct.z),ct[E]=0,ct[S]=0,ct[M]=O>0?1:-1,_.push(ct.x,ct.y,ct.z),v.push(K/L),v.push(1-V/T),F+=1}}for(let V=0;V<T;V++)for(let B=0;B<L;B++){const K=g+B+Q*V,vt=g+B+Q*(V+1),Tt=g+(B+1)+Q*(V+1),Dt=g+(B+1)+Q*V;h.push(K,vt,Dt),h.push(vt,Tt,Dt),tt+=6}f.addGroup(x,tt,w),x+=tt,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lf(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ba{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xe("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,a=this.getPoint(0),l=0;e.push(0);for(let c=1;c<=t;c++)i=this.getPoint(c/t),l+=i.distanceTo(a),e.push(l),a=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let a=0;const l=i.length;let c;e?c=e:c=t*i[l-1];let f=0,h=l-1,d;for(;f<=h;)if(a=Math.floor(f+(h-f)/2),d=i[a]-c,d<0)f=a+1;else if(d>0)h=a-1;else{h=a;break}if(a=h,i[a]===c)return a/(l-1);const _=i[a],g=i[a+1]-_,x=(c-_)/g;return(a+x)/(l-1)}getTangent(t,e){let a=t-1e-4,l=t+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),h=e||(c.isVector2?new qt:new nt);return h.copy(f).sub(c).normalize(),h}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new nt,a=[],l=[],c=[],f=new nt,h=new Nn;for(let x=0;x<=t;x++){const y=x/t;a[x]=this.getTangentAt(y,new nt)}l[0]=new nt,c[0]=new nt;let d=Number.MAX_VALUE;const _=Math.abs(a[0].x),v=Math.abs(a[0].y),g=Math.abs(a[0].z);_<=d&&(d=_,i.set(1,0,0)),v<=d&&(d=v,i.set(0,1,0)),g<=d&&i.set(0,0,1),f.crossVectors(a[0],i).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let x=1;x<=t;x++){if(l[x]=l[x-1].clone(),c[x]=c[x-1].clone(),f.crossVectors(a[x-1],a[x]),f.length()>Number.EPSILON){f.normalize();const y=Math.acos(Be(a[x-1].dot(a[x]),-1,1));l[x].applyMatrix4(h.makeRotationAxis(f,y))}c[x].crossVectors(a[x],l[x])}if(e===!0){let x=Math.acos(Be(l[0].dot(l[t]),-1,1));x/=t,a[0].dot(f.crossVectors(l[0],l[t]))>0&&(x=-x);for(let y=1;y<=t;y++)l[y].applyMatrix4(h.makeRotationAxis(a[y],x*y)),c[y].crossVectors(a[y],l[y])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class O0 extends ba{constructor(t=0,e=0,i=1,a=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(t,e=new qt){const i=e,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+t*l;let h=this.aX+this.xRadius*Math.cos(f),d=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=h-this.aX,x=d-this.aY;h=g*_-x*v+this.aX,d=g*v+x*_+this.aY}return i.set(h,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class SR extends O0{constructor(t,e,i,a,l,c){super(t,e,i,i,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function P0(){let s=0,t=0,e=0,i=0;function a(l,c,f,h){s=l,t=f,e=-3*l+3*c-2*f-h,i=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,d){a(c,f,d*(f-l),d*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,d,_,v){let g=(c-l)/d-(f-l)/(d+_)+(f-c)/_,x=(f-c)/_-(h-c)/(_+v)+(h-f)/v;g*=_,x*=_,a(c,f,g,x)},calc:function(l){const c=l*l,f=c*l;return s+t*l+e*c+i*f}}}const Gh=new nt,L_=new P0,N_=new P0,O_=new P0;class yR extends ba{constructor(t=[],e=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=a}getPoint(t,e=new nt){const i=e,a=this.points,l=a.length,c=(l-(this.closed?0:1))*t;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let d,_;this.closed||f>0?d=a[(f-1)%l]:(Gh.subVectors(a[0],a[1]).add(a[0]),d=Gh);const v=a[f%l],g=a[(f+1)%l];if(this.closed||f+2<l?_=a[(f+2)%l]:(Gh.subVectors(a[l-1],a[l-2]).add(a[l-1]),_=Gh),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let y=Math.pow(d.distanceToSquared(v),x),E=Math.pow(v.distanceToSquared(g),x),S=Math.pow(g.distanceToSquared(_),x);E<1e-4&&(E=1),y<1e-4&&(y=E),S<1e-4&&(S=E),L_.initNonuniformCatmullRom(d.x,v.x,g.x,_.x,y,E,S),N_.initNonuniformCatmullRom(d.y,v.y,g.y,_.y,y,E,S),O_.initNonuniformCatmullRom(d.z,v.z,g.z,_.z,y,E,S)}else this.curveType==="catmullrom"&&(L_.initCatmullRom(d.x,v.x,g.x,_.x,this.tension),N_.initCatmullRom(d.y,v.y,g.y,_.y,this.tension),O_.initCatmullRom(d.z,v.z,g.z,_.z,this.tension));return i.set(L_.calc(h),N_.calc(h),O_.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const a=t.points[e];this.points.push(a.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const a=this.points[e];t.points.push(a.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const a=t.points[e];this.points.push(new nt().fromArray(a))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function EM(s,t,e,i,a){const l=(i-t)*.5,c=(a-e)*.5,f=s*s,h=s*f;return(2*e-2*i+l+c)*h+(-3*e+3*i-2*l-c)*f+l*s+e}function MR(s,t){const e=1-s;return e*e*t}function ER(s,t){return 2*(1-s)*s*t}function TR(s,t){return s*s*t}function Rc(s,t,e,i){return MR(s,t)+ER(s,e)+TR(s,i)}function bR(s,t){const e=1-s;return e*e*e*t}function AR(s,t){const e=1-s;return 3*e*e*s*t}function CR(s,t){return 3*(1-s)*s*s*t}function RR(s,t){return s*s*s*t}function wc(s,t,e,i,a){return bR(s,t)+AR(s,e)+CR(s,i)+RR(s,a)}class uE extends ba{constructor(t=new qt,e=new qt,i=new qt,a=new qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=a}getPoint(t,e=new qt){const i=e,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return i.set(wc(t,a.x,l.x,c.x,f.x),wc(t,a.y,l.y,c.y,f.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wR extends ba{constructor(t=new nt,e=new nt,i=new nt,a=new nt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=a}getPoint(t,e=new nt){const i=e,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return i.set(wc(t,a.x,l.x,c.x,f.x),wc(t,a.y,l.y,c.y,f.y),wc(t,a.z,l.z,c.z,f.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cE extends ba{constructor(t=new qt,e=new qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new qt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new qt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class DR extends ba{constructor(t=new nt,e=new nt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new nt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fE extends ba{constructor(t=new qt,e=new qt,i=new qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new qt){const i=e,a=this.v0,l=this.v1,c=this.v2;return i.set(Rc(t,a.x,l.x,c.x),Rc(t,a.y,l.y,c.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class UR extends ba{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){const i=e,a=this.v0,l=this.v1,c=this.v2;return i.set(Rc(t,a.x,l.x,c.x),Rc(t,a.y,l.y,c.y),Rc(t,a.z,l.z,c.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hE extends ba{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new qt){const i=e,a=this.points,l=(a.length-1)*t,c=Math.floor(l),f=l-c,h=a[c===0?c:c-1],d=a[c],_=a[c>a.length-2?a.length-1:c+1],v=a[c>a.length-3?a.length-1:c+2];return i.set(EM(f,h.x,d.x,_.x,v.x),EM(f,h.y,d.y,_.y,v.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const a=t.points[e];this.points.push(a.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const a=this.points[e];t.points.push(a.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const a=t.points[e];this.points.push(new qt().fromArray(a))}return this}}var TM=Object.freeze({__proto__:null,ArcCurve:SR,CatmullRomCurve3:yR,CubicBezierCurve:uE,CubicBezierCurve3:wR,EllipseCurve:O0,LineCurve:cE,LineCurve3:DR,QuadraticBezierCurve:fE,QuadraticBezierCurve3:UR,SplineCurve:hE});class LR extends ba{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new TM[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=i){const c=a[l]-i,f=this.curves[l],h=f.getLength(),d=h===0?0:1-c/h;return f.getPointAt(d,e)}l++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,a=this.curves.length;i<a;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],f=c.isEllipseCurve?t*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?t*c.points.length:t,h=c.getPoints(f);for(let d=0;d<h.length;d++){const _=h[d];i&&i.equals(_)||(e.push(_),i=_)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const a=t.curves[e];this.curves.push(a.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const a=this.curves[e];t.curves.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const a=t.curves[e];this.curves.push(new TM[a.type]().fromJSON(a))}return this}}class bM extends LR{constructor(t){super(),this.type="Path",this.currentPoint=new qt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new cE(this.currentPoint.clone(),new qt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,a){const l=new fE(this.currentPoint.clone(),new qt(t,e),new qt(i,a));return this.curves.push(l),this.currentPoint.set(i,a),this}bezierCurveTo(t,e,i,a,l,c){const f=new uE(this.currentPoint.clone(),new qt(t,e),new qt(i,a),new qt(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new hE(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,a,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+f,e+h,i,a,l,c),this}absarc(t,e,i,a,l,c){return this.absellipse(t,e,i,i,a,l,c),this}ellipse(t,e,i,a,l,c,f,h){const d=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(t+d,e+_,i,a,l,c,f,h),this}absellipse(t,e,i,a,l,c,f,h){const d=new O0(t,e,i,a,l,c,f,h);if(this.curves.length>0){const v=d.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(d);const _=d.getPoint(1);return this.currentPoint.copy(_),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class dE extends bM{constructor(t){super(t),this.uuid=_u(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,a=this.holes.length;i<a;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const a=t.holes[e];this.holes.push(a.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const a=this.holes[e];t.holes.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const a=t.holes[e];this.holes.push(new bM().fromJSON(a))}return this}}function NR(s,t,e=2){const i=t&&t.length,a=i?t[0]*e:s.length;let l=pE(s,0,a,e,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,d;if(i&&(l=BR(s,t,l,e)),s.length>80*e){f=s[0],h=s[1];let _=f,v=h;for(let g=e;g<a;g+=e){const x=s[g],y=s[g+1];x<f&&(f=x),y<h&&(h=y),x>_&&(_=x),y>v&&(v=y)}d=Math.max(_-f,v-h),d=d!==0?32767/d:0}return qc(l,c,e,f,h,d,0),c}function pE(s,t,e,i,a){let l;if(a===jR(s,t,e,i)>0)for(let c=t;c<e;c+=i)l=AM(c/i|0,s[c],s[c+1],l);else for(let c=e-i;c>=t;c-=i)l=AM(c/i|0,s[c],s[c+1],l);return l&&au(l,l.next)&&(jc(l),l=l.next),l}function Vo(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(au(e,e.next)||Rn(e.prev,e,e.next)===0)){if(jc(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function qc(s,t,e,i,a,l,c){if(!s)return;!c&&l&&kR(s,i,a,l);let f=s;for(;s.prev!==s.next;){const h=s.prev,d=s.next;if(l?PR(s,i,a,l):OR(s)){t.push(h.i,s.i,d.i),jc(s),s=d.next,f=d.next;continue}if(s=d,s===f){c?c===1?(s=zR(Vo(s),t),qc(s,t,e,i,a,l,2)):c===2&&FR(s,t,e,i,a,l):qc(Vo(s),t,e,i,a,l,1);break}}}function OR(s){const t=s.prev,e=s,i=s.next;if(Rn(t,e,i)>=0)return!1;const a=t.x,l=e.x,c=i.x,f=t.y,h=e.y,d=i.y,_=Math.min(a,l,c),v=Math.min(f,h,d),g=Math.max(a,l,c),x=Math.max(f,h,d);let y=i.next;for(;y!==t;){if(y.x>=_&&y.x<=g&&y.y>=v&&y.y<=x&&xc(a,f,l,h,c,d,y.x,y.y)&&Rn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function PR(s,t,e,i){const a=s.prev,l=s,c=s.next;if(Rn(a,l,c)>=0)return!1;const f=a.x,h=l.x,d=c.x,_=a.y,v=l.y,g=c.y,x=Math.min(f,h,d),y=Math.min(_,v,g),E=Math.max(f,h,d),S=Math.max(_,v,g),M=qg(x,y,t,e,i),A=qg(E,S,t,e,i);let D=s.prevZ,C=s.nextZ;for(;D&&D.z>=M&&C&&C.z<=A;){if(D.x>=x&&D.x<=E&&D.y>=y&&D.y<=S&&D!==a&&D!==c&&xc(f,_,h,v,d,g,D.x,D.y)&&Rn(D.prev,D,D.next)>=0||(D=D.prevZ,C.x>=x&&C.x<=E&&C.y>=y&&C.y<=S&&C!==a&&C!==c&&xc(f,_,h,v,d,g,C.x,C.y)&&Rn(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;D&&D.z>=M;){if(D.x>=x&&D.x<=E&&D.y>=y&&D.y<=S&&D!==a&&D!==c&&xc(f,_,h,v,d,g,D.x,D.y)&&Rn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;C&&C.z<=A;){if(C.x>=x&&C.x<=E&&C.y>=y&&C.y<=S&&C!==a&&C!==c&&xc(f,_,h,v,d,g,C.x,C.y)&&Rn(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function zR(s,t){let e=s;do{const i=e.prev,a=e.next.next;!au(i,a)&&_E(i,e,e.next,a)&&Zc(i,a)&&Zc(a,i)&&(t.push(i.i,e.i,a.i),jc(e),jc(e.next),e=s=a),e=e.next}while(e!==s);return Vo(e)}function FR(s,t,e,i,a,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&YR(c,f)){let h=gE(c,f);c=Vo(c,c.next),h=Vo(h,h.next),qc(c,t,e,i,a,l,0),qc(h,t,e,i,a,l,0);return}f=f.next}c=c.next}while(c!==s)}function BR(s,t,e,i){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l]*i,h=l<c-1?t[l+1]*i:s.length,d=pE(s,f,h,i,!1);d===d.next&&(d.steiner=!0),a.push(WR(d))}a.sort(IR);for(let l=0;l<a.length;l++)e=HR(a[l],e);return e}function IR(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),a=(t.next.y-t.y)/(t.next.x-t.x);e=i-a}return e}function HR(s,t){const e=VR(s,t);if(!e)return t;const i=gE(e,s);return Vo(i,i.next),Vo(e,e.next)}function VR(s,t){let e=t;const i=s.x,a=s.y;let l=-1/0,c;if(au(s,e))return e;do{if(au(s,e.next))return e.next;if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const v=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=i&&v>l&&(l=v,c=e.x<e.next.x?e:e.next,v===i))return c}e=e.next}while(e!==t);if(!c)return null;const f=c,h=c.x,d=c.y;let _=1/0;e=c;do{if(i>=e.x&&e.x>=h&&i!==e.x&&mE(a<d?i:l,a,h,d,a<d?l:i,a,e.x,e.y)){const v=Math.abs(a-e.y)/(i-e.x);Zc(e,s)&&(v<_||v===_&&(e.x>c.x||e.x===c.x&&GR(c,e)))&&(c=e,_=v)}e=e.next}while(e!==f);return c}function GR(s,t){return Rn(s.prev,s,t.prev)<0&&Rn(t.next,s,s.next)<0}function kR(s,t,e,i){let a=s;do a.z===0&&(a.z=qg(a.x,a.y,t,e,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==s);a.prevZ.nextZ=null,a.prevZ=null,XR(a)}function XR(s){let t,e=1;do{let i=s,a;s=null;let l=null;for(t=0;i;){t++;let c=i,f=0;for(let d=0;d<e&&(f++,c=c.nextZ,!!c);d++);let h=e;for(;f>0||h>0&&c;)f!==0&&(h===0||!c||i.z<=c.z)?(a=i,i=i.nextZ,f--):(a=c,c=c.nextZ,h--),l?l.nextZ=a:s=a,a.prevZ=l,l=a;i=c}l.nextZ=null,e*=2}while(t>1);return s}function qg(s,t,e,i,a){return s=(s-e)*a|0,t=(t-i)*a|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function WR(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function mE(s,t,e,i,a,l,c,f){return(a-c)*(t-f)>=(s-c)*(l-f)&&(s-c)*(i-f)>=(e-c)*(t-f)&&(e-c)*(l-f)>=(a-c)*(i-f)}function xc(s,t,e,i,a,l,c,f){return!(s===c&&t===f)&&mE(s,t,e,i,a,l,c,f)}function YR(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!qR(s,t)&&(Zc(s,t)&&Zc(t,s)&&ZR(s,t)&&(Rn(s.prev,s,t.prev)||Rn(s,t.prev,t))||au(s,t)&&Rn(s.prev,s,s.next)>0&&Rn(t.prev,t,t.next)>0)}function Rn(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function au(s,t){return s.x===t.x&&s.y===t.y}function _E(s,t,e,i){const a=Xh(Rn(s,t,e)),l=Xh(Rn(s,t,i)),c=Xh(Rn(e,i,s)),f=Xh(Rn(e,i,t));return!!(a!==l&&c!==f||a===0&&kh(s,e,t)||l===0&&kh(s,i,t)||c===0&&kh(e,s,i)||f===0&&kh(e,t,i))}function kh(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Xh(s){return s>0?1:s<0?-1:0}function qR(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&_E(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Zc(s,t){return Rn(s.prev,s,s.next)<0?Rn(s,t,s.next)>=0&&Rn(s,s.prev,t)>=0:Rn(s,t,s.prev)<0||Rn(s,s.next,t)<0}function ZR(s,t){let e=s,i=!1;const a=(s.x+t.x)/2,l=(s.y+t.y)/2;do e.y>l!=e.next.y>l&&e.next.y!==e.y&&a<(e.next.x-e.x)*(l-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function gE(s,t){const e=Zg(s.i,s.x,s.y),i=Zg(t.i,t.x,t.y),a=s.next,l=t.prev;return s.next=t,t.prev=s,e.next=a,a.prev=e,i.next=e,e.prev=i,l.next=i,i.prev=l,i}function AM(s,t,e,i){const a=Zg(s,t,e);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function jc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zg(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jR(s,t,e,i){let a=0;for(let l=t,c=e-i;l<e;l+=i)a+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return a}class QR{static triangulate(t,e,i=2){return NR(t,e,i)}}class Dc{static area(t){const e=t.length;let i=0;for(let a=e-1,l=0;l<e;a=l++)i+=t[a].x*t[l].y-t[l].x*t[a].y;return i*.5}static isClockWise(t){return Dc.area(t)<0}static triangulateShape(t,e){const i=[],a=[],l=[];CM(t),RM(i,t);let c=t.length;e.forEach(CM);for(let h=0;h<e.length;h++)a.push(c),c+=e[h].length,RM(i,e[h]);const f=QR.triangulate(i,a);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function CM(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function RM(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class uf extends ir{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const l=t/2,c=e/2,f=Math.floor(i),h=Math.floor(a),d=f+1,_=h+1,v=t/f,g=e/h,x=[],y=[],E=[],S=[];for(let M=0;M<_;M++){const A=M*g-c;for(let D=0;D<d;D++){const C=D*v-l;y.push(C,-A,0),E.push(0,0,1),S.push(D/f),S.push(1-M/h)}}for(let M=0;M<h;M++)for(let A=0;A<f;A++){const D=A+d*M,C=A+d*(M+1),P=A+1+d*(M+1),O=A+1+d*M;x.push(D,C,O),x.push(C,P,O)}this.setIndex(x),this.setAttribute("position",new pi(y,3)),this.setAttribute("normal",new pi(E,3)),this.setAttribute("uv",new pi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uf(t.width,t.height,t.widthSegments,t.heightSegments)}}class z0 extends ir{constructor(t=new dE([new qt(0,.5),new qt(-.5,-.5),new qt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],a=[],l=[],c=[];let f=0,h=0;if(Array.isArray(t)===!1)d(t);else for(let _=0;_<t.length;_++)d(t[_]),this.addGroup(f,h,_),f+=h,h=0;this.setIndex(i),this.setAttribute("position",new pi(a,3)),this.setAttribute("normal",new pi(l,3)),this.setAttribute("uv",new pi(c,2));function d(_){const v=a.length/3,g=_.extractPoints(e);let x=g.shape;const y=g.holes;Dc.isClockWise(x)===!1&&(x=x.reverse());for(let S=0,M=y.length;S<M;S++){const A=y[S];Dc.isClockWise(A)===!0&&(y[S]=A.reverse())}const E=Dc.triangulateShape(x,y);for(let S=0,M=y.length;S<M;S++){const A=y[S];x=x.concat(A)}for(let S=0,M=x.length;S<M;S++){const A=x[S];a.push(A.x,A.y,0),l.push(0,0,1),c.push(A.x,A.y)}for(let S=0,M=E.length;S<M;S++){const A=E[S],D=A[0]+v,C=A[1]+v,P=A[2]+v;i.push(D,C,P),h+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return KR(e,t)}static fromJSON(t,e){const i=[];for(let a=0,l=t.shapes.length;a<l;a++){const c=e[t.shapes[a]];i.push(c)}return new z0(i,t.curveSegments)}}function KR(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){const a=s[e];t.shapes.push(a.uuid)}else t.shapes.push(s.uuid);return t}class F0 extends ir{constructor(t=1,e=32,i=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const h=Math.min(c+f,Math.PI);let d=0;const _=[],v=new nt,g=new nt,x=[],y=[],E=[],S=[];for(let M=0;M<=i;M++){const A=[],D=M/i;let C=0;M===0&&c===0?C=.5/e:M===i&&h===Math.PI&&(C=-.5/e);for(let P=0;P<=e;P++){const O=P/e;v.x=-t*Math.cos(a+O*l)*Math.sin(c+D*f),v.y=t*Math.cos(c+D*f),v.z=t*Math.sin(a+O*l)*Math.sin(c+D*f),y.push(v.x,v.y,v.z),g.copy(v).normalize(),E.push(g.x,g.y,g.z),S.push(O+C,1-D),A.push(d++)}_.push(A)}for(let M=0;M<i;M++)for(let A=0;A<e;A++){const D=_[M][A+1],C=_[M][A],P=_[M+1][A],O=_[M+1][A+1];(M!==0||c>0)&&x.push(D,C,O),(M!==i-1||h<Math.PI)&&x.push(C,P,O)}this.setIndex(x),this.setAttribute("position",new pi(y,3)),this.setAttribute("normal",new pi(E,3)),this.setAttribute("uv",new pi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new F0(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function su(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const a=s[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function Oi(s){const t={};for(let e=0;e<s.length;e++){const i=su(s[e]);for(const a in i)t[a]=i[a]}return t}function JR(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function vE(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}const Rd={clone:su,merge:Oi};var $R=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends of{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$R,this.fragmentShader=t2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=su(t.uniforms),this.uniformsGroups=JR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class e2 extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class n2 extends of{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i2 extends of{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wh=new nt,Yh=new gu,ca=new nt;class xE extends Ki{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nn,this.projectionMatrix=new Nn,this.projectionMatrixInverse=new Nn,this.coordinateSystem=ga,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wh,Yh,ca),ca.x===1&&ca.y===1&&ca.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wh,Yh,ca.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Wh,Yh,ca),ca.x===1&&ca.y===1&&ca.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wh,Yh,ca.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Os=new nt,wM=new qt,DM=new qt;class Vr extends xE{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wg*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(l_*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wg*2*Math.atan(Math.tan(l_*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Os.x,Os.y).multiplyScalar(-t/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Os.x,Os.y).multiplyScalar(-t/Os.z)}getViewSize(t,e){return this.getViewBounds(t,wM,DM),e.subVectors(DM,wM)}setViewOffset(t,e,i,a,l,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(l_*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;l+=c.offsetX*a/h,e-=c.offsetY*i/d,a*=c.width/h,i*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class B0 extends xE{constructor(t=-1,e=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-t,c=i+t,f=a+e,h=a-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Pl=-90,zl=1;class r2 extends Ki{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Vr(Pl,zl,t,e);a.layers=this.layers,this.add(a);const l=new Vr(Pl,zl,t,e);l.layers=this.layers,this.add(l);const c=new Vr(Pl,zl,t,e);c.layers=this.layers,this.add(c);const f=new Vr(Pl,zl,t,e);f.layers=this.layers,this.add(f);const h=new Vr(Pl,zl,t,e);h.layers=this.layers,this.add(h);const d=new Vr(Pl,zl,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,l,c,f,h]=e;for(const d of e)this.remove(d);if(t===ga)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===bd)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,1,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,2,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,3,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,4,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,a),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,_),t.setRenderTarget(v,g,x),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class a2 extends Vr{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class s2{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=o2.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function o2(){this._document.hidden===!1&&this.reset()}function UM(s,t,e,i){const a=l2(i);switch(e){case Q1:return s*t;case J1:return s*t/a.components*a.byteLength;case C0:return s*t/a.components*a.byteLength;case iu:return s*t*2/a.components*a.byteLength;case R0:return s*t*2/a.components*a.byteLength;case K1:return s*t*3/a.components*a.byteLength;case aa:return s*t*4/a.components*a.byteLength;case w0:return s*t*4/a.components*a.byteLength;case ud:case cd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fd:case hd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pg:case _g:return Math.max(s,16)*Math.max(t,8)/4;case dg:case mg:return Math.max(s,8)*Math.max(t,8)/2;case gg:case vg:case Sg:case yg:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xg:case Mg:case Eg:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tg:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bg:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ag:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Cg:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Rg:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case wg:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Dg:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ug:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Lg:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ng:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Og:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Pg:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case zg:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Fg:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Bg:case Ig:case Hg:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Vg:case Gg:return Math.ceil(s/4)*Math.ceil(t/4)*8;case kg:case Xg:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l2(s){switch(s){case Xr:case Y1:return{byteLength:1,components:1};case Xc:case q1:case Er:return{byteLength:2,components:1};case b0:case A0:return{byteLength:2,components:4};case Ea:case T0:case _a:return{byteLength:4,components:1};case Z1:case j1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:M0}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=M0);function SE(){let s=null,t=!1,e=null,i=null;function a(l,c){e(l,c),i=s.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(a),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){s=l}}}function u2(s){const t=new WeakMap;function e(f,h){const d=f.array,_=f.usage,v=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,_),f.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=s.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function i(f,h,d){const _=h.array,v=h.updateRanges;if(s.bindBuffer(d,f),v.length===0)s.bufferSubData(d,0,_);else{v.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<v.length;x++){const y=v[g],E=v[x];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++g,v[g]=E)}v.length=g+1;for(let x=0,y=v.length;x<y;x++){const E=v[x];s.bufferSubData(d,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=t.get(f);h&&(s.deleteBuffer(h.buffer),t.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,e(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,f,h),d.version=f.version}}return{get:a,remove:l,update:c}}var c2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,h2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,x2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,A2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,N2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,z2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H2="gl_FragColor = linearToOutputTexel( gl_FragColor );",V2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,k2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ew=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ow=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_w=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ww=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,v3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,x3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:c2,alphahash_pars_fragment:f2,alphamap_fragment:h2,alphamap_pars_fragment:d2,alphatest_fragment:p2,alphatest_pars_fragment:m2,aomap_fragment:_2,aomap_pars_fragment:g2,batching_pars_vertex:v2,batching_vertex:x2,begin_vertex:S2,beginnormal_vertex:y2,bsdfs:M2,iridescence_fragment:E2,bumpmap_pars_fragment:T2,clipping_planes_fragment:b2,clipping_planes_pars_fragment:A2,clipping_planes_pars_vertex:C2,clipping_planes_vertex:R2,color_fragment:w2,color_pars_fragment:D2,color_pars_vertex:U2,color_vertex:L2,common:N2,cube_uv_reflection_fragment:O2,defaultnormal_vertex:P2,displacementmap_pars_vertex:z2,displacementmap_vertex:F2,emissivemap_fragment:B2,emissivemap_pars_fragment:I2,colorspace_fragment:H2,colorspace_pars_fragment:V2,envmap_fragment:G2,envmap_common_pars_fragment:k2,envmap_pars_fragment:X2,envmap_pars_vertex:W2,envmap_physical_pars_fragment:nw,envmap_vertex:Y2,fog_vertex:q2,fog_pars_vertex:Z2,fog_fragment:j2,fog_pars_fragment:Q2,gradientmap_pars_fragment:K2,lightmap_pars_fragment:J2,lights_lambert_fragment:$2,lights_lambert_pars_fragment:tw,lights_pars_begin:ew,lights_toon_fragment:iw,lights_toon_pars_fragment:rw,lights_phong_fragment:aw,lights_phong_pars_fragment:sw,lights_physical_fragment:ow,lights_physical_pars_fragment:lw,lights_fragment_begin:uw,lights_fragment_maps:cw,lights_fragment_end:fw,logdepthbuf_fragment:hw,logdepthbuf_pars_fragment:dw,logdepthbuf_pars_vertex:pw,logdepthbuf_vertex:mw,map_fragment:_w,map_pars_fragment:gw,map_particle_fragment:vw,map_particle_pars_fragment:xw,metalnessmap_fragment:Sw,metalnessmap_pars_fragment:yw,morphinstance_vertex:Mw,morphcolor_vertex:Ew,morphnormal_vertex:Tw,morphtarget_pars_vertex:bw,morphtarget_vertex:Aw,normal_fragment_begin:Cw,normal_fragment_maps:Rw,normal_pars_fragment:ww,normal_pars_vertex:Dw,normal_vertex:Uw,normalmap_pars_fragment:Lw,clearcoat_normal_fragment_begin:Nw,clearcoat_normal_fragment_maps:Ow,clearcoat_pars_fragment:Pw,iridescence_pars_fragment:zw,opaque_fragment:Fw,packing:Bw,premultiplied_alpha_fragment:Iw,project_vertex:Hw,dithering_fragment:Vw,dithering_pars_fragment:Gw,roughnessmap_fragment:kw,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:Ww,shadowmap_pars_vertex:Yw,shadowmap_vertex:qw,shadowmask_pars_fragment:Zw,skinbase_vertex:jw,skinning_pars_vertex:Qw,skinning_vertex:Kw,skinnormal_vertex:Jw,specularmap_fragment:$w,specularmap_pars_fragment:t3,tonemapping_fragment:e3,tonemapping_pars_fragment:n3,transmission_fragment:i3,transmission_pars_fragment:r3,uv_pars_fragment:a3,uv_pars_vertex:s3,uv_vertex:o3,worldpos_vertex:l3,background_vert:u3,background_frag:c3,backgroundCube_vert:f3,backgroundCube_frag:h3,cube_vert:d3,cube_frag:p3,depth_vert:m3,depth_frag:_3,distance_vert:g3,distance_frag:v3,equirect_vert:x3,equirect_frag:S3,linedashed_vert:y3,linedashed_frag:M3,meshbasic_vert:E3,meshbasic_frag:T3,meshlambert_vert:b3,meshlambert_frag:A3,meshmatcap_vert:C3,meshmatcap_frag:R3,meshnormal_vert:w3,meshnormal_frag:D3,meshphong_vert:U3,meshphong_frag:L3,meshphysical_vert:N3,meshphysical_frag:O3,meshtoon_vert:P3,meshtoon_frag:z3,points_vert:F3,points_frag:B3,shadow_vert:I3,shadow_frag:H3,sprite_vert:V3,sprite_frag:G3},Gt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},pa={basic:{uniforms:Oi([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Oi([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Oi([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Oi([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Oi([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Oi([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Oi([Gt.points,Gt.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Oi([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Oi([Gt.common,Gt.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Oi([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Oi([Gt.sprite,Gt.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:Oi([Gt.common,Gt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:Oi([Gt.lights,Gt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};pa.physical={uniforms:Oi([pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const qh={r:0,b:0,g:0},xo=new is,k3=new Nn;function X3(s,t,e,i,a,l){const c=new Ie(0);let f=a===!0?0:1,h,d,_=null,v=0,g=null;function x(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const C=A.backgroundBlurriness>0;D=t.get(D,C)}return D}function y(A){let D=!1;const C=x(A);C===null?S(c,f):C&&C.isColor&&(S(C,1),D=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,l),(s.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(A,D){const C=x(D);C&&(C.isCubeTexture||C.mapping===Vd)?(d===void 0&&(d=new br(new lf(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:su(pa.backgroundCube.uniforms),vertexShader:pa.backgroundCube.vertexShader,fragmentShader:pa.backgroundCube.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,O,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),xo.copy(D.backgroundRotation),xo.x*=-1,xo.y*=-1,xo.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(xo.y*=-1,xo.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(k3.makeRotationFromEuler(xo)),d.material.toneMapped=qe.getTransfer(C.colorSpace)!==an,(_!==C||v!==C.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,_=C,v=C.version,g=s.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new br(new uf(2,2),new $n({name:"BackgroundMaterial",uniforms:su(pa.background.uniforms),vertexShader:pa.background.vertexShader,fragmentShader:pa.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=qe.getTransfer(C.colorSpace)!==an,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=C,v=C.version,g=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function S(A,D){A.getRGB(qh,vE(s)),e.buffers.color.setClear(qh.r,qh.g,qh.b,D,l)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,D=1){c.set(A),f=D,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,S(c,f)},render:y,addToRenderList:E,dispose:M}}function W3(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=g(null);let l=a,c=!1;function f(I,G,J,$,Q){let z=!1;const F=v(I,$,J,G);l!==F&&(l=F,d(l.object)),z=x(I,$,J,Q),z&&y(I,$,J,Q),Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(z||c)&&(c=!1,C(I,G,J,$),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function h(){return s.createVertexArray()}function d(I){return s.bindVertexArray(I)}function _(I){return s.deleteVertexArray(I)}function v(I,G,J,$){const Q=$.wireframe===!0;let z=i[G.id];z===void 0&&(z={},i[G.id]=z);const F=I.isInstancedMesh===!0?I.id:0;let tt=z[F];tt===void 0&&(tt={},z[F]=tt);let ct=tt[J.id];ct===void 0&&(ct={},tt[J.id]=ct);let V=ct[Q];return V===void 0&&(V=g(h()),ct[Q]=V),V}function g(I){const G=[],J=[],$=[];for(let Q=0;Q<e;Q++)G[Q]=0,J[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:$,object:I,attributes:{},index:null}}function x(I,G,J,$){const Q=l.attributes,z=G.attributes;let F=0;const tt=J.getAttributes();for(const ct in tt)if(tt[ct].location>=0){const B=Q[ct];let K=z[ct];if(K===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),B===void 0||B.attribute!==K||K&&B.data!==K.data)return!0;F++}return l.attributesNum!==F||l.index!==$}function y(I,G,J,$){const Q={},z=G.attributes;let F=0;const tt=J.getAttributes();for(const ct in tt)if(tt[ct].location>=0){let B=z[ct];B===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(B=I.instanceColor));const K={};K.attribute=B,B&&B.data&&(K.data=B.data),Q[ct]=K,F++}l.attributes=Q,l.attributesNum=F,l.index=$}function E(){const I=l.newAttributes;for(let G=0,J=I.length;G<J;G++)I[G]=0}function S(I){M(I,0)}function M(I,G){const J=l.newAttributes,$=l.enabledAttributes,Q=l.attributeDivisors;J[I]=1,$[I]===0&&(s.enableVertexAttribArray(I),$[I]=1),Q[I]!==G&&(s.vertexAttribDivisor(I,G),Q[I]=G)}function A(){const I=l.newAttributes,G=l.enabledAttributes;for(let J=0,$=G.length;J<$;J++)G[J]!==I[J]&&(s.disableVertexAttribArray(J),G[J]=0)}function D(I,G,J,$,Q,z,F){F===!0?s.vertexAttribIPointer(I,G,J,Q,z):s.vertexAttribPointer(I,G,J,$,Q,z)}function C(I,G,J,$){E();const Q=$.attributes,z=J.getAttributes(),F=G.defaultAttributeValues;for(const tt in z){const ct=z[tt];if(ct.location>=0){let V=Q[tt];if(V===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){const B=V.normalized,K=V.itemSize,vt=t.get(V);if(vt===void 0)continue;const Tt=vt.buffer,Dt=vt.type,it=vt.bytesPerElement,mt=Dt===s.INT||Dt===s.UNSIGNED_INT||V.gpuType===T0;if(V.isInterleavedBufferAttribute){const Mt=V.data,Pt=Mt.stride,ee=V.offset;if(Mt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<ct.locationSize;Qt++)M(ct.location+Qt,Mt.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Qt=0;Qt<ct.locationSize;Qt++)S(ct.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let Qt=0;Qt<ct.locationSize;Qt++)D(ct.location+Qt,K/ct.locationSize,Dt,B,Pt*it,(ee+K/ct.locationSize*Qt)*it,mt)}else{if(V.isInstancedBufferAttribute){for(let Mt=0;Mt<ct.locationSize;Mt++)M(ct.location+Mt,V.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Mt=0;Mt<ct.locationSize;Mt++)S(ct.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let Mt=0;Mt<ct.locationSize;Mt++)D(ct.location+Mt,K/ct.locationSize,Dt,B,K*it,K/ct.locationSize*Mt*it,mt)}}else if(F!==void 0){const B=F[tt];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(ct.location,B);break;case 3:s.vertexAttrib3fv(ct.location,B);break;case 4:s.vertexAttrib4fv(ct.location,B);break;default:s.vertexAttrib1fv(ct.location,B)}}}}A()}function P(){w();for(const I in i){const G=i[I];for(const J in G){const $=G[J];for(const Q in $){const z=$[Q];for(const F in z)_(z[F].object),delete z[F];delete $[Q]}}delete i[I]}}function O(I){if(i[I.id]===void 0)return;const G=i[I.id];for(const J in G){const $=G[J];for(const Q in $){const z=$[Q];for(const F in z)_(z[F].object),delete z[F];delete $[Q]}}delete i[I.id]}function L(I){for(const G in i){const J=i[G];for(const $ in J){const Q=J[$];if(Q[I.id]===void 0)continue;const z=Q[I.id];for(const F in z)_(z[F].object),delete z[F];delete Q[I.id]}}}function T(I){for(const G in i){const J=i[G],$=I.isInstancedMesh===!0?I.id:0,Q=J[$];if(Q!==void 0){for(const z in Q){const F=Q[z];for(const tt in F)_(F[tt].object),delete F[tt];delete Q[z]}delete J[$],Object.keys(J).length===0&&delete i[G]}}}function w(){k(),c=!0,l!==a&&(l=a,d(l.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:w,resetDefaultState:k,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:L,initAttributes:E,enableAttribute:S,disableUnusedAttributes:A}}function Y3(s,t,e){let i;function a(d){i=d}function l(d,_){s.drawArrays(i,d,_),e.update(_,i,1)}function c(d,_,v){v!==0&&(s.drawArraysInstanced(i,d,_,v),e.update(_,i,v))}function f(d,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,_,0,v);let x=0;for(let y=0;y<v;y++)x+=_[y];e.update(x,i,1)}function h(d,_,v,g){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<d.length;y++)c(d[y],_[y],g[y]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,_,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=_[E]*g[E];e.update(y,i,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function q3(s,t,e,i){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");a=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(L){return!(L!==aa&&i.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(L){const T=L===Er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Xr&&i.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==_a&&!T)}function h(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const _=h(d);_!==d&&(xe("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:C,maxSamples:P,samples:O}}function Z3(s){const t=this;let e=null,i=0,a=!1,l=!1;const c=new Eo,f=new we,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||i!==0||a;return a=g,i=v.length,x},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){e=_(v,g,0)},this.setState=function(v,g,x){const y=v.clippingPlanes,E=v.clipIntersection,S=v.clipShadows,M=s.get(v);if(!a||y===null||y.length===0||l&&!S)l?_(null):d();else{const A=l?0:i,D=A*4;let C=M.clippingState||null;h.value=C,C=_(y,g,D,x);for(let P=0;P!==D;++P)C[P]=e[P];M.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function _(v,g,x,y){const E=v!==null?v.length:0;let S=null;if(E!==0){if(S=h.value,y!==!0||S===null){const M=x+E*4,A=g.matrixWorldInverse;f.getNormalMatrix(A),(S===null||S.length<M)&&(S=new Float32Array(M));for(let D=0,C=x;D!==E;++D,C+=4)c.copy(v[D]).applyMatrix4(A,f),c.normal.toArray(S,C),S[C+3]=c.constant}h.value=S,h.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,S}}const Fs=4,LM=[.125,.215,.35,.446,.526,.582],Ro=20,j3=256,dc=new B0,NM=new Ie;let P_=null,z_=0,F_=0,B_=!1;const Q3=new nt;class OM{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,a=100,l={}){const{size:c=256,position:f=Q3}=l;P_=this._renderer.getRenderTarget(),z_=this._renderer.getActiveCubeFace(),F_=this._renderer.getActiveMipmapLevel(),B_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,a,h,f),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=FM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(P_,z_,F_),this._renderer.xr.enabled=B_,t.scissorTest=!1,Fl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ho||t.mapping===nu?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),P_=this._renderer.getRenderTarget(),z_=this._renderer.getActiveCubeFace(),F_=this._renderer.getActiveMipmapLevel(),B_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Er,format:aa,colorSpace:ru,depthBuffer:!1},a=PM(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=PM(t,e,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=K3(l)),this._blurMaterial=$3(l,t,e),this._ggxMaterial=J3(l,t,e)}return a}_compileMaterial(t){const e=new br(new ir,t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,i,a,l){const h=new Vr(90,1,e,i),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(NM),v.toneMapping=ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new br(new lf,new kd({name:"PMREM.Background",side:Hi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let M=!1;const A=t.background;A?A.isColor&&(S.color.copy(A),t.background=null,M=!0):(S.color.copy(NM),M=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(h.up.set(0,d[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[D],l.y,l.z)):C===1?(h.up.set(0,0,d[D]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[D],l.z)):(h.up.set(0,d[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[D]));const P=this._cubeSize;Fl(a,C*P,D>2?P:0,P,P),v.setRenderTarget(a),M&&v.render(E,h),v.render(t,h)}v.toneMapping=x,v.autoClear=g,t.background=A}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Ho||t.mapping===nu;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=FM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zM());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=t;const h=this._cubeSize;Fl(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(c,dc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(t,l-1,l);e.autoClear=i}_applyGGXFilter(t,e,i){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,d=i/(this._lodMeshes.length-1),_=e/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,x=v*g,{_lodMax:y}=this,E=this._sizeLods[i],S=3*E*(i>y-Fs?i-y+Fs:0),M=4*(this._cubeSize-E);h.envMap.value=t.texture,h.roughness.value=x,h.mipInt.value=y-e,Fl(l,S,M,3*E,2*E),a.setRenderTarget(l),a.render(f,dc),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=y-i,Fl(t,S,M,3*E,2*E),a.setRenderTarget(t),a.render(f,dc)}_blur(t,e,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,a,"latitudinal",l),this._halfBlur(c,t,i,i,a,"longitudinal",l)}_halfBlur(t,e,i,a,l,c,f){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[a];v.material=d;const g=d.uniforms,x=this._sizeLods[i]-1,y=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Ro-1),E=l/y,S=isFinite(l)?1+Math.floor(_*E):Ro;S>Ro&&xe(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ro}`);const M=[];let A=0;for(let L=0;L<Ro;++L){const T=L/E,w=Math.exp(-T*T/2);M.push(w),L===0?A+=w:L<S&&(A+=2*w)}for(let L=0;L<M.length;L++)M[L]=M[L]/A;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=M,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:D}=this;g.dTheta.value=y,g.mipInt.value=D-i;const C=this._sizeLods[a],P=3*C*(a>D-Fs?a-D+Fs:0),O=4*(this._cubeSize-C);Fl(e,P,O,3*C,2*C),h.setRenderTarget(e),h.render(v,dc)}}function K3(s){const t=[],e=[],i=[];let a=s;const l=s-Fs+1+LM.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-Fs?h=LM[c-s+Fs-1]:c===0&&(h=0),e.push(h);const d=1/(f-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,y=6,E=3,S=2,M=1,A=new Float32Array(E*y*x),D=new Float32Array(S*y*x),C=new Float32Array(M*y*x);for(let O=0;O<x;O++){const L=O%3*2/3-1,T=O>2?0:-1,w=[L,T,0,L+2/3,T,0,L+2/3,T+1,0,L,T,0,L+2/3,T+1,0,L,T+1,0];A.set(w,E*y*O),D.set(g,S*y*O);const k=[O,O,O,O,O,O];C.set(k,M*y*O)}const P=new ir;P.setAttribute("position",new Tr(A,E)),P.setAttribute("uv",new Tr(D,S)),P.setAttribute("faceIndex",new Tr(C,M)),i.push(new br(P,null)),a>Fs&&a--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function PM(s,t,e){const i=new Qi(s,t,e);return i.texture.mapping=Vd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fl(s,t,e,i,a){s.viewport.set(t,e,i,a),s.scissor.set(t,e,i,a)}function J3(s,t,e){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function $3(s,t,e){const i=new Float32Array(Ro),a=new nt(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function zM(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function FM(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class yE extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new oE(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new lf(5,5,5),l=new $n({name:"CubemapFromEquirect",uniforms:su(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hi,blending:Sa});l.uniforms.tEquirect.value=e;const c=new br(a,l),f=e.minFilter;return e.minFilter===wo&&(e.minFilter=bi),new r2(1,10,this).update(t,c),e.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,a=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,a);t.setRenderTarget(l)}}function tD(s){let t=new WeakMap,e=new WeakMap,i=null;function a(g,x=!1){return g==null?null:x?c(g):l(g)}function l(g){if(g&&g.isTexture){const x=g.mapping;if(x===a_||x===s_)if(t.has(g)){const y=t.get(g).texture;return f(y,g.mapping)}else{const y=g.image;if(y&&y.height>0){const E=new yE(y.height);return E.fromEquirectangularTexture(s,g),t.set(g,E),g.addEventListener("dispose",d),f(E.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const x=g.mapping,y=x===a_||x===s_,E=x===Ho||x===nu;if(y||E){let S=e.get(g);const M=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return i===null&&(i=new OM(s)),S=y?i.fromEquirectangular(g,S):i.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),S.texture;if(S!==void 0)return S.texture;{const A=g.image;return y&&A&&A.height>0||E&&A&&h(A)?(i===null&&(i=new OM(s)),S=y?i.fromEquirectangular(g):i.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function f(g,x){return x===a_?g.mapping=Ho:x===s_&&(g.mapping=nu),g}function h(g){let x=0;const y=6;for(let E=0;E<y;E++)g[E]!==void 0&&x++;return x===y}function d(g){const x=g.target;x.removeEventListener("dispose",d);const y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function v(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:v}}function eD(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const a=s.getExtension(i);return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&Cd("WebGLRenderer: "+i+" extension not supported."),a}}}function nD(s,t,e,i){const a={},l=new WeakMap;function c(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",c),delete a[g.id];const x=l.get(g);x&&(t.remove(x),l.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function f(v,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,e.memory.geometries++),g}function h(v){const g=v.attributes;for(const x in g)t.update(g[x],s.ARRAY_BUFFER)}function d(v){const g=[],x=v.index,y=v.attributes.position;let E=0;if(y===void 0)return;if(x!==null){const A=x.array;E=x.version;for(let D=0,C=A.length;D<C;D+=3){const P=A[D+0],O=A[D+1],L=A[D+2];g.push(P,O,O,L,L,P)}}else{const A=y.array;E=y.version;for(let D=0,C=A.length/3-1;D<C;D+=3){const P=D+0,O=D+1,L=D+2;g.push(P,O,O,L,L,P)}}const S=new(y.count>=65535?rE:iE)(g,1);S.version=E;const M=l.get(v);M&&t.remove(M),l.set(v,S)}function _(v){const g=l.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:_}}function iD(s,t,e){let i;function a(g){i=g}let l,c;function f(g){l=g.type,c=g.bytesPerElement}function h(g,x){s.drawElements(i,x,l,g*c),e.update(x,i,1)}function d(g,x,y){y!==0&&(s.drawElementsInstanced(i,x,l,g*c,y),e.update(x,i,y))}function _(g,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,g,0,y);let S=0;for(let M=0;M<y;M++)S+=x[M];e.update(S,i,1)}function v(g,x,y,E){if(y===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<g.length;M++)d(g[M]/c,x[M],E[M]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,l,g,0,E,0,y);let M=0;for(let A=0;A<y;A++)M+=x[A]*E[A];e.update(M,i,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function rD(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(e.calls++,c){case s.TRIANGLES:e.triangles+=f*(l/3);break;case s.LINES:e.lines+=f*(l/2);break;case s.LINE_STRIP:e.lines+=f*(l-1);break;case s.LINE_LOOP:e.lines+=f*l;break;case s.POINTS:e.points+=f*l;break;default:Ke("WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function aD(s,t,e){const i=new WeakMap,a=new Fn;function l(c,f,h){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let g=i.get(f);if(g===void 0||g.count!==v){let k=function(){T.dispose(),i.delete(f),f.removeEventListener("dispose",k)};var x=k;g!==void 0&&g.texture.dispose();const y=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;y===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let P=f.attributes.position.count*C,O=1;P>t.maxTextureSize&&(O=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const L=new Float32Array(P*O*4*v),T=new tE(L,P,O,v);T.type=_a,T.needsUpdate=!0;const w=C*4;for(let I=0;I<v;I++){const G=M[I],J=A[I],$=D[I],Q=P*O*4*I;for(let z=0;z<G.count;z++){const F=z*w;y===!0&&(a.fromBufferAttribute(G,z),L[Q+F+0]=a.x,L[Q+F+1]=a.y,L[Q+F+2]=a.z,L[Q+F+3]=0),E===!0&&(a.fromBufferAttribute(J,z),L[Q+F+4]=a.x,L[Q+F+5]=a.y,L[Q+F+6]=a.z,L[Q+F+7]=0),S===!0&&(a.fromBufferAttribute($,z),L[Q+F+8]=a.x,L[Q+F+9]=a.y,L[Q+F+10]=a.z,L[Q+F+11]=$.itemSize===4?a.w:1)}}g={count:v,texture:T,size:new qt(P,O)},i.set(f,g),f.addEventListener("dispose",k)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,e);else{let y=0;for(let S=0;S<d.length;S++)y+=d[S];const E=f.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",d)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function sD(s,t,e,i,a){let l=new WeakMap;function c(d){const _=a.render.frame,v=d.geometry,g=t.get(d,v);if(l.get(g)!==_&&(t.update(g),l.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),l.get(d)!==_&&(e.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,s.ARRAY_BUFFER),l.set(d,_))),d.isSkinnedMesh){const x=d.skeleton;l.get(x)!==_&&(x.update(),l.set(x,_))}return g}function f(){l=new WeakMap}function h(d){const _=d.target;_.removeEventListener("dispose",h),i.releaseStatesOfObject(_),e.remove(_.instanceMatrix),_.instanceColor!==null&&e.remove(_.instanceColor)}return{update:c,dispose:f}}const oD={[I1]:"LINEAR_TONE_MAPPING",[H1]:"REINHARD_TONE_MAPPING",[V1]:"CINEON_TONE_MAPPING",[E0]:"ACES_FILMIC_TONE_MAPPING",[k1]:"AGX_TONE_MAPPING",[X1]:"NEUTRAL_TONE_MAPPING",[G1]:"CUSTOM_TONE_MAPPING"};function lD(s,t,e,i,a){const l=new Qi(t,e,{type:s,depthBuffer:i,stencilBuffer:a}),c=new Qi(t,e,{type:Er,depthBuffer:!1,stencilBuffer:!1}),f=new ir;f.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new pi([0,2,0,0,2,0],2));const h=new e2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new br(f,h),_=new B0(-1,1,1,-1,0,1);let v=null,g=null,x=!1,y,E=null,S=[],M=!1;this.setSize=function(A,D){l.setSize(A,D),c.setSize(A,D);for(let C=0;C<S.length;C++){const P=S[C];P.setSize&&P.setSize(A,D)}},this.setEffects=function(A){S=A,M=S.length>0&&S[0].isRenderPass===!0;const D=l.width,C=l.height;for(let P=0;P<S.length;P++){const O=S[P];O.setSize&&O.setSize(D,C)}},this.begin=function(A,D){if(x||A.toneMapping===ya&&S.length===0)return!1;if(E=D,D!==null){const C=D.width,P=D.height;(l.width!==C||l.height!==P)&&this.setSize(C,P)}return M===!1&&A.setRenderTarget(l),y=A.toneMapping,A.toneMapping=ya,!0},this.hasRenderPass=function(){return M},this.end=function(A,D){A.toneMapping=y,x=!0;let C=l,P=c;for(let O=0;O<S.length;O++){const L=S[O];if(L.enabled!==!1&&(L.render(A,P,C,D),L.needsSwap!==!1)){const T=C;C=P,P=T}}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,h.defines={},qe.getTransfer(v)===an&&(h.defines.SRGB_TRANSFER="");const O=oD[g];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=C.texture,A.setRenderTarget(E),A.render(d,_),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const ME=new Vi,jg=new Yc(1,1),EE=new tE,TE=new $C,bE=new oE,BM=[],IM=[],HM=new Float32Array(16),VM=new Float32Array(9),GM=new Float32Array(4);function vu(s,t,e){const i=s[0];if(i<=0||i>0)return s;const a=t*e;let l=BM[a];if(l===void 0&&(l=new Float32Array(a),BM[a]=l),t!==0){i.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=e,s[c].toArray(l,f)}return l}function ti(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ei(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Wd(s,t){let e=IM[t];e===void 0&&(e=new Int32Array(t),IM[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function uD(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;s.uniform2fv(this.addr,t),ei(e,t)}}function fD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ti(e,t))return;s.uniform3fv(this.addr,t),ei(e,t)}}function hD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;s.uniform4fv(this.addr,t),ei(e,t)}}function dD(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;GM.set(i),s.uniformMatrix2fv(this.addr,!1,GM),ei(e,i)}}function pD(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;VM.set(i),s.uniformMatrix3fv(this.addr,!1,VM),ei(e,i)}}function mD(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;HM.set(i),s.uniformMatrix4fv(this.addr,!1,HM),ei(e,i)}}function _D(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;s.uniform2iv(this.addr,t),ei(e,t)}}function vD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ti(e,t))return;s.uniform3iv(this.addr,t),ei(e,t)}}function xD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;s.uniform4iv(this.addr,t),ei(e,t)}}function SD(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;s.uniform2uiv(this.addr,t),ei(e,t)}}function MD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ti(e,t))return;s.uniform3uiv(this.addr,t),ei(e,t)}}function ED(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;s.uniform4uiv(this.addr,t),ei(e,t)}}function TD(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(jg.compareFunction=e.isReversedDepthBuffer()?U0:D0,l=jg):l=ME,e.setTexture2D(t||l,a)}function bD(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||TE,a)}function AD(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||bE,a)}function CD(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||EE,a)}function RD(s){switch(s){case 5126:return uD;case 35664:return cD;case 35665:return fD;case 35666:return hD;case 35674:return dD;case 35675:return pD;case 35676:return mD;case 5124:case 35670:return _D;case 35667:case 35671:return gD;case 35668:case 35672:return vD;case 35669:case 35673:return xD;case 5125:return SD;case 36294:return yD;case 36295:return MD;case 36296:return ED;case 35678:case 36198:case 36298:case 36306:case 35682:return TD;case 35679:case 36299:case 36307:return bD;case 35680:case 36300:case 36308:case 36293:return AD;case 36289:case 36303:case 36311:case 36292:return CD}}function wD(s,t){s.uniform1fv(this.addr,t)}function DD(s,t){const e=vu(t,this.size,2);s.uniform2fv(this.addr,e)}function UD(s,t){const e=vu(t,this.size,3);s.uniform3fv(this.addr,e)}function LD(s,t){const e=vu(t,this.size,4);s.uniform4fv(this.addr,e)}function ND(s,t){const e=vu(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function OD(s,t){const e=vu(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function PD(s,t){const e=vu(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function zD(s,t){s.uniform1iv(this.addr,t)}function FD(s,t){s.uniform2iv(this.addr,t)}function BD(s,t){s.uniform3iv(this.addr,t)}function ID(s,t){s.uniform4iv(this.addr,t)}function HD(s,t){s.uniform1uiv(this.addr,t)}function VD(s,t){s.uniform2uiv(this.addr,t)}function GD(s,t){s.uniform3uiv(this.addr,t)}function kD(s,t){s.uniform4uiv(this.addr,t)}function XD(s,t,e){const i=this.cache,a=t.length,l=Wd(e,a);ti(i,l)||(s.uniform1iv(this.addr,l),ei(i,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=jg:c=ME;for(let f=0;f!==a;++f)e.setTexture2D(t[f]||c,l[f])}function WD(s,t,e){const i=this.cache,a=t.length,l=Wd(e,a);ti(i,l)||(s.uniform1iv(this.addr,l),ei(i,l));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||TE,l[c])}function YD(s,t,e){const i=this.cache,a=t.length,l=Wd(e,a);ti(i,l)||(s.uniform1iv(this.addr,l),ei(i,l));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||bE,l[c])}function qD(s,t,e){const i=this.cache,a=t.length,l=Wd(e,a);ti(i,l)||(s.uniform1iv(this.addr,l),ei(i,l));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||EE,l[c])}function ZD(s){switch(s){case 5126:return wD;case 35664:return DD;case 35665:return UD;case 35666:return LD;case 35674:return ND;case 35675:return OD;case 35676:return PD;case 5124:case 35670:return zD;case 35667:case 35671:return FD;case 35668:case 35672:return BD;case 35669:case 35673:return ID;case 5125:return HD;case 36294:return VD;case 36295:return GD;case 36296:return kD;case 35678:case 36198:case 36298:case 36306:case 35682:return XD;case 35679:case 36299:case 36307:return WD;case 35680:case 36300:case 36308:case 36293:return YD;case 36289:case 36303:case 36311:case 36292:return qD}}class jD{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=RD(e.type)}}class QD{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ZD(e.type)}}class KD{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(t,e[f.id],i)}}}const I_=/(\w+)(\])?(\[|\.)?/g;function kM(s,t){s.seq.push(t),s.map[t.id]=t}function JD(s,t,e){const i=s.name,a=i.length;for(I_.lastIndex=0;;){const l=I_.exec(i),c=I_.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&c+2===a){kM(e,d===void 0?new jD(f,s,t):new QD(f,s,t));break}else{let v=e.map[f];v===void 0&&(v=new KD(f),kM(e,v)),e=v}}}class dd{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const f=t.getActiveUniform(e,c),h=t.getUniformLocation(e,f.name);JD(f,h,this)}const a=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(t,e,i,a){const l=this.map[e];l!==void 0&&l.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let l=0,c=e.length;l!==c;++l){const f=e[l],h=i[f.id];h.needsUpdate!==!1&&f.setValue(t,h.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,l=t.length;a!==l;++a){const c=t[a];c.id in e&&i.push(c)}return i}}function XM(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const $D=37297;let tU=0;function eU(s,t){const e=s.split(`
`),i=[],a=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let c=a;c<l;c++){const f=c+1;i.push(`${f===t?">":" "} ${f}: ${e[c]}`)}return i.join(`
`)}const WM=new we;function nU(s){qe._getMatrix(WM,qe.workingColorSpace,s);const t=`mat3( ${WM.elements.map(e=>e.toFixed(4))} )`;switch(qe.getTransfer(s)){case Td:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function YM(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),l=(s.getShaderInfoLog(t)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return e.toUpperCase()+`

`+l+`

`+eU(s.getShaderSource(t),f)}else return l}function iU(s,t){const e=nU(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const rU={[I1]:"Linear",[H1]:"Reinhard",[V1]:"Cineon",[E0]:"ACESFilmic",[k1]:"AgX",[X1]:"Neutral",[G1]:"Custom"};function aU(s,t){const e=rU[t];return e===void 0?(xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zh=new nt;function sU(){qe.getLuminanceCoefficients(Zh);const s=Zh.x.toFixed(4),t=Zh.y.toFixed(4),e=Zh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oU(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sc).join(`
`)}function lU(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function uU(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(t,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),e[c]={type:l.type,location:s.getAttribLocation(t,c),locationSize:f}}return e}function Sc(s){return s!==""}function qM(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ZM(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qg(s){return s.replace(cU,hU)}const fU=new Map;function hU(s,t){let e=De[t];if(e===void 0){const i=fU.get(t);if(i!==void 0)e=De[i],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Qg(e)}const dU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jM(s){return s.replace(dU,pU)}function pU(s,t,e,i){let a="";for(let l=parseInt(t);l<parseInt(e);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function QM(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const mU={[ld]:"SHADOWMAP_TYPE_PCF",[vc]:"SHADOWMAP_TYPE_VSM"};function _U(s){return mU[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gU={[Ho]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE",[Vd]:"ENVMAP_TYPE_CUBE_UV"};function vU(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":gU[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const xU={[nu]:"ENVMAP_MODE_REFRACTION"};function SU(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":xU[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yU={[B1]:"ENVMAP_BLENDING_MULTIPLY",[UC]:"ENVMAP_BLENDING_MIX",[LC]:"ENVMAP_BLENDING_ADD"};function MU(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":yU[s.combine]||"ENVMAP_BLENDING_NONE"}function EU(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function TU(s,t,e,i){const a=s.getContext(),l=e.defines;let c=e.vertexShader,f=e.fragmentShader;const h=_U(e),d=vU(e),_=SU(e),v=MU(e),g=EU(e),x=oU(e),y=lU(l),E=a.createProgram();let S,M,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Sc).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Sc).join(`
`),M.length>0&&(M+=`
`)):(S=[QM(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sc).join(`
`),M=[QM(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+_:"",e.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ya?"#define TONE_MAPPING":"",e.toneMapping!==ya?De.tonemapping_pars_fragment:"",e.toneMapping!==ya?aU("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,iU("linearToOutputTexel",e.outputColorSpace),sU(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sc).join(`
`)),c=Qg(c),c=qM(c,e),c=ZM(c,e),f=Qg(f),f=qM(f,e),f=ZM(f,e),c=jM(c),f=jM(f),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",e.glslVersion===rM?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const D=A+S+c,C=A+M+f,P=XM(a,a.VERTEX_SHADER,D),O=XM(a,a.FRAGMENT_SHADER,C);a.attachShader(E,P),a.attachShader(E,O),e.index0AttributeName!==void 0?a.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function L(I){if(s.debug.checkShaderErrors){const G=a.getProgramInfoLog(E)||"",J=a.getShaderInfoLog(P)||"",$=a.getShaderInfoLog(O)||"",Q=G.trim(),z=J.trim(),F=$.trim();let tt=!0,ct=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,P,O);else{const V=YM(a,P,"vertex"),B=YM(a,O,"fragment");Ke("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Q+`
`+V+`
`+B)}else Q!==""?xe("WebGLProgram: Program Info Log:",Q):(z===""||F==="")&&(ct=!1);ct&&(I.diagnostics={runnable:tt,programLog:Q,vertexShader:{log:z,prefix:S},fragmentShader:{log:F,prefix:M}})}a.deleteShader(P),a.deleteShader(O),T=new dd(a,E),w=uU(a,E)}let T;this.getUniforms=function(){return T===void 0&&L(this),T};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(E,$D)),k},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tU++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=O,this}let bU=0;class AU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new CU(t),e.set(t,i)),i}}class CU{constructor(t){this.id=bU++,this.code=t,this.usedTimes=0}}function RU(s,t,e,i,a,l){const c=new eE,f=new AU,h=new Set,d=[],_=new Map,v=i.logarithmicDepthBuffer;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return h.add(T),T===0?"uv":`uv${T}`}function E(T,w,k,I,G){const J=I.fog,$=G.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,F=t.get(T.envMap||Q,z),tt=F&&F.mapping===Vd?F.image.height:null,ct=x[T.type];T.precision!==null&&(g=i.getMaxPrecision(T.precision),g!==T.precision&&xe("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const V=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,B=V!==void 0?V.length:0;let K=0;$.morphAttributes.position!==void 0&&(K=1),$.morphAttributes.normal!==void 0&&(K=2),$.morphAttributes.color!==void 0&&(K=3);let vt,Tt,Dt,it;if(ct){const Vt=pa[ct];vt=Vt.vertexShader,Tt=Vt.fragmentShader}else vt=T.vertexShader,Tt=T.fragmentShader,f.update(T),Dt=f.getVertexShaderID(T),it=f.getFragmentShaderID(T);const mt=s.getRenderTarget(),Mt=s.state.buffers.depth.getReversed(),Pt=G.isInstancedMesh===!0,ee=G.isBatchedMesh===!0,Qt=!!T.map,Le=!!T.matcap,Yt=!!F,ae=!!T.aoMap,_e=!!T.lightMap,se=!!T.bumpMap,lt=!!T.normalMap,Y=!!T.displacementMap,Ye=!!T.emissiveMap,Ee=!!T.metalnessMap,ce=!!T.roughnessMap,Xt=T.anisotropy>0,H=T.clearcoat>0,R=T.dispersion>0,Z=T.iridescence>0,_t=T.sheen>0,gt=T.transmission>0,ht=Xt&&!!T.anisotropyMap,Ht=H&&!!T.clearcoatMap,Rt=H&&!!T.clearcoatNormalMap,ie=H&&!!T.clearcoatRoughnessMap,Wt=Z&&!!T.iridescenceMap,At=Z&&!!T.iridescenceThicknessMap,bt=_t&&!!T.sheenColorMap,It=_t&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,zt=!!T.specularColorMap,pe=!!T.specularIntensityMap,X=gt&&!!T.transmissionMap,wt=gt&&!!T.thicknessMap,Ct=!!T.gradientMap,Lt=!!T.alphaMap,Et=T.alphaTest>0,pt=!!T.alphaHash,kt=!!T.extensions;let le=ya;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(le=s.toneMapping);const ke={shaderID:ct,shaderType:T.type,shaderName:T.name,vertexShader:vt,fragmentShader:Tt,defines:T.defines,customVertexShaderID:Dt,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ee,batchingColor:ee&&G._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&G.instanceColor!==null,instancingMorph:Pt&&G.morphTexture!==null,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ru,alphaToCoverage:!!T.alphaToCoverage,map:Qt,matcap:Le,envMap:Yt,envMapMode:Yt&&F.mapping,envMapCubeUVHeight:tt,aoMap:ae,lightMap:_e,bumpMap:se,normalMap:lt,displacementMap:Y,emissiveMap:Ye,normalMapObjectSpace:lt&&T.normalMapType===zC,normalMapTangentSpace:lt&&T.normalMapType===PC,metalnessMap:Ee,roughnessMap:ce,anisotropy:Xt,anisotropyMap:ht,clearcoat:H,clearcoatMap:Ht,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ie,dispersion:R,iridescence:Z,iridescenceMap:Wt,iridescenceThicknessMap:At,sheen:_t,sheenColorMap:bt,sheenRoughnessMap:It,specularMap:Ot,specularColorMap:zt,specularIntensityMap:pe,transmission:gt,transmissionMap:X,thicknessMap:wt,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===Yl&&T.alphaToCoverage===!1,alphaMap:Lt,alphaTest:Et,alphaHash:pt,combine:T.combine,mapUv:Qt&&y(T.map.channel),aoMapUv:ae&&y(T.aoMap.channel),lightMapUv:_e&&y(T.lightMap.channel),bumpMapUv:se&&y(T.bumpMap.channel),normalMapUv:lt&&y(T.normalMap.channel),displacementMapUv:Y&&y(T.displacementMap.channel),emissiveMapUv:Ye&&y(T.emissiveMap.channel),metalnessMapUv:Ee&&y(T.metalnessMap.channel),roughnessMapUv:ce&&y(T.roughnessMap.channel),anisotropyMapUv:ht&&y(T.anisotropyMap.channel),clearcoatMapUv:Ht&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(T.sheenRoughnessMap.channel),specularMapUv:Ot&&y(T.specularMap.channel),specularColorMapUv:zt&&y(T.specularColorMap.channel),specularIntensityMapUv:pe&&y(T.specularIntensityMap.channel),transmissionMapUv:X&&y(T.transmissionMap.channel),thicknessMapUv:wt&&y(T.thicknessMap.channel),alphaMapUv:Lt&&y(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(lt||Xt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(Qt||Lt),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&lt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Mt,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:Qt&&T.map.isVideoTexture===!0&&qe.getTransfer(T.map.colorSpace)===an,decodeVideoTextureEmissive:Ye&&T.emissiveMap.isVideoTexture===!0&&qe.getTransfer(T.emissiveMap.colorSpace)===an,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ia,flipSided:T.side===Hi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ke.vertexUv1s=h.has(1),ke.vertexUv2s=h.has(2),ke.vertexUv3s=h.has(3),h.clear(),ke}function S(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)w.push(k),w.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(M(w,T),A(w,T),w.push(s.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function M(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function A(T,w){c.disableAll(),w.instancing&&c.enable(0),w.instancingColor&&c.enable(1),w.instancingMorph&&c.enable(2),w.matcap&&c.enable(3),w.envMap&&c.enable(4),w.normalMapObjectSpace&&c.enable(5),w.normalMapTangentSpace&&c.enable(6),w.clearcoat&&c.enable(7),w.iridescence&&c.enable(8),w.alphaTest&&c.enable(9),w.vertexColors&&c.enable(10),w.vertexAlphas&&c.enable(11),w.vertexUv1s&&c.enable(12),w.vertexUv2s&&c.enable(13),w.vertexUv3s&&c.enable(14),w.vertexTangents&&c.enable(15),w.anisotropy&&c.enable(16),w.alphaHash&&c.enable(17),w.batching&&c.enable(18),w.dispersion&&c.enable(19),w.batchingColor&&c.enable(20),w.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reversedDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),T.push(c.mask)}function D(T){const w=x[T.type];let k;if(w){const I=pa[w];k=Rd.clone(I.uniforms)}else k=T.uniforms;return k}function C(T,w){let k=_.get(w);return k!==void 0?++k.usedTimes:(k=new TU(s,w,T,a),d.push(k),_.set(w,k)),k}function P(T){if(--T.usedTimes===0){const w=d.indexOf(T);d[w]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){f.remove(T)}function L(){f.dispose()}return{getParameters:E,getProgramCacheKey:S,getUniforms:D,acquireProgram:C,releaseProgram:P,releaseShaderCache:O,programs:d,dispose:L}}function wU(){let s=new WeakMap;function t(c){return s.has(c)}function e(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function i(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:l}}function DU(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function KM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function JM(){const s=[];let t=0;const e=[],i=[],a=[];function l(){t=0,e.length=0,i.length=0,a.length=0}function c(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function f(g,x,y,E,S,M){let A=s[t];return A===void 0?(A={id:g.id,object:g,geometry:x,material:y,materialVariant:c(g),groupOrder:E,renderOrder:g.renderOrder,z:S,group:M},s[t]=A):(A.id=g.id,A.object=g,A.geometry=x,A.material=y,A.materialVariant=c(g),A.groupOrder=E,A.renderOrder=g.renderOrder,A.z=S,A.group=M),t++,A}function h(g,x,y,E,S,M){const A=f(g,x,y,E,S,M);y.transmission>0?i.push(A):y.transparent===!0?a.push(A):e.push(A)}function d(g,x,y,E,S,M){const A=f(g,x,y,E,S,M);y.transmission>0?i.unshift(A):y.transparent===!0?a.unshift(A):e.unshift(A)}function _(g,x){e.length>1&&e.sort(g||DU),i.length>1&&i.sort(x||KM),a.length>1&&a.sort(x||KM)}function v(){for(let g=t,x=s.length;g<x;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:a,init:l,push:h,unshift:d,finish:v,sort:_}}function UU(){let s=new WeakMap;function t(i,a){const l=s.get(i);let c;return l===void 0?(c=new JM,s.set(i,[c])):a>=l.length?(c=new JM,l.push(c)):c=l[a],c}function e(){s=new WeakMap}return{get:t,dispose:e}}function LU(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new Ie};break;case"SpotLight":e={position:new nt,direction:new nt,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":e={color:new Ie,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return s[t.id]=e,e}}}function NU(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let OU=0;function PU(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function zU(s){const t=new LU,e=NU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new nt);const a=new nt,l=new Nn,c=new Nn;function f(d){let _=0,v=0,g=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let x=0,y=0,E=0,S=0,M=0,A=0,D=0,C=0,P=0,O=0,L=0;d.sort(PU);for(let w=0,k=d.length;w<k;w++){const I=d[w],G=I.color,J=I.intensity,$=I.distance;let Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===iu?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)_+=G.r*J,v+=G.g*J,g+=G.b*J;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],J);L++}else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const F=I.shadow,tt=e.get(I);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,i.directionalShadow[x]=tt,i.directionalShadowMap[x]=Q,i.directionalShadowMatrix[x]=I.shadow.matrix,A++}i.directional[x]=z,x++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(G).multiplyScalar(J),z.distance=$,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[E]=z;const F=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,F.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[E]=F.matrix,I.castShadow){const tt=e.get(I);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,i.spotShadow[E]=tt,i.spotShadowMap[E]=Q,C++}E++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(G).multiplyScalar(J),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=z,S++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const F=I.shadow,tt=e.get(I);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,tt.shadowCameraNear=F.camera.near,tt.shadowCameraFar=F.camera.far,i.pointShadow[y]=tt,i.pointShadowMap[y]=Q,i.pointShadowMatrix[y]=I.shadow.matrix,D++}i.point[y]=z,y++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(J),z.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[M]=z,M++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Gt.LTC_FLOAT_1,i.rectAreaLTC2=Gt.LTC_FLOAT_2):(i.rectAreaLTC1=Gt.LTC_HALF_1,i.rectAreaLTC2=Gt.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=v,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==x||T.pointLength!==y||T.spotLength!==E||T.rectAreaLength!==S||T.hemiLength!==M||T.numDirectionalShadows!==A||T.numPointShadows!==D||T.numSpotShadows!==C||T.numSpotMaps!==P||T.numLightProbes!==L)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=S,i.point.length=y,i.hemi.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=C+P-O,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=L,T.directionalLength=x,T.pointLength=y,T.spotLength=E,T.rectAreaLength=S,T.hemiLength=M,T.numDirectionalShadows=A,T.numPointShadows=D,T.numSpotShadows=C,T.numSpotMaps=P,T.numLightProbes=L,i.version=OU++)}function h(d,_){let v=0,g=0,x=0,y=0,E=0;const S=_.matrixWorldInverse;for(let M=0,A=d.length;M<A;M++){const D=d[M];if(D.isDirectionalLight){const C=i.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),v++}else if(D.isSpotLight){const C=i.spot[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const C=i.rectArea[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),c.identity(),l.copy(D.matrixWorld),l.premultiply(S),c.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),y++}else if(D.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),g++}else if(D.isHemisphereLight){const C=i.hemi[E];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:f,setupView:h,state:i}}function $M(s){const t=new zU(s),e=[],i=[];function a(_){d.camera=_,e.length=0,i.length=0}function l(_){e.push(_)}function c(_){i.push(_)}function f(){t.setup(e)}function h(_){t.setupView(e,_)}const d={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function FU(s){let t=new WeakMap;function e(a,l=0){const c=t.get(a);let f;return c===void 0?(f=new $M(s),t.set(a,[f])):l>=c.length?(f=new $M(s),c.push(f)):f=c[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const BU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HU=[new nt(1,0,0),new nt(-1,0,0),new nt(0,1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1)],VU=[new nt(0,-1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1),new nt(0,-1,0),new nt(0,-1,0)],t1=new Nn,pc=new nt,H_=new nt;function GU(s,t,e){let i=new sE;const a=new qt,l=new qt,c=new Fn,f=new n2,h=new i2,d={},_=e.maxTextureSize,v={[Ys]:Hi,[Hi]:Ys,[ia]:ia},g=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:BU,fragmentShader:IU}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new ir;y.setAttribute("position",new Tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new br(y,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let M=this.type;this.render=function(O,L,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;this.type===hC&&(xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ld);const w=s.getRenderTarget(),k=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Sa),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=M!==this.type;J&&L.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(Q=>Q.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,Q=O.length;$<Q;$++){const z=O[$],F=z.shadow;if(F===void 0){xe("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);const tt=F.getFrameExtents();a.multiply(tt),l.copy(F.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/tt.x),a.x=l.x*tt.x,F.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/tt.y),a.y=l.y*tt.y,F.mapSize.y=l.y));const ct=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ct,F.map===null||J===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===vc){if(z.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Qi(a.x,a.y,{format:iu,type:Er,minFilter:bi,magFilter:bi,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new Yc(a.x,a.y,_a),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=ns,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=hi,F.map.depthTexture.magFilter=hi}else z.isPointLight?(F.map=new yE(a.x),F.map.depthTexture=new xR(a.x,Ea)):(F.map=new Qi(a.x,a.y),F.map.depthTexture=new Yc(a.x,a.y,Ea)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=ns,this.type===ld?(F.map.depthTexture.compareFunction=ct?U0:D0,F.map.depthTexture.minFilter=bi,F.map.depthTexture.magFilter=bi):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=hi,F.map.depthTexture.magFilter=hi);F.camera.updateProjectionMatrix()}const V=F.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<V;B++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,B),s.clear();else{B===0&&(s.setRenderTarget(F.map),s.clear());const K=F.getViewport(B);c.set(l.x*K.x,l.y*K.y,l.x*K.z,l.y*K.w),G.viewport(c)}if(z.isPointLight){const K=F.camera,vt=F.matrix,Tt=z.distance||K.far;Tt!==K.far&&(K.far=Tt,K.updateProjectionMatrix()),pc.setFromMatrixPosition(z.matrixWorld),K.position.copy(pc),H_.copy(K.position),H_.add(HU[B]),K.up.copy(VU[B]),K.lookAt(H_),K.updateMatrixWorld(),vt.makeTranslation(-pc.x,-pc.y,-pc.z),t1.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F._frustum.setFromProjectionMatrix(t1,K.coordinateSystem,K.reversedDepth)}else F.updateMatrices(z);i=F.getFrustum(),C(L,T,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===vc&&A(F,T),F.needsUpdate=!1}M=this.type,S.needsUpdate=!1,s.setRenderTarget(w,k,I)};function A(O,L){const T=t.update(E);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Qi(a.x,a.y,{format:iu,type:Er})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(L,null,T,g,E,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(L,null,T,x,E,null)}function D(O,L,T,w){let k=null;const I=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(I!==void 0)k=I;else if(k=T.isPointLight===!0?h:f,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const G=k.uuid,J=L.uuid;let $=d[G];$===void 0&&($={},d[G]=$);let Q=$[J];Q===void 0&&(Q=k.clone(),$[J]=Q,L.addEventListener("dispose",P)),k=Q}if(k.visible=L.visible,k.wireframe=L.wireframe,w===vc?k.side=L.shadowSide!==null?L.shadowSide:L.side:k.side=L.shadowSide!==null?L.shadowSide:v[L.side],k.alphaMap=L.alphaMap,k.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,k.map=L.map,k.clipShadows=L.clipShadows,k.clippingPlanes=L.clippingPlanes,k.clipIntersection=L.clipIntersection,k.displacementMap=L.displacementMap,k.displacementScale=L.displacementScale,k.displacementBias=L.displacementBias,k.wireframeLinewidth=L.wireframeLinewidth,k.linewidth=L.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const G=s.properties.get(k);G.light=T}return k}function C(O,L,T,w,k){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&k===vc)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const J=t.update(O),$=O.material;if(Array.isArray($)){const Q=J.groups;for(let z=0,F=Q.length;z<F;z++){const tt=Q[z],ct=$[tt.materialIndex];if(ct&&ct.visible){const V=D(O,ct,w,k);O.onBeforeShadow(s,O,L,T,J,V,tt),s.renderBufferDirect(T,null,J,V,O,tt),O.onAfterShadow(s,O,L,T,J,V,tt)}}}else if($.visible){const Q=D(O,$,w,k);O.onBeforeShadow(s,O,L,T,J,Q,null),s.renderBufferDirect(T,null,J,Q,O,null),O.onAfterShadow(s,O,L,T,J,Q,null)}}const G=O.children;for(let J=0,$=G.length;J<$;J++)C(G[J],L,T,w,k)}function P(O){O.target.removeEventListener("dispose",P);for(const T in d){const w=d[T],k=O.target.uuid;k in w&&(w[k].dispose(),delete w[k])}}}function kU(s,t){function e(){let X=!1;const wt=new Fn;let Ct=null;const Lt=new Fn(0,0,0,0);return{setMask:function(Et){Ct!==Et&&!X&&(s.colorMask(Et,Et,Et,Et),Ct=Et)},setLocked:function(Et){X=Et},setClear:function(Et,pt,kt,le,ke){ke===!0&&(Et*=le,pt*=le,kt*=le),wt.set(Et,pt,kt,le),Lt.equals(wt)===!1&&(s.clearColor(Et,pt,kt,le),Lt.copy(wt))},reset:function(){X=!1,Ct=null,Lt.set(-1,0,0,0)}}}function i(){let X=!1,wt=!1,Ct=null,Lt=null,Et=null;return{setReversed:function(pt){if(wt!==pt){const kt=t.get("EXT_clip_control");pt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),wt=pt;const le=Et;Et=null,this.setClear(le)}},getReversed:function(){return wt},setTest:function(pt){pt?mt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(pt){Ct!==pt&&!X&&(s.depthMask(pt),Ct=pt)},setFunc:function(pt){if(wt&&(pt=YC[pt]),Lt!==pt){switch(pt){case rg:s.depthFunc(s.NEVER);break;case ag:s.depthFunc(s.ALWAYS);break;case sg:s.depthFunc(s.LESS);break;case eu:s.depthFunc(s.LEQUAL);break;case og:s.depthFunc(s.EQUAL);break;case lg:s.depthFunc(s.GEQUAL);break;case ug:s.depthFunc(s.GREATER);break;case cg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Lt=pt}},setLocked:function(pt){X=pt},setClear:function(pt){Et!==pt&&(Et=pt,wt&&(pt=1-pt),s.clearDepth(pt))},reset:function(){X=!1,Ct=null,Lt=null,Et=null,wt=!1}}}function a(){let X=!1,wt=null,Ct=null,Lt=null,Et=null,pt=null,kt=null,le=null,ke=null;return{setTest:function(Vt){X||(Vt?mt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(Vt){wt!==Vt&&!X&&(s.stencilMask(Vt),wt=Vt)},setFunc:function(Vt,Jt,Te){(Ct!==Vt||Lt!==Jt||Et!==Te)&&(s.stencilFunc(Vt,Jt,Te),Ct=Vt,Lt=Jt,Et=Te)},setOp:function(Vt,Jt,Te){(pt!==Vt||kt!==Jt||le!==Te)&&(s.stencilOp(Vt,Jt,Te),pt=Vt,kt=Jt,le=Te)},setLocked:function(Vt){X=Vt},setClear:function(Vt){ke!==Vt&&(s.clearStencil(Vt),ke=Vt)},reset:function(){X=!1,wt=null,Ct=null,Lt=null,Et=null,pt=null,kt=null,le=null,ke=null}}}const l=new e,c=new i,f=new a,h=new WeakMap,d=new WeakMap;let _={},v={},g=new WeakMap,x=[],y=null,E=!1,S=null,M=null,A=null,D=null,C=null,P=null,O=null,L=new Ie(0,0,0),T=0,w=!1,k=null,I=null,G=null,J=null,$=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,F=0;const tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(tt)[1]),z=F>=1):tt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),z=F>=2);let ct=null,V={};const B=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),vt=new Fn().fromArray(B),Tt=new Fn().fromArray(K);function Dt(X,wt,Ct,Lt){const Et=new Uint8Array(4),pt=s.createTexture();s.bindTexture(X,pt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<Ct;kt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(wt+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return pt}const it={};it[s.TEXTURE_2D]=Dt(s.TEXTURE_2D,s.TEXTURE_2D,1),it[s.TEXTURE_CUBE_MAP]=Dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[s.TEXTURE_2D_ARRAY]=Dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),it[s.TEXTURE_3D]=Dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),mt(s.DEPTH_TEST),c.setFunc(eu),se(!1),lt($y),mt(s.CULL_FACE),ae(Sa);function mt(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function Mt(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function Pt(X,wt){return v[X]!==wt?(s.bindFramebuffer(X,wt),v[X]=wt,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=wt),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function ee(X,wt){let Ct=x,Lt=!1;if(X){Ct=g.get(wt),Ct===void 0&&(Ct=[],g.set(wt,Ct));const Et=X.textures;if(Ct.length!==Et.length||Ct[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,kt=Et.length;pt<kt;pt++)Ct[pt]=s.COLOR_ATTACHMENT0+pt;Ct.length=Et.length,Lt=!0}}else Ct[0]!==s.BACK&&(Ct[0]=s.BACK,Lt=!0);Lt&&s.drawBuffers(Ct)}function Qt(X){return y!==X?(s.useProgram(X),y=X,!0):!1}const Le={[Co]:s.FUNC_ADD,[pC]:s.FUNC_SUBTRACT,[mC]:s.FUNC_REVERSE_SUBTRACT};Le[_C]=s.MIN,Le[gC]=s.MAX;const Yt={[vC]:s.ZERO,[xC]:s.ONE,[SC]:s.SRC_COLOR,[ng]:s.SRC_ALPHA,[AC]:s.SRC_ALPHA_SATURATE,[TC]:s.DST_COLOR,[MC]:s.DST_ALPHA,[yC]:s.ONE_MINUS_SRC_COLOR,[ig]:s.ONE_MINUS_SRC_ALPHA,[bC]:s.ONE_MINUS_DST_COLOR,[EC]:s.ONE_MINUS_DST_ALPHA,[CC]:s.CONSTANT_COLOR,[RC]:s.ONE_MINUS_CONSTANT_COLOR,[wC]:s.CONSTANT_ALPHA,[DC]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(X,wt,Ct,Lt,Et,pt,kt,le,ke,Vt){if(X===Sa){E===!0&&(Mt(s.BLEND),E=!1);return}if(E===!1&&(mt(s.BLEND),E=!0),X!==dC){if(X!==S||Vt!==w){if((M!==Co||C!==Co)&&(s.blendEquation(s.FUNC_ADD),M=Co,C=Co),Vt)switch(X){case Yl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ql:s.blendFunc(s.ONE,s.ONE);break;case tM:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eM:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ke("WebGLState: Invalid blending: ",X);break}else switch(X){case Yl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ql:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tM:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eM:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",X);break}A=null,D=null,P=null,O=null,L.set(0,0,0),T=0,S=X,w=Vt}return}Et=Et||wt,pt=pt||Ct,kt=kt||Lt,(wt!==M||Et!==C)&&(s.blendEquationSeparate(Le[wt],Le[Et]),M=wt,C=Et),(Ct!==A||Lt!==D||pt!==P||kt!==O)&&(s.blendFuncSeparate(Yt[Ct],Yt[Lt],Yt[pt],Yt[kt]),A=Ct,D=Lt,P=pt,O=kt),(le.equals(L)===!1||ke!==T)&&(s.blendColor(le.r,le.g,le.b,ke),L.copy(le),T=ke),S=X,w=!1}function _e(X,wt){X.side===ia?Mt(s.CULL_FACE):mt(s.CULL_FACE);let Ct=X.side===Hi;wt&&(Ct=!Ct),se(Ct),X.blending===Yl&&X.transparent===!1?ae(Sa):ae(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const Lt=X.stencilWrite;f.setTest(Lt),Lt&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ye(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){k!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),k=X)}function lt(X){X!==cC?(mt(s.CULL_FACE),X!==I&&(X===$y?s.cullFace(s.BACK):X===fC?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),I=X}function Y(X){X!==G&&(z&&s.lineWidth(X),G=X)}function Ye(X,wt,Ct){X?(mt(s.POLYGON_OFFSET_FILL),(J!==wt||$!==Ct)&&(J=wt,$=Ct,c.getReversed()&&(wt=-wt),s.polygonOffset(wt,Ct))):Mt(s.POLYGON_OFFSET_FILL)}function Ee(X){X?mt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function ce(X){X===void 0&&(X=s.TEXTURE0+Q-1),ct!==X&&(s.activeTexture(X),ct=X)}function Xt(X,wt,Ct){Ct===void 0&&(ct===null?Ct=s.TEXTURE0+Q-1:Ct=ct);let Lt=V[Ct];Lt===void 0&&(Lt={type:void 0,texture:void 0},V[Ct]=Lt),(Lt.type!==X||Lt.texture!==wt)&&(ct!==Ct&&(s.activeTexture(Ct),ct=Ct),s.bindTexture(X,wt||it[X]),Lt.type=X,Lt.texture=wt)}function H(){const X=V[ct];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function R(){try{s.compressedTexImage2D(...arguments)}catch(X){Ke("WebGLState:",X)}}function Z(){try{s.compressedTexImage3D(...arguments)}catch(X){Ke("WebGLState:",X)}}function _t(){try{s.texSubImage2D(...arguments)}catch(X){Ke("WebGLState:",X)}}function gt(){try{s.texSubImage3D(...arguments)}catch(X){Ke("WebGLState:",X)}}function ht(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Ke("WebGLState:",X)}}function Ht(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Ke("WebGLState:",X)}}function Rt(){try{s.texStorage2D(...arguments)}catch(X){Ke("WebGLState:",X)}}function ie(){try{s.texStorage3D(...arguments)}catch(X){Ke("WebGLState:",X)}}function Wt(){try{s.texImage2D(...arguments)}catch(X){Ke("WebGLState:",X)}}function At(){try{s.texImage3D(...arguments)}catch(X){Ke("WebGLState:",X)}}function bt(X){vt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),vt.copy(X))}function It(X){Tt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Tt.copy(X))}function Ot(X,wt){let Ct=d.get(wt);Ct===void 0&&(Ct=new WeakMap,d.set(wt,Ct));let Lt=Ct.get(X);Lt===void 0&&(Lt=s.getUniformBlockIndex(wt,X.name),Ct.set(X,Lt))}function zt(X,wt){const Lt=d.get(wt).get(X);h.get(wt)!==Lt&&(s.uniformBlockBinding(wt,Lt,X.__bindingPointIndex),h.set(wt,Lt))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ct=null,V={},v={},g=new WeakMap,x=[],y=null,E=!1,S=null,M=null,A=null,D=null,C=null,P=null,O=null,L=new Ie(0,0,0),T=0,w=!1,k=null,I=null,G=null,J=null,$=null,vt.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:mt,disable:Mt,bindFramebuffer:Pt,drawBuffers:ee,useProgram:Qt,setBlending:ae,setMaterial:_e,setFlipSided:se,setCullFace:lt,setLineWidth:Y,setPolygonOffset:Ye,setScissorTest:Ee,activeTexture:ce,bindTexture:Xt,unbindTexture:H,compressedTexImage2D:R,compressedTexImage3D:Z,texImage2D:Wt,texImage3D:At,updateUBOMapping:Ot,uniformBlockBinding:zt,texStorage2D:Rt,texStorage3D:ie,texSubImage2D:_t,texSubImage3D:gt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Ht,scissor:bt,viewport:It,reset:pe}}function XU(s,t,e,i,a,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new qt,_=new WeakMap;let v;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(H,R){return x?new OffscreenCanvas(H,R):Ad("canvas")}function E(H,R,Z){let _t=1;const gt=Xt(H);if((gt.width>Z||gt.height>Z)&&(_t=Z/Math.max(gt.width,gt.height)),_t<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const ht=Math.floor(_t*gt.width),Ht=Math.floor(_t*gt.height);v===void 0&&(v=y(ht,Ht));const Rt=R?y(ht,Ht):v;return Rt.width=ht,Rt.height=Ht,Rt.getContext("2d").drawImage(H,0,0,ht,Ht),xe("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ht+"x"+Ht+")."),Rt}else return"data"in H&&xe("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),H;return H}function S(H){return H.generateMipmaps}function M(H){s.generateMipmap(H)}function A(H){return H.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?s.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(H,R,Z,_t,gt=!1){if(H!==null){if(s[H]!==void 0)return s[H];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let ht=R;if(R===s.RED&&(Z===s.FLOAT&&(ht=s.R32F),Z===s.HALF_FLOAT&&(ht=s.R16F),Z===s.UNSIGNED_BYTE&&(ht=s.R8)),R===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.R8UI),Z===s.UNSIGNED_SHORT&&(ht=s.R16UI),Z===s.UNSIGNED_INT&&(ht=s.R32UI),Z===s.BYTE&&(ht=s.R8I),Z===s.SHORT&&(ht=s.R16I),Z===s.INT&&(ht=s.R32I)),R===s.RG&&(Z===s.FLOAT&&(ht=s.RG32F),Z===s.HALF_FLOAT&&(ht=s.RG16F),Z===s.UNSIGNED_BYTE&&(ht=s.RG8)),R===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RG16UI),Z===s.UNSIGNED_INT&&(ht=s.RG32UI),Z===s.BYTE&&(ht=s.RG8I),Z===s.SHORT&&(ht=s.RG16I),Z===s.INT&&(ht=s.RG32I)),R===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),Z===s.UNSIGNED_INT&&(ht=s.RGB32UI),Z===s.BYTE&&(ht=s.RGB8I),Z===s.SHORT&&(ht=s.RGB16I),Z===s.INT&&(ht=s.RGB32I)),R===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ht=s.RGBA32UI),Z===s.BYTE&&(ht=s.RGBA8I),Z===s.SHORT&&(ht=s.RGBA16I),Z===s.INT&&(ht=s.RGBA32I)),R===s.RGB&&(Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),R===s.RGBA){const Ht=gt?Td:qe.getTransfer(_t);Z===s.FLOAT&&(ht=s.RGBA32F),Z===s.HALF_FLOAT&&(ht=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ht=Ht===an?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function C(H,R){let Z;return H?R===null||R===Ea||R===Wc?Z=s.DEPTH24_STENCIL8:R===_a?Z=s.DEPTH32F_STENCIL8:R===Xc&&(Z=s.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ea||R===Wc?Z=s.DEPTH_COMPONENT24:R===_a?Z=s.DEPTH_COMPONENT32F:R===Xc&&(Z=s.DEPTH_COMPONENT16),Z}function P(H,R){return S(H)===!0||H.isFramebufferTexture&&H.minFilter!==hi&&H.minFilter!==bi?Math.log2(Math.max(R.width,R.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?R.mipmaps.length:1}function O(H){const R=H.target;R.removeEventListener("dispose",O),T(R),R.isVideoTexture&&_.delete(R)}function L(H){const R=H.target;R.removeEventListener("dispose",L),k(R)}function T(H){const R=i.get(H);if(R.__webglInit===void 0)return;const Z=H.source,_t=g.get(Z);if(_t){const gt=_t[R.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&w(H),Object.keys(_t).length===0&&g.delete(Z)}i.remove(H)}function w(H){const R=i.get(H);s.deleteTexture(R.__webglTexture);const Z=H.source,_t=g.get(Z);delete _t[R.__cacheKey],c.memory.textures--}function k(H){const R=i.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),i.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(R.__webglFramebuffer[_t]))for(let gt=0;gt<R.__webglFramebuffer[_t].length;gt++)s.deleteFramebuffer(R.__webglFramebuffer[_t][gt]);else s.deleteFramebuffer(R.__webglFramebuffer[_t]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[_t])}else{if(Array.isArray(R.__webglFramebuffer))for(let _t=0;_t<R.__webglFramebuffer.length;_t++)s.deleteFramebuffer(R.__webglFramebuffer[_t]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _t=0;_t<R.__webglColorRenderbuffer.length;_t++)R.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[_t]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=H.textures;for(let _t=0,gt=Z.length;_t<gt;_t++){const ht=i.get(Z[_t]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),c.memory.textures--),i.remove(Z[_t])}i.remove(H)}let I=0;function G(){I=0}function J(){const H=I;return H>=a.maxTextures&&xe("WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+a.maxTextures),I+=1,H}function $(H){const R=[];return R.push(H.wrapS),R.push(H.wrapT),R.push(H.wrapR||0),R.push(H.magFilter),R.push(H.minFilter),R.push(H.anisotropy),R.push(H.internalFormat),R.push(H.format),R.push(H.type),R.push(H.generateMipmaps),R.push(H.premultiplyAlpha),R.push(H.flipY),R.push(H.unpackAlignment),R.push(H.colorSpace),R.join()}function Q(H,R){const Z=i.get(H);if(H.isVideoTexture&&Ee(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&Z.__version!==H.version){const _t=H.image;if(_t===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Z,H,R);return}}else H.isExternalTexture&&(Z.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+R)}function z(H,R){const Z=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&Z.__version!==H.version){it(Z,H,R);return}else H.isExternalTexture&&(Z.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+R)}function F(H,R){const Z=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&Z.__version!==H.version){it(Z,H,R);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+R)}function tt(H,R){const Z=i.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&Z.__version!==H.version){mt(Z,H,R);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+R)}const ct={[fg]:s.REPEAT,[Ja]:s.CLAMP_TO_EDGE,[hg]:s.MIRRORED_REPEAT},V={[hi]:s.NEAREST,[NC]:s.NEAREST_MIPMAP_NEAREST,[yh]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[o_]:s.LINEAR_MIPMAP_NEAREST,[wo]:s.LINEAR_MIPMAP_LINEAR},B={[FC]:s.NEVER,[GC]:s.ALWAYS,[BC]:s.LESS,[D0]:s.LEQUAL,[IC]:s.EQUAL,[U0]:s.GEQUAL,[HC]:s.GREATER,[VC]:s.NOTEQUAL};function K(H,R){if(R.type===_a&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===bi||R.magFilter===o_||R.magFilter===yh||R.magFilter===wo||R.minFilter===bi||R.minFilter===o_||R.minFilter===yh||R.minFilter===wo)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(H,s.TEXTURE_WRAP_S,ct[R.wrapS]),s.texParameteri(H,s.TEXTURE_WRAP_T,ct[R.wrapT]),(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)&&s.texParameteri(H,s.TEXTURE_WRAP_R,ct[R.wrapR]),s.texParameteri(H,s.TEXTURE_MAG_FILTER,V[R.magFilter]),s.texParameteri(H,s.TEXTURE_MIN_FILTER,V[R.minFilter]),R.compareFunction&&(s.texParameteri(H,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(H,s.TEXTURE_COMPARE_FUNC,B[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===hi||R.minFilter!==yh&&R.minFilter!==wo||R.type===_a&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(H,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,a.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function vt(H,R){let Z=!1;H.__webglInit===void 0&&(H.__webglInit=!0,R.addEventListener("dispose",O));const _t=R.source;let gt=g.get(_t);gt===void 0&&(gt={},g.set(_t,gt));const ht=$(R);if(ht!==H.__cacheKey){gt[ht]===void 0&&(gt[ht]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),gt[ht].usedTimes++;const Ht=gt[H.__cacheKey];Ht!==void 0&&(gt[H.__cacheKey].usedTimes--,Ht.usedTimes===0&&w(R)),H.__cacheKey=ht,H.__webglTexture=gt[ht].texture}return Z}function Tt(H,R,Z){return Math.floor(Math.floor(H/Z)/R)}function Dt(H,R,Z,_t){const ht=H.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,R.width,R.height,Z,_t,R.data);else{ht.sort((At,bt)=>At.start-bt.start);let Ht=0;for(let At=1;At<ht.length;At++){const bt=ht[Ht],It=ht[At],Ot=bt.start+bt.count,zt=Tt(It.start,R.width,4),pe=Tt(bt.start,R.width,4);It.start<=Ot+1&&zt===pe&&Tt(It.start+It.count-1,R.width,4)===zt?bt.count=Math.max(bt.count,It.start+It.count-bt.start):(++Ht,ht[Ht]=It)}ht.length=Ht+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),ie=s.getParameter(s.UNPACK_SKIP_PIXELS),Wt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,R.width);for(let At=0,bt=ht.length;At<bt;At++){const It=ht[At],Ot=Math.floor(It.start/4),zt=Math.ceil(It.count/4),pe=Ot%R.width,X=Math.floor(Ot/R.width),wt=zt,Ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),e.texSubImage2D(s.TEXTURE_2D,0,pe,X,wt,Ct,Z,_t,R.data)}H.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,Wt)}}function it(H,R,Z){let _t=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_t=s.TEXTURE_3D);const gt=vt(H,R),ht=R.source;e.bindTexture(_t,H.__webglTexture,s.TEXTURE0+Z);const Ht=i.get(ht);if(ht.version!==Ht.__version||gt===!0){e.activeTexture(s.TEXTURE0+Z);const Rt=qe.getPrimaries(qe.workingColorSpace),ie=R.colorSpace===zs?null:qe.getPrimaries(R.colorSpace),Wt=R.colorSpace===zs||Rt===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let At=E(R.image,!1,a.maxTextureSize);At=ce(R,At);const bt=l.convert(R.format,R.colorSpace),It=l.convert(R.type);let Ot=D(R.internalFormat,bt,It,R.colorSpace,R.isVideoTexture);K(_t,R);let zt;const pe=R.mipmaps,X=R.isVideoTexture!==!0,wt=Ht.__version===void 0||gt===!0,Ct=ht.dataReady,Lt=P(R,At);if(R.isDepthTexture)Ot=C(R.format===Do,R.type),wt&&(X?e.texStorage2D(s.TEXTURE_2D,1,Ot,At.width,At.height):e.texImage2D(s.TEXTURE_2D,0,Ot,At.width,At.height,0,bt,It,null));else if(R.isDataTexture)if(pe.length>0){X&&wt&&e.texStorage2D(s.TEXTURE_2D,Lt,Ot,pe[0].width,pe[0].height);for(let Et=0,pt=pe.length;Et<pt;Et++)zt=pe[Et],X?Ct&&e.texSubImage2D(s.TEXTURE_2D,Et,0,0,zt.width,zt.height,bt,It,zt.data):e.texImage2D(s.TEXTURE_2D,Et,Ot,zt.width,zt.height,0,bt,It,zt.data);R.generateMipmaps=!1}else X?(wt&&e.texStorage2D(s.TEXTURE_2D,Lt,Ot,At.width,At.height),Ct&&Dt(R,At,bt,It)):e.texImage2D(s.TEXTURE_2D,0,Ot,At.width,At.height,0,bt,It,At.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){X&&wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Ot,pe[0].width,pe[0].height,At.depth);for(let Et=0,pt=pe.length;Et<pt;Et++)if(zt=pe[Et],R.format!==aa)if(bt!==null)if(X){if(Ct)if(R.layerUpdates.size>0){const kt=UM(zt.width,zt.height,R.format,R.type);for(const le of R.layerUpdates){const ke=zt.data.subarray(le*kt/zt.data.BYTES_PER_ELEMENT,(le+1)*kt/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,le,zt.width,zt.height,1,bt,ke)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,At.depth,bt,zt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Et,Ot,zt.width,zt.height,At.depth,0,zt.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,At.depth,bt,It,zt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Et,Ot,zt.width,zt.height,At.depth,0,bt,It,zt.data)}else{X&&wt&&e.texStorage2D(s.TEXTURE_2D,Lt,Ot,pe[0].width,pe[0].height);for(let Et=0,pt=pe.length;Et<pt;Et++)zt=pe[Et],R.format!==aa?bt!==null?X?Ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,Et,0,0,zt.width,zt.height,bt,zt.data):e.compressedTexImage2D(s.TEXTURE_2D,Et,Ot,zt.width,zt.height,0,zt.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ct&&e.texSubImage2D(s.TEXTURE_2D,Et,0,0,zt.width,zt.height,bt,It,zt.data):e.texImage2D(s.TEXTURE_2D,Et,Ot,zt.width,zt.height,0,bt,It,zt.data)}else if(R.isDataArrayTexture)if(X){if(wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Ot,At.width,At.height,At.depth),Ct)if(R.layerUpdates.size>0){const Et=UM(At.width,At.height,R.format,R.type);for(const pt of R.layerUpdates){const kt=At.data.subarray(pt*Et/At.data.BYTES_PER_ELEMENT,(pt+1)*Et/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,At.width,At.height,1,bt,It,kt)}R.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,bt,It,At.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,At.width,At.height,At.depth,0,bt,It,At.data);else if(R.isData3DTexture)X?(wt&&e.texStorage3D(s.TEXTURE_3D,Lt,Ot,At.width,At.height,At.depth),Ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,bt,It,At.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,At.width,At.height,At.depth,0,bt,It,At.data);else if(R.isFramebufferTexture){if(wt)if(X)e.texStorage2D(s.TEXTURE_2D,Lt,Ot,At.width,At.height);else{let Et=At.width,pt=At.height;for(let kt=0;kt<Lt;kt++)e.texImage2D(s.TEXTURE_2D,kt,Ot,Et,pt,0,bt,It,null),Et>>=1,pt>>=1}}else if(pe.length>0){if(X&&wt){const Et=Xt(pe[0]);e.texStorage2D(s.TEXTURE_2D,Lt,Ot,Et.width,Et.height)}for(let Et=0,pt=pe.length;Et<pt;Et++)zt=pe[Et],X?Ct&&e.texSubImage2D(s.TEXTURE_2D,Et,0,0,bt,It,zt):e.texImage2D(s.TEXTURE_2D,Et,Ot,bt,It,zt);R.generateMipmaps=!1}else if(X){if(wt){const Et=Xt(At);e.texStorage2D(s.TEXTURE_2D,Lt,Ot,Et.width,Et.height)}Ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,It,At)}else e.texImage2D(s.TEXTURE_2D,0,Ot,bt,It,At);S(R)&&M(_t),Ht.__version=ht.version,R.onUpdate&&R.onUpdate(R)}H.__version=R.version}function mt(H,R,Z){if(R.image.length!==6)return;const _t=vt(H,R),gt=R.source;e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+Z);const ht=i.get(gt);if(gt.version!==ht.__version||_t===!0){e.activeTexture(s.TEXTURE0+Z);const Ht=qe.getPrimaries(qe.workingColorSpace),Rt=R.colorSpace===zs?null:qe.getPrimaries(R.colorSpace),ie=R.colorSpace===zs||Ht===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Wt=R.isCompressedTexture||R.image[0].isCompressedTexture,At=R.image[0]&&R.image[0].isDataTexture,bt=[];for(let pt=0;pt<6;pt++)!Wt&&!At?bt[pt]=E(R.image[pt],!0,a.maxCubemapSize):bt[pt]=At?R.image[pt].image:R.image[pt],bt[pt]=ce(R,bt[pt]);const It=bt[0],Ot=l.convert(R.format,R.colorSpace),zt=l.convert(R.type),pe=D(R.internalFormat,Ot,zt,R.colorSpace),X=R.isVideoTexture!==!0,wt=ht.__version===void 0||_t===!0,Ct=gt.dataReady;let Lt=P(R,It);K(s.TEXTURE_CUBE_MAP,R);let Et;if(Wt){X&&wt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,pe,It.width,It.height);for(let pt=0;pt<6;pt++){Et=bt[pt].mipmaps;for(let kt=0;kt<Et.length;kt++){const le=Et[kt];R.format!==aa?Ot!==null?X?Ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,0,0,le.width,le.height,Ot,le.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,pe,le.width,le.height,0,le.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,0,0,le.width,le.height,Ot,zt,le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt,pe,le.width,le.height,0,Ot,zt,le.data)}}}else{if(Et=R.mipmaps,X&&wt){Et.length>0&&Lt++;const pt=Xt(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,pe,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(At){X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,bt[pt].width,bt[pt].height,Ot,zt,bt[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,pe,bt[pt].width,bt[pt].height,0,Ot,zt,bt[pt].data);for(let kt=0;kt<Et.length;kt++){const ke=Et[kt].image[pt].image;X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,0,0,ke.width,ke.height,Ot,zt,ke.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,pe,ke.width,ke.height,0,Ot,zt,ke.data)}}else{X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ot,zt,bt[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,pe,Ot,zt,bt[pt]);for(let kt=0;kt<Et.length;kt++){const le=Et[kt];X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,0,0,Ot,zt,le.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,kt+1,pe,Ot,zt,le.image[pt])}}}S(R)&&M(s.TEXTURE_CUBE_MAP),ht.__version=gt.version,R.onUpdate&&R.onUpdate(R)}H.__version=R.version}function Mt(H,R,Z,_t,gt,ht){const Ht=l.convert(Z.format,Z.colorSpace),Rt=l.convert(Z.type),ie=D(Z.internalFormat,Ht,Rt,Z.colorSpace),Wt=i.get(R),At=i.get(Z);if(At.__renderTarget=R,!Wt.__hasExternalTextures){const bt=Math.max(1,R.width>>ht),It=Math.max(1,R.height>>ht);gt===s.TEXTURE_3D||gt===s.TEXTURE_2D_ARRAY?e.texImage3D(gt,ht,ie,bt,It,R.depth,0,Ht,Rt,null):e.texImage2D(gt,ht,ie,bt,It,0,Ht,Rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,H),Ye(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,gt,At.__webglTexture,0,Y(R)):(gt===s.TEXTURE_2D||gt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,gt,At.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(H,R,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,H),R.depthBuffer){const _t=R.depthTexture,gt=_t&&_t.isDepthTexture?_t.type:null,ht=C(R.stencilBuffer,gt),Ht=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ye(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y(R),ht,R.width,R.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Y(R),ht,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,ht,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ht,s.RENDERBUFFER,H)}else{const _t=R.textures;for(let gt=0;gt<_t.length;gt++){const ht=_t[gt],Ht=l.convert(ht.format,ht.colorSpace),Rt=l.convert(ht.type),ie=D(ht.internalFormat,Ht,Rt,ht.colorSpace);Ye(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y(R),ie,R.width,R.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Y(R),ie,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,ie,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(H,R,Z){const _t=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,H),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=i.get(R.depthTexture);if(gt.__renderTarget=R,(!gt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),_t){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,R.depthTexture.addEventListener("dispose",O)),gt.__webglTexture===void 0){gt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),K(s.TEXTURE_CUBE_MAP,R.depthTexture);const Wt=l.convert(R.depthTexture.format),At=l.convert(R.depthTexture.type);let bt;R.depthTexture.format===ns?bt=s.DEPTH_COMPONENT24:R.depthTexture.format===Do&&(bt=s.DEPTH24_STENCIL8);for(let It=0;It<6;It++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,bt,R.width,R.height,0,Wt,At,null)}}else Q(R.depthTexture,0);const ht=gt.__webglTexture,Ht=Y(R),Rt=_t?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,ie=R.depthTexture.format===Do?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(R.depthTexture.format===ns)Ye(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Rt,ht,0,Ht):s.framebufferTexture2D(s.FRAMEBUFFER,ie,Rt,ht,0);else if(R.depthTexture.format===Do)Ye(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Rt,ht,0,Ht):s.framebufferTexture2D(s.FRAMEBUFFER,ie,Rt,ht,0);else throw new Error("Unknown depthTexture format")}function Qt(H){const R=i.get(H),Z=H.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==H.depthTexture){const _t=H.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_t){const gt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_t.removeEventListener("dispose",gt)};_t.addEventListener("dispose",gt),R.__depthDisposeCallback=gt}R.__boundDepthTexture=_t}if(H.depthTexture&&!R.__autoAllocateDepthBuffer)if(Z)for(let _t=0;_t<6;_t++)ee(R.__webglFramebuffer[_t],H,_t);else{const _t=H.texture.mipmaps;_t&&_t.length>0?ee(R.__webglFramebuffer[0],H,0):ee(R.__webglFramebuffer,H,0)}else if(Z){R.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[_t]),R.__webglDepthbuffer[_t]===void 0)R.__webglDepthbuffer[_t]=s.createRenderbuffer(),Pt(R.__webglDepthbuffer[_t],H,!1);else{const gt=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=R.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,ht)}}else{const _t=H.texture.mipmaps;if(_t&&_t.length>0?e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),Pt(R.__webglDepthbuffer,H,!1);else{const gt=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,ht)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(H,R,Z){const _t=i.get(H);R!==void 0&&Mt(_t.__webglFramebuffer,H,H.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Qt(H)}function Yt(H){const R=H.texture,Z=i.get(H),_t=i.get(R);H.addEventListener("dispose",L);const gt=H.textures,ht=H.isWebGLCubeRenderTarget===!0,Ht=gt.length>1;if(Ht||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=R.version,c.memory.textures++),ht){Z.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[Rt]=[];for(let ie=0;ie<R.mipmaps.length;ie++)Z.__webglFramebuffer[Rt][ie]=s.createFramebuffer()}else Z.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Rt=0;Rt<R.mipmaps.length;Rt++)Z.__webglFramebuffer[Rt]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ht)for(let Rt=0,ie=gt.length;Rt<ie;Rt++){const Wt=i.get(gt[Rt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),c.memory.textures++)}if(H.samples>0&&Ye(H)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Rt=0;Rt<gt.length;Rt++){const ie=gt[Rt];Z.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Rt]);const Wt=l.convert(ie.format,ie.colorSpace),At=l.convert(ie.type),bt=D(ie.internalFormat,Wt,At,ie.colorSpace,H.isXRRenderTarget===!0),It=Y(H);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,bt,H.width,H.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),H.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(Z.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),K(s.TEXTURE_CUBE_MAP,R);for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0)for(let ie=0;ie<R.mipmaps.length;ie++)Mt(Z.__webglFramebuffer[Rt][ie],H,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie);else Mt(Z.__webglFramebuffer[Rt],H,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(R)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let Rt=0,ie=gt.length;Rt<ie;Rt++){const Wt=gt[Rt],At=i.get(Wt);let bt=s.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(bt=H.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,At.__webglTexture),K(bt,Wt),Mt(Z.__webglFramebuffer,H,Wt,s.COLOR_ATTACHMENT0+Rt,bt,0),S(Wt)&&M(bt)}e.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Rt=H.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Rt,_t.__webglTexture),K(Rt,R),R.mipmaps&&R.mipmaps.length>0)for(let ie=0;ie<R.mipmaps.length;ie++)Mt(Z.__webglFramebuffer[ie],H,R,s.COLOR_ATTACHMENT0,Rt,ie);else Mt(Z.__webglFramebuffer,H,R,s.COLOR_ATTACHMENT0,Rt,0);S(R)&&M(Rt),e.unbindTexture()}H.depthBuffer&&Qt(H)}function ae(H){const R=H.textures;for(let Z=0,_t=R.length;Z<_t;Z++){const gt=R[Z];if(S(gt)){const ht=A(H),Ht=i.get(gt).__webglTexture;e.bindTexture(ht,Ht),M(ht),e.unbindTexture()}}}const _e=[],se=[];function lt(H){if(H.samples>0){if(Ye(H)===!1){const R=H.textures,Z=H.width,_t=H.height;let gt=s.COLOR_BUFFER_BIT;const ht=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ht=i.get(H),Rt=R.length>1;if(Rt)for(let Wt=0;Wt<R.length;Wt++)e.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);const ie=H.texture.mipmaps;ie&&ie.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Wt=0;Wt<R.length;Wt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(gt|=s.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(gt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[Wt]);const At=i.get(R[Wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,Z,_t,0,0,Z,_t,gt,s.NEAREST),h===!0&&(_e.length=0,se.length=0,_e.push(s.COLOR_ATTACHMENT0+Wt),H.depthBuffer&&H.resolveDepthBuffer===!1&&(_e.push(ht),se.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Wt=0;Wt<R.length;Wt++){e.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[Wt]);const At=i.get(R[Wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,At,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&h){const R=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function Y(H){return Math.min(a.maxSamples,H.samples)}function Ye(H){const R=i.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ee(H){const R=c.render.frame;_.get(H)!==R&&(_.set(H,R),H.update())}function ce(H,R){const Z=H.colorSpace,_t=H.format,gt=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||Z!==ru&&Z!==zs&&(qe.getTransfer(Z)===an?(_t!==aa||gt!==Xr)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",Z)),R}function Xt(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(d.width=H.naturalWidth||H.width,d.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(d.width=H.displayWidth,d.height=H.displayHeight):(d.width=H.width,d.height=H.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=tt,this.rebindTextures=Le,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function WU(s,t){function e(i,a=zs){let l;const c=qe.getTransfer(a);if(i===Xr)return s.UNSIGNED_BYTE;if(i===b0)return s.UNSIGNED_SHORT_4_4_4_4;if(i===A0)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Z1)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===j1)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Y1)return s.BYTE;if(i===q1)return s.SHORT;if(i===Xc)return s.UNSIGNED_SHORT;if(i===T0)return s.INT;if(i===Ea)return s.UNSIGNED_INT;if(i===_a)return s.FLOAT;if(i===Er)return s.HALF_FLOAT;if(i===Q1)return s.ALPHA;if(i===K1)return s.RGB;if(i===aa)return s.RGBA;if(i===ns)return s.DEPTH_COMPONENT;if(i===Do)return s.DEPTH_STENCIL;if(i===J1)return s.RED;if(i===C0)return s.RED_INTEGER;if(i===iu)return s.RG;if(i===R0)return s.RG_INTEGER;if(i===w0)return s.RGBA_INTEGER;if(i===ud||i===cd||i===fd||i===hd)if(c===an)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===ud)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===ud)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cd)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fd)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hd)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dg||i===pg||i===mg||i===_g)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===dg)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pg)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mg)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_g)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gg||i===vg||i===xg||i===Sg||i===yg||i===Mg||i===Eg)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===gg||i===vg)return c===an?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===xg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sg)return l.COMPRESSED_R11_EAC;if(i===yg)return l.COMPRESSED_SIGNED_R11_EAC;if(i===Mg)return l.COMPRESSED_RG11_EAC;if(i===Eg)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tg||i===bg||i===Ag||i===Cg||i===Rg||i===wg||i===Dg||i===Ug||i===Lg||i===Ng||i===Og||i===Pg||i===zg||i===Fg)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Tg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ag)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ug)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ng)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Og)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fg)return c===an?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bg||i===Ig||i===Hg)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===Bg)return c===an?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ig)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hg)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vg||i===Gg||i===kg||i===Xg)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===Vg)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Gg)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xg)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wc?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const YU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new lE(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new $n({vertexShader:YU,fragmentShader:qU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new br(new uf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jU extends mu{constructor(t,e){super();const i=this;let a=null,l=1,c=null,f="local-floor",h=1,d=null,_=null,v=null,g=null,x=null,y=null;const E=typeof XRWebGLBinding<"u",S=new ZU,M={},A=e.getContextAttributes();let D=null,C=null;const P=[],O=[],L=new qt;let T=null;const w=new Vr;w.viewport=new Fn;const k=new Vr;k.viewport=new Fn;const I=[w,k],G=new a2;let J=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let mt=P[it];return mt===void 0&&(mt=new m_,P[it]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(it){let mt=P[it];return mt===void 0&&(mt=new m_,P[it]=mt),mt.getGripSpace()},this.getHand=function(it){let mt=P[it];return mt===void 0&&(mt=new m_,P[it]=mt),mt.getHandSpace()};function Q(it){const mt=O.indexOf(it.inputSource);if(mt===-1)return;const Mt=P[mt];Mt!==void 0&&(Mt.update(it.inputSource,it.frame,d||c),Mt.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",F);for(let it=0;it<P.length;it++){const mt=O[it];mt!==null&&(O[it]=null,P[it].disconnect(mt))}J=null,$=null,S.reset();for(const it in M)delete M[it];t.setRenderTarget(D),x=null,g=null,v=null,a=null,C=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){l=it,i.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,i.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(a,e)),v},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(it){if(a=it,a!==null){if(D=t.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",z),a.addEventListener("inputsourceschange",F),A.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Pt=null,ee=null;A.depth&&(ee=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=A.stencil?Do:ns,Pt=A.stencil?Wc:Ea);const Qt={colorFormat:e.RGBA8,depthFormat:ee,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(Qt),a.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new Qi(g.textureWidth,g.textureHeight,{format:aa,type:Xr,depthTexture:new Yc(g.textureWidth,g.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,e,Mt),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Qi(x.framebufferWidth,x.framebufferHeight,{format:aa,type:Xr,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await a.requestReferenceSpace(f),Dt.setContext(a),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function F(it){for(let mt=0;mt<it.removed.length;mt++){const Mt=it.removed[mt],Pt=O.indexOf(Mt);Pt>=0&&(O[Pt]=null,P[Pt].disconnect(Mt))}for(let mt=0;mt<it.added.length;mt++){const Mt=it.added[mt];let Pt=O.indexOf(Mt);if(Pt===-1){for(let Qt=0;Qt<P.length;Qt++)if(Qt>=O.length){O.push(Mt),Pt=Qt;break}else if(O[Qt]===null){O[Qt]=Mt,Pt=Qt;break}if(Pt===-1)break}const ee=P[Pt];ee&&ee.connect(Mt)}}const tt=new nt,ct=new nt;function V(it,mt,Mt){tt.setFromMatrixPosition(mt.matrixWorld),ct.setFromMatrixPosition(Mt.matrixWorld);const Pt=tt.distanceTo(ct),ee=mt.projectionMatrix.elements,Qt=Mt.projectionMatrix.elements,Le=ee[14]/(ee[10]-1),Yt=ee[14]/(ee[10]+1),ae=(ee[9]+1)/ee[5],_e=(ee[9]-1)/ee[5],se=(ee[8]-1)/ee[0],lt=(Qt[8]+1)/Qt[0],Y=Le*se,Ye=Le*lt,Ee=Pt/(-se+lt),ce=Ee*-se;if(mt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ce),it.translateZ(Ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),ee[10]===-1)it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Xt=Le+Ee,H=Yt+Ee,R=Y-ce,Z=Ye+(Pt-ce),_t=ae*Yt/H*Xt,gt=_e*Yt/H*Xt;it.projectionMatrix.makePerspective(R,Z,_t,gt,Xt,H),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function B(it,mt){mt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(mt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(a===null)return;let mt=it.near,Mt=it.far;S.texture!==null&&(S.depthNear>0&&(mt=S.depthNear),S.depthFar>0&&(Mt=S.depthFar)),G.near=k.near=w.near=mt,G.far=k.far=w.far=Mt,(J!==G.near||$!==G.far)&&(a.updateRenderState({depthNear:G.near,depthFar:G.far}),J=G.near,$=G.far),G.layers.mask=it.layers.mask|6,w.layers.mask=G.layers.mask&-5,k.layers.mask=G.layers.mask&-3;const Pt=it.parent,ee=G.cameras;B(G,Pt);for(let Qt=0;Qt<ee.length;Qt++)B(ee[Qt],Pt);ee.length===2?V(G,w,k):G.projectionMatrix.copy(w.projectionMatrix),K(it,G,Pt)};function K(it,mt,Mt){Mt===null?it.matrix.copy(mt.matrixWorld):(it.matrix.copy(Mt.matrixWorld),it.matrix.invert(),it.matrix.multiply(mt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Wg*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(it){h=it,g!==null&&(g.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(G)},this.getCameraTexture=function(it){return M[it]};let vt=null;function Tt(it,mt){if(_=mt.getViewerPose(d||c),y=mt,_!==null){const Mt=_.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let Pt=!1;Mt.length!==G.cameras.length&&(G.cameras.length=0,Pt=!0);for(let Yt=0;Yt<Mt.length;Yt++){const ae=Mt[Yt];let _e=null;if(x!==null)_e=x.getViewport(ae);else{const lt=v.getViewSubImage(g,ae);_e=lt.viewport,Yt===0&&(t.setRenderTargetTextures(C,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(C))}let se=I[Yt];se===void 0&&(se=new Vr,se.layers.enable(Yt),se.viewport=new Fn,I[Yt]=se),se.matrix.fromArray(ae.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ae.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(_e.x,_e.y,_e.width,_e.height),Yt===0&&(G.matrix.copy(se.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Pt===!0&&G.cameras.push(se)}const ee=a.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){v=i.getBinding();const Yt=v.getDepthInformation(Mt[0]);Yt&&Yt.isValid&&Yt.texture&&S.init(Yt,a.renderState)}if(ee&&ee.includes("camera-access")&&E){t.state.unbindTexture(),v=i.getBinding();for(let Yt=0;Yt<Mt.length;Yt++){const ae=Mt[Yt].camera;if(ae){let _e=M[ae];_e||(_e=new lE,M[ae]=_e);const se=v.getCameraImage(ae);_e.sourceTexture=se}}}}for(let Mt=0;Mt<P.length;Mt++){const Pt=O[Mt],ee=P[Mt];Pt!==null&&ee!==void 0&&ee.update(Pt,mt,d||c)}vt&&vt(it,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),y=null}const Dt=new SE;Dt.setAnimationLoop(Tt),this.setAnimationLoop=function(it){vt=it},this.dispose=function(){}}}const So=new is,QU=new Nn;function KU(s,t){function e(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function i(S,M){M.color.getRGB(S.fogColor.value,vE(s)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function a(S,M,A,D,C){M.isMeshBasicMaterial?l(S,M):M.isMeshLambertMaterial?(l(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(S,M),v(S,M)):M.isMeshPhongMaterial?(l(S,M),_(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(S,M),g(S,M),M.isMeshPhysicalMaterial&&x(S,M,C)):M.isMeshMatcapMaterial?(l(S,M),y(S,M)):M.isMeshDepthMaterial?l(S,M):M.isMeshDistanceMaterial?(l(S,M),E(S,M)):M.isMeshNormalMaterial?l(S,M):M.isLineBasicMaterial?(c(S,M),M.isLineDashedMaterial&&f(S,M)):M.isPointsMaterial?h(S,M,A,D):M.isSpriteMaterial?d(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,e(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===Hi&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,e(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===Hi&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,e(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,e(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,e(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);const A=t.get(M),D=A.envMap,C=A.envMapRotation;D&&(S.envMap.value=D,So.copy(C),So.x*=-1,So.y*=-1,So.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(So.y*=-1,So.z*=-1),S.envMapRotation.value.setFromMatrix4(QU.makeRotationFromEuler(So)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,e(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,e(M.aoMap,S.aoMapTransform))}function c(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform))}function f(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function h(S,M,A,D){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*A,S.scale.value=D*.5,M.map&&(S.map.value=M.map,e(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function d(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,e(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,e(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function _(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function v(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function g(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,e(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,e(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function x(S,M,A){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,e(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,e(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,e(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,e(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,e(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Hi&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,e(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,e(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,e(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,e(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,e(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,e(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,e(M.specularIntensityMap,S.specularIntensityMapTransform))}function y(S,M){M.matcap&&(S.matcap.value=M.matcap)}function E(S,M){const A=t.get(M).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function JU(s,t,e,i){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,D){const C=D.program;i.uniformBlockBinding(A,C)}function d(A,D){let C=a[A.id];C===void 0&&(y(A),C=_(A),a[A.id]=C,A.addEventListener("dispose",S));const P=D.program;i.updateUBOMapping(A,P);const O=t.render.frame;l[A.id]!==O&&(g(A),l[A.id]=O)}function _(A){const D=v();A.__bindingPointIndex=D;const C=s.createBuffer(),P=A.__size,O=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,P,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function v(){for(let A=0;A<f;A++)if(c.indexOf(A)===-1)return c.push(A),A;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const D=a[A.id],C=A.uniforms,P=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let O=0,L=C.length;O<L;O++){const T=Array.isArray(C[O])?C[O]:[C[O]];for(let w=0,k=T.length;w<k;w++){const I=T[w];if(x(I,O,w,P)===!0){const G=I.__offset,J=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let Q=0;Q<J.length;Q++){const z=J[Q],F=E(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,G+$,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,$),$+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(A,D,C,P){const O=A.value,L=D+"_"+C;if(P[L]===void 0)return typeof O=="number"||typeof O=="boolean"?P[L]=O:P[L]=O.clone(),!0;{const T=P[L];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return P[L]=O,!0}else if(T.equals(O)===!1)return T.copy(O),!0}return!1}function y(A){const D=A.uniforms;let C=0;const P=16;for(let L=0,T=D.length;L<T;L++){const w=Array.isArray(D[L])?D[L]:[D[L]];for(let k=0,I=w.length;k<I;k++){const G=w[k],J=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Q=J.length;$<Q;$++){const z=J[$],F=E(z),tt=C%P,ct=tt%F.boundary,V=tt+ct;C+=ct,V!==0&&P-V<F.storage&&(C+=P-V),G.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=C,C+=F.storage}}}const O=C%P;return O>0&&(C+=P-O),A.__size=C,A.__cache={},this}function E(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xe("WebGLRenderer: Unsupported uniform value type.",A),D}function S(A){const D=A.target;D.removeEventListener("dispose",S);const C=c.indexOf(D.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function M(){for(const A in a)s.deleteBuffer(a[A]);c=[],a={},l={}}return{bind:h,update:d,dispose:M}}const $U=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fa=null;function tL(){return fa===null&&(fa=new dR($U,16,16,iu,Er),fa.name="DFG_LUT",fa.minFilter=bi,fa.magFilter=bi,fa.wrapS=Ja,fa.wrapT=Ja,fa.generateMipmaps=!1,fa.needsUpdate=!0),fa}class eL{constructor(t={}){const{canvas:e=XC(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=Xr}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const E=x,S=new Set([w0,R0,C0]),M=new Set([Xr,Ea,Xc,Wc,b0,A0]),A=new Uint32Array(4),D=new Int32Array(4);let C=null,P=null;const O=[],L=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let k=!1;this._outputColorSpace=Hr;let I=0,G=0,J=null,$=-1,Q=null;const z=new Fn,F=new Fn;let tt=null;const ct=new Ie(0);let V=0,B=e.width,K=e.height,vt=1,Tt=null,Dt=null;const it=new Fn(0,0,B,K),mt=new Fn(0,0,B,K);let Mt=!1;const Pt=new sE;let ee=!1,Qt=!1;const Le=new Nn,Yt=new nt,ae=new Fn,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function lt(){return J===null?vt:1}let Y=i;function Ye(U,q){return e.getContext(U,q)}try{const U={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${M0}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",ke,!1),Y===null){const q="webgl2";if(Y=Ye(q,U),Y===null)throw Ye(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Ke("WebGLRenderer: "+U.message),U}let Ee,ce,Xt,H,R,Z,_t,gt,ht,Ht,Rt,ie,Wt,At,bt,It,Ot,zt,pe,X,wt,Ct,Lt;function Et(){Ee=new eD(Y),Ee.init(),wt=new WU(Y,Ee),ce=new q3(Y,Ee,t,wt),Xt=new kU(Y,Ee),ce.reversedDepthBuffer&&g&&Xt.buffers.depth.setReversed(!0),H=new rD(Y),R=new wU,Z=new XU(Y,Ee,Xt,R,ce,wt,H),_t=new tD(w),gt=new u2(Y),Ct=new W3(Y,gt),ht=new nD(Y,gt,H,Ct),Ht=new sD(Y,ht,gt,Ct,H),zt=new aD(Y,ce,Z),bt=new Z3(R),Rt=new RU(w,_t,Ee,ce,Ct,bt),ie=new KU(w,R),Wt=new UU,At=new FU(Ee),Ot=new X3(w,_t,Xt,Ht,y,h),It=new GU(w,Ht,ce),Lt=new JU(Y,H,ce,Xt),pe=new Y3(Y,Ee,H),X=new iD(Y,Ee,H),H.programs=Rt.programs,w.capabilities=ce,w.extensions=Ee,w.properties=R,w.renderLists=Wt,w.shadowMap=It,w.state=Xt,w.info=H}Et(),E!==Xr&&(T=new lD(E,e.width,e.height,a,l));const pt=new jU(w,Y);this.xr=pt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const U=Ee.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Ee.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(U){U!==void 0&&(vt=U,this.setSize(B,K,!1))},this.getSize=function(U){return U.set(B,K)},this.setSize=function(U,q,ut=!0){if(pt.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}B=U,K=q,e.width=Math.floor(U*vt),e.height=Math.floor(q*vt),ut===!0&&(e.style.width=U+"px",e.style.height=q+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,U,q)},this.getDrawingBufferSize=function(U){return U.set(B*vt,K*vt).floor()},this.setDrawingBufferSize=function(U,q,ut){B=U,K=q,vt=ut,e.width=Math.floor(U*ut),e.height=Math.floor(q*ut),this.setViewport(0,0,U,q)},this.setEffects=function(U){if(E===Xr){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let q=0;q<U.length;q++)if(U[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(z)},this.getViewport=function(U){return U.copy(it)},this.setViewport=function(U,q,ut,st){U.isVector4?it.set(U.x,U.y,U.z,U.w):it.set(U,q,ut,st),Xt.viewport(z.copy(it).multiplyScalar(vt).round())},this.getScissor=function(U){return U.copy(mt)},this.setScissor=function(U,q,ut,st){U.isVector4?mt.set(U.x,U.y,U.z,U.w):mt.set(U,q,ut,st),Xt.scissor(F.copy(mt).multiplyScalar(vt).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(U){Xt.setScissorTest(Mt=U)},this.setOpaqueSort=function(U){Tt=U},this.setTransparentSort=function(U){Dt=U},this.getClearColor=function(U){return U.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(U=!0,q=!0,ut=!0){let st=0;if(U){let rt=!1;if(J!==null){const Ut=J.texture.format;rt=S.has(Ut)}if(rt){const Ut=J.texture.type,Bt=M.has(Ut),Nt=Ot.getClearColor(),Zt=Ot.getClearAlpha(),jt=Nt.r,me=Nt.g,ye=Nt.b;Bt?(A[0]=jt,A[1]=me,A[2]=ye,A[3]=Zt,Y.clearBufferuiv(Y.COLOR,0,A)):(D[0]=jt,D[1]=me,D[2]=ye,D[3]=Zt,Y.clearBufferiv(Y.COLOR,0,D))}else st|=Y.COLOR_BUFFER_BIT}q&&(st|=Y.DEPTH_BUFFER_BIT),ut&&(st|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&Y.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Ot.dispose(),Wt.dispose(),At.dispose(),R.dispose(),_t.dispose(),Ht.dispose(),Ct.dispose(),Lt.dispose(),Rt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",de),pt.removeEventListener("sessionend",_n),ge.stop()};function kt(U){U.preventDefault(),sM("WebGLRenderer: Context Lost."),k=!0}function le(){sM("WebGLRenderer: Context Restored."),k=!1;const U=H.autoReset,q=It.enabled,ut=It.autoUpdate,st=It.needsUpdate,rt=It.type;Et(),H.autoReset=U,It.enabled=q,It.autoUpdate=ut,It.needsUpdate=st,It.type=rt}function ke(U){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Vt(U){const q=U.target;q.removeEventListener("dispose",Vt),Jt(q)}function Jt(U){Te(U),R.remove(U)}function Te(U){const q=R.get(U).programs;q!==void 0&&(q.forEach(function(ut){Rt.releaseProgram(ut)}),U.isShaderMaterial&&Rt.releaseShaderCache(U))}this.renderBufferDirect=function(U,q,ut,st,rt,Ut){q===null&&(q=_e);const Bt=rt.isMesh&&rt.matrixWorld.determinant()<0,Nt=Ci(U,q,ut,st,rt);Xt.setMaterial(st,Bt);let Zt=ut.index,jt=1;if(st.wireframe===!0){if(Zt=ht.getWireframeAttribute(ut),Zt===void 0)return;jt=2}const me=ut.drawRange,ye=ut.attributes.position;let Kt=me.start*jt,Ce=(me.start+me.count)*jt;Ut!==null&&(Kt=Math.max(Kt,Ut.start*jt),Ce=Math.min(Ce,(Ut.start+Ut.count)*jt)),Zt!==null?(Kt=Math.max(Kt,0),Ce=Math.min(Ce,Zt.count)):ye!=null&&(Kt=Math.max(Kt,0),Ce=Math.min(Ce,ye.count));const yn=Ce-Kt;if(yn<0||yn===1/0)return;Ct.setup(rt,st,Nt,ut,Zt);let Mn,Ze=pe;if(Zt!==null&&(Mn=gt.get(Zt),Ze=X,Ze.setIndex(Mn)),rt.isMesh)st.wireframe===!0?(Xt.setLineWidth(st.wireframeLinewidth*lt()),Ze.setMode(Y.LINES)):Ze.setMode(Y.TRIANGLES);else if(rt.isLine){let jn=st.linewidth;jn===void 0&&(jn=1),Xt.setLineWidth(jn*lt()),rt.isLineSegments?Ze.setMode(Y.LINES):rt.isLineLoop?Ze.setMode(Y.LINE_LOOP):Ze.setMode(Y.LINE_STRIP)}else rt.isPoints?Ze.setMode(Y.POINTS):rt.isSprite&&Ze.setMode(Y.TRIANGLES);if(rt.isBatchedMesh)if(rt._multiDrawInstances!==null)Cd("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount,rt._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Ze.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const jn=rt._multiDrawStarts,ne=rt._multiDrawCounts,Ri=rt._multiDrawCount,ve=Zt?gt.get(Zt).bytesPerElement:1,wi=R.get(st).currentProgram.getUniforms();for(let rr=0;rr<Ri;rr++)wi.setValue(Y,"_gl_DrawID",rr),Ze.render(jn[rr]/ve,ne[rr])}else if(rt.isInstancedMesh)Ze.renderInstances(Kt,yn,rt.count);else if(ut.isInstancedBufferGeometry){const jn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ne=Math.min(ut.instanceCount,jn);Ze.renderInstances(Kt,yn,ne)}else Ze.render(Kt,yn)};function Ft(U,q,ut){U.transparent===!0&&U.side===ia&&U.forceSinglePass===!1?(U.side=Hi,U.needsUpdate=!0,In(U,q,ut),U.side=Ys,U.needsUpdate=!0,In(U,q,ut),U.side=ia):In(U,q,ut)}this.compile=function(U,q,ut=null){ut===null&&(ut=U),P=At.get(ut),P.init(q),L.push(P),ut.traverseVisible(function(rt){rt.isLight&&rt.layers.test(q.layers)&&(P.pushLight(rt),rt.castShadow&&P.pushShadow(rt))}),U!==ut&&U.traverseVisible(function(rt){rt.isLight&&rt.layers.test(q.layers)&&(P.pushLight(rt),rt.castShadow&&P.pushShadow(rt))}),P.setupLights();const st=new Set;return U.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const Ut=rt.material;if(Ut)if(Array.isArray(Ut))for(let Bt=0;Bt<Ut.length;Bt++){const Nt=Ut[Bt];Ft(Nt,ut,rt),st.add(Nt)}else Ft(Ut,ut,rt),st.add(Ut)}),P=L.pop(),st},this.compileAsync=function(U,q,ut=null){const st=this.compile(U,q,ut);return new Promise(rt=>{function Ut(){if(st.forEach(function(Bt){R.get(Bt).currentProgram.isReady()&&st.delete(Bt)}),st.size===0){rt(U);return}setTimeout(Ut,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let he=null;function oe(U){he&&he(U)}function de(){ge.stop()}function _n(){ge.start()}const ge=new SE;ge.setAnimationLoop(oe),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(U){he=U,pt.setAnimationLoop(U),U===null?ge.stop():ge.start()},pt.addEventListener("sessionstart",de),pt.addEventListener("sessionend",_n),this.render=function(U,q){if(q!==void 0&&q.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const ut=pt.enabled===!0&&pt.isPresenting===!0,st=T!==null&&(J===null||ut)&&T.begin(w,J);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(q),q=pt.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,q,J),P=At.get(U,L.length),P.init(q),L.push(P),Le.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Pt.setFromProjectionMatrix(Le,ga,q.reversedDepth),Qt=this.localClippingEnabled,ee=bt.init(this.clippingPlanes,Qt),C=Wt.get(U,O.length),C.init(),O.push(C),pt.enabled===!0&&pt.isPresenting===!0){const Bt=w.xr.getDepthSensingMesh();Bt!==null&&sn(Bt,q,-1/0,w.sortObjects)}sn(U,q,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(Tt,Dt),se=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,se&&Ot.addToRenderList(C,U),this.info.render.frame++,ee===!0&&bt.beginShadows();const rt=P.state.shadowsArray;if(It.render(rt,U,q),ee===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&T.hasRenderPass())===!1){const Bt=C.opaque,Nt=C.transmissive;if(P.setupLights(),q.isArrayCamera){const Zt=q.cameras;if(Nt.length>0)for(let jt=0,me=Zt.length;jt<me;jt++){const ye=Zt[jt];be(Bt,Nt,U,ye)}se&&Ot.render(U);for(let jt=0,me=Zt.length;jt<me;jt++){const ye=Zt[jt];on(C,U,ye,ye.viewport)}}else Nt.length>0&&be(Bt,Nt,U,q),se&&Ot.render(U),on(C,U,q)}J!==null&&G===0&&(Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J)),st&&T.end(w),U.isScene===!0&&U.onAfterRender(w,U,q),Ct.resetDefaultState(),$=-1,Q=null,L.pop(),L.length>0?(P=L[L.length-1],ee===!0&&bt.setGlobalState(w.clippingPlanes,P.state.camera)):P=null,O.pop(),O.length>0?C=O[O.length-1]:C=null};function sn(U,q,ut,st){if(U.visible===!1)return;if(U.layers.test(q.layers)){if(U.isGroup)ut=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(q);else if(U.isLight)P.pushLight(U),U.castShadow&&P.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Pt.intersectsSprite(U)){st&&ae.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Le);const Bt=Ht.update(U),Nt=U.material;Nt.visible&&C.push(U,Bt,Nt,ut,ae.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Pt.intersectsObject(U))){const Bt=Ht.update(U),Nt=U.material;if(st&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ae.copy(U.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),ae.copy(Bt.boundingSphere.center)),ae.applyMatrix4(U.matrixWorld).applyMatrix4(Le)),Array.isArray(Nt)){const Zt=Bt.groups;for(let jt=0,me=Zt.length;jt<me;jt++){const ye=Zt[jt],Kt=Nt[ye.materialIndex];Kt&&Kt.visible&&C.push(U,Bt,Kt,ut,ae.z,ye)}}else Nt.visible&&C.push(U,Bt,Nt,ut,ae.z,null)}}const Ut=U.children;for(let Bt=0,Nt=Ut.length;Bt<Nt;Bt++)sn(Ut[Bt],q,ut,st)}function on(U,q,ut,st){const{opaque:rt,transmissive:Ut,transparent:Bt}=U;P.setupLightsView(ut),ee===!0&&bt.setGlobalState(w.clippingPlanes,ut),st&&Xt.viewport(z.copy(st)),rt.length>0&&Se(rt,q,ut),Ut.length>0&&Se(Ut,q,ut),Bt.length>0&&Se(Bt,q,ut),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function be(U,q,ut,st){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[st.id]===void 0){const Kt=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[st.id]=new Qi(1,1,{generateMipmaps:!0,type:Kt?Er:Xr,minFilter:wo,samples:Math.max(4,ce.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const Ut=P.state.transmissionRenderTarget[st.id],Bt=st.viewport||z;Ut.setSize(Bt.z*w.transmissionResolutionScale,Bt.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget(),Zt=w.getActiveCubeFace(),jt=w.getActiveMipmapLevel();w.setRenderTarget(Ut),w.getClearColor(ct),V=w.getClearAlpha(),V<1&&w.setClearColor(16777215,.5),w.clear(),se&&Ot.render(ut);const me=w.toneMapping;w.toneMapping=ya;const ye=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),P.setupLightsView(st),ee===!0&&bt.setGlobalState(w.clippingPlanes,st),Se(U,ut,st),Z.updateMultisampleRenderTarget(Ut),Z.updateRenderTargetMipmap(Ut),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ce=0,yn=q.length;Ce<yn;Ce++){const Mn=q[Ce],{object:Ze,geometry:jn,material:ne,group:Ri}=Mn;if(ne.side===ia&&Ze.layers.test(st.layers)){const ve=ne.side;ne.side=Hi,ne.needsUpdate=!0,Pe(Ze,ut,st,jn,ne,Ri),ne.side=ve,ne.needsUpdate=!0,Kt=!0}}Kt===!0&&(Z.updateMultisampleRenderTarget(Ut),Z.updateRenderTargetMipmap(Ut))}w.setRenderTarget(Nt,Zt,jt),w.setClearColor(ct,V),ye!==void 0&&(st.viewport=ye),w.toneMapping=me}function Se(U,q,ut){const st=q.isScene===!0?q.overrideMaterial:null;for(let rt=0,Ut=U.length;rt<Ut;rt++){const Bt=U[rt],{object:Nt,geometry:Zt,group:jt}=Bt;let me=Bt.material;me.allowOverride===!0&&st!==null&&(me=st),Nt.layers.test(ut.layers)&&Pe(Nt,q,ut,Zt,me,jt)}}function Pe(U,q,ut,st,rt,Ut){U.onBeforeRender(w,q,ut,st,rt,Ut),U.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),rt.onBeforeRender(w,q,ut,st,U,Ut),rt.transparent===!0&&rt.side===ia&&rt.forceSinglePass===!1?(rt.side=Hi,rt.needsUpdate=!0,w.renderBufferDirect(ut,q,st,rt,U,Ut),rt.side=Ys,rt.needsUpdate=!0,w.renderBufferDirect(ut,q,st,rt,U,Ut),rt.side=ia):w.renderBufferDirect(ut,q,st,rt,U,Ut),U.onAfterRender(w,q,ut,st,rt,Ut)}function In(U,q,ut){q.isScene!==!0&&(q=_e);const st=R.get(U),rt=P.state.lights,Ut=P.state.shadowsArray,Bt=rt.state.version,Nt=Rt.getParameters(U,rt.state,Ut,q,ut),Zt=Rt.getProgramCacheKey(Nt);let jt=st.programs;st.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?q.environment:null,st.fog=q.fog;const me=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;st.envMap=_t.get(U.envMap||st.environment,me),st.envMapRotation=st.environment!==null&&U.envMap===null?q.environmentRotation:U.envMapRotation,jt===void 0&&(U.addEventListener("dispose",Vt),jt=new Map,st.programs=jt);let ye=jt.get(Zt);if(ye!==void 0){if(st.currentProgram===ye&&st.lightsStateVersion===Bt)return ni(U,Nt),ye}else Nt.uniforms=Rt.getUniforms(U),U.onBeforeCompile(Nt,w),ye=Rt.acquireProgram(Nt,Zt),jt.set(Zt,ye),st.uniforms=Nt.uniforms;const Kt=st.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Kt.clippingPlanes=bt.uniform),ni(U,Nt),st.needsLights=bn(U),st.lightsStateVersion=Bt,st.needsLights&&(Kt.ambientLightColor.value=rt.state.ambient,Kt.lightProbe.value=rt.state.probe,Kt.directionalLights.value=rt.state.directional,Kt.directionalLightShadows.value=rt.state.directionalShadow,Kt.spotLights.value=rt.state.spot,Kt.spotLightShadows.value=rt.state.spotShadow,Kt.rectAreaLights.value=rt.state.rectArea,Kt.ltc_1.value=rt.state.rectAreaLTC1,Kt.ltc_2.value=rt.state.rectAreaLTC2,Kt.pointLights.value=rt.state.point,Kt.pointLightShadows.value=rt.state.pointShadow,Kt.hemisphereLights.value=rt.state.hemi,Kt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=rt.state.spotLightMatrix,Kt.spotLightMap.value=rt.state.spotLightMap,Kt.pointShadowMatrix.value=rt.state.pointShadowMatrix),st.currentProgram=ye,st.uniformsList=null,ye}function ln(U){if(U.uniformsList===null){const q=U.currentProgram.getUniforms();U.uniformsList=dd.seqWithValue(q.seq,U.uniforms)}return U.uniformsList}function ni(U,q){const ut=R.get(U);ut.outputColorSpace=q.outputColorSpace,ut.batching=q.batching,ut.batchingColor=q.batchingColor,ut.instancing=q.instancing,ut.instancingColor=q.instancingColor,ut.instancingMorph=q.instancingMorph,ut.skinning=q.skinning,ut.morphTargets=q.morphTargets,ut.morphNormals=q.morphNormals,ut.morphColors=q.morphColors,ut.morphTargetsCount=q.morphTargetsCount,ut.numClippingPlanes=q.numClippingPlanes,ut.numIntersection=q.numClipIntersection,ut.vertexAlphas=q.vertexAlphas,ut.vertexTangents=q.vertexTangents,ut.toneMapping=q.toneMapping}function Ci(U,q,ut,st,rt){q.isScene!==!0&&(q=_e),Z.resetTextureUnits();const Ut=q.fog,Bt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?q.environment:null,Nt=J===null?w.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ru,Zt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,jt=_t.get(st.envMap||Bt,Zt),me=st.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ye=!!ut.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Kt=!!ut.morphAttributes.position,Ce=!!ut.morphAttributes.normal,yn=!!ut.morphAttributes.color;let Mn=ya;st.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Mn=w.toneMapping);const Ze=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,jn=Ze!==void 0?Ze.length:0,ne=R.get(st),Ri=P.state.lights;if(ee===!0&&(Qt===!0||U!==Q)){const Vn=U===Q&&st.id===$;bt.setState(st,U,Vn)}let ve=!1;st.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ri.state.version||ne.outputColorSpace!==Nt||rt.isBatchedMesh&&ne.batching===!1||!rt.isBatchedMesh&&ne.batching===!0||rt.isBatchedMesh&&ne.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&ne.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&ne.instancing===!1||!rt.isInstancedMesh&&ne.instancing===!0||rt.isSkinnedMesh&&ne.skinning===!1||!rt.isSkinnedMesh&&ne.skinning===!0||rt.isInstancedMesh&&ne.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&ne.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&ne.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&ne.instancingMorph===!1&&rt.morphTexture!==null||ne.envMap!==jt||st.fog===!0&&ne.fog!==Ut||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==bt.numPlanes||ne.numIntersection!==bt.numIntersection)||ne.vertexAlphas!==me||ne.vertexTangents!==ye||ne.morphTargets!==Kt||ne.morphNormals!==Ce||ne.morphColors!==yn||ne.toneMapping!==Mn||ne.morphTargetsCount!==jn)&&(ve=!0):(ve=!0,ne.__version=st.version);let wi=ne.currentProgram;ve===!0&&(wi=In(st,q,rt));let rr=!1,Zr=!1,ar=!1;const tn=wi.getUniforms(),Hn=ne.uniforms;if(Xt.useProgram(wi.program)&&(rr=!0,Zr=!0,ar=!0),st.id!==$&&($=st.id,Zr=!0),rr||Q!==U){Xt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),tn.setValue(Y,"projectionMatrix",U.projectionMatrix),tn.setValue(Y,"viewMatrix",U.matrixWorldInverse);const jr=tn.map.cameraPosition;jr!==void 0&&jr.setValue(Y,Yt.setFromMatrixPosition(U.matrixWorld)),ce.logarithmicDepthBuffer&&tn.setValue(Y,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&tn.setValue(Y,"isOrthographic",U.isOrthographicCamera===!0),Q!==U&&(Q=U,Zr=!0,ar=!0)}if(ne.needsLights&&(Ri.state.directionalShadowMap.length>0&&tn.setValue(Y,"directionalShadowMap",Ri.state.directionalShadowMap,Z),Ri.state.spotShadowMap.length>0&&tn.setValue(Y,"spotShadowMap",Ri.state.spotShadowMap,Z),Ri.state.pointShadowMap.length>0&&tn.setValue(Y,"pointShadowMap",Ri.state.pointShadowMap,Z)),rt.isSkinnedMesh){tn.setOptional(Y,rt,"bindMatrix"),tn.setOptional(Y,rt,"bindMatrixInverse");const Vn=rt.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),tn.setValue(Y,"boneTexture",Vn.boneTexture,Z))}rt.isBatchedMesh&&(tn.setOptional(Y,rt,"batchingTexture"),tn.setValue(Y,"batchingTexture",rt._matricesTexture,Z),tn.setOptional(Y,rt,"batchingIdTexture"),tn.setValue(Y,"batchingIdTexture",rt._indirectTexture,Z),tn.setOptional(Y,rt,"batchingColorTexture"),rt._colorsTexture!==null&&tn.setValue(Y,"batchingColorTexture",rt._colorsTexture,Z));const Di=ut.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&zt.update(rt,ut,wi),(Zr||ne.receiveShadow!==rt.receiveShadow)&&(ne.receiveShadow=rt.receiveShadow,tn.setValue(Y,"receiveShadow",rt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&q.environment!==null&&(Hn.envMapIntensity.value=q.environmentIntensity),Hn.dfgLUT!==void 0&&(Hn.dfgLUT.value=tL()),Zr&&(tn.setValue(Y,"toneMappingExposure",w.toneMappingExposure),ne.needsLights&&gn(Hn,ar),Ut&&st.fog===!0&&ie.refreshFogUniforms(Hn,Ut),ie.refreshMaterialUniforms(Hn,st,vt,K,P.state.transmissionRenderTarget[U.id]),dd.upload(Y,ln(ne),Hn,Z)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(dd.upload(Y,ln(ne),Hn,Z),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&tn.setValue(Y,"center",rt.center),tn.setValue(Y,"modelViewMatrix",rt.modelViewMatrix),tn.setValue(Y,"normalMatrix",rt.normalMatrix),tn.setValue(Y,"modelMatrix",rt.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Vn=st.uniformsGroups;for(let jr=0,Aa=Vn.length;jr<Aa;jr++){const Yo=Vn[jr];Lt.update(Yo,wi),Lt.bind(Yo,wi)}}return wi}function gn(U,q){U.ambientLightColor.needsUpdate=q,U.lightProbe.needsUpdate=q,U.directionalLights.needsUpdate=q,U.directionalLightShadows.needsUpdate=q,U.pointLights.needsUpdate=q,U.pointLightShadows.needsUpdate=q,U.spotLights.needsUpdate=q,U.spotLightShadows.needsUpdate=q,U.rectAreaLights.needsUpdate=q,U.hemisphereLights.needsUpdate=q}function bn(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(U,q,ut){const st=R.get(U);st.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),R.get(U.texture).__webglTexture=q,R.get(U.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ut,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,q){const ut=R.get(U);ut.__webglFramebuffer=q,ut.__useDefaultFramebuffer=q===void 0};const vn=Y.createFramebuffer();this.setRenderTarget=function(U,q=0,ut=0){J=U,I=q,G=ut;let st=null,rt=!1,Ut=!1;if(U){const Nt=R.get(U);if(Nt.__useDefaultFramebuffer!==void 0){Xt.bindFramebuffer(Y.FRAMEBUFFER,Nt.__webglFramebuffer),z.copy(U.viewport),F.copy(U.scissor),tt=U.scissorTest,Xt.viewport(z),Xt.scissor(F),Xt.setScissorTest(tt),$=-1;return}else if(Nt.__webglFramebuffer===void 0)Z.setupRenderTarget(U);else if(Nt.__hasExternalTextures)Z.rebindTextures(U,R.get(U.texture).__webglTexture,R.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const me=U.depthTexture;if(Nt.__boundDepthTexture!==me){if(me!==null&&R.has(me)&&(U.width!==me.image.width||U.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(U)}}const Zt=U.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ut=!0);const jt=R.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(jt[q])?st=jt[q][ut]:st=jt[q],rt=!0):U.samples>0&&Z.useMultisampledRTT(U)===!1?st=R.get(U).__webglMultisampledFramebuffer:Array.isArray(jt)?st=jt[ut]:st=jt,z.copy(U.viewport),F.copy(U.scissor),tt=U.scissorTest}else z.copy(it).multiplyScalar(vt).floor(),F.copy(mt).multiplyScalar(vt).floor(),tt=Mt;if(ut!==0&&(st=vn),Xt.bindFramebuffer(Y.FRAMEBUFFER,st)&&Xt.drawBuffers(U,st),Xt.viewport(z),Xt.scissor(F),Xt.setScissorTest(tt),rt){const Nt=R.get(U.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,ut)}else if(Ut){const Nt=q;for(let Zt=0;Zt<U.textures.length;Zt++){const jt=R.get(U.textures[Zt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Zt,jt.__webglTexture,ut,Nt)}}else if(U!==null&&ut!==0){const Nt=R.get(U.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Nt.__webglTexture,ut)}$=-1},this.readRenderTargetPixels=function(U,q,ut,st,rt,Ut,Bt,Nt=0){if(!(U&&U.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=R.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Bt!==void 0&&(Zt=Zt[Bt]),Zt){Xt.bindFramebuffer(Y.FRAMEBUFFER,Zt);try{const jt=U.textures[Nt],me=jt.format,ye=jt.type;if(U.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Nt),!ce.textureFormatReadable(me)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(ye)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=U.width-st&&ut>=0&&ut<=U.height-rt&&Y.readPixels(q,ut,st,rt,wt.convert(me),wt.convert(ye),Ut)}finally{const jt=J!==null?R.get(J).__webglFramebuffer:null;Xt.bindFramebuffer(Y.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(U,q,ut,st,rt,Ut,Bt,Nt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=R.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Bt!==void 0&&(Zt=Zt[Bt]),Zt)if(q>=0&&q<=U.width-st&&ut>=0&&ut<=U.height-rt){Xt.bindFramebuffer(Y.FRAMEBUFFER,Zt);const jt=U.textures[Nt],me=jt.format,ye=jt.type;if(U.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Nt),!ce.textureFormatReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Kt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ut.byteLength,Y.STREAM_READ),Y.readPixels(q,ut,st,rt,wt.convert(me),wt.convert(ye),0);const Ce=J!==null?R.get(J).__webglFramebuffer:null;Xt.bindFramebuffer(Y.FRAMEBUFFER,Ce);const yn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await WC(Y,yn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Kt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ut),Y.deleteBuffer(Kt),Y.deleteSync(yn),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,q=null,ut=0){const st=Math.pow(2,-ut),rt=Math.floor(U.image.width*st),Ut=Math.floor(U.image.height*st),Bt=q!==null?q.x:0,Nt=q!==null?q.y:0;Z.setTexture2D(U,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ut,0,0,Bt,Nt,rt,Ut),Xt.unbindTexture()};const _i=Y.createFramebuffer(),wr=Y.createFramebuffer();this.copyTextureToTexture=function(U,q,ut=null,st=null,rt=0,Ut=0){let Bt,Nt,Zt,jt,me,ye,Kt,Ce,yn;const Mn=U.isCompressedTexture?U.mipmaps[Ut]:U.image;if(ut!==null)Bt=ut.max.x-ut.min.x,Nt=ut.max.y-ut.min.y,Zt=ut.isBox3?ut.max.z-ut.min.z:1,jt=ut.min.x,me=ut.min.y,ye=ut.isBox3?ut.min.z:0;else{const Hn=Math.pow(2,-rt);Bt=Math.floor(Mn.width*Hn),Nt=Math.floor(Mn.height*Hn),U.isDataArrayTexture?Zt=Mn.depth:U.isData3DTexture?Zt=Math.floor(Mn.depth*Hn):Zt=1,jt=0,me=0,ye=0}st!==null?(Kt=st.x,Ce=st.y,yn=st.z):(Kt=0,Ce=0,yn=0);const Ze=wt.convert(q.format),jn=wt.convert(q.type);let ne;q.isData3DTexture?(Z.setTexture3D(q,0),ne=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Z.setTexture2DArray(q,0),ne=Y.TEXTURE_2D_ARRAY):(Z.setTexture2D(q,0),ne=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const Ri=Y.getParameter(Y.UNPACK_ROW_LENGTH),ve=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),wi=Y.getParameter(Y.UNPACK_SKIP_PIXELS),rr=Y.getParameter(Y.UNPACK_SKIP_ROWS),Zr=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Mn.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Mn.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,jt),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,me),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ye);const ar=U.isDataArrayTexture||U.isData3DTexture,tn=q.isDataArrayTexture||q.isData3DTexture;if(U.isDepthTexture){const Hn=R.get(U),Di=R.get(q),Vn=R.get(Hn.__renderTarget),jr=R.get(Di.__renderTarget);Xt.bindFramebuffer(Y.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Xt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let Aa=0;Aa<Zt;Aa++)ar&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,R.get(U).__webglTexture,rt,ye+Aa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,R.get(q).__webglTexture,Ut,yn+Aa)),Y.blitFramebuffer(jt,me,Bt,Nt,Kt,Ce,Bt,Nt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Xt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(rt!==0||U.isRenderTargetTexture||R.has(U)){const Hn=R.get(U),Di=R.get(q);Xt.bindFramebuffer(Y.READ_FRAMEBUFFER,_i),Xt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,wr);for(let Vn=0;Vn<Zt;Vn++)ar?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Hn.__webglTexture,rt,ye+Vn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Hn.__webglTexture,rt),tn?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Di.__webglTexture,Ut,yn+Vn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Di.__webglTexture,Ut),rt!==0?Y.blitFramebuffer(jt,me,Bt,Nt,Kt,Ce,Bt,Nt,Y.COLOR_BUFFER_BIT,Y.NEAREST):tn?Y.copyTexSubImage3D(ne,Ut,Kt,Ce,yn+Vn,jt,me,Bt,Nt):Y.copyTexSubImage2D(ne,Ut,Kt,Ce,jt,me,Bt,Nt);Xt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else tn?U.isDataTexture||U.isData3DTexture?Y.texSubImage3D(ne,Ut,Kt,Ce,yn,Bt,Nt,Zt,Ze,jn,Mn.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(ne,Ut,Kt,Ce,yn,Bt,Nt,Zt,Ze,Mn.data):Y.texSubImage3D(ne,Ut,Kt,Ce,yn,Bt,Nt,Zt,Ze,jn,Mn):U.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ut,Kt,Ce,Bt,Nt,Ze,jn,Mn.data):U.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ut,Kt,Ce,Mn.width,Mn.height,Ze,Mn.data):Y.texSubImage2D(Y.TEXTURE_2D,Ut,Kt,Ce,Bt,Nt,Ze,jn,Mn);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ri),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ve),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,wi),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,rr),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Zr),Ut===0&&q.generateMipmaps&&Y.generateMipmap(ne),Xt.unbindTexture()},this.initRenderTarget=function(U){R.get(U).__webglFramebuffer===void 0&&Z.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Z.setTextureCube(U,0):U.isData3DTexture?Z.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Z.setTexture2DArray(U,0):Z.setTexture2D(U,0),Xt.unbindTexture()},this.resetState=function(){I=0,G=0,J=null,Xt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ga}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(t),e.unpackColorSpace=qe._getUnpackColorSpace()}}function ja(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function AE(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Ar={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ou={duration:.5,overwrite:!1,delay:0},I0,mi,Tn,Wr=1e8,pn=1/Wr,Kg=Math.PI*2,nL=Kg/4,iL=0,CE=Math.sqrt,rL=Math.cos,aL=Math.sin,oi=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},rs=function(t){return typeof t=="number"},H0=function(t){return typeof t>"u"},Ta=function(t){return typeof t=="object"},Ji=function(t){return t!==!1},V0=function(){return typeof window<"u"},jh=function(t){return Ln(t)||oi(t)},RE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ai=Array.isArray,sL=/random\([^)]+\)/g,oL=/,\s*/g,e1=/(?:-?\.?\d|\.)+/gi,wE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,kl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,V_=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,DE=/[+-]=-?[.\d]+/,lL=/[^,'"\[\]\s]+/gi,uL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Cn,ha,Jg,G0,Cr={},wd={},UE,LE=function(t){return(wd=lu(t,Cr))&&nr},k0=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Qc=function(t,e){return!e&&console.warn(t)},NE=function(t,e){return t&&(Cr[t]=e)&&wd&&(wd[t]=e)||Cr},Kc=function(){return 0},cL={suppressEvents:!0,isStart:!0,kill:!1},pd={suppressEvents:!0,kill:!1},fL={suppressEvents:!0},X0={},ks=[],$g={},OE,gr={},G_={},n1=30,md=[],W0="",Y0=function(t){var e=t[0],i,a;if(Ta(e)||Ln(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(a=md.length;a--&&!md[a].targetTest(e););i=md[a]}for(a=t.length;a--;)t[a]&&(t[a]._gsap||(t[a]._gsap=new rT(t[a],i)))||t.splice(a,1);return t},No=function(t){return t._gsap||Y0(Yr(t))[0]._gsap},PE=function(t,e,i){return(i=t[e])&&Ln(i)?t[e]():H0(i)&&t.getAttribute&&t.getAttribute(e)||i},$i=function(t,e){return(t=t.split(",")).forEach(e)||t},zn=function(t){return Math.round(t*1e5)/1e5||0},An=function(t){return Math.round(t*1e7)/1e7||0},jl=function(t,e){var i=e.charAt(0),a=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+a:i==="-"?t-a:i==="*"?t*a:t/a},hL=function(t,e){for(var i=e.length,a=0;t.indexOf(e[a])<0&&++a<i;);return a<i},Dd=function(){var t=ks.length,e=ks.slice(0),i,a;for($g={},ks.length=0,i=0;i<t;i++)a=e[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},q0=function(t){return!!(t._initted||t._startAt||t.add)},zE=function(t,e,i,a){ks.length&&!mi&&Dd(),t.render(e,i,!!(mi&&e<0&&q0(t))),ks.length&&!mi&&Dd()},FE=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(lL).length<2?e:oi(t)?t.trim():t},BE=function(t){return t},Rr=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},dL=function(t){return function(e,i){for(var a in i)a in e||a==="duration"&&t||a==="ease"||(e[a]=i[a])}},lu=function(t,e){for(var i in e)t[i]=e[i];return t},i1=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ta(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Ud=function(t,e){var i={},a;for(a in t)a in e||(i[a]=t[a]);return i},Uc=function(t){var e=t.parent||Cn,i=t.keyframes?dL(Ai(t.keyframes)):Rr;if(Ji(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},pL=function(t,e){for(var i=t.length,a=i===e.length;a&&i--&&t[i]===e[i];);return i<0},IE=function(t,e,i,a,l){var c=t[a],f;if(l)for(f=e[l];c&&c[l]>f;)c=c._prev;return c?(e._next=c._next,c._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[a]=e,e._prev=c,e.parent=e._dp=t,e},Yd=function(t,e,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var l=e._prev,c=e._next;l?l._next=c:t[i]===e&&(t[i]=c),c?c._prev=l:t[a]===e&&(t[a]=l),e._next=e._prev=e.parent=null},qs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Oo=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},mL=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},t0=function(t,e,i,a){return t._startAt&&(mi?t._startAt.revert(pd):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,a))},_L=function s(t){return!t||t._ts&&s(t.parent)},r1=function(t){return t._repeat?uu(t._tTime,t=t.duration()+t._rDelay)*t:0},uu=function(t,e){var i=Math.floor(t=An(t/e));return t&&i===t?i-1:i},Ld=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},qd=function(t){return t._end=An(t._start+(t._tDur/Math.abs(t._ts||t._rts||pn)||0))},Zd=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=An(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),qd(t),i._dirty||Oo(i,t)),t},HE=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Ld(t.rawTime(),e),(!e._dur||cf(0,e.totalDuration(),i)-e._tTime>pn)&&e.render(i,!0)),Oo(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-pn}},ma=function(t,e,i,a){return e.parent&&qs(e),e._start=An((rs(i)?i:i||t!==Cn?Ir(t,i,e):t._time)+e._delay),e._end=An(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),IE(t,e,"_first","_last",t._sort?"_start":0),e0(e)||(t._recent=e),a||HE(t,e),t._ts<0&&Zd(t,t._tTime),t},VE=function(t,e){return(Cr.ScrollTrigger||k0("scrollTrigger",e))&&Cr.ScrollTrigger.create(e,t)},GE=function(t,e,i,a,l){if(j0(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!mi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&OE!==xr.frame)return ks.push(t),t._lazy=[l,a],1},gL=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},e0=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},vL=function(t,e,i,a){var l=t.ratio,c=e<0||!e&&(!t._start&&gL(t)&&!(!t._initted&&e0(t))||(t._ts<0||t._dp._ts<0)&&!e0(t))?0:1,f=t._rDelay,h=0,d,_,v;if(f&&t._repeat&&(h=cf(0,t._tDur,e),_=uu(h,f),t._yoyo&&_&1&&(c=1-c),_!==uu(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||mi||a||t._zTime===pn||!e&&t._zTime){if(!t._initted&&GE(t,e,a,i,h))return;for(v=t._zTime,t._zTime=e||(i?pn:0),i||(i=e&&!v),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=h,d=t._pt;d;)d.r(c,d.d),d=d._next;e<0&&t0(t,e,i,!0),t._onUpdate&&!i&&yr(t,"onUpdate"),h&&t._repeat&&!i&&t.parent&&yr(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===c&&(c&&qs(t,1),!i&&!mi&&(yr(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},xL=function(t,e,i){var a;if(i>e)for(a=t._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>e)return a;a=a._next}else for(a=t._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<e)return a;a=a._prev}},cu=function(t,e,i,a){var l=t._repeat,c=An(e)||0,f=t._tTime/t._tDur;return f&&!a&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:An(c*(l+1)+t._rDelay*l):c,f>0&&!a&&Zd(t,t._tTime=t._tDur*f),t.parent&&qd(t),i||Oo(t.parent,t),t},a1=function(t){return t instanceof Bi?Oo(t):cu(t,t._dur)},SL={_start:0,endTime:Kc,totalDuration:Kc},Ir=function s(t,e,i){var a=t.labels,l=t._recent||SL,c=t.duration()>=Wr?l.endTime(!1):t._dur,f,h,d;return oi(e)&&(isNaN(e)||e in a)?(h=e.charAt(0),d=e.substr(-1)==="%",f=e.indexOf("="),h==="<"||h===">"?(f>=0&&(e=e.replace(/=/,"")),(h==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(d?(f<0?l:i).totalDuration()/100:1)):f<0?(e in a||(a[e]=c),a[e]):(h=parseFloat(e.charAt(f-1)+e.substr(f+1)),d&&i&&(h=h/100*(Ai(i)?i[0]:i).totalDuration()),f>1?s(t,e.substr(0,f-1),i)+h:c+h)):e==null?c:+e},Lc=function(t,e,i){var a=rs(e[1]),l=(a?2:1)+(t<2?0:1),c=e[l],f,h;if(a&&(c.duration=e[1]),c.parent=i,t){for(f=c,h=i;h&&!("immediateRender"in f);)f=h.vars.defaults||{},h=Ji(h.vars.inherit)&&h.parent;c.immediateRender=Ji(f.immediateRender),t<2?c.runBackwards=1:c.startAt=e[l-1]}return new Zn(e[0],c,e[l+1])},Ks=function(t,e){return t||t===0?e(t):e},cf=function(t,e,i){return i<t?t:i>e?e:i},Ei=function(t,e){return!oi(t)||!(e=uL.exec(t))?"":e[1]},yL=function(t,e,i){return Ks(i,function(a){return cf(t,e,a)})},n0=[].slice,kE=function(t,e){return t&&Ta(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ta(t[0]))&&!t.nodeType&&t!==ha},ML=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(a){var l;return oi(a)&&!e||kE(a,1)?(l=i).push.apply(l,Yr(a)):i.push(a)})||i},Yr=function(t,e,i){return Tn&&!e&&Tn.selector?Tn.selector(t):oi(t)&&!i&&(Jg||!fu())?n0.call((e||G0).querySelectorAll(t),0):Ai(t)?ML(t,i):kE(t)?n0.call(t,0):t?[t]:[]},i0=function(t){return t=Yr(t)[0]||Qc("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Yr(e,i.querySelectorAll?i:i===t?Qc("Invalid scope")||G0.createElement("div"):t)}},XE=function(t){return t.sort(function(){return .5-Math.random()})},WE=function(t){if(Ln(t))return t;var e=Ta(t)?t:{each:t},i=Po(e.ease),a=e.from||0,l=parseFloat(e.base)||0,c={},f=a>0&&a<1,h=isNaN(a)||f,d=e.axis,_=a,v=a;return oi(a)?_=v={center:.5,edges:.5,end:1}[a]||0:!f&&h&&(_=a[0],v=a[1]),function(g,x,y){var E=(y||e).length,S=c[E],M,A,D,C,P,O,L,T,w;if(!S){if(w=e.grid==="auto"?0:(e.grid||[1,Wr])[1],!w){for(L=-Wr;L<(L=y[w++].getBoundingClientRect().left)&&w<E;);w<E&&w--}for(S=c[E]=[],M=h?Math.min(w,E)*_-.5:a%w,A=w===Wr?0:h?E*v/w-.5:a/w|0,L=0,T=Wr,O=0;O<E;O++)D=O%w-M,C=A-(O/w|0),S[O]=P=d?Math.abs(d==="y"?C:D):CE(D*D+C*C),P>L&&(L=P),P<T&&(T=P);a==="random"&&XE(S),S.max=L-T,S.min=T,S.v=E=(parseFloat(e.amount)||parseFloat(e.each)*(w>E?E-1:d?d==="y"?E/w:w:Math.max(w,E/w))||0)*(a==="edges"?-1:1),S.b=E<0?l-E:l,S.u=Ei(e.amount||e.each)||0,i=i&&E<0?eT(i):i}return E=(S[g]-S.min)/S.max||0,An(S.b+(i?i(E):E)*S.v)+S.u}},r0=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var a=An(Math.round(parseFloat(i)/t)*t*e);return(a-a%1)/e+(rs(i)?0:Ei(i))}},YE=function(t,e){var i=Ai(t),a,l;return!i&&Ta(t)&&(a=i=t.radius||Wr,t.values?(t=Yr(t.values),(l=!rs(t[0]))&&(a*=a)):t=r0(t.increment)),Ks(e,i?Ln(t)?function(c){return l=t(c),Math.abs(l-c)<=a?l:c}:function(c){for(var f=parseFloat(l?c.x:c),h=parseFloat(l?c.y:0),d=Wr,_=0,v=t.length,g,x;v--;)l?(g=t[v].x-f,x=t[v].y-h,g=g*g+x*x):g=Math.abs(t[v]-f),g<d&&(d=g,_=v);return _=!a||d<=a?t[_]:c,l||_===c||rs(c)?_:_+Ei(c)}:r0(t))},qE=function(t,e,i,a){return Ks(Ai(t)?!e:i===!0?!!(i=0):!a,function(){return Ai(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*a)/a})},EL=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(a){return e.reduce(function(l,c){return c(l)},a)}},TL=function(t,e){return function(i){return t(parseFloat(i))+(e||Ei(i))}},bL=function(t,e,i){return jE(t,e,0,1,i)},ZE=function(t,e,i){return Ks(i,function(a){return t[~~e(a)]})},AL=function s(t,e,i){var a=e-t;return Ai(t)?ZE(t,s(0,t.length),e):Ks(i,function(l){return(a+(l-t)%a)%a+t})},CL=function s(t,e,i){var a=e-t,l=a*2;return Ai(t)?ZE(t,s(0,t.length-1),e):Ks(i,function(c){return c=(l+(c-t)%l)%l||0,t+(c>a?l-c:c)})},Jc=function(t){return t.replace(sL,function(e){var i=e.indexOf("[")+1,a=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(oL);return qE(i?a:+a[0],i?0:+a[1],+a[2]||1e-5)})},jE=function(t,e,i,a,l){var c=e-t,f=a-i;return Ks(l,function(h){return i+((h-t)/c*f||0)})},RL=function s(t,e,i,a){var l=isNaN(t+e)?0:function(x){return(1-x)*t+x*e};if(!l){var c=oi(t),f={},h,d,_,v,g;if(i===!0&&(a=1)&&(i=null),c)t={p:t},e={p:e};else if(Ai(t)&&!Ai(e)){for(_=[],v=t.length,g=v-2,d=1;d<v;d++)_.push(s(t[d-1],t[d]));v--,l=function(y){y*=v;var E=Math.min(g,~~y);return _[E](y-E)},i=e}else a||(t=lu(Ai(t)?[]:{},t));if(!_){for(h in e)Z0.call(f,t,h,"get",e[h]);l=function(y){return J0(y,f)||(c?t.p:t)}}}return Ks(i,l)},s1=function(t,e,i){var a=t.labels,l=Wr,c,f,h;for(c in a)f=a[c]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(h=c,l=f);return h},yr=function(t,e,i){var a=t.vars,l=a[e],c=Tn,f=t._ctx,h,d,_;if(l)return h=a[e+"Params"],d=a.callbackScope||t,i&&ks.length&&Dd(),f&&(Tn=f),_=h?l.apply(d,h):l.call(d),Tn=c,_},yc=function(t){return qs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mi),t.progress()<1&&yr(t,"onInterrupt"),t},Xl,QE=[],KE=function(t){if(t)if(t=!t.name&&t.default||t,V0()||t.headless){var e=t.name,i=Ln(t),a=e&&!i&&t.init?function(){this._props=[]}:t,l={init:Kc,render:J0,add:Z0,kill:XL,modifier:kL,rawVars:0},c={targetTest:0,get:0,getSetter:K0,aliases:{},register:0};if(fu(),t!==a){if(gr[e])return;Rr(a,Rr(Ud(t,l),c)),lu(a.prototype,lu(l,Ud(t,c))),gr[a.prop=e]=a,t.targetTest&&(md.push(a),X0[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}NE(e,a),t.register&&t.register(nr,a,tr)}else QE.push(t)},dn=255,Mc={aqua:[0,dn,dn],lime:[0,dn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dn],navy:[0,0,128],white:[dn,dn,dn],olive:[128,128,0],yellow:[dn,dn,0],orange:[dn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dn,0,0],pink:[dn,192,203],cyan:[0,dn,dn],transparent:[dn,dn,dn,0]},k_=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*dn+.5|0},JE=function(t,e,i){var a=t?rs(t)?[t>>16,t>>8&dn,t&dn]:0:Mc.black,l,c,f,h,d,_,v,g,x,y;if(!a){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Mc[t])a=Mc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return a=parseInt(t.substr(1,6),16),[a>>16,a>>8&dn,a&dn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),a=[t>>16,t>>8&dn,t&dn]}else if(t.substr(0,3)==="hsl"){if(a=y=t.match(e1),!e)h=+a[0]%360/360,d=+a[1]/100,_=+a[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,a.length>3&&(a[3]*=1),a[0]=k_(h+1/3,l,c),a[1]=k_(h,l,c),a[2]=k_(h-1/3,l,c);else if(~t.indexOf("="))return a=t.match(wE),i&&a.length<4&&(a[3]=1),a}else a=t.match(e1)||Mc.transparent;a=a.map(Number)}return e&&!y&&(l=a[0]/dn,c=a[1]/dn,f=a[2]/dn,v=Math.max(l,c,f),g=Math.min(l,c,f),_=(v+g)/2,v===g?h=d=0:(x=v-g,d=_>.5?x/(2-v-g):x/(v+g),h=v===l?(c-f)/x+(c<f?6:0):v===c?(f-l)/x+2:(l-c)/x+4,h*=60),a[0]=~~(h+.5),a[1]=~~(d*100+.5),a[2]=~~(_*100+.5)),i&&a.length<4&&(a[3]=1),a},$E=function(t){var e=[],i=[],a=-1;return t.split(Xs).forEach(function(l){var c=l.match(kl)||[];e.push.apply(e,c),i.push(a+=c.length+1)}),e.c=i,e},o1=function(t,e,i){var a="",l=(t+a).match(Xs),c=e?"hsla(":"rgba(",f=0,h,d,_,v;if(!l)return t;if(l=l.map(function(g){return(g=JE(g,e,1))&&c+(e?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(_=$E(t),h=i.c,h.join(a)!==_.c.join(a)))for(d=t.replace(Xs,"1").split(kl),v=d.length-1;f<v;f++)a+=d[f]+(~h.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:i).shift());if(!d)for(d=t.split(Xs),v=d.length-1;f<v;f++)a+=d[f]+l[f];return a+d[v]},Xs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Mc)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),wL=/hsl[a]?\(/,tT=function(t){var e=t.join(" "),i;if(Xs.lastIndex=0,Xs.test(e))return i=wL.test(e),t[1]=o1(t[1],i),t[0]=o1(t[0],i,$E(t[1])),!0},$c,xr=(function(){var s=Date.now,t=500,e=33,i=s(),a=i,l=1e3/240,c=l,f=[],h,d,_,v,g,x,y=function E(S){var M=s()-a,A=S===!0,D,C,P,O;if((M>t||M<0)&&(i+=M-e),a+=M,P=a-i,D=P-c,(D>0||A)&&(O=++v.frame,g=P-v.time*1e3,v.time=P=P/1e3,c+=D+(D>=l?4:l-D),C=1),A||(h=d(E)),C)for(x=0;x<f.length;x++)f[x](P,g,O,S)};return v={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(S){return g/(1e3/(S||60))},wake:function(){UE&&(!Jg&&V0()&&(ha=Jg=window,G0=ha.document||{},Cr.gsap=nr,(ha.gsapVersions||(ha.gsapVersions=[])).push(nr.version),LE(wd||ha.GreenSockGlobals||!ha.gsap&&ha||{}),QE.forEach(KE)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&v.sleep(),d=_||function(S){return setTimeout(S,c-v.time*1e3+1|0)},$c=1,y(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(h),$c=0,d=Kc},lagSmoothing:function(S,M){t=S||1/0,e=Math.min(M||33,t)},fps:function(S){l=1e3/(S||240),c=v.time*1e3+l},add:function(S,M,A){var D=M?function(C,P,O,L){S(C,P,O,L),v.remove(D)}:S;return v.remove(S),f[A?"unshift":"push"](D),fu(),D},remove:function(S,M){~(M=f.indexOf(S))&&f.splice(M,1)&&x>=M&&x--},_listeners:f},v})(),fu=function(){return!$c&&xr.wake()},We={},DL=/^[\d.\-M][\d.\-,\s]/,UL=/["']/g,LL=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),a=i[0],l=1,c=i.length,f,h,d;l<c;l++)h=i[l],f=l!==c-1?h.lastIndexOf(","):h.length,d=h.substr(0,f),e[a]=isNaN(d)?d.replace(UL,"").trim():+d,a=h.substr(f+1).trim();return e},NL=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),a=t.indexOf("(",e);return t.substring(e,~a&&a<i?t.indexOf(")",i+1):i)},OL=function(t){var e=(t+"").split("("),i=We[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[LL(e[1])]:NL(t).split(",").map(FE)):We._CE&&DL.test(t)?We._CE("",t):i},eT=function(t){return function(e){return 1-t(1-e)}},nT=function s(t,e){for(var i=t._first,a;i;)i instanceof Bi?s(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?s(i.timeline,e):(a=i._ease,i._ease=i._yEase,i._yEase=a,i._yoyo=e)),i=i._next},Po=function(t,e){return t&&(Ln(t)?t:We[t]||OL(t))||e},Wo=function(t,e,i,a){i===void 0&&(i=function(h){return 1-e(1-h)}),a===void 0&&(a=function(h){return h<.5?e(h*2)/2:1-e((1-h)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:a},c;return $i(t,function(f){We[f]=Cr[f]=l,We[c=f.toLowerCase()]=i;for(var h in l)We[c+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=We[f+"."+h]=l[h]}),l},iT=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},X_=function s(t,e,i){var a=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),c=l/Kg*(Math.asin(1/a)||0),f=function(_){return _===1?1:a*Math.pow(2,-10*_)*aL((_-c)*l)+1},h=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:iT(f);return l=Kg/l,h.config=function(d,_){return s(t,d,_)},h},W_=function s(t,e){e===void 0&&(e=1.70158);var i=function(c){return c?--c*c*((e+1)*c+e)+1:0},a=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:iT(i);return a.config=function(l){return s(t,l)},a};$i("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Wo(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;Wo("Elastic",X_("in"),X_("out"),X_());(function(s,t){var e=1/t,i=2*e,a=2.5*e,l=function(f){return f<e?s*f*f:f<i?s*Math.pow(f-1.5/t,2)+.75:f<a?s*(f-=2.25/t)*f+.9375:s*Math.pow(f-2.625/t,2)+.984375};Wo("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Wo("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Wo("Circ",function(s){return-(CE(1-s*s)-1)});Wo("Sine",function(s){return s===1?1:-rL(s*nL)+1});Wo("Back",W_("in"),W_("out"),W_());We.SteppedEase=We.steps=Cr.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,a=t+(e?0:1),l=e?1:0,c=1-pn;return function(f){return((a*cf(0,c,f)|0)+l)*i}}};ou.ease=We["quad.out"];$i("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return W0+=s+","+s+"Params,"});var rT=function(t,e){this.id=iL++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:PE,this.set=e?e.getSetter:K0},tf=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,cu(this,+e.duration,1,1),this.data=e.data,Tn&&(this._ctx=Tn,Tn.data.push(this)),$c||xr.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,cu(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,a){if(fu(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Zd(this,i),!l._dp||l.parent||HE(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ma(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===pn||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zE(this,i,a)),this},t.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+r1(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},t.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+r1(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,a){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,a):this._repeat?uu(this._tTime,l)+1:1},t.timeScale=function(i,a){if(!arguments.length)return this._rts===-pn?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Ld(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-pn?0:this._rts,this.totalTime(cf(-Math.abs(this._delay),this.totalDuration(),l),a!==!1),qd(this),mL(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fu(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pn&&(this._tTime-=pn)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=An(i);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&ma(a,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Ji(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ld(a.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=fL);var a=mi;return mi=i,q0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),mi=a,this},t.globalTime=function(i){for(var a=this,l=arguments.length?i:a.rawTime();a;)l=a._start+l/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,a1(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,a1(this),a?this.time(a):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,a){return this.totalTime(Ir(this,i),Ji(a))},t.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,Ji(a)),this._dur||(this._zTime=-pn),this},t.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},t.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},t.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-pn:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-pn,this},t.isActive=function(){var i=this.parent||this._dp,a=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=a&&l<this.endTime(!0)-pn)},t.eventCallback=function(i,a,l){var c=this.vars;return arguments.length>1?(a?(c[i]=a,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=a)):delete c[i],this):c[i]},t.then=function(i){var a=this,l=a._prom;return new Promise(function(c){var f=Ln(i)?i:BE,h=function(){var _=a.then;a.then=null,l&&l(),Ln(f)&&(f=f(a))&&(f.then||f===a)&&(a.then=_),c(f),a.then=_};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?h():a._prom=h})},t.kill=function(){yc(this)},s})();Rr(tf.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pn,_prom:0,_ps:!1,_rts:1});var Bi=(function(s){AE(t,s);function t(i,a){var l;return i===void 0&&(i={}),l=s.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=Ji(i.sortChildren),Cn&&ma(i.parent||Cn,ja(l),a),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&VE(ja(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(a,l,c){return Lc(0,arguments,this),this},e.from=function(a,l,c){return Lc(1,arguments,this),this},e.fromTo=function(a,l,c,f){return Lc(2,arguments,this),this},e.set=function(a,l,c){return l.duration=0,l.parent=this,Uc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Zn(a,l,Ir(this,c),1),this},e.call=function(a,l,c){return ma(this,Zn.delayedCall(0,a,l),c)},e.staggerTo=function(a,l,c,f,h,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new Zn(a,c,Ir(this,h)),this},e.staggerFrom=function(a,l,c,f,h,d,_){return c.runBackwards=1,Uc(c).immediateRender=Ji(c.immediateRender),this.staggerTo(a,l,c,f,h,d,_)},e.staggerFromTo=function(a,l,c,f,h,d,_,v){return f.startAt=c,Uc(f).immediateRender=Ji(f.immediateRender),this.staggerTo(a,l,f,h,d,_,v)},e.render=function(a,l,c){var f=this._time,h=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=a<=0?0:An(a),v=this._zTime<0!=a<0&&(this._initted||!d),g,x,y,E,S,M,A,D,C,P,O,L;if(this!==Cn&&_>h&&a>=0&&(_=h),_!==this._tTime||c||v){if(f!==this._time&&d&&(_+=this._time-f,a+=this._time-f),g=_,C=this._start,D=this._ts,M=!D,v&&(d||(f=this._zTime),(a||!l)&&(this._zTime=a)),this._repeat){if(O=this._yoyo,S=d+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(S*100+a,l,c);if(g=An(_%S),_===h?(E=this._repeat,g=d):(P=An(_/S),E=~~P,E&&E===P&&(g=d,E--),g>d&&(g=d)),P=uu(this._tTime,S),!f&&this._tTime&&P!==E&&this._tTime-P*S-this._dur<=0&&(P=E),O&&E&1&&(g=d-g,L=1),E!==P&&!this._lock){var T=O&&P&1,w=T===(O&&E&1);if(E<P&&(T=!T),f=T?0:_%d?d:_,this._lock=1,this.render(f||(L?0:An(E*S)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&yr(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1,P=E),f&&f!==this._time||M!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,h=this._tDur,w&&(this._lock=2,f=T?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!M)return this;nT(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=xL(this,An(f),An(g)),A&&(_-=g-(g=A._start))),this._tTime=_,this._time=g,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,f=0),!f&&_&&d&&!l&&!P&&(yr(this,"onStart"),this._tTime!==_))return this;if(g>=f&&a>=0)for(x=this._first;x;){if(y=x._next,(x._act||g>=x._start)&&x._ts&&A!==x){if(x.parent!==this)return this.render(a,l,c);if(x.render(x._ts>0?(g-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(g-x._start)*x._ts,l,c),g!==this._time||!this._ts&&!M){A=0,y&&(_+=this._zTime=-pn);break}}x=y}else{x=this._last;for(var k=a<0?a:g;x;){if(y=x._prev,(x._act||k<=x._end)&&x._ts&&A!==x){if(x.parent!==this)return this.render(a,l,c);if(x.render(x._ts>0?(k-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(k-x._start)*x._ts,l,c||mi&&q0(x)),g!==this._time||!this._ts&&!M){A=0,y&&(_+=this._zTime=k?-pn:pn);break}}x=y}}if(A&&!l&&(this.pause(),A.render(g>=f?0:-pn)._zTime=g>=f?1:-1,this._ts))return this._start=C,qd(this),this.render(a,l,c);this._onUpdate&&!l&&yr(this,"onUpdate",!0),(_===h&&this._tTime>=this.totalDuration()||!_&&f)&&(C===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((a||!d)&&(_===h&&this._ts>0||!_&&this._ts<0)&&qs(this,1),!l&&!(a<0&&!f)&&(_||f||!h)&&(yr(this,_===h&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<h&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(a,l){var c=this;if(rs(l)||(l=Ir(this,l,a)),!(a instanceof tf)){if(Ai(a))return a.forEach(function(f){return c.add(f,l)}),this;if(oi(a))return this.addLabel(a,l);if(Ln(a))a=Zn.delayedCall(0,a);else return this}return this!==a?ma(this,a,l):this},e.getChildren=function(a,l,c,f){a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Wr);for(var h=[],d=this._first;d;)d._start>=f&&(d instanceof Zn?l&&h.push(d):(c&&h.push(d),a&&h.push.apply(h,d.getChildren(!0,l,c)))),d=d._next;return h},e.getById=function(a){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===a)return l[c]},e.remove=function(a){return oi(a)?this.removeLabel(a):Ln(a)?this.killTweensOf(a):(a.parent===this&&Yd(this,a),a===this._recent&&(this._recent=this._last),Oo(this))},e.totalTime=function(a,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=An(xr.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),s.prototype.totalTime.call(this,a,l),this._forcing=0,this):this._tTime},e.addLabel=function(a,l){return this.labels[a]=Ir(this,l),this},e.removeLabel=function(a){return delete this.labels[a],this},e.addPause=function(a,l,c){var f=Zn.delayedCall(0,l||Kc,c);return f.data="isPause",this._hasPause=1,ma(this,f,Ir(this,a))},e.removePause=function(a){var l=this._first;for(a=Ir(this,a);l;)l._start===a&&l.data==="isPause"&&qs(l),l=l._next},e.killTweensOf=function(a,l,c){for(var f=this.getTweensOf(a,c),h=f.length;h--;)Bs!==f[h]&&f[h].kill(a,l);return this},e.getTweensOf=function(a,l){for(var c=[],f=Yr(a),h=this._first,d=rs(l),_;h;)h instanceof Zn?hL(h._targets,f)&&(d?(!Bs||h._initted&&h._ts)&&h.globalTime(0)<=l&&h.globalTime(h.totalDuration())>l:!l||h.isActive())&&c.push(h):(_=h.getTweensOf(f,l)).length&&c.push.apply(c,_),h=h._next;return c},e.tweenTo=function(a,l){l=l||{};var c=this,f=Ir(c,a),h=l,d=h.startAt,_=h.onStart,v=h.onStartParams,g=h.immediateRender,x,y=Zn.to(c,Rr({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||pn,onStart:function(){if(c.pause(),!x){var S=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());y._dur!==S&&cu(y,S,0,1).render(y._time,!0,!0),x=1}_&&_.apply(y,v||[])}},l));return g?y.render(0):y},e.tweenFromTo=function(a,l,c){return this.tweenTo(l,Rr({startAt:{time:Ir(this,a)}},c))},e.recent=function(){return this._recent},e.nextLabel=function(a){return a===void 0&&(a=this._time),s1(this,Ir(this,a))},e.previousLabel=function(a){return a===void 0&&(a=this._time),s1(this,Ir(this,a),1)},e.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+pn)},e.shiftChildren=function(a,l,c){c===void 0&&(c=0);var f=this._first,h=this.labels,d;for(a=An(a);f;)f._start>=c&&(f._start+=a,f._end+=a),f=f._next;if(l)for(d in h)h[d]>=c&&(h[d]+=a);return Oo(this)},e.invalidate=function(a){var l=this._first;for(this._lock=0;l;)l.invalidate(a),l=l._next;return s.prototype.invalidate.call(this,a)},e.clear=function(a){a===void 0&&(a=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Oo(this)},e.totalDuration=function(a){var l=0,c=this,f=c._last,h=Wr,d,_,v;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-a:a));if(c._dirty){for(v=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>h&&c._sort&&f._ts&&!c._lock?(c._lock=1,ma(c,f,_-f._delay,1)._lock=0):h=_,_<0&&f._ts&&(l-=_,(!v&&!c._dp||v&&v.smoothChildTiming)&&(c._start+=An(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),h=0),f._end>l&&f._ts&&(l=f._end),f=d;cu(c,c===Cn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(a){if(Cn._ts&&(zE(Cn,Ld(a,Cn)),OE=xr.frame),xr.frame>=n1){n1+=Ar.autoSleep||120;var l=Cn._first;if((!l||!l._ts)&&Ar.autoSleep&&xr._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||xr.sleep()}}},t})(tf);Rr(Bi.prototype,{_lock:0,_hasPause:0,_forcing:0});var PL=function(t,e,i,a,l,c,f){var h=new tr(this._pt,t,e,0,1,cT,null,l),d=0,_=0,v,g,x,y,E,S,M,A;for(h.b=i,h.e=a,i+="",a+="",(M=~a.indexOf("random("))&&(a=Jc(a)),c&&(A=[i,a],c(A,t,e),i=A[0],a=A[1]),g=i.match(V_)||[];v=V_.exec(a);)y=v[0],E=a.substring(d,v.index),x?x=(x+1)%5:E.substr(-5)==="rgba("&&(x=1),y!==g[_++]&&(S=parseFloat(g[_-1])||0,h._pt={_next:h._pt,p:E||_===1?E:",",s:S,c:y.charAt(1)==="="?jl(S,y)-S:parseFloat(y)-S,m:x&&x<4?Math.round:0},d=V_.lastIndex);return h.c=d<a.length?a.substring(d,a.length):"",h.fp=f,(DE.test(a)||M)&&(h.e=0),this._pt=h,h},Z0=function(t,e,i,a,l,c,f,h,d,_){Ln(a)&&(a=a(l||0,t,c));var v=t[e],g=i!=="get"?i:Ln(v)?d?t[e.indexOf("set")||!Ln(t["get"+e.substr(3)])?e:"get"+e.substr(3)](d):t[e]():v,x=Ln(v)?d?HL:lT:Q0,y;if(oi(a)&&(~a.indexOf("random(")&&(a=Jc(a)),a.charAt(1)==="="&&(y=jl(g,a)+(Ei(g)||0),(y||y===0)&&(a=y))),!_||g!==a||a0)return!isNaN(g*a)&&a!==""?(y=new tr(this._pt,t,e,+g||0,a-(g||0),typeof v=="boolean"?GL:uT,0,x),d&&(y.fp=d),f&&y.modifier(f,this,t),this._pt=y):(!v&&!(e in t)&&k0(e,a),PL.call(this,t,e,g,a,x,h||Ar.stringFilter,d))},zL=function(t,e,i,a,l){if(Ln(t)&&(t=Nc(t,l,e,i,a)),!Ta(t)||t.style&&t.nodeType||Ai(t)||RE(t))return oi(t)?Nc(t,l,e,i,a):t;var c={},f;for(f in t)c[f]=Nc(t[f],l,e,i,a);return c},aT=function(t,e,i,a,l,c){var f,h,d,_;if(gr[t]&&(f=new gr[t]).init(l,f.rawVars?e[t]:zL(e[t],a,l,c,i),i,a,c)!==!1&&(i._pt=h=new tr(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==Xl))for(d=i._ptLookup[i._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=h;return f},Bs,a0,j0=function s(t,e,i){var a=t.vars,l=a.ease,c=a.startAt,f=a.immediateRender,h=a.lazy,d=a.onUpdate,_=a.runBackwards,v=a.yoyoEase,g=a.keyframes,x=a.autoRevert,y=t._dur,E=t._startAt,S=t._targets,M=t.parent,A=M&&M.data==="nested"?M.vars.targets:S,D=t._overwrite==="auto"&&!I0,C=t.timeline,P,O,L,T,w,k,I,G,J,$,Q,z,F;if(C&&(!g||!l)&&(l="none"),t._ease=Po(l,ou.ease),t._yEase=v?eT(Po(v===!0?l:v,ou.ease)):0,v&&t._yoyo&&!t._repeat&&(v=t._yEase,t._yEase=t._ease,t._ease=v),t._from=!C&&!!a.runBackwards,!C||g&&!a.stagger){if(G=S[0]?No(S[0]).harness:0,z=G&&a[G.prop],P=Ud(a,X0),E&&(E._zTime<0&&E.progress(1),e<0&&_&&f&&!x?E.render(-1,!0):E.revert(_&&y?pd:cL),E._lazy=0),c){if(qs(t._startAt=Zn.set(S,Rr({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!E&&Ji(h),startAt:null,delay:0,onUpdate:d&&function(){return yr(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mi||!f&&!x)&&t._startAt.revert(pd),f&&y&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(_&&y&&!E){if(e&&(f=!1),L=Rr({overwrite:!1,data:"isFromStart",lazy:f&&!E&&Ji(h),immediateRender:f,stagger:0,parent:M},P),z&&(L[G.prop]=z),qs(t._startAt=Zn.set(S,L)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mi?t._startAt.revert(pd):t._startAt.render(-1,!0)),t._zTime=e,!f)s(t._startAt,pn,pn);else if(!e)return}for(t._pt=t._ptCache=0,h=y&&Ji(h)||h&&!y,O=0;O<S.length;O++){if(w=S[O],I=w._gsap||Y0(S)[O]._gsap,t._ptLookup[O]=$={},$g[I.id]&&ks.length&&Dd(),Q=A===S?O:A.indexOf(w),G&&(J=new G).init(w,z||P,t,Q,A)!==!1&&(t._pt=T=new tr(t._pt,w,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(tt){$[tt]=T}),J.priority&&(k=1)),!G||z)for(L in P)gr[L]&&(J=aT(L,P,t,Q,w,A))?J.priority&&(k=1):$[L]=T=Z0.call(t,w,L,"get",P[L],Q,A,0,a.stringFilter);t._op&&t._op[O]&&t.kill(w,t._op[O]),D&&t._pt&&(Bs=t,Cn.killTweensOf(w,$,t.globalTime(e)),F=!t.parent,Bs=0),t._pt&&h&&($g[I.id]=1)}k&&fT(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!F,g&&e<=0&&C.render(Wr,!0,!0)},FL=function(t,e,i,a,l,c,f,h){var d=(t._pt&&t._ptCache||(t._ptCache={}))[e],_,v,g,x;if(!d)for(d=t._ptCache[e]=[],g=t._ptLookup,x=t._targets.length;x--;){if(_=g[x][e],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==e&&_.fp!==e;)_=_._next;if(!_)return a0=1,t.vars[e]="+=0",j0(t,f),a0=0,h?Qc(e+" not eligible for reset"):1;d.push(_)}for(x=d.length;x--;)v=d[x],_=v._pt||v,_.s=(a||a===0)&&!l?a:_.s+(a||0)+c*_.c,_.c=i-_.s,v.e&&(v.e=zn(i)+Ei(v.e)),v.b&&(v.b=_.s+Ei(v.b))},BL=function(t,e){var i=t[0]?No(t[0]).harness:0,a=i&&i.aliases,l,c,f,h;if(!a)return e;l=lu({},e);for(c in a)if(c in l)for(h=a[c].split(","),f=h.length;f--;)l[h[f]]=l[c];return l},IL=function(t,e,i,a){var l=e.ease||a||"power1.inOut",c,f;if(Ai(e))f=i[t]||(i[t]=[]),e.forEach(function(h,d){return f.push({t:d/(e.length-1)*100,v:h,e:l})});else for(c in e)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:e[c],e:l})},Nc=function(t,e,i,a,l){return Ln(t)?t.call(e,i,a,l):oi(t)&&~t.indexOf("random(")?Jc(t):t},sT=W0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",oT={};$i(sT+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return oT[s]=1});var Zn=(function(s){AE(t,s);function t(i,a,l,c){var f;typeof a=="number"&&(l.duration=a,a=l,l=null),f=s.call(this,c?a:Uc(a))||this;var h=f.vars,d=h.duration,_=h.delay,v=h.immediateRender,g=h.stagger,x=h.overwrite,y=h.keyframes,E=h.defaults,S=h.scrollTrigger,M=h.yoyoEase,A=a.parent||Cn,D=(Ai(i)||RE(i)?rs(i[0]):"length"in a)?[i]:Yr(i),C,P,O,L,T,w,k,I;if(f._targets=D.length?Y0(D):Qc("GSAP target "+i+" not found. https://gsap.com",!Ar.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,y||g||jh(d)||jh(_)){if(a=f.vars,C=f.timeline=new Bi({data:"nested",defaults:E||{},targets:A&&A.data==="nested"?A.vars.targets:D}),C.kill(),C.parent=C._dp=ja(f),C._start=0,g||jh(d)||jh(_)){if(L=D.length,k=g&&WE(g),Ta(g))for(T in g)~sT.indexOf(T)&&(I||(I={}),I[T]=g[T]);for(P=0;P<L;P++)O=Ud(a,oT),O.stagger=0,M&&(O.yoyoEase=M),I&&lu(O,I),w=D[P],O.duration=+Nc(d,ja(f),P,w,D),O.delay=(+Nc(_,ja(f),P,w,D)||0)-f._delay,!g&&L===1&&O.delay&&(f._delay=_=O.delay,f._start+=_,O.delay=0),C.to(w,O,k?k(P,w,D):0),C._ease=We.none;C.duration()?d=_=0:f.timeline=0}else if(y){Uc(Rr(C.vars.defaults,{ease:"none"})),C._ease=Po(y.ease||a.ease||"none");var G=0,J,$,Q;if(Ai(y))y.forEach(function(z){return C.to(D,z,">")}),C.duration();else{O={};for(T in y)T==="ease"||T==="easeEach"||IL(T,y[T],O,y.easeEach);for(T in O)for(J=O[T].sort(function(z,F){return z.t-F.t}),G=0,P=0;P<J.length;P++)$=J[P],Q={ease:$.e,duration:($.t-(P?J[P-1].t:0))/100*d},Q[T]=$.v,C.to(D,Q,G),G+=Q.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||f.duration(d=C.duration())}else f.timeline=0;return x===!0&&!I0&&(Bs=ja(f),Cn.killTweensOf(D),Bs=0),ma(A,ja(f),l),a.reversed&&f.reverse(),a.paused&&f.paused(!0),(v||!d&&!y&&f._start===An(A._time)&&Ji(v)&&_L(ja(f))&&A.data!=="nested")&&(f._tTime=-pn,f.render(Math.max(0,-_)||0)),S&&VE(ja(f),S),f}var e=t.prototype;return e.render=function(a,l,c){var f=this._time,h=this._tDur,d=this._dur,_=a<0,v=a>h-pn&&!_?h:a<pn?0:a,g,x,y,E,S,M,A,D,C;if(!d)vL(this,a,l,c);else if(v!==this._tTime||!a||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=v,D=this.timeline,this._repeat){if(E=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+a,l,c);if(g=An(v%E),v===h?(y=this._repeat,g=d):(S=An(v/E),y=~~S,y&&y===S?(g=d,y--):g>d&&(g=d)),M=this._yoyo&&y&1,M&&(C=this._yEase,g=d-g),S=uu(this._tTime,E),g===f&&!c&&this._initted&&y===S)return this._tTime=v,this;y!==S&&(D&&this._yEase&&nT(D,M),this.vars.repeatRefresh&&!M&&!this._lock&&g!==E&&this._initted&&(this._lock=c=1,this.render(An(E*y),!0).invalidate()._lock=0))}if(!this._initted){if(GE(this,_?a:g,c,l,v))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&y!==S))return this;if(d!==this._dur)return this.render(a,l,c)}if(this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(C||this._ease)(g/d),this._from&&(this.ratio=A=1-A),!f&&v&&!l&&!S&&(yr(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(A,x.d),x=x._next;D&&D.render(a<0?a:D._dur*D._ease(g/this._dur),l,c)||this._startAt&&(this._zTime=a),this._onUpdate&&!l&&(_&&t0(this,a,l,c),yr(this,"onUpdate")),this._repeat&&y!==S&&this.vars.onRepeat&&!l&&this.parent&&yr(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(_&&!this._onUpdate&&t0(this,a,!0,!0),(a||!d)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&qs(this,1),!l&&!(_&&!f)&&(v||f||M)&&(yr(this,v===h?"onComplete":"onReverseComplete",!0),this._prom&&!(v<h&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),s.prototype.invalidate.call(this,a)},e.resetTo=function(a,l,c,f,h){$c||xr.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||j0(this,d),_=this._ease(d/this._dur),FL(this,a,l,c,f,_,d,h)?this.resetTo(a,l,c,f,1):(Zd(this,0),this.parent||IE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(a,l){if(l===void 0&&(l="all"),!a&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?yc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mi),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(a,l,Bs&&Bs.vars.overwrite!==!0)._first||yc(this),this.parent&&c!==this.timeline.totalDuration()&&cu(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,h=a?Yr(a):f,d=this._ptLookup,_=this._pt,v,g,x,y,E,S,M;if((!l||l==="all")&&pL(f,h))return l==="all"&&(this._pt=0),yc(this);for(v=this._op=this._op||[],l!=="all"&&(oi(l)&&(E={},$i(l,function(A){return E[A]=1}),l=E),l=BL(f,l)),M=f.length;M--;)if(~h.indexOf(f[M])){g=d[M],l==="all"?(v[M]=l,y=g,x={}):(x=v[M]=v[M]||{},y=l);for(E in y)S=g&&g[E],S&&((!("kill"in S.d)||S.d.kill(E)===!0)&&Yd(this,S,"_pt"),delete g[E]),x!=="all"&&(x[E]=1)}return this._initted&&!this._pt&&_&&yc(this),this},t.to=function(a,l){return new t(a,l,arguments[2])},t.from=function(a,l){return Lc(1,arguments)},t.delayedCall=function(a,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(a,l,c){return Lc(2,arguments)},t.set=function(a,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(a,l)},t.killTweensOf=function(a,l,c){return Cn.killTweensOf(a,l,c)},t})(tf);Rr(Zn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$i("staggerTo,staggerFrom,staggerFromTo",function(s){Zn[s]=function(){var t=new Bi,e=n0.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Q0=function(t,e,i){return t[e]=i},lT=function(t,e,i){return t[e](i)},HL=function(t,e,i,a){return t[e](a.fp,i)},VL=function(t,e,i){return t.setAttribute(e,i)},K0=function(t,e){return Ln(t[e])?lT:H0(t[e])&&t.setAttribute?VL:Q0},uT=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},GL=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},cT=function(t,e){var i=e._pt,a="";if(!t&&e.b)a=e.b;else if(t===1&&e.e)a=e.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+a,i=i._next;a+=e.c}e.set(e.t,e.p,a,e)},J0=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},kL=function(t,e,i,a){for(var l=this._pt,c;l;)c=l._next,l.p===a&&l.modifier(t,e,i),l=c},XL=function(t){for(var e=this._pt,i,a;e;)a=e._next,e.p===t&&!e.op||e.op===t?Yd(this,e,"_pt"):e.dep||(i=1),e=a;return!i},WL=function(t,e,i,a){a.mSet(t,e,a.m.call(a.tween,i,a.mt),a)},fT=function(t){for(var e=t._pt,i,a,l,c;e;){for(i=e._next,a=l;a&&a.pr>e.pr;)a=a._next;(e._prev=a?a._prev:c)?e._prev._next=e:l=e,(e._next=a)?a._prev=e:c=e,e=i}t._pt=l},tr=(function(){function s(e,i,a,l,c,f,h,d,_){this.t=i,this.s=l,this.c=c,this.p=a,this.r=f||uT,this.d=h||this,this.set=d||Q0,this.pr=_||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,a,l){this.mSet=this.mSet||this.set,this.set=WL,this.m=i,this.mt=l,this.tween=a},s})();$i(W0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return X0[s]=1});Cr.TweenMax=Cr.TweenLite=Zn;Cr.TimelineLite=Cr.TimelineMax=Bi;Cn=new Bi({sortChildren:!1,defaults:ou,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ar.stringFilter=tT;var zo=[],_d={},YL=[],l1=0,qL=0,Y_=function(t){return(_d[t]||YL).map(function(e){return e()})},s0=function(){var t=Date.now(),e=[];t-l1>2&&(Y_("matchMediaInit"),zo.forEach(function(i){var a=i.queries,l=i.conditions,c,f,h,d;for(f in a)c=ha.matchMedia(a[f]).matches,c&&(h=1),c!==l[f]&&(l[f]=c,d=1);d&&(i.revert(),h&&e.push(i))}),Y_("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),l1=t,Y_("matchMedia"))},hT=(function(){function s(e,i){this.selector=i&&i0(i),this.data=[],this._r=[],this.isReverted=!1,this.id=qL++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,a,l){Ln(i)&&(l=a,a=i,i=Ln);var c=this,f=function(){var d=Tn,_=c.selector,v;return d&&d!==c&&d.data.push(c),l&&(c.selector=i0(l)),Tn=c,v=a.apply(c,arguments),Ln(v)&&c._r.push(v),Tn=d,c.selector=_,c.isReverted=!1,v};return c.last=f,i===Ln?f(c,function(h){return c.add(null,h)}):i?c[i]=f:f},t.ignore=function(i){var a=Tn;Tn=null,i(this),Tn=a},t.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof s?i.push.apply(i,a.getTweens()):a instanceof Zn&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,a){var l=this;if(i?(function(){for(var f=l.getTweens(),h=l.data.length,d;h--;)d=l.data[h],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,v){return v.g-_.g||-1/0}).forEach(function(_){return _.t.revert(i)}),h=l.data.length;h--;)d=l.data[h],d instanceof Bi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Zn)&&d.revert&&d.revert(i);l._r.forEach(function(_){return _(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),a)for(var c=zo.length;c--;)zo[c].id===this.id&&zo.splice(c,1)},t.revert=function(i){this.kill(i||{})},s})(),ZL=(function(){function s(e){this.contexts=[],this.scope=e,Tn&&Tn.data.push(this)}var t=s.prototype;return t.add=function(i,a,l){Ta(i)||(i={matches:i});var c=new hT(0,l||this.scope),f=c.conditions={},h,d,_;Tn&&!c.selector&&(c.selector=Tn.selector),this.contexts.push(c),a=c.add("onMatch",a),c.queries=i;for(d in i)d==="all"?_=1:(h=ha.matchMedia(i[d]),h&&(zo.indexOf(c)<0&&zo.push(c),(f[d]=h.matches)&&(_=1),h.addListener?h.addListener(s0):h.addEventListener("change",s0)));return _&&a(c,function(v){return c.add(null,v)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},s})(),Nd={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(a){return KE(a)})},timeline:function(t){return new Bi(t)},getTweensOf:function(t,e){return Cn.getTweensOf(t,e)},getProperty:function(t,e,i,a){oi(t)&&(t=Yr(t)[0]);var l=No(t||{}).get,c=i?BE:FE;return i==="native"&&(i=""),t&&(e?c((gr[e]&&gr[e].get||l)(t,e,i,a)):function(f,h,d){return c((gr[f]&&gr[f].get||l)(t,f,h,d))})},quickSetter:function(t,e,i){if(t=Yr(t),t.length>1){var a=t.map(function(_){return nr.quickSetter(_,e,i)}),l=a.length;return function(_){for(var v=l;v--;)a[v](_)}}t=t[0]||{};var c=gr[e],f=No(t),h=f.harness&&(f.harness.aliases||{})[e]||e,d=c?function(_){var v=new c;Xl._pt=0,v.init(t,i?_+i:_,Xl,0,[t]),v.render(1,v),Xl._pt&&J0(1,Xl)}:f.set(t,h);return c?d:function(_){return d(t,h,i?_+i:_,f,1)}},quickTo:function(t,e,i){var a,l=nr.to(t,Rr((a={},a[e]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),c=function(h,d,_){return l.resetTo(e,h,d,_)};return c.tween=l,c},isTweening:function(t){return Cn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Po(t.ease,ou.ease)),i1(ou,t||{})},config:function(t){return i1(Ar,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,a=t.plugins,l=t.defaults,c=t.extendTimeline;(a||"").split(",").forEach(function(f){return f&&!gr[f]&&!Cr[f]&&Qc(e+" effect requires "+f+" plugin.")}),G_[e]=function(f,h,d){return i(Yr(f),Rr(h||{},l),d)},c&&(Bi.prototype[e]=function(f,h,d){return this.add(G_[e](f,Ta(h)?h:(d=h)&&{},this),d)})},registerEase:function(t,e){We[t]=Po(e)},parseEase:function(t,e){return arguments.length?Po(t,e):We},getById:function(t){return Cn.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Bi(t),a,l;for(i.smoothChildTiming=Ji(t.smoothChildTiming),Cn.remove(i),i._dp=0,i._time=i._tTime=Cn._time,a=Cn._first;a;)l=a._next,(e||!(!a._dur&&a instanceof Zn&&a.vars.onComplete===a._targets[0]))&&ma(i,a,a._start-a._delay),a=l;return ma(Cn,i,0),i},context:function(t,e){return t?new hT(t,e):Tn},matchMedia:function(t){return new ZL(t)},matchMediaRefresh:function(){return zo.forEach(function(t){var e=t.conditions,i,a;for(a in e)e[a]&&(e[a]=!1,i=1);i&&t.revert()})||s0()},addEventListener:function(t,e){var i=_d[t]||(_d[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=_d[t],a=i&&i.indexOf(e);a>=0&&i.splice(a,1)},utils:{wrap:AL,wrapYoyo:CL,distribute:WE,random:qE,snap:YE,normalize:bL,getUnit:Ei,clamp:yL,splitColor:JE,toArray:Yr,selector:i0,mapRange:jE,pipe:EL,unitize:TL,interpolate:RL,shuffle:XE},install:LE,effects:G_,ticker:xr,updateRoot:Bi.updateRoot,plugins:gr,globalTimeline:Cn,core:{PropTween:tr,globals:NE,Tween:Zn,Timeline:Bi,Animation:tf,getCache:No,_removeLinkedListItem:Yd,reverting:function(){return mi},context:function(t){return t&&Tn&&(Tn.data.push(t),t._ctx=Tn),Tn},suppressOverwrites:function(t){return I0=t}}};$i("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Nd[s]=Zn[s]});xr.add(Bi.updateRoot);Xl=Nd.to({},{duration:0});var jL=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},QL=function(t,e){var i=t._targets,a,l,c;for(a in e)for(l=i.length;l--;)c=t._ptLookup[l][a],c&&(c=c.d)&&(c._pt&&(c=jL(c,a)),c&&c.modifier&&c.modifier(e[a],t,i[l],a))},q_=function(t,e){return{name:t,headless:1,rawVars:1,init:function(a,l,c){c._onInit=function(f){var h,d;if(oi(l)&&(h={},$i(l,function(_){return h[_]=1}),l=h),e){h={};for(d in l)h[d]=e(l[d]);l=h}QL(f,l)}}}},nr=Nd.registerPlugin({name:"attr",init:function(t,e,i,a,l){var c,f,h;this.tween=i;for(c in e)h=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(h||0)+"",e[c],a,l,0,0,c),f.op=c,f.b=h,this._props.push(c)},render:function(t,e){for(var i=e._pt;i;)mi?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},q_("roundProps",r0),q_("modifiers"),q_("snap",YE))||Nd;Zn.version=Bi.version=nr.version="3.14.2";UE=1;V0()&&fu();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;var u1,Is,Ql,$0,Uo,c1,tv,KL=function(){return typeof window<"u"},as={},To=180/Math.PI,Kl=Math.PI/180,Bl=Math.atan2,f1=1e8,ev=/([A-Z])/g,JL=/(left|right|width|margin|padding|x)/i,$L=/[\s,\(]\S/,va={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},o0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},tN=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},eN=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},nN=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},iN=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},dT=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},pT=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},rN=function(t,e,i){return t.style[e]=i},aN=function(t,e,i){return t.style.setProperty(e,i)},sN=function(t,e,i){return t._gsap[e]=i},oN=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},lN=function(t,e,i,a,l){var c=t._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},uN=function(t,e,i,a,l){var c=t._gsap;c[e]=i,c.renderTransform(l,c)},wn="transform",er=wn+"Origin",cN=function s(t,e){var i=this,a=this.target,l=a.style,c=a._gsap;if(t in as&&l){if(this.tfm=this.tfm||{},t!=="transform")t=va[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=Qa(a,f)}):this.tfm[t]=c.x?c[t]:Qa(a,t),t===er&&(this.tfm.zOrigin=c.zOrigin);else return va.transform.split(",").forEach(function(f){return s.call(i,f,e)});if(this.props.indexOf(wn)>=0)return;c.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(er,e,"")),t=wn}(l||e)&&this.props.push(t,e,l[t])},mT=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},fN=function(){var t=this.props,e=this.target,i=e.style,a=e._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(ev,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)a[c]=this.tfm[c];a.svg&&(a.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=tv(),(!l||!l.isStart)&&!i[wn]&&(mT(i),a.zOrigin&&i[er]&&(i[er]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},_T=function(t,e){var i={target:t,props:[],revert:fN,save:cN};return t._gsap||nr.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(a){return i.save(a)}),i},gT,l0=function(t,e){var i=Is.createElementNS?Is.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Is.createElement(t);return i&&i.style?i:Is.createElement(t)},Mr=function s(t,e,i){var a=getComputedStyle(t);return a[e]||a.getPropertyValue(e.replace(ev,"-$1").toLowerCase())||a.getPropertyValue(e)||!i&&s(t,hu(e)||e,1)||""},h1="O,Moz,ms,Ms,Webkit".split(","),hu=function(t,e,i){var a=e||Uo,l=a.style,c=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(h1[c]+t in l););return c<0?null:(c===3?"ms":c>=0?h1[c]:"")+t},u0=function(){KL()&&window.document&&(u1=window,Is=u1.document,Ql=Is.documentElement,Uo=l0("div")||{style:{}},l0("div"),wn=hu(wn),er=wn+"Origin",Uo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gT=!!hu("perspective"),tv=nr.core.reverting,$0=1)},d1=function(t){var e=t.ownerSVGElement,i=l0("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=t.cloneNode(!0),l;a.style.display="block",i.appendChild(a),Ql.appendChild(i);try{l=a.getBBox()}catch{}return i.removeChild(a),Ql.removeChild(i),l},p1=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},vT=function(t){var e,i;try{e=t.getBBox()}catch{e=d1(t),i=1}return e&&(e.width||e.height)||i||(e=d1(t)),e&&!e.width&&!e.x&&!e.y?{x:+p1(t,["x","cx","x1"])||0,y:+p1(t,["y","cy","y1"])||0,width:0,height:0}:e},xT=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vT(t))},Zs=function(t,e){if(e){var i=t.style,a;e in as&&e!==er&&(e=wn),i.removeProperty?(a=e.substr(0,2),(a==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(a==="--"?e:e.replace(ev,"-$1").toLowerCase())):i.removeAttribute(e)}},Hs=function(t,e,i,a,l,c){var f=new tr(t._pt,e,i,0,1,c?pT:dT);return t._pt=f,f.b=a,f.e=l,t._props.push(i),f},m1={deg:1,rad:1,turn:1},hN={grid:1,flex:1},js=function s(t,e,i,a){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=Uo.style,h=JL.test(e),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(h?"Width":"Height"),v=100,g=a==="px",x=a==="%",y,E,S,M;if(a===c||!l||m1[a]||m1[c])return l;if(c!=="px"&&!g&&(l=s(t,e,i,"px")),M=t.getCTM&&xT(t),(x||c==="%")&&(as[e]||~e.indexOf("adius")))return y=M?t.getBBox()[h?"width":"height"]:t[_],zn(x?l/y*v:l/100*y);if(f[h?"width":"height"]=v+(g?c:a),E=a!=="rem"&&~e.indexOf("adius")||a==="em"&&t.appendChild&&!d?t:t.parentNode,M&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===Is||!E.appendChild)&&(E=Is.body),S=E._gsap,S&&x&&S.width&&h&&S.time===xr.time&&!S.uncache)return zn(l/S.width*v);if(x&&(e==="height"||e==="width")){var A=t.style[e];t.style[e]=v+a,y=t[_],A?t.style[e]=A:Zs(t,e)}else(x||c==="%")&&!hN[Mr(E,"display")]&&(f.position=Mr(t,"position")),E===t&&(f.position="static"),E.appendChild(Uo),y=Uo[_],E.removeChild(Uo),f.position="absolute";return h&&x&&(S=No(E),S.time=xr.time,S.width=E[_]),zn(g?y*l/v:y&&l?v/y*l:0)},Qa=function(t,e,i,a){var l;return $0||u0(),e in va&&e!=="transform"&&(e=va[e],~e.indexOf(",")&&(e=e.split(",")[0])),as[e]&&e!=="transform"?(l=nf(t,a),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:Pd(Mr(t,er))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||a||~(l+"").indexOf("calc("))&&(l=Od[e]&&Od[e](t,e,i)||Mr(t,e)||PE(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?js(t,e,l,i)+i:l},dN=function(t,e,i,a){if(!i||i==="none"){var l=hu(e,t,1),c=l&&Mr(t,l,1);c&&c!==i?(e=l,i=c):e==="borderColor"&&(i=Mr(t,"borderTopColor"))}var f=new tr(this._pt,t.style,e,0,1,cT),h=0,d=0,_,v,g,x,y,E,S,M,A,D,C,P;if(f.b=i,f.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=Mr(t,a.substring(4,a.indexOf(")")))),a==="auto"&&(E=t.style[e],t.style[e]=a,a=Mr(t,e)||a,E?t.style[e]=E:Zs(t,e)),_=[i,a],tT(_),i=_[0],a=_[1],g=i.match(kl)||[],P=a.match(kl)||[],P.length){for(;v=kl.exec(a);)S=v[0],A=a.substring(h,v.index),y?y=(y+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(y=1),S!==(E=g[d++]||"")&&(x=parseFloat(E)||0,C=E.substr((x+"").length),S.charAt(1)==="="&&(S=jl(x,S)+C),M=parseFloat(S),D=S.substr((M+"").length),h=kl.lastIndex-D.length,D||(D=D||Ar.units[e]||C,h===a.length&&(a+=D,f.e+=D)),C!==D&&(x=js(t,e,E,D)||0),f._pt={_next:f._pt,p:A||d===1?A:",",s:x,c:M-x,m:y&&y<4||e==="zIndex"?Math.round:0});f.c=h<a.length?a.substring(h,a.length):""}else f.r=e==="display"&&a==="none"?pT:dT;return DE.test(a)&&(f.e=0),this._pt=f,f},_1={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pN=function(t){var e=t.split(" "),i=e[0],a=e[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(t=i,i=a,a=t),e[0]=_1[i]||i,e[1]=_1[a]||a,e.join(" ")},mN=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,a=i.style,l=e.u,c=i._gsap,f,h,d;if(l==="all"||l===!0)a.cssText="",h=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],as[f]&&(h=1,f=f==="transformOrigin"?er:wn),Zs(i,f);h&&(Zs(i,wn),c&&(c.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",nf(i,1),c.uncache=1,mT(a)))}},Od={clearProps:function(t,e,i,a,l){if(l.data!=="isFromStart"){var c=t._pt=new tr(t._pt,e,i,0,0,mN);return c.u=a,c.pr=-10,c.tween=l,t._props.push(i),1}}},ef=[1,0,0,1,0,0],ST={},yT=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},g1=function(t){var e=Mr(t,wn);return yT(e)?ef:e.substr(7).match(wE).map(zn)},nv=function(t,e){var i=t._gsap||No(t),a=t.style,l=g1(t),c,f,h,d;return i.svg&&t.getAttribute("transform")?(h=t.transform.baseVal.consolidate().matrix,l=[h.a,h.b,h.c,h.d,h.e,h.f],l.join(",")==="1,0,0,1,0,0"?ef:l):(l===ef&&!t.offsetParent&&t!==Ql&&!i.svg&&(h=a.display,a.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Ql.appendChild(t)),l=g1(t),h?a.display=h:Zs(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Ql.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},c0=function(t,e,i,a,l,c){var f=t._gsap,h=l||nv(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,v=f.xOffset||0,g=f.yOffset||0,x=h[0],y=h[1],E=h[2],S=h[3],M=h[4],A=h[5],D=e.split(" "),C=parseFloat(D[0])||0,P=parseFloat(D[1])||0,O,L,T,w;i?h!==ef&&(L=x*S-y*E)&&(T=C*(S/L)+P*(-E/L)+(E*A-S*M)/L,w=C*(-y/L)+P*(x/L)-(x*A-y*M)/L,C=T,P=w):(O=vT(t),C=O.x+(~D[0].indexOf("%")?C/100*O.width:C),P=O.y+(~(D[1]||D[0]).indexOf("%")?P/100*O.height:P)),a||a!==!1&&f.smooth?(M=C-d,A=P-_,f.xOffset=v+(M*x+A*E)-M,f.yOffset=g+(M*y+A*S)-A):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=P,f.smooth=!!a,f.origin=e,f.originIsAbsolute=!!i,t.style[er]="0px 0px",c&&(Hs(c,f,"xOrigin",d,C),Hs(c,f,"yOrigin",_,P),Hs(c,f,"xOffset",v,f.xOffset),Hs(c,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+P)},nf=function(t,e){var i=t._gsap||new rT(t);if("x"in i&&!e&&!i.uncache)return i;var a=t.style,l=i.scaleX<0,c="px",f="deg",h=getComputedStyle(t),d=Mr(t,er)||"0",_,v,g,x,y,E,S,M,A,D,C,P,O,L,T,w,k,I,G,J,$,Q,z,F,tt,ct,V,B,K,vt,Tt,Dt;return _=v=g=E=S=M=A=D=C=0,x=y=1,i.svg=!!(t.getCTM&&xT(t)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(a[wn]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[wn]!=="none"?h[wn]:"")),a.scale=a.rotate=a.translate="none"),L=nv(t,i.svg),i.svg&&(i.uncache?(tt=t.getBBox(),d=i.xOrigin-tt.x+"px "+(i.yOrigin-tt.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),c0(t,F||d,!!F||i.originIsAbsolute,i.smooth!==!1,L)),P=i.xOrigin||0,O=i.yOrigin||0,L!==ef&&(I=L[0],G=L[1],J=L[2],$=L[3],_=Q=L[4],v=z=L[5],L.length===6?(x=Math.sqrt(I*I+G*G),y=Math.sqrt($*$+J*J),E=I||G?Bl(G,I)*To:0,A=J||$?Bl(J,$)*To+E:0,A&&(y*=Math.abs(Math.cos(A*Kl))),i.svg&&(_-=P-(P*I+O*J),v-=O-(P*G+O*$))):(Dt=L[6],vt=L[7],V=L[8],B=L[9],K=L[10],Tt=L[11],_=L[12],v=L[13],g=L[14],T=Bl(Dt,K),S=T*To,T&&(w=Math.cos(-T),k=Math.sin(-T),F=Q*w+V*k,tt=z*w+B*k,ct=Dt*w+K*k,V=Q*-k+V*w,B=z*-k+B*w,K=Dt*-k+K*w,Tt=vt*-k+Tt*w,Q=F,z=tt,Dt=ct),T=Bl(-J,K),M=T*To,T&&(w=Math.cos(-T),k=Math.sin(-T),F=I*w-V*k,tt=G*w-B*k,ct=J*w-K*k,Tt=$*k+Tt*w,I=F,G=tt,J=ct),T=Bl(G,I),E=T*To,T&&(w=Math.cos(T),k=Math.sin(T),F=I*w+G*k,tt=Q*w+z*k,G=G*w-I*k,z=z*w-Q*k,I=F,Q=tt),S&&Math.abs(S)+Math.abs(E)>359.9&&(S=E=0,M=180-M),x=zn(Math.sqrt(I*I+G*G+J*J)),y=zn(Math.sqrt(z*z+Dt*Dt)),T=Bl(Q,z),A=Math.abs(T)>2e-4?T*To:0,C=Tt?1/(Tt<0?-Tt:Tt):0),i.svg&&(F=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!yT(Mr(t,wn)),F&&t.setAttribute("transform",F))),Math.abs(A)>90&&Math.abs(A)<270&&(l?(x*=-1,A+=E<=0?180:-180,E+=E<=0?180:-180):(y*=-1,A+=A<=0?180:-180)),e=e||i.uncache,i.x=_-((i.xPercent=_&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+c,i.y=v-((i.yPercent=v&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+c,i.z=g+c,i.scaleX=zn(x),i.scaleY=zn(y),i.rotation=zn(E)+f,i.rotationX=zn(S)+f,i.rotationY=zn(M)+f,i.skewX=A+f,i.skewY=D+f,i.transformPerspective=C+c,(i.zOrigin=parseFloat(d.split(" ")[2])||!e&&i.zOrigin||0)&&(a[er]=Pd(d)),i.xOffset=i.yOffset=0,i.force3D=Ar.force3D,i.renderTransform=i.svg?gN:gT?MT:_N,i.uncache=0,i},Pd=function(t){return(t=t.split(" "))[0]+" "+t[1]},Z_=function(t,e,i){var a=Ei(e);return zn(parseFloat(e)+parseFloat(js(t,"x",i+"px",a)))+a},_N=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,MT(t,e)},yo="0deg",mc="0px",Mo=") ",MT=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,h=i.z,d=i.rotation,_=i.rotationY,v=i.rotationX,g=i.skewX,x=i.skewY,y=i.scaleX,E=i.scaleY,S=i.transformPerspective,M=i.force3D,A=i.target,D=i.zOrigin,C="",P=M==="auto"&&t&&t!==1||M===!0;if(D&&(v!==yo||_!==yo)){var O=parseFloat(_)*Kl,L=Math.sin(O),T=Math.cos(O),w;O=parseFloat(v)*Kl,w=Math.cos(O),c=Z_(A,c,L*w*-D),f=Z_(A,f,-Math.sin(O)*-D),h=Z_(A,h,T*w*-D+D)}S!==mc&&(C+="perspective("+S+Mo),(a||l)&&(C+="translate("+a+"%, "+l+"%) "),(P||c!==mc||f!==mc||h!==mc)&&(C+=h!==mc||P?"translate3d("+c+", "+f+", "+h+") ":"translate("+c+", "+f+Mo),d!==yo&&(C+="rotate("+d+Mo),_!==yo&&(C+="rotateY("+_+Mo),v!==yo&&(C+="rotateX("+v+Mo),(g!==yo||x!==yo)&&(C+="skew("+g+", "+x+Mo),(y!==1||E!==1)&&(C+="scale("+y+", "+E+Mo),A.style[wn]=C||"translate(0, 0)"},gN=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,h=i.rotation,d=i.skewX,_=i.skewY,v=i.scaleX,g=i.scaleY,x=i.target,y=i.xOrigin,E=i.yOrigin,S=i.xOffset,M=i.yOffset,A=i.forceCSS,D=parseFloat(c),C=parseFloat(f),P,O,L,T,w;h=parseFloat(h),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,h+=_),h||d?(h*=Kl,d*=Kl,P=Math.cos(h)*v,O=Math.sin(h)*v,L=Math.sin(h-d)*-g,T=Math.cos(h-d)*g,d&&(_*=Kl,w=Math.tan(d-_),w=Math.sqrt(1+w*w),L*=w,T*=w,_&&(w=Math.tan(_),w=Math.sqrt(1+w*w),P*=w,O*=w)),P=zn(P),O=zn(O),L=zn(L),T=zn(T)):(P=v,T=g,O=L=0),(D&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(D=js(x,"x",c,"px"),C=js(x,"y",f,"px")),(y||E||S||M)&&(D=zn(D+y-(y*P+E*L)+S),C=zn(C+E-(y*O+E*T)+M)),(a||l)&&(w=x.getBBox(),D=zn(D+a/100*w.width),C=zn(C+l/100*w.height)),w="matrix("+P+","+O+","+L+","+T+","+D+","+C+")",x.setAttribute("transform",w),A&&(x.style[wn]=w)},vN=function(t,e,i,a,l){var c=360,f=oi(l),h=parseFloat(l)*(f&&~l.indexOf("rad")?To:1),d=h-a,_=a+d+"deg",v,g;return f&&(v=l.split("_")[1],v==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),v==="cw"&&d<0?d=(d+c*f1)%c-~~(d/c)*c:v==="ccw"&&d>0&&(d=(d-c*f1)%c-~~(d/c)*c)),t._pt=g=new tr(t._pt,e,i,a,d,tN),g.e=_,g.u="deg",t._props.push(i),g},v1=function(t,e){for(var i in e)t[i]=e[i];return t},xN=function(t,e,i){var a=v1({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,h,d,_,v,g,x,y;a.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),c[wn]=e,f=nf(i,1),Zs(i,wn),i.setAttribute("transform",d)):(d=getComputedStyle(i)[wn],c[wn]=e,f=nf(i,1),c[wn]=d);for(h in as)d=a[h],_=f[h],d!==_&&l.indexOf(h)<0&&(x=Ei(d),y=Ei(_),v=x!==y?js(i,h,d,y):parseFloat(d),g=parseFloat(_),t._pt=new tr(t._pt,f,h,v,g-v,o0),t._pt.u=y||0,t._props.push(h));v1(f,a)};$i("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",a="Bottom",l="Left",c=(t<3?[e,i,a,l]:[e+l,e+i,a+i,a+l]).map(function(f){return t<2?s+f:"border"+f+s});Od[t>1?"border"+s:s]=function(f,h,d,_,v){var g,x;if(arguments.length<4)return g=c.map(function(y){return Qa(f,y,d)}),x=g.join(" "),x.split(g[0]).length===5?g[0]:x;g=(_+"").split(" "),x={},c.forEach(function(y,E){return x[y]=g[E]=g[E]||g[(E-1)/2|0]}),f.init(h,x,v)}});var ET={name:"css",register:u0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,a,l){var c=this._props,f=t.style,h=i.vars.startAt,d,_,v,g,x,y,E,S,M,A,D,C,P,O,L,T,w;$0||u0(),this.styles=this.styles||_T(t),T=this.styles.props,this.tween=i;for(E in e)if(E!=="autoRound"&&(_=e[E],!(gr[E]&&aT(E,e,i,a,t,l)))){if(x=typeof _,y=Od[E],x==="function"&&(_=_.call(i,a,t,l),x=typeof _),x==="string"&&~_.indexOf("random(")&&(_=Jc(_)),y)y(this,t,E,_,i)&&(L=1);else if(E.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",Xs.lastIndex=0,Xs.test(d)||(S=Ei(d),M=Ei(_),M?S!==M&&(d=js(t,E,d,M)+M):S&&(_+=S)),this.add(f,"setProperty",d,_,a,l,0,0,E),c.push(E),T.push(E,0,f[E]);else if(x!=="undefined"){if(h&&E in h?(d=typeof h[E]=="function"?h[E].call(i,a,t,l):h[E],oi(d)&&~d.indexOf("random(")&&(d=Jc(d)),Ei(d+"")||d==="auto"||(d+=Ar.units[E]||Ei(Qa(t,E))||""),(d+"").charAt(1)==="="&&(d=Qa(t,E))):d=Qa(t,E),g=parseFloat(d),A=x==="string"&&_.charAt(1)==="="&&_.substr(0,2),A&&(_=_.substr(2)),v=parseFloat(_),E in va&&(E==="autoAlpha"&&(g===1&&Qa(t,"visibility")==="hidden"&&v&&(g=0),T.push("visibility",0,f.visibility),Hs(this,f,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),E!=="scale"&&E!=="transform"&&(E=va[E],~E.indexOf(",")&&(E=E.split(",")[0]))),D=E in as,D){if(this.styles.save(E),w=_,x==="string"&&_.substring(0,6)==="var(--"){if(_=Mr(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var k=t.style.perspective;t.style.perspective=_,_=Mr(t,"perspective"),k?t.style.perspective=k:Zs(t,"perspective")}v=parseFloat(_)}if(C||(P=t._gsap,P.renderTransform&&!e.parseTransform||nf(t,e.parseTransform),O=e.smoothOrigin!==!1&&P.smooth,C=this._pt=new tr(this._pt,f,wn,0,1,P.renderTransform,P,0,-1),C.dep=1),E==="scale")this._pt=new tr(this._pt,P,"scaleY",P.scaleY,(A?jl(P.scaleY,A+v):v)-P.scaleY||0,o0),this._pt.u=0,c.push("scaleY",E),E+="X";else if(E==="transformOrigin"){T.push(er,0,f[er]),_=pN(_),P.svg?c0(t,_,0,O,0,this):(M=parseFloat(_.split(" ")[2])||0,M!==P.zOrigin&&Hs(this,P,"zOrigin",P.zOrigin,M),Hs(this,f,E,Pd(d),Pd(_)));continue}else if(E==="svgOrigin"){c0(t,_,1,O,0,this);continue}else if(E in ST){vN(this,P,E,g,A?jl(g,A+_):_);continue}else if(E==="smoothOrigin"){Hs(this,P,"smooth",P.smooth,_);continue}else if(E==="force3D"){P[E]=_;continue}else if(E==="transform"){xN(this,_,t);continue}}else E in f||(E=hu(E)||E);if(D||(v||v===0)&&(g||g===0)&&!$L.test(_)&&E in f)S=(d+"").substr((g+"").length),v||(v=0),M=Ei(_)||(E in Ar.units?Ar.units[E]:S),S!==M&&(g=js(t,E,d,M)),this._pt=new tr(this._pt,D?P:f,E,g,(A?jl(g,A+v):v)-g,!D&&(M==="px"||E==="zIndex")&&e.autoRound!==!1?iN:o0),this._pt.u=M||0,D&&w!==_?(this._pt.b=d,this._pt.e=w,this._pt.r=nN):S!==M&&M!=="%"&&(this._pt.b=d,this._pt.r=eN);else if(E in f)dN.call(this,t,E,d,A?A+_:_);else if(E in t)this.add(t,E,d||t[E],A?A+_:_,a,l);else if(E!=="parseTransform"){k0(E,_);continue}D||(E in f?T.push(E,0,f[E]):typeof t[E]=="function"?T.push(E,2,t[E]()):T.push(E,1,d||t[E])),c.push(E)}}L&&fT(this)},render:function(t,e){if(e.tween._time||!tv())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Qa,aliases:va,getSetter:function(t,e,i){var a=va[e];return a&&a.indexOf(",")<0&&(e=a),e in as&&e!==er&&(t._gsap.x||Qa(t,"x"))?i&&c1===i?e==="scale"?oN:sN:(c1=i||{})&&(e==="scale"?lN:uN):t.style&&!H0(t.style[e])?rN:~e.indexOf("-")?aN:K0(t,e)},core:{_removeProperty:Zs,_getMatrix:nv}};nr.utils.checkPrefix=hu;nr.core.getStyleSaver=_T;(function(s,t,e,i){var a=$i(s+","+t+","+e,function(l){as[l]=1});$i(t,function(l){Ar.units[l]="deg",ST[l]=1}),va[a[13]]=s+","+t,$i(i,function(l){var c=l.split(":");va[c[1]]=a[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$i("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ar.units[s]="px"});nr.registerPlugin(ET);var zd=nr.registerPlugin(ET)||nr;zd.core.Tween;function SN(s,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function yN(s,t,e){return t&&SN(s.prototype,t),s}var di,gd,Sr,Vs,Gs,Jl,TT,bo,Oc,bT,$a,na,AT,CT=function(){return di||typeof window<"u"&&(di=window.gsap)&&di.registerPlugin&&di},RT=1,Wl=[],Oe=[],Ma=[],Pc=Date.now,f0=function(t,e){return e},MN=function(){var t=Oc.core,e=t.bridge||{},i=t._scrollers,a=t._proxies;i.push.apply(i,Oe),a.push.apply(a,Ma),Oe=i,Ma=a,f0=function(c,f){return e[c](f)}},Ws=function(t,e){return~Ma.indexOf(t)&&Ma[Ma.indexOf(t)+1][e]},zc=function(t){return!!~bT.indexOf(t)},Ni=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:a!==!1,capture:!!l})},Li=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},Qh="scrollLeft",Kh="scrollTop",h0=function(){return $a&&$a.isPressed||Oe.cache++},Fd=function(t,e){var i=function a(l){if(l||l===0){RT&&(Sr.history.scrollRestoration="manual");var c=$a&&$a.isPressed;l=a.v=Math.round(l)||($a&&$a.iOS?1:0),t(l),a.cacheID=Oe.cache,c&&f0("ss",l)}else(e||Oe.cache!==a.cacheID||f0("ref"))&&(a.cacheID=Oe.cache,a.v=t());return a.v+a.offset};return i.offset=0,t&&i},Ii={s:Qh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fd(function(s){return arguments.length?Sr.scrollTo(s,Jn.sc()):Sr.pageXOffset||Vs[Qh]||Gs[Qh]||Jl[Qh]||0})},Jn={s:Kh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ii,sc:Fd(function(s){return arguments.length?Sr.scrollTo(Ii.sc(),s):Sr.pageYOffset||Vs[Kh]||Gs[Kh]||Jl[Kh]||0})},ji=function(t,e){return(e&&e._ctx&&e._ctx.selector||di.utils.toArray)(t)[0]||(typeof t=="string"&&di.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},EN=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},Qs=function(t,e){var i=e.s,a=e.sc;zc(t)&&(t=Vs.scrollingElement||Gs);var l=Oe.indexOf(t),c=a===Jn.sc?1:2;!~l&&(l=Oe.push(t)-1),Oe[l+c]||Ni(t,"scroll",h0);var f=Oe[l+c],h=f||(Oe[l+c]=Fd(Ws(t,i),!0)||(zc(t)?a:Fd(function(d){return arguments.length?t[i]=d:t[i]})));return h.target=t,f||(h.smooth=di.getProperty(t,"scrollBehavior")==="smooth"),h},d0=function(t,e,i){var a=t,l=t,c=Pc(),f=c,h=e||50,d=Math.max(500,h*3),_=function(y,E){var S=Pc();E||S-c>h?(l=a,a=y,f=c,c=S):i?a+=y:a=l+(y-l)/(S-f)*(c-f)},v=function(){l=a=i?0:a,f=c=0},g=function(y){var E=f,S=l,M=Pc();return(y||y===0)&&y!==a&&_(y),c===f||M-f>d?0:(a+(i?S:-S))/((i?M:c)-E)*1e3};return{update:_,reset:v,getVelocity:g}},_c=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},x1=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},wT=function(){Oc=di.core.globals().ScrollTrigger,Oc&&Oc.core&&MN()},DT=function(t){return di=t||CT(),!gd&&di&&typeof document<"u"&&document.body&&(Sr=window,Vs=document,Gs=Vs.documentElement,Jl=Vs.body,bT=[Sr,Vs,Gs,Jl],di.utils.clamp,AT=di.core.context||function(){},bo="onpointerenter"in Jl?"pointer":"mouse",TT=Bn.isTouch=Sr.matchMedia&&Sr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Sr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,na=Bn.eventTypes=("ontouchstart"in Gs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return RT=0},500),wT(),gd=1),gd};Ii.op=Jn;Oe.cache=0;var Bn=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(i){gd||DT(di)||console.warn("Please gsap.registerPlugin(Observer)"),Oc||wT();var a=i.tolerance,l=i.dragMinimum,c=i.type,f=i.target,h=i.lineHeight,d=i.debounce,_=i.preventDefault,v=i.onStop,g=i.onStopDelay,x=i.ignore,y=i.wheelSpeed,E=i.event,S=i.onDragStart,M=i.onDragEnd,A=i.onDrag,D=i.onPress,C=i.onRelease,P=i.onRight,O=i.onLeft,L=i.onUp,T=i.onDown,w=i.onChangeX,k=i.onChangeY,I=i.onChange,G=i.onToggleX,J=i.onToggleY,$=i.onHover,Q=i.onHoverEnd,z=i.onMove,F=i.ignoreCheck,tt=i.isNormalizer,ct=i.onGestureStart,V=i.onGestureEnd,B=i.onWheel,K=i.onEnable,vt=i.onDisable,Tt=i.onClick,Dt=i.scrollSpeed,it=i.capture,mt=i.allowClicks,Mt=i.lockAxis,Pt=i.onLockAxis;this.target=f=ji(f)||Gs,this.vars=i,x&&(x=di.utils.toArray(x)),a=a||1e-9,l=l||0,y=y||1,Dt=Dt||1,c=c||"wheel,touch,pointer",d=d!==!1,h||(h=parseFloat(Sr.getComputedStyle(Jl).lineHeight)||22);var ee,Qt,Le,Yt,ae,_e,se,lt=this,Y=0,Ye=0,Ee=i.passive||!_&&i.passive!==!1,ce=Qs(f,Ii),Xt=Qs(f,Jn),H=ce(),R=Xt(),Z=~c.indexOf("touch")&&!~c.indexOf("pointer")&&na[0]==="pointerdown",_t=zc(f),gt=f.ownerDocument||Vs,ht=[0,0,0],Ht=[0,0,0],Rt=0,ie=function(){return Rt=Pc()},Wt=function(Jt,Te){return(lt.event=Jt)&&x&&EN(Jt.target,x)||Te&&Z&&Jt.pointerType!=="touch"||F&&F(Jt,Te)},At=function(){lt._vx.reset(),lt._vy.reset(),Qt.pause(),v&&v(lt)},bt=function(){var Jt=lt.deltaX=x1(ht),Te=lt.deltaY=x1(Ht),Ft=Math.abs(Jt)>=a,he=Math.abs(Te)>=a;I&&(Ft||he)&&I(lt,Jt,Te,ht,Ht),Ft&&(P&&lt.deltaX>0&&P(lt),O&&lt.deltaX<0&&O(lt),w&&w(lt),G&&lt.deltaX<0!=Y<0&&G(lt),Y=lt.deltaX,ht[0]=ht[1]=ht[2]=0),he&&(T&&lt.deltaY>0&&T(lt),L&&lt.deltaY<0&&L(lt),k&&k(lt),J&&lt.deltaY<0!=Ye<0&&J(lt),Ye=lt.deltaY,Ht[0]=Ht[1]=Ht[2]=0),(Yt||Le)&&(z&&z(lt),Le&&(S&&Le===1&&S(lt),A&&A(lt),Le=0),Yt=!1),_e&&!(_e=!1)&&Pt&&Pt(lt),ae&&(B(lt),ae=!1),ee=0},It=function(Jt,Te,Ft){ht[Ft]+=Jt,Ht[Ft]+=Te,lt._vx.update(Jt),lt._vy.update(Te),d?ee||(ee=requestAnimationFrame(bt)):bt()},Ot=function(Jt,Te){Mt&&!se&&(lt.axis=se=Math.abs(Jt)>Math.abs(Te)?"x":"y",_e=!0),se!=="y"&&(ht[2]+=Jt,lt._vx.update(Jt,!0)),se!=="x"&&(Ht[2]+=Te,lt._vy.update(Te,!0)),d?ee||(ee=requestAnimationFrame(bt)):bt()},zt=function(Jt){if(!Wt(Jt,1)){Jt=_c(Jt,_);var Te=Jt.clientX,Ft=Jt.clientY,he=Te-lt.x,oe=Ft-lt.y,de=lt.isDragging;lt.x=Te,lt.y=Ft,(de||(he||oe)&&(Math.abs(lt.startX-Te)>=l||Math.abs(lt.startY-Ft)>=l))&&(Le||(Le=de?2:1),de||(lt.isDragging=!0),Ot(he,oe))}},pe=lt.onPress=function(Vt){Wt(Vt,1)||Vt&&Vt.button||(lt.axis=se=null,Qt.pause(),lt.isPressed=!0,Vt=_c(Vt),Y=Ye=0,lt.startX=lt.x=Vt.clientX,lt.startY=lt.y=Vt.clientY,lt._vx.reset(),lt._vy.reset(),Ni(tt?f:gt,na[1],zt,Ee,!0),lt.deltaX=lt.deltaY=0,D&&D(lt))},X=lt.onRelease=function(Vt){if(!Wt(Vt,1)){Li(tt?f:gt,na[1],zt,!0);var Jt=!isNaN(lt.y-lt.startY),Te=lt.isDragging,Ft=Te&&(Math.abs(lt.x-lt.startX)>3||Math.abs(lt.y-lt.startY)>3),he=_c(Vt);!Ft&&Jt&&(lt._vx.reset(),lt._vy.reset(),_&&mt&&di.delayedCall(.08,function(){if(Pc()-Rt>300&&!Vt.defaultPrevented){if(Vt.target.click)Vt.target.click();else if(gt.createEvent){var oe=gt.createEvent("MouseEvents");oe.initMouseEvent("click",!0,!0,Sr,1,he.screenX,he.screenY,he.clientX,he.clientY,!1,!1,!1,!1,0,null),Vt.target.dispatchEvent(oe)}}})),lt.isDragging=lt.isGesturing=lt.isPressed=!1,v&&Te&&!tt&&Qt.restart(!0),Le&&bt(),M&&Te&&M(lt),C&&C(lt,Ft)}},wt=function(Jt){return Jt.touches&&Jt.touches.length>1&&(lt.isGesturing=!0)&&ct(Jt,lt.isDragging)},Ct=function(){return(lt.isGesturing=!1)||V(lt)},Lt=function(Jt){if(!Wt(Jt)){var Te=ce(),Ft=Xt();It((Te-H)*Dt,(Ft-R)*Dt,1),H=Te,R=Ft,v&&Qt.restart(!0)}},Et=function(Jt){if(!Wt(Jt)){Jt=_c(Jt,_),B&&(ae=!0);var Te=(Jt.deltaMode===1?h:Jt.deltaMode===2?Sr.innerHeight:1)*y;It(Jt.deltaX*Te,Jt.deltaY*Te,0),v&&!tt&&Qt.restart(!0)}},pt=function(Jt){if(!Wt(Jt)){var Te=Jt.clientX,Ft=Jt.clientY,he=Te-lt.x,oe=Ft-lt.y;lt.x=Te,lt.y=Ft,Yt=!0,v&&Qt.restart(!0),(he||oe)&&Ot(he,oe)}},kt=function(Jt){lt.event=Jt,$(lt)},le=function(Jt){lt.event=Jt,Q(lt)},ke=function(Jt){return Wt(Jt)||_c(Jt,_)&&Tt(lt)};Qt=lt._dc=di.delayedCall(g||.25,At).pause(),lt.deltaX=lt.deltaY=0,lt._vx=d0(0,50,!0),lt._vy=d0(0,50,!0),lt.scrollX=ce,lt.scrollY=Xt,lt.isDragging=lt.isGesturing=lt.isPressed=!1,AT(this),lt.enable=function(Vt){return lt.isEnabled||(Ni(_t?gt:f,"scroll",h0),c.indexOf("scroll")>=0&&Ni(_t?gt:f,"scroll",Lt,Ee,it),c.indexOf("wheel")>=0&&Ni(f,"wheel",Et,Ee,it),(c.indexOf("touch")>=0&&TT||c.indexOf("pointer")>=0)&&(Ni(f,na[0],pe,Ee,it),Ni(gt,na[2],X),Ni(gt,na[3],X),mt&&Ni(f,"click",ie,!0,!0),Tt&&Ni(f,"click",ke),ct&&Ni(gt,"gesturestart",wt),V&&Ni(gt,"gestureend",Ct),$&&Ni(f,bo+"enter",kt),Q&&Ni(f,bo+"leave",le),z&&Ni(f,bo+"move",pt)),lt.isEnabled=!0,lt.isDragging=lt.isGesturing=lt.isPressed=Yt=Le=!1,lt._vx.reset(),lt._vy.reset(),H=ce(),R=Xt(),Vt&&Vt.type&&pe(Vt),K&&K(lt)),lt},lt.disable=function(){lt.isEnabled&&(Wl.filter(function(Vt){return Vt!==lt&&zc(Vt.target)}).length||Li(_t?gt:f,"scroll",h0),lt.isPressed&&(lt._vx.reset(),lt._vy.reset(),Li(tt?f:gt,na[1],zt,!0)),Li(_t?gt:f,"scroll",Lt,it),Li(f,"wheel",Et,it),Li(f,na[0],pe,it),Li(gt,na[2],X),Li(gt,na[3],X),Li(f,"click",ie,!0),Li(f,"click",ke),Li(gt,"gesturestart",wt),Li(gt,"gestureend",Ct),Li(f,bo+"enter",kt),Li(f,bo+"leave",le),Li(f,bo+"move",pt),lt.isEnabled=lt.isPressed=lt.isDragging=!1,vt&&vt(lt))},lt.kill=lt.revert=function(){lt.disable();var Vt=Wl.indexOf(lt);Vt>=0&&Wl.splice(Vt,1),$a===lt&&($a=0)},Wl.push(lt),tt&&zc(f)&&($a=lt),lt.enable(E)},yN(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Bn.version="3.14.2";Bn.create=function(s){return new Bn(s)};Bn.register=DT;Bn.getAll=function(){return Wl.slice()};Bn.getById=function(s){return Wl.filter(function(t){return t.vars.id===s})[0]};CT()&&di.registerPlugin(Bn);var te,Vl,Ne,mn,vr,en,iv,Bd,rf,Fc,Ec,Jh,yi,jd,p0,zi,S1,y1,Gl,UT,j_,LT,Pi,m0,NT,OT,Ps,_0,rv,$l,av,Bc,g0,Q_,$h=1,Mi=Date.now,K_=Mi(),qr=0,Tc=0,M1=function(t,e,i){var a=_r(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=a,a?t.substr(6,t.length-7):t},E1=function(t,e){return e&&(!_r(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},TN=function s(){return Tc&&requestAnimationFrame(s)},T1=function(){return jd=1},b1=function(){return jd=0},da=function(t){return t},bc=function(t){return Math.round(t*1e5)/1e5||0},PT=function(){return typeof window<"u"},zT=function(){return te||PT()&&(te=window.gsap)&&te.registerPlugin&&te},Go=function(t){return!!~iv.indexOf(t)},FT=function(t){return(t==="Height"?av:Ne["inner"+t])||vr["client"+t]||en["client"+t]},BT=function(t){return Ws(t,"getBoundingClientRect")||(Go(t)?function(){return Md.width=Ne.innerWidth,Md.height=av,Md}:function(){return Ka(t)})},bN=function(t,e,i){var a=i.d,l=i.d2,c=i.a;return(c=Ws(t,"getBoundingClientRect"))?function(){return c()[a]}:function(){return(e?FT(l):t["client"+l])||0}},AN=function(t,e){return!e||~Ma.indexOf(t)?BT(t):function(){return Md}},xa=function(t,e){var i=e.s,a=e.d2,l=e.d,c=e.a;return Math.max(0,(i="scroll"+a)&&(c=Ws(t,i))?c()-BT(t)()[l]:Go(t)?(vr[i]||en[i])-FT(a):t[i]-t["offset"+a])},td=function(t,e){for(var i=0;i<Gl.length;i+=3)(!e||~e.indexOf(Gl[i+1]))&&t(Gl[i],Gl[i+1],Gl[i+2])},_r=function(t){return typeof t=="string"},Ti=function(t){return typeof t=="function"},Ac=function(t){return typeof t=="number"},Ao=function(t){return typeof t=="object"},gc=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},J_=function(t,e){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t)}):e(t);i&&i.totalTime&&(t.callbackAnimation=i)}},Il=Math.abs,IT="left",HT="top",sv="right",ov="bottom",Fo="width",Bo="height",Ic="Right",Hc="Left",Vc="Top",Gc="Bottom",qn="padding",Gr="margin",du="Width",lv="Height",Kn="px",kr=function(t){return Ne.getComputedStyle(t)},CN=function(t){var e=kr(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},A1=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Ka=function(t,e){var i=e&&kr(t)[p0]!=="matrix(1, 0, 0, 1, 0, 0)"&&te.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=t.getBoundingClientRect();return i&&i.progress(0).kill(),a},Id=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},VT=function(t){var e=[],i=t.labels,a=t.duration(),l;for(l in i)e.push(i[l]/a);return e},RN=function(t){return function(e){return te.utils.snap(VT(t),e)}},uv=function(t){var e=te.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(a,l){return a-l});return i?function(a,l,c){c===void 0&&(c=.001);var f;if(!l)return e(a);if(l>0){for(a-=c,f=0;f<i.length;f++)if(i[f]>=a)return i[f];return i[f-1]}else for(f=i.length,a+=c;f--;)if(i[f]<=a)return i[f];return i[0]}:function(a,l,c){c===void 0&&(c=.001);var f=e(a);return!l||Math.abs(f-a)<c||f-a<0==l<0?f:e(l<0?a-t:a+t)}},wN=function(t){return function(e,i){return uv(VT(t))(e,i.direction)}},ed=function(t,e,i,a){return i.split(",").forEach(function(l){return t(e,l,a)})},si=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:!a,capture:!!l})},ai=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},nd=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},C1={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},id={toggleActions:"play",anticipatePin:0},Hd={top:0,left:0,center:.5,bottom:1,right:1},vd=function(t,e){if(_r(t)){var i=t.indexOf("="),a=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(a*=e/100),t=t.substr(0,i-1)),t=a+(t in Hd?Hd[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},rd=function(t,e,i,a,l,c,f,h){var d=l.startColor,_=l.endColor,v=l.fontSize,g=l.indent,x=l.fontWeight,y=mn.createElement("div"),E=Go(i)||Ws(i,"pinType")==="fixed",S=t.indexOf("scroller")!==-1,M=E?en:i,A=t.indexOf("start")!==-1,D=A?d:_,C="border-color:"+D+";font-size:"+v+";color:"+D+";font-weight:"+x+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((S||h)&&E?"fixed;":"absolute;"),(S||h||!E)&&(C+=(a===Jn?sv:ov)+":"+(c+parseFloat(g))+"px;"),f&&(C+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),y._isStart=A,y.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),y.style.cssText=C,y.innerText=e||e===0?t+"-"+e:t,M.children[0]?M.insertBefore(y,M.children[0]):M.appendChild(y),y._offset=y["offset"+a.op.d2],xd(y,0,a,A),y},xd=function(t,e,i,a){var l={display:"block"},c=i[a?"os2":"p2"],f=i[a?"p2":"os2"];t._isFlipped=a,l[i.a+"Percent"]=a?-100:0,l[i.a]=a?"1px":0,l["border"+c+du]=1,l["border"+f+du]=0,l[i.p]=e+"px",te.set(t,l)},Ue=[],v0={},af,R1=function(){return Mi()-qr>34&&(af||(af=requestAnimationFrame(es)))},Hl=function(){(!Pi||!Pi.isPressed||Pi.startX>en.clientWidth)&&(Oe.cache++,Pi?af||(af=requestAnimationFrame(es)):es(),qr||Xo("scrollStart"),qr=Mi())},$_=function(){OT=Ne.innerWidth,NT=Ne.innerHeight},Cc=function(t){Oe.cache++,(t===!0||!yi&&!LT&&!mn.fullscreenElement&&!mn.webkitFullscreenElement&&(!m0||OT!==Ne.innerWidth||Math.abs(Ne.innerHeight-NT)>Ne.innerHeight*.25))&&Bd.restart(!0)},ko={},DN=[],GT=function s(){return ai(He,"scrollEnd",s)||Lo(!0)},Xo=function(t){return ko[t]&&ko[t].map(function(e){return e()})||DN},mr=[],kT=function(t){for(var e=0;e<mr.length;e+=5)(!t||mr[e+4]&&mr[e+4].query===t)&&(mr[e].style.cssText=mr[e+1],mr[e].getBBox&&mr[e].setAttribute("transform",mr[e+2]||""),mr[e+3].uncache=1)},XT=function(){return Oe.forEach(function(t){return Ti(t)&&++t.cacheID&&(t.rec=t())})},cv=function(t,e){var i;for(zi=0;zi<Ue.length;zi++)i=Ue[zi],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));Bc=!0,e&&kT(e),e||Xo("revert")},WT=function(t,e){Oe.cache++,(e||!Fi)&&Oe.forEach(function(i){return Ti(i)&&i.cacheID++&&(i.rec=0)}),_r(t)&&(Ne.history.scrollRestoration=rv=t)},Fi,Io=0,w1,UN=function(){if(w1!==Io){var t=w1=Io;requestAnimationFrame(function(){return t===Io&&Lo(!0)})}},YT=function(){en.appendChild($l),av=!Pi&&$l.offsetHeight||Ne.innerHeight,en.removeChild($l)},D1=function(t){return rf(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Lo=function(t,e){if(vr=mn.documentElement,en=mn.body,iv=[Ne,mn,vr,en],qr&&!t&&!Bc){si(He,"scrollEnd",GT);return}YT(),Fi=He.isRefreshing=!0,Bc||XT();var i=Xo("refreshInit");UT&&He.sort(),e||cv(),Oe.forEach(function(a){Ti(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),Ue.slice(0).forEach(function(a){return a.refresh()}),Bc=!1,Ue.forEach(function(a){if(a._subPinOffset&&a.pin){var l=a.vars.horizontal?"offsetWidth":"offsetHeight",c=a.pin[l];a.revert(!0,1),a.adjustPinSpacing(a.pin[l]-c),a.refresh()}}),g0=1,D1(!0),Ue.forEach(function(a){var l=xa(a.scroller,a._dir),c=a.vars.end==="max"||a._endClamp&&a.end>l,f=a._startClamp&&a.start>=l;(c||f)&&a.setPositions(f?l-1:a.start,c?Math.max(f?l:a.start+1,l):a.end,!0)}),D1(!1),g0=0,i.forEach(function(a){return a&&a.render&&a.render(-1)}),Oe.forEach(function(a){Ti(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),WT(rv,1),Bd.pause(),Io++,Fi=2,es(2),Ue.forEach(function(a){return Ti(a.vars.onRefresh)&&a.vars.onRefresh(a)}),Fi=He.isRefreshing=!1,Xo("refresh")},x0=0,Sd=1,kc,es=function(t){if(t===2||!Fi&&!Bc){He.isUpdating=!0,kc&&kc.update(0);var e=Ue.length,i=Mi(),a=i-K_>=50,l=e&&Ue[0].scroll();if(Sd=x0>l?-1:1,Fi||(x0=l),a&&(qr&&!jd&&i-qr>200&&(qr=0,Xo("scrollEnd")),Ec=K_,K_=i),Sd<0){for(zi=e;zi-- >0;)Ue[zi]&&Ue[zi].update(0,a);Sd=1}else for(zi=0;zi<e;zi++)Ue[zi]&&Ue[zi].update(0,a);He.isUpdating=!1}af=0},S0=[IT,HT,ov,sv,Gr+Gc,Gr+Ic,Gr+Vc,Gr+Hc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yd=S0.concat([Fo,Bo,"boxSizing","max"+du,"max"+lv,"position",Gr,qn,qn+Vc,qn+Ic,qn+Gc,qn+Hc]),LN=function(t,e,i){tu(i);var a=t._gsap;if(a.spacerIsNative)tu(a.spacerState);else if(t._gsap.swappedIn){var l=e.parentNode;l&&(l.insertBefore(t,e),l.removeChild(e))}t._gsap.swappedIn=!1},tg=function(t,e,i,a){if(!t._gsap.swappedIn){for(var l=S0.length,c=e.style,f=t.style,h;l--;)h=S0[l],c[h]=i[h];c.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(c.display="inline-block"),f[ov]=f[sv]="auto",c.flexBasis=i.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Fo]=Id(t,Ii)+Kn,c[Bo]=Id(t,Jn)+Kn,c[qn]=f[Gr]=f[HT]=f[IT]="0",tu(a),f[Fo]=f["max"+du]=i[Fo],f[Bo]=f["max"+lv]=i[Bo],f[qn]=i[qn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},NN=/([A-Z])/g,tu=function(t){if(t){var e=t.t.style,i=t.length,a=0,l,c;for((t.t._gsap||te.core.getCache(t.t)).uncache=1;a<i;a+=2)c=t[a+1],l=t[a],c?e[l]=c:e[l]&&e.removeProperty(l.replace(NN,"-$1").toLowerCase())}},ad=function(t){for(var e=yd.length,i=t.style,a=[],l=0;l<e;l++)a.push(yd[l],i[yd[l]]);return a.t=t,a},ON=function(t,e,i){for(var a=[],l=t.length,c=i?8:0,f;c<l;c+=2)f=t[c],a.push(f,f in e?e[f]:t[c+1]);return a.t=t.t,a},Md={left:0,top:0},U1=function(t,e,i,a,l,c,f,h,d,_,v,g,x,y){Ti(t)&&(t=t(h)),_r(t)&&t.substr(0,3)==="max"&&(t=g+(t.charAt(4)==="="?vd("0"+t.substr(3),i):0));var E=x?x.time():0,S,M,A;if(x&&x.seek(0),isNaN(t)||(t=+t),Ac(t))x&&(t=te.utils.mapRange(x.scrollTrigger.start,x.scrollTrigger.end,0,g,t)),f&&xd(f,i,a,!0);else{Ti(e)&&(e=e(h));var D=(t||"0").split(" "),C,P,O,L;A=ji(e,h)||en,C=Ka(A)||{},(!C||!C.left&&!C.top)&&kr(A).display==="none"&&(L=A.style.display,A.style.display="block",C=Ka(A),L?A.style.display=L:A.style.removeProperty("display")),P=vd(D[0],C[a.d]),O=vd(D[1]||"0",i),t=C[a.p]-d[a.p]-_+P+l-O,f&&xd(f,O,a,i-O<20||f._isStart&&O>20),i-=i-O}if(y&&(h[y]=t||-.001,t<0&&(t=0)),c){var T=t+i,w=c._isStart;S="scroll"+a.d2,xd(c,T,a,w&&T>20||!w&&(v?Math.max(en[S],vr[S]):c.parentNode[S])<=T+1),v&&(d=Ka(f),v&&(c.style[a.op.p]=d[a.op.p]-a.op.m-c._offset+Kn))}return x&&A&&(S=Ka(A),x.seek(g),M=Ka(A),x._caScrollDist=S[a.p]-M[a.p],t=t/x._caScrollDist*g),x&&x.seek(E),x?t:Math.round(t)},PN=/(webkit|moz|length|cssText|inset)/i,L1=function(t,e,i,a){if(t.parentNode!==e){var l=t.style,c,f;if(e===en){t._stOrig=l.cssText,f=kr(t);for(c in f)!+c&&!PN.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=i,l.left=a}else l.cssText=t._stOrig;te.core.getCache(t).uncache=1,e.appendChild(t)}},qT=function(t,e,i){var a=e,l=a;return function(c){var f=Math.round(t());return f!==a&&f!==l&&Math.abs(f-a)>3&&Math.abs(f-l)>3&&(c=f,i&&i()),l=a,a=Math.round(c),a}},sd=function(t,e,i){var a={};a[e.p]="+="+i,te.set(t,a)},N1=function(t,e){var i=Qs(t,e),a="_scroll"+e.p2,l=function c(f,h,d,_,v){var g=c.tween,x=h.onComplete,y={};d=d||i();var E=qT(i,d,function(){g.kill(),c.tween=0});return v=_&&v||0,_=_||f-d,g&&g.kill(),h[a]=f,h.inherit=!1,h.modifiers=y,y[a]=function(){return E(d+_*g.ratio+v*g.ratio*g.ratio)},h.onUpdate=function(){Oe.cache++,c.tween&&es()},h.onComplete=function(){c.tween=0,x&&x.call(g)},g=c.tween=te.to(t,h),g};return t[a]=i,i.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},si(t,"wheel",i.wheelHandler),He.isTouch&&si(t,"touchmove",i.wheelHandler),l},He=(function(){function s(e,i){Vl||s.register(te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_0(this),this.init(e,i)}var t=s.prototype;return t.init=function(i,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Tc){this.update=this.refresh=this.kill=da;return}i=A1(_r(i)||Ac(i)||i.nodeType?{trigger:i}:i,id);var l=i,c=l.onUpdate,f=l.toggleClass,h=l.id,d=l.onToggle,_=l.onRefresh,v=l.scrub,g=l.trigger,x=l.pin,y=l.pinSpacing,E=l.invalidateOnRefresh,S=l.anticipatePin,M=l.onScrubComplete,A=l.onSnapComplete,D=l.once,C=l.snap,P=l.pinReparent,O=l.pinSpacer,L=l.containerAnimation,T=l.fastScrollEnd,w=l.preventOverlaps,k=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Ii:Jn,I=!v&&v!==0,G=ji(i.scroller||Ne),J=te.core.getCache(G),$=Go(G),Q=("pinType"in i?i.pinType:Ws(G,"pinType")||$&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],F=I&&i.toggleActions.split(" "),tt="markers"in i?i.markers:id.markers,ct=$?0:parseFloat(kr(G)["border"+k.p2+du])||0,V=this,B=i.onRefreshInit&&function(){return i.onRefreshInit(V)},K=bN(G,$,k),vt=AN(G,$),Tt=0,Dt=0,it=0,mt=Qs(G,k),Mt,Pt,ee,Qt,Le,Yt,ae,_e,se,lt,Y,Ye,Ee,ce,Xt,H,R,Z,_t,gt,ht,Ht,Rt,ie,Wt,At,bt,It,Ot,zt,pe,X,wt,Ct,Lt,Et,pt,kt,le;if(V._startClamp=V._endClamp=!1,V._dir=k,S*=45,V.scroller=G,V.scroll=L?L.time.bind(L):mt,Qt=mt(),V.vars=i,a=a||i.animation,"refreshPriority"in i&&(UT=1,i.refreshPriority===-9999&&(kc=V)),J.tweenScroll=J.tweenScroll||{top:N1(G,Jn),left:N1(G,Ii)},V.tweenTo=Mt=J.tweenScroll[k.p],V.scrubDuration=function(Ft){wt=Ac(Ft)&&Ft,wt?X?X.duration(Ft):X=te.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:wt,paused:!0,onComplete:function(){return M&&M(V)}}):(X&&X.progress(1).kill(),X=0)},a&&(a.vars.lazy=!1,a._initted&&!V.isReverted||a.vars.immediateRender!==!1&&i.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),V.animation=a.pause(),a.scrollTrigger=V,V.scrubDuration(v),zt=0,h||(h=a.vars.id)),C&&((!Ao(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in en.style&&te.set($?[en,vr]:G,{scrollBehavior:"auto"}),Oe.forEach(function(Ft){return Ti(Ft)&&Ft.target===($?mn.scrollingElement||vr:G)&&(Ft.smooth=!1)}),ee=Ti(C.snapTo)?C.snapTo:C.snapTo==="labels"?RN(a):C.snapTo==="labelsDirectional"?wN(a):C.directional!==!1?function(Ft,he){return uv(C.snapTo)(Ft,Mi()-Dt<500?0:he.direction)}:te.utils.snap(C.snapTo),Ct=C.duration||{min:.1,max:2},Ct=Ao(Ct)?Fc(Ct.min,Ct.max):Fc(Ct,Ct),Lt=te.delayedCall(C.delay||wt/2||.1,function(){var Ft=mt(),he=Mi()-Dt<500,oe=Mt.tween;if((he||Math.abs(V.getVelocity())<10)&&!oe&&!jd&&Tt!==Ft){var de=(Ft-Yt)/ce,_n=a&&!I?a.totalProgress():de,ge=he?0:(_n-pe)/(Mi()-Ec)*1e3||0,sn=te.utils.clamp(-de,1-de,Il(ge/2)*ge/.185),on=de+(C.inertia===!1?0:sn),be,Se,Pe=C,In=Pe.onStart,ln=Pe.onInterrupt,ni=Pe.onComplete;if(be=ee(on,V),Ac(be)||(be=on),Se=Math.max(0,Math.round(Yt+be*ce)),Ft<=ae&&Ft>=Yt&&Se!==Ft){if(oe&&!oe._initted&&oe.data<=Il(Se-Ft))return;C.inertia===!1&&(sn=be-de),Mt(Se,{duration:Ct(Il(Math.max(Il(on-_n),Il(be-_n))*.185/ge/.05||0)),ease:C.ease||"power3",data:Il(Se-Ft),onInterrupt:function(){return Lt.restart(!0)&&ln&&ln(V)},onComplete:function(){V.update(),Tt=mt(),a&&!I&&(X?X.resetTo("totalProgress",be,a._tTime/a._tDur):a.progress(be)),zt=pe=a&&!I?a.totalProgress():V.progress,A&&A(V),ni&&ni(V)}},Ft,sn*ce,Se-Ft-sn*ce),In&&In(V,Mt.tween)}}else V.isActive&&Tt!==Ft&&Lt.restart(!0)}).pause()),h&&(v0[h]=V),g=V.trigger=ji(g||x!==!0&&x),le=g&&g._gsap&&g._gsap.stRevert,le&&(le=le(V)),x=x===!0?g:ji(x),_r(f)&&(f={targets:g,className:f}),x&&(y===!1||y===Gr||(y=!y&&x.parentNode&&x.parentNode.style&&kr(x.parentNode).display==="flex"?!1:qn),V.pin=x,Pt=te.core.getCache(x),Pt.spacer?Xt=Pt.pinState:(O&&(O=ji(O),O&&!O.nodeType&&(O=O.current||O.nativeElement),Pt.spacerIsNative=!!O,O&&(Pt.spacerState=ad(O))),Pt.spacer=Z=O||mn.createElement("div"),Z.classList.add("pin-spacer"),h&&Z.classList.add("pin-spacer-"+h),Pt.pinState=Xt=ad(x)),i.force3D!==!1&&te.set(x,{force3D:!0}),V.spacer=Z=Pt.spacer,Ot=kr(x),ie=Ot[y+k.os2],gt=te.getProperty(x),ht=te.quickSetter(x,k.a,Kn),tg(x,Z,Ot),R=ad(x)),tt){Ye=Ao(tt)?A1(tt,C1):C1,lt=rd("scroller-start",h,G,k,Ye,0),Y=rd("scroller-end",h,G,k,Ye,0,lt),_t=lt["offset"+k.op.d2];var ke=ji(Ws(G,"content")||G);_e=this.markerStart=rd("start",h,ke,k,Ye,_t,0,L),se=this.markerEnd=rd("end",h,ke,k,Ye,_t,0,L),L&&(kt=te.quickSetter([_e,se],k.a,Kn)),!Q&&!(Ma.length&&Ws(G,"fixedMarkers")===!0)&&(CN($?en:G),te.set([lt,Y],{force3D:!0}),At=te.quickSetter(lt,k.a,Kn),It=te.quickSetter(Y,k.a,Kn))}if(L){var Vt=L.vars.onUpdate,Jt=L.vars.onUpdateParams;L.eventCallback("onUpdate",function(){V.update(0,0,1),Vt&&Vt.apply(L,Jt||[])})}if(V.previous=function(){return Ue[Ue.indexOf(V)-1]},V.next=function(){return Ue[Ue.indexOf(V)+1]},V.revert=function(Ft,he){if(!he)return V.kill(!0);var oe=Ft!==!1||!V.enabled,de=yi;oe!==V.isReverted&&(oe&&(Et=Math.max(mt(),V.scroll.rec||0),it=V.progress,pt=a&&a.progress()),_e&&[_e,se,lt,Y].forEach(function(_n){return _n.style.display=oe?"none":"block"}),oe&&(yi=V,V.update(oe)),x&&(!P||!V.isActive)&&(oe?LN(x,Z,Xt):tg(x,Z,kr(x),Wt)),oe||V.update(oe),yi=de,V.isReverted=oe)},V.refresh=function(Ft,he,oe,de){if(!((yi||!V.enabled)&&!he)){if(x&&Ft&&qr){si(s,"scrollEnd",GT);return}!Fi&&B&&B(V),yi=V,Mt.tween&&!oe&&(Mt.tween.kill(),Mt.tween=0),X&&X.pause(),E&&a&&(a.revert({kill:!1}).invalidate(),a.getChildren?a.getChildren(!0,!0,!1).forEach(function(jt){return jt.vars.immediateRender&&jt.render(0,!0,!0)}):a.vars.immediateRender&&a.render(0,!0,!0)),V.isReverted||V.revert(!0,!0),V._subPinOffset=!1;var _n=K(),ge=vt(),sn=L?L.duration():xa(G,k),on=ce<=.01||!ce,be=0,Se=de||0,Pe=Ao(oe)?oe.end:i.end,In=i.endTrigger||g,ln=Ao(oe)?oe.start:i.start||(i.start===0||!g?0:x?"0 0":"0 100%"),ni=V.pinnedContainer=i.pinnedContainer&&ji(i.pinnedContainer,V),Ci=g&&Math.max(0,Ue.indexOf(V))||0,gn=Ci,bn,vn,_i,wr,U,q,ut,st,rt,Ut,Bt,Nt,Zt;for(tt&&Ao(oe)&&(Nt=te.getProperty(lt,k.p),Zt=te.getProperty(Y,k.p));gn-- >0;)q=Ue[gn],q.end||q.refresh(0,1)||(yi=V),ut=q.pin,ut&&(ut===g||ut===x||ut===ni)&&!q.isReverted&&(Ut||(Ut=[]),Ut.unshift(q),q.revert(!0,!0)),q!==Ue[gn]&&(Ci--,gn--);for(Ti(ln)&&(ln=ln(V)),ln=M1(ln,"start",V),Yt=U1(ln,g,_n,k,mt(),_e,lt,V,ge,ct,Q,sn,L,V._startClamp&&"_startClamp")||(x?-.001:0),Ti(Pe)&&(Pe=Pe(V)),_r(Pe)&&!Pe.indexOf("+=")&&(~Pe.indexOf(" ")?Pe=(_r(ln)?ln.split(" ")[0]:"")+Pe:(be=vd(Pe.substr(2),_n),Pe=_r(ln)?ln:(L?te.utils.mapRange(0,L.duration(),L.scrollTrigger.start,L.scrollTrigger.end,Yt):Yt)+be,In=g)),Pe=M1(Pe,"end",V),ae=Math.max(Yt,U1(Pe||(In?"100% 0":sn),In,_n,k,mt()+be,se,Y,V,ge,ct,Q,sn,L,V._endClamp&&"_endClamp"))||-.001,be=0,gn=Ci;gn--;)q=Ue[gn]||{},ut=q.pin,ut&&q.start-q._pinPush<=Yt&&!L&&q.end>0&&(bn=q.end-(V._startClamp?Math.max(0,q.start):q.start),(ut===g&&q.start-q._pinPush<Yt||ut===ni)&&isNaN(ln)&&(be+=bn*(1-q.progress)),ut===x&&(Se+=bn));if(Yt+=be,ae+=be,V._startClamp&&(V._startClamp+=be),V._endClamp&&!Fi&&(V._endClamp=ae||-.001,ae=Math.min(ae,xa(G,k))),ce=ae-Yt||(Yt-=.01)&&.001,on&&(it=te.utils.clamp(0,1,te.utils.normalize(Yt,ae,Et))),V._pinPush=Se,_e&&be&&(bn={},bn[k.a]="+="+be,ni&&(bn[k.p]="-="+mt()),te.set([_e,se],bn)),x&&!(g0&&V.end>=xa(G,k)))bn=kr(x),wr=k===Jn,_i=mt(),Ht=parseFloat(gt(k.a))+Se,!sn&&ae>1&&(Bt=($?mn.scrollingElement||vr:G).style,Bt={style:Bt,value:Bt["overflow"+k.a.toUpperCase()]},$&&kr(en)["overflow"+k.a.toUpperCase()]!=="scroll"&&(Bt.style["overflow"+k.a.toUpperCase()]="scroll")),tg(x,Z,bn),R=ad(x),vn=Ka(x,!0),st=Q&&Qs(G,wr?Ii:Jn)(),y?(Wt=[y+k.os2,ce+Se+Kn],Wt.t=Z,gn=y===qn?Id(x,k)+ce+Se:0,gn&&(Wt.push(k.d,gn+Kn),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=gn+Kn)),tu(Wt),ni&&Ue.forEach(function(jt){jt.pin===ni&&jt.vars.pinSpacing!==!1&&(jt._subPinOffset=!0)}),Q&&mt(Et)):(gn=Id(x,k),gn&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=gn+Kn)),Q&&(U={top:vn.top+(wr?_i-Yt:st)+Kn,left:vn.left+(wr?st:_i-Yt)+Kn,boxSizing:"border-box",position:"fixed"},U[Fo]=U["max"+du]=Math.ceil(vn.width)+Kn,U[Bo]=U["max"+lv]=Math.ceil(vn.height)+Kn,U[Gr]=U[Gr+Vc]=U[Gr+Ic]=U[Gr+Gc]=U[Gr+Hc]="0",U[qn]=bn[qn],U[qn+Vc]=bn[qn+Vc],U[qn+Ic]=bn[qn+Ic],U[qn+Gc]=bn[qn+Gc],U[qn+Hc]=bn[qn+Hc],H=ON(Xt,U,P),Fi&&mt(0)),a?(rt=a._initted,j_(1),a.render(a.duration(),!0,!0),Rt=gt(k.a)-Ht+ce+Se,bt=Math.abs(ce-Rt)>1,Q&&bt&&H.splice(H.length-2,2),a.render(0,!0,!0),rt||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),j_(0)):Rt=ce,Bt&&(Bt.value?Bt.style["overflow"+k.a.toUpperCase()]=Bt.value:Bt.style.removeProperty("overflow-"+k.a));else if(g&&mt()&&!L)for(vn=g.parentNode;vn&&vn!==en;)vn._pinOffset&&(Yt-=vn._pinOffset,ae-=vn._pinOffset),vn=vn.parentNode;Ut&&Ut.forEach(function(jt){return jt.revert(!1,!0)}),V.start=Yt,V.end=ae,Qt=Le=Fi?Et:mt(),!L&&!Fi&&(Qt<Et&&mt(Et),V.scroll.rec=0),V.revert(!1,!0),Dt=Mi(),Lt&&(Tt=-1,Lt.restart(!0)),yi=0,a&&I&&(a._initted||pt)&&a.progress()!==pt&&a.progress(pt||0,!0).render(a.time(),!0,!0),(on||it!==V.progress||L||E||a&&!a._initted)&&(a&&!I&&(a._initted||it||a.vars.immediateRender!==!1)&&a.totalProgress(L&&Yt<-.001&&!it?te.utils.normalize(Yt,ae,0):it,!0),V.progress=on||(Qt-Yt)/ce===it?0:it),x&&y&&(Z._pinOffset=Math.round(V.progress*Rt)),X&&X.invalidate(),isNaN(Nt)||(Nt-=te.getProperty(lt,k.p),Zt-=te.getProperty(Y,k.p),sd(lt,k,Nt),sd(_e,k,Nt-(de||0)),sd(Y,k,Zt),sd(se,k,Zt-(de||0))),on&&!Fi&&V.update(),_&&!Fi&&!Ee&&(Ee=!0,_(V),Ee=!1)}},V.getVelocity=function(){return(mt()-Le)/(Mi()-Ec)*1e3||0},V.endAnimation=function(){gc(V.callbackAnimation),a&&(X?X.progress(1):a.paused()?I||gc(a,V.direction<0,1):gc(a,a.reversed()))},V.labelToScroll=function(Ft){return a&&a.labels&&(Yt||V.refresh()||Yt)+a.labels[Ft]/a.duration()*ce||0},V.getTrailing=function(Ft){var he=Ue.indexOf(V),oe=V.direction>0?Ue.slice(0,he).reverse():Ue.slice(he+1);return(_r(Ft)?oe.filter(function(de){return de.vars.preventOverlaps===Ft}):oe).filter(function(de){return V.direction>0?de.end<=Yt:de.start>=ae})},V.update=function(Ft,he,oe){if(!(L&&!oe&&!Ft)){var de=Fi===!0?Et:V.scroll(),_n=Ft?0:(de-Yt)/ce,ge=_n<0?0:_n>1?1:_n||0,sn=V.progress,on,be,Se,Pe,In,ln,ni,Ci;if(he&&(Le=Qt,Qt=L?mt():de,C&&(pe=zt,zt=a&&!I?a.totalProgress():ge)),S&&x&&!yi&&!$h&&qr&&(!ge&&Yt<de+(de-Le)/(Mi()-Ec)*S?ge=1e-4:ge===1&&ae>de+(de-Le)/(Mi()-Ec)*S&&(ge=.9999)),ge!==sn&&V.enabled){if(on=V.isActive=!!ge&&ge<1,be=!!sn&&sn<1,ln=on!==be,In=ln||!!ge!=!!sn,V.direction=ge>sn?1:-1,V.progress=ge,In&&!yi&&(Se=ge&&!sn?0:ge===1?1:sn===1?2:3,I&&(Pe=!ln&&F[Se+1]!=="none"&&F[Se+1]||F[Se],Ci=a&&(Pe==="complete"||Pe==="reset"||Pe in a))),w&&(ln||Ci)&&(Ci||v||!a)&&(Ti(w)?w(V):V.getTrailing(w).forEach(function(_i){return _i.endAnimation()})),I||(X&&!yi&&!$h?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",ge,a._tTime/a._tDur):(X.vars.totalProgress=ge,X.invalidate().restart())):a&&a.totalProgress(ge,!!(yi&&(Dt||Ft)))),x){if(Ft&&y&&(Z.style[y+k.os2]=ie),!Q)ht(bc(Ht+Rt*ge));else if(In){if(ni=!Ft&&ge>sn&&ae+1>de&&de+1>=xa(G,k),P)if(!Ft&&(on||ni)){var gn=Ka(x,!0),bn=de-Yt;L1(x,en,gn.top+(k===Jn?bn:0)+Kn,gn.left+(k===Jn?0:bn)+Kn)}else L1(x,Z);tu(on||ni?H:R),bt&&ge<1&&on||ht(Ht+(ge===1&&!ni?Rt:0))}}C&&!Mt.tween&&!yi&&!$h&&Lt.restart(!0),f&&(ln||D&&ge&&(ge<1||!Q_))&&rf(f.targets).forEach(function(_i){return _i.classList[on||D?"add":"remove"](f.className)}),c&&!I&&!Ft&&c(V),In&&!yi?(I&&(Ci&&(Pe==="complete"?a.pause().totalProgress(1):Pe==="reset"?a.restart(!0).pause():Pe==="restart"?a.restart(!0):a[Pe]()),c&&c(V)),(ln||!Q_)&&(d&&ln&&J_(V,d),z[Se]&&J_(V,z[Se]),D&&(ge===1?V.kill(!1,1):z[Se]=0),ln||(Se=ge===1?1:3,z[Se]&&J_(V,z[Se]))),T&&!on&&Math.abs(V.getVelocity())>(Ac(T)?T:2500)&&(gc(V.callbackAnimation),X?X.progress(1):gc(a,Pe==="reverse"?1:!ge,1))):I&&c&&!yi&&c(V)}if(It){var vn=L?de/L.duration()*(L._caScrollDist||0):de;At(vn+(lt._isFlipped?1:0)),It(vn)}kt&&kt(-de/L.duration()*(L._caScrollDist||0))}},V.enable=function(Ft,he){V.enabled||(V.enabled=!0,si(G,"resize",Cc),$||si(G,"scroll",Hl),B&&si(s,"refreshInit",B),Ft!==!1&&(V.progress=it=0,Qt=Le=Tt=mt()),he!==!1&&V.refresh())},V.getTween=function(Ft){return Ft&&Mt?Mt.tween:X},V.setPositions=function(Ft,he,oe,de){if(L){var _n=L.scrollTrigger,ge=L.duration(),sn=_n.end-_n.start;Ft=_n.start+sn*Ft/ge,he=_n.start+sn*he/ge}V.refresh(!1,!1,{start:E1(Ft,oe&&!!V._startClamp),end:E1(he,oe&&!!V._endClamp)},de),V.update()},V.adjustPinSpacing=function(Ft){if(Wt&&Ft){var he=Wt.indexOf(k.d)+1;Wt[he]=parseFloat(Wt[he])+Ft+Kn,Wt[1]=parseFloat(Wt[1])+Ft+Kn,tu(Wt)}},V.disable=function(Ft,he){if(Ft!==!1&&V.revert(!0,!0),V.enabled&&(V.enabled=V.isActive=!1,he||X&&X.pause(),Et=0,Pt&&(Pt.uncache=1),B&&ai(s,"refreshInit",B),Lt&&(Lt.pause(),Mt.tween&&Mt.tween.kill()&&(Mt.tween=0)),!$)){for(var oe=Ue.length;oe--;)if(Ue[oe].scroller===G&&Ue[oe]!==V)return;ai(G,"resize",Cc),$||ai(G,"scroll",Hl)}},V.kill=function(Ft,he){V.disable(Ft,he),X&&!he&&X.kill(),h&&delete v0[h];var oe=Ue.indexOf(V);oe>=0&&Ue.splice(oe,1),oe===zi&&Sd>0&&zi--,oe=0,Ue.forEach(function(de){return de.scroller===V.scroller&&(oe=1)}),oe||Fi||(V.scroll.rec=0),a&&(a.scrollTrigger=null,Ft&&a.revert({kill:!1}),he||a.kill()),_e&&[_e,se,lt,Y].forEach(function(de){return de.parentNode&&de.parentNode.removeChild(de)}),kc===V&&(kc=0),x&&(Pt&&(Pt.uncache=1),oe=0,Ue.forEach(function(de){return de.pin===x&&oe++}),oe||(Pt.spacer=0)),i.onKill&&i.onKill(V)},Ue.push(V),V.enable(!1,!1),le&&le(V),a&&a.add&&!ce){var Te=V.update;V.update=function(){V.update=Te,Oe.cache++,Yt||ae||V.refresh()},te.delayedCall(.01,V.update),ce=.01,Yt=ae=0}else V.refresh();x&&UN()},s.register=function(i){return Vl||(te=i||zT(),PT()&&window.document&&s.enable(),Vl=Tc),Vl},s.defaults=function(i){if(i)for(var a in i)id[a]=i[a];return id},s.disable=function(i,a){Tc=0,Ue.forEach(function(c){return c[a?"kill":"disable"](i)}),ai(Ne,"wheel",Hl),ai(mn,"scroll",Hl),clearInterval(Jh),ai(mn,"touchcancel",da),ai(en,"touchstart",da),ed(ai,mn,"pointerdown,touchstart,mousedown",T1),ed(ai,mn,"pointerup,touchend,mouseup",b1),Bd.kill(),td(ai);for(var l=0;l<Oe.length;l+=3)nd(ai,Oe[l],Oe[l+1]),nd(ai,Oe[l],Oe[l+2])},s.enable=function(){if(Ne=window,mn=document,vr=mn.documentElement,en=mn.body,te&&(rf=te.utils.toArray,Fc=te.utils.clamp,_0=te.core.context||da,j_=te.core.suppressOverwrites||da,rv=Ne.history.scrollRestoration||"auto",x0=Ne.pageYOffset||0,te.core.globals("ScrollTrigger",s),en)){Tc=1,$l=document.createElement("div"),$l.style.height="100vh",$l.style.position="absolute",YT(),TN(),Bn.register(te),s.isTouch=Bn.isTouch,Ps=Bn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),m0=Bn.isTouch===1,si(Ne,"wheel",Hl),iv=[Ne,mn,vr,en],te.matchMedia?(s.matchMedia=function(d){var _=te.matchMedia(),v;for(v in d)_.add(v,d[v]);return _},te.addEventListener("matchMediaInit",function(){XT(),cv()}),te.addEventListener("matchMediaRevert",function(){return kT()}),te.addEventListener("matchMedia",function(){Lo(0,1),Xo("matchMedia")}),te.matchMedia().add("(orientation: portrait)",function(){return $_(),$_})):console.warn("Requires GSAP 3.11.0 or later"),$_(),si(mn,"scroll",Hl);var i=en.hasAttribute("style"),a=en.style,l=a.borderTopStyle,c=te.core.Animation.prototype,f,h;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",f=Ka(en),Jn.m=Math.round(f.top+Jn.sc())||0,Ii.m=Math.round(f.left+Ii.sc())||0,l?a.borderTopStyle=l:a.removeProperty("border-top-style"),i||(en.setAttribute("style",""),en.removeAttribute("style")),Jh=setInterval(R1,250),te.delayedCall(.5,function(){return $h=0}),si(mn,"touchcancel",da),si(en,"touchstart",da),ed(si,mn,"pointerdown,touchstart,mousedown",T1),ed(si,mn,"pointerup,touchend,mouseup",b1),p0=te.utils.checkPrefix("transform"),yd.push(p0),Vl=Mi(),Bd=te.delayedCall(.2,Lo).pause(),Gl=[mn,"visibilitychange",function(){var d=Ne.innerWidth,_=Ne.innerHeight;mn.hidden?(S1=d,y1=_):(S1!==d||y1!==_)&&Cc()},mn,"DOMContentLoaded",Lo,Ne,"load",Lo,Ne,"resize",Cc],td(si),Ue.forEach(function(d){return d.enable(0,1)}),h=0;h<Oe.length;h+=3)nd(ai,Oe[h],Oe[h+1]),nd(ai,Oe[h],Oe[h+2])}},s.config=function(i){"limitCallbacks"in i&&(Q_=!!i.limitCallbacks);var a=i.syncInterval;a&&clearInterval(Jh)||(Jh=a)&&setInterval(R1,a),"ignoreMobileResize"in i&&(m0=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(td(ai)||td(si,i.autoRefreshEvents||"none"),LT=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,a){var l=ji(i),c=Oe.indexOf(l),f=Go(l);~c&&Oe.splice(c,f?6:2),a&&(f?Ma.unshift(Ne,a,en,a,vr,a):Ma.unshift(l,a))},s.clearMatchMedia=function(i){Ue.forEach(function(a){return a._ctx&&a._ctx.query===i&&a._ctx.kill(!0,!0)})},s.isInViewport=function(i,a,l){var c=(_r(i)?ji(i):i).getBoundingClientRect(),f=c[l?Fo:Bo]*a||0;return l?c.right-f>0&&c.left+f<Ne.innerWidth:c.bottom-f>0&&c.top+f<Ne.innerHeight},s.positionInViewport=function(i,a,l){_r(i)&&(i=ji(i));var c=i.getBoundingClientRect(),f=c[l?Fo:Bo],h=a==null?f/2:a in Hd?Hd[a]*f:~a.indexOf("%")?parseFloat(a)*f/100:parseFloat(a)||0;return l?(c.left+h)/Ne.innerWidth:(c.top+h)/Ne.innerHeight},s.killAll=function(i){if(Ue.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),i!==!0){var a=ko.killAll||[];ko={},a.forEach(function(l){return l()})}},s})();He.version="3.14.2";He.saveStyles=function(s){return s?rf(s).forEach(function(t){if(t&&t.style){var e=mr.indexOf(t);e>=0&&mr.splice(e,5),mr.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),te.core.getCache(t),_0())}}):mr};He.revert=function(s,t){return cv(!s,t)};He.create=function(s,t){return new He(s,t)};He.refresh=function(s){return s?Cc(!0):(Vl||He.register())&&Lo(!0)};He.update=function(s){return++Oe.cache&&es(s===!0?2:0)};He.clearScrollMemory=WT;He.maxScroll=function(s,t){return xa(s,t?Ii:Jn)};He.getScrollFunc=function(s,t){return Qs(ji(s),t?Ii:Jn)};He.getById=function(s){return v0[s]};He.getAll=function(){return Ue.filter(function(s){return s.vars.id!=="ScrollSmoother"})};He.isScrolling=function(){return!!qr};He.snapDirectional=uv;He.addEventListener=function(s,t){var e=ko[s]||(ko[s]=[]);~e.indexOf(t)||e.push(t)};He.removeEventListener=function(s,t){var e=ko[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};He.batch=function(s,t){var e=[],i={},a=t.interval||.016,l=t.batchMax||1e9,c=function(d,_){var v=[],g=[],x=te.delayedCall(a,function(){_(v,g),v=[],g=[]}).pause();return function(y){v.length||x.restart(!0),v.push(y.trigger),g.push(y),l<=v.length&&x.progress(1)}},f;for(f in t)i[f]=f.substr(0,2)==="on"&&Ti(t[f])&&f!=="onRefreshInit"?c(f,t[f]):t[f];return Ti(l)&&(l=l(),si(He,"refresh",function(){return l=t.batchMax()})),rf(s).forEach(function(h){var d={};for(f in i)d[f]=i[f];d.trigger=h,e.push(He.create(d))}),e};var O1=function(t,e,i,a){return e>a?t(a):e<0&&t(0),i>a?(a-e)/(i-e):i<0?e/(e-i):1},eg=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Bn.isTouch?" pinch-zoom":""):"none",t===vr&&s(en,e)},od={auto:1,scroll:1},zN=function(t){var e=t.event,i=t.target,a=t.axis,l=(e.changedTouches?e.changedTouches[0]:e).target,c=l._gsap||te.core.getCache(l),f=Mi(),h;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==en&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(od[(h=kr(l)).overflowY]||od[h.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==i&&!Go(l)&&(od[(h=kr(l)).overflowY]||od[h.overflowX]),c._isScrollT=f}(c._isScroll||a==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},ZT=function(t,e,i,a){return Bn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:a=a&&zN,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return i&&si(mn,Bn.eventTypes[0],z1,!1,!0)},onDisable:function(){return ai(mn,Bn.eventTypes[0],z1,!0)}})},FN=/(input|label|select|textarea)/i,P1,z1=function(t){var e=FN.test(t.target.tagName);(e||P1)&&(t._gsapAllow=!0,P1=e)},BN=function(t){Ao(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,a=e.momentum,l=e.allowNestedScroll,c=e.onRelease,f,h,d=ji(t.target)||vr,_=te.core.globals().ScrollSmoother,v=_&&_.get(),g=Ps&&(t.content&&ji(t.content)||v&&t.content!==!1&&!v.smooth()&&v.content()),x=Qs(d,Jn),y=Qs(d,Ii),E=1,S=(Bn.isTouch&&Ne.visualViewport?Ne.visualViewport.scale*Ne.visualViewport.width:Ne.outerWidth)/Ne.innerWidth,M=0,A=Ti(a)?function(){return a(f)}:function(){return a||2.8},D,C,P=ZT(d,t.type,!0,l),O=function(){return C=!1},L=da,T=da,w=function(){h=xa(d,Jn),T=Fc(Ps?1:0,h),i&&(L=Fc(0,xa(d,Ii))),D=Io},k=function(){g._gsap.y=bc(parseFloat(g._gsap.y)+x.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},I=function(){if(C){requestAnimationFrame(O);var tt=bc(f.deltaY/2),ct=T(x.v-tt);if(g&&ct!==x.v+x.offset){x.offset=ct-x.v;var V=bc((parseFloat(g&&g._gsap.y)||0)-x.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+V+", 0, 1)",g._gsap.y=V+"px",x.cacheID=Oe.cache,es()}return!0}x.offset&&k(),C=!0},G,J,$,Q,z=function(){w(),G.isActive()&&G.vars.scrollY>h&&(x()>h?G.progress(1)&&x(h):G.resetTo("scrollY",h))};return g&&te.set(g,{y:"+=0"}),t.ignoreCheck=function(F){return Ps&&F.type==="touchmove"&&I()||E>1.05&&F.type!=="touchstart"||f.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){C=!1;var F=E;E=bc((Ne.visualViewport&&Ne.visualViewport.scale||1)/S),G.pause(),F!==E&&eg(d,E>1.01?!0:i?!1:"x"),J=y(),$=x(),w(),D=Io},t.onRelease=t.onGestureStart=function(F,tt){if(x.offset&&k(),!tt)Q.restart(!0);else{Oe.cache++;var ct=A(),V,B;i&&(V=y(),B=V+ct*.05*-F.velocityX/.227,ct*=O1(y,V,B,xa(d,Ii)),G.vars.scrollX=L(B)),V=x(),B=V+ct*.05*-F.velocityY/.227,ct*=O1(x,V,B,xa(d,Jn)),G.vars.scrollY=T(B),G.invalidate().duration(ct).play(.01),(Ps&&G.vars.scrollY>=h||V>=h-1)&&te.to({},{onUpdate:z,duration:ct})}c&&c(F)},t.onWheel=function(){G._ts&&G.pause(),Mi()-M>1e3&&(D=0,M=Mi())},t.onChange=function(F,tt,ct,V,B){if(Io!==D&&w(),tt&&i&&y(L(V[2]===tt?J+(F.startX-F.x):y()+tt-V[1])),ct){x.offset&&k();var K=B[2]===ct,vt=K?$+F.startY-F.y:x()+ct-B[1],Tt=T(vt);K&&vt!==Tt&&($+=Tt-vt),x(Tt)}(ct||tt)&&es()},t.onEnable=function(){eg(d,i?!1:"x"),He.addEventListener("refresh",z),si(Ne,"resize",z),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=y.smooth=!1),P.enable()},t.onDisable=function(){eg(d,!0),ai(Ne,"resize",z),He.removeEventListener("refresh",z),P.kill()},t.lockAxis=t.lockAxis!==!1,f=new Bn(t),f.iOS=Ps,Ps&&!x()&&x(1),Ps&&te.ticker.add(da),Q=f._dc,G=te.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qT(x,x(),function(){return G.pause()})},onUpdate:es,onComplete:Q.vars.onComplete}),f};He.sort=function(s){if(Ti(s))return Ue.sort(s);var t=Ne.pageYOffset||0;return He.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Ne.innerHeight}),Ue.sort(s||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};He.observe=function(s){return new Bn(s)};He.normalizeScroll=function(s){if(typeof s>"u")return Pi;if(s===!0&&Pi)return Pi.enable();if(s===!1){Pi&&Pi.kill(),Pi=s;return}var t=s instanceof Bn?s:BN(s);return Pi&&Pi.target===t.target&&Pi.kill(),Go(t.target)&&(Pi=t),t};He.core={_getVelocityProp:d0,_inputObserver:ZT,_scrollers:Oe,_proxies:Ma,bridge:{ss:function(){qr||Xo("scrollStart"),qr=Mi()},ref:function(){return yi}}};zT()&&te.registerPlugin(He);const Ed={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ff{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const IN=new B0(-1,1,1,-1,0,1);class HN extends ir{constructor(){super(),this.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pi([0,2,0,0,2,0],2))}}const VN=new HN;class jT{constructor(t){this._mesh=new br(VN,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,IN)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class GN extends ff{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof $n?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rd.clone(t.uniforms),this.material=new $n({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new jT(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class F1 extends ff{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const a=t.getContext(),l=t.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let c,f;this.inverse?(c=0,f=1):(c=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,c,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class kN extends ff{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class XN{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new qt);this._width=i.width,this._height=i.height,e=new Qi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Er}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new GN(Ed),this.copyPass.material.blending=Sa,this.timer=new s2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let a=0,l=this.passes.length;a<l;a++){const c=this.passes[a];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),c.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),c.needsSwap){if(i){const f=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),h.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}F1!==void 0&&(c instanceof F1?i=!0:c instanceof kN&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(i,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class WN extends ff{constructor(t,e,i=null,a=null,l=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ie}render(t,e,i){const a=t.autoClear;t.autoClear=!1;let l,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(l=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),t.autoClear=a}}const YN={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class pu extends ff{constructor(t,e=1,i,a){super(),this.strength=e,this.radius=i,this.threshold=a,this.resolution=t!==void 0?new qt(t.x,t.y):new qt(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Qi(l,c,{type:Er}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new Qi(l,c,{type:Er});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new Qi(l,c,{type:Er});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),l=Math.round(l/2),c=Math.round(c/2)}const f=YN;this.highPassUniforms=Rd.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $n({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new qt(1/l,1/c),l=Math.round(l/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new nt(1,1,1),new nt(1,1,1),new nt(1,1,1),new nt(1,1,1),new nt(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rd.clone(Ed.uniforms),this.blendMaterial=new $n({uniforms:this.copyUniforms,vertexShader:Ed.vertexShader,fragmentShader:Ed.fragmentShader,premultipliedAlpha:!0,blending:ql,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new kd,this._fsQuad=new jT(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),a=Math.round(e/2);this.renderTargetBright.setSize(i,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(i,a),this.renderTargetsVertical[l].setSize(i,a),this.separableBlurMaterials[l].uniforms.invSize.value=new qt(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(t,e,i,a,l){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const c=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),l&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[h].uniforms.direction.value=pu.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[h]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=pu.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[h]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=c}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);return new $n({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new qt(.5,.5)},direction:{value:new qt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new $n({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}pu.BlurDirectionX=new qt(1,0);pu.BlurDirectionY=new qt(0,1);zd.registerPlugin(He);const qN=()=>{const s=Si.useRef(null),t=Si.useRef(null),e=Si.useRef(null),i=Si.useRef(null),a=Si.useRef(null),l=Si.useRef(null),c=Si.useRef({x:0,y:30,z:100});Si.useRef({x:0,y:0,z:0});const[f,h]=Si.useState(0),[d,_]=Si.useState(1),[v,g]=Si.useState(!1),x=2,y=Si.useRef({scene:null,camera:null,renderer:null,composer:null,stars:[],nebula:null,mountains:[],animationId:null,targetCameraX:0,targetCameraY:30,targetCameraZ:100,locations:[]});Si.useEffect(()=>{const M=()=>{const{current:T}=y;T.scene=new oR,T.scene.fog=new N0(0,25e-5),T.camera=new Vr(75,window.innerWidth/window.innerHeight,.1,2e3),T.camera.position.z=100,T.camera.position.y=20,T.renderer=new eL({canvas:t.current,antialias:!0,alpha:!0}),T.renderer.setSize(window.innerWidth,window.innerHeight),T.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.renderer.toneMapping=E0,T.renderer.toneMappingExposure=.5,T.composer=new XN(T.renderer);const w=new WN(T.scene,T.camera);T.composer.addPass(w);const k=new pu(new qt(window.innerWidth,window.innerHeight),.8,.4,.85);T.composer.addPass(k),A(),D(),C(),P(),E(),O(),g(!0)},A=()=>{const{current:T}=y,w=5e3;for(let k=0;k<3;k++){const I=new ir,G=new Float32Array(w*3),J=new Float32Array(w*3),$=new Float32Array(w);for(let F=0;F<w;F++){const tt=200+Math.random()*800,ct=Math.random()*Math.PI*2,V=Math.acos(Math.random()*2-1);G[F*3]=tt*Math.sin(V)*Math.cos(ct),G[F*3+1]=tt*Math.sin(V)*Math.sin(ct),G[F*3+2]=tt*Math.cos(V);const B=new Ie,K=Math.random();K<.7?B.setHSL(0,0,.8+Math.random()*.2):K<.9?B.setHSL(.08,.5,.8):B.setHSL(.6,.5,.8),J[F*3]=B.r,J[F*3+1]=B.g,J[F*3+2]=B.b,$[F]=Math.random()*2+.5}I.setAttribute("position",new Tr(G,3)),I.setAttribute("color",new Tr(J,3)),I.setAttribute("size",new Tr($,1));const Q=new $n({uniforms:{time:{value:0},depth:{value:k}},vertexShader:`
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            uniform float depth;
            
            void main() {
              vColor = color;
              vec3 pos = position;
              
              // Slow rotation based on depth
              float angle = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              pos.xy = rot * pos.xy;
              
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,fragmentShader:`
            varying vec3 vColor;
            
            void main() {
              float dist = length(gl_PointCoord - vec2(0.5));
              if (dist > 0.5) discard;
              
              float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
              gl_FragColor = vec4(vColor, opacity);
            }
          `,transparent:!0,blending:ql,depthWrite:!1}),z=new vR(I,Q);T.scene.add(z),T.stars.push(z)}},D=()=>{const{current:T}=y,w=new uf(8e3,4e3,100,100),k=new $n({uniforms:{time:{value:0},color1:{value:new Ie(13311)},color2:{value:new Ie(16711782)},opacity:{value:.3}},vertexShader:`
          varying vec2 vUv;
          varying float vElevation;
          uniform float time;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            
            float elevation = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
            pos.z += elevation;
            vElevation = elevation;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vElevation;
          
          void main() {
            float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);
            
            float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            alpha *= 1.0 + vElevation * 0.01;
            
            gl_FragColor = vec4(color, alpha);
          }
        `,transparent:!0,blending:ql,side:ia,depthWrite:!1}),I=new br(w,k);I.position.z=-1050,I.rotation.x=0,T.scene.add(I),T.nebula=I},C=()=>{const{current:T}=y;[{distance:-50,height:60,color:1710638,opacity:1},{distance:-100,height:80,color:1450302,opacity:.8},{distance:-150,height:100,color:996448,opacity:.6},{distance:-200,height:120,color:673384,opacity:.4}].forEach((k,I)=>{const G=[];for(let tt=0;tt<=50;tt++){const ct=(tt/50-.5)*1e3,V=Math.sin(tt*.1)*k.height+Math.sin(tt*.05)*k.height*.5+Math.random()*k.height*.2-100;G.push(new qt(ct,V))}G.push(new qt(5e3,-300)),G.push(new qt(-5e3,-300));const $=new dE(G),Q=new z0($),z=new kd({color:k.color,transparent:!0,opacity:k.opacity,side:ia}),F=new br(Q,z);F.position.z=k.distance,F.position.y=k.distance,F.userData={baseZ:k.distance,index:I},T.scene.add(F),T.mountains.push(F)})},P=()=>{const{current:T}=y,w=new F0(600,32,32),k=new $n({uniforms:{time:{value:0}},vertexShader:`
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float time;
          
          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            vec3 atmosphere = vec3(0.3, 0.6, 1.0) * intensity;
            
            float pulse = sin(time * 2.0) * 0.1 + 0.9;
            atmosphere *= pulse;
            
            gl_FragColor = vec4(atmosphere, intensity * 0.25);
          }
        `,side:Hi,blending:ql,transparent:!0}),I=new br(w,k);T.scene.add(I)},O=()=>{const{current:T}=y;T.animationId=requestAnimationFrame(O);const w=Date.now()*.001;if(T.stars.forEach((k,I)=>{k.material.uniforms&&(k.material.uniforms.time.value=w)}),T.nebula&&T.nebula.material.uniforms&&(T.nebula.material.uniforms.time.value=w*.5),T.camera&&T.targetCameraX!==void 0){c.current.x+=(T.targetCameraX-c.current.x)*.05,c.current.y+=(T.targetCameraY-c.current.y)*.05,c.current.z+=(T.targetCameraZ-c.current.z)*.05;const I=Math.sin(w*.1)*2,G=Math.cos(w*.15)*1;T.camera.position.x=c.current.x+I,T.camera.position.y=c.current.y+G,T.camera.position.z=c.current.z,T.camera.lookAt(0,10,-600)}T.mountains.forEach((k,I)=>{const G=1+I*.5;k.position.x=Math.sin(w*.1)*2*G,k.position.y=50+Math.cos(w*.15)*1*G}),T.composer&&T.composer.render()};M();const L=()=>{const{current:T}=y;T.camera&&T.renderer&&T.composer&&(T.camera.aspect=window.innerWidth/window.innerHeight,T.camera.updateProjectionMatrix(),T.renderer.setSize(window.innerWidth,window.innerHeight),T.composer.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",L),()=>{const{current:T}=y;T.animationId&&cancelAnimationFrame(T.animationId),window.removeEventListener("resize",L),T.stars.forEach(w=>{w.geometry.dispose(),w.material.dispose()}),T.mountains.forEach(w=>{w.geometry.dispose(),w.material.dispose()}),T.nebula&&(T.nebula.geometry.dispose(),T.nebula.material.dispose()),T.renderer&&T.renderer.dispose()}},[]);const E=()=>{const{current:M}=y,A=[];M.mountains.forEach((D,C)=>{A[C]=D.position.z}),M.locations=A};Si.useEffect(()=>{if(!v)return;zd.set([l.current,e.current,i.current,a.current],{visibility:"visible"});const M=zd.timeline();if(l.current&&M.from(l.current,{x:-100,opacity:0,duration:1,ease:"power3.out"}),e.current){const A=e.current.querySelectorAll(".title-char");M.from(A,{y:200,opacity:0,duration:1.5,stagger:.05,ease:"power4.out"},"-=0.5")}if(i.current){const A=i.current.querySelectorAll(".subtitle-line");M.from(A,{y:50,opacity:0,duration:1,stagger:.2,ease:"power3.out"},"-=0.8")}return a.current&&M.from(a.current,{opacity:0,y:50,duration:1,ease:"power2.out"},"-=0.5"),()=>{M.kill()}},[v]),Si.useEffect(()=>{const M=()=>{const A=window.scrollY,D=window.innerHeight,P=document.documentElement.scrollHeight-D,O=Math.min(A/P,1);h(O);const L=Math.floor(O*x);_(L);const{current:T}=y,k=O*x%1,I=[{x:0,y:30,z:300},{x:0,y:40,z:-50},{x:0,y:50,z:-700}],G=I[L]||I[0],J=I[L+1]||G;T.targetCameraX=G.x+(J.x-G.x)*k,T.targetCameraY=G.y+(J.y-G.y)*k,T.targetCameraZ=G.z+(J.z-G.z)*k,T.mountains.forEach(($,Q)=>{const z=1+Q*.9,F=$.userData.baseZ+A*z*.5;T.nebula.position.z=F+O*z*.01-100,$.userData.targetZ=F,$.position.z,O>.7&&($.position.z=6e5),O<.7&&($.position.z=T.locations[Q])}),T.nebula.position.z=T.mountains[3].position.z};return window.addEventListener("scroll",M),M(),()=>window.removeEventListener("scroll",M)},[x]);const S=M=>M.split("").map((A,D)=>$e.jsx("span",{className:"title-char",children:A},D));return $e.jsxs("div",{ref:s,className:"hero-container cosmos-style relative w-full h-[300vh] bg-black text-white",children:[$e.jsx("canvas",{ref:t,className:"hero-canvas fixed top-0 left-0 w-full h-screen z-0"}),$e.jsxs("div",{ref:l,className:"side-menu fixed top-0 left-0 h-screen w-16 flex flex-col items-center justify-between py-10 z-50 border-r border-white/10 hide-scrollbar",style:{visibility:"hidden"},children:[$e.jsxs("div",{className:"menu-icon flex flex-col gap-1.5 cursor-pointer p-4 group",children:[$e.jsx("span",{className:"w-8 h-[2px] bg-white transition-all group-hover:w-10"}),$e.jsx("span",{className:"w-6 h-[2px] bg-white transition-all group-hover:w-8"}),$e.jsx("span",{className:"w-4 h-[2px] bg-white transition-all group-hover:w-6"})]}),$e.jsx("div",{className:"vertical-text text-xs tracking-[0.3em] [writing-mode:vertical-rl] rotate-180 uppercase text-white/50 font-light",children:"SPACE"})]}),$e.jsxs("div",{className:"relative z-10 w-full",children:[$e.jsxs("div",{className:"hero-content cosmos-content h-screen flex flex-col justify-center px-24 max-w-7xl mx-auto items-start sticky top-0",children:[$e.jsx("h1",{ref:e,className:"hero-title text-[8rem] font-bold leading-none tracking-tighter mix-blend-difference overflow-hidden flex",children:S("HORIZON")}),$e.jsxs("div",{ref:i,className:"hero-subtitle cosmos-subtitle mt-8 text-xl text-white/70 max-w-md font-light tracking-wide",children:[$e.jsx("p",{className:"subtitle-line",children:"Where vision meets reality,"}),$e.jsx("p",{className:"subtitle-line",children:"we shape the future of tomorrow"})]})]}),$e.jsxs("div",{ref:a,className:"scroll-progress fixed right-10 bottom-10 flex flex-col items-end z-50 gap-4",style:{visibility:"hidden"},children:[$e.jsx("div",{className:"scroll-text text-xs tracking-widest text-white/50 uppercase",children:"SCROLL"}),$e.jsx("div",{className:"progress-track w-1 h-32 bg-white/10 rounded-full overflow-hidden",children:$e.jsx("div",{className:"progress-fill w-full bg-white transition-all duration-300 rounded-full",style:{height:`${f*100}%`}})}),$e.jsxs("div",{className:"section-counter text-sm font-mono text-white/60",children:[String(d).padStart(2,"0")," / ",String(x).padStart(2,"0")]})]}),$e.jsx("div",{className:"scroll-sections mt-[100vh]",children:[...Array(2)].map((M,A)=>{const D={0:"HORIZON",1:"COSMOS",2:"INFINITY"},C={0:{line1:"Where vision meets reality,",line2:"we shape the future of tomorrow"},1:{line1:"Beyond the boundaries of imagination,",line2:"lies the universe of possibilities"},2:{line1:"In the space between thought and creation,",line2:"we find the essence of true innovation"}};return $e.jsxs("section",{className:"content-section h-screen flex flex-col justify-center px-24 max-w-7xl mx-auto items-start relative pointer-events-none",children:[$e.jsx("h1",{className:"hero-title text-[8rem] font-bold leading-none tracking-tighter mix-blend-difference",children:D[A+1]||"DEFAULT"}),$e.jsxs("div",{className:"hero-subtitle cosmos-subtitle mt-8 text-xl text-white/70 max-w-md font-light tracking-wide",children:[$e.jsx("p",{className:"subtitle-line",children:C[A+1].line1}),$e.jsx("p",{className:"subtitle-line",children:C[A+1].line2})]})]},A)})})]})]})},ZN=()=>$e.jsx(qN,{});function jN(){return $e.jsx("div",{className:"bg-black min-h-screen",children:$e.jsx(ZN,{})})}uC.createRoot(document.getElementById("root")).render($e.jsx(Si.StrictMode,{children:$e.jsx(jN,{})}));
