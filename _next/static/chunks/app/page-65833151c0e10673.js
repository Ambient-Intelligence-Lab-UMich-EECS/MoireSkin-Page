(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{122:(e,t,r)=>{Promise.resolve().then(r.bind(r,5862)),Promise.resolve().then(r.bind(r,542)),Promise.resolve().then(r.bind(r,2952))},542:(e,t,r)=>{"use strict";r.d(t,{MoireLab:()=>p});var n=r(8173),o=r(9001);let i=6.31*Math.PI/180,a=2*Math.PI/180,s=[{label:"Apart",until:.1,caption:"Two separate gratings. On its own, each disc shows only fine 330 μm lines, with no moir\xe9."},{label:"Overlap",until:.45,caption:"Where the clear upper grating crosses the fluorescent lower one, coarse moir\xe9 fringes emerge."},{label:"Sense",until:.62,caption:"At the prototype’s 6.31\xb0 offset, each fringe spans about nine lines (~3 mm). Press the skin and the fringes bend around the contact."},{label:"Twist",until:1/0,caption:"Shrinking the offset widens the fringes and raises the geometric gain. Hover to press at any stage."}],l=`#version 300 es
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
}`;function u(e,t,r){let n=e.createShader(t);return n?(e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))?n:(console.warn(e.getShaderInfoLog(n)),e.deleteShader(n),null):null}function d(e,t,r){let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)}function f(e,t){let r=1/(2*Math.sin(e/2));return{angle:`${(180*e/Math.PI).toFixed(2)}\xb0`,period:`${(.33*r).toFixed(1)} mm`,gain:`${r.toFixed(1)}\xd7`,stretch:`${(.04*t*100).toFixed(1)}%`}}let m=f(i,0);function p(){let e=(0,o.useRef)(null),t=(0,o.useRef)(null),r=(0,o.useRef)(null),p=(0,o.useRef)(null),h=(0,o.useRef)(null),g=(0,o.useRef)(null),v=(0,o.useRef)(null),w=(0,o.useRef)(null),x=(0,o.useRef)(null),L=(0,o.useRef)(null),b=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let n,o,m,A=e.current,E=t.current,R=r.current,y=p.current;if(!A||!E||!R||!y)return;let j=y.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"low-power"}),M=j&&(n=u(j,j.VERTEX_SHADER,l),o=u(j,j.FRAGMENT_SHADER,c),m=j.createProgram(),n&&o&&m?(j.attachShader(m,n),j.attachShader(m,o),j.linkProgram(m),j.getProgramParameter(m,j.LINK_STATUS))?m:(console.warn(j.getProgramInfoLog(m)),null):null);if(!j||!M)return;j.useProgram(M);let S=j.createBuffer();j.bindBuffer(j.ARRAY_BUFFER,S),j.bufferData(j.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),j.STATIC_DRAW);let N=j.getAttribLocation(M,"position");j.enableVertexAttribArray(N),j.vertexAttribPointer(N,2,j.FLOAT,!1,0,0);let P=j.getUniformLocation(M,"uResolution"),U=j.getUniformLocation(M,"uScale"),I=j.getUniformLocation(M,"uPitch"),_=j.getUniformLocation(M,"uRadius"),k=j.getUniformLocation(M,"uAngle"),F=j.getUniformLocation(M,"uMerge"),C=j.getUniformLocation(M,"uLower"),T=j.getUniformLocation(M,"uUpper"),X=j.getUniformLocation(M,"uPress"),Y=j.getUniformLocation(M,"uPressRadius"),O=j.getUniformLocation(M,"uAmount");window.matchMedia("(prefers-reduced-motion: reduce)").matches||(A.dataset.pinned="true");let B={angle:w.current,period:x.current,gain:L.current,stretch:b.current},D=[...g.current?.children??[]],q=1,G=0,H=0,$=!1,z=!1,V=-1,W={angle:i,separation:1,amount:0,targetAmount:0,pressX:0,pressY:0,targetX:0,targetY:0};function K(){let e=y.width,t=Math.min(.44*y.height,.33*e),r=Math.max(1.25*t,Math.min(.5*e-.55*t,1.6*t))*W.separation;return{radius:t,lowerX:-r,lowerY:-.1*r,upperX:r,upperY:.1*r}}function J(e){let t,r,n,o,l;G=0;let c=H?Math.min(.05,(e-H)/1e3):1/60;H=e;let u=(r=(t=A.getBoundingClientRect()).height-E.offsetHeight)<=1?.5:Math.min(1,Math.max(0,-t.top/r));(n=s.findIndex(e=>u<e.until))!==V&&(V=n,h.current&&(h.current.textContent=s[n].caption),D.forEach((e,t)=>{e.toggleAttribute("data-active",t===n),e.toggleAttribute("data-done",t<n)})),v.current&&(v.current.style.transform=`scaleX(${u.toFixed(4)})`),o=A.getBoundingClientRect(),l="true"===A.dataset.pinned&&o.top<=1&&o.bottom>=E.offsetHeight-1,document.documentElement.toggleAttribute("data-immersive",l);let m=1-d(.1,.45,u),p=i+(a-i)*d(.62,.95,u),g=e=>1-Math.exp(-c*e);W.angle+=(p-W.angle)*g(9),W.separation+=(m-W.separation)*g(9),W.amount+=(W.targetAmount-W.amount)*g(7),W.pressX+=(W.targetX-W.pressX)*g(14),W.pressY+=(W.targetY-W.pressY)*g(14);let w=K();j.uniform2f(P,y.width,y.height),j.uniform1f(U,q),j.uniform1f(I,5.5*q),j.uniform1f(_,w.radius),j.uniform1f(k,W.angle),j.uniform1f(F,1-W.separation),j.uniform2f(C,w.lowerX,w.lowerY),j.uniform2f(T,w.upperX,w.upperY),j.uniform2f(X,W.pressX,W.pressY),j.uniform1f(Y,.36*w.radius),j.uniform1f(O,W.amount),j.drawArrays(j.TRIANGLE_STRIP,0,4),R.dataset.ready="true";let x=f(W.angle,W.amount);for(let e of Object.keys(B)){let t=B[e];t&&t.textContent!==x[e]&&(t.textContent=x[e])}1e-5>Math.abs(p-W.angle)&&1e-4>Math.abs(m-W.separation)&&.001>Math.abs(W.targetAmount-W.amount)&&.5>Math.abs(W.targetX-W.pressX)&&.5>Math.abs(W.targetY-W.pressY)?H=0:Q()}function Q(){!G&&$&&(G=requestAnimationFrame(J))}function Z(e){let t=y.getBoundingClientRect(),r=(e.clientX-t.left-t.width/2)*q,n=(t.height/2-(e.clientY-t.top))*q,o=K(),i=Math.hypot(r-o.upperX,n-o.upperY)<=o.radius;W.targetX=r,W.targetY=n,W.amount<.02&&(W.pressX=r,W.pressY=n);let a="mouse"===e.pointerType?z?1.6:1:1.3*!!z;W.targetAmount=i?a:0,Q()}function ee(e){z=!0,Z(e)}function et(e){z=!1,Z(e)}function er(){z=!1,W.targetAmount=0,Q()}let en=new IntersectionObserver(([e])=>{($=e.isIntersecting)||document.documentElement.removeAttribute("data-immersive"),Q()});en.observe(A);let eo=new ResizeObserver(function(){q=Math.min(window.devicePixelRatio||1,2);let e=y.getBoundingClientRect();y.width=Math.max(1,Math.round(e.width*q)),y.height=Math.max(1,Math.round(e.height*q)),j.viewport(0,0,y.width,y.height),Q()});return eo.observe(y),window.addEventListener("scroll",Q,{passive:!0}),y.addEventListener("pointermove",Z),y.addEventListener("pointerdown",ee),y.addEventListener("pointerup",et),y.addEventListener("pointercancel",er),y.addEventListener("pointerleave",er),()=>{cancelAnimationFrame(G),en.disconnect(),eo.disconnect(),document.documentElement.removeAttribute("data-immersive"),window.removeEventListener("scroll",Q),y.removeEventListener("pointermove",Z),y.removeEventListener("pointerdown",ee),y.removeEventListener("pointerup",et),y.removeEventListener("pointercancel",er),y.removeEventListener("pointerleave",er)}},[]),(0,n.jsx)("section",{className:"moire-lab",id:"moire-lab",ref:e,children:(0,n.jsxs)("div",{className:"moire-sticky",ref:t,children:[(0,n.jsxs)("div",{className:"moire-top",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"eyebrow",children:"Interactive moir\xe9"}),(0,n.jsx)("h2",{children:"Scroll to overlap. Hover to press."})]}),(0,n.jsxs)("div",{className:"moire-story",children:[(0,n.jsx)("p",{className:"moire-caption",ref:h,children:s[0].caption}),(0,n.jsx)("ol",{className:"moire-steps",ref:g,"aria-label":"Simulation stages",children:s.map((e,t)=>(0,n.jsx)("li",{"data-active":0===t?"":void 0,children:e.label},e.label))})]})]}),(0,n.jsxs)("div",{className:"moire-stage",ref:r,children:[(0,n.jsx)("div",{className:"moire-fallback","aria-hidden":"true"}),(0,n.jsx)("canvas",{ref:p,role:"img","aria-label":"Interactive simulation of two fine gratings sliding together to form moir\xe9 fringes"})]}),(0,n.jsxs)("div",{className:"moire-bottom",children:[(0,n.jsxs)("p",{className:"moire-legend-row",children:[(0,n.jsx)("span",{className:"moire-legend moire-legend-lower",children:"Lower grating \xb7 fluorescent"}),(0,n.jsx)("span",{className:"moire-legend moire-legend-upper",children:"Upper grating \xb7 clear film"}),(0,n.jsx)("span",{children:"Live simulation \xb7 not sensor footage"})]}),(0,n.jsxs)("div",{className:"moire-panel",children:[(0,n.jsxs)("dl",{className:"moire-readouts",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Relative angle"}),(0,n.jsx)("dd",{ref:w,children:m.angle})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Fringe period"}),(0,n.jsx)("dd",{ref:x,children:m.period})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Geometric gain"}),(0,n.jsx)("dd",{ref:L,children:m.gain})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Local stretch"}),(0,n.jsx)("dd",{ref:b,children:m.stretch})]})]}),(0,n.jsxs)("p",{className:"moire-hint",children:[(0,n.jsx)("span",{children:"↕ Scroll to overlap and twist"}),(0,n.jsx)("span",{children:"◎ Hover, click, or touch to press"})]})]})]}),(0,n.jsx)("div",{className:"moire-progress","aria-hidden":"true",children:(0,n.jsx)("span",{ref:v})})]})})}},2952:(e,t,r)=>{"use strict";r.d(t,{ScrollEffects:()=>o});var n=r(9001);function o(){return(0,n.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=new IntersectionObserver(e=>{for(let r of e)r.isIntersecting&&(r.target.classList.add("is-revealed"),t.unobserve(r.target))},{rootMargin:"0px 0px -8% 0px"});if(!e)for(let e of document.querySelectorAll(".figure-card, .pipeline-card, .result-card, .artifact-card, .table-wrap, .study-card, .see-through-study, .bibtex-card")){let r=[...e.parentElement?.children??[]];e.style.transitionDelay=`${r.indexOf(e)%3*90}ms`,e.classList.add("reveal"),t.observe(e)}let r=new IntersectionObserver(e=>{for(let t of e){let e=t.target;t.isIntersecting?e.play().catch(()=>{}):e.pause()}},{threshold:.5});if(!e)for(let e of document.querySelectorAll("video[data-play-in-view]"))r.observe(e);let n=document.querySelector(".nav-menu");function o(e){let t=e.target;n?.open&&(t.closest(".nav-menu-panel a")||!n.contains(t))&&(n.open=!1)}function i(e){n?.open&&"Escape"===e.key&&(n.open=!1,n.querySelector("summary")?.focus())}document.addEventListener("click",o),document.addEventListener("keydown",i);let a=[...document.querySelectorAll('.nav-links a[href^="#"], .nav-menu-panel a[href^="#"]')],s=[...new Set(a.map(e=>document.getElementById(e.hash.slice(1))).filter(e=>null!==e))],l=0;function c(){l=0;let e=.4*window.innerHeight,t="";for(let r of s)r.getBoundingClientRect().top<=e&&(t=r.id);for(let e of a)e.classList.toggle("is-active",e.hash===`#${t}`)}function u(){l||(l=requestAnimationFrame(c))}return c(),window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),()=>{cancelAnimationFrame(l),t.disconnect(),r.disconnect(),document.removeEventListener("click",o),document.removeEventListener("keydown",i),window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[]),null}},5862:(e,t,r)=>{"use strict";r.d(t,{CopyButton:()=>i});var n=r(8173),o=r(9001);function i({text:e,label:t}){let[r,a]=(0,o.useState)(!1);async function s(){try{await navigator.clipboard.writeText(e),a(!0),window.setTimeout(()=>a(!1),2e3)}catch{}}return(0,n.jsx)("button",{type:"button",className:"copy-button",onClick:s,"aria-live":"polite",children:r?"Copied":t})}}},e=>{e.O(0,[726,694,358],()=>e(e.s=122)),_N_E=e.O()}]);