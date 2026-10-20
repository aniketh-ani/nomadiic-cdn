var lp=Object.defineProperty;var Th=(i,e)=>()=>(i&&(e=i(i=0)),e);var cp=(i,e)=>{for(var t in e)lp(i,t,{get:e[t],enumerable:!0})};function Ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function rn(i,e,t){return Math.max(e,Math.min(t,i))}function zu(i,e){return(i%e+e)%e}function Xp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qp(i,e,t){return i!==e?(t-i)/(e-i):0}function uo(i,e,t){return(1-t)*i+t*e}function Yp(i,e,t,n){return uo(i,e,1-Math.exp(-t*n))}function Kp(i,e=1){return e-Math.abs(zu(i,e*2)-e)}function Zp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $p(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jp(i,e){return i+Math.random()*(e-i)}function Qp(i){return i*(.5-Math.random())}function em(i){i!==void 0&&(Uh=i);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tm(i){return i*co}function nm(i){return i*go}function im(i){return(i&i-1)===0&&i!==0}function sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function om(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function cf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function am(){let i=vo("canvas");return i.style.display="block",i}function ao(i){i in Nh||(Nh[i]=!0,console.warn(i))}function lm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function cm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function um(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function El(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),u=n.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}function zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function wm(i,e,t,n,s,r,o,a){let l;if(e.side===zt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Si,a),l===null)return null;ta.copy(a),ta.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:i}}function na(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Jo),i.getVertexPosition(l,jo),i.getVertexPosition(c,Qo);let u=wm(i,e,t,n,Jo,jo,Qo,jh);if(u){let h=new E;os.getBarycoord(jh,Jo,jo,Qo,h),s&&(u.uv=os.getInterpolatedAttribute(s,a,l,c,h,new ie)),r&&(u.uv1=os.getInterpolatedAttribute(r,a,l,c,h,new ie)),o&&(u.normal=os.getInterpolatedAttribute(o,a,l,c,h,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new E,materialIndex:0};os.getNormal(Jo,jo,Qo,d.normal),u.face=d,u.barycoord=h}return u}function Ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=Ar(i[t]);for(let s in n)e[s]=n[s]}return e}function bm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}function df(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rm(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function cv(i,e,t,n,s,r,o){let a=new ye(0),l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(_){let w=_.isScene===!0?_.background:null;return w&&w.isTexture&&(w=(_.backgroundBlurriness>0?t:e).get(w)),w}function x(_){let w=!1,v=g(_);v===null?f(a,l):v&&v.isColor&&(f(v,1),w=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,w){let v=g(w);v&&(v.isCubeTexture||v.mapping===Ka)?(u===void 0&&(u=new Me(new bn(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:Ar(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Cs.copy(w.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(Cs)),u.material.toneMapped=dt.getTransfer(v.colorSpace)!==_t,(h!==v||d!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Me(new bt(2,2),new Se({name:"BackgroundMaterial",uniforms:Ar(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=dt.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,w){_.getRGB(sa,hf(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),l=w,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m}}function uv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,S,N,D,F){let B=!1,U=h(D,N,S);r!==U&&(r=U,c(r.object)),B=p(y,D,N,F),B&&g(y,D,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(y,S,N,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,S,N){let D=N.wireframe===!0,F=n[y.id];F===void 0&&(F={},n[y.id]=F);let B=F[S.id];B===void 0&&(B={},F[S.id]=B);let U=B[D];return U===void 0&&(U=d(l()),B[D]=U),U}function d(y){let S=[],N=[],D=[];for(let F=0;F<t;F++)S[F]=0,N[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:D,object:y,attributes:{},index:null}}function p(y,S,N,D){let F=r.attributes,B=S.attributes,U=0,H=N.getAttributes();for(let z in H)if(H[z].location>=0){let X=F[z],ee=B[z];if(ee===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),X===void 0||X.attribute!==ee||ee&&X.data!==ee.data)return!0;U++}return r.attributesNum!==U||r.index!==D}function g(y,S,N,D){let F={},B=S.attributes,U=0,H=N.getAttributes();for(let z in H)if(H[z].location>=0){let X=B[z];X===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(X=y.instanceColor));let ee={};ee.attribute=X,X&&X.data&&(ee.data=X.data),F[z]=ee,U++}r.attributes=F,r.attributesNum=U,r.index=D}function x(){let y=r.newAttributes;for(let S=0,N=y.length;S<N;S++)y[S]=0}function m(y){f(y,0)}function f(y,S){let N=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;N[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),F[y]!==S&&(i.vertexAttribDivisor(y,S),F[y]=S)}function _(){let y=r.newAttributes,S=r.enabledAttributes;for(let N=0,D=S.length;N<D;N++)S[N]!==y[N]&&(i.disableVertexAttribArray(N),S[N]=0)}function w(y,S,N,D,F,B,U){U===!0?i.vertexAttribIPointer(y,S,N,F,B):i.vertexAttribPointer(y,S,N,D,F,B)}function v(y,S,N,D){x();let F=D.attributes,B=N.getAttributes(),U=S.defaultAttributeValues;for(let H in B){let z=B[H];if(z.location>=0){let O=F[H];if(O===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(O=y.instanceColor)),O!==void 0){let X=O.normalized,ee=O.itemSize,pe=e.get(O);if(pe===void 0)continue;let be=pe.buffer,q=pe.type,te=pe.bytesPerElement,Q=q===i.INT||q===i.UNSIGNED_INT||O.gpuType===Cu;if(O.isInterleavedBufferAttribute){let K=O.data,Y=K.stride,ve=O.offset;if(K.isInstancedInterleavedBuffer){for(let ce=0;ce<z.locationSize;ce++)f(z.location+ce,K.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<z.locationSize;ce++)m(z.location+ce);i.bindBuffer(i.ARRAY_BUFFER,be);for(let ce=0;ce<z.locationSize;ce++)w(z.location+ce,ee/z.locationSize,q,X,Y*te,(ve+ee/z.locationSize*ce)*te,Q)}else{if(O.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)f(z.location+K,O.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let K=0;K<z.locationSize;K++)m(z.location+K);i.bindBuffer(i.ARRAY_BUFFER,be);for(let K=0;K<z.locationSize;K++)w(z.location+K,ee/z.locationSize,q,X,ee*te,ee/z.locationSize*K*te,Q)}}else if(U!==void 0){let X=U[H];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(z.location,X);break;case 3:i.vertexAttrib3fv(z.location,X);break;case 4:i.vertexAttrib4fv(z.location,X);break;default:i.vertexAttrib1fv(z.location,X)}}}}_()}function C(){T();for(let y in n){let S=n[y];for(let N in S){let D=S[N];for(let F in D)u(D[F].object),delete D[F];delete S[N]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;let S=n[y.id];for(let N in S){let D=S[N];for(let F in D)u(D[F].object),delete D[F];delete S[N]}delete n[y.id]}function A(y){for(let S in n){let N=n[S];if(N[y.id]===void 0)continue;let D=N[y.id];for(let F in D)u(D[F].object),delete D[F];delete N[y.id]}}function T(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function hv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==pi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let T=A===Vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mi&&!T)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function fv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Hn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let _=r?0:n,w=_*4,v=f.clippingState||null;l.value=v,v=u(g,d,w,p);for(let C=0;C!==w;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,v=p;w!==x;++w,v+=4)o.copy(h[w]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function pv(i){let e=new WeakMap;function t(o,a){return a===cc?o.mapping=wr:a===uc&&(o.mapping=br),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===cc||a===uc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Os(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function mv(i){let e=[],t=[],n=[],s=i,r=i-gr+1+td.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-gr?l=td[o-i+gr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*p),w=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let R=0;R<p;R++){let A=R%3*2/3-1,T=R>2?0:-1,M=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];_.set(M,x*g*R),w.set(d,m*g*R);let y=[R,R,R,R,R,R];v.set(y,f*g*R)}let C=new $e;C.setAttribute("position",new Xe(_,x)),C.setAttribute("uv",new Xe(w,m)),C.setAttribute("faceIndex",new Xe(v,f)),e.push(C),s>gr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sd(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gv(i,e,t){let n=new Float32Array(Ds),s=new E(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function rd(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function od(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ou(){return`

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
	`}function vv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===cc||l===uc,u=l===wr||l===br;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ir(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Ir(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yv(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let d=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let _=p.array;x=p.version;for(let w=0,v=_.length;w<v;w+=3){let C=_[w+0],R=_[w+1],A=_[w+2];d.push(C,R,R,A,A,C)}}else if(g!==void 0){let _=g.array;x=g.version;for(let w=0,v=_.length/3-1;w<v;w+=3){let C=w+0,R=w+1,A=w+2;d.push(C,R,R,A,A,C)}}else return;let m=new(cf(d)?Pa:Ca)(d,1);m.version=x;let f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function _v(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_]*x[_];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Mv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wv(i,e,t){let n=new WeakMap,s=new Qe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*C*4*h),A=new Ra(R,v,C,h);A.type=Mi,A.needsUpdate=!0;let T=w*4;for(let y=0;y<h;y++){let S=m[y],N=f[y],D=_[y],F=v*C*4*y;for(let B=0;B<S.count;B++){let U=B*T;p===!0&&(s.fromBufferAttribute(S,B),R[F+U+0]=s.x,R[F+U+1]=s.y,R[F+U+2]=s.z,R[F+U+3]=0),g===!0&&(s.fromBufferAttribute(N,B),R[F+U+4]=s.x,R[F+U+5]=s.y,R[F+U+6]=s.z,R[F+U+7]=0),x===!0&&(s.fromBufferAttribute(D,B),R[F+U+8]=s.x,R[F+U+9]=s.y,R[F+U+10]=s.z,R[F+U+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new ie(v,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function bv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $a(i,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ev(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Rv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),tn(t,n)}}function Cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),tn(t,n)}}function Pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;ud.set(n),i.uniformMatrix4fv(this.addr,!1,ud),tn(t,n)}}function Iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function Bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ad.compareFunction=lf,r=ad):r=ff,t.setTexture2D(e||r,s)}function Hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mf,s)}function kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gf,s)}function Vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pf,s)}function Wv(i){switch(i){case 5126:return Ev;case 35664:return Sv;case 35665:return Tv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Iv;case 35667:case 35671:return Lv;case 35668:case 35672:return Dv;case 35669:case 35673:return Uv;case 5125:return Nv;case 36294:return Fv;case 36295:return zv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Gv(i,e){i.uniform1fv(this.addr,e)}function Xv(i,e){let t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function qv(i,e){let t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function Yv(i,e){let t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function Kv(i,e){let t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zv(i,e){let t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $v(i,e){let t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jv(i,e){i.uniform1iv(this.addr,e)}function jv(i,e){i.uniform2iv(this.addr,e)}function Qv(i,e){i.uniform3iv(this.addr,e)}function ex(i,e){i.uniform4iv(this.addr,e)}function tx(i,e){i.uniform1uiv(this.addr,e)}function nx(i,e){i.uniform2uiv(this.addr,e)}function ix(i,e){i.uniform3uiv(this.addr,e)}function sx(i,e){i.uniform4uiv(this.addr,e)}function rx(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ff,r[o])}function ox(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mf,r[o])}function ax(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gf,r[o])}function lx(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pf,r[o])}function cx(i){switch(i){case 5126:return Gv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return Kv;case 35675:return Zv;case 35676:return $v;case 5124:case 35670:return Jv;case 35667:case 35671:return jv;case 35668:case 35672:return Qv;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}function fd(i,e){i.seq.push(e),i.map[e.id]=e}function ux(i,e,t){let n=i.name,s=n.length;for(ql.lastIndex=0;;){let r=ql.exec(n),o=ql.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fd(t,c===void 0?new Wc(a,i,e):new Gc(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Xc(a),fd(t,h)),t=h}}}function pd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function fx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function px(i){dt._getMatrix(md,dt.workingColorSpace,i);let e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Za:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fx(i.getShaderSource(e),o)}else return s}function mx(i,e){let t=px(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gx(i,e){let t;switch(e){case Eu:t="Linear";break;case Su:t="Reinhard";break;case Tu:t="Cineon";break;case Au:t="ACESFilmic";break;case Io:t="AgX";break;case Ru:t="Neutral";break;case Dp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vx(){dt.getLuminanceCoefficients(oa);let i=oa.x.toFixed(4),e=oa.y.toFixed(4),t=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function yx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _x(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function lo(i){return i!==""}function vd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function qc(i){return i.replace(Mx,bx)}function bx(i,e){let t=ot[e];if(t===void 0){let n=wx.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qc(t)}function yd(i){return i.replace(Ex,Sx)}function Sx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ax(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wr:case br:e="ENVMAP_TYPE_CUBE";break;case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function Cx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yd:e="ENVMAP_BLENDING_MULTIPLY";break;case Ip:e="ENVMAP_BLENDING_MIX";break;case Lp:e="ENVMAP_BLENDING_ADD";break}return e}function Px(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ix(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Tx(t),c=Ax(t),u=Rx(t),h=Cx(t),d=Px(t),p=xx(t),g=yx(r),x=s.createProgram(),m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lo).join(`
`),f.length>0&&(f+=`
`)):(m=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),f=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?ot.tonemapping_pars_fragment:"",t.toneMapping!==ls?gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,mx("linearToOutputTexel",t.outputColorSpace),vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),o=qc(o),o=vd(o,t),o=xd(o,t),a=qc(a),a=vd(a,t),a=xd(a,t),o=yd(o),a=yd(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=_+m+o,v=_+f+a,C=pd(s,s.VERTEX_SHADER,w),R=pd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(S){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(R).trim(),B=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,R);else{let H=gd(s,C,"vertex"),z=gd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+H+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||F==="")&&(U=!1);U&&(S.diagnostics={runnable:B,programLog:N,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:f}})}s.deleteShader(C),s.deleteShader(R),T=new _r(s,x),M=_x(s,x)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,hx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}function Dx(i,e,t,n,s,r,o){let a=new xo,l=new Yc,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,S,N,D){let F=N.fog,B=D.geometry,U=M.isMeshStandardMaterial?N.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),z=H&&H.mapping===Ka?H.image.height:null,O=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let X=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=X!==void 0?X.length:0,pe=0;B.morphAttributes.position!==void 0&&(pe=1),B.morphAttributes.normal!==void 0&&(pe=2),B.morphAttributes.color!==void 0&&(pe=3);let be,q,te,Q;if(O){let xt=_i[O];be=xt.vertexShader,q=xt.fragmentShader}else be=M.vertexShader,q=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);let K=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),ve=D.isInstancedMesh===!0,ce=D.isBatchedMesh===!0,Ee=!!M.map,J=!!M.matcap,re=!!H,L=!!M.aoMap,me=!!M.lightMap,ae=!!M.bumpMap,ge=!!M.normalMap,ue=!!M.displacementMap,Fe=!!M.emissiveMap,xe=!!M.metalnessMap,I=!!M.roughnessMap,b=M.anisotropy>0,G=M.clearcoat>0,ne=M.dispersion>0,de=M.iridescence>0,oe=M.sheen>0,ze=M.transmission>0,Ae=b&&!!M.anisotropyMap,Te=G&&!!M.clearcoatMap,st=G&&!!M.clearcoatNormalMap,_e=G&&!!M.clearcoatRoughnessMap,Re=de&&!!M.iridescenceMap,De=de&&!!M.iridescenceThicknessMap,qe=oe&&!!M.sheenColorMap,Ne=oe&&!!M.sheenRoughnessMap,lt=!!M.specularMap,et=!!M.specularColorMap,mt=!!M.specularIntensityMap,k=ze&&!!M.transmissionMap,Ce=ze&&!!M.thicknessMap,se=!!M.gradientMap,le=!!M.alphaMap,Ue=M.alphaTest>0,Pe=!!M.alphaHash,it=!!M.extensions,Dt=ls;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let Jt={shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:q,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ce,batchingColor:ce&&D._colorsTexture!==null,instancing:ve,instancingColor:ve&&D.instanceColor!==null,instancingMorph:ve&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Hr,alphaToCoverage:!!M.alphaToCoverage,map:Ee,matcap:J,envMap:re,envMapMode:re&&H.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:me,bumpMap:ae,normalMap:ge,displacementMap:d&&ue,emissiveMap:Fe,normalMapObjectSpace:ge&&M.normalMapType===zp,normalMapTangentSpace:ge&&M.normalMapType===af,metalnessMap:xe,roughnessMap:I,anisotropy:b,anisotropyMap:Ae,clearcoat:G,clearcoatMap:Te,clearcoatNormalMap:st,clearcoatRoughnessMap:_e,dispersion:ne,iridescence:de,iridescenceMap:Re,iridescenceThicknessMap:De,sheen:oe,sheenColorMap:qe,sheenRoughnessMap:Ne,specularMap:lt,specularColorMap:et,specularIntensityMap:mt,transmission:ze,transmissionMap:k,thicknessMap:Ce,gradientMap:se,opaque:M.transparent===!1&&M.blending===as&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:Ue,alphaHash:Pe,combine:M.combine,mapUv:Ee&&x(M.map.channel),aoMapUv:L&&x(M.aoMap.channel),lightMapUv:me&&x(M.lightMap.channel),bumpMapUv:ae&&x(M.bumpMap.channel),normalMapUv:ge&&x(M.normalMap.channel),displacementMapUv:ue&&x(M.displacementMap.channel),emissiveMapUv:Fe&&x(M.emissiveMap.channel),metalnessMapUv:xe&&x(M.metalnessMap.channel),roughnessMapUv:I&&x(M.roughnessMap.channel),anisotropyMapUv:Ae&&x(M.anisotropyMap.channel),clearcoatMapUv:Te&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(M.sheenRoughnessMap.channel),specularMapUv:lt&&x(M.specularMap.channel),specularColorMapUv:et&&x(M.specularColorMap.channel),specularIntensityMapUv:mt&&x(M.specularIntensityMap.channel),transmissionMapUv:k&&x(M.transmissionMap.channel),thicknessMapUv:Ce&&x(M.thicknessMap.channel),alphaMapUv:le&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Ee||le),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Y,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:Fe&&M.emissiveMap.isVideoTexture===!0&&dt.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pt,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:it&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&M.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function f(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let S in M.defines)y.push(S),y.push(M.defines[S]);return M.isRawShaderMaterial===!1&&(_(y,M),w(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function _(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let y=g[M.type],S;if(y){let N=_i[y];S=Ci.clone(N.uniforms)}else S=M.uniforms;return S}function C(M,y){let S;for(let N=0,D=u.length;N<D;N++){let F=u[N];if(F.cacheKey===y){S=F,++S.usedTimes;break}}return S===void 0&&(S=new Ix(i,y,M,r),u.push(S)),S}function R(M){if(--M.usedTimes===0){let y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:T}}function Ux(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Md(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,g,x,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,g,x,m){let f=o(h,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,x,m){let f=o(h,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Nx),n.length>1&&n.sort(d||Md),s.length>1&&s.sort(d||Md)}function u(){for(let h=e,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Fx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new wd,i.set(n,[o])):s>=r.length?(o=new wd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ye};break;case"SpotLight":t={position:new E,direction:new E,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function Ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Hx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kx(i){let e=new zx,t=Ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let s=new E,r=new Ke,o=new Ke;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,_=0,w=0,v=0,C=0,R=0,A=0;c.sort(Hx);for(let M=0,y=c.length;M<y;M++){let S=c[M],N=S.color,D=S.intensity,F=S.distance,B=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=N.r*D,h+=N.g*D,d+=N.b*D;else if(S.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(S.sh.coefficients[U],D);A++}else if(S.isDirectionalLight){let U=e.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let H=S.shadow,z=t.get(S);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=S.shadow.matrix,_++}n.directional[p]=U,p++}else if(S.isSpotLight){let U=e.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(N).multiplyScalar(D),U.distance=F,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,n.spot[x]=U;let H=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,H.updateMatrices(S),S.castShadow&&R++),n.spotLightMatrix[x]=H.matrix,S.castShadow){let z=t.get(S);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=B,v++}x++}else if(S.isRectAreaLight){let U=e.get(S);U.color.copy(N).multiplyScalar(D),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=U,m++}else if(S.isPointLight){let U=e.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),U.distance=S.distance,U.decay=S.decay,S.castShadow){let H=S.shadow,z=t.get(S);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=S.shadow.matrix,w++}n.point[g]=U,g++}else if(S.isHemisphereLight){let U=e.get(S);U.skyColor.copy(S.color).multiplyScalar(D),U.groundColor.copy(S.groundColor).multiplyScalar(D),n.hemi[f]=U,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==_||T.numPointShadows!==w||T.numSpotShadows!==v||T.numSpotMaps!==C||T.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,T.directionalLength=p,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=_,T.numPointShadows=w,T.numSpotShadows=v,T.numSpotMaps=C,T.numLightProbes=A,n.version=Bx++)}function l(c,u){let h=0,d=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){let w=c[f];if(w.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(w.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function bd(i){let e=new kx(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Vx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new bd(i),e.set(s,[a])):r>=o.length?(a=new bd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Xx(i,e,t){let n=new Bs,s=new ie,r=new ie,o=new Qe,a=new Zc({depthPacking:Fp}),l=new $c,c={},u=t.maxTextureSize,h={[Si]:zt,[zt]:Si,[pt]:pt},d=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Wx,fragmentShader:Gx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new $e;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Me(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let f=this.type;this.render=function(R,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),N=i.state;N.setBlending(bi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=f!==Gi&&this.type===Gi,F=f===Gi&&this.type!==Gi;for(let B=0,U=R.length;B<U;B++){let H=R[B],z=H.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let O=z.getFrameExtents();if(s.multiply(O),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,z.mapSize.y=r.y)),z.map===null||D===!0||F===!0){let ee=this.type!==Gi?{minFilter:Vn,magFilter:Vn}:{};z.map!==null&&z.map.dispose(),z.map=new Ht(s.x,s.y,ee),z.map.texture.name=H.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let X=z.getViewportCount();for(let ee=0;ee<X;ee++){let pe=z.getViewport(ee);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),N.viewport(o),z.updateMatrices(H,ee),n=z.getFrustum(),v(A,T,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Gi&&_(z,T),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,S)};function _(R,A){let T=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ht(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,T,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,T,p,x,null)}function w(R,A,T,M){let y=null,S=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)y=S;else if(y=T.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let N=y.uuid,D=A.uuid,F=c[N];F===void 0&&(F={},c[N]=F);let B=F[D];B===void 0&&(B=y.clone(),F[D]=B,A.addEventListener("dispose",C)),y=B}if(y.visible=A.visible,y.wireframe=A.wireframe,M===Gi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=i.properties.get(y);N.light=T}return y}function v(R,A,T,M,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Gi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);let D=e.update(R),F=R.material;if(Array.isArray(F)){let B=D.groups;for(let U=0,H=B.length;U<H;U++){let z=B[U],O=F[z.materialIndex];if(O&&O.visible){let X=w(R,O,M,y);R.onBeforeShadow(i,R,A,T,D,X,z),i.renderBufferDirect(T,null,D,X,R,z),R.onAfterShadow(i,R,A,T,D,X,z)}}}else if(F.visible){let B=w(R,F,M,y);R.onBeforeShadow(i,R,A,T,D,B,null),i.renderBufferDirect(T,null,D,B,R,null),R.onAfterShadow(i,R,A,T,D,B,null)}}let N=R.children;for(let D=0,F=N.length;D<F;D++)v(N[D],A,T,M,y)}function C(R){R.target.removeEventListener("dispose",C);for(let T in c){let M=c[T],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function Yx(i,e){function t(){let k=!1,Ce=new Qe,se=null,le=new Qe(0,0,0,0);return{setMask:function(Ue){se!==Ue&&!k&&(i.colorMask(Ue,Ue,Ue,Ue),se=Ue)},setLocked:function(Ue){k=Ue},setClear:function(Ue,Pe,it,Dt,Jt){Jt===!0&&(Ue*=Dt,Pe*=Dt,it*=Dt),Ce.set(Ue,Pe,it,Dt),le.equals(Ce)===!1&&(i.clearColor(Ue,Pe,it,Dt),le.copy(Ce))},reset:function(){k=!1,se=null,le.set(-1,0,0,0)}}}function n(){let k=!1,Ce=!1,se=null,le=null,Ue=null;return{setReversed:function(Pe){if(Ce!==Pe){let it=e.get("EXT_clip_control");Ce?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);let Dt=Ue;Ue=null,this.setClear(Dt)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?K(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!k&&(i.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(Ce&&(Pe=qx[Pe]),le!==Pe){switch(Pe){case nc:i.depthFunc(i.NEVER);break;case ic:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Pe}},setLocked:function(Pe){k=Pe},setClear:function(Pe){Ue!==Pe&&(Ce&&(Pe=1-Pe),i.clearDepth(Pe),Ue=Pe)},reset:function(){k=!1,se=null,le=null,Ue=null,Ce=!1}}}function s(){let k=!1,Ce=null,se=null,le=null,Ue=null,Pe=null,it=null,Dt=null,Jt=null;return{setTest:function(xt){k||(xt?K(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!k&&(i.stencilMask(xt),Ce=xt)},setFunc:function(xt,In,ai){(se!==xt||le!==In||Ue!==ai)&&(i.stencilFunc(xt,In,ai),se=xt,le=In,Ue=ai)},setOp:function(xt,In,ai){(Pe!==xt||it!==In||Dt!==ai)&&(i.stencilOp(xt,In,ai),Pe=xt,it=In,Dt=ai)},setLocked:function(xt){k=xt},setClear:function(xt){Jt!==xt&&(i.clearStencil(xt),Jt=xt)},reset:function(){k=!1,Ce=null,se=null,le=null,Ue=null,Pe=null,it=null,Dt=null,Jt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,_=null,w=null,v=null,C=null,R=null,A=new ye(0,0,0),T=0,M=!1,y=null,S=null,N=null,D=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,H=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=H>=2);let O=null,X={},ee=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),be=new Qe().fromArray(ee),q=new Qe().fromArray(pe);function te(k,Ce,se,le){let Ue=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(k,Pe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<se;it++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Ce+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Pe}let Q={};Q[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Mr),ae(!1),ge(Ah),K(i.CULL_FACE),L(bi);function K(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Y(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function ve(k,Ce){return h[k]!==Ce?(i.bindFramebuffer(k,Ce),h[k]=Ce,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ce),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ce(k,Ce){let se=p,le=!1;if(k){se=d.get(Ce),se===void 0&&(se=[],d.set(Ce,se));let Ue=k.textures;if(se.length!==Ue.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,it=Ue.length;Pe<it;Pe++)se[Pe]=i.COLOR_ATTACHMENT0+Pe;se.length=Ue.length,le=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,le=!0);le&&i.drawBuffers(se)}function Ee(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let J={[Ls]:i.FUNC_ADD,[pp]:i.FUNC_SUBTRACT,[mp]:i.FUNC_REVERSE_SUBTRACT};J[gp]=i.MIN,J[vp]=i.MAX;let re={[xp]:i.ZERO,[yp]:i.ONE,[_p]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[Tp]:i.SRC_ALPHA_SATURATE,[Ep]:i.DST_COLOR,[wp]:i.DST_ALPHA,[Mp]:i.ONE_MINUS_SRC_COLOR,[tc]:i.ONE_MINUS_SRC_ALPHA,[Sp]:i.ONE_MINUS_DST_COLOR,[bp]:i.ONE_MINUS_DST_ALPHA,[Ap]:i.CONSTANT_COLOR,[Rp]:i.ONE_MINUS_CONSTANT_COLOR,[Cp]:i.CONSTANT_ALPHA,[Pp]:i.ONE_MINUS_CONSTANT_ALPHA};function L(k,Ce,se,le,Ue,Pe,it,Dt,Jt,xt){if(k===bi){x===!0&&(Y(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),k!==fp){if(k!==m||xt!==M){if((f!==Ls||v!==Ls)&&(i.blendEquation(i.FUNC_ADD),f=Ls,v=Ls),xt)switch(k){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wt:i.blendFunc(i.ONE,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,w=null,C=null,R=null,A.set(0,0,0),T=0,m=k,M=xt}return}Ue=Ue||Ce,Pe=Pe||se,it=it||le,(Ce!==f||Ue!==v)&&(i.blendEquationSeparate(J[Ce],J[Ue]),f=Ce,v=Ue),(se!==_||le!==w||Pe!==C||it!==R)&&(i.blendFuncSeparate(re[se],re[le],re[Pe],re[it]),_=se,w=le,C=Pe,R=it),(Dt.equals(A)===!1||Jt!==T)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Jt),A.copy(Dt),T=Jt),m=k,M=!1}function me(k,Ce){k.side===pt?Y(i.CULL_FACE):K(i.CULL_FACE);let se=k.side===zt;Ce&&(se=!se),ae(se),k.blending===as&&k.transparent===!1?L(bi):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let le=k.stencilWrite;a.setTest(le),le&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function ge(k){k!==up?(K(i.CULL_FACE),k!==S&&(k===Ah?i.cullFace(i.BACK):k===hp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),S=k}function ue(k){k!==N&&(U&&i.lineWidth(k),N=k)}function Fe(k,Ce,se){k?(K(i.POLYGON_OFFSET_FILL),(D!==Ce||F!==se)&&(i.polygonOffset(Ce,se),D=Ce,F=se)):Y(i.POLYGON_OFFSET_FILL)}function xe(k){k?K(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function I(k){k===void 0&&(k=i.TEXTURE0+B-1),O!==k&&(i.activeTexture(k),O=k)}function b(k,Ce,se){se===void 0&&(O===null?se=i.TEXTURE0+B-1:se=O);let le=X[se];le===void 0&&(le={type:void 0,texture:void 0},X[se]=le),(le.type!==k||le.texture!==Ce)&&(O!==se&&(i.activeTexture(se),O=se),i.bindTexture(k,Ce||Q[k]),le.type=k,le.texture=Ce)}function G(){let k=X[O];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(k){be.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),be.copy(k))}function Ne(k){q.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function lt(k,Ce){let se=c.get(Ce);se===void 0&&(se=new WeakMap,c.set(Ce,se));let le=se.get(k);le===void 0&&(le=i.getUniformBlockIndex(Ce,k.name),se.set(k,le))}function et(k,Ce){let le=c.get(Ce).get(k);l.get(Ce)!==le&&(i.uniformBlockBinding(Ce,le,k.__bindingPointIndex),l.set(Ce,le))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},O=null,X={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,_=null,w=null,v=null,C=null,R=null,A=new ye(0,0,0),T=0,M=!1,y=null,S=null,N=null,D=null,F=null,be.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:Y,bindFramebuffer:ve,drawBuffers:ce,useProgram:Ee,setBlending:L,setMaterial:me,setFlipSided:ae,setCullFace:ge,setLineWidth:ue,setPolygonOffset:Fe,setScissorTest:xe,activeTexture:I,bindTexture:b,unbindTexture:G,compressedTexImage2D:ne,compressedTexImage3D:de,texImage2D:Re,texImage3D:De,updateUBOMapping:lt,uniformBlockBinding:et,texStorage2D:st,texStorage3D:_e,texSubImage2D:oe,texSubImage3D:ze,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Te,scissor:qe,viewport:Ne,reset:mt}}function Ed(i,e,t,n){let s=Kx(n);switch(t){case jd:return i*e;case ef:return i*e;case tf:return i*e*2;case Lu:return i*e/s.components*s.byteLength;case Du:return i*e/s.components*s.byteLength;case nf:return i*e*2/s.components*s.byteLength;case Uu:return i*e*2/s.components*s.byteLength;case Qd:return i*e*3/s.components*s.byteLength;case pi:return i*e*4/s.components*s.byteLength;case Nu:return i*e*4/s.components*s.byteLength;case ya:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(i,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(i,8)*Math.max(e,8)/2;case gc:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ba:case Dc:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sf:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kx(i){switch(i){case Yi:case Zd:return{byteLength:1,components:1};case mo:case $d:case Vt:return{byteLength:2,components:1};case Pu:case Iu:return{byteLength:2,components:4};case Fs:case Cu:case Mi:return{byteLength:4,components:1};case Jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Zx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,b){return p?new OffscreenCanvas(I,b):vo("canvas")}function x(I,b,G){let ne=1,de=xe(I);if((de.width>G||de.height>G)&&(ne=G/Math.max(de.width,de.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let oe=Math.floor(ne*de.width),ze=Math.floor(ne*de.height);h===void 0&&(h=g(oe,ze));let Ae=b?g(oe,ze):h;return Ae.width=oe,Ae.height=ze,Ae.getContext("2d").drawImage(I,0,0,oe,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+oe+"x"+ze+")."),Ae}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),I;return I}function m(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(I,b,G,ne,de=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let oe=b;if(b===i.RED&&(G===i.FLOAT&&(oe=i.R32F),G===i.HALF_FLOAT&&(oe=i.R16F),G===i.UNSIGNED_BYTE&&(oe=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.R8UI),G===i.UNSIGNED_SHORT&&(oe=i.R16UI),G===i.UNSIGNED_INT&&(oe=i.R32UI),G===i.BYTE&&(oe=i.R8I),G===i.SHORT&&(oe=i.R16I),G===i.INT&&(oe=i.R32I)),b===i.RG&&(G===i.FLOAT&&(oe=i.RG32F),G===i.HALF_FLOAT&&(oe=i.RG16F),G===i.UNSIGNED_BYTE&&(oe=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RG8UI),G===i.UNSIGNED_SHORT&&(oe=i.RG16UI),G===i.UNSIGNED_INT&&(oe=i.RG32UI),G===i.BYTE&&(oe=i.RG8I),G===i.SHORT&&(oe=i.RG16I),G===i.INT&&(oe=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),G===i.UNSIGNED_INT&&(oe=i.RGB32UI),G===i.BYTE&&(oe=i.RGB8I),G===i.SHORT&&(oe=i.RGB16I),G===i.INT&&(oe=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),G===i.UNSIGNED_INT&&(oe=i.RGBA32UI),G===i.BYTE&&(oe=i.RGBA8I),G===i.SHORT&&(oe=i.RGBA16I),G===i.INT&&(oe=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),b===i.RGBA){let ze=de?Za:dt.getTransfer(ne);G===i.FLOAT&&(oe=i.RGBA32F),G===i.HALF_FLOAT&&(oe=i.RGBA16F),G===i.UNSIGNED_BYTE&&(oe=ze===_t?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(I,b){let G;return I?b===null||b===Fs||b===Er?G=i.DEPTH24_STENCIL8:b===Mi?G=i.DEPTH32F_STENCIL8:b===mo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fs||b===Er?G=i.DEPTH_COMPONENT24:b===Mi?G=i.DEPTH_COMPONENT32F:b===mo&&(G=i.DEPTH_COMPONENT16),G}function C(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Vn&&I.minFilter!==jn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function R(I){let b=I.target;b.removeEventListener("dispose",R),T(b),b.isVideoTexture&&u.delete(b)}function A(I){let b=I.target;b.removeEventListener("dispose",A),y(b)}function T(I){let b=n.get(I);if(b.__webglInit===void 0)return;let G=I.source,ne=d.get(G);if(ne){let de=ne[b.__cacheKey];de.usedTimes--,de.usedTimes===0&&M(I),Object.keys(ne).length===0&&d.delete(G)}n.remove(I)}function M(I){let b=n.get(I);i.deleteTexture(b.__webglTexture);let G=I.source,ne=d.get(G);delete ne[b.__cacheKey],o.memory.textures--}function y(I){let b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let de=0;de<b.__webglFramebuffer[ne].length;de++)i.deleteFramebuffer(b.__webglFramebuffer[ne][de]);else i.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)i.deleteFramebuffer(b.__webglFramebuffer[ne]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=I.textures;for(let ne=0,de=G.length;ne<de;ne++){let oe=n.get(G[ne]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(G[ne])}n.remove(I)}let S=0;function N(){S=0}function D(){let I=S;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),S+=1,I}function F(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function B(I,b){let G=n.get(I);if(I.isVideoTexture&&ue(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){let ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,I,b);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function U(I,b){let G=n.get(I);if(I.version>0&&G.__version!==I.version){q(G,I,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function H(I,b){let G=n.get(I);if(I.version>0&&G.__version!==I.version){q(G,I,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function z(I,b){let G=n.get(I);if(I.version>0&&G.__version!==I.version){te(G,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let O={[Ns]:i.REPEAT,[Us]:i.CLAMP_TO_EDGE,[hc]:i.MIRRORED_REPEAT},X={[Vn]:i.NEAREST,[Up]:i.NEAREST_MIPMAP_NEAREST,[Ho]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},ee={[Op]:i.NEVER,[Gp]:i.ALWAYS,[Bp]:i.LESS,[lf]:i.LEQUAL,[Hp]:i.EQUAL,[Wp]:i.GEQUAL,[kp]:i.GREATER,[Vp]:i.NOTEQUAL};function pe(I,b){if(b.type===Mi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===jn||b.magFilter===yl||b.magFilter===Ho||b.magFilter===kn||b.minFilter===jn||b.minFilter===yl||b.minFilter===Ho||b.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,O[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,O[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,O[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,X[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,X[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Vn||b.minFilter!==Ho&&b.minFilter!==kn||b.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function be(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",R));let ne=b.source,de=d.get(ne);de===void 0&&(de={},d.set(ne,de));let oe=F(b);if(oe!==I.__cacheKey){de[oe]===void 0&&(de[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),de[oe].usedTimes++;let ze=de[I.__cacheKey];ze!==void 0&&(de[I.__cacheKey].usedTimes--,ze.usedTimes===0&&M(b)),I.__cacheKey=oe,I.__webglTexture=de[oe].texture}return G}function q(I,b,G){let ne=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=i.TEXTURE_3D);let de=be(I,b),oe=b.source;t.bindTexture(ne,I.__webglTexture,i.TEXTURE0+G);let ze=n.get(oe);if(oe.version!==ze.__version||de===!0){t.activeTexture(i.TEXTURE0+G);let Ae=dt.getPrimaries(dt.workingColorSpace),Te=b.colorSpace===Qt?null:dt.getPrimaries(b.colorSpace),st=b.colorSpace===Qt||Ae===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let _e=x(b.image,!1,s.maxTextureSize);_e=Fe(b,_e);let Re=r.convert(b.format,b.colorSpace),De=r.convert(b.type),qe=w(b.internalFormat,Re,De,b.colorSpace,b.isVideoTexture);pe(ne,b);let Ne,lt=b.mipmaps,et=b.isVideoTexture!==!0,mt=ze.__version===void 0||de===!0,k=oe.dataReady,Ce=C(b,_e);if(b.isDepthTexture)qe=v(b.format===Sr,b.type),mt&&(et?t.texStorage2D(i.TEXTURE_2D,1,qe,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,qe,_e.width,_e.height,0,Re,De,null));else if(b.isDataTexture)if(lt.length>0){et&&mt&&t.texStorage2D(i.TEXTURE_2D,Ce,qe,lt[0].width,lt[0].height);for(let se=0,le=lt.length;se<le;se++)Ne=lt[se],et?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ne.width,Ne.height,Re,De,Ne.data):t.texImage2D(i.TEXTURE_2D,se,qe,Ne.width,Ne.height,0,Re,De,Ne.data);b.generateMipmaps=!1}else et?(mt&&t.texStorage2D(i.TEXTURE_2D,Ce,qe,_e.width,_e.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Re,De,_e.data)):t.texImage2D(i.TEXTURE_2D,0,qe,_e.width,_e.height,0,Re,De,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){et&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,qe,lt[0].width,lt[0].height,_e.depth);for(let se=0,le=lt.length;se<le;se++)if(Ne=lt[se],b.format!==pi)if(Re!==null)if(et){if(k)if(b.layerUpdates.size>0){let Ue=Ed(Ne.width,Ne.height,b.format,b.type);for(let Pe of b.layerUpdates){let it=Ne.data.subarray(Pe*Ue/Ne.data.BYTES_PER_ELEMENT,(Pe+1)*Ue/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Pe,Ne.width,Ne.height,1,Re,it)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ne.width,Ne.height,_e.depth,Re,Ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,qe,Ne.width,Ne.height,_e.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ne.width,Ne.height,_e.depth,Re,De,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,qe,Ne.width,Ne.height,_e.depth,0,Re,De,Ne.data)}else{et&&mt&&t.texStorage2D(i.TEXTURE_2D,Ce,qe,lt[0].width,lt[0].height);for(let se=0,le=lt.length;se<le;se++)Ne=lt[se],b.format!==pi?Re!==null?et?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Ne.width,Ne.height,Re,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,se,qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ne.width,Ne.height,Re,De,Ne.data):t.texImage2D(i.TEXTURE_2D,se,qe,Ne.width,Ne.height,0,Re,De,Ne.data)}else if(b.isDataArrayTexture)if(et){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,qe,_e.width,_e.height,_e.depth),k)if(b.layerUpdates.size>0){let se=Ed(_e.width,_e.height,b.format,b.type);for(let le of b.layerUpdates){let Ue=_e.data.subarray(le*se/_e.data.BYTES_PER_ELEMENT,(le+1)*se/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,_e.width,_e.height,1,Re,De,Ue)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Re,De,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,_e.width,_e.height,_e.depth,0,Re,De,_e.data);else if(b.isData3DTexture)et?(mt&&t.texStorage3D(i.TEXTURE_3D,Ce,qe,_e.width,_e.height,_e.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Re,De,_e.data)):t.texImage3D(i.TEXTURE_3D,0,qe,_e.width,_e.height,_e.depth,0,Re,De,_e.data);else if(b.isFramebufferTexture){if(mt)if(et)t.texStorage2D(i.TEXTURE_2D,Ce,qe,_e.width,_e.height);else{let se=_e.width,le=_e.height;for(let Ue=0;Ue<Ce;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,qe,se,le,0,Re,De,null),se>>=1,le>>=1}}else if(lt.length>0){if(et&&mt){let se=xe(lt[0]);t.texStorage2D(i.TEXTURE_2D,Ce,qe,se.width,se.height)}for(let se=0,le=lt.length;se<le;se++)Ne=lt[se],et?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Re,De,Ne):t.texImage2D(i.TEXTURE_2D,se,qe,Re,De,Ne);b.generateMipmaps=!1}else if(et){if(mt){let se=xe(_e);t.texStorage2D(i.TEXTURE_2D,Ce,qe,se.width,se.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,De,_e)}else t.texImage2D(i.TEXTURE_2D,0,qe,Re,De,_e);m(b)&&f(ne),ze.__version=oe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function te(I,b,G){if(b.image.length!==6)return;let ne=be(I,b),de=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);let oe=n.get(de);if(de.version!==oe.__version||ne===!0){t.activeTexture(i.TEXTURE0+G);let ze=dt.getPrimaries(dt.workingColorSpace),Ae=b.colorSpace===Qt?null:dt.getPrimaries(b.colorSpace),Te=b.colorSpace===Qt||ze===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let st=b.isCompressedTexture||b.image[0].isCompressedTexture,_e=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let le=0;le<6;le++)!st&&!_e?Re[le]=x(b.image[le],!0,s.maxCubemapSize):Re[le]=_e?b.image[le].image:b.image[le],Re[le]=Fe(b,Re[le]);let De=Re[0],qe=r.convert(b.format,b.colorSpace),Ne=r.convert(b.type),lt=w(b.internalFormat,qe,Ne,b.colorSpace),et=b.isVideoTexture!==!0,mt=oe.__version===void 0||ne===!0,k=de.dataReady,Ce=C(b,De);pe(i.TEXTURE_CUBE_MAP,b);let se;if(st){et&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,lt,De.width,De.height);for(let le=0;le<6;le++){se=Re[le].mipmaps;for(let Ue=0;Ue<se.length;Ue++){let Pe=se[Ue];b.format!==pi?qe!==null?et?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,0,0,Pe.width,Pe.height,qe,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,lt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,0,0,Pe.width,Pe.height,qe,Ne,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,lt,Pe.width,Pe.height,0,qe,Ne,Pe.data)}}}else{if(se=b.mipmaps,et&&mt){se.length>0&&Ce++;let le=xe(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,lt,le.width,le.height)}for(let le=0;le<6;le++)if(_e){et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re[le].width,Re[le].height,qe,Ne,Re[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,lt,Re[le].width,Re[le].height,0,qe,Ne,Re[le].data);for(let Ue=0;Ue<se.length;Ue++){let it=se[Ue].image[le].image;et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,0,0,it.width,it.height,qe,Ne,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,lt,it.width,it.height,0,qe,Ne,it.data)}}else{et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,qe,Ne,Re[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,lt,qe,Ne,Re[le]);for(let Ue=0;Ue<se.length;Ue++){let Pe=se[Ue];et?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,0,0,qe,Ne,Pe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,lt,qe,Ne,Pe.image[le])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),oe.__version=de.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Q(I,b,G,ne,de,oe){let ze=r.convert(G.format,G.colorSpace),Ae=r.convert(G.type),Te=w(G.internalFormat,ze,Ae,G.colorSpace),st=n.get(b),_e=n.get(G);if(_e.__renderTarget=b,!st.__hasExternalTextures){let Re=Math.max(1,b.width>>oe),De=Math.max(1,b.height>>oe);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,oe,Te,Re,De,b.depth,0,ze,Ae,null):t.texImage2D(de,oe,Te,Re,De,0,ze,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ge(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,de,_e.__webglTexture,0,ae(b)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,de,_e.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function K(I,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){let ne=b.depthTexture,de=ne&&ne.isDepthTexture?ne.type:null,oe=v(b.stencilBuffer,de),ze=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=ae(b);ge(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,oe,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,oe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,oe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ze,i.RENDERBUFFER,I)}else{let ne=b.textures;for(let de=0;de<ne.length;de++){let oe=ne[de],ze=r.convert(oe.format,oe.colorSpace),Ae=r.convert(oe.type),Te=w(oe.internalFormat,ze,Ae,oe.colorSpace),st=ae(b);G&&ge(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Te,b.width,b.height):ge(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Te,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(b.depthTexture);ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);let de=ne.__webglTexture,oe=ae(b);if(b.depthTexture.format===xr)ge(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(b.depthTexture.format===Sr)ge(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function ve(I){let b=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let ne=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){let de=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",de)};ne.addEventListener("dispose",de),b.__depthDisposeCallback=de}b.__boundDepthTexture=ne}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Y(b.__webglFramebuffer,I)}else if(G){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=i.createRenderbuffer(),K(b.__webglDepthbuffer[ne],I,!1);else{let de=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),K(b.__webglDepthbuffer,I,!1);else{let ne=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(I,b,G){let ne=n.get(I);b!==void 0&&Q(ne.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ve(I)}function Ee(I){let b=I.texture,G=n.get(I),ne=n.get(b);I.addEventListener("dispose",A);let de=I.textures,oe=I.isWebGLCubeRenderTarget===!0,ze=de.length>1;if(ze||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=b.version,o.memory.textures++),oe){G.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[Ae]=[];for(let Te=0;Te<b.mipmaps.length;Te++)G.__webglFramebuffer[Ae][Te]=i.createFramebuffer()}else G.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)G.__webglFramebuffer[Ae]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ze)for(let Ae=0,Te=de.length;Ae<Te;Ae++){let st=n.get(de[Ae]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ge(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<de.length;Ae++){let Te=de[Ae];G.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);let st=r.convert(Te.format,Te.colorSpace),_e=r.convert(Te.type),Re=w(Te.internalFormat,st,_e,Te.colorSpace,I.isXRRenderTarget===!0),De=ae(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Re,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),K(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),pe(i.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)Q(G.__webglFramebuffer[Ae][Te],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Te);else Q(G.__webglFramebuffer[Ae],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(b)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ae=0,Te=de.length;Ae<Te;Ae++){let st=de[Ae],_e=n.get(st);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),pe(i.TEXTURE_2D,st),Q(G.__webglFramebuffer,I,st,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),m(st)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ne.__webglTexture),pe(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)Q(G.__webglFramebuffer[Te],I,b,i.COLOR_ATTACHMENT0,Ae,Te);else Q(G.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,Ae,0);m(b)&&f(Ae),t.unbindTexture()}I.depthBuffer&&ve(I)}function J(I){let b=I.textures;for(let G=0,ne=b.length;G<ne;G++){let de=b[G];if(m(de)){let oe=_(I),ze=n.get(de).__webglTexture;t.bindTexture(oe,ze),f(oe),t.unbindTexture()}}}let re=[],L=[];function me(I){if(I.samples>0){if(ge(I)===!1){let b=I.textures,G=I.width,ne=I.height,de=i.COLOR_BUFFER_BIT,oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(I),Ae=b.length>1;if(Ae)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Te]);let st=n.get(b[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,G,ne,0,0,G,ne,de,i.NEAREST),l===!0&&(re.length=0,L.length=0,re.push(i.COLOR_ATTACHMENT0+Te),I.depthBuffer&&I.resolveDepthBuffer===!1&&(re.push(oe),L.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Te]);let st=n.get(b[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ae(I){return Math.min(s.maxSamples,I.samples)}function ge(I){let b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(I){let b=o.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function Fe(I,b){let G=I.colorSpace,ne=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Hr&&G!==Qt&&(dt.getTransfer(G)===_t?(ne!==pi||de!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=z,this.rebindTextures=ce,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ge}function $x(i,e){function t(n,s=Qt){let r,o=dt.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===Pu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Iu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zd)return i.BYTE;if(n===$d)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===Cu)return i.INT;if(n===Fs)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===Vt)return i.HALF_FLOAT;if(n===jd)return i.ALPHA;if(n===Qd)return i.RGB;if(n===pi)return i.RGBA;if(n===ef)return i.LUMINANCE;if(n===tf)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Sr)return i.DEPTH_STENCIL;if(n===Lu)return i.RED;if(n===Du)return i.RED_INTEGER;if(n===nf)return i.RG;if(n===Uu)return i.RG_INTEGER;if(n===Nu)return i.RGBA_INTEGER;if(n===ya||n===_a||n===Ma||n===wa)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===fc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===vc||n===xc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gc||n===vc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yc||n===_c||n===Mc||n===wc||n===bc||n===Ec||n===Sc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Dc||n===Uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ba)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sf||n===Nc||n===Fc||n===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function ty(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,hf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,w,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=e.get(f),w=_.envMap,v=_.envMapRotation;w&&(m.envMap.value=w,Ps.copy(v),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),m.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Ps)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ny(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){let v=w.program;n.uniformBlockBinding(_,v)}function c(_,w){let v=s[_.id];v===void 0&&(g(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",m));let C=w.program;n.updateUBOMapping(_,C);let R=e.render.frame;r[_.id]!==R&&(d(_),r[_.id]=R)}function u(_){let w=h();_.__bindingPointIndex=w;let v=i.createBuffer(),C=_.__size,R=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let w=s[_.id],v=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,A=v.length;R<A;R++){let T=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,y=T.length;M<y;M++){let S=T[M];if(p(S,R,M,C)===!0){let N=S.__offset,D=Array.isArray(S.value)?S.value:[S.value],F=0;for(let B=0;B<D.length;B++){let U=D[B],H=x(U);typeof U=="number"||typeof U=="boolean"?(S.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,N+F,S.__data)):U.isMatrix3?(S.__data[0]=U.elements[0],S.__data[1]=U.elements[1],S.__data[2]=U.elements[2],S.__data[3]=0,S.__data[4]=U.elements[3],S.__data[5]=U.elements[4],S.__data[6]=U.elements[5],S.__data[7]=0,S.__data[8]=U.elements[6],S.__data[9]=U.elements[7],S.__data[10]=U.elements[8],S.__data[11]=0):(U.toArray(S.__data,F),F+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,w,v,C){let R=_.value,A=w+"_"+v;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{let T=C[A];if(typeof R=="number"||typeof R=="boolean"){if(T!==R)return C[A]=R,!0}else if(T.equals(R)===!1)return T.copy(R),!0}return!1}function g(_){let w=_.uniforms,v=0,C=16;for(let A=0,T=w.length;A<T;A++){let M=Array.isArray(w[A])?w[A]:[w[A]];for(let y=0,S=M.length;y<S;y++){let N=M[y],D=Array.isArray(N.value)?N.value:[N.value];for(let F=0,B=D.length;F<B;F++){let U=D[F],H=x(U),z=v%C,O=z%H.boundary,X=z+O;v+=O,X!==0&&C-X<H.storage&&(v+=C-X),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=H.storage}}}let R=v%C;return R>0&&(v+=C-R),_.__size=v,_.__cache={},this}function x(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){let w=_.target;w.removeEventListener("dispose",m);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}function ca(i,e,t,n,s,r){pr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(to.x=r*pr.x-s*pr.y,to.y=s*pr.x+r*pr.y):to.copy(pr),i.copy(e),i.x+=to.x,i.y+=to.y,i.applyMatrix4(vf)}function da(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Da.fromBufferAttribute(o,s),Ua.fromBufferAttribute(o,r),t.distanceSqToSegment(Da,Ua,Kl,Pd)>n)return;Kl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Kl);if(!(l<e.near||l>e.far))return{distance:l,point:Pd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Ud(i,e,t,n,s,r,o){let a=eu.distanceSqToPoint(i);if(a<t){let l=new E;eu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Bu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Nd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function sy(i,e){let t=1-i;return t*t*e}function ry(i,e){return 2*(1-i)*i*e}function oy(i,e){return i*i*e}function fo(i,e,t,n){return sy(i,e)+ry(i,t)+oy(i,n)}function ay(i,e){let t=1-i;return t*t*t*e}function ly(i,e){let t=1-i;return 3*t*t*i*e}function cy(i,e){return 3*(1-i)*i*i*e}function uy(i,e){return i*i*i*e}function po(i,e,t,n,s){return ay(i,e)+ly(i,t)+cy(i,n)+uy(i,s)}function xf(i,e,t,n,s){let r,o;if(s===Ay(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Fd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Fd(r,i[r],i[r+1],o);return o&&Ja(o,o.next)&&(Ao(o),o=o.next),o}function Hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ja(t,t.next)||Ft(t.prev,t,t.next)===0)){if(Ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function So(i,e,t,n,s,r,o){if(!i)return;!o&&r&&My(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?fy(i,n,s,r):dy(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ao(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=py(Hs(i),e,t),So(i,e,t,n,s,r,2)):o===2&&my(i,e,t,n,s,r):So(Hs(i),e,t,n,s,r,1);break}}}function dy(i){let e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&vr(s,a,r,l,o,c,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fy(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ft(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=lu(p,g,e,t,n),_=lu(x,m,e,t,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=f&&v&&v.z<=_;){if(w.x>=p&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&vr(a,u,l,h,c,d,w.x,w.y)&&Ft(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&vr(a,u,l,h,c,d,v.x,v.y)&&Ft(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=f;){if(w.x>=p&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&vr(a,u,l,h,c,d,w.x,w.y)&&Ft(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=_;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&vr(a,u,l,h,c,d,v.x,v.y)&&Ft(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function py(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ja(s,r)&&yf(s,n,n.next,r)&&To(s,r)&&To(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ao(n),Ao(n.next),n=i=r),n=n.next}while(n!==i);return Hs(n)}function my(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ey(o,a)){let l=_f(o,a);o=Hs(o,o.next),l=Hs(l,l.next),So(o,e,t,n,s,r,0),So(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gy(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=xf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(by(c));for(s.sort(vy),r=0;r<s.length;r++)t=xy(s[r],t);return t}function vy(i,e){return i.x-e.x}function xy(i,e){let t=yy(i,e);if(!t)return e;let n=_f(t,i);return Hs(n,n.next),Hs(t,t.next)}function yy(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&vr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),To(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&_y(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function _y(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function My(i,e,t,n){let s=i;do s.z===0&&(s.z=lu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wy(s)}function wy(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function lu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function by(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ey(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sy(i,e)&&(To(i,e)&&To(e,i)&&Ty(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||Ja(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ja(i,e){return i.x===e.x&&i.y===e.y}function yf(i,e,t,n){let s=va(Ft(i,e,t)),r=va(Ft(i,e,n)),o=va(Ft(t,n,i)),a=va(Ft(t,n,e));return!!(s!==r&&o!==a||s===0&&ga(i,t,e)||r===0&&ga(i,n,e)||o===0&&ga(t,i,n)||a===0&&ga(t,e,n))}function ga(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function va(i){return i>0?1:i<0?-1:0}function Sy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function To(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function Ty(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function _f(i,e){let t=new cu(i.i,i.x,i.y),n=new cu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fd(i,e,t,n){let s=new cu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ay(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function zd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Od(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function Cy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Py(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function xa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Iy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wd(){return performance.now()}function Xd(i,e){return i.distance-e.distance}function wu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)wu(r[o],e,t,!0)}}var bu,up,Ah,hp,qd,dp,Gi,Si,zt,pt,bi,as,wt,Rh,Ea,fp,Ls,pp,mp,gp,vp,xp,yp,_p,Mp,ec,tc,wp,bp,Ep,Sp,Tp,Ap,Rp,Cp,Pp,nc,ic,sc,Mr,rc,oc,ac,lc,Yd,Ip,Lp,ls,Eu,Su,Tu,Au,Dp,Io,Ru,Kd,wr,br,cc,uc,Ka,Ns,Us,hc,Vn,Up,Ho,jn,yl,kn,Yi,Zd,$d,mo,Cu,Fs,Mi,Vt,Pu,Iu,Er,Jd,jd,Qd,pi,ef,tf,xr,Sr,Lu,Du,nf,Uu,Nu,ya,_a,Ma,wa,dc,fc,pc,mc,gc,vc,xc,yc,_c,Mc,wc,bc,Ec,Sc,Tc,Ac,Rc,Cc,Pc,Ic,Lc,ba,Dc,Uc,sf,Nc,Fc,zc,Sa,Oc,_l,Ch,Ph,Ih,rf,of,Fu,Np,Fp,af,zp,Qt,Nt,Hr,Za,_t,Js,Lh,Op,Bp,Hp,lf,kp,Vp,Wp,Gp,Bc,Dh,Xi,Ta,us,Mn,Uh,co,go,at,ie,rt,Ml,Nh,dt,Fh,zh,Oh,Bh,Hh,js,Hc,hm,Aa,dm,gn,Qe,kc,Ht,Ra,Vc,At,E,bl,kh,Ki,Bi,ui,ko,Qs,er,tr,es,ts,Ss,$r,Vo,Wo,Ts,fm,Jr,Sl,Cn,Hi,Tl,Go,ns,Al,Xo,Rl,Tr,Ke,nr,hi,pm,mm,is,qo,On,Vh,Wh,vn,xo,gm,Gh,ir,ki,Yo,jr,vm,xm,Xh,qh,Yh,Kh,ym,sr,Cl,Zt,di,Vi,Pl,Wi,rr,or,Zh,Il,Ll,Dl,Ul,Nl,Fl,os,uf,ss,Ko,ye,wn,_m,Ti,Wn,Kt,Zo,Xe,Ca,Pa,Ze,Mm,Jn,Ol,ar,Bn,Qr,sn,$e,$h,As,$o,Jh,Jo,jo,Qo,Bl,ea,jh,ta,Me,bn,Ci,Em,Sm,Se,Rr,rs,Qh,ed,jt,lr,cr,zs,Cr,Os,Hl,Tm,Am,Hn,Rs,ia,Bs,bt,Cm,Pm,Im,Lm,Dm,Um,Nm,Fm,zm,Om,Bm,Hm,km,Vm,Wm,Gm,Xm,qm,Ym,Km,Zm,$m,Jm,jm,Qm,e0,t0,n0,i0,s0,r0,o0,a0,l0,c0,u0,h0,d0,f0,p0,m0,g0,v0,x0,y0,_0,M0,w0,b0,E0,S0,T0,A0,R0,C0,P0,I0,L0,D0,U0,N0,F0,z0,O0,B0,H0,k0,V0,W0,G0,X0,q0,Y0,K0,Z0,$0,J0,j0,Q0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,ug,hg,dg,fg,pg,mg,gg,vg,xg,yg,_g,Mg,wg,bg,Eg,Sg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Ng,Fg,zg,Og,Bg,Hg,kg,Vg,Wg,Gg,Xg,qg,Yg,Kg,Zg,$g,Jg,jg,Qg,ev,tv,nv,iv,sv,rv,ov,av,ot,Ie,_i,sa,Cs,lv,Pr,gr,td,Ds,kl,nd,Vl,Wl,Gl,Xl,Is,ur,id,Ir,Ia,ff,ad,pf,mf,gf,ld,cd,ud,hd,dd,Wc,Gc,Xc,ql,_r,hx,dx,md,oa,Mx,wx,Ex,Lx,Yc,Kc,Bx,Zc,$c,Wx,Gx,qx,Jc,wi,Jx,ho,jx,Qx,jc,Qc,Ps,ey,Lr,Gn,yo,An,Dr,_o,hr,eo,dr,fr,pr,to,vf,aa,no,la,Sd,Yl,Td,La,Mo,Xt,mr,Ad,ua,Rd,iy,io,so,Xn,Ur,Da,Ua,Cd,ro,ha,Kl,Pd,wo,Id,Ld,Nr,bo,Dd,eu,fa,pa,qt,mi,Qn,Eo,tu,ma,Zl,$l,Jl,Fr,Na,nu,Fa,iu,za,su,Oa,ru,ou,Ba,Ai,zr,Ri,au,hs,hy,cs,Ha,Ry,ka,Ro,on,Va,kt,Or,uu,hu,du,gi,ks,fu,pu,mu,Wa,Vs,gu,Bd,vu,Hu,Co,xu,Ga,Po,ei,jl,Hd,kd,Xa,Vd,oo,Ql,yu,qa,_u,ti,ni,Br,ku,Ly,Vu,Dy,Uy,Ny,Fy,zy,Oy,By,Mu,Ut,U_,Gd,Ya,Et=Th(()=>{bu="170",up=0,Ah=1,hp=2,qd=1,dp=2,Gi=3,Si=0,zt=1,pt=2,bi=0,as=1,wt=2,Rh=3,Ea=4,fp=5,Ls=100,pp=101,mp=102,gp=103,vp=104,xp=200,yp=201,_p=202,Mp=203,ec=204,tc=205,wp=206,bp=207,Ep=208,Sp=209,Tp=210,Ap=211,Rp=212,Cp=213,Pp=214,nc=0,ic=1,sc=2,Mr=3,rc=4,oc=5,ac=6,lc=7,Yd=0,Ip=1,Lp=2,ls=0,Eu=1,Su=2,Tu=3,Au=4,Dp=5,Io=6,Ru=7,Kd=300,wr=301,br=302,cc=303,uc=304,Ka=306,Ns=1e3,Us=1001,hc=1002,Vn=1003,Up=1004,Ho=1005,jn=1006,yl=1007,kn=1008,Yi=1009,Zd=1010,$d=1011,mo=1012,Cu=1013,Fs=1014,Mi=1015,Vt=1016,Pu=1017,Iu=1018,Er=1020,Jd=35902,jd=1021,Qd=1022,pi=1023,ef=1024,tf=1025,xr=1026,Sr=1027,Lu=1028,Du=1029,nf=1030,Uu=1031,Nu=1033,ya=33776,_a=33777,Ma=33778,wa=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,vc=37492,xc=37496,yc=37808,_c=37809,Mc=37810,wc=37811,bc=37812,Ec=37813,Sc=37814,Tc=37815,Ac=37816,Rc=37817,Cc=37818,Pc=37819,Ic=37820,Lc=37821,ba=36492,Dc=36494,Uc=36495,sf=36283,Nc=36284,Fc=36285,zc=36286,Sa=2300,Oc=2301,_l=2302,Ch=2400,Ph=2401,Ih=2402,rf=0,of=1,Fu=2,Np=3200,Fp=3201,af=0,zp=1,Qt="",Nt="srgb",Hr="srgb-linear",Za="linear",_t="srgb",Js=7680,Lh=519,Op=512,Bp=513,Hp=514,lf=515,kp=516,Vp=517,Wp=518,Gp=519,Bc=35044,Dh="300 es",Xi=2e3,Ta=2001,us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uh=1234567,co=Math.PI/180,go=180/Math.PI;at={DEG2RAD:co,RAD2DEG:go,generateUUID:Ei,clamp:rn,euclideanModulo:zu,mapLinear:Xp,inverseLerp:qp,lerp:uo,damp:Yp,pingpong:Kp,smoothstep:Zp,smootherstep:$p,randInt:Jp,randFloat:jp,randFloatSpread:Qp,seededRandom:em,degToRad:tm,radToDeg:nm,isPowerOfTwo:im,ceilPowerOfTwo:sm,floorPowerOfTwo:rm,setQuaternionFromProperEuler:om,normalize:Mt,denormalize:fi},ie=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],_=s[1],w=s[4],v=s[7],C=s[2],R=s[5],A=s[8];return r[0]=o*x+a*_+l*C,r[3]=o*m+a*w+l*R,r[6]=o*f+a*v+l*A,r[1]=c*x+u*_+h*C,r[4]=c*m+u*w+h*R,r[7]=c*f+u*v+h*A,r[2]=d*x+p*_+g*C,r[5]=d*m+p*w+g*R,r[8]=d*f+p*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ml=new rt;Nh={};dt={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qt?Za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};Fh=[.64,.33,.3,.6,.15,.06],zh=[.2126,.7152,.0722],Oh=[.3127,.329],Bh=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[Hr]:{primaries:Fh,whitePoint:Oh,transfer:Za,toXYZ:Bh,fromXYZ:Hh,luminanceCoefficients:zh,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:Fh,whitePoint:Oh,transfer:_t,toXYZ:Bh,fromXYZ:Hh,luminanceCoefficients:zh,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});Hc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=vo("canvas")),js.width=e.width,js.height=e.height;let n=js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hm=0,Aa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wl(s[o].image)):r.push(wl(s[o]))}else r=wl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};dm=0,gn=class i extends us{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Us,s=Us,r=jn,o=kn,a=pi,l=Yi,c=i.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Ei(),this.name="",this.source=new Aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case Us:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case Us:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Kd;gn.DEFAULT_ANISOTROPY=1;Qe=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(p+1)/2,C=(f+1)/2,R=(u+d)/4,A=(h+x)/4,T=(g+m)/4;return w>v&&w>C?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=A/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=T/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=T/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kc=class extends us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Aa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ra=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Vc=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},At=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==p||u!==g){let m=1-a,f=l*d+c*p+u*g+h*x,_=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let C=Math.sqrt(w),R=Math.atan2(C,f*_);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}let v=a*_;if(l=l*m+d*v,c=c*m+p*v,u=u*m+g*v,h=h*m+x*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bl=new E,kh=new At,Ki=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Vo.subVectors(this.max,$r),Qs.subVectors(e.a,$r),er.subVectors(e.b,$r),tr.subVectors(e.c,$r),es.subVectors(er,Qs),ts.subVectors(tr,er),Ss.subVectors(Qs,tr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ss.z,Ss.y,es.z,0,-es.x,ts.z,0,-ts.x,Ss.z,0,-Ss.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ss.y,Ss.x,0];return!El(t,Qs,er,tr,Vo)||(t=[1,0,0,0,1,0,0,0,1],!El(t,Qs,er,tr,Vo))?!1:(Wo.crossVectors(es,ts),t=[Wo.x,Wo.y,Wo.z],El(t,Qs,er,tr,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new E,new E,new E,new E,new E,new E,new E,new E],ui=new E,ko=new Ki,Qs=new E,er=new E,tr=new E,es=new E,ts=new E,Ss=new E,$r=new E,Vo=new E,Wo=new E,Ts=new E;fm=new Ki,Jr=new E,Sl=new E,Cn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Jr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Sl)),this.expandByPoint(Jr.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hi=new E,Tl=new E,Go=new E,ns=new E,Al=new E,Xo=new E,Rl=new E,Tr=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tl.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(Tl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Go),a=ns.dot(this.direction),l=-ns.dot(Go),c=ns.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Tl).addScaledVector(Go,d),p}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){Al.subVectors(t,e),Xo.subVectors(n,e),Rl.crossVectors(Al,Xo);let o=this.direction.dot(Rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);let l=a*this.direction.dot(Xo.crossVectors(ns,Xo));if(l<0)return null;let c=a*this.direction.dot(Al.cross(ns));if(c<0||l+c>o)return null;let u=-a*ns.dot(Rl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,mm)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),is.crossVectors(n,On),is.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),is.crossVectors(n,On)),is.normalize(),qo.crossVectors(On,is),s[0]=is.x,s[4]=qo.x,s[8]=On.x,s[1]=is.y,s[5]=qo.y,s[9]=On.y,s[2]=is.z,s[6]=qo.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],_=n[3],w=n[7],v=n[11],C=n[15],R=s[0],A=s[4],T=s[8],M=s[12],y=s[1],S=s[5],N=s[9],D=s[13],F=s[2],B=s[6],U=s[10],H=s[14],z=s[3],O=s[7],X=s[11],ee=s[15];return r[0]=o*R+a*y+l*F+c*z,r[4]=o*A+a*S+l*B+c*O,r[8]=o*T+a*N+l*U+c*X,r[12]=o*M+a*D+l*H+c*ee,r[1]=u*R+h*y+d*F+p*z,r[5]=u*A+h*S+d*B+p*O,r[9]=u*T+h*N+d*U+p*X,r[13]=u*M+h*D+d*H+p*ee,r[2]=g*R+x*y+m*F+f*z,r[6]=g*A+x*S+m*B+f*O,r[10]=g*T+x*N+m*U+f*X,r[14]=g*M+x*D+m*H+f*ee,r[3]=_*R+w*y+v*F+C*z,r[7]=_*A+w*S+v*B+C*O,r[11]=_*T+w*N+v*U+C*X,r[15]=_*M+w*D+v*H+C*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+x*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],_=h*m*c-x*d*c+x*l*p-a*m*p-h*l*f+a*d*f,w=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,v=u*x*c-g*h*c+g*a*p-o*x*p-u*a*f+o*h*f,C=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,R=t*_+n*w+s*v+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return e[0]=_*A,e[1]=(x*d*r-h*m*r-x*s*p+n*m*p+h*s*f-n*d*f)*A,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*f+n*l*f)*A,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*A,e[4]=w*A,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*A,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*A,e[8]=v*A,e[9]=(g*h*r-u*x*r-g*n*p+t*x*p+u*n*f-t*h*f)*A,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*A,e[12]=C*A,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*A,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*A,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,x=o*u,m=o*h,f=a*h,_=l*c,w=l*u,v=l*h,C=n.x,R=n.y,A=n.z;return s[0]=(1-(x+f))*C,s[1]=(p+v)*C,s[2]=(g-w)*C,s[3]=0,s[4]=(p-v)*R,s[5]=(1-(d+f))*R,s[6]=(m+_)*R,s[7]=0,s[8]=(g+w)*A,s[9]=(m-_)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=nr.set(s[0],s[1],s[2]).length(),o=nr.set(s[4],s[5],s[6]).length(),a=nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);let c=1/r,u=1/o,h=1/a;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,t.setFromRotationMatrix(hi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Xi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),p,g;if(a===Xi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ta)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xi){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,p=(n+s)*u,g,x;if(a===Xi)g=(o+r)*h,x=-2*h;else if(a===Ta)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nr=new E,hi=new Ke,pm=new E(0,0,0),mm=new E(1,1,1),is=new E,qo=new E,On=new E,Vh=new Ke,Wh=new At,vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gm=0,Gh=new E,ir=new At,ki=new Ke,Yo=new E,jr=new E,vm=new E,xm=new At,Xh=new E(1,0,0),qh=new E(0,1,0),Yh=new E(0,0,1),Kh={type:"added"},ym={type:"removed"},sr={type:"childadded",child:null},Cl={type:"childremoved",child:null},Zt=class i extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new vn,n=new At,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new rt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yo.copy(e):Yo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(jr,Yo,this.up):ki.lookAt(Yo,jr,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(ki),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ym),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Zt.DEFAULT_UP=new E(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;di=new E,Vi=new E,Pl=new E,Wi=new E,rr=new E,or=new E,Zh=new E,Il=new E,Ll=new E,Dl=new E,Ul=new Qe,Nl=new Qe,Fl=new Qe,os=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),Vi.subVectors(n,t),Pl.subVectors(e,t);let o=di.dot(di),a=di.dot(Vi),l=di.dot(Pl),c=Vi.dot(Vi),u=Vi.dot(Pl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ul.setScalar(0),Nl.setScalar(0),Fl.setScalar(0),Ul.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ul,r.x),o.addScaledVector(Nl,r.y),o.addScaledVector(Fl,r.z),o}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),Vi.subVectors(e,t),di.cross(Vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),di.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;rr.subVectors(s,n),or.subVectors(r,n),Il.subVectors(e,n);let l=rr.dot(Il),c=or.dot(Il);if(l<=0&&c<=0)return t.copy(n);Ll.subVectors(e,s);let u=rr.dot(Ll),h=or.dot(Ll);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(rr,o);Dl.subVectors(e,r);let p=rr.dot(Dl),g=or.dot(Dl);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(or,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Zh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Zh,a);let f=1/(m+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(rr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Ko={h:0,s:0,l:0};ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=zu(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zl(o,r,e+1/3),this.g=zl(o,r,e),this.b=zl(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=uf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return dt.fromWorkingColorSpace(wn.copy(this),e),Math.round(rn(wn.r*255,0,255))*65536+Math.round(rn(wn.g*255,0,255))*256+Math.round(rn(wn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Nt){dt.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Ko);let n=uo(ss.h,Ko.h,t),s=uo(ss.s,Ko.s,t),r=uo(ss.l,Ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new ye;ye.NAMES=uf;_m=0,Ti=class extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Ei(),this.name="",this.blending=as,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ec&&(n.blendSrc=this.blendSrc),this.blendDst!==tc&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wn=class extends Ti{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kt=new E,Zo=new ie,Xe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}},Ca=class extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Pa=class extends Xe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ze=class extends Xe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mm=0,Jn=new Ke,Ol=new Zt,ar=new E,Bn=new Ki,Qr=new Ki,sn=new E,$e=class i extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?Pa:Ca)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Bn.min,Qr.min),Bn.expandByPoint(sn),sn.addVectors(Bn.max,Qr.max),Bn.expandByPoint(sn)):(Bn.expandByPoint(Qr.min),Bn.expandByPoint(Qr.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(ar.fromBufferAttribute(e,c),sn.add(ar)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new E,l[T]=new E;let c=new E,u=new E,h=new E,d=new ie,p=new ie,g=new ie,x=new E,m=new E;function f(T,M,y){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(d),g.sub(d);let S=1/(p.x*g.y-g.x*p.y);isFinite(S)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(S),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(S),a[T].add(x),a[M].add(x),a[y].add(x),l[T].add(m),l[M].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let T=0,M=_.length;T<M;++T){let y=_[T],S=y.start,N=y.count;for(let D=S,F=S+N;D<F;D+=3)f(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let w=new E,v=new E,C=new E,R=new E;function A(T){C.fromBufferAttribute(s,T),R.copy(C);let M=a[T];w.copy(M),w.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(R,M);let S=v.dot(l[T])<0?-1:1;o.setXYZW(T,w.x,w.y,w.z,S)}for(let T=0,M=_.length;T<M;++T){let y=_[T],S=y.start,N=y.count;for(let D=S,F=S+N;D<F;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new E,r=new E,o=new E,a=new E,l=new E,c=new E,u=new E,h=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Xe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$h=new Ke,As=new Tr,$o=new Cn,Jh=new E,Jo=new E,jo=new E,Qo=new E,Bl=new E,ea=new E,jh=new E,ta=new E,Me=class extends Zt{constructor(e=new $e,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Bl.fromBufferAttribute(h,e),o?ea.addScaledVector(Bl,u):ea.addScaledVector(Bl.sub(t),u))}t.add(ea)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),As.copy(e.ray).recast(e.near),!($o.containsPoint(As.origin)===!1&&(As.intersectSphere($o,Jh)===null||As.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&($h.copy(r).invert(),As.copy(e.ray).applyMatrix4($h),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,C=w;v<C;v+=3){let R=a.getX(v),A=a.getX(v+1),T=a.getX(v+2);s=na(this,f,e,n,c,u,h,R,A,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let _=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=na(this,o,e,n,c,u,h,_,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,C=w;v<C;v+=3){let R=v,A=v+1,T=v+2;s=na(this,f,e,n,c,u,h,R,A,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let _=m,w=m+1,v=m+2;s=na(this,o,e,n,c,u,h,_,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};bn=class i extends $e{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function g(x,m,f,_,w,v,C,R,A,T,M){let y=v/A,S=C/T,N=v/2,D=C/2,F=R/2,B=A+1,U=T+1,H=0,z=0,O=new E;for(let X=0;X<U;X++){let ee=X*S-D;for(let pe=0;pe<B;pe++){let be=pe*y-N;O[x]=be*_,O[m]=ee*w,O[f]=F,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[f]=R>0?1:-1,u.push(O.x,O.y,O.z),h.push(pe/A),h.push(1-X/T),H+=1}}for(let X=0;X<T;X++)for(let ee=0;ee<A;ee++){let pe=d+ee+B*X,be=d+ee+B*(X+1),q=d+(ee+1)+B*(X+1),te=d+(ee+1)+B*X;l.push(pe,be,te),l.push(be,q,te),z+=6}a.addGroup(p,z,M),p+=z,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Ci={clone:Ar,merge:Rn},Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends Ti{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Rr=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rs=new E,Qh=new ie,ed=new ie,jt=class extends Rr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Qh,ed),t.subVectors(ed,Qh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lr=-90,cr=1,zs=class extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(lr,cr,e,t);s.layers=this.layers,this.add(s);let r=new jt(lr,cr,e,t);r.layers=this.layers,this.add(r);let o=new jt(lr,cr,e,t);o.layers=this.layers,this.add(o);let a=new jt(lr,cr,e,t);a.layers=this.layers,this.add(a);let l=new jt(lr,cr,e,t);l.layers=this.layers,this.add(l);let c=new jt(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Cr=class extends gn{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Os=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:bi});r.uniforms.tEquirect.value=t;let o=new Me(s,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=jn),new zs(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Hl=new E,Tm=new E,Am=new rt,Hn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Hl.subVectors(n,t).cross(Tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Am.getNormalMatrix(e),s=this.coplanarPoint(Hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new Cn,ia=new E,Bs=class{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],_=s[13],w=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+u,m+g,v+_).normalize(),n[3].setComponents(l-o,d-u,m-g,v-_).normalize(),n[4].setComponents(l-a,d-h,m-x,v-w).normalize(),t===Xi)n[5].setComponents(l+a,d+h,m+x,v+w).normalize();else if(t===Ta)n[5].setComponents(a,h,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};bt=class i extends $e{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){let _=f*d-o;for(let w=0;w<c;w++){let v=w*h-r;g.push(v,-_,0),x.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let w=_+c*f,v=_+c*(f+1),C=_+1+c*(f+1),R=_+1+c*f;p.push(w,v,R),p.push(v,C,R)}this.setIndex(p),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pm=`#ifdef USE_ALPHAHASH
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
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
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
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm=`#ifdef USE_BATCHING
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
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Wm=`#ifdef USE_BUMPMAP
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jm=`#define PI 3.141592653589793
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
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e0=`vec3 transformedNormal = objectNormal;
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
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",o0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
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
}`,v0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,w0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
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
#endif`,A0=`struct PhysicalMaterial {
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
}`,R0=`
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
#endif`,C0=`#if defined( RE_IndirectDiffuse )
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O0=`#if defined( USE_POINTS_UV )
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
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fg=`float getShadowMask() {
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
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
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
}`,Ng=`#if DEPTH_PACKING == 3200
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
}`,Fg=`#define DISTANCE
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
}`,zg=`#define DISTANCE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`uniform float scale;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Gg=`#define LAMBERT
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,$g=`#define PHONG
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
}`,Jg=`#define PHONG
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
}`,jg=`#define STANDARD
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
}`,Qg=`#define STANDARD
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
}`,ev=`#define TOON
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
}`,tv=`#define TOON
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
}`,nv=`uniform float size;
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,rv=`uniform vec3 color;
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
}`,ov=`uniform float rotation;
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
}`,av=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Cm,alphahash_pars_fragment:Pm,alphamap_fragment:Im,alphamap_pars_fragment:Lm,alphatest_fragment:Dm,alphatest_pars_fragment:Um,aomap_fragment:Nm,aomap_pars_fragment:Fm,batching_pars_vertex:zm,batching_vertex:Om,begin_vertex:Bm,beginnormal_vertex:Hm,bsdfs:km,iridescence_fragment:Vm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Ym,color_fragment:Km,color_pars_fragment:Zm,color_pars_vertex:$m,color_vertex:Jm,common:jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:e0,displacementmap_pars_vertex:t0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:o0,envmap_fragment:a0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:M0,envmap_vertex:h0,fog_vertex:d0,fog_pars_vertex:f0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:g0,lightmap_pars_fragment:v0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:y0,lights_pars_begin:_0,lights_toon_fragment:w0,lights_toon_pars_fragment:b0,lights_phong_fragment:E0,lights_phong_pars_fragment:S0,lights_physical_fragment:T0,lights_physical_pars_fragment:A0,lights_fragment_begin:R0,lights_fragment_maps:C0,lights_fragment_end:P0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:U0,map_fragment:N0,map_pars_fragment:F0,map_particle_fragment:z0,map_particle_pars_fragment:O0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:H0,morphinstance_vertex:k0,morphcolor_vertex:V0,morphnormal_vertex:W0,morphtarget_pars_vertex:G0,morphtarget_vertex:X0,normal_fragment_begin:q0,normal_fragment_maps:Y0,normal_pars_fragment:K0,normal_pars_vertex:Z0,normal_vertex:$0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:og,dithering_pars_fragment:ag,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:hg,shadowmap_vertex:dg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:vg,specularmap_fragment:xg,specularmap_pars_fragment:yg,tonemapping_fragment:_g,tonemapping_pars_fragment:Mg,transmission_fragment:wg,transmission_pars_fragment:bg,uv_pars_fragment:Eg,uv_pars_vertex:Sg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Rg,background_frag:Cg,backgroundCube_vert:Pg,backgroundCube_frag:Ig,cube_vert:Lg,cube_frag:Dg,depth_vert:Ug,depth_frag:Ng,distanceRGBA_vert:Fg,distanceRGBA_frag:zg,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:Hg,linedashed_frag:kg,meshbasic_vert:Vg,meshbasic_frag:Wg,meshlambert_vert:Gg,meshlambert_frag:Xg,meshmatcap_vert:qg,meshmatcap_frag:Yg,meshnormal_vert:Kg,meshnormal_frag:Zg,meshphong_vert:$g,meshphong_frag:Jg,meshphysical_vert:jg,meshphysical_frag:Qg,meshtoon_vert:ev,meshtoon_frag:tv,points_vert:nv,points_frag:iv,shadow_vert:sv,shadow_frag:rv,sprite_vert:ov,sprite_frag:av},Ie={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},_i={basic:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ye(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Rn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Rn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ye(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Rn([Ie.points,Ie.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Rn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Rn([Ie.common,Ie.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Rn([Ie.sprite,Ie.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Rn([Ie.common,Ie.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Rn([Ie.lights,Ie.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};_i.physical={uniforms:Rn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};sa={r:0,b:0,g:0},Cs=new vn,lv=new Ke;Pr=class extends Rr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gr=4,td=[.125,.215,.35,.446,.526,.582],Ds=20,kl=new Pr,nd=new ye,Vl=null,Wl=0,Gl=0,Xl=!1,Is=(1+Math.sqrt(5))/2,ur=1/Is,id=[new E(-Is,ur,0),new E(Is,ur,0),new E(-ur,0,Is),new E(ur,0,Is),new E(0,Is,-ur),new E(0,Is,ur),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Vl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Wl,Gl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Vt,format:pi,colorSpace:Hr,depthBuffer:!1},s=sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mv(r)),this._blurMaterial=gv(r,e,t)}return s}_compileMaterial(e){let t=new Me(this._lodPlanes[0],e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,n,s){let a=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(nd),u.toneMapping=ls,u.autoClear=!1;let p=new Wn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Me(new bn,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(nd),x=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let w=this._cubeSize;ra(s,_*w,f>2?w:0,w,w),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===wr||e.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,kl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=id[(s-r-1)%id.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Me(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ds-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ds;m>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);let f=[],_=0;for(let A=0;A<Ds;++A){let T=A/x,M=Math.exp(-T*T/2);f.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let v=this._sizeLods[s],C=3*v*(s>w-gr?s-w+gr:0),R=4*(this._cubeSize-v);ra(t,C,R,3*v,2*v),l.setRenderTarget(t),l.render(h,kl)}};Ia=class extends gn{constructor(e,t,n,s,r,o,a,l,c,u=xr){if(u!==xr&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xr&&(n=Fs),n===void 0&&u===Sr&&(n=Er),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ff=new gn,ad=new Ia(1,1),pf=new Ra,mf=new Vc,gf=new Cr,ld=[],cd=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);Wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wv(t.type)}},Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cx(t.type)}},Xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ql=/(\w+)(\])?(\[|\.)?/g;_r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ux(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};hx=37297,dx=0;md=new rt;oa=new E;Mx=/^[ \t]*#include +<([\w\d./]+)>/gm;wx=new Map;Ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Lx=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kc(e),t.set(e,n)),n}},Kc=class{constructor(e){this.id=Lx++,this.code=e,this.usedTimes=0}};Bx=0;Zc=class extends Ti{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$c=class extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
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
}`;qx={[nc]:ic,[sc]:ac,[rc]:lc,[Mr]:oc,[ic]:nc,[ac]:sc,[lc]:rc,[oc]:Mr};Jc=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},wi=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jx={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
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

}`,jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new gn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Se({vertexShader:jx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Me(new bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends us{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,x=new jc,m=t.getContextAttributes(),f=null,_=null,w=[],v=[],C=new ie,R=null,A=new jt;A.viewport=new Qe;let T=new jt;T.viewport=new Qe;let M=[A,T],y=new Jc,S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=w[q];return te===void 0&&(te=new ho,w[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=w[q];return te===void 0&&(te=new ho,w[q]=te),te.getGripSpace()},this.getHand=function(q){let te=w[q];return te===void 0&&(te=new ho,w[q]=te),te.getHandSpace()};function D(q){let te=v.indexOf(q.inputSource);if(te===-1)return;let Q=w[te];Q!==void 0&&(Q.update(q.inputSource,q.frame,c||o),Q.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",B);for(let q=0;q<w.length;q++){let te=v[q];te!==null&&(v[q]=null,w[q].disconnect(te))}S=null,N=null,x.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,_=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ht(p.framebufferWidth,p.framebufferHeight,{format:pi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,Q=null,K=null;m.depth&&(K=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Sr:xr,Q=m.stencil?Er:Fs);let Y={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Y),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ht(d.textureWidth,d.textureHeight,{format:pi,type:Yi,depthTexture:new Ia(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(q){for(let te=0;te<q.removed.length;te++){let Q=q.removed[te],K=v.indexOf(Q);K>=0&&(v[K]=null,w[K].disconnect(Q))}for(let te=0;te<q.added.length;te++){let Q=q.added[te],K=v.indexOf(Q);if(K===-1){for(let ve=0;ve<w.length;ve++)if(ve>=v.length){v.push(Q),K=ve;break}else if(v[ve]===null){v[ve]=Q,K=ve;break}if(K===-1)break}let Y=w[K];Y&&Y.connect(Q)}}let U=new E,H=new E;function z(q,te,Q){U.setFromMatrixPosition(te.matrixWorld),H.setFromMatrixPosition(Q.matrixWorld);let K=U.distanceTo(H),Y=te.projectionMatrix.elements,ve=Q.projectionMatrix.elements,ce=Y[14]/(Y[10]-1),Ee=Y[14]/(Y[10]+1),J=(Y[9]+1)/Y[5],re=(Y[9]-1)/Y[5],L=(Y[8]-1)/Y[0],me=(ve[8]+1)/ve[0],ae=ce*L,ge=ce*me,ue=K/(-L+me),Fe=ue*-L;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Fe),q.translateZ(ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Y[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let xe=ce+ue,I=Ee+ue,b=ae-Fe,G=ge+(K-Fe),ne=J*Ee/I*xe,de=re*Ee/I*xe;q.projectionMatrix.makePerspective(b,G,ne,de,xe,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function O(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,Q=q.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(Q=x.depthFar)),y.near=T.near=A.near=te,y.far=T.far=A.far=Q,(S!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,N=y.far),A.layers.mask=q.layers.mask|2,T.layers.mask=q.layers.mask|4,y.layers.mask=A.layers.mask|T.layers.mask;let K=q.parent,Y=y.cameras;O(y,K);for(let ve=0;ve<Y.length;ve++)O(Y[ve],K);Y.length===2?z(y,A,T):y.projectionMatrix.copy(A.projectionMatrix),X(q,y,K)};function X(q,te,Q){Q===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(Q.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=go*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ee=null;function pe(q,te){if(u=te.getViewerPose(c||o),g=te,u!==null){let Q=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let K=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let ve=0;ve<Q.length;ve++){let ce=Q[ve],Ee=null;if(p!==null)Ee=p.getViewport(ce);else{let re=h.getViewSubImage(d,ce);Ee=re.viewport,ve===0&&(e.setRenderTargetTextures(_,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(_))}let J=M[ve];J===void 0&&(J=new jt,J.layers.enable(ve),J.viewport=new Qe,M[ve]=J),J.matrix.fromArray(ce.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ce.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ve===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(J)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){let ve=h.getDepthInformation(Q[0]);ve&&ve.isValid&&ve.texture&&x.init(e,ve,s.renderState)}}for(let Q=0;Q<w.length;Q++){let K=v[Q],Y=w[Q];K!==null&&Y!==void 0&&Y.update(K,te,c||o)}ee&&ee(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let be=new df;be.setAnimationLoop(pe),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}},Ps=new vn,ey=new Ke;Lr=class{constructor(e={}){let{canvas:t=am(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,_=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=ls,this.toneMappingExposure=1;let v=this,C=!1,R=0,A=0,T=null,M=-1,y=null,S=new Qe,N=new Qe,D=null,F=new ye(0),B=0,U=t.width,H=t.height,z=1,O=null,X=null,ee=new Qe(0,0,U,H),pe=new Qe(0,0,U,H),be=!1,q=new Bs,te=!1,Q=!1,K=new Ke,Y=new Ke,ve=new E,ce=new Qe,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function re(){return T===null?z:1}let L=n;function me(P,V){return t.getContext(P,V)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),L===null){let V="webgl2";if(L=me(V,P),L===null)throw me(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ae,ge,ue,Fe,xe,I,b,G,ne,de,oe,ze,Ae,Te,st,_e,Re,De,qe,Ne,lt,et,mt,k;function Ce(){ae=new xv(L),ae.init(),et=new $x(L,ae),ge=new dv(L,ae,e,et),ue=new Yx(L,ae),ge.reverseDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),Fe=new Mv(L),xe=new Ux,I=new Zx(L,ae,ue,xe,ge,et,Fe),b=new pv(v),G=new vv(v),ne=new Rm(L),mt=new uv(L,ne),de=new yv(L,ne,Fe,mt),oe=new bv(L,de,ne,Fe),qe=new wv(L,ge,I),_e=new fv(xe),ze=new Dx(v,b,G,ae,ge,mt,_e),Ae=new ty(v,xe),Te=new Fx,st=new Vx(ae),De=new cv(v,b,G,ue,oe,p,l),Re=new Xx(v,oe,ge),k=new ny(L,Fe,ge,ue),Ne=new hv(L,ae,Fe),lt=new _v(L,ae,Fe),Fe.programs=ze.programs,v.capabilities=ge,v.extensions=ae,v.properties=xe,v.renderLists=Te,v.shadowMap=Re,v.state=ue,v.info=Fe}Ce();let se=new Qc(v,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let P=ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(U,H,!1))},this.getSize=function(P){return P.set(U,H)},this.setSize=function(P,V,Z=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,H=V,t.width=Math.floor(P*z),t.height=Math.floor(V*z),Z===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(U*z,H*z).floor()},this.setDrawingBufferSize=function(P,V,Z){U=P,H=V,z=Z,t.width=Math.floor(P*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(ee)},this.setViewport=function(P,V,Z,$){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,V,Z,$),ue.viewport(S.copy(ee).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(pe)},this.setScissor=function(P,V,Z,$){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,V,Z,$),ue.scissor(N.copy(pe).multiplyScalar(z).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(P){ue.setScissorTest(be=P)},this.setOpaqueSort=function(P){O=P},this.setTransparentSort=function(P){X=P},this.getClearColor=function(P){return P.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(P=!0,V=!0,Z=!0){let $=0;if(P){let W=!1;if(T!==null){let we=T.texture.format;W=we===Nu||we===Uu||we===Du}if(W){let we=T.texture.type,Le=we===Yi||we===Fs||we===mo||we===Er||we===Pu||we===Iu,He=De.getClearColor(),ke=De.getClearAlpha(),Oe=He.r,tt=He.g,Ve=He.b;Le?(g[0]=Oe,g[1]=tt,g[2]=Ve,g[3]=ke,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Oe,x[1]=tt,x[2]=Ve,x[3]=ke,L.clearBufferiv(L.COLOR,0,x))}else $|=L.COLOR_BUFFER_BIT}V&&($|=L.DEPTH_BUFFER_BIT),Z&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Te.dispose(),st.dispose(),xe.dispose(),b.dispose(),G.dispose(),oe.dispose(),mt.dispose(),k.dispose(),ze.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ln),se.removeEventListener("sessionend",qs),Fn.stop()};function le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let P=Fe.autoReset,V=Re.enabled,Z=Re.autoUpdate,$=Re.needsUpdate,W=Re.type;Ce(),Fe.autoReset=P,Re.enabled=V,Re.autoUpdate=Z,Re.needsUpdate=$,Re.type=W}function Pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function it(P){let V=P.target;V.removeEventListener("dispose",it),Dt(V)}function Dt(P){Jt(P),xe.remove(P)}function Jt(P){let V=xe.get(P).programs;V!==void 0&&(V.forEach(function(Z){ze.releaseProgram(Z)}),P.isShaderMaterial&&ze.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,Z,$,W,we){V===null&&(V=Ee);let Le=W.isMesh&&W.matrixWorld.determinant()<0,He=ch(P,V,Z,$,W);ue.setMaterial($,Le);let ke=Z.index,Oe=1;if($.wireframe===!0){if(ke=de.getWireframeAttribute(Z),ke===void 0)return;Oe=2}let tt=Z.drawRange,Ve=Z.attributes.position,ut=tt.start*Oe,St=(tt.start+tt.count)*Oe;we!==null&&(ut=Math.max(ut,we.start*Oe),St=Math.min(St,(we.start+we.count)*Oe)),ke!==null?(ut=Math.max(ut,0),St=Math.min(St,ke.count)):Ve!=null&&(ut=Math.max(ut,0),St=Math.min(St,Ve.count));let Rt=St-ut;if(Rt<0||Rt===1/0)return;mt.setup(W,$,He,Z,ke);let pn,gt=Ne;if(ke!==null&&(pn=ne.get(ke),gt=lt,gt.setIndex(pn)),W.isMesh)$.wireframe===!0?(ue.setLineWidth($.wireframeLinewidth*re()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(W.isLine){let We=$.linewidth;We===void 0&&(We=1),ue.setLineWidth(We*re()),W.isLineSegments?gt.setMode(L.LINES):W.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else W.isPoints?gt.setMode(L.POINTS):W.isSprite&&gt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)gt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let We=W._multiDrawStarts,xi=W._multiDrawCounts,yt=W._multiDrawCount,Kn=ke?ne.get(ke).bytesPerElement:1,Ms=xe.get($).currentProgram.getUniforms();for(let Dn=0;Dn<yt;Dn++)Ms.setValue(L,"_gl_DrawID",Dn),gt.render(We[Dn]/Kn,xi[Dn])}else if(W.isInstancedMesh)gt.renderInstances(ut,Rt,W.count);else if(Z.isInstancedBufferGeometry){let We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,xi=Math.min(Z.instanceCount,We);gt.renderInstances(ut,Rt,xi)}else gt.render(ut,Rt)};function xt(P,V,Z){P.transparent===!0&&P.side===pt&&P.forceSinglePass===!1?(P.side=zt,P.needsUpdate=!0,_s(P,V,Z),P.side=Si,P.needsUpdate=!0,_s(P,V,Z),P.side=pt):_s(P,V,Z)}this.compile=function(P,V,Z=null){Z===null&&(Z=P),f=st.get(Z),f.init(V),w.push(f),Z.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),P!==Z&&P.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights();let $=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let we=W.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){let He=we[Le];xt(He,Z,W),$.add(He)}else xt(we,Z,W),$.add(we)}),w.pop(),f=null,$},this.compileAsync=function(P,V,Z=null){let $=this.compile(P,V,Z);return new Promise(W=>{function we(){if($.forEach(function(Le){xe.get(Le).currentProgram.isReady()&&$.delete(Le)}),$.size===0){W(P);return}setTimeout(we,10)}ae.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let In=null;function ai(P){In&&In(P)}function Ln(){Fn.stop()}function qs(){Fn.start()}let Fn=new df;Fn.setAnimationLoop(ai),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(P){In=P,se.setAnimationLoop(P),P===null?Fn.stop():Fn.start()},se.addEventListener("sessionstart",Ln),se.addEventListener("sessionend",qs),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,V,T),f=st.get(P,w.length),f.init(V),w.push(f),Y.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(Y),Q=this.localClippingEnabled,te=_e.init(this.clippingPlanes,Q),m=Te.get(P,_.length),m.init(),_.push(m),se.enabled===!0&&se.isPresenting===!0){let we=v.xr.getDepthSensingMesh();we!==null&&ys(we,V,-1/0,v.sortObjects)}ys(P,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(O,X),J=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,J&&De.addToRenderList(m,P),this.info.render.frame++,te===!0&&_e.beginShadows();let Z=f.state.shadowsArray;Re.render(Z,P,V),te===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,W=m.transmissive;if(f.setupLights(),V.isArrayCamera){let we=V.cameras;if(W.length>0)for(let Le=0,He=we.length;Le<He;Le++){let ke=we[Le];li($,W,P,ke)}J&&De.render(P);for(let Le=0,He=we.length;Le<He;Le++){let ke=we[Le];Ys(m,P,ke,ke.viewport)}}else W.length>0&&li($,W,P,V),J&&De.render(P),Ys(m,P,V);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(v,P,V),mt.resetDefaultState(),M=-1,y=null,w.pop(),w.length>0?(f=w[w.length-1],te===!0&&_e.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ys(P,V,Z,$){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){$&&ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Y);let Le=oe.update(P),He=P.material;He.visible&&m.push(P,Le,He,Z,ce.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){let Le=oe.update(P),He=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ce.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ce.copy(Le.boundingSphere.center)),ce.applyMatrix4(P.matrixWorld).applyMatrix4(Y)),Array.isArray(He)){let ke=Le.groups;for(let Oe=0,tt=ke.length;Oe<tt;Oe++){let Ve=ke[Oe],ut=He[Ve.materialIndex];ut&&ut.visible&&m.push(P,Le,ut,Z,ce.z,Ve)}}else He.visible&&m.push(P,Le,He,Z,ce.z,null)}}let we=P.children;for(let Le=0,He=we.length;Le<He;Le++)ys(we[Le],V,Z,$)}function Ys(P,V,Z,$){let W=P.opaque,we=P.transmissive,Le=P.transparent;f.setupLightsView(Z),te===!0&&_e.setGlobalState(v.clippingPlanes,Z),$&&ue.viewport(S.copy($)),W.length>0&&xn(W,V,Z),we.length>0&&xn(we,V,Z),Le.length>0&&xn(Le,V,Z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function li(P,V,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new Ht(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Vt:Yi,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let we=f.state.transmissionRenderTarget[$.id],Le=$.viewport||S;we.setSize(Le.z,Le.w);let He=v.getRenderTarget();v.setRenderTarget(we),v.getClearColor(F),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),J&&De.render(Z);let ke=v.toneMapping;v.toneMapping=ls;let Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),te===!0&&_e.setGlobalState(v.clippingPlanes,$),xn(P,Z,$),I.updateMultisampleRenderTarget(we),I.updateRenderTargetMipmap(we),ae.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ve=0,ut=V.length;Ve<ut;Ve++){let St=V[Ve],Rt=St.object,pn=St.geometry,gt=St.material,We=St.group;if(gt.side===pt&&Rt.layers.test($.layers)){let xi=gt.side;gt.side=zt,gt.needsUpdate=!0,Sn(Rt,Z,$,pn,gt,We),gt.side=xi,gt.needsUpdate=!0,tt=!0}}tt===!0&&(I.updateMultisampleRenderTarget(we),I.updateRenderTargetMipmap(we))}v.setRenderTarget(He),v.setClearColor(F,B),Oe!==void 0&&($.viewport=Oe),v.toneMapping=ke}function xn(P,V,Z){let $=V.isScene===!0?V.overrideMaterial:null;for(let W=0,we=P.length;W<we;W++){let Le=P[W],He=Le.object,ke=Le.geometry,Oe=$===null?Le.material:$,tt=Le.group;He.layers.test(Z.layers)&&Sn(He,V,Z,ke,Oe,tt)}}function Sn(P,V,Z,$,W,we){P.onBeforeRender(v,V,Z,$,W,we),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(v,V,Z,$,P,we),W.transparent===!0&&W.side===pt&&W.forceSinglePass===!1?(W.side=zt,W.needsUpdate=!0,v.renderBufferDirect(Z,V,$,W,P,we),W.side=Si,W.needsUpdate=!0,v.renderBufferDirect(Z,V,$,W,P,we),W.side=pt):v.renderBufferDirect(Z,V,$,W,P,we),P.onAfterRender(v,V,Z,$,W,we)}function _s(P,V,Z){V.isScene!==!0&&(V=Ee);let $=xe.get(P),W=f.state.lights,we=f.state.shadowsArray,Le=W.state.version,He=ze.getParameters(P,W.state,we,V,Z),ke=ze.getProgramCacheKey(He),Oe=$.programs;$.environment=P.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(P.isMeshStandardMaterial?G:b).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Oe===void 0&&(P.addEventListener("dispose",it),Oe=new Map,$.programs=Oe);let tt=Oe.get(ke);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Le)return Ks(P,He),tt}else He.uniforms=ze.getUniforms(P),P.onBeforeCompile(He,v),tt=ze.acquireProgram(He,ke),Oe.set(ke,tt),$.uniforms=He.uniforms;let Ve=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ve.clippingPlanes=_e.uniform),Ks(P,He),$.needsLights=Xr(P),$.lightsStateVersion=Le,$.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMap.value=W.state.directionalShadowMap,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotShadowMap.value=W.state.spotShadowMap,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMap.value=W.state.pointShadowMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=tt,$.uniformsList=null,tt}function Oo(P){if(P.uniformsList===null){let V=P.currentProgram.getUniforms();P.uniformsList=_r.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function Ks(P,V){let Z=xe.get(P);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function ch(P,V,Z,$,W){V.isScene!==!0&&(V=Ee),I.resetTextureUnits();let we=V.fog,Le=$.isMeshStandardMaterial?V.environment:null,He=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hr,ke=($.isMeshStandardMaterial?G:b).get($.envMap||Le),Oe=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!Z.morphAttributes.position,ut=!!Z.morphAttributes.normal,St=!!Z.morphAttributes.color,Rt=ls;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Rt=v.toneMapping);let pn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=pn!==void 0?pn.length:0,We=xe.get($),xi=f.state.lights;if(te===!0&&(Q===!0||P!==y)){let Tn=P===y&&$.id===M;_e.setState($,P,Tn)}let yt=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==xi.state.version||We.outputColorSpace!==He||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isBatchedMesh&&We.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&We.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&We.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&We.instancingMorph===!1&&W.morphTexture!==null||We.envMap!==ke||$.fog===!0&&We.fog!==we||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==_e.numPlanes||We.numIntersection!==_e.numIntersection)||We.vertexAlphas!==Oe||We.vertexTangents!==tt||We.morphTargets!==Ve||We.morphNormals!==ut||We.morphColors!==St||We.toneMapping!==Rt||We.morphTargetsCount!==gt)&&(yt=!0):(yt=!0,We.__version=$.version);let Kn=We.currentProgram;yt===!0&&(Kn=_s($,V,W));let Ms=!1,Dn=!1,Ni=!1,Tt=Kn.getUniforms(),zn=We.uniforms;if(ue.useProgram(Kn.program)&&(Ms=!0,Dn=!0,Ni=!0),$.id!==M&&(M=$.id,Dn=!0),Ms||y!==P){ue.buffers.depth.getReversed()?(K.copy(P.projectionMatrix),cm(K),um(K),Tt.setValue(L,"projectionMatrix",K)):Tt.setValue(L,"projectionMatrix",P.projectionMatrix),Tt.setValue(L,"viewMatrix",P.matrixWorldInverse);let yi=Tt.map.cameraPosition;yi!==void 0&&yi.setValue(L,ve.setFromMatrixPosition(P.matrixWorld)),ge.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,Dn=!0,Ni=!0)}if(W.isSkinnedMesh){Tt.setOptional(L,W,"bindMatrix"),Tt.setOptional(L,W,"bindMatrixInverse");let Tn=W.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Tt.setValue(L,"boneTexture",Tn.boneTexture,I))}W.isBatchedMesh&&(Tt.setOptional(L,W,"batchingTexture"),Tt.setValue(L,"batchingTexture",W._matricesTexture,I),Tt.setOptional(L,W,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",W._indirectTexture,I),Tt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",W._colorsTexture,I));let Ji=Z.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&qe.update(W,Z,Kn),(Dn||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Tt.setValue(L,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(zn.envMap.value=ke,zn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(zn.envMapIntensity.value=V.environmentIntensity),Dn&&(Tt.setValue(L,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&yn(zn,Ni),we&&$.fog===!0&&Ae.refreshFogUniforms(zn,we),Ae.refreshMaterialUniforms(zn,$,z,H,f.state.transmissionRenderTarget[P.id]),_r.upload(L,Oo(We),zn,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(_r.upload(L,Oo(We),zn,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(L,"center",W.center),Tt.setValue(L,"modelViewMatrix",W.modelViewMatrix),Tt.setValue(L,"normalMatrix",W.normalMatrix),Tt.setValue(L,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Tn=$.uniformsGroups;for(let yi=0,Zn=Tn.length;yi<Zn;yi++){let qr=Tn[yi];k.update(qr,Kn),k.bind(qr,Kn)}}return Kn}function yn(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function Xr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,V,Z){xe.get(P.texture).__webglTexture=V,xe.get(P.depthTexture).__webglTexture=Z;let $=xe.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){let Z=xe.get(P);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,Z=0){T=P,R=V,A=Z;let $=!0,W=null,we=!1,Le=!1;if(P){let ke=xe.get(P);if(ke.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(ke.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(ke.__hasExternalTextures)I.rebindTextures(P,xe.get(P.texture).__webglTexture,xe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ve=P.depthTexture;if(ke.__boundDepthTexture!==Ve){if(Ve!==null&&xe.has(Ve)&&(P.width!==Ve.image.width||P.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}let Oe=P.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Le=!0);let tt=xe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(tt[V])?W=tt[V][Z]:W=tt[V],we=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?W=xe.get(P).__webglMultisampledFramebuffer:Array.isArray(tt)?W=tt[Z]:W=tt,S.copy(P.viewport),N.copy(P.scissor),D=P.scissorTest}else S.copy(ee).multiplyScalar(z).floor(),N.copy(pe).multiplyScalar(z).floor(),D=be;if(ue.bindFramebuffer(L.FRAMEBUFFER,W)&&$&&ue.drawBuffers(P,W),ue.viewport(S),ue.scissor(N),ue.setScissorTest(D),we){let ke=xe.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,Z)}else if(Le){let ke=xe.get(P.texture),Oe=V||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,Z||0,Oe)}M=-1},this.readRenderTargetPixels=function(P,V,Z,$,W,we,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He){ue.bindFramebuffer(L.FRAMEBUFFER,He);try{let ke=P.texture,Oe=ke.format,tt=ke.type;if(!ge.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-$&&Z>=0&&Z<=P.height-W&&L.readPixels(V,Z,$,W,et.convert(Oe),et.convert(tt),we)}finally{let ke=T!==null?xe.get(T).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(P,V,Z,$,W,we,Le){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=xe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He){let ke=P.texture,Oe=ke.format,tt=ke.type;if(!ge.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-$&&Z>=0&&Z<=P.height-W){ue.bindFramebuffer(L.FRAMEBUFFER,He);let Ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.bufferData(L.PIXEL_PACK_BUFFER,we.byteLength,L.STREAM_READ),L.readPixels(V,Z,$,W,et.convert(Oe),et.convert(tt),0);let ut=T!==null?xe.get(T).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,ut);let St=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lm(L,St,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,we),L.deleteBuffer(Ve),L.deleteSync(St),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,V=null,Z=0){P.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);let $=Math.pow(2,-Z),W=Math.floor(P.image.width*$),we=Math.floor(P.image.height*$),Le=V!==null?V.x:0,He=V!==null?V.y:0;I.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Le,He,W,we),ue.unbindTexture()},this.copyTextureToTexture=function(P,V,Z=null,$=null,W=0){P.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1],V=arguments[2],W=arguments[3]||0,Z=null);let we,Le,He,ke,Oe,tt,Ve,ut,St,Rt=P.isCompressedTexture?P.mipmaps[W]:P.image;Z!==null?(we=Z.max.x-Z.min.x,Le=Z.max.y-Z.min.y,He=Z.isBox3?Z.max.z-Z.min.z:1,ke=Z.min.x,Oe=Z.min.y,tt=Z.isBox3?Z.min.z:0):(we=Rt.width,Le=Rt.height,He=Rt.depth||1,ke=0,Oe=0,tt=0),$!==null?(Ve=$.x,ut=$.y,St=$.z):(Ve=0,ut=0,St=0);let pn=et.convert(V.format),gt=et.convert(V.type),We;V.isData3DTexture?(I.setTexture3D(V,0),We=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),We=L.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),We=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let xi=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Kn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ms=L.getParameter(L.UNPACK_SKIP_ROWS),Dn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);let Ni=P.isDataArrayTexture||P.isData3DTexture,Tt=V.isDataArrayTexture||V.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let zn=xe.get(P),Ji=xe.get(V),Tn=xe.get(zn.__renderTarget),yi=xe.get(Ji.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,Tn.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Zn=0;Zn<He;Zn++)Ni&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(P).__webglTexture,W,tt+Zn),P.isDepthTexture?(Tt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(V).__webglTexture,W,St+Zn),L.blitFramebuffer(ke,Oe,we,Le,Ve,ut,we,Le,L.DEPTH_BUFFER_BIT,L.NEAREST)):Tt?L.copyTexSubImage3D(We,W,Ve,ut,St+Zn,ke,Oe,we,Le):L.copyTexSubImage2D(We,W,Ve,ut,St+Zn,ke,Oe,we,Le);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Tt?P.isDataTexture||P.isData3DTexture?L.texSubImage3D(We,W,Ve,ut,St,we,Le,He,pn,gt,Rt.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(We,W,Ve,ut,St,we,Le,He,pn,Rt.data):L.texSubImage3D(We,W,Ve,ut,St,we,Le,He,pn,gt,Rt):P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,Ve,ut,we,Le,pn,gt,Rt.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,Ve,ut,Rt.width,Rt.height,pn,Rt.data):L.texSubImage2D(L.TEXTURE_2D,W,Ve,ut,we,Le,pn,gt,Rt);L.pixelStorei(L.UNPACK_ROW_LENGTH,xi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Kn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ms),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dn),W===0&&V.generateMipmaps&&L.generateMipmap(We),ue.unbindTexture()},this.copyTextureToTexture3D=function(P,V,Z=null,$=null,W=0){return P.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,P=arguments[2],V=arguments[3],W=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,V,Z,$,W)},this.initRenderTarget=function(P){xe.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),ue.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,ue.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}},Gn=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},yo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new E,Dr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_o=class extends Ti{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eo=new E,dr=new E,fr=new E,pr=new ie,to=new ie,vf=new Ke,aa=new E,no=new E,la=new E,Sd=new ie,Yl=new ie,Td=new ie,La=class extends Zt{constructor(e=new _o){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new $e;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yo(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Dr(n,3,0,!1)),hr.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=hr,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),vf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-fr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ca(aa.set(-.5,-.5,0),fr,o,dr,s,r),ca(no.set(.5,-.5,0),fr,o,dr,s,r),ca(la.set(.5,.5,0),fr,o,dr,s,r),Sd.set(0,0),Yl.set(1,0),Td.set(1,1);let a=e.ray.intersectTriangle(aa,no,la,!1,eo);if(a===null&&(ca(no.set(-.5,.5,0),fr,o,dr,s,r),Yl.set(0,1),a=e.ray.intersectTriangle(aa,la,no,!1,eo),a===null))return;let l=e.ray.origin.distanceTo(eo);l<e.near||l>e.far||t.push({distance:l,point:eo.clone(),uv:os.getInterpolation(eo,aa,no,la,Sd,Yl,Td,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Mo=class extends gn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Vn,u=Vn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xt=class extends Xe{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new Ke,Ad=new Ke,ua=[],Rd=new Ki,iy=new Ke,io=new Me,so=new Cn,Xn=class extends Me{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,iy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Rd.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Rd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),so.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),e.ray.intersectsSphere(so)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),Ad.multiplyMatrices(n,mr),io.matrixWorld=Ad,io.raycast(e,ua);for(let o=0,a=ua.length;o<a;o++){let l=ua[o];l.instanceId=r,l.object=this,t.push(l)}ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mo(new Float32Array(s*this.count),s,this.count,Lu,Mi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Ur=class extends Ti{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Da=new E,Ua=new E,Cd=new Ke,ro=new Tr,ha=new Cn,Kl=new E,Pd=new E,wo=class extends Zt{constructor(e=new $e,t=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Da.fromBufferAttribute(t,s-1),Ua.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Da.distanceTo(Ua);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;Cd.copy(s).invert(),ro.copy(e.ray).applyMatrix4(Cd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=u.getX(x),_=u.getX(x+1),w=da(this,e,ro,l,f,_);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(p),f=da(this,e,ro,l,x,m);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=da(this,e,ro,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){let x=da(this,e,ro,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Id=new E,Ld=new E,Nr=class extends wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Id.fromBufferAttribute(t,s),Ld.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Id.distanceTo(Ld);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bo=class extends Ti{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dd=new Ke,eu=new Tr,fa=new Cn,pa=new E,qt=class extends Zt{constructor(e=new $e,t=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;Dd.copy(s).invert(),eu.copy(e.ray).applyMatrix4(Dd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let m=c.getX(g);pa.fromBufferAttribute(h,m),Ud(pa,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,x=p;g<x;g++)pa.fromBufferAttribute(h,g),Ud(pa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};mi=class extends gn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,s=[],r=[],o=[],a=new E,l=new Ke;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(rn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(rn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Eo=class extends Qn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tu=class extends Eo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};ma=new E,Zl=new Bu,$l=new Bu,Jl=new Bu,Fr=class extends Qn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ma.subVectors(s[0],s[1]).add(s[0]),c=ma);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ma),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Zl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),$l.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),Jl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Zl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),$l.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Jl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Zl.calc(l),$l.calc(l),Jl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Na=class extends Qn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nu=class extends Qn{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y),po(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fa=class extends Qn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},iu=class extends Qn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends Qn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},su=class extends Qn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y),fo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Nd(a,l.x,c.x,u.x,h.x),Nd(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},ru=Object.freeze({__proto__:null,ArcCurve:tu,CatmullRomCurve3:Fr,CubicBezierCurve:Na,CubicBezierCurve3:nu,EllipseCurve:Eo,LineCurve:Fa,LineCurve3:iu,QuadraticBezierCurve:za,QuadraticBezierCurve3:su,SplineCurve:Oa}),ou=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ru[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ru[s.type]().fromJSON(s))}return this}},Ba=class extends ou{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fa(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new za(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Na(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Oa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Eo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ai=class i extends $e{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=rn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new E,d=new ie,p=new E,g=new E,x=new E,m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let _=0;_<=t;_++){let w=n+_*u*s,v=Math.sin(w),C=Math.cos(w);for(let R=0;R<=e.length-1;R++){h.x=e[R].x*v,h.y=e[R].y,h.z=e[R].x*C,o.push(h.x,h.y,h.z),d.x=_/t,d.y=R/(e.length-1),a.push(d.x,d.y);let A=l[3*R+0]*v,T=l[3*R+1],M=l[3*R+0]*C;c.push(A,T,M)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let v=w+_*e.length,C=v,R=v+e.length,A=v+e.length+1,T=v+1;r.push(C,R,T),r.push(A,T,R)}this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("uv",new Ze(a,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},zr=class i extends $e{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new E,u=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ri=class i extends $e{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],p=[],g=0,x=[],m=n/2,f=0;_(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2));function _(){let v=new E,C=new E,R=0,A=(t-e)/n;for(let T=0;T<=r;T++){let M=[],y=T/r,S=y*(t-e)+e;for(let N=0;N<=s;N++){let D=N/s,F=D*l+a,B=Math.sin(F),U=Math.cos(F);C.x=S*B,C.y=-y*n+m,C.z=S*U,h.push(C.x,C.y,C.z),v.set(B,A,U).normalize(),d.push(v.x,v.y,v.z),p.push(D,1-y),M.push(g++)}x.push(M)}for(let T=0;T<s;T++)for(let M=0;M<r;M++){let y=x[M][T],S=x[M+1][T],N=x[M+1][T+1],D=x[M][T+1];(e>0||M!==0)&&(u.push(y,S,D),R+=3),(t>0||M!==r-1)&&(u.push(S,N,D),R+=3)}c.addGroup(f,R,0),f+=R}function w(v){let C=g,R=new ie,A=new E,T=0,M=v===!0?e:t,y=v===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let S=g;for(let N=0;N<=s;N++){let F=N/s*l+a,B=Math.cos(F),U=Math.sin(F);A.x=M*U,A.y=m*y,A.z=M*B,h.push(A.x,A.y,A.z),d.push(0,y,0),R.x=B*.5+.5,R.y=U*.5*y+.5,p.push(R.x,R.y),g++}for(let N=0;N<s;N++){let D=C+N,F=S+N;v===!0?u.push(F,F+1,D):u.push(F+1,F,D),T+=3}c.addGroup(f,T,v===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},au=class i extends $e{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let w=new E,v=new E,C=new E;for(let R=0;R<t.length;R+=3)p(t[R+0],w),p(t[R+1],v),p(t[R+2],C),l(w,v,C,_)}function l(_,w,v,C){let R=C+1,A=[];for(let T=0;T<=R;T++){A[T]=[];let M=_.clone().lerp(v,T/R),y=w.clone().lerp(v,T/R),S=R-T;for(let N=0;N<=S;N++)N===0&&T===R?A[T][N]=M:A[T][N]=M.clone().lerp(y,N/S)}for(let T=0;T<R;T++)for(let M=0;M<2*(R-T)-1;M++){let y=Math.floor(M/2);M%2===0?(d(A[T][y+1]),d(A[T+1][y]),d(A[T][y])):(d(A[T][y+1]),d(A[T+1][y+1]),d(A[T+1][y]))}}function c(_){let w=new E;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(_),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){let _=new E;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let v=m(_)/2/Math.PI+.5,C=f(_)/Math.PI+.5;o.push(v,1-C)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){let w=o[_+0],v=o[_+2],C=o[_+4],R=Math.max(w,v,C),A=Math.min(w,v,C);R>.9&&A<.1&&(w<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,w){let v=_*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function g(){let _=new E,w=new E,v=new E,C=new E,R=new ie,A=new ie,T=new ie;for(let M=0,y=0;M<r.length;M+=9,y+=6){_.set(r[M+0],r[M+1],r[M+2]),w.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),R.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),T.set(o[y+4],o[y+5]),C.copy(_).add(w).add(v).divideScalar(3);let S=m(C);x(R,y+0,_,S),x(A,y+2,w,S),x(T,y+4,v,S)}}function x(_,w,v,C){C<0&&_.x===1&&(o[w]=_.x-1),v.x===0&&v.z===0&&(o[w]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},hs=class extends Ba{constructor(e){super(e),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ba().fromJSON(s))}return this}},hy={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=xf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,p;if(n&&(r=gy(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return So(r,o,t,a,l,p,0),o}};cs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];zd(e),Od(n,e);let o=e.length;t.forEach(zd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Od(n,t[l]);let a=hy.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ha=class i extends $e{constructor(e=new hs([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Ry,w,v=!1,C,R,A,T;f&&(w=f.getSpacedPoints(u),v=!0,d=!1,C=f.computeFrenetFrames(u,!1),R=new E,A=new E,T=new E),d||(m=0,p=0,g=0,x=0);let M=a.extractPoints(c),y=M.shape,S=M.holes;if(!cs.isClockWise(y)){y=y.reverse();for(let J=0,re=S.length;J<re;J++){let L=S[J];cs.isClockWise(L)&&(S[J]=L.reverse())}}let D=cs.triangulateShape(y,S),F=y;for(let J=0,re=S.length;J<re;J++){let L=S[J];y=y.concat(L)}function B(J,re,L){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(re,L)}let U=y.length,H=D.length;function z(J,re,L){let me,ae,ge,ue=J.x-re.x,Fe=J.y-re.y,xe=L.x-J.x,I=L.y-J.y,b=ue*ue+Fe*Fe,G=ue*I-Fe*xe;if(Math.abs(G)>Number.EPSILON){let ne=Math.sqrt(b),de=Math.sqrt(xe*xe+I*I),oe=re.x-Fe/ne,ze=re.y+ue/ne,Ae=L.x-I/de,Te=L.y+xe/de,st=((Ae-oe)*I-(Te-ze)*xe)/(ue*I-Fe*xe);me=oe+ue*st-J.x,ae=ze+Fe*st-J.y;let _e=me*me+ae*ae;if(_e<=2)return new ie(me,ae);ge=Math.sqrt(_e/2)}else{let ne=!1;ue>Number.EPSILON?xe>Number.EPSILON&&(ne=!0):ue<-Number.EPSILON?xe<-Number.EPSILON&&(ne=!0):Math.sign(Fe)===Math.sign(I)&&(ne=!0),ne?(me=-Fe,ae=ue,ge=Math.sqrt(b)):(me=ue,ae=Fe,ge=Math.sqrt(b/2))}return new ie(me/ge,ae/ge)}let O=[];for(let J=0,re=F.length,L=re-1,me=J+1;J<re;J++,L++,me++)L===re&&(L=0),me===re&&(me=0),O[J]=z(F[J],F[L],F[me]);let X=[],ee,pe=O.concat();for(let J=0,re=S.length;J<re;J++){let L=S[J];ee=[];for(let me=0,ae=L.length,ge=ae-1,ue=me+1;me<ae;me++,ge++,ue++)ge===ae&&(ge=0),ue===ae&&(ue=0),ee[me]=z(L[me],L[ge],L[ue]);X.push(ee),pe=pe.concat(ee)}for(let J=0;J<m;J++){let re=J/m,L=p*Math.cos(re*Math.PI/2),me=g*Math.sin(re*Math.PI/2)+x;for(let ae=0,ge=F.length;ae<ge;ae++){let ue=B(F[ae],O[ae],me);K(ue.x,ue.y,-L)}for(let ae=0,ge=S.length;ae<ge;ae++){let ue=S[ae];ee=X[ae];for(let Fe=0,xe=ue.length;Fe<xe;Fe++){let I=B(ue[Fe],ee[Fe],me);K(I.x,I.y,-L)}}}let be=g+x;for(let J=0;J<U;J++){let re=d?B(y[J],pe[J],be):y[J];v?(A.copy(C.normals[0]).multiplyScalar(re.x),R.copy(C.binormals[0]).multiplyScalar(re.y),T.copy(w[0]).add(A).add(R),K(T.x,T.y,T.z)):K(re.x,re.y,0)}for(let J=1;J<=u;J++)for(let re=0;re<U;re++){let L=d?B(y[re],pe[re],be):y[re];v?(A.copy(C.normals[J]).multiplyScalar(L.x),R.copy(C.binormals[J]).multiplyScalar(L.y),T.copy(w[J]).add(A).add(R),K(T.x,T.y,T.z)):K(L.x,L.y,h/u*J)}for(let J=m-1;J>=0;J--){let re=J/m,L=p*Math.cos(re*Math.PI/2),me=g*Math.sin(re*Math.PI/2)+x;for(let ae=0,ge=F.length;ae<ge;ae++){let ue=B(F[ae],O[ae],me);K(ue.x,ue.y,h+L)}for(let ae=0,ge=S.length;ae<ge;ae++){let ue=S[ae];ee=X[ae];for(let Fe=0,xe=ue.length;Fe<xe;Fe++){let I=B(ue[Fe],ee[Fe],me);v?K(I.x,I.y+w[u-1].y,w[u-1].x+L):K(I.x,I.y,h+L)}}}q(),te();function q(){let J=s.length/3;if(d){let re=0,L=U*re;for(let me=0;me<H;me++){let ae=D[me];Y(ae[2]+L,ae[1]+L,ae[0]+L)}re=u+m*2,L=U*re;for(let me=0;me<H;me++){let ae=D[me];Y(ae[0]+L,ae[1]+L,ae[2]+L)}}else{for(let re=0;re<H;re++){let L=D[re];Y(L[2],L[1],L[0])}for(let re=0;re<H;re++){let L=D[re];Y(L[0]+U*u,L[1]+U*u,L[2]+U*u)}}n.addGroup(J,s.length/3-J,0)}function te(){let J=s.length/3,re=0;Q(F,re),re+=F.length;for(let L=0,me=S.length;L<me;L++){let ae=S[L];Q(ae,re),re+=ae.length}n.addGroup(J,s.length/3-J,1)}function Q(J,re){let L=J.length;for(;--L>=0;){let me=L,ae=L-1;ae<0&&(ae=J.length-1);for(let ge=0,ue=u+m*2;ge<ue;ge++){let Fe=U*ge,xe=U*(ge+1),I=re+me+Fe,b=re+ae+Fe,G=re+ae+xe,ne=re+me+xe;ve(I,b,G,ne)}}}function K(J,re,L){l.push(J),l.push(re),l.push(L)}function Y(J,re,L){ce(J),ce(re),ce(L);let me=s.length/3,ae=_.generateTopUV(n,s,me-3,me-2,me-1);Ee(ae[0]),Ee(ae[1]),Ee(ae[2])}function ve(J,re,L,me){ce(J),ce(re),ce(me),ce(re),ce(L),ce(me);let ae=s.length/3,ge=_.generateSideWallUV(n,s,ae-6,ae-3,ae-2,ae-1);Ee(ge[0]),Ee(ge[1]),Ee(ge[3]),Ee(ge[1]),Ee(ge[2]),Ee(ge[3])}function ce(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Ee(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ru[s.type]().fromJSON(s)),new i(n,e.options)}},Ry={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ie(r,o),new ie(a,l),new ie(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ie(o,1-l),new ie(c,1-h),new ie(d,1-g),new ie(x,1-f)]:[new ie(a,1-l),new ie(u,1-h),new ie(p,1-g),new ie(m,1-f)]}};ka=class i extends au{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ro=class i extends $e{constructor(e=new hs([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),p=d.shape,g=d.holes;cs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let _=g[m];cs.isClockWise(_)===!0&&(g[m]=_.reverse())}let x=cs.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let _=g[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){let _=p[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,f=x.length;m<f;m++){let _=x[m],w=_[0]+h,v=_[1]+h,C=_[2]+h;n.push(w,v,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Py(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};on=class i extends $e{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new E,d=new E,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let _=[],w=f/n,v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let R=C/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+w*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(R+v,1-w),_.push(c++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let w=u[f][_+1],v=u[f][_],C=u[f+1][_],R=u[f+1][_+1];(f!==0||o>0)&&p.push(w,v,R),(f!==n-1||l<Math.PI)&&p.push(v,C,R)}this.setIndex(p),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Va=class extends Se{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},kt=class extends Ti{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};Or=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uu=class extends Or{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ph:r=e,a=2*t-n;break;case Ih:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ph:o=e,l=2*n-t;break;case Ih:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,w=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let C=0;C!==a;++C)r[C]=f*o[u+C]+_*o[c+C]+w*o[l+C]+v*o[h+C];return r}},hu=class extends Or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},du=class extends Or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case Oc:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return Oc;case this.InterpolantFactoryMethodSmooth:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Iy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_l,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Oc;ks=class extends gi{constructor(e,t,n){super(e,t,n)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Sa;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;fu=class extends gi{};fu.prototype.ValueTypeName="color";pu=class extends gi{};pu.prototype.ValueTypeName="number";mu=class extends Or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)At.slerpFlat(r,0,o,c-a,o,c,l);return r}},Wa=class extends gi{InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}};Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;Vs=class extends gi{constructor(e,t,n){super(e,t,n)}};Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Sa;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;gu=class extends gi{};gu.prototype.ValueTypeName="vector";Bd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Hu=new vu,Co=class{constructor(e){this.manager=e!==void 0?e:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";xu=class extends Co{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Bd.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=vo("img");function l(){u(),Bd.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},Ga=class extends Co{constructor(e){super(e)}load(e,t,n,s){let r=new gn,o=new xu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Po=class extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ei=class extends Po{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jl=new Ke,Hd=new E,kd=new E,Xa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hd),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vd=new Ke,oo=new E,Ql=new E,yu=class extends Xa{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),oo.setFromMatrixPosition(e.matrixWorld),n.position.copy(oo),Ql.copy(n.position),Ql.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ql),n.updateMatrixWorld(),s.makeTranslation(-oo.x,-oo.y,-oo.z),Vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd)}},qa=class extends Po{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_u=class extends Xa{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ti=class extends Po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new _u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ni=class extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Br=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Wd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};ku="\\[\\]\\.:\\/",Ly=new RegExp("["+ku+"]","g"),Vu="[^"+ku+"]",Dy="[^"+ku.replace("\\.","")+"]",Uy=/((?:WC+[\/:])*)/.source.replace("WC",Vu),Ny=/(WCOD+)?/.source.replace("WCOD",Dy),Fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),Oy=new RegExp("^"+Uy+Ny+Fy+zy+"$"),By=["material","materials","bones","map"],Mu=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ly,"")}static parseTrackName(e){let t=Oy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);By.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Mu;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];U_=new Float32Array(1),Gd=new Ke,Ya=class{constructor(e,t,n=0,s=1/0){this.ray=new Tr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gd),this}intersectObject(e,t=!0,n=[]){return wu(e,this,n,t),n.sort(Xd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wu(e[s],this,n,t);return n.sort(Xd),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu)});var Qu={};cp(Qu,{computeMikkTSpaceTangents:()=>o_,computeMorphedAttributes:()=>p_,deepCloneAttribute:()=>l_,deinterleaveAttribute:()=>al,deinterleaveGeometry:()=>u_,estimateBytesUsed:()=>h_,interleaveAttributes:()=>c_,mergeAttributes:()=>ju,mergeGeometries:()=>a_,mergeGroups:()=>m_,mergeVertices:()=>d_,toCreasedNormals:()=>g_,toTrianglesDrawMode:()=>f_});function o_(i,e,t=!0){if(!e||!e.isReady)throw new Error("BufferGeometryUtils: Initialized MikkTSpace library required.");if(!i.hasAttribute("position")||!i.hasAttribute("normal")||!i.hasAttribute("uv"))throw new Error('BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');function n(o){if(o.normalized||o.isInterleavedBufferAttribute){let a=new Float32Array(o.count*o.itemSize);for(let l=0,c=0;l<o.count;l++)a[c++]=o.getX(l),a[c++]=o.getY(l),o.itemSize>2&&(a[c++]=o.getZ(l));return a}return o.array instanceof Float32Array?o.array:new Float32Array(o.array)}let s=i.index?i.toNonIndexed():i,r=e.generateTangents(n(s.attributes.position),n(s.attributes.normal),n(s.attributes.uv));if(t)for(let o=3;o<r.length;o+=4)r[o]*=-1;return s.setAttribute("tangent",new Xe(r,4)),i!==s&&i.copy(s),i}function a_(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new $e,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=ju(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][d]);let g=ju(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function ju(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Xe(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function l_(i){return i.isInstancedInterleavedBufferAttribute||i.isInterleavedBufferAttribute?al(i):i.isInstancedBufferAttribute?new Xt().copy(i):new Xe().copy(i)}function c_(i){let e,t=0,n=0;for(let c=0,u=i.length;c<u;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;t+=h.array.length,n+=h.itemSize}let s=new yo(new e(t),n),r=0,o=[],a=["getX","getY","getZ","getW"],l=["setX","setY","setZ","setW"];for(let c=0,u=i.length;c<u;c++){let h=i[c],d=h.itemSize,p=h.count,g=new Dr(s,d,r,h.normalized);o.push(g),r+=d;for(let x=0;x<p;x++)for(let m=0;m<d;m++)g[l[m]](x,h[a[m]](x))}return o}function al(i){let e=i.data.array.constructor,t=i.count,n=i.itemSize,s=i.normalized,r=new e(t*n),o;i.isInstancedInterleavedBufferAttribute?o=new Xt(r,n,s,i.meshPerAttribute):o=new Xe(r,n,s);for(let a=0;a<t;a++)o.setX(a,i.getX(a)),n>=2&&o.setY(a,i.getY(a)),n>=3&&o.setZ(a,i.getZ(a)),n>=4&&o.setW(a,i.getW(a));return o}function u_(i){let e=i.attributes,t=i.morphTargets,n=new Map;for(let s in e){let r=e[s];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,al(r)),e[s]=n.get(r))}for(let s in t){let r=t[s];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,al(r)),t[s]=n.get(r))}}function h_(i){let e=0;for(let n in i.attributes){let s=i.getAttribute(n);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function d_(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,w=a.length;_<w;_++){let v=a[_],C=i.attributes[v];l[v]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);let R=i.morphAttributes[v];R&&(c[v]||(c[v]=[]),R.forEach((A,T)=>{let M=new A.array.constructor(A.count*A.itemSize);c[v][T]=new A.constructor(M,A.itemSize,A.normalized)}))}let p=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=p*x;for(let _=0;_<r;_++){let w=n?n.getX(_):_,v="";for(let C=0,R=a.length;C<R;C++){let A=a[C],T=i.getAttribute(A),M=T.itemSize;for(let y=0;y<M;y++)v+=`${~~(T[h[y]](w)*x+m)},`}if(v in t)u.push(t[v]);else{for(let C=0,R=a.length;C<R;C++){let A=a[C],T=i.getAttribute(A),M=i.morphAttributes[A],y=T.itemSize,S=l[A],N=c[A];for(let D=0;D<y;D++){let F=h[D],B=d[D];if(S[B](o,T[F](w)),M)for(let U=0,H=M.length;U<H;U++)N[U][B](o,M[U][F](w))}}t[v]=o,u.push(o),o++}}let f=i.clone();for(let _ in i.attributes){let w=l[_];if(f.setAttribute(_,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),_ in c)for(let v=0;v<c[_].length;v++){let C=c[_][v];f.morphAttributes[_][v]=new C.constructor(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return f.setIndex(u),f}function f_(i,e){if(e===rf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Fu||e===of){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Fu)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function p_(i){let e=new E,t=new E,n=new E,s=new E,r=new E,o=new E,a=new E,l=new E,c=new E;function u(O,X,ee,pe,be,q,te,Q){e.fromBufferAttribute(X,be),t.fromBufferAttribute(X,q),n.fromBufferAttribute(X,te);let K=O.morphTargetInfluences;if(ee&&K){a.set(0,0,0),l.set(0,0,0),c.set(0,0,0);for(let Y=0,ve=ee.length;Y<ve;Y++){let ce=K[Y],Ee=ee[Y];ce!==0&&(s.fromBufferAttribute(Ee,be),r.fromBufferAttribute(Ee,q),o.fromBufferAttribute(Ee,te),pe?(a.addScaledVector(s,ce),l.addScaledVector(r,ce),c.addScaledVector(o,ce)):(a.addScaledVector(s.sub(e),ce),l.addScaledVector(r.sub(t),ce),c.addScaledVector(o.sub(n),ce)))}e.add(a),t.add(l),n.add(c)}O.isSkinnedMesh&&(O.applyBoneTransform(be,e),O.applyBoneTransform(q,t),O.applyBoneTransform(te,n)),Q[be*3+0]=e.x,Q[be*3+1]=e.y,Q[be*3+2]=e.z,Q[q*3+0]=t.x,Q[q*3+1]=t.y,Q[q*3+2]=t.z,Q[te*3+0]=n.x,Q[te*3+1]=n.y,Q[te*3+2]=n.z}let h=i.geometry,d=i.material,p,g,x,m=h.index,f=h.attributes.position,_=h.morphAttributes.position,w=h.morphTargetsRelative,v=h.attributes.normal,C=h.morphAttributes.position,R=h.groups,A=h.drawRange,T,M,y,S,N,D,F,B=new Float32Array(f.count*f.itemSize),U=new Float32Array(v.count*v.itemSize);if(m!==null)if(Array.isArray(d))for(T=0,y=R.length;T<y;T++)for(N=R[T],D=Math.max(N.start,A.start),F=Math.min(N.start+N.count,A.start+A.count),M=D,S=F;M<S;M+=3)p=m.getX(M),g=m.getX(M+1),x=m.getX(M+2),u(i,f,_,w,p,g,x,B),u(i,v,C,w,p,g,x,U);else for(D=Math.max(0,A.start),F=Math.min(m.count,A.start+A.count),T=D,y=F;T<y;T+=3)p=m.getX(T),g=m.getX(T+1),x=m.getX(T+2),u(i,f,_,w,p,g,x,B),u(i,v,C,w,p,g,x,U);else if(Array.isArray(d))for(T=0,y=R.length;T<y;T++)for(N=R[T],D=Math.max(N.start,A.start),F=Math.min(N.start+N.count,A.start+A.count),M=D,S=F;M<S;M+=3)p=M,g=M+1,x=M+2,u(i,f,_,w,p,g,x,B),u(i,v,C,w,p,g,x,U);else for(D=Math.max(0,A.start),F=Math.min(f.count,A.start+A.count),T=D,y=F;T<y;T+=3)p=T,g=T+1,x=T+2,u(i,f,_,w,p,g,x,B),u(i,v,C,w,p,g,x,U);let H=new Ze(B,3),z=new Ze(U,3);return{positionAttribute:f,normalAttribute:v,morphedPositionAttribute:H,morphedNormalAttribute:z}}function m_(i){if(i.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),i;let e=i.groups;if(e=e.sort((o,a)=>o.materialIndex!==a.materialIndex?o.materialIndex-a.materialIndex:o.start-a.start),i.getIndex()===null){let o=i.getAttribute("position"),a=[];for(let l=0;l<o.count;l+=3)a.push(l,l+1,l+2);i.setIndex(a)}let t=i.getIndex(),n=[];for(let o=0;o<e.length;o++){let a=e[o],l=a.start,c=l+a.count;for(let u=l;u<c;u++)n.push(t.getX(u))}i.dispose(),i.setIndex(n);let s=0;for(let o=0;o<e.length;o++){let a=e[o];a.start=s,s+=a.count}let r=e[0];i.groups=[r];for(let o=1;o<e.length;o++){let a=e[o];r.materialIndex===a.materialIndex?r.count+=a.count:(r=a,i.groups.push(r))}return i}function g_(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new E,new E,new E],r=new E,o=new E,a=new E,l=new E;function c(x){let m=~~(x.x*n),f=~~(x.y*n),_=~~(x.z*n);return`${m},${f},${_}`}let u=i.index?i.toNonIndexed():i,h=u.attributes.position,d={};for(let x=0,m=h.count/3;x<m;x++){let f=3*x,_=s[0].fromBufferAttribute(h,f+0),w=s[1].fromBufferAttribute(h,f+1),v=s[2].fromBufferAttribute(h,f+2);r.subVectors(v,w),o.subVectors(_,w);let C=new E().crossVectors(r,o).normalize();for(let R=0;R<3;R++){let A=s[R],T=c(A);T in d||(d[T]=[]),d[T].push(C)}}let p=new Float32Array(h.count*3),g=new Xe(p,3,!1);for(let x=0,m=h.count/3;x<m;x++){let f=3*x,_=s[0].fromBufferAttribute(h,f+0),w=s[1].fromBufferAttribute(h,f+1),v=s[2].fromBufferAttribute(h,f+2);r.subVectors(v,w),o.subVectors(_,w),a.crossVectors(r,o).normalize();for(let C=0;C<3;C++){let R=s[C],A=c(R),T=d[A];l.set(0,0,0);for(let M=0,y=T.length;M<y;M++){let S=T[M];a.dot(S)>t&&l.add(S)}l.normalize(),g.setXYZ(f+C,l.x,l.y,l.z)}}return u.setAttribute("normal",g),u}var eh=Th(()=>{Et()});Et();Et();var ja={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};Et();Et();var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Hy=new Pr(-1,1,1,-1,0,1),Wu=class extends $e{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},ky=new Wu,ds=class{constructor(e){this._mesh=new Me(ky,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var fs=class extends qn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Se?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ci.clone(e.uniforms),this.material=new Se({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ds(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lo=class extends qn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Qa=class extends qn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var el=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fs(ja),this.copyPass.material.blending=bi,this.clock=new Br}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lo!==void 0&&(o instanceof Lo?n=!0:o instanceof Qa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Et();var tl=class extends qn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};Et();Et();var Mf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vr=class i extends qn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,o,{type:Vt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ht(r,o,{type:Vt});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Ht(r,o,{type:Vt});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Mf;this.highPassUniforms=Ci.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ja;this.copyUniforms=Ci.clone(u.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:wt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new Wn,this.fsQuad=new ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Se({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Se({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Vr.BlurDirectionX=new ie(1,0);Vr.BlurDirectionY=new ie(0,1);Et();var wf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var nl=class extends qn{constructor(){super();let e=wf;this.uniforms=Ci.clone(e.uniforms),this.material=new Va({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Eu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ru&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};Et();var Ws=class i extends Me{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new jt;let n=this,s=t.color!==void 0?new ye(t.color):new ye(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Hn,h=new E,d=new E,p=new E,g=new Ke,x=new E(0,0,-1),m=new Qe,f=new E,_=new E,w=new Qe,v=new Ke,C=this.camera,R=new Ht(r,o,{samples:c,type:Vt}),A=new Se({name:l.name!==void 0?l.name:"unspecified",uniforms:Ci.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});A.uniforms.tDiffuse.value=R.texture,A.uniforms.color.value=s,A.uniforms.textureMatrix.value=v,this.material=A,this.onBeforeRender=function(T,M,y){if(d.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),f.subVectors(d,p),f.dot(h)>0)return;f.reflect(h).negate(),f.add(d),g.extractRotation(y.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),_.subVectors(d,x),_.reflect(h).negate(),_.add(d),C.position.copy(f),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(h),C.lookAt(_),C.far=y.far,C.updateMatrixWorld(),C.projectionMatrix.copy(y.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(C.projectionMatrix),v.multiply(C.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(C.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let S=C.projectionMatrix;w.x=(Math.sign(m.x)+S.elements[8])/S.elements[0],w.y=(Math.sign(m.y)+S.elements[9])/S.elements[5],w.z=-1,w.w=(1+S.elements[10])/S.elements[14],m.multiplyScalar(2/m.dot(w)),S.elements[2]=m.x,S.elements[6]=m.y,S.elements[10]=m.z+1-a,S.elements[14]=m.w,n.visible=!1;let N=T.getRenderTarget(),D=T.xr.enabled,F=T.shadowMap.autoUpdate;T.xr.enabled=!1,T.shadowMap.autoUpdate=!1,T.setRenderTarget(R),T.state.buffers.depth.setMask(!0),T.autoClear===!1&&T.clear(),T.render(M,C),T.xr.enabled=D,T.shadowMap.autoUpdate=F,T.setRenderTarget(N);let B=y.viewport;B!==void 0&&T.state.viewport(B),n.visible=!0},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),n.material.dispose()}}};Ws.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};Et();var Yn=`
  uniform float uTime, uFogK; uniform vec3 uSun, uFogCol;
  vec3 applyFog(vec3 c, vec3 w){
    vec3 d = w - cameraPosition; float l = length(d);
    float f = 1.0 - exp(-max(l - 25.0, 0.0) * uFogK);
    float s = pow(max(dot(d / l, uSun), 0.0), 6.0);
    vec3 col = uFogCol * mix(vec3(1.0), vec3(1.35, 1.05, 0.75), s);
    return mix(c, col, f);
  }`,bf=`
  float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y); }`;function Do(i,e,t=1,n=1){let s=new $e,r=[],o=[],a=4;for(let p=0;p<a;p++){let g=p/a;r.push(-.5,g,0,.5,g,0)}r.push(0,1,0);for(let p=0;p<a-1;p++){let g=p*2;o.push(g,g+1,g+3,g,g+3,g+2)}o.push((a-1)*2,(a-1)*2+1,a*2),s.setAttribute("position",new Ze(r,3)),s.setIndex(o);let l=new ni;l.index=s.index,l.attributes.position=s.attributes.position;let c=n*9301+49297,u=()=>(c=c*16807%2147483647)/2147483647,h=new Float32Array(i*4),d=new Float32Array(i*2);for(let p=0;p<i;p++)h[p*4]=u()*e,h[p*4+1]=u()*e,h[p*4+2]=u()*Math.PI*2,h[p*4+3]=u(),d[p*2]=u(),d[p*2+1]=u()*2-1;return l.setAttribute("aOff",new Xt(h,4)),l.setAttribute("aVar",new Xt(d,2)),l.instanceCount=i,l}function Gu(i,e=!1){return new Se({side:pt,uniforms:{uNear:{value:0},...i},defines:e?{FAR:""}:{},vertexShader:`
      ${bf}
      uniform float uTime, uTile, uWide, uNear, uPxAng; uniform vec2 uCenter, uFade; uniform vec3 uCam; uniform vec4 uRect, uMask; uniform sampler2D tMask, tLm;
      attribute vec4 aOff; attribute vec2 aVar;
      varying float vY, vVar, vGust; varying vec3 vW, vN; varying vec2 vLmUv;
      void main(){
        vec2 wp = uCenter + mod(aOff.xy - uCenter + 0.5 * uTile, uTile) - 0.5 * uTile;
        float dist = length(wp - uCenter);
        float keep = 1.0 - smoothstep(uFade.x, uFade.y, dist);
        #ifdef FAR
          keep *= smoothstep(uNear - 6.0, uNear + 2.0, length(wp - uCam.xz));   // tufts only beyond the dense field, never under the camera
        #endif
        vec2 muv = (wp - uMask.xz) / (uMask.yw - uMask.xz);
        if (muv.x > 0.0 && muv.x < 1.0 && muv.y > 0.0 && muv.y < 1.0) keep *= smoothstep(0.35, 0.75, texture2D(tMask, muv).r);
        float clump = 0.45 + 1.05 * smoothstep(0.25, 0.75, vnoise(wp * 0.11) * 0.7 + vnoise(wp * 0.6) * 0.3);
        float h = (0.22 + aOff.w * 0.3) * clump * keep;
        #ifdef FAR
          h *= 1.35;
        #endif
        // the avenue lawn is mown short, like a palace garden, so its flower beds read; the meadow beyond stays long
        float lawn = (1.0 - smoothstep(20.0, 22.0, abs(wp.x))) * smoothstep(7.0, 9.0, wp.y) * (1.0 - smoothstep(81.0, 83.0, wp.y));
        h *= mix(1.0, 0.3, lawn);
        float y = position.y; vY = y; vVar = aVar.x;
        float a = aOff.z; vec3 side = vec3(cos(a), 0.0, sin(a)); vec3 face = vec3(-side.z, 0.0, side.x);
        // never thinner than ~1.5 px on screen: sub-pixel blades twinkle as the view moves; wider far blades are a touch shorter and darker
        float camD = length(vec3(wp.x, 0.0, wp.y) - cameraPosition);
        float minW = camD * uPxAng * 1.5;
        float wBase = max(0.03 * uWide, minW);
        float w = wBase * (1.0 - pow(y, 1.6) * 0.92) * step(0.004, h);
        // wind: slow gust fronts rolling across the field + a quick flutter
        vec2 wdir = normalize(vec2(0.8, -0.6));
        float gust = vnoise(wp * 0.045 - wdir * uTime * 1.4) * 1.7 - 0.35;   // visible gust fronts rolling across the meadow
        float flut = sin(uTime * 3.1 + aOff.w * 30.0 + wp.x * 0.9) * 0.08;
        float bend = (aVar.y * 0.25 + gust * 0.95 + flut) * y * y; vGust = clamp(gust, 0.0, 1.5);
        vec3 p = vec3(wp.x, 0.0, wp.y) + side * position.x * w + vec3(0.0, y * h * (1.0 - 0.18 * abs(bend)), 0.0);
        p.xz += (wdir * bend * 0.9 + face.xz * aVar.y * 0.25 * y * y) * h;
        vN = normalize(mix(face, vec3(0.0, 1.0, 0.0), 0.55));
        vLmUv = vec2((wp.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - wp.y) / (uRect.w - uRect.z));
        vec4 wpos = vec4(p, 1.0); vW = wpos.xyz;
        gl_Position = projectionMatrix * viewMatrix * wpos;
      }`,fragmentShader:`
      ${Yn}
      uniform sampler2D tLm; uniform float uK;
      varying float vY, vVar, vGust; varying vec3 vW, vN; varying vec2 vLmUv;
      vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
      void main(){
        // MSAA can shade a sample just outside a thin blade: varyings arrive extrapolated, so clamp them
        float y = clamp(vY, 0.0, 1.0); float var = clamp(vVar, 0.0, 1.0);
        vec3 nN = dot(vN, vN) > 1e-6 ? normalize(vN) : vec3(0.0, 1.0, 0.0);
        vec2 uv = clamp(vLmUv, 0.002, 0.998);
        float inside = step(0.0, vLmUv.x) * step(vLmUv.x, 1.0) * step(0.0, vLmUv.y) * step(vLmUv.y, 1.0);
        vec3 L = mix(lmDecode(vec3(0.83), uK), lmDecode(texture2D(tLm, uv).rgb, uK), inside);
        vec3 tip = mix(vec3(0.19, 0.25, 0.05), vec3(0.4, 0.36, 0.14), smoothstep(0.55, 1.0, var));
        vec3 root = vec3(0.035, 0.05, 0.015);
        vec3 alb = mix(root, tip, pow(y, 0.7));
        vec3 V = normalize(cameraPosition - vW);
        float lit = clamp(dot(L, vec3(0.33)) / max(dot(lmDecode(vec3(0.83), uK), vec3(0.33)), 1e-3), 0.0, 1.2);   // 1 in sun, low in shadow
        float trans = pow(max(dot(-V, uSun), 0.0), 3.0) * lit * y * 0.6;                                           // backlit blades glow
        vec3 c = alb * L * (0.55 + 0.45 * y) + vec3(0.9, 0.85, 0.3) * alb * trans * 1.6;
        c += vec3(0.02, 0.022, 0.012) * pow(clamp(1.0 - abs(dot(nN, V)), 0.0, 1.0), 3.0) * L * y;                   // sheen at grazing angles
        c *= 1.0 + clamp(vGust, 0.0, 1.5) * 0.22 * y;                                    // bent blades catch more sky: the gusts are visible
        gl_FragColor = vec4(applyFog(clamp(c, vec3(0.0), vec3(1.2)), vW), 1.0);
      }`})}Et();function Ef(i,e,t){let n=new ka(1,0),s=new ni;s.attributes.position=n.attributes.position,s.attributes.normal=n.attributes.normal;let r=[],o=[],a=77,l=()=>(a=a*16807%2147483647)/2147483647;for(let[u,h,d,p,g]of i){let x=Math.max(g,.6)*1.05,m=Math.round(e*Math.min(1.6,p*x/9));for(let f=0;f<m;f++){let _=Math.pow(l(),.85),w=(_<.22?Math.sqrt(_/.22):Math.pow((1-_)/.78,.85))*x;_<.04&&(w*=.5);let v=l()*Math.PI*2,C=w*(.55+.45*Math.sqrt(l())),R=.16+l()*.2;r.push(u+Math.cos(v)*C,h+.25+_*p,d+Math.sin(v)*C,R*(.7+.6*(1-_))),o.push(u,h,d,p)}}s.setAttribute("aC",new Xt(new Float32Array(r),4)),s.setAttribute("aT",new Xt(new Float32Array(o),4)),s.instanceCount=r.length/4;let c=new Me(s,new Se({uniforms:t,vertexShader:`
      uniform float uTime; attribute vec4 aC, aT; varying vec3 vW, vN, vR; varying float vRel, vVar;
      float h1(float n){ return fract(sin(n) * 43758.5453); }
      void main(){
        vec3 c = aC.xyz; float rel = clamp((c.y - aT.y) / aT.w, 0.0, 1.0); vRel = rel;
        float ph = aT.x * 0.37 + aT.z * 0.11;
        vec2 sway = vec2(0.8, -0.6) * (sin(uTime * 0.9 + ph) * 0.5 + 0.35) * 0.22 * rel * rel;
        c.xz += sway * aT.w * 0.12;
        vec3 p = c + position * aC.w * vec3(1.0, 1.35, 1.0);
        vR = normalize(vec3(c.x - aT.x, 0.25, c.z - aT.z));
        vN = normalize(normal); vVar = h1(aC.x * 12.9 + aC.z * 7.1);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      ${Yn}
      varying vec3 vW, vN, vR; varying float vRel, vVar;
      void main(){
        vec3 n = mix(vN, vR, 0.6); n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 1.0, 0.0);
        vec3 alb = mix(vec3(0.022, 0.045, 0.016), vec3(0.06, 0.09, 0.03), vVar);
        float nd = max(dot(n, uSun), 0.0);
        float facing = smoothstep(-0.2, 0.6, dot(vR, uSun));            // the sun side of the crown
        vec3 sun = vec3(1.0, 0.72, 0.48) * 6.0 / 3.14159 * nd * mix(0.25, 1.0, facing);
        vec3 amb = vec3(0.16, 0.2, 0.27) * (0.55 + 0.45 * clamp(vRel, 0.0, 1.0)) * (0.6 + 0.4 * dot(vN, vR));
        vec3 c = alb * (sun + amb);
        c += alb * vec3(0.6, 0.8, 0.2) * pow(max(dot(normalize(vW - cameraPosition), uSun), 0.0), 4.0) * 0.8;   // light through the edge when backlit
        gl_FragColor = vec4(applyFog(clamp(c, vec3(0.0), vec3(1.0)), vW), 1.0);
      }`}));return c.frustumCulled=!1,c}Et();var Uo={y:9,z:150},Pi=7.3,il=8.1,sl=5.5+2.9,Sf=[{pos:[0,9.4,Uo.z+26],tgt:[0,5.2,Uo.z],w:1.5},{pos:[-12,7.6,Uo.z-4],tgt:[0,10,60],w:1.4},{pos:[0,7.5,128],tgt:[0,10,20],w:1.4},{pos:[0,1.75,82],tgt:[0,6.5,26],w:1.4},{pos:[-4.3,1.9,48],tgt:[0,7.5,24],w:1},{pos:[2,3.4,18],tgt:[0,14,-30],w:1.2},{pos:[0,5.8,2],tgt:[0,20,-16],w:1.2},{pos:[0,6.8,-9],tgt:[0,9,-40],w:1},{pos:[0,Pi,-20],tgt:[0,8.6,-50],w:1},{pos:[0,Pi,-27.5],tgt:[0,8.6,-60],w:1.1},{pos:[.6,Pi,-31.4],tgt:[-il,sl,-32],w:1.5},{pos:[0,Pi,-34.6],tgt:[0,8.5,-70],w:.9},{pos:[-.6,Pi,-35.8],tgt:[il,sl,-36.4],w:1.5},{pos:[0,Pi,-39],tgt:[0,8.5,-70],w:.9},{pos:[.6,Pi,-40.2],tgt:[-il,sl,-40.8],w:1.5},{pos:[0,Pi,-43.4],tgt:[0,8.4,-70],w:.9},{pos:[-.6,Pi,-44.6],tgt:[il,sl,-45.2],w:1.5},{pos:[0,Pi,-49],tgt:[0,8,-80],w:1},{pos:[0,7.4,-53],tgt:[0,7.6,-90],w:0}],ms=[0];Sf.slice(0,-1).forEach(i=>ms.push(ms[ms.length-1]+i.w));var Xu=ms[ms.length-1],ps=i=>ms[i]/Xu,gs=ms[2]/Xu,rl=i=>(ms[2]+i*12.2)/Xu,Gs=1,ol={pos:[0,9.1,-53.35],size:[4.5,7.2]};var v1=new E(0,Uo.y,Uo.z),Tf=[{at:[0,gs*.55],kick:"Welcome to Nomadiic Horse Designs",line:"Turn our horse, then scroll to step inside."},{at:[gs*.55,rl(.2)],kick:"We are Nomadiic Horse Designs",line:"A very detailed design team from Bangalore, India."},{at:[rl(.2),rl(.36)],kick:"Our philosophy",line:"We build brands the way the Greeks built palaces: with proportion, patience and a little audacity."},{at:[rl(.36),ps(9)],kick:"What we make",line:"Branding and websites for founders who want to be remembered."},{at:[ps(9),ps(11)],kick:"About us",line:"Selected as Top 1% Framer Designers."},{at:[ps(11),ps(13)],kick:"About us",line:"Selected as Framer Experts by Team Framer."},{at:[ps(13),ps(15)],kick:"About us",line:"Selected as a Shopify Partner."},{at:[ps(15),1.01],kick:"About us",line:"20+ clients across India and the US. Step through, and meet a few of them."}];function vs(i=Sf){let e=i.length,t=new Fr(i.map(v=>new E(...v.pos)),!1,"centripetal",.5),n=new Fr(i.map(v=>new E(...v.tgt)),!1,"centripetal"),s=i.slice(0,-1).map(v=>v.w||1),r=[0];s.forEach(v=>r.push(r[r.length-1]+v));let o=r[r.length-1],a=4e3,l=t.getLengths(a),c=i.map((v,C)=>l[Math.round(C/(e-1)*a)]),u=s.map((v,C)=>Math.max(c[C+1]-c[C],.001)),h=s.map((v,C)=>r[C]+v/2),d=s.map((v,C)=>u[C]/v),p=v=>{if(v<=h[0])return d[0];for(let C=0;C<d.length-1;C++)if(v<=h[C+1])return at.lerp(d[C],d[C+1],(v-h[C])/(h[C+1]-h[C]));return d[d.length-1]},g=v=>{let C=0,R=120;for(let A=0;A<R;A++)C+=p(r[v]+(A+.5)/R*s[v]);return C/R*s[v]};for(let v=0;v<60;v++)d=d.map((C,R)=>Math.max(.05,C*Math.pow(u[R]/Math.max(g(R),1e-6),.7)));let x=6e3,m=new Float32Array(x+1);for(let v=1;v<=x;v++){let C=(v-1)/x*o,R=v/x*o;m[v]=m[v-1]+p((C+R)/2)*(R-C)}let f=l[a]/m[x],_=v=>{let C=0,R=a;for(;C<R;){let y=C+R>>1;l[y]<v?C=y+1:R=y}let A=Math.max(1,C),T=l[A-1],M=l[A];return(A-1+(M>T?(v-T)/(M-T):0))/a},w=v=>{let C=at.clamp(v,0,1)*x,R=Math.floor(C),A=C-R;return _((R>=x?m[x]:m[R]+(m[R+1]-m[R])*A)*f)};return{sample(v,C,R){let A=w(v);return t.getPoint(A,C),n.getPoint(A,R),A*(e-1)}}}var qu=[{lines:["Selected as","Top 1% Framer Designers"],x:-7.66,z:-32},{lines:["Selected as","Framer Experts by Team Framer"],x:7.66,z:-36.4},{lines:["Selected as","Shopify Partner"],x:-7.66,z:-40.8},{lines:["20+ clients","India \xB7 USA"],x:7.66,z:-45.2}];Et();function Af(){let i=null,e=null,t=null,n=null,s=null,r=!1,o=null,a=null,l=2.5,c=0,u=-99,h=0,d=[.5,.7],p=[],g={flash:0,flashPos:d,rain:1,started:!1,start(x){if(g.started=!0,!!x)try{i=new(window.AudioContext||window.webkitAudioContext),e=i.createGain(),e.gain.value=0,e.connect(i.destination),e.gain.linearRampToValueAtTime(.9,i.currentTime+2.5);let m=i.sampleRate,f=m*4;o=i.createBuffer(1,f,m);let _=o.getChannelData(0);for(let S=0;S<f;S++)_[S]=Math.random()*2-1;a=i.createBuffer(1,f,m);let w=a.getChannelData(0),v=0;for(let S=0;S<f;S++)v=(v+.02*(Math.random()*2-1))/1.02,w[S]=v*3.5;let C=S=>{let N=i.createBufferSource();return N.buffer=S,N.loop=!0,N.start(i.currentTime+Math.random()),N};t=i.createGain(),t.gain.value=.11,t.connect(e);for(let[S,N,D]of[[700,5200,1],[2600,9e3,.45]]){let F=C(o),B=i.createBiquadFilter(),U=i.createBiquadFilter(),H=i.createGain();B.type="highpass",B.frequency.value=S,U.type="lowpass",U.frequency.value=N,H.gain.value=D,F.connect(B),B.connect(U),U.connect(H),H.connect(t)}n=i.createGain(),n.gain.value=.22,n.connect(e);let R=C(a),A=i.createBiquadFilter();A.type="lowpass",A.frequency.value=380,A.Q.value=.7;let T=i.createOscillator(),M=i.createGain();T.frequency.value=.06,M.gain.value=240,T.connect(M),M.connect(A.frequency),T.start(),R.connect(A),A.connect(n),s=i.createGain(),s.gain.value=0,s.connect(e),s.gain.linearRampToValueAtTime(.05,i.currentTime+6);let y=i.createBiquadFilter();y.type="lowpass",y.frequency.value=260,y.connect(s);for(let[S,N]of[[55,"sine"],[82.6,"triangle"],[110.3,"sine"]]){let D=i.createOscillator();D.type=N,D.frequency.value=S,D.detune.value=(Math.random()-.5)*12;let F=i.createGain();F.gain.value=N==="sine"?.6:.25,D.connect(F),F.connect(y),D.start()}}catch(m){console.warn("[storm] audio",m),i=null}},strike(x=.6+Math.random()*.4,m=null){u=c,h=x,d[0]=m?m[0]:.2+Math.random()*.6,d[1]=m?m[1]:.62+Math.random()*.3,p.push({at:c+.25+(1-x)*2.4,pow:x})},thunder(x){if(!i||r)return;let m=i.currentTime,f=4+x*4,_=i.createGain();if(_.gain.value=0,_.connect(e),x>.75){let T=i.createBufferSource();T.buffer=o;let M=i.createBiquadFilter();M.type="highpass",M.frequency.value=1400;let y=i.createGain();y.gain.setValueAtTime(0,m),y.gain.linearRampToValueAtTime(.5*x,m+.01),y.gain.exponentialRampToValueAtTime(.001,m+.35),T.connect(M),M.connect(y),y.connect(e),T.start(m,Math.random()*3,.5)}let w=i.createBufferSource();w.buffer=a,w.loop=!0;let v=i.createBiquadFilter();v.type="lowpass",v.frequency.value=140+x*220,v.frequency.setValueAtTime(140+x*380,m),v.frequency.exponentialRampToValueAtTime(90,m+f),w.connect(v),v.connect(_),w.start(m,Math.random()*3),w.stop(m+f+.5),_.gain.setValueAtTime(0,m),_.gain.linearRampToValueAtTime(1.3*x,m+.08+(1-x)*.4);let C=m+.4;for(;C<m+f;){let T=(.35+Math.random()*.75)*x*(1-(C-m)/f);_.gain.linearRampToValueAtTime(T*1.2,C),C+=.25+Math.random()*.6}_.gain.linearRampToValueAtTime(1e-4,m+f);let R=i.createOscillator();R.frequency.value=38+Math.random()*8;let A=i.createGain();A.gain.setValueAtTime(0,m),A.gain.linearRampToValueAtTime(.35*x,m+.15),A.gain.exponentialRampToValueAtTime(.001,m+f*.7),R.connect(A),A.connect(e),R.start(m),R.stop(m+f)},setRain(x){g.rain=x,t&&(t.gain.setTargetAtTime(.11*x,i.currentTime,.6),n.gain.setTargetAtTime(.22*(.3+.7*x),i.currentTime,.6))},setMuted(x){r=x,e&&e.gain.setTargetAtTime(x?0:.9,i.currentTime,.25)},get muted(){return r},get hasSound(){return!!i},update(x,m=!0){c+=x,g.started&&m&&c>l&&(g.strike(),l=c+6+Math.random()*9);let f=c-u;g.flash=f<0?0:h*(f<.05?f/.05:Math.exp(-(f-.05)*14)+(f>.16&&f<.5?.75*Math.exp(-(f-.16)*9):0)+(f>.42?.35*Math.exp(-(f-.42)*6):0));for(let _=p.length-1;_>=0;_--)c>=p[_].at&&(g.thunder(p[_].pow),p.splice(_,1));return g.flash},destroy(){try{i&&i.close()}catch{}}};return g}var Vy=`
.nst{position:absolute;inset:0;z-index:30;background:#0c1019;color:#dfe6f2;font-family:Satoshi,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow:hidden;cursor:default;transition:opacity 1.6s ease}
.nst canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.nst .bolt{pointer-events:none}
.nst .mark{position:absolute;left:50%;top:calc(50% + min(100vw,100vh) * 0.245 + 34px);transform:translate(-50%,0);text-align:center;pointer-events:none;transition:opacity 1.2s ease, transform 2.4s cubic-bezier(.6,0,.2,1)}
.nst .mark .wm{font-family:"Nomadiic Line",Satoshi,sans-serif;font-size:13px;letter-spacing:.62em;padding-left:.62em;color:#e8edf6;white-space:nowrap}
.nst .mark .sub{margin-top:9px;font-size:7.5px;letter-spacing:.9em;padding-left:.9em;color:rgba(223,230,242,.55);text-transform:uppercase}
.nst .load{position:absolute;left:50%;bottom:6.5%;transform:translateX(-50%);display:flex;align-items:center;gap:14px;transition:opacity .8s ease}
.nst .load .bar{width:120px;height:1px;background:rgba(223,230,242,.16);position:relative;overflow:hidden}
.nst .load .bar i{position:absolute;inset:0;background:rgba(223,230,242,.75);transform-origin:0 50%;transform:scaleX(0);transition:transform .4s ease}
.nst .load .pc{font-size:9px;letter-spacing:.18em;color:rgba(223,230,242,.55);width:34px;font-variant-numeric:tabular-nums}
.nst .go{position:absolute;left:50%;bottom:6%;transform:translateX(-50%);opacity:0;pointer-events:none;transition:opacity 1.4s ease .2s}
.nst .go.on{opacity:1;pointer-events:auto}
.nst .go button{all:unset;cursor:pointer;font-size:10px;letter-spacing:.42em;padding:15px 26px 15px 30px;border:1px solid rgba(223,230,242,.38);color:#e8edf6;transition:border-color .4s, background .4s, letter-spacing .6s}
.nst .go button:hover{border-color:rgba(223,230,242,.9);background:rgba(223,230,242,.06);letter-spacing:.5em}
.nst .quiet{position:absolute;right:34px;bottom:9%;all:unset;position:absolute;right:34px;bottom:calc(6% + 15px);cursor:pointer;font-size:8px;letter-spacing:.3em;color:rgba(223,230,242,.4);opacity:0;pointer-events:none;transition:opacity 1.4s ease .5s, color .3s}
.nst .quiet.on{opacity:1;pointer-events:auto}.nst .quiet:hover{color:rgba(223,230,242,.85)}
.nst .hint{position:absolute;left:34px;bottom:calc(6% + 15px);font-size:8px;letter-spacing:.3em;color:rgba(223,230,242,.32);opacity:0;transition:opacity 1.4s ease .8s}
.nst .hint.on{opacity:1}
@media (max-width:640px){.nst .quiet{right:auto;left:50%;transform:translateX(-50%);bottom:calc(9% - 34px)}.nst .hint{display:none}}
.nst-head{position:absolute;left:8.5%;top:24%;z-index:12;pointer-events:none;color:#eef2f8;opacity:0;transform:translateY(14px);transition:opacity 2.2s ease, transform 2.6s cubic-bezier(.2,.7,.2,1)}
.nst-head.on{opacity:1;transform:none}
.nst-head .k{font:500 9px/1 Satoshi,system-ui,sans-serif;letter-spacing:.42em;color:rgba(238,242,248,.62);margin-bottom:20px}
.nst-head h1{margin:0;font:400 clamp(34px,4.3vw,62px)/1.02 "Instrument Serif",Georgia,serif;letter-spacing:-.005em;text-shadow:0 2px 30px rgba(5,8,16,.55)}
.nst-head h1 em{font-style:italic;color:#f4d9b0}
@media (max-width:640px){.nst-head{left:24px;right:24px;top:18%}}
.nst-snd{position:absolute;right:164px;top:21px;z-index:40;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.35);display:grid;place-items:center;cursor:pointer;opacity:0;transition:opacity 1.2s ease, border-color .3s;background:none;padding:0}
.nst-snd.on{opacity:1}.nst-snd:hover{border-color:rgba(255,255,255,.85)}
.nst-snd svg{width:14px;height:14px;stroke:#fff;fill:none;stroke-width:1.3}
`,Wy="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Gy=`
precision highp float;
uniform float uTime, uFlash, uDive, uLoad, uReady, uFade; uniform vec2 uRes, uFlashPos; uniform sampler2D tHorse; uniform float uHorseAsp;
varying vec2 vUv;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; mat2 r = mat2(0.8, -0.6, 0.6, 0.8); for (int i = 0; i < 5; i++) { s += a * n2(p); p = r * p * 2.03 + 11.7; a *= 0.5; } return s; }
// one deck of storm cloud, domain-warped so it billows instead of tiling
vec2 deck(vec2 p, float t){ vec2 q = vec2(fbm(p + vec2(0.0, t * 0.04)), fbm(p + vec2(5.2, 1.3) - t * 0.03));
  float d = smoothstep(0.38, 0.86, fbm(p + 2.2 * q + vec2(t * 0.025, 0.0)));
  return vec2(d, clamp(0.5 + (q.y - q.x) * 2.2 + (q.x - 0.5) * 1.2, 0.0, 1.0)); }   // density, and how much it faces the moon
void main(){
  vec2 R = uRes, fc = vUv * R; float m = min(R.x, R.y);
  vec2 p = (fc - 0.5 * R) / m;                             // centred, square units
  float t = uTime;
  // ---- the cloud deck, layer behind layer; diving pushes every layer towards and past you
  vec3 col = mix(vec3(0.035, 0.045, 0.075), vec3(0.05, 0.065, 0.11), vUv.y);
  vec2 fp = (uFlashPos - 0.5) * R / m;
  float dive = uDive * uDive * (3.0 - 2.0 * uDive);
  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    float z = fract(fi / 4.0 + dive * 1.35 + t * 0.004);        // 0 = far, 1 = at the lens
    float sc = mix(3.6, 0.22, pow(z, 1.6));
    vec2 q = p * sc + vec2(fi * 3.7, fi * 1.9) + vec2(t * 0.01 * (1.0 + fi * 0.3), 0.0);
    vec2 dk = deck(q, t + fi * 9.0); float d = dk.x, lit = dk.y;
    float fadeIn = smoothstep(0.0, 0.25, z), fadeOut = 1.0 - smoothstep(0.82, 1.0, z);
    float a = d * fadeIn * fadeOut * 0.7;
    vec3 base = mix(vec3(0.06, 0.08, 0.13), vec3(0.24, 0.31, 0.45), lit) * (0.55 + 0.6 * (1.0 - z));
    // lightning lights the cloud from inside: brightest where it is thick and near the strike
    float near = exp(-length(p - fp) * (2.2 - z));
    base += vec3(0.62, 0.72, 1.0) * uFlash * near * (0.4 + d) * 1.6;
    base += vec3(0.5, 0.6, 0.9) * uFlash * 0.12;
    col = mix(col, base, a);
  }
  // moon glow behind the deck
  col += vec3(0.16, 0.2, 0.3) * exp(-length(p - vec2(-0.55, 0.42)) * 2.4) * 0.5;
  // ---- the mark: two thin rings (the inner one draws itself as the world loads) and our horse inside
  float r = length(p), ang = atan(p.x, p.y);                 // 0 at the top, clockwise
  float zoom = 1.0 + dive * 6.0;
  float rr = r / zoom;
  float R1 = 0.205, R2 = 0.245, px = 1.0 / m / zoom;
  float arc = step(fract((ang / 6.2831853) + 1.0), uLoad);
  float ring1 = (1.0 - smoothstep(0.0, 1.4 * px, abs(rr - R1))) * mix(0.16, 1.0, arc) * mix(0.6, 1.0, uReady);
  float ring2 = (1.0 - smoothstep(0.0, 1.1 * px, abs(rr - R2))) * 0.22 * uReady;
  float ticks = step(0.985, fract(ang / 6.2831853 * 72.0)) * (1.0 - smoothstep(0.0, 6.0 * px, abs(rr - R2 - 0.012))) * 0.25 * uReady;
  vec2 hv = (p / zoom - vec2(0.0, 0.004)) / (R1 * 0.74) * vec2(1.0, 1.0 / uHorseAsp) * 0.5 + 0.5;
  float hz = (hv.x > 0.01 && hv.x < 0.99 && hv.y > 0.01 && hv.y < 0.99) ? texture2D(tHorse, hv).a : 0.0;
  // as you dive the mark dissolves into the cloud, edges first
  float diss = smoothstep(dive * 1.6 - 0.15, dive * 1.6, fbm(p * 7.0 + t * 0.2));
  float markA = (ring1 + ring2 + ticks) * diss + hz * uReady * 0.88 * diss;
  vec3 markC = vec3(0.9, 0.93, 0.98) * (1.0 + uFlash * 0.5);
  col += vec3(0.25, 0.35, 0.55) * exp(-abs(rr - R1) * 60.0) * 0.14 * uReady * diss;   // a faint halo on the ring
  col = mix(col, markC, clamp(markA, 0.0, 1.0));
  // ---- film: vignette and grain
  col *= 1.0 - 0.5 * smoothstep(0.35, 1.15, length((vUv - 0.5) * vec2(R.x / R.y, 1.0)) * 1.25);
  col += (h21(fc + fract(t * 7.13) * 91.7) - 0.5) * 0.035;
  col = mix(col, vec3(0.75, 0.82, 0.95), uFade);
  gl_FragColor = vec4(pow(max(col, 0.0), vec3(0.95)), 1.0);
}`;function Rf(i,e,t,{onEnter:n,onDone:s}={}){if(!document.getElementById("nst-css")){let Q=document.createElement("style");Q.id="nst-css",Q.textContent=Vy,document.head.appendChild(Q)}try{for(let[Q,K]of[["instrument-serif.woff2","normal"],["instrument-serif-italic.woff2","italic"]])new FontFace("Instrument Serif",`url(${t}storm/${Q})`,{style:K}).load().then(ve=>document.fonts.add(ve)).catch(()=>{})}catch{}let r=document.createElement("div");r.className="nst",r.innerHTML=`<canvas></canvas><canvas class="bolt"></canvas>
    <div class="mark"><div class="wm">NOMADIIC HORSE</div><div class="sub">Designs</div></div>
    <div class="load"><div class="bar"><i></i></div><div class="pc">0%</div></div>
    <div class="go"><button type="button">ENTER WITH SOUND</button></div>
    <button class="quiet" type="button">ENTER WITHOUT SOUND</button>
    <div class="hint">HEADPHONES RECOMMENDED</div>`,i.appendChild(r);let[o,a]=r.querySelectorAll("canvas"),l=r.querySelector(".mark"),c=r.querySelector(".bar i"),u=r.querySelector(".pc"),h=r.querySelector(".go"),d=h.querySelector("button"),p=r.querySelector(".quiet"),g=r.querySelector(".hint"),x=r.querySelector(".load"),m=new Lr({canvas:o,antialias:!1,alpha:!1,powerPreference:"high-performance"});m.setPixelRatio(1);let f=new gn;f.colorSpace=Qt;let _={uTime:{value:0},uFlash:{value:0},uDive:{value:0},uLoad:{value:0},uReady:{value:0},uFade:{value:0},uRes:{value:new ie(1,1)},uFlashPos:{value:new ie(.5,.7)},tHorse:{value:f},uHorseAsp:{value:202/175}},w=new Image;w.crossOrigin="anonymous",w.onload=()=>{let Q=document.createElement("canvas");Q.width=700,Q.height=Math.round(700*w.height/w.width),Q.getContext("2d").drawImage(w,0,0,Q.width,Q.height),f.image=Q,f.generateMipmaps=!1,f.minFilter=jn,f.needsUpdate=!0,_.uHorseAsp.value=Q.height/Q.width},w.src=t+"storm/horse.svg";let v=new Me(new bt(2,2),new Se({vertexShader:Wy,fragmentShader:Gy,uniforms:_,depthTest:!1})),C=new Gn;C.add(v);let R=new Rr,A=a.getContext("2d"),T=()=>{let Q=r.clientWidth||innerWidth,K=r.clientHeight||innerHeight;m.setSize(Q,K,!1),_.uRes.value.set(Q*m.getPixelRatio(),K*m.getPixelRatio()),a.width=Q*2,a.height=K*2},M=new ResizeObserver(T);M.observe(r),T();let y=0,S=(Q,K)=>{let Y=a.width,ve=a.height;A.clearRect(0,0,Y,ve);let ce=(Ee,J,re,L,me,ae)=>{let ge=Ee,ue=J,Fe=14+Math.floor(Math.random()*8);for(let xe=1;xe<=Fe;xe++){let I=xe/Fe,b=Ee+(re-Ee)*I+(Math.random()-.5)*Y*.035*(1-I*.5),G=J+(L-J)*I;A.lineWidth=me*(1-I*.6),A.beginPath(),A.moveTo(ge,ue),A.lineTo(b,G),A.stroke(),ae<2&&Math.random()<.16&&ce(b,G,b+(Math.random()-.5)*Y*.25,G+ve*(.08+Math.random()*.2),me*.45,ae+1),ge=b,ue=G}};A.strokeStyle="rgba(225,235,255,0.95)",A.shadowColor="rgba(150,180,255,0.9)",A.shadowBlur=26,A.lineCap="round",ce(Q*Y,-10,Q*Y+(Math.random()-.5)*Y*.2,K*ve,3.2,0),y=1},N=document.createElement("div");N.className="nst-head",N.innerHTML='<div class="k">NOMADIIC HORSE DESIGNS &nbsp;\xB7&nbsp; BANGALORE</div><h1>We build brands<br>the way the Greeks<br><em>built palaces.</em></h1>';let D=document.createElement("button");D.className="nst-snd",D.type="button",D.setAttribute("aria-label","Sound");let F=Q=>Q?'<svg viewBox="0 0 16 16"><path d="M2 8h1.5M5 5v6M8 3v10M11 6v4M14 7.3v1.4"/></svg>':'<svg viewBox="0 0 16 16"><path d="M2 8h12"/></svg>';D.innerHTML=F(!0),D.onclick=()=>{e.setMuted(!e.muted),D.innerHTML=F(!e.muted)};let B="load",U=0,H=0,z=0,O=-1,X=!0,ee=0,pe=performance.now(),be=!1,q=Q=>{B==="ready"&&(B="dive",O=0,e.start(Q),n&&n(),h.classList.remove("on"),p.classList.remove("on"),g.classList.remove("on"),l.style.opacity="0",l.style.transform="translate(-50%,40px)")};d.onclick=()=>q(!0),p.onclick=()=>q(!1);function te(Q){if(!X)return;ee=requestAnimationFrame(te);let K=Math.min((Q-pe)/1e3,.05);if(pe=Q,_.uTime.value+=K,H+=(U-H)*(1-Math.exp(-K*4)),_.uLoad.value=H,c.style.transform=`scaleX(${H})`,u.textContent=Math.round(H*100)+"%",B==="load"&&U>=1&&H>.995&&(B="ready",x.style.opacity="0",h.classList.add("on"),p.classList.add("on"),g.classList.add("on")),B!=="load"&&(z=Math.min(1,z+K*.7)),_.uReady.value=z,B==="ready"&&Math.random()<K*.12&&e.strike(.3+Math.random()*.25),B==="dive"&&(O+=K,!be&&O>.55&&(be=!0,e.strike(1,[.56,.72]),S(.56,.72)),_.uDive.value=Math.min(1,O/3.6),_.uFade.value=O>3?Math.min(1,(O-3)/.5)*0:0,O>3.1&&r.style.opacity!=="0"&&(r.style.opacity="0",r.style.pointerEvents="none",s&&s(),i.appendChild(D),requestAnimationFrame(()=>{e.hasSound&&D.classList.add("on")})),O>4.8)){X=!1,cancelAnimationFrame(ee),M.disconnect(),m.dispose(),r.remove();return}let Y=e.update(K,B!=="load");_.uFlash.value=Y,_.uFlashPos.value.set(e.flashPos[0],e.flashPos[1]),y>0&&(y=Math.max(0,y-K*3.2),a.style.opacity=String(Math.min(1,Y*1.4)*y)),m.render(C,R)}return ee=requestAnimationFrame(te),{get diving(){return B==="dive"},setProgress(Q){U=Math.max(U,Math.min(1,Q))},ready(){U=1},hideHead(){N.classList.remove("on")},destroy(){X=!1,cancelAnimationFrame(ee),M.disconnect(),m.dispose(),r.remove(),N.remove(),D.remove()}}}Et();var Xy=`
  uniform float uTime, uSway, uH, uFar, uFade; uniform vec4 uRect; uniform sampler2D tLm; uniform float uK;
  attribute float ao;
  varying vec2 vUv; varying vec3 vW, vN; varying float vAo, vLit, vY, vKeep; varying vec3 vL;
  vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
  float h11(float n){ return fract(sin(n) * 43758.5453); }
  void main(){
    vUv = uv; vAo = ao / 255.0;
    vec3 n = normal / 127.5 - 1.0;
    vec3 root = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    float y = clamp(position.y / max(uH, 0.01), 0.0, 1.5); vY = y;
    vec3 p = position;
    // sway: the whole plant leans with the gust, tips flutter
    vec2 wdir = normalize(vec2(0.8, -0.6));
    float ph = h11(root.x * 1.7 + root.z * 3.1) * 6.28;
    float gust = sin(uTime * 0.9 - dot(root.xz, wdir) * 0.05 + ph * 0.2) * 0.5 + 0.5;
    float sway = (gust * 0.8 + sin(uTime * 2.3 + ph) * 0.25) * uSway * y * y;
    vec4 w = instanceMatrix * vec4(p, 1.0);
    w.xz += wdir * sway + vec2(sin(uTime * 3.7 + ph + position.x * 4.0), cos(uTime * 3.1 + ph + position.z * 4.0)) * 0.02 * uSway * y;
    vW = w.xyz;
    vN = normalize(mat3(instanceMatrix) * n);
    // sun or shade at the plant's foot (baked in Blender, includes the colonnades' shadows)
    vec2 lu = vec2((root.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - root.z) / (uRect.w - uRect.z));
    float inside = step(0.0, lu.x) * step(lu.x, 1.0) * step(0.0, lu.y) * step(lu.y, 1.0);
    vec3 open = lmDecode(vec3(0.83), uK);
    vL = mix(open, lmDecode(texture2D(tLm, clamp(lu, 0.002, 0.998)).rgb, uK), inside);
    vLit = clamp(dot(vL, vec3(0.333)) / max(dot(open, vec3(0.333)), 1e-3), 0.12, 1.1);
    // far small things fade out (flowers beyond ~140 m cost triangles and add nothing)
    float d = length(root - cameraPosition);
    vKeep = (1.0 - smoothstep(uFar * 0.8, uFar, d)) * uFade;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,qy=`
  ${Yn}
  uniform sampler2D tAlb; uniform float uLeaf, uHasTex; uniform vec3 uTint;
  varying vec2 vUv; varying vec3 vW, vN; varying float vAo, vLit, vY, vKeep; varying vec3 vL;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main(){
    if (hash(gl_FragCoord.xy) > vKeep) discard;                       // dissolve in / fade out, no alpha sorting
    vec3 alb = uHasTex > 0.5 ? texture2D(tAlb, vUv).rgb : uTint;
    // Poly Haven foliage atlases sit on black: slimmed cards would show it, so cut it away like an alpha mask
    if (uLeaf > 0.5 && uHasTex > 0.5 && max(alb.r, max(alb.g, alb.b)) < 0.055) discard;
    vec3 n = vN; n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 1.0, 0.0);
    if (!gl_FrontFacing) n = -n;
    float ao = clamp(vAo, 0.0, 1.0);
    vec3 V = normalize(cameraPosition - vW);
    float nl = dot(n, uSun);
    float diff = uLeaf > 0.5 ? pow(clamp(nl * 0.5 + 0.5, 0.0, 1.0), 1.6) : max(nl, 0.0);
    vec3 sun = vec3(1.0, 0.72, 0.48) * (6.0 / 3.14159) * diff * vLit * mix(0.55, 1.0, ao) * (uLeaf > 0.5 ? 1.25 : 1.0);
    vec3 sky = vec3(0.17, 0.21, 0.28) * (0.5 + 0.5 * ao) * (0.75 + 0.25 * n.y) * (uLeaf > 0.5 ? 1.35 : 1.0);
    vec3 c = alb * (sun + sky);
    if (uLeaf > 0.5) c += alb * vec3(0.55, 0.7, 0.25) * pow(max(dot(-V, uSun), 0.0), 4.0) * vLit * 0.9 * ao;   // light through the leaves
    else c += vec3(0.04) * pow(clamp(1.0 - max(dot(n, V), 0.0), 0.0, 1.0), 5.0) * vLit;                     // a little sheen on glaze and stone
    gl_FragColor = vec4(applyFog(clamp(c, vec3(0.0), vec3(1.4)), vW), 1.0);
  }`,Cf=async i=>{for(let e=0;;e++)try{let t=await fetch(i);if(t.ok)return t.json();throw 0}catch(t){if(e>2)throw t;await new Promise(n=>setTimeout(n,500))}};async function Ii({base:i,unpack:e,loader:t,U:n,groundLm:s,groundK:r,rect:o,tier:a,onPart:l,layout:c=null}){let[u,h]=await Promise.all([Cf(i+"plants/protos.json"),c?Promise.resolve(c):Cf(i+"garden.json")]),d=new wi;d.name="garden";let p={};h.items.forEach((A,T)=>{a!=="high"&&A[0].startsWith("flower")&&T%2||(p[A[0]]=p[A[0]]||[]).push(A)});let g={},x=A=>g[A]||(g[A]=new Promise(T=>t.load(i+"plants/"+A,M=>{M.colorSpace=Nt,M.flipY=!0,M.anisotropy=4,T(M)},void 0,()=>T(null)))),m={value:0},f=new Ke,_=new At,w=new E,v=new E,C=new E(0,1,0),R=[];for(let[A,T]of Object.entries(p)){let M=u[A];if(!M)continue;let y=M.size[1],S=A.startsWith("flower")||A.startsWith("periwinkle")||A.startsWith("fern");for(let N of M.parts)R.push((async()=>{let D,F;try{[D,F]=await Promise.all([e(i+"plants/"+N.pack),N.tex?x(N.tex):null])}catch(H){console.warn("[garden] skipped",N.pack,H);return}let B=new Se({side:pt,uniforms:{...n,tAlb:{value:F},uHasTex:{value:F?1:0},uTint:{value:new ye(.5,.45,.4)},uLeaf:{value:N.leaf?1:0},uSway:{value:N.leaf?y>2?.35:.12:0},uH:{value:Math.max(y,.2)},uFar:{value:S?a==="high"?150:90:2e3},uFade:m,tLm:{value:s},uK:{value:r},uRect:{value:o}},vertexShader:Xy,fragmentShader:qy});if(M.kind==="solid"&&M.parts.length===1){D.computeBoundingBox();let H=D.boundingBox;H.min.y>.01&&D.translate(0,-H.min.y-(H.max.y-H.min.y)*.06,0)}let U=new Xn(D,B,T.length);T.forEach((H,z)=>{let[,O,X,ee,pe,be]=H;f.compose(v.set(O,X,ee),_.setFromAxisAngle(C,pe),w.set(be,be,be)),U.setMatrixAt(z,f)}),U.instanceMatrix.needsUpdate=!0,U.frustumCulled=!1,U.layers.set(1),d.add(U),l&&l()})())}return await Promise.all(R),{group:d,fade:m,layout:h}}Et();function Pf(i,e,t,n){let s=new $e,r=new Float32Array(t*4);for(let l=0;l<t;l++){let c=Math.random();r[l*4]=c<.45?0:c<.9?1:2,r[l*4+1]=Math.random()*Math.PI*2,r[l*4+2]=Math.random(),r[l*4+3]=Math.random()}s.setAttribute("position",new Xe(new Float32Array(t*3),3)),s.setAttribute("aD",new Xe(r,4)),s.boundingSphere=new Cn(new E(i,1.5,e),6);let o=new Se({transparent:!0,depthWrite:!1,blending:wt,uniforms:{...n,uC:{value:new E(i,0,e)},uPx:{value:1}},vertexShader:`
      uniform float uTime, uPx; uniform vec3 uC; attribute vec4 aD; varying float vA; varying vec3 vW;
      void main(){
        float kind = aD.x, ang = aD.y, ph = aD.z, sj = aD.w;
        vec3 p; float life; float g = 9.8;
        if (kind < 0.5) {                       // crown jets: up and out from the finial, landing in the lower bowl
          float T = 0.95; life = fract(uTime / T + ph); float t = life * T;
          float vh = 1.15 + sj * 0.25, vy = 2.1 + sj * 0.3;
          p = uC + vec3(cos(ang) * vh * t, 2.5 + vy * t - 0.5 * g * t * t, sin(ang) * vh * t);
          vA = smoothstep(0.0, 0.08, life) * (1.0 - smoothstep(0.85, 1.0, life));
        } else if (kind < 1.5) {                // curtain: spills over the lower bowl's lip and drops into the pool
          float T = 0.55; life = fract(uTime / T + ph); float t = life * T;
          float r = 1.3 + 0.35 * t;
          p = uC + vec3(cos(ang) * r, 1.58 - 0.5 * g * t * t * (0.9 + sj * 0.2), sin(ang) * r);
          p.y = max(p.y, 0.34);
          vA = 0.55 * smoothstep(0.0, 0.1, life) * (1.0 - smoothstep(0.8, 1.0, life));
        } else {                                // mist where the curtain lands
          float T = 2.4; life = fract(uTime / T + ph);
          float r = 1.5 + sj * 0.9;
          p = uC + vec3(cos(ang + life) * r, 0.4 + life * 0.6, sin(ang + life) * r);
          vA = 0.18 * sin(life * 3.14159);
        }
        vW = p;
        vec4 mv = viewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float size = kind > 1.5 ? 0.22 : kind > 0.5 ? 0.045 : 0.06;
        gl_PointSize = clamp(size * uPx / max(-mv.z, 0.5), 1.0, 48.0);
      }`,fragmentShader:`
      ${Yn}
      varying float vA; varying vec3 vW;
      void main(){
        vec2 d = gl_PointCoord - 0.5; float r = dot(d, d);
        float a = (1.0 - smoothstep(0.0, 0.25, r)) * clamp(vA, 0.0, 1.0);
        vec3 c = vec3(0.85, 0.9, 0.95) * a * 0.9;
        gl_FragColor = vec4(c, a);
      }`}),a=new qt(s,o);return a.frustumCulled=!1,a}var If="data:font/woff2;base64,d09GMk9UVE8AAAqkAAkAAAAAF7QAAApcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAADag8BmAAgSgBNgIkAzYEBgWCGAcgGxEXUVSSLgjwxWEMxtLDLs7eeWszuaNSaSydCcIXN/5QhCLcaD67t8GHMDE2pCq7iyu4T1HGr4fO3uoaACTG7v/RZsVIvf1r7FmfmY+Ik4koogkEGutGuoDQiAUiDsSEmI14dk7UC65GeMi/vft9xCCxFNvyIE4wDALJW1GQR+2qoMLvf+3V3t0NvPBbN4kCdhESUKjIqMT9+M0EiB2Ri3sBLm8rqwBVzxemDlkDKcEjo3S9BmHqr9E+3/Lz0olCQNfLJRCjAOitVRxWyssqamvLf12o9h8Ycd4XI0U7yb/3by867ChqdmLKK337/wcQyXgJv/k1QbK/+a+UiAOy+BJGZ7Z2cPXyC467VKf/+Me9owN2jB1le9jetr/lZVOR3pTta/n1Up7bo7GPu3owxX+/XHs3M4YkAPp/3OF5iagAiIGt13Potr97e3z7T3Yc3ME/84Xn/yd4+dVnyA8pOZWW6khUSc78VbYW3rX8USCIFqP2ys6rXdXQ2pg2tpkhyY6YwiZIKJu0DTFQRY0xfQbOFOQ36zah5mb9reqboFrULVQVQLZBX2WzfRm4C4Hd+Bxg+g4dxEggLxGe9Be8k+D+58m1f6VBSi+Tz6XDDMntJNHU3Elz4Z49jxIaRXP1cFsdjSJET3JAR3KImUTdn6ALyBP9PcMRihqJhFJOQAeVJGQPUW+IUIoYXptQISDeYSIlRiehQEq/JPJSMvObyH3NwlchHHt782gUCJuwSO3lPA2AxLdcX8TfBIFeooMC8hKWSOivxISJ64mfGTZBRviUBL7+OWANzmZOCfa6TspXNcFJlf8HLf2Q+Ec9EVCBG2gaN0BjfVQKmN6gIxhh8oCEGS+B4iS09Mf6W7theHWl+2YCpPRSUVQKZRZ8QdwiwK+5uyeyX4L8Z3s/1v9pmKfuKKSJaEUN+Jx+p+AEgfNyvBtc7vun9YHNbwvxUTD3OmccOVD//DPkrGIR1EM1bbIgcNghcALUuOqb9Aqwmh0mzgiG8+wZ8zlQf/H47NovgqPBea5JC7zTydsF4Lycnw8C3+IRhRB4Ooi+GNy2CNHeeD7dAVPL8313QyClC0dKyUwSp9y/HYgfRkSL/zf+1/cDiaXxX6PXlP8y7NYf8+/CQL0xMmKjz4jBs+BJrXogKWRwEsO0MIWnMPwW3xN+tAK3pwp3U9+D5Fbzz8s3gXJIGO05RqPioAiEJoJtIP0rnS+lMK241+/Xg18tqLEaMHVEmFpiauWnVoCNXnezADKMPIt4xbcEARLGk/AWEg44Gg6LIkhp36KylMxcDxK956YXMO/+M8HX7FfrvECdORo5THlUCIQinkYQTBF8+hCBYSL1QTf+ldjBQpj3VGMryIV63CAANXkpcVDmH4A6EKGRNBIBsYeHv/l9nuA4SOmekrKUztwOIP9e9MjWSjIfbT0yfIpT67Fzmh7g27BTbIfe7lZbLgLk+i/0fcWCInoIUtqlBEpHGbqIEd6FyCJGdGCRrWdcxF1WggzZfAdjgh4zsTiDUKM0qxPLJFSuPmvRtsdSiqYt18EYZ8CMVryBaJCx6sAycVeWX9TJHjTfTRnOtTO1i0YYbOvd03HnF8oaTB03nadwuwNNHCAt+PTMqkqL542OU5lL/8LjE+WXbVbIFmg1qMNdjgzXn3NboXNRU42DkUcF1ml0WA+CDw20nHbfJLmCvdKu0IPd3Sc94AXXuM9Iyjt0ZgttiVy+g8dGdY9D8cnT7qdZVqQOkZNwWDQ6bBVccaceoPfXc4BXlpTrm9Xj5IccKc3Sd91H9bwq33MHcY/zztMNptbJ8jaOjMqJ52kVLLOd08nddKHb/ZOSum0le8mi7Z6zKd+/kEe+RmR+H6m3XHYJbTkdtPD1RMTwFipiZLL4e8adYo+zhJgxC8du5TELmEWtkpwUlgyJxrU8osVXP8qTeaYo6Uo9kpyT4ZpbqRR3pq4jLZ0pSeetcwpr0NVaj2kTtWioIpxGZnElSdWuFRMMxAdXnkOgD1jsIo/gAi5jovyFHLknobCiAuNQbHJ98aAn19PGVfk4jdacjfXIrDvvllwXGnPyDANutjnEuGnrOREHsOlRTRyMTSHmXiYnz6UNDAZ3kQfo0Lep8TM0nqeNSfW+x/ZTwymo8Qq9oKLgC7iAQmVMbLicc11bL2bO3nauy9Zm7amhCljJnLnvdNKPNksNDXBWcdJaCnmH9Y6f9K5dzICfe4vc614dc6ZR/sJGdo/IfJ+a90C5lNepULDFtjNKcZve7mW9EAVz3HRS2RqjxXdZJxgLExknp1mMfuCekIJbxJEOBwfYDX4Q4lWwmCj22p3i0vheetF/HTHTn7W7hVfhYV9M3oB2YZi+AW1FN23Nc8r19OyygrPnpaP4wUXpEtHdtLiATX3kn5jBoWrG1OOPeNFtqX/Ji4OP33rhxVlfp78OGSi6AQxu4/iiiir1SOVFtwWCA4mBGbuDPJc9nFogBIvx4XF7Wjkq/DBntUID4tSgAwPMdX6amcyMyPbeGzWo/Tw4RXkmUF8H2Y2qDH7G8cqzKzKfvFa92U9NC4RJSxstxyKaMVvp8BNNuxvNbaYGNdFMgCvxisfc3pCd1k5I4nMe4gUH3Kw8DwmuYg84Ze5RhK2VDQOyhr44ZW9Rns38lXVT9RiDvUmTNnFpeRJ62r3TYGGBoVP+4mTm9Z3SGps3buzRfXnnSuKEMrhZbJ/WsrM17x1VWB68DGdWpAJMlB6QB17kzQrUUXePPLg8f5ZXdfA5ONIpv9FwFmcwSo9oOKsMrEKij93Ke4VIk+ZGMz1s7l077z+U3nCz53R0sgU4MPc0CYs1xnL3pNljE7LlqjgNHNTv29lGgitXK5wyew2EeXpHdf+G9Q0eoV2yAXX3wqdkXQa5JHST5F3LhPhT20+SszKjcjSziiqziPs8cyxHs8uoNofYLzCHDWh+CdVnkenLzF4DWppH8hzSf4XZKUcrBaQi1deZ7om1aaSNU923mE7aHEd6qtrNZOjGCGq6e9k+JsSiG0OIS6CzZ5mwbddSEUccpeq7Io5er+uIokytfOusUPA5jok60fQ6sodQd429Cr5kZ2I8Gr6BbCHUX9Wu4KtWJu5G3XeQLYiGqngVXG1hEl6UvI/YAJqsmoGN8tJfHQEFt5DFh+gK2dBnqVzS8eeRAlyk2/4DEIDG7fMSYDacCZ6SxXbTKwlZeQ+VhCE6m4tPOwC9kpfrQOurklRb08Xg2xNgWAdoSGAcRLho8VJlKletXqvOTHKzRoqVLCNzpVrNOubzyg3e6f73cDaroGHoNSthzZ7z0cLBwsMnwMaAYELcnBbY2ktlfUb5lZe+/F/ODvxOAoA3z3/D4Vs8JSns0G//iwTaUP81EjgTnuTEGBRGSQZahQ6Fayfu4/gV2jXoYy24NZol2DjM3mQaIMIQW4EMBysXZENNPA3SQWmIiCENc+WYxuAoL41JZfhNWGwtS4pWzcpVqVevEpFER2uLahmq1erWpFwHIqD8PuS+XW+DOarfGzvf3FYt13TnyqONzfDlH/MAAAAA";var Yy=`
.nrt-ui{position:absolute;inset:0;pointer-events:none;font-family:Satoshi,system-ui,sans-serif;color:#fff;-webkit-font-smoothing:antialiased}
.nrt-ui .brand{position:absolute;left:28px;top:24px;font-family:"Nomadiic Line",Satoshi,sans-serif;font-size:15px;letter-spacing:.14em;color:#fff;
  text-shadow:0 1px 12px rgba(20,24,30,.35);opacity:0;transition:opacity 1.4s}
.nrt-ui .cta{position:absolute;right:24px;top:18px;pointer-events:auto;text-decoration:none;color:#fff;font-weight:600;font-size:13px;letter-spacing:.06em;
  padding:11px 20px;border-radius:999px;background:linear-gradient(110deg,#f2822f,#ffb067,#f2822f);background-size:220% 100%;animation:nrtGrad 6s ease-in-out infinite;
  box-shadow:0 6px 22px rgba(242,130,47,.35);opacity:0;transition:opacity 1.4s,transform .25s}
.nrt-ui .cta:hover{transform:translateY(-1px)}
@keyframes nrtGrad{0%,100%{background-position:0% 0}50%{background-position:100% 0}}
.nrt-ui .scrim{position:absolute;left:0;right:0;bottom:0;height:42%;background:linear-gradient(to top,rgba(14,18,24,.55),rgba(14,18,24,0));opacity:0;transition:opacity 1.2s}
.nrt-ui .story{position:absolute;left:50%;bottom:104px;transform:translateX(-50%);width:min(760px,86%);text-align:center}
.nrt-ui .kick{font-size:12px;font-weight:600;letter-spacing:.32em;text-transform:uppercase;color:#ffc48f;margin-bottom:12px}
.nrt-ui .line{font-size:28px;line-height:1.35;font-weight:500;letter-spacing:-.005em;text-shadow:0 2px 18px rgba(10,14,20,.45);text-wrap:balance}
.nrt-ui .ch{position:absolute;left:0;right:0;bottom:0;opacity:0;transform:translateY(-6px);transition:opacity .35s ease,transform .35s ease}
.nrt-ui .ch.on{opacity:1;transform:none;transition:opacity .9s ease .4s,transform .9s ease .4s}   /* the old line leaves before the new one arrives */
.nrt-ui .book{display:inline-block;margin-top:18px;pointer-events:auto;cursor:pointer;font:600 12px/1 Satoshi,system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#fff;background:rgba(28,18,16,.62);border:1px solid rgba(255,255,255,.5);padding:12px 20px;border-radius:999px;transition:background .25s;transform:translateZ(0)}   /* no backdrop blur: over a live canvas it flickers */
.nrt-ui .book:hover{background:rgba(163,23,42,.75)}
.nrt-ui .ch:not(.on) .book{pointer-events:none}
.nrt-ui .hint{position:absolute;left:50%;bottom:26px;transform:translateX(-50%);font-size:11px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:rgba(255,255,255,.85);opacity:0;transition:opacity 1s}
.nrt-ui .hint:after{content:"";display:block;width:1px;height:18px;margin:10px auto 0;background:rgba(255,255,255,.8);animation:nrtDrop 1.8s ease-in-out infinite}
@keyframes nrtDrop{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
@media (max-width:640px){.nrt-ui .brand{left:20px;top:20px;font-size:12.5px}.nrt-ui .cta{right:16px;top:14px;padding:9px 15px;font-size:12px}
  .nrt-ui .line{font-size:19px;line-height:1.42}.nrt-ui .story{bottom:92px}.nrt-ui .kick{font-size:10.5px;letter-spacing:.26em}}
`;function Lf(i,e,{contactUrl:t="https://nomadiichorse.com/contact-us",onBook:n=null}={}){if(!document.getElementById("nrt-css")){let l=document.createElement("style");l.id="nrt-css",l.textContent=`@font-face{font-family:"Nomadiic Line";src:url(${If}) format("woff2");font-display:block}`+Yy,document.head.appendChild(l);let c=document.createElement("link");c.rel="stylesheet",c.href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap",document.head.appendChild(c)}let s=document.createElement("div");s.className="nrt-ui",s.innerHTML=`<div class="scrim"></div><div class="brand">NOMADIIC HORSE DESIGNS</div><a class="cta" href="${t}">Contact us</a>
    <div class="story">${e.map((l,c)=>`<div class="ch" data-i="${c}"><div class="kick">${l.kick}</div><div class="line">${l.line}</div>${l.book?`<button class="book" data-book="${l.book}">Explore the book</button>`:""}</div>`).join("")}</div>
    <div class="hint">Scroll to enter</div>`,i.appendChild(s);let r=[...s.querySelectorAll(".ch")],o=l=>s.querySelector(l);s.querySelectorAll(".book").forEach(l=>l.addEventListener("click",c=>{c.stopPropagation(),n&&n(l.dataset.book)}));let a=-2;return{el:s,update(l,c){let u=window.visualViewport?window.visualViewport.height:innerHeight,h=Math.max(0,Math.round(i.getBoundingClientRect().bottom-u));h!==this._extra&&(this._extra=h,o(".story").style.transform=`translate(-50%, ${-h}px)`,o(".hint").style.transform=`translate(-50%, ${-h}px)`);let d=c>1.2;o(".brand").style.opacity=d?1:0,o(".cta").style.opacity=d?1:0,o(".scrim").style.opacity=d?1:0,o(".hint").style.opacity=d&&l<.004&&c>3?1:0;let p=d?e.findIndex(g=>l>=g.at[0]&&l<g.at[1]):-1;p!==a&&(a=p,r.forEach((g,x)=>g.classList.toggle("on",x===p)))},destroy(){s.remove()}}}function Df(i){let e=document.createElement("canvas");e.width=4096,e.height=160;let t=e.getContext("2d");return t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.font='120px "Nomadiic Line", Satoshi, serif',"letterSpacing"in t&&(t.letterSpacing="38px"),t.fillText(i,e.width/2,e.height/2+6),e}function Uf(i){let n=document.createElement("canvas");n.width=1024,n.height=372;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,372);r.addColorStop(0,"#6b4a2b"),r.addColorStop(.5,"#4f341d"),r.addColorStop(1,"#3a2614"),s.fillStyle=r,s.fillRect(0,0,1024,372);for(let c=0;c<90;c++){let u=Math.random()*1024,h=Math.random()*372,d=20+Math.random()*90,p=s.createRadialGradient(u,h,0,u,h,d);p.addColorStop(0,Math.random()<.5?"rgba(70,90,60,0.10)":"rgba(30,18,8,0.14)"),p.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=p,s.fillRect(u-d,h-d,d*2,d*2)}let o=s.getImageData(0,0,1024,372);for(let c=0;c<o.data.length;c+=4){let u=(Math.random()-.5)*14;o.data[c]+=u,o.data[c+1]+=u,o.data[c+2]+=u}s.putImageData(o,0,0);let a=(c,u="#f6d58e",h="rgba(20,10,4,0.75)")=>{s.save(),s.translate(2,3),s.fillStyle=h,s.strokeStyle=h,c(),s.restore(),s.save(),s.translate(-1,-1.5),s.fillStyle="#fff3c9",s.strokeStyle="#fff3c9",c(),s.restore();let d=s.createLinearGradient(0,0,0,372);d.addColorStop(0,"#f2c66e"),d.addColorStop(1,"#b9832f"),s.fillStyle=d,s.strokeStyle=d,c()};a(()=>{s.lineWidth=7,s.strokeRect(26,26,972,320),s.lineWidth=2,s.strokeRect(42,42,940,288)}),s.textAlign="center",s.textBaseline="middle";let l=(c,u,h)=>{let d=h;do s.font=`${u} ${d}px Satoshi, system-ui, sans-serif`,d-=2;while(s.measureText(c).width>874&&d>30)};return i[0]==="Selected as"?(a(()=>{s.font="600 46px Satoshi, system-ui, sans-serif","letterSpacing"in s&&(s.letterSpacing="14px"),s.fillText("SELECTED AS",1024/2,118),"letterSpacing"in s&&(s.letterSpacing="0px")}),a(()=>{l(i[1],600,100),s.fillText(i[1],1024/2,230)})):(a(()=>{l(i[0],600,i.length>1?106:112),s.fillText(i[0],1024/2,i.length>1?140:190)}),i[1]&&a(()=>{l(i[1],500,70),"letterSpacing"in s&&(s.letterSpacing="4px"),s.fillText(i[1],1024/2,258),"letterSpacing"in s&&(s.letterSpacing="0px")})),n}Et();Et();var Ky=`
  uniform sampler2D tLm, tGrain; uniform samplerCube tEnv; uniform float uK, uTime, uHasEnv; uniform vec3 uFogCol; uniform float uFogK;
  varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
  vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
  vec3 tri(vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0));
    return texture2D(tGrain, p.zy / s).rgb * w.x + texture2D(tGrain, p.xz / s).rgb * w.y + texture2D(tGrain, p.xy / s).rgb * w.z; }
  vec3 env(vec3 R, float lod){ return uHasEnv > 0.5 ? textureLod(tEnv, R, lod).rgb : vec3(0.2); }
  float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  uniform vec3 uSunDir, uSunCol; uniform float uScatter;
  // aerial perspective: the haze thickens with distance and glows warm looking towards the sun, as real air does
  vec3 fog(vec3 c){ vec3 dv = vW - cameraPosition; float d = length(dv); float s = pow(max(dot(dv / max(d, 1e-3), uSunDir), 0.0), 6.0);
    return mix(c, uFogCol + uSunCol * s * uScatter, 1.0 - exp(-d * uFogK)); }
  vec3 triw(vec3 n){ vec3 w = pow(abs(n), vec3(4.0)); return w / dot(w, vec3(1.0)); }
  // detail shading from a normal map against the world's sun: >1 where the texture's relief faces the light, <1 in its pits
  float relief(vec3 nd, vec3 n){ return clamp(1.0 + (dot(nd, uSunDir) - dot(n, uSunDir)) * 0.9, 0.45, 1.6); }`;function Zy(i){return Object.entries(i||{}).map(([e,t])=>`
  uniform sampler2D tD_${e}, tN_${e};
  vec3 D_${e}(vec3 p, vec3 n){ vec3 w = triw(n); float s = ${(1/t.s).toFixed(5)};
    return texture2D(tD_${e}, p.zy * s).rgb * w.x + texture2D(tD_${e}, p.xz * s).rgb * w.y + texture2D(tD_${e}, p.xy * s).rgb * w.z; }
  vec3 N_${e}(vec3 p, vec3 n, float k){ vec3 w = triw(n); float s = ${(1/t.s).toFixed(5)};
    vec3 tx = texture2D(tN_${e}, p.zy * s).xyz * 2.0 - 1.0, ty = texture2D(tN_${e}, p.xz * s).xyz * 2.0 - 1.0, tz = texture2D(tN_${e}, p.xy * s).xyz * 2.0 - 1.0;
    tx.xy *= k; ty.xy *= k; tz.xy *= k;
    vec3 nx = vec3(tx.xy + n.zy, abs(tx.z) * n.x), ny = vec3(ty.xy + n.xz, abs(ty.z) * n.y), nz = vec3(tz.xy + n.xy, abs(tz.z) * n.z);
    return normalize(nx.zyx * w.x + ny.xzy * w.y + nz.xyz * w.z); }`).join(`
`)}function $y(i,e=1,t=0,n=[.5,.5,.55],s=.03){let r=new Me(new on(3500,64,32),new Se({side:zt,depthWrite:!1,uniforms:{tSky:{value:i},uExp:{value:e},uRot:{value:t},uHaze:{value:new ye(...n)},uCut:{value:s}},vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform sampler2D tSky; uniform float uExp, uRot, uCut; uniform vec3 uHaze; varying vec3 vD;
      void main(){ vec3 d = normalize(vD); float k = smoothstep(uCut, uCut + 0.12, d.y);
        vec3 c = uHaze;
        if (k > 0.0) { float lon = atan(d.z, d.x) + uRot, lat = asin(clamp(d.y, -1.0, 1.0));      // only the photograph's sky is ever sampled: no stretched rows
          c = mix(uHaze, pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)) * uExp, k); }
        gl_FragColor = vec4(c, 1.0); }`}));return r.renderOrder=-1,r.frustumCulled=!1,r}var Jy=`
  attribute float kind; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
  #ifdef PLANAR
    uniform vec4 uRect;
  #endif
  void main(){ vec4 w = modelMatrix * vec4(position, 1.0);
    #ifdef PLANAR
      vUv = vec2((w.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - w.z) / (uRect.w - uRect.z));   // ground lightmaps are top-down
    #else
      vUv = uv;
    #endif
    vKind = kind; vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w; }`;function Ff(i,e){let t=new Ke().makeTranslation(...i.origin);return t.multiply(new Ke().makeRotationY(i.yaw-e.yaw)),t.multiply(new Ke().makeTranslation(-e.origin[0],-e.origin[1],-e.origin[2])),t}async function Yu(i,e,t){let n=t.renderTarget,s=i.getRenderTarget();try{i.setRenderTarget(n,0);let r=i.compileAsync(e,t.children[0]||t);i.setRenderTarget(s),await r}catch{i.setRenderTarget(s)}t.update(i,e)}var Nf=(i,e)=>{globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(i,Math.round(performance.now()-e)+"ms")};async function ii(i,{base:e,unpack:t,loader:n,renderer:s,tier:r,grainTex:o}){let a=e+i.dir+"/",l=y=>new Promise((S,N)=>n.load(a+y,D=>{D.colorSpace=Qt,D.anisotropy=8,S(D)},void 0,N)),c=await fetch(a+"scene.json").then(y=>y.json()),u=new Gn;u.background=new ye(...i.background||[.1,.1,.1]);let h={uTime:{value:0},uFogCol:{value:new ye(...i.fog?.col||[.5,.5,.5])},uFogK:{value:i.fog?.k??0}},d=new Os(r==="high"?256:128,{generateMipmaps:!0,minFilter:kn,type:Vt}),p=[],g={},x={};await Promise.all(Object.entries(i.textures||{}).map(async([y,S])=>{let N=(B,U)=>new Promise((H,z)=>n.load(e+"tex/"+B,O=>{O.wrapS=O.wrapT=Ns,O.anisotropy=8,O.colorSpace=U?Nt:Qt,H(O)},void 0,z)),[D,F]=await Promise.all([N(S.id+"_diff.webp",!0),N(S.id+"_nor.webp",!1)]);x["tD_"+y]={value:D},x["tN_"+y]={value:F}}));let m=Zy(i.textures),f={value:new E(...i.sun||[.4,.8,.3]).normalize()},_={value:new ye(...i.sunCol||[1,.82,.58])},w={value:i.scatter??.5};for(let y of i.parts){let S=typeof y=="string"?y:y.name,N=typeof y=="object"&&y.planar,[D,F]=await Promise.all([t(a+S+".pack"),l(S+"_lm.webp")]),B=performance.now();D.computeVertexNormals(),Nf(i.dir+" normals "+S,B);let U=new Se({uniforms:{...h,tLm:{value:F},tGrain:{value:o},tEnv:{value:d.texture},uHasEnv:{value:0},uK:{value:c.lm[S]},uRect:{value:new Qe(...c.rect||[0,1,0,1])},uSunDir:f,uSunCol:_,uScatter:w,...x,...i.uniforms||{}},defines:N?{PLANAR:""}:{},side:N?pt:Si,vertexShader:Jy,fragmentShader:`${Ky}
${m}
${i.glsl||""}
void main(){
          vec3 n = vN; n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 1.0, 0.0);
          vec3 L = lmDecode(texture2D(tLm, vUv).rgb, uK);
          vec3 V = normalize(cameraPosition - vW), R = reflect(-V, n);
          float fres = pow(clamp(1.0 - max(dot(n, V), 0.0), 0.0, 1.0), 5.0);
          float k = vKind + 0.5; vec3 c = vec3(0.5) * L;
          ${i.palette}
          gl_FragColor = vec4(clamp(fog(c), vec3(0.0), vec3(16.0)), 1.0); }`}),H=new Me(D,U);H.frustumCulled=!1,u.add(H),p.push(U),N&&(g.groundLm=F)}if(i.sky){let y=await new Promise((S,N)=>n.load(e+"tex/"+i.sky.file,D=>{D.colorSpace=Qt,S(D)},void 0,N));g.sky=$y(y,i.sky.exposure??1,i.sky.rot??0,i.sky.haze||i.fog?.col||[.5,.5,.55],i.sky.cut??.03),u.add(g.sky)}let v={scene:u,U:h,info:c,renderer:s,tier:r,loader:n,dir:a,unpack:t,texL:l,envTex:d.texture,base:e,groundLm:g.groundLm,texU:x,sunDir:f,sky:g.sky},C=performance.now(),R=i.extras?await i.extras(v):null;if(Nf(i.dir+" extras (incl. awaits)",C),i.envAt){let y=new zs(.3,4e3,d);y.position.set(...i.envAt),u.add(y),await Yu(s,u,y),p.forEach(S=>S.uniforms.uHasEnv.value=1)}let A=vs(i.way),T=new E,M=new E;return{key:i.dir,scene:u,chapters:i.chapters,exposure:i.exposure??1,sun:f.value.clone(),entry:i.entry,exit:i.exit,exitPortal:i.exitPortal,pose(y,S){A.sample(y,T,M),S.position.copy(T),S.lookAt(M)},closeUp(y){return(i.closeUps||[]).some(([S,N,D,F])=>(y.x-S)**2+(y.y-N)**2+(y.z-D)**2<F*F)},update(y,S,N,D){h.uTime.value=y,R?.update?.(y,S,N,D)},setPx(y){R?.setPx?.(y)},dispose(){u.traverse(y=>{y.geometry?.dispose?.();let S=y.material;S&&(Array.isArray(S)?S:[S]).forEach(N=>{N.uniforms?.tLm?.value?.dispose?.(),N.dispose()})}),d.dispose(),R?.dispose?.()}}}var jy="M\u012B\u1E6Dhr\u0101k\u012B",si={w:44,h:22,z:-46,y:11},No=-7,Fo=-16,Wt=(i,e,t)=>[i,e,t],Qy=[{pos:Wt(0,1.9,42),tgt:Wt(0,2.1,5),w:1},{pos:Wt(0,7,34),tgt:Wt(-4,6,-16),w:1.2},{pos:Wt(-16,6.5,8),tgt:Wt(No,6,Fo),w:1.2},{pos:Wt(-12.5,5,1.5),tgt:Wt(No+1,4.6,Fo+3),w:1.1},{pos:Wt(-6.1,2.85,-8.4),tgt:Wt(No+2.6,2.05,Fo+3.9),w:1.3},{pos:Wt(-1.2,1.7,-4.2),tgt:Wt(No+9.3,.7,Fo+8),w:1.3},{pos:Wt(4,9,6),tgt:Wt(0,11,si.z),w:1.3},{pos:Wt(0,11,-14),tgt:Wt(0,11.5,si.z),w:1.4},{pos:Wt(0,11,-26),tgt:Wt(0,11,si.z),w:1},{pos:Wt(12,4.5,-31),tgt:Wt(27,3.6,-36),w:1},{pos:Wt(25.6,1.9,-36),tgt:Wt(60,2.1,-36),w:0}],Zu=[{at:[.06,.42],kick:"Our own brand \xB7 "+jy,line:"Pure Arabica from Shimoga, treated like engineering. Brand identity, packaging and a Shopify store."},{at:[.42,.86],kick:"We do not brew. We execute.",line:"Every bean measured, every mark specified, and a warm face against the cold data.",book:"mithraki"}],zf=`
  attribute float kind; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
  void main(){ vUv = uv; vKind = kind; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w; }`,Ku=`
  uniform sampler2D tLm, tGrain; uniform samplerCube tEnv; uniform float uK, uTime, uWake, uHandOn; uniform vec3 uHand;
  varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
  vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
  vec3 tri(vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0));
    return texture2D(tGrain, p.zy / s).rgb * w.x + texture2D(tGrain, p.xz / s).rgb * w.y + texture2D(tGrain, p.xy / s).rgb * w.z; }
  vec3 env(vec3 R, float lod){ return textureLod(tEnv, R, lod).rgb; }
  void main(){
    vec3 n = vN; n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 1.0, 0.0);
    vec3 L = lmDecode(texture2D(tLm, vUv).rgb, uK);
    vec3 V = normalize(cameraPosition - vW), R = reflect(-V, n);
    float fres = pow(clamp(1.0 - max(dot(n, V), 0.0), 0.0, 1.0), 5.0);
    float k = vKind + 0.5; vec3 c;
    if (k > 4.0 && k < 5.0 && distance(vW.xy, vec2(-7.0, 5.75)) < 0.82 && vW.z > -12.48) k = 2.5;   // the disc under the gauges: embossed enamel, not brass (in brass it read as a face)
    vec3 grain = tri(vW, n, 4.0);
    if (k < 1.0)       c = vec3(0.95, 0.90, 0.83) * mix(vec3(1.0), grain * 1.08, 0.35) * L;                       // lime plaster
    else if (k < 2.0) { vec3 a = vec3(0.17, 0.035, 0.04) * mix(vec3(1.0), grain, 0.25);                            // oxblood polished floor
                        c = a * L + env(R, 1.2) * (0.02 + 0.35 * fres) * 0.7; }
    else if (k < 3.0) { c = vec3(0.42, 0.05, 0.06) * L + env(R, 1.5) * (0.04 + 0.6 * fres); }                     // oxblood enamel, lacquered
    else if (k < 4.0) { c = env(R, 2.0) * vec3(0.80, 0.82, 0.84) * 0.9 + L * 0.04; }                                // brushed steel
    else if (k < 5.0) { c = env(R, 2.2) * vec3(0.95, 0.70, 0.36) * 0.9 + L * 0.03; }                                // brass
    else if (k < 6.0) { c = vec3(0.86, 0.84, 0.80) * L + env(R, 1.0) * (0.04 + 0.4 * fres); }                     // glazed ceramic
    else if (k < 7.0) { c = vec3(0.03, 0.025, 0.024) * L + env(R, 2.0) * (0.04 + 0.3 * fres); }                   // dark bakelite, rubber
    else if (k < 8.0) {                                                                                               // the carved wall
      vec3 alb = vec3(0.91, 0.87, 0.81) * mix(vec3(1.0), grain * 1.08, 0.3);
      vec3 d = uHand - vW; float dist = length(d); vec3 l = d / max(dist, 1e-3);
      float hand = max(dot(n, l), 0.0) * exp(-dist * dist / 18.0) * uHandOn;                // a warm light held close to the plaster
      c = alb * (L * (0.8 + 0.2 * uWake) + vec3(1.0, 0.62, 0.34) * hand * 2.6 * (0.4 + 0.6 * uWake));
    }
    else if (k < 9.0) {                                                                                             // roasted beans: each its own roast, oily
      float hb = fract(sin(dot(floor(vW * 3.2), vec3(12.9, 78.2, 37.7))) * 43758.5);
      vec3 roast = mix(vec3(0.05, 0.024, 0.012), vec3(0.11, 0.058, 0.028), hb);
      c = roast * L * 0.75 + env(R, 0.7) * (0.05 + 0.55 * fres) * 0.8 + vec3(1.0, 0.85, 0.7) * pow(max(dot(R, normalize(vec3(-0.4, 0.85, 0.3))), 0.0), 60.0) * 0.6 * dot(L, vec3(0.33));
    }
    else if (k < 10.0) c = vec3(0.26, 0.06, 0.065) * mix(vec3(1.0), grain, 0.3) * L;                                // oxblood dado plaster
    else if (k < 11.0) {                                                                                            // espresso crema: tiger-striped, glossy
      vec2 q = vW.xz; float r = fract(length(q - floor(q / 2.6 + 0.5) * 2.6) * 2.2);
      float tig = 0.5 + 0.5 * sin(atan(vW.z, vW.x) * 9.0 + vW.x * 14.0 + grain.r * 6.0);
      vec3 cr = mix(vec3(0.36, 0.19, 0.08), vec3(0.72, 0.47, 0.24), 0.45 + 0.35 * tig) * (0.85 + 0.15 * r);
      c = cr * (L * 0.8 + 0.25) + env(R, 0.4) * (0.04 + 0.5 * fres);
    }
    else {                                                                                                          // jute: a coarse open weave
      float wx = sin(vW.x * 70.0 + sin(vW.y * 9.0)) * 0.5 + 0.5, wy = sin(vW.y * 70.0 + vW.z * 70.0) * 0.5 + 0.5;
      c = vec3(0.52, 0.41, 0.25) * mix(vec3(1.0), grain, 0.4) * (0.72 + 0.28 * max(wx, wy)) * max(L, vec3(0.9, 0.82, 0.74));   // the sack's bake faced inwards: a floor of room light
    }
    gl_FragColor = vec4(clamp(c, vec3(0.0), vec3(16.0)), 1.0);
  }`;async function Of({base:i,unpack:e,loader:t,renderer:n,tier:s,grainTex:r}){let o=i+"mithraki/",a=K=>new Promise((Y,ve)=>t.load(o+K,ce=>{ce.colorSpace=Qt,ce.anisotropy=8,Y(ce)},void 0,ve)),[l,c,u,h,d,p,g]=await Promise.all([fetch(o+"scene.json").then(K=>K.json()),e(o+"room.pack"),a("room_lm.webp"),e(o+"relief.pack"),a("relief_lm.webp"),e(o+"machine.pack"),a("machine_lm.webp")]);c.computeVertexNormals();let x=new Gn;x.background=new ye(.85,.82,.78);let m={uTime:{value:0},uWake:{value:0},uHandOn:{value:0},uHand:{value:new E(0,11,si.z+3)}},f=new Os(s==="high"?256:128,{generateMipmaps:!0,minFilter:kn,type:Vt}),_=new Se({uniforms:{...m,tLm:{value:u},tGrain:{value:r},tEnv:{value:f.texture},uK:{value:l.lm}},vertexShader:zf,fragmentShader:Ku}),w=new Me(c,_);w.frustumCulled=!1,x.add(w),p.computeVertexNormals();let v=new Se({uniforms:{...m,tLm:{value:g},tGrain:{value:r},tEnv:{value:f.texture},uK:{value:l.lmMachine}},vertexShader:zf,fragmentShader:Ku}),C=new Me(p,v);C.frustumCulled=!1,x.add(C),h.computeVertexNormals();let R=l.relief.rect,A=new Se({uniforms:{...m,tLm:{value:d},tGrain:{value:r},uK:{value:l.relief.k},uRect:{value:new Qe(R[0],R[1],R[2],R[3])}},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tLm, tGrain; uniform float uK, uWake, uHandOn; uniform vec3 uHand; uniform vec4 uRect; varying vec3 vW, vN;
      vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
      void main(){
        vec3 n = vN; n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 0.0, 1.0);
        vec2 uv = vec2((vW.x - uRect.x) / (uRect.y - uRect.x), (vW.y - uRect.z) / (uRect.w - uRect.z));
        vec3 L = lmDecode(texture2D(tLm, uv).rgb, uK);
        vec3 alb = vec3(0.93, 0.89, 0.83) * mix(1.0, texture2D(tGrain, vW.xy / 3.0).r * 1.08, 0.3);
        vec3 d = uHand - vW; float dist = length(d); vec3 l = d / max(dist, 1e-3);
        float hand = max(dot(n, l), 0.0) * exp(-dist * dist / 16.0) * uHandOn;          // a warm light held close to the plaster
        vec3 c = alb * (L * (0.85 + 0.15 * uWake) + vec3(1.0, 0.6, 0.32) * hand * 2.4 * (0.4 + 0.6 * uWake));
        gl_FragColor = vec4(clamp(c, vec3(0.0), vec3(16.0)), 1.0); }`}),T=new Me(h,A);T.frustumCulled=!1,x.add(T);let M=new Cr;_.uniforms.tEnv.value=null;let y=new zs(.5,300,f);y.position.set(-2,4,-2),x.add(y);let S=_.clone();S.uniforms={..._.uniforms,tEnv:{value:null}},S.fragmentShader=Ku.replace("vec3 env(vec3 R, float lod){ return textureLod(tEnv, R, lod).rgb; }","vec3 env(vec3 R, float lod){ return vec3(0.18, 0.16, 0.15); }");let N=S.clone();N.uniforms={...S.uniforms,tLm:{value:g},uK:{value:l.lmMachine}},w.material=S,C.material=N,await Yu(n,x,y),w.material=_,C.material=v,_.uniforms.tEnv.value=f.texture,S.dispose(),N.dispose();let D=s==="high"?700:300,F=new $e,B=new Float32Array(D*4);for(let K=0;K<D;K++)B[K*4]=K%2?1:-1,B[K*4+1]=Math.random(),B[K*4+2]=Math.random()*6.28,B[K*4+3]=Math.random();F.setAttribute("position",new Xe(new Float32Array(D*3),3)),F.setAttribute("aD",new Xe(B,4));let U=new qt(F,new Se({transparent:!0,depthWrite:!1,uniforms:{uTime:m.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; attribute vec4 aD; varying float vA;
      void main(){ float life = fract(uTime * 0.12 + aD.y); float gx = ${No.toFixed(1)} + aD.x * 2.6;
        vec3 p = vec3(gx + sin(life * 6.0 + aD.z) * 0.5 * life, 2.4 + life * 6.5, ${(Fo+3.85).toFixed(2)} + cos(life * 5.0 + aD.z) * 0.4 * life);
        vA = 0.045 * sin(life * 3.14159) * (0.5 + aD.w * 0.5);
        vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.35 + life * 1.6) * uPx / max(-mv.z, 0.5), 1.0, 90.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.95, 0.93, 0.9) * a, a); }",blending:wt}));U.frustumCulled=!1,x.add(U);let H=new ie(-9,-9),z=new Ya,O=new Hn(new E(0,0,1),-si.z-.3),X=-10,ee=new E,pe=K=>{let Y=n.domElement.getBoundingClientRect();H.set((K.clientX-Y.left)/Y.width*2-1,-((K.clientY-Y.top)/Y.height)*2+1),X=performance.now()/1e3};n.domElement.addEventListener("pointermove",pe,{passive:!0});let be=vs(Qy),q=new E,te=new E,Q=new E(0,11,si.z+3);return{sun:new E(...l.sun||[-.42,.87,-.25]).normalize(),scene:x,chapters:Zu,exposure:.98,entry:{origin:[0,0,42],yaw:0},exit:{origin:[26,0,-36],yaw:-Math.PI/2},exitPortal:{pos:[25.97,3.6,-36],size:[4.5,7.2],yaw:-Math.PI/2},pose(K,Y){be.sample(K,q,te),Y.position.copy(q),Y.lookAt(te)},update(K,Y,ve,ce){m.uTime.value=K,m.uWake.value+=(at.smoothstep(ve,.45,.85)-m.uWake.value)*(1-Math.exp(-Y*2));let Ee=performance.now()/1e3,J=!1;Ee-X<2.5&&(z.setFromCamera(H,ce),z.ray.intersectPlane(O,ee)&&Math.abs(ee.x)<si.w/2&&Math.abs(ee.y-si.y)<si.h/2&&(Q.set(ee.x,ee.y,si.z+3.2),J=!0)),J||Q.set(Math.sin(K*.21)*9+Math.sin(K*.53)*3,si.y+Math.sin(K*.33)*5,si.z+3.2),m.uHand.value.lerp(Q,1-Math.exp(-Y*4)),m.uHandOn.value+=((ve>.35?1:0)-m.uHandOn.value)*(1-Math.exp(-Y*1.5))},setPx(K){U.material.uniforms.uPx.value=K},destroy(){n.domElement.removeEventListener("pointermove",pe),f.dispose()},dispose(){n.domElement.removeEventListener("pointermove",pe),f.dispose(),x.traverse(K=>{K.geometry?.dispose?.();for(let Y of[].concat(K.material||[]))Y.dispose()})}}}Et();var ln=(i,e,t)=>[i,e,t],e_=[{pos:ln(0,1.9,48.4),tgt:ln(0,2.1,10),w:.8},{pos:ln(0,2.6,40),tgt:ln(0,4,18),w:1.2},{pos:ln(-.6,2.4,31),tgt:ln(0,4.5,6),w:1.2},{pos:ln(.6,2.7,23),tgt:ln(3.6,1.4,11),w:1.4},{pos:ln(-.6,2.7,9),tgt:ln(-3.6,1.4,-3),w:1.4},{pos:ln(0,2.8,-6),tgt:ln(0,3,-40),w:1},{pos:ln(0,2.6,-34),tgt:ln(0,2.4,-70),w:1},{pos:ln(0,2.1,-50),tgt:ln(0,2.1,-80),w:1},{pos:ln(0,1.9,-57.6),tgt:ln(0,2.1,-95),w:0}],$u=[{at:[.04,.5],kick:"Client \xB7 Revise Tax",line:"Full branding and website for Revise Tax."},{at:[.5,1.01],kick:"The result",line:"One of the best-looking tax websites in India, where money feels calm, clear and trusted."}],t_=`
  vec3 grain = tri(vW, n, 3.0);
  if (k < 1.0) { vec3 nd = N_trav(vW, n, 0.8); c = D_trav(vW, n) * vec3(1.0, 0.97, 0.92) * L * 1.12 * relief(nd, n) + env(reflect(-V, nd), 1.6) * (0.02 + 0.2 * fres); }   // the palace's marble, softly polished
  else if (k < 2.0) {                               // polished marble tiles: the vault mirrored in them, softened by their own relief
    // large polished slabs set on the diagonal: cream marble with verde diamonds and fine joints, each slab from its own block
    vec2 q = mat2(0.7071, -0.7071, 0.7071, 0.7071) * vW.xz / 1.1; vec2 cell = floor(q), f = abs(fract(q) - 0.5);
    float chk = mod(cell.x + cell.y, 2.0), joint = smoothstep(0.488, 0.497, max(f.x, f.y));
    vec3 off = vec3(cell.x * 7.3, 0.0, cell.y * 4.1);
    vec3 nd = N_trav(vW + off, n, 0.35); vec3 Rm = reflect(-V, nd);
    vec3 alb = mix(D_trav(vW + off, n) * vec3(1.0, 0.96, 0.9), D_trav(vW * 1.3 + off, n) * vec3(0.32, 0.42, 0.36), chk) * (0.94 + 0.08 * h21(cell)) * (1.0 - joint * 0.6);
    c = alb * L * 1.08 + env(Rm, 0.6) * (0.05 + 0.45 * fres) * (1.0 - joint);
  }
  else if (k < 3.0) { vec3 nd = N_plas(vW, n, 1.0); c = D_plas(vW, n) * vec3(1.0, 0.97, 0.92) * L * 1.1 * relief(nd, n); }   // rough plaster in the coffers
  else if (k < 4.0) { c = env(R, 1.4) * vec3(1.0, 0.72, 0.3) * 1.1 + L * vec3(0.12, 0.08, 0.03); }           // gold coins
  else if (k < 5.0) {                              // brushed brass safe-deposit doors: raised frame, recessed panel, enamel number plate, hinge pins
    vec3 bt = vec3(0.86, 0.62, 0.3); vec3 nd = n; float plate = 0.0, pin = 0.0, edge = 1.0;
    if (abs(n.x) > 0.5) {
      float u = vW.z + 53.7, m = floor((u + 0.85) / 6.0), w = u - 6.0 * m, col = clamp(floor(w / 1.7 + 0.5), 0.0, 2.0);
      vec2 dl = vec2(w - col * 1.7, vW.y - 1.1 - clamp(floor((vW.y - 1.1) / 1.35 + 0.5), 0.0, 3.0) * 1.35);
      float ex = 0.75 - abs(dl.x), ey = 0.55 - abs(dl.y), e = min(ex, ey);
      float bev = smoothstep(0.035, 0.05, e) * (1.0 - smoothstep(0.09, 0.105, e));          // the moulded frame's inner slope
      vec3 tz = vec3(0.0, 0.0, 1.0), ty = vec3(0.0, 1.0, 0.0);
      nd = normalize(n + (ex < ey ? tz * -sign(dl.x) : ty * -sign(dl.y)) * bev * 0.7);
      edge = 1.0 - (1.0 - smoothstep(0.0, 0.018, e)) * 0.8;
      plate = step(abs(dl.x), 0.17) * step(abs(dl.y - 0.3), 0.065);
      pin = (1.0 - smoothstep(0.018, 0.026, length(vec2(abs(dl.x) - 0.66, abs(dl.y) - 0.38))));
    }
    float brush = 0.85 + 0.15 * h21(vec2(floor(vW.y * 380.0), floor(vW.z * 3.0)));
    float occ = clamp(dot(L, vec3(0.33)) * 1.6, 0.35, 1.0);
    vec3 Rn = reflect(-V, nd);
    float el = dot(env(Rn, 0.9), vec3(0.33)); c = (bt * (L * 0.62 + el * 1.1 + 0.03) * brush + bt * pow(max(dot(Rn, normalize(vec3(0.0, 1.0, 0.15))), 0.0), 40.0) * 1.6) * occ * edge;
    vec2 pd = vec2(0.0); float digits = 0.0;
    c = mix(c, vec3(0.86, 0.82, 0.72) * L * 0.9 + env(Rn, 1.0) * 0.05, plate);                // ivory enamel plate
    c *= 1.0 - pin * 0.6;
  }
  else if (k < 6.0) { vec3 w = mix(vec3(0.16, 0.08, 0.04), vec3(0.28, 0.15, 0.07), tri(vW * vec3(1.0, 6.0, 1.0), n, 1.2).r);   // oiled wood
                      c = w * L + env(R, 2.0) * 0.03 * (0.3 + fres); }
  else if (k < 7.0) { c = vec3(0.035) * L + env(R, 2.0) * vec3(0.12) * (0.4 + fres); }                       // black iron straps
  else if (k < 8.0) { float ridge = 0.75 + 0.25 * smoothstep(0.2, 0.5, abs(fract(vW.y / 0.0055) - 0.5));       // stacked coins: milled edges
                      vec3 gt = vec3(0.92, 0.6, 0.18);
                      c = env(R, 1.2) * gt * gt * 1.4 * ridge + gt * L * 0.12 + gt * pow(max(dot(R, normalize(vec3(-0.3, 0.9, 0.3))), 0.0), 30.0) * 2.2 * ridge; }   // stacked gold, a highlight running up the milled edges
  else { c = tri(vW, n, 1.6) * vec3(0.2, 0.27, 0.23) * L + env(R, 1.0) * (0.04 + 0.4 * fres); }                // verde marble pedestals
`;function Bf(i){return ii({dir:"revisetax",parts:["room"],way:e_,chapters:$u,palette:t_,textures:{trav:{id:"palace_marble",s:3.2},marb:{id:"marble_tiles",s:4},plas:{id:"white_plaster_rough_01",s:2}},sun:[-.2,.93,.3],sunCol:[1,.85,.62],scatter:.35,background:[.6,.66,.74],fog:{col:[.78,.74,.66],k:.004},exposure:1,envAt:[0,3,10],entry:{origin:[0,0,48],yaw:0},exit:{origin:[0,0,-58],yaw:0},exitPortal:{pos:[0,3.6,-58.03],size:[4.5,7.2],yaw:0},extras:async({scene:e,info:t,tier:n,U:s,envTex:r})=>{let o=new Se({transparent:!0,depthWrite:!1,blending:wt,side:pt,uniforms:{uTime:s.uTime},vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vL; uniform float uTime;
          void main(){ float h = clamp(vL.y / 9.5 + 0.5, 0.0, 1.0); float edge = 1.0 - smoothstep(0.25, 0.5, max(abs(vL.x) / 3.0, abs(vL.z) / 3.0));
            float a = edge * (0.25 + 0.75 * h) * 0.055 * (0.9 + 0.1 * sin(uTime * 0.7 + vL.y)); gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, a); }`});for(let D of t.sky){let F=new bn(3,9.5,3,1,1,1),B=F.attributes.position;for(let H=0;H<B.count;H++){let z=B.getY(H);B.setX(H,B.getX(H)-z*.19),B.setZ(H,B.getZ(H)+z*.38)}let U=new Me(F,o);U.position.set(1,4.75,D-1.8),U.renderOrder=5,e.add(U)}let a=n==="high"?160:70,l=new Ri(.032,.032,.006,16),c=new kt({color:new ye("#e6ac40"),metalness:1,roughness:.22,envMapIntensity:1.4});c.envMap=r;let u=new Xn(l,c,a);u.frustumCulled=!1,e.add(u);let h=[],d=(()=>{let D=7;return()=>(D=D*16807%2147483647)/2147483647})(),p=()=>(d()+d()+d()-1.5)*.8,g=(D,F)=>.9+.36*Math.pow(Math.max(0,1-(D/.8)**2-(F/.48)**2),.65),x=new on(1,28,12,0,Math.PI*2,0,Math.PI/2);t.chests.forEach(([D,F,B],U)=>{let H=U<2?2600:1100,z=Math.cos(B),O=Math.sin(B);for(let ee=0;ee<H;ee++){let pe=(d()*2-1)*.8,be=(d()*2-1)*.48,q=g(pe,be);if(q<.905&&d()<.7)continue;let te=Math.floor(d()*3),Q=q-te*.011+d()*.004,K=(g(pe+.02,be)-g(pe-.02,be))/.04,Y=(g(pe,be+.02)-g(pe,be-.02))/.04;h.push([D+pe*z+be*O,Q,F-pe*O+be*z,Math.atan(Y)+p()*.5,d()*6.28,-Math.atan(K)+p()*.5])}let X=new Me(x,c);X.scale.set(.79,.34,.47),X.position.set(D,.9,F),X.rotation.y=B,e.add(X);for(let ee=0;ee<(U<2?420:160);ee++){let pe=d()*6.283,be=.95+Math.pow(d(),2.2)*1.8;h.push([D+Math.cos(pe)*be*1.1,.004+d()*.006,F+Math.sin(pe)*be*.75,p()*.08,d()*6.28,p()*.08])}});let m=new Ri(.032,.032,.006,12),f=new Xn(m,c,h.length);f.frustumCulled=!1;{let D=new Ke,F=new At,B=new vn,U=new E,H=new E(1,1,1);h.forEach((z,O)=>{B.set(z[3],z[4],z[5],"YXZ"),F.setFromEuler(B),D.compose(U.set(z[0],z[1],z[2]),F,H),f.setMatrixAt(O,D)})}e.add(f),e.add(new ei(16773597,3811864,1.2));let _=new ti(16769720,2.5);_.position.set(-3,10,6),e.add(_);let w=Array.from({length:a},(D,F)=>{let B=t.chests[F%t.chests.length];return{x:B[0]+(Math.random()-.5)*.9,z:B[1]+(Math.random()-.5)*.6,ph:Math.random(),sp:.6+Math.random()*.5,r:Math.random()*6}}),v=new Ke,C=new At,R=new vn,A=new E,T=new E(1,1,1),M=n==="high"?1400:500,y=new $e,S=new Float32Array(M*3);for(let D=0;D<M;D++){let F=t.sky[D%t.sky.length];S[D*3]=(Math.random()-.5)*4+1,S[D*3+1]=Math.random()*9,S[D*3+2]=F-1.8+(Math.random()-.5)*4}y.setAttribute("position",new Xe(S,3));let N=new qt(y,new Se({transparent:!0,depthWrite:!1,blending:wt,uniforms:{uTime:s.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y + uTime * 0.08, 9.0); p.x += sin(uTime * 0.3 + p.z) * 0.2;
          vA = 0.35 * smoothstep(0.0, 1.0, p.y) * (1.0 - smoothstep(7.5, 9.0, p.y)); vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.02 * uPx / -mv.z, 1.0, 6.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(1.0, 0.95, 0.85) * a, a); }"}));return N.frustumCulled=!1,e.add(N),{update(D){for(let F=0;F<a;F++){let B=w[F],U=(D*B.sp*.25+B.ph)%1,H=9.6-U*U*8.7;R.set(D*3+B.r,D*2+B.r,0),C.setFromEuler(R),A.set(B.x,Math.max(H,1.15),B.z),v.compose(A,C,T),u.setMatrixAt(F,v)}u.instanceMatrix.needsUpdate=!0},setPx(D){N.material.uniforms.uPx.value=D}}}},i)}Et();Et();var n_=`
  float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y); }`;function Wr(i){let e={uTime:i.U.uTime,uFogCol:i.U.uFogCol,uFogK:i.U.uFogK,uCenter:{value:new ie},uTile:{value:i.tile||60},uFade:{value:new ie(...i.fade||[24,32])},uH:{value:i.height||.5},uWide:{value:i.wide||1.2},uPxAng:{value:.0015},tLm:{value:i.lm},uK:{value:i.K},uRect:{value:new Qe(...i.rect)},uSun:{value:(i.sun||new E(.5,.6,.4)).clone().normalize()},uTip:{value:new ye(...i.tip||[.22,.3,.07])},uDry:{value:new ye(...i.dry||[.42,.38,.16])},uRoot:{value:new ye(...i.root||[.035,.05,.015])},uWind:{value:i.wind??1}},t=new Se({side:pt,uniforms:e,vertexShader:`${n_}
      ${i.heightGLSL}
      ${i.maskGLSL}
      uniform float uTime, uTile, uH, uWide, uPxAng, uWind; uniform vec2 uCenter, uFade; uniform vec4 uRect;
      attribute vec4 aOff; attribute vec2 aVar; varying float vY, vVar, vGust; varying vec3 vW, vN; varying vec2 vLmUv;
      void main(){
        vec2 wp = uCenter + mod(aOff.xy - uCenter + 0.5 * uTile, uTile) - 0.5 * uTile;
        float keep = (1.0 - smoothstep(uFade.x, uFade.y, length(wp - uCenter))) * grassMask(wp);
        float clump = 0.45 + 1.05 * smoothstep(0.25, 0.75, gn(wp * 0.11) * 0.7 + gn(wp * 0.6) * 0.3);
        float h = (0.45 + aOff.w * 0.6) * uH * clump * keep;
        float y = position.y; vY = y; vVar = aVar.x;
        float a = aOff.z; vec3 side = vec3(cos(a), 0.0, sin(a)), face = vec3(-side.z, 0.0, side.x);
        float camD = length(vec3(wp.x, cameraPosition.y, wp.y) - cameraPosition);
        float w = max(0.028 * uWide, camD * uPxAng * 1.5) * (1.0 - pow(y, 1.6) * 0.92) * step(0.004, h);
        vec2 wdir = normalize(vec2(0.8, -0.6));
        float gust = (gn(wp * 0.05 - wdir * uTime * 1.3) * 1.7 - 0.35) * uWind;
        float flut = sin(uTime * 3.3 + aOff.w * 30.0 + wp.x * 0.9) * 0.08 * uWind;
        float bend = (aVar.y * 0.25 + gust * 0.95 + flut) * y * y; vGust = clamp(gust, 0.0, 1.5);
        vec3 p = vec3(wp.x, groundY(wp), wp.y) + side * position.x * w + vec3(0.0, y * h * (1.0 - 0.18 * abs(bend)), 0.0);
        p.xz += (wdir * bend * 0.9 + face.xz * aVar.y * 0.25 * y * y) * h;
        vN = normalize(mix(face, vec3(0.0, 1.0, 0.0), 0.55));
        vLmUv = vec2((wp.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - wp.y) / (uRect.w - uRect.z));
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform sampler2D tLm; uniform float uK, uFogK; uniform vec3 uSun, uTip, uDry, uRoot, uFogCol;
      varying float vY, vVar, vGust; varying vec3 vW, vN; varying vec2 vLmUv;
      vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
      void main(){
        float y = clamp(vY, 0.0, 1.0), var = clamp(vVar, 0.0, 1.0);
        vec3 L = lmDecode(texture2D(tLm, clamp(vLmUv, 0.002, 0.998)).rgb, uK);
        vec3 alb = mix(uRoot, mix(uTip, uDry, smoothstep(0.55, 1.0, var)), pow(y, 0.7));
        vec3 V = normalize(cameraPosition - vW);
        float trans = pow(max(dot(-V, uSun), 0.0), 3.0) * y * 0.6;
        vec3 c = alb * L * (0.55 + 0.45 * y) + alb * trans * dot(L, vec3(0.5)) * 1.4;
        c *= 1.0 + clamp(vGust, 0.0, 1.5) * 0.2 * y;
        float d = length(vW - cameraPosition); c = mix(c, uFogCol, 1.0 - exp(-d * uFogK));
        gl_FragColor = vec4(clamp(c, vec3(0.0), vec3(4.0)), 1.0);
      }`}),n=new Me(Do(i.count||12e4,e.uTile.value,1,i.seed||3),t);n.frustumCulled=!1;let s=new E;return{mesh:n,update(r){r.getWorldDirection(s),e.uCenter.value.set(r.position.x+s.x*e.uTile.value*.38,r.position.z+s.z*e.uTile.value*.38)},setPx(r){e.uPxAng.value=r}}}var cn=i=>3.2*Math.sin(i*.045)+1.6*Math.sin(i*.11+1.3),Gt=(i,e,t)=>[i,e,t],Pn=-58,Un=cn(Pn)+3.3;function i_(i,e){let t=Math.abs(i-cn(e)),n=Math.pow(Math.min(1,Math.max(0,(t-2.6)/6)),1.5),s=1.4*Math.sin(i*.09+.5)*Math.cos(e*.07)+.9*Math.sin((i-e)*.13)+.5*Math.sin(i*.31+e*.23);return s=s*n+.06*Math.sin(e*.5),s*=Math.min(1,Math.abs(e-52)/8)*Math.min(1,Math.abs(e+100)/8),s+.02*t*n*3}var vi=i_(Un,Pn)+.44,s_=[{pos:Gt(0,1.9,52.4),tgt:Gt(cn(30),2.2,30),w:.8},{pos:Gt(cn(40),2.3,40),tgt:Gt(cn(18),2.6,18),w:1},{pos:Gt(cn(22),2.4,22),tgt:Gt(cn(0),2.8,0),w:1},{pos:Gt(cn(2),2.5,2),tgt:Gt(cn(-24),2.6,-24),w:1},{pos:Gt(cn(-22)+1.2,2.2,-22),tgt:Gt(cn(-34)-3.2,1.6,-34),w:1.4},{pos:Gt(cn(-34)+1,1.9,-34),tgt:Gt(cn(-38)-3,1.9,-38),w:1.6},{pos:Gt(cn(-50)-.4,2.3,-50),tgt:Gt(Un,vi,Pn),w:1.2},{pos:Gt(Un-.9,vi+.42,Pn+.8),tgt:Gt(Un-.05,vi+.06,Pn),w:1.6},{pos:Gt(cn(-68),2.3,-68),tgt:Gt(cn(-86),2.6,-86),w:1},{pos:Gt(cn(-78)*.6,2.2,-80),tgt:Gt(0,3.4,-100),w:1},{pos:Gt(0,1.9,-99.6),tgt:Gt(0,2.1,-140),w:0}],Ju=[{at:[.04,.42],kick:"Client \xB7 Bisi Kaapi",line:"Branding and website for Bisi Kaapi: filter coffee rooted in the hills of Karnataka."},{at:[.42,1.01],kick:"From the forest to the cup",line:"Coffee grows in forests like this one. We designed a brand that tastes like a Bangalore morning."}],r_=`
  const float HX = ${Un.toFixed(3)}, HZ = ${Pn.toFixed(1)};
  if (distance(vW.xz, vec2(HX, HZ)) < 2.6 && ((k > 1.0 && k < 3.0) || k > 5.0)) discard;   // the baked stand-ins: the set is drawn live
  vec3 g3 = tri(vW, n, 2.2);
  float pathD = abs(vW.x - (3.2 * sin(vW.z * 0.045) + 1.6 * sin(vW.z * 0.11 + 1.3)));
  if (k < 1.0) {                                     // forest floor: red laterite showing through leaf litter, mud and leaves on the trodden path
    float m1 = tri(vW * 0.18, vec3(0.0, 1.0, 0.0), 1.0).r, m2 = tri(vW * 0.7 + 3.1, vec3(0.0, 1.0, 0.0), 1.0).g;
    vec3 nd = N_leaf(vW, n, 1.0);
    vec3 a = D_leaf(vW, n), lat = D_lat(vW, n) * vec3(1.0, 0.92, 0.88), mud = D_mud(vW, n);
    float bare = smoothstep(0.5, 0.7, m1 * 0.7 + m2 * 0.3) * 0.75 + (1.0 - smoothstep(1.8, 3.4, pathD)) * 0.0;
    a = mix(a, lat, bare);
    a = mix(a, mud * 0.85, 1.0 - smoothstep(1.6, 3.2, pathD));
    nd = normalize(mix(nd, N_lat(vW, n, 1.0), bare));
    float hd = distance(vW.xz, vec2(HX, HZ));                      // the old stand-in's baked shadow is lifted to the forest's own shade
    vec3 Lg = mix(max(L, vec3(0.42, 0.42, 0.38)) * (0.8 + 0.2 * smoothstep(0.6, 1.0, hd)), L, smoothstep(2.0, 3.4, hd));
    c = a * Lg * 1.25 * relief(nd, n);
  } else if (k < 3.0) {                             // the old gates: real moss-grown stone; moss thick on every ledge and near the ground
    vec3 nd = N_wall(vW, n, 1.2); vec3 st = D_wall(vW, n);
    vec3 mo = D_mrock(vW, n) * vec3(0.8, 1.0, 0.7);
    float mossy = clamp(smoothstep(0.45, 0.85, n.y) + (1.0 - smoothstep(0.2, 1.4, vW.y)) * 0.6, 0.0, 1.0);
    vec3 Lh = distance(vW.xz, vec2(HX, HZ)) < 2.3 ? max(L, vec3(0.7, 0.68, 0.6)) : L;     // the coffee stone's bake faced inwards
    c = mix(st, mo, mossy) * Lh * 1.2 * relief(nd, n);
  }
  else if (k < 4.0) { vec3 nd = N_flag(vW, n, 1.2); c = D_flag(vW, n) * L * 1.15 * relief(nd, n) + env(reflect(-V, nd), 2.0) * 0.03; }   // pitted, mossy flagstones, a little damp
  else if (k < 5.0) { vec3 p2 = vW * vec3(1.0, 0.45, 1.0); vec3 nd = N_bark(p2, n, 1.4); c = D_bark(p2, n) * L * 1.15 * relief(nd, n); }   // real bark, stretched up the trunk
  else {                                             // hand-hammered brass: the forest and sky in it, dimpled, a glint of sun
    vec3 bt = vec3(0.78, 0.42, 0.1); float hm = tri(vW * 9.0, n, 1.0).r;
    vec3 Rh = normalize(R + (vec3(hm) - 0.5) * 0.25);                                // hammer dimples break up the reflection
    float band = exp(-pow(Rh.y * 6.0 - 0.4, 2.0)) * (0.35 + 0.65 * step(0.42, fract(atan(Rh.z, Rh.x) * 4.0 + hm * 0.3)));   // misty horizon, cut by reflected trunks
    vec3 envC = mix(mix(vec3(0.03, 0.035, 0.02), vec3(0.08, 0.12, 0.06), step(0.0, Rh.y)), vec3(0.55, 0.58, 0.5), band);
    c = bt * envC * 1.25 + bt * L * 0.08 + vec3(1.0, 0.88, 0.62) * pow(max(dot(Rh, normalize(vec3(0.55, 0.5, 0.45))), 0.0), 60.0) * 3.0;
  }
`;function Hf(i){return ii({dir:"bisikaapi",parts:["room",{name:"ground",planar:!0}],way:s_,chapters:Ju,palette:r_,textures:{leaf:{id:"forest_leaves_02",s:2.4},lat:{id:"red_laterite_soil_stones",s:3.2},mud:{id:"brown_mud_leaves_01",s:2.2},bark:{id:"bark_brown_02",s:1.4},wall:{id:"mossy_stone_wall",s:3},mrock:{id:"mossy_rock",s:2},flag:{id:"rock_pitted_mossy",s:1.1}},sun:[.45,.5,-.6],sunCol:[1,.84,.58],scatter:1.1,envAt:[Un,vi+.5,Pn],closeUps:[[Un,vi,Pn,2.6]],sky:{file:"rainforest_trail_sky.webp",exposure:.9,cut:.45},background:[.6,.72,.8],fog:{col:[.5,.6,.55],k:.0048},exposure:1.05,entry:{origin:[0,0,52],yaw:0},exit:{origin:[0,0,-100],yaw:0},exitPortal:{pos:[0,3.6,-100.03],size:[4.5,7.2],yaw:0,arch:!0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,loader:o,base:a,unpack:l,groundLm:c,dir:u}=e,h=new E(.45,.5,-.6).normalize(),d={uTime:r.uTime,uSun:{value:h},uFogCol:r.uFogCol,uFogK:r.uFogK},p=new Qe(...n.rect),g=await Ii({base:a,unpack:l,loader:o,U:d,groundLm:c,groundK:n.lm.ground,rect:p,tier:s,layout:{items:n.items.filter(U=>U[0]!=="rock_moss_set_01_e")}}).catch(()=>null);g&&(t.add(g.group),g.fade.value=1);let x=await new Promise(U=>o.load(u+"leaves.webp",H=>{H.colorSpace=Nt,H.anisotropy=4,U(H)})),m=(U,H,z,O)=>{let X=new $e,ee=[],pe=[],be=[],q=[],te=O,Q=()=>(te=te*16807%2147483647)/2147483647;for(let K=0;K<U;K++){let Y=new E(Q()-.5,Q()-.5,Q()-.5).multiplyScalar(1.7),ve=new E(Q()-.5,Q()*.6,Q()-.5).normalize(),ce=new E().crossVectors(ve,new E(Q()-.5,Q()-.5,Q()-.5)).normalize(),Ee=.75+Q()*.5,J=Math.floor(Q()*16),re=J%4/4,L=1-(Math.floor(J/4)+1)/4,me=ee.length/3;for(let[ae,ge]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let ue=Y.clone().addScaledVector(ce,ae*z*Ee).addScaledVector(ve,ge*H*Ee);ee.push(ue.x,ue.y,ue.z),pe.push(re+(ae+1)/8,L+(ge+1)/8),q.push(Y.length()/1.2)}be.push(me,me+1,me+2,me,me+2,me+3)}return X.setAttribute("position",new Ze(ee,3)),X.setAttribute("uv",new Ze(pe,2)),X.setAttribute("aOut",new Ze(q,1)),X.setIndex(be),X},f=s==="high",_=(U,H)=>{let z=new ni;z.index=U.index;for(let O of["position","uv","aOut"])z.attributes[O]=U.attributes[O];return z.setAttribute("aC",new Xt(new Float32Array(H.flatMap(O=>[O[0],O[1],O[2],O[3]])),4)),z.setAttribute("aT",new Xt(new Float32Array(H.flatMap((O,X)=>[O[4],X*.6180339%1])),2)),z.instanceCount=H.length,z},w=n.clusters.filter((U,H)=>U[4]!==1&&(f||H%3!==0)),v=n.clusters.filter(U=>U[4]===1),C=_(m(f?80:46,.3,.3,9),w),R=_(m(f?70:44,.24,.24,21),v),A=new Me(R,new Se({side:pt,uniforms:{...d,tLeaf:{value:x},tLm:{value:c},uK:{value:n.lm.ground},uRect:{value:p}},vertexShader:`uniform float uTime; uniform vec4 uRect; uniform sampler2D tLm; uniform float uK; attribute vec4 aC; attribute vec2 aT; attribute float aOut;
          varying vec2 vUv; varying vec3 vW, vN; varying float vOut, vType, vVar, vLit;
          vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
          void main(){ vUv = uv; vOut = aOut; vType = aT.x; vVar = aT.y;
            float a = aT.y * 6.283; mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
            vec3 p = position; p.xz = rot * p.xz; p *= aC.w * smoothstep(0.6, 2.2, distance(aC.xyz, cameraPosition) - aC.w);   // no leaves brushing the lens
            bool low = abs(vType - 1.0) < 0.5 || vType > 3.5;                                  // coffee and pepper vines barely move
            float sway = sin(uTime * (low ? 1.6 : 0.7) + aC.x * 0.3 + aC.z * 0.2) * (low ? 0.04 : (vType > 2.5 ? 0.3 : 0.22)) * (0.5 + 0.5 * aOut);
            float flut = sin(uTime * (low ? 5.0 : 3.6) + position.x * 13.0 + position.z * 7.0 + aT.y * 40.0) * (low ? 0.012 : 0.03) * aC.w * aOut;   // each leaf flickers in the breeze
            vec3 w = aC.xyz + p + vec3(sway + flut, flut * 0.6, sway * 0.6 - flut * 0.5);
            vN = normalize(vec3(p.x, p.y * 0.6 + aC.w * 0.4, p.z));
            vec2 lu = vec2((aC.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - aC.z) / (uRect.w - uRect.z));
            vLit = clamp(dot(lmDecode(texture2D(tLm, clamp(lu, 0.002, 0.998)).rgb, uK), vec3(0.333)) * 1.4, 0.25, 1.4);   // shade under the canopy, from the bake
            if (abs(vType - 1.0) > 0.5) vLit = mix(vLit, 1.15, smoothstep(10.0, 26.0, aC.y));   // high crowns stand in the sun
            vW = w; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:`uniform sampler2D tLeaf; uniform vec3 uSun, uFogCol; uniform float uFogK; varying vec2 vUv; varying vec3 vW, vN; varying float vOut, vType, vVar, vLit;
          void main(){ vec4 t = texture2D(tLeaf, vUv); if (t.a < 0.45) discard;
            vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n; vec3 V = normalize(cameraPosition - vW);
            vec3 tint = vType < 0.5 ? vec3(1.0) : vType < 1.5 ? vec3(0.85) : vType < 2.5 ? vec3(0.78, 0.92, 0.82) : vType < 3.5 ? vec3(0.72, 0.9, 0.62) : vec3(0.62, 0.82, 0.5);
            vec3 alb = t.rgb * mix(vec3(0.85, 1.0, 0.8), vec3(1.05, 1.0, 0.75), vVar) * tint;
            if (vType > 1.5 && vType < 2.5 && !gl_FrontFacing) alb = mix(alb, vec3(0.55, 0.6, 0.55), 0.55);                  // silver oak: the pale underside
            float ao = mix(0.45, 1.0, clamp(vOut, 0.0, 1.0));
            float nl = clamp(dot(n, uSun) * 0.6 + 0.4, 0.0, 1.0);
            vec3 c = alb * (vec3(1.0, 0.88, 0.7) * 1.7 * nl * vLit + vec3(0.25, 0.32, 0.36) * 0.9) * ao;
            c += alb * vec3(0.6, 0.85, 0.3) * pow(max(dot(-V, uSun), 0.0), 3.0) * 1.4 * vLit;                       // sun through the leaves
            c += vec3(0.9, 0.95, 1.0) * pow(max(dot(reflect(-V, n), uSun), 0.0), 40.0) * (abs(vType - 1.0) < 0.5 || vType > 3.5 ? 0.5 : 0.15);    // glossy coffee and pepper leaves
            float d = length(vW - cameraPosition); c = mix(c, uFogCol, 1.0 - exp(-d * uFogK));
            gl_FragColor = vec4(c, 1.0); }`}));A.frustumCulled=!1,t.add(A);let T=new Me(C,A.material);T.frustumCulled=!1,t.add(T);let M=n.cherries.filter((U,H)=>s==="high"||H%2===0),y=new Xn(new on(.045,10,8),new kt({roughness:.25,metalness:0}),M.length),S=new Ke,N=new ye;M.forEach((U,H)=>{S.makeTranslation(U[0],U[1],U[2]),y.setMatrixAt(H,S),y.setColorAt(H,U[3]?N.setRGB(.55,.03,.03):N.setRGB(.25,.42,.08))}),y.frustumCulled=!1,t.add(y),t.add(new ei(13624063,2761750,1.1));let D=new ti(16769200,2.2);D.position.copy(h).multiplyScalar(50),t.add(D);let F=new Se({transparent:!0,depthWrite:!1,blending:wt,side:pt,uniforms:{uTime:r.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime; void main(){ float a = smoothstep(0.0, 0.3, vUv.x) * (1.0 - smoothstep(0.7, 1.0, vUv.x)) * smoothstep(0.0, 0.5, vUv.y) * 0.09 * (0.85 + 0.15 * sin(uTime * 0.4 + vUv.x * 9.0));
          gl_FragColor = vec4(vec3(1.0, 0.92, 0.75) * a, a); }`});for(let U=0;U<18;U++){let H=40-U*8+(Math.random()-.5)*4,z=cn(H)+(Math.random()-.5)*14,O=new Me(new bt(2.5+Math.random()*3,26),F);O.position.set(z,11,H),O.rotation.set(-.5,Math.random()*.6-.3,.42)}{let U=(K,Y=64)=>new Ai(K.map(([ve,ce])=>new ie(ve,ce)),Y),H=K=>e.texU[K].value,z=U([[0,0],[.62,0],[.7,.08],[.72,.22],[.66,.36],[.5,.43],[.2,.445],[0,.445]],40),O=z.attributes.position;for(let K=0;K<O.count;K++){let Y=O.getX(K),ve=O.getZ(K),ce=Math.atan2(ve,Y),Ee=1+.06*Math.sin(ce*5+1)+.04*Math.sin(ce*11);O.setX(K,Y*Ee),O.setZ(K,ve*Ee*.85)}z.computeVertexNormals();let X=new Me(z,new kt({map:H("tD_mrock"),normalMap:H("tN_mrock"),roughness:.92,color:14211276}));X.position.set(Un,vi-.445,Pn),t.add(X);let ee=new kt({color:13803600,metalness:1,roughness:.24,envMap:e.envTex,envMapIntensity:1.3}),pe=new Me(U([[0,0],[.085,0],[.1,.012],[.112,.045],[.128,.062],[.125,.066],[.106,.05],[.094,.016],[0,.012]]),ee),be=U([[0,0],[.04,0],[.044,.008],[.05,.11],[.056,.124],[.053,.126],[.046,.112],[.038,.012],[0,.01]]),q=new Me(be,ee),te=new Me(be,ee);pe.position.set(Un-.05,vi,Pn),q.position.set(Un-.05,vi+.018,Pn),te.position.set(Un+.2,vi,Pn+.08);let Q=new Me(new zr(.047,40),new Se({uniforms:{uTime:r.uTime},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vP; uniform float uTime; float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5); }
            void main(){ float r = length(vP) / 0.047; float foam = smoothstep(0.55, 0.95, r) * (0.7 + 0.3 * h(floor(vP * 900.0)));
              vec3 c = mix(vec3(0.16, 0.08, 0.035), vec3(0.62, 0.45, 0.28), foam * 0.9 + 0.12 * h(floor(vP * 500.0 + uTime)));   // filter coffee, frothed by pouring
              gl_FragColor = vec4(c * 0.9, 1.0); }`}));Q.rotation.x=-Math.PI/2,Q.position.set(Un+.2,vi+.105,Pn+.08),t.add(pe,q,te,Q),n.hero=[Un+.2,vi+.12,Pn+.08]}if(n.hero){let H=new $e,z=new Float32Array(90*4);for(let X=0;X<90;X++)z[X*4]=Math.random(),z[X*4+1]=Math.random()*6.28,z[X*4+2]=Math.random(),z[X*4+3]=Math.random();H.setAttribute("position",new Xe(z.slice(0,90*3),3)),H.setAttribute("aS",new Xe(z,4));let O=new qt(H,new Se({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uO:{value:new E(...n.hero)}},vertexShader:`uniform float uTime; uniform vec3 uO; attribute vec4 aS; varying float vA;
            void main(){ float t = fract(aS.x + uTime * (0.16 + aS.z * 0.08)); float h = t * 0.5;
              vec3 p = uO + vec3(cos(aS.y + h * 9.0) * (0.012 + h * 0.09), h, sin(aS.y + h * 9.0) * (0.012 + h * 0.09)) + vec3(sin(uTime * 0.9 + h * 10.0) * 0.06 * h, 0.0, 0.0);
              vA = sin(t * 3.14159) * 0.03 * smoothstep(0.0, 0.15, t); vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((14.0 + 46.0 * t) / -mv.z, 1.0, 60.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.05, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.95, 0.96, 0.94), a); }"}));O.frustumCulled=!1,O.renderOrder=7,t.add(O)}let B=Wr({U:r,lm:c,K:n.lm.ground,rect:n.rect,sun:h,tile:56,count:f?14e4:6e4,fade:[20,27],height:.42,wide:1.25,tip:[.16,.24,.06],dry:[.3,.3,.12],root:[.03,.04,.012],seed:7,heightGLSL:`float groundY(vec2 p){ float x = p.x, z = p.y; float px = 3.2 * sin(z * 0.045) + 1.6 * sin(z * 0.11 + 1.3); float d = abs(x - px);
          float fl = pow(clamp((d - 2.6) / 6.0, 0.0, 1.0), 1.5);
          float h = 1.4 * sin(x * 0.09 + 0.5) * cos(z * 0.07) + 0.9 * sin((x - z) * 0.13) + 0.5 * sin(x * 0.31 + z * 0.23);
          h = h * fl + 0.06 * sin(z * 0.5); h *= min(1.0, abs(z - 52.0) / 8.0) * min(1.0, abs(z + 100.0) / 8.0); return h + 0.02 * d * fl * 3.0; }`,maskGLSL:`float grassMask(vec2 p){ float px = 3.2 * sin(p.y * 0.045) + 1.6 * sin(p.y * 0.11 + 1.3);
          return smoothstep(2.2, 3.2, abs(p.x - px)) * smoothstep(2.4, 3.4, distance(p, vec2(${Un.toFixed(2)}, ${Pn.toFixed(1)}))) * smoothstep(0.25, 0.6, gn(p * 0.21)); }`});return t.add(B.mesh),{update(U,H,z,O){B.update(O)},setPx(U){B.setPx(1/U)}}}},i)}Et();var un=(i,e,t)=>[i,e,t],v_=[{pos:un(0,1.9,12.4),tgt:un(0,1,-40),w:.45},{pos:un(0,5.5,-6.5),tgt:un(0,-24,-95),w:1},{pos:un(-44,14,-28),tgt:un(0,0,-105),w:1},{pos:un(-66,34,-80),tgt:un(0,30,-108),w:1.1},{pos:un(-44,74,-132),tgt:un(0,30,-112),w:1.1},{pos:un(10,86,-142),tgt:un(0,20,-118),w:1},{pos:un(12,24,-172),tgt:un(0,10,-130),w:1.1},{pos:un(6,-8,-180),tgt:un(0,-14,-200),w:1},{pos:un(2,-32,-184),tgt:un(0,-56,-190),w:0}],th=[{at:[.04,.45],kick:"Client \xB7 Glavida",line:"Branding and website for Glavida, a real estate company that builds homes worth waiting for."},{at:[.45,.94],kick:"From line to landmark",line:"Every great building starts as a line on paper. We gave Glavida a brand people want to move into."}],x_="uniform float uBuild, uSea;",y_=`
  vec3 g3 = tri(vW, n, 2.4);
  // the towers assemble: above each one's build line nothing yet, at the line a warm glow of work in progress
  float city = step(vW.z, -70.0) * step(-23.4, vW.y);
  float hgt = uBuild - 18.0 * h21(floor(vW.xz / 24.0));
  if (city > 0.5 && ((k > 1.5 && k < 4.0) || k > 6.0) && vW.y > hgt) discard;   // concrete (2.5), glass (3.5), steel (6.5), roof gardens (7.5) wait for the build line   // concrete, glass, steel and roof gardens all wait for the build line
  float band = city * step(vW.y, hgt) * (1.0 - smoothstep(0.0, 0.5, hgt - vW.y)) * step(1.5, k) * step(k, 4.0);
  if (k < 1.0) { vec3 nd = N_stone(vW, n, 1.2); c = D_stone(vW, n) * L * 1.1 * relief(nd, n); }                        // sandstone gate, balustrade
  else if (k < 2.0) { vec3 nd = N_stone(vW * 1.4, n, 1.0); c = D_stone(vW * 1.4, n) * vec3(1.02, 1.0, 0.96) * L * 1.15 * relief(nd, n); }   // terrace paving
  else if (k < 3.0) { vec3 nd = N_conc(vW, n, 1.0); c = D_conc(vW, n) * (L * 1.6 + vec3(0.12, 0.15, 0.22) * (0.6 + 0.4 * nd.y)) * relief(nd, n); }   // facade concrete, lit by the dusk sky
  else if (k < 4.0) {                                                                                    // glass: the dusk sky, and rooms behind it
    vec2 wc = vec2(abs(n.x) > 0.5 ? vW.z : vW.x, vW.y - 0.28) / vec2(2.2, 3.2), cell = floor(wc), fc = fract(wc);
    float hc = h21(cell + floor(vW.xz / 30.0) * 7.0), lit = step(0.76, hc);
    // a lit room seen through glass: warm ceiling light falling off to a dark floor, a lamp pool, sometimes a sheer curtain or a dark shape
    float ceiling = smoothstep(0.35, 0.95, fc.y), lampPool = exp(-pow((fc.x - h21(cell * 3.7)) * 3.0, 2.0)) * smoothstep(0.1, 0.6, fc.y) * 0.6;
    float shape = step(0.62, h21(cell * 7.1)) * step(abs(fc.x - 0.3 - 0.4 * h21(cell * 9.3)), 0.12) * step(fc.y, 0.55);
    float sheer = step(0.55, h21(cell * 5.3)) * 0.35;
    vec3 warm = mix(vec3(1.0, 0.6, 0.3), vec3(1.0, 0.82, 0.6), h21(cell * 1.7));
    vec3 room = warm * (0.04 + 0.22 * ceiling + 0.25 * lampPool) * (1.0 - shape * 0.8) * (1.0 - sheer * 0.4) * lit * (0.55 + 0.9 * h21(cell * 2.3));
    room += vec3(0.25, 0.35, 0.55) * 0.012 * (1.0 - lit);
    float pr = 0.75 + 0.5 * h21(floor(vec2(vW.y / 3.2, (abs(n.x) > 0.5 ? vW.z : vW.x) / 2.2)));
    vec3 refl = env(normalize(R + vec3(0.0, (pr - 1.0) * 0.05, 0.0)), 0.15) * pr;
    c = refl * (0.12 + 0.85 * fres) + room * (1.0 - fres * 0.9) + vec3(0.006, 0.009, 0.015);
  }
  else if (k < 5.0) { vec3 nd = N_rock(vW, n, 1.3); c = D_rock(vW, n) * L * 1.2 * relief(nd, n); }                          // cliff rock
  else if (k < 6.0) { vec3 nd = N_asph(vW, n, 1.0); c = D_asph(vW, n) * 0.7 * L + env(reflect(-V, nd), 1.0) * (0.02 + 0.3 * fres); }   // asphalt, damp
  else if (k < 7.0) c = env(R, 2.0) * 0.5 + L * 0.06;                                                      // metal
  else if (k < 8.0) c = D_lawn(vW, n) * vec3(0.8, 0.95, 0.7) * (L * 1.3 + vec3(0.03, 0.04, 0.03));                   // lawns, roof gardens, planters
  else { float gr = sin(vW.x * 9.0 + sin(vW.z * 2.0)) * 0.5 + 0.5; c = mix(vec3(0.36, 0.22, 0.12), vec3(0.5, 0.33, 0.18), gr) * (L * 1.4 + vec3(0.12, 0.07, 0.04)); }   // timber soffits, warm from the rooms
  c += vec3(1.0, 0.55, 0.2) * band * 1.4;
`;function kf(i){return ii({dir:"glavida",parts:["room"],way:v_,chapters:th,palette:y_,glsl:x_,textures:{stone:{id:"large_sandstone_blocks",s:3},conc:{id:"concrete_tile_facade",s:3.2},rock:{id:"rock_face_03",s:6},asph:{id:"asphalt_02",s:4},lawn:{id:"forest_ground_04",s:3}},sun:[-.7,.25,-.35],sunCol:[1,.6,.4],scatter:.9,sky:{file:"kiara_9_dusk_sky.webp",exposure:1,rot:3.734,cut:0,haze:[.22,.3,.44]},uniforms:{uBuild:{value:-24},uSea:{value:-26}},background:[.16,.26,.42],fog:{col:[.22,.3,.44],k:.0026},exposure:.95,envAt:[0,30,-20],entry:{origin:[0,0,12],yaw:0},exit:{origin:[2,-26,-184],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,loader:o,base:a,unpack:l,renderer:c}=e,u=e.sky,h=new Ws(new bt(600,300),{textureWidth:1024,textureHeight:512,color:5928336,shader:{name:"harbour",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:r.uTime},vertexShader:"uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW; void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime; varying vec4 vUv4; varying vec3 vW;
            void main(){ float dd = length(vW - cameraPosition); vec2 r = vec2(sin(vW.x * 0.71 + vW.z * 0.23 + uTime * 0.9) + 0.6 * sin(vW.x * 1.93 - vW.z * 1.37 - uTime * 1.3) + 0.35 * sin(vW.z * 3.1 + vW.x * 0.6 + uTime * 1.7), sin(vW.z * 0.83 - vW.x * 0.31 + uTime * 0.7) + 0.6 * sin(vW.z * 2.17 + vW.x * 1.11 + uTime * 1.1)) * 0.009 / (1.0 + dd * 0.012);
              vec4 uv = vUv4; uv.xy += r * uv.w; vec3 V = normalize(cameraPosition - vW); float f = 0.05 + 0.95 * pow(1.0 - max(V.y, 0.0), 4.0);
              vec3 c = mix(vec3(0.01, 0.03, 0.05), texture2DProj(tDiffuse, uv).rgb, clamp(f, 0.0, 1.0)); gl_FragColor = vec4(c, 1.0); }`}});h.rotation.x=-Math.PI/2,h.position.set(0,n.sea,-305),t.add(h);let d=new Mo(new Uint8Array([200,200,200,255]),1,1);d.needsUpdate=!0;let p={uTime:r.uTime,uSun:{value:new E(-.7,.3,.25).normalize()},uFogCol:r.uFogCol,uFogK:r.uFogK},g=await Ii({base:a,unpack:l,loader:o,U:p,groundLm:d,groundK:.5,rect:new Qe(-1,1,-1,1),tier:s,layout:{items:n.items}}).catch(()=>null);g&&(t.add(g.group),g.fade.value=1);let x=new kt({color:13214247,metalness:.3,roughness:.6});t.add(new ei(9414872,1710626,.9));let m=new ti(16756864,1);m.position.set(-70,35,25),t.add(m);let f=(M,y,S)=>{let N=[],D=(H,z,O)=>{let X=new E().subVectors(z,H),ee=new Ri(O,O,X.length(),4,1,!0);ee.applyQuaternion(new At().setFromUnitVectors(new E(0,1,0),X.clone().normalize())),ee.translate((H.x+z.x)/2,(H.y+z.y)/2,(H.z+z.z)/2),N.push(ee)},F=(H,z,O)=>S==="y"?new E(z*y/2,H,O*y/2):new E(H,z*y/2,O*y/2),B=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[H,z]of B)D(F(0,H,z),F(M,H,z),.09);let U=y*1.1;for(let H=0;H<M-.01;H+=U)for(let z=0;z<4;z++){let[O,X]=B[z],[ee,pe]=B[(z+1)%4],be=Math.min(M,H+U);D(F(H,O,X),F(H,ee,pe),.05),D(F(H,O,X),F(be,ee,pe),.045)}return _(N)},{mergeGeometries:_}=await Promise.resolve().then(()=>(eh(),Qu)),w=[];for(let M of[1,2,5]){let y=n.towers[M],S=y[5]+2,N=y[0]+y[2]/2+3,D=y[1],F=S+16-n.gy,B=new Me(f(F,1.6,"y"),x);B.position.set(N,n.gy,D),t.add(B);let U=new wi;U.position.set(N,S+16,D),t.add(U);let H=new Me(f(50,1.1,"x"),x);H.position.x=-12,U.add(H);let z=new Me(new bn(2.2,2,2),new kt({color:14210248,roughness:.5}));z.position.set(1.8,-1.6,0),U.add(z);let O=new Me(new bn(3.6,2.4,2),new kt({color:7170660,roughness:.9}));O.position.set(-9.5,-1.4,0),U.add(O);let X=new Me(new Ri(.03,.03,20,4),new Wn({color:1710618}));X.position.set(26,-10,0),U.add(X);let ee=new Me(new bn(.5,.7,.3),new kt({color:13214247}));ee.position.set(26,-20.3,0),U.add(ee);let pe=new Me(new on(.25,8,6),new Wn({color:new ye(6,.4,.2)}));pe.position.set(38,.8,0),U.add(pe),w.push({jib:U,ph:M,beacon:pe})}let v=[];t.traverse(M=>{M.isMesh&&M.material.uniforms&&M.material.uniforms.uBuild&&v.push(M.material)});let C=n.sea,R=r.uFogCol.value.clone(),A=r.uFogK.value,T=t.background.clone();return{update(M,y,S,N){let D=at.lerp(-26,92,at.smoothstep(S,.05,.6));v.forEach(B=>B.uniforms.uBuild.value=D),w.forEach(B=>{B.jib.rotation.y=Math.sin(M*.07+B.ph)*1.4,B.beacon.visible=Math.sin(M*3+B.ph)>.2});let F=N.position.y<C;r.uFogCol.value.copy(F?new ye(.02,.12,.2):R),r.uFogK.value=F?.06:A,t.background.copy(F?new ye(.02,.12,.2):T),u.visible=!F,h.visible=!F}}}},i)}Et();var $t=(i,e,t)=>[i,e,t],__=[{pos:$t(0,46,50),tgt:$t(-2,22,44),w:.6},{pos:$t(0,39,46),tgt:$t(0,20,6),w:1},{pos:$t(2,18,28),tgt:$t(0,2,-10),w:1},{pos:$t(-1,5,6),tgt:$t(0,2,-30),w:1},{pos:$t(1.5,3.2,-30),tgt:$t(4,1.5,-78),w:1},{pos:$t(0,4,-62),tgt:$t(0,3,-100),w:1},{pos:$t(2,6.5,-88),tgt:$t(0,22,-120),w:1},{pos:$t(0,24,-108),tgt:$t(0,52,-136),w:1},{pos:$t(0,43.5,-122),tgt:$t(0,70,-150),w:1},{pos:$t(0,51.2,-126),tgt:$t(0,55,-170),w:0}],nh=[{at:[.04,.5],kick:"Client \xB7 Innovious",line:"Branding and website for Innovious, a technology company."},{at:[.5,1.01],kick:"Invisible, until it lights up",line:"Like the cables under every ocean, great technology works quietly. We gave it a voice and a face."}],M_=`
  // caustics: sunlight focused by the waves above into bright, sharp, slowly crawling webs, split slightly into colour
  float caus1(vec2 p, float t){ vec2 q = p; float c = 0.0;
    for (int i = 0; i < 4; i++) { float s = float(i) + 1.0;
      q = p * (0.6 + s * 0.35) + vec2(sin(t * 0.55 + q.y * 1.6 + s), cos(t * 0.47 + q.x * 1.3 - s)) * (0.9 / s);
      c += 1.0 / (1.0 + 24.0 * abs(sin(q.x) * sin(q.y))); }
    return pow(c / 4.0, 1.7) * 2.6; }
  vec3 caustic3(vec2 p, float t){ return vec3(caus1(p + 0.012, t), caus1(p, t), caus1(p - 0.012, t)); }`,w_=`
  vec3 cs3 = caustic3(vW.xz * 0.42, uTime) * smoothstep(-0.2, 0.8, n.y) * (0.6 + 0.4 * smoothstep(-2.0, 30.0, vW.y)); float cs = dot(cs3, vec3(0.333));
  if (k < 1.0) {                                         // sand: ripples, caustics dancing across it
    float rip = sin(vW.x * 2.2 + sin(vW.z * 0.7) * 2.0) * 0.5 + 0.5;
    vec3 nd = N_sand(vW, n, 1.2); vec3 a = mix(D_sand(vW, n), D_grav(vW, n) * 0.9, smoothstep(0.55, 0.8, tri(vW * 0.08, vec3(0.0, 1.0, 0.0), 1.0).r));
    c = a * (0.85 + 0.15 * rip) * L * relief(nd, n) * (0.55 + 1.9 * cs3);
  } else if (k < 2.0) { vec3 nd = N_rock(vW, n, 1.3); c = D_rock(vW, n) * L * relief(nd, n) * (0.65 + 1.4 * cs3) + vec3(0.02, 0.06, 0.05) * smoothstep(0.4, 0.9, n.y); }   // rock, a little algae on top
  else if (k < 3.0) {                                    // cable sheath: dark, a pulse of light travelling along it
    float pulse = pow(0.5 + 0.5 * sin(vW.z * 0.35 + uTime * 3.0), 18.0);
    c = vec3(0.03) * L + vec3(0.2, 0.75, 1.0) * pulse * 3.0;
  } else { c = env(R, 1.5) * vec3(0.6, 0.65, 0.7) * 0.6 + L * 0.1 + vec3(0.2, 0.8, 1.0) * 1.5 * step(0.985, fract(vW.z * 0.31 + uTime * 0.5)); }   // repeater housings, a status light
  c *= exp(-length(vW - cameraPosition) * vec3(0.05, 0.016, 0.011));                                   // clear water: red is absorbed first, blue-green carries far
`;function Vf(i){return ii({dir:"innovious",parts:["room",{name:"ground",planar:!0}],way:__,chapters:nh,palette:w_,glsl:M_,textures:{sand:{id:"sand_02",s:2.5},grav:{id:"coral_gravel",s:2},rock:{id:"rock_wall_08",s:3.5}},sun:[.1,.95,.2],sunCol:[.5,.8,.85],scatter:.7,background:[.03,.2,.28],fog:{col:[.03,.2,.28],k:.012},exposure:1.2,entry:{origin:[0,52,50],yaw:0},exit:{origin:[0,52,-126],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r}=e,o=new ye(.1,.42,.5),a=new ye(.02,.16,.25),l=s==="high"?420:180,c=16,u=new bt(.5,1,1,c);u.translate(0,.5,0);let h=new ni;h.index=u.index,h.attributes.position=u.attributes.position,h.attributes.uv=u.attributes.uv;let d=new Float32Array(l*4);for(let O=0;O<l;O++){let X=Math.random()<.5?-1:1;d[O*4]=X*(6+Math.random()*40),d[O*4+1]=60-Math.random()*200,d[O*4+2]=8+Math.random()*18,d[O*4+3]=Math.random()*6.28}h.setAttribute("aK",new Xt(d,4)),h.instanceCount=l;let p=new Me(h,new Se({side:pt,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol,uFogK:r.uFogK},vertexShader:`uniform float uTime; attribute vec4 aK; varying float vY; varying vec3 vW; varying vec2 vUv;
          void main(){ float y = position.y; vY = y; vUv = uv; float h = aK.z;
            vec3 p = vec3(position.x * (1.0 - 0.4 * y), y * h, 0.0);
            float s = sin(uTime * 0.6 + aK.w + y * 2.5) * 1.6 * y * y + sin(uTime * 1.3 + aK.w * 2.0 + y * 6.0) * 0.15 * y;
            p.x += s; p.z += cos(uTime * 0.5 + aK.w + y * 2.0) * 0.8 * y * y;
            mat2 r = mat2(cos(aK.w), -sin(aK.w), sin(aK.w), cos(aK.w)); p.xz = r * p.xz;
            vec3 w = vec3(aK.x, -0.5, aK.y) + p; vW = w; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:`uniform vec3 uFogCol; uniform float uFogK; varying float vY; varying vec3 vW; varying vec2 vUv;
          void main(){ float x = abs(vUv.x - 0.5) * 2.0;
            float rib = 1.0 - smoothstep(0.0, 0.12, x), ruffle = 0.85 + 0.15 * sin(vW.y * 9.0 + x * 6.0), edge = smoothstep(0.75, 1.0, x);
            vec3 V = normalize(cameraPosition - vW); float glow = pow(max(-V.y * 0.5 + 0.5, 0.0), 2.0) * (0.4 + 0.6 * vY);   // sun through the frond from above
            vec3 c = mix(vec3(0.06, 0.09, 0.025), vec3(0.36, 0.38, 0.1), vY) * ruffle * (1.0 - edge * 0.35) + vec3(0.25, 0.22, 0.06) * rib * 0.4;
            c += vec3(0.42, 0.5, 0.12) * glow * 0.5 * (1.0 - rib * 0.3);
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * uFogK)), 1.0); }`}));p.frustumCulled=!1,t.add(p);let g=new Se({transparent:!0,depthWrite:!1,blending:wt,side:pt,uniforms:{uTime:r.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime; void main(){ float a = smoothstep(0.0, 0.4, vUv.x) * (1.0 - smoothstep(0.6, 1.0, vUv.x)) * smoothstep(0.0, 0.9, vUv.y) * 0.085 * (0.55 + 0.45 * sin(uTime * 0.5 + vUv.x * 7.0));
          gl_FragColor = vec4(vec3(0.6, 0.9, 1.0) * a, a); }`});for(let O=0;O<26;O++){let X=new Me(new bt(3+Math.random()*6,60),g);X.position.set((Math.random()-.5)*60,26,50-O*7.5),X.rotation.set(.12,Math.random()*Math.PI,.08),X.renderOrder=6,t.add(X)}let x=new Me(new bt(420,420,1,1),new Se({side:pt,depthWrite:!1,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; uniform vec3 uFogCol; varying vec3 vW;
          void main(){ vec3 V = normalize(vW - cameraPosition); float t = uTime;
            vec2 rp = vec2(sin(vW.x * 0.45 + t * 0.9) + sin(vW.z * 0.7 - t * 0.7) * 0.6, sin(vW.z * 0.5 + t * 0.8) + sin((vW.x + vW.z) * 0.9 + t * 1.3) * 0.5);
            vec3 D = normalize(V + vec3(rp.x, 0.0, rp.y) * 0.035);
            float win = smoothstep(0.6, 0.7, D.y);
            vec3 sunD = normalize(vec3(0.12, 0.96, -0.25)); float sd = max(dot(D, sunD), 0.0);
            vec3 sky = mix(vec3(0.16, 0.5, 0.66), vec3(0.5, 0.78, 0.9), smoothstep(0.7, 1.0, D.y)) * (0.85 + 0.3 * sin(rp.x * 4.0 - rp.y * 3.0));
            vec3 below = vec3(0.03, 0.17, 0.21) * (0.7 + 0.3 * sin(rp.x * 3.0 + rp.y * 2.0));
            float rim = smoothstep(0.58, 0.66, D.y) * (1.0 - smoothstep(0.66, 0.76, D.y));
            vec3 c = mix(below, sky, win) + vec3(0.5, 0.8, 0.85) * rim * 0.5 + vec3(1.0, 0.95, 0.82) * (pow(sd, 90.0) * 6.0 + pow(sd, 12.0) * 0.6) * win;
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * 0.011)), 1.0); }`}));x.rotation.x=Math.PI/2,x.position.set(0,52,-100),x.renderOrder=2,t.add(x);let m=s==="high"?2500:900,f=new $e,_=new Float32Array(m*3);for(let O=0;O<m;O++)_[O*3]=(Math.random()-.5)*80,_[O*3+1]=Math.random()*50,_[O*3+2]=60-Math.random()*200;f.setAttribute("position",new Xe(_,3));let w=new qt(f,new Se({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y - uTime * 0.25, 50.0); p.x += sin(uTime * 0.2 + p.z) * 0.6;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = (1.0 - smoothstep(5.0, 60.0, -mv.z)) * 0.5; gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.06 * uPx / -mv.z, 1.0, 5.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.8, 0.9, 0.95) * a, a); }"}));w.frustumCulled=!1,t.add(w);let v=s==="high"?260:120,C=new Ai([[0,-.21],[.03,-.18],[.06,-.08],[.065,.02],[.05,.12],[.02,.18],[.012,.2]].map(([O,X])=>new ie(O,X)),10);C.scale(1,1,.55),C.rotateX(-Math.PI/2);let R=new $e;R.setAttribute("position",new Ze([0,0,-.19,0,.07,-.29,0,-.07,-.29],3));let{mergeGeometries:A}=await Promise.resolve().then(()=>(eh(),Qu)),T=C.toNonIndexed();T.deleteAttribute("uv"),T.deleteAttribute("normal");let M=A([T,R]);M.deleteAttribute("normal"),M.computeVertexNormals();let y=new kt({color:13162206,metalness:.85,roughness:.28,side:pt});y.onBeforeCompile=O=>{O.uniforms.uTime=r.uTime,O.vertexShader=`uniform float uTime;
`+O.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += sin(uTime * 14.0 + float(gl_InstanceID) * 1.7 + position.z * 18.0) * 0.025 * (1.0 - smoothstep(-0.3, 0.05, position.z));`),O.fragmentShader=O.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix(vec3(0.35, 0.45, 0.55), vec3(1.0), smoothstep(-0.03, 0.04, -vNormal.y));`)};let S=new Xn(M,y,v);S.frustumCulled=!1,t.add(S),t.add(new ei(10475775,661536,1.4));let N=Array.from({length:v},()=>({r:4+Math.random()*5,h:(Math.random()-.5)*3,ph:Math.random()*6.28,sp:.25+Math.random()*.15})),D=new Ke,F=new At,B=new E,U=new E(1,1,1),H=new E(0,1,0),z=Wr({U:r,lm:e.groundLm,K:n.lm.ground,rect:n.rect,sun:new E(.1,.95,.2),tile:50,count:s==="high"?11e4:45e3,fade:[18,25],height:.75,wide:1.6,tip:[.2,.38,.12],dry:[.36,.42,.16],root:[.03,.07,.04],wind:.9,seed:21,heightGLSL:"float groundY(vec2 p){ float x = p.x, z = p.y; return 1.6 * sin(x * 0.05 + 0.4) * cos(z * 0.04) + 0.9 * sin((x + z) * 0.09) + 0.35 * sin(x * 0.23 - z * 0.17) - 0.0002 * x * x; }",maskGLSL:"float grassMask(vec2 p){ return smoothstep(0.42, 0.62, gn(p * 0.09) * 0.7 + gn(p * 0.5) * 0.3); }"});return t.add(z.mesh),{update(O,X,ee,pe){z.update(pe);let be=at.clamp((pe.position.y-5)/40,0,1);r.uFogCol.value.copy(a).lerp(o,be),t.background.copy(r.uFogCol.value);let q=3,te=-40+Math.sin(O*.05)*20;N.forEach((Q,K)=>{let Y=O*Q.sp+Q.ph;B.set(q+Math.cos(Y)*Q.r,7+Q.h+Math.sin(Y*2)*.6,te+Math.sin(Y)*Q.r),F.setFromAxisAngle(H,-Y),D.compose(B,F,U),S.setMatrixAt(K,D)}),S.instanceMatrix.needsUpdate=!0},setPx(O){w.material.uniforms.uPx.value=O,z.setPx(1/O)}}}},i)}Et();var zo=-18,xs=i=>2+1.6*Math.sin(i*.06);function Gf(i,e){let t=(e-zo)/26,n=-2.2+2.2/(1+Math.exp(-t*3))+Math.max(0,e-zo)*.035,s=1.2*Math.max(0,Math.tanh((e-6)/10))*(.6+.4*Math.sin(i*.12+1))+.5*Math.sin(i*.21+e*.13)*Math.max(0,Math.tanh((e-2)/8)),r=Math.min(1,Math.abs(i-xs(e))/5);return n+s*(.35+.65*r)+.04*Math.sin(i*1.3)*Math.sin(e*.9)}var Xs=i=>Math.max(Gf(xs(i),i),.15)+.42+1.62,Ot=37,nn=xs(Ot)+.2,Zi=Gf(nn,Ot)+.13,En=(i,e,t)=>[i,e,t],b_=[{pos:En(0,-.8,-66),tgt:En(0,3,-22),w:.7},{pos:En(0,.7,-54),tgt:En(1,2.4,-8),w:1},{pos:En(1.4,1.5,-32),tgt:En(xs(0),2.6,8),w:1.1},{pos:En(xs(-8),Xs(-8),-8),tgt:En(xs(10),Xs(10)-.3,10),w:1},{pos:En(xs(12)-.4,Xs(12),12),tgt:En(xs(28),Xs(28)-.6,28),w:1.1},{pos:En(nn-.55,Zi+.3,Ot-.95),tgt:En(nn,Zi+.06,Ot),w:1.4},{pos:En(nn+3,Xs(Ot)+2,Ot+2.5),tgt:En(nn-30,26,Ot+110),w:1.1},{pos:En(nn+2,Xs(Ot)+16,Ot+10),tgt:En(nn-30,110,Ot+240),w:0}],ih=[{at:[.04,.5],kick:"Client \xB7 House of Moh",line:"Branding and website for House of Moh: daily creams for women and men."},{at:[.5,1.01],kick:"Soft by nature",line:"Gentle as a twilight shore and made for every day. We designed a brand you want on your skin."}],Wf=`
  float hmH(float x, float z){ float t = (z - ${zo.toFixed(1)}) / 26.0;
    float base = -2.2 + 2.2 / (1.0 + exp(-t * 3.0)) + max(0.0, z - ${zo.toFixed(1)}) * 0.035;
    float wx = 2.0 + 1.6 * sin(z * 0.06);
    float dune = 1.2 * max(0.0, tanh((z - 6.0) / 10.0)) * (0.6 + 0.4 * sin(x * 0.12 + 1.0)) + 0.5 * sin(x * 0.21 + z * 0.13) * max(0.0, tanh((z - 2.0) / 8.0));
    return base + dune * (0.35 + 0.65 * min(1.0, abs(x - wx) / 5.0)); }`,E_=`
  if (distance(vW.xz, vec2(${nn.toFixed(3)}, ${Ot.toFixed(1)})) < 1.45 && k > 1.5 && k < 7.0) discard;   // the baked plinth and jar: drawn live, at true scale
  if (k < 1.0) {                                     // sand: fine and dry above, dark and glassy where the waves have been, rippled below
    float wet = 1.0 - smoothstep(0.05, 0.55, vW.y);
    vec3 nd = N_sand(vW, n, 1.2); vec3 dry = D_sand(vW, n), dmp = D_wet(vW, n) * 0.8;
    vec3 a = mix(dry, dmp, wet); nd = normalize(mix(nd, N_wet(vW, n, 1.0), wet));
    float jd = distance(vW.xz, vec2(${nn.toFixed(3)}, ${Ot.toFixed(1)}));                            // the old plinth's baked shadow lifted
    vec3 Ls = mix(max(L, vec3(0.42, 0.4, 0.46)) * (0.7 + 0.3 * smoothstep(0.4, 0.75, jd)), L, smoothstep(1.6, 2.6, jd));
    c = a * Ls * 1.2 * relief(nd, n);
    c += env(reflect(-V, nd), 1.0) * wet * (0.04 + 0.5 * fres) * 0.5;                // the wet sand mirrors the sky
  }
  else if (k < 3.0) {                               // sandstone headlands and the plinth (the old stand-in's baked shadow lifted; a soft contact shadow kept)
    float jd = distance(vW.xz, vec2(${nn.toFixed(3)}, ${Ot.toFixed(1)}));
    vec3 Lp = mix(max(L, vec3(0.5, 0.46, 0.5)) * (0.55 + 0.45 * smoothstep(0.09, 0.2, jd)), L, smoothstep(0.75, 1.1, jd));
    vec3 nd = N_rock(vW, n, 1.3); c = D_rock(vW, n) * Lp * 1.25 * relief(nd, n); }
  else if (k < 4.0) { vec3 nd = N_plank(vW, n, 1.2); c = D_plank(vW, n) * L * 1.2 * relief(nd, n); }     // sun-silvered boardwalk planks
  else if (k < 5.0) c = D_rock(vW * 2.0, n) * vec3(0.8, 0.8, 0.78) * L;                                    // frangipani bark, smooth and grey
  else if (k < 6.0) { c = vec3(0.93, 0.88, 0.8) * max(L, vec3(0.62, 0.6, 0.66)) + env(R, 0.5) * (0.05 + 0.5 * fres) * 0.6; }   // the cream jar, glazed
  else if (k < 7.0) { c = vec3(0.85, 0.62, 0.3) * (L * 0.25 + 0.2) + vec3(0.85, 0.62, 0.3) * env(R, 0.8) * 1.2; }               // gold lid
  else c = vec3(0.04) * L + vec3(0.1) * fres;                                                                 // lantern iron
`;function Xf(i){return ii({dir:"houseofmoh",parts:["room",{name:"ground",planar:!0}],way:b_,chapters:ih,palette:E_,textures:{sand:{id:"coast_sand_01",s:2.4},wet:{id:"damp_beach_sand",s:2},plank:{id:"weathered_planks",s:1.8},rock:{id:"coast_sand_rocks_02",s:4}},sun:[.2,.15,-1],sunCol:[1,.62,.42],scatter:1.1,closeUps:[[nn,Zi,Ot,2.6]],sky:{file:"kiara_9_dusk_sky.webp",exposure:1.05,rot:2.429,cut:0},envAt:[nn,Zi+.4,Ot],background:[.2,.25,.4],fog:{col:[.42,.42,.55],k:.0035},exposure:1.05,entry:{origin:[0,0,-66],yaw:Math.PI},exit:{origin:[nn+2,Xs(Ot)+16,Ot+10],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,loader:o,base:a,unpack:l,groundLm:c}=e,u=s==="high",h=new E(-.3,.42,.86).normalize(),d=new E(.2,.05,-1).normalize(),p=`uniform sampler2D tSky; uniform float uSkyRot;
        vec3 skyCol(vec3 d){ float lon = atan(d.z, d.x) + uSkyRot, lat = asin(clamp(d.y, -1.0, 1.0));
          return pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)); }`,g=e.sky,x=new Me(new bt(4e3,4e3,u?400:240,u?400:240),new Se({transparent:!0,depthWrite:!1,side:pt,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol,uFogK:r.uFogK,tSky:g.material.uniforms.tSky,uSkyRot:g.material.uniforms.uRot},vertexShader:`uniform float uTime; varying vec3 vW; varying float vCrest;
          void main(){ vec3 p = (modelMatrix * vec4(position, 1.0)).xyz;
            float w1 = sin(p.z * 0.35 + uTime * 1.1 + sin(p.x * 0.05) * 1.5), w2 = sin(p.x * 0.21 - p.z * 0.17 + uTime * 0.7), w3 = sin(p.z * 0.9 + p.x * 0.3 + uTime * 1.9);
            float shoal = smoothstep(-40.0, -8.0, p.z);                            // the swell grows as it shoals
            p.y += (w1 * 0.16 + w2 * 0.08 + w3 * 0.03) * (0.6 + shoal * 0.8); vCrest = w1 * 0.5 + 0.5; vW = p;
            gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uTime; uniform vec3 uFogCol; uniform float uFogK; varying vec3 vW; varying float vCrest; ${Wf} ${p}
          float wn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5), b = fract(sin(dot(i + vec2(1, 0), vec2(127.1, 311.7))) * 43758.5),
            c = fract(sin(dot(i + vec2(0, 1), vec2(127.1, 311.7))) * 43758.5), d = fract(sin(dot(i + vec2(1, 1), vec2(127.1, 311.7))) * 43758.5); return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
          // the slope of a sum of wave trains (long swell to fine chop), for a real, sharp water normal
          vec2 waveSlope(vec2 p, float t){ vec2 g = vec2(0.0);
            vec2 D[6]; D[0] = normalize(vec2(0.1, 1.0)); D[1] = normalize(vec2(0.35, 1.0)); D[2] = normalize(vec2(-0.3, 1.0)); D[3] = normalize(vec2(0.8, 0.6)); D[4] = normalize(vec2(-0.7, 0.7)); D[5] = normalize(vec2(0.2, -1.0));
            float L[6]; L[0] = 9.0; L[1] = 5.3; L[2] = 3.1; L[3] = 1.7; L[4] = 0.95; L[5] = 0.55;
            for (int i = 0; i < 6; i++) { float k = 6.2831 / L[i], A = 0.045 * L[i] / 9.0 + 0.004, ph = dot(D[i], p) * k + t * sqrt(9.8 * k);
              g += D[i] * k * A * cos(ph); }
            return g; }
          void main(){ float depth = -hmH(vW.x, vW.z); vec3 V = normalize(cameraPosition - vW);
            vec2 sl = waveSlope(vW.xz, uTime) + (vec2(wn(vW.xz * 3.0 + uTime * 0.8), wn(vW.xz * 3.0 - uTime * 0.7 + 9.0)) - 0.5) * 0.12;
            vec3 n = normalize(vec3(-sl.x, 1.0, -sl.y));
            if (cameraPosition.y < vW.y) {                                  // from below: Snell's window, the dusk sky bent through the moving skin; beyond it the surface mirrors the deep
              vec3 nb = normalize(vec3(sl.x * 1.6, -1.0, sl.y * 1.6)); vec3 I = -V; vec3 T = refract(I, nb, 1.33);
              float win = dot(T, T) > 0.0 ? 1.0 : 0.0;
              vec3 sky = skyCol(normalize(T + vec3(0.0, 0.05, 0.0))) * 1.6 + vec3(1.0, 0.75, 0.5) * pow(max(dot(normalize(T), normalize(vec3(0.2, 0.06, -1.0))), 0.0), 40.0) * 2.0;
              vec3 deepU = vec3(0.03, 0.2, 0.26) * (0.8 + 0.4 * wn(vW.xz * 0.5 + uTime * 0.2));
              float edge = smoothstep(0.0, 0.25, dot(T, T));
              vec3 cu = mix(deepU, sky, win * edge);
              cu += vec3(0.6, 0.9, 1.0) * pow(wn(vW.xz * 2.0 + sl * 4.0 + uTime * 0.3), 6.0) * 0.6 * win;   // caustic sparkle on the skin
              float du = length(vW - cameraPosition); cu = mix(cu, uFogCol, 1.0 - exp(-du * 0.03));
              gl_FragColor = vec4(cu, 1.0); return; }
            vec3 R = reflect(-V, n); R.y = abs(R.y);
            float fr = 0.02 + 0.98 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
            vec3 deep = vec3(0.008, 0.05, 0.085), shallow = vec3(0.08, 0.36, 0.38);
            vec3 body = mix(shallow, deep, smoothstep(0.3, 7.0, depth)) * (0.8 + 0.5 * smoothstep(0.0, 0.25, sl.y + sl.x * 0.3));   // light through the crests
            vec3 c = mix(body, skyCol(R), fr);
            vec3 SUN = normalize(vec3(0.2, 0.06, -1.0));
            c += vec3(1.0, 0.72, 0.45) * (pow(max(dot(R, SUN), 0.0), 900.0) * 18.0 + pow(max(dot(R, SUN), 0.0), 60.0) * 0.5);   // the sun's glitter path
            float lace = smoothstep(0.55, 0.85, wn(vW.xz * 2.2 + vec2(uTime * 0.3, 0.0)) * 0.6 + wn(vW.xz * 7.0 - uTime * 0.5) * 0.4);
            float run = 0.35 + 0.25 * sin(vW.x * 0.25 + uTime * 0.9) + 0.15 * sin(uTime * 0.37);
            float foam = (1.0 - smoothstep(0.0, run, depth)) * (0.45 + 0.55 * lace);
            foam += smoothstep(run, run + 0.6, depth) * (1.0 - smoothstep(run + 0.6, run + 1.6, depth)) * lace * 0.45;   // the broken lace behind the wave
            foam += smoothstep(0.86, 1.0, vCrest) * smoothstep(-20.0, -6.0, vW.z) * lace * 0.5;
            c = mix(c, vec3(0.82, 0.84, 0.88) * (0.6 + 0.4 * dot(n, vec3(0.0, 1.0, 0.0))), clamp(foam, 0.0, 1.0));
            float a = clamp(0.35 + depth * 0.9, 0.3, 0.96); a = max(a, foam);
            if (depth < -0.05) discard;
            float d = length(vW - cameraPosition); c = mix(c, uFogCol, (1.0 - exp(-d * uFogK)) * 0.55);
            gl_FragColor = vec4(c, a); }`}));x.rotation.x=-Math.PI/2,x.position.set(0,0,-120),x.renderOrder=4,x.frustumCulled=!1,t.add(x);let m=h.clone(),f={uTime:r.uTime,uSun:{value:m},uFogCol:r.uFogCol,uFogK:r.uFogK},_=new Qe(...n.rect),w=n.items.filter(Y=>!(Y[0].startsWith("coast_rocks")&&Y[3]<zo-1&&Math.abs(Y[1]-1)<22)),v=await Ii({base:a,unpack:l,loader:o,U:f,groundLm:c,groundK:n.lm.ground,rect:_,tier:s,layout:{items:w}}).catch(()=>null);v&&(t.add(v.group),v.fade.value=1);let C=await new Promise(Y=>o.load(a+"bisikaapi/leaves.webp",ve=>{ve.colorSpace=Nt,ve.anisotropy=4,Y(ve)})),R=(Y,ve,ce)=>{let Ee=new $e,J=[],re=[],L=[],me=[],ae=ce,ge=()=>(ae=ae*16807%2147483647)/2147483647;for(let ue=0;ue<Y;ue++){let Fe=new E(ge()-.5,ge()-.5,ge()-.5).multiplyScalar(1.6),xe=new E(ge()-.5,.2+ge()*.7,ge()-.5).normalize(),I=new E().crossVectors(xe,new E(ge()-.5,ge()-.5,ge()-.5)).normalize(),b=.75+ge()*.5,G=Math.floor(ge()*16),ne=G%4/4,de=1-(Math.floor(G/4)+1)/4,oe=J.length/3;for(let[ze,Ae]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let Te=Fe.clone().addScaledVector(I,ze*ve*b).addScaledVector(xe,Ae*ve*b);J.push(Te.x,Te.y,Te.z),re.push(ne+(ze+1)/8,de+(Ae+1)/8),me.push(Fe.length()/1.1)}L.push(oe,oe+1,oe+2,oe,oe+2,oe+3)}return Ee.setAttribute("position",new Ze(J,3)),Ee.setAttribute("uv",new Ze(re,2)),Ee.setAttribute("aOut",new Ze(me,1)),Ee.setIndex(L),Ee},A=(Y,ve)=>{let ce=new ni;ce.index=Y.index;for(let Ee of["position","uv","aOut"])ce.attributes[Ee]=Y.attributes[Ee];return ce.setAttribute("aC",new Xt(new Float32Array(ve.flatMap(Ee=>[Ee[0],Ee[1],Ee[2],Ee[3]])),4)),ce.setAttribute("aT",new Xt(new Float32Array(ve.flatMap((Ee,J)=>[Ee[4],J*.6180339%1])),2)),ce.instanceCount=ve.length,ce},T=new Se({side:pt,uniforms:{...f,tLeaf:{value:C},tLm:{value:c},uK:{value:n.lm.ground},uRect:{value:_}},vertexShader:`uniform float uTime; uniform vec4 uRect; uniform sampler2D tLm; uniform float uK; attribute vec4 aC; attribute vec2 aT; attribute float aOut;
          varying vec2 vUv; varying vec3 vW, vN; varying float vOut, vType, vVar, vLit;
          vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
          void main(){ vUv = uv; vOut = aOut; vType = aT.x; vVar = aT.y;
            float a = aT.y * 6.283; mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a)); vec3 p = position; p.xz = rot * p.xz; p *= aC.w * smoothstep(0.6, 2.2, distance(aC.xyz, cameraPosition) - aC.w);
            float sway = sin(uTime * 1.1 + aC.x * 0.4 + aC.z * 0.3) * 0.08 * (0.5 + 0.5 * aOut);
            float flut = sin(uTime * 4.4 + position.x * 13.0 + position.z * 7.0 + aT.y * 40.0) * 0.025 * aC.w * aOut;   // leaves flicker in the sea breeze
            vec3 w = aC.xyz + p + vec3(sway + flut, flut * 0.6, sway * 0.5 - flut * 0.4); vN = normalize(vec3(p.x, p.y * 0.6 + aC.w * 0.4, p.z));
            vec2 lu = vec2((aC.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - aC.z) / (uRect.w - uRect.z));
            vLit = clamp(dot(lmDecode(texture2D(tLm, clamp(lu, 0.002, 0.998)).rgb, uK), vec3(0.333)) * 1.4, 0.3, 1.4);
            vW = w; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:`uniform sampler2D tLeaf; uniform vec3 uSun, uFogCol; uniform float uFogK; varying vec2 vUv; varying vec3 vW, vN; varying float vOut, vType, vVar, vLit;
          void main(){ vec4 t = texture2D(tLeaf, vUv); if (t.a < 0.45) discard;
            vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n; vec3 V = normalize(cameraPosition - vW);
            vec3 alb = t.rgb * (vType < 0.5 ? vec3(0.9, 1.0, 0.75) : vec3(0.75, 0.95, 0.7)) * mix(0.9, 1.1, vVar);
            float ao = mix(0.5, 1.0, clamp(vOut, 0.0, 1.0)), nl = clamp(dot(n, uSun) * 0.5 + 0.5, 0.0, 1.0);
            vec3 c = alb * (vec3(0.55, 0.6, 0.8) * 0.9 * nl * vLit + vec3(0.32, 0.26, 0.3) * 0.7) * ao;
            c += vec3(0.7, 0.75, 0.9) * pow(max(dot(reflect(-V, n), uSun), 0.0), 30.0) * 0.25;
            float d = length(vW - cameraPosition); c = mix(c, uFogCol, 1.0 - exp(-d * uFogK)); gl_FragColor = vec4(c, 1.0); }`}),M=new Me(A(R(u?70:42,.2,5),n.clusters.filter(Y=>Y[4]===0).map(Y=>[Y[0],Y[1]+.15,Y[2],Y[3]*1.7,0])),T);M.frustumCulled=!1,t.add(M);let y=new Me(A(R(u?64:40,.11,13),n.clusters.filter(Y=>Y[4]===1)),T);y.frustumCulled=!1,t.add(y);let S=(Y,ve)=>{let ce=[],Ee=[],J=[];ce.push(0,0,0),Ee.push(0,0,0);for(let L=0;L<5;L++)for(let me=1;me<=4;me++)for(let ae=-1;ae<=1;ae++){let ge=L*1.2566+ae*.42*Math.sin(me/4*Math.PI*.9+.3)+me/4*.35,ue=Y*(me/4);ce.push(Math.cos(ge)*ue,ve*(me/4)**2*Y,Math.sin(ge)*ue),Ee.push(me/4,0,0)}for(let L=0;L<5;L++){let me=1+L*12;J.push(0,me+1,me),J.push(0,me+2,me+1);for(let ae=0;ae<3;ae++)for(let ge=0;ge<2;ge++){let ue=me+ae*3+ge,Fe=ue+3;J.push(ue,Fe,ue+1,ue+1,Fe,Fe+1)}}let re=new $e;return re.setAttribute("position",new Ze(ce,3)),re.setAttribute("aR",new Ze(Ee.filter((L,me)=>me%3===0),1)),re.setIndex(J),re.computeVertexNormals(),re},N=(Y,ve)=>new Se({side:pt,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol,uFogK:r.uFogK,uIn:{value:new ye(...Y)},uOut:{value:new ye(...ve)},uMoon:{value:h}},vertexShader:`uniform float uTime; attribute float aR; varying float vR; varying vec3 vN, vW; void main(){ vR = aR; vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vec3 o = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;               // each flower nods in the sea breeze, the petals flutter a little
          w.xyz += vec3(sin(uTime * 1.7 + o.x * 0.8 + o.z * 0.6), 0.0, cos(uTime * 1.4 + o.z * 0.7)) * 0.03 + vec3(0.0, sin(uTime * 6.0 + o.x * 9.0 + aR * 5.0) * 0.006 * aR, 0.0); vW = w.xyz; vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 uIn, uOut, uFogCol, uMoon; uniform float uFogK; varying float vR; varying vec3 vN, vW;
          void main(){ vec3 n = normalize(vN); vec3 alb = mix(uIn, uOut, smoothstep(0.15, 0.6, vR));
            vec3 c = alb * (0.45 + 0.55 * abs(dot(n, uMoon))) * vec3(0.75, 0.75, 0.9) + alb * 0.12;
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * uFogK)), 1.0); }`}),D=new Ke,F=new At,B=new vn,U=new E,H=new E;for(let[Y,ve,ce,Ee,J]of[[0,.075,.5,[1,.82,.25],[.98,.95,.88]],[1,.11,.7,[.35,.02,.05],[.85,.08,.1]]]){let re=n.flowers.filter(me=>me[3]===Y),L=new Xn(S(ve,ce),N(Ee,J),re.length);L.frustumCulled=!1,re.forEach((me,ae)=>{B.set((Math.random()-.5)*1.6,Math.random()*6.28,(Math.random()-.5)*1.6),F.setFromEuler(B),D.compose(H.set(me[0],me[1],me[2]),F,U.setScalar(.8+Math.random()*.4)),L.setMatrixAt(ae,D)}),t.add(L)}let z=(()=>{let Y=document.createElement("canvas");Y.width=Y.height=128;let ve=Y.getContext("2d"),ce=ve.createRadialGradient(64,64,0,64,64,64);return ce.addColorStop(0,"rgba(255,210,150,1)"),ce.addColorStop(.2,"rgba(255,170,90,0.5)"),ce.addColorStop(1,"rgba(255,120,40,0)"),ve.fillStyle=ce,ve.fillRect(0,0,128,128),new mi(Y)})(),O=[];for(let[Y,ve,ce]of n.lanterns){let Ee=new Me(new bn(.22,.34,.22),new Wn({color:new ye(3.2,1.9,.9)}));Ee.position.set(Y,ve,ce),t.add(Ee);let J=new La(new _o({map:z,color:16777215,transparent:!0,depthWrite:!1,blending:wt,opacity:.8}));J.position.set(Y,ve,ce),J.scale.setScalar(1.6),J.renderOrder=6,t.add(J),O.push({halo:J,glass:Ee,ph:Math.random()*6.28})}let X=u?600:260,ee=new $e,pe=new Float32Array(X*3);for(let Y=0;Y<X;Y++)pe[Y*3]=(Math.random()-.5)*50,pe[Y*3+1]=Math.random()*6,pe[Y*3+2]=Math.random()*60-10;ee.setAttribute("position",new Xe(pe,3));let be=new qt(ee,new Se({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA, vT; void main(){ vec3 p = position; float t = uTime * 0.25 + p.x * 0.1;
          p.x = mod(p.x + uTime * 0.6 + 25.0, 50.0) - 25.0; p.y = 0.4 + mod(p.y - uTime * 0.12, 6.0) + sin(t * 3.0) * 0.2; p.z += sin(t * 2.0 + p.y) * 0.6; vT = fract(position.z * 7.31);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = 1.0 - smoothstep(18.0, 40.0, -mv.z); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.07 * uPx / -mv.z, 1.5, 9.0); }`,fragmentShader:`varying float vA, vT; void main(){ vec2 d = gl_PointCoord - 0.5; d.x *= 1.8; float a = (1.0 - smoothstep(0.15, 0.25, dot(d, d))) * vA * 0.85;
          gl_FragColor = vec4(mix(vec3(0.98, 0.93, 0.85), vec3(0.95, 0.55, 0.6), step(0.7, vT)), a); }`}));be.frustumCulled=!1,be.renderOrder=7,t.add(be),t.add(new ei(10465496,2760728,.8));{let Y=(xe,I=72)=>new Ai(xe.map(([b,G])=>new ie(b,G)),I),ve=new kt({color:15920354,roughness:.16,metalness:0,envMap:e.envTex,envMapIntensity:.9}),ce=new kt({color:14267498,roughness:.32,metalness:1,envMap:e.envTex,envMapIntensity:1.2}),Ee=new Me(Y([[0,0],[.085,0],[.093,.004],[.098,.02],[.1,.075],[.096,.086],[.088,.09],[.088,.096],[0,.096]]),ve),J=new Me(Y([[0,.094],[.094,.094],[.1,.098],[.102,.122],[.098,.13],[.06,.133],[0,.133]]),ce);for(let xe of[Ee,J])xe.position.set(nn,Zi+.001,Ot),t.add(xe);let re=new bn(.62,.16,.44,8,2,6),L=re.attributes.position;for(let xe=0;xe<L.count;xe++){let I=L.getX(xe),b=L.getY(xe),G=L.getZ(xe),ne=1+.03*Math.sin(I*23+G*17);L.setX(xe,I*ne),L.setZ(xe,G*ne),b>0&&L.setY(xe,b+.006*Math.sin(I*40)*Math.cos(G*37))}re.computeVertexNormals();let me=e.texU.tD_sand.value.clone(),ae=e.texU.tN_sand.value.clone();for(let xe of[me,ae])xe.repeat.set(.7,.5),xe.needsUpdate=!0;let ge=new Me(re,new kt({map:me,normalMap:ae,normalScale:new ie(1.6,1.6),roughness:.92,color:15786700}));ge.position.set(nn,Zi-.08,Ot),ge.rotation.y=.2,t.add(ge);let ue=new ti(16757898,1.4);ue.position.set(nn+4,Zi+3,Ot-12),ue.target.position.set(nn,Zi,Ot),t.add(ue,ue.target);let Fe=new qa(16754784,2.2,6,2);Fe.position.set(nn-1.3,Zi+.6,Ot-1.6),t.add(Fe)}let q=Wr({U:r,lm:c,K:n.lm.ground,rect:n.rect,sun:new E(.2,.15,-1),tile:60,count:u?12e4:5e4,fade:[22,30],height:.85,wide:1.1,tip:[.42,.42,.2],dry:[.6,.52,.32],root:[.1,.1,.05],wind:1.5,seed:11,heightGLSL:`${Wf} float groundY(vec2 p){ return hmH(p.x, p.y); }`,maskGLSL:`float grassMask(vec2 p){ float wx = 2.0 + 1.6 * sin(p.y * 0.06);
          return smoothstep(0.45, 0.9, hmH(p.x, p.y)) * smoothstep(1.9, 2.8, abs(p.x - wx)) * smoothstep(2.2, 3.2, distance(p, vec2(${nn.toFixed(2)}, ${Ot.toFixed(1)})))
            * smoothstep(0.3, 0.62, gn(p * 0.16) * 0.7 + gn(p * 0.9) * 0.3); }`});t.add(q.mesh);let te=r.uFogCol.value.clone(),Q=r.uFogK.value,K=t.background.clone();return{update(Y,ve,ce,Ee){let J=Ee.position.y<.05*Math.sin(Y);r.uFogCol.value.copy(J?new ye(.05,.27,.33):te),r.uFogK.value=J?.06:Q,t.background.copy(J?new ye(.05,.27,.33):K),g.visible=!J,q.update(Ee);for(let re of O){let L=.85+.1*Math.sin(Y*9+re.ph)*Math.sin(Y*5.3+re.ph*2);re.halo.material.opacity=.55*L,re.halo.scale.setScalar(1.5+.15*L)}},setPx(Y){be.material.uniforms.uPx.value=Y,q.setPx(1/Y)}}}},i)}Et();var Di=i=>Math.sin(i*.02)*10,sh=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},hn=-130;function ll(i,e){let t=(1-sh(-140,70,e))*78,n=Math.abs(i-Di(e)),s=-Math.pow(n*.18,1.7)*3,r=Math.sin(i*.11+e*.07)*1.6+Math.sin(i*.31-e*.23)*.6+Math.abs(Math.sin(i*.05+e*.03))*4,o=Math.min(1,n/4),a=1-sh(6,16,Math.hypot(i-Di(hn),e-hn)),l=(1-sh(-140,70,hn))*78+2;return(t+s+r*(.35+.65*o))*(1-a)+l*a}var $i=(i,e=0,t=1.75)=>[Di(i)+e,ll(Di(i)+e,i)+t,i],Nn=Di(hn),Li=ll(Nn,hn),S_=[{pos:[Di(84),ll(Di(84),84)+22,86],tgt:$i(40,0,0),w:.8},{pos:[Di(72)+4,ll(Di(72)+4,72)+8,74],tgt:$i(30,0,2),w:1.1},{pos:$i(46,1.2),tgt:$i(20,0,2.6),w:1},{pos:$i(4,-1),tgt:$i(-24,0,3.4),w:1},{pos:$i(-46,1),tgt:$i(-80,0,4),w:1},{pos:$i(-92,-.8),tgt:[Nn,Li+2.4,hn],w:1.1},{pos:[Nn+3.5,Li+2.4,hn+13],tgt:[Nn-.4,Li+1.6,hn],w:1.3},{pos:[Nn+7,Li+3.2,hn+9],tgt:[Nn-30,Li+140,hn-170],w:0}],rh=[{at:[.04,1.01],kick:"Our platform \xB7 Cosmos",line:"Cosmos: our real estate platform, designed in-house from the first sketch."}],eM=new E(-.4,.5,-1).normalize(),T_=`uniform sampler2D tSky; uniform float uSkyRot;
  vec3 nightSky(vec3 d){ float lon = atan(d.z, d.x) + uSkyRot, lat = asin(clamp(d.y, -1.0, 1.0));
    return pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)) * 1.2; }`,A_=`
  
  if (k < 1.0 && abs(vW.x - ${Nn.toFixed(2)}) < 8.9 && abs(vW.z - ${hn.toFixed(1)}) < 6.4 && vW.y > ${(Li+.1).toFixed(2)}) discard;   // no drift inside the pavilion
  if (k < 1.0) {                                      // real snow: wind-packed crust, moonlit, a sparkle of crystals
    vec3 nd = N_snow(vW, n, 1.0);
    float macro = tri(vW * 0.04, vec3(0.0, 1.0, 0.0), 1.0).r, sas = 0.5 + 0.5 * sin(dot(vW.xz, vec2(0.55, 0.83)) * 0.9 + macro * 6.0);   // wind-sculpted sastrugi
    c = D_snow(vW, n) * vec3(0.9, 0.94, 1.02) * L * 0.85 * relief(nd, n) * (0.7 + 0.4 * macro + 0.16 * sas) + vec3(0.04, 0.05, 0.09);
    float gl = step(0.9975, fract(sin(dot(floor(vW * 9.0), vec3(12.9, 78.2, 37.7))) * 43758.5));
    c += vec3(0.85, 0.92, 1.0) * gl * pow(max(dot(reflect(-V, nd), uSunDir), 0.0), 2.0) * 2.5;
  }
  else if (k < 2.0) { vec3 nd = N_rock(vW, n, 1.3); c = mix(D_rock(vW, n) * vec3(0.7, 0.78, 0.92) * L * 1.1 * relief(nd, n), D_snow(vW, n) * L * 0.85, smoothstep(0.55, 0.85, nd.y)); }   // cold granite in moonlight   // granite, snow lying on its ledges
  else if (k < 3.0) { vec3 nd = N_conc(vW, n, 1.0); c = D_conc(vW, n) * L * 1.15 * relief(nd, n); }       // brushed concrete
  else if (k < 4.0) discard;                                                                               // the glass is drawn live (see-through)
  else if (k < 5.0) c = vec3(0.04) * L + vec3(0.12, 0.13, 0.16) * fres;                                        // dark steel
  else if (k < 6.0) c = D_oak(vW, n) * L * 1.15;                                                             // oak, in lamplight
  else c = vec3(0.95, 0.94, 0.9) * L;                                                                      // the white model
`;function qf(i){return ii({dir:"cosmos",parts:["room",{name:"ground",planar:!0}],way:S_,chapters:rh,palette:A_,textures:{snow:{id:"snow_02",s:3},rock:{id:"rock_face_03",s:4},conc:{id:"brushed_concrete",s:2},oak:{id:"oak_wood_planks",s:1.6}},sun:[-.4,.5,-1],sunCol:[.55,.65,.95],scatter:.35,sky:{file:"rogland_moonlit_night_sky.webp",exposure:1,rot:2.573,cut:.4,haze:[.16,.22,.36]},background:[.03,.05,.1],fog:{col:[.16,.22,.36],k:.0026},exposure:1.25,entry:{origin:[Di(84),0,86],yaw:0},exit:{origin:[Nn+7,Li+3.2,hn+9],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,base:o,unpack:a,loader:l}=e,c=s==="high",u=e.sky,h={tSky:u.material.uniforms.tSky,uSkyRot:u.material.uniforms.uRot},d=await Ii({base:o,unpack:a,loader:l,U:{uTime:r.uTime,uSun:{value:new E(-.4,.5,-1).normalize()},uFogCol:r.uFogCol,uFogK:r.uFogK},groundLm:e.groundLm,groundK:n.lm.ground,rect:new Qe(...n.rect),tier:s,layout:{items:(n.items||[]).map(T=>T[0]==="rock_07"?["rock_09",T[1],T[2]-.15,T[3],T[4],T[5]*2.2]:T)}}).catch(()=>null);d&&(t.add(d.group),d.fade.value=1);{let y=new $e,S=[],N=[],D=(z,O)=>{let X=Math.sin(z*127.1+O*311.7)*43758.5453;return X-Math.floor(X)},F=(z,O)=>{let X=Math.floor(z),ee=Math.floor(O),pe=z-X,be=O-ee,q=pe*pe*(3-2*pe),te=be*be*(3-2*be);return(D(X,ee)*(1-q)+D(X+1,ee)*q)*(1-te)+(D(X,ee+1)*(1-q)+D(X+1,ee+1)*q)*te},B=(z,O)=>{let X=0,ee=1,pe=1,be=1;for(let q=0;q<6;q++){let te=1-Math.abs(F(z*pe,O*pe)*2-1);te=te*te*be,X+=te*ee,be=Math.min(1,te*1.8),ee*=.5,pe*=2.03}return X};for(let z=0;z<220;z++)for(let O=0;O<=360;O++){let X=z/219,ee=650+X*1300,pe=O/360*Math.PI*2,be=Math.cos(pe)*ee,q=-40+Math.sin(pe)*ee,te=Math.pow(F(Math.cos(pe)*2.2+5,Math.sin(pe)*2.2+5),1.4),Q=B(be/520,q/520)*230*(.45+.9*te)*Math.sin(Math.min(1,X*1.6)*Math.PI*.5)*(1-.35*X)-20;S.push(be,Q,q)}for(let z=0;z<219;z++)for(let O=0;O<360;O++){let X=z*361+O,ee=X+360+1;N.push(X,ee,X+1,X+1,ee,ee+1)}y.setAttribute("position",new Ze(S,3)),y.setIndex(N),y.computeVertexNormals();let U=z=>e.texU[z].value,H=new Me(y,new Se({uniforms:{tS:{value:U("tD_snow")},tR:{value:U("tD_rock")},uFogCol:r.uFogCol,uMoon:{value:new E(-.4,.5,-1).normalize()}},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tS, tR; uniform vec3 uFogCol, uMoon; varying vec3 vW, vN;
            vec3 tri(sampler2D t, vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0)); return texture2D(t, p.zy * s).rgb * w.x + texture2D(t, p.xz * s).rgb * w.y + texture2D(t, p.xy * s).rgb * w.z; }
            void main(){ vec3 Nf = normalize(cross(dFdx(vW), dFdy(vW))); if (Nf.y < 0.0) Nf = -Nf; vec3 n = normalize(mix(normalize(vN), Nf, 0.6));
              vec3 rock = tri(tR, vW, n, 1.0 / 40.0) * vec3(0.55, 0.6, 0.72), snowT = tri(tS, vW, n, 1.0 / 25.0);
              float slope = 1.0 - n.y, hold = 1.0 - smoothstep(0.38, 0.62, slope + (dot(rock, vec3(0.333)) - 0.35) * 0.4);   // snow lies where it can
              vec3 alb = mix(rock * 0.5, snowT * vec3(0.92, 0.96, 1.05), hold);
              float moon = max(dot(n, uMoon), 0.0), sky = 0.5 + 0.5 * n.y;
              vec3 c = alb * (vec3(0.55, 0.62, 0.85) * moon * 0.9 + vec3(0.08, 0.1, 0.16) * sky);
              float d = length(vW - cameraPosition); c = mix(c, uFogCol * 1.25, 1.0 - exp(-d * 0.0008));            // night haze: each range fainter than the one before
              gl_FragColor = vec4(c, 1.0); }`}));H.renderOrder=1,H.frustumCulled=!1,t.add(H)}let p=new Me(new bt(3e3,3e3,1,1),new Se({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; varying vec3 vW;
          float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5), b = fract(sin(dot(i + vec2(1, 0), vec2(127.1, 311.7))) * 43758.5),
            c = fract(sin(dot(i + vec2(0, 1), vec2(127.1, 311.7))) * 43758.5), d = fract(sin(dot(i + vec2(1, 1), vec2(127.1, 311.7))) * 43758.5); return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
          float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
          void main(){ vec2 p = vW.xz * 0.006 + vec2(uTime * 0.004, uTime * 0.002); float f = fbm(p), g = fbm(p * 2.5 + 3.0);
            vec3 c = mix(vec3(0.12, 0.16, 0.27), vec3(0.62, 0.68, 0.82), smoothstep(0.35, 0.8, f) * (0.7 + 0.3 * g));
            float d = length(vW.xz - cameraPosition.xz); float a = smoothstep(0.25, 0.55, f) * (1.0 - smoothstep(1200.0, 1500.0, d));
            gl_FragColor = vec4(c, a * 0.95); }`}));p.rotation.x=-Math.PI/2,p.position.y=-4,p.renderOrder=3,p.frustumCulled=!1,t.add(p);let g=c?6e3:2500,x=new $e,m=new Float32Array(g*3);for(let T=0;T<g;T++)m[T*3]=Math.random()*60,m[T*3+1]=Math.random()*30,m[T*3+2]=Math.random()*60;x.setAttribute("position",new Xe(m,3));let f=new qt(x,new Se({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uCam:{value:new E},uPx:{value:600}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA;
          varying float vSoft, vGlint;
          void main(){ vec3 p = position; float sz = 0.5 + 1.5 * pow(fract(p.y * 13.7), 3.0);                 // a few big flakes among many small
            float gust = 0.7 + 0.6 * sin(uTime * 0.31 + p.z * 0.02);
            p.y -= uTime * (0.7 + fract(p.x * 7.3) * 0.5) * (0.8 + 0.4 / sz); p.x += uTime * 1.3 * gust + sin(uTime * 0.9 + p.z) * 0.45 * sz; p.z += sin(uTime * 0.6 + p.x * 1.3) * 0.4;
            p = mod(p - uCam + vec3(30.0, 15.0, 30.0), vec3(60.0, 30.0, 60.0)) + uCam - vec3(30.0, 15.0, 30.0);
            vec4 mv = viewMatrix * vec4(p, 1.0); float z = -mv.z;
            vSoft = 1.0 - smoothstep(0.6, 3.0, z);                          // close to the lens: big and out of focus
            vGlint = step(0.93, fract(p.x * 3.1 + p.z * 1.7 + uTime * 0.7));
            vA = (1.0 - smoothstep(14.0, 32.0, z)) * mix(0.85, 0.35, vSoft); gl_Position = projectionMatrix * mv;
            gl_PointSize = clamp(0.055 * sz * uPx / z, 1.0, 40.0); }`,fragmentShader:`varying float vA, vSoft, vGlint; void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d, d);
          float a = (1.0 - smoothstep(mix(0.04, 0.12, vSoft), 0.25, r)) * vA;
          gl_FragColor = vec4(vec3(0.9, 0.94, 1.0) * (1.0 + vGlint * 1.5), a); }`}));f.frustumCulled=!1,f.renderOrder=8,t.add(f);let _=c?3500:1400,w=new $e,v=new Float32Array(_*3);for(let T=0;T<_;T++)v[T*3]=Math.random()*40,v[T*3+1]=Math.random(),v[T*3+2]=Math.random()*40;w.setAttribute("position",new Xe(v,3));let C=new qt(w,new Se({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uCam:{value:new E},uPx:{value:600}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA;
          void main(){ vec3 p = position; float sp = 4.0 + fract(p.z * 3.7) * 3.0; p.x += uTime * sp; p.z += sin(uTime * 1.3 + p.x * 0.4) * 0.6;
            p.xz = mod(p.xz - uCam.xz + 20.0, 40.0) + uCam.xz - 20.0; p.y = uCam.y - 1.7 + p.y * p.y * 1.1 + sin(uTime * 2.0 + p.x) * 0.06;
            vec4 mv = viewMatrix * vec4(p, 1.0); vA = (1.0 - smoothstep(6.0, 18.0, -mv.z)) * 0.5 * (0.5 + 0.5 * sin(p.x * 0.3 + uTime));
            gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.05 * uPx / -mv.z, 1.0, 5.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.05, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.9, 0.94, 1.0), a); }"}));C.frustumCulled=!1,C.renderOrder=8,t.add(C);let R=new Me(new on(14,24,12),new Se({transparent:!0,depthWrite:!1,blending:wt,side:zt,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uC; varying vec3 vW; void main(){ vec3 V = normalize(vW - cameraPosition); vec3 toC = uC - cameraPosition; float t = dot(toC, V); float d = length(toC - V * t);
          float a = exp(-d * d / 30.0) * 0.12; gl_FragColor = vec4(vec3(1.0, 0.7, 0.42) * a, a); }`,uniforms:{uC:{value:new E(Nn,Li+2.5,hn)}}}));R.position.set(Nn,Li+2.5,hn),R.renderOrder=9,t.add(R);let A=new Se({transparent:!0,depthWrite:!1,side:pt,uniforms:h,vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW, vN; ${T_} void main(){ vec3 V = normalize(cameraPosition - vW); vec3 n = normalize(vN); if (dot(n, V) < 0.0) n = -n;
          float fr = 0.04 + 0.96 * pow(1.0 - max(dot(n, V), 0.0), 5.0); vec3 R = reflect(-V, n);
          vec3 c = nightSky(normalize(R)) * 1.4 * fr + vec3(1.0, 0.7, 0.45) * 0.03; gl_FragColor = vec4(c, 0.1 + 0.75 * fr); }`});for(let[T,M,y,S]of[[Nn,hn+5.1,15.2,0],[Nn,hn-5.1,15.2,0],[Nn-7.6,hn,10.2,Math.PI/2],[Nn+7.6,hn,10.2,Math.PI/2]]){let N=new Me(new bt(y,4),A);N.position.set(T,Li+2.6,M),N.rotation.y=S,N.renderOrder=10,t.add(N)}return{update(T,M,y,S){f.material.uniforms.uCam.value.copy(S.position),C.material.uniforms.uCam.value.copy(S.position)},setPx(T){f.material.uniforms.uPx.value=T,C.material.uniforms.uPx.value=T}}}},i)}Et();var ri=(i,e,t)=>[i,e,t],R_=[{pos:ri(0,-10,60),tgt:ri(0,40,-60),w:1},{pos:ri(0,2,-20),tgt:ri(0,4,-90),w:1.1},{pos:ri(-8,6,-170),tgt:ri(0,30,-360),w:1.2},{pos:ri(4,2,-370),tgt:ri(0,0,-440),w:1.2},{pos:ri(0,3,-485),tgt:ri(0,4,-560),w:1},{pos:ri(0,4,-528),tgt:ri(0,4,-560),w:0}],oh=[{at:[0,.36],kick:"Client \xB7 Perseid Pictures",line:"Branding and website for Perseid Pictures: a studio that keeps its camera pointed at the stars."},{at:[.36,.74],kick:"And many more",line:"15+ more clients across India and the US, each one a star we're proud of."},{at:[.74,1.01],kick:"Nomadiic Horse Designs \xB7 Bangalore",line:"Branding and websites, built with obsessive detail. Let's build yours."}];async function Yf({tier:i}){let e=i==="high",t=new Gn;t.background=new ye(0,0,.004);let n={uTime:{value:0}},s=new Me(new on(4e3,64,32),new Se({side:zt,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`varying vec3 vD;
      float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9, 78.2, 37.7))) * 43758.5); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hh(i), hh(i + vec3(1, 0, 0)), f.x), mix(hh(i + vec3(0, 1, 0)), hh(i + vec3(1, 1, 0)), f.x), f.y), mix(mix(hh(i + vec3(0, 0, 1)), hh(i + vec3(1, 0, 1)), f.x), mix(hh(i + vec3(0, 1, 1)), hh(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      float fbm(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * n3(p); p *= 2.1; a *= 0.5; } return s; }
      void main(){ vec3 d = normalize(vD);
        vec3 pole = normalize(vec3(0.35, 0.55, 0.76)); float lat = dot(d, pole);
        float band = exp(-lat * lat * 9.0), core = exp(-lat * lat * 40.0);
        float dust = smoothstep(0.45, 0.75, fbm(d * 7.0)) * exp(-lat * lat * 60.0);
        vec3 c = vec3(0.6, 0.62, 0.75) * band * 0.16 * (0.6 + 0.8 * fbm(d * 4.0)) + vec3(1.0, 0.86, 0.66) * core * 0.18 * fbm(d * 9.0);
        c *= 1.0 - dust * 0.85;
        float s = hh(floor(d * 900.0)), b = hh(floor(d * 900.0) + 3.0);
        c += mix(vec3(0.75, 0.82, 1.0), vec3(1.0, 0.85, 0.7), b) * step(0.9965 - band * 0.004, s) * (0.25 + 1.5 * pow(b, 6.0));
        gl_FragColor = vec4(c, 1.0); }`}));s.renderOrder=-2,s.frustumCulled=!1,t.add(s);let r=5200,o=new E(0,-r-140,-380),a=new Me(new on(r,160,80),new Se({vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uC; varying vec3 vW, vN;
      float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9, 78.2, 37.7))) * 43758.5); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hh(i), hh(i + vec3(1, 0, 0)), f.x), mix(hh(i + vec3(0, 1, 0)), hh(i + vec3(1, 1, 0)), f.x), f.y), mix(mix(hh(i + vec3(0, 0, 1)), hh(i + vec3(1, 0, 1)), f.x), mix(hh(i + vec3(0, 1, 1)), hh(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW); vec3 q = (vW - uC) / 5200.0;
        float land = smoothstep(0.5, 0.56, n3(q * 6.0) * 0.6 + n3(q * 14.0) * 0.4);
        float metro = smoothstep(0.5, 0.72, n3(q * 40.0)) * land;
        float city = metro * (pow(n3(q * 1500.0), 7.0) * 2.2 + pow(n3(q * 420.0), 4.0) * 0.45);
        vec3 c = mix(vec3(0.004, 0.008, 0.02), vec3(0.012, 0.012, 0.01), land) + vec3(1.0, 0.72, 0.38) * city;
        float rim = pow(1.0 - max(dot(n, V), 0.0), 3.0); c += vec3(0.1, 0.25, 0.6) * rim * 0.6;
        gl_FragColor = vec4(c, 1.0); }`,uniforms:{uC:{value:o}}}));a.position.copy(o),t.add(a);let l=new Me(new on(r*1.018,160,80),new Se({transparent:!0,depthWrite:!1,blending:wt,side:zt,vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW, vN; void main(){ vec3 V = normalize(cameraPosition - vW); float f = pow(max(dot(vN, V), 0.0), 6.0);
      float side = smoothstep(-0.6, 0.9, normalize(vW).x * 0.0 + V.x * -0.6 + 0.4);
      vec3 c = mix(vec3(0.15, 0.4, 1.0), vec3(1.0, 0.55, 0.25), smoothstep(0.6, 1.0, f) * side) * f * 1.6; gl_FragColor = vec4(c, f); }`}));l.position.copy(o),l.renderOrder=2,t.add(l);let c=e?40:22,u=new $e,h=new Float32Array(c*6),d=new Float32Array(c*6);u.setAttribute("position",new Xe(h,3)),u.setAttribute("color",new Xe(d,3));let p=new Nr(u,new Ur({vertexColors:!0,transparent:!0,blending:wt,depthWrite:!1}));p.frustumCulled=!1,t.add(p);let g=new E(30,260,-520),x=Array.from({length:c},()=>({t0:Math.random()*6,dur:.6+Math.random()*.9,dir:new E,start:new E})),m=(y,S)=>{y.t0=S+Math.random()*3.5,y.dur=.5+Math.random()*.9,y.dir.set(Math.random()-.5,Math.random()-.75,Math.random()-.3).normalize(),y.start.copy(g).addScaledVector(new E(Math.random()-.5,Math.random()-.5,Math.random()-.5),160).addScaledVector(y.dir,40)};x.forEach(y=>m(y,0));let f=Array.from({length:16},(y,S)=>{let N=S/16*Math.PI*2;return new E(Math.cos(N+Math.sin(S)*.4)*(22+S%3*6),Math.sin(N*2)*12+S%4*3,-440+Math.sin(S*1.7)*18)}),_=(()=>{let y=document.createElement("canvas");y.width=y.height=64;let S=y.getContext("2d"),N=S.createRadialGradient(32,32,0,32,32,32);return N.addColorStop(0,"rgba(255,255,255,1)"),N.addColorStop(.2,"rgba(255,228,190,0.85)"),N.addColorStop(1,"rgba(255,170,90,0)"),S.fillStyle=N,S.fillRect(0,0,64,64),new mi(y)})(),w=new qt(new $e().setFromPoints(f),new bo({size:4.5,map:_,transparent:!0,blending:wt,depthWrite:!1,color:16769208}));t.add(w);let v=[0,3,6,9,12,15,2,5,8,11,14,1,4,7,10,13,0],C=new $e().setFromPoints(v.map(y=>f[y])),R=new wo(C,new Ur({color:15975034,transparent:!0,opacity:.55,blending:wt}));t.add(R);let A=vs(R_),T=new E,M=new E;return{key:"perseid",scene:t,chapters:oh,exposure:1,entry:{origin:[0,0,60],yaw:0},exit:{origin:[0,4,-528],yaw:0},pose(y,S){A.sample(y,T,M),S.position.copy(T),S.lookAt(M)},update(y,S,N){n.uTime.value=y,x.forEach((F,B)=>{let U=(y-F.t0)/F.dur;U>1&&(m(F,y),U=-1);let H=U>=0?Math.sin(Math.PI*U):0,z=F.start.clone().addScaledVector(F.dir,Math.max(U,0)*120),O=z.clone().addScaledVector(F.dir,-18-20*Math.max(U,0));h.set([z.x,z.y,z.z,O.x,O.y,O.z],B*6),d.set([H,H*.95,H*.85,0,0,0],B*6)}),u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0;let D=at.smoothstep(N,.42,.66);C.setDrawRange(0,Math.max(2,Math.floor(D*v.length))),R.material.opacity=.55*D},setPx(){},dispose(){t.traverse(y=>{y.geometry?.dispose?.();for(let S of[].concat(y.material||[]))S.dispose()})}}}Et();var C_=`
vec3 hash3(vec3 p){ p = fract(p * vec3(.1031,.1030,.0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx) * 2.0 - 1.0; }
float vnoise(vec3 p){ vec3 i = floor(p), f = fract(p); vec3 u = f*f*(3.-2.*f);
  return mix(mix(mix(dot(hash3(i), f), dot(hash3(i+vec3(1,0,0)), f-vec3(1,0,0)), u.x),
                 mix(dot(hash3(i+vec3(0,1,0)), f-vec3(0,1,0)), dot(hash3(i+vec3(1,1,0)), f-vec3(1,1,0)), u.x), u.y),
             mix(mix(dot(hash3(i+vec3(0,0,1)), f-vec3(0,0,1)), dot(hash3(i+vec3(1,0,1)), f-vec3(1,0,1)), u.x),
                 mix(dot(hash3(i+vec3(0,1,1)), f-vec3(0,1,1)), dot(hash3(i+vec3(1,1,1)), f-vec3(1,1,1)), u.x), u.y), u.z); }
vec3 curl(vec3 p){ float e = 0.1;
  vec3 dx = vec3(e,0,0), dy = vec3(0,e,0), dz = vec3(0,0,e);
  float x = vnoise(p+dy) - vnoise(p-dy) - vnoise(p+dz+7.1) + vnoise(p-dz+7.1);
  float y = vnoise(p+dz) - vnoise(p-dz) - vnoise(p+dx+3.7) + vnoise(p-dx+3.7);
  float z = vnoise(p+dx+1.3) - vnoise(p-dx+1.3) - vnoise(p+dy+5.9) + vnoise(p-dy+5.9);
  return vec3(x, y, z) / (2.0 * e); }
`;function Kf(i,{count:e,width:t=20,font:n="500 150px Satoshi, sans-serif",lineGap:s=1.05,letterSpacing:r=0}={}){let o=document.createElement("canvas"),a=o.getContext("2d");a.font=n;let l=i.map(f=>a.measureText(f)),c=parseFloat(/(\d+)px/.exec(n)[1]),u=Math.ceil(Math.max(...l.map(f=>f.width))+c*.4+r*30),h=Math.ceil(c*s*i.length+c*.4);o.width=u,o.height=h,a.font=n,a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",r&&(a.letterSpacing=r+"px"),i.forEach((f,_)=>a.fillText(f,u/2,c*.2+c*s*(_+.5)));let d=a.getImageData(0,0,u,h).data,p=[];for(let f=0;f<h;f+=1)for(let _=0;_<u;_+=1)d[(f*u+_)*4+3]>128&&p.push(_,f);let g=t/u,x=new Float32Array(e*3),m=p.length/2;for(let f=0;f<e;f++){let _=Math.floor(Math.random()*m)*2;x[f*3]=(p[_]+Math.random()-u/2)*g,x[f*3+1]=(h/2-p[_+1]-Math.random())*g,x[f*3+2]=(Math.random()-.5)*g*6}return x}var cl=class extends qt{constructor({count:e=2e4,size:t=9,colorA:n="#ffd2a1",colorB:s="#f59a4b",colorC:r="#ffffff",spread:o=14,additive:a=!0}={}){let l=new $e,c=new Float32Array(e*4);for(let d=0;d<c.length;d++)c[d]=Math.random();let u=new Float32Array(e*3);l.setAttribute("position",new Xe(u.slice(),3)),l.setAttribute("aA",new Xe(u.slice(),3)),l.setAttribute("aB",new Xe(u.slice(),3)),l.setAttribute("aSeed",new Xe(c,4)),l.boundingSphere=new Cn(new E,1e5);let h=new Se({transparent:!0,depthWrite:!1,blending:a?wt:as,uniforms:{uTime:{value:0},uMorph:{value:0},uAssemble:{value:0},uDance:{value:1},uSpread:{value:o},uSize:{value:t},uPR:{value:Math.min(devicePixelRatio,2)},uOpacity:{value:1},uWind:{value:new E(0,0,0)},cA:{value:new ye(n)},cB:{value:new ye(s)},cC:{value:new ye(r)}},vertexShader:`${C_}
        attribute vec3 aA, aB; attribute vec4 aSeed;
        uniform float uTime, uMorph, uAssemble, uDance, uSpread, uSize, uPR; uniform vec3 uWind;
        varying float vSeed; varying float vA;
        void main(){
          float m = smoothstep(aSeed.x * 0.45, 0.55 + aSeed.x * 0.45, uMorph);
          vec3 target = mix(aA, aB, m);
          // mid-morph the particles lift off and swirl before landing
          vec3 swirl = curl(target * 0.08 + uTime * 0.05 + aSeed.yzw * 3.0) * (1.0 - abs(m * 2.0 - 1.0)) * uSpread * 0.35;
          vec3 scatter = target + (aSeed.yzw * 2.0 - 1.0) * uSpread + curl(target * 0.05 + aSeed.wzy + uTime * 0.03) * uSpread * 0.6 + uWind * (0.5 + aSeed.x);
          float a = smoothstep(aSeed.y * 0.5, 0.5 + aSeed.y * 0.5, uAssemble);
          vec3 p = mix(scatter, target + swirl, a);
          // living, dancing surface
          p += curl(p * 0.35 + uTime * 0.12) * uDance * (0.05 + aSeed.z * 0.12);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * uPR * (0.35 + aSeed.w * 0.9) / max(-mv.z, 0.1);
          vSeed = aSeed.x; vA = a;
        }`,fragmentShader:`
        uniform vec3 cA, cB, cC; uniform float uOpacity; varying float vSeed; varying float vA;
        void main(){
          vec2 q = gl_PointCoord - 0.5; float d = length(q);
          float alpha = (1.0 - smoothstep(0.0, 0.5, d));
          alpha *= alpha;
          vec3 col = vSeed < 0.55 ? cA : (vSeed < 0.9 ? cB : cC);
          gl_FragColor = vec4(col, alpha * uOpacity * (0.35 + 0.65 * vA));
        }`});super(l,h),this.count=e,this.frustumCulled=!1,this.slot=0}setShape(e,t="A"){let n=this.geometry.getAttribute(t==="A"?"aA":"aB");n.array.set(e.subarray(0,n.array.length)),n.needsUpdate=!0}morphTo(e){let t=this.slot===0?"B":"A";return this.setShape(e,t),this.slot=this.slot===0?1:0,this.slot}get u(){return this.material.uniforms}};var fn=[{key:"mithraki",share:9,build:Of,chapters:Zu},{key:"revisetax",share:5,build:Bf,chapters:$u,hud:{lines:["Revise Tax"],at:[.02,.3]}},{key:"bisikaapi",share:8,build:Hf,chapters:Ju,hud:{lines:["Bisi Kaapi"],at:[.4,.8]}},{key:"glavida",share:6,build:kf,chapters:th,hud:{lines:["Glavida"],at:[.02,.3]}},{key:"innovious",share:5,build:Vf,chapters:nh,hud:{lines:["Innovious"],at:[.12,.5]}},{key:"houseofmoh",share:5,build:Xf,chapters:ih,hud:{lines:["House of Moh"],at:[.08,.5]}},{key:"cosmos",share:5,build:qf,chapters:rh,hud:{lines:["Cosmos"],at:[.08,.45]},veil:[.8,.84,.92]},{key:"perseid",share:7,build:Yf,chapters:oh,veil:[.015,.04,.09],hud:[{lines:["Perseid Pictures"],at:[.02,.34]},{lines:["15+ more clients"],at:[.42,.72]},{lines:["Let's build yours"],at:[.78,1.5]}]}],$f=20,Jf=$f+fn.reduce((i,e)=>i+e.share,0),Ui=$f/Jf,dn=[];{let i=Ui;for(let e of fn){let t=i+e.share/Jf;dn.push([i,t]),i=t}}var P_={origin:[0,5.5,-53],yaw:0},ah=new URL(".",import.meta.url).href,lh=new URL(import.meta.url).searchParams.get("v"),hl=i=>lh&&typeof i=="string"&&i.startsWith(ah)&&!/[?&]v=/.test(i)?i+(i.includes("?")?"&":"?")+"v="+lh:i;if(lh&&!globalThis.__nrtFetch){let i=globalThis.fetch.bind(globalThis);globalThis.__nrtFetch=!0,globalThis.fetch=(e,t)=>i(typeof e=="string"?hl(e):e,t),Hu.setURLModifier(hl)}async function I_(i,e=3){for(let t=0;;t++)try{let n=await fetch(i);if(!n.ok)throw new Error(n.status+" "+i);return n}catch(n){if(t>=e-1)throw n;await new Promise(s=>setTimeout(s,400*(t+1)))}}async function Gr(i){let e=await I_(i),t=await new Response(e.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),n=new DataView(t),s=n.getUint32(0,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,s))),o=4+s,{nv:a,ni:l,min:c,max:u}=r,h=new Uint16Array(t.slice(o,o+a*6));o+=a*6;let d=new Float32Array(a*3);for(let x=0;x<a*3;x++){let m=x%3;d[x]=c[m]+h[x]/65535*(u[m]-c[m])}let p=new Uint32Array(t.slice(o,o+l*4));o+=l*4;let g=new $e;g.setAttribute("position",new Xe(d,3)),g.setIndex(new Xe(p,1));for(let[x,m,f]of r.extra)if(m==="unorm16"){let _=new Uint16Array(t.slice(o,o+a*f*2));o+=a*f*2,g.setAttribute(x,new Xe(_,f,!0))}else if(m==="f32"){let _=new Float32Array(t.slice(o,o+a*f*4));o+=a*f*4,g.setAttribute(x,new Xe(_,f))}else{let _=new Uint8Array(t.slice(o,o+a*f));o+=a*f,o+=(4-o%4)%4,g.setAttribute(x,new Xe(new Float32Array(_),f))}return g}function oi(i,e,{srgb:t=!1,repeat:n=!1,flip:s=!0}={}){return new Promise((r,o)=>i.load(e,a=>{a.colorSpace=t?Nt:Qt,a.flipY=s,a.anisotropy=8,n&&(a.wrapS=a.wrapT=Ns),a.generateMipmaps=!0,a.minFilter=kn,r(a)},void 0,o))}function Zf(i){return new Promise((e,t)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=hl(i)})}var ul=`
  vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
  vec3 srgb2lin(vec3 c){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }`;async function PM(i,e={}){let t=e.base||ah+"assets/",n=e.intro==="storm",s={uNight:{value:0},uFront:{value:1e4},uGlowK:{value:0}},r=n?Af():null,o=n,a=n?1e9:0,l=n?Rf(i,r,t,{onDone:()=>{o=!1}}):null,c=e.onProgress||(()=>{}),u=(j,he)=>{c(j,he),l&&l.setProgress(j*.97)},h=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<600,d=e.tier||(h?"low":"high"),p=d==="high"?{pr:1.75,grassNear:36e4,grassFar:9e4,clumps:900,msaa:4,spray:2400}:{pr:1.5,grassNear:11e4,grassFar:36e3,clumps:420,msaa:2,spray:900},g=new Lr({antialias:!1,powerPreference:"high-performance",alpha:!1});g.setPixelRatio(Math.min(devicePixelRatio,p.pr)),g.toneMapping=Io,g.toneMappingExposure=e.exposure??.95,g.outputColorSpace=Nt,i.appendChild(g.domElement),Object.assign(g.domElement.style,{width:"100%",height:"100%",display:"block",touchAction:"none"});let x=new Gn;g.domElement.addEventListener("webglcontextlost",j=>{j.preventDefault(),console.warn("[nomadiic-rt] context lost")},!1),g.domElement.addEventListener("webglcontextrestored",()=>location.reload(),!1);let m=[...Tf.map(j=>({...j,at:[j.at[0]/Gs*Ui,Math.min(j.at[1]/Gs,1)*Ui]})),...fn.flatMap((j,he)=>j.chapters.map(fe=>({...fe,at:[dn[he][0]+fe.at[0]*(dn[he][1]-dn[he][0]),dn[he][0]+Math.min(fe.at[1],1)*(dn[he][1]-dn[he][0])]})))],f=!1,_=async j=>{if(!f){f=!0;try{let he=await import(hl(ah+"book.js"));he.setBookBase(t+"book/"),he.openBook(i,j,{onClose:()=>{f=!1}})}catch(he){console.error("[nomadiic-rt] book",he),f=!1}}},w=Lf(i,m,{contactUrl:e.contactUrl,onBook:_}),v=new jt(42,1,1,6e3),C=new class extends Ga{load(j,he,fe,Be){return super.load(j,Ye=>{let Ge=Ye.image,ft=()=>he&&he(Ye);navigator.userAgentData&&globalThis.createImageBitmap&&Ge?createImageBitmap(Ge,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(It=>{Ye.image=It,Ye.flipY=!1,Ye.needsUpdate=!0,ft()}).catch(ft):(Ge&&Ge.decode?Ge.decode().catch(()=>{}):Promise.resolve()).then(ft)},fe,Be)}},R=0,A=14,T=()=>u(++R/A),M=j=>j.then(he=>(T(),he)),[y,S,N,D,F,B]=await Promise.all([M(fetch(t+"scene.json").then(j=>j.json())),M(oi(C,t+"sky.jpg",{srgb:!1})),M(oi(C,t+"ground_lm_s.webp")),M(oi(C,t+"meadow.webp",{srgb:!0,repeat:!0})),M(Zf(t+"grass_mask.png")),M(Gr(t+"emblem.pack"))]);{let j=document.createElement("canvas");j.width=64,j.height=32;let he=j.getContext("2d");he.drawImage(S.image,0,0,64,32);let fe=he.getImageData(0,14,64,2).data,Be=0,Ye=0,Ge=0;for(let Ct=0;Ct<fe.length;Ct+=4)Be+=fe[Ct],Ye+=fe[Ct+1],Ge+=fe[Ct+2];let ft=fe.length/4,It=Ct=>(Ct/=255*ft,Ct<=.04045?Ct/12.92:Math.pow((Ct+.055)/1.055,2.4));e.fog=[It(Be),It(Ye),It(Ge)]}let U=y.frames,H=U.length,z=new E(...y.sun).normalize();v.fov=y.fov,v.updateProjectionMatrix();let O={uTime:{value:0},uSun:{value:z},uFogCol:{value:new ye(...e.fog)},uFogK:{value:34e-5},uCam:{value:v.position}},X=new Me(new on(5e3,48,24),new Se({side:zt,depthWrite:!1,fog:!1,uniforms:{tSky:{value:S},uNight:{value:0},uFlash:{value:0},uT:{value:0},uFP:{value:new ie(.5,.7)}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`${ul} uniform sampler2D tSky; uniform float uNight, uFlash, uT; varying vec3 vDir;
      float sh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float sn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(sh(i), sh(i + vec2(1, 0)), f.x), mix(sh(i + vec2(0, 1)), sh(i + vec2(1, 1)), f.x), f.y); }
      float sf(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 6; i++) { s += a * sn(p); p = mat2(0.8, -0.6, 0.6, 0.8) * p * 2.02 + 7.1; a *= 0.5; } return s; }
      vec3 storm(vec3 d){                                    // a low, heavy deck rolling overhead, its underside lit by the moon and the lightning
        vec2 q = d.xz / (max(d.y, 0.0) + 0.12) * 0.55 + vec2(uT * 0.012, uT * 0.004);
        vec2 w = vec2(sf(q + uT * 0.01), sf(q + 5.3));
        float c = smoothstep(0.32, 0.85, sf(q + 1.8 * w));
        float c2 = smoothstep(0.32, 0.85, sf(q + 1.8 * w + vec2(0.06, 0.03)));
        float edge = clamp((c - c2) * 4.0 + 0.5, 0.0, 1.0);
        vec3 base = mix(vec3(0.06, 0.07, 0.09), vec3(0.32, 0.34, 0.38), edge * 0.7 + (1.0 - c) * 0.3);
        base = mix(base, vec3(0.16, 0.17, 0.2), smoothstep(0.25, -0.02, d.y));   // towards the horizon the deck is rain and haze
        return base * (1.0 + uFlash * 3.0 * (0.35 + c));
      }
      void main(){ vec3 d = normalize(vDir); vec3 b = vec3(d.x, -d.z, d.y);
        float lon = atan(b.x, b.y), lat = asin(clamp(b.z, -1.0, 1.0));
        vec2 uv = vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927);
        vec3 sk = srgb2lin(texture2D(tSky, uv).rgb);
        if (uNight > 0.001) sk = mix(sk, storm(d), uNight);
        gl_FragColor = vec4(sk, 1.0); }`}));X.renderOrder=-1,X.frustumCulled=!1,x.add(X);let ee=null;if(n){let j=d==="high"?14e3:6e3,he=new Float32Array(j*6),fe=new Float32Array(j*2);for(let Ge=0;Ge<j;Ge++){let ft=Math.random(),It=Math.random(),Ct=Math.random(),$n=Math.random();he.set([ft,It,Ct,ft,It,Ct],Ge*6),fe[Ge*2]=fe[Ge*2+1]=$n}let Be=new $e;Be.setAttribute("position",new Xe(he,3));let Ye=new Float32Array(j*2);for(let Ge=0;Ge<j;Ge++)Ye[Ge*2]=0,Ye[Ge*2+1]=1;Be.setAttribute("aEnd",new Xe(Ye,1)),Be.setAttribute("aSeed",new Xe(fe,1)),ee=new Nr(Be,new Se({transparent:!0,depthWrite:!1,blending:wt,uniforms:{uTime:O.uTime,uCam:O.uCam,uA:{value:1},uFl:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam; attribute float aEnd, aSeed; varying float vA;
        void main(){ vec3 B = vec3(46.0, 30.0, 46.0); vec3 p = position * B;
          float sp = 22.0 + aSeed * 8.0; p.y = mod(p.y - uTime * sp - uCam.y, B.y);
          p.x = mod(p.x - uCam.x + uTime * 4.0, B.x); p.z = mod(p.z - uCam.z, B.z);
          vec3 w = uCam + p - B * vec3(0.5, 0.35, 0.5);
          w += vec3(0.12, -1.0, 0.03) * aEnd * (0.55 + aSeed * 0.4);
          vec4 mv = viewMatrix * vec4(w, 1.0); vA = (1.0 - smoothstep(6.0, 26.0, -mv.z)) * smoothstep(0.6, 2.0, -mv.z);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform float uA, uFl; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.6, 0.68, 0.85) * (0.14 + uFl * 0.6), vA * uA * 0.55); }"})),ee.frustumCulled=!1,ee.renderOrder=8,x.add(ee)}let pe=new Ir(g),be=new Gn;be.add(X.clone()),be.add(new Me(new zr(4e3,32).rotateX(-Math.PI/2),new Wn({color:new ye(.035,.045,.018)})));let q=pe.fromScene(be,0,.1,6e3).texture;x.environment=q;let te=y.ground,Q=new Se({uniforms:{...O,tLm:{value:N},tAlb:{value:D},uK:{value:y.lm.ground},uRect:{value:new Qe(te.x0,te.x1,te.z0,te.z1)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${ul} ${Yn} uniform sampler2D tLm, tAlb; uniform float uK; uniform vec4 uRect; varying vec3 vW;
      void main(){
        vec3 alb = texture2D(tAlb, vW.xz / 9.0).rgb * 0.6 + texture2D(tAlb, vW.xz / 53.0 + 0.37).rgb * 0.4;
        vec2 uv = vec2((vW.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - vW.z) / (uRect.w - uRect.z));
        vec3 open = lmDecode(vec3(0.83), uK);
        vec3 L = lmDecode(texture2D(tLm, clamp(uv, 0.002, 0.998)).rgb, uK);
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        float edge = inside * smoothstep(0.0, 0.08, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
        vec3 c = alb * mix(open, L, edge);
        gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),K=new Me(new bt(9e3,9e3,1,1).rotateX(-Math.PI/2),Q);K.position.y=-.01,x.add(K),B.computeVertexNormals();let Y=new kt({color:new ye("#e9a94a"),metalness:1,roughness:.16,envMapIntensity:1.1}),ve=new Me(B,Y);ve.matrixAutoUpdate=!1,x.add(ve);let ce={p:new E,q:new At,s:new E};new Ke().fromArray(U[0].emb).decompose(ce.p,ce.q,ce.s);let Ee=new Zt;Ee.position.copy(ce.p),Ee.lookAt(U[0].cam[0],ce.p.y,U[0].cam[2]);let J=Ee.quaternion.clone().invert().multiply(ce.q),re={a:0,v:.25,drag:!1,x:0},L=new ti(new ye(1,.72,.48),6);L.position.copy(z).multiplyScalar(100),x.add(L,L.target);let me=document.createElement("canvas");me.width=F.width,me.height=F.height,me.getContext("2d").drawImage(F,0,0);let ae=new mi(me);ae.flipY=!1,ae.colorSpace=Qt;let ge=y.mask,ue={...O,tLm:{value:N},uK:{value:y.lm.ground},uRect:{value:new Qe(te.x0,te.x1,te.z0,te.z1)},uPxAng:{value:6e-4},tMask:{value:ae},uMask:{value:new Qe(ge.x0,ge.x1,ge.z0,ge.z1)},uCenter:{value:new ie}},Fe=new Me(Do(p.grassNear,84,1,1),Gu({...ue,uTile:{value:84},uWide:{value:h?1.6:1.15},uFade:{value:new ie(30,42)}})),xe=new Me(Do(p.grassFar,300,1,2),Gu({...ue,uTile:{value:300},uWide:{value:3.4},uFade:{value:new ie(130,150)},uNear:{value:44}},!0));Fe.frustumCulled=xe.frustumCulled=!1,Fe.layers.set(1),xe.layers.set(1),v.layers.enable(1),x.add(Fe,xe);let I=null,b=null,G={value:0},ne=null,de=null,oe=null,ze=null,Ae=null,Te=null,st=null,_e=null,Re=new jt,De=fn.map(()=>null),qe=fn.map(()=>!1),Ne=j=>new Se({uniforms:{tP:{value:j},uRes:{value:new ie(1,1)},uReady:{value:0},uCol:{value:new ye(.9,.86,.8)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tP; uniform vec2 uRes; uniform float uReady; uniform vec3 uCol; varying vec2 vUv;
      void main(){ vec3 glow = uCol * mix(1.35, 0.75, vUv.y) * (0.85 + 0.25 * (1.0 - abs(vUv.x - 0.5) * 2.0));   // soft daylight beyond the door, never a white panel
        gl_FragColor = vec4(uReady > 0.5 ? texture2D(tP, gl_FragCoord.xy / uRes).rgb : glow, 1.0); }`}),lt=j=>j.traverse(he=>{he.geometry?.dispose?.();for(let fe of[].concat(he.material||[])){for(let Be of Object.values(fe))Be&&Be.isTexture&&!Be.isRenderTargetTexture&&Be.dispose();for(let Be of Object.values(fe.uniforms||{}))Be&&Be.value&&Be.value.isTexture&&!Be.value.isRenderTargetTexture&&Be.value.dispose()}}),et=-1,mt=!1,k=j=>{let he=De[j];he&&(De[j]=null,qe[j]=!1,lt(he.scene),he.scene.traverse(fe=>{fe.isReflector&&fe.dispose()}),he.dispose?.())},Ce=()=>new Promise(j=>requestAnimationFrame(()=>j())),se=async j=>{let he=performance.now();try{g.setRenderTarget(st);let Be=g.compileAsync(j.scene,v);g.setRenderTarget(null),await Be}catch{g.setRenderTarget(null)}globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(j.key,"compileAsync",Math.round(performance.now()-he)+"ms");let fe=new Set;j.scene.traverse(Be=>{for(let Ye of[].concat(Be.material||[])){for(let Ge of Object.values(Ye))Ge&&Ge.isTexture&&!Ge.isRenderTargetTexture&&fe.add(Ge);for(let Ge of Object.values(Ye.uniforms||{}))Ge&&Ge.value&&Ge.value.isTexture&&!Ge.value.isRenderTargetTexture&&fe.add(Ge.value)}});for(let Be of fe)he=performance.now(),g.initTexture(Be),globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(j.key,"tex",Be.image&&Be.image.width,Math.round(performance.now()-he)+"ms"),await Ce()},le={a:"#f6c47a",b:"#e0913a",c:"#fff0d2"},Ue=(j,he)=>{let fe=new cl({count:d==="high"?3e4:18e3,size:34,colorA:le.a,colorB:le.b,colorC:le.c,spread:16,additive:!1});fe.setShape(Kf(j,{count:fe.count,width:20,font:"600 150px Satoshi, sans-serif",lineGap:.95}),"A"),fe.material.depthTest=!1,fe.renderOrder=20,fe.visible=!1;let Be=new Me(new bt(1,1),new Se({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA; varying vec2 vUv; void main(){ float r = length((vUv - 0.5) * vec2(1.0, 2.2)); gl_FragColor = vec4(0.03, 0.035, 0.05, uA * 0.72 * (1.0 - smoothstep(0.05, 0.5, r))); }"}));return Be.renderOrder=19,Be.scale.set(30,11,1),Be.position.z=-.5,fe.add(Be),fe.userData.halo=Be,he.add(fe),fe},Pe=new E,it=new E,Dt=(j,he,fe,Be)=>{let[Ye,Ge]=he,ft=at.smoothstep(fe,Ye,Ye+.05)*(1-at.smoothstep(fe,Ge-.05,Ge));if(j.visible=ft>.001,!j.visible){j.u.uAssemble.value=0;return}let It=18,Ct=Math.tan(at.degToRad(v.fov/2)),$n=at.clamp((1.1-v.aspect)/.6,0,1);Pe.set(0,0,-1).applyQuaternion(v.quaternion),it.set(0,1,0).applyQuaternion(v.quaternion),j.position.copy(v.position).addScaledVector(Pe,It).addScaledVector(it,It*Ct*at.lerp(.26,.2,$n)),j.quaternion.copy(v.quaternion),j.scale.setScalar(2*It*Ct*v.aspect*at.lerp(.5,.84,$n)/20),j.u.uTime.value=Be,j.u.uAssemble.value=ft,j.u.uDance.value=.35+(1-ft)*2.2,j.userData.halo.material.uniforms.uA.value=ft},Jt=j=>{j<0||j>=fn.length||De[j]||qe[j]||qe.some(Boolean)||(qe[j]=!0,fn[j].build({base:t,unpack:Gr,loader:C,renderer:g,tier:d,grainTex:ze}).then(async he=>{if(await se(he),!qe[j]){he.dispose?.();return}if(he.huds=[].concat(fn[j].hud||[]).map(fe=>({H:Ue(fe.lines,he.scene),at:fe.at})),qe[j]=!1,De[j]=he,j===0&&(Ae=he),he.exitPortal){let fe=new bt(...he.exitPortal.size);if(he.exitPortal.arch){let[Ye,Ge]=he.exitPortal.size,ft=Ye/2,It=new hs;It.moveTo(-ft,-Ge/2),It.lineTo(ft,-Ge/2),It.lineTo(ft,Ge/2-ft),It.absarc(0,Ge/2-ft,ft,0,Math.PI,!1),It.lineTo(-ft,-Ge/2),fe=new Ro(It,32);let Ct=fe.attributes.position,$n=fe.attributes.uv;for(let ci=0;ci<Ct.count;ci++)$n.setXY(ci,Ct.getX(ci)/Ye+.5,Ct.getY(ci)/Ge+.5)}let Be=new Me(fe,Ne(st.texture));Be.position.set(...he.exitPortal.pos),Be.rotation.y=he.exitPortal.yaw,Be.visible=!1,he.scene.add(Be),he.portalQuad=Be}tt(),e.debug&&(window.__worlds=De)}).catch(he=>{console.error("[nomadiic-rt] world",fn[j].key,he),qe[j]=!1}))},xt=j=>{for(let he of[j+1,j+2,j-1])if(he>=0&&he<fn.length&&!De[he]){Jt(he);return}},In=(async()=>{let[j,he,fe,Be]=await Promise.all([M(Gr(t+"arch.pack")),M(oi(C,t+"arch_lm_s.webp").catch(()=>oi(C,t+"arch_lm.webp"))),M(oi(C,t+"marble.webp",{srgb:!0,repeat:!0})),M(Gr(t+"water.pack"))]);ze=fe;let Ye=j.toNonIndexed();Ye.computeVertexNormals();let Ge=[];for(let je of[-30,-36,-42,-48])for(let vt of[-6.9,6.9])Ge.push(new E(vt,11.6,je));let ft=(je,vt,nt)=>new Se({uniforms:{...O,...s,tLm:{value:je},tMarble:{value:fe},uK:{value:vt},uLamps:{value:Ge}},defines:nt?{HALL:""}:{},vertexShader:`attribute float kind; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
        void main(){ vUv = uv; vKind = kind; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${ul} ${Yn} uniform sampler2D tLm, tMarble; uniform float uK, uNight, uFront, uGlowK; uniform vec3 uLamps[8]; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
        vec3 tri(vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0));
          return texture2D(tMarble, p.zy / s).rgb * w.x + texture2D(tMarble, p.xz / s).rgb * w.y + texture2D(tMarble, p.xy / s).rgb * w.z; }
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main(){
          vec3 n = vN; n = (dot(n, n) > 1e-8 && n == n) ? normalize(n) : vec3(0.0, 1.0, 0.0); vec3 L = lmDecode(texture2D(tLm, vUv).rgb, uK);
          #ifdef HALL
            { float lum = dot(L, vec3(0.333)); L *= 0.85 / (1.0 + max(lum - 0.85, 0.0) * 1.4); }   // the stone right under each lamp baked hot: rolled off so nothing burns white
          #else
            if (vW.z < -24.5 && vW.z > -56.0 && abs(vW.x) < 8.6 && vW.y < 12.0) { float lum = dot(L, vec3(0.333)); L *= 0.5 / (1.0 + max(lum * 0.5 - 0.8, 0.0) * 1.6); }   // palace pieces standing inside the hall: hall light, not daylight
          #endif
          vec3 alb = tri(vW, n, 3.2);
          float k = vKind, gloss = 0.04;
          vec3 V = normalize(cameraPosition - vW); float fres = pow(clamp(1.0 - max(dot(n, V), 0.0), 0.0, 1.0), 5.0);
          if (k > 0.5 && k < 1.5) {
            alb *= vec3(1.02, 1.0, 0.98);
            #ifdef HALL
              // marble wall panels, each slab cut from a slightly different block, with fine joints
              vec2 pq = abs(n.x) > 0.5 ? vW.zy : vW.xy; vec2 cell = floor(pq / vec2(2.4, 1.6)); vec2 f = abs(fract(pq / vec2(2.4, 1.6)) - 0.5);
              float joint = smoothstep(0.488, 0.497, max(f.x, f.y));
              alb = tri(vW + vec3(cell.x * 7.3, cell.y * 3.1, 0.0), n, 2.2); alb = clamp((alb - vec3(dot(alb, vec3(0.333)))) * 1.6 + (vec3(dot(alb, vec3(0.333))) - 0.72) * 2.4 + 0.72, 0.0, 1.2); alb *= mix(vec3(0.95, 0.92, 0.86), vec3(0.86, 0.84, 0.8), h21(cell)) * (1.0 - joint * 0.55);
              gloss = 0.07;
            #endif
          }
          if (k > 1.5 && k < 2.5) {
            alb = tri(vW, n, 1.4) * vec3(0.9, 0.86, 0.8);
            #ifdef HALL
              // the hall floor: polished chequered marble, cream and grey-green, 1.2 m squares
              vec2 cell = floor(vW.xz / 1.2); vec2 f = abs(fract(vW.xz / 1.2) - 0.5);
              float chk = mod(cell.x + cell.y, 2.0), joint = smoothstep(0.49, 0.498, max(f.x, f.y));
              alb = tri(vW + vec3(cell.x * 5.1, 0.0, cell.y * 3.7), n, 1.6) * mix(vec3(0.93, 0.9, 0.84), vec3(0.42, 0.47, 0.42), chk) * (1.0 - joint * 0.5);
              gloss = 0.16;
            #endif
          }
          if (k > 2.5 && k < 3.5) {               // travertine paving: big slabs with thin joints
            vec2 q = vW.xz / vec2(1.6, 0.8); q.x += step(1.0, mod(floor(q.y), 2.0)) * 0.5; vec2 f = abs(fract(q) - 0.5);
            float joint = smoothstep(0.492, 0.498, max(f.x, f.y) );
            alb = tri(vW, n, 2.0) * vec3(0.86, 0.8, 0.7) * (1.0 - joint * 0.45);
          }
          vec3 c = alb * L;
          if (k > 3.5) {                           // gold / bronze fittings: no diffuse, sun glint + sky
            vec3 metal = k < 4.5 ? vec3(0.95, 0.72, 0.38) : vec3(0.55, 0.36, 0.2);
            vec3 H = normalize(V + uSun); float sp = pow(max(dot(n, H), 0.0), 60.0) * 6.0;
            c = metal * (0.25 * L + sp * L * 0.4 + 0.15);
          } else c += vec3(gloss) * fres * L * 0.6 + gloss * L * 0.0;
          #ifdef HALL
            // polished stone catches each lamp: small warm glints that move as you walk
            vec3 sp = vec3(0.0);
            for (int i = 0; i < 8; i++) { vec3 l = uLamps[i] - vW; float d = length(l); l /= d; vec3 H = normalize(l + V);
              sp += vec3(1.0, 0.72, 0.42) * pow(max(dot(n, H), 0.0), k > 1.5 && k < 2.5 ? 180.0 : 60.0) * 14.0 / (1.0 + d * d * 0.05); }
            c += sp * gloss;
          #endif
          if (uNight > 0.001) {                    // the storm: even moonlight, and an amber glow that spreads over the stone as you come near
            float Ll = pow(clamp(dot(L, vec3(0.333)), 0.0, 2.0), 0.35);
            vec3 moon = alb * 0.4 * (0.6 + 0.4 * Ll);
            float lit = smoothstep(uFront - 7.0, uFront + 3.0, vW.z) * uGlowK;
            float up = 0.3 + 0.9 * exp(-max(vW.y, 0.0) * 0.085);          // floodlit from the ground, fading up the columns
            vec3 amber = vec3(1.0, 0.4, 0.1);
            float form = pow(clamp(dot(L, vec3(0.333)), 0.0, 2.0), 0.65);
            vec3 glow = alb * amber * up * (0.15 + 0.85 * form) * lit * 0.95;
            glow += amber * exp(-pow((vW.z - uFront) / 1.3, 2.0)) * up * 0.45 * uGlowK;   // the bright edge of the light as it travels
            vec3 cn = (k > 3.5 ? c * 0.35 : moon * (1.0 - 0.7 * lit)) + glow;
            c = mix(c, cn, uNight);
          }
          gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),It=ft(he,y.lm.arch,!1),Ct=It.uniforms;I=new Me(Ye,It),x.add(I),Promise.all([Gr(t+"hall.pack"),oi(C,t+"hall_lm.webp")]).then(([je,vt])=>{let nt=je.toNonIndexed();nt.computeVertexNormals(),x.add(new Me(nt,ft(vt,y.lm.hall*.125,!0)))}).catch(je=>console.error("[nomadiic-rt] hall",je)),Be.computeBoundingBox();let $n=Be.boundingBox,ci=$n.getSize(new E),ws=$n.getCenter(new E),Zs=new Ws(new bt(ci.x,ci.z),{textureWidth:Math.round(innerWidth*Math.min(devicePixelRatio,p.pr)*.5),textureHeight:Math.round(innerHeight*Math.min(devicePixelRatio,p.pr)*.5),shader:{name:"Pool",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},...O},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW;
          void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${Yn} uniform sampler2D tDiffuse; varying vec4 vUv4; varying vec3 vW;
          float h(vec2 p){ return sin(p.x * 2.3 + uTime * 0.8) * sin(p.y * 1.9 - uTime * 0.6) * 0.6 + 0.3 * sin(p.x * 5.1 - p.y * 3.7 + uTime * 1.4) + 0.2 * sin(p.x * -7.3 + p.y * 6.1 - uTime * 1.9); }
          float rip(vec2 w){ float d = length(w - vec2(0.0, 45.1)); float inner = (1.0 - smoothstep(2.3, 2.6, d));
            return sin(d * 5.0 - uTime * 3.2) * exp(-max(d - 2.4, 0.0) * 0.16) * 0.9 * (1.0 - inner) + sin(d * 14.0 - uTime * 9.0) * 0.6 * inner; }
          void main(){
            vec2 e = vec2(0.05, 0.0); vec2 p = vW.xz * 0.7;
            vec2 slope = vec2(h(p + e.xy) - h(p - e.xy), h(p + e.yx) - h(p - e.yx));
            vec2 e2 = vec2(0.04, 0.0); slope += vec2(rip(vW.xz + e2.xy) - rip(vW.xz - e2.xy), rip(vW.xz + e2.yx) - rip(vW.xz - e2.yx)) * 1.6;
            vec3 n = normalize(vec3(-slope.x * 0.02, 1.0, -slope.y * 0.02));
            vec3 V = normalize(cameraPosition - vW);
            float fres = 0.04 + 0.96 * pow(clamp(1.0 - max(dot(n, V), 0.0), 0.0, 1.0), 5.0);
            vec4 uv = vUv4; uv.xy += slope * 0.004 * uv.w;
            vec3 refl = texture2DProj(tDiffuse, uv).rgb;
            vec3 c = mix(vec3(0.01, 0.018, 0.016), refl, clamp(fres * 1.25 + 0.25, 0.0, 1.0));
            gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}});Zs.rotation.x=-Math.PI/2,Zs.position.set(ws.x,$n.max.y+.02,ws.z),Zs.camera.layers.set(0),x.add(Zs);let Je=Ef(y.trees,p.clumps,O);x.add(Je);try{await document.fonts.load('120px "Nomadiic Line"')}catch{}let ht=new mi(Df("NOMADIIC HORSE DESIGNS"));ht.anisotropy=8;let Lt=new Me(new bt(19.5,.76),new Se({transparent:!0,depthWrite:!1,blending:Ea,premultipliedAlpha:!0,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{tT:{value:ht}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tT; varying vec2 vUv;
        void main(){ float a = texture2D(tT, vUv).r; float up = texture2D(tT, vUv + vec2(0.0, 0.012)).r;
          float shade = mix(1.0, 0.42, a) + clamp(up - a, 0.0, 1.0) * 0.0 + clamp(a - up, 0.0, 1.0) * 0.55;   // dark groove, lit lower lip
          gl_FragColor = vec4(vec3(shade), 1.0); }`}));Lt.position.set(0,17.98,-20.9),x.add(Lt);{let je={base:19.95,apex:23.45,half:11.05},vt=document.createElement("canvas");vt.width=2048,vt.height=330;let nt=vt.getContext("2d");nt.fillStyle="#000",nt.fillRect(0,0,2048,330),nt.filter="blur(3px)";let mn=(Pt,ct,_n,Yt,Es)=>{nt.save(),nt.translate(Pt,ct),nt.rotate(_n),nt.beginPath(),nt.ellipse(0,0,Yt,Es,0,0,Math.PI*2),nt.fill(),nt.restore()};for(let Pt of[-1,1]){nt.strokeStyle="#9a9a9a",nt.lineWidth=9,nt.beginPath();for(let ct=0;ct<=1.0001;ct+=.02){let _n=1024+Pt*(190+ct*760),Yt=120+ct*150-Math.sin(ct*Math.PI)*50;ct===0?nt.moveTo(_n,Yt):nt.lineTo(_n,Yt)}nt.stroke(),nt.fillStyle="#e6e6e6";for(let ct=.03;ct<.98;ct+=.032){let _n=1024+Pt*(190+ct*760),Yt=120+ct*150-Math.sin(ct*Math.PI)*50,Qi=(34-ct*16)*1.5;mn(_n-Pt*Qi*.3,Yt-Qi*.55,Pt*-.55,Qi,Qi*.42),mn(_n-Pt*Qi*.3,Yt+Qi*.55,Pt*.55,Qi,Qi*.42)}for(let ct=0;ct<5;ct++)nt.beginPath(),nt.arc(1024+Pt*(260+ct*150),150+ct*28-Math.sin(ct/5*Math.PI)*40,11,0,Math.PI*2),nt.fillStyle="#ffffff",nt.fill()}nt.filter="none",nt.lineWidth=16,nt.strokeStyle="#ffffff",nt.beginPath(),nt.arc(1024,170,150,0,Math.PI*2),nt.stroke();let Zr=new mi(vt);Zr.anisotropy=8;let zi=new hs;zi.moveTo(-je.half,0),zi.lineTo(je.half,0),zi.lineTo(0,je.apex-je.base),zi.closePath();let ji=new Ro(zi),vl=ji.attributes.position,np=ji.attributes.uv;for(let Pt=0;Pt<vl.count;Pt++)np.setXY(Pt,(vl.getX(Pt)+je.half)/(2*je.half),vl.getY(Pt)/(je.apex-je.base));let xl=Pt=>new Se({uniforms:{tM:{value:fe},tR:{value:Zr}},vertexShader:"varying vec3 vW, vN; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tM, tR; varying vec3 vW, vN; varying vec2 vUv;
          void main(){ vec3 n = normalize(vN); ${Pt}
            vec3 m = texture2D(tM, vW.xy * 0.08 + vW.z * 0.03).rgb * vec3(1.0, 0.98, 0.95);
            float sun = max(dot(n, normalize(vec3(-0.35, 0.75, 0.55))), 0.0);
            gl_FragColor = vec4(m * (0.42 + 0.62 * sun) * vec3(1.0, 0.97, 0.92), 1.0); }`}),ip=xl(`float e = 1.0 / 2048.0, h = texture2D(tR, vUv).r, hx = texture2D(tR, vUv + vec2(e * 2.0, 0.0)).r, hy = texture2D(tR, vUv + vec2(0.0, e * 12.0)).r;
            n = normalize(n + vec3(-(hx - h) * 9.0, -(hy - h) * 9.0, 0.0)); float occ = 1.0 - h * 0.0;`),sp=B,rp=ce.s.clone().multiplyScalar(.27),op=new E,L_=new E(1,1,1),ap=xl(""),Oi=new hs;Oi.moveTo(0,0);for(let Pt=0;Pt<=6;Pt++){let ct=Math.PI*(.1+Pt*.133),_n=Pt%2?1.2:1.55,Yt=.075;Oi.lineTo(Math.cos(ct-Yt)*.42,.25+Math.sin(ct-Yt)*.42),Oi.bezierCurveTo(Math.cos(ct-Yt*1.6)*_n,.25+Math.sin(ct-Yt*1.6)*_n,Math.cos(ct+Yt*1.6)*_n,.25+Math.sin(ct+Yt*1.6)*_n,Math.cos(ct+Yt)*.42,.25+Math.sin(ct+Yt)*.42)}Oi.lineTo(.6,0),Oi.quadraticCurveTo(.7,-.35,.3,-.35),Oi.lineTo(-.3,-.35),Oi.quadraticCurveTo(-.7,-.35,-.6,0),Oi.lineTo(0,0);let Sh=new Ha(Oi,{depth:.28,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:2,curveSegments:10});Sh.translate(0,0,-.14);for(let[Pt,ct]of[[-20.68,0],[-59.32,Math.PI]]){let _n=new Me(ji,ip);_n.position.set(0,je.base,Pt),_n.rotation.y=ct,x.add(_n);let Yt=new Me(sp,ap);Yt.matrixAutoUpdate=!1,Yt.matrix.compose(op.set(0,je.base+1.62,Pt+(ct?-.12:.12)),new At().setFromAxisAngle(new E(0,1,0),ct).multiply(J),rp),x.add(Yt);let Es=new Me(Sh,xl(""));Es.position.set(0,je.apex+.15,Pt+(ct?-.75:.75)),Es.rotation.y=ct,Es.scale.set(1.3,1.3,2.2),x.add(Es)}}try{await document.fonts.load("600 100px Satoshi")}catch{}for(let je of qu){let vt=new mi(Uf(je.lines));vt.anisotropy=8,vt.colorSpace=Nt;let nt=new bn(4,1.46,.09),mn=new Me(nt,new Se({uniforms:{...O,tT:{value:vt},uLz:{value:je.z}},vertexShader:"varying vec2 vUv; varying vec3 vW, vN; varying float vFront; void main(){ vUv = uv; vFront = step(0.5, normal.z); vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tT; uniform float uTime, uLz; varying vec2 vUv; varying vec3 vW, vN; varying float vFront;
          void main(){
            vec3 base = vFront > 0.5 ? texture2D(tT, vUv).rgb : vec3(0.26, 0.16, 0.08);
            vec3 lin = pow(base, vec3(2.2));
            vec3 V = normalize(cameraPosition - vW); vec3 n = normalize(vN);
            vec3 lp = vec3(sign(vW.x) * 7.1, 9.95, uLz); vec3 l = normalize(lp - vW); vec3 H = normalize(l + V);
            float flick = 0.9 + 0.1 * sin(uTime * 7.0 + vW.z) * sin(uTime * 11.0);
            float lum = dot(lin, vec3(0.33)); float gold = smoothstep(0.18, 0.4, lum);                    // gilded letters are the bright parts
            vec3 c = lin * (0.55 + 0.9 * max(dot(n, l), 0.0)) * flick;
            c += mix(vec3(0.7, 0.45, 0.25), vec3(1.0, 0.78, 0.4), gold) * pow(max(dot(n, H), 0.0), mix(18.0, 60.0, gold)) * (0.5 + 1.5 * gold) * flick;
            c += lin * pow(clamp(1.0 - abs(dot(n, V)), 0.0, 1.0), 3.0) * 0.6;
            gl_FragColor = vec4(c * 1.15, 1.0); }`}));mn.position.set(je.x+(je.x<0?.05:-.05),8.4,je.z),mn.rotation.y=je.x<0?Math.PI/2:-Math.PI/2,x.add(mn)}let Bt=new Ai([[0,0],[.38,.02],[.5,.18],[.54,.34],[.5,.36],[0,.3]].map(([je,vt])=>new ie(je,vt)),28),Fi=new kt({color:new ye("#8a5a2b"),metalness:.55,roughness:.4,emissive:new ye("#3a2410")}),Bo=new bt(.7,1.2);Bo.translate(0,.55,0);let fl=new Se({transparent:!0,depthWrite:!1,blending:wt,uniforms:{uTime:O.uTime},vertexShader:"varying vec2 vUv; uniform float uTime; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy * vec2(1.0, 1.0 + 0.08 * sin(uTime * 9.0)); gl_Position = projectionMatrix * mv; }",fragmentShader:`varying vec2 vUv; uniform float uTime;
        float n(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(n(i), n(i + vec2(1, 0)), f.x), mix(n(i + vec2(0, 1)), n(i + vec2(1, 1)), f.x), f.y); }
        void main(){ vec2 p = vUv - vec2(0.5, 0.08); float t = uTime * 2.6;
          float w = 0.32 * (1.0 - vUv.y) + 0.02; float d = abs(p.x + (vn(vec2(vUv.y * 4.0 - t, 1.0)) - 0.5) * 0.18 * vUv.y) / w;
          float body = (1.0 - smoothstep(0.55, 1.0, d)) * smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y + (vn(vec2(vUv.x * 3.0, vUv.y * 5.0 - t)) - 0.5) * 0.25));
          vec3 col = mix(vec3(1.0, 0.85, 0.5), vec3(1.0, 0.35, 0.08), smoothstep(0.1, 0.8, vUv.y));
          gl_FragColor = vec4(col * body * 9.0, body); }`});for(let je of qu){let vt=Math.sign(je.x),nt=new E(je.x-vt*.56,0,je.z),mn=10.25,Zr=new Me(Bt,Fi);Zr.position.set(nt.x,mn-.55,nt.z),x.add(Zr);let zi=new Me(new Ri(.05,.05,.58,8),Fi);zi.rotation.z=Math.PI/2,zi.position.set(nt.x+vt*.28,mn-.5,nt.z),x.add(zi);let ji=new Me(Bo,fl);ji.position.set(nt.x,mn-.22,nt.z),ji.renderOrder=8,ji.frustumCulled=!1,x.add(ji)}let _h=Pf(0,45.1,p.spray,O);x.add(_h),oe=_h,tt(),Ii({base:t,unpack:Gr,loader:C,U:O,groundLm:Q.uniforms.tLm.value,groundK:y.lm.ground,rect:Q.uniforms.uRect.value,tier:d,onPart:()=>{}}).then(async je=>{try{let vt=new Ht(1,1,{type:Vt});g.setRenderTarget(vt);let nt=g.compileAsync(je.group,v,x);g.setRenderTarget(null),await nt,vt.dispose()}catch{g.setRenderTarget(null)}x.add(je.group),ne=je.fade,de=je,T()}).catch(je=>console.error("[nomadiic-rt] garden",je)).finally(()=>{st=new Ht(2,2,{type:Vt}),_e=new Ht(2,2,{type:Vt}),Te=new Me(new bt(ol.size[0],ol.size[1]),Ne(st.texture)),Te.position.set(...ol.pos),Te.visible=!1,x.add(Te),Jt(0)});let[bs,pl,ep,tp]=await Promise.all([fetch(t+"terrain.json").then(je=>je.json()),M(Zf(t+"terrain.png")),M(oi(C,t+"mtn_c_s.webp")),oi(C,t+"tex/rock_face_03_diff.webp",{srgb:!0,repeat:!0}).catch(()=>null)]),$s=document.createElement("canvas");$s.width=pl.width,$s.height=pl.height;let Mh=$s.getContext("2d");Mh.drawImage(pl,0,0);let wh=Mh.getImageData(0,0,$s.width,$s.height).data,bh=$s.width,ml=d==="high"?1:2,Kr=Math.floor((bh-1)/ml)+1,gl=new bt(bs.ext*2,bs.ext*2,Kr-1,Kr-1).rotateX(-Math.PI/2),Eh=gl.attributes.position;for(let je=0;je<Kr;je++)for(let vt=0;vt<Kr;vt++){let nt=(je*ml*bh+vt*ml)*4,mn=(wh[nt]*256+wh[nt+1])/65535;Eh.setY(je*Kr+vt,bs.lo+mn*(bs.hi-bs.lo))}Eh.needsUpdate=!0,gl.computeBoundingSphere(),Promise.all([oi(C,t+"arch_lm.webp"),oi(C,t+"ground_lm.webp"),oi(C,t+"mtn_c.webp")]).then(([je,vt,nt])=>{Ct.tLm.value=je,Q.uniforms.tLm.value=vt,ue.tLm.value=vt,b.material.uniforms.tC.value=nt,T(),x.traverse(mn=>{mn.isInstancedMesh&&mn.material.uniforms&&mn.material.uniforms.tLm&&(mn.material.uniforms.tLm.value=vt)})}).catch(()=>{}),b=new Me(gl,new Se({transparent:!0,depthWrite:!0,uniforms:{...O,tC:{value:ep},tR:{value:tp},uK:{value:y.lm.mtn},uA:G,uLo:{value:bs.lo},uHi:{value:bs.hi}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${ul} ${Yn} uniform sampler2D tC, tR; uniform float uK, uA, uLo, uHi; varying vec3 vW;
        vec3 rockTri(vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0));
          return texture2D(tR, p.zy * s).rgb * w.x + texture2D(tR, p.xz * s).rgb * w.y + texture2D(tR, p.xy * s).rgb * w.z; }
        void main(){ vec2 uv = vec2((vW.x + 2000.0) / 4000.0, (-vW.z + 2000.0) / 4000.0);
          vec3 base = lmDecode(texture2D(tC, uv).rgb, uK); float lum = dot(base, vec3(0.3, 0.59, 0.11));
          vec3 Nw = normalize(cross(dFdx(vW), dFdy(vW))); if (Nw.y < 0.0) Nw = -Nw;
          // rock strata and gullies at two scales, normalised so the bake's light is kept
          vec3 r1 = rockTri(vW, Nw, 1.0 / 60.0), r2 = rockTri(vW + 31.0, Nw, 1.0 / 9.0);
          vec3 detail = (r1 * 0.6 + r2 * 0.4) / max(dot(r1 * 0.6 + r2 * 0.4, vec3(0.333)), 0.05);
          float slope = 1.0 - Nw.y, hN = clamp((vW.y - uLo) / max(uHi - uLo, 1.0), 0.0, 1.0), nz = dot(r1, vec3(0.333));
          // carve the form: sun side bright, the far side in deep cool shade, gullies darker than ridges
          float sunSide = clamp(dot(Nw, uSun), 0.0, 1.0); float gully = smoothstep(0.25, 0.75, nz);
          vec3 c = base * mix(vec3(1.0), detail, 0.85) * (0.42 + 1.05 * sunSide) * (0.75 + 0.35 * gully);
          c += vec3(0.05, 0.07, 0.11) * (1.0 - sunSide) * lum;                                              // sky light in the shade
          float veg = (1.0 - smoothstep(0.18, 0.42, hN + (nz - 0.4) * 0.15)) * (1.0 - smoothstep(0.32, 0.6, slope));      // forest on the lower slopes
          c = mix(c, lum * vec3(0.2, 0.3, 0.14) * mix(1.0, nz * 2.2, 0.7) * (0.5 + 0.9 * sunSide), veg * 0.8);
          float snow = smoothstep(0.6, 0.74, hN + (nz - 0.45) * 0.18) * (1.0 - smoothstep(0.42, 0.68, slope));               // snow where it can lie
          c = mix(c, vec3(0.93, 0.95, 1.0) * max(lum, 0.12) * 2.3, snow);
          float d = length(vW - cameraPosition);
          c = mix(c, vec3(0.6, 0.7, 0.84) * 0.85, (1.0 - exp(-d * 0.00032)) * 0.55);                       // aerial perspective: every ridge bluer than the last
          vec3 f = applyFog(c, vW); f = mix(c, f, 0.5);
          gl_FragColor = vec4(f, uA); }`})),b.renderOrder=0,x.add(b)})();In.catch(j=>console.error("[nomadiic-rt] stage 2",j));let ai=new Ht(2,2,{type:Vt,samples:p.msaa}),Ln=new el(g,ai),qs=new tl(x,v);Ln.addPass(qs),Ln.addPass(new fs({uniforms:{tDiffuse:{value:null},uPx:{value:new ie(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      bool bad(vec3 c){ return any(isnan(c)) || any(isinf(c)); }
      void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb;
        if (bad(c)) { vec2 px = 1.0 / vec2(textureSize(tDiffuse, 0)); vec3 s = vec3(0.0); float n = 0.0;
          for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) { vec3 t = texture2D(tDiffuse, vUv + vec2(i, j) * px).rgb; if (!bad(t)) { s += t; n += 1.0; } }
          c = n > 0.0 ? s / n : vec3(0.0); }
        gl_FragColor = vec4(min(max(c, vec3(0.0)), vec3(12.0)), 1.0); }`}));let Fn=new fs({uniforms:{tDiffuse:{value:null},uSun:{value:new ie(.5,.8)},uOn:{value:0},uThresh:{value:.7},uTint:{value:new ye(1,.9,.72)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uOn, uThresh; uniform vec3 uTint; varying vec2 vUv;
      void main(){ vec3 base = texture2D(tDiffuse, vUv).rgb;
        if (uOn < 0.001) { gl_FragColor = vec4(base, 1.0); return; }
        vec2 d = (vUv - uSun) * (0.92 / 40.0); vec2 p = vUv; vec3 acc = vec3(0.0); float w = 1.0;
        for (int i = 0; i < 40; i++) { p -= d; vec3 s = texture2D(tDiffuse, p).rgb; float l = dot(s, vec3(0.3333));
          acc += s * clamp((l - uThresh) / max(l, 1e-3), 0.0, 1.0) * w; w *= 0.955; }
        vec3 add = acc * (uOn / 40.0) * uTint; add = add / (1.0 + dot(add, vec3(0.3333)));    // rays brighten, never white out the frame
        gl_FragColor = vec4(base + add * 0.9, 1.0); }`});Ln.addPass(Fn);let ys=new Vr(new ie(2,2),.22,.6,1.6),Ys=ys.materialHighPassFilter;Ys.fragmentShader=Ys.fragmentShader.replace("vec4 texel = texture2D( tDiffuse, vUv );","vec4 texel = texture2D( tDiffuse, vUv ); if (texel.r != texel.r || texel.g != texel.g || texel.b != texel.b) texel = vec4(0.0); texel.rgb = min(texel.rgb, vec3(4.0));"),Ys.needsUpdate=!0,Ln.addPass(ys),Ln.addPass(new nl);let li=new fs({uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new ie(1,1)},uVeil:{value:0},uVeilCol:{value:new ye(.96,.93,.88)},uSat:{value:1.22},uCon:{value:.38},uWarm:{value:0},uNight:{value:0},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVeil, uSat, uCon, uWarm, uNight, uFlash; uniform vec2 uRes; uniform vec3 uVeilCol; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
      void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb;
        c = mix(c, c * c * (3.0 - 2.0 * c), uCon);                       // punchy contrast, like Blender's AgX Punchy
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); c = mix(vec3(l), c, uSat);
        c *= vec3(1.0 + uWarm * 0.06, 1.0, 1.0 - uWarm * 0.08);           // each world's time of day: warm afternoons, cool nights
        c = mix(c, c + vec3(0.02, 0.025, 0.04) * (1.0 - l), max(-uWarm, 0.0) * 0.6);   // night: lifted cool shadows
        if (uNight > 0.001) {                                                // the storm: day turned to moonlit night, as film does it
          float L = dot(c, vec3(0.2126, 0.7152, 0.0722));
          vec3 night = vec3(0.4, 0.53, 0.8) * pow(L, 1.25) * 0.62 + vec3(0.012, 0.017, 0.032);
          night = mix(night, c * vec3(0.45, 0.58, 0.95) * 0.5, 0.22);
          float warm = smoothstep(0.2, 0.42, (c.r - c.b) / max(c.r, 1e-3)) * smoothstep(0.015, 0.08, L);   // amber light, fire and gold keep their colour in the dark
          night = mix(night, c * 0.95, warm);
          night += vec3(0.5, 0.62, 0.95) * uFlash * (0.08 + 0.9 * L);          // lightning lights the whole scene for an instant
          c = mix(c, night, uNight);
        }
        vec2 d = vUv - 0.5; c *= 1.0 - 0.32 * smoothstep(0.2, 0.85, dot(d, d) * 2.2);
        c += (h(vUv * uRes) - 0.5) * 0.018;
        c = mix(c, uVeilCol, uVeil);                                         // the light you step into between worlds
        gl_FragColor = vec4(c, 1.0); }`});Ln.addPass(li);let xn=0,Sn=0,_s=0,Oo=0,Ks=0,ch=0,yn=g.domElement,Xr=()=>{let j=et<0?-1:et-1;for(let he=Math.max(0,et);he<fn.length&&De[he];he++)j=he;return j<0?De[0]?dn[0][1]:Ui*.9:j+1<fn.length&&!De[j+1]?dn[j][0]+(dn[j][1]-dn[j][0])*.8:dn[j][1]},P=()=>{let j=Math.max(0,et);for(;j>0&&De[j-1];)j--;return j===0?0:dn[j][0]},V=j=>{j.preventDefault(),!f&&(xn=at.clamp(xn+j.deltaY*32e-5*Ui,P(),Xr()))},Z=null,$=j=>{Z=j.touches[0].clientY},W=j=>{if(Z==null||f)return;let he=j.touches[0].clientY;xn=at.clamp(xn+(Z-he)*.0011*Ui,P(),Xr()),Z=he,j.preventDefault()},we=j=>{let he=yn.getBoundingClientRect();if(_s=((j.clientX-he.left)/he.width-.5)*2,Oo=((j.clientY-he.top)/he.height-.5)*2,re.drag){let fe=j.clientX-re.x;re.x=j.clientX,re.a+=fe*.012,re.v=at.clamp(fe*.012/Math.max(qr,1/120),-12,12)}},Le=j=>{Sn/Ui*Gs<gs*.9&&(re.drag=!0,re.x=j.clientX,yn.style.cursor="grabbing")},He=()=>{re.drag=!1,yn.style.cursor=Sn/Ui*Gs<gs*.9?"grab":""};yn.addEventListener("pointerdown",Le),addEventListener("pointerup",He);let ke=j=>{o||((j.key==="ArrowDown"||j.key==="PageDown"||j.key===" ")&&(xn=Math.min(Xr(),xn+.03)),(j.key==="ArrowUp"||j.key==="PageUp")&&(xn=Math.max(P(),xn-.03)))};yn.addEventListener("wheel",V,{passive:!1}),yn.addEventListener("touchstart",$,{passive:!0}),yn.addEventListener("touchmove",W,{passive:!1}),yn.addEventListener("pointermove",we),addEventListener("keydown",ke);let Oe={pr:Math.min(devicePixelRatio,p.pr),acc:0,n:0,hold:0},tt=()=>{let j=i.clientWidth||innerWidth,he=i.clientHeight||innerHeight,fe=Math.min(devicePixelRatio,p.pr,Oe.pr);g.setPixelRatio(fe),Ln.setPixelRatio(fe),g.setSize(j,he,!1),Ln.setSize(j,he),v.aspect=j/he,v.updateProjectionMatrix(),li.uniforms.uRes.value.set(j*g.getPixelRatio(),he*g.getPixelRatio()),ue.uPxAng.value=2*Math.tan(at.degToRad(v.fov)/2)/(he*g.getPixelRatio());let Be=he*g.getPixelRatio()*.5/Math.tan(at.degToRad(v.fov)/2);if(oe&&(oe.material.uniforms.uPx.value=Be),st){let Ye=g.getPixelRatio();st.setSize(Math.round(j*Ye),Math.round(he*Ye)),_e.setSize(Math.round(j*Ye/3),Math.round(he*Ye/3));for(let Ge of[Te,...De.map(ft=>ft&&ft.portalQuad)])Ge&&Ge.material.uniforms.uRes.value.set(j*Ye,he*Ye)}De.forEach(Ye=>Ye&&Ye.setPx(Be))},Ve=new ResizeObserver(tt);Ve.observe(i),tt();let ut=()=>{tt(),matchMedia(`(resolution: ${devicePixelRatio}dppx)`).addEventListener("change",ut,{once:!0})};ut();let St=new At,Rt=new At,pn=new At,gt=new vn,We=new Ke,xi=new Ke,yt=new E,Kn=new E,Ms=new E,Dn=new E,Ni=new E,Tt=vs(),zn=new E,Ji=new E,Tn=new At,yi=new E(0,1,0),Zn=new E,qr=1/60;function jf(j,he,fe){let Be=at.clamp(j,0,1)*Gs;Tt.sample(Be,zn,Ji),v.position.copy(zn),v.lookAt(Ji);let Ye=Math.abs(xn-Sn)<.002&&!re.drag?1:0;return Ks+=(_s*Ye-Ks)*.02,pn.setFromEuler(gt.set(0,-Ks*.025,0,"YXZ")),v.quaternion.multiply(pn),re.drag||(re.a+=re.v*fe,re.v+=(.22-re.v)*(1-Math.exp(-fe*.9))),Ee.lookAt(v.position.x,ce.p.y,v.position.z),Tn.copy(Ee.quaternion).multiply(new At().setFromAxisAngle(yi,re.a)).multiply(J),Zn.copy(ce.p),Zn.y+=Math.sin(he*.9)*.12,ve.matrix.compose(Zn,Tn,ce.s),ve.visible=v.position.z>40,Be}let uh=new Ke,hh=new Bs,dh=new Cn,fh=new ye(.95,.9,.82),Yr=new E,ph=new E,mh={palace:{rays:.35,thresh:.85,sat:1.18,con:.36,warm:.3},mithraki:{rays:.3,thresh:.9,sat:1.12,con:.34,warm:.2},revisetax:{rays:.55,thresh:.8,sat:1.12,con:.36,warm:.4},bisikaapi:{rays:.9,thresh:.62,sat:1.18,con:.4,warm:.25},glavida:{rays:.3,thresh:.75,sat:1.15,con:.38,warm:.1},innovious:{rays:.4,thresh:.8,sat:1.15,con:.34,warm:-.3},houseofmoh:{rays:.45,thresh:.7,sat:1.1,con:.34,warm:.15},cosmos:{rays:.15,thresh:.85,sat:1.05,con:.36,warm:-.8},perseid:{rays:0,thresh:1,sat:1.1,con:.3,warm:-.5}},dl=null;document.fonts.load("600 150px Satoshi").catch(()=>{}).finally(()=>{dl=Ue(["Nomadiic Horse Designs"],x)});let Qf=(j,he)=>{let fe=dl,Be=at.smoothstep(he,.5,2.6)*(1-at.smoothstep(j,gs*.75,gs*1.15));if(fe.visible=Be>.001,!fe.visible)return;let Ye=18,Ge=Math.tan(at.degToRad(v.fov/2)),ft=at.clamp((1.1-v.aspect)/.6,0,1);Pe.set(0,0,-1).applyQuaternion(v.quaternion),it.set(0,1,0).applyQuaternion(v.quaternion),fe.position.copy(v.position).addScaledVector(Pe,Ye).addScaledVector(it,Ye*Ge*at.lerp(.62,.5,ft)),fe.quaternion.copy(v.quaternion),fe.scale.setScalar(2*Ye*Ge*v.aspect*at.lerp(.62,.9,ft)/20),fe.u.uTime.value=he,fe.u.uAssemble.value=Be,fe.u.uDance.value=.3+(1-Be)*2.2,fe.userData.halo.material.uniforms.uA.value=Be*.6},gh=new Br,vh=0,xh=!0;function yh(){if(!xh)return;vh=requestAnimationFrame(yh);let j=Math.min(gh.getDelta(),.05),he=gh.elapsedTime;Sn+=(xn-Sn)*(1-Math.exp(-j*3.2)),qr=j;let fe=-1;for(let Je=0;Je<fn.length;Je++)Sn>=dn[Je][0]&&De[Je]&&(fe=Je);if(fe!==et){et=fe;for(let Je=0;Je<fn.length;Je++)(Je<fe-1||Je>fe+2)&&k(Je);fe>=1&&!mt?(lt(x),mt=!0):fe===0&&mt?(mt=!1,(async()=>{let Je=new Set;x.traverse(ht=>{for(let Lt of[].concat(ht.material||[])){for(let Bt of Object.values(Lt))Bt&&Bt.isTexture&&!Bt.isRenderTargetTexture&&Je.add(Bt);for(let Bt of Object.values(Lt.uniforms||{}))Bt&&Bt.value&&Bt.value.isTexture&&!Bt.value.isRenderTargetTexture&&Je.add(Bt.value)}});for(let ht of Je){if(et!==0)return;g.initTexture(ht),await Ce()}})()):fe<0&&(mt=!1)}st&&xt(fe);let Be,Ye,Ge;if(fe>=0){let Je=De[fe],ht=(Sn-dn[fe][0])/(dn[fe][1]-dn[fe][0]);Je.pose(ht,v),Je.update(he,j,ht,v),De.forEach(Lt=>{if(Lt&&Lt!==Je)for(let Bt of Lt.huds||[])Bt.H.visible=!1});for(let Lt of Je.huds||[])Dt(Lt.H,Lt.at,ht,he);qs.scene=Je.scene,g.toneMappingExposure=Je.exposure,ve.visible=!1,Be=Je.exit,Ye=Je.portalQuad,Ge=De[fe+1],x.visible&&Te&&(Te.visible=!1)}else{let Je=jf(Sn/Ui,he,j);qs.scene=x,dl&&Qf(Je,he-a),g.toneMappingExposure=e.exposure??.95,Be=P_,Ye=Te,Ge=De[0]}De.forEach(Je=>{Je&&Je.portalQuad&&Je.portalQuad!==Ye&&(Je.portalQuad.visible=!1)}),fe>=0&&Te&&(Te.visible=!1);let ft=Be.origin,It=Math.hypot(v.position.x-ft[0],v.position.z-ft[2]),Ct=fe>=0?De[fe].entry.origin:null,$n=Ct?Math.hypot(v.position.x-Ct[0],v.position.z-Ct[2]):99,ci=It<7||$n<3||fe<0&&v.position.z<-44||fe>=0&&De[fe].closeUp?.(v.position);if(v.near<.5!==ci&&(v.near=ci?.08:1,v.updateProjectionMatrix()),Ye){Ye.updateMatrixWorld(),v.updateMatrixWorld(),uh.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),hh.setFromProjectionMatrix(uh),Ye.geometry.boundingSphere||Ye.geometry.computeBoundingSphere(),dh.copy(Ye.geometry.boundingSphere).applyMatrix4(Ye.matrixWorld),Ye.visible=hh.intersectsSphere(dh)&&(fe>=0||v.position.z<-22);let Je=Ye.material.uniforms,ht=!!Ge;if(Je.uReady.value=ht?1:0,ht||Je.uCol.value.copy(fe>=0&&De[fe].scene.background?De[fe].scene.background:fh).lerp(fh,.5),Ye.visible&&ht){let Lt=It>26?_e:st;Je.tP.value=Lt.texture;let Bt=Ff(Ge.entry,Be);Re.copy(v),Re.matrixAutoUpdate=!1,Re.matrixWorld.multiplyMatrices(Bt,v.matrixWorld),Re.matrixWorldInverse.copy(Re.matrixWorld).invert(),Re.near=.08,Re.updateProjectionMatrix(),Re.matrixWorld.decompose(Re.position,Re.quaternion,Re.scale),Ge.update(he,j,0,Re),g.setRenderTarget(Lt),g.render(Ge.scene,Re),g.setRenderTarget(null)}}let ws=0;for(let Je=0;Je<fn.length;Je++)if(fn[Je].veil){let ht=1-at.smoothstep(Math.abs(Sn-dn[Je][0]),.0015,.014);ht>ws&&(ws=ht,li.uniforms.uVeilCol.value.setRGB(...fn[Je].veil))}li.uniforms.uVeil.value=ws;{let Je=fe>=0?fn[fe].key:"palace",ht=mh[Je]||mh.palace,Lt=fe>=0?De[fe].sun:z,Bt=fe<0&&v.position.z<-24;if(Lt&&ht.rays>0&&!Bt){Yr.copy(v.position).addScaledVector(Lt,1e3).project(v),v.getWorldDirection(ph);let Bo=at.smoothstep(ph.dot(Lt),.05,.45),fl=1-at.smoothstep(Math.hypot(Yr.x,Yr.y),1,1.8);Fn.uniforms.uSun.value.set(Yr.x*.5+.5,Yr.y*.5+.5),Fn.uniforms.uOn.value=ht.rays*Bo*fl*(1-ws),Fn.uniforms.uThresh.value=ht.thresh}else Fn.uniforms.uOn.value=0;let Fi=li.uniforms;Fi.uSat.value+=(ht.sat-Fi.uSat.value)*.05,Fi.uCon.value+=(ht.con-Fi.uCon.value)*.05,Fi.uWarm.value+=(ht.warm-Fi.uWarm.value)*.05}let Zs=Sn;if(w.update(Zs,he),he>6&&ne&&ne.value>=1&&(Oe.acc+=j,Oe.n++,Oe.acc>1.2)){let Je=Oe.n/Oe.acc;Oe.acc=0,Oe.n=0,Oe.hold=Math.max(0,Oe.hold-1);let ht=Math.min(devicePixelRatio,p.pr);Oe.low=Je<45?(Oe.low||0)+1:0,Oe.low>=3&&Oe.pr>1&&Oe.hold===0&&(Oe.pr=Math.max(1,Oe.pr-.25),Oe.hold=4,Oe.low=0,tt())}if(ne&&ne.value<1&&(ne.value=Math.min(1,ne.value+j*.7)),O.uTime.value=he,li.uniforms.uTime.value=he%10,n){let Je=v.position.z,ht=fe<0?at.smoothstep(Je,-53,-47):0,Lt=at.smoothstep(Je,-26,-18);s.uNight.value=ht,s.uFront.value=Je-at.lerp(13,46,Lt),s.uGlowK.value=1-at.smoothstep(Je,70,125);let Bt=o?0:r.update(j,ht>.05)*(.25+.75*at.smoothstep(v.position.z,-26,-18));li.uniforms.uNight.value=ht,li.uniforms.uFlash.value=Bt*ht,X.material.uniforms.uNight.value=ht,X.material.uniforms.uFlash.value=Bt,X.material.uniforms.uT.value=he,ee.visible=ht*Lt>.01,ee.material.uniforms.uA.value=ht*Lt,ee.material.uniforms.uFl.value=Bt,!o&&Math.abs(ht*Lt-r.rain)>.05&&r.setRain(ht*Lt),Sn/Ui*Gs>gs*.35&&l.hideHead()}v.getWorldDirection(Ni),ue.uCenter.value.set(v.position.x+Ni.x*34,v.position.z+Ni.z*34),b&&G.value<1&&(G.value=Math.min(1,G.value+j*.8)),(!o||l.diving)&&Ln.render(j)}return yh(),u(1,"ready"),l&&l.ready(),e.debug&&Object.assign(window,{__scene:x,__composer:Ln,__renderer:g,__camera:v,__bloom:ys}),{get progress(){return Sn},set progress(j){xn=j},ready:In,destroy(){xh=!1,cancelAnimationFrame(vh),Ve.disconnect(),yn.removeEventListener("wheel",V),yn.removeEventListener("touchstart",$),yn.removeEventListener("touchmove",W),yn.removeEventListener("pointermove",we),removeEventListener("keydown",ke),yn.removeEventListener("pointerdown",Le),removeEventListener("pointerup",He),w.destroy(),x.traverse(j=>{j.geometry?.dispose?.();let he=j.material;he&&(Array.isArray(he)?he:[he]).forEach(fe=>fe.dispose())}),Ln.dispose?.(),g.dispose(),yn.remove(),l&&l.destroy(),r&&r.destroy()}}}export{PM as mount};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
