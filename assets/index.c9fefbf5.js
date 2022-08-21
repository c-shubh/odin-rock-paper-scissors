(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ae={},z={},Y={},pe={},P={};Object.defineProperty(P,"__esModule",{value:!0});P.settings=void 0;P.settings={debug:!1,gravity:800,zIndex:99999,respectReducedMotion:!0};var O={},j={};Object.defineProperty(j,"__esModule",{value:!0});j.overrideDefaults=void 0;function $e(e,t){return Object.assign({},e,t)}j.overrideDefaults=$e;var K={},b={},U={};Object.defineProperty(U,"__esModule",{value:!0});U.Circle=void 0;var Ae=function(){function e(t,r,n){n===void 0&&(n=0),this.x=t,this.y=r,this.radius=n}return e.zero=new e(0,0),e}();U.Circle=Ae;var X={},_={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.approximately=e.clamp=e.invlerp=e.slerp=e.lerp=e.epsilon=e.rad2deg=e.deg2rad=void 0,e.deg2rad=Math.PI/180,e.rad2deg=180/Math.PI,e.epsilon=1e-6;function t(a,u,c){return(1-c)*a+c*u}e.lerp=t;function r(a,u,c){return t(a,u,(1-Math.cos(c*Math.PI))/2)}e.slerp=r;function n(a,u,c){return(c-a)/(u-a)}e.invlerp=n;function i(a,u,c){return Math.min(c,Math.max(u,a))}e.clamp=i;function o(a,u){return Math.abs(a-u)<e.epsilon}e.approximately=o})(_);Object.defineProperty(X,"__esModule",{value:!0});X.Color=void 0;var ue=_,Fe=function(){function e(t,r,n){this.values=new Float32Array(3),this.rgb=[t,r,n]}return Object.defineProperty(e.prototype,"r",{get:function(){return this.values[0]},set:function(t){this.values[0]=Math.floor(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"g",{get:function(){return this.values[1]},set:function(t){this.values[1]=Math.floor(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"b",{get:function(){return this.values[2]},set:function(t){this.values[2]=Math.floor(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rgb",{get:function(){return[this.r,this.g,this.b]},set:function(t){this.r=t[0],this.g=t[1],this.b=t[2]},enumerable:!1,configurable:!0}),e.prototype.mix=function(t,r){return r===void 0&&(r=.5),new e(ue.lerp(this.r,t.r,r),ue.lerp(this.g,t.g,r),ue.lerp(this.b,t.b,r))},e.prototype.toHex=function(){var t=function(r){return r.toString(16).padStart(2,"0")};return"#"+t(this.r)+t(this.g)+t(this.b)},e.prototype.toString=function(){return"rgb("+this.values.join(", ")+")"},e.fromHex=function(t){return t.startsWith("#")&&(t=t.substr(1)),new e(parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16))},e.fromHsl=function(t,r,n){if(t/=360,r/=100,n/=100,r===0)return new e(n,n,n);var i=function(c,l,s){return s<0&&(s+=1),s>1&&(s-=1),s<.16666666666666666?c+(l-c)*6*s:s<.5?l:s<.6666666666666666?c+(l-c)*(.6666666666666666-s)*6:c},o=function(c){return Math.min(255,256*c)},a=n<.5?n*(1+r):n+r-n*r,u=2*n-a;return new e(o(i(u,a,t+1/3)),o(i(u,a,t)),o(i(u,a,t-1/3)))},e.white=new e(255,255,255),e.black=new e(0,0,0),e}();X.Color=Fe;var W={},I={};Object.defineProperty(I,"__esModule",{value:!0});I.Spline=void 0;var qe=_,xe=function(){function e(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t.length===0)throw new Error("Splines require at least one key.");if(Array.isArray(t[0]))throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");this.keys=t}return e.prototype.evaluate=function(t){if(this.keys.length===0)throw new Error("Attempt to evaluate a spline with no keys.");if(this.keys.length===1)return this.keys[0].value;var r=this.keys.sort(function(u,c){return u.time-c.time}),n=r.findIndex(function(u){return u.time>t});if(n===0)return r[0].value;if(n===-1)return r[r.length-1].value;var i=r[n-1],o=r[n],a=qe.invlerp(i.time,o.time,t);return this.interpolate(i.value,o.value,a)},e}();I.Spline=xe;var Ne=d&&d.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),He=d&&d.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};Object.defineProperty(W,"__esModule",{value:!0});W.Gradient=void 0;var Ge=I,Ye=function(e){Ne(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.interpolate=function(r,n,i){return r.mix(n,i)},t.solid=function(r){return new t({value:r,time:.5})},t.simple=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=1/(r.length-1);return new(t.bind.apply(t,He([void 0],r.map(function(o,a){return{value:o,time:a*i}}))))},t}(Ge.Spline);W.Gradient=Ye;var Z={},Ke=d&&d.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(Z,"__esModule",{value:!0});Z.NumericSpline=void 0;var Ue=_,Xe=I,We=function(e){Ke(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.interpolate=function(r,n,i){return Ue.slerp(r,n,i)},t}(Xe.Spline);Z.NumericSpline=We;var J={};Object.defineProperty(J,"__esModule",{value:!0});J.Rect=void 0;var Ze=function(){function e(t,r,n,i){n===void 0&&(n=0),i===void 0&&(i=0),this.x=t,this.y=r,this.width=n,this.height=i}return e.fromScreen=function(){return new e(window.scrollX,window.scrollY,window.innerWidth,window.innerHeight)},e.fromElement=function(t){var r=t.getBoundingClientRect();return new e(window.scrollX+r.x,window.scrollY+r.y,r.width,r.height)},e.zero=new e(0,0),e}();J.Rect=Ze;var R={},Je=d&&d.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};Object.defineProperty(R,"__esModule",{value:!0});R.Vector=void 0;var q=_,Qe=function(){function e(t,r,n){t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0),this.values=new Float32Array(3),this.xyz=[t,r,n]}return Object.defineProperty(e.prototype,"x",{get:function(){return this.values[0]},set:function(t){this.values[0]=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.values[1]},set:function(t){this.values[1]=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this.values[2]},set:function(t){this.values[2]=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"xyz",{get:function(){return[this.x,this.y,this.z]},set:function(t){this.values[0]=t[0],this.values[1]=t[1],this.values[2]=t[2]},enumerable:!1,configurable:!0}),e.prototype.magnitude=function(){return Math.sqrt(this.sqrMagnitude())},e.prototype.sqrMagnitude=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.scale=function(t){return typeof t=="number"?new e(this.x*t,this.y*t,this.z*t):new e(this.x*t.x,this.y*t.y,this.z*t.z)},e.prototype.normalized=function(){var t=this.magnitude();return t!==0?this.scale(1/t):new(e.bind.apply(e,Je([void 0],this.xyz)))},e.prototype.angle=function(t){return q.rad2deg*Math.acos((this.x*t.x+this.y*t.y+this.z*t.z)/(this.magnitude()*t.magnitude()))},e.prototype.cross=function(t){return new e(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},e.prototype.dot=function(t){return this.magnitude()*t.magnitude()*Math.cos(q.deg2rad*this.angle(t))},e.prototype.toString=function(){return"Vector("+this.values.join(", ")+")"},e.from2dAngle=function(t){return new e(Math.cos(t*q.deg2rad),Math.sin(t*q.deg2rad))},e.zero=new e(0,0,0),e.one=new e(1,1,1),e.right=new e(1,0,0),e.up=new e(0,1,0),e.forward=new e(0,0,1),e}();R.Vector=Qe;(function(e){var t=d&&d.__createBinding||(Object.create?function(n,i,o,a){a===void 0&&(a=o),Object.defineProperty(n,a,{enumerable:!0,get:function(){return i[o]}})}:function(n,i,o,a){a===void 0&&(a=o),n[a]=i[o]}),r=d&&d.__exportStar||function(n,i){for(var o in n)o!=="default"&&!Object.prototype.hasOwnProperty.call(i,o)&&t(i,n,o)};Object.defineProperty(e,"__esModule",{value:!0}),r(U,e),r(X,e),r(W,e),r(Z,e),r(J,e),r(R,e)})(b);Object.defineProperty(K,"__esModule",{value:!0});K.rotationToNormal=void 0;var ge=b,be=_;function et(e){var t=e.x*be.deg2rad,r=e.y*be.deg2rad,n=new ge.Vector(Math.cos(r),0,Math.sin(r)),i=new ge.Vector(0,Math.cos(t),Math.sin(t));return n.cross(i)}K.rotationToNormal=et;var k={};Object.defineProperty(k,"__esModule",{value:!0});k.despawningRules=void 0;k.despawningRules={lifetime:function(e){return e.lifetime<=0},bounds:function(e){var t=document.documentElement.scrollHeight;return e.location.y>t}};var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.Lazy=void 0;var tt=function(){function e(t,r){r===void 0&&(r=e.defaultExists),this.factory=t,this.exists=r}return Object.defineProperty(e.prototype,"current",{get:function(){return this.exists(this.value)||(this.value=this.factory()),this.value},enumerable:!1,configurable:!0}),e.defaultExists=function(t){return typeof t<"u"},e}();Q.Lazy=tt;(function(e){var t=d&&d.__createBinding||(Object.create?function(n,i,o,a){a===void 0&&(a=o),Object.defineProperty(n,a,{enumerable:!0,get:function(){return i[o]}})}:function(n,i,o,a){a===void 0&&(a=o),n[a]=i[o]}),r=d&&d.__exportStar||function(n,i){for(var o in n)o!=="default"&&!Object.prototype.hasOwnProperty.call(i,o)&&t(i,n,o)};Object.defineProperty(e,"__esModule",{value:!0}),r(j,e),r(K,e),r(k,e),r(Q,e)})(O);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.particleContainer=e.debugContainer=e.rootContainer=void 0;var t=P,r=O,n="party-js-";function i(a){return a&&a.isConnected}function o(a,u,c){var l=document.createElement("div");return l.id=n+a,Object.assign(l.style,u),c.appendChild(l)}e.rootContainer=new r.Lazy(function(){return o("container",{position:"fixed",left:"0",top:"0",height:"100vh",width:"100vw",pointerEvents:"none",userSelect:"none",zIndex:t.settings.zIndex.toString()},document.body)},i),e.debugContainer=new r.Lazy(function(){return o("debug",{position:"absolute",top:"0",left:"0",margin:"0.5em",padding:"0.5em 1em",border:"2px solid rgb(0, 0, 0, 0.2)",background:"rgb(0, 0, 0, 0.1)",color:"#555",fontFamily:"monospace"},e.rootContainer.current)},i),e.particleContainer=new r.Lazy(function(){return o("particles",{width:"100%",height:"100%",overflow:"hidden",perspective:"1200px"},e.rootContainer.current)},i)})(pe);var rt=d&&d.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};Object.defineProperty(Y,"__esModule",{value:!0});Y.Debug=void 0;var nt=pe,_e=P,it=function(){function e(t){this.scene=t,this.refreshRate=8,this.refreshTimer=1/this.refreshRate}return e.prototype.tick=function(t){var r=nt.debugContainer.current,n=_e.settings.debug?"block":"none";r.style.display!==n&&(r.style.display=n),_e.settings.debug&&(this.refreshTimer+=t,this.refreshTimer>1/this.refreshRate&&(this.refreshTimer=0,r.innerHTML=this.getDebugInformation(t).join("<br>")))},e.prototype.getDebugInformation=function(t){var r=this.scene.emitters.length,n=this.scene.emitters.reduce(function(a,u){return a+u.particles.length},0),i=["<b>party.js Debug</b>","--------------","FPS: "+Math.round(1/t),"Emitters: "+r,"Particles: "+n],o=this.scene.emitters.map(function(a){return["\u2B6F: "+(a.currentLoop+1)+"/"+(a.options.loops>=0?a.options.loops:"\u221E"),"\u03A3p: "+a.particles.length,a.isExpired?"<i>expired</i>":"\u03A3t: "+a.durationTimer.toFixed(3)+"s"].join(", ")});return i.push.apply(i,rt(["--------------"],o)),i},e}();Y.Debug=it;var V={},h={},v={};Object.defineProperty(v,"__esModule",{value:!0});v.randomInsideCircle=v.randomInsideRect=v.randomUnitVector=v.pick=v.randomRange=void 0;var he=b,ot=_;function M(e,t){return e===void 0&&(e=0),t===void 0&&(t=1),ot.lerp(e,t,Math.random())}v.randomRange=M;function at(e){return e.length===0?void 0:e[Math.floor(Math.random()*e.length)]}v.pick=at;function ut(){var e=M(0,2*Math.PI),t=M(-1,1);return new he.Vector(Math.sqrt(1-t*t)*Math.cos(e),Math.sqrt(1-t*t)*Math.sin(e),t)}v.randomUnitVector=ut;function st(e){return new he.Vector(e.x+M(0,e.width),e.y+M(0,e.height))}v.randomInsideRect=st;function ct(e){var t=M(0,2*Math.PI),r=M(0,e.radius);return new he.Vector(e.x+Math.cos(t)*r,e.y+Math.sin(t)*r)}v.randomInsideCircle=ct;Object.defineProperty(h,"__esModule",{value:!0});h.gradientSample=h.splineSample=h.skewRelative=h.skew=h.range=h.evaluateVariation=void 0;var ee=v;function lt(e){return Array.isArray(e)?ee.pick(e):typeof e=="function"?e():e}h.evaluateVariation=lt;function dt(e,t){return function(){return ee.randomRange(e,t)}}h.range=dt;function ft(e,t){return function(){return e+ee.randomRange(-t,t)}}h.skew=ft;function pt(e,t){return function(){return e*(1+ee.randomRange(-t,t))}}h.skewRelative=pt;function Ce(e){return function(){return e.evaluate(Math.random())}}h.splineSample=Ce;function ht(e){return Ce(e)}h.gradientSample=ht;var Le={},te={};Object.defineProperty(te,"__esModule",{value:!0});te.getDefaultEmitterOptions=void 0;var we=k;function vt(){return{duration:5,loops:1,useGravity:!0,maxParticles:300,despawningRules:[we.despawningRules.lifetime,we.despawningRules.bounds],modules:[]}}te.getDefaultEmitterOptions=vt;var re={},m={};Object.defineProperty(m,"__esModule",{value:!0});m.circleSource=m.rectSource=m.mouseSource=m.elementSource=m.dynamicSource=void 0;var H=b,ve=v;function mt(e){if(e instanceof HTMLElement)return Te(e);if(e instanceof H.Circle)return Ve(e);if(e instanceof H.Rect)return ke(e);if(e instanceof MouseEvent)return Ie(e);throw new Error("Cannot infer the source type of '"+e+"'.")}m.dynamicSource=mt;function Te(e){return function(){return ve.randomInsideRect(H.Rect.fromElement(e))}}m.elementSource=Te;function Ie(e){return function(){return new H.Vector(window.scrollX+e.clientX,window.scrollY+e.clientY)}}m.mouseSource=Ie;function ke(e){return function(){return ve.randomInsideRect(e)}}m.rectSource=ke;function Ve(e){return function(){return ve.randomInsideCircle(e)}}m.circleSource=Ve;Object.defineProperty(re,"__esModule",{value:!0});re.getDefaultEmissionOptions=void 0;var se=b,yt=m;function gt(){return{rate:10,angle:0,bursts:[],sourceSampler:yt.rectSource(se.Rect.zero),initialLifetime:5,initialSpeed:5,initialSize:1,initialRotation:se.Vector.zero,initialColor:se.Color.white}}re.getDefaultEmissionOptions=gt;var ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.getDefaultRendererOptions=void 0;function bt(){return{shapeFactory:"square",applyColor:_t,applyOpacity:wt,applyLighting:Ot,applyTransform:Mt}}ne.getDefaultRendererOptions=bt;function _t(e,t){var r=e.toHex();switch(t.nodeName.toLowerCase()){case"div":t.style.background=r;break;case"svg":t.style.fill=t.style.color=r;break;default:t.style.color=r;break}}function wt(e,t){t.style.opacity=e.toString()}function Ot(e,t){t.style.filter="brightness("+(.5+Math.abs(e))+")"}function Mt(e,t){t.style.transform="translateX("+(e.location.x-window.scrollX).toFixed(3)+"px) "+("translateY("+(e.location.y-window.scrollY).toFixed(3)+"px) ")+("translateZ("+e.location.z.toFixed(3)+"px) ")+("rotateX("+e.rotation.x.toFixed(3)+"deg) ")+("rotateY("+e.rotation.y.toFixed(3)+"deg) ")+("rotateZ("+e.rotation.z.toFixed(3)+"deg) ")+("scale("+e.size.toFixed(3)+")")}(function(e){var t=d&&d.__createBinding||(Object.create?function(n,i,o,a){a===void 0&&(a=o),Object.defineProperty(n,a,{enumerable:!0,get:function(){return i[o]}})}:function(n,i,o,a){a===void 0&&(a=o),n[a]=i[o]}),r=d&&d.__exportStar||function(n,i){for(var o in n)o!=="default"&&!Object.prototype.hasOwnProperty.call(i,o)&&t(i,n,o)};Object.defineProperty(e,"__esModule",{value:!0}),r(te,e),r(re,e),r(ne,e)})(Le);var B={};Object.defineProperty(B,"__esModule",{value:!0});B.Particle=void 0;var x=b,Pt=j,St=function(){function e(t){var r=Pt.overrideDefaults({lifetime:0,size:1,location:x.Vector.zero,rotation:x.Vector.zero,velocity:x.Vector.zero,color:x.Color.white,opacity:1},t);this.id=Symbol(),this.size=this.initialSize=r.size,this.lifetime=this.initialLifetime=r.lifetime,this.rotation=this.initialRotation=r.rotation,this.location=r.location,this.velocity=r.velocity,this.color=r.color,this.opacity=r.opacity}return e}();B.Particle=St;Object.defineProperty(V,"__esModule",{value:!0});V.Emitter=void 0;var Oe=R,jt=P,w=h,ce=j,le=Le,Rt=B,Et=function(){function e(t){this.particles=[],this.currentLoop=0,this.durationTimer=0,this.emissionTimer=0,this.attemptedBurstIndices=[],this.options=ce.overrideDefaults(le.getDefaultEmitterOptions(),t==null?void 0:t.emitterOptions),this.emission=ce.overrideDefaults(le.getDefaultEmissionOptions(),t==null?void 0:t.emissionOptions),this.renderer=ce.overrideDefaults(le.getDefaultRendererOptions(),t==null?void 0:t.rendererOptions)}return Object.defineProperty(e.prototype,"isExpired",{get:function(){return this.options.loops>=0&&this.currentLoop>=this.options.loops},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"canRemove",{get:function(){return this.particles.length===0},enumerable:!1,configurable:!0}),e.prototype.clearParticles=function(){return this.particles.splice(0).length},e.prototype.tick=function(t){if(!this.isExpired&&(this.durationTimer+=t,this.durationTimer>=this.options.duration&&(this.currentLoop++,this.durationTimer=0,this.attemptedBurstIndices=[]),!this.isExpired)){for(var r=0,n=0,i=this.emission.bursts;n<i.length;n++){var o=i[n];if(o.time<=this.durationTimer&&!this.attemptedBurstIndices.includes(r)){for(var a=w.evaluateVariation(o.count),u=0;u<a;u++)this.emitParticle();this.attemptedBurstIndices.push(r)}r++}this.emissionTimer+=t;for(var c=1/this.emission.rate;this.emissionTimer>c;)this.emissionTimer-=c,this.emitParticle()}for(var l=function(f){var p=s.particles[f];s.tickParticle(p,t),s.options.despawningRules.some(function(ie){return ie(p)})&&s.particles.splice(f,1)},s=this,u=this.particles.length-1;u>=0;u--)l(u)},e.prototype.tickParticle=function(t,r){t.lifetime-=r,this.options.useGravity&&(t.velocity=t.velocity.add(Oe.Vector.up.scale(jt.settings.gravity*r))),t.location=t.location.add(t.velocity.scale(r));for(var n=0,i=this.options.modules;n<i.length;n++){var o=i[n];o(t)}},e.prototype.emitParticle=function(){var t=new Rt.Particle({location:this.emission.sourceSampler(),lifetime:w.evaluateVariation(this.emission.initialLifetime),velocity:Oe.Vector.from2dAngle(w.evaluateVariation(this.emission.angle)).scale(w.evaluateVariation(this.emission.initialSpeed)),size:w.evaluateVariation(this.emission.initialSize),rotation:w.evaluateVariation(this.emission.initialRotation),color:w.evaluateVariation(this.emission.initialColor)});return this.particles.push(t),this.particles.length>this.options.maxParticles&&this.particles.shift(),t},e}();V.Emitter=Et;var C={},me={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resolveShapeFactory=e.resolvableShapes=void 0;var t=h;e.resolvableShapes={square:'<div style="height: 10px; width: 10px;"></div>',rectangle:'<div style="height: 6px; width: 10px;"></div>',circle:'<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',roundedSquare:'<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',roundedRectangle:'<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',star:'<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'};function r(n){var i=t.evaluateVariation(n);if(typeof i=="string"){var o=e.resolvableShapes[i];if(!o)throw new Error("Failed to resolve shape key '"+i+"'. Did you forget to add it to the 'resolvableShapes' lookup?");var a=document.createElement("div");return a.innerHTML=o,a.firstElementChild}return i}e.resolveShapeFactory=r})(me);var Me;function zt(){if(Me)return C;Me=1,Object.defineProperty(C,"__esModule",{value:!0}),C.Renderer=void 0;var e=D(),t=R,r=pe,n=me,i=O,o=function(){function a(){this.elements=new Map,this.light=new t.Vector(0,0,1),this.enabled=!0,this.enabled=!e.settings.respectReducedMotion||!window.matchMedia("(prefers-reduced-motion)").matches}return a.prototype.begin=function(){this.renderedParticles=[]},a.prototype.end=function(){for(var u=this.elements.keys(),c=u.next();!c.done;){var l=c.value;this.renderedParticles.includes(l)||(this.elements.get(l).remove(),this.elements.delete(l)),c=u.next()}return this.renderedParticles.length},a.prototype.renderParticle=function(u,c){if(!!this.enabled){var l=c.renderer,s=this.elements.has(u.id)?this.elements.get(u.id):this.createParticleElement(u,l);if(l.applyColor&&l.applyColor(u.color,s),l.applyOpacity&&l.applyOpacity(u.opacity,s),l.applyLighting){var f=i.rotationToNormal(u.rotation),p=f.dot(this.light);l.applyLighting(p,s)}l.applyTransform&&l.applyTransform(u,s),this.renderedParticles.push(u.id)}},a.prototype.createParticleElement=function(u,c){var l=n.resolveShapeFactory(c.shapeFactory),s=l.cloneNode(!0);return s.style.position="absolute",this.elements.set(u.id,r.particleContainer.current.appendChild(s)),s},a}();return C.Renderer=o,C}var Pe;function Ct(){if(Pe)return z;Pe=1,Object.defineProperty(z,"__esModule",{value:!0}),z.Scene=void 0;var e=Y,t=V,r=zt(),n=function(){function i(){this.emitters=[],this.debug=new e.Debug(this),this.renderer=new r.Renderer,this.scheduledTickId=void 0,this.lastTickTimestamp=performance.now(),this.tick=this.tick.bind(this),this.scheduleTick()}return i.prototype.createEmitter=function(o){var a=new t.Emitter(o);return this.emitters.push(a),a},i.prototype.clearEmitters=function(){return this.emitters.splice(0).length},i.prototype.clearParticles=function(){return this.emitters.reduce(function(o,a){return o+a.clearParticles()},0)},i.prototype.scheduleTick=function(){this.scheduledTickId=window.requestAnimationFrame(this.tick)},i.prototype.cancelTick=function(){window.cancelAnimationFrame(this.scheduledTickId)},i.prototype.tick=function(o){var a=(o-this.lastTickTimestamp)/1e3;try{for(var u=0;u<this.emitters.length;u++){var c=this.emitters[u];c.tick(a),c.isExpired&&c.canRemove&&this.emitters.splice(u--,1)}}catch(oe){console.error(`An error occurred while updating the scene's emitters:
"`+oe+'"')}try{this.renderer.begin();for(var l=0,s=this.emitters;l<s.length;l++)for(var c=s[l],f=0,p=c.particles;f<p.length;f++){var ie=p[f];this.renderer.renderParticle(ie,c)}this.renderer.end()}catch(oe){console.error(`An error occurred while rendering the scene's particles:
"`+oe+'"')}this.debug.tick(a),this.lastTickTimestamp=o,this.scheduleTick()},i}();return z.Scene=n,z}var de={},L={},E={};Object.defineProperty(E,"__esModule",{value:!0});E.ModuleBuilder=void 0;var Lt=b,Tt=function(){function e(){this.factor="lifetime",this.isRelative=!1}return e.prototype.drive=function(t){return this.driverKey=t,this},e.prototype.through=function(t){return this.factor=t,this},e.prototype.by=function(t){return this.driverValue=t,this},e.prototype.relative=function(t){return t===void 0&&(t=!0),this.isRelative=t,this},e.prototype.build=function(){var t=this;if(typeof this.driverKey>"u")throw new Error("No driving key was provided in the module builder. Did you forget a '.drive()' call?");if(typeof this.driverValue>"u")throw new Error("No driving value was provided in the module builder. Did you forget a '.through()' call?");return function(r){fe(r,t.driverKey,It(t.driverValue,kt(t.factor,r),r),t.isRelative)}},e}();E.ModuleBuilder=Tt;function It(e,t,r){return typeof e=="object"&&"evaluate"in e?e.evaluate(t):typeof e=="function"?e(t,r):e}function kt(e,t){switch(e){case"lifetime":return t.initialLifetime-t.lifetime;case"relativeLifetime":return(t.initialLifetime-t.lifetime)/t.initialLifetime;case"size":return t.size;default:throw new Error("Invalid driving factor '"+e+"'.")}}function fe(e,t,r,n){if(n===void 0&&(n=!1),!n)e[t]=r;else{var i=e["initial"+t[0].toUpperCase()+t.substr(1)];if(typeof i>"u")throw new Error("Unable to use relative chaining with key '"+t+"'; no initial value exists.");if(r instanceof Lt.Vector)fe(e,t,i.add(r));else if(typeof r=="number")fe(e,t,i*r);else throw new Error("Unable to use relative chaining with particle key '"+t+"'; no relative operation for '"+r+"' could be inferred.")}}var Se;function Vt(){if(Se)return L;Se=1,Object.defineProperty(L,"__esModule",{value:!0}),L.confetti=void 0;var e=D(),t=b,r=E,n=v,i=m,o=h,a=O;function u(c,l){var s=a.overrideDefaults({count:o.range(20,40),spread:o.range(35,45),speed:o.range(300,600),size:o.skew(1,.2),rotation:function(){return n.randomUnitVector().scale(180)},color:function(){return t.Color.fromHsl(n.randomRange(0,360),100,70)},modules:[new r.ModuleBuilder().drive("size").by(function(p){return Math.min(1,p*3)}).relative().build(),new r.ModuleBuilder().drive("rotation").by(function(p){return new t.Vector(140,200,260).scale(p)}).relative().build()],shapes:["square","circle"]},l),f=e.scene.current.createEmitter({emitterOptions:{loops:1,duration:8,modules:s.modules},emissionOptions:{rate:0,bursts:[{time:0,count:s.count}],sourceSampler:i.dynamicSource(c),angle:o.skew(-90,o.evaluateVariation(s.spread)),initialLifetime:8,initialSpeed:s.speed,initialSize:s.size,initialRotation:s.rotation,initialColor:s.color},rendererOptions:{shapeFactory:s.shapes}});return f}return L.confetti=u,L}var T={},je;function Bt(){if(je)return T;je=1,Object.defineProperty(T,"__esModule",{value:!0}),T.sparkles=void 0;var e=D(),t=b,r=E,n=v,i=m,o=h,a=O;function u(c,l){var s=a.overrideDefaults({lifetime:o.range(1,2),count:o.range(10,20),speed:o.range(100,200),size:o.range(.8,1.8),rotation:function(){return new t.Vector(0,0,n.randomRange(0,360))},color:function(){return t.Color.fromHsl(50,100,n.randomRange(55,85))},modules:[new r.ModuleBuilder().drive("rotation").by(function(p){return new t.Vector(0,0,200).scale(p)}).relative().build(),new r.ModuleBuilder().drive("size").by(new t.NumericSpline({time:0,value:0},{time:.3,value:1},{time:.7,value:1},{time:1,value:0})).through("relativeLifetime").relative().build(),new r.ModuleBuilder().drive("opacity").by(new t.NumericSpline({time:0,value:1},{time:.5,value:1},{time:1,value:0})).through("relativeLifetime").build()],shapes:"star"},l),f=e.scene.current.createEmitter({emitterOptions:{loops:1,duration:3,useGravity:!1,modules:s.modules},emissionOptions:{rate:0,bursts:[{time:0,count:s.count}],sourceSampler:i.dynamicSource(c),angle:o.range(0,360),initialLifetime:s.lifetime,initialSpeed:s.speed,initialSize:s.size,initialRotation:s.rotation,initialColor:s.color},rendererOptions:{applyLighting:void 0,shapeFactory:s.shapes}});return f}return T.sparkles=u,T}var Re;function Dt(){return Re||(Re=1,function(e){var t=d&&d.__createBinding||(Object.create?function(n,i,o,a){a===void 0&&(a=o),Object.defineProperty(n,a,{enumerable:!0,get:function(){return i[o]}})}:function(n,i,o,a){a===void 0&&(a=o),n[a]=i[o]}),r=d&&d.__exportStar||function(n,i){for(var o in n)o!=="default"&&!Object.prototype.hasOwnProperty.call(i,o)&&t(i,n,o)};Object.defineProperty(e,"__esModule",{value:!0}),r(Vt(),e),r(Bt(),e)}(de)),de}var Ee;function D(){return Ee||(Ee=1,function(e){var t=d&&d.__createBinding||(Object.create?function(l,s,f,p){p===void 0&&(p=f),Object.defineProperty(l,p,{enumerable:!0,get:function(){return s[f]}})}:function(l,s,f,p){p===void 0&&(p=f),l[p]=s[f]}),r=d&&d.__exportStar||function(l,s){for(var f in l)f!=="default"&&!Object.prototype.hasOwnProperty.call(s,f)&&t(s,l,f)};Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.forceInit=e.util=e.math=e.random=e.sources=e.variation=e.Emitter=e.Particle=e.settings=e.scene=void 0;var n=Ct(),i=O;r(b,e),r(Dt(),e),r(me,e),r(E,e),e.scene=new i.Lazy(function(){if(typeof document>"u"||typeof window>"u")throw new Error("It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.");return new n.Scene});var o=P;Object.defineProperty(e,"settings",{enumerable:!0,get:function(){return o.settings}});var a=B;Object.defineProperty(e,"Particle",{enumerable:!0,get:function(){return a.Particle}});var u=V;Object.defineProperty(e,"Emitter",{enumerable:!0,get:function(){return u.Emitter}}),e.variation=h,e.sources=m,e.random=v,e.math=_,e.util=O;function c(){e.scene.current}e.forceInit=c,e.default=D()}(ae)),ae}var $t=D();const ze=["rock","paper","scissors"],At=document.getElementById("round-title"),N=document.getElementById("score-title"),$=document.getElementById("rock-button"),A=document.getElementById("paper-button"),F=document.getElementById("scissors-button"),G=document.getElementById("computer-move"),S=document.getElementById("round-result"),Ft=document.getElementById("player-score"),qt=document.getElementById("computer-score"),y={playerScore:0,computerScore:0,round:1,maxRounds:5};[$,A,F].forEach(e=>{e.addEventListener("click",Be,{once:!0})});De();ye();function xt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}function Nt(){return ze[xt(0,ze.length-1)]}function Ht(e){return e&&e[0].toUpperCase()+e.slice(1,e.length)}function Gt(e,t){return e===t?"tie":e==="rock"&&t==="scissors"||e==="paper"&&t==="rock"||e==="scissors"&&t==="paper"?"player":"computer"}function Yt(){return y.playerScore>y.computerScore?"player":y.computerScore>y.playerScore?"computer":"tie"}function Kt(e){switch(e.target){case $:return"rock";case A:return"paper";case F:return"scissors"}}function Be(e){ye(),Wt(e);const t=Kt(e),r=Nt(),n=Gt(t,r);switch(g(G,`Computer chose ${Ht(r)}`),n){case"player":y.playerScore++,g(S,"You won this round!");break;case"computer":y.computerScore++,g(S,"Computer won this round!");break;case"tie":g(S,"It's a tie!");break}console.log(y.round);const i=y.round;setTimeout(()=>{Zt(),setTimeout(()=>{if(Xt(),i===y.maxRounds)switch(Yt()){case"player":g(N,"You Won!"),$t.confetti(N,{count:40,spread:32,size:1});break;case"computer":g(N,"Computer Won!");break;case"tie":g(N,"It's a tie");break}},.8*1e3)},.5*1e3),i!==y.maxRounds&&(y.round++,setTimeout(()=>{Ut()},3*1e3))}function Ut(){[$,A,F].forEach(e=>{e.addEventListener("click",Be,{once:!0})}),De(),ye(),Jt()}function ye(){g(At,`Round ${y.round}`)}function Xt(){g(Ft,`Player: ${y.playerScore}`),g(qt,`Computer: ${y.computerScore}`)}function Wt(e){const t=e.target;[$,A,F].forEach(r=>{r!=t&&(r.disabled=!0)}),t.style.backgroundColor="hsl(189deg 100% 75%)"}function Zt(){[G,S].forEach(e=>e.classList.remove("visibility-hidden")),G.style.opacity="100",setTimeout(()=>{S.style.opacity="100"},.5*1e3)}function Jt(){[G,S].forEach(e=>{e.classList.add("visibility-hidden"),e.style.opacity="0"})}function g(e,t){e.textContent=t}function De(){[$,A,F].forEach(e=>{e.disabled=!1,e.style.backgroundColor="initial"})}
