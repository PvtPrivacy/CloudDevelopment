(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const l of u.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();/**
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
 */const Jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},_S=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=t[n++];e[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=t[n++],l=t[n++],f=t[n++],p=((o&7)<<18|(u&63)<<12|(l&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const u=t[n++],l=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|l&63)}}return e.join("")},Qw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const u=t[o],l=o+1<t.length,f=l?t[o+1]:0,p=o+2<t.length,m=p?t[o+2]:0,v=u>>2,b=(u&3)<<4|f>>4;let _=(f&15)<<2|m>>6,T=m&63;p||(T=64,l||(_=64)),r.push(n[v],n[b],n[_],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_S(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const u=n[t.charAt(o++)],f=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const b=o<t.length?n[t.charAt(o)]:64;if(++o,u==null||f==null||m==null||b==null)throw new SS;const _=u<<2|f>>4;if(r.push(_),m!==64){const T=f<<4&240|m>>2;if(r.push(T),b!==64){const V=m<<6&192|b;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TS=function(t){const e=Jw(t);return Qw.encodeByteArray(e,!0)},kc=function(t){return TS(t).replace(/\./g,"")},Xw=function(t){try{return Qw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ac(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CS(n)||(t[n]=Ac(t[n],e[n]));return t}function CS(t){return t!=="__proto__"}/**
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
 */function kS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AS=()=>kS().__FIREBASE_DEFAULTS__,RS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xw(t[1]);return e&&JSON.parse(e)},Xc=()=>{try{return AS()||RS()||NS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zw=t=>{var e,n;return(n=(e=Xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PS=t=>{const e=Zw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},e1=()=>{var t;return(t=Xc())===null||t===void 0?void 0:t.config},t1=t=>{var e;return(e=Xc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class DS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function OS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=t.iat||0,u=t.sub||t.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},t),f="";return[kc(JSON.stringify(n)),kc(JSON.stringify(l)),f].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function n1(){var t;const e=(t=Xc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MS(){return typeof self=="object"&&self.self===self}function i1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Af(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r1(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rc(){try{return typeof indexedDB=="object"}catch{return!1}}function xS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
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
 */const US="FirebaseError";class It extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=US,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],l=u?FS(u,r):"Error",f=`${this.serviceName}: ${l} (${o}).`;return new It(o,f,r)}}function FS(t,e){return t.replace(VS,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const VS=/\{\$([^}]+)}/g;/**
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
 */function g0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const u=t[o],l=e[o];if(v0(u)&&v0(l)){if(!Nc(u,l))return!1}else if(u!==l)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function v0(t){return t!==null&&typeof t=="object"}/**
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
 */function bs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,u]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function qo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function s1(t,e){const n=new BS(t,e);return n.subscribe.bind(n)}class BS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$S(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=wd),o.error===void 0&&(o.error=wd),o.complete===void 0&&(o.complete=wd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $S(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wd(){}/**
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
 */function W(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ji="[DEFAULT]";/**
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
 */class HS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GS(e))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(e=ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ji){return this.instances.has(e)}getOptions(e=ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[u,l]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);r===f&&l.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),u=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;u.add(e),this.onInitCallbacks.set(o,u);const l=this.instances.get(o);return l&&e(l,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ji){return this.component?this.component.multipleInstances?e:ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qS(t){return t===ji?void 0:t}function GS(t){return t.instantiationMode==="EAGER"}/**
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
 */class zS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Rf=[];var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const o1={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},KS=ue.INFO,WS={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},YS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=WS[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=KS,this._logHandler=YS,this._userLogHandler=null,Rf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}function JS(t){Rf.forEach(e=>{e.setLogLevel(t)})}function QS(t,e){for(const n of Rf){let r=null;e&&e.level&&(r=o1[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(o,u,...l)=>{const f=l.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");u>=(r??o.logLevel)&&t({level:ue[u].toLowerCase(),message:f,args:l,type:o.name})}}}const XS=(t,e)=>e.some(n=>t instanceof n);let y0,w0;function ZS(){return y0||(y0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eT(){return w0||(w0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a1=new WeakMap,zd=new WeakMap,u1=new WeakMap,bd=new WeakMap,Nf=new WeakMap;function tT(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",u),t.removeEventListener("error",l)},u=()=>{n(ai(t.result)),o()},l=()=>{r(t.error),o()};t.addEventListener("success",u),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&a1.set(n,t)}).catch(()=>{}),Nf.set(e,t),e}function nT(t){if(zd.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",u),t.removeEventListener("error",l),t.removeEventListener("abort",l)},u=()=>{n(),o()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",u),t.addEventListener("error",l),t.addEventListener("abort",l)});zd.set(t,e)}let Kd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||u1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ai(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iT(t){Kd=t(Kd)}function rT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Id(this),e,...n);return u1.set(r,e.sort?e.sort():[e]),ai(r)}:eT().includes(t)?function(...e){return t.apply(Id(this),e),ai(a1.get(this))}:function(...e){return ai(t.apply(Id(this),e))}}function sT(t){return typeof t=="function"?rT(t):(t instanceof IDBTransaction&&nT(t),XS(t,ZS())?new Proxy(t,Kd):t)}function ai(t){if(t instanceof IDBRequest)return tT(t);if(bd.has(t))return bd.get(t);const e=sT(t);return e!==t&&(bd.set(t,e),Nf.set(e,t)),e}const Id=t=>Nf.get(t);function oT(t,e,{blocked:n,upgrade:r,blocking:o,terminated:u}={}){const l=indexedDB.open(t,e),f=ai(l);return r&&l.addEventListener("upgradeneeded",p=>{r(ai(l.result),p.oldVersion,p.newVersion,ai(l.transaction),p)}),n&&l.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),f}const aT=["get","getKey","getAll","getAllKeys","count"],uT=["put","add","delete","clear"],Ed=new Map;function b0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=uT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||aT.includes(n)))return;const u=async function(l,...f){const p=this.transaction(l,o?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(f.shift())),(await Promise.all([m[n](...f),o&&p.done]))[0]};return Ed.set(e,u),u}iT(t=>({...t,get:(e,n,r)=>b0(e,n)||t.get(e,n,r),has:(e,n)=>!!b0(e,n)||t.has(e,n)}));/**
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
 */class cT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wd="@firebase/app",I0="0.9.13";/**
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
 */const Ji=new Zc("@firebase/app"),hT="@firebase/app-compat",dT="@firebase/analytics-compat",fT="@firebase/analytics",pT="@firebase/app-check-compat",mT="@firebase/app-check",gT="@firebase/auth",vT="@firebase/auth-compat",yT="@firebase/database",wT="@firebase/database-compat",bT="@firebase/functions",IT="@firebase/functions-compat",ET="@firebase/installations",_T="@firebase/installations-compat",ST="@firebase/messaging",TT="@firebase/messaging-compat",CT="@firebase/performance",kT="@firebase/performance-compat",AT="@firebase/remote-config",RT="@firebase/remote-config-compat",NT="@firebase/storage",PT="@firebase/storage-compat",DT="@firebase/firestore",OT="@firebase/firestore-compat",LT="firebase",MT="9.23.0";/**
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
 */const ci="[DEFAULT]",xT={[Wd]:"fire-core",[hT]:"fire-core-compat",[fT]:"fire-analytics",[dT]:"fire-analytics-compat",[mT]:"fire-app-check",[pT]:"fire-app-check-compat",[gT]:"fire-auth",[vT]:"fire-auth-compat",[yT]:"fire-rtdb",[wT]:"fire-rtdb-compat",[bT]:"fire-fn",[IT]:"fire-fn-compat",[ET]:"fire-iid",[_T]:"fire-iid-compat",[ST]:"fire-fcm",[TT]:"fire-fcm-compat",[CT]:"fire-perf",[kT]:"fire-perf-compat",[AT]:"fire-rc",[RT]:"fire-rc-compat",[NT]:"fire-gcs",[PT]:"fire-gcs-compat",[DT]:"fire-fst",[OT]:"fire-fst-compat","fire-js":"fire-js",[LT]:"fire-js-all"};/**
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
 */const li=new Map,sa=new Map;function Pc(t,e){try{t.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function c1(t,e){t.container.addOrOverwriteComponent(e)}function hi(t){const e=t.name;if(sa.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;sa.set(e,t);for(const n of li.values())Pc(n,t);return!0}function Ta(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function UT(t,e,n=ci){Ta(t,e).clearInstance(n)}function FT(){sa.clear()}/**
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
 */const VT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rn=new nr("app","Firebase",VT);/**
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
 */let jT=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}};/**
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
 */const vi=MT;function el(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ci,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Rn.create("bad-app-name",{appName:String(o)});if(n||(n=e1()),!n)throw Rn.create("no-options");const u=li.get(o);if(u){if(Nc(n,u.options)&&Nc(r,u.config))return u;throw Rn.create("duplicate-app",{appName:o})}const l=new zS(o);for(const p of sa.values())l.addComponent(p);const f=new jT(n,r,l);return li.set(o,f),f}function Pf(t=ci){const e=li.get(t);if(!e&&t===ci&&e1())return el();if(!e)throw Rn.create("no-app",{appName:t});return e}function BT(){return Array.from(li.values())}async function l1(t){const e=t.name;li.has(e)&&(li.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Xt(t,e,n){var r;let o=(r=xT[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const u=o.match(/\s|\//),l=e.match(/\s|\//);if(u||l){const f=[`Unable to register library "${o}" with version "${e}":`];u&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&l&&f.push("and"),l&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(f.join(" "));return}hi(new Dn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}function h1(t,e){if(t!==null&&typeof t!="function")throw Rn.create("invalid-log-argument");QS(t,e)}function d1(t){JS(t)}/**
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
 */const $T="firebase-heartbeat-database",HT=1,oa="firebase-heartbeat-store";let _d=null;function f1(){return _d||(_d=oT($T,HT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oa)}}}).catch(t=>{throw Rn.create("idb-open",{originalErrorMessage:t.message})})),_d}async function qT(t){try{return await(await f1()).transaction(oa).objectStore(oa).get(p1(t))}catch(e){if(e instanceof It)Ji.warn(e.message);else{const n=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ji.warn(n.message)}}}async function E0(t,e){try{const r=(await f1()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,p1(t)),await r.done}catch(n){if(n instanceof It)Ji.warn(n.message);else{const r=Rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ji.warn(r.message)}}}function p1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GT=1024,zT=30*24*60*60*1e3;class KT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const u=new Date(o.date).valueOf();return Date.now()-u<=zT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_0(),{heartbeatsToSend:n,unsentEntries:r}=WT(this._heartbeatsCache.heartbeats),o=kc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function _0(){return new Date().toISOString().substring(0,10)}function WT(t,e=GT){const n=[];let r=t.slice();for(const o of t){const u=n.find(l=>l.agent===o.agent);if(u){if(u.dates.push(o.date),S0(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),S0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rc()?xS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return E0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return E0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function S0(t){return kc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function JT(t){hi(new Dn("platform-logger",e=>new cT(e),"PRIVATE")),hi(new Dn("heartbeat",e=>new KT(e),"PRIVATE")),Xt(Wd,I0,t),Xt(Wd,I0,"esm2017"),Xt("fire-js","")}JT("");const QT=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:It,SDK_VERSION:vi,_DEFAULT_ENTRY_NAME:ci,_addComponent:Pc,_addOrOverwriteComponent:c1,_apps:li,_clearComponents:FT,_components:sa,_getProvider:Ta,_registerComponent:hi,_removeServiceInstance:UT,deleteApp:l1,getApp:Pf,getApps:BT,initializeApp:el,onLog:h1,registerVersion:Xt,setLogLevel:d1},Symbol.toStringTag,{value:"Module"}));var XT="firebase",ZT="9.23.0";/**
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
 */Xt(XT,ZT,"app");function Df(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}const Vo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Wr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function eC(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function m1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tC=eC,nC=m1,g1=new nr("auth","Firebase",m1());/**
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
 */const Dc=new Zc("@firebase/auth");function iC(t,...e){Dc.logLevel<=ue.WARN&&Dc.warn(`Auth (${vi}): ${t}`,...e)}function yc(t,...e){Dc.logLevel<=ue.ERROR&&Dc.error(`Auth (${vi}): ${t}`,...e)}/**
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
 */function et(t,...e){throw Of(t,...e)}function ot(t,...e){return Of(t,...e)}function v1(t,e,n){const r=Object.assign(Object.assign({},nC()),{[e]:n});return new nr("auth","Firebase",r).create(e,{appName:t.name})}function Is(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(t,"argument-error"),v1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Of(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return g1.create(t,...e)}function P(t,e,...n){if(!t)throw Of(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yc(e),new Error(e)}function Zt(t,e){t||fn(e)}/**
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
 */function aa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lf(){return T0()==="http:"||T0()==="https:"}function T0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lf()||i1()||"connection"in navigator)?navigator.onLine:!0}function sC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=LS()||Af()}get(){return rC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mf(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class y1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aC=new Ca(3e4,6e4);function ze(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ye(t,e,n,r,o={}){return w1(t,o,async()=>{let u={},l={};r&&(e==="GET"?l=r:u={body:JSON.stringify(r)});const f=bs(Object.assign({key:t.config.apiKey},l)).slice(1),p=await t._getAdditionalHeaders();return p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode),y1.fetch()(b1(t,t.config.apiHost,n,f),Object.assign({method:e,headers:p,referrerPolicy:"no-referrer"},u))})}async function w1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oC),e);try{const o=new uC(t),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const l=await u.json();if("needConfirmation"in l)throw Go(t,"account-exists-with-different-credential",l);if(u.ok&&!("errorMessage"in l))return l;{const f=u.ok?l.errorMessage:l.error.message,[p,m]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Go(t,"credential-already-in-use",l);if(p==="EMAIL_EXISTS")throw Go(t,"email-already-in-use",l);if(p==="USER_DISABLED")throw Go(t,"user-disabled",l);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw v1(t,v,m);et(t,v)}}catch(o){if(o instanceof It)throw o;et(t,"network-request-failed",{message:String(o)})}}async function Fn(t,e,n,r,o={}){const u=await Ye(t,e,n,r,o);return"mfaPendingCredential"in u&&et(t,"multi-factor-auth-required",{_serverResponse:u}),u}function b1(t,e,n,r){const o=`${e}${n}?${r}`;return t.config.emulator?Mf(t.config,o):`${t.config.apiScheme}://${o}`}class uC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),aC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=ot(t,e,r);return o.customData._tokenResponse=n,o}/**
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
 */async function cC(t,e){return Ye(t,"POST","/v1/accounts:delete",e)}async function lC(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function hC(t,e){return Ye(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dC(t,e=!1){const n=W(t),r=await n.getIdToken(e),o=tl(r);P(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,l=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:Qo(Sd(o.auth_time)),issuedAtTime:Qo(Sd(o.iat)),expirationTime:Qo(Sd(o.exp)),signInProvider:l||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Sd(t){return Number(t)*1e3}function tl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Xw(n);return o?JSON.parse(o):(yc("Failed to decode base64 JWT payload"),null)}catch(o){return yc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function fC(t){const e=tl(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function On(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof It&&pC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class I1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qo(this.lastLoginAt),this.creationTime=Qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ua(t){var e;const n=t.auth,r=await t.getIdToken(),o=await On(t,hC(n,{idToken:r}));P(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];t._notifyReloadListener(u);const l=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?yC(u.providerUserInfo):[],f=vC(t.providerData,l),p=t.isAnonymous,m=!(t.email&&u.passwordHash)&&!(f!=null&&f.length),v=p?m:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new I1(u.createdAt,u.lastLoginAt),isAnonymous:v};Object.assign(t,b)}async function gC(t){const e=W(t);await ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vC(t,e){return[...t.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function yC(t){return t.map(e=>{var{providerId:n}=e,r=Df(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wC(t,e){const n=await w1(t,{},async()=>{const r=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=t.config,l=b1(t,o,"/v1/token",`key=${u}`),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",y1.fetch()(l,{method:"POST",headers:f,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ca{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:u}=await wC(e,n);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:u}=n,l=new ca;return r&&(P(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(P(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),u&&(P(typeof u=="number","internal-error",{appName:e}),l.expirationTime=u),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ca,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function ri(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gi{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,u=Df(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new I1(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await On(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dC(this,e)}reload(){return gC(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await On(this,cC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,u,l,f,p,m,v;const b=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(o=n.email)!==null&&o!==void 0?o:void 0,T=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,V=(l=n.photoURL)!==null&&l!==void 0?l:void 0,y=(f=n.tenantId)!==null&&f!==void 0?f:void 0,I=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,S=(m=n.createdAt)!==null&&m!==void 0?m:void 0,D=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:$,emailVerified:Z,isAnonymous:oe,providerData:ve,stsTokenManager:De}=n;P($&&De,e,"internal-error");const qt=ca.fromJSON(this.name,De);P(typeof $=="string",e,"internal-error"),ri(b,e.name),ri(_,e.name),P(typeof Z=="boolean",e,"internal-error"),P(typeof oe=="boolean",e,"internal-error"),ri(T,e.name),ri(V,e.name),ri(y,e.name),ri(I,e.name),ri(S,e.name),ri(D,e.name);const Ut=new Gi({uid:$,auth:e,email:_,emailVerified:Z,displayName:b,isAnonymous:oe,photoURL:V,phoneNumber:T,tenantId:y,stsTokenManager:qt,createdAt:S,lastLoginAt:D});return ve&&Array.isArray(ve)&&(Ut.providerData=ve.map(Ds=>Object.assign({},Ds))),I&&(Ut._redirectEventId=I),Ut}static async _fromIdTokenResponse(e,n,r=!1){const o=new ca;o.updateFromServerResponse(n);const u=new Gi({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ua(u),u}}/**
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
 */const C0=new Map;function Lt(t){Zt(t instanceof Function,"Expected a class definition");let e=C0.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,C0.set(t,e),e)}/**
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
 */class E1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}E1.type="NONE";const cs=E1;/**
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
 */function zi(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=zi(this.userKey,o.apiKey,u),this.fullPersistenceKey=zi("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(Lt(cs),e,r);const o=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let u=o[0]||Lt(cs);const l=zi(r,e.config.apiKey,e.name);let f=null;for(const m of n)try{const v=await m._get(l);if(v){const b=Gi._fromJSON(e,v);m!==u&&(f=b),u=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new es(u,e,r):(u=p[0],f&&await u._set(l,f.toJSON()),await Promise.all(n.map(async m=>{if(m!==u)try{await m._remove(l)}catch{}})),new es(u,e,r))}}/**
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
 */function k0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C1(e))return"Blackberry";if(k1(e))return"Webos";if(xf(e))return"Safari";if((e.includes("chrome/")||S1(e))&&!e.includes("edge/"))return"Chrome";if(ka(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _1(t=Ge()){return/firefox\//i.test(t)}function xf(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function S1(t=Ge()){return/crios\//i.test(t)}function T1(t=Ge()){return/iemobile/i.test(t)}function ka(t=Ge()){return/android/i.test(t)}function C1(t=Ge()){return/blackberry/i.test(t)}function k1(t=Ge()){return/webos/i.test(t)}function Es(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bC(t=Ge()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function IC(t=Ge()){var e;return Es(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EC(){return r1()&&document.documentMode===10}function A1(t=Ge()){return Es(t)||ka(t)||k1(t)||C1(t)||/windows phone/i.test(t)||T1(t)}function _C(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function R1(t,e=[]){let n;switch(t){case"Browser":n=k0(Ge());break;case"Worker":n=`${k0(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${r}`}/**
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
 */async function SC(t){return(await Ye(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function N1(t,e){return Ye(t,"GET","/v2/recaptchaConfig",ze(t,e))}/**
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
 */function A0(t){return t!==void 0&&t.getResponse!==void 0}function R0(t){return t!==void 0&&t.enterprise!==void 0}class P1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function TC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Uf(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=o=>{const u=ot("internal-error");u.customData=o,n(u)},r.type="text/javascript",r.charset="UTF-8",TC().appendChild(r)})}function D1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const CC="https://www.google.com/recaptcha/enterprise.js?render=",kC="recaptcha-enterprise",AC="NO_RECAPTCHA";class O1{constructor(e){this.type=kC,this.auth=xe(e)}async verify(e="verify",n=!1){async function r(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(l,f)=>{N1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const m=new P1(p);return u.tenantId==null?u._agentRecaptchaConfig=m:u._tenantRecaptchaConfigs[u.tenantId]=m,l(m.siteKey)}}).catch(p=>{f(p)})})}function o(u,l,f){const p=window.grecaptcha;R0(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(m=>{l(m)}).catch(()=>{l(AC)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((u,l)=>{r(this.auth).then(f=>{if(!n&&R0(window.grecaptcha))o(f,u,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}Uf(CC+f).then(()=>{o(f,u,l)}).catch(p=>{l(p)})}}).catch(f=>{l(f)})})}}async function di(t,e,n,r=!1){const o=new O1(t);let u;try{u=await o.verify(n)}catch{u=await o.verify(n,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:u}):Object.assign(l,{captchaResponse:u}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}/**
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
 */class RC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=u=>new Promise((l,f)=>{try{const p=e(u);l(p)}catch(p){f(p)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class NC{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N0(this),this.idTokenSubscription=new N0(this),this.beforeStateQueue=new RC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let o=r,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!l||l===f)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(l){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ua(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?W(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}async initializeRecaptchaConfig(){const e=await N1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new P1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new O1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n),l=this._isInitialized?Promise.resolve():this._initializationPromise;return P(l,this,"internal-error"),l.then(()=>u(this.currentUser)),typeof n=="function"?e.addObserver(n,r,o):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xe(t){return W(t)}class N0{constructor(e){this.auth=e,this.observer=null,this.addObserver=s1(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function PC(t,e){const n=Ta(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Nc(u,e??{}))return o;et(o,"already-initialized")}return n.initialize({options:e})}function DC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function L1(t,e,n){const r=xe(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(n!=null&&n.disableWarnings),u=M1(e),{host:l,port:f}=OC(e),p=f===null?"":`:${f}`;r.config.emulator={url:`${u}//${l}${p}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||LC()}function M1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OC(t){const e=M1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:P0(r.substr(u.length+1))}}else{const[u,l]=r.split(":");return{host:u,port:P0(l)}}}function P0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _s{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function x1(t,e){return Ye(t,"POST","/v1/accounts:resetPassword",ze(t,e))}async function U1(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function MC(t,e){return Ye(t,"POST","/v1/accounts:update",ze(t,e))}/**
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
 */async function Td(t,e){return Fn(t,"POST","/v1/accounts:signInWithPassword",ze(t,e))}async function nl(t,e){return Ye(t,"POST","/v1/accounts:sendOobCode",ze(t,e))}async function xC(t,e){return nl(t,e)}async function Cd(t,e){return nl(t,e)}async function kd(t,e){return nl(t,e)}async function UC(t,e){return nl(t,e)}/**
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
 */async function FC(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",ze(t,e))}async function VC(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",ze(t,e))}/**
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
 */class la extends _s{constructor(e,n,r,o=null){super("password",r),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new la(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new la(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const o=await di(e,r,"signInWithPassword");return Td(e,o)}else return Td(e,r).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const u=await di(e,r,"signInWithPassword");return Td(e,u)}else return Promise.reject(o)});case"emailLink":return FC(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return U1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VC(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Nn(t,e){return Fn(t,"POST","/v1/accounts:signInWithIdp",ze(t,e))}/**
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
 */const jC="http://localhost";class vn extends _s{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,u=Df(n,["providerId","signInMethod"]);if(!r||!o)return null;const l=new vn(r,o);return l.idToken=u.idToken||void 0,l.accessToken=u.accessToken||void 0,l.secret=u.secret,l.nonce=u.nonce,l.pendingToken=u.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}buildRequest(){const e={requestUri:jC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bs(n)}return e}}/**
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
 */async function BC(t,e){return Ye(t,"POST","/v1/accounts:sendVerificationCode",ze(t,e))}async function $C(t,e){return Fn(t,"POST","/v1/accounts:signInWithPhoneNumber",ze(t,e))}async function HC(t,e){const n=await Fn(t,"POST","/v1/accounts:signInWithPhoneNumber",ze(t,e));if(n.temporaryProof)throw Go(t,"account-exists-with-different-credential",n);return n}const qC={USER_NOT_FOUND:"user-not-found"};async function GC(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Fn(t,"POST","/v1/accounts:signInWithPhoneNumber",ze(t,n),qC)}/**
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
 */class Ki extends _s{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ki({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ki({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return $C(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return HC(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return GC(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:o}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:o,temporaryProof:u}=e;return!r&&!n&&!o&&!u?null:new Ki({verificationId:n,verificationCode:r,phoneNumber:o,temporaryProof:u})}}/**
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
 */function zC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KC(t){const e=Xr(qo(t)).link,n=e?Xr(qo(e)).deep_link_id:null,r=Xr(qo(t)).deep_link_id;return(r?Xr(qo(r)).link:null)||r||n||e||t}class il{constructor(e){var n,r,o,u,l,f;const p=Xr(qo(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,v=(r=p.oobCode)!==null&&r!==void 0?r:null,b=zC((o=p.mode)!==null&&o!==void 0?o:null);P(m&&v&&b,"argument-error"),this.apiKey=m,this.operation=b,this.code=v,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(l=p.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=KC(e);try{return new il(n)}catch{return null}}}/**
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
 */class Vn{constructor(){this.providerId=Vn.PROVIDER_ID}static credential(e,n){return la._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=il.parseLink(n);return P(r,"argument-error"),la._fromEmailAndCode(e,r.code,r.tenantId)}}Vn.PROVIDER_ID="password";Vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ss extends jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ts extends Ss{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),vn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),vn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ts.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ts.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:u,nonce:l,providerId:f}=e;if(!r&&!o&&!n&&!u||!f)return null;try{return new ts(f)._credential({idToken:n,accessToken:r,nonce:l,pendingToken:u})}catch{return null}}}/**
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
 */class un extends Ss{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class cn extends Ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
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
 */class ln extends Ss{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
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
 */const WC="http://localhost";class ls extends _s{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,pendingToken:u}=n;return!r||!o||!u||r!==o?null:new ls(r,u)}static _create(e,n){return new ls(e,n)}buildRequest(){return{requestUri:WC,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const YC="saml.";class Oc extends jn{constructor(e){P(e.startsWith(YC),"argument-error"),super(e)}static credentialFromResult(e){return Oc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Oc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ls.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ls._create(r,n)}catch{return null}}}/**
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
 */class hn extends Ss{constructor(){super("twitter.com")}static credential(e,n){return vn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */async function wc(t,e){return Fn(t,"POST","/v1/accounts:signUp",ze(t,e))}/**
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
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const u=await Gi._fromIdTokenResponse(e,r,o),l=D0(r);return new Ht({user:u,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=D0(r);return new Ht({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function D0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function JC(t){var e;const n=xe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ht({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await wc(n,{returnSecureToken:!0}),o=await Ht._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(o.user),o}/**
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
 */class Lc extends It{constructor(e,n,r,o){var u;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Lc.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new Lc(e,n,r,o)}}function F1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Lc._fromErrorAndOperation(t,u,e,r):u})}/**
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
 */function V1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function QC(t,e){const n=W(t);await rl(!0,n,e);const{providerUserInfo:r}=await lC(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),o=V1(r||[]);return n.providerData=n.providerData.filter(u=>o.has(u.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ff(t,e,n=!1){const r=await On(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ht._forOperation(t,"link",r)}async function rl(t,e,n){await ua(e);const r=V1(e.providerData),o=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,o)}/**
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
 */async function j1(t,e,n=!1){const{auth:r}=t,o="reauthenticate";try{const u=await On(t,F1(r,o,e,t),n);P(u.idToken,r,"internal-error");const l=tl(u.idToken);P(l,r,"internal-error");const{sub:f}=l;return P(t.uid===f,r,"user-mismatch"),Ht._forOperation(t,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&et(r,"user-mismatch"),u}}/**
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
 */async function B1(t,e,n=!1){const r="signIn",o=await F1(t,r,e),u=await Ht._fromIdTokenResponse(t,r,o);return n||await t._updateCurrentUser(u.user),u}async function sl(t,e){return B1(xe(t),e)}async function $1(t,e){const n=W(t);return await rl(!1,n,e.providerId),Ff(n,e)}async function H1(t,e){return j1(W(t),e)}/**
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
 */async function XC(t,e){return Fn(t,"POST","/v1/accounts:signInWithCustomToken",ze(t,e))}/**
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
 */async function ZC(t,e){const n=xe(t),r=await XC(n,{token:e,returnSecureToken:!0}),o=await Ht._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(o.user),o}/**
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
 */class Aa{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Vf._fromServerResponse(e,n):"totpInfo"in n?jf._fromServerResponse(e,n):et(e,"internal-error")}}class Vf extends Aa{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Vf(n)}}class jf extends Aa{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new jf(n)}}/**
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
 */function ns(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ek(t,e,n){var r;const o=xe(t),u={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=o._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await di(o,u,"getOobCode",!0);n&&ns(o,l,n),await Cd(o,l)}else n&&ns(o,u,n),await Cd(o,u).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const f=await di(o,u,"getOobCode",!0);n&&ns(o,f,n),await Cd(o,f)}else return Promise.reject(l)})}async function tk(t,e,n){await x1(W(t),{oobCode:e,newPassword:n})}async function nk(t,e){await MC(W(t),{oobCode:e})}async function q1(t,e){const n=W(t),r=await x1(n,{oobCode:e}),o=r.requestType;switch(P(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let u=null;return r.mfaInfo&&(u=Aa._fromServerResponse(xe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:u},operation:o}}async function ik(t,e){const{data:n}=await q1(W(t),e);return n.email}async function rk(t,e,n){var r;const o=xe(t),u={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let l;if(!((r=o._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const m=await di(o,u,"signUpPassword");l=wc(o,m)}else l=wc(o,u).catch(async m=>{if(m.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const v=await di(o,u,"signUpPassword");return wc(o,v)}else return Promise.reject(m)});const f=await l.catch(m=>Promise.reject(m)),p=await Ht._fromIdTokenResponse(o,"signIn",f);return await o._updateCurrentUser(p.user),p}function sk(t,e,n){return sl(W(t),Vn.credential(e,n))}/**
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
 */async function ok(t,e,n){var r;const o=xe(t),u={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(f,p){P(p.handleCodeInApp,o,"argument-error"),p&&ns(o,f,p)}if(!((r=o._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const f=await di(o,u,"getOobCode",!0);l(f,n),await kd(o,f)}else l(u,n),await kd(o,u).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const p=await di(o,u,"getOobCode",!0);l(p,n),await kd(o,p)}else return Promise.reject(f)})}function ak(t,e){const n=il.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function uk(t,e,n){const r=W(t),o=Vn.credentialWithLink(e,n||aa());return P(o._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),sl(r,o)}/**
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
 */async function ck(t,e){return Ye(t,"POST","/v1/accounts:createAuthUri",ze(t,e))}/**
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
 */async function lk(t,e){const n=Lf()?aa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:o}=await ck(W(t),r);return o||[]}async function hk(t,e){const n=W(t),o={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ns(n.auth,o,e);const{email:u}=await xC(n.auth,o);u!==t.email&&await t.reload()}async function dk(t,e,n){const r=W(t),u={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&ns(r.auth,u,n);const{email:l}=await UC(r.auth,u);l!==t.email&&await t.reload()}/**
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
 */async function fk(t,e){return Ye(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=W(t),u={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},l=await On(r,fk(r.auth,u));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const f=r.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=r.displayName,f.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function mk(t,e){return G1(W(t),e,null)}function gk(t,e){return G1(W(t),null,e)}async function G1(t,e,n){const{auth:r}=t,u={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(u.email=e),n&&(u.password=n);const l=await On(t,U1(r,u));await t._updateTokensIfNecessary(l,!0)}/**
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
 */function vk(t){var e,n;if(!t)return null;const{providerId:r}=t,o=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},u=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const l=(n=(e=tl(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(l){const f=l!=="anonymous"&&l!=="custom"?l:null;return new is(u,f)}}if(!r)return null;switch(r){case"facebook.com":return new yk(u,o);case"github.com":return new wk(u,o);case"google.com":return new bk(u,o);case"twitter.com":return new Ik(u,o,t.screenName||null);case"custom":case"anonymous":return new is(u,null);default:return new is(u,r,o)}}class is{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class z1 extends is{constructor(e,n,r,o){super(e,n,r),this.username=o}}class yk extends is{constructor(e,n){super(e,"facebook.com",n)}}class wk extends z1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class bk extends is{constructor(e,n){super(e,"google.com",n)}}class Ik extends z1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function Ek(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:vk(n)}function _k(t,e,n,r){return W(t).onIdTokenChanged(e,n,r)}function Sk(t,e,n){return W(t).beforeAuthStateChanged(e,n)}function Tk(t,e,n,r){return W(t).onAuthStateChanged(e,n,r)}function Ck(t){return W(t).signOut()}class Bi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Bi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Bi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Bi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Bi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Bf{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=xe(e),o=n.customData._serverResponse,u=(o.mfaInfo||[]).map(f=>Aa._fromServerResponse(r,f));P(o.mfaPendingCredential,r,"internal-error");const l=Bi._fromMfaPendingCredential(o.mfaPendingCredential);return new Bf(l,u,async f=>{const p=await f._process(r,l);delete o.mfaInfo,delete o.mfaPendingCredential;const m=Object.assign(Object.assign({},o),{idToken:p.idToken,refreshToken:p.refreshToken});switch(n.operationType){case"signIn":const v=await Ht._fromIdTokenResponse(r,n.operationType,m);return await r._updateCurrentUser(v.user),v;case"reauthenticate":return P(n.user,r,"internal-error"),Ht._forOperation(n.user,n.operationType,m);default:et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function kk(t,e){var n;const r=W(t),o=e;return P(e.customData.operationType,r,"argument-error"),P((n=o.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Bf._fromError(r,o)}/**
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
 */function Ak(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:start",ze(t,e))}function Rk(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:finalize",ze(t,e))}function Nk(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ze(t,e))}class $f{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Aa._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new $f(e)}async getSession(){return Bi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,o=await this.getSession(),u=await On(this.user,r._process(this.user.auth,o,n));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const o=await On(this.user,Nk(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==n),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const Ad=new WeakMap;function Pk(t){const e=W(t);return Ad.has(e)||Ad.set(e,$f._fromUser(e)),Ad.get(e)}const Mc="__sak";/**
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
 */class K1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mc,"1"),this.storage.removeItem(Mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dk(){const t=Ge();return xf(t)||Es(t)}const Ok=1e3,Lk=10;class W1 extends K1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dk()&&_C(),this.fallbackToPolling=A1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,f,p)=>{this.notifyListeners(l,p)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const o=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},u=this.storage.getItem(r);EC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Lk):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W1.type="LOCAL";const ol=W1;/**
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
 */class Y1 extends K1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Y1.type="SESSION";const fi=Y1;/**
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
 */function Mk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class al{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new al(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:u}=n.data,l=this.handlersMap[o];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const f=Array.from(l).map(async m=>m(n.origin,u)),p=await Mk(f);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}al.receivers=[];/**
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
 */function Ra(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,l;return new Promise((f,p)=>{const m=Ra("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(b){const _=b;if(_.data.eventId===m)switch(_.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(_.data.response);break;default:clearTimeout(v),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function $e(){return window}function Uk(t){$e().location.href=t}/**
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
 */function Hf(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function Fk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jk(){return Hf()?self:null}/**
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
 */const J1="firebaseLocalStorageDb",Bk=1,xc="firebaseLocalStorage",Q1="fbase_key";class Na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ul(t,e){return t.transaction([xc],e?"readwrite":"readonly").objectStore(xc)}function $k(){const t=indexedDB.deleteDatabase(J1);return new Na(t).toPromise()}function Yd(){const t=indexedDB.open(J1,Bk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xc,{keyPath:Q1})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xc)?e(r):(r.close(),await $k(),e(await Yd()))})})}async function O0(t,e,n){const r=ul(t,!0).put({[Q1]:e,value:n});return new Na(r).toPromise()}async function Hk(t,e){const n=ul(t,!1).get(e),r=await new Na(n).toPromise();return r===void 0?null:r.value}function L0(t,e){const n=ul(t,!0).delete(e);return new Na(n).toPromise()}const qk=800,Gk=3;class X1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=al._getInstance(jk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fk(),!this.activeServiceWorker)return;this.sender=new xk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yd();return await O0(e,Mc,"1"),await L0(e,Mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>O0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>L0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ul(o,!1).getAll();return new Na(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:o,value:u}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}X1.type="LOCAL";const hs=X1;/**
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
 */function zk(t,e){return Ye(t,"POST","/v2/accounts/mfaSignIn:start",ze(t,e))}function Kk(t,e){return Ye(t,"POST","/v2/accounts/mfaSignIn:finalize",ze(t,e))}/**
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
 */const Wk=500,Yk=6e4,uc=1e12;class Jk{constructor(e){this.auth=e,this.counter=uc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Qk(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||uc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||uc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||uc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Qk{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;P(o,"argument-error",{appName:n}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Xk(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Yk)},Wk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Xk(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Rd=D1("rcb"),Zk=new Ca(3e4,6e4),eA="https://www.google.com/recaptcha/api.js?";class tA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=$e().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(nA(n),e,"argument-error"),this.shouldResolveImmediately(n)&&A0($e().grecaptcha)?Promise.resolve($e().grecaptcha):new Promise((r,o)=>{const u=$e().setTimeout(()=>{o(ot(e,"network-request-failed"))},Zk.get());$e()[Rd]=()=>{$e().clearTimeout(u),delete $e()[Rd];const f=$e().grecaptcha;if(!f||!A0(f)){o(ot(e,"internal-error"));return}const p=f.render;f.render=(m,v)=>{const b=p(m,v);return this.counter++,b},this.hostLanguage=n,r(f)};const l=`${eA}?${bs({onload:Rd,render:"explicit",hl:n})}`;Uf(l).catch(()=>{clearTimeout(u),o(ot(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=$e().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function nA(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class iA{async load(e){return new Jk(e)}clearedOneInstance(){}}/**
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
 */const Z1="recaptcha",rA={theme:"light",type:"image"};let sA=class{constructor(e,n=Object.assign({},rA),r){this.parameters=n,this.type=Z1,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=xe(r),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof e=="string"?document.getElementById(e):e;P(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new iA:new tA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(o=>{const u=l=>{l&&(this.tokenChangeListeners.delete(u),o(l))};this.tokenChangeListeners.add(u),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=$e()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(Lf()&&!Hf(),this.auth,"internal-error"),await oA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await SC(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function oA(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class qf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ki._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function aA(t,e,n){const r=xe(t),o=await cl(r,e,W(n));return new qf(o,u=>sl(r,u))}async function uA(t,e,n){const r=W(t);await rl(!1,r,"phone");const o=await cl(r.auth,e,W(n));return new qf(o,u=>$1(r,u))}async function cA(t,e,n){const r=W(t),o=await cl(r.auth,e,W(n));return new qf(o,u=>H1(r,u))}async function cl(t,e,n){var r;const o=await n.verify();try{P(typeof o=="string",t,"argument-error"),P(n.type===Z1,t,"argument-error");let u;if(typeof e=="string"?u={phoneNumber:e}:u=e,"session"in u){const l=u.session;if("phoneNumber"in u)return P(l.type==="enroll",t,"internal-error"),(await Ak(t,{idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:o}})).phoneSessionInfo.sessionInfo;{P(l.type==="signin",t,"internal-error");const f=((r=u.multiFactorHint)===null||r===void 0?void 0:r.uid)||u.multiFactorUid;return P(f,t,"missing-multi-factor-info"),(await zk(t,{mfaPendingCredential:l.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:l}=await BC(t,{phoneNumber:u.phoneNumber,recaptchaToken:o});return l}}finally{n._reset()}}async function lA(t,e){await Ff(W(t),e)}/**
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
 */let Qi=class bc{constructor(e){this.providerId=bc.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,n){return cl(this.auth,e,W(n))}static credential(e,n){return Ki._fromVerification(e,n)}static credentialFromResult(e){const n=e;return bc.credentialFromTaggedObject(n)}static credentialFromError(e){return bc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ki._fromTokenResponse(n,r):null}};Qi.PROVIDER_ID="phone";Qi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ir(t,e){return e?Lt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gf extends _s{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hA(t){return B1(t.auth,new Gf(t),t.bypassAuthState)}function dA(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),j1(n,new Gf(t),t.bypassAuthState)}async function fA(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Ff(n,new Gf(t),t.bypassAuthState)}/**
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
 */class eb{constructor(e,n,r,o,u=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:u,error:l,type:f}=e;if(l){this.reject(l);return}const p={auth:this.auth,requestUri:n,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hA;case"linkViaPopup":case"linkViaRedirect":return fA;case"reauthViaPopup":case"reauthViaRedirect":return dA;default:et(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pA=new Ca(2e3,1e4);async function mA(t,e,n){const r=xe(t);Is(t,e,jn);const o=ir(r,n);return new Cn(r,"signInViaPopup",e,o).executeNotNull()}async function gA(t,e,n){const r=W(t);Is(r.auth,e,jn);const o=ir(r.auth,n);return new Cn(r.auth,"reauthViaPopup",e,o,r).executeNotNull()}async function vA(t,e,n){const r=W(t);Is(r.auth,e,jn);const o=ir(r.auth,n);return new Cn(r.auth,"linkViaPopup",e,o,r).executeNotNull()}class Cn extends eb{constructor(e,n,r,o,u){super(e,n,o,u),this.provider=r,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Ra();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pA.get())};e()}}Cn.currentPopupAction=null;/**
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
 */const yA="pendingRedirect",Xo=new Map;class wA extends eb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xo.get(this.auth._key());if(!e){try{const r=await bA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xo.set(this.auth._key(),e)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bA(t,e){const n=nb(e),r=tb(t);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}async function zf(t,e){return tb(t)._set(nb(e),"true")}function IA(){Xo.clear()}function Kf(t,e){Xo.set(t._key(),e)}function tb(t){return Lt(t._redirectPersistence)}function nb(t){return zi(yA,t.config.apiKey,t.name)}/**
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
 */function EA(t,e,n){return _A(t,e,n)}async function _A(t,e,n){const r=xe(t);Is(t,e,jn),await r._initializationPromise;const o=ir(r,n);return await zf(o,r),o._openRedirect(r,e,"signInViaRedirect")}function SA(t,e,n){return TA(t,e,n)}async function TA(t,e,n){const r=W(t);Is(r.auth,e,jn),await r.auth._initializationPromise;const o=ir(r.auth,n);await zf(o,r.auth);const u=await ib(r);return o._openRedirect(r.auth,e,"reauthViaRedirect",u)}function CA(t,e,n){return kA(t,e,n)}async function kA(t,e,n){const r=W(t);Is(r.auth,e,jn),await r.auth._initializationPromise;const o=ir(r.auth,n);await rl(!1,r,e.providerId),await zf(o,r.auth);const u=await ib(r);return o._openRedirect(r.auth,e,"linkViaRedirect",u)}async function AA(t,e){return await xe(t)._initializationPromise,ll(t,e,!1)}async function ll(t,e,n=!1){const r=xe(t),o=ir(r,e),l=await new wA(r,o,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}async function ib(t){const e=Ra(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const RA=10*60*1e3;class rb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sb(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RA&&this.cachedEventUids.clear(),this.cachedEventUids.has(M0(e))}saveEventToCache(e){this.cachedEventUids.add(M0(e)),this.lastProcessedEventTime=Date.now()}}function M0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sb(t);default:return!1}}/**
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
 */async function ob(t,e={}){return Ye(t,"GET","/v1/projects",e)}/**
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
 */const PA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DA=/^https?/;async function OA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ob(t);for(const n of e)try{if(LA(n))return}catch{}et(t,"unauthorized-domain")}function LA(t){const e=aa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!DA.test(n))return!1;if(PA.test(t))return r===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const MA=new Ca(3e4,6e4);function x0(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xA(t){return new Promise((e,n)=>{var r,o,u;function l(){x0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{x0(),n(ot(t,"network-request-failed"))},timeout:MA.get()})}if(!((o=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=$e().gapi)===null||u===void 0)&&u.load)l();else{const f=D1("iframefcb");return $e()[f]=()=>{gapi.load?l():n(ot(t,"network-request-failed"))},Uf(`https://apis.google.com/js/api.js?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw Ic=null,e})}let Ic=null;function UA(t){return Ic=Ic||xA(t),Ic}/**
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
 */const FA=new Ca(5e3,15e3),VA="__/auth/iframe",jA="emulator/auth/iframe",BA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$A=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HA(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,jA):`https://${t.config.authDomain}/${VA}`,r={apiKey:e.apiKey,appName:t.name,v:vi},o=$A.get(t.config.apiHost);o&&(r.eid=o);const u=t._getFrameworks();return u.length&&(r.fw=u.join(",")),`${n}?${bs(r).slice(1)}`}async function qA(t){const e=await UA(t),n=$e().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:HA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BA,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const l=ot(t,"network-request-failed"),f=$e().setTimeout(()=>{u(l)},FA.get());function p(){$e().clearTimeout(f),o(r)}r.ping(p).then(p,()=>{u(l)})}))}/**
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
 */const GA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zA=500,KA=600,WA="_blank",YA="http://localhost";class U0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JA(t,e,n,r=zA,o=KA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const p=Object.assign(Object.assign({},GA),{width:r.toString(),height:o.toString(),top:u,left:l}),m=Ge().toLowerCase();n&&(f=S1(m)?WA:n),_1(m)&&(e=e||YA,p.scrollbars="yes");const v=Object.entries(p).reduce((_,[T,V])=>`${_}${T}=${V},`,"");if(IC(m)&&f!=="_self")return QA(e||"",f),new U0(null);const b=window.open(e||"",f,v);P(b,t,"popup-blocked");try{b.focus()}catch{}return new U0(b)}function QA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const XA="__/auth/handler",ZA="emulator/auth/handler",eR=encodeURIComponent("fac");async function Jd(t,e,n,r,o,u){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vi,eventId:o};if(e instanceof jn){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",jS(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,b]of Object.entries(u||{}))l[v]=b}if(e instanceof Ss){const v=e.getScopes().filter(b=>b!=="");v.length>0&&(l.scopes=v.join(","))}t.tenantId&&(l.tid=t.tenantId);const f=l;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await t._getAppCheckToken(),m=p?`#${eR}=${encodeURIComponent(p)}`:"";return`${tR(t)}?${bs(f).slice(1)}${m}`}function tR({config:t}){return t.emulator?Mf(t,ZA):`https://${t.authDomain}/${XA}`}/**
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
 */const Nd="webStorageSupport";class nR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fi,this._completeRedirectFn=ll,this._overrideRedirectResult=Kf}async _openPopup(e,n,r,o){var u;Zt((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const l=await Jd(e,n,r,aa(),o);return JA(e,l,Ra())}async _openRedirect(e,n,r,o){await this._originValidation(e);const u=await Jd(e,n,r,aa(),o);return Uk(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Zt(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qA(e),r=new rb(e);return n.register("authEvent",o=>(P(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nd,{type:Nd},o=>{var u;const l=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Nd];l!==void 0&&n(!!l),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return A1()||xf()||Es()}}const ab=nR;class iR{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return fn("unexpected MultiFactorSessionType")}}}class Wf extends iR{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wf(e)}_finalizeEnroll(e,n,r){return Rk(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Kk(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ub{constructor(){}static assertion(e){return Wf._fromCredential(e)}}ub.FACTOR_ID="phone";var F0="@firebase/auth",V0="0.23.2";/**
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
 */class rR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oR(t){hi(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:l,authDomain:f}=r.options;P(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:l,authDomain:f,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R1(t)},m=new NC(r,o,u,p);return DC(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hi(new Dn("auth-internal",e=>{const n=xe(e.getProvider("auth").getImmediate());return(r=>new rR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(F0,V0,sR(t)),Xt(F0,V0,"esm2017")}/**
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
 */const aR=5*60,uR=t1("authIdTokenMaxAge")||aR;let j0=null;const cR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uR)return;const o=n==null?void 0:n.token;j0!==o&&(j0=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function lR(t=Pf()){const e=Ta(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PC(t,{popupRedirectResolver:ab,persistence:[hs,ol,fi]}),r=t1("authTokenSyncURL");if(r){const u=cR(r);Sk(n,u,()=>u(n.currentUser)),_k(n,l=>u(l))}const o=Zw("auth");return o&&L1(n,`http://${o}`),n}oR("Browser");var hR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Yf=Yf||{},z=hR||self;function hl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Pa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dR(t){return Object.prototype.hasOwnProperty.call(t,Pd)&&t[Pd]||(t[Pd]=++fR)}var Pd="closure_uid_"+(1e9*Math.random()>>>0),fR=0;function pR(t,e,n){return t.call.apply(t.bind,arguments)}function mR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,r),t.apply(e,o)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=pR:dt=mR,dt.apply(null,arguments)}function cc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,o,u){for(var l=Array(arguments.length-2),f=2;f<arguments.length;f++)l[f-2]=arguments[f];return e.prototype[o].apply(r,l)}}function yi(){this.s=this.s,this.o=this.o}var gR=0;yi.prototype.s=!1;yi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),gR!=0)&&dR(this)};yi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Jf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function B0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hl(r)){const o=t.length||0,u=r.length||0;t.length=o+u;for(let l=0;l<u;l++)t[o+l]=r[l]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var vR=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",()=>{},e),z.removeEventListener("test",()=>{},e)}catch{}return t}();function ha(t){return/^[\s\xa0]*$/.test(t)}function dl(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function dn(t){return dl().indexOf(t)!=-1}function Qf(t){return Qf[" "](t),t}Qf[" "]=function(){};function yR(t,e){var n=lN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var wR=dn("Opera"),ds=dn("Trident")||dn("MSIE"),lb=dn("Edge"),Qd=lb||ds,hb=dn("Gecko")&&!(dl().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge"))&&!(dn("Trident")||dn("MSIE"))&&!dn("Edge"),bR=dl().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge");function db(){var t=z.document;return t?t.documentMode:void 0}var Xd;e:{var Dd="",Od=function(){var t=dl();if(hb)return/rv:([^\);]+)(\)|;)/.exec(t);if(lb)return/Edge\/([\d\.]+)/.exec(t);if(ds)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bR)return/WebKit\/(\S+)/.exec(t);if(wR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Od&&(Dd=Od?Od[1]:""),ds){var Ld=db();if(Ld!=null&&Ld>parseFloat(Dd)){Xd=String(Ld);break e}}Xd=Dd}var Zd;if(z.document&&ds){var $0=db();Zd=$0||parseInt(Xd,10)||void 0}else Zd=void 0;var IR=Zd;function da(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hb){e:{try{Qf(e.nodeName);var o=!0;break e}catch{}o=!1}o||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ER[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&da.$.h.call(this)}}nt(da,ft);var ER={2:"touch",3:"pen",4:"mouse"};da.prototype.h=function(){da.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Da="closure_listenable_"+(1e6*Math.random()|0),_R=0;function SR(t,e,n,r,o){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=o,this.key=++_R,this.fa=this.ia=!1}function fl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Xf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function TR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function fb(t){const e={};for(const n in t)e[n]=t[n];return e}const H0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(t,e){let n,r;for(let o=1;o<arguments.length;o++){r=arguments[o];for(n in r)t[n]=r[n];for(let u=0;u<H0.length;u++)n=H0[u],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function pl(t){this.src=t,this.g={},this.h=0}pl.prototype.add=function(t,e,n,r,o){var u=t.toString();t=this.g[u],t||(t=this.g[u]=[],this.h++);var l=tf(t,e,r,o);return-1<l?(e=t[l],n||(e.ia=!1)):(e=new SR(e,this.src,u,!!r,o),e.ia=n,t.push(e)),e};function ef(t,e){var n=e.type;if(n in t.g){var r=t.g[n],o=cb(r,e),u;(u=0<=o)&&Array.prototype.splice.call(r,o,1),u&&(fl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tf(t,e,n,r){for(var o=0;o<t.length;++o){var u=t[o];if(!u.fa&&u.listener==e&&u.capture==!!n&&u.la==r)return o}return-1}var Zf="closure_lm_"+(1e6*Math.random()|0),Md={};function mb(t,e,n,r,o){if(r&&r.once)return vb(t,e,n,r,o);if(Array.isArray(e)){for(var u=0;u<e.length;u++)mb(t,e[u],n,r,o);return null}return n=np(n),t&&t[Da]?t.O(e,n,Pa(r)?!!r.capture:!!r,o):gb(t,e,n,!1,r,o)}function gb(t,e,n,r,o,u){if(!e)throw Error("Invalid event type");var l=Pa(o)?!!o.capture:!!o,f=tp(t);if(f||(t[Zf]=f=new pl(t)),n=f.add(e,n,r,l,u),n.proxy)return n;if(r=CR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vR||(o=l),o===void 0&&(o=!1),t.addEventListener(e.toString(),r,o);else if(t.attachEvent)t.attachEvent(wb(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CR(){function t(n){return e.call(t.src,t.listener,n)}const e=kR;return t}function vb(t,e,n,r,o){if(Array.isArray(e)){for(var u=0;u<e.length;u++)vb(t,e[u],n,r,o);return null}return n=np(n),t&&t[Da]?t.P(e,n,Pa(r)?!!r.capture:!!r,o):gb(t,e,n,!0,r,o)}function yb(t,e,n,r,o){if(Array.isArray(e))for(var u=0;u<e.length;u++)yb(t,e[u],n,r,o);else r=Pa(r)?!!r.capture:!!r,n=np(n),t&&t[Da]?(t=t.i,e=String(e).toString(),e in t.g&&(u=t.g[e],n=tf(u,n,r,o),-1<n&&(fl(u[n]),Array.prototype.splice.call(u,n,1),u.length==0&&(delete t.g[e],t.h--)))):t&&(t=tp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tf(e,n,r,o)),(n=-1<t?e[t]:null)&&ep(n))}function ep(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Da])ef(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wb(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=tp(e))?(ef(n,t),n.h==0&&(n.src=null,e[Zf]=null)):fl(t)}}}function wb(t){return t in Md?Md[t]:Md[t]="on"+t}function kR(t,e){if(t.fa)t=!0;else{e=new da(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ep(t),t=n.call(r,e)}return t}function tp(t){return t=t[Zf],t instanceof pl?t:null}var xd="__closure_events_fn_"+(1e9*Math.random()>>>0);function np(t){return typeof t=="function"?t:(t[xd]||(t[xd]=function(e){return t.handleEvent(e)}),t[xd])}function tt(){yi.call(this),this.i=new pl(this),this.S=this,this.J=null}nt(tt,yi);tt.prototype[Da]=!0;tt.prototype.removeEventListener=function(t,e,n,r){yb(this,t,e,n,r)};function at(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var o=e;e=new ft(r,t),pb(e,o)}if(o=!0,n)for(var u=n.length-1;0<=u;u--){var l=e.g=n[u];o=lc(l,r,!0,e)&&o}if(l=e.g=t,o=lc(l,r,!0,e)&&o,o=lc(l,r,!1,e)&&o,n)for(u=0;u<n.length;u++)l=e.g=n[u],o=lc(l,r,!1,e)&&o}tt.prototype.N=function(){if(tt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fl(n[r]);delete t.g[e],t.h--}}this.J=null};tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};tt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function lc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var o=!0,u=0;u<e.length;++u){var l=e[u];if(l&&!l.fa&&l.capture==n){var f=l.listener,p=l.la||l.src;l.ia&&ef(t.i,l),o=f.call(p,r)!==!1&&o}}return o&&!r.defaultPrevented}var ip=z.JSON.stringify;class AR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function RR(){var t=rp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NR{constructor(){this.h=this.g=null}add(e,n){const r=bb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bb=new AR(()=>new PR,t=>t.reset());class PR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function OR(t){z.setTimeout(()=>{throw t},0)}let fa,pa=!1,rp=new NR,Ib=()=>{const t=z.Promise.resolve(void 0);fa=()=>{t.then(LR)}};var LR=()=>{for(var t;t=RR();){try{t.h.call(t.g)}catch(n){OR(n)}var e=bb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pa=!1};function ml(t,e){tt.call(this),this.h=t||1,this.g=e||z,this.j=dt(this.qb,this),this.l=Date.now()}nt(ml,tt);O=ml.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(sp(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){ml.$.N.call(this),sp(this),delete this.g};function op(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Eb(t){t.g=op(()=>{t.g=null,t.i&&(t.i=!1,Eb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class MR extends yi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Eb(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ma(t){yi.call(this),this.h=t,this.g={}}nt(ma,yi);var q0=[];function _b(t,e,n,r){Array.isArray(n)||(n&&(q0[0]=n.toString()),n=q0);for(var o=0;o<n.length;o++){var u=mb(e,n[o],r||t.handleEvent,!1,t.h||t);if(!u)break;t.g[u.key]=u}}function Sb(t){Xf(t.g,function(e,n){this.g.hasOwnProperty(n)&&ep(e)},t),t.g={}}ma.prototype.N=function(){ma.$.N.call(this),Sb(this)};ma.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gl(){this.g=!0}gl.prototype.Ea=function(){this.g=!1};function xR(t,e,n,r,o,u){t.info(function(){if(t.g)if(u)for(var l="",f=u.split("&"),p=0;p<f.length;p++){var m=f[p].split("=");if(1<m.length){var v=m[0];m=m[1];var b=v.split("_");l=2<=b.length&&b[1]=="type"?l+(v+"="+m+"&"):l+(v+"=redacted&")}}else l=null;else l=u;return"XMLHTTP REQ ("+r+") [attempt "+o+"]: "+e+`
`+n+`
`+l})}function UR(t,e,n,r,o,u,l){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+o+"]: "+e+`
`+n+`
`+u+" "+l})}function Zr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+VR(t,n)+(r?" "+r:"")})}function FR(t,e){t.info(function(){return"TIMEOUT: "+e})}gl.prototype.info=function(){};function VR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var o=r[1];if(Array.isArray(o)&&!(1>o.length)){var u=o[0];if(u!="noop"&&u!="stop"&&u!="close")for(var l=1;l<o.length;l++)o[l]=""}}}}return ip(n)}catch{return e}}var rr={},G0=null;function vl(){return G0=G0||new tt}rr.Ta="serverreachability";function Tb(t){ft.call(this,rr.Ta,t)}nt(Tb,ft);function ga(t){const e=vl();at(e,new Tb(e))}rr.STAT_EVENT="statevent";function Cb(t,e){ft.call(this,rr.STAT_EVENT,t),this.stat=e}nt(Cb,ft);function bt(t){const e=vl();at(e,new Cb(e,t))}rr.Ua="timingevent";function kb(t,e){ft.call(this,rr.Ua,t),this.size=e}nt(kb,ft);function Oa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var yl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ab={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ap(){}ap.prototype.h=null;function z0(t){return t.h||(t.h=t.i())}function Rb(){}var La={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function up(){ft.call(this,"d")}nt(up,ft);function cp(){ft.call(this,"c")}nt(cp,ft);var nf;function wl(){}nt(wl,ap);wl.prototype.g=function(){return new XMLHttpRequest};wl.prototype.i=function(){return{}};nf=new wl;function Ma(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ma(this),this.P=jR,t=Qd?125:void 0,this.V=new ml(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Nb}function Nb(){this.i=null,this.g="",this.h=!1}var jR=45e3,rf={},Uc={};O=Ma.prototype;O.setTimeout=function(t){this.P=t};function sf(t,e,n){t.L=1,t.v=Il(Ln(e)),t.s=n,t.S=!0,Pb(t,null)}function Pb(t,e){t.G=Date.now(),xa(t),t.A=Ln(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Vb(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Nb,t.g=oI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new MR(dt(t.Pa,t,t.g),t.O)),_b(t.U,t.g,"readystatechange",t.nb),e=t.I?fb(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ga(),xR(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&pn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const v=pn(this.g);var e=this.g.Ia();const b=this.g.da();if(!(3>v)&&(v!=3||Qd||this.g&&(this.h.h||this.g.ja()||J0(this.g)))){this.J||v!=4||e==7||(e==8||0>=b?ga(3):ga(2)),bl(this);var n=this.g.da();this.ca=n;t:if(Db(this)){var r=J0(this.g);t="";var o=r.length,u=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$i(this),Zo(this);var l="";break t}this.h.i=new z.TextDecoder}for(e=0;e<o;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:u&&e==o-1});r.splice(0,o),this.h.g+=t,this.C=0,l=this.h.g}else l=this.g.ja();if(this.i=n==200,UR(this.j,this.u,this.A,this.m,this.W,v,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var f,p=this.g;if((f=p.g?p.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ha(f)){var m=f;break t}}m=null}if(n=m)Zr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,of(this,n);else{this.i=!1,this.o=3,bt(12),$i(this),Zo(this);break e}}this.S?(Ob(this,v,l),Qd&&this.i&&v==3&&(_b(this.U,this.V,"tick",this.mb),this.V.start())):(Zr(this.j,this.m,l,null),of(this,l)),v==4&&$i(this),this.i&&!this.J&&(v==4?nI(this.l,this):(this.i=!1,xa(this)))}else aN(this.g),n==400&&0<l.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),$i(this),Zo(this)}}}catch{}finally{}};function Db(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ob(t,e,n){let r=!0,o;for(;!t.J&&t.C<n.length;)if(o=BR(t,n),o==Uc){e==4&&(t.o=4,bt(14),r=!1),Zr(t.j,t.m,null,"[Incomplete Response]");break}else if(o==rf){t.o=4,bt(15),Zr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Zr(t.j,t.m,o,null),of(t,o);Db(t)&&o!=Uc&&o!=rf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),mp(e),e.M=!0,bt(11))):(Zr(t.j,t.m,n,"[Invalid Chunked Response]"),$i(t),Zo(t))}O.mb=function(){if(this.g){var t=pn(this.g),e=this.g.ja();this.C<e.length&&(bl(this),Ob(this,t,e),this.i&&t!=4&&xa(this))}};function BR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Uc:(n=Number(e.substring(n,r)),isNaN(n)?rf:(r+=1,r+n>e.length?Uc:(e=e.slice(r,r+n),t.C=r+n,e)))}O.cancel=function(){this.J=!0,$i(this)};function xa(t){t.Y=Date.now()+t.P,Lb(t,t.P)}function Lb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Oa(dt(t.lb,t),e)}function bl(t){t.B&&(z.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(FR(this.j,this.A),this.L!=2&&(ga(),bt(17)),$i(this),this.o=2,Zo(this)):Lb(this,this.Y-t)};function Zo(t){t.l.H==0||t.J||nI(t.l,t)}function $i(t){bl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,sp(t.V),Sb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function of(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||af(n.i,t))){if(!t.K&&af(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var o=r;if(o[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)jc(n),Sl(n);else break e;pp(n),bt(18)}}else n.Fa=o[1],0<n.Fa-n.V&&37500>o[2]&&n.G&&n.A==0&&!n.v&&(n.v=Oa(dt(n.ib,n),6e3));if(1>=$b(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Hi(n,11)}else if((t.K||n.g==t)&&jc(n),!ha(e))for(o=n.Ja.g.parse(e),e=0;e<o.length;e++){let m=o[e];if(n.V=m[0],m=m[1],n.H==2)if(m[0]=="c"){n.K=m[1],n.pa=m[2];const v=m[3];v!=null&&(n.ra=v,n.l.info("VER="+n.ra));const b=m[4];b!=null&&(n.Ga=b,n.l.info("SVER="+n.Ga));const _=m[5];_!=null&&typeof _=="number"&&0<_&&(r=1.5*_,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const T=t.g;if(T){const V=T.g?T.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(V){var u=r.i;u.g||V.indexOf("spdy")==-1&&V.indexOf("quic")==-1&&V.indexOf("h2")==-1||(u.j=u.l,u.g=new Set,u.h&&(lp(u,u.h),u.h=null))}if(r.F){const y=T.g?T.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,we(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var l=t;if(r.wa=sI(r,r.J?r.pa:null,r.Y),l.K){Hb(r.i,l);var f=l,p=r.L;p&&f.setTimeout(p),f.B&&(bl(f),xa(f)),r.g=l}else eI(r);0<n.j.length&&Tl(n)}else m[0]!="stop"&&m[0]!="close"||Hi(n,7);else n.H==3&&(m[0]=="stop"||m[0]=="close"?m[0]=="stop"?Hi(n,7):fp(n):m[0]!="noop"&&n.h&&n.h.Aa(m),n.A=0)}}ga(4)}catch{}}function $R(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function HR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(hl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Mb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=HR(t),r=$R(t),o=r.length,u=0;u<o;u++)e.call(void 0,r[u],n&&n[u],t)}var xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),o=null;if(0<=r){var u=t[n].substring(0,r);o=t[n].substring(r+1)}else u=t[n];e(u,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function Wi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wi){this.h=t.h,Fc(this,t.j),this.s=t.s,this.g=t.g,Vc(this,t.m),this.l=t.l;var e=t.i,n=new va;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),K0(this,n),this.o=t.o}else t&&(e=String(t).match(xb))?(this.h=!1,Fc(this,e[1]||"",!0),this.s=zo(e[2]||""),this.g=zo(e[3]||"",!0),Vc(this,e[4]),this.l=zo(e[5]||"",!0),K0(this,e[6]||"",!0),this.o=zo(e[7]||"")):(this.h=!1,this.i=new va(null,this.h))}Wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ko(e,W0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ko(e,W0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ko(n,n.charAt(0)=="/"?KR:zR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ko(n,YR)),t.join("")};function Ln(t){return new Wi(t)}function Fc(t,e,n){t.j=n?zo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function K0(t,e,n){e instanceof va?(t.i=e,JR(t.i,t.h)):(n||(e=Ko(e,WR)),t.i=new va(e,t.h))}function we(t,e,n){t.i.set(e,n)}function Il(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ko(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var W0=/[#\/\?@]/g,zR=/[#\?:]/g,KR=/[#\?]/g,WR=/[#\?@]/g,YR=/#/g;function va(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function wi(t){t.g||(t.g=new Map,t.h=0,t.i&&qR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=va.prototype;O.add=function(t,e){wi(this),this.i=null,t=Ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ub(t,e){wi(t),e=Ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Fb(t,e){return wi(t),e=Ts(t,e),t.g.has(e)}O.forEach=function(t,e){wi(this),this.g.forEach(function(n,r){n.forEach(function(o){t.call(e,o,r,this)},this)},this)};O.ta=function(){wi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const o=t[r];for(let u=0;u<o.length;u++)n.push(e[r])}return n};O.Z=function(t){wi(this);let e=[];if(typeof t=="string")Fb(this,t)&&(e=e.concat(this.g.get(Ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return wi(this),this.i=null,t=Ts(this,t),Fb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Vb(t,e,n){Ub(t,e),0<n.length&&(t.i=null,t.g.set(Ts(t,e),Jf(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const u=encodeURIComponent(String(r)),l=this.Z(r);for(r=0;r<l.length;r++){var o=u;l[r]!==""&&(o+="="+encodeURIComponent(String(l[r]))),t.push(o)}}return this.i=t.join("&")};function Ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JR(t,e){e&&!t.j&&(wi(t),t.i=null,t.g.forEach(function(n,r){var o=r.toLowerCase();r!=o&&(Ub(this,r),Vb(this,o,n))},t)),t.j=e}var QR=class{constructor(t,e){this.g=t,this.map=e}};function jb(t){this.l=t||XR,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var XR=10;function Bb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $b(t){return t.h?1:t.g?t.g.size:0}function af(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function lp(t,e){t.g?t.g.add(e):t.h=e}function Hb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jb.prototype.cancel=function(){if(this.i=qb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qb(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Jf(t.i)}var ZR=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function eN(){this.g=new ZR}function tN(t,e,n){const r=n||"";try{Mb(t,function(o,u){let l=o;Pa(o)&&(l=ip(o)),e.push(r+u+"="+encodeURIComponent(l))})}catch(o){throw e.push(r+"type="+encodeURIComponent("_badmap")),o}}function nN(t,e){const n=new gl;if(z.Image){const r=new Image;r.onload=cc(hc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=cc(hc,n,r,"TestLoadImage: error",!1,e),r.onabort=cc(hc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=cc(hc,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function hc(t,e,n,r,o){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,o(r)}catch{}}function Ua(t){this.l=t.fc||null,this.j=t.ob||!1}nt(Ua,ap);Ua.prototype.g=function(){return new El(this.l,this.j)};Ua.prototype.i=function(t){return function(){return t}}({});function El(t,e){tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(El,tt);var hp=0;O=El.prototype;O.open=function(t,e){if(this.readyState!=hp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ya(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fa(this)),this.readyState=hp};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ya(this)),this.g&&(this.readyState=3,ya(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Gb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fa(this):ya(this),this.readyState==3&&Gb(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Fa(this))};O.Ya=function(t){this.g&&(this.response=t,Fa(this))};O.ka=function(){this.g&&Fa(this)};function Fa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ya(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ya(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(El.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iN=z.JSON.parse;function Pe(t){tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=zb,this.L=this.M=!1}nt(Pe,tt);var zb="",rN=/^https?$/i,sN=["POST","PUT"];O=Pe.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():nf.g(),this.C=this.u?z0(this.u):z0(nf),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(u){Y0(this,u);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const u of r.keys())n.set(u,r.get(u));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(u=>u.toLowerCase()=="content-type"),o=z.FormData&&t instanceof z.FormData,!(0<=cb(sN,e))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[u,l]of n)this.g.setRequestHeader(u,l);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Yb(this),0<this.B&&((this.L=oN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=op(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(u){Y0(this,u)}};function oN(t){return ds&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Yf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function Y0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kb(t),_l(t)}function Kb(t){t.F||(t.F=!0,at(t,"complete"),at(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),_l(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_l(this,!0)),Pe.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?Wb(this):this.kb())};O.kb=function(){Wb(this)};function Wb(t){if(t.h&&typeof Yf<"u"&&(!t.C[1]||pn(t)!=4||t.da()!=2)){if(t.v&&pn(t)==4)op(t.La,0,t);else if(at(t,"readystatechange"),pn(t)==4){t.h=!1;try{const l=t.da();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=l===0){var o=String(t.I).match(xb)[1]||null;!o&&z.self&&z.self.location&&(o=z.self.location.protocol.slice(0,-1)),r=!rN.test(o?o.toLowerCase():"")}n=r}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var u=2<pn(t)?t.g.statusText:""}catch{u=""}t.j=u+" ["+t.da()+"]",Kb(t)}}finally{_l(t)}}}}function _l(t,e){if(t.g){Yb(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=r}catch{}}}function Yb(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function pn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iN(e)}};function J0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case zb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function aN(t){const e={};t=(t.g&&2<=pn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ha(t[r]))continue;var n=DR(t[r]);const o=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const u=e[o]||[];e[o]=u,u.push(n)}TR(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jb(t){let e="";return Xf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function dp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function jo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qb(t){this.Ga=0,this.j=[],this.l=new gl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=jo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=jo("baseRetryDelayMs",5e3,t),this.hb=jo("retryDelaySeedMs",1e4,t),this.eb=jo("forwardChannelMaxRetries",2,t),this.xa=jo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jb(t&&t.concurrentRequestLimit),this.Ja=new eN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=Qb.prototype;O.ra=8;O.H=1;function fp(t){if(Xb(t),t.H==3){var e=t.W++,n=Ln(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),Va(t,n),e=new Ma(t,t.l,e),e.L=2,e.v=Il(Ln(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=oI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),xa(e)}rI(t)}function Sl(t){t.g&&(mp(t),t.g.cancel(),t.g=null)}function Xb(t){Sl(t),t.u&&(z.clearTimeout(t.u),t.u=null),jc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Tl(t){if(!Bb(t.i)&&!t.m){t.m=!0;var e=t.Na;fa||Ib(),pa||(fa(),pa=!0),rp.add(e,t),t.C=0}}function uN(t,e){return $b(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Oa(dt(t.Na,t,e),iI(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const o=new Ma(this,this.l,t);let u=this.s;if(this.U&&(u?(u=fb(u),pb(u,this.U)):u=this.U),this.o!==null||this.O||(o.I=u,u=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zb(this,o,e),n=Ln(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),Va(this,n),u&&(this.O?e="headers="+encodeURIComponent(String(Jb(u)))+"&"+e:this.o&&dp(n,this.o,u)),lp(this.i,o),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),o.aa=!0,sf(o,n,null)):sf(o,n,e),this.H=2}}else this.H==3&&(t?Q0(this,t):this.j.length==0||Bb(this.i)||Q0(this))};function Q0(t,e){var n;e?n=e.m:n=t.W++;const r=Ln(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.V),Va(t,r),t.o&&t.s&&dp(r,t.o,t.s),n=new Ma(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Zb(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),lp(t.i,n),sf(n,r,e)}function Va(t,e){t.na&&Xf(t.na,function(n,r){we(e,r,n)}),t.h&&Mb({},function(n,r){we(e,r,n)})}function Zb(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var o=t.j;let u=-1;for(;;){const l=["count="+n];u==-1?0<n?(u=o[0].g,l.push("ofs="+u)):u=0:l.push("ofs="+u);let f=!0;for(let p=0;p<n;p++){let m=o[p].g;const v=o[p].map;if(m-=u,0>m)u=Math.max(0,o[p].g-100),f=!1;else try{tN(v,l,"req"+m+"_")}catch{r&&r(v)}}if(f){r=l.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function eI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;fa||Ib(),pa||(fa(),pa=!0),rp.add(e,t),t.A=0}}function pp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Oa(dt(t.Ma,t),iI(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,tI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Oa(dt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,bt(10),Sl(this),tI(this))};function mp(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function tI(t){t.g=new Ma(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ln(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),Va(t,e),t.o&&t.s&&dp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Il(Ln(e)),n.s=null,n.S=!0,Pb(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Sl(this),pp(this),bt(19))};function jc(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function nI(t,e){var n=null;if(t.g==e){jc(t),mp(t),t.g=null;var r=2}else if(af(t.i,e))n=e.F,Hb(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var o=t.C;r=vl(),at(r,new kb(r,n)),Tl(t)}else eI(t);else if(o=e.o,o==3||o==0&&0<e.ca||!(r==1&&uN(t,e)||r==2&&pp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),o){case 1:Hi(t,5);break;case 4:Hi(t,10);break;case 3:Hi(t,6);break;default:Hi(t,2)}}}function iI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Hi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new Wi("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Fc(n,"https"),Il(n)),nN(n.toString(),r)}else bt(2);t.H=0,t.h&&t.h.za(e),rI(t),Xb(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),bt(2)):(this.l.info("Failed to ping google.com"),bt(1))};function rI(t){if(t.H=0,t.ma=[],t.h){const e=qb(t.i);(e.length!=0||t.j.length!=0)&&(B0(t.ma,e),B0(t.ma,t.j),t.i.i.length=0,Jf(t.j),t.j.length=0),t.h.ya()}}function sI(t,e,n){var r=n instanceof Wi?Ln(n):new Wi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Vc(r,r.m);else{var o=z.location;r=o.protocol,e=e?e+"."+o.hostname:o.hostname,o=+o.port;var u=new Wi(null);r&&Fc(u,r),e&&(u.g=e),o&&Vc(u,o),n&&(u.l=n),r=u}return n=t.F,e=t.Da,n&&e&&we(r,n,e),we(r,"VER",t.ra),Va(t,r),r}function oI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Pe(new Ua({ob:!0})):new Pe(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function aI(){}O=aI.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Bc(){if(ds&&!(10<=Number(IR)))throw Error("Environmental error: no available transport.")}Bc.prototype.g=function(t,e){return new xt(t,e)};function xt(t,e){tt.call(this),this.g=new Qb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ha(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}nt(xt,tt);xt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=sI(t,null,t.Y),Tl(t)};xt.prototype.close=function(){fp(this.g)};xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ip(t),t=n);e.j.push(new QR(e.fb++,t)),e.H==3&&Tl(e)};xt.prototype.N=function(){this.g.h=null,delete this.j,fp(this.g),delete this.g,xt.$.N.call(this)};function uI(t){up.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(uI,up);function cI(){cp.call(this),this.status=1}nt(cI,cp);function Cs(t){this.g=t}nt(Cs,aI);Cs.prototype.Ba=function(){at(this.g,"a")};Cs.prototype.Aa=function(t){at(this.g,new uI(t))};Cs.prototype.za=function(t){at(this.g,new cI)};Cs.prototype.ya=function(){at(this.g,"b")};function cN(){this.blockSize=-1}function en(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(en,cN);en.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ud(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var o=0;16>o;++o)r[o]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(o=0;16>o;++o)r[o]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],o=t.g[2];var u=t.g[3],l=e+(u^n&(o^u))+r[0]+3614090360&4294967295;e=n+(l<<7&4294967295|l>>>25),l=u+(o^e&(n^o))+r[1]+3905402710&4294967295,u=e+(l<<12&4294967295|l>>>20),l=o+(n^u&(e^n))+r[2]+606105819&4294967295,o=u+(l<<17&4294967295|l>>>15),l=n+(e^o&(u^e))+r[3]+3250441966&4294967295,n=o+(l<<22&4294967295|l>>>10),l=e+(u^n&(o^u))+r[4]+4118548399&4294967295,e=n+(l<<7&4294967295|l>>>25),l=u+(o^e&(n^o))+r[5]+1200080426&4294967295,u=e+(l<<12&4294967295|l>>>20),l=o+(n^u&(e^n))+r[6]+2821735955&4294967295,o=u+(l<<17&4294967295|l>>>15),l=n+(e^o&(u^e))+r[7]+4249261313&4294967295,n=o+(l<<22&4294967295|l>>>10),l=e+(u^n&(o^u))+r[8]+1770035416&4294967295,e=n+(l<<7&4294967295|l>>>25),l=u+(o^e&(n^o))+r[9]+2336552879&4294967295,u=e+(l<<12&4294967295|l>>>20),l=o+(n^u&(e^n))+r[10]+4294925233&4294967295,o=u+(l<<17&4294967295|l>>>15),l=n+(e^o&(u^e))+r[11]+2304563134&4294967295,n=o+(l<<22&4294967295|l>>>10),l=e+(u^n&(o^u))+r[12]+1804603682&4294967295,e=n+(l<<7&4294967295|l>>>25),l=u+(o^e&(n^o))+r[13]+4254626195&4294967295,u=e+(l<<12&4294967295|l>>>20),l=o+(n^u&(e^n))+r[14]+2792965006&4294967295,o=u+(l<<17&4294967295|l>>>15),l=n+(e^o&(u^e))+r[15]+1236535329&4294967295,n=o+(l<<22&4294967295|l>>>10),l=e+(o^u&(n^o))+r[1]+4129170786&4294967295,e=n+(l<<5&4294967295|l>>>27),l=u+(n^o&(e^n))+r[6]+3225465664&4294967295,u=e+(l<<9&4294967295|l>>>23),l=o+(e^n&(u^e))+r[11]+643717713&4294967295,o=u+(l<<14&4294967295|l>>>18),l=n+(u^e&(o^u))+r[0]+3921069994&4294967295,n=o+(l<<20&4294967295|l>>>12),l=e+(o^u&(n^o))+r[5]+3593408605&4294967295,e=n+(l<<5&4294967295|l>>>27),l=u+(n^o&(e^n))+r[10]+38016083&4294967295,u=e+(l<<9&4294967295|l>>>23),l=o+(e^n&(u^e))+r[15]+3634488961&4294967295,o=u+(l<<14&4294967295|l>>>18),l=n+(u^e&(o^u))+r[4]+3889429448&4294967295,n=o+(l<<20&4294967295|l>>>12),l=e+(o^u&(n^o))+r[9]+568446438&4294967295,e=n+(l<<5&4294967295|l>>>27),l=u+(n^o&(e^n))+r[14]+3275163606&4294967295,u=e+(l<<9&4294967295|l>>>23),l=o+(e^n&(u^e))+r[3]+4107603335&4294967295,o=u+(l<<14&4294967295|l>>>18),l=n+(u^e&(o^u))+r[8]+1163531501&4294967295,n=o+(l<<20&4294967295|l>>>12),l=e+(o^u&(n^o))+r[13]+2850285829&4294967295,e=n+(l<<5&4294967295|l>>>27),l=u+(n^o&(e^n))+r[2]+4243563512&4294967295,u=e+(l<<9&4294967295|l>>>23),l=o+(e^n&(u^e))+r[7]+1735328473&4294967295,o=u+(l<<14&4294967295|l>>>18),l=n+(u^e&(o^u))+r[12]+2368359562&4294967295,n=o+(l<<20&4294967295|l>>>12),l=e+(n^o^u)+r[5]+4294588738&4294967295,e=n+(l<<4&4294967295|l>>>28),l=u+(e^n^o)+r[8]+2272392833&4294967295,u=e+(l<<11&4294967295|l>>>21),l=o+(u^e^n)+r[11]+1839030562&4294967295,o=u+(l<<16&4294967295|l>>>16),l=n+(o^u^e)+r[14]+4259657740&4294967295,n=o+(l<<23&4294967295|l>>>9),l=e+(n^o^u)+r[1]+2763975236&4294967295,e=n+(l<<4&4294967295|l>>>28),l=u+(e^n^o)+r[4]+1272893353&4294967295,u=e+(l<<11&4294967295|l>>>21),l=o+(u^e^n)+r[7]+4139469664&4294967295,o=u+(l<<16&4294967295|l>>>16),l=n+(o^u^e)+r[10]+3200236656&4294967295,n=o+(l<<23&4294967295|l>>>9),l=e+(n^o^u)+r[13]+681279174&4294967295,e=n+(l<<4&4294967295|l>>>28),l=u+(e^n^o)+r[0]+3936430074&4294967295,u=e+(l<<11&4294967295|l>>>21),l=o+(u^e^n)+r[3]+3572445317&4294967295,o=u+(l<<16&4294967295|l>>>16),l=n+(o^u^e)+r[6]+76029189&4294967295,n=o+(l<<23&4294967295|l>>>9),l=e+(n^o^u)+r[9]+3654602809&4294967295,e=n+(l<<4&4294967295|l>>>28),l=u+(e^n^o)+r[12]+3873151461&4294967295,u=e+(l<<11&4294967295|l>>>21),l=o+(u^e^n)+r[15]+530742520&4294967295,o=u+(l<<16&4294967295|l>>>16),l=n+(o^u^e)+r[2]+3299628645&4294967295,n=o+(l<<23&4294967295|l>>>9),l=e+(o^(n|~u))+r[0]+4096336452&4294967295,e=n+(l<<6&4294967295|l>>>26),l=u+(n^(e|~o))+r[7]+1126891415&4294967295,u=e+(l<<10&4294967295|l>>>22),l=o+(e^(u|~n))+r[14]+2878612391&4294967295,o=u+(l<<15&4294967295|l>>>17),l=n+(u^(o|~e))+r[5]+4237533241&4294967295,n=o+(l<<21&4294967295|l>>>11),l=e+(o^(n|~u))+r[12]+1700485571&4294967295,e=n+(l<<6&4294967295|l>>>26),l=u+(n^(e|~o))+r[3]+2399980690&4294967295,u=e+(l<<10&4294967295|l>>>22),l=o+(e^(u|~n))+r[10]+4293915773&4294967295,o=u+(l<<15&4294967295|l>>>17),l=n+(u^(o|~e))+r[1]+2240044497&4294967295,n=o+(l<<21&4294967295|l>>>11),l=e+(o^(n|~u))+r[8]+1873313359&4294967295,e=n+(l<<6&4294967295|l>>>26),l=u+(n^(e|~o))+r[15]+4264355552&4294967295,u=e+(l<<10&4294967295|l>>>22),l=o+(e^(u|~n))+r[6]+2734768916&4294967295,o=u+(l<<15&4294967295|l>>>17),l=n+(u^(o|~e))+r[13]+1309151649&4294967295,n=o+(l<<21&4294967295|l>>>11),l=e+(o^(n|~u))+r[4]+4149444226&4294967295,e=n+(l<<6&4294967295|l>>>26),l=u+(n^(e|~o))+r[11]+3174756917&4294967295,u=e+(l<<10&4294967295|l>>>22),l=o+(e^(u|~n))+r[2]+718787259&4294967295,o=u+(l<<15&4294967295|l>>>17),l=n+(u^(o|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(o+(l<<21&4294967295|l>>>11))&4294967295,t.g[2]=t.g[2]+o&4294967295,t.g[3]=t.g[3]+u&4294967295}en.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,o=this.h,u=0;u<e;){if(o==0)for(;u<=n;)Ud(this,t,u),u+=this.blockSize;if(typeof t=="string"){for(;u<e;)if(r[o++]=t.charCodeAt(u++),o==this.blockSize){Ud(this,r),o=0;break}}else for(;u<e;)if(r[o++]=t[u++],o==this.blockSize){Ud(this,r),o=0;break}}this.h=o,this.i+=e};en.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,o=t.length-1;0<=o;o--){var u=t[o]|0;r&&u==e||(n[o]=u,r=!1)}this.g=n}var lN={};function gp(t){return-128<=t&&128>t?yR(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function mn(t){if(isNaN(t)||!isFinite(t))return rs;if(0>t)return st(mn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=uf;return new me(e,0)}function lI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(lI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mn(Math.pow(e,8)),r=rs,o=0;o<t.length;o+=8){var u=Math.min(8,t.length-o),l=parseInt(t.substring(o,o+u),e);8>u?(u=mn(Math.pow(e,u)),r=r.R(u).add(mn(l))):(r=r.R(n),r=r.add(mn(l)))}return r}var uf=4294967296,rs=gp(0),cf=gp(1),X0=gp(16777216);O=me.prototype;O.ea=function(){if(Bt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:uf+r)*e,e*=uf}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kn(this))return"0";if(Bt(this))return"-"+st(this).toString(t);for(var e=mn(Math.pow(t,6)),n=this,r="";;){var o=Hc(n,e).g;n=$c(n,o.R(e));var u=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=o,kn(n))return u+r;for(;6>u.length;)u="0"+u;r=u+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Bt(t){return t.h==-1}O.X=function(t){return t=$c(this,t),Bt(t)?-1:kn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(cf)}O.abs=function(){return Bt(this)?st(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,o=0;o<=e;o++){var u=r+(this.D(o)&65535)+(t.D(o)&65535),l=(u>>>16)+(this.D(o)>>>16)+(t.D(o)>>>16);r=l>>>16,u&=65535,l&=65535,n[o]=l<<16|u}return new me(n,n[n.length-1]&-2147483648?-1:0)};function $c(t,e){return t.add(st(e))}O.R=function(t){if(kn(this)||kn(t))return rs;if(Bt(this))return Bt(t)?st(this).R(st(t)):st(st(this).R(t));if(Bt(t))return st(this.R(st(t)));if(0>this.X(X0)&&0>t.X(X0))return mn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var o=0;o<t.g.length;o++){var u=this.D(r)>>>16,l=this.D(r)&65535,f=t.D(o)>>>16,p=t.D(o)&65535;n[2*r+2*o]+=l*p,dc(n,2*r+2*o),n[2*r+2*o+1]+=u*p,dc(n,2*r+2*o+1),n[2*r+2*o+1]+=l*f,dc(n,2*r+2*o+1),n[2*r+2*o+2]+=u*f,dc(n,2*r+2*o+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function dc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Bo(t,e){this.g=t,this.h=e}function Hc(t,e){if(kn(e))throw Error("division by zero");if(kn(t))return new Bo(rs,rs);if(Bt(t))return e=Hc(st(t),e),new Bo(st(e.g),st(e.h));if(Bt(e))return e=Hc(t,st(e)),new Bo(st(e.g),e.h);if(30<t.g.length){if(Bt(t)||Bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=cf,r=e;0>=r.X(t);)n=Z0(n),r=Z0(r);var o=Yr(n,1),u=Yr(r,1);for(r=Yr(r,2),n=Yr(n,2);!kn(r);){var l=u.add(r);0>=l.X(t)&&(o=o.add(n),u=l),r=Yr(r,1),n=Yr(n,1)}return e=$c(t,o.R(e)),new Bo(o,e)}for(o=rs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),u=mn(n),l=u.R(e);Bt(l)||0<l.X(t);)n-=r,u=mn(n),l=u.R(e);kn(u)&&(u=cf),o=o.add(u),t=$c(t,l)}return new Bo(o,t)}O.gb=function(t){return Hc(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function Z0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function Yr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,o=[],u=0;u<r;u++)o[u]=0<e?t.D(u+n)>>>e|t.D(u+n+1)<<32-e:t.D(u+n);return new me(o,t.h)}Bc.prototype.createWebChannel=Bc.prototype.g;xt.prototype.send=xt.prototype.u;xt.prototype.open=xt.prototype.m;xt.prototype.close=xt.prototype.close;yl.NO_ERROR=0;yl.TIMEOUT=8;yl.HTTP_ERROR=6;Ab.COMPLETE="complete";Rb.EventType=La;La.OPEN="a";La.CLOSE="b";La.ERROR="c";La.MESSAGE="d";tt.prototype.listen=tt.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;en.prototype.digest=en.prototype.l;en.prototype.reset=en.prototype.reset;en.prototype.update=en.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=mn;me.fromString=lI;var hN=function(){return new Bc},dN=function(){return vl()},Fd=yl,fN=Ab,pN=rr,ew={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},mN=Ua,fc=Rb,gN=Pe,vN=en,ss=me;const tw="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let ks="9.23.0";/**
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
 */const Xi=new Zc("@firebase/firestore");function nw(){return Xi.logLevel}function F(t,...e){if(Xi.logLevel<=ue.DEBUG){const n=e.map(vp);Xi.debug(`Firestore (${ks}): ${t}`,...n)}}function Mn(t,...e){if(Xi.logLevel<=ue.ERROR){const n=e.map(vp);Xi.error(`Firestore (${ks}): ${t}`,...n)}}function fs(t,...e){if(Xi.logLevel<=ue.WARN){const n=e.map(vp);Xi.warn(`Firestore (${ks}): ${t}`,...n)}}function vp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function Ie(t,e){t||G()}function Q(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends It{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class wN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bN{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const o=p=>this.i!==r?(r=this.i,n(p)):Promise.resolve();let u=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Yi,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Yi)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new hI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new ct(e)}}class IN{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class EN{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new IN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SN{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=u=>{u.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const l=u.token!==this.T;return this.T=u.token,F("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>r(u))};const o=u=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.appCheck.addTokenListener(this.o)};this.I.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.I.getImmediate({optional:!0});u?o(u):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.T=n.token,new _N(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function TN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=TN(40);for(let u=0;u<o.length;++u)r.length<20&&o[u]<n&&(r+=e.charAt(o[u]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every((r,o)=>n(r,e[o]))}/**
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
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new We(0,0))}static max(){return new K(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wa{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const u=e.get(o),l=n.get(o);if(u<l)return-1;if(u>l)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends wa{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new be(n)}static emptyPath(){return new be([])}}const CN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends wa{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return CN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",o=0;const u=()=>{if(r.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new M(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new M(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,o+=2}else f==="`"?(l=!l,o++):f!=="."||l?(r+=f,o++):(u(),o++)}if(u(),l)throw new M(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(be.fromString(e))}static fromName(e){return new B(be.fromString(e).popFirst(5))}static empty(){return new B(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new be(e.slice()))}}function kN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,o=K.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new pi(o,B.empty(),e)}function AN(t){return new pi(t.readTime,t.key,-1)}class pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pi(K.min(),B.empty(),-1)}static max(){return new pi(K.max(),B.empty(),-1)}}function RN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const NN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ja(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==NN)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(r,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(r,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let o=0,u=0,l=!1;e.forEach(f=>{++o,f.next(()=>{++u,l&&u===o&&n()},p=>r(p))}),l=!0,u===o&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(o=>o?N.resolve(o):r());return n}static forEach(e,n){const r=[];return e.forEach((o,u)=>{r.push(n.call(this,o,u))}),this.waitFor(r)}static mapArray(e,n){return new N((r,o)=>{const u=e.length,l=new Array(u);let f=0;for(let p=0;p<u;p++){const m=p;n(e[m]).next(v=>{l[m]=v,++f,f===u&&r(l)},v=>o(v))}})}static doWhile(e,n){return new N((r,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):r()};u()})}}function Ba(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}yp.ct=-1;function Cl(t){return t==null}function qc(t){return t===0&&1/t==-1/0}function DN(t){return typeof t=="number"&&Number.isInteger(t)&&!qc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function iw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function As(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pc(this.root,e,this.comparator,!1)}getReverseIterator(){return new pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pc(this.root,e,this.comparator,!0)}}class pc{constructor(e,n,r,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?r(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,o,u){this.key=e,this.value=n,this.color=r??rt.RED,this.left=o??rt.EMPTY,this.right=u??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,o,u){return new rt(e??this.key,n??this.value,r??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let o=this;const u=r(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,r),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return rt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,o){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rw(this.data.getIterator())}getIteratorFrom(e){return new rw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class rw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new pt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pI("Invalid base64 string: "+o):o}}(e);return new mt(n)}static fromUint8Array(e){const n=function(r){let o="";for(let u=0;u<r.length;++u)o+=String.fromCharCode(r[u]);return o}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const ON=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=ON.exec(t);if(Ie(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zi(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function wp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bp(t){const e=t.mapValue.fields.__previous_value__;return wp(e)?bp(e):e}function ba(t){const e=mi(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class LN{constructor(e,n,r,o,u,l,f,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=u,this.forceLongPolling=l,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=m}}class Ia{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ia&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wp(t)?4:MN(t)?9007199254740991:10:G()}function yn(t,e){if(t===e)return!0;const n=er(t);if(n!==er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ba(t).isEqual(ba(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const u=mi(r.timestampValue),l=mi(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,o){return Zi(r.bytesValue).isEqual(Zi(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,o){return He(r.geoPointValue.latitude)===He(o.geoPointValue.latitude)&&He(r.geoPointValue.longitude)===He(o.geoPointValue.longitude)}(t,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return He(r.integerValue)===He(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const u=He(r.doubleValue),l=He(o.doubleValue);return u===l?qc(u)===qc(l):isNaN(u)&&isNaN(l)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:return function(r,o){const u=r.mapValue.fields||{},l=o.mapValue.fields||{};if(iw(u)!==iw(l))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(l[f]===void 0||!yn(u[f],l[f])))return!1;return!0}(t,e);default:return G()}}function Ea(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=er(t),r=er(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(o,u){const l=He(o.integerValue||o.doubleValue),f=He(u.integerValue||u.doubleValue);return l<f?-1:l>f?1:l===f?0:isNaN(l)?isNaN(f)?0:-1:1}(t,e);case 3:return sw(t.timestampValue,e.timestampValue);case 4:return sw(ba(t),ba(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(o,u){const l=Zi(o),f=Zi(u);return l.compareTo(f)}(t.bytesValue,e.bytesValue);case 7:return function(o,u){const l=o.split("/"),f=u.split("/");for(let p=0;p<l.length&&p<f.length;p++){const m=he(l[p],f[p]);if(m!==0)return m}return he(l.length,f.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,u){const l=he(He(o.latitude),He(u.latitude));return l!==0?l:he(He(o.longitude),He(u.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,u){const l=o.values||[],f=u.values||[];for(let p=0;p<l.length&&p<f.length;++p){const m=ms(l[p],f[p]);if(m)return m}return he(l.length,f.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,u){if(o===mc.mapValue&&u===mc.mapValue)return 0;if(o===mc.mapValue)return 1;if(u===mc.mapValue)return-1;const l=o.fields||{},f=Object.keys(l),p=u.fields||{},m=Object.keys(p);f.sort(),m.sort();for(let v=0;v<f.length&&v<m.length;++v){const b=he(f[v],m[v]);if(b!==0)return b;const _=ms(l[f[v]],p[m[v]]);if(_!==0)return _}return he(f.length,m.length)}(t.mapValue,e.mapValue);default:throw G()}}function sw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=mi(t),r=mi(e),o=he(n.seconds,r.seconds);return o!==0?o:he(n.nanos,r.nanos)}function gs(t){return lf(t)}function lf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const o=mi(r);return`time(${o.seconds},${o.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let o="[",u=!0;for(const l of r.values||[])u?u=!1:o+=",",o+=lf(l);return o+"]"}(t.arrayValue):"mapValue"in t?function(r){const o=Object.keys(r.fields||{}).sort();let u="{",l=!0;for(const f of o)l?l=!1:u+=",",u+=`${f}:${lf(r.fields[f])}`;return u+"}"}(t.mapValue):G();var e,n}function ow(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hf(t){return!!t&&"integerValue"in t}function Ip(t){return!!t&&"arrayValue"in t}function aw(t){return!!t&&"nullValue"in t}function uw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ec(t){return!!t&&"mapValue"in t}function ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return As(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ec(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(n)}setAll(e){let n=ht.emptyPath(),r={},o=[];e.forEach((l,f)=>{if(!n.isImmediateParentOf(f)){const p=this.getFieldsMap(n);this.applyChanges(p,r,o),r={},o=[],n=f.popLast()}l?r[f.lastSegment()]=ea(l):o.push(f.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,r,o)}delete(e){const n=this.field(e.popLast());Ec(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=n.mapValue.fields[e.get(r)];Ec(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,r){As(n,(o,u)=>e[o]=u);for(const o of r)delete e[o]}clone(){return new $t(ea(this.value))}}function mI(t){const e=[];return As(t.fields,(n,r)=>{const o=new ht([n]);if(Ec(r)){const u=mI(r.mapValue).fields;if(u.length===0)e.push(o);else for(const l of u)e.push(o.child(l))}else e.push(o)}),new Qt(e)}/**
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
 */class lt{constructor(e,n,r,o,u,l,f){this.key=e,this.documentType=n,this.version=r,this.readTime=o,this.createTime=u,this.data=l,this.documentState=f}static newInvalidDocument(e){return new lt(e,0,K.min(),K.min(),K.min(),$t.empty(),0)}static newFoundDocument(e,n,r,o){return new lt(e,1,n,K.min(),r,o,0)}static newNoDocument(e,n){return new lt(e,2,n,K.min(),K.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,K.min(),K.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gc{constructor(e,n){this.position=e,this.inclusive=n}}function cw(t,e,n){let r=0;for(let o=0;o<t.position.length;o++){const u=e[o],l=t.position[o];if(u.field.isKeyField()?r=B.comparator(B.fromName(l.referenceValue),n.key):r=ms(l,n.data.field(u.field)),u.dir==="desc"&&(r*=-1),r!==0)break}return r}function lw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class os{constructor(e,n="asc"){this.field=e,this.dir=n}}function xN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gI{}class qe extends gI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FN(e,n,r):n==="array-contains"?new BN(e,r):n==="in"?new $N(e,r):n==="not-in"?new HN(e,r):n==="array-contains-any"?new qN(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VN(e,r):new jN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ms(n,this.value)):n!==null&&er(this.value)===er(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tn extends gI{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new tn(e,n)}matches(e){return vI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function vI(t){return t.op==="and"}function yI(t){return UN(t)&&vI(t)}function UN(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function df(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(yI(t))return t.filters.map(e=>df(e)).join(",");{const e=t.filters.map(n=>df(n)).join(",");return`${t.op}(${e})`}}function wI(t,e){return t instanceof qe?function(n,r){return r instanceof qe&&n.op===r.op&&n.field.isEqual(r.field)&&yn(n.value,r.value)}(t,e):t instanceof tn?function(n,r){return r instanceof tn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((o,u,l)=>o&&wI(u,r.filters[l]),!0):!1}(t,e):void G()}function bI(t){return t instanceof qe?function(e){return`${e.field.canonicalString()} ${e.op} ${gs(e.value)}`}(t):t instanceof tn?function(e){return e.op.toString()+" {"+e.getFilters().map(bI).join(" ,")+"}"}(t):"Filter"}class FN extends qe{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class VN extends qe{constructor(e,n){super(e,"in",n),this.keys=II("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jN extends qe{constructor(e,n){super(e,"not-in",n),this.keys=II("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function II(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class BN extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ip(n)&&Ea(n.arrayValue,this.value)}}class $N extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ea(this.value.arrayValue,n)}}class HN extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ea(this.value.arrayValue,n)}}class qN extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ip(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ea(this.value.arrayValue,r))}}/**
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
 */class GN{constructor(e,n=null,r=[],o=[],u=null,l=null,f=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=u,this.startAt=l,this.endAt=f,this.dt=null}}function hw(t,e=null,n=[],r=[],o=null,u=null,l=null){return new GN(t,e,n,r,o,u,l)}function Ep(t){const e=Q(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>df(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.dt=n}return e.dt}function _p(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lw(t.startAt,e.startAt)&&lw(t.endAt,e.endAt)}function ff(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Rs{constructor(e,n=null,r=[],o=[],u=null,l="F",f=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=u,this.limitType=l,this.startAt=f,this.endAt=p,this.wt=null,this._t=null,this.startAt,this.endAt}}function zN(t,e,n,r,o,u,l,f){return new Rs(t,e,n,r,o,u,l,f)}function Sp(t){return new Rs(t)}function dw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function EI(t){return t.collectionGroup!==null}function as(t){const e=Q(t);if(e.wt===null){e.wt=[];const n=kl(e),r=Tp(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new os(n)),e.wt.push(new os(ht.keyField(),"asc"));else{let o=!1;for(const u of e.explicitOrderBy)e.wt.push(u),u.field.isKeyField()&&(o=!0);if(!o){const u=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new os(ht.keyField(),u))}}}return e.wt}function xn(t){const e=Q(t);if(!e._t)if(e.limitType==="F")e._t=hw(e.path,e.collectionGroup,as(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const u of as(e)){const l=u.dir==="desc"?"asc":"desc";n.push(new os(u.field,l))}const r=e.endAt?new Gc(e.endAt.position,e.endAt.inclusive):null,o=e.startAt?new Gc(e.startAt.position,e.startAt.inclusive):null;e._t=hw(e.path,e.collectionGroup,n,e.filters,e.limit,r,o)}return e._t}function pf(t,e){e.getFirstInequalityField(),kl(t);const n=t.filters.concat([e]);return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function mf(t,e,n){return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Al(t,e){return _p(xn(t),xn(e))&&t.limitType===e.limitType}function _I(t){return`${Ep(xn(t))}|lt:${t.limitType}`}function gf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>bI(r)).join(", ")}]`),Cl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),`Target(${n})`}(xn(t))}; limitType=${t.limitType})`}function Rl(t,e){return e.isFoundDocument()&&function(n,r){const o=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):B.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(t,e)&&function(n,r){for(const o of as(n))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const o of n.filters)if(!o.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(o,u,l){const f=cw(o,u,l);return o.inclusive?f<=0:f<0}(n.startAt,as(n),r)||n.endAt&&!function(o,u,l){const f=cw(o,u,l);return o.inclusive?f>=0:f>0}(n.endAt,as(n),r))}(t,e)}function KN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function SI(t){return(e,n)=>{let r=!1;for(const o of as(t)){const u=WN(o,e,n);if(u!==0)return u;r=r||o.field.isKeyField()}return 0}}function WN(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(o,u,l){const f=u.data.field(o),p=l.data.field(o);return f!==null&&p!==null?ms(f,p):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class Ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[o,u]of r)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[n]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,(n,r)=>{for(const[o,u]of r)e(o,u)})}isEmpty(){return fI(this.inner)}size(){return this.innerSize}}/**
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
 */const YN=new Ce(B.comparator);function Un(){return YN}const TI=new Ce(B.comparator);function Wo(...t){let e=TI;for(const n of t)e=e.insert(n.key,n);return e}function CI(t){let e=TI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qi(){return ta()}function kI(){return ta()}function ta(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const JN=new Ce(B.comparator),QN=new pt(B.comparator);function ne(...t){let e=QN;for(const n of t)e=e.add(n);return e}const XN=new pt(he);function ZN(){return XN}/**
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
 */function AI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qc(e)?"-0":e}}function RI(t){return{integerValue:""+t}}function eP(t,e){return DN(e)?RI(e):AI(t,e)}/**
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
 */class Nl{constructor(){this._=void 0}}function tP(t,e,n){return t instanceof zc?function(r,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&wp(o)&&(o=bp(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(n,e):t instanceof _a?PI(t,e):t instanceof Sa?DI(t,e):function(r,o){const u=NI(r,o),l=fw(u)+fw(r.gt);return hf(u)&&hf(r.gt)?RI(l):AI(r.serializer,l)}(t,e)}function nP(t,e,n){return t instanceof _a?PI(t,e):t instanceof Sa?DI(t,e):n}function NI(t,e){return t instanceof Kc?hf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class zc extends Nl{}class _a extends Nl{constructor(e){super(),this.elements=e}}function PI(t,e){const n=OI(e);for(const r of t.elements)n.some(o=>yn(o,r))||n.push(r);return{arrayValue:{values:n}}}class Sa extends Nl{constructor(e){super(),this.elements=e}}function DI(t,e){let n=OI(e);for(const r of t.elements)n=n.filter(o=>!yn(o,r));return{arrayValue:{values:n}}}class Kc extends Nl{constructor(e,n){super(),this.serializer=e,this.gt=n}}function fw(t){return He(t.integerValue||t.doubleValue)}function OI(t){return Ip(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof _a&&r instanceof _a||n instanceof Sa&&r instanceof Sa?ps(n.elements,r.elements,yn):n instanceof Kc&&r instanceof Kc?yn(n.gt,r.gt):n instanceof zc&&r instanceof zc}(t.transform,e.transform)}class rP{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _c(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pl{}function LI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xI(t.key,Pn.none()):new $a(t.key,t.data,Pn.none());{const n=t.data,r=$t.empty();let o=new pt(ht.comparator);for(let u of e.fields)if(!o.has(u)){let l=n.field(u);l===null&&u.length>1&&(u=u.popLast(),l=n.field(u)),l===null?r.delete(u):r.set(u,l),o=o.add(u)}return new sr(t.key,r,new Qt(o.toArray()),Pn.none())}}function sP(t,e,n){t instanceof $a?function(r,o,u){const l=r.value.clone(),f=mw(r.fieldTransforms,o,u.transformResults);l.setAll(f),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(t,e,n):t instanceof sr?function(r,o,u){if(!_c(r.precondition,o))return void o.convertToUnknownDocument(u.version);const l=mw(r.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(MI(r)),f.setAll(l),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(t,e,n):function(r,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,n)}function na(t,e,n,r){return t instanceof $a?function(o,u,l,f){if(!_c(o.precondition,u))return l;const p=o.value.clone(),m=gw(o.fieldTransforms,f,u);return p.setAll(m),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(t,e,n,r):t instanceof sr?function(o,u,l,f){if(!_c(o.precondition,u))return l;const p=gw(o.fieldTransforms,f,u),m=u.data;return m.setAll(MI(o)),m.setAll(p),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(t,e,n,r):function(o,u,l){return _c(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l}(t,e,n)}function oP(t,e){let n=null;for(const r of t.fieldTransforms){const o=e.data.field(r.field),u=NI(r.transform,o||null);u!=null&&(n===null&&(n=$t.empty()),n.set(r.field,u))}return n||null}function pw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ps(n,r,(o,u)=>iP(o,u))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $a extends Pl{constructor(e,n,r,o=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class sr extends Pl{constructor(e,n,r,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function MI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mw(t,e,n){const r=new Map;Ie(t.length===n.length);for(let o=0;o<n.length;o++){const u=t[o],l=u.transform,f=e.data.field(u.field);r.set(u.field,nP(l,f,n[o]))}return r}function gw(t,e,n){const r=new Map;for(const o of t){const u=o.transform,l=n.data.field(o.field);r.set(o.field,tP(u,l,e))}return r}class xI extends Pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aP extends Pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uP{constructor(e,n,r,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&sP(u,e,r[o])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kI();return this.mutations.forEach(o=>{const u=e.get(o.key),l=u.overlayedDocument;let f=this.applyToLocalView(l,u.mutatedFields);f=n.has(o.key)?null:f;const p=LI(l,f);p!==null&&r.set(o.key,p),l.isValidDocument()||l.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>pw(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>pw(n,r))}}class Cp{constructor(e,n,r,o){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(e,n,r){Ie(e.mutations.length===r.length);let o=JN;const u=e.mutations;for(let l=0;l<u.length;l++)o=o.insert(u[l].key,r[l].version);return new Cp(e,n,r,o)}}/**
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
 */class cP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,se;function hP(t){switch(t){default:return G();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function UI(t){if(t===void 0)return Mn("GRPC error has no .code"),k.UNKNOWN;switch(t){case Be.OK:return k.OK;case Be.CANCELLED:return k.CANCELLED;case Be.UNKNOWN:return k.UNKNOWN;case Be.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Be.INTERNAL:return k.INTERNAL;case Be.UNAVAILABLE:return k.UNAVAILABLE;case Be.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Be.NOT_FOUND:return k.NOT_FOUND;case Be.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Be.ABORTED:return k.ABORTED;case Be.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Be.DATA_LOSS:return k.DATA_LOSS;default:return G()}}(se=Be||(Be={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class kp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return gc}static getOrCreateInstance(){return gc===null&&(gc=new kp),gc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let gc=null;/**
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
 */function dP(){return new TextEncoder}/**
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
 */const fP=new ss([4294967295,4294967295],0);function vw(t){const e=dP().encode(t),n=new vN;return n.update(e),new Uint8Array(n.digest())}function yw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ss([n,r],0),new ss([o,u],0)]}class Ap{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yo(`Invalid padding: ${n}`);if(r<0)throw new Yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yo(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ss.fromNumber(this.It)}Et(e,n,r){let o=e.add(n.multiply(ss.fromNumber(r)));return o.compare(fP)===1&&(o=new ss([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=vw(e),[r,o]=yw(n);for(let u=0;u<this.hashCount;u++){const l=this.Et(r,o,u);if(!this.At(l))return!1}return!0}static create(e,n,r){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),l=new Ap(u,o,n);return r.forEach(f=>l.insert(f)),l}insert(e){if(this.It===0)return;const n=vw(e),[r,o]=yw(n);for(let u=0;u<this.hashCount;u++){const l=this.Et(r,o,u);this.Rt(l)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Dl{constructor(e,n,r,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const o=new Map;return o.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dl(K.min(),o,new Ce(he),Un(),ne())}}class Ha{constructor(e,n,r,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ha(r,n,ne(),ne(),ne())}}/**
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
 */class Sc{constructor(e,n,r,o){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=o}}class FI{constructor(e,n){this.targetId=e,this.Vt=n}}class VI{constructor(e,n,r=mt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=o}}class ww{constructor(){this.St=0,this.Dt=Iw(),this.Ct=mt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ne(),n=ne(),r=ne();return this.Dt.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:G()}}),new Ha(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Iw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class pP{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Un(),this.zt=bw(),this.Wt=new Ce(he)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,o)=>{this.te(o)&&n(o)})}ne(e){var n;const r=e.targetId,o=e.Vt.count,u=this.se(r);if(u){const l=u.target;if(ff(l))if(o===0){const f=new B(l.path);this.Yt(r,f,lt.newNoDocument(f,K.min()))}else Ie(o===1);else{const f=this.ie(r);if(f!==o){const p=this.re(e,f);if(p!==0){this.ee(r);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,m)}(n=kp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(m,v,b){var _,T,V,y,I,S;const D={localCacheCount:v,existenceFilterCount:b.count},$=b.unchangedNames;return $&&(D.bloomFilter={applied:m===0,hashCount:(_=$==null?void 0:$.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(y=(V=(T=$==null?void 0:$.bits)===null||T===void 0?void 0:T.bitmap)===null||V===void 0?void 0:V.length)!==null&&y!==void 0?y:0,padding:(S=(I=$==null?void 0:$.bits)===null||I===void 0?void 0:I.padding)!==null&&S!==void 0?S:0}),D}(p,f,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:o}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:u="",padding:l=0},hashCount:f=0}=r;let p,m;try{p=Zi(u).toUint8Array()}catch(v){if(v instanceof pI)return fs("Decoding the base64 bloom filter in existence filter failed ("+v.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw v}try{m=new Ap(p,l,f)}catch(v){return fs(v instanceof Yo?"BloomFilter error: ":"Applying bloom filter failed: ",v),1}return m.It===0?1:o!==n-this.oe(e.targetId,m)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let o=0;return r.forEach(u=>{const l=this.Gt.ue(),f=`projects/${l.projectId}/databases/${l.database}/documents/${u.path.canonicalString()}`;n.vt(f)||(this.Yt(e,u,null),o++)}),o}ce(e){const n=new Map;this.Qt.forEach((u,l)=>{const f=this.se(l);if(f){if(u.current&&ff(f.target)){const p=new B(f.target.path);this.jt.get(p)!==null||this.ae(l,p)||this.Yt(l,p,lt.newNoDocument(p,e))}u.Mt&&(n.set(l,u.Ot()),u.Ft())}});let r=ne();this.zt.forEach((u,l)=>{let f=!0;l.forEachWhile(p=>{const m=this.se(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(r=r.add(u))}),this.jt.forEach((u,l)=>l.setReadTime(e));const o=new Dl(e,n,this.Wt,this.jt,r);return this.jt=Un(),this.zt=bw(),this.Wt=new Ce(he),o}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const o=this.Zt(e);this.ae(e,n)?o.Bt(n,1):o.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new ww,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new pt(he),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ww),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function bw(){return new Ce(B.comparator)}function Iw(){return new Ce(B.comparator)}const mP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),vP=(()=>({and:"AND",or:"OR"}))();class yP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vf(t,e){return t.useProto3Json||Cl(e)?e:{value:e}}function Wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wP(t,e){return Wc(t,e.toTimestamp())}function gn(t){return Ie(!!t),K.fromTimestamp(function(e){const n=mi(e);return new We(n.seconds,n.nanos)}(t))}function Rp(t,e){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function BI(t){const e=be.fromString(t);return Ie(GI(e)),e}function yf(t,e){return Rp(t.databaseId,e.path)}function Vd(t,e){const n=BI(e);if(n.get(1)!==t.databaseId.projectId)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B($I(n))}function wf(t,e){return Rp(t.databaseId,e)}function bP(t){const e=BI(t);return e.length===4?be.emptyPath():$I(e)}function bf(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $I(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ew(t,e,n){return{name:yf(t,e),fields:n.value.mapValue.fields}}function IP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(p,m){return p.useProto3Json?(Ie(m===void 0||typeof m=="string"),mt.fromBase64String(m||"")):(Ie(m===void 0||m instanceof Uint8Array),mt.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),l=e.targetChange.cause,f=l&&function(p){const m=p.code===void 0?k.UNKNOWN:UI(p.code);return new M(m,p.message||"")}(l);n=new VI(r,o,u,f||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=Vd(t,r.document.name),u=gn(r.document.updateTime),l=r.document.createTime?gn(r.document.createTime):K.min(),f=new $t({mapValue:{fields:r.document.fields}}),p=lt.newFoundDocument(o,u,l,f),m=r.targetIds||[],v=r.removedTargetIds||[];n=new Sc(m,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=Vd(t,r.document),u=r.readTime?gn(r.readTime):K.min(),l=lt.newNoDocument(o,u),f=r.removedTargetIds||[];n=new Sc([],f,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=Vd(t,r.document),u=r.removedTargetIds||[];n=new Sc([],u,o,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:u}=r,l=new lP(o,u),f=r.targetId;n=new FI(f,l)}}return n}function EP(t,e){let n;if(e instanceof $a)n={update:Ew(t,e.key,e.value)};else if(e instanceof xI)n={delete:yf(t,e.key)};else if(e instanceof sr)n={update:Ew(t,e.key,e.data),updateMask:PP(e.fieldMask)};else{if(!(e instanceof aP))return G();n={verify:yf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const l=u.transform;if(l instanceof zc)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _a)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Sa)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Kc)return{fieldPath:u.field.canonicalString(),increment:l.gt};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:wP(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(t,e.precondition)),n}function _P(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(r,o){let u=r.updateTime?gn(r.updateTime):gn(o);return u.isEqual(K.min())&&(u=gn(o)),new rP(u,r.transformResults||[])}(n,e))):[]}function SP(t,e){return{documents:[wf(t,e.path)]}}function TP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=wf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const o=function(p){if(p.length!==0)return qI(tn.create(p,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const u=function(p){if(p.length!==0)return p.map(m=>function(v){return{field:Jr(v.field),direction:AP(v.dir)}}(m))}(e.orderBy);u&&(n.structuredQuery.orderBy=u);const l=vf(t,e.limit);var f;return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt={before:(f=e.startAt).inclusive,values:f.position}),e.endAt&&(n.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),n}function CP(t){let e=bP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){Ie(r===1);const v=n.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let u=[];n.where&&(u=function(v){const b=HI(v);return b instanceof tn&&yI(b)?b.getFilters():[b]}(n.where));let l=[];n.orderBy&&(l=n.orderBy.map(v=>function(b){return new os(Qr(b.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(v)));let f=null;n.limit&&(f=function(v){let b;return b=typeof v=="object"?v.value:v,Cl(b)?null:b}(n.limit));let p=null;n.startAt&&(p=function(v){const b=!!v.before,_=v.values||[];return new Gc(_,b)}(n.startAt));let m=null;return n.endAt&&(m=function(v){const b=!v.before,_=v.values||[];return new Gc(_,b)}(n.endAt)),zN(e,o,l,u,f,"F",p,m)}function kP(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HI(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Qr(e.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Qr(e.unaryFilter.field);return qe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qr(e.unaryFilter.field);return qe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Qr(e.unaryFilter.field);return qe.create(u,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return qe.create(Qr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return tn.create(e.compositeFilter.filters.map(n=>HI(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function AP(t){return mP[t]}function RP(t){return gP[t]}function NP(t){return vP[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return ht.fromServerFormat(t.fieldPath)}function qI(t){return t instanceof qe?function(e){if(e.op==="=="){if(uw(e.value))return{unaryFilter:{field:Jr(e.field),op:"IS_NAN"}};if(aw(e.value))return{unaryFilter:{field:Jr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(uw(e.value))return{unaryFilter:{field:Jr(e.field),op:"IS_NOT_NAN"}};if(aw(e.value))return{unaryFilter:{field:Jr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(e.field),op:RP(e.op),value:e.value}}}(t):t instanceof tn?function(e){const n=e.getFilters().map(r=>qI(r));return n.length===1?n[0]:{compositeFilter:{op:NP(e.op),filters:n}}}(t):G()}function PP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class si{constructor(e,n,r,o,u=K.min(),l=K.min(),f=mt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DP{constructor(e){this.fe=e}}function OP(t){const e=CP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mf(e,e.limit,"L"):e}/**
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
 */class LP{constructor(){this.rn=new MP}addToCollectionParentIndex(e,n){return this.rn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(pi.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class MP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n]||new pt(be.comparator),u=!o.has(r);return this.index[n]=o.add(r),u}has(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(e){return(this.index[e]||new pt(be.comparator)).toArray()}}/**
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
 */class vs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new vs(0)}static Mn(){return new vs(-1)}}/**
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
 */class xP{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class UP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class FP{constructor(e,n,r,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(r!==null&&na(r.mutation,o,Qt.empty(),We.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const o=qi();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,r).next(u=>{let l=Wo();return u.forEach((f,p)=>{l=l.insert(f,p.overlayedDocument)}),l}))}getOverlayedDocuments(e,n){const r=qi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const o=[];return r.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((l,f)=>{n.set(l,f)})})}computeViews(e,n,r,o){let u=Un();const l=ta(),f=ta();return n.forEach((p,m)=>{const v=r.get(m.key);o.has(m.key)&&(v===void 0||v.mutation instanceof sr)?u=u.insert(m.key,m):v!==void 0?(l.set(m.key,v.mutation.getFieldMask()),na(v.mutation,m,v.mutation.getFieldMask(),We.now())):l.set(m.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((m,v)=>l.set(m,v)),n.forEach((m,v)=>{var b;return f.set(m,new UP(v,(b=l.get(m))!==null&&b!==void 0?b:null))}),f))}recalculateAndSaveOverlays(e,n){const r=ta();let o=new Ce((l,f)=>l-f),u=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(l=>{for(const f of l)f.keys().forEach(p=>{const m=n.get(p);if(m===null)return;let v=r.get(p)||Qt.empty();v=f.applyToLocalView(m,v),r.set(p,v);const b=(o.get(f.batchId)||ne()).add(p);o=o.insert(f.batchId,b)})}).next(()=>{const l=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),m=p.key,v=p.value,b=kI();v.forEach(_=>{if(!u.has(_)){const T=LI(n.get(_),r.get(_));T!==null&&b.set(_,T),u=u.add(_)}}),l.push(this.documentOverlayCache.saveOverlays(e,m,b))}return N.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):EI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,o).next(u=>{const l=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,o-u.size):N.resolve(qi());let f=-1,p=u;return l.next(m=>N.forEach(m,(v,b)=>(f<b.largestBatchId&&(f=b.largestBatchId),u.get(v)?N.resolve():this.remoteDocumentCache.getEntry(e,v).next(_=>{p=p.insert(v,_)}))).next(()=>this.populateOverlays(e,m,u)).next(()=>this.computeViews(e,p,m,ne())).next(v=>({batchId:f,changes:CI(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let o=Wo();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const o=n.collectionGroup;let u=Wo();return this.indexManager.getCollectionParents(e,o).next(l=>N.forEach(l,f=>{const p=function(m,v){return new Rs(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,f.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,r).next(m=>{m.forEach((v,b)=>{u=u.insert(v,b)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,n,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o))).next(u=>{o.forEach((f,p)=>{const m=p.getKey();u.get(m)===null&&(u=u.insert(m,lt.newInvalidDocument(m)))});let l=Wo();return u.forEach((f,p)=>{const m=o.get(f);m!==void 0&&na(m.mutation,p,Qt.empty(),We.now()),Rl(n,p)&&(l=l.insert(f,p))}),l})}}/**
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
 */class VP{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return N.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:gn(r.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:OP(r.bundledQuery),readTime:gn(r.readTime)}}(n)),N.resolve()}}/**
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
 */class jP{constructor(){this.overlays=new Ce(B.comparator),this.ls=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qi();return N.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&r.set(o,u)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((o,u)=>{this.we(e,n,u)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const o=this.ls.get(r);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.ls.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const o=qi(),u=n.length+1,l=new B(n.child("")),f=this.overlays.getIteratorFrom(l);for(;f.hasNext();){const p=f.getNext().value,m=p.getKey();if(!n.isPrefixOf(m.path))break;m.path.length===u&&p.largestBatchId>r&&o.set(p.getKey(),p)}return N.resolve(o)}getOverlaysForCollectionGroup(e,n,r,o){let u=new Ce((m,v)=>m-v);const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===n&&m.largestBatchId>r){let v=u.get(m.largestBatchId);v===null&&(v=qi(),u=u.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const f=qi(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,v)=>f.set(m,v)),!(f.size()>=o)););return N.resolve(f)}we(e,n,r){const o=this.overlays.get(r.key);if(o!==null){const l=this.ls.get(o.largestBatchId).delete(r.key);this.ls.set(o.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new cP(n,r));let u=this.ls.get(n);u===void 0&&(u=ne(),this.ls.set(n,u)),this.ls.set(n,u.add(r.key))}}/**
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
 */class Np{constructor(){this.fs=new pt(Ze.ds),this.ws=new pt(Ze._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ze(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new B(new be([])),r=new Ze(n,e),o=new Ze(n,e+1),u=[];return this.ws.forEachInRange([r,o],l=>{this.ys(l),u.push(l.key)}),u}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new B(new be([])),r=new Ze(n,e),o=new Ze(n,e+1);let u=ne();return this.ws.forEachInRange([r,o],l=>{u=u.add(l.key)}),u}containsKey(e){const n=new Ze(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return B.comparator(e.key,n.key)||he(e.As,n.As)}static _s(e,n){return he(e.As,n.As)||B.comparator(e.key,n.key)}}/**
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
 */class BP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new pt(Ze.ds)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,o){const u=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new uP(u,n,r,o);this.mutationQueue.push(l);for(const f of o)this.Rs=this.Rs.add(new Ze(f.key,u)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return N.resolve(l)}lookupMutationBatch(e,n){return N.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,o=this.bs(r),u=o<0?0:o;return N.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),o=new Ze(n,Number.POSITIVE_INFINITY),u=[];return this.Rs.forEachInRange([r,o],l=>{const f=this.Ps(l.As);u.push(f)}),N.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(he);return n.forEach(o=>{const u=new Ze(o,0),l=new Ze(o,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([u,l],f=>{r=r.add(f.As)})}),N.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,o=r.length+1;let u=r;B.isDocumentKey(u)||(u=u.child(""));const l=new Ze(new B(u),0);let f=new pt(he);return this.Rs.forEachWhile(p=>{const m=p.key.path;return!!r.isPrefixOf(m)&&(m.length===o&&(f=f.add(p.As)),!0)},l),N.resolve(this.Vs(f))}Vs(e){const n=[];return e.forEach(r=>{const o=this.Ps(r);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Ie(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return N.forEach(n.mutations,o=>{const u=new Ze(o.key,n.batchId);return r=r.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ze(n,0),o=this.Rs.firstAfterOrEqual(r);return N.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $P{constructor(e){this.Ds=e,this.docs=new Ce(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,o=this.docs.get(r),u=o?o.size:0,l=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:l}),this.size+=l-u,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(o=>{const u=this.docs.get(o);r=r.insert(o,u?u.document.mutableCopy():lt.newInvalidDocument(o))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,o){let u=Un();const l=n.path,f=new B(l.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:m,value:{document:v}}=p.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||RN(AN(v),r)<=0||(o.has(v.key)||Rl(n,v))&&(u=u.insert(v.key,v.mutableCopy()))}return N.resolve(u)}getAllFromCollectionGroup(e,n,r,o){G()}Cs(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HP(this)}getSize(e){return N.resolve(this.size)}}class HP extends xP{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?n.push(this.os.addEntry(e,o)):this.os.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class qP{constructor(e){this.persistence=e,this.xs=new Ns(n=>Ep(n),_p),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Np,this.targetCount=0,this.Ms=vs.kn()}forEachTarget(e,n){return this.xs.forEach((r,o)=>n(o)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),N.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Fn(n),N.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let o=0;const u=[];return this.xs.forEach((l,f)=>{f.sequenceNumber<=n&&r.get(f.targetId)===null&&(this.xs.delete(l),u.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),N.waitFor(u).next(()=>o)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(l=>{u.push(o.markPotentiallyOrphaned(e,l))}),N.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.ks.containsKey(n))}}/**
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
 */class GP{constructor(e,n){this.$s={},this.overlays={},this.Os=new yp(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new qP(this),this.indexManager=new LP,this.remoteDocumentCache=function(r){return new $P(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new DP(n),this.qs=new VP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new BP(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const o=new zP(this.Os.next());return this.referenceDelegate.Us(),r(o).next(u=>this.referenceDelegate.Ks(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Gs(e,n){return N.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class zP extends PN{constructor(e){super(),this.currentSequenceNumber=e}}class Pp{constructor(e){this.persistence=e,this.Qs=new Np,this.js=null}static zs(e){return new Pp(e)}get Ws(){if(this.js)return this.js;throw G()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),N.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(o=>this.Ws.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.Ws.add(u.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ws,r=>{const o=B.fromPath(r);return this.Hs(e,o).next(u=>{u||n.removeEntry(o,K.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return N.or([()=>N.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Dp{constructor(e,n,r,o){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=o}static Li(e,n){let r=ne(),o=ne();for(const u of n.docChanges)switch(u.type){case 0:r=r.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Dp(e,n.fromCache,r,o)}}/**
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
 */class KP{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,o){return this.Ki(e,n).next(u=>u||this.Gi(e,n,o,r)).next(u=>u||this.Qi(e,n))}Ki(e,n){if(dw(n))return N.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=mf(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(u=>{const l=ne(...u);return this.Ui.getDocuments(e,l).next(f=>this.indexManager.getMinOffset(e,r).next(p=>{const m=this.ji(n,f);return this.zi(n,m,l,p.readTime)?this.Ki(e,mf(n,null,"F")):this.Wi(e,m,n,p)}))})))}Gi(e,n,r,o){return dw(n)||o.isEqual(K.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(u=>{const l=this.ji(n,u);return this.zi(n,l,r,o)?this.Qi(e,n):(nw()<=ue.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),gf(n)),this.Wi(e,l,n,kN(o,-1)))})}ji(e,n){let r=new pt(SI(e));return n.forEach((o,u)=>{Rl(e,u)&&(r=r.add(u))}),r}zi(e,n,r,o){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Qi(e,n){return nw()<=ue.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",gf(n)),this.Ui.getDocumentsMatchingQuery(e,n,pi.min())}Wi(e,n,r,o){return this.Ui.getDocumentsMatchingQuery(e,r,o).next(u=>(n.forEach(l=>{u=u.insert(l.key,l)}),u))}}/**
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
 */class WP{constructor(e,n,r,o){this.persistence=e,this.Hi=n,this.serializer=o,this.Ji=new Ce(he),this.Yi=new Ns(u=>Ep(u),_p),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FP(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function YP(t,e,n,r){return new WP(t,e,n,r)}async function zI(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let o;return n.mutationQueue.getAllMutationBatches(r).next(u=>(o=u,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(u=>{const l=[],f=[];let p=ne();for(const m of o){l.push(m.batchId);for(const v of m.mutations)p=p.add(v.key)}for(const m of u){f.push(m.batchId);for(const v of m.mutations)p=p.add(v.key)}return n.localDocuments.getDocuments(r,p).next(m=>({er:m,removedBatchIds:l,addedBatchIds:f}))})})}function JP(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=e.batch.keys(),u=n.Zi.newChangeBuffer({trackRemovals:!0});return function(l,f,p,m){const v=p.batch,b=v.keys();let _=N.resolve();return b.forEach(T=>{_=_.next(()=>m.getEntry(f,T)).next(V=>{const y=p.docVersions.get(T);Ie(y!==null),V.version.compareTo(y)<0&&(v.applyToRemoteDocument(V,p),V.isValidDocument()&&(V.setReadTime(p.commitVersion),m.addEntry(V)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(f,v))}(n,r,e,u).next(()=>u.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let f=ne();for(let p=0;p<l.mutationResults.length;++p)l.mutationResults[p].transformResults.length>0&&(f=f.add(l.batch.mutations[p].key));return f}(e))).next(()=>n.localDocuments.getDocuments(r,o))})}function KI(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function QP(t,e){const n=Q(t),r=e.snapshotVersion;let o=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const l=n.Zi.newChangeBuffer({trackRemovals:!0});o=n.Ji;const f=[];e.targetChanges.forEach((v,b)=>{const _=o.get(b);if(!_)return;f.push(n.Bs.removeMatchingKeys(u,v.removedDocuments,b).next(()=>n.Bs.addMatchingKeys(u,v.addedDocuments,b)));let T=_.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?T=T.withResumeToken(mt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):v.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(v.resumeToken,r)),o=o.insert(b,T),function(V,y,I){return V.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(_,T,v)&&f.push(n.Bs.updateTargetData(u,T))});let p=Un(),m=ne();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&f.push(n.persistence.referenceDelegate.updateLimboDocument(u,v))}),f.push(XP(u,l,e.documentUpdates).next(v=>{p=v.nr,m=v.sr})),!r.isEqual(K.min())){const v=n.Bs.getLastRemoteSnapshotVersion(u).next(b=>n.Bs.setTargetsMetadata(u,u.currentSequenceNumber,r));f.push(v)}return N.waitFor(f).next(()=>l.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,m)).next(()=>p)}).then(u=>(n.Ji=o,u))}function XP(t,e,n){let r=ne(),o=ne();return n.forEach(u=>r=r.add(u)),e.getEntries(t,r).next(u=>{let l=Un();return n.forEach((f,p)=>{const m=u.get(f);p.isFoundDocument()!==m.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(K.min())?(e.removeEntry(f,p.readTime),l=l.insert(f,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),l=l.insert(f,p)):F("LocalStore","Ignoring outdated watch update for ",f,". Current version:",m.version," Watch version:",p.version)}),{nr:l,sr:o}})}function ZP(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eD(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return n.Bs.getTargetData(r,e).next(u=>u?(o=u,N.resolve(o)):n.Bs.allocateTargetId(r).next(l=>(o=new si(e,l,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=n.Ji.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function If(t,e,n){const r=Q(t),o=r.Ji.get(e),u=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",u,l=>r.persistence.referenceDelegate.removeTarget(l,o))}catch(l){if(!Ba(l))throw l;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(o.target)}function _w(t,e,n){const r=Q(t);let o=K.min(),u=ne();return r.persistence.runTransaction("Execute query","readonly",l=>function(f,p,m){const v=Q(f),b=v.Yi.get(m);return b!==void 0?N.resolve(v.Ji.get(b)):v.Bs.getTargetData(p,m)}(r,l,xn(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(l,f.targetId).next(p=>{u=p})}).next(()=>r.Hi.getDocumentsMatchingQuery(l,e,n?o:K.min(),n?u:ne())).next(f=>(tD(r,KN(e),f),{documents:f,ir:u})))}function tD(t,e,n){let r=t.Xi.get(e)||K.min();n.forEach((o,u)=>{u.readTime.compareTo(r)>0&&(r=u.readTime)}),t.Xi.set(e,r)}class Sw{constructor(){this.activeTargetIds=ZN()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nD{constructor(){this.Hr=new Sw,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Sw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iD{Yr(e){}shutdown(){}}/**
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
 */class Tw{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vc=null;function jd(){return vc===null?vc=268435456+Math.round(2147483648*Math.random()):vc++,"0x"+vc.toString(16)}/**
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
 */const rD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sD{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const ut="WebChannelConnection";class oD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,o,u){const l=jd(),f=this.To(e,n);F("RestConnection",`Sending RPC '${e}' ${l}:`,f,r);const p={};return this.Eo(p,o,u),this.Ao(e,f,p,r).then(m=>(F("RestConnection",`Received RPC '${e}' ${l}: `,m),m),m=>{throw fs("RestConnection",`RPC '${e}' ${l} failed with error: `,m,"url: ",f,"request:",r),m})}vo(e,n,r,o,u,l){return this.Io(e,n,r,o,u)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),r&&r.headers.forEach((o,u)=>e[u]=o)}To(e,n){const r=rD[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,o){const u=jd();return new Promise((l,f)=>{const p=new gN;p.setWithCredentials(!0),p.listenOnce(fN.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Fd.NO_ERROR:const v=p.getResponseJson();F(ut,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(v)),l(v);break;case Fd.TIMEOUT:F(ut,`RPC '${e}' ${u} timed out`),f(new M(k.DEADLINE_EXCEEDED,"Request time out"));break;case Fd.HTTP_ERROR:const b=p.getStatus();if(F(ut,`RPC '${e}' ${u} failed with status:`,b,"response text:",p.getResponseText()),b>0){let _=p.getResponseJson();Array.isArray(_)&&(_=_[0]);const T=_==null?void 0:_.error;if(T&&T.status&&T.message){const V=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(I)>=0?I:k.UNKNOWN}(T.status);f(new M(V,T.message))}else f(new M(k.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new M(k.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F(ut,`RPC '${e}' ${u} completed.`)}});const m=JSON.stringify(o);F(ut,`RPC '${e}' ${u} sending request:`,o),p.send(n,"POST",m,r,15)})}Ro(e,n,r){const o=jd(),u=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=hN(),f=dN(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.xmlHttpFactory=new mN({})),this.Eo(p.initMessageHeaders,n,r),p.encodeInitMessageHeaders=!0;const v=u.join("");F(ut,`Creating RPC '${e}' stream ${o}: ${v}`,p);const b=l.createWebChannel(v,p);let _=!1,T=!1;const V=new sD({ro:I=>{T?F(ut,`Not sending because RPC '${e}' stream ${o} is closed:`,I):(_||(F(ut,`Opening RPC '${e}' stream ${o} transport.`),b.open(),_=!0),F(ut,`RPC '${e}' stream ${o} sending:`,I),b.send(I))},oo:()=>b.close()}),y=(I,S,D)=>{I.listen(S,$=>{try{D($)}catch(Z){setTimeout(()=>{throw Z},0)}})};return y(b,fc.EventType.OPEN,()=>{T||F(ut,`RPC '${e}' stream ${o} transport opened.`)}),y(b,fc.EventType.CLOSE,()=>{T||(T=!0,F(ut,`RPC '${e}' stream ${o} transport closed`),V.wo())}),y(b,fc.EventType.ERROR,I=>{T||(T=!0,fs(ut,`RPC '${e}' stream ${o} transport errored:`,I),V.wo(new M(k.UNAVAILABLE,"The operation could not be completed")))}),y(b,fc.EventType.MESSAGE,I=>{var S;if(!T){const D=I.data[0];Ie(!!D);const $=D,Z=$.error||((S=$[0])===null||S===void 0?void 0:S.error);if(Z){F(ut,`RPC '${e}' stream ${o} received error:`,Z);const oe=Z.status;let ve=function(qt){const Ut=Be[qt];if(Ut!==void 0)return UI(Ut)}(oe),De=Z.message;ve===void 0&&(ve=k.INTERNAL,De="Unknown error status: "+oe+" with message "+Z.message),T=!0,V.wo(new M(ve,De)),b.close()}else F(ut,`RPC '${e}' stream ${o} received:`,D),V._o(D)}}),y(f,pN.STAT_EVENT,I=>{I.stat===ew.PROXY?F(ut,`RPC '${e}' stream ${o} detected buffering proxy`):I.stat===ew.NOPROXY&&F(ut,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.fo()},0),V}}function Bd(){return typeof document<"u"?document:null}/**
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
 */function Ol(t){return new yP(t,!0)}/**
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
 */class WI{constructor(e,n,r=1e3,o=1.5,u=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=o,this.Vo=u,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),o=Math.max(0,n-r);o>0&&F("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,o,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class YI{constructor(e,n,r,o,u,l,f,p){this.ii=e,this.$o=r,this.Oo=o,this.connection=u,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new WI(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.Fo===n&&this.Zo(r,o)},r=>{e(()=>{const o=new M(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(o)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(o=>{r(()=>this.tu(o))}),this.stream.onMessage(o=>{r(()=>this.onMessage(o))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aD extends YI{constructor(e,n,r,o,u,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,l),this.serializer=u}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=IP(this.serializer,e),r=function(o){if(!("targetChange"in o))return K.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?K.min():u.readTime?gn(u.readTime):K.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=bf(this.serializer),n.addTarget=function(o,u){let l;const f=u.target;if(l=ff(f)?{documents:SP(o,f)}:{query:TP(o,f)},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=jI(o,u.resumeToken);const p=vf(o,u.expectedCount);p!==null&&(l.expectedCount=p)}else if(u.snapshotVersion.compareTo(K.min())>0){l.readTime=Wc(o,u.snapshotVersion.toTimestamp());const p=vf(o,u.expectedCount);p!==null&&(l.expectedCount=p)}return l}(this.serializer,e);const r=kP(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=bf(this.serializer),n.removeTarget=e,this.Wo(n)}}class uD extends YI{constructor(e,n,r,o,u,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,l),this.serializer=u,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=_P(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.cu(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=bf(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>EP(this.serializer,r))};this.Wo(n)}}/**
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
 */class cD extends class{}{constructor(e,n,r,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=o,this.lu=!1}fu(){if(this.lu)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Io(e,n,r,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(k.UNKNOWN,o.toString())})}vo(e,n,r,o){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.vo(e,n,r,u,l,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new M(k.UNKNOWN,u.toString())})}terminate(){this.lu=!0}}class lD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Mn(n),this.mu=!1):F("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class hD{constructor(e,n,r,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=u,this.Pu.Yr(l=>{r.enqueueAndForget(async()=>{or(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(f){const p=Q(f);p.vu.add(4),await qa(p),p.bu.set("Unknown"),p.vu.delete(4),await Ll(p)}(this))})}),this.bu=new lD(r,o)}}async function Ll(t){if(or(t))for(const e of t.Ru)await e(!0)}async function qa(t){for(const e of t.Ru)await e(!1)}function JI(t,e){const n=Q(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Mp(n)?Lp(n):Ps(n).Ko()&&Op(n,e))}function QI(t,e){const n=Q(t),r=Ps(n);n.Au.delete(e),r.Ko()&&XI(n,e),n.Au.size===0&&(r.Ko()?r.jo():or(n)&&n.bu.set("Unknown"))}function Op(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).su(e)}function XI(t,e){t.Vu.qt(e),Ps(t).iu(e)}function Lp(t){t.Vu=new pP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.bu.gu()}function Mp(t){return or(t)&&!Ps(t).Uo()&&t.Au.size>0}function or(t){return Q(t).vu.size===0}function ZI(t){t.Vu=void 0}async function dD(t){t.Au.forEach((e,n)=>{Op(t,e)})}async function fD(t,e){ZI(t),Mp(t)?(t.bu.Iu(e),Lp(t)):t.bu.set("Unknown")}async function pD(t,e,n){if(t.bu.set("Online"),e instanceof VI&&e.state===2&&e.cause)try{await async function(r,o){const u=o.cause;for(const l of o.targetIds)r.Au.has(l)&&(await r.remoteSyncer.rejectListen(l,u),r.Au.delete(l),r.Vu.removeTarget(l))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yc(t,r)}else if(e instanceof Sc?t.Vu.Ht(e):e instanceof FI?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(K.min()))try{const r=await KI(t.localStore);n.compareTo(r)>=0&&await function(o,u){const l=o.Vu.ce(u);return l.targetChanges.forEach((f,p)=>{if(f.resumeToken.approximateByteSize()>0){const m=o.Au.get(p);m&&o.Au.set(p,m.withResumeToken(f.resumeToken,u))}}),l.targetMismatches.forEach((f,p)=>{const m=o.Au.get(f);if(!m)return;o.Au.set(f,m.withResumeToken(mt.EMPTY_BYTE_STRING,m.snapshotVersion)),XI(o,f);const v=new si(m.target,f,p,m.sequenceNumber);Op(o,v)}),o.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Yc(t,r)}}async function Yc(t,e,n){if(!Ba(e))throw e;t.vu.add(1),await qa(t),t.bu.set("Offline"),n||(n=()=>KI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Ll(t)})}function eE(t,e){return e().catch(n=>Yc(t,n,e))}async function Ml(t){const e=Q(t),n=gi(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;mD(e);)try{const o=await ZP(e.localStore,r);if(o===null){e.Eu.length===0&&n.jo();break}r=o.batchId,gD(e,o)}catch(o){await Yc(e,o)}tE(e)&&nE(e)}function mD(t){return or(t)&&t.Eu.length<10}function gD(t,e){t.Eu.push(e);const n=gi(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function tE(t){return or(t)&&!gi(t).Uo()&&t.Eu.length>0}function nE(t){gi(t).start()}async function vD(t){gi(t).hu()}async function yD(t){const e=gi(t);for(const n of t.Eu)e.uu(n.mutations)}async function wD(t,e,n){const r=t.Eu.shift(),o=Cp.from(r,e,n);await eE(t,()=>t.remoteSyncer.applySuccessfulWrite(o)),await Ml(t)}async function bD(t,e){e&&gi(t).ou&&await async function(n,r){if(o=r.code,hP(o)&&o!==k.ABORTED){const u=n.Eu.shift();gi(n).Qo(),await eE(n,()=>n.remoteSyncer.rejectFailedWrite(u.batchId,r)),await Ml(n)}var o}(t,e),tE(t)&&nE(t)}async function Cw(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=or(n);n.vu.add(3),await qa(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Ll(n)}async function ID(t,e){const n=Q(t);e?(n.vu.delete(2),await Ll(n)):e||(n.vu.add(2),await qa(n),n.bu.set("Unknown"))}function Ps(t){return t.Su||(t.Su=function(e,n,r){const o=Q(e);return o.fu(),new aD(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(t.datastore,t.asyncQueue,{uo:dD.bind(null,t),ao:fD.bind(null,t),nu:pD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Mp(t)?Lp(t):t.bu.set("Unknown")):(await t.Su.stop(),ZI(t))})),t.Su}function gi(t){return t.Du||(t.Du=function(e,n,r){const o=Q(e);return o.fu(),new uD(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(t.datastore,t.asyncQueue,{uo:vD.bind(null,t),ao:bD.bind(null,t),au:yD.bind(null,t),cu:wD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Ml(t)):(await t.Du.stop(),t.Eu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class xp{constructor(e,n,r,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=u,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}static createAndSchedule(e,n,r,o,u){const l=Date.now()+r,f=new xp(e,n,l,o,u);return f.start(r),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Ba(t))return new M(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Wo(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class kw{constructor(){this.Cu=new Ce(B.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):G():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,o,u,l,f,p,m){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=u,this.fromCache=l,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,n,r,o,u){const l=[];return n.forEach(f=>{l.push({type:0,doc:f})}),new ys(e,n,us.emptySet(n),l,r,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Al(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class ED{constructor(){this.Nu=void 0,this.listeners=[]}}class _D{constructor(){this.queries=new Ns(e=>_I(e),Al),this.onlineState="Unknown",this.ku=new Set}}async function SD(t,e){const n=Q(t),r=e.query;let o=!1,u=n.queries.get(r);if(u||(o=!0,u=new ED),o)try{u.Nu=await n.onListen(r)}catch(l){const f=Up(l,`Initialization of query '${gf(e.query)}' failed`);return void e.onError(f)}n.queries.set(r,u),u.listeners.push(e),e.Mu(n.onlineState),u.Nu&&e.$u(u.Nu)&&Fp(n)}async function TD(t,e){const n=Q(t),r=e.query;let o=!1;const u=n.queries.get(r);if(u){const l=u.listeners.indexOf(e);l>=0&&(u.listeners.splice(l,1),o=u.listeners.length===0)}if(o)return n.queries.delete(r),n.onUnlisten(r)}function CD(t,e){const n=Q(t);let r=!1;for(const o of e){const u=o.query,l=n.queries.get(u);if(l){for(const f of l.listeners)f.$u(o)&&(r=!0);l.Nu=o}}r&&Fp(n)}function kD(t,e,n){const r=Q(t),o=r.queries.get(e);if(o)for(const u of o.listeners)u.onError(n);r.queries.delete(e)}function Fp(t){t.ku.forEach(e=>{e.next()})}class AD{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class iE{constructor(e){this.key=e}}class rE{constructor(e){this.key=e}}class RD{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ne(),this.mutatedKeys=ne(),this.tc=SI(e),this.ec=new us(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new kw,o=n?n.ec:this.ec;let u=n?n.mutatedKeys:this.mutatedKeys,l=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,m=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,b)=>{const _=o.get(v),T=Rl(this.query,b)?b:null,V=!!_&&this.mutatedKeys.has(_.key),y=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let I=!1;_&&T?_.data.isEqual(T.data)?V!==y&&(r.track({type:3,doc:T}),I=!0):this.rc(_,T)||(r.track({type:2,doc:T}),I=!0,(p&&this.tc(T,p)>0||m&&this.tc(T,m)<0)&&(f=!0)):!_&&T?(r.track({type:0,doc:T}),I=!0):_&&!T&&(r.track({type:1,doc:_}),I=!0,(p||m)&&(f=!0)),I&&(T?(l=l.add(T),u=y?u.add(v):u.delete(v)):(l=l.delete(v),u=u.delete(v)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const v=this.query.limitType==="F"?l.last():l.first();l=l.delete(v.key),u=u.delete(v.key),r.track({type:1,doc:v})}return{ec:l,ic:r,zi:f,mutatedKeys:u}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const o=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const u=e.ic.xu();u.sort((m,v)=>function(b,_){const T=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return T(b)-T(_)}(m.type,v.type)||this.tc(m.doc,v.doc)),this.oc(r);const l=n?this.uc():[],f=this.Zu.size===0&&this.current?1:0,p=f!==this.Xu;return this.Xu=f,u.length!==0||p?{snapshot:new ys(this.query,e.ec,o,u,e.mutatedKeys,f===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:l}:{cc:l}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new kw,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ne(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new rE(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new iE(r))}),n}hc(e){this.Yu=e.ir,this.Zu=ne();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ys.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class ND{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PD{constructor(e){this.key=e,this.fc=!1}}class DD{constructor(e,n,r,o,u,l){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=l,this.dc={},this.wc=new Ns(f=>_I(f),Al),this._c=new Map,this.mc=new Set,this.gc=new Ce(B.comparator),this.yc=new Map,this.Ic=new Np,this.Tc={},this.Ec=new Map,this.Ac=vs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function OD(t,e){const n=HD(t);let r,o;const u=n.wc.get(e);if(u)r=u.targetId,n.sharedClientState.addLocalQueryTarget(r),o=u.view.lc();else{const l=await eD(n.localStore,xn(e)),f=n.sharedClientState.addLocalQueryTarget(l.targetId);r=l.targetId,o=await LD(n,e,r,f==="current",l.resumeToken),n.isPrimaryClient&&JI(n.remoteStore,l)}return o}async function LD(t,e,n,r,o){t.Rc=(b,_,T)=>async function(V,y,I,S){let D=y.view.sc(I);D.zi&&(D=await _w(V.localStore,y.query,!1).then(({documents:oe})=>y.view.sc(oe,D)));const $=S&&S.targetChanges.get(y.targetId),Z=y.view.applyChanges(D,V.isPrimaryClient,$);return Rw(V,y.targetId,Z.cc),Z.snapshot}(t,b,_,T);const u=await _w(t.localStore,e,!0),l=new RD(e,u.ir),f=l.sc(u.documents),p=Ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",o),m=l.applyChanges(f,t.isPrimaryClient,p);Rw(t,n,m.cc);const v=new ND(e,n,l);return t.wc.set(e,v),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),m.snapshot}async function MD(t,e){const n=Q(t),r=n.wc.get(e),o=n._c.get(r.targetId);if(o.length>1)return n._c.set(r.targetId,o.filter(u=>!Al(u,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await If(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),QI(n.remoteStore,r.targetId),Ef(n,r.targetId)}).catch(ja)):(Ef(n,r.targetId),await If(n.localStore,r.targetId,!0))}async function xD(t,e,n){const r=qD(t);try{const o=await function(u,l){const f=Q(u),p=We.now(),m=l.reduce((_,T)=>_.add(T.key),ne());let v,b;return f.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=Un(),V=ne();return f.Zi.getEntries(_,m).next(y=>{T=y,T.forEach((I,S)=>{S.isValidDocument()||(V=V.add(I))})}).next(()=>f.localDocuments.getOverlayedDocuments(_,T)).next(y=>{v=y;const I=[];for(const S of l){const D=oP(S,v.get(S.key).overlayedDocument);D!=null&&I.push(new sr(S.key,D,mI(D.value.mapValue),Pn.exists(!0)))}return f.mutationQueue.addMutationBatch(_,p,I,l)}).next(y=>{b=y;const I=y.applyToLocalDocumentSet(v,V);return f.documentOverlayCache.saveOverlays(_,y.batchId,I)})}).then(()=>({batchId:b.batchId,changes:CI(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),function(u,l,f){let p=u.Tc[u.currentUser.toKey()];p||(p=new Ce(he)),p=p.insert(l,f),u.Tc[u.currentUser.toKey()]=p}(r,o.batchId,n),await Ga(r,o.changes),await Ml(r.remoteStore)}catch(o){const u=Up(o,"Failed to persist write");n.reject(u)}}async function sE(t,e){const n=Q(t);try{const r=await QP(n.localStore,e);e.targetChanges.forEach((o,u)=>{const l=n.yc.get(u);l&&(Ie(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?l.fc=!0:o.modifiedDocuments.size>0?Ie(l.fc):o.removedDocuments.size>0&&(Ie(l.fc),l.fc=!1))}),await Ga(n,r,e)}catch(r){await ja(r)}}function Aw(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.wc.forEach((u,l)=>{const f=l.view.Mu(e);f.snapshot&&o.push(f.snapshot)}),function(u,l){const f=Q(u);f.onlineState=l;let p=!1;f.queries.forEach((m,v)=>{for(const b of v.listeners)b.Mu(l)&&(p=!0)}),p&&Fp(f)}(r.eventManager,e),o.length&&r.dc.nu(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UD(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const o=r.yc.get(e),u=o&&o.key;if(u){let l=new Ce(B.comparator);l=l.insert(u,lt.newNoDocument(u,K.min()));const f=ne().add(u),p=new Dl(K.min(),new Map,new Ce(he),l,f);await sE(r,p),r.gc=r.gc.remove(u),r.yc.delete(e),Vp(r)}else await If(r.localStore,e,!1).then(()=>Ef(r,e,n)).catch(ja)}async function FD(t,e){const n=Q(t),r=e.batch.batchId;try{const o=await JP(n.localStore,e);aE(n,r,null),oE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ga(n,o)}catch(o){await ja(o)}}async function VD(t,e,n){const r=Q(t);try{const o=await function(u,l){const f=Q(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let m;return f.mutationQueue.lookupMutationBatch(p,l).next(v=>(Ie(v!==null),m=v.keys(),f.mutationQueue.removeMutationBatch(p,v))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,m,l)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,m)).next(()=>f.localDocuments.getDocuments(p,m))})}(r.localStore,e);aE(r,e,n),oE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ga(r,o)}catch(o){await ja(o)}}function oE(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function aE(t,e,n){const r=Q(t);let o=r.Tc[r.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),r.Tc[r.currentUser.toKey()]=o}}function Ef(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||uE(t,r)})}function uE(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(QI(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Vp(t))}function Rw(t,e,n){for(const r of n)r instanceof iE?(t.Ic.addReference(r.key,e),jD(t,r)):r instanceof rE?(F("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||uE(t,r.key)):G()}function jD(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.mc.add(r),Vp(t))}function Vp(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new B(be.fromString(e)),r=t.Ac.next();t.yc.set(r,new PD(n)),t.gc=t.gc.insert(n,r),JI(t.remoteStore,new si(xn(Sp(n.path)),r,"TargetPurposeLimboResolution",yp.ct))}}async function Ga(t,e,n){const r=Q(t),o=[],u=[],l=[];r.wc.isEmpty()||(r.wc.forEach((f,p)=>{l.push(r.Rc(p,e,n).then(m=>{if((m||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(p.targetId,m!=null&&m.fromCache?"not-current":"current"),m){o.push(m);const v=Dp.Li(p.targetId,m);u.push(v)}}))}),await Promise.all(l),r.dc.nu(o),await async function(f,p){const m=Q(f);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>N.forEach(p,b=>N.forEach(b.Fi,_=>m.persistence.referenceDelegate.addReference(v,b.targetId,_)).next(()=>N.forEach(b.Bi,_=>m.persistence.referenceDelegate.removeReference(v,b.targetId,_)))))}catch(v){if(!Ba(v))throw v;F("LocalStore","Failed to update sequence numbers: "+v)}for(const v of p){const b=v.targetId;if(!v.fromCache){const _=m.Ji.get(b),T=_.snapshotVersion,V=_.withLastLimboFreeSnapshotVersion(T);m.Ji=m.Ji.insert(b,V)}}}(r.localStore,u))}async function BD(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await zI(n.localStore,e);n.currentUser=e,function(o,u){o.Ec.forEach(l=>{l.forEach(f=>{f.reject(new M(k.CANCELLED,u))})}),o.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ga(n,r.er)}}function $D(t,e){const n=Q(t),r=n.yc.get(e);if(r&&r.fc)return ne().add(r.key);{let o=ne();const u=n._c.get(e);if(!u)return o;for(const l of u){const f=n.wc.get(l);o=o.unionWith(f.view.nc)}return o}}function HD(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$D.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UD.bind(null,e),e.dc.nu=CD.bind(null,e.eventManager),e.dc.Pc=kD.bind(null,e.eventManager),e}function qD(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VD.bind(null,e),e}class Nw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ol(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return YP(this.persistence,new KP,e.initialUser,this.serializer)}createPersistence(e){return new GP(Pp.zs,this.serializer)}createSharedClientState(e){return new nD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Aw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BD.bind(null,this.syncEngine),await ID(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _D}createDatastore(e){const n=Ol(e.databaseInfo.databaseId),r=(o=e.databaseInfo,new oD(o));var o;return function(u,l,f,p){return new cD(u,l,f,p)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,o=e.asyncQueue,u=f=>Aw(this.syncEngine,f,0),l=Tw.D()?new Tw:new iD,new hD(n,r,o,u,l);var n,r,o,u,l}createSyncEngine(e,n){return function(r,o,u,l,f,p,m){const v=new DD(r,o,u,l,f,p);return m&&(v.vc=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);F("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await qa(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class zD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class KD{constructor(e,n,r,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=o,this.user=ct.UNAUTHENTICATED,this.clientId=dI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async u=>{F("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(F("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $d(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async o=>{r.isEqual(o)||(await zI(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YD(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(o=>Cw(e.remoteStore,o)),t.setAppCheckTokenChangeListener((o,u)=>Cw(e.remoteStore,u)),t._onlineComponents=e}function WD(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function YD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await $d(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!WD(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await $d(t,new Nw)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await $d(t,new Nw);return t._offlineComponents}async function cE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Pw(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Pw(t,new GD))),t._onlineComponents}function JD(t){return cE(t).then(e=>e.syncEngine)}async function Dw(t){const e=await cE(t),n=e.eventManager;return n.onListen=OD.bind(null,e.syncEngine),n.onUnlisten=MD.bind(null,e.syncEngine),n}/**
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
 */function lE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ow=new Map;/**
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
 */function hE(t,e,n){if(!n)throw new M(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QD(t,e,n,r){if(e===!0&&r===!0)throw new M(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lw(t){if(!B.isDocumentKey(t))throw new M(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mw(t){if(B.isDocumentKey(t))throw new M(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ia(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xl(t);throw new M(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class xw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Ul{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yN;switch(n.type){case"firstParty":return new EN(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ow.get(e);n&&(F("ComponentProvider","Removing Datastore"),Ow.delete(e),n.terminate())}(this),Promise.resolve()}}function XD(t,e,n,r={}){var o;const u=(t=ia(t,Ul))._getSettings(),l=`${e}:${n}`;if(u.host!=="firestore.googleapis.com"&&u.host!==l&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},u),{host:l,ssl:!1})),r.mockUserToken){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ct.MOCK_USER;else{f=OS(r.mockUserToken,(o=t._app)===null||o===void 0?void 0:o.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new M(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ct(m)}t._authCredentials=new wN(new hI(f,p))}}/**
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
 */class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class ar{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ar(this.firestore,e,this._query)}}class ui extends ar{constructor(e,n,r){super(e,n,Sp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new B(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function Uw(t,e,...n){if(t=W(t),hE("collection","path",e),t instanceof Ul){const r=be.fromString(e,...n);return Mw(r),new ui(t,null,r)}{if(!(t instanceof Mt||t instanceof ui))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Mw(r),new ui(t.firestore,null,r)}}function ZD(t,e,...n){if(t=W(t),arguments.length===1&&(e=dI.A()),hE("doc","path",e),t instanceof Ul){const r=be.fromString(e,...n);return Lw(r),new Mt(t,null,new B(r))}{if(!(t instanceof Mt||t instanceof ui))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Lw(r),new Mt(t.firestore,t instanceof ui?t.converter:null,new B(r))}}/**
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
 */class eO{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new WI(this,"async_queue_retry"),this.Xc=()=>{const n=Bd();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Bd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Bd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Yi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ba(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const o=function(u){let l=u.message||"";return u.stack&&(l=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const o=xp.createAndSchedule(this,e,n,r,u=>this.na(u));return this.zc.push(o),o}Zc(){this.Wc&&G()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Fw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const o of n)if(o in r&&typeof r[o]=="function")return!0;return!1}(t,["next","error","complete"])}class Jc extends Ul{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new eO,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fE(this),this._firestoreClient.terminate()}}function tO(t,e){const n=typeof t=="object"?t:Pf(),r=typeof t=="string"?t:e||"(default)",o=Ta(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const u=PS("firestore");u&&XD(o,...u)}return o}function dE(t){return t._firestoreClient||fE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fE(t){var e,n,r;const o=t._freezeSettings(),u=function(l,f,p,m){return new LN(l,f,p,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,lE(m.experimentalLongPollingOptions),m.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,o);t._firestoreClient=new KD(t._authCredentials,t._appCheckCredentials,t._queue,u),!((n=o.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=o.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}/**
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
 */class ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ws(mt.fromBase64String(e))}catch(n){throw new M(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ws(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pE{constructor(e){this._methodName=e}}/**
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
 */class Bp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const nO=/^__.*__$/;class iO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new $a(e,this.data,n,this.fieldTransforms)}}function mE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class $p{constructor(e,n,r,o,u,l){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=o,u===void 0&&this.ua(),this.fieldTransforms=u||[],this.fieldMask=l||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new $p(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.aa({path:r,la:!1});return o.fa(e),o}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.aa({path:r,la:!1});return o.ua(),o}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Qc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(mE(this.ca)&&nO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class rO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ol(e)}ya(e,n,r,o=!1){return new $p({ca:e,methodName:n,ga:r,path:ht.emptyPath(),la:!1,ma:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gE(t){const e=t._freezeSettings(),n=Ol(t._databaseId);return new rO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sO(t,e,n,r,o,u={}){const l=t.ya(u.merge||u.mergeFields?2:0,e,n,o);wE("Data must be an object, but it was:",l,r);const f=vE(r,l);let p,m;if(u.merge)p=new Qt(l.fieldMask),m=l.fieldTransforms;else if(u.mergeFields){const v=[];for(const b of u.mergeFields){const _=aO(e,b,n);if(!l.contains(_))throw new M(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);cO(v,_)||v.push(_)}p=new Qt(v),m=l.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,m=l.fieldTransforms;return new iO(new $t(f),p,m)}function oO(t,e,n,r=!1){return Hp(n,t.ya(r?4:3,e))}function Hp(t,e){if(yE(t=W(t)))return wE("Unsupported field value:",e,t),vE(t,e);if(t instanceof pE)return function(n,r){if(!mE(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const o=[];let u=0;for(const l of n){let f=Hp(l,r.wa(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(t,e)}return function(n,r){if((n=W(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eP(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=We.fromDate(n);return{timestampValue:Wc(r.serializer,o)}}if(n instanceof We){const o=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wc(r.serializer,o)}}if(n instanceof Bp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ws)return{bytesValue:jI(r.serializer,n._byteString)};if(n instanceof Mt){const o=r.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw r._a(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Rp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${xl(n)}`)}(t,e)}function vE(t,e){const n={};return fI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(t,(r,o)=>{const u=Hp(o,e.ha(r));u!=null&&(n[r]=u)}),{mapValue:{fields:n}}}function yE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Bp||t instanceof ws||t instanceof Mt||t instanceof pE)}function wE(t,e,n){if(!yE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=xl(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function aO(t,e,n){if((e=W(e))instanceof jp)return e._internalPath;if(typeof e=="string")return bE(t,e);throw Qc("Field path arguments must be of type string or ",t,!1,void 0,n)}const uO=new RegExp("[~\\*/\\[\\]]");function bE(t,e,n){if(e.search(uO)>=0)throw Qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jp(...e.split("."))._internalPath}catch{throw Qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qc(t,e,n,r,o){const u=r&&!r.isEmpty(),l=o!==void 0;let f=`Function ${e}() called with invalid data`;n&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(u||l)&&(p+=" (found",u&&(p+=` in field ${r}`),l&&(p+=` in document ${o}`),p+=")"),new M(k.INVALID_ARGUMENT,f+t+p)}function cO(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class IE{constructor(e,n,r,o,u){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lO extends IE{data(){return super.data()}}function qp(t,e){return typeof e=="string"?bE(t,e):e instanceof jp?e._internalPath:e._delegate._internalPath}/**
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
 */function hO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gp{}class EE extends Gp{}function dO(t,e,...n){let r=[];e instanceof Gp&&r.push(e),r=r.concat(n),function(o){const u=o.filter(f=>f instanceof Kp).length,l=o.filter(f=>f instanceof zp).length;if(u>1||u>0&&l>0)throw new M(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const o of r)t=o._apply(t);return t}class zp extends EE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zp(e,n,r)}_apply(e){const n=this._parse(e);return _E(e._query,n),new ar(e.firestore,e.converter,pf(e._query,n))}_parse(e){const n=gE(e.firestore);return function(o,u,l,f,p,m,v){let b;if(p.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new M(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){jw(v,m);const _=[];for(const T of v)_.push(Vw(f,o,T));b={arrayValue:{values:_}}}else b=Vw(f,o,v)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||jw(v,m),b=oO(l,u,v,m==="in"||m==="not-in");return qe.create(p,m,b)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Kp extends Gp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Kp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,o){let u=r;const l=o.getFlattenedFilters();for(const f of l)_E(u,f),u=pf(u,f)}(e._query,n),new ar(e.firestore,e.converter,pf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wp extends EE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wp(e,n)}_apply(e){const n=function(r,o,u){if(r.startAt!==null)throw new M(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const l=new os(o,u);return function(f,p){if(Tp(f)===null){const m=kl(f);m!==null&&SE(f,m,p.field)}}(r,l),l}(e._query,this._field,this._direction);return new ar(e.firestore,e.converter,function(r,o){const u=r.explicitOrderBy.concat([o]);return new Rs(r.path,r.collectionGroup,u,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function fO(t,e="asc"){const n=e,r=qp("orderBy",t);return Wp._create(r,n)}function Vw(t,e,n){if(typeof(n=W(n))=="string"){if(n==="")throw new M(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!EI(e)&&n.indexOf("/")!==-1)throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!B.isDocumentKey(r))throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ow(t,new B(r))}if(n instanceof Mt)return ow(t,n._key);throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xl(n)}.`)}function jw(t,e){if(!Array.isArray(t)||t.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _E(t,e){if(e.isInequality()){const r=kl(t),o=e.field;if(r!==null&&!r.isEqual(o))throw new M(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${o.toString()}'`);const u=Tp(t);u!==null&&SE(t,o,u)}const n=function(r,o){for(const u of r)for(const l of u.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function SE(t,e,n){if(!n.isEqual(e))throw new M(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class pO{convertValue(e,n="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return As(e,(o,u)=>{r[o]=this.convertValue(u,n)}),r}convertGeoPoint(e){return new Bp(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ba(e));default:return null}}convertTimestamp(e){const n=mi(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Ie(GI(r));const o=new Ia(r.get(1),r.get(3)),u=new B(r.popFirst(5));return o.isEqual(n)||Mn(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function mO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TE extends IE{constructor(e,n,r,o,u,l){super(e,n,r,o,l),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Tc extends TE{data(e={}){return super.data(e)}}class gO{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Jo(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Tc(this._firestore,this._userDataWriter,r.key,r,new Jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let u=0;return r._snapshot.docChanges.map(l=>{const f=new Tc(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Jo(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const f=new Tc(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Jo(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let p=-1,m=-1;return l.type!==0&&(p=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),m=u.indexOf(l.doc.key)),{type:vO(l.type),doc:f,oldIndex:p,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class CE extends pO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function yO(t,e){const n=ia(t.firestore,Jc),r=ZD(t),o=mO(t.converter,e);return bO(n,[sO(gE(t.firestore),"addDoc",r._key,o,t.converter!==null,{}).toMutation(r._key,Pn.exists(!1))]).then(()=>r)}function wO(t,...e){var n,r,o;t=W(t);let u={includeMetadataChanges:!1},l=0;typeof e[l]!="object"||Fw(e[l])||(u=e[l],l++);const f={includeMetadataChanges:u.includeMetadataChanges};if(Fw(e[l])){const b=e[l];e[l]=(n=b.next)===null||n===void 0?void 0:n.bind(b),e[l+1]=(r=b.error)===null||r===void 0?void 0:r.bind(b),e[l+2]=(o=b.complete)===null||o===void 0?void 0:o.bind(b)}let p,m,v;if(t instanceof Mt)m=ia(t.firestore,Jc),v=Sp(t._key.path),p={next:b=>{e[l]&&e[l](IO(m,t,b))},error:e[l+1],complete:e[l+2]};else{const b=ia(t,ar);m=ia(b.firestore,Jc),v=b._query;const _=new CE(m);p={next:T=>{e[l]&&e[l](new gO(m,_,b,T))},error:e[l+1],complete:e[l+2]},hO(t._query)}return function(b,_,T,V){const y=new zD(V),I=new AD(_,y,T);return b.asyncQueue.enqueueAndForget(async()=>SD(await Dw(b),I)),()=>{y.Dc(),b.asyncQueue.enqueueAndForget(async()=>TD(await Dw(b),I))}}(dE(m),v,f,p)}function bO(t,e){return function(n,r){const o=new Yi;return n.asyncQueue.enqueueAndForget(async()=>xD(await JD(n),r,o)),o.promise}(dE(t),e)}function IO(t,e,n){const r=n.docs.get(e._key),o=new CE(t);return new TE(t,o,e._key,r,new Jo(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ks=n})(vi),hi(new Dn("firestore",(n,{instanceIdentifier:r,options:o})=>{const u=n.getProvider("app").getImmediate(),l=new Jc(new bN(n.getProvider("auth-internal")),new SN(n.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new M(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(f.options.projectId,p)}(u,r),u);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Xt(tw,"3.13.0",t),Xt(tw,"3.13.0","esm2017")})();/**
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
 */class EO{constructor(e,n){this._delegate=e,this.firebase=n,Pc(e,new Dn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),l1(this._delegate)))}_getService(e,n=ci){var r;this._delegate.checkDestroyed();const o=this._delegate.container.getProvider(e);return!o.isInitialized()&&((r=o.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&o.initialize(),o.getImmediate({identifier:n})}_removeServiceInstance(e,n=ci){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Pc(this._delegate,e)}_addOrOverwriteComponent(e){c1(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const _O={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Bw=new nr("app-compat","Firebase",_O);/**
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
 */function SO(t){const e={},n={__esModule:!0,initializeApp:u,app:o,registerVersion:Xt,setLogLevel:d1,onLog:h1,apps:null,SDK_VERSION:vi,INTERNAL:{registerComponent:f,removeApp:r,useAsService:p,modularAPIs:QT}};n.default=n,Object.defineProperty(n,"apps",{get:l});function r(m){delete e[m]}function o(m){if(m=m||ci,!g0(e,m))throw Bw.create("no-app",{appName:m});return e[m]}o.App=t;function u(m,v={}){const b=el(m,v);if(g0(e,b.name))return e[b.name];const _=new t(b,n);return e[b.name]=_,_}function l(){return Object.keys(e).map(m=>e[m])}function f(m){const v=m.name,b=v.replace("-compat","");if(hi(m)&&m.type==="PUBLIC"){const _=(T=o())=>{if(typeof T[b]!="function")throw Bw.create("invalid-app-argument",{appName:v});return T[b]()};m.serviceProps!==void 0&&Ac(_,m.serviceProps),n[b]=_,t.prototype[b]=function(...T){return this._getService.bind(this,v).apply(this,m.multipleInstances?T:[])}}return m.type==="PUBLIC"?n[b]:null}function p(m,v){return v==="serverAuth"?null:v}return n}/**
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
 */function kE(){const t=SO(EO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:kE,extendNamespace:e,createSubscribe:s1,ErrorFactory:nr,deepExtend:Ac});function e(n){Ac(t,n)}return t}const TO=kE();/**
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
 */const $w=new Zc("@firebase/app-compat"),CO="@firebase/app-compat",kO="0.2.13";/**
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
 */function AO(t){Xt(CO,kO,t)}/**
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
 */if(MS()&&self.firebase!==void 0){$w.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&$w.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const j=TO;AO();var RO="firebase",NO="9.23.0";/**
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
 */j.registerVersion(RO,NO,"app-compat");/**
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
 */function tr(){return window}/**
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
 */const PO=2e3;async function DO(t,e,n){var r;const{BuildInfo:o}=tr();Zt(e.sessionId,"AuthEvent did not contain a session ID");const u=await UO(e.sessionId),l={};return Es()?l.ibi=o.packageName:ka()?l.apn=o.packageName:et(t,"operation-not-supported-in-this-environment"),o.displayName&&(l.appDisplayName=o.displayName),l.sessionId=u,Jd(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,l)}async function OO(t){const{BuildInfo:e}=tr(),n={};Es()?n.iosBundleId=e.packageName:ka()?n.androidPackageName=e.packageName:et(t,"operation-not-supported-in-this-environment"),await ob(t,n)}function LO(t){const{cordova:e}=tr();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let o=null;r?e.plugins.browsertab.openUrl(t):o=e.InAppBrowser.open(t,bC()?"_blank":"_system","location=yes"),n(o)})})}async function MO(t,e,n){const{cordova:r}=tr();let o=()=>{};try{await new Promise((u,l)=>{let f=null;function p(){var b;u();const _=(b=r.plugins.browsertab)===null||b===void 0?void 0:b.close;typeof _=="function"&&_(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function m(){f||(f=window.setTimeout(()=>{l(ot(t,"redirect-cancelled-by-user"))},PO))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),ka()&&document.addEventListener("visibilitychange",v,!1),o=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",v,!1),f&&window.clearTimeout(f)}})}finally{o()}}function xO(t){var e,n,r,o,u,l,f,p,m,v;const b=tr();P(typeof((e=b==null?void 0:b.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=b==null?void 0:b.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((u=(o=(r=b==null?void 0:b.cordova)===null||r===void 0?void 0:r.plugins)===null||o===void 0?void 0:o.browsertab)===null||u===void 0?void 0:u.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((p=(f=(l=b==null?void 0:b.cordova)===null||l===void 0?void 0:l.plugins)===null||f===void 0?void 0:f.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((v=(m=b==null?void 0:b.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||v===void 0?void 0:v.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function UO(t){const e=FO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(o=>o.toString(16).padStart(2,"0")).join("")}function FO(t){if(Zt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const VO=20;class jO extends rb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function BO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:qO(),postBody:null,tenantId:t.tenantId,error:ot(t,"no-auth-event")}}function $O(t,e){return _f()._set(Sf(t),e)}async function Hw(t){const e=await _f()._get(Sf(t));return e&&await _f()._remove(Sf(t)),e}function HO(t,e){var n,r;const o=zO(e);if(o.includes("/__/auth/callback")){const u=Cc(o),l=u.firebaseError?GO(decodeURIComponent(u.firebaseError)):null,f=(r=(n=l==null?void 0:l.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],p=f?ot(f):null;return p?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:o,postBody:null}}return null}function qO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<VO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function _f(){return Lt(ol)}function Sf(t){return zi("authEvent",t.config.apiKey,t.name)}function GO(t){try{return JSON.parse(t)}catch{return null}}function zO(t){const e=Cc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Cc(n).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Cc(o).link||o||r||n||t}function Cc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Xr(n.join("?"))}/**
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
 */const KO=500;class WO{constructor(){this._redirectPersistence=fi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ll,this._overrideRedirectResult=Kf}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new jO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,o){xO(e);const u=await this._initialize(e);await u.initialized(),u.resetRedirect(),IA(),await this._originValidation(e);const l=BO(e,r,o);await $O(e,l);const f=await DO(e,l,n),p=await LO(f);return MO(e,u,p)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:o,BuildInfo:u}=tr(),l=setTimeout(async()=>{await Hw(e),n.onEvent(qw())},KO),f=async v=>{clearTimeout(l);const b=await Hw(e);let _=null;b&&(v!=null&&v.url)&&(_=HO(b,v.url)),n.onEvent(_||qw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,f);const p=o,m=`${u.packageName.toLowerCase()}://`;tr().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(m)&&f({url:v}),typeof p=="function")try{p(v)}catch(b){console.error(b)}}}}const YO=WO;function qw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ot("no-auth-event")}}/**
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
 */function JO(t,e){xe(t)._logFramework(e)}var QO="@firebase/auth-compat",XO="0.4.2";/**
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
 */const ZO=1e3;function ra(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function eL(){return ra()==="http:"||ra()==="https:"}function AE(t=Ge()){return!!((ra()==="file:"||ra()==="ionic:"||ra()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function tL(){return Af()||n1()}function nL(){return r1()&&(document==null?void 0:document.documentMode)===11}function iL(t=Ge()){return/Edge\/\d+/.test(t)}function rL(t=Ge()){return nL()||iL(t)}function RE(){try{const t=self.localStorage,e=Ra();if(t)return t.setItem(e,"1"),t.removeItem(e),rL()?Rc():!0}catch{return Yp()&&Rc()}return!1}function Yp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Hd(){return(eL()||i1()||AE())&&!tL()&&RE()&&!Yp()}function NE(){return AE()&&typeof document<"u"}async function sL(){return NE()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},ZO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function oL(){return typeof window<"u"?window:null}/**
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
 */const Ot={LOCAL:"local",NONE:"none",SESSION:"session"},$o=P,PE="persistence";function aL(t,e){if($o(Object.values(Ot).includes(e),t,"invalid-persistence-type"),Af()){$o(e!==Ot.SESSION,t,"unsupported-persistence-type");return}if(n1()){$o(e===Ot.NONE,t,"unsupported-persistence-type");return}if(Yp()){$o(e===Ot.NONE||e===Ot.LOCAL&&Rc(),t,"unsupported-persistence-type");return}$o(e===Ot.NONE||RE(),t,"unsupported-persistence-type")}async function Tf(t){await t._initializationPromise;const e=DE(),n=zi(PE,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function uL(t,e){const n=DE();if(!n)return[];const r=zi(PE,t,e);switch(n.getItem(r)){case Ot.NONE:return[cs];case Ot.LOCAL:return[hs,fi];case Ot.SESSION:return[fi];default:return[]}}function DE(){var t;try{return((t=oL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const cL=P;class oi{constructor(){this.browserResolver=Lt(ab),this.cordovaResolver=Lt(YO),this.underlyingResolver=null,this._redirectPersistence=fi,this._completeRedirectFn=ll,this._overrideRedirectResult=Kf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,o)}async _openRedirect(e,n,r,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,o)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return NE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return cL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await sL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function OE(t){return t.unwrap()}function lL(t){return t.wrapped()}/**
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
 */function hL(t){return LE(t)}function dL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const o=e;o.resolver=new fL(t,kk(t,e))}else if(r){const o=LE(e),u=e;o&&(u.credential=o,u.tenantId=r.tenantId||void 0,u.email=r.email||void 0,u.phoneNumber=r.phoneNumber||void 0)}}function LE(t){const{_tokenResponse:e}=t instanceof It?t.customData:t;if(!e)return null;if(!(t instanceof It)&&"temporaryProof"in e&&"phoneNumber"in e)return Qi.credentialFromResult(t);const n=e.providerId;if(!n||n===Vo.PASSWORD)return null;let r;switch(n){case Vo.GOOGLE:r=cn;break;case Vo.FACEBOOK:r=un;break;case Vo.GITHUB:r=ln;break;case Vo.TWITTER:r=hn;break;default:const{oauthIdToken:o,oauthAccessToken:u,oauthTokenSecret:l,pendingToken:f,nonce:p}=e;return!u&&!l&&!o&&!f?null:f?n.startsWith("saml.")?ls._create(n,f):vn._fromParams({providerId:n,signInMethod:n,pendingToken:f,idToken:o,accessToken:u}):new ts(n).credential({idToken:o,accessToken:u,rawNonce:p})}return t instanceof It?r.credentialFromError(t):r.credentialFromResult(t)}function St(t,e){return e.catch(n=>{throw n instanceof It&&dL(t,n),n}).then(n=>{const r=n.operationType,o=n.user;return{operationType:r,credential:hL(n),additionalUserInfo:Ek(n),user:An.getOrCreate(o)}})}async function Cf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>St(t,n.confirm(r))}}class fL{constructor(e,n){this.resolver=n,this.auth=lL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return St(OE(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class An{constructor(e){this._delegate=e,this.multiFactor=Pk(e)}static getOrCreate(e){return An.USER_MAP.has(e)||An.USER_MAP.set(e,new An(e)),An.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return St(this.auth,$1(this._delegate,e))}async linkWithPhoneNumber(e,n){return Cf(this.auth,uA(this._delegate,e,n))}async linkWithPopup(e){return St(this.auth,vA(this._delegate,e,oi))}async linkWithRedirect(e){return await Tf(xe(this.auth)),CA(this._delegate,e,oi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return St(this.auth,H1(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Cf(this.auth,cA(this._delegate,e,n))}reauthenticateWithPopup(e){return St(this.auth,gA(this._delegate,e,oi))}async reauthenticateWithRedirect(e){return await Tf(xe(this.auth)),SA(this._delegate,e,oi)}sendEmailVerification(e){return hk(this._delegate,e)}async unlink(e){return await QC(this._delegate,e),this}updateEmail(e){return mk(this._delegate,e)}updatePassword(e){return gk(this._delegate,e)}updatePhoneNumber(e){return lA(this._delegate,e)}updateProfile(e){return pk(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return dk(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}An.USER_MAP=new WeakMap;/**
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
 */const Ho=P;class kf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ho(r,"invalid-api-key",{appName:e.name}),Ho(r,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?oi:void 0;this._delegate=n.initialize({options:{persistence:pL(r,e.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(tC),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?An.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){L1(this._delegate,e,n)}applyActionCode(e){return nk(this._delegate,e)}checkActionCode(e){return q1(this._delegate,e)}confirmPasswordReset(e,n){return tk(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return St(this._delegate,rk(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return lk(this._delegate,e)}isSignInWithEmailLink(e){return ak(this._delegate,e)}async getRedirectResult(){Ho(Hd(),this._delegate,"operation-not-supported-in-this-environment");const e=await AA(this._delegate,oi);return e?St(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){JO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:o,error:u,complete:l}=Gw(e,n,r);return this._delegate.onAuthStateChanged(o,u,l)}onIdTokenChanged(e,n,r){const{next:o,error:u,complete:l}=Gw(e,n,r);return this._delegate.onIdTokenChanged(o,u,l)}sendSignInLinkToEmail(e,n){return ok(this._delegate,e,n)}sendPasswordResetEmail(e,n){return ek(this._delegate,e,n||void 0)}async setPersistence(e){aL(this._delegate,e);let n;switch(e){case Ot.SESSION:n=fi;break;case Ot.LOCAL:n=await Lt(hs)._isAvailable()?hs:ol;break;case Ot.NONE:n=cs;break;default:return et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return St(this._delegate,JC(this._delegate))}signInWithCredential(e){return St(this._delegate,sl(this._delegate,e))}signInWithCustomToken(e){return St(this._delegate,ZC(this._delegate,e))}signInWithEmailAndPassword(e,n){return St(this._delegate,sk(this._delegate,e,n))}signInWithEmailLink(e,n){return St(this._delegate,uk(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Cf(this._delegate,aA(this._delegate,e,n))}async signInWithPopup(e){return Ho(Hd(),this._delegate,"operation-not-supported-in-this-environment"),St(this._delegate,mA(this._delegate,e,oi))}async signInWithRedirect(e){return Ho(Hd(),this._delegate,"operation-not-supported-in-this-environment"),await Tf(this._delegate),EA(this._delegate,e,oi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ik(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}kf.Persistence=Ot;function Gw(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const o=r;return{next:l=>o(l&&An.getOrCreate(l)),error:e,complete:n}}function pL(t,e){const n=uL(t,e);if(typeof self<"u"&&!n.includes(hs)&&n.push(hs),typeof window<"u")for(const r of[ol,fi])n.includes(r)||n.push(r);return n.includes(cs)||n.push(cs),n}/**
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
 */class Jp{constructor(){this.providerId="phone",this._delegate=new Qi(OE(j.auth()))}static credential(e,n){return Qi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Jp.PHONE_SIGN_IN_METHOD=Qi.PHONE_SIGN_IN_METHOD;Jp.PROVIDER_ID=Qi.PROVIDER_ID;/**
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
 */const mL=P;class gL{constructor(e,n,r=j.app()){var o;mL((o=r.options)===null||o===void 0?void 0:o.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new sA(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const vL="auth-compat";function yL(t){t.INTERNAL.registerComponent(new Dn(vL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new kf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Wr.EMAIL_SIGNIN,PASSWORD_RESET:Wr.PASSWORD_RESET,RECOVER_EMAIL:Wr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Wr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Wr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Wr.VERIFY_EMAIL}},EmailAuthProvider:Vn,FacebookAuthProvider:un,GithubAuthProvider:ln,GoogleAuthProvider:cn,OAuthProvider:ts,SAMLAuthProvider:Oc,PhoneAuthProvider:Jp,PhoneMultiFactorGenerator:ub,RecaptchaVerifier:gL,TwitterAuthProvider:hn,Auth:kf,AuthCredential:_s,Error:It}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(QO,XO)}yL(j);function wL(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ME={exports:{}};(function(t){(function(){var e=window.CustomEvent;(!e||typeof e=="object")&&(e=function(I,S){S=S||{};var D=document.createEvent("CustomEvent");return D.initCustomEvent(I,!!S.bubbles,!!S.cancelable,S.detail||null),D},e.prototype=window.Event.prototype);function n(y){for(;y&&y!==document.body;){var I=window.getComputedStyle(y),S=function(D,$){return!(I[D]===void 0||I[D]===$)};if(I.opacity<1||S("zIndex","auto")||S("transform","none")||S("mixBlendMode","normal")||S("filter","none")||S("perspective","none")||I.isolation==="isolate"||I.position==="fixed"||I.webkitOverflowScrolling==="touch")return!0;y=y.parentElement}return!1}function r(y){for(;y;){if(y.localName==="dialog")return y;y=y.parentElement}return null}function o(y){y&&y.blur&&y!==document.body&&y.blur()}function u(y,I){for(var S=0;S<y.length;++S)if(y[S]===I)return!0;return!1}function l(y){return!y||!y.hasAttribute("method")?!1:y.getAttribute("method").toLowerCase()==="dialog"}function f(y){if(this.dialog_=y,this.replacedStyleTop_=!1,this.openAsModal_=!1,y.hasAttribute("role")||y.setAttribute("role","dialog"),y.show=this.show.bind(this),y.showModal=this.showModal.bind(this),y.close=this.close.bind(this),"returnValue"in y||(y.returnValue=""),"MutationObserver"in window){var I=new MutationObserver(this.maybeHideModal.bind(this));I.observe(y,{attributes:!0,attributeFilter:["open"]})}else{var S=!1,D=(function(){S?this.downgradeModal():this.maybeHideModal(),S=!1}).bind(this),$,Z=function(oe){if(oe.target===y){var ve="DOMNodeRemoved";S|=oe.type.substr(0,ve.length)===ve,window.clearTimeout($),$=window.setTimeout(D,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(oe){y.addEventListener(oe,Z)})}Object.defineProperty(y,"open",{set:this.setOpen.bind(this),get:y.hasAttribute.bind(y,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}f.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),p.dm.removeDialog(this))},setOpen:function(y){y?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(y){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var I=document.createElement("div");this.dialog_.insertBefore(I,this.dialog_.firstChild),I.tabIndex=-1,I.focus(),this.dialog_.removeChild(I)}var S=document.createEvent("MouseEvents");S.initMouseEvent(y.type,y.bubbles,y.cancelable,window,y.detail,y.screenX,y.screenY,y.clientX,y.clientY,y.ctrlKey,y.altKey,y.shiftKey,y.metaKey,y.button,y.relatedTarget),this.dialog_.dispatchEvent(S),y.stopPropagation()},focus_:function(){var y=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!y&&this.dialog_.tabIndex>=0&&(y=this.dialog_),!y){var I=["button","input","keygen","select","textarea"],S=I.map(function(D){return D+":not([disabled])"});S.push('[tabindex]:not([disabled]):not([tabindex=""])'),y=this.dialog_.querySelector(S.join(", "))}o(document.activeElement),y&&y.focus()},updateZIndex:function(y,I){if(y<I)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=y,this.backdrop_.style.zIndex=I},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!p.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");n(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,p.needsCentering(this.dialog_)?(p.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(y){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),y!==void 0&&(this.dialog_.returnValue=y);var I=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(I)}};var p={};if(p.reposition=function(y){var I=document.body.scrollTop||document.documentElement.scrollTop,S=I+(window.innerHeight-y.offsetHeight)/2;y.style.top=Math.max(I,S)+"px"},p.isInlinePositionSetByStylesheet=function(y){for(var I=0;I<document.styleSheets.length;++I){var S=document.styleSheets[I],D=null;try{D=S.cssRules}catch{}if(D)for(var $=0;$<D.length;++$){var Z=D[$],oe=null;try{oe=document.querySelectorAll(Z.selectorText)}catch{}if(!(!oe||!u(oe,y))){var ve=Z.style.getPropertyValue("top"),De=Z.style.getPropertyValue("bottom");if(ve&&ve!=="auto"||De&&De!=="auto")return!0}}}return!1},p.needsCentering=function(y){var I=window.getComputedStyle(y);return I.position!=="absolute"||y.style.top!=="auto"&&y.style.top!==""||y.style.bottom!=="auto"&&y.style.bottom!==""?!1:!p.isInlinePositionSetByStylesheet(y)},p.forceRegisterDialog=function(y){if((window.HTMLDialogElement||y.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",y),y.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new f(y)},p.registerDialog=function(y){y.showModal||p.forceRegisterDialog(y)},p.DialogManager=function(){this.pendingDialogStack=[];var y=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(I){this.forwardTab_=void 0,I.stopPropagation(),y([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(I){var S=[];I.forEach(function(D){for(var $=0,Z;Z=D.removedNodes[$];++$){if(Z instanceof Element)Z.localName==="dialog"&&S.push(Z);else continue;S=S.concat(Z.querySelectorAll("dialog"))}}),S.length&&y(S)}))},p.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},p.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},p.DialogManager.prototype.updateStacking=function(){for(var y=this.zIndexHigh_,I=0,S;S=this.pendingDialogStack[I];++I)S.updateZIndex(--y,--y),I===0&&(this.overlay.style.zIndex=--y);var D=this.pendingDialogStack[0];if(D){var $=D.dialog.parentNode||document.body;$.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},p.DialogManager.prototype.containedByTopDialog_=function(y){for(;y=r(y);){for(var I=0,S;S=this.pendingDialogStack[I];++I)if(S.dialog===y)return I===0;y=y.parentElement}return!1},p.DialogManager.prototype.handleFocus_=function(y){if(!this.containedByTopDialog_(y.target)&&(y.preventDefault(),y.stopPropagation(),o(y.target),this.forwardTab_!==void 0)){var I=this.pendingDialogStack[0],S=I.dialog,D=S.compareDocumentPosition(y.target);return D&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?I.focus_():document.documentElement.focus()),!1}},p.DialogManager.prototype.handleKey_=function(y){if(this.forwardTab_=void 0,y.keyCode===27){y.preventDefault(),y.stopPropagation();var I=new e("cancel",{bubbles:!1,cancelable:!0}),S=this.pendingDialogStack[0];S&&S.dialog.dispatchEvent(I)&&S.dialog.close()}else y.keyCode===9&&(this.forwardTab_=!y.shiftKey)},p.DialogManager.prototype.checkDOM_=function(y){var I=this.pendingDialogStack.slice();I.forEach(function(S){y.indexOf(S.dialog)!==-1?S.downgradeModal():S.maybeHideModal()})},p.DialogManager.prototype.pushDialog=function(y){var I=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=I?!1:(this.pendingDialogStack.unshift(y)===1&&this.blockDocument(),this.updateStacking(),!0)},p.DialogManager.prototype.removeDialog=function(y){var I=this.pendingDialogStack.indexOf(y);I!==-1&&(this.pendingDialogStack.splice(I,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())},p.dm=new p.DialogManager,p.formSubmitter=null,p.useValue=null,window.HTMLDialogElement===void 0){var m=document.createElement("form");if(m.setAttribute("method","dialog"),m.method!=="dialog"){var v=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(v){var b=v.get;v.get=function(){return l(this)?"dialog":b.call(this)};var _=v.set;v.set=function(y){return typeof y=="string"&&y.toLowerCase()==="dialog"?this.setAttribute("method",y):_.call(this,y)},Object.defineProperty(HTMLFormElement.prototype,"method",v)}}document.addEventListener("click",function(y){if(p.formSubmitter=null,p.useValue=null,!y.defaultPrevented){var I=y.target;if(!(!I||!l(I.form))){var S=I.type==="submit"&&["button","input"].indexOf(I.localName)>-1;if(!S){if(!(I.localName==="input"&&I.type==="image"))return;p.useValue=y.offsetX+","+y.offsetY}var D=r(I);D&&(p.formSubmitter=I)}}},!1);var T=HTMLFormElement.prototype.submit,V=function(){if(!l(this))return T.call(this);var y=r(this);y&&y.close()};HTMLFormElement.prototype.submit=V,document.addEventListener("submit",function(y){var I=y.target;if(l(I)){y.preventDefault();var S=r(I);if(S){var D=p.formSubmitter;D&&D.form===I?S.close(p.useValue||D.value):S.close(),p.formSubmitter=null}}},!0)}p.forceRegisterDialog=p.forceRegisterDialog,p.registerDialog=p.registerDialog,typeof t.exports=="object"?t.exports=p:window.dialogPolyfill=p})()})(ME);var bL=ME.exports;const IL=wL(bL);/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te={upgradeDom:function(t,e){},upgradeElement:function(t,e){},upgradeElements:function(t){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(t,e){},register:function(t){},downgradeElements:function(t){}};Te=function(){var t=[],e=[],n="mdlComponentConfigInternal_";function r(y,I){for(var S=0;S<t.length;S++)if(t[S].className===y)return typeof I<"u"&&(t[S]=I),t[S];return!1}function o(y){var I=y.getAttribute("data-upgraded");return I===null?[""]:I.split(",")}function u(y,I){var S=o(y);return S.indexOf(I)!==-1}function l(y,I,S){if("CustomEvent"in window&&typeof window.CustomEvent=="function")return new CustomEvent(y,{bubbles:I,cancelable:S});var D=document.createEvent("Events");return D.initEvent(y,I,S),D}function f(y,I){if(typeof y>"u"&&typeof I>"u")for(var S=0;S<t.length;S++)f(t[S].className,t[S].cssClass);else{var D=y;if(typeof I>"u"){var $=r(D);$&&(I=$.cssClass)}for(var Z=document.querySelectorAll("."+I),oe=0;oe<Z.length;oe++)p(Z[oe],D)}}function p(y,I){if(!(typeof y=="object"&&y instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var S=l("mdl-componentupgrading",!0,!0);if(y.dispatchEvent(S),!S.defaultPrevented){var D=o(y),$=[];if(I)u(y,I)||$.push(r(I));else{var Z=y.classList;t.forEach(function(Ft){Z.contains(Ft.cssClass)&&$.indexOf(Ft)===-1&&!u(y,Ft.className)&&$.push(Ft)})}for(var oe=0,ve=$.length,De;oe<ve;oe++){if(De=$[oe],De){D.push(De.className),y.setAttribute("data-upgraded",D.join(","));var qt=new De.classConstructor(y);qt[n]=De,e.push(qt);for(var Ut=0,Ds=De.callbacks.length;Ut<Ds;Ut++)De.callbacks[Ut](y);De.widget&&(y[De.className]=qt)}else throw new Error("Unable to find a registered component for the given class.");var ce=l("mdl-componentupgraded",!0,!1);y.dispatchEvent(ce)}}}function m(y){Array.isArray(y)||(y instanceof Element?y=[y]:y=Array.prototype.slice.call(y));for(var I=0,S=y.length,D;I<S;I++)D=y[I],D instanceof HTMLElement&&(p(D),D.children.length>0&&m(D.children))}function v(y){var I=typeof y.widget>"u"&&typeof y.widget>"u",S=!0;I||(S=y.widget||y.widget);var D={classConstructor:y.constructor||y.constructor,className:y.classAsString||y.classAsString,cssClass:y.cssClass||y.cssClass,widget:S,callbacks:[]};if(t.forEach(function(Z){if(Z.cssClass===D.cssClass)throw new Error("The provided cssClass has already been registered: "+Z.cssClass);if(Z.className===D.className)throw new Error("The provided className has already been registered")}),y.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");var $=r(y.classAsString,D);$||t.push(D)}function b(y,I){var S=r(y);S&&S.callbacks.push(I)}function _(){for(var y=0;y<t.length;y++)f(t[y].className)}function T(y){if(y){var I=e.indexOf(y);e.splice(I,1);var S=y.element_.getAttribute("data-upgraded").split(","),D=S.indexOf(y[n].classAsString);S.splice(D,1),y.element_.setAttribute("data-upgraded",S.join(","));var $=l("mdl-componentdowngraded",!0,!1);y.element_.dispatchEvent($)}}function V(y){var I=function(D){e.filter(function($){return $.element_===D}).forEach(T)};if(y instanceof Array||y instanceof NodeList)for(var S=0;S<y.length;S++)I(y[S]);else if(y instanceof Node)I(y);else throw new Error("Invalid argument provided to downgrade MDL nodes.")}return{upgradeDom:f,upgradeElement:p,upgradeElements:m,upgradeAllRegistered:_,registerUpgradedCallback:b,register:v,downgradeElements:V}}();Te.ComponentConfigPublic;Te.ComponentConfig;Te.Component;Te.upgradeDom=Te.upgradeDom;Te.upgradeElement=Te.upgradeElement;Te.upgradeElements=Te.upgradeElements;Te.upgradeAllRegistered=Te.upgradeAllRegistered;Te.registerUpgradedCallback=Te.registerUpgradedCallback;Te.register=Te.register;Te.downgradeElements=Te.downgradeElements;window.componentHandler=Te;window.componentHandler=Te;window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),Te.upgradeAllRegistered()):(Te.upgradeElement=function(){},Te.register=function(){})});/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var t=function(n){this.element_=n,this.init()};window.MaterialButton=t,t.prototype.Constant_={},t.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},t.prototype.blurHandler_=function(e){e&&this.element_.blur()},t.prototype.disable=function(){this.element_.disabled=!0},t.prototype.disable=t.prototype.disable,t.prototype.enable=function(){this.element_.disabled=!1},t.prototype.enable=t.prototype.enable,t.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:t,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var t=function(n){this.element_=n,this.init()};window.MaterialProgress=t,t.prototype.Constant_={},t.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},t.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},t.prototype.setProgress=t.prototype.setProgress,t.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},t.prototype.setBuffer=t.prototype.setBuffer,t.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:t,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var t=function(n){this.element_=n,this.init()};window.MaterialSpinner=t,t.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},t.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},t.prototype.createLayer=function(e){var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),n.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var u=document.createElement("div");u.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),u.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var l=[r,o,u],f=0;f<l.length;f++){var p=document.createElement("div");p.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),l[f].appendChild(p)}n.appendChild(r),n.appendChild(o),n.appendChild(u),this.element_.appendChild(n)},t.prototype.createLayer=t.prototype.createLayer,t.prototype.stop=function(){this.element_.classList.remove("is-active")},t.prototype.stop=t.prototype.stop,t.prototype.start=function(){this.element_.classList.add("is-active")},t.prototype.start=t.prototype.start,t.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:t,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var t=function(n){this.element_=n,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=t,t.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},t.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},t.prototype.onKeyDown_=function(e){var n=e.target.value.split(`
`).length;e.keyCode===13&&n>=this.maxRows&&e.preventDefault()},t.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},t.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},t.prototype.onReset_=function(e){this.updateClasses_()},t.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},t.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},t.prototype.checkDisabled=t.prototype.checkDisabled,t.prototype.checkFocus=function(){this.element_.querySelector(":focus")?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},t.prototype.checkFocus=t.prototype.checkFocus,t.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},t.prototype.checkValidity=t.prototype.checkValidity,t.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},t.prototype.checkDirty=t.prototype.checkDirty,t.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},t.prototype.disable=t.prototype.disable,t.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},t.prototype.enable=t.prototype.enable,t.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},t.prototype.change=t.prototype.change,t.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:t,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})})();(function(){(function(){var t,e=typeof Object.create=="function"?Object.create:function(i){function s(){}return s.prototype=i,new s},n;if(typeof Object.setPrototypeOf=="function")n=Object.setPrototypeOf;else{var r;e:{var o={xb:!0},u={};try{u.__proto__=o,r=u.xb;break e}catch{}r=!1}n=r?function(i,s){if(i.__proto__=s,i.__proto__!==s)throw new TypeError(i+" is not extensible");return i}:null}var l=n;function f(i,s){if(i.prototype=e(s.prototype),i.prototype.constructor=i,l)l(i,s);else for(var a in s)if(a!="prototype")if(Object.defineProperties){var c=Object.getOwnPropertyDescriptor(s,a);c&&Object.defineProperty(i,a,c)}else i[a]=s[a];i.K=s.prototype}var p=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,s,a){i!=Array.prototype&&i!=Object.prototype&&(i[s]=a.value)},m=typeof window<"u"&&window===this?this:typeof global<"u"&&global!=null?global:this;function v(i,s){if(s){var a=m;i=i.split(".");for(var c=0;c<i.length-1;c++){var h=i[c];h in a||(a[h]={}),a=a[h]}i=i[i.length-1],c=a[i],s=s(c),s!=c&&s!=null&&p(a,i,{configurable:!0,writable:!0,value:s})}}v("Object.is",function(i){return i||function(s,a){return s===a?s!==0||1/s===1/a:s!==s&&a!==a}}),v("Array.prototype.includes",function(i){return i||function(s,a){var c=this;c instanceof String&&(c=String(c));var h=c.length;for(a=a||0,0>a&&(a=Math.max(a+h,0));a<h;a++){var d=c[a];if(d===s||Object.is(d,s))return!0}return!1}});var b=this;function _(i){return i!==void 0}function T(i){return typeof i=="string"}var V=/^[\w+/_-]+[=]{0,2}$/,y=null;function I(){}function S(i){i.W=void 0,i.Xa=function(){return i.W?i.W:i.W=new i}}function D(i){var s=typeof i;if(s=="object")if(i){if(i instanceof Array)return"array";if(i instanceof Object)return s;var a=Object.prototype.toString.call(i);if(a=="[object Window]")return"object";if(a=="[object Array]"||typeof i.length=="number"&&typeof i.splice<"u"&&typeof i.propertyIsEnumerable<"u"&&!i.propertyIsEnumerable("splice"))return"array";if(a=="[object Function]"||typeof i.call<"u"&&typeof i.propertyIsEnumerable<"u"&&!i.propertyIsEnumerable("call"))return"function"}else return"null";else if(s=="function"&&typeof i.call>"u")return"object";return s}function $(i){return D(i)=="array"}function Z(i){var s=D(i);return s=="array"||s=="object"&&typeof i.length=="number"}function oe(i){return D(i)=="function"}function ve(i){var s=typeof i;return s=="object"&&i!=null||s=="function"}var De="closure_uid_"+(1e9*Math.random()>>>0),qt=0;function Ut(i,s,a){return i.call.apply(i.bind,arguments)}function Ds(i,s,a){if(!i)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var h=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(h,c),i.apply(s,h)}}return function(){return i.apply(s,arguments)}}function ce(i,s,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ce=Ut:ce=Ds,ce.apply(null,arguments)}function Ft(i,s){var a=Array.prototype.slice.call(arguments,1);return function(){var c=a.slice();return c.push.apply(c,arguments),i.apply(this,c)}}function ye(i,s){for(var a in s)i[a]=s[a]}var bi=Date.now||function(){return+new Date};function Ee(i,s){i=i.split(".");var a=b;i[0]in a||typeof a.execScript>"u"||a.execScript("var "+i[0]);for(var c;i.length&&(c=i.shift());)!i.length&&_(s)?a[c]=s:a[c]&&a[c]!==Object.prototype[c]?a=a[c]:a=a[c]={}}function Y(i,s){function a(){}a.prototype=s.prototype,i.K=s.prototype,i.prototype=new a,i.prototype.constructor=i,i.vc=function(c,h,d){for(var g=Array(arguments.length-2),w=2;w<arguments.length;w++)g[w-2]=arguments[w];return s.prototype[h].apply(c,g)}}function Tt(i){if(Error.captureStackTrace)Error.captureStackTrace(this,Tt);else{var s=Error().stack;s&&(this.stack=s)}i&&(this.message=String(i))}Y(Tt,Error),Tt.prototype.name="CustomError";var Qp;function Fl(i,s){i=i.split("%s");for(var a="",c=i.length-1,h=0;h<c;h++)a+=i[h]+(h<s.length?s[h]:"%s");Tt.call(this,a+i[c])}Y(Fl,Tt),Fl.prototype.name="AssertionError";function wn(i,s){throw new Fl("Failure"+(i?": "+i:""),Array.prototype.slice.call(arguments,1))}var Xp=Array.prototype.indexOf?function(i,s){return Array.prototype.indexOf.call(i,s,void 0)}:function(i,s){if(T(i))return T(s)&&s.length==1?i.indexOf(s,0):-1;for(var a=0;a<i.length;a++)if(a in i&&i[a]===s)return a;return-1},Os=Array.prototype.forEach?function(i,s,a){Array.prototype.forEach.call(i,s,a)}:function(i,s,a){for(var c=i.length,h=T(i)?i.split(""):i,d=0;d<c;d++)d in h&&s.call(a,h[d],d,i)};function xE(i,s){for(var a=T(i)?i.split(""):i,c=i.length-1;0<=c;--c)c in a&&s.call(void 0,a[c],c,i)}var UE=Array.prototype.filter?function(i,s){return Array.prototype.filter.call(i,s,void 0)}:function(i,s){for(var a=i.length,c=[],h=0,d=T(i)?i.split(""):i,g=0;g<a;g++)if(g in d){var w=d[g];s.call(void 0,w,g,i)&&(c[h++]=w)}return c},FE=Array.prototype.map?function(i,s){return Array.prototype.map.call(i,s,void 0)}:function(i,s){for(var a=i.length,c=Array(a),h=T(i)?i.split(""):i,d=0;d<a;d++)d in h&&(c[d]=s.call(void 0,h[d],d,i));return c},VE=Array.prototype.some?function(i,s){return Array.prototype.some.call(i,s,void 0)}:function(i,s){for(var a=i.length,c=T(i)?i.split(""):i,h=0;h<a;h++)if(h in c&&s.call(void 0,c[h],h,i))return!0;return!1};function Vt(i,s){return 0<=Xp(i,s)}function Zp(i,s){s=Xp(i,s);var a;return(a=0<=s)&&za(i,s),a}function za(i,s){return Array.prototype.splice.call(i,s,1).length==1}function jE(i,s){e:{for(var a=i.length,c=T(i)?i.split(""):i,h=0;h<a;h++)if(h in c&&s.call(void 0,c[h],h,i)){s=h;break e}s=-1}0<=s&&za(i,s)}function BE(i,s){var a=0;xE(i,function(c,h){s.call(void 0,c,h,i)&&za(i,h)&&a++})}function em(i){return Array.prototype.concat.apply([],arguments)}function tm(i){var s=i.length;if(0<s){for(var a=Array(s),c=0;c<s;c++)a[c]=i[c];return a}return[]}function $E(i,s,a){return 2>=arguments.length?Array.prototype.slice.call(i,s):Array.prototype.slice.call(i,s,a)}var Ct=String.prototype.trim?function(i){return i.trim()}:function(i){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(i)[1]},HE=/&/g,qE=/</g,GE=/>/g,zE=/"/g,KE=/'/g,WE=/\x00/g,YE=/[\x00&<>"']/;function Vl(i,s){return i<s?-1:i>s?1:0}function ur(i){return YE.test(i)&&(i.indexOf("&")!=-1&&(i=i.replace(HE,"&amp;")),i.indexOf("<")!=-1&&(i=i.replace(qE,"&lt;")),i.indexOf(">")!=-1&&(i=i.replace(GE,"&gt;")),i.indexOf('"')!=-1&&(i=i.replace(zE,"&quot;")),i.indexOf("'")!=-1&&(i=i.replace(KE,"&#39;")),i.indexOf("\0")!=-1&&(i=i.replace(WE,"&#0;"))),i}function nm(i,s,a){for(var c in i)s.call(a,i[c],c,i)}function jl(i){var s={},a;for(a in i)s[a]=i[a];return s}var im="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ka(i,s){for(var a,c,h=1;h<arguments.length;h++){c=arguments[h];for(a in c)i[a]=c[a];for(var d=0;d<im.length;d++)a=im[d],Object.prototype.hasOwnProperty.call(c,a)&&(i[a]=c[a])}}var cr="StopIteration"in b?b.StopIteration:{message:"StopIteration",stack:""};function Ii(){}Ii.prototype.next=function(){throw cr},Ii.prototype.ha=function(){return this};function rm(i){if(i instanceof Ii)return i;if(typeof i.ha=="function")return i.ha(!1);if(Z(i)){var s=0,a=new Ii;return a.next=function(){for(;;){if(s>=i.length)throw cr;if(s in i)return i[s++];s++}},a}throw Error("Not implemented")}function JE(i,s){if(Z(i))try{Os(i,s,void 0)}catch(a){if(a!==cr)throw a}else{i=rm(i);try{for(;;)s.call(void 0,i.next(),void 0,i)}catch(a){if(a!==cr)throw a}}}function QE(i){if(Z(i))return tm(i);i=rm(i);var s=[];return JE(i,function(a){s.push(a)}),s}function Wa(i,s){this.g={},this.a=[],this.j=this.h=0;var a=arguments.length;if(1<a){if(a%2)throw Error("Uneven number of arguments");for(var c=0;c<a;c+=2)this.set(arguments[c],arguments[c+1])}else if(i)if(i instanceof Wa)for(a=i.ja(),c=0;c<a.length;c++)this.set(a[c],i.get(a[c]));else for(c in i)this.set(c,i[c])}t=Wa.prototype,t.la=function(){Ya(this);for(var i=[],s=0;s<this.a.length;s++)i.push(this.g[this.a[s]]);return i},t.ja=function(){return Ya(this),this.a.concat()},t.clear=function(){this.g={},this.j=this.h=this.a.length=0};function Ya(i){if(i.h!=i.a.length){for(var s=0,a=0;s<i.a.length;){var c=i.a[s];Ei(i.g,c)&&(i.a[a++]=c),s++}i.a.length=a}if(i.h!=i.a.length){var h={};for(a=s=0;s<i.a.length;)c=i.a[s],Ei(h,c)||(i.a[a++]=c,h[c]=1),s++;i.a.length=a}}t.get=function(i,s){return Ei(this.g,i)?this.g[i]:s},t.set=function(i,s){Ei(this.g,i)||(this.h++,this.a.push(i),this.j++),this.g[i]=s},t.forEach=function(i,s){for(var a=this.ja(),c=0;c<a.length;c++){var h=a[c],d=this.get(h);i.call(s,d,h,this)}},t.ha=function(i){Ya(this);var s=0,a=this.j,c=this,h=new Ii;return h.next=function(){if(a!=c.j)throw Error("The map has changed since the iterator was created");if(s>=c.a.length)throw cr;var d=c.a[s++];return i?d:c.g[d]},h};function Ei(i,s){return Object.prototype.hasOwnProperty.call(i,s)}var XE=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ZE(i,s){if(i){i=i.split("&");for(var a=0;a<i.length;a++){var c=i[a].indexOf("="),h=null;if(0<=c){var d=i[a].substring(0,c);h=i[a].substring(c+1)}else d=i[a];s(d,h?decodeURIComponent(h.replace(/\+/g," ")):"")}}}function sm(i,s,a,c){for(var h=a.length;0<=(s=i.indexOf(a,s))&&s<c;){var d=i.charCodeAt(s-1);if((d==38||d==63)&&(d=i.charCodeAt(s+h),!d||d==61||d==38||d==35))return s;s+=h+1}return-1}var om=/#|$/;function Ja(i,s){var a=i.search(om),c=sm(i,0,s,a);if(0>c)return null;var h=i.indexOf("&",c);return(0>h||h>a)&&(h=a),c+=s.length+1,decodeURIComponent(i.substr(c,h-c).replace(/\+/g," "))}var e_=/[?&]($|#)/;function Bn(i,s){this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1;var a;i instanceof Bn?(this.i=_(s)?s:i.i,Bl(this,i.j),this.A=i.A,this.h=i.h,$l(this,i.C),this.g=i.g,Hl(this,cm(i.a)),this.s=i.s):i&&(a=String(i).match(XE))?(this.i=!!s,Bl(this,a[1]||"",!0),this.A=Ls(a[2]||""),this.h=Ls(a[3]||"",!0),$l(this,a[4]),this.g=Ls(a[5]||"",!0),Hl(this,a[6]||"",!0),this.s=Ls(a[7]||"")):(this.i=!!s,this.a=new xs(null,this.i))}Bn.prototype.toString=function(){var i=[],s=this.j;s&&i.push(Ms(s,am,!0),":");var a=this.h;return(a||s=="file")&&(i.push("//"),(s=this.A)&&i.push(Ms(s,am,!0),"@"),i.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.C,a!=null&&i.push(":",String(a))),(a=this.g)&&(this.h&&a.charAt(0)!="/"&&i.push("/"),i.push(Ms(a,a.charAt(0)=="/"?i_:n_,!0))),(a=this.a.toString())&&i.push("?",a),(a=this.s)&&i.push("#",Ms(a,s_)),i.join("")};function Bl(i,s,a){i.j=a?Ls(s,!0):s,i.j&&(i.j=i.j.replace(/:$/,""))}function $l(i,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);i.C=s}else i.C=null}function Hl(i,s,a){s instanceof xs?(i.a=s,o_(i.a,i.i)):(a||(s=Ms(s,r_)),i.a=new xs(s,i.i))}function ql(i){return i instanceof Bn?new Bn(i):new Bn(i,void 0)}function Ls(i,s){return i?s?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ms(i,s,a){return T(i)?(i=encodeURI(i).replace(s,t_),a&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function t_(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var am=/[#\/\?@]/g,n_=/[#\?:]/g,i_=/[#\?]/g,r_=/[#\?@]/g,s_=/#/g;function xs(i,s){this.g=this.a=null,this.h=i||null,this.j=!!s}function $n(i){i.a||(i.a=new Wa,i.g=0,i.h&&ZE(i.h,function(s,a){i.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}t=xs.prototype,t.add=function(i,s){$n(this),this.h=null,i=lr(this,i);var a=this.a.get(i);return a||this.a.set(i,a=[]),a.push(s),this.g+=1,this};function _i(i,s){$n(i),s=lr(i,s),Ei(i.a.g,s)&&(i.h=null,i.g-=i.a.get(s).length,i=i.a,Ei(i.g,s)&&(delete i.g[s],i.h--,i.j++,i.a.length>2*i.h&&Ya(i)))}t.clear=function(){this.a=this.h=null,this.g=0};function um(i,s){return $n(i),s=lr(i,s),Ei(i.a.g,s)}t.forEach=function(i,s){$n(this),this.a.forEach(function(a,c){Os(a,function(h){i.call(s,h,c,this)},this)},this)},t.ja=function(){$n(this);for(var i=this.a.la(),s=this.a.ja(),a=[],c=0;c<s.length;c++)for(var h=i[c],d=0;d<h.length;d++)a.push(s[c]);return a},t.la=function(i){$n(this);var s=[];if(T(i))um(this,i)&&(s=em(s,this.a.get(lr(this,i))));else{i=this.a.la();for(var a=0;a<i.length;a++)s=em(s,i[a])}return s},t.set=function(i,s){return $n(this),this.h=null,i=lr(this,i),um(this,i)&&(this.g-=this.a.get(i).length),this.a.set(i,[s]),this.g+=1,this},t.get=function(i,s){return i?(i=this.la(i),0<i.length?String(i[0]):s):s},t.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var i=[],s=this.a.ja(),a=0;a<s.length;a++){var c=s[a],h=encodeURIComponent(String(c));c=this.la(c);for(var d=0;d<c.length;d++){var g=h;c[d]!==""&&(g+="="+encodeURIComponent(String(c[d]))),i.push(g)}}return this.h=i.join("&")};function cm(i){var s=new xs;return s.h=i.h,i.a&&(s.a=new Wa(i.a),s.g=i.g),s}function lr(i,s){return s=String(s),i.j&&(s=s.toLowerCase()),s}function o_(i,s){s&&!i.j&&($n(i),i.h=null,i.a.forEach(function(a,c){var h=c.toLowerCase();c!=h&&(_i(this,c),_i(this,h),0<a.length&&(this.h=null,this.a.set(lr(this,h),tm(a)),this.g+=a.length))},i)),i.j=s}function Si(i){this.a=ql(i)}function a_(i,s){s?i.a.a.set(Ue.Sa,s):_i(i.a.a,Ue.Sa)}function u_(i,s){s!==null?i.a.a.set(Ue.Qa,s?"1":"0"):_i(i.a.a,Ue.Qa)}function lm(i){return i.a.a.get(Ue.Pa)||null}function hm(i,s){s?i.a.a.set(Ue.PROVIDER_ID,s):_i(i.a.a,Ue.PROVIDER_ID)}Si.prototype.toString=function(){return this.a.toString()};var Ue={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"},hr;e:{var dm=b.navigator;if(dm){var fm=dm.userAgent;if(fm){hr=fm;break e}}hr=""}function ee(i){return hr.indexOf(i)!=-1}function pm(){return(ee("Chrome")||ee("CriOS"))&&!ee("Edge")}function Gl(i){return Gl[" "](i),i}Gl[" "]=I;function c_(i,s){var a=d_;return Object.prototype.hasOwnProperty.call(a,i)?a[i]:a[i]=s(i)}var mm=ee("Opera"),ke=ee("Trident")||ee("MSIE"),Hn=ee("Edge"),l_=Hn||ke,Gt=ee("Gecko")&&!(hr.toLowerCase().indexOf("webkit")!=-1&&!ee("Edge"))&&!(ee("Trident")||ee("MSIE"))&&!ee("Edge"),gt=hr.toLowerCase().indexOf("webkit")!=-1&&!ee("Edge"),h_=gt&&ee("Mobile"),qn=ee("Macintosh");function gm(){var i=b.document;return i?i.documentMode:void 0}var Qa;e:{var zl="",Kl=function(){var i=hr;if(Gt)return/rv:([^\);]+)(\)|;)/.exec(i);if(Hn)return/Edge\/([\d\.]+)/.exec(i);if(ke)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(i);if(gt)return/WebKit\/(\S+)/.exec(i);if(mm)return/(?:Version)[ \/]?(\S+)/.exec(i)}();if(Kl&&(zl=Kl?Kl[1]:""),ke){var Wl=gm();if(Wl!=null&&Wl>parseFloat(zl)){Qa=String(Wl);break e}}Qa=zl}var d_={};function Ti(i){return c_(i,function(){for(var s=0,a=Ct(String(Qa)).split("."),c=Ct(String(i)).split("."),h=Math.max(a.length,c.length),d=0;s==0&&d<h;d++){var g=a[d]||"",w=c[d]||"";do{if(g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""],w=/(\d*)(\D*)(.*)/.exec(w)||["","","",""],g[0].length==0&&w[0].length==0)break;s=Vl(g[1].length==0?0:parseInt(g[1],10),w[1].length==0?0:parseInt(w[1],10))||Vl(g[2].length==0,w[2].length==0)||Vl(g[2],w[2]),g=g[3],w=w[3]}while(s==0)}return 0<=s})}var Us,vm=b.document;Us=vm&&ke?gm()||(vm.compatMode=="CSS1Compat"?parseInt(Qa,10):5):void 0;function dr(i,s){this.a=i===wm&&s||"",this.g=ym}dr.prototype.ma=!0,dr.prototype.ka=function(){return this.a},dr.prototype.toString=function(){return"Const{"+this.a+"}"};var ym={},wm={};function Ci(){this.a="",this.h=Im}Ci.prototype.ma=!0,Ci.prototype.ka=function(){return this.a.toString()},Ci.prototype.g=function(){return 1},Ci.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function bm(i){return i instanceof Ci&&i.constructor===Ci&&i.h===Im?i.a:(wn("expected object of type TrustedResourceUrl, got '"+i+"' of type "+D(i)),"type_error:TrustedResourceUrl")}function f_(){var i=r2;i instanceof dr&&i.constructor===dr&&i.g===ym?i=i.a:(wn("expected object of type Const, got '"+i+"'"),i="type_error:Const");var s=new Ci;return s.a=i,s}var Im={};function kt(){this.a="",this.h=Sm}kt.prototype.ma=!0,kt.prototype.ka=function(){return this.a.toString()},kt.prototype.g=function(){return 1},kt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Gn(i){return i instanceof kt&&i.constructor===kt&&i.h===Sm?i.a:(wn("expected object of type SafeUrl, got '"+i+"' of type "+D(i)),"type_error:SafeUrl")}var Em=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Xa(i){return i instanceof kt?i:(i=typeof i=="object"&&i.ma?i.ka():String(i),Em.test(i)||(i="about:invalid#zClosurez"),Yl(i))}function _m(i){return i instanceof kt?i:(i=typeof i=="object"&&i.ma?i.ka():String(i),Em.test(i)||(i="about:invalid#zClosurez"),Yl(i))}var Sm={};function Yl(i){var s=new kt;return s.a=i,s}Yl("about:blank");function fr(){this.a="",this.g=Tm}fr.prototype.ma=!0;var Tm={};fr.prototype.ka=function(){return this.a},fr.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function zn(){this.a="",this.j=Cm,this.h=null}zn.prototype.g=function(){return this.h},zn.prototype.ma=!0,zn.prototype.ka=function(){return this.a.toString()},zn.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Za(i){return i instanceof zn&&i.constructor===zn&&i.j===Cm?i.a:(wn("expected object of type SafeHtml, got '"+i+"' of type "+D(i)),"type_error:SafeHtml")}var Cm={};function Fs(i,s){var a=new zn;return a.a=i,a.h=s,a}Fs("<!DOCTYPE html>",0);var p_=Fs("",0);Fs("<br>",0);var m_=function(i){var s=!1,a;return function(){return s||(a=i(),s=!0),a}}(function(){if(typeof document>"u")return!1;var i=document.createElement("div"),s=document.createElement("div");return s.appendChild(document.createElement("div")),i.appendChild(s),i.firstChild?(s=i.firstChild.firstChild,i.innerHTML=Za(p_),!s.parentElement):!1});function g_(i,s){if(i.src=bm(s),y===null)e:{if(s=b.document,(s=s.querySelector&&s.querySelector("script[nonce]"))&&(s=s.nonce||s.getAttribute("nonce"))&&V.test(s)){y=s;break e}y=""}s=y,s&&i.setAttribute("nonce",s)}function pr(i,s){s=s instanceof kt?s:_m(s),i.assign(Gn(s))}function Kn(i,s){this.a=_(i)?i:0,this.g=_(s)?s:0}Kn.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Kn.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Kn.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Kn.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this};function Jl(i,s){this.width=i,this.height=s}t=Jl.prototype,t.toString=function(){return"("+this.width+" x "+this.height+")"},t.aspectRatio=function(){return this.width/this.height},t.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},t.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},t.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};function eu(i){return i?new eh(Vs(i)):Qp||(Qp=new eh)}function Ql(i,s){var a=s||document;return a.querySelectorAll&&a.querySelector?a.querySelectorAll("."+i):km(document,i,s)}function Xl(i,s){var a=s||document;if(a.getElementsByClassName)i=a.getElementsByClassName(i)[0];else{a=document;var c=s||a;i=c.querySelectorAll&&c.querySelector&&i?c.querySelector(i?"."+i:""):km(a,i,s)[0]||null}return i||null}function km(i,s,a){var c;if(i=a||i,i.querySelectorAll&&i.querySelector&&s)return i.querySelectorAll(s?"."+s:"");if(s&&i.getElementsByClassName){var h=i.getElementsByClassName(s);return h}if(h=i.getElementsByTagName("*"),s){var d={};for(a=c=0;i=h[a];a++){var g=i.className;typeof g.split=="function"&&Vt(g.split(/\s+/),s)&&(d[c++]=i)}return d.length=c,d}return h}function v_(i,s){nm(s,function(a,c){a&&typeof a=="object"&&a.ma&&(a=a.ka()),c=="style"?i.style.cssText=a:c=="class"?i.className=a:c=="for"?i.htmlFor=a:Am.hasOwnProperty(c)?i.setAttribute(Am[c],a):c.lastIndexOf("aria-",0)==0||c.lastIndexOf("data-",0)==0?i.setAttribute(c,a):i[c]=a})}var Am={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function tu(i){return i.scrollingElement?i.scrollingElement:(gt||i.compatMode!="CSS1Compat")&&i.body||i.documentElement}function ki(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function Vs(i){return i.nodeType==9?i:i.ownerDocument||i.document}function Zl(i,s){if("textContent"in i)i.textContent=s;else if(i.nodeType==3)i.data=String(s);else if(i.firstChild&&i.firstChild.nodeType==3){for(;i.lastChild!=i.firstChild;)i.removeChild(i.lastChild);i.firstChild.data=String(s)}else{for(var a;a=i.firstChild;)i.removeChild(a);i.appendChild(Vs(i).createTextNode(String(s)))}}function Rm(i,s){return s?y_(i,function(a){return!s||T(a.className)&&Vt(a.className.split(/\s+/),s)}):null}function y_(i,s){for(var a=0;i;){if(s(i))return i;i=i.parentNode,a++}return null}function eh(i){this.a=i||b.document||document}eh.prototype.N=function(){return T(void 0)?this.a.getElementById(void 0):void 0};var nu={Fc:!0},Nm={Hc:!0},w_={Ec:!0},Pm={Gc:!0};function Wn(){throw Error("Do not instantiate directly")}Wn.prototype.va=null,Wn.prototype.toString=function(){return this.content};function js(i,s,a,c){if(i=i(s||E_,void 0,a),c=(c||eu()).a.createElement("DIV"),i=b_(i),i.match(I_),i=Fs(i,null),m_())for(;c.lastChild;)c.removeChild(c.lastChild);return c.innerHTML=Za(i),c.childNodes.length==1&&(i=c.firstChild,i.nodeType==1&&(c=i)),c}function b_(i){if(!ve(i))return ur(String(i));if(i instanceof Wn){if(i.fa===nu)return i.content;if(i.fa===Pm)return ur(i.content)}return wn("Soy template output is unsafe for use as HTML: "+i),"zSoyz"}var I_=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,E_={};function __(i){if(i!=null)switch(i.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}function iu(){Wn.call(this)}Y(iu,Wn),iu.prototype.fa=nu;function q(i){return i!=null&&i.fa===nu?i:i instanceof zn?L(Za(i).toString(),i.g()):L(ur(String(String(i))),__(i))}function ru(){Wn.call(this)}Y(ru,Wn),ru.prototype.fa=Nm,ru.prototype.va=1;function su(i,s){this.content=String(i),this.va=s??null}Y(su,Wn),su.prototype.fa=Pm;function ae(i){return new su(i,void 0)}var L=function(i){function s(a){this.content=a}return s.prototype=i.prototype,function(a,c){return a=new s(String(a)),c!==void 0&&(a.va=c),a}}(iu),S_=function(i){function s(a){this.content=a}return s.prototype=i.prototype,function(a){return new s(String(a))}}(ru);function T_(i){function s(){}var a={label:Ae("New password")};s.prototype=i,i=new s;for(var c in a)i[c]=a[c];return i}function Ae(i){return(i=String(i))?new su(i,void 0):""}var Dm=function(i){function s(a){this.content=a}return s.prototype=i.prototype,function(a,c){return a=String(a),a?(a=new s(a),c!==void 0&&(a.va=c),a):""}}(iu);function vt(i){return i!=null&&i.fa===nu?String(String(i.content).replace(D_,"").replace(O_,"&lt;")).replace(R_,k_):ur(String(i))}function Ai(i){return i!=null&&i.fa===Nm?i=String(i).replace(nh,th):i instanceof kt?i=String(Gn(i).toString()).replace(nh,th):(i=String(i),P_.test(i)?i=i.replace(nh,th):(wn("Bad value `%s` for |filterNormalizeUri",[i]),i="#zSoyz")),i}function Om(i){return i!=null&&i.fa===w_?i=i.content:i==null?i="":i instanceof fr?i instanceof fr&&i.constructor===fr&&i.g===Tm?i=i.a:(wn("expected object of type SafeStyle, got '"+i+"' of type "+D(i)),i="type_error:SafeStyle"):(i=String(i),N_.test(i)||(wn("Bad value `%s` for |filterCssValue",[i]),i="zSoyz")),i}var C_={"\0":"&#0;","	":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function k_(i){return C_[i]}var A_={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","\x07":"%07","\b":"%08","	":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","\x1B":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function th(i){return A_[i]}var R_=/[\x00\x22\x27\x3c\x3e]/g,nh=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,N_=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,P_=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,D_=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,O_=/</g;function ih(){return ae("Enter a valid phone number")}function Lm(){return ae("Unable to send password reset code to specified email")}function Mm(){return ae("Something went wrong. Please try again.")}function xm(){return ae("This email already exists without any means of sign-in. Please reset the password to recover.")}function Um(i){i=i||{};var s="";switch(i.code){case"invalid-argument":s+="Client specified an invalid argument.";break;case"invalid-configuration":s+="Client specified an invalid project configuration.";break;case"failed-precondition":s+="Request can not be executed in the current system state.";break;case"out-of-range":s+="Client specified an invalid range.";break;case"unauthenticated":s+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":s+="Client does not have sufficient permission.";break;case"not-found":s+="Specified resource is not found.";break;case"aborted":s+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":s+="The resource that a client tried to create already exists.";break;case"resource-exhausted":s+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":s+="Request cancelled by the client.";break;case"data-loss":s+="Unrecoverable data loss or data corruption.";break;case"unknown":s+="Unknown server error.";break;case"internal":s+="Internal server error.";break;case"not-implemented":s+="API method not implemented by the server.";break;case"unavailable":s+="Service unavailable.";break;case"deadline-exceeded":s+="Request deadline exceeded.";break;case"auth/user-disabled":s+="The user account has been disabled by an administrator.";break;case"auth/timeout":s+="The operation has timed out.";break;case"auth/too-many-requests":s+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":s+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":s+="A network error has occurred. Try again later.";break;case"restart-process":s+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":s+="No sign-in provider is available for the given email, please try with a different email."}return ae(s)}function Fm(){return ae("Please login again to perform this operation")}function Bs(i,s,a){var c=Error.call(this);if(this.message=c.message,"stack"in c&&(this.stack=c.stack),this.code=L_+i,!(i=s)){switch(i="",this.code){case"firebaseui/merge-conflict":i+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";break;default:i+=Mm()}i=ae(i).toString()}this.message=i||"",this.credential=a||null}f(Bs,Error),Bs.prototype.toJSON=function(){return{code:this.code,message:this.message}};var L_="firebaseui/";function Ri(){this.T=this.T,this.C=this.C}var M_=0;Ri.prototype.T=!1,Ri.prototype.m=function(){!this.T&&(this.T=!0,this.o(),M_!=0)&&(this[De]||(this[De]=++qt))};function $s(i,s){i.T?_(void 0)?s.call(void 0):s():(i.C||(i.C=[]),i.C.push(_(void 0)?ce(s,void 0):s))}Ri.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Hs(i){i&&typeof i.m=="function"&&i.m()}var x_=Object.freeze||function(i){return i},Vm=!ke||9<=Number(Us),U_=ke&&!Ti("9"),F_=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var i=!1,s=Object.defineProperty({},"passive",{get:function(){i=!0}});try{b.addEventListener("test",I,s),b.removeEventListener("test",I,s)}catch{}return i}();function bn(i,s){this.type=i,this.g=this.target=s,this.h=!1,this.qb=!0}bn.prototype.stopPropagation=function(){this.h=!0},bn.prototype.preventDefault=function(){this.qb=!1};function yt(i,s){if(bn.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,i){var a=this.type=i.type,c=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=s,s=i.relatedTarget){if(Gt){e:{try{Gl(s.nodeName);var h=!0;break e}catch{}h=!1}h||(s=null)}}else a=="mouseover"?s=i.fromElement:a=="mouseout"&&(s=i.toElement);this.relatedTarget=s,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.keyCode=i.keyCode||0,this.key=i.key||"",this.j=i.charCode||(a=="keypress"?i.keyCode:0),this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=T(i.pointerType)?i.pointerType:V_[i.pointerType]||"",this.a=i,i.defaultPrevented&&this.preventDefault()}}Y(yt,bn);var V_=x_({2:"touch",3:"pen",4:"mouse"});yt.prototype.stopPropagation=function(){yt.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},yt.prototype.preventDefault=function(){yt.K.preventDefault.call(this);var i=this.a;if(i.preventDefault)i.preventDefault();else if(i.returnValue=!1,U_)try{(i.ctrlKey||112<=i.keyCode&&123>=i.keyCode)&&(i.keyCode=-1)}catch{}};var qs="closure_listenable_"+(1e6*Math.random()|0),j_=0;function B_(i,s,a,c,h){this.listener=i,this.proxy=null,this.src=s,this.type=a,this.capture=!!c,this.La=h,this.key=++j_,this.sa=this.Ia=!1}function ou(i){i.sa=!0,i.listener=null,i.proxy=null,i.src=null,i.La=null}function au(i){this.src=i,this.a={},this.g=0}au.prototype.add=function(i,s,a,c,h){var d=i.toString();i=this.a[d],i||(i=this.a[d]=[],this.g++);var g=sh(i,s,c,h);return-1<g?(s=i[g],a||(s.Ia=!1)):(s=new B_(s,this.src,d,!!c,h),s.Ia=a,i.push(s)),s};function rh(i,s){var a=s.type;a in i.a&&Zp(i.a[a],s)&&(ou(s),i.a[a].length==0&&(delete i.a[a],i.g--))}function sh(i,s,a,c){for(var h=0;h<i.length;++h){var d=i[h];if(!d.sa&&d.listener==s&&d.capture==!!a&&d.La==c)return h}return-1}var oh="closure_lm_"+(1e6*Math.random()|0),ah={};function zt(i,s,a,c,h){if(c&&c.once)return Gs(i,s,a,c,h);if($(s)){for(var d=0;d<s.length;d++)zt(i,s[d],a,c,h);return null}return a=ch(a),i&&i[qs]?i.J.add(String(s),a,!1,ve(c)?!!c.capture:!!c,h):jm(i,s,a,!1,c,h)}function jm(i,s,a,c,h,d){if(!s)throw Error("Invalid event type");var g=ve(h)?!!h.capture:!!h,w=uu(i);if(w||(i[oh]=w=new au(i)),a=w.add(s,a,c,g,d),a.proxy)return a;if(c=$_(),a.proxy=c,c.src=i,c.listener=a,i.addEventListener)F_||(h=g),h===void 0&&(h=!1),i.addEventListener(s.toString(),c,h);else if(i.attachEvent)i.attachEvent(Bm(s.toString()),c);else if(i.addListener&&i.removeListener)i.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return a}function $_(){var i=H_,s=Vm?function(a){return i.call(s.src,s.listener,a)}:function(a){if(a=i.call(s.src,s.listener,a),!a)return a};return s}function Gs(i,s,a,c,h){if($(s)){for(var d=0;d<s.length;d++)Gs(i,s[d],a,c,h);return null}return a=ch(a),i&&i[qs]?i.J.add(String(s),a,!0,ve(c)?!!c.capture:!!c,h):jm(i,s,a,!0,c,h)}function Ni(i,s,a,c,h){if($(s))for(var d=0;d<s.length;d++)Ni(i,s[d],a,c,h);else c=ve(c)?!!c.capture:!!c,a=ch(a),i&&i[qs]?(i=i.J,s=String(s).toString(),s in i.a&&(d=i.a[s],a=sh(d,a,c,h),-1<a&&(ou(d[a]),za(d,a),d.length==0&&(delete i.a[s],i.g--)))):i&&(i=uu(i))&&(s=i.a[s.toString()],i=-1,s&&(i=sh(s,a,c,h)),(a=-1<i?s[i]:null)&&Yn(a))}function Yn(i){if(typeof i!="number"&&i&&!i.sa){var s=i.src;if(s&&s[qs])rh(s.J,i);else{var a=i.type,c=i.proxy;s.removeEventListener?s.removeEventListener(a,c,i.capture):s.detachEvent?s.detachEvent(Bm(a),c):s.addListener&&s.removeListener&&s.removeListener(c),(a=uu(s))?(rh(a,i),a.g==0&&(a.src=null,s[oh]=null)):ou(i)}}}function Bm(i){return i in ah?ah[i]:ah[i]="on"+i}function $m(i,s,a,c){var h=!0;if((i=uu(i))&&(s=i.a[s.toString()]))for(s=s.concat(),i=0;i<s.length;i++){var d=s[i];d&&d.capture==a&&!d.sa&&(d=Hm(d,c),h=h&&d!==!1)}return h}function Hm(i,s){var a=i.listener,c=i.La||i.src;return i.Ia&&Yn(i),a.call(c,s)}function H_(i,s){if(i.sa)return!0;if(!Vm){if(!s)e:{s=["window","event"];for(var a=b,c=0;c<s.length;c++)if(a=a[s[c]],a==null){s=null;break e}s=a}if(c=s,s=new yt(c,this),a=!0,!(0>c.keyCode||c.returnValue!=null)){e:{var h=!1;if(c.keyCode==0)try{c.keyCode=-1;break e}catch{h=!0}(h||c.returnValue==null)&&(c.returnValue=!0)}for(c=[],h=s.g;h;h=h.parentNode)c.push(h);for(i=i.type,h=c.length-1;!s.h&&0<=h;h--){s.g=c[h];var d=$m(c[h],i,!0,s);a=a&&d}for(h=0;!s.h&&h<c.length;h++)s.g=c[h],d=$m(c[h],i,!1,s),a=a&&d}return a}return Hm(i,new yt(s,this))}function uu(i){return i=i[oh],i instanceof au?i:null}var uh="__closure_events_fn_"+(1e9*Math.random()>>>0);function ch(i){return oe(i)?i:(i[uh]||(i[uh]=function(s){return i.handleEvent(s)}),i[uh])}function Fe(){Ri.call(this),this.J=new au(this),this.wb=this,this.Ha=null}Y(Fe,Ri),Fe.prototype[qs]=!0,Fe.prototype.Za=function(i){this.Ha=i},Fe.prototype.removeEventListener=function(i,s,a,c){Ni(this,i,s,a,c)};function Jn(i,s){var a,c=i.Ha;if(c)for(a=[];c;c=c.Ha)a.push(c);if(i=i.wb,c=s.type||s,T(s))s=new bn(s,i);else if(s instanceof bn)s.target=s.target||i;else{var h=s;s=new bn(c,i),Ka(s,h)}if(h=!0,a)for(var d=a.length-1;!s.h&&0<=d;d--){var g=s.g=a[d];h=cu(g,c,!0,s)&&h}if(s.h||(g=s.g=i,h=cu(g,c,!0,s)&&h,s.h||(h=cu(g,c,!1,s)&&h)),a)for(d=0;!s.h&&d<a.length;d++)g=s.g=a[d],h=cu(g,c,!1,s)&&h;return h}Fe.prototype.o=function(){if(Fe.K.o.call(this),this.J){var i=this.J,s;for(s in i.a){for(var a=i.a[s],c=0;c<a.length;c++)ou(a[c]);delete i.a[s],i.g--}}this.Ha=null};function cu(i,s,a,c){if(s=i.J.a[String(s)],!s)return!0;s=s.concat();for(var h=!0,d=0;d<s.length;++d){var g=s[d];if(g&&!g.sa&&g.capture==a){var w=g.listener,E=g.La||g.src;g.Ia&&rh(i.J,g),h=w.call(E,c)!==!1&&h}}return h&&c.qb!=0}var At={},qm=0;function Gm(i,s){if(!i)throw Error("Event target element must be provided!");if(i=lh(i),At[i]&&At[i].length)for(var a=0;a<At[i].length;a++)Jn(At[i][a],s)}function q_(i){var s=lh(i.N());At[s]&&At[s].length&&(jE(At[s],function(a){return a==i}),At[s].length||delete At[s])}function lh(i){return typeof i.a>"u"&&(i.a=qm,qm++),i.a}function lu(i){if(!i)throw Error("Event target element must be provided!");Fe.call(this),this.a=i}f(lu,Fe),lu.prototype.N=function(){return this.a},lu.prototype.register=function(){var i=lh(this.N());At[i]?Vt(At[i],this)||At[i].push(this):At[i]=[this]};function zm(i){if(!i)return!1;try{return!!i.$goog_Thenable}catch{return!1}}function hh(i,s){this.h=i,this.j=s,this.g=0,this.a=null}hh.prototype.get=function(){if(0<this.g){this.g--;var i=this.a;this.a=i.next,i.next=null}else i=this.h();return i};function Km(i,s){i.j(s),100>i.g&&(i.g++,s.next=i.a,i.a=s)}function Wm(){this.g=this.a=null}var Ym=new hh(function(){return new dh},function(i){i.reset()});Wm.prototype.add=function(i,s){var a=Ym.get();a.set(i,s),this.g?this.g.next=a:this.a=a,this.g=a};function G_(){var i=Qm,s=null;return i.a&&(s=i.a,i.a=i.a.next,i.a||(i.g=null),s.next=null),s}function dh(){this.next=this.g=this.a=null}dh.prototype.set=function(i,s){this.a=i,this.g=s,this.next=null},dh.prototype.reset=function(){this.next=this.g=this.a=null};function Jm(i){b.setTimeout(function(){throw i},0)}var fh;function z_(){var i=b.MessageChannel;if(typeof i>"u"&&typeof window<"u"&&window.postMessage&&window.addEventListener&&!ee("Presto")&&(i=function(){var h=document.createElement("IFRAME");h.style.display="none",h.src="",document.documentElement.appendChild(h);var d=h.contentWindow;h=d.document,h.open(),h.write(""),h.close();var g="callImmediate"+Math.random(),w=d.location.protocol=="file:"?"*":d.location.protocol+"//"+d.location.host;h=ce(function(E){(w=="*"||E.origin==w)&&E.data==g&&this.port1.onmessage()},this),d.addEventListener("message",h,!1),this.port1={},this.port2={postMessage:function(){d.postMessage(g,w)}}}),typeof i<"u"&&!ee("Trident")&&!ee("MSIE")){var s=new i,a={},c=a;return s.port1.onmessage=function(){if(_(a.next)){a=a.next;var h=a.gb;a.gb=null,h()}},function(h){c.next={gb:h},c=c.next,s.port2.postMessage(0)}}return typeof document<"u"&&"onreadystatechange"in document.createElement("SCRIPT")?function(h){var d=document.createElement("SCRIPT");d.onreadystatechange=function(){d.onreadystatechange=null,d.parentNode.removeChild(d),d=null,h(),h=null},document.documentElement.appendChild(d)}:function(h){b.setTimeout(h,0)}}function ph(i,s){hu||K_(),mh||(hu(),mh=!0),Qm.add(i,s)}var hu;function K_(){if(b.Promise&&b.Promise.resolve){var i=b.Promise.resolve(void 0);hu=function(){i.then(Xm)}}else hu=function(){var s=Xm;!oe(b.setImmediate)||b.Window&&b.Window.prototype&&!ee("Edge")&&b.Window.prototype.setImmediate==b.setImmediate?(fh||(fh=z_()),fh(s)):b.setImmediate(s)}}var mh=!1,Qm=new Wm;function Xm(){for(var i;i=G_();){try{i.a.call(i.g)}catch(s){Jm(s)}Km(Ym,i)}mh=!1}function Ve(i){if(this.a=Pi,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,i!=I)try{var s=this;i.call(void 0,function(a){Di(s,zs,a)},function(a){if(!(a instanceof gr))try{throw a instanceof Error?a:Error("Promise rejected.")}catch{}Di(s,In,a)})}catch(a){Di(this,In,a)}}var Pi=0,zs=2,In=3;function Zm(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}Zm.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var eg=new hh(function(){return new Zm},function(i){i.reset()});function gh(i,s,a){var c=eg.get();return c.s=i,c.g=s,c.j=a,c}function Re(i){if(i instanceof Ve)return i;var s=new Ve(I);return Di(s,zs,i),s}function mr(i){return new Ve(function(s,a){a(i)})}Ve.prototype.then=function(i,s,a){return ng(this,oe(i)?i:null,oe(s)?s:null,a)},Ve.prototype.$goog_Thenable=!0,t=Ve.prototype,t.fc=function(i,s){return i=gh(i,i,s),i.h=!0,vh(this,i),this},t.Ca=function(i,s){return ng(this,null,i,s)},t.cancel=function(i){this.a==Pi&&ph(function(){var s=new gr(i);tg(this,s)},this)};function tg(i,s){if(i.a==Pi)if(i.h){var a=i.h;if(a.g){for(var c=0,h=null,d=null,g=a.g;g&&(g.h||(c++,g.a==i&&(h=g),!(h&&1<c)));g=g.next)h||(d=g);h&&(a.a==Pi&&c==1?tg(a,s):(d?(c=d,c.next==a.j&&(a.j=c),c.next=c.next.next):rg(a),sg(a,h,In,s)))}i.h=null}else Di(i,In,s)}function vh(i,s){i.g||i.a!=zs&&i.a!=In||ig(i),i.j?i.j.next=s:i.g=s,i.j=s}function ng(i,s,a,c){var h=gh(null,null,null);return h.a=new Ve(function(d,g){h.s=s?function(w){try{var E=s.call(c,w);d(E)}catch(R){g(R)}}:d,h.g=a?function(w){try{var E=a.call(c,w);!_(E)&&w instanceof gr?g(w):d(E)}catch(R){g(R)}}:g}),h.a.h=i,vh(i,h),h.a}t.hc=function(i){this.a=Pi,Di(this,zs,i)},t.ic=function(i){this.a=Pi,Di(this,In,i)};function Di(i,s,a){if(i.a==Pi){i===a&&(s=In,a=new TypeError("Promise cannot resolve to itself")),i.a=1;e:{var c=a,h=i.hc,d=i.ic;if(c instanceof Ve){vh(c,gh(h||I,d||null,i));var g=!0}else if(zm(c))c.then(h,d,i),g=!0;else{if(ve(c))try{var w=c.then;if(oe(w)){W_(c,w,h,d,i),g=!0;break e}}catch(E){d.call(i,E),g=!0;break e}g=!1}}g||(i.A=a,i.a=s,i.h=null,ig(i),s!=In||a instanceof gr||Y_(i,a))}}function W_(i,s,a,c,h){function d(E){w||(w=!0,c.call(h,E))}function g(E){w||(w=!0,a.call(h,E))}var w=!1;try{s.call(i,g,d)}catch(E){d(E)}}function ig(i){i.i||(i.i=!0,ph(i.Hb,i))}function rg(i){var s=null;return i.g&&(s=i.g,i.g=s.next,s.next=null),i.g||(i.j=null),s}t.Hb=function(){for(var i;i=rg(this);)sg(this,i,this.a,this.A);this.i=!1};function sg(i,s,a,c){if(a==In&&s.g&&!s.h)for(;i&&i.s;i=i.h)i.s=!1;if(s.a)s.a.h=null,og(s,a,c);else try{s.h?s.s.call(s.j):og(s,a,c)}catch(h){ag.call(null,h)}Km(eg,s)}function og(i,s,a){s==zs?i.s.call(i.j,a):i.g&&i.g.call(i.j,a)}function Y_(i,s){i.s=!0,ph(function(){i.s&&ag.call(null,s)})}var ag=Jm;function gr(i){Tt.call(this,i)}Y(gr,Tt),gr.prototype.name="cancel";function ug(i,s,a){s||(s={}),a=a||window;var c=i instanceof kt?i:Xa(typeof i.href<"u"?i.href:String(i));i=s.target||i.target;var h=[];for(d in s)switch(d){case"width":case"height":case"top":case"left":h.push(d+"="+s[d]);break;case"target":case"noopener":case"noreferrer":break;default:h.push(d+"="+(s[d]?1:0))}var d=h.join(",");return(ee("iPhone")&&!ee("iPod")&&!ee("iPad")||ee("iPad")||ee("iPod"))&&a.navigator&&a.navigator.standalone&&i&&i!="_self"?(d=a.document.createElement("A"),c=c instanceof kt?c:_m(c),d.href=Gn(c),d.setAttribute("target",i),s.noreferrer&&d.setAttribute("rel","noreferrer"),s=document.createEvent("MouseEvent"),s.initMouseEvent("click",!0,!0,a,1),d.dispatchEvent(s),a={}):s.noreferrer?(a=a.open("",i,d),s=Gn(c).toString(),a&&(l_&&s.indexOf(";")!=-1&&(s="'"+s.replace(/'/g,"%27")+"'"),a.opener=null,s=Fs('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+ur(s)+'">',null),a.document.write(Za(s)),a.document.close())):(a=a.open(Gn(c).toString(),i,d))&&s.noopener&&(a.opener=null),a}function cg(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch{}return!1}function vr(i){ug(i,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function du(i,s){if(i=ve(i)&&i.nodeType==1?i:document.querySelector(String(i)),i==null)throw Error(s||"Cannot find element.");return i}function En(){return window.location.href}function J_(){var i=null;return new Ve(function(s){b.document.readyState=="complete"?s():(i=function(){s()},Gs(window,"load",i))}).Ca(function(s){throw Ni(window,"load",i),s})}function Q_(){for(var i=32,s=[];0<i;)s.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),i--;return s.join("")}function X_(i,s,a){return a=a===void 0?{}:a,Object.keys(i).filter(function(c){return s.includes(c)}).reduce(function(c,h){return c[h]=i[h],c},a)}function Qn(i){var s=t2;this.s=[],this.T=s,this.O=i||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}Qn.prototype.cancel=function(i){if(this.a)this.h instanceof Qn&&this.h.cancel();else{if(this.g){var s=this.g;delete this.g,i?s.cancel(i):(s.C--,0>=s.C&&s.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(i=new Ws,fu(this),Ks(this,!1,i))}},Qn.prototype.L=function(i,s){this.A=!1,Ks(this,i,s)};function Ks(i,s,a){i.a=!0,i.h=a,i.j=!s,dg(i)}function fu(i){if(i.a){if(!i.J)throw new pu;i.J=!1}}Qn.prototype.callback=function(i){fu(this),Ks(this,!0,i)};function lg(i,s,a){i.s.push([s,a,void 0]),i.a&&dg(i)}Qn.prototype.then=function(i,s,a){var c,h,d=new Ve(function(g,w){c=g,h=w});return lg(this,c,function(g){g instanceof Ws?d.cancel():h(g)}),d.then(i,s,a)},Qn.prototype.$goog_Thenable=!0;function hg(i){return VE(i.s,function(s){return oe(s[1])})}function dg(i){if(i.i&&i.a&&hg(i)){var s=i.i,a=mu[s];a&&(b.clearTimeout(a.a),delete mu[s]),i.i=0}i.g&&(i.g.C--,delete i.g),s=i.h;for(var c=a=!1;i.s.length&&!i.A;){var h=i.s.shift(),d=h[0],g=h[1];if(h=h[2],d=i.j?g:d)try{var w=d.call(h||i.O,s);_(w)&&(i.j=i.j&&(w==s||w instanceof Error),i.h=s=w),(zm(s)||typeof b.Promise=="function"&&s instanceof b.Promise)&&(c=!0,i.A=!0)}catch(E){s=E,i.j=!0,hg(i)||(a=!0)}}i.h=s,c&&(w=ce(i.L,i,!0),c=ce(i.L,i,!1),s instanceof Qn?(lg(s,w,c),s.l=!0):s.then(w,c)),a&&(s=new fg(s),mu[s.a]=s,i.i=s.a)}function pu(){Tt.call(this)}Y(pu,Tt),pu.prototype.message="Deferred has already fired",pu.prototype.name="AlreadyCalledError";function Ws(){Tt.call(this)}Y(Ws,Tt),Ws.prototype.message="Deferred was canceled",Ws.prototype.name="CanceledError";function fg(i){this.a=b.setTimeout(ce(this.h,this),0),this.g=i}fg.prototype.h=function(){throw delete mu[this.a],this.g};var mu={};function Z_(i){var s={},a=s.document||document,c=bm(i).toString(),h=document.createElement("SCRIPT"),d={rb:h,sb:void 0},g=new Qn(d),w=null,E=s.timeout!=null?s.timeout:5e3;return 0<E&&(w=window.setTimeout(function(){gu(h,!0);var R=new yh(i2,"Timeout reached for loading script "+c);fu(g),Ks(g,!1,R)},E),d.sb=w),h.onload=h.onreadystatechange=function(){h.readyState&&h.readyState!="loaded"&&h.readyState!="complete"||(gu(h,s.xc||!1,w),g.callback(null))},h.onerror=function(){gu(h,!0,w);var R=new yh(n2,"Error while loading script "+c);fu(g),Ks(g,!1,R)},d=s.attributes||{},Ka(d,{type:"text/javascript",charset:"UTF-8"}),v_(h,d),g_(h,i),e2(a).appendChild(h),g}function e2(i){var s=(i||document).getElementsByTagName("HEAD");return s&&s.length!=0?s[0]:i.documentElement}function t2(){if(this&&this.rb){var i=this.rb;i&&i.tagName=="SCRIPT"&&gu(i,!0,this.sb)}}function gu(i,s,a){a!=null&&b.clearTimeout(a),i.onload=I,i.onerror=I,i.onreadystatechange=I,s&&window.setTimeout(function(){ki(i)},0)}var n2=0,i2=1;function yh(i,s){var a="Jsloader error (code #"+i+")";s&&(a+=": "+s),Tt.call(this,a),this.code=i}Y(yh,Tt);function Ys(){return b.google&&b.google.accounts&&b.google.accounts.id||null}function wh(i){this.a=i||Ys(),this.h=!1,this.g=null}wh.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())};function pg(i,s,a){if(i.a&&s)return function(){return i.h=!0,new Ve(function(h){i.g=h,i.a.initialize({client_id:s,callback:h,auto_select:!a}),i.a.prompt()})}();if(s){var c=bh.Xa().load().then(function(){return i.a=Ys(),pg(i,s,a)}).Ca(function(){return null});return Re(c)}return Re(null)}S(wh);var r2=new dr(wm,"https://accounts.google.com/gsi/client");function bh(){this.a=null}bh.prototype.load=function(){var i=this;if(this.a)return this.a;var s=f_();return Ys()?Re():this.a=J_().then(function(){if(!Ys())return new Ve(function(a,c){var h=setTimeout(function(){i.a=null,c(Error("Network error!"))},1e4);b.onGoogleLibraryLoad=function(){clearTimeout(h),a()},Re(Z_(s)).then(function(){Ys()&&a()}).Ca(function(d){clearTimeout(h),i.a=null,c(d)})})})},S(bh);function Ih(i,s){this.a=i,this.g=s||function(a){throw a}}Ih.prototype.confirm=function(i){return Re(this.a.confirm(i)).Ca(this.g)};function Eh(i,s,a){this.reset(i,s,a,void 0,void 0)}Eh.prototype.a=null,Eh.prototype.reset=function(i,s,a,c,h){this.h=c||bi(),this.j=i,this.s=s,this.g=a,delete this.a};function _h(i){this.s=i,this.a=this.h=this.j=this.g=null}function vu(i,s){this.name=i,this.value=s}vu.prototype.toString=function(){return this.name};var mg=new vu("SEVERE",1e3),gg=new vu("WARNING",900),vg=new vu("CONFIG",700);function yg(i){return i.j?i.j:i.g?yg(i.g):(wn("Root logger has no level set."),null)}_h.prototype.log=function(i,s,a){if(i.value>=yg(this).value)for(oe(s)&&(s=s()),i=new Eh(i,String(s),this.s),a&&(i.a=a),a=this;a;){var c=a,h=i;if(c.a)for(var d=0;s=c.a[d];d++)s(h);a=a.g}};var Sh={},Js=null;function wg(){Js||(Js=new _h(""),Sh[""]=Js,Js.j=vg)}function bg(i){wg();var s;if(!(s=Sh[i])){s=new _h(i);var a=i.lastIndexOf("."),c=i.substr(a+1);a=bg(i.substr(0,a)),a.h||(a.h={}),a.h[c]=s,s.g=a,Sh[i]=s}return s}function yu(){this.a=bi()}var Th=null;yu.prototype.set=function(i){this.a=i},yu.prototype.reset=function(){this.set(bi())},yu.prototype.get=function(){return this.a};function Qs(i){this.j=i||"",Th||(Th=new yu),this.s=Th}Qs.prototype.a=!0,Qs.prototype.g=!0,Qs.prototype.h=!1;function Oi(i){return 10>i?"0"+i:String(i)}function s2(i,s){i=(i.h-s)/1e3,s=i.toFixed(3);var a=0;if(1>i)a=2;else for(;100>i;)a++,i*=10;for(;0<a--;)s=" "+s;return s}function Ig(i){Qs.call(this,i)}Y(Ig,Qs);function o2(i,s){var a=[];if(a.push(i.j," "),i.g){var c=new Date(s.h);a.push("[",Oi(c.getFullYear()-2e3)+Oi(c.getMonth()+1)+Oi(c.getDate())+" "+Oi(c.getHours())+":"+Oi(c.getMinutes())+":"+Oi(c.getSeconds())+"."+Oi(Math.floor(c.getMilliseconds()/10)),"] ")}return a.push("[",s2(s,i.s.get()),"s] "),a.push("[",s.g,"] "),a.push(s.s),i.h&&(s=s.a)&&a.push(`
`,s instanceof Error?s.message:s.toString()),i.a&&a.push(`
`),a.join("")}function Eg(){this.s=ce(this.h,this),this.a=new Ig,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Eg.prototype.h=function(i){function s(d){if(d){if(d.value>=mg.value)return"error";if(d.value>=gg.value)return"warn";if(d.value>=vg.value)return"log"}return"debug"}if(!this.j[i.g]){var a=o2(this.a,i),c=a2;if(c){var h=s(i.j);u2(c,h,a,i.a)}}};var a2=b.console;function u2(i,s,a,c){i[s]?i[s](a,c||""):i.log(a,c||"")}function Rt(i,s){var a=Ch;a&&a.log(mg,i,s)}var Ch;Ch=bg("firebaseui");var kh=new Eg;if(kh.g!=1){var wu;wg(),wu=Js;var c2=kh.s;wu.a||(wu.a=[]),wu.a.push(c2),kh.g=!0}function Xn(i){var s=Ch;s&&s.log(gg,i,void 0)}function _g(){this.a=(typeof document>"u"?null:document)||{cookie:""}}t=_g.prototype,t.set=function(i,s,a,c,h,d){if(/[;=\s]/.test(i))throw Error('Invalid cookie name "'+i+'"');if(/[;\r\n]/.test(s))throw Error('Invalid cookie value "'+s+'"');_(a)||(a=-1),h=h?";domain="+h:"",c=c?";path="+c:"",d=d?";secure":"",a=0>a?"":a==0?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(bi()+1e3*a).toUTCString(),this.a.cookie=i+"="+s+h+c+a+d},t.get=function(i,s){for(var a=i+"=",c=(this.a.cookie||"").split(";"),h=0,d;h<c.length;h++){if(d=Ct(c[h]),d.lastIndexOf(a,0)==0)return d.substr(a.length);if(d==i)return""}return s},t.ja=function(){return Ah(this).keys},t.la=function(){return Ah(this).values},t.clear=function(){for(var i=Ah(this).keys,s=i.length-1;0<=s;s--){var a=i[s];this.get(a),this.set(a,"",0,void 0,void 0)}};function Ah(i){i=(i.a.cookie||"").split(";");for(var s=[],a=[],c,h,d=0;d<i.length;d++)h=Ct(i[d]),c=h.indexOf("="),c==-1?(s.push(""),a.push(h)):(s.push(h.substring(0,c)),a.push(h.substring(c+1)));return{keys:s,values:a}}var bu=new _g;function Sg(){}function yr(i,s,a,c){this.h=typeof i<"u"&&i!==null?i:-1,this.g=s||null,this.a=a||null,this.j=!!c}f(yr,Sg),yr.prototype.set=function(i,s){bu.set(i,s,this.h,this.g,this.a,this.j)},yr.prototype.get=function(i){return bu.get(i)||null},yr.prototype.ra=function(i){var s=this.g,a=this.a;bu.get(i),bu.set(i,"",0,s,a)};function Rh(i,s){this.g=i,this.a=s||null}function Tg(i){return{email:i.g,credential:i.a&&i.a.toJSON()}}function Cg(i){if(i&&i.email){var s=i.credential&&j.auth.AuthCredential.fromJSON(i.credential);return new Rh(i.email,s)}return null}function kg(i){this.a=i||null}function Ag(i){for(var s=[],a=0,c=0;c<i.length;c++){var h=i.charCodeAt(c);255<h&&(s[a++]=h&255,h>>=8),s[a++]=h}return s}function l2(i){return FE(i,function(s){return s=s.toString(16),1<s.length?s:"0"+s}).join("")}function Iu(i){for(this.i=i,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(wr*(this.j+1)),i=0;i<this.g;i++)this.a[i]=[this.i[4*i],this.i[4*i+1],this.i[4*i+2],this.i[4*i+3]];var s=Array(4);for(i=this.g;i<wr*(this.j+1);i++){if(s[0]=this.a[i-1][0],s[1]=this.a[i-1][1],s[2]=this.a[i-1][2],s[3]=this.a[i-1][3],i%this.g==0){var a=s,c=a[0];a[0]=a[1],a[1]=a[2],a[2]=a[3],a[3]=c,Og(s),s[0]^=_u[i/this.g][0],s[1]^=_u[i/this.g][1],s[2]^=_u[i/this.g][2],s[3]^=_u[i/this.g][3]}else 6<this.g&&i%this.g==4&&Og(s);this.a[i]=Array(4),this.a[i][0]=this.a[i-this.g][0]^s[0],this.a[i][1]=this.a[i-this.g][1]^s[1],this.a[i][2]=this.a[i-this.g][2]^s[2],this.a[i][3]=this.a[i-this.g][3]^s[3]}}Iu.prototype.A=16;var wr=Iu.prototype.A/4;function Rg(i,s){for(var a,c=0;c<wr;c++)for(var h=0;4>h;h++)a=4*h+c,a=s[a],i.h[c][h]=a}function Ng(i){for(var s=[],a=0;a<wr;a++)for(var c=0;4>c;c++)s[4*c+a]=i.h[a][c];return s}function br(i,s){for(var a=0;4>a;a++)for(var c=0;4>c;c++)i.h[a][c]^=i.a[4*s+c][a]}function Eu(i,s){for(var a=0;4>a;a++)for(var c=0;4>c;c++)i.h[a][c]=s[i.h[a][c]]}function Pg(i){for(var s=1;4>s;s++)for(var a=0;4>a;a++)i.s[s][a]=i.h[s][a];for(s=1;4>s;s++)for(a=0;4>a;a++)i.h[s][a]=i.s[s][(a+s)%wr]}function Dg(i){for(var s=1;4>s;s++)for(var a=0;4>a;a++)i.s[s][(a+s)%wr]=i.h[s][a];for(s=1;4>s;s++)for(a=0;4>a;a++)i.h[s][a]=i.s[s][a]}function Og(i){i[0]=Ir[i[0]],i[1]=Ir[i[1]],i[2]=Ir[i[2]],i[3]=Ir[i[3]]}var Ir=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Lg=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],_u=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Su=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Tu=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Cu=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],ku=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Au=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Ru=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Mg(i,s){i=new Iu(Ug(i)),s=Ag(s);for(var a=s.splice(0,16),c="",h;a.length;){h=16-a.length;for(var d=0;d<h;d++)a.push(0);for(h=i,Rg(h,a),br(h,0),a=1;a<h.j;++a){Eu(h,Ir),Pg(h),d=h.h;for(var g=h.s[0],w=0;4>w;w++)g[0]=d[0][w],g[1]=d[1][w],g[2]=d[2][w],g[3]=d[3][w],d[0][w]=Su[g[0]]^Tu[g[1]]^g[2]^g[3],d[1][w]=g[0]^Su[g[1]]^Tu[g[2]]^g[3],d[2][w]=g[0]^g[1]^Su[g[2]]^Tu[g[3]],d[3][w]=Tu[g[0]]^g[1]^g[2]^Su[g[3]];br(h,a)}Eu(h,Ir),Pg(h),br(h,h.j),c+=l2(Ng(h)),a=s.splice(0,16)}return c}function xg(i,s){i=new Iu(Ug(i));for(var a=[],c=0;c<s.length;c+=2)a.push(parseInt(s.substring(c,c+2),16));var h=a.splice(0,16);for(s="";h.length;){for(c=i,Rg(c,h),br(c,c.j),h=1;h<c.j;++h){Dg(c),Eu(c,Lg),br(c,c.j-h);for(var d=c.h,g=c.s[0],w=0;4>w;w++)g[0]=d[0][w],g[1]=d[1][w],g[2]=d[2][w],g[3]=d[3][w],d[0][w]=Ru[g[0]]^ku[g[1]]^Au[g[2]]^Cu[g[3]],d[1][w]=Cu[g[0]]^Ru[g[1]]^ku[g[2]]^Au[g[3]],d[2][w]=Au[g[0]]^Cu[g[1]]^Ru[g[2]]^ku[g[3]],d[3][w]=ku[g[0]]^Au[g[1]]^Cu[g[2]]^Ru[g[3]]}if(Dg(c),Eu(c,Lg),br(c,0),c=Ng(c),8192>=c.length)c=String.fromCharCode.apply(null,c);else{for(h="",d=0;d<c.length;d+=8192)h+=String.fromCharCode.apply(null,$E(c,d,d+8192));c=h}s+=c,h=a.splice(0,16)}return s.replace(/(\x00)+$/,"")}function Ug(i){i=Ag(i.substring(0,32));for(var s=32-i.length,a=0;a<s;a++)i.push(0);return i}function Fg(i){var s=[];return Nh(new h2,i,s),s.join("")}function h2(){}function Nh(i,s,a){if(s==null)a.push("null");else{if(typeof s=="object"){if($(s)){var c=s;s=c.length,a.push("[");for(var h="",d=0;d<s;d++)a.push(h),Nh(i,c[d],a),h=",";a.push("]");return}if(s instanceof String||s instanceof Number||s instanceof Boolean)s=s.valueOf();else{a.push("{"),h="";for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(d=s[c],typeof d!="function"&&(a.push(h),jg(c,a),a.push(":"),Nh(i,d,a),h=","));a.push("}");return}}switch(typeof s){case"string":jg(s,a);break;case"number":a.push(isFinite(s)&&!isNaN(s)?String(s):"null");break;case"boolean":a.push(String(s));break;case"function":a.push("null");break;default:throw Error("Unknown type: "+typeof s)}}}var Vg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\u000b"},d2=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function jg(i,s){s.push('"',i.replace(d2,function(a){var c=Vg[a];return c||(c="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Vg[a]=c),c}),'"')}function Xs(i){this.a=i}Xs.prototype.set=function(i,s){_(s)?this.a.set(i,Fg(s)):this.a.ra(i)},Xs.prototype.get=function(i){try{var s=this.a.get(i)}catch{return}if(s!==null)try{return JSON.parse(s)}catch{throw"Storage: Invalid value was encountered"}};function Nu(){}Y(Nu,Sg),Nu.prototype.clear=function(){var i=QE(this.ha(!0)),s=this;Os(i,function(a){s.ra(a)})};function Pu(i){this.a=i}Y(Pu,Nu);function Du(i){if(!i.a)return!1;try{return i.a.setItem("__sak","1"),i.a.removeItem("__sak"),!0}catch{return!1}}t=Pu.prototype,t.set=function(i,s){try{this.a.setItem(i,s)}catch{throw this.a.length==0?"Storage mechanism: Storage disabled":"Storage mechanism: Quota exceeded"}},t.get=function(i){if(i=this.a.getItem(i),!T(i)&&i!==null)throw"Storage mechanism: Invalid value was encountered";return i},t.ra=function(i){this.a.removeItem(i)},t.ha=function(i){var s=0,a=this.a,c=new Ii;return c.next=function(){if(s>=a.length)throw cr;var h=a.key(s++);if(i)return h;if(h=a.getItem(h),!T(h))throw"Storage mechanism: Invalid value was encountered";return h},c},t.clear=function(){this.a.clear()},t.key=function(i){return this.a.key(i)};function Ph(){var i=null;try{i=window.localStorage||null}catch{}this.a=i}Y(Ph,Pu);function Dh(){var i=null;try{i=window.sessionStorage||null}catch{}this.a=i}Y(Dh,Pu);function Er(i,s){this.g=i,this.a=s+"::"}Y(Er,Nu),Er.prototype.set=function(i,s){this.g.set(this.a+i,s)},Er.prototype.get=function(i){return this.g.get(this.a+i)},Er.prototype.ra=function(i){this.g.ra(this.a+i)},Er.prototype.ha=function(i){var s=this.g.ha(!0),a=this,c=new Ii;return c.next=function(){for(var h=s.next();h.substr(0,a.a.length)!=a.a;)h=s.next();return i?h.substr(a.a.length):a.g.get(h)},c},Du(new Ph);var Bg,$g=new Dh;Bg=Du($g)?new Er($g,"firebaseui"):null;var Oh=new Xs(Bg),Lh={name:"pendingEmailCredential",storage:Oh},Li={name:"redirectStatus",storage:Oh},Zs={name:"redirectUrl",storage:Oh},_r={name:"emailForSignIn",storage:new Xs(new yr(3600,"/"))},eo={name:"pendingEncryptedCredential",storage:new Xs(new yr(3600,"/"))};function Sr(i,s){return i.storage.get(s?i.name+":"+s:i.name)}function Et(i,s){i.storage.a.ra(s?i.name+":"+s:i.name)}function Tr(i,s,a){i.storage.set(a?i.name+":"+a:i.name,s)}function Hg(i){return Sr(Zs,i)||null}function nn(i){return i=Sr(Lh,i)||null,Cg(i)}function rn(i){Et(Lh,i)}function qg(i,s){Tr(Lh,Tg(i),s)}function Mh(i){return(i=Sr(Li,i)||null)&&typeof i.tenantId<"u"?new kg(i.tenantId):null}function f2(i,s){Tr(Li,{tenantId:i.a},s)}function p2(i,s){s=Sr(_r,s);var a=null;if(s)try{var c=xg(i,s),h=JSON.parse(c);a=h&&h.email||null}catch{}return a}function m2(i,s){s=Sr(eo,s);var a=null;if(s)try{var c=xg(i,s);a=JSON.parse(c)}catch{}return Cg(a||null)}function g2(i,s,a){Tr(eo,Mg(i,JSON.stringify(Tg(s))),a)}function xh(){this.W={}}function Oe(i,s,a){if(s.toLowerCase()in i.W)throw Error("Configuration "+s+" has already been defined.");i.W[s.toLowerCase()]=a}function Uh(i,s,a){if(!(s.toLowerCase()in i.W))throw Error("Configuration "+s+" is not defined.");i.W[s.toLowerCase()]=a}xh.prototype.get=function(i){if(!(i.toLowerCase()in this.W))throw Error("Configuration "+i+" is not defined.");return this.W[i.toLowerCase()]};function Fh(i,s){if(i=i.get(s),!i)throw Error("Configuration "+s+" is required.");return i}function Vh(){this.g=void 0,this.a={}}t=Vh.prototype,t.set=function(i,s){Gg(this,i,s,!1)},t.add=function(i,s){Gg(this,i,s,!0)};function Gg(i,s,a,c){for(var h=0;h<s.length;h++){var d=s.charAt(h);i.a[d]||(i.a[d]=new Vh),i=i.a[d]}if(c&&i.g!==void 0)throw Error('The collection already contains the key "'+s+'"');i.g=a}t.get=function(i){e:{for(var s=this,a=0;a<i.length;a++)if(s=s.a[i.charAt(a)],!s){i=void 0;break e}i=s}return i?i.g:void 0},t.la=function(){var i=[];return zg(this,i),i};function zg(i,s){i.g!==void 0&&s.push(i.g);for(var a in i.a)zg(i.a[a],s)}t.ja=function(){var i=[];return Kg(this,"",i),i};function Kg(i,s,a){i.g!==void 0&&a.push(s);for(var c in i.a)Kg(i.a[c],s+c,a)}t.clear=function(){this.a={},this.g=void 0};function Wg(i){for(this.a=i,this.g=new Vh,i=0;i<this.a.length;i++){var s=this.g.get("+"+this.a[i].b);s?s.push(this.a[i]):this.g.add("+"+this.a[i].b,[this.a[i]])}}function Ou(i,s){i=i.g;var a={},c=0;for(i.g!==void 0&&(a[c]=i.g);c<s.length;c++){var h=s.charAt(c);if(!(h in i.a))break;i=i.a[h],i.g!==void 0&&(a[c]=i.g)}for(var d in a)if(a.hasOwnProperty(d))return a[d];return[]}function Mi(i){for(var s=0;s<wt.length;s++)if(wt[s].c===i)return wt[s];return null}function Yg(i){i=i.toUpperCase();for(var s=[],a=0;a<wt.length;a++)wt[a].f===i&&s.push(wt[a]);return s}function Jg(i){if(0<i.length&&i.charAt(0)=="+"){i=i.substring(1);for(var s=[],a=0;a<wt.length;a++)wt[a].b==i&&s.push(wt[a]);i=s}else i=Yg(i);return i}function Qg(i){i.sort(function(s,a){return s.name.localeCompare(a.name,"en")})}var wt=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];Qg(wt);var to=new Wg(wt);function Xg(i,s){this.a=i,this.Aa=s}function Zg(i){i=Ct(i);var s=Ou(to,i);return 0<s.length?new Xg(s[0].b=="1"?"1-US-0":s[0].c,Ct(i.substr(s[0].b.length+1))):null}function jh(i){var s=Mi(i.a);if(!s)throw Error("Country ID "+i.a+" not found.");return"+"+s.b+i.Aa}function ev(i,s){for(var a=0;a<i.length;a++)if(!Vt(tv,i[a])&&(Cr!==null&&i[a]in Cr||Vt(s,i[a])))return i[a];return null}var tv=["emailLink","password","phone"],Cr={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function v2(){this.a=new xh,Oe(this.a,"autoUpgradeAnonymousUsers"),Oe(this.a,"callbacks"),Oe(this.a,"credentialHelper",xu),Oe(this.a,"immediateFederatedRedirect",!1),Oe(this.a,"popupMode",!1),Oe(this.a,"privacyPolicyUrl"),Oe(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),Oe(this.a,"queryParameterForWidgetMode","mode"),Oe(this.a,"signInFlow"),Oe(this.a,"signInOptions"),Oe(this.a,"signInSuccessUrl"),Oe(this.a,"siteName"),Oe(this.a,"tosUrl"),Oe(this.a,"widgetUrl"),Oe(this.a,"adminRestrictedOperation")}function Lu(i){var s=!!i.a.get("autoUpgradeAnonymousUsers");return s&&!hv(i)&&Rt('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),s}function Mu(i){i=i.a.get("signInOptions")||[];for(var s=[],a=0;a<i.length;a++){var c=i[a];c=ve(c)?c:{provider:c},c.provider&&s.push(c)}return s}function Nt(i,s){i=Mu(i);for(var a=0;a<i.length;a++)if(i[a].provider===s)return i[a];return null}function kr(i){return Mu(i).map(function(s){return s.provider})}function no(i,s){i=nv(i);for(var a=0;a<i.length;a++)if(i[a].providerId===s)return i[a];return null}function nv(i){return Mu(i).map(function(s){if(Cr[s.provider]||Vt(k2,s.provider)){s={providerId:s.provider,S:s.providerName||null,V:s.fullLabel||null,ta:s.buttonColor||null,za:s.iconUrl?Gn(Xa(s.iconUrl)).toString():null};for(var a in s)s[a]===null&&delete s[a];return s}return{providerId:s.provider,S:s.providerName||null,V:s.fullLabel||null,ta:s.buttonColor||null,za:s.iconUrl?Gn(Xa(s.iconUrl)).toString():null,Ob:s.loginHintKey||null}})}function iv(i){var s=Nt(i,j.auth.GoogleAuthProvider.PROVIDER_ID),a;if(a=s&&s.clientId){e:{if((window.location&&window.location.protocol)==="http:"||(window.location&&window.location.protocol)==="https:"){for(c in i=i.a.get("credentialHelper"),Gh)if(Gh[c]===i){var c=Gh[c];break e}}c=xu}a=c===qh}return a&&s.clientId||null}function rv(i){return i=Nt(i,j.auth.EmailAuthProvider.PROVIDER_ID),!!(i&&i.disableSignUp&&i.disableSignUp.status)}function xi(i){return i=i.a.get("adminRestrictedOperation")||null,!(!i||!i.status)}function y2(i){var s=null;if(Mu(i).forEach(function(c){c.provider==j.auth.PhoneAuthProvider.PROVIDER_ID&&ve(c.recaptchaParameters)&&!Array.isArray(c.recaptchaParameters)&&(s=jl(c.recaptchaParameters))}),s){var a=[];A2.forEach(function(c){typeof s[c]<"u"&&(a.push(c),delete s[c])}),a.length&&Xn('The following provided "recaptchaParameters" keys are not allowed: '+a.join(", "))}return s}function w2(i){return(i=i.a.get("adminRestrictedOperation"))&&i.adminEmail?i.adminEmail:null}function b2(i){if(i=i.a.get("adminRestrictedOperation")||null){var s=i.helpLink||null;if(s&&typeof s=="string")return function(){vr(s)}}return null}function I2(i){return(i=Nt(i,j.auth.EmailAuthProvider.PROVIDER_ID))&&i.disableSignUp&&i.disableSignUp.adminEmail||null}function E2(i){if((i=Nt(i,j.auth.EmailAuthProvider.PROVIDER_ID))&&i.disableSignUp){var s=i.disableSignUp.helpLink||null;if(s&&typeof s=="string")return function(){vr(s)}}return null}function sv(i,s){return i=(i=Nt(i,s))&&i.scopes,Array.isArray(i)?i:[]}function ov(i,s){return i=(i=Nt(i,s))&&i.customParameters,ve(i)?(i=jl(i),s===j.auth.GoogleAuthProvider.PROVIDER_ID&&delete i.login_hint,s===j.auth.GithubAuthProvider.PROVIDER_ID&&delete i.login,i):null}function _2(i){i=Nt(i,j.auth.PhoneAuthProvider.PROVIDER_ID);var s=null;return i&&typeof i.loginHint=="string"&&(s=Zg(i.loginHint)),i&&i.defaultNationalNumber||s&&s.Aa||null}function S2(i){var s=(i=Nt(i,j.auth.PhoneAuthProvider.PROVIDER_ID))&&i.defaultCountry||null;s=s&&Yg(s);var a=null;return i&&typeof i.loginHint=="string"&&(a=Zg(i.loginHint)),s&&s[0]||a&&Mi(a.a)||null}function Bh(i){if(i=Nt(i,j.auth.PhoneAuthProvider.PROVIDER_ID),!i)return null;var s=i.whitelistedCountries,a=i.blacklistedCountries;if(typeof s<"u"&&(!Array.isArray(s)||s.length==0))throw Error("WhitelistedCountries must be a non-empty array.");if(typeof a<"u"&&!Array.isArray(a))throw Error("BlacklistedCountries must be an array.");if(s&&a)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!s&&!a)return wt;if(i=[],s){a={};for(var c=0;c<s.length;c++)for(var h=Jg(s[c]),d=0;d<h.length;d++)a[h[d].c]=h[d];for(var g in a)a.hasOwnProperty(g)&&i.push(a[g])}else{for(g={},s=0;s<a.length;s++)for(h=Jg(a[s]),c=0;c<h.length;c++)g[h[c].c]=h[c];for(h=0;h<wt.length;h++)g!==null&&wt[h].c in g||i.push(wt[h])}return i}function av(i){return Fh(i.a,"queryParameterForWidgetMode")}function Le(i){var s=i.a.get("tosUrl")||null;if(i=i.a.get("privacyPolicyUrl")||null,s&&!i&&Xn("Privacy Policy URL is missing, the link will not be displayed."),s&&i){if(typeof s=="function")return s;if(typeof s=="string")return function(){vr(s)}}return null}function Me(i){var s=i.a.get("tosUrl")||null,a=i.a.get("privacyPolicyUrl")||null;if(a&&!s&&Xn("Term of Service URL is missing, the link will not be displayed."),s&&a){if(typeof a=="function")return a;if(typeof a=="string")return function(){vr(a)}}return null}function uv(i){return(i=Nt(i,j.auth.EmailAuthProvider.PROVIDER_ID))&&typeof i.requireDisplayName<"u"?!!i.requireDisplayName:!0}function Ar(i){return i=Nt(i,j.auth.EmailAuthProvider.PROVIDER_ID),!(!i||i.signInMethod!==j.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function T2(i){return i=Nt(i,j.auth.EmailAuthProvider.PROVIDER_ID),!(!i||!i.forceSameDevice)}function C2(i){if(Ar(i)){var s={url:En(),handleCodeInApp:!0};(i=Nt(i,j.auth.EmailAuthProvider.PROVIDER_ID))&&typeof i.emailLinkSignIn=="function"&&Ka(s,i.emailLinkSignIn()),i=s.url;var a=En();a instanceof Bn||(a=ql(a)),i instanceof Bn||(i=ql(i));var c=a;a=new Bn(c);var h=!!i.j;h?Bl(a,i.j):h=!!i.A,h?a.A=i.A:h=!!i.h,h?a.h=i.h:h=i.C!=null;var d=i.g;if(h)$l(a,i.C);else if(h=!!i.g){if(d.charAt(0)!="/"&&(c.h&&!c.g?d="/"+d:(c=a.g.lastIndexOf("/"),c!=-1&&(d=a.g.substr(0,c+1)+d))),d==".."||d==".")d="";else if(d.indexOf("./")!=-1||d.indexOf("/.")!=-1){c=d.lastIndexOf("/",0)==0,d=d.split("/");for(var g=[],w=0;w<d.length;){var E=d[w++];E=="."?c&&w==d.length&&g.push(""):E==".."?((1<g.length||g.length==1&&g[0]!="")&&g.pop(),c&&w==d.length&&g.push("")):(g.push(E),c=!0)}d=g.join("/")}}return h?a.g=d:h=i.a.toString()!=="",h?Hl(a,cm(i.a)):h=!!i.s,h&&(a.s=i.s),s.url=a.toString(),s}return null}function $h(i){var s=!!i.a.get("immediateFederatedRedirect"),a=kr(i);return i=cv(i),s&&a.length==1&&!Vt(tv,a[0])&&i==Uu}function cv(i){i=i.a.get("signInFlow");for(var s in zh)if(zh[s]==i)return zh[s];return Uu}function Hh(i){return io(i).signInSuccess||null}function lv(i){return io(i).signInSuccessWithAuthResult||null}function hv(i){return io(i).signInFailure||null}function io(i){return i.a.get("callbacks")||{}}var qh="googleyolo",xu="none",Gh={nc:qh,NONE:xu},Uu="redirect",zh={qc:"popup",rc:Uu},Kh={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},k2=["anonymous"],A2=["sitekey","tabindex","callback","expired-callback"],ro,Rr,Wh,dv,le={};function x(i,s,a,c){le[i].apply(null,Array.prototype.slice.call(arguments,1))}function fv(i){return i.classList?i.classList:(i=i.className,T(i)&&i.match(/\S+/g)||[])}function so(i,s){return i.classList?i.classList.contains(s):Vt(fv(i),s)}function sn(i,s){i.classList?i.classList.add(s):so(i,s)||(i.className+=0<i.className.length?" "+s:s)}function on(i,s){i.classList?i.classList.remove(s):so(i,s)&&(i.className=UE(fv(i),function(a){return a!=s}).join(" "))}function Je(i){var s=i.type;switch(T(s)&&s.toLowerCase()){case"checkbox":case"radio":return i.checked?i.value:null;case"select-one":return s=i.selectedIndex,0<=s?i.options[s].value:null;case"select-multiple":s=[];for(var a,c=0;a=i.options[c];c++)a.selected&&s.push(a.value);return s.length?s:null;default:return i.value!=null?i.value:null}}function pv(i,s){var a=i.type;switch(T(a)&&a.toLowerCase()){case"checkbox":case"radio":i.checked=s;break;case"select-one":if(i.selectedIndex=-1,T(s)){for(var c=0;a=i.options[c];c++)if(a.value==s){a.selected=!0;break}}break;case"select-multiple":for(T(s)&&(s=[s]),c=0;a=i.options[c];c++)if(a.selected=!1,s)for(var h,d=0;h=s[d];d++)a.value==h&&(a.selected=!0);break;default:i.value=s??""}}function R2(i){if(i.altKey&&!i.ctrlKey||i.metaKey||112<=i.keyCode&&123>=i.keyCode)return!1;if(oo(i.keyCode))return!0;switch(i.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!Gt;default:return 166>i.keyCode||183<i.keyCode}}function mv(i,s,a,c,h,d){if(gt&&!Ti("525"))return!0;if(qn&&h)return oo(i);if(h&&!c)return!1;if(!Gt){typeof s=="number"&&(s=Yh(s));var g=s==17||s==18||qn&&s==91;if((!a||qn)&&g||qn&&s==16&&(c||d))return!1}if((gt||Hn)&&c&&a)switch(i){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(ke&&c&&s==i)return!1;switch(i){case 13:return Gt?d||h?!1:!(a&&c):!0;case 27:return!(gt||Hn||Gt)}return Gt&&(c||h||d)?!1:oo(i)}function oo(i){if(48<=i&&57>=i||96<=i&&106>=i||65<=i&&90>=i||(gt||Hn)&&i==0)return!0;switch(i){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return Gt;default:return!1}}function Yh(i){if(Gt)i=N2(i);else if(qn&&gt)switch(i){case 93:i=91}return i}function N2(i){switch(i){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return i}}function Nr(i){Fe.call(this),this.a=i,zt(i,"keydown",this.g,!1,this),zt(i,"click",this.h,!1,this)}Y(Nr,Fe),Nr.prototype.g=function(i){(i.keyCode==13||gt&&i.keyCode==3)&&gv(this,i)},Nr.prototype.h=function(i){gv(this,i)};function gv(i,s){var a=new yv(s);if(Jn(i,a)){a=new vv(s);try{Jn(i,a)}finally{s.stopPropagation()}}}Nr.prototype.o=function(){Nr.K.o.call(this),Ni(this.a,"keydown",this.g,!1,this),Ni(this.a,"click",this.h,!1,this),delete this.a};function vv(i){yt.call(this,i.a),this.type="action"}Y(vv,yt);function yv(i){yt.call(this,i.a),this.type="beforeaction"}Y(yv,yt);function Pr(i){Fe.call(this),this.a=i,i=ke?"focusout":"blur",this.g=zt(this.a,ke?"focusin":"focus",this,!ke),this.h=zt(this.a,i,this,!ke)}Y(Pr,Fe),Pr.prototype.handleEvent=function(i){var s=new yt(i.a);s.type=i.type=="focusin"||i.type=="focus"?"focusin":"focusout",Jn(this,s)},Pr.prototype.o=function(){Pr.K.o.call(this),Yn(this.g),Yn(this.h),delete this.a};function Fu(i,s){Fe.call(this),this.g=i||1,this.a=s||b,this.h=ce(this.gc,this),this.j=bi()}Y(Fu,Fe),t=Fu.prototype,t.Ka=!1,t.aa=null,t.gc=function(){if(this.Ka){var i=bi()-this.j;0<i&&i<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-i):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),Jn(this,"tick"),this.Ka&&(Vu(this),this.start()))}},t.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=bi())};function Vu(i){i.Ka=!1,i.aa&&(i.a.clearTimeout(i.aa),i.aa=null)}t.o=function(){Fu.K.o.call(this),Vu(this),delete this.a};function P2(i,s){if(oe(i))s&&(i=ce(i,s));else if(i&&typeof i.handleEvent=="function")i=ce(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<0?-1:b.setTimeout(i,0)}function Dr(i){Ri.call(this),this.g=i,this.a={}}Y(Dr,Ri);var wv=[];function Or(i,s,a,c){$(a)||(a&&(wv[0]=a.toString()),a=wv);for(var h=0;h<a.length;h++){var d=zt(s,a[h],c||i.handleEvent,!1,i.g||i);if(!d)break;i.a[d.key]=d}}function bv(i){nm(i.a,function(s,a){this.a.hasOwnProperty(a)&&Yn(s)},i),i.a={}}Dr.prototype.o=function(){Dr.K.o.call(this),bv(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ao(i){Fe.call(this),this.a=null,this.g=i,i=ke||Hn||gt&&!Ti("531")&&i.tagName=="TEXTAREA",this.h=new Dr(this),Or(this.h,this.g,i?["keydown","paste","cut","drop","input"]:"input",this)}Y(ao,Fe),ao.prototype.handleEvent=function(i){if(i.type=="input")ke&&Ti(10)&&i.keyCode==0&&i.j==0||(Jh(this),Jn(this,Iv(i)));else if(i.type!="keydown"||R2(i)){var s=i.type=="keydown"?this.g.value:null;ke&&i.keyCode==229&&(s=null);var a=Iv(i);Jh(this),this.a=P2(function(){this.a=null,this.g.value!=s&&Jn(this,a)},this)}};function Jh(i){i.a!=null&&(b.clearTimeout(i.a),i.a=null)}function Iv(i){return i=new yt(i.a),i.type="input",i}ao.prototype.o=function(){ao.K.o.call(this),this.h.m(),Jh(this),delete this.g};function uo(i,s){Fe.call(this),i&&(this.Oa&&Cv(this),this.qa=i,this.Na=zt(this.qa,"keypress",this,s),this.Ya=zt(this.qa,"keydown",this.Jb,s,this),this.Oa=zt(this.qa,"keyup",this.Kb,s,this))}Y(uo,Fe),t=uo.prototype,t.qa=null,t.Na=null,t.Ya=null,t.Oa=null,t.R=-1,t.X=-1,t.Ua=!1;var Ev={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},_v={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Sv=!gt||Ti("525"),Tv=qn&&Gt;t=uo.prototype,t.Jb=function(i){(gt||Hn)&&(this.R==17&&!i.ctrlKey||this.R==18&&!i.altKey||qn&&this.R==91&&!i.metaKey)&&(this.X=this.R=-1),this.R==-1&&(i.ctrlKey&&i.keyCode!=17?this.R=17:i.altKey&&i.keyCode!=18?this.R=18:i.metaKey&&i.keyCode!=91&&(this.R=91)),Sv&&!mv(i.keyCode,this.R,i.shiftKey,i.ctrlKey,i.altKey,i.metaKey)?this.handleEvent(i):(this.X=Yh(i.keyCode),Tv&&(this.Ua=i.altKey))},t.Kb=function(i){this.X=this.R=-1,this.Ua=i.altKey},t.handleEvent=function(i){var s=i.a,a=s.altKey;if(ke&&i.type=="keypress")var c=this.X,h=c!=13&&c!=27?s.keyCode:0;else(gt||Hn)&&i.type=="keypress"?(c=this.X,h=0<=s.charCode&&63232>s.charCode&&oo(c)?s.charCode:0):mm&&!gt?(c=this.X,h=oo(c)?s.keyCode:0):(i.type=="keypress"?(Tv&&(a=this.Ua),s.keyCode==s.charCode?32>s.keyCode?(c=s.keyCode,h=0):(c=this.X,h=s.charCode):(c=s.keyCode||this.X,h=s.charCode||0)):(c=s.keyCode||this.X,h=s.charCode||0),qn&&h==63&&c==224&&(c=191));var d=c=Yh(c);c?63232<=c&&c in Ev?d=Ev[c]:c==25&&i.shiftKey&&(d=9):s.keyIdentifier&&s.keyIdentifier in _v&&(d=_v[s.keyIdentifier]),Gt&&Sv&&i.type=="keypress"&&!mv(d,this.R,i.shiftKey,i.ctrlKey,a,i.metaKey)||(i=d==this.R,this.R=d,s=new kv(d,h,i,s),s.altKey=a,Jn(this,s))},t.N=function(){return this.qa};function Cv(i){i.Na&&(Yn(i.Na),Yn(i.Ya),Yn(i.Oa),i.Na=null,i.Ya=null,i.Oa=null),i.qa=null,i.R=-1,i.X=-1}t.o=function(){uo.K.o.call(this),Cv(this)};function kv(i,s,a,c){yt.call(this,c),this.type="key",this.keyCode=i,this.j=s,this.repeat=a}Y(kv,yt);function Lr(i,s,a,c){this.top=i,this.right=s,this.bottom=a,this.left=c}Lr.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Lr.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Lr.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Lr.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};function ju(i,s){var a=Vs(i);return a.defaultView&&a.defaultView.getComputedStyle&&(i=a.defaultView.getComputedStyle(i,null))&&(i[s]||i.getPropertyValue(s))||""}function Av(i){try{var s=i.getBoundingClientRect()}catch{return{left:0,top:0,right:0,bottom:0}}return ke&&i.ownerDocument.body&&(i=i.ownerDocument,s.left-=i.documentElement.clientLeft+i.body.clientLeft,s.top-=i.documentElement.clientTop+i.body.clientTop),s}function D2(i,s){s=s||tu(document);var a=s||tu(document),c=Rv(i),h=Rv(a);if(!ke||9<=Number(Us)){g=ju(a,"borderLeftWidth");var d=ju(a,"borderRightWidth");w=ju(a,"borderTopWidth"),E=ju(a,"borderBottomWidth"),d=new Lr(parseFloat(w),parseFloat(d),parseFloat(E),parseFloat(g))}else{var g=Bu(a,"borderLeft");d=Bu(a,"borderRight");var w=Bu(a,"borderTop"),E=Bu(a,"borderBottom");d=new Lr(w,d,E,g)}a==tu(document)?(g=c.a-a.scrollLeft,c=c.g-a.scrollTop,!ke||10<=Number(Us)||(g+=d.left,c+=d.top)):(g=c.a-h.a-d.left,c=c.g-h.g-d.top),h=i.offsetWidth,d=i.offsetHeight,w=gt&&!h&&!d,_(h)&&!w||!i.getBoundingClientRect?i=new Jl(h,d):(i=Av(i),i=new Jl(i.right-i.left,i.bottom-i.top)),h=a.clientHeight-i.height,d=a.scrollLeft,w=a.scrollTop,d+=Math.min(g,Math.max(g-(a.clientWidth-i.width),0)),w+=Math.min(c,Math.max(c-h,0)),a=new Kn(d,w),s.scrollLeft=a.a,s.scrollTop=a.g}function Rv(i){var s=Vs(i),a=new Kn(0,0),c=s?Vs(s):document;return c=!ke||9<=Number(Us)||eu(c).a.compatMode=="CSS1Compat"?c.documentElement:c.body,i==c||(i=Av(i),c=eu(s).a,s=tu(c),c=c.parentWindow||c.defaultView,s=ke&&Ti("10")&&c.pageYOffset!=s.scrollTop?new Kn(s.scrollLeft,s.scrollTop):new Kn(c.pageXOffset||s.scrollLeft,c.pageYOffset||s.scrollTop),a.a=i.left+s.a,a.g=i.top+s.g),a}var Nv={thin:2,medium:4,thick:6};function Bu(i,s){if((i.currentStyle?i.currentStyle[s+"Style"]:null)=="none")return 0;var a=i.currentStyle?i.currentStyle[s+"Width"]:null;if(a in Nv)i=Nv[a];else if(/^\d+px?$/.test(a))i=parseInt(a,10);else{s=i.style.left;var c=i.runtimeStyle.left;i.runtimeStyle.left=i.currentStyle.left,i.style.left=a,a=i.style.pixelLeft,i.style.left=s,i.runtimeStyle.left=c,i=+a}return i}function Qh(){}S(Qh),Qh.prototype.a=0;function Ui(i){Fe.call(this),this.s=i||eu(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}Y(Ui,Fe),t=Ui.prototype,t.Lb=Qh.Xa(),t.N=function(){return this.g};function ie(i,s){return i.g?Xl(s,i.g||i.s.a):null}function co(i){return i.L||(i.L=new Dr(i)),i.L}t.Za=function(i){if(this.Y&&this.Y!=i)throw Error("Method not supported");Ui.K.Za.call(this,i)},t.kb=function(){this.g=this.s.a.createElement("DIV")},t.render=function(i){if(this.na)throw Error("Component already rendered");this.g||this.kb(),i?i.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},t.v=function(){this.na=!0,Xh(this,function(i){!i.na&&i.N()&&i.v()})},t.ya=function(){Xh(this,function(i){i.na&&i.ya()}),this.L&&bv(this.L),this.na=!1},t.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Xh(this,function(i){i.m()}),this.g&&ki(this.g),this.Y=this.g=this.oa=this.Ea=null,Ui.K.o.call(this)};function Xh(i,s){i.Ea&&Os(i.Ea,s,void 0)}t.removeChild=function(i,s){if(i){var a=T(i)?i:i.cb||(i.cb=":"+(i.Lb.a++).toString(36));if(this.oa&&a?(i=this.oa,i=(i!==null&&a in i?i[a]:void 0)||null):i=null,a&&i){var c=this.oa;if(a in c&&delete c[a],Zp(this.Ea,i),s&&(i.ya(),i.g&&ki(i.g)),s=i,s==null)throw Error("Unable to set parent component");s.Y=null,Ui.K.Za.call(s,null)}}if(!i)throw Error("Child is not in parent component");return i};function Ne(i,s){var a=Rm(i,"firebaseui-textfield");s?(on(i,"firebaseui-input-invalid"),sn(i,"firebaseui-input"),a&&on(a,"firebaseui-textfield-invalid")):(on(i,"firebaseui-input"),sn(i,"firebaseui-input-invalid"),a&&sn(a,"firebaseui-textfield-invalid"))}function Mr(i,s,a){s=new ao(s),$s(i,Ft(Hs,s)),Or(co(i),s,"input",a)}function lo(i,s,a){s=new uo(s),$s(i,Ft(Hs,s)),Or(co(i),s,"key",function(c){c.keyCode==13&&(c.stopPropagation(),c.preventDefault(),a(c))})}function O2(i,s,a){s=new Pr(s),$s(i,Ft(Hs,s)),Or(co(i),s,"focusin",a)}function L2(i,s,a){s=new Pr(s),$s(i,Ft(Hs,s)),Or(co(i),s,"focusout",a)}function Se(i,s,a){s=new Nr(s),$s(i,Ft(Hs,s)),Or(co(i),s,"action",function(c){c.stopPropagation(),c.preventDefault(),a(c)})}function Pt(i){sn(i,"firebaseui-hidden")}function Qe(i,s){s&&Zl(i,s),on(i,"firebaseui-hidden")}function xr(i){return!so(i,"firebaseui-hidden")&&i.style.display!="none"}function Ur(i){i=i||{};var s=i.email,a=i.disabled,c='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return c=i.wc?c+"Enter new email address":c+"Email",c+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+vt(s??"")+'"'+(a?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',L(c)}function _t(i){i=i||{},i=i.label;var s='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return s=i?s+q(i):s+"Next",L(s+"</button>")}function Zh(){var i=""+_t({label:Ae("Sign In")});return L(i)}function Pv(){var i=""+_t({label:Ae("Save")});return L(i)}function Kt(){var i=""+_t({label:Ae("Continue")});return L(i)}function Dv(i){i=i||{},i=i.label;var s='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return s=i?s+q(i):s+"Choose password",L(s+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function Ov(){var i={},s='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return s=i.current?s+"Current password":s+"Password",L(s+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function Lv(){return L('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function Dt(i){i=i||{},i=i.label;var s='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return s=i?s+q(i):s+"Cancel",L(s+"</button>")}function it(i){var s="";return i.F&&i.D&&(s+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),L(s)}function Fr(i){var s="";return i.F&&i.D&&(s+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),L(s)}function Mv(i){return i='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+q(i.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',L(i)}Mv.a="firebaseui.auth.soy2.element.infoBar";function xv(i){var s=i.content;return i=i.Ab,L('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(i?" "+vt(i):"")+'">'+q(s)+"</dialog>")}function Uv(i){var s=i.message;return L(xv({content:Dm('<div class="firebaseui-dialog-icon-wrapper"><div class="'+vt(i.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+q(s)+"</div>")}))}Uv.a="firebaseui.auth.soy2.element.progressDialog";function Fv(i){var s='<div class="firebaseui-list-box-actions">';i=i.items;for(var a=i.length,c=0;c<a;c++){var h=i[c];s+='<button type="button" data-listboxid="'+vt(h.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(h.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+vt(h.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+q(h.label)+"</div></button>"}return s=""+xv({Ab:Ae("firebaseui-list-box-dialog"),content:Dm(s+"</div>")}),L(s)}Fv.a="firebaseui.auth.soy2.element.listBoxDialog";function $u(i){return i=i||{},L(i.tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}$u.a="firebaseui.auth.soy2.element.busyIndicator";function Zn(i,s){return i=i||{},i=i.ga,ae(i.S?i.S:s.hb[i.providerId]?""+s.hb[i.providerId]:i.providerId&&i.providerId.indexOf("saml.")==0||i.providerId&&i.providerId.indexOf("oidc.")==0?i.providerId.substring(5):""+i.providerId)}function ed(i){Vv(i,"upgradeElement")}function td(i){Vv(i,"downgradeElements")}var M2=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Vv(i,s){i&&window.componentHandler&&window.componentHandler[s]&&M2.forEach(function(a){so(i,a)&&window.componentHandler[s](i),Os(Ql(a,i),function(c){window.componentHandler[s](c)})})}function jv(i,s,a){if(Hu.call(this),document.body.appendChild(i),i.showModal||window.dialogPolyfill.registerDialog(i),i.showModal(),ed(i),s&&Se(this,i,function(d){var g=i.getBoundingClientRect();(d.clientX<g.left||g.left+g.width<d.clientX||d.clientY<g.top||g.top+g.height<d.clientY)&&Hu.call(this)}),!a){var c=this.N().parentElement||this.N().parentNode;if(c){var h=this;this.da=function(){if(i.open){var d=i.getBoundingClientRect().height,g=c.getBoundingClientRect().height,w=c.getBoundingClientRect().top-document.body.getBoundingClientRect().top,E=c.getBoundingClientRect().left-document.body.getBoundingClientRect().left,R=i.getBoundingClientRect().width,U=c.getBoundingClientRect().width;i.style.top=(w+(g-d)/2).toString()+"px",d=E+(U-R)/2,i.style.left=d.toString()+"px",i.style.right=(document.body.getBoundingClientRect().width-d-R).toString()+"px"}else window.removeEventListener("resize",h.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Hu(){var i=nd.call(this);i&&(td(i),i.open&&i.close(),ki(i),this.da&&window.removeEventListener("resize",this.da))}function nd(){return Xl("firebaseui-id-dialog")}function Bv(){ki($v.call(this))}function $v(){return ie(this,"firebaseui-id-info-bar")}function Hv(){return ie(this,"firebaseui-id-dismiss-info-bar")}var x2={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function id(i,s,a){bn.call(this,i,s);for(var c in a)this[c]=a[c]}Y(id,bn);function C(i,s,a,c,h){Ui.call(this,a),this.fb=i,this.eb=s,this.Fa=!1,this.Ga=c||null,this.A=this.ca=null,this.Z=jl(x2),Ka(this.Z,h||{})}Y(C,Ui),t=C.prototype,t.kb=function(){var i=js(this.fb,this.eb,this.Z,this.s);ed(i),this.g=i},t.v=function(){if(C.K.v.call(this),Gm(_e(this),new id("pageEnter",_e(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var i=this.Z.F;Se(this,this.bb(),function(){i()})}if(this.ab()&&this.Z.D){var s=this.Z.D;Se(this,this.ab(),function(){s()})}},t.ya=function(){Gm(_e(this),new id("pageExit",_e(this),{pageId:this.Ga})),C.K.ya.call(this)},t.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,td(this.N()),C.K.o.call(this)};function U2(i){i.Fa=!0;var s=so(i.N(),"firebaseui-use-spinner");i.ca=window.setTimeout(function(){i.N()&&i.A===null&&(i.A=js($u,{tb:s},null,i.s),i.N().appendChild(i.A),ed(i.A))},500)}t.I=function(i,s,a,c){function h(){if(d.T)return null;d.Fa=!1,window.clearTimeout(d.ca),d.ca=null,d.A&&(td(d.A),ki(d.A),d.A=null)}var d=this;return d.Fa?null:(U2(d),i.apply(null,s).then(a,c).then(h,h))};function _e(i){return i.N().parentElement||i.N().parentNode}function ho(i,s,a){lo(i,s,function(){a.focus()})}function Vr(i,s,a){lo(i,s,function(){a()})}ye(C.prototype,{a:function(i){Bv.call(this);var s=js(Mv,{message:i},null,this.s);this.N().appendChild(s),Se(this,Hv.call(this),function(){ki(s)})},yc:Bv,Ac:$v,zc:Hv,$:function(i,s){i=js(Uv,{Ma:i,message:s},null,this.s),jv.call(this,i)},h:Hu,Cb:nd,Cc:function(){return ie(this,"firebaseui-tos")},bb:function(){return ie(this,"firebaseui-tos-link")},ab:function(){return ie(this,"firebaseui-pp-link")},Dc:function(){return ie(this,"firebaseui-tos-list")}});function qv(i,s,a){i=i||{},s=i.Va;var c=i.ia;return i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Ur(i)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?Dt(null):"")+_t(null)+'</div></div><div class="firebaseui-card-footer">'+(c?Fr(a):it(a))+"</div></form></div>",L(i)}qv.a="firebaseui.auth.soy2.page.signIn";function Gv(i,s,a){return i=i||{},s=i.ia,i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+Ur(i)+Ov()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Lv()+'</div><div class="firebaseui-form-actions">'+Zh()+'</div></div><div class="firebaseui-card-footer">'+(s?Fr(a):it(a))+"</div></form></div>",L(i)}Gv.a="firebaseui.auth.soy2.page.passwordSignIn";function zv(i,s,a){i=i||{};var c=i.Tb;s=i.Ta;var h=i.ia,d='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+Ur(i);return c?(i=i||{},i=i.name,i='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+vt(i??"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',i=L(i)):i="",a=d+i+Dv(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?Dt(null):"")+Pv()+'</div></div><div class="firebaseui-card-footer">'+(h?Fr(a):it(a))+"</div></form></div>",L(a)}zv.a="firebaseui.auth.soy2.page.passwordSignUp";function Kv(i,s,a){return i=i||{},s=i.Ta,i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+Ur(i)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?Dt(null):"")+_t({label:Ae("Send")})+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(i)}Kv.a="firebaseui.auth.soy2.page.passwordRecovery";function Wv(i,s,a){s=i.G;var c="";return i="Follow the instructions sent to <strong>"+(q(i.email)+"</strong> to recover your password"),c+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+i+'</p></div><div class="firebaseui-card-actions">',s&&(c+='<div class="firebaseui-form-actions">'+_t({label:Ae("Done")})+"</div>"),c+='</div><div class="firebaseui-card-footer">'+it(a)+"</div></div>",L(c)}Wv.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent";function Yv(i,s,a){return L('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+$u(null)+"</div></div>")}Yv.a="firebaseui.auth.soy2.page.callback";function Jv(i,s,a){return L('<div class="firebaseui-container firebaseui-id-page-spinner">'+$u({tb:!0})+"</div>")}Jv.a="firebaseui.auth.soy2.page.spinner";function Qv(){return L('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}Qv.a="firebaseui.auth.soy2.page.blank";function Xv(i,s,a){s="",i="A sign-in email with additional instructions was sent to <strong>"+(q(i.email)+"</strong>. Check your email to complete sign-in.");var c=L('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');return s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+i+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+c+'</div><div class="firebaseui-form-actions">'+Dt({label:Ae("Back")})+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(s)}Xv.a="firebaseui.auth.soy2.page.emailLinkSignInSent";function Zv(i,s,a){return i=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn't work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">`+L('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+Dt({label:Ae("Back")})+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(i)}Zv.a="firebaseui.auth.soy2.page.emailNotReceived";function ey(i,s,a){return i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+Ur(i)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt(null)+_t(null)+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(i)}ey.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation";function ty(){var i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt({label:Ae("Dismiss")})+"</div></div></div>";return L(i)}ty.a="firebaseui.auth.soy2.page.differentDeviceError";function ny(){var i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt({label:Ae("Dismiss")})+"</div></div></div>";return L(i)}ny.a="firebaseui.auth.soy2.page.anonymousUserMismatch";function iy(i,s,a){return s="",i="You’ve already used <strong>"+(q(i.email)+"</strong> to sign in. Enter your password for that account."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+i+"</p>"+Ov()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Lv()+'</div><div class="firebaseui-form-actions">'+Zh()+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(s)}iy.a="firebaseui.auth.soy2.page.passwordLinking";function ry(i,s,a){var c=i.email;return s="",i=""+Zn(i,a),i=Ae(i),c="You’ve already used <strong>"+(q(c)+("</strong>. You can connect your <strong>"+(q(i)+("</strong> account with <strong>"+(q(c)+"</strong> by signing in with email link below."))))),i="For this flow to successfully connect your "+(q(i)+" account with this email, you have to open the link on the same device or browser."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+c+'<p class="firebaseui-text firebaseui-text-justify">'+i+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Zh()+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(s)}ry.a="firebaseui.auth.soy2.page.emailLinkSignInLinking";function sy(i,s,a){s="";var c=""+Zn(i,a);return c=Ae(c),i="You originally intended to connect <strong>"+(q(c)+"</strong> to your email account but have opened the link on a different device where you are not signed in."),c="If you still want to connect your <strong>"+(q(c)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+i+'</p><p class="firebaseui-text firebaseui-text-justify">'+c+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Kt()+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(s)}sy.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";function oy(i,s,a){var c=i.email;return s="",i=""+Zn(i,a),i=Ae(i),c="You’ve already used <strong>"+(q(c)+("</strong>. Sign in with "+(q(i)+" to continue."))),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+c+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+_t({label:Ae("Sign in with "+i)})+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(s)}oy.a="firebaseui.auth.soy2.page.federatedLinking";function ay(i,s,a){i=i||{};var c=i.kc;s=i.yb,i=i.Eb;var h='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return c?(c="<strong>"+(q(c)+"</strong> is not authorized to view the requested page."),h+=c):h+="User is not authorized to view the requested page.",h+="</p>",s&&(s="Please contact <strong>"+(q(s)+"</strong> for authorization."),h+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+s+"</p>"),h+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',i&&(h+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),h+='</div><div class="firebaseui-form-actions">'+Dt({label:Ae("Back")})+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(h)}ay.a="firebaseui.auth.soy2.page.unauthorizedUser";function uy(i,s,a){return s="",i="To continue sign in with <strong>"+(q(i.email)+"</strong> on this device, you have to recover the password."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+i+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt(null)+_t({label:Ae("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(s)}uy.a="firebaseui.auth.soy2.page.unsupportedProvider";function cy(i){var s="",a='<p class="firebaseui-text">for <strong>'+(q(i.email)+"</strong></p>");return s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+a+Dv(T_(i))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Pv()+"</div></div></form></div>",L(s)}cy.a="firebaseui.auth.soy2.page.passwordReset";function ly(i){return i=i||{},i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+(i.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",L(i)}ly.a="firebaseui.auth.soy2.page.passwordResetSuccess";function hy(i){return i=i||{},i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(i.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",L(i)}hy.a="firebaseui.auth.soy2.page.passwordResetFailure";function dy(i){var s=i.G,a="";return i="Your sign-in email address has been changed back to <strong>"+(q(i.email)+"</strong>."),a+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+i+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(s?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></form></div>",L(a)}dy.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess";function fy(i){return i=i||{},i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+(i.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",L(i)}fy.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure";function py(i){return i=i||{},i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+(i.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",L(i)}py.a="firebaseui.auth.soy2.page.emailVerificationSuccess";function my(i){return i=i||{},i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(i.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",L(i)}my.a="firebaseui.auth.soy2.page.emailVerificationFailure";function gy(i){var s=i.G,a="";return i="You can now sign in with your new email <strong>"+(q(i.email)+"</strong>."),a+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+i+'</p></div><div class="firebaseui-card-actions">'+(s?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",L(a)}gy.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";function vy(i){return i=i||{},i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+(i.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",L(i)}vy.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";function yy(i){var s=i.factorId,a=i.phoneNumber;i=i.G;var c='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';switch(s){case"phone":s="The <strong>"+(q(s)+(" "+(q(a)+"</strong> was removed as a second authentication step."))),c+=s;break;default:c+="The device or app was removed as a second authentication step."}return c+=`</p><p class="firebaseui-text">If you don't recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">`+(i?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></form></div>",L(c)}yy.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";function wy(i){return i=i||{},i=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn't remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn't work, contact support for assistance.</p></div><div class="firebaseui-card-actions">`+(i.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",L(i)}wy.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";function by(i){var s=i.zb;return i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+q(i.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',s&&(i+=_t({label:Ae("Retry")})),L(i+"</div></div></div>")}by.a="firebaseui.auth.soy2.page.recoverableError";function Iy(i){return i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+q(i.errorMessage)+"</p></div></div>",L(i)}Iy.a="firebaseui.auth.soy2.page.unrecoverableError";function Ey(i,s,a){var c=i.Qb;return s="",i="Continue with "+(q(i.jc)+"?"),c="You originally wanted to sign in with "+q(c),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+i+'</h2><p class="firebaseui-text">'+c+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt(null)+_t({label:Ae("Continue")})+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form></div>",L(s)}Ey.a="firebaseui.auth.soy2.page.emailMismatch";function _y(i,s,a){var c='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';i=i.Sb,s=i.length;for(var h=0;h<s;h++){var d={ga:i[h]},g=a;d=d||{};var w=d.ga,E=d;E=E||{};var R="";switch(E.ga.providerId){case"google.com":R+="firebaseui-idp-google";break;case"github.com":R+="firebaseui-idp-github";break;case"facebook.com":R+="firebaseui-idp-facebook";break;case"twitter.com":R+="firebaseui-idp-twitter";break;case"phone":R+="firebaseui-idp-phone";break;case"anonymous":R+="firebaseui-idp-anonymous";break;case"password":R+="firebaseui-idp-password";break;default:R+="firebaseui-idp-generic"}E='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+vt(ae(R))+' firebaseui-id-idp-button" data-provider-id="'+vt(w.providerId)+'" style="background-color:',R=(R=d)||{},R=R.ga,E=E+vt(Om(ae(R.ta?R.ta:g.wa[R.providerId]?""+g.wa[R.providerId]:R.providerId.indexOf("saml.")==0?""+g.wa.saml:R.providerId.indexOf("oidc.")==0?""+g.wa.oidc:""+g.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var U=d;R=g,U=U||{},U=U.ga,R=S_(U.za?Ai(U.za):R.xa[U.providerId]?Ai(R.xa[U.providerId]):U.providerId.indexOf("saml.")==0?Ai(R.xa.saml):U.providerId.indexOf("oidc.")==0?Ai(R.xa.oidc):Ai(R.xa.password)),E=E+vt(Ai(R))+'"></span>',w.providerId=="password"?(E+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',w.V?E+=q(w.V):w.S?(d="Sign in with "+q(Zn(d,g)),E+=d):E+="Sign in with email",E+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',E=w.S?E+q(w.S):E+"Email",E+="</span>"):w.providerId=="phone"?(E+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',w.V?E+=q(w.V):w.S?(d="Sign in with "+q(Zn(d,g)),E+=d):E+="Sign in with phone",E+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',E=w.S?E+q(w.S):E+"Phone",E+="</span>"):w.providerId=="anonymous"?(E+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',w.V?E+=q(w.V):w.S?(d="Sign in with "+q(Zn(d,g)),E+=d):E+="Continue as guest",E+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',E=w.S?E+q(w.S):E+"Guest",E+="</span>"):(E+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',w.V?E+=q(w.V):(R="Sign in with "+q(Zn(d,g)),E+=R),E+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(w.S?q(w.S):q(Zn(d,g)))+"</span>"),w=L(E+"</button>"),c+='<li class="firebaseui-list-item">'+w+"</li>"}return c+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Fr(a)+"</div></div>",L(c)}_y.a="firebaseui.auth.soy2.page.providerSignIn";function Sy(i,s,a){i=i||{};var c=i.Gb,h=i.Va;s=i.ia,i=i||{},i=i.Aa,i='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+vt(i??"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+L(i);var d;return c?d=L('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):d="",d=i+d+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(h?Dt(null):"")+_t({label:Ae("Verify")})+'</div></div><div class="firebaseui-card-footer">',s?(s='<p class="firebaseui-tos firebaseui-phone-tos">',s=a.F&&a.D?s+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':s+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",a=L(s+"</p>")):a=L('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+it(a),L(d+a+"</div></form></div>")}Sy.a="firebaseui.auth.soy2.page.phoneSignInStart";function Ty(i,s,a){i=i||{},s=i.phoneNumber;var c="";return i='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+(q(s)+"</a>"),q(s),s=c,c=L('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'),a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+i+"</p>"+c+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Dt(null)+_t({label:Ae("Continue")})+'</div></div><div class="firebaseui-card-footer">'+it(a)+"</div></form>",i=L('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),L(s+(a+i+"</div>"))}Ty.a="firebaseui.auth.soy2.page.phoneSignInFinish";function Cy(){return L('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}Cy.a="firebaseui.auth.soy2.page.signOut";function ky(i,s,a){var c='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';i=i.ec,s=i.length;for(var h=0;h<s;h++){var d=i[h],g="",w=q(d.displayName),E=d.tenantId?d.tenantId:"top-level-project";E=Ae(E),g+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+vt(E)+' firebaseui-id-tenant-selection-button"'+(d.tenantId?'data-tenant-id="'+vt(d.tenantId)+'"':"")+'style="background-color:'+vt(Om(d.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+vt(Ai(d.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',d.V?g+=q(d.V):(d="Sign in to "+q(d.displayName),g+=d),g=L(g+('</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+w+"</span></button>")),c+='<li class="firebaseui-list-item">'+g+"</li>"}return c+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Fr(a)+"</div></div>",L(c)}ky.a="firebaseui.auth.soy2.page.selectTenant";function Ay(i,s,a){return i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Ur(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+_t(null)+'</div></div><div class="firebaseui-card-footer">'+Fr(a)+"</div></form></div>",L(i)}Ay.a="firebaseui.auth.soy2.page.providerMatchByEmail";function Ke(){return ie(this,"firebaseui-id-submit")}function je(){return ie(this,"firebaseui-id-secondary-link")}function Xe(i,s){Se(this,Ke.call(this),function(c){i(c)});var a=je.call(this);a&&s&&Se(this,a,function(c){s(c)})}function qu(){return ie(this,"firebaseui-id-password")}function Gu(){return ie(this,"firebaseui-id-password-error")}function Ry(){var i=qu.call(this),s=Gu.call(this);Mr(this,i,function(){xr(s)&&(Ne(i,!0),Pt(s))})}function Ny(){var i=qu.call(this),s=Gu.call(this);return Je(i)?(Ne(i,!0),Pt(s),s=!0):(Ne(i,!1),Qe(s,ae("Enter your password").toString()),s=!1),s?Je(i):null}function jr(i,s,a,c,h,d){C.call(this,iy,{email:i},d,"passwordLinking",{F:c,D:h}),this.w=s,this.H=a}f(jr,C),jr.prototype.v=function(){this.P(),this.M(this.w,this.H),Vr(this,this.i(),this.w),this.i().focus(),C.prototype.v.call(this)},jr.prototype.o=function(){this.w=null,C.prototype.o.call(this)},jr.prototype.j=function(){return Je(ie(this,"firebaseui-id-email"))},ye(jr.prototype,{i:qu,B:Gu,P:Ry,u:Ny,ea:Ke,ba:je,M:Xe});var F2=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function _n(){return ie(this,"firebaseui-id-email")}function ei(){return ie(this,"firebaseui-id-email-error")}function Br(i){var s=_n.call(this),a=ei.call(this);Mr(this,s,function(){xr(a)&&(Ne(s,!0),Pt(a))}),i&&lo(this,s,function(){i()})}function $r(){return Ct(Je(_n.call(this))||"")}function Hr(){var i=_n.call(this),s=ei.call(this),a=Je(i)||"";return a?F2.test(a)?(Ne(i,!0),Pt(s),s=!0):(Ne(i,!1),Qe(s,ae("That email address isn't correct").toString()),s=!1):(Ne(i,!1),Qe(s,ae("Enter your email address to continue").toString()),s=!1),s?Ct(Je(i)):null}function fo(i,s,a,c,h,d,g){C.call(this,Gv,{email:a,ia:!!d},g,"passwordSignIn",{F:c,D:h}),this.w=i,this.H=s}f(fo,C),fo.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),ho(this,this.l(),this.i()),Vr(this,this.i(),this.w),Je(this.l())?this.i().focus():this.l().focus(),C.prototype.v.call(this)},fo.prototype.o=function(){this.H=this.w=null,C.prototype.o.call(this)},ye(fo.prototype,{l:_n,U:ei,P:Br,M:$r,j:Hr,i:qu,B:Gu,ea:Ry,u:Ny,ua:Ke,pa:je,ba:Xe});function de(i,s,a,c,h,d){C.call(this,i,s,c,h||"notice",d),this.i=a||null}Y(de,C),de.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),de.K.v.call(this)},de.prototype.o=function(){this.i=null,de.K.o.call(this)},ye(de.prototype,{l:Ke,w:je,u:Xe});function zu(i,s,a,c,h){de.call(this,Wv,{email:i,G:!!s},s,h,"passwordRecoveryEmailSent",{F:a,D:c})}Y(zu,de);function Py(i,s){de.call(this,py,{G:!!i},i,s,"emailVerificationSuccess")}Y(Py,de);function Dy(i,s){de.call(this,my,{G:!!i},i,s,"emailVerificationFailure")}Y(Dy,de);function Oy(i,s,a){de.call(this,gy,{email:i,G:!!s},s,a,"verifyAndChangeEmailSuccess")}Y(Oy,de);function Ly(i,s){de.call(this,vy,{G:!!i},i,s,"verifyAndChangeEmailFailure")}Y(Ly,de);function My(i,s){de.call(this,wy,{G:!!i},i,s,"revertSecondFactorAdditionFailure")}Y(My,de);function xy(i){de.call(this,Cy,void 0,void 0,i,"signOut")}Y(xy,de);function Uy(i,s){de.call(this,ly,{G:!!i},i,s,"passwordResetSuccess")}Y(Uy,de);function Fy(i,s){de.call(this,hy,{G:!!i},i,s,"passwordResetFailure")}Y(Fy,de);function Vy(i,s){de.call(this,fy,{G:!!i},i,s,"emailChangeRevokeFailure")}Y(Vy,de);function jy(i,s,a){de.call(this,by,{errorMessage:i,zb:!!s},s,a,"recoverableError")}Y(jy,de);function By(i,s){de.call(this,Iy,{errorMessage:i},void 0,s,"unrecoverableError")}Y(By,de);function po(i){if(i.code==="auth/invalid-credential"&&i.message&&i.message.indexOf("error=consent_required")!==-1)return{code:"auth/user-cancelled"};if(i.message&&i.message.indexOf("HTTP Cloud Function returned an error:")!==-1){var s=JSON.parse(i.message.substring(i.message.indexOf("{"),i.message.lastIndexOf("}")+1));return{code:i.code,message:s&&s.error&&s.error.message||i.message}}return i}function Sn(i,s,a,c){function h(g){if(!g.name||g.name!="cancel"){e:{var w=g.message;try{var E=((JSON.parse(w).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(E&&E.length){var R=!0;break e}}catch{}R=!1}if(R)g=_e(s),s.m(),ge(i,g,void 0,ae("Your sign-in session has expired. Please try again.").toString());else{if(R=g&&g.message||"",g.code){if(g.code=="auth/email-already-in-use"||g.code=="auth/credential-already-in-use")return;R=pe(g)}s.a(R)}}}if(c0(i),c)return $y(i,a),Re();if(!a.credential)throw Error("No credential found!");if(!te(i).currentUser&&!a.user)throw Error("User not logged in.");try{var d=gS(i,a)}catch(g){return Rt(g.code||g.message,g),s.a(g.code||g.message),Re()}return a=d.then(function(g){$y(i,g)},h).then(void 0,h),J(i,d),Re(a)}function $y(i,s){if(!s.user)throw Error("No user found");var a=lv(A(i));if(Hh(A(i))&&a&&Xn("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),a){a=lv(A(i));var c=Hg(H(i))||void 0;Et(Zs,H(i));var h=!1;cg()?((!a||a(s,c))&&(h=!0,pr(window.opener.location,Ku(i,c))),a||window.close()):(!a||a(s,c))&&(h=!0,pr(window.location,Ku(i,c))),h||i.reset()}else{a=s.user,s=s.credential,c=Hh(A(i)),h=Hg(H(i))||void 0,Et(Zs,H(i));var d=!1;cg()?((!c||c(a,s,h))&&(d=!0,pr(window.opener.location,Ku(i,h))),c||window.close()):(!c||c(a,s,h))&&(d=!0,pr(window.location,Ku(i,h))),d||i.reset()}}function Ku(i,s){if(i=s||A(i).a.get("signInSuccessUrl"),!i)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return i}function pe(i){var s={code:i.code};s=s||{};var a="";switch(s.code){case"auth/email-already-in-use":a+="The email address is already used by another account";break;case"auth/requires-recent-login":a+=Fm();break;case"auth/too-many-requests":a+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":a+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":a+="That email address doesn't match an existing account";break;case"auth/user-token-expired":a+=Fm();break;case"auth/weak-password":a+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":a+="The email and password you entered don't match";break;case"auth/network-request-failed":a+="A network error has occurred";break;case"auth/invalid-phone-number":a+=ih();break;case"auth/invalid-verification-code":a+=ae("Wrong code. Try again.");break;case"auth/code-expired":a+="This code is no longer valid";break;case"auth/expired-action-code":a+="This code has expired.";break;case"auth/invalid-action-code":a+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(s=ae(a).toString())return s;try{return JSON.parse(i.message),Rt("Internal error: "+i.message,void 0),Mm().toString()}catch{return i.message}}function V2(i,s,a){var c=Cr[s]&&j.auth[Cr[s]]?new j.auth[Cr[s]]:s.indexOf("saml.")==0?new j.auth.SAMLAuthProvider(s):new j.auth.OAuthProvider(s);if(!c)throw Error("Invalid Firebase Auth provider!");var h=sv(A(i),s);if(c.addScope)for(var d=0;d<h.length;d++)c.addScope(h[d]);return h=ov(A(i),s)||{},a&&(s==j.auth.GoogleAuthProvider.PROVIDER_ID?i="login_hint":s==j.auth.GithubAuthProvider.PROVIDER_ID?i="login":i=(i=no(A(i),s))&&i.Ob,i&&(h[i]=a)),c.setCustomParameters&&c.setCustomParameters(h),c}function mo(i,s,a,c){function h(){f2(new kg(i.h.tenantId||null),H(i)),J(i,s.I(ce(i.dc,i),[E],function(){if((window.location&&window.location.protocol)==="file:")return J(i,r0(i).then(function(R){s.m(),Et(Li,H(i)),x("callback",i,w,Re(R))},d))},g))}function d(R){if(Et(Li,H(i)),!R.name||R.name!="cancel")switch(R=po(R),R.code){case"auth/popup-blocked":h();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":break;case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":s.a(pe(R));break;case"auth/admin-restricted-operation":s.m(),xi(A(i))?x("handleUnauthorizedUser",i,w,null,a):x("callback",i,w,mr(R));break;default:s.m(),x("callback",i,w,mr(R))}}function g(R){Et(Li,H(i)),R.name&&R.name=="cancel"||(Rt("signInWithRedirect: "+R.code,void 0),R=pe(R),s.Ga=="blank"&&$h(A(i))?(s.m(),x("providerSignIn",i,w,R)):s.a(R))}var w=_e(s),E=V2(i,a,c);cv(A(i))==Uu?h():J(i,mS(i,E).then(function(R){s.m(),x("callback",i,w,Re(R))},d))}function j2(i,s){J(i,s.I(ce(i.$b,i),[],function(a){return s.m(),Sn(i,s,a,!0)},function(a){a.name&&a.name=="cancel"||(Rt("ContinueAsGuest: "+a.code,void 0),a=pe(a),s.a(a))}))}function B2(i,s,a){function c(d){var g=!1;return d=s.I(ce(i.ac,i),[d],function(w){var E=_e(s);s.m(),x("callback",i,E,Re(w)),g=!0},function(w){if((!w.name||w.name!="cancel")&&(!w||w.code!="auth/credential-already-in-use"))if(w&&w.code=="auth/email-already-in-use"&&w.email&&w.credential){var E=_e(s);s.m(),x("callback",i,E,mr(w))}else w&&w.code=="auth/admin-restricted-operation"&&xi(A(i))?(w=_e(s),s.m(),x("handleUnauthorizedUser",i,w,null,j.auth.GoogleAuthProvider.PROVIDER_ID)):(w=pe(w),s.a(w))}),J(i,d),d.then(function(){return g},function(){return!1})}if(a&&a.credential&&a.clientId===iv(A(i))){if(sv(A(i),j.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var h=JSON.parse(atob(a.credential.split(".")[1])).email}catch{}return mo(i,s,j.auth.GoogleAuthProvider.PROVIDER_ID,h),Re(!0)}return c(j.auth.GoogleAuthProvider.credential(a.credential))}return a&&s.a(ae("The selected credential for the authentication provider is not supported!").toString()),Re(!1)}function $2(i,s){var a=s.j(),c=s.u();if(a)if(c){var h=j.auth.EmailAuthProvider.credential(a,c);J(i,s.I(ce(i.bc,i),[a,c],function(d){return Sn(i,s,{user:d.user,credential:h,operationType:d.operationType,additionalUserInfo:d.additionalUserInfo})},function(d){if(!d.name||d.name!="cancel")switch(d.code){case"auth/email-already-in-use":break;case"auth/email-exists":Ne(s.l(),!1),Qe(s.U(),pe(d));break;case"auth/too-many-requests":case"auth/wrong-password":Ne(s.i(),!1),Qe(s.B(),pe(d));break;default:Rt("verifyPassword: "+d.message,void 0),s.a(pe(d))}}))}else s.i().focus();else s.l().focus()}function Wu(i){return i=kr(A(i)),i.length==1&&i[0]==j.auth.EmailAuthProvider.PROVIDER_ID}function Hy(i){return i=kr(A(i)),i.length==1&&i[0]==j.auth.PhoneAuthProvider.PROVIDER_ID}function ge(i,s,a,c){Wu(i)?c?x("signIn",i,s,a,c):sd(i,s,a):i&&Hy(i)&&!c?x("phoneSignInStart",i,s):i&&$h(A(i))&&!c?x("federatedRedirect",i,s,a):x("providerSignIn",i,s,c,a)}function qy(i,s,a,c){var h=_e(s);J(i,s.I(ce(te(i).fetchSignInMethodsForEmail,te(i)),[a],function(d){s.m(),Gy(i,h,d,a,c)},function(d){d=pe(d),s.a(d)}))}function Gy(i,s,a,c,h,d){a.length||Ar(A(i))&&!Ar(A(i))?Vt(a,j.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?x("passwordSignIn",i,s,c,d):a.length==1&&a[0]===j.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Ar(A(i))?x("sendEmailLinkForSignIn",i,s,c,function(){x("signIn",i,s)}):x("unsupportedProvider",i,s,c):(a=ev(a,kr(A(i))))?(qg(new Rh(c),H(i)),x("federatedSignIn",i,s,c,a,h)):x("unsupportedProvider",i,s,c):rv(A(i))?x("handleUnauthorizedUser",i,s,c,j.auth.EmailAuthProvider.PROVIDER_ID):Ar(A(i))?x("sendEmailLinkForSignIn",i,s,c,function(){x("signIn",i,s)}):x("passwordSignUp",i,s,c,void 0,void 0,d)}function rd(i,s,a,c,h,d){var g=_e(s);J(i,s.I(ce(i.Ib,i),[a,d],function(){s.m(),x("emailLinkSignInSent",i,g,a,c,d)},h))}function sd(i,s,a){a?x("prefilledEmailSignIn",i,s,a):x("signIn",i,s)}function go(){return Ja(En(),"oobCode")}function od(){var i=Ja(En(),"continueUrl");return i?function(){pr(window.location,i)}:null}function vo(i,s){C.call(this,ny,void 0,s,"anonymousUserMismatch"),this.i=i}f(vo,C),vo.prototype.v=function(){var i=this;Se(this,this.l(),function(){i.i()}),this.l().focus(),C.prototype.v.call(this)},vo.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ye(vo.prototype,{l:je}),le.anonymousUserMismatch=function(i,s){var a=new vo(function(){a.m(),ge(i,s)});a.render(s),X(i,a)};function Yu(i){C.call(this,Yv,void 0,i,"callback")}f(Yu,C),Yu.prototype.I=function(i,s,a,c){return i.apply(null,s).then(a,c)};function zy(i,s,a){if(a.user){var c={user:a.user,credential:a.credential,operationType:a.operationType,additionalUserInfo:a.additionalUserInfo},h=nn(H(i)),d=h&&h.g;if(d&&!q2(a.user,d))H2(i,s,c);else{var g=h&&h.a;g?J(i,a.user.linkWithCredential(g).then(function(w){c={user:w.user,credential:g,operationType:w.operationType,additionalUserInfo:w.additionalUserInfo},Ky(i,s,c)},function(w){Ju(i,s,w)})):Ky(i,s,c)}}else a=_e(s),s.m(),rn(H(i)),ge(i,a)}function Ky(i,s,a){rn(H(i)),Sn(i,s,a)}function Ju(i,s,a){var c=_e(s);rn(H(i)),a=pe(a),s.m(),ge(i,c,void 0,a)}function Wy(i,s,a,c){var h=_e(s);J(i,te(i).fetchSignInMethodsForEmail(a).then(function(d){s.m(),d.length?Vt(d,j.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?x("passwordLinking",i,h,a):d.length==1&&d[0]===j.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?x("emailLinkSignInLinking",i,h,a):(d=ev(d,kr(A(i))))?x("federatedLinking",i,h,a,d,c):(rn(H(i)),x("unsupportedProvider",i,h,a)):(rn(H(i)),x("passwordRecovery",i,h,a,!1,xm().toString()))},function(d){Ju(i,s,d)}))}function H2(i,s,a){var c=_e(s);J(i,ti(i).then(function(){s.m(),x("emailMismatch",i,c,a)},function(h){h.name&&h.name=="cancel"||(h=pe(h.code),s.a(h))}))}function q2(i,s){if(s==i.email)return!0;if(i.providerData){for(var a=0;a<i.providerData.length;a++)if(s==i.providerData[a].email)return!0}return!1}le.callback=function(i,s,a){var c=new Yu;c.render(s),X(i,c),a=a||r0(i),J(i,a.then(function(h){zy(i,c,h)},function(h){if((h=po(h))&&(h.code=="auth/account-exists-with-different-credential"||h.code=="auth/email-already-in-use")&&h.email&&h.credential)qg(new Rh(h.email,h.credential),H(i)),Wy(i,c,h.email);else if(h&&h.code=="auth/user-cancelled"){var d=nn(H(i)),g=pe(h);d&&d.a?Wy(i,c,d.g,g):d?qy(i,c,d.g,g):Ju(i,c,h)}else h&&h.code=="auth/credential-already-in-use"||(h&&h.code=="auth/operation-not-supported-in-this-environment"&&Wu(i)?zy(i,c,{user:null,credential:null}):h&&h.code=="auth/admin-restricted-operation"&&xi(A(i))?(c.m(),rn(H(i)),x("handleUnauthorizedUser",i,s,null,null)):Ju(i,c,h))}))};function yo(i,s){C.call(this,ty,void 0,s,"differentDeviceError"),this.i=i}f(yo,C),yo.prototype.v=function(){var i=this;Se(this,this.l(),function(){i.i()}),this.l().focus(),C.prototype.v.call(this)},yo.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ye(yo.prototype,{l:je}),le.differentDeviceError=function(i,s){var a=new yo(function(){a.m(),ge(i,s)});a.render(s),X(i,a)};function wo(i,s,a,c){C.call(this,dy,{email:i,G:!!a},c,"emailChangeRevoke"),this.l=s,this.i=a||null}f(wo,C),wo.prototype.v=function(){var i=this;Se(this,ie(this,"firebaseui-id-reset-password-link"),function(){i.l()}),this.i&&(this.w(this.i),this.u().focus()),C.prototype.v.call(this)},wo.prototype.o=function(){this.l=this.i=null,C.prototype.o.call(this)},ye(wo.prototype,{u:Ke,B:je,w:Xe});function bo(){return ie(this,"firebaseui-id-new-password")}function Qu(){return ie(this,"firebaseui-id-password-toggle")}function G2(){this.Ra=!this.Ra;var i=Qu.call(this),s=bo.call(this);this.Ra?(s.type="text",sn(i,"firebaseui-input-toggle-off"),on(i,"firebaseui-input-toggle-on")):(s.type="password",sn(i,"firebaseui-input-toggle-on"),on(i,"firebaseui-input-toggle-off")),s.focus()}function Xu(){return ie(this,"firebaseui-id-new-password-error")}function Yy(){this.Ra=!1;var i=bo.call(this);i.type="password";var s=Xu.call(this);Mr(this,i,function(){xr(s)&&(Ne(i,!0),Pt(s))});var a=Qu.call(this);sn(a,"firebaseui-input-toggle-on"),on(a,"firebaseui-input-toggle-off"),O2(this,i,function(){sn(a,"firebaseui-input-toggle-focus"),on(a,"firebaseui-input-toggle-blur")}),L2(this,i,function(){sn(a,"firebaseui-input-toggle-blur"),on(a,"firebaseui-input-toggle-focus")}),Se(this,a,ce(G2,this))}function Jy(){var i=bo.call(this),s=Xu.call(this);return Je(i)?(Ne(i,!0),Pt(s),s=!0):(Ne(i,!1),Qe(s,ae("Enter your password").toString()),s=!1),s?Je(i):null}function Io(i,s,a){C.call(this,cy,{email:i},a,"passwordReset"),this.l=s}f(Io,C),Io.prototype.v=function(){this.H(),this.B(this.l),Vr(this,this.i(),this.l),this.i().focus(),C.prototype.v.call(this)},Io.prototype.o=function(){this.l=null,C.prototype.o.call(this)},ye(Io.prototype,{i:bo,w:Xu,M:Qu,H:Yy,u:Jy,U:Ke,P:je,B:Xe});function Eo(i,s,a,c,h){C.call(this,yy,{factorId:i,phoneNumber:a||null,G:!!c},h,"revertSecondFactorAdditionSuccess"),this.l=s,this.i=c||null}f(Eo,C),Eo.prototype.v=function(){var i=this;Se(this,ie(this,"firebaseui-id-reset-password-link"),function(){i.l()}),this.i&&(this.w(this.i),this.u().focus()),C.prototype.v.call(this)},Eo.prototype.o=function(){this.l=this.i=null,C.prototype.o.call(this)},ye(Eo.prototype,{u:Ke,B:je,w:Xe});function z2(i,s,a,c,h){var d=a.u();d&&J(i,a.I(ce(te(i).confirmPasswordReset,te(i)),[c,d],function(){a.m();var g=new Uy(h);g.render(s),X(i,g)},function(g){Qy(i,s,a,g)}))}function Qy(i,s,a,c){(c&&c.code)=="auth/weak-password"?(i=pe(c),Ne(a.i(),!1),Qe(a.w(),i),a.i().focus()):(a&&a.m(),a=new Fy,a.render(s),X(i,a))}function K2(i,s,a){var c=new wo(a,function(){J(i,c.I(ce(te(i).sendPasswordResetEmail,te(i)),[a],function(){c.m(),c=new zu(a,void 0,Le(A(i)),Me(A(i))),c.render(s),X(i,c)},function(){c.a(Lm().toString())}))});c.render(s),X(i,c)}function W2(i,s,a,c){var h=new Eo(c.factorId,function(){h.I(ce(te(i).sendPasswordResetEmail,te(i)),[a],function(){h.m(),h=new zu(a,void 0,Le(A(i)),Me(A(i))),h.render(s),X(i,h)},function(){h.a(Lm().toString())})},c.phoneNumber);h.render(s),X(i,h)}le.passwordReset=function(i,s,a,c){J(i,te(i).verifyPasswordResetCode(a).then(function(h){var d=new Io(h,function(){z2(i,s,d,a,c)});d.render(s),X(i,d)},function(){Qy(i,s)}))},le.emailChangeRevocation=function(i,s,a){var c=null;J(i,te(i).checkActionCode(a).then(function(h){return c=h.data.email,te(i).applyActionCode(a)}).then(function(){K2(i,s,c)},function(){var h=new Vy;h.render(s),X(i,h)}))},le.emailVerification=function(i,s,a,c){J(i,te(i).applyActionCode(a).then(function(){var h=new Py(c);h.render(s),X(i,h)},function(){var h=new Dy;h.render(s),X(i,h)}))},le.revertSecondFactorAddition=function(i,s,a){var c=null,h=null;J(i,te(i).checkActionCode(a).then(function(d){return c=d.data.email,h=d.data.multiFactorInfo,te(i).applyActionCode(a)}).then(function(){W2(i,s,c,h)},function(){var d=new My;d.render(s),X(i,d)}))},le.verifyAndChangeEmail=function(i,s,a,c){var h=null;J(i,te(i).checkActionCode(a).then(function(d){return h=d.data.email,te(i).applyActionCode(a)}).then(function(){var d=new Oy(h,c);d.render(s),X(i,d)},function(){var d=new Ly;d.render(s),X(i,d)}))};function Zu(i,s){try{var a=typeof i.selectionStart=="number"}catch{a=!1}a?(i.selectionStart=s,i.selectionEnd=s):ke&&!Ti("9")&&(i.type=="textarea"&&(s=i.value.substring(0,s).replace(/(\r\n|\r|\n)/g,`
`).length),i=i.createTextRange(),i.collapse(!0),i.move("character",s),i.select())}function _o(i,s,a,c,h,d){C.call(this,ey,{email:a},d,"emailLinkSignInConfirmation",{F:c,D:h}),this.l=i,this.u=s}f(_o,C),_o.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Zu(this.i(),(this.i().value||"").length),C.prototype.v.call(this)},_o.prototype.o=function(){this.u=this.l=null,C.prototype.o.call(this)},ye(_o.prototype,{i:_n,M:ei,w:Br,H:$r,j:Hr,U:Ke,P:je,B:Xe}),le.emailLinkConfirmation=function(i,s,a,c,h,d){var g=new _o(function(){var w=g.j();w?(g.m(),c(i,s,w,a)):g.i().focus()},function(){g.m(),ge(i,s,h||void 0)},h||void 0,Le(A(i)),Me(A(i)));g.render(s),X(i,g),d&&g.a(d)};function So(i,s,a,c,h){C.call(this,sy,{ga:i},h,"emailLinkSignInLinkingDifferentDevice",{F:a,D:c}),this.i=s}f(So,C),So.prototype.v=function(){this.u(this.i),this.l().focus(),C.prototype.v.call(this)},So.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ye(So.prototype,{l:Ke,u:Xe}),le.emailLinkNewDeviceLinking=function(i,s,a,c){var h=new Si(a);if(a=h.a.a.get(Ue.PROVIDER_ID)||null,hm(h,null),a){var d=new So(no(A(i),a),function(){d.m(),c(i,s,h.toString())},Le(A(i)),Me(A(i)));d.render(s),X(i,d)}else ge(i,s)};function ec(i){C.call(this,Qv,void 0,i,"blank")}f(ec,C);function ad(i,s,a,c,h){var d=new ec,g=new Si(a),w=g.a.a.get(Ue.$a)||"",E=g.a.a.get(Ue.Sa)||"",R=g.a.a.get(Ue.Qa)==="1",U=lm(g),fe=g.a.a.get(Ue.PROVIDER_ID)||null;g=g.a.a.get(Ue.vb)||null,l0(i,g);var Jt=!Sr(_r,H(i)),m0=c||p2(E,H(i)),Uo=(c=m2(E,H(i)))&&c.a;fe&&Uo&&Uo.providerId!==fe&&(Uo=null),d.render(s),X(i,d),J(i,d.I(function(){var jt=Re(null);jt=U&&Jt||Jt&&R?mr(Error("anonymous-user-not-found")):dS(i,a).then(function(yd){if(fe&&!Uo)throw Error("pending-credential-not-found");return yd});var Fo=null;return jt.then(function(yd){return Fo=yd,h?null:te(i).checkActionCode(w)}).then(function(){return Fo})},[],function(jt){m0?J2(i,d,m0,a,Uo,jt):R?(d.m(),x("differentDeviceError",i,s)):(d.m(),x("emailLinkConfirmation",i,s,a,Xy))},function(jt){var Fo=void 0;if(!jt||!jt.name||jt.name!="cancel")switch(d.m(),jt&&jt.message){case"anonymous-user-not-found":x("differentDeviceError",i,s);break;case"anonymous-user-mismatch":x("anonymousUserMismatch",i,s);break;case"pending-credential-not-found":x("emailLinkNewDeviceLinking",i,s,a,Y2);break;default:jt&&(Fo=pe(jt)),ge(i,s,void 0,Fo)}}))}function Xy(i,s,a,c){ad(i,s,c,a,!0)}function Y2(i,s,a){ad(i,s,a)}function J2(i,s,a,c,h,d){var g=_e(s);s.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ae("Signing in...").toString());var w=null;h=(d?fS(i,d,a,c,h):pS(i,a,c,h)).then(function(E){Et(eo,H(i)),Et(_r,H(i)),s.h(),s.$("firebaseui-icon-done",ae("Signed in!").toString()),w=setTimeout(function(){s.h(),Sn(i,s,E,!0)},1e3),J(i,function(){s&&(s.h(),s.m()),clearTimeout(w)})},function(E){if(s.h(),s.m(),!E.name||E.name!="cancel"){E=po(E);var R=pe(E);E.code=="auth/email-already-in-use"||E.code=="auth/credential-already-in-use"?(Et(eo,H(i)),Et(_r,H(i))):E.code=="auth/invalid-email"?(R=ae("The email provided does not match the current sign-in session.").toString(),x("emailLinkConfirmation",i,g,c,Xy,null,R)):ge(i,g,a,R)}}),J(i,h)}le.emailLinkSignInCallback=ad;function To(i,s,a,c,h,d){C.call(this,ry,{email:i,ga:s},d,"emailLinkSignInLinking",{F:c,D:h}),this.i=a}f(To,C),To.prototype.v=function(){this.u(this.i),this.l().focus(),C.prototype.v.call(this)},To.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ye(To.prototype,{l:Ke,u:Xe});function Q2(i,s,a,c){var h=_e(s);rd(i,s,a,function(){ge(i,h,a)},function(d){if(!d.name||d.name!="cancel"){var g=pe(d);d&&d.code=="auth/network-request-failed"?s.a(g):(s.m(),ge(i,h,a,g))}},c)}le.emailLinkSignInLinking=function(i,s,a){var c=nn(H(i));if(rn(H(i)),c){var h=c.a.providerId,d=new To(a,no(A(i),h),function(){Q2(i,d,a,c)},Le(A(i)),Me(A(i)));d.render(s),X(i,d)}else ge(i,s)};function Co(i,s,a,c,h,d){C.call(this,Xv,{email:i},d,"emailLinkSignInSent",{F:c,D:h}),this.u=s,this.i=a}f(Co,C),Co.prototype.v=function(){var i=this;Se(this,this.l(),function(){i.i()}),Se(this,ie(this,"firebaseui-id-trouble-getting-email-link"),function(){i.u()}),this.l().focus(),C.prototype.v.call(this)},Co.prototype.o=function(){this.i=this.u=null,C.prototype.o.call(this)},ye(Co.prototype,{l:je}),le.emailLinkSignInSent=function(i,s,a,c,h){var d=new Co(a,function(){d.m(),x("emailNotReceived",i,s,a,c,h)},function(){d.m(),c()},Le(A(i)),Me(A(i)));d.render(s),X(i,d)};function ko(i,s,a,c,h,d,g){C.call(this,Ey,{jc:i,Qb:s},g,"emailMismatch",{F:h,D:d}),this.l=a,this.i=c}f(ko,C),ko.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),C.prototype.v.call(this)},ko.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ye(ko.prototype,{u:Ke,B:je,w:Xe}),le.emailMismatch=function(i,s,a){var c=nn(H(i));if(c){var h=new ko(a.user.email,c.g,function(){var d=h;rn(H(i)),Sn(i,d,a)},function(){var d=a.credential.providerId,g=_e(h);h.m(),c.a?x("federatedLinking",i,g,c.g,d):x("federatedSignIn",i,g,c.g,d)},Le(A(i)),Me(A(i)));h.render(s),X(i,h)}else ge(i,s)};function qr(i,s,a,c,h){C.call(this,Zv,void 0,h,"emailNotReceived",{F:a,D:c}),this.l=i,this.i=s}f(qr,C),qr.prototype.v=function(){var i=this;Se(this,this.u(),function(){i.i()}),Se(this,this.Da(),function(){i.l()}),this.u().focus(),C.prototype.v.call(this)},qr.prototype.Da=function(){return ie(this,"firebaseui-id-resend-email-link")},qr.prototype.o=function(){this.i=this.l=null,C.prototype.o.call(this)},ye(qr.prototype,{u:je}),le.emailNotReceived=function(i,s,a,c,h){var d=new qr(function(){rd(i,d,a,c,function(g){g=pe(g),d.a(g)},h)},function(){d.m(),ge(i,s,a)},Le(A(i)),Me(A(i)));d.render(s),X(i,d)};function Gr(i,s,a,c,h,d){C.call(this,oy,{email:i,ga:s},d,"federatedLinking",{F:c,D:h}),this.i=a}f(Gr,C),Gr.prototype.v=function(){this.u(this.i),this.l().focus(),C.prototype.v.call(this)},Gr.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ye(Gr.prototype,{l:Ke,u:Xe}),le.federatedLinking=function(i,s,a,c,h){var d=nn(H(i));if(d&&d.a){var g=new Gr(a,no(A(i),c),function(){mo(i,g,c,a)},Le(A(i)),Me(A(i)));g.render(s),X(i,g),h&&g.a(h)}else ge(i,s)},le.federatedRedirect=function(i,s,a){var c=new ec;c.render(s),X(i,c),s=kr(A(i))[0],mo(i,c,s,a)},le.federatedSignIn=function(i,s,a,c,h){var d=new Gr(a,no(A(i),c),function(){mo(i,d,c,a)},Le(A(i)),Me(A(i)));d.render(s),X(i,d),h&&d.a(h)};function X2(i,s,a,c){var h=s.u();h?J(i,s.I(ce(i.Xb,i),[a,h],function(d){return d=d.user.linkWithCredential(c).then(function(g){return Sn(i,s,{user:g.user,credential:c,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo})}),J(i,d),d},function(d){if(!d.name||d.name!="cancel")switch(d.code){case"auth/wrong-password":Ne(s.i(),!1),Qe(s.B(),pe(d));break;case"auth/too-many-requests":s.a(pe(d));break;default:Rt("signInWithEmailAndPassword: "+d.message,void 0),s.a(pe(d))}})):s.i().focus()}le.passwordLinking=function(i,s,a){var c=nn(H(i));rn(H(i));var h=c&&c.a;if(h){var d=new jr(a,function(){X2(i,d,a,h)},function(){d.m(),x("passwordRecovery",i,s,a)},Le(A(i)),Me(A(i)));d.render(s),X(i,d)}else ge(i,s)};function Ao(i,s,a,c,h,d){C.call(this,Kv,{email:a,Ta:!!s},d,"passwordRecovery",{F:c,D:h}),this.l=i,this.u=s}f(Ao,C),Ao.prototype.v=function(){this.B(),this.H(this.l,this.u),Je(this.i())||this.i().focus(),Vr(this,this.i(),this.l),C.prototype.v.call(this)},Ao.prototype.o=function(){this.u=this.l=null,C.prototype.o.call(this)},ye(Ao.prototype,{i:_n,w:ei,B:Br,M:$r,j:Hr,U:Ke,P:je,H:Xe});function Z2(i,s){var a=s.j();if(a){var c=_e(s);J(i,s.I(ce(te(i).sendPasswordResetEmail,te(i)),[a],function(){s.m();var h=new zu(a,function(){h.m(),ge(i,c)},Le(A(i)),Me(A(i)));h.render(c),X(i,h)},function(h){Ne(s.i(),!1),Qe(s.w(),pe(h))}))}else s.i().focus()}le.passwordRecovery=function(i,s,a,c,h){var d=new Ao(function(){Z2(i,d)},c?void 0:function(){d.m(),ge(i,s)},a,Le(A(i)),Me(A(i)));d.render(s),X(i,d),h&&d.a(h)},le.passwordSignIn=function(i,s,a,c){var h=new fo(function(){$2(i,h)},function(){var d=h.M();h.m(),x("passwordRecovery",i,s,d)},a,Le(A(i)),Me(A(i)),c);h.render(s),X(i,h)};function ud(){return ie(this,"firebaseui-id-name")}function cd(){return ie(this,"firebaseui-id-name-error")}function Ro(i,s,a,c,h,d,g,w,E){C.call(this,zv,{email:c,Tb:i,name:h,Ta:!!a,ia:!!w},E,"passwordSignUp",{F:d,D:g}),this.w=s,this.H=a,this.B=i}f(Ro,C),Ro.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(ho(this,this.i(),this.u()),ho(this,this.u(),this.l())):ho(this,this.i(),this.l()),this.w&&Vr(this,this.l(),this.w),Je(this.i())?this.B&&!Je(this.u())?this.u().focus():this.l().focus():this.i().focus(),C.prototype.v.call(this)},Ro.prototype.o=function(){this.H=this.w=null,C.prototype.o.call(this)},ye(Ro.prototype,{i:_n,U:ei,ea:Br,jb:$r,j:Hr,u:ud,Bc:cd,Ja:function(){var i=ud.call(this),s=cd.call(this);Mr(this,i,function(){xr(s)&&(Ne(i,!0),Pt(s))})},M:function(){var i=ud.call(this),s=cd.call(this),a=Je(i);return a=!/^[\s\xa0]*$/.test(a==null?"":String(a)),Ne(i,a),a?(Pt(s),s=!0):(Qe(s,ae("Enter your account name").toString()),s=!1),s?Ct(Je(i)):null},l:bo,ba:Xu,lb:Qu,ua:Yy,P:Jy,Nb:Ke,Mb:je,pa:Xe});function eS(i,s){var a=uv(A(i)),c=s.j(),h=null;a&&(h=s.M());var d=s.P();if(c){if(a)if(h)h=ur(h);else{s.u().focus();return}if(d){var g=j.auth.EmailAuthProvider.credential(c,d);J(i,s.I(ce(i.Yb,i),[c,d],function(w){var E={user:w.user,credential:g,operationType:w.operationType,additionalUserInfo:w.additionalUserInfo};return a?(w=w.user.updateProfile({displayName:h}).then(function(){return Sn(i,s,E)}),J(i,w),w):Sn(i,s,E)},function(w){if(!w.name||w.name!="cancel"){var E=po(w);switch(w=pe(E),E.code){case"auth/email-already-in-use":return tS(i,s,c,E);case"auth/too-many-requests":w=ae("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Ne(s.l(),!1),Qe(s.ba(),w);break;case"auth/admin-restricted-operation":xi(A(i))?(w=_e(s),s.m(),x("handleUnauthorizedUser",i,w,c,j.auth.EmailAuthProvider.PROVIDER_ID)):s.a(w);break;default:E="setAccountInfo: "+Fg(E),Rt(E,void 0),s.a(w)}}}))}else s.l().focus()}else s.i().focus()}function tS(i,s,a,c){function h(){var g=pe(c);Ne(s.i(),!1),Qe(s.U(),g),s.i().focus()}var d=te(i).fetchSignInMethodsForEmail(a).then(function(g){g.length?h():(g=_e(s),s.m(),x("passwordRecovery",i,g,a,!1,xm().toString()))},function(){h()});return J(i,d),d}le.passwordSignUp=function(i,s,a,c,h,d){function g(){w.m(),ge(i,s)}var w=new Ro(uv(A(i)),function(){eS(i,w)},h?void 0:g,a,c,Le(A(i)),Me(A(i)),d);w.render(s),X(i,w)};function ld(){return ie(this,"firebaseui-id-phone-confirmation-code")}function Zy(){return ie(this,"firebaseui-id-phone-confirmation-code-error")}function e0(){return ie(this,"firebaseui-id-resend-countdown")}function zr(i,s,a,c,h,d,g,w,E){C.call(this,Ty,{phoneNumber:h},E,"phoneSignInFinish",{F:g,D:w}),this.jb=d,this.i=new Fu(1e3),this.B=d,this.P=i,this.l=s,this.H=a,this.M=c}f(zr,C),zr.prototype.v=function(){var i=this;this.U(this.jb),zt(this.i,"tick",this.w,!1,this),this.i.start(),Se(this,ie(this,"firebaseui-id-change-phone-number-link"),function(){i.P()}),Se(this,this.Da(),function(){i.M()}),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),C.prototype.v.call(this)},zr.prototype.o=function(){this.M=this.H=this.l=this.P=null,Vu(this.i),Ni(this.i,"tick",this.w),this.i=null,C.prototype.o.call(this)},zr.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(Vu(this.i),Ni(this.i,"tick",this.w),this.ua(),this.lb())},ye(zr.prototype,{u:ld,pa:Zy,Ja:function(i){var s=ld.call(this),a=Zy.call(this);Mr(this,s,function(){xr(a)&&(Ne(s,!0),Pt(a))}),i&&lo(this,s,function(){i()})},ba:function(){var i=Ct(Je(ld.call(this))||"");return/^\d{6}$/.test(i)?i:null},Fb:e0,U:function(i){Zl(e0.call(this),ae("Resend code in "+((9<i?"0:":"0:0")+i)).toString())},ua:function(){Pt(this.Fb())},Da:function(){return ie(this,"firebaseui-id-resend-link")},lb:function(){Qe(this.Da())},Nb:Ke,Mb:je,ea:Xe});function nS(i,s,a,c){function h(g){s.u().focus(),Ne(s.u(),!1),Qe(s.pa(),g)}var d=s.ba();d?(s.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ae("Verifying...").toString()),J(i,s.I(ce(c.confirm,c),[d],function(g){s.h(),s.$("firebaseui-icon-done",ae("Verified!").toString());var w=setTimeout(function(){s.h(),s.m();var E={user:Wt(i).currentUser,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo};Sn(i,s,E,!0)},1e3);J(i,function(){s&&s.h(),clearTimeout(w)})},function(g){if(g.name&&g.name=="cancel")s.h();else{var w=po(g);switch(g=pe(w),w.code){case"auth/credential-already-in-use":s.h();break;case"auth/code-expired":w=_e(s),s.h(),s.m(),x("phoneSignInStart",i,w,a,g);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":s.h(),h(g);break;default:s.h(),s.a(g)}}}))):h(ae("Wrong code. Try again.").toString())}le.phoneSignInFinish=function(i,s,a,c,h,d){var g=new zr(function(){g.m(),x("phoneSignInStart",i,s,a)},function(){nS(i,g,a,h)},function(){g.m(),ge(i,s)},function(){g.m(),x("phoneSignInStart",i,s,a)},jh(a),c,Le(A(i)),Me(A(i)));g.render(s),X(i,g),d&&g.a(d)};var iS=!ke&&!(ee("Safari")&&!(pm()||ee("Coast")||ee("Opera")||ee("Edge")||ee("Firefox")||ee("FxiOS")||ee("Silk")||ee("Android")));function tc(i,s){return/-[a-z]/.test(s)?null:iS&&i.dataset?!ee("Android")||pm()||ee("Firefox")||ee("FxiOS")||ee("Opera")||ee("Silk")||s in i.dataset?(i=i.dataset[s],i===void 0?null:i):null:i.getAttribute("data-"+String(s).replace(/([A-Z])/g,"-$1").toLowerCase())}function rS(i,s,a){var c=this;i=js(Fv,{items:i},null,this.s),jv.call(this,i,!0,!0),a&&(a=sS(i,a))&&(a.focus(),D2(a,i)),Se(this,i,function(h){(h=(h=Rm(h.target,"firebaseui-id-list-box-dialog-button"))&&tc(h,"listboxid"))&&(Hu.call(c),s(h))})}function sS(i,s){i=(i||document).getElementsByTagName("BUTTON");for(var a=0;a<i.length;a++)if(tc(i[a],"listboxid")===s)return i[a];return null}function Fi(){return ie(this,"firebaseui-id-phone-number")}function t0(){return ie(this,"firebaseui-id-country-selector")}function hd(){return ie(this,"firebaseui-id-phone-number-error")}function oS(i,s){var a=i.a,c=dd("1-US-0",a),h=null;if(s&&dd(s,a)?h=s:c?h="1-US-0":h=0<a.length?a[0].c:null,!h)throw Error("No available default country");nc.call(this,h,i)}function dd(i,s){return i=Mi(i),!(!i||!Vt(s,i))}function aS(i){return i.map(function(s){return{id:s.c,Ma:"firebaseui-flag "+fd(s),label:s.name+" "+("‎+"+s.b)}})}function fd(i){return"firebaseui-flag-"+i.f}function uS(i){var s=this;rS.call(this,aS(i.a),function(a){nc.call(s,a,i,!0),s.O().focus()},this.Ba)}function nc(i,s,a){var c=Mi(i);c&&(a&&(a=Ct(Je(Fi.call(this))||""),s=Ou(s,a),s.length&&s[0].b!=c.b&&(a="+"+c.b+a.substr(s[0].b.length+1),pv(Fi.call(this),a))),s=Mi(this.Ba),this.Ba=i,i=ie(this,"firebaseui-id-country-selector-flag"),s&&on(i,fd(s)),sn(i,fd(c)),Zl(ie(this,"firebaseui-id-country-selector-code"),"‎+"+c.b))}function No(i,s,a,c,h,d,g,w,E,R){C.call(this,Sy,{Gb:s,Aa:E||null,Va:!!a,ia:!!d},R,"phoneSignInStart",{F:c,D:h}),this.H=w||null,this.M=s,this.l=i,this.w=a||null,this.pa=g||null}f(No,C),No.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||ho(this,this.O(),this.i()),Vr(this,this.i(),this.l),this.O().focus(),Zu(this.O(),(this.O().value||"").length),C.prototype.v.call(this)},No.prototype.o=function(){this.w=this.l=null,C.prototype.o.call(this)},ye(No.prototype,{Cb:nd,O:Fi,B:hd,ea:function(i,s,a){var c=this,h=Fi.call(this),d=t0.call(this),g=hd.call(this),w=i||to,E=w.a;if(E.length==0)throw Error("No available countries provided.");oS.call(c,w,s),Se(this,d,function(){uS.call(c,w)}),Mr(this,h,function(){xr(g)&&(Ne(h,!0),Pt(g));var R=Ct(Je(h)||""),U=Mi(this.Ba),fe=Ou(w,R);R=dd("1-US-0",E),fe.length&&fe[0].b!=U.b&&(U=fe[0],nc.call(c,U.b=="1"&&R?"1-US-0":U.c,w))}),a&&lo(this,h,function(){a()})},U:function(i){var s=Ct(Je(Fi.call(this))||"");i=i||to;var a=i.a,c=Ou(to,s);if(c.length&&!Vt(a,c[0]))throw pv(Fi.call(this)),Fi.call(this).focus(),Qe(hd.call(this),ae("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return a=Mi(this.Ba),c.length&&c[0].b!=a.b&&nc.call(this,c[0].c,i),c.length&&(s=s.substr(c[0].b.length+1)),s?new Xg(this.Ba,s):null},Ja:t0,ba:function(){return ie(this,"firebaseui-recaptcha-container")},u:function(){return ie(this,"firebaseui-id-recaptcha-error")},i:Ke,ua:je,P:Xe});function n0(i,s,a,c){try{var h=s.U(Wh)}catch{return}h?ro?(s.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ae("Verifying...").toString()),J(i,s.I(ce(i.cc,i),[jh(h),a],function(d){var g=_e(s);s.$("firebaseui-icon-done",ae("Code sent!").toString());var w=setTimeout(function(){s.h(),s.m(),x("phoneSignInFinish",i,g,h,15,d)},1e3);J(i,function(){s&&s.h(),clearTimeout(w)})},function(d){if(s.h(),!d.name||d.name!="cancel"){grecaptcha.reset(dv),ro=null;var g=d&&d.message||"";if(d.code)switch(d.code){case"auth/too-many-requests":g=ae("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":s.O().focus(),Qe(s.B(),ih().toString());return;case"auth/admin-restricted-operation":if(xi(A(i))){d=_e(s),s.m(),x("handleUnauthorizedUser",i,d,jh(h),j.auth.PhoneAuthProvider.PROVIDER_ID);return}g=pe(d);break;default:g=pe(d)}s.a(g)}}))):Rr?Qe(s.u(),ae("Solve the reCAPTCHA").toString()):!Rr&&c&&s.i().click():(s.O().focus(),Qe(s.B(),ih().toString()))}le.phoneSignInStart=function(i,s,a,c){var h=y2(A(i))||{};ro=null,Rr=!(h&&h.size==="invisible");var d=Hy(i),g=S2(A(i)),w=d?_2(A(i)):null;g=a&&a.a||g&&g.c||null,a=a&&a.Aa||w,(w=Bh(A(i)))&&Qg(w),Wh=w?new Wg(Bh(A(i))):to;var E=new No(function(U){n0(i,E,R,!(!U||!U.keyCode))},Rr,d?null:function(){R.clear(),E.m(),ge(i,s)},Le(A(i)),Me(A(i)),d,Wh,g,a);E.render(s),X(i,E),c&&E.a(c),h.callback=function(U){E.u()&&Pt(E.u()),ro=U,Rr||n0(i,E,R)},h["expired-callback"]=function(){ro=null};var R=new j.auth.RecaptchaVerifier(Rr?E.ba():E.i(),h,Wt(i).app);J(i,E.I(ce(R.render,R),[],function(U){dv=U},function(U){U.name&&U.name=="cancel"||(U=pe(U),E.m(),ge(i,s,void 0,U))}))},le.prefilledEmailSignIn=function(i,s,a){var c=new ec;c.render(s),X(i,c),J(i,c.I(ce(te(i).fetchSignInMethodsForEmail,te(i)),[a],function(h){c.m();var d=!(!Wu(i)||!s0(i));Gy(i,s,h,a,void 0,d)},function(h){h=pe(h),c.m(),x("signIn",i,s,a,h)}))};function Po(i,s,a,c,h){C.call(this,_y,{Sb:s},h,"providerSignIn",{F:a,D:c}),this.i=i}f(Po,C),Po.prototype.v=function(){this.l(this.i),C.prototype.v.call(this)},Po.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ye(Po.prototype,{l:function(i){function s(g){i(g)}for(var a=this.g?Ql("firebaseui-id-idp-button",this.g||this.s.a):[],c=0;c<a.length;c++){var h=a[c],d=tc(h,"providerId");Se(this,h,Ft(s,d))}}}),le.providerSignIn=function(i,s,a,c){var h=new Po(function(d){d==j.auth.EmailAuthProvider.PROVIDER_ID?(h.m(),sd(i,s,c)):d==j.auth.PhoneAuthProvider.PROVIDER_ID?(h.m(),x("phoneSignInStart",i,s)):d=="anonymous"?j2(i,h):mo(i,h,d,c),re(i),i.l.cancel()},nv(A(i)),Le(A(i)),Me(A(i)));h.render(s),X(i,h),a&&h.a(a),hS(i)},le.sendEmailLinkForSignIn=function(i,s,a,c){var h=new Yu;h.render(s),X(i,h),rd(i,h,a,c,function(d){h.m(),d&&d.code=="auth/admin-restricted-operation"&&xi(A(i))?x("handleUnauthorizedUser",i,s,a,j.auth.EmailAuthProvider.PROVIDER_ID):(d=pe(d),x("signIn",i,s,a,d))})};function Do(i,s,a,c,h,d,g){C.call(this,qv,{email:a,Va:!!s,ia:!!d},g,"signIn",{F:c,D:h}),this.i=i,this.u=s}f(Do,C),Do.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Zu(this.l(),(this.l().value||"").length),C.prototype.v.call(this)},Do.prototype.o=function(){this.u=this.i=null,C.prototype.o.call(this)},ye(Do.prototype,{l:_n,M:ei,w:Br,H:$r,j:Hr,U:Ke,P:je,B:Xe}),le.signIn=function(i,s,a,c){var h=Wu(i),d=new Do(function(){var g=d,w=g.j()||"";w&&qy(i,g,w)},h?null:function(){d.m(),ge(i,s,a)},a,Le(A(i)),Me(A(i)),h);d.render(s),X(i,d),c&&d.a(c)};function Oo(i,s,a,c,h,d,g){C.call(this,ay,{kc:i,yb:a,Eb:!!c},g,"unauthorizedUser",{F:h,D:d}),this.l=s,this.i=c}f(Oo,C),Oo.prototype.v=function(){var i=this,s=ie(this,"firebaseui-id-unauthorized-user-help-link");this.i&&s&&Se(this,s,function(){i.i()}),Se(this,this.u(),function(){i.l()}),this.u().focus(),C.prototype.v.call(this)},Oo.prototype.o=function(){this.i=this.l=null,C.prototype.o.call(this)},ye(Oo.prototype,{u:je}),le.handleUnauthorizedUser=function(i,s,a,c){function h(){ge(i,s)}c===j.auth.EmailAuthProvider.PROVIDER_ID?h=function(){sd(i,s)}:c===j.auth.PhoneAuthProvider.PROVIDER_ID&&(h=function(){x("phoneSignInStart",i,s)});var d=null,g=null;c===j.auth.EmailAuthProvider.PROVIDER_ID&&rv(A(i))?(d=I2(A(i)),g=E2(A(i))):xi(A(i))&&(d=w2(A(i)),g=b2(A(i)));var w=new Oo(a,function(){w.m(),h()},d,g,Le(A(i)),Me(A(i)));w.render(s),X(i,w)};function Lo(i,s,a,c,h,d){C.call(this,uy,{email:i},d,"unsupportedProvider",{F:c,D:h}),this.l=s,this.i=a}f(Lo,C),Lo.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),C.prototype.v.call(this)},Lo.prototype.o=function(){this.i=this.l=null,C.prototype.o.call(this)},ye(Lo.prototype,{u:Ke,B:je,w:Xe}),le.unsupportedProvider=function(i,s,a){var c=new Lo(a,function(){c.m(),x("passwordRecovery",i,s,a)},function(){c.m(),ge(i,s,a)},Le(A(i)),Me(A(i)));c.render(s),X(i,c)};function an(i,s){this.$=!1;var a=pd(s);if(Mo[a])throw Error('An AuthUI instance already exists for the key "'+a+'"');Mo[a]=this,this.a=i,this.u=null,this.Y=!1,i0(this.a),this.h=j.initializeApp({apiKey:i.app.options.apiKey,authDomain:i.app.options.authDomain},i.app.name+"-firebaseui-temp").auth(),(i=i.emulatorConfig)&&(a=i.port,this.h.useEmulator(i.protocol+"://"+i.host+(a===null?"":":"+a),i.options)),i0(this.h),this.h.setPersistence&&this.h.setPersistence(j.auth.Auth.Persistence.SESSION),this.oa=s,this.ca=new v2,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=wh.Xa(),this.j=this.C=null,this.da=this.A=!1}function i0(i){i&&i.INTERNAL&&i.INTERNAL.logFramework&&i.INTERNAL.logFramework("FirebaseUI-web")}var Mo={};function pd(i){return i||"[DEFAULT]"}function r0(i){return re(i),i.i||(i.i=Tn(i,function(s){return s&&!nn(H(i))?Re(Wt(i).getRedirectResult().then(function(a){return a},function(a){if(a&&a.code=="auth/email-already-in-use"&&a.email&&a.credential)throw a;return ni(i,a)})):Re(te(i).getRedirectResult().then(function(a){return Lu(A(i))&&!a.user&&i.j&&!i.j.isAnonymous?Wt(i).getRedirectResult():a}))})),i.i}function X(i,s){re(i),i.g=s}var Kr=null;function te(i){return re(i),i.h}function Wt(i){return re(i),i.a}function H(i){return re(i),i.oa}function s0(i){return re(i),i.O?i.O.emailHint:void 0}t=an.prototype,t.nb=function(){return re(this),!!Mh(H(this))||o0(En())};function o0(i){return i=new Si(i),(i.a.a.get(Ue.ub)||null)==="signIn"&&!!i.a.a.get(Ue.$a)}t.start=function(i,s){a0(this,i,s)};function a0(i,s,a,c){re(i),typeof i.a.languageCode<"u"&&(i.u=i.a.languageCode);var h="en".replace(/_/g,"-");i.a.languageCode=h,i.h.languageCode=h,i.Y=!0,typeof i.a.tenantId<"u"&&(i.h.tenantId=i.a.tenantId),i.ib(a),i.O=c||null;var d=b.document;i.C?i.C.then(function(){d.readyState=="complete"?ic(i,s):Gs(window,"load",function(){ic(i,s)})}):d.readyState=="complete"?ic(i,s):Gs(window,"load",function(){ic(i,s)})}function ic(i,s){var a=du(s,"Could not find the FirebaseUI widget element on the page.");if(a.setAttribute("lang","en".replace(/_/g,"-")),Kr){var c=Kr;re(c),nn(H(c))&&Xn("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),Kr.reset()}if(Kr=i,i.T=a,lS(i,a),Du(new Ph)&&Du(new Dh)){s=du(s,"Could not find the FirebaseUI widget element on the page."),a=En(),c=Fh(A(i).a,"queryParameterForSignInSuccessUrl"),a=(a=Ja(a,c))?Gn(Xa(a)).toString():null;e:{c=En();var h=av(A(i));c=Ja(c,h)||"";for(d in Kh)if(Kh[d].toLowerCase()==c.toLowerCase()){var d=Kh[d];break e}d="callback"}switch(d){case"callback":a&&(d=H(i),Tr(Zs,a,d)),i.nb()?x("callback",i,s):ge(i,s,s0(i));break;case"resetPassword":x("passwordReset",i,s,go(),od());break;case"recoverEmail":x("emailChangeRevocation",i,s,go());break;case"revertSecondFactorAddition":x("revertSecondFactorAddition",i,s,go());break;case"verifyEmail":x("emailVerification",i,s,go(),od());break;case"verifyAndChangeEmail":x("verifyAndChangeEmail",i,s,go(),od());break;case"signIn":x("emailLinkSignInCallback",i,s,En()),h0();break;case"select":a&&(d=H(i),Tr(Zs,a,d)),ge(i,s);break;default:throw Error("Unhandled widget operation.")}s=A(i),(s=io(s).uiShown||null)&&s()}else s=du(s,"Could not find the FirebaseUI widget element on the page."),d=new By(ae("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),d.render(s),X(i,d);s=i.g&&i.g.Ga=="blank"&&$h(A(i)),Mh(H(i))&&!s&&(s=Mh(H(i)),l0(i,s.a),Et(Li,H(i)))}function Tn(i,s){if(i.A)return s(u0(i));if(J(i,function(){i.A=!1}),Lu(A(i))){var a=new Ve(function(c){J(i,i.a.onAuthStateChanged(function(h){i.j=h,i.A||(i.A=!0,c(s(u0(i))))}))});return J(i,a),a}return i.A=!0,s(null)}function u0(i){return re(i),Lu(A(i))&&i.j&&i.j.isAnonymous?i.j:null}function J(i,s){if(re(i),s){i.s.push(s);var a=function(){BE(i.s,function(c){return c==s})};typeof s!="function"&&s.then(a,a)}}t.Db=function(){re(this),this.Z=!0};function cS(i){re(i);var s;return(s=i.Z)||(i=A(i),i=ov(i,j.auth.GoogleAuthProvider.PROVIDER_ID),s=!(!i||i.prompt!=="select_account")),s}function c0(i){typeof i.a.languageCode<"u"&&i.Y&&(i.Y=!1,i.a.languageCode=i.u)}function l0(i,s){i.a.tenantId=s,i.h.tenantId=s}t.reset=function(){re(this);var i=this;this.T&&this.T.removeAttribute("lang"),this.J&&q_(this.J),c0(this),this.O=null,h0(),Et(Li,H(this)),re(this),this.l.cancel(),this.i=Re({user:null,credential:null}),Kr==this&&(Kr=null),this.T=null;for(var s=0;s<this.s.length;s++)typeof this.s[s]=="function"?this.s[s]():this.s[s].cancel&&this.s[s].cancel();this.s=[],rn(H(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=ti(this).then(function(){i.C=null},function(){i.C=null}))};function lS(i,s){i.L=null,i.J=new lu(s),i.J.register(),zt(i.J,"pageEnter",function(a){if(a=a&&a.pageId,i.L!=a){var c=A(i);(c=io(c).uiChanged||null)&&c(i.L,a),i.L=a}})}t.ib=function(i){re(this);var s=this.ca,a;for(a in i)try{Uh(s.a,a,i[a])}catch{Rt('Invalid config: "'+a+'"',void 0)}h_&&Uh(s.a,"popupMode",!1),Bh(s),!this.da&&Hh(A(this))&&(Xn("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)};function A(i){return re(i),i.ca}t.Wb=function(){re(this);var i=A(this),s=Fh(i.a,"widgetUrl");i=av(i);for(var a=s.search(om),c=0,h,d=[];0<=(h=sm(s,c,i,a));)d.push(s.substring(c,h)),c=Math.min(s.indexOf("&",h)+1||a,a);d.push(s.substr(c)),s=d.join("").replace(e_,"$1"),a="="+encodeURIComponent("select"),(i+=a)?(a=s.indexOf("#"),0>a&&(a=s.length),c=s.indexOf("?"),0>c||c>a?(c=a,h=""):h=s.substring(c+1,a),s=[s.substr(0,c),h,s.substr(a)],a=s[1],s[1]=i?a?a+"&"+i:i:a,a=s[0]+(s[1]?"?"+s[1]:"")+s[2]):a=s,A(this).a.get("popupMode")?(i=(window.screen.availHeight-600)/2,s=(window.screen.availWidth-500)/2,a=a||"about:blank",i={width:500,height:600,top:0<i?i:0,left:0<s?s:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},i.target=i.target||a.target||"google_popup",i.width=i.width||690,i.height=i.height||500,(i=ug(a,i))&&i.focus()):pr(window.location,a)};function re(i){if(i.$)throw Error("AuthUI instance is deleted!")}t.Wa=function(){var i=this;return re(this),this.h.app.delete().then(function(){var s=pd(H(i));delete Mo[s],i.reset(),i.$=!0})};function hS(i){re(i);try{pg(i.l,iv(A(i)),cS(i)).then(function(s){return i.g?B2(i,i.g,s):!1})}catch{}}t.Ib=function(i,s){re(this);var a=this,c=Q_();if(!Ar(A(this)))return mr(Error("Email link sign-in should be enabled to trigger email sending."));var h=C2(A(this)),d=new Si(h.url);return a_(d,c),s&&s.a&&(g2(c,s,H(this)),hm(d,s.a.providerId)),u_(d,T2(A(this))),Tn(this,function(g){return g&&((g=g.uid)?d.a.a.set(Ue.Pa,g):_i(d.a.a,Ue.Pa)),h.url=d.toString(),te(a).sendSignInLinkToEmail(i,h)}).then(function(){var g=H(a),w={};w.email=i,Tr(_r,Mg(c,JSON.stringify(w)),g)},function(g){throw Et(eo,H(a)),Et(_r,H(a)),g})};function dS(i,s){var a=lm(new Si(s));return a?(s=new Ve(function(c,h){var d=Wt(i).onAuthStateChanged(function(g){d(),g&&g.isAnonymous&&g.uid===a?c(g):g&&g.isAnonymous&&g.uid!==a?h(Error("anonymous-user-mismatch")):h(Error("anonymous-user-not-found"))});J(i,d)}),J(i,s),s):Re(null)}function fS(i,s,a,c,h){re(i);var d=h||null,g=j.auth.EmailAuthProvider.credentialWithLink(a,c);return a=d?te(i).signInWithEmailLink(a,c).then(function(w){return w.user.linkWithCredential(d)}).then(function(){return ti(i)}).then(function(){return ni(i,{code:"auth/email-already-in-use"},d)}):te(i).fetchSignInMethodsForEmail(a).then(function(w){return w.length?ni(i,{code:"auth/email-already-in-use"},g):s.linkWithCredential(g)}),J(i,a),a}function pS(i,s,a,c){re(i);var h=c||null,d;return s=te(i).signInWithEmailLink(s,a).then(function(g){if(d={user:g.user,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo},h)return g.user.linkWithCredential(h).then(function(w){d={user:w.user,credential:h,operationType:d.operationType,additionalUserInfo:w.additionalUserInfo}})}).then(function(){ti(i)}).then(function(){return Wt(i).updateCurrentUser(d.user)}).then(function(){return d.user=Wt(i).currentUser,d}),J(i,s),s}function h0(){var i=En();if(o0(i)){i=new Si(i);for(var s in Ue)Ue.hasOwnProperty(s)&&_i(i.a.a,Ue[s]);s={state:"signIn",mode:"emailLink",operation:"clear"};var a=b.document.title;b.history&&b.history.replaceState&&b.history.replaceState(s,a,i.toString())}}t.bc=function(i,s){re(this);var a=this;return te(this).signInWithEmailAndPassword(i,s).then(function(c){return Tn(a,function(h){return h?ti(a).then(function(){return ni(a,{code:"auth/email-already-in-use"},j.auth.EmailAuthProvider.credential(i,s))}):c})})},t.Yb=function(i,s){re(this);var a=this;return Tn(this,function(c){if(c){var h=j.auth.EmailAuthProvider.credential(i,s);return c.linkWithCredential(h)}return te(a).createUserWithEmailAndPassword(i,s)})},t.ac=function(i){re(this);var s=this;return Tn(this,function(a){return a?a.linkWithCredential(i).then(function(c){return c},function(c){if(c&&c.code=="auth/email-already-in-use"&&c.email&&c.credential)throw c;return ni(s,c,i)}):te(s).signInWithCredential(i)})};function mS(i,s){return re(i),Tn(i,function(a){return a&&!nn(H(i))?a.linkWithPopup(s).then(function(c){return c},function(c){if(c&&c.code=="auth/email-already-in-use"&&c.email&&c.credential)throw c;return ni(i,c)}):te(i).signInWithPopup(s)})}t.dc=function(i){re(this);var s=this,a=this.i;return this.i=null,Tn(this,function(c){return c&&!nn(H(s))?c.linkWithRedirect(i):te(s).signInWithRedirect(i)}).then(function(){},function(c){throw s.i=a,c})},t.cc=function(i,s){re(this);var a=this;return Tn(this,function(c){return c?c.linkWithPhoneNumber(i,s).then(function(h){return new Ih(h,function(d){if(d.code=="auth/credential-already-in-use")return ni(a,d);throw d})}):Wt(a).signInWithPhoneNumber(i,s).then(function(h){return new Ih(h)})})},t.$b=function(){return re(this),Wt(this).signInAnonymously()};function gS(i,s){return re(i),Tn(i,function(a){if(i.j&&!i.j.isAnonymous&&Lu(A(i))&&!te(i).currentUser)return ti(i).then(function(){return s.credential.providerId=="password"&&(s.credential=null),s});if(a)return ti(i).then(function(){return a.linkWithCredential(s.credential)}).then(function(c){return s.user=c.user,s.credential=c.credential,s.operationType=c.operationType,s.additionalUserInfo=c.additionalUserInfo,s},function(c){if(c&&c.code=="auth/email-already-in-use"&&c.email&&c.credential)throw c;return ni(i,c,s.credential)});if(!s.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return ti(i).then(function(){return Wt(i).updateCurrentUser(s.user)}).then(function(){return s.user=Wt(i).currentUser,s.operationType="signIn",s.credential&&s.credential.providerId&&s.credential.providerId=="password"&&(s.credential=null),s})})}t.Xb=function(i,s){return re(this),te(this).signInWithEmailAndPassword(i,s)};function ti(i){return re(i),te(i).signOut()}function ni(i,s,a){if(re(i),s&&s.code&&(s.code=="auth/email-already-in-use"||s.code=="auth/credential-already-in-use")){var c=hv(A(i));return Re().then(function(){return c(new Bs("anonymous-upgrade-merge-conflict",null,a||s.credential))}).then(function(){throw i.g&&(i.g.m(),i.g=null),s})}return mr(s)}function xo(i,s,a,c){C.call(this,Ay,void 0,c,"providerMatchByEmail",{F:s,D:a}),this.i=i}f(xo,C),xo.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Zu(this.l(),(this.l().value||"").length),C.prototype.v.call(this)},xo.prototype.o=function(){this.i=null,C.prototype.o.call(this)},ye(xo.prototype,{l:_n,H:ei,u:Br,B:$r,j:Hr,M:Ke,w:Xe});function rc(i,s,a,c,h){C.call(this,ky,{ec:s},h,"selectTenant",{F:a,D:c}),this.i=i}f(rc,C),rc.prototype.v=function(){vS(this,this.i),C.prototype.v.call(this)},rc.prototype.o=function(){this.i=null,C.prototype.o.call(this)};function vS(i,s){function a(w){s(w)}for(var c=i.g?Ql("firebaseui-id-tenant-selection-button",i.g||i.s.a):[],h=0;h<c.length;h++){var d=c[h],g=tc(d,"tenantId");Se(i,d,Ft(a,g))}}function md(i){C.call(this,Jv,void 0,i,"spinner")}f(md,C);function yS(i){this.a=new xh,Oe(this.a,"authDomain"),Oe(this.a,"displayMode",oc),Oe(this.a,"tenants"),Oe(this.a,"callbacks"),Oe(this.a,"tosUrl"),Oe(this.a,"privacyPolicyUrl");for(var s in i)if(i.hasOwnProperty(s))try{Uh(this.a,s,i[s])}catch{Rt('Invalid config: "'+s+'"',void 0)}}function wS(i){i=i.a.get("displayMode");for(var s in vd)if(vd[s]===i)return vd[s];return oc}function sc(i){return i.a.get("callbacks")||{}}function d0(i){var s=i.a.get("tosUrl")||null;if(i=i.a.get("privacyPolicyUrl")||null,s&&!i&&Xn("Privacy Policy URL is missing, the link will not be displayed."),s&&i){if(typeof s=="function")return s;if(typeof s=="string")return function(){vr(s)}}return null}function f0(i){var s=i.a.get("tosUrl")||null,a=i.a.get("privacyPolicyUrl")||null;if(a&&!s&&Xn("Terms of Service URL is missing, the link will not be displayed."),s&&a){if(typeof a=="function")return a;if(typeof a=="string")return function(){vr(a)}}return null}function gd(i,s){if(i=i.a.get("tenants"),!i||!i.hasOwnProperty(s)&&!i.hasOwnProperty(ac))throw Error("Invalid tenant configuration!")}function p0(i,s,a){if(i=i.a.get("tenants"),!i)throw Error("Invalid tenant configuration!");var c=[];if(i=i[s]||i[ac],!i)return Rt("Invalid tenant configuration: "+(s+" is not configured!"),void 0),c;if(s=i.signInOptions,!s)throw Error("Invalid tenant configuration: signInOptions are invalid!");return s.forEach(function(h){if(typeof h=="string")c.push(h);else if(typeof h.provider=="string"){var d=h.hd;d&&a?(d instanceof RegExp?d:new RegExp("@"+d.replace(".","\\.")+"$")).test(a)&&c.push(h.provider):c.push(h.provider)}else h="Invalid tenant configuration: signInOption "+(JSON.stringify(h)+" is invalid!"),Rt(h,void 0)}),c}function bS(i,s,a){return i=IS(i,s),(s=i.signInOptions)&&a&&(s=s.filter(function(c){return typeof c=="string"?a.includes(c):a.includes(c.provider)}),i.signInOptions=s),i}function IS(i,s){var a=ES,c=c===void 0?{}:c;return gd(i,s),i=i.a.get("tenants"),X_(i[s]||i[ac],a,c)}var ES=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],oc="optionFirst",vd={pc:oc,oc:"identifierFirst"},ac="*";function Yt(i,s){var a=this;this.s=du(i),this.a={},Object.keys(s).forEach(function(c){a.a[c]=new yS(s[c])}),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(c){this.ob=c||null},enumerable:!1})}t=Yt.prototype,t.Ub=function(i,s){var a=this;ii(this);var c=i.apiKey;return new Ve(function(h,d){if(a.a.hasOwnProperty(c)){var g=sc(a.a[c]).selectTenantUiHidden||null;if(wS(a.a[c])===oc){var w=[];s.forEach(function(U){U=U||"_";var fe=a.a[c].a.get("tenants");if(!fe)throw Error("Invalid tenant configuration!");(fe=fe[U]||fe[ac])?U={tenantId:U!=="_"?U:null,V:fe.fullLabel||null,displayName:fe.displayName,za:fe.iconUrl,ta:fe.buttonColor}:(Rt("Invalid tenant configuration: "+(U+" is not configured!"),void 0),U=null),U&&w.push(U)});var E=function(U){U={tenantId:U,providerIds:p0(a.a[c],U||"_")},h(U)};if(w.length===1){E(w[0].tenantId);return}a.g=new rc(function(U){ii(a),g&&g(),E(U)},w,d0(a.a[c]),f0(a.a[c]))}else a.g=new xo(function(){var U=a.g.j();if(U){for(var fe=0;fe<s.length;fe++){var Jt=p0(a.a[c],s[fe]||"_",U);if(Jt.length!==0){U={tenantId:s[fe],providerIds:Jt,email:U},ii(a),g&&g(),h(U);return}}a.g.a(Um({code:"no-matching-tenant-for-email"}).toString())}},d0(a.a[c]),f0(a.a[c]));a.g.render(a.s),(d=sc(a.a[c]).selectTenantUiShown||null)&&d()}else{var R=Error("Invalid project configuration: API key is invalid!");R.code="invalid-configuration",a.pb(R),d(R)}})},t.Pb=function(i,s){if(!this.a.hasOwnProperty(i))throw Error("Invalid project configuration: API key is invalid!");var a=s||void 0;gd(this.a[i],s||"_");try{this.i=j.app(a).auth()}catch{var c=this.a[i].a.get("authDomain");if(!c)throw Error("Invalid project configuration: authDomain is required!");i=j.initializeApp({apiKey:i,authDomain:c},a),i.auth().tenantId=s,this.i=i.auth()}return this.i},t.Zb=function(i,s){var a=this;return new Ve(function(c,h){function d(fe,Jt){a.j=new an(i),a0(a.j,a.s,fe,Jt)}var g=i.app.options.apiKey;a.a.hasOwnProperty(g)||h(Error("Invalid project configuration: API key is invalid!"));var w=bS(a.a[g],i.tenantId||"_",s&&s.providerIds);ii(a),h={signInSuccessWithAuthResult:function(fe){return c(fe),!1}};var E=sc(a.a[g]).signInUiShown||null,R=!1;h.uiChanged=function(fe,Jt){fe===null&&Jt==="callback"?((fe=Xl("firebaseui-id-page-callback",a.s))&&Pt(fe),a.h=new md,a.h.render(a.s)):R||fe===null&&Jt==="spinner"||Jt==="blank"||(a.h&&(a.h.m(),a.h=null),R=!0,E&&E(i.tenantId))},w.callbacks=h,w.credentialHelper="none";var U;s&&s.email&&(U={emailHint:s.email}),a.j?a.j.Wa().then(function(){d(w,U)}):d(w,U)})},t.reset=function(){var i=this;return Re().then(function(){i.j&&i.j.Wa()}).then(function(){i.j=null,ii(i)})},t.Vb=function(){var i=this;this.h||this.A||(this.A=window.setTimeout(function(){ii(i),i.h=new md,i.g=i.h,i.h.render(i.s),i.A=null},500))},t.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},t.Bb=function(){return ii(this),this.g=new xy,this.g.render(this.s),Re()};function ii(i){i.j&&i.j.reset(),i.mb(),i.g&&i.g.m()}t.pb=function(i){var s=this,a=Um({code:i.code}).toString()||i.message;ii(this);var c;i.retry&&typeof i.retry=="function"&&(c=function(){s.reset(),i.retry()}),this.g=new jy(a,c),this.g.render(this.s)},t.Rb=function(i){var s=this;return Re().then(function(){var a=s.i&&s.i.app.options.apiKey;if(!s.a.hasOwnProperty(a))throw Error("Invalid project configuration: API key is invalid!");if(gd(s.a[a],i.tenantId||"_"),!s.i.currentUser||s.i.currentUser.uid!==i.uid)throw Error("The user being processed does not match the signed in user!");return(a=sc(s.a[a]).beforeSignInSuccess||null)?a(i):i}).then(function(a){if(a.uid!==i.uid)throw Error("User with mismatching UID returned.");return a})},Ee("firebaseui.auth.FirebaseUiHandler",Yt),Ee("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Yt.prototype.Ub),Ee("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Yt.prototype.Pb),Ee("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Yt.prototype.Zb),Ee("firebaseui.auth.FirebaseUiHandler.prototype.reset",Yt.prototype.reset),Ee("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Yt.prototype.Vb),Ee("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Yt.prototype.mb),Ee("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Yt.prototype.Bb),Ee("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Yt.prototype.pb),Ee("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Yt.prototype.Rb),Ee("firebaseui.auth.AuthUI",an),Ee("firebaseui.auth.AuthUI.getInstance",function(i){return i=pd(i),Mo[i]?Mo[i]:null}),Ee("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",an.prototype.Db),Ee("firebaseui.auth.AuthUI.prototype.start",an.prototype.start),Ee("firebaseui.auth.AuthUI.prototype.setConfig",an.prototype.ib),Ee("firebaseui.auth.AuthUI.prototype.signIn",an.prototype.Wb),Ee("firebaseui.auth.AuthUI.prototype.reset",an.prototype.reset),Ee("firebaseui.auth.AuthUI.prototype.delete",an.prototype.Wa),Ee("firebaseui.auth.AuthUI.prototype.isPendingRedirect",an.prototype.nb),Ee("firebaseui.auth.AuthUIError",Bs),Ee("firebaseui.auth.AuthUIError.prototype.toJSON",Bs.prototype.toJSON),Ee("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",qh),Ee("firebaseui.auth.CredentialHelper.NONE",xu),Ee("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Ve.prototype.catch=Ve.prototype.Ca,Ve.prototype.finally=Ve.prototype.fc}).apply(typeof global<"u"?global:typeof self<"u"?self:window)}).apply(typeof global<"u"?global:typeof self<"u"?self:window);typeof window<"u"&&(window.dialogPolyfill=IL);var zw=firebaseui.auth;const qd=document.getElementById("startRsvp"),Kw=document.getElementById("guestbook-container"),EL=document.getElementById("leave-message"),Ww=document.getElementById("message"),Yw=document.getElementById("guestbook");document.getElementById("number-attending");document.getElementById("rsvp-yes");document.getElementById("rsvp-no");let Gd,Vi;async function _L(){el({apiKey:"AIzaSyBzhHm7SoSN-zFFodE5zHwSiQbzJtVurtU",authDomain:"websovellus-harjoitustyo.firebaseapp.com",projectId:"websovellus-harjoitustyo",storageBucket:"websovellus-harjoitustyo.firebasestorage.app",messagingSenderId:"173262575013",appId:"1:173262575013:web:c155dc2364150852eb444c"}),Vi=lR(),Gd=tO();const e={credentialHelper:zw.CredentialHelper.NONE,signInOptions:[Vn.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(o,u){return!1}}},n=new zw.AuthUI(Vi);qd.addEventListener("click",()=>{Vi.currentUser?Ck(Vi):n.start("#firebaseui-auth-container",e)}),Tk(Vi,o=>{o?(qd.textContent="LOGOUT",Kw.style.display="block"):(qd.textContent="RSVP",Kw.style.display="none")}),EL.addEventListener("submit",async o=>(o.preventDefault(),yO(Uw(Gd,"guestbook"),{text:Ww.value,timestamp:Date.now(),name:Vi.currentUser.displayName,userId:Vi.currentUser.uid}),Ww.value="",!1));const r=dO(Uw(Gd,"guestbook"),fO("timestamp","desc"));wO(r,o=>{Yw.innerHTML="",o.forEach(u=>{const l=document.createElement("p");l.textContent=u.data().name+": "+u.data().text,Yw.appendChild(l)})})}_L();
