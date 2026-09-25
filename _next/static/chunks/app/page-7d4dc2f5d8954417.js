(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{542:(e,t,r)=>{"use strict";r.d(t,{MoireLab:()=>p});var n=r(8173),i=r(9001);let o=6.31*Math.PI/180,a=2*Math.PI/180,s=[{label:"Apart",until:.1,caption:"Two separate gratings. On its own, each disc shows only fine 330 μm lines, with no moir\xe9."},{label:"Overlap",until:.45,caption:"Where the clear upper grating crosses the fluorescent lower one, coarse moir\xe9 fringes emerge."},{label:"Sense",until:.62,caption:"At the prototype’s 6.31\xb0 offset, each fringe spans about nine lines (~3 mm). Press the skin and the fringes bend around the contact."},{label:"Twist",until:1/0,caption:"Shrinking the offset widens the fringes and raises the geometric gain. Hover to press at any stage."}],l=`#version 300 es
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
}`;function u(e,t,r){let n=e.createShader(t);return n?(e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))?n:(console.warn(e.getShaderInfoLog(n)),e.deleteShader(n),null):null}function d(e,t,r){let n=Math.min(1,Math.max(0,(r-e)/(t-e)));return n*n*(3-2*n)}function f(e,t){let r=1/(2*Math.sin(e/2));return{angle:`${(180*e/Math.PI).toFixed(2)}\xb0`,period:`${(.33*r).toFixed(1)} mm`,gain:`${r.toFixed(1)}\xd7`,stretch:`${(.04*t*100).toFixed(1)}%`}}let m=f(o,0);function p(){let e=(0,i.useRef)(null),t=(0,i.useRef)(null),r=(0,i.useRef)(null),p=(0,i.useRef)(null),h=(0,i.useRef)(null),g=(0,i.useRef)(null),v=(0,i.useRef)(null),w=(0,i.useRef)(null),x=(0,i.useRef)(null),L=(0,i.useRef)(null),b=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let n,i,m,A=e.current,R=t.current,E=r.current,j=p.current;if(!A||!R||!E||!j)return;let y=j.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"low-power"}),M=y&&(n=u(y,y.VERTEX_SHADER,l),i=u(y,y.FRAGMENT_SHADER,c),m=y.createProgram(),n&&i&&m?(y.attachShader(m,n),y.attachShader(m,i),y.linkProgram(m),y.getProgramParameter(m,y.LINK_STATUS))?m:(console.warn(y.getProgramInfoLog(m)),null):null);if(!y||!M)return;y.useProgram(M);let N=y.createBuffer();y.bindBuffer(y.ARRAY_BUFFER,N),y.bufferData(y.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),y.STATIC_DRAW);let P=y.getAttribLocation(M,"position");y.enableVertexAttribArray(P),y.vertexAttribPointer(P,2,y.FLOAT,!1,0,0);let U=y.getUniformLocation(M,"uResolution"),S=y.getUniformLocation(M,"uScale"),I=y.getUniformLocation(M,"uPitch"),_=y.getUniformLocation(M,"uRadius"),F=y.getUniformLocation(M,"uAngle"),C=y.getUniformLocation(M,"uMerge"),T=y.getUniformLocation(M,"uLower"),X=y.getUniformLocation(M,"uUpper"),Y=y.getUniformLocation(M,"uPress"),k=y.getUniformLocation(M,"uPressRadius"),B=y.getUniformLocation(M,"uAmount");window.matchMedia("(prefers-reduced-motion: reduce)").matches||(A.dataset.pinned="true");let O={angle:w.current,period:x.current,gain:L.current,stretch:b.current},D=[...g.current?.children??[]],G=1,H=0,$=0,q=!1,z=!1,V=-1,W={angle:o,separation:1,amount:0,targetAmount:0,pressX:0,pressY:0,targetX:0,targetY:0};function K(){let e=j.width,t=Math.min(.44*j.height,.33*e),r=Math.max(1.25*t,Math.min(.5*e-.55*t,1.6*t))*W.separation;return{radius:t,lowerX:-r,lowerY:-.1*r,upperX:r,upperY:.1*r}}function J(e){let t,r,n,i,l;H=0;let c=$?Math.min(.05,(e-$)/1e3):1/60;$=e;let u=(r=(t=A.getBoundingClientRect()).height-R.offsetHeight)<=1?.5:Math.min(1,Math.max(0,-t.top/r));(n=s.findIndex(e=>u<e.until))!==V&&(V=n,h.current&&(h.current.textContent=s[n].caption),D.forEach((e,t)=>{e.toggleAttribute("data-active",t===n),e.toggleAttribute("data-done",t<n)})),v.current&&(v.current.style.transform=`scaleX(${u.toFixed(4)})`),i=A.getBoundingClientRect(),l="true"===A.dataset.pinned&&i.top<=1&&i.bottom>=R.offsetHeight-1,document.documentElement.toggleAttribute("data-immersive",l);let m=1-d(.1,.45,u),p=o+(a-o)*d(.62,.95,u),g=e=>1-Math.exp(-c*e);W.angle+=(p-W.angle)*g(9),W.separation+=(m-W.separation)*g(9),W.amount+=(W.targetAmount-W.amount)*g(7),W.pressX+=(W.targetX-W.pressX)*g(14),W.pressY+=(W.targetY-W.pressY)*g(14);let w=K();y.uniform2f(U,j.width,j.height),y.uniform1f(S,G),y.uniform1f(I,5.5*G),y.uniform1f(_,w.radius),y.uniform1f(F,W.angle),y.uniform1f(C,1-W.separation),y.uniform2f(T,w.lowerX,w.lowerY),y.uniform2f(X,w.upperX,w.upperY),y.uniform2f(Y,W.pressX,W.pressY),y.uniform1f(k,.36*w.radius),y.uniform1f(B,W.amount),y.drawArrays(y.TRIANGLE_STRIP,0,4),E.dataset.ready="true";let x=f(W.angle,W.amount);for(let e of Object.keys(O)){let t=O[e];t&&t.textContent!==x[e]&&(t.textContent=x[e])}1e-5>Math.abs(p-W.angle)&&1e-4>Math.abs(m-W.separation)&&.001>Math.abs(W.targetAmount-W.amount)&&.5>Math.abs(W.targetX-W.pressX)&&.5>Math.abs(W.targetY-W.pressY)?$=0:Q()}function Q(){!H&&q&&(H=requestAnimationFrame(J))}function Z(e){let t=j.getBoundingClientRect(),r=(e.clientX-t.left-t.width/2)*G,n=(t.height/2-(e.clientY-t.top))*G,i=K(),o=Math.hypot(r-i.upperX,n-i.upperY)<=i.radius;W.targetX=r,W.targetY=n,W.amount<.02&&(W.pressX=r,W.pressY=n);let a="mouse"===e.pointerType?z?1.6:1:1.3*!!z;W.targetAmount=o?a:0,Q()}function ee(e){z=!0,Z(e)}function et(e){z=!1,Z(e)}function er(){z=!1,W.targetAmount=0,Q()}let en=new IntersectionObserver(([e])=>{(q=e.isIntersecting)||document.documentElement.removeAttribute("data-immersive"),Q()});en.observe(A);let ei=new ResizeObserver(function(){G=Math.min(window.devicePixelRatio||1,2);let e=j.getBoundingClientRect();j.width=Math.max(1,Math.round(e.width*G)),j.height=Math.max(1,Math.round(e.height*G)),y.viewport(0,0,j.width,j.height),Q()});return ei.observe(j),window.addEventListener("scroll",Q,{passive:!0}),j.addEventListener("pointermove",Z),j.addEventListener("pointerdown",ee),j.addEventListener("pointerup",et),j.addEventListener("pointercancel",er),j.addEventListener("pointerleave",er),()=>{cancelAnimationFrame(H),en.disconnect(),ei.disconnect(),document.documentElement.removeAttribute("data-immersive"),window.removeEventListener("scroll",Q),j.removeEventListener("pointermove",Z),j.removeEventListener("pointerdown",ee),j.removeEventListener("pointerup",et),j.removeEventListener("pointercancel",er),j.removeEventListener("pointerleave",er)}},[]),(0,n.jsx)("section",{className:"moire-lab",id:"moire-lab",ref:e,children:(0,n.jsxs)("div",{className:"moire-sticky",ref:t,children:[(0,n.jsxs)("div",{className:"moire-top",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"eyebrow",children:"Interactive moir\xe9"}),(0,n.jsx)("h2",{children:"Scroll to overlap. Hover to press."})]}),(0,n.jsxs)("div",{className:"moire-story",children:[(0,n.jsx)("p",{className:"moire-caption",ref:h,children:s[0].caption}),(0,n.jsx)("ol",{className:"moire-steps",ref:g,"aria-label":"Simulation stages",children:s.map((e,t)=>(0,n.jsx)("li",{"data-active":0===t?"":void 0,children:e.label},e.label))})]})]}),(0,n.jsxs)("div",{className:"moire-stage",ref:r,children:[(0,n.jsx)("div",{className:"moire-fallback","aria-hidden":"true"}),(0,n.jsx)("canvas",{ref:p,role:"img","aria-label":"Interactive simulation of two fine gratings sliding together to form moir\xe9 fringes"})]}),(0,n.jsxs)("div",{className:"moire-bottom",children:[(0,n.jsxs)("p",{className:"moire-legend-row",children:[(0,n.jsx)("span",{className:"moire-legend moire-legend-lower",children:"Lower grating \xb7 fluorescent"}),(0,n.jsx)("span",{className:"moire-legend moire-legend-upper",children:"Upper grating \xb7 clear film"}),(0,n.jsx)("span",{children:"Live simulation \xb7 not sensor footage"})]}),(0,n.jsxs)("div",{className:"moire-panel",children:[(0,n.jsxs)("dl",{className:"moire-readouts",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Relative angle"}),(0,n.jsx)("dd",{ref:w,children:m.angle})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Fringe period"}),(0,n.jsx)("dd",{ref:x,children:m.period})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Geometric gain"}),(0,n.jsx)("dd",{ref:L,children:m.gain})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{children:"Local stretch"}),(0,n.jsx)("dd",{ref:b,children:m.stretch})]})]}),(0,n.jsxs)("p",{className:"moire-hint",children:[(0,n.jsx)("span",{children:"↕ Scroll to overlap and twist"}),(0,n.jsx)("span",{children:"◎ Hover, click, or touch to press"})]})]})]}),(0,n.jsx)("div",{className:"moire-progress","aria-hidden":"true",children:(0,n.jsx)("span",{ref:v})})]})})}},2952:(e,t,r)=>{"use strict";r.d(t,{ScrollEffects:()=>i});var n=r(9001);function i(){return(0,n.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=new IntersectionObserver(e=>{for(let r of e)r.isIntersecting&&(r.target.classList.add("is-revealed"),t.unobserve(r.target))},{rootMargin:"0px 0px -8% 0px"});if(!e)for(let e of document.querySelectorAll(".figure-card, .pipeline-card, .result-card, .artifact-card, .table-wrap, .study-card, .see-through-study, .bibtex-card")){let r=[...e.parentElement?.children??[]];e.style.transitionDelay=`${r.indexOf(e)%3*90}ms`,e.classList.add("reveal"),t.observe(e)}let r=[...document.querySelectorAll('.nav-links a[href^="#"]')],n=r.map(e=>document.getElementById(e.hash.slice(1))).filter(e=>null!==e),i=0;function o(){i=0;let e=.4*window.innerHeight,t="";for(let r of n)r.getBoundingClientRect().top<=e&&(t=r.id);for(let e of r)e.classList.toggle("is-active",e.hash===`#${t}`)}function a(){i||(i=requestAnimationFrame(o))}return o(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),()=>{cancelAnimationFrame(i),t.disconnect(),window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]),null}},5862:(e,t,r)=>{"use strict";r.d(t,{CopyButton:()=>o});var n=r(8173),i=r(9001);function o({text:e,label:t}){let[r,a]=(0,i.useState)(!1);async function s(){try{await navigator.clipboard.writeText(e),a(!0),window.setTimeout(()=>a(!1),2e3)}catch{}}return(0,n.jsx)("button",{type:"button",className:"copy-button",onClick:s,"aria-live":"polite",children:r?"Copied":t})}},8262:(e,t,r)=>{Promise.resolve().then(r.bind(r,5862)),Promise.resolve().then(r.bind(r,542)),Promise.resolve().then(r.bind(r,2952))}},e=>{e.O(0,[726,694,358],()=>e(e.s=8262)),_N_E=e.O()}]);