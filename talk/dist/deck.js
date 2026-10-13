(()=>{var Kl="170";var fd=0,Uc=1,pd=2;var Gh=1,md=2,qn=3,fi=0,en=1,tn=2,On=0,fs=1,Yr=2,Fc=3,Nc=4,gd=5,Ci=100,xd=101,_d=102,vd=103,yd=104,Md=200,Sd=201,bd=202,wd=203,Pa=204,Ia=205,Ed=206,Td=207,Ad=208,Cd=209,Rd=210,Pd=211,Id=212,Ld=213,Dd=214,La=0,Da=1,Ua=2,xs=3,Fa=4,Na=5,Oa=6,Ba=7,Wh=0,Ud=1,Fd=2,di=0,Ql=1,jl=2,tc=3,ec=4,Nd=5,nc=6,ic=7;var Xh=300,_s=301,vs=302,za=303,ka=304,wo=306,Ha=1e3,Ii=1001,Va=1002,Cn=1003,Od=1004;var _r=1005;var Nn=1006,Qo=1007;var Li=1008;var Kn=1009,$h=1010,qh=1011,Ys=1012,sc=1013,Di=1014,Yn=1015,un=1016,rc=1017,oc=1018,ys=1020,Yh=35902,Zh=1021,Jh=1022,An=1023,Kh=1024,Qh=1025,ps=1026,Ms=1027,jh=1028,ac=1029,tu=1030,lc=1031;var cc=1033,Gr=33776,Wr=33777,Xr=33778,$r=33779,Ga=35840,Wa=35841,Xa=35842,$a=35843,qa=36196,Ya=37492,Za=37496,Ja=37808,Ka=37809,Qa=37810,ja=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,ll=37820,cl=37821,qr=36492,hl=36494,ul=36495,eu=36283,dl=36284,fl=36285,pl=36286;var Zr=2300,ml=2301,jo=2302,Oc=2400,Bc=2401,zc=2402;var Bd=3200,zd=3201;var nu=0,kd=1,ui="",gn="srgb",Es="srgb-linear",Eo="linear",pe="srgb";var Ji=7680;var kc=519,Hd=512,Vd=513,Gd=514,iu=515,Wd=516,Xd=517,$d=518,qd=519,Hc=35044;var Vc="300 es",Zn=2e3,Jr=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=1234567,Vs=Math.PI/180,Zs=180/Math.PI;function Wi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Oe(n,t,e){return Math.max(t,Math.min(e,n))}function hc(n,t){return(n%t+t)%t}function Yd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Zd(n,t,e){return n!==t?(e-n)/(t-n):0}function Gs(n,t,e){return(1-e)*n+e*t}function Jd(n,t,e,i){return Gs(n,t,1-Math.exp(-e*i))}function Kd(n,t=1){return t-Math.abs(hc(n,t*2)-t)}function Qd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function jd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function tf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ef(n,t){return n+Math.random()*(t-n)}function nf(n){return n*(.5-Math.random())}function sf(n){n!==void 0&&(Gc=n);let t=Gc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rf(n){return n*Vs}function of(n){return n*Zs}function af(n){return(n&n-1)===0&&n!==0}function lf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hf(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ts={DEG2RAD:Vs,RAD2DEG:Zs,generateUUID:Wi,clamp:Oe,euclideanModulo:hc,mapLinear:Yd,inverseLerp:Zd,lerp:Gs,damp:Jd,pingpong:Kd,smoothstep:Qd,smootherstep:jd,randInt:tf,randFloat:ef,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:of,isPowerOfTwo:af,ceilPowerOfTwo:lf,floorPowerOfTwo:cf,setQuaternionFromProperEuler:hf,normalize:Ye,denormalize:hs},j=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],E=s[1],M=s[4],_=s[7],L=s[2],T=s[5],A=s[8];return r[0]=o*x+a*E+l*L,r[3]=o*m+a*M+l*T,r[6]=o*p+a*_+l*A,r[1]=c*x+h*E+u*L,r[4]=c*m+h*M+u*T,r[7]=c*p+h*_+u*A,r[2]=d*x+f*E+g*L,r[5]=d*m+f*M+g*T,r[8]=d*p+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ta.makeScale(t,e)),this}rotate(t){return this.premultiply(ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ta=new ee;function su(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uf(){let n=Kr("canvas");return n.style.display="block",n}var Wc={};function ks(n){n in Wc||(Wc[n]=!0,console.warn(n))}function df(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function ff(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pf(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(n.r=Jn(n.r),n.g=Jn(n.g),n.b=Jn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(n.r=ms(n.r),n.g=ms(n.g),n.b=ms(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ui?Eo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xc=[.64,.33,.3,.6,.15,.06],$c=[.2126,.7152,.0722],qc=[.3127,.329],Yc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Es]:{primaries:Xc,whitePoint:qc,transfer:Eo,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:$c,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:Xc,whitePoint:qc,transfer:pe,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:$c,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});var Ki,gl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=Kr("canvas")),Ki.width=t.width,Ki.height=t.height;let i=Ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Jn(e[i]/255)*255):e[i]=Jn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mf=0,Qr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ea(s[o].image)):r.push(ea(s[o]))}else r=ea(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gf=0,_n=class n extends pi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ii,s=Ii,r=Nn,o=Li,a=An,l=Kn,c=n.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Wi(),this.name="",this.source=new Qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Xh;_n.DEFAULT_ANISOTROPY=1;var Ae=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(f+1)/2,L=(p+1)/2,T=(h+d)/4,A=(u+x)/4,P=(g+m)/4;return M>_&&M>L?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=A/i):_>L?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=P/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=A/r,s=P/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends pi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends xl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},jr=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let L=Math.sqrt(M),T=Math.atan2(L,p*E);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}let _=a*E;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},na=new I,Jc=new mi,Ui=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vr.copy(i.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),yr.subVectors(this.max,Ns),Qi.subVectors(t.a,Ns),ji.subVectors(t.b,Ns),ts.subVectors(t.c,Ns),ri.subVectors(ji,Qi),oi.subVectors(ts,ji),Mi.subVectors(Qi,ts);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!ia(e,Qi,ji,ts,yr)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,Qi,ji,ts,yr))?!1:(Mr.crossVectors(ri,oi),e=[Mr.x,Mr.y,Mr.z],ia(e,Qi,ji,ts,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vn=[new I,new I,new I,new I,new I,new I,new I,new I],bn=new I,vr=new Ui,Qi=new I,ji=new I,ts=new I,ri=new I,oi=new I,Mi=new I,Ns=new I,yr=new I,Mr=new I,Si=new I;function ia(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Si.fromArray(n,r);let a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=i.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var xf=new Ui,Os=new I,sa=new I,Js=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):xf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);let e=Os.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(sa)),this.expandByPoint(Os.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new I,ra=new I,Sr=new I,ai=new I,oa=new I,br=new I,aa=new I,to=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ra.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(ra);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Sr),a=ai.dot(this.direction),l=-ai.dot(Sr),c=ai.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ra).addScaledVector(Sr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,i,s,r){oa.subVectors(e,t),br.subVectors(i,t),aa.crossVectors(oa,br);let o=this.direction.dot(aa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);let l=a*this.direction.dot(br.crossVectors(ai,br));if(l<0)return null;let c=a*this.direction.dot(oa.cross(ai));if(c<0||l+c>o)return null;let h=-a*ai.dot(aa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_f,t,vf)}lookAt(t,e,i){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),li.crossVectors(i,cn),li.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),li.crossVectors(i,cn)),li.normalize(),wr.crossVectors(cn,li),s[0]=li.x,s[4]=wr.x,s[8]=cn.x,s[1]=li.y,s[5]=wr.y,s[9]=cn.y,s[2]=li.z,s[6]=wr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],E=i[3],M=i[7],_=i[11],L=i[15],T=s[0],A=s[4],P=s[8],b=s[12],y=s[1],R=s[5],k=s[9],U=s[13],z=s[2],H=s[6],O=s[10],tt=s[14],G=s[3],it=s[7],rt=s[11],ut=s[15];return r[0]=o*T+a*y+l*z+c*G,r[4]=o*A+a*R+l*H+c*it,r[8]=o*P+a*k+l*O+c*rt,r[12]=o*b+a*U+l*tt+c*ut,r[1]=h*T+u*y+d*z+f*G,r[5]=h*A+u*R+d*H+f*it,r[9]=h*P+u*k+d*O+f*rt,r[13]=h*b+u*U+d*tt+f*ut,r[2]=g*T+x*y+m*z+p*G,r[6]=g*A+x*R+m*H+p*it,r[10]=g*P+x*k+m*O+p*rt,r[14]=g*b+x*U+m*tt+p*ut,r[3]=E*T+M*y+_*z+L*G,r[7]=E*A+M*R+_*H+L*it,r[11]=E*P+M*k+_*O+L*rt,r[15]=E*b+M*U+_*tt+L*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],E=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,L=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,T=e*E+i*M+s*_+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=E*A,t[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*A,t[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*A,t[4]=M*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=_*A,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*p-e*u*p)*A,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*A,t[12]=L*A,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*A,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,E=l*c,M=l*h,_=l*u,L=i.x,T=i.y,A=i.z;return s[0]=(1-(x+p))*L,s[1]=(f+_)*L,s[2]=(g-M)*L,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+M)*A,s[9]=(m-E)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=es.set(s[0],s[1],s[2]).length(),o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);let c=1/r,h=1/o,u=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Zn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===Zn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Zn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h,g,x;if(a===Zn)g=(o+r)*u,x=-2*u;else if(a===Jr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},es=new I,wn=new Se,_f=new I(0,0,0),vf=new I(1,1,1),li=new I,wr=new I,cn=new I,Kc=new Se,Qc=new mi,Bn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yf=0,jc=new I,ns=new mi,Wn=new Se,Er=new I,Bs=new I,Mf=new I,Sf=new mi,th=new I(1,0,0),eh=new I(0,1,0),nh=new I(0,0,1),ih={type:"added"},bf={type:"removed"},is={type:"childadded",child:null},la={type:"childremoved",child:null},nn=class n extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new Bn,i=new mi,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new ee}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Er.copy(t):Er.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Bs,Er,this.up):Wn.lookAt(Er,Bs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Wn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bf),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};nn.DEFAULT_UP=new I(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new I,Xn=new I,ca=new I,$n=new I,ss=new I,rs=new I,sh=new I,ha=new I,ua=new I,da=new I,fa=new Ae,pa=new Ae,ma=new Ae,Ri=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){En.subVectors(s,e),Xn.subVectors(i,e),ca.subVectors(t,e);let o=En.dot(En),a=En.dot(Xn),l=En.dot(ca),c=Xn.dot(Xn),h=Xn.dot(ca),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,i),ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(pa,r.y),o.addScaledVector(ma,r.z),o}static isFrontFacing(t,e,i,s){return En.subVectors(i,e),Xn.subVectors(t,e),En.cross(Xn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),En.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ss.subVectors(s,i),rs.subVectors(r,i),ha.subVectors(t,i);let l=ss.dot(ha),c=rs.dot(ha);if(l<=0&&c<=0)return e.copy(i);ua.subVectors(t,s);let h=ss.dot(ua),u=rs.dot(ua);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ss,o);da.subVectors(t,r);let f=ss.dot(da),g=rs.dot(da);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(rs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return sh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(sh,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(i).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ga(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ne=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=hc(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ga(o,r,t+1/3),this.g=ga(o,r,t),this.b=ga(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let i=ru[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return oe.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Oe(Ge.r*255,0,255))*65536+Math.round(Oe(Ge.g*255,0,255))*256+Math.round(Oe(Ge.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ge.copy(this),e);let i=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=gn){oe.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,i=Ge.g,s=Ge.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Tr);let i=Gs(ci.h,Tr.h,e),s=Gs(ci.s,Tr.s,e),r=Gs(ci.l,Tr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new ne;ne.NAMES=ru;var wf=0,Fi=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Wi(),this.name="",this.blending=fs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Ia,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ia&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Rn=class extends Fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new I,Ar=new j,xn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}};var eo=class extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var no=class extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ae=class extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ef=0,mn=new Se,xa=new nn,os=new I,hn=new Ui,zs=new Ui,Ne=new I,ze=class n extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?no:eo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(hn.min,zs.min),hn.expandByPoint(Ne),Ne.addVectors(hn.max,zs.max),hn.expandByPoint(Ne)):(hn.expandByPoint(zs.min),hn.expandByPoint(zs.max))}hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(t,c),Ne.add(os)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;let c=new I,h=new I,u=new I,d=new j,f=new j,g=new j,x=new I,m=new I;function p(P,b,y){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(x),a[b].add(x),a[y].add(x),l[P].add(m),l[b].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,b=E.length;P<b;++P){let y=E[P],R=y.start,k=y.count;for(let U=R,z=R+k;U<z;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let M=new I,_=new I,L=new I,T=new I;function A(P){L.fromBufferAttribute(s,P),T.copy(L);let b=a[P];M.copy(b),M.sub(L.multiplyScalar(L.dot(b))).normalize(),_.crossVectors(T,b);let R=_.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,R)}for(let P=0,b=E.length;P<b;++P){let y=E[P],R=y.start,k=y.count;for(let U=R,z=R+k;U<z;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new xn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rh=new Se,bi=new to,Cr=new Js,oh=new I,Rr=new I,Pr=new I,Ir=new I,_a=new I,Lr=new I,ah=new I,Dr=new I,te=class extends nn{constructor(t=new ze,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(_a.fromBufferAttribute(u,t),o?Lr.addScaledVector(_a,h):Lr.addScaledVector(_a.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Cr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Cr,oh)===null||bi.origin.distanceToSquared(oh)>(t.far-t.near)**2))&&(rh.copy(r).invert(),bi.copy(t.ray).applyMatrix4(rh),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,L=M;_<L;_+=3){let T=a.getX(_),A=a.getX(_+1),P=a.getX(_+2);s=Ur(this,p,t,i,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Ur(this,o,t,i,c,h,u,E,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,L=M;_<L;_+=3){let T=_,A=_+1,P=_+2;s=Ur(this,p,t,i,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=m,M=m+1,_=m+2;s=Ur(this,o,t,i,c,h,u,E,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Tf(n,t,e,i,s,r,o,a){let l;if(t.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===fi,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:n}}function Ur(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Rr),n.getVertexPosition(l,Pr),n.getVertexPosition(c,Ir);let h=Tf(n,t,e,i,Rr,Pr,Ir,ah);if(h){let u=new I;Ri.getBarycoord(ah,Rr,Pr,Ir,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,a,l,c,u,new j)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,l,c,u,new j)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Ri.getNormal(Rr,Pr,Ir,d.normal),h.face=d,h.barycoord=u}return h}var zn=class n extends ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(x,m,p,E,M,_,L,T,A,P,b){let y=_/A,R=L/P,k=_/2,U=L/2,z=T/2,H=A+1,O=P+1,tt=0,G=0,it=new I;for(let rt=0;rt<O;rt++){let ut=rt*R-U;for(let Pt=0;Pt<H;Pt++){let Ht=Pt*y-k;it[x]=Ht*E,it[m]=ut*M,it[p]=z,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[p]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Pt/A),u.push(1-rt/P),tt+=1}}for(let rt=0;rt<P;rt++)for(let ut=0;ut<A;ut++){let Pt=d+ut+H*rt,Ht=d+ut+H*(rt+1),X=d+(ut+1)+H*(rt+1),nt=d+(ut+1)+H*rt;l.push(Pt,Ht,nt),l.push(Ht,X,nt),G+=6}a.addGroup(f,G,b),f+=G,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ss(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ze(n){let t={};for(let e=0;e<n.length;e++){let i=Ss(n[e]);for(let s in i)t[s]=i[s]}return t}function Af(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ou(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var xi={clone:Ss,merge:Ze},Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,we=class extends Fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},io=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new I,lh=new j,ch=new j,Je=class extends io{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},as=-90,ls=1,vl=class extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(as,ls,t,e);s.layers=this.layers,this.add(s);let r=new Je(as,ls,t,e);r.layers=this.layers,this.add(r);let o=new Je(as,ls,t,e);o.layers=this.layers,this.add(o);let a=new Je(as,ls,t,e);a.layers=this.layers,this.add(a);let l=new Je(as,ls,t,e);l.layers=this.layers,this.add(l);let c=new Je(as,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},so=class extends _n{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yl=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new so(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zn(5,5,5),r=new we({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:On});r.uniforms.tEquirect.value=e;let o=new te(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Nn),new vl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},va=new I,Pf=new I,If=new ee,Tn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=va.subVectors(i,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(va),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||If.getNormalMatrix(t),s=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new Js,Fr=new I,Qs=class{constructor(t=new Tn,e=new Tn,i=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],E=s[13],M=s[14],_=s[15];if(i[0].setComponents(l-r,d-c,m-f,_-p).normalize(),i[1].setComponents(l+r,d+c,m+f,_+p).normalize(),i[2].setComponents(l+o,d+h,m+g,_+E).normalize(),i[3].setComponents(l-o,d-h,m-g,_-E).normalize(),i[4].setComponents(l-a,d-u,m-x,_-M).normalize(),e===Zn)i[5].setComponents(l+a,d+u,m+x,_+M).normalize();else if(e===Jr)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function au(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Lf(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ni=class n extends ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let E=p*d-o;for(let M=0;M<c;M++){let _=M*u-r;g.push(_,-E,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let M=E+c*p,_=E+c*(p+1),L=E+1+c*(p+1),T=E+1+c*p;f.push(M,_,T),f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
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
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
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
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
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
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,qf=`#ifdef USE_BUMPMAP
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
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
#endif`,np=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sp=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
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
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
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
#endif`,Ep=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
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
#endif`,Ip=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Lp=`
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vp=`#if defined( USE_POINTS_UV )
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
#endif`,Gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
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
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xm=`float getShadowMask() {
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
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
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
}`,zm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,km=`#define DISTANCE
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
}`,Hm=`#define DISTANCE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#define LAMBERT
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
}`,Zm=`#define LAMBERT
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
}`,Jm=`#define MATCAP
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
}`,Km=`#define MATCAP
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
}`,Qm=`#define NORMAL
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
}`,jm=`#define NORMAL
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
}`,t0=`#define PHONG
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
}`,e0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,r0=`#define TOON
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
}`,o0=`uniform float size;
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
}`,a0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Df,alphahash_pars_fragment:Uf,alphamap_fragment:Ff,alphamap_pars_fragment:Nf,alphatest_fragment:Of,alphatest_pars_fragment:Bf,aomap_fragment:zf,aomap_pars_fragment:kf,batching_pars_vertex:Hf,batching_vertex:Vf,begin_vertex:Gf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:$f,bumpmap_pars_fragment:qf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Jf,clipping_planes_vertex:Kf,color_fragment:Qf,color_pars_fragment:jf,color_pars_vertex:tp,color_vertex:ep,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:op,emissivemap_fragment:ap,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Ep,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:xp,fog_fragment:_p,fog_pars_fragment:vp,gradientmap_pars_fragment:yp,lightmap_pars_fragment:Mp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:bp,lights_pars_begin:wp,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ap,lights_phong_fragment:Cp,lights_phong_pars_fragment:Rp,lights_physical_fragment:Pp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Up,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Bp,map_fragment:zp,map_pars_fragment:kp,map_particle_fragment:Hp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Gp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:$p,morphnormal_vertex:qp,morphtarget_pars_vertex:Yp,morphtarget_vertex:Zp,normal_fragment_begin:Jp,normal_fragment_maps:Kp,normal_pars_fragment:Qp,normal_pars_vertex:jp,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:om,packing:am,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:dm,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:xm,skinbase_vertex:_m,skinning_pars_vertex:vm,skinning_vertex:ym,skinnormal_vertex:Mm,specularmap_fragment:Sm,specularmap_pars_fragment:bm,tonemapping_fragment:wm,tonemapping_pars_fragment:Em,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Cm,uv_pars_vertex:Rm,uv_vertex:Pm,worldpos_vertex:Im,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Um,backgroundCube_frag:Fm,cube_vert:Nm,cube_frag:Om,depth_vert:Bm,depth_frag:zm,distanceRGBA_vert:km,distanceRGBA_frag:Hm,equirect_vert:Vm,equirect_frag:Gm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:$m,meshbasic_frag:qm,meshlambert_vert:Ym,meshlambert_frag:Zm,meshmatcap_vert:Jm,meshmatcap_frag:Km,meshnormal_vert:Qm,meshnormal_frag:jm,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:o0,points_frag:a0,shadow_vert:l0,shadow_frag:c0,sprite_vert:h0,sprite_frag:u0},bt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Fn={basic:{uniforms:Ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ne(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ze([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ze([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ze([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ne(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ze([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ze([bt.points,bt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ze([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ze([bt.common,bt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ze([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ze([bt.sprite,bt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ze([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ze([bt.lights,bt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Fn.physical={uniforms:Ze([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Nr={r:0,b:0,g:0},Ei=new Bn,d0=new Se;function f0(n,t,e,i,s,r,o){let a=new ne(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function x(E){let M=!1,_=g(E);_===null?p(a,l):_&&_.isColor&&(p(_,1),M=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){let _=g(M);_&&(_.isCubeTexture||_.mapping===wo)?(h===void 0&&(h=new te(new zn(1,1,1),new we({name:"BackgroundCubeMaterial",uniforms:Ss(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(M.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(Ei)),h.material.toneMapped=oe.getTransfer(_.colorSpace)!==pe,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new te(new Ni(2,2),new we({name:"BackgroundMaterial",uniforms:Ss(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=oe.getTransfer(_.colorSpace)!==pe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,M){E.getRGB(Nr,ou(n)),i.buffers.color.setClear(Nr.r,Nr.g,Nr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:x,addToRenderList:m}}function p0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(y,R,k,U,z){let H=!1,O=u(U,k,R);r!==O&&(r=O,c(r.object)),H=f(y,U,k,z),H&&g(y,U,k,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(y,R,k,U),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,R,k){let U=k.wireframe===!0,z=i[y.id];z===void 0&&(z={},i[y.id]=z);let H=z[R.id];H===void 0&&(H={},z[R.id]=H);let O=H[U];return O===void 0&&(O=d(l()),H[U]=O),O}function d(y){let R=[],k=[],U=[];for(let z=0;z<e;z++)R[z]=0,k[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,R,k,U){let z=r.attributes,H=R.attributes,O=0,tt=k.getAttributes();for(let G in tt)if(tt[G].location>=0){let rt=z[G],ut=H[G];if(ut===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),rt===void 0||rt.attribute!==ut||ut&&rt.data!==ut.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function g(y,R,k,U){let z={},H=R.attributes,O=0,tt=k.getAttributes();for(let G in tt)if(tt[G].location>=0){let rt=H[G];rt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor));let ut={};ut.attribute=rt,rt&&rt.data&&(ut.data=rt.data),z[G]=ut,O++}r.attributes=z,r.attributesNum=O,r.index=U}function x(){let y=r.newAttributes;for(let R=0,k=y.length;R<k;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){let k=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;k[y]=1,U[y]===0&&(n.enableVertexAttribArray(y),U[y]=1),z[y]!==R&&(n.vertexAttribDivisor(y,R),z[y]=R)}function E(){let y=r.newAttributes,R=r.enabledAttributes;for(let k=0,U=R.length;k<U;k++)R[k]!==y[k]&&(n.disableVertexAttribArray(k),R[k]=0)}function M(y,R,k,U,z,H,O){O===!0?n.vertexAttribIPointer(y,R,k,z,H):n.vertexAttribPointer(y,R,k,U,z,H)}function _(y,R,k,U){x();let z=U.attributes,H=k.getAttributes(),O=R.defaultAttributeValues;for(let tt in H){let G=H[tt];if(G.location>=0){let it=z[tt];if(it===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){let rt=it.normalized,ut=it.itemSize,Pt=t.get(it);if(Pt===void 0)continue;let Ht=Pt.buffer,X=Pt.type,nt=Pt.bytesPerElement,pt=X===n.INT||X===n.UNSIGNED_INT||it.gpuType===sc;if(it.isInterleavedBufferAttribute){let ot=it.data,It=ot.stride,Wt=it.offset;if(ot.isInstancedInterleavedBuffer){for(let Nt=0;Nt<G.locationSize;Nt++)p(G.location+Nt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Nt=0;Nt<G.locationSize;Nt++)m(G.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let Nt=0;Nt<G.locationSize;Nt++)M(G.location+Nt,ut/G.locationSize,X,rt,It*nt,(Wt+ut/G.locationSize*Nt)*nt,pt)}else{if(it.isInstancedBufferAttribute){for(let ot=0;ot<G.locationSize;ot++)p(G.location+ot,it.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ot=0;ot<G.locationSize;ot++)m(G.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let ot=0;ot<G.locationSize;ot++)M(G.location+ot,ut/G.locationSize,X,rt,ut*nt,ut/G.locationSize*ot*nt,pt)}}else if(O!==void 0){let rt=O[tt];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(G.location,rt);break;case 3:n.vertexAttrib3fv(G.location,rt);break;case 4:n.vertexAttrib4fv(G.location,rt);break;default:n.vertexAttrib1fv(G.location,rt)}}}}E()}function L(){P();for(let y in i){let R=i[y];for(let k in R){let U=R[k];for(let z in U)h(U[z].object),delete U[z];delete R[k]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;let R=i[y.id];for(let k in R){let U=R[k];for(let z in U)h(U[z].object),delete U[z];delete R[k]}delete i[y.id]}function A(y){for(let R in i){let k=i[R];if(k[y.id]===void 0)continue;let U=k[y.id];for(let z in U)h(U[z].object),delete U[z];delete k[y.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function m0(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==An&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Kn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Yn&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:L,maxSamples:T}}function x0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Tn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,M=E*4,_=p.clippingState||null;l.value=_,_=h(g,d,M,f);for(let L=0;L!==M;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function _0(n){let t=new WeakMap;function e(o,a){return a===za?o.mapping=_s:a===ka&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===za||a===ka)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yl(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var gi=class extends io{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,hh=[.125,.215,.35,.446,.526,.582],Pi=20,ya=new gi,uh=new ne,Ma=null,Sa=0,ba=0,wa=!1,Ai=(1+Math.sqrt(5))/2,cs=1/Ai,dh=[new I(-Ai,cs,0),new I(Ai,cs,0),new I(-cs,0,Ai),new I(cs,0,Ai),new I(0,Ai,-cs),new I(0,Ai,cs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ro=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,Sa,ba),this._renderer.xr.enabled=wa,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:un,format:An,colorSpace:Es,depthBuffer:!1},s=fh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v0(r)),this._blurMaterial=y0(r,t,e)}return s}_compileMaterial(t){let e=new te(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,i,s){let a=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(uh),h.toneMapping=di,h.autoClear=!1;let f=new Rn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new te(new zn,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(uh),x=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;Or(s,E*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===_s||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Or(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ya)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dh[(s-r-1)%dh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new te(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);let p=[],E=0;for(let A=0;A<Pi;++A){let P=A/x,b=Math.exp(-P*P/2);p.push(b),A===0?E+=b:A<m&&(E+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;let _=this._sizeLods[s],L=3*_*(s>M-us?s-M+us:0),T=4*(this._cubeSize-_);Or(e,L,T,3*_,2*_),l.setRenderTarget(e),l.render(u,ya)}};function v0(n){let t=[],e=[],i=[],s=n,r=n-us+1+hh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-us?l=hh[o-n+us-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,P=T>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(b,x*g*T),M.set(d,m*g*T);let y=[T,T,T,T,T,T];_.set(y,p*g*T)}let L=new ze;L.setAttribute("position",new xn(E,x)),L.setAttribute("uv",new xn(M,m)),L.setAttribute("faceIndex",new xn(_,p)),t.push(L),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fh(n,t,e){let i=new Be(n,t,e);return i.texture.mapping=wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Or(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function y0(n,t,e){let i=new Float32Array(Pi),s=new I(0,1,0);return new we({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function ph(){return new we({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function mh(){return new we({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function M0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===za||l===ka,h=l===_s||l===vs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ro(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ro(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function S0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ks("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function b0(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let E=f.array;x=f.version;for(let M=0,_=E.length;M<_;M+=3){let L=E[M+0],T=E[M+1],A=E[M+2];d.push(L,T,T,A,A,L)}}else if(g!==void 0){let E=g.array;x=g.version;for(let M=0,_=E.length/3-1;M<_;M+=3){let L=M+0,T=M+1,A=M+2;d.push(L,T,T,A,A,L)}}else return;let m=new(su(d)?no:eo)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function w0(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*x[E];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function E0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function T0(n,t,e){let i=new WeakMap,s=new Ae;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let b=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*L*4*u),A=new jr(T,_,L,u);A.type=Yn,A.needsUpdate=!0;let P=M*4;for(let y=0;y<u;y++){let R=m[y],k=p[y],U=E[y],z=_*L*4*y;for(let H=0;H<R.count;H++){let O=H*P;f===!0&&(s.fromBufferAttribute(R,H),T[z+O+0]=s.x,T[z+O+1]=s.y,T[z+O+2]=s.z,T[z+O+3]=0),g===!0&&(s.fromBufferAttribute(k,H),T[z+O+4]=s.x,T[z+O+5]=s.y,T[z+O+6]=s.z,T[z+O+7]=0),x===!0&&(s.fromBufferAttribute(U,H),T[z+O+8]=s.x,T[z+O+9]=s.y,T[z+O+10]=s.z,T[z+O+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new j(_,L)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function A0(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var oo=class extends _n{constructor(t,e,i,s,r,o,a,l,c,h=ps){if(h!==ps&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ps&&(i=Di),i===void 0&&h===Ms&&(i=ys),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lu=new _n,gh=new oo(1,1),cu=new jr,hu=new _l,uu=new so,xh=[],_h=[],vh=new Float32Array(16),yh=new Float32Array(9),Mh=new Float32Array(4);function As(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function To(n,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function C0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function R0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function P0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function I0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function L0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;Mh.set(i),n.uniformMatrix2fv(this.addr,!1,Mh),Ue(e,i)}}function D0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;yh.set(i),n.uniformMatrix3fv(this.addr,!1,yh),Ue(e,i)}}function U0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;vh.set(i),n.uniformMatrix4fv(this.addr,!1,vh),Ue(e,i)}}function F0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function N0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function O0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function B0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function z0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function k0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function H0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function V0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function G0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gh.compareFunction=iu,r=gh):r=lu,e.setTexture2D(t||r,s)}function W0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hu,s)}function X0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||uu,s)}function $0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cu,s)}function q0(n){switch(n){case 5126:return C0;case 35664:return R0;case 35665:return P0;case 35666:return I0;case 35674:return L0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return N0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return k0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return $0}}function Y0(n,t){n.uniform1fv(this.addr,t)}function Z0(n,t){let e=As(t,this.size,2);n.uniform2fv(this.addr,e)}function J0(n,t){let e=As(t,this.size,3);n.uniform3fv(this.addr,e)}function K0(n,t){let e=As(t,this.size,4);n.uniform4fv(this.addr,e)}function Q0(n,t){let e=As(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function j0(n,t){let e=As(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tg(n,t){let e=As(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function eg(n,t){n.uniform1iv(this.addr,t)}function ng(n,t){n.uniform2iv(this.addr,t)}function ig(n,t){n.uniform3iv(this.addr,t)}function sg(n,t){n.uniform4iv(this.addr,t)}function rg(n,t){n.uniform1uiv(this.addr,t)}function og(n,t){n.uniform2uiv(this.addr,t)}function ag(n,t){n.uniform3uiv(this.addr,t)}function lg(n,t){n.uniform4uiv(this.addr,t)}function cg(n,t,e){let i=this.cache,s=t.length,r=To(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lu,r[o])}function hg(n,t,e){let i=this.cache,s=t.length,r=To(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hu,r[o])}function ug(n,t,e){let i=this.cache,s=t.length,r=To(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||uu,r[o])}function dg(n,t,e){let i=this.cache,s=t.length,r=To(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cu,r[o])}function fg(n){switch(n){case 5126:return Y0;case 35664:return Z0;case 35665:return J0;case 35666:return K0;case 35674:return Q0;case 35675:return j0;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}var Ml=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=q0(e.type)}},Sl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fg(e.type)}},bl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ea=/(\w+)(\])?(\[|\.)?/g;function Sh(n,t){n.seq.push(t),n.map[t.id]=t}function pg(n,t,e){let i=n.name,s=i.length;for(Ea.lastIndex=0;;){let r=Ea.exec(i),o=Ea.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sh(e,c===void 0?new Ml(a,n,t):new Sl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new bl(a),Sh(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);pg(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function bh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var mg=37297,gg=0;function xg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var wh=new ee;function _g(n){oe._getMatrix(wh,oe.workingColorSpace,n);let t=`mat3( ${wh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Eo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Eh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+xg(n.getShaderSource(t),o)}else return s}function vg(n,t){let e=_g(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yg(n,t){let e;switch(t){case Ql:e="Linear";break;case jl:e="Reinhard";break;case tc:e="Cineon";break;case ec:e="ACESFilmic";break;case nc:e="AgX";break;case ic:e="Neutral";break;case Nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Br=new I;function Mg(){oe.getLuminanceCoefficients(Br);let n=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function bg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function wg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Hs(n){return n!==""}function Th(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ah(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(n){return n.replace(Eg,Ag)}var Tg=new Map;function Ag(n,t){let e=se[t];if(e===void 0){let i=Tg.get(t);if(i!==void 0)e=se[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wl(e)}var Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(Cg,Rg)}function Rg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===md?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Dg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ud:t="ENVMAP_BLENDING_MIX";break;case Fd:t="ENVMAP_BLENDING_ADD";break}return t}function Ug(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Fg(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Pg(e),c=Ig(e),h=Lg(e),u=Dg(e),d=Ug(e),f=Sg(e),g=bg(r),x=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(m=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?se.tonemapping_pars_fragment:"",e.toneMapping!==di?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),Mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=wl(o),o=Th(o,e),o=Ah(o,e),a=wl(a),a=Th(a,e),a=Ah(a,e),o=Ch(o),a=Ch(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=E+m+o,_=E+p+a,L=bh(s,s.VERTEX_SHADER,M),T=bh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,L),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(R){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(L).trim(),z=s.getShaderInfoLog(T).trim(),H=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,T);else{let tt=Eh(s,L,"vertex"),G=Eh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+tt+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(U===""||z==="")&&(O=!1);O&&(R.diagnostics={runnable:H,programLog:k,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(L),s.deleteShader(T),P=new gs(s,x),b=wg(s,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,mg)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=T,this}var Ng=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Tl(t),e.set(t,i)),i}},Tl=class{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}};function Og(n,t,e,i,s,r,o){let a=new Ks,l=new El,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,R,k,U){let z=k.fog,H=U.geometry,O=b.isMeshStandardMaterial?k.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),G=tt&&tt.mapping===wo?tt.image.height:null,it=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=rt!==void 0?rt.length:0,Pt=0;H.morphAttributes.position!==void 0&&(Pt=1),H.morphAttributes.normal!==void 0&&(Pt=2),H.morphAttributes.color!==void 0&&(Pt=3);let Ht,X,nt,pt;if(it){let ft=Fn[it];Ht=ft.vertexShader,X=ft.fragmentShader}else Ht=b.vertexShader,X=b.fragmentShader,l.update(b),nt=l.getVertexShaderID(b),pt=l.getFragmentShaderID(b);let ot=n.getRenderTarget(),It=n.state.buffers.depth.getReversed(),Wt=U.isInstancedMesh===!0,Nt=U.isBatchedMesh===!0,mt=!!b.map,J=!!b.matcap,et=!!tt,C=!!b.aoMap,xt=!!b.lightMap,st=!!b.bumpMap,yt=!!b.normalMap,lt=!!b.displacementMap,Ft=!!b.emissiveMap,_t=!!b.metalnessMap,w=!!b.roughnessMap,v=b.anisotropy>0,B=b.clearcoat>0,Z=b.dispersion>0,Q=b.iridescence>0,Y=b.sheen>0,Lt=b.transmission>0,dt=v&&!!b.anisotropyMap,Et=B&&!!b.clearcoatMap,jt=B&&!!b.clearcoatNormalMap,at=B&&!!b.clearcoatRoughnessMap,Tt=Q&&!!b.iridescenceMap,Ot=Q&&!!b.iridescenceThicknessMap,Vt=Y&&!!b.sheenColorMap,At=Y&&!!b.sheenRoughnessMap,ie=!!b.specularMap,Jt=!!b.specularColorMap,ue=!!b.specularIntensityMap,D=Lt&&!!b.transmissionMap,gt=Lt&&!!b.thicknessMap,$=!!b.gradientMap,K=!!b.alphaMap,wt=b.alphaTest>0,Mt=!!b.alphaHash,qt=!!b.extensions,q=di;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(q=n.toneMapping);let Ct={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:Ht,fragmentShader:X,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:pt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&U._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&U.instanceColor!==null,instancingMorph:Wt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Es,alphaToCoverage:!!b.alphaToCoverage,map:mt,matcap:J,envMap:et,envMapMode:et&&tt.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:xt,bumpMap:st,normalMap:yt,displacementMap:d&&lt,emissiveMap:Ft,normalMapObjectSpace:yt&&b.normalMapType===kd,normalMapTangentSpace:yt&&b.normalMapType===nu,metalnessMap:_t,roughnessMap:w,anisotropy:v,anisotropyMap:dt,clearcoat:B,clearcoatMap:Et,clearcoatNormalMap:jt,clearcoatRoughnessMap:at,dispersion:Z,iridescence:Q,iridescenceMap:Tt,iridescenceThicknessMap:Ot,sheen:Y,sheenColorMap:Vt,sheenRoughnessMap:At,specularMap:ie,specularColorMap:Jt,specularIntensityMap:ue,transmission:Lt,transmissionMap:D,thicknessMap:gt,gradientMap:$,opaque:b.transparent===!1&&b.blending===fs&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:wt,alphaHash:Mt,combine:b.combine,mapUv:mt&&x(b.map.channel),aoMapUv:C&&x(b.aoMap.channel),lightMapUv:xt&&x(b.lightMap.channel),bumpMapUv:st&&x(b.bumpMap.channel),normalMapUv:yt&&x(b.normalMap.channel),displacementMapUv:lt&&x(b.displacementMap.channel),emissiveMapUv:Ft&&x(b.emissiveMap.channel),metalnessMapUv:_t&&x(b.metalnessMap.channel),roughnessMapUv:w&&x(b.roughnessMap.channel),anisotropyMapUv:dt&&x(b.anisotropyMap.channel),clearcoatMapUv:Et&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(b.sheenRoughnessMap.channel),specularMapUv:ie&&x(b.specularMap.channel),specularColorMapUv:Jt&&x(b.specularColorMap.channel),specularIntensityMapUv:ue&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:gt&&x(b.thicknessMap.channel),alphaMapUv:K&&x(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(yt||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(mt||K),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:q,decodeVideoTexture:mt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:Ft&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&b.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(E(y,b),M(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let y=g[b.type],R;if(y){let k=Fn[y];R=xi.clone(k.uniforms)}else R=b.uniforms;return R}function L(b,y){let R;for(let k=0,U=h.length;k<U;k++){let z=h[k];if(z.cacheKey===y){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Fg(n,y,b,r),h.push(R)),R}function T(b){if(--b.usedTimes===0){let y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function Bg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function zg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ph(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ih(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||zg),i.length>1&&i.sort(d||Ph),s.length>1&&s.sort(d||Ph)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function kg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ih,n.set(i,[o])):s>=r.length?(o=new Ih,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Hg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ne};break;case"SpotLight":e={position:new I,direction:new I,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Vg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Gg=0;function Wg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xg(n){let t=new Hg,e=Vg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Se,o=new Se;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,E=0,M=0,_=0,L=0,T=0,A=0;c.sort(Wg);for(let b=0,y=c.length;b<y;b++){let R=c[b],k=R.color,U=R.intensity,z=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*U,u+=k.g*U,d+=k.b*U;else if(R.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(R.sh.coefficients[O],U);A++}else if(R.isDirectionalLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let tt=R.shadow,G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=R.shadow.matrix,E++}i.directional[f]=O,f++}else if(R.isSpotLight){let O=t.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(k).multiplyScalar(U),O.distance=z,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,i.spot[x]=O;let tt=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,tt.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[x]=tt.matrix,R.castShadow){let G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=H,_++}x++}else if(R.isRectAreaLight){let O=t.get(R);O.color.copy(k).multiplyScalar(U),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=O,m++}else if(R.isPointLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let tt=R.shadow,G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=O,g++}else if(R.isHemisphereLight){let O=t.get(R);O.skyColor.copy(R.color).multiplyScalar(U),O.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==M||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+L-T,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=M,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=A,i.version=Gg++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let M=c[p];if(M.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Lh(n){let t=new Xg(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $g(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Lh(n),t.set(s,[a])):r>=o.length?(a=new Lh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Al=class extends Fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cl=class extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function Zg(n,t,e){let i=new Qs,s=new j,r=new j,o=new Ae,a=new Al({depthPacking:zd}),l=new Cl,c={},h=e.maxTextureSize,u={[fi]:en,[en]:fi,[tn]:tn},d=new we({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),k=n.state;k.setBlending(On),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let U=p!==qn&&this.type===qn,z=p===qn&&this.type!==qn;for(let H=0,O=T.length;H<O;H++){let tt=T[H],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let it=G.getFrameExtents();if(s.multiply(it),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||U===!0||z===!0){let ut=this.type!==qn?{minFilter:Cn,magFilter:Cn}:{};G.map!==null&&G.map.dispose(),G.map=new Be(s.x,s.y,ut),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let rt=G.getViewportCount();for(let ut=0;ut<rt;ut++){let Pt=G.getViewport(ut);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),k.viewport(o),G.updateMatrices(tt,ut),i=G.getFrustum(),_(A,P,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===qn&&E(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,R)};function E(T,A){let P=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Be(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,P,f,x,null)}function M(T,A,P,b){let y=null,R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=y.uuid,U=A.uuid,z=c[k];z===void 0&&(z={},c[k]=z);let H=z[U];H===void 0&&(H=y.clone(),z[U]=H,A.addEventListener("dispose",L)),y=H}if(y.visible=A.visible,y.wireframe=A.wireframe,b===qn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let k=n.properties.get(y);k.light=P}return y}function _(T,A,P,b,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===qn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let U=t.update(T),z=T.material;if(Array.isArray(z)){let H=U.groups;for(let O=0,tt=H.length;O<tt;O++){let G=H[O],it=z[G.materialIndex];if(it&&it.visible){let rt=M(T,it,b,y);T.onBeforeShadow(n,T,A,P,U,rt,G),n.renderBufferDirect(P,null,U,rt,T,G),T.onAfterShadow(n,T,A,P,U,rt,G)}}}else if(z.visible){let H=M(T,z,b,y);T.onBeforeShadow(n,T,A,P,U,H,null),n.renderBufferDirect(P,null,U,H,T,null),T.onAfterShadow(n,T,A,P,U,H,null)}}let k=T.children;for(let U=0,z=k.length;U<z;U++)_(k[U],A,P,b,y)}function L(T){T.target.removeEventListener("dispose",L);for(let P in c){let b=c[P],y=T.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var Jg={[La]:Da,[Ua]:Oa,[Fa]:Ba,[xs]:Na,[Da]:La,[Oa]:Ua,[Ba]:Fa,[Na]:xs};function Kg(n,t){function e(){let D=!1,gt=new Ae,$=null,K=new Ae(0,0,0,0);return{setMask:function(wt){$!==wt&&!D&&(n.colorMask(wt,wt,wt,wt),$=wt)},setLocked:function(wt){D=wt},setClear:function(wt,Mt,qt,q,Ct){Ct===!0&&(wt*=q,Mt*=q,qt*=q),gt.set(wt,Mt,qt,q),K.equals(gt)===!1&&(n.clearColor(wt,Mt,qt,q),K.copy(gt))},reset:function(){D=!1,$=null,K.set(-1,0,0,0)}}}function i(){let D=!1,gt=!1,$=null,K=null,wt=null;return{setReversed:function(Mt){if(gt!==Mt){let qt=t.get("EXT_clip_control");gt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let q=wt;wt=null,this.setClear(q)}gt=Mt},getReversed:function(){return gt},setTest:function(Mt){Mt?ot(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(Mt){$!==Mt&&!D&&(n.depthMask(Mt),$=Mt)},setFunc:function(Mt){if(gt&&(Mt=Jg[Mt]),K!==Mt){switch(Mt){case La:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Ua:n.depthFunc(n.LESS);break;case xs:n.depthFunc(n.LEQUAL);break;case Fa:n.depthFunc(n.EQUAL);break;case Na:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case Ba:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=Mt}},setLocked:function(Mt){D=Mt},setClear:function(Mt){wt!==Mt&&(gt&&(Mt=1-Mt),n.clearDepth(Mt),wt=Mt)},reset:function(){D=!1,$=null,K=null,wt=null,gt=!1}}}function s(){let D=!1,gt=null,$=null,K=null,wt=null,Mt=null,qt=null,q=null,Ct=null;return{setTest:function(ft){D||(ft?ot(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(ft){gt!==ft&&!D&&(n.stencilMask(ft),gt=ft)},setFunc:function(ft,kt,zt){($!==ft||K!==kt||wt!==zt)&&(n.stencilFunc(ft,kt,zt),$=ft,K=kt,wt=zt)},setOp:function(ft,kt,zt){(Mt!==ft||qt!==kt||q!==zt)&&(n.stencilOp(ft,kt,zt),Mt=ft,qt=kt,q=zt)},setLocked:function(ft){D=ft},setClear:function(ft){Ct!==ft&&(n.clearStencil(ft),Ct=ft)},reset:function(){D=!1,gt=null,$=null,K=null,wt=null,Mt=null,qt=null,q=null,Ct=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,M=null,_=null,L=null,T=null,A=new ne(0,0,0),P=0,b=!1,y=null,R=null,k=null,U=null,z=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,tt=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=tt>=2);let it=null,rt={},ut=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),Ht=new Ae().fromArray(ut),X=new Ae().fromArray(Pt);function nt(D,gt,$,K){let wt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(D,Mt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<$;qt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(gt+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return Mt}let pt={};pt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),pt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(xs),st(!1),yt(Uc),ot(n.CULL_FACE),C(On);function ot(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function It(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Wt(D,gt){return u[D]!==gt?(n.bindFramebuffer(D,gt),u[D]=gt,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=gt),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Nt(D,gt){let $=f,K=!1;if(D){$=d.get(gt),$===void 0&&($=[],d.set(gt,$));let wt=D.textures;if($.length!==wt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,qt=wt.length;Mt<qt;Mt++)$[Mt]=n.COLOR_ATTACHMENT0+Mt;$.length=wt.length,K=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,K=!0);K&&n.drawBuffers($)}function mt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let J={[Ci]:n.FUNC_ADD,[xd]:n.FUNC_SUBTRACT,[_d]:n.FUNC_REVERSE_SUBTRACT};J[vd]=n.MIN,J[yd]=n.MAX;let et={[Md]:n.ZERO,[Sd]:n.ONE,[bd]:n.SRC_COLOR,[Pa]:n.SRC_ALPHA,[Rd]:n.SRC_ALPHA_SATURATE,[Ad]:n.DST_COLOR,[Ed]:n.DST_ALPHA,[wd]:n.ONE_MINUS_SRC_COLOR,[Ia]:n.ONE_MINUS_SRC_ALPHA,[Cd]:n.ONE_MINUS_DST_COLOR,[Td]:n.ONE_MINUS_DST_ALPHA,[Pd]:n.CONSTANT_COLOR,[Id]:n.ONE_MINUS_CONSTANT_COLOR,[Ld]:n.CONSTANT_ALPHA,[Dd]:n.ONE_MINUS_CONSTANT_ALPHA};function C(D,gt,$,K,wt,Mt,qt,q,Ct,ft){if(D===On){x===!0&&(It(n.BLEND),x=!1);return}if(x===!1&&(ot(n.BLEND),x=!0),D!==gd){if(D!==m||ft!==b){if((p!==Ci||_!==Ci)&&(n.blendEquation(n.FUNC_ADD),p=Ci,_=Ci),ft)switch(D){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yr:n.blendFunc(n.ONE,n.ONE);break;case Fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,M=null,L=null,T=null,A.set(0,0,0),P=0,m=D,b=ft}return}wt=wt||gt,Mt=Mt||$,qt=qt||K,(gt!==p||wt!==_)&&(n.blendEquationSeparate(J[gt],J[wt]),p=gt,_=wt),($!==E||K!==M||Mt!==L||qt!==T)&&(n.blendFuncSeparate(et[$],et[K],et[Mt],et[qt]),E=$,M=K,L=Mt,T=qt),(q.equals(A)===!1||Ct!==P)&&(n.blendColor(q.r,q.g,q.b,Ct),A.copy(q),P=Ct),m=D,b=!1}function xt(D,gt){D.side===tn?It(n.CULL_FACE):ot(n.CULL_FACE);let $=D.side===en;gt&&($=!$),st($),D.blending===fs&&D.transparent===!1?C(On):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function yt(D){D!==fd?(ot(n.CULL_FACE),D!==R&&(D===Uc?n.cullFace(n.BACK):D===pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),R=D}function lt(D){D!==k&&(O&&n.lineWidth(D),k=D)}function Ft(D,gt,$){D?(ot(n.POLYGON_OFFSET_FILL),(U!==gt||z!==$)&&(n.polygonOffset(gt,$),U=gt,z=$)):It(n.POLYGON_OFFSET_FILL)}function _t(D){D?ot(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function w(D){D===void 0&&(D=n.TEXTURE0+H-1),it!==D&&(n.activeTexture(D),it=D)}function v(D,gt,$){$===void 0&&(it===null?$=n.TEXTURE0+H-1:$=it);let K=rt[$];K===void 0&&(K={type:void 0,texture:void 0},rt[$]=K),(K.type!==D||K.texture!==gt)&&(it!==$&&(n.activeTexture($),it=$),n.bindTexture(D,gt||pt[D]),K.type=D,K.texture=gt)}function B(){let D=rt[it];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(D){Ht.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ht.copy(D))}function At(D){X.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function ie(D,gt){let $=c.get(gt);$===void 0&&($=new WeakMap,c.set(gt,$));let K=$.get(D);K===void 0&&(K=n.getUniformBlockIndex(gt,D.name),$.set(D,K))}function Jt(D,gt){let K=c.get(gt).get(D);l.get(gt)!==K&&(n.uniformBlockBinding(gt,K,D.__bindingPointIndex),l.set(gt,K))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},it=null,rt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,M=null,_=null,L=null,T=null,A=new ne(0,0,0),P=0,b=!1,y=null,R=null,k=null,U=null,z=null,Ht.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:It,bindFramebuffer:Wt,drawBuffers:Nt,useProgram:mt,setBlending:C,setMaterial:xt,setFlipSided:st,setCullFace:yt,setLineWidth:lt,setPolygonOffset:Ft,setScissorTest:_t,activeTexture:w,bindTexture:v,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:Tt,texImage3D:Ot,updateUBOMapping:ie,uniformBlockBinding:Jt,texStorage2D:jt,texStorage3D:at,texSubImage2D:Y,texSubImage3D:Lt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Et,scissor:Vt,viewport:At,reset:ue}}function Dh(n,t,e,i){let s=Qg(i);switch(e){case Zh:return n*t;case Kh:return n*t;case Qh:return n*t*2;case jh:return n*t/s.components*s.byteLength;case ac:return n*t/s.components*s.byteLength;case tu:return n*t*2/s.components*s.byteLength;case lc:return n*t*2/s.components*s.byteLength;case Jh:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case cc:return n*t*4/s.components*s.byteLength;case Gr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xr:case $r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wa:case $a:return Math.max(n,16)*Math.max(t,8)/4;case Ga:case Xa:return Math.max(n,8)*Math.max(t,8)/2;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case qr:case hl:case ul:return Math.ceil(n/4)*Math.ceil(t/4)*16;case eu:case dl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case fl:case pl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qg(n){switch(n){case Kn:case $h:return{byteLength:1,components:1};case Ys:case qh:case un:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case Di:case sc:case Yn:return{byteLength:4,components:1};case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Kr("canvas")}function x(w,v,B){let Z=1,Q=_t(w);if((Q.width>B||Q.height>B)&&(Z=B/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor(Z*Q.width),Lt=Math.floor(Z*Q.height);u===void 0&&(u=g(Y,Lt));let dt=v?g(Y,Lt):u;return dt.width=Y,dt.height=Lt,dt.getContext("2d").drawImage(w,0,0,Y,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Lt+")."),dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,v,B,Z,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=v;if(v===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),v===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),v===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),v===n.RGBA){let Lt=Q?Eo:oe.getTransfer(Z);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=Lt===pe?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(w,v){let B;return w?v===null||v===Di||v===ys?B=n.DEPTH24_STENCIL8:v===Yn?B=n.DEPTH32F_STENCIL8:v===Ys&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Di||v===ys?B=n.DEPTH_COMPONENT24:v===Yn?B=n.DEPTH_COMPONENT32F:v===Ys&&(B=n.DEPTH_COMPONENT16),B}function L(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Cn&&w.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){let v=w.target;v.removeEventListener("dispose",T),P(v),v.isVideoTexture&&h.delete(v)}function A(w){let v=w.target;v.removeEventListener("dispose",A),y(v)}function P(w){let v=i.get(w);if(v.__webglInit===void 0)return;let B=w.source,Z=d.get(B);if(Z){let Q=Z[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(w),Object.keys(Z).length===0&&d.delete(B)}i.remove(w)}function b(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let B=w.source,Z=d.get(B);delete Z[v.__cacheKey],o.memory.textures--}function y(w){let v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let Q=0;Q<v.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=w.textures;for(let Z=0,Q=B.length;Z<Q;Z++){let Y=i.get(B[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(w)}let R=0;function k(){R=0}function U(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function z(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function H(w,v){let B=i.get(w);if(w.isVideoTexture&&lt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,w,v);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function O(w,v){let B=i.get(w);if(w.version>0&&B.__version!==w.version){X(B,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function tt(w,v){let B=i.get(w);if(w.version>0&&B.__version!==w.version){X(B,w,v);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function G(w,v){let B=i.get(w);if(w.version>0&&B.__version!==w.version){nt(B,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let it={[Ha]:n.REPEAT,[Ii]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},rt={[Cn]:n.NEAREST,[Od]:n.NEAREST_MIPMAP_NEAREST,[_r]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Qo]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},ut={[Hd]:n.NEVER,[qd]:n.ALWAYS,[Vd]:n.LESS,[iu]:n.LEQUAL,[Gd]:n.EQUAL,[$d]:n.GEQUAL,[Wd]:n.GREATER,[Xd]:n.NOTEQUAL};function Pt(w,v){if(v.type===Yn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===Qo||v.magFilter===_r||v.magFilter===Li||v.minFilter===Nn||v.minFilter===Qo||v.minFilter===_r||v.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,it[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,it[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,it[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,rt[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,rt[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Cn||v.minFilter!==_r&&v.minFilter!==Li||v.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ht(w,v){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));let Z=v.source,Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));let Y=z(v);if(Y!==w.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[Y].usedTimes++;let Lt=Q[w.__cacheKey];Lt!==void 0&&(Q[w.__cacheKey].usedTimes--,Lt.usedTimes===0&&b(v)),w.__cacheKey=Y,w.__webglTexture=Q[Y].texture}return B}function X(w,v,B){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);let Q=Ht(w,v),Y=v.source;e.bindTexture(Z,w.__webglTexture,n.TEXTURE0+B);let Lt=i.get(Y);if(Y.version!==Lt.__version||Q===!0){e.activeTexture(n.TEXTURE0+B);let dt=oe.getPrimaries(oe.workingColorSpace),Et=v.colorSpace===ui?null:oe.getPrimaries(v.colorSpace),jt=v.colorSpace===ui||dt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let at=x(v.image,!1,s.maxTextureSize);at=Ft(v,at);let Tt=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type),Vt=M(v.internalFormat,Tt,Ot,v.colorSpace,v.isVideoTexture);Pt(Z,v);let At,ie=v.mipmaps,Jt=v.isVideoTexture!==!0,ue=Lt.__version===void 0||Q===!0,D=Y.dataReady,gt=L(v,at);if(v.isDepthTexture)Vt=_(v.format===Ms,v.type),ue&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Vt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Vt,at.width,at.height,0,Tt,Ot,null));else if(v.isDataTexture)if(ie.length>0){Jt&&ue&&e.texStorage2D(n.TEXTURE_2D,gt,Vt,ie[0].width,ie[0].height);for(let $=0,K=ie.length;$<K;$++)At=ie[$],Jt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,At.width,At.height,Tt,Ot,At.data):e.texImage2D(n.TEXTURE_2D,$,Vt,At.width,At.height,0,Tt,Ot,At.data);v.generateMipmaps=!1}else Jt?(ue&&e.texStorage2D(n.TEXTURE_2D,gt,Vt,at.width,at.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,Tt,Ot,at.data)):e.texImage2D(n.TEXTURE_2D,0,Vt,at.width,at.height,0,Tt,Ot,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Jt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Vt,ie[0].width,ie[0].height,at.depth);for(let $=0,K=ie.length;$<K;$++)if(At=ie[$],v.format!==An)if(Tt!==null)if(Jt){if(D)if(v.layerUpdates.size>0){let wt=Dh(At.width,At.height,v.format,v.type);for(let Mt of v.layerUpdates){let qt=At.data.subarray(Mt*wt/At.data.BYTES_PER_ELEMENT,(Mt+1)*wt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Mt,At.width,At.height,1,Tt,qt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,At.width,At.height,at.depth,Tt,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Vt,At.width,At.height,at.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,At.width,At.height,at.depth,Tt,Ot,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Vt,At.width,At.height,at.depth,0,Tt,Ot,At.data)}else{Jt&&ue&&e.texStorage2D(n.TEXTURE_2D,gt,Vt,ie[0].width,ie[0].height);for(let $=0,K=ie.length;$<K;$++)At=ie[$],v.format!==An?Tt!==null?Jt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Vt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,At.width,At.height,Tt,Ot,At.data):e.texImage2D(n.TEXTURE_2D,$,Vt,At.width,At.height,0,Tt,Ot,At.data)}else if(v.isDataArrayTexture)if(Jt){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Vt,at.width,at.height,at.depth),D)if(v.layerUpdates.size>0){let $=Dh(at.width,at.height,v.format,v.type);for(let K of v.layerUpdates){let wt=at.data.subarray(K*$/at.data.BYTES_PER_ELEMENT,(K+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,at.width,at.height,1,Tt,Ot,wt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Tt,Ot,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,at.width,at.height,at.depth,0,Tt,Ot,at.data);else if(v.isData3DTexture)Jt?(ue&&e.texStorage3D(n.TEXTURE_3D,gt,Vt,at.width,at.height,at.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Tt,Ot,at.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,at.width,at.height,at.depth,0,Tt,Ot,at.data);else if(v.isFramebufferTexture){if(ue)if(Jt)e.texStorage2D(n.TEXTURE_2D,gt,Vt,at.width,at.height);else{let $=at.width,K=at.height;for(let wt=0;wt<gt;wt++)e.texImage2D(n.TEXTURE_2D,wt,Vt,$,K,0,Tt,Ot,null),$>>=1,K>>=1}}else if(ie.length>0){if(Jt&&ue){let $=_t(ie[0]);e.texStorage2D(n.TEXTURE_2D,gt,Vt,$.width,$.height)}for(let $=0,K=ie.length;$<K;$++)At=ie[$],Jt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Tt,Ot,At):e.texImage2D(n.TEXTURE_2D,$,Vt,Tt,Ot,At);v.generateMipmaps=!1}else if(Jt){if(ue){let $=_t(at);e.texStorage2D(n.TEXTURE_2D,gt,Vt,$.width,$.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Ot,at)}else e.texImage2D(n.TEXTURE_2D,0,Vt,Tt,Ot,at);m(v)&&p(Z),Lt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function nt(w,v,B){if(v.image.length!==6)return;let Z=Ht(w,v),Q=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);let Y=i.get(Q);if(Q.version!==Y.__version||Z===!0){e.activeTexture(n.TEXTURE0+B);let Lt=oe.getPrimaries(oe.workingColorSpace),dt=v.colorSpace===ui?null:oe.getPrimaries(v.colorSpace),Et=v.colorSpace===ui||Lt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let jt=v.isCompressedTexture||v.image[0].isCompressedTexture,at=v.image[0]&&v.image[0].isDataTexture,Tt=[];for(let K=0;K<6;K++)!jt&&!at?Tt[K]=x(v.image[K],!0,s.maxCubemapSize):Tt[K]=at?v.image[K].image:v.image[K],Tt[K]=Ft(v,Tt[K]);let Ot=Tt[0],Vt=r.convert(v.format,v.colorSpace),At=r.convert(v.type),ie=M(v.internalFormat,Vt,At,v.colorSpace),Jt=v.isVideoTexture!==!0,ue=Y.__version===void 0||Z===!0,D=Q.dataReady,gt=L(v,Ot);Pt(n.TEXTURE_CUBE_MAP,v);let $;if(jt){Jt&&ue&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,ie,Ot.width,Ot.height);for(let K=0;K<6;K++){$=Tt[K].mipmaps;for(let wt=0;wt<$.length;wt++){let Mt=$[wt];v.format!==An?Vt!==null?Jt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,0,0,Mt.width,Mt.height,Vt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,ie,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,0,0,Mt.width,Mt.height,Vt,At,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,ie,Mt.width,Mt.height,0,Vt,At,Mt.data)}}}else{if($=v.mipmaps,Jt&&ue){$.length>0&&gt++;let K=_t(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,ie,K.width,K.height)}for(let K=0;K<6;K++)if(at){Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt[K].width,Tt[K].height,Vt,At,Tt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ie,Tt[K].width,Tt[K].height,0,Vt,At,Tt[K].data);for(let wt=0;wt<$.length;wt++){let qt=$[wt].image[K].image;Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,0,0,qt.width,qt.height,Vt,At,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,ie,qt.width,qt.height,0,Vt,At,qt.data)}}else{Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Vt,At,Tt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ie,Vt,At,Tt[K]);for(let wt=0;wt<$.length;wt++){let Mt=$[wt];Jt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,0,0,Vt,At,Mt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,ie,Vt,At,Mt.image[K])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function pt(w,v,B,Z,Q,Y){let Lt=r.convert(B.format,B.colorSpace),dt=r.convert(B.type),Et=M(B.internalFormat,Lt,dt,B.colorSpace),jt=i.get(v),at=i.get(B);if(at.__renderTarget=v,!jt.__hasExternalTextures){let Tt=Math.max(1,v.width>>Y),Ot=Math.max(1,v.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,Et,Tt,Ot,v.depth,0,Lt,dt,null):e.texImage2D(Q,Y,Et,Tt,Ot,0,Lt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),yt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,at.__webglTexture,0,st(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,at.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(w,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let Z=v.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,Y=_(v.stencilBuffer,Q),Lt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=st(v);yt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Y,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Y,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Y,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,w)}else{let Z=v.textures;for(let Q=0;Q<Z.length;Q++){let Y=Z[Q],Lt=r.convert(Y.format,Y.colorSpace),dt=r.convert(Y.type),Et=M(Y.internalFormat,Lt,dt,Y.colorSpace),jt=st(v);B&&yt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,Et,v.width,v.height):yt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,Et,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Et,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);let Q=Z.__webglTexture,Y=st(v);if(v.depthTexture.format===ps)yt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Ms)yt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Wt(w){let v=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let Z=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Z}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,w)}else if(B){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),ot(v.__webglDepthbuffer[Z],w,!1);else{let Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ot(v.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(w,v,B){let Z=i.get(w);v!==void 0&&pt(Z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Wt(w)}function mt(w){let v=w.texture,B=i.get(w),Z=i.get(v);w.addEventListener("dispose",A);let Q=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Lt=Q.length>1;if(Lt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let Et=0;Et<v.mipmaps.length;Et++)B.__webglFramebuffer[dt][Et]=n.createFramebuffer()}else B.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)B.__webglFramebuffer[dt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let dt=0,Et=Q.length;dt<Et;dt++){let jt=i.get(Q[dt]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&yt(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){let Et=Q[dt];B.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);let jt=r.convert(Et.format,Et.colorSpace),at=r.convert(Et.type),Tt=M(Et.internalFormat,jt,at,Et.colorSpace,w.isXRRenderTarget===!0),Ot=st(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Tt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Et=0;Et<v.mipmaps.length;Et++)pt(B.__webglFramebuffer[dt][Et],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et);else pt(B.__webglFramebuffer[dt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let dt=0,Et=Q.length;dt<Et;dt++){let jt=Q[dt],at=i.get(jt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),Pt(n.TEXTURE_2D,jt),pt(B.__webglFramebuffer,w,jt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),m(jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),Pt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let Et=0;Et<v.mipmaps.length;Et++)pt(B.__webglFramebuffer[Et],w,v,n.COLOR_ATTACHMENT0,dt,Et);else pt(B.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,dt,0);m(v)&&p(dt),e.unbindTexture()}w.depthBuffer&&Wt(w)}function J(w){let v=w.textures;for(let B=0,Z=v.length;B<Z;B++){let Q=v[B];if(m(Q)){let Y=E(w),Lt=i.get(Q).__webglTexture;e.bindTexture(Y,Lt),p(Y),e.unbindTexture()}}}let et=[],C=[];function xt(w){if(w.samples>0){if(yt(w)===!1){let v=w.textures,B=w.width,Z=w.height,Q=n.COLOR_BUFFER_BIT,Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(w),dt=v.length>1;if(dt)for(let Et=0;Et<v.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Et=0;Et<v.length;Et++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Et]);let jt=i.get(v[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,Q,n.NEAREST),l===!0&&(et.length=0,C.length=0,et.push(n.COLOR_ATTACHMENT0+Et),w.depthBuffer&&w.resolveDepthBuffer===!1&&(et.push(Y),C.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<v.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Et]);let jt=i.get(v[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function st(w){return Math.min(s.maxSamples,w.samples)}function yt(w){let v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function lt(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Ft(w,v){let B=w.colorSpace,Z=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Es&&B!==ui&&(oe.getTransfer(B)===pe?(Z!==An||Q!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function _t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=O,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Nt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=yt}function tx(n,t){function e(i,s=ui){let r,o=oe.getTransfer(s);if(i===Kn)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return n.BYTE;if(i===qh)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===un)return n.HALF_FLOAT;if(i===Zh)return n.ALPHA;if(i===Jh)return n.RGB;if(i===An)return n.RGBA;if(i===Kh)return n.LUMINANCE;if(i===Qh)return n.LUMINANCE_ALPHA;if(i===ps)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===jh)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===tu)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===Gr||i===Wr||i===Xr||i===$r)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===Wa||i===Xa||i===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qa||i===Ya||i===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qa||i===Ya)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ja||i===Ka||i===Qa||i===ja||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qr||i===hl||i===ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===qr)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eu||i===dl||i===fl||i===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Rl=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Le=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ex={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Le;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
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

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new _n,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new we({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Il=class extends pi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Pl,m=e.getContextAttributes(),p=null,E=null,M=[],_=[],L=new j,T=null,A=new Je;A.viewport=new Ae;let P=new Je;P.viewport=new Ae;let b=[A,P],y=new Rl,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=M[X];return nt===void 0&&(nt=new Ws,M[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=M[X];return nt===void 0&&(nt=new Ws,M[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=M[X];return nt===void 0&&(nt=new Ws,M[X]=nt),nt.getHandSpace()};function U(X){let nt=_.indexOf(X.inputSource);if(nt===-1)return;let pt=M[nt];pt!==void 0&&(pt.update(X.inputSource,X.frame,c||o),pt.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",H);for(let X=0;X<M.length;X++){let nt=_[X];nt!==null&&(_[X]=null,M[X].disconnect(nt))}R=null,k=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,Ht.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",z),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Be(f.framebufferWidth,f.framebufferHeight,{format:An,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,pt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Ms:ps,pt=m.stencil?ys:Di);let It={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Be(d.textureWidth,d.textureHeight,{format:An,type:Kn,depthTexture:new oo(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(X){for(let nt=0;nt<X.removed.length;nt++){let pt=X.removed[nt],ot=_.indexOf(pt);ot>=0&&(_[ot]=null,M[ot].disconnect(pt))}for(let nt=0;nt<X.added.length;nt++){let pt=X.added[nt],ot=_.indexOf(pt);if(ot===-1){for(let Wt=0;Wt<M.length;Wt++)if(Wt>=_.length){_.push(pt),ot=Wt;break}else if(_[Wt]===null){_[Wt]=pt,ot=Wt;break}if(ot===-1)break}let It=M[ot];It&&It.connect(pt)}}let O=new I,tt=new I;function G(X,nt,pt){O.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);let ot=O.distanceTo(tt),It=nt.projectionMatrix.elements,Wt=pt.projectionMatrix.elements,Nt=It[14]/(It[10]-1),mt=It[14]/(It[10]+1),J=(It[9]+1)/It[5],et=(It[9]-1)/It[5],C=(It[8]-1)/It[0],xt=(Wt[8]+1)/Wt[0],st=Nt*C,yt=Nt*xt,lt=ot/(-C+xt),Ft=lt*-C;if(nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ft),X.translateZ(lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),It[10]===-1)X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let _t=Nt+lt,w=mt+lt,v=st-Ft,B=yt+(ot-Ft),Z=J*mt/w*_t,Q=et*mt/w*_t;X.projectionMatrix.makePerspective(v,B,Z,Q,_t,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let nt=X.near,pt=X.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(pt=x.depthFar)),y.near=P.near=A.near=nt,y.far=P.far=A.far=pt,(R!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,k=y.far),A.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,y.layers.mask=A.layers.mask|P.layers.mask;let ot=X.parent,It=y.cameras;it(y,ot);for(let Wt=0;Wt<It.length;Wt++)it(It[Wt],ot);It.length===2?G(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),rt(X,y,ot)};function rt(X,nt,pt){pt===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(pt.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ut=null;function Pt(X,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ot=!1;pt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Wt=0;Wt<pt.length;Wt++){let Nt=pt[Wt],mt=null;if(f!==null)mt=f.getViewport(Nt);else{let et=u.getViewSubImage(d,Nt);mt=et.viewport,Wt===0&&(t.setRenderTargetTextures(E,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(E))}let J=b[Wt];J===void 0&&(J=new Je,J.layers.enable(Wt),J.viewport=new Ae,b[Wt]=J),J.matrix.fromArray(Nt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Nt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(mt.x,mt.y,mt.width,mt.height),Wt===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(J)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let Wt=u.getDepthInformation(pt[0]);Wt&&Wt.isValid&&Wt.texture&&x.init(t,Wt,s.renderState)}}for(let pt=0;pt<M.length;pt++){let ot=_[pt],It=M[pt];ot!==null&&It!==void 0&&It.update(ot,nt,c||o)}ut&&ut(X,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Ht=new au;Ht.setAnimationLoop(Pt),this.setAnimationLoop=function(X){ut=X},this.dispose=function(){}}},Ti=new Bn,sx=new Se;function rx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ou(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),M=E.envMap,_=E.envMapRotation;M&&(m.envMap.value=M,Ti.copy(_),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler(Ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ox(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let _=M.program;i.uniformBlockBinding(E,_)}function c(E,M){let _=s[E.id];_===void 0&&(g(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",m));let L=M.program;i.updateUBOMapping(E,L);let T=t.render.frame;r[E.id]!==T&&(d(E),r[E.id]=T)}function h(E){let M=u();E.__bindingPointIndex=M;let _=n.createBuffer(),L=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,L,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let M=s[E.id],_=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,A=_.length;T<A;T++){let P=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,y=P.length;b<y;b++){let R=P[b];if(f(R,T,b,L)===!0){let k=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],z=0;for(let H=0;H<U.length;H++){let O=U[H],tt=x(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,k+z,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,z),z+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,M,_,L){let T=E.value,A=M+"_"+_;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{let P=L[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(E){let M=E.uniforms,_=0,L=16;for(let A=0,P=M.length;A<P;A++){let b=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,R=b.length;y<R;y++){let k=b[y],U=Array.isArray(k.value)?k.value:[k.value];for(let z=0,H=U.length;z<H;z++){let O=U[z],tt=x(O),G=_%L,it=G%tt.boundary,rt=G+it;_+=it,rt!==0&&L-rt<tt.storage&&(_+=L-rt),k.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=tt.storage}}}let T=_%L;return T>0&&(_+=L-T),E.__size=_,E.__cache={},this}function x(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){let M=E.target;M.removeEventListener("dispose",m);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var js=class{constructor(t={}){let{canvas:e=uf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=di,this.toneMappingExposure=1;let _=this,L=!1,T=0,A=0,P=null,b=-1,y=null,R=new Ae,k=new Ae,U=null,z=new ne(0),H=0,O=e.width,tt=e.height,G=1,it=null,rt=null,ut=new Ae(0,0,O,tt),Pt=new Ae(0,0,O,tt),Ht=!1,X=new Qs,nt=!1,pt=!1,ot=new Se,It=new Se,Wt=new I,Nt=new Ae,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function et(){return P===null?G:1}let C=i;function xt(S,F){return e.getContext(S,F)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),C===null){let F="webgl2";if(C=xt(F,S),C===null)throw xt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let st,yt,lt,Ft,_t,w,v,B,Z,Q,Y,Lt,dt,Et,jt,at,Tt,Ot,Vt,At,ie,Jt,ue,D;function gt(){st=new S0(C),st.init(),Jt=new tx(C,st),yt=new g0(C,st,t,Jt),lt=new Kg(C,st),yt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Ft=new E0(C),_t=new Bg,w=new jg(C,st,lt,_t,yt,Jt,Ft),v=new _0(_),B=new M0(_),Z=new Lf(C),ue=new p0(C,Z),Q=new b0(C,Z,Ft,ue),Y=new A0(C,Q,Z,Ft),Vt=new T0(C,yt,w),at=new x0(_t),Lt=new Og(_,v,B,st,yt,ue,at),dt=new rx(_,_t),Et=new kg,jt=new $g(st),Ot=new f0(_,v,B,lt,Y,f,l),Tt=new Zg(_,Y,yt),D=new ox(C,Ft,yt,lt),At=new m0(C,st,Ft),ie=new w0(C,st,Ft),Ft.programs=Lt.programs,_.capabilities=yt,_.extensions=st,_.properties=_t,_.renderLists=Et,_.shadowMap=Tt,_.state=lt,_.info=Ft}gt();let $=new Il(_,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let S=st.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=st.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(O,tt,!1))},this.getSize=function(S){return S.set(O,tt)},this.setSize=function(S,F,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,tt=F,e.width=Math.floor(S*G),e.height=Math.floor(F*G),V===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(O*G,tt*G).floor()},this.setDrawingBufferSize=function(S,F,V){O=S,tt=F,G=V,e.width=Math.floor(S*V),e.height=Math.floor(F*V),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(ut)},this.setViewport=function(S,F,V,W){S.isVector4?ut.set(S.x,S.y,S.z,S.w):ut.set(S,F,V,W),lt.viewport(R.copy(ut).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Pt)},this.setScissor=function(S,F,V,W){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,F,V,W),lt.scissor(k.copy(Pt).multiplyScalar(G).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(S){lt.setScissorTest(Ht=S)},this.setOpaqueSort=function(S){it=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(S=!0,F=!0,V=!0){let W=0;if(S){let N=!1;if(P!==null){let ct=P.texture.format;N=ct===cc||ct===lc||ct===ac}if(N){let ct=P.texture.type,vt=ct===Kn||ct===Di||ct===Ys||ct===ys||ct===rc||ct===oc,Rt=Ot.getClearColor(),Ut=Ot.getClearAlpha(),Yt=Rt.r,Qt=Rt.g,Dt=Rt.b;vt?(g[0]=Yt,g[1]=Qt,g[2]=Dt,g[3]=Ut,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Yt,x[1]=Qt,x[2]=Dt,x[3]=Ut,C.clearBufferiv(C.COLOR,0,x))}else W|=C.COLOR_BUFFER_BIT}F&&(W|=C.DEPTH_BUFFER_BIT),V&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Et.dispose(),jt.dispose(),_t.dispose(),v.dispose(),B.dispose(),Y.dispose(),ue.dispose(),D.dispose(),Lt.dispose(),$.dispose(),$.removeEventListener("sessionstart",St),$.removeEventListener("sessionend",$t),Gt.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let S=Ft.autoReset,F=Tt.enabled,V=Tt.autoUpdate,W=Tt.needsUpdate,N=Tt.type;gt(),Ft.autoReset=S,Tt.enabled=F,Tt.autoUpdate=V,Tt.needsUpdate=W,Tt.type=N}function Mt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function qt(S){let F=S.target;F.removeEventListener("dispose",qt),q(F)}function q(S){Ct(S),_t.remove(S)}function Ct(S){let F=_t.get(S).programs;F!==void 0&&(F.forEach(function(V){Lt.releaseProgram(V)}),S.isShaderMaterial&&Lt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,V,W,N,ct){F===null&&(F=mt);let vt=N.isMesh&&N.matrixWorld.determinant()<0,Rt=mr(S,F,V,W,N);lt.setMaterial(W,vt);let Ut=V.index,Yt=1;if(W.wireframe===!0){if(Ut=Q.getWireframeAttribute(V),Ut===void 0)return;Yt=2}let Qt=V.drawRange,Dt=V.attributes.position,ce=Qt.start*Yt,_e=(Qt.start+Qt.count)*Yt;ct!==null&&(ce=Math.max(ce,ct.start*Yt),_e=Math.min(_e,(ct.start+ct.count)*Yt)),Ut!==null?(ce=Math.max(ce,0),_e=Math.min(_e,Ut.count)):Dt!=null&&(ce=Math.max(ce,0),_e=Math.min(_e,Dt.count));let ye=_e-ce;if(ye<0||ye===1/0)return;ue.setup(N,W,Rt,V,Ut);let je,de=At;if(Ut!==null&&(je=Z.get(Ut),de=ie,de.setIndex(je)),N.isMesh)W.wireframe===!0?(lt.setLineWidth(W.wireframeLinewidth*et()),de.setMode(C.LINES)):de.setMode(C.TRIANGLES);else if(N.isLine){let Bt=W.linewidth;Bt===void 0&&(Bt=1),lt.setLineWidth(Bt*et()),N.isLineSegments?de.setMode(C.LINES):N.isLineLoop?de.setMode(C.LINE_LOOP):de.setMode(C.LINE_STRIP)}else N.isPoints?de.setMode(C.POINTS):N.isSprite&&de.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)de.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))de.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Bt=N._multiDrawStarts,Hn=N._multiDrawCounts,fe=N._multiDrawCount,Sn=Ut?Z.get(Ut).bytesPerElement:1,Zi=_t.get(W).currentProgram.getUniforms();for(let ln=0;ln<fe;ln++)Zi.setValue(C,"_gl_DrawID",ln),de.render(Bt[ln]/Sn,Hn[ln])}else if(N.isInstancedMesh)de.renderInstances(ce,ye,N.count);else if(V.isInstancedBufferGeometry){let Bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Hn=Math.min(V.instanceCount,Bt);de.renderInstances(ce,ye,Hn)}else de.render(ce,ye)};function ft(S,F,V){S.transparent===!0&&S.side===tn&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,Ie(S,F,V),S.side=fi,S.needsUpdate=!0,Ie(S,F,V),S.side=tn):Ie(S,F,V)}this.compile=function(S,F,V=null){V===null&&(V=S),p=jt.get(V),p.init(F),M.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==V&&S.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let W=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ct=N.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){let Rt=ct[vt];ft(Rt,V,N),W.add(Rt)}else ft(ct,V,N),W.add(ct)}),M.pop(),p=null,W},this.compileAsync=function(S,F,V=null){let W=this.compile(S,F,V);return new Promise(N=>{function ct(){if(W.forEach(function(vt){_t.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){N(S);return}setTimeout(ct,10)}st.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let kt=null;function zt(S){kt&&kt(S)}function St(){Gt.stop()}function $t(){Gt.start()}let Gt=new au;Gt.setAnimationLoop(zt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(S){kt=S,$.setAnimationLoop(S),S===null?Gt.stop():Gt.start()},$.addEventListener("sessionstart",St),$.addEventListener("sessionend",$t),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,F,P),p=jt.get(S,M.length),p.init(F),M.push(p),It.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(It),pt=this.localClippingEnabled,nt=at.init(this.clippingPlanes,pt),m=Et.get(S,E.length),m.init(),E.push(m),$.enabled===!0&&$.isPresenting===!0){let ct=_.xr.getDepthSensingMesh();ct!==null&&re(ct,F,-1/0,_.sortObjects)}re(S,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(it,rt),J=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,J&&Ot.addToRenderList(m,S),this.info.render.frame++,nt===!0&&at.beginShadows();let V=p.state.shadowsArray;Tt.render(V,S,F),nt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(p.setupLights(),F.isArrayCamera){let ct=F.cameras;if(N.length>0)for(let vt=0,Rt=ct.length;vt<Rt;vt++){let Ut=ct[vt];Ce(W,N,S,Ut)}J&&Ot.render(S);for(let vt=0,Rt=ct.length;vt<Rt;vt++){let Ut=ct[vt];Pe(m,S,Ut,Ut.viewport)}}else N.length>0&&Ce(W,N,S,F),J&&Ot.render(S),Pe(m,S,F);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(_,S,F),ue.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],nt===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function re(S,F,V,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){W&&Nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(It);let vt=Y.update(S),Rt=S.material;Rt.visible&&m.push(S,vt,Rt,V,Nt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){let vt=Y.update(S),Rt=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Nt.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Nt.copy(vt.boundingSphere.center)),Nt.applyMatrix4(S.matrixWorld).applyMatrix4(It)),Array.isArray(Rt)){let Ut=vt.groups;for(let Yt=0,Qt=Ut.length;Yt<Qt;Yt++){let Dt=Ut[Yt],ce=Rt[Dt.materialIndex];ce&&ce.visible&&m.push(S,vt,ce,V,Nt.z,Dt)}}else Rt.visible&&m.push(S,vt,Rt,V,Nt.z,null)}}let ct=S.children;for(let vt=0,Rt=ct.length;vt<Rt;vt++)re(ct[vt],F,V,W)}function Pe(S,F,V,W){let N=S.opaque,ct=S.transmissive,vt=S.transparent;p.setupLightsView(V),nt===!0&&at.setGlobalState(_.clippingPlanes,V),W&&lt.viewport(R.copy(W)),N.length>0&&Kt(N,F,V),ct.length>0&&Kt(ct,F,V),vt.length>0&&Kt(vt,F,V),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Ce(S,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Be(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?un:Kn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let ct=p.state.transmissionRenderTarget[W.id],vt=W.viewport||R;ct.setSize(vt.z,vt.w);let Rt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(z),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),J&&Ot.render(V);let Ut=_.toneMapping;_.toneMapping=di;let Yt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),nt===!0&&at.setGlobalState(_.clippingPlanes,W),Kt(S,V,W),w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct),st.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Dt=0,ce=F.length;Dt<ce;Dt++){let _e=F[Dt],ye=_e.object,je=_e.geometry,de=_e.material,Bt=_e.group;if(de.side===tn&&ye.layers.test(W.layers)){let Hn=de.side;de.side=en,de.needsUpdate=!0,xe(ye,V,W,je,de,Bt),de.side=Hn,de.needsUpdate=!0,Qt=!0}}Qt===!0&&(w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct))}_.setRenderTarget(Rt),_.setClearColor(z,H),Yt!==void 0&&(W.viewport=Yt),_.toneMapping=Ut}function Kt(S,F,V){let W=F.isScene===!0?F.overrideMaterial:null;for(let N=0,ct=S.length;N<ct;N++){let vt=S[N],Rt=vt.object,Ut=vt.geometry,Yt=W===null?vt.material:W,Qt=vt.group;Rt.layers.test(V.layers)&&xe(Rt,F,V,Ut,Yt,Qt)}}function xe(S,F,V,W,N,ct){S.onBeforeRender(_,F,V,W,N,ct),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(_,F,V,W,S,ct),N.transparent===!0&&N.side===tn&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,_.renderBufferDirect(V,F,W,N,S,ct),N.side=fi,N.needsUpdate=!0,_.renderBufferDirect(V,F,W,N,S,ct),N.side=tn):_.renderBufferDirect(V,F,W,N,S,ct),S.onAfterRender(_,F,V,W,N,ct)}function Ie(S,F,V){F.isScene!==!0&&(F=mt);let W=_t.get(S),N=p.state.lights,ct=p.state.shadowsArray,vt=N.state.version,Rt=Lt.getParameters(S,N.state,ct,F,V),Ut=Lt.getProgramCacheKey(Rt),Yt=W.programs;W.environment=S.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(S.isMeshStandardMaterial?B:v).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Yt===void 0&&(S.addEventListener("dispose",qt),Yt=new Map,W.programs=Yt);let Qt=Yt.get(Ut);if(Qt!==void 0){if(W.currentProgram===Qt&&W.lightsStateVersion===vt)return an(S,Rt),Qt}else Rt.uniforms=Lt.getUniforms(S),S.onBeforeCompile(Rt,_),Qt=Lt.acquireProgram(Rt,Ut),Yt.set(Ut,Qt),W.uniforms=Rt.uniforms;let Dt=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=at.uniform),an(S,Rt),W.needsLights=xr(S),W.lightsStateVersion=vt,W.needsLights&&(Dt.ambientLightColor.value=N.state.ambient,Dt.lightProbe.value=N.state.probe,Dt.directionalLights.value=N.state.directional,Dt.directionalLightShadows.value=N.state.directionalShadow,Dt.spotLights.value=N.state.spot,Dt.spotLightShadows.value=N.state.spotShadow,Dt.rectAreaLights.value=N.state.rectArea,Dt.ltc_1.value=N.state.rectAreaLTC1,Dt.ltc_2.value=N.state.rectAreaLTC2,Dt.pointLights.value=N.state.point,Dt.pointLightShadows.value=N.state.pointShadow,Dt.hemisphereLights.value=N.state.hemi,Dt.directionalShadowMap.value=N.state.directionalShadowMap,Dt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Dt.spotShadowMap.value=N.state.spotShadowMap,Dt.spotLightMatrix.value=N.state.spotLightMatrix,Dt.spotLightMap.value=N.state.spotLightMap,Dt.pointShadowMap.value=N.state.pointShadowMap,Dt.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Qt,W.uniformsList=null,Qt}function Fe(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=gs.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function an(S,F){let V=_t.get(S);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function mr(S,F,V,W,N){F.isScene!==!0&&(F=mt),w.resetTextureUnits();let ct=F.fog,vt=W.isMeshStandardMaterial?F.environment:null,Rt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Es,Ut=(W.isMeshStandardMaterial?B:v).get(W.envMap||vt),Yt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Dt=!!V.morphAttributes.position,ce=!!V.morphAttributes.normal,_e=!!V.morphAttributes.color,ye=di;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ye=_.toneMapping);let je=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=je!==void 0?je.length:0,Bt=_t.get(W),Hn=p.state.lights;if(nt===!0&&(pt===!0||S!==y)){let pn=S===y&&W.id===b;at.setState(W,S,pn)}let fe=!1;W.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Hn.state.version||Bt.outputColorSpace!==Rt||N.isBatchedMesh&&Bt.batching===!1||!N.isBatchedMesh&&Bt.batching===!0||N.isBatchedMesh&&Bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Bt.instancing===!1||!N.isInstancedMesh&&Bt.instancing===!0||N.isSkinnedMesh&&Bt.skinning===!1||!N.isSkinnedMesh&&Bt.skinning===!0||N.isInstancedMesh&&Bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Bt.instancingMorph===!1&&N.morphTexture!==null||Bt.envMap!==Ut||W.fog===!0&&Bt.fog!==ct||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==at.numPlanes||Bt.numIntersection!==at.numIntersection)||Bt.vertexAlphas!==Yt||Bt.vertexTangents!==Qt||Bt.morphTargets!==Dt||Bt.morphNormals!==ce||Bt.morphColors!==_e||Bt.toneMapping!==ye||Bt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Bt.__version=W.version);let Sn=Bt.currentProgram;fe===!0&&(Sn=Ie(W,F,N));let Zi=!1,ln=!1,Us=!1,Me=Sn.getUniforms(),Un=Bt.uniforms;if(lt.useProgram(Sn.program)&&(Zi=!0,ln=!0,Us=!0),W.id!==b&&(b=W.id,ln=!0),Zi||y!==S){lt.buffers.depth.getReversed()?(ot.copy(S.projectionMatrix),ff(ot),pf(ot),Me.setValue(C,"projectionMatrix",ot)):Me.setValue(C,"projectionMatrix",S.projectionMatrix),Me.setValue(C,"viewMatrix",S.matrixWorldInverse);let ii=Me.map.cameraPosition;ii!==void 0&&ii.setValue(C,Wt.setFromMatrixPosition(S.matrixWorld)),yt.logarithmicDepthBuffer&&Me.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Me.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,ln=!0,Us=!0)}if(N.isSkinnedMesh){Me.setOptional(C,N,"bindMatrix"),Me.setOptional(C,N,"bindMatrixInverse");let pn=N.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Me.setValue(C,"boneTexture",pn.boneTexture,w))}N.isBatchedMesh&&(Me.setOptional(C,N,"batchingTexture"),Me.setValue(C,"batchingTexture",N._matricesTexture,w),Me.setOptional(C,N,"batchingIdTexture"),Me.setValue(C,"batchingIdTexture",N._indirectTexture,w),Me.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Me.setValue(C,"batchingColorTexture",N._colorsTexture,w));let Fs=V.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0)&&Vt.update(N,V,Sn),(ln||Bt.receiveShadow!==N.receiveShadow)&&(Bt.receiveShadow=N.receiveShadow,Me.setValue(C,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Un.envMap.value=Ut,Un.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Un.envMapIntensity.value=F.environmentIntensity),ln&&(Me.setValue(C,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&gr(Un,Us),ct&&W.fog===!0&&dt.refreshFogUniforms(Un,ct),dt.refreshMaterialUniforms(Un,W,G,tt,p.state.transmissionRenderTarget[S.id]),gs.upload(C,Fe(Bt),Un,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(gs.upload(C,Fe(Bt),Un,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Me.setValue(C,"center",N.center),Me.setValue(C,"modelViewMatrix",N.modelViewMatrix),Me.setValue(C,"normalMatrix",N.normalMatrix),Me.setValue(C,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let pn=W.uniformsGroups;for(let ii=0,si=pn.length;ii<si;ii++){let Dc=pn[ii];D.update(Dc,Sn),D.bind(Dc,Sn)}}return Sn}function gr(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function xr(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,F,V){_t.get(S.texture).__webglTexture=F,_t.get(S.depthTexture).__webglTexture=V;let W=_t.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){let V=_t.get(S);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,V=0){P=S,T=F,A=V;let W=!0,N=null,ct=!1,vt=!1;if(S){let Ut=_t.get(S);if(Ut.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Ut.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Ut.__hasExternalTextures)w.rebindTextures(S,_t.get(S.texture).__webglTexture,_t.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Dt=S.depthTexture;if(Ut.__boundDepthTexture!==Dt){if(Dt!==null&&_t.has(Dt)&&(S.width!==Dt.image.width||S.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}let Yt=S.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(vt=!0);let Qt=_t.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Qt[F])?N=Qt[F][V]:N=Qt[F],ct=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?N=_t.get(S).__webglMultisampledFramebuffer:Array.isArray(Qt)?N=Qt[V]:N=Qt,R.copy(S.viewport),k.copy(S.scissor),U=S.scissorTest}else R.copy(ut).multiplyScalar(G).floor(),k.copy(Pt).multiplyScalar(G).floor(),U=Ht;if(lt.bindFramebuffer(C.FRAMEBUFFER,N)&&W&&lt.drawBuffers(S,N),lt.viewport(R),lt.scissor(k),lt.setScissorTest(U),ct){let Ut=_t.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ut.__webglTexture,V)}else if(vt){let Ut=_t.get(S.texture),Yt=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,V||0,Yt)}b=-1},this.readRenderTargetPixels=function(S,F,V,W,N,ct,vt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Rt=Rt[vt]),Rt){lt.bindFramebuffer(C.FRAMEBUFFER,Rt);try{let Ut=S.texture,Yt=Ut.format,Qt=Ut.type;if(!yt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&V>=0&&V<=S.height-N&&C.readPixels(F,V,W,N,Jt.convert(Yt),Jt.convert(Qt),ct)}finally{let Ut=P!==null?_t.get(P).__webglFramebuffer:null;lt.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(S,F,V,W,N,ct,vt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Rt=Rt[vt]),Rt){let Ut=S.texture,Yt=Ut.format,Qt=Ut.type;if(!yt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-W&&V>=0&&V<=S.height-N){lt.bindFramebuffer(C.FRAMEBUFFER,Rt);let Dt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.bufferData(C.PIXEL_PACK_BUFFER,ct.byteLength,C.STREAM_READ),C.readPixels(F,V,W,N,Jt.convert(Yt),Jt.convert(Qt),0);let ce=P!==null?_t.get(P).__webglFramebuffer:null;lt.bindFramebuffer(C.FRAMEBUFFER,ce);let _e=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await df(C,_e,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ct),C.deleteBuffer(Dt),C.deleteSync(_e),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,V=0){S.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);let W=Math.pow(2,-V),N=Math.floor(S.image.width*W),ct=Math.floor(S.image.height*W),vt=F!==null?F.x:0,Rt=F!==null?F.y:0;w.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,vt,Rt,N,ct),lt.unbindTexture()},this.copyTextureToTexture=function(S,F,V=null,W=null,N=0){S.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],F=arguments[2],N=arguments[3]||0,V=null);let ct,vt,Rt,Ut,Yt,Qt,Dt,ce,_e,ye=S.isCompressedTexture?S.mipmaps[N]:S.image;V!==null?(ct=V.max.x-V.min.x,vt=V.max.y-V.min.y,Rt=V.isBox3?V.max.z-V.min.z:1,Ut=V.min.x,Yt=V.min.y,Qt=V.isBox3?V.min.z:0):(ct=ye.width,vt=ye.height,Rt=ye.depth||1,Ut=0,Yt=0,Qt=0),W!==null?(Dt=W.x,ce=W.y,_e=W.z):(Dt=0,ce=0,_e=0);let je=Jt.convert(F.format),de=Jt.convert(F.type),Bt;F.isData3DTexture?(w.setTexture3D(F,0),Bt=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),Bt=C.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),Bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let Hn=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Sn=C.getParameter(C.UNPACK_SKIP_PIXELS),Zi=C.getParameter(C.UNPACK_SKIP_ROWS),ln=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ye.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ye.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qt);let Us=S.isDataArrayTexture||S.isData3DTexture,Me=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Un=_t.get(S),Fs=_t.get(F),pn=_t.get(Un.__renderTarget),ii=_t.get(Fs.__renderTarget);lt.bindFramebuffer(C.READ_FRAMEBUFFER,pn.__webglFramebuffer),lt.bindFramebuffer(C.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<Rt;si++)Us&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(S).__webglTexture,N,Qt+si),S.isDepthTexture?(Me&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(F).__webglTexture,N,_e+si),C.blitFramebuffer(Ut,Yt,ct,vt,Dt,ce,ct,vt,C.DEPTH_BUFFER_BIT,C.NEAREST)):Me?C.copyTexSubImage3D(Bt,N,Dt,ce,_e+si,Ut,Yt,ct,vt):C.copyTexSubImage2D(Bt,N,Dt,ce,_e+si,Ut,Yt,ct,vt);lt.bindFramebuffer(C.READ_FRAMEBUFFER,null),lt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Me?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Bt,N,Dt,ce,_e,ct,vt,Rt,je,de,ye.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,N,Dt,ce,_e,ct,vt,Rt,je,ye.data):C.texSubImage3D(Bt,N,Dt,ce,_e,ct,vt,Rt,je,de,ye):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Dt,ce,ct,vt,je,de,ye.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Dt,ce,ye.width,ye.height,je,ye.data):C.texSubImage2D(C.TEXTURE_2D,N,Dt,ce,ct,vt,je,de,ye);C.pixelStorei(C.UNPACK_ROW_LENGTH,Hn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Zi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ln),N===0&&F.generateMipmaps&&C.generateMipmap(Bt),lt.unbindTexture()},this.copyTextureToTexture3D=function(S,F,V=null,W=null,N=0){return S.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,S=arguments[2],F=arguments[3],N=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,V,W,N)},this.initRenderTarget=function(S){_t.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),lt.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,lt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var tr=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new j:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new I,s=[],r=[],o=[],a=new I,l=new Se;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},er=class extends vn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new j){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ll=class extends er{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var zr=new I,Ta=new dc,Aa=new dc,Ca=new dc,nr=class extends vn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),c=zr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ta.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Aa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Aa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Ta.calc(l),Aa.calc(l),Ca.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uh(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function ax(n,t){let e=1-n;return e*e*t}function lx(n,t){return 2*(1-n)*n*t}function cx(n,t){return n*n*t}function Xs(n,t,e,i){return ax(n,t)+lx(n,e)+cx(n,i)}function hx(n,t){let e=1-n;return e*e*e*t}function ux(n,t){let e=1-n;return 3*e*e*n*t}function dx(n,t){return 3*(1-n)*n*n*t}function fx(n,t){return n*n*n*t}function $s(n,t,e,i,s){return hx(n,t)+ux(n,e)+dx(n,i)+fx(n,s)}var ao=class extends vn{constructor(t=new j,e=new j,i=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new j){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dl=class extends vn{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends vn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends vn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends vn{constructor(t=new j,e=new j,i=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new j){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Xs(t,s.x,r.x,o.x),Xs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends vn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Xs(t,s.x,r.x,o.x),Xs(t,s.y,r.y,o.y),Xs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Uh(a,l.x,c.x,h.x,u.x),Uh(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this}},fo=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:nr,CubicBezierCurve:ao,CubicBezierCurve3:Dl,EllipseCurve:er,LineCurve:lo,LineCurve3:Ul,QuadraticBezierCurve:co,QuadraticBezierCurve3:ho,SplineCurve:uo}),Fl=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new fo[s.type]().fromJSON(s))}return this}},Oi=class extends Fl{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new lo(this.currentPoint.clone(),new j(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new co(this.currentPoint.clone(),new j(t,e),new j(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new ao(this.currentPoint.clone(),new j(t,e),new j(i,s),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new uo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new er(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bi=class n extends ze{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,d=new j,f=new I,g=new I,x=new I,m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let E=0;E<=e;E++){let M=i+E*h*s,_=Math.sin(M),L=Math.cos(M);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*L,o.push(u.x,u.y,u.z),d.x=E/e,d.y=T/(t.length-1),a.push(d.x,d.y);let A=l[3*T+0]*_,P=l[3*T+1],b=l[3*T+0]*L;c.push(A,P,b)}}for(let E=0;E<e;E++)for(let M=0;M<t.length-1;M++){let _=M+E*t.length,L=_,T=_+t.length,A=_+t.length+1,P=_+1;r.push(L,T,P),r.push(A,P,T)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},po=class n extends Bi{constructor(t=1,e=1,i=4,s=8){let r=new Oi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},zi=class n extends ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ki=class n extends ze{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function E(){let _=new I,L=new I,T=0,A=(e-t)/i;for(let P=0;P<=r;P++){let b=[],y=P/r,R=y*(e-t)+t;for(let k=0;k<=s;k++){let U=k/s,z=U*l+a,H=Math.sin(z),O=Math.cos(z);L.x=R*H,L.y=-y*i+m,L.z=R*O,u.push(L.x,L.y,L.z),_.set(H,A,O).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-y),b.push(g++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let y=x[b][P],R=x[b+1][P],k=x[b+1][P+1],U=x[b][P+1];(t>0||b!==0)&&(h.push(y,R,U),T+=3),(e>0||b!==r-1)&&(h.push(R,k,U),T+=3)}c.addGroup(p,T,0),p+=T}function M(_){let L=g,T=new j,A=new I,P=0,b=_===!0?t:e,y=_===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let R=g;for(let k=0;k<=s;k++){let z=k/s*l+a,H=Math.cos(z),O=Math.sin(z);A.x=b*O,A.y=m*y,A.z=b*H,u.push(A.x,A.y,A.z),d.push(0,y,0),T.x=H*.5+.5,T.y=O*.5*y+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){let U=L+k,z=R+k;_===!0?h.push(z,z+1,U):h.push(z+1,z,U),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ir=class extends Oi{constructor(t){super(t),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Oi().fromJSON(s))}return this}},px={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=du(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=vx(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return sr(r,o,e,a,l,f,0),o}};function du(n,t,e,i,s){let r,o;if(s===Px(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Fh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Fh(r,n[r],n[r+1],o);return o&&Ao(o,o.next)&&(or(o),o=o.next),o}function Hi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ao(e,e.next)||Te(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function sr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&wx(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?gx(n,i,s,r):mx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),or(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=xx(Hi(n),t,e),sr(n,t,e,i,s,r,2)):o===2&&_x(n,t,e,i,s,r):sr(Hi(n),t,e,i,s,r,1);break}}}function mx(n){let t=n.prev,e=n,i=n.next;if(Te(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ds(s,a,r,l,o,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Nl(f,g,t,e,i),E=Nl(x,m,t,e,i),M=n.prevZ,_=n.nextZ;for(;M&&M.z>=p&&_&&_.z<=E;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ds(a,h,l,u,c,d,M.x,M.y)&&Te(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ds(a,h,l,u,c,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ds(a,h,l,u,c,d,M.x,M.y)&&Te(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=E;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ds(a,h,l,u,c,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function xx(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Ao(s,r)&&fu(s,i,i.next,r)&&rr(s,r)&&rr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),or(i),or(i.next),i=n=r),i=i.next}while(i!==n);return Hi(i)}function _x(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ax(o,a)){let l=pu(o,a);o=Hi(o,o.next),l=Hi(l,l.next),sr(o,t,e,i,s,r,0),sr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function vx(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=du(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Tx(c));for(s.sort(yx),r=0;r<s.length;r++)e=Mx(s[r],e);return e}function yx(n,t){return n.x-t.x}function Mx(n,t){let e=Sx(n,t);if(!e)return t;let i=pu(e,n);return Hi(i,i.next),Hi(e,e.next)}function Sx(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ds(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),rr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&bx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function bx(n,t){return Te(n.prev,n,t.prev)<0&&Te(t.next,n,n.next)<0}function wx(n,t,e,i){let s=n;do s.z===0&&(s.z=Nl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ex(s)}function Ex(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Nl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Tx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ds(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ax(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Cx(n,t)&&(rr(n,t)&&rr(t,n)&&Rx(n,t)&&(Te(n.prev,n,t.prev)||Te(n,t.prev,t))||Ao(n,t)&&Te(n.prev,n,n.next)>0&&Te(t.prev,t,t.next)>0)}function Te(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ao(n,t){return n.x===t.x&&n.y===t.y}function fu(n,t,e,i){let s=Hr(Te(n,t,e)),r=Hr(Te(n,t,i)),o=Hr(Te(e,i,n)),a=Hr(Te(e,i,t));return!!(s!==r&&o!==a||s===0&&kr(n,e,t)||r===0&&kr(n,i,t)||o===0&&kr(e,n,i)||a===0&&kr(e,t,i))}function kr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Hr(n){return n>0?1:n<0?-1:0}function Cx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&fu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function rr(n,t){return Te(n.prev,n,n.next)<0?Te(n,t,n.next)>=0&&Te(n,n.prev,t)>=0:Te(n,t,n.prev)<0||Te(n,n.next,t)<0}function Rx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function pu(n,t){let e=new Ol(n.i,n.x,n.y),i=new Ol(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fh(n,t,e,i){let s=new Ol(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function or(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ol(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Px(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var qs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Nh(t),Oh(i,t);let o=t.length;e.forEach(Nh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Oh(i,e[l]);let a=px.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Nh(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Oh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var mo=class n extends ze{constructor(t=new ir([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Ix,M,_=!1,L,T,A,P;p&&(M=p.getSpacedPoints(h),_=!0,d=!1,L=p.computeFrenetFrames(h,!1),T=new I,A=new I,P=new I),d||(m=0,f=0,g=0,x=0);let b=a.extractPoints(c),y=b.shape,R=b.holes;if(!qs.isClockWise(y)){y=y.reverse();for(let J=0,et=R.length;J<et;J++){let C=R[J];qs.isClockWise(C)&&(R[J]=C.reverse())}}let U=qs.triangulateShape(y,R),z=y;for(let J=0,et=R.length;J<et;J++){let C=R[J];y=y.concat(C)}function H(J,et,C){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(et,C)}let O=y.length,tt=U.length;function G(J,et,C){let xt,st,yt,lt=J.x-et.x,Ft=J.y-et.y,_t=C.x-J.x,w=C.y-J.y,v=lt*lt+Ft*Ft,B=lt*w-Ft*_t;if(Math.abs(B)>Number.EPSILON){let Z=Math.sqrt(v),Q=Math.sqrt(_t*_t+w*w),Y=et.x-Ft/Z,Lt=et.y+lt/Z,dt=C.x-w/Q,Et=C.y+_t/Q,jt=((dt-Y)*w-(Et-Lt)*_t)/(lt*w-Ft*_t);xt=Y+lt*jt-J.x,st=Lt+Ft*jt-J.y;let at=xt*xt+st*st;if(at<=2)return new j(xt,st);yt=Math.sqrt(at/2)}else{let Z=!1;lt>Number.EPSILON?_t>Number.EPSILON&&(Z=!0):lt<-Number.EPSILON?_t<-Number.EPSILON&&(Z=!0):Math.sign(Ft)===Math.sign(w)&&(Z=!0),Z?(xt=-Ft,st=lt,yt=Math.sqrt(v)):(xt=lt,st=Ft,yt=Math.sqrt(v/2))}return new j(xt/yt,st/yt)}let it=[];for(let J=0,et=z.length,C=et-1,xt=J+1;J<et;J++,C++,xt++)C===et&&(C=0),xt===et&&(xt=0),it[J]=G(z[J],z[C],z[xt]);let rt=[],ut,Pt=it.concat();for(let J=0,et=R.length;J<et;J++){let C=R[J];ut=[];for(let xt=0,st=C.length,yt=st-1,lt=xt+1;xt<st;xt++,yt++,lt++)yt===st&&(yt=0),lt===st&&(lt=0),ut[xt]=G(C[xt],C[yt],C[lt]);rt.push(ut),Pt=Pt.concat(ut)}for(let J=0;J<m;J++){let et=J/m,C=f*Math.cos(et*Math.PI/2),xt=g*Math.sin(et*Math.PI/2)+x;for(let st=0,yt=z.length;st<yt;st++){let lt=H(z[st],it[st],xt);ot(lt.x,lt.y,-C)}for(let st=0,yt=R.length;st<yt;st++){let lt=R[st];ut=rt[st];for(let Ft=0,_t=lt.length;Ft<_t;Ft++){let w=H(lt[Ft],ut[Ft],xt);ot(w.x,w.y,-C)}}}let Ht=g+x;for(let J=0;J<O;J++){let et=d?H(y[J],Pt[J],Ht):y[J];_?(A.copy(L.normals[0]).multiplyScalar(et.x),T.copy(L.binormals[0]).multiplyScalar(et.y),P.copy(M[0]).add(A).add(T),ot(P.x,P.y,P.z)):ot(et.x,et.y,0)}for(let J=1;J<=h;J++)for(let et=0;et<O;et++){let C=d?H(y[et],Pt[et],Ht):y[et];_?(A.copy(L.normals[J]).multiplyScalar(C.x),T.copy(L.binormals[J]).multiplyScalar(C.y),P.copy(M[J]).add(A).add(T),ot(P.x,P.y,P.z)):ot(C.x,C.y,u/h*J)}for(let J=m-1;J>=0;J--){let et=J/m,C=f*Math.cos(et*Math.PI/2),xt=g*Math.sin(et*Math.PI/2)+x;for(let st=0,yt=z.length;st<yt;st++){let lt=H(z[st],it[st],xt);ot(lt.x,lt.y,u+C)}for(let st=0,yt=R.length;st<yt;st++){let lt=R[st];ut=rt[st];for(let Ft=0,_t=lt.length;Ft<_t;Ft++){let w=H(lt[Ft],ut[Ft],xt);_?ot(w.x,w.y+M[h-1].y,M[h-1].x+C):ot(w.x,w.y,u+C)}}}X(),nt();function X(){let J=s.length/3;if(d){let et=0,C=O*et;for(let xt=0;xt<tt;xt++){let st=U[xt];It(st[2]+C,st[1]+C,st[0]+C)}et=h+m*2,C=O*et;for(let xt=0;xt<tt;xt++){let st=U[xt];It(st[0]+C,st[1]+C,st[2]+C)}}else{for(let et=0;et<tt;et++){let C=U[et];It(C[2],C[1],C[0])}for(let et=0;et<tt;et++){let C=U[et];It(C[0]+O*h,C[1]+O*h,C[2]+O*h)}}i.addGroup(J,s.length/3-J,0)}function nt(){let J=s.length/3,et=0;pt(z,et),et+=z.length;for(let C=0,xt=R.length;C<xt;C++){let st=R[C];pt(st,et),et+=st.length}i.addGroup(J,s.length/3-J,1)}function pt(J,et){let C=J.length;for(;--C>=0;){let xt=C,st=C-1;st<0&&(st=J.length-1);for(let yt=0,lt=h+m*2;yt<lt;yt++){let Ft=O*yt,_t=O*(yt+1),w=et+xt+Ft,v=et+st+Ft,B=et+st+_t,Z=et+xt+_t;Wt(w,v,B,Z)}}}function ot(J,et,C){l.push(J),l.push(et),l.push(C)}function It(J,et,C){Nt(J),Nt(et),Nt(C);let xt=s.length/3,st=E.generateTopUV(i,s,xt-3,xt-2,xt-1);mt(st[0]),mt(st[1]),mt(st[2])}function Wt(J,et,C,xt){Nt(J),Nt(et),Nt(xt),Nt(et),Nt(C),Nt(xt);let st=s.length/3,yt=E.generateSideWallUV(i,s,st-6,st-3,st-2,st-1);mt(yt[0]),mt(yt[1]),mt(yt[3]),mt(yt[1]),mt(yt[2]),mt(yt[3])}function Nt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function mt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Lx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fo[s.type]().fromJSON(s)),new n(i,t.options)}},Ix={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new j(r,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-u),new j(d,1-g),new j(x,1-p)]:[new j(a,1-l),new j(h,1-u),new j(f,1-g),new j(m,1-p)]}};function Lx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var go=class n extends ze{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new I,g=new j;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let E=p+m,M=E,_=E+i+1,L=E+i+2,T=E+1;a.push(M,_,T),a.push(_,L,T)}}this.setIndex(a),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ar=class n extends ze{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let E=[],M=p/i,_=0;p===0&&o===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+_,1-M),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){let M=h[p][E+1],_=h[p][E],L=h[p+1][E],T=h[p+1][E+1];(p!==0||o>0)&&f.push(M,_,T),(p!==i-1||l<Math.PI)&&f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bs=class n extends ze{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(x,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xo=class n extends ze{constructor(t=new ho(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new j,h=new I,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),E(),p()}function m(M){h=t.getPointAt(M/e,h);let _=o.normals[M],L=o.binormals[M];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,P=Math.sin(A),b=-Math.cos(A);l.x=b*_.x+P*L.x,l.y=b*_.y+P*L.y,l.z=b*_.z+P*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){let L=(s+1)*(M-1)+(_-1),T=(s+1)*M+(_-1),A=(s+1)*M+_,P=(s+1)*(M-1)+_;g.push(L,T,P),g.push(T,A,P)}}function E(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)c.x=M/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var _o=class extends we{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ke=class extends Fi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Dx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ws=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends ws{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bc:r=t,a=2*e-i;break;case zc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:o=t,l=2*i-e;break;case zc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,E=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+E*o[c+L]+M*o[l+L]+_*o[u+L];return r}},zl=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},kl=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Zr:e=this.InterpolantFactoryMethodDiscrete;break;case ml:e=this.InterpolantFactoryMethodLinear;break;case jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Dx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ml;var Vi=class extends Pn{constructor(t,e,i){super(t,e,i)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Zr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Pn{};Hl.prototype.ValueTypeName="color";var Vl=class extends Pn{};Vl.prototype.ValueTypeName="number";var Gl=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)mi.slerpFlat(r,0,o,c-a,o,c,l);return r}},vo=class extends Pn{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Pn{constructor(t,e,i){super(t,e,i)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Zr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Pn{};Wl.prototype.ValueTypeName="vector";var Xl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ux=new Xl,$l=class{constructor(t){this.manager=t!==void 0?t:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var yo=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ra=new Se,Bh=new I,zh=new I,ql=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Yl=class extends ql{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Yl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Mo=class extends yo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var So=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=kh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function kh(){return performance.now()}var fc="\\[\\]\\.:\\/",Fx=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",Nx="[^"+fc.replace("\\.","")+"]",Ox=/((?:WC+[\/:])*)/.source.replace("WC",pc),Bx=/(WCOD+)?/.source.replace("WCOD",Nx),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),Hx=new RegExp("^"+Ox+Bx+zx+kx+"$"),Vx=["material","materials","bones","map"],Zl=class{constructor(t,e,i){let s=i||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},be=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fx,"")}static parseTrackName(t){let e=Hx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Zl;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G_=new Float32Array(1);var Hh=new Se,bo=class{constructor(t,e,i=0,s=1/0){this.ray=new to(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(t,e=!0,i=[]){return Jl(t,this,i,e),i.sort(Vh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Jl(t[s],this,i,e);return i.sort(Vh),i}};function Vh(n,t){return n.distance-t.distance}function Jl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Jl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);var Co={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Wx=new gi(-1,1,1,-1,0,1),mc=class extends ze{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}},Xx=new mc,_i=class{constructor(t){this._mesh=new te(Xx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Wx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ro=class extends dn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof we?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xi.clone(t.uniforms),this.material=new we({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new _i(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var cr=class extends dn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Po=class extends dn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Io=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new j);this._width=i.width,this._height=i.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ro(Co),this.copyPass.material.blending=On,this.clock=new So}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}cr!==void 0&&(o instanceof cr?i=!0:o instanceof Po&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lo=class extends dn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var mu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Cs=class n extends dn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Be(r,o,{type:un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Be(r,o,{type:un});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=mu;this.highPassUniforms=xi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new we({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new j(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Co;this.copyUniforms=xi.clone(h.uniforms),this.blendMaterial=new we({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Yr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.basic=new Rn,this.fsQuad=new _i(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new we({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new we({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Cs.BlurDirectionX=new j(1,0);Cs.BlurDirectionY=new j(0,1);var gu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Do=class extends dn{constructor(){super();let t=gu;this.uniforms=xi.clone(t.uniforms),this.material=new _o({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new _i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ic&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var hr=new I;function yn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;hr.copy(t),hr[i]=0,hr.normalize();let c=.5*o/(o+a),h=1-hr.angleTo(n)/l;return Math.sign(hr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Uo=class extends zn{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,l=new I,c=new I(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new I,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=yn(g,l,"z","y",r,i),d[p+1]=1-yn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-yn(g,l,"z","y",r,i),d[p+1]=1-yn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-yn(g,l,"x","z",r,t),d[p+1]=yn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-yn(g,l,"x","z",r,t),d[p+1]=1-yn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-yn(g,l,"x","y",r,t),d[p+1]=1-yn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=yn(g,l,"x","y",r,t),d[p+1]=1-yn(g,l,"y","x",r,e);break}}};var Xe=1920,He=1080,$x=.33/15,In=1.12,xu=-.045,_u=.015,gc=.018,Mu=-.6,Su=n=>1.35*n/(.35+Math.abs(n)),We={floor:-.4,floorExplode:-.75,camera:-.58,cameraExplode:-1.2,led:-.52,ledExplode:-1.6,reflector:-.68,reflectorExplode:-1.98},Qn={lower:{z:0,explode:0},substrate:{z:.012,explode:.34},upper:{z:.024,explode:.68},cover:{z:.04,explode:1.02}},ur={demo:0,az:.55,el:.5,roll:0,sx:1220,sy:560,size:640,fov:28,rx:0,ry:0,rz:0,explode:0,apart:0,alpha:6.31,inflate:0,stretch:0,pressX:0,pressY:0,pressAmt:0,probe:0,housing:1,cover:1,pump:0,glow:1,visible:1,bloom:.55,calib:0,zones:0,rim:1,lightX:0,lightY:0,light:0,lens:0,ball:0,support:.3,cup:0,water:0,ambient:0,dentShow:1};function No(n){return n.light*.07*Math.max(-1,Math.min(1,n.lightX/1.4))}var Oo=`
  uniform float uPitch;
  uniform float uBase;
  uniform float uAlpha;
  uniform float uInflate;
  uniform float uStretch;
  uniform vec3 uPress;
  uniform float uPressR;
  uniform vec2 uLowerC;
  uniform vec2 uUpperC;
  uniform vec2 uShear;
  uniform float uCombine;
  uniform float uGlow;
  uniform float uFade;
  uniform vec3 uLight;

  // Glare from an external light seen through the transparent cover.
  float glare(vec2 p) {
    vec2 d = p - uLight.xy;
    return uLight.z * (0.16 * exp(-dot(d, d) / 0.3) + 0.05 * exp(-dot(d, d) / 2.0));
  }

  // 50% duty grating, 1 on a line and 0 in the gap, box-filtered over the
  // pixel footprint (exact integral), so fine lines do not alias into
  // false rings on a 1x projector.
  float gratingIntegral(float s) {
    float f = fract(s);
    return floor(s) * 0.5 + min(f, 0.25) + max(f - 0.75, 0.0);
  }

  float grating(float s) {
    float w = max(fwidth(s) * 1.4, 1e-4);
    return (gratingIntegral(s + 0.5 * w) - gratingIntegral(s - 0.5 * w)) / w;
  }

  // 1 while individual lines are resolvable on screen, 0 once they are not.
  float resolvable(float s) {
    return 1.0 - smoothstep(0.28, 0.55, fwidth(s));
  }

  float discMask(vec2 p) {
    float r = length(p);
    float w = fwidth(r) * 1.5 + 1e-4;
    return 1.0 - smoothstep(1.0 - w, 1.0 + w, r);
  }

  mat2 rot(float a) {
    float c = cos(a);
    float s = sin(a);
    return mat2(c, s, -s, c);
  }

  // Material coordinates of the two gratings at point p of their own discs.
  // Inflation stretches the upper grating relative to the lower one, more in
  // the free centre than at the clamped rim. A press dents the film: the
  // upper face is compressed and the lower face stretched (Fig. 3), half of
  // the mismatch each, with a slight twist. The press argument is its amount, so
  // 0 gives the layer as it was before the touch.
  vec2 upperMaterialP(vec2 p, float press) {
    float r = length(p);
    float clampW = mix(1.0, ${Mu.toFixed(2)}, smoothstep(0.55, 0.95, r));
    float strain = 1.35 * uInflate / (0.35 + abs(uInflate));
    float eps = uStretch + strain * ${gc.toFixed(4)} * clampW;
    vec2 c = uPress.xy - uUpperC;
    vec2 d = p - c;
    float falloff = exp(-dot(d, d) / (uPressR * uPressR));
    float stretch = ${(xu/2).toFixed(4)} * press * falloff;
    float twist = ${(_u/2).toFixed(4)} * press * falloff;
    // A load along the skin drags the upper face sideways under the contact.
    float drag = press > 0.0 ? 1.0 : 0.0;
    vec2 q = c + rot(-twist) * d / (1.0 + stretch) - uShear * falloff * drag;
    return q / (1.0 + eps);
  }

  vec2 upperMaterial(vec2 p) {
    return upperMaterialP(p, uPress.z);
  }

  vec2 lowerMaterialP(vec2 p, float press) {
    vec2 c = uPress.xy - uLowerC;
    vec2 d = p - c;
    float falloff = exp(-dot(d, d) / (uPressR * uPressR));
    float stretch = ${(-xu/2).toFixed(4)} * press * falloff;
    float twist = ${(-_u/2).toFixed(4)} * press * falloff;
    return c + rot(-twist) * d / (1.0 + stretch);
  }

  vec2 lowerMaterial(vec2 p) {
    return lowerMaterialP(p, uPress.z);
  }
`,qx=`
  uniform float uInflate;
  uniform vec3 uPress;
  uniform float uPressR;
  uniform float uLayerZ;
  uniform vec2 uCenter;
  varying vec2 vLocal;
  varying vec3 vWorld;
  varying vec3 vNormal;

  void main() {
    vec2 xy = position.xy;
    float r2 = dot(xy, xy);
    float h = uInflate * 0.17;
    vec2 d = xy + uCenter - uPress.xy;
    float dent = uPress.z * 0.045 * exp(-dot(d, d) / (uPressR * uPressR));
    vec3 p = vec3(xy + uCenter, uLayerZ + h * (1.0 - r2) - dent);
    vLocal = xy;
    vec3 n = normalize(vec3(2.0 * h * xy, 1.0));
    vNormal = normalize(mat3(modelMatrix) * n);
    vec4 world = modelMatrix * vec4(p, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,vu=`
  ${Oo}
  varying vec2 vLocal;
  const vec3 FLUO = vec3(0.70, 0.90, 0.17);
  const vec3 BASE = vec3(0.004, 0.012, 0.035);

  void main() {
    vec2 p = vLocal;
    float mask = discMask(p);
    float s = dot(lowerMaterial(p), vec2(cos(uBase), sin(uBase))) / uPitch;
    float cov = mix(0.5, grating(s), resolvable(s));
    float vign = 1.0 - 0.35 * dot(p, p);
    float g = glare(p);
    cov = mix(cov, 0.5, clamp(g, 0.0, 0.7));
    vec3 col = BASE + FLUO * cov * 0.85 * vign * uGlow + vec3(0.75, 0.85, 1.0) * g;
    float rim = smoothstep(0.965, 1.0, length(p)) * mask;
    col += vec3(0.35, 0.5, 0.9) * rim * 0.5;
    gl_FragColor = vec4(col, mask * uFade);
  }
`,Yx=`
  varying vec2 vQ;
  void main() {
    vQ = position.xy;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Zx=`
  ${Oo}
  uniform vec2 uTarget;
  uniform float uRadius;
  uniform float uMode; // 0: both layers, 1: upper grating only, 2: lower only
  varying vec2 vQ;
  const vec3 FLUO = vec3(0.80, 0.95, 0.30);
  const vec3 FILM = vec3(0.42, 0.60, 1.0);
  const vec3 BASE = vec3(0.012, 0.022, 0.05);

  void main() {
    float r = length(vQ);
    vec2 m = uTarget + vQ * uRadius;
    vec2 pl = m - uLowerC;
    vec2 pu = m - uUpperC;
    vec2 dirL = vec2(cos(uBase), sin(uBase));
    vec2 dirU = vec2(cos(uBase + uAlpha), sin(uBase + uAlpha));
    float sL = dot(lowerMaterial(pl), dirL) / uPitch;
    float sU = dot(upperMaterial(pu), dirU) / uPitch;
    float inL = discMask(pl);
    float inU = discMask(pu);
    float lo = grating(sL) * inL;
    float up = grating(sU) * inU;
    vec3 lines = BASE + FLUO * lo * (1.0 - 0.85 * up) * max(uGlow, 0.8) + FILM * up * (0.6 - 0.4 * lo);
    float phase = fract(sL - sU);
    float fringe = 0.5 * (1.0 - abs(2.0 * phase - 1.0));
    vec3 fringes = BASE + FLUO * (0.1 + 0.9 * fringe) * inL * inU * 1.1;
    float lod = min(resolvable(sL), resolvable(sU));
    vec3 col = mix(fringes, lines, lod);
    if (uMode > 0.5) {
      // One grating on its own, with thin white marks at the centres of its
      // lines before the touch: a press slides the lines off their marks by
      // a fraction of a line.
      bool upperOnly = uMode < 1.5;
      float s = upperOnly ? sU : sL;
      float s0 = upperOnly ? dot(upperMaterialP(pu, 0.0), dirU) / uPitch : dot(lowerMaterialP(pl, 0.0), dirL) / uPitch;
      float inside = upperOnly ? inU : inL;
      float line = grating(s) * inside;
      float d0 = abs(fract(s0 + 0.5) - 0.5);
      float mark = (1.0 - smoothstep(0.04, 0.04 + 1.5 * fwidth(s0), d0)) * inside;
      vec3 ink = upperOnly ? FILM : FLUO;
      col = BASE + ink * line;
      col = mix(col, vec3(1.0), mark * 0.9);
    }
    col *= 1.0 - 0.3 * r * r;
    float edge = 1.0 - smoothstep(0.985, 1.0, r);
    gl_FragColor = vec4(col, edge);
  }
`,yu=`
  ${Oo}
  varying vec2 vLocal;
  const vec3 FLUO = vec3(0.70, 0.90, 0.17);
  const vec3 BASE = vec3(0.004, 0.012, 0.035);
  const vec3 FILM_LINE = vec3(0.11, 0.2, 0.5);

  void main() {
    vec2 p = vLocal;
    float mask = discMask(p);
    vec2 q = upperMaterial(p);
    float sU = dot(q, vec2(cos(uBase + uAlpha), sin(uBase + uAlpha))) / uPitch;
    float up = grating(sU);
    float lodU = resolvable(sU);

    // The lower grating seen through this point, when the layers overlap.
    vec2 pl = p + uUpperC - uLowerC;
    float inLower = discMask(pl) * uCombine;
    float sL = dot(lowerMaterial(pl), vec2(cos(uBase), sin(uBase))) / uPitch;
    float lo = grating(sL);
    float lod = min(lodU, resolvable(sL));
    // Resolved: fluorescent lines blocked by the upper lines. Unresolved:
    // the average of that product, which is the moire fringe itself.
    float emitLines = lo * (1.0 - up);
    float phase = fract(sL - sU);
    float emitFringe = 0.5 * (1.0 - abs(2.0 * phase - 1.0));
    float emit = mix(emitFringe, emitLines, lod);
    float vign = 1.0 - 0.35 * dot(pl, pl);
    // A soft glow along the fringes keeps them legible when the fine lines
    // are close to the screen's resolution.
    float g = glare(pl);
    float signal = mix(emit * 0.9 + emitFringe * 0.36, 0.33, clamp(g, 0.0, 0.7));
    vec3 stacked = BASE + FLUO * signal * vign * uGlow + vec3(0.75, 0.85, 1.0) * g;

    float upCov = mix(0.5, up, lodU);
    vec3 film = FILM_LINE * (0.35 + 0.9 * upCov);
    float filmAlpha = 0.08 + 0.5 * upCov;

    vec3 col = mix(film, stacked, inLower);
    float alpha = mix(filmAlpha, 1.0, inLower);
    float rim = smoothstep(0.965, 1.0, length(p)) * mask;
    col += vec3(0.4, 0.55, 1.0) * rim * 0.6;
    alpha = max(alpha, rim * 0.8);
    gl_FragColor = vec4(col, alpha * mask * uFade);
  }
`,Fo=`
  ${Oo}
  uniform float uSheen;
  varying vec2 vLocal;
  varying vec3 vWorld;
  varying vec3 vNormal;

  void main() {
    vec2 p = vLocal;
    float mask = discMask(p);
    vec3 v = normalize(cameraPosition - vWorld);
    float fres = pow(clamp(1.0 - abs(dot(normalize(vNormal), v)), 0.0, 1.0), 3.0);
    float rim = smoothstep(0.965, 1.0, length(p)) * mask;
    vec3 col = vec3(0.55, 0.7, 1.0) * (fres * 0.6 + rim * 0.6);
    float alpha = (uSheen * 0.05 + fres * 0.35 * uSheen + rim * 0.6) * mask * uFade;
    gl_FragColor = vec4(col, alpha);
  }
`,Jx=`
  uniform vec2 uGlowPos;
  uniform float uGlowSize;
  uniform float uGlow;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 px = vUv * vec2(${Xe.toFixed(1)}, ${He.toFixed(1)});
    vec3 col = mix(vec3(0.0012, 0.0024, 0.0058), vec3(0.0045, 0.0095, 0.021), vUv.y);
    float d = length((px - uGlowPos) / uGlowSize);
    col += vec3(0.012, 0.03, 0.09) * exp(-d * d * 1.6) * uGlow;
    // Faint diagonal hairlines, the deck's grating motif.
    float g = abs(fract(dot(px, vec2(0.6, 0.8)) / 9.0) - 0.5);
    col += vec3(0.004, 0.007, 0.014) * smoothstep(0.46, 0.5, g);
    col += (hash(px) - 0.5) / 255.0;
    gl_FragColor = vec4(col, 1.0);
  }
`;function vi(n,t,e={}){return new we({uniforms:{...t,uLayerZ:{value:0},uCenter:{value:new j},...e},vertexShader:qx,fragmentShader:n,transparent:!0,depthWrite:!1,side:tn})}function jn(n,t){let e=Math.cos(In)-Math.cos(In+n)/(1+t),i=Math.sin(In)-Math.sin(In+n)/(1+t);return Math.atan2(i,e)+Math.PI/2}function xc(n){return n.stretch+Su(n.inflate)*gc}function Rs(n){let t=n.alpha*Math.PI/180,e=Su(n.inflate)*gc,i=n.stretch+e,s=n.stretch+e*Mu;return{roi:jn(t,i),periphery:jn(t,s)}}function bu(n,{preserve:t=!1}={}){let e=new js({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:t});e.setPixelRatio(1);let i=new tr,s=new Je(28,Xe/He,.05,200),r=new te(new Ni(2,2),new we({uniforms:{uGlowPos:{value:new j(1200,540)},uGlowSize:{value:700},uGlow:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.9999, 1.0);
        }
      `,fragmentShader:Jx,depthTest:!1,depthWrite:!1}));r.frustumCulled=!1,r.renderOrder=-10,i.add(r),i.add(new Mo(7308976,.35));let o=new lr(14674175,2.2);o.position.set(-3,5,4),i.add(o);let a=new lr(5213439,3);a.position.set(4,1.5,-4),i.add(a);let l=new Le;i.add(l);let c={uPitch:{value:$x},uBase:{value:In},uAlpha:{value:6.31*Math.PI/180},uInflate:{value:0},uStretch:{value:0},uPress:{value:new I},uPressR:{value:.36},uLowerC:{value:new j},uUpperC:{value:new j},uShear:{value:new j},uCombine:{value:1},uGlow:{value:1},uFade:{value:1},uLight:{value:new I}},h=new Le;h.rotation.x=-Math.PI/2,l.add(h);let u=new go(1e-4,1,256,96),d={lower:vi(vu,c),substrate:vi(Fo,c,{uSheen:{value:.4},uFade:{value:1}}),upper:vi(yu,c),cover:vi(Fo,c,{uSheen:{value:1},uFade:{value:1}})};d.lower.depthWrite=!0;let f={};["lower","substrate","upper","cover"].forEach((q,Ct)=>{let ft=new te(u,d[q]);ft.renderOrder=Ct+1,ft.frustumCulled=!1,h.add(ft),f[q]=ft});let g=new ke({color:2899034,metalness:.6,roughness:.3,transparent:!0,opacity:.6,depthWrite:!1,side:tn}),x=new te(new Bi([new j(1,.07),new j(1.14,.07),new j(1.2,.03),new j(1.2,-.05),new j(1,-.05)],160),g);l.add(x);let m=new Rn({color:7314431,transparent:!0,depthWrite:!1}),p=(q,Ct,ft)=>{let kt=new te(new bs(q,.006,8,200),m);return kt.rotation.x=Math.PI/2,kt.position.y=Ct,ft.add(kt),kt},E=p(1.14,.07,l),M=new we({uniforms:{uFade:{value:1}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vWorld;
      void main() {
        vNormal = normalize(mat3(modelMatrix) * normal);
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform float uFade;
      varying vec3 vNormal;
      varying vec3 vWorld;
      void main() {
        vec3 v = normalize(cameraPosition - vWorld);
        float fres = pow(clamp(1.0 - abs(dot(normalize(vNormal), v)), 0.0, 1.0), 2.5);
        vec3 col = vec3(0.3, 0.45, 0.85) * (0.3 + 0.9 * fres);
        gl_FragColor = vec4(col, (0.06 + 0.5 * fres) * uFade);
      }
    `,transparent:!0,depthWrite:!1,side:tn}),_=new Le;l.add(_);let L=new te(new Bi([new j(1.2,-.06),new j(1.2,-.62),new j(1.14,-.7),new j(.18,-.7)],160),M);_.add(L),p(1.2,-.06,_),p(1.15,-.69,_);let T=new te(new zi(1.17,96),M);T.rotation.x=-Math.PI/2,l.add(T);let A=p(1.17,0,T);A.rotation.x=0;let P=new Rn({color:6127556,transparent:!0,depthWrite:!1}),b=new te(new zi(1.08,96),P);b.rotation.x=-Math.PI/2,l.add(b);let y=new Le;l.add(y);let R=new Rn({color:8825599,transparent:!0});for(let q=0;q<12;q+=1){let Ct=new te(new ar(.032,12,8),R),ft=q/12*Math.PI*2;Ct.scale.y=.6,Ct.position.set(Math.cos(ft)*.42,-.03,Math.sin(ft)*.42),y.add(Ct)}let k=new te(new bs(.42,.03,8,96),new ke({color:3820138,metalness:.4,roughness:.45,transparent:!0}));k.rotation.x=Math.PI/2,y.add(k);let U=new Le;l.add(U);let z=new te(new zn(.34,.16,.34),new ke({color:3885155,metalness:.55,roughness:.35,transparent:!0}));U.add(z);let H=new te(new ki(.09,.1,.1,48),new ke({color:1712688,metalness:.9,roughness:.15,transparent:!0}));H.position.y=.12,U.add(H);let O=new te(new zi(.06,32),new Rn({color:10273023,transparent:!0,opacity:.85}));O.rotation.x=-Math.PI/2,O.position.y=.171,U.add(O);let tt=new Le;l.add(tt);let G=new te(new zn(.46,.3,.3),new ke({color:1910584,metalness:.6,roughness:.35,transparent:!0}));tt.add(G);let it=new ke({color:5213439,emissive:1454186,metalness:.2,roughness:.4,transparent:!0}),rt=null,ut=0,Pt=new te(new po(.055,.7,8,24),new ke({color:13227238,metalness:.85,roughness:.22,transparent:!0}));l.add(Pt);let Ht=new ke({color:11123412,emissive:1845056,metalness:.45,roughness:.4,transparent:!0}),X=.34,nt=.04+2*X*.94,pt=new ke({color:15849935,emissive:2759972,roughness:.55,metalness:0,transparent:!0}),ot=new te(new ar(X,48,32),pt);l.add(ot);let It=1.7,Wt=.28,Nt=.22,mt=.48,J=1.215;function et(q){let Ct=Math.asin(mt/It),ft=Ct+.3,kt=It*Math.cos(Ct),zt=new ir;zt.moveTo(q,mt),zt.lineTo(kt+.5,mt),zt.quadraticCurveTo(kt,mt,It*Math.cos(ft),It*Math.sin(ft)),zt.absarc(0,0,It,ft,2*Math.PI-ft,!1),zt.quadraticCurveTo(kt,-mt,kt+.5,-mt),zt.lineTo(q,-mt),zt.closePath();let St=new Oi;St.absarc(0,0,J,0,2*Math.PI,!0),zt.holes.push(St);let $t=new mo(zt,{depth:Wt-.06,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:3,curveSegments:72});return $t.translate(0,0,-(Wt-.06)/2),$t.applyMatrix4(new Se().makeBasis(new I(0,1,0),new I(0,0,1),new I(1,0,0))),$t}let C=new Bi([new j(1.2,-.06),new j(1.2,-.62),new j(1.14,-.7),new j(.18,-.7)],160);function xt({far:q,grasp:Ct}){let ft=new ke({color:4608366,emissive:856866,metalness:.35,roughness:.55,transparent:!0}),kt=new ke({color:2041664,emissive:593176,metalness:.1,roughness:.8,transparent:!0}),zt=new ke({color:9413576,emissive:1581882,metalness:.55,roughness:.4,transparent:!0}),St=et(q+.2),$t=(ct,vt,Rt,Ut,Yt,Qt)=>{let Dt=new te(new Uo(ct,vt,Rt,4,Math.min(ct,vt,Rt)*.3),Ut);return Dt.position.set(Yt,Qt,0),Dt},Gt=new Le;Gt.rotation.z=Math.PI/2,l.add(Gt);let re=new Le;re.rotation.x=-Math.PI/2,Gt.add(re);let Pe=new te(St,ft);Pe.position.x=-Nt;let Ce=new Le,Kt=new te(St,ft);Kt.position.x=Nt;let xe=new Le;xe.rotation.z=Math.PI/2;let Ie=new Le;Ie.rotation.x=Math.PI/2;let Fe={uInflate:{value:0},uPress:{value:new I}},an={lower:vi(vu,c,{...Fe,uFade:{value:1}}),substrate:vi(Fo,c,{...Fe,uSheen:{value:.4},uFade:{value:1}}),upper:vi(yu,c,{...Fe,uFade:{value:1}}),cover:vi(Fo,c,{...Fe,uSheen:{value:1},uFade:{value:1}})};an.lower.depthWrite=!0,Object.keys(an).forEach((ct,vt)=>{let Rt=new te(u,an[ct]);Rt.renderOrder=vt+1,Rt.frustumCulled=!1,Ie.add(Rt)});let mr=g.clone(),gr=M.clone(),xr=m.clone();xe.add(Ie,new te(x.geometry,mr),new te(C,gr));for(let[ct,vt]of[[1.14,.07],[1.2,-.06],[1.15,-.69]]){let Rt=new te(new bs(ct,.006,8,200),xr);Rt.rotation.x=Math.PI/2,Rt.position.y=vt,xe.add(Rt)}Ce.add(Kt,xe),Ce.position.x=Ct,re.add(Pe,Ce);let S=-Nt,F=Ct+Nt,V=(S+F)/2,W=F-S+1.3,N=new te(new ki(.5,.5,.3,48),ft);return N.position.set(V,q+.84,0),re.add($t(W,.7,1.5,ft,V,q+.35),$t(W-.36,.05,.34,kt,V,q+.002),$t(W+.04,.06,1.54,zt,V,q+.5),N),{root:Gt,fingerB:Ce,materials:[ft,kt,zt],skinMaterials:an,turned:Fe,frame:mr,glass:gr,edge:xr}}let st=1.9,yt=4.6,lt=.04+.5*.17+st,Ft=new ke({color:14937343,emissive:1780296,roughness:.08,metalness:0,transparent:!0,opacity:.4,side:tn,depthWrite:!1}),_t=new ke({color:4161023,emissive:993894,roughness:.2,transparent:!0,depthWrite:!1}),w=new Le,v=new te(new ki(st,st*.9,yt,48,1,!0),Ft),B=new te(new zi(st*.9,48),Ft);B.rotation.x=Math.PI/2,B.position.y=-yt/2;let Z=new te(new ki(st*.86,st*.84,1,40),_t);w.add(v,B,Z),Z.renderOrder=10,B.renderOrder=11,v.renderOrder=12,w.rotation.z=Math.PI/2,w.position.set(0,lt,0),l.add(w);let Q=xt({far:It+.75,grasp:nt+.04+.15}),Y=xt({far:It+.75,grasp:lt+st+.085+.04});function Lt(q){let Ct=nt+q.support-.04-q.inflate*.17,ft=Ts.clamp(Ct/(2*X),.55,1),kt=q.ball*(3.2*(1-ft)+.06),zt=Ts.smoothstep(q.inflate,.4,.5),St=q.cup*zt*(.3+.45*q.water),$t=Math.max(kt,St),Gt=q.cup*zt*q.water*.014;if($t>q.pressAmt){let re=q.pressAmt>.001?q.pressAmt/$t:0;return{x:q.pressX*re,y:q.pressY*re,amount:$t,shear:Gt}}return{x:q.pressX,y:q.pressY,amount:q.pressAmt,shear:Gt}}let dt=new Io(e,new Be(Xe,He,{samples:4,type:un}));dt.addPass(new Lo(i,s));let Et=new Cs(new j(Xe,He),.55,.55,.62);dt.addPass(Et);let jt=new Do;jt.needsSwap=!1,dt.addPass(jt),dt.writeBuffer.setSize(1,1);let at={...ur},Tt=Xe,Ot=He;function Vt(q,Ct){Tt=Math.max(2,Math.round(q)),Ot=Math.max(2,Math.round(Ct)),e.setSize(Tt,Ot,!1),dt.setSize(Tt,Ot),dt.writeBuffer.setSize(1,1),Et.setSize(Tt,Ot)}function At(q){let Ct=q.fov*Math.PI/180,ft=2/q.size*(He/2)/Math.tan(Ct/2),kt=q.el,zt=q.az,St=new I(Math.cos(kt)*Math.sin(zt),Math.sin(kt),Math.cos(kt)*Math.cos(zt));s.fov=q.fov,s.position.copy(St.multiplyScalar(ft));let $t=new I(-Math.sin(kt)*Math.sin(zt),Math.cos(kt),-Math.sin(kt)*Math.cos(zt));$t.applyAxisAngle(s.position.clone().normalize(),q.roll),s.up.copy($t),s.lookAt(0,0,0),s.near=Math.max(.02,ft-6),s.far=ft+8,s.setViewOffset(Xe,He,Xe/2-q.sx,He/2-q.sy,Xe,He),s.updateProjectionMatrix()}function ie(q){at={...q},At(q),l.rotation.set(q.rx,q.ry,q.rz);let Ct=q.explode,ft=q.apart;c.uAlpha.value=q.alpha*Math.PI/180,c.uInflate.value=q.inflate,c.uStretch.value=q.stretch;let kt=Lt(q);c.uPress.value.set(kt.x,kt.y,kt.amount),c.uShear.value.set(kt.shear,0),c.uLowerC.value.set(-ft,0),c.uUpperC.value.set(ft,0),c.uCombine.value=1-Ts.smoothstep(Ct,.02,.2),c.uGlow.value=q.glow,c.uFade.value=q.visible,c.uLight.value.set(q.lightX,q.lightY,q.light),c.uBase.value=In+No(q);for(let[Kt,xe]of Object.entries(f)){let Ie=Qn[Kt],Fe=xe.material.uniforms;Fe.uLayerZ.value=Ie.z+Ie.explode*Ct;let an=Kt==="lower"?-ft:Kt==="upper"?ft:0;Fe.uCenter.value.set(an,0)}let zt=q.visible*q.cover*(1-Ts.smoothstep(ft,.05,.3));d.substrate.uniforms.uFade.value=zt,d.cover.uniforms.uFade.value=zt;let St=q.visible*q.housing,$t=St>.01;g.opacity=.6*St,M.uniforms.uFade.value=St,m.opacity=St,x.visible=$t,E.visible=$t,_.visible=$t,_.position.y=-.55*Ct,T.position.y=We.floor+We.floorExplode*Ct,T.visible=$t,b.position.y=We.reflector+We.reflectorExplode*Ct,b.visible=$t,P.opacity=.32*St,y.position.y=We.led+We.ledExplode*Ct,R.opacity=St,k.material.opacity=St,U.position.y=We.camera+We.cameraExplode*Ct;for(let Kt of[z,H])Kt.material.opacity=St;O.material.opacity=.85*St,y.visible=$t,U.visible=$t;let Gt=q.visible*q.pump;if(tt.visible=Gt>.01,G.material.opacity=Gt,tt.position.set(1.75,-1-.3*Ct,.4),it.opacity=Gt,tt.visible&&(rt===null||Math.abs(Ct-ut)>.002)){ut=Ct,rt&&(rt.geometry.dispose(),tt.remove(rt));let Kt=new I(1.2-1.75,-.35-.55*Ct+1+.3*Ct,-.4),xe=new nr([new I(-.23,0,0),new I(-.35,.05,-.1),Kt.clone().add(new I(.2,-.05,0)),Kt]);rt=new te(new xo(xe,40,.025,10,!1),it),tt.add(rt)}Pt.visible=q.probe*q.visible>.01,Pt.material.opacity=q.probe*q.visible;let re=.02+(1-Math.min(1,q.pressAmt))*.45;Pt.position.set(q.pressX,.04+.055+.35+re,-q.pressY);let Pe=q.ball*q.visible;if(ot.visible=Pe>.01,ot.visible){let Kt=nt+q.support,xe=q.inflate*.17,Ie=Ts.clamp((Kt-.04-2*xe)/(2*X),.5,1),Fe=1/Math.sqrt(Ie);ot.scale.set(Fe,Ie,Fe),ot.position.set(0,.04+xe+X*Ie-.012,0),pt.opacity=Pe}let Ce=q.cup*q.visible;if(w.visible=Ce>.01,w.visible){let Kt=Math.max(.002,q.water*yt*.82);Z.scale.y=Kt,Z.position.y=-yt/2+.03+Kt/2,Z.visible=q.water>.005,Ft.opacity=.4*Ce,_t.opacity=.65*Ce}for(let[Kt,xe]of[[Q,Pe],[Y,Ce]])if(Kt.root.visible=xe>.01,!!Kt.root.visible){for(let Ie of Kt.materials)Ie.opacity=xe;for(let[Ie,Fe]of Object.entries(Kt.skinMaterials)){let an=d[Ie].uniforms;Fe.uniforms.uLayerZ.value=an.uLayerZ.value,Fe.uniforms.uCenter.value.copy(an.uCenter.value),Fe.uniforms.uFade.value=an.uFade.value*xe}Kt.turned.uInflate.value=-c.uInflate.value,Kt.turned.uPress.value.set(kt.x,kt.y,-kt.amount),Kt.frame.opacity=g.opacity*xe,Kt.glass.uniforms.uFade.value=M.uniforms.uFade.value*xe,Kt.edge.opacity=m.opacity*xe}ot.visible&&(Q.fingerB.position.x=nt+q.support+.04),Et.strength=q.bloom,r.material.uniforms.uGlowPos.value.set(q.sx,He-q.sy),r.material.uniforms.uGlowSize.value=Math.max(260,q.size*1.1),r.material.uniforms.uGlow.value=q.visible}function Jt(){dt.render()}function ue(q){let Ct=q.clone();return l.localToWorld(Ct),Ct.project(s),{x:(Ct.x+1)/2*Xe,y:(1-Ct.y)/2*He,behind:Ct.z>1}}function D(q,Ct="right"){let ft=at.explode,kt=Ct==="left"?Math.PI-.5:-.35,zt=($t,Gt)=>new I(Math.cos(kt)*$t,Gt,Math.sin(kt)*$t),St=at.inflate*.17;switch(q){case"cover":return zt(.92,Qn.cover.z+Qn.cover.explode*ft+St*.15);case"upper":return zt(.92,Qn.upper.z+Qn.upper.explode*ft+St*.15);case"substrate":return zt(.92,Qn.substrate.z+Qn.substrate.explode*ft+St*.15);case"lower":return zt(.92,Qn.lower.z+St*.15);case"chamber":return zt(1.2,-.3-.55*ft);case"floor":return zt(1.17,We.floor+We.floorExplode*ft);case"led":return zt(.42,We.led+We.ledExplode*ft-.03);case"reflector":return zt(.9,We.reflector+We.reflectorExplode*ft);case"camera":return new I(.17,We.camera+We.cameraExplode*ft,0);case"pump":return new I(1.75,-1-.3*ft+.15,.4);case"centre":return new I(0,St,0);case"top":return new I(0,St+.05,0);default:return new I}}function gt(q,Ct,ft){return new I(q,Ct,ft)}function $(q,Ct){return new I(q,0,-Ct)}let K=new bo,wt=new Tn;function Mt(q,Ct){let ft=new j(q/Xe*2-1,1-Ct/He*2);K.setFromCamera(ft,s);let kt=new I(0,1,0).applyQuaternion(l.quaternion);wt.setFromNormalAndCoplanarPoint(kt,new I(0,Qn.upper.z,0));let zt=new I;return K.ray.intersectPlane(wt,zt)?(l.worldToLocal(zt),{u:zt.x,v:-zt.z}):null}function qt(q){let Ct=new js({canvas:q,antialias:!0,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:t});Ct.setPixelRatio(1);let ft={...c,uTarget:{value:new j},uRadius:{value:.11},uMode:{value:0}},kt=new tr;kt.add(new te(new Ni(2,2),new we({uniforms:ft,vertexShader:Yx,fragmentShader:Zx,transparent:!0})));let zt=new gi(-1,1,1,-1,0,1);return{setSize(St){Ct.setSize(St,St,!1)},render(St,$t,Gt,re=0){ft.uTarget.value.set(St,$t),ft.uRadius.value=Gt,ft.uMode.value=re,Ct.render(kt,zt)}}}return ie(at),{setSize:Vt,applyState:ie,render:Jt,project:ue,anchor:D,point:gt,membranePoint:$,pick:Mt,createLens:qt,renderer:e}}var ko=1.53,zo={az:0,el:ko,housing:0,cover:0,bloom:.45},Bo={interactive:!0},dr=.01/.045,Kx={wheel:{key:"apart",min:0,max:1.12,rate:-.0016}},Qx=n=>({wheel:{key:"alpha",min:n,max:14,rate:.006}}),yi={az:0,el:ko,sx:1372,sy:600,size:560},_c={...zo,sx:1380,sy:600,size:400,...Kx},vc={az:.62,el:.5,sx:1722,sy:140,size:128,glow:1.3,bloom:.5,script:"spinIcon"},ti={gelDemo:{...vc,script:"gelPress"},gelLight:{...vc,script:"gelLight"},heroGrip:{az:.28,el:.5,rz:-Math.PI/2,sx:1470,sy:470,size:240,ball:1,script:"heroGrip"},heroDesign:{az:.62,el:.42,sx:1480,sy:400,size:325,explode:1,pump:1,script:"spin"},hero:{az:.62,el:.42,sx:1480,sy:420,size:540,script:"spin",...Bo},hook:{az:0,el:ko,sx:1500,sy:590,size:560,pressX:.2,pressY:.15,pressAmt:.3,...Bo},paradox:{az:.5,el:.8,sx:1510,sy:349,size:64,glow:1.5,bloom:.9},insightReal:{...zo,az:0,el:ko,sx:1360,sy:600,size:640,glow:1.2},stack:{az:.78,el:.3,sx:1160,sy:452,size:300,explode:1,pump:1,bloom:.5},stackAside:{az:.78,el:.3,sx:1640,sy:500,size:170,explode:1,pump:1,bloom:.5},design:{az:.5,el:.4,sx:1575,sy:470,size:390,glow:1,bloom:.5,script:"opticsCycle"},pApart:{..._c,apart:1.12,wheel:null},pOverlap:{..._c,apart:.35},pTouch:{..._c,apart:0,size:470,script:"touchCycle",dentShow:4.5,interactive:"place",wheel:{key:"pressAmt",min:0,max:3*dr,rate:9e-4},lenses:[{at:"follow",home:[.16,.1],x:801,y:481,r:185,hollow:!0}]},pAmplify:{...zo,...yi,script:"amplifyDemo",...Bo,...Qx(2)},pAmplifyReal:{...zo,...yi},pPressure:{...yi,zones:1,rim:0,script:"inflateCycle",wheel:{key:"inflate",min:-1,max:1,rate:.0025}},pPressureReal:{...yi,zones:1,rim:0},pWeather:{...yi,ambient:1,zones:1,script:"pressureDrift"},pLight:{...yi,light:1,lightFollow:!0,script:"lightOrbit"},pZero:{...yi,calib:1,script:"calibrate"},pZeroReal:{...yi,calib:1},inference:{az:.3,el:1.05,sx:335,sy:610,size:340,probe:1,script:"probePress"},backboneSoft:{az:.34,el:.48,rz:-Math.PI/2,sx:320,sy:680,size:110,ball:1,script:"squeeze"},backboneShear:{az:.34,el:.48,rz:-Math.PI/2,sx:250,sy:700,size:90,cup:1,script:"clampLoad"},results:{az:.5,el:.85,sx:1684,sy:215,size:190,...Bo},softness:{az:.36,el:.48,rz:-Math.PI/2,sx:1180,sy:650,size:205,ball:1,support:0,script:"softClip"},shear:{az:.34,el:.48,rz:-Math.PI/2,sx:960,sy:620,size:150,cup:1,script:"clampLoad",lenses:[{at:[0,0],span:1.02,x:1690,y:395,r:115,plain:!0,label:"Simulation",sim:!0}]},icon:vc,closing:{az:.28,el:.5,rz:-Math.PI/2,sx:1330,sy:590,size:220,ball:1,script:"heroGrip"}},wu=n=>n*n*(3-2*n),jx=n=>Math.min(1,Math.max(0,n));function sn(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e+=1){let[i,s]=n[e],[r,o]=n[e-1];if(t<=i)return o+(s-o)*wu((t-r)/(i-r))}return n[n.length-1][1]}function Eu(n){return{demo:1,pressAmt:sn([[0,0],[1.4,1.3],[3.8,1.3],[4.6,0],[5,0]],n%5)}}var yc={spin:n=>({ry:n*.12}),heroGrip:n=>({...yc.squeeze(n),az:.28-.24*Math.cos(2*Math.PI*n/14)}),spinIcon:n=>({ry:n*.12}),gelLight:n=>({ry:n*.12,...Eu(n)}),gelPress:n=>({ry:n*.12,pressAmt:sn([[0,0],[1.6,1.3],[4.2,1.3],[5.4,0],[6,0]],n%6)}),opticsCycle:()=>({}),softClip:()=>({}),pressDemo:n=>{let t=n%6;return{pressX:.28*Math.cos(n*.5),pressY:.22*Math.sin(n*.5),pressAmt:sn([[0,0],[1.2,1.3],[4.2,1.3],[5.4,0],[6,0]],t)}},alphaSweep:n=>({alpha:sn([[.4,6.31],[2.2,2],[4.6,12],[6.4,6.31]],n)}),amplifyDemo:n=>n<6.6?yc.alphaSweep(n):{alpha:6.31,...Cu("pressDemo",n-6.6)},inflateCycle:n=>({inflate:.9*Math.sin(2*Math.PI*n/6)}),touchCycle:n=>{let t=n%42;return{pressX:sn([[0,.16],[30.5,.16],[34.5,-.25],[42,-.25]],t),pressY:sn([[0,.1],[30.5,.1],[34.5,-.18],[42,-.18]],t),pressAmt:sn([[0,0],[1,0],[3.5,dr],[28,dr],[30.5,3*dr],[37,3*dr],[39.5,0],[42,0]],t)}},pressureDrift:n=>({inflate:-.5+.4*Math.sin(n*.9)+.12*Math.sin(n*2.3)}),lightOrbit:n=>({lightX:1.42*Math.cos(n*.8),lightY:1.3*Math.sin(n*.8)}),calibrate:n=>{let t=n%7,e=(Math.floor(n/7)%2===0?-1:1)*.85;if(t<1.5)return{inflate:e*wu(jx(t/.7))};let i=t-1.5;return{inflate:e*Math.exp(-2.6*i)*Math.cos(3*i)}},probePress:n=>{let t=n%4;return{pressX:.25,pressY:.2,pressAmt:sn([[0,0],[.9,0],[1.6,1],[2.9,1],[3.6,0],[4,0]],t)}},squeeze:n=>{let t=n%7;return{support:sn([[0,.3],[1,0],[6,0],[7,.3]],t),inflate:sn([[0,0],[2.2,0],[3.4,.95],[5,.95],[5.9,0],[7,0]],t)}},clampLoad:n=>{let t=n%8.5;return{inflate:sn([[0,0],[1.2,.5],[7.4,.5],[8.4,0]],t),water:sn([[0,0],[1.6,0],[6.4,1],[7.2,1],[8.2,0]],t)}}},t_={spin:n=>({ry:.25*Math.sin(2*Math.PI*n/12)}),spinIcon:()=>({}),gelPress:n=>({pressAmt:sn([[0,0],[1.6,1.3],[4.2,1.3],[5.4,0],[6,0]],n%6)}),gelLight:n=>Eu(n),pressDemo:n=>{let t=n%6;return{pressX:.28*Math.cos(2*Math.PI*n/12),pressY:.22*Math.sin(2*Math.PI*n/12),pressAmt:sn([[0,0],[1.2,1.3],[4.2,1.3],[5.4,0],[6,0]],t)}},pressureDrift:n=>({inflate:-.5+.4*Math.sin(2*Math.PI*n/7)+.12*Math.sin(6*Math.PI*n/7)}),lightOrbit:n=>({lightX:1.5*Math.cos(2*Math.PI*n/8),lightY:1.3*Math.sin(2*Math.PI*n/8)})},Tu=!1;function Au(n){Tu=!!n}function Cu(n,t){let e=Tu&&t_[n]||yc[n];return e?e(t):{}}var e_={spin:3,heroGrip:4.6,spinIcon:0,gelPress:3,gelLight:3,opticsCycle:12,pressDemo:2.2,alphaSweep:6.8,amplifyDemo:9.6,inflateCycle:1.6,touchCycle:6,calibrate:4.4,pressureDrift:3,lightOrbit:4,probePress:2.2,squeeze:4.6,softClip:3,clampLoad:6.6},n_={spin:{from:0,period:12},heroGrip:{from:0,period:14},gelPress:{from:0,period:6},gelLight:{from:0,period:5},pressDemo:{from:0,period:12},amplifyDemo:{from:6.6,period:12},inflateCycle:{from:0,period:6},touchCycle:{from:6,period:42},pressureDrift:{from:0,period:7},lightOrbit:{from:0,period:8},calibrate:{from:0,period:14},probePress:{from:0,period:4},squeeze:{from:0,period:7},softClip:{from:0,period:7.6},clampLoad:{from:0,period:8.5},opticsCycle:{from:0,period:12}};function Mc(n){let t=ti[n]?.script;return t?n_[t]??null:null}function Ru(n){let t=ti[n]?.script;return t?e_[t]??2:0}function Ps(n,t){let e=ti[n]??ti.hero,i={...ur,...e};i.lens=e.lenses?1:0;let s=e.lenses?.[0];return s&&s.x!==void 0&&(i.lensX=s.x,i.lensY=s.y,i.lensR=s.r),delete i.lenses,delete i.wheel,delete i.lightFollow,e.script&&Object.assign(i,Cu(e.script,t)),delete i.script,delete i.interactive,i}function Sc(n){return!!ti[n]?.interactive}function Pu(n){return ti[n]?.interactive==="place"}function bc(n){return ti[n]?.wheel??null}function Iu(n){return ti[n]?.lenses??null}function Lu(n){return!!ti[n]?.lightFollow}var Ho={inflate:{hz:15,inflate:[-.001,-.003,0,.002,.012,.048,.101,.183,.327,.485,.607,.726,.766,.814,.866,.904,.912,.914,.928,.923,.925,.92,.918,.906,.902,.904,.911,.912,.907,.907,.902,.892,.895,.865,.833,.784,.703,.628,.528,.416,.239,.012,-.196,-.378,-.455,-.563,-.644,-.719,-.753,-.783,-.791,-.792,-.805,-.791,-.79,-.792,-.784,-.802,-.802,-.792,-.781,-.784,-.789,-.788,-.789,-.793,-.791,-.787,-.768,-.752,-.722,-.693,-.655,-.636,-.616,-.603,-.579,-.554,-.542,-.529,-.515,-.469,-.455,-.439,-.434,-.426,-.43,-.415,-.395,-.378,-.369,-.37],still:1},zero:{hz:15,inflate:[.911,.907,.906,.907,.902,.9,.903,.893,.889,.89,.898,.897,.887,.869,.858,.853,.842,.827,.808,.797,.776,.745,.715,.688,.665,.643,.616,.583,.544,.51,.48,.442,.395,.338,.285,.206,.101,.044,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],still:4.1},touch:{hz:15,x:[-.109,-.143,-.161,-.104,-.049,-.039,-.036,-.035,-.041,-.069,-.077,-.069,-.043,-.032,-.033,-.036,-.04,-.045,-.058,.055,.164,.195,.217,.225,.246,.242,.222,.143,-.188,-.41,-.449,-.453,-.455,-.46,-.461,-.463,-.462,-.46,-.458,-.458,-.453,-.469,-.473,-.292,-.177,-.154,-.147,-.14,-.149,-.148,-.122,-.107,-.108,-.112,-.119,-.127,-.039,-.268,-.548,-.552,-.556,-.563,-.573,-.575,-.579,-.582,-.573,-.571,-.574,-.562,-.437,-.264,-.223,-.2,-.183,-.178,-.172,-.178,-.185,-.184,-.182,-.18,-.183,-.18,-.178,-.181,-.185,-.103,.132,.132,.132,.132,.132,.132,.132,.132,.132,.132],y:[.418,.421,.314,.168,.098,.091,.084,.08,.085,.123,.282,.4,.429,.436,.433,.429,.426,.422,.41,.395,.268,.086,.057,.054,.038,.034,.037,.052,-.024,-.199,-.335,-.373,-.374,-.378,-.376,-.373,-.371,-.368,-.369,-.361,-.25,-.062,.124,.235,.152,.078,.076,.072,.083,.116,.138,.147,.147,.145,.151,.185,.3,.335,.199,.175,.161,.179,.19,.186,.179,.188,.202,.206,.209,.241,.373,.421,.292,.22,.204,.199,.186,.172,.17,.175,.18,.177,.181,.183,.184,.187,.194,.29,.484,.484,.484,.484,.484,.484,.484,.484,.484,.484],amt:[.082,.068,.204,.703,1.191,1.2,1.2,1.2,1.183,.968,.576,.623,.894,.984,.997,1.022,1.012,.996,.823,.509,.527,.994,1.177,1.196,1.2,1.2,1.179,.834,.353,.302,.55,.705,.724,.734,.73,.722,.723,.722,.71,.664,.517,.307,.102,.189,.68,1.053,1.09,1.15,1.16,1.185,1.2,1.2,1.199,1.191,1.165,1.028,.652,.256,.345,.459,.596,.662,.688,.69,.682,.671,.661,.663,.64,.479,.214,.193,.558,.889,1.05,1.144,1.176,1.166,1.143,1.147,1.138,1.15,1.15,1.16,1.169,1.168,1.157,.875,.082,0,0,0,0,0,0,0,0,0],still:1},light:{hz:15,x:[-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.16,-.144,-.118,-.091,-.077,-.079,-.091,-.093,-.1,-.109,-.116,-.137,-.169,-.184,-.184,-.176,-.167,-.162,-.145,-.138,-.138,-.132,-.13,-.13,-.138,-.143,-.145,-.132,-.119,-.1,-.086,-.07,-.049,-.045,-.042,-.043,-.051,-.058,-.062,-.042,-.011,.007,.022,.041,.05,.021,-.061,-.11,-.156,-.21,-.2,-.187,-.188,-.193,-.205,-.209,-.194,-.187,-.176,-.175,-.18,-.2,-.23,-.214,-.198,-.206,-.202,-.185,-.182,-.181,-.18,-.18,-.18,-.178,-.176,-.177,-.176,-.175,-.173,-.171,-.17,-.17,-.17,-.17,-.171,-.172,-.171,-.171,-.17,-.171,-.171,-.171,-.171,-.171,-.169,-.167,-.167,-.167,-.167,-.167,-.167,-.168,-.166,-.166,-.167,-.168,-.169,-.168,-.167,-.166,-.166,-.167,-.167,-.166,-.166,-.165,-.165,-.164,-.165,-.166,-.166,-.166],y:[.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.462,.45,.436,.416,.396,.381,.365,.36,.357,.365,.367,.374,.38,.376,.374,.378,.387,.395,.39,.388,.391,.388,.356,.333,.322,.279,.26,.301,.334,.335,.337,.339,.327,.324,.318,.315,.303,.295,.302,.304,.302,.29,.276,.243,.226,.272,.408,.45,.441,.449,.423,.386,.361,.325,.295,.286,.306,.317,.317,.314,.311,.33,.366,.351,.32,.296,.284,.282,.288,.294,.296,.3,.304,.307,.313,.317,.324,.336,.341,.343,.344,.344,.344,.344,.345,.345,.345,.343,.343,.34,.339,.339,.34,.34,.342,.341,.339,.339,.337,.34,.341,.339,.338,.337,.339,.339,.339,.34,.339,.338,.338,.339,.341,.342,.341,.34,.341,.341,.34,.339,.339,.339],amt:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.006,.076,.146,.184,.259,.395,.538,.597,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.408,.418,.585,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.477,.348,.279,.246,.233,.234,.245,.254,.28,.298,.342,.394,.431,.473,.533,.562,.597,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.595,.596,.596,.59,.592,.593,.598,.596,.596,.594,.593,.594,.596,.595,.598,.599,.599,.6,.6,.6,.597,.594,.592,.592],still:1},soft:{hz:15,inflate:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.019,.063,.143,.241,.335,.412,.484,.548,.602,.644,.684,.723,.757,.783,.802,.824,.846,.866,.888,.911,.93,.941,.943,.945,.945,.946,.947,.948,.948,.949,.949,.95,.95,.95,.95,.95,.95,.95,.949,.944,.935,.925,.91,.883,.855,.827,.796,.767,.738,.696,.641,.571,.494,.4,.273,.123,.023,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],still:3,seconds:7.6}};function Du(n,t){let e=Ho[n];if(!e)return null;let i={};for(let[s,r]of Object.entries(e)){if(!Array.isArray(r))continue;let o=Math.min(Math.max(t*e.hz,0),r.length-1),a=Math.floor(o),l=Math.min(a+1,r.length-1);i[s]=r[a]+(r[l]-r[a])*(o-a)}return i}var me=new URLSearchParams(location.search).has("export");document.documentElement.classList.toggle("export",me);Au(me);var Ku=me?2*Math.PI/3:2.4,Ic=document.getElementById("stage"),i_=document.getElementById("scene"),s_=document.getElementById("hud"),wc=document.getElementById("chrome"),r_=document.getElementById("counter"),Ec=document.getElementById("progress"),Ee=bu(i_,{preserve:me}),Uu={slide:1.7,step:1.1},o_=new Set(["probe","ball","cup","lens"]),a_=.24,Fu=.74,Is={duration:.9,slideDelay:.85,stepDelay:.22,stagger:.07},Qu="cubic-bezier(0.2, 0.7, 0.2, 1)",l_="http://www.w3.org/2000/svg",Xt=(n,t,e)=>Math.min(e,Math.max(t,n)),Vo=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Nu=n=>String(n).padStart(2,"0"),on=n=>n*180/Math.PI,rn=n=>typeof window.__tr=="function"?window.__tr(n):n;function c_(n){let t=n.split(/\[Step (\d+)\]\s*/);if(t.length<3)return null;let e=[];for(let i=1;i<t.length;i+=2)e[Number(t[i])-1]=t[i+1].trim();return e}var he=[...document.querySelectorAll("section.slide")].map((n,t)=>{let e=[...n.querySelectorAll(".r, [data-step]")],i=Math.max(1,...e.map(a=>Number(a.dataset.step??0)+1)),s=n.querySelector(".notes")?.textContent.replace(/\s+/g," ").trim()??"",r=n.dataset.stepDurations?n.dataset.stepDurations.trim().split(/\s+/).map(Number):null,o=[];for(let a of n.querySelectorAll(".h1[data-step]"))for(let l=ju(a);l<=Math.min(td(a),i-1);l+=1)o[l]=a.textContent.trim();return{el:n,index:t,id:n.id,steps:i,shots:(n.dataset.shots||"hero").trim().split(/\s+/),title:n.dataset.title||n.id,notes:s,stepNotes:c_(s),stepTitles:o,stepDurations:r,duration:r?r.reduce((a,l)=>a+l,0):Number(n.dataset.duration||0),chrome:n.dataset.chrome!=="off",reveal:e}}),ei=(n,t)=>n.shots[Math.min(t,n.shots.length-1)];function ju(n){return Number(n.dataset.step??0)}function td(n){return n.dataset.until===void 0?1/0:Number(n.dataset.until)}var Yi=(n,t)=>t>=ju(n)&&t<=td(n),Go=0,qe=me?()=>Go:()=>performance.now()/1e3,Ls=new Set;function qi(n){return n.deckStart=qe(),Ls.add(n),n.addEventListener("cancel",()=>Ls.delete(n)),me&&n.pause(),n}var Lc=new Map;function Ou(n,t,e=!1){n.classList.remove("is-on");for(let l of n.getAnimations())l.cancel();n.classList.remove("is-off");let i=n.classList.contains("callout")||n.classList.contains("real-cover");i&&!e&&(t=Math.max(t,kn));let s=!i,r={duration:e?0:Is.duration*1e3,delay:e?0:t*1e3,easing:Qu},o=s?[{opacity:0,transform:"translate3d(0, 28px, 0)"},{opacity:1,transform:"none"}]:[{opacity:0},{opacity:1}],a=qi(n.animate(o,{...r,fill:"both"}));me||a.finished.then(()=>{n.classList.add("is-on"),a.cancel()},()=>{}),qi(n.animate([{filter:s?"blur(8px)":"blur(6px)"},{filter:"blur(0px)"}],{...r,fill:"backwards"}));for(let l of n.querySelectorAll(".count"))Lc.set(l,{start:e?qe()-10:qe()+t+.1,to:Number(l.dataset.to),decimals:Number(l.dataset.decimals??0)})}function h_(n){let t=getComputedStyle(n).opacity;for(let i of n.getAnimations())i.cancel();let e=qi(n.animate([{opacity:t},{opacity:0}],{duration:200,easing:"ease",fill:"both"}));n.classList.remove("is-on"),e.finished.then(()=>ed(n),()=>{})}function ed(n){!me&&!Yi(n,Zt.step)&&(n.classList.remove("is-on"),n.classList.add("is-off"))}function nd(n){for(let t of[n.el,...n.reveal]){t.classList.remove("is-on");for(let e of t.getAnimations())e.cancel()}for(let t of n.el.querySelectorAll("video"))t.pause()}var Zt={slide:0,step:0},$i=0,kn=0,Ln=Ps(ei(he[0],0),0),pr=Ln,Dn=null;function u_(n){let t=e=>Math.atan2(Math.sin(e),Math.cos(e));return{...n,ry:t(n.ry),rx:t(n.rx),rz:t(n.rz)}}function fn(n,t,e={}){let i=Xt(n,0,he.length-1),s=he[i],r=Xt(t,0,s.steps-1),o=Zt,a=i!==o.slide;if(!a&&r===o.step&&!e.force)return;let l=a||e.force&&!e.instant;Ln=u_(e.from??pr),kn=e.instant?0:l?Uu.slide:Uu.step,$i=qe(),Zt={slide:i,step:r},Mn.clock=0,Mn.weight=1,Mn.until=0,Qe.start=qe(),Qe.active=-1,Ke.ready=!1;for(let u of s.el.querySelectorAll("[data-tab]")){let[d,f=d]=u.dataset.tab.split("-").map(Number);u.classList.toggle("done",r>f),u.classList.toggle("current",r>=d&&r<=f)}for(let u of s.el.querySelectorAll("[data-dim-from]"))u.classList.toggle("is-dim",r>=Number(u.dataset.dimFrom));if(Ds.value=null,a||e.force){if(a){Dn&&Dn.slide!==s&&(Dn.slide.el.classList.remove("is-active"),nd(Dn.slide));let f=he[o.slide];qi(f.el.animate([{opacity:1},{opacity:0}],{duration:380,easing:"ease",fill:"both"})),Dn={slide:f,until:qe()+.4}}for(let f of s.el.getAnimations())f.cancel();if(s.el.classList.add("is-active"),me)for(let f of s.el.getAnimations({subtree:!0}))Ls.has(f)||qi(f);let u=0,d=l?Is.slideDelay:Is.stepDelay;for(let f of s.reveal)if(Yi(f,r))Ou(f,d+u*Is.stagger,e.instant),u+=1;else{for(let g of f.getAnimations())g.cancel();ed(f)}}else{let u=0;for(let d of s.reveal){let f=Yi(d,o.step),g=Yi(d,r);!f&&g?(Ou(d,Is.stepDelay+u*Is.stagger),u+=1):f&&!g&&h_(d)}}let c=getComputedStyle(wc).opacity;for(let u of wc.getAnimations())u.cancel();qi(wc.animate([{opacity:c},{opacity:s.chrome?1:0}],{duration:e.instant?0:500,fill:"both"})),r_.textContent=`${Nu(i+1)} / ${Nu(he.length)}`;let h=getComputedStyle(Ec).transform;for(let u of Ec.getAnimations())u.cancel();qi(Ec.animate([{transform:h==="none"?"scaleX(0)":h},{transform:`scaleX(${he.length>1?i/(he.length-1):1})`}],{duration:e.instant?0:900,easing:Qu,fill:"both"})),sd(),me||history.replaceState(null,"",`#${s.id}${r?`.${r}`:""}`),hd()}function Xo(){let n=he[Zt.slide];Zt.step<n.steps-1?fn(Zt.slide,Zt.step+1):Zt.slide<he.length-1&&fn(Zt.slide+1,0)}function id(){if(Zt.step>0)fn(Zt.slide,Zt.step-1);else if(Zt.slide>0){let n=he[Zt.slide-1];fn(Zt.slide-1,n.steps-1)}}me||document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&sd()});var Bu=0;function sd(){clearTimeout(Bu);let n=[];if(he.forEach((t,e)=>{for(let i of t.el.querySelectorAll("video[data-autoplay]"))e===Zt.slide&&!me&&Zo(i,Zt.step)?i.paused&&(i.currentTime=0,kn>0&&i.closest(".real-cover")?n.push(i):i.play().catch(()=>{})):i.pause()}),n.length){let t=`${Zt.slide}.${Zt.step}`;Bu=setTimeout(()=>{if(t===`${Zt.slide}.${Zt.step}`)for(let e of n)e.play().catch(()=>{})},kn*1e3)}}var rd=4,Mn={clock:0,weight:1,until:0};function Jo(){me||(Mn.until=qe()+rd)}var ge={x:0,y:0,inside:!1,down:!1,moved:-1/0},le={u:0,v:0,amount:0,place:0},$o=.045,d_=.01/$o,$e=1,ni={x:0,y:0};function Tc(n){return{x:(n.clientX-ni.x)/$e,y:(n.clientY-ni.y)/$e}}function Ko(n,t){let e=Ee.pick(n,t);return e&&Math.hypot(e.u,e.v)<.97?e:null}function f_(n,t){let e=ge.inside?Ko(ge.x,ge.y):null;e&&Jo();let i=e?ge.down?1.6:1:0;if(le.amount+=(i-le.amount)*(1-Math.exp(-t*7)),Math.abs(i-le.amount)<1e-4&&(le.amount=i),e){le.amount<.03&&(le.u=e.u,le.v=e.v);let s=1-Math.exp(-t*14);le.u+=(e.u-le.u)*s,le.v+=(e.v-le.v)*s,Math.abs(e.u-le.u)+Math.abs(e.v-le.v)<1e-5&&(le.u=e.u,le.v=e.v)}return le.amount>n.pressAmt?{...n,pressX:le.u,pressY:le.v,pressAmt:le.amount}:n}var Ds={value:null};function p_(n,t){let e=ge.inside?Ko(ge.x,ge.y):null;if(e){Jo(),le.place<.03&&(le.u=e.u,le.v=e.v);let o=1-Math.exp(-t*14);le.u+=(e.u-le.u)*o,le.v+=(e.v-le.v)*o}let i=e?1:0;if(le.place+=(i-le.place)*(1-Math.exp(-t*7)),Math.abs(i-le.place)<1e-4&&(le.place=i),le.place===0)return n;let s=le.place,r=Ds.value??Math.max(n.pressAmt,d_);return{...n,pressX:n.pressX+(le.u-n.pressX)*s,pressY:n.pressY+(le.v-n.pressY)*s,pressAmt:n.pressAmt+(r-n.pressAmt)*s}}function m_(n){let t=bc(ei(he[Zt.slide],Zt.step));if(!t)return;n.preventDefault(),Jo();let e=Ds.value??pr[t.key];Ds.value=Xt(e+n.deltaY*t.rate,t.min,t.max)}function g_(n,t){let e=bc(t);return e&&Ds.value!==null?{...n,[e.key]:Ds.value}:n}var zu=1.4,Ke={x:1.5,y:0,ready:!1};function ku(n,t){let e=Math.hypot(n,t);if(e<.001)return{u:zu,v:0};let i=Xt(e,zu,1.6)/e;return{u:n*i,v:t*i}}function x_(n,t){let i=ge.inside&&qe()-ge.moved<rd?Ee.pick(ge.x,ge.y):null;i&&Jo();let s=i?ku(i.u,i.v):{u:n.lightX,v:n.lightY};Ke.ready||(Ke.x=s.u,Ke.y=s.v,Ke.ready=!0);let r=1-Math.exp(-t*(i?10:4));Ke.x+=(s.u-Ke.x)*r,Ke.y+=(s.v-Ke.y)*r;let o=ku(Ke.x,Ke.y);return Ke.x=o.u,Ke.y=o.v,{...n,lightX:Ke.x,lightY:Ke.y}}var Ac=n=>n*(n>=0?12:11);function __(n){let t=n.alpha*Math.PI/180,e=1/(2*Math.sin(t/2)),i=.33*e,s=Rs(n),r=Rs({...n,inflate:0,stretch:0}),o=-on(s.roi-r.roi),a=-on(s.periphery-r.periphery),l=on(s.roi-s.periphery),c=$o*Xt(n.pressAmt,0,1.6);return{alpha:`${n.alpha.toFixed(2)}\xB0`,pitchM:`${i.toFixed(1)} mm`,gain:`${e.toFixed(1)}\xD7`,fringes:(30/i).toFixed(1),rp:(1+n.stretch).toFixed(3),stretchPct:`${(n.stretch*100).toFixed(1)} %`,rpInflate:(1+xc(n)).toFixed(3),ambient:`${(1013.2-Ac(n.inflate)).toFixed(1)} hPa`,dtheta:`${Math.abs(on(jn(t,n.stretch)-jn(t,0))).toFixed(1)}\xB0`,dentPct:`${(c*100).toFixed(1)} %`,dthetaDent:`${Math.abs(on(jn(t,(1-c/2)/(1+c/2)-1)-jn(t,0))).toFixed(1)}\xB0`,pressure:`${Ac(n.inflate)>=0?"+":"\u2212"}${Math.abs(Ac(n.inflate)).toFixed(1)} hPa`,dthetaInflate:`${o>=0?"+":"\u2212"}${Math.abs(o).toFixed(1)}\xB0`,dthetaRim:`${a>=0?"+":"\u2212"}${Math.abs(a).toFixed(1)}\xB0`,calib:`${Math.abs(l).toFixed(2)}\xB0`,calibStatus:rn(Math.abs(l)<.15?"Zero \u2713":n.inflate<0?"Pump in":"Pump out"),lightShift:`${on(No(n))>=0?"+":"\u2212"}${Math.abs(on(No(n))).toFixed(1)}\xB0`}}function v_(n){if(n.light<.01||n.visible<.01)return"";let t=Ee.project(Ee.membranePoint(n.lightX,n.lightY)),e=Math.hypot(n.lightX,n.lightY)||1,i=Ee.project(Ee.membranePoint(n.lightX/e*1.08,n.lightY/e*1.08));return`<g opacity="${n.light.toFixed(3)}">
    <defs><radialGradient id="lamp-glow"><stop offset="0" stop-color="#fffbe8" stop-opacity="1"/><stop offset="0.25" stop-color="#ffe7a3" stop-opacity="0.7"/><stop offset="0.6" stop-color="#ffd36e" stop-opacity="0.22"/><stop offset="1" stop-color="#ffd36e" stop-opacity="0"/></radialGradient></defs>
    <line x1="${t.x.toFixed(1)}" y1="${t.y.toFixed(1)}" x2="${i.x.toFixed(1)}" y2="${i.y.toFixed(1)}" stroke="#ffe7a3" stroke-opacity="0.7" stroke-width="3" stroke-dasharray="8 9"/>
    <circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="120" fill="url(#lamp-glow)"/>
    <circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="30" fill="none" stroke="#fff3c4" stroke-opacity="0.8" stroke-width="2.5"/>
    <circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="17" fill="#fffdf4"/>
  </g>`}function ht(n,t,e){let i=document.createElementNS(l_,n);for(let[s,r]of Object.entries(t))i.setAttribute(s,r);return e?.appendChild(i),i}function ve(n,t,e,i,s={}){let r=ht("text",{x:t,y:e,fill:"#dce4ee","font-size":25,"font-weight":650,...s},n);return r.textContent=rn(i),r}var Hu=0;function y_(n){Hu+=1;let t=`sec${Hu}`,e=245,i=195,s=165,r=70,o=18,a=5,l=15,c=15,h=58,u=4,d=52,f=(mt,J,et=n)=>ht(mt,J,et),g=(mt,J,et,C,xt=26)=>ve(n,mt,J,et,{fill:C,"font-size":xt,"font-weight":700,"text-anchor":"middle"}),x=[22,440].map(mt=>f("rect",{x:mt,y:s-42,width:28,height:84,rx:6,fill:"#1a2335",stroke:"rgb(238 243 251 / 35%)","stroke-width":1.5})),m=f("path",{fill:"rgb(157 186 255 / 12%)",stroke:"rgb(238 243 251 / 40%)","stroke-width":1.5}),p=f("path",{fill:"rgb(157 186 255 / 45%)"}),E=f("path",{fill:"rgb(217 242 114 / 45%)"}),M=Array.from({length:c},()=>f("line",{stroke:"#9dbaff","stroke-width":4,"stroke-linecap":"round"})),_=Array.from({length:c},()=>f("line",{stroke:"#d9f272","stroke-width":4,"stroke-linecap":"round"})),L=f("rect",{width:24,rx:12,fill:"#c9d4e6"}),T=[130,360].map(()=>f("path",{fill:"none",stroke:"#86adff","stroke-width":4,"stroke-linecap":"round","stroke-linejoin":"round"})),A=g(e,0,"","#9dbaff"),P=g(e,0,"","#d9f272"),b=ve(n,60,0,"upper grating",{fill:"#9dbaff","font-size":25,"font-weight":700}),y=ve(n,60,0,"lower grating",{fill:"#d9f272","font-size":25,"font-weight":700}),R=ve(n,22,46,"OUTSIDE AIR",{"letter-spacing":2,fill:"#c6d0de","font-size":24}),k=ve(n,22,322,"SEALED CHAMBER",{"letter-spacing":2,fill:"#c6d0de","font-size":24}),U=g(e,0,"centre","#d9f272"),z=[g(72,s-58,"rim","#eef3fb"),g(418,s-58,"rim","#eef3fb")],H=f("g",{}),O=f("path",{fill:"none",stroke:"#ffe7a3","stroke-width":2.5,"stroke-dasharray":"6 8",opacity:.8},H);f("circle",{r:30,fill:"#ffe7a3",opacity:.45},H).classList.add("lamp-halo");let tt=f("circle",{r:12,fill:"#fffaf0"},H),G=H.querySelector(".lamp-halo"),it=f("g",{stroke:"#d6e4ff","stroke-width":4,"stroke-dasharray":"5 3"}),rt=Array.from({length:c},()=>f("line",{},it)),ut=ve(n,0,0,"shadow of upper lines",{fill:"#d6e4ff","font-size":24,"font-weight":700,"text-anchor":"middle"}),Pt=f("defs",{}),Ht=f("g",{}),X=(mt,J,et)=>{let C=f("g",{},Ht),xt=f("clipPath",{id:`${t}-dial-${et}`},Pt);f("circle",{cx:mt,cy:140,r:56},xt),f("circle",{cx:mt,cy:140,r:56,fill:"#0b1426"},C);let st=f("g",{"clip-path":`url(#${t}-dial-${et})`},C),yt=f("g",{},st);for(let v=-4;v<=4;v+=1)f("rect",{x:mt-85,y:140+v*24-5.5,width:170,height:11,rx:3,fill:J,opacity:.85},yt);let lt=f("circle",{cx:mt,cy:140,r:56,fill:"none",stroke:J,"stroke-width":3},C),Ft=f("g",{stroke:"#eef3fb","stroke-width":4,"stroke-linecap":"round"},C);f("line",{x1:mt-74,y1:140,x2:mt-60,y2:140},Ft),f("line",{x1:mt+60,y1:140,x2:mt+74,y2:140},Ft);let _t=ve(n,mt,232,et,{fill:J,"font-size":25,"font-weight":700,"text-anchor":"middle"});C.appendChild(_t);let w=ve(n,mt,262,"",{fill:"#dce4ee","font-size":24,"font-weight":700,"text-anchor":"middle"});return C.appendChild(w),{group:C,inner:yt,ring:lt,marks:Ft,zone:w,cx:mt}},nt=X(590,"#d9f272","centre"),pt=X(752,"#eef3fb","rim"),ot=ve(n,671,152,"\u2260",{fill:"#eef3fb","font-size":38,"font-weight":700,"text-anchor":"middle"});Ht.appendChild(ot);let It=ve(n,671,296,"",{"font-size":28,"font-weight":760,"text-anchor":"middle"});Ht.appendChild(It);let Wt=Rs({alpha:6.31,inflate:0,stretch:0}),Nt=(mt,J,et)=>{mt.setAttribute("x1",J.x.toFixed(1)),mt.setAttribute("y1",J.y.toFixed(1)),mt.setAttribute("x2",et.x.toFixed(1)),mt.setAttribute("y2",et.y.toFixed(1))};return mt=>{let J=Xt((mt.apart-.35)/.7700000000000001,0,1),et=h*J,C=1-J,xt=Xt(mt.inflate,-1,1)*C,st=r*xt,yt=Xt(mt.pressAmt*mt.dentShow,0,1.6)*C,lt=e+Xt(mt.pressX,-.8,.8)*i,Ft=20*yt,_t=mt.calib,w=mt.ambient,v=Xt(mt.stretch,0,.05)*C,B=1+u*v,Z=St=>{let $t=Xt((St-e)/i,-1,1),Gt=1-$t*$t;return s-st*Gt*Gt+Ft*Math.exp(-(((St-lt)/42)**2))*Gt},Q=St=>{let $t=Z(St),Gt=(Z(St+1)-Z(St-1))/2,re=Math.hypot(1,Gt);return{x:St,y:$t,nx:Gt/re,ny:-1/re}},Y=(St,$t)=>({x:St.x+St.nx*$t,y:St.y+St.ny*$t}),Lt=(St,$t)=>{let Gt="",re="";for(let Pe=e-i;Pe<=e+i+.01;Pe+=6.5){let Ce=Q(Pe),Kt=Y(Ce,St),xe=Y(Ce,$t);Gt+=`${Gt?"L":"M"}${Kt.x.toFixed(1)} ${Kt.y.toFixed(1)}`,re=`L${xe.x.toFixed(1)} ${xe.y.toFixed(1)}`+re}return`${Gt}${re}Z`};m.setAttribute("d",Lt(o,-o)),m.setAttribute("opacity",C.toFixed(3));for(let St of x)St.setAttribute("opacity",C.toFixed(3));p.setAttribute("d",Lt(o+et,o+et+a)),E.setAttribute("d",Lt(-o-et,-o-et-a));for(let St=0;St<c;St+=1){let $t=e-i+(St+.5)/c*i*2,Gt=Q($t),re=e+($t-e)*B,Pe=Q(Xt(re,e-i,e+i));Nt(M[St],Y(Pe,o+et+a),Y(Pe,o+et+a+l)),M[St].setAttribute("opacity",Xt((i-Math.abs(re-e))/8,0,1).toFixed(3)),Nt(_[St],Y(Gt,-o-et-a),Y(Gt,-o-et-a-l))}b.setAttribute("y",(s-o-et-a-l-12).toFixed(1)),y.setAttribute("y",(s+o+et+a+l+28).toFixed(1));let dt=Xt(mt.apart/.35,0,1);b.setAttribute("opacity",dt.toFixed(3)),y.setAttribute("opacity",dt.toFixed(3));let Et=Y(Q(lt),o+a),jt=Xt(yt*3,0,1)*(1-Xt(Math.abs(xt)*4,0,1));L.setAttribute("x",(lt-12).toFixed(1)),L.setAttribute("y",Math.min(Et.y-110,Et.y-110).toFixed(1)),L.setAttribute("height","110"),L.setAttribute("opacity",jt.toFixed(3));let at=Xt((Math.abs(xt)-.04)*6,0,1),Tt=jt,Ot=Xt(v/.004,0,1),Vt=Q(e);Ot>Math.max(at,Tt)?(A.textContent=rn("stretched"),P.textContent="",A.setAttribute("x",e),A.setAttribute("y",(s-o-a-l-16).toFixed(1))):at>=Tt?(A.textContent=rn(xt>=0?"stretched":"compressed"),P.textContent=rn(xt>=0?"compressed":"stretched"),A.setAttribute("x",e),P.setAttribute("x",e),A.setAttribute("y",(Math.min(Vt.y,s)-o-a-l-16).toFixed(1)),P.setAttribute("y",(Math.max(Vt.y,s)+o+a+l+32).toFixed(1))):(A.textContent=rn("compressed"),P.textContent=rn("stretched"),A.setAttribute("x",(lt+(lt<e?110:-110)).toFixed(1)),P.setAttribute("x",lt.toFixed(1)),A.setAttribute("y",(s-o-a-l-30).toFixed(1)),P.setAttribute("y",(Q(lt).y+o+a+l+34).toFixed(1)));let At=Math.max(_t,Xt(mt.zones,0,1)),ie=Math.max(at,Tt,Ot)*C*(1-At);A.setAttribute("opacity",ie.toFixed(3)),P.setAttribute("opacity",ie.toFixed(3));let Jt=Xt(Math.abs(xt)*5,0,1);T.forEach((St,$t)=>{let Gt=[130,360][$t],re=Y(Q(Gt),-o-a-l).y,Pe=Y(Q(Gt),o+a+l).y,Ce,Kt;_t>.5?[Ce,Kt]=xt<0?[re+80,re+26]:[re+22,re+76]:w>.5&&xt<0?[Ce,Kt]=[Pe-76,Pe-24]:[Ce,Kt]=xt>=0?[re+80,re+26]:[re+22,re+76];let xe=Kt>Ce?1:-1;St.setAttribute("d",`M${Gt} ${Ce.toFixed(1)}L${Gt} ${Kt.toFixed(1)}M${Gt-11} ${(Kt-xe*12).toFixed(1)}L${Gt} ${Kt.toFixed(1)}L${Gt+11} ${(Kt-xe*12).toFixed(1)}`),St.setAttribute("opacity",Jt.toFixed(3))}),R.setAttribute("opacity",w.toFixed(3)),k.setAttribute("opacity",w.toFixed(3));let ue=Xt(mt.lightX/1.4,-1,1),D=e+ue*(i-20);H.setAttribute("opacity",mt.light.toFixed(3)),tt.setAttribute("cx",D.toFixed(1)),tt.setAttribute("cy",d),G.setAttribute("cx",D.toFixed(1)),G.setAttribute("cy",d);let gt={x:D,y:d},$=s-o-a,K=s+o+a,wt=St=>gt.x+(St-gt.x)*((K-gt.y)/($-gt.y)),Mt="",qt=mt.light*C*(1-_t);for(let St=0;St<c;St+=1){let $t=e-i+(St+.5)/c*i*2,Gt=wt($t),re=Gt>e-i+4&&Gt<e+i-4;Nt(rt[St],{x:Gt,y:K-3},{x:Gt,y:K+l+8}),rt[St].setAttribute("opacity",re?"1":"0"),St%5===2&&re&&(Mt+=`M${D.toFixed(1)} 30L${Gt.toFixed(1)} ${K.toFixed(1)}`)}it.setAttribute("opacity",(.9*qt).toFixed(3)),ut.setAttribute("x",e),ut.setAttribute("y",(K+l+36).toFixed(1)),ut.setAttribute("opacity",qt.toFixed(3)),O.setAttribute("d",Mt),U.setAttribute("y",(Math.min(Vt.y,s)-o-a-l-14).toFixed(1)),U.setAttribute("opacity",At.toFixed(3));let q=Xt(mt.rim??1,0,1);for(let St of z)St.setAttribute("opacity",(At*q).toFixed(3));pt.group.setAttribute("opacity",q.toFixed(3)),Ht.setAttribute("opacity",At.toFixed(3));let Ct=Rs({...mt,alpha:6.31});nt.inner.setAttribute("transform",`rotate(${(-on(Ct.roi)).toFixed(2)} ${nt.cx} 140)`),pt.inner.setAttribute("transform",`rotate(${(-on(Ct.periphery)).toFixed(2)} ${pt.cx} 140)`);for(let St of[nt,pt])St.marks.setAttribute("transform",`rotate(${(-on(Wt.roi)).toFixed(2)} ${St.cx} 140)`);let ft=Xt((Math.abs(xt)-.04)*6,0,1)*(1-_t);nt.zone.textContent=rn(xt>=0?"stretched":"compressed"),pt.zone.textContent=rn(xt>=0?"compressed":"stretched"),nt.zone.setAttribute("opacity",ft.toFixed(3)),pt.zone.setAttribute("opacity",ft.toFixed(3));let kt=At>.01?Xt(_t/At,0,1):0;ot.setAttribute("opacity",kt.toFixed(3)),It.setAttribute("opacity",kt.toFixed(3));let zt=Math.abs(on(Ct.roi-Ct.periphery))<.15;ot.textContent=zt?"=":"\u2260",ot.setAttribute("fill",zt?"#d9f272":"#eef3fb"),pt.ring.setAttribute("stroke",zt?"#d9f272":"#eef3fb"),It.textContent=rn(zt?"flat \xB7 zero":xt<0?"sagging \xB7 pump in":"bulging \xB7 pump out"),It.setAttribute("fill",zt?"#d9f272":"#86adff")}}function Vu(n){return n.classList.add("draw"),n.style.setProperty("--len",Math.ceil(n.getTotalLength())+2),n}var Gu=0,Wu=0,M_={alphaChart(n){let t=g=>70+(g-2)/12*610,e=g=>60*Math.sin(g*Math.PI/360)/.33,i=g=>1/(2*Math.sin(g*Math.PI/360)),r=30*e(6.31)/i(6.31),o=g=>300-g/r*260,a=g=>300-Math.min(g,30)/30*260;ht("line",{x1:70,y1:300,x2:680,y2:300,stroke:"rgb(238 243 251 / 20%)"},n);for(let g of[2,10,12,14])ve(n,t(g),332,`${g}\xB0`,{"text-anchor":"middle","font-size":30});ve(n,680,364,"ANGLE \u2192",{"text-anchor":"end","letter-spacing":2,fill:"#c6d0de","font-size":30});let l=(g,x)=>{let m="";for(let p=2;p<=14.001;p+=.1)m+=`${m?"L":"M"}${t(p).toFixed(1)} ${x(g(p)).toFixed(1)}`;return m};Vu(ht("path",{d:l(e,o),fill:"none",stroke:"#d9f272","stroke-width":3.5},n)),Vu(ht("path",{d:l(i,a),fill:"none",stroke:"#86adff","stroke-width":3.5},n)),ve(n,t(13.9),o(e(13.9))-22,"Resolution",{fill:"#d9f272","text-anchor":"end","font-weight":750,"font-size":34}),ve(n,t(3),a(i(3))-16,"Sensitivity",{fill:"#86adff","font-weight":750,"font-size":34});let c={x:t(6.31),y:o(e(6.31))};ht("line",{x1:c.x,y1:c.y,x2:c.x,y2:300,stroke:"rgb(238 243 251 / 45%)","stroke-dasharray":"4 6"},n),ht("circle",{cx:c.x,cy:c.y,r:16,fill:"none",stroke:"#eef3fb","stroke-width":2.5},n),ve(n,c.x+10,330,"6.31\xB0 \xB7 balanced",{fill:"#eef3fb","font-weight":800,"text-anchor":"middle","font-size":30});let h=ht("line",{x1:0,y1:34,x2:0,y2:300,stroke:"#eef3fb","stroke-width":2},n),u=ht("circle",{r:8,fill:"#d9f272"},n),d=ht("circle",{r:8,fill:"#86adff"},n),f=ve(n,0,24,"",{fill:"#eef3fb","font-size":34,"font-weight":780,"text-anchor":"middle"});return g=>{let x=t(Xt(g.alpha,2,14));f.setAttribute("x",Xt(x,150,600).toFixed(1)),f.textContent=`${g.alpha.toFixed(1)}\xB0 \xB7 ${i(g.alpha).toFixed(1)}\xD7 ${rn("gain")}`,h.setAttribute("x1",x),h.setAttribute("x2",x),u.setAttribute("cx",x),u.setAttribute("cy",o(e(g.alpha))),d.setAttribute("cx",x),d.setAttribute("cy",a(i(g.alpha)))}},section:y_,crossings(n){Gu+=1;let t=`cross${Gu}`,e=200,i=200,s=1.65,r=.33,o=7,a=i/s,l=.5*r*a,c=ht("defs",{},n),h=ht("clipPath",{id:t},c);ht("circle",{cx:e,cy:e,r:i},h);let u=ht("mask",{id:`${t}-off`,maskUnits:"userSpaceOnUse",x:0,y:0,width:2*e,height:2*e},c);ht("rect",{x:0,y:0,width:2*e,height:2*e,fill:"#fff"},u);let d=ht("radialGradient",{id:`${t}-shade`},c);ht("stop",{offset:"0","stop-color":"#000","stop-opacity":0},d),ht("stop",{offset:"1","stop-color":"#000","stop-opacity":.3},d);let f=ht("g",{},n),g=ht("g",{"clip-path":`url(#${t})`},f);ht("rect",{x:0,y:0,width:2*e,height:2*e,fill:"#03060d"},g);let x=Array.from({length:2*o+1},(A,P)=>P-o),m=(A,P)=>{let b=ht("g",{stroke:P,"stroke-width":l.toFixed(1)},A);return x.map(()=>ht("line",{},b))},p=[m(g,"#ccf24d"),m(u,"#000")],E=[m(g,"#37494b"),m(ht("g",{mask:`url(#${t}-off)`},g),"#4361a6")];ht("circle",{cx:e,cy:e,r:i,fill:`url(#${t}-shade)`},g);let M=ht("line",{stroke:"rgb(238 243 251 / 75%)","stroke-width":3,"stroke-dasharray":"9 10"},g),_=[-1,1,0].map(A=>({m:A,line:ht("line",{stroke:"#eef3fb","stroke-width":A===0?6:4,opacity:A===0?.95:.4,"stroke-linecap":"round"},g),dots:x.map(()=>ht("circle",{r:A===0?9:6,fill:"#eef3fb",stroke:"#04070d","stroke-width":2.5},g))})),L=(A,P)=>({x:e+A*a,y:e-P*a}),T=(A,P,b,y,R)=>{let k=L(P-3*s*y,b-3*s*R),U=L(P+3*s*y,b+3*s*R);A.setAttribute("x1",k.x.toFixed(1)),A.setAttribute("y1",k.y.toFixed(1)),A.setAttribute("x2",U.x.toFixed(1)),A.setAttribute("y2",U.y.toFixed(1))};return A=>{let P=A.alpha*Math.PI/180,b=$o/2*Xt(A.pressAmt,0,1.6),y=r*(1+xc(A)-b),R=r*(1+b),k=y/R-1,U={x:Math.cos(In),y:Math.sin(In)},z={x:Math.cos(In+P),y:Math.sin(In+P)};x.forEach((it,rt)=>{for(let ut of p)T(ut[rt],U.x*it*R,U.y*it*R,-U.y,U.x);for(let ut of E)T(ut[rt],z.x*it*y,z.y*it*y,-z.y,z.x)});let H=U.x*z.y-U.y*z.x,O=(it,rt)=>({x:(rt*R*z.y-it*y*U.y)/H,y:(U.x*it*y-z.x*rt*R)/H});for(let it of _){let rt=O(0,-it.m),ut=O(1,1-it.m),Pt=Math.hypot(ut.x-rt.x,ut.y-rt.y)||1;T(it.line,rt.x,rt.y,(ut.x-rt.x)/Pt,(ut.y-rt.y)/Pt),x.forEach((Ht,X)=>{let nt=O(Ht,Ht-it.m),pt=L(nt.x,nt.y);it.dots[X].setAttribute("cx",pt.x.toFixed(1)),it.dots[X].setAttribute("cy",pt.y.toFixed(1)),it.dots[X].setAttribute("opacity",Math.hypot(nt.x,nt.y)<s*.94?it.m===0?"1":"0.55":"0")})}let tt=jn(P,0);T(M,0,0,Math.cos(tt),Math.sin(tt)),M.setAttribute("opacity",Xt(Math.abs(k)*400,0,1).toFixed(3));let G=1-Xt(A.apart/1.12,0,1);f.setAttribute("opacity",Xt(G*3-1,0,1).toFixed(3))}},scissors(n){Wu+=1;let t=`scissors${Wu}`,e=140,i=80,s=400,r=6,o=14,a=120,l=340,c="#eef3fb",h="#ccf24d",u="#9dbaff",d=ht("defs",{},n),f=(H,O)=>{let tt=ht("marker",{id:`${t}-${H}`,viewBox:"0 0 10 10",refX:8,refY:5,markerUnits:"userSpaceOnUse",markerWidth:13,markerHeight:13,orient:"auto-start-reverse"},d);ht("path",{d:"M0 0L10 5L0 10Z",fill:O},tt)};f("slide",c),f("move",u),f("move-lower",h);let g=H=>{let O=ht("g",{},n);return ht("path",{d:`M-20 ${-o*.3}C-45 ${-o*.3} -55 30 -72 32`,fill:"none",stroke:H,"stroke-width":12,"stroke-linecap":"round"},O),ht("ellipse",{cx:-100,cy:34,rx:30,ry:20,fill:"none",stroke:H,"stroke-width":9},O),ht("path",{d:`M-24 ${r}L${s} ${r}Q${s*.82} ${-o} ${s*.5} ${-o}L-24 ${-o}Z`,fill:H,stroke:"#04070d","stroke-width":1.5,"stroke-linejoin":"round"},O),O},x=[0,1].map(()=>ht("line",{stroke:"rgb(238 243 251 / 75%)","stroke-width":2.5,"stroke-dasharray":"8 8"},n)),m=g(u),p=g(h);ht("circle",{cx:e,cy:i,r:6,fill:"#1a2335",stroke:c,"stroke-width":2},n);let E=ht("g",{},n),M=ht("circle",{r:10,fill:"none",stroke:c,"stroke-width":2.5,"stroke-dasharray":"5 5"},E),_=[0,1].map(()=>ht("line",{stroke:"rgb(238 243 251 / 55%)","stroke-width":1.5},E)),L=ht("line",{stroke:c,"stroke-width":4,"marker-end":`url(#${t}-slide)`},E),T=ve(E,0,0,"long slide",{fill:c,"font-size":25,"font-weight":700,"text-anchor":"middle"}),A=[u,h].map((H,O)=>ht("line",{stroke:H,"stroke-width":4,"marker-end":`url(#${t}-${O?"move-lower":"move"})`},E)),P=ve(E,0,0,"small moves",{fill:c,"font-size":25,"font-weight":700,"text-anchor":"end"}),b=ht("circle",{r:10,fill:c,stroke:"#04070d","stroke-width":2.5},n),y=H=>Math.asin(r/H),R=(H,O)=>({x:e+s*Math.cos(H)+r*Math.sin(H),y:i+O*(s*Math.sin(H)-r*Math.cos(H))}),k=y(a),U={x:e+a,y:i};M.setAttribute("cx",U.x.toFixed(1)),M.setAttribute("cy",U.y.toFixed(1)),x.forEach((H,O)=>{let tt=O?-1:1,G=R(k,tt);H.setAttribute("x1",(e+r*Math.sin(k)).toFixed(1)),H.setAttribute("y1",(i-tt*r*Math.cos(k)).toFixed(1)),H.setAttribute("x2",G.x.toFixed(1)),H.setAttribute("y2",G.y.toFixed(1))});let z=i+60;return H=>{let O=Math.max(H.stretch,0)+$o*Xt(H.pressAmt,0,1.6),tt=Xt(O/.03,0,1),G=a+(l-a)*tt,it=y(G);m.setAttribute("transform",`translate(${e} ${i}) rotate(${on(it).toFixed(2)}) scale(1 -1)`),p.setAttribute("transform",`translate(${e} ${i}) rotate(${(-on(it)).toFixed(2)})`);let rt={x:e+G,y:i};b.setAttribute("cx",rt.x.toFixed(1)),b.setAttribute("cy",rt.y.toFixed(1));let ut=Xt(O/.004,0,1);E.setAttribute("opacity",ut.toFixed(3));for(let Pt of x)Pt.setAttribute("opacity",ut.toFixed(3));[U,rt].forEach((Pt,Ht)=>{_[Ht].setAttribute("x1",Pt.x.toFixed(1)),_[Ht].setAttribute("y1",(Pt.y+13).toFixed(1)),_[Ht].setAttribute("x2",Pt.x.toFixed(1)),_[Ht].setAttribute("y2",(z+8).toFixed(1))}),L.setAttribute("x1",U.x.toFixed(1)),L.setAttribute("y1",z),L.setAttribute("x2",Math.max(U.x+1,rt.x).toFixed(1)),L.setAttribute("y2",z),T.setAttribute("x",((U.x+Math.max(rt.x,U.x+140))/2).toFixed(1)),T.setAttribute("y",z+34),A.forEach((Pt,Ht)=>{let X=Ht?-1:1,nt=R(k,X),pt=R(it,X);Pt.setAttribute("x1",(nt.x+14).toFixed(1)),Pt.setAttribute("y1",nt.y.toFixed(1)),Pt.setAttribute("x2",(nt.x+14).toFixed(1)),Pt.setAttribute("y2",(X>0?Math.min(nt.y-1,pt.y):Math.max(nt.y+1,pt.y)).toFixed(1))}),P.setAttribute("x",(R(k,1).x+24).toFixed(1)),P.setAttribute("y",i-34)}},dentView(n){for(let u of[18,484])ht("rect",{x:u,y:88,width:22,height:60,rx:5,fill:"#1a2335",stroke:"rgb(238 243 251 / 35%)","stroke-width":1.5},n);let a=ht("path",{fill:"rgb(157 186 255 / 14%)",stroke:"rgb(238 243 251 / 40%)","stroke-width":1.5},n),l=Array.from({length:24},()=>ht("line",{stroke:"#9dbaff","stroke-width":3,"stroke-linecap":"round"},n)),c=Array.from({length:24},()=>ht("line",{stroke:"#d9f272","stroke-width":3,"stroke-linecap":"round"},n)),h=ht("rect",{width:18,rx:9,fill:"#c9d4e6"},n);return u=>{let d=Xt(u.pressAmt,0,1.6),f=528/2+Xt(u.pressX,-.8,.8)*(440/2),g=3*d,x=_=>{let L=Xt(2*(_-44)/440-1,-1,1);return 118+g*Math.exp(-(((_-f)/36)**2))*(1-L*L)},m=(_,L)=>{let T=x(_),A=(x(_+1)-x(_-1))/2,P=Math.hypot(1,A);return{x:_+A/P*L,y:T-L/P}},p="",E="";for(let _=44;_<=484+.01;_+=5){let L=m(_,11),T=m(_,-11);p+=`${p?"L":"M"}${L.x.toFixed(1)} ${L.y.toFixed(1)}`,E=`L${T.x.toFixed(1)} ${T.y.toFixed(1)}`+E}a.setAttribute("d",`${p}${E}Z`);for(let _=0;_<24;_+=1){let L=44+(_+.5)/24*440,[T,A]=[m(L,11),m(L,22)],[P,b]=[m(L,-11),m(L,-22)];for(let[y,R,k]of[[l[_],T,A],[c[_],P,b]])y.setAttribute("x1",R.x.toFixed(1)),y.setAttribute("y1",R.y.toFixed(1)),y.setAttribute("x2",k.x.toFixed(1)),y.setAttribute("y2",k.y.toFixed(1))}let M=m(f,11).y;h.setAttribute("x",(f-9).toFixed(1)),h.setAttribute("y",(M-96).toFixed(1)),h.setAttribute("height","96"),h.setAttribute("opacity",Xt(d*3,0,1).toFixed(3))}},gelsight(n){let a="#ff8573",l="#7fe3a1",c=ht("defs",{},n),h=(U,z)=>{let H=ht("radialGradient",{id:U},c);ht("stop",{offset:"0%","stop-color":z,"stop-opacity":.9},H),ht("stop",{offset:"100%","stop-color":z,"stop-opacity":0},H)};h("gel-red",a),h("gel-green",l);let u=ht("linearGradient",{id:"gel-bump",x1:"0",y1:"0",x2:"1",y2:"0"},c);ht("stop",{offset:"0%","stop-color":a},u),ht("stop",{offset:"46%","stop-color":"#1a2238"},u),ht("stop",{offset:"54%","stop-color":"#1a2238"},u),ht("stop",{offset:"100%","stop-color":l},u),ht("rect",{x:80,y:300,width:620,height:230,fill:"rgb(11 19 38 / 55%)",stroke:"rgb(238 243 251 / 28%)","stroke-width":2},n),ht("path",{d:"M390 500 120 300M390 500 660 300",fill:"none",stroke:"rgb(238 243 251 / 35%)","stroke-width":2,"stroke-dasharray":"7 9"},n),ht("rect",{x:350,y:498,width:80,height:44,rx:7,fill:"#3b4863",stroke:"rgb(238 243 251 / 70%)","stroke-width":2},n),ht("circle",{cx:390,cy:498,r:14,fill:"#0f1830",stroke:"#86adff","stroke-width":3.5},n),ht("rect",{x:80,y:194,width:620,height:106,fill:"rgb(134 173 255 / 10%)",stroke:"rgb(238 243 251 / 55%)","stroke-width":2},n);let d=154,f=626,g=452;ht("ellipse",{cx:d+30,cy:g-40,rx:150,ry:110,fill:"url(#gel-red)",opacity:.4},n),ht("ellipse",{cx:f-30,cy:g-40,rx:150,ry:110,fill:"url(#gel-green)",opacity:.4},n);let x=ht("g",{fill:"none","stroke-width":3,"stroke-dasharray":"8 9","stroke-linecap":"round"},n),m=ht("path",{stroke:a},x),p=ht("path",{stroke:l},x);ht("rect",{x:d-22,y:g-14,width:44,height:28,rx:6,fill:a,transform:`rotate(-38 ${d} ${g})`},n),ht("rect",{x:f-22,y:g-14,width:44,height:28,rx:6,fill:l,transform:`rotate(38 ${f} ${g})`},n);let E=ht("path",{fill:"#2c3857",stroke:"rgb(238 243 251 / 30%)","stroke-width":1.5},n),M=ht("path",{fill:"none",stroke:"#eef3fb","stroke-width":4,"stroke-linecap":"round"},n),_=ht("path",{fill:"none",stroke:a,"stroke-width":7,"stroke-linecap":"round"},n),L=ht("path",{fill:"none",stroke:l,"stroke-width":7,"stroke-linecap":"round"},n),T=ht("ellipse",{cx:390,fill:"#c9d4e6"},n),A={fill:"#ffffff","font-size":32,"font-weight":750},P={fill:"none",stroke:"rgb(238 243 251 / 55%)","stroke-width":2};ht("path",{d:"M704 172H750",...P},n),ve(n,764,183,"Gel",A),ht("path",{d:`M${f+28} ${g}H750`,...P},n),ve(n,764,g+11,"Structured light",A),ht("path",{d:"M346 520H294",...P},n),ve(n,280,531,"Camera",{...A,"text-anchor":"end"});let b=1100,y=300;ht("circle",{cx:b,cy:y,r:112,fill:"#0b1326",stroke:"rgb(238 243 251 / 60%)","stroke-width":2.5},n);let R=ht("ellipse",{cx:b,cy:y,rx:52,ry:52,fill:"url(#gel-bump)"},n);ht("path",{d:`M434 520H${b-44}Q${b} 520 ${b} 476V${y+116}`,fill:"none",stroke:"rgb(238 243 251 / 35%)","stroke-width":2,"stroke-dasharray":"7 9"},n),ve(n,b,y-130,"Camera view",{...A,"font-size":28,"text-anchor":"middle"});let k=[{rx:46,ry:46,dent:28,half:78,seen:56},{rx:26,ry:12,dent:3,half:44,seen:24}];return U=>{let z=Xt(U.pressAmt/1.3,0,1),H=(U.demo??0)>=.5,O=k[H?1:0],tt=54+(96+O.dent)*z,G=Math.max(0,tt-150),it=G/28,rt=X=>150+G*Math.exp(-(((X-390)/(O.half*.62))**2)),ut="";for(let X=80;X<=700;X+=6)ut+=`${X===80?"M":"L"}${X} ${rt(X).toFixed(1)}`;E.setAttribute("d",`${ut}L700 194L80 194Z`),M.setAttribute("d",ut);let Pt=(X,nt)=>{let pt="";for(let ot=X;ot<=nt;ot+=4)pt+=`${ot===X?"M":"L"}${ot} ${rt(ot).toFixed(1)}`;return pt};_.setAttribute("d",Pt(390-O.half,384)),L.setAttribute("d",Pt(396,390+O.half)),_.setAttribute("opacity",it),L.setAttribute("opacity",it),T.setAttribute("rx",O.rx),T.setAttribute("ry",O.ry),T.setAttribute("cy",tt-O.ry),T.setAttribute("opacity",H?Xt(z*6,0,1):1);let Ht=Math.min(40,O.half*.6);m.setAttribute("d",`M${d+16} ${g-14}L${390-Ht} ${(rt(390-Ht)+6).toFixed(1)}`),p.setAttribute("d",`M${f-16} ${g-14}L${390+Ht} ${(rt(390+Ht)+6).toFixed(1)}`),x.setAttribute("opacity",.3+.6*it),R.setAttribute("opacity",it),R.setAttribute("rx",O.seen*(.55+.45*G/O.dent)),R.setAttribute("ry",O.seen*(.55+.45*G/O.dent))}},forceBars(n){let t=[["GelSight",1.9],["Soft-Bubble",.8],["DenseTact 2.0",.41],["9DTact",.307],["Moir\xE9Tac",.25],["GelSlim 4.0",.04],["Insight",.03],["ViTacTip",.01],["Moir\xE9Skin",.0038]].map(([s,r])=>({name:s,v:r,ours:s==="Moir\xE9Skin"})),e=196,i=s=>Math.log10(s/.001)/Math.log10(3/.001)*520;ve(n,e,18,"NORMAL FORCE ERROR, LOG SCALE (N)",{"letter-spacing":2,fill:"#c6d0de"});for(let s of[.001,.01,.1,1]){let r=e+i(s);ht("line",{x1:r,y1:40,x2:r,y2:452,stroke:"rgb(238 243 251 / 10%)"},n),ve(n,r,478,String(s),{"text-anchor":"middle"})}return t.forEach((s,r)=>{let o=46+r*45,a=Math.max(4,i(s.v));ht("rect",{x:e,y:o,width:a,height:26,rx:5,fill:s.ours?"url(#grad-ink)":"#4a5569",class:"grow",style:`--i:${r}`},n),ve(n,e-16,o+20,s.name,{"text-anchor":"end",fill:s.ours?"url(#grad-ink)":"#dce4ee","font-weight":s.ours?760:600,"font-size":s.ours?28:26}),ve(n,e+a+12,o+20,String(s.v),{fill:s.ours?"#eef3fb":"#c6d0de","font-weight":s.ours?750:600})}),null}};function S_(n,t=340){let e=document.createElement("canvas");e.width=t,e.height=t;let i=e.getContext("2d"),s=i.createImageData(t,t),r=6.31*Math.PI/180,o=1.12,a=.33/15,l=n==="post"?{x:.22,y:.16,r:.45,stretch:-.08,twist:.02}:null;for(let c=0;c<t;c+=1)for(let h=0;h<t;h+=1){let u=(h+.5)/t*2-1,d=1-(c+.5)/t*2,f=u,g=d;if(l){let _=u-l.x,L=d-l.y,T=Math.exp(-(_*_+L*L)/(l.r*l.r)),A=1+l.stretch*T,P=-l.twist*T;f=l.x+(Math.cos(P)*_-Math.sin(P)*L)/A,g=l.y+(Math.sin(P)*_+Math.cos(P)*L)/A}let x=(u*Math.cos(o)+d*Math.sin(o))/a,m=(f*Math.cos(o+r)+g*Math.sin(o+r))/a,p=((x-m)%1+1)%1,E=(1-Math.abs(2*p-1))*(1-.3*(u*u+d*d)),M=(c*t+h)*4;s.data[M]=8+207*E,s.data[M+1]=16+226*E,s.data[M+2]=36+78*E,s.data[M+3]=255}return i.putImageData(s,0,0),e.toDataURL("image/png")}for(let n of document.querySelectorAll("image[data-fringe]"))n.setAttribute("href",S_(n.dataset.fringe));var Xu={axis:{stroke:"rgb(238 243 251 / 55%)",fill:"rgb(238 243 251 / 9%)"},rigid:{stroke:"#ffbe7d",fill:"rgb(255 190 125 / 16%)",glow:"#ffbe7d"},soft:{stroke:"#7da6ff",fill:"rgb(125 166 255 / 18%)",glow:"#7da6ff"}};function od(){for(let n of document.querySelectorAll("text[data-pill]")){n.previousElementSibling?.classList.contains("pill")&&n.previousElementSibling.remove();let t=Xu[n.dataset.pill]??Xu.axis,e=n.getBBox(),i={x:e.x-15,y:e.y-5,width:e.width+30,height:e.height+10,rx:(e.height+10)/2},s=ht("g",{class:"pill"});t.glow&&(ht("rect",{...i,fill:t.glow,opacity:.5,filter:"url(#pill-glow)"},s),ht("rect",{...i,fill:"#0a1222"},s)),ht("rect",{...i,fill:t.fill,stroke:t.stroke,"stroke-width":2},s),n.parentNode.insertBefore(s,n)}}od();document.fonts?.ready.then(od);var ad=[];for(let n of document.querySelectorAll("[data-widget]")){let t=M_[n.dataset.widget],e=t?.(n);e&&ad.push({root:n,update:e})}function b_(n){let t=[...n.el.querySelectorAll(".callout")].map(s=>{let r=s.dataset.side==="left"?"left":"right",o=Ee.project(Ee.anchor(s.dataset.anchor,r));return{el:s,side:r,anchor:o,y:o.y,w:s.offsetWidth,h:s.offsetHeight||56,opacity:Number(getComputedStyle(s).opacity)}}),e=[];for(let s of["left","right"]){let r=t.filter(a=>a.side===s);for(let a=1;a<r.length;a+=1){let l=r[a-1].y+(r[a-1].h+r[a].h)/2+18;r[a].y=Math.max(r[a].y,l)}let o=s==="left"?-1:1;for(let a of r){let l=Number(a.el.dataset.x),c=s==="left"?l-a.w:l;a.el.style.transform=`translate(${c.toFixed(1)}px, ${(a.y-a.h/2).toFixed(1)}px)`,a.opacity>.01&&e.push(`<g opacity="${a.opacity.toFixed(3)}"><polyline points="${a.anchor.x.toFixed(1)},${a.anchor.y.toFixed(1)} ${(l-o*44).toFixed(1)},${a.y.toFixed(1)} ${(l-o*16).toFixed(1)},${a.y.toFixed(1)}" fill="none" stroke="rgb(238 243 251 / 45%)" stroke-width="1.5"/><circle cx="${a.anchor.x.toFixed(1)}" cy="${a.anchor.y.toFixed(1)}" r="5" fill="#d9f272"/></g>`)}}let i=t.filter(s=>s.el.dataset.group&&s.side==="right");if(i.length){let s=Math.max(...i.map(r=>Number(r.el.dataset.x)+r.w))+20;for(let r of new Set(i.map(o=>o.el.dataset.group))){let o=i.filter(x=>x.el.dataset.group===r),a=Math.max(...o.map(x=>x.opacity));if(a<=.01)continue;let l=Math.min(...o.map(x=>x.y-x.h/2))+4,c=Math.max(...o.map(x=>x.y+x.h/2))-4,h=(l+c)/2,u=o[0].el.dataset.groupColor??"#eef3fb",d=rn(r).split("|"),f=Math.min(12,(c-l)/4),g=`M${s} ${l}C${s+9} ${l} ${s+9} ${l} ${s+9} ${l+f}L${s+9} ${h-f}C${s+9} ${h} ${s+9} ${h} ${s+18} ${h}C${s+9} ${h} ${s+9} ${h} ${s+9} ${h+f}L${s+9} ${c-f}C${s+9} ${c} ${s+9} ${c} ${s} ${c}`;e.push(`<g opacity="${a.toFixed(3)}"><path d="${g}" fill="none" stroke="${u}" stroke-width="2.5" stroke-linecap="round"/><text fill="${u}" font-size="28" font-weight="760">${d.map((x,m)=>`<tspan x="${s+30}" y="${(h+10+(m-(d.length-1)/2)*32).toFixed(1)}">${x}</tspan>`).join("")}</text></g>`)}}return e.join("")}function w_(n){let t=Math.max(n.calib,Xt(n.zones,0,1));if(t<.01||n.visible<.01)return"";let{roi:e,periphery:i}=Rs(n),s=(h,u)=>Ee.project(Ee.membranePoint(h,u)),r=(h,u,d)=>{let f=s(Math.cos(h)*u,Math.sin(h)*u),g=s(Math.cos(h)*d,Math.sin(h)*d);return`${f.x.toFixed(1)},${f.y.toFixed(1)} ${g.x.toFixed(1)},${g.y.toFixed(1)}`},o="";for(let h=0;h<=72;h+=1){let u=h/72*Math.PI*2,d=s(Math.cos(u)*.6,Math.sin(u)*.6);o+=`${d.x.toFixed(1)},${d.y.toFixed(1)} `}let a=(h,u,d)=>`<text x="${h.x.toFixed(1)}" y="${h.y.toFixed(1)}" fill="${d}" font-size="29" font-weight="760" text-anchor="middle" paint-order="stroke" stroke="#04070d" stroke-width="6">${rn(u)}</text>`,l=t.toFixed(3),c=Xt(n.rim??1,0,1).toFixed(3);return`<g opacity="${l}">
    <polyline points="${r(e,-.56,.56)}" stroke="#d9f272" stroke-width="5" stroke-linecap="round"/>
    ${a(s(-.22,-.2),"centre","#d9f272")}
    <g opacity="${c}">
      <polyline points="${o}" fill="none" stroke="rgb(238 243 251 / 45%)" stroke-width="1.5" stroke-dasharray="6 8"/>
      <polyline points="${r(i,.64,.97)}" stroke="#eef3fb" stroke-width="5" stroke-linecap="round"/>
      <polyline points="${r(i,-.64,-.97)}" stroke="#eef3fb" stroke-width="5" stroke-linecap="round"/>
      ${a(s(Math.cos(i+Math.PI)*.8-.16,Math.sin(i+Math.PI)*.8),"rim","#eef3fb")}
    </g>
  </g>`}var E_=.11,T_={both:0,upper:1,lower:2},A_=[0,1,2].map(()=>{let n=document.createElement("div");n.className="lens";let t=document.createElement("canvas");n.appendChild(t);let e=document.createElement("span");return e.className="lens-label",n.appendChild(e),Ic.insertBefore(n,document.getElementById("slides")),{el:n,label:e,view:Ee.createLens(t),target:null,px:0,r:0}}),Cc=[];function C_(n,t){if(n.at==="lower")return{u:-t.apart,v:0};if(n.at==="upper")return{u:t.apart,v:0};if(n.at==="follow"){let[e,i]=n.offset??[0,0],s=!me&&ge.inside?Ko(ge.x,ge.y):null;return s?{u:s.u+e,v:s.v+i}:t.pressAmt>.05?{u:t.pressX+e,v:t.pressY+i}:{u:n.home[0],v:n.home[1]}}return{u:n.at[0],v:n.at[1]}}function R_(n,t,e){Cc=Iu(n)??Cc;let i=t.lens*t.visible,s="";return A_.forEach((r,o)=>{let a=Cc[o];if(!a||i<.01){r.el.style.visibility="hidden";return}r.el.style.visibility=a.hollow?"hidden":"visible",r.el.style.opacity=i.toFixed(3);let l=C_(a,t);if(!r.target||me)r.target={...l};else{let T=1-Math.exp(-e*9);r.target.u+=(l.u-r.target.u)*T,r.target.v+=(l.v-r.target.v)*T,Math.abs(l.u-r.target.u)+Math.abs(l.v-r.target.v)<1e-5&&(r.target={...l})}let c=a.span??E_;r.label.textContent=rn(a.label??"Lens \xB7 3 mm"),r.label.classList.toggle("sim",!!a.sim);let h=Ee.project(Ee.membranePoint(r.target.u,r.target.v)),u=Ee.project(Ee.membranePoint(r.target.u+c,r.target.v)),d=Math.hypot(u.x-h.x,u.y-h.y),f=o===0&&t.lensX!==void 0,g=f?t.lensR:a.r,x=f?t.lensX:a.x??h.x,m=f?t.lensY:a.y??h.y,p=Math.round(2*g*Xt($e*(window.devicePixelRatio||1),1,2));(p!==r.px||Math.abs(g-r.r)>.5)&&(r.el.style.width=`${2*g}px`,r.el.style.height=`${2*g}px`,r.view.setSize(p),r.px=p,r.r=g),r.el.style.transform=`translate(${(x-g).toFixed(1)}px, ${(m-g).toFixed(1)}px)`;let E=`${r.target.u.toFixed(5)},${r.target.v.toFixed(5)},${c},${a.mode},${p},${qo}`;!a.hollow&&(me||E!==r.key)&&(r.view.render(r.target.u,r.target.v,c,T_[a.mode]??0),r.key=E);let M=x-h.x,_=m-h.y,L=Math.hypot(M,_);if(!a.plain&&L>g+d+8){let T=M/L,A=_/L;s+=`<g opacity="${i.toFixed(3)}" fill="none" stroke="rgb(238 243 251 / 75%)" stroke-width="2">
        <circle cx="${h.x.toFixed(1)}" cy="${h.y.toFixed(1)}" r="${d.toFixed(1)}"/>
        <line x1="${(h.x+T*d).toFixed(1)}" y1="${(h.y+A*d).toFixed(1)}" x2="${(x-T*g).toFixed(1)}" y2="${(m-A*g).toFixed(1)}" stroke-width="1.5"/>
      </g>`}}),s}var P_=-on(jn(ur.alpha*Math.PI/180,0));for(let n of document.querySelectorAll("video[data-fringe]")){let t=((P_-Number(n.dataset.fringe)+90)%180+180)%180-90;n.style.transform=`rotate(${t.toFixed(1)}deg)`,n.dataset.turn=t.toFixed(1)}var Rc=.985;function I_(n){for(let t of n.el.querySelectorAll(".real-cover")){let e=Ee.project(Ee.membranePoint(0,0)),i=Ee.project(Ee.membranePoint(Rc,0)),s=Math.hypot(i.x-e.x,i.y-e.y),r=`${e.x.toFixed(1)} ${e.y.toFixed(1)} ${s.toFixed(1)}`;t.dataset.at!==r&&(t.dataset.at=r,t.style.left=`${(e.x-s).toFixed(1)}px`,t.style.top=`${(e.y-s).toFixed(1)}px`,t.style.width=`${(2*s).toFixed(1)}px`,t.style.height=`${(2*s).toFixed(1)}px`)}}function L_(n,t,e,i){let s=[...n.el.querySelectorAll(".real-cover video[data-track], .real video[data-track][data-lead]")].find(u=>Yi(u.closest(".real-cover, .real"),Zt.step)),r=s?.dataset.track;if(!r)return t;let o=s.hasAttribute("data-lead"),a=me?o?i%Ho[r].seconds:Ho[r].still:s.currentTime,l=Du(r,a);if(!l)return t;let c={...t},h=(u,d)=>{c[u]=t[u]+(d-t[u])*e};if(l.inflate!==void 0&&h("inflate",l.inflate),l.amt!==void 0){let u=Number(s.dataset.turn??0)*Math.PI/180;h("pressX",Rc*(l.x*Math.cos(u)-l.y*Math.sin(u))),h("pressY",-Rc*(l.x*Math.sin(u)+l.y*Math.cos(u))),h("pressAmt",l.amt)}return c}var Wo=new Map;function D_(n){if(!me)for(let t of n.el.querySelectorAll("video[data-follow]")){let e=n.el.querySelector(t.dataset.follow);e&&!t.paused&&!e.paused&&Math.abs(t.currentTime-e.currentTime)>.12&&(t.currentTime=e.currentTime)}for(let t of n.el.querySelectorAll("[data-video-steps]")){let e=n.el.querySelector(t.dataset.videoSteps),i=Wo.get(t);if(e&&i){let r=Number(i.dataset.from),o=Math.min(Number(i.dataset.to),e.duration||1/0);(e.currentTime<r||e.currentTime>=o-.05)&&(e.currentTime=r)}let s=e?e.currentTime:0;for(let r of t.querySelectorAll("[data-from]")){let o=s>=Number(r.dataset.from)&&s<Number(r.dataset.to);r.classList.toggle("current",o)}}}if(!me)for(let n of document.querySelectorAll("[data-video-steps][data-hover-loop]")){let t=n.closest("section.slide")?.querySelector(n.dataset.videoSteps);for(let e of n.querySelectorAll("[data-from]"))e.addEventListener("pointerenter",()=>{Wo.set(n,e),t&&(t.currentTime=Number(e.dataset.from),t.play().catch(()=>{}))}),e.addEventListener("pointerleave",()=>{Wo.get(n)===e&&Wo.delete(n)})}var $u=4,Qe={start:0,active:-1,weights:{glow:0,see:0}};function U_(n){return me||!ge.inside?-1:n.findIndex(t=>{let e=t.getBoundingClientRect(),i=(e.left-ni.x)/$e,s=(e.top-ni.y)/$e;return ge.x>=i&&ge.x<=i+e.width/$e&&ge.y>=s&&ge.y<=s+e.height/$e})}function F_(n,t,e,i){let s=[...n.el.querySelectorAll("[data-feature]")];if(!s.length)return Qe.weights.glow=0,Qe.weights.see=0,t;let r=U_(s);r>=0&&(Qe.start=qe()-r*$u);let o=me?i:qe()-Qe.start,a=r>=0?r:Math.floor(o/$u)%s.length;a!==Qe.active&&(s.forEach((g,x)=>g.classList.toggle("active",x===a)),Qe.active=a);let l=s[a].dataset.feature,c=1-Math.exp(-e*5);for(let g of["glow","see"]){let x=l===g?1:0;Qe.weights[g]+=(x-Qe.weights[g])*c,Math.abs(x-Qe.weights[g])<1e-4&&(Qe.weights[g]=x)}let h=Qe.weights.glow,u=Qe.weights.see,d=qe(),f=1.35+.35*(.5+.5*Math.sin(d*Ku));return{...t,el:t.el+(.55-t.el)*h+(.16-t.el)*u,glow:t.glow+(f-t.glow)*h+(.8-t.glow)*u,bloom:t.bloom+(.95-t.bloom)*h}}function N_(){let{glow:n,see:t}=Qe.weights;if(n<.01&&t<.01)return"";let e=(r,o,a)=>Ee.project(Ee.point(r,o,a)),i=(-(qe()*60)%36).toFixed(1),s="";if(n>.01){let r=.6+.4*(.5+.5*Math.sin(qe()*Ku)),o="",a="";for(let l=0;l<12;l+=1){let c=l/12*Math.PI*2;if(Math.sin(c+.5)<.15)continue;let h=e(Math.cos(c)*.42,-.53,Math.sin(c)*.42);o+=`<circle cx="${h.x.toFixed(1)}" cy="${h.y.toFixed(1)}" r="16" fill="url(#led-glow)"/>`}for(let l of[-.2,.35,.9,1.45,2]){let c=e(Math.cos(l)*.62,-.5,Math.sin(l)*.62),h=e(Math.cos(l)*.62,-.04,Math.sin(l)*.62);a+=`<line x1="${c.x.toFixed(1)}" y1="${c.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}"/>`}s+=`<g opacity="${(n*r).toFixed(3)}">
      <defs><radialGradient id="led-glow"><stop offset="0" stop-color="#e3ecff"/><stop offset="0.35" stop-color="#86adff" stop-opacity="0.85"/><stop offset="1" stop-color="#86adff" stop-opacity="0"/></radialGradient></defs>
      ${o}
      <g fill="none" stroke="#86aaff" stroke-width="3" stroke-dasharray="9 9" stroke-dashoffset="${i}" stroke-linecap="round">${a}</g>
    </g>`}if(t>.01){let r=e(0,.95,0),o=e(.16,.95,0),a=Math.max(8,Math.hypot(o.x-r.x,o.y-r.y)),l=e(0,-.41,0),c="";for(let u of[-.9,-.45,0,.45,.9]){let d=r.x+a*Math.sin(u),f=r.y+a*Math.cos(u);c+=`<line x1="${d.toFixed(1)}" y1="${f.toFixed(1)}" x2="${l.x.toFixed(1)}" y2="${l.y.toFixed(1)}"/>`}let h=`${(r.x-a).toFixed(1)},${r.y.toFixed(1)} ${(r.x+a).toFixed(1)},${r.y.toFixed(1)} ${l.x.toFixed(1)},${l.y.toFixed(1)}`;s+=`<g opacity="${t.toFixed(3)}">
      <defs>
        <linearGradient id="see-cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe7a3" stop-opacity="0.32"/><stop offset="1" stop-color="#ffe7a3" stop-opacity="0.08"/></linearGradient>
        <radialGradient id="berry-fill" cx="0.35" cy="0.35"><stop offset="0" stop-color="#ff8a8a"/><stop offset="0.6" stop-color="#e8434f"/><stop offset="1" stop-color="#a3202d"/></radialGradient>
      </defs>
      <polygon points="${h}" fill="url(#see-cone)"/>
      <g fill="none" stroke="#ffe7a3" stroke-width="2.5" stroke-dasharray="10 8" stroke-dashoffset="${i}" stroke-linecap="round">${c}</g>
      <circle cx="${r.x.toFixed(1)}" cy="${r.y.toFixed(1)}" r="${a.toFixed(1)}" fill="url(#berry-fill)"/>
      <path d="M${(r.x-a*.5).toFixed(1)} ${(r.y-a*.85).toFixed(1)} Q${r.x.toFixed(1)} ${(r.y-a*1.5).toFixed(1)} ${(r.x+a*.5).toFixed(1)} ${(r.y-a*.85).toFixed(1)}" fill="#6fcf6a"/>
      <circle cx="${l.x.toFixed(1)}" cy="${l.y.toFixed(1)}" r="7" fill="#fff3c4"/>
    </g>`}return s}var qu=qe(),Yu=new Map,qo="",Zu="";function Yo(){let n=qe(),t=Xt(n-qu,0,.1);qu=n;let e=he[Zt.slide],i=ei(e,Zt.step),s=n-$i,r=!me&&n<Mn.until;Mn.weight+=((r?0:1)-Mn.weight)*(1-Math.exp(-t*5)),Math.abs((r?0:1)-Mn.weight)<1e-4&&(Mn.weight=r?0:1),r||(Mn.clock+=t);let o=Ps(i,me?s:Mn.clock);if(kn>0&&s<kn){let h=Xt(s/kn,0,1),u=Vo(h),d=Vo(Xt(h/a_,0,1)),f=Vo(Xt((h-Fu)/(1-Fu),0,1)),g=o.probe<Ln.probe,x={...o};for(let m of Object.keys(o))if(typeof o[m]=="number"&&typeof Ln[m]=="number"){let p=u;o_.has(m)&&o[m]!==Ln[m]?p=o[m]<Ln[m]?d:f:m==="pressAmt"&&g&&(p=d),x[m]=Ln[m]+(o[m]-Ln[m])*p}o=x}o=F_(e,o,t,s),me||(o.pressAmt*=Mn.weight,o=g_(o,i),Pu(i)?o=p_(o,t):Sc(i)&&(o=f_(o,t)),Lu(i)&&(o=x_(o,t))),o=L_(e,o,kn>0?Vo(Xt(s/kn,0,1)):1,s),pr=o;let a=JSON.stringify(o);(me||a!==qo)&&(Ee.applyState(o),Ee.render(),qo=a),Dn&&n>=Dn.until&&(Dn.slide!==he[Zt.slide]&&(Dn.slide.el.classList.remove("is-active"),nd(Dn.slide)),Dn=null);for(let[h,u]of Lc){let d=Xt((n-u.start)/1.4,0,1),f=1-Math.pow(1-d,3);h.textContent=(u.to*f).toFixed(u.decimals)}let l=__(o);for(let h of e.el.querySelectorAll("[data-readout]")){let u=h.closest("[data-step], .r");if(u&&!Yi(u,Zt.step))continue;let d=l[h.dataset.readout];d!==void 0&&Yu.get(h)!==d&&(h.textContent=d,Yu.set(h,d))}for(let{root:h,update:u}of ad)e.el.contains(h)&&u(o);D_(e),I_(e);let c=b_(e)+w_(o)+v_(o)+N_()+R_(i,o,t);c!==Zu&&(s_.innerHTML=c,Zu=c)}function ld(){Yo(),requestAnimationFrame(ld)}function cd(){let n=me?Xe:window.innerWidth,t=me?He:window.innerHeight;$e=Math.min(n/Xe,t/He),ni={x:(n-Xe*$e)/2,y:(t-He*$e)/2},Ic.style.transform=`translate(${ni.x}px, ${ni.y}px) scale(${$e})`;let e=me?1:Math.min(window.devicePixelRatio||1,2);qo="";let i=Math.min(3840,Xe*$e*e);Ee.setSize(i,i*He/Xe)}var fr=null;function O_(){let n=he[Zt.slide],t=he[Zt.slide+1],e=n.stepNotes!==null,i=o=>n.stepTitles[o]??`Step ${o+1}`,s=he.slice(0,Zt.slide).reduce((o,a)=>o+a.duration,0),r=n.stepDurations?n.stepDurations.slice(0,Zt.step).reduce((o,a)=>o+a,0):0;return{type:"state",index:Zt.slide,step:Zt.step,steps:n.steps,total:he.length,title:e?`${n.title} \xB7 ${i(Zt.step)}`:n.title,notes:e?n.stepNotes[Zt.step]??"":n.notes,duration:n.stepDurations?.[Zt.step]??n.duration,next:e&&Zt.step+1<n.steps?i(Zt.step+1):t?t.title:"End",plannedStart:s+r,plan:he.map(o=>({title:o.title,duration:o.duration}))}}function hd(){fr&&!fr.closed&&fr.postMessage(O_(),"*")}function B_(){fr=window.open("presenter.html","moireskin-presenter","width=1200,height=760")}window.addEventListener("message",n=>{let t=n.data;!t||typeof t!="object"||(t.type==="hello"?(fr=n.source,hd()):t.type==="nav"&&(t.action==="next"&&Xo(),t.action==="prev"&&id(),t.action==="goto"&&fn(t.index,0)))});var Xi="",Ju=0;function z_(n){let t=n.key;["ArrowRight","ArrowDown","PageDown"," ","n"].includes(t)?(n.preventDefault(),(t===" "||Xi==="")&&Xo()):t==="Enter"?(n.preventDefault(),Xi?(fn(Number(Xi)-1,0),Xi=""):Xo()):["ArrowLeft","ArrowUp","PageUp","Backspace","p"].includes(t)?(n.preventDefault(),id()):t==="Home"?fn(0,0):t==="End"?fn(he.length-1,0):t==="f"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{}):t==="b"||t==="."?document.body.classList.toggle("blackout"):t==="s"?B_():/^[0-9]$/.test(t)?Xi=(Xi+t).slice(-2):t==="Escape"&&(Xi="")}function k_(){window.addEventListener("keydown",z_),window.addEventListener("resize",cd),window.addEventListener("wheel",m_,{passive:!1}),window.addEventListener("hashchange",()=>{let n=ud();fn(n.slide,n.step)}),window.addEventListener("pointermove",n=>{let t=Tc(n);ge.x=t.x,ge.y=t.y,ge.inside=!0,ge.moved=qe(),document.body.classList.remove("hide-cursor"),clearTimeout(Ju),Ju=setTimeout(()=>document.body.classList.add("hide-cursor"),2500)}),document.addEventListener("pointerleave",()=>{ge.inside=!1}),window.addEventListener("pointerdown",n=>{ge.down=!0;let t=Tc(n);ge.x=t.x,ge.y=t.y}),window.addEventListener("pointerup",()=>{ge.down=!1}),Ic.addEventListener("click",n=>{if(n.target.closest("a, video, button"))return;let t=ei(he[Zt.slide],Zt.step),e=Tc(n);Sc(t)&&Ko(e.x,e.y)||Xo()})}for(let n of document.querySelectorAll(".cse-logo img")){let t=()=>n.closest(".cse-logo").classList.add("has-file");n.complete&&n.naturalWidth>0?t():n.addEventListener("load",t)}function ud(){let[n,t]=decodeURIComponent(location.hash.slice(1)).split("."),e=he.findIndex(i=>i.id===n);return e>=0?{slide:e,step:Number(t||0)}:{slide:0,step:0}}function Pc(n){return[...n.el.querySelectorAll("[data-video-steps]")].map(t=>n.el.querySelector(t.dataset.videoSteps)).filter(Boolean)}function Zo(n,t){let e=n.closest("[data-step], .r");return!e||Yi(e,t)}function H_(n,t){return new Promise(e=>{let i=()=>{let s=Math.min(Math.max(0,t),n.duration-.001);if(n.dataset.exportSeeked==="1"&&Math.abs(n.currentTime-s)<5e-4){e();return}n.dataset.exportSeeked="1",n.addEventListener("seeked",()=>requestAnimationFrame(()=>e()),{once:!0}),n.currentTime=s};n.readyState>=1?i():n.addEventListener("loadedmetadata",i,{once:!0})})}function V_(){let n=he[Zt.slide],t=new Set(Pc(n));return[...n.el.querySelectorAll("video")].filter(e=>Zo(e,Zt.step)&&!t.has(e)).map(e=>{let i=e.getBoundingClientRect(),s=!!e.closest(".real.round"),r=s?2:0;return{src:e.getAttribute("src"),poster:e.getAttribute("poster"),round:s,x:(i.left-ni.x)/$e+r,y:(i.top-ni.y)/$e+r,w:i.width/$e-2*r,h:i.height/$e-2*r}})}window.__deck={info:()=>he.map(n=>({id:n.id,title:n.title,steps:n.steps,shots:n.shots,notes:n.notes,duration:n.duration})),enter(n,t,e){if(Go+=100,e){let i=Ps(ei(he[e.slide],e.step),e.at);fn(e.slide,e.step,{instant:!0,force:!0,from:i}),pr=i,fn(n,t,{from:i})}else fn(n,t,{from:dd(n,t),force:!0});return this.seek(0)},seek(n){Go=$i+n;for(let i of Ls){if(i.playState==="idle"){Ls.delete(i);continue}i.currentTime=Math.max(0,(Go-i.deckStart)*1e3)}let t=he[Zt.slide],e=Pc(t).filter(i=>Zo(i,Zt.step));return e.length?Promise.all(e.map(i=>H_(i,n%i.duration))).then(()=>Yo()):(Yo(),null)},clipSeconds:(n,t)=>{let e=he[n],i=kn;for(let o of Ls){if(o.playState==="idle"||o.deckStart<$i-1e-6)continue;let a=o.effect?.getComputedTiming();a&&Number.isFinite(a.endTime)&&(i=Math.max(i,o.deckStart-$i+a.endTime/1e3))}for(let[o,a]of Lc)e.el.contains(o)&&a.start>=$i-1e-6&&(i=Math.max(i,a.start-$i+1.4));let s=ei(e,t),r=Mc(s);return i=Math.max(i,r?r.from:Ru(s)),i+.25},loop:(n,t)=>{let e=he[n],i=Pc(e).filter(s=>Zo(s,t));return i.length?{from:0,period:Math.max(...i.map(s=>s.duration))}:Mc(ei(e,t))},media:V_};function dd(n,t){return{...Ps(ei(he[n],t),0),visible:0,size:380}}cd();if(me){for(let n of document.querySelectorAll("video"))n.preload="auto",n.load();he[0].el.classList.add("is-active"),Yo()}else{k_();let n=ud(),t=n.slide===0&&n.step===0;Ln=t?dd(0,0):Ps(ei(he[n.slide],n.step),0),pr=Ln,fn(n.slide,n.step,{instant:!t,force:!0,from:Ln}),ld()}})();
