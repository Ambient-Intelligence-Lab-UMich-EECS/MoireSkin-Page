(()=>{var nc="170";var vd=0,kc=1,yd=2;var Zh=1,Md=2,Zn=3,mi=0,rn=1,sn=2,zn=0,xs=1,Zr=2,Hc=3,Vc=4,bd=5,Pi=100,Sd=101,wd=102,Ed=103,Td=104,Ad=200,Cd=201,Rd=202,Pd=203,Fa=204,Na=205,Id=206,Ld=207,Dd=208,Ud=209,Fd=210,Nd=211,Od=212,Bd=213,zd=214,Oa=0,Ba=1,za=2,Ms=3,ka=4,Ha=5,Va=6,Ga=7,Jh=0,kd=1,Hd=2,pi=0,ic=1,sc=2,rc=3,oc=4,Vd=5,ac=6,lc=7;var Kh=300,bs=301,Ss=302,Wa=303,Xa=304,Eo=306,$a=1e3,Di=1001,qa=1002,Cn=1003,Gd=1004;var vr=1005;var Bn=1006,ia=1007;var Ui=1008;var jn=1009,Qh=1010,jh=1011,Js=1012,cc=1013,Fi=1014,Jn=1015,dn=1016,hc=1017,uc=1018,ws=1020,tu=35902,eu=1021,nu=1022,An=1023,iu=1024,su=1025,_s=1026,Es=1027,ru=1028,dc=1029,ou=1030,fc=1031;var pc=1033,Wr=33776,Xr=33777,$r=33778,qr=33779,Ya=35840,Za=35841,Ja=35842,Ka=35843,Qa=36196,ja=37492,tl=37496,el=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,Yr=36492,ml=36494,gl=36495,au=36283,xl=36284,_l=36285,vl=36286;var Jr=2300,yl=2301,sa=2302,Gc=2400,Wc=2401,Xc=2402;var Wd=3200,Xd=3201;var lu=0,$d=1,fi="",gn="srgb",Rs="srgb-linear",To="linear",ge="srgb";var ts=7680;var $c=519,qd=512,Yd=513,Zd=514,cu=515,Jd=516,Kd=517,Qd=518,jd=519,qc=35044;var Yc="300 es",Kn=2e3,Kr=2001,gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=1234567,Ws=Math.PI/180,Ks=180/Math.PI;function $i(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function ze(n,t,e){return Math.max(t,Math.min(e,n))}function mc(n,t){return(n%t+t)%t}function tf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ef(n,t,e){return n!==t?(e-n)/(t-n):0}function Xs(n,t,e){return(1-e)*n+e*t}function nf(n,t,e,i){return Xs(n,t,1-Math.exp(-e*i))}function sf(n,t=1){return t-Math.abs(mc(n,t*2)-t)}function rf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function of(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function af(n,t){return n+Math.floor(Math.random()*(t-n+1))}function lf(n,t){return n+Math.random()*(t-n)}function cf(n){return n*(.5-Math.random())}function hf(n){n!==void 0&&(Zc=n);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uf(n){return n*Ws}function df(n){return n*Ks}function ff(n){return(n&n-1)===0&&n!==0}function pf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gf(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ti={DEG2RAD:Ws,RAD2DEG:Ks,generateUUID:$i,clamp:ze,euclideanModulo:mc,mapLinear:tf,inverseLerp:ef,lerp:Xs,damp:nf,pingpong:sf,smoothstep:rf,smootherstep:of,randInt:af,randFloat:lf,randFloatSpread:cf,seededRandom:hf,degToRad:uf,radToDeg:df,isPowerOfTwo:ff,ceilPowerOfTwo:pf,floorPowerOfTwo:mf,setQuaternionFromProperEuler:gf,normalize:Je,denormalize:ps},tt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],E=s[1],M=s[4],_=s[7],L=s[2],A=s[5],C=s[8];return r[0]=o*x+a*E+l*L,r[3]=o*m+a*M+l*A,r[6]=o*p+a*_+l*C,r[1]=c*x+h*E+u*L,r[4]=c*m+h*M+u*A,r[7]=c*p+h*_+u*C,r[2]=d*x+f*E+g*L,r[5]=d*m+f*M+g*A,r[8]=d*p+f*_+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ra=new te;function hu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xf(){let n=Qr("canvas");return n.style.display="block",n}var Jc={};function Vs(n){n in Jc||(Jc[n]=!0,console.warn(n))}function _f(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function vf(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yf(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(n.r=Qn(n.r),n.g=Qn(n.g),n.b=Qn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(n.r=vs(n.r),n.g=vs(n.g),n.b=vs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===fi?To:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Kc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],jc=[.3127,.329],th=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[Rs]:{primaries:Kc,whitePoint:jc,transfer:To,toXYZ:th,fromXYZ:eh,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:Kc,whitePoint:jc,transfer:ge,toXYZ:th,fromXYZ:eh,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});var es,Ml=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=Qr("canvas")),es.width=t.width,es.height=t.height;let i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qn(e[i]/255)*255):e[i]=Qn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mf=0,jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oa(s[o].image)):r.push(oa(s[o]))}else r=oa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ml.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bf=0,_n=class n extends gi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Di,s=Di,r=Bn,o=Ui,a=An,l=jn,c=n.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=$i(),this.name="",this.source=new jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Kh;_n.DEFAULT_ANISOTROPY=1;var Pe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,_=(f+1)/2,L=(p+1)/2,A=(h+d)/4,C=(u+x)/4,P=(g+m)/4;return M>_&&M>L?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=C/i):_>L?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=P/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=C/r,s=P/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends gi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends bl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},to=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let L=Math.sqrt(M),A=Math.atan2(L,p*E);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}let _=a*E;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},aa=new I,nh=new xi,Ni=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Mr.subVectors(this.max,Bs),ns.subVectors(t.a,Bs),is.subVectors(t.b,Bs),ss.subVectors(t.c,Bs),ai.subVectors(is,ns),li.subVectors(ss,is),Si.subVectors(ns,ss);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Si.z,Si.y,ai.z,0,-ai.x,li.z,0,-li.x,Si.z,0,-Si.x,-ai.y,ai.x,0,-li.y,li.x,0,-Si.y,Si.x,0];return!la(e,ns,is,ss,Mr)||(e=[1,0,0,0,1,0,0,0,1],!la(e,ns,is,ss,Mr))?!1:(br.crossVectors(ai,li),e=[br.x,br.y,br.z],la(e,ns,is,ss,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new I,new I,new I,new I,new I,new I,new I,new I],Sn=new I,yr=new Ni,ns=new I,is=new I,ss=new I,ai=new I,li=new I,Si=new I,Bs=new I,Mr=new I,br=new I,wi=new I;function la(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wi.fromArray(n,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Sf=new Ni,zs=new I,ca=new I,Qs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Sf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(ca)),this.expandByPoint(zs.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new I,ha=new I,Sr=new I,ci=new I,ua=new I,wr=new I,da=new I,eo=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ha.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(ha);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Sr),a=ci.dot(this.direction),l=-ci.dot(Sr),c=ci.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ha).addScaledVector(Sr,d),f}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,i,s,r){ua.subVectors(e,t),wr.subVectors(i,t),da.crossVectors(ua,wr);let o=this.direction.dot(da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);let l=a*this.direction.dot(wr.crossVectors(ci,wr));if(l<0)return null;let c=a*this.direction.dot(ua.cross(ci));if(c<0||l+c>o)return null;let h=-a*ci.dot(da);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wf,t,Ef)}lookAt(t,e,i){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),hi.crossVectors(i,hn),hi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),hi.crossVectors(i,hn)),hi.normalize(),Er.crossVectors(hn,hi),s[0]=hi.x,s[4]=Er.x,s[8]=hn.x,s[1]=hi.y,s[5]=Er.y,s[9]=hn.y,s[2]=hi.z,s[6]=Er.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],E=i[3],M=i[7],_=i[11],L=i[15],A=s[0],C=s[4],P=s[8],S=s[12],y=s[1],R=s[5],k=s[9],N=s[13],z=s[2],H=s[6],B=s[10],Q=s[14],V=s[3],it=s[7],st=s[11],dt=s[15];return r[0]=o*A+a*y+l*z+c*V,r[4]=o*C+a*R+l*H+c*it,r[8]=o*P+a*k+l*B+c*st,r[12]=o*S+a*N+l*Q+c*dt,r[1]=h*A+u*y+d*z+f*V,r[5]=h*C+u*R+d*H+f*it,r[9]=h*P+u*k+d*B+f*st,r[13]=h*S+u*N+d*Q+f*dt,r[2]=g*A+x*y+m*z+p*V,r[6]=g*C+x*R+m*H+p*it,r[10]=g*P+x*k+m*B+p*st,r[14]=g*S+x*N+m*Q+p*dt,r[3]=E*A+M*y+_*z+L*V,r[7]=E*C+M*R+_*H+L*it,r[11]=E*P+M*k+_*B+L*st,r[15]=E*S+M*N+_*Q+L*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],E=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,L=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,A=e*E+i*M+s*_+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=E*C,t[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*C,t[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*C,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*C,t[4]=M*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=_*C,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*C,t[12]=L*C,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*C,t[14]=(g*a*s-o*x*s-g*i*l+e*x*l+o*i*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,E=l*c,M=l*h,_=l*u,L=i.x,A=i.y,C=i.z;return s[0]=(1-(x+p))*L,s[1]=(f+_)*L,s[2]=(g-M)*L,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(d+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+M)*C,s[9]=(m-E)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);let c=1/r,h=1/o,u=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Kn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===Kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Kr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Kn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h,g,x;if(a===Kn)g=(o+r)*u,x=-2*u;else if(a===Kr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},rs=new I,wn=new Se,wf=new I(0,0,0),Ef=new I(1,1,1),hi=new I,Er=new I,hn=new I,ih=new Se,sh=new xi,kn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tf=0,rh=new I,os=new xi,$n=new Se,Tr=new I,ks=new I,Af=new I,Cf=new xi,oh=new I(1,0,0),ah=new I(0,1,0),lh=new I(0,0,1),ch={type:"added"},Rf={type:"removed"},as={type:"childadded",child:null},fa={type:"childremoved",child:null},on=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new kn,i=new xi,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new te}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Tr.copy(t):Tr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(ks,Tr,this.up):$n.lookAt(Tr,ks,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),os.setFromRotationMatrix($n),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rf),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};on.DEFAULT_UP=new I(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new I,qn=new I,pa=new I,Yn=new I,ls=new I,cs=new I,hh=new I,ma=new I,ga=new I,xa=new I,_a=new Pe,va=new Pe,ya=new Pe,Ii=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){En.subVectors(s,e),qn.subVectors(i,e),pa.subVectors(t,e);let o=En.dot(En),a=En.dot(qn),l=En.dot(pa),c=qn.dot(qn),h=qn.dot(pa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _a.setScalar(0),va.setScalar(0),ya.setScalar(0),_a.fromBufferAttribute(t,e),va.fromBufferAttribute(t,i),ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_a,r.x),o.addScaledVector(va,r.y),o.addScaledVector(ya,r.z),o}static isFrontFacing(t,e,i,s){return En.subVectors(i,e),qn.subVectors(t,e),En.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ls.subVectors(s,i),cs.subVectors(r,i),ma.subVectors(t,i);let l=ls.dot(ma),c=cs.dot(ma);if(l<=0&&c<=0)return e.copy(i);ga.subVectors(t,s);let h=ls.dot(ga),u=cs.dot(ga);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ls,o);xa.subVectors(t,r);let f=ls.dot(xa),g=cs.dot(xa);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(cs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return hh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(hh,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Ma(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ee=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=mc(t,1),e=ze(e,0,1),i=ze(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ma(o,r,t+1/3),this.g=Ma(o,r,t),this.b=Ma(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let i=uu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return ae.fromWorkingColorSpace(qe.copy(this),t),Math.round(ze(qe.r*255,0,255))*65536+Math.round(ze(qe.g*255,0,255))*256+Math.round(ze(qe.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(qe.copy(this),e);let i=qe.r,s=qe.g,r=qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=gn){ae.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,s=qe.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Ar);let i=Xs(ui.h,Ar.h,e),s=Xs(ui.s,Ar.s,e),r=Xs(ui.l,Ar.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new ee;ee.NAMES=uu;var Pf=0,Oi=class extends gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=$i(),this.name="",this.blending=xs,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Na,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fa&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Rn=class extends Oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new I,Cr=new tt,xn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qc,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qc&&(t.usage=this.usage),t}};var no=class extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var io=class extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var le=class extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}},If=0,mn=new Se,ba=new on,hs=new I,un=new Ni,Hs=new Ni,Be=new I,Ve=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hu(t)?io:no)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(un.min,Hs.min),un.expandByPoint(Be),Be.addVectors(un.max,Hs.max),un.expandByPoint(Be)):(un.expandByPoint(Hs.min),un.expandByPoint(Hs.max))}un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),Be.add(hs)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;let c=new I,h=new I,u=new I,d=new tt,f=new tt,g=new tt,x=new I,m=new I;function p(P,S,y){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(x),a[S].add(x),a[y].add(x),l[P].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,S=E.length;P<S;++P){let y=E[P],R=y.start,k=y.count;for(let N=R,z=R+k;N<z;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new I,_=new I,L=new I,A=new I;function C(P){L.fromBufferAttribute(s,P),A.copy(L);let S=a[P];M.copy(S),M.sub(L.multiplyScalar(L.dot(S))).normalize(),_.crossVectors(A,S);let R=_.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,R)}for(let P=0,S=E.length;P<S;++P){let y=E[P],R=y.start,k=y.count;for(let N=R,z=R+k;N<z;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new xn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uh=new Se,Ei=new eo,Rr=new Qs,dh=new I,Pr=new I,Ir=new I,Lr=new I,Sa=new I,Dr=new I,fh=new I,Ur=new I,jt=class extends on{constructor(t=new Ve,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Sa.fromBufferAttribute(u,t),o?Dr.addScaledVector(Sa,h):Dr.addScaledVector(Sa.sub(e),h))}e.add(Dr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Rr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Rr,dh)===null||Ei.origin.distanceToSquared(dh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(uh),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,L=M;_<L;_+=3){let A=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=Fr(this,p,t,i,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Fr(this,o,t,i,c,h,u,E,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,L=M;_<L;_+=3){let A=_,C=_+1,P=_+2;s=Fr(this,p,t,i,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=m,M=m+1,_=m+2;s=Fr(this,o,t,i,c,h,u,E,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Lf(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===mi,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ur);return c<e.near||c>e.far?null:{distance:c,point:Ur.clone(),object:n}}function Fr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Pr),n.getVertexPosition(l,Ir),n.getVertexPosition(c,Lr);let h=Lf(n,t,e,i,Pr,Ir,Lr,fh);if(h){let u=new I;Ii.getBarycoord(fh,Pr,Ir,Lr,u),s&&(h.uv=Ii.getInterpolatedAttribute(s,a,l,c,u,new tt)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,l,c,u,new tt)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Ii.getNormal(Pr,Ir,Lr,d.normal),h.face=d,h.barycoord=u}return h}var Hn=class n extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(x,m,p,E,M,_,L,A,C,P,S){let y=_/C,R=L/P,k=_/2,N=L/2,z=A/2,H=C+1,B=P+1,Q=0,V=0,it=new I;for(let st=0;st<B;st++){let dt=st*R-N;for(let Ft=0;Ft<H;Ft++){let kt=Ft*y-k;it[x]=kt*E,it[m]=dt*M,it[p]=z,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[p]=A>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ft/C),u.push(1-st/P),Q+=1}}for(let st=0;st<P;st++)for(let dt=0;dt<C;dt++){let Ft=d+dt+H*st,kt=d+dt+H*(st+1),q=d+(dt+1)+H*(st+1),j=d+(dt+1)+H*st;l.push(Ft,kt,j),l.push(kt,q,j),V+=6}a.addGroup(f,V,S),f+=V,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ke(n){let t={};for(let e=0;e<n.length;e++){let i=Ts(n[e]);for(let s in i)t[s]=i[s]}return t}function Df(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function du(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var vi={clone:Ts,merge:Ke},Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ee=class extends Oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},so=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new I,ph=new tt,mh=new tt,Qe=class extends so{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,wl=class extends on{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new Qe(us,ds,t,e);r.layers=this.layers,this.add(r);let o=new Qe(us,ds,t,e);o.layers=this.layers,this.add(o);let a=new Qe(us,ds,t,e);a.layers=this.layers,this.add(a);let l=new Qe(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new Qe(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ro=class extends _n{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},El=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ro(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hn(5,5,5),r=new Ee({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:zn});r.uniforms.tEquirect.value=e;let o=new jt(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Bn),new wl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},wa=new I,Nf=new I,Of=new te,Tn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=wa.subVectors(i,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(wa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Of.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Qs,Nr=new I,tr=class{constructor(t=new Tn,e=new Tn,i=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Kn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],E=s[13],M=s[14],_=s[15];if(i[0].setComponents(l-r,d-c,m-f,_-p).normalize(),i[1].setComponents(l+r,d+c,m+f,_+p).normalize(),i[2].setComponents(l+o,d+h,m+g,_+E).normalize(),i[3].setComponents(l-o,d-h,m-g,_-E).normalize(),i[4].setComponents(l-a,d-u,m-x,_-M).normalize(),e===Kn)i[5].setComponents(l+a,d+u,m+x,_+M).normalize();else if(e===Kr)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Bf(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bi=class n extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let E=p*d-o;for(let M=0;M<c;M++){let _=M*u-r;g.push(_,-E,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let M=E+c*p,_=E+c*(p+1),L=E+1+c*(p+1),A=E+1+c*p;f.push(M,_,A),f.push(_,L,A)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kf=`#ifdef USE_ALPHAHASH
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
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
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
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
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
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
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
#endif`,Op=`struct PhysicalMaterial {
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
}`,Bp=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sm=`float getShadowMask() {
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
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,jm=`uniform vec3 diffuse;
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define MATCAP
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
}`,i0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,r0=`#define NORMAL
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
}`,o0=`#define PHONG
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
}`,a0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,c0=`#define STANDARD
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
}`,h0=`#define TOON
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
}`,u0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 color;
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
}`,g0=`uniform float rotation;
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
}`,x0=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:zf,alphahash_pars_fragment:kf,alphamap_fragment:Hf,alphamap_pars_fragment:Vf,alphatest_fragment:Gf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:$f,batching_pars_vertex:qf,batching_vertex:Yf,begin_vertex:Zf,beginnormal_vertex:Jf,bsdfs:Kf,iridescence_fragment:Qf,bumpmap_pars_fragment:jf,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:op,color_vertex:ap,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:dp,emissivemap_fragment:fp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:xp,envmap_common_pars_fragment:_p,envmap_pars_fragment:vp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Ip,envmap_vertex:Mp,fog_vertex:bp,fog_pars_vertex:Sp,fog_fragment:wp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Cp,lights_lambert_pars_fragment:Rp,lights_pars_begin:Pp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Up,lights_phong_pars_fragment:Fp,lights_physical_fragment:Np,lights_physical_pars_fragment:Op,lights_fragment_begin:Bp,lights_fragment_maps:zp,lights_fragment_end:kp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:$p,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:Kp,morphcolor_vertex:Qp,morphnormal_vertex:jp,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:xm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:Mm,shadowmap_vertex:bm,shadowmask_pars_fragment:Sm,skinbase_vertex:wm,skinning_pars_vertex:Em,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Cm,specularmap_pars_fragment:Rm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Im,transmission_fragment:Lm,transmission_pars_fragment:Dm,uv_pars_fragment:Um,uv_pars_vertex:Fm,uv_vertex:Nm,worldpos_vertex:Om,background_vert:Bm,background_frag:zm,backgroundCube_vert:km,backgroundCube_frag:Hm,cube_vert:Vm,cube_frag:Gm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:$m,distanceRGBA_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:Km,meshbasic_vert:Qm,meshbasic_frag:jm,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:o0,meshphong_frag:a0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:d0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:x0},wt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},On={basic:{uniforms:Ke([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:Ke([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:Ke([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:Ke([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:Ke([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:Ke([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:Ke([wt.points,wt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:Ke([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:Ke([wt.common,wt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:Ke([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:Ke([wt.sprite,wt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:Ke([wt.common,wt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:Ke([wt.lights,wt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};On.physical={uniforms:Ke([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Or={r:0,b:0,g:0},Ai=new kn,_0=new Se;function v0(n,t,e,i,s,r,o){let a=new ee(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function x(E){let M=!1,_=g(E);_===null?p(a,l):_&&_.isColor&&(p(_,1),M=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){let _=g(M);_&&(_.isCubeTexture||_.mapping===Eo)?(h===void 0&&(h=new jt(new Hn(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:Ts(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(M.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(Ai)),h.material.toneMapped=ae.getTransfer(_.colorSpace)!==ge,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new jt(new Bi(2,2),new Ee({name:"BackgroundMaterial",uniforms:Ts(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ae.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,M){E.getRGB(Or,du(n)),i.buffers.color.setClear(Or.r,Or.g,Or.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:x,addToRenderList:m}}function y0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(y,R,k,N,z){let H=!1,B=u(N,k,R);r!==B&&(r=B,c(r.object)),H=f(y,N,k,z),H&&g(y,N,k,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(y,R,k,N),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,R,k){let N=k.wireframe===!0,z=i[y.id];z===void 0&&(z={},i[y.id]=z);let H=z[R.id];H===void 0&&(H={},z[R.id]=H);let B=H[N];return B===void 0&&(B=d(l()),H[N]=B),B}function d(y){let R=[],k=[],N=[];for(let z=0;z<e;z++)R[z]=0,k[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,R,k,N){let z=r.attributes,H=R.attributes,B=0,Q=k.getAttributes();for(let V in Q)if(Q[V].location>=0){let st=z[V],dt=H[V];if(dt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),st===void 0||st.attribute!==dt||dt&&st.data!==dt.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function g(y,R,k,N){let z={},H=R.attributes,B=0,Q=k.getAttributes();for(let V in Q)if(Q[V].location>=0){let st=H[V];st===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(st=y.instanceColor));let dt={};dt.attribute=st,st&&st.data&&(dt.data=st.data),z[V]=dt,B++}r.attributes=z,r.attributesNum=B,r.index=N}function x(){let y=r.newAttributes;for(let R=0,k=y.length;R<k;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){let k=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;k[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),z[y]!==R&&(n.vertexAttribDivisor(y,R),z[y]=R)}function E(){let y=r.newAttributes,R=r.enabledAttributes;for(let k=0,N=R.length;k<N;k++)R[k]!==y[k]&&(n.disableVertexAttribArray(k),R[k]=0)}function M(y,R,k,N,z,H,B){B===!0?n.vertexAttribIPointer(y,R,k,z,H):n.vertexAttribPointer(y,R,k,N,z,H)}function _(y,R,k,N){x();let z=N.attributes,H=k.getAttributes(),B=R.defaultAttributeValues;for(let Q in H){let V=H[Q];if(V.location>=0){let it=z[Q];if(it===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){let st=it.normalized,dt=it.itemSize,Ft=t.get(it);if(Ft===void 0)continue;let kt=Ft.buffer,q=Ft.type,j=Ft.bytesPerElement,mt=q===n.INT||q===n.UNSIGNED_INT||it.gpuType===cc;if(it.isInterleavedBufferAttribute){let ot=it.data,Rt=ot.stride,Pt=it.offset;if(ot.isInstancedInterleavedBuffer){for(let Nt=0;Nt<V.locationSize;Nt++)p(V.location+Nt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Nt=0;Nt<V.locationSize;Nt++)m(V.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let Nt=0;Nt<V.locationSize;Nt++)M(V.location+Nt,dt/V.locationSize,q,st,Rt*j,(Pt+dt/V.locationSize*Nt)*j,mt)}else{if(it.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)p(V.location+ot,it.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let ot=0;ot<V.locationSize;ot++)M(V.location+ot,dt/V.locationSize,q,st,dt*j,dt/V.locationSize*ot*j,mt)}}else if(B!==void 0){let st=B[Q];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(V.location,st);break;case 3:n.vertexAttrib3fv(V.location,st);break;case 4:n.vertexAttrib4fv(V.location,st);break;default:n.vertexAttrib1fv(V.location,st)}}}}E()}function L(){P();for(let y in i){let R=i[y];for(let k in R){let N=R[k];for(let z in N)h(N[z].object),delete N[z];delete R[k]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;let R=i[y.id];for(let k in R){let N=R[k];for(let z in N)h(N[z].object),delete N[z];delete R[k]}delete i[y.id]}function C(y){for(let R in i){let k=i[R];if(k[y.id]===void 0)continue;let N=k[y.id];for(let z in N)h(N[z].object),delete N[z];delete k[y.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function M0(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function b0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==An&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Jn&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:L,maxSamples:A}}function S0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Tn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,M=E*4,_=p.clippingState||null;l.value=_,_=h(g,d,M,f);for(let L=0;L!==M;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function w0(n){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=bs:a===Xa&&(o.mapping=Ss),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new El(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var _i=class extends so{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,gh=[.125,.215,.35,.446,.526,.582],Li=20,Ea=new _i,xh=new ee,Ta=null,Aa=0,Ca=0,Ra=!1,Ri=(1+Math.sqrt(5))/2,fs=1/Ri,_h=[new I(-Ri,fs,0),new I(Ri,fs,0),new I(-fs,0,Ri),new I(fs,0,Ri),new I(0,Ri,-fs),new I(0,Ri,fs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],oo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ta,Aa,Ca),this._renderer.xr.enabled=Ra,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:dn,format:An,colorSpace:Rs,depthBuffer:!1},s=vh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(r)),this._blurMaterial=T0(r,t,e)}return s}_compileMaterial(t){let e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,Ea)}_sceneToCubeUV(t,e,i,s){let a=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xh),h.toneMapping=pi,h.autoClear=!1;let f=new Rn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new jt(new Hn,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(xh),x=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;Br(s,E*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===bs||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Br(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ea)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_h[(s-r-1)%_h.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new jt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);let p=[],E=0;for(let C=0;C<Li;++C){let P=C/x,S=Math.exp(-P*P/2);p.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;let _=this._sizeLods[s],L=3*_*(s>M-ms?s-M+ms:0),A=4*(this._cubeSize-_);Br(e,L,A,3*_,2*_),l.setRenderTarget(e),l.render(u,Ea)}};function E0(n){let t=[],e=[],i=[],s=n,r=n-ms+1+gh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ms?l=gh[o-n+ms-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,P=A>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];E.set(S,x*g*A),M.set(d,m*g*A);let y=[A,A,A,A,A,A];_.set(y,p*g*A)}let L=new Ve;L.setAttribute("position",new xn(E,x)),L.setAttribute("uv",new xn(M,m)),L.setAttribute("faceIndex",new xn(_,p)),t.push(L),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vh(n,t,e){let i=new He(n,t,e);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Br(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function T0(n,t,e){let i=new Float32Array(Li),s=new I(0,1,0);return new Ee({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function yh(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Mh(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function A0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wa||l===Xa,h=l===bs||l===Ss;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new oo(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new oo(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function C0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Vs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function R0(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let E=f.array;x=f.version;for(let M=0,_=E.length;M<_;M+=3){let L=E[M+0],A=E[M+1],C=E[M+2];d.push(L,A,A,C,C,L)}}else if(g!==void 0){let E=g.array;x=g.version;for(let M=0,_=E.length/3-1;M<_;M+=3){let L=M+0,A=M+1,C=M+2;d.push(L,A,A,C,C,L)}}else return;let m=new(hu(d)?io:no)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function P0(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*x[E];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function I0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function L0(n,t,e){let i=new WeakMap,s=new Pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*L*4*u),C=new to(A,_,L,u);C.type=Jn,C.needsUpdate=!0;let P=M*4;for(let y=0;y<u;y++){let R=m[y],k=p[y],N=E[y],z=_*L*4*y;for(let H=0;H<R.count;H++){let B=H*P;f===!0&&(s.fromBufferAttribute(R,H),A[z+B+0]=s.x,A[z+B+1]=s.y,A[z+B+2]=s.z,A[z+B+3]=0),g===!0&&(s.fromBufferAttribute(k,H),A[z+B+4]=s.x,A[z+B+5]=s.y,A[z+B+6]=s.z,A[z+B+7]=0),x===!0&&(s.fromBufferAttribute(N,H),A[z+B+8]=s.x,A[z+B+9]=s.y,A[z+B+10]=s.z,A[z+B+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new tt(_,L)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function D0(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ao=class extends _n{constructor(t,e,i,s,r,o,a,l,c,h=_s){if(h!==_s&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_s&&(i=Fi),i===void 0&&h===Es&&(i=ws),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pu=new _n,bh=new ao(1,1),mu=new to,gu=new Sl,xu=new ro,Sh=[],wh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function Ps(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Sh[s];if(r===void 0&&(r=new Float32Array(s),Sh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ao(n,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function U0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function F0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function N0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function O0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function B0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Fe(e,i))return;Ah.set(i),n.uniformMatrix2fv(this.addr,!1,Ah),Ne(e,i)}}function z0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Fe(e,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),Ne(e,i)}}function k0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Fe(e,i))return;Eh.set(i),n.uniformMatrix4fv(this.addr,!1,Eh),Ne(e,i)}}function H0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function V0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function G0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function W0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function X0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function $0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function q0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function Y0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function Z0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bh.compareFunction=cu,r=bh):r=pu,e.setTexture2D(t||r,s)}function J0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gu,s)}function K0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||xu,s)}function Q0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mu,s)}function j0(n){switch(n){case 5126:return U0;case 35664:return F0;case 35665:return N0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return H0;case 35667:case 35671:return V0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return $0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return Q0}}function tg(n,t){n.uniform1fv(this.addr,t)}function eg(n,t){let e=Ps(t,this.size,2);n.uniform2fv(this.addr,e)}function ng(n,t){let e=Ps(t,this.size,3);n.uniform3fv(this.addr,e)}function ig(n,t){let e=Ps(t,this.size,4);n.uniform4fv(this.addr,e)}function sg(n,t){let e=Ps(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function rg(n,t){let e=Ps(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function og(n,t){let e=Ps(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ag(n,t){n.uniform1iv(this.addr,t)}function lg(n,t){n.uniform2iv(this.addr,t)}function cg(n,t){n.uniform3iv(this.addr,t)}function hg(n,t){n.uniform4iv(this.addr,t)}function ug(n,t){n.uniform1uiv(this.addr,t)}function dg(n,t){n.uniform2uiv(this.addr,t)}function fg(n,t){n.uniform3uiv(this.addr,t)}function pg(n,t){n.uniform4uiv(this.addr,t)}function mg(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||pu,r[o])}function gg(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gu,r[o])}function xg(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xu,r[o])}function _g(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mu,r[o])}function vg(n){switch(n){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return _g}}var Tl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=j0(e.type)}},Al=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vg(e.type)}},Cl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Pa=/(\w+)(\])?(\[|\.)?/g;function Ch(n,t){n.seq.push(t),n.map[t.id]=t}function yg(n,t,e){let i=n.name,s=i.length;for(Pa.lastIndex=0;;){let r=Pa.exec(i),o=Pa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ch(e,c===void 0?new Tl(a,n,t):new Al(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Cl(a),Ch(e,u)),e=u}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);yg(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Rh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Mg=37297,bg=0;function Sg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Ph=new te;function wg(n){ae._getMatrix(Ph,ae.workingColorSpace,n);let t=`mat3( ${Ph.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case To:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ih(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Sg(n.getShaderSource(t),o)}else return s}function Eg(n,t){let e=wg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tg(n,t){let e;switch(t){case ic:e="Linear";break;case sc:e="Reinhard";break;case rc:e="Cineon";break;case oc:e="ACESFilmic";break;case ac:e="AgX";break;case lc:e="Neutral";break;case Vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zr=new I;function Ag(){ae.getLuminanceCoefficients(zr);let n=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Rg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Pg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Gs(n){return n!==""}function Lh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(n){return n.replace(Ig,Dg)}var Lg=new Map;function Dg(n,t){let e=ie[t];if(e===void 0){let i=Lg.get(t);if(i!==void 0)e=ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}var Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(n){return n.replace(Ug,Fg)}function Fg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ng(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Md?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Og(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bs:case Ss:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function zg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jh:t="ENVMAP_BLENDING_MULTIPLY";break;case kd:t="ENVMAP_BLENDING_MIX";break;case Hd:t="ENVMAP_BLENDING_ADD";break}return t}function kg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Hg(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ng(e),c=Og(e),h=Bg(e),u=zg(e),d=kg(e),f=Cg(e),g=Rg(r),x=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?ie.tonemapping_pars_fragment:"",e.toneMapping!==pi?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Eg("linearToOutputTexel",e.outputColorSpace),Ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Rl(o),o=Lh(o,e),o=Dh(o,e),a=Rl(a),a=Lh(a,e),a=Dh(a,e),o=Uh(o),a=Uh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=E+m+o,_=E+p+a,L=Rh(s,s.VERTEX_SHADER,M),A=Rh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,L),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(R){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(L).trim(),z=s.getShaderInfoLog(A).trim(),H=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,A);else{let Q=Ih(s,L,"vertex"),V=Ih(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+Q+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||z==="")&&(B=!1);B&&(R.diagnostics={runnable:H,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(L),s.deleteShader(A),P=new ys(s,x),S=Pg(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Mg)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}var Vg=0,Pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Il(t),e.set(t,i)),i}},Il=class{constructor(t){this.id=Vg++,this.code=t,this.usedTimes=0}};function Gg(n,t,e,i,s,r,o){let a=new js,l=new Pl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,k,N){let z=k.fog,H=N.geometry,B=S.isMeshStandardMaterial?k.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),V=Q&&Q.mapping===Eo?Q.image.height:null,it=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dt=st!==void 0?st.length:0,Ft=0;H.morphAttributes.position!==void 0&&(Ft=1),H.morphAttributes.normal!==void 0&&(Ft=2),H.morphAttributes.color!==void 0&&(Ft=3);let kt,q,j,mt;if(it){let pt=On[it];kt=pt.vertexShader,q=pt.fragmentShader}else kt=S.vertexShader,q=S.fragmentShader,l.update(S),j=l.getVertexShaderID(S),mt=l.getFragmentShaderID(S);let ot=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Pt=N.isInstancedMesh===!0,Nt=N.isBatchedMesh===!0,Wt=!!S.map,X=!!S.matcap,rt=!!Q,T=!!S.aoMap,gt=!!S.lightMap,K=!!S.bumpMap,yt=!!S.normalMap,ct=!!S.displacementMap,It=!!S.emissiveMap,bt=!!S.metalnessMap,w=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,$=S.dispersion>0,et=S.iridescence>0,Z=S.sheen>0,ft=S.transmission>0,xt=v&&!!S.anisotropyMap,Mt=O&&!!S.clearcoatMap,Jt=O&&!!S.clearcoatNormalMap,lt=O&&!!S.clearcoatRoughnessMap,Et=et&&!!S.iridescenceMap,Ot=et&&!!S.iridescenceThicknessMap,zt=Z&&!!S.sheenColorMap,Ct=Z&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,Xt=!!S.specularColorMap,de=!!S.specularIntensityMap,D=ft&&!!S.transmissionMap,_t=ft&&!!S.thicknessMap,Y=!!S.gradientMap,nt=!!S.alphaMap,vt=S.alphaTest>0,St=!!S.alphaHash,$t=!!S.extensions,ve=pi;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ve=n.toneMapping);let J={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:kt,fragmentShader:q,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&N._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&N.instanceColor!==null,instancingMorph:Pt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Rs,alphaToCoverage:!!S.alphaToCoverage,map:Wt,matcap:X,envMap:rt,envMapMode:rt&&Q.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:gt,bumpMap:K,normalMap:yt,displacementMap:d&&ct,emissiveMap:It,normalMapObjectSpace:yt&&S.normalMapType===$d,normalMapTangentSpace:yt&&S.normalMapType===lu,metalnessMap:bt,roughnessMap:w,anisotropy:v,anisotropyMap:xt,clearcoat:O,clearcoatMap:Mt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:lt,dispersion:$,iridescence:et,iridescenceMap:Et,iridescenceThicknessMap:Ot,sheen:Z,sheenColorMap:zt,sheenRoughnessMap:Ct,specularMap:Kt,specularColorMap:Xt,specularIntensityMap:de,transmission:ft,transmissionMap:D,thicknessMap:_t,gradientMap:Y,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:St,combine:S.combine,mapUv:Wt&&x(S.map.channel),aoMapUv:T&&x(S.aoMap.channel),lightMapUv:gt&&x(S.lightMap.channel),bumpMapUv:K&&x(S.bumpMap.channel),normalMapUv:yt&&x(S.normalMap.channel),displacementMapUv:ct&&x(S.displacementMap.channel),emissiveMapUv:It&&x(S.emissiveMap.channel),metalnessMapUv:bt&&x(S.metalnessMap.channel),roughnessMapUv:w&&x(S.roughnessMap.channel),anisotropyMapUv:xt&&x(S.anisotropyMap.channel),clearcoatMapUv:Mt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(S.sheenRoughnessMap.channel),specularMapUv:Kt&&x(S.specularMap.channel),specularColorMapUv:Xt&&x(S.specularColorMap.channel),specularIntensityMapUv:de&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:_t&&x(S.thicknessMap.channel),alphaMapUv:nt&&x(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(yt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Wt||nt),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:Wt&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===ge,decodeVideoTextureEmissive:It&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===ge,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$t&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&S.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return J.vertexUv1s=c.has(1),J.vertexUv2s=c.has(2),J.vertexUv3s=c.has(3),c.clear(),J}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(E(y,S),M(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let y=g[S.type],R;if(y){let k=On[y];R=vi.clone(k.uniforms)}else R=S.uniforms;return R}function L(S,y){let R;for(let k=0,N=h.length;k<N;k++){let z=h[k];if(z.cacheKey===y){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Hg(n,y,S,r),h.push(R)),R}function A(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function Wg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Xg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Nh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Oh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Xg),i.length>1&&i.sort(d||Nh),s.length>1&&s.sort(d||Nh)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function $g(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Oh,n.set(i,[o])):s>=r.length?(o=new Oh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ee};break;case"SpotLight":e={position:new I,direction:new I,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Yg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Zg=0;function Jg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Kg(n){let t=new qg,e=Yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Se,o=new Se;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,E=0,M=0,_=0,L=0,A=0,C=0;c.sort(Jg);for(let S=0,y=c.length;S<y;S++){let R=c[S],k=R.color,N=R.intensity,z=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*N,u+=k.g*N,d+=k.b*N;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],N);C++}else if(R.isDirectionalLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,V=e.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=R.shadow.matrix,E++}i.directional[f]=B,f++}else if(R.isSpotLight){let B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(k).multiplyScalar(N),B.distance=z,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[x]=B;let Q=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,Q.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[x]=Q.matrix,R.castShadow){let V=e.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=H,_++}x++}else if(R.isRectAreaLight){let B=t.get(R);B.color.copy(k).multiplyScalar(N),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=B,m++}else if(R.isPointLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let Q=R.shadow,V=e.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=R.shadow.matrix,M++}i.point[g]=B,g++}else if(R.isHemisphereLight){let B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(N),B.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==M||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=M,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=C,i.version=Zg++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let M=c[p];if(M.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Bh(n){let t=new Kg(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Qg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Bh(n),t.set(s,[a])):r>=o.length?(a=new Bh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ll=class extends Oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dl=class extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`;function ex(n,t,e){let i=new tr,s=new tt,r=new tt,o=new Pe,a=new Ll({depthPacking:Xd}),l=new Dl,c={},h=e.maxTextureSize,u={[mi]:rn,[rn]:mi,[sn]:sn},d=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:jg,fragmentShader:tx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),k=n.state;k.setBlending(zn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=p!==Zn&&this.type===Zn,z=p===Zn&&this.type!==Zn;for(let H=0,B=A.length;H<B;H++){let Q=A[H],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let it=V.getFrameExtents();if(s.multiply(it),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||N===!0||z===!0){let dt=this.type!==Zn?{minFilter:Cn,magFilter:Cn}:{};V.map!==null&&V.map.dispose(),V.map=new He(s.x,s.y,dt),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let st=V.getViewportCount();for(let dt=0;dt<st;dt++){let Ft=V.getViewport(dt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),k.viewport(o),V.updateMatrices(Q,dt),i=V.getFrustum(),_(C,P,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Zn&&E(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,R)};function E(A,C){let P=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new He(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,P,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,P,f,x,null)}function M(A,C,P,S){let y=null,R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let k=y.uuid,N=C.uuid,z=c[k];z===void 0&&(z={},c[k]=z);let H=z[N];H===void 0&&(H=y.clone(),z[N]=H,C.addEventListener("dispose",L)),y=H}if(y.visible=C.visible,y.wireframe=C.wireframe,S===Zn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let k=n.properties.get(y);k.light=P}return y}function _(A,C,P,S,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Zn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let N=t.update(A),z=A.material;if(Array.isArray(z)){let H=N.groups;for(let B=0,Q=H.length;B<Q;B++){let V=H[B],it=z[V.materialIndex];if(it&&it.visible){let st=M(A,it,S,y);A.onBeforeShadow(n,A,C,P,N,st,V),n.renderBufferDirect(P,null,N,st,A,V),A.onAfterShadow(n,A,C,P,N,st,V)}}}else if(z.visible){let H=M(A,z,S,y);A.onBeforeShadow(n,A,C,P,N,H,null),n.renderBufferDirect(P,null,N,H,A,null),A.onAfterShadow(n,A,C,P,N,H,null)}}let k=A.children;for(let N=0,z=k.length;N<z;N++)_(k[N],C,P,S,y)}function L(A){A.target.removeEventListener("dispose",L);for(let P in c){let S=c[P],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var nx={[Oa]:Ba,[za]:Va,[ka]:Ga,[Ms]:Ha,[Ba]:Oa,[Va]:za,[Ga]:ka,[Ha]:Ms};function ix(n,t){function e(){let D=!1,_t=new Pe,Y=null,nt=new Pe(0,0,0,0);return{setMask:function(vt){Y!==vt&&!D&&(n.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){D=vt},setClear:function(vt,St,$t,ve,J){J===!0&&(vt*=ve,St*=ve,$t*=ve),_t.set(vt,St,$t,ve),nt.equals(_t)===!1&&(n.clearColor(vt,St,$t,ve),nt.copy(_t))},reset:function(){D=!1,Y=null,nt.set(-1,0,0,0)}}}function i(){let D=!1,_t=!1,Y=null,nt=null,vt=null;return{setReversed:function(St){if(_t!==St){let $t=t.get("EXT_clip_control");_t?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let ve=vt;vt=null,this.setClear(ve)}_t=St},getReversed:function(){return _t},setTest:function(St){St?ot(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(St){Y!==St&&!D&&(n.depthMask(St),Y=St)},setFunc:function(St){if(_t&&(St=nx[St]),nt!==St){switch(St){case Oa:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Va:n.depthFunc(n.GREATER);break;case Ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=St}},setLocked:function(St){D=St},setClear:function(St){vt!==St&&(_t&&(St=1-St),n.clearDepth(St),vt=St)},reset:function(){D=!1,Y=null,nt=null,vt=null,_t=!1}}}function s(){let D=!1,_t=null,Y=null,nt=null,vt=null,St=null,$t=null,ve=null,J=null;return{setTest:function(pt){D||(pt?ot(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(pt){_t!==pt&&!D&&(n.stencilMask(pt),_t=pt)},setFunc:function(pt,Dt,Ht){(Y!==pt||nt!==Dt||vt!==Ht)&&(n.stencilFunc(pt,Dt,Ht),Y=pt,nt=Dt,vt=Ht)},setOp:function(pt,Dt,Ht){(St!==pt||$t!==Dt||ve!==Ht)&&(n.stencilOp(pt,Dt,Ht),St=pt,$t=Dt,ve=Ht)},setLocked:function(pt){D=pt},setClear:function(pt){J!==pt&&(n.clearStencil(pt),J=pt)},reset:function(){D=!1,_t=null,Y=null,nt=null,vt=null,St=null,$t=null,ve=null,J=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,M=null,_=null,L=null,A=null,C=new ee(0,0,0),P=0,S=!1,y=null,R=null,k=null,N=null,z=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Q=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=Q>=2);let it=null,st={},dt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),kt=new Pe().fromArray(dt),q=new Pe().fromArray(Ft);function j(D,_t,Y,nt){let vt=new Uint8Array(4),St=n.createTexture();n.bindTexture(D,St),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<Y;$t++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(_t+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return St}let mt={};mt[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),mt[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),mt[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(Ms),K(!1),yt(kc),ot(n.CULL_FACE),T(zn);function ot(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Pt(D,_t){return u[D]!==_t?(n.bindFramebuffer(D,_t),u[D]=_t,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_t),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function Nt(D,_t){let Y=f,nt=!1;if(D){Y=d.get(_t),Y===void 0&&(Y=[],d.set(_t,Y));let vt=D.textures;if(Y.length!==vt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let St=0,$t=vt.length;St<$t;St++)Y[St]=n.COLOR_ATTACHMENT0+St;Y.length=vt.length,nt=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,nt=!0);nt&&n.drawBuffers(Y)}function Wt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let X={[Pi]:n.FUNC_ADD,[Sd]:n.FUNC_SUBTRACT,[wd]:n.FUNC_REVERSE_SUBTRACT};X[Ed]=n.MIN,X[Td]=n.MAX;let rt={[Ad]:n.ZERO,[Cd]:n.ONE,[Rd]:n.SRC_COLOR,[Fa]:n.SRC_ALPHA,[Fd]:n.SRC_ALPHA_SATURATE,[Dd]:n.DST_COLOR,[Id]:n.DST_ALPHA,[Pd]:n.ONE_MINUS_SRC_COLOR,[Na]:n.ONE_MINUS_SRC_ALPHA,[Ud]:n.ONE_MINUS_DST_COLOR,[Ld]:n.ONE_MINUS_DST_ALPHA,[Nd]:n.CONSTANT_COLOR,[Od]:n.ONE_MINUS_CONSTANT_COLOR,[Bd]:n.CONSTANT_ALPHA,[zd]:n.ONE_MINUS_CONSTANT_ALPHA};function T(D,_t,Y,nt,vt,St,$t,ve,J,pt){if(D===zn){x===!0&&(Rt(n.BLEND),x=!1);return}if(x===!1&&(ot(n.BLEND),x=!0),D!==bd){if(D!==m||pt!==S){if((p!==Pi||_!==Pi)&&(n.blendEquation(n.FUNC_ADD),p=Pi,_=Pi),pt)switch(D){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zr:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,M=null,L=null,A=null,C.set(0,0,0),P=0,m=D,S=pt}return}vt=vt||_t,St=St||Y,$t=$t||nt,(_t!==p||vt!==_)&&(n.blendEquationSeparate(X[_t],X[vt]),p=_t,_=vt),(Y!==E||nt!==M||St!==L||$t!==A)&&(n.blendFuncSeparate(rt[Y],rt[nt],rt[St],rt[$t]),E=Y,M=nt,L=St,A=$t),(ve.equals(C)===!1||J!==P)&&(n.blendColor(ve.r,ve.g,ve.b,J),C.copy(ve),P=J),m=D,S=!1}function gt(D,_t){D.side===sn?Rt(n.CULL_FACE):ot(n.CULL_FACE);let Y=D.side===rn;_t&&(Y=!Y),K(Y),D.blending===xs&&D.transparent===!1?T(zn):T(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let nt=D.stencilWrite;a.setTest(nt),nt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function yt(D){D!==vd?(ot(n.CULL_FACE),D!==R&&(D===kc?n.cullFace(n.BACK):D===yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),R=D}function ct(D){D!==k&&(B&&n.lineWidth(D),k=D)}function It(D,_t,Y){D?(ot(n.POLYGON_OFFSET_FILL),(N!==_t||z!==Y)&&(n.polygonOffset(_t,Y),N=_t,z=Y)):Rt(n.POLYGON_OFFSET_FILL)}function bt(D){D?ot(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function w(D){D===void 0&&(D=n.TEXTURE0+H-1),it!==D&&(n.activeTexture(D),it=D)}function v(D,_t,Y){Y===void 0&&(it===null?Y=n.TEXTURE0+H-1:Y=it);let nt=st[Y];nt===void 0&&(nt={type:void 0,texture:void 0},st[Y]=nt),(nt.type!==D||nt.texture!==_t)&&(it!==Y&&(n.activeTexture(Y),it=Y),n.bindTexture(D,_t||mt[D]),nt.type=D,nt.texture=_t)}function O(){let D=st[it];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(D){kt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),kt.copy(D))}function Ct(D){q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Kt(D,_t){let Y=c.get(_t);Y===void 0&&(Y=new WeakMap,c.set(_t,Y));let nt=Y.get(D);nt===void 0&&(nt=n.getUniformBlockIndex(_t,D.name),Y.set(D,nt))}function Xt(D,_t){let nt=c.get(_t).get(D);l.get(_t)!==nt&&(n.uniformBlockBinding(_t,nt,D.__bindingPointIndex),l.set(_t,nt))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},it=null,st={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,M=null,_=null,L=null,A=null,C=new ee(0,0,0),P=0,S=!1,y=null,R=null,k=null,N=null,z=null,kt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Rt,bindFramebuffer:Pt,drawBuffers:Nt,useProgram:Wt,setBlending:T,setMaterial:gt,setFlipSided:K,setCullFace:yt,setLineWidth:ct,setPolygonOffset:It,setScissorTest:bt,activeTexture:w,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:Et,texImage3D:Ot,updateUBOMapping:Kt,uniformBlockBinding:Xt,texStorage2D:Jt,texStorage3D:lt,texSubImage2D:Z,texSubImage3D:ft,compressedTexSubImage2D:xt,compressedTexSubImage3D:Mt,scissor:zt,viewport:Ct,reset:de}}function zh(n,t,e,i){let s=sx(i);switch(e){case eu:return n*t;case iu:return n*t;case su:return n*t*2;case ru:return n*t/s.components*s.byteLength;case dc:return n*t/s.components*s.byteLength;case ou:return n*t*2/s.components*s.byteLength;case fc:return n*t*2/s.components*s.byteLength;case nu:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case pc:return n*t*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $r:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ka:return Math.max(n,16)*Math.max(t,8)/4;case Ya:case Ja:return Math.max(n,8)*Math.max(t,8)/2;case Qa:case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yr:case ml:case gl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case au:case xl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _l:case vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sx(n){switch(n){case jn:case Qh:return{byteLength:1,components:1};case Js:case jh:case dn:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Fi:case cc:case Jn:return{byteLength:4,components:1};case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function rx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Qr("canvas")}function x(w,v,O){let $=1,et=bt(w);if((et.width>O||et.height>O)&&($=O/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Z=Math.floor($*et.width),ft=Math.floor($*et.height);u===void 0&&(u=g(Z,ft));let xt=v?g(Z,ft):u;return xt.width=Z,xt.height=ft,xt.getContext("2d").drawImage(w,0,0,Z,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+ft+")."),xt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,v,O,$,et=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=v;if(v===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),v===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),v===n.RGBA){let ft=et?To:ae.getTransfer($);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=ft===ge?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(w,v){let O;return w?v===null||v===Fi||v===ws?O=n.DEPTH24_STENCIL8:v===Jn?O=n.DEPTH32F_STENCIL8:v===Js&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fi||v===ws?O=n.DEPTH_COMPONENT24:v===Jn?O=n.DEPTH_COMPONENT32F:v===Js&&(O=n.DEPTH_COMPONENT16),O}function L(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Cn&&w.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){let v=w.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&h.delete(v)}function C(w){let v=w.target;v.removeEventListener("dispose",C),y(v)}function P(w){let v=i.get(w);if(v.__webglInit===void 0)return;let O=w.source,$=d.get(O);if($){let et=$[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(w),Object.keys($).length===0&&d.delete(O)}i.remove(w)}function S(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let O=w.source,$=d.get(O);delete $[v.__cacheKey],o.memory.textures--}function y(w){let v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let et=0;et<v.__webglFramebuffer[$].length;et++)n.deleteFramebuffer(v.__webglFramebuffer[$][et]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=w.textures;for(let $=0,et=O.length;$<et;$++){let Z=i.get(O[$]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[$])}i.remove(w)}let R=0;function k(){R=0}function N(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function z(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function H(w,v){let O=i.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,w,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function B(w,v){let O=i.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function Q(w,v){let O=i.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function V(w,v){let O=i.get(w);if(w.version>0&&O.__version!==w.version){j(O,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let it={[$a]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},st={[Cn]:n.NEAREST,[Gd]:n.NEAREST_MIPMAP_NEAREST,[vr]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},dt={[qd]:n.NEVER,[jd]:n.ALWAYS,[Yd]:n.LESS,[cu]:n.LEQUAL,[Zd]:n.EQUAL,[Qd]:n.GEQUAL,[Jd]:n.GREATER,[Kd]:n.NOTEQUAL};function Ft(w,v){if(v.type===Jn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===ia||v.magFilter===vr||v.magFilter===Ui||v.minFilter===Bn||v.minFilter===ia||v.minFilter===vr||v.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,it[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,it[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,it[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,st[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,st[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,dt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Cn||v.minFilter!==vr&&v.minFilter!==Ui||v.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function kt(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));let $=v.source,et=d.get($);et===void 0&&(et={},d.set($,et));let Z=z(v);if(Z!==w.__cacheKey){et[Z]===void 0&&(et[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),et[Z].usedTimes++;let ft=et[w.__cacheKey];ft!==void 0&&(et[w.__cacheKey].usedTimes--,ft.usedTimes===0&&S(v)),w.__cacheKey=Z,w.__webglTexture=et[Z].texture}return O}function q(w,v,O){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let et=kt(w,v),Z=v.source;e.bindTexture($,w.__webglTexture,n.TEXTURE0+O);let ft=i.get(Z);if(Z.version!==ft.__version||et===!0){e.activeTexture(n.TEXTURE0+O);let xt=ae.getPrimaries(ae.workingColorSpace),Mt=v.colorSpace===fi?null:ae.getPrimaries(v.colorSpace),Jt=v.colorSpace===fi||xt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let lt=x(v.image,!1,s.maxTextureSize);lt=It(v,lt);let Et=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type),zt=M(v.internalFormat,Et,Ot,v.colorSpace,v.isVideoTexture);Ft($,v);let Ct,Kt=v.mipmaps,Xt=v.isVideoTexture!==!0,de=ft.__version===void 0||et===!0,D=Z.dataReady,_t=L(v,lt);if(v.isDepthTexture)zt=_(v.format===Es,v.type),de&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,zt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,zt,lt.width,lt.height,0,Et,Ot,null));else if(v.isDataTexture)if(Kt.length>0){Xt&&de&&e.texStorage2D(n.TEXTURE_2D,_t,zt,Kt[0].width,Kt[0].height);for(let Y=0,nt=Kt.length;Y<nt;Y++)Ct=Kt[Y],Xt?D&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ct.width,Ct.height,Et,Ot,Ct.data):e.texImage2D(n.TEXTURE_2D,Y,zt,Ct.width,Ct.height,0,Et,Ot,Ct.data);v.generateMipmaps=!1}else Xt?(de&&e.texStorage2D(n.TEXTURE_2D,_t,zt,lt.width,lt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,Et,Ot,lt.data)):e.texImage2D(n.TEXTURE_2D,0,zt,lt.width,lt.height,0,Et,Ot,lt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,zt,Kt[0].width,Kt[0].height,lt.depth);for(let Y=0,nt=Kt.length;Y<nt;Y++)if(Ct=Kt[Y],v.format!==An)if(Et!==null)if(Xt){if(D)if(v.layerUpdates.size>0){let vt=zh(Ct.width,Ct.height,v.format,v.type);for(let St of v.layerUpdates){let $t=Ct.data.subarray(St*vt/Ct.data.BYTES_PER_ELEMENT,(St+1)*vt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,St,Ct.width,Ct.height,1,Et,$t)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ct.width,Ct.height,lt.depth,Et,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,zt,Ct.width,Ct.height,lt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ct.width,Ct.height,lt.depth,Et,Ot,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,zt,Ct.width,Ct.height,lt.depth,0,Et,Ot,Ct.data)}else{Xt&&de&&e.texStorage2D(n.TEXTURE_2D,_t,zt,Kt[0].width,Kt[0].height);for(let Y=0,nt=Kt.length;Y<nt;Y++)Ct=Kt[Y],v.format!==An?Et!==null?Xt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Ct.width,Ct.height,Et,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,zt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?D&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ct.width,Ct.height,Et,Ot,Ct.data):e.texImage2D(n.TEXTURE_2D,Y,zt,Ct.width,Ct.height,0,Et,Ot,Ct.data)}else if(v.isDataArrayTexture)if(Xt){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,zt,lt.width,lt.height,lt.depth),D)if(v.layerUpdates.size>0){let Y=zh(lt.width,lt.height,v.format,v.type);for(let nt of v.layerUpdates){let vt=lt.data.subarray(nt*Y/lt.data.BYTES_PER_ELEMENT,(nt+1)*Y/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,lt.width,lt.height,1,Et,Ot,vt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Et,Ot,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,zt,lt.width,lt.height,lt.depth,0,Et,Ot,lt.data);else if(v.isData3DTexture)Xt?(de&&e.texStorage3D(n.TEXTURE_3D,_t,zt,lt.width,lt.height,lt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Et,Ot,lt.data)):e.texImage3D(n.TEXTURE_3D,0,zt,lt.width,lt.height,lt.depth,0,Et,Ot,lt.data);else if(v.isFramebufferTexture){if(de)if(Xt)e.texStorage2D(n.TEXTURE_2D,_t,zt,lt.width,lt.height);else{let Y=lt.width,nt=lt.height;for(let vt=0;vt<_t;vt++)e.texImage2D(n.TEXTURE_2D,vt,zt,Y,nt,0,Et,Ot,null),Y>>=1,nt>>=1}}else if(Kt.length>0){if(Xt&&de){let Y=bt(Kt[0]);e.texStorage2D(n.TEXTURE_2D,_t,zt,Y.width,Y.height)}for(let Y=0,nt=Kt.length;Y<nt;Y++)Ct=Kt[Y],Xt?D&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Et,Ot,Ct):e.texImage2D(n.TEXTURE_2D,Y,zt,Et,Ot,Ct);v.generateMipmaps=!1}else if(Xt){if(de){let Y=bt(lt);e.texStorage2D(n.TEXTURE_2D,_t,zt,Y.width,Y.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Ot,lt)}else e.texImage2D(n.TEXTURE_2D,0,zt,Et,Ot,lt);m(v)&&p($),ft.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function j(w,v,O){if(v.image.length!==6)return;let $=kt(w,v),et=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);let Z=i.get(et);if(et.version!==Z.__version||$===!0){e.activeTexture(n.TEXTURE0+O);let ft=ae.getPrimaries(ae.workingColorSpace),xt=v.colorSpace===fi?null:ae.getPrimaries(v.colorSpace),Mt=v.colorSpace===fi||ft===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Jt=v.isCompressedTexture||v.image[0].isCompressedTexture,lt=v.image[0]&&v.image[0].isDataTexture,Et=[];for(let nt=0;nt<6;nt++)!Jt&&!lt?Et[nt]=x(v.image[nt],!0,s.maxCubemapSize):Et[nt]=lt?v.image[nt].image:v.image[nt],Et[nt]=It(v,Et[nt]);let Ot=Et[0],zt=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type),Kt=M(v.internalFormat,zt,Ct,v.colorSpace),Xt=v.isVideoTexture!==!0,de=Z.__version===void 0||$===!0,D=et.dataReady,_t=L(v,Ot);Ft(n.TEXTURE_CUBE_MAP,v);let Y;if(Jt){Xt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Kt,Ot.width,Ot.height);for(let nt=0;nt<6;nt++){Y=Et[nt].mipmaps;for(let vt=0;vt<Y.length;vt++){let St=Y[vt];v.format!==An?zt!==null?Xt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,St.width,St.height,zt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Kt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,St.width,St.height,zt,Ct,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Kt,St.width,St.height,0,zt,Ct,St.data)}}}else{if(Y=v.mipmaps,Xt&&de){Y.length>0&&_t++;let nt=bt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Kt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(lt){Xt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Et[nt].width,Et[nt].height,zt,Ct,Et[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Kt,Et[nt].width,Et[nt].height,0,zt,Ct,Et[nt].data);for(let vt=0;vt<Y.length;vt++){let $t=Y[vt].image[nt].image;Xt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,$t.width,$t.height,zt,Ct,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Kt,$t.width,$t.height,0,zt,Ct,$t.data)}}else{Xt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,zt,Ct,Et[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Kt,zt,Ct,Et[nt]);for(let vt=0;vt<Y.length;vt++){let St=Y[vt];Xt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,zt,Ct,St.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Kt,zt,Ct,St.image[nt])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),Z.__version=et.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function mt(w,v,O,$,et,Z){let ft=r.convert(O.format,O.colorSpace),xt=r.convert(O.type),Mt=M(O.internalFormat,ft,xt,O.colorSpace),Jt=i.get(v),lt=i.get(O);if(lt.__renderTarget=v,!Jt.__hasExternalTextures){let Et=Math.max(1,v.width>>Z),Ot=Math.max(1,v.height>>Z);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,Mt,Et,Ot,v.depth,0,ft,xt,null):e.texImage2D(et,Z,Mt,Et,Ot,0,ft,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),yt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,et,lt.__webglTexture,0,K(v)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,et,lt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(w,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let $=v.depthTexture,et=$&&$.isDepthTexture?$.type:null,Z=_(v.stencilBuffer,et),ft=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=K(v);yt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,Z,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,w)}else{let $=v.textures;for(let et=0;et<$.length;et++){let Z=$[et],ft=r.convert(Z.format,Z.colorSpace),xt=r.convert(Z.type),Mt=M(Z.internalFormat,ft,xt,Z.colorSpace),Jt=K(v);O&&yt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt,Mt,v.width,v.height):yt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt,Mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);let et=$.__webglTexture,Z=K(v);if(v.depthTexture.format===_s)yt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(v.depthTexture.format===Es)yt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Pt(w){let v=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let et=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),v.__depthDisposeCallback=et}v.__boundDepthTexture=$}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),ot(v.__webglDepthbuffer[$],w,!1);else{let et=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ot(v.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(w,v,O){let $=i.get(w);v!==void 0&&mt($.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Pt(w)}function Wt(w){let v=w.texture,O=i.get(w),$=i.get(v);w.addEventListener("dispose",C);let et=w.textures,Z=w.isWebGLCubeRenderTarget===!0,ft=et.length>1;if(ft||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[xt]=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)O.__webglFramebuffer[xt][Mt]=n.createFramebuffer()}else O.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let xt=0;xt<v.mipmaps.length;xt++)O.__webglFramebuffer[xt]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ft)for(let xt=0,Mt=et.length;xt<Mt;xt++){let Jt=i.get(et[xt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&yt(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xt=0;xt<et.length;xt++){let Mt=et[xt];O.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[xt]);let Jt=r.convert(Mt.format,Mt.colorSpace),lt=r.convert(Mt.type),Et=M(Mt.internalFormat,Jt,lt,Mt.colorSpace,w.isXRRenderTarget===!0),Ot=K(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Et,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,O.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,v);for(let xt=0;xt<6;xt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)mt(O.__webglFramebuffer[xt][Mt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Mt);else mt(O.__webglFramebuffer[xt],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let xt=0,Mt=et.length;xt<Mt;xt++){let Jt=et[xt],lt=i.get(Jt);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),Ft(n.TEXTURE_2D,Jt),mt(O.__webglFramebuffer,w,Jt,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),m(Jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(xt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,$.__webglTexture),Ft(xt,v),v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)mt(O.__webglFramebuffer[Mt],w,v,n.COLOR_ATTACHMENT0,xt,Mt);else mt(O.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,xt,0);m(v)&&p(xt),e.unbindTexture()}w.depthBuffer&&Pt(w)}function X(w){let v=w.textures;for(let O=0,$=v.length;O<$;O++){let et=v[O];if(m(et)){let Z=E(w),ft=i.get(et).__webglTexture;e.bindTexture(Z,ft),p(Z),e.unbindTexture()}}}let rt=[],T=[];function gt(w){if(w.samples>0){if(yt(w)===!1){let v=w.textures,O=w.width,$=w.height,et=n.COLOR_BUFFER_BIT,Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(w),xt=v.length>1;if(xt)for(let Mt=0;Mt<v.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Mt=0;Mt<v.length;Mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[Mt]);let Jt=i.get(v[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Jt,0)}n.blitFramebuffer(0,0,O,$,0,0,O,$,et,n.NEAREST),l===!0&&(rt.length=0,T.length=0,rt.push(n.COLOR_ATTACHMENT0+Mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(rt.push(Z),T.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Mt=0;Mt<v.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,ft.__webglColorRenderbuffer[Mt]);let Jt=i.get(v[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function K(w){return Math.min(s.maxSamples,w.samples)}function yt(w){let v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function It(w,v){let O=w.colorSpace,$=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Rs&&O!==fi&&(ae.getTransfer(O)===ge?($!==An||et!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Nt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=yt}function ox(n,t){function e(i,s=fi){let r,o=ae.getTransfer(s);if(i===jn)return n.UNSIGNED_BYTE;if(i===hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qh)return n.BYTE;if(i===jh)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===cc)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===dn)return n.HALF_FLOAT;if(i===eu)return n.ALPHA;if(i===nu)return n.RGB;if(i===An)return n.RGBA;if(i===iu)return n.LUMINANCE;if(i===su)return n.LUMINANCE_ALPHA;if(i===_s)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===ru)return n.RED;if(i===dc)return n.RED_INTEGER;if(i===ou)return n.RG;if(i===fc)return n.RG_INTEGER;if(i===pc)return n.RGBA_INTEGER;if(i===Wr||i===Xr||i===$r||i===qr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===Za||i===Ja||i===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===ja||i===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qa||i===ja)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===el)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ul)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yr||i===ml||i===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yr)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===au||i===xl||i===_l||i===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ul=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ue=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},ax={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`,Fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new _n,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ee({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new Bi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends gi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Fl,m=e.getContextAttributes(),p=null,E=null,M=[],_=[],L=new tt,A=null,C=new Qe;C.viewport=new Pe;let P=new Qe;P.viewport=new Pe;let S=[C,P],y=new Ul,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=M[q];return j===void 0&&(j=new $s,M[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=M[q];return j===void 0&&(j=new $s,M[q]=j),j.getGripSpace()},this.getHand=function(q){let j=M[q];return j===void 0&&(j=new $s,M[q]=j),j.getHandSpace()};function N(q){let j=_.indexOf(q.inputSource);if(j===-1)return;let mt=M[j];mt!==void 0&&(mt.update(q.inputSource,q.frame,c||o),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",H);for(let q=0;q<M.length;q++){let j=_[q];j!==null&&(_[q]=null,M[q].disconnect(j))}R=null,k=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new He(f.framebufferWidth,f.framebufferHeight,{format:An,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,mt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Es:_s,mt=m.stencil?ws:Fi);let Rt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new He(d.textureWidth,d.textureHeight,{format:An,type:jn,depthTexture:new ao(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(q){for(let j=0;j<q.removed.length;j++){let mt=q.removed[j],ot=_.indexOf(mt);ot>=0&&(_[ot]=null,M[ot].disconnect(mt))}for(let j=0;j<q.added.length;j++){let mt=q.added[j],ot=_.indexOf(mt);if(ot===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=_.length){_.push(mt),ot=Pt;break}else if(_[Pt]===null){_[Pt]=mt,ot=Pt;break}if(ot===-1)break}let Rt=M[ot];Rt&&Rt.connect(mt)}}let B=new I,Q=new I;function V(q,j,mt){B.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(mt.matrixWorld);let ot=B.distanceTo(Q),Rt=j.projectionMatrix.elements,Pt=mt.projectionMatrix.elements,Nt=Rt[14]/(Rt[10]-1),Wt=Rt[14]/(Rt[10]+1),X=(Rt[9]+1)/Rt[5],rt=(Rt[9]-1)/Rt[5],T=(Rt[8]-1)/Rt[0],gt=(Pt[8]+1)/Pt[0],K=Nt*T,yt=Nt*gt,ct=ot/(-T+gt),It=ct*-T;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(It),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let bt=Nt+ct,w=Wt+ct,v=K-It,O=yt+(ot-It),$=X*Wt/w*bt,et=rt*Wt/w*bt;q.projectionMatrix.makePerspective(v,O,$,et,bt,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,mt=q.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(mt=x.depthFar)),y.near=P.near=C.near=j,y.far=P.far=C.far=mt,(R!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,k=y.far),C.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,y.layers.mask=C.layers.mask|P.layers.mask;let ot=q.parent,Rt=y.cameras;it(y,ot);for(let Pt=0;Pt<Rt.length;Pt++)it(Rt[Pt],ot);Rt.length===2?V(y,C,P):y.projectionMatrix.copy(C.projectionMatrix),st(q,y,ot)};function st(q,j,mt){mt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ks*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let dt=null;function Ft(q,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ot=!1;mt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Pt=0;Pt<mt.length;Pt++){let Nt=mt[Pt],Wt=null;if(f!==null)Wt=f.getViewport(Nt);else{let rt=u.getViewSubImage(d,Nt);Wt=rt.viewport,Pt===0&&(t.setRenderTargetTextures(E,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(E))}let X=S[Pt];X===void 0&&(X=new Qe,X.layers.enable(Pt),X.viewport=new Pe,S[Pt]=X),X.matrix.fromArray(Nt.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Nt.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Pt===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(X)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let Pt=u.getDepthInformation(mt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,s.renderState)}}for(let mt=0;mt<M.length;mt++){let ot=_[mt],Rt=M[mt];ot!==null&&Rt!==void 0&&Rt.update(ot,j,c||o)}dt&&dt(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let kt=new fu;kt.setAnimationLoop(Ft),this.setAnimationLoop=function(q){dt=q},this.dispose=function(){}}},Ci=new kn,hx=new Se;function ux(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,du(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),M=E.envMap,_=E.envMapRotation;M&&(m.envMap.value=M,Ci.copy(_),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let _=M.program;i.uniformBlockBinding(E,_)}function c(E,M){let _=s[E.id];_===void 0&&(g(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",m));let L=M.program;i.updateUBOMapping(E,L);let A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){let M=u();E.__bindingPointIndex=M;let _=n.createBuffer(),L=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let M=s[E.id],_=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,C=_.length;A<C;A++){let P=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,y=P.length;S<y;S++){let R=P[S];if(f(R,A,S,L)===!0){let k=R.__offset,N=Array.isArray(R.value)?R.value:[R.value],z=0;for(let H=0;H<N.length;H++){let B=N[H],Q=x(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,k+z,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,M,_,L){let A=E.value,C=M+"_"+_;if(L[C]===void 0)return typeof A=="number"||typeof A=="boolean"?L[C]=A:L[C]=A.clone(),!0;{let P=L[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){let M=E.uniforms,_=0,L=16;for(let C=0,P=M.length;C<P;C++){let S=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,R=S.length;y<R;y++){let k=S[y],N=Array.isArray(k.value)?k.value:[k.value];for(let z=0,H=N.length;z<H;z++){let B=N[z],Q=x(B),V=_%L,it=V%Q.boundary,st=V+it;_+=it,st!==0&&L-st<Q.storage&&(_+=L-st),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=Q.storage}}}let A=_%L;return A>0&&(_+=L-A),E.__size=_,E.__cache={},this}function x(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){let M=E.target;M.removeEventListener("dispose",m);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var er=class{constructor(t={}){let{canvas:e=xf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=pi,this.toneMappingExposure=1;let _=this,L=!1,A=0,C=0,P=null,S=-1,y=null,R=new Pe,k=new Pe,N=null,z=new ee(0),H=0,B=e.width,Q=e.height,V=1,it=null,st=null,dt=new Pe(0,0,B,Q),Ft=new Pe(0,0,B,Q),kt=!1,q=new tr,j=!1,mt=!1,ot=new Se,Rt=new Se,Pt=new I,Nt=new Pe,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},X=!1;function rt(){return P===null?V:1}let T=i;function gt(b,U){return e.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nc}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",St,!1),T===null){let U="webgl2";if(T=gt(U,b),T===null)throw gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let K,yt,ct,It,bt,w,v,O,$,et,Z,ft,xt,Mt,Jt,lt,Et,Ot,zt,Ct,Kt,Xt,de,D;function _t(){K=new C0(T),K.init(),Xt=new ox(T,K),yt=new b0(T,K,t,Xt),ct=new ix(T,K),yt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),It=new I0(T),bt=new Wg,w=new rx(T,K,ct,bt,yt,Xt,It),v=new w0(_),O=new A0(_),$=new Bf(T),de=new y0(T,$),et=new R0(T,$,It,de),Z=new D0(T,et,$,It),zt=new L0(T,yt,w),lt=new S0(bt),ft=new Gg(_,v,O,K,yt,de,lt),xt=new ux(_,bt),Mt=new $g,Jt=new Qg(K),Ot=new v0(_,v,O,ct,Z,f,l),Et=new ex(_,Z,yt),D=new dx(T,It,yt,ct),Ct=new M0(T,K,It),Kt=new P0(T,K,It),It.programs=ft.programs,_.capabilities=yt,_.extensions=K,_.properties=bt,_.renderLists=Mt,_.shadowMap=Et,_.state=ct,_.info=It}_t();let Y=new Nl(_,T);this.xr=Y,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let b=K.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=K.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(B,Q,!1))},this.getSize=function(b){return b.set(B,Q)},this.setSize=function(b,U,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,Q=U,e.width=Math.floor(b*V),e.height=Math.floor(U*V),G===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(B*V,Q*V).floor()},this.setDrawingBufferSize=function(b,U,G){B=b,Q=U,V=G,e.width=Math.floor(b*G),e.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(dt)},this.setViewport=function(b,U,G,W){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,U,G,W),ct.viewport(R.copy(dt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,U,G,W){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,U,G,W),ct.scissor(k.copy(Ft).multiplyScalar(V).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(b){ct.setScissorTest(kt=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(b=!0,U=!0,G=!0){let W=0;if(b){let F=!1;if(P!==null){let ht=P.texture.format;F=ht===pc||ht===fc||ht===dc}if(F){let ht=P.texture.type,ut=ht===jn||ht===Fi||ht===Js||ht===ws||ht===hc||ht===uc,Lt=Ot.getClearColor(),At=Ot.getClearAlpha(),Vt=Lt.r,qt=Lt.g,Ut=Lt.b;ut?(g[0]=Vt,g[1]=qt,g[2]=Ut,g[3]=At,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=Vt,x[1]=qt,x[2]=Ut,x[3]=At,T.clearBufferiv(T.COLOR,0,x))}else W|=T.COLOR_BUFFER_BIT}U&&(W|=T.DEPTH_BUFFER_BIT),G&&(W|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Mt.dispose(),Jt.dispose(),bt.dispose(),v.dispose(),O.dispose(),Z.dispose(),de.dispose(),D.dispose(),ft.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Yt),Y.removeEventListener("sessionend",ne),Tt.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let b=It.autoReset,U=Et.enabled,G=Et.autoUpdate,W=Et.needsUpdate,F=Et.type;_t(),It.autoReset=b,Et.enabled=U,Et.autoUpdate=G,Et.needsUpdate=W,Et.type=F}function St(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $t(b){let U=b.target;U.removeEventListener("dispose",$t),ve(U)}function ve(b){J(b),bt.remove(b)}function J(b){let U=bt.get(b).programs;U!==void 0&&(U.forEach(function(G){ft.releaseProgram(G)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,W,F,ht){U===null&&(U=Wt);let ut=F.isMesh&&F.matrixWorld.determinant()<0,Lt=Xe(b,U,G,W,F);ct.setMaterial(W,ut);let At=G.index,Vt=1;if(W.wireframe===!0){if(At=et.getWireframeAttribute(G),At===void 0)return;Vt=2}let qt=G.drawRange,Ut=G.attributes.position,oe=qt.start*Vt,ye=(qt.start+qt.count)*Vt;ht!==null&&(oe=Math.max(oe,ht.start*Vt),ye=Math.min(ye,(ht.start+ht.count)*Vt)),At!==null?(oe=Math.max(oe,0),ye=Math.min(ye,At.count)):Ut!=null&&(oe=Math.max(oe,0),ye=Math.min(ye,Ut.count));let Me=ye-oe;if(Me<0||Me===1/0)return;de.setup(F,W,Lt,G,At);let nn,pe=Ct;if(At!==null&&(nn=$.get(At),pe=Kt,pe.setIndex(nn)),F.isMesh)W.wireframe===!0?(ct.setLineWidth(W.wireframeLinewidth*rt()),pe.setMode(T.LINES)):pe.setMode(T.TRIANGLES);else if(F.isLine){let Bt=W.linewidth;Bt===void 0&&(Bt=1),ct.setLineWidth(Bt*rt()),F.isLineSegments?pe.setMode(T.LINES):F.isLineLoop?pe.setMode(T.LINE_LOOP):pe.setMode(T.LINE_STRIP)}else F.isPoints?pe.setMode(T.POINTS):F.isSprite&&pe.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)pe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))pe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Bt=F._multiDrawStarts,Gn=F._multiDrawCounts,me=F._multiDrawCount,bn=At?$.get(At).bytesPerElement:1,ji=bt.get(W).currentProgram.getUniforms();for(let cn=0;cn<me;cn++)ji.setValue(T,"_gl_DrawID",cn),pe.render(Bt[cn]/bn,Gn[cn])}else if(F.isInstancedMesh)pe.renderInstances(oe,Me,F.count);else if(G.isInstancedBufferGeometry){let Bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Gn=Math.min(G.instanceCount,Bt);pe.renderInstances(oe,Me,Gn)}else pe.render(oe,Me)};function pt(b,U,G){b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,se(b,U,G),b.side=mi,b.needsUpdate=!0,se(b,U,G),b.side=sn):se(b,U,G)}this.compile=function(b,U,G=null){G===null&&(G=b),p=Jt.get(G),p.init(U),M.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==G&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let W=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ht=F.material;if(ht)if(Array.isArray(ht))for(let ut=0;ut<ht.length;ut++){let Lt=ht[ut];pt(Lt,G,F),W.add(Lt)}else pt(ht,G,F),W.add(ht)}),M.pop(),p=null,W},this.compileAsync=function(b,U,G=null){let W=this.compile(b,U,G);return new Promise(F=>{function ht(){if(W.forEach(function(ut){bt.get(ut).currentProgram.isReady()&&W.delete(ut)}),W.size===0){F(b);return}setTimeout(ht,10)}K.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Dt=null;function Ht(b){Dt&&Dt(b)}function Yt(){Tt.stop()}function ne(){Tt.start()}let Tt=new fu;Tt.setAnimationLoop(Ht),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(b){Dt=b,Y.setAnimationLoop(b),b===null?Tt.stop():Tt.start()},Y.addEventListener("sessionstart",Yt),Y.addEventListener("sessionend",ne),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,P),p=Jt.get(b,M.length),p.init(U),M.push(p),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Rt),mt=this.localClippingEnabled,j=lt.init(this.clippingPlanes,mt),m=Mt.get(b,E.length),m.init(),E.push(m),Y.enabled===!0&&Y.isPresenting===!0){let ht=_.xr.getDepthSensingMesh();ht!==null&&re(ht,U,-1/0,_.sortObjects)}re(b,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(it,st),X=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,X&&Ot.addToRenderList(m,b),this.info.render.frame++,j===!0&&lt.beginShadows();let G=p.state.shadowsArray;Et.render(G,b,U),j===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){let ht=U.cameras;if(F.length>0)for(let ut=0,Lt=ht.length;ut<Lt;ut++){let At=ht[ut];fe(W,F,b,At)}X&&Ot.render(b);for(let ut=0,Lt=ht.length;ut<Lt;ut++){let At=ht[ut];Qt(m,b,At,At.viewport)}}else F.length>0&&fe(W,F,b,U),X&&Ot.render(b),Qt(m,b,U);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(_,b,U),de.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],j===!0&&lt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function re(b,U,G,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){W&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Rt);let ut=Z.update(b),Lt=b.material;Lt.visible&&m.push(b,ut,Lt,G,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){let ut=Z.update(b),Lt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Nt.copy(ut.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(Rt)),Array.isArray(Lt)){let At=ut.groups;for(let Vt=0,qt=At.length;Vt<qt;Vt++){let Ut=At[Vt],oe=Lt[Ut.materialIndex];oe&&oe.visible&&m.push(b,ut,oe,G,Nt.z,Ut)}}else Lt.visible&&m.push(b,ut,Lt,G,Nt.z,null)}}let ht=b.children;for(let ut=0,Lt=ht.length;ut<Lt;ut++)re(ht[ut],U,G,W)}function Qt(b,U,G,W){let F=b.opaque,ht=b.transmissive,ut=b.transparent;p.setupLightsView(G),j===!0&&lt.setGlobalState(_.clippingPlanes,G),W&&ct.viewport(R.copy(W)),F.length>0&&Ae(F,U,G),ht.length>0&&Ae(ht,U,G),ut.length>0&&Ae(ut,U,G),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function fe(b,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new He(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?dn:jn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let ht=p.state.transmissionRenderTarget[W.id],ut=W.viewport||R;ht.setSize(ut.z,ut.w);let Lt=_.getRenderTarget();_.setRenderTarget(ht),_.getClearColor(z),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),X&&Ot.render(G);let At=_.toneMapping;_.toneMapping=pi;let Vt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),j===!0&&lt.setGlobalState(_.clippingPlanes,W),Ae(b,G,W),w.updateMultisampleRenderTarget(ht),w.updateRenderTargetMipmap(ht),K.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ut=0,oe=U.length;Ut<oe;Ut++){let ye=U[Ut],Me=ye.object,nn=ye.geometry,pe=ye.material,Bt=ye.group;if(pe.side===sn&&Me.layers.test(W.layers)){let Gn=pe.side;pe.side=rn,pe.needsUpdate=!0,Ie(Me,G,W,nn,pe,Bt),pe.side=Gn,pe.needsUpdate=!0,qt=!0}}qt===!0&&(w.updateMultisampleRenderTarget(ht),w.updateRenderTargetMipmap(ht))}_.setRenderTarget(Lt),_.setClearColor(z,H),Vt!==void 0&&(W.viewport=Vt),_.toneMapping=At}function Ae(b,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ht=b.length;F<ht;F++){let ut=b[F],Lt=ut.object,At=ut.geometry,Vt=W===null?ut.material:W,qt=ut.group;Lt.layers.test(G.layers)&&Ie(Lt,U,G,At,Vt,qt)}}function Ie(b,U,G,W,F,ht){b.onBeforeRender(_,U,G,W,F,ht),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(_,U,G,W,b,ht),F.transparent===!0&&F.side===sn&&F.forceSinglePass===!1?(F.side=rn,F.needsUpdate=!0,_.renderBufferDirect(G,U,W,F,b,ht),F.side=mi,F.needsUpdate=!0,_.renderBufferDirect(G,U,W,F,b,ht),F.side=sn):_.renderBufferDirect(G,U,W,F,b,ht),b.onAfterRender(_,U,G,W,F,ht)}function se(b,U,G){U.isScene!==!0&&(U=Wt);let W=bt.get(b),F=p.state.lights,ht=p.state.shadowsArray,ut=F.state.version,Lt=ft.getParameters(b,F.state,ht,U,G),At=ft.getProgramCacheKey(Lt),Vt=W.programs;W.environment=b.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(b.isMeshStandardMaterial?O:v).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",$t),Vt=new Map,W.programs=Vt);let qt=Vt.get(At);if(qt!==void 0){if(W.currentProgram===qt&&W.lightsStateVersion===ut)return De(b,Lt),qt}else Lt.uniforms=ft.getUniforms(b),b.onBeforeCompile(Lt,_),qt=ft.acquireProgram(Lt,At),Vt.set(At,qt),W.uniforms=Lt.uniforms;let Ut=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=lt.uniform),De(b,Lt),W.needsLights=_r(b),W.lightsStateVersion=ut,W.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=qt,W.uniformsList=null,qt}function Ce(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=ys.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function De(b,U){let G=bt.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Xe(b,U,G,W,F){U.isScene!==!0&&(U=Wt),w.resetTextureUnits();let ht=U.fog,ut=W.isMeshStandardMaterial?U.environment:null,Lt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Rs,At=(W.isMeshStandardMaterial?O:v).get(W.envMap||ut),Vt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!G.morphAttributes.position,oe=!!G.morphAttributes.normal,ye=!!G.morphAttributes.color,Me=pi;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Me=_.toneMapping);let nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=nn!==void 0?nn.length:0,Bt=bt.get(W),Gn=p.state.lights;if(j===!0&&(mt===!0||b!==y)){let pn=b===y&&W.id===S;lt.setState(W,b,pn)}let me=!1;W.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Gn.state.version||Bt.outputColorSpace!==Lt||F.isBatchedMesh&&Bt.batching===!1||!F.isBatchedMesh&&Bt.batching===!0||F.isBatchedMesh&&Bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Bt.instancing===!1||!F.isInstancedMesh&&Bt.instancing===!0||F.isSkinnedMesh&&Bt.skinning===!1||!F.isSkinnedMesh&&Bt.skinning===!0||F.isInstancedMesh&&Bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Bt.instancingMorph===!1&&F.morphTexture!==null||Bt.envMap!==At||W.fog===!0&&Bt.fog!==ht||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==lt.numPlanes||Bt.numIntersection!==lt.numIntersection)||Bt.vertexAlphas!==Vt||Bt.vertexTangents!==qt||Bt.morphTargets!==Ut||Bt.morphNormals!==oe||Bt.morphColors!==ye||Bt.toneMapping!==Me||Bt.morphTargetsCount!==pe)&&(me=!0):(me=!0,Bt.__version=W.version);let bn=Bt.currentProgram;me===!0&&(bn=se(W,U,F));let ji=!1,cn=!1,Ns=!1,be=bn.getUniforms(),Nn=Bt.uniforms;if(ct.useProgram(bn.program)&&(ji=!0,cn=!0,Ns=!0),W.id!==S&&(S=W.id,cn=!0),ji||y!==b){ct.buffers.depth.getReversed()?(ot.copy(b.projectionMatrix),vf(ot),yf(ot),be.setValue(T,"projectionMatrix",ot)):be.setValue(T,"projectionMatrix",b.projectionMatrix),be.setValue(T,"viewMatrix",b.matrixWorldInverse);let ri=be.map.cameraPosition;ri!==void 0&&ri.setValue(T,Pt.setFromMatrixPosition(b.matrixWorld)),yt.logarithmicDepthBuffer&&be.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&be.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,cn=!0,Ns=!0)}if(F.isSkinnedMesh){be.setOptional(T,F,"bindMatrix"),be.setOptional(T,F,"bindMatrixInverse");let pn=F.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),be.setValue(T,"boneTexture",pn.boneTexture,w))}F.isBatchedMesh&&(be.setOptional(T,F,"batchingTexture"),be.setValue(T,"batchingTexture",F._matricesTexture,w),be.setOptional(T,F,"batchingIdTexture"),be.setValue(T,"batchingIdTexture",F._indirectTexture,w),be.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&be.setValue(T,"batchingColorTexture",F._colorsTexture,w));let Os=G.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&zt.update(F,G,bn),(cn||Bt.receiveShadow!==F.receiveShadow)&&(Bt.receiveShadow=F.receiveShadow,be.setValue(T,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Nn.envMap.value=At,Nn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Nn.envMapIntensity.value=U.environmentIntensity),cn&&(be.setValue(T,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&Qi(Nn,Ns),ht&&W.fog===!0&&xt.refreshFogUniforms(Nn,ht),xt.refreshMaterialUniforms(Nn,W,V,Q,p.state.transmissionRenderTarget[b.id]),ys.upload(T,Ce(Bt),Nn,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ys.upload(T,Ce(Bt),Nn,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&be.setValue(T,"center",F.center),be.setValue(T,"modelViewMatrix",F.modelViewMatrix),be.setValue(T,"normalMatrix",F.normalMatrix),be.setValue(T,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let pn=W.uniformsGroups;for(let ri=0,oi=pn.length;ri<oi;ri++){let zc=pn[ri];D.update(zc,bn),D.bind(zc,bn)}}return bn}function Qi(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function _r(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,U,G){bt.get(b.texture).__webglTexture=U,bt.get(b.depthTexture).__webglTexture=G;let W=bt.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let G=bt.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,G=0){P=b,A=U,C=G;let W=!0,F=null,ht=!1,ut=!1;if(b){let At=bt.get(b);if(At.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(T.FRAMEBUFFER,null),W=!1;else if(At.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(At.__hasExternalTextures)w.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ut=b.depthTexture;if(At.__boundDepthTexture!==Ut){if(Ut!==null&&bt.has(Ut)&&(b.width!==Ut.image.width||b.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}let Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(ut=!0);let qt=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qt[U])?F=qt[U][G]:F=qt[U],ht=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?F=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(qt)?F=qt[G]:F=qt,R.copy(b.viewport),k.copy(b.scissor),N=b.scissorTest}else R.copy(dt).multiplyScalar(V).floor(),k.copy(Ft).multiplyScalar(V).floor(),N=kt;if(ct.bindFramebuffer(T.FRAMEBUFFER,F)&&W&&ct.drawBuffers(b,F),ct.viewport(R),ct.scissor(k),ct.setScissorTest(N),ht){let At=bt.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,G)}else if(ut){let At=bt.get(b.texture),Vt=U||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.__webglTexture,G||0,Vt)}S=-1},this.readRenderTargetPixels=function(b,U,G,W,F,ht,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(Lt=Lt[ut]),Lt){ct.bindFramebuffer(T.FRAMEBUFFER,Lt);try{let At=b.texture,Vt=At.format,qt=At.type;if(!yt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&G>=0&&G<=b.height-F&&T.readPixels(U,G,W,F,Xt.convert(Vt),Xt.convert(qt),ht)}finally{let At=P!==null?bt.get(P).__webglFramebuffer:null;ct.bindFramebuffer(T.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,U,G,W,F,ht,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(Lt=Lt[ut]),Lt){let At=b.texture,Vt=At.format,qt=At.type;if(!yt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-W&&G>=0&&G<=b.height-F){ct.bindFramebuffer(T.FRAMEBUFFER,Lt);let Ut=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.bufferData(T.PIXEL_PACK_BUFFER,ht.byteLength,T.STREAM_READ),T.readPixels(U,G,W,F,Xt.convert(Vt),Xt.convert(qt),0);let oe=P!==null?bt.get(P).__webglFramebuffer:null;ct.bindFramebuffer(T.FRAMEBUFFER,oe);let ye=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await _f(T,ye,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ht),T.deleteBuffer(Ut),T.deleteSync(ye),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,G=0){b.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let W=Math.pow(2,-G),F=Math.floor(b.image.width*W),ht=Math.floor(b.image.height*W),ut=U!==null?U.x:0,Lt=U!==null?U.y:0;w.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,G,0,0,ut,Lt,F,ht),ct.unbindTexture()},this.copyTextureToTexture=function(b,U,G=null,W=null,F=0){b.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let ht,ut,Lt,At,Vt,qt,Ut,oe,ye,Me=b.isCompressedTexture?b.mipmaps[F]:b.image;G!==null?(ht=G.max.x-G.min.x,ut=G.max.y-G.min.y,Lt=G.isBox3?G.max.z-G.min.z:1,At=G.min.x,Vt=G.min.y,qt=G.isBox3?G.min.z:0):(ht=Me.width,ut=Me.height,Lt=Me.depth||1,At=0,Vt=0,qt=0),W!==null?(Ut=W.x,oe=W.y,ye=W.z):(Ut=0,oe=0,ye=0);let nn=Xt.convert(U.format),pe=Xt.convert(U.type),Bt;U.isData3DTexture?(w.setTexture3D(U,0),Bt=T.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Bt=T.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Bt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);let Gn=T.getParameter(T.UNPACK_ROW_LENGTH),me=T.getParameter(T.UNPACK_IMAGE_HEIGHT),bn=T.getParameter(T.UNPACK_SKIP_PIXELS),ji=T.getParameter(T.UNPACK_SKIP_ROWS),cn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Me.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Me.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,At),T.pixelStorei(T.UNPACK_SKIP_ROWS,Vt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,qt);let Ns=b.isDataArrayTexture||b.isData3DTexture,be=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Nn=bt.get(b),Os=bt.get(U),pn=bt.get(Nn.__renderTarget),ri=bt.get(Os.__renderTarget);ct.bindFramebuffer(T.READ_FRAMEBUFFER,pn.__webglFramebuffer),ct.bindFramebuffer(T.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<Lt;oi++)Ns&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,bt.get(b).__webglTexture,F,qt+oi),b.isDepthTexture?(be&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,F,ye+oi),T.blitFramebuffer(At,Vt,ht,ut,Ut,oe,ht,ut,T.DEPTH_BUFFER_BIT,T.NEAREST)):be?T.copyTexSubImage3D(Bt,F,Ut,oe,ye+oi,At,Vt,ht,ut):T.copyTexSubImage2D(Bt,F,Ut,oe,ye+oi,At,Vt,ht,ut);ct.bindFramebuffer(T.READ_FRAMEBUFFER,null),ct.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else be?b.isDataTexture||b.isData3DTexture?T.texSubImage3D(Bt,F,Ut,oe,ye,ht,ut,Lt,nn,pe,Me.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(Bt,F,Ut,oe,ye,ht,ut,Lt,nn,Me.data):T.texSubImage3D(Bt,F,Ut,oe,ye,ht,ut,Lt,nn,pe,Me):b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,F,Ut,oe,ht,ut,nn,pe,Me.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,F,Ut,oe,Me.width,Me.height,nn,Me.data):T.texSubImage2D(T.TEXTURE_2D,F,Ut,oe,ht,ut,nn,pe,Me);T.pixelStorei(T.UNPACK_ROW_LENGTH,Gn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,me),T.pixelStorei(T.UNPACK_SKIP_PIXELS,bn),T.pixelStorei(T.UNPACK_SKIP_ROWS,ji),T.pixelStorei(T.UNPACK_SKIP_IMAGES,cn),F===0&&U.generateMipmaps&&T.generateMipmap(Bt),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,U,G=null,W=null,F=0){return b.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,b=arguments[2],U=arguments[3],F=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,G,W,F)},this.initRenderTarget=function(b){bt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var nr=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new tt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new I,s=[],r=[],o=[],a=new I,l=new Se;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ir=class extends vn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ol=class extends ir{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var kr=new I,Ia=new xc,La=new xc,Da=new xc,sr=class extends vn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(kr.subVectors(s[0],s[1]).add(s[0]),c=kr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ia.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),La.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Da.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),La.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Da.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Ia.calc(l),La.calc(l),Da.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function kh(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function fx(n,t){let e=1-n;return e*e*t}function px(n,t){return 2*(1-n)*n*t}function mx(n,t){return n*n*t}function qs(n,t,e,i){return fx(n,t)+px(n,e)+mx(n,i)}function gx(n,t){let e=1-n;return e*e*e*t}function xx(n,t){let e=1-n;return 3*e*e*n*t}function _x(n,t){return 3*(1-n)*n*n*t}function vx(n,t){return n*n*n*t}function Ys(n,t,e,i,s){return gx(n,t)+xx(n,e)+_x(n,i)+vx(n,s)}var lo=class extends vn{constructor(t=new tt,e=new tt,i=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new tt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bl=class extends vn{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y),Ys(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},co=class extends vn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zl=class extends vn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends vn{constructor(t=new tt,e=new tt,i=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new tt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(qs(t,s.x,r.x,o.x),qs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends vn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(qs(t,s.x,r.x,o.x),qs(t,s.y,r.y,o.y),qs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(kh(a,l.x,c.x,h.x,u.x),kh(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},po=Object.freeze({__proto__:null,ArcCurve:Ol,CatmullRomCurve3:sr,CubicBezierCurve:lo,CubicBezierCurve3:Bl,EllipseCurve:ir,LineCurve:co,LineCurve3:zl,QuadraticBezierCurve:ho,QuadraticBezierCurve3:uo,SplineCurve:fo}),kl=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new po[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new po[s.type]().fromJSON(s))}return this}},zi=class extends kl{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new co(this.currentPoint.clone(),new tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ho(this.currentPoint.clone(),new tt(t,e),new tt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new lo(this.currentPoint.clone(),new tt(t,e),new tt(i,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new fo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new ir(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ki=class n extends Ve{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,d=new tt,f=new I,g=new I,x=new I,m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let E=0;E<=e;E++){let M=i+E*h*s,_=Math.sin(M),L=Math.cos(M);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*_,u.y=t[A].y,u.z=t[A].x*L,o.push(u.x,u.y,u.z),d.x=E/e,d.y=A/(t.length-1),a.push(d.x,d.y);let C=l[3*A+0]*_,P=l[3*A+1],S=l[3*A+0]*L;c.push(C,P,S)}}for(let E=0;E<e;E++)for(let M=0;M<t.length-1;M++){let _=M+E*t.length,L=_,A=_+t.length,C=_+t.length+1,P=_+1;r.push(L,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},mo=class n extends ki{constructor(t=1,e=1,i=4,s=8){let r=new zi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},Hi=class n extends Ve{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vi=class n extends Ve{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function E(){let _=new I,L=new I,A=0,C=(e-t)/i;for(let P=0;P<=r;P++){let S=[],y=P/r,R=y*(e-t)+t;for(let k=0;k<=s;k++){let N=k/s,z=N*l+a,H=Math.sin(z),B=Math.cos(z);L.x=R*H,L.y=-y*i+m,L.z=R*B,u.push(L.x,L.y,L.z),_.set(H,C,B).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-y),S.push(g++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let y=x[S][P],R=x[S+1][P],k=x[S+1][P+1],N=x[S][P+1];(t>0||S!==0)&&(h.push(y,R,N),A+=3),(e>0||S!==r-1)&&(h.push(R,k,N),A+=3)}c.addGroup(p,A,0),p+=A}function M(_){let L=g,A=new tt,C=new I,P=0,S=_===!0?t:e,y=_===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let R=g;for(let k=0;k<=s;k++){let z=k/s*l+a,H=Math.cos(z),B=Math.sin(z);C.x=S*B,C.y=m*y,C.z=S*H,u.push(C.x,C.y,C.z),d.push(0,y,0),A.x=H*.5+.5,A.y=B*.5*y+.5,f.push(A.x,A.y),g++}for(let k=0;k<s;k++){let N=L+k,z=R+k;_===!0?h.push(z,z+1,N):h.push(z+1,z,N),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var rr=class extends zi{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new zi().fromJSON(s))}return this}},yx={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=_u(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=Ex(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return or(r,o,e,a,l,f,0),o}};function _u(n,t,e,i,s){let r,o;if(s===Nx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Hh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Hh(r,n[r],n[r+1],o);return o&&Co(o,o.next)&&(lr(o),o=o.next),o}function Gi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Co(e,e.next)||Re(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function or(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Px(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?bx(n,i,s,r):Mx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),lr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Sx(Gi(n),t,e),or(n,t,e,i,s,r,2)):o===2&&wx(n,t,e,i,s,r):or(Gi(n),t,e,i,s,r,1);break}}}function Mx(n){let t=n.prev,e=n,i=n.next;if(Re(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&gs(s,a,r,l,o,c,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Re(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Hl(f,g,t,e,i),E=Hl(x,m,t,e,i),M=n.prevZ,_=n.nextZ;for(;M&&M.z>=p&&_&&_.z<=E;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&gs(a,h,l,u,c,d,M.x,M.y)&&Re(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&gs(a,h,l,u,c,d,_.x,_.y)&&Re(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&gs(a,h,l,u,c,d,M.x,M.y)&&Re(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=E;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&gs(a,h,l,u,c,d,_.x,_.y)&&Re(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Sx(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Co(s,r)&&vu(s,i,i.next,r)&&ar(s,r)&&ar(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),lr(i),lr(i.next),i=n=r),i=i.next}while(i!==n);return Gi(i)}function wx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dx(o,a)){let l=yu(o,a);o=Gi(o,o.next),l=Gi(l,l.next),or(o,t,e,i,s,r,0),or(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ex(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=_u(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Lx(c));for(s.sort(Tx),r=0;r<s.length;r++)e=Ax(s[r],e);return e}function Tx(n,t){return n.x-t.x}function Ax(n,t){let e=Cx(n,t);if(!e)return t;let i=yu(e,n);return Gi(i,i.next),Gi(e,e.next)}function Cx(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ar(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Rx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Rx(n,t){return Re(n.prev,n,t.prev)<0&&Re(t.next,n,n.next)<0}function Px(n,t,e,i){let s=n;do s.z===0&&(s.z=Hl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ix(s)}function Ix(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Hl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Lx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function gs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Dx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ux(n,t)&&(ar(n,t)&&ar(t,n)&&Fx(n,t)&&(Re(n.prev,n,t.prev)||Re(n,t.prev,t))||Co(n,t)&&Re(n.prev,n,n.next)>0&&Re(t.prev,t,t.next)>0)}function Re(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Co(n,t){return n.x===t.x&&n.y===t.y}function vu(n,t,e,i){let s=Vr(Re(n,t,e)),r=Vr(Re(n,t,i)),o=Vr(Re(e,i,n)),a=Vr(Re(e,i,t));return!!(s!==r&&o!==a||s===0&&Hr(n,e,t)||r===0&&Hr(n,i,t)||o===0&&Hr(e,n,i)||a===0&&Hr(e,t,i))}function Hr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Vr(n){return n>0?1:n<0?-1:0}function Ux(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&vu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ar(n,t){return Re(n.prev,n,n.next)<0?Re(n,t,n.next)>=0&&Re(n,n.prev,t)>=0:Re(n,t,n.prev)<0||Re(n,n.next,t)<0}function Fx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function yu(n,t){let e=new Vl(n.i,n.x,n.y),i=new Vl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Hh(n,t,e,i){let s=new Vl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Zs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Vh(t),Gh(i,t);let o=t.length;e.forEach(Vh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Gh(i,e[l]);let a=yx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vh(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Gh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var go=class n extends Ve{constructor(t=new rr([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Ox,M,_=!1,L,A,C,P;p&&(M=p.getSpacedPoints(h),_=!0,d=!1,L=p.computeFrenetFrames(h,!1),A=new I,C=new I,P=new I),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(c),y=S.shape,R=S.holes;if(!Zs.isClockWise(y)){y=y.reverse();for(let X=0,rt=R.length;X<rt;X++){let T=R[X];Zs.isClockWise(T)&&(R[X]=T.reverse())}}let N=Zs.triangulateShape(y,R),z=y;for(let X=0,rt=R.length;X<rt;X++){let T=R[X];y=y.concat(T)}function H(X,rt,T){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(rt,T)}let B=y.length,Q=N.length;function V(X,rt,T){let gt,K,yt,ct=X.x-rt.x,It=X.y-rt.y,bt=T.x-X.x,w=T.y-X.y,v=ct*ct+It*It,O=ct*w-It*bt;if(Math.abs(O)>Number.EPSILON){let $=Math.sqrt(v),et=Math.sqrt(bt*bt+w*w),Z=rt.x-It/$,ft=rt.y+ct/$,xt=T.x-w/et,Mt=T.y+bt/et,Jt=((xt-Z)*w-(Mt-ft)*bt)/(ct*w-It*bt);gt=Z+ct*Jt-X.x,K=ft+It*Jt-X.y;let lt=gt*gt+K*K;if(lt<=2)return new tt(gt,K);yt=Math.sqrt(lt/2)}else{let $=!1;ct>Number.EPSILON?bt>Number.EPSILON&&($=!0):ct<-Number.EPSILON?bt<-Number.EPSILON&&($=!0):Math.sign(It)===Math.sign(w)&&($=!0),$?(gt=-It,K=ct,yt=Math.sqrt(v)):(gt=ct,K=It,yt=Math.sqrt(v/2))}return new tt(gt/yt,K/yt)}let it=[];for(let X=0,rt=z.length,T=rt-1,gt=X+1;X<rt;X++,T++,gt++)T===rt&&(T=0),gt===rt&&(gt=0),it[X]=V(z[X],z[T],z[gt]);let st=[],dt,Ft=it.concat();for(let X=0,rt=R.length;X<rt;X++){let T=R[X];dt=[];for(let gt=0,K=T.length,yt=K-1,ct=gt+1;gt<K;gt++,yt++,ct++)yt===K&&(yt=0),ct===K&&(ct=0),dt[gt]=V(T[gt],T[yt],T[ct]);st.push(dt),Ft=Ft.concat(dt)}for(let X=0;X<m;X++){let rt=X/m,T=f*Math.cos(rt*Math.PI/2),gt=g*Math.sin(rt*Math.PI/2)+x;for(let K=0,yt=z.length;K<yt;K++){let ct=H(z[K],it[K],gt);ot(ct.x,ct.y,-T)}for(let K=0,yt=R.length;K<yt;K++){let ct=R[K];dt=st[K];for(let It=0,bt=ct.length;It<bt;It++){let w=H(ct[It],dt[It],gt);ot(w.x,w.y,-T)}}}let kt=g+x;for(let X=0;X<B;X++){let rt=d?H(y[X],Ft[X],kt):y[X];_?(C.copy(L.normals[0]).multiplyScalar(rt.x),A.copy(L.binormals[0]).multiplyScalar(rt.y),P.copy(M[0]).add(C).add(A),ot(P.x,P.y,P.z)):ot(rt.x,rt.y,0)}for(let X=1;X<=h;X++)for(let rt=0;rt<B;rt++){let T=d?H(y[rt],Ft[rt],kt):y[rt];_?(C.copy(L.normals[X]).multiplyScalar(T.x),A.copy(L.binormals[X]).multiplyScalar(T.y),P.copy(M[X]).add(C).add(A),ot(P.x,P.y,P.z)):ot(T.x,T.y,u/h*X)}for(let X=m-1;X>=0;X--){let rt=X/m,T=f*Math.cos(rt*Math.PI/2),gt=g*Math.sin(rt*Math.PI/2)+x;for(let K=0,yt=z.length;K<yt;K++){let ct=H(z[K],it[K],gt);ot(ct.x,ct.y,u+T)}for(let K=0,yt=R.length;K<yt;K++){let ct=R[K];dt=st[K];for(let It=0,bt=ct.length;It<bt;It++){let w=H(ct[It],dt[It],gt);_?ot(w.x,w.y+M[h-1].y,M[h-1].x+T):ot(w.x,w.y,u+T)}}}q(),j();function q(){let X=s.length/3;if(d){let rt=0,T=B*rt;for(let gt=0;gt<Q;gt++){let K=N[gt];Rt(K[2]+T,K[1]+T,K[0]+T)}rt=h+m*2,T=B*rt;for(let gt=0;gt<Q;gt++){let K=N[gt];Rt(K[0]+T,K[1]+T,K[2]+T)}}else{for(let rt=0;rt<Q;rt++){let T=N[rt];Rt(T[2],T[1],T[0])}for(let rt=0;rt<Q;rt++){let T=N[rt];Rt(T[0]+B*h,T[1]+B*h,T[2]+B*h)}}i.addGroup(X,s.length/3-X,0)}function j(){let X=s.length/3,rt=0;mt(z,rt),rt+=z.length;for(let T=0,gt=R.length;T<gt;T++){let K=R[T];mt(K,rt),rt+=K.length}i.addGroup(X,s.length/3-X,1)}function mt(X,rt){let T=X.length;for(;--T>=0;){let gt=T,K=T-1;K<0&&(K=X.length-1);for(let yt=0,ct=h+m*2;yt<ct;yt++){let It=B*yt,bt=B*(yt+1),w=rt+gt+It,v=rt+K+It,O=rt+K+bt,$=rt+gt+bt;Pt(w,v,O,$)}}}function ot(X,rt,T){l.push(X),l.push(rt),l.push(T)}function Rt(X,rt,T){Nt(X),Nt(rt),Nt(T);let gt=s.length/3,K=E.generateTopUV(i,s,gt-3,gt-2,gt-1);Wt(K[0]),Wt(K[1]),Wt(K[2])}function Pt(X,rt,T,gt){Nt(X),Nt(rt),Nt(gt),Nt(rt),Nt(T),Nt(gt);let K=s.length/3,yt=E.generateSideWallUV(i,s,K-6,K-3,K-2,K-1);Wt(yt[0]),Wt(yt[1]),Wt(yt[3]),Wt(yt[1]),Wt(yt[2]),Wt(yt[3])}function Nt(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function Wt(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Bx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new po[s.type]().fromJSON(s)),new n(i,t.options)}},Ox={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new tt(r,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-u),new tt(d,1-g),new tt(x,1-p)]:[new tt(a,1-l),new tt(h,1-u),new tt(f,1-g),new tt(m,1-p)]}};function Bx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xo=class n extends Ve{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new I,g=new tt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let E=p+m,M=E,_=E+i+1,L=E+i+2,A=E+1;a.push(M,_,A),a.push(_,L,A)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var cr=class n extends Ve{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let E=[],M=p/i,_=0;p===0&&o===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let A=L/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+_,1-M),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){let M=h[p][E+1],_=h[p][E],L=h[p+1][E],A=h[p+1][E+1];(p!==0||o>0)&&f.push(M,_,A),(p!==i-1||l<Math.PI)&&f.push(_,L,A)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var As=class n extends Ve{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(x,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _o=class n extends Ve{constructor(t=new uo(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new tt,h=new I,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),E(),p()}function m(M){h=t.getPointAt(M/e,h);let _=o.normals[M],L=o.binormals[M];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,P=Math.sin(C),S=-Math.cos(C);l.x=S*_.x+P*L.x,l.y=S*_.y+P*L.y,l.z=S*_.z+P*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){let L=(s+1)*(M-1)+(_-1),A=(s+1)*M+(_-1),C=(s+1)*M+_,P=(s+1)*(M-1)+_;g.push(L,A,P),g.push(A,C,P)}}function E(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)c.x=M/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new po[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var vo=class extends Ee{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Ge=class extends Oi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Gr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function zx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Cs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gl=class extends Cs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wc:r=t,a=2*e-i;break;case Xc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:o=t,l=2*i-e;break;case Xc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,E=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+E*o[c+L]+M*o[l+L]+_*o[u+L];return r}},Wl=class extends Cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Xl=class extends Cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gr(e,this.TimeBufferType),this.values=Gr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Gr(t.times,Array),values:Gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Jr:e=this.InterpolantFactoryMethodDiscrete;break;case yl:e=this.InterpolantFactoryMethodLinear;break;case sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&zx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=yl;var Wi=class extends Pn{constructor(t,e,i){super(t,e,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Jr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends Pn{};$l.prototype.ValueTypeName="color";var ql=class extends Pn{};ql.prototype.ValueTypeName="number";var Yl=class extends Cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)xi.slerpFlat(r,0,o,c-a,o,c,l);return r}},yo=class extends Pn{InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Pn{constructor(t,e,i){super(t,e,i)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Jr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Pn{};Zl.prototype.ValueTypeName="vector";var Jl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},kx=new Jl,Kl=class{constructor(t){this.manager=t!==void 0?t:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mo=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ua=new Se,Wh=new I,Xh=new I,Ql=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var jl=class extends Ql{constructor(){super(new _i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new jl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},bo=class extends Mo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var So=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=$h();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function $h(){return performance.now()}var _c="\\[\\]\\.:\\/",Hx=new RegExp("["+_c+"]","g"),vc="[^"+_c+"]",Vx="[^"+_c.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",vc),Wx=/(WCOD+)?/.source.replace("WCOD",Vx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),$x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),qx=new RegExp("^"+Gx+Wx+Xx+$x+"$"),Yx=["material","materials","bones","map"],tc=class{constructor(t,e,i){let s=i||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},we=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(t){let e=qx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Yx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=tc;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J_=new Float32Array(1);var qh=new Se,wo=class{constructor(t,e,i=0,s=1/0){this.ray=new eo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(t,e=!0,i=[]){return ec(t,this,i,e),i.sort(Yh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ec(t[s],this,i,e);return i.sort(Yh),i}};function Yh(n,t){return n.distance-t.distance}function ec(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ec(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);var Ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jx=new _i(-1,1,1,-1,0,1),yc=class extends Ve{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}},Kx=new yc,yi=class{constructor(t){this._mesh=new jt(Kx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Jx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Po=class extends fn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ee?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vi.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new yi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ur=class extends fn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Io=class extends fn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Lo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new tt);this._width=i.width,this._height=i.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Po(Ro),this.copyPass.material.blending=zn,this.clock=new So}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ur!==void 0&&(o instanceof ur?i=!0:o instanceof Io&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Do=class extends fn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ee}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Mu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Is=class n extends fn{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new ee(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new He(r,o,{type:dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new He(r,o,{type:dn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Mu;this.highPassUniforms=vi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ro;this.copyUniforms=vi.clone(h.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Zr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ee,this.oldClearAlpha=1,this.basic=new Rn,this.fsQuad=new yi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ee({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ee({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Is.BlurDirectionX=new tt(1,0);Is.BlurDirectionY=new tt(0,1);var bu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Uo=class extends fn{constructor(){super();let t=bu;this.uniforms=vi.clone(t.uniforms),this.material=new vo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ic?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var dr=new I;function yn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;dr.copy(t),dr[i]=0,dr.normalize();let c=.5*o/(o+a),h=1-dr.angleTo(n)/l;return Math.sign(dr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Fo=class extends Hn{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,l=new I,c=new I(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new I,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=yn(g,l,"z","y",r,i),d[p+1]=1-yn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-yn(g,l,"z","y",r,i),d[p+1]=1-yn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-yn(g,l,"x","z",r,t),d[p+1]=yn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-yn(g,l,"x","z",r,t),d[p+1]=1-yn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-yn(g,l,"x","y",r,t),d[p+1]=1-yn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=yn(g,l,"x","y",r,t),d[p+1]=1-yn(g,l,"y","x",r,e);break}}};var We=1920,ke=1080,Qx=.33/15,In=1.12,Su=-.045,wu=.015,Oo=.018,Mc=-.6,bc=n=>1.35*n/(.35+Math.abs(n)),Ye={floor:-.4,floorExplode:-.75,camera:-.58,cameraExplode:-1.2,led:-.52,ledExplode:-1.6,reflector:-.68,reflectorExplode:-1.98},ei={lower:{z:0,explode:0},substrate:{z:.012,explode:.34},upper:{z:.024,explode:.68},cover:{z:.04,explode:1.02}},fr={demo:0,soft:0,az:.55,el:.5,roll:0,sx:1220,sy:560,size:640,fov:28,rx:0,ry:0,rz:0,explode:0,apart:0,alpha:6.31,inflate:0,stretch:0,pressX:0,pressY:0,pressAmt:0,probe:0,housing:1,cover:1,pump:0,glow:1,visible:1,bloom:.55,calib:0,zones:0,rim:1,lightX:0,lightY:0,light:0,lens:0,ball:0,support:.3,cup:0,water:0,grip:0,open:0,ambient:0,dentShow:1};function Bo(n){return n.light*.07*Math.max(-1,Math.min(1,n.lightX/1.4))}var zo=`
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
    float clampW = mix(1.0, ${Mc.toFixed(2)}, smoothstep(0.55, 0.95, r));
    float strain = 1.35 * uInflate / (0.35 + abs(uInflate));
    float eps = uStretch + strain * ${Oo.toFixed(4)} * clampW;
    vec2 c = uPress.xy - uUpperC;
    vec2 d = p - c;
    float falloff = exp(-dot(d, d) / (uPressR * uPressR));
    float stretch = ${(Su/2).toFixed(4)} * press * falloff;
    float twist = ${(wu/2).toFixed(4)} * press * falloff;
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
    float stretch = ${(-Su/2).toFixed(4)} * press * falloff;
    float twist = ${(-wu/2).toFixed(4)} * press * falloff;
    return c + rot(-twist) * d / (1.0 + stretch);
  }

  vec2 lowerMaterial(vec2 p) {
    return lowerMaterialP(p, uPress.z);
  }
`,jx=`
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
`,Eu=`
  ${zo}
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
`,t_=`
  varying vec2 vQ;
  void main() {
    vQ = position.xy;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,e_=`
  ${zo}
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
`,Tu=`
  ${zo}
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
`,No=`
  ${zo}
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
`,n_=`
  uniform vec2 uGlowPos;
  uniform float uGlowSize;
  uniform float uGlow;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 px = vUv * vec2(${We.toFixed(1)}, ${ke.toFixed(1)});
    vec3 col = mix(vec3(0.0012, 0.0024, 0.0058), vec3(0.0045, 0.0095, 0.021), vUv.y);
    float d = length((px - uGlowPos) / uGlowSize);
    col += vec3(0.012, 0.03, 0.09) * exp(-d * d * 1.6) * uGlow;
    // Faint diagonal hairlines, the deck's grating motif.
    float g = abs(fract(dot(px, vec2(0.6, 0.8)) / 9.0) - 0.5);
    col += vec3(0.004, 0.007, 0.014) * smoothstep(0.46, 0.5, g);
    col += (hash(px) - 0.5) / 255.0;
    gl_FragColor = vec4(col, 1.0);
  }
`;function Mi(n,t,e={}){return new Ee({uniforms:{...t,uLayerZ:{value:0},uCenter:{value:new tt},...e},vertexShader:jx,fragmentShader:n,transparent:!0,depthWrite:!1,side:sn})}function ni(n,t){let e=Math.cos(In)-Math.cos(In+n)/(1+t),i=Math.sin(In)-Math.sin(In+n)/(1+t);return Math.atan2(i,e)+Math.PI/2}function ko(n){return n.stretch+bc(n.inflate)*Oo}function Au(n){return n.stretch+bc(n.inflate)*Oo*Mc}function pr(n){let t=n.alpha*Math.PI/180,e=bc(n.inflate)*Oo,i=n.stretch+e,s=n.stretch+e*Mc;return{roi:ni(t,i),periphery:ni(t,s)}}function Cu(n,{preserve:t=!1}={}){let e=new er({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:t});e.setPixelRatio(1);let i=new nr,s=new Qe(28,We/ke,.05,200),r=new jt(new Bi(2,2),new Ee({uniforms:{uGlowPos:{value:new tt(1200,540)},uGlowSize:{value:700},uGlow:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.9999, 1.0);
        }
      `,fragmentShader:n_,depthTest:!1,depthWrite:!1}));r.frustumCulled=!1,r.renderOrder=-10,i.add(r),i.add(new bo(7308976,.35));let o=new hr(14674175,2.2);o.position.set(-3,5,4),i.add(o);let a=new hr(5213439,3);a.position.set(4,1.5,-4),i.add(a);let l=new Ue;i.add(l);let c={uPitch:{value:Qx},uBase:{value:In},uAlpha:{value:6.31*Math.PI/180},uInflate:{value:0},uStretch:{value:0},uPress:{value:new I},uPressR:{value:.36},uLowerC:{value:new tt},uUpperC:{value:new tt},uShear:{value:new tt},uCombine:{value:1},uGlow:{value:1},uFade:{value:1},uLight:{value:new I}},h=new Ue;h.rotation.x=-Math.PI/2,l.add(h);let u=new xo(1e-4,1,256,96),d={lower:Mi(Eu,c),substrate:Mi(No,c,{uSheen:{value:.4},uFade:{value:1}}),upper:Mi(Tu,c),cover:Mi(No,c,{uSheen:{value:1},uFade:{value:1}})};d.lower.depthWrite=!0;let f={};["lower","substrate","upper","cover"].forEach((J,pt)=>{let Dt=new jt(u,d[J]);Dt.renderOrder=pt+1,Dt.frustumCulled=!1,h.add(Dt),f[J]=Dt});let g=new Ge({color:2899034,metalness:.6,roughness:.3,transparent:!0,opacity:.6,depthWrite:!1,side:sn}),x=new jt(new ki([new tt(1,.07),new tt(1.14,.07),new tt(1.2,.03),new tt(1.2,-.05),new tt(1,-.05)],160),g);l.add(x);let m=new Rn({color:7314431,transparent:!0,depthWrite:!1}),p=(J,pt,Dt)=>{let Ht=new jt(new As(J,.006,8,200),m);return Ht.rotation.x=Math.PI/2,Ht.position.y=pt,Dt.add(Ht),Ht},E=p(1.14,.07,l),M=new Ee({uniforms:{uFade:{value:1}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,side:sn}),_=new Ue;l.add(_);let L=new jt(new ki([new tt(1.2,-.06),new tt(1.2,-.62),new tt(1.14,-.7),new tt(.18,-.7)],160),M);_.add(L),p(1.2,-.06,_),p(1.15,-.69,_);let A=new jt(new Hi(1.17,96),M);A.rotation.x=-Math.PI/2,l.add(A);let C=p(1.17,0,A);C.rotation.x=0;let P=new Rn({color:6127556,transparent:!0,depthWrite:!1}),S=new jt(new Hi(1.08,96),P);S.rotation.x=-Math.PI/2,l.add(S);let y=new Ue;l.add(y);let R=new Rn({color:8825599,transparent:!0});for(let J=0;J<12;J+=1){let pt=new jt(new cr(.032,12,8),R),Dt=J/12*Math.PI*2;pt.scale.y=.6,pt.position.set(Math.cos(Dt)*.42,-.03,Math.sin(Dt)*.42),y.add(pt)}let k=new jt(new As(.42,.03,8,96),new Ge({color:3820138,metalness:.4,roughness:.45,transparent:!0}));k.rotation.x=Math.PI/2,y.add(k);let N=new Ue;l.add(N);let z=new jt(new Hn(.34,.16,.34),new Ge({color:3885155,metalness:.55,roughness:.35,transparent:!0}));N.add(z);let H=new jt(new Vi(.09,.1,.1,48),new Ge({color:1712688,metalness:.9,roughness:.15,transparent:!0}));H.position.y=.12,N.add(H);let B=new jt(new Hi(.06,32),new Rn({color:10273023,transparent:!0,opacity:.85}));B.rotation.x=-Math.PI/2,B.position.y=.171,N.add(B);let Q=new Ue;l.add(Q);let V=new jt(new Hn(.46,.3,.3),new Ge({color:1910584,metalness:.6,roughness:.35,transparent:!0}));Q.add(V);let it=new Ge({color:5213439,emissive:1454186,metalness:.2,roughness:.4,transparent:!0}),st=null,dt=0,Ft=new jt(new mo(.055,.7,8,24),new Ge({color:13227238,metalness:.85,roughness:.22,transparent:!0}));l.add(Ft);let kt=new Ge({color:11123412,emissive:1845056,metalness:.45,roughness:.4,transparent:!0}),q=.34,j=.04+2*q*.94,mt=new Ge({color:15849935,emissive:2759972,roughness:.55,metalness:0,transparent:!0}),ot=new jt(new cr(q,48,32),mt);l.add(ot);let Rt=1.7,Pt=.28,Nt=.22,Wt=.48,X=1.215;function rt(J){let pt=Math.asin(Wt/Rt),Dt=pt+.3,Ht=Rt*Math.cos(pt),Yt=new rr;Yt.moveTo(J,Wt),Yt.lineTo(Ht+.5,Wt),Yt.quadraticCurveTo(Ht,Wt,Rt*Math.cos(Dt),Rt*Math.sin(Dt)),Yt.absarc(0,0,Rt,Dt,2*Math.PI-Dt,!1),Yt.quadraticCurveTo(Ht,-Wt,Ht+.5,-Wt),Yt.lineTo(J,-Wt),Yt.closePath();let ne=new zi;ne.absarc(0,0,X,0,2*Math.PI,!0),Yt.holes.push(ne);let Tt=new go(Yt,{depth:Pt-.06,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:3,curveSegments:72});return Tt.translate(0,0,-(Pt-.06)/2),Tt.applyMatrix4(new Se().makeBasis(new I(0,1,0),new I(0,0,1),new I(1,0,0))),Tt}let T=new ki([new tt(1.2,-.06),new tt(1.2,-.62),new tt(1.14,-.7),new tt(.18,-.7)],160);function gt({far:J,grasp:pt}){let Dt=new Ge({color:4608366,emissive:856866,metalness:.35,roughness:.55,transparent:!0}),Ht=new Ge({color:2041664,emissive:593176,metalness:.1,roughness:.8,transparent:!0}),Yt=new Ge({color:9413576,emissive:1581882,metalness:.55,roughness:.4,transparent:!0}),ne=rt(J+.2),Tt=(ut,Lt,At,Vt,qt,Ut)=>{let oe=new jt(new Fo(ut,Lt,At,4,Math.min(ut,Lt,At)*.3),Vt);return oe.position.set(qt,Ut,0),oe},re=new Ue;re.rotation.z=Math.PI/2,l.add(re);let Qt=new Ue;Qt.rotation.x=-Math.PI/2,re.add(Qt);let fe=new jt(ne,Dt);fe.position.x=-Nt;let Ae=new Ue,Ie=new jt(ne,Dt);Ie.position.x=Nt;let se=new Ue;se.rotation.z=Math.PI/2;let Ce=new Ue;Ce.rotation.x=Math.PI/2;let De={uInflate:{value:0},uPress:{value:new I}},Xe={lower:Mi(Eu,c,{...De,uFade:{value:1}}),substrate:Mi(No,c,{...De,uSheen:{value:.4},uFade:{value:1}}),upper:Mi(Tu,c,{...De,uFade:{value:1}}),cover:Mi(No,c,{...De,uSheen:{value:1},uFade:{value:1}})};Xe.lower.depthWrite=!0,Object.keys(Xe).forEach((ut,Lt)=>{let At=new jt(u,Xe[ut]);At.renderOrder=Lt+1,At.frustumCulled=!1,Ce.add(At)});let Qi=g.clone(),_r=M.clone(),b=m.clone();se.add(Ce,new jt(x.geometry,Qi),new jt(T,_r));for(let[ut,Lt]of[[1.14,.07],[1.2,-.06],[1.15,-.69]]){let At=new jt(new As(ut,.006,8,200),b);At.rotation.x=Math.PI/2,At.position.y=Lt,se.add(At)}Ae.add(Ie,se),Ae.position.x=pt,Qt.add(fe,Ae);let U=pt+2*Nt+1.3,G=[Tt(U,.7,1.5,Dt,0,J+.35),Tt(U-.36,.05,.34,Ht,0,J+.002),Tt(U+.04,.06,1.54,Yt,0,J+.5)].map(ut=>({mesh:ut,rest:ut.geometry.attributes.position.array.slice()})),W=new jt(new Vi(.5,.5,.3,48),Dt);W.position.y=J+.84,Qt.add(...G.map(ut=>ut.mesh),W);let F=null;function ht(ut){if(F!==null&&Math.abs(ut-F)<1e-4)return;F=ut;let Lt=(ut-pt)/2;for(let{mesh:At,rest:Vt}of G){let qt=At.geometry.attributes.position;for(let Ut=0;Ut<Vt.length;Ut+=3)qt.array[Ut]=Vt[Ut]+Math.sign(Vt[Ut])*Lt;qt.needsUpdate=!0,At.geometry.computeBoundingSphere(),At.position.x=ut/2}W.position.x=ut/2}return ht(pt),{root:re,fingerB:Ae,stretch:ht,materials:[Dt,Ht,Yt],skinMaterials:Xe,turned:De,frame:Qi,glass:_r,edge:b}}let K=1.9,yt=4.6,ct=.04+.5*.17+K,It=new Ge({color:14937343,emissive:1780296,roughness:.08,metalness:0,transparent:!0,opacity:.4,side:sn,depthWrite:!1}),bt=new Ge({color:4161023,emissive:993894,roughness:.2,transparent:!0,depthWrite:!1}),w=new Ue,v=new jt(new Vi(K,K*.9,yt,48,1,!0),It),O=new jt(new Hi(K*.9,48),It);O.rotation.x=Math.PI/2,O.position.y=-yt/2;let $=new jt(new Vi(K*.86,K*.84,1,40),bt);w.add(v,O,$),$.renderOrder=10,O.renderOrder=11,v.renderOrder=12,w.rotation.z=Math.PI/2,w.position.set(0,ct,0),l.add(w);let et=j+.04+.15,Z=ct+K+.085+.04,ft=gt({far:Rt+.75,grasp:et});function xt(J){let pt=j+J.support-.04-J.inflate*.17,Dt=ti.clamp(pt/(2*q),.55,1),Ht=J.ball*(3.2*(1-Dt)+.06),Yt=ti.smoothstep(J.inflate,.4,.5),ne=J.cup*Yt*(.3+.45*J.water),Tt=Math.max(Ht,ne),re=J.cup*Yt*J.water*.014;if(Tt>J.pressAmt){let Qt=J.pressAmt>.001?J.pressAmt/Tt:0;return{x:J.pressX*Qt,y:J.pressY*Qt,amount:Tt,shear:re}}return{x:J.pressX,y:J.pressY,amount:J.pressAmt,shear:re}}let Mt=new Lo(e,new He(We,ke,{samples:4,type:dn}));Mt.addPass(new Do(i,s));let Jt=new Is(new tt(We,ke),.55,.55,.62);Mt.addPass(Jt);let lt=new Uo;lt.needsSwap=!1,Mt.addPass(lt),Mt.writeBuffer.setSize(1,1);let Et={...fr},Ot=We,zt=ke;function Ct(J,pt){Ot=Math.max(2,Math.round(J)),zt=Math.max(2,Math.round(pt)),e.setSize(Ot,zt,!1),Mt.setSize(Ot,zt),Mt.writeBuffer.setSize(1,1),Jt.setSize(Ot,zt)}function Kt(J){let pt=J.fov*Math.PI/180,Dt=2/J.size*(ke/2)/Math.tan(pt/2),Ht=J.el,Yt=J.az,ne=new I(Math.cos(Ht)*Math.sin(Yt),Math.sin(Ht),Math.cos(Ht)*Math.cos(Yt));s.fov=J.fov,s.position.copy(ne.multiplyScalar(Dt));let Tt=new I(-Math.sin(Ht)*Math.sin(Yt),Math.cos(Ht),-Math.sin(Ht)*Math.cos(Yt));Tt.applyAxisAngle(s.position.clone().normalize(),J.roll),s.up.copy(Tt),s.lookAt(0,0,0),s.near=Math.max(.02,Dt-6),s.far=Dt+8,s.setViewOffset(We,ke,We/2-J.sx,ke/2-J.sy,We,ke),s.updateProjectionMatrix()}function Xt(J){Et={...J},Kt(J),l.rotation.set(J.rx,J.ry,J.rz);let pt=J.explode,Dt=J.apart;c.uAlpha.value=J.alpha*Math.PI/180,c.uInflate.value=J.inflate,c.uStretch.value=J.stretch;let Ht=xt(J);c.uPress.value.set(Ht.x,Ht.y,Ht.amount),c.uShear.value.set(Ht.shear,0),c.uLowerC.value.set(-Dt,0),c.uUpperC.value.set(Dt,0),c.uCombine.value=1-ti.smoothstep(pt,.02,.2),c.uGlow.value=J.glow,c.uFade.value=J.visible,c.uLight.value.set(J.lightX,J.lightY,J.light),c.uBase.value=In+Bo(J);for(let[se,Ce]of Object.entries(f)){let De=ei[se],Xe=Ce.material.uniforms;Xe.uLayerZ.value=De.z+De.explode*pt;let Qi=se==="lower"?-Dt:se==="upper"?Dt:0;Xe.uCenter.value.set(Qi,0)}let Yt=J.visible*J.cover*(1-ti.smoothstep(Dt,.05,.3));d.substrate.uniforms.uFade.value=Yt,d.cover.uniforms.uFade.value=Yt;let ne=J.visible*J.housing,Tt=ne>.01;g.opacity=.6*ne,M.uniforms.uFade.value=ne,m.opacity=ne,x.visible=Tt,E.visible=Tt,_.visible=Tt,_.position.y=-.55*pt,A.position.y=Ye.floor+Ye.floorExplode*pt,A.visible=Tt,S.position.y=Ye.reflector+Ye.reflectorExplode*pt,S.visible=Tt,P.opacity=.32*ne,y.position.y=Ye.led+Ye.ledExplode*pt,R.opacity=ne,k.material.opacity=ne,N.position.y=Ye.camera+Ye.cameraExplode*pt;for(let se of[z,H])se.material.opacity=ne;B.material.opacity=.85*ne,y.visible=Tt,N.visible=Tt;let re=J.visible*J.pump;if(Q.visible=re>.01,V.material.opacity=re,Q.position.set(1.75,-1-.3*pt,.4),it.opacity=re,Q.visible&&(st===null||Math.abs(pt-dt)>.002)){dt=pt,st&&(st.geometry.dispose(),Q.remove(st));let se=new I(1.2-1.75,-.35-.55*pt+1+.3*pt,-.4),Ce=new sr([new I(-.23,0,0),new I(-.35,.05,-.1),se.clone().add(new I(.2,-.05,0)),se]);st=new jt(new _o(Ce,40,.025,10,!1),it),Q.add(st)}Ft.visible=J.probe*J.visible>.01,Ft.material.opacity=J.probe*J.visible;let Qt=.02+(1-Math.min(1,J.pressAmt))*.45;Ft.position.set(J.pressX,.04+.055+.35+Qt,-J.pressY);let fe=J.ball*J.visible;if(ot.visible=fe>.01,ot.visible){let se=j+J.support,Ce=J.inflate*.17,De=ti.clamp((se-.04-2*Ce)/(2*q),.5,1),Xe=1/Math.sqrt(De);ot.scale.set(Xe,De,Xe),ot.position.set(0,.04+Ce+q*De-.012,0),mt.opacity=fe}let Ae=J.cup*J.visible;if(w.visible=Ae>.01,w.visible){let se=Math.max(.002,J.water*yt*.82);$.scale.y=se,$.position.y=-yt/2+.03+se/2,$.visible=J.water>.005,It.opacity=.4*Ae,bt.opacity=.65*Ae}let Ie=J.grip*J.visible;if(ft.root.visible=Ie>.01,ft.root.visible){for(let Ce of ft.materials)Ce.opacity=Ie;for(let[Ce,De]of Object.entries(ft.skinMaterials)){let Xe=d[Ce].uniforms;De.uniforms.uLayerZ.value=Xe.uLayerZ.value,De.uniforms.uCenter.value.copy(Xe.uCenter.value),De.uniforms.uFade.value=Xe.uFade.value*Ie}ft.turned.uInflate.value=-c.uInflate.value,ft.turned.uPress.value.set(Ht.x,Ht.y,-Ht.amount),ft.frame.opacity=g.opacity*Ie,ft.glass.uniforms.uFade.value=M.uniforms.uFade.value*Ie,ft.edge.opacity=m.opacity*Ie;let se=ti.clamp(J.open,0,1);ft.fingerB.position.x=ti.lerp(j+J.support+.04,Z,se),ft.stretch(ti.lerp(et,Z,se))}Jt.strength=J.bloom,r.material.uniforms.uGlowPos.value.set(J.sx,ke-J.sy),r.material.uniforms.uGlowSize.value=Math.max(260,J.size*1.1),r.material.uniforms.uGlow.value=J.visible}function de(){Mt.render()}function D(J){let pt=J.clone();return l.localToWorld(pt),pt.project(s),{x:(pt.x+1)/2*We,y:(1-pt.y)/2*ke,behind:pt.z>1}}function _t(J,pt="right"){let Dt=Et.explode,Ht=(pt==="left"?Math.PI-.5:-.35)+Et.ry,Yt=(Tt,re)=>new I(Math.cos(Ht)*Tt,re,Math.sin(Ht)*Tt),ne=Et.inflate*.17;switch(J){case"cover":return Yt(.92,ei.cover.z+ei.cover.explode*Dt+ne*.15);case"upper":return Yt(.92,ei.upper.z+ei.upper.explode*Dt+ne*.15);case"substrate":return Yt(.92,ei.substrate.z+ei.substrate.explode*Dt+ne*.15);case"lower":return Yt(.92,ei.lower.z+ne*.15);case"chamber":return Yt(1.2,-.3-.55*Dt);case"floor":return Yt(1.17,Ye.floor+Ye.floorExplode*Dt);case"led":return Yt(.42,Ye.led+Ye.ledExplode*Dt-.03);case"reflector":return Yt(.9,Ye.reflector+Ye.reflectorExplode*Dt);case"camera":return new I(.17,Ye.camera+Ye.cameraExplode*Dt,0);case"pump":return new I(1.75,-1-.3*Dt+.15,.4);case"centre":return new I(0,ne,0);case"top":return new I(0,ne+.05,0);default:return new I}}function Y(J,pt,Dt){return new I(J,pt,Dt)}function nt(J,pt){return new I(J,0,-pt)}let vt=new wo,St=new Tn;function $t(J,pt){let Dt=new tt(J/We*2-1,1-pt/ke*2);vt.setFromCamera(Dt,s);let Ht=new I(0,1,0).applyQuaternion(l.quaternion);St.setFromNormalAndCoplanarPoint(Ht,new I(0,ei.upper.z,0));let Yt=new I;return vt.ray.intersectPlane(St,Yt)?(l.worldToLocal(Yt),{u:Yt.x,v:-Yt.z}):null}function ve(J){let pt=new er({canvas:J,antialias:!0,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:t});pt.setPixelRatio(1);let Dt={...c,uTarget:{value:new tt},uRadius:{value:.11},uMode:{value:0}},Ht=new nr;Ht.add(new jt(new Bi(2,2),new Ee({uniforms:Dt,vertexShader:t_,fragmentShader:e_,transparent:!0})));let Yt=new _i(-1,1,1,-1,0,1);return{setSize(ne){pt.setSize(ne,ne,!1)},render(ne,Tt,re,Qt=0){Dt.uTarget.value.set(ne,Tt),Dt.uRadius.value=re,Dt.uMode.value=Qt,pt.render(Ht,Yt)}}}return Xt(Et),{setSize:Ct,applyState:Xt,render:de,project:D,anchor:_t,point:Y,membranePoint:nt,pick:$t,createLens:ve,renderer:e}}var Wo=1.53,Go={az:0,el:Wo,housing:0,cover:0,bloom:.45},Ho={interactive:!0},mr=.01/.045,i_={wheel:{key:"apart",min:0,max:1.12,rate:-.0016}},s_=n=>({wheel:{key:"alpha",min:n,max:14,rate:.006}}),bi={az:0,el:Wo,sx:1372,sy:600,size:560},Sc={...Go,sx:1380,sy:600,size:400,...i_},Vo={az:.62,el:.5,sx:1722,sy:140,size:128,glow:1.3,bloom:.5,script:"spinIcon"},ii={gelDemo:{...Vo,script:"gelPress"},gelSoft:{...Vo,soft:1,script:"gelPress"},gelLight:{...Vo,script:"gelLight"},heroGrip:{az:.28,el:.5,rz:-Math.PI/2,sx:1470,sy:470,size:240,ball:1,grip:1,script:"heroGrip"},heroDesign:{az:.62,el:.42,sx:1480,sy:400,size:325,explode:1,pump:1,script:"spin"},hero:{az:.62,el:.42,sx:1480,sy:420,size:540,script:"spin",...Ho},hook:{az:0,el:Wo,sx:1500,sy:590,size:560,pressX:.2,pressY:.15,pressAmt:.3,...Ho},paradox:{az:.5,el:.8,sx:1510,sy:349,size:64,glow:1.5,bloom:.9},insightReal:{...Go,az:0,el:Wo,sx:1360,sy:600,size:640,glow:1.2},stack:{az:.78,el:.3,sx:1160,sy:452,size:300,explode:1,pump:1,bloom:.5},design:{az:.5,el:.4,sx:1575,sy:470,size:390,glow:1,bloom:.5,script:"opticsCycle"},pApart:{...Sc,apart:1.12,wheel:null},pOverlap:{...Sc,apart:.35},pTouch:{...Sc,apart:0,size:470,script:"touchCycle",dentShow:4.5,interactive:"place",wheel:{key:"pressAmt",min:0,max:3*mr,rate:9e-4},lenses:[{at:"follow",home:[.16,.1],x:835,y:565,r:185,hollow:!0}]},pAmplify:{...Go,...bi,script:"amplifyDemo",...Ho,...s_(2),lenses:[{at:"follow",home:[.16,.1],x:940,y:561,r:115,hollow:!0}]},pAmplifyReal:{...Go,...bi},pPressure:{...bi,zones:1,rim:0,script:"inflateCycle",wheel:{key:"inflate",min:-1,max:1,rate:.0025}},pPressureReal:{...bi,zones:1,rim:0},pWeather:{...bi,ambient:1,zones:1,script:"pressureDrift"},pLight:{...bi,light:1,lightFollow:!0,script:"lightOrbit"},pZero:{...bi,calib:1,script:"calibrate"},pZeroReal:{...bi,calib:1},inference:{az:.3,el:1.05,sx:335,sy:610,size:340,probe:1,script:"probePress"},backboneSoft:{az:.34,el:.48,rz:-Math.PI/2,sx:320,sy:680,size:110,ball:1,grip:1,script:"squeeze"},backboneShear:{az:.34,el:.48,rz:-Math.PI/2,sx:250,sy:700,size:90,cup:1,grip:1,open:1,script:"clampLoad"},results:{az:.5,el:.85,sx:1684,sy:215,size:190,...Ho},softness:{az:.36,el:.48,rz:-Math.PI/2,sx:1180,sy:650,size:205,ball:1,grip:1,support:0,script:"softClip"},shear:{az:.34,el:.48,rz:-Math.PI/2,sx:960,sy:620,size:150,cup:1,grip:1,open:1,script:"clampLoad",lenses:[{at:[0,0],span:1.02,x:1690,y:395,r:115,plain:!0,label:"Simulation",sim:!0}]},icon:Vo,whyActuate:{az:.3,el:.5,rz:-Math.PI/2,sx:1500,sy:640,size:220,ball:1,grip:1,script:"squeeze"},closing:{az:.28,el:.5,rz:-Math.PI/2,sx:1330,sy:590,size:220,ball:1,grip:1,script:"heroGrip"},endCell:{az:.62,el:.42,sx:1470,sy:585,size:280,explode:1,pump:1,script:"assemble"}},Ru=n=>n*n*(3-2*n),r_=n=>Math.min(1,Math.max(0,n));function je(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e+=1){let[i,s]=n[e],[r,o]=n[e-1];if(t<=i)return o+(s-o)*Ru((t-r)/(i-r))}return n[n.length-1][1]}function Pu(n){let t=je([[0,1],[1.6,1],[4.6,0],[8.6,0],[11.2,1],[12,1]],n%12);return{explode:t,pump:t,size:480-200*t,sy:540+45*t}}function Iu(n){return{demo:1,pressAmt:je([[0,0],[1.4,1.3],[3.8,1.3],[4.6,0],[5,0]],n%5)}}var wc={spin:n=>({ry:n*.12}),heroGrip:n=>({...wc.squeeze(n),az:.28-.24*Math.cos(2*Math.PI*n/14)}),spinIcon:n=>({ry:n*.12}),assemble:n=>({ry:n*.12,...Pu(n)}),gelLight:n=>({ry:n*.12,...Iu(n)}),gelPress:n=>({ry:n*.12,pressAmt:je([[0,0],[1.6,1.3],[4.2,1.3],[5.4,0],[6,0]],n%6)}),opticsCycle:()=>({}),softClip:()=>({}),pressDemo:n=>{let t=n%6;return{pressX:.28*Math.cos(n*.5),pressY:.22*Math.sin(n*.5),pressAmt:je([[0,0],[1.2,1.3],[4.2,1.3],[5.4,0],[6,0]],t)}},alphaSweep:n=>({alpha:je([[.4,6.31],[2.2,2],[4.6,12],[6.4,6.31]],n)}),amplifyDemo:n=>n<6.6?wc.alphaSweep(n):{alpha:6.31,...Uu("pressDemo",n-6.6)},inflateCycle:n=>({inflate:.9*Math.sin(2*Math.PI*n/6)}),touchCycle:n=>{let t=n%42;return{pressX:je([[0,.16],[30.5,.16],[34.5,-.25],[42,-.25]],t),pressY:je([[0,.1],[30.5,.1],[34.5,-.18],[42,-.18]],t),pressAmt:je([[0,0],[1,0],[3.5,mr],[28,mr],[30.5,3*mr],[37,3*mr],[39.5,0],[42,0]],t)}},pressureDrift:n=>({inflate:-.5+.4*Math.sin(n*.9)+.12*Math.sin(n*2.3)}),lightOrbit:n=>({lightX:1.42*Math.cos(n*.8),lightY:1.3*Math.sin(n*.8)}),calibrate:n=>{let t=n%7,e=(Math.floor(n/7)%2===0?-1:1)*.85;if(t<1.5)return{inflate:e*Ru(r_(t/.7))};let i=t-1.5;return{inflate:e*Math.exp(-2.6*i)*Math.cos(3*i)}},probePress:n=>{let t=n%4;return{pressX:.25,pressY:.2,pressAmt:je([[0,0],[.9,0],[1.6,1],[2.9,1],[3.6,0],[4,0]],t)}},squeeze:n=>{let t=n%7;return{support:je([[0,.3],[1,0],[6,0],[7,.3]],t),inflate:je([[0,0],[2.2,0],[3.4,.95],[5,.95],[5.9,0],[7,0]],t)}},clampLoad:n=>{let t=n%8.5;return{inflate:je([[0,0],[1.2,.5],[7.4,.5],[8.4,0]],t),water:je([[0,0],[1.6,0],[6.4,1],[7.2,1],[8.2,0]],t)}}},o_={spin:n=>({ry:.25*Math.sin(2*Math.PI*n/12)}),spinIcon:()=>({}),gelPress:n=>({pressAmt:je([[0,0],[1.6,1.3],[4.2,1.3],[5.4,0],[6,0]],n%6)}),gelLight:n=>Iu(n),assemble:n=>({ry:.25*Math.sin(2*Math.PI*n/12),...Pu(n)}),pressDemo:n=>{let t=n%6;return{pressX:.28*Math.cos(2*Math.PI*n/12),pressY:.22*Math.sin(2*Math.PI*n/12),pressAmt:je([[0,0],[1.2,1.3],[4.2,1.3],[5.4,0],[6,0]],t)}},pressureDrift:n=>({inflate:-.5+.4*Math.sin(2*Math.PI*n/7)+.12*Math.sin(6*Math.PI*n/7)}),lightOrbit:n=>({lightX:1.5*Math.cos(2*Math.PI*n/8),lightY:1.3*Math.sin(2*Math.PI*n/8)})},Lu=!1;function Du(n){Lu=!!n}function Uu(n,t){let e=Lu&&o_[n]||wc[n];return e?e(t):{}}var a_={spin:3,heroGrip:4.6,assemble:6,spinIcon:0,gelPress:3,gelLight:3,opticsCycle:12,pressDemo:2.2,alphaSweep:6.8,amplifyDemo:9.6,inflateCycle:1.6,touchCycle:6,calibrate:4.4,pressureDrift:3,lightOrbit:4,probePress:2.2,squeeze:4.6,softClip:3,clampLoad:6.6},l_={spin:{from:0,period:12},heroGrip:{from:0,period:14},assemble:{from:0,period:12},gelPress:{from:0,period:6},gelLight:{from:0,period:5},pressDemo:{from:0,period:12},amplifyDemo:{from:6.6,period:12},inflateCycle:{from:0,period:6},touchCycle:{from:6,period:42},pressureDrift:{from:0,period:7},lightOrbit:{from:0,period:8},calibrate:{from:0,period:14},probePress:{from:0,period:4},squeeze:{from:0,period:7},softClip:{from:0,period:7.6},clampLoad:{from:0,period:8.5},opticsCycle:{from:0,period:12}};function Ec(n){let t=ii[n]?.script;return t?l_[t]??null:null}function Fu(n){let t=ii[n]?.script;return t?a_[t]??2:0}function Ls(n,t){let e=ii[n]??ii.hero,i={...fr,...e};i.lens=e.lenses?1:0;let s=e.lenses?.[0];return s&&s.x!==void 0&&(i.lensX=s.x,i.lensY=s.y,i.lensR=s.r),delete i.lenses,delete i.wheel,delete i.lightFollow,e.script&&Object.assign(i,Uu(e.script,t)),delete i.script,delete i.interactive,i}function Tc(n){return!!ii[n]?.interactive}function Nu(n){return ii[n]?.interactive==="place"}function Ac(n){return ii[n]?.wheel??null}function Ou(n){return ii[n]?.lenses??null}function Bu(n){return!!ii[n]?.lightFollow}var Xo={inflate:{hz:15,inflate:[-.001,-.003,0,.002,.012,.048,.101,.183,.327,.485,.607,.726,.766,.814,.866,.904,.912,.914,.928,.923,.925,.92,.918,.906,.902,.904,.911,.912,.907,.907,.902,.892,.895,.865,.833,.784,.703,.628,.528,.416,.239,.012,-.196,-.378,-.455,-.563,-.644,-.719,-.753,-.783,-.791,-.792,-.805,-.791,-.79,-.792,-.784,-.802,-.802,-.792,-.781,-.784,-.789,-.788,-.789,-.793,-.791,-.787,-.768,-.752,-.722,-.693,-.655,-.636,-.616,-.603,-.579,-.554,-.542,-.529,-.515,-.469,-.455,-.439,-.434,-.426,-.43,-.415,-.395,-.378,-.369,-.37],still:1},zero:{hz:15,inflate:[.911,.907,.906,.907,.902,.9,.903,.893,.889,.89,.898,.897,.887,.869,.858,.853,.842,.827,.808,.797,.776,.745,.715,.688,.665,.643,.616,.583,.544,.51,.48,.442,.395,.338,.285,.206,.101,.044,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],still:4.1},touch:{hz:15,x:[-.109,-.143,-.161,-.104,-.049,-.039,-.036,-.035,-.041,-.069,-.077,-.069,-.043,-.032,-.033,-.036,-.04,-.045,-.058,.055,.164,.195,.217,.225,.246,.242,.222,.143,-.188,-.41,-.449,-.453,-.455,-.46,-.461,-.463,-.462,-.46,-.458,-.458,-.453,-.469,-.473,-.292,-.177,-.154,-.147,-.14,-.149,-.148,-.122,-.107,-.108,-.112,-.119,-.127,-.039,-.268,-.548,-.552,-.556,-.563,-.573,-.575,-.579,-.582,-.573,-.571,-.574,-.562,-.437,-.264,-.223,-.2,-.183,-.178,-.172,-.178,-.185,-.184,-.182,-.18,-.183,-.18,-.178,-.181,-.185,-.103,.132,.132,.132,.132,.132,.132,.132,.132,.132,.132],y:[.418,.421,.314,.168,.098,.091,.084,.08,.085,.123,.282,.4,.429,.436,.433,.429,.426,.422,.41,.395,.268,.086,.057,.054,.038,.034,.037,.052,-.024,-.199,-.335,-.373,-.374,-.378,-.376,-.373,-.371,-.368,-.369,-.361,-.25,-.062,.124,.235,.152,.078,.076,.072,.083,.116,.138,.147,.147,.145,.151,.185,.3,.335,.199,.175,.161,.179,.19,.186,.179,.188,.202,.206,.209,.241,.373,.421,.292,.22,.204,.199,.186,.172,.17,.175,.18,.177,.181,.183,.184,.187,.194,.29,.484,.484,.484,.484,.484,.484,.484,.484,.484,.484],amt:[.082,.068,.204,.703,1.191,1.2,1.2,1.2,1.183,.968,.576,.623,.894,.984,.997,1.022,1.012,.996,.823,.509,.527,.994,1.177,1.196,1.2,1.2,1.179,.834,.353,.302,.55,.705,.724,.734,.73,.722,.723,.722,.71,.664,.517,.307,.102,.189,.68,1.053,1.09,1.15,1.16,1.185,1.2,1.2,1.199,1.191,1.165,1.028,.652,.256,.345,.459,.596,.662,.688,.69,.682,.671,.661,.663,.64,.479,.214,.193,.558,.889,1.05,1.144,1.176,1.166,1.143,1.147,1.138,1.15,1.15,1.16,1.169,1.168,1.157,.875,.082,0,0,0,0,0,0,0,0,0],still:1},light:{hz:15,x:[-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.163,-.16,-.144,-.118,-.091,-.077,-.079,-.091,-.093,-.1,-.109,-.116,-.137,-.169,-.184,-.184,-.176,-.167,-.162,-.145,-.138,-.138,-.132,-.13,-.13,-.138,-.143,-.145,-.132,-.119,-.1,-.086,-.07,-.049,-.045,-.042,-.043,-.051,-.058,-.062,-.042,-.011,.007,.022,.041,.05,.021,-.061,-.11,-.156,-.21,-.2,-.187,-.188,-.193,-.205,-.209,-.194,-.187,-.176,-.175,-.18,-.2,-.23,-.214,-.198,-.206,-.202,-.185,-.182,-.181,-.18,-.18,-.18,-.178,-.176,-.177,-.176,-.175,-.173,-.171,-.17,-.17,-.17,-.17,-.171,-.172,-.171,-.171,-.17,-.171,-.171,-.171,-.171,-.171,-.169,-.167,-.167,-.167,-.167,-.167,-.167,-.168,-.166,-.166,-.167,-.168,-.169,-.168,-.167,-.166,-.166,-.167,-.167,-.166,-.166,-.165,-.165,-.164,-.165,-.166,-.166,-.166],y:[.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.475,.462,.45,.436,.416,.396,.381,.365,.36,.357,.365,.367,.374,.38,.376,.374,.378,.387,.395,.39,.388,.391,.388,.356,.333,.322,.279,.26,.301,.334,.335,.337,.339,.327,.324,.318,.315,.303,.295,.302,.304,.302,.29,.276,.243,.226,.272,.408,.45,.441,.449,.423,.386,.361,.325,.295,.286,.306,.317,.317,.314,.311,.33,.366,.351,.32,.296,.284,.282,.288,.294,.296,.3,.304,.307,.313,.317,.324,.336,.341,.343,.344,.344,.344,.344,.345,.345,.345,.343,.343,.34,.339,.339,.34,.34,.342,.341,.339,.339,.337,.34,.341,.339,.338,.337,.339,.339,.339,.34,.339,.338,.338,.339,.341,.342,.341,.34,.341,.341,.34,.339,.339,.339],amt:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.006,.076,.146,.184,.259,.395,.538,.597,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.408,.418,.585,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.477,.348,.279,.246,.233,.234,.245,.254,.28,.298,.342,.394,.431,.473,.533,.562,.597,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.6,.595,.596,.596,.59,.592,.593,.598,.596,.596,.594,.593,.594,.596,.595,.598,.599,.599,.6,.6,.6,.597,.594,.592,.592],still:1},soft:{hz:15,inflate:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.001,.019,.063,.143,.241,.335,.412,.484,.548,.602,.644,.684,.723,.757,.783,.802,.824,.846,.866,.888,.911,.93,.941,.943,.945,.945,.946,.947,.948,.948,.949,.949,.95,.95,.95,.95,.95,.95,.95,.949,.944,.935,.925,.91,.883,.855,.827,.796,.767,.738,.696,.641,.571,.494,.4,.273,.123,.023,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],still:3,seconds:7.6}};function zu(n,t){let e=Xo[n];if(!e)return null;let i={};for(let[s,r]of Object.entries(e)){if(!Array.isArray(r))continue;let o=Math.min(Math.max(t*e.hz,0),r.length-1),a=Math.floor(o),l=Math.min(a+1,r.length-1);i[s]=r[a]+(r[l]-r[a])*(o-a)}return i}var _e=new URLSearchParams(location.search).has("export");document.documentElement.classList.toggle("export",_e);Du(_e);var nd=_e?2*Math.PI/3:2.4,Oc=document.getElementById("stage"),c_=document.getElementById("scene"),h_=document.getElementById("hud"),Cc=document.getElementById("chrome"),u_=document.getElementById("counter"),Rc=document.getElementById("progress"),Te=Cu(c_,{preserve:_e}),ku={slide:1.7,step:1.1},d_=new Set(["probe","ball","cup","grip","lens"]),f_=.24,Hu=.74,Ds={duration:.9,slideDelay:.85,stepDelay:.22,stagger:.07},id="cubic-bezier(0.2, 0.7, 0.2, 1)",p_="http://www.w3.org/2000/svg",Gt=(n,t,e)=>Math.min(e,Math.max(t,n)),$o=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Uc=n=>String(n).padStart(2,"0"),Ln=n=>n*180/Math.PI,an=n=>typeof window.__tr=="function"?window.__tr(n):n;function m_(n){let t=n.split(/\[Step (\d+)\]\s*/);if(t.length<3)return null;let e=[];for(let i=1;i<t.length;i+=2)e[Number(t[i])-1]=t[i+1].trim();return e}var he=[...document.querySelectorAll("section.slide")].map((n,t)=>{let e=[...n.querySelectorAll(".r, [data-step]")],i=Math.max(1,...e.map(a=>Number(a.dataset.step??0)+1)),s=n.querySelector(".notes")?.textContent.replace(/\s+/g," ").trim()??"",r=n.dataset.stepDurations?n.dataset.stepDurations.trim().split(/\s+/).map(Number):null,o=[];for(let a of n.querySelectorAll(".h1[data-step]"))for(let l=sd(a);l<=Math.min(rd(a),i-1);l+=1)o[l]=a.textContent.trim();return{el:n,index:t,id:n.id,steps:i,shots:(n.dataset.shots||"hero").trim().split(/\s+/),title:n.dataset.title||n.id,notes:s,stepNotes:m_(s),stepTitles:o,stepDurations:r,duration:r?r.reduce((a,l)=>a+l,0):Number(n.dataset.duration||0),chrome:n.dataset.chrome!=="off",reveal:e}}),si=(n,t)=>n.shots[Math.min(t,n.shots.length-1)];function sd(n){return Number(n.dataset.step??0)}function rd(n){return n.dataset.until===void 0?1/0:Number(n.dataset.until)}var Ki=(n,t)=>t>=sd(n)&&t<=rd(n),qo=0,Ze=_e?()=>qo:()=>performance.now()/1e3,Us=new Set;function Zi(n){return n.deckStart=Ze(),Us.add(n),n.addEventListener("cancel",()=>Us.delete(n)),_e&&n.pause(),n}var Bc=new Map;function Vu(n,t,e=!1){n.classList.remove("is-on");for(let l of n.getAnimations())l.cancel();n.classList.remove("is-off");let i=n.classList.contains("callout")||n.classList.contains("real-cover");i&&!e&&(t=Math.max(t,Vn));let s=!i,r={duration:e?0:Ds.duration*1e3,delay:e?0:t*1e3,easing:id},o=s?[{opacity:0,transform:"translate3d(0, 28px, 0)"},{opacity:1,transform:"none"}]:[{opacity:0},{opacity:1}],a=Zi(n.animate(o,{...r,fill:"both"}));_e||a.finished.then(()=>{n.classList.add("is-on"),a.cancel()},()=>{}),Zi(n.animate([{filter:s?"blur(8px)":"blur(6px)"},{filter:"blur(0px)"}],{...r,fill:"backwards"}));for(let l of n.querySelectorAll(".count"))Bc.set(l,{start:e?Ze()-10:Ze()+t+.1,to:Number(l.dataset.to),decimals:Number(l.dataset.decimals??0)})}function g_(n){let t=getComputedStyle(n).opacity;for(let i of n.getAnimations())i.cancel();let e=Zi(n.animate([{opacity:t},{opacity:0}],{duration:200,easing:"ease",fill:"both"}));n.classList.remove("is-on"),e.finished.then(()=>od(n),()=>{})}function od(n){!_e&&!Ki(n,Zt.step)&&(n.classList.remove("is-on"),n.classList.add("is-off"))}function ad(n){for(let t of[n.el,...n.reveal]){t.classList.remove("is-on");for(let e of t.getAnimations())e.cancel()}for(let t of n.el.querySelectorAll("video"))t.pause()}var Zt={slide:0,step:0},Yi=0,Vn=0,Dn=Ls(si(he[0],0),0),xr=Dn,Un=null;function x_(n){let t=e=>Math.atan2(Math.sin(e),Math.cos(e));return{...n,ry:t(n.ry),rx:t(n.rx),rz:t(n.rz)}}function ln(n,t,e={}){let i=Gt(n,0,he.length-1),s=he[i],r=Gt(t,0,s.steps-1),o=Zt,a=i!==o.slide;if(!a&&r===o.step&&!e.force)return;let l=a||e.force&&!e.instant;Dn=x_(e.from??xr),Vn=e.instant?0:l?ku.slide:ku.step,Yi=Ze(),Zt={slide:i,step:r},Mn.clock=0,Mn.weight=1,Mn.until=0,en.start=Ze(),en.active=-1,tn.ready=!1;for(let u of s.el.querySelectorAll("[data-tab]")){let[d,f=d]=u.dataset.tab.split("-").map(Number);u.classList.toggle("done",r>f),u.classList.toggle("current",r>=d&&r<=f)}for(let u of s.el.querySelectorAll("[data-dim-from]"))u.classList.toggle("is-dim",r>=Number(u.dataset.dimFrom));if(Fs.value=null,a||e.force){if(a){Un&&Un.slide!==s&&(Un.slide.el.classList.remove("is-active"),ad(Un.slide));let f=he[o.slide];Zi(f.el.animate([{opacity:1},{opacity:0}],{duration:380,easing:"ease",fill:"both"})),Un={slide:f,until:Ze()+.4}}for(let f of s.el.getAnimations())f.cancel();if(s.el.classList.add("is-active"),_e)for(let f of s.el.getAnimations({subtree:!0}))Us.has(f)||Zi(f);let u=0,d=l?Ds.slideDelay:Ds.stepDelay;for(let f of s.reveal)if(Ki(f,r))Vu(f,d+u*Ds.stagger,e.instant),u+=1;else{for(let g of f.getAnimations())g.cancel();od(f)}}else{let u=0;for(let d of s.reveal){let f=Ki(d,o.step),g=Ki(d,r);!f&&g?(Vu(d,Ds.stepDelay+u*Ds.stagger),u+=1):f&&!g&&g_(d)}}let c=getComputedStyle(Cc).opacity;for(let u of Cc.getAnimations())u.cancel();Zi(Cc.animate([{opacity:c},{opacity:s.chrome?1:0}],{duration:e.instant?0:500,fill:"both"})),u_.textContent=`${Uc(i+1)} / ${Uc(he.length)}`,jo?.mark(i);let h=getComputedStyle(Rc).transform;for(let u of Rc.getAnimations())u.cancel();Zi(Rc.animate([{transform:h==="none"?"scaleX(0)":h},{transform:`scaleX(${he.length>1?i/(he.length-1):1})`}],{duration:e.instant?0:900,easing:id,fill:"both"})),cd(),_e||history.replaceState(null,"",`#${s.id}${r?`.${r}`:""}`),gd()}function Zo(){let n=he[Zt.slide];Zt.step<n.steps-1?ln(Zt.slide,Zt.step+1):Zt.slide<he.length-1&&ln(Zt.slide+1,0)}function ld(){if(Zt.step>0)ln(Zt.slide,Zt.step-1);else if(Zt.slide>0){let n=he[Zt.slide-1];ln(Zt.slide-1,n.steps-1)}}_e||document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&cd()});var Gu=0;function cd(){clearTimeout(Gu);let n=[];if(he.forEach((t,e)=>{for(let i of t.el.querySelectorAll("video[data-autoplay]"))e===Zt.slide&&!_e&&ta(i,Zt.step)?i.paused&&(i.currentTime=0,Vn>0&&i.closest(".real-cover")?n.push(i):i.play().catch(()=>{})):i.pause()}),n.length){let t=`${Zt.slide}.${Zt.step}`;Gu=setTimeout(()=>{if(t===`${Zt.slide}.${Zt.step}`)for(let e of n)e.play().catch(()=>{})},Vn*1e3)}}var hd=4,Mn={clock:0,weight:1,until:0};function ea(){_e||(Mn.until=Ze()+hd)}var xe={x:0,y:0,inside:!1,down:!1,moved:-1/0},ce={u:0,v:0,amount:0,place:0},Jo=.045,__=.01/Jo,Oe=1,Fn={x:0,y:0};function Pc(n){return{x:(n.clientX-Fn.x)/Oe,y:(n.clientY-Fn.y)/Oe}}function na(n,t){let e=Te.pick(n,t);return e&&Math.hypot(e.u,e.v)<.97?e:null}function v_(n,t){let e=xe.inside?na(xe.x,xe.y):null;e&&ea();let i=e?xe.down?1.6:1:0;if(ce.amount+=(i-ce.amount)*(1-Math.exp(-t*7)),Math.abs(i-ce.amount)<1e-4&&(ce.amount=i),e){ce.amount<.03&&(ce.u=e.u,ce.v=e.v);let s=1-Math.exp(-t*14);ce.u+=(e.u-ce.u)*s,ce.v+=(e.v-ce.v)*s,Math.abs(e.u-ce.u)+Math.abs(e.v-ce.v)<1e-5&&(ce.u=e.u,ce.v=e.v)}return ce.amount>n.pressAmt?{...n,pressX:ce.u,pressY:ce.v,pressAmt:ce.amount}:n}var Fs={value:null};function y_(n,t){let e=xe.inside?na(xe.x,xe.y):null;if(e){ea(),ce.place<.03&&(ce.u=e.u,ce.v=e.v);let o=1-Math.exp(-t*14);ce.u+=(e.u-ce.u)*o,ce.v+=(e.v-ce.v)*o}let i=e?1:0;if(ce.place+=(i-ce.place)*(1-Math.exp(-t*7)),Math.abs(i-ce.place)<1e-4&&(ce.place=i),ce.place===0)return n;let s=ce.place,r=Fs.value??Math.max(n.pressAmt,__);return{...n,pressX:n.pressX+(ce.u-n.pressX)*s,pressY:n.pressY+(ce.v-n.pressY)*s,pressAmt:n.pressAmt+(r-n.pressAmt)*s}}function M_(n){let t=Ac(si(he[Zt.slide],Zt.step));if(!t)return;n.preventDefault(),ea();let e=Fs.value??xr[t.key];Fs.value=Gt(e+n.deltaY*t.rate,t.min,t.max)}function b_(n,t){let e=Ac(t);return e&&Fs.value!==null?{...n,[e.key]:Fs.value}:n}var Wu=1.4,tn={x:1.5,y:0,ready:!1};function Xu(n,t){let e=Math.hypot(n,t);if(e<.001)return{u:Wu,v:0};let i=Gt(e,Wu,1.6)/e;return{u:n*i,v:t*i}}function S_(n,t){let i=xe.inside&&Ze()-xe.moved<hd?Te.pick(xe.x,xe.y):null;i&&ea();let s=i?Xu(i.u,i.v):{u:n.lightX,v:n.lightY};tn.ready||(tn.x=s.u,tn.y=s.v,tn.ready=!0);let r=1-Math.exp(-t*(i?10:4));tn.x+=(s.u-tn.x)*r,tn.y+=(s.v-tn.y)*r;let o=Xu(tn.x,tn.y);return tn.x=o.u,tn.y=o.v,{...n,lightX:tn.x,lightY:tn.y}}var Ic=n=>n*(n>=0?12:11);function w_(n){let t=n.alpha*Math.PI/180,e=1/(2*Math.sin(t/2)),i=.33*e,s=pr(n),r=pr({...n,inflate:0,stretch:0}),o=-Ln(s.roi-r.roi),a=-Ln(s.periphery-r.periphery),l=Ln(s.roi-s.periphery),c=Jo*Gt(n.pressAmt,0,1.6);return{alpha:`${n.alpha.toFixed(2)}\xB0`,pitchM:`${i.toFixed(1)} mm`,gain:`${e.toFixed(1)}\xD7`,fringes:(30/i).toFixed(1),rp:(1+n.stretch).toFixed(3),stretchPct:`${(n.stretch*100).toFixed(1)} %`,rpInflate:(1+ko(n)).toFixed(3),ambient:`${(1013.2-Ic(n.inflate)).toFixed(1)} hPa`,dtheta:`${Math.abs(Ln(ni(t,n.stretch)-ni(t,0))).toFixed(1)}\xB0`,dentPct:`${(c*100).toFixed(1)} %`,dthetaDent:`${Math.abs(Ln(ni(t,(1-c/2)/(1+c/2)-1)-ni(t,0))).toFixed(1)}\xB0`,pressure:`${Ic(n.inflate)>=0?"+":"\u2212"}${Math.abs(Ic(n.inflate)).toFixed(1)} hPa`,dthetaInflate:`${o>=0?"+":"\u2212"}${Math.abs(o).toFixed(1)}\xB0`,dthetaRim:`${a>=0?"+":"\u2212"}${Math.abs(a).toFixed(1)}\xB0`,calib:`${Math.abs(l).toFixed(2)}\xB0`,calibStatus:an(Math.abs(l)<.15?"Zero \u2713":n.inflate<0?"Pump in":"Pump out"),lightShift:`${Ln(Bo(n))>=0?"+":"\u2212"}${Math.abs(Ln(Bo(n))).toFixed(1)}\xB0`}}function E_(n){if(n.light<.01||n.visible<.01)return"";let t=Te.project(Te.membranePoint(n.lightX,n.lightY)),e=Math.hypot(n.lightX,n.lightY)||1,i=Te.project(Te.membranePoint(n.lightX/e*1.08,n.lightY/e*1.08));return`<g opacity="${n.light.toFixed(3)}">
    <defs><radialGradient id="lamp-glow"><stop offset="0" stop-color="#fffbe8" stop-opacity="1"/><stop offset="0.25" stop-color="#ffe7a3" stop-opacity="0.7"/><stop offset="0.6" stop-color="#ffd36e" stop-opacity="0.22"/><stop offset="1" stop-color="#ffd36e" stop-opacity="0"/></radialGradient></defs>
    <line x1="${t.x.toFixed(1)}" y1="${t.y.toFixed(1)}" x2="${i.x.toFixed(1)}" y2="${i.y.toFixed(1)}" stroke="#ffe7a3" stroke-opacity="0.7" stroke-width="3" stroke-dasharray="8 9"/>
    <circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="120" fill="url(#lamp-glow)"/>
    <circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="30" fill="none" stroke="#fff3c4" stroke-opacity="0.8" stroke-width="2.5"/>
    <circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="17" fill="#fffdf4"/>
  </g>`}function at(n,t,e){let i=document.createElementNS(p_,n);for(let[s,r]of Object.entries(t))i.setAttribute(s,r);return e?.appendChild(i),i}function ue(n,t,e,i,s={}){let r=at("text",{x:t,y:e,fill:"#dce4ee","font-size":25,"font-weight":650,...s},n);return r.textContent=an(i),r}var $u=0;function T_(n){$u+=1;let t=`sec${$u}`,e=245,i=195,s=165,r=70,o=18,a=5,l=15,c=15,h=58,u=4,d=52,f=(X,rt,T=n)=>at(X,rt,T),g=(X,rt,T,gt,K=26)=>ue(n,X,rt,T,{fill:gt,"font-size":K,"font-weight":700,"text-anchor":"middle"}),x=[22,440].map(X=>f("rect",{x:X,y:s-42,width:28,height:84,rx:6,fill:"#1a2335",stroke:"rgb(238 243 251 / 35%)","stroke-width":1.5})),m=f("path",{fill:"rgb(157 186 255 / 12%)",stroke:"rgb(238 243 251 / 40%)","stroke-width":1.5}),p=f("path",{fill:"rgb(157 186 255 / 45%)"}),E=f("path",{fill:"rgb(217 242 114 / 45%)"}),M=Array.from({length:c},()=>f("line",{stroke:"#9dbaff","stroke-width":4,"stroke-linecap":"round"})),_=Array.from({length:c},()=>f("line",{stroke:"#d9f272","stroke-width":4,"stroke-linecap":"round"})),L=f("rect",{width:24,rx:12,fill:"#c9d4e6"}),A=[130,360].map(()=>f("path",{fill:"none",stroke:"#86adff","stroke-width":4,"stroke-linecap":"round","stroke-linejoin":"round"})),C=g(e,0,"","#9dbaff"),P=g(e,0,"","#d9f272"),S=ue(n,60,0,"upper grating",{fill:"#9dbaff","font-size":25,"font-weight":700}),y=ue(n,60,0,"lower grating",{fill:"#d9f272","font-size":25,"font-weight":700}),R=ue(n,22,46,"OUTSIDE AIR",{"letter-spacing":2,fill:"#c6d0de","font-size":24}),k=ue(n,22,322,"SEALED CHAMBER",{"letter-spacing":2,fill:"#c6d0de","font-size":24}),N=g(e,0,"center","#d9f272"),z=[g(72,s-58,"rim","#eef3fb"),g(418,s-58,"rim","#eef3fb")],H=f("g",{}),B=f("path",{fill:"none",stroke:"#ffe7a3","stroke-width":2.5,"stroke-dasharray":"6 8",opacity:.8},H);f("circle",{r:30,fill:"#ffe7a3",opacity:.45},H).classList.add("lamp-halo");let Q=f("circle",{r:12,fill:"#fffaf0"},H),V=H.querySelector(".lamp-halo"),it=f("g",{stroke:"#d6e4ff","stroke-width":4,"stroke-dasharray":"5 3"}),st=Array.from({length:c},()=>f("line",{},it)),dt=ue(n,0,0,"shadow of upper lines",{fill:"#d6e4ff","font-size":24,"font-weight":700,"text-anchor":"middle"}),Ft=f("defs",{}),kt=f("g",{}),q=122,j=80,mt=(X,rt,T)=>{let gt=f("g",{},kt),K=ud(gt,Ft,X,q,j),yt=f("circle",{cx:X,cy:q,r:j,fill:"none",stroke:rt,"stroke-width":3},gt),ct=ue(n,X,q+j+30,T,{fill:rt,"font-size":25,"font-weight":700,"text-anchor":"middle"});gt.appendChild(ct);let It=ue(n,X,q+j+60,"",{fill:"#dce4ee","font-size":24,"font-weight":700,"text-anchor":"middle"});return gt.appendChild(It),{group:gt,disc:K,ring:yt,zone:It,cx:X}},ot=mt(592,"#d9f272","center"),Rt=mt(792,"#eef3fb","rim"),Pt=ue(n,692,q+13,"\u2260",{fill:"#eef3fb","font-size":38,"font-weight":700,"text-anchor":"middle"});kt.appendChild(Pt);let Nt=ue(n,692,q+j+94,"",{"font-size":28,"font-weight":760,"text-anchor":"middle"});kt.appendChild(Nt);let Wt=(X,rt,T)=>{X.setAttribute("x1",rt.x.toFixed(1)),X.setAttribute("y1",rt.y.toFixed(1)),X.setAttribute("x2",T.x.toFixed(1)),X.setAttribute("y2",T.y.toFixed(1))};return X=>{let rt=Gt((X.apart-.35)/.7700000000000001,0,1),T=h*rt,gt=1-rt,K=Gt(X.inflate,-1,1)*gt,yt=r*K,ct=Gt(X.pressAmt*X.dentShow,0,1.6)*gt,It=e+Gt(X.pressX,-.8,.8)*i,bt=20*ct,w=X.calib,v=X.ambient,O=Gt(X.stretch,0,.05)*gt,$=1+u*O,et=Tt=>{let re=Gt((Tt-e)/i,-1,1),Qt=1-re*re;return s-yt*Qt*Qt+bt*Math.exp(-(((Tt-It)/42)**2))*Qt},Z=Tt=>{let re=et(Tt),Qt=(et(Tt+1)-et(Tt-1))/2,fe=Math.hypot(1,Qt);return{x:Tt,y:re,nx:Qt/fe,ny:-1/fe}},ft=(Tt,re)=>({x:Tt.x+Tt.nx*re,y:Tt.y+Tt.ny*re}),xt=(Tt,re)=>{let Qt="",fe="";for(let Ae=e-i;Ae<=e+i+.01;Ae+=6.5){let Ie=Z(Ae),se=ft(Ie,Tt),Ce=ft(Ie,re);Qt+=`${Qt?"L":"M"}${se.x.toFixed(1)} ${se.y.toFixed(1)}`,fe=`L${Ce.x.toFixed(1)} ${Ce.y.toFixed(1)}`+fe}return`${Qt}${fe}Z`};m.setAttribute("d",xt(o,-o)),m.setAttribute("opacity",gt.toFixed(3));for(let Tt of x)Tt.setAttribute("opacity",gt.toFixed(3));p.setAttribute("d",xt(o+T,o+T+a)),E.setAttribute("d",xt(-o-T,-o-T-a));for(let Tt=0;Tt<c;Tt+=1){let re=e-i+(Tt+.5)/c*i*2,Qt=Z(re),fe=e+(re-e)*$,Ae=Z(Gt(fe,e-i,e+i));Wt(M[Tt],ft(Ae,o+T+a),ft(Ae,o+T+a+l)),M[Tt].setAttribute("opacity",Gt((i-Math.abs(fe-e))/8,0,1).toFixed(3)),Wt(_[Tt],ft(Qt,-o-T-a),ft(Qt,-o-T-a-l))}S.setAttribute("y",(s-o-T-a-l-12).toFixed(1)),y.setAttribute("y",(s+o+T+a+l+28).toFixed(1));let Mt=Gt(X.apart/.35,0,1);S.setAttribute("opacity",Mt.toFixed(3)),y.setAttribute("opacity",Mt.toFixed(3));let Jt=ft(Z(It),o+a),lt=Gt(ct*3,0,1)*(1-Gt(Math.abs(K)*4,0,1));L.setAttribute("x",(It-12).toFixed(1)),L.setAttribute("y",Math.min(Jt.y-110,Jt.y-110).toFixed(1)),L.setAttribute("height","110"),L.setAttribute("opacity",lt.toFixed(3));let Et=Gt((Math.abs(K)-.04)*6,0,1),Ot=lt,zt=Gt(O/.004,0,1),Ct=Z(e);zt>Math.max(Et,Ot)?(C.textContent=an("stretched"),P.textContent="",C.setAttribute("x",e),C.setAttribute("y",(s-o-a-l-16).toFixed(1))):Et>=Ot?(C.textContent=an(K>=0?"stretched":"compressed"),P.textContent=an(K>=0?"compressed":"stretched"),C.setAttribute("x",e),P.setAttribute("x",e),C.setAttribute("y",(Math.min(Ct.y,s)-o-a-l-16).toFixed(1)),P.setAttribute("y",(Math.max(Ct.y,s)+o+a+l+32).toFixed(1))):(C.textContent=an("compressed"),P.textContent=an("stretched"),C.setAttribute("x",(It+(It<e?110:-110)).toFixed(1)),P.setAttribute("x",It.toFixed(1)),C.setAttribute("y",(s-o-a-l-30).toFixed(1)),P.setAttribute("y",(Z(It).y+o+a+l+34).toFixed(1)));let Kt=Math.max(w,Gt(X.zones,0,1)),Xt=Math.max(Et,Ot,zt)*gt*(1-Kt);C.setAttribute("opacity",Xt.toFixed(3)),P.setAttribute("opacity",Xt.toFixed(3));let de=Gt(Math.abs(K)*5,0,1);A.forEach((Tt,re)=>{let Qt=[130,360][re],fe=ft(Z(Qt),-o-a-l).y,Ae=ft(Z(Qt),o+a+l).y,Ie,se;w>.5?[Ie,se]=K<0?[fe+80,fe+26]:[fe+22,fe+76]:v>.5&&K<0?[Ie,se]=[Ae-76,Ae-24]:[Ie,se]=K>=0?[fe+80,fe+26]:[fe+22,fe+76];let Ce=se>Ie?1:-1;Tt.setAttribute("d",`M${Qt} ${Ie.toFixed(1)}L${Qt} ${se.toFixed(1)}M${Qt-11} ${(se-Ce*12).toFixed(1)}L${Qt} ${se.toFixed(1)}L${Qt+11} ${(se-Ce*12).toFixed(1)}`),Tt.setAttribute("opacity",de.toFixed(3))}),R.setAttribute("opacity",v.toFixed(3)),k.setAttribute("opacity",v.toFixed(3));let D=Gt(X.lightX/1.4,-1,1),_t=e+D*(i-20);H.setAttribute("opacity",X.light.toFixed(3)),Q.setAttribute("cx",_t.toFixed(1)),Q.setAttribute("cy",d),V.setAttribute("cx",_t.toFixed(1)),V.setAttribute("cy",d);let Y={x:_t,y:d},nt=s-o-a,vt=s+o+a,St=Tt=>Y.x+(Tt-Y.x)*((vt-Y.y)/(nt-Y.y)),$t="",ve=X.light*gt*(1-w);for(let Tt=0;Tt<c;Tt+=1){let re=e-i+(Tt+.5)/c*i*2,Qt=St(re),fe=Qt>e-i+4&&Qt<e+i-4;Wt(st[Tt],{x:Qt,y:vt-3},{x:Qt,y:vt+l+8}),st[Tt].setAttribute("opacity",fe?"1":"0"),Tt%5===2&&fe&&($t+=`M${_t.toFixed(1)} 30L${Qt.toFixed(1)} ${vt.toFixed(1)}`)}it.setAttribute("opacity",(.9*ve).toFixed(3)),dt.setAttribute("x",e),dt.setAttribute("y",(vt+l+36).toFixed(1)),dt.setAttribute("opacity",ve.toFixed(3)),B.setAttribute("d",$t),N.setAttribute("y",(Math.min(Ct.y,s)-o-a-l-14).toFixed(1)),N.setAttribute("opacity",Kt.toFixed(3));let J=Gt(X.rim??1,0,1);for(let Tt of z)Tt.setAttribute("opacity",(Kt*J).toFixed(3));Rt.group.setAttribute("opacity",J.toFixed(3)),kt.setAttribute("opacity",Kt.toFixed(3));let pt=pr({...X,alpha:6.31}),Dt=6.31*Math.PI/180;ot.disc.update(Dt,Ji*(1+ko(X)),Ji),Rt.disc.update(Dt,Ji*(1+Au(X)),Ji);let Ht=Gt((Math.abs(K)-.04)*6,0,1)*(1-w);ot.zone.textContent=an(K>=0?"stretched":"compressed"),Rt.zone.textContent=an(K>=0?"compressed":"stretched"),ot.zone.setAttribute("opacity",Ht.toFixed(3)),Rt.zone.setAttribute("opacity",Ht.toFixed(3));let Yt=Kt>.01?Gt(w/Kt,0,1):0;Pt.setAttribute("opacity",Yt.toFixed(3)),Nt.setAttribute("opacity",Yt.toFixed(3));let ne=Math.abs(Ln(pt.roi-pt.periphery))<.15;Pt.textContent=ne?"=":"\u2260",Pt.setAttribute("fill",ne?"#d9f272":"#eef3fb"),Rt.ring.setAttribute("stroke",ne?"#d9f272":"#eef3fb"),Nt.textContent=an(ne?"flat \xB7 zero":K<0?"sagging \xB7 pump in":"bulging \xB7 pump out"),Nt.setAttribute("fill",ne?"#d9f272":"#86adff")}}function qu(n){return n.classList.add("draw"),n.style.setProperty("--len",Math.ceil(n.getTotalLength())+2),n}var Yu=0,Ji=.33;function ud(n,t,e,i,s){Yu+=1;let r=`cross${Yu}`,o=200,a=200,l=1.65,c=7,h=a/l,u=.5*Ji*h,d=at("clipPath",{id:r},t);at("circle",{cx:o,cy:o,r:a},d);let f=at("mask",{id:`${r}-off`,maskUnits:"userSpaceOnUse",x:0,y:0,width:2*o,height:2*o},t);at("rect",{x:0,y:0,width:2*o,height:2*o,fill:"#fff"},f);let g=at("radialGradient",{id:`${r}-shade`},t);at("stop",{offset:"0","stop-color":"#000","stop-opacity":0},g),at("stop",{offset:"1","stop-color":"#000","stop-opacity":.3},g);let x=at("g",{transform:`translate(${e-s} ${i-s}) scale(${(s/a).toFixed(4)})`},n),m=at("g",{"clip-path":`url(#${r})`},x);at("rect",{x:0,y:0,width:2*o,height:2*o,fill:"#03060d"},m);let p=Array.from({length:2*c+1},(y,R)=>R-c),E=(y,R)=>{let k=at("g",{stroke:R,"stroke-width":u.toFixed(1)},y);return p.map(()=>at("line",{},k))},M=[E(m,"#ccf24d"),E(f,"#000")],_=[E(m,"#37494b"),E(at("g",{mask:`url(#${r}-off)`},m),"#4361a6")];at("circle",{cx:o,cy:o,r:a,fill:`url(#${r}-shade)`},m);let L=at("line",{stroke:"rgb(238 243 251 / 75%)","stroke-width":3,"stroke-dasharray":"9 10"},m),A=[-1,1,0].map(y=>({m:y,line:at("line",{stroke:"#eef3fb","stroke-width":y===0?6:4,opacity:y===0?.95:.4,"stroke-linecap":"round"},m),dots:p.map(()=>at("circle",{r:y===0?9:6,fill:"#eef3fb",stroke:"#04070d","stroke-width":2.5},m))})),C=(y,R)=>({x:o+y*h,y:o-R*h}),P=(y,R,k,N,z)=>{let H=C(R-3*l*N,k-3*l*z),B=C(R+3*l*N,k+3*l*z);y.setAttribute("x1",H.x.toFixed(1)),y.setAttribute("y1",H.y.toFixed(1)),y.setAttribute("x2",B.x.toFixed(1)),y.setAttribute("y2",B.y.toFixed(1))};return{node:x,update:(y,R,k)=>{let N=R/k-1,z={x:Math.cos(In),y:Math.sin(In)},H={x:Math.cos(In+y),y:Math.sin(In+y)};p.forEach((it,st)=>{for(let dt of M)P(dt[st],z.x*it*k,z.y*it*k,-z.y,z.x);for(let dt of _)P(dt[st],H.x*it*R,H.y*it*R,-H.y,H.x)});let B=z.x*H.y-z.y*H.x,Q=(it,st)=>({x:(st*k*H.y-it*R*z.y)/B,y:(z.x*it*R-H.x*st*k)/B});for(let it of A){let st=Q(0,-it.m),dt=Q(1,1-it.m),Ft=Math.hypot(dt.x-st.x,dt.y-st.y)||1;P(it.line,st.x,st.y,(dt.x-st.x)/Ft,(dt.y-st.y)/Ft),p.forEach((kt,q)=>{let j=Q(kt,kt-it.m),mt=C(j.x,j.y);it.dots[q].setAttribute("cx",mt.x.toFixed(1)),it.dots[q].setAttribute("cy",mt.y.toFixed(1)),it.dots[q].setAttribute("opacity",Math.hypot(j.x,j.y)<l*.94?it.m===0?"1":"0.55":"0")})}let V=ni(y,0);P(L,0,0,Math.cos(V),Math.sin(V)),L.setAttribute("opacity",Gt(Math.abs(N)*400,0,1).toFixed(3))}}}var Zu=0,A_={alphaChart(n){let t=g=>70+(g-2)/12*610,e=g=>60*Math.sin(g*Math.PI/360)/.33,i=g=>1/(2*Math.sin(g*Math.PI/360)),r=30*e(6.31)/i(6.31),o=g=>300-g/r*260,a=g=>300-Math.min(g,30)/30*260;at("line",{x1:70,y1:300,x2:680,y2:300,stroke:"rgb(238 243 251 / 20%)"},n);for(let g of[2,10,12,14])ue(n,t(g),332,`${g}\xB0`,{"text-anchor":"middle","font-size":30});ue(n,680,364,"ANGLE \u2192",{"text-anchor":"end","letter-spacing":2,fill:"#c6d0de","font-size":30});let l=(g,x)=>{let m="";for(let p=2;p<=14.001;p+=.1)m+=`${m?"L":"M"}${t(p).toFixed(1)} ${x(g(p)).toFixed(1)}`;return m};qu(at("path",{d:l(e,o),fill:"none",stroke:"#d9f272","stroke-width":3.5},n)),qu(at("path",{d:l(i,a),fill:"none",stroke:"#86adff","stroke-width":3.5},n)),ue(n,t(13.9),o(e(13.9))-22,"Resolution",{fill:"#d9f272","text-anchor":"end","font-weight":750,"font-size":34}),ue(n,t(3),a(i(3))-16,"Sensitivity",{fill:"#86adff","font-weight":750,"font-size":34});let c={x:t(6.31),y:o(e(6.31))};at("line",{x1:c.x,y1:c.y,x2:c.x,y2:300,stroke:"rgb(238 243 251 / 45%)","stroke-dasharray":"4 6"},n),at("circle",{cx:c.x,cy:c.y,r:16,fill:"none",stroke:"#eef3fb","stroke-width":2.5},n),ue(n,c.x+10,330,"balanced",{fill:"#eef3fb","font-weight":800,"text-anchor":"middle","font-size":30});let h=at("line",{x1:0,y1:34,x2:0,y2:300,stroke:"#eef3fb","stroke-width":2},n),u=at("circle",{r:8,fill:"#d9f272"},n),d=at("circle",{r:8,fill:"#86adff"},n),f=ue(n,0,24,"",{fill:"#eef3fb","font-size":34,"font-weight":780,"text-anchor":"middle"});return g=>{let x=t(Gt(g.alpha,2,14));f.setAttribute("x",Gt(x,150,600).toFixed(1)),f.textContent=`${i(g.alpha).toFixed(1)}\xD7 ${an("gain")}`,h.setAttribute("x1",x),h.setAttribute("x2",x),u.setAttribute("cx",x),u.setAttribute("cy",o(e(g.alpha))),d.setAttribute("cx",x),d.setAttribute("cy",a(i(g.alpha)))}},section:T_,crossings(n){let t=ud(n,at("defs",{},n),200,200,200);return e=>{let i=e.alpha*Math.PI/180,s=Jo/2*Gt(e.pressAmt,0,1.6);t.update(i,Ji*(1+ko(e)-s),Ji*(1+s));let r=1-Gt(e.apart/1.12,0,1);t.node.setAttribute("opacity",Gt(r*3-1,0,1).toFixed(3))}},scissors(n){Zu+=1;let t=`scissors${Zu}`,e=140,i=80,s=400,r=6,o=14,a=120,l=340,c="#eef3fb",h="#ccf24d",u="#9dbaff",d=at("defs",{},n),f=(H,B)=>{let Q=at("marker",{id:`${t}-${H}`,viewBox:"0 0 10 10",refX:8,refY:5,markerUnits:"userSpaceOnUse",markerWidth:13,markerHeight:13,orient:"auto-start-reverse"},d);at("path",{d:"M0 0L10 5L0 10Z",fill:B},Q)};f("slide",c),f("move",u),f("move-lower",h);let g=H=>{let B=at("g",{},n);return at("path",{d:`M-20 ${-o*.3}C-45 ${-o*.3} -55 30 -72 32`,fill:"none",stroke:H,"stroke-width":12,"stroke-linecap":"round"},B),at("ellipse",{cx:-100,cy:34,rx:30,ry:20,fill:"none",stroke:H,"stroke-width":9},B),at("path",{d:`M-24 ${r}L${s} ${r}Q${s*.82} ${-o} ${s*.5} ${-o}L-24 ${-o}Z`,fill:H,stroke:"#04070d","stroke-width":1.5,"stroke-linejoin":"round"},B),B},x=[0,1].map(()=>at("line",{stroke:"rgb(238 243 251 / 75%)","stroke-width":2.5,"stroke-dasharray":"8 8"},n)),m=g(u),p=g(h);at("circle",{cx:e,cy:i,r:6,fill:"#1a2335",stroke:c,"stroke-width":2},n);let E=at("g",{},n),M=at("circle",{r:10,fill:"none",stroke:c,"stroke-width":2.5,"stroke-dasharray":"5 5"},E),_=[0,1].map(()=>at("line",{stroke:"rgb(238 243 251 / 55%)","stroke-width":1.5},E)),L=at("line",{stroke:c,"stroke-width":4,"marker-end":`url(#${t}-slide)`},E),A=ue(E,0,0,"long slide",{fill:c,"font-size":25,"font-weight":700,"text-anchor":"middle"}),C=[u,h].map((H,B)=>at("line",{stroke:H,"stroke-width":4,"marker-end":`url(#${t}-${B?"move-lower":"move"})`},E)),P=ue(E,0,0,"small moves",{fill:c,"font-size":25,"font-weight":700,"text-anchor":"end"}),S=at("circle",{r:10,fill:c,stroke:"#04070d","stroke-width":2.5},n),y=H=>Math.asin(r/H),R=(H,B)=>({x:e+s*Math.cos(H)+r*Math.sin(H),y:i+B*(s*Math.sin(H)-r*Math.cos(H))}),k=y(a),N={x:e+a,y:i};M.setAttribute("cx",N.x.toFixed(1)),M.setAttribute("cy",N.y.toFixed(1)),x.forEach((H,B)=>{let Q=B?-1:1,V=R(k,Q);H.setAttribute("x1",(e+r*Math.sin(k)).toFixed(1)),H.setAttribute("y1",(i-Q*r*Math.cos(k)).toFixed(1)),H.setAttribute("x2",V.x.toFixed(1)),H.setAttribute("y2",V.y.toFixed(1))});let z=i+60;return H=>{let B=Math.max(H.stretch,0)+Jo*Gt(H.pressAmt,0,1.6),Q=Gt(B/.03,0,1),V=a+(l-a)*Q,it=y(V);m.setAttribute("transform",`translate(${e} ${i}) rotate(${Ln(it).toFixed(2)}) scale(1 -1)`),p.setAttribute("transform",`translate(${e} ${i}) rotate(${(-Ln(it)).toFixed(2)})`);let st={x:e+V,y:i};S.setAttribute("cx",st.x.toFixed(1)),S.setAttribute("cy",st.y.toFixed(1));let dt=Gt(B/.004,0,1);E.setAttribute("opacity",dt.toFixed(3));for(let Ft of x)Ft.setAttribute("opacity",dt.toFixed(3));[N,st].forEach((Ft,kt)=>{_[kt].setAttribute("x1",Ft.x.toFixed(1)),_[kt].setAttribute("y1",(Ft.y+13).toFixed(1)),_[kt].setAttribute("x2",Ft.x.toFixed(1)),_[kt].setAttribute("y2",(z+8).toFixed(1))}),L.setAttribute("x1",N.x.toFixed(1)),L.setAttribute("y1",z),L.setAttribute("x2",Math.max(N.x+1,st.x).toFixed(1)),L.setAttribute("y2",z),A.setAttribute("x",((N.x+Math.max(st.x,N.x+140))/2).toFixed(1)),A.setAttribute("y",z+34),C.forEach((Ft,kt)=>{let q=kt?-1:1,j=R(k,q),mt=R(it,q);Ft.setAttribute("x1",(j.x+14).toFixed(1)),Ft.setAttribute("y1",j.y.toFixed(1)),Ft.setAttribute("x2",(j.x+14).toFixed(1)),Ft.setAttribute("y2",(q>0?Math.min(j.y-1,mt.y):Math.max(j.y+1,mt.y)).toFixed(1))}),P.setAttribute("x",(R(k,1).x+24).toFixed(1)),P.setAttribute("y",i-34)}},dentView(n){for(let u of[18,484])at("rect",{x:u,y:88,width:22,height:60,rx:5,fill:"#1a2335",stroke:"rgb(238 243 251 / 35%)","stroke-width":1.5},n);let a=at("path",{fill:"rgb(157 186 255 / 14%)",stroke:"rgb(238 243 251 / 40%)","stroke-width":1.5},n),l=Array.from({length:24},()=>at("line",{stroke:"#9dbaff","stroke-width":3,"stroke-linecap":"round"},n)),c=Array.from({length:24},()=>at("line",{stroke:"#d9f272","stroke-width":3,"stroke-linecap":"round"},n)),h=at("rect",{width:18,rx:9,fill:"#c9d4e6"},n);return u=>{let d=Gt(u.pressAmt,0,1.6),f=528/2+Gt(u.pressX,-.8,.8)*(440/2),g=3*d,x=_=>{let L=Gt(2*(_-44)/440-1,-1,1);return 118+g*Math.exp(-(((_-f)/36)**2))*(1-L*L)},m=(_,L)=>{let A=x(_),C=(x(_+1)-x(_-1))/2,P=Math.hypot(1,C);return{x:_+C/P*L,y:A-L/P}},p="",E="";for(let _=44;_<=484+.01;_+=5){let L=m(_,11),A=m(_,-11);p+=`${p?"L":"M"}${L.x.toFixed(1)} ${L.y.toFixed(1)}`,E=`L${A.x.toFixed(1)} ${A.y.toFixed(1)}`+E}a.setAttribute("d",`${p}${E}Z`);for(let _=0;_<24;_+=1){let L=44+(_+.5)/24*440,[A,C]=[m(L,11),m(L,22)],[P,S]=[m(L,-11),m(L,-22)];for(let[y,R,k]of[[l[_],A,C],[c[_],P,S]])y.setAttribute("x1",R.x.toFixed(1)),y.setAttribute("y1",R.y.toFixed(1)),y.setAttribute("x2",k.x.toFixed(1)),y.setAttribute("y2",k.y.toFixed(1))}let M=m(f,11).y;h.setAttribute("x",(f-9).toFixed(1)),h.setAttribute("y",(M-96).toFixed(1)),h.setAttribute("height","96"),h.setAttribute("opacity",Gt(d*3,0,1).toFixed(3))}},gelsight(n){let l="#ff8573",c="#7fe3a1",h="#ffbe7d",u=at("defs",{},n),d=at("pattern",{id:"hatch-base",width:14,height:14,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},u);at("line",{x1:0,y1:0,x2:0,y2:14,stroke:h,"stroke-width":3.5,opacity:.55},d);let f=at("linearGradient",{id:"gel-wash",x1:"0",y1:"0",x2:"1",y2:"0"},u);for(let[j,mt,ot]of[[0,l,.2],[27,l,.95],[50,"#1a2238",1],[73,c,.95],[100,c,.2]])at("stop",{offset:`${j}%`,"stop-color":mt,"stop-opacity":ot},f);let g=(j,mt)=>{let ot=at("radialGradient",{id:j},u);at("stop",{offset:"0%","stop-color":mt,"stop-opacity":.9},ot),at("stop",{offset:"100%","stop-color":mt,"stop-opacity":0},ot)};g("gel-red",l),g("gel-green",c);let x=at("linearGradient",{id:"gel-bump",x1:"0",y1:"0",x2:"1",y2:"0"},u);at("stop",{offset:"0%","stop-color":l},x),at("stop",{offset:"46%","stop-color":"#1a2238"},x),at("stop",{offset:"54%","stop-color":"#1a2238"},x),at("stop",{offset:"100%","stop-color":c},x),at("rect",{x:80,y:300,width:620,height:230,fill:"rgb(11 19 38 / 55%)",stroke:"rgb(238 243 251 / 28%)","stroke-width":2},n),at("path",{d:"M390 500 120 300M390 500 660 300",fill:"none",stroke:"rgb(238 243 251 / 35%)","stroke-width":2,"stroke-dasharray":"7 9"},n),at("rect",{x:350,y:498,width:80,height:44,rx:7,fill:"#3b4863",stroke:"rgb(238 243 251 / 70%)","stroke-width":2},n),at("circle",{cx:390,cy:498,r:14,fill:"#0f1830",stroke:"#86adff","stroke-width":3.5},n);let m=at("rect",{x:80,y:194,width:620,height:106,fill:"rgb(134 173 255 / 10%)",stroke:"rgb(238 243 251 / 55%)","stroke-width":2},n),p=154,E=626,M=452;at("ellipse",{cx:p+30,cy:M-40,rx:150,ry:110,fill:"url(#gel-red)",opacity:.4},n),at("ellipse",{cx:E-30,cy:M-40,rx:150,ry:110,fill:"url(#gel-green)",opacity:.4},n);let _=at("g",{fill:"none","stroke-width":3,"stroke-dasharray":"8 9","stroke-linecap":"round"},n),L=at("path",{stroke:l},_),A=at("path",{stroke:c},_);at("rect",{x:p-22,y:M-14,width:44,height:28,rx:6,fill:l,transform:`rotate(-38 ${p} ${M})`},n),at("rect",{x:E-22,y:M-14,width:44,height:28,rx:6,fill:c,transform:`rotate(38 ${E} ${M})`},n);let C=at("g",{},n);at("rect",{x:80,y:194,width:620,height:106,fill:"url(#hatch-base)",stroke:h,"stroke-width":4,style:"filter:drop-shadow(0 0 10px rgb(255 190 125 / 55%))"},C),at("rect",{x:286,y:222,width:208,height:50,rx:25,fill:"rgb(9 15 28 / 88%)",stroke:h,"stroke-width":2},C),ue(C,390,258,"Rigid base",{fill:h,"font-size":32,"font-weight":760,"text-anchor":"middle"}),ue(C,390,588,"Rigid base, to maintain the optical geometry",{fill:h,"font-size":28,"font-weight":700,"text-anchor":"middle"});let P=at("g",{},n);at("rect",{x:80,y:194,width:620,height:106,fill:"none",stroke:h,"stroke-width":3,"stroke-dasharray":"12 10"},P),ue(P,390,588,"No rigid base: the optical geometry shifts",{fill:h,"font-size":28,"font-weight":700,"text-anchor":"middle"});let S=at("path",{d:"M80 150H700",fill:"none",stroke:"rgb(238 243 251 / 60%)","stroke-width":2,"stroke-dasharray":"5 9"},n),y=ue(n,692,136,"Calibrated plane",{fill:"#eef3fb","font-size":28,"font-weight":700,"text-anchor":"end"}),R=at("path",{fill:"#2c3857",stroke:"rgb(238 243 251 / 30%)","stroke-width":1.5},n),k=at("path",{fill:"none",stroke:"#eef3fb","stroke-width":4,"stroke-linecap":"round"},n),N=at("path",{fill:"none",stroke:l,"stroke-width":6,"stroke-linecap":"round"},n),z=at("path",{fill:"none",stroke:c,"stroke-width":6,"stroke-linecap":"round"},n),H=at("path",{fill:"none",stroke:l,"stroke-width":7,"stroke-linecap":"round"},n),B=at("path",{fill:"none",stroke:c,"stroke-width":7,"stroke-linecap":"round"},n),Q=at("ellipse",{cx:390,fill:"#c9d4e6"},n),V={fill:"#ffffff","font-size":32,"font-weight":750},it={fill:"none",stroke:"rgb(238 243 251 / 55%)","stroke-width":2};at("path",{d:"M704 172H750",...it},n),ue(n,764,183,"Gel",V),at("path",{d:`M${E+28} ${M}H750`,...it},n),ue(n,764,M+11,"Colored lights",V),at("path",{d:"M346 520H294",...it},n),ue(n,280,531,"Camera",{...V,"text-anchor":"end"});let st=1100,dt=300;at("circle",{cx:st,cy:dt,r:112,fill:"#0b1326",stroke:"rgb(238 243 251 / 60%)","stroke-width":2.5},n);let Ft=at("circle",{cx:st,cy:dt,r:108,fill:"url(#gel-wash)"},n),kt=at("ellipse",{cx:st,cy:dt,rx:52,ry:52,fill:"url(#gel-bump)"},n);at("path",{d:`M434 520H${st-44}Q${st} 520 ${st} 476V${dt+116}`,fill:"none",stroke:"rgb(238 243 251 / 35%)","stroke-width":2,"stroke-dasharray":"7 9"},n),ue(n,st,dt-130,"Camera view",{...V,"font-size":28,"text-anchor":"middle"});let q=[{rx:46,ry:46,dent:28,half:78,seen:56},{rx:26,ry:12,dent:3,half:44,seen:24}];return j=>{let mt=Gt(j.pressAmt/1.3,0,1),ot=Gt(j.soft??0,0,1),Rt=(j.demo??0)>=.5,Pt=q[Rt?1:0],Wt=Pt.dent*(1-.6*ot)+ot*74,X=54+(96+Wt)*mt,rt=Math.max(0,X-150),T=rt*ot*74/Wt,gt=rt-T,K=gt/28,yt=$=>T*Math.cos(Math.PI*($-390)/620)**2,ct=$=>150+yt($)+gt*Math.exp(-((($-390)/(Pt.half*.62))**2)),It="",bt="";for(let $=80;$<=700;$+=6)It+=`${$===80?"M":"L"}${$} ${ct($).toFixed(1)}`,bt=`L${$} ${(194+yt($)).toFixed(1)}`+bt;R.setAttribute("d",`${It}${bt}Z`),k.setAttribute("d",It);let w=($,et)=>{let Z="";for(let ft=$;ft<=et;ft+=4)Z+=`${ft===$?"M":"L"}${ft} ${ct(ft).toFixed(1)}`;return Z};H.setAttribute("d",w(390-Pt.half,384)),B.setAttribute("d",w(396,390+Pt.half)),H.setAttribute("opacity",K),B.setAttribute("opacity",K);let v=T/74;N.setAttribute("d",w(110,390-Pt.half-8)),z.setAttribute("d",w(390+Pt.half+8,670)),N.setAttribute("opacity",.85*v),z.setAttribute("opacity",.85*v),Q.setAttribute("rx",Pt.rx),Q.setAttribute("ry",Pt.ry),Q.setAttribute("cy",X-Pt.ry),Q.setAttribute("opacity",Rt?Gt(mt*6,0,1):1);let O=Math.min(40,Pt.half*.6)+110*v;L.setAttribute("d",`M${p+16} ${M-14}L${390-O} ${(ct(390-O)+6).toFixed(1)}`),A.setAttribute("d",`M${E-16} ${M-14}L${390+O} ${(ct(390+O)+6).toFixed(1)}`),_.setAttribute("opacity",.3+.6*Math.max(K,v)),m.setAttribute("opacity",1-ot),C.setAttribute("opacity",1-ot),P.setAttribute("opacity",ot),S.setAttribute("opacity",v),y.setAttribute("opacity",v),Ft.setAttribute("opacity",.9*v),kt.setAttribute("opacity",K),kt.setAttribute("rx",Pt.seen*(.55+.45*gt/Pt.dent)),kt.setAttribute("ry",Pt.seen*(.55+.45*gt/Pt.dent))}},forceBars(n){let t=[["GelSight",1.9],["Soft-Bubble",.8],["DenseTact 2.0",.41],["9DTact",.307],["Moir\xE9Tac",.25],["GelSlim 4.0",.04],["Insight",.03],["ViTacTip",.01],["Moir\xE9Skin",.0038]].map(([s,r])=>({name:s,v:r,ours:s==="Moir\xE9Skin"})),e=196,i=s=>Math.log10(s/.001)/Math.log10(3/.001)*520;ue(n,e,18,"NORMAL FORCE ERROR (N)",{"letter-spacing":2,fill:"#c6d0de"}),at("rect",{x:606,y:-9,width:186,height:38,rx:19,fill:"rgb(255 255 255 / 12%)",stroke:"#ffffff","stroke-width":2},n),ue(n,699,18,"LOG SCALE",{"letter-spacing":2,fill:"#ffffff","font-weight":780,"text-anchor":"middle"});for(let s of[.001,.01,.1,1]){let r=e+i(s);at("line",{x1:r,y1:40,x2:r,y2:452,stroke:"rgb(238 243 251 / 10%)"},n),ue(n,r,478,String(s),{"text-anchor":"middle"})}return t.forEach((s,r)=>{let o=46+r*45,a=Math.max(4,i(s.v));at("rect",{x:e,y:o,width:a,height:26,rx:5,fill:s.ours?"url(#grad-ink)":"#4a5569",class:"grow",style:`--i:${r}`},n),ue(n,e-16,o+20,s.name,{"text-anchor":"end",fill:s.ours?"url(#grad-ink)":"#dce4ee","font-weight":s.ours?760:600,"font-size":s.ours?28:26}),ue(n,e+a+12,o+20,String(s.v),{fill:s.ours?"#eef3fb":"#c6d0de","font-weight":s.ours?750:600})}),null}};function C_(n,t=340){let e=document.createElement("canvas");e.width=t,e.height=t;let i=e.getContext("2d"),s=i.createImageData(t,t),r=6.31*Math.PI/180,o=1.12,a=.33/15,l=n==="post"?{x:.22,y:.16,r:.45,stretch:-.08,twist:.02}:null;for(let c=0;c<t;c+=1)for(let h=0;h<t;h+=1){let u=(h+.5)/t*2-1,d=1-(c+.5)/t*2,f=u,g=d;if(l){let _=u-l.x,L=d-l.y,A=Math.exp(-(_*_+L*L)/(l.r*l.r)),C=1+l.stretch*A,P=-l.twist*A;f=l.x+(Math.cos(P)*_-Math.sin(P)*L)/C,g=l.y+(Math.sin(P)*_+Math.cos(P)*L)/C}let x=(u*Math.cos(o)+d*Math.sin(o))/a,m=(f*Math.cos(o+r)+g*Math.sin(o+r))/a,p=((x-m)%1+1)%1,E=(1-Math.abs(2*p-1))*(1-.3*(u*u+d*d)),M=(c*t+h)*4;s.data[M]=8+207*E,s.data[M+1]=16+226*E,s.data[M+2]=36+78*E,s.data[M+3]=255}return i.putImageData(s,0,0),e.toDataURL("image/png")}for(let n of document.querySelectorAll("image[data-fringe]"))n.setAttribute("href",C_(n.dataset.fringe));var Ju={axis:{stroke:"rgb(238 243 251 / 55%)",fill:"rgb(238 243 251 / 9%)"},rigid:{stroke:"#ffbe7d",fill:"rgb(255 190 125 / 16%)",glow:"#ffbe7d"},soft:{stroke:"#7da6ff",fill:"rgb(125 166 255 / 18%)",glow:"#7da6ff"}};function dd(){for(let n of document.querySelectorAll("text[data-pill]")){n.previousElementSibling?.classList.contains("pill")&&n.previousElementSibling.remove();let t=Ju[n.dataset.pill]??Ju.axis,e=n.getBBox(),i={x:e.x-15,y:e.y-5,width:e.width+30,height:e.height+10,rx:(e.height+10)/2},s=at("g",{class:"pill"});t.glow&&(at("rect",{...i,fill:t.glow,opacity:.5,filter:"url(#pill-glow)"},s),at("rect",{...i,fill:"#0a1222"},s)),at("rect",{...i,fill:t.fill,stroke:t.stroke,"stroke-width":2},s),n.parentNode.insertBefore(s,n)}}dd();document.fonts?.ready.then(dd);var fd=[];for(let n of document.querySelectorAll("[data-widget]")){let t=A_[n.dataset.widget],e=t?.(n);e&&fd.push({root:n,update:e})}function R_(n){let t=[...n.el.querySelectorAll(".callout")].map(s=>{let r=s.dataset.side==="left"?"left":"right",o=Te.project(Te.anchor(s.dataset.anchor,r));return{el:s,side:r,anchor:o,y:o.y,w:s.offsetWidth,h:s.offsetHeight||56,opacity:Number(getComputedStyle(s).opacity)}}),e=[];for(let s of["left","right"]){let r=t.filter(a=>a.side===s);for(let a=1;a<r.length;a+=1){let l=r[a-1].y+(r[a-1].h+r[a].h)/2+18;r[a].y=Math.max(r[a].y,l)}let o=s==="left"?-1:1;for(let a of r){let l=Number(a.el.dataset.x),c=s==="left"?l-a.w:l;a.el.style.transform=`translate(${c.toFixed(1)}px, ${(a.y-a.h/2).toFixed(1)}px)`,a.opacity>.01&&e.push(`<g opacity="${a.opacity.toFixed(3)}"><polyline points="${a.anchor.x.toFixed(1)},${a.anchor.y.toFixed(1)} ${(l-o*44).toFixed(1)},${a.y.toFixed(1)} ${(l-o*16).toFixed(1)},${a.y.toFixed(1)}" fill="none" stroke="rgb(238 243 251 / 45%)" stroke-width="1.5"/><circle cx="${a.anchor.x.toFixed(1)}" cy="${a.anchor.y.toFixed(1)}" r="5" fill="#d9f272"/></g>`)}}let i=t.filter(s=>s.el.dataset.group&&s.side==="right");if(i.length){let s=Math.max(...i.map(r=>Number(r.el.dataset.x)+r.w))+20;for(let r of new Set(i.map(o=>o.el.dataset.group))){let o=i.filter(x=>x.el.dataset.group===r),a=Math.max(...o.map(x=>x.opacity));if(a<=.01)continue;let l=Math.min(...o.map(x=>x.y-x.h/2))+4,c=Math.max(...o.map(x=>x.y+x.h/2))-4,h=(l+c)/2,u=o[0].el.dataset.groupColor??"#eef3fb",d=an(r).split("|"),f=Math.min(12,(c-l)/4),g=`M${s} ${l}C${s+9} ${l} ${s+9} ${l} ${s+9} ${l+f}L${s+9} ${h-f}C${s+9} ${h} ${s+9} ${h} ${s+18} ${h}C${s+9} ${h} ${s+9} ${h} ${s+9} ${h+f}L${s+9} ${c-f}C${s+9} ${c} ${s+9} ${c} ${s} ${c}`;e.push(`<g opacity="${a.toFixed(3)}"><path d="${g}" fill="none" stroke="${u}" stroke-width="2.5" stroke-linecap="round"/><text fill="${u}" font-size="28" font-weight="760">${d.map((x,m)=>`<tspan x="${s+30}" y="${(h+10+(m-(d.length-1)/2)*32).toFixed(1)}">${x}</tspan>`).join("")}</text></g>`)}}return e.join("")}function P_(n){let t=Math.max(n.calib,Gt(n.zones,0,1));if(t<.01||n.visible<.01)return"";let{roi:e,periphery:i}=pr(n),s=(h,u)=>Te.project(Te.membranePoint(h,u)),r=(h,u,d)=>{let f=s(Math.cos(h)*u,Math.sin(h)*u),g=s(Math.cos(h)*d,Math.sin(h)*d);return`${f.x.toFixed(1)},${f.y.toFixed(1)} ${g.x.toFixed(1)},${g.y.toFixed(1)}`},o="";for(let h=0;h<=72;h+=1){let u=h/72*Math.PI*2,d=s(Math.cos(u)*.6,Math.sin(u)*.6);o+=`${d.x.toFixed(1)},${d.y.toFixed(1)} `}let a=(h,u,d)=>`<text x="${h.x.toFixed(1)}" y="${h.y.toFixed(1)}" fill="${d}" font-size="29" font-weight="760" text-anchor="middle" paint-order="stroke" stroke="#04070d" stroke-width="6">${an(u)}</text>`,l=t.toFixed(3),c=Gt(n.rim??1,0,1).toFixed(3);return`<g opacity="${l}">
    <polyline points="${r(e,-.56,.56)}" stroke="#d9f272" stroke-width="5" stroke-linecap="round"/>
    ${a(s(-.22,-.2),"center","#d9f272")}
    <g opacity="${c}">
      <polyline points="${o}" fill="none" stroke="rgb(238 243 251 / 45%)" stroke-width="1.5" stroke-dasharray="6 8"/>
      <polyline points="${r(i,.64,.97)}" stroke="#eef3fb" stroke-width="5" stroke-linecap="round"/>
      <polyline points="${r(i,-.64,-.97)}" stroke="#eef3fb" stroke-width="5" stroke-linecap="round"/>
      ${a(s(Math.cos(i+Math.PI)*.8-.16,Math.sin(i+Math.PI)*.8),"rim","#eef3fb")}
    </g>
  </g>`}var I_=.11,L_={both:0,upper:1,lower:2},D_=[0,1,2].map(()=>{let n=document.createElement("div");n.className="lens";let t=document.createElement("canvas");n.appendChild(t);let e=document.createElement("span");return e.className="lens-label",n.appendChild(e),Oc.insertBefore(n,document.getElementById("slides")),{el:n,label:e,view:Te.createLens(t),target:null,px:0,r:0}}),Lc=[];function U_(n,t){if(n.at==="lower")return{u:-t.apart,v:0};if(n.at==="upper")return{u:t.apart,v:0};if(n.at==="follow"){let[e,i]=n.offset??[0,0],s=!_e&&xe.inside?na(xe.x,xe.y):null;return s?{u:s.u+e,v:s.v+i}:t.pressAmt>.05?{u:t.pressX+e,v:t.pressY+i}:{u:n.home[0],v:n.home[1]}}return{u:n.at[0],v:n.at[1]}}function F_(n,t,e){Lc=Ou(n)??Lc;let i=t.lens*t.visible,s="";return D_.forEach((r,o)=>{let a=Lc[o];if(!a||i<.01){r.el.style.visibility="hidden";return}r.el.style.visibility=a.hollow?"hidden":"visible",r.el.style.opacity=i.toFixed(3);let l=U_(a,t);if(!r.target||_e)r.target={...l};else{let A=1-Math.exp(-e*9);r.target.u+=(l.u-r.target.u)*A,r.target.v+=(l.v-r.target.v)*A,Math.abs(l.u-r.target.u)+Math.abs(l.v-r.target.v)<1e-5&&(r.target={...l})}let c=a.span??I_;r.label.textContent=an(a.label??"Lens \xB7 3 mm"),r.label.classList.toggle("sim",!!a.sim);let h=Te.project(Te.membranePoint(r.target.u,r.target.v)),u=Te.project(Te.membranePoint(r.target.u+c,r.target.v)),d=Math.hypot(u.x-h.x,u.y-h.y),f=o===0&&t.lensX!==void 0,g=f?t.lensR:a.r,x=f?t.lensX:a.x??h.x,m=f?t.lensY:a.y??h.y,p=Math.round(2*g*Gt(Oe*(window.devicePixelRatio||1),1,2));(p!==r.px||Math.abs(g-r.r)>.5)&&(r.el.style.width=`${2*g}px`,r.el.style.height=`${2*g}px`,r.view.setSize(p),r.px=p,r.r=g),r.el.style.transform=`translate(${(x-g).toFixed(1)}px, ${(m-g).toFixed(1)}px)`;let E=`${r.target.u.toFixed(5)},${r.target.v.toFixed(5)},${c},${a.mode},${p},${Ko}`;!a.hollow&&(_e||E!==r.key)&&(r.view.render(r.target.u,r.target.v,c,L_[a.mode]??0),r.key=E);let M=x-h.x,_=m-h.y,L=Math.hypot(M,_);if(!a.plain&&L>g+d+8){let A=M/L,C=_/L;s+=`<g opacity="${i.toFixed(3)}" fill="none" stroke="rgb(238 243 251 / 75%)" stroke-width="2">
        <circle cx="${h.x.toFixed(1)}" cy="${h.y.toFixed(1)}" r="${d.toFixed(1)}"/>
        <line x1="${(h.x+A*d).toFixed(1)}" y1="${(h.y+C*d).toFixed(1)}" x2="${(x-A*g).toFixed(1)}" y2="${(m-C*g).toFixed(1)}" stroke-width="1.5"/>
      </g>`}}),s}var N_=-Ln(ni(fr.alpha*Math.PI/180,0));for(let n of document.querySelectorAll("video[data-fringe]")){let t=((N_-Number(n.dataset.fringe)+90)%180+180)%180-90;n.style.transform=`rotate(${t.toFixed(1)}deg)`,n.dataset.turn=t.toFixed(1)}var Fc=.985;function O_(n){for(let t of n.el.querySelectorAll(".real-cover")){let e=Te.project(Te.membranePoint(0,0)),i=Te.project(Te.membranePoint(Fc,0)),s=Math.hypot(i.x-e.x,i.y-e.y),r=`${e.x.toFixed(1)} ${e.y.toFixed(1)} ${s.toFixed(1)}`;t.dataset.at!==r&&(t.dataset.at=r,t.style.left=`${(e.x-s).toFixed(1)}px`,t.style.top=`${(e.y-s).toFixed(1)}px`,t.style.width=`${(2*s).toFixed(1)}px`,t.style.height=`${(2*s).toFixed(1)}px`)}}function B_(n,t,e,i){let s=[...n.el.querySelectorAll(".real-cover video[data-track], .real video[data-track][data-lead]")].find(u=>Ki(u.closest(".real-cover, .real"),Zt.step)),r=s?.dataset.track;if(!r)return t;let o=s.hasAttribute("data-lead"),a=_e?o?i%Xo[r].seconds:Xo[r].still:s.currentTime,l=zu(r,a);if(!l)return t;let c={...t},h=(u,d)=>{c[u]=t[u]+(d-t[u])*e};if(l.inflate!==void 0&&h("inflate",l.inflate),l.amt!==void 0){let u=Number(s.dataset.turn??0)*Math.PI/180;h("pressX",Fc*(l.x*Math.cos(u)-l.y*Math.sin(u))),h("pressY",-Fc*(l.x*Math.sin(u)+l.y*Math.cos(u))),h("pressAmt",l.amt)}return c}var Yo=new Map;function z_(n){if(!_e)for(let t of n.el.querySelectorAll("video[data-follow]")){let e=n.el.querySelector(t.dataset.follow);e&&!t.paused&&!e.paused&&Math.abs(t.currentTime-e.currentTime)>.12&&(t.currentTime=e.currentTime)}for(let t of n.el.querySelectorAll("[data-video-steps]")){let e=n.el.querySelector(t.dataset.videoSteps),i=Yo.get(t);if(e&&i){let r=Number(i.dataset.from),o=Math.min(Number(i.dataset.to),e.duration||1/0);(e.currentTime<r||e.currentTime>=o-.05)&&(e.currentTime=r)}let s=e?e.currentTime:0;for(let r of t.querySelectorAll("[data-from]")){let o=s>=Number(r.dataset.from)&&s<Number(r.dataset.to);r.classList.toggle("current",o)}}}if(!_e)for(let n of document.querySelectorAll("[data-video-steps][data-hover-loop]")){let t=n.closest("section.slide")?.querySelector(n.dataset.videoSteps);for(let e of n.querySelectorAll("[data-from]"))e.addEventListener("pointerenter",()=>{Yo.set(n,e),t&&(t.currentTime=Number(e.dataset.from),t.play().catch(()=>{}))}),e.addEventListener("pointerleave",()=>{Yo.get(n)===e&&Yo.delete(n)})}var Ku=4,en={start:0,active:-1,weights:{glow:0,see:0}};function k_(n){return _e||!xe.inside?-1:n.findIndex(t=>{let e=t.getBoundingClientRect(),i=(e.left-Fn.x)/Oe,s=(e.top-Fn.y)/Oe;return xe.x>=i&&xe.x<=i+e.width/Oe&&xe.y>=s&&xe.y<=s+e.height/Oe})}function H_(n,t,e,i){let s=[...n.el.querySelectorAll("[data-feature]")];if(!s.length)return en.weights.glow=0,en.weights.see=0,t;let r=k_(s);r>=0&&(en.start=Ze()-r*Ku);let o=_e?i:Ze()-en.start,a=r>=0?r:Math.floor(o/Ku)%s.length;a!==en.active&&(s.forEach((g,x)=>g.classList.toggle("active",x===a)),en.active=a);let l=s[a].dataset.feature,c=1-Math.exp(-e*5);for(let g of["glow","see"]){let x=l===g?1:0;en.weights[g]+=(x-en.weights[g])*c,Math.abs(x-en.weights[g])<1e-4&&(en.weights[g]=x)}let h=en.weights.glow,u=en.weights.see,d=Ze(),f=1.35+.35*(.5+.5*Math.sin(d*nd));return{...t,el:t.el+(.55-t.el)*h+(.16-t.el)*u,glow:t.glow+(f-t.glow)*h+(.8-t.glow)*u,bloom:t.bloom+(.95-t.bloom)*h}}function V_(){let{glow:n,see:t}=en.weights;if(n<.01&&t<.01)return"";let e=(r,o,a)=>Te.project(Te.point(r,o,a)),i=(-(Ze()*60)%36).toFixed(1),s="";if(n>.01){let r=.6+.4*(.5+.5*Math.sin(Ze()*nd)),o="",a="";for(let l=0;l<12;l+=1){let c=l/12*Math.PI*2;if(Math.sin(c+.5)<.15)continue;let h=e(Math.cos(c)*.42,-.53,Math.sin(c)*.42);o+=`<circle cx="${h.x.toFixed(1)}" cy="${h.y.toFixed(1)}" r="16" fill="url(#led-glow)"/>`}for(let l of[-.2,.35,.9,1.45,2]){let c=e(Math.cos(l)*.62,-.5,Math.sin(l)*.62),h=e(Math.cos(l)*.62,-.04,Math.sin(l)*.62);a+=`<line x1="${c.x.toFixed(1)}" y1="${c.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}"/>`}s+=`<g opacity="${(n*r).toFixed(3)}">
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
    </g>`}return s}var Qu=Ze(),ju=new Map,Ko="",td="";function Qo(){let n=Ze(),t=Gt(n-Qu,0,.1);Qu=n;let e=he[Zt.slide],i=si(e,Zt.step),s=n-Yi,r=!_e&&n<Mn.until;Mn.weight+=((r?0:1)-Mn.weight)*(1-Math.exp(-t*5)),Math.abs((r?0:1)-Mn.weight)<1e-4&&(Mn.weight=r?0:1),r||(Mn.clock+=t);let o=Ls(i,_e?s:Mn.clock);if(Vn>0&&s<Vn){let h=Gt(s/Vn,0,1),u=$o(h),d=$o(Gt(h/f_,0,1)),f=$o(Gt((h-Hu)/(1-Hu),0,1)),g=o.probe<Dn.probe,x={...o};for(let m of Object.keys(o))if(typeof o[m]=="number"&&typeof Dn[m]=="number"){let p=u;d_.has(m)&&o[m]!==Dn[m]?p=o[m]<Dn[m]?d:f:m==="pressAmt"&&g&&(p=d),x[m]=Dn[m]+(o[m]-Dn[m])*p}o=x}o=H_(e,o,t,s),_e||(o.pressAmt*=Mn.weight,o=b_(o,i),Nu(i)?o=y_(o,t):Tc(i)&&(o=v_(o,t)),Bu(i)&&(o=S_(o,t))),o=B_(e,o,Vn>0?$o(Gt(s/Vn,0,1)):1,s),xr=o;let a=JSON.stringify(o);(_e||a!==Ko)&&(Te.applyState(o),Te.render(),Ko=a),Un&&n>=Un.until&&(Un.slide!==he[Zt.slide]&&(Un.slide.el.classList.remove("is-active"),ad(Un.slide)),Un=null);for(let[h,u]of Bc){let d=Gt((n-u.start)/1.4,0,1),f=1-Math.pow(1-d,3);h.textContent=(u.to*f).toFixed(u.decimals)}let l=w_(o);for(let h of e.el.querySelectorAll("[data-readout]")){let u=h.closest("[data-step], .r");if(u&&!Ki(u,Zt.step))continue;let d=l[h.dataset.readout];d!==void 0&&ju.get(h)!==d&&(h.textContent=d,ju.set(h,d))}for(let{root:h,update:u}of fd)e.el.contains(h)&&u(o);z_(e),O_(e);let c=R_(e)+P_(o)+E_(o)+V_()+F_(i,o,t);c!==td&&(h_.innerHTML=c,td=c)}function pd(){Qo(),requestAnimationFrame(pd)}function md(){let n=_e?We:window.innerWidth,t=_e?ke:window.innerHeight;Oe=Math.min(n/We,t/ke),Fn={x:(n-We*Oe)/2,y:(t-ke*Oe)/2},Oc.style.transform=`translate(${Fn.x}px, ${Fn.y}px) scale(${Oe})`;let e=Math.min(window.devicePixelRatio||1,2);Ko="";let i=Math.min(3840,We*Oe*e);Te.setSize(i,i*ke/We),jo?.place()}var gr=null;function G_(){let n=he[Zt.slide],t=he[Zt.slide+1],e=n.stepNotes!==null,i=o=>n.stepTitles[o]??`Step ${o+1}`,s=he.slice(0,Zt.slide).reduce((o,a)=>o+a.duration,0),r=n.stepDurations?n.stepDurations.slice(0,Zt.step).reduce((o,a)=>o+a,0):0;return{type:"state",index:Zt.slide,step:Zt.step,steps:n.steps,total:he.length,title:e?`${n.title} \xB7 ${i(Zt.step)}`:n.title,notes:e?n.stepNotes[Zt.step]??"":n.notes,duration:n.stepDurations?.[Zt.step]??n.duration,next:e&&Zt.step+1<n.steps?i(Zt.step+1):t?t.title:"End",plannedStart:s+r,plan:he.map(o=>({title:o.title,duration:o.duration}))}}function gd(){gr&&!gr.closed&&gr.postMessage(G_(),"*")}function W_(){gr=window.open("presenter.html","moireskin-presenter","width=1200,height=760")}window.addEventListener("message",n=>{let t=n.data;!t||typeof t!="object"||(t.type==="hello"?(gr=n.source,gd()):t.type==="nav"&&(t.action==="next"&&Zo(),t.action==="prev"&&ld(),t.action==="goto"&&ln(t.index,0)))});var qi="",ed=0;function X_(n){let t=n.key;["ArrowRight","ArrowDown","PageDown"," ","n"].includes(t)?(n.preventDefault(),(t===" "||qi==="")&&Zo()):t==="Enter"?(n.preventDefault(),qi?(ln(Number(qi)-1,0),qi=""):Zo()):["ArrowLeft","ArrowUp","PageUp","Backspace","p"].includes(t)?(n.preventDefault(),ld()):t==="Home"?ln(0,0):t==="End"?ln(he.length-1,0):t==="f"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{}):t==="b"||t==="."?document.body.classList.toggle("blackout"):t==="s"?W_():/^[0-9]$/.test(t)?qi=(qi+t).slice(-2):t==="Escape"&&(qi="")}function $_(){window.addEventListener("keydown",X_),window.addEventListener("resize",md),window.addEventListener("wheel",M_,{passive:!1}),window.addEventListener("hashchange",()=>{let n=xd();ln(n.slide,n.step)}),window.addEventListener("pointermove",n=>{let t=Pc(n);xe.x=t.x,xe.y=t.y,xe.inside=!0,xe.moved=Ze(),document.body.classList.remove("hide-cursor"),clearTimeout(ed),ed=setTimeout(()=>document.body.classList.add("hide-cursor"),2500)}),document.addEventListener("pointerleave",()=>{xe.inside=!1}),window.addEventListener("pointerdown",n=>{xe.down=!0;let t=Pc(n);xe.x=t.x,xe.y=t.y}),window.addEventListener("pointerup",()=>{xe.down=!1}),Oc.addEventListener("click",n=>{if(n.target.closest("a, video, button"))return;let t=si(he[Zt.slide],Zt.step),e=Pc(n);Tc(t)&&na(e.x,e.y)||Zo()})}var Dc={edge:64,margin:120},jo=null;function q_(){let n=document.createElement("nav");n.id="slide-nav",n.setAttribute("aria-label","Slides");let t=document.createElement("div");t.className="tip",n.append(t);let e=[];for(let h of he){let u=h.el.dataset.part;(u||!e.length)&&e.push({name:u??"",slides:[]}),e[e.length-1].slides.push(h)}let i=h=>{t.textContent=`${Uc(h+1)} \xB7 ${he[h].title}`,t.classList.add("on");let u=r[h].getBoundingClientRect(),d=n.getBoundingClientRect(),f=Gt(u.left+u.width/2-t.offsetWidth/2,8,window.innerWidth-t.offsetWidth-8);t.style.left=`${f-d.left}px`},s=()=>t.classList.remove("on"),r=[],o=[];for(let h of e){let u=document.createElement("div");u.className="group",u.style.flex=`${h.slides.length} 1 0`;let d=document.createElement("span");d.className="part",d.textContent=h.name;let f=document.createElement("div");f.className="cells";for(let g of h.slides){let x=g.index,m=document.createElement("button");m.type="button",m.tabIndex=-1,m.setAttribute("aria-label",`Slide ${x+1}: ${g.title}`),m.addEventListener("mousedown",p=>p.preventDefault()),m.addEventListener("click",()=>ln(x,0)),m.addEventListener("pointerenter",()=>i(x)),m.addEventListener("pointerleave",s),f.append(m),r[x]=m,o[x]=d}u.append(d,f),n.append(u)}document.body.append(n),n.addEventListener("wheel",h=>h.stopPropagation(),{passive:!0}),n.addEventListener("pointerdown",h=>h.stopPropagation());let a=!1,l=h=>{h!==n.classList.contains("open")&&(n.classList.toggle("open",h),document.body.classList.toggle("slide-nav-open",h&&a),h||s())};window.addEventListener("pointermove",h=>{h.pointerType!=="touch"&&l(window.innerHeight-h.clientY<=Dc.edge||n.contains(h.target))}),document.addEventListener("pointerleave",()=>l(!1));let c=-1;jo={mark(h){r[c]?.classList.remove("current"),o[c]?.classList.remove("current"),c=h,r[h].classList.add("current"),o[h].classList.add("current")},place(){n.style.left=`${Fn.x+Dc.margin*Oe}px`,n.style.width=`${(We-2*Dc.margin)*Oe}px`,a=n.getBoundingClientRect().top<Fn.y+ke*Oe}},jo.place()}for(let n of document.querySelectorAll(".cse-logo img")){let t=()=>n.closest(".cse-logo").classList.add("has-file");n.complete&&n.naturalWidth>0?t():n.addEventListener("load",t)}function xd(){let[n,t]=decodeURIComponent(location.hash.slice(1)).split("."),e=he.findIndex(i=>i.id===n);return e>=0?{slide:e,step:Number(t||0)}:{slide:0,step:0}}function Nc(n){return[...n.el.querySelectorAll("[data-video-steps]")].map(t=>n.el.querySelector(t.dataset.videoSteps)).filter(Boolean)}function ta(n,t){let e=n.closest("[data-step], .r");return!e||Ki(e,t)}function Y_(n,t){return new Promise(e=>{let i=()=>{let s=Math.min(Math.max(0,t),n.duration-.001);if(n.dataset.exportSeeked==="1"&&Math.abs(n.currentTime-s)<5e-4){e();return}n.dataset.exportSeeked="1",n.addEventListener("seeked",()=>requestAnimationFrame(()=>e()),{once:!0}),n.currentTime=s};n.readyState>=1?i():n.addEventListener("loadedmetadata",i,{once:!0})})}function Z_(){let n=he[Zt.slide],t=new Set(Nc(n));return[...n.el.querySelectorAll("video")].filter(e=>ta(e,Zt.step)&&!t.has(e)).map(e=>{let i=e.getBoundingClientRect(),s=!!e.closest(".real.round"),r=s?2:0;return{src:e.getAttribute("src"),poster:e.getAttribute("poster"),round:s,x:(i.left-Fn.x)/Oe+r,y:(i.top-Fn.y)/Oe+r,w:i.width/Oe-2*r,h:i.height/Oe-2*r}})}window.__deck={info:()=>he.map(n=>({id:n.id,title:n.title,steps:n.steps,shots:n.shots,notes:n.notes,duration:n.duration})),enter(n,t,e){if(qo+=100,e){let i=Ls(si(he[e.slide],e.step),e.at);ln(e.slide,e.step,{instant:!0,force:!0,from:i}),xr=i,ln(n,t,{from:i})}else ln(n,t,{from:_d(n,t),force:!0});return this.seek(0)},seek(n){qo=Yi+n;for(let i of Us){if(i.playState==="idle"){Us.delete(i);continue}i.currentTime=Math.max(0,(qo-i.deckStart)*1e3)}let t=he[Zt.slide],e=Nc(t).filter(i=>ta(i,Zt.step));return e.length?Promise.all(e.map(i=>Y_(i,n%i.duration))).then(()=>Qo()):(Qo(),null)},clipSeconds:(n,t)=>{let e=he[n],i=Vn;for(let o of Us){if(o.playState==="idle"||o.deckStart<Yi-1e-6)continue;let a=o.effect?.getComputedTiming();a&&Number.isFinite(a.endTime)&&(i=Math.max(i,o.deckStart-Yi+a.endTime/1e3))}for(let[o,a]of Bc)e.el.contains(o)&&a.start>=Yi-1e-6&&(i=Math.max(i,a.start-Yi+1.4));let s=si(e,t),r=Ec(s);return i=Math.max(i,r?r.from:Fu(s)),i+.25},loop:(n,t)=>{let e=he[n],i=Nc(e).filter(s=>ta(s,t));return i.length?{from:0,period:Math.max(...i.map(s=>s.duration))}:Ec(si(e,t))},media:Z_};function _d(n,t){return{...Ls(si(he[n],t),0),visible:0,size:380}}md();if(_e){for(let n of document.querySelectorAll("video"))n.preload="auto",n.load();he[0].el.classList.add("is-active"),Qo()}else{$_(),q_();let n=xd(),t=n.slide===0&&n.step===0;Dn=t?_d(0,0):Ls(si(he[n.slide],n.step),0),xr=Dn,ln(n.slide,n.step,{instant:!t,force:!0,from:Dn}),pd()}})();
