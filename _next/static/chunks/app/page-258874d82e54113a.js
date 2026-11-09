(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1592:(e,t,r)=>{Promise.resolve().then(r.bind(r,8670)),Promise.resolve().then(r.bind(r,4086)),Promise.resolve().then(r.bind(r,5825)),Promise.resolve().then(r.bind(r,2976))},2976:(e,t,r)=>{"use strict";r.d(t,{ScrollEffects:()=>i});var n=r(2115);function i(){return(0,n.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=new IntersectionObserver(e=>{for(let r of e)r.isIntersecting&&(r.target.classList.add("is-revealed"),t.unobserve(r.target))},{rootMargin:"0px 0px -8% 0px"});if(!e)for(let e of document.querySelectorAll(".figure-card, .pipeline-card, .result-card, .artifact-card, .table-wrap, .study-card, .see-through-study, .bibtex-card")){let r=[...e.parentElement?.children??[]];e.style.transitionDelay=`${r.indexOf(e)%3*90}ms`,e.classList.add("reveal"),t.observe(e)}let r=new IntersectionObserver(e=>{for(let t of e){let e=t.target;t.isIntersecting?e.play().catch(()=>{}):e.pause()}},{threshold:.5});if(!e)for(let e of document.querySelectorAll("video[data-play-in-view]"))r.observe(e);let n=document.querySelector(".nav-menu");function i(e){let t=e.target;n?.open&&(t.closest(".nav-menu-panel a")||!n.contains(t))&&(n.open=!1)}function o(e){n?.open&&"Escape"===e.key&&(n.open=!1,n.querySelector("summary")?.focus())}document.addEventListener("click",i),document.addEventListener("keydown",o);let a=[...document.querySelectorAll('.nav-links a[href^="#"], .nav-menu-panel a[href^="#"]')],s=[...new Set(a.map(e=>document.getElementById(e.hash.slice(1))).filter(e=>null!==e))],l=0;function c(){l=0;let e=.4*window.innerHeight,t="";for(let r of s)r.getBoundingClientRect().top<=e&&(t=r.id);for(let e of a)e.classList.toggle("is-active",e.hash===`#${t}`)}function u(){l||(l=requestAnimationFrame(c))}return c(),window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),()=>{cancelAnimationFrame(l),t.disconnect(),r.disconnect(),document.removeEventListener("click",i),document.removeEventListener("keydown",o),window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[]),null}},4086:(e,t,r)=>{"use strict";r.d(t,{MoireLab:()=>p});var n=r(5155),i=r(2115);let o=6.31*Math.PI/180,a=2*Math.PI/180,s=[{label:"Apart",until:.1,caption:"Two separate gratings. On its own, each disc shows only fine 330 μm lines, with no moir\xe9."},{label:"Overlap",until:.45,caption:"Where the clear upper grating crosses the fluorescent lower one, coarse moir\xe9 fringes emerge."},{label:"Sense",until:.62,caption:"At the prototype’s 6.31\xb0 offset, each fringe spans about nine lines (~3 mm). Press the skin and the fringes bend around the contact."},{label:"Twist",until:1/0,caption:"Shrinking the offset widens the fringes and raises the geometric gain. Hover to press at any stage."}],l=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`,c=`#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uScale;
uniform float uPitch;
uniform float uRadius;
uniform float uAngle;
uniform float uMerge;
uniform vec2 uLower;
uniform vec2 uUpper;
uniform vec2 uPress;
uniform float uPressRadius;
uniform float uAmount;

out vec4 fragColor;

const float LINE_ANGLE = 1.15;
const float TAU = 6.2831853;

// Anti-aliased grating with a 50% duty cycle: 1 on a line, 0 in the gap.
float grating(float s) {
  float w = fwidth(s);
  return smoothstep(0.25 - w, 0.25 + w, abs(fract(s) - 0.5));
}

float disc(vec2 v) {
  float w = 1.2 * uScale;
  return 1.0 - smoothstep(uRadius - w, uRadius + w, length(v));
}

float edge(vec2 v) {
  return disc(v) * smoothstep(uRadius - 3.0 * uScale, uRadius, length(v));
}

mat2 rotation(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, s, -s, c);
}

void main() {
  vec2 p = gl_FragCoord.xy - 0.5 * uResolution;

  // Deep navy with a soft glow behind the sensing window.
  float glow = exp(-dot(p, p) / (uRadius * uRadius * 1.6));
  vec3 color = vec3(0.012, 0.043, 0.106)
    + vec3(0.04, 0.11, 0.34) * glow * (0.35 + 0.45 * uMerge);

  // Lower layer: fluorescent lines fixed to their disc.
  vec2 a = p - uLower;
  float inLower = disc(a);
  float sLower = dot(a, vec2(cos(LINE_ANGLE), sin(LINE_ANGLE))) / uPitch;
  float lower = grating(sLower) * inLower;

  // Upper layer: a clear film whose lines block the glow. A press stretches
  // and twists it around the contact point.
  vec2 d = p - uPress;
  float falloff = exp(-dot(d, d) / (uPressRadius * uPressRadius));
  float stretch = 0.040 * uAmount * falloff;
  float twist = 0.060 * uAmount * falloff;
  vec2 q = uPress + rotation(-twist) * d / (1.0 + stretch);
  float inUpper = disc(p - uUpper);
  float sUpper =
    dot(q - uUpper, vec2(cos(LINE_ANGLE + uAngle), sin(LINE_ANGLE + uAngle))) / uPitch;
  float upper = grating(sUpper) * inUpper;

  float vignette = 1.0 - 0.4 * dot(a, a) / (uRadius * uRadius);
  float emission = lower * (1.0 - upper) * vignette;
  float fringe = inLower * inUpper * (0.5 - 0.5 * cos(TAU * (sLower - sUpper)));

  color += inLower * vec3(0.02, 0.05, 0.13);
  color += vec3(0.87, 0.96, 0.45) * (0.8 * emission + 0.1 * fringe);
  // Upper lines catch the blue LED light on their own, but block the
  // fluorescent layer wherever they cross it.
  color += inUpper * vec3(0.03, 0.06, 0.13);
  vec3 upperLine = mix(color * 0.6 + vec3(0.13, 0.2, 0.4), color * 0.35, inLower);
  color = mix(color, upperLine, upper);
  color += vec3(0.5, 0.65, 1.0) * 0.22 * (edge(a) + edge(p - uUpper));

  // Fixed sensor rim that the two layers slide into.
  float rimDistance = length(p) - uRadius * 1.035;
  color += vec3(0.62, 0.76, 1.0) * (0.22 + 0.33 * uMerge)
    * exp(-pow(rimDistance / (1.6 * uScale), 2.0));
  color += vec3(0.08, 0.2, 0.6) * 0.3 * uMerge
    * exp(-pow(rimDistance / (18.0 * uScale), 2.0));

  // Faint fingertip ring while pressing.
  float ring = exp(-pow((length(d) / uPressRadius - 0.55) * 9.0, 2.0));
  color += vec3(0.9, 0.95, 1.0) * 0.1 * uAmount * ring;

  fragColor = vec4(color, 1.0);
}`;function u(e,t,r){let n=e.createShader(t);return n?(e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))?n:(console.warn(e.getShaderInfoLog(n)),e.deleteShader(n),null):null}function d(e,t,r){let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)}function f(e,t){let r=1/(2*Math.sin(e/2));return{angle:`${(180*e/Math.PI).toFixed(2)}\xb0`,period:`${(.33*r).toFixed(1)} mm`,gain:`${r.toFixed(1)}\xd7`,stretch:`${(.04*t*100).toFixed(1)}%`}}let m=f(o,0);function p(){let e=(0,i.useRef)(null),t=(0,i.useRef)(null),r=(0,i.useRef)(null),p=(0,i.useRef)(null),h=(0,i.useRef)(null),g=(0,i.useRef)(null),v=(0,i.useRef)(null),w=(0,i.useRef)(null),x=(0,i.useRef)(null),b=(0,i.useRef)(null),L=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let n,i,m,E=e.current,A=t.current,j=r.current,y=p.current;if(!E||!A||!j||!y)return;let R=y.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"low-power"}),N=R&&(n=u(R,R.VERTEX_SHADER,l),i=u(R,R.FRAGMENT_SHADER,c),m=R.createProgram(),n&&i&&m?(R.attachShader(m,n),R.attachShader(m,i),R.linkProgram(m),R.getProgramParameter(m,R.LINK_STATUS))?m:(console.warn(R.getProgramInfoLog(m)),null):null);if(!R||!N)return;R.useProgram(N);let S=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,S),R.bufferData(R.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),R.STATIC_DRAW);let M=R.getAttribLocation(N,"position");R.enableVertexAttribArray(M),R.vertexAttribPointer(M,2,R.FLOAT,!1,0,0);let P=R.getUniformLocation(N,"uResolution"),U=R.getUniformLocation(N,"uScale"),k=R.getUniformLocation(N,"uPitch"),I=R.getUniformLocation(N,"uRadius"),C=R.getUniformLocation(N,"uAngle"),T=R.getUniformLocation(N,"uMerge"),F=R.getUniformLocation(N,"uLower"),_=R.getUniformLocation(N,"uUpper"),X=R.getUniformLocation(N,"uPress"),Y=R.getUniformLocation(N,"uPressRadius"),$=R.getUniformLocation(N,"uAmount");window.matchMedia("(prefers-reduced-motion: reduce)").matches||(E.dataset.pinned="true");let D={angle:w.current,period:x.current,gain:b.current,stretch:L.current},O=[...g.current?.children??[]],q=1,B=0,G=0,H=!1,W=!1,z=-1,K={angle:o,separation:1,amount:0,targetAmount:0,pressX:0,pressY:0,targetX:0,targetY:0};function V(){let e=y.width,t=Math.min(.44*y.height,.33*e),r=Math.max(1.25*t,Math.min(.5*e-.55*t,1.6*t))*K.separation;return{radius:t,lowerX:-r,lowerY:-.1*r,upperX:r,upperY:.1*r}}function J(e){let t,r,n,i,l;B=0;let c=G?Math.min(.05,(e-G)/1e3):1/60;G=e;let u=(r=(t=E.getBoundingClientRect()).height-A.offsetHeight)<=1?.5:Math.min(1,Math.max(0,-t.top/r));(n=s.findIndex(e=>u<e.until))!==z&&(z=n,h.current&&(h.current.textContent=s[n].caption),O.forEach((e,t)=>{e.toggleAttribute("data-active",t===n),e.toggleAttribute("data-done",t<n)})),v.current&&(v.current.style.transform=`scaleX(${u.toFixed(4)})`),i=E.getBoundingClientRect(),l="true"===E.dataset.pinned&&i.top<=1&&i.bottom>=A.offsetHeight-1,document.documentElement.toggleAttribute("data-immersive",l);let m=1-d(.1,.45,u),p=o+(a-o)*d(.62,.95,u),g=e=>1-Math.exp(-c*e);K.angle+=(p-K.angle)*g(9),K.separation+=(m-K.separation)*g(9),K.amount+=(K.targetAmount-K.amount)*g(7),K.pressX+=(K.targetX-K.pressX)*g(14),K.pressY+=(K.targetY-K.pressY)*g(14);let w=V();R.uniform2f(P,y.width,y.height),R.uniform1f(U,q),R.uniform1f(k,5.5*q),R.uniform1f(I,w.radius),R.uniform1f(C,K.angle),R.uniform1f(T,1-K.separation),R.uniform2f(F,w.lowerX,w.lowerY),R.uniform2f(_,w.upperX,w.upperY),R.uniform2f(X,K.pressX,K.pressY),R.uniform1f(Y,.36*w.radius),R.uniform1f($,K.amount),R.drawArrays(R.TRIANGLE_STRIP,0,4),j.dataset.ready="true";let x=f(K.angle,K.amount);for(let e of Object.keys(D)){let t=D[e];t&&t.textContent!==x[e]&&(t.textContent=x[e])}1e-5>Math.abs(p-K.angle)&&1e-4>Math.abs(m-K.separation)&&.001>Math.abs(K.targetAmount-K.amount)&&.5>Math.abs(K.targetX-K.pressX)&&.5>Math.abs(K.targetY-K.pressY)?G=0:Q()}function Q(){!B&&H&&(B=requestAnimationFrame(J))}function Z(e){let t=y.getBoundingClientRect(),r=(e.clientX-t.left-t.width/2)*q,n=(t.height/2-(e.clientY-t.top))*q,i=V(),o=Math.hypot(r-i.upperX,n-i.upperY)<=i.radius;K.targetX=r,K.targetY=n,K.amount<.02&&(K.pressX=r,K.pressY=n);let a="mouse"===e.pointerType?W?1.6:1:1.3*!!W;K.targetAmount=o?a:0,Q()}function ee(e){W=!0,Z(e)}function et(e){W=!1,Z(e)}function er(){W=!1,K.targetAmount=0,Q()}let en=new IntersectionObserver(([e])=>{(H=e.isIntersecting)||document.documentElement.removeAttribute("data-immersive"),Q()});en.observe(E);let ei=new ResizeObserver(function(){q=Math.min(window.devicePixelRatio||1,2);let e=y.getBoundingClientRect();y.width=Math.max(1,Math.round(e.width*q)),y.height=Math.max(1,Math.round(e.height*q)),R.viewport(0,0,y.width,y.height),Q()});return ei.observe(y),window.addEventListener("scroll",Q,{passive:!0}),y.addEventListener("pointermove",Z),y.addEventListener("pointerdown",ee),y.addEventListener("pointerup",et),y.addEventListener("pointercancel",er),y.addEventListener("pointerleave",er),()=>{cancelAnimationFrame(B),en.disconnect(),ei.disconnect(),document.documentElement.removeAttribute("data-immersive"),window.removeEventListener("scroll",Q),y.removeEventListener("pointermove",Z),y.removeEventListener("pointerdown",ee),y.removeEventListener("pointerup",et),y.removeEventListener("pointercancel",er),y.removeEventListener("pointerleave",er)}},[]),(0,n.jsx)("section",{className:"moire-lab",id:"moire-lab",ref:e,children:(0,n.jsxs)("div",{className:"moire-sticky",ref:t,children:[(0,n.jsxs)("div",{className:"moire-top",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"eyebrow",children:"Interactive moir\xe9"}),(0,n.jsx)("h2",{children:"Scroll to overlap. Hover to press."})]}),(0,n.jsxs)("div",{className:"moire-story",children:[(0,n.jsx)("p",{className:"moire-caption",ref:h,children:s[0].caption}),(0,n.jsx)("ol",{className:"moire-steps",ref:g,"aria-label":"Simulation stages",children:s.map((e,t)=>(0,n.jsx)("li",{"data-active":0===t?"":void 0,children:e.label},e.label))})]})]}),(0,n.jsxs)("div",{className:"moire-stage",ref:r,children:[(0,n.jsx)("div",{className:"moire-fallback","aria-hidden":"true"}),(0,n.jsx)("canvas",{ref:p,role:"img","aria-label":"Interactive simulation of two fine gratings sliding together to form moir\xe9 fringes"})]}),(0,n.jsxs)("div",{className:"moire-bottom",children:[(0,n.jsxs)("p",{className:"moire-legend-row",children:[(0,n.jsx)("span",{className:"moire-legend moire-legend-lower",children:"Lower grating \xb7 fluorescent"}),(0,n.jsx)("span",{className:"moire-legend moire-legend-upper",children:"Upper grating \xb7 clear film"}),(0,n.jsx)("span",{children:"Live simulation \xb7 not sensor footage"})]}),(0,n.jsxs)("div",{className:"moire-panel",children:[(0,n.jsxs)("dl",{className:"moire-readouts",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Relative angle"}),(0,n.jsx)("dd",{ref:w,children:m.angle})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Fringe period"}),(0,n.jsx)("dd",{ref:x,children:m.period})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Geometric gain"}),(0,n.jsx)("dd",{ref:b,children:m.gain})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Local stretch"}),(0,n.jsx)("dd",{ref:L,children:m.stretch})]})]}),(0,n.jsxs)("p",{className:"moire-hint",children:[(0,n.jsx)("span",{children:"↕ Scroll to overlap and twist"}),(0,n.jsx)("span",{children:"◎ Hover, click, or touch to press"})]})]})]}),(0,n.jsx)("div",{className:"moire-progress","aria-hidden":"true",children:(0,n.jsx)("span",{ref:v})})]})})}},5825:(e,t,r)=>{"use strict";r.d(t,{PhoneCarousel:()=>o});var n=r(5155),i=r(2115);function o({clips:e}){let t=(0,i.useRef)(null),r=(0,i.useRef)([]),a=(0,i.useRef)([]),s=(0,i.useRef)(0),[l,c]=(0,i.useState)(0),[u,d]=(0,i.useState)(!1),[f,m]=(0,i.useState)(!1),p=e.length;(0,i.useEffect)(()=>{m(window.matchMedia("(prefers-reduced-motion: reduce)").matches)},[]),(0,i.useEffect)(()=>{let e=t.current;if(!e)return;let r=new IntersectionObserver(([e])=>d(e.isIntersecting),{threshold:.35});return r.observe(e),()=>r.disconnect()},[]);let h=(0,i.useCallback)(e=>c((e%p+p)%p),[p]),g=(0,i.useCallback)((e,r)=>{let n=t.current,i=n?.children[e];if(!n||!i)return;let o=i.offsetLeft+i.offsetWidth/2-n.clientWidth/2;Math.abs(n.scrollLeft-o)>2&&n.scrollTo({left:o,behavior:r?"smooth":"auto"})},[]);return(0,i.useEffect)(()=>{let e=()=>g(s.current,!1);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[g]),(0,i.useEffect)(()=>{s.current=l,g(l,!f),r.current.forEach((e,t)=>{e&&(t===l?e.currentTime=0:e.pause())}),a.current.forEach((e,t)=>{e&&(e.style.transform=`scaleX(${+(t<l)})`)})},[l,g,f]),(0,i.useEffect)(()=>{let e=r.current[l];e&&(u&&!f?e.play().catch(()=>{}):e.pause())},[l,u,f]),(0,i.useEffect)(()=>{let e=0,t=()=>{let n=r.current[l],i=a.current[l];n&&i&&n.duration&&(i.style.transform=`scaleX(${Math.min(1,n.currentTime/n.duration)})`),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},[l]),(0,i.useEffect)(()=>{let e=t.current;if(!e)return;let r=0,n=()=>{window.clearTimeout(r),r=window.setTimeout(()=>{let t=e.scrollLeft+e.clientWidth/2,r=0,n=1/0;[...e.children].forEach((e,i)=>{let o=Math.abs(e.offsetLeft+e.offsetWidth/2-t);o<n&&(n=o,r=i)}),r!==s.current&&c(r)},140)};return e.addEventListener("scroll",n,{passive:!0}),()=>{window.clearTimeout(r),e.removeEventListener("scroll",n)}},[]),(0,n.jsxs)("div",{className:"phone-carousel",role:"region","aria-roledescription":"carousel","aria-label":"Smartphone demo videos",children:[(0,n.jsx)("div",{className:"phone-track",ref:t,tabIndex:0,onKeyDown:e=>{"ArrowRight"===e.key?(e.preventDefault(),h(l+1)):"ArrowLeft"===e.key&&(e.preventDefault(),h(l-1))},children:e.map((e,t)=>{let i=t===l;return(0,n.jsxs)("figure",{className:`phone-card${i?" is-active":""}`,role:"group","aria-roledescription":"slide","aria-label":`${t+1} of ${p}: ${e.title}`,children:[(0,n.jsx)("video",{ref:e=>{r.current[t]=e},controls:i,muted:!0,playsInline:!0,poster:e.poster,preload:"metadata","aria-label":e.title,tabIndex:i?0:-1,onEnded:()=>{i&&!f&&h(t+1)},children:(0,n.jsx)("source",{src:e.src,type:"video/mp4"})}),(0,n.jsxs)("figcaption",{children:[(0,n.jsx)("strong",{children:e.title}),(0,n.jsx)("span",{children:e.description})]}),!i&&(0,n.jsx)("button",{type:"button",className:"phone-card-select","aria-label":`Show clip ${t+1}: ${e.title}`,onClick:()=>h(t)})]},e.src)})}),(0,n.jsxs)("div",{className:"phone-controls",children:[(0,n.jsx)("button",{type:"button",className:"phone-arrow","aria-label":"Previous clip",onClick:()=>h(l-1),children:(0,n.jsx)("span",{"aria-hidden":"true",children:"←"})}),(0,n.jsx)("div",{className:"phone-bars",children:e.map((e,t)=>(0,n.jsx)("button",{type:"button",className:`phone-bar${t===l?" is-active":""}`,"aria-label":`Clip ${t+1}: ${e.title}`,"aria-current":t===l?"true":void 0,onClick:()=>h(t),children:(0,n.jsx)("span",{className:"phone-bar-track",children:(0,n.jsx)("span",{className:"phone-bar-fill",ref:e=>{a.current[t]=e}})})},e.src))}),(0,n.jsxs)("span",{className:"phone-count","aria-live":"polite",children:[String(l+1).padStart(2,"0")," / ",String(p).padStart(2,"0")]}),(0,n.jsx)("button",{type:"button",className:"phone-arrow","aria-label":"Next clip",onClick:()=>h(l+1),children:(0,n.jsx)("span",{"aria-hidden":"true",children:"→"})})]})]})}},8670:(e,t,r)=>{"use strict";r.d(t,{CopyButton:()=>o});var n=r(5155),i=r(2115);function o({text:e,label:t}){let[r,a]=(0,i.useState)(!1);async function s(){try{await navigator.clipboard.writeText(e),a(!0),window.setTimeout(()=>a(!1),2e3)}catch{}}return(0,n.jsx)("button",{type:"button",className:"copy-button",onClick:s,"aria-live":"polite",children:r?"Copied":t})}}},e=>{e.O(0,[441,794,358],()=>e(e.s=1592)),_N_E=e.O()}]);