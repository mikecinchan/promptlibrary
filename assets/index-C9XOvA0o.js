(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Nd={exports:{}},Tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function US(){if(xy)return Tl;xy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Tl.Fragment=t,Tl.jsx=n,Tl.jsxs=n,Tl}var ky;function LS(){return ky||(ky=1,Nd.exports=US()),Nd.exports}var ht=LS(),Vd={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy;function zS(){if(Uy)return wt;Uy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),R=Symbol.iterator;function D(S){return S===null||typeof S!="object"?null:(S=R&&S[R]||S["@@iterator"],typeof S=="function"?S:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,J={};function Z(S,K,et){this.props=S,this.context=K,this.refs=J,this.updater=et||q}Z.prototype.isReactComponent={},Z.prototype.setState=function(S,K){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,K,"setState")},Z.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function pt(){}pt.prototype=Z.prototype;function ot(S,K,et){this.props=S,this.context=K,this.refs=J,this.updater=et||q}var st=ot.prototype=new pt;st.constructor=ot,$(st,Z.prototype),st.isPureReactComponent=!0;var dt=Array.isArray,mt={H:null,A:null,T:null,S:null,V:null},bt=Object.prototype.hasOwnProperty;function V(S,K,et,W,ct,Ct){return et=Ct.ref,{$$typeof:r,type:S,key:K,ref:et!==void 0?et:null,props:Ct}}function b(S,K){return V(S.type,K,void 0,void 0,void 0,S.props)}function I(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function N(S){var K={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(et){return K[et]})}var M=/\/+/g;function x(S,K){return typeof S=="object"&&S!==null&&S.key!=null?N(""+S.key):K.toString(36)}function C(){}function Ae(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(C,C):(S.status="pending",S.then(function(K){S.status==="pending"&&(S.status="fulfilled",S.value=K)},function(K){S.status==="pending"&&(S.status="rejected",S.reason=K)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function ee(S,K,et,W,ct){var Ct=typeof S;(Ct==="undefined"||Ct==="boolean")&&(S=null);var Tt=!1;if(S===null)Tt=!0;else switch(Ct){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(S.$$typeof){case r:case t:Tt=!0;break;case T:return Tt=S._init,ee(Tt(S._payload),K,et,W,ct)}}if(Tt)return ct=ct(S),Tt=W===""?"."+x(S,0):W,dt(ct)?(et="",Tt!=null&&(et=Tt.replace(M,"$&/")+"/"),ee(ct,K,et,"",function(Kn){return Kn})):ct!=null&&(I(ct)&&(ct=b(ct,et+(ct.key==null||S&&S.key===ct.key?"":(""+ct.key).replace(M,"$&/")+"/")+Tt)),K.push(ct)),1;Tt=0;var Oe=W===""?".":W+":";if(dt(S))for(var Zt=0;Zt<S.length;Zt++)W=S[Zt],Ct=Oe+x(W,Zt),Tt+=ee(W,K,et,Ct,ct);else if(Zt=D(S),typeof Zt=="function")for(S=Zt.call(S),Zt=0;!(W=S.next()).done;)W=W.value,Ct=Oe+x(W,Zt++),Tt+=ee(W,K,et,Ct,ct);else if(Ct==="object"){if(typeof S.then=="function")return ee(Ae(S),K,et,W,ct);throw K=String(S),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function H(S,K,et){if(S==null)return S;var W=[],ct=0;return ee(S,W,"","",function(Ct){return K.call(et,Ct,ct++)}),W}function nt(S){if(S._status===-1){var K=S._result;K=K(),K.then(function(et){(S._status===0||S._status===-1)&&(S._status=1,S._result=et)},function(et){(S._status===0||S._status===-1)&&(S._status=2,S._result=et)}),S._status===-1&&(S._status=0,S._result=K)}if(S._status===1)return S._result.default;throw S._result}var lt=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Pt(){}return wt.Children={map:H,forEach:function(S,K,et){H(S,function(){K.apply(this,arguments)},et)},count:function(S){var K=0;return H(S,function(){K++}),K},toArray:function(S){return H(S,function(K){return K})||[]},only:function(S){if(!I(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},wt.Component=Z,wt.Fragment=n,wt.Profiler=o,wt.PureComponent=ot,wt.StrictMode=s,wt.Suspense=g,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mt,wt.__COMPILER_RUNTIME={__proto__:null,c:function(S){return mt.H.useMemoCache(S)}},wt.cache=function(S){return function(){return S.apply(null,arguments)}},wt.cloneElement=function(S,K,et){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var W=$({},S.props),ct=S.key,Ct=void 0;if(K!=null)for(Tt in K.ref!==void 0&&(Ct=void 0),K.key!==void 0&&(ct=""+K.key),K)!bt.call(K,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&K.ref===void 0||(W[Tt]=K[Tt]);var Tt=arguments.length-2;if(Tt===1)W.children=et;else if(1<Tt){for(var Oe=Array(Tt),Zt=0;Zt<Tt;Zt++)Oe[Zt]=arguments[Zt+2];W.children=Oe}return V(S.type,ct,void 0,void 0,Ct,W)},wt.createContext=function(S){return S={$$typeof:f,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:u,_context:S},S},wt.createElement=function(S,K,et){var W,ct={},Ct=null;if(K!=null)for(W in K.key!==void 0&&(Ct=""+K.key),K)bt.call(K,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ct[W]=K[W]);var Tt=arguments.length-2;if(Tt===1)ct.children=et;else if(1<Tt){for(var Oe=Array(Tt),Zt=0;Zt<Tt;Zt++)Oe[Zt]=arguments[Zt+2];ct.children=Oe}if(S&&S.defaultProps)for(W in Tt=S.defaultProps,Tt)ct[W]===void 0&&(ct[W]=Tt[W]);return V(S,Ct,void 0,void 0,null,ct)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(S){return{$$typeof:p,render:S}},wt.isValidElement=I,wt.lazy=function(S){return{$$typeof:T,_payload:{_status:-1,_result:S},_init:nt}},wt.memo=function(S,K){return{$$typeof:_,type:S,compare:K===void 0?null:K}},wt.startTransition=function(S){var K=mt.T,et={};mt.T=et;try{var W=S(),ct=mt.S;ct!==null&&ct(et,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Pt,lt)}catch(Ct){lt(Ct)}finally{mt.T=K}},wt.unstable_useCacheRefresh=function(){return mt.H.useCacheRefresh()},wt.use=function(S){return mt.H.use(S)},wt.useActionState=function(S,K,et){return mt.H.useActionState(S,K,et)},wt.useCallback=function(S,K){return mt.H.useCallback(S,K)},wt.useContext=function(S){return mt.H.useContext(S)},wt.useDebugValue=function(){},wt.useDeferredValue=function(S,K){return mt.H.useDeferredValue(S,K)},wt.useEffect=function(S,K,et){var W=mt.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(S,K)},wt.useId=function(){return mt.H.useId()},wt.useImperativeHandle=function(S,K,et){return mt.H.useImperativeHandle(S,K,et)},wt.useInsertionEffect=function(S,K){return mt.H.useInsertionEffect(S,K)},wt.useLayoutEffect=function(S,K){return mt.H.useLayoutEffect(S,K)},wt.useMemo=function(S,K){return mt.H.useMemo(S,K)},wt.useOptimistic=function(S,K){return mt.H.useOptimistic(S,K)},wt.useReducer=function(S,K,et){return mt.H.useReducer(S,K,et)},wt.useRef=function(S){return mt.H.useRef(S)},wt.useState=function(S){return mt.H.useState(S)},wt.useSyncExternalStore=function(S,K,et){return mt.H.useSyncExternalStore(S,K,et)},wt.useTransition=function(){return mt.H.useTransition()},wt.version="19.1.0",wt}var Ly;function Sm(){return Ly||(Ly=1,Vd.exports=zS()),Vd.exports}var $e=Sm(),Md={exports:{}},Al={},Pd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy;function BS(){return zy||(zy=1,function(r){function t(H,nt){var lt=H.length;H.push(nt);t:for(;0<lt;){var Pt=lt-1>>>1,S=H[Pt];if(0<o(S,nt))H[Pt]=nt,H[lt]=S,lt=Pt;else break t}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var nt=H[0],lt=H.pop();if(lt!==nt){H[0]=lt;t:for(var Pt=0,S=H.length,K=S>>>1;Pt<K;){var et=2*(Pt+1)-1,W=H[et],ct=et+1,Ct=H[ct];if(0>o(W,lt))ct<S&&0>o(Ct,W)?(H[Pt]=Ct,H[ct]=lt,Pt=ct):(H[Pt]=W,H[et]=lt,Pt=et);else if(ct<S&&0>o(Ct,lt))H[Pt]=Ct,H[ct]=lt,Pt=ct;else break t}}return nt}function o(H,nt){var lt=H.sortIndex-nt.sortIndex;return lt!==0?lt:H.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],_=[],T=1,R=null,D=3,q=!1,$=!1,J=!1,Z=!1,pt=typeof setTimeout=="function"?setTimeout:null,ot=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;function dt(H){for(var nt=n(_);nt!==null;){if(nt.callback===null)s(_);else if(nt.startTime<=H)s(_),nt.sortIndex=nt.expirationTime,t(g,nt);else break;nt=n(_)}}function mt(H){if(J=!1,dt(H),!$)if(n(g)!==null)$=!0,bt||(bt=!0,x());else{var nt=n(_);nt!==null&&ee(mt,nt.startTime-H)}}var bt=!1,V=-1,b=5,I=-1;function N(){return Z?!0:!(r.unstable_now()-I<b)}function M(){if(Z=!1,bt){var H=r.unstable_now();I=H;var nt=!0;try{t:{$=!1,J&&(J=!1,ot(V),V=-1),q=!0;var lt=D;try{e:{for(dt(H),R=n(g);R!==null&&!(R.expirationTime>H&&N());){var Pt=R.callback;if(typeof Pt=="function"){R.callback=null,D=R.priorityLevel;var S=Pt(R.expirationTime<=H);if(H=r.unstable_now(),typeof S=="function"){R.callback=S,dt(H),nt=!0;break e}R===n(g)&&s(g),dt(H)}else s(g);R=n(g)}if(R!==null)nt=!0;else{var K=n(_);K!==null&&ee(mt,K.startTime-H),nt=!1}}break t}finally{R=null,D=lt,q=!1}nt=void 0}}finally{nt?x():bt=!1}}}var x;if(typeof st=="function")x=function(){st(M)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Ae=C.port2;C.port1.onmessage=M,x=function(){Ae.postMessage(null)}}else x=function(){pt(M,0)};function ee(H,nt){V=pt(function(){H(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(H){switch(D){case 1:case 2:case 3:var nt=3;break;default:nt=D}var lt=D;D=nt;try{return H()}finally{D=lt}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(H,nt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var lt=D;D=H;try{return nt()}finally{D=lt}},r.unstable_scheduleCallback=function(H,nt,lt){var Pt=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?Pt+lt:Pt):lt=Pt,H){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=lt+S,H={id:T++,callback:nt,priorityLevel:H,startTime:lt,expirationTime:S,sortIndex:-1},lt>Pt?(H.sortIndex=lt,t(_,H),n(g)===null&&H===n(_)&&(J?(ot(V),V=-1):J=!0,ee(mt,lt-Pt))):(H.sortIndex=S,t(g,H),$||q||($=!0,bt||(bt=!0,x()))),H},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(H){var nt=D;return function(){var lt=D;D=nt;try{return H.apply(this,arguments)}finally{D=lt}}}}(xd)),xd}var By;function jS(){return By||(By=1,Pd.exports=BS()),Pd.exports}var kd={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function qS(){if(jy)return Ye;jy=1;var r=Sm();function t(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)_+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,_,T){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:R==null?null:""+R,children:g,containerInfo:_,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ye.createPortal=function(g,_){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return u(g,_,null,T)},Ye.flushSync=function(g){var _=f.T,T=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=_,s.p=T,s.d.f()}},Ye.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(g,_))},Ye.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Ye.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var T=_.as,R=p(T,_.crossOrigin),D=typeof _.integrity=="string"?_.integrity:void 0,q=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;T==="style"?s.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:R,integrity:D,fetchPriority:q}):T==="script"&&s.d.X(g,{crossOrigin:R,integrity:D,fetchPriority:q,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Ye.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var T=p(_.as,_.crossOrigin);s.d.M(g,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(g)},Ye.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var T=_.as,R=p(T,_.crossOrigin);s.d.L(g,T,{crossOrigin:R,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Ye.preloadModule=function(g,_){if(typeof g=="string")if(_){var T=p(_.as,_.crossOrigin);s.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(g)},Ye.requestFormReset=function(g){s.d.r(g)},Ye.unstable_batchedUpdates=function(g,_){return g(_)},Ye.useFormState=function(g,_,T){return f.H.useFormState(g,_,T)},Ye.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ye.version="19.1.0",Ye}var qy;function HS(){if(qy)return kd.exports;qy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),kd.exports=qS(),kd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function FS(){if(Hy)return Al;Hy=1;var r=jS(),t=Sm(),n=HS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function g(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),e;if(d===l)return p(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,R=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),pt=Symbol.for("react.provider"),ot=Symbol.for("react.consumer"),st=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),mt=Symbol.for("react.suspense"),bt=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function x(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var C=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case Z:return"Profiler";case J:return"StrictMode";case mt:return"Suspense";case bt:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case st:return(e.displayName||"Context")+".Provider";case ot:return(e._context.displayName||"Context")+".Consumer";case dt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return i=e.displayName||null,i!==null?i:Ae(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return Ae(e(i))}catch{}}return null}var ee=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},Pt=[],S=-1;function K(e){return{current:e}}function et(e){0>S||(e.current=Pt[S],Pt[S]=null,S--)}function W(e,i){S++,Pt[S]=e.current,e.current=i}var ct=K(null),Ct=K(null),Tt=K(null),Oe=K(null);function Zt(e,i){switch(W(Tt,i),W(Ct,e),W(ct,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?uy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=uy(i),e=cy(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(ct),W(ct,e)}function Kn(){et(ct),et(Ct),et(Tt)}function Ji(e){e.memoizedState!==null&&W(Oe,e);var i=ct.current,a=cy(i,e.type);i!==a&&(W(Ct,e),W(ct,a))}function Ei(e){Ct.current===e&&(et(ct),et(Ct)),Oe.current===e&&(et(Oe),gl._currentValue=lt)}var Zr=Object.prototype.hasOwnProperty,Wr=r.unstable_scheduleCallback,Jr=r.unstable_cancelCallback,fo=r.unstable_shouldYield,iu=r.unstable_requestPaint,En=r.unstable_now,Oh=r.unstable_getCurrentPriorityLevel,mo=r.unstable_ImmediatePriority,$s=r.unstable_UserBlockingPriority,ts=r.unstable_NormalPriority,Nh=r.unstable_LowPriority,Zs=r.unstable_IdlePriority,po=r.log,ru=r.unstable_setDisableYieldValue,ae=null,Ht=null;function cn(e){if(typeof po=="function"&&ru(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(ae,e)}catch{}}var Ke=Math.clz32?Math.clz32:es,su=Math.log,Vh=Math.LN2;function es(e){return e>>>=0,e===0?32:31-(su(e)/Vh|0)|0}var ns=256,is=4194304;function kn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ws(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=kn(l):(v&=E,v!==0?h=kn(v):a||(a=E&~e,a!==0&&(h=kn(a))))):(E=l&~d,E!==0?h=kn(E):v!==0?h=kn(v):a||(a=l&~e,a!==0&&(h=kn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function rs(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function go(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var e=ns;return ns<<=1,(ns&4194048)===0&&(ns=256),e}function yo(){var e=is;return is<<=1,(is&62914560)===0&&(is=4194304),e}function Ti(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ai(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-Ke(a),Y=1<<F;E[F]=0,w[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~Y}l!==0&&Qn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Qn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ke(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Eo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ke(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function er(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:Dy(e.type))}function au(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ne=Math.random().toString(36).slice(2),Se="__reactFiber$"+ne,pe="__reactProps$"+ne,Tn="__reactContainer$"+ne,To="__reactEvents$"+ne,Mh="__reactListeners$"+ne,nr="__reactHandles$"+ne,ou="__reactResources$"+ne,ss="__reactMarker$"+ne;function ir(e){delete e[Se],delete e[pe],delete e[To],delete e[Mh],delete e[nr]}function Si(e){var i=e[Se];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Tn]||a[Se]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=my(e);e!==null;){if(a=e[Se])return a;e=my(e)}return i}e=a,a=e.parentNode}return null}function Yn(e){if(e=e[Se]||e[Tn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Xn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function tn(e){var i=e[ou];return i||(i=e[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function he(e){e[ss]=!0}var Ao=new Set,ta={};function Un(e,i){bi(e,i),bi(e+"Capture",i)}function bi(e,i){for(ta[e]=i,e=0;e<i.length;e++)Ao.add(i[e])}var lu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uu={},as={};function cu(e){return Zr.call(as,e)?!0:Zr.call(uu,e)?!1:lu.test(e)?as[e]=!0:(uu[e]=!0,!1)}function rr(e,i,a){if(cu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function $n(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Le(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var os,hu;function wi(e){if(os===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);os=i&&i[1]||"",hu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+os+e+hu}var ea=!1;function na(e,i){if(!e||ea)return"";ea=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(B){var z=B}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(B){z=B}e.call(Y.prototype)}}else{try{throw Error()}catch(B){z=B}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var w=v.split(`
`),L=E.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===L.length)for(l=w.length-1,h=L.length-1;1<=l&&0<=h&&w[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==L[h]){var F=`
`+w[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{ea=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wi(a):""}function So(e){switch(e.tag){case 26:case 27:case 5:return wi(e.type);case 16:return wi("Lazy");case 13:return wi("Suspense");case 19:return wi("SuspenseList");case 0:case 15:return na(e.type,!1);case 11:return na(e.type.render,!1);case 1:return na(e.type,!0);case 31:return wi("Activity");default:return""}}function ia(e){try{var i="";do i+=So(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function en(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ph(e){var i=bo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ra(e){e._valueTracker||(e._valueTracker=Ph(e))}function wo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=bo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xh=/[\n"\\]/g;function ge(e){return e.replace(xh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hn(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+en(i)):e.value!==""+en(i)&&(e.value=""+en(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?sr(e,v,en(i)):a!=null?sr(e,v,en(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+en(E):e.removeAttribute("name")}function us(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+en(a):"",i=i!=null?""+en(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function sr(e,i,a){i==="number"&&ls(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ri(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+en(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Kt(e,i,a){if(i!=null&&(i=""+en(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+en(a):""}function cs(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ee(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=en(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function An(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var hs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||hs.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Ro(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&fu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&fu(e,d,i[d])}function Io(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sa(e){return Uh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ii=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,Di=null;function Co(e){var i=Yn(e);if(i&&(e=i.stateNode)){var a=e[pe]||null;t:switch(e=i.stateNode,i.type){case"input":if(hn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[pe]||null;if(!h)throw Error(s(90));hn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&wo(l)}break t;case"textarea":Kt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ri(e,!!a.multiple,i,!1)}}}var Zn=!1;function du(e,i,a){if(Zn)return e(i,a);Zn=!0;try{var l=e(i);return l}finally{if(Zn=!1,(Ci!==null||Di!==null)&&(ac(),Ci&&(i=Ci,e=Di,Di=Ci=null,Co(i),e)))for(i=0;i<e.length;i++)Co(e[i])}}function fs(e,i){var a=e.stateNode;if(a===null)return null;var l=a[pe]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bn=!1;if(Ln)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){bn=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{bn=!1}var Wn=null,ar=null,Oi=null;function Do(){if(Oi)return Oi;var e,i=ar,a=i.length,l,h="value"in Wn?Wn.value:Wn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Oi=h.slice(e,1<l?1-l:void 0)}function Jn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Oo(){return!1}function Ne(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ti:Oo,this.isPropagationStopped=Oo,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=Ne(jt),ms=T({},jt,{view:0,detail:0}),mu=Ne(ms),oa,la,ei,ps=T({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(oa=e.screenX-ei.screenX,la=e.screenY-ei.screenY):la=oa=0,ei=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),wn=Ne(ps),pu=T({},ps,{dataTransfer:0}),Lh=Ne(pu),gs=T({},ms,{relatedTarget:0}),ua=Ne(gs),No=T({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),ca=Ne(No),gu=T({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ha=Ne(gu),zh=T({},jt,{data:0}),Vo=Ne(zh),_s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=yu[e])?!!i[e]:!1}function ys(){return Mo}var vu=T({},ms,{key:function(e){if(e.key){var i=_s[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_u[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fa=Ne(vu),Eu=T({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=Ne(Eu),Ni=T({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Tu=Ne(Ni),Au=T({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Su=Ne(Au),bu=T({},ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),da=Ne(bu),nn=T({},jt,{newState:0,oldState:0}),wu=Ne(nn),Ru=[9,13,27,32],ni=Ln&&"CompositionEvent"in window,c=null;Ln&&"documentMode"in document&&(c=document.documentMode);var m=Ln&&"TextEvent"in window&&!c,y=Ln&&(!ni||c&&8<c&&11>=c),A=" ",k=!1;function j(e,i){switch(e){case"keyup":return Ru.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xt=!1;function be(e,i){switch(e){case"compositionend":return tt(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return e=i.data,e===A&&k?null:e;default:return null}}function kt(e,i){if(xt)return e==="compositionend"||!ni&&j(e,i)?(e=Do(),Oi=ar=Wn=null,xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y&&i.locale!=="ko"?null:i.data;default:return null}}var Ve={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function we(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ve[e.type]:i==="textarea"}function Vi(e,i,a,l){Ci?Di?Di.push(l):Di=[l]:Ci=l,i=fc(i,"onChange"),0<i.length&&(a=new aa("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var ze=null,ii=null;function xo(e){ry(e,0)}function Iu(e){var i=Xn(e);if(wo(i))return e}function wp(e,i){if(e==="change")return i}var Rp=!1;if(Ln){var Bh;if(Ln){var jh="oninput"in document;if(!jh){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),jh=typeof Ip.oninput=="function"}Bh=jh}else Bh=!1;Rp=Bh&&(!document.documentMode||9<document.documentMode)}function Cp(){ze&&(ze.detachEvent("onpropertychange",Dp),ii=ze=null)}function Dp(e){if(e.propertyName==="value"&&Iu(ii)){var i=[];Vi(i,ii,e,Sn(e)),du(xo,i)}}function dA(e,i,a){e==="focusin"?(Cp(),ze=i,ii=a,ze.attachEvent("onpropertychange",Dp)):e==="focusout"&&Cp()}function mA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Iu(ii)}function pA(e,i){if(e==="click")return Iu(i)}function gA(e,i){if(e==="input"||e==="change")return Iu(i)}function _A(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fn=typeof Object.is=="function"?Object.is:_A;function ko(e,i){if(fn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Zr.call(i,h)||!fn(e[h],i[h]))return!1}return!0}function Op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,i){var a=Op(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Op(a)}}function Vp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Vp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ls(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ls(e.document)}return i}function qh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var yA=Ln&&"documentMode"in document&&11>=document.documentMode,ma=null,Hh=null,Uo=null,Fh=!1;function Pp(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fh||ma==null||ma!==ls(l)||(l=ma,"selectionStart"in l&&qh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Uo&&ko(Uo,l)||(Uo=l,l=fc(Hh,"onSelect"),0<l.length&&(i=new aa("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ma)))}function vs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var pa={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},Gh={},xp={};Ln&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function Es(e){if(Gh[e])return Gh[e];if(!pa[e])return e;var i=pa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in xp)return Gh[e]=i[a];return e}var kp=Es("animationend"),Up=Es("animationiteration"),Lp=Es("animationstart"),vA=Es("transitionrun"),EA=Es("transitionstart"),TA=Es("transitioncancel"),zp=Es("transitionend"),Bp=new Map,Kh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kh.push("scrollEnd");function zn(e,i){Bp.set(e,i),Un(i,[e])}var jp=new WeakMap;function Rn(e,i){if(typeof e=="object"&&e!==null){var a=jp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ia(i)},jp.set(e,i),i)}return{value:e,source:i,stack:ia(i)}}var In=[],ga=0,Qh=0;function Cu(){for(var e=ga,i=Qh=ga=0;i<e;){var a=In[i];In[i++]=null;var l=In[i];In[i++]=null;var h=In[i];In[i++]=null;var d=In[i];if(In[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&qp(a,h,d)}}function Du(e,i,a,l){In[ga++]=e,In[ga++]=i,In[ga++]=a,In[ga++]=l,Qh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Yh(e,i,a,l){return Du(e,i,a,l),Ou(e)}function _a(e,i){return Du(e,null,null,i),Ou(e)}function qp(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ke(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Ou(e){if(50<ll)throw ll=0,ed=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ya={};function AA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,i,a,l){return new AA(e,i,a,l)}function Xh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mi(e,i){var a=e.alternate;return a===null?(a=dn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Nu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Xh(e)&&(v=1);else if(typeof e=="string")v=bS(e,a,ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=dn(31,a,i,h),e.elementType=I,e.lanes=d,e;case $:return Ts(a.children,h,d,i);case J:v=8,h|=24;break;case Z:return e=dn(12,a,i,h|2),e.elementType=Z,e.lanes=d,e;case mt:return e=dn(13,a,i,h),e.elementType=mt,e.lanes=d,e;case bt:return e=dn(19,a,i,h),e.elementType=bt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pt:case st:v=10;break t;case ot:v=9;break t;case dt:v=11;break t;case V:v=14;break t;case b:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=dn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function Ts(e,i,a,l){return e=dn(7,e,l,i),e.lanes=a,e}function $h(e,i,a){return e=dn(6,e,null,i),e.lanes=a,e}function Zh(e,i,a){return i=dn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var va=[],Ea=0,Vu=null,Mu=0,Cn=[],Dn=0,As=null,Pi=1,xi="";function Ss(e,i){va[Ea++]=Mu,va[Ea++]=Vu,Vu=e,Mu=i}function Fp(e,i,a){Cn[Dn++]=Pi,Cn[Dn++]=xi,Cn[Dn++]=As,As=e;var l=Pi;e=xi;var h=32-Ke(l)-1;l&=~(1<<h),a+=1;var d=32-Ke(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Pi=1<<32-Ke(i)+h|a<<h|l,xi=d+e}else Pi=1<<d|a<<h|l,xi=e}function Wh(e){e.return!==null&&(Ss(e,1),Fp(e,1,0))}function Jh(e){for(;e===Vu;)Vu=va[--Ea],va[Ea]=null,Mu=va[--Ea],va[Ea]=null;for(;e===As;)As=Cn[--Dn],Cn[Dn]=null,xi=Cn[--Dn],Cn[Dn]=null,Pi=Cn[--Dn],Cn[Dn]=null}var rn=null,oe=null,Bt=!1,bs=null,ri=!1,tf=Error(s(519));function ws(e){var i=Error(s(418,""));throw Bo(Rn(i,e)),tf}function Gp(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Se]=e,i[pe]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<cl.length;a++)Nt(cl[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),us(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ra(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),cs(i,l.value,l.defaultValue,l.children),ra(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||ly(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=dc),i=!0):i=!1,i||ws(e)}function Kp(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:rn=rn.return}}function Lo(e){if(e!==rn)return!1;if(!Bt)return Kp(e),Bt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_d(e.type,e.memoizedProps)),a=!a),a&&oe&&ws(e),Kp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){oe=jn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}oe=null}}else i===27?(i=oe,Ar(e.type)?(e=Td,Td=null,oe=e):oe=i):oe=rn?jn(e.stateNode.nextSibling):null;return!0}function zo(){oe=rn=null,Bt=!1}function Qp(){var e=bs;return e!==null&&(ln===null?ln=e:ln.push.apply(ln,e),bs=null),e}function Bo(e){bs===null?bs=[e]:bs.push(e)}var ef=K(null),Rs=null,ki=null;function or(e,i,a){W(ef,i._currentValue),i._currentValue=a}function Ui(e){e._currentValue=ef.current,et(ef)}function nf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function rf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),nf(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),nf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function jo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;fn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===Oe.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(gl):e=[gl])}h=h.return}e!==null&&rf(i,e,a,l),i.flags|=262144}function Pu(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Is(e){Rs=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Yp(Rs,e)}function xu(e,i){return Rs===null&&Is(e),Yp(e,i)}function Yp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ki=ki.next=i;return a}var SA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},bA=r.unstable_scheduleCallback,wA=r.unstable_NormalPriority,Re={$$typeof:st,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new SA,data:new Map,refCount:0}}function qo(e){e.refCount--,e.refCount===0&&bA(wA,function(){e.controller.abort()})}var Ho=null,af=0,Ta=0,Aa=null;function RA(e,i){if(Ho===null){var a=Ho=[];af=0,Ta=ld(),Aa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return af++,i.then(Xp,Xp),i}function Xp(){if(--af===0&&Ho!==null){Aa!==null&&(Aa.status="fulfilled");var e=Ho;Ho=null,Ta=0,Aa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function IA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var $p=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&RA(e,i),$p!==null&&$p(e,i)};var Cs=K(null);function of(){var e=Cs.current;return e!==null?e:Wt.pooledCache}function ku(e,i){i===null?W(Cs,Cs.current):W(Cs,i.pool)}function Zp(){var e=of();return e===null?null:{parent:Re._currentValue,pool:e}}var Fo=Error(s(460)),Wp=Error(s(474)),Uu=Error(s(542)),lf={then:function(){}};function Jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lu(){}function tg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Lu,Lu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ng(e),e;default:if(typeof i.status=="string")i.then(Lu,Lu);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ng(e),e}throw Go=i,Fo}}var Go=null;function eg(){if(Go===null)throw Error(s(459));var e=Go;return Go=null,e}function ng(e){if(e===Fo||e===Uu)throw Error(s(483))}var lr=!1;function uf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ur(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Ou(e),qp(e,null,a),i}return Du(e,l,i,a),Ou(e)}function Ko(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Eo(e,a)}}function hf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var ff=!1;function Qo(){if(ff){var e=Aa;if(e!==null)throw e}}function Yo(e,i,a,l){ff=!1;var h=e.updateQueue;lr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==v&&(E===null?F.firstBaseUpdate=L:E.next=L,F.lastBaseUpdate=w))}if(d!==null){var Y=h.baseState;v=0,F=L=w=null,E=d;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(Ut&z)===z:(l&z)===z){z!==0&&z===Ta&&(ff=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Et=e,gt=E;z=i;var Xt=a;switch(gt.tag){case 1:if(Et=gt.payload,typeof Et=="function"){Y=Et.call(Xt,Y,z);break t}Y=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=gt.payload,z=typeof Et=="function"?Et.call(Xt,Y,z):Et,z==null)break t;Y=T({},Y,z);break t;case 2:lr=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(L=F=B,w=Y):F=F.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(w=Y),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),yr|=v,e.lanes=v,e.memoizedState=Y}}function ig(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function rg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ig(a[e],i)}var Sa=K(null),zu=K(0);function sg(e,i){e=Fi,W(zu,e),W(Sa,i),Fi=e|i.baseLanes}function df(){W(zu,Fi),W(Sa,Sa.current)}function mf(){Fi=zu.current,et(Sa),et(zu)}var hr=0,Rt=null,Qt=null,_e=null,Bu=!1,ba=!1,Ds=!1,ju=0,Xo=0,wa=null,CA=0;function fe(){throw Error(s(321))}function pf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!fn(e[a],i[a]))return!1;return!0}function gf(e,i,a,l,h,d){return hr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?qg:Hg,Ds=!1,d=a(l,h),Ds=!1,ba&&(d=og(i,a,l,h)),ag(e),d}function ag(e){H.H=Qu;var i=Qt!==null&&Qt.next!==null;if(hr=0,_e=Qt=Rt=null,Bu=!1,Xo=0,wa=null,i)throw Error(s(300));e===null||Me||(e=e.dependencies,e!==null&&Pu(e)&&(Me=!0))}function og(e,i,a,l){Rt=e;var h=0;do{if(ba&&(wa=null),Xo=0,ba=!1,25<=h)throw Error(s(301));if(h+=1,_e=Qt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=xA,d=i(a,l)}while(ba);return d}function DA(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?$o(i):i,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function _f(){var e=ju!==0;return ju=0,e}function yf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function vf(e){if(Bu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Bu=!1}hr=0,_e=Qt=Rt=null,ba=!1,Xo=ju=0,wa=null}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Rt.memoizedState=_e=e:_e=_e.next=e,_e}function ye(){if(Qt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var i=_e===null?Rt.memoizedState:_e.next;if(i!==null)_e=i,Qt=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},_e===null?Rt.memoizedState=_e=e:_e=_e.next=e}return _e}function Ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var i=Xo;return Xo+=1,wa===null&&(wa=[]),e=tg(wa,e,i),i=Rt,(_e===null?i.memoizedState:_e.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?qg:Hg),e}function qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===st)return Qe(e)}throw Error(s(438,String(e)))}function Tf(e){var i=null,a=Rt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ef(),Rt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function Li(e,i){return typeof i=="function"?i(e):i}function Hu(e){var i=ye();return Af(i,Qt,e)}function Af(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,w=null,L=i,F=!1;do{var Y=L.lane&-536870913;if(Y!==L.lane?(Ut&Y)===Y:(hr&Y)===Y){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Y===Ta&&(F=!0);else if((hr&z)===z){L=L.next,z===Ta&&(F=!0);continue}else Y={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=Y,v=d):w=w.next=Y,Rt.lanes|=z,yr|=z;Y=L.action,Ds&&a(d,Y),d=L.hasEagerState?L.eagerState:a(d,Y)}else z={lane:Y,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=z,v=d):w=w.next=z,Rt.lanes|=Y,yr|=Y;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=E,!fn(d,e.memoizedState)&&(Me=!0,F&&(a=Aa,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Sf(e){var i=ye(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(Me=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function lg(e,i,a){var l=Rt,h=ye(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn((Qt||h).memoizedState,a);v&&(h.memoizedState=a,Me=!0),h=h.queue;var E=hg.bind(null,l,h,e);if(Zo(2048,8,E,[e]),h.getSnapshot!==i||v||_e!==null&&_e.memoizedState.tag&1){if(l.flags|=2048,Ra(9,Fu(),cg.bind(null,l,h,a,i),null),Wt===null)throw Error(s(349));d||(hr&124)!==0||ug(l,i,a)}return a}function ug(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Rt.updateQueue,i===null?(i=Ef(),Rt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function cg(e,i,a,l){i.value=a,i.getSnapshot=l,fg(i)&&dg(e)}function hg(e,i,a){return a(function(){fg(i)&&dg(e)})}function fg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!fn(e,a)}catch{return!0}}function dg(e){var i=_a(e,2);i!==null&&yn(i,e,2)}function bf(e){var i=an();if(typeof e=="function"){var a=e;if(e=a(),Ds){cn(!0);try{a()}finally{cn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},i}function mg(e,i,a,l){return e.baseState=a,Af(e,Qt,typeof l=="function"?l:Li)}function OA(e,i,a,l,h){if(Ku(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,pg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function pg(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=H.T,v={};H.T=v;try{var E=a(h,l),w=H.S;w!==null&&w(v,E),gg(e,i,E)}catch(L){wf(e,i,L)}finally{H.T=d}}else try{d=a(h,l),gg(e,i,d)}catch(L){wf(e,i,L)}}function gg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){_g(e,i,l)},function(l){return wf(e,i,l)}):_g(e,i,a)}function _g(e,i,a){i.status="fulfilled",i.value=a,yg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,pg(e,a)))}function wf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,yg(i),i=i.next;while(i!==l)}e.action=null}function yg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function vg(e,i){return i}function Eg(e,i){if(Bt){var a=Wt.formState;if(a!==null){t:{var l=Rt;if(Bt){if(oe){e:{for(var h=oe,d=ri;h.nodeType!==8;){if(!d){h=null;break e}if(h=jn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){oe=jn(h.nextSibling),l=h.data==="F!";break t}}ws(l)}l=!1}l&&(i=a[0])}}return a=an(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vg,lastRenderedState:i},a.queue=l,a=zg.bind(null,Rt,l),l.dispatch=a,l=bf(!1),d=Of.bind(null,Rt,!1,l.queue),l=an(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=OA.bind(null,Rt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Tg(e){var i=ye();return Ag(i,Qt,e)}function Ag(e,i,a){if(i=Af(e,i,vg)[0],e=Hu(Li)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=$o(i)}catch(v){throw v===Fo?Uu:v}else l=i;i=ye();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Rt.flags|=2048,Ra(9,Fu(),NA.bind(null,h,a),null)),[l,d,e]}function NA(e,i){e.action=i}function Sg(e){var i=ye(),a=Qt;if(a!==null)return Ag(i,a,e);ye(),i=i.memoizedState,a=ye();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Ra(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=Ef(),Rt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Fu(){return{destroy:void 0,resource:void 0}}function bg(){return ye().memoizedState}function Gu(e,i,a,l){var h=an();l=l===void 0?null:l,Rt.flags|=e,h.memoizedState=Ra(1|i,Fu(),a,l)}function Zo(e,i,a,l){var h=ye();l=l===void 0?null:l;var d=h.memoizedState.inst;Qt!==null&&l!==null&&pf(l,Qt.memoizedState.deps)?h.memoizedState=Ra(i,d,a,l):(Rt.flags|=e,h.memoizedState=Ra(1|i,d,a,l))}function wg(e,i){Gu(8390656,8,e,i)}function Rg(e,i){Zo(2048,8,e,i)}function Ig(e,i){return Zo(4,2,e,i)}function Cg(e,i){return Zo(4,4,e,i)}function Dg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Og(e,i,a){a=a!=null?a.concat([e]):null,Zo(4,4,Dg.bind(null,i,e),a)}function Rf(){}function Ng(e,i){var a=ye();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&pf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Vg(e,i){var a=ye();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&pf(i,l[1]))return l[0];if(l=e(),Ds){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l}function If(e,i,a){return a===void 0||(hr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=x_(),Rt.lanes|=e,yr|=e,a)}function Mg(e,i,a,l){return fn(a,i)?a:Sa.current!==null?(e=If(e,a,l),fn(e,i)||(Me=!0),e):(hr&42)===0?(Me=!0,e.memoizedState=a):(e=x_(),Rt.lanes|=e,yr|=e,i)}function Pg(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=H.T,E={};H.T=E,Of(e,!1,i,a);try{var w=h(),L=H.S;if(L!==null&&L(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var F=IA(w,l);Wo(e,i,F,_n(e))}else Wo(e,i,l,_n(e))}catch(Y){Wo(e,i,{then:function(){},status:"rejected",reason:Y},_n())}finally{nt.p=d,H.T=v}}function VA(){}function Cf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=xg(e).queue;Pg(e,h,i,lt,a===null?VA:function(){return kg(e),a(l)})}function xg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:lt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function kg(e){var i=xg(e).next.queue;Wo(e,i,{},_n())}function Df(){return Qe(gl)}function Ug(){return ye().memoizedState}function Lg(){return ye().memoizedState}function MA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=_n();e=ur(a);var l=cr(i,e,a);l!==null&&(yn(l,i,a),Ko(l,i,a)),i={cache:sf()},e.payload=i;return}i=i.return}}function PA(e,i,a){var l=_n();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ku(e)?Bg(i,a):(a=Yh(e,i,a,l),a!==null&&(yn(a,e,l),jg(a,i,l)))}function zg(e,i,a){var l=_n();Wo(e,i,a,l)}function Wo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Bg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,fn(E,v))return Du(e,i,h,0),Wt===null&&Cu(),!1}catch{}finally{}if(a=Yh(e,i,h,l),a!==null)return yn(a,e,l),jg(a,i,l),!0}return!1}function Of(e,i,a,l){if(l={lane:2,revertLane:ld(),action:l,hasEagerState:!1,eagerState:null,next:null},Ku(e)){if(i)throw Error(s(479))}else i=Yh(e,a,l,2),i!==null&&yn(i,e,2)}function Ku(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function Bg(e,i){ba=Bu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function jg(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Eo(e,a)}}var Qu={readContext:Qe,use:qu,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe},qg={readContext:Qe,use:qu,useCallback:function(e,i){return an().memoizedState=[e,i===void 0?null:i],e},useContext:Qe,useEffect:wg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Gu(4194308,4,Dg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Gu(4194308,4,e,i)},useInsertionEffect:function(e,i){Gu(4,2,e,i)},useMemo:function(e,i){var a=an();i=i===void 0?null:i;var l=e();if(Ds){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=an();if(a!==void 0){var h=a(i);if(Ds){cn(!0);try{a(i)}finally{cn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=PA.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=an();return e={current:e},i.memoizedState=e},useState:function(e){e=bf(e);var i=e.queue,a=zg.bind(null,Rt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(e,i){var a=an();return If(a,e,i)},useTransition:function(){var e=bf(!1);return e=Pg.bind(null,Rt,e.queue,!0,!1),an().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Rt,h=an();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Wt===null)throw Error(s(349));(Ut&124)!==0||ug(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,wg(hg.bind(null,l,d,e),[e]),l.flags|=2048,Ra(9,Fu(),cg.bind(null,l,d,a,i),null),a},useId:function(){var e=an(),i=Wt.identifierPrefix;if(Bt){var a=xi,l=Pi;a=(l&~(1<<32-Ke(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=ju++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=CA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Df,useFormState:Eg,useActionState:Eg,useOptimistic:function(e){var i=an();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Of.bind(null,Rt,!0,a),a.dispatch=i,[e,i]},useMemoCache:Tf,useCacheRefresh:function(){return an().memoizedState=MA.bind(null,Rt)}},Hg={readContext:Qe,use:qu,useCallback:Ng,useContext:Qe,useEffect:Rg,useImperativeHandle:Og,useInsertionEffect:Ig,useLayoutEffect:Cg,useMemo:Vg,useReducer:Hu,useRef:bg,useState:function(){return Hu(Li)},useDebugValue:Rf,useDeferredValue:function(e,i){var a=ye();return Mg(a,Qt.memoizedState,e,i)},useTransition:function(){var e=Hu(Li)[0],i=ye().memoizedState;return[typeof e=="boolean"?e:$o(e),i]},useSyncExternalStore:lg,useId:Ug,useHostTransitionStatus:Df,useFormState:Tg,useActionState:Tg,useOptimistic:function(e,i){var a=ye();return mg(a,Qt,e,i)},useMemoCache:Tf,useCacheRefresh:Lg},xA={readContext:Qe,use:qu,useCallback:Ng,useContext:Qe,useEffect:Rg,useImperativeHandle:Og,useInsertionEffect:Ig,useLayoutEffect:Cg,useMemo:Vg,useReducer:Sf,useRef:bg,useState:function(){return Sf(Li)},useDebugValue:Rf,useDeferredValue:function(e,i){var a=ye();return Qt===null?If(a,e,i):Mg(a,Qt.memoizedState,e,i)},useTransition:function(){var e=Sf(Li)[0],i=ye().memoizedState;return[typeof e=="boolean"?e:$o(e),i]},useSyncExternalStore:lg,useId:Ug,useHostTransitionStatus:Df,useFormState:Sg,useActionState:Sg,useOptimistic:function(e,i){var a=ye();return Qt!==null?mg(a,Qt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:Lg},Ia=null,Jo=0;function Yu(e){var i=Jo;return Jo+=1,Ia===null&&(Ia=[]),tg(Ia,e,i)}function tl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Xu(e,i){throw i.$$typeof===R?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Fg(e){var i=e._init;return i(e._payload)}function Gg(e){function i(P,O){if(e){var U=P.deletions;U===null?(P.deletions=[O],P.flags|=16):U.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=Mi(P,O),P.index=0,P.sibling=null,P}function d(P,O,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<O?(P.flags|=67108866,O):U):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function E(P,O,U,G){return O===null||O.tag!==6?(O=$h(U,P.mode,G),O.return=P,O):(O=h(O,U),O.return=P,O)}function w(P,O,U,G){var at=U.type;return at===$?F(P,O,U.props.children,G,U.key):O!==null&&(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===b&&Fg(at)===O.type)?(O=h(O,U.props),tl(O,U),O.return=P,O):(O=Nu(U.type,U.key,U.props,null,P.mode,G),tl(O,U),O.return=P,O)}function L(P,O,U,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Zh(U,P.mode,G),O.return=P,O):(O=h(O,U.children||[]),O.return=P,O)}function F(P,O,U,G,at){return O===null||O.tag!==7?(O=Ts(U,P.mode,G,at),O.return=P,O):(O=h(O,U),O.return=P,O)}function Y(P,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=$h(""+O,P.mode,U),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case D:return U=Nu(O.type,O.key,O.props,null,P.mode,U),tl(U,O),U.return=P,U;case q:return O=Zh(O,P.mode,U),O.return=P,O;case b:var G=O._init;return O=G(O._payload),Y(P,O,U)}if(ee(O)||x(O))return O=Ts(O,P.mode,U,null),O.return=P,O;if(typeof O.then=="function")return Y(P,Yu(O),U);if(O.$$typeof===st)return Y(P,xu(P,O),U);Xu(P,O)}return null}function z(P,O,U,G){var at=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return at!==null?null:E(P,O,""+U,G);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case D:return U.key===at?w(P,O,U,G):null;case q:return U.key===at?L(P,O,U,G):null;case b:return at=U._init,U=at(U._payload),z(P,O,U,G)}if(ee(U)||x(U))return at!==null?null:F(P,O,U,G,null);if(typeof U.then=="function")return z(P,O,Yu(U),G);if(U.$$typeof===st)return z(P,O,xu(P,U),G);Xu(P,U)}return null}function B(P,O,U,G,at){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return P=P.get(U)||null,E(O,P,""+G,at);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return P=P.get(G.key===null?U:G.key)||null,w(O,P,G,at);case q:return P=P.get(G.key===null?U:G.key)||null,L(O,P,G,at);case b:var Dt=G._init;return G=Dt(G._payload),B(P,O,U,G,at)}if(ee(G)||x(G))return P=P.get(U)||null,F(O,P,G,at,null);if(typeof G.then=="function")return B(P,O,U,Yu(G),at);if(G.$$typeof===st)return B(P,O,U,xu(O,G),at);Xu(O,G)}return null}function Et(P,O,U,G){for(var at=null,Dt=null,ut=O,_t=O=0,xe=null;ut!==null&&_t<U.length;_t++){ut.index>_t?(xe=ut,ut=null):xe=ut.sibling;var zt=z(P,ut,U[_t],G);if(zt===null){ut===null&&(ut=xe);break}e&&ut&&zt.alternate===null&&i(P,ut),O=d(zt,O,_t),Dt===null?at=zt:Dt.sibling=zt,Dt=zt,ut=xe}if(_t===U.length)return a(P,ut),Bt&&Ss(P,_t),at;if(ut===null){for(;_t<U.length;_t++)ut=Y(P,U[_t],G),ut!==null&&(O=d(ut,O,_t),Dt===null?at=ut:Dt.sibling=ut,Dt=ut);return Bt&&Ss(P,_t),at}for(ut=l(ut);_t<U.length;_t++)xe=B(ut,P,_t,U[_t],G),xe!==null&&(e&&xe.alternate!==null&&ut.delete(xe.key===null?_t:xe.key),O=d(xe,O,_t),Dt===null?at=xe:Dt.sibling=xe,Dt=xe);return e&&ut.forEach(function(Ir){return i(P,Ir)}),Bt&&Ss(P,_t),at}function gt(P,O,U,G){if(U==null)throw Error(s(151));for(var at=null,Dt=null,ut=O,_t=O=0,xe=null,zt=U.next();ut!==null&&!zt.done;_t++,zt=U.next()){ut.index>_t?(xe=ut,ut=null):xe=ut.sibling;var Ir=z(P,ut,zt.value,G);if(Ir===null){ut===null&&(ut=xe);break}e&&ut&&Ir.alternate===null&&i(P,ut),O=d(Ir,O,_t),Dt===null?at=Ir:Dt.sibling=Ir,Dt=Ir,ut=xe}if(zt.done)return a(P,ut),Bt&&Ss(P,_t),at;if(ut===null){for(;!zt.done;_t++,zt=U.next())zt=Y(P,zt.value,G),zt!==null&&(O=d(zt,O,_t),Dt===null?at=zt:Dt.sibling=zt,Dt=zt);return Bt&&Ss(P,_t),at}for(ut=l(ut);!zt.done;_t++,zt=U.next())zt=B(ut,P,_t,zt.value,G),zt!==null&&(e&&zt.alternate!==null&&ut.delete(zt.key===null?_t:zt.key),O=d(zt,O,_t),Dt===null?at=zt:Dt.sibling=zt,Dt=zt);return e&&ut.forEach(function(kS){return i(P,kS)}),Bt&&Ss(P,_t),at}function Xt(P,O,U,G){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case D:t:{for(var at=U.key;O!==null;){if(O.key===at){if(at=U.type,at===$){if(O.tag===7){a(P,O.sibling),G=h(O,U.props.children),G.return=P,P=G;break t}}else if(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===b&&Fg(at)===O.type){a(P,O.sibling),G=h(O,U.props),tl(G,U),G.return=P,P=G;break t}a(P,O);break}else i(P,O);O=O.sibling}U.type===$?(G=Ts(U.props.children,P.mode,G,U.key),G.return=P,P=G):(G=Nu(U.type,U.key,U.props,null,P.mode,G),tl(G,U),G.return=P,P=G)}return v(P);case q:t:{for(at=U.key;O!==null;){if(O.key===at)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(P,O.sibling),G=h(O,U.children||[]),G.return=P,P=G;break t}else{a(P,O);break}else i(P,O);O=O.sibling}G=Zh(U,P.mode,G),G.return=P,P=G}return v(P);case b:return at=U._init,U=at(U._payload),Xt(P,O,U,G)}if(ee(U))return Et(P,O,U,G);if(x(U)){if(at=x(U),typeof at!="function")throw Error(s(150));return U=at.call(U),gt(P,O,U,G)}if(typeof U.then=="function")return Xt(P,O,Yu(U),G);if(U.$$typeof===st)return Xt(P,O,xu(P,U),G);Xu(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(P,O.sibling),G=h(O,U),G.return=P,P=G):(a(P,O),G=$h(U,P.mode,G),G.return=P,P=G),v(P)):a(P,O)}return function(P,O,U,G){try{Jo=0;var at=Xt(P,O,U,G);return Ia=null,at}catch(ut){if(ut===Fo||ut===Uu)throw ut;var Dt=dn(29,ut,null,P.mode);return Dt.lanes=G,Dt.return=P,Dt}finally{}}}var Ca=Gg(!0),Kg=Gg(!1),On=K(null),si=null;function fr(e){var i=e.alternate;W(Ie,Ie.current&1),W(On,e),si===null&&(i===null||Sa.current!==null||i.memoizedState!==null)&&(si=e)}function Qg(e){if(e.tag===22){if(W(Ie,Ie.current),W(On,e),si===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(si=e)}}else dr()}function dr(){W(Ie,Ie.current),W(On,On.current)}function zi(e){et(On),si===e&&(si=null),et(Ie)}var Ie=K(0);function $u(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ed(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Nf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=_n(),h=ur(l);h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,l),i!==null&&(yn(i,e,l),Ko(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=_n(),h=ur(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,l),i!==null&&(yn(i,e,l),Ko(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=_n(),l=ur(a);l.tag=2,i!=null&&(l.callback=i),i=cr(e,l,a),i!==null&&(yn(i,e,a),Ko(i,e,a))}};function Yg(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!ko(a,l)||!ko(h,d):!0}function Xg(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Vf.enqueueReplaceState(i,i.state,null)}function Os(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Zu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $g(e){Zu(e)}function Zg(e){console.error(e)}function Wg(e){Zu(e)}function Wu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Jg(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Mf(e,i,a){return a=ur(a),a.tag=3,a.payload={element:null},a.callback=function(){Wu(e,i)},a}function t_(e){return e=ur(e),e.tag=3,e}function e_(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Jg(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Jg(i,a,l),typeof h!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function kA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&jo(i,a,h,!0),a=On.current,a!==null){switch(a.tag){case 13:return si===null?id():a.alternate===null&&le===0&&(le=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===lf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),sd(e,l,h)),!1;case 22:return a.flags|=65536,l===lf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),sd(e,l,h)),!1}throw Error(s(435,a.tag))}return sd(e,l,h),id(),!1}if(Bt)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==tf&&(e=Error(s(422),{cause:l}),Bo(Rn(e,a)))):(l!==tf&&(i=Error(s(423),{cause:l}),Bo(Rn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Rn(l,a),h=Mf(e.stateNode,l,h),hf(e,h),le!==4&&(le=2)),!1;var d=Error(s(520),{cause:l});if(d=Rn(d,a),ol===null?ol=[d]:ol.push(d),le!==4&&(le=2),i===null)return!0;l=Rn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Mf(a.stateNode,l,e),hf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(vr===null||!vr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=t_(h),e_(h,e,a,l),hf(a,h),!1}a=a.return}while(a!==null);return!1}var n_=Error(s(461)),Me=!1;function Be(e,i,a,l){i.child=e===null?Kg(i,null,a,l):Ca(i,e.child,a,l)}function i_(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Is(i),l=gf(e,i,a,v,d,h),E=_f(),e!==null&&!Me?(yf(e,i,h),Bi(e,i,h)):(Bt&&E&&Wh(i),i.flags|=1,Be(e,i,l,h),i.child)}function r_(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Xh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,s_(e,i,d,l,h)):(e=Nu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!jf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(v,l)&&e.ref===i.ref)return Bi(e,i,h)}return i.flags|=1,e=Mi(d,l),e.ref=i.ref,e.return=i,i.child=e}function s_(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(ko(d,l)&&e.ref===i.ref)if(Me=!1,i.pendingProps=l=d,jf(e,h))(e.flags&131072)!==0&&(Me=!0);else return i.lanes=e.lanes,Bi(e,i,h)}return Pf(e,i,a,l,h)}function a_(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return o_(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ku(i,d!==null?d.cachePool:null),d!==null?sg(i,d):df(),Qg(i);else return i.lanes=i.childLanes=536870912,o_(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(ku(i,d.cachePool),sg(i,d),dr(),i.memoizedState=null):(e!==null&&ku(i,null),df(),dr());return Be(e,i,h,a),i.child}function o_(e,i,a,l){var h=of();return h=h===null?null:{parent:Re._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&ku(i,null),df(),Qg(i),e!==null&&jo(e,i,l,!0),null}function Ju(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Pf(e,i,a,l,h){return Is(i),a=gf(e,i,a,l,void 0,h),l=_f(),e!==null&&!Me?(yf(e,i,h),Bi(e,i,h)):(Bt&&l&&Wh(i),i.flags|=1,Be(e,i,a,h),i.child)}function l_(e,i,a,l,h,d){return Is(i),i.updateQueue=null,a=og(i,l,a,h),ag(e),l=_f(),e!==null&&!Me?(yf(e,i,d),Bi(e,i,d)):(Bt&&l&&Wh(i),i.flags|=1,Be(e,i,a,d),i.child)}function u_(e,i,a,l,h){if(Is(i),i.stateNode===null){var d=ya,v=a.contextType;typeof v=="object"&&v!==null&&(d=Qe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Vf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},uf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Qe(v):ya,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Nf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Vf.enqueueReplaceState(d,d.state,null),Yo(i,l,d,h),Qo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,w=Os(a,E);d.props=w;var L=d.context,F=a.contextType;v=ya,typeof F=="object"&&F!==null&&(v=Qe(F));var Y=a.getDerivedStateFromProps;F=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||L!==v)&&Xg(i,d,l,v),lr=!1;var z=i.memoizedState;d.state=z,Yo(i,l,d,h),Qo(),L=i.memoizedState,E||z!==L||lr?(typeof Y=="function"&&(Nf(i,a,Y,l),L=i.memoizedState),(w=lr||Yg(i,a,w,l,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,cf(e,i),v=i.memoizedProps,F=Os(a,v),d.props=F,Y=i.pendingProps,z=d.context,L=a.contextType,w=ya,typeof L=="object"&&L!==null&&(w=Qe(L)),E=a.getDerivedStateFromProps,(L=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||z!==w)&&Xg(i,d,l,w),lr=!1,z=i.memoizedState,d.state=z,Yo(i,l,d,h),Qo();var B=i.memoizedState;v!==Y||z!==B||lr||e!==null&&e.dependencies!==null&&Pu(e.dependencies)?(typeof E=="function"&&(Nf(i,a,E,l),B=i.memoizedState),(F=lr||Yg(i,a,F,l,z,B,w)||e!==null&&e.dependencies!==null&&Pu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=w,l=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ju(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ca(i,e.child,null,h),i.child=Ca(i,null,a,h)):Be(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Bi(e,i,h),e}function c_(e,i,a,l){return zo(),i.flags|=256,Be(e,i,a,l),i.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(e){return{baseLanes:e,cachePool:Zp()}}function Uf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Nn),e}function h_(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?fr(i):dr(),Bt){var E=oe,w;if(w=E){t:{for(w=E,E=ri;w.nodeType!==8;){if(!E){E=null;break t}if(w=jn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:As!==null?{id:Pi,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},w=dn(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,rn=i,oe=null,w=!0):w=!1}w||ws(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Ed(E)?i.lanes=32:i.lanes=536870912,null;zi(i)}return E=l.children,l=l.fallback,h?(dr(),h=i.mode,E=tc({mode:"hidden",children:E},h),l=Ts(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=kf(a),h.childLanes=Uf(e,v,a),i.memoizedState=xf,l):(fr(i),Lf(i,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(fr(i),i.flags&=-257,i=zf(e,i,a)):i.memoizedState!==null?(dr(),i.child=e.child,i.flags|=128,i=null):(dr(),h=l.fallback,E=i.mode,l=tc({mode:"visible",children:l.children},E),h=Ts(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ca(i,e.child,null,a),l=i.child,l.memoizedState=kf(a),l.childLanes=Uf(e,v,a),i.memoizedState=xf,i=h);else if(fr(i),Ed(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Bo({value:l,source:null,stack:null}),i=zf(e,i,a)}else if(Me||jo(e,i,a,!1),v=(a&e.childLanes)!==0,Me||v){if(v=Wt,v!==null&&(l=a&-a,l=(l&42)!==0?1:tr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,_a(e,l),yn(v,e,l),n_;E.data==="$?"||id(),i=zf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,oe=jn(E.nextSibling),rn=i,Bt=!0,bs=null,ri=!1,e!==null&&(Cn[Dn++]=Pi,Cn[Dn++]=xi,Cn[Dn++]=As,Pi=e.id,xi=e.overflow,As=i),i=Lf(i,l.children),i.flags|=4096);return i}return h?(dr(),h=l.fallback,E=i.mode,w=e.child,L=w.sibling,l=Mi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=Mi(L,h):(h=Ts(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=kf(a):(w=E.cachePool,w!==null?(L=Re._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=Zp(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=Uf(e,v,a),i.memoizedState=xf,l):(fr(i),a=e.child,e=a.sibling,a=Mi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Lf(e,i){return i=tc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function tc(e,i){return e=dn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zf(e,i,a){return Ca(i,e.child,null,a),e=Lf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function f_(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),nf(e.return,i,a)}function Bf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function d_(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Be(e,i,l.children,a),l=Ie.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&f_(e,a,i);else if(e.tag===19)f_(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(W(Ie,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&$u(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Bf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&$u(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Bf(i,!0,a,null,d);break;case"together":Bf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Bi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),yr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(jo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Mi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Mi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function jf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Pu(e)))}function UA(e,i,a){switch(i.tag){case 3:Zt(i,i.stateNode.containerInfo),or(i,Re,e.memoizedState.cache),zo();break;case 27:case 5:Ji(i);break;case 4:Zt(i,i.stateNode.containerInfo);break;case 10:or(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(fr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?h_(e,i,a):(fr(i),e=Bi(e,i,a),e!==null?e.sibling:null);fr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(jo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return d_(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),W(Ie,Ie.current),l)break;return null;case 22:case 23:return i.lanes=0,a_(e,i,a);case 24:or(i,Re,e.memoizedState.cache)}return Bi(e,i,a)}function m_(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Me=!0;else{if(!jf(e,a)&&(i.flags&128)===0)return Me=!1,UA(e,i,a);Me=(e.flags&131072)!==0}else Me=!1,Bt&&(i.flags&1048576)!==0&&Fp(i,Mu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Xh(l)?(e=Os(l,e),i.tag=1,i=u_(null,i,l,e,a)):(i.tag=0,i=Pf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===dt){i.tag=11,i=i_(null,i,l,e,a);break t}else if(h===V){i.tag=14,i=r_(null,i,l,e,a);break t}}throw i=Ae(l)||l,Error(s(306,i,""))}}return i;case 0:return Pf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Os(l,i.pendingProps),u_(e,i,l,h,a);case 3:t:{if(Zt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,cf(e,i),Yo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,or(i,Re,l),l!==d.cache&&rf(i,[Re],a,!0),Qo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=c_(e,i,l,a);break t}else if(l!==h){h=Rn(Error(s(424)),i),Bo(h),i=c_(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=jn(e.firstChild),rn=i,Bt=!0,bs=null,ri=!0,a=Kg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zo(),l===h){i=Bi(e,i,a);break t}Be(e,i,l,a)}i=i.child}return i;case 26:return Ju(e,i),e===null?(a=yy(i.type,null,i.pendingProps,null))?i.memoizedState=a:Bt||(a=i.type,e=i.pendingProps,l=mc(Tt.current).createElement(a),l[Se]=i,l[pe]=e,qe(l,a,e),he(l),i.stateNode=l):i.memoizedState=yy(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ji(i),e===null&&Bt&&(l=i.stateNode=py(i.type,i.pendingProps,Tt.current),rn=i,ri=!0,h=oe,Ar(i.type)?(Td=h,oe=jn(l.firstChild)):oe=h),Be(e,i,i.pendingProps.children,a),Ju(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((h=l=oe)&&(l=hS(l,i.type,i.pendingProps,ri),l!==null?(i.stateNode=l,rn=i,oe=jn(l.firstChild),ri=!1,h=!0):h=!1),h||ws(i)),Ji(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,_d(h,d)?l=null:v!==null&&_d(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=gf(e,i,DA,null,null,a),gl._currentValue=h),Ju(e,i),Be(e,i,l,a),i.child;case 6:return e===null&&Bt&&((e=a=oe)&&(a=fS(a,i.pendingProps,ri),a!==null?(i.stateNode=a,rn=i,oe=null,e=!0):e=!1),e||ws(i)),null;case 13:return h_(e,i,a);case 4:return Zt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ca(i,null,l,a):Be(e,i,l,a),i.child;case 11:return i_(e,i,i.type,i.pendingProps,a);case 7:return Be(e,i,i.pendingProps,a),i.child;case 8:return Be(e,i,i.pendingProps.children,a),i.child;case 12:return Be(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,or(i,i.type,l.value),Be(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Is(i),h=Qe(h),l=l(h),i.flags|=1,Be(e,i,l,a),i.child;case 14:return r_(e,i,i.type,i.pendingProps,a);case 15:return s_(e,i,i.type,i.pendingProps,a);case 19:return d_(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=tc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Mi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return a_(e,i,a);case 24:return Is(i),l=Qe(Re),e===null?(h=of(),h===null&&(h=Wt,d=sf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},uf(i),or(i,Re,h)):((e.lanes&a)!==0&&(cf(e,i),Yo(i,null,null,a),Qo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),or(i,Re,l)):(l=d.cache,or(i,Re,l),l!==h.cache&&rf(i,[Re],a,!0))),Be(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ji(e){e.flags|=4}function p_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sy(i)){if(i=On.current,i!==null&&((Ut&4194048)===Ut?si!==null:(Ut&62914560)!==Ut&&(Ut&536870912)===0||i!==si))throw Go=lf,Wp;e.flags|=8192}}function ec(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?yo():536870912,e.lanes|=i,Va|=i)}function el(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function LA(e,i,a){var l=i.pendingProps;switch(Jh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(i),null;case 1:return re(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ui(Re),Kn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Lo(i)?ji(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qp())),re(i),null;case 26:return a=i.memoizedState,e===null?(ji(i),a!==null?(re(i),p_(i,a)):(re(i),i.flags&=-16777217)):a?a!==e.memoizedState?(ji(i),re(i),p_(i,a)):(re(i),i.flags&=-16777217):(e.memoizedProps!==l&&ji(i),re(i),i.flags&=-16777217),null;case 27:Ei(i),a=Tt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}e=ct.current,Lo(i)?Gp(i):(e=py(h,l,a),i.stateNode=e,ji(i))}return re(i),null;case 5:if(Ei(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}if(e=ct.current,Lo(i))Gp(i);else{switch(h=mc(Tt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Se]=i,e[pe]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(qe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(i)}}return re(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Tt.current,Lo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=rn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Se]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ly(e.nodeValue,a)),e||ws(i)}else e=mc(e).createTextNode(l),e[Se]=i,i.stateNode=e}return re(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Lo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Se]=i}else zo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),h=!1}else h=Qp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(zi(i),i):(zi(i),null)}if(zi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),ec(i,i.updateQueue),re(i),null;case 4:return Kn(),e===null&&fd(i.stateNode.containerInfo),re(i),null;case 10:return Ui(i.type),re(i),null;case 19:if(et(Ie),h=i.memoizedState,h===null)return re(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)el(h,!1);else{if(le!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=$u(e),d!==null){for(i.flags|=128,el(h,!1),e=d.updateQueue,i.updateQueue=e,ec(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Hp(a,e),a=a.sibling;return W(Ie,Ie.current&1|2),i.child}e=e.sibling}h.tail!==null&&En()>rc&&(i.flags|=128,l=!0,el(h,!1),i.lanes=4194304)}else{if(!l)if(e=$u(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,ec(i,e),el(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Bt)return re(i),null}else 2*En()-h.renderingStartTime>rc&&a!==536870912&&(i.flags|=128,l=!0,el(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=En(),i.sibling=null,e=Ie.current,W(Ie,l?e&1|2:e&1),i):(re(i),null);case 22:case 23:return zi(i),mf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(re(i),i.subtreeFlags&6&&(i.flags|=8192)):re(i),a=i.updateQueue,a!==null&&ec(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&et(Cs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ui(Re),re(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function zA(e,i){switch(Jh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ui(Re),Kn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ei(i),null;case 13:if(zi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));zo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(Ie),null;case 4:return Kn(),null;case 10:return Ui(i.type),null;case 22:case 23:return zi(i),mf(),e!==null&&et(Cs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ui(Re),null;case 25:return null;default:return null}}function g_(e,i){switch(Jh(i),i.tag){case 3:Ui(Re),Kn();break;case 26:case 27:case 5:Ei(i);break;case 4:Kn();break;case 13:zi(i);break;case 19:et(Ie);break;case 10:Ui(i.type);break;case 22:case 23:zi(i),mf(),e!==null&&et(Cs);break;case 24:Ui(Re)}}function nl(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){$t(i,i.return,E)}}function mr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a,L=E;try{L()}catch(F){$t(h,w,F)}}}l=l.next}while(l!==d)}}catch(F){$t(i,i.return,F)}}function __(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{rg(i,a)}catch(l){$t(e,e.return,l)}}}function y_(e,i,a){a.props=Os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){$t(e,i,l)}}function il(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){$t(e,i,h)}}function ai(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){$t(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){$t(e,i,h)}else a.current=null}function v_(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){$t(e,e.return,h)}}function qf(e,i,a){try{var l=e.stateNode;aS(l,e.type,a,i),l[pe]=i}catch(h){$t(e,e.return,h)}}function E_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ar(e.type)||e.tag===4}function Hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||E_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=dc));else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Ff(e,i,a),e=e.sibling;e!==null;)Ff(e,i,a),e=e.sibling}function nc(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(nc(e,i,a),e=e.sibling;e!==null;)nc(e,i,a),e=e.sibling}function T_(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);qe(i,l,a),i[Se]=e,i[pe]=a}catch(d){$t(e,e.return,d)}}var qi=!1,de=!1,Gf=!1,A_=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function BA(e,i){if(e=e.containerInfo,pd=Ec,e=Mp(e),qh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,w=-1,L=0,F=0,Y=e,z=null;e:for(;;){for(var B;Y!==a||h!==0&&Y.nodeType!==3||(E=v+h),Y!==d||l!==0&&Y.nodeType!==3||(w=v+l),Y.nodeType===3&&(v+=Y.nodeValue.length),(B=Y.firstChild)!==null;)z=Y,Y=B;for(;;){if(Y===e)break e;if(z===a&&++L===h&&(E=v),z===d&&++F===l&&(w=v),(B=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=B}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(gd={focusedElem:e,selectionRange:a},Ec=!1,Pe=i;Pe!==null;)if(i=Pe,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Pe=e;else for(;Pe!==null;){switch(i=Pe,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Et=Os(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(gt){$t(a,a.return,gt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)vd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Pe=e;break}Pe=i.return}}function S_(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:pr(e,a),l&4&&nl(5,a);break;case 1:if(pr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){$t(a,a.return,v)}else{var h=Os(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){$t(a,a.return,v)}}l&64&&__(a),l&512&&il(a,a.return);break;case 3:if(pr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{rg(e,i)}catch(v){$t(a,a.return,v)}}break;case 27:i===null&&l&4&&T_(a);case 26:case 5:pr(e,a),i===null&&l&4&&v_(a),l&512&&il(a,a.return);break;case 12:pr(e,a);break;case 13:pr(e,a),l&4&&R_(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=XA.bind(null,a),dS(e,a))));break;case 22:if(l=a.memoizedState!==null||qi,!l){i=i!==null&&i.memoizedState!==null||de,h=qi;var d=de;qi=l,(de=i)&&!d?gr(e,a,(a.subtreeFlags&8772)!==0):pr(e,a),qi=h,de=d}break;case 30:break;default:pr(e,a)}}function b_(e){var i=e.alternate;i!==null&&(e.alternate=null,b_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ir(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ie=null,on=!1;function Hi(e,i,a){for(a=a.child;a!==null;)w_(e,i,a),a=a.sibling}function w_(e,i,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:de||ai(a,i),Hi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:de||ai(a,i);var l=ie,h=on;Ar(a.type)&&(ie=a.stateNode,on=!1),Hi(e,i,a),fl(a.stateNode),ie=l,on=h;break;case 5:de||ai(a,i);case 6:if(l=ie,h=on,ie=null,Hi(e,i,a),ie=l,on=h,ie!==null)if(on)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(a.stateNode)}catch(d){$t(a,i,d)}else try{ie.removeChild(a.stateNode)}catch(d){$t(a,i,d)}break;case 18:ie!==null&&(on?(e=ie,dy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),El(e)):dy(ie,a.stateNode));break;case 4:l=ie,h=on,ie=a.stateNode.containerInfo,on=!0,Hi(e,i,a),ie=l,on=h;break;case 0:case 11:case 14:case 15:de||mr(2,a,i),de||mr(4,a,i),Hi(e,i,a);break;case 1:de||(ai(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&y_(a,i,l)),Hi(e,i,a);break;case 21:Hi(e,i,a);break;case 22:de=(l=de)||a.memoizedState!==null,Hi(e,i,a),de=l;break;default:Hi(e,i,a)}}function R_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(a){$t(i,i.return,a)}}function jA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new A_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new A_),i;default:throw Error(s(435,e.tag))}}function Kf(e,i){var a=jA(e);i.forEach(function(l){var h=$A.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function mn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Ar(E.type)){ie=E.stateNode,on=!1;break t}break;case 5:ie=E.stateNode,on=!1;break t;case 3:case 4:ie=E.stateNode.containerInfo,on=!0;break t}E=E.return}if(ie===null)throw Error(s(160));w_(d,v,h),ie=null,on=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)I_(i,e),i=i.sibling}var Bn=null;function I_(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(i,e),pn(e),l&4&&(mr(3,e,e.return),nl(3,e),mr(5,e,e.return));break;case 1:mn(i,e),pn(e),l&512&&(de||a===null||ai(a,a.return)),l&64&&qi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Bn;if(mn(i,e),pn(e),l&512&&(de||a===null||ai(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ss]||d[Se]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),qe(d,l,a),d[Se]=e,he(d),l=d;break t;case"link":var v=Ty("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;case"meta":if(v=Ty("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Se]=e,he(d),l=d}e.stateNode=l}else Ay(h,e.type,e.stateNode);else e.stateNode=Ey(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Ay(h,e.type,e.stateNode):Ey(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&qf(e,e.memoizedProps,a.memoizedProps)}break;case 27:mn(i,e),pn(e),l&512&&(de||a===null||ai(a,a.return)),a!==null&&l&4&&qf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mn(i,e),pn(e),l&512&&(de||a===null||ai(a,a.return)),e.flags&32){h=e.stateNode;try{An(h,"")}catch(B){$t(e,e.return,B)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,qf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Gf=!0);break;case 6:if(mn(i,e),pn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){$t(e,e.return,B)}}break;case 3:if(_c=null,h=Bn,Bn=pc(i.containerInfo),mn(i,e),Bn=h,pn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{El(i.containerInfo)}catch(B){$t(e,e.return,B)}Gf&&(Gf=!1,C_(e));break;case 4:l=Bn,Bn=pc(e.stateNode.containerInfo),mn(i,e),pn(e),Bn=l;break;case 12:mn(i,e),pn(e);break;case 13:mn(i,e),pn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wf=En()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Kf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=qi,F=de;if(qi=L||h,de=F||w,mn(i,e),de=F,qi=L,pn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||qi||de||Ns(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=w.stateNode;var Y=w.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){$t(w,w.return,B)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(B){$t(w,w.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Kf(e,a))));break;case 19:mn(i,e),pn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Kf(e,l)));break;case 30:break;case 21:break;default:mn(i,e),pn(e)}}function pn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(E_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Hf(e);nc(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(An(v,""),a.flags&=-33);var E=Hf(e);nc(e,E,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=Hf(e);Ff(e,L,w);break;default:throw Error(s(161))}}catch(F){$t(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function C_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;C_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function pr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)S_(e,i.alternate,i),i=i.sibling}function Ns(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:mr(4,i,i.return),Ns(i);break;case 1:ai(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&y_(i,i.return,a),Ns(i);break;case 27:fl(i.stateNode);case 26:case 5:ai(i,i.return),Ns(i);break;case 22:i.memoizedState===null&&Ns(i);break;case 30:Ns(i);break;default:Ns(i)}e=e.sibling}}function gr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:gr(h,d,a),nl(4,d);break;case 1:if(gr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){$t(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)ig(w[h],E)}catch(L){$t(l,l.return,L)}}a&&v&64&&__(d),il(d,d.return);break;case 27:T_(d);case 26:case 5:gr(h,d,a),a&&l===null&&v&4&&v_(d),il(d,d.return);break;case 12:gr(h,d,a);break;case 13:gr(h,d,a),a&&v&4&&R_(h,d);break;case 22:d.memoizedState===null&&gr(h,d,a),il(d,d.return);break;case 30:break;default:gr(h,d,a)}i=i.sibling}}function Qf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qo(a))}function Yf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&qo(e))}function oi(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)D_(e,i,a,l),i=i.sibling}function D_(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:oi(e,i,a,l),h&2048&&nl(9,i);break;case 1:oi(e,i,a,l);break;case 3:oi(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&qo(e)));break;case 12:if(h&2048){oi(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){$t(i,i.return,w)}}else oi(e,i,a,l);break;case 13:oi(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?oi(e,i,a,l):rl(e,i):d._visibility&2?oi(e,i,a,l):(d._visibility|=2,Da(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Qf(v,i);break;case 24:oi(e,i,a,l),h&2048&&Yf(i.alternate,i);break;default:oi(e,i,a,l)}}function Da(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,w=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Da(d,v,E,w,h),nl(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?Da(d,v,E,w,h):rl(d,v):(F._visibility|=2,Da(d,v,E,w,h)),h&&L&2048&&Qf(v.alternate,v);break;case 24:Da(d,v,E,w,h),h&&L&2048&&Yf(v.alternate,v);break;default:Da(d,v,E,w,h)}i=i.sibling}}function rl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:rl(a,l),h&2048&&Qf(l.alternate,l);break;case 24:rl(a,l),h&2048&&Yf(l.alternate,l);break;default:rl(a,l)}i=i.sibling}}var sl=8192;function Oa(e){if(e.subtreeFlags&sl)for(e=e.child;e!==null;)O_(e),e=e.sibling}function O_(e){switch(e.tag){case 26:Oa(e),e.flags&sl&&e.memoizedState!==null&&RS(Bn,e.memoizedState,e.memoizedProps);break;case 5:Oa(e);break;case 3:case 4:var i=Bn;Bn=pc(e.stateNode.containerInfo),Oa(e),Bn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=sl,sl=16777216,Oa(e),sl=i):Oa(e));break;default:Oa(e)}}function N_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function al(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Pe=l,M_(l,e)}N_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)V_(e),e=e.sibling}function V_(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&mr(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ic(e)):al(e);break;default:al(e)}}function ic(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Pe=l,M_(l,e)}N_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:mr(8,i,i.return),ic(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ic(i));break;default:ic(i)}e=e.sibling}}function M_(e,i){for(;Pe!==null;){var a=Pe;switch(a.tag){case 0:case 11:case 15:mr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pe=l;else t:for(a=e;Pe!==null;){l=Pe;var h=l.sibling,d=l.return;if(b_(l),l===a){Pe=null;break t}if(h!==null){h.return=d,Pe=h;break t}Pe=d}}}var qA={getCacheForType:function(e){var i=Qe(Re),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},HA=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Wt=null,Ot=null,Ut=0,Gt=0,gn=null,_r=!1,Na=!1,Xf=!1,Fi=0,le=0,yr=0,Vs=0,$f=0,Nn=0,Va=0,ol=null,ln=null,Zf=!1,Wf=0,rc=1/0,sc=null,vr=null,je=0,Er=null,Ma=null,Pa=0,Jf=0,td=null,P_=null,ll=0,ed=null;function _n(){if((Ft&2)!==0&&Ut!==0)return Ut&-Ut;if(H.T!==null){var e=Ta;return e!==0?e:ld()}return er()}function x_(){Nn===0&&(Nn=(Ut&536870912)===0||Bt?_o():536870912);var e=On.current;return e!==null&&(e.flags|=32),Nn}function yn(e,i,a){(e===Wt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(xa(e,0),Tr(e,Ut,Nn,!1)),Ai(e,a),((Ft&2)===0||e!==Wt)&&(e===Wt&&((Ft&2)===0&&(Vs|=a),le===4&&Tr(e,Ut,Nn,!1)),li(e))}function k_(e,i,a){if((Ft&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||rs(e,i),h=l?KA(e,i):rd(e,i,!0),d=l;do{if(h===0){Na&&!l&&Tr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!FA(a)){h=rd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=ol;var w=E.current.memoizedState.isDehydrated;if(w&&(xa(E,v).flags|=256),v=rd(E,v,!1),v!==2){if(Xf&&!w){E.errorRecoveryDisabledLanes|=d,Vs|=d,h=4;break t}d=ln,ln=h,d!==null&&(ln===null?ln=d:ln.push.apply(ln,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){xa(e,0),Tr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Tr(l,i,Nn,!_r);break t;case 2:ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Wf+300-En(),10<h)){if(Tr(l,i,Nn,!_r),Ws(l,0,!0)!==0)break t;l.timeoutHandle=hy(U_.bind(null,l,a,ln,sc,Zf,i,Nn,Vs,Va,_r,d,2,-0,0),h);break t}U_(l,a,ln,sc,Zf,i,Nn,Vs,Va,_r,d,0,-0,0)}}break}while(!0);li(e)}function U_(e,i,a,l,h,d,v,E,w,L,F,Y,z,B){if(e.timeoutHandle=-1,Y=i.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(pl={stylesheets:null,count:0,unsuspend:wS},O_(i),Y=IS(),Y!==null)){e.cancelPendingCommit=Y(F_.bind(null,e,i,d,a,l,h,v,E,w,F,1,z,B)),Tr(e,d,v,!L);return}F_(e,i,d,a,l,h,v,E,w)}function FA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(e,i,a,l){i&=~$f,i&=~Vs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ke(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Qn(e,a,i)}function ac(){return(Ft&6)===0?(ul(0),!1):!0}function nd(){if(Ot!==null){if(Gt===0)var e=Ot.return;else e=Ot,ki=Rs=null,vf(e),Ia=null,Jo=0,e=Ot;for(;e!==null;)g_(e.alternate,e),e=e.return;Ot=null}}function xa(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,lS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nd(),Wt=e,Ot=a=Mi(e.current,null),Ut=i,Gt=0,gn=null,_r=!1,Na=rs(e,i),Xf=!1,Va=Nn=$f=Vs=yr=le=0,ln=ol=null,Zf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ke(l),d=1<<h;i|=e[h],l&=~d}return Fi=i,Cu(),a}function L_(e,i){Rt=null,H.H=Qu,i===Fo||i===Uu?(i=eg(),Gt=3):i===Wp?(i=eg(),Gt=4):Gt=i===n_?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gn=i,Ot===null&&(le=1,Wu(e,Rn(i,e.current)))}function z_(){var e=H.H;return H.H=Qu,e===null?Qu:e}function B_(){var e=H.A;return H.A=qA,e}function id(){le=4,_r||(Ut&4194048)!==Ut&&On.current!==null||(Na=!0),(yr&134217727)===0&&(Vs&134217727)===0||Wt===null||Tr(Wt,Ut,Nn,!1)}function rd(e,i,a){var l=Ft;Ft|=2;var h=z_(),d=B_();(Wt!==e||Ut!==i)&&(sc=null,xa(e,i)),i=!1;var v=le;t:do try{if(Gt!==0&&Ot!==null){var E=Ot,w=gn;switch(Gt){case 8:nd(),v=6;break t;case 3:case 2:case 9:case 6:On.current===null&&(i=!0);var L=Gt;if(Gt=0,gn=null,ka(e,E,w,L),a&&Na){v=0;break t}break;default:L=Gt,Gt=0,gn=null,ka(e,E,w,L)}}GA(),v=le;break}catch(F){L_(e,F)}while(!0);return i&&e.shellSuspendCounter++,ki=Rs=null,Ft=l,H.H=h,H.A=d,Ot===null&&(Wt=null,Ut=0,Cu()),v}function GA(){for(;Ot!==null;)j_(Ot)}function KA(e,i){var a=Ft;Ft|=2;var l=z_(),h=B_();Wt!==e||Ut!==i?(sc=null,rc=En()+500,xa(e,i)):Na=rs(e,i);t:do try{if(Gt!==0&&Ot!==null){i=Ot;var d=gn;e:switch(Gt){case 1:Gt=0,gn=null,ka(e,i,d,1);break;case 2:case 9:if(Jp(d)){Gt=0,gn=null,q_(i);break}i=function(){Gt!==2&&Gt!==9||Wt!==e||(Gt=7),li(e)},d.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:Jp(d)?(Gt=0,gn=null,q_(i)):(Gt=0,gn=null,ka(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var E=Ot;if(!v||Sy(v)){Gt=0,gn=null;var w=E.sibling;if(w!==null)Ot=w;else{var L=E.return;L!==null?(Ot=L,oc(L)):Ot=null}break e}}Gt=0,gn=null,ka(e,i,d,5);break;case 6:Gt=0,gn=null,ka(e,i,d,6);break;case 8:nd(),le=6;break t;default:throw Error(s(462))}}QA();break}catch(F){L_(e,F)}while(!0);return ki=Rs=null,H.H=l,H.A=h,Ft=a,Ot!==null?0:(Wt=null,Ut=0,Cu(),le)}function QA(){for(;Ot!==null&&!fo();)j_(Ot)}function j_(e){var i=m_(e.alternate,e,Fi);e.memoizedProps=e.pendingProps,i===null?oc(e):Ot=i}function q_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=l_(a,i,i.pendingProps,i.type,void 0,Ut);break;case 11:i=l_(a,i,i.pendingProps,i.type.render,i.ref,Ut);break;case 5:vf(i);default:g_(a,i),i=Ot=Hp(i,Fi),i=m_(a,i,Fi)}e.memoizedProps=e.pendingProps,i===null?oc(e):Ot=i}function ka(e,i,a,l){ki=Rs=null,vf(i),Ia=null,Jo=0;var h=i.return;try{if(kA(e,h,i,a,Ut)){le=1,Wu(e,Rn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;le=1,Wu(e,Rn(a,e.current)),Ot=null;return}i.flags&32768?(Bt||l===1?e=!0:Na||(Ut&536870912)!==0?e=!1:(_r=e=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),H_(i,e)):oc(i)}function oc(e){var i=e;do{if((i.flags&32768)!==0){H_(i,_r);return}e=i.return;var a=LA(i.alternate,i,Fi);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);le===0&&(le=5)}function H_(e,i){do{var a=zA(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);le=6,Ot=null}function F_(e,i,a,l,h,d,v,E,w){e.cancelPendingCommit=null;do lc();while(je!==0);if((Ft&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Qh,vo(e,a,d,v,E,w),e===Wt&&(Ot=Wt=null,Ut=0),Ma=i,Er=e,Pa=a,Jf=d,td=h,P_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ZA(ts,function(){return X_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,h=nt.p,nt.p=2,v=Ft,Ft|=4;try{BA(e,i,a)}finally{Ft=v,nt.p=h,H.T=l}}je=1,G_(),K_(),Q_()}}function G_(){if(je===1){je=0;var e=Er,i=Ma,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Ft;Ft|=4;try{I_(i,e);var d=gd,v=Mp(e.containerInfo),E=d.focusedElem,w=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Vp(E.ownerDocument.documentElement,E)){if(w!==null&&qh(E)){var L=w.start,F=w.end;if(F===void 0&&(F=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(F,E.value.length);else{var Y=E.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var B=z.getSelection(),Et=E.textContent.length,gt=Math.min(w.start,Et),Xt=w.end===void 0?gt:Math.min(w.end,Et);!B.extend&&gt>Xt&&(v=Xt,Xt=gt,gt=v);var P=Np(E,gt),O=Np(E,Xt);if(P&&O&&(B.rangeCount!==1||B.anchorNode!==P.node||B.anchorOffset!==P.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var U=Y.createRange();U.setStart(P.node,P.offset),B.removeAllRanges(),gt>Xt?(B.addRange(U),B.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),B.addRange(U))}}}}for(Y=[],B=E;B=B.parentNode;)B.nodeType===1&&Y.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Y.length;E++){var G=Y[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Ec=!!pd,gd=pd=null}finally{Ft=h,nt.p=l,H.T=a}}e.current=i,je=2}}function K_(){if(je===2){je=0;var e=Er,i=Ma,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Ft;Ft|=4;try{S_(e,i.alternate,i)}finally{Ft=h,nt.p=l,H.T=a}}je=3}}function Q_(){if(je===4||je===3){je=0,iu();var e=Er,i=Ma,a=Pa,l=P_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?je=5:(je=0,Ma=Er=null,Y_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(vr=null),Js(a),i=i.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(ae,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,h=nt.p,nt.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{H.T=i,nt.p=h}}(Pa&3)!==0&&lc(),li(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===ed?ll++:(ll=0,ed=e):ll=0,ul(0)}}function Y_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,qo(i)))}function lc(e){return G_(),K_(),Q_(),X_()}function X_(){if(je!==5)return!1;var e=Er,i=Jf;Jf=0;var a=Js(Pa),l=H.T,h=nt.p;try{nt.p=32>a?32:a,H.T=null,a=td,td=null;var d=Er,v=Pa;if(je=0,Ma=Er=null,Pa=0,(Ft&6)!==0)throw Error(s(331));var E=Ft;if(Ft|=4,V_(d.current),D_(d,d.current,v,a),Ft=E,ul(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(ae,d)}catch{}return!0}finally{nt.p=h,H.T=l,Y_(e,i)}}function $_(e,i,a){i=Rn(a,i),i=Mf(e.stateNode,i,2),e=cr(e,i,2),e!==null&&(Ai(e,2),li(e))}function $t(e,i,a){if(e.tag===3)$_(e,e,a);else for(;i!==null;){if(i.tag===3){$_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(vr===null||!vr.has(l))){e=Rn(a,e),a=t_(2),l=cr(i,a,2),l!==null&&(e_(a,l,i,e),Ai(l,2),li(l));break}}i=i.return}}function sd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new HA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Xf=!0,h.add(a),e=YA.bind(null,e,i,a),i.then(e,e))}function YA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(Ut&a)===a&&(le===4||le===3&&(Ut&62914560)===Ut&&300>En()-Wf?(Ft&2)===0&&xa(e,0):$f|=a,Va===Ut&&(Va=0)),li(e)}function Z_(e,i){i===0&&(i=yo()),e=_a(e,i),e!==null&&(Ai(e,i),li(e))}function XA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Z_(e,a)}function $A(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Z_(e,a)}function ZA(e,i){return Wr(e,i)}var uc=null,Ua=null,ad=!1,cc=!1,od=!1,Ms=0;function li(e){e!==Ua&&e.next===null&&(Ua===null?uc=Ua=e:Ua=Ua.next=e),cc=!0,ad||(ad=!0,JA())}function ul(e,i){if(!od&&cc){od=!0;do for(var a=!1,l=uc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Ke(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,ey(l,d))}else d=Ut,d=Ws(l,l===Wt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||rs(l,d)||(a=!0,ey(l,d));l=l.next}while(a);od=!1}}function WA(){W_()}function W_(){cc=ad=!1;var e=0;Ms!==0&&(oS()&&(e=Ms),Ms=0);for(var i=En(),a=null,l=uc;l!==null;){var h=l.next,d=J_(l,i);d===0?(l.next=null,a===null?uc=h:a.next=h,h===null&&(Ua=a)):(a=l,(e!==0||(d&3)!==0)&&(cc=!0)),l=h}ul(e)}function J_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ke(d),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&l)!==0)&&(h[v]=go(E,i)):w<=i&&(e.expiredLanes|=E),d&=~E}if(i=Wt,a=Ut,a=Ws(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Jr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||rs(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Jr(l),Js(a)){case 2:case 8:a=$s;break;case 32:a=ts;break;case 268435456:a=Zs;break;default:a=ts}return l=ty.bind(null,e),a=Wr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Jr(l),e.callbackPriority=2,e.callbackNode=null,2}function ty(e,i){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lc()&&e.callbackNode!==a)return null;var l=Ut;return l=Ws(e,e===Wt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(k_(e,l,i),J_(e,En()),e.callbackNode!=null&&e.callbackNode===a?ty.bind(null,e):null)}function ey(e,i){if(lc())return null;k_(e,i,!0)}function JA(){uS(function(){(Ft&6)!==0?Wr(mo,WA):W_()})}function ld(){return Ms===0&&(Ms=_o()),Ms}function ny(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sa(""+e)}function iy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function tS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=ny((h[pe]||null).action),v=l.submitter;v&&(i=(i=v[pe]||null)?ny(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new aa("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ms!==0){var w=v?iy(h,v):new FormData(h);Cf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=v?iy(h,v):new FormData(h),Cf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var ud=0;ud<Kh.length;ud++){var cd=Kh[ud],eS=cd.toLowerCase(),nS=cd[0].toUpperCase()+cd.slice(1);zn(eS,"on"+nS)}zn(kp,"onAnimationEnd"),zn(Up,"onAnimationIteration"),zn(Lp,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(vA,"onTransitionRun"),zn(EA,"onTransitionStart"),zn(TA,"onTransitionCancel"),zn(zp,"onTransitionEnd"),bi("onMouseEnter",["mouseout","mouseover"]),bi("onMouseLeave",["mouseout","mouseover"]),bi("onPointerEnter",["pointerout","pointerover"]),bi("onPointerLeave",["pointerout","pointerover"]),Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function ry(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],w=E.instance,L=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Zu(F)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(E=l[v],w=E.instance,L=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(F){Zu(F)}h.currentTarget=null,d=w}}}}function Nt(e,i){var a=i[To];a===void 0&&(a=i[To]=new Set);var l=e+"__bubble";a.has(l)||(sy(i,e,2,!1),a.add(l))}function hd(e,i,a){var l=0;i&&(l|=4),sy(a,e,l,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function fd(e){if(!e[hc]){e[hc]=!0,Ao.forEach(function(a){a!=="selectionchange"&&(iS.has(a)||hd(a,!1,e),hd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[hc]||(i[hc]=!0,hd("selectionchange",!1,i))}}function sy(e,i,a,l){switch(Dy(i)){case 2:var h=OS;break;case 8:h=NS;break;default:h=Rd}a=h.bind(null,i,a,e),h=void 0,!bn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function dd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=Si(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}E=E.parentNode}}l=l.return}du(function(){var L=d,F=Sn(a),Y=[];t:{var z=Bp.get(e);if(z!==void 0){var B=aa,Et=e;switch(e){case"keypress":if(Jn(a)===0)break t;case"keydown":case"keyup":B=fa;break;case"focusin":Et="focus",B=ua;break;case"focusout":Et="blur",B=ua;break;case"beforeblur":case"afterblur":B=ua;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Tu;break;case kp:case Up:case Lp:B=ca;break;case zp:B=Su;break;case"scroll":case"scrollend":B=mu;break;case"wheel":B=da;break;case"copy":case"cut":case"paste":B=ha;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Po;break;case"toggle":case"beforetoggle":B=wu}var gt=(i&4)!==0,Xt=!gt&&(e==="scroll"||e==="scrollend"),P=gt?z!==null?z+"Capture":null:z;gt=[];for(var O=L,U;O!==null;){var G=O;if(U=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||U===null||P===null||(G=fs(O,P),G!=null&&gt.push(hl(O,G,U))),Xt)break;O=O.return}0<gt.length&&(z=new B(z,Et,null,a,F),Y.push({event:z,listeners:gt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==Ii&&(Et=a.relatedTarget||a.fromElement)&&(Si(Et)||Et[Tn]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(Et=a.relatedTarget||a.toElement,B=L,Et=Et?Si(Et):null,Et!==null&&(Xt=u(Et),gt=Et.tag,Et!==Xt||gt!==5&&gt!==27&&gt!==6)&&(Et=null)):(B=null,Et=L),B!==Et)){if(gt=wn,G="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(gt=Po,G="onPointerLeave",P="onPointerEnter",O="pointer"),Xt=B==null?z:Xn(B),U=Et==null?z:Xn(Et),z=new gt(G,O+"leave",B,a,F),z.target=Xt,z.relatedTarget=U,G=null,Si(F)===L&&(gt=new gt(P,O+"enter",Et,a,F),gt.target=U,gt.relatedTarget=Xt,G=gt),Xt=G,B&&Et)e:{for(gt=B,P=Et,O=0,U=gt;U;U=La(U))O++;for(U=0,G=P;G;G=La(G))U++;for(;0<O-U;)gt=La(gt),O--;for(;0<U-O;)P=La(P),U--;for(;O--;){if(gt===P||P!==null&&gt===P.alternate)break e;gt=La(gt),P=La(P)}gt=null}else gt=null;B!==null&&ay(Y,z,B,gt,!1),Et!==null&&Xt!==null&&ay(Y,Xt,Et,gt,!0)}}t:{if(z=L?Xn(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var at=wp;else if(we(z))if(Rp)at=gA;else{at=mA;var Dt=dA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&Io(L.elementType)&&(at=wp):at=pA;if(at&&(at=at(e,L))){Vi(Y,at,a,F);break t}Dt&&Dt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&sr(z,"number",z.value)}switch(Dt=L?Xn(L):window,e){case"focusin":(we(Dt)||Dt.contentEditable==="true")&&(ma=Dt,Hh=L,Uo=null);break;case"focusout":Uo=Hh=ma=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,Pp(Y,a,F);break;case"selectionchange":if(yA)break;case"keydown":case"keyup":Pp(Y,a,F)}var ut;if(ni)t:{switch(e){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else xt?j(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(y&&a.locale!=="ko"&&(xt||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&xt&&(ut=Do()):(Wn=F,ar="value"in Wn?Wn.value:Wn.textContent,xt=!0)),Dt=fc(L,_t),0<Dt.length&&(_t=new Vo(_t,e,null,a,F),Y.push({event:_t,listeners:Dt}),ut?_t.data=ut:(ut=tt(a),ut!==null&&(_t.data=ut)))),(ut=m?be(e,a):kt(e,a))&&(_t=fc(L,"onBeforeInput"),0<_t.length&&(Dt=new Vo("onBeforeInput","beforeinput",null,a,F),Y.push({event:Dt,listeners:_t}),Dt.data=ut)),tS(Y,e,L,a,F)}ry(Y,i)})}function hl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function fc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=fs(e,a),h!=null&&l.unshift(hl(e,h,d)),h=fs(e,i),h!=null&&l.push(hl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function La(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ay(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,w=E.alternate,L=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||L===null||(w=L,h?(L=fs(a,d),L!=null&&v.unshift(hl(a,L,w))):h||(L=fs(a,d),L!=null&&v.push(hl(a,L,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var rS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function oy(e){return(typeof e=="string"?e:""+e).replace(rS,`
`).replace(sS,"")}function ly(e,i){return i=oy(i),oy(e)===i}function dc(){}function Yt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||An(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&An(e,""+l);break;case"className":$n(e,"class",l);break;case"tabIndex":$n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,l);break;case"style":Ro(e,l,d);break;case"data":if(i!=="object"){$n(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=sa(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Yt(e,i,"name",h.name,h,null),Yt(e,i,"formEncType",h.formEncType,h,null),Yt(e,i,"formMethod",h.formMethod,h,null),Yt(e,i,"formTarget",h.formTarget,h,null)):(Yt(e,i,"encType",h.encType,h,null),Yt(e,i,"method",h.method,h,null),Yt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=sa(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=dc);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=sa(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),rr(e,"popover",l);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":rr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kh.get(a)||a,rr(e,a,l))}}function md(e,i,a,l,h,d){switch(a){case"style":Ro(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?An(e,l):(typeof l=="number"||typeof l=="bigint")&&An(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ta.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[pe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):rr(e,a,l)}}}function qe(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Yt(e,i,d,v,a,null)}}h&&Yt(e,i,"srcSet",a.srcSet,a,null),l&&Yt(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var E=d=v=h=null,w=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":w=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Yt(e,i,l,F,a,null)}}us(e,d,E,w,L,v,h,!1),ra(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:Yt(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ri(e,!!l,i,!1):a!=null&&Ri(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Yt(e,i,v,E,a,null)}cs(e,l,h,d),ra(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Yt(e,i,w,l,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<cl.length;l++)Nt(cl[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Yt(e,i,L,l,a,null)}return;default:if(Io(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&md(e,i,F,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Yt(e,i,E,l,a,null))}function aS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,w=null,L=null,F=null;for(B in a){var Y=a[B];if(a.hasOwnProperty(B)&&Y!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=Y;default:l.hasOwnProperty(B)||Yt(e,i,B,null,l,Y)}}for(var z in l){var B=l[z];if(Y=a[z],l.hasOwnProperty(z)&&(B!=null||Y!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==Y&&Yt(e,i,z,B,l,Y)}}hn(e,v,E,w,L,F,d,h);return;case"select":B=v=E=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":B=w;default:l.hasOwnProperty(d)||Yt(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==w&&Yt(e,i,h,d,l,w)}i=E,a=v,l=B,z!=null?Ri(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ri(e,!!a,i,!0):Ri(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Yt(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Yt(e,i,v,h,l,d)}Kt(e,z,B);return;case"option":for(var Et in a)if(z=a[Et],a.hasOwnProperty(Et)&&z!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Yt(e,i,Et,null,l,z)}for(w in l)if(z=l[w],B=a[w],l.hasOwnProperty(w)&&z!==B&&(z!=null||B!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Yt(e,i,w,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in a)z=a[gt],a.hasOwnProperty(gt)&&z!=null&&!l.hasOwnProperty(gt)&&Yt(e,i,gt,null,l,z);for(L in l)if(z=l[L],B=a[L],l.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Yt(e,i,L,z,l,B)}return;default:if(Io(i)){for(var Xt in a)z=a[Xt],a.hasOwnProperty(Xt)&&z!==void 0&&!l.hasOwnProperty(Xt)&&md(e,i,Xt,void 0,l,z);for(F in l)z=l[F],B=a[F],!l.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||md(e,i,F,z,l,B);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&Yt(e,i,P,null,l,z);for(Y in l)z=l[Y],B=a[Y],!l.hasOwnProperty(Y)||z===B||z==null&&B==null||Yt(e,i,Y,z,l,B)}var pd=null,gd=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function uy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cy(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function _d(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yd=null;function oS(){var e=window.event;return e&&e.type==="popstate"?e===yd?!1:(yd=e,!0):(yd=null,!1)}var hy=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,fy=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof fy<"u"?function(e){return fy.resolve(null).then(e).catch(cS)}:hy;function cS(e){setTimeout(function(){throw e})}function Ar(e){return e==="head"}function dy(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&fl(v.documentElement),a&2&&fl(v.body),a&4)for(a=v.head,fl(a),v=a.firstChild;v;){var E=v.nextSibling,w=v.nodeName;v[ss]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),El(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);El(i)}function vd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vd(a),ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ss])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function fS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jn(e.nextSibling),e===null))return null;return e}function Ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function dS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function jn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Td=null;function my(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function py(e,i,a){switch(i=mc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function fl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ir(e)}var Vn=new Map,gy=new Set;function pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gi=nt.d;nt.d={f:mS,r:pS,D:gS,C:_S,L:yS,m:vS,X:TS,S:ES,M:AS};function mS(){var e=Gi.f(),i=ac();return e||i}function pS(e){var i=Yn(e);i!==null&&i.tag===5&&i.type==="form"?kg(i):Gi.r(e)}var za=typeof document>"u"?null:document;function _y(e,i,a){var l=za;if(l&&typeof i=="string"&&i){var h=ge(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),gy.has(h)||(gy.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),qe(i,"link",e),he(i),l.head.appendChild(i)))}}function gS(e){Gi.D(e),_y("dns-prefetch",e,null)}function _S(e,i){Gi.C(e,i),_y("preconnect",e,i)}function yS(e,i,a){Gi.L(e,i,a);var l=za;if(l&&e&&i){var h='link[rel="preload"][as="'+ge(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ge(a.imageSizes)+'"]')):h+='[href="'+ge(e)+'"]';var d=h;switch(i){case"style":d=Ba(e);break;case"script":d=ja(e)}Vn.has(d)||(e=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Vn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(dl(d))||i==="script"&&l.querySelector(ml(d))||(i=l.createElement("link"),qe(i,"link",e),he(i),l.head.appendChild(i)))}}function vS(e,i){Gi.m(e,i);var a=za;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ge(l)+'"][href="'+ge(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ja(e)}if(!Vn.has(d)&&(e=T({rel:"modulepreload",href:e},i),Vn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ml(d)))return}l=a.createElement("link"),qe(l,"link",e),he(l),a.head.appendChild(l)}}}function ES(e,i,a){Gi.S(e,i,a);var l=za;if(l&&e){var h=tn(l).hoistableStyles,d=Ba(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(dl(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Vn.get(d))&&Ad(e,a);var w=v=l.createElement("link");he(w),qe(w,"link",e),w._p=new Promise(function(L,F){w.onload=L,w.onerror=F}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,gc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function TS(e,i){Gi.X(e,i);var a=za;if(a&&e){var l=tn(a).hoistableScripts,h=ja(e),d=l.get(h);d||(d=a.querySelector(ml(h)),d||(e=T({src:e,async:!0},i),(i=Vn.get(h))&&Sd(e,i),d=a.createElement("script"),he(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function AS(e,i){Gi.M(e,i);var a=za;if(a&&e){var l=tn(a).hoistableScripts,h=ja(e),d=l.get(h);d||(d=a.querySelector(ml(h)),d||(e=T({src:e,async:!0,type:"module"},i),(i=Vn.get(h))&&Sd(e,i),d=a.createElement("script"),he(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function yy(e,i,a,l){var h=(h=Tt.current)?pc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ba(a.href),a=tn(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ba(a.href);var d=tn(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(dl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Vn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vn.set(e,a),d||SS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ja(a),a=tn(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ba(e){return'href="'+ge(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function vy(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function SS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),qe(i,"link",a),he(i),e.head.appendChild(i))}function ja(e){return'[src="'+ge(e)+'"]'}function ml(e){return"script[async]"+e}function Ey(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ge(a.href)+'"]');if(l)return i.instance=l,he(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),he(l),qe(l,"style",h),gc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ba(a.href);var d=e.querySelector(dl(h));if(d)return i.state.loading|=4,i.instance=d,he(d),d;l=vy(a),(h=Vn.get(h))&&Ad(l,h),d=(e.ownerDocument||e).createElement("link"),he(d);var v=d;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),qe(d,"link",l),i.state.loading|=4,gc(d,a.precedence,e),i.instance=d;case"script":return d=ja(a.src),(h=e.querySelector(ml(d)))?(i.instance=h,he(h),h):(l=a,(h=Vn.get(d))&&(l=T({},a),Sd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),he(h),qe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,gc(l,a.precedence,e));return i.instance}function gc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Ad(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Sd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var _c=null;function Ty(e,i,a){if(_c===null){var l=new Map,h=_c=new Map;h.set(a,l)}else h=_c,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ss]||d[Se]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function Ay(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function bS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Sy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var pl=null;function wS(){}function RS(e,i,a){if(pl===null)throw Error(s(475));var l=pl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ba(a.href),d=e.querySelector(dl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=yc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,he(d);return}d=e.ownerDocument||e,a=vy(a),(h=Vn.get(h))&&Ad(a,h),d=d.createElement("link"),he(d);var v=d;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),qe(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=yc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function IS(){if(pl===null)throw Error(s(475));var e=pl;return e.stylesheets&&e.count===0&&bd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&bd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function yc(){if(this.count--,this.count===0){if(this.stylesheets)bd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function bd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,i.forEach(CS,e),vc=null,yc.call(e))}function CS(e,i){if(!(i.state.loading&4)){var a=vc.get(e);if(a)var l=a.get(null);else{a=new Map,vc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=yc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var gl={$$typeof:st,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function DS(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ti(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.hiddenUpdates=Ti(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function by(e,i,a,l,h,d,v,E,w,L,F,Y){return e=new DS(e,i,a,v,E,w,L,Y),i=1,d===!0&&(i|=24),d=dn(3,null,null,i),e.current=d,d.stateNode=e,i=sf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},uf(d),e}function wy(e){return e?(e=ya,e):ya}function Ry(e,i,a,l,h,d){h=wy(h),l.context===null?l.context=h:l.pendingContext=h,l=ur(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=cr(e,l,i),a!==null&&(yn(a,e,i),Ko(a,e,i))}function Iy(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function wd(e,i){Iy(e,i),(e=e.alternate)&&Iy(e,i)}function Cy(e){if(e.tag===13){var i=_a(e,67108864);i!==null&&yn(i,e,67108864),wd(e,67108864)}}var Ec=!0;function OS(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=2,Rd(e,i,a,l)}finally{nt.p=d,H.T=h}}function NS(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=8,Rd(e,i,a,l)}finally{nt.p=d,H.T=h}}function Rd(e,i,a,l){if(Ec){var h=Id(l);if(h===null)dd(e,i,l,Tc,a),Oy(e,l);else if(MS(h,e,i,a,l))l.stopPropagation();else if(Oy(e,l),i&4&&-1<VS.indexOf(e)){for(;h!==null;){var d=Yn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=kn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-Ke(v);E.entanglements[1]|=w,v&=~w}li(d),(Ft&6)===0&&(rc=En()+500,ul(0))}}break;case 13:E=_a(d,2),E!==null&&yn(E,d,2),ac(),wd(d,2)}if(d=Id(l),d===null&&dd(e,i,l,Tc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else dd(e,i,l,null,a)}}function Id(e){return e=Sn(e),Cd(e)}var Tc=null;function Cd(e){if(Tc=null,e=Si(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Tc=e,null}function Dy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oh()){case mo:return 2;case $s:return 8;case ts:case Nh:return 32;case Zs:return 268435456;default:return 32}default:return 32}}var Dd=!1,Sr=null,br=null,wr=null,_l=new Map,yl=new Map,Rr=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oy(e,i){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(i.pointerId)}}function vl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Yn(i),i!==null&&Cy(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function MS(e,i,a,l,h){switch(i){case"focusin":return Sr=vl(Sr,e,i,a,l,h),!0;case"dragenter":return br=vl(br,e,i,a,l,h),!0;case"mouseover":return wr=vl(wr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return _l.set(d,vl(_l.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,yl.set(d,vl(yl.get(d)||null,e,i,a,l,h)),!0}return!1}function Ny(e){var i=Si(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,au(e.priority,function(){if(a.tag===13){var l=_n();l=tr(l);var h=_a(a,l);h!==null&&yn(h,a,l),wd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Id(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ii=l,a.target.dispatchEvent(l),Ii=null}else return i=Yn(a),i!==null&&Cy(i),e.blockedOn=a,!1;i.shift()}return!0}function Vy(e,i,a){Ac(e)&&a.delete(i)}function PS(){Dd=!1,Sr!==null&&Ac(Sr)&&(Sr=null),br!==null&&Ac(br)&&(br=null),wr!==null&&Ac(wr)&&(wr=null),_l.forEach(Vy),yl.forEach(Vy)}function Sc(e,i){e.blockedOn===i&&(e.blockedOn=null,Dd||(Dd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PS)))}var bc=null;function My(e){bc!==e&&(bc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===e&&(bc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Cd(l||a)===null)continue;break}var d=Yn(a);d!==null&&(e.splice(i,3),i-=3,Cf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function El(e){function i(w){return Sc(w,e)}Sr!==null&&Sc(Sr,e),br!==null&&Sc(br,e),wr!==null&&Sc(wr,e),_l.forEach(i),yl.forEach(i);for(var a=0;a<Rr.length;a++){var l=Rr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)Ny(a),a.blockedOn===null&&Rr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[pe]||null;if(typeof d=="function")v||My(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[pe]||null)E=v.formAction;else if(Cd(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),My(a)}}}function Od(e){this._internalRoot=e}wc.prototype.render=Od.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=_n();Ry(a,l,e,i,null,null)},wc.prototype.unmount=Od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Ry(e.current,2,null,e,null,null),ac(),i[Tn]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var i=er();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Rr.length&&i!==0&&i<Rr[a].priority;a++);Rr.splice(a,0,e),a===0&&Ny(e)}};var Py=t.version;if(Py!=="19.1.0")throw Error(s(527,Py,"19.1.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var xS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{ae=Rc.inject(xS),Ht=Rc}catch{}}return Al.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=$g,d=Zg,v=Wg,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=by(e,1,!1,null,null,a,l,h,d,v,E,null),e[Tn]=i.current,fd(e),new Od(i)},Al.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=$g,v=Zg,E=Wg,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=by(e,1,!0,i,a??null,l,h,d,v,E,w,L),i.context=wy(null),a=i.current,l=_n(),l=tr(l),h=ur(l),h.callback=null,cr(a,h,l),a=l,i.current.lanes=a,Ai(i,a),li(i),e[Tn]=i.current,fd(e),new wc(i)},Al.version="19.1.0",Al}var Fy;function GS(){if(Fy)return Md.exports;Fy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Md.exports=FS(),Md.exports}var KS=GS();const QS=()=>{};var Gy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},YS=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],p=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},CE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,p=f?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,T=u>>2,R=(u&3)<<4|p>>4;let D=(p&15)<<2|_>>6,q=_&63;g||(q=64,f||(D=64)),s.push(n[T],n[R],n[D],n[q])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(IE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):YS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],p=o<r.length?n[r.charAt(o)]:0;++o;const _=o<r.length?n[r.charAt(o)]:64;++o;const R=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||p==null||_==null||R==null)throw new XS;const D=u<<2|p>>4;if(s.push(D),_!==64){const q=p<<4&240|_>>2;if(s.push(q),R!==64){const $=_<<6&192|R;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class XS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $S=function(r){const t=IE(r);return CE.encodeByteArray(t,!0)},Kc=function(r){return $S(r).replace(/\./g,"")},DE=function(r){try{return CE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=()=>ZS().__FIREBASE_DEFAULTS__,JS=()=>{if(typeof process>"u"||typeof Gy>"u")return;const r=Gy.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},tb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&DE(r[1]);return t&&JSON.parse(t)},hh=()=>{try{return QS()||WS()||JS()||tb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},OE=r=>{var t,n;return(n=(t=hh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},NE=r=>{const t=OE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},VE=()=>{var r;return(r=hh())===null||r===void 0?void 0:r.config},ME=r=>{var t;return(t=hh())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bm(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Kc(JSON.stringify(n)),Kc(JSON.stringify(f)),""].join(".")}const Dl={};function nb(){const r={prod:[],emulator:[]};for(const t of Object.keys(Dl))Dl[t]?r.emulator.push(t):r.prod.push(t);return r}function ib(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let Ky=!1;function wm(r,t){if(typeof window>"u"||typeof document>"u"||!Xr(window.location.host)||Dl[r]===t||Dl[r]||Ky)return;Dl[r]=t;function n(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=nb().prod.length>0;function f(){const D=document.getElementById(s);D&&D.remove()}function p(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function g(D,q){D.setAttribute("width","24"),D.setAttribute("id",q),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function _(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{Ky=!0,f()},D}function T(D,q){D.setAttribute("id",q),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function R(){const D=ib(s),q=n("text"),$=document.getElementById(q)||document.createElement("span"),J=n("learnmore"),Z=document.getElementById(J)||document.createElement("a"),pt=n("preprendIcon"),ot=document.getElementById(pt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const st=D.element;p(st),T(Z,J);const dt=_();g(ot,pt),st.append(ot,$,Z,dt),document.body.appendChild(st)}u?($.innerText="Preview backend disconnected.",ot.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ot.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",R):R()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function sb(){var r;const t=(r=hh())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ab(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ob(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function lb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ub(){const r=Je();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function cb(){return!sb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hb(){try{return typeof indexedDB=="object"}catch{return!1}}function fb(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="FirebaseError";class vi extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=db,Object.setPrototypeOf(this,vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ql.prototype.create)}}class Ql{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?mb(u,s):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new vi(o,p,s)}}function mb(r,t){return r.replace(pb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const pb=/\{\$([^}]+)}/g;function gb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Us(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(Qy(u)&&Qy(f)){if(!Us(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Qy(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function bl(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function wl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function _b(r,t){const n=new yb(r,t);return n.subscribe.bind(n)}class yb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");vb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Ud),o.error===void 0&&(o.error=Ud),o.complete===void 0&&(o.complete=Ud);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Ud(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(r){return r&&r._delegate?r._delegate:r}class jr{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new eb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),o=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ab(t))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ps){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ps){return this.instances.has(t)}getOptions(t=Ps){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Tb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ps){return this.component?this.component.multipleInstances?t:Ps:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tb(r){return r===Ps?void 0:r}function Ab(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Eb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Vt||(Vt={}));const bb={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},wb=Vt.INFO,Rb={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},Ib=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Rb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Rm{constructor(t){this.name=t,this._logLevel=wb,this._logHandler=Ib,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const Cb=(r,t)=>t.some(n=>r instanceof n);let Yy,Xy;function Db(){return Yy||(Yy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ob(){return Xy||(Xy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xE=new WeakMap,Zd=new WeakMap,kE=new WeakMap,Ld=new WeakMap,Im=new WeakMap;function Nb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(xr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&xE.set(n,r)}).catch(()=>{}),Im.set(t,r),t}function Vb(r){if(Zd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Zd.set(r,t)}let Wd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Zd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||kE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Mb(r){Wd=r(Wd)}function Pb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(zd(this),t,...n);return kE.set(s,t.sort?t.sort():[t]),xr(s)}:Ob().includes(r)?function(...t){return r.apply(zd(this),t),xr(xE.get(this))}:function(...t){return xr(r.apply(zd(this),t))}}function xb(r){return typeof r=="function"?Pb(r):(r instanceof IDBTransaction&&Vb(r),Cb(r,Db())?new Proxy(r,Wd):r)}function xr(r){if(r instanceof IDBRequest)return Nb(r);if(Ld.has(r))return Ld.get(r);const t=xb(r);return t!==r&&(Ld.set(r,t),Im.set(t,r)),t}const zd=r=>Im.get(r);function kb(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),p=xr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(xr(f.result),g.oldVersion,g.newVersion,xr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const Ub=["get","getKey","getAll","getAllKeys","count"],Lb=["put","add","delete","clear"],Bd=new Map;function $y(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Bd.get(t))return Bd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=Lb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Ub.includes(n)))return;const u=async function(f,...p){const g=this.transaction(f,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[n](...p),o&&g.done]))[0]};return Bd.set(t,u),u}Mb(r=>({...r,get:(t,n,s)=>$y(t,n)||r.get(t,n,s),has:(t,n)=>!!$y(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Bb(r){const t=r.getComponent();return t?.type==="VERSION"}const Jd="@firebase/app",Zy="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Rm("@firebase/app"),jb="@firebase/app-compat",qb="@firebase/analytics-compat",Hb="@firebase/analytics",Fb="@firebase/app-check-compat",Gb="@firebase/app-check",Kb="@firebase/auth",Qb="@firebase/auth-compat",Yb="@firebase/database",Xb="@firebase/data-connect",$b="@firebase/database-compat",Zb="@firebase/functions",Wb="@firebase/functions-compat",Jb="@firebase/installations",tw="@firebase/installations-compat",ew="@firebase/messaging",nw="@firebase/messaging-compat",iw="@firebase/performance",rw="@firebase/performance-compat",sw="@firebase/remote-config",aw="@firebase/remote-config-compat",ow="@firebase/storage",lw="@firebase/storage-compat",uw="@firebase/firestore",cw="@firebase/ai",hw="@firebase/firestore-compat",fw="firebase",dw="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="[DEFAULT]",mw={[Jd]:"fire-core",[jb]:"fire-core-compat",[Hb]:"fire-analytics",[qb]:"fire-analytics-compat",[Gb]:"fire-app-check",[Fb]:"fire-app-check-compat",[Kb]:"fire-auth",[Qb]:"fire-auth-compat",[Yb]:"fire-rtdb",[Xb]:"fire-data-connect",[$b]:"fire-rtdb-compat",[Zb]:"fire-fn",[Wb]:"fire-fn-compat",[Jb]:"fire-iid",[tw]:"fire-iid-compat",[ew]:"fire-fcm",[nw]:"fire-fcm-compat",[iw]:"fire-perf",[rw]:"fire-perf-compat",[sw]:"fire-rc",[aw]:"fire-rc-compat",[ow]:"fire-gcs",[lw]:"fire-gcs-compat",[uw]:"fire-fst",[hw]:"fire-fst-compat",[cw]:"fire-vertex","fire-js":"fire-js",[fw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new Map,pw=new Map,em=new Map;function Wy(r,t){try{r.container.addComponent(t)}catch(n){Xi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function Ls(r){const t=r.name;if(em.has(t))return Xi.debug(`There were multiple attempts to register component ${t}.`),!1;em.set(t,r);for(const n of Qc.values())Wy(n,r);for(const n of pw.values())Wy(n,r);return!0}function fh(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Mn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new Ql("app","Firebase",gw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=dw;function UE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:tm,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw kr.create("bad-app-name",{appName:String(o)});if(n||(n=VE()),!n)throw kr.create("no-options");const u=Qc.get(o);if(u){if(Us(n,u.options)&&Us(s,u.config))return u;throw kr.create("duplicate-app",{appName:o})}const f=new Sb(o);for(const g of em.values())f.addComponent(g);const p=new _w(n,s,f);return Qc.set(o,p),p}function Cm(r=tm){const t=Qc.get(r);if(!t&&r===tm&&VE())return UE();if(!t)throw kr.create("no-app",{appName:r});return t}function hi(r,t,n){var s;let o=(s=mw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const p=[`Unable to register library "${o}" with version "${t}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&p.push("and"),f&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xi.warn(p.join(" "));return}Ls(new jr(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="firebase-heartbeat-database",vw=1,kl="firebase-heartbeat-store";let jd=null;function LE(){return jd||(jd=kb(yw,vw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(r=>{throw kr.create("idb-open",{originalErrorMessage:r.message})})),jd}async function Ew(r){try{const n=(await LE()).transaction(kl),s=await n.objectStore(kl).get(zE(r));return await n.done,s}catch(t){if(t instanceof vi)Xi.warn(t.message);else{const n=kr.create("idb-get",{originalErrorMessage:t?.message});Xi.warn(n.message)}}}async function Jy(r,t){try{const s=(await LE()).transaction(kl,"readwrite");await s.objectStore(kl).put(t,zE(r)),await s.done}catch(n){if(n instanceof vi)Xi.warn(n.message);else{const s=kr.create("idb-set",{originalErrorMessage:n?.message});Xi.warn(s.message)}}}function zE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=1024,Aw=30;class Sw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ww(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=tv();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Aw){const f=Rw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Xi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tv(),{heartbeatsToSend:s,unsentEntries:o}=bw(this._heartbeatsCache.heartbeats),u=Kc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Xi.warn(n),""}}}function tv(){return new Date().toISOString().substring(0,10)}function bw(r,t=Tw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),ev(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ev(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ww{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hb()?fb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ew(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function ev(r){return Kc(JSON.stringify({version:2,heartbeats:r})).length}function Rw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(r){Ls(new jr("platform-logger",t=>new zb(t),"PRIVATE")),Ls(new jr("heartbeat",t=>new Sw(t),"PRIVATE")),hi(Jd,Zy,r),hi(Jd,Zy,"esm2017"),hi("fire-js","")}Iw("");var Cw="firebase",Dw="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi(Cw,Dw,"app");var nv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,BE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,b){function I(){}I.prototype=b.prototype,V.D=b.prototype,V.prototype=new I,V.prototype.constructor=V,V.C=function(N,M,x){for(var C=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)C[Ae-2]=arguments[Ae];return b.prototype[M].apply(N,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,b,I){I||(I=0);var N=Array(16);if(typeof b=="string")for(var M=0;16>M;++M)N[M]=b.charCodeAt(I++)|b.charCodeAt(I++)<<8|b.charCodeAt(I++)<<16|b.charCodeAt(I++)<<24;else for(M=0;16>M;++M)N[M]=b[I++]|b[I++]<<8|b[I++]<<16|b[I++]<<24;b=V.g[0],I=V.g[1],M=V.g[2];var x=V.g[3],C=b+(x^I&(M^x))+N[0]+3614090360&4294967295;b=I+(C<<7&4294967295|C>>>25),C=x+(M^b&(I^M))+N[1]+3905402710&4294967295,x=b+(C<<12&4294967295|C>>>20),C=M+(I^x&(b^I))+N[2]+606105819&4294967295,M=x+(C<<17&4294967295|C>>>15),C=I+(b^M&(x^b))+N[3]+3250441966&4294967295,I=M+(C<<22&4294967295|C>>>10),C=b+(x^I&(M^x))+N[4]+4118548399&4294967295,b=I+(C<<7&4294967295|C>>>25),C=x+(M^b&(I^M))+N[5]+1200080426&4294967295,x=b+(C<<12&4294967295|C>>>20),C=M+(I^x&(b^I))+N[6]+2821735955&4294967295,M=x+(C<<17&4294967295|C>>>15),C=I+(b^M&(x^b))+N[7]+4249261313&4294967295,I=M+(C<<22&4294967295|C>>>10),C=b+(x^I&(M^x))+N[8]+1770035416&4294967295,b=I+(C<<7&4294967295|C>>>25),C=x+(M^b&(I^M))+N[9]+2336552879&4294967295,x=b+(C<<12&4294967295|C>>>20),C=M+(I^x&(b^I))+N[10]+4294925233&4294967295,M=x+(C<<17&4294967295|C>>>15),C=I+(b^M&(x^b))+N[11]+2304563134&4294967295,I=M+(C<<22&4294967295|C>>>10),C=b+(x^I&(M^x))+N[12]+1804603682&4294967295,b=I+(C<<7&4294967295|C>>>25),C=x+(M^b&(I^M))+N[13]+4254626195&4294967295,x=b+(C<<12&4294967295|C>>>20),C=M+(I^x&(b^I))+N[14]+2792965006&4294967295,M=x+(C<<17&4294967295|C>>>15),C=I+(b^M&(x^b))+N[15]+1236535329&4294967295,I=M+(C<<22&4294967295|C>>>10),C=b+(M^x&(I^M))+N[1]+4129170786&4294967295,b=I+(C<<5&4294967295|C>>>27),C=x+(I^M&(b^I))+N[6]+3225465664&4294967295,x=b+(C<<9&4294967295|C>>>23),C=M+(b^I&(x^b))+N[11]+643717713&4294967295,M=x+(C<<14&4294967295|C>>>18),C=I+(x^b&(M^x))+N[0]+3921069994&4294967295,I=M+(C<<20&4294967295|C>>>12),C=b+(M^x&(I^M))+N[5]+3593408605&4294967295,b=I+(C<<5&4294967295|C>>>27),C=x+(I^M&(b^I))+N[10]+38016083&4294967295,x=b+(C<<9&4294967295|C>>>23),C=M+(b^I&(x^b))+N[15]+3634488961&4294967295,M=x+(C<<14&4294967295|C>>>18),C=I+(x^b&(M^x))+N[4]+3889429448&4294967295,I=M+(C<<20&4294967295|C>>>12),C=b+(M^x&(I^M))+N[9]+568446438&4294967295,b=I+(C<<5&4294967295|C>>>27),C=x+(I^M&(b^I))+N[14]+3275163606&4294967295,x=b+(C<<9&4294967295|C>>>23),C=M+(b^I&(x^b))+N[3]+4107603335&4294967295,M=x+(C<<14&4294967295|C>>>18),C=I+(x^b&(M^x))+N[8]+1163531501&4294967295,I=M+(C<<20&4294967295|C>>>12),C=b+(M^x&(I^M))+N[13]+2850285829&4294967295,b=I+(C<<5&4294967295|C>>>27),C=x+(I^M&(b^I))+N[2]+4243563512&4294967295,x=b+(C<<9&4294967295|C>>>23),C=M+(b^I&(x^b))+N[7]+1735328473&4294967295,M=x+(C<<14&4294967295|C>>>18),C=I+(x^b&(M^x))+N[12]+2368359562&4294967295,I=M+(C<<20&4294967295|C>>>12),C=b+(I^M^x)+N[5]+4294588738&4294967295,b=I+(C<<4&4294967295|C>>>28),C=x+(b^I^M)+N[8]+2272392833&4294967295,x=b+(C<<11&4294967295|C>>>21),C=M+(x^b^I)+N[11]+1839030562&4294967295,M=x+(C<<16&4294967295|C>>>16),C=I+(M^x^b)+N[14]+4259657740&4294967295,I=M+(C<<23&4294967295|C>>>9),C=b+(I^M^x)+N[1]+2763975236&4294967295,b=I+(C<<4&4294967295|C>>>28),C=x+(b^I^M)+N[4]+1272893353&4294967295,x=b+(C<<11&4294967295|C>>>21),C=M+(x^b^I)+N[7]+4139469664&4294967295,M=x+(C<<16&4294967295|C>>>16),C=I+(M^x^b)+N[10]+3200236656&4294967295,I=M+(C<<23&4294967295|C>>>9),C=b+(I^M^x)+N[13]+681279174&4294967295,b=I+(C<<4&4294967295|C>>>28),C=x+(b^I^M)+N[0]+3936430074&4294967295,x=b+(C<<11&4294967295|C>>>21),C=M+(x^b^I)+N[3]+3572445317&4294967295,M=x+(C<<16&4294967295|C>>>16),C=I+(M^x^b)+N[6]+76029189&4294967295,I=M+(C<<23&4294967295|C>>>9),C=b+(I^M^x)+N[9]+3654602809&4294967295,b=I+(C<<4&4294967295|C>>>28),C=x+(b^I^M)+N[12]+3873151461&4294967295,x=b+(C<<11&4294967295|C>>>21),C=M+(x^b^I)+N[15]+530742520&4294967295,M=x+(C<<16&4294967295|C>>>16),C=I+(M^x^b)+N[2]+3299628645&4294967295,I=M+(C<<23&4294967295|C>>>9),C=b+(M^(I|~x))+N[0]+4096336452&4294967295,b=I+(C<<6&4294967295|C>>>26),C=x+(I^(b|~M))+N[7]+1126891415&4294967295,x=b+(C<<10&4294967295|C>>>22),C=M+(b^(x|~I))+N[14]+2878612391&4294967295,M=x+(C<<15&4294967295|C>>>17),C=I+(x^(M|~b))+N[5]+4237533241&4294967295,I=M+(C<<21&4294967295|C>>>11),C=b+(M^(I|~x))+N[12]+1700485571&4294967295,b=I+(C<<6&4294967295|C>>>26),C=x+(I^(b|~M))+N[3]+2399980690&4294967295,x=b+(C<<10&4294967295|C>>>22),C=M+(b^(x|~I))+N[10]+4293915773&4294967295,M=x+(C<<15&4294967295|C>>>17),C=I+(x^(M|~b))+N[1]+2240044497&4294967295,I=M+(C<<21&4294967295|C>>>11),C=b+(M^(I|~x))+N[8]+1873313359&4294967295,b=I+(C<<6&4294967295|C>>>26),C=x+(I^(b|~M))+N[15]+4264355552&4294967295,x=b+(C<<10&4294967295|C>>>22),C=M+(b^(x|~I))+N[6]+2734768916&4294967295,M=x+(C<<15&4294967295|C>>>17),C=I+(x^(M|~b))+N[13]+1309151649&4294967295,I=M+(C<<21&4294967295|C>>>11),C=b+(M^(I|~x))+N[4]+4149444226&4294967295,b=I+(C<<6&4294967295|C>>>26),C=x+(I^(b|~M))+N[11]+3174756917&4294967295,x=b+(C<<10&4294967295|C>>>22),C=M+(b^(x|~I))+N[2]+718787259&4294967295,M=x+(C<<15&4294967295|C>>>17),C=I+(x^(M|~b))+N[9]+3951481745&4294967295,V.g[0]=V.g[0]+b&4294967295,V.g[1]=V.g[1]+(M+(C<<21&4294967295|C>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+x&4294967295}s.prototype.u=function(V,b){b===void 0&&(b=V.length);for(var I=b-this.blockSize,N=this.B,M=this.h,x=0;x<b;){if(M==0)for(;x<=I;)o(this,V,x),x+=this.blockSize;if(typeof V=="string"){for(;x<b;)if(N[M++]=V.charCodeAt(x++),M==this.blockSize){o(this,N),M=0;break}}else for(;x<b;)if(N[M++]=V[x++],M==this.blockSize){o(this,N),M=0;break}}this.h=M,this.o+=b},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var b=1;b<V.length-8;++b)V[b]=0;var I=8*this.o;for(b=V.length-8;b<V.length;++b)V[b]=I&255,I/=256;for(this.u(V),V=Array(16),b=I=0;4>b;++b)for(var N=0;32>N;N+=8)V[I++]=this.g[b]>>>N&255;return V};function u(V,b){var I=p;return Object.prototype.hasOwnProperty.call(I,V)?I[V]:I[V]=b(V)}function f(V,b){this.h=b;for(var I=[],N=!0,M=V.length-1;0<=M;M--){var x=V[M]|0;N&&x==b||(I[M]=x,N=!1)}this.g=I}var p={};function g(V){return-128<=V&&128>V?u(V,function(b){return new f([b|0],0>b?-1:0)}):new f([V|0],0>V?-1:0)}function _(V){if(isNaN(V)||!isFinite(V))return R;if(0>V)return Z(_(-V));for(var b=[],I=1,N=0;V>=I;N++)b[N]=V/I|0,I*=4294967296;return new f(b,0)}function T(V,b){if(V.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(V.charAt(0)=="-")return Z(T(V.substring(1),b));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=_(Math.pow(b,8)),N=R,M=0;M<V.length;M+=8){var x=Math.min(8,V.length-M),C=parseInt(V.substring(M,M+x),b);8>x?(x=_(Math.pow(b,x)),N=N.j(x).add(_(C))):(N=N.j(I),N=N.add(_(C)))}return N}var R=g(0),D=g(1),q=g(16777216);r=f.prototype,r.m=function(){if(J(this))return-Z(this).m();for(var V=0,b=1,I=0;I<this.g.length;I++){var N=this.i(I);V+=(0<=N?N:4294967296+N)*b,b*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if($(this))return"0";if(J(this))return"-"+Z(this).toString(V);for(var b=_(Math.pow(V,6)),I=this,N="";;){var M=dt(I,b).g;I=pt(I,M.j(b));var x=((0<I.g.length?I.g[0]:I.h)>>>0).toString(V);if(I=M,$(I))return x+N;for(;6>x.length;)x="0"+x;N=x+N}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function $(V){if(V.h!=0)return!1;for(var b=0;b<V.g.length;b++)if(V.g[b]!=0)return!1;return!0}function J(V){return V.h==-1}r.l=function(V){return V=pt(this,V),J(V)?-1:$(V)?0:1};function Z(V){for(var b=V.g.length,I=[],N=0;N<b;N++)I[N]=~V.g[N];return new f(I,~V.h).add(D)}r.abs=function(){return J(this)?Z(this):this},r.add=function(V){for(var b=Math.max(this.g.length,V.g.length),I=[],N=0,M=0;M<=b;M++){var x=N+(this.i(M)&65535)+(V.i(M)&65535),C=(x>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);N=C>>>16,x&=65535,C&=65535,I[M]=C<<16|x}return new f(I,I[I.length-1]&-2147483648?-1:0)};function pt(V,b){return V.add(Z(b))}r.j=function(V){if($(this)||$(V))return R;if(J(this))return J(V)?Z(this).j(Z(V)):Z(Z(this).j(V));if(J(V))return Z(this.j(Z(V)));if(0>this.l(q)&&0>V.l(q))return _(this.m()*V.m());for(var b=this.g.length+V.g.length,I=[],N=0;N<2*b;N++)I[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<V.g.length;M++){var x=this.i(N)>>>16,C=this.i(N)&65535,Ae=V.i(M)>>>16,ee=V.i(M)&65535;I[2*N+2*M]+=C*ee,ot(I,2*N+2*M),I[2*N+2*M+1]+=x*ee,ot(I,2*N+2*M+1),I[2*N+2*M+1]+=C*Ae,ot(I,2*N+2*M+1),I[2*N+2*M+2]+=x*Ae,ot(I,2*N+2*M+2)}for(N=0;N<b;N++)I[N]=I[2*N+1]<<16|I[2*N];for(N=b;N<2*b;N++)I[N]=0;return new f(I,0)};function ot(V,b){for(;(V[b]&65535)!=V[b];)V[b+1]+=V[b]>>>16,V[b]&=65535,b++}function st(V,b){this.g=V,this.h=b}function dt(V,b){if($(b))throw Error("division by zero");if($(V))return new st(R,R);if(J(V))return b=dt(Z(V),b),new st(Z(b.g),Z(b.h));if(J(b))return b=dt(V,Z(b)),new st(Z(b.g),b.h);if(30<V.g.length){if(J(V)||J(b))throw Error("slowDivide_ only works with positive integers.");for(var I=D,N=b;0>=N.l(V);)I=mt(I),N=mt(N);var M=bt(I,1),x=bt(N,1);for(N=bt(N,2),I=bt(I,2);!$(N);){var C=x.add(N);0>=C.l(V)&&(M=M.add(I),x=C),N=bt(N,1),I=bt(I,1)}return b=pt(V,M.j(b)),new st(M,b)}for(M=R;0<=V.l(b);){for(I=Math.max(1,Math.floor(V.m()/b.m())),N=Math.ceil(Math.log(I)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),x=_(I),C=x.j(b);J(C)||0<C.l(V);)I-=N,x=_(I),C=x.j(b);$(x)&&(x=D),M=M.add(x),V=pt(V,C)}return new st(M,V)}r.A=function(V){return dt(this,V).h},r.and=function(V){for(var b=Math.max(this.g.length,V.g.length),I=[],N=0;N<b;N++)I[N]=this.i(N)&V.i(N);return new f(I,this.h&V.h)},r.or=function(V){for(var b=Math.max(this.g.length,V.g.length),I=[],N=0;N<b;N++)I[N]=this.i(N)|V.i(N);return new f(I,this.h|V.h)},r.xor=function(V){for(var b=Math.max(this.g.length,V.g.length),I=[],N=0;N<b;N++)I[N]=this.i(N)^V.i(N);return new f(I,this.h^V.h)};function mt(V){for(var b=V.g.length+1,I=[],N=0;N<b;N++)I[N]=V.i(N)<<1|V.i(N-1)>>>31;return new f(I,V.h)}function bt(V,b){var I=b>>5;b%=32;for(var N=V.g.length-I,M=[],x=0;x<N;x++)M[x]=0<b?V.i(x+I)>>>b|V.i(x+I+1)<<32-b:V.i(x+I);return new f(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,BE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=T,Ur=f}).apply(typeof nv<"u"?nv:typeof self<"u"?self:typeof window<"u"?window:{});var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jE,Rl,qE,kc,nm,HE,FE,GE;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ic=="object"&&Ic];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=n(this);function o(c,m){if(m)t:{var y=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var k=c[A];if(!(k in y))break t;y=y[k]}c=c[c.length-1],A=y[c],m=m(A),m!=A&&m!=null&&t(y,c,{configurable:!0,writable:!0,value:m})}}function u(c,m){c instanceof String&&(c+="");var y=0,A=!1,k={next:function(){if(!A&&y<c.length){var j=y++;return{value:m(j,c[j]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(c){return c||function(){return u(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function g(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function _(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function T(c,m,y){return c.call.apply(c.bind,arguments)}function R(c,m,y){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),c.apply(m,k)}}return function(){return c.apply(m,arguments)}}function D(c,m,y){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:R,D.apply(null,arguments)}function q(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function $(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(A,k,j){for(var tt=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)tt[xt-2]=arguments[xt];return m.prototype[k].apply(A,tt)}}function J(c){const m=c.length;if(0<m){const y=Array(m);for(let A=0;A<m;A++)y[A]=c[A];return y}return[]}function Z(c,m){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(g(A)){const k=c.length||0,j=A.length||0;c.length=k+j;for(let tt=0;tt<j;tt++)c[k+tt]=A[tt]}else c.push(A)}}class pt{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ot(c){return/^[\s\xa0]*$/.test(c)}function st(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function dt(c){return dt[" "](c),c}dt[" "]=function(){};var mt=st().indexOf("Gecko")!=-1&&!(st().toLowerCase().indexOf("webkit")!=-1&&st().indexOf("Edge")==-1)&&!(st().indexOf("Trident")!=-1||st().indexOf("MSIE")!=-1)&&st().indexOf("Edge")==-1;function bt(c,m,y){for(const A in c)m.call(y,c[A],A,c)}function V(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function b(c){const m={};for(const y in c)m[y]=c[y];return m}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let y,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(y in A)c[y]=A[y];for(let j=0;j<I.length;j++)y=I[j],Object.prototype.hasOwnProperty.call(A,y)&&(c[y]=A[y])}}function M(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function x(c){p.setTimeout(()=>{throw c},0)}function C(){var c=Pt;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class Ae{constructor(){this.h=this.g=null}add(m,y){const A=ee.get();A.set(m,y),this.h?this.h.next=A:this.g=A,this.h=A}}var ee=new pt(()=>new H,c=>c.reset());class H{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,lt=!1,Pt=new Ae,S=()=>{const c=p.Promise.resolve(void 0);nt=()=>{c.then(K)}};var K=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(y){x(y)}var m=ee;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}lt=!1};function et(){this.s=this.s,this.C=this.C}et.prototype.s=!1,et.prototype.ma=function(){this.s||(this.s=!0,this.N())},et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var ct=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};p.addEventListener("test",y,m),p.removeEventListener("test",y,m)}catch{}return c}();function Ct(c,m){if(W.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(mt){t:{try{dt(m.nodeName);var k=!0;break t}catch{}k=!1}k||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Tt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ct.aa.h.call(this)}}$(Ct,W);var Tt={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Zt=0;function Kn(c,m,y,A,k){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!A,this.ha=k,this.key=++Zt,this.da=this.fa=!1}function Ji(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ei(c){this.src=c,this.g={},this.h=0}Ei.prototype.add=function(c,m,y,A,k){var j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);var tt=Wr(c,m,A,k);return-1<tt?(m=c[tt],y||(m.fa=!1)):(m=new Kn(m,this.src,j,!!A,k),m.fa=y,c.push(m)),m};function Zr(c,m){var y=m.type;if(y in c.g){var A=c.g[y],k=Array.prototype.indexOf.call(A,m,void 0),j;(j=0<=k)&&Array.prototype.splice.call(A,k,1),j&&(Ji(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Wr(c,m,y,A){for(var k=0;k<c.length;++k){var j=c[k];if(!j.da&&j.listener==m&&j.capture==!!y&&j.ha==A)return k}return-1}var Jr="closure_lm_"+(1e6*Math.random()|0),fo={};function iu(c,m,y,A,k){if(Array.isArray(m)){for(var j=0;j<m.length;j++)iu(c,m[j],y,A,k);return null}return y=ru(y),c&&c[Oe]?c.K(m,y,_(A)?!!A.capture:!1,k):En(c,m,y,!1,A,k)}function En(c,m,y,A,k,j){if(!m)throw Error("Invalid event type");var tt=_(k)?!!k.capture:!!k,xt=Zs(c);if(xt||(c[Jr]=xt=new Ei(c)),y=xt.add(m,y,A,tt,j),y.proxy)return y;if(A=Oh(),y.proxy=A,A.src=c,A.listener=y,c.addEventListener)ct||(k=tt),k===void 0&&(k=!1),c.addEventListener(m.toString(),A,k);else if(c.attachEvent)c.attachEvent(ts(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Oh(){function c(y){return m.call(c.src,c.listener,y)}const m=Nh;return c}function mo(c,m,y,A,k){if(Array.isArray(m))for(var j=0;j<m.length;j++)mo(c,m[j],y,A,k);else A=_(A)?!!A.capture:!!A,y=ru(y),c&&c[Oe]?(c=c.i,m=String(m).toString(),m in c.g&&(j=c.g[m],y=Wr(j,y,A,k),-1<y&&(Ji(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete c.g[m],c.h--)))):c&&(c=Zs(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Wr(m,y,A,k)),(y=-1<c?m[c]:null)&&$s(y))}function $s(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Oe])Zr(m.i,c);else{var y=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(y,A,c.capture):m.detachEvent?m.detachEvent(ts(y),A):m.addListener&&m.removeListener&&m.removeListener(A),(y=Zs(m))?(Zr(y,c),y.h==0&&(y.src=null,m[Jr]=null)):Ji(c)}}}function ts(c){return c in fo?fo[c]:fo[c]="on"+c}function Nh(c,m){if(c.da)c=!0;else{m=new Ct(m,this);var y=c.listener,A=c.ha||c.src;c.fa&&$s(c),c=y.call(A,m)}return c}function Zs(c){return c=c[Jr],c instanceof Ei?c:null}var po="__closure_events_fn_"+(1e9*Math.random()>>>0);function ru(c){return typeof c=="function"?c:(c[po]||(c[po]=function(m){return c.handleEvent(m)}),c[po])}function ae(){et.call(this),this.i=new Ei(this),this.M=this,this.F=null}$(ae,et),ae.prototype[Oe]=!0,ae.prototype.removeEventListener=function(c,m,y,A){mo(this,c,m,y,A)};function Ht(c,m){var y,A=c.F;if(A)for(y=[];A;A=A.F)y.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new W(m,c);else if(m instanceof W)m.target=m.target||c;else{var k=m;m=new W(A,c),N(m,k)}if(k=!0,y)for(var j=y.length-1;0<=j;j--){var tt=m.g=y[j];k=cn(tt,A,!0,m)&&k}if(tt=m.g=c,k=cn(tt,A,!0,m)&&k,k=cn(tt,A,!1,m)&&k,y)for(j=0;j<y.length;j++)tt=m.g=y[j],k=cn(tt,A,!1,m)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],A=0;A<y.length;A++)Ji(y[A]);delete c.g[m],c.h--}}this.F=null},ae.prototype.K=function(c,m,y,A){return this.i.add(String(c),m,!1,y,A)},ae.prototype.L=function(c,m,y,A){return this.i.add(String(c),m,!0,y,A)};function cn(c,m,y,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var k=!0,j=0;j<m.length;++j){var tt=m[j];if(tt&&!tt.da&&tt.capture==y){var xt=tt.listener,be=tt.ha||tt.src;tt.fa&&Zr(c.i,tt),k=xt.call(be,A)!==!1&&k}}return k&&!A.defaultPrevented}function Ke(c,m,y){if(typeof c=="function")y&&(c=D(c,y));else if(c&&typeof c.handleEvent=="function")c=D(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(c,m||0)}function su(c){c.g=Ke(()=>{c.g=null,c.i&&(c.i=!1,su(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Vh extends et{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:su(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(c){et.call(this),this.h=c,this.g={}}$(es,et);var ns=[];function is(c){bt(c.g,function(m,y){this.g.hasOwnProperty(y)&&$s(m)},c),c.g={}}es.prototype.N=function(){es.aa.N.call(this),is(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kn=p.JSON.stringify,Ws=p.JSON.parse,rs=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function go(){}go.prototype.h=null;function _o(c){return c.h||(c.h=c.i())}function yo(){}var Ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ai(){W.call(this,"d")}$(Ai,W);function vo(){W.call(this,"c")}$(vo,W);var Qn={},Eo=null;function tr(){return Eo=Eo||new ae}Qn.La="serverreachability";function Js(c){W.call(this,Qn.La,c)}$(Js,W);function er(c){const m=tr();Ht(m,new Js(m))}Qn.STAT_EVENT="statevent";function au(c,m){W.call(this,Qn.STAT_EVENT,c),this.stat=m}$(au,W);function ne(c){const m=tr();Ht(m,new au(m,c))}Qn.Ma="timingevent";function Se(c,m){W.call(this,Qn.Ma,c),this.size=m}$(Se,W);function pe(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},m)}function Tn(){this.g=!0}Tn.prototype.xa=function(){this.g=!1};function To(c,m,y,A,k,j){c.info(function(){if(c.g)if(j)for(var tt="",xt=j.split("&"),be=0;be<xt.length;be++){var kt=xt[be].split("=");if(1<kt.length){var Ve=kt[0];kt=kt[1];var we=Ve.split("_");tt=2<=we.length&&we[1]=="type"?tt+(Ve+"="+kt+"&"):tt+(Ve+"=redacted&")}}else tt=null;else tt=j;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+m+`
`+y+`
`+tt})}function Mh(c,m,y,A,k,j,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+m+`
`+y+`
`+j+" "+tt})}function nr(c,m,y,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+ss(c,y)+(A?" "+A:"")})}function ou(c,m){c.info(function(){return"TIMEOUT: "+m})}Tn.prototype.info=function(){};function ss(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var A=y[c];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var j=k[0];if(j!="noop"&&j!="stop"&&j!="close")for(var tt=1;tt<k.length;tt++)k[tt]=""}}}}return kn(y)}catch{return m}}var ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yn;function Xn(){}$(Xn,go),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},Yn=new Xn;function tn(c,m,y,A){this.j=c,this.i=m,this.l=y,this.R=A||1,this.U=new es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new he}function he(){this.i=null,this.g="",this.h=!1}var Ao={},ta={};function Un(c,m,y){c.L=1,c.v=cs(hn(m)),c.m=y,c.P=!0,bi(c,null)}function bi(c,m){c.F=Date.now(),as(c),c.A=hn(c.v);var y=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Co(y.i,"t",A),c.C=0,y=c.j.J,c.h=new he,c.g=Su(c.j,y?m:null,!c.m),0<c.O&&(c.M=new Vh(D(c.Y,c,c.g),c.O)),m=c.U,y=c.g,A=c.ca;var k="readystatechange";Array.isArray(k)||(k&&(ns[0]=k.toString()),k=ns);for(var j=0;j<k.length;j++){var tt=iu(y,k[j],A||m.handleEvent,!1,m.h||m);if(!tt)break;m.g[tt.key]=tt}m=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),er(),To(c.i,c.u,c.A,c.l,c.R,c.m)}tn.prototype.ca=function(c){c=c.target;const m=this.M;m&&wn(c)==3?m.j():this.Y(c)},tn.prototype.Y=function(c){try{if(c==this.g)t:{const we=wn(this.g);var m=this.g.Ba();const Vi=this.g.Z();if(!(3>we)&&(we!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||we!=4||m==7||(m==8||0>=Vi?er(3):er(2)),rr(this);var y=this.g.Z();this.X=y;e:if(lu(this)){var A=pu(this.g);c="";var k=A.length,j=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Le(this),$n(this);var tt="";break e}this.h.i=new p.TextDecoder}for(m=0;m<k;m++)this.h.h=!0,c+=this.h.i.decode(A[m],{stream:!(j&&m==k-1)});A.length=0,this.h.g+=c,this.C=0,tt=this.h.g}else tt=this.g.oa();if(this.o=y==200,Mh(this.i,this.u,this.A,this.l,this.R,we,y),this.o){if(this.T&&!this.K){e:{if(this.g){var xt,be=this.g;if((xt=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ot(xt)){var kt=xt;break e}}kt=null}if(y=kt)nr(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,os(this,y);else{this.o=!1,this.s=3,ne(12),Le(this),$n(this);break t}}if(this.P){y=!0;let ze;for(;!this.J&&this.C<tt.length;)if(ze=uu(this,tt),ze==ta){we==4&&(this.s=4,ne(14),y=!1),nr(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==Ao){this.s=4,ne(15),nr(this.i,this.l,tt,"[Invalid Chunk]"),y=!1;break}else nr(this.i,this.l,ze,null),os(this,ze);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||tt.length!=0||this.h.h||(this.s=1,ne(16),y=!1),this.o=this.o&&y,!y)nr(this.i,this.l,tt,"[Invalid Chunked Response]"),Le(this),$n(this);else if(0<tt.length&&!this.W){this.W=!0;var Ve=this.j;Ve.g==this&&Ve.ba&&!Ve.M&&(Ve.j.info("Great, no buffering proxy detected. Bytes received: "+tt.length),ys(Ve),Ve.M=!0,ne(11))}}else nr(this.i,this.l,tt,null),os(this,tt);we==4&&Le(this),this.o&&!this.J&&(we==4?Eu(this.j,this):(this.o=!1,as(this)))}else Lh(this.g),y==400&&0<tt.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),Le(this),$n(this)}}}catch{}finally{}};function lu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function uu(c,m){var y=c.C,A=m.indexOf(`
`,y);return A==-1?ta:(y=Number(m.substring(y,A)),isNaN(y)?Ao:(A+=1,A+y>m.length?ta:(m=m.slice(A,A+y),c.C=A+y,m)))}tn.prototype.cancel=function(){this.J=!0,Le(this)};function as(c){c.S=Date.now()+c.I,cu(c,c.I)}function cu(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=pe(D(c.ba,c),m)}function rr(c){c.B&&(p.clearTimeout(c.B),c.B=null)}tn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ou(this.i,this.A),this.L!=2&&(er(),ne(17)),Le(this),this.s=2,$n(this)):cu(this,this.S-c)};function $n(c){c.j.G==0||c.J||Eu(c.j,c)}function Le(c){rr(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,is(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function os(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||So(y.h,c))){if(!c.K&&So(y.h,c)&&y.G==3){try{var A=y.Da.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)fa(y),ca(y);else break t;Mo(y),ne(18)}}else y.za=k[1],0<y.za-y.T&&37500>k[2]&&y.F&&y.v==0&&!y.C&&(y.C=pe(D(y.Za,y),6e3));if(1>=na(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Ni(y,11)}else if((c.K||y.g==c)&&fa(y),!ot(m))for(k=y.Da.g.parse(m),m=0;m<k.length;m++){let kt=k[m];if(y.T=kt[0],kt=kt[1],y.G==2)if(kt[0]=="c"){y.K=kt[1],y.ia=kt[2];const Ve=kt[3];Ve!=null&&(y.la=Ve,y.j.info("VER="+y.la));const we=kt[4];we!=null&&(y.Aa=we,y.j.info("SVER="+y.Aa));const Vi=kt[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(A=1.5*Vi,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const ze=c.g;if(ze){const ii=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var j=A.h;j.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ia(j,j.h),j.h=null))}if(A.D){const xo=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(A.ya=xo,Kt(A.I,A.D,xo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var tt=c;if(A.qa=Au(A,A.J?A.ia:null,A.W),tt.K){en(A.h,tt);var xt=tt,be=A.L;be&&(xt.I=be),xt.B&&(rr(xt),as(xt)),A.g=tt}else yu(A);0<y.i.length&&ha(y)}else kt[0]!="stop"&&kt[0]!="close"||Ni(y,7);else y.G==3&&(kt[0]=="stop"||kt[0]=="close"?kt[0]=="stop"?Ni(y,7):No(y):kt[0]!="noop"&&y.l&&y.l.ta(kt),y.v=0)}}er(4)}catch{}}var hu=class{constructor(c,m){this.g=c,this.map=m}};function wi(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ea(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function na(c){return c.h?1:c.g?c.g.size:0}function So(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function ia(c,m){c.g?c.g.add(m):c.h=m}function en(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}wi.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function bo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return J(c.i)}function Ph(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var m=[],y=c.length,A=0;A<y;A++)m.push(c[A]);return m}m=[],y=0;for(A in c)m[y++]=c[A];return m}function ra(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const A in c)m[y++]=A;return m}}}function wo(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=ra(c),A=Ph(c),k=A.length,j=0;j<k;j++)m.call(void 0,A[j],y&&y[j],c)}var ls=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xh(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var A=c[y].indexOf("="),k=null;if(0<=A){var j=c[y].substring(0,A);k=c[y].substring(A+1)}else j=c[y];m(j,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ge(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ge){this.h=c.h,us(this,c.j),this.o=c.o,this.g=c.g,sr(this,c.s),this.l=c.l;var m=c.i,y=new Ii;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),Ri(this,y),this.m=c.m}else c&&(m=String(c).match(ls))?(this.h=!1,us(this,m[1]||"",!0),this.o=An(m[2]||""),this.g=An(m[3]||"",!0),sr(this,m[4]),this.l=An(m[5]||"",!0),Ri(this,m[6]||"",!0),this.m=An(m[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}ge.prototype.toString=function(){var c=[],m=this.j;m&&c.push(hs(m,Ro,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(hs(m,Ro,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(hs(y,y.charAt(0)=="/"?kh:Io,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",hs(y,sa)),c.join("")};function hn(c){return new ge(c)}function us(c,m,y){c.j=y?An(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function sr(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function Ri(c,m,y){m instanceof Ii?(c.i=m,du(c.i,c.h)):(y||(m=hs(m,Uh)),c.i=new Ii(m,c.h))}function Kt(c,m,y){c.i.set(m,y)}function cs(c){return Kt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function An(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function hs(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,fu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function fu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ro=/[#\/\?@]/g,Io=/[#\?:]/g,kh=/[#\?]/g,Uh=/[#\?@]/g,sa=/#/g;function Ii(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Sn(c){c.g||(c.g=new Map,c.h=0,c.i&&xh(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}r=Ii.prototype,r.add=function(c,m){Sn(this),this.i=null,c=Zn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function Ci(c,m){Sn(c),m=Zn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Di(c,m){return Sn(c),m=Zn(c,m),c.g.has(m)}r.forEach=function(c,m){Sn(this),this.g.forEach(function(y,A){y.forEach(function(k){c.call(m,k,A,this)},this)},this)},r.na=function(){Sn(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let A=0;A<m.length;A++){const k=c[A];for(let j=0;j<k.length;j++)y.push(m[A])}return y},r.V=function(c){Sn(this);let m=[];if(typeof c=="string")Di(this,c)&&(m=m.concat(this.g.get(Zn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},r.set=function(c,m){return Sn(this),this.i=null,c=Zn(this,c),Di(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Co(c,m,y){Ci(c,m),0<y.length&&(c.i=null,c.g.set(Zn(c,m),J(y)),c.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var A=m[y];const j=encodeURIComponent(String(A)),tt=this.V(A);for(A=0;A<tt.length;A++){var k=j;tt[A]!==""&&(k+="="+encodeURIComponent(String(tt[A]))),c.push(k)}}return this.i=c.join("&")};function Zn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function du(c,m){m&&!c.j&&(Sn(c),c.i=null,c.g.forEach(function(y,A){var k=A.toLowerCase();A!=k&&(Ci(this,A),Co(this,k,y))},c)),c.j=m}function fs(c,m){const y=new Tn;if(p.Image){const A=new Image;A.onload=q(bn,y,"TestLoadImage: loaded",!0,m,A),A.onerror=q(bn,y,"TestLoadImage: error",!1,m,A),A.onabort=q(bn,y,"TestLoadImage: abort",!1,m,A),A.ontimeout=q(bn,y,"TestLoadImage: timeout",!1,m,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function Ln(c,m){const y=new Tn,A=new AbortController,k=setTimeout(()=>{A.abort(),bn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(j=>{clearTimeout(k),j.ok?bn(y,"TestPingServer: ok",!0,m):bn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(k),bn(y,"TestPingServer: error",!1,m)})}function bn(c,m,y,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(y)}catch{}}function ds(){this.g=new rs}function Wn(c,m,y){const A=y||"";try{wo(c,function(k,j){let tt=k;_(k)&&(tt=kn(k)),m.push(A+j+"="+encodeURIComponent(tt))})}catch(k){throw m.push(A+"type="+encodeURIComponent("_badmap")),k}}function ar(c){this.l=c.Ub||null,this.j=c.eb||!1}$(ar,go),ar.prototype.g=function(){return new Oi(this.l,this.j)},ar.prototype.i=function(c){return function(){return c}}({});function Oi(c,m){ae.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Oi,ae),r=Oi.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,ti(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Do(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Do(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Jn(this):ti(this),this.readyState==3&&Do(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Jn(this))},r.Qa=function(c){this.g&&(this.response=c,Jn(this))},r.ga=function(){this.g&&Jn(this)};function Jn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ti(c)}r.setRequestHeader=function(c,m){this.u.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function ti(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Oo(c){let m="";return bt(c,function(y,A){m+=A,m+=":",m+=y,m+=`\r
`}),m}function Ne(c,m,y){t:{for(A in y){var A=!1;break t}A=!0}A||(y=Oo(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Kt(c,m,y))}function jt(c){ae.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(jt,ae);var aa=/^https?$/i,ms=["POST","PUT"];r=jt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,m,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?_o(this.o):_o(Yn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(j){mu(this,j);return}if(c=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)y.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())y.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),k=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ms,m,void 0))||A||k||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,tt]of y)this.g.setRequestHeader(j,tt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(c),this.u=!1}catch(j){mu(this,j)}};function mu(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,oa(c),ei(c)}function oa(c){c.A||(c.A=!0,Ht(c,"complete"),Ht(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ht(this,"complete"),Ht(this,"abort"),ei(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},r.bb=function(){la(this)};function la(c){if(c.h&&typeof f<"u"&&(!c.v[1]||wn(c)!=4||c.Z()!=2)){if(c.u&&wn(c)==4)Ke(c.Ea,0,c);else if(Ht(c,"readystatechange"),wn(c)==4){c.h=!1;try{const tt=c.Z();t:switch(tt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var y;if(!(y=m)){var A;if(A=tt===0){var k=String(c.D).match(ls)[1]||null;!k&&p.self&&p.self.location&&(k=p.self.location.protocol.slice(0,-1)),A=!aa.test(k?k.toLowerCase():"")}y=A}if(y)Ht(c,"complete"),Ht(c,"success");else{c.m=6;try{var j=2<wn(c)?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.Z()+"]",oa(c)}}finally{ei(c)}}}}function ei(c,m){if(c.g){ps(c);const y=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Ht(c,"ready");try{y.onreadystatechange=A}catch{}}}function ps(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function wn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Ws(m)}};function pu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Lh(c){const m={};c=(c.g&&2<=wn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ot(c[A]))continue;var y=M(c[A]);const k=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=m[k]||[];m[k]=j,j.push(y)}V(m,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function ua(c){this.Aa=0,this.i=[],this.j=new Tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gs("baseRetryDelayMs",5e3,c),this.cb=gs("retryDelaySeedMs",1e4,c),this.Wa=gs("forwardChannelMaxRetries",2,c),this.wa=gs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new wi(c&&c.concurrentRequestLimit),this.Da=new ds,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ua.prototype,r.la=8,r.G=1,r.connect=function(c,m,y,A){ne(0),this.W=c,this.H=m||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=Au(this,null,this.W),ha(this)};function No(c){if(gu(c),c.G==3){var m=c.U++,y=hn(c.I);if(Kt(y,"SID",c.K),Kt(y,"RID",m),Kt(y,"TYPE","terminate"),_s(c,y),m=new tn(c,c.j,m),m.L=2,m.v=cs(hn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=m.v,y=!0),y||(m.g=Su(m.j,null),m.g.ea(m.v)),m.F=Date.now(),as(m)}Tu(c)}function ca(c){c.g&&(ys(c),c.g.cancel(),c.g=null)}function gu(c){ca(c),c.u&&(p.clearTimeout(c.u),c.u=null),fa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function ha(c){if(!ea(c.h)&&!c.s){c.s=!0;var m=c.Ga;nt||S(),lt||(nt(),lt=!0),Pt.add(m,c),c.B=0}}function zh(c,m){return na(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=pe(D(c.Ga,c,m),Po(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const k=new tn(this,this.j,c);let j=this.o;if(this.S&&(j?(j=b(j),N(j,this.S)):j=this.S),this.m!==null||this.O||(k.H=j,j=null),this.P)t:{for(var m=0,y=0;y<this.i.length;y++){e:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,4096<m){m=y;break t}if(m===4096||y===this.i.length-1){m=y+1;break t}}m=1e3}else m=1e3;m=_u(this,k,m),y=hn(this.I),Kt(y,"RID",c),Kt(y,"CVER",22),this.D&&Kt(y,"X-HTTP-Session-Id",this.D),_s(this,y),j&&(this.O?m="headers="+encodeURIComponent(String(Oo(j)))+"&"+m:this.m&&Ne(y,this.m,j)),ia(this.h,k),this.Ua&&Kt(y,"TYPE","init"),this.P?(Kt(y,"$req",m),Kt(y,"SID","null"),k.T=!0,Un(k,y,null)):Un(k,y,m),this.G=2}}else this.G==3&&(c?Vo(this,c):this.i.length==0||ea(this.h)||Vo(this))};function Vo(c,m){var y;m?y=m.l:y=c.U++;const A=hn(c.I);Kt(A,"SID",c.K),Kt(A,"RID",y),Kt(A,"AID",c.T),_s(c,A),c.m&&c.o&&Ne(A,c.m,c.o),y=new tn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=_u(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ia(c.h,y),Un(y,A,m)}function _s(c,m){c.H&&bt(c.H,function(y,A){Kt(m,A,y)}),c.l&&wo({},function(y,A){Kt(m,A,y)})}function _u(c,m,y){y=Math.min(c.i.length,y);var A=c.l?D(c.l.Na,c.l,c):null;t:{var k=c.i;let j=-1;for(;;){const tt=["count="+y];j==-1?0<y?(j=k[0].g,tt.push("ofs="+j)):j=0:tt.push("ofs="+j);let xt=!0;for(let be=0;be<y;be++){let kt=k[be].g;const Ve=k[be].map;if(kt-=j,0>kt)j=Math.max(0,k[be].g-100),xt=!1;else try{Wn(Ve,tt,"req"+kt+"_")}catch{A&&A(Ve)}}if(xt){A=tt.join("&");break t}}}return c=c.i.splice(0,y),m.D=c,A}function yu(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;nt||S(),lt||(nt(),lt=!0),Pt.add(m,c),c.v=0}}function Mo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=pe(D(c.Fa,c),Po(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=pe(D(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ne(10),ca(this),vu(this))};function ys(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function vu(c){c.g=new tn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=hn(c.qa);Kt(m,"RID","rpc"),Kt(m,"SID",c.K),Kt(m,"AID",c.T),Kt(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Kt(m,"TO",c.ja),Kt(m,"TYPE","xmlhttp"),_s(c,m),c.m&&c.o&&Ne(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=cs(hn(m)),y.m=null,y.P=!0,bi(y,c)}r.Za=function(){this.C!=null&&(this.C=null,ca(this),Mo(this),ne(19))};function fa(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function Eu(c,m){var y=null;if(c.g==m){fa(c),ys(c),c.g=null;var A=2}else if(So(c.h,m))y=m.D,en(c.h,m),A=1;else return;if(c.G!=0){if(m.o)if(A==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var k=c.B;A=tr(),Ht(A,new Se(A,y)),ha(c)}else yu(c);else if(k=m.s,k==3||k==0&&0<m.X||!(A==1&&zh(c,m)||A==2&&Mo(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),k){case 1:Ni(c,5);break;case 4:Ni(c,10);break;case 3:Ni(c,6);break;default:Ni(c,2)}}}function Po(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function Ni(c,m){if(c.j.info("Error code "+m),m==2){var y=D(c.fb,c),A=c.Xa;const k=!A;A=new ge(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||us(A,"https"),cs(A),k?fs(A.toString(),y):Ln(A.toString(),y)}else ne(2);c.G=0,c.l&&c.l.sa(m),Tu(c),gu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ne(2)):(this.j.info("Failed to ping google.com"),ne(1))};function Tu(c){if(c.G=0,c.ka=[],c.l){const m=bo(c.h);(m.length!=0||c.i.length!=0)&&(Z(c.ka,m),Z(c.ka,c.i),c.h.i.length=0,J(c.i),c.i.length=0),c.l.ra()}}function Au(c,m,y){var A=y instanceof ge?hn(y):new ge(y);if(A.g!="")m&&(A.g=m+"."+A.g),sr(A,A.s);else{var k=p.location;A=k.protocol,m=m?m+"."+k.hostname:k.hostname,k=+k.port;var j=new ge(null);A&&us(j,A),m&&(j.g=m),k&&sr(j,k),y&&(j.l=y),A=j}return y=c.D,m=c.ya,y&&m&&Kt(A,y,m),Kt(A,"VER",c.la),_s(c,A),A}function Su(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new jt(new ar({eb:y})):new jt(c.pa),m.Ha(c.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function bu(){}r=bu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function da(){}da.prototype.g=function(c,m){return new nn(c,m)};function nn(c,m){ae.call(this),this.g=new ua(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!ot(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ot(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new ni(this)}$(nn,ae),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){No(this.g)},nn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=kn(c),c=y);m.i.push(new hu(m.Ya++,c)),m.G==3&&ha(m)},nn.prototype.N=function(){this.g.l=null,delete this.j,No(this.g),delete this.g,nn.aa.N.call(this)};function wu(c){Ai.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const y in m){c=y;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}$(wu,Ai);function Ru(){vo.call(this),this.status=1}$(Ru,vo);function ni(c){this.g=c}$(ni,bu),ni.prototype.ua=function(){Ht(this.g,"a")},ni.prototype.ta=function(c){Ht(this.g,new wu(c))},ni.prototype.sa=function(c){Ht(this.g,new Ru)},ni.prototype.ra=function(){Ht(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,GE=function(){return new da},FE=function(){return tr()},HE=Qn,nm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ir.NO_ERROR=0,ir.TIMEOUT=8,ir.HTTP_ERROR=6,kc=ir,Si.COMPLETE="complete",qE=Si,yo.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Rl=yo,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,jE=jt}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});const iv="@firebase/firestore",rv="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Rm("@firebase/firestore");function qa(){return zs.logLevel}function rt(r,...t){if(zs.logLevel<=Vt.DEBUG){const n=t.map(Dm);zs.debug(`Firestore (${so}): ${r}`,...n)}}function $i(r,...t){if(zs.logLevel<=Vt.ERROR){const n=t.map(Dm);zs.error(`Firestore (${so}): ${r}`,...n)}}function qr(r,...t){if(zs.logLevel<=Vt.WARN){const n=t.map(Dm);zs.warn(`Firestore (${so}): ${r}`,...n)}}function Dm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,KE(r,s,n)}function KE(r,t,n){let s=`FIRESTORE (${so}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw $i(s),new Error(s)}function qt(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||KE(t,o,s)}function St(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class it extends vi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ow{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class Nw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vw{constructor(t){this.t=t,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){qt(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Lr,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;t.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},p=g=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Lr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(qt(typeof s.accessToken=="string",31837,{l:s}),new QE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return qt(t===null||typeof t=="string",2055,{h:t}),new Ze(t)}}class Mw{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Pw{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new Mw(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xw{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){qt(this.o===void 0,3512);const s=u=>{u.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,rt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new sv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(qt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new sv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=kw(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function It(r,t){return r<t?-1:r>t?1:0}function im(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return It(s,o);{const u=YE(),f=Uw(u.encode(av(r,n)),u.encode(av(t,n)));return f!==0?f:It(s,o)}}n+=s>65535?2:1}return It(r.length,t.length)}function av(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Uw(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return It(r[n],t[n]);return It(r.length,t.length)}function Ja(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="__name__";class ui{constructor(t,n,s){n===void 0?n=0:n>t.length&&vt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&vt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ui.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ui?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=ui.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return It(t.length,n.length)}static compareSegments(t,n){const s=ui.isNumericId(t),o=ui.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ui.extractNumericId(t).compare(ui.extractNumericId(n)):im(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ur.fromString(t.substring(4,t.length-2))}}class Jt extends ui{construct(t,n,s){return new Jt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new it(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new Jt(n)}static emptyPath(){return new Jt([])}}const Lw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends ui{construct(t,n,s){return new Fe(t,n,s)}static isValidIdentifier(t){return Lw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ov}static keyField(){return new Fe([ov])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new it(Q.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new it(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new it(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(s+=p,o++):(u(),o++)}if(u(),f)throw new it(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.path=t}static fromPath(t){return new ft(Jt.fromString(t))}static fromName(t){return new ft(Jt.fromString(t).popFirst(5))}static empty(){return new ft(Jt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Jt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Jt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ft(new Jt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(r,t,n){if(!n)throw new it(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function zw(r,t,n,s){if(t===!0&&s===!0)throw new it(Q.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function lv(r){if(!ft.isDocumentKey(r))throw new it(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function uv(r){if(ft.isDocumentKey(r))throw new it(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function $E(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function dh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":vt(12329,{type:typeof r})}function Yc(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new it(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dh(r);throw new it(Q.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(r,t){const n={typeString:r};return t&&(n.value=t),n}function Xl(r,t){if(!$E(r))throw new it(Q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new it(Q.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=-62135596800,hv=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(t){return te.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*hv);return new te(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new it(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new it(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<cv)throw new it(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new it(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hv}_compareTo(t){return this.seconds===t.seconds?It(this.nanoseconds,t.nanoseconds):It(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Xl(t,te._jsonSchema))return new te(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-cv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:Te("string",te._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new te(0,0))}static max(){return new At(new te(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=-1;function Bw(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=At.fromTimestamp(s===1e9?new te(n+1,0):new te(n,s));return new Hr(o,ft.empty(),t)}function jw(r){return new Hr(r.readTime,r.key,Ul)}class Hr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Hr(At.min(),ft.empty(),Ul)}static max(){return new Hr(At.max(),ft.empty(),Ul)}}function qw(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ft.comparator(r.documentKey,t.documentKey),n!==0?n:It(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==Hw)throw r;rt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&vt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new X((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):X.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):X.reject(n)}static resolve(t){return new X((n,s)=>{n(t)})}static reject(t){return new X((n,s)=>{s(t)})}static waitFor(t){return new X((n,s)=>{let o=0,u=0,f=!1;t.forEach(p=>{++o,p.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(t){let n=X.resolve(!1);for(const s of t)n=n.next(o=>o?X.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new X((s,o)=>{const u=t.length,f=new Array(u);let p=0;for(let g=0;g<u;g++){const _=g;n(t[_]).next(T=>{f[_]=T,++p,p===u&&s(f)},T=>o(T))}})}static doWhile(t,n){return new X((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function Gw(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}mh.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=-1;function ph(r){return r==null}function Xc(r){return r===0&&1/r==-1/0}function Kw(r){return typeof r=="number"&&Number.isInteger(r)&&!Xc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="";function Qw(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=fv(t)),t=Yw(r.get(n),t);return fv(t)}function Yw(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case ZE:n+="";break;default:n+=u}}return n}function fv(r){return r+ZE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Fs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function WE(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.comparator=t,this.root=n||He.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,He.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cc(this.root,t,this.comparator,!0)}}class Cc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class He{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??He.RED,this.left=o??He.EMPTY,this.right=u??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new He(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return He.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw vt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw vt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw vt(27949);return t+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw vt(57766)}get value(){throw vt(16141)}get color(){throw vt(16727)}get left(){throw vt(29726)}get right(){throw vt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new He(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new mv(this.data.getIterator())}getIteratorFrom(t){return new mv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ce(this.comparator);return n.data=t,n}}class mv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t){this.fields=t,t.sort(Fe.comparator)}static empty(){return new qn([])}unionWith(t){let n=new Ce(Fe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new qn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ja(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new JE("Invalid base64 string: "+u):u}}(t);return new Ge(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new Ge(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return It(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Xw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(r){if(qt(!!r,39018),typeof r=="string"){let t=0;const n=Xw.exec(r);if(qt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:me(r.seconds),nanos:me(r.nanos)}}function me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Gr(r){return typeof r=="string"?Ge.fromBase64String(r):Ge.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="server_timestamp",eT="__type__",nT="__previous_value__",iT="__local_write_time__";function Vm(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[eT])===null||n===void 0?void 0:n.stringValue)===tT}function gh(r){const t=r.mapValue.fields[nT];return Vm(t)?gh(t):t}function Ll(r){const t=Fr(r.mapValue.fields[iT].timestampValue);return new te(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(t,n,s,o,u,f,p,g,_,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=T}}const $c="(default)";class zl{constructor(t,n){this.projectId=t,this.database=n||$c}static empty(){return new zl("","")}get isDefaultDatabase(){return this.database===$c}isEqual(t){return t instanceof zl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="__type__",Zw="__max__",Dc={mapValue:{}},sT="__vector__",Zc="value";function Kr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Vm(r)?4:Jw(r)?9007199254740991:Ww(r)?10:11:vt(28295,{value:r})}function yi(r,t){if(r===t)return!0;const n=Kr(r);if(n!==Kr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ll(r).isEqual(Ll(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Fr(o.timestampValue),p=Fr(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return Gr(o.bytesValue).isEqual(Gr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return me(o.geoPointValue.latitude)===me(u.geoPointValue.latitude)&&me(o.geoPointValue.longitude)===me(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return me(o.integerValue)===me(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=me(o.doubleValue),p=me(u.doubleValue);return f===p?Xc(f)===Xc(p):isNaN(f)&&isNaN(p)}return!1}(r,t);case 9:return Ja(r.arrayValue.values||[],t.arrayValue.values||[],yi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(dv(f)!==dv(p))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(p[g]===void 0||!yi(f[g],p[g])))return!1;return!0}(r,t);default:return vt(52216,{left:r})}}function Bl(r,t){return(r.values||[]).find(n=>yi(n,t))!==void 0}function to(r,t){if(r===t)return 0;const n=Kr(r),s=Kr(t);if(n!==s)return It(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return It(r.booleanValue,t.booleanValue);case 2:return function(u,f){const p=me(u.integerValue||u.doubleValue),g=me(f.integerValue||f.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(r,t);case 3:return pv(r.timestampValue,t.timestampValue);case 4:return pv(Ll(r),Ll(t));case 5:return im(r.stringValue,t.stringValue);case 6:return function(u,f){const p=Gr(u),g=Gr(f);return p.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const p=u.split("/"),g=f.split("/");for(let _=0;_<p.length&&_<g.length;_++){const T=It(p[_],g[_]);if(T!==0)return T}return It(p.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const p=It(me(u.latitude),me(f.latitude));return p!==0?p:It(me(u.longitude),me(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return gv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var p,g,_,T;const R=u.fields||{},D=f.fields||{},q=(p=R[Zc])===null||p===void 0?void 0:p.arrayValue,$=(g=D[Zc])===null||g===void 0?void 0:g.arrayValue,J=It(((_=q?.values)===null||_===void 0?void 0:_.length)||0,((T=$?.values)===null||T===void 0?void 0:T.length)||0);return J!==0?J:gv(q,$)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===Dc.mapValue&&f===Dc.mapValue)return 0;if(u===Dc.mapValue)return 1;if(f===Dc.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),_=f.fields||{},T=Object.keys(_);g.sort(),T.sort();for(let R=0;R<g.length&&R<T.length;++R){const D=im(g[R],T[R]);if(D!==0)return D;const q=to(p[g[R]],_[T[R]]);if(q!==0)return q}return It(g.length,T.length)}(r.mapValue,t.mapValue);default:throw vt(23264,{le:n})}}function pv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return It(r,t);const n=Fr(r),s=Fr(t),o=It(n.seconds,s.seconds);return o!==0?o:It(n.nanos,s.nanos)}function gv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=to(n[o],s[o]);if(u)return u}return It(n.length,s.length)}function eo(r){return rm(r)}function rm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Fr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Gr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ft.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=rm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${rm(n.fields[f])}`;return o+"}"}(r.mapValue):vt(61005,{value:r})}function Uc(r){switch(Kr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=gh(r);return t?16+Uc(t):16;case 5:return 2*r.stringValue.length;case 6:return Gr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Uc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Fs(s.fields,(u,f)=>{o+=u.length+Uc(f)}),o}(r.mapValue);default:throw vt(13486,{value:r})}}function _v(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function sm(r){return!!r&&"integerValue"in r}function Mm(r){return!!r&&"arrayValue"in r}function yv(r){return!!r&&"nullValue"in r}function vv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Lc(r){return!!r&&"mapValue"in r}function Ww(r){var t,n;return((n=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[rT])===null||n===void 0?void 0:n.stringValue)===sT}function Ol(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Fs(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ol(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ol(r.arrayValue.values[n]);return t}return Object.assign({},r)}function Jw(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Zw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this.value=t}static empty(){return new Pn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Lc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ol(n)}setAll(t){let n=Fe.emptyPath(),s={},o=[];t.forEach((f,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=p.popLast()}f?s[p.lastSegment()]=Ol(f):o.push(p.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Lc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Lc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Fs(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new Pn(Ol(this.value))}}function aT(r){const t=[];return Fs(r.fields,(n,s)=>{const o=new Fe([n]);if(Lc(s)){const u=aT(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new qn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n,s,o,u,f,p){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(t){return new We(t,0,At.min(),At.min(),At.min(),Pn.empty(),0)}static newFoundDocument(t,n,s,o){return new We(t,1,n,At.min(),s,o,0)}static newNoDocument(t,n){return new We(t,2,n,At.min(),At.min(),Pn.empty(),0)}static newUnknownDocument(t,n){return new We(t,3,n,At.min(),At.min(),Pn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof We&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,n){this.position=t,this.inclusive=n}}function Ev(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=ft.comparator(ft.fromName(f.referenceValue),n.key):s=to(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!yi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n="asc"){this.field=t,this.dir=n}}function t1(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{}class Ee extends oT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new n1(t,n,s):n==="array-contains"?new s1(t,s):n==="in"?new a1(t,s):n==="not-in"?new o1(t,s):n==="array-contains-any"?new l1(t,s):new Ee(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new i1(t,s):new r1(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(to(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return vt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends oT{constructor(t,n){super(),this.filters=t,this.op=n,this.he=null}static create(t,n){return new Fn(t,n)}matches(t){return lT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function lT(r){return r.op==="and"}function uT(r){return e1(r)&&lT(r)}function e1(r){for(const t of r.filters)if(t instanceof Fn)return!1;return!0}function am(r){if(r instanceof Ee)return r.field.canonicalString()+r.op.toString()+eo(r.value);if(uT(r))return r.filters.map(t=>am(t)).join(",");{const t=r.filters.map(n=>am(n)).join(",");return`${r.op}(${t})`}}function cT(r,t){return r instanceof Ee?function(s,o){return o instanceof Ee&&s.op===o.op&&s.field.isEqual(o.field)&&yi(s.value,o.value)}(r,t):r instanceof Fn?function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,p)=>u&&cT(f,o.filters[p]),!0):!1}(r,t):void vt(19439)}function hT(r){return r instanceof Ee?function(n){return`${n.field.canonicalString()} ${n.op} ${eo(n.value)}`}(r):r instanceof Fn?function(n){return n.op.toString()+" {"+n.getFilters().map(hT).join(" ,")+"}"}(r):"Filter"}class n1 extends Ee{constructor(t,n,s){super(t,n,s),this.key=ft.fromName(s.referenceValue)}matches(t){const n=ft.comparator(t.key,this.key);return this.matchesComparison(n)}}class i1 extends Ee{constructor(t,n){super(t,"in",n),this.keys=fT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class r1 extends Ee{constructor(t,n){super(t,"not-in",n),this.keys=fT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function fT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ft.fromName(s.referenceValue))}class s1 extends Ee{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Mm(n)&&Bl(n.arrayValue,this.value)}}class a1 extends Ee{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Bl(this.value.arrayValue,n)}}class o1 extends Ee{constructor(t,n){super(t,"not-in",n)}matches(t){if(Bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bl(this.value.arrayValue,n)}}class l1 extends Ee{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Mm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Bl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(t,n=null,s=[],o=[],u=null,f=null,p=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.Pe=null}}function Av(r,t=null,n=[],s=[],o=null,u=null,f=null){return new u1(r,t,n,s,o,u,f)}function Pm(r){const t=St(r);if(t.Pe===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>am(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ph(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>eo(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>eo(s)).join(",")),t.Pe=n}return t.Pe}function xm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!t1(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!cT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Tv(r.startAt,t.startAt)&&Tv(r.endAt,t.endAt)}function om(r){return ft.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,n=null,s=[],o=[],u=null,f="F",p=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function c1(r,t,n,s,o,u,f,p){return new lo(r,t,n,s,o,u,f,p)}function dT(r){return new lo(r)}function Sv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function mT(r){return r.collectionGroup!==null}function Nl(r){const t=St(r);if(t.Te===null){t.Te=[];const n=new Set;for(const u of t.explicitOrderBy)t.Te.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Ce(Fe.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(p=p.add(_.field))})}),p})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Te.push(new jl(u,s))}),n.has(Fe.keyField().canonicalString())||t.Te.push(new jl(Fe.keyField(),s))}return t.Te}function fi(r){const t=St(r);return t.Ie||(t.Ie=h1(t,Nl(r))),t.Ie}function h1(r,t){if(r.limitType==="F")return Av(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new jl(o.field,u)});const n=r.endAt?new Wc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Wc(r.startAt.position,r.startAt.inclusive):null;return Av(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function lm(r,t){const n=r.filters.concat([t]);return new lo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function um(r,t,n){return new lo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function _h(r,t){return xm(fi(r),fi(t))&&r.limitType===t.limitType}function pT(r){return`${Pm(fi(r))}|lt:${r.limitType}`}function Ha(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>hT(o)).join(", ")}]`),ph(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>eo(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>eo(o)).join(",")),`Target(${s})`}(fi(r))}; limitType=${r.limitType})`}function yh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ft.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of Nl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,p,g){const _=Ev(f,p,g);return f.inclusive?_<=0:_<0}(s.startAt,Nl(s),o)||s.endAt&&!function(f,p,g){const _=Ev(f,p,g);return f.inclusive?_>=0:_>0}(s.endAt,Nl(s),o))}(r,t)}function f1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function gT(r){return(t,n)=>{let s=!1;for(const o of Nl(r)){const u=d1(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function d1(r,t,n){const s=r.field.isKeyField()?ft.comparator(t.key,n.key):function(u,f,p){const g=f.data.field(u),_=p.data.field(u);return g!==null&&_!==null?to(g,_):vt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return vt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Fs(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return WE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new se(ft.comparator);function Zi(){return m1}const _T=new se(ft.comparator);function Il(...r){let t=_T;for(const n of r)t=t.insert(n.key,n);return t}function yT(r){let t=_T;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function xs(){return Vl()}function vT(){return Vl()}function Vl(){return new Gs(r=>r.toString(),(r,t)=>r.isEqual(t))}const p1=new se(ft.comparator),g1=new Ce(ft.comparator);function Mt(...r){let t=g1;for(const n of r)t=t.add(n);return t}const _1=new Ce(It);function y1(){return _1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xc(t)?"-0":t}}function ET(r){return{integerValue:""+r}}function v1(r,t){return Kw(t)?ET(t):km(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this._=void 0}}function E1(r,t,n){return r instanceof ql?function(o,u){const f={fields:{[eT]:{stringValue:tT},[iT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Vm(u)&&(u=gh(u)),u&&(f.fields[nT]=u),{mapValue:f}}(n,t):r instanceof Hl?AT(r,t):r instanceof Fl?ST(r,t):function(o,u){const f=TT(o,u),p=bv(f)+bv(o.Ee);return sm(f)&&sm(o.Ee)?ET(p):km(o.serializer,p)}(r,t)}function T1(r,t,n){return r instanceof Hl?AT(r,t):r instanceof Fl?ST(r,t):n}function TT(r,t){return r instanceof Jc?function(s){return sm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class ql extends vh{}class Hl extends vh{constructor(t){super(),this.elements=t}}function AT(r,t){const n=bT(t);for(const s of r.elements)n.some(o=>yi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Fl extends vh{constructor(t){super(),this.elements=t}}function ST(r,t){let n=bT(t);for(const s of r.elements)n=n.filter(o=>!yi(o,s));return{arrayValue:{values:n}}}class Jc extends vh{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function bv(r){return me(r.integerValue||r.doubleValue)}function bT(r){return Mm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(t,n){this.field=t,this.transform=n}}function S1(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Hl&&o instanceof Hl||s instanceof Fl&&o instanceof Fl?Ja(s.elements,o.elements,yi):s instanceof Jc&&o instanceof Jc?yi(s.Ee,o.Ee):s instanceof ql&&o instanceof ql}(r.transform,t.transform)}class b1{constructor(t,n){this.version=t,this.transformResults=n}}class Yi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Yi}static exists(t){return new Yi(void 0,t)}static updateTime(t){return new Yi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Eh{}function wT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new IT(r.key,Yi.none()):new $l(r.key,r.data,Yi.none());{const n=r.data,s=Pn.empty();let o=new Ce(Fe.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Ks(r.key,s,new qn(o.toArray()),Yi.none())}}function w1(r,t,n){r instanceof $l?function(o,u,f){const p=o.value.clone(),g=Rv(o.fieldTransforms,u,f.transformResults);p.setAll(g),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):r instanceof Ks?function(o,u,f){if(!zc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=Rv(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(RT(o)),g.setAll(p),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Ml(r,t,n,s){return r instanceof $l?function(u,f,p,g){if(!zc(u.precondition,f))return p;const _=u.value.clone(),T=Iv(u.fieldTransforms,g,f);return _.setAll(T),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null}(r,t,n,s):r instanceof Ks?function(u,f,p,g){if(!zc(u.precondition,f))return p;const _=Iv(u.fieldTransforms,g,f),T=f.data;return T.setAll(RT(u)),T.setAll(_),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(r,t,n,s):function(u,f,p){return zc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p}(r,t,n)}function R1(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=TT(s.transform,o||null);u!=null&&(n===null&&(n=Pn.empty()),n.set(s.field,u))}return n||null}function wv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ja(s,o,(u,f)=>S1(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class $l extends Eh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ks extends Eh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function RT(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Rv(r,t,n){const s=new Map;qt(r.length===n.length,32656,{Ae:n.length,Re:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,p=t.data.field(u.field);s.set(u.field,T1(f,p,n[o]))}return s}function Iv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,E1(u,f,t))}return s}class IT extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I1 extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&w1(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ml(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ml(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=vT();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=n.has(o.key)?null:p;const g=wT(f,p);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Mt())}isEqual(t){return this.batchId===t.batchId&&Ja(this.mutations,t.mutations,(n,s)=>wv(n,s))&&Ja(this.baseMutations,t.baseMutations,(n,s)=>wv(n,s))}}class Um{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){qt(t.mutations.length===s.length,58842,{Ve:t.mutations.length,me:s.length});let o=function(){return p1}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Um(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,Lt;function N1(r){switch(r){case Q.OK:return vt(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return vt(15467,{code:r})}}function CT(r){if(r===void 0)return $i("GRPC error has no .code"),Q.UNKNOWN;switch(r){case ve.OK:return Q.OK;case ve.CANCELLED:return Q.CANCELLED;case ve.UNKNOWN:return Q.UNKNOWN;case ve.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case ve.INTERNAL:return Q.INTERNAL;case ve.UNAVAILABLE:return Q.UNAVAILABLE;case ve.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case ve.NOT_FOUND:return Q.NOT_FOUND;case ve.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case ve.ABORTED:return Q.ABORTED;case ve.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case ve.DATA_LOSS:return Q.DATA_LOSS;default:return vt(39323,{code:r})}}(Lt=ve||(ve={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=new Ur([4294967295,4294967295],0);function Cv(r){const t=YE().encode(r),n=new BE;return n.update(t),new Uint8Array(n.digest())}function Dv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Ur([n,s],0),new Ur([o,u],0)]}class Lm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Cl(`Invalid padding: ${n}`);if(s<0)throw new Cl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Cl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Cl(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*t.length-n,this.ge=Ur.fromNumber(this.fe)}pe(t,n,s){let o=t.add(n.multiply(Ur.fromNumber(s)));return o.compare(V1)===1&&(o=new Ur([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const n=Cv(t),[s,o]=Dv(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);if(!this.ye(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Lm(u,o,n);return s.forEach(p=>f.insert(p)),f}insert(t){if(this.fe===0)return;const n=Cv(t),[s,o]=Dv(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);this.we(f)}}we(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Cl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Zl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Th(At.min(),o,new se(It),Zi(),Mt())}}class Zl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Zl(s,n,Mt(),Mt(),Mt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,n,s,o){this.Se=t,this.removedTargetIds=n,this.key=s,this.be=o}}class DT{constructor(t,n){this.targetId=t,this.De=n}}class OT{constructor(t,n,s=Ge.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Ov{constructor(){this.ve=0,this.Ce=Nv(),this.Fe=Ge.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=Mt(),n=Mt(),s=Mt();return this.Ce.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:vt(38017,{changeType:u})}}),new Zl(this.Fe,this.Me,t,n,s)}ke(){this.xe=!1,this.Ce=Nv()}qe(t,n){this.xe=!0,this.Ce=this.Ce.insert(t,n)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,qt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class M1{constructor(t){this.We=t,this.Ge=new Map,this.ze=Zi(),this.je=Oc(),this.Je=Oc(),this.He=new se(It)}Ye(t){for(const n of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(n,t.be):this.Xe(n,t.key,t.be);for(const n of t.removedTargetIds)this.Xe(n,t.key,t.be)}et(t){this.forEachTarget(t,n=>{const s=this.tt(n);switch(t.state){case 0:this.nt(n)&&s.Be(t.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(t.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(s.Ke(),s.Be(t.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),s.Be(t.resumeToken));break;default:vt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ge.forEach((s,o)=>{this.nt(o)&&n(o)})}it(t){const n=t.targetId,s=t.De.count,o=this.st(n);if(o){const u=o.target;if(om(u))if(s===0){const f=new ft(u.path);this.Xe(n,f,We.newNoDocument(f,At.min()))}else qt(s===1,20013,{expectedCount:s});else{const f=this.ot(n);if(f!==s){const p=this._t(t),g=p?this.ut(p,t,f):1;if(g!==0){this.rt(n);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,_)}}}}}_t(t){const n=t.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,p;try{f=Gr(s).toUint8Array()}catch(g){if(g instanceof JE)return qr("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Lm(f,o,u)}catch(g){return qr(g instanceof Cl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.fe===0?null:p}ut(t,n,s){return n.De.count===s-this.ht(t,n.targetId)?0:2}ht(t,n){const s=this.We.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.We.lt(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.Xe(n,u,null),o++)}),o}Pt(t){const n=new Map;this.Ge.forEach((u,f)=>{const p=this.st(f);if(p){if(u.current&&om(p.target)){const g=new ft(p.target.path);this.Tt(g).has(f)||this.It(f,g)||this.Xe(f,g,We.newNoDocument(g,t))}u.Ne&&(n.set(f,u.Le()),u.ke())}});let s=Mt();this.Je.forEach((u,f)=>{let p=!0;f.forEachWhile(g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.ze.forEach((u,f)=>f.setReadTime(t));const o=new Th(t,n,this.He,this.ze,s);return this.ze=Zi(),this.je=Oc(),this.Je=Oc(),this.He=new se(It),o}Ze(t,n){if(!this.nt(t))return;const s=this.It(t,n.key)?2:0;this.tt(t).qe(n.key,s),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(t)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(t))}Xe(t,n,s){if(!this.nt(t))return;const o=this.tt(t);this.It(t,n)?o.qe(n,1):o.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(t)),this.Je=this.Je.insert(n,this.dt(n).add(t)),s&&(this.ze=this.ze.insert(n,s))}removeTarget(t){this.Ge.delete(t)}ot(t){const n=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let n=this.Ge.get(t);return n||(n=new Ov,this.Ge.set(t,n)),n}dt(t){let n=this.Je.get(t);return n||(n=new Ce(It),this.Je=this.Je.insert(t,n)),n}Tt(t){let n=this.je.get(t);return n||(n=new Ce(It),this.je=this.je.insert(t,n)),n}nt(t){const n=this.st(t)!==null;return n||rt("WatchChangeAggregator","Detected inactive target",t),n}st(t){const n=this.Ge.get(t);return n&&n.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Ov),this.We.getRemoteKeysForTarget(t).forEach(n=>{this.Xe(t,n,null)})}It(t,n){return this.We.getRemoteKeysForTarget(t).has(n)}}function Oc(){return new se(ft.comparator)}function Nv(){return new se(ft.comparator)}const P1={asc:"ASCENDING",desc:"DESCENDING"},x1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},k1={and:"AND",or:"OR"};class U1{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function cm(r,t){return r.useProto3Json||ph(t)?t:{value:t}}function th(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function NT(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function L1(r,t){return th(r,t.toTimestamp())}function di(r){return qt(!!r,49232),At.fromTimestamp(function(n){const s=Fr(n);return new te(s.seconds,s.nanos)}(r))}function zm(r,t){return hm(r,t).canonicalString()}function hm(r,t){const n=function(o){return new Jt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function VT(r){const t=Jt.fromString(r);return qt(UT(t),10190,{key:t.toString()}),t}function fm(r,t){return zm(r.databaseId,t.path)}function qd(r,t){const n=VT(t);if(n.get(1)!==r.databaseId.projectId)throw new it(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new it(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ft(PT(n))}function MT(r,t){return zm(r.databaseId,t)}function z1(r){const t=VT(r);return t.length===4?Jt.emptyPath():PT(t)}function dm(r){return new Jt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function PT(r){return qt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Vv(r,t,n){return{name:fm(r,t),fields:n.value.mapValue.fields}}function B1(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:vt(39313,{state:_})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(_,T){return _.useProto3Json?(qt(T===void 0||typeof T=="string",58123),Ge.fromBase64String(T||"")):(qt(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Ge.fromUint8Array(T||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&function(_){const T=_.code===void 0?Q.UNKNOWN:CT(_.code);return new it(T,_.message||"")}(f);n=new OT(s,o,u,p||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=qd(r,s.document.name),u=di(s.document.updateTime),f=s.document.createTime?di(s.document.createTime):At.min(),p=new Pn({mapValue:{fields:s.document.fields}}),g=We.newFoundDocument(o,u,f,p),_=s.targetIds||[],T=s.removedTargetIds||[];n=new Bc(_,T,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=qd(r,s.document),u=s.readTime?di(s.readTime):At.min(),f=We.newNoDocument(o,u),p=s.removedTargetIds||[];n=new Bc([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=qd(r,s.document),u=s.removedTargetIds||[];n=new Bc([],u,o,null)}else{if(!("filter"in t))return vt(11601,{At:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new O1(o,u),p=s.targetId;n=new DT(p,f)}}return n}function j1(r,t){let n;if(t instanceof $l)n={update:Vv(r,t.key,t.value)};else if(t instanceof IT)n={delete:fm(r,t.key)};else if(t instanceof Ks)n={update:Vv(r,t.key,t.data),updateMask:$1(t.fieldMask)};else{if(!(t instanceof I1))return vt(16599,{Rt:t.type});n={verify:fm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const p=f.transform;if(p instanceof ql)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Hl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Fl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Jc)return{fieldPath:f.field.canonicalString(),increment:p.Ee};throw vt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:L1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:vt(27497)}(r,t.precondition)),n}function q1(r,t){return r&&r.length>0?(qt(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?di(o.updateTime):di(u);return f.isEqual(At.min())&&(f=di(u)),new b1(f,o.transformResults||[])}(n,t))):[]}function H1(r,t){return{documents:[MT(r,t.path)]}}function F1(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=MT(r,o);const u=function(_){if(_.length!==0)return kT(Fn.create(_,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(_){if(_.length!==0)return _.map(T=>function(D){return{field:Fa(D.field),direction:Q1(D.dir)}}(T))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const p=cm(r,t.limit);return p!==null&&(n.structuredQuery.limit=p),t.startAt&&(n.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{Vt:n,parent:o}}function G1(r){let t=z1(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){qt(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let u=[];n.where&&(u=function(R){const D=xT(R);return D instanceof Fn&&uT(D)?D.getFilters():[D]}(n.where));let f=[];n.orderBy&&(f=function(R){return R.map(D=>function($){return new jl(Ga($.field),function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(D))}(n.orderBy));let p=null;n.limit&&(p=function(R){let D;return D=typeof R=="object"?R.value:R,ph(D)?null:D}(n.limit));let g=null;n.startAt&&(g=function(R){const D=!!R.before,q=R.values||[];return new Wc(q,D)}(n.startAt));let _=null;return n.endAt&&(_=function(R){const D=!R.before,q=R.values||[];return new Wc(q,D)}(n.endAt)),c1(t,o,f,u,p,"F",g,_)}function K1(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return vt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function xT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ga(n.unaryFilter.field);return Ee.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ga(n.unaryFilter.field);return Ee.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ga(n.unaryFilter.field);return Ee.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ga(n.unaryFilter.field);return Ee.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return vt(61313);default:return vt(60726)}}(r):r.fieldFilter!==void 0?function(n){return Ee.create(Ga(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return vt(58110);default:return vt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Fn.create(n.compositeFilter.filters.map(s=>xT(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return vt(1026)}}(n.compositeFilter.op))}(r):vt(30097,{filter:r})}function Q1(r){return P1[r]}function Y1(r){return x1[r]}function X1(r){return k1[r]}function Fa(r){return{fieldPath:r.canonicalString()}}function Ga(r){return Fe.fromServerFormat(r.fieldPath)}function kT(r){return r instanceof Ee?function(n){if(n.op==="=="){if(vv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NAN"}};if(yv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NAN"}};if(yv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fa(n.field),op:Y1(n.op),value:n.value}}}(r):r instanceof Fn?function(n){const s=n.getFilters().map(o=>kT(o));return s.length===1?s[0]:{compositeFilter:{op:X1(n.op),filters:s}}}(r):vt(54877,{filter:r})}function $1(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function UT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n,s,o,u=At.min(),f=At.min(),p=Ge.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(t){return new Pr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(t){this.gt=t}}function W1(r){const t=G1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?um(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.Dn=new tR}addToCollectionParentIndex(t,n){return this.Dn.add(n),X.resolve()}getCollectionParents(t,n){return X.resolve(this.Dn.getEntries(n))}addFieldIndex(t,n){return X.resolve()}deleteFieldIndex(t,n){return X.resolve()}deleteAllFieldIndexes(t){return X.resolve()}createTargetIndexes(t,n){return X.resolve()}getDocumentsMatchingTarget(t,n){return X.resolve(null)}getIndexType(t,n){return X.resolve(0)}getFieldIndexes(t,n){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,n){return X.resolve(Hr.min())}getMinOffsetFromCollectionGroup(t,n){return X.resolve(Hr.min())}updateCollectionGroup(t,n,s){return X.resolve()}updateIndexEntries(t,n){return X.resolve()}}class tR{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ce(Jt.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ce(Jt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LT=41943040;class un{static withCacheSize(t){return new un(t,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.DEFAULT_COLLECTION_PERCENTILE=10,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,un.DEFAULT=new un(LT,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),un.DISABLED=new un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new no(0)}static ur(){return new no(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="LruGarbageCollector",eR=1048576;function xv([r,t],[n,s]){const o=It(r,n);return o===0?It(t,s):o}class nR{constructor(t){this.Tr=t,this.buffer=new Ce(xv),this.Ir=0}dr(){return++this.Ir}Er(t){const n=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();xv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class iR{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){rt(Pv,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){oo(n)?rt(Pv,"Ignoring IndexedDB error during garbage collection: ",n):await ao(n)}await this.Rr(3e5)})}}class rR{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.mr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return X.resolve(mh.ue);const s=new nR(n);return this.Vr.forEachTarget(t,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(t,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.Vr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(rt("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(Mv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(rt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mv):this.pr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,n){let s,o,u,f,p,g,_;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(rt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,f=Date.now(),this.nthSequenceNumber(t,o))).next(R=>(s=R,p=Date.now(),this.removeTargets(t,s,n))).next(R=>(u=R,g=Date.now(),this.removeOrphanedDocuments(t,s))).next(R=>(_=Date.now(),qa()<=Vt.DEBUG&&rt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${R} documents in `+(_-g)+`ms
Total Duration: ${_-T}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function sR(r,t){return new rR(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.changes=new Gs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,We.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Ml(s.mutation,o,qn.empty(),te.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Mt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Mt()){const o=xs();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=Il();return u.forEach((p,g)=>{f=f.insert(p,g.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=xs();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Mt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,p)=>{n.set(f,p)})})}computeViews(t,n,s,o){let u=Zi();const f=Vl(),p=function(){return Vl()}();return n.forEach((g,_)=>{const T=s.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof Ks)?u=u.insert(_.key,_):T!==void 0?(f.set(_.key,T.mutation.getFieldMask()),Ml(T.mutation,_,T.mutation.getFieldMask(),te.now())):f.set(_.key,qn.empty())}),this.recalculateAndSaveOverlays(t,u).next(g=>(g.forEach((_,T)=>f.set(_,T)),n.forEach((_,T)=>{var R;return p.set(_,new oR(T,(R=f.get(_))!==null&&R!==void 0?R:null))}),p))}recalculateAndSaveOverlays(t,n){const s=Vl();let o=new se((f,p)=>f-p),u=Mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const p of f)p.keys().forEach(g=>{const _=n.get(g);if(_===null)return;let T=s.get(g)||qn.empty();T=p.applyToLocalView(_,T),s.set(g,T);const R=(o.get(p.batchId)||Mt()).add(g);o=o.insert(p.batchId,R)})}).next(()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,T=g.value,R=vT();T.forEach(D=>{if(!u.has(D)){const q=wT(n.get(D),s.get(D));q!==null&&R.set(D,q),u=u.add(D)}}),f.push(this.documentOverlayCache.saveOverlays(t,_,R))}return X.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ft.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):mT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):X.resolve(xs());let p=Ul,g=u;return f.next(_=>X.forEach(_,(T,R)=>(p<R.largestBatchId&&(p=R.largestBatchId),u.get(T)?X.resolve():this.remoteDocumentCache.getEntry(t,T).next(D=>{g=g.insert(T,D)}))).next(()=>this.populateOverlays(t,_,u)).next(()=>this.computeViews(t,g,_,Mt())).next(T=>({batchId:p,changes:yT(T)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ft(n)).next(s=>{let o=Il();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=Il();return this.indexManager.getCollectionParents(t,u).next(p=>X.forEach(p,g=>{const _=function(R,D){return new lo(D,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,_,s,o).next(T=>{T.forEach((R,D)=>{f=f.insert(R,D)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((g,_)=>{const T=_.getKey();f.get(T)===null&&(f=f.insert(T,We.newInvalidDocument(T)))});let p=Il();return f.forEach((g,_)=>{const T=u.get(g);T!==void 0&&Ml(T.mutation,_,qn.empty(),te.now()),yh(n,_)&&(p=p.insert(g,_))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,n){return X.resolve(this.Br.get(n))}saveBundleMetadata(t,n){return this.Br.set(n.id,function(o){return{id:o.id,version:o.version,createTime:di(o.createTime)}}(n)),X.resolve()}getNamedQuery(t,n){return X.resolve(this.Lr.get(n))}saveNamedQuery(t,n){return this.Lr.set(n.name,function(o){return{name:o.name,query:W1(o.bundledQuery),readTime:di(o.readTime)}}(n)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.overlays=new se(ft.comparator),this.kr=new Map}getOverlay(t,n){return X.resolve(this.overlays.get(n))}getOverlays(t,n){const s=xs();return X.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.wt(t,n,u)}),X.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),X.resolve()}getOverlaysForCollection(t,n,s){const o=xs(),u=n.length+1,f=new ft(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return X.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new se((_,T)=>_-T);const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>s){let T=u.get(_.largestBatchId);T===null&&(T=xs(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const p=xs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,T)=>p.set(_,T)),!(p.size()>=o)););return X.resolve(p)}wt(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new D1(n,s));let u=this.kr.get(n);u===void 0&&(u=Mt(),this.kr.set(n,u)),this.kr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(t){return X.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.qr=new Ce(ke.Qr),this.$r=new Ce(ke.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,n){const s=new ke(t,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Wr(new ke(t,n))}Gr(t,n){t.forEach(s=>this.removeReference(s,n))}zr(t){const n=new ft(new Jt([])),s=new ke(n,t),o=new ke(n,t+1),u=[];return this.$r.forEachInRange([s,o],f=>{this.Wr(f),u.push(f.key)}),u}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const n=new ft(new Jt([])),s=new ke(n,t),o=new ke(n,t+1);let u=Mt();return this.$r.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new ke(t,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ke{constructor(t,n){this.key=t,this.Hr=n}static Qr(t,n){return ft.comparator(t.key,n.key)||It(t.Hr,n.Hr)}static Ur(t,n){return It(t.Hr,n.Hr)||ft.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ce(ke.Qr)}checkEmpty(t){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new C1(u,n,s,o);this.mutationQueue.push(f);for(const p of o)this.Yr=this.Yr.add(new ke(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return X.resolve(f)}lookupMutationBatch(t,n){return X.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Nm:this.er-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new ke(n,0),o=new ke(n,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],f=>{const p=this.Zr(f.Hr);u.push(p)}),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ce(It);return n.forEach(o=>{const u=new ke(o,0),f=new ke(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,f],p=>{s=s.add(p.Hr)})}),X.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;ft.isDocumentKey(u)||(u=u.child(""));const f=new ke(new ft(u),0);let p=new Ce(It);return this.Yr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Hr)),!0)},f),X.resolve(this.ei(p))}ei(t){const n=[];return t.forEach(s=>{const o=this.Zr(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){qt(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return X.forEach(n.mutations,o=>{const u=new ke(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Yr=s})}rr(t){}containsKey(t,n){const s=new ke(n,0),o=this.Yr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}ti(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(t){this.ni=t,this.docs=function(){return new se(ft.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():We.newInvalidDocument(n))}getEntries(t,n){let s=Zi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():We.newInvalidDocument(o))}),X.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Zi();const f=n.path,p=new ft(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:T}}=g.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||qw(jw(T),s)<=0||(o.has(T.key)||yh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(t,n,s,o){vt(9500)}ri(t,n){return X.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new mR(this)}getSize(t){return X.resolve(this.size)}}class mR extends aR{constructor(t){super(),this.Or=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Or.addEntry(t,o)):this.Or.removeEntry(s)}),X.waitFor(n)}getFromCache(t,n){return this.Or.getEntry(t,n)}getAllFromCache(t,n){return this.Or.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(t){this.persistence=t,this.ii=new Gs(n=>Pm(n),xm),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.si=0,this.oi=new Bm,this.targetCount=0,this._i=no.ar()}forEachTarget(t,n){return this.ii.forEach((s,o)=>n(o)),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),X.resolve()}hr(t){this.ii.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this._i=new no(n),this.highestTargetId=n),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,n){return this.hr(n),this.targetCount+=1,X.resolve()}updateTargetData(t,n){return this.hr(n),X.resolve()}removeTargetData(t,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.ii.forEach((f,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.ii.delete(f),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)}),X.waitFor(u).next(()=>o)}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,n){const s=this.ii.get(n)||null;return X.resolve(s)}addMatchingKeys(t,n,s){return this.oi.Kr(n,s),X.resolve()}removeMatchingKeys(t,n,s){this.oi.Gr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),X.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.oi.zr(n),X.resolve()}getMatchingKeysForTargetId(t,n){const s=this.oi.Jr(n);return X.resolve(s)}containsKey(t,n){return X.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t,n){this.ai={},this.overlays={},this.ui=new mh(0),this.ci=!1,this.ci=!0,this.li=new hR,this.referenceDelegate=t(this),this.hi=new pR(this),this.indexManager=new J1,this.remoteDocumentCache=function(o){return new dR(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new Z1(n),this.Ti=new uR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new cR,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ai[t.toKey()];return s||(s=new fR(n,this.referenceDelegate),this.ai[t.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,n,s){rt("MemoryPersistence","Starting transaction:",t);const o=new gR(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(t,n){return X.or(Object.values(this.ai).map(s=>()=>s.containsKey(t,n)))}}class gR extends Fw{constructor(t){super(),this.currentSequenceNumber=t}}class jm{constructor(t){this.persistence=t,this.Ai=new Bm,this.Ri=null}static Vi(t){return new jm(t)}get mi(){if(this.Ri)return this.Ri;throw vt(60996)}addReference(t,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),X.resolve()}removeReference(t,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),X.resolve()}markPotentiallyOrphaned(t,n){return this.mi.add(n.toString()),X.resolve()}removeTarget(t,n){this.Ai.zr(n.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}Ii(){this.Ri=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.mi,s=>{const o=ft.fromPath(s);return this.fi(t,o).next(u=>{u||n.removeEntry(o,At.min())})}).next(()=>(this.Ri=null,n.apply(t)))}updateLimboDocument(t,n){return this.fi(t,n).next(s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(t){return 0}fi(t,n){return X.or([()=>X.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ei(t,n)])}}class eh{constructor(t,n){this.persistence=t,this.gi=new Gs(s=>Qw(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=sR(this,n)}static Vi(t,n){return new eh(t,n)}Ii(){}di(t){return X.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}mr(t){const n=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}yr(t){let n=0;return this.gr(t,s=>{n++}).next(()=>n)}gr(t,n){return X.forEach(this.gi,(s,o)=>this.Sr(t,s,o).next(u=>u?X.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(t,f=>this.Sr(t,f,n).next(p=>{p||(s++,u.removeEntry(f,At.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.gi.set(n,t.currentSequenceNumber),X.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.gi.set(s,t.currentSequenceNumber),X.resolve()}removeReference(t,n,s){return this.gi.set(s,t.currentSequenceNumber),X.resolve()}updateLimboDocument(t,n){return this.gi.set(n,t.currentSequenceNumber),X.resolve()}Pi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Uc(t.data.value)),n}Sr(t,n,s){return X.or([()=>this.persistence.Ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.gi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Is=s,this.ds=o}static Es(t,n){let s=Mt(),o=Mt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new qm(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return cb()?8:Gw(Je())>0?6:4}()}initialize(t,n){this.gs=t,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ps(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ys(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new _R;return this.ws(t,n,f).next(p=>{if(u.result=p,this.Rs)return this.Ss(t,n,f,p.size)})}).next(()=>u.result)}Ss(t,n,s,o){return s.documentReadCount<this.Vs?(qa()<=Vt.DEBUG&&rt("QueryEngine","SDK will not create cache indexes for query:",Ha(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(qa()<=Vt.DEBUG&&rt("QueryEngine","Query:",Ha(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(qa()<=Vt.DEBUG&&rt("QueryEngine","The SDK decides to create cache indexes for query:",Ha(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,fi(n))):X.resolve())}ps(t,n){if(Sv(n))return X.resolve(null);let s=fi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=um(n,null,"F"),s=fi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Mt(...u);return this.gs.getDocuments(t,f).next(p=>this.indexManager.getMinOffset(t,s).next(g=>{const _=this.bs(n,p);return this.Ds(n,_,f,g.readTime)?this.ps(t,um(n,null,"F")):this.vs(t,_,n,g)}))})))}ys(t,n,s,o){return Sv(n)||o.isEqual(At.min())?X.resolve(null):this.gs.getDocuments(t,s).next(u=>{const f=this.bs(n,u);return this.Ds(n,f,s,o)?X.resolve(null):(qa()<=Vt.DEBUG&&rt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ha(n)),this.vs(t,f,n,Bw(o,Ul)).next(p=>p))})}bs(t,n){let s=new Ce(gT(t));return n.forEach((o,u)=>{yh(t,u)&&(s=s.add(u))}),s}Ds(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(t,n,s){return qa()<=Vt.DEBUG&&rt("QueryEngine","Using full collection scan to execute query:",Ha(n)),this.gs.getDocumentsMatchingQuery(t,n,Hr.min(),s)}vs(t,n,s,o){return this.gs.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="LocalStore",vR=3e8;class ER{constructor(t,n,s,o){this.persistence=t,this.Cs=n,this.serializer=o,this.Fs=new se(It),this.Ms=new Gs(u=>Pm(u),xm),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(s)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Fs))}}function TR(r,t,n,s){return new ER(r,t,n,s)}async function BT(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ns(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],p=[];let g=Mt();for(const _ of o){f.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}for(const _ of u){p.push(_.batchId);for(const T of _.mutations)g=g.add(T.key)}return n.localDocuments.getDocuments(s,g).next(_=>({Bs:_,removedBatchIds:f,addedBatchIds:p}))})})}function AR(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Os.newChangeBuffer({trackRemovals:!0});return function(p,g,_,T){const R=_.batch,D=R.keys();let q=X.resolve();return D.forEach($=>{q=q.next(()=>T.getEntry(g,$)).next(J=>{const Z=_.docVersions.get($);qt(Z!==null,48541),J.version.compareTo(Z)<0&&(R.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),T.addEntry(J)))})}),q.next(()=>p.mutationQueue.removeMutationBatch(g,R))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=Mt();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function jT(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.hi.getLastRemoteSnapshotVersion(n))}function SR(r,t){const n=St(r),s=t.snapshotVersion;let o=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Os.newChangeBuffer({trackRemovals:!0});o=n.Fs;const p=[];t.targetChanges.forEach((T,R)=>{const D=o.get(R);if(!D)return;p.push(n.hi.removeMatchingKeys(u,T.removedDocuments,R).next(()=>n.hi.addMatchingKeys(u,T.addedDocuments,R)));let q=D.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(R)!==null?q=q.withResumeToken(Ge.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):T.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(T.resumeToken,s)),o=o.insert(R,q),function(J,Z,pt){return J.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=vR?!0:pt.addedDocuments.size+pt.modifiedDocuments.size+pt.removedDocuments.size>0}(D,q,T)&&p.push(n.hi.updateTargetData(u,q))});let g=Zi(),_=Mt();if(t.documentUpdates.forEach(T=>{t.resolvedLimboDocuments.has(T)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))}),p.push(bR(u,f,t.documentUpdates).next(T=>{g=T.Ls,_=T.ks})),!s.isEqual(At.min())){const T=n.hi.getLastRemoteSnapshotVersion(u).next(R=>n.hi.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(T)}return X.waitFor(p).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(n.Fs=o,u))}function bR(r,t,n){let s=Mt(),o=Mt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Zi();return n.forEach((p,g)=>{const _=u.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(At.min())?(t.removeEntry(p,g.readTime),f=f.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(g),f=f.insert(p,g)):rt(Hm,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)}),{Ls:f,ks:o}})}function wR(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Nm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function RR(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.hi.getTargetData(s,t).next(u=>u?(o=u,X.resolve(o)):n.hi.allocateTargetId(s).next(f=>(o=new Pr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(s.targetId,s),n.Ms.set(t,s.targetId)),s})}async function mm(r,t,n){const s=St(r),o=s.Fs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!oo(f))throw f;rt(Hm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Fs=s.Fs.remove(t),s.Ms.delete(o.target)}function kv(r,t,n){const s=St(r);let o=At.min(),u=Mt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,_,T){const R=St(g),D=R.Ms.get(T);return D!==void 0?X.resolve(R.Fs.get(D)):R.hi.getTargetData(_,T)}(s,f,fi(t)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(f,p.targetId).next(g=>{u=g})}).next(()=>s.Cs.getDocumentsMatchingQuery(f,t,n?o:At.min(),n?u:Mt())).next(p=>(IR(s,f1(t),p),{documents:p,qs:u})))}function IR(r,t,n){let s=r.xs.get(t)||At.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.xs.set(t,s)}class Uv{constructor(){this.activeTargetIds=y1()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class CR{constructor(){this.Fo=new Uv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,n,s){this.Mo[t]=n}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Uv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="ConnectivityMonitor";class zv{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){rt(Lv,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){rt(Lv,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc=null;function pm(){return Nc===null?Nc=function(){return 268435456+Math.round(2147483648*Math.random())}():Nc++,"0x"+Nc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="RestConnection",OR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class NR{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+t.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===$c?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(t,n,s,o,u){const f=pm(),p=this.Go(t,n.toUriEncodedString());rt(Hd,`Sending RPC '${t}' ${f}:`,p,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:_}=new URL(p),T=Xr(_);return this.jo(t,p,g,s,T).then(R=>(rt(Hd,`Received RPC '${t}' ${f}: `,R),R),R=>{throw qr(Hd,`RPC '${t}' ${f} failed with error: `,R,"url: ",p,"request:",s),R})}Jo(t,n,s,o,u,f){return this.Wo(t,n,s,o,u)}zo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+so}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}Go(t,n){const s=OR[t];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class MR extends NR{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,n,s,o,u){const f=pm();return new Promise((p,g)=>{const _=new jE;_.setWithCredentials(!0),_.listenOnce(qE.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case kc.NO_ERROR:const R=_.getResponseJson();rt(Xe,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(R)),p(R);break;case kc.TIMEOUT:rt(Xe,`RPC '${t}' ${f} timed out`),g(new it(Q.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const D=_.getStatus();if(rt(Xe,`RPC '${t}' ${f} failed with status:`,D,"response text:",_.getResponseText()),D>0){let q=_.getResponseJson();Array.isArray(q)&&(q=q[0]);const $=q?.error;if($&&$.status&&$.message){const J=function(pt){const ot=pt.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(ot)>=0?ot:Q.UNKNOWN}($.status);g(new it(J,$.message))}else g(new it(Q.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new it(Q.UNAVAILABLE,"Connection failed."));break;default:vt(9055,{c_:t,streamId:f,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{rt(Xe,`RPC '${t}' ${f} completed.`)}});const T=JSON.stringify(o);rt(Xe,`RPC '${t}' ${f} sending request:`,o),_.send(n,"POST",T,s,15)})}P_(t,n,s){const o=pm(),u=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=GE(),p=FE(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const T=u.join("");rt(Xe,`Creating RPC '${t}' stream ${o}: ${T}`,g);const R=f.createWebChannel(T,g);this.T_(R);let D=!1,q=!1;const $=new VR({Ho:Z=>{q?rt(Xe,`Not sending because RPC '${t}' stream ${o} is closed:`,Z):(D||(rt(Xe,`Opening RPC '${t}' stream ${o} transport.`),R.open(),D=!0),rt(Xe,`RPC '${t}' stream ${o} sending:`,Z),R.send(Z))},Yo:()=>R.close()}),J=(Z,pt,ot)=>{Z.listen(pt,st=>{try{ot(st)}catch(dt){setTimeout(()=>{throw dt},0)}})};return J(R,Rl.EventType.OPEN,()=>{q||(rt(Xe,`RPC '${t}' stream ${o} transport opened.`),$.s_())}),J(R,Rl.EventType.CLOSE,()=>{q||(q=!0,rt(Xe,`RPC '${t}' stream ${o} transport closed`),$.__(),this.I_(R))}),J(R,Rl.EventType.ERROR,Z=>{q||(q=!0,qr(Xe,`RPC '${t}' stream ${o} transport errored. Name:`,Z.name,"Message:",Z.message),$.__(new it(Q.UNAVAILABLE,"The operation could not be completed")))}),J(R,Rl.EventType.MESSAGE,Z=>{var pt;if(!q){const ot=Z.data[0];qt(!!ot,16349);const st=ot,dt=st?.error||((pt=st[0])===null||pt===void 0?void 0:pt.error);if(dt){rt(Xe,`RPC '${t}' stream ${o} received error:`,dt);const mt=dt.status;let bt=function(I){const N=ve[I];if(N!==void 0)return CT(N)}(mt),V=dt.message;bt===void 0&&(bt=Q.INTERNAL,V="Unknown error status: "+mt+" with message "+dt.message),q=!0,$.__(new it(bt,V)),R.close()}else rt(Xe,`RPC '${t}' stream ${o} received:`,ot),$.a_(ot)}}),J(p,HE.STAT_EVENT,Z=>{Z.stat===nm.PROXY?rt(Xe,`RPC '${t}' stream ${o} detected buffering proxy`):Z.stat===nm.NOPROXY&&rt(Xe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.o_()},0),$}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(n=>n===t)}}function Fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(r){return new U1(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Fi=t,this.timerId=n,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,n-s);o>0&&rt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="PersistentStream";class HT{constructor(t,n,s,o,u,f,p,g){this.Fi=t,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new qT(t,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():n&&n.code===Q.RESOURCE_EXHAUSTED?($i(n.toString()),$i("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(n)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===n&&this.W_(s,o)},s=>{t(()=>{const o=new it(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(t,n){const s=this.K_(this.b_);this.stream=this.z_(t,n),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return rt(Bv,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return n=>{this.Fi.enqueueAndForget(()=>this.b_===t?n():(rt(Bv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PR extends HT{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}z_(t,n){return this.connection.P_("Listen",t,n)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const n=B1(this.serializer,t),s=function(u){if(!("targetChange"in u))return At.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?di(f.readTime):At.min()}(t);return this.listener.J_(n,s)}H_(t){const n={};n.database=dm(this.serializer),n.addTarget=function(u,f){let p;const g=f.target;if(p=om(g)?{documents:H1(u,g)}:{query:F1(u,g).Vt},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=NT(u,f.resumeToken);const _=cm(u,f.expectedCount);_!==null&&(p.expectedCount=_)}else if(f.snapshotVersion.compareTo(At.min())>0){p.readTime=th(u,f.snapshotVersion.toTimestamp());const _=cm(u,f.expectedCount);_!==null&&(p.expectedCount=_)}return p}(this.serializer,t);const s=K1(this.serializer,t);s&&(n.labels=s),this.k_(n)}Y_(t){const n={};n.database=dm(this.serializer),n.removeTarget=t,this.k_(n)}}class xR extends HT{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,n){return this.connection.P_("Write",t,n)}j_(t){return qt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,qt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){qt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const n=q1(t.writeResults,t.commitTime),s=di(t.commitTime);return this.listener.ta(s,n)}na(){const t={};t.database=dm(this.serializer),this.k_(t)}X_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>j1(this.serializer,s))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{}class UR extends kR{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new it(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Wo(t,hm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new it(Q.UNKNOWN,u.toString())})}Jo(t,n,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.Jo(t,hm(n,s),o,f,p,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new it(Q.UNKNOWN,f.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class LR{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?($i(n),this._a=!1):rt("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="RemoteStore";class zR{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(f=>{s.enqueueAndForget(async()=>{Qs(this)&&(rt(Bs,"Restarting streams for network reachability change."),await async function(g){const _=St(g);_.Ia.add(4),await Wl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Sh(_)}(this))})}),this.Aa=new LR(s,o)}}async function Sh(r){if(Qs(r))for(const t of r.da)await t(!0)}async function Wl(r){for(const t of r.da)await t(!1)}function FT(r,t){const n=St(r);n.Ta.has(t.targetId)||(n.Ta.set(t.targetId,t),Qm(n)?Km(n):uo(n).x_()&&Gm(n,t))}function Fm(r,t){const n=St(r),s=uo(n);n.Ta.delete(t),s.x_()&&GT(n,t),n.Ta.size===0&&(s.x_()?s.B_():Qs(n)&&n.Aa.set("Unknown"))}function Gm(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}uo(r).H_(t)}function GT(r,t){r.Ra.$e(t),uo(r).Y_(t)}function Km(r){r.Ra=new M1({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),uo(r).start(),r.Aa.aa()}function Qm(r){return Qs(r)&&!uo(r).M_()&&r.Ta.size>0}function Qs(r){return St(r).Ia.size===0}function KT(r){r.Ra=void 0}async function BR(r){r.Aa.set("Online")}async function jR(r){r.Ta.forEach((t,n)=>{Gm(r,t)})}async function qR(r,t){KT(r),Qm(r)?(r.Aa.la(t),Km(r)):r.Aa.set("Unknown")}async function HR(r,t,n){if(r.Aa.set("Online"),t instanceof OT&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const p of u.targetIds)o.Ta.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ta.delete(p),o.Ra.removeTarget(p))}(r,t)}catch(s){rt(Bs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await nh(r,s)}else if(t instanceof Bc?r.Ra.Ye(t):t instanceof DT?r.Ra.it(t):r.Ra.et(t),!n.isEqual(At.min()))try{const s=await jT(r.localStore);n.compareTo(s)>=0&&await function(u,f){const p=u.Ra.Pt(f);return p.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ta.get(_);T&&u.Ta.set(_,T.withResumeToken(g.resumeToken,f))}}),p.targetMismatches.forEach((g,_)=>{const T=u.Ta.get(g);if(!T)return;u.Ta.set(g,T.withResumeToken(Ge.EMPTY_BYTE_STRING,T.snapshotVersion)),GT(u,g);const R=new Pr(T.target,g,_,T.sequenceNumber);Gm(u,R)}),u.remoteSyncer.applyRemoteEvent(p)}(r,n)}catch(s){rt(Bs,"Failed to raise snapshot:",s),await nh(r,s)}}async function nh(r,t,n){if(!oo(t))throw t;r.Ia.add(1),await Wl(r),r.Aa.set("Offline"),n||(n=()=>jT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{rt(Bs,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await Sh(r)})}function QT(r,t){return t().catch(n=>nh(r,n,t))}async function bh(r){const t=St(r),n=Qr(t);let s=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Nm;for(;FR(t);)try{const o=await wR(t.localStore,s);if(o===null){t.Pa.length===0&&n.B_();break}s=o.batchId,GR(t,o)}catch(o){await nh(t,o)}YT(t)&&XT(t)}function FR(r){return Qs(r)&&r.Pa.length<10}function GR(r,t){r.Pa.push(t);const n=Qr(r);n.x_()&&n.Z_&&n.X_(t.mutations)}function YT(r){return Qs(r)&&!Qr(r).M_()&&r.Pa.length>0}function XT(r){Qr(r).start()}async function KR(r){Qr(r).na()}async function QR(r){const t=Qr(r);for(const n of r.Pa)t.X_(n.mutations)}async function YR(r,t,n){const s=r.Pa.shift(),o=Um.from(s,t,n);await QT(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await bh(r)}async function XR(r,t){t&&Qr(r).Z_&&await async function(s,o){if(function(f){return N1(f)&&f!==Q.ABORTED}(o.code)){const u=s.Pa.shift();Qr(s).N_(),await QT(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await bh(s)}}(r,t),YT(r)&&XT(r)}async function jv(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),rt(Bs,"RemoteStore received new credentials");const s=Qs(n);n.Ia.add(3),await Wl(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Sh(n)}async function $R(r,t){const n=St(r);t?(n.Ia.delete(2),await Sh(n)):t||(n.Ia.add(2),await Wl(n),n.Aa.set("Unknown"))}function uo(r){return r.Va||(r.Va=function(n,s,o){const u=St(n);return u.ia(),new PR(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:BR.bind(null,r),e_:jR.bind(null,r),n_:qR.bind(null,r),J_:HR.bind(null,r)}),r.da.push(async t=>{t?(r.Va.N_(),Qm(r)?Km(r):r.Aa.set("Unknown")):(await r.Va.stop(),KT(r))})),r.Va}function Qr(r){return r.ma||(r.ma=function(n,s,o){const u=St(n);return u.ia(),new xR(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:KR.bind(null,r),n_:XR.bind(null,r),ea:QR.bind(null,r),ta:YR.bind(null,r)}),r.da.push(async t=>{t?(r.ma.N_(),await bh(r)):(await r.ma.stop(),r.Pa.length>0&&(rt(Bs,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,p=new Ym(t,n,f,o,u);return p.start(s),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new it(Q.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xm(r,t){if($i("AsyncQueue",`${t}: ${r}`),oo(r))return new it(Q.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{static emptySet(t){return new Qa(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ft.comparator(n.key,s.key):(n,s)=>ft.comparator(n.key,s.key),this.keyedMap=Il(),this.sortedSet=new se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Qa)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Qa;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.fa=new se(ft.comparator)}track(t){const n=t.doc.key,s=this.fa.get(n);s?t.type!==0&&s.type===3?this.fa=this.fa.insert(n,t):t.type===3&&s.type!==1?this.fa=this.fa.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.fa=this.fa.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.fa=this.fa.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.fa=this.fa.remove(n):t.type===1&&s.type===2?this.fa=this.fa.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.fa=this.fa.insert(n,{type:2,doc:t.doc}):vt(63341,{At:t,ga:s}):this.fa=this.fa.insert(n,t)}pa(){const t=[];return this.fa.inorderTraversal((n,s)=>{t.push(s)}),t}}class io{constructor(t,n,s,o,u,f,p,g,_){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(p=>{f.push({type:0,doc:p})}),new io(t,n,Qa.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_h(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class WR{constructor(){this.queries=Hv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const o=St(n),u=o.queries;o.queries=Hv(),u.forEach((f,p)=>{for(const g of p.wa)g.onError(s)})})(this,new it(Q.ABORTED,"Firestore shutting down"))}}function Hv(){return new Gs(r=>pT(r),_h)}async function JR(r,t){const n=St(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.Sa()&&t.ba()&&(s=2):(u=new ZR,s=t.ba()?0:1);try{switch(s){case 0:u.ya=await n.onListen(o,!0);break;case 1:u.ya=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const p=Xm(f,`Initialization of query '${Ha(t.query)}' failed`);return void t.onError(p)}n.queries.set(o,u),u.wa.push(t),t.va(n.onlineState),u.ya&&t.Ca(u.ya)&&$m(n)}async function tI(r,t){const n=St(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.wa.indexOf(t);f>=0&&(u.wa.splice(f,1),u.wa.length===0?o=t.ba()?0:1:!u.Sa()&&t.ba()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function eI(r,t){const n=St(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const p of f.wa)p.Ca(o)&&(s=!0);f.ya=o}}s&&$m(n)}function nI(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const u of o.wa)u.onError(n);s.queries.delete(t)}function $m(r){r.Da.forEach(t=>{t.next()})}var gm,Fv;(Fv=gm||(gm={})).Fa="default",Fv.Cache="cache";class iI{constructor(t,n,s){this.query=t,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new io(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),n=!0):this.Ba(t,this.onlineState)&&(this.La(t),n=!0),this.Oa=t,n}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),n=!0),n}Ba(t,n){if(!t.fromCache||!this.ba())return!0;const s=n!=="Offline";return(!this.options.ka||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(t){t=io.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==gm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(t){this.key=t}}class ZT{constructor(t){this.key=t}}class rI{constructor(t,n){this.query=t,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Mt(),this.mutatedKeys=Mt(),this.Xa=gT(t),this.eu=new Qa(this.Xa)}get tu(){return this.Ha}nu(t,n){const s=n?n.ru:new qv,o=n?n.eu:this.eu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((T,R)=>{const D=o.get(T),q=yh(this.query,R)?R:null,$=!!D&&this.mutatedKeys.has(D.key),J=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let Z=!1;D&&q?D.data.isEqual(q.data)?$!==J&&(s.track({type:3,doc:q}),Z=!0):this.iu(D,q)||(s.track({type:2,doc:q}),Z=!0,(g&&this.Xa(q,g)>0||_&&this.Xa(q,_)<0)&&(p=!0)):!D&&q?(s.track({type:0,doc:q}),Z=!0):D&&!q&&(s.track({type:1,doc:D}),Z=!0,(g||_)&&(p=!0)),Z&&(q?(f=f.add(q),u=J?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{eu:f,ru:s,Ds:p,mutatedKeys:u}}iu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const f=t.ru.pa();f.sort((T,R)=>function(q,$){const J=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vt(20277,{At:Z})}};return J(q)-J($)}(T.type,R.type)||this.Xa(T.doc,R.doc)),this.su(s),o=o!=null&&o;const p=n&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,f.length!==0||_?{snapshot:new io(this.query,t.eu,u,f,t.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:p}:{_u:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new qv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=Mt(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const n=[];return t.forEach(s=>{this.Za.has(s)||n.push(new ZT(s))}),this.Za.forEach(s=>{t.has(s)||n.push(new $T(s))}),n}uu(t){this.Ha=t.qs,this.Za=Mt();const n=this.nu(t.documents);return this.applyChanges(n,!0)}cu(){return io.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Zm="SyncEngine";class sI{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class aI{constructor(t){this.key=t,this.lu=!1}}class oI{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.hu={},this.Pu=new Gs(p=>pT(p),_h),this.Tu=new Map,this.Iu=new Set,this.du=new se(ft.comparator),this.Eu=new Map,this.Au=new Bm,this.Ru={},this.Vu=new Map,this.mu=no.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function lI(r,t,n=!0){const s=i0(r);let o;const u=s.Pu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await WT(s,t,n,!0),o}async function uI(r,t){const n=i0(r);await WT(n,t,!0,!1)}async function WT(r,t,n,s){const o=await RR(r.localStore,fi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let p;return s&&(p=await cI(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&FT(r.remoteStore,o),p}async function cI(r,t,n,s,o){r.gu=(R,D,q)=>async function(J,Z,pt,ot){let st=Z.view.nu(pt);st.Ds&&(st=await kv(J.localStore,Z.query,!1).then(({documents:V})=>Z.view.nu(V,st)));const dt=ot&&ot.targetChanges.get(Z.targetId),mt=ot&&ot.targetMismatches.get(Z.targetId)!=null,bt=Z.view.applyChanges(st,J.isPrimaryClient,dt,mt);return Kv(J,Z.targetId,bt._u),bt.snapshot}(r,R,D,q);const u=await kv(r.localStore,t,!0),f=new rI(t,u.qs),p=f.nu(u.documents),g=Zl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),_=f.applyChanges(p,r.isPrimaryClient,g);Kv(r,n,_._u);const T=new sI(t,n,f);return r.Pu.set(t,T),r.Tu.has(n)?r.Tu.get(n).push(t):r.Tu.set(n,[t]),_.snapshot}async function hI(r,t,n){const s=St(r),o=s.Pu.get(t),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter(f=>!_h(f,t))),void s.Pu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await mm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Fm(s.remoteStore,o.targetId),_m(s,o.targetId)}).catch(ao)):(_m(s,o.targetId),await mm(s.localStore,o.targetId,!0))}async function fI(r,t){const n=St(r),s=n.Pu.get(t),o=n.Tu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Fm(n.remoteStore,s.targetId))}async function dI(r,t,n){const s=EI(r);try{const o=await function(f,p){const g=St(f),_=te.now(),T=p.reduce((q,$)=>q.add($.key),Mt());let R,D;return g.persistence.runTransaction("Locally write mutations","readwrite",q=>{let $=Zi(),J=Mt();return g.Os.getEntries(q,T).next(Z=>{$=Z,$.forEach((pt,ot)=>{ot.isValidDocument()||(J=J.add(pt))})}).next(()=>g.localDocuments.getOverlayedDocuments(q,$)).next(Z=>{R=Z;const pt=[];for(const ot of p){const st=R1(ot,R.get(ot.key).overlayedDocument);st!=null&&pt.push(new Ks(ot.key,st,aT(st.value.mapValue),Yi.exists(!0)))}return g.mutationQueue.addMutationBatch(q,_,pt,p)}).next(Z=>{D=Z;const pt=Z.applyToLocalDocumentSet(R,J);return g.documentOverlayCache.saveOverlays(q,Z.batchId,pt)})}).then(()=>({batchId:D.batchId,changes:yT(R)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,p,g){let _=f.Ru[f.currentUser.toKey()];_||(_=new se(It)),_=_.insert(p,g),f.Ru[f.currentUser.toKey()]=_}(s,o.batchId,n),await Jl(s,o.changes),await bh(s.remoteStore)}catch(o){const u=Xm(o,"Failed to persist write");n.reject(u)}}async function JT(r,t){const n=St(r);try{const s=await SR(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Eu.get(u);f&&(qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.lu=!0:o.modifiedDocuments.size>0?qt(f.lu,14607):o.removedDocuments.size>0&&(qt(f.lu,42227),f.lu=!1))}),await Jl(n,s,t)}catch(s){await ao(s)}}function Gv(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Pu.forEach((u,f)=>{const p=f.view.va(t);p.snapshot&&o.push(p.snapshot)}),function(f,p){const g=St(f);g.onlineState=p;let _=!1;g.queries.forEach((T,R)=>{for(const D of R.wa)D.va(p)&&(_=!0)}),_&&$m(g)}(s.eventManager,t),o.length&&s.hu.J_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function mI(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Eu.get(t),u=o&&o.key;if(u){let f=new se(ft.comparator);f=f.insert(u,We.newNoDocument(u,At.min()));const p=Mt().add(u),g=new Th(At.min(),new Map,new se(It),f,p);await JT(s,g),s.du=s.du.remove(u),s.Eu.delete(t),Wm(s)}else await mm(s.localStore,t,!1).then(()=>_m(s,t,n)).catch(ao)}async function pI(r,t){const n=St(r),s=t.batch.batchId;try{const o=await AR(n.localStore,t);e0(n,s,null),t0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Jl(n,o)}catch(o){await ao(o)}}async function gI(r,t,n){const s=St(r);try{const o=await function(f,p){const g=St(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let T;return g.mutationQueue.lookupMutationBatch(_,p).next(R=>(qt(R!==null,37113),T=R.keys(),g.mutationQueue.removeMutationBatch(_,R))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,T,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T)).next(()=>g.localDocuments.getDocuments(_,T))})}(s.localStore,t);e0(s,t,n),t0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Jl(s,o)}catch(o){await ao(o)}}function t0(r,t){(r.Vu.get(t)||[]).forEach(n=>{n.resolve()}),r.Vu.delete(t)}function e0(r,t,n){const s=St(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Ru[s.currentUser.toKey()]=o}}function _m(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Tu.get(t))r.Pu.delete(s),n&&r.hu.pu(s,n);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach(s=>{r.Au.containsKey(s)||n0(r,s)})}function n0(r,t){r.Iu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(Fm(r.remoteStore,n),r.du=r.du.remove(t),r.Eu.delete(n),Wm(r))}function Kv(r,t,n){for(const s of n)s instanceof $T?(r.Au.addReference(s.key,t),_I(r,s)):s instanceof ZT?(rt(Zm,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,t),r.Au.containsKey(s.key)||n0(r,s.key)):vt(19791,{yu:s})}function _I(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Iu.has(s)||(rt(Zm,"New document in limbo: "+n),r.Iu.add(s),Wm(r))}function Wm(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const n=new ft(Jt.fromString(t)),s=r.mu.next();r.Eu.set(s,new aI(n)),r.du=r.du.insert(n,s),FT(r.remoteStore,new Pr(fi(dT(n.path)),s,"TargetPurposeLimboResolution",mh.ue))}}async function Jl(r,t,n){const s=St(r),o=[],u=[],f=[];s.Pu.isEmpty()||(s.Pu.forEach((p,g)=>{f.push(s.gu(g,t,n).then(_=>{var T;if((_||n)&&s.isPrimaryClient){const R=_?!_.fromCache:(T=n?.targetChanges.get(g.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,R?"current":"not-current")}if(_){o.push(_);const R=qm.Es(g.targetId,_);u.push(R)}}))}),await Promise.all(f),s.hu.J_(o),await async function(g,_){const T=St(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>X.forEach(_,D=>X.forEach(D.Is,q=>T.persistence.referenceDelegate.addReference(R,D.targetId,q)).next(()=>X.forEach(D.ds,q=>T.persistence.referenceDelegate.removeReference(R,D.targetId,q)))))}catch(R){if(!oo(R))throw R;rt(Hm,"Failed to update sequence numbers: "+R)}for(const R of _){const D=R.targetId;if(!R.fromCache){const q=T.Fs.get(D),$=q.snapshotVersion,J=q.withLastLimboFreeSnapshotVersion($);T.Fs=T.Fs.insert(D,J)}}}(s.localStore,u))}async function yI(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){rt(Zm,"User change. New user:",t.toKey());const s=await BT(n.localStore,t);n.currentUser=t,function(u,f){u.Vu.forEach(p=>{p.forEach(g=>{g.reject(new it(Q.CANCELLED,f))})}),u.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Jl(n,s.Bs)}}function vI(r,t){const n=St(r),s=n.Eu.get(t);if(s&&s.lu)return Mt().add(s.key);{let o=Mt();const u=n.Tu.get(t);if(!u)return o;for(const f of u){const p=n.Pu.get(f);o=o.unionWith(p.view.tu)}return o}}function i0(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=JT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mI.bind(null,t),t.hu.J_=eI.bind(null,t.eventManager),t.hu.pu=nI.bind(null,t.eventManager),t}function EI(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gI.bind(null,t),t}class ih{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ah(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,n){return null}Fu(t,n){return null}vu(t){return TR(this.persistence,new yR,t.initialUser,this.serializer)}Du(t){return new zT(jm.Vi,this.serializer)}bu(t){return new CR}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ih.provider={build:()=>new ih};class TI extends ih{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,n){qt(this.persistence.referenceDelegate instanceof eh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new iR(s,t.asyncQueue,n)}Du(t){const n=this.cacheSizeBytes!==void 0?un.withCacheSize(this.cacheSizeBytes):un.DEFAULT;return new zT(s=>eh.Vi(s,n),this.serializer)}}class ym{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yI.bind(null,this.syncEngine),await $R(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new WR}()}createDatastore(t){const n=Ah(t.databaseInfo.databaseId),s=function(u){return new MR(u)}(t.databaseInfo);return function(u,f,p,g){return new UR(u,f,p,g)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,p){return new zR(s,o,u,f,p)}(this.localStore,this.datastore,t.asyncQueue,n=>Gv(this.syncEngine,n,0),function(){return zv.C()?new zv:new DR}())}createSyncEngine(t,n){return function(o,u,f,p,g,_,T){const R=new oI(o,u,f,p,g,_);return T&&(R.fu=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=St(o);rt(Bs,"RemoteStore shutting down."),u.Ia.add(5),await Wl(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ym.provider={build:()=>new ym};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):$i("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="FirestoreClient";class SI{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ze.UNAUTHENTICATED,this.clientId=Om.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{rt(Yr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(rt(Yr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Xm(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Gd(r,t){r.asyncQueue.verifyOperationInProgress(),rt(Yr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await BT(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>{qr("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{rt("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{qr("Terminating Firestore due to IndexedDb database deletion failed",o)})}),r._offlineComponents=t}async function Qv(r,t){r.asyncQueue.verifyOperationInProgress();const n=await bI(r);rt(Yr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>jv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>jv(t.remoteStore,o)),r._onlineComponents=t}async function bI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){rt(Yr,"Using user provided OfflineComponentProvider");try{await Gd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await Gd(r,new ih)}}else rt(Yr,"Using default OfflineComponentProvider"),await Gd(r,new TI(void 0));return r._offlineComponents}async function r0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(rt(Yr,"Using user provided OnlineComponentProvider"),await Qv(r,r._uninitializedComponentsProvider._online)):(rt(Yr,"Using default OnlineComponentProvider"),await Qv(r,new ym))),r._onlineComponents}function wI(r){return r0(r).then(t=>t.syncEngine)}async function RI(r){const t=await r0(r),n=t.eventManager;return n.onListen=lI.bind(null,t.syncEngine),n.onUnlisten=hI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=uI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=fI.bind(null,t.syncEngine),n}function II(r,t,n={}){const s=new Lr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,p,g,_){const T=new AI({next:D=>{T.Ou(),f.enqueueAndForget(()=>tI(u,R)),D.fromCache&&g.source==="server"?_.reject(new it(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(D)},error:D=>_.reject(D)}),R=new iI(p,T,{includeMetadataChanges:!0,ka:!0});return JR(u,R)}(await RI(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="firestore.googleapis.com",Xv=!0;class $v{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new it(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=a0,this.ssl=Xv}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Xv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=LT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<eR)throw new it(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s0((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new it(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new it(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new it(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $v({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new it(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new it(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $v(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Ow;switch(s.type){case"firstParty":return new Pw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new it(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Yv.get(n);s&&(rt("ComponentProvider","Removing Datastore"),Yv.delete(n),s.terminate())}(this),Promise.resolve()}}function CI(r,t,n,s={}){var o;r=Yc(r,wh);const u=Xr(t),f=r._getSettings(),p=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),g=`${t}:${n}`;u&&(bm(`https://${g}`),wm("Firestore",!0)),f.host!==a0&&f.host!==g&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},f),{host:g,ssl:u,emulatorOptions:s});if(!Us(_,p)&&(r._setSettings(_),s.mockUserToken)){let T,R;if(typeof s.mockUserToken=="string")T=s.mockUserToken,R=Ze.MOCK_USER;else{T=PE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new it(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new Ze(D)}r._authCredentials=new Nw(new QE(T,R))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ys(this.firestore,t,this._query)}}class Ue{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ue(this.firestore,t,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Xl(n,Ue._jsonSchema))return new Ue(t,s||null,new ft(Jt.fromString(n.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:Te("string",Ue._jsonSchemaVersion),referencePath:Te("string")};class zr extends Ys{constructor(t,n,s){super(t,n,dT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ue(this.firestore,null,new ft(t))}withConverter(t){return new zr(this.firestore,t,this._path)}}function DI(r,t,...n){if(r=De(r),XE("collection","path",t),r instanceof wh){const s=Jt.fromString(t,...n);return uv(s),new zr(r,null,s)}{if(!(r instanceof Ue||r instanceof zr))throw new it(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...n));return uv(s),new zr(r.firestore,null,s)}}function OI(r,t,...n){if(r=De(r),arguments.length===1&&(t=Om.newId()),XE("doc","path",t),r instanceof wh){const s=Jt.fromString(t,...n);return lv(s),new Ue(r,null,new ft(s))}{if(!(r instanceof Ue||r instanceof zr))throw new it(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...n));return lv(s),new Ue(r.firestore,r instanceof zr?r.converter:null,new ft(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="AsyncQueue";class Wv{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new qT(this,"async_queue_retry"),this.oc=()=>{const s=Fd();s&&rt(Zv,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=t;const n=Fd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const n=Fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Lr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!oo(t))throw t;rt(Zv,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const n=this._c.then(()=>(this.nc=!0,t().catch(s=>{throw this.tc=s,this.nc=!1,$i("INTERNAL UNHANDLED ERROR: ",Jv(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(t,n,s){this.ac(),this.sc.indexOf(t)>-1&&(n=0);const o=Ym.createAndSchedule(this,t,n,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&vt(47125,{hc:Jv(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const n of this.ec)if(n.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const n=this.ec.indexOf(t);this.ec.splice(n,1)}}function Jv(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Jm extends wh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new Wv,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wv(t),this._firestoreClient=void 0,await t}}}function NI(r,t){const n=typeof r=="object"?r:Cm(),s=typeof r=="string"?r:$c,o=fh(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=NE("firestore");u&&CI(o,...u)}return o}function o0(r){if(r._terminated)throw new it(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||VI(r),r._firestoreClient}function VI(r){var t,n,s;const o=r._freezeSettings(),u=function(p,g,_,T){return new $w(p,g,_,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,s0(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new SI(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(p){const g=p?._online.build();return{_offline:p?._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xn(Ge.fromBase64String(t))}catch(n){throw new it(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new xn(Ge.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Xl(t,xn._jsonSchema))return xn.fromBase64String(t.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:Te("string",xn._jsonSchemaVersion),bytes:Te("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new it(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new it(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new it(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return It(this._lat,t._lat)||It(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mi._jsonSchemaVersion}}static fromJSON(t){if(Xl(t,mi._jsonSchema))return new mi(t.latitude,t.longitude)}}mi._jsonSchemaVersion="firestore/geoPoint/1.0",mi._jsonSchema={type:Te("string",mi._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}toJSON(){return{type:pi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Xl(t,pi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new pi(t.vectorValues);throw new it(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pi._jsonSchemaVersion="firestore/vectorValue/1.0",pi._jsonSchema={type:Te("string",pi._jsonSchemaVersion),vectorValues:Te("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=/^__.*__$/;class PI{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ks(t,this.data,this.fieldMask,n,this.fieldTransforms):new $l(t,this.data,n,this.fieldTransforms)}}function l0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw vt(40011,{Ec:r})}}class np{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new np(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Rc({path:s,mc:!1});return o.fc(t),o}gc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return rh(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(l0(this.Ec)&&MI.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class xI{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Ah(t)}Dc(t,n,s,o=!1){return new np({Ec:t,methodName:n,bc:s,path:Fe.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function u0(r){const t=r._freezeSettings(),n=Ah(r._databaseId);return new xI(r._databaseId,!!t.ignoreUndefinedProperties,n)}function kI(r,t,n,s,o,u={}){const f=r.Dc(u.merge||u.mergeFields?2:0,t,n,o);f0("Data must be an object, but it was:",f,s);const p=c0(s,f);let g,_;if(u.merge)g=new qn(f.fieldMask),_=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const R of u.mergeFields){const D=LI(t,R,n);if(!f.contains(D))throw new it(Q.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);BI(T,D)||T.push(D)}g=new qn(T),_=f.fieldTransforms.filter(R=>g.covers(R.field))}else g=null,_=f.fieldTransforms;return new PI(new Pn(p),g,_)}class ip extends ep{_toFieldTransform(t){return new A1(t.path,new ql)}isEqual(t){return t instanceof ip}}function UI(r,t,n,s=!1){return rp(n,r.Dc(s?4:3,t))}function rp(r,t){if(h0(r=De(r)))return f0("Unsupported field value:",t,r),c0(r,t);if(r instanceof ep)return function(s,o){if(!l0(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const p of s){let g=rp(p,o.yc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=De(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return v1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=te.fromDate(s);return{timestampValue:th(o.serializer,u)}}if(s instanceof te){const u=new te(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:th(o.serializer,u)}}if(s instanceof mi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof xn)return{bytesValue:NT(o.serializer,s._byteString)};if(s instanceof Ue){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.wc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:zm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof pi)return function(f,p){return{mapValue:{fields:{[rT]:{stringValue:sT},[Zc]:{arrayValue:{values:f.toArray().map(_=>{if(typeof _!="number")throw p.wc("VectorValues must only contain numeric values.");return km(p.serializer,_)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${dh(s)}`)}(r,t)}function c0(r,t){const n={};return WE(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fs(r,(s,o)=>{const u=rp(o,t.Vc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function h0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof te||r instanceof mi||r instanceof xn||r instanceof Ue||r instanceof ep||r instanceof pi)}function f0(r,t,n){if(!h0(n)||!$E(n)){const s=dh(n);throw s==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+s)}}function LI(r,t,n){if((t=De(t))instanceof tp)return t._internalPath;if(typeof t=="string")return d0(r,t);throw rh("Field path arguments must be of type string or ",r,!1,void 0,n)}const zI=new RegExp("[~\\*/\\[\\]]");function d0(r,t,n){if(t.search(zI)>=0)throw rh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new tp(...t.split("."))._internalPath}catch{throw rh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function rh(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let p=`Function ${t}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new it(Q.INVALID_ARGUMENT,p+r+g)}function BI(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new jI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(sp("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jI extends m0{data(){return super.data()}}function sp(r,t){return typeof t=="string"?d0(r,t):t instanceof tp?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new it(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ap{}class p0 extends ap{}function HI(r,t,...n){let s=[];t instanceof ap&&s.push(t),s=s.concat(n),function(u){const f=u.filter(g=>g instanceof lp).length,p=u.filter(g=>g instanceof op).length;if(f>1||f>0&&p>0)throw new it(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class op extends p0{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new op(t,n,s)}_apply(t){const n=this._parse(t);return g0(t._query,n),new Ys(t.firestore,t.converter,lm(t._query,n))}_parse(t){const n=u0(t.firestore);return function(u,f,p,g,_,T,R){let D;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new it(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){eE(R,T);const $=[];for(const J of R)$.push(tE(g,u,J));D={arrayValue:{values:$}}}else D=tE(g,u,R)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||eE(R,T),D=UI(p,f,R,T==="in"||T==="not-in");return Ee.create(_,T,D)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class lp extends ap{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new lp(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Fn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,u){let f=o;const p=u.getFlattenedFilters();for(const g of p)g0(f,g),f=lm(f,g)}(t._query,n),new Ys(t.firestore,t.converter,lm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class up extends p0{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new up(t,n)}_apply(t){const n=function(o,u,f){if(o.startAt!==null)throw new it(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new it(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jl(u,f)}(t._query,this._field,this._direction);return new Ys(t.firestore,t.converter,function(o,u){const f=o.explicitOrderBy.concat([u]);return new lo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,n))}}function FI(r,t="asc"){const n=t,s=sp("orderBy",r);return up._create(s,n)}function tE(r,t,n){if(typeof(n=De(n))=="string"){if(n==="")throw new it(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mT(t)&&n.indexOf("/")!==-1)throw new it(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Jt.fromString(n));if(!ft.isDocumentKey(s))throw new it(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _v(r,new ft(s))}if(n instanceof Ue)return _v(r,n._key);throw new it(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dh(n)}.`)}function eE(r,t){if(!Array.isArray(r)||r.length===0)throw new it(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function g0(r,t){const n=function(o,u){for(const f of o)for(const p of f.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new it(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new it(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class GI{convertValue(t,n="none"){switch(Kr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return me(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Gr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw vt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Fs(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[Zc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>me(f.doubleValue));return new pi(u)}convertGeoPoint(t){return new mi(me(t.latitude),me(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=gh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ll(t));default:return null}}convertTimestamp(t){const n=Fr(t);return new te(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=Jt.fromString(t);qt(UT(s),9688,{name:t});const o=new zl(s.get(1),s.get(3)),u=new ft(s.popFirst(5));return o.isEqual(n)||$i(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(r,t,n){let s;return s=r?r.toFirestore(t):t,s}class Vc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ya extends m0{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(sp("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new it(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Ya._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ya._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ya._jsonSchema={type:Te("string",Ya._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class jc extends Ya{data(t={}){return super.data(t)}}class Xa{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Vc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new jc(this._firestore,this._userDataWriter,s.key,s,new Vc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new it(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(p=>{const g=new jc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Vc(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const g=new jc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Vc(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return p.type!==0&&(_=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),T=f.indexOf(p.doc.key)),{type:QI(p.type),doc:g,oldIndex:_,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new it(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Xa._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Om.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function QI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vt(61501,{type:r})}}Xa._jsonSchemaVersion="firestore/querySnapshot/1.0",Xa._jsonSchema={type:Te("string",Xa._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};class YI extends GI{constructor(t){super(),this.firestore=t}convertBytes(t){return new xn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function XI(r){r=Yc(r,Ys);const t=Yc(r.firestore,Jm),n=o0(t),s=new YI(t);return qI(r._query),II(n,r._query).then(o=>new Xa(t,s,r,o))}function $I(r,t){const n=Yc(r.firestore,Jm),s=OI(r),o=KI(r.converter,t);return ZI(n,[kI(u0(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Yi.exists(!1))]).then(()=>s)}function ZI(r,t){return function(s,o){const u=new Lr;return s.asyncQueue.enqueueAndForget(async()=>dI(await wI(s),o,u)),u.promise}(o0(r),t)}function WI(){return new ip("serverTimestamp")}(function(t,n=!0){(function(o){so=o})(Hs),Ls(new jr("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),p=new Jm(new Vw(s.getProvider("auth-internal")),new xw(f,s.getProvider("app-check-internal")),function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new it(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zl(_.options.projectId,T)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),hi(iv,rv,t),hi(iv,rv,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="firebasestorage.googleapis.com",y0="storageBucket",JI=2*60*1e3,tC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends vi{constructor(t,n,s=0){super(Kd(t),`Firebase Storage: ${n} (${Kd(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ce.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Kd(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function Kd(r){return"storage/"+r}function cp(){const r="An unknown error occurred, please check the error payload for server response.";return new ce(ue.UNKNOWN,r)}function eC(r){return new ce(ue.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function nC(r){return new ce(ue.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function iC(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ce(ue.UNAUTHENTICATED,r)}function rC(){return new ce(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sC(r){return new ce(ue.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function aC(){return new ce(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oC(){return new ce(ue.CANCELED,"User canceled the upload/download.")}function lC(r){return new ce(ue.INVALID_URL,"Invalid URL '"+r+"'.")}function uC(r){return new ce(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function cC(){return new ce(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+y0+"' property when initializing the app?")}function hC(){return new ce(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function fC(){return new ce(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dC(r){return new ce(ue.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vm(r){return new ce(ue.INVALID_ARGUMENT,r)}function v0(){return new ce(ue.APP_DELETED,"The Firebase app was deleted.")}function mC(r){return new ce(ue.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Pl(r,t){return new ce(ue.INVALID_FORMAT,"String does not match format '"+r+"': "+t)}function Sl(r){throw new ce(ue.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=vn.makeFromUrl(t,n)}catch{return new vn(t,"")}if(s.path==="")return s;throw uC(t)}static makeFromUrl(t,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(dt){dt.path.charAt(dt.path.length-1)==="/"&&(dt.path_=dt.path_.slice(0,-1))}const f="(/(.*))?$",p=new RegExp("^gs://"+o+f,"i"),g={bucket:1,path:3};function _(dt){dt.path_=decodeURIComponent(dt.path)}const T="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),D="(/([^?#]*).*)?$",q=new RegExp(`^https?://${R}/${T}/b/${o}/o${D}`,"i"),$={bucket:1,path:3},J=n===_0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,Z="([^?#]*)",pt=new RegExp(`^https?://${J}/${o}/${Z}`,"i"),st=[{regex:p,indices:g,postModify:u},{regex:q,indices:$,postModify:_},{regex:pt,indices:{bucket:1,path:2},postModify:_}];for(let dt=0;dt<st.length;dt++){const mt=st[dt],bt=mt.regex.exec(t);if(bt){const V=bt[mt.indices.bucket];let b=bt[mt.indices.path];b||(b=""),s=new vn(V,b),mt.postModify(s);break}}if(s==null)throw lC(t);return s}}class pC{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(r,t,n){let s=1,o=null,u=null,f=!1,p=0;function g(){return p===2}let _=!1;function T(...Z){_||(_=!0,t.apply(null,Z))}function R(Z){o=setTimeout(()=>{o=null,r(q,g())},Z)}function D(){u&&clearTimeout(u)}function q(Z,...pt){if(_){D();return}if(Z){D(),T.call(null,Z,...pt);return}if(g()||f){D(),T.call(null,Z,...pt);return}s<64&&(s*=2);let st;p===1?(p=2,st=0):st=(s+Math.random())*1e3,R(st)}let $=!1;function J(Z){$||($=!0,D(),!_&&(o!==null?(Z||(p=2),clearTimeout(o),R(0)):Z||(p=1)))}return R(0),u=setTimeout(()=>{f=!0,J(!0)},n),J}function _C(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(r){return r!==void 0}function vC(r){return typeof r=="object"&&!Array.isArray(r)}function hp(r){return typeof r=="string"||r instanceof String}function nE(r){return fp()&&r instanceof Blob}function fp(){return typeof Blob<"u"}function iE(r,t,n,s){if(s<t)throw vm(`Invalid value for '${r}'. Expected ${t} or greater.`);if(s>n)throw vm(`Invalid value for '${r}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(r,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${r}`}function E0(r){const t=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=t(s)+"="+t(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var ks;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(ks||(ks={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(r,t){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=t.indexOf(r)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(t,n,s,o,u,f,p,g,_,T,R,D=!0,q=!1){this.url_=t,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=p,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=T,this.connectionFactory_=R,this.retry=D,this.isUsingEmulator=q,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(($,J)=>{this.resolve_=$,this.reject_=J,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new Mc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=p=>{const g=p.loaded,_=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const p=u.getErrorCode()===ks.NO_ERROR,g=u.getStatus();if(!p||EC(g,this.additionalRetryCodes_)&&this.retry){const T=u.getErrorCode()===ks.ABORT;s(!1,new Mc(!1,null,T));return}const _=this.successCodes_.indexOf(g)!==-1;s(!0,new Mc(_,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(p,p.getResponse());yC(g)?u(g):u()}catch(g){f(g)}else if(p!==null){const g=cp();g.serverResponse=p.getErrorText(),this.errorCallback_?f(this.errorCallback_(p,g)):f(g)}else if(o.canceled){const g=this.appDelete_?v0():oC();f(g)}else{const g=aC();f(g)}};this.canceled_?n(!1,new Mc(!1,null,!0)):this.backoffId_=gC(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&_C(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mc{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function AC(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function SC(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function bC(r,t){t&&(r["X-Firebase-GMPID"]=t)}function wC(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function RC(r,t,n,s,o,u,f=!0,p=!1){const g=E0(r.urlParams),_=r.url+g,T=Object.assign({},r.headers);return bC(T,t),AC(T,n),SC(T,u),wC(T,s),new TC(_,r.method,T,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function CC(...r){const t=IC();if(t!==void 0){const n=new t;for(let s=0;s<r.length;s++)n.append(r[s]);return n.getBlob()}else{if(fp())return new Blob(r);throw new ce(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function DC(r,t,n){return r.webkitSlice?r.webkitSlice(t,n):r.mozSlice?r.mozSlice(t,n):r.slice?r.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(r){if(typeof atob>"u")throw dC("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qd{constructor(t,n){this.data=t,this.contentType=n||null}}function NC(r,t){switch(r){case ci.RAW:return new Qd(T0(t));case ci.BASE64:case ci.BASE64URL:return new Qd(A0(r,t));case ci.DATA_URL:return new Qd(MC(t),PC(t))}throw cp()}function T0(r){const t=[];for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<r.length-1&&(r.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const u=s,f=r.charCodeAt(++n);s=65536|(u&1023)<<10|f&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function VC(r){let t;try{t=decodeURIComponent(r)}catch{throw Pl(ci.DATA_URL,"Malformed data URL.")}return T0(t)}function A0(r,t){switch(r){case ci.BASE64:{const o=t.indexOf("-")!==-1,u=t.indexOf("_")!==-1;if(o||u)throw Pl(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ci.BASE64URL:{const o=t.indexOf("+")!==-1,u=t.indexOf("/")!==-1;if(o||u)throw Pl(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=OC(t)}catch(o){throw o.message.includes("polyfill")?o:Pl(r,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class S0{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Pl(ci.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=xC(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function MC(r){const t=new S0(r);return t.base64?A0(ci.BASE64,t.rest):VC(t.rest)}function PC(r){return new S0(r).contentType}function xC(r,t){return r.length>=t.length?r.substring(r.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n){let s=0,o="";nE(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(nE(this.data_)){const s=this.data_,o=DC(s,t,n);return o===null?null:new Dr(o)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new Dr(s,!0)}}static getBlob(...t){if(fp()){const n=t.map(s=>s instanceof Dr?s.data_:s);return new Dr(CC.apply(null,n))}else{const n=t.map(f=>hp(f)?NC(ci.RAW,f).data:f.data_);let s=0;n.forEach(f=>{s+=f.byteLength});const o=new Uint8Array(s);let u=0;return n.forEach(f=>{for(let p=0;p<f.length;p++)o[u++]=f[p]}),new Dr(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(r){let t;try{t=JSON.parse(r)}catch{return null}return vC(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function UC(r,t){const n=t.split("/").filter(s=>s.length>0).join("/");return r.length===0?n:r+"/"+n}function w0(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(r,t){return t}class sn{constructor(t,n,s,o){this.server=t,this.local=n||t,this.writable=!!s,this.xform=o||LC}}let Pc=null;function zC(r){return!hp(r)||r.length<2?r:w0(r)}function R0(){if(Pc)return Pc;const r=[];r.push(new sn("bucket")),r.push(new sn("generation")),r.push(new sn("metageneration")),r.push(new sn("name","fullPath",!0));function t(u,f){return zC(f)}const n=new sn("name");n.xform=t,r.push(n);function s(u,f){return f!==void 0?Number(f):f}const o=new sn("size");return o.xform=s,r.push(o),r.push(new sn("timeCreated")),r.push(new sn("updated")),r.push(new sn("md5Hash",null,!0)),r.push(new sn("cacheControl",null,!0)),r.push(new sn("contentDisposition",null,!0)),r.push(new sn("contentEncoding",null,!0)),r.push(new sn("contentLanguage",null,!0)),r.push(new sn("contentType",null,!0)),r.push(new sn("metadata","customMetadata",!0)),Pc=r,Pc}function BC(r,t){function n(){const s=r.bucket,o=r.fullPath,u=new vn(s,o);return t._makeStorageReference(u)}Object.defineProperty(r,"ref",{get:n})}function jC(r,t,n){const s={};s.type="file";const o=n.length;for(let u=0;u<o;u++){const f=n[u];s[f.local]=f.xform(s,t[f.server])}return BC(s,r),s}function I0(r,t,n){const s=b0(t);return s===null?null:jC(r,s,n)}function qC(r,t,n,s){const o=b0(t);if(o===null||!hp(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const f=encodeURIComponent;return u.split(",").map(_=>{const T=r.bucket,R=r.fullPath,D="/b/"+f(T)+"/o/"+f(R),q=dp(D,n,s),$=E0({alt:"media",token:_});return q+$})[0]}function HC(r,t){const n={},s=t.length;for(let o=0;o<s;o++){const u=t[o];u.writable&&(n[u.server]=r[u.local])}return JSON.stringify(n)}class C0{constructor(t,n,s,o){this.url=t,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(r){if(!r)throw cp()}function FC(r,t){function n(s,o){const u=I0(r,o,t);return D0(u!==null),u}return n}function GC(r,t){function n(s,o){const u=I0(r,o,t);return D0(u!==null),qC(u,o,r.host,r._protocol)}return n}function O0(r){function t(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=rC():o=iC():n.getStatus()===402?o=nC(r.bucket):n.getStatus()===403?o=sC(r.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return t}function KC(r){const t=O0(r);function n(s,o){let u=t(s,o);return s.getStatus()===404&&(u=eC(r.path)),u.serverResponse=o.serverResponse,u}return n}function QC(r,t,n){const s=t.fullServerUrl(),o=dp(s,r.host,r._protocol),u="GET",f=r.maxOperationRetryTime,p=new C0(o,u,GC(r,n),f);return p.errorHandler=KC(t),p}function YC(r,t){return r&&r.contentType||t&&t.type()||"application/octet-stream"}function XC(r,t,n){const s=Object.assign({},n);return s.fullPath=r.path,s.size=t.size(),s.contentType||(s.contentType=YC(null,t)),s}function $C(r,t,n,s,o){const u=t.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function p(){let st="";for(let dt=0;dt<2;dt++)st=st+Math.random().toString().slice(2);return st}const g=p();f["Content-Type"]="multipart/related; boundary="+g;const _=XC(t,s,o),T=HC(_,n),R="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+T+`\r
--`+g+`\r
Content-Type: `+_.contentType+`\r
\r
`,D=`\r
--`+g+"--",q=Dr.getBlob(R,s,D);if(q===null)throw hC();const $={name:_.fullPath},J=dp(u,r.host,r._protocol),Z="POST",pt=r.maxUploadRetryTime,ot=new C0(J,Z,FC(r,n),pt);return ot.urlParams=$,ot.headers=f,ot.body=q.uploadData(),ot.errorHandler=O0(t),ot}class ZC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ks.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ks.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ks.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,o,u){if(this.sent_)throw Sl("cannot .send() more than once");if(Xr(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),u!==void 0)for(const f in u)u.hasOwnProperty(f)&&this.xhr_.setRequestHeader(f,u[f].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Sl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Sl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Sl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Sl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class WC extends ZC{initXhr(){this.xhr_.responseType="text"}}function N0(){return new WC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,n){this._service=t,n instanceof vn?this._location=n:this._location=vn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new js(t,n)}get root(){const t=new vn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return w0(this._location.path)}get storage(){return this._service}get parent(){const t=kC(this._location.path);if(t===null)return null;const n=new vn(this._location.bucket,t);return new js(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw mC(t)}}function JC(r,t,n){r._throwIfRoot("uploadBytes");const s=$C(r.storage,r._location,R0(),new Dr(t,!0),n);return r.storage.makeRequestWithTokens(s,N0).then(o=>({metadata:o,ref:r}))}function t2(r){r._throwIfRoot("getDownloadURL");const t=QC(r.storage,r._location,R0());return r.storage.makeRequestWithTokens(t,N0).then(n=>{if(n===null)throw fC();return n})}function e2(r,t){const n=UC(r._location.path,t),s=new vn(r._location.bucket,n);return new js(r.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(r){return/^[A-Za-z]+:\/\//.test(r)}function i2(r,t){return new js(r,t)}function V0(r,t){if(r instanceof mp){const n=r;if(n._bucket==null)throw cC();const s=new js(n,n._bucket);return t!=null?V0(s,t):s}else return t!==void 0?e2(r,t):r}function r2(r,t){if(t&&n2(t)){if(r instanceof mp)return i2(r,t);throw vm("To use ref(service, url), the first argument must be a Storage instance.")}else return V0(r,t)}function rE(r,t){const n=t?.[y0];return n==null?null:vn.makeFromBucketSpec(n,r)}function s2(r,t,n,s={}){r.host=`${t}:${n}`;const o=Xr(t);o&&(bm(`https://${r.host}/b`),wm("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(r._overrideAuthToken=typeof u=="string"?u:PE(u,r.app.options.projectId))}class mp{constructor(t,n,s,o,u,f=!1){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=_0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JI,this._maxUploadRetryTime=tC,this._requests=new Set,o!=null?this._bucket=vn.makeFromBucketSpec(o,this._host):this._bucket=rE(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,t):this._bucket=rE(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){iE("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){iE("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new js(this,t)}_makeRequest(t,n,s,o,u=!0){if(this._deleted)return new pC(v0());{const f=RC(t,this._appId,s,o,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,o).getPromise()}}const sE="@firebase/storage",aE="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="storage";function a2(r,t,n){return r=De(r),JC(r,t,n)}function o2(r){return r=De(r),t2(r)}function l2(r,t){return r=De(r),r2(r,t)}function u2(r=Cm(),t){r=De(r);const s=fh(r,M0).getImmediate({identifier:t}),o=NE("storage");return o&&c2(s,...o),s}function c2(r,t,n,s={}){s2(r,t,n,s)}function h2(r,{instanceIdentifier:t}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new mp(n,s,o,t,Hs)}function f2(){Ls(new jr(M0,h2,"PUBLIC").setMultipleInstances(!0)),hi(sE,aE,""),hi(sE,aE,"esm2017")}f2();function pp(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function P0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d2=P0,x0=new Ql("auth","Firebase",P0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new Rm("@firebase/auth");function m2(r,...t){sh.logLevel<=Vt.WARN&&sh.warn(`Auth (${Hs}): ${r}`,...t)}function qc(r,...t){sh.logLevel<=Vt.ERROR&&sh.error(`Auth (${Hs}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,...t){throw gp(r,...t)}function gi(r,...t){return gp(r,...t)}function k0(r,t,n){const s=Object.assign(Object.assign({},d2()),{[t]:n});return new Ql("auth","Firebase",s).create(t,{appName:r.name})}function Br(r){return k0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gp(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return x0.create(r,...t)}function yt(r,t,...n){if(!r)throw gp(t,...n)}function Ki(r){const t="INTERNAL ASSERTION FAILED: "+r;throw qc(t),new Error(t)}function Wi(r,t){r||Ki(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function p2(){return oE()==="http:"||oE()==="https:"}function oE(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p2()||ob()||"connection"in navigator)?navigator.onLine:!0}function _2(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,n){this.shortDelay=t,this.longDelay=n,Wi(n>t,"Short delay should be less than long delay!"),this.isMobile=rb()||lb()}get(){return g2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(r,t){Wi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],E2=new tu(3e4,6e4);function Xs(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function $r(r,t,n,s,o={}){return L0(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const p=Yl(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:t,headers:g},u);return ab()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Xr(r.emulatorConfig.host)&&(_.credentials="include"),U0.fetch()(await z0(r,r.config.apiHost,n,p),_)})}async function L0(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},y2),t);try{const o=new A2(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw xc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw xc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw xc(r,"user-disabled",f);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw k0(r,T,_);Gn(r,T)}}catch(o){if(o instanceof vi)throw o;Gn(r,"network-request-failed",{message:String(o)})}}async function Rh(r,t,n,s,o={}){const u=await $r(r,t,n,s,o);return"mfaPendingCredential"in u&&Gn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function z0(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?_p(r.config,o):`${r.config.apiScheme}://${o}`;return v2.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function T2(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gi(this.auth,"network-request-failed")),E2.get())})}}function xc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=gi(r,t,s);return o.customData._tokenResponse=n,o}function lE(r){return r!==void 0&&r.enterprise!==void 0}class S2{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return T2(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function b2(r,t){return $r(r,"GET","/v2/recaptchaConfig",Xs(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(r,t){return $r(r,"POST","/v1/accounts:delete",t)}async function ah(r,t){return $r(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function R2(r,t=!1){const n=De(r),s=await n.getIdToken(t),o=yp(s);yt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:xl(Yd(o.auth_time)),issuedAtTime:xl(Yd(o.iat)),expirationTime:xl(Yd(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Yd(r){return Number(r)*1e3}function yp(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return qc("JWT malformed, contained fewer than 3 sections"),null;try{const o=DE(n);return o?JSON.parse(o):(qc("Failed to decode base64 JWT payload"),null)}catch(o){return qc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function uE(r){const t=yp(r);return yt(t,"internal-error"),yt(typeof t.exp<"u","internal-error"),yt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof vi&&I2(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function I2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xl(this.lastLoginAt),this.creationTime=xl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Gl(r,ah(n,{idToken:s}));yt(o?.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?B0(u.providerUserInfo):[],p=O2(r.providerData,f),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!p?.length,T=g?_:!1,R={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Tm(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(r,R)}async function D2(r){const t=De(r);await oh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function O2(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function B0(r){return r.map(t=>{var{providerId:n}=t,s=pp(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(r,t){const n=await L0(r,{},async()=>{const s=Yl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await z0(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&Xr(r.emulatorConfig.host)&&(g.credentials="include"),U0.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function V2(r,t){return $r(r,"POST","/v2/accounts:revokeToken",Xs(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){yt(t.idToken,"internal-error"),yt(typeof t.idToken<"u","internal-error"),yt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){yt(t.length!==0,"internal-error");const n=uE(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(yt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await N2(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new $a;return s&&(yt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(yt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(yt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $a,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(r,t){yt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Hn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=pp(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Tm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Gl(this,this.stsTokenManager.getToken(this.auth,t));return yt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return R2(this,t)}reload(){return D2(this)}_assign(t){this!==t&&(yt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){yt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await oh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Br(this.auth));const t=await this.getIdToken();return await Gl(this,w2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,p,g,_,T;const R=(s=n.displayName)!==null&&s!==void 0?s:void 0,D=(o=n.email)!==null&&o!==void 0?o:void 0,q=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,$=(f=n.photoURL)!==null&&f!==void 0?f:void 0,J=(p=n.tenantId)!==null&&p!==void 0?p:void 0,Z=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,pt=(_=n.createdAt)!==null&&_!==void 0?_:void 0,ot=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:st,emailVerified:dt,isAnonymous:mt,providerData:bt,stsTokenManager:V}=n;yt(st&&V,t,"internal-error");const b=$a.fromJSON(this.name,V);yt(typeof st=="string",t,"internal-error"),Cr(R,t.name),Cr(D,t.name),yt(typeof dt=="boolean",t,"internal-error"),yt(typeof mt=="boolean",t,"internal-error"),Cr(q,t.name),Cr($,t.name),Cr(J,t.name),Cr(Z,t.name),Cr(pt,t.name),Cr(ot,t.name);const I=new Hn({uid:st,auth:t,email:D,emailVerified:dt,displayName:R,isAnonymous:mt,photoURL:$,phoneNumber:q,tenantId:J,stsTokenManager:b,createdAt:pt,lastLoginAt:ot});return bt&&Array.isArray(bt)&&(I.providerData=bt.map(N=>Object.assign({},N))),Z&&(I._redirectEventId=Z),I}static async _fromIdTokenResponse(t,n,s=!1){const o=new $a;o.updateFromServerResponse(n);const u=new Hn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await oh(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];yt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?B0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,p=new $a;p.updateFromIdToken(s);const g=new Hn({uid:o.localId,auth:t,stsTokenManager:p,isAnonymous:f}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Tm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=new Map;function Qi(r){Wi(r instanceof Function,"Expected a class definition");let t=cE.get(r);return t?(Wi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,cE.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}j0.type="NONE";const hE=j0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(r,t,n){return`firebase:${r}:${t}:${n}`}class Za{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Hc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Hc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ah(this.auth,{idToken:t}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,t):null}return Hn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Za(Qi(hE),t,s);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Qi(hE);const f=Hc(s,t.config.apiKey,t.name);let p=null;for(const _ of n)try{const T=await _._get(f);if(T){let R;if(typeof T=="string"){const D=await ah(t,{idToken:T}).catch(()=>{});if(!D)break;R=await Hn._fromGetAccountInfoResponse(t,D,T)}else R=Hn._fromJSON(t,T);_!==u&&(p=R),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Za(u,t,s):(u=g[0],p&&await u._set(f,p.toJSON()),await Promise.all(n.map(async _=>{if(_!==u)try{await _._remove(f)}catch{}})),new Za(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(G0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(q0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Q0(t))return"Blackberry";if(Y0(t))return"Webos";if(H0(t))return"Safari";if((t.includes("chrome/")||F0(t))&&!t.includes("edge/"))return"Chrome";if(K0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function q0(r=Je()){return/firefox\//i.test(r)}function H0(r=Je()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function F0(r=Je()){return/crios\//i.test(r)}function G0(r=Je()){return/iemobile/i.test(r)}function K0(r=Je()){return/android/i.test(r)}function Q0(r=Je()){return/blackberry/i.test(r)}function Y0(r=Je()){return/webos/i.test(r)}function vp(r=Je()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function M2(r=Je()){var t;return vp(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function P2(){return ub()&&document.documentMode===10}function X0(r=Je()){return vp(r)||K0(r)||Y0(r)||Q0(r)||/windows phone/i.test(r)||G0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(r,t=[]){let n;switch(r){case"Browser":n=fE(Je());break;case"Worker":n=`${fE(Je())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,p)=>{try{const g=t(u);f(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(r,t={}){return $r(r,"GET","/v2/passwordPolicy",Xs(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=6;class L2{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:U2,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,g),this.validatePasswordCharacterOptions(t,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dE(this),this.idTokenSubscription=new dE(this),this.beforeStateQueue=new x2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Za.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ah(this,{idToken:t}),s=await Hn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Mn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=o?._redirectEventId,g=await this.tryRedirectSignIn(t);(!f||f===p)&&g?.user&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return yt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await oh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=_2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Mn(this.app))return Promise.reject(Br(this));const n=t?De(t):null;return n&&yt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&yt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Mn(this.app)?Promise.reject(Br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await k2(this),n=new L2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ql("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await V2(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qi(t)||this._popupRedirectResolver;yt(n,this,"argument-error"),this.redirectPersistenceManager=await Za.create(this,[Qi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(yt(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return yt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&m2(`Error while retrieving App Check token: ${n.error}`),n?.token}}function co(r){return De(r)}class dE{constructor(t){this.auth=t,this.observer=null,this.addObserver=_b(n=>this.observer=n)}get next(){return yt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function B2(r){Ih=r}function Z0(r){return Ih.loadJS(r)}function j2(){return Ih.recaptchaEnterpriseScript}function q2(){return Ih.gapiScript}function H2(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class F2{constructor(){this.enterprise=new G2}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class G2{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const K2="recaptcha-enterprise",W0="NO_RECAPTCHA";class Q2{constructor(t){this.type=K2,this.auth=co(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{b2(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new S2(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,f(_.siteKey)}}).catch(g=>{p(g)})})}function o(u,f,p){const g=window.grecaptcha;lE(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(_=>{f(_)}).catch(()=>{f(W0)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new F2().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(p=>{if(!n&&lE(window.grecaptcha))o(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=j2();g.length!==0&&(g+=p),Z0(g).then(()=>{o(p,u,f)}).catch(_=>{f(_)})}}).catch(p=>{f(p)})})}}async function mE(r,t,n,s=!1,o=!1){const u=new Q2(r);let f;if(o)f=W0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const p=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,_=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function pE(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await mE(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await mE(r,t,n,n==="getOobCode");return s(r,p)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(r,t){const n=fh(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Us(u,t??{}))return o;Gn(o,"already-initialized")}return n.initialize({options:t})}function X2(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Qi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function $2(r,t,n){const s=co(r);yt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=J0(t),{host:f,port:p}=Z2(t),g=p===null?"":`:${p}`,_={url:`${u}//${f}${g}/`},T=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){yt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),yt(Us(_,s.config.emulator)&&Us(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Xr(f)?(bm(`${u}//${f}${g}`),wm("Auth",!0)):W2()}function J0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function Z2(r){const t=J0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:gE(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:gE(f)}}}function gE(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function W2(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ki("not implemented")}_getIdTokenResponse(t){return Ki("not implemented")}_linkToIdToken(t,n){return Ki("not implemented")}_getReauthenticationResolver(t){return Ki("not implemented")}}async function J2(r,t){return $r(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(r,t){return Rh(r,"POST","/v1/accounts:signInWithPassword",Xs(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(r,t){return Rh(r,"POST","/v1/accounts:signInWithEmailLink",Xs(r,t))}async function nD(r,t){return Rh(r,"POST","/v1/accounts:signInWithEmailLink",Xs(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Ep{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Kl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Kl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pE(t,n,"signInWithPassword",tD);case"emailLink":return eD(t,{email:this._email,oobCode:this._password});default:Gn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pE(t,s,"signUpPassword",J2);case"emailLink":return nD(t,{idToken:n,email:this._email,oobCode:this._password});default:Gn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(r,t){return Rh(r,"POST","/v1/accounts:signInWithIdp",Xs(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD="http://localhost";class qs extends Ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new qs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=pp(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new qs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Wa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Wa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Wa(t,n)}buildRequest(){const t={requestUri:iD,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Yl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sD(r){const t=bl(wl(r)).link,n=t?bl(wl(t)).deep_link_id:null,s=bl(wl(r)).deep_link_id;return(s?bl(wl(s)).link:null)||s||n||t||r}class Tp{constructor(t){var n,s,o,u,f,p;const g=bl(wl(t)),_=(n=g.apiKey)!==null&&n!==void 0?n:null,T=(s=g.oobCode)!==null&&s!==void 0?s:null,R=rD((o=g.mode)!==null&&o!==void 0?o:null);yt(_&&T&&R,"argument-error"),this.apiKey=_,this.operation=R,this.code=T,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=g.lang)!==null&&f!==void 0?f:null,this.tenantId=(p=g.tenantId)!==null&&p!==void 0?p:null}static parseLink(t){const n=sD(t);try{return new Tp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.providerId=ho.PROVIDER_ID}static credential(t,n){return Kl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=Tp.parseLink(n);return yt(s,"argument-error"),Kl._fromEmailAndCode(t,s.code,s.tenantId)}}ho.PROVIDER_ID="password";ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends tA{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends eu{constructor(){super("facebook.com")}static credential(t){return qs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Or.credential(t.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends eu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return qs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Nr.credential(n,s)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends eu{constructor(){super("github.com")}static credential(t){return qs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vr.credential(t.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends eu{constructor(){super("twitter.com")}static credential(t,n){return qs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Mr.credential(n,s)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Hn._fromIdTokenResponse(t,s,o),f=_E(s);return new ro({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=_E(s);return new ro({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function _E(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends vi{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,lh.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new lh(t,n,s,o)}}function eA(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?lh._fromErrorAndOperation(r,u,t,s):u})}async function aD(r,t,n=!1){const s=await Gl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return ro._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(r,t,n=!1){const{auth:s}=r;if(Mn(s.app))return Promise.reject(Br(s));const o="reauthenticate";try{const u=await Gl(r,eA(s,o,t,r),n);yt(u.idToken,s,"internal-error");const f=yp(u.idToken);yt(f,s,"internal-error");const{sub:p}=f;return yt(r.uid===p,s,"user-mismatch"),ro._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Gn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(r,t,n=!1){if(Mn(r.app))return Promise.reject(Br(r));const s="signIn",o=await eA(r,s,t),u=await ro._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function lD(r,t){return nA(co(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(r){const t=co(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function cD(r,t,n){return Mn(r.app)?Promise.reject(Br(r)):lD(De(r),ho.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&uD(r),s})}function hD(r,t,n,s){return De(r).onIdTokenChanged(t,n,s)}function fD(r,t,n){return De(r).beforeAuthStateChanged(t,n)}function dD(r,t,n,s){return De(r).onAuthStateChanged(t,n,s)}function mD(r){return De(r).signOut()}const uh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uh,"1"),this.storage.removeItem(uh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=1e3,gD=10;class rA extends iA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,p,g)=>{this.notifyListeners(f,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);P2()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,gD):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},pD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}rA.type="LOCAL";const _D=rA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA extends iA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}sA.type="SESSION";const aA=sA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new Ch(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(f).map(async _=>_(n.origin,u)),g=await yD(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ch.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((p,g)=>{const _=Ap("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(R){const D=R;if(D.data.eventId===_)switch(D.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(D.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:_,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}function ED(r){_i().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function TD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AD(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function SD(){return oA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="firebaseLocalStorageDb",bD=1,ch="firebaseLocalStorage",uA="fbase_key";class nu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dh(r,t){return r.transaction([ch],t?"readwrite":"readonly").objectStore(ch)}function wD(){const r=indexedDB.deleteDatabase(lA);return new nu(r).toPromise()}function Am(){const r=indexedDB.open(lA,bD);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ch,{keyPath:uA})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ch)?t(s):(s.close(),await wD(),t(await Am()))})})}async function yE(r,t,n){const s=Dh(r,!0).put({[uA]:t,value:n});return new nu(s).toPromise()}async function RD(r,t){const n=Dh(r,!1).get(t),s=await new nu(n).toPromise();return s===void 0?null:s.value}function vE(r,t){const n=Dh(r,!0).delete(t);return new nu(n).toPromise()}const ID=800,CD=3;class cA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Am(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>CD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ch._getInstance(SD()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await TD(),!this.activeServiceWorker)return;this.sender=new vD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||AD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Am();return await yE(t,uh,"1"),await vE(t,uh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>yE(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>RD(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>vE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=Dh(o,!1).getAll();return new nu(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ID)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cA.type="LOCAL";const DD=cA;new tu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(r,t){return t?Qi(t):(yt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp extends Ep{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Wa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Wa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Wa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ND(r){return nA(r.auth,new Sp(r),r.bypassAuthState)}function VD(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),oD(n,new Sp(r),r.bypassAuthState)}async function MD(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),aD(n,new Sp(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:p}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ND;case"linkViaPopup":case"linkViaRedirect":return MD;case"reauthViaPopup":case"reauthViaRedirect":return VD;default:Gn(this.auth,"internal-error")}}resolve(t){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=new tu(2e3,1e4);class Ka extends hA{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ka.currentPopupAction&&Ka.currentPopupAction.cancel(),Ka.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return yt(t,this.auth,"internal-error"),t}async onExecution(){Wi(this.filter.length===1,"Popup operations only handle one event");const t=Ap();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(gi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ka.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,PD.get())};t()}}Ka.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD="pendingRedirect",Fc=new Map;class kD extends hA{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Fc.get(this.auth._key());if(!t){try{const s=await UD(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Fc.set(this.auth._key(),t)}return this.bypassAuthState||Fc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UD(r,t){const n=BD(t),s=zD(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function LD(r,t){Fc.set(r._key(),t)}function zD(r){return Qi(r._redirectPersistence)}function BD(r){return Hc(xD,r.config.apiKey,r.name)}async function jD(r,t,n=!1){if(Mn(r.app))return Promise.reject(Br(r));const s=co(r),o=OD(s,t),f=await new kD(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=10*60*1e3;class HD{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!FD(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!fA(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(gi(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=qD&&this.cachedEventUids.clear(),this.cachedEventUids.has(EE(t))}saveEventToCache(t){this.cachedEventUids.add(EE(t)),this.lastProcessedEventTime=Date.now()}}function EE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function fA({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function FD(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fA(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(r,t={}){return $r(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QD=/^https?/;async function YD(r){if(r.config.emulator)return;const{authorizedDomains:t}=await GD(r);for(const n of t)try{if(XD(n))return}catch{}Gn(r,"unauthorized-domain")}function XD(r){const t=Em(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!QD.test(n))return!1;if(KD.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new tu(3e4,6e4);function TE(){const r=_i().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function ZD(r){return new Promise((t,n)=>{var s,o,u;function f(){TE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{TE(),n(gi(r,"network-request-failed"))},timeout:$D.get()})}if(!((o=(s=_i().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=_i().gapi)===null||u===void 0)&&u.load)f();else{const p=H2("iframefcb");return _i()[p]=()=>{gapi.load?f():n(gi(r,"network-request-failed"))},Z0(`${q2()}?onload=${p}`).catch(g=>n(g))}}).catch(t=>{throw Gc=null,t})}let Gc=null;function WD(r){return Gc=Gc||ZD(r),Gc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=new tu(5e3,15e3),tO="__/auth/iframe",eO="emulator/auth/iframe",nO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rO(r){const t=r.config;yt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?_p(t,eO):`https://${r.config.authDomain}/${tO}`,s={apiKey:t.apiKey,appName:r.name,v:Hs},o=iO.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Yl(s).slice(1)}`}async function sO(r){const t=await WD(r),n=_i().gapi;return yt(n,r,"internal-error"),t.open({where:document.body,url:rO(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nO,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=gi(r,"network-request-failed"),p=_i().setTimeout(()=>{u(f)},JD.get());function g(){_i().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oO=500,lO=600,uO="_blank",cO="http://localhost";class AE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hO(r,t,n,s=oO,o=lO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},aO),{width:s.toString(),height:o.toString(),top:u,left:f}),_=Je().toLowerCase();n&&(p=F0(_)?uO:n),q0(_)&&(t=t||cO,g.scrollbars="yes");const T=Object.entries(g).reduce((D,[q,$])=>`${D}${q}=${$},`,"");if(M2(_)&&p!=="_self")return fO(t||"",p),new AE(null);const R=window.open(t||"",p,T);yt(R,r,"popup-blocked");try{R.focus()}catch{}return new AE(R)}function fO(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO="__/auth/handler",mO="emulator/auth/handler",pO=encodeURIComponent("fac");async function SE(r,t,n,s,o,u){yt(r.config.authDomain,r,"auth-domain-config-required"),yt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Hs,eventId:o};if(t instanceof tA){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",gb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,R]of Object.entries({}))f[T]=R}if(t instanceof eu){const T=t.getScopes().filter(R=>R!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const g=await r._getAppCheckToken(),_=g?`#${pO}=${encodeURIComponent(g)}`:"";return`${gO(r)}?${Yl(p).slice(1)}${_}`}function gO({config:r}){return r.emulator?_p(r,mO):`https://${r.authDomain}/${dO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="webStorageSupport";class _O{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aA,this._completeRedirectFn=jD,this._overrideRedirectResult=LD}async _openPopup(t,n,s,o){var u;Wi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await SE(t,n,s,Em(),o);return hO(t,f,Ap())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await SE(t,n,s,Em(),o);return ED(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Wi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await sO(t),s=new HD(t);return n.register("authEvent",o=>(yt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Xd,{type:Xd},o=>{var u;const f=(u=o?.[0])===null||u===void 0?void 0:u[Xd];f!==void 0&&n(!!f),Gn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YD(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return X0()||H0()||vp()}}const yO=_O;var bE="@firebase/auth",wE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){yt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TO(r){Ls(new jr("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;yt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$0(r)},_=new z2(s,o,u,g);return X2(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Ls(new jr("auth-internal",t=>{const n=co(t.getProvider("auth").getImmediate());return(s=>new vO(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hi(bE,wE,EO(r)),hi(bE,wE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=5*60,SO=ME("authIdTokenMaxAge")||AO;let RE=null;const bO=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>SO)return;const o=n?.token;RE!==o&&(RE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function wO(r=Cm()){const t=fh(r,"auth");if(t.isInitialized())return t.getImmediate();const n=Y2(r,{popupRedirectResolver:yO,persistence:[DD,_D,aA]}),s=ME("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=bO(u.toString());fD(n,f,()=>f(n.currentUser)),hD(n,p=>f(p))}}const o=OE("auth");return o&&$2(n,`http://${o}`),n}function RO(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}B2({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=gi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",RO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TO("Browser");const IO={apiKey:"AIzaSyBGb6Yy1UvEtw9rWOcOKSxJMVEXhLNxYbU",authDomain:"prompt-library-74b02.firebaseapp.com",projectId:"prompt-library-74b02",storageBucket:"prompt-library-74b02.firebasestorage.app",messagingSenderId:"942460547467",appId:"1:942460547467:web:8f2ce6ff94269f181dbf8e"},bp=UE(IO),CO=NI(bp),DO=u2(bp),$d=wO(bp);function OO(){const[r,t]=$e.useState([]),[n,s]=$e.useState(!1),[o,u]=$e.useState(""),[f,p]=$e.useState(""),[g,_]=$e.useState(null),[T,R]=$e.useState("Other"),[D,q]=$e.useState("Midjourney"),[$,J]=$e.useState("All"),[Z,pt]=$e.useState("All"),[ot,st]=$e.useState(null),[dt,mt]=$e.useState(null),[bt,V]=$e.useState(""),[b,I]=$e.useState(""),N=DI(CO,"prompts");$e.useEffect(()=>{const S=dD($d,K=>{mt(K)});return()=>S()},[]),$e.useEffect(()=>{(async()=>{const K=HI(N,FI("createdAt","desc")),W=(await XI(K)).docs.map(ct=>({id:ct.id,...ct.data()}));t(W),s(!0)})()},[]);const M=async S=>{const K=l2(DO,`prompt-images/${Date.now()}-${S.name}`);return await a2(K,S),await o2(K)},x=async()=>{if(!f.trim())return;let S=null;g&&(S=await M(g));const K={text:f,category:T,platform:D,imageUrl:S,createdAt:WI()},et=await $I(N,K);t(W=>[{id:et.id,...K,createdAt:new Date},...W]),p(""),_(null),R("Other"),q("Midjourney")},C=S=>{navigator.clipboard.writeText(S),alert("✅ Prompt copied to clipboard!")},Ae=()=>{u(""),J("All"),pt("All")},ee=async()=>{try{await cD($d,bt,b),V(""),I("")}catch(S){alert("❌ Login failed: "+S.message)}},H=async()=>{await mD($d)},nt=r.filter(S=>{const K=S.text.toLowerCase().includes(o.toLowerCase()),et=$==="All"||S.category===$,W=Z==="All"||S.platform===Z;return K&&et&&W}),lt=["Scenery","Emote","Character","Seasonal","Marketing","Wedding","Horror","Food","Nursery","Other"],Pt=["ChatGPT","Midjourney","Bing","Gemini"];return ht.jsxs("div",{className:"min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 relative",children:[ht.jsx("h1",{className:"text-3xl font-bold mb-4",children:"MidJourney Prompt Library"}),ht.jsx("p",{className:"text-gray-300 mb-4",children:"Add your prompt & search instantly (Firebase Connected)"}),ht.jsx("div",{className:"mb-6 w-full max-w-md bg-gray-800 p-4 rounded-lg text-center",children:dt?ht.jsxs(ht.Fragment,{children:[ht.jsxs("p",{className:"mb-2",children:["✅ Logged in as ",ht.jsx("strong",{children:dt.email})]}),ht.jsx("button",{onClick:H,className:"bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white",children:"Logout"})]}):ht.jsxs(ht.Fragment,{children:[ht.jsx("p",{className:"text-gray-400 mb-2",children:"🔒 Only registered users can add prompts"}),ht.jsx("input",{type:"email",placeholder:"Email",className:"px-2 py-2 rounded bg-white text-black w-full mb-2",value:bt,onChange:S=>V(S.target.value)}),ht.jsx("input",{type:"password",placeholder:"Password",className:"px-2 py-2 rounded bg-white text-black w-full mb-2",value:b,onChange:S=>I(S.target.value)}),ht.jsx("button",{onClick:ee,className:"bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white w-full",children:"Login"})]})}),ht.jsxs("div",{className:"flex flex-col md:flex-row gap-4 w-full max-w-5xl mb-4",children:[ht.jsx("input",{type:"text",placeholder:"Search for prompts...",className:"flex-1 p-3 rounded-lg text-black bg-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400",value:o,onChange:S=>u(S.target.value)}),ht.jsxs("select",{className:"p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400",value:$,onChange:S=>J(S.target.value),children:[ht.jsx("option",{value:"All",children:"All Categories"}),lt.map(S=>ht.jsx("option",{value:S,children:S},S))]}),ht.jsxs("select",{className:"p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400",value:Z,onChange:S=>pt(S.target.value),children:[ht.jsx("option",{value:"All",children:"All Platforms"}),Pt.map(S=>ht.jsx("option",{value:S,children:S},S))]}),ht.jsx("button",{className:"p-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition",onClick:Ae,children:"🔄 Reset Filters"})]}),dt?ht.jsxs("div",{className:"w-full max-w-lg bg-gray-800 p-4 rounded-lg mb-6",children:[ht.jsx("textarea",{placeholder:"Enter your prompt here...",className:"w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400",rows:3,value:f,onChange:S=>p(S.target.value)}),ht.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mt-3",children:[ht.jsx("select",{className:"flex-1 p-2 rounded bg-gray-700 text-white",value:T,onChange:S=>R(S.target.value),children:lt.map(S=>ht.jsx("option",{value:S,children:S},S))}),ht.jsx("select",{className:"flex-1 p-2 rounded bg-gray-700 text-white",value:D,onChange:S=>q(S.target.value),children:Pt.map(S=>ht.jsx("option",{value:S,children:S},S))})]}),ht.jsxs("label",{className:"block mt-3",children:[ht.jsx("span",{className:"inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition",children:"📂 Choose an image"}),ht.jsx("input",{type:"file",accept:"image/png, image/jpeg, image/jpg",className:"hidden",onChange:S=>_(S.target.files[0])}),g&&ht.jsx("span",{className:"ml-2 text-sm text-gray-300",children:g.name})]}),ht.jsx("button",{className:"mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded font-semibold transition",onClick:x,children:"➕ Add Prompt"})]}):ht.jsx("p",{className:"text-gray-400 text-center mb-6",children:"🔒 Please log in to add prompts"}),ht.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Prompts"}),n?ht.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl",children:[nt.map(S=>ht.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg shadow-lg relative",children:[S.imageUrl&&ht.jsxs("div",{className:"relative cursor-pointer",children:[ht.jsx("img",{src:S.imageUrl,alt:"Prompt preview",className:"w-full h-40 object-cover rounded mb-2 transition-transform duration-300 hover:opacity-80",onClick:()=>st(S.imageUrl)}),ht.jsx("div",{className:"absolute top-2 right-2 bg-black bg-opacity-60 text-xs px-2 py-1 rounded",children:"🔍 Click to preview"})]}),ht.jsx("p",{className:"text-sm text-gray-200 mb-1",children:S.text}),ht.jsxs("div",{className:"text-xs text-gray-400",children:[ht.jsxs("span",{className:"mr-2",children:["📂 ",S.category]}),ht.jsxs("span",{children:["💻 ",S.platform]})]}),ht.jsx("button",{className:"absolute bottom-2 right-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs px-2 py-1 rounded transition",onClick:()=>C(S.text),children:"📋 Copy"})]},S.id)),nt.length===0&&ht.jsx("p",{className:"col-span-full text-gray-400 text-center",children:"No prompts found."})]}):ht.jsx("p",{className:"text-gray-400",children:"Loading saved prompts..."}),ot&&ht.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50",children:ht.jsxs("div",{className:"relative",children:[ht.jsx("img",{src:ot,alt:"Full Preview",className:"max-h-[90vh] max-w-[90vw] rounded shadow-xl"}),ht.jsx("button",{className:"absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-lg",onClick:()=>st(null),children:"✖"})]})})]})}KS.createRoot(document.getElementById("root")).render(ht.jsx($e.StrictMode,{children:ht.jsx(OO,{})}));
