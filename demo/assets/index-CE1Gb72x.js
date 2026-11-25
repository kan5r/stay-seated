(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="181",or={ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pm=0,Wc=1,Dm=2,Yl=1,Kl=2,Jn=3,gi=0,fn=1,Qn=2,ii=0,cr=1,Xc=2,$c=3,jc=4,Lm=5,Ii=100,Fm=101,Im=102,Um=103,Nm=104,Om=200,km=201,Bm=202,zm=203,qa=204,Ya=205,Vm=206,Gm=207,Hm=208,Wm=209,Xm=210,$m=211,jm=212,qm=213,Ym=214,Ka=0,Za=1,Ja=2,ur=3,Qa=4,eo=5,to=6,no=7,Zl=0,Km=1,Zm=2,xi=0,Jm=1,Qm=2,e0=3,t0=4,n0=5,i0=6,r0=7,Jl=300,hr=301,dr=302,io=303,ro=304,Xs=306,Vs=1e3,ei=1001,so=1002,xn=1003,s0=1004,hs=1005,bn=1006,pa=1007,Ni=1008,Vn=1009,Ql=1010,eu=1011,Ir=1012,ko=1013,Oi=1014,ti=1015,mr=1016,Bo=1017,zo=1018,Ur=1020,tu=35902,nu=35899,iu=1021,ru=1022,Ln=1023,Nr=1026,Or=1027,su=1028,Vo=1029,Go=1030,Ho=1031,Wo=1033,Ls=33776,Fs=33777,Is=33778,Us=33779,ao=35840,oo=35841,co=35842,lo=35843,uo=36196,ho=37492,fo=37496,po=37808,mo=37809,_o=37810,xo=37811,go=37812,vo=37813,yo=37814,So=37815,Eo=37816,bo=37817,Mo=37818,To=37819,wo=37820,Ao=37821,Ro=36492,Co=36494,Po=36495,Do=36283,Lo=36284,Fo=36285,Io=36286,a0=3200,o0=3201,au=0,c0=1,pi="",ln="srgb",fr="srgb-linear",Gs="linear",Pt="srgb",Xi=7680,qc=519,l0=512,u0=513,h0=514,ou=515,d0=516,f0=517,p0=518,m0=519,Yc=35044,Kc="300 es",Bn=2e3,Hs=2001;function cu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _0(){const r=Ws("canvas");return r.style.display="block",r}const Zc={};function Jc(...r){const e="THREE."+r.shift();console.log(e,...r)}function Je(...r){const e="THREE."+r.shift();console.warn(e,...r)}function kt(...r){const e="THREE."+r.shift();console.error(e,...r)}function kr(...r){const e=r.join(" ");e in Zc||(Zc[e]=!0,Je(...r))}function x0(r,e,t){return new Promise(function(n,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,Uo=180/Math.PI;function Br(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function g0(r,e){return(r%e+e)%e}function ma(r,e,t){return(1-t)*r+t*e}function Mr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const v0={DEG2RAD:Ns};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*a+e.x,this.y=o*a+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,u,h){let p=n[a+0],f=n[a+1],_=n[a+2],g=n[a+3],v=o[u+0],y=o[u+1],C=o[u+2],D=o[u+3];if(h<=0){e[t+0]=p,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h>=1){e[t+0]=v,e[t+1]=y,e[t+2]=C,e[t+3]=D;return}if(g!==D||p!==v||f!==y||_!==C){let b=p*v+f*y+_*C+g*D;b<0&&(v=-v,y=-y,C=-C,D=-D,b=-b);let m=1-h;if(b<.9995){const U=Math.acos(b),L=Math.sin(U);m=Math.sin(m*U)/L,h=Math.sin(h*U)/L,p=p*m+v*h,f=f*m+y*h,_=_*m+C*h,g=g*m+D*h}else{p=p*m+v*h,f=f*m+y*h,_=_*m+C*h,g=g*m+D*h;const U=1/Math.sqrt(p*p+f*f+_*_+g*g);p*=U,f*=U,_*=U,g*=U}}e[t]=p,e[t+1]=f,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,a,o,u){const h=n[a],p=n[a+1],f=n[a+2],_=n[a+3],g=o[u],v=o[u+1],y=o[u+2],C=o[u+3];return e[t]=h*C+_*g+p*y-f*v,e[t+1]=p*C+_*v+f*g-h*y,e[t+2]=f*C+_*y+h*v-p*g,e[t+3]=_*C-h*g-p*v-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,u=e._order,h=Math.cos,p=Math.sin,f=h(n/2),_=h(a/2),g=h(o/2),v=p(n/2),y=p(a/2),C=p(o/2);switch(u){case"XYZ":this._x=v*_*g+f*y*C,this._y=f*y*g-v*_*C,this._z=f*_*C+v*y*g,this._w=f*_*g-v*y*C;break;case"YXZ":this._x=v*_*g+f*y*C,this._y=f*y*g-v*_*C,this._z=f*_*C-v*y*g,this._w=f*_*g+v*y*C;break;case"ZXY":this._x=v*_*g-f*y*C,this._y=f*y*g+v*_*C,this._z=f*_*C+v*y*g,this._w=f*_*g-v*y*C;break;case"ZYX":this._x=v*_*g-f*y*C,this._y=f*y*g+v*_*C,this._z=f*_*C-v*y*g,this._w=f*_*g+v*y*C;break;case"YZX":this._x=v*_*g+f*y*C,this._y=f*y*g+v*_*C,this._z=f*_*C-v*y*g,this._w=f*_*g-v*y*C;break;case"XZY":this._x=v*_*g-f*y*C,this._y=f*y*g-v*_*C,this._z=f*_*C+v*y*g,this._w=f*_*g+v*y*C;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],u=t[1],h=t[5],p=t[9],f=t[2],_=t[6],g=t[10],v=n+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(o-f)*y,this._z=(u-a)*y}else if(n>h&&n>g){const y=2*Math.sqrt(1+n-h-g);this._w=(_-p)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(o+f)/y}else if(h>g){const y=2*Math.sqrt(1+h-n-g);this._w=(o-f)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-n-h);this._w=(u-a)/y,this._x=(o+f)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,u=e._w,h=t._x,p=t._y,f=t._z,_=t._w;return this._x=n*_+u*h+a*f-o*p,this._y=a*_+u*p+o*h-n*f,this._z=o*_+u*f+n*p-a*h,this._w=u*_-n*h-a*p-o*f,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,a=e._y,o=e._z,u=e._w,h=this.dot(e);h<0&&(n=-n,a=-a,o=-o,u=-u,h=-h);let p=1-t;if(h<.9995){const f=Math.acos(h),_=Math.sin(f);p=Math.sin(p*f)/_,t=Math.sin(t*f)/_,this._x=this._x*p+n*t,this._y=this._y*p+a*t,this._z=this._z*p+o*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+n*t,this._y=this._y*p+a*t,this._z=this._z*p+o*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,u=e.y,h=e.z,p=e.w,f=2*(u*a-h*n),_=2*(h*t-o*a),g=2*(o*n-u*t);return this.x=t+p*f+u*g-h*_,this.y=n+p*_+h*f-o*g,this.z=a+p*g+o*_-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,u=t.x,h=t.y,p=t.z;return this.x=a*p-o*h,this.y=o*u-n*p,this.z=n*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new Z,Qc=new ki;class et{constructor(e,t,n,a,o,u,h,p,f){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,h,p,f)}set(e,t,n,a,o,u,h,p,f){const _=this.elements;return _[0]=e,_[1]=a,_[2]=h,_[3]=t,_[4]=o,_[5]=p,_[6]=n,_[7]=u,_[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],h=n[3],p=n[6],f=n[1],_=n[4],g=n[7],v=n[2],y=n[5],C=n[8],D=a[0],b=a[3],m=a[6],U=a[1],L=a[4],N=a[7],B=a[2],A=a[5],V=a[8];return o[0]=u*D+h*U+p*B,o[3]=u*b+h*L+p*A,o[6]=u*m+h*N+p*V,o[1]=f*D+_*U+g*B,o[4]=f*b+_*L+g*A,o[7]=f*m+_*N+g*V,o[2]=v*D+y*U+C*B,o[5]=v*b+y*L+C*A,o[8]=v*m+y*N+C*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],f=e[7],_=e[8];return t*u*_-t*h*f-n*o*_+n*h*p+a*o*f-a*u*p}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],f=e[7],_=e[8],g=_*u-h*f,v=h*p-_*o,y=f*o-u*p,C=t*g+n*v+a*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=g*D,e[1]=(a*f-_*n)*D,e[2]=(h*n-a*u)*D,e[3]=v*D,e[4]=(_*t-a*p)*D,e[5]=(a*o-h*t)*D,e[6]=y*D,e[7]=(n*p-f*t)*D,e[8]=(u*t-n*o)*D,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,u,h){const p=Math.cos(o),f=Math.sin(o);return this.set(n*p,n*f,-n*(p*u+f*h)+u+e,-a*f,a*p,-a*(-f*u+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new et,el=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){const r={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Pt&&(a.r=ri(a.r),a.g=ri(a.g),a.b=ri(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Pt&&(a.r=lr(a.r),a.g=lr(a.g),a.b=lr(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===pi?Gs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[fr]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:el,fromXYZ:tl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:el,fromXYZ:tl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),r}const vt=y0();function ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $i;class S0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$i===void 0&&($i=Ws("canvas")),$i.width=e.width,$i.height=e.height;const a=$i.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=$i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=ri(o[u]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E0=0;class Xo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?o.push(ga(a[u].image)):o.push(ga(a[u]))}else o=ga(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?S0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let b0=0;const va=new Z;class rn extends zi{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=ei,a=ei,o=bn,u=Ni,h=Ln,p=Vn,f=rn.DEFAULT_ANISOTROPY,_=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Br(),this.name="",this.source=new Xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Jl;rn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const p=e.elements,f=p[0],_=p[4],g=p[8],v=p[1],y=p[5],C=p[9],D=p[2],b=p[6],m=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-D)<.01&&Math.abs(C-b)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+D)<.1&&Math.abs(C+b)<.1&&Math.abs(f+y+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,N=(y+1)/2,B=(m+1)/2,A=(_+v)/4,V=(g+D)/4,K=(C+b)/4;return L>N&&L>B?L<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(L),a=A/n,o=V/n):N>B?N<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(N),n=A/a,o=K/a):B<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(B),n=V/o,a=K/o),this.set(n,a,o,t),this}let U=Math.sqrt((b-C)*(b-C)+(g-D)*(g-D)+(v-_)*(v-_));return Math.abs(U)<.001&&(U=1),this.x=(b-C)/U,this.y=(g-D)/U,this.z=(v-_)/U,this.w=Math.acos((f+y+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M0 extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const a={width:e,height:t,depth:n.depth},o=new rn(a);this.textures=[];const u=n.count;for(let h=0;h<u;h++)this.textures[h]=o.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Xo(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends M0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lu extends rn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T0 extends rn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=o.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Rn):Rn.fromBufferAttribute(o,u),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),fs.subVectors(this.max,Tr),ji.subVectors(e.a,Tr),qi.subVectors(e.b,Tr),Yi.subVectors(e.c,Tr),oi.subVectors(qi,ji),ci.subVectors(Yi,qi),Ri.subVectors(ji,Yi);let t=[0,-oi.z,oi.y,0,-ci.z,ci.y,0,-Ri.z,Ri.y,oi.z,0,-oi.x,ci.z,0,-ci.x,Ri.z,0,-Ri.x,-oi.y,oi.x,0,-ci.y,ci.x,0,-Ri.y,Ri.x,0];return!ya(t,ji,qi,Yi,fs)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,ji,qi,Yi,fs))?!1:(ps.crossVectors(oi,ci),t=[ps.x,ps.y,ps.z],ya(t,ji,qi,Yi,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Rn=new Z,ds=new zr,ji=new Z,qi=new Z,Yi=new Z,oi=new Z,ci=new Z,Ri=new Z,Tr=new Z,fs=new Z,ps=new Z,Ci=new Z;function ya(r,e,t,n,a){for(let o=0,u=r.length-3;o<=u;o+=3){Ci.fromArray(r,o);const h=a.x*Math.abs(Ci.x)+a.y*Math.abs(Ci.y)+a.z*Math.abs(Ci.z),p=e.dot(Ci),f=t.dot(Ci),_=n.dot(Ci);if(Math.max(-Math.max(p,f,_),Math.min(p,f,_))>h)return!1}return!0}const w0=new zr,wr=new Z,Sa=new Z;class $o{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(wr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Sa)),this.expandByPoint(wr.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jn=new Z,Ea=new Z,ms=new Z,li=new Z,ba=new Z,_s=new Z,Ma=new Z;class uu{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Ea.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Ea);const o=e.distanceTo(t)*.5,u=-this.direction.dot(ms),h=li.dot(this.direction),p=-li.dot(ms),f=li.lengthSq(),_=Math.abs(1-u*u);let g,v,y,C;if(_>0)if(g=u*p-h,v=u*h-p,C=o*_,g>=0)if(v>=-C)if(v<=C){const D=1/_;g*=D,v*=D,y=g*(g+u*v+2*h)+v*(u*g+v+2*p)+f}else v=o,g=Math.max(0,-(u*v+h)),y=-g*g+v*(v+2*p)+f;else v=-o,g=Math.max(0,-(u*v+h)),y=-g*g+v*(v+2*p)+f;else v<=-C?(g=Math.max(0,-(-u*o+h)),v=g>0?-o:Math.min(Math.max(-o,-p),o),y=-g*g+v*(v+2*p)+f):v<=C?(g=0,v=Math.min(Math.max(-o,-p),o),y=v*(v+2*p)+f):(g=Math.max(0,-(u*o+h)),v=g>0?o:Math.min(Math.max(-o,-p),o),y=-g*g+v*(v+2*p)+f);else v=u>0?-o:o,g=Math.max(0,-(u*v+h)),y=-g*g+v*(v+2*p)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ea).addScaledVector(ms,v),y}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),a=jn.dot(jn)-n*n,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),h=n-u,p=n+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,u,h,p;const f=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,a=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,a=(e.min.x-v.x)*f),_>=0?(o=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(o=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),n>u||o>a||((o>n||isNaN(n))&&(n=o),(u<a||isNaN(a))&&(a=u),g>=0?(h=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),n>p||h>a)||((h>n||n!==n)&&(n=h),(p<a||a!==a)&&(a=p),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,a,o){ba.subVectors(t,e),_s.subVectors(n,e),Ma.crossVectors(ba,_s);let u=this.direction.dot(Ma),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;li.subVectors(this.origin,e);const p=h*this.direction.dot(_s.crossVectors(li,_s));if(p<0)return null;const f=h*this.direction.dot(ba.cross(li));if(f<0||p+f>u)return null;const _=-h*li.dot(Ma);return _<0?null:this.at(_/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,n,a,o,u,h,p,f,_,g,v,y,C,D,b){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,h,p,f,_,g,v,y,C,D,b)}set(e,t,n,a,o,u,h,p,f,_,g,v,y,C,D,b){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=a,m[1]=o,m[5]=u,m[9]=h,m[13]=p,m[2]=f,m[6]=_,m[10]=g,m[14]=v,m[3]=y,m[7]=C,m[11]=D,m[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Ki.setFromMatrixColumn(e,0).length(),o=1/Ki.setFromMatrixColumn(e,1).length(),u=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,u=Math.cos(n),h=Math.sin(n),p=Math.cos(a),f=Math.sin(a),_=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const v=u*_,y=u*g,C=h*_,D=h*g;t[0]=p*_,t[4]=-p*g,t[8]=f,t[1]=y+C*f,t[5]=v-D*f,t[9]=-h*p,t[2]=D-v*f,t[6]=C+y*f,t[10]=u*p}else if(e.order==="YXZ"){const v=p*_,y=p*g,C=f*_,D=f*g;t[0]=v+D*h,t[4]=C*h-y,t[8]=u*f,t[1]=u*g,t[5]=u*_,t[9]=-h,t[2]=y*h-C,t[6]=D+v*h,t[10]=u*p}else if(e.order==="ZXY"){const v=p*_,y=p*g,C=f*_,D=f*g;t[0]=v-D*h,t[4]=-u*g,t[8]=C+y*h,t[1]=y+C*h,t[5]=u*_,t[9]=D-v*h,t[2]=-u*f,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const v=u*_,y=u*g,C=h*_,D=h*g;t[0]=p*_,t[4]=C*f-y,t[8]=v*f+D,t[1]=p*g,t[5]=D*f+v,t[9]=y*f-C,t[2]=-f,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const v=u*p,y=u*f,C=h*p,D=h*f;t[0]=p*_,t[4]=D-v*g,t[8]=C*g+y,t[1]=g,t[5]=u*_,t[9]=-h*_,t[2]=-f*_,t[6]=y*g+C,t[10]=v-D*g}else if(e.order==="XZY"){const v=u*p,y=u*f,C=h*p,D=h*f;t[0]=p*_,t[4]=-g,t[8]=f*_,t[1]=v*g+D,t[5]=u*_,t[9]=y*g-C,t[2]=C*g-y,t[6]=h*_,t[10]=D*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A0,e,R0)}lookAt(e,t,n){const a=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ui.crossVectors(n,pn),ui.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ui.crossVectors(n,pn)),ui.normalize(),xs.crossVectors(pn,ui),a[0]=ui.x,a[4]=xs.x,a[8]=pn.x,a[1]=ui.y,a[5]=xs.y,a[9]=pn.y,a[2]=ui.z,a[6]=xs.z,a[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],h=n[4],p=n[8],f=n[12],_=n[1],g=n[5],v=n[9],y=n[13],C=n[2],D=n[6],b=n[10],m=n[14],U=n[3],L=n[7],N=n[11],B=n[15],A=a[0],V=a[4],K=a[8],P=a[12],S=a[1],G=a[5],q=a[9],J=a[13],ee=a[2],ue=a[6],ce=a[10],be=a[14],se=a[3],Me=a[7],we=a[11],Ge=a[15];return o[0]=u*A+h*S+p*ee+f*se,o[4]=u*V+h*G+p*ue+f*Me,o[8]=u*K+h*q+p*ce+f*we,o[12]=u*P+h*J+p*be+f*Ge,o[1]=_*A+g*S+v*ee+y*se,o[5]=_*V+g*G+v*ue+y*Me,o[9]=_*K+g*q+v*ce+y*we,o[13]=_*P+g*J+v*be+y*Ge,o[2]=C*A+D*S+b*ee+m*se,o[6]=C*V+D*G+b*ue+m*Me,o[10]=C*K+D*q+b*ce+m*we,o[14]=C*P+D*J+b*be+m*Ge,o[3]=U*A+L*S+N*ee+B*se,o[7]=U*V+L*G+N*ue+B*Me,o[11]=U*K+L*q+N*ce+B*we,o[15]=U*P+L*J+N*be+B*Ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],u=e[1],h=e[5],p=e[9],f=e[13],_=e[2],g=e[6],v=e[10],y=e[14],C=e[3],D=e[7],b=e[11],m=e[15];return C*(+o*p*g-a*f*g-o*h*v+n*f*v+a*h*y-n*p*y)+D*(+t*p*y-t*f*v+o*u*v-a*u*y+a*f*_-o*p*_)+b*(+t*f*g-t*h*y-o*u*g+n*u*y+o*h*_-n*f*_)+m*(-a*h*_-t*p*g+t*h*v+a*u*g-n*u*v+n*p*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],h=e[5],p=e[6],f=e[7],_=e[8],g=e[9],v=e[10],y=e[11],C=e[12],D=e[13],b=e[14],m=e[15],U=g*b*f-D*v*f+D*p*y-h*b*y-g*p*m+h*v*m,L=C*v*f-_*b*f-C*p*y+u*b*y+_*p*m-u*v*m,N=_*D*f-C*g*f+C*h*y-u*D*y-_*h*m+u*g*m,B=C*g*p-_*D*p-C*h*v+u*D*v+_*h*b-u*g*b,A=t*U+n*L+a*N+o*B;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/A;return e[0]=U*V,e[1]=(D*v*o-g*b*o-D*a*y+n*b*y+g*a*m-n*v*m)*V,e[2]=(h*b*o-D*p*o+D*a*f-n*b*f-h*a*m+n*p*m)*V,e[3]=(g*p*o-h*v*o-g*a*f+n*v*f+h*a*y-n*p*y)*V,e[4]=L*V,e[5]=(_*b*o-C*v*o+C*a*y-t*b*y-_*a*m+t*v*m)*V,e[6]=(C*p*o-u*b*o-C*a*f+t*b*f+u*a*m-t*p*m)*V,e[7]=(u*v*o-_*p*o+_*a*f-t*v*f-u*a*y+t*p*y)*V,e[8]=N*V,e[9]=(C*g*o-_*D*o-C*n*y+t*D*y+_*n*m-t*g*m)*V,e[10]=(u*D*o-C*h*o+C*n*f-t*D*f-u*n*m+t*h*m)*V,e[11]=(_*h*o-u*g*o-_*n*f+t*g*f+u*n*y-t*h*y)*V,e[12]=B*V,e[13]=(_*D*a-C*g*a+C*n*v-t*D*v-_*n*b+t*g*b)*V,e[14]=(C*h*a-u*D*a-C*n*p+t*D*p+u*n*b-t*h*b)*V,e[15]=(u*g*a-_*h*a+_*n*p-t*g*p-u*n*v+t*h*v)*V,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,u=e.x,h=e.y,p=e.z,f=o*u,_=o*h;return this.set(f*u+n,f*h-a*p,f*p+a*h,0,f*h+a*p,_*h+n,_*p-a*u,0,f*p-a*h,_*p+a*u,o*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,u){return this.set(1,n,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,u=t._y,h=t._z,p=t._w,f=o+o,_=u+u,g=h+h,v=o*f,y=o*_,C=o*g,D=u*_,b=u*g,m=h*g,U=p*f,L=p*_,N=p*g,B=n.x,A=n.y,V=n.z;return a[0]=(1-(D+m))*B,a[1]=(y+N)*B,a[2]=(C-L)*B,a[3]=0,a[4]=(y-N)*A,a[5]=(1-(v+m))*A,a[6]=(b+U)*A,a[7]=0,a[8]=(C+L)*V,a[9]=(b-U)*V,a[10]=(1-(v+D))*V,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=Ki.set(a[0],a[1],a[2]).length();const u=Ki.set(a[4],a[5],a[6]).length(),h=Ki.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Cn.copy(this);const f=1/o,_=1/u,g=1/h;return Cn.elements[0]*=f,Cn.elements[1]*=f,Cn.elements[2]*=f,Cn.elements[4]*=_,Cn.elements[5]*=_,Cn.elements[6]*=_,Cn.elements[8]*=g,Cn.elements[9]*=g,Cn.elements[10]*=g,t.setFromRotationMatrix(Cn),n.x=o,n.y=u,n.z=h,this}makePerspective(e,t,n,a,o,u,h=Bn,p=!1){const f=this.elements,_=2*o/(t-e),g=2*o/(n-a),v=(t+e)/(t-e),y=(n+a)/(n-a);let C,D;if(p)C=o/(u-o),D=u*o/(u-o);else if(h===Bn)C=-(u+o)/(u-o),D=-2*u*o/(u-o);else if(h===Hs)C=-u/(u-o),D=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=_,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=g,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=C,f[14]=D,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,a,o,u,h=Bn,p=!1){const f=this.elements,_=2/(t-e),g=2/(n-a),v=-(t+e)/(t-e),y=-(n+a)/(n-a);let C,D;if(p)C=1/(u-o),D=u/(u-o);else if(h===Bn)C=-2/(u-o),D=-(u+o)/(u-o);else if(h===Hs)C=-1/(u-o),D=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=_,f[4]=0,f[8]=0,f[12]=v,f[1]=0,f[5]=g,f[9]=0,f[13]=y,f[2]=0,f[6]=0,f[10]=C,f[14]=D,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new Z,Cn=new Bt,A0=new Z(0,0,0),R0=new Z(1,1,1),ui=new Z,xs=new Z,pn=new Z,nl=new Bt,il=new ki;class Gn{constructor(e=0,t=0,n=0,a=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],u=a[4],h=a[8],p=a[1],f=a[5],_=a[9],g=a[2],v=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(ht(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-ht(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(h,o)):(this._x=Math.atan2(-_,y),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return il.setFromEuler(this),this.setFromQuaternion(il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C0=0;const rl=new Z,Zi=new ki,qn=new Bt,gs=new Z,Ar=new Z,P0=new Z,D0=new ki,sl=new Z(1,0,0),al=new Z(0,1,0),ol=new Z(0,0,1),cl={type:"added"},L0={type:"removed"},Ji={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Zt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new Z,t=new Gn,n=new ki,a=new Z(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new et}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(sl,e)}rotateY(e){return this.rotateOnAxis(al,e)}rotateZ(e){return this.rotateOnAxis(ol,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sl,e)}translateY(e){return this.translateOnAxis(al,e)}translateZ(e){return this.translateOnAxis(ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ar,gs,this.up):qn.lookAt(gs,Ar,this.up),this.quaternion.setFromRotationMatrix(qn),a&&(qn.extractRotation(a.matrixWorld),Zi.setFromRotationMatrix(qn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L0),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,P0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let f=0,_=p.length;f<_;f++){const g=p[f];o(e.shapes,g)}else o(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,f=this.material.length;p<f;p++)h.push(o(e.materials,this.material[p]));a.material=h}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];a.animations.push(o(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),f=u(e.textures),_=u(e.images),g=u(e.shapes),v=u(e.skeletons),y=u(e.animations),C=u(e.nodes);h.length>0&&(n.geometries=h),p.length>0&&(n.materials=p),f.length>0&&(n.textures=f),_.length>0&&(n.images=_),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),y.length>0&&(n.animations=y),C.length>0&&(n.nodes=C)}return n.object=a,n;function u(h){const p=[];for(const f in h){const _=h[f];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}Zt.DEFAULT_UP=new Z(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new Z,Yn=new Z,wa=new Z,Kn=new Z,Qi=new Z,er=new Z,ll=new Z,Aa=new Z,Ra=new Z,Ca=new Z,Pa=new Nt,Da=new Nt,La=new Nt;class Dn{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Pn.subVectors(e,t),a.cross(Pn);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){Pn.subVectors(a,t),Yn.subVectors(n,t),wa.subVectors(e,t);const u=Pn.dot(Pn),h=Pn.dot(Yn),p=Pn.dot(wa),f=Yn.dot(Yn),_=Yn.dot(wa),g=u*f-h*h;if(g===0)return o.set(0,0,0),null;const v=1/g,y=(f*p-h*_)*v,C=(u*_-h*p)*v;return o.set(1-y-C,C,y)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,a,o,u,h,p){return this.getBarycoord(e,t,n,a,Kn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,Kn.x),p.addScaledVector(u,Kn.y),p.addScaledVector(h,Kn.z),p)}static getInterpolatedAttribute(e,t,n,a,o,u){return Pa.setScalar(0),Da.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,n),La.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Pa,o.x),u.addScaledVector(Da,o.y),u.addScaledVector(La,o.z),u}static isFrontFacing(e,t,n,a){return Pn.subVectors(n,t),Yn.subVectors(e,t),Pn.cross(Yn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Pn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let u,h;Qi.subVectors(a,n),er.subVectors(o,n),Aa.subVectors(e,n);const p=Qi.dot(Aa),f=er.dot(Aa);if(p<=0&&f<=0)return t.copy(n);Ra.subVectors(e,a);const _=Qi.dot(Ra),g=er.dot(Ra);if(_>=0&&g<=_)return t.copy(a);const v=p*g-_*f;if(v<=0&&p>=0&&_<=0)return u=p/(p-_),t.copy(n).addScaledVector(Qi,u);Ca.subVectors(e,o);const y=Qi.dot(Ca),C=er.dot(Ca);if(C>=0&&y<=C)return t.copy(o);const D=y*f-p*C;if(D<=0&&f>=0&&C<=0)return h=f/(f-C),t.copy(n).addScaledVector(er,h);const b=_*C-y*g;if(b<=0&&g-_>=0&&y-C>=0)return ll.subVectors(o,a),h=(g-_)/(g-_+(y-C)),t.copy(a).addScaledVector(ll,h);const m=1/(b+D+v);return u=D*m,h=v*m,t.copy(n).addScaledVector(Qi,u).addScaledVector(er,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Fa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=vt.workingColorSpace){if(e=g0(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=Fa(u,o,e+1/3),this.g=Fa(u,o,e),this.b=Fa(u,o,e-1/3)}return vt.colorSpaceToWorking(this,a),this}setStyle(e,t=ln){function n(o){o!==void 0&&parseFloat(o)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return vt.workingToColorSpace(nn.copy(this),e),Math.round(ht(nn.r*255,0,255))*65536+Math.round(ht(nn.g*255,0,255))*256+Math.round(ht(nn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(nn.copy(this),t);const n=nn.r,a=nn.g,o=nn.b,u=Math.max(n,a,o),h=Math.min(n,a,o);let p,f;const _=(h+u)/2;if(h===u)p=0,f=0;else{const g=u-h;switch(f=_<=.5?g/(u+h):g/(2-u-h),u){case n:p=(a-o)/g+(a<o?6:0);break;case a:p=(o-n)/g+2;break;case o:p=(n-a)/g+4;break}p/=6}return e.h=p,e.s=f,e.l=_,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=ln){vt.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,a=nn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(vs);const n=ma(hi.h,vs.h,t),a=ma(hi.s,vs.s,t),o=ma(hi.l,vs.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new mt;mt.NAMES=du;let F0=0;class Vr extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=cr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const u=[];for(const h in o){const p=o[h];delete p.metadata,u.push(p)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fu extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new Z,ys=new Qe;let I0=0;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),a=hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),a=hn(a,this.array),o=hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}}class pu extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mu extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let U0=0;const yn=new Bt,Ia=new Zt,tr=new Z,mn=new zr,Rr=new zr,qt=new Z;class wn extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?mu:pu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new et().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new sn(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];mn.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const h=t[o];Rr.setFromBufferAttribute(h),this.morphTargetsRelative?(qt.addVectors(mn.min,Rr.min),mn.expandByPoint(qt),qt.addVectors(mn.max,Rr.max),mn.expandByPoint(qt)):(mn.expandByPoint(Rr.min),mn.expandByPoint(Rr.max))}mn.getCenter(n);let a=0;for(let o=0,u=e.count;o<u;o++)qt.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(qt));if(t)for(let o=0,u=t.length;o<u;o++){const h=t[o],p=this.morphTargetsRelative;for(let f=0,_=h.count;f<_;f++)qt.fromBufferAttribute(h,f),p&&(tr.fromBufferAttribute(e,f),qt.add(tr)),a=Math.max(a,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let K=0;K<n.count;K++)h[K]=new Z,p[K]=new Z;const f=new Z,_=new Z,g=new Z,v=new Qe,y=new Qe,C=new Qe,D=new Z,b=new Z;function m(K,P,S){f.fromBufferAttribute(n,K),_.fromBufferAttribute(n,P),g.fromBufferAttribute(n,S),v.fromBufferAttribute(o,K),y.fromBufferAttribute(o,P),C.fromBufferAttribute(o,S),_.sub(f),g.sub(f),y.sub(v),C.sub(v);const G=1/(y.x*C.y-C.x*y.y);isFinite(G)&&(D.copy(_).multiplyScalar(C.y).addScaledVector(g,-y.y).multiplyScalar(G),b.copy(g).multiplyScalar(y.x).addScaledVector(_,-C.x).multiplyScalar(G),h[K].add(D),h[P].add(D),h[S].add(D),p[K].add(b),p[P].add(b),p[S].add(b))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let K=0,P=U.length;K<P;++K){const S=U[K],G=S.start,q=S.count;for(let J=G,ee=G+q;J<ee;J+=3)m(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new Z,N=new Z,B=new Z,A=new Z;function V(K){B.fromBufferAttribute(a,K),A.copy(B);const P=h[K];L.copy(P),L.sub(B.multiplyScalar(B.dot(P))).normalize(),N.crossVectors(A,P);const G=N.dot(p[K])<0?-1:1;u.setXYZW(K,L.x,L.y,L.z,G)}for(let K=0,P=U.length;K<P;++K){const S=U[K],G=S.start,q=S.count;for(let J=G,ee=G+q;J<ee;J+=3)V(e.getX(J+0)),V(e.getX(J+1)),V(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,y=n.count;v<y;v++)n.setXYZ(v,0,0,0);const a=new Z,o=new Z,u=new Z,h=new Z,p=new Z,f=new Z,_=new Z,g=new Z;if(e)for(let v=0,y=e.count;v<y;v+=3){const C=e.getX(v+0),D=e.getX(v+1),b=e.getX(v+2);a.fromBufferAttribute(t,C),o.fromBufferAttribute(t,D),u.fromBufferAttribute(t,b),_.subVectors(u,o),g.subVectors(a,o),_.cross(g),h.fromBufferAttribute(n,C),p.fromBufferAttribute(n,D),f.fromBufferAttribute(n,b),h.add(_),p.add(_),f.add(_),n.setXYZ(C,h.x,h.y,h.z),n.setXYZ(D,p.x,p.y,p.z),n.setXYZ(b,f.x,f.y,f.z)}else for(let v=0,y=t.count;v<y;v+=3)a.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),_.subVectors(u,o),g.subVectors(a,o),_.cross(g),n.setXYZ(v+0,_.x,_.y,_.z),n.setXYZ(v+1,_.x,_.y,_.z),n.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(h,p){const f=h.array,_=h.itemSize,g=h.normalized,v=new f.constructor(p.length*_);let y=0,C=0;for(let D=0,b=p.length;D<b;D++){h.isInterleavedBufferAttribute?y=p[D]*h.data.stride+h.offset:y=p[D]*_;for(let m=0;m<_;m++)v[C++]=f[y++]}return new Mn(v,_,g)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,a=this.attributes;for(const h in a){const p=a[h],f=e(p,n);t.setAttribute(h,f)}const o=this.morphAttributes;for(const h in o){const p=[],f=o[h];for(let _=0,g=f.length;_<g;_++){const v=f[_],y=e(v,n);p.push(y)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const f=u[h];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const f in p)p[f]!==void 0&&(e[f]=p[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const f=n[p];e.data.attributes[p]=f.toJSON(e.data)}const a={};let o=!1;for(const p in this.morphAttributes){const f=this.morphAttributes[p],_=[];for(let g=0,v=f.length;g<v;g++){const y=f[g];_.push(y.toJSON(e.data))}_.length>0&&(a[p]=_,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const f in a){const _=a[f];this.setAttribute(f,_.clone(t))}const o=e.morphAttributes;for(const f in o){const _=[],g=o[f];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(t));this.morphAttributes[f]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,_=u.length;f<_;f++){const g=u[f];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new Bt,Pi=new uu,Ss=new $o,hl=new Z,Es=new Z,bs=new Z,Ms=new Z,Ua=new Z,Ts=new Z,dl=new Z,ws=new Z;class Hn extends Zt{constructor(e=new wn,t=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const h=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(o&&h){Ts.set(0,0,0);for(let p=0,f=o.length;p<f;p++){const _=h[p],g=o[p];_!==0&&(Ua.fromBufferAttribute(g,e),u?Ts.addScaledVector(Ua,_):Ts.addScaledVector(Ua.sub(t),_))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(o),Pi.copy(e.ray).recast(e.near),!(Ss.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Ss,hl)===null||Pi.origin.distanceToSquared(hl)>(e.far-e.near)**2))&&(ul.copy(o).invert(),Pi.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let a;const o=this.geometry,u=this.material,h=o.index,p=o.attributes.position,f=o.attributes.uv,_=o.attributes.uv1,g=o.attributes.normal,v=o.groups,y=o.drawRange;if(h!==null)if(Array.isArray(u))for(let C=0,D=v.length;C<D;C++){const b=v[C],m=u[b.materialIndex],U=Math.max(b.start,y.start),L=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let N=U,B=L;N<B;N+=3){const A=h.getX(N),V=h.getX(N+1),K=h.getX(N+2);a=As(this,m,e,n,f,_,g,A,V,K),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{const C=Math.max(0,y.start),D=Math.min(h.count,y.start+y.count);for(let b=C,m=D;b<m;b+=3){const U=h.getX(b),L=h.getX(b+1),N=h.getX(b+2);a=As(this,u,e,n,f,_,g,U,L,N),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let C=0,D=v.length;C<D;C++){const b=v[C],m=u[b.materialIndex],U=Math.max(b.start,y.start),L=Math.min(p.count,Math.min(b.start+b.count,y.start+y.count));for(let N=U,B=L;N<B;N+=3){const A=N,V=N+1,K=N+2;a=As(this,m,e,n,f,_,g,A,V,K),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{const C=Math.max(0,y.start),D=Math.min(p.count,y.start+y.count);for(let b=C,m=D;b<m;b+=3){const U=b,L=b+1,N=b+2;a=As(this,u,e,n,f,_,g,U,L,N),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}}}function N0(r,e,t,n,a,o,u,h){let p;if(e.side===fn?p=n.intersectTriangle(u,o,a,!0,h):p=n.intersectTriangle(a,o,u,e.side===gi,h),p===null)return null;ws.copy(h),ws.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(ws);return f<t.near||f>t.far?null:{distance:f,point:ws.clone(),object:r}}function As(r,e,t,n,a,o,u,h,p,f){r.getVertexPosition(h,Es),r.getVertexPosition(p,bs),r.getVertexPosition(f,Ms);const _=N0(r,e,t,n,Es,bs,Ms,dl);if(_){const g=new Z;Dn.getBarycoord(dl,Es,bs,Ms,g),a&&(_.uv=Dn.getInterpolatedAttribute(a,h,p,f,g,new Qe)),o&&(_.uv1=Dn.getInterpolatedAttribute(o,h,p,f,g,new Qe)),u&&(_.normal=Dn.getInterpolatedAttribute(u,h,p,f,g,new Z),_.normal.dot(n.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:p,c:f,normal:new Z,materialIndex:0};Dn.getNormal(Es,bs,Ms,v.normal),_.face=v,_.barycoord=g}return _}class _r extends wn{constructor(e=1,t=1,n=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:u};const h=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const p=[],f=[],_=[],g=[];let v=0,y=0;C("z","y","x",-1,-1,n,t,e,u,o,0),C("z","y","x",1,-1,n,t,-e,u,o,1),C("x","z","y",1,1,e,n,t,a,u,2),C("x","z","y",1,-1,e,n,-t,a,u,3),C("x","y","z",1,-1,e,t,n,a,o,4),C("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(p),this.setAttribute("position",new sn(f,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(g,2));function C(D,b,m,U,L,N,B,A,V,K,P){const S=N/V,G=B/K,q=N/2,J=B/2,ee=A/2,ue=V+1,ce=K+1;let be=0,se=0;const Me=new Z;for(let we=0;we<ce;we++){const Ge=we*G-J;for(let at=0;at<ue;at++){const _t=at*S-q;Me[D]=_t*U,Me[b]=Ge*L,Me[m]=ee,f.push(Me.x,Me.y,Me.z),Me[D]=0,Me[b]=0,Me[m]=A>0?1:-1,_.push(Me.x,Me.y,Me.z),g.push(at/V),g.push(1-we/K),be+=1}}for(let we=0;we<K;we++)for(let Ge=0;Ge<V;Ge++){const at=v+Ge+ue*we,_t=v+Ge+ue*(we+1),Ze=v+(Ge+1)+ue*(we+1),st=v+(Ge+1)+ue*we;p.push(at,_t,st),p.push(_t,Ze,st),se+=6}h.addGroup(y,se,P),y+=se,v+=be}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const a=r[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function cn(r){const e={};for(let t=0;t<r.length;t++){const n=pr(r[t]);for(const a in n)e[a]=n[a]}return e}function O0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _u(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const k0={clone:pr,merge:cn};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xu extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new Z,fl=new Qe,pl=new Qe;class Sn extends xu{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,fl,pl),t.subVectors(pl,fl)}setViewOffset(e,t,n,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,f=u.fullHeight;o+=u.offsetX*a/p,t-=u.offsetY*n/f,a*=u.width/p,n*=u.height/f}const h=this.filmOffset;h!==0&&(o+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ir=1;class V0 extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Sn(nr,ir,e,t);a.layers=this.layers,this.add(a);const o=new Sn(nr,ir,e,t);o.layers=this.layers,this.add(o);const u=new Sn(nr,ir,e,t);u.layers=this.layers,this.add(u);const h=new Sn(nr,ir,e,t);h.layers=this.layers,this.add(h);const p=new Sn(nr,ir,e,t);p.layers=this.layers,this.add(p);const f=new Sn(nr,ir,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,u,h,p]=t;for(const f of t)this.remove(f);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,h,p,f,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const D=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,u),e.setRenderTarget(n,2,a),e.render(t,h),e.setRenderTarget(n,3,a),e.render(t,p),e.setRenderTarget(n,4,a),e.render(t,f),n.texture.generateMipmaps=D,e.setRenderTarget(n,5,a),e.render(t,_),e.setRenderTarget(g,v,y),e.xr.enabled=C,n.texture.needsPMREMUpdate=!0}}class gu extends rn{constructor(e=[],t=hr,n,a,o,u,h,p,f,_){super(e,t,n,a,o,u,h,p,f,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class G0 extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new gu(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new _r(5,5,5),o=new si({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:ii});o.uniforms.tEquirect.value=t;const u=new Hn(a,o),h=t.minFilter;return t.minFilter===Ni&&(t.minFilter=bn),new V0(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,a);e.setRenderTarget(o)}}class Pr extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H0={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,u=null;const h=this._targetRay,p=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const D of e.hand.values()){const b=t.getJointPose(D,n),m=this._getHandJoint(f,D);b!==null&&(m.matrix.fromArray(b.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=b.radius),m.visible=b!==null}const _=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,C=.005;f.inputState.pinching&&v>y+C?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=y-C&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return h!==null&&(h.visible=a!==null),p!==null&&(p.visible=o!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=t,this.far=n}clone(){return new jo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class W0 extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class X0 extends rn{constructor(e=null,t=1,n=1,a,o,u,h,p,f=xn,_=xn,g,v){super(null,u,h,p,f,_,a,o,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oa=new Z,$0=new Z,j0=new et;class fi{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Oa.subVectors(n,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||j0.getNormalMatrix(e),a=this.coplanarPoint(Oa).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new $o,q0=new Qe(.5,.5),Rs=new Z;class qo{constructor(e=new fi,t=new fi,n=new fi,a=new fi,o=new fi,u=new fi){this.planes=[e,t,n,a,o,u]}set(e,t,n,a,o,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(a),h[4].copy(o),h[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const a=this.planes,o=e.elements,u=o[0],h=o[1],p=o[2],f=o[3],_=o[4],g=o[5],v=o[6],y=o[7],C=o[8],D=o[9],b=o[10],m=o[11],U=o[12],L=o[13],N=o[14],B=o[15];if(a[0].setComponents(f-u,y-_,m-C,B-U).normalize(),a[1].setComponents(f+u,y+_,m+C,B+U).normalize(),a[2].setComponents(f+h,y+g,m+D,B+L).normalize(),a[3].setComponents(f-h,y-g,m-D,B-L).normalize(),n)a[4].setComponents(p,v,b,N).normalize(),a[5].setComponents(f-p,y-v,m-b,B-N).normalize();else if(a[4].setComponents(f-p,y-v,m-b,B-N).normalize(),t===Bn)a[5].setComponents(f+p,y+v,m+b,B+N).normalize();else if(t===Hs)a[5].setComponents(p,v,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=q0.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Rs.x=a.normal.x>0?e.max.x:e.min.x,Rs.y=a.normal.y>0?e.max.y:e.min.y,Rs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y0 extends rn{constructor(e,t,n,a,o,u,h,p,f){super(e,t,n,a,o,u,h,p,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vu extends rn{constructor(e,t,n=Oi,a,o,u,h=xn,p=xn,f,_=Nr,g=1){if(_!==Nr&&_!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,a,o,u,h,p,_,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yu extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yo extends wn{constructor(e=1,t=1,n=4,a=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:a,heightSegments:o},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),a=Math.max(3,Math.floor(a)),o=Math.max(1,Math.floor(o));const u=[],h=[],p=[],f=[],_=t/2,g=Math.PI/2*e,v=t,y=2*g+v,C=n*2+o,D=a+1,b=new Z,m=new Z;for(let U=0;U<=C;U++){let L=0,N=0,B=0,A=0;if(U<=n){const P=U/n,S=P*Math.PI/2;N=-_-e*Math.cos(S),B=e*Math.sin(S),A=-e*Math.cos(S),L=P*g}else if(U<=n+o){const P=(U-n)/o;N=-_+P*t,B=e,A=0,L=g+P*v}else{const P=(U-n-o)/n,S=P*Math.PI/2;N=_+e*Math.sin(S),B=e*Math.cos(S),A=e*Math.sin(S),L=g+v+P*g}const V=Math.max(0,Math.min(1,L/y));let K=0;U===0?K=.5/a:U===C&&(K=-.5/a);for(let P=0;P<=a;P++){const S=P/a,G=S*Math.PI*2,q=Math.sin(G),J=Math.cos(G);m.x=-B*J,m.y=N,m.z=B*q,h.push(m.x,m.y,m.z),b.set(-B*J,A,B*q),b.normalize(),p.push(b.x,b.y,b.z),f.push(S+K,V)}if(U>0){const P=(U-1)*D;for(let S=0;S<a;S++){const G=P+S,q=P+S+1,J=U*D+S,ee=U*D+S+1;u.push(G,q,J),u.push(q,ee,J)}}}this.setIndex(u),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ko extends wn{constructor(e=1,t=1,n=1,a=32,o=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:o,openEnded:u,thetaStart:h,thetaLength:p};const f=this;a=Math.floor(a),o=Math.floor(o);const _=[],g=[],v=[],y=[];let C=0;const D=[],b=n/2;let m=0;U(),u===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(y,2));function U(){const N=new Z,B=new Z;let A=0;const V=(t-e)/n;for(let K=0;K<=o;K++){const P=[],S=K/o,G=S*(t-e)+e;for(let q=0;q<=a;q++){const J=q/a,ee=J*p+h,ue=Math.sin(ee),ce=Math.cos(ee);B.x=G*ue,B.y=-S*n+b,B.z=G*ce,g.push(B.x,B.y,B.z),N.set(ue,V,ce).normalize(),v.push(N.x,N.y,N.z),y.push(J,1-S),P.push(C++)}D.push(P)}for(let K=0;K<a;K++)for(let P=0;P<o;P++){const S=D[P][K],G=D[P+1][K],q=D[P+1][K+1],J=D[P][K+1];(e>0||P!==0)&&(_.push(S,G,J),A+=3),(t>0||P!==o-1)&&(_.push(G,q,J),A+=3)}f.addGroup(m,A,0),m+=A}function L(N){const B=C,A=new Qe,V=new Z;let K=0;const P=N===!0?e:t,S=N===!0?1:-1;for(let q=1;q<=a;q++)g.push(0,b*S,0),v.push(0,S,0),y.push(.5,.5),C++;const G=C;for(let q=0;q<=a;q++){const ee=q/a*p+h,ue=Math.cos(ee),ce=Math.sin(ee);V.x=P*ce,V.y=b*S,V.z=P*ue,g.push(V.x,V.y,V.z),v.push(0,S,0),A.x=ue*.5+.5,A.y=ce*.5*S+.5,y.push(A.x,A.y),C++}for(let q=0;q<a;q++){const J=B+q,ee=G+q;N===!0?_.push(ee,ee+1,J):_.push(ee+1,ee,J),K+=3}f.addGroup(m,K,N===!0?1:2),m+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gr extends wn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,u=t/2,h=Math.floor(n),p=Math.floor(a),f=h+1,_=p+1,g=e/h,v=t/p,y=[],C=[],D=[],b=[];for(let m=0;m<_;m++){const U=m*v-u;for(let L=0;L<f;L++){const N=L*g-o;C.push(N,-U,0),D.push(0,0,1),b.push(L/h),b.push(1-m/p)}}for(let m=0;m<p;m++)for(let U=0;U<h;U++){const L=U+f*m,N=U+f*(m+1),B=U+1+f*(m+1),A=U+1+f*m;y.push(L,N,A),y.push(N,B,A)}this.setIndex(y),this.setAttribute("position",new sn(C,3)),this.setAttribute("normal",new sn(D,3)),this.setAttribute("uv",new sn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zo extends wn{constructor(e=1,t=32,n=16,a=0,o=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:o,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const p=Math.min(u+h,Math.PI);let f=0;const _=[],g=new Z,v=new Z,y=[],C=[],D=[],b=[];for(let m=0;m<=n;m++){const U=[],L=m/n;let N=0;m===0&&u===0?N=.5/t:m===n&&p===Math.PI&&(N=-.5/t);for(let B=0;B<=t;B++){const A=B/t;g.x=-e*Math.cos(a+A*o)*Math.sin(u+L*h),g.y=e*Math.cos(u+L*h),g.z=e*Math.sin(a+A*o)*Math.sin(u+L*h),C.push(g.x,g.y,g.z),v.copy(g).normalize(),D.push(v.x,v.y,v.z),b.push(A+N,1-L),U.push(f++)}_.push(U)}for(let m=0;m<n;m++)for(let U=0;U<t;U++){const L=_[m][U+1],N=_[m][U],B=_[m+1][U],A=_[m+1][U+1];(m!==0||u>0)&&y.push(L,N,A),(m!==n-1||p<Math.PI)&&y.push(N,B,A)}this.setIndex(y),this.setAttribute("position",new sn(C,3)),this.setAttribute("normal",new sn(D,3)),this.setAttribute("uv",new sn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Su extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K0 extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z0 extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Eu extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class J0 extends Eu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ka=new Bt,ml=new Z,_l=new Z;class Q0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(ml),_l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_l),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bu extends xu{constructor(e=-1,t=1,n=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,u=n+e,h=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,u=o+f*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(o,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class e_ extends Q0{constructor(){super(new bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t_ extends Eu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new e_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n_ extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class i_ extends zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function gl(r,e,t,n){const a=r_(n);switch(t){case iu:return r*e;case su:return r*e/a.components*a.byteLength;case Vo:return r*e/a.components*a.byteLength;case Go:return r*e*2/a.components*a.byteLength;case Ho:return r*e*2/a.components*a.byteLength;case ru:return r*e*3/a.components*a.byteLength;case Ln:return r*e*4/a.components*a.byteLength;case Wo:return r*e*4/a.components*a.byteLength;case Ls:case Fs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Is:case Us:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case oo:case lo:return Math.max(r,16)*Math.max(e,8)/4;case ao:case co:return Math.max(r,8)*Math.max(e,8)/2;case uo:case ho:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case To:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Co:case Po:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Do:case Lo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Fo:case Io:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r_(r){switch(r){case Vn:case Ql:return{byteLength:1,components:1};case Ir:case eu:case mr:return{byteLength:2,components:1};case Bo:case zo:return{byteLength:2,components:4};case Oi:case ko:case ti:return{byteLength:4,components:1};case tu:case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mu(){let r=null,e=!1,t=null,n=null;function a(o,u){t(o,u),n=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function s_(r){const e=new WeakMap;function t(h,p){const f=h.array,_=h.usage,g=f.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,f,_),h.onUploadCallback();let y;if(f instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)y=r.HALF_FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=r.SHORT;else if(f instanceof Uint32Array)y=r.UNSIGNED_INT;else if(f instanceof Int32Array)y=r.INT;else if(f instanceof Int8Array)y=r.BYTE;else if(f instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:g}}function n(h,p,f){const _=p.array,g=p.updateRanges;if(r.bindBuffer(f,h),g.length===0)r.bufferSubData(f,0,_);else{g.sort((y,C)=>y.start-C.start);let v=0;for(let y=1;y<g.length;y++){const C=g[v],D=g[y];D.start<=C.start+C.count+1?C.count=Math.max(C.count,D.start+D.count-C.start):(++v,g[v]=D)}g.length=v+1;for(let y=0,C=g.length;y<C;y++){const D=g[y];r.bufferSubData(f,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(r.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const f=e.get(h);if(f===void 0)e.set(h,t(h,p));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,h,p),f.version=h.version}}return{get:a,remove:o,update:u}}var a_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o_=`#ifdef USE_ALPHAHASH
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
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
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
#endif`,f_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p_=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,m_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,__=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,C_=`#define PI 3.141592653589793
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
} // validated`,P_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D_=`vec3 transformedNormal = objectNormal;
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
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",O_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k_=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j_=`#ifdef USE_GRADIENTMAP
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
}`,q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z_=`uniform bool receiveShadow;
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
#endif`,J_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ix=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,rx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sx=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mx=`#if defined( USE_POINTS_UV )
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
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ix=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wx=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
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
}`,dg=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,yg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,bg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,Tg=`#define NORMAL
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
}`,wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ag=`#define PHONG
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
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Dg=`#define TOON
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
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Fg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Og=`uniform float rotation;
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
}`,kg=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:a_,alphahash_pars_fragment:o_,alphamap_fragment:c_,alphamap_pars_fragment:l_,alphatest_fragment:u_,alphatest_pars_fragment:h_,aomap_fragment:d_,aomap_pars_fragment:f_,batching_pars_vertex:p_,batching_vertex:m_,begin_vertex:__,beginnormal_vertex:x_,bsdfs:g_,iridescence_fragment:v_,bumpmap_pars_fragment:y_,clipping_planes_fragment:S_,clipping_planes_pars_fragment:E_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:M_,color_fragment:T_,color_pars_fragment:w_,color_pars_vertex:A_,color_vertex:R_,common:C_,cube_uv_reflection_fragment:P_,defaultnormal_vertex:D_,displacementmap_pars_vertex:L_,displacementmap_vertex:F_,emissivemap_fragment:I_,emissivemap_pars_fragment:U_,colorspace_fragment:N_,colorspace_pars_fragment:O_,envmap_fragment:k_,envmap_common_pars_fragment:B_,envmap_pars_fragment:z_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:J_,envmap_vertex:G_,fog_vertex:H_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:$_,gradientmap_pars_fragment:j_,lightmap_pars_fragment:q_,lights_lambert_fragment:Y_,lights_lambert_pars_fragment:K_,lights_pars_begin:Z_,lights_toon_fragment:Q_,lights_toon_pars_fragment:ex,lights_phong_fragment:tx,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:rx,lights_fragment_begin:sx,lights_fragment_maps:ax,lights_fragment_end:ox,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:lx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:hx,map_fragment:dx,map_pars_fragment:fx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:xx,morphinstance_vertex:gx,morphcolor_vertex:vx,morphnormal_vertex:yx,morphtarget_pars_vertex:Sx,morphtarget_vertex:Ex,normal_fragment_begin:bx,normal_fragment_maps:Mx,normal_pars_fragment:Tx,normal_pars_vertex:wx,normal_vertex:Ax,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Px,clearcoat_pars_fragment:Dx,iridescence_pars_fragment:Lx,opaque_fragment:Fx,packing:Ix,premultiplied_alpha_fragment:Ux,project_vertex:Nx,dithering_fragment:Ox,dithering_pars_fragment:kx,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:zx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Hx,shadowmask_pars_fragment:Wx,skinbase_vertex:Xx,skinning_pars_vertex:$x,skinning_vertex:jx,skinnormal_vertex:qx,specularmap_fragment:Yx,specularmap_pars_fragment:Kx,tonemapping_fragment:Zx,tonemapping_pars_fragment:Jx,transmission_fragment:Qx,transmission_pars_fragment:eg,uv_pars_fragment:tg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:rg,background_vert:sg,background_frag:ag,backgroundCube_vert:og,backgroundCube_frag:cg,cube_vert:lg,cube_frag:ug,depth_vert:hg,depth_frag:dg,distanceRGBA_vert:fg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:_g,linedashed_vert:xg,linedashed_frag:gg,meshbasic_vert:vg,meshbasic_frag:yg,meshlambert_vert:Sg,meshlambert_frag:Eg,meshmatcap_vert:bg,meshmatcap_frag:Mg,meshnormal_vert:Tg,meshnormal_frag:wg,meshphong_vert:Ag,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Pg,meshtoon_vert:Dg,meshtoon_frag:Lg,points_vert:Fg,points_frag:Ig,shadow_vert:Ug,shadow_frag:Ng,sprite_vert:Og,sprite_frag:kg},Ce={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},kn={basic:{uniforms:cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:cn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:cn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new mt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:cn([Ce.points,Ce.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:cn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:cn([Ce.common,Ce.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:cn([Ce.sprite,Ce.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:cn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:cn([Ce.lights,Ce.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};kn.physical={uniforms:cn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Cs={r:0,b:0,g:0},Li=new Gn,Bg=new Bt;function zg(r,e,t,n,a,o,u){const h=new mt(0);let p=o===!0?0:1,f,_,g=null,v=0,y=null;function C(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?t:e).get(N)),N}function D(L){let N=!1;const B=C(L);B===null?m(h,p):B&&B.isColor&&(m(B,1),N=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,u):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(L,N){const B=C(N);B&&(B.isCubeTexture||B.mapping===Xs)?(_===void 0&&(_=new Hn(new _r(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:pr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(A,V,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Li.copy(N.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(Li)),_.material.toneMapped=vt.getTransfer(B.colorSpace)!==Pt,(g!==B||v!==B.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,g=B,v=B.version,y=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(f===void 0&&(f=new Hn(new Gr(2,2),new si({name:"BackgroundMaterial",uniforms:pr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=B,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.toneMapped=vt.getTransfer(B.colorSpace)!==Pt,B.matrixAutoUpdate===!0&&B.updateMatrix(),f.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||v!==B.version||y!==r.toneMapping)&&(f.material.needsUpdate=!0,g=B,v=B.version,y=r.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function m(L,N){L.getRGB(Cs,_u(r)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,N,u)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,N=1){h.set(L),p=N,m(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,m(h,p)},render:D,addToRenderList:b,dispose:U}}function Vg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},a=v(null);let o=a,u=!1;function h(S,G,q,J,ee){let ue=!1;const ce=g(J,q,G);o!==ce&&(o=ce,f(o.object)),ue=y(S,J,q,ee),ue&&C(S,J,q,ee),ee!==null&&e.update(ee,r.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,N(S,G,q,J),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function p(){return r.createVertexArray()}function f(S){return r.bindVertexArray(S)}function _(S){return r.deleteVertexArray(S)}function g(S,G,q){const J=q.wireframe===!0;let ee=n[S.id];ee===void 0&&(ee={},n[S.id]=ee);let ue=ee[G.id];ue===void 0&&(ue={},ee[G.id]=ue);let ce=ue[J];return ce===void 0&&(ce=v(p()),ue[J]=ce),ce}function v(S){const G=[],q=[],J=[];for(let ee=0;ee<t;ee++)G[ee]=0,q[ee]=0,J[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:J,object:S,attributes:{},index:null}}function y(S,G,q,J){const ee=o.attributes,ue=G.attributes;let ce=0;const be=q.getAttributes();for(const se in be)if(be[se].location>=0){const we=ee[se];let Ge=ue[se];if(Ge===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(Ge=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(Ge=S.instanceColor)),we===void 0||we.attribute!==Ge||Ge&&we.data!==Ge.data)return!0;ce++}return o.attributesNum!==ce||o.index!==J}function C(S,G,q,J){const ee={},ue=G.attributes;let ce=0;const be=q.getAttributes();for(const se in be)if(be[se].location>=0){let we=ue[se];we===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(we=S.instanceColor));const Ge={};Ge.attribute=we,we&&we.data&&(Ge.data=we.data),ee[se]=Ge,ce++}o.attributes=ee,o.attributesNum=ce,o.index=J}function D(){const S=o.newAttributes;for(let G=0,q=S.length;G<q;G++)S[G]=0}function b(S){m(S,0)}function m(S,G){const q=o.newAttributes,J=o.enabledAttributes,ee=o.attributeDivisors;q[S]=1,J[S]===0&&(r.enableVertexAttribArray(S),J[S]=1),ee[S]!==G&&(r.vertexAttribDivisor(S,G),ee[S]=G)}function U(){const S=o.newAttributes,G=o.enabledAttributes;for(let q=0,J=G.length;q<J;q++)G[q]!==S[q]&&(r.disableVertexAttribArray(q),G[q]=0)}function L(S,G,q,J,ee,ue,ce){ce===!0?r.vertexAttribIPointer(S,G,q,ee,ue):r.vertexAttribPointer(S,G,q,J,ee,ue)}function N(S,G,q,J){D();const ee=J.attributes,ue=q.getAttributes(),ce=G.defaultAttributeValues;for(const be in ue){const se=ue[be];if(se.location>=0){let Me=ee[be];if(Me===void 0&&(be==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),be==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),Me!==void 0){const we=Me.normalized,Ge=Me.itemSize,at=e.get(Me);if(at===void 0)continue;const _t=at.buffer,Ze=at.type,st=at.bytesPerElement,oe=Ze===r.INT||Ze===r.UNSIGNED_INT||Me.gpuType===ko;if(Me.isInterleavedBufferAttribute){const de=Me.data,ie=de.stride,ye=Me.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<se.locationSize;Be++)m(se.location+Be,de.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<se.locationSize;Be++)b(se.location+Be);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let Be=0;Be<se.locationSize;Be++)L(se.location+Be,Ge/se.locationSize,Ze,we,ie*st,(ye+Ge/se.locationSize*Be)*st,oe)}else{if(Me.isInstancedBufferAttribute){for(let de=0;de<se.locationSize;de++)m(se.location+de,Me.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let de=0;de<se.locationSize;de++)b(se.location+de);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let de=0;de<se.locationSize;de++)L(se.location+de,Ge/se.locationSize,Ze,we,Ge*st,Ge/se.locationSize*de*st,oe)}}else if(ce!==void 0){const we=ce[be];if(we!==void 0)switch(we.length){case 2:r.vertexAttrib2fv(se.location,we);break;case 3:r.vertexAttrib3fv(se.location,we);break;case 4:r.vertexAttrib4fv(se.location,we);break;default:r.vertexAttrib1fv(se.location,we)}}}}U()}function B(){K();for(const S in n){const G=n[S];for(const q in G){const J=G[q];for(const ee in J)_(J[ee].object),delete J[ee];delete G[q]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const G=n[S.id];for(const q in G){const J=G[q];for(const ee in J)_(J[ee].object),delete J[ee];delete G[q]}delete n[S.id]}function V(S){for(const G in n){const q=n[G];if(q[S.id]===void 0)continue;const J=q[S.id];for(const ee in J)_(J[ee].object),delete J[ee];delete q[S.id]}}function K(){P(),u=!0,o!==a&&(o=a,f(o.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:K,resetDefaultState:P,dispose:B,releaseStatesOfGeometry:A,releaseStatesOfProgram:V,initAttributes:D,enableAttribute:b,disableUnusedAttributes:U}}function Gg(r,e,t){let n;function a(f){n=f}function o(f,_){r.drawArrays(n,f,_),t.update(_,n,1)}function u(f,_,g){g!==0&&(r.drawArraysInstanced(n,f,_,g),t.update(_,n,g))}function h(f,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,_,0,g);let y=0;for(let C=0;C<g;C++)y+=_[C];t.update(y,n,1)}function p(f,_,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let C=0;C<f.length;C++)u(f[C],_[C],v[C]);else{y.multiDrawArraysInstancedWEBGL(n,f,0,_,0,v,0,g);let C=0;for(let D=0;D<g;D++)C+=_[D]*v[D];t.update(C,n,1)}}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Hg(r,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(V){return!(V!==Ln&&n.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(V){const K=V===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Vn&&n.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==ti&&!K)}function p(V){if(V==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const _=p(f);_!==f&&(Je("WebGLRenderer:",f,"not supported, using",_,"instead."),f=_);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=C>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:C,maxTextureSize:D,maxCubemapSize:b,maxAttributes:m,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:N,vertexTextures:B,maxSamples:A}}function Wg(r){const e=this;let t=null,n=0,a=!1,o=!1;const u=new fi,h=new et,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||n!==0||a;return a=v,n=g.length,y},this.beginShadows=function(){o=!0,_(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,v){t=_(g,v,0)},this.setState=function(g,v,y){const C=g.clippingPlanes,D=g.clipIntersection,b=g.clipShadows,m=r.get(g);if(!a||C===null||C.length===0||o&&!b)o?_(null):f();else{const U=o?0:n,L=U*4;let N=m.clippingState||null;p.value=N,N=_(C,v,L,y);for(let B=0;B!==L;++B)N[B]=t[B];m.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=U}};function f(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function _(g,v,y,C){const D=g!==null?g.length:0;let b=null;if(D!==0){if(b=p.value,C!==!0||b===null){const m=y+D*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(b===null||b.length<m)&&(b=new Float32Array(m));for(let L=0,N=y;L!==D;++L,N+=4)u.copy(g[L]).applyMatrix4(U,h),u.normal.toArray(b,N),b[N+3]=u.constant}p.value=b,p.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,b}}function Xg(r){let e=new WeakMap;function t(u,h){return h===io?u.mapping=hr:h===ro&&(u.mapping=dr),u}function n(u){if(u&&u.isTexture){const h=u.mapping;if(h===io||h===ro)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const f=new G0(p.height);return f.fromEquirectangularTexture(r,u),e.set(u,f),u.addEventListener("dispose",a),t(f.texture,u.mapping)}else return null}}return u}function a(u){const h=u.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const _i=4,vl=[.125,.215,.35,.446,.526,.582],Ui=20,$g=512,Cr=new bu,yl=new mt;let Ba=null,za=0,Va=0,Ga=!1;const jg=new Z;class Sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,o={}){const{size:u=256,position:h=jg}=o;Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,a,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,Va),this._renderer.xr.enabled=Ga,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:mr,format:Ln,colorSpace:fr,depthBuffer:!1},a=El(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qg(o)),this._blurMaterial=Kg(o,e,t)}return a}_compileMaterial(e){const t=new Hn(new wn,e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,a,o){const p=new Sn(90,1,t,n),f=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(yl),g.toneMapping=xi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hn(new _r,new fu({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,b=D.material;let m=!1;const U=e.background;U?U.isColor&&(b.color.copy(U),e.background=null,m=!0):(b.color.copy(yl),m=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(p.up.set(0,f[L],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+_[L],o.y,o.z)):N===1?(p.up.set(0,0,f[L]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+_[L],o.z)):(p.up.set(0,f[L],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+_[L]));const B=this._cubeSize;rr(a,N*B,L>2?B:0,B,B),g.setRenderTarget(a),m&&g.render(D,p),g.render(e,p)}g.toneMapping=y,g.autoClear=v,e.background=U}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===hr||e.mapping===dr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());const o=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const h=o.uniforms;h.envMap.value=e;const p=this._cubeSize;rr(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(u,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,o=this._pingPongRenderTarget;if(this._ggxMaterial===null){const U=3*Math.max(this._cubeSize,16),L=4*this._cubeSize;this._ggxMaterial=Yg(this._lodMax,U,L)}const u=this._ggxMaterial,h=this._lodMeshes[n];h.material=u;const p=u.uniforms,f=n/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-_*_),v=.05+f*.95,y=g*v,{_lodMax:C}=this,D=this._sizeLods[n],b=3*D*(n>C-_i?n-C+_i:0),m=4*(this._cubeSize-D);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=C-t,rr(o,b,m,3*D,2*D),a.setRenderTarget(o),a.render(h,Cr),p.envMap.value=o.texture,p.roughness.value=0,p.mipInt.value=C-n,rr(e,b,m,3*D,2*D),a.setRenderTarget(e),a.render(h,Cr)}_blur(e,t,n,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,a,"latitudinal",o),this._halfBlur(u,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,u,h){const p=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&kt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[a];g.material=f;const v=f.uniforms,y=this._sizeLods[n]-1,C=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Ui-1),D=o/C,b=isFinite(o)?1+Math.floor(_*D):Ui;b>Ui&&Je(`sigmaRadians, ${o}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ui}`);const m=[];let U=0;for(let V=0;V<Ui;++V){const K=V/D,P=Math.exp(-K*K/2);m.push(P),V===0?U+=P:V<b&&(U+=2*P)}for(let V=0;V<m.length;V++)m[V]=m[V]/U;v.envMap.value=e.texture,v.samples.value=b,v.weights.value=m,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=C,v.mipInt.value=L-n;const N=this._sizeLods[a],B=3*N*(a>L-_i?a-L+_i:0),A=4*(this._cubeSize-N);rr(t,B,A,3*N,2*N),p.setRenderTarget(t),p.render(g,Cr)}}function qg(r){const e=[],t=[],n=[];let a=r;const o=r-_i+1+vl.length;for(let u=0;u<o;u++){const h=Math.pow(2,a);e.push(h);let p=1/h;u>r-_i?p=vl[u-r+_i-1]:u===0&&(p=0),t.push(p);const f=1/(h-2),_=-f,g=1+f,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,C=6,D=3,b=2,m=1,U=new Float32Array(D*C*y),L=new Float32Array(b*C*y),N=new Float32Array(m*C*y);for(let A=0;A<y;A++){const V=A%3*2/3-1,K=A>2?0:-1,P=[V,K,0,V+2/3,K,0,V+2/3,K+1,0,V,K,0,V+2/3,K+1,0,V,K+1,0];U.set(P,D*C*A),L.set(v,b*C*A);const S=[A,A,A,A,A,A];N.set(S,m*C*A)}const B=new wn;B.setAttribute("position",new Mn(U,D)),B.setAttribute("uv",new Mn(L,b)),B.setAttribute("faceIndex",new Mn(N,m)),n.push(new Hn(B,null)),a>_i&&a--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function El(r,e,t){const n=new Bi(r,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(r,e,t,n,a){r.viewport.set(e,t,n,a),r.scissor.set(e,t,n,a)}function Yg(r,e,t){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$g,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Kg(r,e,t){const n=new Float32Array(Ui),a=new Z(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$s(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function bl(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ml(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function $s(){return`

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
	`}function Zg(r){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const p=h.mapping,f=p===io||p===ro,_=p===hr||p===dr;if(f||_){let g=e.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return t===null&&(t=new Sl(r)),g=f?t.fromEquirectangular(h,g):t.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return f&&y&&y.height>0||_&&y&&a(y)?(t===null&&(t=new Sl(r)),g=f?t.fromEquirectangular(h):t.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",o),g.texture):null}}}return h}function a(h){let p=0;const f=6;for(let _=0;_<f;_++)h[_]!==void 0&&p++;return p===f}function o(h){const p=h.target;p.removeEventListener("dispose",o);const f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Jg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=r.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&kr("WebGLRenderer: "+n+" extension not supported."),a}}}function Qg(r,e,t,n){const a={},o=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const C in v.attributes)e.remove(v.attributes[C]);v.removeEventListener("dispose",u),delete a[v.id];const y=o.get(v);y&&(e.remove(y),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(g,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER)}function f(g){const v=[],y=g.index,C=g.attributes.position;let D=0;if(y!==null){const U=y.array;D=y.version;for(let L=0,N=U.length;L<N;L+=3){const B=U[L+0],A=U[L+1],V=U[L+2];v.push(B,A,A,V,V,B)}}else if(C!==void 0){const U=C.array;D=C.version;for(let L=0,N=U.length/3-1;L<N;L+=3){const B=L+0,A=L+1,V=L+2;v.push(B,A,A,V,V,B)}}else return;const b=new(cu(v)?mu:pu)(v,1);b.version=D;const m=o.get(g);m&&e.remove(m),o.set(g,b)}function _(g){const v=o.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&f(g)}else f(g);return o.get(g)}return{get:h,update:p,getWireframeAttribute:_}}function ev(r,e,t){let n;function a(v){n=v}let o,u;function h(v){o=v.type,u=v.bytesPerElement}function p(v,y){r.drawElements(n,y,o,v*u),t.update(y,n,1)}function f(v,y,C){C!==0&&(r.drawElementsInstanced(n,y,o,v*u,C),t.update(y,n,C))}function _(v,y,C){if(C===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,v,0,C);let b=0;for(let m=0;m<C;m++)b+=y[m];t.update(b,n,1)}function g(v,y,C,D){if(C===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let m=0;m<v.length;m++)f(v[m]/u,y[m],D[m]);else{b.multiDrawElementsInstancedWEBGL(n,y,0,o,v,0,D,0,C);let m=0;for(let U=0;U<C;U++)m+=y[U]*D[U];t.update(m,n,1)}}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=f,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function tv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,h){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=h*(o/3);break;case r.LINES:t.lines+=h*(o/2);break;case r.LINE_STRIP:t.lines+=h*(o-1);break;case r.LINE_LOOP:t.lines+=h*o;break;case r.POINTS:t.points+=h*o;break;default:kt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function nv(r,e,t){const n=new WeakMap,a=new Nt;function o(u,h,p){const f=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=n.get(h);if(v===void 0||v.count!==g){let P=function(){V.dispose(),n.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();const y=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],m=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let L=0;y===!0&&(L=1),C===!0&&(L=2),D===!0&&(L=3);let N=h.attributes.position.count*L,B=1;N>e.maxTextureSize&&(B=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const A=new Float32Array(N*B*4*g),V=new lu(A,N,B,g);V.type=ti,V.needsUpdate=!0;const K=L*4;for(let S=0;S<g;S++){const G=b[S],q=m[S],J=U[S],ee=N*B*4*S;for(let ue=0;ue<G.count;ue++){const ce=ue*K;y===!0&&(a.fromBufferAttribute(G,ue),A[ee+ce+0]=a.x,A[ee+ce+1]=a.y,A[ee+ce+2]=a.z,A[ee+ce+3]=0),C===!0&&(a.fromBufferAttribute(q,ue),A[ee+ce+4]=a.x,A[ee+ce+5]=a.y,A[ee+ce+6]=a.z,A[ee+ce+7]=0),D===!0&&(a.fromBufferAttribute(J,ue),A[ee+ce+8]=a.x,A[ee+ce+9]=a.y,A[ee+ce+10]=a.z,A[ee+ce+11]=J.itemSize===4?a.w:1)}}v={count:g,texture:V,size:new Qe(N,B)},n.set(h,v),h.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let y=0;for(let D=0;D<f.length;D++)y+=f[D];const C=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(r,"morphTargetBaseInfluence",C),p.getUniforms().setValue(r,"morphTargetInfluences",f)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:o}}function iv(r,e,t,n){let a=new WeakMap;function o(p){const f=n.render.frame,_=p.geometry,g=e.get(p,_);if(a.get(g)!==f&&(e.update(g),a.set(g,f)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),a.get(p)!==f&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),a.set(p,f))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==f&&(v.update(),a.set(v,f))}return g}function u(){a=new WeakMap}function h(p){const f=p.target;f.removeEventListener("dispose",h),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:u}}const Tu=new rn,Tl=new vu(1,1),wu=new lu,Au=new T0,Ru=new gu,wl=[],Al=[],Rl=new Float32Array(16),Cl=new Float32Array(9),Pl=new Float32Array(4);function xr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const a=e*t;let o=wl[a];if(o===void 0&&(o=new Float32Array(a),wl[a]=o),e!==0){n.toArray(o,0);for(let u=1,h=0;u!==e;++u)h+=t,r[u].toArray(o,h)}return o}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function js(r,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function rv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),jt(t,e)}}function av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),jt(t,e)}}function ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),jt(t,e)}}function cv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;Pl.set(n),r.uniformMatrix2fv(this.addr,!1,Pl),jt(t,n)}}function lv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;Cl.set(n),r.uniformMatrix3fv(this.addr,!1,Cl),jt(t,n)}}function uv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if($t(t,n))return;Rl.set(n),r.uniformMatrix4fv(this.addr,!1,Rl),jt(t,n)}}function hv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),jt(t,e)}}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),jt(t,e)}}function pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),jt(t,e)}}function mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),jt(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),jt(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),jt(t,e)}}function vv(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(Tl.compareFunction=ou,o=Tl):o=Tu,t.setTexture2D(e||o,a)}function yv(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Au,a)}function Sv(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Ru,a)}function Ev(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||wu,a)}function bv(r){switch(r){case 5126:return rv;case 35664:return sv;case 35665:return av;case 35666:return ov;case 35674:return cv;case 35675:return lv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return _v;case 36295:return xv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Mv(r,e){r.uniform1fv(this.addr,e)}function Tv(r,e){const t=xr(e,this.size,2);r.uniform2fv(this.addr,t)}function wv(r,e){const t=xr(e,this.size,3);r.uniform3fv(this.addr,t)}function Av(r,e){const t=xr(e,this.size,4);r.uniform4fv(this.addr,t)}function Rv(r,e){const t=xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Cv(r,e){const t=xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Pv(r,e){const t=xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Dv(r,e){r.uniform1iv(this.addr,e)}function Lv(r,e){r.uniform2iv(this.addr,e)}function Fv(r,e){r.uniform3iv(this.addr,e)}function Iv(r,e){r.uniform4iv(this.addr,e)}function Uv(r,e){r.uniform1uiv(this.addr,e)}function Nv(r,e){r.uniform2uiv(this.addr,e)}function Ov(r,e){r.uniform3uiv(this.addr,e)}function kv(r,e){r.uniform4uiv(this.addr,e)}function Bv(r,e,t){const n=this.cache,a=e.length,o=js(t,a);$t(n,o)||(r.uniform1iv(this.addr,o),jt(n,o));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Tu,o[u])}function zv(r,e,t){const n=this.cache,a=e.length,o=js(t,a);$t(n,o)||(r.uniform1iv(this.addr,o),jt(n,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Au,o[u])}function Vv(r,e,t){const n=this.cache,a=e.length,o=js(t,a);$t(n,o)||(r.uniform1iv(this.addr,o),jt(n,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Ru,o[u])}function Gv(r,e,t){const n=this.cache,a=e.length,o=js(t,a);$t(n,o)||(r.uniform1iv(this.addr,o),jt(n,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||wu,o[u])}function Hv(r){switch(r){case 5126:return Mv;case 35664:return Tv;case 35665:return wv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Dv;case 35667:case 35671:return Lv;case 35668:case 35672:return Fv;case 35669:case 35673:return Iv;case 5125:return Uv;case 36294:return Nv;case 36295:return Ov;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}class Wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}}class Xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hv(t.type)}}class $v{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const h=a[o];h.setValue(e,t[h.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Dl(r,e){r.seq.push(e),r.map[e.id]=e}function jv(r,e,t){const n=r.name,a=n.length;for(Ha.lastIndex=0;;){const o=Ha.exec(n),u=Ha.lastIndex;let h=o[1];const p=o[2]==="]",f=o[3];if(p&&(h=h|0),f===void 0||f==="["&&u+2===a){Dl(t,f===void 0?new Wv(h,r,e):new Xv(h,r,e));break}else{let g=t.map[h];g===void 0&&(g=new $v(h),Dl(t,g)),t=g}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);jv(o,u,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,u=t.length;o!==u;++o){const h=t[o],p=n[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&n.push(u)}return n}}function Ll(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qv=37297;let Yv=0;function Kv(r,e){const t=r.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const h=u+1;n.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return n.join(`
`)}const Fl=new et;function Zv(r){vt._getMatrix(Fl,vt.workingColorSpace,r);const e=`mat3( ${Fl.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case Gs:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Il(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=(r.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+Kv(r.getShaderSource(e),h)}else return o}function Jv(r,e){const t=Zv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qv(r,e){let t;switch(e){case Jm:t="Linear";break;case Qm:t="Reinhard";break;case e0:t="Cineon";break;case t0:t="ACESFilmic";break;case i0:t="AgX";break;case r0:t="Neutral";break;case n0:t="Custom";break;default:Je("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new Z;function ey(){vt.getLuminanceCoefficients(Ps);const r=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function ny(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=r.getActiveAttrib(e,a),u=o.name;let h=1;o.type===r.FLOAT_MAT2&&(h=2),o.type===r.FLOAT_MAT3&&(h=3),o.type===r.FLOAT_MAT4&&(h=4),t[u]={type:o.type,location:r.getAttribLocation(e,u),locationSize:h}}return t}function Dr(r){return r!==""}function Ul(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(r){return r.replace(ry,ay)}const sy=new Map;function ay(r,e){let t=rt[e];if(t===void 0){const n=sy.get(e);if(n!==void 0)t=rt[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return No(t)}const oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(r){return r.replace(oy,cy)}function cy(r,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function kl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ly(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Kl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function uy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case hr:case dr:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function dy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zl:e="ENVMAP_BLENDING_MULTIPLY";break;case Km:e="ENVMAP_BLENDING_MIX";break;case Zm:e="ENVMAP_BLENDING_ADD";break}return e}function fy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function py(r,e,t,n){const a=r.getContext(),o=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=ly(t),f=uy(t),_=hy(t),g=dy(t),v=fy(t),y=ty(t),C=ny(o),D=a.createProgram();let b,m,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(Dr).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(b=[kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?rt.tonemapping_pars_fragment:"",t.toneMapping!==xi?Qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Jv("linearToOutputTexel",t.outputColorSpace),ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),u=No(u),u=Ul(u,t),u=Nl(u,t),h=No(h),h=Ul(h,t),h=Nl(h,t),u=Ol(u),h=Ol(h),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=U+b+u,N=U+m+h,B=Ll(a,a.VERTEX_SHADER,L),A=Ll(a,a.FRAGMENT_SHADER,N);a.attachShader(D,B),a.attachShader(D,A),t.index0AttributeName!==void 0?a.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(D,0,"position"),a.linkProgram(D);function V(G){if(r.debug.checkShaderErrors){const q=a.getProgramInfoLog(D)||"",J=a.getShaderInfoLog(B)||"",ee=a.getShaderInfoLog(A)||"",ue=q.trim(),ce=J.trim(),be=ee.trim();let se=!0,Me=!0;if(a.getProgramParameter(D,a.LINK_STATUS)===!1)if(se=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,D,B,A);else{const we=Il(a,B,"vertex"),Ge=Il(a,A,"fragment");kt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(D,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ue+`
`+we+`
`+Ge)}else ue!==""?Je("WebGLProgram: Program Info Log:",ue):(ce===""||be==="")&&(Me=!1);Me&&(G.diagnostics={runnable:se,programLog:ue,vertexShader:{log:ce,prefix:b},fragmentShader:{log:be,prefix:m}})}a.deleteShader(B),a.deleteShader(A),K=new Os(a,D),P=iy(a,D)}let K;this.getUniforms=function(){return K===void 0&&V(this),K};let P;this.getAttributes=function(){return P===void 0&&V(this),P};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(D,qv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yv++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=B,this.fragmentShader=A,this}let my=0;class _y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xy(e),t.set(e,n)),n}}class xy{constructor(e){this.id=my++,this.code=e,this.usedTimes=0}}function gy(r,e,t,n,a,o,u){const h=new hu,p=new _y,f=new Set,_=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let y=a.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(P){return f.add(P),P===0?"uv":`uv${P}`}function b(P,S,G,q,J){const ee=q.fog,ue=J.geometry,ce=P.isMeshStandardMaterial?q.environment:null,be=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),se=be&&be.mapping===Xs?be.image.height:null,Me=C[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&Je("WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const we=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ge=we!==void 0?we.length:0;let at=0;ue.morphAttributes.position!==void 0&&(at=1),ue.morphAttributes.normal!==void 0&&(at=2),ue.morphAttributes.color!==void 0&&(at=3);let _t,Ze,st,oe;if(Me){const lt=kn[Me];_t=lt.vertexShader,Ze=lt.fragmentShader}else _t=P.vertexShader,Ze=P.fragmentShader,p.update(P),st=p.getVertexShaderID(P),oe=p.getFragmentShaderID(P);const de=r.getRenderTarget(),ie=r.state.buffers.depth.getReversed(),ye=J.isInstancedMesh===!0,Be=J.isBatchedMesh===!0,tt=!!P.map,At=!!P.matcap,nt=!!be,Et=!!P.aoMap,O=!!P.lightMap,ot=!!P.bumpMap,ct=!!P.normalMap,Rt=!!P.displacementMap,Ie=!!P.emissiveMap,Tt=!!P.metalnessMap,Ne=!!P.roughnessMap,$e=P.anisotropy>0,F=P.clearcoat>0,w=P.dispersion>0,X=P.iridescence>0,re=P.sheen>0,fe=P.transmission>0,ne=$e&&!!P.anisotropyMap,ke=F&&!!P.clearcoatMap,Ae=F&&!!P.clearcoatNormalMap,He=F&&!!P.clearcoatRoughnessMap,Oe=X&&!!P.iridescenceMap,me=X&&!!P.iridescenceThicknessMap,Ee=re&&!!P.sheenColorMap,je=re&&!!P.sheenRoughnessMap,We=!!P.specularMap,De=!!P.specularColorMap,Ye=!!P.specularIntensityMap,k=fe&&!!P.transmissionMap,Re=fe&&!!P.thicknessMap,Te=!!P.gradientMap,Se=!!P.alphaMap,H=P.alphaTest>0,z=!!P.alphaHash,Le=!!P.extensions;let Ke=xi;P.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const gt={shaderID:Me,shaderType:P.type,shaderName:P.name,vertexShader:_t,fragmentShader:Ze,defines:P.defines,customVertexShaderID:st,customFragmentShaderID:oe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Be,batchingColor:Be&&J._colorsTexture!==null,instancing:ye,instancingColor:ye&&J.instanceColor!==null,instancingMorph:ye&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:fr,alphaToCoverage:!!P.alphaToCoverage,map:tt,matcap:At,envMap:nt,envMapMode:nt&&be.mapping,envMapCubeUVHeight:se,aoMap:Et,lightMap:O,bumpMap:ot,normalMap:ct,displacementMap:v&&Rt,emissiveMap:Ie,normalMapObjectSpace:ct&&P.normalMapType===c0,normalMapTangentSpace:ct&&P.normalMapType===au,metalnessMap:Tt,roughnessMap:Ne,anisotropy:$e,anisotropyMap:ne,clearcoat:F,clearcoatMap:ke,clearcoatNormalMap:Ae,clearcoatRoughnessMap:He,dispersion:w,iridescence:X,iridescenceMap:Oe,iridescenceThicknessMap:me,sheen:re,sheenColorMap:Ee,sheenRoughnessMap:je,specularMap:We,specularColorMap:De,specularIntensityMap:Ye,transmission:fe,transmissionMap:k,thicknessMap:Re,gradientMap:Te,opaque:P.transparent===!1&&P.blending===cr&&P.alphaToCoverage===!1,alphaMap:Se,alphaTest:H,alphaHash:z,combine:P.combine,mapUv:tt&&D(P.map.channel),aoMapUv:Et&&D(P.aoMap.channel),lightMapUv:O&&D(P.lightMap.channel),bumpMapUv:ot&&D(P.bumpMap.channel),normalMapUv:ct&&D(P.normalMap.channel),displacementMapUv:Rt&&D(P.displacementMap.channel),emissiveMapUv:Ie&&D(P.emissiveMap.channel),metalnessMapUv:Tt&&D(P.metalnessMap.channel),roughnessMapUv:Ne&&D(P.roughnessMap.channel),anisotropyMapUv:ne&&D(P.anisotropyMap.channel),clearcoatMapUv:ke&&D(P.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&D(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&D(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&D(P.iridescenceMap.channel),iridescenceThicknessMapUv:me&&D(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&D(P.sheenColorMap.channel),sheenRoughnessMapUv:je&&D(P.sheenRoughnessMap.channel),specularMapUv:We&&D(P.specularMap.channel),specularColorMapUv:De&&D(P.specularColorMap.channel),specularIntensityMapUv:Ye&&D(P.specularIntensityMap.channel),transmissionMapUv:k&&D(P.transmissionMap.channel),thicknessMapUv:Re&&D(P.thicknessMap.channel),alphaMapUv:Se&&D(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ct||$e),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ue.attributes.uv&&(tt||Se),fog:!!ee,useFog:P.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ie,skinning:J.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,decodeVideoTexture:tt&&P.map.isVideoTexture===!0&&vt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:Ie&&P.emissiveMap.isVideoTexture===!0&&vt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Qn,flipSided:P.side===fn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Le&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&P.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return gt.vertexUv1s=f.has(1),gt.vertexUv2s=f.has(2),gt.vertexUv3s=f.has(3),f.clear(),gt}function m(P){const S=[];if(P.shaderID?S.push(P.shaderID):(S.push(P.customVertexShaderID),S.push(P.customFragmentShaderID)),P.defines!==void 0)for(const G in P.defines)S.push(G),S.push(P.defines[G]);return P.isRawShaderMaterial===!1&&(U(S,P),L(S,P),S.push(r.outputColorSpace)),S.push(P.customProgramCacheKey),S.join()}function U(P,S){P.push(S.precision),P.push(S.outputColorSpace),P.push(S.envMapMode),P.push(S.envMapCubeUVHeight),P.push(S.mapUv),P.push(S.alphaMapUv),P.push(S.lightMapUv),P.push(S.aoMapUv),P.push(S.bumpMapUv),P.push(S.normalMapUv),P.push(S.displacementMapUv),P.push(S.emissiveMapUv),P.push(S.metalnessMapUv),P.push(S.roughnessMapUv),P.push(S.anisotropyMapUv),P.push(S.clearcoatMapUv),P.push(S.clearcoatNormalMapUv),P.push(S.clearcoatRoughnessMapUv),P.push(S.iridescenceMapUv),P.push(S.iridescenceThicknessMapUv),P.push(S.sheenColorMapUv),P.push(S.sheenRoughnessMapUv),P.push(S.specularMapUv),P.push(S.specularColorMapUv),P.push(S.specularIntensityMapUv),P.push(S.transmissionMapUv),P.push(S.thicknessMapUv),P.push(S.combine),P.push(S.fogExp2),P.push(S.sizeAttenuation),P.push(S.morphTargetsCount),P.push(S.morphAttributeCount),P.push(S.numDirLights),P.push(S.numPointLights),P.push(S.numSpotLights),P.push(S.numSpotLightMaps),P.push(S.numHemiLights),P.push(S.numRectAreaLights),P.push(S.numDirLightShadows),P.push(S.numPointLightShadows),P.push(S.numSpotLightShadows),P.push(S.numSpotLightShadowsWithMaps),P.push(S.numLightProbes),P.push(S.shadowMapType),P.push(S.toneMapping),P.push(S.numClippingPlanes),P.push(S.numClipIntersection),P.push(S.depthPacking)}function L(P,S){h.disableAll(),S.supportsVertexTextures&&h.enable(0),S.instancing&&h.enable(1),S.instancingColor&&h.enable(2),S.instancingMorph&&h.enable(3),S.matcap&&h.enable(4),S.envMap&&h.enable(5),S.normalMapObjectSpace&&h.enable(6),S.normalMapTangentSpace&&h.enable(7),S.clearcoat&&h.enable(8),S.iridescence&&h.enable(9),S.alphaTest&&h.enable(10),S.vertexColors&&h.enable(11),S.vertexAlphas&&h.enable(12),S.vertexUv1s&&h.enable(13),S.vertexUv2s&&h.enable(14),S.vertexUv3s&&h.enable(15),S.vertexTangents&&h.enable(16),S.anisotropy&&h.enable(17),S.alphaHash&&h.enable(18),S.batching&&h.enable(19),S.dispersion&&h.enable(20),S.batchingColor&&h.enable(21),S.gradientMap&&h.enable(22),P.push(h.mask),h.disableAll(),S.fog&&h.enable(0),S.useFog&&h.enable(1),S.flatShading&&h.enable(2),S.logarithmicDepthBuffer&&h.enable(3),S.reversedDepthBuffer&&h.enable(4),S.skinning&&h.enable(5),S.morphTargets&&h.enable(6),S.morphNormals&&h.enable(7),S.morphColors&&h.enable(8),S.premultipliedAlpha&&h.enable(9),S.shadowMapEnabled&&h.enable(10),S.doubleSided&&h.enable(11),S.flipSided&&h.enable(12),S.useDepthPacking&&h.enable(13),S.dithering&&h.enable(14),S.transmission&&h.enable(15),S.sheen&&h.enable(16),S.opaque&&h.enable(17),S.pointsUvs&&h.enable(18),S.decodeVideoTexture&&h.enable(19),S.decodeVideoTextureEmissive&&h.enable(20),S.alphaToCoverage&&h.enable(21),P.push(h.mask)}function N(P){const S=C[P.type];let G;if(S){const q=kn[S];G=k0.clone(q.uniforms)}else G=P.uniforms;return G}function B(P,S){let G;for(let q=0,J=_.length;q<J;q++){const ee=_[q];if(ee.cacheKey===S){G=ee,++G.usedTimes;break}}return G===void 0&&(G=new py(r,S,P,o),_.push(G)),G}function A(P){if(--P.usedTimes===0){const S=_.indexOf(P);_[S]=_[_.length-1],_.pop(),P.destroy()}}function V(P){p.remove(P)}function K(){p.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:N,acquireProgram:B,releaseProgram:A,releaseShaderCache:V,programs:_,dispose:K}}function vy(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function n(u){r.delete(u)}function a(u,h,p){r.get(u)[h]=p}function o(){r=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function yy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zl(){const r=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function u(g,v,y,C,D,b){let m=r[e];return m===void 0?(m={id:g.id,object:g,geometry:v,material:y,groupOrder:C,renderOrder:g.renderOrder,z:D,group:b},r[e]=m):(m.id=g.id,m.object=g,m.geometry=v,m.material=y,m.groupOrder=C,m.renderOrder=g.renderOrder,m.z=D,m.group=b),e++,m}function h(g,v,y,C,D,b){const m=u(g,v,y,C,D,b);y.transmission>0?n.push(m):y.transparent===!0?a.push(m):t.push(m)}function p(g,v,y,C,D,b){const m=u(g,v,y,C,D,b);y.transmission>0?n.unshift(m):y.transparent===!0?a.unshift(m):t.unshift(m)}function f(g,v){t.length>1&&t.sort(g||yy),n.length>1&&n.sort(v||Bl),a.length>1&&a.sort(v||Bl)}function _(){for(let g=e,v=r.length;g<v;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:h,unshift:p,finish:_,sort:f}}function Sy(){let r=new WeakMap;function e(n,a){const o=r.get(n);let u;return o===void 0?(u=new zl,r.set(n,[u])):a>=o.length?(u=new zl,o.push(u)):u=o[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ey(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new mt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=t,t}}}function by(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let My=0;function Ty(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wy(r){const e=new Ey,t=by(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new Z);const a=new Z,o=new Bt,u=new Bt;function h(f){let _=0,g=0,v=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let y=0,C=0,D=0,b=0,m=0,U=0,L=0,N=0,B=0,A=0,V=0;f.sort(Ty);for(let P=0,S=f.length;P<S;P++){const G=f[P],q=G.color,J=G.intensity,ee=G.distance,ue=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=q.r*J,g+=q.g*J,v+=q.b*J;else if(G.isLightProbe){for(let ce=0;ce<9;ce++)n.probe[ce].addScaledVector(G.sh.coefficients[ce],J);V++}else if(G.isDirectionalLight){const ce=e.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const be=G.shadow,se=t.get(G);se.shadowIntensity=be.intensity,se.shadowBias=be.bias,se.shadowNormalBias=be.normalBias,se.shadowRadius=be.radius,se.shadowMapSize=be.mapSize,n.directionalShadow[y]=se,n.directionalShadowMap[y]=ue,n.directionalShadowMatrix[y]=G.shadow.matrix,U++}n.directional[y]=ce,y++}else if(G.isSpotLight){const ce=e.get(G);ce.position.setFromMatrixPosition(G.matrixWorld),ce.color.copy(q).multiplyScalar(J),ce.distance=ee,ce.coneCos=Math.cos(G.angle),ce.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ce.decay=G.decay,n.spot[D]=ce;const be=G.shadow;if(G.map&&(n.spotLightMap[B]=G.map,B++,be.updateMatrices(G),G.castShadow&&A++),n.spotLightMatrix[D]=be.matrix,G.castShadow){const se=t.get(G);se.shadowIntensity=be.intensity,se.shadowBias=be.bias,se.shadowNormalBias=be.normalBias,se.shadowRadius=be.radius,se.shadowMapSize=be.mapSize,n.spotShadow[D]=se,n.spotShadowMap[D]=ue,N++}D++}else if(G.isRectAreaLight){const ce=e.get(G);ce.color.copy(q).multiplyScalar(J),ce.halfWidth.set(G.width*.5,0,0),ce.halfHeight.set(0,G.height*.5,0),n.rectArea[b]=ce,b++}else if(G.isPointLight){const ce=e.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity),ce.distance=G.distance,ce.decay=G.decay,G.castShadow){const be=G.shadow,se=t.get(G);se.shadowIntensity=be.intensity,se.shadowBias=be.bias,se.shadowNormalBias=be.normalBias,se.shadowRadius=be.radius,se.shadowMapSize=be.mapSize,se.shadowCameraNear=be.camera.near,se.shadowCameraFar=be.camera.far,n.pointShadow[C]=se,n.pointShadowMap[C]=ue,n.pointShadowMatrix[C]=G.shadow.matrix,L++}n.point[C]=ce,C++}else if(G.isHemisphereLight){const ce=e.get(G);ce.skyColor.copy(G.color).multiplyScalar(J),ce.groundColor.copy(G.groundColor).multiplyScalar(J),n.hemi[m]=ce,m++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=_,n.ambient[1]=g,n.ambient[2]=v;const K=n.hash;(K.directionalLength!==y||K.pointLength!==C||K.spotLength!==D||K.rectAreaLength!==b||K.hemiLength!==m||K.numDirectionalShadows!==U||K.numPointShadows!==L||K.numSpotShadows!==N||K.numSpotMaps!==B||K.numLightProbes!==V)&&(n.directional.length=y,n.spot.length=D,n.rectArea.length=b,n.point.length=C,n.hemi.length=m,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=N+B-A,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=V,K.directionalLength=y,K.pointLength=C,K.spotLength=D,K.rectAreaLength=b,K.hemiLength=m,K.numDirectionalShadows=U,K.numPointShadows=L,K.numSpotShadows=N,K.numSpotMaps=B,K.numLightProbes=V,n.version=My++)}function p(f,_){let g=0,v=0,y=0,C=0,D=0;const b=_.matrixWorldInverse;for(let m=0,U=f.length;m<U;m++){const L=f[m];if(L.isDirectionalLight){const N=n.directional[g];N.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(b),g++}else if(L.isSpotLight){const N=n.spot[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(b),y++}else if(L.isRectAreaLight){const N=n.rectArea[C];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(b),u.identity(),o.copy(L.matrixWorld),o.premultiply(b),u.extractRotation(o),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),C++}else if(L.isPointLight){const N=n.point[v];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(b),v++}else if(L.isHemisphereLight){const N=n.hemi[D];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(b),D++}}}return{setup:h,setupView:p,state:n}}function Vl(r){const e=new wy(r),t=[],n=[];function a(_){f.camera=_,t.length=0,n.length=0}function o(_){t.push(_)}function u(_){n.push(_)}function h(){e.setup(t)}function p(_){e.setupView(t,_)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:h,setupLightsView:p,pushLight:o,pushShadow:u}}function Ay(r){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let h;return u===void 0?(h=new Vl(r),e.set(a,[h])):o>=u.length?(h=new Vl(r),u.push(h)):h=u[o],h}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Py(r,e,t){let n=new qo;const a=new Qe,o=new Qe,u=new Nt,h=new K0({depthPacking:o0}),p=new Z0,f={},_=t.maxTextureSize,g={[gi]:fn,[fn]:gi,[Qn]:Qn},v=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const C=new wn;C.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Hn(C,v),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let m=this.type;this.render=function(A,V,K){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||A.length===0)return;const P=r.getRenderTarget(),S=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),q=r.state;q.setBlending(ii),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const J=m!==Jn&&this.type===Jn,ee=m===Jn&&this.type!==Jn;for(let ue=0,ce=A.length;ue<ce;ue++){const be=A[ue],se=be.shadow;if(se===void 0){Je("WebGLShadowMap:",be,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;a.copy(se.mapSize);const Me=se.getFrameExtents();if(a.multiply(Me),o.copy(se.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(o.x=Math.floor(_/Me.x),a.x=o.x*Me.x,se.mapSize.x=o.x),a.y>_&&(o.y=Math.floor(_/Me.y),a.y=o.y*Me.y,se.mapSize.y=o.y)),se.map===null||J===!0||ee===!0){const Ge=this.type!==Jn?{minFilter:xn,magFilter:xn}:{};se.map!==null&&se.map.dispose(),se.map=new Bi(a.x,a.y,Ge),se.map.texture.name=be.name+".shadowMap",se.camera.updateProjectionMatrix()}r.setRenderTarget(se.map),r.clear();const we=se.getViewportCount();for(let Ge=0;Ge<we;Ge++){const at=se.getViewport(Ge);u.set(o.x*at.x,o.y*at.y,o.x*at.z,o.y*at.w),q.viewport(u),se.updateMatrices(be,Ge),n=se.getFrustum(),N(V,K,se.camera,be,this.type)}se.isPointLightShadow!==!0&&this.type===Jn&&U(se,K),se.needsUpdate=!1}m=this.type,b.needsUpdate=!1,r.setRenderTarget(P,S,G)};function U(A,V){const K=e.update(D);v.defines.VSM_SAMPLES!==A.blurSamples&&(v.defines.VSM_SAMPLES=A.blurSamples,y.defines.VSM_SAMPLES=A.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bi(a.x,a.y)),v.uniforms.shadow_pass.value=A.map.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(V,null,K,v,D,null),y.uniforms.shadow_pass.value=A.mapPass.texture,y.uniforms.resolution.value=A.mapSize,y.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(V,null,K,y,D,null)}function L(A,V,K,P){let S=null;const G=K.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)S=G;else if(S=K.isPointLight===!0?p:h,r.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const q=S.uuid,J=V.uuid;let ee=f[q];ee===void 0&&(ee={},f[q]=ee);let ue=ee[J];ue===void 0&&(ue=S.clone(),ee[J]=ue,V.addEventListener("dispose",B)),S=ue}if(S.visible=V.visible,S.wireframe=V.wireframe,P===Jn?S.side=V.shadowSide!==null?V.shadowSide:V.side:S.side=V.shadowSide!==null?V.shadowSide:g[V.side],S.alphaMap=V.alphaMap,S.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,S.map=V.map,S.clipShadows=V.clipShadows,S.clippingPlanes=V.clippingPlanes,S.clipIntersection=V.clipIntersection,S.displacementMap=V.displacementMap,S.displacementScale=V.displacementScale,S.displacementBias=V.displacementBias,S.wireframeLinewidth=V.wireframeLinewidth,S.linewidth=V.linewidth,K.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=r.properties.get(S);q.light=K}return S}function N(A,V,K,P,S){if(A.visible===!1)return;if(A.layers.test(V.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld);const J=e.update(A),ee=A.material;if(Array.isArray(ee)){const ue=J.groups;for(let ce=0,be=ue.length;ce<be;ce++){const se=ue[ce],Me=ee[se.materialIndex];if(Me&&Me.visible){const we=L(A,Me,P,S);A.onBeforeShadow(r,A,V,K,J,we,se),r.renderBufferDirect(K,null,J,we,A,se),A.onAfterShadow(r,A,V,K,J,we,se)}}}else if(ee.visible){const ue=L(A,ee,P,S);A.onBeforeShadow(r,A,V,K,J,ue,null),r.renderBufferDirect(K,null,J,ue,A,null),A.onAfterShadow(r,A,V,K,J,ue,null)}}const q=A.children;for(let J=0,ee=q.length;J<ee;J++)N(q[J],V,K,P,S)}function B(A){A.target.removeEventListener("dispose",B);for(const K in f){const P=f[K],S=A.target.uuid;S in P&&(P[S].dispose(),delete P[S])}}}const Dy={[Ka]:Za,[Ja]:to,[Qa]:no,[ur]:eo,[Za]:Ka,[to]:Ja,[no]:Qa,[eo]:ur};function Ly(r,e){function t(){let k=!1;const Re=new Nt;let Te=null;const Se=new Nt(0,0,0,0);return{setMask:function(H){Te!==H&&!k&&(r.colorMask(H,H,H,H),Te=H)},setLocked:function(H){k=H},setClear:function(H,z,Le,Ke,gt){gt===!0&&(H*=Ke,z*=Ke,Le*=Ke),Re.set(H,z,Le,Ke),Se.equals(Re)===!1&&(r.clearColor(H,z,Le,Ke),Se.copy(Re))},reset:function(){k=!1,Te=null,Se.set(-1,0,0,0)}}}function n(){let k=!1,Re=!1,Te=null,Se=null,H=null;return{setReversed:function(z){if(Re!==z){const Le=e.get("EXT_clip_control");z?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Re=z;const Ke=H;H=null,this.setClear(Ke)}},getReversed:function(){return Re},setTest:function(z){z?de(r.DEPTH_TEST):ie(r.DEPTH_TEST)},setMask:function(z){Te!==z&&!k&&(r.depthMask(z),Te=z)},setFunc:function(z){if(Re&&(z=Dy[z]),Se!==z){switch(z){case Ka:r.depthFunc(r.NEVER);break;case Za:r.depthFunc(r.ALWAYS);break;case Ja:r.depthFunc(r.LESS);break;case ur:r.depthFunc(r.LEQUAL);break;case Qa:r.depthFunc(r.EQUAL);break;case eo:r.depthFunc(r.GEQUAL);break;case to:r.depthFunc(r.GREATER);break;case no:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Se=z}},setLocked:function(z){k=z},setClear:function(z){H!==z&&(Re&&(z=1-z),r.clearDepth(z),H=z)},reset:function(){k=!1,Te=null,Se=null,H=null,Re=!1}}}function a(){let k=!1,Re=null,Te=null,Se=null,H=null,z=null,Le=null,Ke=null,gt=null;return{setTest:function(lt){k||(lt?de(r.STENCIL_TEST):ie(r.STENCIL_TEST))},setMask:function(lt){Re!==lt&&!k&&(r.stencilMask(lt),Re=lt)},setFunc:function(lt,gn,Ot){(Te!==lt||Se!==gn||H!==Ot)&&(r.stencilFunc(lt,gn,Ot),Te=lt,Se=gn,H=Ot)},setOp:function(lt,gn,Ot){(z!==lt||Le!==gn||Ke!==Ot)&&(r.stencilOp(lt,gn,Ot),z=lt,Le=gn,Ke=Ot)},setLocked:function(lt){k=lt},setClear:function(lt){gt!==lt&&(r.clearStencil(lt),gt=lt)},reset:function(){k=!1,Re=null,Te=null,Se=null,H=null,z=null,Le=null,Ke=null,gt=null}}}const o=new t,u=new n,h=new a,p=new WeakMap,f=new WeakMap;let _={},g={},v=new WeakMap,y=[],C=null,D=!1,b=null,m=null,U=null,L=null,N=null,B=null,A=null,V=new mt(0,0,0),K=0,P=!1,S=null,G=null,q=null,J=null,ee=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,be=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(be=parseFloat(/^WebGL (\d)/.exec(se)[1]),ce=be>=1):se.indexOf("OpenGL ES")!==-1&&(be=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ce=be>=2);let Me=null,we={};const Ge=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),_t=new Nt().fromArray(Ge),Ze=new Nt().fromArray(at);function st(k,Re,Te,Se){const H=new Uint8Array(4),z=r.createTexture();r.bindTexture(k,z),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Le=0;Le<Te;Le++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,H):r.texImage2D(Re+Le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,H);return z}const oe={};oe[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),h.setClear(0),de(r.DEPTH_TEST),u.setFunc(ur),ot(!1),ct(Wc),de(r.CULL_FACE),Et(ii);function de(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function ie(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function ye(k,Re){return g[k]!==Re?(r.bindFramebuffer(k,Re),g[k]=Re,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Be(k,Re){let Te=y,Se=!1;if(k){Te=v.get(Re),Te===void 0&&(Te=[],v.set(Re,Te));const H=k.textures;if(Te.length!==H.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let z=0,Le=H.length;z<Le;z++)Te[z]=r.COLOR_ATTACHMENT0+z;Te.length=H.length,Se=!0}}else Te[0]!==r.BACK&&(Te[0]=r.BACK,Se=!0);Se&&r.drawBuffers(Te)}function tt(k){return C!==k?(r.useProgram(k),C=k,!0):!1}const At={[Ii]:r.FUNC_ADD,[Fm]:r.FUNC_SUBTRACT,[Im]:r.FUNC_REVERSE_SUBTRACT};At[Um]=r.MIN,At[Nm]=r.MAX;const nt={[Om]:r.ZERO,[km]:r.ONE,[Bm]:r.SRC_COLOR,[qa]:r.SRC_ALPHA,[Xm]:r.SRC_ALPHA_SATURATE,[Hm]:r.DST_COLOR,[Vm]:r.DST_ALPHA,[zm]:r.ONE_MINUS_SRC_COLOR,[Ya]:r.ONE_MINUS_SRC_ALPHA,[Wm]:r.ONE_MINUS_DST_COLOR,[Gm]:r.ONE_MINUS_DST_ALPHA,[$m]:r.CONSTANT_COLOR,[jm]:r.ONE_MINUS_CONSTANT_COLOR,[qm]:r.CONSTANT_ALPHA,[Ym]:r.ONE_MINUS_CONSTANT_ALPHA};function Et(k,Re,Te,Se,H,z,Le,Ke,gt,lt){if(k===ii){D===!0&&(ie(r.BLEND),D=!1);return}if(D===!1&&(de(r.BLEND),D=!0),k!==Lm){if(k!==b||lt!==P){if((m!==Ii||N!==Ii)&&(r.blendEquation(r.FUNC_ADD),m=Ii,N=Ii),lt)switch(k){case cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xc:r.blendFunc(r.ONE,r.ONE);break;case $c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:kt("WebGLState: Invalid blending: ",k);break}else switch(k){case cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $c:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jc:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",k);break}U=null,L=null,B=null,A=null,V.set(0,0,0),K=0,b=k,P=lt}return}H=H||Re,z=z||Te,Le=Le||Se,(Re!==m||H!==N)&&(r.blendEquationSeparate(At[Re],At[H]),m=Re,N=H),(Te!==U||Se!==L||z!==B||Le!==A)&&(r.blendFuncSeparate(nt[Te],nt[Se],nt[z],nt[Le]),U=Te,L=Se,B=z,A=Le),(Ke.equals(V)===!1||gt!==K)&&(r.blendColor(Ke.r,Ke.g,Ke.b,gt),V.copy(Ke),K=gt),b=k,P=!1}function O(k,Re){k.side===Qn?ie(r.CULL_FACE):de(r.CULL_FACE);let Te=k.side===fn;Re&&(Te=!Te),ot(Te),k.blending===cr&&k.transparent===!1?Et(ii):Et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),o.setMask(k.colorWrite);const Se=k.stencilWrite;h.setTest(Se),Se&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ie(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function ot(k){S!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),S=k)}function ct(k){k!==Pm?(de(r.CULL_FACE),k!==G&&(k===Wc?r.cullFace(r.BACK):k===Dm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ie(r.CULL_FACE),G=k}function Rt(k){k!==q&&(ce&&r.lineWidth(k),q=k)}function Ie(k,Re,Te){k?(de(r.POLYGON_OFFSET_FILL),(J!==Re||ee!==Te)&&(r.polygonOffset(Re,Te),J=Re,ee=Te)):ie(r.POLYGON_OFFSET_FILL)}function Tt(k){k?de(r.SCISSOR_TEST):ie(r.SCISSOR_TEST)}function Ne(k){k===void 0&&(k=r.TEXTURE0+ue-1),Me!==k&&(r.activeTexture(k),Me=k)}function $e(k,Re,Te){Te===void 0&&(Me===null?Te=r.TEXTURE0+ue-1:Te=Me);let Se=we[Te];Se===void 0&&(Se={type:void 0,texture:void 0},we[Te]=Se),(Se.type!==k||Se.texture!==Re)&&(Me!==Te&&(r.activeTexture(Te),Me=Te),r.bindTexture(k,Re||oe[k]),Se.type=k,Se.texture=Re)}function F(){const k=we[Me];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function X(){try{r.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function re(){try{r.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function fe(){try{r.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ne(){try{r.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ke(){try{r.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ae(){try{r.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function He(){try{r.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Oe(){try{r.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function me(){try{r.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ee(k){_t.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),_t.copy(k))}function je(k){Ze.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ze.copy(k))}function We(k,Re){let Te=f.get(Re);Te===void 0&&(Te=new WeakMap,f.set(Re,Te));let Se=Te.get(k);Se===void 0&&(Se=r.getUniformBlockIndex(Re,k.name),Te.set(k,Se))}function De(k,Re){const Se=f.get(Re).get(k);p.get(Re)!==Se&&(r.uniformBlockBinding(Re,Se,k.__bindingPointIndex),p.set(Re,Se))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Me=null,we={},g={},v=new WeakMap,y=[],C=null,D=!1,b=null,m=null,U=null,L=null,N=null,B=null,A=null,V=new mt(0,0,0),K=0,P=!1,S=null,G=null,q=null,J=null,ee=null,_t.set(0,0,r.canvas.width,r.canvas.height),Ze.set(0,0,r.canvas.width,r.canvas.height),o.reset(),u.reset(),h.reset()}return{buffers:{color:o,depth:u,stencil:h},enable:de,disable:ie,bindFramebuffer:ye,drawBuffers:Be,useProgram:tt,setBlending:Et,setMaterial:O,setFlipSided:ot,setCullFace:ct,setLineWidth:Rt,setPolygonOffset:Ie,setScissorTest:Tt,activeTexture:Ne,bindTexture:$e,unbindTexture:F,compressedTexImage2D:w,compressedTexImage3D:X,texImage2D:Oe,texImage3D:me,updateUBOMapping:We,uniformBlockBinding:De,texStorage2D:Ae,texStorage3D:He,texSubImage2D:re,texSubImage3D:fe,compressedTexSubImage2D:ne,compressedTexSubImage3D:ke,scissor:Ee,viewport:je,reset:Ye}}function Fy(r,e,t,n,a,o,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Qe,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(F,w){return y?new OffscreenCanvas(F,w):Ws("canvas")}function D(F,w,X){let re=1;const fe=$e(F);if((fe.width>X||fe.height>X)&&(re=X/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ne=Math.floor(re*fe.width),ke=Math.floor(re*fe.height);g===void 0&&(g=C(ne,ke));const Ae=w?C(ne,ke):g;return Ae.width=ne,Ae.height=ke,Ae.getContext("2d").drawImage(F,0,0,ne,ke),Je("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ne+"x"+ke+")."),Ae}else return"data"in F&&Je("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),F;return F}function b(F){return F.generateMipmaps}function m(F){r.generateMipmap(F)}function U(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(F,w,X,re,fe=!1){if(F!==null){if(r[F]!==void 0)return r[F];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ne=w;if(w===r.RED&&(X===r.FLOAT&&(ne=r.R32F),X===r.HALF_FLOAT&&(ne=r.R16F),X===r.UNSIGNED_BYTE&&(ne=r.R8)),w===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ne=r.R8UI),X===r.UNSIGNED_SHORT&&(ne=r.R16UI),X===r.UNSIGNED_INT&&(ne=r.R32UI),X===r.BYTE&&(ne=r.R8I),X===r.SHORT&&(ne=r.R16I),X===r.INT&&(ne=r.R32I)),w===r.RG&&(X===r.FLOAT&&(ne=r.RG32F),X===r.HALF_FLOAT&&(ne=r.RG16F),X===r.UNSIGNED_BYTE&&(ne=r.RG8)),w===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(ne=r.RG8UI),X===r.UNSIGNED_SHORT&&(ne=r.RG16UI),X===r.UNSIGNED_INT&&(ne=r.RG32UI),X===r.BYTE&&(ne=r.RG8I),X===r.SHORT&&(ne=r.RG16I),X===r.INT&&(ne=r.RG32I)),w===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),X===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),X===r.UNSIGNED_INT&&(ne=r.RGB32UI),X===r.BYTE&&(ne=r.RGB8I),X===r.SHORT&&(ne=r.RGB16I),X===r.INT&&(ne=r.RGB32I)),w===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),X===r.UNSIGNED_INT&&(ne=r.RGBA32UI),X===r.BYTE&&(ne=r.RGBA8I),X===r.SHORT&&(ne=r.RGBA16I),X===r.INT&&(ne=r.RGBA32I)),w===r.RGB&&(X===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(ne=r.R11F_G11F_B10F)),w===r.RGBA){const ke=fe?Gs:vt.getTransfer(re);X===r.FLOAT&&(ne=r.RGBA32F),X===r.HALF_FLOAT&&(ne=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ne=ke===Pt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function N(F,w){let X;return F?w===null||w===Oi||w===Ur?X=r.DEPTH24_STENCIL8:w===ti?X=r.DEPTH32F_STENCIL8:w===Ir&&(X=r.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Oi||w===Ur?X=r.DEPTH_COMPONENT24:w===ti?X=r.DEPTH_COMPONENT32F:w===Ir&&(X=r.DEPTH_COMPONENT16),X}function B(F,w){return b(F)===!0||F.isFramebufferTexture&&F.minFilter!==xn&&F.minFilter!==bn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function A(F){const w=F.target;w.removeEventListener("dispose",A),K(w),w.isVideoTexture&&_.delete(w)}function V(F){const w=F.target;w.removeEventListener("dispose",V),S(w)}function K(F){const w=n.get(F);if(w.__webglInit===void 0)return;const X=F.source,re=v.get(X);if(re){const fe=re[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&P(F),Object.keys(re).length===0&&v.delete(X)}n.remove(F)}function P(F){const w=n.get(F);r.deleteTexture(w.__webglTexture);const X=F.source,re=v.get(X);delete re[w.__cacheKey],u.memory.textures--}function S(F){const w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let fe=0;fe<w.__webglFramebuffer[re].length;fe++)r.deleteFramebuffer(w.__webglFramebuffer[re][fe]);else r.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)r.deleteFramebuffer(w.__webglFramebuffer[re]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=F.textures;for(let re=0,fe=X.length;re<fe;re++){const ne=n.get(X[re]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),u.memory.textures--),n.remove(X[re])}n.remove(F)}let G=0;function q(){G=0}function J(){const F=G;return F>=a.maxTextures&&Je("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+a.maxTextures),G+=1,F}function ee(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function ue(F,w){const X=n.get(F);if(F.isVideoTexture&&Tt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&X.__version!==F.version){const re=F.image;if(re===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(X,F,w);return}}else F.isExternalTexture&&(X.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+w)}function ce(F,w){const X=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){oe(X,F,w);return}else F.isExternalTexture&&(X.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+w)}function be(F,w){const X=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){oe(X,F,w);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+w)}function se(F,w){const X=n.get(F);if(F.version>0&&X.__version!==F.version){de(X,F,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+w)}const Me={[Vs]:r.REPEAT,[ei]:r.CLAMP_TO_EDGE,[so]:r.MIRRORED_REPEAT},we={[xn]:r.NEAREST,[s0]:r.NEAREST_MIPMAP_NEAREST,[hs]:r.NEAREST_MIPMAP_LINEAR,[bn]:r.LINEAR,[pa]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},Ge={[l0]:r.NEVER,[m0]:r.ALWAYS,[u0]:r.LESS,[ou]:r.LEQUAL,[h0]:r.EQUAL,[p0]:r.GEQUAL,[d0]:r.GREATER,[f0]:r.NOTEQUAL};function at(F,w){if(w.type===ti&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===bn||w.magFilter===pa||w.magFilter===hs||w.magFilter===Ni||w.minFilter===bn||w.minFilter===pa||w.minFilter===hs||w.minFilter===Ni)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,Me[w.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,Me[w.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,Me[w.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,we[w.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,we[w.minFilter]),w.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,Ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===xn||w.minFilter!==hs&&w.minFilter!==Ni||w.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function _t(F,w){let X=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",A));const re=w.source;let fe=v.get(re);fe===void 0&&(fe={},v.set(re,fe));const ne=ee(w);if(ne!==F.__cacheKey){fe[ne]===void 0&&(fe[ne]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,X=!0),fe[ne].usedTimes++;const ke=fe[F.__cacheKey];ke!==void 0&&(fe[F.__cacheKey].usedTimes--,ke.usedTimes===0&&P(w)),F.__cacheKey=ne,F.__webglTexture=fe[ne].texture}return X}function Ze(F,w,X){return Math.floor(Math.floor(F/X)/w)}function st(F,w,X,re){const ne=F.updateRanges;if(ne.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,X,re,w.data);else{ne.sort((me,Ee)=>me.start-Ee.start);let ke=0;for(let me=1;me<ne.length;me++){const Ee=ne[ke],je=ne[me],We=Ee.start+Ee.count,De=Ze(je.start,w.width,4),Ye=Ze(Ee.start,w.width,4);je.start<=We+1&&De===Ye&&Ze(je.start+je.count-1,w.width,4)===De?Ee.count=Math.max(Ee.count,je.start+je.count-Ee.start):(++ke,ne[ke]=je)}ne.length=ke+1;const Ae=r.getParameter(r.UNPACK_ROW_LENGTH),He=r.getParameter(r.UNPACK_SKIP_PIXELS),Oe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let me=0,Ee=ne.length;me<Ee;me++){const je=ne[me],We=Math.floor(je.start/4),De=Math.ceil(je.count/4),Ye=We%w.width,k=Math.floor(We/w.width),Re=De,Te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),t.texSubImage2D(r.TEXTURE_2D,0,Ye,k,Re,Te,X,re,w.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function oe(F,w,X){let re=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(re=r.TEXTURE_3D);const fe=_t(F,w),ne=w.source;t.bindTexture(re,F.__webglTexture,r.TEXTURE0+X);const ke=n.get(ne);if(ne.version!==ke.__version||fe===!0){t.activeTexture(r.TEXTURE0+X);const Ae=vt.getPrimaries(vt.workingColorSpace),He=w.colorSpace===pi?null:vt.getPrimaries(w.colorSpace),Oe=w.colorSpace===pi||Ae===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let me=D(w.image,!1,a.maxTextureSize);me=Ne(w,me);const Ee=o.convert(w.format,w.colorSpace),je=o.convert(w.type);let We=L(w.internalFormat,Ee,je,w.colorSpace,w.isVideoTexture);at(re,w);let De;const Ye=w.mipmaps,k=w.isVideoTexture!==!0,Re=ke.__version===void 0||fe===!0,Te=ne.dataReady,Se=B(w,me);if(w.isDepthTexture)We=N(w.format===Or,w.type),Re&&(k?t.texStorage2D(r.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,We,me.width,me.height,0,Ee,je,null));else if(w.isDataTexture)if(Ye.length>0){k&&Re&&t.texStorage2D(r.TEXTURE_2D,Se,We,Ye[0].width,Ye[0].height);for(let H=0,z=Ye.length;H<z;H++)De=Ye[H],k?Te&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,De.width,De.height,Ee,je,De.data):t.texImage2D(r.TEXTURE_2D,H,We,De.width,De.height,0,Ee,je,De.data);w.generateMipmaps=!1}else k?(Re&&t.texStorage2D(r.TEXTURE_2D,Se,We,me.width,me.height),Te&&st(w,me,Ee,je)):t.texImage2D(r.TEXTURE_2D,0,We,me.width,me.height,0,Ee,je,me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){k&&Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,We,Ye[0].width,Ye[0].height,me.depth);for(let H=0,z=Ye.length;H<z;H++)if(De=Ye[H],w.format!==Ln)if(Ee!==null)if(k){if(Te)if(w.layerUpdates.size>0){const Le=gl(De.width,De.height,w.format,w.type);for(const Ke of w.layerUpdates){const gt=De.data.subarray(Ke*Le/De.data.BYTES_PER_ELEMENT,(Ke+1)*Le/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,Ke,De.width,De.height,1,Ee,gt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,De.width,De.height,me.depth,Ee,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,We,De.width,De.height,me.depth,0,De.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Te&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,De.width,De.height,me.depth,Ee,je,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,We,De.width,De.height,me.depth,0,Ee,je,De.data)}else{k&&Re&&t.texStorage2D(r.TEXTURE_2D,Se,We,Ye[0].width,Ye[0].height);for(let H=0,z=Ye.length;H<z;H++)De=Ye[H],w.format!==Ln?Ee!==null?k?Te&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,De.width,De.height,Ee,De.data):t.compressedTexImage2D(r.TEXTURE_2D,H,We,De.width,De.height,0,De.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Te&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,De.width,De.height,Ee,je,De.data):t.texImage2D(r.TEXTURE_2D,H,We,De.width,De.height,0,Ee,je,De.data)}else if(w.isDataArrayTexture)if(k){if(Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,We,me.width,me.height,me.depth),Te)if(w.layerUpdates.size>0){const H=gl(me.width,me.height,w.format,w.type);for(const z of w.layerUpdates){const Le=me.data.subarray(z*H/me.data.BYTES_PER_ELEMENT,(z+1)*H/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,z,me.width,me.height,1,Ee,je,Le)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ee,je,me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,Ee,je,me.data);else if(w.isData3DTexture)k?(Re&&t.texStorage3D(r.TEXTURE_3D,Se,We,me.width,me.height,me.depth),Te&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ee,je,me.data)):t.texImage3D(r.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,Ee,je,me.data);else if(w.isFramebufferTexture){if(Re)if(k)t.texStorage2D(r.TEXTURE_2D,Se,We,me.width,me.height);else{let H=me.width,z=me.height;for(let Le=0;Le<Se;Le++)t.texImage2D(r.TEXTURE_2D,Le,We,H,z,0,Ee,je,null),H>>=1,z>>=1}}else if(Ye.length>0){if(k&&Re){const H=$e(Ye[0]);t.texStorage2D(r.TEXTURE_2D,Se,We,H.width,H.height)}for(let H=0,z=Ye.length;H<z;H++)De=Ye[H],k?Te&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,Ee,je,De):t.texImage2D(r.TEXTURE_2D,H,We,Ee,je,De);w.generateMipmaps=!1}else if(k){if(Re){const H=$e(me);t.texStorage2D(r.TEXTURE_2D,Se,We,H.width,H.height)}Te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,je,me)}else t.texImage2D(r.TEXTURE_2D,0,We,Ee,je,me);b(w)&&m(re),ke.__version=ne.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function de(F,w,X){if(w.image.length!==6)return;const re=_t(F,w),fe=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+X);const ne=n.get(fe);if(fe.version!==ne.__version||re===!0){t.activeTexture(r.TEXTURE0+X);const ke=vt.getPrimaries(vt.workingColorSpace),Ae=w.colorSpace===pi?null:vt.getPrimaries(w.colorSpace),He=w.colorSpace===pi||ke===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Oe=w.isCompressedTexture||w.image[0].isCompressedTexture,me=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let z=0;z<6;z++)!Oe&&!me?Ee[z]=D(w.image[z],!0,a.maxCubemapSize):Ee[z]=me?w.image[z].image:w.image[z],Ee[z]=Ne(w,Ee[z]);const je=Ee[0],We=o.convert(w.format,w.colorSpace),De=o.convert(w.type),Ye=L(w.internalFormat,We,De,w.colorSpace),k=w.isVideoTexture!==!0,Re=ne.__version===void 0||re===!0,Te=fe.dataReady;let Se=B(w,je);at(r.TEXTURE_CUBE_MAP,w);let H;if(Oe){k&&Re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,Ye,je.width,je.height);for(let z=0;z<6;z++){H=Ee[z].mipmaps;for(let Le=0;Le<H.length;Le++){const Ke=H[Le];w.format!==Ln?We!==null?k?Te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le,0,0,Ke.width,Ke.height,We,Ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le,Ye,Ke.width,Ke.height,0,Ke.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le,0,0,Ke.width,Ke.height,We,De,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le,Ye,Ke.width,Ke.height,0,We,De,Ke.data)}}}else{if(H=w.mipmaps,k&&Re){H.length>0&&Se++;const z=$e(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,Ye,z.width,z.height)}for(let z=0;z<6;z++)if(me){k?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ee[z].width,Ee[z].height,We,De,Ee[z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ye,Ee[z].width,Ee[z].height,0,We,De,Ee[z].data);for(let Le=0;Le<H.length;Le++){const gt=H[Le].image[z].image;k?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le+1,0,0,gt.width,gt.height,We,De,gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le+1,Ye,gt.width,gt.height,0,We,De,gt.data)}}else{k?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,We,De,Ee[z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ye,We,De,Ee[z]);for(let Le=0;Le<H.length;Le++){const Ke=H[Le];k?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le+1,0,0,We,De,Ke.image[z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le+1,Ye,We,De,Ke.image[z])}}}b(w)&&m(r.TEXTURE_CUBE_MAP),ne.__version=fe.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ie(F,w,X,re,fe,ne){const ke=o.convert(X.format,X.colorSpace),Ae=o.convert(X.type),He=L(X.internalFormat,ke,Ae,X.colorSpace),Oe=n.get(w),me=n.get(X);if(me.__renderTarget=w,!Oe.__hasExternalTextures){const Ee=Math.max(1,w.width>>ne),je=Math.max(1,w.height>>ne);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,ne,He,Ee,je,w.depth,0,ke,Ae,null):t.texImage2D(fe,ne,He,Ee,je,0,ke,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),Ie(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,fe,me.__webglTexture,0,Rt(w)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,fe,me.__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(F,w,X){if(r.bindRenderbuffer(r.RENDERBUFFER,F),w.depthBuffer){const re=w.depthTexture,fe=re&&re.isDepthTexture?re.type:null,ne=N(w.stencilBuffer,fe),ke=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=Rt(w);Ie(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,ne,w.width,w.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,ne,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ne,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ke,r.RENDERBUFFER,F)}else{const re=w.textures;for(let fe=0;fe<re.length;fe++){const ne=re[fe],ke=o.convert(ne.format,ne.colorSpace),Ae=o.convert(ne.type),He=L(ne.internalFormat,ke,Ae,ne.colorSpace),Oe=Rt(w);X&&Ie(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,He,w.width,w.height):Ie(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Oe,He,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,He,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(F,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(w.depthTexture);re.__renderTarget=w,(!re.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ue(w.depthTexture,0);const fe=re.__webglTexture,ne=Rt(w);if(w.depthTexture.format===Nr)Ie(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0);else if(w.depthTexture.format===Or)Ie(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function tt(F){const w=n.get(F),X=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const re=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),re){const fe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),w.__depthDisposeCallback=fe}w.__boundDepthTexture=re}if(F.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const re=F.texture.mipmaps;re&&re.length>0?Be(w.__webglFramebuffer[0],F):Be(w.__webglFramebuffer,F)}else if(X){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]===void 0)w.__webglDepthbuffer[re]=r.createRenderbuffer(),ye(w.__webglDepthbuffer[re],F,!1);else{const fe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,ne)}}else{const re=F.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ye(w.__webglDepthbuffer,F,!1);else{const fe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,ne)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function At(F,w,X){const re=n.get(F);w!==void 0&&ie(re.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&tt(F)}function nt(F){const w=F.texture,X=n.get(F),re=n.get(w);F.addEventListener("dispose",V);const fe=F.textures,ne=F.isWebGLCubeRenderTarget===!0,ke=fe.length>1;if(ke||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=w.version,u.memory.textures++),ne){X.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Ae]=[];for(let He=0;He<w.mipmaps.length;He++)X.__webglFramebuffer[Ae][He]=r.createFramebuffer()}else X.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)X.__webglFramebuffer[Ae]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ke)for(let Ae=0,He=fe.length;Ae<He;Ae++){const Oe=n.get(fe[Ae]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),u.memory.textures++)}if(F.samples>0&&Ie(F)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ae=0;Ae<fe.length;Ae++){const He=fe[Ae];X.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Ae]);const Oe=o.convert(He.format,He.colorSpace),me=o.convert(He.type),Ee=L(He.internalFormat,Oe,me,He.colorSpace,F.isXRRenderTarget===!0),je=Rt(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,je,Ee,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,X.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),ye(X.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),at(r.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)ie(X.__webglFramebuffer[Ae][He],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,He);else ie(X.__webglFramebuffer[Ae],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);b(w)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Ae=0,He=fe.length;Ae<He;Ae++){const Oe=fe[Ae],me=n.get(Oe);let Ee=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ee=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,me.__webglTexture),at(Ee,Oe),ie(X.__webglFramebuffer,F,Oe,r.COLOR_ATTACHMENT0+Ae,Ee,0),b(Oe)&&m(Ee)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ae=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,re.__webglTexture),at(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)ie(X.__webglFramebuffer[He],F,w,r.COLOR_ATTACHMENT0,Ae,He);else ie(X.__webglFramebuffer,F,w,r.COLOR_ATTACHMENT0,Ae,0);b(w)&&m(Ae),t.unbindTexture()}F.depthBuffer&&tt(F)}function Et(F){const w=F.textures;for(let X=0,re=w.length;X<re;X++){const fe=w[X];if(b(fe)){const ne=U(F),ke=n.get(fe).__webglTexture;t.bindTexture(ne,ke),m(ne),t.unbindTexture()}}}const O=[],ot=[];function ct(F){if(F.samples>0){if(Ie(F)===!1){const w=F.textures,X=F.width,re=F.height;let fe=r.COLOR_BUFFER_BIT;const ne=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ke=n.get(F),Ae=w.length>1;if(Ae)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const He=F.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Oe]);const me=n.get(w[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,X,re,0,0,X,re,fe,r.NEAREST),p===!0&&(O.length=0,ot.length=0,O.push(r.COLOR_ATTACHMENT0+Oe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(O.push(ne),ot.push(ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Oe]);const me=n.get(w[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const w=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Rt(F){return Math.min(a.maxSamples,F.samples)}function Ie(F){const w=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(F){const w=u.render.frame;_.get(F)!==w&&(_.set(F,w),F.update())}function Ne(F,w){const X=F.colorSpace,re=F.format,fe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||X!==fr&&X!==pi&&(vt.getTransfer(X)===Pt?(re!==Ln||fe!==Vn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",X)),w}function $e(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=J,this.resetTextureUnits=q,this.setTexture2D=ue,this.setTexture2DArray=ce,this.setTexture3D=be,this.setTextureCube=se,this.rebindTextures=At,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ie}function Iy(r,e){function t(n,a=pi){let o;const u=vt.getTransfer(a);if(n===Vn)return r.UNSIGNED_BYTE;if(n===Bo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ql)return r.BYTE;if(n===eu)return r.SHORT;if(n===Ir)return r.UNSIGNED_SHORT;if(n===ko)return r.INT;if(n===Oi)return r.UNSIGNED_INT;if(n===ti)return r.FLOAT;if(n===mr)return r.HALF_FLOAT;if(n===iu)return r.ALPHA;if(n===ru)return r.RGB;if(n===Ln)return r.RGBA;if(n===Nr)return r.DEPTH_COMPONENT;if(n===Or)return r.DEPTH_STENCIL;if(n===su)return r.RED;if(n===Vo)return r.RED_INTEGER;if(n===Go)return r.RG;if(n===Ho)return r.RG_INTEGER;if(n===Wo)return r.RGBA_INTEGER;if(n===Ls||n===Fs||n===Is||n===Us)if(u===Pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ls)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ls)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===co||n===lo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ao)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===ho||n===fo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===uo||n===ho)return u===Pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===fo)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===_o||n===xo||n===go||n===vo||n===yo||n===So||n===Eo||n===bo||n===Mo||n===To||n===wo||n===Ao)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===po)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return u===Pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Co||n===Po)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Ro)return u===Pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Lo||n===Fo||n===Io)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Do)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ny=`
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

}`;class Oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new si({vertexShader:Uy,fragmentShader:Ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hn(new Gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ky extends zi{constructor(e,t){super();const n=this;let a=null,o=1,u=null,h="local-floor",p=1,f=null,_=null,g=null,v=null,y=null,C=null;const D=typeof XRWebGLBinding<"u",b=new Oy,m={},U=t.getContextAttributes();let L=null,N=null;const B=[],A=[],V=new Qe;let K=null;const P=new Sn;P.viewport=new Nt;const S=new Sn;S.viewport=new Nt;const G=[P,S],q=new n_;let J=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let de=B[oe];return de===void 0&&(de=new Na,B[oe]=de),de.getTargetRaySpace()},this.getControllerGrip=function(oe){let de=B[oe];return de===void 0&&(de=new Na,B[oe]=de),de.getGripSpace()},this.getHand=function(oe){let de=B[oe];return de===void 0&&(de=new Na,B[oe]=de),de.getHandSpace()};function ue(oe){const de=A.indexOf(oe.inputSource);if(de===-1)return;const ie=B[de];ie!==void 0&&(ie.update(oe.inputSource,oe.frame,f||u),ie.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ce(){a.removeEventListener("select",ue),a.removeEventListener("selectstart",ue),a.removeEventListener("selectend",ue),a.removeEventListener("squeeze",ue),a.removeEventListener("squeezestart",ue),a.removeEventListener("squeezeend",ue),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",be);for(let oe=0;oe<B.length;oe++){const de=A[oe];de!==null&&(A[oe]=null,B[oe].disconnect(de))}J=null,ee=null,b.reset();for(const oe in m)delete m[oe];e.setRenderTarget(L),y=null,v=null,g=null,a=null,N=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(K),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(oe){f=oe},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&D&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return C},this.getSession=function(){return a},this.setSession=async function(oe){if(a=oe,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",ue),a.addEventListener("selectstart",ue),a.addEventListener("selectend",ue),a.addEventListener("squeeze",ue),a.addEventListener("squeezestart",ue),a.addEventListener("squeezeend",ue),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",be),U.xrCompatible!==!0&&await t.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(V),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ye=null,Be=null;U.depth&&(Be=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=U.stencil?Or:Nr,ye=U.stencil?Ur:Oi);const tt={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:o};g=this.getBinding(),v=g.createProjectionLayer(tt),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new Bi(v.textureWidth,v.textureHeight,{format:Ln,type:Vn,depthTexture:new vu(v.textureWidth,v.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ie={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Bi(y.framebufferWidth,y.framebufferHeight,{format:Ln,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),f=null,u=await a.requestReferenceSpace(h),st.setContext(a),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function be(oe){for(let de=0;de<oe.removed.length;de++){const ie=oe.removed[de],ye=A.indexOf(ie);ye>=0&&(A[ye]=null,B[ye].disconnect(ie))}for(let de=0;de<oe.added.length;de++){const ie=oe.added[de];let ye=A.indexOf(ie);if(ye===-1){for(let tt=0;tt<B.length;tt++)if(tt>=A.length){A.push(ie),ye=tt;break}else if(A[tt]===null){A[tt]=ie,ye=tt;break}if(ye===-1)break}const Be=B[ye];Be&&Be.connect(ie)}}const se=new Z,Me=new Z;function we(oe,de,ie){se.setFromMatrixPosition(de.matrixWorld),Me.setFromMatrixPosition(ie.matrixWorld);const ye=se.distanceTo(Me),Be=de.projectionMatrix.elements,tt=ie.projectionMatrix.elements,At=Be[14]/(Be[10]-1),nt=Be[14]/(Be[10]+1),Et=(Be[9]+1)/Be[5],O=(Be[9]-1)/Be[5],ot=(Be[8]-1)/Be[0],ct=(tt[8]+1)/tt[0],Rt=At*ot,Ie=At*ct,Tt=ye/(-ot+ct),Ne=Tt*-ot;if(de.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ne),oe.translateZ(Tt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Be[10]===-1)oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $e=At+Tt,F=nt+Tt,w=Rt-Ne,X=Ie+(ye-Ne),re=Et*nt/F*$e,fe=O*nt/F*$e;oe.projectionMatrix.makePerspective(w,X,re,fe,$e,F),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Ge(oe,de){de===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(de.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(a===null)return;let de=oe.near,ie=oe.far;b.texture!==null&&(b.depthNear>0&&(de=b.depthNear),b.depthFar>0&&(ie=b.depthFar)),q.near=S.near=P.near=de,q.far=S.far=P.far=ie,(J!==q.near||ee!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),J=q.near,ee=q.far),q.layers.mask=oe.layers.mask|6,P.layers.mask=q.layers.mask&3,S.layers.mask=q.layers.mask&5;const ye=oe.parent,Be=q.cameras;Ge(q,ye);for(let tt=0;tt<Be.length;tt++)Ge(Be[tt],ye);Be.length===2?we(q,P,S):q.projectionMatrix.copy(P.projectionMatrix),at(oe,q,ye)};function at(oe,de,ie){ie===null?oe.matrix.copy(de.matrixWorld):(oe.matrix.copy(ie.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(de.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Uo*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(oe){p=oe,v!==null&&(v.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(q)},this.getCameraTexture=function(oe){return m[oe]};let _t=null;function Ze(oe,de){if(_=de.getViewerPose(f||u),C=de,_!==null){const ie=_.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let ye=!1;ie.length!==q.cameras.length&&(q.cameras.length=0,ye=!0);for(let nt=0;nt<ie.length;nt++){const Et=ie[nt];let O=null;if(y!==null)O=y.getViewport(Et);else{const ct=g.getViewSubImage(v,Et);O=ct.viewport,nt===0&&(e.setRenderTargetTextures(N,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(N))}let ot=G[nt];ot===void 0&&(ot=new Sn,ot.layers.enable(nt),ot.viewport=new Nt,G[nt]=ot),ot.matrix.fromArray(Et.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Et.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(O.x,O.y,O.width,O.height),nt===0&&(q.matrix.copy(ot.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ye===!0&&q.cameras.push(ot)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&D){g=n.getBinding();const nt=g.getDepthInformation(ie[0]);nt&&nt.isValid&&nt.texture&&b.init(nt,a.renderState)}if(Be&&Be.includes("camera-access")&&D){e.state.unbindTexture(),g=n.getBinding();for(let nt=0;nt<ie.length;nt++){const Et=ie[nt].camera;if(Et){let O=m[Et];O||(O=new yu,m[Et]=O);const ot=g.getCameraImage(Et);O.sourceTexture=ot}}}}for(let ie=0;ie<B.length;ie++){const ye=A[ie],Be=B[ie];ye!==null&&Be!==void 0&&Be.update(ye,de,f||u)}_t&&_t(oe,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),C=null}const st=new Mu;st.setAnimationLoop(Ze),this.setAnimationLoop=function(oe){_t=oe},this.dispose=function(){}}}const Fi=new Gn,By=new Bt;function zy(r,e){function t(b,m){b.matrixAutoUpdate===!0&&b.updateMatrix(),m.value.copy(b.matrix)}function n(b,m){m.color.getRGB(b.fogColor.value,_u(r)),m.isFog?(b.fogNear.value=m.near,b.fogFar.value=m.far):m.isFogExp2&&(b.fogDensity.value=m.density)}function a(b,m,U,L,N){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(b,m):m.isMeshToonMaterial?(o(b,m),g(b,m)):m.isMeshPhongMaterial?(o(b,m),_(b,m)):m.isMeshStandardMaterial?(o(b,m),v(b,m),m.isMeshPhysicalMaterial&&y(b,m,N)):m.isMeshMatcapMaterial?(o(b,m),C(b,m)):m.isMeshDepthMaterial?o(b,m):m.isMeshDistanceMaterial?(o(b,m),D(b,m)):m.isMeshNormalMaterial?o(b,m):m.isLineBasicMaterial?(u(b,m),m.isLineDashedMaterial&&h(b,m)):m.isPointsMaterial?p(b,m,U,L):m.isSpriteMaterial?f(b,m):m.isShadowMaterial?(b.color.value.copy(m.color),b.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(b,m){b.opacity.value=m.opacity,m.color&&b.diffuse.value.copy(m.color),m.emissive&&b.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.bumpMap&&(b.bumpMap.value=m.bumpMap,t(m.bumpMap,b.bumpMapTransform),b.bumpScale.value=m.bumpScale,m.side===fn&&(b.bumpScale.value*=-1)),m.normalMap&&(b.normalMap.value=m.normalMap,t(m.normalMap,b.normalMapTransform),b.normalScale.value.copy(m.normalScale),m.side===fn&&b.normalScale.value.negate()),m.displacementMap&&(b.displacementMap.value=m.displacementMap,t(m.displacementMap,b.displacementMapTransform),b.displacementScale.value=m.displacementScale,b.displacementBias.value=m.displacementBias),m.emissiveMap&&(b.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,b.emissiveMapTransform)),m.specularMap&&(b.specularMap.value=m.specularMap,t(m.specularMap,b.specularMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest);const U=e.get(m),L=U.envMap,N=U.envMapRotation;L&&(b.envMap.value=L,Fi.copy(N),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),b.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(Fi)),b.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=m.reflectivity,b.ior.value=m.ior,b.refractionRatio.value=m.refractionRatio),m.lightMap&&(b.lightMap.value=m.lightMap,b.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,b.lightMapTransform)),m.aoMap&&(b.aoMap.value=m.aoMap,b.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,b.aoMapTransform))}function u(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform))}function h(b,m){b.dashSize.value=m.dashSize,b.totalSize.value=m.dashSize+m.gapSize,b.scale.value=m.scale}function p(b,m,U,L){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.size.value=m.size*U,b.scale.value=L*.5,m.map&&(b.map.value=m.map,t(m.map,b.uvTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function f(b,m){b.diffuse.value.copy(m.color),b.opacity.value=m.opacity,b.rotation.value=m.rotation,m.map&&(b.map.value=m.map,t(m.map,b.mapTransform)),m.alphaMap&&(b.alphaMap.value=m.alphaMap,t(m.alphaMap,b.alphaMapTransform)),m.alphaTest>0&&(b.alphaTest.value=m.alphaTest)}function _(b,m){b.specular.value.copy(m.specular),b.shininess.value=Math.max(m.shininess,1e-4)}function g(b,m){m.gradientMap&&(b.gradientMap.value=m.gradientMap)}function v(b,m){b.metalness.value=m.metalness,m.metalnessMap&&(b.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,b.metalnessMapTransform)),b.roughness.value=m.roughness,m.roughnessMap&&(b.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,b.roughnessMapTransform)),m.envMap&&(b.envMapIntensity.value=m.envMapIntensity)}function y(b,m,U){b.ior.value=m.ior,m.sheen>0&&(b.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),b.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(b.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,b.sheenColorMapTransform)),m.sheenRoughnessMap&&(b.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,b.sheenRoughnessMapTransform))),m.clearcoat>0&&(b.clearcoat.value=m.clearcoat,b.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(b.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,b.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(b.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&b.clearcoatNormalScale.value.negate())),m.dispersion>0&&(b.dispersion.value=m.dispersion),m.iridescence>0&&(b.iridescence.value=m.iridescence,b.iridescenceIOR.value=m.iridescenceIOR,b.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(b.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,b.iridescenceMapTransform)),m.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),m.transmission>0&&(b.transmission.value=m.transmission,b.transmissionSamplerMap.value=U.texture,b.transmissionSamplerSize.value.set(U.width,U.height),m.transmissionMap&&(b.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,b.transmissionMapTransform)),b.thickness.value=m.thickness,m.thicknessMap&&(b.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=m.attenuationDistance,b.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(b.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(b.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=m.specularIntensity,b.specularColor.value.copy(m.specularColor),m.specularColorMap&&(b.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,b.specularColorMapTransform)),m.specularIntensityMap&&(b.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,b.specularIntensityMapTransform))}function C(b,m){m.matcap&&(b.matcap.value=m.matcap)}function D(b,m){const U=e.get(m).light;b.referencePosition.value.setFromMatrixPosition(U.matrixWorld),b.nearDistance.value=U.shadow.camera.near,b.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Vy(r,e,t,n){let a={},o={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,L){const N=L.program;n.uniformBlockBinding(U,N)}function f(U,L){let N=a[U.id];N===void 0&&(C(U),N=_(U),a[U.id]=N,U.addEventListener("dispose",b));const B=L.program;n.updateUBOMapping(U,B);const A=e.render.frame;o[U.id]!==A&&(v(U),o[U.id]=A)}function _(U){const L=g();U.__bindingPointIndex=L;const N=r.createBuffer(),B=U.__size,A=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,B,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function g(){for(let U=0;U<h;U++)if(u.indexOf(U)===-1)return u.push(U),U;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const L=a[U.id],N=U.uniforms,B=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let A=0,V=N.length;A<V;A++){const K=Array.isArray(N[A])?N[A]:[N[A]];for(let P=0,S=K.length;P<S;P++){const G=K[P];if(y(G,A,P,B)===!0){const q=G.__offset,J=Array.isArray(G.value)?G.value:[G.value];let ee=0;for(let ue=0;ue<J.length;ue++){const ce=J[ue],be=D(ce);typeof ce=="number"||typeof ce=="boolean"?(G.__data[0]=ce,r.bufferSubData(r.UNIFORM_BUFFER,q+ee,G.__data)):ce.isMatrix3?(G.__data[0]=ce.elements[0],G.__data[1]=ce.elements[1],G.__data[2]=ce.elements[2],G.__data[3]=0,G.__data[4]=ce.elements[3],G.__data[5]=ce.elements[4],G.__data[6]=ce.elements[5],G.__data[7]=0,G.__data[8]=ce.elements[6],G.__data[9]=ce.elements[7],G.__data[10]=ce.elements[8],G.__data[11]=0):(ce.toArray(G.__data,ee),ee+=be.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(U,L,N,B){const A=U.value,V=L+"_"+N;if(B[V]===void 0)return typeof A=="number"||typeof A=="boolean"?B[V]=A:B[V]=A.clone(),!0;{const K=B[V];if(typeof A=="number"||typeof A=="boolean"){if(K!==A)return B[V]=A,!0}else if(K.equals(A)===!1)return K.copy(A),!0}return!1}function C(U){const L=U.uniforms;let N=0;const B=16;for(let V=0,K=L.length;V<K;V++){const P=Array.isArray(L[V])?L[V]:[L[V]];for(let S=0,G=P.length;S<G;S++){const q=P[S],J=Array.isArray(q.value)?q.value:[q.value];for(let ee=0,ue=J.length;ee<ue;ee++){const ce=J[ee],be=D(ce),se=N%B,Me=se%be.boundary,we=se+Me;N+=Me,we!==0&&B-we<be.storage&&(N+=B-we),q.__data=new Float32Array(be.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=be.storage}}}const A=N%B;return A>0&&(N+=B-A),U.__size=N,U.__cache={},this}function D(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",U),L}function b(U){const L=U.target;L.removeEventListener("dispose",b);const N=u.indexOf(L.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function m(){for(const U in a)r.deleteBuffer(a[U]);u=[],a={},o={}}return{bind:p,update:f,dispose:m}}const Gy=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Zn=null;function Hy(){return Zn===null&&(Zn=new X0(Gy,32,32,Go,mr),Zn.minFilter=bn,Zn.magFilter=bn,Zn.wrapS=ei,Zn.wrapT=ei,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class Wy{constructor(e={}){const{canvas:t=_0(),context:n=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:f=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=u;const C=new Set([Wo,Ho,Vo]),D=new Set([Vn,Oi,Ir,Ur,Bo,zo]),b=new Uint32Array(4),m=new Int32Array(4);let U=null,L=null;const N=[],B=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let V=!1;this._outputColorSpace=ln;let K=0,P=0,S=null,G=-1,q=null;const J=new Nt,ee=new Nt;let ue=null;const ce=new mt(0);let be=0,se=t.width,Me=t.height,we=1,Ge=null,at=null;const _t=new Nt(0,0,se,Me),Ze=new Nt(0,0,se,Me);let st=!1;const oe=new qo;let de=!1,ie=!1;const ye=new Bt,Be=new Z,tt=new Nt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Et(){return S===null?we:1}let O=n;function ot(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:a,stencil:o,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:f,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Le,!1),O===null){const W="webgl2";if(O=ot(W,R),O===null)throw ot(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ct,Rt,Ie,Tt,Ne,$e,F,w,X,re,fe,ne,ke,Ae,He,Oe,me,Ee,je,We,De,Ye,k,Re;function Te(){ct=new Jg(O),ct.init(),Ye=new Iy(O,ct),Rt=new Hg(O,ct,e,Ye),Ie=new Ly(O,ct),Rt.reversedDepthBuffer&&v&&Ie.buffers.depth.setReversed(!0),Tt=new tv(O),Ne=new vy,$e=new Fy(O,ct,Ie,Ne,Rt,Ye,Tt),F=new Xg(A),w=new Zg(A),X=new s_(O),k=new Vg(O,X),re=new Qg(O,X,Tt,k),fe=new iv(O,re,X,Tt),je=new nv(O,Rt,$e),Oe=new Wg(Ne),ne=new gy(A,F,w,ct,Rt,k,Oe),ke=new zy(A,Ne),Ae=new Sy,He=new Ay(ct),Ee=new zg(A,F,w,Ie,fe,y,p),me=new Py(A,fe,Rt),Re=new Vy(O,Tt,Rt,Ie),We=new Gg(O,ct,Tt),De=new ev(O,ct,Tt),Tt.programs=ne.programs,A.capabilities=Rt,A.extensions=ct,A.properties=Ne,A.renderLists=Ae,A.shadowMap=me,A.state=Ie,A.info=Tt}Te();const Se=new ky(A,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(R){R!==void 0&&(we=R,this.setSize(se,Me,!1))},this.getSize=function(R){return R.set(se,Me)},this.setSize=function(R,W,te=!0){if(Se.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,Me=W,t.width=Math.floor(R*we),t.height=Math.floor(W*we),te===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(se*we,Me*we).floor()},this.setDrawingBufferSize=function(R,W,te){se=R,Me=W,we=te,t.width=Math.floor(R*te),t.height=Math.floor(W*te),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(J)},this.getViewport=function(R){return R.copy(_t)},this.setViewport=function(R,W,te,Q){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,W,te,Q),Ie.viewport(J.copy(_t).multiplyScalar(we).round())},this.getScissor=function(R){return R.copy(Ze)},this.setScissor=function(R,W,te,Q){R.isVector4?Ze.set(R.x,R.y,R.z,R.w):Ze.set(R,W,te,Q),Ie.scissor(ee.copy(Ze).multiplyScalar(we).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(R){Ie.setScissorTest(st=R)},this.setOpaqueSort=function(R){Ge=R},this.setTransparentSort=function(R){at=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,te=!0){let Q=0;if(R){let j=!1;if(S!==null){const ve=S.texture.format;j=C.has(ve)}if(j){const ve=S.texture.type,Pe=D.has(ve),Fe=Ee.getClearColor(),Ue=Ee.getClearAlpha(),ge=Fe.r,qe=Fe.g,ze=Fe.b;Pe?(b[0]=ge,b[1]=qe,b[2]=ze,b[3]=Ue,O.clearBufferuiv(O.COLOR,0,b)):(m[0]=ge,m[1]=qe,m[2]=ze,m[3]=Ue,O.clearBufferiv(O.COLOR,0,m))}else Q|=O.COLOR_BUFFER_BIT}W&&(Q|=O.DEPTH_BUFFER_BIT),te&&(Q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ee.dispose(),Ae.dispose(),He.dispose(),Ne.dispose(),F.dispose(),w.dispose(),fe.dispose(),k.dispose(),Re.dispose(),ne.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Xr),Se.removeEventListener("sessionend",$r),Yt.stop()};function H(R){R.preventDefault(),Jc("WebGLRenderer: Context Lost."),V=!0}function z(){Jc("WebGLRenderer: Context Restored."),V=!1;const R=Tt.autoReset,W=me.enabled,te=me.autoUpdate,Q=me.needsUpdate,j=me.type;Te(),Tt.autoReset=R,me.enabled=W,me.autoUpdate=te,me.needsUpdate=Q,me.type=j}function Le(R){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ke(R){const W=R.target;W.removeEventListener("dispose",Ke),gt(W)}function gt(R){lt(R),Ne.remove(R)}function lt(R){const W=Ne.get(R).programs;W!==void 0&&(W.forEach(function(te){ne.releaseProgram(te)}),R.isShaderMaterial&&ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,te,Q,j,ve){W===null&&(W=At);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,Fe=Ys(R,W,te,Q,j);Ie.setMaterial(Q,Pe);let Ue=te.index,ge=1;if(Q.wireframe===!0){if(Ue=re.getWireframeAttribute(te),Ue===void 0)return;ge=2}const qe=te.drawRange,ze=te.attributes.position;let ut=qe.start*ge,yt=(qe.start+qe.count)*ge;ve!==null&&(ut=Math.max(ut,ve.start*ge),yt=Math.min(yt,(ve.start+ve.count)*ge)),Ue!==null?(ut=Math.max(ut,0),yt=Math.min(yt,Ue.count)):ze!=null&&(ut=Math.max(ut,0),yt=Math.min(yt,ze.count));const Ut=yt-ut;if(Ut<0||Ut===1/0)return;k.setup(j,Q,Fe,te,Ue);let Ft,wt=We;if(Ue!==null&&(Ft=X.get(Ue),wt=De,wt.setIndex(Ft)),j.isMesh)Q.wireframe===!0?(Ie.setLineWidth(Q.wireframeLinewidth*Et()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(j.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),Ie.setLineWidth(Ve*Et()),j.isLineSegments?wt.setMode(O.LINES):j.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else j.isPoints?wt.setMode(O.POINTS):j.isSprite&&wt.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)kr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))wt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ve=j._multiDrawStarts,It=j._multiDrawCounts,ft=j._multiDrawCount,E=Ue?X.get(Ue).bytesPerElement:1,St=Ne.get(Q).currentProgram.getUniforms();for(let an=0;an<ft;an++)St.setValue(O,"_gl_DrawID",an),wt.render(Ve[an]/E,It[an])}else if(j.isInstancedMesh)wt.renderInstances(ut,Ut,j.count);else if(te.isInstancedBufferGeometry){const Ve=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,It=Math.min(te.instanceCount,Ve);wt.renderInstances(ut,Ut,It)}else wt.render(ut,Ut)};function gn(R,W,te){R.transparent===!0&&R.side===Qn&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,Hi(R,W,te),R.side=gi,R.needsUpdate=!0,Hi(R,W,te),R.side=Qn):Hi(R,W,te)}this.compile=function(R,W,te=null){te===null&&(te=R),L=He.get(te),L.init(W),B.push(L),te.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(L.pushLight(j),j.castShadow&&L.pushShadow(j))}),R!==te&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(L.pushLight(j),j.castShadow&&L.pushShadow(j))}),L.setupLights();const Q=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let Pe=0;Pe<ve.length;Pe++){const Fe=ve[Pe];gn(Fe,te,j),Q.add(Fe)}else gn(ve,te,j),Q.add(ve)}),L=B.pop(),Q},this.compileAsync=function(R,W,te=null){const Q=this.compile(R,W,te);return new Promise(j=>{function ve(){if(Q.forEach(function(Pe){Ne.get(Pe).currentProgram.isReady()&&Q.delete(Pe)}),Q.size===0){j(R);return}setTimeout(ve,10)}ct.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ot=null;function Gi(R){Ot&&Ot(R)}function Xr(){Yt.stop()}function $r(){Yt.start()}const Yt=new Mu;Yt.setAnimationLoop(Gi),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(R){Ot=R,Se.setAnimationLoop(R),R===null?Yt.stop():Yt.start()},Se.addEventListener("sessionstart",Xr),Se.addEventListener("sessionend",$r),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(W),W=Se.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,S),L=He.get(R,B.length),L.init(W),B.push(L),ye.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),oe.setFromProjectionMatrix(ye,Bn,W.reversedDepth),ie=this.localClippingEnabled,de=Oe.init(this.clippingPlanes,ie),U=Ae.get(R,N.length),U.init(),N.push(U),Se.enabled===!0&&Se.isPresenting===!0){const ve=A.xr.getDepthSensingMesh();ve!==null&&gr(ve,W,-1/0,A.sortObjects)}gr(R,W,0,A.sortObjects),U.finish(),A.sortObjects===!0&&U.sort(Ge,at),nt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,nt&&Ee.addToRenderList(U,R),this.info.render.frame++,de===!0&&Oe.beginShadows();const te=L.state.shadowsArray;me.render(te,R,W),de===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=U.opaque,j=U.transmissive;if(L.setupLights(),W.isArrayCamera){const ve=W.cameras;if(j.length>0)for(let Pe=0,Fe=ve.length;Pe<Fe;Pe++){const Ue=ve[Pe];Si(Q,j,R,Ue)}nt&&Ee.render(R);for(let Pe=0,Fe=ve.length;Pe<Fe;Pe++){const Ue=ve[Pe];yi(U,R,Ue,Ue.viewport)}}else j.length>0&&Si(Q,j,R,W),nt&&Ee.render(R),yi(U,R,W);S!==null&&P===0&&($e.updateMultisampleRenderTarget(S),$e.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(A,R,W),k.resetDefaultState(),G=-1,q=null,B.pop(),B.length>0?(L=B[B.length-1],de===!0&&Oe.setGlobalState(A.clippingPlanes,L.state.camera)):L=null,N.pop(),N.length>0?U=N[N.length-1]:U=null};function gr(R,W,te,Q){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||oe.intersectsSprite(R)){Q&&tt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const Pe=fe.update(R),Fe=R.material;Fe.visible&&U.push(R,Pe,Fe,te,tt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||oe.intersectsObject(R))){const Pe=fe.update(R),Fe=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),tt.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),tt.copy(Pe.boundingSphere.center)),tt.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Fe)){const Ue=Pe.groups;for(let ge=0,qe=Ue.length;ge<qe;ge++){const ze=Ue[ge],ut=Fe[ze.materialIndex];ut&&ut.visible&&U.push(R,Pe,ut,te,tt.z,ze)}}else Fe.visible&&U.push(R,Pe,Fe,te,tt.z,null)}}const ve=R.children;for(let Pe=0,Fe=ve.length;Pe<Fe;Pe++)gr(ve[Pe],W,te,Q)}function yi(R,W,te,Q){const{opaque:j,transmissive:ve,transparent:Pe}=R;L.setupLightsView(te),de===!0&&Oe.setGlobalState(A.clippingPlanes,te),Q&&Ie.viewport(J.copy(Q)),j.length>0&&ai(j,W,te),ve.length>0&&ai(ve,W,te),Pe.length>0&&ai(Pe,W,te),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Si(R,W,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[Q.id]===void 0&&(L.state.transmissionRenderTarget[Q.id]=new Bi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?mr:Vn,minFilter:Ni,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ve=L.state.transmissionRenderTarget[Q.id],Pe=Q.viewport||J;ve.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);const Fe=A.getRenderTarget(),Ue=A.getActiveCubeFace(),ge=A.getActiveMipmapLevel();A.setRenderTarget(ve),A.getClearColor(ce),be=A.getClearAlpha(),be<1&&A.setClearColor(16777215,.5),A.clear(),nt&&Ee.render(te);const qe=A.toneMapping;A.toneMapping=xi;const ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),L.setupLightsView(Q),de===!0&&Oe.setGlobalState(A.clippingPlanes,Q),ai(R,te,Q),$e.updateMultisampleRenderTarget(ve),$e.updateRenderTargetMipmap(ve),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let yt=0,Ut=W.length;yt<Ut;yt++){const Ft=W[yt],{object:wt,geometry:Ve,material:It,group:ft}=Ft;if(It.side===Qn&&wt.layers.test(Q.layers)){const E=It.side;It.side=fn,It.needsUpdate=!0,jr(wt,te,Q,Ve,It,ft),It.side=E,It.needsUpdate=!0,ut=!0}}ut===!0&&($e.updateMultisampleRenderTarget(ve),$e.updateRenderTargetMipmap(ve))}A.setRenderTarget(Fe,Ue,ge),A.setClearColor(ce,be),ze!==void 0&&(Q.viewport=ze),A.toneMapping=qe}function ai(R,W,te){const Q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,ve=R.length;j<ve;j++){const Pe=R[j],{object:Fe,geometry:Ue,group:ge}=Pe;let qe=Pe.material;qe.allowOverride===!0&&Q!==null&&(qe=Q),Fe.layers.test(te.layers)&&jr(Fe,W,te,Ue,qe,ge)}}function jr(R,W,te,Q,j,ve){R.onBeforeRender(A,W,te,Q,j,ve),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(A,W,te,Q,R,ve),j.transparent===!0&&j.side===Qn&&j.forceSinglePass===!1?(j.side=fn,j.needsUpdate=!0,A.renderBufferDirect(te,W,Q,j,R,ve),j.side=gi,j.needsUpdate=!0,A.renderBufferDirect(te,W,Q,j,R,ve),j.side=Qn):A.renderBufferDirect(te,W,Q,j,R,ve),R.onAfterRender(A,W,te,Q,j,ve)}function Hi(R,W,te){W.isScene!==!0&&(W=At);const Q=Ne.get(R),j=L.state.lights,ve=L.state.shadowsArray,Pe=j.state.version,Fe=ne.getParameters(R,j.state,ve,W,te),Ue=ne.getProgramCacheKey(Fe);let ge=Q.programs;Q.environment=R.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(R.isMeshStandardMaterial?w:F).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ge===void 0&&(R.addEventListener("dispose",Ke),ge=new Map,Q.programs=ge);let qe=ge.get(Ue);if(qe!==void 0){if(Q.currentProgram===qe&&Q.lightsStateVersion===Pe)return vr(R,Fe),qe}else Fe.uniforms=ne.getUniforms(R),R.onBeforeCompile(Fe,A),qe=ne.acquireProgram(Fe,Ue),ge.set(Ue,qe),Q.uniforms=Fe.uniforms;const ze=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=Oe.uniform),vr(R,Fe),Q.needsLights=Zs(R),Q.lightsStateVersion=Pe,Q.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=qe,Q.uniformsList=null,qe}function qr(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Os.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function vr(R,W){const te=Ne.get(R);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function Ys(R,W,te,Q,j){W.isScene!==!0&&(W=At),$e.resetTextureUnits();const ve=W.fog,Pe=Q.isMeshStandardMaterial?W.environment:null,Fe=S===null?A.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:fr,Ue=(Q.isMeshStandardMaterial?w:F).get(Q.envMap||Pe),ge=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,qe=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ze=!!te.morphAttributes.position,ut=!!te.morphAttributes.normal,yt=!!te.morphAttributes.color;let Ut=xi;Q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ut=A.toneMapping);const Ft=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,wt=Ft!==void 0?Ft.length:0,Ve=Ne.get(Q),It=L.state.lights;if(de===!0&&(ie===!0||R!==q)){const Kt=R===q&&Q.id===G;Oe.setState(Q,R,Kt)}let ft=!1;Q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==It.state.version||Ve.outputColorSpace!==Fe||j.isBatchedMesh&&Ve.batching===!1||!j.isBatchedMesh&&Ve.batching===!0||j.isBatchedMesh&&Ve.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ve.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||j.isInstancedMesh&&Ve.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ve.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ve.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ve.instancingMorph===!1&&j.morphTexture!==null||Ve.envMap!==Ue||Q.fog===!0&&Ve.fog!==ve||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Oe.numPlanes||Ve.numIntersection!==Oe.numIntersection)||Ve.vertexAlphas!==ge||Ve.vertexTangents!==qe||Ve.morphTargets!==ze||Ve.morphNormals!==ut||Ve.morphColors!==yt||Ve.toneMapping!==Ut||Ve.morphTargetsCount!==wt)&&(ft=!0):(ft=!0,Ve.__version=Q.version);let E=Ve.currentProgram;ft===!0&&(E=Hi(Q,W,j));let St=!1,an=!1,Fn=!1;const Mt=E.getUniforms(),Jt=Ve.uniforms;if(Ie.useProgram(E.program)&&(St=!0,an=!0,Fn=!0),Q.id!==G&&(G=Q.id,an=!0),St||q!==R){Ie.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Mt.setValue(O,"projectionMatrix",R.projectionMatrix),Mt.setValue(O,"viewMatrix",R.matrixWorldInverse);const Qt=Mt.map.cameraPosition;Qt!==void 0&&Qt.setValue(O,Be.setFromMatrixPosition(R.matrixWorld)),Rt.logarithmicDepthBuffer&&Mt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Mt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,an=!0,Fn=!0)}if(j.isSkinnedMesh){Mt.setOptional(O,j,"bindMatrix"),Mt.setOptional(O,j,"bindMatrixInverse");const Kt=j.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Mt.setValue(O,"boneTexture",Kt.boneTexture,$e))}j.isBatchedMesh&&(Mt.setOptional(O,j,"batchingTexture"),Mt.setValue(O,"batchingTexture",j._matricesTexture,$e),Mt.setOptional(O,j,"batchingIdTexture"),Mt.setValue(O,"batchingIdTexture",j._indirectTexture,$e),Mt.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&Mt.setValue(O,"batchingColorTexture",j._colorsTexture,$e));const un=te.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&je.update(j,te,E),(an||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,Mt.setValue(O,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Jt.envMap.value=Ue,Jt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Jt.envMapIntensity.value=W.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=Hy()),an&&(Mt.setValue(O,"toneMappingExposure",A.toneMappingExposure),Ve.needsLights&&Ks(Jt,Fn),ve&&Q.fog===!0&&ke.refreshFogUniforms(Jt,ve),ke.refreshMaterialUniforms(Jt,Q,we,Me,L.state.transmissionRenderTarget[R.id]),Os.upload(O,qr(Ve),Jt,$e)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Os.upload(O,qr(Ve),Jt,$e),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Mt.setValue(O,"center",j.center),Mt.setValue(O,"modelViewMatrix",j.modelViewMatrix),Mt.setValue(O,"normalMatrix",j.normalMatrix),Mt.setValue(O,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Kt=Q.uniformsGroups;for(let Qt=0,yr=Kt.length;Qt<yr;Qt++){const Xn=Kt[Qt];Re.update(Xn,E),Re.bind(Xn,E)}}return E}function Ks(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Zs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,W,te){const Q=Ne.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Ne.get(R.texture).__webglTexture=W,Ne.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const te=Ne.get(R);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0};const Js=O.createFramebuffer();this.setRenderTarget=function(R,W=0,te=0){S=R,K=W,P=te;let Q=!0,j=null,ve=!1,Pe=!1;if(R){const Ue=Ne.get(R);if(Ue.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(O.FRAMEBUFFER,null),Q=!1;else if(Ue.__webglFramebuffer===void 0)$e.setupRenderTarget(R);else if(Ue.__hasExternalTextures)$e.rebindTextures(R,Ne.get(R.texture).__webglTexture,Ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ze=R.depthTexture;if(Ue.__boundDepthTexture!==ze){if(ze!==null&&Ne.has(ze)&&(R.width!==ze.image.width||R.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(R)}}const ge=R.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(Pe=!0);const qe=Ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[W])?j=qe[W][te]:j=qe[W],ve=!0):R.samples>0&&$e.useMultisampledRTT(R)===!1?j=Ne.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?j=qe[te]:j=qe,J.copy(R.viewport),ee.copy(R.scissor),ue=R.scissorTest}else J.copy(_t).multiplyScalar(we).floor(),ee.copy(Ze).multiplyScalar(we).floor(),ue=st;if(te!==0&&(j=Js),Ie.bindFramebuffer(O.FRAMEBUFFER,j)&&Q&&Ie.drawBuffers(R,j),Ie.viewport(J),Ie.scissor(ee),Ie.setScissorTest(ue),ve){const Ue=Ne.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,te)}else if(Pe){const Ue=W;for(let ge=0;ge<R.textures.length;ge++){const qe=Ne.get(R.textures[ge]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ge,qe.__webglTexture,te,Ue)}}else if(R!==null&&te!==0){const Ue=Ne.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ue.__webglTexture,te)}G=-1},this.readRenderTargetPixels=function(R,W,te,Q,j,ve,Pe,Fe=0){if(!(R&&R.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){Ie.bindFramebuffer(O.FRAMEBUFFER,Ue);try{const ge=R.textures[Fe],qe=ge.format,ze=ge.type;if(!Rt.textureFormatReadable(qe)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(ze)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Q&&te>=0&&te<=R.height-j&&(R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Fe),O.readPixels(W,te,Q,j,Ye.convert(qe),Ye.convert(ze),ve))}finally{const ge=S!==null?Ne.get(S).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(R,W,te,Q,j,ve,Pe,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(W>=0&&W<=R.width-Q&&te>=0&&te<=R.height-j){Ie.bindFramebuffer(O.FRAMEBUFFER,Ue);const ge=R.textures[Fe],qe=ge.format,ze=ge.type;if(!Rt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.bufferData(O.PIXEL_PACK_BUFFER,ve.byteLength,O.STREAM_READ),R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Fe),O.readPixels(W,te,Q,j,Ye.convert(qe),Ye.convert(ze),0);const yt=S!==null?Ne.get(S).__webglFramebuffer:null;Ie.bindFramebuffer(O.FRAMEBUFFER,yt);const Ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await x0(O,Ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ve),O.deleteBuffer(ut),O.deleteSync(Ut),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,te=0){const Q=Math.pow(2,-te),j=Math.floor(R.image.width*Q),ve=Math.floor(R.image.height*Q),Pe=W!==null?W.x:0,Fe=W!==null?W.y:0;$e.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,Pe,Fe,j,ve),Ie.unbindTexture()};const bt=O.createFramebuffer(),Qs=O.createFramebuffer();this.copyTextureToTexture=function(R,W,te=null,Q=null,j=0,ve=null){ve===null&&(j!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=j,j=0):ve=0);let Pe,Fe,Ue,ge,qe,ze,ut,yt,Ut;const Ft=R.isCompressedTexture?R.mipmaps[ve]:R.image;if(te!==null)Pe=te.max.x-te.min.x,Fe=te.max.y-te.min.y,Ue=te.isBox3?te.max.z-te.min.z:1,ge=te.min.x,qe=te.min.y,ze=te.isBox3?te.min.z:0;else{const un=Math.pow(2,-j);Pe=Math.floor(Ft.width*un),Fe=Math.floor(Ft.height*un),R.isDataArrayTexture?Ue=Ft.depth:R.isData3DTexture?Ue=Math.floor(Ft.depth*un):Ue=1,ge=0,qe=0,ze=0}Q!==null?(ut=Q.x,yt=Q.y,Ut=Q.z):(ut=0,yt=0,Ut=0);const wt=Ye.convert(W.format),Ve=Ye.convert(W.type);let It;W.isData3DTexture?($e.setTexture3D(W,0),It=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?($e.setTexture2DArray(W,0),It=O.TEXTURE_2D_ARRAY):($e.setTexture2D(W,0),It=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const ft=O.getParameter(O.UNPACK_ROW_LENGTH),E=O.getParameter(O.UNPACK_IMAGE_HEIGHT),St=O.getParameter(O.UNPACK_SKIP_PIXELS),an=O.getParameter(O.UNPACK_SKIP_ROWS),Fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ze);const Mt=R.isDataArrayTexture||R.isData3DTexture,Jt=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const un=Ne.get(R),Kt=Ne.get(W),Qt=Ne.get(un.__renderTarget),yr=Ne.get(Kt.__renderTarget);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let Xn=0;Xn<Ue;Xn++)Mt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(R).__webglTexture,j,ze+Xn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(W).__webglTexture,ve,Ut+Xn)),O.blitFramebuffer(ge,qe,Pe,Fe,ut,yt,Pe,Fe,O.DEPTH_BUFFER_BIT,O.NEAREST);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Ne.has(R)){const un=Ne.get(R),Kt=Ne.get(W);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,bt),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qs);for(let Qt=0;Qt<Ue;Qt++)Mt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,un.__webglTexture,j,ze+Qt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,un.__webglTexture,j),Jt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,ve,Ut+Qt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,ve),j!==0?O.blitFramebuffer(ge,qe,Pe,Fe,ut,yt,Pe,Fe,O.COLOR_BUFFER_BIT,O.NEAREST):Jt?O.copyTexSubImage3D(It,ve,ut,yt,Ut+Qt,ge,qe,Pe,Fe):O.copyTexSubImage2D(It,ve,ut,yt,ge,qe,Pe,Fe);Ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Jt?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(It,ve,ut,yt,Ut,Pe,Fe,Ue,wt,Ve,Ft.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(It,ve,ut,yt,Ut,Pe,Fe,Ue,wt,Ft.data):O.texSubImage3D(It,ve,ut,yt,Ut,Pe,Fe,Ue,wt,Ve,Ft):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ve,ut,yt,Pe,Fe,wt,Ve,Ft.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ve,ut,yt,Ft.width,Ft.height,wt,Ft.data):O.texSubImage2D(O.TEXTURE_2D,ve,ut,yt,Pe,Fe,wt,Ve,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,ft),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,E),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,an),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Fn),ve===0&&W.generateMipmaps&&O.generateMipmap(It),Ie.unbindTexture()},this.initRenderTarget=function(R){Ne.get(R).__webglFramebuffer===void 0&&$e.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$e.setTextureCube(R,0):R.isData3DTexture?$e.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$e.setTexture2DArray(R,0):$e.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){K=0,P=0,S=null,Ie.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const Gl={type:"change"},Jo={type:"start"},Cu={type:"end"},Ds=new uu,Hl=new fi,Xy=Math.cos(70*v0.DEG2RAD),Wt=new Z,dn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wa=1e-6;class $y extends i_{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new ki,this._lastTargetPosition=new Z,this._quat=new ki().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xl,this._sphericalDelta=new xl,this._scale=1,this._panOffset=new Z,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new Z,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qy.bind(this),this._onPointerDown=jy.bind(this),this._onPointerUp=Yy.bind(this),this._onContextMenu=nS.bind(this),this._onMouseWheel=Jy.bind(this),this._onKeyDown=Qy.bind(this),this._onTouchStart=eS.bind(this),this._onTouchMove=tS.bind(this),this._onMouseDown=Ky.bind(this),this._onMouseMove=Zy.bind(this),this._interceptControlDown=iS.bind(this),this._interceptControlUp=rS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gl),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(n)&&isFinite(a)&&(n<-Math.PI?n+=dn:n>Math.PI&&(n-=dn),a<-Math.PI?a+=dn:a>Math.PI&&(a-=dn),n<=a?this._spherical.theta=Math.max(n,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+a)/2?Math.max(n,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=u!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=Wt.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),o=!!p}else if(this.object.isOrthographicCamera){const h=new Z(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=p!==this.object.zoom;const f=new Z(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),u=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Ds.origin.copy(this.object.position),Ds.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ds.direction))<Xy?this.object.lookAt(this.target):(Hl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ds.intersectPlane(Hl,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Wa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wa||this._lastTargetPosition.distanceToSquared(this.target)>Wa?(this.dispatchEvent(Gl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Wt.copy(a).sub(this.target);let o=Wt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),a=e-n.left,o=t-n.top,u=n.width,h=n.height;this._mouse.x=a/u*2-1,this._mouse.y=-(o/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(n,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(n,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(n,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(n*n+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function jy(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function qy(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Yy(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cu),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ky(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Dt.DOLLY;break;case or.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Dt.ROTATE}break;case or.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Jo)}function Zy(r){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Jy(r){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(r.preventDefault(),this.dispatchEvent(Jo),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Cu))}function Qy(r){this.enabled!==!1&&this._handleKeyDown(r)}function eS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Dt.TOUCH_ROTATE;break;case ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Dt.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Jo)}function tS(r){switch(this._trackPointer(r),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Dt.NONE}}function nS(r){this.enabled!==!1&&r.preventDefault()}function iS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rS(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const sS="modulepreload",aS=function(r,e){return new URL(r,e).href},Wl={},oS=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),p=h?.nonce||h?.getAttribute("nonce");a=Promise.allSettled(t.map(f=>{if(f=aS(f,n),f in Wl)return;Wl[f]=!0;const _=f.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(!!n)for(let C=u.length-1;C>=0;C--){const D=u[C];if(D.href===f&&(!_||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${g}`))return;const y=document.createElement("link");if(y.rel=_?"stylesheet":sS,_||(y.as="script"),y.crossOrigin="",y.href=f,p&&y.setAttribute("nonce",p),document.head.appendChild(y),_)return new Promise((C,D)=>{y.addEventListener("load",C),y.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return a.then(u=>{for(const h of u||[])h.status==="rejected"&&o(h.reason);return e().catch(o)})};var cS=(async function(r={}){var e,t=r,n=typeof window=="object",a=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",u=!n&&!o&&!a;if(o){const{createRequire:i}=await oS(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>vS);return{createRequire:s}},void 0,import.meta.url);var h=i(import.meta.url)}var p="./this.program",f=(i,s)=>{throw s},_=import.meta.url,g="";function v(i){return t.locateFile?t.locateFile(i,g):g+i}var y,C;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var D=process.versions.node,b=D.split(".").slice(0,3);if(b=b[0]*1e4+b[1]*100+b[2].split("-")[0]*1,b<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+D+")");var m=h("fs");_.startsWith("file:")&&(g=h("path").dirname(h("url").fileURLToPath(_))+"/"),C=s=>{s=V(s)?new URL(s):s;var c=m.readFileSync(s);return A(Buffer.isBuffer(c)),c},y=async(s,c=!0)=>{s=V(s)?new URL(s):s;var l=m.readFileSync(s,c?void 0:"utf8");return A(c?Buffer.isBuffer(l):typeof l=="string"),l},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),f=(s,c)=>{throw process.exitCode=s,c}}else if(u){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||a){try{g=new URL(".",_).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");a&&(C=i=>{var s=new XMLHttpRequest;return s.open("GET",i,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),y=async i=>{if(V(i))return new Promise((c,l)=>{var d=new XMLHttpRequest;d.open("GET",i,!0),d.responseType="arraybuffer",d.onload=()=>{if(d.status==200||d.status==0&&d.response){c(d.response);return}l(d.status)},d.onerror=l,d.send(null)});var s=await fetch(i,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var U=console.log.bind(console),L=console.error.bind(console);A(!u,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var N;typeof WebAssembly!="object"&&L("no native wasm support detected");var B=!1;function A(i,s){i||X("Assertion failed"+(s?": "+s:""))}var V=i=>i.startsWith("file://");function K(){var i=ha();A((i&3)==0),i==0&&(i+=4),ye[i>>2]=34821223,ye[i+4>>2]=2310721022,ye[0]=1668509029}function P(){if(!B){var i=ha();i==0&&(i+=4);var s=ye[i>>2],c=ye[i+4>>2];(s!=34821223||c!=2310721022)&&X(`Stack overflow! Stack cookie has been overwritten at ${Se(i)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Se(c)} ${Se(s)}`),ye[0]!=1668509029&&X("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class S extends Error{}class G extends S{}class q extends S{constructor(s){super(s),this.excPtr=s;const c=Cc(s);this.name=c[0],this.message=c[1]}}(()=>{var i=new Int16Array(1),s=new Int8Array(i.buffer);if(i[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function J(i){Object.getOwnPropertyDescriptor(t,i)||Object.defineProperty(t,i,{configurable:!0,set(){X(`Attempt to set \`Module.${i}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function ee(i){return()=>A(!1,`call to '${i}' via reference taken before Wasm module initialization`)}function ue(i){Object.getOwnPropertyDescriptor(t,i)&&X(`\`Module.${i}\` was supplied but \`${i}\` not included in INCOMING_MODULE_JS_API`)}function ce(i){return i==="FS_createPath"||i==="FS_createDataFile"||i==="FS_createPreloadedFile"||i==="FS_unlink"||i==="addRunDependency"||i==="FS_createLazyFile"||i==="FS_createDevice"||i==="removeRunDependency"}function be(i,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,i)&&Object.defineProperty(globalThis,i,{configurable:!0,get(){s()}})}function se(i,s){be(i,()=>{Le(`\`${i}\` is not longer defined by emscripten. ${s}`)})}se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),se("asm","Please use wasmExports instead");function Me(i){be(i,()=>{var s=`\`${i}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=i;c.startsWith("_")||(c="$"+i),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`,ce(i)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Le(s)}),we(i)}function we(i){Object.getOwnPropertyDescriptor(t,i)||Object.defineProperty(t,i,{configurable:!0,get(){var s=`'${i}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ce(i)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),X(s)}})}var Ge,at,_t,Ze,st,oe,de,ie,ye,Be,tt,At,nt,Et=!1;function O(){var i=_t.buffer;Ze=new Int8Array(i),oe=new Int16Array(i),st=new Uint8Array(i),de=new Uint16Array(i),ie=new Int32Array(i),ye=new Uint32Array(i),Be=new Float32Array(i),tt=new Float64Array(i),At=new BigInt64Array(i),nt=new BigUint64Array(i)}A(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function ot(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Re(t.preRun.shift());J("preRun"),We(k)}function ct(){A(!Et),Et=!0,P(),!t.noFSInit&&!E.initialized&&E.init(),wi.__wasm_call_ctors(),E.ignorePermissions=!1}function Rt(){if(P(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Ye(t.postRun.shift());J("postRun"),We(De)}var Ie=0,Tt=null,Ne={},$e=null;function F(i){Ie++,t.monitorRunDependencies?.(Ie),i?(A(!Ne[i]),Ne[i]=1,$e===null&&typeof setInterval<"u"&&($e=setInterval(()=>{if(B){clearInterval($e),$e=null;return}var s=!1;for(var c in Ne)s||(s=!0,L("still waiting on run dependencies:")),L(`dependency: ${c}`);s&&L("(end of list)")},1e4))):L("warning: run dependency added without ID")}function w(i){if(Ie--,t.monitorRunDependencies?.(Ie),i?(A(Ne[i]),delete Ne[i]):L("warning: run dependency removed without ID"),Ie==0&&($e!==null&&(clearInterval($e),$e=null),Tt)){var s=Tt;Tt=null,s()}}function X(i){t.onAbort?.(i),i="Aborted("+i+")",L(i),B=!0;var s=new WebAssembly.RuntimeError(i);throw at?.(s),s}function re(i,s){return(...c)=>{A(Et,`native function \`${i}\` called before runtime initialization`);var l=wi[i];return A(l,`exported native function \`${i}\` not found`),A(c.length<=s,`native function \`${i}\` called with ${c.length} args but expects ${s}`),l(...c)}}var fe;function ne(){return t.locateFile?v("mujoco.wasm"):new URL(""+new URL("mujoco-DU97C8Zn.wasm",import.meta.url).href,import.meta.url).href}function ke(i){if(i==fe&&N)return new Uint8Array(N);if(C)return C(i);throw"both async and sync fetching of the wasm failed"}async function Ae(i){if(!N)try{var s=await y(i);return new Uint8Array(s)}catch{}return ke(i)}async function He(i,s){try{var c=await Ae(i),l=await WebAssembly.instantiate(c,s);return l}catch(d){L(`failed to asynchronously prepare wasm: ${d}`),V(fe)&&L(`warning: Loading from a file URI (${fe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),X(d)}}async function Oe(i,s,c){if(!i&&typeof WebAssembly.instantiateStreaming=="function"&&!V(s)&&!o)try{var l=fetch(s,{credentials:"same-origin"}),d=await WebAssembly.instantiateStreaming(l,c);return d}catch(x){L(`wasm streaming compile failed: ${x}`),L("falling back to ArrayBuffer instantiation")}return He(s,c)}function me(){return{env:Vc,wasi_snapshot_preview1:Vc}}async function Ee(){function i(M,T){return wi=M.exports,_t=wi.memory,A(_t,"memory not found in wasm exports"),O(),is=wi.__indirect_function_table,A(is,"table not found in wasm exports"),Od(wi),w("wasm-instantiate"),wi}F("wasm-instantiate");var s=t;function c(M){return A(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,i(M.instance)}var l=me();if(t.instantiateWasm)return new Promise((M,T)=>{try{t.instantiateWasm(l,(I,$)=>{M(i(I,$))})}catch(I){L(`Module.instantiateWasm callback failed with error: ${I}`),T(I)}});fe??=ne();var d=await Oe(N,fe,l),x=c(d);return x}class je{name="ExitStatus";constructor(s){this.message=`Program terminated with exit(${s})`,this.status=s}}var We=i=>{for(;i.length>0;)i.shift()(t)},De=[],Ye=i=>De.push(i),k=[],Re=i=>k.push(i),Te=!0,Se=i=>(A(typeof i=="number"),i>>>=0,"0x"+i.toString(16).padStart(8,"0")),H=i=>Uc(i),z=()=>Oc(),Le=i=>{Le.shown||={},Le.shown[i]||(Le.shown[i]=1,o&&(i="warning: "+i),L(i))},Ke=typeof TextDecoder<"u"?new TextDecoder:void 0,gt=(i,s=0,c=NaN)=>{for(var l=s+c,d=s;i[d]&&!(d>=l);)++d;if(d-s>16&&i.buffer&&Ke)return Ke.decode(i.subarray(s,d));for(var x="";s<d;){var M=i[s++];if(!(M&128)){x+=String.fromCharCode(M);continue}var T=i[s++]&63;if((M&224)==192){x+=String.fromCharCode((M&31)<<6|T);continue}var I=i[s++]&63;if((M&240)==224?M=(M&15)<<12|T<<6|I:((M&248)!=240&&Le("Invalid UTF-8 leading byte "+Se(M)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),M=(M&7)<<18|T<<12|I<<6|i[s++]&63),M<65536)x+=String.fromCharCode(M);else{var $=M-65536;x+=String.fromCharCode(55296|$>>10,56320|$&1023)}}return x},lt=(i,s)=>(A(typeof i=="number",`UTF8ToString expects a number (got ${typeof i})`),i?gt(st,i,s):""),gn=(i,s,c,l)=>X(`Assertion failed: ${lt(i)}, at: `+[s?lt(s):"unknown filename",c,l?lt(l):"unknown function"]),Ot=[],Gi=0,Xr=i=>{var s=new yi(i);return s.get_caught()||(s.set_caught(!0),Gi--),s.set_rethrown(!1),Ot.push(s),us(i),zc(i)},$r=()=>{if(!Ot.length)return 0;var i=Ot[Ot.length-1];return us(i.excPtr),i.excPtr},Yt=0,gr=()=>{_e(0,0),A(Ot.length>0);var i=Ot.pop();da(i.excPtr),Yt=0};class yi{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){ye[this.ptr+4>>2]=s}get_type(){return ye[this.ptr+4>>2]}set_destructor(s){ye[this.ptr+8>>2]=s}get_destructor(){return ye[this.ptr+8>>2]}set_caught(s){s=s?1:0,Ze[this.ptr+12]=s}get_caught(){return Ze[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,Ze[this.ptr+13]=s}get_rethrown(){return Ze[this.ptr+13]!=0}init(s,c){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(c)}set_adjusted_ptr(s){ye[this.ptr+16>>2]=s}get_adjusted_ptr(){return ye[this.ptr+16>>2]}}var Si=i=>Fc(i),ai=i=>{var s=Yt?.excPtr;if(!s)return Si(0),0;var c=new yi(s);c.set_adjusted_ptr(s);var l=c.get_type();if(!l)return Si(0),s;for(var d of i){if(d===0||d===l)break;var x=c.ptr+16;if(Bc(d,l,x))return Si(d),s}return Si(l),s},jr=()=>ai([]),Hi=i=>ai([i]),qr=(i,s)=>ai([i,s]),vr=()=>{var i=Ot.pop();i||X("no exception to throw");var s=i.excPtr;throw i.get_rethrown()||(Ot.push(i),i.set_rethrown(!0),i.set_caught(!1),Gi++),Yt=new q(s),Yt},Ys=i=>{if(i){var s=new yi(i);Ot.push(s),s.set_rethrown(!0),vr()}},Ks=(i,s,c)=>{var l=new yi(i);throw l.init(s,c),Yt=new q(i),Gi++,Yt},Zs=()=>Gi,Js=i=>{throw Yt||(Yt=new q(i)),Yt},bt={isAbs:i=>i.charAt(0)==="/",splitPath:i=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(i).slice(1)},normalizeArray:(i,s)=>{for(var c=0,l=i.length-1;l>=0;l--){var d=i[l];d==="."?i.splice(l,1):d===".."?(i.splice(l,1),c++):c&&(i.splice(l,1),c--)}if(s)for(;c;c--)i.unshift("..");return i},normalize:i=>{var s=bt.isAbs(i),c=i.slice(-1)==="/";return i=bt.normalizeArray(i.split("/").filter(l=>!!l),!s).join("/"),!i&&!s&&(i="."),i&&c&&(i+="/"),(s?"/":"")+i},dirname:i=>{var s=bt.splitPath(i),c=s[0],l=s[1];return!c&&!l?".":(l&&(l=l.slice(0,-1)),c+l)},basename:i=>i&&i.match(/([^\/]+|\/)\/*$/)[1],join:(...i)=>bt.normalize(i.join("/")),join2:(i,s)=>bt.normalize(i+"/"+s)},Qs=()=>{if(o){var i=h("crypto");return s=>i.randomFillSync(s)}return s=>crypto.getRandomValues(s)},R=i=>{(R=Qs())(i)},W={resolve:(...i)=>{for(var s="",c=!1,l=i.length-1;l>=-1&&!c;l--){var d=l>=0?i[l]:E.cwd();if(typeof d!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!d)return"";s=d+"/"+s,c=bt.isAbs(d)}return s=bt.normalizeArray(s.split("/").filter(x=>!!x),!c).join("/"),(c?"/":"")+s||"."},relative:(i,s)=>{i=W.resolve(i).slice(1),s=W.resolve(s).slice(1);function c($){for(var Y=0;Y<$.length&&$[Y]==="";Y++);for(var le=$.length-1;le>=0&&$[le]==="";le--);return Y>le?[]:$.slice(Y,le-Y+1)}for(var l=c(i.split("/")),d=c(s.split("/")),x=Math.min(l.length,d.length),M=x,T=0;T<x;T++)if(l[T]!==d[T]){M=T;break}for(var I=[],T=M;T<l.length;T++)I.push("..");return I=I.concat(d.slice(M)),I.join("/")}},te=[],Q=i=>{for(var s=0,c=0;c<i.length;++c){var l=i.charCodeAt(c);l<=127?s++:l<=2047?s+=2:l>=55296&&l<=57343?(s+=4,++c):s+=3}return s},j=(i,s,c,l)=>{if(A(typeof i=="string",`stringToUTF8Array expects a string (got ${typeof i})`),!(l>0))return 0;for(var d=c,x=c+l-1,M=0;M<i.length;++M){var T=i.codePointAt(M);if(T<=127){if(c>=x)break;s[c++]=T}else if(T<=2047){if(c+1>=x)break;s[c++]=192|T>>6,s[c++]=128|T&63}else if(T<=65535){if(c+2>=x)break;s[c++]=224|T>>12,s[c++]=128|T>>6&63,s[c++]=128|T&63}else{if(c+3>=x)break;T>1114111&&Le("Invalid Unicode code point "+Se(T)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[c++]=240|T>>18,s[c++]=128|T>>12&63,s[c++]=128|T>>6&63,s[c++]=128|T&63,M++}}return s[c]=0,c-d},ve=(i,s,c)=>{var l=Q(i)+1,d=new Array(l),x=j(i,d,0,d.length);return d.length=x,d},Pe=()=>{if(!te.length){var i=null;if(o){var s=256,c=Buffer.alloc(s),l=0,d=process.stdin.fd;try{l=m.readSync(d,c,0,s)}catch(x){if(x.toString().includes("EOF"))l=0;else throw x}l>0&&(i=c.slice(0,l).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(i=window.prompt("Input: "),i!==null&&(i+=`
`));if(!i)return null;te=ve(i)}return te.shift()},Fe={ttys:[],init(){},shutdown(){},register(i,s){Fe.ttys[i]={input:[],output:[],ops:s},E.registerDevice(i,Fe.stream_ops)},stream_ops:{open(i){var s=Fe.ttys[i.node.rdev];if(!s)throw new E.ErrnoError(43);i.tty=s,i.seekable=!1},close(i){i.tty.ops.fsync(i.tty)},fsync(i){i.tty.ops.fsync(i.tty)},read(i,s,c,l,d){if(!i.tty||!i.tty.ops.get_char)throw new E.ErrnoError(60);for(var x=0,M=0;M<l;M++){var T;try{T=i.tty.ops.get_char(i.tty)}catch{throw new E.ErrnoError(29)}if(T===void 0&&x===0)throw new E.ErrnoError(6);if(T==null)break;x++,s[c+M]=T}return x&&(i.node.atime=Date.now()),x},write(i,s,c,l,d){if(!i.tty||!i.tty.ops.put_char)throw new E.ErrnoError(60);try{for(var x=0;x<l;x++)i.tty.ops.put_char(i.tty,s[c+x])}catch{throw new E.ErrnoError(29)}return l&&(i.node.mtime=i.node.ctime=Date.now()),x}},default_tty_ops:{get_char(i){return Pe()},put_char(i,s){s===null||s===10?(U(gt(i.output)),i.output=[]):s!=0&&i.output.push(s)},fsync(i){i.output?.length>0&&(U(gt(i.output)),i.output=[])},ioctl_tcgets(i){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(i,s,c){return 0},ioctl_tiocgwinsz(i){return[24,80]}},default_tty1_ops:{put_char(i,s){s===null||s===10?(L(gt(i.output)),i.output=[]):s!=0&&i.output.push(s)},fsync(i){i.output?.length>0&&(L(gt(i.output)),i.output=[])}}},Ue=i=>{X("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},ge={ops_table:null,mount(i){return ge.createNode(null,"/",16895,0)},createNode(i,s,c,l){if(E.isBlkdev(c)||E.isFIFO(c))throw new E.ErrnoError(63);ge.ops_table||={dir:{node:{getattr:ge.node_ops.getattr,setattr:ge.node_ops.setattr,lookup:ge.node_ops.lookup,mknod:ge.node_ops.mknod,rename:ge.node_ops.rename,unlink:ge.node_ops.unlink,rmdir:ge.node_ops.rmdir,readdir:ge.node_ops.readdir,symlink:ge.node_ops.symlink},stream:{llseek:ge.stream_ops.llseek}},file:{node:{getattr:ge.node_ops.getattr,setattr:ge.node_ops.setattr},stream:{llseek:ge.stream_ops.llseek,read:ge.stream_ops.read,write:ge.stream_ops.write,mmap:ge.stream_ops.mmap,msync:ge.stream_ops.msync}},link:{node:{getattr:ge.node_ops.getattr,setattr:ge.node_ops.setattr,readlink:ge.node_ops.readlink},stream:{}},chrdev:{node:{getattr:ge.node_ops.getattr,setattr:ge.node_ops.setattr},stream:E.chrdev_stream_ops}};var d=E.createNode(i,s,c,l);return E.isDir(d.mode)?(d.node_ops=ge.ops_table.dir.node,d.stream_ops=ge.ops_table.dir.stream,d.contents={}):E.isFile(d.mode)?(d.node_ops=ge.ops_table.file.node,d.stream_ops=ge.ops_table.file.stream,d.usedBytes=0,d.contents=null):E.isLink(d.mode)?(d.node_ops=ge.ops_table.link.node,d.stream_ops=ge.ops_table.link.stream):E.isChrdev(d.mode)&&(d.node_ops=ge.ops_table.chrdev.node,d.stream_ops=ge.ops_table.chrdev.stream),d.atime=d.mtime=d.ctime=Date.now(),i&&(i.contents[s]=d,i.atime=i.mtime=i.ctime=d.atime),d},getFileDataAsTypedArray(i){return i.contents?i.contents.subarray?i.contents.subarray(0,i.usedBytes):new Uint8Array(i.contents):new Uint8Array(0)},expandFileStorage(i,s){var c=i.contents?i.contents.length:0;if(!(c>=s)){var l=1024*1024;s=Math.max(s,c*(c<l?2:1.125)>>>0),c!=0&&(s=Math.max(s,256));var d=i.contents;i.contents=new Uint8Array(s),i.usedBytes>0&&i.contents.set(d.subarray(0,i.usedBytes),0)}},resizeFileStorage(i,s){if(i.usedBytes!=s)if(s==0)i.contents=null,i.usedBytes=0;else{var c=i.contents;i.contents=new Uint8Array(s),c&&i.contents.set(c.subarray(0,Math.min(s,i.usedBytes))),i.usedBytes=s}},node_ops:{getattr(i){var s={};return s.dev=E.isChrdev(i.mode)?i.id:1,s.ino=i.id,s.mode=i.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=i.rdev,E.isDir(i.mode)?s.size=4096:E.isFile(i.mode)?s.size=i.usedBytes:E.isLink(i.mode)?s.size=i.link.length:s.size=0,s.atime=new Date(i.atime),s.mtime=new Date(i.mtime),s.ctime=new Date(i.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(i,s){for(const c of["mode","atime","mtime","ctime"])s[c]!=null&&(i[c]=s[c]);s.size!==void 0&&ge.resizeFileStorage(i,s.size)},lookup(i,s){throw new E.ErrnoError(44)},mknod(i,s,c,l){return ge.createNode(i,s,c,l)},rename(i,s,c){var l;try{l=E.lookupNode(s,c)}catch{}if(l){if(E.isDir(i.mode))for(var d in l.contents)throw new E.ErrnoError(55);E.hashRemoveNode(l)}delete i.parent.contents[i.name],s.contents[c]=i,i.name=c,s.ctime=s.mtime=i.parent.ctime=i.parent.mtime=Date.now()},unlink(i,s){delete i.contents[s],i.ctime=i.mtime=Date.now()},rmdir(i,s){var c=E.lookupNode(i,s);for(var l in c.contents)throw new E.ErrnoError(55);delete i.contents[s],i.ctime=i.mtime=Date.now()},readdir(i){return[".","..",...Object.keys(i.contents)]},symlink(i,s,c){var l=ge.createNode(i,s,41471,0);return l.link=c,l},readlink(i){if(!E.isLink(i.mode))throw new E.ErrnoError(28);return i.link}},stream_ops:{read(i,s,c,l,d){var x=i.node.contents;if(d>=i.node.usedBytes)return 0;var M=Math.min(i.node.usedBytes-d,l);if(A(M>=0),M>8&&x.subarray)s.set(x.subarray(d,d+M),c);else for(var T=0;T<M;T++)s[c+T]=x[d+T];return M},write(i,s,c,l,d,x){if(A(!(s instanceof ArrayBuffer)),s.buffer===Ze.buffer&&(x=!1),!l)return 0;var M=i.node;if(M.mtime=M.ctime=Date.now(),s.subarray&&(!M.contents||M.contents.subarray)){if(x)return A(d===0,"canOwn must imply no weird position inside the file"),M.contents=s.subarray(c,c+l),M.usedBytes=l,l;if(M.usedBytes===0&&d===0)return M.contents=s.slice(c,c+l),M.usedBytes=l,l;if(d+l<=M.usedBytes)return M.contents.set(s.subarray(c,c+l),d),l}if(ge.expandFileStorage(M,d+l),M.contents.subarray&&s.subarray)M.contents.set(s.subarray(c,c+l),d);else for(var T=0;T<l;T++)M.contents[d+T]=s[c+T];return M.usedBytes=Math.max(M.usedBytes,d+l),l},llseek(i,s,c){var l=s;if(c===1?l+=i.position:c===2&&E.isFile(i.node.mode)&&(l+=i.node.usedBytes),l<0)throw new E.ErrnoError(28);return l},mmap(i,s,c,l,d){if(!E.isFile(i.node.mode))throw new E.ErrnoError(43);var x,M,T=i.node.contents;if(!(d&2)&&T&&T.buffer===Ze.buffer)M=!1,x=T.byteOffset;else{if(M=!0,x=Ue(),!x)throw new E.ErrnoError(48);T&&((c>0||c+s<T.length)&&(T.subarray?T=T.subarray(c,c+s):T=Array.prototype.slice.call(T,c,c+s)),Ze.set(T,x))}return{ptr:x,allocated:M}},msync(i,s,c,l,d){return ge.stream_ops.write(i,s,0,l,c,!1),0}}},qe=async i=>{var s=await y(i);return A(s,`Loading data file "${i}" failed (no arrayBuffer).`),new Uint8Array(s)},ze=(...i)=>E.createDataFile(...i),ut=i=>{for(var s=i;;){if(!Ne[i])return i;i=s+Math.random()}},yt=[],Ut=(i,s,c,l)=>{typeof Browser<"u"&&Browser.init();var d=!1;return yt.forEach(x=>{d||x.canHandle(s)&&(x.handle(i,s,c,l),d=!0)}),d},Ft=(i,s,c,l,d,x,M,T,I,$)=>{var Y=s?W.resolve(bt.join2(i,s)):i,le=ut(`cp ${Y}`);function he(ae){function pe(Xe){$?.(),T||ze(i,s,Xe,l,d,I),x?.(),w(le)}Ut(ae,Y,pe,()=>{M?.(),w(le)})||pe(ae)}F(le),typeof c=="string"?qe(c).then(he,M):he(c)},wt=i=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},c=s[i];if(typeof c>"u")throw new Error(`Unknown file open mode: ${i}`);return c},Ve=(i,s)=>{var c=0;return i&&(c|=365),s&&(c|=146),c},It=i=>lt(Lc(i)),ft={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},E={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(i){super(Et?It(i):""),this.errno=i;for(var s in ft)if(ft[s]===i){this.code=s;break}}},FSStream:class{shared={};get object(){return this.node}set object(i){this.node=i}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(i){this.shared.flags=i}get position(){return this.shared.position}set position(i){this.shared.position=i}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(i,s,c,l){i||(i=this),this.parent=i,this.mount=i.mount,this.id=E.nextInode++,this.name=s,this.mode=c,this.rdev=l,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(i){i?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(i){i?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return E.isDir(this.mode)}get isDevice(){return E.isChrdev(this.mode)}},lookupPath(i,s={}){if(!i)throw new E.ErrnoError(44);s.follow_mount??=!0,bt.isAbs(i)||(i=E.cwd()+"/"+i);e:for(var c=0;c<40;c++){for(var l=i.split("/").filter($=>!!$),d=E.root,x="/",M=0;M<l.length;M++){var T=M===l.length-1;if(T&&s.parent)break;if(l[M]!=="."){if(l[M]===".."){if(x=bt.dirname(x),E.isRoot(d)){i=x+"/"+l.slice(M+1).join("/");continue e}else d=d.parent;continue}x=bt.join2(x,l[M]);try{d=E.lookupNode(d,l[M])}catch($){if($?.errno===44&&T&&s.noent_okay)return{path:x};throw $}if(E.isMountpoint(d)&&(!T||s.follow_mount)&&(d=d.mounted.root),E.isLink(d.mode)&&(!T||s.follow)){if(!d.node_ops.readlink)throw new E.ErrnoError(52);var I=d.node_ops.readlink(d);bt.isAbs(I)||(I=bt.dirname(x)+"/"+I),i=I+"/"+l.slice(M+1).join("/");continue e}}}return{path:x,node:d}}throw new E.ErrnoError(32)},getPath(i){for(var s;;){if(E.isRoot(i)){var c=i.mount.mountpoint;return s?c[c.length-1]!=="/"?`${c}/${s}`:c+s:c}s=s?`${i.name}/${s}`:i.name,i=i.parent}},hashName(i,s){for(var c=0,l=0;l<s.length;l++)c=(c<<5)-c+s.charCodeAt(l)|0;return(i+c>>>0)%E.nameTable.length},hashAddNode(i){var s=E.hashName(i.parent.id,i.name);i.name_next=E.nameTable[s],E.nameTable[s]=i},hashRemoveNode(i){var s=E.hashName(i.parent.id,i.name);if(E.nameTable[s]===i)E.nameTable[s]=i.name_next;else for(var c=E.nameTable[s];c;){if(c.name_next===i){c.name_next=i.name_next;break}c=c.name_next}},lookupNode(i,s){var c=E.mayLookup(i);if(c)throw new E.ErrnoError(c);for(var l=E.hashName(i.id,s),d=E.nameTable[l];d;d=d.name_next){var x=d.name;if(d.parent.id===i.id&&x===s)return d}return E.lookup(i,s)},createNode(i,s,c,l){A(typeof i=="object");var d=new E.FSNode(i,s,c,l);return E.hashAddNode(d),d},destroyNode(i){E.hashRemoveNode(i)},isRoot(i){return i===i.parent},isMountpoint(i){return!!i.mounted},isFile(i){return(i&61440)===32768},isDir(i){return(i&61440)===16384},isLink(i){return(i&61440)===40960},isChrdev(i){return(i&61440)===8192},isBlkdev(i){return(i&61440)===24576},isFIFO(i){return(i&61440)===4096},isSocket(i){return(i&49152)===49152},flagsToPermissionString(i){var s=["r","w","rw"][i&3];return i&512&&(s+="w"),s},nodePermissions(i,s){return E.ignorePermissions?0:s.includes("r")&&!(i.mode&292)||s.includes("w")&&!(i.mode&146)||s.includes("x")&&!(i.mode&73)?2:0},mayLookup(i){if(!E.isDir(i.mode))return 54;var s=E.nodePermissions(i,"x");return s||(i.node_ops.lookup?0:2)},mayCreate(i,s){if(!E.isDir(i.mode))return 54;try{var c=E.lookupNode(i,s);return 20}catch{}return E.nodePermissions(i,"wx")},mayDelete(i,s,c){var l;try{l=E.lookupNode(i,s)}catch(x){return x.errno}var d=E.nodePermissions(i,"wx");if(d)return d;if(c){if(!E.isDir(l.mode))return 54;if(E.isRoot(l)||E.getPath(l)===E.cwd())return 10}else if(E.isDir(l.mode))return 31;return 0},mayOpen(i,s){return i?E.isLink(i.mode)?32:E.isDir(i.mode)&&(E.flagsToPermissionString(s)!=="r"||s&576)?31:E.nodePermissions(i,E.flagsToPermissionString(s)):44},checkOpExists(i,s){if(!i)throw new E.ErrnoError(s);return i},MAX_OPEN_FDS:4096,nextfd(){for(var i=0;i<=E.MAX_OPEN_FDS;i++)if(!E.streams[i])return i;throw new E.ErrnoError(33)},getStreamChecked(i){var s=E.getStream(i);if(!s)throw new E.ErrnoError(8);return s},getStream:i=>E.streams[i],createStream(i,s=-1){return A(s>=-1),i=Object.assign(new E.FSStream,i),s==-1&&(s=E.nextfd()),i.fd=s,E.streams[s]=i,i},closeStream(i){E.streams[i]=null},dupStream(i,s=-1){var c=E.createStream(i,s);return c.stream_ops?.dup?.(c),c},doSetAttr(i,s,c){var l=i?.stream_ops.setattr,d=l?i:s;l??=s.node_ops.setattr,E.checkOpExists(l,63),l(d,c)},chrdev_stream_ops:{open(i){var s=E.getDevice(i.node.rdev);i.stream_ops=s.stream_ops,i.stream_ops.open?.(i)},llseek(){throw new E.ErrnoError(70)}},major:i=>i>>8,minor:i=>i&255,makedev:(i,s)=>i<<8|s,registerDevice(i,s){E.devices[i]={stream_ops:s}},getDevice:i=>E.devices[i],getMounts(i){for(var s=[],c=[i];c.length;){var l=c.pop();s.push(l),c.push(...l.mounts)}return s},syncfs(i,s){typeof i=="function"&&(s=i,i=!1),E.syncFSRequests++,E.syncFSRequests>1&&L(`warning: ${E.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var c=E.getMounts(E.root.mount),l=0;function d(M){return A(E.syncFSRequests>0),E.syncFSRequests--,s(M)}function x(M){if(M)return x.errored?void 0:(x.errored=!0,d(M));++l>=c.length&&d(null)}c.forEach(M=>{if(!M.type.syncfs)return x(null);M.type.syncfs(M,i,x)})},mount(i,s,c){if(typeof i=="string")throw i;var l=c==="/",d=!c,x;if(l&&E.root)throw new E.ErrnoError(10);if(!l&&!d){var M=E.lookupPath(c,{follow_mount:!1});if(c=M.path,x=M.node,E.isMountpoint(x))throw new E.ErrnoError(10);if(!E.isDir(x.mode))throw new E.ErrnoError(54)}var T={type:i,opts:s,mountpoint:c,mounts:[]},I=i.mount(T);return I.mount=T,T.root=I,l?E.root=I:x&&(x.mounted=T,x.mount&&x.mount.mounts.push(T)),I},unmount(i){var s=E.lookupPath(i,{follow_mount:!1});if(!E.isMountpoint(s.node))throw new E.ErrnoError(28);var c=s.node,l=c.mounted,d=E.getMounts(l);Object.keys(E.nameTable).forEach(M=>{for(var T=E.nameTable[M];T;){var I=T.name_next;d.includes(T.mount)&&E.destroyNode(T),T=I}}),c.mounted=null;var x=c.mount.mounts.indexOf(l);A(x!==-1),c.mount.mounts.splice(x,1)},lookup(i,s){return i.node_ops.lookup(i,s)},mknod(i,s,c){var l=E.lookupPath(i,{parent:!0}),d=l.node,x=bt.basename(i);if(!x)throw new E.ErrnoError(28);if(x==="."||x==="..")throw new E.ErrnoError(20);var M=E.mayCreate(d,x);if(M)throw new E.ErrnoError(M);if(!d.node_ops.mknod)throw new E.ErrnoError(63);return d.node_ops.mknod(d,x,s,c)},statfs(i){return E.statfsNode(E.lookupPath(i,{follow:!0}).node)},statfsStream(i){return E.statfsNode(i.node)},statfsNode(i){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:E.nextInode,ffree:E.nextInode-1,fsid:42,flags:2,namelen:255};return i.node_ops.statfs&&Object.assign(s,i.node_ops.statfs(i.mount.opts.root)),s},create(i,s=438){return s&=4095,s|=32768,E.mknod(i,s,0)},mkdir(i,s=511){return s&=1023,s|=16384,E.mknod(i,s,0)},mkdirTree(i,s){var c=i.split("/"),l="";for(var d of c)if(d){(l||bt.isAbs(i))&&(l+="/"),l+=d;try{E.mkdir(l,s)}catch(x){if(x.errno!=20)throw x}}},mkdev(i,s,c){return typeof c>"u"&&(c=s,s=438),s|=8192,E.mknod(i,s,c)},symlink(i,s){if(!W.resolve(i))throw new E.ErrnoError(44);var c=E.lookupPath(s,{parent:!0}),l=c.node;if(!l)throw new E.ErrnoError(44);var d=bt.basename(s),x=E.mayCreate(l,d);if(x)throw new E.ErrnoError(x);if(!l.node_ops.symlink)throw new E.ErrnoError(63);return l.node_ops.symlink(l,d,i)},rename(i,s){var c=bt.dirname(i),l=bt.dirname(s),d=bt.basename(i),x=bt.basename(s),M,T,I;if(M=E.lookupPath(i,{parent:!0}),T=M.node,M=E.lookupPath(s,{parent:!0}),I=M.node,!T||!I)throw new E.ErrnoError(44);if(T.mount!==I.mount)throw new E.ErrnoError(75);var $=E.lookupNode(T,d),Y=W.relative(i,l);if(Y.charAt(0)!==".")throw new E.ErrnoError(28);if(Y=W.relative(s,c),Y.charAt(0)!==".")throw new E.ErrnoError(55);var le;try{le=E.lookupNode(I,x)}catch{}if($!==le){var he=E.isDir($.mode),ae=E.mayDelete(T,d,he);if(ae)throw new E.ErrnoError(ae);if(ae=le?E.mayDelete(I,x,he):E.mayCreate(I,x),ae)throw new E.ErrnoError(ae);if(!T.node_ops.rename)throw new E.ErrnoError(63);if(E.isMountpoint($)||le&&E.isMountpoint(le))throw new E.ErrnoError(10);if(I!==T&&(ae=E.nodePermissions(T,"w"),ae))throw new E.ErrnoError(ae);E.hashRemoveNode($);try{T.node_ops.rename($,I,x),$.parent=I}catch(pe){throw pe}finally{E.hashAddNode($)}}},rmdir(i){var s=E.lookupPath(i,{parent:!0}),c=s.node,l=bt.basename(i),d=E.lookupNode(c,l),x=E.mayDelete(c,l,!0);if(x)throw new E.ErrnoError(x);if(!c.node_ops.rmdir)throw new E.ErrnoError(63);if(E.isMountpoint(d))throw new E.ErrnoError(10);c.node_ops.rmdir(c,l),E.destroyNode(d)},readdir(i){var s=E.lookupPath(i,{follow:!0}),c=s.node,l=E.checkOpExists(c.node_ops.readdir,54);return l(c)},unlink(i){var s=E.lookupPath(i,{parent:!0}),c=s.node;if(!c)throw new E.ErrnoError(44);var l=bt.basename(i),d=E.lookupNode(c,l),x=E.mayDelete(c,l,!1);if(x)throw new E.ErrnoError(x);if(!c.node_ops.unlink)throw new E.ErrnoError(63);if(E.isMountpoint(d))throw new E.ErrnoError(10);c.node_ops.unlink(c,l),E.destroyNode(d)},readlink(i){var s=E.lookupPath(i),c=s.node;if(!c)throw new E.ErrnoError(44);if(!c.node_ops.readlink)throw new E.ErrnoError(28);return c.node_ops.readlink(c)},stat(i,s){var c=E.lookupPath(i,{follow:!s}),l=c.node,d=E.checkOpExists(l.node_ops.getattr,63);return d(l)},fstat(i){var s=E.getStreamChecked(i),c=s.node,l=s.stream_ops.getattr,d=l?s:c;return l??=c.node_ops.getattr,E.checkOpExists(l,63),l(d)},lstat(i){return E.stat(i,!0)},doChmod(i,s,c,l){E.doSetAttr(i,s,{mode:c&4095|s.mode&-4096,ctime:Date.now(),dontFollow:l})},chmod(i,s,c){var l;if(typeof i=="string"){var d=E.lookupPath(i,{follow:!c});l=d.node}else l=i;E.doChmod(null,l,s,c)},lchmod(i,s){E.chmod(i,s,!0)},fchmod(i,s){var c=E.getStreamChecked(i);E.doChmod(c,c.node,s,!1)},doChown(i,s,c){E.doSetAttr(i,s,{timestamp:Date.now(),dontFollow:c})},chown(i,s,c,l){var d;if(typeof i=="string"){var x=E.lookupPath(i,{follow:!l});d=x.node}else d=i;E.doChown(null,d,l)},lchown(i,s,c){E.chown(i,s,c,!0)},fchown(i,s,c){var l=E.getStreamChecked(i);E.doChown(l,l.node,!1)},doTruncate(i,s,c){if(E.isDir(s.mode))throw new E.ErrnoError(31);if(!E.isFile(s.mode))throw new E.ErrnoError(28);var l=E.nodePermissions(s,"w");if(l)throw new E.ErrnoError(l);E.doSetAttr(i,s,{size:c,timestamp:Date.now()})},truncate(i,s){if(s<0)throw new E.ErrnoError(28);var c;if(typeof i=="string"){var l=E.lookupPath(i,{follow:!0});c=l.node}else c=i;E.doTruncate(null,c,s)},ftruncate(i,s){var c=E.getStreamChecked(i);if(s<0||(c.flags&2097155)===0)throw new E.ErrnoError(28);E.doTruncate(c,c.node,s)},utime(i,s,c){var l=E.lookupPath(i,{follow:!0}),d=l.node,x=E.checkOpExists(d.node_ops.setattr,63);x(d,{atime:s,mtime:c})},open(i,s,c=438){if(i==="")throw new E.ErrnoError(44);s=typeof s=="string"?wt(s):s,s&64?c=c&4095|32768:c=0;var l,d;if(typeof i=="object")l=i;else{d=i.endsWith("/");var x=E.lookupPath(i,{follow:!(s&131072),noent_okay:!0});l=x.node,i=x.path}var M=!1;if(s&64)if(l){if(s&128)throw new E.ErrnoError(20)}else{if(d)throw new E.ErrnoError(31);l=E.mknod(i,c|511,0),M=!0}if(!l)throw new E.ErrnoError(44);if(E.isChrdev(l.mode)&&(s&=-513),s&65536&&!E.isDir(l.mode))throw new E.ErrnoError(54);if(!M){var T=E.mayOpen(l,s);if(T)throw new E.ErrnoError(T)}s&512&&!M&&E.truncate(l,0),s&=-131713;var I=E.createStream({node:l,path:E.getPath(l),flags:s,seekable:!0,position:0,stream_ops:l.stream_ops,ungotten:[],error:!1});return I.stream_ops.open&&I.stream_ops.open(I),M&&E.chmod(l,c&511),t.logReadFiles&&!(s&1)&&(i in E.readFiles||(E.readFiles[i]=1)),I},close(i){if(E.isClosed(i))throw new E.ErrnoError(8);i.getdents&&(i.getdents=null);try{i.stream_ops.close&&i.stream_ops.close(i)}catch(s){throw s}finally{E.closeStream(i.fd)}i.fd=null},isClosed(i){return i.fd===null},llseek(i,s,c){if(E.isClosed(i))throw new E.ErrnoError(8);if(!i.seekable||!i.stream_ops.llseek)throw new E.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new E.ErrnoError(28);return i.position=i.stream_ops.llseek(i,s,c),i.ungotten=[],i.position},read(i,s,c,l,d){if(A(c>=0),l<0||d<0)throw new E.ErrnoError(28);if(E.isClosed(i))throw new E.ErrnoError(8);if((i.flags&2097155)===1)throw new E.ErrnoError(8);if(E.isDir(i.node.mode))throw new E.ErrnoError(31);if(!i.stream_ops.read)throw new E.ErrnoError(28);var x=typeof d<"u";if(!x)d=i.position;else if(!i.seekable)throw new E.ErrnoError(70);var M=i.stream_ops.read(i,s,c,l,d);return x||(i.position+=M),M},write(i,s,c,l,d,x){if(A(c>=0),l<0||d<0)throw new E.ErrnoError(28);if(E.isClosed(i))throw new E.ErrnoError(8);if((i.flags&2097155)===0)throw new E.ErrnoError(8);if(E.isDir(i.node.mode))throw new E.ErrnoError(31);if(!i.stream_ops.write)throw new E.ErrnoError(28);i.seekable&&i.flags&1024&&E.llseek(i,0,2);var M=typeof d<"u";if(!M)d=i.position;else if(!i.seekable)throw new E.ErrnoError(70);var T=i.stream_ops.write(i,s,c,l,d,x);return M||(i.position+=T),T},mmap(i,s,c,l,d){if((l&2)!==0&&(d&2)===0&&(i.flags&2097155)!==2)throw new E.ErrnoError(2);if((i.flags&2097155)===1)throw new E.ErrnoError(2);if(!i.stream_ops.mmap)throw new E.ErrnoError(43);if(!s)throw new E.ErrnoError(28);return i.stream_ops.mmap(i,s,c,l,d)},msync(i,s,c,l,d){return A(c>=0),i.stream_ops.msync?i.stream_ops.msync(i,s,c,l,d):0},ioctl(i,s,c){if(!i.stream_ops.ioctl)throw new E.ErrnoError(59);return i.stream_ops.ioctl(i,s,c)},readFile(i,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var c=E.open(i,s.flags),l=E.stat(i),d=l.size,x=new Uint8Array(d);return E.read(c,x,0,d,0),s.encoding==="utf8"&&(x=gt(x)),E.close(c),x},writeFile(i,s,c={}){c.flags=c.flags||577;var l=E.open(i,c.flags,c.mode);if(typeof s=="string"&&(s=new Uint8Array(ve(s))),ArrayBuffer.isView(s))E.write(l,s,0,s.byteLength,void 0,c.canOwn);else throw new Error("Unsupported data type");E.close(l)},cwd:()=>E.currentPath,chdir(i){var s=E.lookupPath(i,{follow:!0});if(s.node===null)throw new E.ErrnoError(44);if(!E.isDir(s.node.mode))throw new E.ErrnoError(54);var c=E.nodePermissions(s.node,"x");if(c)throw new E.ErrnoError(c);E.currentPath=s.path},createDefaultDirectories(){E.mkdir("/tmp"),E.mkdir("/home"),E.mkdir("/home/web_user")},createDefaultDevices(){E.mkdir("/dev"),E.registerDevice(E.makedev(1,3),{read:()=>0,write:(l,d,x,M,T)=>M,llseek:()=>0}),E.mkdev("/dev/null",E.makedev(1,3)),Fe.register(E.makedev(5,0),Fe.default_tty_ops),Fe.register(E.makedev(6,0),Fe.default_tty1_ops),E.mkdev("/dev/tty",E.makedev(5,0)),E.mkdev("/dev/tty1",E.makedev(6,0));var i=new Uint8Array(1024),s=0,c=()=>(s===0&&(R(i),s=i.byteLength),i[--s]);E.createDevice("/dev","random",c),E.createDevice("/dev","urandom",c),E.mkdir("/dev/shm"),E.mkdir("/dev/shm/tmp")},createSpecialDirectories(){E.mkdir("/proc");var i=E.mkdir("/proc/self");E.mkdir("/proc/self/fd"),E.mount({mount(){var s=E.createNode(i,"fd",16895,73);return s.stream_ops={llseek:ge.stream_ops.llseek},s.node_ops={lookup(c,l){var d=+l,x=E.getStreamChecked(d),M={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>x.path},id:d+1};return M.parent=M,M},readdir(){return Array.from(E.streams.entries()).filter(([c,l])=>l).map(([c,l])=>c.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(i,s,c){i?E.createDevice("/dev","stdin",i):E.symlink("/dev/tty","/dev/stdin"),s?E.createDevice("/dev","stdout",null,s):E.symlink("/dev/tty","/dev/stdout"),c?E.createDevice("/dev","stderr",null,c):E.symlink("/dev/tty1","/dev/stderr");var l=E.open("/dev/stdin",0),d=E.open("/dev/stdout",1),x=E.open("/dev/stderr",1);A(l.fd===0,`invalid handle for stdin (${l.fd})`),A(d.fd===1,`invalid handle for stdout (${d.fd})`),A(x.fd===2,`invalid handle for stderr (${x.fd})`)},staticInit(){E.nameTable=new Array(4096),E.mount(ge,{},"/"),E.createDefaultDirectories(),E.createDefaultDevices(),E.createSpecialDirectories(),E.filesystems={MEMFS:ge}},init(i,s,c){A(!E.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),E.initialized=!0,i??=t.stdin,s??=t.stdout,c??=t.stderr,E.createStandardStreams(i,s,c)},quit(){E.initialized=!1,ua(0);for(var i of E.streams)i&&E.close(i)},findObject(i,s){var c=E.analyzePath(i,s);return c.exists?c.object:null},analyzePath(i,s){try{var c=E.lookupPath(i,{follow:!s});i=c.path}catch{}var l={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var c=E.lookupPath(i,{parent:!0});l.parentExists=!0,l.parentPath=c.path,l.parentObject=c.node,l.name=bt.basename(i),c=E.lookupPath(i,{follow:!s}),l.exists=!0,l.path=c.path,l.object=c.node,l.name=c.node.name,l.isRoot=c.path==="/"}catch(d){l.error=d.errno}return l},createPath(i,s,c,l){i=typeof i=="string"?i:E.getPath(i);for(var d=s.split("/").reverse();d.length;){var x=d.pop();if(x){var M=bt.join2(i,x);try{E.mkdir(M)}catch(T){if(T.errno!=20)throw T}i=M}}return M},createFile(i,s,c,l,d){var x=bt.join2(typeof i=="string"?i:E.getPath(i),s),M=Ve(l,d);return E.create(x,M)},createDataFile(i,s,c,l,d,x){var M=s;i&&(i=typeof i=="string"?i:E.getPath(i),M=s?bt.join2(i,s):i);var T=Ve(l,d),I=E.create(M,T);if(c){if(typeof c=="string"){for(var $=new Array(c.length),Y=0,le=c.length;Y<le;++Y)$[Y]=c.charCodeAt(Y);c=$}E.chmod(I,T|146);var he=E.open(I,577);E.write(he,c,0,c.length,0,x),E.close(he),E.chmod(I,T)}},createDevice(i,s,c,l){var d=bt.join2(typeof i=="string"?i:E.getPath(i),s),x=Ve(!!c,!!l);E.createDevice.major??=64;var M=E.makedev(E.createDevice.major++,0);return E.registerDevice(M,{open(T){T.seekable=!1},close(T){l?.buffer?.length&&l(10)},read(T,I,$,Y,le){for(var he=0,ae=0;ae<Y;ae++){var pe;try{pe=c()}catch{throw new E.ErrnoError(29)}if(pe===void 0&&he===0)throw new E.ErrnoError(6);if(pe==null)break;he++,I[$+ae]=pe}return he&&(T.node.atime=Date.now()),he},write(T,I,$,Y,le){for(var he=0;he<Y;he++)try{l(I[$+he])}catch{throw new E.ErrnoError(29)}return Y&&(T.node.mtime=T.node.ctime=Date.now()),he}}),E.mkdev(d,x,M)},forceLoadFile(i){if(i.isDevice||i.isFolder||i.link||i.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{i.contents=C(i.url),i.usedBytes=i.contents.length}catch{throw new E.ErrnoError(29)}},createLazyFile(i,s,c,l,d){class x{lengthKnown=!1;chunks=[];get(ae){if(!(ae>this.length-1||ae<0)){var pe=ae%this.chunkSize,Xe=ae/this.chunkSize|0;return this.getter(Xe)[pe]}}setDataGetter(ae){this.getter=ae}cacheLength(){var ae=new XMLHttpRequest;if(ae.open("HEAD",c,!1),ae.send(null),!(ae.status>=200&&ae.status<300||ae.status===304))throw new Error("Couldn't load "+c+". Status: "+ae.status);var pe=Number(ae.getResponseHeader("Content-length")),Xe,dt=(Xe=ae.getResponseHeader("Accept-Ranges"))&&Xe==="bytes",it=(Xe=ae.getResponseHeader("Content-Encoding"))&&Xe==="gzip",Lt=1024*1024;dt||(Lt=pe);var xt=(Ht,on)=>{if(Ht>on)throw new Error("invalid range ("+Ht+", "+on+") or no bytes requested!");if(on>pe-1)throw new Error("only "+pe+" bytes available! programmer error!");var Ct=new XMLHttpRequest;if(Ct.open("GET",c,!1),pe!==Lt&&Ct.setRequestHeader("Range","bytes="+Ht+"-"+on),Ct.responseType="arraybuffer",Ct.overrideMimeType&&Ct.overrideMimeType("text/plain; charset=x-user-defined"),Ct.send(null),!(Ct.status>=200&&Ct.status<300||Ct.status===304))throw new Error("Couldn't load "+c+". Status: "+Ct.status);return Ct.response!==void 0?new Uint8Array(Ct.response||[]):ve(Ct.responseText||"")},en=this;en.setDataGetter(Ht=>{var on=Ht*Lt,Ct=(Ht+1)*Lt-1;if(Ct=Math.min(Ct,pe-1),typeof en.chunks[Ht]>"u"&&(en.chunks[Ht]=xt(on,Ct)),typeof en.chunks[Ht]>"u")throw new Error("doXHR failed!");return en.chunks[Ht]}),(it||!pe)&&(Lt=pe=1,pe=this.getter(0).length,Lt=pe,U("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=pe,this._chunkSize=Lt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!a)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var M=new x,T={isDevice:!1,contents:M}}else var T={isDevice:!1,url:c};var I=E.createFile(i,s,T,l,d);T.contents?I.contents=T.contents:T.url&&(I.contents=null,I.url=T.url),Object.defineProperties(I,{usedBytes:{get:function(){return this.contents.length}}});var $={},Y=Object.keys(I.stream_ops);Y.forEach(he=>{var ae=I.stream_ops[he];$[he]=(...pe)=>(E.forceLoadFile(I),ae(...pe))});function le(he,ae,pe,Xe,dt){var it=he.node.contents;if(dt>=it.length)return 0;var Lt=Math.min(it.length-dt,Xe);if(A(Lt>=0),it.slice)for(var xt=0;xt<Lt;xt++)ae[pe+xt]=it[dt+xt];else for(var xt=0;xt<Lt;xt++)ae[pe+xt]=it.get(dt+xt);return Lt}return $.read=(he,ae,pe,Xe,dt)=>(E.forceLoadFile(I),le(he,ae,pe,Xe,dt)),$.mmap=(he,ae,pe,Xe,dt)=>{E.forceLoadFile(I);var it=Ue();if(!it)throw new E.ErrnoError(48);return le(he,Ze,it,ae,pe),{ptr:it,allocated:!0}},I.stream_ops=$,I},absolutePath(){X("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){X("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){X("FS.createLink has been removed; use FS.symlink instead")},joinPath(){X("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){X("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){X("FS.standardizePath has been removed; use PATH.normalize instead")}},St={DEFAULT_POLLMASK:5,calculateAt(i,s,c){if(bt.isAbs(s))return s;var l;if(i===-100)l=E.cwd();else{var d=St.getStreamFromFD(i);l=d.path}if(s.length==0){if(!c)throw new E.ErrnoError(44);return l}return l+"/"+s},writeStat(i,s){ie[i>>2]=s.dev,ie[i+4>>2]=s.mode,ye[i+8>>2]=s.nlink,ie[i+12>>2]=s.uid,ie[i+16>>2]=s.gid,ie[i+20>>2]=s.rdev,At[i+24>>3]=BigInt(s.size),ie[i+32>>2]=4096,ie[i+36>>2]=s.blocks;var c=s.atime.getTime(),l=s.mtime.getTime(),d=s.ctime.getTime();return At[i+40>>3]=BigInt(Math.floor(c/1e3)),ye[i+48>>2]=c%1e3*1e3*1e3,At[i+56>>3]=BigInt(Math.floor(l/1e3)),ye[i+64>>2]=l%1e3*1e3*1e3,At[i+72>>3]=BigInt(Math.floor(d/1e3)),ye[i+80>>2]=d%1e3*1e3*1e3,At[i+88>>3]=BigInt(s.ino),0},writeStatFs(i,s){ie[i+4>>2]=s.bsize,ie[i+40>>2]=s.bsize,ie[i+8>>2]=s.blocks,ie[i+12>>2]=s.bfree,ie[i+16>>2]=s.bavail,ie[i+20>>2]=s.files,ie[i+24>>2]=s.ffree,ie[i+28>>2]=s.fsid,ie[i+44>>2]=s.flags,ie[i+36>>2]=s.namelen},doMsync(i,s,c,l,d){if(!E.isFile(s.node.mode))throw new E.ErrnoError(43);if(l&2)return 0;var x=st.slice(i,i+c);E.msync(s,x,d,c,l)},getStreamFromFD(i){var s=E.getStreamChecked(i);return s},varargs:void 0,getStr(i){var s=lt(i);return s}};function an(i,s,c){try{var l=St.getStreamFromFD(i);if(A(!c),l.fd===s)return-28;if(s<0||s>=E.MAX_OPEN_FDS)return-8;var d=E.getStream(s);return d&&E.close(d),E.dupStream(l,s).fd}catch(x){if(typeof E>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}var Fn=()=>{A(St.varargs!=null);var i=ie[+St.varargs>>2];return St.varargs+=4,i},Mt=Fn;function Jt(i,s,c){St.varargs=c;try{var l=St.getStreamFromFD(i);switch(s){case 0:{var d=Fn();if(d<0)return-28;for(;E.streams[d];)d++;var x;return x=E.dupStream(l,d),x.fd}case 1:case 2:return 0;case 3:return l.flags;case 4:{var d=Fn();return l.flags|=d,0}case 12:{var d=Mt(),M=0;return oe[d+M>>1]=2,0}case 13:case 14:return 0}return-28}catch(T){if(typeof E>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function un(i,s){try{return St.writeStat(s,E.fstat(i))}catch(c){if(typeof E>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Kt(i,s,c){St.varargs=c;try{var l=St.getStreamFromFD(i);switch(s){case 21509:return l.tty?0:-59;case 21505:{if(!l.tty)return-59;if(l.tty.ops.ioctl_tcgets){var d=l.tty.ops.ioctl_tcgets(l),x=Mt();ie[x>>2]=d.c_iflag||0,ie[x+4>>2]=d.c_oflag||0,ie[x+8>>2]=d.c_cflag||0,ie[x+12>>2]=d.c_lflag||0;for(var M=0;M<32;M++)Ze[x+M+17]=d.c_cc[M]||0;return 0}return 0}case 21510:case 21511:case 21512:return l.tty?0:-59;case 21506:case 21507:case 21508:{if(!l.tty)return-59;if(l.tty.ops.ioctl_tcsets){for(var x=Mt(),T=ie[x>>2],I=ie[x+4>>2],$=ie[x+8>>2],Y=ie[x+12>>2],le=[],M=0;M<32;M++)le.push(Ze[x+M+17]);return l.tty.ops.ioctl_tcsets(l.tty,s,{c_iflag:T,c_oflag:I,c_cflag:$,c_lflag:Y,c_cc:le})}return 0}case 21519:{if(!l.tty)return-59;var x=Mt();return ie[x>>2]=0,0}case 21520:return l.tty?-28:-59;case 21531:{var x=Mt();return E.ioctl(l,s,x)}case 21523:{if(!l.tty)return-59;if(l.tty.ops.ioctl_tiocgwinsz){var he=l.tty.ops.ioctl_tiocgwinsz(l.tty),x=Mt();oe[x>>1]=he[0],oe[x+2>>1]=he[1]}return 0}case 21524:return l.tty?0:-59;case 21515:return l.tty?0:-59;default:return-28}}catch(ae){if(typeof E>"u"||ae.name!=="ErrnoError")throw ae;return-ae.errno}}function Qt(i,s){try{return i=St.getStr(i),St.writeStat(s,E.lstat(i))}catch(c){if(typeof E>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function yr(i,s,c,l){try{s=St.getStr(s);var d=l&256,x=l&4096;return l=l&-6401,A(!l,`unknown flags in __syscall_newfstatat: ${l}`),s=St.calculateAt(i,s,x),St.writeStat(c,d?E.lstat(s):E.stat(s))}catch(M){if(typeof E>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Xn(i,s,c,l){St.varargs=l;try{s=St.getStr(s),s=St.calculateAt(i,s);var d=l?Fn():0;return E.open(s,c,d).fd}catch(x){if(typeof E>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function Fu(i,s){try{return i=St.getStr(i),St.writeStat(s,E.stat(i))}catch(c){if(typeof E>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var Iu=()=>X("native code called abort()"),Vt=i=>{for(var s="";;){var c=st[i++];if(!c)return s;s+=String.fromCharCode(c)}},Wi={},Ei={},Yr={},Sr=class extends Error{constructor(s){super(s),this.name="BindingError"}},pt=i=>{throw new Sr(i)};function Uu(i,s,c={}){var l=s.name;if(i||pt(`type "${l}" must have a positive integer typeid pointer`),Ei.hasOwnProperty(i)){if(c.ignoreDuplicateRegistrations)return;pt(`Cannot register type '${l}' twice`)}if(Ei[i]=s,delete Yr[i],Wi.hasOwnProperty(i)){var d=Wi[i];delete Wi[i],d.forEach(x=>x())}}function vn(i,s,c={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Uu(i,s,c)}var ic=(i,s,c)=>{switch(s){case 1:return c?l=>Ze[l]:l=>st[l];case 2:return c?l=>oe[l>>1]:l=>de[l>>1];case 4:return c?l=>ie[l>>2]:l=>ye[l>>2];case 8:return c?l=>At[l>>3]:l=>nt[l>>3];default:throw new TypeError(`invalid integer width (${s}): ${i}`)}},bi=i=>{if(i===null)return"null";var s=typeof i;return s==="object"||s==="array"||s==="function"?i.toString():""+i},rc=(i,s,c,l)=>{if(s<c||s>l)throw new TypeError(`Passing a number "${bi(s)}" from JS side to C/C++ side to an argument of type "${i}", which is outside the valid range [${c}, ${l}]!`)},Nu=(i,s,c,l,d)=>{s=Vt(s);const x=l===0n;let M=T=>T;if(x){const T=c*8;M=I=>BigInt.asUintN(T,I),d=M(d)}vn(i,{name:s,fromWireType:M,toWireType:(T,I)=>{if(typeof I=="number")I=BigInt(I);else if(typeof I!="bigint")throw new TypeError(`Cannot convert "${bi(I)}" to ${this.name}`);return rc(s,I,l,d),I},argPackAdvance:In,readValueFromPointer:ic(s,c,!x),destructorFunction:null})},In=8,Ou=(i,s,c,l)=>{s=Vt(s),vn(i,{name:s,fromWireType:function(d){return!!d},toWireType:function(d,x){return x?c:l},argPackAdvance:In,readValueFromPointer:function(d){return this.fromWireType(st[d])},destructorFunction:null})},ku=i=>({count:i.count,deleteScheduled:i.deleteScheduled,preservePointerOnDelete:i.preservePointerOnDelete,ptr:i.ptr,ptrType:i.ptrType,smartPtr:i.smartPtr,smartPtrType:i.smartPtrType}),ea=i=>{function s(c){return c.$$.ptrType.registeredClass.name}pt(s(i)+" instance already deleted")},ta=!1,sc=i=>{},Bu=i=>{i.smartPtr?i.smartPtrType.rawDestructor(i.smartPtr):i.ptrType.registeredClass.rawDestructor(i.ptr)},ac=i=>{i.count.value-=1;var s=i.count.value===0;s&&Bu(i)},oc=(i,s,c)=>{if(s===c)return i;if(c.baseClass===void 0)return null;var l=oc(i,s,c.baseClass);return l===null?null:c.downcast(l)},cc={},zu={},Vu=(i,s)=>{for(s===void 0&&pt("ptr should not be undefined");i.baseClass;)s=i.upcast(s),i=i.baseClass;return s},Gu=(i,s)=>(s=Vu(i,s),zu[s]),Hu=class extends Error{constructor(s){super(s),this.name="InternalError"}},Kr=i=>{throw new Hu(i)},Zr=(i,s)=>{(!s.ptrType||!s.ptr)&&Kr("makeClassHandle requires ptr and ptrType");var c=!!s.smartPtrType,l=!!s.smartPtr;return c!==l&&Kr("Both smartPtrType and smartPtr must be specified"),s.count={value:1},Er(Object.create(i,{$$:{value:s,writable:!0}}))};function lc(i){var s=this.getPointee(i);if(!s)return this.destructor(i),null;var c=Gu(this.registeredClass,s);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=s,c.$$.smartPtr=i,c.clone();var l=c.clone();return this.destructor(i),l}function d(){return this.isSmartPointer?Zr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:i}):Zr(this.registeredClass.instancePrototype,{ptrType:this,ptr:i})}var x=this.registeredClass.getActualType(s),M=cc[x];if(!M)return d.call(this);var T;this.isConst?T=M.constPointerType:T=M.pointerType;var I=oc(s,this.registeredClass,T.registeredClass);return I===null?d.call(this):this.isSmartPointer?Zr(T.registeredClass.instancePrototype,{ptrType:T,ptr:I,smartPtrType:this,smartPtr:i}):Zr(T.registeredClass.instancePrototype,{ptrType:T,ptr:I})}var Er=i=>typeof FinalizationRegistry>"u"?(Er=s=>s,i):(ta=new FinalizationRegistry(s=>{console.warn(s.leakWarning),ac(s.$$)}),Er=s=>{var c=s.$$,l=!!c.smartPtr;if(l){var d={$$:c},x=c.ptrType.registeredClass,M=new Error(`Embind found a leaked C++ instance ${x.name} <${Se(c.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(M,lc),d.leakWarning=M.stack.replace(/^Error: /,""),ta.register(s,d,s)}return s},sc=s=>ta.unregister(s),Er(i)),Wu=()=>{let i=Jr.prototype;Object.assign(i,{isAliasOf(c){if(!(this instanceof Jr)||!(c instanceof Jr))return!1;var l=this.$$.ptrType.registeredClass,d=this.$$.ptr;c.$$=c.$$;for(var x=c.$$.ptrType.registeredClass,M=c.$$.ptr;l.baseClass;)d=l.upcast(d),l=l.baseClass;for(;x.baseClass;)M=x.upcast(M),x=x.baseClass;return l===x&&d===M},clone(){if(this.$$.ptr||ea(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=Er(Object.create(Object.getPrototypeOf(this),{$$:{value:ku(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||ea(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&pt("Object already scheduled for deletion"),sc(this),ac(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ea(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&pt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(i[s]=i.delete)};function Jr(){}var Qr=(i,s)=>Object.defineProperty(s,"name",{value:i}),na=(i,s,c)=>{if(i[s].overloadTable===void 0){var l=i[s];i[s]=function(...d){return i[s].overloadTable.hasOwnProperty(d.length)||pt(`Function '${c}' called with an invalid number of arguments (${d.length}) - expects one of (${i[s].overloadTable})!`),i[s].overloadTable[d.length].apply(this,d)},i[s].overloadTable=[],i[s].overloadTable[l.argCount]=l}},ia=(i,s,c)=>{t.hasOwnProperty(i)?((c===void 0||t[i].overloadTable!==void 0&&t[i].overloadTable[c]!==void 0)&&pt(`Cannot register public name '${i}' twice`),na(t,i,i),t[i].overloadTable.hasOwnProperty(c)&&pt(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),t[i].overloadTable[c]=s):(t[i]=s,t[i].argCount=c)},Xu=48,$u=57,ju=i=>{A(typeof i=="string"),i=i.replace(/[^a-zA-Z0-9_]/g,"$");var s=i.charCodeAt(0);return s>=Xu&&s<=$u?`_${i}`:i};function qu(i,s,c,l,d,x,M,T){this.name=i,this.constructor=s,this.instancePrototype=c,this.rawDestructor=l,this.baseClass=d,this.getActualType=x,this.upcast=M,this.downcast=T,this.pureVirtualFunctions=[]}var es=(i,s,c)=>{for(;s!==c;)s.upcast||pt(`Expected null or instance of ${c.name}, got an instance of ${s.name}`),i=s.upcast(i),s=s.baseClass;return i};function Yu(i,s){if(s===null)return this.isReference&&pt(`null is not a valid ${this.name}`),0;s.$$||pt(`Cannot pass "${bi(s)}" as a ${this.name}`),s.$$.ptr||pt(`Cannot pass deleted object as a pointer of type ${this.name}`);var c=s.$$.ptrType.registeredClass,l=es(s.$$.ptr,c,this.registeredClass);return l}function Ku(i,s){var c;if(s===null)return this.isReference&&pt(`null is not a valid ${this.name}`),this.isSmartPointer?(c=this.rawConstructor(),i!==null&&i.push(this.rawDestructor,c),c):0;(!s||!s.$$)&&pt(`Cannot pass "${bi(s)}" as a ${this.name}`),s.$$.ptr||pt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&pt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var l=s.$$.ptrType.registeredClass;if(c=es(s.$$.ptr,l,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&pt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?c=s.$$.smartPtr:pt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:c=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)c=s.$$.smartPtr;else{var d=s.clone();c=this.rawShare(c,Gt.toHandle(()=>d.delete())),i!==null&&i.push(this.rawDestructor,c)}break;default:pt("Unsupporting sharing policy")}return c}function Zu(i,s){if(s===null)return this.isReference&&pt(`null is not a valid ${this.name}`),0;s.$$||pt(`Cannot pass "${bi(s)}" as a ${this.name}`),s.$$.ptr||pt(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&pt(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var c=s.$$.ptrType.registeredClass,l=es(s.$$.ptr,c,this.registeredClass);return l}function ts(i){return this.fromWireType(ye[i>>2])}var Ju=()=>{Object.assign(ns.prototype,{getPointee(i){return this.rawGetPointee&&(i=this.rawGetPointee(i)),i},destructor(i){this.rawDestructor?.(i)},argPackAdvance:In,readValueFromPointer:ts,fromWireType:lc})};function ns(i,s,c,l,d,x,M,T,I,$,Y){this.name=i,this.registeredClass=s,this.isReference=c,this.isConst=l,this.isSmartPointer=d,this.pointeeType=x,this.sharingPolicy=M,this.rawGetPointee=T,this.rawConstructor=I,this.rawShare=$,this.rawDestructor=Y,!d&&s.baseClass===void 0?l?(this.toWireType=Yu,this.destructorFunction=null):(this.toWireType=Zu,this.destructorFunction=null):this.toWireType=Ku}var uc=(i,s,c)=>{t.hasOwnProperty(i)||Kr("Replacing nonexistent public symbol"),t[i].overloadTable!==void 0&&c!==void 0?t[i].overloadTable[c]=s:(t[i]=s,t[i].argCount=c)},hc=[],is,xe=i=>{var s=hc[i];return s||(hc[i]=s=is.get(i)),A(is.get(i)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},Un=(i,s,c=!1)=>{A(!c,"Async bindings are only supported with JSPI."),i=Vt(i);function l(){var x=xe(s);return x}var d=l();return typeof d!="function"&&pt(`unknown function pointer with signature ${i}: ${s}`),d};class Qu extends Error{}var dc=i=>{var s=Dc(i),c=Vt(s);return On(s),c},Mi=(i,s)=>{var c=[],l={};function d(x){if(!l[x]&&!Ei[x]){if(Yr[x]){Yr[x].forEach(d);return}c.push(x),l[x]=!0}}throw s.forEach(d),new Qu(`${i}: `+c.map(dc).join([", "]))},An=(i,s,c)=>{i.forEach(T=>Yr[T]=s);function l(T){var I=c(T);I.length!==i.length&&Kr("Mismatched type converter count");for(var $=0;$<i.length;++$)vn(i[$],I[$])}var d=new Array(s.length),x=[],M=0;s.forEach((T,I)=>{Ei.hasOwnProperty(T)?d[I]=Ei[T]:(x.push(T),Wi.hasOwnProperty(T)||(Wi[T]=[]),Wi[T].push(()=>{d[I]=Ei[T],++M,M===x.length&&l(d)}))}),x.length===0&&l(d)},eh=(i,s,c,l,d,x,M,T,I,$,Y,le,he)=>{Y=Vt(Y),x=Un(d,x),T&&=Un(M,T),$&&=Un(I,$),he=Un(le,he);var ae=ju(Y);ia(ae,function(){Mi(`Cannot construct ${Y} due to unbound types`,[l])}),An([i,s,c],l?[l]:[],pe=>{pe=pe[0];var Xe,dt;l?(Xe=pe.registeredClass,dt=Xe.instancePrototype):dt=Jr.prototype;var it=Qr(Y,function(...Ct){if(Object.getPrototypeOf(this)!==Lt)throw new Sr(`Use 'new' to construct ${Y}`);if(xt.constructor_body===void 0)throw new Sr(`${Y} has no accessible constructor`);var Ai=xt.constructor_body[Ct.length];if(Ai===void 0)throw new Sr(`Tried to invoke ctor of ${Y} with invalid number of parameters (${Ct.length}) - expected (${Object.keys(xt.constructor_body).toString()}) parameters instead!`);return Ai.apply(this,Ct)}),Lt=Object.create(dt,{constructor:{value:it}});it.prototype=Lt;var xt=new qu(Y,it,Lt,he,Xe,x,T,$);xt.baseClass&&(xt.baseClass.__derivedClasses??=[],xt.baseClass.__derivedClasses.push(xt));var en=new ns(Y,xt,!0,!1,!1),Ht=new ns(Y+"*",xt,!1,!1,!1),on=new ns(Y+" const*",xt,!1,!0,!1);return cc[i]={pointerType:Ht,constPointerType:on},uc(ae,it),[en,Ht,on]})},ra=i=>{for(;i.length;){var s=i.pop(),c=i.pop();c(s)}};function fc(i){for(var s=1;s<i.length;++s)if(i[s]!==null&&i[s].destructorFunction===void 0)return!0;return!1}function th(i,s,c,l,d){if(i<s||i>c){var x=s==c?s:`${s} to ${c}`;d(`function ${l} called with ${i} arguments, expected ${x}`)}}function nh(i,s,c,l){var d=fc(i),x=i.length-2,M=[],T=["fn"];s&&T.push("thisWired");for(var I=0;I<x;++I)M.push(`arg${I}`),T.push(`arg${I}Wired`);M=M.join(","),T=T.join(",");var $=`return function (${M}) {
`;$+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,d&&($+=`var destructors = [];
`);var Y=d?"destructors":"null",le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&($+=`var thisWired = classParam['toWireType'](${Y}, this);
`);for(var I=0;I<x;++I)$+=`var arg${I}Wired = argType${I}['toWireType'](${Y}, arg${I});
`,le.push(`argType${I}`);if($+=(c||l?"var rv = ":"")+`invoker(${T});
`,d)$+=`runDestructors(destructors);
`;else for(var I=s?1:2;I<i.length;++I){var he=I===1?"thisWired":"arg"+(I-2)+"Wired";i[I].destructorFunction!==null&&($+=`${he}_dtor(${he});
`,le.push(`${he}_dtor`))}return c&&($+=`var ret = retType['fromWireType'](rv);
return ret;
`),$+=`}
`,le.push("checkArgCount","minArgs","maxArgs"),$=`if (arguments.length !== ${le.length}){ throw new Error(humanName + "Expected ${le.length} closure arguments " + arguments.length + " given."); }
${$}`,[le,$]}function ih(i){for(var s=i.length-2,c=i.length-1;c>=2&&i[c].optional;--c)s--;return s}function rs(i,s,c,l,d,x){var M=s.length;M<2&&pt("argTypes array size mismatch! Must at least get return value and 'this' types!"),A(!x,"Async bindings are only supported with JSPI.");for(var T=s[1]!==null&&c!==null,I=fc(s),$=s[0].name!=="void",Y=M-2,le=ih(s),he=[i,pt,l,d,ra,s[0],s[1]],ae=0;ae<M-2;++ae)he.push(s[ae+2]);if(!I)for(var ae=T?1:2;ae<s.length;++ae)s[ae].destructorFunction!==null&&he.push(s[ae].destructorFunction);he.push(th,le,Y);let[pe,Xe]=nh(s,T,$,x);var dt=new Function(...pe,Xe)(...he);return Qr(i,dt)}var ss=(i,s)=>{for(var c=[],l=0;l<i;l++)c.push(ye[s+l*4>>2]);return c},sa=i=>{i=i.trim();const s=i.indexOf("(");return s===-1?i:(A(i.endsWith(")"),"Parentheses for argument names should match."),i.slice(0,s))},rh=(i,s,c,l,d,x,M,T,I)=>{var $=ss(c,l);s=Vt(s),s=sa(s),x=Un(d,x,T),An([],[i],Y=>{Y=Y[0];var le=`${Y.name}.${s}`;function he(){Mi(`Cannot call ${le} due to unbound types`,$)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var ae=Y.registeredClass.constructor;return ae[s]===void 0?(he.argCount=c-1,ae[s]=he):(na(ae,s,le),ae[s].overloadTable[c-1]=he),An([],$,pe=>{var Xe=[pe[0],null].concat(pe.slice(1)),dt=rs(le,Xe,null,x,M,T);if(ae[s].overloadTable===void 0?(dt.argCount=c-1,ae[s]=dt):ae[s].overloadTable[c-1]=dt,Y.registeredClass.__derivedClasses)for(const it of Y.registeredClass.__derivedClasses)it.constructor.hasOwnProperty(s)||(it.constructor[s]=dt);return[]}),[]})},sh=(i,s,c,l,d,x)=>{A(s>0);var M=ss(s,c);d=Un(l,d),An([],[i],T=>{T=T[0];var I=`constructor ${T.name}`;if(T.registeredClass.constructor_body===void 0&&(T.registeredClass.constructor_body=[]),T.registeredClass.constructor_body[s-1]!==void 0)throw new Sr(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${T.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return T.registeredClass.constructor_body[s-1]=()=>{Mi(`Cannot construct ${T.name} due to unbound types`,M)},An([],M,$=>($.splice(1,0,null),T.registeredClass.constructor_body[s-1]=rs(I,$,null,d,x),[])),[]})},ah=(i,s,c,l,d,x,M,T,I,$)=>{var Y=ss(c,l);s=Vt(s),s=sa(s),x=Un(d,x,I),An([],[i],le=>{le=le[0];var he=`${le.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),T&&le.registeredClass.pureVirtualFunctions.push(s);function ae(){Mi(`Cannot call ${he} due to unbound types`,Y)}var pe=le.registeredClass.instancePrototype,Xe=pe[s];return Xe===void 0||Xe.overloadTable===void 0&&Xe.className!==le.name&&Xe.argCount===c-2?(ae.argCount=c-2,ae.className=le.name,pe[s]=ae):(na(pe,s,he),pe[s].overloadTable[c-2]=ae),An([],Y,dt=>{var it=rs(he,dt,le,x,M,I);return pe[s].overloadTable===void 0?(it.argCount=c-2,pe[s]=it):pe[s].overloadTable[c-2]=it,[]}),[]})},pc=(i,s,c)=>(i instanceof Object||pt(`${c} with invalid "this": ${i}`),i instanceof s.registeredClass.constructor||pt(`${c} incompatible with "this" of type ${i.constructor.name}`),i.$$.ptr||pt(`cannot call emscripten binding method ${c} on deleted object`),es(i.$$.ptr,i.$$.ptrType.registeredClass,s.registeredClass)),oh=(i,s,c,l,d,x,M,T,I,$)=>{s=Vt(s),d=Un(l,d),An([],[i],Y=>{Y=Y[0];var le=`${Y.name}.${s}`,he={get(){Mi(`Cannot access ${le} due to unbound types`,[c,M])},enumerable:!0,configurable:!0};return I?he.set=()=>Mi(`Cannot access ${le} due to unbound types`,[c,M]):he.set=ae=>pt(le+" is a read-only property"),Object.defineProperty(Y.registeredClass.instancePrototype,s,he),An([],I?[c,M]:[c],ae=>{var pe=ae[0],Xe={get(){var it=pc(this,Y,le+" getter");return pe.fromWireType(d(x,it))},enumerable:!0};if(I){I=Un(T,I);var dt=ae[1];Xe.set=function(it){var Lt=pc(this,Y,le+" setter"),xt=[];I($,Lt,dt.toWireType(xt,it)),ra(xt)}}return Object.defineProperty(Y.registeredClass.instancePrototype,s,Xe),[]}),[]})},ch=(i,s,c)=>{i=Vt(i),An([],[s],l=>(l=l[0],t[i]=l.fromWireType(c),[]))},mc=[],Nn=[0,1,,1,null,1,!0,1,!1,1],aa=i=>{i>9&&--Nn[i+1]===0&&(A(Nn[i]!==void 0,"Decref for unallocated handle."),Nn[i]=void 0,mc.push(i))},Gt={toValue:i=>(i||pt(`Cannot use deleted val. handle = ${i}`),A(i===2||Nn[i]!==void 0&&i%2===0,`invalid handle: ${i}`),Nn[i]),toHandle:i=>{switch(i){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=mc.pop()||Nn.length;return Nn[s]=i,Nn[s+1]=1,s}}}},_c={name:"emscripten::val",fromWireType:i=>{var s=Gt.toValue(i);return aa(i),s},toWireType:(i,s)=>Gt.toHandle(s),argPackAdvance:In,readValueFromPointer:ts,destructorFunction:null},xc=i=>vn(i,_c),lh=(i,s,c)=>{switch(s){case 1:return c?function(l){return this.fromWireType(Ze[l])}:function(l){return this.fromWireType(st[l])};case 2:return c?function(l){return this.fromWireType(oe[l>>1])}:function(l){return this.fromWireType(de[l>>1])};case 4:return c?function(l){return this.fromWireType(ie[l>>2])}:function(l){return this.fromWireType(ye[l>>2])};default:throw new TypeError(`invalid integer width (${s}): ${i}`)}},uh=(i,s,c,l)=>{s=Vt(s);function d(){}d.values={},vn(i,{name:s,constructor:d,fromWireType:function(x){return this.constructor.values[x]},toWireType:(x,M)=>M.value,argPackAdvance:In,readValueFromPointer:lh(s,c,l),destructorFunction:null}),ia(s,d)},as=(i,s)=>{var c=Ei[i];return c===void 0&&pt(`${s} has unknown type ${dc(i)}`),c},hh=(i,s,c)=>{var l=as(i,"enum");s=Vt(s);var d=l.constructor,x=Object.create(l.constructor.prototype,{value:{value:c},constructor:{value:Qr(`${l.name}_${s}`,function(){})}});d.values[c]=x,d[s]=x},dh=(i,s)=>{switch(s){case 4:return function(c){return this.fromWireType(Be[c>>2])};case 8:return function(c){return this.fromWireType(tt[c>>3])};default:throw new TypeError(`invalid float width (${s}): ${i}`)}},fh=(i,s,c)=>{s=Vt(s),vn(i,{name:s,fromWireType:l=>l,toWireType:(l,d)=>{if(typeof d!="number"&&typeof d!="boolean")throw new TypeError(`Cannot convert ${bi(d)} to ${this.name}`);return d},argPackAdvance:In,readValueFromPointer:dh(s,c),destructorFunction:null})},ph=(i,s,c,l,d,x,M,T)=>{var I=ss(s,c);i=Vt(i),i=sa(i),d=Un(l,d,M),ia(i,function(){Mi(`Cannot call ${i} due to unbound types`,I)},s-1),An([],I,$=>{var Y=[$[0],null].concat($.slice(1));return uc(i,rs(i,Y,null,d,x,M),s-1),[]})},mh=(i,s,c,l,d)=>{s=Vt(s);const x=l===0;let M=I=>I;if(x){var T=32-8*c;M=I=>I<<T>>>T,d=M(d)}vn(i,{name:s,fromWireType:M,toWireType:(I,$)=>{if(typeof $!="number"&&typeof $!="boolean")throw new TypeError(`Cannot convert "${bi($)}" to ${s}`);return rc(s,$,l,d),$},argPackAdvance:In,readValueFromPointer:ic(s,c,l!==0),destructorFunction:null})},_h=(i,s,c)=>{var l=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],d=l[s];function x(M){var T=ye[M>>2],I=ye[M+4>>2];return new d(Ze.buffer,I,T)}c=Vt(c),vn(i,{name:c,fromWireType:x,argPackAdvance:In,readValueFromPointer:x},{ignoreDuplicateRegistrations:!0})},xh=Object.assign({optional:!0},_c),gh=(i,s)=>{vn(i,xh)},Ti=(i,s,c)=>(A(typeof c=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),j(i,st,s,c)),vh=(i,s)=>{s=Vt(s),vn(i,{name:s,fromWireType(c){for(var l=ye[c>>2],d=c+4,x,M,T=d,M=0;M<=l;++M){var I=d+M;if(M==l||st[I]==0){var $=I-T,Y=lt(T,$);x===void 0?x=Y:(x+="\0",x+=Y),T=I+1}}return On(c),x},toWireType(c,l){l instanceof ArrayBuffer&&(l=new Uint8Array(l));var d,x=typeof l=="string";x||ArrayBuffer.isView(l)&&l.BYTES_PER_ELEMENT==1||pt("Cannot pass non-string to std::string"),x?d=Q(l):d=l.length;var M=la(4+d+1),T=M+4;return ye[M>>2]=d,x?Ti(l,T,d+1):st.set(l,T),c!==null&&c.push(On,M),M},argPackAdvance:In,readValueFromPointer:ts,destructorFunction(c){On(c)}})},gc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,yh=(i,s)=>{A(i%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var c=i>>1,l=c+s/2,d=c;!(d>=l)&&de[d];)++d;if(d-c>16&&gc)return gc.decode(de.subarray(c,d));for(var x="",M=c;!(M>=l);++M){var T=de[M];if(T==0)break;x+=String.fromCharCode(T)}return x},Sh=(i,s,c)=>{if(A(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),A(typeof c=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<2)return 0;c-=2;for(var l=s,d=c<i.length*2?c/2:i.length,x=0;x<d;++x){var M=i.charCodeAt(x);oe[s>>1]=M,s+=2}return oe[s>>1]=0,s-l},Eh=i=>i.length*2,bh=(i,s)=>{A(i%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var c="",l=0;!(l>=s/4);l++){var d=ie[i+l*4>>2];if(!d)break;c+=String.fromCodePoint(d)}return c},Mh=(i,s,c)=>{if(A(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),A(typeof c=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<4)return 0;for(var l=s,d=l+c-4,x=0;x<i.length;++x){var M=i.codePointAt(x);if(M>65535&&x++,ie[s>>2]=M,s+=4,s+4>d)break}return ie[s>>2]=0,s-l},Th=i=>{for(var s=0,c=0;c<i.length;++c){var l=i.codePointAt(c);l>65535&&c++,s+=4}return s},wh=(i,s,c)=>{c=Vt(c);var l,d,x,M;s===2?(l=yh,d=Sh,M=Eh,x=T=>de[T>>1]):s===4&&(l=bh,d=Mh,M=Th,x=T=>ye[T>>2]),vn(i,{name:c,fromWireType:T=>{for(var I=ye[T>>2],$,Y=T+4,le=0;le<=I;++le){var he=T+4+le*s;if(le==I||x(he)==0){var ae=he-Y,pe=l(Y,ae);$===void 0?$=pe:($+="\0",$+=pe),Y=he+s}}return On(T),$},toWireType:(T,I)=>{typeof I!="string"&&pt(`Cannot pass non-string to C++ string type ${c}`);var $=M(I),Y=la(4+$+s);return ye[Y>>2]=$/s,d(I,Y+4,$+s),T!==null&&T.push(On,Y),Y},argPackAdvance:In,readValueFromPointer:ts,destructorFunction(T){On(T)}})},Ah=(i,s)=>{xc(i)},Rh=(i,s)=>{s=Vt(s),vn(i,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,l)=>{}})},Ch=()=>{throw new G},vc=(i,s,c)=>{var l=[],d=i.toWireType(l,c);return l.length&&(ye[s>>2]=Gt.toHandle(l)),d},Ph=(i,s,c)=>(i=Gt.toValue(i),s=as(s,"emval::as"),vc(s,c,i)),os=[],Dh=(i,s,c,l)=>(i=os[i],s=Gt.toValue(s),i(null,s,c,l)),Lh={},oa=i=>{var s=Lh[i];return s===void 0?Vt(i):s},Fh=(i,s,c,l,d)=>(i=os[i],s=Gt.toValue(s),c=oa(c),i(s,s[c],l,d)),yc=()=>globalThis,Ih=i=>i===0?Gt.toHandle(yc()):(i=oa(i),Gt.toHandle(yc()[i])),Uh=i=>{var s=os.length;return os.push(i),s},Nh=(i,s)=>{for(var c=new Array(i),l=0;l<i;++l)c[l]=as(ye[s+l*4>>2],`parameter ${l}`);return c},Oh=(i,s,c)=>{var l=Nh(i,s),d=l.shift();i--;var x=`return function (obj, func, destructorsRef, args) {
`,M=0,T=[];c===0&&T.push("obj");for(var I=["retType"],$=[d],Y=0;Y<i;++Y)T.push(`arg${Y}`),I.push(`argType${Y}`),$.push(l[Y]),x+=`  var arg${Y} = argType${Y}.readValueFromPointer(args${M?"+"+M:""});
`,M+=l[Y].argPackAdvance;var le=c===1?"new func":"func.call";x+=`  var rv = ${le}(${T.join(", ")});
`,d.isVoid||(I.push("emval_returnValue"),$.push(vc),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),x+=`};
`;var he=new Function(...I,x)(...$),ae=`methodCaller<(${l.map(pe=>pe.name).join(", ")}) => ${d.name}>`;return Uh(Qr(ae,he))},kh=(i,s)=>(i=Gt.toValue(i),s=Gt.toValue(s),Gt.toHandle(i[s])),Bh=i=>{i>9&&(Nn[i+1]+=1)},zh=i=>(i=Gt.toValue(i),typeof i=="number"),Vh=i=>(i=Gt.toValue(i),typeof i=="string"),Gh=()=>Gt.toHandle([]),Hh=i=>Gt.toHandle(oa(i)),Wh=i=>{var s=Gt.toValue(i);ra(s),aa(i)},Xh=(i,s)=>{i=as(i,"_emval_take_value");var c=i.readValueFromPointer(s);return Gt.toHandle(c)},$h=i=>{throw i=Gt.toValue(i),i},jh=i=>i%4===0&&(i%100!==0||i%400===0),qh=[0,31,60,91,121,152,182,213,244,274,305,335],Yh=[0,31,59,90,120,151,181,212,243,273,304,334],Sc=i=>{var s=jh(i.getFullYear()),c=s?qh:Yh,l=c[i.getMonth()]+i.getDate()-1;return l},Kh=9007199254740992,Zh=-9007199254740992,Ec=i=>i<Zh||i>Kh?NaN:Number(i);function Jh(i,s){i=Ec(i);var c=new Date(i*1e3);ie[s>>2]=c.getSeconds(),ie[s+4>>2]=c.getMinutes(),ie[s+8>>2]=c.getHours(),ie[s+12>>2]=c.getDate(),ie[s+16>>2]=c.getMonth(),ie[s+20>>2]=c.getFullYear()-1900,ie[s+24>>2]=c.getDay();var l=Sc(c)|0;ie[s+28>>2]=l,ie[s+36>>2]=-(c.getTimezoneOffset()*60);var d=new Date(c.getFullYear(),0,1),x=new Date(c.getFullYear(),6,1).getTimezoneOffset(),M=d.getTimezoneOffset(),T=(x!=M&&c.getTimezoneOffset()==Math.min(M,x))|0;ie[s+32>>2]=T}var Qh=function(i){var s=(()=>{var c=new Date(ie[i+20>>2]+1900,ie[i+16>>2],ie[i+12>>2],ie[i+8>>2],ie[i+4>>2],ie[i>>2],0),l=ie[i+32>>2],d=c.getTimezoneOffset(),x=new Date(c.getFullYear(),0,1),M=new Date(c.getFullYear(),6,1).getTimezoneOffset(),T=x.getTimezoneOffset(),I=Math.min(T,M);if(l<0)ie[i+32>>2]=+(M!=T&&I==d);else if(l>0!=(I==d)){var $=Math.max(T,M),Y=l>0?I:$;c.setTime(c.getTime()+(Y-d)*6e4)}ie[i+24>>2]=c.getDay();var le=Sc(c)|0;ie[i+28>>2]=le,ie[i>>2]=c.getSeconds(),ie[i+4>>2]=c.getMinutes(),ie[i+8>>2]=c.getHours(),ie[i+12>>2]=c.getDate(),ie[i+16>>2]=c.getMonth(),ie[i+20>>2]=c.getYear();var he=c.getTime();return isNaN(he)?-1:he/1e3})();return BigInt(s)},ed=(i,s,c,l)=>{var d=new Date().getFullYear(),x=new Date(d,0,1),M=new Date(d,6,1),T=x.getTimezoneOffset(),I=M.getTimezoneOffset(),$=Math.max(T,I);ye[i>>2]=$*60,ie[s>>2]=+(T!=I);var Y=ae=>{var pe=ae>=0?"-":"+",Xe=Math.abs(ae),dt=String(Math.floor(Xe/60)).padStart(2,"0"),it=String(Xe%60).padStart(2,"0");return`UTC${pe}${dt}${it}`},le=Y(T),he=Y(I);A(le),A(he),A(Q(le)<=16,`timezone name truncated to fit in TZNAME_MAX (${le})`),A(Q(he)<=16,`timezone name truncated to fit in TZNAME_MAX (${he})`),I<T?(Ti(le,c,17),Ti(he,l,17)):(Ti(le,l,17),Ti(he,c,17))},bc=()=>performance.now(),Mc=()=>Date.now(),td=i=>i>=0&&i<=3;function nd(i,s,c){if(!td(i))return 28;var l;i===0?l=Mc():l=bc();var d=Math.round(l*1e3*1e3);return At[c>>3]=BigInt(d),0}var cs=[],id=(i,s)=>{A(Array.isArray(cs)),A(s%16==0),cs.length=0;for(var c;c=st[i++];){var l=String.fromCharCode(c),d=["d","f","i","p"];d.push("j"),A(d.includes(l),`Invalid character ${c}("${l}") in readEmAsmArgs! Use only [${d}], and do not specify "v" for void return argument.`);var x=c!=105;x&=c!=112,s+=x&&s%8?4:0,cs.push(c==112?ye[s>>2]:c==106?At[s>>3]:c==105?ie[s>>2]:tt[s>>3]),s+=x?8:4}return cs},rd=(i,s,c)=>{var l=id(s,c);return A(Pc.hasOwnProperty(i),`No EM_ASM constant found at address ${i}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Pc[i](...l)},sd=(i,s,c)=>rd(i,s,c),Tc=()=>2147483648,ad=()=>Tc(),od=(i,s)=>(A(s,"alignment argument is required"),Math.ceil(i/s)*s),cd=i=>{var s=_t.buffer,c=(i-s.byteLength+65535)/65536|0;try{return _t.grow(c),O(),1}catch(l){L(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${i} bytes, but got error: ${l}`)}},ld=i=>{var s=st.length;i>>>=0,A(i>s);var c=Tc();if(i>c)return L(`Cannot enlarge memory, requested ${i} bytes, but the limit is ${c} bytes!`),!1;for(var l=1;l<=4;l*=2){var d=s*(1+.2/l);d=Math.min(d,i+100663296);var x=Math.min(c,od(Math.max(i,d),65536)),M=cd(x);if(M)return!0}return L(`Failed to grow the heap from ${s} bytes to ${x} bytes, not enough memory!`),!1},ca={},ud=()=>p||"./this.program",br=()=>{if(!br.strings){var i=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:i,_:ud()};for(var c in ca)ca[c]===void 0?delete s[c]:s[c]=ca[c];var l=[];for(var c in s)l.push(`${c}=${s[c]}`);br.strings=l}return br.strings},hd=(i,s)=>{var c=0,l=0;for(var d of br()){var x=s+c;ye[i+l>>2]=x,c+=Ti(d,x,1/0)+1,l+=4}return 0},dd=(i,s)=>{var c=br();ye[i>>2]=c.length;var l=0;for(var d of c)l+=Q(d)+1;return ye[s>>2]=l,0},wc=0,Ac=()=>Te||wc>0,fd=i=>{Ac()||(t.onExit?.(i),B=!0),f(i,new je(i))},pd=(i,s)=>{if(Mp(),Ac()&&!s){var c=`program exited (with status: ${i}), but keepRuntimeAlive() is set (counter=${wc}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;at?.(c),L(c)}fd(i)},md=pd;function _d(i){try{var s=St.getStreamFromFD(i);return E.close(s),0}catch(c){if(typeof E>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var xd=(i,s,c,l)=>{for(var d=0,x=0;x<c;x++){var M=ye[s>>2],T=ye[s+4>>2];s+=8;var I=E.read(i,Ze,M,T,l);if(I<0)return-1;if(d+=I,I<T)break}return d};function gd(i,s,c,l){try{var d=St.getStreamFromFD(i),x=xd(d,s,c);return ye[l>>2]=x,0}catch(M){if(typeof E>"u"||M.name!=="ErrnoError")throw M;return M.errno}}function vd(i,s,c,l){s=Ec(s);try{if(isNaN(s))return 61;var d=St.getStreamFromFD(i);return E.llseek(d,s,c),At[l>>3]=BigInt(d.position),d.getdents&&s===0&&c===0&&(d.getdents=null),0}catch(x){if(typeof E>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var yd=(i,s,c,l)=>{for(var d=0,x=0;x<c;x++){var M=ye[s>>2],T=ye[s+4>>2];s+=8;var I=E.write(i,Ze,M,T,l);if(I<0)return-1;if(d+=I,I<T)break}return d};function Sd(i,s,c,l){try{var d=St.getStreamFromFD(i),x=yd(d,s,c);return ye[l>>2]=x,0}catch(M){if(typeof E>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Ed=i=>i,bd=i=>{var s=t["_"+i];return A(s,"Cannot call unknown function "+i+", make sure it is exported"),s},Md=(i,s)=>{A(i.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Ze.set(i,s)},ls=i=>Nc(i),Td=i=>{var s=Q(i)+1,c=ls(s);return Ti(i,c,s),c},Rc=(i,s,c,l,d)=>{var x={string:pe=>{var Xe=0;return pe!=null&&pe!==0&&(Xe=Td(pe)),Xe},array:pe=>{var Xe=ls(pe.length);return Md(pe,Xe),Xe}};function M(pe){return s==="string"?lt(pe):s==="boolean"?!!pe:pe}var T=bd(i),I=[],$=0;if(A(s!=="array",'Return type should not be "array".'),l)for(var Y=0;Y<l.length;Y++){var le=x[c[Y]];le?($===0&&($=z()),I[Y]=le(l[Y])):I[Y]=l[Y]}var he=T(...I);function ae(pe){return $!==0&&H($),M(pe)}return he=ae(he),he},wd=(i,s,c,l)=>(...d)=>Rc(i,s,c,d),Ad=(...i)=>E.createPath(...i),Rd=(...i)=>E.unlink(...i),Cd=(...i)=>E.createLazyFile(...i),Pd=(...i)=>E.createDevice(...i),Dd=i=>us(i),Ld=i=>da(i),Fd=i=>{var s=z(),c=ls(4),l=ls(4);kc(i,c,l);var d=ye[c>>2],x=ye[l>>2],M=lt(d);On(d);var T;return x&&(T=lt(x),On(x)),H(s),[M,T]},Cc=i=>Fd(i);E.createPreloadedFile=Ft,E.staticInit(),Wu(),Ju(),A(Nn.length===10),t.noExitRuntime&&(Te=t.noExitRuntime),t.preloadPlugins&&(yt=t.preloadPlugins),t.print&&(U=t.print),t.printErr&&(L=t.printErr),t.wasmBinary&&(N=t.wasmBinary),Nd(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),A(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),A(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),A(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),A(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),A(typeof t.read>"u","Module.read option was removed"),A(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),A(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),A(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),A(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),A(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),A(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),A(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),A(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=F,t.removeRunDependency=w,t.ccall=Rc,t.cwrap=wd,t.FS_createPreloadedFile=Ft,t.FS_unlink=Rd,t.FS_createPath=Ad,t.FS_createDevice=Pd,t.FS=E,t.FS_createDataFile=ze,t.FS_createLazyFile=Cd,t.MEMFS=ge;var Id=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];Id.forEach(Me);var Ud=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Ud.forEach(we),t.incrementExceptionRefcount=Dd,t.decrementExceptionRefcount=Ld,t.getExceptionMessage=Cc;function Nd(){ue("fetchSettings")}var Pc={626852:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(i){Object.defineProperty(t,i,{get:function(){return t["get_"+i]()},set:function(s){},enumerable:!0,configurable:!0})})}},Dc=ee("___getTypeName"),la=ee("_malloc"),ua=ee("_fflush"),On=ee("_free"),ha=ee("_emscripten_stack_get_end"),Lc=ee("_strerror"),_e=ee("_setThrew"),Fc=ee("__emscripten_tempret_set"),Ic=ee("_emscripten_stack_init"),Uc=ee("__emscripten_stack_restore"),Nc=ee("__emscripten_stack_alloc"),Oc=ee("_emscripten_stack_get_current"),da=ee("___cxa_decrement_exception_refcount"),us=ee("___cxa_increment_exception_refcount"),kc=ee("___get_exception_message"),Bc=ee("___cxa_can_catch"),zc=ee("___cxa_get_exception_ptr");function Od(i){Dc=re("__getTypeName",1),la=re("malloc",1),ua=re("fflush",1),On=re("free",1),ha=i.emscripten_stack_get_end,i.emscripten_stack_get_base,Lc=re("strerror",1),_e=re("setThrew",2),Fc=re("_emscripten_tempret_set",1),Ic=i.emscripten_stack_init,i.emscripten_stack_get_free,Uc=i._emscripten_stack_restore,Nc=i._emscripten_stack_alloc,Oc=i.emscripten_stack_get_current,da=re("__cxa_decrement_exception_refcount",1),us=re("__cxa_increment_exception_refcount",1),kc=re("__get_exception_message",3),Bc=re("__cxa_can_catch",3),zc=re("__cxa_get_exception_ptr",1)}var Vc={__assert_fail:gn,__cxa_begin_catch:Xr,__cxa_current_primary_exception:$r,__cxa_end_catch:gr,__cxa_find_matching_catch_2:jr,__cxa_find_matching_catch_3:Hi,__cxa_find_matching_catch_4:qr,__cxa_rethrow:vr,__cxa_rethrow_primary_exception:Ys,__cxa_throw:Ks,__cxa_uncaught_exceptions:Zs,__resumeException:Js,__syscall_dup3:an,__syscall_fcntl64:Jt,__syscall_fstat64:un,__syscall_ioctl:Kt,__syscall_lstat64:Qt,__syscall_newfstatat:yr,__syscall_openat:Xn,__syscall_stat64:Fu,_abort_js:Iu,_embind_register_bigint:Nu,_embind_register_bool:Ou,_embind_register_class:eh,_embind_register_class_class_function:rh,_embind_register_class_constructor:sh,_embind_register_class_function:ah,_embind_register_class_property:oh,_embind_register_constant:ch,_embind_register_emval:xc,_embind_register_enum:uh,_embind_register_enum_value:hh,_embind_register_float:fh,_embind_register_function:ph,_embind_register_integer:mh,_embind_register_memory_view:_h,_embind_register_optional:gh,_embind_register_std_string:vh,_embind_register_std_wstring:wh,_embind_register_user_type:Ah,_embind_register_void:Rh,_emscripten_throw_longjmp:Ch,_emval_as:Ph,_emval_call:Dh,_emval_call_method:Fh,_emval_decref:aa,_emval_get_global:Ih,_emval_get_method_caller:Oh,_emval_get_property:kh,_emval_incref:Bh,_emval_is_number:zh,_emval_is_string:Vh,_emval_new_array:Gh,_emval_new_cstring:Hh,_emval_run_destructors:Wh,_emval_take_value:Xh,_emval_throw:$h,_localtime_js:Jh,_mktime_js:Qh,_tzset_js:ed,clock_time_get:nd,emscripten_asm_const_int:sd,emscripten_date_now:Mc,emscripten_get_heap_max:ad,emscripten_get_now:bc,emscripten_resize_heap:ld,environ_get:hd,environ_sizes_get:dd,exit:md,fd_close:_d,fd_read:gd,fd_seek:vd,fd_write:Sd,invoke_ddd:sp,invoke_dddi:wf,invoke_dddidi:Af,invoke_ddidi:Tf,invoke_di:Rf,invoke_dii:_f,invoke_diii:Zd,invoke_diiii:Mf,invoke_diiiidd:Ef,invoke_diiiidi:ef,invoke_diiiii:$d,invoke_diiiiii:of,invoke_diiiiiii:Cf,invoke_diiiiiiiii:sf,invoke_diiiiiiiiiiii:af,invoke_fiii:vp,invoke_i:jd,invoke_id:ep,invoke_ii:zd,invoke_iid:Of,invoke_iidddd:hp,invoke_iidiiid:ff,invoke_iif:up,invoke_iii:kd,invoke_iiid:mf,invoke_iiididdddddd:pf,invoke_iiidiiiiiiii:df,invoke_iiii:Hd,invoke_iiiidddiiiii:Df,invoke_iiiii:Kd,invoke_iiiiid:$f,invoke_iiiiii:Gf,invoke_iiiiiii:Bf,invoke_iiiiiiii:Nf,invoke_iiiiiiiidd:jf,invoke_iiiiiiiii:Sf,invoke_iiiiiiiiii:zf,invoke_iiiiiiiiiidddiiiiiiiii:hf,invoke_iiiiiiiiiii:_p,invoke_iiiiiiiiiiii:yp,invoke_iiiiiiiiiiiii:gp,invoke_iiij:Vf,invoke_iiji:Xf,invoke_j:pp,invoke_ji:Qf,invoke_jiiii:xp,invoke_jij:Jf,invoke_v:Gd,invoke_vi:Vd,invoke_vid:kf,invoke_viddd:Hf,invoke_vidddd:Wf,invoke_vidi:bf,invoke_vidiii:lf,invoke_vif:cp,invoke_vii:Xd,invoke_viid:vf,invoke_viiddi:Zf,invoke_viiddidi:Kf,invoke_viiddii:Pf,invoke_viidi:gf,invoke_viidii:Qd,invoke_viidiiid:If,invoke_viidiiiii:uf,invoke_viidiiiiiiii:cf,invoke_viif:Ep,invoke_viii:Bd,invoke_viiid:nf,invoke_viiidd:Yf,invoke_viiidi:xf,invoke_viiididdddddd:Uf,invoke_viiidiiiiiiii:Ff,invoke_viiii:Yd,invoke_viiiiddd:qf,invoke_viiiidi:ap,invoke_viiiifi:op,invoke_viiiii:Wd,invoke_viiiiid:tf,invoke_viiiiii:qd,invoke_viiiiiii:Jd,invoke_viiiiiiii:yf,invoke_viiiiiiiiii:ip,invoke_viiiiiiiiiidddiiiiiiiii:Lf,invoke_viiiiiiiiiiid:rf,invoke_viiiiiiiiiiiii:np,invoke_viiiiiiiiiiiiiii:Sp,invoke_viiiiiiiiiiiiiiiiii:rp,invoke_viiiij:dp,invoke_viij:fp,invoke_viijii:mp,invoke_vij:lp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:tp,llvm_eh_typeid_for:Ed},wi=await Ee();function kd(i,s,c){var l=z();try{return xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;_e(1,0)}}function Bd(i,s,c,l){var d=z();try{xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function zd(i,s){var c=z();try{return xe(i)(s)}catch(l){if(H(c),!(l instanceof S))throw l;_e(1,0)}}function Vd(i,s){var c=z();try{xe(i)(s)}catch(l){if(H(c),!(l instanceof S))throw l;_e(1,0)}}function Gd(i){var s=z();try{xe(i)()}catch(c){if(H(s),!(c instanceof S))throw c;_e(1,0)}}function Hd(i,s,c,l){var d=z();try{return xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function Wd(i,s,c,l,d,x){var M=z();try{xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function Xd(i,s,c){var l=z();try{xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;_e(1,0)}}function $d(i,s,c,l,d,x){var M=z();try{return xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function jd(i){var s=z();try{return xe(i)()}catch(c){if(H(s),!(c instanceof S))throw c;_e(1,0)}}function qd(i,s,c,l,d,x,M){var T=z();try{xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function Yd(i,s,c,l,d){var x=z();try{xe(i)(s,c,l,d)}catch(M){if(H(x),!(M instanceof S))throw M;_e(1,0)}}function Kd(i,s,c,l,d){var x=z();try{return xe(i)(s,c,l,d)}catch(M){if(H(x),!(M instanceof S))throw M;_e(1,0)}}function Zd(i,s,c,l){var d=z();try{return xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function Jd(i,s,c,l,d,x,M,T){var I=z();try{xe(i)(s,c,l,d,x,M,T)}catch($){if(H(I),!($ instanceof S))throw $;_e(1,0)}}function Qd(i,s,c,l,d,x){var M=z();try{xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function ef(i,s,c,l,d,x,M){var T=z();try{return xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function tf(i,s,c,l,d,x,M){var T=z();try{xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function nf(i,s,c,l,d){var x=z();try{xe(i)(s,c,l,d)}catch(M){if(H(x),!(M instanceof S))throw M;_e(1,0)}}function rf(i,s,c,l,d,x,M,T,I,$,Y,le,he){var ae=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he)}catch(pe){if(H(ae),!(pe instanceof S))throw pe;_e(1,0)}}function sf(i,s,c,l,d,x,M,T,I,$){var Y=z();try{return xe(i)(s,c,l,d,x,M,T,I,$)}catch(le){if(H(Y),!(le instanceof S))throw le;_e(1,0)}}function af(i,s,c,l,d,x,M,T,I,$,Y,le,he){var ae=z();try{return xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he)}catch(pe){if(H(ae),!(pe instanceof S))throw pe;_e(1,0)}}function of(i,s,c,l,d,x,M){var T=z();try{return xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function cf(i,s,c,l,d,x,M,T,I,$,Y,le){var he=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y,le)}catch(ae){if(H(he),!(ae instanceof S))throw ae;_e(1,0)}}function lf(i,s,c,l,d,x){var M=z();try{xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function uf(i,s,c,l,d,x,M,T,I){var $=z();try{xe(i)(s,c,l,d,x,M,T,I)}catch(Y){if(H($),!(Y instanceof S))throw Y;_e(1,0)}}function hf(i,s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe,dt,it,Lt,xt,en,Ht){var on=z();try{return xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe,dt,it,Lt,xt,en,Ht)}catch(Ct){if(H(on),!(Ct instanceof S))throw Ct;_e(1,0)}}function df(i,s,c,l,d,x,M,T,I,$,Y,le){var he=z();try{return xe(i)(s,c,l,d,x,M,T,I,$,Y,le)}catch(ae){if(H(he),!(ae instanceof S))throw ae;_e(1,0)}}function ff(i,s,c,l,d,x,M){var T=z();try{return xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function pf(i,s,c,l,d,x,M,T,I,$,Y,le){var he=z();try{return xe(i)(s,c,l,d,x,M,T,I,$,Y,le)}catch(ae){if(H(he),!(ae instanceof S))throw ae;_e(1,0)}}function mf(i,s,c,l){var d=z();try{return xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function _f(i,s,c){var l=z();try{return xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;_e(1,0)}}function xf(i,s,c,l,d,x){var M=z();try{xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function gf(i,s,c,l,d){var x=z();try{xe(i)(s,c,l,d)}catch(M){if(H(x),!(M instanceof S))throw M;_e(1,0)}}function vf(i,s,c,l){var d=z();try{xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function yf(i,s,c,l,d,x,M,T,I){var $=z();try{xe(i)(s,c,l,d,x,M,T,I)}catch(Y){if(H($),!(Y instanceof S))throw Y;_e(1,0)}}function Sf(i,s,c,l,d,x,M,T,I){var $=z();try{return xe(i)(s,c,l,d,x,M,T,I)}catch(Y){if(H($),!(Y instanceof S))throw Y;_e(1,0)}}function Ef(i,s,c,l,d,x,M){var T=z();try{return xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function bf(i,s,c,l){var d=z();try{xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function Mf(i,s,c,l,d){var x=z();try{return xe(i)(s,c,l,d)}catch(M){if(H(x),!(M instanceof S))throw M;_e(1,0)}}function Tf(i,s,c,l,d){var x=z();try{return xe(i)(s,c,l,d)}catch(M){if(H(x),!(M instanceof S))throw M;_e(1,0)}}function wf(i,s,c,l){var d=z();try{return xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function Af(i,s,c,l,d,x){var M=z();try{return xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function Rf(i,s){var c=z();try{return xe(i)(s)}catch(l){if(H(c),!(l instanceof S))throw l;_e(1,0)}}function Cf(i,s,c,l,d,x,M,T){var I=z();try{return xe(i)(s,c,l,d,x,M,T)}catch($){if(H(I),!($ instanceof S))throw $;_e(1,0)}}function Pf(i,s,c,l,d,x,M){var T=z();try{xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function Df(i,s,c,l,d,x,M,T,I,$,Y,le){var he=z();try{return xe(i)(s,c,l,d,x,M,T,I,$,Y,le)}catch(ae){if(H(he),!(ae instanceof S))throw ae;_e(1,0)}}function Lf(i,s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe,dt,it,Lt,xt,en,Ht,on){var Ct=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe,dt,it,Lt,xt,en,Ht,on)}catch(Ai){if(H(Ct),!(Ai instanceof S))throw Ai;_e(1,0)}}function Ff(i,s,c,l,d,x,M,T,I,$,Y,le,he){var ae=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he)}catch(pe){if(H(ae),!(pe instanceof S))throw pe;_e(1,0)}}function If(i,s,c,l,d,x,M,T){var I=z();try{xe(i)(s,c,l,d,x,M,T)}catch($){if(H(I),!($ instanceof S))throw $;_e(1,0)}}function Uf(i,s,c,l,d,x,M,T,I,$,Y,le,he){var ae=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he)}catch(pe){if(H(ae),!(pe instanceof S))throw pe;_e(1,0)}}function Nf(i,s,c,l,d,x,M,T){var I=z();try{return xe(i)(s,c,l,d,x,M,T)}catch($){if(H(I),!($ instanceof S))throw $;_e(1,0)}}function Of(i,s,c){var l=z();try{return xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;_e(1,0)}}function kf(i,s,c){var l=z();try{xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;_e(1,0)}}function Bf(i,s,c,l,d,x,M){var T=z();try{return xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function zf(i,s,c,l,d,x,M,T,I,$){var Y=z();try{return xe(i)(s,c,l,d,x,M,T,I,$)}catch(le){if(H(Y),!(le instanceof S))throw le;_e(1,0)}}function Vf(i,s,c,l){var d=z();try{return xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function Gf(i,s,c,l,d,x){var M=z();try{return xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function Hf(i,s,c,l,d){var x=z();try{xe(i)(s,c,l,d)}catch(M){if(H(x),!(M instanceof S))throw M;_e(1,0)}}function Wf(i,s,c,l,d,x){var M=z();try{xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function Xf(i,s,c,l){var d=z();try{return xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function $f(i,s,c,l,d,x){var M=z();try{return xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function jf(i,s,c,l,d,x,M,T,I,$){var Y=z();try{return xe(i)(s,c,l,d,x,M,T,I,$)}catch(le){if(H(Y),!(le instanceof S))throw le;_e(1,0)}}function qf(i,s,c,l,d,x,M,T){var I=z();try{xe(i)(s,c,l,d,x,M,T)}catch($){if(H(I),!($ instanceof S))throw $;_e(1,0)}}function Yf(i,s,c,l,d,x){var M=z();try{xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function Kf(i,s,c,l,d,x,M,T){var I=z();try{xe(i)(s,c,l,d,x,M,T)}catch($){if(H(I),!($ instanceof S))throw $;_e(1,0)}}function Zf(i,s,c,l,d,x){var M=z();try{xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function Jf(i,s,c){var l=z();try{return xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;return _e(1,0),0n}}function Qf(i,s){var c=z();try{return xe(i)(s)}catch(l){if(H(c),!(l instanceof S))throw l;return _e(1,0),0n}}function ep(i,s){var c=z();try{return xe(i)(s)}catch(l){if(H(c),!(l instanceof S))throw l;_e(1,0)}}function tp(i,s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe,dt,it,Lt,xt,en,Ht,on,Ct,Ai,wp,Ap,Rp,Cp,Pp,Dp,Lp,Fp,Ip,Up,Np,Op,kp,Bp,zp,Vp,Gp,Hp,Wp,Xp,$p,jp,qp,Yp,Kp,Zp,Jp,Qp,em,tm,nm,im,rm,sm,am,om,cm,lm,um,hm,dm,fm,pm,mm,_m,xm,gm,vm,ym,Sm,Em,bm,Mm,Tm,wm,Am,Rm){var Cm=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe,dt,it,Lt,xt,en,Ht,on,Ct,Ai,wp,Ap,Rp,Cp,Pp,Dp,Lp,Fp,Ip,Up,Np,Op,kp,Bp,zp,Vp,Gp,Hp,Wp,Xp,$p,jp,qp,Yp,Kp,Zp,Jp,Qp,em,tm,nm,im,rm,sm,am,om,cm,lm,um,hm,dm,fm,pm,mm,_m,xm,gm,vm,ym,Sm,Em,bm,Mm,Tm,wm,Am,Rm)}catch(Hc){if(H(Cm),!(Hc instanceof S))throw Hc;_e(1,0)}}function np(i,s,c,l,d,x,M,T,I,$,Y,le,he,ae){var pe=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he,ae)}catch(Xe){if(H(pe),!(Xe instanceof S))throw Xe;_e(1,0)}}function ip(i,s,c,l,d,x,M,T,I,$,Y){var le=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y)}catch(he){if(H(le),!(he instanceof S))throw he;_e(1,0)}}function rp(i,s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe,dt,it,Lt){var xt=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe,dt,it,Lt)}catch(en){if(H(xt),!(en instanceof S))throw en;_e(1,0)}}function sp(i,s,c){var l=z();try{return xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;_e(1,0)}}function ap(i,s,c,l,d,x,M){var T=z();try{xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function op(i,s,c,l,d,x,M){var T=z();try{xe(i)(s,c,l,d,x,M)}catch(I){if(H(T),!(I instanceof S))throw I;_e(1,0)}}function cp(i,s,c){var l=z();try{xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;_e(1,0)}}function lp(i,s,c){var l=z();try{xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;_e(1,0)}}function up(i,s,c){var l=z();try{return xe(i)(s,c)}catch(d){if(H(l),!(d instanceof S))throw d;_e(1,0)}}function hp(i,s,c,l,d,x){var M=z();try{return xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function dp(i,s,c,l,d,x){var M=z();try{xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function fp(i,s,c,l){var d=z();try{xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function pp(i){var s=z();try{return xe(i)()}catch(c){if(H(s),!(c instanceof S))throw c;return _e(1,0),0n}}function mp(i,s,c,l,d,x){var M=z();try{xe(i)(s,c,l,d,x)}catch(T){if(H(M),!(T instanceof S))throw T;_e(1,0)}}function _p(i,s,c,l,d,x,M,T,I,$,Y){var le=z();try{return xe(i)(s,c,l,d,x,M,T,I,$,Y)}catch(he){if(H(le),!(he instanceof S))throw he;_e(1,0)}}function xp(i,s,c,l,d){var x=z();try{return xe(i)(s,c,l,d)}catch(M){if(H(x),!(M instanceof S))throw M;return _e(1,0),0n}}function gp(i,s,c,l,d,x,M,T,I,$,Y,le,he){var ae=z();try{return xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he)}catch(pe){if(H(ae),!(pe instanceof S))throw pe;_e(1,0)}}function vp(i,s,c,l){var d=z();try{return xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}function yp(i,s,c,l,d,x,M,T,I,$,Y,le){var he=z();try{return xe(i)(s,c,l,d,x,M,T,I,$,Y,le)}catch(ae){if(H(he),!(ae instanceof S))throw ae;_e(1,0)}}function Sp(i,s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe){var dt=z();try{xe(i)(s,c,l,d,x,M,T,I,$,Y,le,he,ae,pe,Xe)}catch(it){if(H(dt),!(it instanceof S))throw it;_e(1,0)}}function Ep(i,s,c,l){var d=z();try{xe(i)(s,c,l)}catch(x){if(H(d),!(x instanceof S))throw x;_e(1,0)}}var Gc;function bp(){Ic(),K()}function fa(){if(Ie>0){Tt=fa;return}if(bp(),ot(),Ie>0){Tt=fa;return}function i(){A(!Gc),Gc=!0,t.calledRun=!0,!B&&(ct(),Ge?.(t),t.onRuntimeInitialized?.(),J("onRuntimeInitialized"),A(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Rt())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),i()},1)):i(),P()}function Mp(){var i=U,s=L,c=!1;U=L=l=>{c=!0};try{ua(0),["stdout","stderr"].forEach(l=>{var d=E.analyzePath("/dev/"+l);if(d){var x=d.object,M=x.rdev,T=Fe.ttys[M];T?.output?.length&&(c=!0)}})}catch{}U=i,L=s,c&&Le("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Tp(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();J("preInit")}Tp(),fa(),Et?e=t:e=new Promise((i,s)=>{Ge=i,at=s});for(const i of Object.keys(t))i in r||Object.defineProperty(r,i,{configurable:!0,get(){X(`Access to module property ('${i}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});class Qo{constructor(e,t){this.meta=e;const n=new Float32Array(t),a=o=>n.subarray(e.layout[o].offset,e.layout[o].offset+e.layout[o].n);this.mean=a("obs_normalizer._mean"),this.std=a("onnx::Div_24"),this.layers=[0,2,4,6].map(o=>({W:a(`mlp.${o}.weight`),b:a(`mlp.${o}.bias`),out:e.layout[`mlp.${o}.weight`].dims[0],inp:e.layout[`mlp.${o}.weight`].dims[1]})),this.bufs=this.layers.map(o=>new Float32Array(o.out)),this.x0=new Float32Array(this.layers[0].inp)}static async load(e){const t=await(await fetch(`${e}/policy.json`)).json(),n=await(await fetch(`${e}/policy.bin`)).arrayBuffer();return new Qo(t,n)}act(e){const t=this.x0;for(let a=0;a<t.length;a++)t[a]=(e[a]-this.mean[a])/this.std[a];let n=t;return this.layers.forEach((a,o)=>{const u=this.bufs[o];for(let h=0;h<a.out;h++){let p=a.b[h];const f=h*a.inp;for(let _=0;_<a.inp;_++)p+=a.W[f+_]*n[_];u[h]=o<this.layers.length-1?p>0?p:Math.expm1(p):p}n=u}),n}}const Xl=.005,lS=4;class uS{constructor(e,t,n){this.mujoco=e,this.model=t,this.policy=n,this.data=new e.MjData(t);const a=t,o=n.meta,u=o.joint_names;this.n=u.length,this.qadr=new Int32Array(this.n),this.vadr=new Int32Array(this.n),this.act=new Int32Array(this.n);const h=e.mjtObj,p=(f,_)=>{const g=e.mj_name2id(a,f.value,_);if(g<0)throw new Error("name not found: "+_);return g};u.forEach((f,_)=>{const g=p(h.mjOBJ_JOINT,"robot/"+f);this.qadr[_]=a.jnt_qposadr[g],this.vadr[_]=a.jnt_dofadr[g],this.act[_]=p(h.mjOBJ_ACTUATOR,"robot/"+f)}),this.dpos=Float32Array.from(o.default_joint_pos),this.scale=Float32Array.from(o.action_scale),this.pelvis=p(h.mjOBJ_BODY,"robot/pelvis"),this.stool=p(h.mjOBJ_BODY,"stool/base_link"),this.gyroAdr=a.sensor_adr[p(h.mjOBJ_SENSOR,"robot/imu_ang_vel")],this.obs=new Float32Array(96),this.last=new Float32Array(this.n),this.command=new Float32Array(3),this.stepCount=0,this.reset()}reset(){const e=this.mujoco;e.mj_resetDataKeyframe(this.model,this.data,0),e.mj_forward(this.model,this.data),this.last.fill(0),this.stepCount=0}buildObs(){const e=this.data,t=this.obs,n=e.xquat,a=this.pelvis*4,o=n[a],u=n[a+1],h=n[a+2],p=n[a+3],f=e.sensordata,_=this.gyroAdr;t[0]=f[_],t[1]=f[_+1],t[2]=f[_+2],t[3]=-(2*(u*p-o*h)),t[4]=-(2*(h*p+o*u)),t[5]=-(1-2*(u*u+h*h));const g=e.qpos,v=e.qvel;for(let y=0;y<this.n;y++)t[6+y]=g[this.qadr[y]]-this.dpos[y],t[35+y]=v[this.vadr[y]],t[64+y]=this.last[y];return t[93]=this.command[0],t[94]=this.command[1],t[95]=this.command[2],t}step(){if(this.stepCount%lS===0){const e=this.policy.act(this.buildObs()),t=this.data.ctrl;for(let n=0;n<this.n;n++)this.last[n]=e[n],t[this.act[n]]=this.dpos[n]+this.scale[n]*e[n]}this.mujoco.mj_step(this.model,this.data),this.stepCount++}pelvisPos(){const e=this.data.xpos,t=this.pelvis*3;return[e[t],e[t+1],e[t+2]]}stoolPos(){const e=this.data.xpos,t=this.stool*3;return[e[t],e[t+1],e[t+2]]}}const ec="./sim",$l=document.getElementById("status"),tc=r=>{$l.textContent=r,$l.style.display=r?"block":"none"};tc("Loading physics engine…");const Hr=await cS(),hS=await(await fetch(`${ec}/manifest.json`)).json();Hr.FS.mkdir("/w");tc("Loading robot model…");await Promise.all(hS.files.map(async r=>{const e=new Uint8Array(await(await fetch(`${ec}/${r}`)).arrayBuffer());Hr.FS.writeFile("/w/"+r,e)}));const Xt=Hr.MjModel.from_xml_path("/w/scene.xml"),dS=await Qo.load(ec),En=new uS(Hr,Xt,dS),ni=document.getElementById("app"),Wn=new Wy({antialias:!0});Wn.setPixelRatio(Math.min(window.devicePixelRatio,2));Wn.setSize(ni.clientWidth,ni.clientHeight);Wn.shadowMap.enabled=!0;Wn.shadowMap.type=Kl;Wn.outputColorSpace=ln;ni.appendChild(Wn.domElement);const Vi=new W0;Vi.background=new mt(16053751);Vi.fog=new jo(16053751,8,22);const zn=new Sn(40,ni.clientWidth/ni.clientHeight,.05,100);zn.up.set(0,0,1);zn.position.set(-2.4,-2.2,1.5);const Tn=new $y(zn,Wn.domElement);Tn.target.set(0,0,.55);Tn.enableDamping=!0;Tn.maxPolarAngle=Math.PI*.49;Tn.minDistance=1;Tn.maxDistance=8;Tn.update();Vi.add(new J0(16777215,14212066,1.6));const vi=new t_(16777215,2.2);vi.position.set(-2,-3,6);vi.castShadow=!0;vi.shadow.mapSize.set(2048,2048);Object.assign(vi.shadow.camera,{left:-3,right:3,top:3,bottom:-3,near:.5,far:15});Vi.add(vi,vi.target);{const r=document.createElement("canvas");r.width=r.height=256;const e=r.getContext("2d");e.fillStyle="#e9ebef",e.fillRect(0,0,256,256),e.strokeStyle="#cfd3da",e.lineWidth=2,e.strokeRect(0,0,256,256);const t=new Y0(r);t.wrapS=t.wrapT=Vs,t.repeat.set(100,100),t.colorSpace=ln,t.anisotropy=Wn.capabilities.getMaxAnisotropy();const n=new Hn(new Gr(100,100),new Su({map:t,roughness:.9}));n.receiveShadow=!0,Vi.add(n)}const Lr=[];for(let r=0;r<Xt.nbody;r++){const e=new Pr;Vi.add(e),Lr.push(e)}const Xa=new Map,sr=Hr.mjtGeom,fS=r=>{if(Xa.has(r))return Xa.get(r);const e=Xt.mesh_vertadr[r],t=Xt.mesh_vertnum[r],n=Xt.mesh_faceadr[r],a=Xt.mesh_facenum[r],o=new wn;return o.setAttribute("position",new Mn(Float32Array.from(Xt.mesh_vert.subarray(e*3,(e+t)*3)),3)),o.setIndex(new Mn(Uint32Array.from(Xt.mesh_face.subarray(n*3,(n+a)*3)),1)),o.computeVertexNormals(),Xa.set(r,o),o};for(let r=0;r<Xt.ngeom;r++){const e=Xt.geom_group[r],t=Xt.geom_type[r],n=Xt.geom_bodyid[r],a=e===2,o=e===0&&n!==0&&t!==sr.mjGEOM_PLANE.value;if(!a&&!o)continue;const u=Xt.geom_size.subarray(r*3,r*3+3);let h;if(t===sr.mjGEOM_MESH.value)h=fS(Xt.geom_dataid[r]);else if(t===sr.mjGEOM_SPHERE.value)h=new Zo(u[0],24,16);else if(t===sr.mjGEOM_CAPSULE.value)h=new Yo(u[0],2*u[1],8,20).rotateX(Math.PI/2);else if(t===sr.mjGEOM_CYLINDER.value)h=new Ko(u[0],u[0],2*u[1],40).rotateX(Math.PI/2);else if(t===sr.mjGEOM_BOX.value)h=new _r(2*u[0],2*u[1],2*u[2]);else continue;const p=Xt.geom_matid[r],f=p>=0?Xt.mat_rgba.subarray(p*4,p*4+4):Xt.geom_rgba.subarray(r*4,r*4+4),_=new Su({color:new mt().setRGB(f[0],f[1],f[2],ln),roughness:a?.45:.7,metalness:a?.15:0}),g=new Hn(h,_);g.castShadow=!0,g.receiveShadow=!0;const v=Xt.geom_pos,y=Xt.geom_quat;g.position.set(v[r*3],v[r*3+1],v[r*3+2]),g.quaternion.set(y[r*4+1],y[r*4+2],y[r*4+3],y[r*4]),Lr[n].add(g)}const pS=()=>{const r=En.data.xpos,e=En.data.xquat;for(let t=1;t<Lr.length;t++)Lr[t].position.set(r[t*3],r[t*3+1],r[t*3+2]),Lr[t].quaternion.set(e[t*4+1],e[t*4+2],e[t*4+3],e[t*4])},ks={vx:1,vy:1,wz:.5},Wr=new Set,Fr={vx:0,vy:0,wz:0},mi={vx:0,vy:0,wz:0},_n={vx:0,vy:0,wz:0};let qs=!1;window.addEventListener("keydown",r=>{const e=r.key.toLowerCase();["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"," "].includes(e)&&r.preventDefault(),e==="r"?nc():e===" "?Du():e==="shift"?qs=!0:Wr.add(e)});window.addEventListener("keyup",r=>{const e=r.key.toLowerCase();e==="shift"&&(qs=!1),Wr.delete(e)});window.addEventListener("blur",()=>{Wr.clear(),qs=!1});const mS=()=>{const r=(...t)=>t.some(n=>Wr.has(n)),e=qs?1:.5;mi.vx=((r("w","arrowup")?1:0)-(r("s","arrowdown")?1:0)+Fr.vx)*e,mi.vy=((r("a")?1:0)-(r("d")?1:0)+Fr.vy)*e,mi.wz=((r("q","arrowleft")?1:0)-(r("e","arrowright")?1:0)+Fr.wz)*ks.wz;for(const t of["vx","vy","wz"])mi[t]=Math.max(-ks[t],Math.min(ks[t],mi[t]))},$a=(r,e,t,n)=>r+Math.max(-t*n,Math.min(t*n,e-r));document.querySelectorAll("[data-cmd]").forEach(r=>{const[e,t]=r.dataset.cmd.split(":"),n=o=>{o.preventDefault(),Fr[e]=Number(t),r.classList.add("active")},a=()=>{Fr[e]=0,r.classList.remove("active")};r.addEventListener("pointerdown",n),["pointerup","pointerleave","pointercancel"].forEach(o=>r.addEventListener(o,a))});document.getElementById("reset").addEventListener("click",()=>nc());const Pu=document.getElementById("pause");Pu.addEventListener("click",()=>Du());const jl={vx:document.getElementById("bar-vx"),vy:document.getElementById("bar-vy"),wz:document.getElementById("bar-wz")},_S={vx:document.getElementById("val-vx"),vy:document.getElementById("val-vy"),wz:document.getElementById("val-wz")},xS=()=>{for(const r of["vx","vy","wz"]){const e=_n[r]/ks[r];jl[r].style.left=e>=0?"50%":`${50+50*e}%`,jl[r].style.width=`${50*Math.abs(e)}%`,_S[r].textContent=_n[r].toFixed(2)}};let Bs=!1;function Du(){Bs=!Bs,Pu.textContent=Bs?"Resume":"Pause"}let zs=En.pelvisPos();function nc(){En.reset();for(const t of["vx","vy","wz"])_n[t]=0;const r=En.pelvisPos(),e=zn.position.clone().sub(Tn.target);Tn.target.set(r[0],r[1],.55),zn.position.copy(Tn.target).add(e),zs=r}const gS=()=>En.pelvisPos()[2]<.3;let ja=0,ql=performance.now();function Lu(r){const e=Math.min((r-ql)/1e3,.05);if(ql=r,mS(),!Bs){for(_n.vx=$a(_n.vx,mi.vx,1.5,e),_n.vy=$a(_n.vy,mi.vy,1.5,e),_n.wz=$a(_n.wz,mi.wz,1.5,e),En.command[0]=_n.vx,En.command[1]=_n.vy,En.command[2]=_n.wz,ja+=e;ja>=Xl;)En.step(),ja-=Xl;gS()&&nc()}pS();const t=En.pelvisPos(),n=t[0]-zs[0],a=t[1]-zs[1];zn.position.x+=n,zn.position.y+=a,Tn.target.x+=n,Tn.target.y+=a,zs=t,vi.position.set(t[0]-2,t[1]-3,6),vi.target.position.set(t[0],t[1],0),Tn.update(),xS(),Wn.render(Vi,zn),requestAnimationFrame(Lu)}window.addEventListener("resize",()=>{zn.aspect=ni.clientWidth/ni.clientHeight,zn.updateProjectionMatrix(),Wn.setSize(ni.clientWidth,ni.clientHeight)});tc("");window.__demo={sim:En,cmd:_n,keys:Wr};requestAnimationFrame(Lu);const vS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
